(self.webpackChunkwyy=self.webpackChunkwyy||[]).push([[2631],{3381:(e,t,n)=>{"use strict";n.r(t),n.d(t,{LoginContext:()=>D,default:()=>Z}),n(7941),n(2526),n(7327),n(5003),n(4747),n(9337);var a=n(6156),r=n(9351),l=n(3804),c=n.n(l),o=n(5325),s=n(5200),u=n(898),m=n(2137),i=n(7757),p=n.n(i),E=n(9965),d=n(9365),f=function(e){var t=e.handleInit,n=void 0===t?function(){return null}:t;return c().createElement("div",{className:"absolute bg-black bg-opacity-60 flex-center flex-col inset-0 mask text-white"},c().createElement("div",null,"二维码已失效"),c().createElement("button",{type:"button",className:"btn w-20 h-8 rounded mt-2 bg-blue-500",onClick:n},"点击刷新"))},y=function(){return c().createElement("div",{className:"scansuccess flex-center flex-col"},c().createElement("div",{className:"flex-center ui_themeColor my-10"},c().createElement(s.IconFaceId,{size:64,stroke:"1"})),c().createElement("span",{className:"text-gray-400 text-sm"},"扫描成功"),c().createElement("div",{className:"tips text-base mt-4"},"请在手机上确认登录"))},v=function(e){var t=e.qrimg,n=e.handleInit,a=e.status,r=e.handleChooseOtherSign;return c().createElement("div",{className:"scanwait text-center"},c().createElement("div",{className:"qrbox relative"},c().createElement("div",{className:"left"},c().createElement("div",{className:"ico ui_themeColor flex-center"},c().createElement(s.IconScan,{size:64}))),c().createElement("div",{className:"right"},c().createElement("div",{className:"qrimg relative m-auto"},c().createElement("img",{src:t,alt:""}),800===a&&c().createElement(f,{handleInit:n})),c().createElement("div",{className:"tips text-sm mt-4"},"使用",c().createElement("a",{href:"https://music.163.com/#/download",className:"ui_link"},"网易云音乐APP"),"扫码登录"))),c().createElement("button",{type:"button",onClick:r},"选择其他登录模式 >"))};const h=(0,l.memo)((function(){var e=(0,l.useState)(""),t=(0,r.Z)(e,2),n=t[0],a=t[1],o=(0,l.useState)(""),s=(0,r.Z)(o,2),u=s[0],i=s[1],f=(0,l.useState)(0),h=(0,r.Z)(f,2),N=h[0],g=h[1],b=(0,l.useRef)(),x=(0,l.useContext)(D).loginDispatch,w=function(){var e=(0,m.Z)(p().mark((function e(){var t,n,r,l;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,E.IT)();case 3:return t=e.sent,n=t.data.unikey,e.next=7,(0,E.y4)({key:n,qrimg:null});case 7:r=e.sent,l=r.data.qrimg,i(n),a(l),g(0),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=(0,m.Z)(p().mark((function e(){var t,n,a;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,E.rW)({key:u}).catch((function(e){return console.log(e)}));case 2:t=e.sent,n=t.code,a=t.cookie,e.t0=n,e.next=800===e.t0?8:802===e.t0?11:803===e.t0?13:16;break;case 8:return clearInterval(b.current),g(800),e.abrupt("break",16);case 11:return g(802),e.abrupt("break",16);case 13:return(0,d.d)(a),window.location.reload(),e.abrupt("break",16);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,l.useEffect)((function(){w()}),[]),(0,l.useEffect)((function(){return b.current=setInterval(S,5e3),function(){clearInterval(b.current)}}),[u]);var k=(0,l.useMemo)((function(){return 0===N||800===N}),[N]),C=(0,l.useMemo)((function(){return 802===N}),[N]);return c().createElement("div",{className:"qr pt-24 flex items-center flex-col"},c().createElement("div",{className:"title text-2xl"},"扫码登录"),k&&c().createElement(v,{qrimg:n,handleInit:w,status:N,handleChooseOtherSign:function(){return x({type:"SET_TYPE",payload:{type:"signin"}})}}),C&&c().createElement(y,null))}));var N=n(8176),g=(n(1249),n(4184)),b=n.n(g);const x=(0,l.memo)((function(){var e=(0,o.useSelector)((function(e){return e.common})).countriesCodeList,t=(0,l.useContext)(D),n=t.loginReducer.countrycode,a=t.loginDispatch,u=(0,l.useState)(!1),m=(0,r.Z)(u,2),i=m[0],p=m[1];return c().createElement("div",{className:"customSelect"},c().createElement("button",{onClick:function(){return p(!i)},type:"button",className:"default"},c().createElement(s.IconDeviceMobile,{size:24,stroke:.5,className:"ico"}),"+",n,c().createElement("div",{className:"arrow"},c().createElement(s.IconCaretDown,{size:12,className:"fill-current"}))),c().createElement("div",{className:"customOptionGroup",style:{display:i?null:"none"}},e.map((function(e){return e.countryList.map((function(e){return c().createElement("button",{key:e.zh,type:"button",className:b()("customOption flex w-full px-3 h-6",{on:e.code===n}),onClick:function(){return function(e){a({type:"SET_SIGNIN_COUNTRYCODE",payload:{countrycode:e}})}(e.code)}},c().createElement("div",{className:"flag w-8"}),c().createElement("div",{className:"zh"},e.zh),c().createElement("div",{className:"code ml-auto"},"+".concat(e.code)))}))}))))}));var w=n(4539);const S=(0,l.memo)((function(){return c().createElement("div",{className:"threes flex justify-between"},c().createElement("button",{type:"button",className:"three"},c().createElement(w.PT,{hover:!0})),c().createElement("button",{type:"button",className:"three"},c().createElement(w.B3,{hover:!0})),c().createElement("button",{type:"button",className:"three"},c().createElement(w.Hl,{hover:!0})),c().createElement("button",{type:"button",className:"three"},c().createElement(w.Pl,{hover:!0})))})),k=(0,l.memo)((function(){var e=(0,l.useContext)(D),t=e.loginReducer,n=t.argeeArgument,a=t.loginphone,o=t.loginpassword,u=t.countrycode,i=e.loginDispatch,f=(0,l.useState)(""),y=(0,r.Z)(f,2),v=y[0],h=y[1],g=(0,l.useState)(!1),b=(0,r.Z)(g,2),w=b[0],k=b[1],C=(0,l.useRef)(),I=(0,l.useRef)(),_=function(){var e=(0,m.Z)(p().mark((function e(){var t,n,r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,E.nu)({phone:a,password:o,countrycode:u});case 3:(t=e.sent).data,n=t.code,t.msg,r=t.cookie,t.token,t.profile,200===n&&((0,d.d)(r),window.location.reload()),502===n&&h("⚠️当前登录失败，请稍后再试"),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();return c().createElement("div",{className:"form px-10"},c().createElement("div",{className:"angle absolute top-0 left-0"},c().createElement("button",{type:"button",onClick:function(){return i({type:"SET_TYPE",payload:{type:"scan"}})}},c().createElement(s.IconQrcode,{size:36})),c().createElement("span",{className:"absolute top-3 left-12 pr-3 pl-4 py-1.5 tips text-white whitespace-nowrap bg-gray-400"},"扫码登录更安全")),c().createElement("div",{style:{height:200},className:"flex-center ui_themeColor"},c().createElement(s.IconFaceId,{size:100,stroke:1})),c().createElement("form",{onSubmit:function(e){e.preventDefault(),n?a?o?/\d{11}/.test(a)?_():h("⚠️请输入11位数字的手机号"):h("⚠️请输入密码"):h("⚠️请输入手机号"):alert("请先勾选同意《服务条款》《服务条款》《服务条款》")},autoComplete:"off"},c().createElement("table",{className:"table"},c().createElement("colgroup",null,c().createElement("col",{width:"84"}),c().createElement("col",{width:"auto"}),c().createElement("col",{width:"84"})),c().createElement("tbody",null,c().createElement("tr",null,c().createElement("td",null,c().createElement(x,null)),c().createElement("td",{colSpan:"2"},c().createElement("input",{type:"text",name:"phone",placeholder:"请输入手机号",className:"input",readOnly:!0,onFocus:function(e){return e.target.removeAttribute("readonly")},value:a,onChange:function(e){return function(e){i({type:"SET_SIGNIN_PHONE",payload:{loginphone:e}})}(e.target.value)}}))),c().createElement("tr",null,c().createElement("td",{colSpan:"2"},c().createElement("input",{type:w?"text":"password",name:"password",placeholder:"请输入密码",className:"input",readOnly:!0,onFocus:function(e){return e.target.removeAttribute("readonly")},value:o,onChange:function(e){return function(e){i({type:"SET_SIGNIN_PASSWORD",payload:{loginpassword:e}})}(e.target.value)}}),c().createElement("button",{type:"button",className:"togglePassword",onClick:function(){return k(!w)}},w?c().createElement(s.IconEye,{size:16}):c().createElement(s.IconEyeOff,{size:16}))),c().createElement("td",null,c().createElement("div",{className:"flex-center"},c().createElement("button",{type:"button",className:"text-gray-400",onClick:function(){return i({type:"SET_TYPE",payload:{type:"reset"}})}},"重设密码")))))),c().createElement("div",{className:"info"},c().createElement("label",{htmlFor:"autoLogin",className:"auto"},c().createElement(N.Z,{ref:I,name:"autoLogin"}),"  自动登录"),c().createElement("div",{className:"warn ml-auto text-red-500"},v)),c().createElement("div",{className:"actions"},c().createElement("button",{type:"submit",className:"submit"},"登 录"),c().createElement("button",{type:"button",className:"signup underline my-2 mx-auto text-sm block w-min whitespace-nowrap",onClick:function(){n?i({type:"SET_TYPE",payload:{type:"signup"}}):alert("请先勾选同意《服务条款》《服务条款》《服务条款》")}},"注册"),c().createElement(S,null)),c().createElement("label",{htmlFor:"argument",className:"argument flex items-center whitespace-nowrap mt-9"},c().createElement(N.Z,{ref:C,name:"argument",onChange:function(e){return function(e){i({type:"SET_SIGNIN_ARGEEARGUMENT",payload:{argeeArgument:e}})}(e.target.checked)},checked:n})," ",c().createElement("span",{className:"text-gray-400"},"同意"),c().createElement("a",{className:"ui_link hover",target:"_blank",rel:"noopener noreferrer",href:"https://st.music.163.com/official-terms/service"},"《服务条款》"),c().createElement("a",{className:"ui_link hover",target:"_blank",rel:"noopener noreferrer",href:"https://st.music.163.com/official-terms/privacy"},"《隐私条款》"),c().createElement("a",{className:"ui_link hover",target:"_blank",rel:"noopener noreferrer",href:"https://st.music.163.com/official-terms/children"},"《儿童隐私条款》"))))})),C=(0,l.memo)((function(){var e=(0,l.useState)(""),t=(0,r.Z)(e,2),n=t[0],a=t[1],o=(0,l.useContext)(D),u=o.loginReducer,m=u.registerphone,i=u.registerpassword,p=(u.countrycode,o.loginDispatch);return c().createElement("div",{className:"form px-10"},c().createElement("div",{className:"angle absolute top-0 left-0"},c().createElement("button",{className:"mt-2.5",type:"button",onClick:function(){return p({type:"SET_TYPE",payload:{type:"signin"}})}},"< 返回登录")),c().createElement("div",{style:{height:200,color:"var(--themeColor)"},className:"flex-center"},c().createElement(s.IconFaceId,{size:100,stroke:1})),c().createElement("form",{onSubmit:function(e){e.preventDefault(),m?i||a("⚠️请输入登录密码"):a("⚠️请输入手机号码")},autoComplete:"off"},c().createElement("table",{className:"table"},c().createElement("colgroup",null,c().createElement("col",{width:"84"}),c().createElement("col",{width:"auto"}),c().createElement("col",{width:"84"})),c().createElement("tbody",null,c().createElement("tr",null,c().createElement("td",null,c().createElement(x,null)),c().createElement("td",{colSpan:"2"},c().createElement("input",{type:"text",name:"phone",placeholder:"请输入手机号",className:"input",readOnly:!0,onFocus:function(e){return e.target.removeAttribute("readonly")},value:m,onChange:function(e){e.target.value}}))),c().createElement("tr",null,c().createElement("td",{colSpan:"3"},c().createElement("input",{type:"password",name:"password",placeholder:"设置登录密码",className:"input",readOnly:!0,onFocus:function(e){return e.target.removeAttribute("readonly")},value:i,minLength:"8",maxLength:"20",onChange:function(e){e.target.value}}))))),c().createElement("div",{className:"info"},n?c().createElement("div",{className:"warn ui_red"},n):c().createElement("span",{className:"text-gray-400"},"密码8-20位，至少包含字母/数字/字符2中组合")),c().createElement("div",{className:"actions"},c().createElement("button",{type:"submit",className:"submit"},"注册"),c().createElement("div",{className:"hint flex items-center justify-between mt-8 mb-4"},"其他注册方式"),c().createElement(S,null))))})),I=function(){var e=(0,l.useState)(),t=(0,r.Z)(e,2),n=t[0],a=t[1],o=(0,l.useState)(),u=(0,r.Z)(o,2),m=u[0],i=u[1],p=(0,l.useState)(""),E=(0,r.Z)(p,2),d=E[0],f=E[1],y=(0,l.useContext)(D),v=(y.loginReducer.countrycode,y.loginDispatch),h=function(){};return c().createElement("div",{className:"form"},c().createElement("div",{className:"angle"},c().createElement("button",{className:"mt-2.5",type:"button",onClick:function(){return v({type:"SET_TYPE",payload:{type:"signin"}})}},"< 返回登录")),c().createElement("div",{style:{height:200,color:"var(--themeColor)"},className:"flex-center"},c().createElement(s.IconFaceId,{size:100,stroke:1})),c().createElement("form",{onSubmit:function(e){e.preventDefault(),n?m?v({type:"SET_TYPE",payload:{type:"identify"}}):f("⚠️请输入登录密码"):f("⚠️请输入手机号码")},autoComplete:"off"},c().createElement("table",{className:"table"},c().createElement("colgroup",null,c().createElement("col",{width:"84"}),c().createElement("col",{width:"auto"}),c().createElement("col",{width:"84"})),c().createElement("tbody",null,c().createElement("tr",null,c().createElement("td",null,c().createElement(x,null)),c().createElement("td",{colSpan:"2"},c().createElement("input",{type:"text",name:"phone",placeholder:"请输入手机号",className:"input",value:n,onFocus:h,onChange:function(e){var t=e.target;return a(t.value)}}))),c().createElement("tr",null,c().createElement("td",{colSpan:"3"},c().createElement("input",{type:"password",name:"password",placeholder:"设置登录密码",className:"input",value:m,minLength:"8",maxLength:"20",onFocus:h,onChange:function(e){var t=e.target;return i(t.value)}}))))),c().createElement("div",{className:"info"},d?c().createElement("div",{className:"warn text-red-500 ml-auto"},d):c().createElement("span",{className:"text-gray-400"},"密码8-20位，至少包含字母/数字/字符2中组合")),c().createElement("div",{className:"actions"},c().createElement("button",{type:"submit",className:"submit"},"下一步"))))};var _=n(6814);const O=function(){var e=(0,l.useState)(""),t=(0,r.Z)(e,2),n=t[0],a=(t[1],(0,l.useContext)(D));(0,_.Z)(a.loginReducer);var o=a.loginDispatch;return(0,l.useEffect)((function(){}),[]),c().createElement("div",{className:"form"},c().createElement("div",{className:"angle"},c().createElement("button",{className:"mt-2.5",type:"button",onClick:function(){return o({type:"SET_TYPE",payload:{type:"signin"}})}},"< 返回登录")),c().createElement("div",{style:{height:200,color:"var(--themeColor)"},className:"flex-center"},c().createElement(s.IconFaceId,{size:100,stroke:1})),c().createElement("div",null,"为了安全，我们会向您的手机发送短信检验码"),c().createElement("form",{onSubmit:function(){},className:"mt-6",autoComplete:"off"},c().createElement("div",{className:"flex space-x-4"},c().createElement("div",{className:"flex-1 relative"},c().createElement("i",{className:"absolute inset-y-0 flex"},c().createElement(s.IconKey,{size:16,className:"m-auto w-6"})),c().createElement("input",{type:"text",className:"border h-full pl-6 rounded",placeholder:"填写验证码"})),c().createElement("div",{className:"flex-1"},c().createElement("button",{type:"button",className:"submit"},"重新获取"))),c().createElement("div",{className:"info"},c().createElement("div",{className:"warn text-red-500 ml-auto"},n)),c().createElement("div",{className:"actions"},c().createElement("button",{type:"submit",className:"submit"},"完成"))))};function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=(0,l.createContext)(null),R={scan:function(){return c().createElement(h,null)},signin:function(){return c().createElement(k,null)},signup:function(){return c().createElement(C,null)},reset:function(){return c().createElement(I,null)},identify:function(){return c().createElement(O,null)}};const Z=function(){var e=(0,o.useDispatch)(),t=(0,o.useSelector)((function(e){return e.common})).loginVisibility,n=(0,l.useReducer)((function(e,t){switch(t.type){case"SET_TYPE":case"SET_SIGNIN_WARN":case"SET_SIGNIN_PHONE":case"SET_SIGNIN_PASSWORD":case"SET_SIGNIN_ARGEEARGUMENT":case"SET_SIGNIN_COUNTRYCODE":return P(P({},e),t.payload);default:return e}}),{argeeArgument:!1,loginphone:"",loginpassword:"",registerphone:"",registerpassword:"",type:"scan",countrycode:"86"}),a=(0,r.Z)(n,2),m=a[0],i=a[1];return t?c().createElement("div",{id:"dialogLogin",className:"-translate-x-1/2 -translate-y-1/2 bg-white fixed left-1/2 rounded shadow top-1/2 transform ui_dialog"},c().createElement("button",{type:"button",className:"ui_dialog_close close",onClick:function(){return e((0,u.a6)())}},c().createElement(s.IconX,{stroke:1.5})),c().createElement(D.Provider,{value:{loginReducer:m,loginDispatch:i}},R[m.type]())):null}}}]);