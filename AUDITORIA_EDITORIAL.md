# Auditoria Editorial do Vereda

Data: 2026-04-30  
Camada: leitura de persona, promessa, identidade e reputação.  
Base: `AUDITORIA_PRODUTO.md` + diagnóstico editorial externo trazido pelo fundador.

## Por que este documento existe

Esta auditoria guarda a crítica interna do Vereda em linguagem de produto, não de engenharia pura. A auditoria técnica diz o que existe no código. Esta camada pergunta o que uma pessoa sente ao encontrar esse código transformado em interface.

O objetivo não é defender o produto. É impedir que a substância do Vereda fique escondida atrás de pontas soltas pequenas, mas visíveis.

## 1. Leitura de persona

### Luísa, 28 anos, escritora de conto

Luísa chega esperando um editor limpo e talvez algum apoio de escrita. O encantamento provável está no modo foco, mas ele depende de descoberta. Sem onboarding, ela encontra uma interface rica antes de entender por onde começar.

O maior risco de abandono é o Arquivo: os cards `Personagens` e `Cenários` parecem clicáveis, trazem números específicos e não abrem nada. Isso comunica produto quebrado ou usuário perdido. Para uma primeira visita, os dois sentimentos são caros.

Veredicto: volta se o editor encantar; abandona se tropeçar nos cards vazios antes.

### Rafael, 35 anos, jornalista escrevendo livro-reportagem

Rafael valoriza organização, apuração e estrutura. Ele tende a se encantar com a Academia, especialmente livro-reportagem, mercado editorial e direitos do autor.

A fricção aparece quando ele tenta transformar o livro em projeto: capítulos, fontes, personagens, lugares e relações ainda não formam uma arquitetura navegável. O segundo atrito é a exportação: `.txt` e `.md` existem, mas `.docx` não.

Veredicto: fica por meses, mas com Word/LibreOffice aberto em paralelo. Não indica com confiança enquanto faltar `.docx`.

### Camila, 17 anos, foco ENEM

Camila procura uma coisa específica: redação ENEM. O medidor existe e as cinco competências estão implementadas, mas o caminho até ele não é óbvio. Ela precisa encontrar a Academia, escolher Estudo e Vestibular, selecionar o guia e perceber que o painel lateral do Editor mede aderência.

Veredicto: pode gostar dos guias, mas talvez não encontre o medidor sem alguém explicar.

## 2. Promessas e realidade

**"Isso foi feito para escritores de verdade"** -> cumpre com ressalva.  
A profundidade dos guias, Espelho de Voz, Direitos do Autor e Vocabulário Decolonizador sustenta a promessa. A ressalva é o último metro editorial: `.docx`.

**"Você não precisa de internet para trabalhar"** -> cumpre com ressalva.  
O core funciona offline depois do cache. A primeira visita ainda depende de Google Fonts/Material Symbols para aparência ideal.

**"Suas ferramentas estão todas aqui"** -> não cumpre ainda.  
A coleção é forte, mas `.docx`, estrutura de projeto e cards vazios quebram a sensação de casa completa.

**"A ferramenta não interfere, ela serve"** -> cumpre.  
Não há gamificação, ruído social ou captura de atenção. O produto respeita o escritor.

## 3. Identidade real do produto

O Vereda quer ser o ateliê offline do escritor brasileiro: editor, arquivo, estudo do ofício, prova de autoria e ferramentas críticas em um mesmo espaço.

O Vereda hoje é um editor funcional com uma Academia acima da média e ferramentas locais raras, embalado por uma superfície ainda com pontas soltas: pouca descoberta, alguns nomes oscilantes, botões sem destino e ausência de `.docx`.

O produto tem alma antes de ter acabamento. A substância supera a superfície, mas a superfície é a primeira coisa que o usuário encontra.

## 4. Riscos reais de reputação

### Risco 1: "O app tem coisas que não funcionam"

Gatilhos:

- cards `Personagens` e `Cenários` com números específicos e sem ação;
- botão `Configurações` sem comportamento.

Neutralizador:

- remover, ocultar ou implementar esses elementos no curto prazo;
- nunca exibir número específico em card estático.

### Risco 2: "Promete offline, mas depende de internet"

Gatilhos:

- primeira visita com conexão instável;
- fontes e ícones remotos degradando a interface.

Neutralizador:

- fallback visual mais digno;
- cache local ou substituição gradual dos ícones críticos por assets locais.

### Risco 3: "Escrevi tudo aqui e não consigo enviar"

Gatilho:

- exportação só em `.txt` e `.md` quando editoras pedem `.docx`.

Neutralizador:

- `.docx` básico para submissão editorial, mesmo sem formatação avançada.

## 5. Onde o Vereda já supera a promessa

### Academia

A Academia entrega mais do que o usuário médio espera: 60 guias, ENEM, mercado editorial, objeto livro e direitos do autor integrados ao editor. Em português, offline e com linguagem de ofício, isso é raro.

### Vocabulário Decolonizador

É uma decisão editorial forte e distintiva. Não moraliza, não bloqueia, não envia texto para servidor. Oferece uma lente crítica local. Esse módulo comunica valores de produto melhor do que qualquer manifesto.

## 6. Métricas editoriais de confiança

