(function templateEngine(global) {
  const templates = [
    {
      id: "roteiro-tv",
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
          eyebrow: "Como o template funciona",
          title: "A estrutura já está pronta para preencher.",
          body: "Cada seção tem uma função clara, sem virar aula. Você troca o placeholder pela cena que quer colocar no mundo.",
          items: [
            ["Teaser", "A cena que prende antes da abertura", "done"],
            ["Ato 1, 2 e 3", "Onde o conflito nasce, cresce e resolve", "done"],
            ["Tag / gancho", "A cena final que puxa para o próximo episódio", "done"],
          ],
          primary: "Ver o template",
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
      label: "Flash fiction",
      icon: "edit_note",
      title: "Flash fiction",
      kind: "Flash fiction",
      chapter: "Imagem âncora",
      description: "Template para uma história breve, com imagem âncora, tensão, virada e fechamento.",
      guidance: {
        meta: ["Subformato", "Flash - até 500 palavras", "Imagem âncora", "Virada"],
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
          "Flash fiction vive de imagem, não de explicação.",
          "Quando terminar, teste cortar 20%.",
        ],
      },
      steps: [
        {
          eyebrow: "Menos de 1.000 palavras",
          title: "Uma história inteira em poucas linhas.",
          body:
            "Flash fiction não é conto incompleto. É uma forma própria: cada palavra precisa justificar sua presença.",
          primary: "Quero escrever",
          secondary: "O que é flash fiction?",
        },
        {
          eyebrow: "Subformatos",
          title: "Flash fiction não é só tamanho.",
          body: "Escolha o fôlego certo para o que você quer contar.",
          items: [
            ["Micro - até 100 palavras", "Um momento, uma virada, nenhum desperdício.", "info"],
            ["Flash - até 500 palavras", "Cabe abertura, conflito e fechamento.", "done"],
            ["Sudden fiction - até 1.000 palavras", "Mais espaço sem perder tensão.", "warn"],
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

Forma: Flash fiction
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
      label: "Crônica",
      icon: "article",
      title: "Crônica",
      kind: "Crônica",
      chapter: "Cena cotidiana",
      description: "Template consultivo para transformar uma observação do cotidiano em texto breve com olhar autoral.",
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
      label: "Conto curto",
      icon: "auto_stories",
      title: "Conto curto",
      kind: "Conto curto",
      chapter: "Conflito central",
      description: "Template consultivo para narrativa curta com personagem, conflito, cena e consequência.",
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
      label: "Ensaio",
      icon: "subject",
      title: "Ensaio",
      kind: "Ensaio",
      chapter: "Tese provisória",
      description: "Template consultivo para defender uma ideia com percurso, tensão argumentativa e voz própria.",
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
  ];

  function listTemplates() {
    return templates.map(({ id, label, icon, title, description }) => ({ id, label, icon, title, description }));
  }

  function getTemplate(templateId) {
    return templates.find((template) => template.id === templateId) || templates[0];
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
    listTemplates,
  };
})(window);
