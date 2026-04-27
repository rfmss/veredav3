const STORAGE_KEY = "vereda.manuscripts.v1";

const starterManuscripts = [
  {
    id: "som-da-terra-seca",
    title: "O Som da Terra Seca",
    kind: "Romance em andamento",
    chapter: "Capítulo 12",
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
    chapter: "Ato 1",
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
const proofTimeline = document.querySelector("[data-proof-timeline]");

let state = loadState();
let saveTimer;
let deferredInstallPrompt;

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return {
      activeId: starterManuscripts[0].id,
      manuscripts: starterManuscripts,
      focus: getDefaultFocusSettings(),
      lexical: getDefaultLexicalState(),
      proofs: {},
    };
  }

  try {
    const parsed = JSON.parse(saved);

    if (!Array.isArray(parsed.manuscripts) || parsed.manuscripts.length === 0) {
      throw new Error("Invalid manuscript payload");
    }

    return {
      ...parsed,
      focus: {
        ...getDefaultFocusSettings(),
        ...parsed.focus,
      },
      lexical: {
        ...getDefaultLexicalState(),
        ...parsed.lexical,
      },
      proofs: parsed.proofs || {},
    };
  } catch {
    return {
      activeId: starterManuscripts[0].id,
      manuscripts: starterManuscripts,
      focus: getDefaultFocusSettings(),
      lexical: getDefaultLexicalState(),
      proofs: {},
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

function persistState(status = "Salvo localmente") {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  saveStatus.textContent = status;
}

function getActiveManuscript() {
  return state.manuscripts.find((manuscript) => manuscript.id === state.activeId) || state.manuscripts[0];
}

function getActiveProofSession() {
  const manuscript = getActiveManuscript();
  const session = VeredaProof.createSession(state.proofs[manuscript.id]);
  state.proofs[manuscript.id] = session;
  return session;
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
  renderProofView();
  persistState("Manuscrito aberto");
  setView("editor");
}

function renderActiveManuscript() {
  const manuscript = getActiveManuscript();
  titleInput.value = manuscript.title;
  writingArea.innerText = manuscript.text;
  updateWritingStats();
  renderLexicalView();
  renderProofView();
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

      return `
        <a class="project-card${featured}" href="#" data-manuscript-id="${manuscript.id}">
          <span>${escapeHtml(manuscript.kind)}</span>
          <h2>${escapeHtml(manuscript.title)}</h2>
          <p>${escapeHtml(createExcerpt(manuscript.text))}</p>
          <small>${escapeHtml(manuscript.chapter)} · ${words} palavras · ${formatUpdatedAt(manuscript.updatedAt)}</small>
        </a>
      `;
    })
    .join("");
}

function updateCurrentManuscript() {
  const manuscript = getActiveManuscript();
  manuscript.title = titleInput.value.trim() || "Manuscrito sem título";
  manuscript.text = writingArea.innerText.trim();
  manuscript.updatedAt = new Date().toISOString();

  updateWritingStats();
  renderLexicalView();
  renderManuscriptNavigation();
  renderProjectGrid();
  queueSave();
}

function queueSave() {
  saveStatus.textContent = "Salvando...";
  window.clearTimeout(saveTimer);
  saveTimer = window.setTimeout(() => persistState(), 450);
}

function createManuscript() {
  const nextNumber = state.manuscripts.length + 1;
  const manuscript = {
    id: `manuscrito-${Date.now()}`,
    title: `Novo Manuscrito ${nextNumber}`,
    kind: "Rascunho",
    chapter: "Primeira cena",
    updatedAt: new Date().toISOString(),
    text: "Comece aqui. A primeira frase abre uma vereda.",
  };

  state.manuscripts.unshift(manuscript);
  state.activeId = manuscript.id;
  renderActiveManuscript();
  renderManuscriptNavigation();
  renderProjectGrid();
  persistState("Novo manuscrito criado");
  setView("editor");
  titleInput.focus();
  titleInput.select();
}

function recordWritingProof(event) {
  if (event.isComposing || event.ctrlKey || event.metaKey || event.altKey) {
    return;
  }

  const manuscript = getActiveManuscript();
  state.proofs[manuscript.id] = VeredaProof.recordKeyEvent(getActiveProofSession(), event);
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
      const time = new Date(event.at).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
      const status = event.organic ? "evento orgânico" : "evento descartado";
      const interval = event.interval === null ? "início da sessão" : `${event.interval}ms`;

      return `<div><span></span><p>${time} - ${status} (${event.keyType}, ${interval})</p></div>`;
    })
    .join("");
}

async function exportProof() {
  const manuscript = getActiveManuscript();
  const proofDocument = await VeredaProof.createProofDocument(getActiveProofSession(), manuscript);
  const proofJson = JSON.stringify(proofDocument, null, 2);
  const blob = new Blob([proofJson], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${slugify(manuscript.title)}.proof.json`;
  link.click();
  URL.revokeObjectURL(url);
  saveStatus.textContent = "Prova de escrita exportada";
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

document.addEventListener("click", (event) => {
  const manuscriptTarget = event.target.closest("[data-manuscript-id]");
  const viewTarget = event.target.closest("[data-view-target]");
  const actionTarget = event.target.closest("[data-action]");

  if (manuscriptTarget) {
    event.preventDefault();
    setActiveManuscript(manuscriptTarget.dataset.manuscriptId);
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

  if (actionTarget.dataset.action === "toggle-nav") {
    nav.classList.toggle("is-open");
  }

  if (actionTarget.dataset.action === "new-manuscript") {
    createManuscript();
  }

  if (actionTarget.dataset.action === "install-app") {
    installApp();
  }

  if (actionTarget.dataset.action === "export-proof") {
    exportProof();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && shell.classList.contains("is-focus")) {
    exitFocusMode();
  }
});

document.addEventListener("pointermove", (event) => {
  if (shell.classList.contains("is-focus") && state.focus.ruler) {
    shell.style.setProperty("--ruler-y", `${event.clientY}px`);
  }
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

renderActiveManuscript();
renderManuscriptNavigation();
renderProjectGrid();
renderLexicalView();
renderProofView();
applyFocusSettings();
registerOfflineApp();
persistState("Pronto para escrever");
