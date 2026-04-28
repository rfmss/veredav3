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

  function createGuide({ id, oficio, label, icon, chapter, description, meta, sections, reminders, text, model }) {
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
      steps: [
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
      ...roteiroGuides(),
      ...poesiaGuides(),
      ...naoFiccaoGuides(),
      ...jornalismoGuides(),
      ...comercialTecnicaGuides(),
      ...estudoVestibularGuides(),
      ...mercadoEditorialGuides(),
      ...objetoLivroGuides(),
    ];
  }

  function roteiroGuides() {
    return [
      guide("roteiro-filme", "roteiro", "Roteiro de filme", "theaters", "Arco fechado", "Guia para curta ou longa com conflito visual, viradas e cena final forte.", ["Cinema", "Três atos", "Imagem", "Arco fechado"], "EXT. RODOVIÁRIA - FIM DE TARDE\n\nEla desce do ônibus com uma sacola e um endereço antigo. Ninguém veio buscar."),
      guide("documentario", "roteiro", "Documentário", "videocam", "Pergunta e escuta", "Guia para tratamento documental com pergunta, personagem real e abertura ao inesperado.", ["Não ficção audiovisual", "Tratamento", "Personagem real", "Escuta"], "A câmera espera. A mulher dobra uma camisa, desfaz a dobra e pergunta se pode começar de novo."),
      guide("dramaturgia", "roteiro", "Dramaturgia", "comedy_mask", "Palavra em cena", "Guia para teatro, rubrica, conflito ao vivo e tensão pela palavra.", ["Teatro", "Cena", "Rubrica", "Conflito ao vivo"], "ELA: Você guardou a cadeira dele.\n\nELE: Ninguém senta ali.\n\nELA: Ele morreu há sete anos."),
      guide("roteiro-games", "roteiro", "Roteiro de games", "sports_esports", "Escolha e consequência", "Guia para narrativa interativa com escolhas, missões, diálogos e sistema.", ["Interatividade", "Escolha", "Consequência", "Mundo jogável"], "OPÇÃO A: Entregar a água ao vilarejo.\nOPÇÃO B: Guardar a água para atravessar o sertão.\n\nA escolha altera quem abre a próxima porta."),
      guide("podcast-ficcional", "roteiro", "Podcast ficcional", "graphic_eq", "Cena sonora", "Guia para drama em áudio, diálogo, ambiência e clareza de vozes.", ["Áudio", "Voz", "Ambiência", "Cena sem imagem"], "SOM: Ventilador velho. Um copo toca a mesa.\n\nVOZ: Se você ouviu a fita até aqui, já sabe que eu menti no começo."),
    ];
  }

  function poesiaGuides() {
    return [
      guide("slam", "poesia", "Slam e palavra falada", "mic", "Voz e corpo", "Guia para poema performático com ritmo, presença e urgência pública.", ["Performance", "3 minutos", "Voz", "Corpo"], "minha rua não cabe no mapa\nmas cabe inteira\nquando minha mãe chama meu nome"),
      guide("poesia-digital", "poesia", "Poesia digital", "phone_iphone", "Tela e impacto", "Guia para poema curto pensado para tela, circulação e leitura rápida.", ["Tela", "Imagem final", "Brevidade", "Compartilhamento"], "guardei teu silêncio\nnuma pasta chamada\ncoisas que ainda respondem"),
      guide("letra-musica", "poesia", "Letra de música", "music_note", "Melodia e repetição", "Guia para letra em função de melodia, refrão, imagem e canto.", ["Canção", "Refrão", "Métrica", "Voz cantada"], "se a cidade dorme cedo\neu aprendo a te esquecer\nno intervalo do semáforo"),
    ];
  }

  function naoFiccaoGuides() {
    return [
      guide("memoir", "nao-ficcao", "Memória e autobiografia", "history_edu", "Cena lembrada", "Guia para narrar vida real por cenas, transformação e recorte significativo.", ["Memória", "Eu narrador", "Cena", "Transformação"], "Naquele dia, aprendi que adulto também mente olhando para o chão."),
      guide("livro-reportagem", "nao-ficcao", "Livro-reportagem", "library_books", "Apuração longa", "Guia para investigação em livro, personagens reais, documentos e arco narrativo.", ["Jornalismo narrativo", "Pesquisa longa", "Personagens reais", "Capítulos"], "O processo tinha 842 páginas. A história, porém, começava num recibo dobrado dentro de uma Bíblia."),
    ];
  }

  function jornalismoGuides() {
    return [
      guide("critica-cultural", "jornalismo", "Crítica cultural", "reviews", "Tese sobre obra", "Guia para análise de obra cultural com argumento, contexto e posição crítica.", ["Crítica", "Tese", "Contexto", "Argumento"], "O problema do filme não está no que ele mostra, mas na pressa com que tenta nos dizer o que sentir."),
      guide("coluna-opiniao", "jornalismo", "Coluna de opinião", "edit_square", "Tese e provocação", "Guia para texto opinativo com tese, voz reconhecível e conclusão provocadora.", ["Opinião", "Tese", "Voz", "Recorrência"], "O país chama de polêmica aquilo que ainda não teve coragem de chamar pelo nome."),
    ];
  }

  function comercialTecnicaGuides() {
    return [
      guide("copywriting", "comercial-tecnica", "Copywriting", "campaign", "Promessa e conversão", "Guia para escrita persuasiva com promessa clara, prova e chamada para ação.", ["Persuasão", "Promessa", "Prova", "Ação"], "Não é só uma agenda. É o lugar onde sua semana para de mandar em você."),
      guide("conteudo-digital", "comercial-tecnica", "Conteúdo digital", "language", "Explicação útil", "Guia para conteúdo informativo, claro e encontrável sem perder voz.", ["Conteúdo", "Clareza", "SEO humano", "Utilidade"], "Você já ouviu esse termo. Mas o que ele muda na sua vida prática ainda costuma ficar fora da explicação."),
      guide("ux-writing", "comercial-tecnica", "UX writing", "touch_app", "Microtexto útil", "Guia para botões, mensagens, erros e fluxos com clareza humana.", ["Interface", "Microcopy", "Clareza", "Ação"], "Não conseguimos salvar agora. Seu texto continua aqui. Tente novamente em alguns segundos."),
      guide("roteiro-youtube", "comercial-tecnica", "Roteiro para vídeo", "smart_display", "Gancho e retenção", "Guia para YouTube, Reels ou vídeo explicativo com gancho, ritmo e entrega.", ["Vídeo", "Gancho", "Retenção", "Fala"], "Esse dado parece pequeno. Mas ele explica por que sua cidade esquenta mais do que a previsão diz."),
      guide("ghostwriting", "comercial-tecnica", "Ghostwriting", "person_edit", "Voz do outro", "Guia para escrever na voz de outra pessoa com entrevista, estrutura e discrição.", ["Voz alheia", "Entrevista", "Discrição", "Estrutura"], "Eu não queria contar essa história como exemplo de superação. Queria contar porque foi ali que parei de fingir certeza."),
      guide("quadrinhos", "comercial-tecnica", "Escrita para quadrinhos", "view_comfy", "Painel e página", "Guia para roteiro de HQ, página, painel, legenda e colaboração visual.", ["HQ", "Painel", "Página", "Imagem + palavra"], "PAINEL 1: A mesa posta para dois.\nPAINEL 2: Uma cadeira vazia.\nBALÃO: Hoje ele vem."),
      guide("escrita-tecnica", "comercial-tecnica", "Escrita técnica", "science", "Rigor e narrativa", "Guia para relatório, ensaio acadêmico, divulgação ou documento técnico com clareza.", ["Rigor", "Método", "Dados", "Narrativa"], "O dado isolado sugere melhora. A série histórica, porém, mostra outra coisa: a queda começou antes da política analisada."),
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
