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
<section.hero>  headline + CTA + máquina animada em CSS
<.features-strip>  barra preta com 4 benefícios
<section.how>      como funciona (3 passos)
<section.services> preço único + 3 combos
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

Preço:       R$ 15,90 por ciclo (lavar OU secar)
Combo:       Lavar + Secar = R$ 31,80
Tempos:      Lavagem ~35min · Secagem ~40min · Total 75min
Inclusos:    OMO, Comfort e Alvejante
Pagamento:   PIX, cartão crédito/débito, dinheiro
Diferencial: 1ª lavanderia de autosserviço de Sousa-PB
```

**Mensagem pré-preenchida do WhatsApp** (codificada em URL):
```
?text=Olá!%20Vim%20pelo%20site%20da%20Pioneira%20e%20queria%20tirar%20uma%20dúvida.
```
Está em 4 lugares (navbar, hero, CTA final, FAB). Se editar, edita nos 4.

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

### Trocar preço
Buscar `15,90` e `31,80` no arquivo (~6 ocorrências). Editar todas. Confirmar com cliente antes.

### Adicionar nova seção
1. Criar `<section id="nome-pt">` entre seções existentes
2. Usar `.section-head` para título centralizado
3. Adicionar `.eyebrow` (label uppercase pequeno) + `<h2>` + `<p>`
4. Conteúdo dentro de `.container`
5. Adicionar `class="reveal"` nos elementos pra scroll animation
6. Linkar no `<nav>` e no footer

### Trocar logo CSS por imagem real
Substituir os dois `<a class="logo">...` (navbar + footer) por:
```html
<a href="#" class="logo-img"><img src="logo.png" alt="Pioneira" /></a>
```
Adicionar CSS: `.logo-img img { height: 40px; }` (ajustar)

### Adicionar fotos reais da loja
Criar pasta `assets/` e usar `<img src="assets/foto-fachada.jpg" />` com `loading="lazy"` e `alt` descritivo. Pode substituir a "máquina" CSS-art do hero por foto real se ficar bom.

### Trocar mapa de localização
Iframe do Google Maps na seção `.location`. Para atualizar coordenadas exatas, pegar no Google Maps Embed API ou ajustar query string do iframe atual.

---

## O que NÃO fazer

- Não adicionar bibliotecas JS (jQuery, Alpine, htmx, etc) sem motivo concreto
- Não converter para framework (React, Vue, Next) sem requisito real
- Não usar Tailwind ou outro framework CSS — o design system está em CSS vars, manter assim
- Não inventar preços, tempos ou produtos. Confirmar com Pablo antes
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

---

## Próximas evoluções previstas

1. Trocar logo CSS pelo PNG/SVG real (quando o cliente enviar arquivo vetorial)
2. Adicionar fotos da loja (fachada + interior + máquinas)
3. Adicionar seção de depoimentos (quando tiver social proof real)
4. Schema.org LocalBusiness markup para SEO local de Sousa-PB
5. Favicon + manifest (PWA básico)
6. Google Analytics 4 ou Plausible (privacidade-friendly) se cliente quiser métricas

---

## Contexto adicional

Este projeto é parte do portfólio público do Pablo (github.com/92pablocosta). Mantém qualidade de produção. Cada commit deve ter mensagem clara em inglês (`feat:`, `fix:`, `style:`, `docs:`, `refactor:`).

Quando em dúvida sobre uma decisão de design ou copy, perguntar ao Pablo antes de mexer. Quando em dúvida sobre estrutura técnica, manter o princípio: **simples, sem build, mobile-first, rápido pra carregar em 4G fraco**.
