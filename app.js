
(()=>{
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches,fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
document.documentElement.classList.add('js');const SPA_=document.body.hasAttribute('data-spa'),ct=p=>SPA_?'#/contact/free-audit?pick='+encodeURIComponent(p):'contact.html?pick='+encodeURIComponent(p)+'#free-audit';
const bar=$('.bar'),onS=()=>{const h=document.documentElement.scrollHeight-innerHeight;bar.style.transform=`scaleX(${h>0?scrollY/h:0})`};
addEventListener('scroll',onS,{passive:true});onS();
const toast=m=>{const t=$('#ts');t.textContent=m;t.classList.add('on');clearTimeout(toast.h);toast.h=setTimeout(()=>t.classList.remove('on'),4500)};
$('#y').textContent=new Date().getFullYear();

/* mobile menu */
const mb=$('.mb'),tog=o=>{document.body.classList.toggle('mo',o);mb.setAttribute('aria-expanded',o);mb.setAttribute('aria-label',o?'Close menu':'Open menu')};
mb.onclick=()=>tog(!document.body.classList.contains('mo'));
$$('.nl a').forEach(a=>a.addEventListener('click',()=>tog(false)));
addEventListener('keydown',e=>{if(e.key==='Escape')tog(false)});

if($('#tl')){/* growth system */
const S=[['Understand','Start with the business: audience, offer, market position, competition and the bottleneck limiting growth.',['Research','Positioning','Audience','Objectives'],'Clarity'],
['Build','Turn the strategy into credible digital assets: brand, website, landing pages, content systems and conversion foundations.',['Website','Brand','Content','Conversion'],'Credibility'],
['Reach','Put the right message in front of the right people through organic distribution, paid media, search and targeted campaigns.',['Meta','Google','SEO','Distribution'],'Attention'],
['Convert','Connect attention to action with clear offers, landing experiences, lead capture and a journey that reduces friction.',['Offers','Landing pages','Lead capture','UX'],'Action'],
['Optimize','Use performance signals to see what deserves more investment, what should change and where the customer journey leaks.',['Analytics','Testing','Iteration','Reporting'],'Intelligence'],
['Grow','Feed the intelligence back into the system. The next cycle becomes more informed, more focused and more scalable.',['Compounding','Scale','Retention','Next move'],'Compounding']];
const tl=$('#tl'),pn=$('#pn');let cur=0;
tl.innerHTML=S.map((s,i)=>`<button class="tb" role="tab" id="t${i}" aria-controls="pn" aria-selected="false" tabindex="-1">${s[0]}<span aria-hidden="true">${i+1}/6</span></button>`).join('');
const tabs=$$('.tb',tl);
function pick(i,f){cur=i;tabs.forEach((t,j)=>{t.setAttribute('aria-selected',j==i);t.tabIndex=j==i?0:-1});const s=S[i];
pn.setAttribute('aria-labelledby','t'+i);pn.style.setProperty('--p',(i+1)*60);$('#pd').textContent=(i+1)+'/6';
$('#pt').textContent=s[0];$('#px').textContent=s[1];$('#po').textContent=s[3];$('#pc').innerHTML=s[2].map(c=>`<span>${c}</span>`).join('');if(f)tabs[i].focus()}
tabs.forEach((t,i)=>t.onclick=()=>pick(i));
tl.onkeydown=e=>{const k={ArrowDown:1,ArrowRight:1,ArrowUp:-1,ArrowLeft:-1}[e.key];if(k){e.preventDefault();pick((cur+k+6)%6,1)}};pick(0);

/* packages */
const F=n=>'৳'+Math.round(n).toLocaleString('en-US');let on=true;
const P=[['Grow',7500,'A consistent foundation for businesses ready to maintain their digital presence.',['15 social post designs','3 reels / short videos','Basic Meta Ads management','Basic on-page SEO']],
['Professional',10000,'Content, campaigns and stronger digital visibility working together.',['30 social post designs','5 reels / short videos','Advanced Meta + Google Ads','Technical SEO support'],1],
['Advanced',15000,'Broader multi-channel execution with deeper optimization.',['60 social post designs','8 reels / short videos','Meta, Google &amp; TikTok Ads','On-page, technical &amp; off-page SEO']],
['Enterprise',25000,'Comprehensive digital marketing and ongoing growth management.',['60+ social post designs','10 reels / short videos','Pro and funnel-focused campaigns','Complete SEO + website updates']]];
$('#mg').innerHTML=P.map(p=>`<article class="g pc rv${p[4]?' ft':''}" data-t><h3>${p[0]}</h3><p class="mu">${p[2]}</p><div class="was"></div><div class="pr" data-n="${p[1]}" data-u="/ month"></div><div class="sv"></div><ul>${p[3].map(x=>`<li>${x}</li>`).join('')}</ul><a class="bt${p[4]?' bp':''}" href="${ct(p[0])}">Choose ${p[0]}</a></article>`).join('');
const upd=()=>$$('[data-n]').forEach(e=>{const v=+e.dataset.n,r=e.parentElement;e.innerHTML=F(on?v*.75:v)+` <small>${e.dataset.u}</small>`;$('.was',r).textContent=on?F(v):'';$('.sv',r).textContent=on?'Save '+F(v*.25):''});
upd();
$('#sw').onclick=e=>{on=!on;e.currentTarget.setAttribute('aria-checked',on);upd()};

}
/* reveal on scroll */
$$('.rv,.reveal').forEach((x,i)=>x.style.setProperty('--i',i%4));
if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in','visible');io.unobserve(e.target)}}),{threshold:.1});$$('.rv,.reveal').forEach(x=>io.observe(x))}else $$('.rv,.reveal').forEach(x=>x.classList.add('in','visible'));

/* 3D: hero scene follows the pointer; cards tilt with a light glare */
$$('.outcome,.price-card,.service-card,.work,.about-card,.capability,.insight-card').forEach(c=>c.setAttribute('data-t',''));
const sc=$('#scene'),hero=$('.hro');
if(sc&&!rm){let tx=0,ty=0,cx=0,cy=0,raf=0;
const loop=()=>{cx+=(tx-cx)*.08;cy+=(ty-cy)*.08;sc.style.setProperty('--rx',cy.toFixed(2)+'deg');sc.style.setProperty('--ry',cx.toFixed(2)+'deg');raf=Math.abs(tx-cx)+Math.abs(ty-cy)>.02?requestAnimationFrame(loop):0};
hero.addEventListener('pointermove',e=>{const r=sc.getBoundingClientRect();tx=((e.clientX-r.left)/r.width-.5)*30;ty=-((e.clientY-r.top)/r.height-.5)*22;raf||(raf=requestAnimationFrame(loop))});
hero.addEventListener('pointerleave',()=>{tx=ty=0;raf||(raf=requestAnimationFrame(loop))})}
$$('.g,.glass').forEach(c=>c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;c.style.setProperty('--gx',x*100+'%');c.style.setProperty('--gy',y*100+'%');
if(fine&&!rm&&c.hasAttribute('data-t')){c.style.setProperty('--tx',((.5-y)*10).toFixed(2)+'deg');c.style.setProperty('--ty',((x-.5)*12).toFixed(2)+'deg')}}));
$$('[data-t]').forEach(c=>c.addEventListener('pointerleave',()=>{c.style.setProperty('--tx','0deg');c.style.setProperty('--ty','0deg')}));

