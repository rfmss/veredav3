(function decolonialEngine(global) {
  const categories = {
    territorio: { label: "território" },
    povos: { label: "povos" },
    conhecimento: { label: "conhecimento" },
    estetica: { label: "estética" },
    relacoes: { label: "relações" },
    linguagem: { label: "linguagem" },
  };

  const entries = [
    {
      avoid: "descobrimento",
      alternatives: ["invasão", "chegada europeia", "colonização"],
      category: "territorio",
      reason: "Pressupõe que o território não existia ou não tinha valor antes dos europeus chegarem, apagando séculos de civilização indígena.",
      context: "Use 'chegada dos portugueses' em contextos históricos neutros. 'Invasão' quando o foco é o impacto sobre os povos originários.",
    },
    {
      avoid: "índio",
      alternatives: ["indígena", "povo originário", "[nome do povo]"],
      category: "povos",
      reason: "Termo genérico imposto, resultado de um erro geográfico de Colombo. Apaga a diversidade de centenas de povos com línguas e culturas distintas.",
      context: "Prefira sempre o nome específico do povo, como Guarani, Yanomami ou Krenak. 'Indígena' funciona quando o contexto exige termo abrangente.",
    },
    {
      avoid: "primitivo",
      alternatives: ["originário", "ancestral", "pré-colonial"],
      category: "conhecimento",
      reason: "Posiciona outras culturas numa escala evolutiva eurocêntrica, como se houvesse uma hierarquia entre 'avançado' e 'atrasado'.",
      context: "Quase nunca há justificativa para o uso. Pergunte: primitivo em relação a quê e a quem?",
    },
    {
      avoid: "exótico",
      alternatives: ["singular", "específico", "próprio de"],
      category: "estetica",
      reason: "Marca o outro como objeto de curiosidade para um olhar europeu presumidamente neutro. Romantiza a diferença em vez de respeitar a especificidade.",
      context: "Ao descrever práticas culturais, prefira nomeá-las dentro do seu próprio contexto em vez de classificá-las pelo olhar externo.",
    },
    {
      avoid: "civilizar",
      alternatives: ["educar", "colonizar", "impor"],
      category: "relacoes",
      reason: "Implica que há povos sem civilização, noção usada historicamente para justificar extermínio e apagamento cultural.",
      context: "Em análises históricas, use entre aspas e explique o uso colonial do termo para manter a crítica visível.",
    },
    {
      avoid: "folclore",
      alternatives: ["cultura popular", "tradição oral", "saber ancestral"],
      category: "conhecimento",
      reason: "Quando aplicado a práticas não europeias, o termo frequentemente as rebaixa a curiosidades sem valor epistemológico.",
      context: "O termo tem uso legítimo em estudos específicos. O problema é o uso para desqualificar conhecimentos não ocidentais.",
    },
    {
      avoid: "novo mundo",
      alternatives: ["Américas", "continente americano", "Abya Yala"],
      category: "territorio",
      reason: "'Novo' para quem? O continente tinha nome, história e milhões de habitantes. O termo reforça a perspectiva do colonizador como ponto de partida.",
      context: "Abya Yala é o nome dado pelos povos Kuna. Considere em contextos de valorização das perspectivas originárias.",
    },
    {
      avoid: "mestiçagem",
      alternatives: ["miscigenação", "hibridismo cultural", "encontro de povos"],
      category: "povos",
      reason: "O termo carrega o projeto de embranquecimento da população, uma política racista que buscava diluir traços africanos e indígenas.",
      context: "Em análises críticas, o próprio conceito pode ser objeto. Use entre aspas e contextualize a política por trás dele.",
    },
    {
      avoid: "desbravador",
      alternatives: ["colonizador", "explorador", "invasor"],
      category: "relacoes",
      reason: "Heroiciza a violência da expansão territorial, apagando que os territórios já estavam habitados e que havia resistência.",
      context: "Em narrativas históricas, nomear quem foi deslocado ou resistiu equilibra a perspectiva que o termo apaga.",
    },
    {
      avoid: "lenda",
      alternatives: ["narrativa", "cosmologia", "mitologia", "tradição oral"],
      category: "conhecimento",
      reason: "Quando aplicado a relatos de povos não ocidentais, desqualifica narrativas como ficção, enquanto tradições europeias equivalentes recebem estatuto de mito fundador.",
      context: "Use 'mitologia' ou 'cosmologia' para dar o mesmo estatuto que se dá às tradições gregas ou romanas.",
    },
    {
      avoid: "contribuição",
      alternatives: ["participação forçada", "trabalho escravizado", "produção"],
      category: "relacoes",
      reason: "'Contribuição negra/indígena' apaga violência e coerção, sugerindo participação voluntária em um projeto comum quando havia exploração.",
      context: "Seja específico: 'o trabalho escravizado de africanos construiu...' é mais honesto que 'a contribuição africana foi...'",
    },
    {
      avoid: "terceiro mundo",
      alternatives: ["sul global", "países periféricos", "países em desenvolvimento"],
      category: "territorio",
      reason: "Hierarquiza nações dentro de uma lógica da Guerra Fria que coloca o ocidente como norma.",
      context: "'Sul global' é aceito em contextos críticos. Em análises econômicas, 'países periféricos' pode ser mais preciso.",
    },
    {
      avoid: "arte primitiva",
      alternatives: ["arte indígena", "arte africana", "arte [povo específico]"],
      category: "estetica",
      reason: "Categoriza produções artísticas de povos não europeus como etapa inferior de uma evolução estética com padrão europeu.",
      context: "Nomeie sempre o povo, a tradição ou o artista. A especificidade é uma forma de respeito e precisão.",
    },
    {
      avoid: "integração",
      alternatives: ["assimilação forçada", "inserção", "inclusão"],
      category: "relacoes",
      reason: "No contexto de políticas para povos indígenas, historicamente significou destruição de culturas para absorção na sociedade colonizadora.",
      context: "Em políticas públicas contemporâneas, prefira 'inclusão com respeito à autodeterminação' para explicitar o que está em jogo.",
    },
    {
      avoid: "horda",
      alternatives: ["grupo", "coletivo", "povo", "comunidade"],
      category: "povos",
      reason: "Termo usado por europeus para desumanizar povos nômades e justificar perseguição. Ainda carrega conotação de massa desorganizada e ameaçadora.",
      context: "Qualquer termo coletivo neutro serve. O problema é o uso que ancora a desumanização histórica.",
    },
    {
      avoid: "dialeto",
      alternatives: ["língua", "idioma"],
      category: "linguagem",
      reason: "Linguisticamente, dialeto não é menor que língua. Na prática, é usado para rebaixar línguas de povos colonizados frente às línguas oficiais.",
      context: "Use 'língua' para qualquer sistema linguístico quando o termo 'dialeto' funcionar como diminuição de prestígio.",
    },
    {
      avoid: "selvagem",
      alternatives: ["originário", "livre", "não domesticado"],
      category: "povos",
      reason: "Opõe civilizado a selvagem para justificar violência. Foi usado juridicamente para negar direitos a povos indígenas e africanos.",
      context: "Em contextos de natureza, o termo pode ser neutro. O problema é seu uso aplicado a pessoas e culturas.",
    },
    {
      avoid: "sincretismo",
      alternatives: ["diálogo religioso", "resistência religiosa", "tradição de matriz africana"],
      category: "conhecimento",
      reason: "Muitas lideranças religiosas afro-brasileiras rejeitam o termo por apagar a resistência estratégica realizada sob pressão colonial.",
      context: "Consulte a posição das comunidades sobre o próprio uso. Em contextos acadêmicos, contextualizar o debate é necessário.",
    },
  ];

  function normalize(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  }

  function listCategories() {
    return Object.entries(categories).map(([id, category]) => ({
      id,
      ...category,
      count: entries.filter((entry) => entry.category === id).length,
    }));
  }

  function listEntries(options = {}) {
    const query = normalize(options.query);
    const category = options.category || "all";

    return entries.filter((entry) => {
      const matchesCategory = category === "all" || entry.category === category;
      const haystack = normalize([entry.avoid, ...entry.alternatives, entry.reason, entry.context].join(" "));
      return matchesCategory && (!query || haystack.includes(query));
    });
  }

  global.VeredaDecolonial = {
    listCategories,
    listEntries,
  };
})(window);
