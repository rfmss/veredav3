(function templateEngine(global) {
  const oficios = [
    { id: "ficcao", label: "Ficção", icon: "auto_stories" },
    { id: "roteiro", label: "Roteiro", icon: "movie" },
    { id: "poesia", label: "Poesia", icon: "format_quote" },
    { id: "nao-ficcao", label: "Não ficção", icon: "article" },
    { id: "jornalismo", label: "Jornalismo", icon: "newspaper" },
    { id: "comercial-tecnica", label: "Comercial e técnica", icon: "workspaces" },
    { id: "estudo-vestibular", label: "Estudo e vestibular", icon: "school" },
    { id: "mercado-editorial", label: "Mercado editorial", icon: "storefront" },
    { id: "objeto-livro", label: "Objeto livro", icon: "book_4" },
    { id: "direitos-autorais", label: "Direitos do autor", icon: "gavel" },
  ];

  const templates = [
    {
      id: "roteiro-tv",
      oficio: "roteiro",
      label: "Roteiro de TV",
      icon: "movie",
      title: "Roteirista de série",
      kind: "Roteiro de TV",
      chapter: "Teaser",
      description: "Estrutura inicial para episódio de série, com teaser, atos e gancho final.",
      guidance: {
        meta: ["Formato", "Episódio de série", "Cenas visíveis", "Atos + gancho"],
        sections: [
          ["Teaser", "A cena que prende antes da abertura."],
          ["Ato 1", "O conflito nasce e muda a rotina."],
          ["Ato 2", "A pressão cresce e cobra escolha."],
          ["Ato 3", "A consequência chega em cena."],
          ["Tag / gancho", "Última imagem que puxa o próximo episódio."],
        ],
        reminders: [
          "Escreva o que a câmera vê.",
          "Troque sentimento abstrato por gesto observável.",
          "Uma página tende a equivaler a cerca de um minuto.",
        ],
      },
      steps: [
        {
          eyebrow: "Comece pela cena",
          title: "Você vai escrever uma série.",
          body:
            "Não precisa dominar todos os termos técnicos agora. O formato vai aparecer enquanto você escreve: cena, ação, fala e silêncio.",
          items: [],
          primary: "Quero começar",
          secondary: "Me conta mais primeiro",
        },
        {
          eyebrow: "O que é um roteiro?",
          title: "Um roteiro é um guia de imagens.",
          body:
            'Você não escreve "ela estava triste". Você escreve o que a câmera vê: "Ela olha para a xícara. O café esfriou."',
          tip: "Em média, uma página de roteiro equivale a cerca de 1 minuto de cena.",
          primary: "Entendi, continuar",
        },
        {
          eyebrow: "Como o guia funciona",
          title: "A estrutura já está pronta para escrever.",
          body: "Cada seção tem uma função clara, sem virar aula. Você troca o marcador pela cena que quer colocar no mundo.",
          items: [
            ["Teaser", "A cena que prende antes da abertura", "done"],
            ["Ato 1, 2 e 3", "Onde o conflito nasce, cresce e resolve", "done"],
            ["Tag / gancho", "A cena final que puxa para o próximo episódio", "done"],
          ],
          primary: "Ver o guia",
        },
        {
          eyebrow: "Antes de abrir",
          title: "Pronto para escrever.",
          body: "Escolha uma imagem de TV que você gostaria de assistir. Só isso. O resto pode nascer em rascunho.",
          items: [
            ["Pense em uma cena visível", "Algo que a câmera consiga acompanhar.", "todo"],
            ["Preencha primeiro o teaser", "O episódio inteiro não precisa aparecer hoje.", "todo"],
            ["Rascunho ainda não é roteiro final", "Toda versão boa começa torta.", "todo"],
          ],
          primary: "Criar roteiro",
        },
      ],
      text: `# [TÍTULO DO EPISÓDIO]

Série: [nome da série]
Episódio: [número ou título]
Formato: [drama, comédia, docuficção, minissérie]

## TEASER

INT./EXT. [LOCAL] - [DIA/NOITE]

[Abra com uma imagem forte. O que a câmera vê primeiro?]

[Personagem] [faz uma ação visível].

PERSONAGEM
[fala curta, se houver]

## ATO 1

[Apresente o conflito central do episódio. O que muda para o personagem?]

## ATO 2

[A pressão aumenta. Uma escolha fica mais difícil.]

## ATO 3

[A consequência chega. Algo precisa se resolver ou quebrar.]

## TAG / GANCHO

[Última imagem do episódio. O que faz o público querer continuar?]`,
    },
    {
      id: "flash-fiction",
      oficio: "ficcao",
      label: "Ficção-relâmpago",
      icon: "edit_note",
      title: "Ficção-relâmpago",
      kind: "Ficção-relâmpago",
      chapter: "Imagem âncora",
      description: "Guia para uma história breve, com imagem âncora, tensão, virada e fechamento.",
      guidance: {
        meta: ["Subformato", "Relâmpago - até 500 palavras", "Imagem âncora", "Virada"],
        sections: [
          ["Premissa", "Uma frase: o conflito em estado bruto."],
          ["Imagem âncora", "Objeto, gesto ou detalhe sensorial que carrega o peso."],
          ["Abertura", "Entre em cena e crie uma pergunta."],
          ["Desenvolvimento", "Aprofunde a tensão sem explicar demais."],
          ["Virada", "Algo muda para o leitor ou para o personagem."],
          ["Fechamento", "A última frase conversa com a primeira."],
        ],
        reminders: [
          "Cada palavra precisa justificar sua presença.",
          "Ficção-relâmpago vive de imagem, não de explicação.",
          "Quando terminar, teste cortar 20%.",
        ],
      },
      steps: [
        {
          eyebrow: "Menos de 1.000 palavras",
          title: "Uma história inteira em poucas linhas.",
          body:
            "Ficção-relâmpago não é conto incompleto. É uma forma própria: cada palavra precisa justificar sua presença.",
          primary: "Quero escrever",
          secondary: "O que é ficção-relâmpago?",
        },
        {
          eyebrow: "Subformatos",
          title: "Ficção-relâmpago não é só tamanho.",
          body: "Escolha o fôlego certo para o que você quer contar.",
          items: [
            ["Micro - até 100 palavras", "Um momento, uma virada, nenhum desperdício.", "info"],
            ["Relâmpago - até 500 palavras", "Cabe abertura, conflito e fechamento.", "done"],
            ["Ficção súbita - até 1.000 palavras", "Mais espaço sem perder tensão.", "warn"],
          ],
          primary: "Continuar",
        },
        {
          eyebrow: "O segredo do formato",
          title: "Começa com uma imagem, não com uma ideia.",
          body:
            "Pense em cena: uma mulher reconhece um casaco, dois irmãos dividem o último item, alguém espera uma ligação que não vem.",
          primary: "Entendi",
        },
        {
          eyebrow: "Antes de abrir",
          title: "Três coisas para levar.",
          body: "A primeira versão precisa existir antes de ser elegante.",
          items: [
            ["A primeira frase cria uma pergunta", "O leitor precisa querer atravessar a próxima linha.", "todo"],
            ["O fim conversa com a abertura", "A virada aparece sem explicação demais.", "todo"],
            ["Depois, corte 20%", "O que sobrar tende a ficar mais vivo.", "todo"],
          ],
          primary: "Criar flash",
        },
      ],
      text: `# [TÍTULO]

Forma: Ficção-relâmpago
Meta: até [500] palavras

## Imagem âncora

[Escreva uma imagem concreta: alguém, algum lugar, algum gesto.]

## Primeira frase

[Abra criando uma pergunta no leitor.]

## Tensão

[O que está em jogo, mesmo que pareça pequeno?]

## Virada

[O detalhe que muda a leitura da cena.]

## Fechamento

[Uma última imagem. Não explique demais.]`,
    },
    {
      id: "cronica",
      oficio: "nao-ficcao",
      label: "Crônica",
      icon: "article",
      title: "Crônica",
      kind: "Crônica",
      chapter: "Cena cotidiana",
      description: "Guia para transformar uma observação do cotidiano em texto breve com olhar autoral.",
      guidance: {
        meta: ["Cotidiano", "Olhar autoral", "Leveza", "Fecho reflexivo"],
        sections: [
          ["Cena cotidiana", "Um recorte pequeno: fila, ônibus, cozinha, praça, conversa."],
          ["Olhar", "O que só você percebeu nessa cena?"],
          ["Desvio", "A crônica ganha vida quando o comum aponta para outra coisa."],
          ["Tom", "Pode ser lírico, irônico, afetivo, seco ou melancólico."],
          ["Fecho", "Uma frase que abre ressonância sem fechar demais."],
        ],
        reminders: [
          "A crônica nasce pequena e aponta para algo maior.",
          "Evite explicar a moral do texto.",
          "Deixe uma fresta para o leitor entrar.",
        ],
      },
      steps: [
        {
          eyebrow: "Cena mínima",
          title: "Uma crônica começa quando o comum pisca.",
          body: "Pegue uma cena de todos os dias e olhe de novo. O texto nasce desse segundo olhar.",
          primary: "Criar crônica",
        },
      ],
      text: `# [TÍTULO]

Forma: Crônica

## Cena cotidiana

[Qual cena pequena acendeu o texto?]

## Olhar

[O que existe nessa cena que quase ninguém percebeu?]

## Desvio

[Para onde essa cena leva: memória, humor, crítica, espanto?]

## Fecho

[Uma última frase que deixa eco.]`,
    },
    {
      id: "conto-curto",
      oficio: "ficcao",
      label: "Conto curto",
      icon: "auto_stories",
      title: "Conto curto",
      kind: "Conto curto",
      chapter: "Conflito central",
      description: "Guia para narrativa curta com personagem, conflito, cena e consequência.",
      guidance: {
        meta: ["Personagem", "Conflito", "Cena", "Consequência"],
        sections: [
          ["Personagem em situação", "Quem está em cena e o que essa pessoa quer?"],
          ["Conflito", "O que impede, ameaça ou transforma esse desejo?"],
          ["Cena progressiva", "Cada bloco precisa alterar a pressão do conto."],
          ["Ponto de virada", "Algo muda de estado: informação, relação, escolha."],
          ["Consequência", "O fim mostra o preço da travessia."],
        ],
        reminders: [
          "Conto não é resumo de enredo: é acontecimento em cena.",
          "O conflito precisa cobrar alguma coisa.",
          "O final deve parecer inevitável depois que chega.",
        ],
      },
      steps: [
        {
          eyebrow: "Conflito central",
          title: "Um conto curto precisa de pressão.",
          body: "Comece por alguém querendo algo diante de uma resistência concreta.",
          primary: "Criar conto",
        },
      ],
      text: `# [TÍTULO]

Forma: Conto curto

## Personagem

[Quem atravessa este conto?]

## Desejo

[O que essa pessoa quer, mesmo que não diga?]

## Conflito

[O que impede ou cobra uma escolha?]

## Cena

[O acontecimento principal em cena.]

## Consequência

[O que mudou depois disso?]`,
    },
    {
      id: "ensaio",
      oficio: "nao-ficcao",
      label: "Ensaio",
      icon: "subject",
      title: "Ensaio",
      kind: "Ensaio",
      chapter: "Tese provisória",
      description: "Guia para defender uma ideia com percurso, tensão argumentativa e voz própria.",
      guidance: {
        meta: ["Tese", "Argumento", "Contraponto", "Conclusão aberta"],
        sections: [
          ["Tese provisória", "O que você quer investigar ou sustentar?"],
          ["Contexto", "Por que essa questão importa agora?"],
          ["Argumento", "Ideias organizadas em progressão, não em acúmulo."],
          ["Contraponto", "O texto ganha confiança quando reconhece tensão."],
          ["Fecho", "Conclusão que entrega caminho, não só resumo."],
        ],
        reminders: [
          "Ensaio pode pensar em voz alta, mas precisa de direção.",
          "Evite parágrafos que só repetem a tese.",
          "Um bom contraponto fortalece a ideia central.",
        ],
      },
      steps: [
        {
          eyebrow: "Ideia em movimento",
          title: "Um ensaio pensa com o leitor.",
          body: "Comece por uma tese provisória e deixe o texto provar, ajustar ou tensionar essa ideia.",
          primary: "Criar ensaio",
        },
      ],
      text: `# [TÍTULO]

Forma: Ensaio

## Tese provisória

[Qual ideia este texto quer investigar?]

## Contexto

[Por que isso importa?]

## Argumento

[Desenvolva a ideia em progressão.]

## Contraponto

[Que objeção ou nuance precisa entrar?]

## Fecho

[O que o leitor leva depois da travessia?]`,
    },
    {
      id: "romance-comercial",
      oficio: "ficcao",
      label: "Romance comercial",
      icon: "menu_book",
      title: "Romance comercial",
      kind: "Romance comercial",
      chapter: "Premissa e gancho",
      description: "Guia para narrativa longa com enredo forte, personagem com objetivo claro e experiência de leitura contínua.",
      guidance: {
        meta: ["Ficção", "80.000 a 120.000 palavras", "Três atos", "Gancho de capítulo"],
        sections: [
          ["Promessa ao leitor", "Que tipo de experiência este romance entrega: suspense, romance, aventura, drama histórico?"],
          ["Protagonista", "Quem deseja algo com força suficiente para sustentar muitas páginas?"],
          ["Conflito externo", "Qual obstáculo concreto impede o objetivo?"],
          ["Viradas", "Quais mudanças de rumo renovam a leitura ao longo dos atos?"],
          ["Gancho de capítulo", "O que faz o leitor continuar depois de cada bloco?"],
        ],
        reminders: [
          "Defina o gênero antes de escrever: cada público traz expectativas próprias.",
          "Capítulos curtos ajudam quando o motor é enredo.",
          "O romance comercial não é menor: ele firma outro contrato com o leitor.",
        ],
      },
      steps: [
        {
          eyebrow: "Ficção de fôlego",
          title: "Um romance comercial promete travessia.",
          body: "Comece pela experiência do leitor: que tensão, desejo ou pergunta sustenta o livro inteiro?",
          primary: "Criar romance",
        },
      ],
      text: `# [TÍTULO]

Forma: Romance comercial
Gênero: [suspense, romance histórico, fantasia, drama familiar...]

## Promessa ao leitor

[Que experiência este livro entrega?]

## Protagonista

[Quem conduz a história e o que essa pessoa quer?]

## Conflito externo

[O que impede esse desejo de se realizar?]

## Viradas principais

[Liste três mudanças de rumo que renovam a leitura.]

## Gancho do primeiro capítulo

[Qual pergunta faz o leitor virar a página?]`,
    },
    {
      id: "poesia-lirica",
      oficio: "poesia",
      label: "Poesia lírica",
      icon: "format_quote",
      title: "Poesia lírica",
      kind: "Poesia lírica",
      chapter: "Imagem e som",
      description: "Guia para poema com consciência de imagem, emoção, som e virada final.",
      guidance: {
        meta: ["Poesia", "Verso livre ou forma fixa", "Imagem + som", "Leitura em voz alta"],
        sections: [
          ["Núcleo sensível", "Que emoção, pergunta ou imagem pede poema?"],
          ["Imagem central", "Qual objeto, cena ou gesto carrega o sentido?"],
          ["Música do verso", "Onde o poema respira, repete, corta ou acelera?"],
          ["Virada", "Que mudança de imagem ou pensamento abre o final?"],
          ["Leitura em voz alta", "O poema aguenta ser ouvido?"],
        ],
        reminders: [
          "Poesia existe no som antes de existir na explicação.",
          "Evite dizer a emoção cedo demais: deixe a imagem trabalhar.",
          "A última linha precisa mudar a temperatura do poema.",
        ],
      },
      steps: [
        {
          eyebrow: "Imagem e respiração",
          title: "Um poema começa quando a linguagem escuta.",
          body: "Escolha uma imagem concreta e leia cada verso em voz alta. O sentido também mora no som.",
          primary: "Criar poema",
        },
      ],
      text: `# [TÍTULO]

Forma: Poesia lírica

## Núcleo

[Que imagem, emoção ou pergunta acendeu o poema?]

## Versos

[Escreva sem explicar cedo demais.]

## Som

[Leia em voz alta e marque cortes, repetições ou silêncios.]

## Virada

[Qual imagem final muda a leitura do começo?]`,
    },
    {
      id: "reportagem",
      oficio: "jornalismo",
      label: "Reportagem",
      icon: "newspaper",
      title: "Reportagem",
      kind: "Reportagem",
      chapter: "Pauta e apuração",
      description: "Guia para texto jornalístico com pauta clara, fontes, contexto e apuração verificável.",
      guidance: {
        meta: ["Jornalismo", "Apuração factual", "Fontes múltiplas", "Lide forte"],
        sections: [
          ["Pauta", "Qual pergunta pública este texto precisa responder?"],
          ["Lide", "O que o leitor precisa saber primeiro?"],
          ["Fontes", "Quem confirma, contradiz ou contextualiza a história?"],
          ["Contexto", "Que dado ou histórico impede leitura superficial?"],
          ["Checagem", "O que precisa ser verificado antes da publicação?"],
        ],
        reminders: [
          "A melhor pauta nasce de uma pergunta concreta.",
          "Fonte única raramente sustenta reportagem.",
          "A clareza do lide não substitui a profundidade da apuração.",
        ],
      },
      steps: [
        {
          eyebrow: "Apuração antes de opinião",
          title: "Reportagem é o ofício de ir atrás.",
          body: "Comece pela pergunta que move a pauta e liste o que ainda precisa ser confirmado.",
          primary: "Criar reportagem",
        },
      ],
      text: `# [TÍTULO]

Forma: Reportagem

## Pauta

[Qual pergunta esta reportagem responde?]

## Lide

[O fato mais importante, com clareza.]

## Fontes

- [Fonte 1]
- [Fonte 2]
- [Fonte de contraponto]

## Contexto

[Dados, histórico ou cenário necessário.]

## Checagem

[O que ainda precisa ser confirmado?]`,
    },
    {
      id: "newsletter-editorial",
      oficio: "jornalismo",
      label: "Newsletter editorial",
      icon: "alternate_email",
      title: "Newsletter editorial",
      kind: "Newsletter editorial",
      chapter: "Edição e voz",
      description: "Guia para publicação periódica por e-mail, com voz consistente, curadoria e relação direta com o leitor.",
      guidance: {
        meta: ["Conteúdo editorial", "Periodicidade", "Voz própria", "Relação direta"],
        sections: [
          ["Promessa da edição", "Por que esta edição merece chegar à caixa de entrada?"],
          ["Abertura", "Gancho pessoal, editorial ou informativo."],
          ["Corpo", "Ideia principal, curadoria ou narrativa da semana."],
          ["Ritual", "Quadro recorrente que cria familiaridade."],
          ["Chamada final", "O que o leitor faz, pensa ou espera depois?"],
        ],
        reminders: [
          "Newsletter é contrato de periodicidade e voz.",
          "Você não precisa falar com todos: precisa ser reconhecível para os seus leitores.",
          "A edição boa parece conversa, mas tem estrutura.",
        ],
      },
      steps: [
        {
          eyebrow: "Audiência própria",
          title: "Uma newsletter cria encontro recorrente.",
          body: "Defina a promessa da edição antes de escrever. O leitor abriu espaço na caixa de entrada dele.",
          primary: "Criar newsletter",
        },
      ],
      text: `# [TÍTULO DA EDIÇÃO]

Forma: Newsletter editorial
Periodicidade: [semanal, quinzenal, mensal]

## Promessa da edição

[Por que esta edição existe?]

## Abertura

[Comece com voz, cena, pergunta ou notícia.]

## Corpo

[Desenvolva a ideia principal ou curadoria.]

## Quadro recorrente

[Uma seção que pode voltar nas próximas edições.]

## Fecho

[Convite, pergunta ou chamada final.]`,
    },
    ...createExpandedGuides(),
  ];

  function createExpandedGuides() {
    return expandedGuideData().map(createGuide);
  }

  function createGuide({ id, oficio, label, icon, chapter, description, meta, sections, reminders, text, model, steps: customSteps }) {
    return {
      id,
      oficio,
      label,
      icon,
      title: label,
      kind: label,
      chapter,
      description,
      guidance: { meta, sections, reminders },
      steps: customSteps || [
        {
          eyebrow: "Ofício",
          title: `${label} tem uma lógica própria.`,
          body: description,
          primary: `Criar ${label.toLowerCase()}`,
        },
      ],
      text: `# [TÍTULO]\n\nForma: ${label}\n\n${text}`,
      model,
    };
  }

  function expandedGuideData() {
    return [
      {
        id: "romance-literario",
        oficio: "ficcao",
        label: "Romance literário",
        icon: "local_library",
        chapter: "Voz e fissura",
        description: "Guia para narrativa longa em que linguagem, ambiguidade e consciência formal carregam a travessia.",
        meta: ["Ficção", "Voz", "Ambiguidade", "Forma"],
        sections: [["Voz inevitável", "Que frase só este narrador poderia dizer?"], ["Ferida central", "Que conflito íntimo move o livro?"], ["Forma", "O texto pede fragmento, fluxo ou capítulos?"], ["Imagem recorrente", "Que objeto retorna transformado?"], ["Acúmulo", "O romance faz ressoar, não apenas resolver."]],
        reminders: ["A voz é o produto.", "Ambiguidade não é confusão.", "A forma precisa participar do sentido."],
        text: "## Voz\n\n[Abra com uma frase que revele ritmo, mundo e ferida.]\n\n## Matéria íntima\n\n[Que conflito não se resolve apenas por ação externa?]\n\n## Forma\n\n[Como este livro quer ser contado?]",
        model: { exemplar: "Raduan Nassar, Clarice Lispector e Hilda Hilst, pela voz como acontecimento.", why: "O romance literário se sustenta quando forma e tema são inseparáveis.", references: ["Raduan Nassar", "Clarice Lispector", "Hilda Hilst", "João Gilberto Noll", "Marilene Felinto"], placeholder: "Fazia anos que ele não atravessava aquela rua, mas a rua continuava atravessando tudo que ele dizia." },
      },
      {
        id: "ficcao-cientifica",
        oficio: "ficcao",
        label: "Ficção científica",
        icon: "rocket_launch",
        chapter: "Hipótese e humanidade",
        description: "Guia para extrapolar tecnologia, sociedade ou futuro sem perder o conflito humano.",
        meta: ["Hipótese", "Mundo possível", "Custo humano", "Presente revelado"],
        sections: [["E se...", "Qual hipótese desloca o mundo conhecido?"], ["Regra", "O que mudou e quais são os limites?"], ["Custo humano", "Quem paga o preço?"], ["Cotidiano alterado", "Como o novo mundo aparece em gestos simples?"], ["Comentário", "O futuro ilumina o agora."]],
        reminders: ["Tecnologia sem consequência vira cenário.", "Explique regras por ação.", "O estranho fica forte quando toca o familiar."],
        text: "## Hipótese\n\n[E se...]\n\n## Regra\n\n[Como esse mundo funciona?]\n\n## Personagem\n\n[Quem sofre ou deseja dentro dessa hipótese?]",
        model: { exemplar: "André Carneiro, Jeronymo Monteiro e Bráulio Tavares, pela especulação ligada ao humano.", why: "A ficção científica brasileira ganha força quando a ideia revela solidão, poder, medo ou desigualdade.", references: ["André Carneiro", "Jeronymo Monteiro", "Bráulio Tavares", "Fábio Fernandes", "Roberto de Sousa Causo"], placeholder: "O aplicativo avisou que ela morreria às 16h12. Às 16h11, o filho ligou perguntando se ainda tinha feijão." },
      },
      {
        id: "fantasia-brasileira",
        oficio: "ficcao",
        label: "Fantasia brasileira",
        icon: "auto_fix_high",
        chapter: "Maravilhoso cotidiano",
        description: "Guia para fantástico, magia ou absurdo instalados no cotidiano brasileiro.",
        meta: ["Fantástico", "Cotidiano", "Regra do espanto", "Consequência"],
        sections: [["Evento impossível", "O que acontece sem pedir licença ao real?"], ["Normalidade", "Como as pessoas seguem vivendo?"], ["Regra mágica", "Que limite organiza o espanto?"], ["Raiz local", "Que território ancora a fantasia?"], ["Consequência", "O impossível muda alguma coisa."]],
        reminders: ["Trate o impossível com seriedade.", "Escute o cotidiano brasileiro.", "Toda magia cobra algum preço."],
        text: "## O impossível\n\n[Algo irreal acontece como se sempre tivesse acontecido.]\n\n## O cotidiano\n\n[Quem cozinha, paga conta ou espera ônibus dentro do espanto?]",
        model: { exemplar: "Murilo Rubião e José J. Veiga, pelo fantástico que entra na sala sem explicar origem.", why: "A fantasia brasileira pode nascer da invasão do absurdo no dia comum.", references: ["Murilo Rubião", "José J. Veiga", "Lygia Fagundes Telles", "Aline Valek"], placeholder: "Na terça-feira, a sombra da igreja descolou da parede e foi beber água no coreto." },
      },
      {
        id: "terror-horror",
        oficio: "ficcao",
        label: "Terror e horror",
        icon: "dark_mode",
        chapter: "Medo ancorado",
        description: "Guia para medo psicológico, social, corporal ou sobrenatural com detalhe familiar.",
        meta: ["Medo", "Atmosfera", "Escalada", "Perturbação"],
        sections: [["Medo central", "O que ameaça corpo, casa ou memória?"], ["Detalhe familiar", "Que objeto comum fica errado?"], ["Escalada", "Como o desconforto cresce?"], ["Revelação", "O que se descobre tarde demais?"], ["Resíduo", "Que imagem continua depois do fim?"]],
        reminders: ["O medo mais forte começa reconhecível.", "Evite explicar o monstro cedo.", "Violência sem ponto de vista vira ruído."],
        text: "## Detalhe errado\n\n[Algo comum aparece com uma diferença mínima.]\n\n## Escalada\n\n[O que piora a cada cena?]\n\n## Resíduo\n\n[Que imagem deve ficar no leitor?]",
        model: { exemplar: "Rubem Fonseca e autores de horror literário, pela violência tratada como normalidade perturbadora.", why: "O horror brasileiro muitas vezes nasce da casa, da rua e da naturalização do brutal.", references: ["Rubem Fonseca", "Marcelino Freire", "Cristhiano Aguiar", "Ana Paula Maia"], placeholder: "A geladeira começou a repetir a voz da avó morta sempre que alguém deixava a porta aberta." },
      },
      {
        id: "fanfiction",
        oficio: "ficcao",
        label: "Fanfiction",
        icon: "diversity_3",
        chapter: "Variação e afeto",
        description: "Guia para praticar voz, diálogo e emoção dentro de universo já amado.",
        meta: ["Comunidade", "Universo compartilhado", "Voz", "Variação"],
        sections: [["Canon ou AU", "Você segue ou desloca as regras?"], ["Desejo da cena", "Que relação o leitor veio procurar?"], ["Voz", "O personagem fala como ele mesmo?"], ["Comunidade", "Que promessa afetiva existe?"], ["Aprendizado", "Que técnica você treina aqui?"]],
        reminders: ["Fanfic é laboratório.", "Respeite expectativa antes de subverter.", "Use o universo pronto para treinar cena e voz."],
        text: "## Universo\n\n[Canon, AU ou recorte alternativo.]\n\n## Cena desejada\n\n[Que encontro, conflito ou reparação move o texto?]\n\n## Voz\n\n[Como manter o personagem reconhecível?]",
        model: { exemplar: "Comunidades brasileiras de Wattpad, Spirit e AO3, pela prática intensa de diálogo e serialização.", why: "Fanfic ensina a escrever com leitor real do outro lado.", references: ["Babi Dewet", "Wattpad Brasil", "Spirit Fanfics", "AO3 em português"], placeholder: "Ela conhecia aquela fala de todos os episódios. O problema é que, naquela noite, ele disse a frase olhando para outra pessoa." },
      },
      {
        id: "policial-noir",
        oficio: "ficcao",
        label: "Policial e noir",
        icon: "search",
        chapter: "Crime e investigação",
        description: "Guia para ficção policial, noir e suspense com crime, investigador, pistas e revelação.",
        meta: ["Policial", "Noir", "Crime", "Suspense"],
        sections: [
          ["Crime central", "O que aconteceu? Que pergunta a investigação precisa responder?"],
          ["Investigador", "Quem investiga e que ferida ou obsessão traz para o caso?"],
          ["Suspeitos e pistas", "Que evidências guiam — e quais foram plantadas para enganar?"],
          ["Atmosfera", "O ambiente é personagem no noir: cidade, luz, cheiro, som."],
          ["Revelação", "Quem fez? Por quê? A resposta precisa ser surpreendente e inevitável ao mesmo tempo."],
        ],
        reminders: [
          "Plante a solução cedo — o leitor precisa ter tido chance de resolver.",
          "O investigador interessante tem problema pessoal que o caso vai tocar.",
          "Pistas falsas precisam ter lógica própria — não podem parecer arbitrárias depois.",
        ],
        text: "## O crime\n\n[O que aconteceu? Quando? Onde? Quem está morto, desaparecido ou ameaçado?]\n\n## O investigador\n\n[Quem investiga e que bagagem traz?]\n\n## Primeiras pistas\n\n[O que a cena do crime revela e o que esconde?]\n\n## Suspeitos\n\n- [Suspeito 1 — motivo, oportunidade, álibi]\n- [Suspeito 2 — motivo, oportunidade, álibi]\n- [Suspeito 3 — motivo, oportunidade, álibi]\n\n## Pista falsa\n\n[O que aponta para o lugar errado — e por quê faz sentido?]\n\n## Atmosfera\n\n[Que cidade, hora e luz moldam o tom da história?]\n\n## Revelação\n\n[Quem fez. Por quê. Como o investigador chegou lá.]",
        model: {
          exemplar: "Rubem Fonseca, Luiz Alfredo Garcia-Roza e Patricia Melo, pelo policial com alma e violência brasileira.",
          why: "O policial brasileiro mais forte usa o crime para revelar a cidade, a classe e a moral — não só o mistério.",
          references: ["Rubem Fonseca", "Luiz Alfredo Garcia-Roza", "Patricia Melo", "Tony Bellotto", "Marçal Aquino"],
          placeholder: "O corpo foi encontrado na terça-feira. A delegada chegou na quinta. Em dois dias, alguém tinha apagado tudo que importava.",
        },
        steps: [
          {
            eyebrow: "Ficção policial",
            title: "Policial não é só mistério — é moral.",
            body: "O crime é o pretexto. O que o romance policial investiga de verdade é a sociedade, a justiça e o preço de saber a verdade. O melhor noir brasileiro usa o crime para revelar a cidade.",
            primary: "Entendi",
            secondary: "Me conta mais",
          },
          {
            eyebrow: "A estrutura da investigação",
            title: "Crime, investigador, revelação.",
            body: "Plant e payoff são a base do gênero: tudo que importa na revelação final precisa ter sido plantado antes. O leitor deve poder reler e encontrar as pistas que ignorou.",
            items: [
              ["Crime com pergunta", "O que aconteceu cria uma tensão que só a revelação dissolve.", "done"],
              ["Investigador com ferida", "O caso toca algo pessoal — isso é o que diferencia thriller de exercício.", "done"],
              ["Revelação inevitável e surpreendente", "O leitor não previu, mas reconhece: 'claro, era isso'.", "done"],
            ],
            primary: "Criar policial",
          },
        ],
      },
      {
        id: "romance-sentimental",
        oficio: "ficcao",
        label: "Romance sentimental",
        icon: "favorite",
        chapter: "Obstáculo e entrega",
        description: "Guia para romance com arco de relacionamento, HEA ou HFN, tensão emocional e personagens com química.",
        meta: ["Romance", "HEA / HFN", "Tensão emocional", "Química"],
        sections: [
          ["Protagonistas", "Quem são os dois — e o que cada um quer além do relacionamento?"],
          ["Atração inicial", "O que os aproxima no começo — e o que já planta o obstáculo?"],
          ["Obstáculo central", "O que os impede de ficarem juntos? Precisa ser crível e doloroso o suficiente para sustentar o livro."],
          ["Ponto de ruptura", "O momento em que parece que não vai funcionar — o leitor precisa acreditar."],
          ["Resolução", "Como o obstáculo é superado de dentro para fora? A resolução precisa ser ganha, não dada."],
        ],
        reminders: [
          "O obstáculo precisa ser interno tanto quanto externo — desentendimento puro não sustenta um romance.",
          "Química se constrói em cena, não em descrição: o que eles fazem juntos que só eles fariam?",
          "HEA (felizes para sempre) ou HFN (felizes por agora) — defina antes de escrever: o tom do livro muda.",
        ],
        text: "## Protagonista A\n\n[Quem é? O que quer, além do relacionamento?]\n\n## Protagonista B\n\n[Quem é? O que quer, além do relacionamento?]\n\n## Primeiro encontro\n\n[Como se conhecem? O que a cena já planta de tensão ou atração?]\n\n## Obstáculo central\n\n[O que os impede? Seja específico — obstáculos vagos não criam tensão real.]\n\n## Construção da tensão\n\n[Cenas que aproximam e afastam. O vaivém que segura o leitor.]\n\n## Ponto de ruptura\n\n[O momento em que parece impossível. O leitor precisa acreditar.]\n\n## Resolução\n\n[Como superam — de dentro para fora. A decisão precisa ser deles.]",
        model: {
          exemplar: "Thalita Rebouças, Babi Dewet e a tradição do romance de banca, pela leitura que prende sem pedir desculpa.",
          why: "O romance sentimental brasileiro forte tem personagens que o leitor quer ver felizes — e obstáculos que fazem o leitor duvidar que isso vai acontecer.",
          references: ["Thalita Rebouças", "Babi Dewet", "Ana Lua", "Nicholas Sparks adaptado", "Colleen Hoover em tradução"],
          placeholder: "Ele era exatamente o tipo de pessoa que ela havia prometido a si mesma que nunca mais ia amar.",
        },
        steps: [
          {
            eyebrow: "Ficção romântica",
            title: "Romance sentimental tem uma promessa implícita.",
            body: "O leitor chega sabendo que vai haver final feliz — ou pelo menos esperançoso. A tensão não está no 'se' mas no 'como'. O seu trabalho é tornar o obstáculo tão real que o leitor duvide da promessa.",
            primary: "Entendi",
            secondary: "Me conta mais",
          },
          {
            eyebrow: "A estrutura do romance sentimental",
            title: "Atração, obstáculo, entrega.",
            body: "A química se constrói em cena — o que esses dois fazem juntos que mais ninguém faria? O obstáculo precisa doer. A resolução precisa ser conquistada.",
            items: [
              ["Química em cena", "Mostre, não descreva: o que eles fazem juntos que cria tensão.", "done"],
              ["Obstáculo crível", "Externo e interno — desentendimento puro não segura o livro.", "done"],
              ["Resolução ganha", "A decisão vem de dentro deles — não de acidente ou terceiros.", "done"],
            ],
            primary: "Criar romance",
          },
        ],
      },
      ...roteiroGuides(),

      ...poesiaGuides(),
      ...naoFiccaoGuides(),
      ...jornalismoGuides(),
      ...comercialTecnicaGuides(),
      ...estudoVestibularGuides(),
      ...mercadoEditorialGuides(),
      ...objetoLivroGuides(),
      ...direitosAutoraisGuides(),
    ];
  }

  function roteiroGuides() {
    return [
      createGuide({
        id: "roteiro-filme",
        oficio: "roteiro",
        label: "Roteiro de filme",
        icon: "theaters",
        chapter: "Premissa visual",
        description: "Guia para curta ou longa com conflito visual, viradas de ato e cena final forte.",
        meta: ["Cinema", "Três atos", "Imagem", "Arco fechado"],
        sections: [
          ["Premissa visual", "Em uma frase: personagem + desejo + obstáculo — tudo que a câmera pode acompanhar."],
          ["Personagem e desejo", "Quem quer o quê com urgência suficiente para uma hora e meia?"],
          ["Virada do segundo ato", "Que acontecimento força a mudança de rota e eleva as apostas?"],
          ["Clímax visual", "A cena que entrega o conflito — o que a câmera vê no pico da tensão?"],
          ["Desfecho", "O que mudou para sempre no mundo ou no personagem?"],
        ],
        reminders: [
          "Escreva o que a câmera vê — nunca emoção abstrata.",
          "Uma página tende a equivaler a um minuto de tela.",
          "Todo personagem entra em cena querendo algo concreto.",
        ],
        text: "## Premissa\n\nEM UMA FRASE: [personagem] quer [objetivo] mas enfrenta [obstáculo].\n\n## Ato 1\n\nINT./EXT. [LOCAL] - [DIA/NOITE]\n\n[Apresente o mundo e o personagem. Plante a virada.]\n\n## Virada do Ato 1\n\n[O evento que joga o personagem na jornada.]\n\n## Ato 2 — Escalada\n\n[O obstáculo cresce. Cada tentativa falha ou custa algo.]\n\n## Ponto sem retorno\n\n[O momento em que voltar atrás não é mais possível.]\n\n## Clímax\n\n[A cena que resolve — visualmente.]\n\n## Desfecho\n\n[O que mudou para sempre?]",
        model: {
          exemplar: "Kleber Mendonça Filho, Anna Muylaert e Petra Costa, pela imagem que carrega argumento.",
          why: "O cinema brasileiro forte nasce quando a cena visual é inseparável do ponto de vista.",
          references: ["Kleber Mendonça Filho", "Anna Muylaert", "Petra Costa", "Laís Bodanzky", "Karim Aïnouz"],
          placeholder: "EXT. RODOVIÁRIA - FIM DE TARDE\n\nEla desce do ônibus com uma sacola e um endereço antigo. Ninguém veio buscar.",
        },
        steps: [
          {
            eyebrow: "Roteiro de cinema",
            title: "Um roteiro de filme é um guia de imagens.",
            body: 'Você não escreve "ela estava com saudade". Você escreve o que a câmera vê: "Ela dobra a carta. Não envia." O sentimento mora na cena — não na descrição.',
            primary: "Entendi",
            secondary: "Me conta mais",
          },
          {
            eyebrow: "A estrutura dos três atos",
            title: "Cada ato tem uma função diferente.",
            body: "O primeiro ato planta. O segundo ato pressiona. O terceiro ato entrega. O erro mais comum é chegar cedo demais ao clímax.",
            items: [
              ["Ato 1 — até 25%", "Apresenta mundo, personagem e virada que inicia a jornada.", "done"],
              ["Ato 2 — de 25% a 75%", "A pressão cresce. Cada tentativa falha ou custa.", "done"],
              ["Ato 3 — últimos 25%", "Clímax visual e desfecho.", "done"],
            ],
            primary: "Criar roteiro",
          },
        ],
      }),
      createGuide({
        id: "documentario",
        oficio: "roteiro",
        label: "Documentário",
        icon: "videocam",
        chapter: "Pergunta e escuta",
        description: "Guia para tratamento documental com pergunta central, personagem real e abertura ao inesperado.",
        meta: ["Não ficção audiovisual", "Tratamento", "Personagem real", "Escuta"],
        sections: [
          ["Pergunta central", "O documentário precisa de uma pergunta que não sabe responder antes de filmar."],
          ["Personagem real", "Quem carrega a história? Que vida ou ponto de vista ancora o filme?"],
          ["Escuta", "Onde a câmera precisa esperar em vez de dirigir?"],
          ["Estrutura", "Como o material bruto vai se organizar: cronológico, temático, ensaístico?"],
          ["Posição do documentarista", "Você está dentro ou fora? Essa escolha muda tudo."],
        ],
        reminders: [
          "O melhor documentário acontece quando algo inesperado entra no plano.",
          "Evite narração que explica o que a imagem já mostra.",
          "A pergunta do filme pode mudar durante a rodagem — e está tudo bem.",
        ],
        text: "## Pergunta\n\n[O que este documentário precisa descobrir — sem saber a resposta antes?]\n\n## Personagem\n\n[Quem é a pessoa ou comunidade que carrega o filme?]\n\n## Cenas essenciais\n\n[Que momentos precisam estar no filme — mesmo sem saber ainda como consegui-los?]\n\n## Estrutura\n\n[Como o material vai se organizar: cronológico, temático, por personagem, ensaístico?]\n\n## Posição\n\n[O documentarista aparece? Participa? Interfere? Essa escolha precisa ser consistente.]",
        model: {
          exemplar: "Petra Costa, Eduardo Coutinho e Silvio Tendler, pela escuta que transforma o real em narrativa.",
          why: "O documentário brasileiro forte tem ponto de vista — não é neutro, mas é honesto sobre a sua posição.",
          references: ["Eduardo Coutinho", "Petra Costa", "Silvio Tendler", "Karim Aïnouz", "Kleber Mendonça Filho"],
          placeholder: "A câmera espera. A mulher dobra uma camisa, desfaz a dobra e pergunta se pode começar de novo.",
        },
        steps: [
          {
            eyebrow: "Não ficção audiovisual",
            title: "Documentário não captura o real — ele o constrói.",
            body: "Toda escolha de câmera, montagem e narração é uma posição. O melhor documentário sabe disso e usa essa consciência a favor da história.",
            primary: "Entendi",
            secondary: "Me conta mais",
          },
          {
            eyebrow: "A estrutura do documentário",
            title: "Pergunta, personagem, posição.",
            body: "Comece pela pergunta que o filme precisa responder. Encontre quem a carrega. Decida onde você, documentarista, se coloca nessa história.",
            items: [
              ["Pergunta que não sabe a resposta", "Se já sabe, é ilustração — não documentário.", "done"],
              ["Personagem com vida própria", "A câmera segue — não dirige.", "done"],
              ["Posição honesta", "Dentro ou fora, mas consistente.", "done"],
            ],
            primary: "Criar documentário",
          },
        ],
      }),
      createGuide({
        id: "dramaturgia",
        oficio: "roteiro",
        label: "Dramaturgia",
        icon: "comedy_mask",
        chapter: "Conflito em cena",
        description: "Guia para teatro com conflito ao vivo, rubrica precisa, palavra que age e tensão pela presença.",
        meta: ["Teatro", "Cena", "Rubrica", "Conflito ao vivo"],
        sections: [
          ["Conflito central", "O que os personagens querem — e por que não podem ter ao mesmo tempo?"],
          ["Palavra que age", "No teatro, cada fala é uma ação: pede, recusa, seduz, ameaça, mente."],
          ["Rubrica", "O que a rubrica diz que a palavra não pode dizer sozinha?"],
          ["Espaço cênico", "Onde acontece e como o espaço físico cria ou complica o conflito?"],
          ["Tempo dramático", "O teatro existe no presente contínuo: o que está acontecendo agora, diante do público?"],
        ],
        reminders: [
          "Cada fala é uma ação — o personagem quer algo com ela.",
          "Rubrica demais engessa a encenação: confie no texto.",
          "O silêncio no teatro é tão escrito quanto a fala.",
        ],
        text: "## Situação\n\n[Onde estamos? Que momento da relação entre os personagens a peça começa?]\n\n## Personagens\n\n[Quem está em cena? O que cada um quer — e o que não diz?]\n\n## Conflito\n\n[O que os impede de ter o que querem ao mesmo tempo?]\n\n## Cenas\n\n[Como a tensão se desenvolve e se transforma em cada bloco?]\n\n## Rubrica\n\n[O que o corpo, o espaço e o silêncio dizem que a palavra não diz?]\n\n## Desfecho\n\n[O que muda — ou o que fica igual, de modo perturbador?]",
        model: {
          exemplar: "Nelson Rodrigues, Plínio Marcos e Denise Stoklos, pelo conflito que queima em cena.",
          why: "A dramaturgia brasileira forte coloca corpos em atrito — o texto existe para ser dito diante de alguém.",
          references: ["Nelson Rodrigues", "Plínio Marcos", "Denise Stoklos", "Zé Celso Martinez Corrêa", "Leilah Assunção"],
          placeholder: "ELA: Você guardou a cadeira dele.\n\nELE: Ninguém senta ali.\n\nELA: Ele morreu há sete anos.",
        },
        steps: [
          {
            eyebrow: "Escrita para o palco",
            title: "Teatro é conflito diante de quem assiste.",
            body: "Diferente do romance, o teatro não tem narrador explicando. Tudo que o público precisa saber deve estar na ação, na fala e no silêncio dos corpos em cena.",
            primary: "Entendi",
            secondary: "Me conta mais",
          },
          {
            eyebrow: "A gramática do teatro",
            title: "Fala, ação, silêncio.",
            body: "Cada fala é uma ação — o personagem sempre quer algo com ela. O silêncio é tão escrito quanto o diálogo.",
            items: [
              ["Conflito ao vivo", "O que os dois personagens querem não pode coexistir.", "done"],
              ["Palavra que age", "Cada fala pede, recusa, seduz, ameaça ou mente.", "done"],
              ["Silêncio escrito", "A rubrica de silêncio é dramaturgia — não ausência.", "done"],
            ],
            primary: "Criar peça",
          },
        ],
      }),
      createGuide({
        id: "roteiro-games",
        oficio: "roteiro",
        label: "Roteiro de games",
        icon: "sports_esports",
        chapter: "Escolha e consequência",
        description: "Guia para narrativa interativa com escolhas ramificadas, diálogos, missões e mundo jogável.",
        meta: ["Interatividade", "Escolha", "Consequência", "Mundo jogável"],
        sections: [
          ["Premissa do mundo", "Que regras governam esse universo — e o que o jogador pode fazer nele?"],
          ["Protagonista jogável", "Quem o jogador habita? Com que escolha o personagem começa?"],
          ["Escolha ramificada", "Cada decisão precisa ter peso: uma opção cômoda e uma que custa."],
          ["Diálogo em árvore", "O que o jogador pode perguntar — e o que cada resposta revela ou fecha?"],
          ["Arco de missão", "Como a história principal se ramifica sem perder a coerência do mundo?"],
        ],
        reminders: [
          "Escolha sem consequência é ilusão — o jogador percebe.",
          "O mundo precisa ter regras consistentes antes de ter história.",
          "Diálogo de game é diferente de diálogo literário: o jogador quer agência, não contemplação.",
        ],
        text: "## Mundo\n\n[Que regras governam este universo? O que o jogador pode e não pode fazer?]\n\n## Protagonista\n\n[Quem o jogador habita? Que escolha define o início?]\n\n## Missão principal\n\n[Qual é o arco central da narrativa?]\n\n## Escolha crítica\n\nOPÇÃO A: [Ação — consequência]\nOPÇÃO B: [Ação — consequência diferente]\n\n## Diálogo\n\n[Escreva uma árvore de 3 linhas de diálogo com ramificação.]\n\n## Mundo aberto\n\n[Que histórias secundárias habitam o mundo sem depender da missão principal?]",
        model: {
          exemplar: "Disco Elysium e 80 Days, pelo diálogo que é personagem — e pela escolha que revela quem você é.",
          why: "O roteiro de game forte usa a interatividade como ferramenta narrativa, não apenas como mecânica.",
          references: ["Disco Elysium", "80 Days", "The Last of Us", "Celeste", "Hades"],
          placeholder: "OPÇÃO A: Entregar a água ao vilarejo.\nOPÇÃO B: Guardar a água para atravessar o sertão.\n\nA escolha altera quem abre a próxima porta.",
        },
        steps: [
          {
            eyebrow: "Narrativa interativa",
            title: "No game, o jogador é o protagonista.",
            body: "A história acontece pelas escolhas de quem joga. Seu trabalho é construir um mundo onde cada decisão tem peso e cada caminho parece ter sido escrito para aquela pessoa.",
            primary: "Entendi",
            secondary: "Me conta mais",
          },
          {
            eyebrow: "A gramática do roteiro de game",
            title: "Escolha, consequência, mundo consistente.",
            body: "Não é como escrever um livro com bifurcações. É construir um sistema onde o jogador descobre a história pela ação — não pela leitura.",
            items: [
              ["Escolha com peso real", "Uma opção cômoda, uma que custa — ambas com consequência.", "done"],
              ["Mundo com regras", "O jogador aprende as regras jogando — não lendo manual.", "done"],
              ["Diálogo que age", "Cada linha de diálogo revela, fecha ou abre possibilidade.", "done"],
            ],
            primary: "Criar roteiro",
          },
        ],
      }),
      createGuide({
        id: "podcast-ficcional",
        oficio: "roteiro",
        label: "Podcast ficcional",
        icon: "graphic_eq",
        chapter: "Cena sonora",
        description: "Guia para drama em áudio com diálogo, ambiência, vozes distintas e narrativa sem imagem.",
        meta: ["Áudio", "Voz", "Ambiência", "Cena sem imagem"],
        sections: [
          ["Premissa sonora", "O que acontece — e por que funciona sem imagem?"],
          ["Vozes distintas", "Cada personagem precisa ser reconhecível só pela voz e pelo ritmo de fala."],
          ["Ambiência", "Sons de ambiente são cenário: o que o ouvinte ouve que o coloca no lugar?"],
          ["Estrutura de episódio", "Como a narrativa se divide em episódios que prendem e deixam gancho?"],
          ["Narrador ou não", "A história se conta sozinha em cenas, ou tem uma voz que enquadra?"],
        ],
        reminders: [
          "No áudio, a ambiguidade de voz confunde — cada personagem precisa de ritmo e vocabulário próprios.",
          "Som de ambiente é dramaturgia: chuva, passos, silêncio.",
          "O gancho de episódio precisa ser sonoro: uma fala, um som, uma revelação.",
        ],
        text: "## Premissa\n\n[O que acontece nesta série — e por que funciona em áudio?]\n\n## Personagens e vozes\n\n[Como cada personagem soa? Ritmo, vocabulário, o que não diz.]\n\n## Cena de abertura\n\nSOM: [Ambiente que situa o ouvinte]\n\nVOZ: [A primeira fala que prende]\n\n## Estrutura de episódio\n\n[Como cada episódio começa, desenvolve e termina? Qual é o gancho?]\n\n## Ambiência\n\n[Que sons de fundo constroem cada ambiente da série?]\n\n## Gancho final\n\n[A última fala ou som que faz o ouvinte clicar no próximo episódio.]",
        model: {
          exemplar: "Liminal e Radio Drama Lab, pelo som que constrói o espaço que o olho não vê.",
          why: "O podcast ficcional brasileiro ainda é raro — quem domina a gramática do áudio dramático tem espaço.",
          references: ["Welcome to Night Vale", "Liminal", "The Black Tapes", "Rádio Novela CBN", "Estúdio Quindim"],
          placeholder: "SOM: Ventilador velho. Um copo toca a mesa.\n\nVOZ: Se você ouviu a fita até aqui, já sabe que eu menti no começo.",
        },
        steps: [
          {
            eyebrow: "Drama em áudio",
            title: "Podcast ficcional conta história só com som.",
            body: "Sem imagem, tudo que o ouvinte precisa saber chega pelo diálogo, pela ambiência e pelo silêncio. Cada voz precisa ser reconhecível antes de qualquer descrição.",
            primary: "Entendi",
            secondary: "Me conta mais",
          },
          {
            eyebrow: "A gramática do áudio",
            title: "Voz, ambiente, gancho.",
            body: "No podcast ficcional, o ambiente é cenário, a voz é personagem e o gancho de episódio precisa ser sonoro — uma fala, um som, uma revelação.",
            items: [
              ["Vozes distintas", "Cada personagem reconhecível só pelo ritmo e vocabulário.", "done"],
              ["Ambiência como dramaturgia", "Sons constroem espaço — chuva, passos, silêncio.", "done"],
              ["Gancho sonoro", "A última fala ou som que faz clicar no próximo episódio.", "done"],
            ],
            primary: "Criar podcast",
          },
        ],
      }),
    ];
  }

  function poesiaGuides() {
    return [
      createGuide({
        id: "slam",
        oficio: "poesia",
        label: "Slam e palavra falada",
        icon: "mic",
        chapter: "Voz e urgência",
        description: "Guia para poema performático com ritmo, presença e urgência pública. Você tem 3 minutos.",
        meta: ["Performance", "3 minutos", "Voz", "Corpo"],
        sections: [
          ["Tese em voz alta", "O que você defende com o corpo, não só com a cabeça?"],
          ["Imagem de abertura", "A cena ou detalhe concreto que ancora o poema."],
          ["Escalada", "Como a urgência cresce verso a verso — sem chegar ao ápice cedo demais?"],
          ["Virada", "O momento em que o poema muda de temperatura."],
          ["Eco final", "A frase que a plateia leva embora."],
        ],
        reminders: [
          "Slam tem 3 minutos: cada palavra precisa de combustão.",
          "Leia em voz alta em cada estágio — o ouvido encontra o que o olho ignora.",
          "O corpo é parte do texto: como esse poema quer ser dito?",
        ],
        text: "## Tese\n\n[O que você defende — em voz alta, com o corpo?]\n\n## Imagem de abertura\n\n[A cena ou detalhe concreto que ancora o poema.]\n\n## Escalada\n\n[Como a urgência cresce? Suba devagar — não queime tudo na primeira estrofe.]\n\n## Virada\n\n[O poema muda de temperatura aqui.]\n\n## Eco final\n\n[A última linha. Ela fica depois que você parar de falar.]",
        model: {
          exemplar: "Bará, Luz Ribeiro e Ryane Leão, pela urgência que transforma escuta em ação.",
          why: "O slam brasileiro carrega território, identidade e política — não como tema, mas como voz.",
          references: ["Bará", "Luz Ribeiro", "Ryane Leão", "Sérgio Vaz", "Emicida"],
          placeholder: "minha rua não cabe no mapa\nmas cabe inteira\nquando minha mãe chama meu nome",
        },
        steps: [
          {
            eyebrow: "Poesia performática",
            title: "Slam é poesia que precisa ser dita.",
            body: "Diferente do poema de página, o slam existe no tempo real. Você tem até 3 minutos. A plateia responde com o corpo — antes de aplaudir, ela já sentiu.",
            primary: "Entendi",
            secondary: "Me conta mais",
          },
          {
            eyebrow: "A estrutura do slam",
            title: "Escalada, virada, eco.",
            body: "Um slam forte sobe de temperatura. Não começa no ápice — chega até ele. A última frase precisa ecoar depois que você para de falar.",
            items: [
              ["Abertura ancorada", "Começa com imagem concreta, não com a tese já declarada.", "done"],
              ["Escalada progressiva", "A urgência cresce a cada estrofe.", "done"],
              ["Eco final", "A última linha que a plateia leva para casa.", "done"],
            ],
            primary: "Criar slam",
          },
        ],
      }),
      createGuide({
        id: "poesia-digital",
        oficio: "poesia",
        label: "Poesia digital",
        icon: "phone_iphone",
        chapter: "Tela e impacto",
        description: "Guia para poema curto pensado para tela: imagem final forte, brevidade e circulação orgânica.",
        meta: ["Tela", "Imagem final", "Brevidade", "Compartilhamento"],
        sections: [
          ["Imagem única", "O poema digital vive ou morre pela força de uma única imagem."],
          ["Brevidade que pesa", "Cada linha ocupa espaço de tela — o que não é essencial sai."],
          ["Linha final", "A última linha precisa mudar a leitura do que veio antes."],
          ["Legibilidade visual", "Como o poema aparece na tela? Quebras de linha, espaço, tamanho."],
          ["Compartilhabilidade", "O que faz alguém querer mandar esse poema para outra pessoa?"],
        ],
        reminders: [
          "O poema digital compete com tudo na timeline — precisa parar o scroll na primeira linha.",
          "Evite explicar a imagem: deixe ela trabalhar sozinha.",
          "Leia em voz alta mesmo sendo poesia de tela — o ritmo ainda importa.",
        ],
        text: "## Imagem central\n\n[A cena, objeto ou gesto que ancora o poema — em uma frase.]\n\n## Corpo do poema\n\n[Escreva sem explicar. Deixe a imagem trabalhar.]\n\n## Linha final\n\n[A última frase que muda a leitura do que veio antes.]",
        model: {
          exemplar: "Beve Lemos, Ana Martins Marques e a geração do Instagram poético brasileiro.",
          why: "Poesia digital forte tem imagem que funciona tanto na tela quanto impressa — a plataforma amplifica, não substitui.",
          references: ["Beve Lemos", "Ana Martins Marques", "Mariana Salles", "Edimilson de Almeida Pereira"],
          placeholder: "guardei teu silêncio\nnuma pasta chamada\ncoisas que ainda respondem",
        },
        steps: [
          {
            eyebrow: "Poesia para tela",
            title: "Poesia digital para no scroll — ou some.",
            body: "Na timeline, o poema compete com vídeo, imagem e notícia. A primeira linha precisa ser razão suficiente para o leitor parar. A última precisa ser razão para compartilhar.",
            primary: "Entendi",
            secondary: "Me conta mais",
          },
          {
            eyebrow: "A gramática da tela",
            title: "Imagem, brevidade, linha final.",
            body: "Tudo que não é essencial sai. O poema digital é o oposto do ensaio: menos é mais, desde que o menos seja preciso.",
            items: [
              ["Imagem única e forte", "Um objeto, cena ou gesto que nenhum outro poema usaria assim.", "done"],
              ["Brevidade que pesa", "Cada linha ocupa espaço de atenção — corte o que não carrega.", "done"],
              ["Linha final surpreendente", "Muda a leitura do que veio antes.", "done"],
            ],
            primary: "Criar poema",
          },
        ],
      }),
      createGuide({
        id: "letra-musica",
        oficio: "poesia",
        label: "Letra de música",
        icon: "music_note",
        chapter: "Refrão e imagem",
        description: "Guia para letra em função de melodia: refrão que gruda, imagem que canta e verso que respira.",
        meta: ["Canção", "Refrão", "Métrica", "Voz cantada"],
        sections: [
          ["Imagem central", "Que objeto, gesto ou cena ancora a canção inteira?"],
          ["Estrofe", "Conta a história ou situação. Prepara o refrão."],
          ["Refrão", "A parte que repete e intensifica. Precisa valer a repêtição."],
          ["Ponte", "A seção que quebra o padrão e renova a escuta antes da última entrada do refrão."],
          ["Métrica e respiração", "O verso cabe na melodia? Leia em voz alta no ritmo da música."],
        ],
        reminders: [
          "Letra de música existe na voz — leia em voz alta no ritmo antes de qualquer versão final.",
          "O refrão precisa funcionar isolado — é o que as pessoas vão cantarolar.",
          "Sílabas demais travam a melodia: prefira versões mais curtas ao reescrever.",
        ],
        text: "## Imagem central\n\n[O objeto, gesto ou cena que ancora a canção.]\n\n## Estrofe 1\n\n[Situa a história. Prepara o refrão sem entregá-lo.]\n\n## Refrão\n\n[A parte que repete, intensifica e precisa valer cada vez que volta.]\n\n## Estrofe 2\n\n[Aprofunda ou desloca a situação. Mesma melodia, nova informação.]\n\n## Ponte\n\n[Quebra o padrão. Renova a escuta antes da última entrada do refrão.]\n\n## Refrão final\n\n[A mesma letra, ou uma variação que entrega o ponto alto.]",
        model: {
          exemplar: "Renato Russo, Caetano Veloso e Elza Soares, por letras em que imagem e melodia são insepáráveis.",
          why: "A letra brasileira forte tem imagem que sobrevive sem a música — mas ganha dimensão nova quando cantada.",
          references: ["Renato Russo", "Caetano Veloso", "Elza Soares", "Criolo", "Liniker"],
          placeholder: "se a cidade dorme cedo\neu aprendo a te esquecer\nno intervalo do semáforo",
        },
        steps: [
          {
            eyebrow: "Letra é poesia que canta",
            title: "Letra de música tem regras que o poema não tem.",
            body: "Sílabas precisam caber na melodia. O refrão precisa valer cada vez que volta. A estrofe prepara — o refrão entrega. A ponte renova antes do pico final.",
            primary: "Entendi",
            secondary: "Me conta mais",
          },
          {
            eyebrow: "A estrutura da canção",
            title: "Estrofe, refrão, ponte.",
            body: "Não é fórmula — é função. Cada seção tem um papel específico na experiência de quem ouve.",
            items: [
              ["Estrofe", "Conta. Situa. Prepara o refrão sem antecipar.", "done"],
              ["Refrão", "Intensifica. Repete. Precisa valer a repetição.", "done"],
              ["Ponte", "Quebra e renova. Torna a última entrada do refrão mais forte.", "done"],
            ],
            primary: "Criar letra",
          },
        ],
      }),
    ];
  }

  function naoFiccaoGuides() {
    return [
      createGuide({
        id: "memoir",
        oficio: "nao-ficcao",
        label: "Memória e autobiografia",
        icon: "history_edu",
        chapter: "Cena lembrada",
        description: "Guia para narrar vida real por cenas, transformação e recorte significativo — não cronologia.",
        meta: ["Memória", "Eu narrador", "Cena", "Transformação"],
        sections: [
          ["Cena âncora", "Não começar pela vida toda: começar por uma cena específica que condensa o que importa."],
          ["O narrador como personagem", "Quem você era então? Quem narra agora? A distância entre os dois é onde o memoir vive."],
          ["Seleção e recorte", "Memoir não é diário nem autobiografia completa: é um recorte significativo com arco."],
          ["Verdade e memória", "O que você lembra nem sempre foi assim. Que licença você toma — e por quê?"],
          ["Transformação", "O que mudou? O memoir precisa ter arco: antes, durante e depois."],
        ],
        reminders: [
          "Memoir começa em cena — não em 'nasci em...'",
          "A distância entre quem viveu e quem narra é o espaço onde o texto respira.",
          "Memória não é julgamento: o leitor vai tirar as próprias conclusões.",
        ],
        text: "## Cena de abertura\n\n[Entre direto na cena mais significativa — não no começo cronológico.]\n\n## O que estava em jogo\n\n[O que aquele momento significava — para quem você era então?]\n\n## Contexto\n\n[O que o leitor precisa saber para entender a cena?]\n\n## Desenvolvimento\n\n[Como os eventos se desenvolveram? Mantenha o ritmo de cena.]\n\n## Voz do narrador\n\n[O que quem narra hoje vê que quem viveu não via?]\n\n## Transformação\n\n[O que mudou? Para onde essa história aponta?]",
        model: {
          exemplar: "Carolina Maria de Jesus, Eliane Brum e João Paulo Cuenca, pelo memoir que transforma vida em literatura.",
          why: "O memoir brasileiro mais forte começa por onde doi — não por onde é seguro.",
          references: ["Carolina Maria de Jesus", "Eliane Brum", "João Paulo Cuenca", "Conceição Evaristo", "Noemi Jaffe"],
          placeholder: "Naquele dia, aprendi que adulto também mente olhando para o chão.",
        },
        steps: [
          {
            eyebrow: "Não ficção pessoal",
            title: "Memoir não é conta tudo — é contar o que importa.",
            body: "A vida não tem arco narrativo. O memoir cria um. Você escolhe o recorte, a cena de entrada e o ponto de chegada — e essa escolha revela tanto quanto o conteúdo.",
            primary: "Entendi",
            secondary: "Me conta mais",
          },
          {
            eyebrow: "A estrutura do memoir",
            title: "Cena, distância, transformação.",
            body: "Entre em cena antes de explicar. Mostre quem você era. Deixe o narrador de hoje aparecer na distância entre o que viveu e o que entende agora.",
            items: [
              ["Cena antes de cronologia", "Começa no momento mais significativo — não no início.", "done"],
              ["Dois narradadores", "Quem viveu e quem conta são diferentes — use essa distância.", "done"],
              ["Arco de transformação", "O que mudou? O leitor precisa sentir que valeu a travessia.", "done"],
            ],
            primary: "Criar memoir",
          },
        ],
      }),
      createGuide({
        id: "livro-reportagem",
        oficio: "nao-ficcao",
        label: "Livro-reportagem",
        icon: "library_books",
        chapter: "Apuração longa",
        description: "Guia para investigação em livro com personagens reais, documentos, arco narrativo e profundidade.",
        meta: ["Jornalismo narrativo", "Pesquisa longa", "Personagens reais", "Capítulos"],
        sections: [
          ["Tese do livro", "Que revelação ou argumento só um livro tem espaço para desenvolver?"],
          ["Personagem que carrega", "Quem é a pessoa ou caso que ancora a investigação e humaniza o tema?"],
          ["Fontes e documentos", "O que já existe e o que precisa ser apurado especificamente para este livro?"],
          ["Estrutura de capítulos", "Como o material se organiza: cronológico, temático, por personagem?"],
          ["Narrativa x reportagem", "Onde o livro escolhe cena narrativa e onde prefere dado e análise?"],
        ],
        reminders: [
          "Livro-reportagem precisa de uma tese que apenas um livro pode sustentar — não uma matéria longa.",
          "Personagem real é pessoa — verifique, humanize, respeite a complexidade.",
          "A cena narrativa é a técnica que diferencia livro-reportagem de relatório.",
        ],
        text: "## Tese\n\n[O que este livro vai revelar ou provar que uma matéria não conseguiria?]\n\n## Personagem central\n\n[Quem ancora a investigação e humaniza o tema?]\n\n## Fontes\n\n- [Fonte 1 — o que confirma] \n- [Fonte 2 — o que contradiz] \n- [Documentos disponíveis]\n\n## Estrutura\n\n[Como os capítulos se organizam: cronológico, por personagem, temático?]\n\n## Cena de abertura\n\n[A cena narrativa que abre o livro e ancora o leitor antes do primeiro capítulo.]",
        model: {
          exemplar: "Eliane Brum, Daniela Arbex e Leandro Roque de Oliveira, pelo jornalismo que tem alma literária.",
          why: "O livro-reportagem brasileiro forte usa a cena narrativa como ferramenta — não como adorno.",
          references: ["Eliane Brum", "Daniela Arbex", "Zuenir Ventura", "Fernando Morais", "Ruy Castro"],
          placeholder: "O processo tinha 842 páginas. A história, porém, começava num recibo dobrado dentro de uma Bíblia.",
        },
        steps: [
          {
            eyebrow: "Jornalismo narrativo longo",
            title: "Livro-reportagem tem tese que só um livro sustenta.",
            body: "Não é uma matéria de revista expandida. É uma investigação que precisa de profundidade, tempo e espaço que o jornalismo diário não tem.",
            primary: "Entendi",
            secondary: "Me conta mais",
          },
          {
            eyebrow: "A estrutura do livro-reportagem",
            title: "Tese, personagem, cena narrativa.",
            body: "A cena narrativa é a técnica que diferencia o livro-reportagem do relatório. Você apura como jornalista e conta como escritor.",
            items: [
              ["Tese de livro", "Algo que só este livro pode revelar — não uma matéria mais longa.", "done"],
              ["Personagem que humaniza", "O caso abstrato vira real quando tem rosto e voz.", "done"],
              ["Cena antes de dado", "O leitor entra pela narrativa — o dado sustenta por baixo.", "done"],
            ],
            primary: "Criar livro-reportagem",
          },
        ],
      }),
    ];
  }

  function jornalismoGuides() {
    return [
      createGuide({
        id: "critica-cultural",
        oficio: "jornalismo",
        label: "Crítica cultural",
        icon: "reviews",
        chapter: "Tese sobre obra",
        description: "Guia para análise de obra cultural com argumento próprio, contexto e posição crítica.",
        meta: ["Crítica", "Tese", "Contexto", "Argumento"],
        sections: [
          ["Tese sobre a obra", "O que você argumenta sobre este livro, filme ou disco — além do que gostou ou não?"],
          ["Descrição mínima", "O suficiente para o leitor entender do que se trata — sem spoilers desnecessários."],
          ["Contexto", "Onde esta obra se situa: na trajetória do artista, no gênero, no momento cultural."],
          ["Argumento e evidência", "O que na obra sustenta ou contradíz a sua tese?"],
          ["Posição", "Crítica sem posição é sinopse. A tese precisa ser defendível e contestada."],
        ],
        reminders: [
          "Crítica não é resumo: é argumento sobre o que a obra faz ou deixa de fazer.",
          "O leitor não precisa concordar — precisa entender o raciocínio e poder contestar.",
          "Evite começar com 'o livro fala sobre' — comece pelo que você argumenta.",
        ],
        text: "## Tese\n\n[O que você argumenta sobre esta obra — em uma frase que vai além do julgamento?]\n\n## Obra\n\n[Descrição mínima: o suficiente para contextualizar, sem spoilers.]\n\n## Contexto\n\n[Onde essa obra se situa: trajetória do artista, gênero, momento.]\n\n## Argumento\n\n[Que elementos da obra sustentam ou complicam sua tese?]\n\n## Posição final\n\n[Para quem é esta obra? O que ela entrega — e o que deixa por fazer?]",
        model: {
          exemplar: "Silviano Santiago, Alcir Pécora e Beatriz Sarlo, pela crítica que pensa — não apenas avalia.",
          why: "Crítica cultural forte tem voz reconhecível e argumento que sobrevive ao tempo — não é apenas a opinião de quem viu.",
          references: ["Silviano Santiago", "Alcir Pécora", "Luís Augusto Fischer", "Maria Esther Maciel", "Paulo Scott"],
          placeholder: "O problema do filme não está no que ele mostra, mas na pressa com que tenta nos dizer o que sentir.",
        },
        steps: [
          {
            eyebrow: "Crítica com argumento",
            title: "Crítica é posição — não avaliação.",
            body: "Dizer que gostou ou não é opinião. Crítica é diferente: você argumenta o que a obra faz, como faz e o que isso significa no contexto em que aparece.",
            primary: "Entendi",
            secondary: "Me conta mais",
          },
          {
            eyebrow: "A estrutura da crítica",
            title: "Tese, argumento, posição.",
            body: "O leitor não precisa concordar. Precisa entender o raciocínio e poder contestá-lo. Crítica sem posição é sinopse.",
            items: [
              ["Tese sobre a obra", "Além de gostar — o que você argumenta?", "done"],
              ["Evidência da obra", "Que elementos sustentam sua tese?", "done"],
              ["Posição defendível", "Você pode ser contestado — e isso é bom sinal.", "done"],
            ],
            primary: "Criar crítica",
          },
        ],
      }),
      createGuide({
        id: "coluna-opiniao",
        oficio: "jornalismo",
        label: "Coluna de opinião",
        icon: "edit_square",
        chapter: "Tese e provocação",
        description: "Guia para texto opinativo com tese ousada, voz reconhecível e conclusão que provoca posição.",
        meta: ["Opinião", "Tese", "Voz", "Recorrência"],
        sections: [
          ["Tese ousada", "Uma afirmação que poucos teriam coragem de fazer — e que você consegue sustentar."],
          ["Gancho de abertura", "O fato, cena ou provocação que justifica escrever hoje sobre isso."],
          ["Argumento central", "Por que a tese se sustenta? Dado, observação ou lógica que o leitor não pode ignorar."],
          ["Contraponto honesto", "Reconhecer a objeção principal fortalece — não enfraquece — a coluna."],
          ["Fecho provocador", "A conclusão que força o leitor a tomar posição."],
        ],
        reminders: [
          "Coluna é voz, não relatório: o leitor precisa sentir quem escreveu.",
          "A tese precisa ser suficientemente ousada para valer o espaço.",
          "Evite concluir com 'portanto, é preciso refletir' — o leitor já sabe disso.",
        ],
        text: "## Tese\n\n[Uma afirmação que você pode sustentar e que poucos teriam dito assim.]\n\n## Gancho\n\n[O fato ou cena que justifica escrever sobre isso hoje.]\n\n## Argumento\n\n[Por que a tese se sustenta? Desenvolva com dado, observação ou lógica.]\n\n## Contraponto honesto\n\n[Qual é a objeção principal? Como você responde a ela?]\n\n## Fecho\n\n[A última frase que força o leitor a se posicionar.]",
        model: {
          exemplar: "Luís Fernando Verrissimo, Eliane Brum e João Paulo Cuenca, por colunas em que voz e argumento são insepáráveis.",
          why: "A coluna brasileira forte tem uma voz que o leitor reconhece antes de terminar o segundo parágrafo.",
          references: ["Luís Fernando Verrissimo", "Eliane Brum", "João Paulo Cuenca", "Djamila Ribeiro", "Artur Xexéo"],
          placeholder: "O país chama de polêmica aquilo que ainda não teve coragem de chamar pelo nome.",
        },
        steps: [
          {
            eyebrow: "Voz e tese",
            title: "Coluna de opinião é argumento com voz.",
            body: "Não é análise neutra nem desabafo. É uma posição defendida com lógica e numa voz que o leitor reconhece — e que espera encontrar de novo na próxima edição.",
            primary: "Entendi",
            secondary: "Me conta mais",
          },
          {
            eyebrow: "A estrutura da coluna",
            title: "Tese, argumento, fecho provocador.",
            body: "A coluna precisa tomar partido. Uma conclusão vaga é mais um artigo genérico do que uma coluna.",
            items: [
              ["Tese ousada", "Algo que você pode sustentar e que poucos diriam assim.", "done"],
              ["Argumento com dado ou observação", "Não opinião sobre opinião — raciocínio.", "done"],
              ["Fecho que provoca posição", "O leitor termina e precisa decidir se concorda.", "done"],
            ],
            primary: "Criar coluna",
          },
        ],
      }),
    ];
  }

  function comercialTecnicaGuides() {
    return [
      createGuide({
        id: "copywriting",
        oficio: "comercial-tecnica",
        label: "Copywriting",
        icon: "campaign",
        chapter: "Promessa e conversão",
        description: "Guia para escrita persuasiva com promessa clara, prova e chamada para ação.",
        meta: ["Persuasão", "Promessa", "Prova", "Ação"],
        sections: [
          ["Promessa central", "O que o leitor ganha ou resolve? Em uma frase direta, sem floreio."],
          ["Dor ou desejo", "Que problema, frustração ou aspiração move o leitor neste momento?"],
          ["Prova", "Por que acreditar? Dado, depoimento, resultado concreto ou demonstração."],
          ["Objeção principal", "Qual resistência o leitor tem antes de agir? Responda antes que ele pergunte."],
          ["CTA — chamada para ação", "O que o leitor faz agora? Um único passo, claro e fácil."],
        ],
        reminders: [
          "Copy fraco promete demais e prova de menos. Inverta: prove primeiro, prometa com razão.",
          "A melhor copy parece conversa, não anuncio.",
          "Um único CTA forte é mais eficaz do que três opções.",
        ],
        text: "## Promessa central\n\n[O que o leitor ganha ou resolve — em uma frase direta.]\n\n## Dor ou desejo\n\n[Qual problema ou aspiração você está abordando?]\n\n## Prova\n\n[Dado, resultado, depoimento ou demonstração que sustenta a promessa.]\n\n## Objeção principal\n\n[O que o leitor pensa antes de agir? Responda aqui.]\n\n## Chamada para ação\n\n[Um único passo claro. O que ele faz agora?]",
        model: {
          exemplar: "Ogilvy, Claude Hopkins e a prática brasileira de copy em nichos de nicho.",
          why: "Copy eficaz não convence pelo volume de argumentos, mas pela precísão de um único ponto irrecusável.",
          references: ["David Ogilvy", "Claude Hopkins", "Gary Halbert", "Copy brasileira de mídia de performance"],
          placeholder: "Não é só uma agenda. É o lugar onde sua semana para de mandar em você.",
        },
        steps: [
          {
            eyebrow: "Escrita persuasiva",
            title: "Copy não é grito — é conversa com alvo.",
            body: "O erro mais comum é tentar convencer a todos. Copy forte fala com uma pessoa específica, no momento certo, sobre uma única coisa que importa para ela.",
            primary: "Entendi",
            secondary: "Me conta mais",
          },
          {
            eyebrow: "A estrutura da persuasão",
            title: "Promessa, prova, ação.",
            body: "A fórmula clássica funciona porque respeita a lógica de decisão humana: o leitor precisa entender o que ganha, acreditar que é real, e saber o que fazer.",
            items: [
              ["Promessa clara", "O que ele ganha, em linguagem dele — não no seu.", "done"],
              ["Prova concreta", "Dado, resultado ou demonstração — não apenas afirmação.", "done"],
              ["Um CTA, só um", "Quanto mais escolhas, menos ação.", "done"],
            ],
            primary: "Criar copy",
          },
        ],
      }),
      createGuide({
        id: "conteudo-digital",
        oficio: "comercial-tecnica",
        label: "Conteúdo digital",
        icon: "language",
        chapter: "Explicação útil",
        description: "Guia para conteúdo informativo, claro e encontrável — útil sem perder voz.",
        meta: ["Conteúdo", "Clareza", "SEO humano", "Utilidade"],
        sections: [
          ["Promessa de utilidade", "O leitor chegou porque quer resolver algo. O que exatamente você vai resolver?"],
          ["Público específico", "Quem é a pessoa que precisa deste conteúdo — e o que já sabe sobre o assunto?"],
          ["Estrutura de fácil escaneamento", "Títulos, listas, parágrafos curtos — o leitor digital escaneia antes de ler."],
          ["Voz reconhecível", "Conteúdo genérico é esquecido. Que perspectiva ou experiência só você traz?"],
          ["CTA claro", "O que o leitor faz depois de ler? Um único passo seguinte, específico."],
        ],
        reminders: [
          "Conteúdo útil resolve um problema real — não apenas informa.",
          "O título decide se o conteúdo existe — escreva o título antes do corpo.",
          "Voz própria é o único diferencial que o SEO não replica.",
        ],
        text: "## Título\n\n[O que o leitor ganha ao ler este conteúdo — em uma frase.]\n\n## Introdução\n\n[Por que isso importa para quem vai ler? Apresente o problema antes da solução.]\n\n## Conteúdo principal\n\n### [Subtema 1]\n[Explique com clareza. Use exemplos concretos.]\n\n### [Subtema 2]\n[Continue. Cada seção resolve uma parte do problema.]\n\n## Conclusão\n\n[Resuma o que o leitor aprendeu em uma frase.]\n\n## Próximo passo\n\n[O que o leitor faz agora com essa informação?]",
        model: {
          exemplar: "Ann Handley e o jornalismo de marca, pela clareza que não sacrifica a voz.",
          why: "Conteúdo digital forte resolve e encanta ao mesmo tempo — o leitor lembra quem escreveu.",
          references: ["Ann Handley", "Content Marketing Institute", "Ferramentas de SEO semântico"],
          placeholder: "Você já ouviu esse termo. Mas o que ele muda na sua vida prática ainda costuma ficar fora da explicação.",
        },
        steps: [
          {
            eyebrow: "Conteúdo que resolve",
            title: "Conteúdo digital é útil primeiro, elegante depois.",
            body: "O leitor chegou porque quer resolver algo. Se o texto não entrega isso nos primeiros parágrafos, ele sai. A voz vem depois da utilidade — não antes.",
            primary: "Entendi",
            secondary: "Me conta mais",
          },
          {
            eyebrow: "A estrutura do conteúdo digital",
            title: "Título, problema, solução, próximo passo.",
            body: "O leitor digital escaneia antes de ler. Títulos descritivos, parágrafos curtos e listas facilitam a decisão de continuar.",
            items: [
              ["Título que promete", "O leitor decide em 3 segundos se vale continuar.", "done"],
              ["Estrutura escaneável", "Subtítulos, listas, parágrafos curtos.", "done"],
              ["Próximo passo claro", "O que o leitor faz depois de ler?", "done"],
            ],
            primary: "Criar conteúdo",
          },
        ],
      }),
      createGuide({
        id: "ux-writing",
        oficio: "comercial-tecnica",
        label: "UX writing",
        icon: "touch_app",
        chapter: "Microtexto útil",
        description: "Guia para botões, mensagens, erros e fluxos com clareza humana e voz consistente.",
        meta: ["Interface", "Microcopy", "Clareza", "Ação"],
        sections: [
          ["Voz da interface", "Que personalidade tem este produto? Formal, amigável, direta, encorajadora?"],
          ["Botão que age", "O texto do botão diz o que acontece quando o usuário clica — não só 'Enviar'."],
          ["Mensagem de erro humana", "Erros são o momento em que o produto mais precisa de empatia."],
          ["Onboarding em microtexto", "Como o produto apresenta funcionalidades sem manual?"],
          ["Consistência de voz", "O mesmo produto não pode ter voz diferente em cada tela."],
        ],
        reminders: [
          "Botão ideal: verbo + objeto. 'Salvar rascunho' é melhor que 'OK'.",
          "Mensagem de erro: o que aconteceu + como resolver. Nunca culpe o usuário.",
          "UX writing é design — trabalhe com o designer desde o wireframe.",
        ],
        text: "## Voz do produto\n\n[Como este produto fala? Formal/informal? Direta/acolhedora? Escreva 3 adjetivos da voz.]\n\n## Botões\n\n[Reescreva 3 botões genéricos ('OK', 'Enviar', 'Confirmar') com verbo + objeto específico.]\n\n## Mensagem de erro\n\n[Escreva a mensagem de um erro comum: o que aconteceu + o que o usuário pode fazer.]\n\n## Onboarding\n\n[Como o produto apresenta a funcionalidade principal em uma frase?]\n\n## Estado vazio\n\n[O que aparece quando não há conteúdo — e como encoraja a ação?]",
        model: {
          exemplar: "Slack, Duolingo e o Vereda próprio, pela voz que é consistente sem ser roboto.",
          why: "UX writing forte é impossível de notar quando funciona — e impossível de ignorar quando falha.",
          references: ["Torrey Podmajersky", "Kinneret Yifrah", "Nielsen Norman Group", "NN/g UX Writing"],
          placeholder: "Não conseguimos salvar agora. Seu texto continua aqui. Tente novamente em alguns segundos.",
        },
        steps: [
          {
            eyebrow: "Escrita de interface",
            title: "UX writing é design com palavras.",
            body: "Cada palavra da interface é uma decisão de design. Botão, erro, título de tela — tudo guia ou atrapalha o usuário. A boa copy de interface passa despercebida porque funciona.",
            primary: "Entendi",
            secondary: "Me conta mais",
          },
          {
            eyebrow: "A gramática do UX writing",
            title: "Voz consistente, ação clara, erro humano.",
            body: "Três momentos críticos: o botão (o que acontece quando clico?), o erro (o que deu errado e como resolvo?) e o estado vazio (o que faço agora?).",
            items: [
              ["Botão: verbo + objeto", "'Salvar rascunho' é melhor que 'Confirmar'.", "done"],
              ["Erro: o que + como", "Nunca culpe o usuário. Ofereça caminho.", "done"],
              ["Voz consistente", "O mesmo produto não pode soar diferente em cada tela.", "done"],
            ],
            primary: "Criar microtexto",
          },
        ],
      }),
      createGuide({
        id: "roteiro-youtube",
        oficio: "comercial-tecnica",
        label: "Roteiro para vídeo",
        icon: "smart_display",
        chapter: "Gancho e retenção",
        description: "Guia para YouTube, Reels ou vídeo explicativo com gancho nos primeiros 15 segundos, ritmo e entrega.",
        meta: ["Vídeo", "Gancho", "Retenção", "Fala"],
        sections: [
          ["Gancho — primeiros 15 segundos", "Por que o espectador fica? O que ele ganha se assistir até o fim?"],
          ["Promessa do vídeo", "O que você vai mostrar, provar ou resolver — de forma específica."],
          ["Corpo — ritmo e cortes", "O vídeo respira? Cada bloco tem uma ideia única e dura o tempo necessário."],
          ["Fala natural", "Roteiro de vídeo é escrito para ser falado — não lido em voz alta."],
          ["CTA — chamada final", "O que o espectador faz agora? Um único pedido claro."],
        ],
        reminders: [
          "Os primeiros 15 segundos decidem se o vídeo existe para aquela pessoa.",
          "Escreva como fala — depois leia em voz alta e corrija o que travar.",
          "Um vídeo, uma ideia. Dois temas = dois vídeos.",
        ],
        text: "## Título e thumbnail\n\n[O que aparece antes do clique — a promessa que justifica assistir.]\n\n## Gancho (0–15s)\n\n[Por que o espectador fica? Entregue o maior motivo nos primeiros 15 segundos.]\n\n## Promessa\n\n[O que você vai mostrar ou provar neste vídeo.]\n\n## Desenvolvimento\n\n[Bloco 1: ...] \n[Bloco 2: ...] \n[Bloco 3: ...]\n\n## Fala natural\n\n[Leia em voz alta. Ajuste onde travar.]\n\n## CTA\n\n[Um único pedido: curtir, comentar, acessar link, inscrever.]",
        model: {
          exemplar: "Nerdologia, Meteoro Brasil e Manual do Mundo, pelo roteiro que ensina sem entediar.",
          why: "Vídeo brasileiro forte começa com razão para ficar — e entrega o que prometeu.",
          references: ["Nerdologia", "Meteoro Brasil", "Manual do Mundo", "Porta dos Fundos", "Felipe Castanhari"],
          placeholder: "Esse dado parece pequeno. Mas ele explica por que sua cidade esquenta mais do que a previsão diz.",
        },
        steps: [
          {
            eyebrow: "Roteiro audiovisual",
            title: "Os primeiros 15 segundos decidem tudo.",
            body: "O algoritmo mostra o vídeo. O thumbnail faz clicar. Mas os primeiros 15 segundos decidem se a pessoa fica — e se o vídeo tem alcance. Comece pelo gancho antes de qualquer outra coisa.",
            primary: "Entendi",
            secondary: "Me conta mais",
          },
          {
            eyebrow: "A estrutura do roteiro de vídeo",
            title: "Gancho, promessa, entrega, CTA.",
            body: "Escreva para ser falado — não lido. Depois leia em voz alta e corte tudo que fizer você travar.",
            items: [
              ["Gancho nos primeiros 15s", "A razão para ficar — entregue cedo.", "done"],
              ["Um vídeo, uma ideia", "Dois temas = dois vídeos separados.", "done"],
              ["CTA único", "Um pedido no final — não três opções.", "done"],
            ],
            primary: "Criar roteiro",
          },
        ],
      }),
      createGuide({
        id: "ghostwriting", oficio: "comercial-tecnica", label: "Ghostwriting", icon: "person_edit",
        chapter: "Voz do outro",
        description: "Guia para escrever na voz de outra pessoa com entrevista, captura de voz e discrição.",
        meta: ["Voz alheia", "Entrevista", "Discrição", "Estrutura"],
        sections: [
          ["Captura de voz", "Que palavras, ritmo e repetições são exclusivamente desta pessoa?"],
          ["Entrevista como matéria-prima", "O ghostwriter ouve antes de escrever. Que perguntas revelam a voz real?"],
          ["Estrutura da narrativa", "Como organizar para parecer que a pessoa escolheu essa ordem naturalmente?"],
          ["Discrição e confidencialidade", "O que é ético revelar? Onde estão os limites do que pode ser escrito?"],
          ["Revisão com a fonte", "Como garantir que o texto soa como a pessoa, não como você?"],
        ],
        reminders: [
          "Seu trabalho é desaparecer no texto — o leitor deve ouvir a pessoa, não o escritor.",
          "Grave as entrevistas e transcreva: a voz está nos detalhes da fala.",
          "Ghostwriting tem contrato — defina confidencialidade antes de começar.",
        ],
        text: "## Perfil de voz\n\n[Como esta pessoa fala? Ritmo, vocabulário, expressões recorrentes.]\n\n## Perguntas de entrevista\n\n[10 perguntas que revelam história, opinião e momento.]\n\n## Material bruto\n\n[Trechos ou citações que capturam a voz.]\n\n## Estrutura\n\n[Como o conteúdo se organiza? Que arco ele segue?]\n\n## Revisão\n\n[Perguntas para checar: 'isso é como você diria?']",
        model: {
          exemplar: "Autobiografias de atletas e empreendedores — escritas por quem não assina.",
          why: "O bom ghostwriter some no texto — o leitor termina e pensa que a pessoa é escritora nata.",
          references: ["Andrew Crofts", "Mark Levine", "Prática brasileira de autoria assistida"],
          placeholder: "Eu não queria contar essa história como exemplo de superação. Queria contar porque foi ali que parei de fingir certeza.",
        },
        steps: [
          { eyebrow: "Autoria assistida", title: "No ghostwriting, você escreve para desaparecer.", body: "O objetivo não é mostrar seu talento — é fazer o texto soar como a pessoa que assina. Isso exige ouvir muito antes de escrever qualquer coisa.", primary: "Entendi", secondary: "Me conta mais" },
          { eyebrow: "A estrutura do ghostwriting", title: "Captura de voz, entrevista, revisão.", body: "Três fases: entender como a pessoa pensa e fala, escrever na voz dela, refinar até que ela reconheça o texto como seu.", items: [["Captura de voz", "Ritmo, vocabulário, expressões recorrentes.", "done"], ["Entrevista como matéria", "Grave, transcreva, encontre a voz no detalhe.", "done"], ["Revisão até sumir", "O texto é bom quando você some nele.", "done"]], primary: "Criar texto" },
        ],
      }),
      createGuide({
        id: "quadrinhos", oficio: "comercial-tecnica", label: "Escrita para quadrinhos", icon: "view_comfy",
        chapter: "Painel e página",
        description: "Guia para roteiro de HQ com página, painel, legenda, balão e colaboração visual.",
        meta: ["HQ", "Painel", "Página", "Imagem + palavra"],
        sections: [
          ["Página como unidade", "O leitor vê a página antes de ler o painel: como ela conduz o olhar?"],
          ["Painel com função", "Cada painel carrega informação que o anterior não tinha."],
          ["Balão e legenda", "O que o balão diz que a imagem não pode — e vice-versa?"],
          ["Roteiro para o desenhista", "Como descrever a cena sem engessar o desenho?"],
          ["Ritmo visual", "Quadrinhos têm tempo: pausa, aceleração e silêncio visual."],
        ],
        reminders: [
          "Não escreva o que a imagem já mostra — balão e painel são parceiros, não réplicas.",
          "Deixe espaço para o desenhista interpretar — o roteiro guia, não ilustra.",
          "A página de virada é o lugar do impacto: o leitor a vê de uma vez.",
        ],
        text: "## Premissa\n\n[O que acontece e qual é o tom visual?]\n\n## Página 1\n\nPAINEL 1: [Descrição da cena.]\nBALÃO: [Fala ou legenda.]\n\nPAINEL 2: [Ação, expressão, foco.]\nBALÃO: [...]\n\nPAINEL 3: [Encerre com tensão ou pergunta.]\n\n## Notas para o desenhista\n\n[Referências visuais, tom, o que não pode faltar.]",
        model: {
          exemplar: "Laerte, Nik e Moon & Bá, pela linguagem híbrida que só quadrinhos permitem.",
          why: "O roteiro de HQ forte confia no desenhista: dá liberdade e direção ao mesmo tempo.",
          references: ["Laerte", "Fern​ndo Gonsales", "Rafael Grampá", "Moon e Bá", "Mauricio de Sousa"],
          placeholder: "PAINEL 1: A mesa posta para dois.\nPAINEL 2: Uma cadeira vazia.\nBALÃO: Hoje ele vem.",
        },
        steps: [
          { eyebrow: "Linguagem híbrida", title: "Em quadrinhos, imagem e palavra dividem o trabalho.", body: "O que a imagem mostra, o balão não repete. O roteirista escreve para o desenhista — não para o leitor. Isso muda tudo.", primary: "Entendi", secondary: "Me conta mais" },
          { eyebrow: "A gramática dos quadrinhos", title: "Painel, página, ritmo visual.", body: "Cada painel é uma escolha de foco. A virada de página é o momento de impacto — use com intenção.", items: [["Painel com informação nova", "Cada painel carrega algo que o anterior não tinha.", "done"], ["Balão complementa, não repete", "Imagem e palavra trabalham juntos, não em eco.", "done"], ["Página de virada com impacto", "O leitor vê toda a página de uma vez.", "done"]], primary: "Criar roteiro de HQ" },
        ],
      }),
      createGuide({
        id: "escrita-tecnica", oficio: "comercial-tecnica", label: "Escrita técnica", icon: "science",
        chapter: "Rigor e narrativa",
        description: "Guia para relatório, ensaio acadêmico, divulgação ou documento técnico com clareza e precisão.",
        meta: ["Rigor", "Método", "Dados", "Narrativa"],
        sections: [
          ["Objetivo do documento", "O que este texto precisa fazer? Informar, convencer, documentar ou orientar?"],
          ["Público técnico ou leigo", "Quem vai ler — e qual é o nível de conhecimento esperado?"],
          ["Estrutura lógica", "Introdução, desenvolvimento e conclusão — cada seção com função clara."],
          ["Dados e evidência", "Que dados sustentam as afirmações? Como são apresentados?"],
          ["Clareza sem simplificação", "Técnico não significa obscuro: precisão e clareza coexistem."],
        ],
        reminders: [
          "Escreva a conclusão antes do corpo — isso garante que o texto tem direção.",
          "Evite jargão desnecessário: se o leitor precisa de glossário para cada parágrafo, reescreva.",
          "Dado isolado sugere — série histórica confirma. Contextualize sempre.",
        ],
        text: "## Objetivo\n\n[O que este documento precisa fazer?]\n\n## Público\n\n[Quem vai ler? Qual é o nível de conhecimento prévio?]\n\n## Introdução\n\n[Contexto, objetivo e estrutura do documento.]\n\n## Desenvolvimento\n\n### [Seção 1]\n[Argumento ou dado com evidência.]\n\n### [Seção 2]\n[Continua.]\n\n## Conclusão\n\n[O que o dado revela? Que ação ele sustenta?]\n\n## Referências\n\n[Fontes, metodologia, limitações.]",
        model: {
          exemplar: "Relatórios do IPEA e divulgação científica da Fiocruz, pela precisão que não exclui o leitor.",
          why: "Escrita técnica forte é precisa sem ser opaca — o leitor entende e confia.",
          references: ["ABNT", "Chicago Manual of Style", "Strunk & White", "Manuais de divulgação científica"],
          placeholder: "O dado isolado sugere melhora. A série histórica, porém, mostra outra coisa: a queda começou antes da política analisada.",
        },
        steps: [
          { eyebrow: "Escrita de precisão", title: "Escrita técnica é clara — não necessariamente simples.", body: "Rigor e acessibilidade não são opostos. O texto técnico forte é preciso sem ser obscuro: cada afirmação tem sustentação, cada dado tem contexto.", primary: "Entendi", secondary: "Me conta mais" },
          { eyebrow: "A estrutura do documento técnico", title: "Objetivo, evidência, conclusão.", body: "Escreva a conclusão antes do corpo: isso garante que o texto sabe para onde vai. Dado sem contexto é ruído — não informação.", items: [["Conclusão antes do corpo", "Saber o destino garante que o texto não perde a direção.", "done"], ["Dado com contexto", "Série histórica, comparação, limitações.", "done"], ["Clareza sem simplificação", "Precisão e legibilidade coexistem.", "done"]], primary: "Criar documento" },
        ],
      }),
    ];
  }

  function estudoVestibularGuides() {
    return [
      createGuide({
        id: "redacao-enem",
        oficio: "estudo-vestibular",
        label: "Redação ENEM completa",
        icon: "assignment",
        chapter: "Projeto até revisão",
        description: "Guia para construir a redação dissertativo-argumentativa do ENEM pelas cinco competências da banca.",
        meta: ["ENEM", "5 competências", "Até 30 linhas", "1000 pontos"],
        sections: [
          ["Competência 1", "Norma padrão: ortografia, concordância, regência, pontuação e escolha formal de palavras."],
          ["Competência 2", "Compreensão da proposta: tema real, recorte correto e repertório pertinente."],
          ["Competência 3", "Seleção e organização: tese, argumentos relevantes e progressão lógica."],
          ["Competência 4", "Coesão: conectivos precisos, retomadas claras e parágrafos que avançam."],
          ["Competência 5", "Intervenção: agente, ação, meio, finalidade e efeito, sempre respeitando direitos humanos."],
        ],
        reminders: [
          "Use os primeiros minutos para fazer projeto de texto.",
          "Não copie frases dos textos motivadores.",
          "A conclusão do ENEM resolve; ela não apenas resume.",
        ],
        text: "## Projeto de texto\n\nTema real: [qual problema a proposta cobra?]\nTese: [por que esse problema persiste?]\nArgumento 1: [causa ou obstáculo principal]\nArgumento 2: [segunda causa, consequência ou agente envolvido]\nProposta: [agente + ação + meio + finalidade + efeito]\n\n## Introdução\n\n[Contextualização pertinente.] [Delimitação do problema.] [Tese com dois caminhos argumentativos.]\n\n## Desenvolvimento I\n\n[Tópico frasal.] [Explicação.] [Repertório ou exemplo.] [Conclusão parcial ligada à tese.]\n\n## Desenvolvimento II\n\n[Tópico frasal.] [Explicação.] [Repertório ou exemplo diferente.] [Conclusão parcial.]\n\n## Proposta de intervenção\n\n[Diante disso, agente deve realizar ação por meio de meio, a fim de finalidade, gerando efeito concreto.]",
        model: {
          exemplar: "Redações nota 1000 do ENEM e matrizes oficiais de correção, pela relação entre estrutura, repertório e intervenção.",
          why: "A redação ENEM forte mostra domínio formal e projeto argumentativo antes de tentar impressionar.",
          references: ["Matriz ENEM", "Cartilhas de redação do Inep", "Corretores de redação", "Pré-vestibulares brasileiros"],
          placeholder: "A persistência de [problema] no Brasil revela não apenas [causa 1], mas também [causa 2]. Nesse cenário, torna-se necessário analisar [argumento 1] e [argumento 2] para propor uma intervenção efetiva.",
        },
      }),
      createGuide({
        id: "projeto-texto-enem",
        oficio: "estudo-vestibular",
        label: "Projeto de texto",
        icon: "schema",
        chapter: "10 minutos decisivos",
        description: "Guia para planejar tese, argumentos, repertório e intervenção antes de escrever a redação.",
        meta: ["Planejamento", "Tema real", "Tese", "Argumentos"],
        sections: [
          ["Tema real", "Transforme a frase da proposta em problema concreto, sem fugir do recorte."],
          ["Tese", "Diga por que o problema existe ou persiste."],
          ["Argumento 1", "Escolha uma causa, obstáculo ou agente social para desenvolver."],
          ["Argumento 2", "Traga outro eixo, diferente do primeiro, para ampliar a análise."],
          ["Intervenção", "Já defina agente e ação antes de escrever a introdução."],
        ],
        reminders: ["Projeto curto evita repetição.", "Repertório precisa servir ao argumento.", "Se a tese é vaga, o texto inteiro fica instável."],
        text: "## Tema real\n\n[O que exatamente a proposta pede?]\n\n## Tese\n\n[O problema persiste porque...]\n\n## Argumento 1\n\n[Causa, obstáculo ou dado que sustenta a tese.]\n\n## Argumento 2\n\n[Outro eixo de análise.]\n\n## Proposta\n\nAgente: [quem age]\nAção: [o que faz]\nMeio: [como faz]\nFinalidade: [para quê]\nEfeito: [resultado esperado]",
        model: vestibularModel("Projeto de texto", "Um bom projeto antecipa a redação inteira em poucas linhas.", "Tema: [x]. Tese: [x ocorre por causa de y e z]. Desenvolvimento I: [y]. Desenvolvimento II: [z]. Intervenção: [agente + ação]."),
      }),
      createGuide({
        id: "introducao-enem",
        oficio: "estudo-vestibular",
        label: "Introdução ENEM",
        icon: "start",
        chapter: "Contexto e tese",
        description: "Guia para abrir a redação com repertório pertinente, problema delimitado e tese clara.",
        meta: ["Introdução", "Repertório", "Delimitação", "Tese"],
        sections: [
          ["Contextualização", "Comece por dado, obra, conceito, marco histórico ou fenômeno social pertinente."],
          ["Ponte", "Mostre como o repertório se conecta ao tema da proposta."],
          ["Problema", "Delimite o que está em discussão no Brasil contemporâneo."],
          ["Tese", "Anuncie os dois eixos que serão defendidos no desenvolvimento."],
        ],
        reminders: ["Evite aberturas genéricas.", "Não use repertório que você não consegue explicar.", "A tese deve orientar o resto do texto."],
        text: "## Contexto\n\n[Repertório ou observação social pertinente.]\n\n## Ponte com o tema\n\n[Como esse repertório ilumina o problema?]\n\n## Tese\n\n[Defenda que o problema persiste por causa de argumento 1 e argumento 2.]",
        model: vestibularModel("Introdução ENEM", "A introdução boa entrega direção, não enfeite.", "Embora [repertório] evidencie [valor ou problema], observa-se, no Brasil, [tema]. Tal quadro decorre de [causa 1] e [causa 2], fatores que precisam ser enfrentados."),
      }),
      createGuide({
        id: "desenvolvimento-enem",
        oficio: "estudo-vestibular",
        label: "Desenvolvimento ENEM",
        icon: "format_align_left",
        chapter: "Argumento em progressão",
        description: "Guia para parágrafos de desenvolvimento com tópico frasal, explicação, repertório e conclusão parcial.",
        meta: ["Argumentação", "Tópico frasal", "Repertório", "C-03 e C-04"],
        sections: [
          ["Tópico frasal", "Primeira frase que anuncia o argumento do parágrafo."],
          ["Explicação", "Desdobre a causa, consequência ou mecanismo do problema."],
          ["Repertório", "Use dado, conceito ou exemplo como prova, não como decoração."],
          ["Conclusão parcial", "Retome a tese e feche o raciocínio antes de passar ao próximo parágrafo."],
        ],
        reminders: ["Cada parágrafo precisa defender uma ideia principal.", "Não empilhe repertórios.", "Conectivo errado confunde a lógica."],
        text: "## Tópico frasal\n\n[O primeiro obstáculo é...]\n\n## Explicação\n\n[Como esse obstáculo produz o problema?]\n\n## Repertório ou exemplo\n\n[Referência pertinente e explicada.]\n\n## Conclusão parcial\n\n[Portanto, esse fator reforça a tese porque...]",
        model: vestibularModel("Desenvolvimento ENEM", "O desenvolvimento precisa provar a tese por etapas.", "Em primeiro plano, [argumento] intensifica [problema]. Isso ocorre porque [explicação]. Nesse sentido, [repertório] demonstra que [conexão]. Logo, [fecho parcial]."),
      }),
      createGuide({
        id: "proposta-intervencao",
        oficio: "estudo-vestibular",
        label: "Proposta de intervenção",
        icon: "task_alt",
        chapter: "Cinco elementos",
        description: "Guia para formular solução completa no ENEM com agente, ação, meio, finalidade e efeito.",
        meta: ["C-05", "Agente", "Ação", "Direitos humanos"],
        sections: [
          ["Agente", "Quem tem legitimidade para agir: Estado, escola, mídia, empresas, famílias ou sociedade civil."],
          ["Ação", "O que será feito: criar, ampliar, fiscalizar, promover, regulamentar, capacitar."],
          ["Meio", "Como a ação será executada: campanhas, políticas públicas, parcerias, leis, formação."],
          ["Finalidade", "Para que a ação existe, ligada ao problema analisado."],
          ["Efeito", "Resultado concreto esperado, sem fórmula vaga."],
        ],
        reminders: ["Não transforme punição em solução principal.", "Detalhe pelo menos um elemento.", "Respeite os direitos humanos."],
        text: "## Agente\n\n[Quem deve agir?]\n\n## Ação\n\n[O que deve ser feito?]\n\n## Meio\n\n[Por meio de quê?]\n\n## Finalidade\n\n[A fim de quê?]\n\n## Efeito\n\n[Qual mudança concreta se espera?]\n\n## Parágrafo final\n\n[Diante do exposto, agente deve ação por meio de meio, a fim de finalidade. Com isso, espera-se efeito.]",
        model: vestibularModel("Proposta de intervenção", "A conclusão do ENEM é uma solução detalhada, não uma frase de encerramento.", "Diante disso, [agente] deve [ação], por meio de [meio], a fim de [finalidade]. Assim, será possível [efeito concreto], respeitando [garantia/direito]."),
      }),
      createGuide({
        id: "repertorio-sociocultural",
        oficio: "estudo-vestibular",
        label: "Repertório sociocultural",
        icon: "public",
        chapter: "Referência com função",
        description: "Guia para escolher e aplicar repertório de filosofia, literatura, história, ciência, direito e dados.",
        meta: ["C-03", "Pertinência", "Autoria", "Conexão"],
        sections: [
          ["Filosofia", "Use conceito para explicar causa ou valor em disputa."],
          ["Dados e pesquisa", "Traga fonte confiável e conecte o número ao argumento."],
          ["Literatura e arte", "Use obra como analogia ou retrato do problema."],
          ["História e ciência", "Mostre origem, permanência ou efeito verificável."],
          ["Direito e sociologia", "Compare garantia formal e realidade social."],
        ],
        reminders: ["Não invente citação.", "Repertório sem explicação perde força.", "Uma referência simples e bem conectada vale mais que nome difícil solto."],
        text: "## Repertório escolhido\n\n[Autor, obra, dado, lei, conceito ou evento.]\n\n## Ideia central\n\n[O que essa referência mostra?]\n\n## Conexão com o tema\n\n[Como ela prova ou ilumina seu argumento?]\n\n## Frase pronta para adaptar\n\nSegundo [fonte], [ideia/dado]. Essa perspectiva evidencia que [conexão com o tema].",
        model: vestibularModel("Repertório sociocultural", "O repertório funciona quando participa do argumento.", "De acordo com [fonte], [dado ou conceito]. Essa informação evidencia que [tema] não se limita a [aparência do problema], mas envolve [argumento central]."),
      }),
      createGuide({
        id: "coesao-conectivos",
        oficio: "estudo-vestibular",
        label: "Coesão e conectivos",
        icon: "link",
        chapter: "Progressão lógica",
        description: "Guia para organizar progressão textual com conectivos de adição, causa, oposição, conclusão, exemplo e finalidade.",
        meta: ["C-04", "Coesão", "Conectivos", "Retomada"],
        sections: [
          ["Adição e progressão", "Além disso; ademais; soma-se a isso; de igual modo."],
          ["Causa e explicação", "Isso ocorre porque; tal fato se deve a; em virtude de."],
          ["Oposição", "No entanto; contudo; apesar disso; embora."],
          ["Conclusão", "Portanto; dessa forma; diante do exposto; assim."],
          ["Finalidade", "A fim de; para que; com o objetivo de; por meio de."],
        ],
        reminders: ["Conectivo bonito não salva relação lógica errada.", "Varie retomadas: problema, questão, cenário, entrave.", "Coesão também é ordem de ideias."],
        text: "## Relação lógica\n\n[Adição, causa, oposição, conclusão, exemplo ou finalidade?]\n\n## Conectivo escolhido\n\n[Escolha o termo adequado.]\n\n## Retomada\n\n[Que palavra substitui o termo anterior sem repetir?]\n\n## Parágrafo revisado\n\n[Reescreva conectando as frases com precisão.]",
        model: vestibularModel("Coesão e conectivos", "Coesão é a engenharia discreta que permite a banca acompanhar o raciocínio.", "Além disso, [argumento 2] amplia o problema. Isso ocorre porque [causa]. Portanto, [conclusão parcial] torna-se indispensável para compreender [tema]."),
      }),
      createGuide({
        id: "fuvest-unicamp",
        oficio: "estudo-vestibular",
        label: "Redação Fuvest e Unicamp",
        icon: "account_balance",
        chapter: "Banca e gênero",
        description: "Guia para adaptar escrita a propostas de vestibular que cobram autoria, gênero textual e leitura de coletânea.",
        meta: ["Fuvest", "Unicamp", "Coletânea", "Gênero textual"],
        sections: [
          ["Leitura da proposta", "Identifique tema, gênero, interlocutor e finalidade antes de escrever."],
          ["Coletânea", "Use os textos como ponto de partida, não como muleta."],
          ["Gênero", "Respeite carta, artigo, dissertação, manifesto, crônica ou outro formato pedido."],
          ["Autoria", "Mostre posição própria e controle de linguagem."],
          ["Adequação", "A banca avalia se o texto cumpre a situação comunicativa."],
        ],
        reminders: ["Fuvest e Unicamp não seguem a fórmula ENEM.", "Gênero textual manda na estrutura.", "Interlocutor muda tom, vocabulário e estratégia."],
        text: "## Proposta\n\nTema: [tema]\nGênero solicitado: [gênero]\nInterlocutor: [para quem se escreve]\nFinalidade: [o que o texto deve fazer]\n\n## Leitura da coletânea\n\n[Ideias úteis sem copiar.]\n\n## Plano\n\n[Como o gênero organiza começo, desenvolvimento e fechamento?]\n\n## Texto\n\n[Escreva respeitando situação comunicativa e autoria.]",
        model: vestibularModel("Fuvest e Unicamp", "Nessas bancas, a forma solicitada muda o contrato do texto.", "Antes de defender uma tese, identifique quem fala, para quem fala e com que finalidade. A boa resposta nasce dessa situação comunicativa."),
      }),
      guide("dissertacao-escolar", "estudo-vestibular", "Dissertação escolar", "edit_note", "Tese e argumento", "Guia para provas e trabalhos escolares com tese, argumentos, evidência e conclusão coerente.", ["Escola", "Tese", "Argumentos", "Conclusão"], "Este texto defende que [tese], pois [argumento 1] e [argumento 2] mostram a importância de [tema]."),
      guide("resumo-resenha", "estudo-vestibular", "Resumo e resenha", "rate_review", "Síntese e crítica", "Guia para resumir com fidelidade e resenhar com avaliação crítica clara.", ["Síntese", "Fidelidade", "Avaliação", "Referência"], "A obra [título], de [autor], apresenta [tema central]. Sua principal contribuição está em [avaliação crítica]."),
      guide("interpretacao-literaria", "estudo-vestibular", "Interpretação literária", "search", "Texto e evidência", "Guia para analisar textos literários e responder questões com evidência do próprio texto.", ["Literatura", "Análise", "Evidência", "Resposta"], "O recurso de [figura/voz/imagem] revela [efeito de sentido], pois o trecho [evidência] indica [interpretação]."),
      guide("revisao-gramatical", "estudo-vestibular", "Revisão gramatical", "fact_check", "C-01 sem tropeços", "Guia para revisar concordância, regência, crase, pontuação, acentuação e informalidade.", ["Norma padrão", "C-01", "Revisão", "Clareza"], "Revise primeiro os verbos, depois a pontuação, depois as retomadas. A nota da forma costuma cair por acúmulo, não por um deslize isolado."),
    ];
  }

  function vestibularModel(exemplar, why, placeholder) {
    return {
      exemplar: `${exemplar}: matriz ENEM, cartilhas oficiais e práticas de pré-vestibular brasileiro.`,
      why,
      references: ["Matriz ENEM", "Cartilhas do Inep", "Fuvest", "Unicamp", "Professores de redação"],
      placeholder,
    };
  }

  function mercadoEditorialGuides() {
    return [
      createGuide({
        id: "mapa-lancamento-editorial",
        oficio: "mercado-editorial",
        label: "Mapa de lançamento",
        icon: "rocket_launch",
        chapter: "Da gaveta ao leitor",
        description: "Guia para transformar manuscrito em projeto de publicação, com decisão entre caminho independente e editorial.",
        meta: ["Lançamento", "Estratégia", "Autopublicação", "Editoras"],
        sections: [
          ["Diagnóstico", "O livro está em escrita, revisão, pronto para leitores beta ou pronto para submissão?"],
          ["Caminho", "Independente, tradicional ou híbrido: cada rota muda custos, tempo, controle e distribuição."],
          ["Posicionamento", "Gênero, público, comparáveis e promessa de leitura."],
          ["Ativos", "Sinopse, bio, capa, página de venda, lista de leitores e material de lançamento."],
          ["Calendário", "Pré-lançamento, abertura, semana decisiva e sustentação."],
        ],
        reminders: ["Publicar é projeto, não só botão.", "A estratégia certa depende do livro e da vida do autor.", "Marketing não substitui texto pronto."],
        text: "## Estado do manuscrito\n\n[Em que fase real o livro está?]\n\n## Caminho escolhido\n\n[Independente, editoras ou híbrido. Por quê?]\n\n## Público e promessa\n\n[Quem precisa deste livro e que experiência ele promete?]\n\n## Ativos de lançamento\n\n- Sinopse:\n- Bio:\n- Capa:\n- Lista de leitores:\n- Página de venda ou submissão:\n\n## Próximas quatro semanas\n\n[Liste ações concretas.]",
        model: mercadoModel("Mapa de lançamento", "A clareza estratégica reduz ansiedade e evita gasto antes da hora.", "Meu livro está em [fase]. O caminho mais coerente agora é [rota], porque [motivo]. Antes de lançar, preciso concluir [ativo 1], [ativo 2] e [ativo 3]."),
      }),
      createGuide({
        id: "autopublicacao-independente",
        oficio: "mercado-editorial",
        label: "Autopublicação independente",
        icon: "bolt",
        chapter: "Controle e responsabilidade",
        description: "Guia para publicar por conta própria com revisão, capa, distribuição, preço, audiência e sustentação.",
        meta: ["Independente", "KDP", "POD", "Audiência"],
        sections: [
          ["Texto editorial-ready", "Revisão gramatical, revisão de estilo, leitores beta e edição profissional quando possível."],
          ["Capa e identidade", "Capa como sinal de gênero e promessa comercial, legível também em miniatura."],
          ["Distribuição", "E-book, impressão sob demanda, plataformas brasileiras e estratégia wide ou exclusiva."],
          ["Preço e lançamento", "Pré-venda, preço inicial, janela de impulso e metas realistas."],
          ["Audiência", "Newsletter, redes, leitores antecipados, resenhas e continuidade."],
        ],
        reminders: ["Autonomia cobra gestão.", "Capa ruim derruba confiança antes da primeira página.", "Anúncio amplifica livro que já tem promessa clara."],
        text: "## Produto editorial\n\n[O que ainda falta para o livro parecer profissional?]\n\n## Capa e gênero\n\n[Quais sinais visuais o leitor espera nesse gênero?]\n\n## Plataforma\n\n[Onde será publicado e por quê?]\n\n## Lançamento\n\nPreço inicial:\nData:\nLeitores antecipados:\nConteúdo de divulgação:\n\n## Sustentação\n\n[O que acontece depois da primeira semana?]",
        model: mercadoModel("Autopublicação independente", "O autor independente precisa pensar como pequena editora.", "Antes de subir o arquivo, vou validar texto, capa, descrição e preço. Só depois faz sentido convidar leitores e investir energia em divulgação."),
      }),
      createGuide({
        id: "submissao-editoras",
        oficio: "mercado-editorial",
        label: "Submissão a editoras",
        icon: "mark_email_read",
        chapter: "Query e proposta",
        description: "Guia para preparar manuscrito, sinopse, proposta editorial e abordagem a editoras ou agentes.",
        meta: ["Editoras", "Agentes", "Query letter", "Sinopse"],
        sections: [
          ["Manuscrito", "Ficção costuma exigir texto completo e revisado; não ficção pode pedir proposta editorial."],
          ["Query", "Pitch breve com gancho, premissa, público, comparáveis e bio pertinente."],
          ["Sinopse", "Resumo de uma a duas páginas com arco completo, inclusive final."],
          ["Pesquisa", "Editoras, agentes, catálogo, janelas de submissão e adequação do livro."],
          ["Acompanhamento", "Planilha de envios, datas, respostas e versões."],
        ],
        reminders: ["Rejeição não é diagnóstico total da obra.", "Não envie sem ler diretrizes.", "Agente legítimo ganha quando o autor ganha."],
        text: "## Pitch curto\n\n[Uma frase com protagonista, conflito, promessa e diferencial.]\n\n## Comparáveis\n\n[Para leitores de X e Y, com diferença clara.]\n\n## Sinopse completa\n\n[Resumo com começo, viradas e final.]\n\n## Bio autoral\n\n[Experiência, território, autoridade ou relação com a obra.]\n\n## Lista de submissão\n\nEditora/agente:\nDiretriz:\nData:\nStatus:",
        model: mercadoModel("Submissão a editoras", "Submissão profissional é adequação de catálogo, clareza de pitch e paciência documentada.", "Prezada equipe, apresento [título], um [gênero] de [tamanho] palavras, voltado a leitores de [comparáveis]. A obra acompanha [premissa] e investiga [tema]."),
      }),
      createGuide({
        id: "comparativo-publicacao",
        oficio: "mercado-editorial",
        label: "Comparativo de publicação",
        icon: "compare_arrows",
        chapter: "Escolha de rota",
        description: "Guia para comparar independente, tradicional e híbrido por royalties, controle, tempo, custo e distribuição.",
        meta: ["Decisão", "Royalties", "Controle", "Distribuição"],
        sections: [
          ["Royalties", "Independente tende a pagar mais por unidade; editora paga menos, mas pode distribuir melhor."],
          ["Controle", "Autor independente decide tudo; publicação tradicional divide decisões com equipe editorial."],
          ["Tempo", "Independente pode sair em semanas; editoras podem levar anos."],
          ["Custo inicial", "Independente banca revisão, capa e divulgação; editora assume produção."],
          ["Objetivo", "Nicho, velocidade, prestígio, livrarias, prêmios ou carreira longa."],
        ],
        reminders: ["Não existe rota universalmente superior.", "A mesma autora pode usar rotas diferentes em livros diferentes.", "Decida pelo projeto, não pelo orgulho."],
        text: "## Critérios do meu projeto\n\nPrioridade 1: [controle, velocidade, livraria, prestígio, receita...]\nPrioridade 2:\nPrioridade 3:\n\n## Rota independente\n\nGanhos:\nCustos:\nRiscos:\n\n## Rota tradicional\n\nGanhos:\nCustos:\nRiscos:\n\n## Decisão provisória\n\n[Qual caminho combina com este livro agora?]",
        model: mercadoModel("Comparativo de publicação", "Comparar rotas torna a decisão menos romântica e mais honesta.", "Para este livro, eu valorizo mais [critério] do que [critério]. Por isso, a rota mais coerente neste momento é [rota]."),
      }),
      createGuide({
        id: "checklist-lancamento",
        oficio: "mercado-editorial",
        label: "Checklist de lançamento",
        icon: "checklist",
        chapter: "Antes de publicar",
        description: "Guia para checar manuscrito, capa, ISBN, sinopse, leitores antecipados, preço e comunicação.",
        meta: ["Checklist", "Pré-lançamento", "ISBN", "Leitores beta"],
        sections: [
          ["Qualidade", "Texto completo, revisão, leitura crítica e última conferência de arquivo."],
          ["Objeto", "Capa, miolo, ISBN, ficha quando aplicável e arquivos finais."],
          ["Venda", "Sinopse de quarta capa, página de venda, categorias, palavras-chave e preço."],
          ["Prova social", "Leitores antecipados, resenhas honestas e contatos de imprensa ou comunidade."],
          ["Psicologia", "Preparar-se para crítica, silêncio, ajustes e continuidade."],
        ],
        reminders: ["Checklist existe para baixar a febre da ansiedade.", "Não lance para compensar cansaço.", "Depois do lançamento ainda existe trabalho."],
        text: "## Qualidade editorial\n\n[ ] Texto completo\n[ ] Revisão gramatical\n[ ] Revisão de estilo\n[ ] Leitores beta\n\n## Produto\n\n[ ] Capa\n[ ] Miolo\n[ ] ISBN\n[ ] Arquivos finais\n\n## Mercado\n\n[ ] Sinopse\n[ ] Página de venda\n[ ] Preço\n[ ] Leitores antecipados\n[ ] Conteúdo de lançamento\n\n## Depois\n\n[Como vou sustentar o livro após a primeira semana?]",
        model: mercadoModel("Checklist de lançamento", "O lançamento ganha força quando as partes invisíveis foram resolvidas antes.", "Meu livro só entra em lançamento quando texto, capa, sinopse, página de venda e lista de leitores estiverem minimamente testados."),
      }),
      createGuide({
        id: "mentalidade-autor-publicado",
        oficio: "mercado-editorial",
        label: "Mentalidade de autor",
        icon: "psychology",
        chapter: "Coragem prática",
        description: "Guia para lidar com perfeccionismo, rejeição, marketing, audiência e continuidade de carreira.",
        meta: ["Carreira", "Rejeição", "Marketing", "Continuidade"],
        sections: [
          ["Perfeccionismo", "Livro publicado aprende com o mundo; livro perfeito imaginário não encontra leitor."],
          ["Rejeição", "Um não pode ser catálogo, momento, mercado ou encaixe, não sentença sobre talento."],
          ["Audiência", "Plataforma nasce de relação contínua, não de número vazio."],
          ["Marketing", "Divulgação é ponte entre voz e leitor certo."],
          ["Ritmo", "Carreira literária é biblioteca, não evento único."],
        ],
        reminders: ["Coragem não elimina medo.", "Crítica negativa faz parte da vida pública do livro.", "A próxima obra também é estratégia."],
        text: "## Crença que me trava\n\n[Qual frase aparece quando penso em publicar?]\n\n## Resposta adulta\n\n[Que parte é medo, que parte é dado real?]\n\n## Próxima ação pequena\n\n[Uma ação objetiva em até 30 minutos.]\n\n## Continuidade\n\n[Como este lançamento prepara o próximo livro?]",
        model: mercadoModel("Mentalidade de autor", "A técnica precisa de uma psicologia capaz de executar.", "Meu livro não precisa provar minha existência inteira. Ele precisa encontrar seus leitores possíveis e me ensinar a publicar melhor o próximo."),
      }),
    ];
  }

  function objetoLivroGuides() {
    return [
      createGuide({
        id: "anatomia-fisica-livro",
        oficio: "objeto-livro",
        label: "Partes físicas do livro",
        icon: "view_in_ar",
        chapter: "Capa, lombada e miolo",
        description: "Guia para entender capa, contracapa, lombada, orelhas, guardas, corte e miolo como arquitetura de leitura.",
        meta: ["Objeto livro", "Capa", "Lombada", "Miolo"],
        sections: [
          ["Capa", "Frente visual do livro: promessa, gênero, autoria e reconhecimento."],
          ["Contracapa", "Espaço de sinopse, prova social, código de barras e argumento de venda."],
          ["Lombada", "Identificação na estante: título, autor e marca editorial."],
          ["Orelhas e guardas", "Transição entre embalagem, contexto e entrada na obra."],
          ["Corte e miolo", "As bordas e o conjunto de páginas que sustentam a experiência física."],
        ],
        reminders: ["Nada no objeto livro é neutro.", "A capa conversa com gênero antes de conversar com gosto pessoal.", "A lombada é a vitrine quando o livro está na estante."],
        text: "## Mapa exterior\n\nCapa: [promessa visual]\nContracapa: [sinopse e prova]\nLombada: [título, autor, editora]\nOrelhas: [bio, contexto, convite]\nMiolo: [papel, formato, sensação]\n\n## Decisão de projeto\n\n[O que esse objeto precisa comunicar antes da leitura?]",
        model: livroModel("Partes físicas do livro", "Conhecer o objeto ajuda o escritor a pensar leitura, venda e produção.", "A capa promete [experiência]. A lombada identifica [obra/autoria]. A contracapa convence o leitor de que [benefício de leitura]."),
      }),
      createGuide({
        id: "miolo-pre-pos-texto",
        oficio: "objeto-livro",
        label: "Miolo, pré e pós-texto",
        icon: "chrome_reader_mode",
        chapter: "Arquitetura interna",
        description: "Guia para organizar pré-texto, corpo da obra e pós-texto de livros literários, técnicos ou acadêmicos.",
        meta: ["Miolo", "Pré-texto", "Texto", "Pós-texto"],
        sections: [
          ["Pré-texto", "Falsa folha de rosto, folha de rosto, ficha, dedicatória, epígrafe, sumário e apresentação."],
          ["Texto", "Capítulos, partes, seções, cenas e progressão principal da obra."],
          ["Pós-texto", "Epílogo, posfácio, notas, glossário, referências, índice, sobre o autor e colofão."],
          ["Recto e verso", "Páginas ímpares ficam à direita; aberturas importantes costumam começar nelas."],
          ["Fólio", "Numeração e títulos correntes como orientação silenciosa de leitura."],
        ],
        reminders: ["A ordem do miolo guia a travessia do leitor.", "Nem todo livro precisa de todos os elementos.", "Páginas protocolares também constroem autoridade."],
        text: "## Pré-texto\n\n[Liste as páginas de entrada que este livro precisa.]\n\n## Corpo da obra\n\n[Partes, capítulos ou seções.]\n\n## Pós-texto\n\n[O que precisa existir depois do fim?]\n\n## Convenções\n\n[Aberturas em página ímpar, sumário, notas, referências, sobre o autor.]",
        model: livroModel("Miolo, pré e pós-texto", "A arquitetura interna decide como o leitor entra, atravessa e sai do livro.", "Este livro terá [pré-textos], seguido por [estrutura do corpo] e encerrado com [pós-textos], porque o leitor precisa de [função]."),
      }),
      createGuide({
        id: "ritos-entrada-livro",
        oficio: "objeto-livro",
        label: "Ritos de entrada",
        icon: "meeting_room",
        chapter: "Antes do capítulo 1",
        description: "Guia para folha de rosto, ficha catalográfica, dedicatória, epígrafe, agradecimentos, sumário e prefácio.",
        meta: ["Pré-texto", "Epígrafe", "Sumário", "Prefácio"],
        sections: [
          ["Folha de rosto", "Certidão de nascimento da obra: título, autor, editora e edição."],
          ["Verso da folha", "Direitos, ISBN, ficha catalográfica e dados de publicação."],
          ["Dedicatória", "Gesto breve e íntimo, geralmente em página própria."],
          ["Epígrafe", "Frase que abre uma frequência de leitura."],
          ["Sumário e prefácio", "Mapa e porta de entrada crítica ou afetiva."],
        ],
        reminders: ["Epígrafe não é decoração: ela afina o ouvido.", "Prefácio assinado por terceiro muda a autoridade de entrada.", "Sumário precisa ser útil, não apenas bonito."],
        text: "## Folha de rosto\n\nTítulo:\nAutor:\nEditora/selo:\nEdição:\n\n## Dedicatória\n\n[Texto breve.]\n\n## Epígrafe\n\n[Citação, autoria e relação com o livro.]\n\n## Sumário\n\n[Mapa de partes e capítulos.]\n\n## Prefácio/apresentação\n\n[Quem apresenta e por quê?]",
        model: livroModel("Ritos de entrada", "As páginas iniciais dizem ao leitor que tipo de pacto está começando.", "Antes do capítulo 1, o leitor atravessa [elementos]. Cada um prepara uma camada: identidade, contexto, afeto e orientação."),
      }),
      createGuide({
        id: "arquivo-digital-livro",
        oficio: "objeto-livro",
        label: "Livro como arquivo digital",
        icon: "folder_open",
        chapter: "Pastas e formatos",
        description: "Guia para organizar manuscrito, capítulos, pré-texto, pós-texto e arquivos finais em formatos profissionais.",
        meta: ["Arquivo", ".docx", ".pdf", ".epub"],
        sections: [
          ["Pastas", "Pré-texto, texto, pós-texto, pesquisa, versões e finais."],
          ["Manuscrito", "Arquivo editável limpo, com estilos consistentes e nome versionado."],
          ["Produção", "PDF de impressão, EPUB, capa, imagens, fontes e metadados."],
          ["Envio", "Cada editora ou plataforma tem diretrizes próprias de formato."],
          ["Backup", "Versões datadas e cópias em locais diferentes."],
        ],
        reminders: ["Arquivo bagunçado vira custo de produção.", "Nomeie versões com data.", "Guarde editável e final; eles têm funções diferentes."],
        text: "## Estrutura de pastas\n\nmeu-livro/\n01-pre-texto/\n02-texto/\n03-pos-texto/\n04-finais/\n05-pesquisa/\n\n## Arquivo mestre\n\n[Nome e versão atual.]\n\n## Arquivos finais\n\nDOCX:\nPDF impressão:\nEPUB:\nCapa:\n\n## Backup\n\n[Onde está a cópia segura?]",
        model: livroModel("Livro como arquivo digital", "A organização do arquivo antecipa revisão, submissão e publicação.", "Meu arquivo mestre fica em [local] e os finais em [pasta]. Cada versão recebe data para que eu saiba exatamente o que foi enviado ou publicado."),
      }),
      createGuide({
        id: "pagina-capitulo",
        oficio: "objeto-livro",
        label: "Página de capítulo",
        icon: "article",
        chapter: "Mancha e respiro",
        description: "Guia para entender abertura de capítulo, mancha tipográfica, margens, ornamentos, subdivisões e fólio.",
        meta: ["Capítulo", "Mancha tipográfica", "Margens", "Fólio"],
        sections: [
          ["Abertura", "Capítulos importantes costumam iniciar em página ímpar com respiro superior."],
          ["Título", "Número, nome do capítulo e eventual ornamento."],
          ["Mancha", "Área ocupada pelo texto; margens definem conforto de leitura."],
          ["Separadores", "Vinhetas, asteriscos ou espaços marcam troca de cena."],
          ["Fólio", "Número e título corrente orientam sem chamar atenção."],
        ],
        reminders: ["O branco também escreve.", "Margem interna precisa considerar a lombada.", "Ornamento bom serve à pausa, não ao excesso."],
        text: "## Abertura do capítulo\n\nNúmero:\nTítulo:\nEpígrafe ou ornamento:\n\n## Primeira página\n\n[Quanto respiro antes do primeiro parágrafo?]\n\n## Texto corrido\n\nRecuo:\nEntrelinha:\nSeparadores de cena:\n\n## Fólio e título corrente\n\n[Como o leitor se orienta?]",
        model: livroModel("Página de capítulo", "A página de capítulo cria cerimônia e ritmo para a leitura.", "Este capítulo começa com [respiro/título/ornamento] porque a entrada precisa sugerir [tom da cena ou parte]."),
      }),
      createGuide({
        id: "glossario-do-livro",
        oficio: "objeto-livro",
        label: "Glossário do livro",
        icon: "dictionary",
        chapter: "Vocabulário editorial",
        description: "Guia com termos essenciais para conversar com editores, revisores, designers e diagramadores.",
        meta: ["Glossário", "ISBN", "Sangria", "Colofão"],
        sections: [
          ["Mancha tipográfica", "Área da página ocupada pelo texto, delimitada pelas margens."],
          ["Fólio", "Número da página; pode ser visível ou cego."],
          ["Recto e verso", "Recto é página direita ímpar; verso é página esquerda par."],
          ["Sangria", "Área que ultrapassa o corte para evitar bordas brancas."],
          ["ISBN, ficha e colofão", "Identificação comercial, catalogação e nota final de produção."],
        ],
        reminders: ["Nomear bem ajuda a pedir bem.", "Vocabulário editorial reduz ruído com profissionais.", "Termo técnico serve para clareza, não para pose."],
        text: "## Termos que preciso dominar\n\nMancha tipográfica:\nFólio:\nRecto/verso:\nSangria:\nISBN:\nFicha catalográfica:\nColofão:\nLombada:\nTítulo corrente:\n\n## Dúvidas para produção\n\n[Liste termos que ainda preciso confirmar com editor/diagramador.]",
        model: livroModel("Glossário do livro", "Quem conhece os termos participa melhor das decisões editoriais.", "Quando eu disser [termo], quero me referir a [definição]. Se houver dúvida, registro exemplo visual antes de pedir alteração."),
      }),
    ];
  }

  function direitosAutoraisGuides() {
    return [
      createGuide({
        id: "direitos-primeiro-mapa",
        oficio: "direitos-autorais",
        label: "Primeiro mapa de direitos",
        icon: "policy",
        chapter: "Criação e prova",
        description: "Guia para entender o que a Vereda orienta, o que a lei protege e quando consultar fonte oficial.",
        meta: ["Orientação", "LDA", "Registro", "Fontes oficiais"],
        sections: [
          ["Criação", "Texto expresso nasce protegido; ideia, gênero e método não bastam."],
          ["Rastro", "Versões, backups, e-mails e prova de autoria ajudam a reconstruir processo."],
          ["Registro", "O EDA/FBN pode registrar obra intelectual e emitir certidão."],
          ["Limite", "A Vereda não substitui advogado, órgão oficial ou edital atualizado."],
          ["Rotina", "Antes de contrato ou litígio, confira fontes oficiais no dia."],
        ],
        reminders: ["Proteção automática não dispensa prova.", "Fonte oficial envelhece melhor que print de blog.", "Quando houver dinheiro ou conflito, procure especialista."],
        text: "## O que criei\n\n[Tipo de obra, versão e data.]\n\n## O que consigo provar\n\n[Versões, backup, e-mails, .proof.json, testemunhas.]\n\n## Fontes que vou consultar\n\n[Planalto, EDA/FBN, gov.br, CBL, edital ou contrato.]\n\n## Próxima decisão\n\n[Registrar, submeter, negociar, publicar ou pedir orientação jurídica.]",
        model: mercadoModel("Primeiro mapa de direitos", "O escritor ganha segurança quando separa criação, prova, mercado e fonte oficial.", "A Vereda me mostra o mapa. Antes de assinar, registrar ou litigar, eu confiro a fonte oficial atualizada e, se necessário, consulto especialista."),
      }),
      createGuide({
        id: "checklist-submissao-direitos",
        oficio: "direitos-autorais",
        label: "Checklist de submissão e direitos",
        icon: "outbox",
        chapter: "Envio editorial",
        description: "Guia para submeter manuscrito guardando versão, edital, data, exclusividade e política de ineditismo.",
        meta: ["Submissão", "Edital", "Ineditismo", "Exclusividade"],
        sections: [
          ["Versão enviada", "Guarde o arquivo exato que saiu da sua mão."],
          ["Regras", "Salve edital, formulário, política de simultâneas e prazo de resposta."],
          ["Comunicação", "Guarde e-mail, protocolo, confirmação e resposta."],
          ["Ineditismo", "Veja se rede social, blog, newsletter ou plataforma contam como publicação."],
          ["Direitos", "Submissão não é cessão; contrato vem depois."],
        ],
        reminders: ["Não envie uma versão que você não consegue recuperar.", "Exclusividade sem prazo é sinal de alerta.", "Cada editora define sua porta de entrada."],
        text: "## Versão enviada\n\nTítulo:\nData:\nArquivo:\nFormato exigido:\n\n## Edital ou política\n\nLink/fonte:\nPrazo de resposta:\nExclusividade:\nIneditismo:\n\n## Registro do envio\n\nDestinatário:\nE-mail/protocolo:\nResposta:\n\n## Cuidados\n\n[O que preciso confirmar antes de enviar de novo?]",
        model: mercadoModel("Checklist de submissão e direitos", "Submeter melhor é conseguir provar o que foi enviado, quando e sob quais regras.", "Enviei [obra] para [editora/agente] em [data], seguindo [edital/política]. A versão preservada é [arquivo]."),
      }),
      createGuide({
        id: "leitura-contrato-editorial",
        oficio: "direitos-autorais",
        label: "Leitura de contrato editorial",
        icon: "contract",
        chapter: "Antes de assinar",
        description: "Guia para marcar prazo, território, direitos cedidos, preferência, royalties e reversão antes de assinar.",
        meta: ["Contrato", "Licença", "Cessão", "Reversão"],
        sections: [
          ["Escopo", "Quais direitos, mídias e territórios entram no contrato?"],
          ["Prazo", "Por quanto tempo a editora explora a obra?"],
          ["Dinheiro", "Royalties, adiantamento, base de cálculo e prestação de contas."],
          ["Preferência", "A editora prende seu próximo livro? Por quanto tempo?"],
          ["Saída", "Quando os direitos voltam para você?"],
        ],
        reminders: ["Direitos autorais se interpretam restritivamente.", "Ceda só o necessário.", "Contrato alto, amplo ou confuso merece advogado."],
        text: "## Escopo\n\nDireitos cedidos/licenciados:\nMídias:\nTerritório:\nPrazo:\n\n## Dinheiro\n\nRoyalties:\nBase de cálculo:\nAdiantamento:\nPrestação de contas:\n\n## Alertas\n\nPreferência pelo próximo livro:\nDireitos audiovisuais:\nTradução:\nAudiobook:\nReversão:\n\n## Próxima ação\n\n[Assinar, negociar, pedir parecer ou recusar.]",
        model: mercadoModel("Leitura de contrato editorial", "O contrato deve dizer exatamente o que sai da mão do autor, por quanto tempo e em troca de quê.", "Antes de assinar, eu preciso entender escopo, prazo, território, remuneração, preferência e reversão."),
      }),
    ];
  }

  function mercadoModel(exemplar, why, placeholder) {
    return {
      exemplar: `${exemplar}: prática editorial brasileira, autopublicação e lançamento de livros.`,
      why,
      references: ["Amazon KDP", "Clube de Autores", "Editoras brasileiras", "Agentes literários", "Feiras literárias"],
      placeholder,
    };
  }

  function livroModel(exemplar, why, placeholder) {
    return {
      exemplar: `${exemplar}: anatomia editorial, produção gráfica e design de livros.`,
      why,
      references: ["Produção editorial", "Design editorial", "Diagramadores", "Editoras brasileiras", "Câmara Brasileira do Livro"],
      placeholder,
    };
  }

  function guide(id, oficio, label, icon, chapter, description, meta, placeholder) {
    return createGuide({
      id,
      oficio,
      label,
      icon,
      chapter,
      description,
      meta,
      sections: [
        ["Pergunta do ofício", "Qual é a pergunta que este formato precisa responder?"],
        ["Material central", "Que cena, dado, imagem, fala ou sistema sustenta o texto?"],
        ["Estrutura", "Como o texto organiza começo, desenvolvimento e virada?"],
        ["Leitor ou público", "Que expectativa a pessoa traz para este formato?"],
        ["Fecho", "Que gesto final deixa a forma completa?"],
      ],
      reminders: ["Comece pelo gesto central do ofício.", "Troque abstração por uma cena ou decisão concreta.", "Revise perguntando se o formato foi respeitado."],
      text: "## Pergunta do ofício\n\n[O que este texto precisa fazer?]\n\n## Material central\n\n[Que cena, dado, imagem ou fala sustenta a peça?]\n\n## Estrutura\n\n[Como a forma organiza a leitura?]",
      model: {
        exemplar: `${label}: referências brasileiras do ofício e de sua circulação contemporânea.`,
        why: `${label} funciona quando técnica, público e voz trabalham juntos.`,
        references: ["Autores brasileiros", "Mercado editorial brasileiro", "Prática contemporânea"],
        placeholder,
      },
    });
  }

  const models = {
    "roteiro-tv": {
      exemplar: "Central do Brasil, de Marcos Bernstein e João Emanuel Carneiro, pela apresentação de personagem por ação visível.",
      why: "O roteiro forte não explica psicologia: mostra gesto, lugar, silêncio e consequência.",
      references: ["Glória Perez", "George Moura", "Anna Muylaert", "Kleber Mendonça Filho"],
      placeholder:
        "INT. COZINHA - AMANHECER\n\nA mãe coloca três pratos na mesa. Só há duas pessoas em casa.\n\nO filho percebe o terceiro prato, mas não pergunta nada.",
    },
    "flash-fiction": {
      exemplar: "Millôr Fernandes e suas formas brevíssimas, pela compressão radical de vida, erro e fim.",
      why: "A ficção-relâmpago brasileira funciona quando uma imagem pequena carrega uma vida inteira.",
      references: ["Millôr Fernandes", "Rubem Braga", "Bartolomeu Campos de Queirós", "Carlos Drummond de Andrade"],
      placeholder:
        "A chave continuou na porta três dias depois do enterro. Ninguém teve coragem de tirá-la. Era a última coisa da casa que ainda esperava alguém voltar.",
    },
    cronica: {
      exemplar: "Rubem Braga, pela capacidade de transformar um acontecimento mínimo em ressonância humana.",
      why: "A crônica não é o fato cotidiano: é o que o fato desperta quando alguém olha de novo.",
      references: ["Rubem Braga", "Paulo Mendes Campos", "Fernando Sabino", "Luis Fernando Verissimo", "Moacyr Scliar"],
      placeholder:
        "A fila do pão andava devagar, mas ninguém reclamava. Havia uma chuva fina lá fora e, por algum acordo silencioso, todos pareciam adiando a volta para casa.",
    },
    "conto-curto": {
      exemplar: "Dalton Trevisan e Lygia Fagundes Telles, pela entrada imediata em cena e pela tensão sem sobra.",
      why: "O conto curto precisa instalar personagem, desejo e ameaça sem explicar o mundo antes.",
      references: ["Dalton Trevisan", "Clarice Lispector", "Lygia Fagundes Telles", "João Antônio", "Rubem Fonseca"],
      placeholder:
        "Nelsa voltou para buscar o guarda-chuva e encontrou o irmão sentado no escuro. Ele segurava o envelope que ela tinha escondido havia vinte anos.",
    },
    ensaio: {
      exemplar: "Antonio Candido, pelo rigor que pensa literatura como sistema vivo, sem perder clareza.",
      why: "O ensaio literário convence quando a ideia tem voz, percurso e coragem de se corrigir em público.",
      references: ["Antonio Candido", "Alfredo Bosi", "Roberto Schwarz", "Silviano Santiago", "Flora Sussekind"],
      placeholder:
        "Toda leitura começa antes do livro. Começa no repertório, no medo, na classe social, na lembrança que o leitor traz sem declarar.",
    },
    "romance-comercial": {
      exemplar: "Luiz Alfredo Garcia-Roza, pela cena policial limpa, objetiva e imediatamente legível.",
      why: "O romance comercial respeita a experiência do leitor: pergunta clara, ritmo e promessa de continuidade.",
      references: ["Luiz Alfredo Garcia-Roza", "Patricia Melo", "Raphael Montes", "Tony Bellotto"],
      placeholder:
        "O corpo apareceu no único elevador que não tinha câmera. No bolso do paletó, havia uma foto da síndica tirada naquele mesmo dia.",
    },
    "poesia-lirica": {
      exemplar: "Carlos Drummond de Andrade e Adelia Prado, pela imagem concreta que sustenta pensamento e emoção.",
      why: "A poesia lírica não precisa explicar o sentimento quando encontra uma imagem com peso sonoro.",
      references: ["Carlos Drummond de Andrade", "Adelia Prado", "Ferreira Gullar", "Ana Cristina Cesar", "Cora Coralina"],
      placeholder:
        "no varal, a camisa do meu pai\nbate no vento\ncomo se ainda tivesse peito",
    },
    reportagem: {
      exemplar: "Eliane Brum e Daniela Arbex, pela apuração que encontra personagem sem abandonar o rigor.",
      why: "A reportagem forte transforma dado em experiência verificável, com fonte, contexto e rosto humano.",
      references: ["Eliane Brum", "Daniela Arbex", "Zuenir Ventura", "Ruy Castro", "Fernando Morais"],
      placeholder:
        "Às 5h17, a primeira moradora abriu a janela e viu a água na altura do portão. Às 6h, a rua já não tinha nome: era um braço do rio.",
    },
    "newsletter-editorial": {
      exemplar: "Newsletters brasileiras de curadoria e jornalismo explicativo, pela voz recorrente e contrato direto com o leitor.",
      why: "A newsletter funciona quando a pessoa reconhece uma voz e entende por que aquela edição precisava existir.",
      references: ["Meio", "Rádio Novelo", "Nexo Jornal", "Agência Bori"],
      placeholder:
        "Bom dia. Esta edição começa com uma pergunta simples: quem ganha quando uma cidade esquece seus próprios escritores?",
    },
  };

  function listTemplates(options = {}) {
    return templates
      .filter((template) => !options.oficio || template.oficio === options.oficio)
      .map(({ id, oficio, label, icon, title, description }) => ({ id, oficio, label, icon, title, description }));
  }

  function listOficios() {
    return oficios.map((oficio) => ({
      ...oficio,
      count: templates.filter((template) => template.oficio === oficio.id).length,
    }));
  }

  function getTemplate(templateId) {
    const template = templates.find((item) => item.id === templateId) || templates[0];
    return {
      ...template,
      model: models[template.id] || template.model,
    };
  }

  function getStep(templateId, stepIndex) {
    const template = getTemplate(templateId);
    const index = Math.min(Math.max(Number(stepIndex) || 0, 0), template.steps.length - 1);
    return {
      ...template.steps[index],
      index,
      total: template.steps.length,
    };
  }

  function createManuscript(templateId, options = {}) {
    const template = getTemplate(templateId);

    return {
      id: options.id || `manuscrito-${Date.now()}`,
      title: options.title || `Novo ${template.label}`,
      text: template.text,
      kind: template.kind,
      status: "Em escrita",
      chapter: template.chapter,
      progress: 0,
      description: template.description,
      templateId: template.id,
    };
  }

  global.VeredaTemplates = {
    createManuscript,
    getStep,
    getTemplate,
    listOficios,
    listTemplates,
  };
})(window);
