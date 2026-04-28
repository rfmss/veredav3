const STORAGE_KEY = "vereda.manuscripts.v1";

const starterManuscripts = [
  {
    id: "som-da-terra-seca",
    title: "O Som da Terra Seca",
    kind: "Romance em andamento",
    status: "Em escrita",
    chapter: "Capítulo 12",
    progress: 62,
    description: "A saga de uma família sertaneja enfrentando a maior seca do século, entrelaçada com memória, fé e resistência.",
    updatedAt: new Date().toISOString(),
    text: `O sol não nascia, ele estourava no horizonte, pintando a poeira de um laranja violento antes de assumir seu branco punitivo. Maria sentou-se na varanda, a cadeira de palha gemendo sob o peso miúdo. Olhou para o infinito rachado de barro.

— Hoje não chove — murmurou, mais por hábito do que por esperança.

O velho Tião pigarreou lá dentro, o som oco batendo nas paredes de taipa. Ele tossia terra desde a seca de oitenta e dois. O rádio de pilha chiava uma moda de viola distante, engolida pela estática e pelo silêncio opressivo que se seguia.

Não havia vento para balançar as poucas folhas da aroeira teimosa no quintal. A água da moringa já amargava, gosto de barro e espera. Era o quinto mês sem uma gota. O gado, o pouco que restava, pastava miragens na imensidão amarela.`,
  },
  {
    id: "coronel-de-pedra",
    title: "Coronel de Pedra",
    kind: "Rascunho",
    status: "Pausado",
    chapter: "Ato 1",
    progress: 14,
    description: "Uma cidade pequena acorda sob a presença de um coronel que atravessa a praça como se fosse dono da manhã.",
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString(),
    text: `A cidade acordava antes dos sinos. Primeiro vinha o rangido das portas, depois o cheiro do café passando devagar, e por fim a voz do coronel atravessando a praça como se fosse dono da manhã.`,
  },
];

const shell = document.querySelector(".app-shell");
const contentStage = document.querySelector(".content-stage");
const nav = document.querySelector("[data-nav]");
const titleInput = document.querySelector(".title-input");
const writingArea = document.querySelector(".writing-area");
const manuscriptList = document.querySelector("[data-manuscript-list]");
const projectGrid = document.querySelector("[data-project-grid]");
const countStat = document.querySelector('[data-stat="count"]');
const wpmStat = document.querySelector('[data-stat="wpm"]');
const saveStatus = document.querySelector("[data-save-status]");
const focusCount = document.querySelector("[data-focus-count]");
const focusSettingControls = document.querySelectorAll("[data-focus-setting]");
const rulerToggle = document.querySelector('[data-action="toggle-ruler"]');
const lexicalTitle = document.querySelector("[data-lexical-title]");
const lexicalContext = document.querySelector("[data-lexical-context]");
const lexicalCard = document.querySelector("[data-lexical-card]");
const offlineStatus = document.querySelector("[data-offline-status]");
const installButton = document.querySelector('[data-action="install-app"]');
const proofIntegrity = document.querySelector("[data-proof-integrity]");
const proofStatus = document.querySelector("[data-proof-status]");
const proofOrganic = document.querySelector("[data-proof-organic]");
const proofRejected = document.querySelector("[data-proof-rejected]");
const proofCadence = document.querySelector("[data-proof-cadence]");
const proofSessionName = document.querySelector("[data-proof-session-name]");
const proofTimeline = document.querySelector("[data-proof-timeline]");
const backupInput = document.querySelector("[data-backup-input]");
const metadataForm = document.querySelector("[data-metadata-form]");
const metadataFields = document.querySelectorAll("[data-metadata-field]");
const progressReadout = document.querySelector("[data-progress-readout]");
const versionList = document.querySelector("[data-version-list]");
const archiveFilterBar = document.querySelector("[data-archive-filter-bar]");
const archiveSearch = document.querySelector("[data-archive-search]");
const archiveSort = document.querySelector("[data-archive-sort]");
const pinnedDocuments = document.querySelector("[data-pinned-documents]");
const ongoingDocuments = document.querySelector("[data-ongoing-documents]");
const recentDocuments = document.querySelector("[data-recent-documents]");
const craftTabs = document.querySelector("[data-craft-tabs]");
const templateTabs = document.querySelector("[data-template-tabs]");
const templateStudio = document.querySelector(".template-studio");
const templateSearch = document.querySelector("[data-template-search]");
const templateScreen = document.querySelector("[data-template-screen]");
const templateStepLabel = document.querySelector("[data-template-step-label]");
const editorSplit = document.querySelector(".editor-split");
const referenceTitle = document.querySelector("[data-reference-title]");
const referenceTabs = document.querySelector("[data-reference-tabs]");
const referenceBody = document.querySelector("[data-reference-body]");
const precisionCard = document.querySelector("[data-precision-card]");
const templateResizer = document.querySelector("[data-template-resizer]");
const templatePanelToggles = document.querySelectorAll("[data-template-panel-toggle]");
const createNoteOverlay = document.querySelector("[data-create-note-overlay]");

let state = loadState();
let saveTimer;
let deferredInstallPrompt;
let templateState = {
  activeId: "roteiro-tv",
  step: 0,
  craftId: "roteiro",
  query: "",
};

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return {
      activeId: starterManuscripts[0].id,
      manuscripts: starterManuscripts,
      focus: getDefaultFocusSettings(),
      lexical: getDefaultLexicalState(),
      template: getDefaultTemplateState(),
      archive: getDefaultArchiveState(),
      proofs: {},
      versions: {},
    };
  }

  try {
    const parsed = JSON.parse(saved);

    if (!Array.isArray(parsed.manuscripts) || parsed.manuscripts.length === 0) {
      throw new Error("Invalid manuscript payload");
    }

    return {
      ...parsed,
      manuscripts: VeredaArchive.normalizeManuscripts(parsed.manuscripts),
      focus: {
        ...getDefaultFocusSettings(),
        ...parsed.focus,
      },
      lexical: {
        ...getDefaultLexicalState(),
        ...parsed.lexical,
      },
      template: {
        ...getDefaultTemplateState(),
        ...parsed.template,
      },
      archive: {
        ...getDefaultArchiveState(),
        ...parsed.archive,
      },
      layout: {
        ...getDefaultLayoutState(),
        ...parsed.layout,
      },
      proofs: parsed.proofs || {},
      versions: parsed.versions || {},
    };
  } catch {
    return {
      activeId: starterManuscripts[0].id,
      manuscripts: starterManuscripts,
      focus: getDefaultFocusSettings(),
      lexical: getDefaultLexicalState(),
      template: getDefaultTemplateState(),
      archive: getDefaultArchiveState(),
      layout: getDefaultLayoutState(),
      proofs: {},
      versions: {},
    };
  }
}

function getDefaultFocusSettings() {
  return {
    fontSize: 19,
    width: 720,
    ruler: false,
  };
}

function getDefaultLexicalState() {
  return {
    selectedWord: "terra",
  };
}

function getDefaultTemplateState() {
  return {
    selectedId: "flash-fiction",
    side: "left",
    width: 340,
    open: true,
  };
}

function getDefaultArchiveState() {
  return {
    filter: "all",
    search: "",
    sort: "updated",
  };
}

function getDefaultLayoutState() {
  return {
    leftCollapsed: false,
    rightCollapsed: false,
  };
}

