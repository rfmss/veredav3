# Auditoria de Produto Vereda

Data: 2026-04-30  
Escopo: código-fonte local do PWA Vereda, incluindo app ativo e protótipos em `stitch_vereda_writing_editor/`.  
Nota: o roadmap foi atualizado antes desta auditoria para refletir 60 guias, não 57.

## 1. MAPA DE ARQUIVOS

`index.html` -> SPA principal; contém Editor, Biblioteca, Autoria, Arquivo, Academia, modais, topbar, painéis e scripts do produto ativo.

`styles.css` -> estilos globais; define temas, layout, editor, arquivo, autoria, academia, modo foco, responsividade e componentes.

`app.js` -> orquestrador do app; controla estado, rotas por hash, localStorage, renderizações, eventos, busca, exportação, backups, PWA e ferramentas.

`archive-engine.js` -> normalização de documentos, tipos, metadados, famílias, criação de documento e resumos do Arquivo.

`backup-engine.js` -> criação, validação e restauração de backups `.vrda`.

`decolonial-engine.js` -> base local do Vocabulário Decolonizador e detector do Observador Decolonial.

`export-engine.js` -> exportação de manuscrito em `.txt` e `.md`.

`filesystem-backup-engine.js` -> autosave externo opcional via File System Access API + IndexedDB.

`lexical-engine.js` -> análise lexical/gramatical local da palavra selecionada.

`precision-engine.js` -> aderência local do texto ao guia selecionado; inclui heurísticas específicas para ENEM.

`proof-engine.js` -> prova local de autoria, sessões de escrita, eventos confiáveis, resumo e `.proof.json`.

`rights-engine.js` -> cartões consultivos de Direitos do Autor e fontes oficiais.

`service-worker.js` -> cache offline do app ativo.

`template-engine.js` -> catálogo de guias de escrita, ofícios, passos, modelos e criação de manuscrito a partir de guia.

`version-engine.js` -> snapshots e restauração de versões por manuscrito.

`voice-engine.js` -> Espelho de Voz local: métricas, heurísticas, ecos, forças, pontos cegos e exercícios.

`vrda-engine.js` -> envelope nativo `.vrda`, hash e validação.

`manifest.webmanifest` -> manifesto PWA principal; nome, ícones, start_url e atalhos.

`favicon_io/site.webmanifest` -> manifesto auxiliar gerado para favicons.

`stitch_vereda_writing_editor/*/code.html` -> protótipos HTML estáticos do Stitch; não são importados pelo app ativo.

`stitch_vereda_writing_editor/design.md` e `stitch_vereda_writing_editor/vereda_design_system/DESIGN.md` -> documentação visual/protótipo, não runtime.

## 2. LINKS E REFERÊNCIAS QUEBRADAS

Links internos do app ativo: nenhum arquivo ausente detectado em `href`/`src` do `index.html`.

Assets do service worker: nenhum arquivo ausente detectado em `CORE_ASSETS`.

Seletores `data-*` do `app.js`: nenhum seletor consultado por `querySelector` ficou sem par correspondente no `index.html`.

Funções chamadas: `node --check` passou em todos os JS ativos; não há erro sintático. Detecção completa de função indefinida em navegador é NÃO VERIFICÁVEL sem execução runtime.

Botões/links problemáticos:

- `index.html` tem botão `Configurações` sem `data-action` nem handler visível.
- `index.html` tem dois cards utilitários com `href="#"`: `Personagens` e `Cenários`; parecem atalhos visuais estáticos.
- Protótipos `stitch_vereda_writing_editor/**/code.html` têm muitos `href="#"`; são protótipos e não produto ativo.

Referências externas:

- Google Fonts e Material Symbols são chamadas externas. Se caírem ou se a primeira visita for offline, a tipografia/ícones podem degradar.

## 3. FUNCIONALIDADES PROMETIDAS × IMPLEMENTADAS

Editor com modo foco -> IMPLEMENTADO. `toggle-focus`, `exit-focus`, `focus-toolbar`, régua e preferências aparecem em `index.html`, `styles.css` e `app.js`.

