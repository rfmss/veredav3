# Acesso e Monetização do Vereda

Data: 2026-04-30  
Status: planejado, não implementado no app ativo.

## Decisão

O Vereda deve estudar monetização e controle de acesso sem trair o princípio local-first. A proposta de três trilhas é boa como produto, mas ainda não deve ser inserida no PWA atual porque o app não tem backend, login, banco, sessão, JWT ou checkout.

Os arquivos externos analisados (`accessHelpers.js`, `accessGuard.js`, `mercadopago.js`, `approve-social.js`) assumem uma arquitetura Next.js/Prisma/API que não existe neste repositório. Eles servem como referência conceitual, não como código pronto para dissolver.

## Trilhas propostas

### Trilha Pública de Formação

Para estudantes, professores e instituições verificadas.

Recomendação:

- liberar por e-mail institucional apenas depois de confirmação real de e-mail;
- não usar `.org.br` como regra automática ampla, porque qualquer organização pode registrar esse domínio;
- tratar exceções manualmente.

### Trilha Criativa

Acesso gratuito por tarefa criativa.

Proposta de rito:

- frase ou parágrafo sobre por que escrever importa no Brasil de hoje;
- vídeo curto lendo texto próprio ou referência autorizada;
- post/link público marcando o projeto;
- consentimento explícito para análise manual;
- consentimento separado se houver galeria pública.

Recomendação LGPD/produto:

- começar com links públicos, não upload de arquivos;
- deixar claro que vídeo/foto são dados pessoais;
- criar limite semanal de aprovações;
- não aceitar material de menores sem regra específica.

### Trilha Profissional

Pagamento único de R$ 29,90 para acesso vitalício à Vereda v3 local.

Recomendação de promessa:

- "Acesso vitalício à Vereda v3 e suas atualizações locais";
- não prometer serviços futuros com custo variável, como IA, nuvem ou processamento remoto;
- se existir Vereda IA/Cloud no futuro, ela deve ser plano separado.

## Arquitetura recomendada

Não colocar backend dentro do PWA atual sem decisão estrutural.

Caminho sugerido:

1. manter este repositório como app local-first;
2. criar backend separado, por exemplo `vereda-cloud`, `api/` ou serviço serverless;
3. backend cuida de usuário, pagamento, aprovação criativa e licença;
4. PWA recebe uma licença assinada e cacheável;
5. recursos offline validam licença localmente, sem depender de rede a cada abertura;
6. qualquer recurso caro ou remoto valida plano no servidor.

## Modelo de dados futuro

Campos mínimos de usuário:

- `id`
- `email`
- `email_verified`
- `plan_status`: `free`, `pending_social`, `social`, `pro`
- `access_type`: `academic`, `creative`, `lifetime`
- `subscription_date`
- `verification_metadata`
- `role`: `user`, `admin`

Entidades mínimas:

- `User`
- `Payment`
- `SocialApplication`
- `License`
- `AuditLog`

## Segurança

O frontend nunca deve ser a fonte de verdade para plano pago.

Recomendações:

- validar pagamentos e planos no servidor;
- não confiar em `hasProAccess` local para recursos remotos;
- gerar licença assinada para uso offline;
- validar valor, moeda, usuário e idempotência no webhook;
- não tratar obfuscação como segurança.

## Mercado Pago

O código externo de webhook precisa revisão antes de uso.

Recomendações:

- seguir a assinatura oficial `x-signature` no formato `ts=...,v1=...`;
- usar `x-request-id` e `data.id` no manifesto de validação;
- validar `payment.status === "approved"`;
- validar valor `29.90` e moeda `BRL`;
- usar metadata ou referência externa para ligar pagamento ao usuário, não apenas e-mail do pagador;
- garantir idempotência por `paymentId`.

Fonte inicial: https://www.mercadopago.com.br/developers/en/docs/checkout-pro/payment-notifications

## Etapa de entrada no roadmap

Esta frente entra depois das fases de fechamento do produto local:

1. confiança imediata;
2. `.docx` e submissão editorial;
3. onboarding e descoberta;
4. projeto literário real;
5. offline mais honesto;
6. **acesso, monetização e licença offline**.

Motivo: monetização antes de acabamento aumenta suporte, frustração e risco reputacional. O preço justo funciona melhor quando o produto já se defende sozinho.

## Critério para começar

Só iniciar implementação quando:

- `.docx` básico estiver entregue;
- cards e botões vazios estiverem resolvidos;
- onboarding mínimo existir;
- decisão de backend estiver tomada;
- política de privacidade e consentimento da tarefa criativa estiverem escritos.

## Código externo analisado

Arquivos recebidos:

- `/home/rafamass/Downloads/accessHelpers.js`
- `/home/rafamass/Downloads/accessGuard.js`
- `/home/rafamass/Downloads/mercadopago.js`
- `/home/rafamass/Downloads/approve-social.js`

Status:

- `accessHelpers.js`: aproveitável como conceito; ajustar domínio acadêmico e exigir e-mail verificado.
- `accessGuard.js`: depende de backend inexistente; guardar para futura API.
- `mercadopago.js`: conceito correto, validação de assinatura precisa revisão oficial.
- `approve-social.js`: conceito correto, depende de banco/admin/consentimento.
