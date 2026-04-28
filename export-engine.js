(function exportEngine(global) {
  function createTextExport(manuscript) {
    return [
      manuscript.title,
      "",
      `Tipo: ${manuscript.kind}`,
      `Status: ${manuscript.status}`,
      `Marco atual: ${manuscript.chapter}`,
      `Progresso: ${manuscript.progress}%`,
      `Tags: ${formatTags(manuscript.tags)}`,
      "",
      manuscript.description,
      "",
      "---",
      "",
      manuscript.text,
      "",
    ].join("\n");
  }

  function createMarkdownExport(manuscript) {
    return [
      `# ${manuscript.title}`,
      "",
      `> ${manuscript.description}`,
      "",
      "- Tipo: " + manuscript.kind,
      "- Status: " + manuscript.status,
      "- Marco atual: " + manuscript.chapter,
      "- Progresso: " + manuscript.progress + "%",
      "- Tags: " + formatTags(manuscript.tags),
      "",
      "---",
      "",
      normalizeMarkdownBody(manuscript.text),
      "",
    ].join("\n");
  }

  function exportManuscript(manuscript, format) {
    const exporters = {
      txt: {
        extension: "txt",
        mimeType: "text/plain;charset=utf-8",
        content: createTextExport,
      },
      md: {
        extension: "md",
        mimeType: "text/markdown;charset=utf-8",
        content: createMarkdownExport,
      },
    };

    const exporter = exporters[format];

    if (!exporter) {
      throw new Error("Formato de exportação indisponível.");
    }

    return {
      content: exporter.content(manuscript),
      filename: `${slugify(manuscript.title)}.${exporter.extension}`,
      mimeType: exporter.mimeType,
    };
  }

  function normalizeMarkdownBody(text) {
    return text
      .split(/\n{2,}/)
      .map((paragraph) => paragraph.trim())
      .filter(Boolean)
      .join("\n\n");
  }

  function formatTags(tags = []) {
    return Array.isArray(tags) && tags.length ? tags.join(", ") : "Sem tags";
  }

  function slugify(value) {
    return value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || "manuscrito";
  }

  global.VeredaExport = {
    exportManuscript,
  };
})(window);
