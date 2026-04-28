(function templateEngine(global) {
  const oficios = [
    { id: "ficcao", label: "Ficção", icon: "auto_stories" },
    { id: "roteiro", label: "Roteiro", icon: "movie" },
    { id: "poesia", label: "Poesia", icon: "format_quote" },
    { id: "nao-ficcao", label: "Não ficção", icon: "article" },
    { id: "jornalismo", label: "Jornalismo", icon: "newspaper" },
    { id: "comercial-tecnica", label: "Comercial e técnica", icon: "workspaces" },
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
      model: models[template.id],
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
