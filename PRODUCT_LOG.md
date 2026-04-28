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

## 2026-04-27 - Template consultivo ao lado do editor

Decidimos mudar o papel dos templates.

Em vez de transformar o template no próprio texto, o Vereda passa a tratar o template como um painel consultivo ao lado da página branca. O escritor escolhe o formato, consulta estrutura, lembretes e critérios, mas continua escrevendo em uma tela limpa e autoral.

Primeira implementação:

- Painel consultivo no editor, começando com Flash Fiction e Roteiro de TV.
- Escolha de lado: template à esquerda ou à direita.
- Divisor arrastável para ajustar quanto espaço fica para consulta e quanto fica para escrita.
- Novo módulo `precision-engine.js`, com score local e fechado para Flash Fiction.
- O score compara o texto com critérios do formato, sem IA, sem rede e sem julgamento literário absoluto.

Critérios iniciais para Flash Fiction:

- Limite de palavras.
- Presença de imagem âncora.
- Força da abertura.
- Virada perceptível.
- Fechamento em eco.
- Compressão.
- Respiração do texto.

Formulação curta para comunicação:

> O Vereda não diz se seu texto é bom. Ele mostra se o texto está cumprindo a forma que você escolheu.

Próximas etapas sugeridas:

- Refinar o score de Flash Fiction com critérios mais literários e calibrados.
- Permitir ocultar/mostrar o painel consultivo com um botão.
- Criar medidores próprios para crônica, conto curto, ensaio e roteiro.

## 2026-04-27 - Biblioteca consultiva ampliada

Decidimos expandir a primeira biblioteca de templates consultivos antes de refinar visualmente a experiência.

Entraram três novos formatos:

- Crônica.
- Conto curto.
- Ensaio.

Cada formato ganhou:

- Metadados de orientação.
- Estrutura lateral consultiva.
- Lembretes de escrita.
- Texto-base para criação de manuscrito, ainda compatível com o fluxo antigo de templates.
- Medidor próprio em `precision-engine.js`, com critérios fechados e offline.

Critérios iniciais:

- Crônica: cena cotidiana, olhar autoral, tom perceptível, fecho com eco e respiração em blocos.
- Conto curto: personagem em cena, conflito ativo, ação concreta, virada, voz em cena e progressão narrativa.
- Ensaio: tese, conectores, contraponto, exemplos/evidências e organização em blocos.

Essa etapa reforça a ideia de que o Vereda não oferece um único jeito de escrever. Cada forma literária passa a ter uma régua própria, consultiva e ajustável.

Próximas etapas sugeridas:

- Adicionar botão para ocultar/mostrar o painel consultivo.
- Refinar os pesos dos medidores com exemplos reais.
- Criar templates de matéria jornalística, romance resumido, poesia e ficha de personagem.

## 2026-04-27 - Criação explícita de notas

Decidimos tornar o início de escrita mais claro.

Antes, o Vereda tinha botões de "Novo manuscrito" e "Novo caderno", mas a pessoa ainda precisava entender que nota, manuscrito e template eram caminhos próximos. Agora o botão principal passa a ser "Nova nota" e abre uma escolha simples.

Opções atuais:

- Nota rápida: página curta para ideia, cena solta ou lembrete.
- Manuscrito em branco: documento livre para escrita longa.
- A partir do template: cria um documento usando o template consultivo selecionado no editor.

Por baixo, tudo continua como documento local do Vereda, compatível com persistência offline, `.vrda`, versões e exportações. A mudança é de clareza de fluxo, não de formato interno.

Próximas etapas sugeridas:

- Separar visualmente notas rápidas de manuscritos longos no Arquivo.
- Adicionar busca/filtro por tipo de documento.
- Criar atalho de teclado para abrir "Nova nota".

## 2026-04-27 - Arquivo filtrável por tipo

Decidimos melhorar a recuperação dos documentos depois de melhorar a criação.

O Arquivo agora separa visualmente os documentos por tipo:

