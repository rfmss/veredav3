# Log de Produto e Arquitetura - Vereda

Este arquivo registra decisões importantes tomadas durante a construção do Vereda. A intenção é servir tanto como memória técnica do projeto quanto como matéria-prima para posts futuros no blog do produto.

## Regra do log

Cada nova entrada relevante deve registrar:

- a decisão tomada;
- por que ela importa para o produto;
- benefícios esperados;
- formulação curta para comunicação;
- próximas etapas sugeridas.

Essa regra existe para manter continuidade entre sessões, reduzir decisões soltas e evitar que o projeto perca o fio do próprio raciocínio.

## 2026-04-27 - App leve, modular e offline

Decidimos manter o `app.js` como um orquestrador da interface e do estado geral da aplicação, evitando que ele acumule regras de domínio.

Na prática, isso significa que o `app.js` deve cuidar de responsabilidades como navegação, persistência local, seleção de manuscritos, atualização da interface, autosave e coordenação entre módulos. Já funcionalidades especializadas devem viver em arquivos próprios. O primeiro exemplo dessa separação foi a criação do `lexical-engine.js`, responsável pelo motor lexical offline da Biblioteca Gramatical.

Essa decisão combina com a natureza do Vereda: um produto offline-first, leve, auditável e sem IA agindo durante o funcionamento. Em vez de depender de serviços externos, o Vereda deve carregar consigo suas ferramentas locais, organizadas em módulos compreensíveis.

Benefícios esperados:

- O código principal permanece mais fácil de ler.
- Cada motor local pode evoluir sem bagunçar a interface.
- A futura migração para componentes ou framework fica menos traumática.
- O produto continua transparente para o usuário: nada de análise invisível em servidor remoto.
- A arquitetura reflete a filosofia do Vereda: soberania do autor, calma técnica e funcionamento local.

Formulação curta para comunicação:

> O Vereda nasce como um aplicativo offline-first: a interface coordena, os motores locais trabalham, e o texto do autor permanece no próprio ambiente do autor.

## 2026-04-27 - Push ao fim de cada etapa

Decidimos que cada etapa implementada deve terminar com commit e `git push` para o repositório remoto.

Essa regra transforma o desenvolvimento do Vereda em uma sequência de marcos pequenos, testáveis e recuperáveis. Em vez de acumular muitas mudanças locais, cada avanço do produto passa a ter um ponto de restauração claro no histórico do Git.

Benefícios esperados:

- Facilita testar a versão mais recente em outros ambientes.
- Mantém o histórico do produto legível.
- Reduz o risco de perder decisões e código entre sessões.
- Cria uma cadência pública de evolução, útil para acompanhar o nascimento do produto.

Formulação curta para comunicação:

> Cada etapa do Vereda termina com um marco no Git: pequeno, testável e pronto para ser retomado.

## 2026-04-27 - PWA offline instalável

Decidimos iniciar a camada PWA do Vereda ainda na fase estática, sem framework e sem backend.

Foram adicionados um `manifest.webmanifest`, ícones locais e um `service-worker.js` para cachear o núcleo da aplicação. O objetivo é que o Vereda funcione como um aplicativo offline após a primeira visita em um contexto compatível com service workers, como `https://` ou `localhost`.

Também adicionamos um fluxo de instalação: quando o navegador considerar o app elegível, o botão "Instalar" aparece na interface. Essa decisão reforça uma ideia central do produto: o Vereda deve morar perto do autor, com acesso rápido, dados locais e funcionamento independente de conexão.

Benefícios esperados:

- O app pode abrir mesmo sem rede depois da primeira carga.
- A instalação aproxima a experiência de um aplicativo nativo.
- O cache local reduz atrito e dependência de infraestrutura.
- O produto continua alinhado à soberania do autor: escrita, leitura e ferramentas locais.

Formulação curta para comunicação:

> O Vereda não quer ser apenas uma aba aberta: ele quer ser uma mesa de escrita instalada, local e pronta mesmo quando a rede desaparece.

## 2026-04-27 - PoHW como motor local de autoria

Decidimos implementar a Prova de Escrita Humana, PoHW, como um motor local separado em `proof-engine.js`.

Esse módulo registra apenas metadados de cadência: intervalos entre teclas, tipo genérico do evento e se o evento foi considerado orgânico. Ele não armazena teclas literais nem envia texto para fora do navegador. A regra inicial considera orgânicos apenas eventos confiáveis (`isTrusted`) com intervalo entre 30ms e 2000ms.

