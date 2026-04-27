---
name: Vereda Design System
colors:
  surface: '#faf9f7'
  surface-dim: '#dadad8'
  surface-bright: '#faf9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f1'
  surface-container: '#eeeeec'
  surface-container-high: '#e8e8e6'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1b'
  on-surface-variant: '#414845'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#727975'
  outline-variant: '#c1c8c4'
  surface-tint: '#45655a'
  primary: '#17362d'
  on-primary: '#ffffff'
  primary-container: '#2e4d43'
  on-primary-container: '#9bbdb0'
  inverse-primary: '#accec1'
  secondary: '#77574b'
  on-secondary: '#ffffff'
  secondary-container: '#ffd4c4'
  on-secondary-container: '#7a594d'
  tertiary: '#482824'
  on-tertiary: '#ffffff'
  tertiary-container: '#623e39'
  on-tertiary-container: '#dbaaa3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c7eadc'
  primary-fixed-dim: '#accec1'
  on-primary-fixed: '#002018'
  on-primary-fixed-variant: '#2e4d43'
  secondary-fixed: '#ffdbce'
  secondary-fixed-dim: '#e7beae'
  on-secondary-fixed: '#2c160c'
  on-secondary-fixed-variant: '#5d4034'
  tertiary-fixed: '#ffdad5'
  tertiary-fixed-dim: '#edbbb3'
  on-tertiary-fixed: '#2f1310'
  on-tertiary-fixed-variant: '#613d38'
  background: '#faf9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e3e2e0'
  background-paper: '#FDFCFB'
  ink-black: '#1A1A1A'
  accent-ochre: '#D4A373'
  accent-sage: '#A3B18A'
  accent-sienna: '#A0522D'
  ui-border: '#E5E1DE'
  focus-mask: rgba(253, 252, 251, 0.85)
typography:
  display-lg:
    fontFamily: notoSerif
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: -0.02em
  body-reading:
    fontFamily: notoSerif
    fontSize: 19px
    fontWeight: '400'
    lineHeight: '1.7'
    letterSpacing: 0.01em
  body-ui:
    fontFamily: inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  caption:
    fontFamily: inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  margin-page: 12vw
  gutter-ui: 24px
  focus-width: 720px
  sidebar-width: 280px
---

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