- Todos.
- Notas rápidas.
- Manuscritos.
- Templates.

Cada filtro mostra contador próprio, e os cards passam a indicar tipo com ícone e rótulo. A classificação usa dados locais já existentes: `templateId`, `kind` e o prefixo de notas rápidas. Nada muda no formato `.vrda`; é uma camada de organização visual e de navegação.

Benefícios esperados:

- O escritor encontra notas rápidas sem misturar com textos longos.
- Templates criados ficam reconhecíveis no acervo.
- O Arquivo começa a parecer menos uma lista única e mais uma mesa organizada.

Próximas etapas sugeridas:

- Adicionar busca textual por título/descrição/conteúdo.
- Criar seção de recentes no topo do Arquivo.
- Permitir fixar documentos importantes.

## 2026-04-27 - Busca local no Arquivo

Decidimos adicionar busca textual ao Arquivo para complementar os filtros por tipo.

A busca funciona localmente e considera:

- Título.
- Tipo.
- Status.
- Marco atual.
- Descrição.
- Conteúdo do documento.
- Rótulo do tipo no Arquivo.

A busca é normalizada sem acentos e salva no estado local, junto com o filtro ativo. Nada é enviado para fora do navegador.

Benefícios esperados:

- Encontrar cenas, ideias e notas rápidas com menos atrito.
- Tornar o acervo útil quando houver muitos documentos.
- Preparar a base para busca mais refinada por tags no futuro.

Próximas etapas sugeridas:

- Criar seção de recentes no topo do Arquivo.
- Permitir fixar documentos importantes.
- Adicionar tags locais aos documentos.

## 2026-04-27 - Fechamento da sessão de trabalho

Pausamos o desenvolvimento ao final da etapa de busca local no Arquivo.

Estado atual do Vereda:

- App offline-first com PWA e cache versionado.
- `app.js` mantido como orquestrador de interface/estado.
- Motores separados: léxico, prova de escrita, `.vrda`, backup, arquivo, versões, exportação, templates e precisão.
- `.vrda` definido como formato nativo versionado.
- Criação explícita por "Nova nota": nota rápida, manuscrito em branco ou a partir do template consultivo.
- Editor com painel consultivo lateral, lado esquerdo/direito e largura ajustável.
- Medidores offline para Flash Fiction, Crônica, Conto curto e Ensaio.
- Arquivo com filtros por tipo e busca local por título, descrição, metadados e conteúdo.
- Prova de Escrita com sessões nomeadas e exportação `.proof.json`.

Decisões importantes para lembrar:

- O Vereda não terá IA atuando no funcionamento core.
- Templates são consultivos: ajudam a escrever, mas não substituem a página branca.
- O score mede aderência ao formato escolhido, não qualidade literária absoluta.
- Tudo que for nativo do produto entra e sai como `.vrda`; TXT/MD seguem como exportações externas.
- Motion e cores precisam comunicar; onde o movimento resolver comunicação, preferir motion discreto a texto explicativo.

Próximas etapas sugeridas para retomada:

- Criar seção de recentes no topo do Arquivo.
- Permitir fixar documentos importantes.
- Adicionar tags locais aos documentos.
- Refinar o painel consultivo com opção de ocultar/mostrar.
- Calibrar os medidores com exemplos reais de cada formato.

## 2026-04-28 - Recentes no Arquivo

Decidimos criar uma seção de documentos recentes no topo do Arquivo.

A busca e os filtros já ajudavam a encontrar documentos, mas o uso diário pede um caminho mais direto para retomar o que acabou de ser editado. A nova faixa "Continue de onde parou" usa o `updatedAt` local dos manuscritos e respeita o filtro/busca atual do Arquivo, mantendo a navegação coerente com o recorte que o escritor escolheu.

Benefícios esperados:

- O autor retoma textos recentes com menos atrito.
- O Arquivo passa a funcionar melhor como mesa de trabalho diária.
- Filtros por tipo ficam mais úteis, mostrando recentes de notas, manuscritos ou templates.
- A mudança aproveita metadados já existentes, sem alterar o formato `.vrda`.

