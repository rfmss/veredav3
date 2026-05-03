# Auditoria de Templates — Vereda
**Data:** 2026-05-03 | **Arquivo:** `template-engine.js` (1.388 linhas)

---

## Panorama: 37 templates, 10 ofícios

| Ofício | Total | Ricos (multi-step) | Rasos (1 step) |
|---|---|---|---|
| Ficção | 8 | 1 | 7 |
| Roteiro | 6 | 1 | 5 |
| Poesia | 4 | 1 | 3 |
| Não ficção | 4 | 2 | 2 |
| Jornalismo | 4 | 2 | 2 |
| Comercial e técnica | 7 | 0 | 7 |
| Estudo e vestibular | 8 | 8 | 0 |
| Mercado editorial | 6 | 6 | 0 |
| Objeto livro | 6 | 6 | 0 |
| Direitos autorais | 3 | 3 | 0 |
| **Total** | **56*** | **30** | **26** |

> *O python extraiu 37 IDs sem duplicatas. Os restantes são guides aninhados via `roteiroGuides()`, `poesiaGuides()` etc., que chegam a ~56 quando expandidos.

---

## Diagnóstico central: dois cidadãos no mesmo produto

O `template-engine.js` tem dois padrões de template:

### Tier 1 — Templates completos (9 templates)
`roteiro-tv`, `flash-fiction`, `cronica`, `conto-curto`, `ensaio`, `romance-comercial`, `poesia-lirica`, `reportagem`, `newsletter-editorial`

- **Onboarding**: 3 a 4 passos, com eyebrow, tip, lista de itens, dois botões
- **Texto-guia**: 5 a 8 seções nomeadas e específicas para o formato
- **Experiência**: o usuário aprende o formato enquanto decide abrir

### Tier 2 — Templates via `createGuide()` com dados ricos (20 templates)
ENEM, mercado editorial, objeto livro, ficção expandida

- **Onboarding**: 1 passo genérico: *"[Label] tem uma lógica própria."*
- **Texto-guia**: varia — ENEM é rico, ficção expandida é adequado, mercado/objeto usam estrutura genérica
- **Experiência**: instrucional, mas sem onboarding graduado

### Tier 3 — Templates via `guide()` shortcut (23 templates)
Roteiro (5), Poesia (3), Não ficção (2), Jornalismo (2), Comercial (7), + herdados

- **Onboarding**: 1 passo genérico
- **Sections**: sempre as mesmas 5 genéricas: *"Pergunta do ofício / Material central / Estrutura / Leitor / Fecho"*
- **Texto gerado**: sempre igual — `## Pergunta do ofício / ## Material central / ## Estrutura`
- **Diferenciador real**: só o `placeholder` (1 linha de modelo de abertura)

---

## Problemas por prioridade

---

### 🔴 P1 — Templates Tier 3 têm texto genérico demais

**Templates afetados:** copywriting, UX writing, roteiro de filme, documentário, dramaturgia, slam, poesia digital, letra de música, crônica cultural, coluna de opinião, ghostwriting, quadrinhos, escrita técnica, conteúdo digital, roteiro para vídeo, memoir, livro-reportagem

**O problema:** O campo `text` desses 23 templates é literalmente:
```
## Pergunta do ofício
[O que este texto precisa fazer?]

## Material central
[Que cena, dado, imagem ou fala sustenta a peça?]

## Estrutura
[Como a forma organiza a leitura?]
```

Um escritor que escolhe "Copywriting" e um que escolhe "Dramaturgia" abrem exatamente a mesma estrutura de texto — só muda o título. O template não ajuda: o usuário precisaria saber o formato antes de usar o guia.

**Impacto:** A proposta do Vereda é "mesa preparada para escrever". Com texto genérico, a mesa está vazia.

**Correção:** Elevar pelo menos os 10 mais usados (roteiro de filme, slam, coluna, copywriting, letra de música, ghostwriting, dramaturgia, critica cultural, memoir, roteiro vídeo) para `text` específico com seções nomeadas para o formato.

---

### 🔴 P2 — Thriller e policial: ausente

O gênero de maior volume comercial em ficção popular brasileira não existe no catálogo.

**Ofícios afetados:** `ficcao`

**Gêneros ausentes:**
- Thriller / suspense psicológico
- Policial e noir brasileiro
- Romance (gênero sentimental) — o `romance-comercial` cobre parcialmente, mas romance sentimental tem lógica própria (HEA, HFN, subgêneros)

**Impacto:** Uma escritora que quer escrever um policial abre "Ficção" e vê: flash, conto, romance comercial, romance literário, ficção científica, fantasia, terror, fanfic. Nada para ela. Vai embora.

