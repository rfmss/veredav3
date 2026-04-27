# Bíblia do Projeto: Vereda — O Santuário do Escritor Brasileiro

## 1. Visão Geral
O **Vereda** é um ecossistema de escrita focado em autores brasileiros, projetado para oferecer um ambiente de "Tecnologia Calma" (Calm Tech), livre de distrações e focado na excelência linguística e na soberania do autor. O projeto se diferencia pela integração de ferramentas de análise profunda da língua portuguesa e pela proteção da autoria humana contra a geração em massa por IA.

---

## 2. Identidade Visual (Vereda Design System)
*   **Estética:** "Papel e Tinta", minimalista, sofisticada e serena.
*   **Cores:** 
    *   Primária: #2E4D43 (Verde Vereda - remete à mata e ao sertão).
    *   Fundo: #FDFCFB (Off-white/Creme - reduz o cansaço visual).
    *   Acento: Tons terrosos e pastéis literários para marcação de texto.
*   **Tipografia:** 
    *   Serifada: Palatino ou similar (para o corpo do texto, visando legibilidade).
    *   Sans-serif: Inter ou system-ui (para interfaces e ferramentas).

---

## 3. Módulos e Funcionalidades Core

### A. O Editor Inteligente (Escrita e Foco)
*   **Modo Foco Dinâmico:** As barras laterais colapsam automaticamente ao iniciar a digitação e reaparecem em pausas ou via botão manual.
*   **Modo Leitor Imersivo:** 
    *   Tema claro (papel).
    *   **Régua de Foco:** Máscara de opacidade com abertura central vazada para guiar a leitura linha a linha.
    *   **Autoscroll:** Controles de Play/Pause e ajuste de velocidade para revisão rítmica.
*   **Gestão de Documentos:** Estrutura em árvore (Outliner) para capítulos, cenas e "Bíblia do Projeto" (notas/personagens).

### B. PoHW — Proof of Writing (Prova de Autoria Humana)
*   **Rastreador de Cadência:** Monitora a latência entre teclas (Keystroke dynamics).
*   **Regra de Ouro:** Apenas eventos `isTrusted` com intervalo entre 30ms e 2000ms são considerados orgânicos.
*   **Certificação:** Gera um arquivo `.proof.json` com o log de eventos e um Hash SHA-256 que vincula o texto original ao processo de criação.
*   **Tribunal de Autoria:** Interface para editores e autores validarem a integridade humana do manuscrito.

### C. Academia Gramatical (Análise Linguística)
*   **Níveis de Análise:** Morfologia, Sintaxe e Semântica.
*   **Inspeção Lexical:** Ao selecionar uma palavra, o sistema exibe sua classe gramatical (conforme as 10 classes do PT-BR) com explicações "Estilo Globoplay" (amigáveis) seguidas de definições técnicas rigorosas.
*   **Métricas de Texto:** 
    *   Legibilidade Flesch-BR.
    *   Gráfico de Ritmo (variação de tamanho de períodos).
    *   Densidade de Classes (nominal vs. verbal).

### D. Organize-se (Planner Literário)
*   **Timeline Spine:** Visualização vertical dos dias do ano.
*   **Event Pills:** Notas coloridas integradas à linha do tempo.
*   **Heatmap de Produtividade:** Régua de meses com indicadores de volume de escrita.
*   **Feriados Brasileiros:** Integração automática de datas nacionais.

---

## 4. Estratégia de Mercado e Mentoria
*   **Mapeamento de Persona Literária:** Ferramenta que analisa o corpus (texto) do autor para sugerir perfis de leitores ideais e estratégias de recrutamento de leitores beta.
*   **Trilha do Lançamento:** Guia de Personal Branding e marketing em parallax, ensinando o equilíbrio entre o alcance das grandes redes (X/Twitter) e a soberania das redes federadas.
*   **Santuário & Neurociência:** Mentor de produtividade integrado com temporizadores baseados em ciclos de foco e conselhos para proteção da voz autoral.

---

## 5. Especificações Técnicas para Implementação
*   **Frontend:** HTML5/CSS3 moderno, voltado para conversão em componentes React/JSX.
*   **Persistência:** O projeto deve ser **Offline-First**. Sincronização inicial via service workers; armazenamento local de JSON (manuscritos + logs de prova).
*   **Exportação:** Saída padronizada conforme as regras do objeto livro (Capa, Miolo, Epígrafe, Colofão, etc.).
*   **Arquitetura:** Template base unificado (`vereda-integrado.html`) que serve como casca para todos os módulos.
