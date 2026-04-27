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
