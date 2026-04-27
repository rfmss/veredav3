(function precisionEngine(global) {
  function analyze(template, text) {
    const normalizedText = normalize(text);
    const words = countWords(normalizedText);

    if (template.id === "flash-fiction") {
      return analyzeFlashFiction(normalizedText, words);
    }

    return analyzeGeneric(template, normalizedText, words);
  }

  function analyzeFlashFiction(text, words) {
    const firstSentence = getFirstSentence(text);
    const lastSentence = getLastSentence(text);
    const sentences = splitSentences(text);
    const paragraphs = text.split(/\n+/).map((item) => item.trim()).filter(Boolean);
    const sensoryHits = countMatches(text, /\b(cheiro|som|ruído|luz|sombra|gosto|frio|calor|mão|olho|porta|mesa|xícara|café|janela|roupa|casaco|sangue|água|terra|pele)\b/gi);
    const turnHits = countMatches(text, /\b(mas|porém|então|quando|até que|só que|de repente|na verdade|descobriu|percebeu)\b/gi);
    const explanationHits = countMatches(text, /\b(porque|pois|significava|sentia|pensava|lembrava|explicou|entendeu que)\b/gi);
    const repeatedRatio = getTopWordRatio(text);
    const firstLastEcho = getEchoScore(firstSentence, lastSentence);

    const checks = [
      createCheck("Limite do subformato", words > 0 && words <= 500, getRangeScore(words, 80, 500), "Até 500 palavras mantém a compressão do flash."),
      createCheck("Imagem âncora", sensoryHits >= 2, Math.min(100, sensoryHits * 28), "Procure um objeto, gesto ou detalhe sensorial que carregue peso."),
      createCheck("Abertura com pergunta", firstSentence.length > 20 && firstSentence.length < 180, scoreOpening(firstSentence), "A primeira frase precisa abrir tensão, não explicar o mundo."),
      createCheck("Virada perceptível", turnHits > 0, Math.min(100, turnHits * 34), "Uma mudança de leitura ajuda o texto a fechar com força."),
      createCheck("Fechamento em eco", firstLastEcho >= 20, firstLastEcho, "O fim pode espelhar, contrariar ou iluminar a abertura."),
      createCheck("Compressão", explanationHits <= 3 && repeatedRatio < 0.18, scoreCompression(explanationHits, repeatedRatio), "Flash fiction perde força quando explica ou repete demais."),
      createCheck("Respiração do texto", paragraphs.length >= 2 && sentences.length >= 3, Math.min(100, paragraphs.length * 22 + sentences.length * 8), "Blocos e frases precisam dar ritmo sem virar resumo."),
    ];

    return summarize(checks, words, 500);
  }

  function analyzeGeneric(template, text, words) {
    const checks = [
      createCheck("Texto iniciado", words > 0, words > 0 ? 100 : 0, "Comece com um primeiro bloco de escrita."),
      createCheck("Forma escolhida", Boolean(template?.id), 100, "O texto está ligado a um template consultivo."),
      createCheck("Tamanho útil", words >= 50, Math.min(100, words * 2), "Um rascunho maior permite análise melhor."),
    ];

    return summarize(checks, words, 0);
  }

  function summarize(checks, words, limit) {
    const score = Math.round(checks.reduce((total, check) => total + check.score, 0) / checks.length);

    return {
      score,
      status: score >= 82 ? "Pronto para leitura editorial" : score >= 60 ? "Boa base" : "Em formação",
      words,
      limit,
      checks,
    };
  }

  function createCheck(label, passed, score, hint) {
    return {
      label,
      passed,
      score: Math.max(0, Math.min(100, Math.round(score))),
      hint,
    };
  }

  function normalize(text) {
    return (text || "").replace(/\u00a0/g, " ").trim();
  }

  function countWords(text) {
    return text ? text.split(/\s+/).filter(Boolean).length : 0;
  }

  function splitSentences(text) {
    return text.split(/[.!?]+/).map((item) => item.trim()).filter(Boolean);
  }

  function getFirstSentence(text) {
    return splitSentences(text)[0] || "";
  }

  function getLastSentence(text) {
    const sentences = splitSentences(text);
    return sentences[sentences.length - 1] || "";
  }

  function countMatches(text, pattern) {
    return (text.match(pattern) || []).length;
  }

  function getRangeScore(value, idealMin, max) {
    if (!value) {
      return 0;
    }

    if (value > max) {
      return Math.max(0, 100 - (value - max));
    }

    if (value < idealMin) {
      return Math.round((value / idealMin) * 72);
    }

    return 100;
  }

  function scoreOpening(sentence) {
    if (!sentence) {
      return 0;
    }

    let score = 45;
    if (sentence.length <= 150) score += 20;
    if (/[?]/.test(sentence)) score += 15;
    if (/\b(hoje|quando|antes|depois|ninguém|ela|ele|eu|ainda)\b/i.test(sentence)) score += 10;
    if (/\b(era|foi|estava)\b/i.test(sentence) && sentence.length > 120) score -= 10;
    return score;
  }

  function scoreCompression(explanationHits, repeatedRatio) {
    const explanationScore = Math.max(0, 100 - explanationHits * 18);
    const repetitionScore = Math.max(0, 100 - repeatedRatio * 420);
    return Math.round((explanationScore + repetitionScore) / 2);
  }

  function getTopWordRatio(text) {
    const words = text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .match(/[a-z]{4,}/g) || [];

    if (!words.length) {
      return 0;
    }

    const counts = words.reduce((map, word) => {
      map[word] = (map[word] || 0) + 1;
      return map;
    }, {});
    const top = Math.max(...Object.values(counts));
    return top / words.length;
  }

  function getEchoScore(firstSentence, lastSentence) {
    const firstWords = getRelevantWords(firstSentence);
    const lastWords = getRelevantWords(lastSentence);

    if (!firstWords.length || !lastWords.length) {
      return 0;
    }

    const shared = firstWords.filter((word) => lastWords.includes(word)).length;
    return Math.min(100, shared * 32 + Math.min(firstWords.length, lastWords.length) * 3);
  }

  function getRelevantWords(value) {
    return (
      value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .match(/[a-z]{4,}/g) || []
    ).slice(0, 12);
  }

  global.VeredaPrecision = {
    analyze,
  };
})(window);
