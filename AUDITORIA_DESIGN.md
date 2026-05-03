# Auditoria de Design — Vereda
**Data:** 2026-05-03 | **Escopo:** Editor + 4 páginas editoriais + mobile

---

## Sumário executivo

| Severidade | Qtd |
|---|---|
| 🔴 CRÍTICO | 5 |
| 🟠 ALTO | 7 |
| 🟡 MÉDIO | 9 |
| 🟢 BAIXO | 6 |

---

## 🔴 CRÍTICOS

---

### C1 — "Prova de autoria" quebra linha no header (desktop)
**Onde:** `index.html` — nav principal  
**O que:** O label "Prova de\nautoria" ocupa 2 linhas no tab de navegação enquanto todos os outros tabs têm 1 linha. Isso cria altura inconsistente na navbar e desalinhamento visual. Visível no screenshot desde resolução padrão.  
**Fix:** Renomear para "Autoria" ou "Prova de autoria" com `white-space: nowrap` no elemento.

---

### C2 — Links mortos no footer das páginas editoriais
**Onde:** `vereda-revisao-manuscrito.html` (linhas 179–180) e `vereda-bloqueio-criativo.html` (linhas 179–180)  
**O que:** Os footers apontam para `vereda-personagens.html` e `vereda-dialogos.html` — páginas que **não existem** no repositório. Qualquer usuário que clicar vai cair num 404.  
```html
<!-- revisao.html footer -->
<a href="./vereda-personagens.html">Ou: como criar personagens memoráveis →</a>
<a href="./vereda-dialogos.html">Ou: como escrever diálogos →</a>

<!-- bloqueio.html footer -->
<a href="./vereda-personagens.html">Ou: como criar personagens memoráveis →</a>
```
**Fix:** Substituir pelos links reais existentes (`vereda-primeiras-linhas.html`, `vereda-titulo-do-livro.html`) ou remover os links secundários até as páginas existirem.

---

### C3 — Design System fragmentado: 4 paletas diferentes sem sistema unificado
**Onde:** Todas as páginas editoriais  
**O que:** Cada página editorial define seu próprio `:root` com variáveis independentes e cores completamente diferentes:
- `vereda-revisao-manuscrito.html`: azul `#1a2a4a`, acento vermelho-tijolo `#c44a2a`
- `vereda-bloqueio-criativo.html`: verde `#0f2a1a`, ouro `#b8920a`
- `vereda-primeiras-linhas.html`: paleta própria
- `vereda-titulo-do-livro.html`: paleta própria
- `index.html`: paleta do app completamente diferente

Nenhuma variável é compartilhada. Não há arquivo CSS central. O "Vereda" parece 5 sites diferentes com estilos copiados manualmente.  
**Fix:** Criar `vereda-editorial.css` com o sistema de design compartilhado e importar em todas as páginas editoriais.

---

### C4 — Nav header do editor cortado em viewport estreita
**Onde:** `index.html` — header — ~1000px de largura  
**O que:** Em viewports menores que ~1100px, os botões do lado direito do header ("Pronto sem internet", "Instalar", "Vereda", ícone de olho, engrenagem) ficam cortados ou comprimidos fora do viewport. O painel direito de análise linguística ("Análise Linguística" / "47 WPM") é truncado — texto visível cortado na borda direita da tela.  
**Fix:** Adicionar `overflow: hidden` ou `flex-shrink` nos elementos da direita, ou usar breakpoints para ocultar labels e manter só ícones abaixo de 1100px.

---

### C5 — Modal "Nova nota" sem scroll em viewports pequenas
**Onde:** `index.html` — modal "Nova nota"  
**O que:** O modal tem ~600px de altura fixa. Em monitores de 768px ou laptops com tela menor, a parte inferior do modal (os 3 cards de criação: "Nota rápida", "Manuscrito em branco", "A partir do guia") fica cortada abaixo da viewport sem possibilidade de scroll.  
**Fix:** Adicionar `max-height: 90vh; overflow-y: auto` ao container do modal.

