(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[9945],{7998:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>L});var r=n(4699),a=(n(1249),n(3804)),c=n.n(a),i=n(847),l=n(7329),s=n(2137),o=n(7757),u=n.n(o),m=(n(9826),n(9653),n(8309),n(6992),n(1539),n(8674),n(8783),n(3948),n(2222),n(4184)),d=n.n(m),f=n(6866),v=n(9709),p=n(3398),b=n(1353),x=n(5325),E=n(4849);const h=(0,a.memo)((function(){var e=(0,x.useDispatch)(),t=(0,x.useSelector)((function(e){return e.videolist})),n=t.id,i=t.initStatus,o=t.groupList,m=t.categoryList,h=(0,a.useState)([]),_=(0,r.Z)(h,2),k=_[0],y=_[1],N=(0,a.useState)(!1),g=(0,r.Z)(N,2),L=g[0],w=g[1],V=(0,a.useMemo)((function(){var e;return null===(e=o.find((function(e){return e.id===Number(n)})))||void 0===e?void 0:e.name}),[n]),C=(0,a.useRef)(null),M=(0,a.useRef)(null),Z=function(){var t=(0,s.Z)(u().mark((function t(){var n,a,c,l,s;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!i){t.next=2;break}return t.abrupt("return",!1);case 2:return t.prev=2,t.next=5,Promise.all([(0,f.Xi)(),(0,f.yP)()]);case 5:n=t.sent,a=(0,r.Z)(n,2),c=a[0].data,l=a[1].data,s=void 0===l?[]:l,e((0,b.V)({groupList:c,categoryList:s})),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(2),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[2,13]])})));return function(){return t.apply(this,arguments)}}(),I=function(){var e=(0,s.Z)(u().mark((function e(){var t,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n?(0,f.gW)({id:n}):(0,f.st)();case 3:t=e.sent,r=t.datas,a=void 0===r?[]:r,y((function(e){return[].concat((0,l.Z)(e),(0,l.Z)(a.map((function(e){var t=e.data,n=t.vid,r=t.coverUrl,a=t.durationms,c=t.title,i=t.playTime,l=t.creator;return{id:n,cover:r,duration:a,playCount:i,title:c,creator:[{userName:l.nickname,userId:l.userId}]}}))))})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();(0,v.Z)(I,C,M),(0,a.useEffect)((function(){Z()}),[]),(0,a.useEffect)((function(){y([])}),[n]);var S=function(){return c().createElement("div",{className:"group_select_box absolute top-100 p-5 bg-white overflow-auto shadow"},c().createElement("div",{className:"border-b pb-2"},c().createElement("button",{type:"button",className:d()("group_select_check text-center rounded-full h-8 flex-center hover:ui_themeColor",null===n?"text-red-500 bg-red-50":""),onClick:function(){return e((0,b.C)({id:null}))}},"全部视频")),c().createElement("div",{className:"group_select_list grid grid-cols-6 gap-y-5 p-4"},o.map((function(t){return c().createElement("button",{type:"button",className:d()("group_select_check text-center rounded-full h-8 flex-center hover:ui_themeColor",t.id===n?"text-red-500 bg-red-50":""),key:t.id,onClick:function(){return e((0,b.C)({id:t.id}))}},t.name)}))))};return c().createElement("div",{className:"domVideoList_content px-8 overflow-auto flex-auto",ref:C},c().createElement("div",{className:"video_sort_filter_bar flex items-center justify-between"},c().createElement("div",{className:"group_select_wrap relative z-10"},c().createElement("button",{type:"button",className:"group_select_button border rounded-full hover:bg-gray-100 text-sm",onClick:function(){return w(!L)}},V||"全部视频",">"),L&&c().createElement(S,null)),c().createElement("div",{className:"recommend_nav divide-x flex"},m.map((function(t){return c().createElement("div",{key:t.id},c().createElement("button",{type:"button",className:d()("recommend_nav_link rounded-full px-2 mx-1",n===t.id?"bg-red-50 text-red-500":"ui_text_black_hover"),onClick:function(){return e((0,b.C)({id:t.id}))}},t.name))})))),c().createElement("div",{className:"my-4"},c().createElement(p.Z,{list:k}),c().createElement("div",{ref:M,className:"flex-center"},c().createElement(E.Z,null))))}));var _=n(5200),k=n(4953),y=["内地","港台","欧美","日本","韩国"];const N=(0,a.memo)((function(){var e=(0,x.useDispatch)(),t=(0,x.useSelector)((function(e){return e.mvlist})),n=t.firstArea,l=t.topArea,o=t.first,m=t.hot,v=t.wy,b=t.top,h=t.timestamp,N=(0,a.useMemo)((function(){return Date.now()-h>36e5}),[h]),g=function(e){return e.map((function(e){var t=e.id,n=e.playCount,r=e.cover,a=e.name,c=e.artists;return{type:0,id:t,cover:r,briefDesc:e.briefDesc,playCount:n,title:a,creator:c.map((function(e){return{userId:e.id,userName:e.name}}))}}))},L=function(){var t=(0,s.Z)(u().mark((function t(){var a,c,i,s,o,m;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Promise.all([(0,f.Au)({order:"最热",limit:6}),(0,f.gu)({limit:6}),(0,f.Gu)({area:n,limit:6}),(0,f.Hu)({area:l,limit:10})]);case 3:a=t.sent,c=(0,r.Z)(a,4),i=c[0].data,s=c[1].data,o=c[2].data,m=c[3].data,e({type:"SET_MVLIST_INIT",payload:{first:g(o),hot:g(i),wy:g(s),top:m,timestamp:Date.now()}}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}(),w=function(){var t=(0,s.Z)(u().mark((function t(n){var r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,f.Gu)({area:n,limit:6});case 3:r=t.sent,a=r.data,e({type:"SET_MVLIST_FIRSTAREA_INIT",payload:{firstArea:n,first:g(a)}}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),V=function(){var t=(0,s.Z)(u().mark((function t(n){var r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,f.Hu)({area:n,limit:10});case 3:r=t.sent,a=r.data,e({type:"SET_MVLIST_TOPAREA_INIT",payload:{topArea:n,top:a}}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}();return(0,a.useEffect)((function(){N&&L()}),[N]),N?c().createElement("div",{className:"w-full h-full flex-center"},c().createElement(E.Z,null)):c().createElement("div",{className:"domVideoList_content px-8 overflow-auto max-h-full flex-auto"},c().createElement("div",{className:"domMVList_sublist"},c().createElement("div",{className:"domMVList_header mb-5 flex justify-between items-center"},c().createElement(i.Link,{to:"/allmv?order=最新&area=".concat(n),className:"domMVList_subLink font-bold text-base flex items-center"},"最新MV",c().createElement(_.IconChevronRight,{size:20})),c().createElement("div",{className:"recommend_nav flex divide-x space-x-1"},y.map((function(e){return c().createElement("div",{className:"item",key:e},c().createElement("button",{onClick:function(){return w(e)},type:"button",className:d()("link rounded-full px-2.5",n===e?"text-red-500 bg-red-50":"ui_text_black_hover")},e))})))),c().createElement(p.Z,{list:o})),c().createElement("div",{className:"domMVList_sublist"},c().createElement("div",{className:"domMVList_header mt-8 mb-5 flex justify-between items-center"},c().createElement(i.Link,{to:"/allmv?order=最热",className:"domMVList_subLink font-bold text-base flex items-center"},"热播MV",c().createElement(_.IconChevronRight,{size:20}))),c().createElement(p.Z,{list:m})),c().createElement("div",{className:"domMVList_sublist"},c().createElement("div",{className:"domMVList_header mt-8 mb-5 flex justify-between items-center"},c().createElement(i.Link,{to:"/allmv?type=网易出品&order=最新",className:"domMVList_subLink font-bold text-base flex items-center"},"网易出品",c().createElement(_.IconChevronRight,{size:20}))),c().createElement(p.Z,{list:v})),c().createElement("div",{className:"domMVList_header mt-8 mb-5 flex justify-between items-center"},c().createElement(i.Link,{to:"/toplist-mv/",className:"domMVList_subLink font-bold text-base flex items-center"},"MV排行榜",c().createElement(_.IconChevronRight,{size:20})),c().createElement("div",{className:"recommend_nav flex divide-x space-x-1"},y.map((function(e){return c().createElement("div",{className:"item",key:e},c().createElement("button",{onClick:function(){return V(e)},type:"button",className:d()("link rounded-full px-2.5",l===e?"text-red-500 bg-red-50":"ui_text_black_hover")},e))})))),c().createElement(k.Z,{list:b,schema:[["评论","播放"],["收藏","分享","下载MV","复制链接"]]}))}));var g=[["视频","/video/videolist"],["MV","/video/mvlist"]];const L=(0,a.memo)((function(){return c().createElement("div",{className:"domVideoList flex flex-col h-full"},c().createElement("div",{className:"domVideoList_header ui_header text-base space-x-4"},g.map((function(e){var t=(0,r.Z)(e,2),n=t[0],a=t[1];return c().createElement(i.NavLink,{key:n,className:"domVideoList_link",activeClassName:"text-xl ui_underline font-bold",to:a},n)}))),c().createElement(i.Switch,null,c().createElement(i.Route,{path:"/video/videolist"},c().createElement(h,null)),c().createElement(i.Route,{path:"/video/mvlist"},c().createElement(N,null)),c().createElement(i.Redirect,{to:"/video/videolist"})))}))}}]);