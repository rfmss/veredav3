# Vereda Design System

Guia de design do Vereda, editor offline-first para escritores brasileiros.

Este documento existe para manter o produto coerente enquanto cresce. Ele deve orientar decisões de interface, linguagem, cores, componentes e validação visual. Quando houver conflito entre novidade e clareza, a clareza vence.

## 1. Norte do Produto

O Vereda e uma ferramenta de trabalho para escrita longa, revisao e organizacao autoral. A interface deve parecer editorial, calma e precisa, nao uma landing page, rede social ou painel corporativo generico.

Principios:

- Escrita em primeiro lugar: a tela deve proteger concentracao, legibilidade e continuidade.
- Brasil sem caricatura: cores, palavras e referencias podem nascer de paisagens e praticas brasileiras, mas sempre com sobriedade.
- Local por padrao: funcoes centrais rodam sem rede e sem IA em runtime.
- Metricas com honestidade: numeros sao numeros; leituras interpretativas devem ser apresentadas como hipoteses.
- Ferramenta, nao vitrine: evitar hero sections, decoracao gratuita, cards excessivos e textos explicando a propria interface.

## 2. Personalidade Visual

Palavras-chave:

- editorial;
- sereno;
- artesanal;
- rigoroso;
- brasileiro;
- offline;
- legivel.

O Vereda deve lembrar uma mesa de escrita bem organizada: papel, margem, tinta, fichas, guias e instrumentos tecnicos discretos. A sofisticacao vem da proporcao, do silencio visual e dos detalhes, nao de efeitos chamativos.

Evitar:

- gradientes ornamentais;
- blobs, orbes e fundos puramente decorativos;
- paletas de uma unica familia cromatica;
- elementos gigantes em areas de trabalho;
- cards dentro de cards;
- texto explicando funcionalidades obvias;
- excesso de sombras, arredondamentos ou badges.

Nota de direcao visual:

- O Vereda pode receber ferramentas com personalidade propria, como RimaLab, Espelho de Voz e Vocabulário Decolonizador, mas cada uma deve continuar parecendo instrumento de trabalho. A inspiracao do `frontend-design/SKILL.md` entra como principio editorial: evitar interface generica de IA, dar ponto de vista ao layout e escolher detalhes visuais que revelem o oficio da ferramenta sem roubar a escrita.

## 3. Layout

Estrutura principal:

- Topbar fixa: marca, abas principais, estado offline, instalacao, paletas, foco e configuracoes.
- Sidebar esquerda: hierarquia, ferramentas e navegacao estrutural.
- Centro: editor, arquivo, biblioteca ou academia.
- Painel direito: analise linguistica e feedback contextual.
- Statusbar: estado de prova de escrita, contagem e salvamento.

Regras:

- A area de escrita sempre deve ter prioridade visual.
- Painel lateral existe para apoiar, nao competir com o texto.
- Sidebars devem poder recolher sem quebrar a composicao.
- Em telas menores, menus e paineis devem ceder espaco ao conteudo principal.
- Secoes de pagina devem ser faixas ou layouts sem moldura; cards ficam para itens repetidos, modais e ferramentas realmente enquadradas.

## 4. Paletas Brasileiras

As paletas comunicam ambientes de escrita inspirados em paisagens brasileiras. Elas nao sao tema decorativo isolado; ajudam a escolher temperatura, contraste e atmosfera.

Paletas atuais:

- Vereda: papel claro, verde profundo e acentos terrosos.
- Cerrado: terra seca, capim-dourado, ipe e areia clara.
- Mata Atlantica: sombra vegetal, musgo, bruma e flor quente.
- Amazonia: rio profundo, nevoa, argila e rosa de entardecer.
- Modos escuros: versoes noturnas derivadas das mesmas familias cromaticas.

Boas praticas:

- Usar variaveis CSS para toda cor estrutural.
- Evitar `#fff` e `#000` hardcoded em componentes.
- Garantir contraste em texto, botoes, estados ativos, graficos e badges.
- Testar cada paleta em Editor, Arquivo, Academia e painel direito.
- Amostras de cor devem ajudar escolha rapida, como no seletor de paletas.

Variaveis principais:

- `--paper`: fundo amplo da experiencia.
- `--surface`, `--surface-low`, `--surface-mid`, `--surface-high`: camadas de UI.
- `--card`: superficies contidas.
- `--topbar-bg`, `--sidebar-bg`, `--overlay-bg`: regioes estruturais.
- `--ink`, `--soft-ink`, `--muted`: texto.
- `--line`: bordas e divisores.
- `--primary`, `--primary-deep`: acao e identidade.
- `--sage`, `--ochre`, `--sienna`, `--cedar`: acentos e graficos.

## 5. Tipografia

O produto usa duas vozes tipograficas:

- Interface: `Inter`, `system-ui`, sans-serif.
- Escrita e titulos editoriais: `Noto Serif`, Georgia, serif.

Regras:

- Texto do editor deve favorecer leitura longa, com tamanho confortavel e entrelinha generosa.
- Controles, menus e metricas usam sans-serif compacta e clara.
- Titulos internos de paineis devem ser menores e mais densos que titulos de pagina.
- Nao escalar fonte com largura de viewport.
- Letter-spacing deve ser `0` na maioria dos textos; usar espacamento so em rotulos pequenos e tecnicos.
- Nunca deixar texto estourar dentro de botoes, abas, cards ou chips.

## 6. Componentes

### Botoes

Usar botoes de texto apenas para comandos claros. Quando houver icone consagrado, usar Material Symbols ou biblioteca existente.

