(function archiveEngine(global) {
  const DEFAULT_METADATA = {
    kind: "Rascunho",
    status: "Em escrita",
    chapter: "Primeira cena",
    progress: 0,
    description: "Sem descrição ainda.",
  };

  function normalizeManuscript(manuscript) {
    return {
      ...manuscript,
      kind: manuscript.kind || DEFAULT_METADATA.kind,
      status: manuscript.status || inferStatus(manuscript.kind),
      chapter: manuscript.chapter || DEFAULT_METADATA.chapter,
      progress: normalizeProgress(manuscript.progress),
      description: manuscript.description || createDescription(manuscript.text),
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
      status: metadata.status || DEFAULT_METADATA.status,
      chapter: metadata.chapter || DEFAULT_METADATA.chapter,
      progress: metadata.progress ?? DEFAULT_METADATA.progress,
      description: metadata.description || DEFAULT_METADATA.description,
      templateId: metadata.templateId,
      updatedAt: new Date().toISOString(),
    });
  }

  function updateMetadata(manuscript, metadata) {
    return normalizeManuscript({
      ...manuscript,
      ...metadata,
      progress: normalizeProgress(metadata.progress),
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

  function truncate(value, limit) {
    return value.length > limit ? `${value.slice(0, limit - 3)}...` : value;
  }

  global.VeredaArchive = {
    createManuscript,
    normalizeManuscript,
    normalizeManuscripts,
    updateMetadata,
  };
})(window);