Painel de guia lateral recolhível -> IMPLEMENTADO. `toggle-template-panel`, `toggle-template-side`, `template-reference` e resizer existem.

Arquivo do escritor com filtros e metadados -> IMPLEMENTADO. Há busca, filtros, ordenação, cards, documentos fixados/recentes/em andamento e formulário de metadados.

Biblioteca gramatical local -> IMPLEMENTADO. `lexical-engine.js` e aba Biblioteca analisam seleção sem rede.

Prova de autoria local -> IMPLEMENTADO. `proof-engine.js`, eventos de escrita, sessões e exportação `.proof.json` existem; só roda para `type === "manuscrito"`.

Exportação de manuscrito -> PARCIAL. Exporta `.txt` e `.md`; `.docx` e PDF seguem ausentes.

PWA offline-first (manifest + service worker) -> IMPLEMENTADO/PARCIAL. Manifest e SW existem, assets locais estão cacheados; fontes externas não são garantidas offline na primeira visita.

Academia com Guia de Ofícios -> IMPLEMENTADO. Aba Academia contém rotas de mercado, objeto livro, direitos, Espelho de Voz, Vocabulário e Guia de Ofícios.

57 guias de escrita -> IMPLEMENTADO. O código atual tem 60 guias em `template-engine.js`, acima da promessa original de 57.

Busca no Guia de Ofícios -> IMPLEMENTADO. `data-template-search` filtra guias por texto.

Medidores locais de aderência à forma -> IMPLEMENTADO. `precision-engine.js` calcula aderência e o painel lateral mostra critérios.

Medidor ENEM com 5 competências -> IMPLEMENTADO. `precision-engine.js` tem C1 a C5 e arquitetura ENEM.

Espelho de Voz (`voice-engine.js`) -> IMPLEMENTADO. Calcula métricas locais e leitura interpretativa; não promete precisão estilométrica científica.

Vocabulário Decolonizador -> IMPLEMENTADO. Consulta, filtros e Observador Decolonial local existem.

## 4. PLACEHOLDERS E CONTEÚDO INACABADO

Placeholders intencionais de escrita aparecem nos guias: campos como `[TÍTULO]`, `[tema]`, `[agente]`, `[ação]`. São modelos editáveis, não necessariamente conteúdo quebrado.

Textos com reticências aparecem em UI e modelos (`...`) como indicação de trecho, placeholder ou estado de salvamento.

Cards estáticos inacabados no produto ativo:

- `Personagens` mostra "42 perfis detalhados." mas não abre nada.
- `Cenários` mostra "18 lugares catalogados." mas não abre nada.
- Botão `Configurações` não tem comportamento implementado.

Seções de guia com menos de 3 parágrafos: o produto não estrutura guias como artigos longos; muitos guias têm listas, seções curtas e texto-base. Conteúdo é real, mas compacto. Pelo critério literal "3 parágrafos", vários guias falhariam; pelo critério de utilidade no app, não são vazios.

Guias listados sem arquivo correspondente: nenhum. Guias vivem em `template-engine.js`, não em arquivos separados.

## 5. INCONSISTÊNCIAS DE NOMENCLATURA E UX

`Manuscrito` vs `Editor`: a rota interna é `editor`, mas a aba visível chama "Manuscrito". Isso é aceitável tecnicamente, mas pode confundir auditoria e documentação.

`Biblioteca gramatical` vs `Inspeção lexical`: sidebar diz Biblioteca gramatical; tela interna diz Inspeção lexical/Biblioteca Gramatical.

`Prova de Escrita` vs `Prova de autoria`: sidebar diz Prova de autoria; tela diz Prova de Escrita; exporta `.proof.json`.

`Arquivo do escritor` vs `Detalhes do projeto`: o Arquivo lista documentos, mas o painel lateral fala "Detalhes do projeto", mesmo sem container real de projeto.