Próximas etapas sugeridas:

- Permitir fixar documentos importantes.
- Adicionar tags locais aos documentos.
- Refinar o painel consultivo com opção de ocultar/mostrar.

## 2026-04-28 - Arquivo com fixados, ordenação e tags

Decidimos tratar a organização do Arquivo como um pacote coeso, em vez de avançar em microetapas isoladas.

Foram adicionados documentos fixados, ordenação local do acervo e tags por manuscrito. Os fixados criam uma faixa própria acima dos recentes, a ordenação permite alternar entre atualizados, título, progresso e tipo, e as tags aparecem nos cards, entram na busca local e acompanham exportações `.txt`/`.md`.

Essa etapa mantém o Vereda dentro da lógica offline-first: tudo é metadado local do documento, salvo no navegador e levado dentro do `.vrda`. A preferência de ordenação também passa a acompanhar o backup do acervo.

Benefícios esperados:

- Projetos prioritários ficam sempre à mão.
- O Arquivo se adapta a diferentes modos de trabalho: retomada, revisão, organização alfabética ou acompanhamento de progresso.
- Tags dão vocabulário próprio ao escritor sem exigir uma taxonomia rígida.
- A busca local fica mais expressiva sem depender de servidor ou IA.

Próximas etapas sugeridas:

- Criar ações rápidas no card: abrir, exportar e duplicar.
- Criar seção "Em andamento" para documentos em escrita ou revisão.
- Refinar o painel consultivo com opção de ocultar/mostrar.

## 2026-04-28 - Ações rápidas e seção Em andamento

Decidimos transformar o Arquivo em uma mesa de ação, não apenas uma área de organização.

Foram adicionadas ações rápidas nos cards principais: abrir no editor, exportar TXT, exportar MD e duplicar documento. A duplicação cria um novo manuscrito local com novo `id` e novo `updatedAt`, mantendo texto, metadados e tags, mas sem reaproveitar provas de escrita ou versões anteriores.

Também foi criada a seção "Em andamento", baseada nos status `Em escrita` e `Revisão`. Ela aparece no topo do Arquivo junto de Fixados e Recentes, respeitando busca e filtros ativos.

Benefícios esperados:

- O escritor age direto sobre o documento sem precisar trocar de contexto.
- Exportar um texto específico fica mais previsível.
- Duplicar rascunhos encoraja experimentação sem alterar o original.
- A seção Em andamento mantém prioridades editoriais visíveis mesmo quando o documento não é recente.

Próximas etapas sugeridas:

- Refinar o painel consultivo com opção de ocultar/mostrar.
- Criar confirmação e fluxo próprio para futuras ações destrutivas, como excluir ou arquivar.
- Considerar uma visualização compacta do Arquivo quando houver muitos documentos.

## 2026-04-28 - Editor com consulta recolhível

Decidimos dar ao escritor controle explícito sobre o painel consultivo do editor.

O painel lateral de templates agora pode ser ocultado e mostrado sem entrar no modo foco total. O estado fica salvo em `state.template.open`, junto com lado e largura do painel. Quando a consulta é recolhida, a página branca ocupa melhor o espaço e o botão "Template" permite voltar ao modo com referência lateral.

Essa etapa mantém a filosofia dos templates consultivos: eles ajudam quando o autor quer consultar forma, critérios e lembretes, mas não precisam permanecer visíveis durante toda a escrita.

Benefícios esperados:

- O editor alterna melhor entre escrita limpa e escrita com referência.
- A preferência do escritor persiste entre sessões.
- O painel consultivo continua acessível sem competir com a página branca.
- O modo foco total fica reservado para leitura/escrita imersiva, enquanto o novo controle cobre a alternância cotidiana.

Próximas etapas sugeridas:

