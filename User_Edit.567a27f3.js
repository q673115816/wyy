(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[4119],{7528:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>y});var n=a(2137),r=a(9351),c=a(7757),l=a.n(c),s=a(3804),i=a.n(s),m=a(6866),u=a(847),o=a(4184),d=a.n(o),f=a(4584),v=a.n(f),g=a(5064),E=a(5325),p=a(4849),N=a(4640);const h=function(){var e=(0,E.useSelector)((function(e){return e.mask})),t=e.dialogUploadAvatarVisibility,a=e.avatar;return t?(console.log(a),i().createElement(N.Z,{id:"dialogUploadAvatar",title:"上传头像"},i().createElement("div",{className:"main"},i().createElement("div",{className:"content flex justify-center"},i().createElement("div",{className:"fullSize flex-center bg-black rounded overflow-hidden"},i().createElement("img",{className:"w-full h-full object-contain",src:a,alt:""})),i().createElement("div",{className:"aside ml-8"},i().createElement("div",{className:"bigSize border rounded w-24 h-24"},i().createElement("img",{src:a,alt:""})),i().createElement("div",{className:"text-gray-400 mt-1"},"大尺寸封面"),i().createElement("div",{className:"smallSize border rounded w-16 h-16"},i().createElement("img",{src:a,alt:""})),i().createElement("div",{className:"text-gray-400 mt-1"},"小尺寸封面"))),i().createElement("div",{className:"actions pb-4 pt-6 space-x-4 flex justify-center"},i().createElement("button",{type:"button",className:"flex-center border px-3 h-8 rounded-full"},"重新选择"),i().createElement("button",{type:"button",className:"flex-center text-white ui_theme_bg_color px-3 h-8 rounded-full"},"保持并关闭"))))):null};a(2222),a(9653),a(1249),a(5069),a(7941),a(3290);const b=function(e){var t=e.birthday,a=void 0===t?"":t,n=e.handleEdit,c=(0,s.useRef)((new Date).getFullYear()),l=(0,s.useRef)(new Date(a).getFullYear()),m=(0,s.useRef)(new Date(a).getMonth()),u=(0,s.useRef)(new Date(a).getDate()),o=(0,s.useState)(),d=(0,r.Z)(o,2),f=d[0],v=d[1],g=function(){n("birthday",new Date("".concat(l.current,"/").concat(m.current+1,"/").concat(u.current)).valueOf())};return(0,s.useEffect)((function(){!function(){switch(Number(m.current)){case 1:return void(l.current%4==0&&l.current%100!=0||l.current%400==0?v(29):v(28));case 0:case 2:case 4:case 6:case 7:case 9:case 11:return void v(31);default:v(30)}}()}),[m.current]),i().createElement(i().Fragment,null,i().createElement("select",{className:"select",value:l.current,onChange:function(e){l.current=e.target.value,m.current=0,u.current=1,g()}},Object.keys(Array(100).fill(0)).reverse().map((function(e){return i().createElement("option",{key:c.current-e,value:c.current-e},c.current-e,"年")}))),i().createElement("select",{className:"select",value:m.current,onChange:function(e){m.current=e.target.value,u.current=1,g()}},Object.keys(Array(12).fill(0)).map((function(e){return i().createElement("option",{key:e,value:e},Number(e)+1,"月")}))),i().createElement("select",{className:"select",value:u.current,onChange:function(e){u.current=e.target.value,g()}},Object.keys(Array(f).fill(0)).map((function(e){return i().createElement("option",{key:Number(e)+1,value:Number(e)+1},Number(e)+1,"日")}))))},y=(0,s.memo)((function(e){var t=e.uid,a=(0,E.useDispatch)(),c=(0,s.useState)(!0),o=(0,r.Z)(c,2),f=o[0],N=o[1],y=(0,s.useState)(),x=(0,r.Z)(y,2),w=x[0],k=x[1],j=(0,s.useState)(),C=(0,r.Z)(j,2),S=C[0],Z=C[1],_=(0,s.useState)(""),D=(0,r.Z)(_,2),F=D[0],R=(D[1],(0,s.useState)(!0)),U=(0,r.Z)(R,2),A=U[0],O=U[1],z=function(){var e=(0,n.Z)(l().mark((function e(){var a,n,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,m.um)({uid:t});case 3:if(a=e.sent,n=a.code,r=a.profile,200===n){e.next=8;break}return e.abrupt("return");case 8:k(r),Z((function(){return v()(r,(function(){}))})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:return e.prev=15,N(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,12,15,18]])})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=(0,n.Z)(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={gender:S.gender,birthday:S.birthday,nickname:S.nickname,province:S.province,city:S.city,signature:S.signature},e.next=4,(0,m.of)(t);case 4:if(200===e.sent.code){e.next=8;break}return e.abrupt("return");case 8:O(!0),k(S),a((0,g.fz)("修改个人资料成功")),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),J=function(e,t){Z(v()((function(a){a[e]=t})))};return(0,s.useEffect)((function(){z()}),[t]),(0,s.useEffect)((function(){O(JSON.stringify(w)===JSON.stringify(S))}),[S]),f?i().createElement("div",{className:"flex-center w-full h-full"},i().createElement(p.Z,null)):i().createElement("div",{className:"domUserEdit"},i().createElement("div",{className:"h1 domUser_subpage_header ui_header"},"编辑个人信息"),i().createElement("div",{className:"domUserEdit_main"},i().createElement("div",{className:"left"},i().createElement("div",{className:"row"},i().createElement("div",{className:"key"},"昵称："),i().createElement("div",{className:"value"},i().createElement("input",{type:"text",value:S.nickname,className:"input",onChange:function(e){var t=e.target;return J("nickname",t.value)}}))),i().createElement("div",{className:"row"},i().createElement("div",{className:"key"},"介绍："),i().createElement("div",{className:"value"},i().createElement("div",{className:"signature"},i().createElement("textarea",{type:"text",value:S.signature,className:"textarea",onChange:function(e){var t=e.target;return J("signature",t.value)}}),i().createElement("div",{className:d()("signatureLength",{ui_red:F.length>300})},300-F.length)))),i().createElement("div",{className:"row"},i().createElement("div",{className:"key"},"性别："),i().createElement("div",{className:"value"},i().createElement("label",{htmlFor:"secret",className:"gender"},i().createElement("input",{type:"radio",className:"radio",name:"gender",id:"secret",checked:0===S.gender,onChange:function(){return J("gender",0)}}),i().createElement("i",{className:"ico flex-center"}),i().createElement("span",null,"保密")),i().createElement("label",{htmlFor:"male",className:"gender"},i().createElement("input",{type:"radio",className:"radio",name:"gender",id:"male",checked:1===S.gender,onChange:function(){return J("gender",1)}}),i().createElement("i",{className:"ico flex-center"}),i().createElement("span",null,"男")),i().createElement("label",{htmlFor:"famale",className:"gender"},i().createElement("input",{type:"radio",className:"radio",name:"gender",id:"famale",checked:2===S.gender,onChange:function(){return J("gender",2)}}),i().createElement("i",{className:"ico flex-center"}),i().createElement("span",null,"女")))),i().createElement("div",{className:"row"},i().createElement("div",{className:"key"},"生日："),i().createElement("div",{className:"value",style:{display:"flex",justifyContent:"space-between"}},i().createElement(b,{birthday:S.birthday,handleEdit:J}))),i().createElement("div",{className:"row"},i().createElement("div",{className:"key"},"地区："),i().createElement("div",{className:"value"},i().createElement("select",{name:"",id:"",className:"select"},i().createElement("option",{value:""})))),i().createElement("div",{className:"row"},i().createElement("div",{className:"key"}),i().createElement("div",{className:"value"},i().createElement("div",{className:"actions"},i().createElement("button",{type:"button",className:d()("ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full red",{disabled:A}),style:{marginRight:"2em"},disabled:A,onClick:L},"保 存"),i().createElement(u.Link,{to:"./",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full"},"取 消"))))),i().createElement("div",{className:"right ml-20"},i().createElement("div",{className:"avatar border rounded overflow-hidden w-40 h-40"},i().createElement("img",{className:"",src:S.avatarUrl,alt:""})),i().createElement("label",{htmlFor:"avatar",className:"border cursor-pointer hover:bg-gray-50 flex-center h-8 m-auto mt-5 px-3 rounded-full update w-min whitespace-nowrap"},i().createElement("input",{onChange:function(e){var t=e.target,n=new FileReader,c=(0,r.Z)(t.files,1)[0];c&&(n.readAsDataURL(c),n.onload=function(e){a((0,g.Ci)({avatar:e.target.result}))})},type:"file",name:"",id:"avatar",hidden:!0,accept:"image/bmp,image/gif,image/jpg,image/svg,image/png,image/webp,image/ico,image/svgz,image/tif,image/jpeg,image/jfif,image/pjpeg,image/pjp,image/tiff,image/xbm"}),"修改头像"),i().createElement(h,null))))}))}}]);