A aba Autoria passa a mostrar integridade, eventos orgânicos, eventos descartados e cadência média com base na escrita real do editor. Também foi adicionada a exportação de um `.proof.json`, contendo resumo, eventos de cadência e hash SHA-256 do texto atual.

Essa decisão reforça o posicionamento do Vereda: proteger a autoria humana sem vigiar o conteúdo íntimo da escrita.

Benefícios esperados:

- A prova de autoria funciona offline e sem servidor.
- O texto do autor permanece local.
- O arquivo exportado pode acompanhar o manuscrito como evidência de processo.
- O motor pode evoluir sem inflar o `app.js`.

Formulação curta para comunicação:

> A prova de autoria do Vereda não pergunta “quem escreveu por você?”; ela registra, localmente, o pulso humano da escrita.

## 2026-04-27 - Backup soberano do acervo

Decidimos adicionar exportação e importação do acervo local como um módulo separado, `backup-engine.js`.

O Vereda salva manuscritos, preferências, seleção lexical e provas de escrita no navegador. Isso é bom para privacidade e funcionamento offline, mas também exige uma saída clara para o autor levar seus dados consigo. Por isso, a tela Arquivo ganhou ações para exportar um `.vrda` e importar esse arquivo depois.

O backup não depende de conta, nuvem ou servidor. Ele é um pacote local que o autor pode guardar onde quiser. Essa escolha reforça a soberania do usuário: o navegador é a mesa de trabalho, mas o acervo pertence ao escritor.

Benefícios esperados:

- O autor pode guardar cópias próprias do acervo.
- Trocar de navegador ou máquina fica possível sem backend.
- O app continua offline-first sem prender o usuário em um armazenamento invisível.
- O `app.js` permanece como orquestrador, enquanto backup/restore fica em módulo próprio.

Formulação curta para comunicação:

> No Vereda, offline não significa preso ao navegador: o acervo pode sair pela porta da frente, em um arquivo do próprio autor.

## 2026-04-27 - Arquivo como gestão editorial local

Decidimos evoluir o Arquivo do Escritor de uma grade de projetos para uma área de gestão editorial local.

Foi criado o módulo `archive-engine.js` para normalizar e atualizar metadados de manuscritos sem inflar o `app.js`. A tela Arquivo agora permite selecionar um projeto, editar tipo, status, marco atual, progresso e descrição. Os cards passam a mostrar status e barra de progresso, aproximando o Vereda de uma mesa real de acompanhamento de obra.

Essa etapa reforça a ideia de que o Vereda não é apenas um editor de texto. Ele é um lugar de continuidade: o autor vê onde cada obra está, qual etapa precisa de atenção e pode organizar o trabalho sem sair do ambiente offline.

Benefícios esperados:

- O autor ganha visão editorial do acervo.
- Metadados acompanham backups e importações.
- O Arquivo passa a ser útil para decisão, não apenas navegação.
- A lógica de metadados fica em módulo próprio, mantendo o `app.js` como orquestrador.

Formulação curta para comunicação:

> O Arquivo do Vereda deixa de ser uma estante passiva e passa a ser uma mesa de acompanhamento da obra em andamento.

## 2026-04-27 - Histórico de versões local

Decidimos adicionar histórico de versões como um motor separado, `version-engine.js`.

O Vereda agora cria snapshots locais por manuscrito, com versões manuais e snapshots automáticos quando há uma mudança relevante no texto. Cada versão guarda texto, metadados editoriais e contagens básicas, permitindo restaurar um estado anterior sem depender de servidor ou conta.

Essa decisão é importante porque escrita literária precisa de coragem para experimentar. Um histórico local reduz o medo de reescrever, cortar ou reorganizar. O autor pode voltar atrás, mas continua dono do processo e dos arquivos.

Benefícios esperados:

- Mais segurança para revisão e experimentação.
- Recuperação local de versões anteriores.
- Histórico acompanha backups `.vrda`.
- O motor de versionamento evolui separado do `app.js`.

Formulação curta para comunicação:

> O Vereda guarda rastros locais da travessia: versões que permitem ao autor ousar sem perder o caminho de volta.

Próximas etapas sugeridas:

- Exportação simples do manuscrito em `.txt` e `.md`.
- Melhorias na Prova de Escrita por sessão/data.
- Expansão da Biblioteca Gramatical com léxico local separado.

## 2026-04-27 - Estado do produto e milestones

