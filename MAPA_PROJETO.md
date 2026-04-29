# Mapa do Projeto Vereda

Documento de mapeamento estrutural. Sem análise de qualidade, prioridade ou recomendação.

## Árvore do Projeto

Estrutura relevante:

```text
.
├── index.html
├── styles.css
├── app.js
├── lexical-engine.js
├── proof-engine.js
├── vrda-engine.js
├── backup-engine.js
├── archive-engine.js
├── version-engine.js
├── export-engine.js
├── template-engine.js
├── precision-engine.js
├── voice-engine.js
├── decolonial-engine.js
├── service-worker.js
├── manifest.webmanifest
├── README.md
├── DESIGN.md
├── VEREDA_ROADMAP.md
├── PRODUCT_LOG.md
├── QA_2026-04-28.md
├── QA_2026-04-29.md
├── favicon_io/
├── icons/
├── .github/
│   └── instructions/
└── stitch_vereda_writing_editor/
    ├── vereda_academia_estilo/
    ├── vereda_arquivo_do_escritor/
    ├── vereda_autoria_registro/
    ├── vereda_biblioteca_gramatical/
    ├── vereda_design_system/
    ├── vereda_editor_home/
    ├── vereda_hist_rico_e_formata_o/
    ├── vereda_impress_o_e_exporta_o/
    ├── vereda_lan_amento_mercado/
    ├── vereda_modo_foco/
    ├── vereda_notas_r_pidas_mobile/
    ├── vereda_sincroniza_o_mobile/
    └── vereda_sincroniza_o_qr_streaming/
```

Arquivos ativos do produto:

`index.html` → tela única do app; o usuário escreve manuscritos, navega entre Manuscrito, Biblioteca, Autoria, Arquivo e Academia, usa painéis laterais, modo foco, criação de notas, exportação, importação, observadores e ferramentas locais.

`styles.css` → aparência de todo o app; define paletas, layout principal, editor, biblioteca, autoria, arquivo, academia, painéis, modo foco, modal de nova nota, responsividade e estados visuais.

`app.js` → orquestra a aplicação; controla estado, navegação interna, renderização das abas, escrita, salvamento local, temas, painéis, modo foco, arquivo, autoria, versões, exportação, Academia, Espelho de Voz, Vocabulário Decolonizador e Observador Decolonial.

`lexical-engine.js` → motor local da Análise Linguística; o usuário vê classe provável, função, campo semântico, ocorrências e contexto da palavra selecionada.

`proof-engine.js` → motor local da Prova de Autoria; o usuário registra cadência, eventos confiáveis, sessões e baixa um arquivo `.proof.json`.

`vrda-engine.js` → cria e valida envelopes `.vrda`; o usuário não vê diretamente, mas usa ao exportar/importar backups estruturados.

`backup-engine.js` → cria, lê e restaura backups `.vrda`; o usuário usa pelos botões de exportar/importar acervo.

`archive-engine.js` → normaliza manuscritos e metadados; o usuário vê isso como Arquivo do Escritor, documentos recentes, fixados, em andamento e formulário de metadados.

`version-engine.js` → cria snapshots e restaura versões; o usuário vê isso na aba Autoria como Histórico de versões.

`export-engine.js` → gera exportações `.txt` e `.md`; o usuário usa no Arquivo do Escritor.

`template-engine.js` → fornece guias e modelos de ofícios literários; o usuário escolhe guias na Academia e no Guia de Escrita do editor.

`precision-engine.js` → calcula aderência do manuscrito ao guia selecionado; o usuário vê porcentagem, critérios e status no Guia de Escrita.

`voice-engine.js` → motor local do Espelho de Voz; o usuário cola corpus ou usa o manuscrito ativo para ver métricas, ecos, forças, pontos cegos e exercícios.

`decolonial-engine.js` → motor local do Vocabulário Decolonizador e Observador Decolonial; o usuário busca termos e pode observar o manuscrito ativo por um toggle.

`service-worker.js` → PWA/offline; o usuário percebe como funcionamento offline após primeira visita em contexto compatível.

`manifest.webmanifest` → manifesto instalável do PWA; o usuário vê como app instalável, nome, ícones, tema e atalhos.

Documentos e registros:

`README.md` → instrução básica de uso local e observação sobre PWA/service worker.

`DESIGN.md` → sistema de design do Vereda; orienta linguagem visual, layout, paletas, componentes e responsividade.

`VEREDA_ROADMAP.md` → memória operacional e roadmap do produto.

`PRODUCT_LOG.md` → registro cronológico de decisões e pacotes implementados.

`QA_2026-04-28.md` → registro de QA de 2026-04-28.

`QA_2026-04-29.md` → registro de QA de 2026-04-29.

`.github/instructions/free-access.instructions.md` → instrução de repositório para fluxo de acesso/uso.

Pastas de assets:

`icons/` → logos e ícones vetoriais usados no site, favicon SVG e PWA.

