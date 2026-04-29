# Auditoria Mariana

Persona: Mariana, 36 anos, escritora brasileira de ficção científica, mora em Salvador, usa Chrome no notebook e Firefox no celular. Não é programadora. Nunca usou a Vereda antes. Quer escrever sem sair da plataforma.

## Jornada 1 — Primeiro Dia

Mariana abre `index.html` pela primeira vez e cai direto no editor, porque `index.html` inicia com `<div class="app-shell" data-view="editor">` e a primeira seção ativa é `data-view-panel="editor"`. Ela vê marca, abas principais, hierarquia à esquerda, editor no centro, Guia de Escrita ao lado e Análise Linguística à direita. Sem ler documentação, ela entende que está em um editor literário com ferramentas ao redor.

Ela não começa numa página vazia: `app.js` carrega `starterManuscripts` quando `localStorage.getItem("vereda.manuscripts.v1")` não existe. Isso ajuda a demonstrar o produto, mas atrasa um pouco a sensação de "este é meu primeiro manuscrito real".

Para criar seu primeiro manuscrito, Mariana precisa notar o botão "Nova nota" na lateral ou no Arquivo. O fluxo existe em `index.html` com `data-action="open-create-note"` e opções `create-quick-note`, `create-blank-manuscript` e `create-from-reference-template`. Em `app.js`, esses botões chamam `createQuickNote()`, `createBlankManuscript()` e `createFromReferenceTemplate()`. Não há um convite explícito de primeira visita dizendo "crie seu primeiro manuscrito".

Descoberta das ferramentas:

- Modo Foco: provável em menos de 5 minutos se ela olhar a topbar; há um botão com ícone `visibility` e `data-action="toggle-focus"`, mas o texto visível não diz "Modo Foco".
- Análise Linguística: ela vê o painel direito com o título "Análise Linguística", mas talvez não entenda que precisa selecionar uma palavra no texto. A lógica está em `writingArea.addEventListener("mouseup", () => captureSelectedWord(true))` e `keyup`, não em um onboarding.
- Espelho de Voz: só descobre indo até Academia e rolando até a seção "Espelho de Voz". É descobrível, mas não imediato.
- Vocabulário Decolonizador: só descobre na Academia, abaixo do Espelho de Voz. O Observador aparece como toggle dentro dessa área.

Não existe primeiro passo guiado no código. Procurei em `app.js` e `index.html` por onboarding, welcome, primeira visita, first, tour, tooltip e estado de primeira visita. O que existe são placeholders como "Comece aqui. A primeira frase abre uma vereda.", registros em `PRODUCT_LOG.md` sobre decisões de onboarding, e ações de criação. Não há lógica de onboarding, tooltip de boas-vindas, checklist inicial ou estado `firstVisit`.

Classificação: 🟡 FRICÇÃO. Ela consegue escrever, mas o primeiro dia depende de exploração.

## Jornada 2 — Continuar no Celular

Mariana escreveu por 2 horas no Chrome do notebook. O texto foi salvo em `localStorage` com a chave `vereda.manuscripts.v1`, definida na linha inicial de `app.js`. Quando ela abre o site no Firefox do celular, esse `localStorage` não acompanha. `localStorage` é local ao navegador/dispositivo/origem. O celular abre como primeira visita ou com o estado já existente apenas naquele Firefox.

O produto tem exportar/importar acervo `.vrda`, mas depende de ação manual. O backup é acionado por botões em `index.html`: `data-action="export-backup"` e `data-action="import-backup"`. Em `app.js`, isso chama `exportBackup()` e `requestBackupImport()`.

Os protótipos `stitch_vereda_writing_editor/vereda_sincroniza_o_mobile/code.html` e `stitch_vereda_writing_editor/vereda_sincroniza_o_qr_streaming/code.html` existem como arquivos de referência. Eles não existem no produto ativo. Em `app.js`, não há chamada para esses arquivos, não há rota de sincronização, não há QR real, não há streaming e não há transferência entre dispositivos.

Classificação: 🔴 BLOQUEADOR. Mariana não consegue continuar no celular sem sair do fluxo normal e fazer export/import manual, envio de arquivo para si mesma ou outro transporte externo.

## Jornada 3 — Submeter Para Editora

A editora pede `.docx`. Em `export-engine.js`, os formatos ativos são apenas:

- `txt`, com extensão `.txt` e MIME `text/plain;charset=utf-8`;
- `md`, com extensão `.md` e MIME `text/markdown;charset=utf-8`.

O código ativo de exportação está no objeto `exporters` dentro de `exportManuscript(manuscript, format)`. Não existe exportador `.docx`.

Referências a `.docx` e PDF existem apenas como futuro/protótipo/documentação:

- `stitch_vereda_writing_editor/vereda_impress_o_e_exporta_o/code.html` mostra cards "Exportar para PDF" e "Baixar .docx", mas não é produto ativo.
- `template-engine.js` menciona `.docx`, `.pdf`, `.epub` em guia de preparação de arquivos finais.
- `PRODUCT_LOG.md` registra DOCX/EPUB/PDF como exportações futuras.

Mariana precisa sair da Vereda para converter `.md` ou `.txt` em `.docx`, usando Word, Google Docs, LibreOffice, Pandoc ou algum conversor externo.

Classificação: 🔴 BLOQUEADOR. Para submissão em `.docx`, a Vereda não entrega o arquivo pedido.

## Jornada 4 — Perder o Trabalho