Estimamos que o Vereda esteja com cerca de 22% do produto-base pronto.

Essa estimativa não mede apenas quantidade de telas. Ela considera o quanto já existe de comportamento real, arquitetura modular, funcionamento offline, persistência local e caminhos de soberania do autor. O produto já passou da fase de mock visual: ele salva localmente, tem módulos separados, funciona como PWA inicial, registra prova de escrita, guarda versões e permite backup do acervo.

Estado por camada:

- Fundação visual e navegação: 55%.
- Editor offline básico: 45%.
- Arquivo do Escritor: 35%.
- Modo foco: 35%.
- Biblioteca Gramatical local: 20%.
- PoHW / Prova de Escrita: 25%.
- Histórico de versões: 25%.
- Backup e importação: 45%.
- PWA/offline instalável: 35%.
- Exportação editorial: 0%.
- Configurações reais: 5%.
- Mobile, notas rápidas e sincronização: 0% a 5%.

Milestones sugeridas:

- M1 - Protótipo funcional offline: editor, arquivo, foco, backup, versões e PoHW inicial. Estado atual: em andamento, cerca de 70% dentro deste milestone.
- M2 - Editor utilizável no dia a dia: exportação `.txt`/`.md`, configurações reais, histórico mais claro, revisão de UX e tratamento de erros.
- M3 - Diferencial Vereda: PoHW por sessões, Biblioteca Gramatical expandida, léxico local separado e métricas textuais mais confiáveis.
- M4 - Produto instalável polido: PWA com atualização de cache, UX mobile, testes em navegador, acessibilidade e fluxo de instalação mais claro.
- M5 - Beta privado: documentação, página de apresentação, dados de exemplo, checklist de qualidade e roteiro de feedback.

Estimativa de trabalho nesse ritmo:

- MVP local realmente testável: 18 a 28 horas.
- Beta privado com polimento decente: 45 a 70 horas.
- Produto mais robusto para uso contínuo por autores: 90 a 140 horas.

A estimativa assume desenvolvimento incremental, sem backend, sem IA em runtime e mantendo o app estático/offline-first. Se entrarmos em migração para framework, empacotamento, sincronização entre dispositivos ou exportações complexas como EPUB/PDF profissional, esse número cresce.

Benefícios esperados:

- O projeto passa a ter uma régua de progresso compartilhada.
- As próximas decisões deixam de depender da memória da conversa.
- O log vira material para comunicação pública e gestão interna.
- Milestones ajudam a separar protótipo, MVP, beta e produto contínuo.

Formulação curta para comunicação:

> O Vereda já tem uma espinha dorsal local. Agora a jornada é transformar essa base em rotina confiável de escrita: exportar, revisar, provar autoria e voltar ao texto sem medo.

Próximas etapas sugeridas:

- Implementar exportação simples do manuscrito em `.txt` e `.md`.
- Melhorar a Prova de Escrita com sessões nomeadas por data.
- Separar e expandir o léxico local da Biblioteca Gramatical.

## 2026-04-27 - Exportação simples do manuscrito

Decidimos iniciar a camada de exportação editorial pelos formatos mais simples e confiáveis: `.txt` e `.md`.

Foi criado o módulo `export-engine.js`, responsável por gerar arquivos exportáveis a partir do manuscrito ativo. A tela Arquivo ganhou ações diretas para baixar o texto em TXT ou Markdown, incluindo metadados básicos como tipo, status, marco atual, progresso e descrição.

Essa decisão mantém o Vereda fiel ao offline-first: antes de formatos mais complexos, o autor precisa conseguir tirar o texto do app em formatos abertos, legíveis e fáceis de guardar ou editar em qualquer outro lugar.

Benefícios esperados:

- O autor pode levar o manuscrito para fora do Vereda sem depender de backup completo.
- `.txt` e `.md` são formatos simples, duráveis e compatíveis com muitos editores.
- A lógica de exportação fica em módulo próprio, preservando o `app.js` como orquestrador.
- Abre caminho para exportações futuras como HTML, DOCX, EPUB e PDF.

Formulação curta para comunicação:

> O Vereda começa exportando pelo essencial: texto aberto, legível e do autor, sem trancas.

Próximas etapas sugeridas:

- Melhorar a Prova de Escrita com sessões nomeadas por data.
- Separar e expandir o léxico local da Biblioteca Gramatical.
- Criar painel de configurações reais do editor.

## 2026-04-27 - `.vrda` como formato nativo do Vereda