`57 guias` vs `60 guias`: corrigido no roadmap nesta rodada, mas documentos antigos de QA/Produto ainda podem citar 57.

Mensagem "Pronto sem internet": verdadeira após cache instalado, mas otimista na primeira visita antes do service worker completar.

## 6. PROBLEMAS DE PWA E OFFLINE

Arquivos do app ativo ausentes do cache: nenhum detectado.

Rotas do manifest: `start_url` e atalho Manuscrito apontam para `./#editor`; Academia aponta para `./#academia`. Correspondem às rotas por hash implementadas.

Cache e assets: `service-worker.js` usa `vereda-offline-v56` e `ASSET_VERSION = "20260430-04"`, alinhado com `index.html` e `manifest.webmanifest`.

Risco offline: Google Fonts/Material Symbols não estão no cache local. O app continua funcional, mas ícones/fonte dependem de rede na primeira carga.

Risco de persistência: localStorage é local ao navegador/dispositivo; autosave externo reduz risco no Chrome/Edge/Opera, mas Firefox/Safari não têm o mesmo fluxo automático.

## 7. FIOS SOLTOS (loose ends)

Variáveis/listeners para elementos inexistentes: nenhum seletor `data-*` ausente foi detectado no app ativo.

Handlers sem marcação inicial: `select-theme` é criado dinamicamente por `renderThemeOptions()`, então não é erro.

Botão sem handler: `Configurações` é visualmente clicável, mas não faz nada.

Links `href="#"`: dois cards utilitários ativos (`Personagens`, `Cenários`) e vários protótipos Stitch.

Arquivos importados mas não utilizados: nenhum script ativo do `index.html` parece órfão; todos expõem globais usados direta ou indiretamente.

localStorage keys:

- `vereda.manuscripts.v1` -> lida/escrita em `app.js`.
- `vereda.checklists.v1` -> lida/escrita em `app.js`.
- `vereda.backup-meta.v1` -> lida/escrita em `app.js`.
- `vereda.filesystem-backup.v1` -> IndexedDB em `filesystem-backup-engine.js`, não localStorage.

Não há divergência detectada de nome de key.

Código comentado abandonado: nenhum bloco funcional comentado relevante detectado nos arquivos ativos.

## 8. CONTAGEM REAL DE GUIAS

Total real implementado: 60 guias.

Por categoria:

- Ficção: 8 — Ficção-relâmpago, Conto curto, Romance comercial, Romance literário, Ficção científica, Fantasia brasileira, Terror e horror, Fanfiction.
- Roteiro: 6 — Roteiro de TV, Roteiro de filme, Documentário, Dramaturgia, Roteiro de games, Podcast ficcional.
- Poesia: 4 — Poesia lírica, Slam e palavra falada, Poesia digital, Letra de música.
- Não ficção: 4 — Crônica, Ensaio, Memória e autobiografia, Livro-reportagem.
- Jornalismo: 4 — Reportagem, Newsletter editorial, Crítica cultural, Coluna de opinião.
- Comercial e técnica: 7 — Copywriting, Conteúdo digital, UX writing, Roteiro para vídeo, Ghostwriting, Escrita para quadrinhos, Escrita técnica.
- Estudo e vestibular: 12 — Redação ENEM completa, Projeto de texto, Introdução ENEM, Desenvolvimento ENEM, Proposta de intervenção, Repertório sociocultural, Coesão e conectivos, Redação Fuvest e Unicamp, Dissertação escolar, Resumo e resenha, Interpretação literária, Revisão gramatical.
- Mercado editorial: 6 — Mapa de lançamento, Autopublicação independente, Submissão a editoras, Comparativo de publicação, Checklist de lançamento, Mentalidade de autor.
- Objeto livro: 6 — Partes físicas do livro, Miolo, pré e pós-texto, Ritos de entrada, Livro como arquivo digital, Página de capítulo, Glossário do livro.
- Direitos do autor: 3 — Primeiro mapa de direitos, Checklist de submissão e direitos, Leitura de contrato editorial.

