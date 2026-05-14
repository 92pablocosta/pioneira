# CLAUDE.md — Pioneira Landing Page

Contexto para o Claude Code ao trabalhar neste projeto.

---

## Projeto

Landing page de **Pioneira — Lavanderia de Autosserviço**, primeira lavanderia self-service de **Sousa-PB**. Site institucional simples focado em conversão local (WhatsApp + tráfego do Instagram @pioneiralavanderiapb).

**Público-alvo:** moradores de Sousa-PB e região, faixa local. A maioria chega via Instagram, então o mobile precisa estar impecável.

**Objetivo de negócio:** levar visitante para WhatsApp ou Google Maps. Não é e-commerce, não tem cadastro, não tem agenda.

---

## Stack

Decisão deliberada: **zero build**, single-file.

- HTML5 + CSS3 + JS vanilla (1 arquivo: `index.html`)
- Google Fonts via CDN (Bricolage Grotesque + Plus Jakarta Sans)
- Google Maps via iframe embed
- Sem npm, sem bundler, sem framework

**Por que:** deploy em GitHub Pages / Netlify drag-and-drop em 2 minutos, edição direta pelo cliente possível, performance excelente em conexão móvel ruim (interior do nordeste).

**NÃO migrar para React/Vue/Next** a menos que apareça requisito real que justifique (ex: catálogo dinâmico, área logada). Hoje não tem.

---

## Estrutura do arquivo

`index.html` é dividido em blocos comentados na ordem de renderização:

```
<head>          metadados, OG tags, fontes, CSS embedado
<nav>           sticky com glassmorphism
<section.hero>  headline + CTA + trust badges + máquina animada em CSS
<.features-strip>  barra preta com 4 benefícios rápidos (último: "Não precisa trazer nada")
<section.how>      como funciona (3 passos enriquecidos) + Cicclo app card abaixo dos steps
<section.services> preço único + 3 combos + card horários Deixe e Retire (.dr-card)
<section.why>      6 cards de diferenciais
<section.location> endereço + Google Maps iframe
<section.final-cta> CTA escuro final
<footer>        navegação + contato + redes sociais
<a.whats-fab>   botão flutuante de WhatsApp
<script>        IntersectionObserver para scroll reveal
```

CSS está dentro de `<style>` no `<head>`, organizado por seção com banners de comentário.

---

## Design System

### Paleta (CSS variables, já definidas em `:root`)

| Token | Hex | Uso |
|---|---|---|
| `--teal-deep` | `#1A5F6E` | textos principais com gradiente, hover de botões |
| `--teal-mid` | `#2D8B96` | links, eyebrows, ícones secundários |
| `--teal-bright` | `#4FB8B5` | check icons, accent no gradiente |
| `--teal-light` | `#7DD3D0` | bolhas, decoração suave |
| `--teal-soft` | `#C5EAE8` | fundo de ícones em cards |
| `--ink` | `#0F2A30` | texto principal, fundos escuros (preço, CTA final) |
| `--ink-soft` | `#2B4248` | texto secundário forte |
| `--gray` | `#5A6B70` | texto descritivo |
| `--cream` / `--paper` | `#FAFBFB` / `#F2F7F7` | fundos claros |
| `--brand-gradient` | `linear-gradient(95deg, ...)` | logo, números de preço, accents do hero |

**Regra:** nunca usar cor hex hardcoded fora das variáveis. Se precisar de cor nova, adiciona em `:root`.

### Tipografia

- **Display (Bricolage Grotesque):** headlines, números, logo, valores de preço
- **Body (Plus Jakarta Sans):** parágrafos, navegação, listas, labels

Não trocar essas fontes. Foram escolhidas pra fugir do "AI slop" genérico (Inter/Roboto).

### Espaçamento / Layout

- Container: `max-width: 1200px`, `padding: 0 24px`
- Seções: `padding: 110px 0` (desktop)
- Breakpoints: **900px** (grid 2col → 1col) e **820px** (nav links somem, ajustes mobile)
- Border radius: `--radius-md` (18px) cards, `--radius-lg` (28px) destaques, `--radius-xl` (36px) hero do preço

### Animações

- Scroll reveal via `IntersectionObserver` + classe `.reveal` (já implementado, só adicionar a classe em novos blocos)
- Bolhas flutuantes no hero (CSS-only, `@keyframes float`)
- Tambor girando (`@keyframes spin`)
- LEDs piscando (`@keyframes pulse`)
- `@media (prefers-reduced-motion: reduce)` desliga tudo — sempre respeitar

