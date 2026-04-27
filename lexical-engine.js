(function lexicalEngine(global) {
  const localLexicon = {
    agua: {
      label: "água",
      className: "Substantivo feminino",
      field: "Natureza, sobrevivência, ausência",
      note: "No imaginário sertanejo, costuma carregar tensão entre vida, espera e escassez.",
    },
    barro: {
      label: "barro",
      className: "Substantivo masculino",
      field: "Terra, origem, matéria",
      note: "Concretiza o cenário e aproxima a frase do corpo físico da paisagem.",
    },
    maria: {
      label: "Maria",
      className: "Substantivo próprio",
      field: "Personagem, ponto de vista",
      note: "Quando reaparece com frequência, pode funcionar como âncora emocional da cena.",
    },
    seca: {
      label: "seca",
      className: "Substantivo feminino ou adjetivo",
      field: "Clima, falta, resistência",
      note: "A ambiguidade entre condição natural e estado emocional pode enriquecer o trecho.",
    },
    sertao: {
      label: "sertão",
      className: "Substantivo masculino",
      field: "Território, travessia, interior",
      note: "Pode funcionar como lugar físico e também como estado simbólico da narrativa.",
    },
    sol: {
      label: "sol",
      className: "Substantivo masculino",
      field: "Luz, castigo, tempo",
      note: "Em prosa de atmosfera, tende a marcar pressão sobre o corpo e a paisagem.",
    },
    terra: {
      label: "terra",
      className: "Substantivo feminino",
      field: "Chão, origem, pertencimento",
      note: "É palavra concreta com alta carga afetiva em narrativas de território.",
    },
    vento: {
      label: "vento",
      className: "Substantivo masculino",
      field: "Movimento, presságio, mudança",
      note: "Costuma funcionar como sinal de transição ou inquietação na cena.",
    },
  };

  const functionWords = {
    artigos: ["a", "as", "o", "os", "um", "uma", "uns", "umas"],
    conjuncoes: ["e", "mas", "ou", "porque", "pois", "quando", "enquanto", "se"],
    preposicoes: ["a", "ante", "apos", "ate", "com", "contra", "de", "desde", "em", "entre", "para", "por", "sem", "sob", "sobre"],
    pronomes: ["ela", "ele", "eu", "me", "mim", "nos", "nós", "se", "te", "tu", "voce", "você"],
  };

  function analyze(word, text) {
    const selectedWord = word || "terra";
    const normalized = normalizeWord(selectedWord);
    const lexiconEntry = localLexicon[normalized];
    const className = lexiconEntry?.className || inferWordClass(normalized, selectedWord);

    return {
      word: normalized,
      displayWord: lexiconEntry?.label || selectedWord,
      className,
      functionName: inferFunctionName(className),
      field: lexiconEntry?.field || inferSemanticField(normalized, className),
      note: lexiconEntry?.note || createLocalNote(className),
      count: countWordOccurrences(text, normalized),
    };
  }

  function inferWordClass(normalized, original) {
    if (functionWords.artigos.includes(normalized)) {
      return "Artigo";
    }

    if (functionWords.preposicoes.includes(normalized)) {
      return "Preposição";
    }

    if (functionWords.conjuncoes.includes(normalized)) {
      return "Conjunção";
    }

    if (functionWords.pronomes.includes(normalized)) {
      return "Pronome";
    }

    if (/mente$/.test(normalized)) {
      return "Advérbio";
    }

    if (/(ar|er|ir)$/.test(normalized)) {
      return "Verbo no infinitivo";
    }

    if (/(ava|ia|ou|ei|aram|eram|iram)$/.test(normalized)) {
      return "Verbo flexionado";
    }

    if (/(oso|osa|vel|al|ivo|iva|ento|enta)$/.test(normalized)) {
      return "Adjetivo";
    }

    if (original && /^[A-ZÁÉÍÓÚÂÊÔÃÕÇ]/.test(original)) {
      return "Substantivo próprio";
    }

    return "Substantivo provável";
  }

  function inferFunctionName(className) {
    if (className.includes("Verbo")) {
      return "Núcleo de ação";
    }

    if (className.includes("Adjetivo")) {
      return "Qualificador";
    }

    if (className.includes("Advérbio")) {
      return "Modificador verbal";
    }

    if (["Artigo", "Preposição", "Conjunção", "Pronome"].includes(className)) {
      return "Conector gramatical";
    }

    return "Núcleo nominal";
  }

  function inferSemanticField(normalized, className) {
    if (className.includes("Verbo")) {
      return "Ação, ritmo, movimento";
    }

    if (className.includes("Adjetivo")) {
      return "Qualidade, atmosfera, percepção";
    }

    if (normalized.length <= 3) {
      return "Estrutura gramatical";
    }

    return "Imagem, cena, matéria narrativa";
  }

  function createLocalNote(className) {
    if (className.includes("Verbo")) {
      return "Observe se a ação impulsiona a cena ou apenas descreve movimento já evidente.";
    }

    if (className.includes("Adjetivo")) {
      return "Adjetivos fortes funcionam melhor quando revelam percepção, não apenas ornamento.";
    }

    return "Termo analisado por heurística local. Use como pista de revisão, não como veredito gramatical.";
  }

  function createHighlightedContext(text, word, escapeHtml) {
    const cleanText = text.replace(/\s+/g, " ").trim();
    const tokens = cleanText.match(/[\p{L}-]+|[^\p{L}-]+/gu) || [];
    let currentIndex = 0;
    let matchIndex = -1;
    let matchLength = word.length;

    for (const token of tokens) {
      if (normalizeWord(token) === word) {
        matchIndex = currentIndex;
        matchLength = token.length;
        break;
      }

      currentIndex += token.length;
    }

    if (matchIndex === -1) {
      return escapeHtml(cleanText.slice(0, 420));
    }

    const start = Math.max(0, matchIndex - 180);
    const end = Math.min(cleanText.length, matchIndex + 240);
    const excerpt = cleanText.slice(start, end);
    const relativeMatchStart = matchIndex - start;
    const before = excerpt.slice(0, relativeMatchStart);
    const match = excerpt.slice(relativeMatchStart, relativeMatchStart + matchLength);
    const after = excerpt.slice(relativeMatchStart + matchLength);

    return `${escapeHtml(before)}<mark>${escapeHtml(match)}</mark>${escapeHtml(after)}`;
  }

  function countWordOccurrences(text, word) {
    return tokenizeWords(text).filter((token) => normalizeWord(token) === word).length;
  }

  function tokenizeWords(text) {
    return text.match(/[\p{L}-]+/gu) || [];
  }

  function normalizeWord(value) {
    return String(value)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  global.VeredaLexical = {
    analyze,
    createHighlightedContext,
    normalizeWord,
  };
})(window);
