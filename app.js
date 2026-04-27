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
const templateTabs = document.querySelector("[data-template-tabs]");
const templateScreen = document.querySelector("[data-template-screen]");
const templateStepLabel = document.querySelector("[data-template-step-label]");
const editorSplit = document.querySelector(".editor-split");
const referenceTitle = document.querySelector("[data-reference-title]");
const referenceTabs = document.querySelector("[data-reference-tabs]");
const referenceBody = document.querySelector("[data-reference-body]");
const precisionCard = document.querySelector("[data-precision-card]");
const templateResizer = document.querySelector("[data-template-resizer]");
const createNoteOverlay = document.querySelector("[data-create-note-overlay]");

let state = loadState();
let saveTimer;
let deferredInstallPrompt;
let templateState = {
  activeId: "roteiro-tv",
  step: 0,
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
}

function registerOfflineApp() {
  updateConnectionStatus();

  if (!("serviceWorker" in navigator)) {
    offlineStatus.innerHTML = '<span class="material-symbols-outlined">cloud_off</span>Offline indisponível';
    return;
  }

  navigator.serviceWorker
    .register("./service-worker.js")
    .then(() => {
      offlineStatus.innerHTML = '<span class="material-symbols-outlined">cloud_done</span>Offline pronto';
    })
    .catch(() => {
      offlineStatus.innerHTML = '<span class="material-symbols-outlined">sync_problem</span>Offline pendente';
    });
}

function updateConnectionStatus() {
  if (!offlineStatus) {
    return;
  }

  const label = navigator.onLine ? "Offline pronto" : "Sem rede";
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
  projectGrid.innerHTML = state.manuscripts
    .map((manuscript, index) => {
      const words = countWords(manuscript.text);
      const featured = index === 0 ? " featured" : "";
      const selected = manuscript.id === state.activeId ? " is-selected" : "";

      return `
        <button class="project-card${featured}${selected}" type="button" data-archive-select="${manuscript.id}">
          <span>${escapeHtml(manuscript.kind)} · ${escapeHtml(manuscript.status)}</span>
          <h2>${escapeHtml(manuscript.title)}</h2>
          <p>${escapeHtml(manuscript.description || createExcerpt(manuscript.text))}</p>
          <div class="project-progress" aria-label="Progresso de ${escapeHtml(manuscript.title)}">
            <i style="--progress: ${manuscript.progress}%"></i>
          </div>
          <small>${escapeHtml(manuscript.chapter)} · ${manuscript.progress}% · ${words} palavras · ${formatUpdatedAt(manuscript.updatedAt)}</small>
        </button>
      `;
    })
    .join("");
}

function renderMetadataForm() {
  const manuscript = getActiveManuscript();

  metadataFields.forEach((field) => {
    field.value = manuscript[field.dataset.metadataField] ?? "";
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
  const formData = new FormData(metadataForm);
  const nextManuscript = VeredaArchive.updateMetadata(manuscript, {
    kind: formData.get("kind"),
    status: formData.get("status"),
    chapter: formData.get("chapter"),
    progress: formData.get("progress"),
    description: formData.get("description"),
  });

  updateActiveManuscript(nextManuscript);
  renderManuscriptNavigation();
  renderProjectGrid();
  renderMetadataForm();
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

  addManuscript(manuscript, "Template aplicado");
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
    <p class="lexical-disclaimer">Classificação aproximada por regras offline. Sem IA, sem envio de texto.</p>
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
  const templates = VeredaTemplates.listTemplates();
  const activeTemplate = VeredaTemplates.getTemplate(templateState.activeId);
  const activeStep = VeredaTemplates.getStep(templateState.activeId, templateState.step);

  templateTabs.innerHTML = templates
    .map((template) => {
      const isActive = template.id === activeTemplate.id ? " is-active" : "";

      return `
        <button class="template-tab${isActive}" data-template-select="${template.id}">
          <span class="material-symbols-outlined">${template.icon}</span>
          ${escapeHtml(template.label)}
        </button>
      `;
    })
    .join("");

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
  templateState = {
    activeId: templateId,
    step: 0,
  };
  renderTemplateStudio();
}

function changeTemplateStep(direction) {
  const template = VeredaTemplates.getTemplate(templateState.activeId);
  templateState.step = Math.min(Math.max(templateState.step + direction, 0), template.steps.length - 1);
  renderTemplateStudio();
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
  referenceTabs.innerHTML = VeredaTemplates.listTemplates()
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
      <span>Precisão do formato</span>
      <strong>${analysis.score}%</strong>
    </div>
    <div class="precision-meter" aria-label="Precisão do formato">
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

  return `
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

function selectReferenceTemplate(templateId) {
  state.template.selectedId = templateId;
  renderTemplateReference();
  persistState("Template consultivo selecionado");
}

function toggleTemplateSide() {
  state.template.side = state.template.side === "left" ? "right" : "left";
  applyTemplateLayout();
  persistState("Lado do template ajustado");
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

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
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

  if (manuscriptTarget) {
    event.preventDefault();
    setActiveManuscript(manuscriptTarget.dataset.manuscriptId);
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
  const referenceTemplateTarget = event.target.closest("[data-reference-template]");

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

  if (referenceTemplateTarget) {
    event.preventDefault();
    selectReferenceTemplate(referenceTemplateTarget.dataset.referenceTemplate);
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
  persistState("Largura do template ajustada");
});

focusSettingControls.forEach((control) => {
  control.addEventListener("input", () => {
    updateFocusSetting(control.dataset.focusSetting, control.value);
  });
});

window.addEventListener("online", updateConnectionStatus);
window.addEventListener("offline", updateConnectionStatus);

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

renderActiveManuscript();
renderManuscriptNavigation();
renderProjectGrid();
renderMetadataForm();
renderLexicalView();
renderProofView();
renderVersionList();
renderTemplateStudio();
applyTemplateLayout();
applyFocusSettings();
registerOfflineApp();
persistState("Pronto para escrever");