---

## 🟠 ALTOS

---

### A1 — Painel direito ("Análise Linguística") sem fallback vazio
**Onde:** `index.html` — painel direito  
**O que:** O painel de análise sempre mostra dados de um texto de exemplo (47 WPM, "terra (4)", etc). Se o usuário criar uma nota nova em branco, os dados do texto anterior permanecem visíveis — dando a impressão de análise do texto atual quando na verdade são dados stale.  
**Fix:** Limpar o painel quando o documento ativo não tem texto. Exibir estado vazio com mensagem: "Comece a escrever para ver a análise."

---

### A2 — Painel esquerdo "Guia de Escrita" não tem label de ofício visível
**Onde:** `index.html` — painel esquerdo de template  
**O que:** O painel mostra só os templates de ficção. Não há indicação visual de que existe navegação por ofício (ficção, roteiro, poesia, etc.) acima dos tags. O usuário que quer "Slam" precisa saber que ele está em "Poesia" — mas não há seletor de ofício visível no painel. Os tags mostram só o subconjunto atual sem contexto.  
**Fix:** Adicionar selector de ofício no topo do painel (abas ou dropdown) antes da lista de templates.

---

### A3 — "Academia" clicável no nav não abre a seção Academia
**Onde:** `index.html` — nav tab "Academia"  
**O que:** Clicar no tab "Academia" no header **não ativa a seção Academia** no conteúdo principal. O painel esquerdo continua mostrando Hierarquia/Ferramentas, e o conteúdo central não muda. A funcionalidade de Academia (grid de guias) está no `index.html` mas não é acessada pelo tab do nav — está acessível apenas por `Academia prática` no sidebar esquerdo ou pelo toast de 90s.  
**Fix:** O tab "Academia" no nav deve rolar/navegar para a seção Academia ou ativá-la no painel central.

---

### A4 — Footer das páginas editoriais com `--fl` reusado como nome de variável CSS conflitante
**Onde:** `vereda-revisao-manuscrito.html` linha 67 e `vereda-bloqueio-criativo.html` linha 61  
**O que:** A variável `--ft` é usada para fonte serif e a classe `.fl2` é um elemento do footer — mas `--fl` também é usada como variável de font-family (Josefin Sans). O nome `.fl2` do elemento colide conceitualmente com a variável `--fl`. Em uma refatoração, isso vai gerar bugs silenciosos.  
**Fix:** Renomear a classe do footer para `.footer-link` ou `.fc-secondary`.

---

### A5 — Tipografia do editor principal (`font-size: 19px`) inconsistente com páginas editoriais
**Onde:** Comparando `index.html` vs páginas editoriais  
**O que:** O editor usa a tipografia do sistema do app (Inter/sans-serif). As páginas editoriais usam Cormorant Garamond + Crimson Pro + Josefin Sans. Não há nenhum elemento tipográfico que ligue visualmente as páginas editoriais ao app. Um usuário que vai do guia para o editor sente que mudou de produto.  
**Fix:** Pelo menos o header/branding das páginas editoriais deveria usar os tokens tipográficos do app, ou o app deveria importar a fonte editorial.

---

### A6 — Botão "Abrir o Vereda →" nas páginas editoriais vai para `./index.html` sem âncora
**Onde:** Footer de `vereda-revisao-manuscrito.html` e `vereda-bloqueio-criativo.html`  
**O que:** O CTA principal do footer leva para `./index.html`. Isso abre o editor do zero. Se o usuário veio de um contexto de escrita (estava no editor, foi ler o guia, voltou), ele perde o estado da sessão. Além disso, se o servidor não está rodando o `index.html` com hash routing, pode abrir na tela errada.  
**Fix:** Adicionar âncora: `./index.html#editor`. Considerar `target="_blank"` para preservar a aba do guia.

---