---

## Operational Detail (how the business actually works)

Full step-by-step flows (wash + dry), equipment count, Cicclo app features, cycle options, official copy lines, and landing page implications are documented in:

**[`info/business-info.md`](info/business-info.md)**

Consult this file before writing or editing any copy related to "como funciona", pricing context, machine UX, or the Cicclo app. Do not invent operational details — if it's not in `business-info.md` or below, ask Pablo.

---

## Dados do cliente (NÃO ALTERAR sem confirmação)

```
Nome:        Pioneira — Lavanderia de Autosserviço
Cidade:      Sousa-PB
Endereço:    Rua Nestor José Sarmento, Loja 3
Bairro:      Estreito
CEP:         58800-100
Referência:  Em frente à Academia Kfitness
WhatsApp:    (83) 99929-9005   →   wa.me/5583999299005
Instagram:   @pioneiralavanderiapb
Site:        https://pioneiralavanderia.com.br  ✅ ativo

Preço:       R$ 15,90 por ciclo (lavar OU secar)
Combo:       Lavar + Secar = R$ 31,80
Tempos:      Lavagem ~35min · Secagem ~40min · Total 75min
Capacidade:  Até 10kg por ciclo
Inclusos:    OMO, Comfort e Alvejante
Pagamento:   PIX, cartão crédito/débito, dinheiro
Diferencial: 1ª lavanderia de autosserviço de Sousa-PB

Horário:     Acesso livre 6h–22h todos os dias
             Após 22h: acesso 24h via app Cicclo (QR Code na porta de entrada)
```

**Mensagem pré-preenchida do WhatsApp** (codificada em URL):
```
?text=Olá!%20Vim%20pelo%20site%20da%20Pioneira%20e%20queria%20tirar%20uma%20dúvida.
```
Está em 4 lugares (navbar, hero, CTA final, FAB). Se editar, edita nos 4.

---

## Contexto competitivo e modelo de negócio

Informação crítica para decisões de design e copy. Não inventar nem extrapolar além do que está aqui.

### Concorrência em Sousa-PB

| # | Tipo | Status |
|---|------|--------|
| Pioneira | Autosserviço (self-service) — **criadora do conceito "deixe-retire" na cidade** | Operando |
| 2ª | Franquia | Operando |
| 3ª | Butano (empresa local) | Operando |
| 4ª | Grande porte, descrita como "gigante e bem chique", ligada ao grupo Voita (frios) | **Inaugura junho 2026** |

**Implicação de design:** o mercado saiu de monopólio para 4 players em pouco tempo. A 4ª lavanderia terá investimento pesado e infraestrutura sofisticada. O site de Pioneira não pode parecer amador ou genérico — precisa transmitir pioneirismo e confiança com igual qualidade visual.

### Modelo de negócio

- Investimento com capital próprio, sem dívida externa
- **Autossustentável desde o 3º mês** — 100% dos lucros reinvestidos na operação
- Prolabore (retirada de lucro pelo proprietário) previsto apenas a partir de ~2030
- Modelo de renda passiva: mínima intervenção operacional diária do proprietário

**Implicação de copy:** o cliente (Pablo) não precisa de volume urgente para sobreviver — pode posicionar Pioneira com confiança e sem desespero. Tom de liderança de mercado, não de captação agressiva.

### Diferencial histórico

Pioneira **inventou o serviço "deixe-retire" em Sousa-PB** — antes, não existia lavanderia self-service nem drop-off profissional na cidade. Esse pioneirismo é ativo de marca e deve ser explorado no copy quando relevante.

---

## Convenções de código

- **Idioma do conteúdo:** PT-BR (público brasileiro local)
- **Idioma de comentários no código:** EN (clean code, mercado internacional)
- **Indentação:** 2 espaços
- **Aspas em HTML:** duplas; **em JS:** simples
- **Classes CSS:** kebab-case (`.price-hero`, `.why-card`)
- **IDs:** kebab-case PT-BR para seções de âncora (`#como-funciona`, `#precos`, `#por-que`, `#local`)
- **SVG inline:** sempre que possível, com `width`/`height` explícitos. Não usar libs de ícones.

---

## Modificações comuns

### Trocar texto / copy
Editar direto no HTML. Procurar pela string no arquivo.

