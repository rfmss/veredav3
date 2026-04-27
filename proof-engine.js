(function proofEngine(global) {
  const MIN_ORGANIC_INTERVAL = 30;
  const MAX_ORGANIC_INTERVAL = 2000;
  const MAX_EVENTS = 1200;

  function createSession(existingSession) {
    return {
      startedAt: existingSession?.startedAt || new Date().toISOString(),
      updatedAt: existingSession?.updatedAt || new Date().toISOString(),
      lastEventAt: existingSession?.lastEventAt || null,
      events: Array.isArray(existingSession?.events) ? existingSession.events : [],
    };
  }

  function recordKeyEvent(session, keyboardEvent, timestamp = Date.now()) {
    const nextSession = createSession(session);
    const interval = nextSession.lastEventAt ? timestamp - nextSession.lastEventAt : null;
    const isTrusted = keyboardEvent.isTrusted === true;
    const isOrganic = Boolean(
      isTrusted &&
        interval !== null &&
        interval >= MIN_ORGANIC_INTERVAL &&
        interval <= MAX_ORGANIC_INTERVAL
    );

    nextSession.lastEventAt = timestamp;
    nextSession.updatedAt = new Date(timestamp).toISOString();
    nextSession.events.push({
      at: nextSession.updatedAt,
      interval,
      trusted: isTrusted,
      organic: isOrganic,
      keyType: classifyKey(keyboardEvent),
    });

    if (nextSession.events.length > MAX_EVENTS) {
      nextSession.events = nextSession.events.slice(nextSession.events.length - MAX_EVENTS);
    }

    return nextSession;
  }

  function summarize(session) {
    const safeSession = createSession(session);
    const measuredEvents = safeSession.events.filter((event) => event.interval !== null);
    const organicEvents = measuredEvents.filter((event) => event.organic);
    const rejectedEvents = measuredEvents.length - organicEvents.length;
    const organicIntervals = organicEvents.map((event) => event.interval);
    const averageInterval = average(organicIntervals);
    const cadenceWpm = averageInterval ? Math.round(60000 / averageInterval / 5) : 0;
    const integrity = measuredEvents.length ? Math.round((organicEvents.length / measuredEvents.length) * 100) : 0;

    return {
      startedAt: safeSession.startedAt,
      updatedAt: safeSession.updatedAt,
      totalEvents: safeSession.events.length,
      measuredEvents: measuredEvents.length,
      organicEvents: organicEvents.length,
      rejectedEvents,
      averageInterval,
      cadenceWpm,
      integrity,
      status: integrity >= 80 ? "Sólida" : integrity >= 50 ? "Em formação" : "Aguardando escrita",
    };
  }

  async function createProofDocument(session, manuscript) {
    const summary = summarize(session);
    const textHash = await sha256(manuscript.text || "");

    return {
      format: "vereda.proof.v1",
      generatedAt: new Date().toISOString(),
      rule: {
        trustedEventsOnly: true,
        organicIntervalMs: [MIN_ORGANIC_INTERVAL, MAX_ORGANIC_INTERVAL],
        storesLiteralKeys: false,
      },
      manuscript: {
        id: manuscript.id,
        title: manuscript.title,
        textHash,
        wordCount: countWords(manuscript.text || ""),
      },
      summary,
      events: createSession(session).events,
    };
  }

  function classifyKey(keyboardEvent) {
    if (keyboardEvent.key === "Backspace" || keyboardEvent.key === "Delete") {
      return "erase";
    }

    if (keyboardEvent.key === "Enter") {
      return "line-break";
    }

    if (keyboardEvent.key === " ") {
      return "space";
    }

    if (keyboardEvent.key?.length === 1) {
      return "character";
    }

    return "control";
  }

  function average(values) {
    if (!values.length) {
      return 0;
    }

    return Math.round(values.reduce((total, value) => total + value, 0) / values.length);
  }

  async function sha256(value) {
    if (global.crypto?.subtle) {
      const encoded = new TextEncoder().encode(value);
      const hashBuffer = await global.crypto.subtle.digest("SHA-256", encoded);
      return Array.from(new Uint8Array(hashBuffer))
        .map((byte) => byte.toString(16).padStart(2, "0"))
        .join("");
    }

    return fallbackHash(value);
  }

  function fallbackHash(value) {
    let hash = 0x811c9dc5;

    for (let index = 0; index < value.length; index += 1) {
      hash ^= value.charCodeAt(index);
      hash = Math.imul(hash, 0x01000193);
    }

    return `fallback-${(hash >>> 0).toString(16).padStart(8, "0")}`;
  }

  function countWords(text) {
    return text.trim() ? text.trim().split(/\s+/).length : 0;
  }

  global.VeredaProof = {
    createSession,
    createProofDocument,
    recordKeyEvent,
    summarize,
  };
})(window);