Decidimos criar a extensão `.vrda` como formato nativo do Vereda.

A partir desta decisão, tudo que representa acervo interno da ferramenta deve entrar e sair como `.vrda`. Exportações como `.txt` e `.md` continuam existindo, mas são saídas de leitura/interoperabilidade, não formatos nativos de restauração do app. Importação de acervo passa a aceitar apenas arquivos `.vrda`.

Essa decisão ajuda a separar duas ideias importantes: o texto aberto que o autor pode levar para qualquer editor, e o pacote Vereda que preserva manuscritos, metadados, versões, provas de escrita e preferências locais.

Benefícios esperados:

- O formato nativo fica reconhecível e próprio do produto.
- Reduz risco de importar JSON genérico por engano.
- Abre caminho para validação mais rígida de arquivos Vereda.
- Ajuda na comunicação: `.vrda` é o caderno portátil do autor dentro do ecossistema.

Formulação curta para comunicação:

> `.vrda` é o caderno nativo do Vereda: não apenas texto, mas acervo, processo, versões e autoria em um pacote local.

Próximas etapas sugeridas:

- Adicionar versão/schema explícito no `.vrda` para migrações futuras.
- Melhorar a Prova de Escrita com sessões nomeadas por data.
- Separar e expandir o léxico local da Biblioteca Gramatical.

## 2026-04-27 - Identidade `.vrda`, slogan e motion como linguagem

Decidimos ajustar a identidade imediata do produto para reforçar o arquivo nativo e o público central: a aba do navegador passa a se chamar `.vrda - editor`, e o slogan visível passa a ser `Vereda: para escritores brasileiros.`

Também decidimos tratar motion e cor como parte da comunicação do produto, não como ornamento. A proposta é que o Vereda use movimento discreto para indicar estado, continuidade e resposta da ferramenta: entrada de telas, progresso, salvamento, abertura de painéis e mudanças importantes. Onde um feedback puder ser sentido pelo movimento em vez de explicado por texto, devemos preferir motion calmo e acessível.

Análise do material inicial revisitado:

- Continua útil a visão do Vereda como editor sério para escritores brasileiros, com gramática PT-BR, offline-first, modo foco, impressão limpa, objeto-livro, fichas, templates, notas rápidas mobile e prova de autoria.
- A tensão IA/offline precisa continuar resolvida pela regra atual: o core não usa IA em runtime. Personas, chat e comparação com autores ficam como módulos futuros opcionais ou simulados por regras locais, se fizer sentido.
- O item de timestamp com data, hora e segundos reforça o `.vrda`, PoHW, backups e notas. Aplicamos isso ao nome do arquivo `.vrda`.
- O material reforça uma lacuna ainda aberta: análise de frase/sentença e norma padrão, não só palavra isolada.
- O mobile deve continuar como notas rápidas, não editor completo.
- O tour do objeto-livro e impressão limpa seguem como grandes diferenciais a médio prazo.

Contraproposta de aplicação:

- Curto prazo: consolidar o core offline, exportações, sessões PoHW, léxico local e configurações.
- Médio prazo: criar módulo de impressão/objeto-livro com visual mais expressivo e motion pedagógico.
- Longo prazo: tratar lançamento/personas/minicurso como módulos editoriais locais primeiro, sem prometer inteligência artificial no core.

Benefícios esperados:

- A marca `.vrda` fica mais memorável e diretamente ligada ao formato nativo.
- O slogan reduz abstração e fala com o público certo.
- Motion passa a carregar feedback de produto sem transformar a interface em texto explicativo.
- O log incorpora material original do processo, reduzindo risco de perder decisões fundadoras.

Formulação curta para comunicação:

> `.vrda - editor` é o Vereda em estado nativo: um ambiente offline para escritores brasileiros, onde cor e movimento ajudam a escrita sem competir com ela.

Próximas etapas sugeridas:

- Adicionar versão/schema explícito no `.vrda` para migrações futuras.
- Melhorar a Prova de Escrita com sessões nomeadas por data e timestamp com segundos.
- Criar diretrizes de motion e paleta como parte do design system.

## 2026-04-27 - Linguagem de acolhimento e templates por ofício

Decidimos que a primeira linha de comunicação geral do Vereda deve ser mais calorosa, clara e acessível, em uma direção "Globoplay": menos técnica no primeiro contato, mais humana e convidativa. A profundidade técnica continua existindo, mas deve aparecer depois, quando o escritor precisar dela.