### Trocar capacidade do cesto
Buscar `10kg` no arquivo. Hoje aparece nos badges do hero, na `features-strip` e no bloco de preço.

### Trocar preço
Buscar `15,90` e `31,80` no arquivo (~6 ocorrências). Editar todas. Confirmar com cliente antes.

### Adicionar nova seção
1. Criar `<section id="nome-pt">` entre seções existentes
2. Usar `.section-head` para título centralizado
3. Adicionar `.eyebrow` (label uppercase pequeno) + `<h2>` + `<p>`
4. Conteúdo dentro de `.container`
5. Adicionar `class="reveal"` nos elementos pra scroll animation
6. Linkar no `<nav>` e no footer

### Logo — estado atual ✅ (já implementado)

**Navbar** usa imagem real via `.logo-img`:
```html
<a href="#" class="logo-img" aria-label="Pioneira — Lavanderia de Autosserviço">
  <picture>
    <source srcset="assets/pioneira-logo-assets/pioneira-logo-transparent-600.webp" type="image/webp">
    <img src="assets/pioneira-logo-assets/pioneira-logo-transparent-600.png" alt="Pioneira — Lavanderia de Autosserviço" height="48">
  </picture>
</a>
```
CSS: `.logo-img img { height: 48px; }` — ajustar altura aqui se necessário.

**Footer** usa ícone (`pioneira-icon-transparent.png`, 34px) + texto CSS branco:
```html
<a href="#" class="logo">
  <img src="assets/pioneira-logo-assets/pioneira-icon-transparent.png" alt="" aria-hidden="true">
  Pioneira
  <small>Autosserviço · Sousa-PB</small>
</a>
```
CSS override no footer: `.footer-brand .logo { background: none; color: white; -webkit-text-fill-color: white; }`

**Assets disponíveis em `assets/pioneira-logo-assets/`:**
- `pioneira-logo-transparent-600.webp/.png` — logo colorida fundo transparente (nav)
- `pioneira-logo-transparent.webp/.png` — versão full-res da mesma
- `pioneira-logo-white-600.webp/.png` — logo fundo branco (não usar em fundo escuro)
- `pioneira-logo-original-white.webp/.png` — logo fundo branco, full-res
- `pioneira-icon-512.png` — ícone quadrado 512px (favicon, etc.)
- `pioneira-icon-transparent.png` — ícone fundo transparente (footer, favicon)

### Adicionar fotos reais da loja
Criar pasta `assets/` e usar `<img src="assets/foto-fachada.jpg" />` com `loading="lazy"` e `alt` descritivo. Pode substituir a "máquina" CSS-art do hero por foto real se ficar bom.

### Trocar mapa de localização
Iframe do Google Maps na seção `.location`. Para atualizar coordenadas exatas, pegar no Google Maps Embed API ou ajustar query string do iframe atual.

---

## O que NÃO fazer

- Não adicionar bibliotecas JS (jQuery, Alpine, htmx, etc) sem motivo concreto
- Não converter para framework (React, Vue, Next) sem requisito real
- Não usar Tailwind ou outro framework CSS — o design system está em CSS vars, manter assim
- Não inventar preços, tempos, capacidade, produtos ou benefícios operacionais. Confirmar com Pablo antes
- Não adicionar pop-ups, modais de "aceite cookies" (não está coletando dado nenhum), nem chatbot fake
- Não usar fontes diferentes de Bricolage Grotesque + Plus Jakarta Sans
- Não remover `prefers-reduced-motion` — acessibilidade não é opcional
- Não usar emojis no conteúdo do site (na copy de marca cliente vai contra o tom limpo). No CLAUDE.md / commits pode

---

## Deploy

**Opção 1 — GitHub Pages:**
```bash
git init
git add .
git commit -m "feat: initial landing page for Pioneira"
gh repo create pioneira-lavanderia --public --source=. --push
# ativar Pages: Settings → Pages → Source: main / root
```

**Opção 2 — Netlify drag-and-drop:** arrastar a pasta para app.netlify.com/drop.

**Opção 3 — Domínio próprio:** registrar em registro.br (`.com.br`) e apontar CNAME pro GitHub Pages ou Netlify.

**Domínio ativo:** `pioneiralavanderia.com.br` — `canonical` e `og:url` já apontam para ele.

---

## Dados do Cicclo App

App de gerenciamento das máquinas. Já integrado no card `.cicclo-card` na seção `#como-funciona`.

