(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[1923],{3194:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>f}),l(1249),l(8309);var r=l(3804),c=l.n(r),a=l(847),n=l(1216),s=l(5200),o=l(9709),i=l(5325),u=i.useSelector,m=l(9610),d=l(8343);const f=function(){var e=(0,a.useHistory)().action,t=(0,i.useDispatch)(),l=u((function(e){return e.exclusive})),f=l.result,v=l.scrollTop,p=(0,r.useRef)(0),E=(0,r.useRef)(null),y=(0,r.useRef)(null);return(0,o.Z)((function(){(0,m.handleGetData)({limit:60,offset:p}),p.current+=60}),E,y),(0,r.useEffect)((function(){"PUSH"===e?t((0,m.setExclusiveResultEmpty)()):E.current&&(E.current.scrollTop=v)}),[]),(0,r.useLayoutEffect)((function(){return function(){var e;t((0,m.setExclusiveScrollTop)({scrollTop:(null===(e=E.current)||void 0===e?void 0:e.scrollTop)||0}))}}),[]),c().createElement("div",{className:"overflow-auto p-8 h-full",ref:E},c().createElement("div",{className:"ui_w1100"},c().createElement("div",{className:"h1 pb-4"},"独家放送"),c().createElement(d.Z,{className:"grid gap-5",small:"grid-cols-2",big:"grid-cols-3"},f.map((function(e){return c().createElement("div",{key:e.picUrl},c().createElement(a.Link,{to:e.videoId?"/player/video/".concat(e.videoId):"/player/mv/".concat(e.id),className:"flex relative rounded border overflow-hidden ui_aspect-ratio-24/9"},c().createElement(n.ZP,{overflow:!0},c().createElement("img",{src:e.picUrl,className:"w-full h-full object-cover",alt:""})),c().createElement("span",{className:"ico absolute top-2 left-2 rounded-full text-white w-6 h-6 bg-black bg-opacity-40 flex-center border border-gray-200"},c().createElement(s.IconPlayerPlay,{size:14,className:"fill-current"}))),c().createElement("div",{className:"mt-2"},c().createElement(a.Link,{to:"/player/mv/".concat(e.id),className:"text-sm ui_text_black_hover"},e.name)))}))),c().createElement("div",{ref:y})))}}}]);