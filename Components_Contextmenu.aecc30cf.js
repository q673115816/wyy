(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[9259],{5921:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});var c=n(9351),a=n(2137),l=n(6814),o=n(7757),i=n.n(o),m=(n(2222),n(1249),n(8309),n(7327),n(9600),n(3804)),r=n.n(m),s=n(847),u=n(5325),E=n(5200),_=n(5064),x=n(4042),N=n(6866),b=n(6223),y=n(7704);const f=function(){var e=(0,u.useDispatch)(),t=(0,u.useSelector)((function(e){return e.common})).baseUrl,n=(0,u.useSelector)((function(e){return e.account})),o=n.profile,f=n.playlist,k=(0,u.useSelector)((function(e){return e.mask})),p=k.contextMenuVisibility,d=k.contextMenuX,h=k.contextMenuY,M=k.contextMenuItem,I=k.contextMenuTotal,P=k.contextMenuSechma,v=k.contextMenuType,C=k.contextMenuItemId,z=(0,u.useSelector)((function(e){return e.inset})),w=z.globalX,S=z.globalY,g=f.filter((function(e){return!1===e.subscribed})),L="".concat(t,"/").concat(v,"?id=").concat(C,"&userId=").concat(o.userId);(0,m.useEffect)((function(){e((0,_.ht)({contextMenuShareLink:L}))}),[]);var T=function(){e((0,x.f7)({currentSong:M})),e((0,_.xJ)())},V=function(){e((0,x.An)({currentSong:M})),e((0,_.xJ)())},Z=function(){console.log("播放歌单")},J=function(){console.log("下一首播放歌单")},D=function(){var t=(0,a.Z)(i().mark((function t(){var n,c;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,N.Bw)({mvid:C,t:1});case 3:n=t.sent,c=n.message,e((0,_.xJ)()),e((0,_.fz)(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}(),F=function(){(0,b.Z)(L,(function(){e((0,_.fz)("复制链接成功"))})),e((0,_.xJ)())},A=function(){e((0,_.s1)())},X=(0,m.useCallback)((function(){return e((0,_.ee)())}),[]),Y=(0,m.useMemo)((function(){var t,n=(t=function(){return e((0,_.xJ)())},{评论:function(e){var n=e.contextMenuItem,c=e.contextMenuTotal,a=e.contextMenuType;return r().createElement("li",{className:"ui_contextmenu_item"},r().createElement(s.Link,{to:"/comment/".concat(a,"/").concat(n.id),onClick:t,className:"ui_contextmenu_btn "},r().createElement("i",{className:"ico"},r().createElement(E.IconMessage,{size:22,stroke:1})),"查看评论 (",c,")"))},播放:function(e){var t=e.handlePlay;return r().createElement("li",{className:"ui_contextmenu_item"},r().createElement("button",{type:"button",onClick:t,className:"ui_contextmenu_btn "},r().createElement("i",{className:"ico"},r().createElement(E.IconPlayerPlay,{size:22,stroke:1})),"播放(Enter)"))},下一首播放:function(e){var t=e.handlePlayNext;return r().createElement("li",{className:"ui_contextmenu_item"},r().createElement("button",{onClick:t,type:"button",className:"ui_contextmenu_btn "},r().createElement("i",{className:"ico"},r().createElement(E.IconArrowForward,{size:22,stroke:1})),"下一首播放"))},播放歌单:function(e){var t=e.handlePlayPlaylist;return r().createElement("li",{className:"ui_contextmenu_item"},r().createElement("button",{type:"button",onClick:t,className:"ui_contextmenu_btn "},r().createElement("i",{className:"ico"},r().createElement(E.IconPlayerPlay,{size:22,stroke:1})),"播放(Enter)"))},下一首播放歌单:function(e){var t=e.handlePlayNextPlaylist;return r().createElement("li",{className:"ui_contextmenu_item"},r().createElement("button",{onClick:t,type:"button",className:"ui_contextmenu_btn "},r().createElement("i",{className:"ico"},r().createElement(E.IconArrowForward,{size:22,stroke:1})),"下一首播放"))},查看歌单:function(e){var n=e.contextMenuItem;return r().createElement("li",{className:"ui_contextmenu_item"},r().createElement(s.Link,{to:"/playlist/music/".concat(n.id),onClick:t,className:"ui_contextmenu_btn "},r().createElement("i",{className:"ico"},r().createElement(E.IconPlayerPlay,{size:22,stroke:1})),"查看歌单"))},播放MV:function(e){var n=e.contextMenuItem,c=e.contextMenuType;return r().createElement("li",{className:"ui_contextmenu_item"},r().createElement(s.Link,{to:"/player/".concat(c,"/").concat(n.id),onClick:t,className:"ui_contextmenu_btn "},r().createElement("i",{className:"ico"},r().createElement(E.IconPlayerPlay,{size:22,stroke:1})),"播放MV"))},收藏MV:function(e){var t=e.handleSubscribeMV;return r().createElement("li",{className:"ui_contextmenu_item"},r().createElement("button",{onClick:t,type:"button",className:"ui_contextmenu_btn "},r().createElement("i",{className:"ico"},r().createElement(E.IconFolderPlus,{size:22,stroke:1})),"收藏MV"))},收藏到歌单:function(e){var t=e.handleCreatePlaylist,n=e.ownPlaylist,c=void 0===n?[]:n;return r().createElement("li",{className:"ui_contextmenu_item"},r().createElement("span",{className:"ui_contextmenu_btn "},r().createElement("i",{className:"ico"},r().createElement(E.IconFolderPlus,{size:22,stroke:1})),"收藏到歌单(Ctrl+S)",r().createElement("i",{className:"arrow"})),r().createElement("ul",{className:"ui_contextmenu sub"},r().createElement("li",{className:"ui_contextmenu_item"},r().createElement("button",{type:"button",onClick:t,className:"ui_contextmenu_btn "},r().createElement("i",{className:"ico"},r().createElement(E.IconCirclePlus,{size:22,stroke:1})),"创建新歌单")),r().createElement("li",{className:"hr"}),c.map((function(e){return r().createElement("li",{className:"ui_contextmenu_item",key:e.id},r().createElement("button",{type:"button",className:"ui_contextmenu_btn "},r().createElement("i",{className:"ico"},10===e.privacy?r().createElement(E.IconLock,{size:22,stroke:1}):r().createElement(E.IconMusic,{size:22,stroke:1})),e.name))}))))},分享:function(e){var t=e.handleDialogShare;return r().createElement("li",{className:"ui_contextmenu_item"},r().createElement("button",{onClick:t,type:"button",className:"ui_contextmenu_btn "},r().createElement("i",{className:"ico"},r().createElement(E.IconShare,{size:22,stroke:1})),"分享....."))},复制链接:function(e){var t=e.handleCopyLink;return r().createElement("li",{className:"ui_contextmenu_item"},r().createElement("button",{type:"button",onClick:t,className:"ui_contextmenu_btn "},r().createElement("i",{className:"ico"},r().createElement(E.IconLink,{size:22,stroke:1})),"复制链接"))},不感兴趣:function(e){return(0,l.Z)(e),r().createElement("li",{className:"ui_contextmenu_item"},r().createElement("span",{className:"ui_contextmenu_btn "},r().createElement("i",{className:"ico"},r().createElement(E.IconCircleX,{size:22,stroke:1})),"不感兴趣",r().createElement("i",{className:"arrow"})),r().createElement("ul",{className:"ui_contextmenu sub"},r().createElement("li",{className:"ui_contextmenu_item"},r().createElement("button",{type:"button",className:"ui_contextmenu_btn "},r().createElement("i",{className:"ico"}),"创建新歌单")),r().createElement("li",{className:"hr"}),r().createElement("li",{className:"ui_contextmenu_item"},r().createElement("button",{type:"button",className:"ui_contextmenu_btn "},r().createElement("i",{className:"ico"}),"创建新歌单")),r().createElement("li",{className:"ui_contextmenu_item"},r().createElement("button",{type:"button",className:"ui_contextmenu_btn "},r().createElement("i",{className:"ico"}),"创建新歌单"))))},下载:function(){return r().createElement("li",{className:"ui_contextmenu_item "},r().createElement("span",{className:"ui_contextmenu_btn "},r().createElement("i",{className:"ico"},r().createElement(E.IconDownload,{size:22,stroke:1})),"下载(L)",r().createElement("i",{className:"arrow"})),r().createElement("ul",{className:"ui_contextmenu sub"},r().createElement("li",{className:"ui_contextmenu_item"},r().createElement("button",{type:"button",className:"ui_contextmenu_btn "},r().createElement("i",{className:"ico"},r().createElement(E.IconCirclePlus,{size:22,stroke:1})),"创建新歌单")),r().createElement("li",{className:"hr"}),r().createElement("li",{className:"ui_contextmenu_item"},r().createElement("button",{type:"button",className:"ui_contextmenu_btn "},r().createElement("i",{className:"ico"},r().createElement(E.IconMusic,{size:22,stroke:1})),"创建新歌单")),r().createElement("li",{className:"ui_contextmenu_item"},r().createElement("button",{type:"button",className:"ui_contextmenu_btn "},r().createElement("i",{className:"ico"},r().createElement(E.IconMusic,{size:22,stroke:1})),"创建新歌单"))))}});return P.map((function(e){return[e.join(","),e.map((function(e){return[e,n[e]]}))]}))}),[P]);return p?r().createElement(y.Z,null,r().createElement("ul",{id:"contextmenu",className:"ui_contextmenu divide-y",style:{left:d-w,top:h-S}},Y.map((function(e){var t=(0,c.Z)(e,2),n=t[0],a=t[1];return r().createElement("div",{key:n},a.map((function(e){var t=(0,c.Z)(e,2),n=t[0],a=t[1];return r().createElement(a,{contextMenuTotal:I,contextMenuItem:M,handlePlay:T,handlePlayNext:V,handlePlayPlaylist:Z,handlePlayNextPlaylist:J,handleDialogShare:X,handleCopyLink:F,handleCreatePlaylist:A,handleSubscribeMV:D,ownPlaylist:g,contextMenuType:v,key:n})})))})))):null}}}]);