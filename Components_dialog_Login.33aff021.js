(self.webpackChunkwyy=self.webpackChunkwyy||[]).push([[2631],{9184:(e,t,n)=>{"use strict";n.r(t),n.d(t,{LoginContext:()=>I,default:()=>T}),n(7941),n(2526),n(7327),n(5003),n(4747),n(9337);var a=n(6156),r=n(9351),c=n(3804),l=n.n(c),o=n(5325),s=n(5200),m=n(898),u=n(2137),i=n(7757),E=n.n(i),p=n(6955);const d=function(){var e=(0,c.useState)(""),t=(0,r.Z)(e,2),n=t[0],a=t[1],o=(0,c.useState)(""),m=(0,r.Z)(o,2),i=m[0],d=m[1],f=(0,c.useState)(0),v=(0,r.Z)(f,2),y=v[0],N=v[1],h=(0,c.useRef)(),b=(0,c.useContext)(I).loginDispatch,g=function(){var e=(0,u.Z)(E().mark((function e(){var t,n,r,c;return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.IT)();case 3:return t=e.sent,n=t.data.unikey,e.next=7,(0,p.y4)({key:n,qrimg:null});case 7:r=e.sent,c=r.data.qrimg,d(n),a(c),N(0),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=(0,u.Z)(E().mark((function e(){var t,n;return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.rW)({key:i});case 3:t=e.sent,n=t.code,t.cookie,800===n&&(clearInterval(h),N(800)),802===n&&N(802),803===n&&window.location.reload(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){g()}),[]),(0,c.useEffect)((function(){return h.current=setInterval(w,5e3),function(){clearInterval(h.current)}}),[i]),l().createElement("div",{className:"qr"},l().createElement("div",{className:"title"},"扫码登录"),(0===y||800===y)&&l().createElement("div",{className:"scanwait"},l().createElement("div",{className:"qrbox"},l().createElement("div",{className:"left"},l().createElement("div",{className:"ico flex-center"},l().createElement(s.IconScan,{size:64}))),l().createElement("div",{className:"right"},l().createElement("div",{className:"qrimg"},l().createElement("img",{src:n,alt:""}),800===y&&l().createElement("div",{className:"mask"},l().createElement("div",null,"二维码已失效"),l().createElement("button",{type:"button",className:"btn",onClick:function(){return g()}},"点击刷新"))),l().createElement("div",{className:"tips"},"使用",l().createElement("a",{href:"https://music.163.com/#/download",className:"ui_link"},"网易云音乐APP"),"扫码登录"))),l().createElement("button",{type:"button",className:"otherchoose",onClick:function(){return b({type:"SET_TYPE",payload:{type:"signin"}})}},"选择其他登录模式 >")),802===y&&l().createElement("div",{className:"scansuccess"},l().createElement("div",{className:"ico flex-center"},l().createElement(s.IconFaceId,{size:64,stroke:"1"})),l().createElement("span",{className:"text-gray-400"},"扫描成功"),l().createElement("div",{className:"tips"},"请在手机上确认登录")))};var f=n(4539),v=n(8176),y=(n(1249),n(4184)),N=n.n(y);const h=function(){var e=(0,o.useSelector)((function(e){return e.common})).countriesCodeList,t=(0,c.useContext)(I),n=t.loginReducer.countrycode,a=t.loginDispatch,m=(0,c.useState)(!1),u=(0,r.Z)(m,2),i=u[0],E=u[1];return l().createElement("div",{className:"customSelect"},l().createElement("button",{onClick:function(){return E(!i)},type:"button",className:"default"},l().createElement(s.IconDeviceMobile,{size:24,stroke:.5,className:"ico"}),"+",n,l().createElement("div",{className:"arrow"},l().createElement(s.IconCaretDown,{size:12,className:"fill-current"}))),l().createElement("div",{className:"customOptionGroup",style:{display:i?null:"none"}},e.map((function(e){return e.countryList.map((function(e){return l().createElement("button",{key:e.zh,type:"button",className:N()("customOption",{on:e.code===n}),onClick:function(){return t=e.code,void a({type:"SET_SIGNIN_COUNTRYCODE",payload:{countrycode:t}});var t}},l().createElement("span",{className:"flag"}),l().createElement("span",{className:"zh"},e.zh),l().createElement("span",{className:"code"},"+",e.code))}))}))))},b=function(){var e=(0,c.useContext)(I),t=e.loginReducer,n=t.argeeArgument,a=t.loginphone,o=t.loginpassword,m=t.countrycode,i=e.loginDispatch,d=(0,c.useState)(""),y=(0,r.Z)(d,2),N=y[0],b=y[1],g=(0,c.useState)(!1),w=(0,r.Z)(g,2),S=w[0],x=w[1],k=(0,c.useRef)(),C=(0,c.useRef)(),_=function(){var e=(0,u.Z)(E().mark((function e(){var t,n;return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.nu)({phone:a,password:o,countrycode:m});case 3:(t=e.sent).data,n=t.code,t.msg,t.cookie,t.token,t.profile,200===n&&window.location.reload(),502===n&&b("⚠️当前登录失败，请稍后再试"),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();return l().createElement("div",{className:"form"},l().createElement("div",{className:"angle absolute top-0 left-0"},l().createElement("button",{type:"button",onClick:function(){return i({type:"SET_TYPE",payload:{type:"scan"}})}},l().createElement(s.IconQrcode,{size:36})),l().createElement("span",{className:"tips"},"扫码登录更安全")),l().createElement("div",{style:{height:200,color:"var(--themeColor)"},className:"flex-center"},l().createElement(s.IconFaceId,{size:100,stroke:1})),l().createElement("form",{onSubmit:function(e){e.preventDefault(),n?a?o?/\d{11}/.test(a)?_():b("⚠️请输入11位数字的手机号"):b("⚠️请输入密码"):b("⚠️请输入手机号"):alert("请先勾选同意《服务条款》《服务条款》《服务条款》")},autoComplete:"off"},l().createElement("table",{className:"table"},l().createElement("colgroup",null,l().createElement("col",{width:"84"}),l().createElement("col",{width:"auto"}),l().createElement("col",{width:"84"})),l().createElement("tbody",null,l().createElement("tr",null,l().createElement("td",null,l().createElement(h,null)),l().createElement("td",{colSpan:"2"},l().createElement("input",{type:"text",name:"phone",placeholder:"请输入手机号",className:"input",readOnly:!0,onFocus:function(e){return e.target.removeAttribute("readonly")},value:a,onChange:function(e){return function(e){i({type:"SET_SIGNIN_PHONE",payload:{loginphone:e}})}(e.target.value)}}))),l().createElement("tr",null,l().createElement("td",{colSpan:"2"},l().createElement("input",{type:S?"text":"password",name:"password",placeholder:"请输入密码",className:"input",readOnly:!0,onFocus:function(e){return e.target.removeAttribute("readonly")},value:o,onChange:function(e){return function(e){i({type:"SET_SIGNIN_PASSWORD",payload:{loginpassword:e}})}(e.target.value)}}),l().createElement("button",{type:"button",className:"togglePassword",onClick:function(){return x(!S)}},S?l().createElement(s.IconEye,{size:16}):l().createElement(s.IconEyeOff,{size:16}))),l().createElement("td",null,l().createElement("div",{className:"flex-center"},l().createElement("button",{type:"button",className:"text-gray-400",onClick:function(){return i({type:"SET_TYPE",payload:{type:"reset"}})}},"重设密码")))))),l().createElement("div",{className:"info"},l().createElement("label",{htmlFor:"autoLogin",className:"auto"},l().createElement(v.Z,{ref:C,name:"autoLogin"}),"  自动登录"),l().createElement("div",{className:"warn ml-auto text-red-500"},N)),l().createElement("div",{className:"actions"},l().createElement("button",{type:"submit",className:"submit"},"登 录"),l().createElement("button",{type:"button",className:"signup",onClick:function(){n?i({type:"SET_TYPE",payload:{type:"signup"}}):alert("请先勾选同意《服务条款》《服务条款》《服务条款》")}},"注册"),l().createElement("div",{className:"threes flex justify-between"},l().createElement("button",{type:"button",className:"three"},l().createElement(f.PT,{hover:!0})),l().createElement("button",{type:"button",className:"three"},l().createElement(f.B3,{hover:!0})),l().createElement("button",{type:"button",className:"three"},l().createElement(f.Hl,{hover:!0})),l().createElement("button",{type:"button",className:"three"},l().createElement(f.Pl,{hover:!0})))),l().createElement("label",{htmlFor:"argument",className:"argument flex items-center whitespace-nowrap mt-9"},l().createElement(v.Z,{ref:k,name:"argument",onChange:function(e){return function(e){i({type:"SET_SIGNIN_ARGEEARGUMENT",payload:{argeeArgument:e}})}(e.target.checked)},checked:n})," ",l().createElement("span",{className:"text-gray-400"},"同意"),l().createElement("a",{className:"ui_link hover",target:"_blank",rel:"noopener noreferrer",href:"https://st.music.163.com/official-terms/service"},"《服务条款》"),l().createElement("a",{className:"ui_link hover",target:"_blank",rel:"noopener noreferrer",href:"https://st.music.163.com/official-terms/privacy"},"《隐私条款》"),l().createElement("a",{className:"ui_link hover",target:"_blank",rel:"noopener noreferrer",href:"https://st.music.163.com/official-terms/children"},"《儿童隐私条款》"))))},g=function(){var e=(0,c.useState)(""),t=(0,r.Z)(e,2),n=t[0],a=t[1],o=(0,c.useContext)(I),m=o.loginReducer,u=m.registerphone,i=m.registerpassword,E=(m.countrycode,o.loginDispatch);return l().createElement("div",{className:"form"},l().createElement("div",{className:"angle absolute top-0 left-0"},l().createElement("button",{className:"mt-2.5",type:"button",onClick:function(){return E({type:"SET_TYPE",payload:{type:"signin"}})}},"< 返回登录")),l().createElement("div",{style:{height:200,color:"var(--themeColor)"},className:"flex-center"},l().createElement(s.IconFaceId,{size:100,stroke:1})),l().createElement("form",{onSubmit:function(e){e.preventDefault(),u?i||a("⚠️请输入登录密码"):a("⚠️请输入手机号码")},autoComplete:"off"},l().createElement("table",{className:"table"},l().createElement("colgroup",null,l().createElement("col",{width:"84"}),l().createElement("col",{width:"auto"}),l().createElement("col",{width:"84"})),l().createElement("tbody",null,l().createElement("tr",null,l().createElement("td",null,l().createElement(h,null)),l().createElement("td",{colSpan:"2"},l().createElement("input",{type:"text",name:"phone",placeholder:"请输入手机号",className:"input",readOnly:!0,onFocus:function(e){return e.target.removeAttribute("readonly")},value:u,onChange:function(e){e.target.value}}))),l().createElement("tr",null,l().createElement("td",{colSpan:"3"},l().createElement("input",{type:"password",name:"password",placeholder:"设置登录密码",className:"input",readOnly:!0,onFocus:function(e){return e.target.removeAttribute("readonly")},value:i,minLength:"8",maxLength:"20",onChange:function(e){e.target.value}}))))),l().createElement("div",{className:"info"},n?l().createElement("div",{className:"warn ui_red"},n):l().createElement("span",{className:"text-gray-400"},"密码8-20位，至少包含字母/数字/字符2中组合")),l().createElement("div",{className:"actions"},l().createElement("button",{type:"submit",className:"submit"},"注册"),l().createElement("div",{className:"hint flex items-center justify-between mt-8 mb-4"},"其他注册方式"),l().createElement("div",{className:"threes flex justify-between"},l().createElement("button",{type:"button",className:"three"},l().createElement(f.PT,{hover:!0}),l().createElement("div",{className:"name mt-2"},"微信")),l().createElement("button",{type:"button",className:"three"},l().createElement(f.B3,{hover:!0}),l().createElement("div",{className:"name mt-2"},"QQ")),l().createElement("button",{type:"button",className:"three"},l().createElement(f.Hl,{hover:!0}),l().createElement("div",{className:"name mt-2"},"新浪微博")),l().createElement("button",{type:"button",className:"three"},l().createElement(f.Pl,{hover:!0}),l().createElement("div",{className:"name mt-2"},"网易邮箱"))))))},w=function(){var e=(0,c.useState)(),t=(0,r.Z)(e,2),n=t[0],a=t[1],o=(0,c.useState)(),m=(0,r.Z)(o,2),u=m[0],i=m[1],E=(0,c.useState)(""),p=(0,r.Z)(E,2),d=p[0],f=p[1],v=(0,c.useContext)(I),y=(v.loginReducer.countrycode,v.loginDispatch),N=function(){};return l().createElement("div",{className:"form"},l().createElement("div",{className:"angle"},l().createElement("button",{className:"mt-2.5",type:"button",onClick:function(){return y({type:"SET_TYPE",payload:{type:"signin"}})}},"< 返回登录")),l().createElement("div",{style:{height:200,color:"var(--themeColor)"},className:"flex-center"},l().createElement(s.IconFaceId,{size:100,stroke:1})),l().createElement("form",{onSubmit:function(e){e.preventDefault(),n?u?y({type:"SET_TYPE",payload:{type:"identify"}}):f("⚠️请输入登录密码"):f("⚠️请输入手机号码")},autoComplete:"off"},l().createElement("table",{className:"table"},l().createElement("colgroup",null,l().createElement("col",{width:"84"}),l().createElement("col",{width:"auto"}),l().createElement("col",{width:"84"})),l().createElement("tbody",null,l().createElement("tr",null,l().createElement("td",null,l().createElement(h,null)),l().createElement("td",{colSpan:"2"},l().createElement("input",{type:"text",name:"phone",placeholder:"请输入手机号",className:"input",value:n,onFocus:N,onChange:function(e){var t=e.target;return a(t.value)}}))),l().createElement("tr",null,l().createElement("td",{colSpan:"3"},l().createElement("input",{type:"password",name:"password",placeholder:"设置登录密码",className:"input",value:u,minLength:"8",maxLength:"20",onFocus:N,onChange:function(e){var t=e.target;return i(t.value)}}))))),l().createElement("div",{className:"info"},d?l().createElement("div",{className:"warn text-red-500 ml-auto"},d):l().createElement("span",{className:"text-gray-400"},"密码8-20位，至少包含字母/数字/字符2中组合")),l().createElement("div",{className:"actions"},l().createElement("button",{type:"submit",className:"submit"},"下一步"))))};var S=n(6814);const x=function(){var e=(0,c.useState)(""),t=(0,r.Z)(e,2),n=t[0],a=(t[1],(0,c.useContext)(I));(0,S.Z)(a.loginReducer);var o=a.loginDispatch;return(0,c.useEffect)((function(){}),[]),l().createElement("div",{className:"form"},l().createElement("div",{className:"angle"},l().createElement("button",{className:"mt-2.5",type:"button",onClick:function(){return o({type:"SET_TYPE",payload:{type:"signin"}})}},"< 返回登录")),l().createElement("div",{style:{height:200,color:"var(--themeColor)"},className:"flex-center"},l().createElement(s.IconFaceId,{size:100,stroke:1})),l().createElement("div",null,"为了安全，我们会向您的手机发送短信检验码"),l().createElement("form",{onSubmit:function(){},className:"mt-6",autoComplete:"off"},l().createElement("div",{className:"flex space-x-4"},l().createElement("div",{className:"flex-1 relative"},l().createElement("i",{className:"absolute inset-y-0 flex"},l().createElement(s.IconKey,{size:16,className:"m-auto w-6"})),l().createElement("input",{type:"text",className:"border h-full pl-6 rounded",placeholder:"填写验证码"})),l().createElement("div",{className:"flex-1"},l().createElement("button",{type:"button",className:"submit"},"重新获取"))),l().createElement("div",{className:"info"},l().createElement("div",{className:"warn text-red-500 ml-auto"},n)),l().createElement("div",{className:"actions"},l().createElement("button",{type:"submit",className:"submit"},"完成"))))};function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I=(0,c.createContext)(null),_={scan:function(){return l().createElement(d,null)},signin:function(){return l().createElement(b,null)},signup:function(){return l().createElement(g,null)},reset:function(){return l().createElement(w,null)},identify:function(){return l().createElement(x,null)}};const T=function(){var e=(0,o.useDispatch)(),t=(0,o.useSelector)((function(e){return e.common})).loginVisibility,n=(0,c.useReducer)((function(e,t){switch(t.type){case"SET_TYPE":case"SET_SIGNIN_WARN":case"SET_SIGNIN_PHONE":case"SET_SIGNIN_PASSWORD":case"SET_SIGNIN_ARGEEARGUMENT":case"SET_SIGNIN_COUNTRYCODE":return C(C({},e),t.payload);default:return e}}),{argeeArgument:!1,loginphone:"",loginpassword:"",registerphone:"",registerpassword:"",type:"scan",countrycode:"86"}),a=(0,r.Z)(n,2),u=a[0],i=a[1];return t?l().createElement("div",{id:"dialogLogin",className:"ui_dialog bg-white shadow rounded"},l().createElement("button",{type:"button",className:"ui_dialog_close close",onClick:function(){return e((0,m.a6)())}},l().createElement(s.IconX,{stroke:1.5})),l().createElement(I.Provider,{value:{loginReducer:u,loginDispatch:i}},_[u.type]())):null}}}]);