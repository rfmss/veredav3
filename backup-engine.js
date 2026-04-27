(function backupEngine(global) {
  const BACKUP_FORMAT = "vereda.backup.v1";

  function createBackup(state) {
    return {
      format: BACKUP_FORMAT,
      exportedAt: new Date().toISOString(),
      app: {
        name: "Vereda",
        storageKey: "vereda.manuscripts.v1",
      },
      data: {
        activeId: state.activeId,
        manuscripts: state.manuscripts,
        focus: state.focus,
        lexical: state.lexical,
        proofs: state.proofs,
        versions: state.versions,
      },
    };
  }

  function readBackup(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        try {
          resolve(parseBackup(reader.result));
        } catch (error) {
          reject(error);
        }
      });

      reader.addEventListener("error", () => {
        reject(new Error("Não foi possível ler o arquivo de backup."));
      });

      reader.readAsText(file);
    });
  }

  function parseBackup(rawValue) {
    const payload = JSON.parse(rawValue);

    if (payload.format !== BACKUP_FORMAT) {
      throw new Error("Formato de backup incompatível.");
    }

    if (!payload.data || !Array.isArray(payload.data.manuscripts) || payload.data.manuscripts.length === 0) {
      throw new Error("Backup sem manuscritos válidos.");
    }

    return payload;
  }

  function restoreBackup(currentState, backup) {
    const data = backup.data;

    return {
      ...currentState,
      activeId: data.activeId || data.manuscripts[0].id,
      manuscripts: data.manuscripts,
      focus: data.focus || currentState.focus,
      lexical: data.lexical || currentState.lexical,
      proofs: data.proofs || {},
      versions: data.versions || {},
    };
  }

  global.VeredaBackup = {
    createBackup,
    readBackup,
    restoreBackup,
  };
})(window);
