(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[1147],{1917:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>U}),a(4916),a(4723);var n=a(3804),l=a.n(n),r=a(847),c=a(7820),o=a(2137),i=a(9351),s=a(7757),m=a.n(s),u=(a(9653),a(6992),a(1539),a(8674),a(8783),a(3948),a(1249),a(5325)),p=a(6866),d=a(4124),f=a(4849),v=a(8343),h=a(7018),y=a(7323),E=(a(8309),a(5200));const g=(0,n.memo)((function(e){var t=e.item,a=void 0===t?{}:t,n=e.cat,c=void 0===n?"全部歌单":n;return l().createElement(r.Link,{to:"/home/playlist/highquality/".concat(c),className:"domHome_playlist_banner flex items-center relative  rounded-lg overflow-hidden z-10"},l().createElement("div",{className:"absolute inset-0 bg-center",style:{backgroundImage:"url(".concat(a.coverImgUrl,")"),filter:"blur(20px) grayscale(80%)",zIndex:"-1"}}),l().createElement("div",{className:"cover w-36 h-36 rounded-lg overflow-hidden"},l().createElement("img",{src:a.coverImgUrl,alt:""})),l().createElement("div",{className:"contennt ml-2.5"},l().createElement("div",{className:"tag border border-current flex-center text-sm rounded-full"},l().createElement(E.IconCrown,{size:16}),"  精品歌单"),l().createElement("div",{className:"text-white text-base mt-4"},a.name),l().createElement("div",{className:"text-gray-300 mt-2"},a.copywriter)))}));a(86),a(7327),a(9720);var x=a(4184),N=a.n(x),_=function(){return l().createElement("svg",{className:"absolute left-full top-1/4 fill-current",viewBox:"0 0 12 12",width:"12",height:"6"},l().createElement("text",{dominantBaseline:"middle",textAnchor:"middle",x:"0.5em",y:"0.5em",className:"fill-current ui_themeColor font-bold"},"hot"))},b=(0,n.memo)((function(e){var t=e.sub,a=void 0===t?[]:t,n=e.category,c=void 0===n?null:n,o=e.cat,i=void 0===o?"":o;return l().createElement("div",{className:"flex-auto grid grid-cols-6 gap-y-4"},a.filter((function(e){return e.category===Number(c)})).map((function(e){return l().createElement(r.NavLink,{activeClassName:"on ui_themeColor",className:"domHome_playlist_popup_nav_link text-gray-600 hover:ui_themeColor",to:"/home/playlist/".concat(encodeURIComponent(e.name)),key:e.name},l().createElement("span",{className:N()("inline-flex inner px-4 py-1 rounded-full overflow-hidden",{ui_bg_opacity:e.name===i})},l().createElement("span",{className:"relative"},e.name,e.hot&&l().createElement(_,null))))})))}));const w=(0,n.memo)((function(e){var t,a=e.cat,c=(0,n.useState)(!1),o=(0,i.Z)(c,2),s=o[0],m=o[1],p=(0,u.useSelector)((function(e){return e.home.playlist})),d=p.hot,f=p.catlist;return l().createElement("div",{className:"domHome_playlist_nav pt-4 pb-4 flex items-center"},l().createElement("div",{className:"relative"},l().createElement("button",{type:"button",className:"border flex items-center justify-center h-8 w-24 rounded-full hover:bg-gray-100 focus:outline-none text-sm",onClick:function(){return m(!s)}},decodeURIComponent(a),l().createElement(E.IconChevronRight,{size:20,stroke:1})),l().createElement("div",{className:"domHome_playlist_popup_nav absolute z-20 bg-white shadow text-sm divide-y top-full mt-1 pb-20",style:{display:s?null:"none"}},l().createElement("div",{className:"pl-8 py-4"},l().createElement(r.NavLink,{onClick:function(){return m(!1)},activeClassName:"on ui_themeColor",exact:!0,className:"domHome_playlist_popup_nav_link text-gray-600 hover:ui_themeColor",to:"/home/playlist/全部歌单"},l().createElement("span",{className:N()("inline-flex inner px-4 py-1 rounded-full overflow-hidden",{ui_bg_opacity:"全部歌单"===a})},"全部歌单"))),l().createElement("div",{className:"p-5 space-y-4"},Object.entries(f.categories).map((function(e){var t=(0,i.Z)(e,2),n=t[0],r=t[1];return l().createElement("div",{key:n,className:"flex"},l().createElement("div",{className:"category text-gray-300"},r),l().createElement(b,{sub:f.sub,category:n,cat:a}))}))))),l().createElement("div",{className:"ml-auto flex"},null===(t=d.tags)||void 0===t?void 0:t.map((function(e){return l().createElement(r.NavLink,{activeClassName:"ui_themeColor ui_bg_opacity",className:"domHome_playlist_nav_link text-gray-500 hover:text-gray-700 px-2 rounded-full text-center",to:"/home/playlist/".concat(encodeURIComponent(e.name)),key:e.name},e.name)}))))})),k=(0,n.memo)((function(e){var t=e.cat,a=void 0===t?"全部歌单":t,c=e.page,s=void 0===c?1:c;s=Number(s);var E=(0,r.useHistory)().push,x=(0,n.useState)("hot"),N=(0,i.Z)(x,2),_=N[0],b=(N[1],(0,n.useState)(!0)),k=(0,i.Z)(b,2),C=k[0],Z=k[1],I=(0,u.useDispatch)(),R=(0,n.useRef)(),H=(0,u.useSelector)((function(e){return e.home.playlist})),L=H.highquality,U=H.playlists,z=function(){var e=(0,o.Z)(m().mark((function e(){var t,a,n,l;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([(0,p.RC)(),(0,p.aT)()]);case 3:t=e.sent,a=(0,i.Z)(t,2),n=a[0],l=a[1],I((0,d.Ae)({hot:n,catlist:l})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=(0,o.Z)(m().mark((function e(){var t,n;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z(!0),e.prev=1,e.next=4,(0,p._U)({cat:a,limit:1});case 4:return t=e.sent,e.next=7,(0,p.nf)({order:_,cat:a,limit:100,offset:100*(s-1)});case 7:n=e.sent,I((0,d.Y3)({highquality:t,playlists:n})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:return e.prev=14,Z(!1),R.current.scrollTo(0,0),e.finish(14);case 18:case"end":return e.stop()}}),e,null,[[1,11,14,18]])})));return function(){return e.apply(this,arguments)}}();return(0,n.useEffect)((function(){z()}),[]),(0,n.useEffect)((function(){S()}),[_,a,s]),C?l().createElement("div",{className:"flex-center w-full h-full"},l().createElement(f.Z,null)):l().createElement("div",{className:"domHome_playlist px-8 overflow-auto max-h-full flex-auto",ref:R},l().createElement("div",{className:"ui_w1100"},L.playlists.length>0&&l().createElement(g,{item:L.playlists[0],cat:a}),l().createElement(w,{cat:a}),l().createElement(v.Z,{className:"domHome_playlist_list grid gap-5",small:"grid-cols-4",big:"grid-cols-5"},U.playlists.map((function(e){return l().createElement(y.Z,{item:e,key:e.id})}))),l().createElement(h.Z,{total:Math.ceil(U.total/100),page:s,func:function(e){return E("".concat(e))}})))}));var C=a(7329),Z=(a(2222),a(2503)),I=a(6682),R=a(6581),H=a(6298);const L=(0,n.memo)((function(e){var t=e.cat,a=void 0===t?"全部歌单":t;console.log("home_playlist_high");var c=(0,n.useState)([]),s=(0,i.Z)(c,2),u=s[0],d=s[1],f=(0,n.useState)([]),v=(0,i.Z)(f,2),h=v[0],y=v[1],g=(0,n.useRef)(0),x=(0,n.useState)(!1),_=(0,i.Z)(x,2),b=_[0],w=_[1],k=(0,n.useRef)(),L=(0,n.useRef)(),U=function(){var e=(0,o.Z)(m().mark((function e(){var t,a;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.qL)();case 3:t=e.sent,a=t.tags,y(void 0===a?[]:a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=(0,o.Z)(m().mark((function e(){var t,n,l,r;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p._U)({cat:a,limit:20,before:g.current});case 3:t=e.sent,n=t.playlists,l=void 0===n?[]:n,r=t.lasttime,g.current=r,d((function(e){return[].concat((0,C.Z)(e),(0,C.Z)(l))})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return(0,I.Z)(z,L,k),(0,n.useEffect)((function(){U()}),[]),(0,n.useEffect)((function(){d([])}),[a]),l().createElement("div",{className:"domHome_playlist_highquality px-8 overflow-auto flex-auto",ref:L},l().createElement("div",{className:"py-3 flex items-center justify-between"},l().createElement("div",{className:"flex items-center"},l().createElement("span",{className:"font-bold text-xl"},"精品歌单")," ",l().createElement("a",{href:"https://music.163.com/#/topic?id=202001",className:"flex-center w-4 h-4 border rounded-full text-gray-400 hover:text-gray-500 border-current"},"?")),l().createElement("div",{className:"relative"},l().createElement("button",{onClick:function(){return w(!b)},type:"button",className:"flex items-center border hover:bg-gray-100 rounded-full px-2 py-1"},l().createElement(E.IconFilter,{size:16,stroke:1}),a),l().createElement("div",{className:"absolute divide-y bg-white top-8 right-0 z-10 shadow rounded-lg",style:{width:510,display:b?null:"none"}},l().createElement("div",{className:"py-4 px-6"},l().createElement(r.NavLink,{activeClassName:"ui_themeColor",className:"item hover:ui_themeColor text-sm",onClick:function(){return w(!1)},to:"./全部歌单"},l().createElement("span",{className:N()("inline-flex inner px-3 py-1 rounded-full overflow-hidden",{ui_bg_opacity:"全部歌单"===a})},"全部歌单"))),l().createElement("div",{className:"p-6 grid grid-cols-5 gap-y-4"},h.map((function(e){return l().createElement(r.NavLink,{onClick:function(){return w(!1)},to:e.name,activeClassName:"ui_themeColor",className:"item hover:ui_themeColor text-sm whitespace-nowrap",key:e.id},l().createElement("span",{className:N()("inline-flex inner px-3 py-1 rounded-full overflow-hidden",{ui_bg_opacity:e.name===a})},e.name))})))))),l().createElement("div",{className:"domHome_playlist_highquality_list grid gap-6 grid-cols-2"},u.map((function(e){var t,a;return l().createElement("div",{className:"item flex",key:e.id},l().createElement("div",{className:"cover w-32 h-32 rounded-lg group overflow-hidden flex-none relative"},l().createElement(r.Link,{to:"/playlist/music/".concat(e.id),className:"ui_aspect-ratio-1/1"},l().createElement("span",{className:"absolute top-0 left-0 p-0.5 w-8 h-8 bg-yellow-500 text-white ui_angle_top_left"},l().createElement(E.IconCrown,{size:14,className:"transform -rotate-45"})),l().createElement("img",{src:"".concat(e.coverImgUrl,"?param=200y200"),alt:""}),l().createElement("div",{className:"absolute text-white top-0 right-0 py-1 px-2 flex-center"},l().createElement(E.IconPlayerPlay,{size:12}),(0,Z.LU)(e.playCount))),l().createElement(R.Z,{id:e.id,className:"playArrow opacity-0 group-hover:opacity-100 ui_themeColor absolute right-0 bottom-0 m-2 p-2 bg-white bg-opacity-90 rounded-full"},l().createElement(E.IconPlayerPlay,{size:16,className:"fill-current"}))),l().createElement("div",{className:"ml-2 flex-auto w-0 pt-5"},l().createElement("div",{className:"text-sm truncate ui_text_black_hover"},l().createElement(r.Link,{to:"/playlist/music/".concat(e.id),className:""},e.name)),l().createElement("div",{className:"mt-3 flex items-center ui_text_gray_hover"},"by ",l().createElement(r.Link,{to:"/user/".concat(e.userId),className:""},e.creator.nickname)," ",(null==e||null===(t=e.creator)||void 0===t||null===(a=t.avatarDetail)||void 0===a?void 0:a.identityIconUrl)&&l().createElement("img",{className:"w-3 h-3",src:e.creator.avatarDetail.identityIconUrl,alt:""})),l().createElement("div",{className:"mt-4 text-gray-300 flex items-center"},l().createElement(H.Z,{text:e.tag,className:"flex-none mr-1"}),l().createElement("span",{className:"flex-auto truncate"},e.copywriter))))})),l().createElement("div",{ref:k})))})),U=(0,n.memo)((function(){return l().createElement(r.Switch,null,l().createElement(r.Route,{path:"/home/playlist/highquality"},(function(e){var t=e.match.path;return l().createElement(r.Switch,null,l().createElement(r.Route,{path:"".concat(t,"/:cat")},(0,c.Z)(L)),l().createElement(r.Redirect,{to:"".concat(t,"/全部歌单")}))})),l().createElement(r.Route,{path:"/home/playlist/:cat/:page"},(0,c.Z)(k)),l().createElement(r.Redirect,{from:"/home/playlist/:cat",to:"/home/playlist/:cat/1"}),l().createElement(r.Redirect,{to:"/home/playlist/全部歌单"}))}))}}]);