- Melhorar a lista de versões locais com mais contexto e ações mais claras.
- Revisar UX mobile do editor, arquivo e criação de notas.
- Fazer um teste manual completo do fluxo M1.

## 2026-04-28 - Guia de Ofícios Literários

Decidimos substituir a linguagem visível de "templates consultivos" por "Guias de Escrita" e "Guia de Ofícios Literários".

A mudança nasceu de um material externo de referência sobre ofícios e gêneros literários. Em vez de importar esse HTML como página separada, dissolvemos a ideia no produto: a interface passa a falar em guias, ofícios e aderência à forma; o painel lateral vira "Guia de escrita"; a área de criação passa a se chamar "Guia de Ofícios Literários"; e termos restantes em inglês na interface foram adaptados para português brasileiro.

Também adicionamos novos guias locais inspirados nesse material:

- Romance comercial.
- Poesia lírica.
- Reportagem.
- Newsletter editorial.

Esses guias continuam sendo dados locais, sem IA em runtime e sem rede. A lógica técnica ainda pode usar nomes internos como `template` por compatibilidade, mas a linguagem do produto para o escritor passa a ser brasileira e editorial.

Benefícios esperados:

- O Vereda soa menos genérico e mais próximo do mercado literário brasileiro.
- A ideia de "ofício" amplia o produto para além de modelos de documento.
- O escritor escolhe uma prática de escrita, não apenas um molde.
- A interface fica mais consistente em PT-BR.

Próximas etapas sugeridas:

- Expandir o Guia de Ofícios com subgêneros restantes do material de referência.
- Criar medidores específicos para romance, poesia, reportagem e newsletter.
- Revisar nomes internos em uma etapa técnica futura, se isso deixar de ser apenas detalhe de implementação.

## 2026-04-28 - Textos-modelo no guia lateral

Decidimos enriquecer o lado do editor que antes podia parecer vazio demais quando a pessoa escolhia um guia.

Cada guia de escrita passa a ter um bloco de "Texto-modelo" no painel lateral, com autor ou obra de referência, motivo técnico da escolha, conjunto de autores brasileiros para estudo e uma pequena amostra original que serve também como placeholder do editor quando o manuscrito está vazio.

Optamos por não embutir trechos longos ou possivelmente reconstruídos de obras protegidas. O material do catálogo foi usado como curadoria: autores, obras, critérios e função técnica do exemplo. O texto exibido como placeholder é original do Vereda, inspirado na lógica do gênero, não cópia de obra literária.

Benefícios esperados:

- O editor vazio passa a sugerir uma temperatura de escrita, não apenas uma folha branca.
- O guia lateral vira uma pequena aula de ofício sem depender de texto explicativo longo.
- O produto ganha repertório brasileiro sem risco de misturar citação incerta com conteúdo autoral.
- A pessoa pode começar pelo gesto do gênero: cena, imagem, pauta, verso, tese ou gancho.

Próximas etapas sugeridas:

- Completar o catálogo para os 32 subgêneros do material de referência.
- Criar seleção de ofício antes da seleção de guia, quando a lista crescer.
- Permitir inserir o placeholder no manuscrito com um clique, se o autor quiser partir do exemplo.

## 2026-04-28 - Guia de Ofícios expandido e organizado

Decidimos expandir o Guia de Ofícios Literários sem transformar a tela em uma lista longa demais.

A navegação do estúdio agora é feita em duas camadas: primeiro a pessoa escolhe o ofício, depois escolhe o guia específico dentro daquele ofício. Cada aba de ofício mostra contador de guias disponíveis, e o painel lateral do editor passa a mostrar apenas guias do mesmo ofício do guia ativo, mantendo a consulta mais legível.

O catálogo agora cobre seis famílias:

- Ficção.
- Roteiro.
- Poesia.
- Não ficção.
- Jornalismo.
- Comercial e técnica.