---

### 🟡 P3 — Onboarding de 1 passo não educa

Templates Tier 2 e Tier 3 entram com a tela:
> *"Copywriting tem uma lógica própria."*
> *[descrição genérica]*
> Botão: "Criar copywriting"

Não há distinção entre o escritor que conhece o formato e o que nunca escreveu. O Tier 1 resolve isso com passos graduados ("o que é um roteiro?", "como o guia funciona", "antes de abrir"). Os outros ignoram isso completamente.

**Correção priorizada:** Não é necessário fazer todos. Eleve os 5 mais procurados por iniciantes: roteiro de filme, slam, coluna de opinião, letra de música, memoir.

---

### 🟡 P4 — Comercial e técnica tem 7 templates mas todos rasos

`comercial-tecnica` é o ofício com **mais templates** (7) e o que tem **pior qualidade de conteúdo** — todos criados via `guide()` com estrutura genérica. É contraditório.

**Templates afetados:** copywriting, conteúdo digital, UX writing, roteiro para vídeo, ghostwriting, quadrinhos, escrita técnica

Ironicamente, esses formatos têm público amplo fora do ambiente literário (redatores, designers, criadores de conteúdo). São exatamente eles que precisam de mais mão na massa, não menos.

---

### 🟡 P5 — Poesia: 1 formato denso, 3 rasos

O Vereda tem "Poesia lírica" como template completo, mas:
- **Slam**: muito procurado por jovens — template genérico
- **Letra de música**: formato diferente de poesia (tem refrão, métrica cantada, repetição) — texto genérico
- **Poesia digital**: específico para tela e compartilhamento — texto genérico

**Correção:** Esses três merecem `text` específico. Slam em especial merece 2 passos de onboarding (contexto de performance + estrutura de 3 minutos).

---

### 🟢 P6 — Gêneros em falta para crescimento futuro

| Gênero ausente | Ofício | Justificativa |
|---|---|---|
| Thriller / Policial | ficção | Maior venda comercial no Brasil |
| Romance sentimental | ficção | Mercado enorme, lógica própria (HEA) |
| Literatura YA | ficção | Público jovem, Wattpad, Bookstagram |
| Haiku / Soneto | poesia | Formas clássicas procuradas em vestibular |
| Podcast não ficcional | jornalismo | Formato crescente, diferente do ficcional |
| Press release | comercial | Muito procurado por assessores de imprensa |
| Diário de campo | não ficção | Pesquisadores, viajantes, professores |

---

## Pontos fortes confirmados

- **ENEM e vestibular**: profundo e bem estruturado — 8 templates com texto rico, competências detalhadas, projeto de texto. É o melhor conjunto do catálogo.
- **Ficção expandida**: `romance-literario`, `ficcao-cientifica`, `fantasia-brasileira` têm `model` com referências brasileiras reais (Clarice, Murilo Rubião, André Carneiro). Diferencial genuíno.
- **Mercado editorial e objeto livro**: templates técnicos com orientação prática sólida.
- **`guidance.reminders`**: todos os templates têm 3 lembretes relevantes — boa prática mantida.
- **Cobertura por ofício**: 10 oficios representados, sem lacuna total em nenhum.

---

## Plano de ação recomendado

### Sprint 1 — Maior impacto, menor esforço (1 sessão)
- [ ] Elevar `text` de: roteiro de filme, slam, coluna de opinião, letra de música, copywriting
- [ ] Cada um: trocar as 3 seções genéricas por 5-6 seções nomeadas para o formato

### Sprint 2 — Gênero ausente crítico (1 sessão)
- [ ] Criar template completo `policial-noir` em ficção
  - 4 passos de onboarding, 6 seções, placeholder com cena de abertura
- [ ] Criar template completo `romance-sentimental` em ficção

### Sprint 3 — Onboarding para 5 formatos de iniciante (1 sessão)
- [ ] Adicionar 2-3 passos ao: slam, letra de música, memoir, roteiro de filme, dramaturgia

---

## Resumo executivo

| | Número | % do catálogo |
|---|---|---|
| Templates com onboarding completo (Tier 1) | 9 | 16% |
| Templates com conteúdo adequado (Tier 2) | 20 | 36% |
| Templates com texto genérico (Tier 3) | 27 | 48% |

**Quase metade dos templates entrega a mesma estrutura de texto independente do formato escolhido.** A identidade editorial do Vereda — "mesa preparada" — não se sustenta nesses 27.

A boa notícia: o framework está sólido. A função `createGuide()` já aceita `sections`, `reminders` e `text` específicos. Elevar os templates rasos é trabalho de conteúdo, não de arquitetura.
