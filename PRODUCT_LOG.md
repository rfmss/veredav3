# Log de Produto e Arquitetura - Vereda

Este arquivo registra decisões importantes tomadas durante a construção do Vereda. A intenção é servir tanto como memória técnica do projeto quanto como matéria-prima para posts futuros no blog do produto.

## 2026-04-27 - App leve, modular e offline

Decidimos manter o `app.js` como um orquestrador da interface e do estado geral da aplicação, evitando que ele acumule regras de domínio.

Na prática, isso significa que o `app.js` deve cuidar de responsabilidades como navegação, persistência local, seleção de manuscritos, atualização da interface, autosave e coordenação entre módulos. Já funcionalidades especializadas devem viver em arquivos próprios. O primeiro exemplo dessa separação foi a criação do `lexical-engine.js`, responsável pelo motor lexical offline da Biblioteca Gramatical.

Essa decisão combina com a natureza do Vereda: um produto offline-first, leve, auditável e sem IA agindo durante o funcionamento. Em vez de depender de serviços externos, o Vereda deve carregar consigo suas ferramentas locais, organizadas em módulos compreensíveis.

Benefícios esperados:

- O código principal permanece mais fácil de ler.
- Cada motor local pode evoluir sem bagunçar a interface.
- A futura migração para componentes ou framework fica menos traumática.
- O produto continua transparente para o usuário: nada de análise invisível em servidor remoto.
- A arquitetura reflete a filosofia do Vereda: soberania do autor, calma técnica e funcionamento local.

Formulação curta para comunicação:

> O Vereda nasce como um aplicativo offline-first: a interface coordena, os motores locais trabalham, e o texto do autor permanece no próprio ambiente do autor.