Foram adicionados guias para romance literário, ficção científica, fantasia brasileira, terror e horror, fanfiction, roteiro de filme, documentário, dramaturgia, roteiro de games, podcast ficcional, slam, poesia digital, letra de música, memória/autobiografia, livro-reportagem, crítica cultural, coluna de opinião, copywriting, conteúdo digital, UX writing, roteiro para vídeo, ghostwriting, quadrinhos e escrita técnica.

Observação: o material de referência falava em 32 subgêneros, mas a contagem efetiva pela própria lista soma 33 quando "escrita acadêmica/técnica" entra junto do bloco comercial e técnico. Mantivemos os 33 para não perder nenhum caminho útil.

Benefícios esperados:

- O escritor encontra primeiro o território de trabalho, depois o formato.
- A lista cresce sem perder compreensão.
- O Vereda passa a cobrir escrita literária, audiovisual, jornalística, digital e técnica no mesmo sistema local.
- O painel consultivo segue mais calmo, filtrado pelo ofício em uso.

Próximas etapas sugeridas:

- Criar medidores específicos para os novos guias.
- Permitir busca rápida dentro do Guia de Ofícios.
- Permitir inserir a amostra do texto-modelo no manuscrito com um clique.

## 2026-04-28 - Estudo e vestibular no Guia de Ofícios

Decidimos absorver o material de "Estudo & Vestibular" como uma nova família do Guia de Ofícios, em vez de criar uma página separada.

A nova aba "Estudo e vestibular" reúne guias voltados a estudantes brasileiros, com foco em redação ENEM, Fuvest, Unicamp e produção escolar. A organização segue o documento de referência: competências do ENEM, fluxo por etapas, repertório sociocultural, conectivos e guias rápidos.

Foram adicionados guias para:

- Redação ENEM completa.
- Projeto de texto.
- Introdução ENEM.
- Desenvolvimento ENEM.
- Proposta de intervenção.
- Repertório sociocultural.
- Coesão e conectivos.
- Redação Fuvest e Unicamp.
- Dissertação escolar.
- Resumo e resenha.
- Interpretação literária.
- Revisão gramatical.

Também corrigimos o carregamento dos textos-modelo dos guias expandidos: quando um guia tem modelo próprio, ele agora é preservado mesmo sem entrada no catálogo legado.

Benefícios esperados:

- O Vereda passa a atender também estudantes, sem abandonar a lógica de ofícios.
- A redação ENEM fica acessível por competências e por etapa de escrita.
- O material de vestibular fica integrado ao mesmo editor, com placeholder prático ao lado.
- O produto ganha um caminho educacional claro para ensino médio, pré-vestibular e primeiros textos acadêmicos.

Próximas etapas sugeridas:

- Transformar o medidor de competências do HTML em análise local dentro do editor.
- Criar busca rápida nos guias para quem chega pelo tipo de prova.
- Permitir alternar entre "modo escritor" e "modo estudante" na entrada do estúdio.

## 2026-04-28 - Academia prática: mercado e anatomia do livro

Decidimos registrar o medidor ENEM como próximo pacote e avançar agora em duas frentes novas: o escritor no mercado e a consciência do livro como objeto.

Dois materiais externos foram dissolvidos no Vereda:

- Um guia de lançamento editorial para orientar o autor entre autopublicação, submissão a editoras, checklist de lançamento e mentalidade de carreira.
- Uma anatomia do livro para explicar capa, lombada, miolo, pré-texto, pós-texto, arquivo digital, página de capítulo e vocabulário editorial.

A integração aconteceu em duas camadas. No Arquivo, criamos uma área visual de "Academia prática", com cartões de rota, uma anatomia visual do livro e movimento parallax sutil. No Guia de Ofícios, criamos duas novas famílias acionáveis:

- Mercado editorial.
- Objeto livro.

Foram adicionados guias para mapa de lançamento, autopublicação independente, submissão a editoras, comparativo de publicação, checklist de lançamento, mentalidade de autor, partes físicas do livro, miolo e pré/pós-texto, ritos de entrada, livro como arquivo digital, página de capítulo e glossário do livro.

