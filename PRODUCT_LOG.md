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
