const STORAGE_KEY = "vereda.manuscripts.v1";
const CHECKLIST_STORAGE_KEY = "vereda.checklists.v1";
const BACKUP_META_STORAGE_KEY = "vereda.backup-meta.v1";
const BACKUP_WARNING_DAYS = 7;
const VIEW_ROUTES = new Set(["editor", "biblioteca", "autoria", "arquivo", "academia"]);

const starterManuscripts = [
  {
    id: "som-da-terra-seca",
    title: "O Som da Terra Seca",
    type: "manuscrito",
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
    type: "manuscrito",
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
const backupWarning = document.querySelector("[data-backup-warning]");
const backupWarningCopy = document.querySelector("[data-backup-warning-copy]");
const filesystemBackup = document.querySelector("[data-filesystem-backup]");
const filesystemBackupStatus = document.querySelector("[data-filesystem-backup-status]");
const filesystemBackupDetail = document.querySelector("[data-filesystem-backup-detail]");
const filesystemBackupInterval = document.querySelector("[data-filesystem-backup-interval]");
const filesystemBackupIntervalLabel = document.querySelector("[data-filesystem-backup-interval-label]");
const filesystemBackupSaveButton = document.querySelector('[data-action="save-filesystem-backup"]');
const filesystemBackupStopButton = document.querySelector('[data-action="stop-filesystem-backup"]');
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
const createNoteTypes = document.querySelector("[data-create-note-types]");
const voiceInput = document.querySelector("[data-voice-input]");
const voiceCount = document.querySelector("[data-voice-count]");
const voiceResult = document.querySelector("[data-voice-result]");
const decolonialSearch = document.querySelector("[data-decolonial-search]");
const decolonialFilters = document.querySelector("[data-decolonial-filters]");
const decolonialCount = document.querySelector("[data-decolonial-count]");
const decolonialList = document.querySelector("[data-decolonial-list]");
const decolonialObserverToggle = document.querySelector("[data-decolonial-observer-toggle]");
const decolonialObserver = document.querySelector("[data-decolonial-observer]");
const decolonialObserverSummary = document.querySelector("[data-decolonial-observer-summary]");
const decolonialObserverList = document.querySelector("[data-decolonial-observer-list]");
const rightsLab = document.querySelector("[data-rights-lab]");
const rightsSearch = document.querySelector("[data-rights-search]");
const rightsCards = document.querySelector("[data-rights-cards]");
const rightsSources = document.querySelector("[data-rights-sources]");
const topbarSearch = document.querySelector("[data-topbar-search]");
const globalSearchInput = document.querySelector("[data-global-search-input]");
const globalSearchResults = document.querySelector("[data-global-search-results]");
const themePicker = document.querySelector("[data-theme-picker]");
const themeButton = document.querySelector("[data-action='toggle-theme-menu']");
const themeMenu = document.querySelector("[data-theme-menu]");
const themeOptions = document.querySelector("[data-theme-options]");
const themeName = document.querySelector("[data-theme-name]");
const themeNoteTitle = document.querySelector("[data-theme-note-title]");
const themeNoteText = document.querySelector("[data-theme-note-text]");

const colorThemes = [
  {
    id: "vereda",
    label: "Vereda",
    swatch: ["#fdfcfb", "#2e4d43", "#a85d2a"],
    noteTitle: "Paleta Vereda",
    note:
      "Papel claro, verde profundo e acentos terrosos. É a base calma: feita para leitura longa, revisão cuidadosa e escrita sem ruído.",
  },
  {
    id: "cerrado",
    label: "Cerrado",
    swatch: ["#f5edd2", "#c68b2e", "#3d3219"],
    noteTitle: "Cerrado",
    note:
      "Terra seca, capim-dourado, ipê e areia clara. Uma paleta de resistência luminosa: pouca ornamentação, muito calor e precisão.",
  },
  {
    id: "mata",
    label: "Mata",
    swatch: ["#f5f0e8", "#1a4533", "#e8a060"],
    noteTitle: "Mata Atlântica",
    note:
      "Verde de sombra, musgo, bruma e flor-de-laranjeira. Pensada para lembrar que a escrita também precisa de umidade, pausa e profundidade.",
  },
  {
    id: "amazonia",
    label: "Amazônia",
    swatch: ["#faf6f0", "#3b2068", "#c45b7e"],
    noteTitle: "Amazônia e Várzea",
    note:
      "Rio negro, névoa, argila quente e boto-rosa. Uma paleta para textos de imaginação larga, contraste forte e presença sensorial.",
  },
  {
    id: "cerrado-dark",
    label: "Cerrado escuro",
    swatch: ["#1c1a14", "#dfb84a", "#8f4e2f"],
    noteTitle: "Cerrado escuro",
    note:
      "A mesma terra em luz baixa: noite do cerrado, dourado contido e contraste de fogueira. Boa para escrever com foco e pouca claridade.",
  },
  {
    id: "mata-dark",
    label: "Mata escura",
    swatch: ["#0d1f18", "#8eb79a", "#d88b70"],
    noteTitle: "Mata escura",
    note:
      "Sombra vegetal, verde fechado e acento de flor. Um modo noturno para quem quer concentração sem abandonar a textura brasileira.",
  },
  {
    id: "amazonia-dark",
    label: "Amazônia escura",
    swatch: ["#1a0f2e", "#9fb8aa", "#d2766b"],
    noteTitle: "Amazônia escura",
    note:
      "Rio profundo, entardecer roxo e argila acesa. Feita para escrita noturna, atmosférica, com cor suficiente para não virar tela genérica.",
  },
];

const documentTypes = [
  { id: "projeto", label: "Projeto", icon: "workspaces", kind: "Projeto", chapter: "Visão geral" },
  { id: "manuscrito", label: "Manuscrito", icon: "description", kind: "Manuscrito em branco", chapter: "Primeira página" },
  { id: "pesquisa", label: "Pesquisa", icon: "travel_explore", kind: "Pesquisa", chapter: "Referências" },
  { id: "glossário", label: "Glossário", icon: "dictionary", kind: "Glossário", chapter: "Termos" },
  { id: "submissão", label: "Submissão", icon: "outbox", kind: "Submissão", chapter: "Envio editorial" },
  { id: "revisão", label: "Revisão", icon: "rate_review", kind: "Revisão", chapter: "Processo editorial" },
  { id: "personagem", label: "Personagem", icon: "person_edit", kind: "Personagem", chapter: "Ficha" },
  { id: "cena", label: "Cena", icon: "movie_edit", kind: "Cena", chapter: "Rascunho de cena" },
  { id: "mundo", label: "Mundo", icon: "public", kind: "Mundo", chapter: "Worldbuilding" },
  { id: "lugar", label: "Lugar", icon: "location_on", kind: "Lugar", chapter: "Espaço" },
  { id: "instituição", label: "Instituição", icon: "account_balance", kind: "Instituição", chapter: "Grupo de poder" },
  { id: "objeto", label: "Objeto", icon: "category", kind: "Objeto", chapter: "Item narrativo" },
  { id: "cronologia", label: "Cronologia", icon: "timeline", kind: "Cronologia", chapter: "Linha do tempo" },
  { id: "capítulo", label: "Capítulo", icon: "view_agenda", kind: "Capítulo", chapter: "Estrutura" },
  { id: "tema", label: "Tema", icon: "psychology", kind: "Tema", chapter: "Intenção autoral" },
  { id: "escaleta", label: "Escaleta", icon: "format_list_numbered", kind: "Escaleta", chapter: "Roteiro" },
  { id: "cena-roteiro", label: "Cena de roteiro", icon: "theaters", kind: "Cena de roteiro", chapter: "Roteiro" },
  { id: "ato", label: "Ato", icon: "view_timeline", kind: "Ato", chapter: "Roteiro" },
  { id: "personagem-roteiro", label: "Personagem de roteiro", icon: "co_present", kind: "Personagem de roteiro", chapter: "Roteiro" },
  { id: "pauta", label: "Pauta", icon: "newspaper", kind: "Pauta", chapter: "Jornalismo" },
  { id: "fonte", label: "Fonte", icon: "contact_mail", kind: "Fonte jornalística", chapter: "Apuração" },
  { id: "entrevista", label: "Entrevista", icon: "record_voice_over", kind: "Entrevista", chapter: "Apuração" },
  { id: "fato", label: "Fato", icon: "fact_check", kind: "Fato", chapter: "Verificação" },
  { id: "poema", label: "Poema", icon: "format_quote", kind: "Poema", chapter: "Poesia" },
  { id: "série-poética", label: "Série poética", icon: "library_books", kind: "Série poética", chapter: "Poesia" },
  { id: "argumento", label: "Argumento", icon: "schema", kind: "Argumento", chapter: "Ensaio" },
  { id: "crônica", label: "Crônica", icon: "stylus_note", kind: "Crônica", chapter: "Crônica" },
];

let state = loadState();
let checklistState = loadChecklistState();
let backupMeta = loadBackupMeta();
let saveTimer;
let filesystemBackupHandle = null;
let filesystemBackupTimer = null;
let filesystemBackupIntervalSeconds = 15;
let filesystemBackupCount = 0;
let deferredInstallPrompt;
let createNoteType = "manuscrito";
let decolonialState = {
  category: "all",
  query: "",
  observerEnabled: false,
};
let rightsState = {
  query: "",
};
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
      appearance: {
        ...getDefaultAppearanceState(),
        ...parsed.appearance,
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
      appearance: getDefaultAppearanceState(),
      proofs: {},
      versions: {},
    };
  }
}

