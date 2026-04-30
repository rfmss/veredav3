# Vereda Roadmap

Este documento é a memória operacional do projeto. Ele existe para manter o Vereda ambicioso sem perder responsabilidade com o código, o produto e as promessas feitas ao escritor.

## Estado atual

Estimativa de maturidade: 73% de um MVP apresentável.

O Vereda já tem:

- Editor principal com modo foco, painel de guia e layout ajustável.
- Arquivo do escritor com filtros, recentes, fixados, documentos em andamento e metadados.
- Biblioteca gramatical local.
- Prova de autoria local.
- Exportação de manuscrito e acervo.
- PWA offline-first com marca vetorial oficial.
- Academia com Guia de Ofícios Literários.
- 60 guias de escrita, estudo, mercado editorial, objeto livro e direitos do autor.
- Busca no Guia de Ofícios.
- Medidores locais de aderência à forma, incluindo ENEM.
- Painéis laterais recolhíveis.
- Espelho de Voz local em primeiro corte.
- Vocabulário Decolonizador consultivo na Academia.

## Princípios de responsabilidade

- Tudo que puder ser local deve continuar local.
- Métrica objetiva deve ser apresentada como métrica; leitura interpretativa deve ser apresentada como leitura interpretativa.
- Não prometer precisão estilométrica quando o cálculo for heurístico.
- Não copiar HTMLs externos como páginas soltas; dissolver conteúdo na linguagem e nos fluxos do Vereda.
- Cada pacote deve terminar com validação, registro no `PRODUCT_LOG.md`, commit e push.
- Alterações de design devem respeitar o guia visual existente: interface de trabalho, cartões contidos, paleta sóbria e tipografia editorial.

## Pacote entregue: Espelho de Voz

Objetivo: criar uma ferramenta de autoconhecimento literário para o escritor, sem fingir que ela é um oráculo.

Nome sugerido: Espelho de Voz.

Lugar no produto:

- Aba Academia, como ferramenta irmã do Guia de Ofícios.
- Entrada secundária possível no painel direito de Análise Linguística, depois que o módulo estiver maduro.

Escopo do primeiro corte:

- Campo para colar corpus ou usar o manuscrito ativo.
- Análise 100% local, sem API externa.
- Métricas objetivas:
  - contagem de palavras, frases e parágrafos;
  - média de palavras por frase;
  - variação de comprimento de frases;
  - TTR simples;
  - densidade lexical aproximada;
  - repetição de palavras relevantes;
  - uso de pontuação;
  - campos semânticos dominantes por léxicos locais;
  - temperatura emocional por léxicos locais.
- Leitura interpretativa assumida:
  - título provisório da voz;
  - forças;
  - pontos cegos;
  - público provável;
  - exercícios sugeridos.

O que não prometer:

- afinidade científica com autores canônicos;
- originalidade genuína;
- diagnóstico definitivo da voz do escritor;
- leitura estável de carreira a partir de um único texto.

Como tratar DNA literário:

- Usar "ecos possíveis", não porcentagem de similaridade.
- Explicar que a aproximação vem de padrões observáveis e curadoria crítica local.
- Preferir famílias de gesto literário: introspectivo, oral, imagético, ensaístico, seco, barroco, contemplativo, narrativo direto.

Arquitetura:

- `voice-engine.js` concentra métricas e heurísticas locais.
- O painel do Espelho fica na Academia.
- O usuário pode colar corpus ou usar o manuscrito ativo.
- A saída separa métricas calculadas, leitura de voz, forças, pontos cegos, campos semânticos, temperatura emocional e exercícios.

Validação mínima:

- `node --check app.js`
- `node --check voice-engine.js`
- `node --check service-worker.js`
- teste local com corpus curto, médio e vazio.

## Pacotes seguintes

### Pendências seguradas para as próximas rodadas

Estas frentes ficam anotadas, mas pausadas enquanto o foco está no polimento da barra/aba do navegador:

- exportação `.docx` para submissão editorial brasileira;
- reforco futuro do fluxo de backup automatico/sugerido, alem do aviso inicial ja entregue;
- polimento futuro dos atalhos PWA, alem dos destinos distintos ja entregues para Manuscrito e Academia;
- estrutura de projeto literário mais completa além do campo `type`.

### Bots de manutenção futura

Para manter a Vereda útil por anos sem depender de revisão manual de tudo:

- bot de fontes oficiais: checar mensalmente LDA, EDA/FBN, gov.br, CBL, ISBN, depósito legal e links citados;
- bot jurídico-editorial: abrir issue quando procedimento, preço, atendimento ou norma de direitos autorais mudar;
- bot de QA visual: gerar screenshots de Editor, Arquivo, Autoria e Academia em desktop/mobile a cada pull request;
- bot de cache/PWA: validar manifest, service worker, favicons, rotas de atalhos e assets versionados por release;
- bot de integridade local: rodar `node --check`, validar JSON, mapear referências quebradas e anexar resumo ao QA.

### Auditoria de produto

Rodar uma auditoria literal do código antes dos próximos pacotes grandes:

- mapa de arquivos ativos e protótipos;
- referências quebradas, seletores órfãos, botões sem ação e assets ausentes;
- confronto entre roadmap e implementação real;
- contagem efetiva de guias;
- veredicto por área;
- lista priorizada de correções mínimas.

### 1. Checklists persistentes por projeto

Transformar guias de lançamento e revisão em checklists marcáveis por manuscrito.

Escopo provável:

- checklist de lançamento;
- checklist de revisão;
- checklist de submissão editorial;
- persistência por `manuscript.id`.

### 2. Busca transversal do produto

Uma busca única para encontrar:

- manuscritos;
- guias;
- termos da biblioteca;
- itens da Academia.

### 3. Polimento de navegação

Pontos a revisar:

- nome "Manuscrito" versus "Editor";
- clareza entre Arquivo e Academia;
- botão "A partir do guia" explicar qual guia será usado;
- atalhos de teclado para abrir/recolher painéis.

### 4. Evolução autoral

Comparar textos do mesmo autor ao longo do tempo.

Escopo provável:

- salvar snapshots de métricas por versão;
- mostrar evolução de vocabulário, ritmo, densidade e repetição;
- comparar manuscrito atual com versões anteriores.

### 5. Preparação para MVP público

Antes de chamar de MVP público:

- revisar responsividade das cinco abas principais;
- auditar contraste e estados de foco;
- testar PWA instalado;
- testar importação/exportação;
- criar um pequeno roteiro de uso;
- revisar textos de promessa para evitar exagero.

### 6. Evolução do Vocabulário Decolonizador

Transformar a consulta inicial em ferramenta de revisão contextual.

Escopo futuro:

- verificar o manuscrito ativo e listar ocorrências do vocabulário;
- mostrar sugestões no painel direito de Análise Linguística;
- diferenciar uso crítico, histórico, ficcional e problemático;
- permitir copiar alternativa ou inserir anotação de revisão;
- ampliar a base com exemplos de uso, contraindicações e fontes de curadoria;
- criar estado "termo sensível revisado" por manuscrito.

## Critérios de "pronto" por pacote

Um pacote só é considerado pronto quando:

- o comportamento central funciona sem rede;
- não há erros de sintaxe;
- o cache offline foi versionado quando assets mudam;
- o `PRODUCT_LOG.md` explica a decisão;
- o commit foi enviado ao GitHub;
- limitações importantes estão explícitas no produto ou no log.
