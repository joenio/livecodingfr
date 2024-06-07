import{s as U,e as F,n as M}from"./scheduler.aZRR5A_O.js";import{S as W,i as B,g as n,s as a,h as o,x as u,c as p,k as b,l as y,a as l,f as s}from"./index.kYoizZ4A.js";function N(X){let i,H="Une très brève présentation du Teletype",w,c,q='Le <a href="https://monome.org/docs/teletype/" rel="nofollow">Monome Teletype</a> est un module Eurorack <em>open source</em> (relativement cher et rare..) qui embarque un interpréteur pour un petit langage de programmation dédié à la composition algorithmique et au contrôle des synthétiseurs Eurorack. Le Teletype permet aux plus courageux de pratiquer le <em>live coding</em> sans ordinateur, directement au contact de la machine. Un clavier connecté en facade du module constitue l’interface principale pour interagir avec ce dernier. Il est aussi possible de recevoir des signaux (<strong>CV</strong>) et des impulsions  (<strong>Gate</strong>) pour contrôler le déclenchement de scripts ou pour nourrir vos scripts de données externes. Une version <a href="https://vcvrack.com/" rel="nofollow">VCVRack</a> (gratuite !) existe également et autorise le <em>live coding</em> directement depuis ce logiciel.',x,t,S="",I,T,m,R='Le <em>live coding</em> sur le <em>Teletype</em> n’est pas la discipline la plus répandue. Les machines conçues par Monome ont une réputation rarement usurpée de minimalisme et d’austérité. Ce sont des machines conçues pour être programmées, modifiées et étendues par leurs utilisateurs. Il existe une myriade de projets construits autour de ces modules, ce qui inclut par ailleurs de nouvelles extensions physiques (<a href="https://store.bpcmusic.com/products/telexi?variant=28441435083" rel="nofollow">Telexi</a>, <a href="https://store.bpcmusic.com/products/telexo?variant=29458964427" rel="nofollow">Telexo</a>, <a href="https://github.com/attowatt/i2c2midi" rel="nofollow">i2c2midi</a>) ou même des versions alternatives du logiciel à flasher soi-même sur le contrôleur. En raison de ces spécificités, les Teletype peuvent être utilisés comme modules utilitaires, comme outils de composition mais aussi plus rarement… comme outils pour <em>live coder</em> l’intégralité d’un synthétiseur ou d’un système.',C,_,L,d,V="Nouvelle version du firmware Teletype",g,f,$='Le Teletype, depuis l’an passé, n’est plus produit par Monome. Il est toutefois possible de trouver les <a href="https://llllllll.co/t/teletype-hardware-open/27242" rel="nofollow">plans</a> pour en construire soi-même. On peut aussi également contribuer au <a href="https://github.com/monome/teletype" rel="nofollow">code source</a>. On peut facilement trouver ce module à la revente sur internet, aussi bien neuf que d’occasion. En bref, le Teletype continue sa vie et ne semble pas prêt de disparaître. Une nouvelle version du firmware <a href="https://github.com/monome/teletype/releases/tag/v5.0.0" rel="nofollow">vient d’être publiée</a> et apporte une myriade de nouvelles choses :',k,v,O=`- drum ops [Byzero]<br/>
- support for multiple faderbanks [Lightbreaker]<br/>
- I2C2MIDI ops [attowatt / scanner_darkly]<br/>
- new disting ex ops: dual algorithms, EX.M.N#, EX.M.NO#, EX.M.CC# [scanner_darkly]<br/>
- new op CV.GET [scanner_darkly]<br/>
- new op: SCALE0 [scanner_darkly]<br/>
- new ops: $F, $F1, $F2, $L, $L1, $L2, $S, $S1, $S2, I1, I2, FR [scanner_darkly]<br/>
- improved TR.P accuracy [scanner_darkly]<br/>
- all line endings now accepted for USB files [scanner_darkly]<br/>
- basic menu for reading/writing scenes when a USB stick is inserted [Dewb]<br/>
- new ops: CV.CAL and CV.CAL.RESET to calibrate CV outputs [Dewb]<br/>
- new Disting EX ops: EX.CH, EX.#, EX.N#, EX.NO# [scanner_darkly]<br/>
- new dual W/ ops: W/.SEL, W/S.POLY, W/S.POLY.RESET, W/1, W/2 [scanner_darkly]<br/>`,E,h,P="Elle est d’ores et déjà disponible pour VCVRack : la mise à jour se fait automatiquement. Pour ceux qui souhaitent découvrir une nouvelle manière de <em>live coder</em> ou même débuter en étant au plus près de la synthèse, c’est sans doute la bonne chose à faire.";return{c(){i=n("h2"),i.textContent=H,w=a(),c=n("p"),c.innerHTML=q,x=a(),t=n("iframe"),t.innerHTML=S,T=a(),m=n("p"),m.innerHTML=R,C=a(),_=n("br"),L=a(),d=n("h2"),d.textContent=V,g=a(),f=n("p"),f.innerHTML=$,k=a(),v=n("blockquote"),v.innerHTML=O,E=a(),h=n("p"),h.innerHTML=P,this.h()},l(e){i=o(e,"H2",{"data-svelte-h":!0}),u(i)!=="svelte-1kcklcl"&&(i.textContent=H),w=p(e),c=o(e,"P",{"data-svelte-h":!0}),u(c)!=="svelte-la9dvv"&&(c.innerHTML=q),x=p(e),t=o(e,"IFRAME",{title:!0,src:!0,width:!0,height:!0,frameborder:!0,allow:!0,style:!0,"data-svelte-h":!0}),u(t)!=="svelte-y1vehx"&&(t.innerHTML=S),T=p(e),m=o(e,"P",{"data-svelte-h":!0}),u(m)!=="svelte-1dwpoyj"&&(m.innerHTML=R),C=p(e),_=o(e,"BR",{}),L=p(e),d=o(e,"H2",{"data-svelte-h":!0}),u(d)!=="svelte-w8a9k4"&&(d.textContent=V),g=p(e),f=o(e,"P",{"data-svelte-h":!0}),u(f)!=="svelte-1xttz17"&&(f.innerHTML=$),k=p(e),v=o(e,"BLOCKQUOTE",{"data-svelte-h":!0}),u(v)!=="svelte-cprp7p"&&(v.innerHTML=O),E=p(e),h=o(e,"P",{"data-svelte-h":!0}),u(h)!=="svelte-elpw0p"&&(h.innerHTML=P),this.h()},h(){b(t,"title","Teletype"),F(t.src,I="https://player.vimeo.com/video/129271731?h=0070353db0&color=ff7700&title=0&byline=0&portrait=0")||b(t,"src",I),b(t,"width","640"),b(t,"height","360"),b(t,"frameborder","0"),b(t,"allow","autoplay; fullscreen; picture-in-picture allowfullscreen"),y(t,"display","block"),y(t,"margin-left","auto"),y(t,"margin-right","auto"),y(t,"margin-top","20px"),y(t,"margin-bottom","20px")},m(e,r){l(e,i,r),l(e,w,r),l(e,c,r),l(e,x,r),l(e,t,r),l(e,T,r),l(e,m,r),l(e,C,r),l(e,_,r),l(e,L,r),l(e,d,r),l(e,g,r),l(e,f,r),l(e,k,r),l(e,v,r),l(e,E,r),l(e,h,r)},p:M,i:M,o:M,d(e){e&&(s(i),s(w),s(c),s(x),s(t),s(T),s(m),s(C),s(_),s(L),s(d),s(g),s(f),s(k),s(v),s(E),s(h))}}}const D={title:"Teletype 5.0",author:"Raphaël Maurice Forment",date:"2024-03-02"};class z extends W{constructor(i){super(),B(this,i,null,N,U,{})}}export{z as default,D as metadata};