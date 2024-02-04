import{s as L,n as P}from"../chunks/scheduler.aZRR5A_O.js";import{S as O,i as G,s as b,g as y,r as I,A as V,f as c,c as _,h as S,x as q,u as T,a as g,v as B,d as h,b as F,t as C,w as R,B as M,p as H}from"../chunks/index.AIcdAWo0.js";import{e as w}from"../chunks/each.-oqiv04n.js";import{S as N}from"../chunks/SoftwareCard.4ve1z996.js";import{I as z}from"../chunks/Info.8pLsFJ2C.js";import{s as E}from"../chunks/utils.Tkfr06Vk.js";const J=[{name:"Sardine",creator:"Raphaël Forment",description:"Sardine est un logiciel libre et open source pour Python 3.10+. Sardine transforme Python en un instrument de musique. C'est un framework pour live coder et contrôler du matérial audio depuis Python. Sardine peut se synchroniser à d'autres logiciels ou instances du même logiciel.",image:"https://sardine.raphaelforment.fr/sardine_logo.svg#center",link:"https://sardine.raphaelforment.fr"},{name:"Grimoire",creator:"Guillaume Pelletier-Auger",description:"Grimoire est un logiciel expérimental dédié à l'exploration de nouvelles rencontres possibles entre l'animation, la musique, le dessin, la programmation informatique, la performance audiovisuelle, l'écriture et l'hypertextualité. Avec Grimoire, les artistes peuvent apprendre la programmtion 'in vivo' afin de créer de l'art génératif visuel ou sonore ainsi que des systèmes interactifs.",link:"https://pelletierauger.com/grimoire/",image:"https://pelletierauger.com/images/thumbnails/grimoire.jpg"},{name:"Été",creator:"Raphaël Bastide",description:"Été mélange live coding (écriture musicale temps réel au travers du code) et percussions. Le programme considère le clavier comme un instrument percussif. Le musicien peut écrire des instructions algorithmiques et des instructions percussives très précises au sein du même environnement de programmation. Été est une expérimentation qui essaie de lier dans un même programme le temps dédié à la composition algorithmique et celui dédié à l'improvisation spontanée.",image:"https://gitlab.com/uploads/-/system/project/avatar/35391245/Screenshot_2023-09-19_16-09-44.jpg",link:"https://raphaelbastide.com/ete/"},{name:"Cordelia",creator:"Jacopo Greco d'Alceo",description:"Une méthode, une tendre affection, hiver 2023. Cordelia est un environnement de live coding qui combine Python au moteur audio CSound.",image:"https://avatars.githubusercontent.com/u/92983918?v=4",link:"https://github.com/jacopogrecodalceo/CORDELIA"},{name:"Topos",creator:"Raphaël Forment",description:"Topos est un séquenceur algorithmique expérimental dans le web sequencer programmé par BuboBubo (Raphaël Forment) et Amiika (Miika Alonen). Il est écrit en TypeScript, avec Vite. Ce projet est basé sur le Monome Teletype de Brian Crabtree et Kelli Cain. Nous espérons respecter le même esprit de partage et d'expérimentation que les concepteurs originels ! Comment rendre le Teletype plus accessible tout en étendant ses capacités sur le web ?",image:"https://raphaelforment.fr/img/inline_annotation.png",link:"https://topos.live"},{name:"OSCII",creator:"Adel Faure",description:"OSCII est un logiciel pour dessiner et live coder des visuels en text-mode. OSCII produit également du son grâce à WebAudio.",image:"https://i1.sndcdn.com/avatars-1Kjtq0wbLSNSpNQH-AqRXfQ-t500x500.jpg",link:"https://gitlab.com/adelfaure/oscii"},{name:"TEXTOR",creator:"Adel Faure",description:"Textor est un éditeur graphique en text mode conçu pour être utilisé entièrement au clavier sans aucun menus. Le rendu est basé sur le canvas de JavaScript et le logiciel possède un système de glyphes visuels personnalisé. Textor est également un outil de création musicale, au travers d'une interface WebAudio.",image:"/images/textor.png",link:"https://adelfaure.net/tools/textor/"},{name:"Claude",creator:"Loïc Vital",description:"Claude est un outil pour synchroniser des visuels avec de l'audio dans un contexte de live coding. Claude, pour le moment, est seulement disponible pour un environnement : Sardine. Il peut être utilisé comme un sender, ce qui permet ensuite d'utiliser le Sardine Pattern Language pour écrire des valeurs uniform à envoyer.",image:"https://avatars.githubusercontent.com/u/70104194?v=4",link:"https://github.com/mugulmd/Claude"},{name:"Cascade",creator:"Raphaël Bastide",description:"Cascade est un environnement de live-coding pour le navigateur web. Il transforme les règles du langage CSS en sons !",image:"https://raphaelbastide.com/cascade/website/img/poster.svg",link:"https://raphaelbastide.com/cascade/"},{name:"Biset Regex",creator:"Gibbon Joyeux",description:"Un séquenceur de patterns pour créer des rythmes et des mélodies à partir de texte sur VCVRack 2.0.",image:"https://library.vcvrack.com/screenshots/400/Biset/Biset-Regex.png",link:"https://github.com/gibbonjoyeux/VCV-Biset"}];function $(a,i,o){const s=a.slice();return s[1]=i[o].name,s[2]=i[o].creator,s[3]=i[o].description,s[4]=i[o].image,s[5]=i[o].link,s}function A(a){let i,o;return i=new N({props:{name:a[1],creator:a[2],description:a[3],image:a[4],link:a[5]}}),{c(){I(i.$$.fragment)},l(s){T(i.$$.fragment,s)},m(s,p){B(i,s,p),o=!0},p:P,i(s){o||(h(i.$$.fragment,s),o=!0)},o(s){C(i.$$.fragment,s),o=!1},d(s){R(i,s)}}}function K(a){let i,o,s="Outils",p,l,f,d,u,k="Éditez le site pour rajouter votre outil ! <strong>Toutes les contributions sont acceptées !</strong>",v;l=new z({props:{info:"Si vous souhaitez consulter une liste fréquemment mise à jour de logiciels et d'interfaces pour le <i>live coding</i>, consulter <a href='https://github.com/toplap/awesome-livecoding'>Awesome LiveCoding</a>. Pour élargir un petit peu, consultez également <a href='https://github.com/noteflakes/awesome-music'>Awesome Music</a>.",",":!0,markdown:"false"}});let m=w(a[0]),t=[];for(let e=0;e<m.length;e+=1)t[e]=A($(a,m,e));const j=e=>C(t[e],1,1,()=>{t[e]=null});return{c(){i=b(),o=y("h1"),o.textContent=s,p=b(),I(l.$$.fragment),f=b();for(let e=0;e<t.length;e+=1)t[e].c();d=b(),u=y("p"),u.innerHTML=k,this.h()},l(e){V("svelte-rcoqep",document.head).forEach(c),i=_(e),o=S(e,"H1",{"data-svelte-h":!0}),q(o)!=="svelte-16n948e"&&(o.textContent=s),p=_(e),T(l.$$.fragment,e),f=_(e);for(let r=0;r<t.length;r+=1)t[r].l(e);d=_(e),u=S(e,"P",{"data-svelte-h":!0}),q(u)!=="svelte-1bomrdb"&&(u.innerHTML=k),this.h()},h(){document.title="Outils"},m(e,n){g(e,i,n),g(e,o,n),g(e,p,n),B(l,e,n),g(e,f,n);for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(e,n);g(e,d,n),g(e,u,n),v=!0},p(e,[n]){if(n&1){m=w(e[0]);let r;for(r=0;r<m.length;r+=1){const x=$(e,m,r);t[r]?(t[r].p(x,n),h(t[r],1)):(t[r]=A(x),t[r].c(),h(t[r],1),t[r].m(d.parentNode,d))}for(H(),r=m.length;r<t.length;r+=1)j(r);F()}},i(e){if(!v){h(l.$$.fragment,e);for(let n=0;n<m.length;n+=1)h(t[n]);v=!0}},o(e){C(l.$$.fragment,e),t=t.filter(Boolean);for(let n=0;n<t.length;n+=1)C(t[n]);v=!1},d(e){e&&(c(i),c(o),c(p),c(f),c(d),c(u)),R(l,e),M(t,e)}}}function Q(a){let i=J;return E(i),[i]}class ee extends O{constructor(i){super(),G(this,i,Q,K,L,{})}}export{ee as component};