Também levantamos uma decisão importante sobre templates: eles não devem ser apenas modelos vazios. O Vereda deve oferecer templates de notas e documentos que façam o escritor se sentir em casa conforme seu ofício e gênero. Um roteirista de TV, por exemplo, deve encontrar um arquivo com estrutura familiar, placeholders clicáveis e seções que orientam a escrita sem tom professoral.

Templates sugeridos:

- Roteiro de TV.
- Flash fiction / conto mínimo.
- Conto curto.
- Conto.
- Ensaio.
- Matéria jornalística.
- Crônica.
- Romance resumido.
- Poesia, com desdobramento por formas e estilos.
- Ficha de personagem completa.

Contraproposta de aplicação:

- Módulo próprio: `template-engine.js`.
- Templates como dados locais, sem IA e sem backend.
- Cada template deve gerar um manuscrito `.vrda` normal, com metadados de tipo, descrição e seções.
- Placeholders devem ser clicáveis/editáveis, mas o texto final continua pertencendo ao editor comum.
- A interface deve permitir escolher por ofício: ficcionista, roteirista, poeta, ensaísta, jornalista.

Etapa recomendada:

- Depois de schema/versionamento do `.vrda`.
- Antes de mobile/notas rápidas.
- Em paralelo com o fortalecimento do Arquivo do Escritor, porque templates nascem naturalmente dentro do Arquivo.

Benefícios esperados:

- O Vereda acolhe escritores diferentes sem parecer genérico.
- Templates viram porta de entrada emocional para o produto.
- A ferramenta comunica domínio do nicho brasileiro.
- A experiência deixa de ser "crie um documento em branco" e passa a ser "comece do lugar certo".

Formulação curta para comunicação:

> No Vereda, um roteiro, uma crônica e um poema não começam do mesmo vazio: cada forma recebe uma mesa preparada para ela.

Próximas etapas sugeridas:

- Adicionar versão/schema explícito no `.vrda`.
- Criar `template-engine.js` com templates locais por gênero/ofício.
- Rever a primeira linha de comunicação do app com linguagem mais acolhedora e menos técnica.

## 2026-04-27 - Schema explícito do `.vrda`

Decidimos formalizar o `.vrda` como envelope nativo versionado, separado da lógica de backup.

Foi criado o módulo `vrda-engine.js`, responsável por gerar e validar o envelope do arquivo. O backup agora produz um payload de acervo e o `vrda-engine` embrulha esse payload com `format`, `schemaVersion`, `createdWith`, `exportedAt` e `checksum`.

Estrutura atual do envelope:

- `format: "vrda"`.
- `schemaVersion: 1`.
- `createdWith: ".vrda - editor"`.
- `exportedAt` em ISO 8601.
- `checksum` simples do payload ordenado.
- `payload` com manuscritos, metadados, versões, provas, foco e estado lexical.

Essa decisão prepara o Vereda para migrações futuras. Se o formato interno mudar, poderemos reconhecer versões antigas, migrar dados e mostrar erros mais claros, em vez de tratar todo arquivo como JSON genérico.

Benefícios esperados:

- `.vrda` ganha identidade técnica própria.
- Importação fica mais segura e previsível.
- Futuras migrações de dados ficam possíveis.
- O formato nativo pode ser documentado publicamente.

Formulação curta para comunicação:

> `.vrda` deixa de ser só uma extensão: passa a ser um envelope versionado para carregar o acervo vivo do escritor.

Próximas etapas sugeridas:

- Melhorar a Prova de Escrita com sessões nomeadas por data e timestamp com segundos.
- Criar `template-engine.js` com templates locais por gênero/ofício.
- Separar e expandir o léxico local da Biblioteca Gramatical.

## 2026-04-27 - Prova de Escrita com sessões

Decidimos evoluir a Prova de Escrita Humana para trabalhar com sessões nomeadas.

Antes, cada manuscrito tinha um registro contínuo de eventos. Agora, cada manuscrito passa a guardar um conjunto de sessões locais, com sessão ativa, nome legível, data, hora, minutos e segundos. O motor continua separado em `proof-engine.js`; o `app.js` apenas cria a sessão, registra eventos do editor, renderiza a tela e exporta o documento.

Estrutura atual:

