import{cc as B,X as z,n as m,r as H,U as R,a as $,J as N,v as U,w as M,a7 as W,al as S,N as X,cw as q,f5 as J,M as G,_ as C,S as k,dX as Q,x as Y,y as Z,T as D,dW as K,dg as tt,aw as et,bs as E,bC as nt,fu as rt,b as ot,f as L,ay as b,o as h,h as at,j as y,l as O,q as it,F as st,k as x,bL as I}from"./index.58e3d8d0.js";import{c as V,u as ct}from"./index.a146fd51.js";import lt from"./SessionTimeoutLogin.091f5134.js";import{s as ut,g as pt}from"./scrollTo.bcd3fa0a.js";import"./FullscreenOutlined.773623fc.js";import"./index.afcdc8f0.js";import"./useWindowSizeFn.9dc32eeb.js";import"./useContentViewHeight.0badffd0.js";import"./uniqBy.7542f778.js";import"./_baseIteratee.1bf4b788.js";import"./get.06733f17.js";import"./index.a1f47e5b.js";import"./index.a954669a.js";import"./useRefs.1d517a52.js";import"./PlusOutlined.8c017148.js";import"./RedoOutlined.5f1cf3ef.js";import"./index.57b3cc30.js";import"./lock.689ee7f0.js";import"./Login.395d1071.js";import"./LoginForm.1f6a480c.js";import"./index.167d068a.js";import"./Checkbox.08133fb4.js";/* empty css              *//* empty css              */import"./index.11572bd7.js";import"./LoginFormTitle.68d03ea4.js";import"./Form.4c1ffd3f.js";import"./Col.9ae3040f.js";import"./useFlexGapSupport.79e4d221.js";import"./useSize.d5945e7b.js";import"./GithubFilled.54398dde.js";import"./WechatFilled.7dc86f77.js";import"./index.e6e05c33.js";import"./ForgetPasswordForm.4ec70cd4.js";import"./index.ff269ed8.js";import"./RegisterForm.f380dc35.js";import"./index.e6fd86c1.js";import"./MobileForm.704fc270.js";import"./QrCodeForm.3660e79f.js";import"./index.fbc4a642.js";import"./download.c2c94ec1.js";import"./base64Conver.08b9f4ec.js";function mt(e){var t,n=function(s){return function(){t=null,e.apply(void 0,z(s))}},r=function(){if(t==null){for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];t=B(n(c))}};return r.cancel=function(){return B.cancel(t)},r}var dt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"},gt=dt;function F(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.forEach(function(o){ft(e,o,n[o])})}return e}function ft(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P=function(t,n){var r=F({},t,n.attrs);return m(H,F({},r,{icon:gt}),null)};P.displayName="VerticalAlignTopOutlined";P.inheritAttrs=!1;var vt=P,bt=function(){return{visibilityHeight:{type:Number,default:400},duration:{type:Number,default:450},target:Function,prefixCls:String,onClick:Function}},ht=$({name:"ABackTop",inheritAttrs:!1,props:bt(),setup:function(t,n){var r=n.slots,o=n.attrs,s=n.emit,c=N("back-top",t),a=c.prefixCls,g=c.direction,l=U(),f=M({visible:!1,scrollEvent:null}),A=function(){return l.value&&l.value.ownerDocument?l.value.ownerDocument:window},j=function(u){var p=t.target,d=p===void 0?A:p,v=t.duration;ut(0,{getContainer:d,duration:v}),s("click",u)},T=mt(function(i){var u=t.visibilityHeight,p=pt(i.target,!0);f.visible=p>u}),_=function(){var u=t.target,p=u||A,d=p();f.scrollEvent=tt(d,"scroll",function(v){T(v)}),T({target:d})},w=function(){f.scrollEvent&&f.scrollEvent.remove(),T.cancel()};return W(function(){return t.target},function(){w(),S(function(){_()})}),X(function(){S(function(){_()})}),q(function(){S(function(){_()})}),J(function(){w()}),G(function(){w()}),function(){var i,u,p=m("div",{class:"".concat(a.value,"-content")},[m("div",{class:"".concat(a.value,"-icon")},[m(vt,null,null)])]),d=C(C({},o),{onClick:j,class:(i={},k(i,"".concat(a.value),!0),k(i,"".concat(o.class),o.class),k(i,"".concat(a.value,"-rtl"),g.value==="rtl"),i)}),v=Q("fade");return m(K,v,{default:function(){return[Y(m("div",D(D({},d),{},{ref:l}),[((u=r.default)===null||u===void 0?void 0:u.call(r))||p]),[[Z,f.visible]])]}})}}}),xt=R(ht);const Tt=$({name:"LayoutFeatures",components:{BackTop:xt,LayoutLockPage:V(()=>E(()=>import("./index.f7f2d4eb.js"),["assets/index.f7f2d4eb.js","assets/index.58e3d8d0.js","assets/index.ef58e12b.css","assets/LockPage.a313024e.js","assets/LockPage.afa0c1ae.css","assets/lock.689ee7f0.js","assets/header.d801b988.js"])),SettingDrawer:V(()=>E(()=>import("./index.91309d1b.js").then(function(e){return e.i}),["assets/index.91309d1b.js","assets/index.dc8d35d3.js","assets/index.5c7227e9.css","assets/index.58e3d8d0.js","assets/index.ef58e12b.css","assets/index.a1f47e5b.js","assets/index.5f816ca3.css","assets/ArrowLeftOutlined.335726f2.js","assets/index.11572bd7.js","assets/index.3a3c1369.css","assets/index.a146fd51.js","assets/index.48abc832.css","assets/FullscreenOutlined.773623fc.js","assets/index.afcdc8f0.js","assets/index.55076fdd.css","assets/useWindowSizeFn.9dc32eeb.js","assets/useContentViewHeight.0badffd0.js","assets/uniqBy.7542f778.js","assets/_baseIteratee.1bf4b788.js","assets/get.06733f17.js","assets/index.a954669a.js","assets/index.a2831ae3.css","assets/useRefs.1d517a52.js","assets/PlusOutlined.8c017148.js","assets/RedoOutlined.5f1cf3ef.js","assets/index.57b3cc30.js","assets/lock.689ee7f0.js"])),SessionTimeoutLogin:lt},setup(){const{getUseOpenBackTop:e,getShowSettingButton:t,getSettingButtonPosition:n,getFullContent:r}=nt(),o=rt(),{prefixCls:s}=ot("setting-drawer-feature"),{getShowHeader:c}=ct(),a=L(()=>o.getSessionTimeout),g=L(()=>{if(!x(t))return!1;const l=x(n);return l===I.AUTO?!x(c)||x(r):l===I.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:e,getIsFixedSettingDrawer:g,prefixCls:s,getIsSessionTimeout:a}}});function _t(e,t,n,r,o,s){const c=b("LayoutLockPage"),a=b("BackTop"),g=b("SettingDrawer"),l=b("SessionTimeoutLogin");return h(),at(st,null,[m(c),e.getUseOpenBackTop?(h(),y(a,{key:0,target:e.getTarget},null,8,["target"])):O("",!0),e.getIsFixedSettingDrawer?(h(),y(g,{key:1,class:it(e.prefixCls)},null,8,["class"])):O("",!0),e.getIsSessionTimeout?(h(),y(l,{key:2})):O("",!0)],64)}var pe=et(Tt,[["render",_t]]);export{pe as default};