`favicon_io/` → favicons PNG/ICO, apple touch icon, Android icons e manifest auxiliar de favicon.

Materiais de referência do Stitch:

`stitch_vereda_writing_editor/vereda_editor_home/code.html` → protótipo de tela inicial/editor do Vereda.

`stitch_vereda_writing_editor/vereda_biblioteca_gramatical/code.html` → protótipo da Biblioteca Gramatical.

`stitch_vereda_writing_editor/vereda_autoria_registro/code.html` → protótipo de registro/autoria.

`stitch_vereda_writing_editor/vereda_arquivo_do_escritor/code.html` → protótipo do Arquivo do Escritor.

`stitch_vereda_writing_editor/vereda_academia_estilo/code.html` → protótipo da Academia.

`stitch_vereda_writing_editor/vereda_hist_rico_e_formata_o/code.html` → protótipo de histórico/formatação.

`stitch_vereda_writing_editor/vereda_impress_o_e_exporta_o/code.html` → protótipo de impressão/exportação.

`stitch_vereda_writing_editor/vereda_lan_amento_mercado/code.html` → protótipo de lançamento/mercado.

`stitch_vereda_writing_editor/vereda_modo_foco/code.html` → protótipo de modo foco.

`stitch_vereda_writing_editor/vereda_notas_r_pidas_mobile/code.html` → protótipo mobile de notas rápidas.

`stitch_vereda_writing_editor/vereda_sincroniza_o_mobile/code.html` → protótipo mobile de sincronização.

`stitch_vereda_writing_editor/vereda_sincroniza_o_qr_streaming/code.html` → protótipo de sincronização por QR/streaming.

`stitch_vereda_writing_editor/vereda_design_system/DESIGN.md` → design system exportado/auxiliar do Stitch.

`stitch_vereda_writing_editor/**/screen.png` → imagens de referência visual dos protótipos.

Arquivo local ignorado no mapeamento ativo:

`logoVeredaok.psd` → arquivo PSD local de marca; não é usado em runtime pelo site.

## Rotas e Estados

Rotas/URLs reais:

`/` ou `index.html` → entrada única da SPA.  
Como chega: abrindo o site publicado, `index.html`, ou o app instalado pelo manifest.  
Como sai: não há rota externa de saída; a navegação acontece por estados internos.  
Estado: usa `localStorage` em `vereda.manuscripts.v1`; se não houver dados salvos, carrega dois manuscritos iniciais.

`.` via `manifest.webmanifest` `start_url` → mesma entrada da SPA quando instalada como PWA.  
Como chega: abrindo o app instalado.  
Como sai: navegação interna por abas; fechamento do app pelo navegador/SO.  
Estado: mesmo `localStorage`; também depende do cache do service worker após instalação/primeira visita.

Atalhos do manifest:

`Manuscrito` com `url: "."` → abre a mesma SPA.  
Como chega: atalho do app instalado.  
Como sai: abas internas.  
Estado: mesmo estado local do app.

`Academia` com `url: "."` → abre a mesma SPA; o manifest não aponta uma rota separada.  
Como chega: atalho do app instalado.  
Como sai: abas internas.  
Estado: mesmo estado local do app.

Estados internos principais da SPA:

`data-view-panel="editor"` / aba `Manuscrito` → editor principal.  
Como chega: aba Manuscrito, seleção de manuscrito na hierarquia, botão “Abrir manuscrito”, criação de nota ou abertura pelo Arquivo.  
Como sai: abas Biblioteca, Autoria, Arquivo ou Academia.  
Estado: precisa de um manuscrito ativo; persiste título, texto, versões, prova, layout, tema e preferências no `localStorage`.

`data-view-panel="biblioteca"` / aba `Biblioteca` → biblioteca gramatical local.  
Como chega: aba Biblioteca ou item lateral “Biblioteca gramatical”.  
Como sai: demais abas.  
Estado: lê o manuscrito ativo para a análise linguística lateral; não exige login.

`data-view-panel="autoria"` / aba `Autoria` → Prova de Autoria e Histórico de versões.  
Como chega: aba Autoria ou item lateral “Prova de autoria”.  
Como sai: demais abas.  
Estado: depende do manuscrito ativo, eventos de escrita, sessões de prova e snapshots salvos no `localStorage`.

`data-view-panel="arquivo"` / aba `Arquivo` → Arquivo do Escritor.  
Como chega: aba Arquivo ou item lateral “Arquivo do escritor”.  
Como sai: abre manuscrito no Editor, seleciona documento, ou navega para outras abas.  
Estado: depende da lista de manuscritos, metadados, filtros, busca, ordenação, fixados/recentes/em andamento; tudo local.

`data-view-panel="academia"` / aba `Academia` → Academia prática do escritor.  
Como chega: aba Academia ou item lateral “Academia prática”.  
Como sai: demais abas; pode criar manuscrito a partir de guia e voltar ao Editor.  
Estado: usa estado de guia selecionado, busca, ofício, passo do guia, Espelho de Voz e Observador Decolonial; sem login.