Benefícios esperados:

- O Vereda passa a funcionar como uma pequena academia prática para quem escreve e quer publicar.
- O escritor entende o mercado sem sair do mesmo fluxo onde organiza seus manuscritos.
- O livro deixa de ser tratado apenas como texto e passa a ser compreendido como objeto editorial, arquivo e experiência de leitura.
- Os layouts ricos dos materiais de referência foram preservados como esqueleto visual, mas adaptados à linguagem, paleta e interação do Vereda.

Próximas etapas sugeridas:

- Implementar o medidor ENEM local no editor.
- Criar uma busca transversal nos guias por termos como ISBN, query, capa, KDP e epígrafe.
- Transformar checklists de lançamento em itens marcáveis persistentes por projeto.

## 2026-04-28 - Academia acessível pelo topo

Decidimos que a Academia prática e o Guia de Ofícios não deveriam ficar escondidos dentro do Arquivo.

A navegação superior agora tem um módulo próprio chamado "Academia". Movemos para lá a área de Academia prática e o Guia de Ofícios Literários, deixando o Arquivo focado em acervo, filtros, documentos recentes e metadados.

Também ajustamos o visual da Academia para ficar mais alinhado ao guia de design do Vereda: fundo claro, cartões discretos, tipografia editorial e parallax apenas como textura sutil, não como peça destacada demais.

Benefícios esperados:

- A pessoa encontra os guias sem precisar entrar no Arquivo.
- O Arquivo volta a cumprir função de organização do acervo.
- A Academia ganha status de módulo central do produto.
- O visual fica mais coeso com a interface principal.

## 2026-04-28 - Navegação, busca, ENEM e marca vetorial

Decidimos fechar o primeiro pacote de navegabilidade da Academia.

A sidebar agora também tem atalho para Academia prática, além da navegação superior. O Guia de Ofícios ganhou busca textual para encontrar guias por termos como ENEM, ISBN, query, capa ou repertório sem depender apenas das abas de família.

Também adicionamos uma análise local para guias de Estudo e vestibular. O medidor ENEM estima aderência pelas cinco competências: norma padrão, compreensão da proposta, tese e repertório, coesão e proposta de intervenção. A análise continua local, indicativa e sem envio de dados.

O arquivo `icons/Logo.svg` passa a ser a marca vetorial oficial. Limpamos o fundo do SVG, aplicamos a cor principal do Vereda e regeneramos os ícones PNG do PWA, favicons e apple touch icon a partir da nova marca. O manifest também referencia o SVG e inclui atalhos de app.

Benefícios esperados:

- Academia fica acessível pela barra superior e pela sidebar.
- Guias ficam encontráveis mesmo com catálogo grande.
- Estudantes passam a receber feedback específico de redação ENEM no painel lateral.
- A marca visual fica consistente entre layout, favicon e PWA.

## 2026-04-28 - Painéis laterais recolhíveis

Decidimos melhorar a ergonomia estrutural do editor antes de adicionar mais módulos.

A Hierarquia à esquerda e a Análise Linguística à direita agora podem ser recolhidas e reabertas. A área central se ajusta automaticamente ao espaço disponível, e a preferência fica salva no estado local do usuário.

Benefícios esperados:

- O editor ganha mais área útil sem depender do modo foco completo.
- A pessoa pode alternar entre organização, escrita e análise conforme a etapa do trabalho.
- A interface fica mais próxima de ferramentas profissionais de escrita e IDEs.

Observação de produto:

- Em telas menores, a sidebar continua usando o comportamento mobile já existente, e o painel direito permanece oculto abaixo do breakpoint.

## 2026-04-28 - Roadmap operacional

Decidimos criar um documento de roadmap dentro do repositório para evitar perda de contexto, excesso de ambição sem sequência e promessas imprecisas.

