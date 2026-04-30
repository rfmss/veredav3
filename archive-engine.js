(function archiveEngine(global) {
  const DOCUMENT_TYPES = ["manuscrito", "pesquisa", "personagem", "cena", "mundo", "cronologia", "glossário"];

  const META_TEMPLATES = {
    personagem: {
      description: "Ser vivo no projeto - nome, desejo, conflito e arco mínimo.",
      fields: [
        { key: "nome", label: "Nome", hint: "Como é chamado no texto", type: "string" },
        { key: "papel", label: "Papel", hint: "Protagonista, antagonista, coadjuvante...", type: "string" },
        { key: "desejo", label: "O que quer", hint: "Objetivo consciente, motor da ação", type: "string" },
        { key: "conflito", label: "O que impede", hint: "Obstáculo central, interno ou externo", type: "string" },
        { key: "arco", label: "Como muda", hint: "Transformação ao longo da narrativa", type: "string" },
        { key: "voz", label: "Voz", hint: "Modo de falar, tom, vocabulário característico", type: "string" },
        { key: "segredo", label: "Segredo", hint: "O que esconde - do mundo ou de si mesmo", type: "string" },
        { key: "relações", label: "Relações", hint: "IDs de outros personagens ligados a este", type: "array" },
      ],
    },
    cena: {
      description: "Unidade dramática - onde, quem, o quê e para quê.",
      fields: [
        { key: "capítulo", label: "Capítulo", hint: "Título ou número do capítulo pai", type: "string" },
        { key: "lugar", label: "Lugar", hint: "ID de um documento tipo mundo", type: "ref" },
        { key: "personagens", label: "Personagens", hint: "IDs dos personagens presentes", type: "array" },
        { key: "objetivo", label: "Objetivo dramático", hint: "O que a cena precisa resolver ou avançar", type: "string" },
        { key: "clima", label: "Clima emocional", hint: "Tensão, leveza, medo, esperança...", type: "string" },
        { key: "pov", label: "Ponto de vista", hint: "Quem narra ou focaliza", type: "string" },
      ],
    },
    mundo: {
      description: "Espaço construído - regras, sociedade e tensão central.",
      fields: [
        { key: "lugar", label: "Nome do lugar", hint: "Como aparece no texto", type: "string" },
        { key: "regra", label: "Regra fundamental", hint: "O que este mundo permite ou proíbe que o nosso não", type: "string" },
        { key: "sociedade", label: "Sociedade", hint: "Como o poder está organizado", type: "string" },
        { key: "tecnologia", label: "Tecnologia", hint: "Nível e forma - magia, ficção científica, realismo", type: "string" },
        { key: "tensão", label: "Tensão central", hint: "O conflito estrutural que permeia o cenário", type: "string" },
        { key: "geografia", label: "Geografia", hint: "Forma física - ilha, órbita, subsolo, metrópole", type: "string" },
      ],
    },
    cronologia: {
      description: "Evento situado no tempo - antes, depois, consequência.",
      fields: [
        { key: "data", label: "Data / época", hint: "Pode ser relativa: ano 3 da Queda", type: "string" },
        { key: "evento", label: "Evento", hint: "O que aconteceu - uma frase", type: "string" },
        { key: "antes", label: "O que causou", hint: "Evento ou condição anterior", type: "string" },
        { key: "depois", label: "Consequência", hint: "O que este evento desencadeou", type: "string" },
        { key: "personagens", label: "Envolvidos", hint: "IDs de personagens ligados ao evento", type: "array" },
      ],
    },
    glossário: {
      description: "Termo do mundo - definição, origem e uso.",
      fields: [
        { key: "termo", label: "Termo", hint: "A palavra ou expressão", type: "string" },
        { key: "definição", label: "Definição", hint: "O que significa neste mundo", type: "string" },
        { key: "origem", label: "Origem", hint: "De onde vem - língua, cultura, evento", type: "string" },
        { key: "uso", label: "Exemplo de uso", hint: "Trecho mostrando o termo em contexto", type: "string" },
      ],
    },
    pesquisa: {
      description: "Fonte externa absorvida pelo projeto.",
      fields: [
        { key: "fonte", label: "Fonte", hint: "Livro, artigo, entrevista, link", type: "string" },
        { key: "tema", label: "Tema", hint: "Assunto central desta pesquisa", type: "string" },
        { key: "trecho", label: "Trecho / dado", hint: "O que vale guardar - citação ou resumo", type: "string" },
        { key: "uso", label: "Como usar", hint: "Em que parte do projeto isto entra", type: "string" },
      ],
    },
    manuscrito: {
      description: "Texto principal - sem meta estruturado além do type.",
      fields: [],
    },
  };

  const DEFAULT_METADATA = {
    type: "manuscrito",
    kind: "Rascunho",
    status: "Em escrita",
    chapter: "Primeira cena",
    progress: 0,
    description: "Sem descrição ainda.",
    tags: [],
    pinned: false,
  };

  function normalizeManuscript(manuscript) {
    const type = normalizeType(manuscript.type);

    return {
      ...manuscript,
      type,
      kind: manuscript.kind || DEFAULT_METADATA.kind,
      status: manuscript.status || inferStatus(manuscript.kind),
      chapter: manuscript.chapter || DEFAULT_METADATA.chapter,
      progress: normalizeProgress(manuscript.progress),
      description: manuscript.description || createDescription(manuscript.text),
      tags: normalizeTags(manuscript.tags),
      pinned: Boolean(manuscript.pinned),
      meta: normalizeMeta(type, manuscript.meta),
    };
  }

  function normalizeManuscripts(manuscripts) {
    return manuscripts.map(normalizeManuscript);
  }

  function createManuscript({ id, title, text, ...metadata }) {
    const createdAt = metadata.createdAt || new Date().toISOString();

    return normalizeManuscript({
      id,
      title,
      text,
      kind: metadata.kind || DEFAULT_METADATA.kind,
      type: normalizeType(metadata.type),
      status: metadata.status || DEFAULT_METADATA.status,
      chapter: metadata.chapter || DEFAULT_METADATA.chapter,
      progress: metadata.progress ?? DEFAULT_METADATA.progress,
      description: metadata.description || DEFAULT_METADATA.description,
      tags: normalizeTags(metadata.tags),
      pinned: Boolean(metadata.pinned),
      templateId: metadata.templateId,
      meta: metadata.meta,
      createdAt,
      updatedAt: new Date().toISOString(),
    });
  }

  function updateMetadata(manuscript, metadata) {
    return normalizeManuscript({
      ...manuscript,
      ...metadata,
      type: normalizeType(metadata.type ?? manuscript.type),
      progress: normalizeProgress(metadata.progress),
      tags: normalizeTags(metadata.tags),
      pinned: metadata.pinned ?? manuscript.pinned,
      meta: metadata.meta ?? manuscript.meta,
      updatedAt: new Date().toISOString(),
    });
  }

  function defaultMeta(type) {
    const template = getMetaTemplate(type);

    return template.fields.reduce((meta, field) => {
      meta[field.key] = field.type === "array" ? [] : "";
      return meta;
    }, {});
  }

  function getMetaTemplate(type) {
    return META_TEMPLATES[normalizeType(type)] || META_TEMPLATES.manuscrito;
  }

  function normalizeMeta(type, value) {
    const defaults = defaultMeta(type);
    const source = value && typeof value === "object" && !Array.isArray(value) ? value : {};

    return Object.keys(defaults).reduce((meta, key) => {
      const defaultValue = defaults[key];
      const nextValue = source[key];

      if (Array.isArray(defaultValue)) {
        meta[key] = Array.isArray(nextValue) ? [...nextValue] : [];
        return meta;
      }

      meta[key] = typeof nextValue === "string" ? nextValue : defaultValue;
      return meta;
    }, {});
  }

  function createDescription(text = "") {
    const cleanText = text.replace(/\s+/g, " ").trim();
    return cleanText ? truncate(cleanText, 120) : DEFAULT_METADATA.description;
  }

  function inferStatus(kind = "") {
    if (kind.toLowerCase().includes("andamento")) {
      return "Em escrita";
    }

    return DEFAULT_METADATA.status;
  }

  function normalizeProgress(value) {
    const numberValue = Number(value);

    if (Number.isNaN(numberValue)) {
      return DEFAULT_METADATA.progress;
    }

    return Math.min(100, Math.max(0, Math.round(numberValue)));
  }

  function normalizeType(value) {
    return DOCUMENT_TYPES.includes(value) ? value : DEFAULT_METADATA.type;
  }

  function normalizeTags(value) {
    const rawTags = Array.isArray(value) ? value : String(value || "").split(",");

    return [...new Set(
      rawTags
        .map((tag) => tag.trim())
        .filter(Boolean)
    )].slice(0, 12);
  }

  function truncate(value, limit) {
    return value.length > limit ? `${value.slice(0, limit - 3)}...` : value;
  }

  global.VeredaArchive = {
    createManuscript,
    DOCUMENT_TYPES,
    defaultMeta,
    getMetaTemplate,
    META_TEMPLATES,
    normalizeManuscript,
    normalizeManuscripts,
    normalizeMeta,
    updateMetadata,
  };
})(window);
