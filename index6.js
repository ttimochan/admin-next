import{b8 as u,d as c,r as o,o as d,h as e,bu as m,bv as f,I as p,aW as v,z as g,F as x}from"./vendor.js";import{A as _}from"./Add12Filled.js";import{R as i,i as h,a as y}from"./index.js";import{R as w}from"./relative-time.js";import{H as k}from"./rounded-button.js";var s={};Object.defineProperty(s,"__esModule",{value:!0});const a=u,B={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},C=a.createVNode("path",{d:"M290.74 93.24l128.02 128.02l-277.99 277.99l-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22l277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55l128.02 128.02l56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z",fill:"currentColor"},null,-1);var b=s.default=a.defineComponent({name:"Pen",render:function(l,r){return a.openBlock(),a.createBlock("svg",B,[C])}});const j="_action_1fzxd_9";var z={"timeline-grid":"_timeline-grid_1fzxd_1",action:j},P=c({setup(){const n=o([]),l=o(!0);d(async()=>{i.api.recently.all.get().then(t=>{n.value=t.data,l.value=!1})});const{create:r}=h();return()=>e(y,{actionsElement:e(x,null,e(k,{onClick:()=>{r().then(t=>{t&&n.value.unshift(t)})},icon:e(_,null)}))},e(m,null,n.value.map(t=>e(f,{type:"success",key:t.id},{icon(){return e(p,null,e(b,null))},default(){return e("div",{class:z["timeline-grid"]},e("span",null,t.content),e("div",{class:"action"},e(v,{placement:"left",positiveText:"\u53D6\u6D88",negativeText:"\u5220\u9664",onNegativeClick:async()=>{await i.api.recently(t.id).delete(),message.success("\u5220\u9664\u6210\u529F"),n.value.splice(n.value.indexOf(t),1)}},{trigger:()=>e(g,{text:!0,type:"error",size:"tiny"},"\u79FB\u9664"),default:()=>e("span",{style:{maxWidth:"12rem"},class:"break-all"},"\u786E\u5B9A\u8981\u5220\u9664 ",t.content," ?")})))},footer(){return e(w,{time:t.created})}}))))}});export{P as default};