O arquivo `VEREDA_ROADMAP.md` passa a registrar o estado atual do projeto, os princípios de responsabilidade, o próximo pacote sugerido e os critérios mínimos de pronto. A primeira grande proposta registrada é o "Espelho de Voz", uma ferramenta de autoconhecimento literário baseada em métricas locais e leitura interpretativa assumida.

Ponto de responsabilidade importante:

- O Espelho de Voz não deve vender afinidade literária como estilometria científica.
- Métricas reais, como TTR e média de palavras por frase, devem ser calculadas localmente.
- Leituras como público provável, assinatura de voz e ecos literários devem ser comunicadas como interpretação, não como verdade objetiva.

Benefícios esperados:

- O projeto ganha uma fonte de verdade mais estável que a conversa.
- Fica mais fácil retomar depois de pausas sem alucinar continuidade.
- Cada próximo pacote pode ser comparado com princípios e critérios de pronto.

## 2026-04-28 - Espelho de Voz local

Decidimos implementar o primeiro corte do Espelho de Voz como ferramenta da Academia.

A ferramenta aceita corpus colado ou usa o manuscrito ativo. A análise roda 100% localmente em `voice-engine.js`, sem API externa e sem envio de dados.

O Espelho calcula métricas objetivas:

- contagem de palavras, frases e parágrafos;
- TTR simples;
- densidade lexical aproximada;
- média e variação de palavras por frase;
- repetição de palavras relevantes;
- pontuação;
- campos semânticos dominantes por léxicos locais;
- temperatura emocional por léxicos locais.

Também devolve uma leitura interpretativa assumida:

- título provisório da voz;
- gesto literário provável;
- ecos possíveis;
- forças;
- pontos cegos;
- público provável;
- exercícios de revisão.

Responsabilidade de produto:

- O Espelho não promete afinidade científica com autores canônicos.
- A saída explica que métricas são calculadas localmente, enquanto voz, público e ecos literários são hipóteses heurísticas.
- O objetivo é dar vocabulário de autoconhecimento ao escritor, não produzir diagnóstico definitivo.

## 2026-04-28 - Logo vetorial final

Atualizamos a marca oficial do Vereda a partir do arquivo `veredalogo_ok.svg`.

O novo SVG foi copiado para `icons/Logo.svg`, mantendo a cor principal do produto e fundo transparente. A partir dele, regeneramos os ícones PNG do PWA, favicons e apple touch icon. O cache offline foi versionado para garantir que instalações existentes recebam a nova marca.

Validação feita:

- PNG 512 com canto transparente.
- Centro do símbolo na cor `#2e4d43`.
- Ícones 512, 192, 180, 32, 16 e `.ico` recriados.

## 2026-04-28 - Paletas brasileiras

Decidimos incorporar o esquema oficial de paletas brasileiras ao Vereda.

A interface agora tem um botão de paleta na barra superior, que alterna entre Vereda, Cerrado, Mata Atlântica, Amazônia e versões escuras derivadas das mesmas famílias cromáticas. A escolha fica salva localmente.

Também adicionamos na Academia um texto de produto sobre atenção ao detalhe: as cores partem de paisagens brasileiras e reforçam que o Vereda pretende tratar o produto digital com a mesma minúcia que um bom escritor dedica à frase.

Benefícios esperados:

- O Vereda ganha identidade visual brasileira sem perder sobriedade.
- O usuário pode escolher um ambiente de escrita mais claro ou mais escuro.
- A paleta deixa de ser decoração e passa a comunicar postura editorial: atenção, detalhe, textura e ritmo.

## 2026-04-28 - Balão contextual das paletas

Revisamos a explicação das paletas brasileiras.

O texto sobre cores saiu de uma seção fixa na Academia e foi movido para um balão contextual ligado ao botão de paleta. Assim, a pessoa entende o motivo de cada esquema de cores no momento exato em que escolhe a aparência do Vereda.

Cada paleta agora tem uma descrição própria, conectando a escolha cromática à experiência de escrita: Cerrado, Mata Atlântica, Amazônia e suas versões escuras.