Comparação com promessa original de 57: excede em 3. Comparação com roadmap atualizado: bate 60.

## 9. VEREDICTO POR ÁREA

Editor

- STATUS: Funcional.
- MAIOR PROBLEMA: exportação editorial profissional ainda não chega a `.docx`.
- RISCO PARA O USUÁRIO: escrever funciona, mas submeter para editora ainda exige ferramenta externa.

Arquivo

- STATUS: Parcial.
- MAIOR PROBLEMA: há campo `type` e metadados, mas ainda não há visão real de projeto/container literário.
- RISCO PARA O USUÁRIO: personagens, lugares e cenas existem como tipos, mas a pessoa ainda pode se frustrar procurando relações navegáveis entre eles.

Autoria

- STATUS: Funcional.
- MAIOR PROBLEMA: prova é local e útil, mas seu valor jurídico não é garantido pela própria ferramenta.
- RISCO PARA O USUÁRIO: confundir `.proof.json` com registro oficial se não ler a nuance.

Academia

- STATUS: Funcional.
- MAIOR PROBLEMA: ficou grande; a descoberta depende de exploração e busca.
- RISCO PARA O USUÁRIO: ferramentas excelentes podem passar despercebidas no primeiro uso.

Espelho de Voz

- STATUS: Funcional/Parcial.
- MAIOR PROBLEMA: heurístico, sem validação empírica ou comparação longitudinal.
- RISCO PARA O USUÁRIO: interpretar leitura de voz como diagnóstico definitivo.

## 10. LISTA DE AÇÕES PRIORITÁRIAS

1. Exportação `.docx` ausente para submissão editorial.
   Arquivo afetado: `export-engine.js`, `app.js`, `index.html`.
   Correção mínima: gerar `.docx` simples com título, metadados e corpo do manuscrito.

2. Cards `Personagens` e `Cenários` parecem clicáveis, mas não fazem nada.
   Arquivo afetado: `index.html`, `app.js`.
   Correção mínima: trocar `href="#"` por botões com filtro de tipo ou remover até existir visão dedicada.

3. Botão `Configurações` não tem ação.
   Arquivo afetado: `index.html`, `app.js`.
   Correção mínima: adicionar `data-action` e modal simples, ou ocultar o botão.

4. Mensagem "Pronto sem internet" é otimista antes do cache completar.
   Arquivo afetado: `app.js`, `index.html`.
   Correção mínima: diferenciar "Preparando offline" de "Pronto sem internet" após confirmação do service worker.

5. Arquivo ainda não é projeto literário completo.
   Arquivo afetado: `archive-engine.js`, `app.js`, `styles.css`.
   Correção mínima: criar visão agrupada por `type` com relações básicas entre cena, personagem, lugar e projeto.

6. Fontes e ícones dependem de Google Fonts.
   Arquivo afetado: `index.html`, `styles.css`, `service-worker.js`.
   Correção mínima: fallback local ou reduzir dependência de ícone remoto para PWA offline real.

7. Nomenclatura de Autoria oscila entre "Prova de Escrita" e "Prova de autoria".
   Arquivo afetado: `index.html`, `app.js`, `PRODUCT_LOG.md`.
   Correção mínima: escolher um nome de interface e usar o outro apenas como explicação.

8. Descoberta inicial é fraca.
   Arquivo afetado: `app.js`, `index.html`.
   Correção mínima: onboarding local de primeira visita com 3 ações: escrever, exportar/backup, abrir Academia.

9. Autosave externo não cobre Firefox/Safari.
   Arquivo afetado: `filesystem-backup-engine.js`, `app.js`.
   Correção mínima: fallback mais explícito de lembrete periódico para exportar `.vrda`.

10. Documentos antigos ainda citam estados ultrapassados.
    Arquivo afetado: `MAPA_PROJETO.md`, `AUDITORIA_MARIANA.md`, `QA_2026-04-28.md`.
    Correção mínima: marcar como histórico ou atualizar pontos superados como atalhos PWA e contagem de guias.