- Cada manuscrito tem um registro de prova com `activeSessionId` e `sessions`.
- Cada sessão tem `id`, `name`, `startedAt`, `updatedAt`, `lastEventAt` e `events`.
- Sessões antigas são migradas automaticamente ao abrir o app.
- O `.proof.json` exportado agora usa `format: "vereda.proof.v2"` e inclui o bloco `session`.
- O nome do arquivo exportado inclui o título do manuscrito e a sessão.

Essa decisão melhora a prova de processo porque separa momentos reais de escrita. Um escritor pode registrar uma sessão da manhã, outra da noite, uma revisão específica ou uma sessão antes de enviar o texto, sem misturar tudo num único histórico.

Benefícios esperados:

- Autoria fica mais legível para o escritor.
- Exportações ficam mais fáceis de organizar.
- O produto se aproxima de um diário verificável de criação.
- A base fica pronta para relatórios por sessão no futuro.

Formulação curta para comunicação:

> Cada sessão guarda o ritmo daquela escrita, com hora marcada até os segundos.

Próximas etapas sugeridas:

- Mostrar uma lista resumida de sessões anteriores na aba Autoria.
- Criar `template-engine.js` com templates locais por gênero/ofício.
- Separar e expandir o léxico local da Biblioteca Gramatical.

## 2026-04-27 - Verificação avançada fica para depois

Decidimos pausar a evolução imediata da camada de verificação/autoria.

A Prova de Escrita já tem uma base útil: sessões nomeadas, timestamp com segundos, hash do texto, cadência e exportação `.proof.json`. O próximo refinamento natural seria listar sessões anteriores, comparar sessões e criar relatórios mais formais. Mas esse caminho começa a puxar o produto para auditoria, validade e documentação de prova antes de ampliarmos a utilidade central para o escritor.

Por isso, a verificação avançada fica registrada como retorno futuro, não como prioridade da próxima etapa.

Contraproposta de faseamento:

- Manter a Prova de Escrita atual funcionando como base local.
- Evitar, por enquanto, telas extras de auditoria e relatórios.
- Avançar para templates, porque eles aumentam imediatamente o valor diário do Vereda.
- Voltar à verificação quando o fluxo de escrita, arquivo e templates estiver mais maduro.

Próxima etapa sugerida:

Criar `template-engine.js` com templates locais por gênero/ofício. Essa etapa combina com a ideia do Vereda como ferramenta acolhedora: em vez de abrir sempre uma folha vazia, o escritor escolhe uma forma familiar, como roteiro de TV, crônica, conto, ensaio, romance resumido, poesia ou ficha de personagem.

Próximas etapas sugeridas:

- Criar `template-engine.js` com templates locais por gênero/ofício.
- Adicionar seletor de template no Arquivo do Escritor.
- Fazer cada template gerar um manuscrito `.vrda` normal, com metadados e placeholders editáveis.

## 2026-04-27 - Primeiro estúdio de templates guiados

Decidimos dissolver o onboarding externo de roteiro/flash fiction dentro do Vereda como uma área nativa do Arquivo, não como uma página separada.

Foi criado o módulo `template-engine.js`, responsável por guardar templates locais por gênero/ofício e transformar cada template em manuscrito real. O `app.js` continua apenas orquestrando a interface: selecionar template, avançar/voltar passos e criar o manuscrito no editor.

O primeiro recorte inclui:

- Roteiro de TV, com teaser, atos e gancho.
- Flash fiction, com imagem âncora, tensão, virada e fechamento.
- Onboarding em passos antes de criar o manuscrito.
- Placeholders dentro do texto criado, para o escritor substituir direto no editor.
- Metadados iniciais de tipo, marco atual, descrição e progresso.

Contraproposta aplicada:

- O HTML externo foi absorvido como experiência de produto, mas sem copiar sua estrutura isolada.
- Ícones SVG inline foram substituídos por Material Symbols, mantendo o sistema visual do Vereda.
- A experiência ficou dentro do Arquivo do Escritor, onde templates fazem sentido como ponto de partida.
- O template final vira manuscrito comum do Vereda e entra no fluxo offline, `.vrda`, versões e exportações.

Formulação curta para comunicação:

> Um roteiro e um flash não começam do mesmo vazio. No Vereda, cada forma abre uma mesa preparada.

Próximas etapas sugeridas:

- Adicionar mais templates: crônica, conto curto, ensaio, matéria jornalística, romance resumido e ficha de personagem.
- Melhorar placeholders para seções clicáveis/selecionáveis dentro do editor.
- Criar filtro por ofício: roteirista, ficcionista, poeta, ensaísta e jornalista.