/* ===== V6: analytics + consent, lead form, blog filter, router ===== */
const config=window.ECITIZEN_CONFIG||{};
const store={get:k=>{try{return localStorage.getItem(k)}catch(_){return null}},set:(k,v)=>{try{localStorage.setItem(k,v)}catch(_){}}};
  function loadScript(src, id) {
    if (document.getElementById(id)) return;
    const s = document.createElement('script'); s.async = true; s.src = src; s.id = id; document.head.appendChild(s);
  }
  function initTracking() {
    if (store.get('ec_tracking_consent') !== 'granted') return;
    if (config.gtmId) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
      loadScript(`https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(config.gtmId)}`, 'ec-gtm');
    }
    if (!config.gtmId && config.ga4MeasurementId && !window.__ecGA4) {
      window.__ecGA4 = true; window.dataLayer = window.dataLayer || [];
      window.gtag = function(){ dataLayer.push(arguments); };
      gtag('js', new Date()); gtag('config', config.ga4MeasurementId, { anonymize_ip: true });
      loadScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(config.ga4MeasurementId)}`, 'ec-ga4');
    }
    if (config.metaPixelId && !window.fbq) {
      !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', config.metaPixelId); fbq('track', 'PageView');
    }
    if (config.tiktokPixelId && !window.__ecTikTok) {
      window.__ecTikTokId = config.tiktokPixelId;
      !function(w,d,t){w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=['page','track','identify','instances','debug','on','off','once','ready','alias','group','enableCookie','disableCookie'];ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};ttq.load=function(e,n){var r='https://analytics.tiktok.com/i18n/pixel/events.js';ttq._i=ttq._i||{};ttq._i[e]=[];ttq._t=ttq._t||{};ttq._t[e]=+new Date;ttq._o=ttq._o||{};ttq._o[e]=n||{};var s=d.createElement('script');s.type='text/javascript';s.async=!0;s.src=r+'?sdkid='+e+'&lib='+t;var f=d.getElementsByTagName('script')[0];f.parentNode.insertBefore(s,f)};ttq.load(w.__ecTikTokId);ttq.page()}(window,document,'ttq');
      window.__ecTikTok = true;
    }
  }


const tracked=!!(config.gtmId||config.ga4MeasurementId||config.metaPixelId||config.tiktokPixelId),cb=$('.cb');
const cbShow=o=>{cb.hidden=!o;document.body.classList.toggle('cv',o)};
if(tracked&&!store.get('ec_tracking_consent'))cbShow(true);else initTracking();
$$('[data-c]',cb).forEach(b=>b.onclick=()=>{store.set('ec_tracking_consent',b.dataset.c);cbShow(false);if(b.dataset.c==='granted'){initTracking();toast('Thanks. Measurement is on.')}else toast('Saved. Optional measurement stays off.')});
$$('[data-cookie-settings]').forEach(b=>b.onclick=()=>tracked?cbShow(true):toast('No optional tracking is active on this site.'));
const track=n=>{if(window.gtag&&config.ga4MeasurementId)gtag('event',n);if(window.dataLayer&&config.gtmId)dataLayer.push({event:n});if(window.fbq&&config.metaPixelId)fbq('trackCustom',n)};
document.addEventListener('click',e=>{const t=e.target.closest('[data-track]');if(t)track(t.dataset.track)});
if(config.searchConsoleVerification){const m=document.createElement('meta');m.name='google-site-verification';m.content=config.searchConsoleVerification;document.head.append(m)}
$('.skip').onclick=e=>{e.preventDefault();$('#main').focus()};

/* lead form: endpoint when configured, WhatsApp otherwise (no lead is lost) */
const lf=$('#leadForm');
if(lf)lf.addEventListener('submit',async e=>{e.preventDefault();
const b=$('button[type=submit]',lf),o=b.innerHTML;b.disabled=true;b.textContent='Sending…';
const d=Object.fromEntries(new FormData(lf));d.page=location.href;d.submittedAt=new Date().toISOString();
let ok=false;
if(config.leadEndpoint){try{ok=(await fetch(config.leadEndpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(d)})).ok}catch(_){}}
if(ok){lf.reset();toast('Thanks. Your free audit request has been sent.');const ev=d.intent==='free_audit'?'free_audit_requested':'generate_lead';if(window.gtag)gtag('event',ev);if(window.fbq)fbq('track','Lead');if(window.dataLayer)dataLayer.push({event:ev})}
else{const t=`Hello eCitizen Digital, I'm ${d.name}${d.business?' from '+d.business:''}.\nFree audit request: ${d.auditFocus||'overall digital presence'}. Goal: ${d.goal||'not sure yet'}.\n${d.website?'Website / page: '+d.website+'\n':''}${d.message||''}\nPhone: ${d.phone}`;
window.open('https://wa.me/8801313886828?text='+encodeURIComponent(t),'_blank','noopener');
toast(config.leadEndpoint?'We could not send the form, so WhatsApp is opening with your details.':'Opening WhatsApp with your details…')}
b.disabled=false;b.innerHTML=o});
const prefill=qs=>{const p=new URLSearchParams(qs||'').get('pick'),m=$('#message');if(p&&m&&!m.value)m.value='Interested in: '+p};

