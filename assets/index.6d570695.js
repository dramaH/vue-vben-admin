import{aw as y,a as _,ay as t,o as E,j as A,z as p,n as r,B as a}from"./index.58e3d8d0.js";import{A as R}from"./index.b979a466.js";import{u}from"./index.dc8d35d3.js";import k from"./Drawer1.a7007f2c.js";import B from"./Drawer2.b76369af.js";import $ from"./Drawer3.a648f8d8.js";import v from"./Drawer4.7152e428.js";import P from"./Drawer5.451070b4.js";import{P as W}from"./index.f64131dc.js";import"./index.a1f47e5b.js";import"./ArrowLeftOutlined.335726f2.js";import"./BasicForm.4cb19f9d.js";/* empty css              *//* empty css              */import"./index.11572bd7.js";import"./index.a4363077.js";import"./Checkbox.08133fb4.js";import"./index.167d068a.js";import"./index.df748fb5.js";import"./index.136e576c.js";import"./index.4bd77d1c.js";import"./index.ff269ed8.js";import"./get.06733f17.js";import"./index.6a9803cf.js";import"./eagerComputed.5273b770.js";import"./index.419f32a1.js";import"./_baseIteratee.1bf4b788.js";import"./DeleteOutlined.212d5ad0.js";import"./index.b67a74c2.js";import"./useRefs.1d517a52.js";import"./Form.4c1ffd3f.js";import"./Col.9ae3040f.js";import"./useFlexGapSupport.79e4d221.js";import"./useSize.d5945e7b.js";import"./transButton.044dc68a.js";import"./index.6f5742a2.js";import"./index.86e796cd.js";import"./useWindowSizeFn.9dc32eeb.js";import"./FullscreenOutlined.773623fc.js";import"./index.c6f1546d.js";import"./uuid.2b29000c.js";import"./download.c2c94ec1.js";import"./base64Conver.08b9f4ec.js";import"./index.e6fd86c1.js";import"./index.e6e05c33.js";import"./uniqBy.7542f778.js";import"./useForm.61a15f9c.js";import"./index.5979f95e.js";import"./index.78a2e5b8.js";import"./useContentViewHeight.0badffd0.js";import"./index.79c036d8.js";const b=_({components:{Alert:R,PageWrapper:W,Drawer1:k,Drawer2:B,Drawer3:$,Drawer4:v,Drawer5:P},setup(){const[e,{openDrawer:o,setDrawerProps:m}]=u(),[g,{openDrawer:f}]=u(),[d,{openDrawer:n}]=u(),[i,{openDrawer:s}]=u(),[w,{openDrawer:D}]=u();function l(){s(!0,{data:"content",info:"Info"})}function c(){o(),m({loading:!0}),setTimeout(()=>{m({loading:!1})},2e3)}return{register1:e,openDrawer1:o,register2:g,openDrawer2:f,register3:d,openDrawer3:n,register4:i,register5:w,openDrawer5:D,send:l,openDrawerLoading:c}}});function L(e,o,m,g,f,d){const n=t("Alert"),i=t("a-button"),s=t("Drawer1"),w=t("Drawer2"),D=t("Drawer3"),l=t("Drawer4"),c=t("Drawer5"),F=t("PageWrapper");return E(),A(F,{title:"\u62BD\u5C49\u7EC4\u4EF6\u4F7F\u7528\u793A\u4F8B"},{default:p(()=>[r(n,{message:"\u4F7F\u7528 useDrawer \u8FDB\u884C\u62BD\u5C49\u64CD\u4F5C","show-icon":""}),r(i,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:p(()=>[a(" \u6253\u5F00Drawer ")]),_:1},8,["onClick"]),r(n,{message:"\u5185\u5916\u540C\u65F6\u63A7\u5236\u663E\u793A\u9690\u85CF","show-icon":""}),r(i,{type:"primary",class:"my-4",onClick:o[0]||(o[0]=C=>e.openDrawer2(!0))},{default:p(()=>[a(" \u6253\u5F00Drawer ")]),_:1}),r(n,{message:"\u81EA\u9002\u5E94\u9AD8\u5EA6/\u663E\u793Afooter","show-icon":""}),r(i,{type:"primary",class:"my-4",onClick:o[1]||(o[1]=C=>e.openDrawer3(!0))},{default:p(()=>[a(" \u6253\u5F00Drawer ")]),_:1}),r(n,{message:"\u5185\u5916\u6570\u636E\u4EA4\u4E92","show-icon":""}),r(i,{type:"primary",class:"my-4",onClick:e.send},{default:p(()=>[a(" \u6253\u5F00Drawer\u5E76\u4F20\u9012\u6570\u636E ")]),_:1},8,["onClick"]),r(n,{message:"\u8BE6\u60C5\u9875\u6A21\u5F0F","show-icon":""}),r(i,{type:"primary",class:"my-4",onClick:o[2]||(o[2]=C=>e.openDrawer5(!0))},{default:p(()=>[a(" \u6253\u5F00\u8BE6\u60C5Drawer ")]),_:1}),r(s,{onRegister:e.register1},null,8,["onRegister"]),r(w,{onRegister:e.register2},null,8,["onRegister"]),r(D,{onRegister:e.register3},null,8,["onRegister"]),r(l,{onRegister:e.register4},null,8,["onRegister"]),r(c,{onRegister:e.register5},null,8,["onRegister"])]),_:1})}var Wr=y(b,[["render",L]]);export{Wr as default};