```
App Store:   https://apps.apple.com/br/app/cicclo-lavanderia/id1499442397
Google Play: https://play.google.com/store/apps/details?id=com.begin.laundway&pli=1
Ícone:       assets/app-cicclo.png
```

O card tem logo real, 4 feature pills e botões de download (App Store + Google Play) com SVG inline.

### Identidade visual do Cicclo

| Token | Valor | Uso no card |
|---|---|---|
| `--cicclo-purple` | `#6B4E7D` | texto dos pills, SVG icons |
| `--cicclo-purple-light` | `#EDE5F3` | fundo do card (gradiente) |
| `--cicclo-cream` | `#F5EDE8` | cor de texto sobre fundo roxo |

Fundo do card: `linear-gradient(135deg, --cicclo-purple-light → --cicclo-cream 50%)`.
Botões de download mantêm estilo Pioneira (`--ink` + hover `--teal-deep`) — não usar roxo neles.
Hover do card usa `#573f65` (purple escuro — não tem token, hardcoded no hover do `.cicclo-dl-btn`).

---

## Dados do Deixe e Retire

Horários do serviço gerenciado (drop-off). Card `.dr-card` na seção `#precos`, após os combos.

```
Seg à Sex:  9h30–14h e 16h–19h30
Sáb e Dom:  Apenas Autosserviço (sem atendimento para Deixe e Retire)
```

Se horários mudarem, buscar `.dr-card` no HTML e editar os `<p>` dentro dos `.dr-slot`.

---

## Próximas evoluções previstas

1. ~~Trocar logo CSS pelo PNG/SVG real~~ ✅ feito
2. Adicionar fotos da loja (fachada + interior + máquinas)
3. Adicionar seção de depoimentos (quando tiver social proof real)
4. ~~Schema.org LocalBusiness markup para SEO local de Sousa-PB~~ ✅ feito — JSON-LD `LaundryOrDryCleaningService` no `<head>`, com URL, horários e telefone
5. Favicon + manifest — usar `pioneira-icon-512.png` e `pioneira-icon-transparent.png`
6. Google Analytics 4 ou Plausible (privacidade-friendly) se cliente quiser métricas
7. `og:image` — criar imagem de preview social (1200×630px) para WhatsApp/Instagram

---

## Prompting Claude for Design

Best practices when asking Claude to make visual/UX changes to this project:

### What works
- **Set role + context first:** "You are a senior UI/UX designer working on Pioneira, a self-service laundromat landing page targeting working-class mobile users in a small city in Brazil's Northeast. Most visitors arrive via Instagram on 4G."
- **Paste design tokens directly** — the `:root` block from `index.html` — before asking for anything visual
- **Name a specific aesthetic direction**, not a vague adjective. Good: "utilitarian trust — clean like a clinic, warm like a local shop." Bad: "modern" or "clean"
- **Frame around 4 dimensions before any output:** purpose (who, why), tone (pick specific aesthetic), constraints (zero-build, CSS vars only, no libs), differentiation (first self-service laundromat in the city — novelty + trust)
- **Explicitly forbid defaults:** "avoid card grids with drop shadows, avoid Inter/Roboto lookalike layouts, avoid hero patterns with centered headline + two buttons"

### What kills output
- Vague prompts → generic "AI slop" Inter + card grid
- Over-prescriptive step-by-step instructions → Claude pattern-matches to safe defaults instead of solving the problem
- No context → no differentiation

### Template prompt structure
```
Role: senior UX designer, conversion-focused landing pages for local Brazilian businesses.
Product: [brief — 1 sentence]
Audience: [who + how they arrive + device + connection]
Tone: [evocative direction — not adjectives, an image]
Design system: [paste :root block]
Constraint: [stack, no libs, CSS vars only]
Differentiation: [what makes this unique]
Task: [specific ask]
Avoid: [anti-patterns to dodge]
```

---

## Contexto adicional

Este projeto é parte do portfólio público do Pablo (github.com/92pablocosta). Mantém qualidade de produção. Cada commit deve ter mensagem clara em inglês (`feat:`, `fix:`, `style:`, `docs:`, `refactor:`).

Quando em dúvida sobre uma decisão de design ou copy, perguntar ao Pablo antes de mexer. Quando em dúvida sobre estrutura técnica, manter o princípio: **simples, sem build, mobile-first, rápido pra carregar em 4G fraco**.
