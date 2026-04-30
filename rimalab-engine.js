(function rimaLabEngine(global) {
  const VOWELS = "aeiouáàâãéèêíìîóòôõúùû";
  const ACCENTED = /[áàâãéèêíìîóòôõúùû]/i;
  const ACADEMIC_NOTE =
    "Escansão automática é aproximação pedagógica: sinalefa, dicção regional e intenção musical podem mudar a contagem.";

  const ENCYCLOPEDIA = [
    {
      title: "Regra de ouro da métrica",
      tags: ["escansão", "última tônica", "oficina"],
      body:
        "Na contagem poética tradicional, o verso é contado até a última sílaba tônica da última palavra. Sons depois dela não entram na medida clássica.",
      sample: "O amor é fogo que arde sem se ver",
    },
    {
      title: "Soneto",
      tags: ["14 versos", "decassílabo", "ABBA ABBA CDC DCD"],
      body:
        "Forma fixa com dois quartetos e dois tercetos. O decassílabo clássico conta até a última sílaba tônica do verso.",
      sample: "Sete anos de pastor Jacó servia\nLabão, pai de Raquel, serrana bela",
    },
    {
      title: "Sextilha",
      tags: ["6 versos", "redondilha maior", "oralidade"],
      body:
        "Muito usada na poesia popular e no repente. Costuma trabalhar sete sílabas poéticas e rimas alternadas ou emparelhadas.",
      sample: "No terreiro a voz levanta\nquando a noite pede chão",
    },
    {
      title: "Redondilha menor",
      tags: ["5 sílabas", "cantável", "popular"],
      body:
        "Verso breve, forte em canção e poesia oral. A concisão obriga imagem nítida e ritmo rápido.",
      sample: "Minha terra tem\num rio parado",
    },
    {
      title: "Redondilha maior",
      tags: ["7 sílabas", "heptassílabo", "música"],
      body:
        "Uma das medidas mais naturais da língua portuguesa. Aparece em cantiga, cordel, letra de música e poema narrativo.",
      sample: "Minha rua não cabe no mapa\nmas me chama pelo nome",
    },
  ];

  const GRAMMAR_WORDS = {
    amor: "substantivo",
    dor: "substantivo",
    flor: "substantivo",
    mar: "substantivo",
    paz: "substantivo",
    voz: "substantivo",
    vez: "substantivo",
    vida: "substantivo",
    morte: "substantivo",
    saudade: "substantivo",
    liberdade: "substantivo",
    canção: "substantivo",
    razão: "substantivo",
    coração: "substantivo",
    ser: "verbo",
    ver: "verbo",
    ter: "verbo",
    dar: "verbo",
    amar: "verbo",
    cantar: "verbo",
    sonhar: "verbo",
    viver: "verbo",
    morrer: "verbo",
    belo: "adjetivo",
    breve: "adjetivo",
    triste: "adjetivo",
    forte: "adjetivo",
    claro: "adjetivo",
    escuro: "adjetivo",
    sempre: "advérbio",
    nunca: "advérbio",
    apenas: "advérbio",
    atrás: "advérbio",
  };

  function analyze(text) {
    const verses = text
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
    const scans = verses.map(scanVerse);
    const metrics = scans.map((scan) => scan.totalSyllables);
    const uniqueMetrics = [...new Set(metrics)].sort((a, b) => a - b);
    const isIsometric = metrics.length > 1 && metrics.every((metric) => metric === metrics[0]);
    const rhymes = [];

    for (let index = 0; index < verses.length - 1; index += 1) {
      const rhyme = analyzeRhyme(verses[index], verses[index + 1]);
      if (rhyme) {
        rhymes.push({ ...rhyme, from: index, to: index + 1 });
      }
    }

    return {
      note: ACADEMIC_NOTE,
      verses,
      scans,
      metrics,
      uniqueMetrics,
      isIsometric,
      rhymes,
      rhymeScheme: computeRhymeScheme(verses),
      totalVerses: verses.length,
    };
  }

  function scanVerse(verse) {
    const words = getWords(verse);

    if (!words.length) {
      return { totalSyllables: 0, rawSyllables: 0, words: [], ellisions: [], finalWord: "", finalTonicity: "" };
    }

    const analyzedWords = words.map((word) => ({
      word,
      syllables: syllabify(word),
      tonicity: classifyTonicity(word),
    }));
    const ellisions = [];
    let rawSyllables = analyzedWords.reduce((sum, item) => sum + item.syllables.length, 0);

    for (let index = 0; index < analyzedWords.length - 1; index += 1) {
      const left = analyzedWords[index];
      const right = analyzedWords[index + 1];

      if (canElide(left, right)) {
        ellisions.push(`${left.word} ${right.word}`);
        rawSyllables -= 1;
      }
    }

    const finalWord = analyzedWords[analyzedWords.length - 1];
    const adjustment = finalWord.tonicity === "paroxítona" ? 1 : finalWord.tonicity === "proparoxítona" ? 2 : 0;

    return {
      totalSyllables: Math.max(1, rawSyllables - adjustment),
      rawSyllables,
      words: analyzedWords,
      ellisions,
      finalWord: finalWord.word,
      finalTonicity: finalWord.tonicity,
    };
  }

  function analyzeRhyme(lineA, lineB) {
    const wordA = getLastWord(lineA);
    const wordB = getLastWord(lineB);

    if (!wordA || !wordB) {
      return null;
    }

    const soundA = getRhymeSound(wordA);
    const soundB = getRhymeSound(wordB);
    const rhymes = soundsMatch(soundA, soundB);

    if (!rhymes) {
      return {
        rhymes: false,
        classification: "nenhuma",
        wordA,
        wordB,
        soundA,
        soundB,
        classA: null,
        classB: null,
      };
    }

    const classA = getGrammaticalClass(wordA);
    const classB = getGrammaticalClass(wordB);
    const classification = classifyRhyme(wordA, wordB, classA, classB, soundA, soundB);

    return { rhymes, classification, wordA, wordB, soundA, soundB, classA, classB };
  }

  function computeRhymeScheme(verses) {
    const sounds = verses.map((verse) => {
      const word = getLastWord(verse);
      return word ? getRhymeSound(word) : "";
    });
    const map = [];
    const scheme = [];

    sounds.forEach((sound) => {
      if (!sound) {
        scheme.push("?");
        return;
      }

      const existing = map.find((item) => soundsMatch(item.sound, sound));
      if (existing) {
        scheme.push(existing.letter);
        return;
      }

      const letter = String.fromCharCode(65 + map.length);
      map.push({ sound, letter });
      scheme.push(letter);
    });

    return scheme.join(" ");
  }

  function syllabify(word) {
    const clean = normalizeWord(word);

    if (!clean) {
      return [];
    }

    const groups = [];
    let current = "";

    for (let index = 0; index < clean.length; index += 1) {
      const char = clean[index];
      const next = clean[index + 1] || "";
      current += char;

      if (isVowel(char) && (!isVowel(next) || shouldBreakVowelPair(char, next))) {
        groups.push(current);
        current = "";
      }
    }

    if (current) {
      if (groups.length) {
        groups[groups.length - 1] += current;
      } else {
        groups.push(current);
      }
    }

    return groups.length ? groups : [clean];
  }

  function classifyTonicity(word) {
    const clean = normalizeWord(word);
    const syllables = syllabify(clean);

    if (syllables.length <= 1) {
      return "monossílabo";
    }

    const accentIndex = syllables.findIndex((syllable) => ACCENTED.test(syllable));

    if (accentIndex >= 0) {
      const fromEnd = syllables.length - 1 - accentIndex;
      if (fromEnd === 0) return "oxítona";
      if (fromEnd === 1) return "paroxítona";
      return "proparoxítona";
    }

    if (/(r|l|z|x|i|u|im|um|om|ins|uns|ons)$/i.test(clean)) {
      return "oxítona";
    }

    return "paroxítona";
  }

  function getRhymeSound(word) {
    const clean = normalizeWord(word);
    const syllables = syllabify(clean);
    const tonicity = classifyTonicity(clean);
    const tonicIndex =
      tonicity === "proparoxítona"
        ? Math.max(0, syllables.length - 3)
        : tonicity === "paroxítona"
          ? Math.max(0, syllables.length - 2)
          : syllables.length - 1;
    const raw = syllables.slice(tonicIndex).join("");
    const normalized = phoneticNormalize(raw);
    const vowelIndex = normalized.search(/[aeiou]/);
    return vowelIndex >= 0 ? normalized.slice(vowelIndex) : normalized;
  }

  function phoneticNormalize(value) {
    return stripAccents(value)
      .toLowerCase()
      .replace(/ç/g, "s")
      .replace(/x$/g, "s")
      .replace(/z$/g, "s")
      .replace(/s$/g, "s")
      .replace(/am$/g, "ao")
      .replace(/ão$/g, "ao")
      .replace(/ões$/g, "oes")
      .replace(/ães$/g, "aes")
      .replace(/ens$/g, "es")
      .replace(/em$/g, "e")
      .replace(/lh/g, "li")
      .replace(/nh/g, "ni")
      .replace(/ch/g, "x")
      .replace(/qu/g, "k")
      .replace(/gu([ei])/g, "g$1")
      .replace(/[^a-z]/g, "");
  }

  function classifyRhyme(wordA, wordB, classA, classB, soundA, soundB) {
    const preciousSignals = [
      classifyTonicity(wordA) === "proparoxítona",
      classifyTonicity(wordB) === "proparoxítona",
      /íssimo|íssimo|ático|ética|ância|ência|ável|ível|ização|ização/.test(stripAccents(`${wordA} ${wordB}`).toLowerCase()),
      Math.max(wordA.length, wordB.length) >= 10 && classA !== classB,
      soundA.length >= 5 && soundB.length >= 5 && classA !== classB,
    ];

    if (preciousSignals.some(Boolean)) {
      return "preciosa";
    }

    return classA === classB ? "pobre" : "rica";
  }

  function getGrammaticalClass(word) {
    const clean = normalizeWord(word);

    if (GRAMMAR_WORDS[clean]) {
      return GRAMMAR_WORDS[clean];
    }

    if (/mente$/.test(clean)) return "advérbio";
    if (/(ar|er|ir)$/.test(clean) && clean.length > 3) return "verbo";
    if (/(ção|são|dade|tude|eza|ice|mento|agem|or)$/.test(clean)) return "substantivo";
    if (/(ado|ada|ido|ida|oso|osa|ivo|iva|al|vel|ário|ária|ente)$/.test(clean)) return "adjetivo";
    if (/^(eu|tu|ele|ela|nós|vos|eles|elas|isso|isto|aquilo|alguém|ninguém)$/.test(clean)) return "pronome";
    if (/^(o|a|os|as|um|uma|uns|umas)$/.test(clean)) return "artigo";
    return "substantivo";
  }

  function canElide(left, right) {
    const leftWord = normalizeWord(left.word);
    const rightWord = normalizeWord(right.word);
    const leftLast = leftWord.slice(-1);
    const rightFirst = rightWord.charAt(0);

    if (!isVowel(leftLast) || !isVowel(rightFirst)) {
      return false;
    }

    if (/^(o|a|e|de|da|do|que|me|te|se|lhe)$/.test(leftWord)) {
      return true;
    }

    return left.tonicity !== "oxítona";
  }

  function soundsMatch(soundA, soundB) {
    if (!soundA || !soundB) {
      return false;
    }

    if (soundA === soundB) {
      return true;
    }

    const minLength = Math.min(soundA.length, soundB.length);
    const size = Math.max(2, Math.min(minLength, 4));
    return soundA.slice(-size) === soundB.slice(-size);
  }

  function shouldBreakVowelPair(left, right) {
    const pair = stripAccents(left + right).toLowerCase();

    if (ACCENTED.test(right) && /[iu]/.test(stripAccents(right))) {
      return true;
    }

    if (/[aeo][aeo]/.test(pair)) {
      return true;
    }

    return false;
  }

  function getWords(text) {
    return text
      .split(/\s+/)
      .map((word) => word.replace(/^[^A-Za-zÀ-ÿ]+|[^A-Za-zÀ-ÿ]+$/g, ""))
      .filter(Boolean);
  }

  function getLastWord(text) {
    const words = getWords(text);
    return words[words.length - 1] || "";
  }

  function normalizeWord(word) {
    return String(word || "")
      .toLowerCase()
      .replace(/^[^a-zà-ÿ]+|[^a-zà-ÿ]+$/gi, "");
  }

  function stripAccents(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function isVowel(char) {
    return VOWELS.includes(String(char || "").toLowerCase());
  }

  global.VeredaRimaLab = {
    analyze,
    analyzeRhyme,
    classifyTonicity,
    encyclopedia: ENCYCLOPEDIA,
    scanVerse,
    syllabify,
  };
})(typeof window !== "undefined" ? window : globalThis);