Estados/modos sobrepostos:

`Modo foco` → sobreposição de escrita focada.  
Como chega: botão de foco na topbar.  
Como sai: botão sair do foco.  
Estado: usa manuscrito ativo e preferências locais de tamanho de fonte, largura e régua.

`Guia de escrita aberto/fechado` → painel interno do editor.  
Como chega: botão “Guia” no papel ou controles do painel.  
Como sai: recolhendo o painel ou trocando de aba.  
Estado: lado, largura, aberto/fechado e guia selecionado em `state.template`.

`Painel esquerdo recolhido/aberto` → hierarquia e ferramentas.  
Como chega: botão de recolher/abrir hierarquia.  
Como sai: mesmo controle.  
Estado: `state.layout.leftCollapsed`.

`Painel direito recolhido/aberto` → Análise Linguística.  
Como chega: botão de recolher/abrir análise.  
Como sai: mesmo controle.  
Estado: `state.layout.rightCollapsed`.

`Menu de paletas` → seletor de tema.  
Como chega: botão de paleta na topbar.  
Como sai: clique fora ou escolha de tema.  
Estado: `state.appearance.theme`.

`Modal Nova nota` → criação de nota/manuscrito.  
Como chega: botão “Nova nota” ou ações de criação no Arquivo.  
Como sai: fechar modal ou escolher criação.  
Estado: cria manuscrito local e muda o manuscrito ativo.

`Observador Decolonial ligado/desligado` → lente de revisão do manuscrito ativo na Academia.  
Como chega: toggle “Observar meu manuscrito nesta revisão”.  
Como sai: desmarcando o toggle ou saindo da aba.  
Estado: estado em memória da sessão (`decolonialState.observerEnabled`); lê texto do manuscrito ativo salvo localmente.

`Espelho de Voz` → análise de corpus colado ou manuscrito ativo.  
Como chega: Academia, seção Espelho de Voz.  
Como sai: limpar/trocar aba/navegar.  
Estado: texto no textarea da ferramenta durante a sessão; pode carregar manuscrito ativo.

`Instalação PWA` → prompt de instalação.  
Como chega: evento `beforeinstallprompt` do navegador compatível.  
Como sai: instalar ou ignorar.  
Estado: depende do navegador e do manifest/service worker.

Não há no código atual:

- rotas por hash;
- rotas com `history.pushState`;
- páginas HTML separadas ativas;
- login;
- backend;
- estado de autenticação.

## Dependências Externas

Chamadas externas do produto ativo:

`https://fonts.googleapis.com` → carrega CSS de fontes `Inter`, `Noto Serif` e `Material Symbols Outlined` em `index.html`.

`https://fonts.gstatic.com` → origem dos arquivos de fonte servidos pelo Google Fonts.

Recursos de navegador usados pelo produto ativo:

`localStorage` → armazenamento local do estado principal (`vereda.manuscripts.v1`).

`navigator.serviceWorker` → registro do service worker para funcionamento offline/PWA.

`Cache Storage API` (`caches`) → cache offline em `service-worker.js`.

`fetch` no `service-worker.js` → busca recursos de navegação/assets e salva respostas no cache.

`beforeinstallprompt` → exibe botão de instalar quando o navegador permite.

`FileReader` → leitura de backup importado.

`Blob`/download por link temporário → exportação de manuscrito, backup e prova.

`crypto.subtle.digest` → hash SHA-256 da Prova de Autoria quando disponível; há fallback local.

`matchMedia` → suporte a preferência de esquema de cor em código de referência e/ou compatibilidade visual.

Dependências externas nos protótipos de referência do Stitch:

`https://cdn.tailwindcss.com?plugins=forms,container-queries` → CDN Tailwind usado nos `code.html` de referência.

`https://fonts.googleapis.com` → fontes Google nos protótipos.

`https://fonts.gstatic.com` → arquivos de fonte dos protótipos.

`https://lh3.googleusercontent.com/...` → imagens remotas usadas em vários protótipos Stitch.

APIs/serviços externos não encontrados no produto ativo:

- nenhuma API de IA em runtime;
- nenhum endpoint de backend próprio;
- nenhum banco remoto;
- nenhum serviço de autenticação;
- nenhum CDN JS ativo no `index.html` principal;
- nenhuma chamada `fetch` para API de aplicação além do próprio service worker buscando assets/navegação.

O que quebra ou degrada se cair:

Google Fonts (`fonts.googleapis.com`/`fonts.gstatic.com`) → tipografia e ícones Material Symbols podem não carregar na primeira visita sem cache; o app ainda usa fallbacks tipográficos.

Service worker/cache indisponível → o app continua abrindo online, mas perde comportamento offline/PWA até o registro funcionar.

CDN Tailwind e imagens remotas dos protótipos Stitch → quebram apenas os arquivos de referência em `stitch_vereda_writing_editor/`, não a aplicação principal.
