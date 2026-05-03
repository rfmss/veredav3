# AUDITORIA_UX_MARINA.md

> **Para a IA que abriu este arquivo:**
> Este documento contém problemas reais encontrados no Vereda por uma auditoria de persona.
> Cada item marcado com `[ ]` é uma correção pendente. Leia, identifique os arquivos afetados
> e pergunte ao desenvolvedor por qual item quer começar antes de alterar qualquer coisa.
> Não corrija múltiplos itens em um único commit sem confirmação.

---

## Contexto

**Produto:** Vereda — editor de escrita offline-first para escritores brasileiros
**URL auditada:** https://rafa.pro.br/veredav3/
**Persona usada:** Marina, 34 anos. Escritora publicada, não técnica em tecnologia.
Sabe o que quer de uma ferramenta, tem opinião formada, pouca paciência para interface confusa.
**Data:** maio de 2025
**Maturidade estimada do produto:** 73% de um MVP apresentável (conforme VEREDA_ROADMAP.md)

---

## Problemas por prioridade

### 🔴 URGENTE — Quebram confiança imediatamente

---

#### [P1] Botão `Configurações` não faz nada

**Onde:** menu topo, ícone `settings`
**O que acontece:** o botão existe e é clicável mas não abre nada.
**Impacto:** ensina o usuário a não confiar nos outros botões do produto.
**Correção esperada:** desativar visualmente (opacity reduzida) e adicionar tooltip `"Em breve"`,
ou implementar a funcionalidade mínima (tema, tamanho de fonte, largura do editor).
**Arquivos prováveis:** `app.js`, componente de menu/header

```
[ ] Desativar botão settings ou implementar funcionalidade mínima
```

---

#### [P2] Personagens e Cenários exibem números falsos

**Onde:** aba Arquivo, painel de detalhes do projeto
**O que aparece:** `"42 perfis detalhados"` e `"18 lugares catalogados"`
**O que é:** placeholder/dado de demonstração que parece dado real do usuário
**Impacto:** Marina olha e pensa — *"de onde vieram 42 personagens? Isso é meu?"*
Quebra confiança imediata. Usuário não consegue distinguir dado real de decoração.
**Correção esperada:** substituir por estado vazio honesto:
- `"Nenhum personagem ainda."` com botão `Adicionar →`
- `"Nenhum cenário ainda."` com botão `Adicionar →`
Ou, se a funcionalidade não estiver pronta, remover os cartões completamente por ora.
**Arquivos prováveis:** componente de detalhes do projeto no Arquivo

```
[ ] Remover números placeholder de Personagens e Cenários
[ ] Exibir estado vazio honesto ou remover cartões até funcionalidade estar pronta
```

---

#### [P3] Prova de Autoria aparece quebrada no estado inicial

**Onde:** painel `Prova de Escrita`, visível no painel direito do editor
**O que aparece:**
- `Integridade: 0%`
- `Eventos orgânicos: 0`
- `Cadência média: 0 WPM`
- `"Aguardando escrita orgânica"`

**Impacto:** zero por cento parece nota reprovada, não estado inicial.
Jargão técnico (`"eventos orgânicos"`, `"hash do processo criativo"`, `"intervalos entre 30ms e 2000ms"`)
é incompreensível para não técnicos.
**Correção esperada:**
- Trocar `"Integridade 0%"` por `"Aguardando sua escrita"`
- Adicionar explicação humana no estado vazio:
  > *"Enquanto você escreve, o Vereda registra o ritmo das suas teclas — não o que digitou,
  > só o tempo entre cada letra. Isso cria uma prova de que você escreveu este texto."*
- Remover ou mover os detalhes técnicos (`30ms`, `2000ms`) para um tooltip ou seção avançada
**Arquivos prováveis:** componente de Prova de Autoria, provavelmente relacionado a `voice-engine.js`