/* insights filter */
$$('.filter-pill').forEach(p=>p.addEventListener('click',()=>{const v=p.closest('[data-v]')||document;
$$('.filter-pill',v).forEach(x=>{x.classList.toggle('active',x===p);x.setAttribute('aria-pressed',x===p)});
$$('.insight-card',v).forEach(c=>c.hidden=p.dataset.f!=='all'&&c.dataset.cat!==p.dataset.f)}));

/* hash router (single-file build only) */
if(document.body.hasAttribute('data-spa')){
const views=$$('[data-v]'),meta=JSON.parse($('#meta').textContent),main=$('#main');let first=true;
const go=()=>{const[hp,qs]=location.hash.slice(1).split('?');
if(hp&&!hp.startsWith('/')){const el=document.getElementById(hp);if(el)el.scrollIntoView({behavior:rm?'auto':'smooth'});return}
const seg=hp.split('/').filter(Boolean);let r=seg[0]||'home',sub=seg[1]||'';
let v=views.find(x=>x.dataset.v===r);
if(r==='insights'&&sub){const a=views.find(x=>x.dataset.v==='insights/'+sub);if(a){v=a;sub=''}}
v=v||views.find(x=>x.dataset.v==='404');
views.forEach(x=>x.hidden=x!==v);
const k=v.dataset.v,m=meta[k]||meta.home;
document.title=m.t;$('meta[name=description]').content=m.d;
$$('script[data-ld]').forEach(s=>s.remove());
(m.l||[]).forEach(j=>{const s=document.createElement('script');s.type='application/ld+json';s.dataset.ld='';s.textContent=j;document.head.append(s)});
$$('.nl a[data-r]').forEach(a=>a.dataset.r===k.split('/')[0]?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current'));
prefill(qs);
const t=sub&&document.getElementById(sub);
if(t)t.scrollIntoView();else scrollTo({top:0,behavior:'instant'});
if(!first)main.focus({preventScroll:true});first=false};
addEventListener('hashchange',go);go()}
else prefill(location.search);

})();