### A7 — Ícone de olho (preview) e engrenagem (settings) sem label ou tooltip
**Onde:** `index.html` — header, extrema direita  
**O que:** Os dois ícones finais do header (olho e engrenagem) não têm tooltip, aria-label, ou texto auxiliar. Um usuário novo não sabe o que fazem. O ícone de engrenagem (settings) está desativado — mas parece clicável visualmente, sem indicação de "em breve" ou opacidade reduzida.  
**Fix:** Adicionar `title` e `aria-label`. Reduzir opacidade do settings para 0.4 + cursor `not-allowed`.

---

## 🟡 MÉDIOS

---

### M1 — Classe `.fl2` mascarada por `--fl` (variável de fonte) no mesmo escopo
*já documentado em A4, mas também afeta leitura do código*

### M2 — Sem favicon personalizado visível nas páginas editoriais
**Onde:** `vereda-revisao-manuscrito.html`, `vereda-bloqueio-criativo.html`  
**O que:** Nenhuma das páginas editoriais tem `<link rel="icon">` no `<head>`. O browser usa o ícone padrão — losango genérico. O `index.html` tem favicon configurado, as páginas de conteúdo não.  
**Fix:** Adicionar `<link rel="icon" href="./favicon.ico">` no head de cada página editorial.

---

### M3 — Sem meta `og:image` em nenhuma página editorial
**Onde:** Todas as páginas editoriais  
**O que:** As páginas têm `og:type`, `og:title`, `og:description` — mas não têm `og:image`. Quando compartilhadas no WhatsApp, Twitter ou LinkedIn, o preview aparece sem imagem — muito menos atraente.  
**Fix:** Criar uma imagem de capa 1200×630px para a Academia (pode ser gerada) e adicionar `<meta property="og:image" content="...">`.

---

### M4 — Falta de `<nav>` semântico nas páginas editoriais
**Onde:** `vereda-revisao-manuscrito.html`, `vereda-bloqueio-criativo.html`  
**O que:** As páginas editoriais não têm elemento `<nav>` — apenas um `<header>` com links inline. Isso prejudica acessibilidade (screen readers) e SEO (crawlers esperam `<nav>` para entender links de navegação).  
**Fix:** Envolver links de navegação em `<nav aria-label="Navegação editorial">`.

---

### M5 — Falta de `alt` nos ícones Material Symbols usados como conteúdo
**Onde:** `index.html` — sidebar, toolbar  
**O que:** Ícones Material Symbols renderizados como texto (ligatures) não têm `aria-label` ou `aria-hidden`. Leitores de tela vão ler "bookmark" ou "folder_open" literalmente.  
**Fix:** Adicionar `aria-hidden="true"` nos ícones decorativos e `aria-label` nos funcionais.

---

### M6 — "Aderência à forma: 68%" sempre visível mesmo sem template ativo
**Onde:** `index.html` — painel de guia  
**O que:** O indicador de aderência à forma mostra 68% para o texto de exemplo. Se o usuário cria uma nota sem template, o percentual deveria sumir ou mostrar "—" em vez de dados do documento anterior.

---

### M7 — Scroll horizontal silencioso nos tabs de template (mobile)
**Onde:** `index.html` — painel de template, <768px  
**O que:** Os tags de template (Ficção-relâmpago, Conto curto, etc.) ficam em linha horizontal scrollável no mobile, mas não há indicação visual (gradient, seta) de que há mais conteúdo à direita.  
**Fix:** Adicionar `background: linear-gradient(to right, transparent, white)` no lado direito do container de tabs.

---

### M8 — `vereda-revisao-manuscrito.html` e `vereda-bloqueio-criativo.html`: sem link de volta para a Academia
**Onde:** Header e footer das páginas  
**O que:** Ambas as páginas têm apenas o CTA "Abrir o Vereda" e um link para outro guia. Não há link de volta para a seção Academia do editor (`index.html#academia`) ou para a lista de guias. O usuário não tem como descobrir que existem outros 5 guias além do que está lendo.  
**Fix:** Adicionar no header: `← Todos os guias` com link para `index.html` + breadcrumb `Academia / Revisão`.

---