```
[ ] Reescrever estado vazio da Prova de Autoria com linguagem humana
[ ] Esconder detalhes técnicos de intervalo em tooltip ou seção "Avançado"
[ ] Trocar "0%" por label de estado, não de porcentagem
```

---

### 🟡 IMPORTANTE — Causam confusão e atrito

---

#### [P4] Dois sistemas de navegação com nomes diferentes para a mesma coisa

**Onde:** menu topo vs painel esquerdo do editor
**O que acontece:**

| Menu topo | Painel esquerdo |
|-----------|-----------------|
| Manuscrito | — |
| Biblioteca | Biblioteca gramatical |
| Autoria | Prova de autoria |
| Arquivo | Arquivo do escritor |
| Academia | Academia prática |

O usuário constrói dois mapas mentais do mesmo produto.
**Impacto:** o produto parece maior e mais confuso do que é.
**Correção esperada:** usar os mesmos nomes exatos nos dois lugares,
ou remover do painel esquerdo os itens que já existem no menu topo.
**Arquivos prováveis:** componente de sidebar/painel esquerdo, componente de menu

```
[ ] Unificar nomenclatura entre menu topo e painel esquerdo
```

---

#### [P5] Botão `swap_horiz` sem legenda no painel do guia

**Onde:** painel esquerdo do editor, ao lado do nome do guia ativo (`Ficção-relâmpago`)
**O que acontece:** ícone de troca sem tooltip, sem label, sem explicação.
**Impacto:** para usuária não técnica, ícone sem nome é botão invisível.
**Correção esperada:** adicionar tooltip `"Trocar guia"` ou label visível ao lado do ícone.
**Arquivos prováveis:** componente do painel de guia no editor

```
[ ] Adicionar tooltip ou label ao botão swap_horiz do guia
```

---

#### [P6] "Manuscrito ativo" é jargão técnico invisível para o usuário

**Onde:** Espelho de Voz e RimaLab — botão `"Usar manuscrito ativo"`
**O que acontece:** o usuário não sabe o que é o "manuscrito ativo" se tiver vários documentos.
**Impacto:** hesitação, insegurança, abandono da ferramenta.
**Correção esperada:** trocar por linguagem descritiva:
- `"Usar o texto que estou escrevendo agora"`
- Ou mostrar o título do documento: `"Usar 'Meu romance' (aberto no editor)"`
**Arquivos prováveis:** componentes do Espelho de Voz e RimaLab

```
[ ] Substituir "manuscrito ativo" por referência humana ao documento aberto
```

---

#### [P7] "PUBLICAR LIVRO" sem contexto visual claro

**Onde:** aba Arquivo, aparece em caixa alta sem hierarquia visual clara
**O que acontece:** não parece botão, não parece seção, não parece banner.
É ruído visual que não comunica nada acionável.
**Impacto:** confusão sobre o que é clicável e o que é decorativo.
**Correção esperada:** transformar em cartão com título, descrição de uma linha e ação clara,
ou mover para dentro da Academia onde faz sentido narrativo.
**Arquivos prováveis:** componente do Arquivo

```
[ ] Redesenhar "PUBLICAR LIVRO" como cartão com hierarquia visual clara
[ ] Avaliar se o elemento pertence ao Arquivo ou à Academia
```

---

#### [P8] Vocabulário Decolonizador mostra "Observador pronto" sem texto

**Onde:** seção Vocabulário Decolonizador na Academia
**O que acontece:** o estado `"Observador pronto. Nada sai do navegador."` aparece
mesmo sem nenhum texto sendo analisado e sem o toggle ativado.
**Impacto:** parece que a ferramenta está observando o tempo todo, o que pode gerar
desconforto mesmo sendo tecnicamente inofensivo.
**Correção esperada:** mostrar "Observador pronto" apenas quando:
1. o toggle estiver ativado E
2. houver texto para analisar
**Arquivos prováveis:** componente do Vocabulário Decolonizador

```
[ ] Condicionando exibição de "Observador pronto" ao toggle ativo + texto presente
```

