(()=>{"use strict";var e,t,r,o,a,n={},i={};function d(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={exports:{}};return n[e].call(r.exports,r,r.exports,d),r.exports}d.m=n,e=[],d.O=(t,r,o,a)=>{if(!r){var n=1/0;for(s=0;s<e.length;s++){for(var[r,o,a]=e[s],i=!0,l=0;l<r.length;l++)(!1&a||n>=a)&&Object.keys(d.O).every((e=>d.O[e](r[l])))?r.splice(l--,1):(i=!1,a<n&&(n=a));i&&(e.splice(s--,1),t=o())}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[r,o,a]},d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},d.d=(e,t)=>{for(var r in t)d.o(t,r)&&!d.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,r)=>(d.f[r](e,t),t)),[])),d.u=e=>({4:"Local",9:"Artist",46:"Friend_Topic",71:"Home_Artist",113:"Look",117:"DjCategory",119:"User_Edit",144:"Friend",147:"Home_Playlist",174:"Home_Newest",181:"DailySong",210:"User_Record",238:"Playlist",267:"Setting",268:"Home",281:"Comment_Hot",288:"Search",323:"User",335:"ToplistArtist",373:"ToplistMV",390:"swiper",413:"Cloud",416:"User_Follow",451:"User_Dynamic",456:"Comment",464:"Fm",465:"Friend_My",489:"User_Detail",508:"Ai",631:"Home_Dj",737:"Love",741:"Home_Recommend",774:"User_Fans",779:"Home_Toplist",891:"Dj",923:"Exclusive",925:"User_Binding",942:"Download",945:"Video",951:"Sublist",983:"AllMV"}[e]+"."+{4:"32de4151",9:"1f217b40",46:"1c9dae3f",71:"d4b39d32",113:"29c70ba8",117:"e8bedad8",119:"a532fe5a",144:"17337cc3",147:"73afc81e",174:"7fb97918",181:"b6bff89d",210:"b2a231d8",238:"4a14ea52",267:"44c017bf",268:"bf40e429",281:"8467b106",288:"cc643de0",323:"011c1619",335:"10b8535f",373:"1c4f4194",390:"13321ca1",413:"0a860e74",416:"8cb3e89a",451:"7c804db9",456:"f3463374",464:"3a3e1ef5",465:"28122830",489:"35b0a83b",508:"8121f781",631:"ee501f48",737:"b4dbd7b1",741:"ab4df822",774:"51f56a51",779:"09bde3dc",891:"18c901b3",923:"31103d0a",925:"a4216a76",942:"1dee5479",945:"5a5bccae",951:"9cfc0c8d",983:"8c864caf"}[e]+".js"),d.miniCssF=e=>({9:"Artist",71:"Home_Artist",119:"User_Edit",147:"Home_Playlist",174:"Home_Newest",216:"vendors",238:"Playlist",267:"Setting",268:"Home",288:"Search",323:"User",335:"ToplistArtist",465:"Friend_My",489:"User_Detail",508:"Ai",631:"Home_Dj",741:"Home_Recommend",779:"Home_Toplist",826:"index",925:"User_Binding",945:"Video"}[e]+"."+{9:"59204228",71:"e19e08b8",119:"f1852e27",147:"36c74dba",174:"3f23bedb",216:"057941e8",238:"b71eb9af",267:"930a2c45",268:"8c5b220b",288:"2757d5e8",323:"4f8ad956",335:"09f0b300",465:"706205cd",489:"20f66032",508:"03c21f94",631:"d7509a4e",741:"70d660f0",779:"8626df63",826:"4c48b382",925:"ce9eb637",945:"8c6c1dc2"}[e]+".css"),d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="wyy:",d.l=(e,o,a,n)=>{if(t[e])t[e].push(o);else{var i,l;if(void 0!==a)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var f=s[c];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==r+a){i=f;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.setAttribute("data-webpack",r+a),i.src=e),t[e]=[o];var u=(r,o)=>{i.onerror=i.onload=null,clearTimeout(b);var a=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(o))),r)return r(o)},b=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),l&&document.head.appendChild(i)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/wyy-pc/",o=e=>new Promise(((t,r)=>{var o=d.miniCssF(e),a=d.p+o;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var a=(i=r[o]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===t))return i}var n=document.getElementsByTagName("style");for(o=0;o<n.length;o++){var i;if((a=(i=n[o]).getAttribute("data-href"))===e||a===t)return i}})(o,a))return t();((e,t,r,o)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=n=>{if(a.onerror=a.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),d=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=d,a.parentNode.removeChild(a),o(l)}},a.href=t,document.head.appendChild(a)})(e,a,t,r)})),a={666:0},d.f.miniCss=(e,t)=>{a[e]?t.push(a[e]):0!==a[e]&&{9:1,71:1,119:1,147:1,174:1,238:1,267:1,268:1,288:1,323:1,335:1,465:1,489:1,508:1,631:1,741:1,779:1,925:1,945:1}[e]&&t.push(a[e]=o(e).then((()=>{a[e]=0}),(t=>{throw delete a[e],t})))},(()=>{var e={666:0};d.f.j=(t,r)=>{var o=d.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(666!=t){var a=new Promise(((r,a)=>o=e[t]=[r,a]));r.push(o[2]=a);var n=d.p+d.u(t),i=new Error;d.l(n,(r=>{if(d.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",i.name="ChunkLoadError",i.type=a,i.request=n,o[1](i)}}),"chunk-"+t,t)}else e[t]=0},d.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[n,i,l]=r,s=0;for(o in i)d.o(i,o)&&(d.m[o]=i[o]);for(l&&l(d),t&&t(r);s<n.length;s++)a=n[s],d.o(e,a)&&e[a]&&e[a][0](),e[n[s]]=0;d.O()},r=self.webpackChunkwyy=self.webpackChunkwyy||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),d.O()})();