### M9 — Contraste insuficiente: metadados do hero (`opacity: 0.38`)
**Onde:** `vereda-revisao-manuscrito.html` linha 35, `vereda-bloqueio-criativo.html` linha 35  
**O que:** Os metadados no hero ("Leitura: 10 minutos", "Checklist de revisão") têm `color: rgba(..., 0.38)` — opacidade de 38% sobre fundo escuro. Isso provavelmente não passa WCAG AA (mínimo 4.5:1 de contraste para texto pequeno).  
**Fix:** Aumentar para `rgba(..., 0.55)` no mínimo.

---

## 🟢 BAIXOS

---

### B1 — `vereda-primeiras-linhas.html`: texto "SUBINDO A TRILHA" ilegível
**Onde:** Seção do hero, elemento lateral  
**O que:** Texto rotacionado em fonte muito pequena, quase invisível. Decorativo — mas se tem texto, deve ser legível.

### B2 — Inconsistência de capitalização nos CTAs
**Onde:** Páginas editoriais  
**O que:** Mix de "Abrir o Vereda →" e "LER O GUIA →" (uppercase). Sem regra consistente de capitalização de botões.

### B3 — `<strong>` sem reset em `.camada-c` do revisao.html
**Onde:** `vereda-revisao-manuscrito.html` — `.camada:nth-child(odd)`  
**O que:** O `<strong>` dentro das camadas azuis herda `font-weight: 600` mas a fonte (Josefin Sans em uppercase 0.65rem) já é pesada — fica visualmente poluído.

### B4 — `footer .fb2` tem `justify-content: space-between` sem fallback para 1 item
**Onde:** Páginas editoriais  
**O que:** Se o link direito do footer for removido, o layout quebra com item único alinhado à esquerda. Frágil.

### B5 — Sem `lang` específico no `<html>` do editor
**Onde:** `index.html`  
**O que:** Verificar se `lang="pt-BR"` está presente (necessário para acessibilidade e SEO local).

### B6 — Animação do toast de Academia (90s de idle) sem feedback visual de progresso
**Onde:** `index.html` — feature de toast  
**O que:** O usuário não tem como saber que o toast vai aparecer ou quando. Sem barra de progresso ou indicação.

---

## Ranking por prioridade de correção

| # | Problema | Severidade | Esforço | Impacto |
|---|---|---|---|---|
| 1 | Links mortos (personagens, diálogos) | 🔴 CRÍTICO | Baixo (10min) | Alto |
| 2 | "Prova de autoria" quebra no nav | 🔴 CRÍTICO | Baixo (5min) | Médio |
| 3 | Modal "Nova nota" sem scroll | 🔴 CRÍTICO | Baixo (5min) | Alto |
| 4 | Tab Academia não funciona no nav | 🟠 ALTO | Médio (30min) | Alto |
| 5 | Painel análise com dados stale | 🟠 ALTO | Médio (30min) | Médio |
| 6 | Favicon faltando nas editoriais | 🟡 MÉDIO | Baixo (10min) | Médio |
| 7 | og:image faltando | 🟡 MÉDIO | Médio (1h) | Médio |
| 8 — | Design system unificado | 🔴 CRÍTICO | Alto (2-3h) | Alto |
| 9 | Link de volta para Academia | 🟡 MÉDIO | Baixo (15min) | Médio |

---

## O que está funcionando bem

- **Composição tipográfica das páginas editoriais**: hierarquia clara, legível, ritmo de leitura bom
- **Paleta Calm Tech do editor**: coerente internamente, agradável
- **Template picker com scroll**: funciona em desktop, carrega rápido
- **Estrutura do modal "Nova nota"**: categorias bem organizadas, boa UX de criação
- **Exercícios com textarea**: feature diferencial — funciona e faz sentido no contexto
- **Status bar do editor**: "140 PALAVRAS · 4 PARÁGRAFOS · PRONTO PARA ESCREVER" — limpo e informativo
- **Responsividade do editor**: a compressão de 1334px → 768px não quebra estrutura principal