---

### 🟢 DESCOBERTA — O produto é maior do que parece

---

#### [P9] Sem onboarding na primeira entrada

**Onde:** entrada geral no produto
**O que acontece:** o editor abre com texto de exemplo sem apresentação.
O usuário não sabe se o texto é dele, se deve apagar, o que fazer a seguir.
**Impacto:** Marina iniciante abandona. Marina experiente perde tempo explorando.
**Correção esperada:** na primeira entrada (verificar via localStorage se é novo usuário),
exibir tela simples:
> *"Bem-vinda ao Vereda. Por onde quer começar?"*
> `[Escrever agora]` `[Explorar as ferramentas]` `[Ver o que o Vereda faz]`

Não precisa ser tutorial longo. Três botões resolvem.
**Arquivos prováveis:** `app.js`, lógica de inicialização

```
[ ] Implementar detecção de primeiro acesso via localStorage
[ ] Criar tela de boas-vindas com 3 opções de entrada
```

---

#### [P10] RimaLab não é conectado a documentos do tipo Poesia

**Onde:** fluxo de criação de documento no Arquivo
**O que acontece:** quando o usuário cria um documento do tipo "Poesia",
nada sugere que o RimaLab existe.
**Impacto:** a ferramenta mais relevante para poetas é completamente invisível
a menos que o usuário explore toda a Academia por conta própria.
**Correção esperada:** ao abrir um documento do tipo Poesia no editor,
exibir chamada contextual no painel direito ou lateral:
> *"O RimaLab pode ajudar na escansão e nas rimas do seu poema. Abrir →"*
**Arquivos prováveis:** `app.js`, componente do editor, lógica de tipo de documento

```
[ ] Criar chamada contextual para o RimaLab quando tipo do documento for Poesia
```

---

#### [P11] Academia invisível a partir do editor

**Onde:** editor principal
**O que acontece:** a Academia tem 60 guias de ofício, Espelho de Voz, RimaLab,
Vocabulário Decolonizador — mas nada disso é sugerido enquanto o usuário escreve.
**Impacto:** o tesouro do produto fica escondido atrás de um item de menu sem destaque.
**Correção esperada:** quando o painel direito estiver em modo de baixa atividade
ou o usuário pausar a escrita por tempo significativo, mostrar chamada suave:
> *"Quer saber mais sobre o gênero que está escrevendo?
> A Academia tem 60 guias de ofício literário."*
**Arquivos prováveis:** `app.js`, componente do painel direito

```
[ ] Criar chamada contextual para a Academia após pausa na escrita
```

---

## Resumo executivo para commit

```
Problemas críticos (travam confiança):        3  →  P1, P2, P3
Problemas importantes (causam atrito):        5  →  P4, P5, P6, P7, P8
Problemas de descoberta (limitam adoção):     3  →  P9, P10, P11
─────────────────────────────────────────────────────────────────
Total de itens pendentes:                    11
```

---

## Ordem de correção recomendada

1. `[P2]` Remover placeholders falsos de Personagens/Cenários
2. `[P1]` Desativar botão Configurações mudo
3. `[P3]` Reescrever estado vazio da Prova de Autoria
4. `[P4]` Unificar nomenclatura de navegação
5. `[P5]` Adicionar label ao botão swap_horiz
6. `[P6]` Humanizar "manuscrito ativo"
7. `[P7]` Redesenhar "PUBLICAR LIVRO"
8. `[P8]` Corrigir estado do Vocabulário Decolonizador
9. `[P9]` Onboarding de primeira entrada
10. `[P10]` Conectar Poesia ao RimaLab
11. `[P11]` Chamada contextual para a Academia

---

*Gerado a partir de auditoria de persona — Marina, 34 anos.*
*Próxima auditoria sugerida: persona iniciante sem experiência de publicação.*
*Registrar correções concluídas no `PRODUCT_LOG.md` conforme padrão do projeto.*
