(self.webpackChunkwyy=self.webpackChunkwyy||[]).push([[456],{3922:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>y});var a=n(2137),r=n(9351),l=n(7757),c=n.n(l),o=(n(8309),n(1249),n(3804)),m=n.n(o),s=n(847),i=n(1216),u=n(5200),d=n(6955),f=n(801),p=n(4561),v=n(6232),h=n(8556),E=n(1059),x={song:{apiDetail:function(e){var t=e.id;return(0,d.VO)({ids:t})},apiComment:d.dV,header:function(e){var t,n=e.detail;return m().createElement("div",{className:"domComment_header"},m().createElement("div",{className:"domComment_infos flex "},m().createElement("div",{className:"cover h-20 rounded overflow-hidden relative"},m().createElement(i.ZP,{className:"h-full"},m().createElement("img",{className:"h-full",src:n.al.picUrl,alt:""})),m().createElement("div",{className:"ico absolute inset-0 m-auto flex-center w-8 h-8 ui_themeColor rounded-full bg-white bg-opacity-90"},m().createElement(u.IconPlayerPlay,{size:16,className:"fill-current"}))),m().createElement("div",{className:"content px-6 py-2"},m().createElement("div",{className:"title text-lg"},n.name),m().createElement("div",{className:"info text-gray-500 mt-2 space-x-5"},m().createElement("span",null,"专辑：",m().createElement(s.Link,{className:"ui_text_gray_hover",to:"/playlist/album/".concat(n.al.id)},null===(t=n.al)||void 0===t?void 0:t.name)),m().createElement("span",null,"歌手：",n.ar.map((function(e,t){return m().createElement("span",{key:e.id},t>0&&" / ",m().createElement(s.Link,{className:"ui_text_gray_hover",to:"/artist/".concat(e.id)},e.name))})))))))}},mv:{apiDetail:d.Ro,apiComment:d.L,header:function(){return m().createElement("div",null)}},video:{apiDetail:d.ld,apiComment:d.ju,header:function(){return m().createElement("div",null)}}};const y=(0,o.memo)((function(e){var t=e.id,n=e.type;console.log("comment");var l=(0,o.useState)({}),s=(0,r.Z)(l,2),i=s[0],d=s[1],y=(0,o.useState)({}),b=(0,r.Z)(y,2),N=b[0],g=b[1],k=(0,o.useState)(""),w=(0,r.Z)(k,2),Z=w[0],_=w[1],C=(0,o.useState)(!0),z=(0,r.Z)(C,2),S=z[0],I=z[1],P=(0,o.useState)(1),D=(0,r.Z)(P,2),L=D[0],M=D[1],R=function(){var e=(0,a.Z)(c().mark((function e(){var a,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x[n].apiDetail({id:t});case 3:a=e.sent,r=a.songs,d(r[0]),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=(0,a.Z)(c().mark((function e(){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x[n].apiComment({id:t,offset:20*(L-1),limit:f.zI});case 3:a=e.sent,g(a),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=(0,a.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:return e.next=4,V();case 4:I(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=(0,o.useMemo)((function(){return x[n].header}),[n]);return(0,o.useEffect)((function(){S?j():V()}),[L]),S?m().createElement("div",{className:"w-full h-full flex-center"},m().createElement(h.Z,null)):m().createElement("div",{className:"domComment overflow-auto px-8 py-5 h-full"},m().createElement(A,{detail:i}),m().createElement("div",{className:"domComment_write mt-4"},m().createElement(p.Z,{value:Z,setValue:_,length:140}),m().createElement("div",{className:"domComment_write_actions flex mt-2.5"},m().createElement("div",{className:"flex space-x-2"},m().createElement("button",{type:"button",className:"text-gray-500 hover:text-black"},m().createElement(u.IconMoodSmile,{size:20,stroke:1.5})),m().createElement("button",{type:"button",className:"text-gray-500 hover:text-black"},m().createElement(u.IconAt,{size:20,stroke:1.5})),m().createElement("button",{type:"button",className:"text-gray-500 hover:text-black"},m().createElement(u.IconHash,{size:20,stroke:1.5}))),m().createElement("button",{type:"button",className:"ui_btn flex-center border px-4 h-8 text-sm hover:bg-gray-100 rounded-full ml-auto"},"评论"))),m().createElement("div",{className:"domComment_main mt-8"},m().createElement(v.Z,{comments:N,more:t}),m().createElement(E.Z,{total:Math.ceil(N.total/f.zI),page:L,func:M})))}))},899:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s}),n(6992),n(1539),n(8674),n(8783),n(3948);var a=n(3804),r=n.n(a),l=n(847),c=n(65),o=(0,a.lazy)((function(){return Promise.all([n.e(216),n.e(456)]).then(n.bind(n,3922))})),m=(0,a.lazy)((function(){return Promise.all([n.e(216),n.e(281)]).then(n.bind(n,3940))}));const s=(0,a.memo)((function(e){return r().createElement(l.Switch,null,r().createElement(l.Route,{path:"/comment/:type/:id/hot"},(0,c.Z)(m)),r().createElement(l.Route,null,(0,c.Z)(o)))}))}}]);