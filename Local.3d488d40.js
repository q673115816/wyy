(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[7004],{2241:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});var n=a(4699),l=(a(1249),a(3804)),c=a.n(l),s=a(5325),o=a(4184),r=a.n(o),m=["歌曲","歌手","专辑","文件夹"];const i=function(){var e=(0,s.useDispatch)(),t=(0,l.useState)(!1),a=(0,n.Z)(t,2),o=a[0],i=a[1],u=(0,s.useSelector)((function(e){return e.local})).current,d=function(){i(!o)};return c().createElement("div",{className:"domManage"},c().createElement("div",{className:"domManage_header ui_header"},c().createElement("span",{className:"domManage_header_title h1"},"本地音乐"),c().createElement("span",{className:"domManage_header_total"},"共0首"),c().createElement("button",{type:"button",className:"domManage_header_selectFolder",onClick:d},"选择目录")),c().createElement("div",{className:"domManage_main"},c().createElement("div",{className:"domManage_nav"},m.map((function(t){return c().createElement("button",{onClick:function(){return e({type:"SET_LOCAL_CURRENT",payload:{current:t}})},key:t,className:r()("domManage_nav_link focus:outline-none",t===u&&"ui_underline font-bold"),type:"button"},t)}))),c().createElement("div",{className:"domManage_noFolder"},c().createElement("div",{className:"domManage_noFolder_title"},"请添加本地文件夹"),c().createElement("div",{className:"domManage_noFolder_tips"},"升级本地音乐为高品质音乐并和好友分享！"),c().createElement("button",{type:"button",className:"domManage_noFolder_button",onClick:d},"选择本地音乐文件夹")),c().createElement("div",{className:"domManage_dialog",style:{display:o?"":"none"}},c().createElement("button",{type:"button",className:"close",onClick:d},"×"),c().createElement("div",{className:"title"},"选择本地音乐文件夹"),c().createElement("div",{className:"tips"},"将自动扫描您勾选的目录，文件增删实时同步。"),c().createElement("ul",null,c().createElement("li",null,c().createElement("span",{className:"checkbox"},c().createElement("input",{type:"text"}),c().createElement("i",{className:"material-icons"},"checkbox")),"暂时没法做")),c().createElement("div",{className:"actions"},c().createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full red"},"确认"),c().createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full"},"添加文件")))))}}}]);