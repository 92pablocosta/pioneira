// Pioneira — Visual Variations
// Each component is a self-contained artboard with full markup.
// All styles live in index-variations.html, scoped by parent class.

const WA = "https://wa.me/5583999299005?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Pioneira%20e%20queria%20tirar%20uma%20d%C3%BAvida.";

/* ===== shared icons ===== */
const IconWA = ({size = 18}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.5 14.4l-2.6-1.3c-.4-.2-.8-.1-1 .2l-.8.9c-.2.2-.5.3-.8.1-.9-.5-1.9-1.1-2.6-2-.7-.7-1.3-1.7-1.8-2.6-.1-.3 0-.6.2-.8l.9-.8c.3-.2.4-.6.2-1L7.9 4.5c-.2-.4-.6-.6-1-.5l-1.4.4c-.4.1-.7.5-.7 1 .1 1.5.7 5 4.1 8.4 3.4 3.4 6.9 4 8.4 4.1.5 0 .9-.3 1-.7l.4-1.4c.1-.4-.1-.8-.5-1zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.4 5L2 22l5.1-1.4c1.5.8 3.1 1.3 4.9 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
  </svg>
);
const IconClock = ({size = 18}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const IconCheck = ({size = 18}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const IconX = ({size = 18}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/>
  </svg>
);
const IconPin = ({size = 18}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const IconCam = ({size = 28}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>
  </svg>
);
const IconWash = ({size = 22}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="13" r="6"/><circle cx="12" cy="13" r="2.5"/><line x1="6" y1="3" x2="18" y2="3"/>
  </svg>
);
const IconDry = ({size = 22}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16v16H4z"/><path d="M9 13a3 3 0 0 0 6 0c0-2-3-5-3-5s-3 3-3 5z"/>
  </svg>
);

/* shared sticky-feel mini nav for hero artboards */
const MiniNav = () => (
  <div className="mininav">
    <a className="logo">Pioneira<small>Autosserviço · Sousa-PB</small></a>
    <nav className="mininav-links">
      <span>Como funciona</span>
      <span>Preços</span>
      <span>Por que nós</span>
      <span>Onde estamos</span>
    </nav>
    <a className="nav-cta"><IconWA size={14}/> WhatsApp</a>
  </div>
);

/* ===== HERO A — Editorial Type ===== */
const HeroA = () => (
  <div className="ab heroA">
    <MiniNav/>
    <div className="stage">
      <div>
        <span className="eyebrow-pill">
          <span className="badge">1ª</span>
          A primeira lavanderia de autosserviço de Sousa-PB
        </span>
        <h1>
          Tudo pronto<br/>
          em <em>75 minutos</em>.<br/>
          Por <span className="price-token">
            <span className="cur">R$</span>
            <span className="num">15</span>
            <span className="cents">,90</span>
          </span>
        </h1>
      </div>
      <div className="bottom-row">
        <p className="sub">
          Lave ou seque pelo mesmo preço. OMO, Comfort e Alvejante já inclusos.
          Sem espera, sem complicação.
        </p>
        <div className="ctas">
          <a className="btn btn-whats"><IconWA/> Falar no WhatsApp</a>
          <a className="btn btn-ghost">Como funciona</a>
        </div>
        <div></div>
        <div className="trust">
          <span><IconClock size={16}/> Tudo em <b>75 min</b></span>
          <span>·</span>
          <span>OMO, Comfort & Alvejante <b>inclusos</b></span>
          <span>·</span>
          <span>Bairro <b>Estreito</b>, Sousa-PB</span>
        </div>
      </div>
    </div>
  </div>
);

/* ===== HERO B — Photo-led ===== */
const HeroB = () => (
  <div className="ab heroB">
    <MiniNav/>
    <div className="stage">
      <div className="left">
        <span className="kicker">1ª de Sousa-PB · Autosserviço</span>
        <h1>Lave ou seque<br/>em até <em>40 min</em>.</h1>
        <p className="sub">
          Tudo pronto pra dobrar e guardar em 75 minutos. Você usa,
          paga R$ 15,90 e leva sua roupa pronta pra casa.
        </p>
        <div className="ctas">
          <a className="btn btn-whats"><IconWA/> Falar no WhatsApp</a>
          <a className="btn btn-ghost">Como funciona</a>
        </div>
        <div className="meta">
          <div>
            <div className="l">Ciclo</div>
            <div className="v">R$ 15,90<small>por máquina</small></div>
          </div>
          <div>
            <div className="l">Combo</div>
            <div className="v">75 min<small>lavar + secar</small></div>
          </div>
          <div>
            <div className="l">Inclusos</div>
            <div className="v">OMO · Comfort<small>e Alvejante</small></div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="photo-slot">
          <div className="icon"><IconCam/></div>
          <div className="label">
            Foto da fachada da loja
            <small>placeholder — substituir por imagem real</small>
          </div>
        </div>
        <div className="price-card">
          <div>
            <span className="cur">R$</span>
            <span className="num">15,90</span>
          </div>
          <div className="lbl">
            Por ciclo
            <b>Lave OU seque</b>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ===== HERO C — 75-Minute Timeline ===== */
const HeroC = () => (
  <div className="ab heroC">
    <MiniNav/>
    <div className="stage">
      <div className="top">
        <h1>De roupa suja<br/>pra <em>pronta no armário</em>.</h1>
        <div className="right-col">
          <p className="sub">
            Lavagem completa, secagem e tudo embaixo de uma hora e quinze.
            OMO, Comfort e Alvejante inclusos no preço — você não traz nada.
          </p>
          <div className="ctas">
            <a className="btn btn-whats"><IconWA/> Falar no WhatsApp</a>
            <a className="btn btn-ghost">Ver preços</a>
          </div>
        </div>
      </div>

      <div className="timeline">
        <div className="tl-head">
          <span className="label">Um ciclo completo</span>
          <span className="total">75<small>min</small></span>
        </div>
        <div className="tl-bar">
          <div className="seg-wash"><IconWash size={18}/> Lavagem · 35 min</div>
          <div className="seg-rest">·</div>
          <div className="seg-dry"><IconDry size={18}/> Secagem · 40 min</div>
        </div>
        <div className="tl-ticks">
          <span>0 min</span>
          <span>25 min</span>
          <span>50 min</span>
          <span>75 min</span>
        </div>
        <div className="price-strip">
          <div className="num">R$ 15,90<small>por ciclo</small></div>
          <div className="desc">
            Mesmo preço pra <b>lavar</b> ou pra <b>secar</b>. O combo <b>lavar + secar sai R$ 31,80</b>.
            Sem taxa, sem cadastro, sem mensalidade.
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ===== HERO B² — REVISED: Deixe e Retire primary + Autosserviço secondary ===== */
const HeroB2 = () => (
  <div className="ab heroB heroB2">
    <MiniNav/>
    <div className="stage">
      <div className="left">
        <span className="kicker">Lavanderia completa · Sousa-PB</span>
        <h1>Deixa que <em>a gente lava</em>.<br/>Ou faz você mesmo.</h1>
        <p className="sub">
          Sua roupa lavada, dobrada e embalada — ou as máquinas pra você usar
          no seu tempo. <b>Duas formas</b> de resolver a roupa suja em Sousa-PB.
        </p>

        <div className="paths">
          <div className="path primary">
            <span className="pri">Mais escolhido</span>
            <div className="pre">Deixe e Retire</div>
            <div className="name">A gente lava pra você</div>
            <div className="desc">Traz, deixa, busca pronto. Lavada, dobrada e embalada.</div>
            <div className="row">
              <b>Sob consulta</b>
              <span className="meta">? horas</span>
            </div>
          </div>
          <div className="path">
            <div className="pre">Autosserviço</div>
            <div className="name">Você usa as máquinas</div>
            <div className="desc">Pra horário livre, fim de semana ou madrugada.</div>
            <div className="row">
              <b>R$ 15,90</b>
              <span className="meta">75 min</span>
            </div>
          </div>
        </div>

        <div className="ctas-top">
          <a className="btn btn-whats"><IconWA/> Fazer orçamento</a>
          <a className="btn btn-ghost">Ver autosserviço</a>
        </div>
      </div>

      <div className="right">
        <div className="photo-slot">
          <div className="icon"><IconCam/></div>
          <div className="label">
            Foto da fachada (ou roupa embalada)
            <small>placeholder — substituir por imagem real</small>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ===== SERVICE MODES — dual-service explainer (Deixe e Retire + Autosserviço) ===== */
const ServiceModes = () => (
  <div className="ab modes">
    <div className="head">
      <span className="eyebrow">Duas formas de usar a Pioneira</span>
      <h2>Você escolhe — <em>a gente faz</em>, ou você faz.</h2>
      <p>Maioria dos nossos clientes deixa pra gente lavar. Quem prefere autonomia (ou chega fora do expediente) usa as máquinas no autosserviço.</p>
    </div>

    <div className="deck">
      <div className="card primary">
        <span className="ribbon">Deixe e Retire · Mais escolhido</span>
        <h3>A gente lava, dobra<br/>e embala pra você.</h3>
        <p className="lead">
          Você traz a roupa suja dentro do nosso horário, a gente cuida de tudo,
          e você volta pra buscar pronta — embalada e separada.
        </p>
        <div className="flow">
          <div className="step"><span className="num">1</span><span>Você passa na loja e <b>deixa a sacola</b> com a roupa suja.</span></div>
          <div className="step"><span className="num">2</span><span>A gente lava com <b>OMO + Comfort + Alvejante</b>, seca e dobra.</span></div>
          <div className="step"><span className="num">3</span><span>Sua roupa fica <b>embalada em sacos</b>, separada e pronta pra buscar.</span></div>
        </div>
        <div className="specs">
          <div><div className="l">Preço</div><div className="v tbd">Por kg · ?</div></div>
          <div><div className="l">Prazo</div><div className="v tbd">? horas</div></div>
          <div><div className="l">Inclusos</div><div className="v">OMO · Comfort</div></div>
        </div>
        <div className="cta-row">
          <a className="cta"><IconWA size={16}/> Fazer orçamento</a>
        </div>
      </div>

      <div className="card secondary">
        <span className="ribbon">Autosserviço · 24h</span>
        <h3>Use as máquinas<br/>quando quiser.</h3>
        <p className="lead">
          Pra quem prefere fazer no próprio ritmo — fim de semana, noite, ou madrugada.
          Você opera, paga R$ 15,90 e leva pronto.
        </p>
        <div className="flow">
          <div className="step"><span className="num">1</span><span>Chegue com a roupa. <b>Sabão já está incluso.</b></span></div>
          <div className="step"><span className="num">2</span><span>Pague <b>R$ 15,90</b> no display — PIX ou cartão na máquina.</span></div>
          <div className="step"><span className="num">3</span><span>Lave e seque em <b>75 minutos</b>. Saia com tudo pronto.</span></div>
        </div>
        <div className="specs">
          <div><div className="l">Por ciclo</div><div className="v">R$ 15,90</div></div>
          <div><div className="l">Tempo total</div><div className="v">75 min</div></div>
          <div><div className="l">Pagamento</div><div className="v">PIX · Cartão</div></div>
        </div>
        <div className="cta-row">
          <a className="cta">Como funciona</a>
          <a className="cta ghost"><IconPin size={14}/> Onde estamos</a>
        </div>
      </div>
    </div>

    <div className="tbd-note">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="13"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      <span>
        <b>Pendente do cliente:</b> preço do Deixe e Retire (por kg? por peça? por sacola? mínimo?),
        prazo padrão (24h? 48h?), se tem retirada/entrega ou só drop-off, e horário de funcionamento.
        Os campos marcados <i>(? · ?)</i> ficam como placeholder até confirmar.
      </span>
    </div>
  </div>
);

/* ===== PRICING A — Big Number ===== */
const PricingA = () => (
  <div className="ab priceA">
    <div className="head">
      <span className="eyebrow">Preço único</span>
      <h2>Sem letra miúda.</h2>
      <p>Mesmo preço pra lavar ou pra secar. Produtos inclusos. Sem taxa, sem cadastro, sem surpresa.</p>
    </div>
    <div className="display">
      <div className="num-wrap">
        <span className="cur">R$</span>
        <span className="num">15</span>
        <span className="cents">,90</span>
      </div>
      <div className="copy">
        <h3>Por ciclo. <em>Lave OU seque</em>.</h3>
        <ul>
          <li><IconCheck size={18}/><span><b>OMO, Comfort e Alvejante</b> já inclusos</span></li>
          <li><IconCheck size={18}/><span>Lavagem em ~35 min · Secagem em ~40 min</span></li>
          <li><IconCheck size={18}/><span>PIX, cartão de crédito, débito ou dinheiro</span></li>
          <li><IconCheck size={18}/><span>Sem taxa de entrada, sem mensalidade</span></li>
        </ul>
      </div>
    </div>
    <div className="combos">
      <div className="combo">
        <div className="name">Só Lavar</div>
        <div className="price">R$ 15,90</div>
        <div className="time">~35 min</div>
      </div>
      <div className="combo featured">
        <div className="badge">Mais escolhido</div>
        <div className="name">Lavar + Secar</div>
        <div className="price">R$ 31,80</div>
        <div className="time">tudo pronto em 75 min</div>
      </div>
      <div className="combo">
        <div className="name">Só Secar</div>
        <div className="price">R$ 15,90</div>
        <div className="time">~40 min</div>
      </div>
    </div>
  </div>
);

/* ===== PRICING B — Comparison ===== */
const PricingB = () => (
  <div className="ab priceB">
    <div className="head">
      <span className="eyebrow">Pioneira vs. ter máquina em casa</span>
      <h2>Mais barato. Mais rápido. <em>Sem dor de cabeça.</em></h2>
      <p>O custo real de lavar 12 ciclos por mês — sem contar a entrada da máquina.</p>
    </div>
    <div className="compare">
      <div className="col neu">
        <span className="ribbon">Em casa</span>
        <h3>Máquina própria</h3>
        <p className="lead">12 ciclos/mês · consumo médio</p>
        <div className="number">~R$ 240<small>/mês</small></div>
        <ul>
          <li><span className="x"><IconX size={14}/></span>Sabão, amaciante e alvejante por fora</li>
          <li><span className="x"><IconX size={14}/></span>Conta de água e luz no fim do mês</li>
          <li><span className="x"><IconX size={14}/></span>Manutenção quando dá problema</li>
          <li><span className="x"><IconX size={14}/></span>Não seca — pendurar no varal</li>
          <li><span className="x"><IconX size={14}/></span>Investimento inicial de R$ 1.500+</li>
        </ul>
      </div>
      <div className="vs">VS</div>
      <div className="col win">
        <span className="ribbon">Pioneira</span>
        <h3>Lavar + secar aqui</h3>
        <p className="lead">12 ciclos/mês · combo completo</p>
        <div className="number">R$ 190,80<small>/mês</small></div>
        <ul>
          <li><span className="check"><IconCheck size={14}/></span><span><b>OMO, Comfort e Alvejante</b> inclusos</span></li>
          <li><span className="check"><IconCheck size={14}/></span>Zero conta extra de água ou luz</li>
          <li><span className="check"><IconCheck size={14}/></span>Manutenção é por nossa conta</li>
          <li><span className="check"><IconCheck size={14}/></span>Já sai <b>seco e pronto</b> em 75 min</li>
          <li><span className="check"><IconCheck size={14}/></span>Zero investimento. Paga só o que usar.</li>
        </ul>
      </div>
    </div>
    <div className="footnote">
      Estimativa baseada em consumo doméstico médio · sabão, amaciante e energia de uma família de 3 pessoas em Sousa-PB.
    </div>
  </div>
);

/* ===== WHY — 3 pillars with photo slots ===== */
const WhyPillars = () => (
  <div className="ab whyP">
    <div className="head">
      <span className="eyebrow">Por que a Pioneira</span>
      <h2>Três coisas que você só encontra aqui.</h2>
    </div>
    <div className="pillars">
      <div className="pillar">
        <div className="photo">
          <div className="icon-wrap"><IconCam size={24}/></div>
          <div className="ph-label">Foto da fachada<small>placeholder</small></div>
        </div>
        <div className="body">
          <div className="num">01 · Pioneirismo</div>
          <h3>A 1ª de Sousa-PB</h3>
          <p>Estrutura nova, máquinas novas e o conceito de autosserviço que está mudando como Sousa lava roupa. A gente abriu o caminho.</p>
        </div>
      </div>
      <div className="pillar">
        <div className="photo">
          <div className="icon-wrap"><IconCam size={24}/></div>
          <div className="ph-label">Foto das máquinas<small>placeholder</small></div>
        </div>
        <div className="body">
          <div className="num">02 · Velocidade</div>
          <h3>75 min e tá pronto</h3>
          <p>Lava e seca enquanto você toma um café ou resolve outras coisas. De "roupa suja" pra "pronta pro armário" em pouco mais de uma hora.</p>
        </div>
      </div>
      <div className="pillar">
        <div className="photo">
          <div className="icon-wrap"><IconCam size={24}/></div>
          <div className="ph-label">Foto dos produtos<small>placeholder</small></div>
        </div>
        <div className="body">
          <div className="num">03 · Cuidado incluso</div>
          <h3>OMO, Comfort e Alvejante</h3>
          <p>Produtos de marca, dosagem certa, já no preço de R$ 15,90. O cuidado com sua roupa não é opcional aqui — é o padrão.</p>
        </div>
      </div>
    </div>
  </div>
);

/* ===== Improvements ===== */
const Improvements = () => (
  <div className="ab impr">
    <div className="top">
      <h2>O que eu mudaria <em>antes do go-live</em>.</h2>
      <p className="lede">
        Crítica do site atual em três tiers de prioridade. A maior parte é
        substituir elementos genéricos por prova real (fotos, depoimentos)
        e quietar visualmente seções que estão competindo.
      </p>
    </div>

    <div className="grid">
      <div className="note high">
        <span className="tag">Prioridade alta</span>
        <h4>Trocar a CSS-art da máquina por foto real</h4>
        <p>O tambor girando + bolhas no hero é o elemento mais "AI mockup" do site. Uma foto da fachada ou do interior da loja faz mais pela credibilidade que qualquer animação. Já existe placeholder no Hero B.</p>
        <div className="where">→ .hero-visual, .machine, .drum</div>
      </div>

      <div className="note high">
        <span className="tag">Prioridade alta</span>
        <h4>Adicionar prova social cedo</h4>
        <p>O site inteiro repousa na promessa "1ª de Sousa-PB" sem nada que confirme. 2-3 depoimentos curtos (até com foto do Instagram) entre "Como funciona" e "Preços" mudam a conversão. Já está no roadmap — antecipar.</p>
        <div className="where">→ nova seção #depoimentos</div>
      </div>

      <div className="note high">
        <span className="tag">Prioridade alta</span>
        <h4>Reduzir 6 cards de "Por que" pra 3 pilares</h4>
        <p>Seis cards genéricos é mais visual slop. Três pilares fortes com espaço pra foto real ("pioneirismo", "velocidade", "cuidado incluso") são mais memoráveis e funcionam melhor no mobile. Ver variation "Why · 3 pillars".</p>
        <div className="where">→ .why-grid</div>
      </div>

      <div className="note med">
        <span className="tag">Prioridade média</span>
        <h4>Quietar uma das seções escuras</h4>
        <p>Hoje temos features-strip preta, price-hero preto e final-cta preto — três áreas escuras em 1.5 telas. Cada uma pede pra ser "o momento". Sugestão: deixar só o price-hero ou só o final-cta em ink, transformar a features-strip em uma linha mais sutil sobre cream.</p>
        <div className="where">→ .features-strip, .price-hero, .final-cta</div>
      </div>

      <div className="note med">
        <span className="tag">Prioridade média</span>
        <h4>Mostrar comparação de custo</h4>
        <p>O argumento "mais barato que ter máquina" hoje é só um card de "Por que". Transformar isso num bloco visual de comparação (R$ 240 em casa vs. R$ 190 aqui) é prova racional pro pessoal de Sousa que tem a opção da máquina em casa.</p>
        <div className="where">→ ver Pricing B · Comparison</div>
      </div>

      <div className="note med">
        <span className="tag">Prioridade média</span>
        <h4>Sticky "75 min · R$ 15,90" no mobile</h4>
        <p>Depois que o usuário sobe da hero (a maioria vem do Instagram, scroll rápido), perde a âncora de preço. Uma faixa fininha sticky no topo do mobile com "75 min · R$ 15,90 · WhatsApp" aumenta CTR do FAB.</p>
        <div className="where">→ mobile-only, abaixo de .nav</div>
      </div>

      <div className="note low">
        <span className="tag">Polish</span>
        <h4>Pausar o tambor após scroll</h4>
        <p>Se mantiver a animação, ela gira pra sempre — visualmente ruidosa e consome bateria. Pausar quando sai do viewport via IntersectionObserver (animation-play-state: paused).</p>
        <div className="where">→ .drum @keyframes spin</div>
      </div>

      <div className="note low">
        <span className="tag">Polish</span>
        <h4>Schema.org LocalBusiness</h4>
        <p>Já está no roadmap. Pra negócio local em cidade de 60k habitantes, o ganho de SEO orgânico ("lavanderia sousa pb") é desproporcional pro esforço — meia hora de JSON-LD.</p>
        <div className="where">→ &lt;script type="application/ld+json"&gt;</div>
      </div>

      <div className="note low">
        <span className="tag">Polish</span>
        <h4>Open Graph image real</h4>
        <p>OG tags estão lá mas sem og:image. Quando o link da Pioneira é compartilhado no WhatsApp/Insta, aparece em branco. Uma imagem 1200×630 com headline + logo + preço resolve.</p>
        <div className="where">→ &lt;meta property="og:image"&gt;</div>
      </div>
    </div>
  </div>
);

/* ============================================================
   ASSEMBLY
   ============================================================ */
function App() {
  return (
    <DesignCanvas>
      <DCSection id="hero" title="Hero" subtitle="Três direções — drop the CSS-art machine, use real photo slots ou um visual mais informativo.">
        <DCArtboard id="hero-a" label="A · Editorial Type" width={1440} height={820}>
          <HeroA/>
        </DCArtboard>
        <DCArtboard id="hero-b" label="B · Photo-led (com placeholder)" width={1440} height={820}>
          <HeroB/>
        </DCArtboard>
        <DCArtboard id="hero-c" label="C · Timeline de 75 min" width={1440} height={820}>
          <HeroC/>
        </DCArtboard>
      </DCSection>

      <DCSection id="hero-b-revised" title="B² · Revisado — Deixe e Retire + Autosserviço" subtitle="Pivot: o site precisa liderar com Deixe e Retire (65% da receita), não com autosserviço (35%).">
        <DCArtboard id="hero-b2" label="Hero B² · Duas formas de usar" width={1440} height={820}>
          <HeroB2/>
        </DCArtboard>
        <DCArtboard id="modes" label="Service Modes · Deixe e Retire (primary) + Autosserviço" width={1440} height={780}>
          <ServiceModes/>
        </DCArtboard>
      </DCSection>

      <DCSection id="pricing" title="Pricing" subtitle="Confiança no preço como argumento — número confiante ou comparação racional.">
        <DCArtboard id="price-a" label="A · Big Number" width={1440} height={780}>
          <PricingA/>
        </DCArtboard>
        <DCArtboard id="price-b" label="B · Comparison (vs. ter máquina)" width={1440} height={780}>
          <PricingB/>
        </DCArtboard>
      </DCSection>

      <DCSection id="why" title="Por que nós" subtitle="6 cards genéricos → 3 pilares com espaço pra fotos reais.">
        <DCArtboard id="why-pillars" label="3 pillars com photo slots" width={1440} height={760}>
          <WhyPillars/>
        </DCArtboard>
      </DCSection>

      <DCSection id="notes" title="Improvements" subtitle="Crítica do site atual, priorizada.">
        <DCArtboard id="impr" label="Sugestões antes do go-live" width={1440} height={760}>
          <Improvements/>
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