function loadChecklistState() {
  try {
    const saved = localStorage.getItem(CHECKLIST_STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : {};
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

function loadBackupMeta() {
  try {
    const saved = localStorage.getItem(BACKUP_META_STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : {};
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
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

function getDefaultAppearanceState() {
  return {
    theme: "vereda",
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

function persistChecklistState(status = "Checklist atualizado") {
  localStorage.setItem(CHECKLIST_STORAGE_KEY, JSON.stringify(checklistState));
  saveStatus.textContent = status;
}

function persistBackupMeta() {
  localStorage.setItem(BACKUP_META_STORAGE_KEY, JSON.stringify(backupMeta));
}

function getActiveManuscript() {
  return state.manuscripts.find((manuscript) => manuscript.id === state.activeId) || state.manuscripts[0];
}

function isManuscriptDocument(manuscript = getActiveManuscript()) {
  return (manuscript.type || "manuscrito") === "manuscrito";
}

function updateActiveManuscript(nextManuscript) {
  state.manuscripts = state.manuscripts.map((manuscript) =>
    manuscript.id === nextManuscript.id ? nextManuscript : manuscript
  );
}

function getActiveProofRecord() {
  const manuscript = getActiveManuscript();

  if (!isManuscriptDocument(manuscript)) {
    return null;
  }

  const record = VeredaProof.createRecord(state.proofs[manuscript.id]);
  state.proofs[manuscript.id] = record;
  return record;
}

function getActiveProofSession() {
  const record = getActiveProofRecord();
  return record ? VeredaProof.getActiveSession(record) : null;
}

function getViewFromRoute() {
  const route = window.location.hash.replace(/^#\/?/, "");
  return VIEW_ROUTES.has(route) ? route : "editor";
}

function updateRouteForView(viewName, mode = "push") {
  const nextHash = `#${viewName}`;

  if (window.location.hash === nextHash) {
    return;
  }

  if (mode === "replace") {
    window.history.replaceState(null, "", nextHash);
    return;
  }

  window.history.pushState(null, "", nextHash);
}

function setView(viewName, options = {}) {
  if (!VIEW_ROUTES.has(viewName)) {
    return;
  }

  shell.dataset.view = viewName;
  exitFocusMode();
  nav.classList.remove("is-open");

  document.querySelectorAll("[data-view-panel]").forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.viewPanel === viewName);
  });

  document.querySelectorAll("[data-view-target]").forEach((control) => {
    control.classList.toggle("is-active", control.dataset.viewTarget === viewName);
  });

  if (options.updateRoute) {
    updateRouteForView(viewName, options.routeMode);
  }
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

function applyColorTheme() {
  const theme = colorThemes.find((item) => item.id === state.appearance.theme) || colorThemes[0];

  if (theme.id === "vereda") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.dataset.theme = theme.id;
  }

  themeName.textContent = theme.label;
  themeNoteTitle.textContent = theme.noteTitle;
  themeNoteText.textContent = theme.note;
  renderThemeOptions(theme.id);
}

function renderThemeOptions(activeThemeId) {
  themeOptions.innerHTML = colorThemes
    .map(
      (theme) => `
        <button class="theme-option" type="button" data-action="select-theme" data-theme-id="${theme.id}" aria-pressed="${theme.id === activeThemeId}">
          <span class="theme-swatch" aria-hidden="true">
            ${theme.swatch.map((color) => `<i style="background:${color}"></i>`).join("")}
          </span>
          <span>${escapeHtml(theme.label)}</span>
        </button>
      `
    )
    .join("");
}

function setThemeMenuOpen(isOpen) {
  themeMenu.classList.toggle("is-visible", isOpen);
  themeButton.setAttribute("aria-expanded", String(isOpen));
}

function toggleThemeMenu() {
  setThemeMenuOpen(!themeMenu.classList.contains("is-visible"));
}

function closeThemeMenu() {
  setThemeMenuOpen(false);
}

function selectColorTheme(themeId) {
  const nextTheme = colorThemes.find((item) => item.id === themeId);

  if (!nextTheme) {
    return;
  }

  state.appearance.theme = nextTheme.id;
  applyColorTheme();
  closeThemeMenu();
  persistState(`Paleta ${nextTheme.label} aplicada`);
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

  let refreshingAfterUpdate = false;

  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (refreshingAfterUpdate) {
      return;
    }

    refreshingAfterUpdate = true;
    window.location.reload();
  });

  navigator.serviceWorker
    .register("./service-worker.js")
    .then((registration) => {
      offlineStatus.innerHTML = '<span class="material-symbols-outlined">cloud_done</span>Pronto sem internet';
      registration.update();
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
  renderDecolonialObserver();
  renderMetadataForm();
  renderProofView();
  ensureInitialVersion(manuscript);
  renderVersionList();
}

function renderManuscriptNavigation() {
  manuscriptList.innerHTML = state.manuscripts
    .map((manuscript) => {
      const isCurrent = manuscript.id === state.activeId ? " is-current" : "";
      const type = getArchiveType(manuscript);

      return `
        <button class="tree-row manuscript-row${isCurrent}" data-manuscript-id="${manuscript.id}">
          <span class="material-symbols-outlined">${type.icon}</span>
          ${escapeHtml(manuscript.title)}
        </button>
      `;
    })
    .join("");
}

function renderProjectGrid() {
  if (!isArchiveFilterAvailable(state.archive.filter)) {
    state.archive.filter = "all";
  }

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
      const summary = VeredaArchive.docSummary(manuscript);
      const cardDescription = summary || manuscript.description || createExcerpt(manuscript.text);
      const pinned = manuscript.pinned ? " is-pinned" : "";
      const pinLabel = manuscript.pinned ? "Desafixar documento" : "Fixar documento";
      const checklistProgress = getChecklistProgress(manuscript);
      const progressLabel = checklistProgress
        ? `${checklistProgress.done}/${checklistProgress.total} critérios`
        : `${manuscript.progress}%`;
      const progressValue = checklistProgress
        ? Math.round((checklistProgress.done / Math.max(1, checklistProgress.total)) * 100)
        : manuscript.progress;

      return `
        <article class="project-card${featured}${selected}${pinned}" data-archive-select="${manuscript.id}" data-document-type="${type.id}" role="button" tabindex="0">
          <span class="project-pin material-symbols-outlined" data-archive-pin="${manuscript.id}" role="button" tabindex="0" aria-label="${pinLabel}" title="${pinLabel}">push_pin</span>
          <span class="project-type"><i class="material-symbols-outlined">${type.icon}</i>${escapeHtml(type.label)} · ${escapeHtml(manuscript.status)}</span>
          <h2>${escapeHtml(manuscript.title)}</h2>
          <p>${escapeHtml(cardDescription)}</p>
          ${tags}
          <div class="project-progress" aria-label="Progresso de ${escapeHtml(manuscript.title)}">
            <i style="--progress: ${progressValue}%"></i>
          </div>
          <small>${escapeHtml(manuscript.chapter)} · ${progressLabel} · ${words} palavras · ${formatUpdatedAt(manuscript.updatedAt)}</small>
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
  const summary = VeredaArchive.docSummary(manuscript);
  const meta = metaLabel || [type.label, summary || formatUpdatedAt(manuscript.updatedAt)].filter(Boolean).join(" · ");

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
    ...documentTypes.map((type) => [type.id, type.label, type.icon]),
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
  const id = manuscript.type || "manuscrito";
  return documentTypes.find((type) => type.id === id) || documentTypes[0];
}

function getChecklistProgress(manuscript) {
  if (!manuscript.templateId) {
    return null;
  }

  const template = VeredaTemplates.getTemplate(manuscript.templateId);
  const analysis = VeredaPrecision.analyze(template, manuscript.text || "");
  const checklist = getChecklistFor(manuscript.id, manuscript.templateId);
  const total = analysis.checks.length;
  const done = analysis.checks.filter((check) => Boolean(checklist[check.label])).length;

  return { done, total };
}

function setArchiveFilter(filter) {
  if (!isArchiveFilterAvailable(filter)) {
    return;
  }

  state.archive.filter = filter;
  renderProjectGrid();
  persistState("Filtro do arquivo aplicado");
}

function isArchiveFilterAvailable(filter) {
  return filter === "all" || documentTypes.some((type) => type.id === filter);
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

function searchAll(query) {
  const normalizedQuery = normalizeSearch(query);

  if (!normalizedQuery) {
    return [];
  }

  return state.manuscripts
    .map((manuscript) => {
      const title = manuscript.title || "";
      const text = manuscript.text || "";
      const haystack = normalizeSearch([title, text, manuscript.description, manuscript.kind, getArchiveType(manuscript).label].join(" "));

      if (!haystack.includes(normalizedQuery)) {
        return null;
      }

      return {
        id: manuscript.id,
        title,
        content: createSearchSnippet(text || manuscript.description || title, normalizedQuery),
        type: getArchiveType(manuscript).label,
        updatedAt: manuscript.updatedAt,
      };
    })
    .filter(Boolean)
    .sort((a, b) => getUpdatedTime(b.updatedAt) - getUpdatedTime(a.updatedAt))
    .slice(0, 8);
}

function createSearchSnippet(value, normalizedQuery) {
  const cleanValue = String(value || "").replace(/\s+/g, " ").trim();
  const normalizedValue = normalizeSearch(cleanValue);
  const matchIndex = normalizedValue.indexOf(normalizedQuery);
  const start = matchIndex > 40 ? Math.max(0, matchIndex - 60) : 0;
  const snippet = cleanValue.slice(start, start + 200);
  return `${start > 0 ? "... " : ""}${snippet}${cleanValue.length > start + 200 ? " ..." : ""}`;
}

function toggleGlobalSearch() {
  topbarSearch.classList.toggle("is-open");

  if (topbarSearch.classList.contains("is-open")) {
    globalSearchInput.focus();
    renderGlobalSearchResults(globalSearchInput.value);
  } else {
    closeGlobalSearch();
  }
}

function closeGlobalSearch() {
  topbarSearch.classList.remove("is-open");
  globalSearchResults.hidden = true;
}

function renderGlobalSearchResults(query) {
  const results = searchAll(query);

  if (!topbarSearch.classList.contains("is-open") || !query.trim()) {
    globalSearchResults.hidden = true;
    globalSearchResults.innerHTML = "";
    return;
  }

  globalSearchResults.hidden = false;

  if (!results.length) {
    globalSearchResults.innerHTML = `<div class="global-search-empty">Nada encontrado no acervo.</div>`;
    return;
  }

  globalSearchResults.innerHTML = results
    .map(
      (result) => `
        <button type="button" data-global-search-result="${result.id}">
          <strong>${escapeHtml(result.title)}</strong>
          <span>${escapeHtml(result.type)} · ${escapeHtml(formatUpdatedAt(result.updatedAt))}</span>
          <small>${escapeHtml(result.content)}</small>
        </button>
      `
    )
    .join("");
}

function openSearchResult(manuscriptId) {
  setActiveManuscript(manuscriptId);
  closeGlobalSearch();
  globalSearchInput.value = "";
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
    type: manuscript.type,
    meta: manuscript.meta,
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
  const metaText = Object.values(manuscript.meta || {})
    .flat()
    .filter(Boolean)
    .join(" ");

  return normalizeSearch(
    [manuscript.title, manuscript.kind, manuscript.status, manuscript.chapter, manuscript.description, manuscript.text, metaText, type.label, ...(manuscript.tags || [])]
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
  renderDecolonialObserver();
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
  renderCreateNoteTypes();
  createNoteOverlay.hidden = false;
}

function closeCreateNote() {
  createNoteOverlay.hidden = true;
}

function renderCreateNoteTypes() {
  if (!createNoteTypes) {
    return;
  }

  createNoteTypes.innerHTML = documentTypes
    .map((type) => {
      const isActive = type.id === createNoteType ? " is-active" : "";
      return `
        <button class="create-note-type${isActive}" type="button" data-create-note-type="${type.id}" aria-pressed="${type.id === createNoteType}">
          <span class="material-symbols-outlined">${type.icon}</span>
          ${escapeHtml(type.label)}
        </button>
      `;
    })
    .join("");
}

function selectCreateNoteType(typeId) {
  if (!documentTypes.some((type) => type.id === typeId)) {
    return;
  }

  createNoteType = typeId;
  renderCreateNoteTypes();
}

function getCreateNoteType() {
  return documentTypes.find((type) => type.id === createNoteType) || documentTypes[0];
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
  const type = getCreateNoteType();
  const nextNumber = state.manuscripts.length + 1;
  const manuscript = VeredaArchive.createManuscript({
    id: `nota-${Date.now()}`,
    title: `${type.label} ${nextNumber}`,
    text: "",
    type: type.id,
    kind: type.kind,
    chapter: type.chapter,
    description: type.id === "manuscrito" ? "Ideia solta, cena breve ou lembrete de escrita." : createProjectNoteDescription(type),
  });

  addManuscript(manuscript, `${type.label} criado`);
}

function createBlankManuscript() {
  const type = getCreateNoteType();
  const nextNumber = state.manuscripts.length + 1;
  const manuscript = VeredaArchive.createManuscript({
    id: `${type.id}-${Date.now()}`,
    title: type.id === "manuscrito" ? `Novo Manuscrito ${nextNumber}` : `${type.label} ${nextNumber}`,
    text: createProjectNoteText(type),
    type: type.id,
    kind: type.kind,
    chapter: type.chapter,
    description: type.id === "manuscrito" ? "Documento livre para escrita longa." : createProjectNoteDescription(type),
  });

  addManuscript(manuscript, `${type.label} criado`);
}

function createManuscriptFromTemplate(templateId) {
  const templateManuscript = VeredaTemplates.createManuscript(templateId, {
    id: `manuscrito-${Date.now()}`,
  });
  const manuscript = VeredaArchive.createManuscript({
    ...templateManuscript,
    type: "manuscrito",
  });

  addManuscript(manuscript, "Guia aplicado");
}

function createProjectNoteText(type) {
  if (type.id === "manuscrito") {
    return "Comece aqui. A primeira frase abre uma vereda.";
  }

  return "";
}

function createProjectNoteDescription(type) {
  const descriptions = {
    projeto: "Visão geral da obra: sinopse, público, estágio, prazo e promessa de leitura.",
    pesquisa: "Fontes, hipóteses, referências e perguntas abertas do projeto.",
    submissão: "Envios editoriais, chamadas, prazos, formatos exigidos e respostas.",
    revisão: "Notas de processo editorial, problemas recorrentes, decisões e status.",
    personagem: "Ficha de personagem, desejo, contradição, voz e arco.",
    cena: "Rascunho ou planejamento de uma cena específica.",
    mundo: "Sistema amplo: regras, sociedade, tensão estrutural, lugares e instituições.",
    lugar: "Espaço específico do projeto: casa, cidade, nave, redação ou praça.",
    instituição: "Grupo de poder, governo, facção, corporação, culto ou resistência.",
    objeto: "Item com peso simbólico ou narrativo no projeto.",
    cronologia: "Linha do tempo de acontecimentos internos e externos da história.",
    capítulo: "Estrutura intermediária entre cenas e manuscrito.",
    tema: "Intenção autoral, tensão temática e imagem central do projeto.",
    glossário: "Termos, nomes, conceitos e vocabulário próprio do projeto.",
    escaleta: "Sequência de cenas com função dramática.",
    "cena-roteiro": "Cena de roteiro com slug line, ação e personagens.",
    ato: "Divisão estrutural do roteiro, com função dramática e virada.",
    "personagem-roteiro": "Versão audiovisual de personagem, com função, voz e apresentação.",
    pauta: "Proposta jornalística com gancho, angulação, prazo e fontes.",
    fonte: "Pessoa real ouvida na apuração.",
    entrevista: "Perguntas, respostas brutas e trechos selecionados.",
    fato: "Dado verificável, fonte primária e status de apuração.",
    poema: "Composição poética e suas decisões formais.",
    "série-poética": "Conjunto de poemas com fio temático ou formal.",
    argumento: "Tese, evidências e contra-argumento para ensaio.",
    crônica: "Gancho cotidiano, tom e conexão com o universal.",
  };

  return descriptions[type.id] || "Nota de projeto vinculada ao acervo.";
}

function createFromReferenceTemplate() {
  createManuscriptFromTemplate(state.template.selectedId);
}

function ensureInitialVersion(manuscript) {
  if (!isManuscriptDocument(manuscript)) {
    return;
  }

  if (VeredaVersions.getVersionsForManuscript(state.versions, manuscript.id).length > 0) {
    return;
  }

  const result = VeredaVersions.addSnapshot(state.versions, manuscript, "Primeira versão local");
  state.versions = result.versions;
}

function maybeCreateAutoVersion(manuscript) {
  if (!isManuscriptDocument(manuscript)) {
    return;
  }

  if (!VeredaVersions.shouldCreateAutoSnapshot(state.versions, manuscript)) {
    return;
  }

  const result = VeredaVersions.addSnapshot(state.versions, manuscript, "Auto-save relevante");
  state.versions = result.versions;
  renderVersionList();
}

function createManualVersion() {
  const manuscript = getActiveManuscript();

  if (!isManuscriptDocument(manuscript)) {
    saveStatus.textContent = "Versões ficam disponíveis apenas para manuscritos";
    renderVersionList();
    return;
  }

  const result = VeredaVersions.addSnapshot(state.versions, manuscript, "Versão manual");
  state.versions = result.versions;
  renderVersionList();
  persistState("Versão criada");
}

function restoreVersion(versionId) {
  const manuscript = getActiveManuscript();

  if (!isManuscriptDocument(manuscript)) {
    return;
  }

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
  if (!isManuscriptDocument() || event.isComposing || event.ctrlKey || event.metaKey || event.altKey) {
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

  if (!session) {
    proofSessionName.textContent = "Nota de suporte";
    proofIntegrity.textContent = "--";
    proofStatus.textContent = "Prova de autoria só para manuscritos";
    proofOrganic.textContent = "0";
    proofRejected.textContent = "0 descartados";
    proofCadence.textContent = "-- WPM";
    proofTimeline.innerHTML = "<div><span></span><p>Pesquisa, personagem, cena, mundo, cronologia e glossário não geram prova de autoria.</p></div>";
    return;
  }

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

  if (!isManuscriptDocument(manuscript)) {
    saveStatus.textContent = "Prova de autoria só para manuscritos";
    renderProofView();
    return;
  }

  state.proofs[manuscript.id] = VeredaProof.startSession(getActiveProofRecord());
  renderProofView();
  persistState("Nova sessão de autoria");
}

function renderVersionList() {
  const manuscript = getActiveManuscript();

  if (!isManuscriptDocument(manuscript)) {
    versionList.innerHTML = '<p class="muted">Versões ficam disponíveis apenas para manuscritos. Notas de suporte acompanham o acervo e o backup.</p>';
    return;
  }

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

function useActiveManuscriptForVoice() {
  if (!isManuscriptDocument()) {
    voiceInput.value = "";
    updateVoiceCount();
    voiceResult.innerHTML = `<p>O Espelho de Voz analisa manuscritos. Notas de pesquisa, mundo, personagem, cena, cronologia e glossário ficam fora dessa leitura.</p>`;
    setView("academia");
    voiceInput.focus();
    return;
  }

  voiceInput.value = getActiveManuscript().text.trim();
  updateVoiceCount();
  renderVoiceMirror();
  setView("academia");
  voiceInput.focus();
}

function updateVoiceCount() {
  const words = countWords(voiceInput.value);
  voiceCount.textContent = `${words} ${words === 1 ? "palavra" : "palavras"}`;
}

function renderVoiceMirror() {
  const text = voiceInput.value.trim();
  const words = countWords(text);

  if (words < 80) {
    voiceResult.innerHTML = `<p>Traga ao menos 80 palavras para uma primeira leitura. Acima de 500, o espelho fica menos instável.</p>`;
    return;
  }

  const analysis = VeredaVoice.analyze(text);
  voiceResult.innerHTML = createVoiceMirrorMarkup(analysis);
  saveStatus.textContent = "Espelho de Voz atualizado";
}

function createVoiceMirrorMarkup(analysis) {
  return `
    <div class="voice-result-header">
      <div>
        <h3>${escapeHtml(analysis.voice.title)}</h3>
        <p>${escapeHtml(analysis.voice.description)}</p>
      </div>
      <span class="voice-pill">${escapeHtml(analysis.voice.gesture)}</span>
    </div>
    <div class="voice-metrics">
      ${createVoiceMetric("Palavras", analysis.counts.words)}
      ${createVoiceMetric("TTR", `${analysis.metrics.ttr}%`)}
      ${createVoiceMetric("Densidade", `${analysis.metrics.lexicalDensity}%`)}
      ${createVoiceMetric("Pal/frase", analysis.metrics.avgSentence)}
    </div>
    <div class="voice-columns">
      ${createVoicePanel("Ecos possíveis", analysis.voice.echoes)}
      ${createVoicePanel("Forças", analysis.strengths)}
      ${createVoicePanel("Pontos cegos", analysis.blindSpots)}
      ${createVoicePanel("Exercícios", analysis.exercises)}
      ${createVoiceBars("Temperatura", analysis.emotional)}
      ${createVoiceBars("Campos", analysis.fields)}
    </div>
    <p class="voice-disclaimer">${escapeHtml(analysis.disclaimer)}</p>
  `;
}

function createVoiceMetric(label, value) {
  return `
    <div class="voice-metric">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
    </div>
  `;
}

function createVoicePanel(title, items) {
  return `
    <div class="voice-panel">
      <h4>${escapeHtml(title)}</h4>
      <ul>
        ${(items.length ? items : ["Sem marcas suficientes neste corpus."])
          .map((item) => `<li>${escapeHtml(item)}</li>`)
          .join("")}
      </ul>
    </div>
  `;
}

function createVoiceBars(title, items) {
  return `
    <div class="voice-panel">
      <h4>${escapeHtml(title)}</h4>
      <div class="voice-bars">
        ${(items.length ? items : [{ label: "baixo sinal", score: 8, hits: 0 }])
          .map(
            (item) => `
              <div class="voice-bar">
                <span>${escapeHtml(item.label)}</span>
                <i style="--w:${Math.max(8, item.score)}%"></i>
                <b>${item.hits}</b>
              </div>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderDecolonialTool() {
  if (!window.VeredaDecolonial || !decolonialFilters || !decolonialList) {
    return;
  }

  const categories = window.VeredaDecolonial.listCategories();
  const entries = window.VeredaDecolonial.listEntries(decolonialState);
  const total = window.VeredaDecolonial.listEntries().length;

  decolonialFilters.innerHTML = [
    `<button class="decolonial-filter ${decolonialState.category === "all" ? "is-active" : ""}" type="button" data-decolonial-category="all">Todos <b>${total}</b></button>`,
    ...categories.map(
      (category) => `
        <button class="decolonial-filter ${decolonialState.category === category.id ? "is-active" : ""}" type="button" data-decolonial-category="${category.id}">
          ${escapeHtml(category.label)}
          <b>${category.count}</b>
        </button>
      `
    ),
  ].join("");

  decolonialCount.textContent = `${entries.length} ${entries.length === 1 ? "entrada" : "entradas"}`;
  renderDecolonialObserver();

  if (!entries.length) {
    decolonialList.innerHTML = `<div class="decolonial-empty">Nenhuma entrada encontrada.</div>`;
    return;
  }

  decolonialList.innerHTML = entries
    .map((entry) => {
      const alternatives = entry.alternatives.map((alternative) => `<span>${escapeHtml(alternative)}</span>`).join("");
      return `
        <article class="decolonial-entry">
          <div class="decolonial-entry-header">
            <strong>${escapeHtml(entry.avoid)}</strong>
            <span>${escapeHtml(entry.categoryLabel || entry.category)}</span>
          </div>
          <div class="decolonial-alternatives">
            <i class="material-symbols-outlined" aria-hidden="true">arrow_forward</i>
            ${alternatives}
          </div>
          <p>${escapeHtml(entry.reason)}</p>
          <small>${escapeHtml(entry.context)}</small>
        </article>
      `;
    })
    .join("");
}

function renderDecolonialObserver() {
  if (!window.VeredaDecolonial || !decolonialObserver || !decolonialObserverSummary || !decolonialObserverList) {
    return;
  }

  decolonialObserver.hidden = !decolonialState.observerEnabled;

  if (!decolonialState.observerEnabled) {
    decolonialObserverList.innerHTML = "";
    return;
  }

  const manuscript = getActiveManuscript();
  const findings = window.VeredaDecolonial.detectText(manuscript.text);
  const occurrences = findings.reduce((total, item) => total + item.count, 0);

  if (!findings.length) {
    decolonialObserverSummary.textContent = "Nenhum alerta encontrado neste manuscrito.";
    decolonialObserverList.innerHTML = `<div class="decolonial-observer-empty">O texto passou limpo por esta lente. Ainda vale revisar contexto, representação e ponto de vista.</div>`;
    return;
  }

  decolonialObserverSummary.textContent = `${occurrences} ${occurrences === 1 ? "ocorrência" : "ocorrências"} em ${findings.length} ${findings.length === 1 ? "termo" : "termos"}.`;
  decolonialObserverList.innerHTML = findings
    .map((entry) => {
      const alternatives = entry.alternatives.map((alternative) => `<span>${escapeHtml(alternative)}</span>`).join("");
      return `
        <article class="decolonial-alert">
          <div class="decolonial-alert-header">
            <strong>${escapeHtml(entry.avoid)}</strong>
            <span>${entry.count}x · ${escapeHtml(entry.categoryLabel)}</span>
          </div>
          <div class="decolonial-alternatives">
            <i class="material-symbols-outlined" aria-hidden="true">arrow_forward</i>
            ${alternatives}
          </div>
          <p>${escapeHtml(entry.reason)}</p>
          <small>${entry.contextual ? "Atenção ao contexto. " : ""}${escapeHtml(entry.context)}</small>
        </article>
      `;
    })
    .join("");
}

function renderRightsLab() {
  if (!window.VeredaRights || !rightsCards || !rightsSources) {
    return;
  }

  const query = normalizeSearch(rightsState.query);
  const cards = window.VeredaRights.getCards().filter((card) => {
    if (!query) {
      return true;
    }

    return normalizeSearch(
      [
        card.eyebrow,
        card.title,
        card.body,
        card.watch,
        card.source,
        ...(card.do || []),
      ].join(" ")
    ).includes(query);
  });

  rightsCards.innerHTML = cards.length
    ? cards.map(createRightsCardMarkup).join("")
    : `<div class="rights-empty">Nenhum cuidado encontrado. Tente buscar por contrato, registro, ISBN, IA, plágio ou submissão.</div>`;

  rightsSources.innerHTML = window.VeredaRights
    .getSources()
    .map(
      (source) => `
        <a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">
          <span>${escapeHtml(source.label)}</span>
          <small>${escapeHtml(source.note)}</small>
        </a>
      `
    )
    .join("");
}

function createRightsCardMarkup(card) {
  return `
    <article class="rights-card">
      <div class="rights-card-header">
        <span class="material-symbols-outlined">${escapeHtml(card.icon)}</span>
        <div>
          <p class="eyebrow">${escapeHtml(card.eyebrow)}</p>
          <h3>${escapeHtml(card.title)}</h3>
        </div>
      </div>
      <p>${escapeHtml(card.body)}</p>
      <ul>
        ${card.do.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
      <div class="rights-watch">
        <strong>Atenção</strong>
        <span>${escapeHtml(card.watch)}</span>
      </div>
      <small>${escapeHtml(card.source)}</small>
    </article>
  `;
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

  if (!isManuscriptDocument(manuscript)) {
    saveStatus.textContent = "Prova de autoria só para manuscritos";
    renderProofView();
    return;
  }

  const proofDocument = await VeredaProof.createProofDocument(getActiveProofRecord(), manuscript);
  const proofJson = JSON.stringify(proofDocument, null, 2);
  downloadFile(proofJson, `${slugify(manuscript.title)}-${slugify(proofDocument.session.name)}.proof.json`, "application/json");
  saveStatus.textContent = "Prova de escrita exportada";
}

function getBackupWarningState() {
  const exportedAt = backupMeta.exportedAt ? new Date(backupMeta.exportedAt) : null;

  if (!exportedAt || Number.isNaN(exportedAt.getTime())) {
    return {
      visible: true,
      copy: "Limpar cache, trocar de aparelho ou remover dados do site pode apagar seus textos locais. Exporte um backup .vrda para guardar uma cópia fora do navegador.",
    };
  }

  const elapsedDays = Math.floor((Date.now() - exportedAt.getTime()) / (1000 * 60 * 60 * 24));

  if (elapsedDays >= BACKUP_WARNING_DAYS) {
    return {
      visible: true,
      copy: `Seu último backup .vrda foi há ${elapsedDays} dias. Exporte uma cópia nova antes de limpar cache ou trocar de aparelho.`,
    };
  }

  return {
    visible: false,
    copy: "",
  };
}

function renderBackupWarning() {
  const warning = getBackupWarningState();
  backupWarning.hidden = !warning.visible;
  backupWarningCopy.textContent = warning.copy;
}

function setFilesystemBackupState(stateName, status, detail) {
  filesystemBackup.dataset.state = stateName;
  filesystemBackupStatus.textContent = status;
  filesystemBackupDetail.textContent = detail;
}

async function initializeFilesystemBackup() {
  if (!VeredaFileSystemBackup.isSupported()) {
    setFilesystemBackupState(
      "idle",
      "Autosave externo indisponível neste navegador",
      "Chrome, Edge e Opera permitem escolher um arquivo .vrda para autosave. Firefox e Safari ainda bloqueiam esse acesso."
    );
    filesystemBackup.querySelector('[data-action="choose-filesystem-backup"]').disabled = true;
    filesystemBackupInterval.disabled = true;
    return;
  }

  filesystemBackupHandle = await VeredaFileSystemBackup.getStoredHandle();

  if (!filesystemBackupHandle) {
    setFilesystemBackupState(
      "idle",
      "Autosave externo desativado",
      "Escolha um arquivo .vrda para a Vereda manter uma cópia completa do acervo fora do navegador."
    );
    return;
  }

  filesystemBackupSaveButton.disabled = false;
  filesystemBackupStopButton.disabled = false;
  setFilesystemBackupState("ready", "Arquivo externo lembrado", `${filesystemBackupHandle.name} · autosave ativo`);
  startFilesystemBackup();
}

async function chooseFilesystemBackup() {
  try {
    const dateStamp = createDateTimeStamp();
    filesystemBackupHandle = await VeredaFileSystemBackup.pickBackupFile(`vereda-acervo-${dateStamp}.vrda`);
    filesystemBackupSaveButton.disabled = false;
    filesystemBackupStopButton.disabled = false;
    filesystemBackupCount = 0;
    setFilesystemBackupState("ready", "Arquivo externo configurado", `${filesystemBackupHandle.name} · autosave ativo`);
    startFilesystemBackup();
    await saveFilesystemBackup(true);
  } catch (error) {
    if (error.name === "AbortError") {
      return;
    }

    setFilesystemBackupState("error", "Não foi possível configurar o autosave externo", error.message);
  }
}

async function saveFilesystemBackup(manual = false) {
  if (!filesystemBackupHandle) {
    return;
  }

  try {
    setFilesystemBackupState("saving", "Salvando cópia externa...", filesystemBackupHandle.name);
    const backup = VeredaBackup.createBackup(state);
    await VeredaFileSystemBackup.writeBackup(filesystemBackupHandle, backup);
    filesystemBackupCount += 1;
    backupMeta = {
      exportedAt: backup.exportedAt,
      manuscriptCount: state.manuscripts.length,
      filesystem: true,
      filename: filesystemBackupHandle.name,
    };
    persistBackupMeta();
    renderBackupWarning();
    const label = manual ? "Backup externo salvo agora" : `Autosave externo #${filesystemBackupCount}`;
    setFilesystemBackupState("ready", label, `${filesystemBackupHandle.name} · ${formatUpdatedAt(backup.exportedAt)}`);
  } catch (error) {
    stopFilesystemBackup();
    setFilesystemBackupState("error", "Autosave externo pausado", error.message);
  }
}

function startFilesystemBackup() {
  stopFilesystemBackup(false);
  filesystemBackupTimer = window.setInterval(() => saveFilesystemBackup(false), filesystemBackupIntervalSeconds * 1000);
}

function stopFilesystemBackup(updateUi = true) {
  if (filesystemBackupTimer) {
    window.clearInterval(filesystemBackupTimer);
    filesystemBackupTimer = null;
  }

  if (updateUi && filesystemBackupHandle) {
    setFilesystemBackupState("idle", "Autosave externo pausado", `${filesystemBackupHandle.name} continua configurado`);
  }
}

function updateFilesystemBackupInterval(value) {
  filesystemBackupIntervalSeconds = Number(value);
  filesystemBackupIntervalLabel.textContent = `${filesystemBackupIntervalSeconds}s`;

  if (filesystemBackupTimer) {
    startFilesystemBackup();
  }
}

function exportBackup() {
  const backup = VeredaBackup.createBackup(state);
  const backupJson = JSON.stringify(backup, null, 2);
  const dateStamp = createDateTimeStamp();
  downloadFile(backupJson, `vereda-acervo-${dateStamp}.vrda`, "application/vnd.vereda+json");
  backupMeta = {
    exportedAt: backup.exportedAt,
    manuscriptCount: state.manuscripts.length,
  };
  persistBackupMeta();
  renderBackupWarning();
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
    backupMeta = {
      exportedAt: backup.exportedAt || new Date().toISOString(),
      manuscriptCount: state.manuscripts.length,
    };
    persistBackupMeta();
    renderActiveManuscript();
    renderManuscriptNavigation();
    renderProjectGrid();
    renderLexicalView();
    renderProofView();
    renderVersionList();
    renderBackupWarning();
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
  const manuscript = getActiveManuscript();

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

  precisionCard.innerHTML = isManuscriptDocument(manuscript)
    ? createPrecisionMarkup(VeredaPrecision.analyze(template, manuscript.text), manuscript, template)
    : createProjectNotePrecisionMarkup(manuscript);
  referenceBody.innerHTML = createReferenceMarkup(template);
}

function createProjectNotePrecisionMarkup(manuscript) {
  const type = getArchiveType(manuscript);
  return `
    <div class="precision-top">
      <span>Nota de projeto</span>
      <strong>--</strong>
    </div>
    <div class="precision-meter" aria-label="Aderência indisponível para nota de projeto">
      <i style="--score: 0%"></i>
    </div>
    <p>${escapeHtml(type.label)} não passa por aderência à forma.</p>
    <div class="precision-checks">
      <div class="precision-check is-passed">
        <span class="material-symbols-outlined">info</span>
        <div>
          <strong>Use como material de apoio</strong>
          <small>Pesquisa, mundo, personagens e cronologia ajudam o manuscrito, mas não são avaliados como texto final.</small>
        </div>
      </div>
    </div>
  `;
}

function createPrecisionMarkup(analysis, manuscript, template) {
  const checklist = getChecklistFor(manuscript.id, template.id);

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
          (check) => {
            const checked = Boolean(checklist[check.label]);
            return `
            <label class="precision-check${check.passed ? " is-passed" : ""}${checked ? " is-checked" : ""}">
              <input type="checkbox" data-checklist-criterion="${escapeHtml(check.label)}" ${checked ? "checked" : ""}>
              <div>
                <strong>${escapeHtml(check.label)} <b>${check.score}%</b></strong>
                <small>${escapeHtml(check.hint)}</small>
              </div>
            </label>
          `;
          }
        )
        .join("")}
    </div>
  `;
}

function getChecklistFor(manuscriptId, templateId) {
  return checklistState[manuscriptId]?.[templateId] || {};
}

function setChecklistCriterion(manuscriptId, templateId, criterion, checked) {
  checklistState = {
    ...checklistState,
    [manuscriptId]: {
      ...(checklistState[manuscriptId] || {}),
      [templateId]: {
        ...(checklistState[manuscriptId]?.[templateId] || {}),
        [criterion]: checked,
      },
    },
  };

  persistChecklistState();
  renderProjectGrid();
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

  if (!themePicker.contains(event.target)) {
    closeThemeMenu();
  }

  if (!topbarSearch.contains(event.target)) {
    closeGlobalSearch();
  }

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
  const decolonialCategoryTarget = event.target.closest("[data-decolonial-category]");
  const createNoteTypeTarget = event.target.closest("[data-create-note-type]");
  const globalSearchResultTarget = event.target.closest("[data-global-search-result]");

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

  if (createNoteTypeTarget) {
    event.preventDefault();
    selectCreateNoteType(createNoteTypeTarget.dataset.createNoteType);
    return;
  }

  if (globalSearchResultTarget) {
    event.preventDefault();
    openSearchResult(globalSearchResultTarget.dataset.globalSearchResult);
    return;
  }

  if (decolonialCategoryTarget) {
    event.preventDefault();
    decolonialState.category = decolonialCategoryTarget.dataset.decolonialCategory;
    renderDecolonialTool();
    return;
  }

  if (viewTarget) {
    event.preventDefault();
    setView(viewTarget.dataset.viewTarget, { updateRoute: true });
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

  if (actionTarget.dataset.action === "toggle-theme-menu") {
    toggleThemeMenu();
  }

  if (actionTarget.dataset.action === "toggle-global-search") {
    toggleGlobalSearch();
  }

  if (actionTarget.dataset.action === "scroll-rights" && rightsLab) {
    rightsLab.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (actionTarget.dataset.action === "select-theme") {
    selectColorTheme(actionTarget.dataset.themeId);
  }

  if (actionTarget.dataset.action === "voice-use-active") {
    useActiveManuscriptForVoice();
  }

  if (actionTarget.dataset.action === "voice-analyze") {
    renderVoiceMirror();
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

  if (actionTarget.dataset.action === "choose-filesystem-backup") {
    chooseFilesystemBackup();
  }

  if (actionTarget.dataset.action === "save-filesystem-backup") {
    saveFilesystemBackup(true);
  }

  if (actionTarget.dataset.action === "stop-filesystem-backup") {
    stopFilesystemBackup();
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

  if (event.key === "Escape" && themeMenu.classList.contains("is-visible")) {
    closeThemeMenu();
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
window.addEventListener("hashchange", () => setView(getViewFromRoute()));
window.addEventListener("load", () => setView(getViewFromRoute(), { updateRoute: true, routeMode: "replace" }));
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
filesystemBackupInterval.addEventListener("input", () => updateFilesystemBackupInterval(filesystemBackupInterval.value));
metadataForm.addEventListener("input", updateCurrentMetadata);
metadataForm.addEventListener("focusout", renderMetadataForm);
archiveSearch.addEventListener("input", () => setArchiveSearch(archiveSearch.value));
archiveSort.addEventListener("change", () => setArchiveSort(archiveSort.value));
templateSearch.addEventListener("input", () => setTemplateSearch(templateSearch.value));
globalSearchInput.addEventListener("input", () => renderGlobalSearchResults(globalSearchInput.value));
globalSearchInput.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeGlobalSearch();
  }
});
voiceInput.addEventListener("input", updateVoiceCount);
decolonialSearch.addEventListener("input", () => {
  decolonialState.query = decolonialSearch.value;
  renderDecolonialTool();
});
rightsSearch.addEventListener("input", () => {
  rightsState.query = rightsSearch.value;
  renderRightsLab();
});
decolonialObserverToggle.addEventListener("change", () => {
  decolonialState.observerEnabled = decolonialObserverToggle.checked;
  renderDecolonialObserver();
});
precisionCard.addEventListener("change", (event) => {
  const checklistTarget = event.target.closest("[data-checklist-criterion]");

  if (!checklistTarget) {
    return;
  }

  const manuscript = getActiveManuscript();
  const template = VeredaTemplates.getTemplate(state.template.selectedId);
  setChecklistCriterion(manuscript.id, template.id, checklistTarget.dataset.checklistCriterion, checklistTarget.checked);
});

renderActiveManuscript();
renderManuscriptNavigation();
renderProjectGrid();
renderMetadataForm();
renderLexicalView();
renderProofView();
renderVersionList();
renderBackupWarning();
renderTemplateStudio();
renderDecolonialTool();
renderRightsLab();
updateAcademyParallax();
applyTemplateLayout();
applyPanelLayout();
applyColorTheme();
applyFocusSettings();
setView(getViewFromRoute(), { updateRoute: true, routeMode: "replace" });
registerOfflineApp();
initializeFilesystemBackup();
persistState("Pronto para escrever");