Se Mariana limpa dados/cache do Chrome de modo que apague armazenamento do site, `vereda.manuscripts.v1` desaparece. Na próxima abertura, `loadState()` em `app.js` não encontra `localStorage.getItem(STORAGE_KEY)` e volta para os `starterManuscripts`. O trabalho salvo localmente não reaparece.

`backup-engine.js` e `vrda-engine.js` dependem de ação manual. O backup só é criado quando Mariana clica em "Exportar acervo"; em `app.js`, `exportBackup()` chama `VeredaBackup.createBackup(state)` e baixa um arquivo `.vrda`. A importação também depende de ação manual pelo botão "Importar".

Não há aviso visível no app sobre risco de perda por limpar dados do navegador. Em `index.html`, há botões de exportar/importar, mas não há banner, alerta, nudge periódico ou aviso de "faça backup". Em `app.js`, não há lógica de backup automático, lembrete por tempo, lembrete por quantidade de palavras ou detecção de ausência de backup.

Classificação: 🔴 BLOQUEADOR. A promessa offline/local é boa, mas sem aviso e sem backup automático a perda é silenciosa se o armazenamento do navegador for apagado.

## Jornada 5 — Instalar Como App

Em `manifest.webmanifest`, os atalhos são:

- "Manuscrito" com `"url": "."`;
- "Academia" com `"url": "."`.

Eles não são URLs distintas. Ambos abrem a mesma entrada da SPA. Não há hash, query param ou rota que abra a Academia diretamente.

Ao abrir o atalho "Academia", Mariana cai na mesma URL `.`. Como `index.html` inicia com `data-view="editor"` e o código não lê rota para trocar de aba, ela cai no editor/manuscrito, não na Academia.

Classificação: 🟡 FRICÇÃO. O app abre, mas o atalho promete Academia e entrega a tela inicial do editor.

## Autopsia de Features

`lexical-engine.js` — Mariana consegue descobrir isso sozinha em menos de 5 minutos? Parcialmente. Ela vê "Análise Linguística", mas não há instrução visível de que selecionar uma palavra atualiza o painel.

`precision-engine.js` — Mariana consegue descobrir isso sozinha em menos de 5 minutos? Sim, se estiver no editor. O Guia de Escrita já mostra aderência em porcentagem e critérios ao lado do texto.

`voice-engine.js` — Mariana consegue descobrir isso sozinha em menos de 5 minutos? Talvez não. Está na Academia, abaixo de outras áreas, e depende de entender "usar manuscrito ativo" ou colar corpus.

`decolonial-engine.js` — Mariana consegue descobrir isso sozinha em menos de 5 minutos? Talvez não. A consulta e o toggle existem na Academia, mas o termo "Vocabulário Decolonizador" pode exigir exploração.

`proof-engine.js` — Mariana consegue descobrir isso sozinha em menos de 5 minutos? Parcialmente. A aba Autoria mostra métricas e exportação, mas "prova de autoria" é conceito técnico e não há explicação inicial curta.

## Relatório Final Para o Fundador

A Vereda já é uma mesa de escrita funcional, local e coerente, mas ainda não é uma casa completa para Mariana. O maior problema não é falta de ferramenta isolada: é falta de continuidade entre dispositivos, proteção contra perda e saída editorial em formato aceito pelo mercado.

O primeiro dia funciona porque `index.html` coloca Mariana direto no editor e `app.js` salva tudo em `localStorage` na chave `vereda.manuscripts.v1`. Mas não há onboarding real. Não existe estado de primeira visita, tooltip de boas-vindas ou fluxo guiado em `app.js`/`index.html`; ela precisa descobrir "Nova nota", Modo Foco, Análise Linguística, Academia, Espelho de Voz e Observador explorando a interface.

O segundo dia quebra no celular. O estado está em `localStorage`, e isso não atravessa Chrome no notebook para Firefox no celular. Os protótipos de sincronização por QR existem em `stitch_vereda_writing_editor/`, mas não são chamados em `app.js`. Resultado: Mariana precisa sair da Vereda para transportar o próprio acervo.

A submissão para editora também quebra. `export-engine.js` só exporta `txt` e `md`. `.docx` e PDF aparecem em protótipos e guias, não no exportador ativo. Se a editora pede `.docx`, Mariana precisa usar Word, Google Docs, LibreOffice, Pandoc ou conversor externo.

O risco de perda é sério. Se Mariana limpa os dados do navegador, `loadState()` não encontra `vereda.manuscripts.v1` e restaura os manuscritos iniciais. `backup-engine.js` e `vrda-engine.js` são bons, mas dependem de clique manual. Não há banner ou lembrete visível para exportar backup.

O PWA está quase lá, mas os atalhos mentem um pouco: "Manuscrito" e "Academia" apontam para `"."` no `manifest.webmanifest`. Como o app não interpreta rota, o atalho Academia abre no editor.

OS 3 PRÓXIMOS COMMITS QUE MUDARIAM MAIS A VIDA DA MARIANA:
  1. Onboarding de primeira visita com criação guiada do primeiro manuscrito e descoberta das ferramentas essenciais + `index.html`, `app.js`, `styles.css`
  2. Backup safety net com lembrete visível, estado de último backup e exportação sugerida depois de escrita relevante + `app.js`, `index.html`, `backup-engine.js`
  3. Exportação editorial em `.docx` e atalhos PWA com rota/estado para abrir Academia diretamente + `export-engine.js`, `app.js`, `manifest.webmanifest`