function persistState(status = "Salvo localmente") {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  saveStatus.textContent = status;
  saveStatus.dataset.motion = "pulse";
  window.setTimeout(() => {
    saveStatus.dataset.motion = "";
  }, 700);
}

function getActiveManuscript() {
  return state.manuscripts.find((manuscript) => manuscript.id === state.activeId) || state.manuscripts[0];
}

function updateActiveManuscript(nextManuscript) {
  state.manuscripts = state.manuscripts.map((manuscript) =>
    manuscript.id === nextManuscript.id ? nextManuscript : manuscript
  );
}

function getActiveProofRecord() {
  const manuscript = getActiveManuscript();
  const record = VeredaProof.createRecord(state.proofs[manuscript.id]);
  state.proofs[manuscript.id] = record;
  return record;
}

function getActiveProofSession() {
  return VeredaProof.getActiveSession(getActiveProofRecord());
}

function setView(viewName) {
  shell.dataset.view = viewName;
  exitFocusMode();
  nav.classList.remove("is-open");

  document.querySelectorAll("[data-view-panel]").forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.viewPanel === viewName);
  });

  document.querySelectorAll("[data-view-target]").forEach((control) => {
    control.classList.toggle("is-active", control.dataset.viewTarget === viewName);
  });
}

function applyPanelLayout() {
  shell.classList.toggle("is-left-collapsed", Boolean(state.layout.leftCollapsed));
  shell.classList.toggle("is-right-collapsed", Boolean(state.layout.rightCollapsed));

  document.querySelectorAll('[data-action="toggle-left-panel"]').forEach((control) => {
    const collapsed = Boolean(state.layout.leftCollapsed);
    control.setAttribute("aria-expanded", String(!collapsed));
    control.title = collapsed ? "Abrir hierarquia" : "Ocultar hierarquia";
  });

  document.querySelectorAll('[data-action="toggle-right-panel"]').forEach((control) => {
    const collapsed = Boolean(state.layout.rightCollapsed);
    control.setAttribute("aria-expanded", String(!collapsed));
    control.title = collapsed ? "Abrir análise linguística" : "Ocultar análise linguística";
  });
}

function togglePanel(side) {
  if (side === "left") {
    state.layout.leftCollapsed = !state.layout.leftCollapsed;
  }

  if (side === "right") {
    state.layout.rightCollapsed = !state.layout.rightCollapsed;
  }

  applyPanelLayout();
  persistState(side === "left" ? "Hierarquia ajustada" : "Análise linguística ajustada");
}

function enterFocusMode() {
  setView("editor");
  shell.classList.add("is-focus");
  applyFocusSettings();
  writingArea.focus();
}

function exitFocusMode() {
  shell.classList.remove("is-focus");
}

function toggleRuler() {
  state.focus.ruler = !state.focus.ruler;
  applyFocusSettings();
  persistState("Preferências de foco salvas");
}

function updateFocusSetting(name, value) {
  state.focus[name] = Number(value);
  applyFocusSettings();
  persistState("Preferências de foco salvas");
}

function applyFocusSettings() {
  shell.style.setProperty("--focus-width", `${state.focus.width}px`);
  shell.style.setProperty("--reading-size", `${state.focus.fontSize}px`);
  shell.classList.toggle("has-ruler", state.focus.ruler);
  rulerToggle.classList.toggle("is-active", state.focus.ruler);
  rulerToggle.setAttribute("aria-pressed", String(state.focus.ruler));

  focusSettingControls.forEach((control) => {
    control.value = state.focus[control.dataset.focusSetting];
  });
}

function applyTemplateLayout() {
  editorSplit.dataset.templateSide = state.template.side;
  editorSplit.style.setProperty("--template-panel-width", `${state.template.width}px`);
  editorSplit.classList.toggle("is-template-collapsed", !state.template.open);

  templatePanelToggles.forEach((toggle) => {
    const isHeaderToggle = toggle.closest(".template-reference-header");
    const label = state.template.open ? "Ocultar guia de escrita" : "Mostrar guia de escrita";
    toggle.setAttribute("aria-expanded", String(state.template.open));
    toggle.setAttribute("aria-label", label);
    toggle.title = state.template.open ? "Ocultar guia" : "Mostrar guia";

    const icon = toggle.querySelector(".material-symbols-outlined");
    if (icon) {
      icon.textContent = isHeaderToggle && state.template.open ? "left_panel_close" : "view_sidebar";
    }
  });
}

function registerOfflineApp() {
  updateConnectionStatus();

  if (!("serviceWorker" in navigator)) {
    offlineStatus.innerHTML = '<span class="material-symbols-outlined">cloud_off</span>Uso sem internet indisponível';
    return;
  }

  navigator.serviceWorker
    .register("./service-worker.js")
    .then(() => {
      offlineStatus.innerHTML = '<span class="material-symbols-outlined">cloud_done</span>Pronto sem internet';
    })
    .catch(() => {
      offlineStatus.innerHTML = '<span class="material-symbols-outlined">sync_problem</span>Modo sem internet pendente';
    });
}

function updateConnectionStatus() {
  if (!offlineStatus) {
    return;
  }

  const label = navigator.onLine ? "Pronto sem internet" : "Sem rede";
  const icon = navigator.onLine ? "cloud_done" : "cloud_off";
  offlineStatus.innerHTML = `<span class="material-symbols-outlined">${icon}</span>${label}`;
}

async function installApp() {
  if (!deferredInstallPrompt) {
    return;
  }

  deferredInstallPrompt.prompt();
  const choice = await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  installButton.hidden = true;

  if (choice.outcome === "accepted") {
    saveStatus.textContent = "Vereda instalado";
  }
}

function setActiveManuscript(id) {
  state.activeId = id;
  renderActiveManuscript();
  renderManuscriptNavigation();
  renderProjectGrid();
  renderMetadataForm();
  renderProofView();
  renderVersionList();
  persistState("Manuscrito aberto");
  setView("editor");
}

function selectArchiveManuscript(id) {
  state.activeId = id;
  renderManuscriptNavigation();
  renderProjectGrid();
  renderMetadataForm();
  renderProofView();
  renderVersionList();
  persistState("Projeto selecionado");
}

function renderActiveManuscript() {
  const manuscript = getActiveManuscript();
  titleInput.value = manuscript.title;
  writingArea.innerText = manuscript.text;
  updateWritingPlaceholder();
  updateWritingStats();
  renderLexicalView();
  renderTemplateReference();
  renderMetadataForm();
  renderProofView();
  ensureInitialVersion(manuscript);
  renderVersionList();
}

function renderManuscriptNavigation() {
  manuscriptList.innerHTML = state.manuscripts
    .map((manuscript) => {
      const isCurrent = manuscript.id === state.activeId ? " is-current" : "";

      return `
        <button class="tree-row manuscript-row${isCurrent}" data-manuscript-id="${manuscript.id}">
          <span class="material-symbols-outlined">description</span>
          ${escapeHtml(manuscript.title)}
        </button>
      `;
    })
    .join("");
}