Honestidade com o usuário: 7/10.  
O núcleo entrega. Os pontos fracos são cards vazios e promessa offline que precisa de nuance na primeira visita.

Coerência de identidade: 6/10.  
O tom é reconhecível, mas os nomes variam: `Manuscrito`/`Editor`, `Prova de Escrita`/`Prova de autoria`, `Biblioteca gramatical`/`Inspeção lexical`.

Utilidade diária: 8/10.  
Escrever, estudar e revisar funcionam. A nota cai por `.docx` e arquitetura de projeto.

Descoberta: 5/10.  
As melhores ferramentas existem, mas ainda dependem de exploração.

Confiança offline/dados: 7/10.  
Backup, `.vrda`, prova e autosave externo existem. Falta suavizar Firefox/Safari e primeira visita offline.

## 7. Veredicto editorial

O Vereda está no ponto em que já tem substância suficiente para impressionar, mas ainda carrega arestas pequenas o bastante para parecer inacabado a quem não confia nele. O próximo salto não depende de adicionar muitas features. Depende de remover dúvidas.

Três correções mudam a percepção do produto:

1. Resolver cards e botões vazios.
2. Criar onboarding mínimo de primeira visita.
3. Entregar `.docx` básico.

Com isso, o Vereda deixa de pedir explicação e começa a se defender sozinho.

## 8. Plano faseado de solução

### Fase 1: Confiança imediata

Objetivo: remover a sensação de produto quebrado.

Commits sugeridos:

- Remover ou ativar cards `Personagens` e `Cenários`.
  Arquivos: `index.html`, `app.js`, `styles.css`.
  Correção mínima: transformar em filtros reais de tipo no Arquivo ou ocultar até existir visão dedicada.

- Resolver botão `Configurações`.
  Arquivos: `index.html`, `app.js`.
  Correção mínima: abrir um modal simples com tema, foco, backup e offline; ou ocultar o botão.

- Ajustar estado offline.
  Arquivos: `app.js`, `index.html`.
  Correção mínima: trocar "Pronto sem internet" por estados progressivos: "Preparando offline", "Pronto sem internet", "Offline disponível após primeira visita".

### Fase 2: Último metro editorial

Objetivo: permitir que o escritor saia do Vereda para o mercado sem retrabalho humilhante.

Commits sugeridos:

- Exportação `.docx` básica.
  Arquivos: `export-engine.js`, `app.js`, `index.html`.
  Correção mínima: gerar DOCX com título, metadados e corpo em parágrafos simples.

- Preset de submissão editorial.
  Arquivos: `export-engine.js`, `template-engine.js`, `rights-engine.js`.
  Correção mínima: opção "Submissão editorial" com fonte legível, título, autor, numeração simples e metadados mínimos.

### Fase 3: Descoberta e primeira visita

Objetivo: fazer o usuário encontrar o que já existe.

Commits sugeridos:

- Onboarding local de primeira visita.
  Arquivos: `app.js`, `index.html`, `styles.css`.
  Correção mínima: guardar `vereda.onboarding.v1` e mostrar 3 caminhos: "Escrever", "Preparar submissão", "Treinar redação/voz".

- Cartões de ferramentas originais na entrada da Academia.
  Arquivos: `index.html`, `styles.css`.
  Correção mínima: destacar Espelho de Voz, Vocabulário Decolonizador, Direitos do Autor e ENEM com chamadas diretas.

- Atalho ENEM.
  Arquivos: `app.js`, `template-engine.js`.
  Correção mínima: botão "Abrir medidor ENEM" que seleciona guia ENEM e volta ao Editor com painel aberto.

### Fase 4: Projeto literário real

Objetivo: transformar `type` em arquitetura de trabalho.

Commits sugeridos:

- Visão agrupada por tipo no Arquivo.
  Arquivos: `archive-engine.js`, `app.js`, `styles.css`.
  Correção mínima: grupos navegáveis de Manuscritos, Cenas, Personagens, Lugares, Fontes e Submissões.

- Relações básicas entre documentos.
  Arquivos: `archive-engine.js`, `app.js`.
  Correção mínima: em Cena, selecionar personagens e lugar por ID; exibir links no detalhe.

- Projeto como envelope leve.
  Arquivos: `archive-engine.js`, `app.js`.
  Correção mínima: documento `projeto` com sinopse, estágio e vínculo visual com os demais documentos.

### Fase 5: Offline mais honesto

Objetivo: tornar a promessa offline menos dependente de contexto ideal.

Commits sugeridos:

- Fallback visual sem Google Fonts.
  Arquivos: `index.html`, `styles.css`, `service-worker.js`.
  Correção mínima: garantir que UI e ícones críticos continuem legíveis antes da fonte remota carregar.

- Lembrete de backup para Firefox/Safari.
  Arquivos: `filesystem-backup-engine.js`, `app.js`.
  Correção mínima: quando File System Access API não existir, sugerir rotina de exportação `.vrda` com lembrete local.

## 9. Critério de acompanhamento

Esta auditoria deve ser revisitada após cada fase. A pergunta principal não é "quantas features existem?", mas:

- o usuário entende por onde começar?
- alguma coisa parece quebrada?
- ele consegue escrever, guardar, revisar e enviar sem sair da Vereda?
- as promessas visíveis continuam verdadeiras?
