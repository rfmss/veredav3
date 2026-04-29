(function archiveEngine(global) {
  const DOCUMENT_TYPES = ["manuscrito", "pesquisa", "personagem", "cena", "mundo", "cronologia", "glossário"];

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
    return {
      ...manuscript,
      type: normalizeType(manuscript.type),
      kind: manuscript.kind || DEFAULT_METADATA.kind,
      status: manuscript.status || inferStatus(manuscript.kind),
      chapter: manuscript.chapter || DEFAULT_METADATA.chapter,
      progress: normalizeProgress(manuscript.progress),
      description: manuscript.description || createDescription(manuscript.text),
      tags: normalizeTags(manuscript.tags),
      pinned: Boolean(manuscript.pinned),
    };
  }

  function normalizeManuscripts(manuscripts) {
    return manuscripts.map(normalizeManuscript);
  }

  function createManuscript({ id, title, text, ...metadata }) {
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
      updatedAt: new Date().toISOString(),
    });
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
    normalizeManuscript,
    normalizeManuscripts,
    updateMetadata,
  };
})(window);