Tipos:

- Icon button: foco, configuracoes, recolher painel, navegacao rapida.
- Text button: instalar, exportar, criar, importar.
- Segmented/tabs: modos e secoes principais.
- Option button: escolha de paleta, filtros, guias.

Estados obrigatorios:

- hover;
- focus visivel;
- active/selected;
- disabled quando aplicavel.

### Cards

Cards devem ser contidos e funcionais:

- documentos no Arquivo;
- guias da Academia;
- blocos de metricas;
- modais e overlays;
- ferramentas com escopo fechado.

Evitar cards como moldura de uma pagina inteira.

Raio:

- Preferir `8px` ou menos.
- Pills podem usar `999px` quando forem badges, chips ou controles pequenos.

### Menus e Popovers

Menus devem abrir por clique ou foco intencional, nao por hover quando isso puder encobrir trabalho.

Regras:

- Fechar ao clicar fora.
- Fechar com `Escape`.
- Indicar estado via `aria-expanded`.
- Nao encobrir informacao critica por acidente.
- Em mobile, reduzir colunas e respeitar largura da tela.

### Graficos e Metricas

Graficos devem ser legiveis antes de serem bonitos.

Regras:

- Usar poucas cores e sempre derivadas da paleta ativa.
- Incluir rotulo numerico quando o grafico for interpretativo.
- Nao usar cor como unico sinal de estado.
- Evitar visual de dashboard chamativo.

## 7. Linguagem de Interface

Tom:

- brasileiro;
- editorial;
- direto;
- acolhedor sem infantilizar;
- tecnico quando necessario, mas com explicacao curta.

Preferir:

- "Guia de escrita" em vez de "template" na interface.
- "Arquivo do escritor" para acervo.
- "Prova de autoria" para PoHW.
- "Ecos possiveis" em vez de "similaridade com autor".
- "Hipotese de leitura" em vez de "diagnostico".

Evitar:

- prometer IA no core;
- dizer que uma metrica prova qualidade literaria;
- jargoes em ingles quando houver termo bom em portugues;
- instrucoes visiveis sobre a propria interface quando um controle claro resolve.

## 8. Acessibilidade e Ergonomia

Regras minimas:

- Todo botao iconico precisa de `aria-label` e `title` quando util.
- Estados de foco devem ser visiveis.
- Contraste deve ser testado em todos os temas.
- Alvos clicaveis devem ter tamanho confortavel.
- Motion deve ser discreto e respeitar `prefers-reduced-motion`.
- Conteudo nao pode ficar inacessivel atras de popovers, paineis ou barras fixas.
- Teclado deve cobrir menus, modais e acoes principais.

## 9. Responsividade

Breakpoints atuais devem preservar a hierarquia:

- Desktop amplo: editor com sidebar e painel direito.
- Desktop medio: permitir recolhimento de paineis.
- Tablet/mobile: priorizar conteudo central, esconder painel direito e transformar navegacao em acesso compacto.

Regras:

- Nunca depender de hover em mobile.
- Menus devem caber em `100vw`.
- Grades devem reduzir colunas antes de comprimir texto.
- Areas de escrita e ferramentas fixas precisam de dimensoes estaveis para evitar saltos.

## 10. Modulos do Produto

### Editor

Experiencia principal. Deve ser silenciosa, confiavel e responsiva.

Prioridades:

- escrita;
- titulo;
- guia selecionado;
- foco;
- contagem e salvamento.

### Arquivo

Ferramenta de retomada e organizacao. Deve ser escaneavel e eficiente.

Prioridades:

- recentes;
- fixados;
- filtros;
- busca;
- metadados;
- exportacao e duplicacao.

### Biblioteca Gramatical

Referencia local e didatica. Deve equilibrar rigor tecnico e clareza.

### Academia

Espaco de aprendizado e ferramentas autorais. Nao deve virar pagina promocional.

Prioridades:

- Guia de Oficios Literarios;
- Espelho de Voz;
- RimaLab para escansao, rima e formas poeticas;
- materiais de revisao, publicacao e estudo;
- checklists persistentes quando implementados.

### Analise Linguistica

Painel auxiliar. Deve mostrar sinais claros sem tomar a tela.

Prioridades:

- termos frequentes;
- distribuicao gramatical;
- legibilidade;
- sugestoes contextuais;
- feedback do guia ativo.

## 11. Motion

Movimento deve comunicar estado, continuidade e resposta.

Usar para:

- abrir e recolher paineis;
- transicoes de view;
- salvamento e progresso;
- menus e popovers;
- modo foco.

Evitar:

- animacao decorativa continua;
- movimentos grandes em ferramentas de escrita;
- efeitos que dificultem leitura.

Duracoes atuais:

- `--motion-quick`: interacoes pequenas.
- `--motion-calm`: paineis e transicoes estruturais.

## 12. Criterios de Pronto Para Design

Antes de encerrar uma mudanca visual:

- Testar Editor, Arquivo, Academia e painel direito.
- Testar pelo menos Vereda, uma paleta clara e uma paleta escura.
- Conferir mobile em largura estreita.
- Verificar hover, foco, estado ativo e `Escape` em menus.
- Rodar checagem sintatica dos arquivos JS tocados.
- Registrar decisoes relevantes no `PRODUCT_LOG.md`.

Checklist rapido:

- Nao ha texto sobreposto.
- Nao ha popover aberto por acidente.
- Nao ha card dentro de card.
- Nao ha cor estrutural fora das variaveis sem motivo.
- A escrita continua sendo o ponto mais importante da tela.
