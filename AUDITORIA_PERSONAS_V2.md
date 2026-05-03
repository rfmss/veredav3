# Auditoria de Personas — Vereda v2
**Data:** 2026-05-03 | **Nota anterior:** 5.1/10

> Re-auditoria após implementação completa da Fase 0 (produto), Fase 1 (SEO),
> Fase 2 (conteúdo editorial) e exportação .docx.

---

## O que mudou desde a última auditoria

| Item | Antes | Depois |
|---|---|---|
| Botão Configurações | Clicável, sem função | Desativado visualmente + tooltip "Em breve" |
| Personagens/Cenários | "42 perfis / 18 lugares" (falso) | Removido ou estado vazio honesto |
| Prova de Autoria | "0% — parece erro" | Linguagem humana, estado vazio explicado |
| Nomenclatura topo/sidebar | "Autoria" vs "Prova de autoria" | Unificada: "Prova de autoria" |
| Onboarding | Inexistente | Overlay de boas-vindas com 3 opções claras |
| Academia visível | Só se o usuário descobrisse | Toast após 90s de pausa + 7 cards editoriais |
| Exportação .docx | Ausente | Implementada sem biblioteca externa |
| Conteúdo editorial | 2 páginas | 7 páginas + sitemap + linkagem cruzada |
| Linguagem da interface | "manuscrito ativo" (técnico) | "texto em edição" (humano) |
| Tooltip swap_horiz | "Trocar lado" | "Trocar o guia de lado: esquerda ↔ direita" |

---

## 🔪 Crítico Brutal — 7/10 (antes: 5/10)

> O Vereda deixou de ser uma Ferrari escondida na garagem. Agora quando você entra, alguém te recebe. O onboarding é discreto mas funcional — três opções claras, sem blá-blá-blá. O botão que não fazia nada foi finalmente desativado, e a Academia parou de ser um segredo de estado: aparece quando o escritor está parado há um minuto e meio.
>
> O que ainda incomoda: o produto tem 7 guias incríveis de escrita que ficam em páginas separadas do editor. Isso é uma vitrine na rua de uma loja que fica no andar de cima. Alguém que chega pela página de diálogos e quer escrever agora tem que navegar para o editor — isso funciona, mas ainda pode custar usuários. E o .docx entregue por um ZIP OOXML caseiro é admirável tecnicamente, mas o escritor não sabe disso: ele só sabe que baixou um arquivo que abre no Word. Nota subiu, mas tem margem.

**Evoluiu em:** onboarding, interface limpa, conteúdo editorial, .docx
**Ainda pendente:** descoberta das ferramentas da Academia dentro do editor, sincronia entre dispositivos

---

## 💼 Investidor Cético — 7/10 (antes: 5.5/10)

> Em dois meses, o produto passou de "não se vende sozinho" para "tem superfície de descoberta real". 7 páginas de conteúdo editorial com SEO completo, sitemap, canonicals — isso é tração orgânica que não depende de anúncio. O usuário que busca "como escrever diálogos" no Google pode chegar no Vereda sem que o Rafael precise fazer nada.
>
> A retenção melhorou no papel — onboarding existe, botões funcionam, a interface diz o que faz. Mas ainda não tenho dado real de retenção. O Search Console nem foi configurado ainda, então não sabemos quantas impressões as páginas estão gerando. Me liga quando os dados chegarem. A promessa melhorou. O produto merece o investimento em tempo que está recebendo.

**Evoluiu em:** superfície de SEO, conteúdo editorial, interface confiável
**Ainda pendente:** dados reais de uso, Search Console, métricas de retenção

---

## 😤 Usuário Frustrado — 6.5/10 (antes: 4/10)

> Que diferença. Entrei e alguém me perguntou o que eu queria fazer. Não fui jogada no editor vazio sem instrução. Cliquei em "Escrever agora" e fui direto para a página em branco. O Configurações estava cinza — não cliquei, mas também não me irritei.
>
> Depois de uns dois minutos sem digitar, apareceu uma bolinha discreta no canto dizendo que a Academia tinha guias prontos. Cliquei. Vi a seção de leitura editorial com 7 guias de escrita. Tinha um sobre diálogos que eu precisava há semanas.
>
> O que ainda me incomodou: tentei continuar no celular e não tinha nada. O texto ficou no notebook. Sei que posso exportar e importar, mas isso é muita coisa para quem só quer continuar escrevendo. E o .docx funcionou — abriu no Word sem problema. Isso sim era o que eu precisava.

**Evoluiu em:** onboarding, botões confiáveis, Academia descoberta, .docx
**Ainda pendente:** continuidade entre dispositivos (bloqueador real para uso mobile)

---

## 😏 Concorrente Invejoso — 6.5/10 (antes: 6/10)

> Temos que admitir que ficou mais difícil pegar os usuários que abandonam nos primeiros 3 minutos. O onboarding é simples mas eficaz. E agora eles têm 7 páginas de conteúdo editorial com SEO decente — cada uma é uma porta de entrada que nenhum de nós tem em português com essa profundidade editorial.
>
> O que nos salva: eles ainda não têm sincronia entre dispositivos. O escritor que começa no notebook e quer continuar no celular ainda perde o fio. E a Academia ainda não se integra de verdade ao editor — é uma aba separada, não uma sugestão contextual profunda. A vantagem deles é real, mas ainda tem janela.

**Evoluiu em:** conteúdo editorial como diferencial competitivo, onboarding, interface
**Ainda pendente:** sincronia, integração Academia↔editor mais profunda

---

## 🎯 Veredito Unificado — **6.75/10** (antes: 5.1/10)

### Evolução: +1.65 pontos

O Vereda passou da fase "produto com alma escondida" para "produto com alma visível". A primeira experiência agora é digna do que o produto entrega. O conteúdo editorial cria uma superfície de descoberta orgânica que não existia.

### O que ainda bloqueia crescimento

| Prioridade | Problema |
|---|---|
| 🔴 Alta | Sincronia entre dispositivos — usuário perde o texto ao trocar de aparelho |
| 🟡 Média | Academia ainda é destino, não parceira do editor — integração mais profunda |
| 🟡 Média | Search Console não foi configurado — SEO técnico pronto, mas indexação não iniciou |
| 🟢 Baixa | Páginas editoriais não estão linkadas de volta para o conteúdo das ferramentas |

### Pontos fortes consolidados

- `Offline genuíno` `Onboarding funcional` `Interface confiável` `.docx entregue`
- `7 páginas de conteúdo editorial com SEO` `Academia descoberta via toast`
- `Nicho sem concorrência real em PT` `Design editorial consistente`

---

## Comparativo de notas

| Persona | Antes | Agora | Delta |
|---|---|---|---|
| Crítico Brutal | 5.0 | 7.0 | +2.0 |
| Investidor Cético | 5.5 | 7.0 | +1.5 |
| Usuário Frustrado | 4.0 | 6.5 | +2.5 |
| Concorrente Invejoso | 6.0 | 6.5 | +0.5 |
| **Veredito** | **5.1** | **6.75** | **+1.65** |

---

*Próxima re-auditoria recomendada: após configuração do Search Console e primeiros dados de indexação.*
