(self.webpackChunkwyy=self.webpackChunkwyy||[]).push([[267],{4255:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>P});var n=l(9351),a=l(6814),c=(l(1249),l(3804)),m=l.n(c),r=l(5325),s=l(847),i=l(4184),o=l.n(i),d=l(898),u=l(2137),E=l(7757),b=l.n(E),v=l(6955);l(7941),l(3290);var _=l(9179),g=l(2042);l(8309);const N=function(e){var t=e.list,l=void 0===t?[]:t,n=e.checked,a=void 0===n?"":n,c=e.name,r=void 0===c?"":c,s=e.handle,i=void 0===s?function(){}:s,d=e.row,u=void 0!==d&&d;return m().createElement("div",{className:o()("domSetting_subBlock_content",{flex:u})},l.map((function(e){return m().createElement("div",{className:o()("item leading-loose",{"mr-6":u}),key:e},m().createElement("label",{className:"domSetting_radio flex items-center",htmlFor:e},m().createElement("input",{id:e,name:r,type:"radio",checked:a===e,onChange:function(){return i(e)}}),m().createElement("i",{className:"ico flex items-center justify-center mr-2"}),m().createElement("span",null,e)))})))};var f=l(5200),k=l(9703);const p=function(e){var t=e.list,l=void 0===t?[]:t,a=(e.name,e.handle,(0,r.useDispatch)());return m().createElement("div",{className:"domSetting_subBlock_content"},l.map((function(e){var t=(0,n.Z)(e,3),l=t[0],c=(t[1],t[2]);return m().createElement("div",{className:"item leading-loose",key:l},m().createElement("label",{className:"domSetting_check flex items-center",htmlFor:l},m().createElement(_.Z,{name:l,onChange:function(){return a((0,k.fz)("设置已更新"))}})," ",m().createElement("span",null,l),c&&m().createElement("span",{className:"text-gray-400"},"（".concat(c,"）"))))})))};var S=[["inherit","默认"],["仿宋","仿宋"],["宋体","宋体"],["微软雅黑","微软雅黑"],["微软雅黑 Light","微软雅黑 Light"],["新宋体","新宋体"],["方正兰亭超细黑简体","方正兰亭超细黑简体"],["方正粗黑宋简体","方正粗黑宋简体"],["楷体","楷体"],["等线","等线"],["等线 Light","等线 Light"],["黑体","黑体"]];const h=function(){var e=(0,r.useDispatch)(),t=(0,r.useSelector)((function(e){return e.setting})).font,l=(0,c.useState)("最小化到系统托盘"),a=(0,n.Z)(l,2),s=a[0],i=a[1];return m().createElement(m().Fragment,null,m().createElement("div",{className:"domSetting_block_title"},"常规"),m().createElement("div",{className:"domSetting_subBlock"},m().createElement("div",{className:"domSetting_subBlock_title"},"字体选择：",m().createElement("span",{className:"text-gray-400"},"如果字体显示不清晰，请在控制面板——字体设置中启用系统Clear Type设置")),m().createElement("div",{className:"domSetting_subBlock_content"},m().createElement("select",{className:"domSetting_select",onChange:function(t){e((0,g.HX)(t.target.value)),e((0,k.fz)("设置已更新"))},value:t},S.map((function(e){var t=(0,n.Z)(e,2),l=t[0],a=t[1];return m().createElement("option",{key:l,value:l,title:a,style:{fontFamily:l}},a)}))))),m().createElement("div",{className:"domSetting_subBlock"},m().createElement("div",{className:"domSetting_subBlock_title"},"启动："),m().createElement(p,{name:"启动",list:[["开机自动启动",!1]]})),m().createElement("div",{className:"domSetting_subBlock"},m().createElement("div",{className:"domSetting_subBlock_title"},"关联："),m().createElement(p,{name:"关联",list:[["将网易云音乐设为默认播放器",!1]]})),m().createElement("div",{className:"domSetting_subBlock"},m().createElement("div",{className:"domSetting_subBlock_title"},"动画："),m().createElement(p,{name:"动画",list:[["禁用动画效果",!1,"减少部分资源占用"]]})),m().createElement("div",{className:"domSetting_subBlock"},m().createElement("div",{className:"domSetting_subBlock_title"},"GPU加速："),m().createElement(p,{name:"GPU加速",list:[["禁用GPU加速",!1,"关闭图形加速，如果单曲播放页或MV播放黑屏请勾选"]]})),m().createElement("div",{className:"domSetting_subBlock"},m().createElement("div",{className:"domSetting_subBlock_title"},"关闭主面板："),m().createElement(N,{name:"关闭主面板",list:["最小化到系统托盘","退出云音乐"],checked:s,handle:i})),m().createElement("div",{className:"domSetting_subBlock"},m().createElement("div",{className:"domSetting_subBlock_title"},"定时关机："),m().createElement("div",{className:"domSetting_subBlock_content"},m().createElement("div",{className:"item"},m().createElement("label",{className:"domSetting_check flex items-center"},m().createElement(_.Z,null)," ",m().createElement("span",null,"开启定时关机"))),m().createElement("div",{className:"item"},"剩余关机时间",m().createElement("select",{className:"domSetting_select"},Object.keys(Array(24).fill(0)).map((function(e){return m().createElement("option",{value:e,key:e},e)}))),"时",m().createElement("select",{className:"domSetting_select"},Object.keys(Array(60).fill(0)).map((function(e){return m().createElement("option",{value:e,key:e},e)}))),"分"))),m().createElement("div",{className:"domSetting_subBlock"},m().createElement("div",{className:"domSetting_subBlock_title"},"高清屏适配：",m().createElement("span",{className:"text-gray-400"},"禁用后建议重启软件")),m().createElement(p,{name:"高清屏适配",list:[["禁用系统缩放比例",!1,"减少部分资源占用"]]})))},B=function(){var e=(0,c.useState)("directSound主声音驱动程序"),t=(0,n.Z)(e,2),l=t[0],a=t[1];return m().createElement(m().Fragment,null,m().createElement("div",{className:"domSetting_block_title"},"播放"),m().createElement("div",{className:"domSetting_subBlock"},m().createElement("div",{className:"domSetting_subBlock_title"},"播放列表：",m().createElement("span",{className:"ui_gary text-gray-400"},"单曲、节目")),m().createElement(N,{list:["双击播放单曲时，用当前单曲所在的歌曲列表替换播放列表（节目同理）","双击播放单曲时，仅把当前单曲添加到播放列表（节目同理）"],name:"播放列表",checked:"双击播放单曲时，用当前单曲所在的歌曲列表替换播放列表（节目同理）"})),m().createElement("div",{className:"domSetting_subBlock"},m().createElement("div",{className:"domSetting_subBlock_title"},"自动播放："),m().createElement(p,{name:"自动播放",list:[["程序启动是自动播放",!1]]})),m().createElement("div",{className:"domSetting_subBlock"},m().createElement("div",{className:"domSetting_subBlock_title"},"播放进度："),m().createElement(p,{name:"播放进度",list:[["将程序启动时记住上一次播放进度",!1]]})),m().createElement("div",{className:"domSetting_subBlock"},m().createElement("div",{className:"domSetting_subBlock_title"},"效果："),m().createElement(p,{name:"效果",list:[["开启音乐淡入淡出",!1,"仅支持输出设备DirectSound"]]})),m().createElement("div",{className:"domSetting_subBlock"},m().createElement("div",{className:"domSetting_subBlock_title"},"输出设备：",m().createElement("span",{className:"text-gray-400"},"播放下一首歌时生效")),m().createElement("div",{className:"domSetting_subBlock_content"},m().createElement("select",{className:"domSetting_select",value:l,onChange:function(e){return a(e.target.value)}},["directSound主声音驱动程序","directSound扬声器(VIA HD Audio(Win 10))","directSoundSPDIF Interface (TX0)(VIA HD Audio(Win 10))","WaveOut:Microsoft 声音映射器","WaveOut:扬声器(VIA HD Audio(Win 10))","WaveOut:SPDIF Interface (TX0)(VIA HD A","Wasapi:扬声器(VIA HD Audio(Win 10))","Wasapi:SPDIF Interface (TX0)(VIA HD Audio(Win 10))"].map((function(e){return m().createElement("option",{value:e,key:e},e)}))))))},y=function(){return m().createElement(m().Fragment,null,m().createElement("div",{className:"domSetting_block_title"},"消息与隐私"),m().createElement("div",{className:"domSetting_subBlock"},m().createElement("div",{className:"domSetting_subBlock_title"},"私信：",m().createElement("span",{className:"text-gray-400"},"接收私信提醒")),m().createElement(N,{list:["所有人","我所关注的人"],name:"私信",checked:"所有人"})),m().createElement("div",{className:"domSetting_subBlock"},m().createElement("div",{className:"domSetting_subBlock_title"},"通知："),m().createElement(p,{name:"通知",list:[["歌单被收藏",!1],["收到赞",!1],["新粉丝",!1]]})),m().createElement("div",{className:"domSetting_subBlock"},m().createElement("div",{className:"domSetting_subBlock_title"},"我的听歌排行："),m().createElement(N,{list:["所有人可见","被关注的人可见","仅自己可见"],name:"我的听歌排行",checked:"所有人可见"})),m().createElement("div",{className:"domSetting_subBlock"},m().createElement("div",{className:"domSetting_subBlock_title"},"黑名单设置："),m().createElement("div",{className:"domSetting_subBlock_content"},m().createElement("div",{className:"item"},"我的黑名单",m().createElement("button",null)))))},x=function(){return m().createElement(m().Fragment,null,m().createElement("div",{className:"domSetting_block_title"},"快捷键"))},w=function(){return m().createElement(m().Fragment,null,m().createElement("div",{className:"domSetting_block_title"},"下载设置"),m().createElement("div",{className:"domSetting_subBlock"},m().createElement("div",{className:"domSetting_subBlock_title"},"音质选择："),m().createElement("div",{className:"flex items-center"},m().createElement("span",{className:"mr-6"},"试听"),m().createElement(N,{row:!0,list:["标准","较高","极高","无损音质"],checked:"较高",name:"试听"})),m().createElement("div",{className:"flex items-center"},m().createElement("span",{className:"mr-6"},"下载"),m().createElement(N,{row:!0,list:["标准","较高","极高","无损音质"],checked:"较高",name:"下载"}))),m().createElement("div",{className:"domSetting_subBlock"},m().createElement("div",{className:"domSetting_subBlock_title"},"音乐命名格式："),m().createElement(N,{list:["歌曲名","歌手 - 歌曲名","歌曲名 - 歌手"],name:"音乐命名格式",checked:"歌手 - 歌曲名"})),m().createElement("div",{className:"domSetting_subBlock"},m().createElement("div",{className:"domSetting_subBlock_title"},"文件智能分类："),m().createElement(N,{list:["不分文件夹","按歌手分文件夹","按歌手\\专辑分文件夹"],name:"文件智能分类",checked:"不分文件夹"})))},A=function(){return m().createElement(m().Fragment,null,m().createElement("div",{className:"domSetting_block_title"},"歌词"),m().createElement("div",{className:"domSetting_subBlock"},m().createElement("div",{className:"domSetting_subBlock_title"},"类型："),m().createElement(N,{name:"类型",list:["桌面歌词","软件内词栏"],checked:"桌面歌词"})),m().createElement("div",{className:"domSetting_subBlock"},m().createElement("div",{className:"domSetting_subBlock_title"},"启用："),m().createElement(p,{list:[["启用歌词",!1],["外文歌词显示翻译",!0]],name:"启用"})),m().createElement("div",{className:"domSetting_subBlock"},m().createElement("div",{className:"domSetting_subBlock_title"},"总在最前："),m().createElement(p,{list:[["启用总在最前",!1]],name:"总在最前"})))},I=function(){return m().createElement(m().Fragment,null,m().createElement("div",{className:"domSetting_block_title"},"工具"),m().createElement("div",{className:"domSetting_subBlock"},m().createElement("div",{className:"domSetting_subBlock_title"},"Http代理："),m().createElement(N,{name:"Http代理",list:["不使用代理","使用IE代理设置","自定义代理"],checked:"不使用代理"})),m().createElement("div",{className:"domSetting_subBlock"},m().createElement("div",{className:"domSetting_subBlock_title"},"音乐云盘设置："),m().createElement(p,{list:[["本地音乐添加到歌单后，讲文件上传至云盘，可多端同步歌单，播放下载",!1]],name:"音乐云盘设置"})))},F=function(){return m().createElement(m().Fragment,null,m().createElement("div",{className:"domSetting_block_title"},"关于网易云音乐"),m().createElement("br",null),m().createElement("div",null,"当前版本……"," ",m().createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full"},"检测更新")),m().createElement("div",{className:"domSetting_subBlock"},m().createElement(N,{name:"更新",list:["自动更新","有新版本时提醒我"],checked:"自动更新"})),m().createElement("br",null),m().createElement("div",{className:"flex items-center"},m().createElement("span",{className:"mr-4"},"下载移动客户端"),m().createElement("a",{href:"https://itunes.apple.com/cn/app/wang-yi-yun-yin-le/id590338362?l=ch",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full_small inline-flex items-center justify-center h-6 px-3 rounded-full mr-4"},m().createElement(f.IconBrandApple,{size:16,className:"fill-current"}),"iPhone版"),m().createElement("a",{href:"https://itunes.apple.com/cn/app/wang-yi-yun-yin-lehd/id871041757?l=ch",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full_small inline-flex items-center justify-center h-6 px-3 rounded-full mr-4"},m().createElement(f.IconBrandApple,{size:16,className:"fill-current"}),"iPad版"),m().createElement("a",{href:"https://music.163.com/#/download",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full_small inline-flex items-center justify-center h-6 px-3 rounded-full mr-4"},m().createElement(f.IconBrandApple,{size:16,className:"fill-current"}),"iPhone版"),m().createElement("a",{href:"http://www.windowsphone.com/s?appid=db9dbdaa-464e-4370-a078-800fc7983d39",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full_small inline-flex items-center justify-center h-6 px-3 rounded-full mr-4"},m().createElement(f.IconBrandApple,{size:16,className:"fill-current"}),"iPhone版")),m().createElement("div",{className:"pt-8 pb-7"},m().createElement("a",{href:"https://music.163.com",className:"mr-2 underline text-gray-600 hover:text-black"},"《网易云音乐官网》"),m().createElement("a",{href:"https://music.163.com",className:"mr-2 underline text-gray-600 hover:text-black"},"《网易云音乐社区管理细则》"),m().createElement("a",{href:"https://music.163.com",className:"mr-2 underline text-gray-600 hover:text-black"},"《服务条款》"),m().createElement("a",{href:"https://music.163.com",className:"mr-2 underline text-gray-600 hover:text-black"},"《隐私政策》"),m().createElement("a",{href:"https://music.163.com",className:"mr-2 underline text-gray-600 hover:text-black"},"《儿童隐私政策》")))};var j=["账号","常规","播放","消息与隐私","快捷键","下载设置","歌词","工具","关于网易云音乐"],D=function(){var e=(0,r.useSelector)((function(e){return e.account})),t=e.profile,l=e.bindings;return m().createElement(m().Fragment,null,m().createElement("div",{className:""},l.map((function(e){}))),m().createElement("div",null,m().createElement(s.Link,{to:"/user/".concat(t.userId,"/edit"),className:"inline-block rounded-full px-3 py-1 border mr-2 hover:bg-gray-100"},"修改个人信息"),m().createElement(s.Link,{to:"/friend/invite",className:"inline-block rounded-full px-3 py-1 border hover:bg-gray-100"},"寻找并邀请好友")))},Z=function(e){(0,a.Z)(e);var t=(0,r.useDispatch)();return m().createElement(m().Fragment,null,m().createElement("div",{className:"text-gray-400 mb-3"},"登录网易云音乐，手机电脑多端同步，320K高音质无限下载"),m().createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full_small inline-flex items-center justify-center h-6 px-3 rounded-full",onClick:function(){return t((0,d.a6)())}},"立即登录"))};const P=(0,c.memo)((function(){console.log("ssetting");var e=function(){var e=(0,c.useState)(!1),t=(0,n.Z)(e,2),l=t[0],a=t[1],m=function(){var e=(0,u.Z)(b().mark((function e(){var t,l;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,v.BE)();case 3:t=e.sent,l=t.data.profile,a(!!l),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){m()}),[]),[l]}(),t=(0,n.Z)(e,1)[0],l=(0,c.useState)(),a=(0,n.Z)(l,2),r=a[0],s=(a[1],(0,c.useRef)());return m().createElement("div",{className:"domSetting flex flex-col h-full"},m().createElement("div",{className:"domSetting_header"},m().createElement("div",{className:"domSetting_title h1"},"设置"),m().createElement("div",{className:"domSetting_nav"},j.map((function(e,t){return m().createElement("a",{href:"#".concat(e),key:e,type:"button",className:o()("domSetting_nav_link",r===e&&"ui_underline font-bold")},e)})))),m().createElement("div",{className:"domSetting_main overflow-auto max-h-full flex-auto",ref:s},m().createElement("div",{id:"账号",className:"pb-8 mb-8 border-b"},t?m().createElement(D,null):m().createElement(Z,null)),m().createElement("div",{id:"常规",className:"pb-8 mb-8 border-b"},m().createElement(h,null)),m().createElement("div",{id:"播放",className:"pb-8 mb-8 border-b"},m().createElement(B,null)),m().createElement("div",{id:"消息与隐私",className:"pb-8 mb-8 border-b"},m().createElement(y,null)),m().createElement("div",{id:"快捷键",className:"pb-8 mb-8 border-b"},m().createElement(x,null)),m().createElement("div",{id:"下载设置",className:"pb-8 mb-8 border-b"},m().createElement(w,null)),m().createElement("div",{id:"歌词",className:"pb-8 mb-8 border-b"},m().createElement(A,null)),m().createElement("div",{id:"工具",className:"pb-8 mb-8 border-b"},m().createElement(I,null)),m().createElement("div",{id:"关于网易云音乐"},m().createElement(F,null))))}))}}]);