function renderProjectGrid() {
  renderArchiveFilters();
  archiveSearch.value = state.archive.search;
  archiveSort.value = state.archive.sort;
  const searchQuery = normalizeSearch(state.archive.search);

  const filteredManuscripts = state.manuscripts.filter((manuscript) => {
    const matchesType = state.archive.filter === "all" || getArchiveType(manuscript).id === state.archive.filter;
    const matchesSearch = !searchQuery || createSearchText(manuscript).includes(searchQuery);
    return matchesType && matchesSearch;
  });
  const sortedManuscripts = sortArchiveManuscripts(filteredManuscripts);

  renderPinnedDocuments(filteredManuscripts);
  renderOngoingDocuments(filteredManuscripts);
  renderRecentDocuments(filteredManuscripts);

  if (!sortedManuscripts.length) {
    const message = searchQuery ? "Nenhum documento encontrado" : "Nada aqui ainda";
    const description = searchQuery
      ? "Tente buscar por outro termo ou limpe a busca para ver o acervo."
      : "Crie uma nova nota ou mude o filtro para ver outros documentos.";

    projectGrid.innerHTML = `
      <div class="archive-empty">
        <span class="material-symbols-outlined">inventory_2</span>
        <strong>${message}</strong>
        <p>${description}</p>
      </div>
    `;
    return;
  }

  projectGrid.innerHTML = sortedManuscripts
    .map((manuscript, index) => {
      const words = countWords(manuscript.text);
      const featured = index === 0 ? " featured" : "";
      const selected = manuscript.id === state.activeId ? " is-selected" : "";
      const type = getArchiveType(manuscript);
      const tags = createTagMarkup(manuscript.tags);
      const pinned = manuscript.pinned ? " is-pinned" : "";
      const pinLabel = manuscript.pinned ? "Desafixar documento" : "Fixar documento";

      return `
        <article class="project-card${featured}${selected}${pinned}" data-archive-select="${manuscript.id}" data-document-type="${type.id}" role="button" tabindex="0">
          <span class="project-pin material-symbols-outlined" data-archive-pin="${manuscript.id}" role="button" tabindex="0" aria-label="${pinLabel}" title="${pinLabel}">push_pin</span>
          <span class="project-type"><i class="material-symbols-outlined">${type.icon}</i>${escapeHtml(type.label)} · ${escapeHtml(manuscript.status)}</span>
          <h2>${escapeHtml(manuscript.title)}</h2>
          <p>${escapeHtml(manuscript.description || createExcerpt(manuscript.text))}</p>
          ${tags}
          <div class="project-progress" aria-label="Progresso de ${escapeHtml(manuscript.title)}">
            <i style="--progress: ${manuscript.progress}%"></i>
          </div>
          <small>${escapeHtml(manuscript.chapter)} · ${manuscript.progress}% · ${words} palavras · ${formatUpdatedAt(manuscript.updatedAt)}</small>
          <div class="project-actions" aria-label="Ações de ${escapeHtml(manuscript.title)}">
            <button type="button" data-archive-quick="open" data-archive-document="${manuscript.id}" title="Abrir no editor" aria-label="Abrir ${escapeHtml(manuscript.title)} no editor">
              <span class="material-symbols-outlined">edit_note</span>
            </button>
            <button type="button" data-archive-quick="export" data-archive-format="txt" data-archive-document="${manuscript.id}" title="Exportar TXT" aria-label="Exportar ${escapeHtml(manuscript.title)} em TXT">
              TXT
            </button>
            <button type="button" data-archive-quick="export" data-archive-format="md" data-archive-document="${manuscript.id}" title="Exportar MD" aria-label="Exportar ${escapeHtml(manuscript.title)} em Markdown">
              MD
            </button>
            <button type="button" data-archive-quick="duplicate" data-archive-document="${manuscript.id}" title="Duplicar" aria-label="Duplicar ${escapeHtml(manuscript.title)}">
              <span class="material-symbols-outlined">content_copy</span>
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderPinnedDocuments(manuscripts) {
  const pinnedItems = sortArchiveManuscripts(manuscripts.filter((manuscript) => manuscript.pinned)).slice(0, 6);

  if (!pinnedItems.length) {
    pinnedDocuments.hidden = true;
    pinnedDocuments.innerHTML = "";
    return;
  }

  pinnedDocuments.hidden = false;
  pinnedDocuments.innerHTML = `
    <div class="archive-strip-heading">
      <div>
        <p class="eyebrow">Fixados</p>
        <h2>Na mesa agora</h2>
      </div>
      <span>${pinnedItems.length} ${pinnedItems.length === 1 ? "documento" : "documentos"}</span>
    </div>
    <div class="archive-strip-list">
      ${pinnedItems.map((manuscript) => createCompactDocumentMarkup(manuscript, "pinned-document")).join("")}
    </div>
  `;
}

function renderOngoingDocuments(manuscripts) {
  const ongoingItems = sortArchiveManuscripts(
    manuscripts.filter((manuscript) => ["Em escrita", "Revisão"].includes(manuscript.status))
  ).slice(0, 6);

  if (!ongoingItems.length) {
    ongoingDocuments.hidden = true;
    ongoingDocuments.innerHTML = "";
    return;
  }

  ongoingDocuments.hidden = false;
  ongoingDocuments.innerHTML = `
    <div class="archive-strip-heading">
      <div>
        <p class="eyebrow">Em andamento</p>
        <h2>Pedem atenção</h2>
      </div>
      <span>${ongoingItems.length} ${ongoingItems.length === 1 ? "documento" : "documentos"}</span>
    </div>
    <div class="archive-strip-list">
      ${ongoingItems
        .map((manuscript) => createCompactDocumentMarkup(manuscript, "ongoing-document", `${manuscript.status} · ${manuscript.progress}%`))
        .join("")}
    </div>
  `;
}

function renderRecentDocuments(manuscripts) {
  const recentItems = [...manuscripts]
    .sort((a, b) => getUpdatedTime(b.updatedAt) - getUpdatedTime(a.updatedAt))
    .slice(0, 4);

  if (!recentItems.length) {
    recentDocuments.hidden = true;
    recentDocuments.innerHTML = "";
    return;
  }

  recentDocuments.hidden = false;
  recentDocuments.innerHTML = `
    <div class="archive-strip-heading">
      <div>
        <p class="eyebrow">Recentes</p>
        <h2>Continue de onde parou</h2>
      </div>
      <span>${recentItems.length} ${recentItems.length === 1 ? "documento" : "documentos"}</span>
    </div>
    <div class="archive-strip-list">
      ${recentItems.map((manuscript) => createCompactDocumentMarkup(manuscript, "recent-document")).join("")}
    </div>
  `;
}

function createCompactDocumentMarkup(manuscript, className, metaLabel) {
  const type = getArchiveType(manuscript);
  const selected = manuscript.id === state.activeId ? " is-selected" : "";
  const pinned = manuscript.pinned ? " is-pinned" : "";
  const pinLabel = manuscript.pinned ? "Desafixar documento" : "Fixar documento";
  const meta = metaLabel || `${type.label} · ${formatUpdatedAt(manuscript.updatedAt)}`;

  return `
    <button class="${className}${selected}${pinned}" type="button" data-archive-select="${manuscript.id}">
      <span class="material-symbols-outlined">${type.icon}</span>
      <strong>${escapeHtml(manuscript.title)}</strong>
      <small>${escapeHtml(meta)}</small>
      <i class="material-symbols-outlined" data-archive-pin="${manuscript.id}" role="button" tabindex="0" aria-label="${pinLabel}" title="${pinLabel}">push_pin</i>
    </button>
  `;
}

function sortArchiveManuscripts(manuscripts) {
  const sortMode = state.archive.sort || "updated";
  return [...manuscripts].sort((a, b) => {
    if (sortMode === "title") {
      return a.title.localeCompare(b.title, "pt-BR");
    }

    if (sortMode === "progress") {
      return Number(b.progress || 0) - Number(a.progress || 0) || a.title.localeCompare(b.title, "pt-BR");
    }

    if (sortMode === "type") {
      return getArchiveType(a).label.localeCompare(getArchiveType(b).label, "pt-BR") || a.title.localeCompare(b.title, "pt-BR");
    }

    return getUpdatedTime(b.updatedAt) - getUpdatedTime(a.updatedAt);
  });
}

function createTagMarkup(tags = []) {
  if (!tags.length) {
    return "";
  }

  return `
    <div class="tag-list">
      ${tags.slice(0, 4).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
    </div>
  `;
}

function renderArchiveFilters() {
  const counts = getArchiveTypeCounts();
  const filters = [
    ["all", "Todos", "inventory_2"],
    ["quick-note", "Notas rápidas", "bolt"],
    ["blank", "Manuscritos", "description"],
    ["template", "Guias", "view_sidebar"],
  ];

  archiveFilterBar.innerHTML = filters
    .map(([id, label, icon]) => {
      const isActive = state.archive.filter === id ? " is-active" : "";
      const count = id === "all" ? state.manuscripts.length : counts[id] || 0;

      return `
        <button class="archive-filter${isActive}" data-archive-filter="${id}">
          <span class="material-symbols-outlined">${icon}</span>
          ${label}
          <b>${count}</b>
        </button>
      `;
    })
    .join("");
}

function getArchiveTypeCounts() {
  return state.manuscripts.reduce((counts, manuscript) => {
    const type = getArchiveType(manuscript);
    counts[type.id] = (counts[type.id] || 0) + 1;
    return counts;
  }, {});
}

function getArchiveType(manuscript) {
  if (manuscript.templateId) {
    return {
      id: "template",
      label: "Guia",
      icon: "view_sidebar",
    };
  }

  if (manuscript.kind === "Nota rápida" || manuscript.id?.startsWith("nota-")) {
    return {
      id: "quick-note",
      label: "Nota rápida",
      icon: "bolt",
    };
  }

  return {
    id: "blank",
    label: "Manuscrito",
    icon: "description",
  };
}

function setArchiveFilter(filter) {
  state.archive.filter = filter;
  renderProjectGrid();
  persistState("Filtro do arquivo aplicado");
}

function setArchiveSearch(value) {
  state.archive.search = value;
  renderProjectGrid();
  persistState("Busca do arquivo aplicada");
}

function setArchiveSort(value) {
  state.archive.sort = value;
  renderProjectGrid();
  persistState("Ordenação do arquivo aplicada");
}

function togglePinnedManuscript(id) {
  const manuscript = state.manuscripts.find((item) => item.id === id);

  if (!manuscript) {
    return;
  }

  const nextManuscript = VeredaArchive.updateMetadata(manuscript, {
    pinned: !manuscript.pinned,
  });

  updateActiveManuscript(nextManuscript);
  renderProjectGrid();
  renderMetadataForm();
  queueSave();
}

function openArchiveManuscript(id) {
  state.activeId = id;
  renderActiveManuscript();
  renderManuscriptNavigation();
  renderProjectGrid();
  renderMetadataForm();
  persistState("Manuscrito aberto");
  setView("editor");
  writingArea.focus();
}

function exportArchiveManuscript(id, format) {
  const manuscript = state.manuscripts.find((item) => item.id === id);

  if (!manuscript) {
    saveStatus.textContent = "Documento não encontrado";
    return;
  }

  try {
    const exportFile = VeredaExport.exportManuscript(manuscript, format);
    downloadFile(exportFile.content, exportFile.filename, exportFile.mimeType);
    saveStatus.textContent = `${manuscript.title} exportado em .${format}`;
  } catch (error) {
    saveStatus.textContent = error.message;
  }
}

function duplicateManuscript(id) {
  const manuscript = state.manuscripts.find((item) => item.id === id);

  if (!manuscript) {
    saveStatus.textContent = "Documento não encontrado";
    return;
  }

  const duplicate = VeredaArchive.createManuscript({
    id: `copia-${Date.now()}`,
    title: `Cópia de ${manuscript.title}`,
    text: manuscript.text,
    kind: manuscript.kind,
    status: manuscript.status,
    chapter: manuscript.chapter,
    progress: manuscript.progress,
    description: manuscript.description,
    tags: manuscript.tags,
    templateId: manuscript.templateId,
  });

  state.manuscripts.unshift(duplicate);
  state.activeId = duplicate.id;
  renderActiveManuscript();
  renderManuscriptNavigation();
  renderProjectGrid();
  renderMetadataForm();
  persistState("Documento duplicado");
  setView("arquivo");
}

function createSearchText(manuscript) {
  const type = getArchiveType(manuscript);
  return normalizeSearch(
    [manuscript.title, manuscript.kind, manuscript.status, manuscript.chapter, manuscript.description, manuscript.text, type.label, ...(manuscript.tags || [])]
      .filter(Boolean)
      .join(" ")
  );
}

function normalizeSearch(value = "") {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function renderMetadataForm() {
  const manuscript = getActiveManuscript();

  metadataFields.forEach((field) => {
    const value = manuscript[field.dataset.metadataField] ?? "";
    field.value = Array.isArray(value) ? value.join(", ") : value;
  });

  progressReadout.textContent = `${manuscript.progress || 0}%`;
}

function updateCurrentManuscript() {
  const manuscript = getActiveManuscript();
  const nextManuscript = {
    ...manuscript,
    title: titleInput.value.trim() || "Manuscrito sem título",
    text: writingArea.innerText.trim(),
    updatedAt: new Date().toISOString(),
  };

  updateActiveManuscript(nextManuscript);

  updateWritingStats();
  renderLexicalView();
  renderTemplateReference();
  renderMetadataForm();
  renderManuscriptNavigation();
  renderProjectGrid();
  maybeCreateAutoVersion(nextManuscript);
  queueSave();
}

function updateCurrentMetadata() {
  const manuscript = getActiveManuscript();
  const activeMetadataField = document.activeElement?.dataset?.metadataField;
  const formData = new FormData(metadataForm);
  const nextManuscript = VeredaArchive.updateMetadata(manuscript, {
    kind: formData.get("kind"),
    status: formData.get("status"),
    chapter: formData.get("chapter"),
    progress: formData.get("progress"),
    tags: formData.get("tags"),
    description: formData.get("description"),
  });

  updateActiveManuscript(nextManuscript);
  renderManuscriptNavigation();
  renderProjectGrid();
  if (activeMetadataField !== "tags" && activeMetadataField !== "description" && activeMetadataField !== "kind" && activeMetadataField !== "chapter") {
    renderMetadataForm();
  } else {
    progressReadout.textContent = `${nextManuscript.progress || 0}%`;
  }
  maybeCreateAutoVersion(nextManuscript);
  queueSave();
}

function queueSave() {
  saveStatus.textContent = "Salvando...";
  window.clearTimeout(saveTimer);
  saveTimer = window.setTimeout(() => persistState(), 450);
}

function openCreateNote() {
  createNoteOverlay.hidden = false;
}

function closeCreateNote() {
  createNoteOverlay.hidden = true;
}

function addManuscript(manuscript, status) {
  state.manuscripts.unshift(manuscript);
  state.activeId = manuscript.id;
  renderActiveManuscript();
  renderManuscriptNavigation();
  renderProjectGrid();
  renderMetadataForm();
  closeCreateNote();
  persistState(status);
  setView("editor");
  titleInput.focus();
  titleInput.select();
}

function createQuickNote() {
  const nextNumber = state.manuscripts.length + 1;
  const manuscript = VeredaArchive.createManuscript({
    id: `nota-${Date.now()}`,
    title: `Nota rápida ${nextNumber}`,
    text: "",
    kind: "Nota rápida",
    chapter: "Captura",
    description: "Ideia solta, cena breve ou lembrete de escrita.",
  });

  addManuscript(manuscript, "Nota rápida criada");
}

function createBlankManuscript() {
  const nextNumber = state.manuscripts.length + 1;
  const manuscript = VeredaArchive.createManuscript({
    id: `manuscrito-${Date.now()}`,
    title: `Novo Manuscrito ${nextNumber}`,
    text: "Comece aqui. A primeira frase abre uma vereda.",
    kind: "Manuscrito em branco",
    chapter: "Primeira página",
    description: "Documento livre para escrita longa.",
  });

  addManuscript(manuscript, "Manuscrito em branco criado");
}

function createManuscriptFromTemplate(templateId) {
  const templateManuscript = VeredaTemplates.createManuscript(templateId, {
    id: `manuscrito-${Date.now()}`,
  });
  const manuscript = VeredaArchive.createManuscript(templateManuscript);

  addManuscript(manuscript, "Guia aplicado");
}

function createFromReferenceTemplate() {
  createManuscriptFromTemplate(state.template.selectedId);
}

function ensureInitialVersion(manuscript) {
  if (VeredaVersions.getVersionsForManuscript(state.versions, manuscript.id).length > 0) {
    return;
  }

  const result = VeredaVersions.addSnapshot(state.versions, manuscript, "Primeira versão local");
  state.versions = result.versions;
}

function maybeCreateAutoVersion(manuscript) {
  if (!VeredaVersions.shouldCreateAutoSnapshot(state.versions, manuscript)) {
    return;
  }

  const result = VeredaVersions.addSnapshot(state.versions, manuscript, "Auto-save relevante");
  state.versions = result.versions;
  renderVersionList();
}

function createManualVersion() {
  const manuscript = getActiveManuscript();
  const result = VeredaVersions.addSnapshot(state.versions, manuscript, "Versão manual");
  state.versions = result.versions;
  renderVersionList();
  persistState("Versão criada");
}

function restoreVersion(versionId) {
  const manuscript = getActiveManuscript();
  const snapshot = VeredaVersions.getVersionsForManuscript(state.versions, manuscript.id).find(
    (version) => version.id === versionId
  );

  if (!snapshot) {
    return;
  }

  const restoredManuscript = VeredaVersions.restoreSnapshot(manuscript, snapshot);
  updateActiveManuscript(restoredManuscript);
  renderActiveManuscript();
  renderManuscriptNavigation();
  renderProjectGrid();
  renderMetadataForm();
  renderLexicalView();
  renderProofView();
  renderTemplateReference();
  renderVersionList();
  persistState("Versão restaurada");
}

function recordWritingProof(event) {
  if (event.isComposing || event.ctrlKey || event.metaKey || event.altKey) {
    return;
  }

  const manuscript = getActiveManuscript();
  state.proofs[manuscript.id] = VeredaProof.recordKeyEvent(getActiveProofRecord(), event);
  renderProofView();
  queueSave();
}

function captureSelectedWord(allowCollapsedSelection = false) {
  const selection = window.getSelection();

  if (!selection || selection.rangeCount === 0 || !writingArea.contains(selection.anchorNode)) {
    return;
  }

  if (selection.isCollapsed && !allowCollapsedSelection) {
    return;
  }

  const selectedText = selection.toString().trim();
  const word = selectedText || findWordNearSelection(selection);
  const cleanWord = cleanSelectedWord(word);

  if (!cleanWord) {
    return;
  }

  state.lexical.selectedWord = cleanWord;
  renderLexicalView();
  persistState("Termo lexical selecionado");
}

function findWordNearSelection(selection) {
  const node = selection.anchorNode;
  const text = node?.textContent || "";
  let start = selection.anchorOffset;
  let end = selection.anchorOffset;

  while (start > 0 && /[\p{L}]/u.test(text[start - 1])) {
    start -= 1;
  }

  while (end < text.length && /[\p{L}]/u.test(text[end])) {
    end += 1;
  }

  return text.slice(start, end);
}

function cleanSelectedWord(value) {
  return value
    .split(/\s+/)[0]
    ?.replace(/[^\p{L}-]/gu, "")
    .trim();
}

function renderLexicalView() {
  const manuscript = getActiveManuscript();
  const analysis = VeredaLexical.analyze(state.lexical.selectedWord, manuscript.text);

  lexicalTitle.textContent = manuscript.title;
  lexicalContext.innerHTML = VeredaLexical.createHighlightedContext(manuscript.text, analysis.word, escapeHtml);
  lexicalCard.innerHTML = `
    <span class="material-symbols-outlined">dictionary</span>
    <h2>${escapeHtml(analysis.displayWord)}</h2>
    <p class="tag">${escapeHtml(analysis.className)}</p>
    <p>${escapeHtml(analysis.note)}</p>
    <dl>
      <div><dt>Função provável</dt><dd>${escapeHtml(analysis.functionName)}</dd></div>
      <div><dt>Campo</dt><dd>${escapeHtml(analysis.field)}</dd></div>
      <div><dt>Ocorrências</dt><dd>${analysis.count}</dd></div>
      <div><dt>Origem</dt><dd>Motor local</dd></div>
    </dl>
    <p class="lexical-disclaimer">Classificação aproximada por regras locais. Sem IA, sem envio de texto.</p>
  `;
}

function renderProofView() {
  const session = getActiveProofSession();
  const summary = VeredaProof.summarize(session);
  const recentEvents = session.events.slice(-4).reverse();

  proofSessionName.textContent = session.name;
  proofIntegrity.textContent = `${summary.integrity}%`;
  proofStatus.textContent = summary.status;
  proofOrganic.textContent = summary.organicEvents;
  proofRejected.textContent = `${summary.rejectedEvents} descartados`;
  proofCadence.textContent = `${summary.cadenceWpm} WPM`;

  if (!recentEvents.length) {
    proofTimeline.innerHTML = "<div><span></span><p>Aguardando eventos confiáveis do editor.</p></div>";
    return;
  }

  proofTimeline.innerHTML = recentEvents
    .map((event) => {
      const time = formatTimeWithSeconds(event.at);
      const status = event.organic ? "evento orgânico" : "evento descartado";
      const interval = event.interval === null ? "início da sessão" : `${event.interval}ms`;

      return `<div><span></span><p>${time} - ${status} (${event.keyType}, ${interval})</p></div>`;
    })
    .join("");
}

function startNewProofSession() {
  const manuscript = getActiveManuscript();
  state.proofs[manuscript.id] = VeredaProof.startSession(getActiveProofRecord());
  renderProofView();
  persistState("Nova sessão de autoria");
}

function renderVersionList() {
  const manuscript = getActiveManuscript();
  const versions = VeredaVersions.getVersionsForManuscript(state.versions, manuscript.id);

  if (!versions.length) {
    versionList.innerHTML = '<p class="muted">Nenhuma versão salva ainda.</p>';
    return;
  }

  versionList.innerHTML = versions
    .map((version) => {
      const createdAt = new Date(version.createdAt).toLocaleString("pt-BR", {
        day: "2-digit",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
      });

      return `
        <article class="version-item">
          <div>
            <strong>${escapeHtml(version.reason)}</strong>
            <span>${createdAt} · ${version.wordCount} palavras</span>
          </div>
          <button class="secondary-button" data-version-restore="${version.id}">Restaurar</button>
        </article>
      `;
    })
    .join("");
}

function renderTemplateStudio() {
  const activeTemplate = VeredaTemplates.getTemplate(templateState.activeId);
  templateState.craftId = templateState.craftId || activeTemplate.oficio || "ficcao";
  const crafts = VeredaTemplates.listOficios();
  const query = normalizeSearch(templateState.query);
  const sourceTemplates = query ? VeredaTemplates.listTemplates() : VeredaTemplates.listTemplates({ oficio: templateState.craftId });
  const templates = query
    ? sourceTemplates.filter((template) => normalizeSearch(`${template.label} ${template.title} ${template.description} ${template.oficio}`).includes(query))
    : sourceTemplates;
  const activeStep = VeredaTemplates.getStep(templateState.activeId, templateState.step);

  templateSearch.value = templateState.query;

  craftTabs.innerHTML = crafts
    .map((craft) => {
      const isActive = craft.id === templateState.craftId ? " is-active" : "";

      return `
        <button class="craft-tab${isActive}" data-craft-select="${craft.id}">
          <span class="material-symbols-outlined">${craft.icon}</span>
          ${escapeHtml(craft.label)}
          <b>${craft.count}</b>
        </button>
      `;
    })
    .join("");

  templateTabs.innerHTML = templates.length
    ? templates
        .map((template) => {
          const isActive = template.id === activeTemplate.id ? " is-active" : "";

          return `
            <button class="template-tab${isActive}" data-template-select="${template.id}">
              <span class="material-symbols-outlined">${template.icon}</span>
              ${escapeHtml(template.label)}
            </button>
          `;
        })
        .join("")
    : `<p class="template-empty">Nenhum guia encontrado para "${escapeHtml(templateState.query)}".</p>`;

  templateStepLabel.textContent = `tela ${activeStep.index + 1} de ${activeStep.total}`;
  templateScreen.innerHTML = createTemplateStepMarkup(activeTemplate, activeStep);
}

function createTemplateStepMarkup(template, step) {
  const dots = Array.from({ length: step.total }, (_, index) => `<i${index === step.index ? ' class="is-active"' : ""}></i>`).join("");
  const items = Array.isArray(step.items) && step.items.length ? createTemplateItemsMarkup(step.items) : "";
  const tip = step.tip ? `<p class="template-tip">${escapeHtml(step.tip)}</p>` : "";
  const secondary = step.secondary ? `<button class="template-secondary" data-template-next>${escapeHtml(step.secondary)}</button>` : "";
  const isLastStep = step.index === step.total - 1;
  const primaryAction = isLastStep ? `data-template-use="${template.id}"` : "data-template-next";

  return `
    <div class="template-dots">${dots}</div>
    <div class="template-icon">
      <span class="material-symbols-outlined">${template.icon}</span>
    </div>
    <p class="template-eyebrow">${escapeHtml(step.eyebrow)}</p>
    <h3>${escapeHtml(step.title)}</h3>
    <p>${escapeHtml(step.body)}</p>
    ${tip}
    ${items}
    <button class="template-primary" ${primaryAction}>${escapeHtml(step.primary)}</button>
    ${secondary}
  `;
}

function createTemplateItemsMarkup(items) {
  return `
    <div class="template-checklist">
      ${items
        .map(([title, subtitle, status]) => {
          const icon = status === "done" ? "check" : status === "info" ? "info" : status === "warn" ? "priority_high" : "";

          return `
            <div class="template-check-item" data-status="${escapeHtml(status)}">
              <span class="template-check-icon">${icon ? `<span class="material-symbols-outlined">${icon}</span>` : ""}</span>
              <div>
                <strong>${escapeHtml(title)}</strong>
                <small>${escapeHtml(subtitle)}</small>
              </div>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function selectTemplate(templateId) {
  const template = VeredaTemplates.getTemplate(templateId);
  templateState = {
    activeId: templateId,
    step: 0,
    craftId: template.oficio || templateState.craftId,
    query: templateState.query,
  };
  renderTemplateStudio();
}

function selectCraft(craftId) {
  const templates = VeredaTemplates.listTemplates({ oficio: craftId });
  const nextTemplate = templates[0];

  if (!nextTemplate) {
    return;
  }

  templateState = {
    activeId: nextTemplate.id,
    step: 0,
    craftId,
    query: "",
  };
  renderTemplateStudio();
}

function setTemplateSearch(query) {
  templateState.query = query;
  renderTemplateStudio();
}

function changeTemplateStep(direction) {
  const template = VeredaTemplates.getTemplate(templateState.activeId);
  templateState.step = Math.min(Math.max(templateState.step + direction, 0), template.steps.length - 1);
  renderTemplateStudio();
}

function updateAcademyParallax() {
  const parallaxItems = document.querySelectorAll("[data-parallax-speed]");
  const viewportMiddle = contentStage.clientHeight / 2;

  parallaxItems.forEach((item) => {
    const speed = Number(item.dataset.parallaxSpeed) || 0;
    const rect = item.getBoundingClientRect();
    const parentRect = contentStage.getBoundingClientRect();
    const relativeMiddle = rect.top - parentRect.top + rect.height / 2;
    const offset = (relativeMiddle - viewportMiddle) * speed;

    item.style.transform = `translate3d(0, ${offset}px, 0)`;
  });
}

async function exportProof() {
  const manuscript = getActiveManuscript();
  const proofDocument = await VeredaProof.createProofDocument(getActiveProofRecord(), manuscript);
  const proofJson = JSON.stringify(proofDocument, null, 2);
  downloadFile(proofJson, `${slugify(manuscript.title)}-${slugify(proofDocument.session.name)}.proof.json`, "application/json");
  saveStatus.textContent = "Prova de escrita exportada";
}

function exportBackup() {
  const backup = VeredaBackup.createBackup(state);
  const backupJson = JSON.stringify(backup, null, 2);
  const dateStamp = createDateTimeStamp();
  downloadFile(backupJson, `vereda-acervo-${dateStamp}.vrda`, "application/vnd.vereda+json");
  saveStatus.textContent = "Acervo .vrda exportado";
}

function exportCurrentManuscript(format) {
  try {
    const exportFile = VeredaExport.exportManuscript(getActiveManuscript(), format);
    downloadFile(exportFile.content, exportFile.filename, exportFile.mimeType);
    saveStatus.textContent = `Manuscrito exportado em .${format}`;
  } catch (error) {
    saveStatus.textContent = error.message;
  }
}

function requestBackupImport() {
  backupInput.value = "";
  backupInput.click();
}

async function importBackup(file) {
  if (!file) {
    return;
  }

  try {
    const backup = await VeredaBackup.readBackup(file);
    state = VeredaBackup.restoreBackup(state, backup);
    state.manuscripts = VeredaArchive.normalizeManuscripts(state.manuscripts);
    state.versions = state.versions || {};
    state.archive = {
      ...getDefaultArchiveState(),
      ...state.archive,
    };
    renderActiveManuscript();
    renderManuscriptNavigation();
    renderProjectGrid();
    renderLexicalView();
    renderProofView();
    renderVersionList();
    applyFocusSettings();
    persistState("Backup importado");
    setView("arquivo");
  } catch (error) {
    saveStatus.textContent = error.message;
  }
}

function updateWritingStats() {
  const text = writingArea.innerText.trim();
  const words = countWords(text);
  const paragraphs = text ? text.split(/\n+/).filter(Boolean).length : 0;
  const wpm = Math.max(0, Math.min(82, Math.round(words / 3)));

  countStat.textContent = `${words} palavras · ${paragraphs} parágrafos`;
  focusCount.textContent = `${words} palavras · ${paragraphs} parágrafos`;
  wpmStat.textContent = wpm;
}

function renderTemplateReference() {
  const template = VeredaTemplates.getTemplate(state.template.selectedId);
  const analysis = VeredaPrecision.analyze(template, getActiveManuscript().text);

  referenceTitle.textContent = template.label;
  updateWritingPlaceholder(template);
  referenceTabs.innerHTML = VeredaTemplates.listTemplates({ oficio: template.oficio })
    .map((item) => {
      const isActive = item.id === template.id ? " is-active" : "";

      return `
        <button class="reference-tab${isActive}" data-reference-template="${item.id}">
          <span class="material-symbols-outlined">${item.icon}</span>
          ${escapeHtml(item.label)}
        </button>
      `;
    })
    .join("");

  precisionCard.innerHTML = createPrecisionMarkup(analysis);
  referenceBody.innerHTML = createReferenceMarkup(template);
}

function createPrecisionMarkup(analysis) {
  return `
    <div class="precision-top">
      <span>Aderência à forma</span>
      <strong>${analysis.score}%</strong>
    </div>
    <div class="precision-meter" aria-label="Aderência à forma">
      <i style="--score: ${analysis.score}%"></i>
    </div>
    <p>${escapeHtml(analysis.status)} · ${analysis.words}${analysis.limit ? `/${analysis.limit}` : ""} palavras</p>
    <div class="precision-checks">
      ${analysis.checks
        .map(
          (check) => `
            <div class="precision-check${check.passed ? " is-passed" : ""}">
              <span class="material-symbols-outlined">${check.passed ? "check_circle" : "radio_button_unchecked"}</span>
              <div>
                <strong>${escapeHtml(check.label)} <b>${check.score}%</b></strong>
                <small>${escapeHtml(check.hint)}</small>
              </div>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function createReferenceMarkup(template) {
  const guidance = template.guidance || { meta: [], sections: [], reminders: [] };
  const model = template.model ? createModelMarkup(template.model) : "";

  return `
    ${model}
    <section>
      <h3>Dados do formato</h3>
      <div class="reference-pills">
        ${guidance.meta.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
      </div>
    </section>
    <section>
      <h3>Estrutura para consultar</h3>
      <div class="reference-sections">
        ${guidance.sections
          .map(
            ([title, description]) => `
              <article>
                <strong>${escapeHtml(title)}</strong>
                <p>${escapeHtml(description)}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
    <section>
      <h3>Lembretes de corte</h3>
      <ul>
        ${guidance.reminders.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </section>
  `;
}

function createModelMarkup(model) {
  return `
    <section class="reference-model">
      <h3>Texto-modelo</h3>
      <article>
        <strong>${escapeHtml(model.exemplar)}</strong>
        <p>${escapeHtml(model.why)}</p>
        <div class="reference-example">${escapeHtml(model.placeholder)}</div>
        <small>Referências: ${model.references.map(escapeHtml).join(", ")}.</small>
      </article>
    </section>
  `;
}

function updateWritingPlaceholder(template = VeredaTemplates.getTemplate(state.template.selectedId)) {
  writingArea.dataset.placeholder = template.model?.placeholder || "Comece aqui. A primeira frase abre uma vereda.";
}

function selectReferenceTemplate(templateId) {
  state.template.selectedId = templateId;
  renderTemplateReference();
  persistState("Guia de escrita selecionado");
}

function toggleTemplateSide() {
  state.template.side = state.template.side === "left" ? "right" : "left";
  state.template.open = true;
  applyTemplateLayout();
  persistState("Lado do guia ajustado");
}

function toggleTemplatePanel() {
  state.template.open = !state.template.open;
  applyTemplateLayout();
  persistState(state.template.open ? "Guia de escrita aberto" : "Guia de escrita oculto");
}

function updateTemplateWidth(clientX) {
  const bounds = editorSplit.getBoundingClientRect();
  const rawWidth =
    state.template.side === "left" ? clientX - bounds.left : bounds.right - clientX;
  state.template.width = Math.min(520, Math.max(260, Math.round(rawWidth)));
  applyTemplateLayout();
}

function countWords(text) {
  return text.trim() ? text.trim().split(/\s+/).length : 0;
}

function createExcerpt(text) {
  const cleanText = text.replace(/\s+/g, " ").trim();
  return cleanText.length > 118 ? `${cleanText.slice(0, 118)}...` : cleanText;
}

function formatUpdatedAt(value) {
  const updatedAt = new Date(value);
  const diffMs = Date.now() - updatedAt.getTime();
  const diffMinutes = Math.max(0, Math.round(diffMs / 60000));

  if (diffMinutes < 1) {
    return "agora";
  }

  if (diffMinutes < 60) {
    return `há ${diffMinutes} min`;
  }

  const diffHours = Math.round(diffMinutes / 60);

  if (diffHours < 48) {
    return `há ${diffHours}h`;
  }

  return updatedAt.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" });
}

function getUpdatedTime(value) {
  const time = new Date(value).getTime();
  return Number.isNaN(time) ? 0 : time;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeSearch(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "manuscrito";
}

function createDateTimeStamp() {
  const now = new Date();
  const date = now.toISOString().slice(0, 10);
  const time = [now.getHours(), now.getMinutes(), now.getSeconds()]
    .map((value) => String(value).padStart(2, "0"))
    .join("-");

  return `${date}-${time}`;
}

function formatTimeWithSeconds(value) {
  return new Date(value).toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function downloadFile(content, filename, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

document.addEventListener("click", (event) => {
  const manuscriptTarget = event.target.closest("[data-manuscript-id]");
  const viewTarget = event.target.closest("[data-view-target]");
  const actionTarget = event.target.closest("[data-action]");
  const archivePinTarget = event.target.closest("[data-archive-pin]");
  const archiveQuickTarget = event.target.closest("[data-archive-quick]");

  if (manuscriptTarget) {
    event.preventDefault();
    setActiveManuscript(manuscriptTarget.dataset.manuscriptId);
    return;
  }

  if (archivePinTarget) {
    event.preventDefault();
    event.stopPropagation();
    togglePinnedManuscript(archivePinTarget.dataset.archivePin);
    return;
  }

  if (archiveQuickTarget) {
    event.preventDefault();
    event.stopPropagation();

    const action = archiveQuickTarget.dataset.archiveQuick;
    const id = archiveQuickTarget.dataset.archiveDocument;

    if (action === "open") {
      openArchiveManuscript(id);
    }

    if (action === "export") {
      exportArchiveManuscript(id, archiveQuickTarget.dataset.archiveFormat);
    }

    if (action === "duplicate") {
      duplicateManuscript(id);
    }

    return;
  }

  const archiveTarget = event.target.closest("[data-archive-select]");

  if (archiveTarget) {
    event.preventDefault();
    selectArchiveManuscript(archiveTarget.dataset.archiveSelect);
    return;
  }

  const versionTarget = event.target.closest("[data-version-restore]");
  const templateSelectTarget = event.target.closest("[data-template-select]");
  const templateUseTarget = event.target.closest("[data-template-use]");
  const templateNextTarget = event.target.closest("[data-template-next]");
  const templatePrevTarget = event.target.closest("[data-template-prev]");
  const craftSelectTarget = event.target.closest("[data-craft-select]");
  const referenceTemplateTarget = event.target.closest("[data-reference-template]");
  const archiveFilterTarget = event.target.closest("[data-archive-filter]");

  if (versionTarget) {
    event.preventDefault();
    restoreVersion(versionTarget.dataset.versionRestore);
    return;
  }

  if (templateSelectTarget) {
    event.preventDefault();
    selectTemplate(templateSelectTarget.dataset.templateSelect);
    return;
  }

  if (templateUseTarget) {
    event.preventDefault();
    createManuscriptFromTemplate(templateUseTarget.dataset.templateUse);
    return;
  }

  if (templateNextTarget) {
    event.preventDefault();
    changeTemplateStep(1);
    return;
  }

  if (templatePrevTarget) {
    event.preventDefault();
    changeTemplateStep(-1);
    return;
  }

  if (craftSelectTarget) {
    event.preventDefault();
    selectCraft(craftSelectTarget.dataset.craftSelect);
    if (craftSelectTarget.closest(".academy-board")) {
      templateStudio.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    return;
  }

  if (referenceTemplateTarget) {
    event.preventDefault();
    selectReferenceTemplate(referenceTemplateTarget.dataset.referenceTemplate);
    return;
  }

  if (archiveFilterTarget) {
    event.preventDefault();
    setArchiveFilter(archiveFilterTarget.dataset.archiveFilter);
    return;
  }

  if (viewTarget) {
    event.preventDefault();
    setView(viewTarget.dataset.viewTarget);
  }

  if (!actionTarget) {
    return;
  }

  if (actionTarget.dataset.action === "toggle-focus") {
    if (shell.classList.contains("is-focus")) {
      exitFocusMode();
    } else {
      enterFocusMode();
    }
  }

  if (actionTarget.dataset.action === "exit-focus") {
    exitFocusMode();
  }

  if (actionTarget.dataset.action === "toggle-ruler") {
    toggleRuler();
  }

  if (actionTarget.dataset.action === "toggle-template-side") {
    toggleTemplateSide();
  }

  if (actionTarget.dataset.action === "toggle-template-panel") {
    toggleTemplatePanel();
  }

  if (actionTarget.dataset.action === "toggle-left-panel") {
    togglePanel("left");
  }

  if (actionTarget.dataset.action === "toggle-right-panel") {
    togglePanel("right");
  }

  if (actionTarget.dataset.action === "open-create-note") {
    openCreateNote();
  }

  if (actionTarget.dataset.action === "close-create-note") {
    closeCreateNote();
  }

  if (actionTarget.dataset.action === "toggle-nav") {
    nav.classList.toggle("is-open");
  }

  if (actionTarget.dataset.action === "create-quick-note") {
    createQuickNote();
  }

  if (actionTarget.dataset.action === "create-blank-manuscript") {
    createBlankManuscript();
  }

  if (actionTarget.dataset.action === "create-from-reference-template") {
    createFromReferenceTemplate();
  }

  if (actionTarget.dataset.action === "install-app") {
    installApp();
  }

  if (actionTarget.dataset.action === "export-proof") {
    exportProof();
  }

  if (actionTarget.dataset.action === "new-proof-session") {
    startNewProofSession();
  }

  if (actionTarget.dataset.action === "export-backup") {
    exportBackup();
  }

  if (actionTarget.dataset.action === "export-manuscript") {
    exportCurrentManuscript(actionTarget.dataset.exportFormat);
  }

  if (actionTarget.dataset.action === "import-backup") {
    requestBackupImport();
  }

  if (actionTarget.dataset.action === "open-active-manuscript") {
    setView("editor");
    writingArea.focus();
  }

  if (actionTarget.dataset.action === "create-version") {
    createManualVersion();
  }
});

document.addEventListener("keydown", (event) => {
  const archivePinTarget = event.target.closest("[data-archive-pin]");
  const archiveCardTarget = event.target.closest(".project-card[data-archive-select]");

  if (archivePinTarget && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    togglePinnedManuscript(archivePinTarget.dataset.archivePin);
    return;
  }

  if (archiveCardTarget && (event.key === "Enter" || event.key === " ")) {
    if (event.target.closest("button, [data-archive-pin]")) {
      return;
    }

    event.preventDefault();
    selectArchiveManuscript(archiveCardTarget.dataset.archiveSelect);
    return;
  }

  if (event.key === "Escape" && shell.classList.contains("is-focus")) {
    exitFocusMode();
  }

  if (event.key === "Escape" && !createNoteOverlay.hidden) {
    closeCreateNote();
  }
});

createNoteOverlay.addEventListener("click", (event) => {
  if (event.target === createNoteOverlay) {
    closeCreateNote();
  }
});

document.addEventListener("pointermove", (event) => {
  if (shell.classList.contains("is-focus") && state.focus.ruler) {
    shell.style.setProperty("--ruler-y", `${event.clientY}px`);
  }
});

templateResizer.addEventListener("pointerdown", (event) => {
  event.preventDefault();
  templateResizer.setPointerCapture(event.pointerId);
  editorSplit.classList.add("is-resizing");
});

templateResizer.addEventListener("pointermove", (event) => {
  if (!editorSplit.classList.contains("is-resizing")) {
    return;
  }

  updateTemplateWidth(event.clientX);
});

templateResizer.addEventListener("pointerup", (event) => {
  if (!editorSplit.classList.contains("is-resizing")) {
    return;
  }

  templateResizer.releasePointerCapture(event.pointerId);
  editorSplit.classList.remove("is-resizing");
  persistState("Largura do guia ajustada");
});

focusSettingControls.forEach((control) => {
  control.addEventListener("input", () => {
    updateFocusSetting(control.dataset.focusSetting, control.value);
  });
});

window.addEventListener("online", updateConnectionStatus);
window.addEventListener("offline", updateConnectionStatus);
contentStage.addEventListener("scroll", () => requestAnimationFrame(updateAcademyParallax));

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  installButton.hidden = false;
});

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  installButton.hidden = true;
  saveStatus.textContent = "Vereda instalado";
});

titleInput.addEventListener("input", updateCurrentManuscript);
writingArea.addEventListener("input", updateCurrentManuscript);
writingArea.addEventListener("keydown", recordWritingProof);
writingArea.addEventListener("mouseup", () => captureSelectedWord(true));
writingArea.addEventListener("keyup", () => captureSelectedWord(false));
backupInput.addEventListener("change", () => importBackup(backupInput.files[0]));
metadataForm.addEventListener("input", updateCurrentMetadata);
metadataForm.addEventListener("focusout", renderMetadataForm);
archiveSearch.addEventListener("input", () => setArchiveSearch(archiveSearch.value));
archiveSort.addEventListener("change", () => setArchiveSort(archiveSort.value));
templateSearch.addEventListener("input", () => setTemplateSearch(templateSearch.value));

renderActiveManuscript();
renderManuscriptNavigation();
renderProjectGrid();
renderMetadataForm();
renderLexicalView();
renderProofView();
renderVersionList();
renderTemplateStudio();
updateAcademyParallax();
applyTemplateLayout();
applyPanelLayout();
applyFocusSettings();
registerOfflineApp();
persistState("Pronto para escrever");
