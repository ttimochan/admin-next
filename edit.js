import{T as y}from"./TelegramPlane.js";import{d as v,j as k,aU as C,ah as g,af as P,g as S,r as A,K as R,y as T,aV as I,f as _,o as j,h as t,b2 as H,b3 as c,x as m,F as w,b7 as x,bt as N,b6 as L}from"./vendor.js";import{H as d}from"./rounded-button.js";import{h as M,S as l,R as r,a as V,d as B}from"./index.js";import{u as q}from"./use-parse-payload.js";const z={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 12 12"},$=g("g",{fill:"none"},[g("path",{d:"M3 1a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v1.5a.5.5 0 0 0 .777.416L6.651 9H9a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3z",fill:"currentColor"})],-1);var K=v({name:"Comment12Filled",render:function(i,h){return k(),C("svg",z,[$])}});const W=v({setup(){const p=P(),i=S(),h=()=>({text:"",author:"",source:""}),s=A({});R(()=>{M([l.\u539F\u521B,l.\u54F2\u5B66,l.\u6587\u5B66,l.\u8BD7\u8BCD]).then(e=>{s.value={source:e.from,text:e.hitokoto,author:e.from_who||e.creator}})});const E=T(),F=async()=>{const e=async()=>{await r.api.says.post({data:s.value}),message.success("\u53D1\u5E03\u6210\u529F"),i.push({name:B.ListSay})};a.text||a.author||a.source?E.create({title:"\u8B66\u544A",content:"\u53D1\u5E03\u4E00\u8A00\u4F1A\u8986\u76D6\u73B0\u6709\u7684\u5185\u5BB9, \u8981\u7EE7\u7EED\u5417",type:"warning",negativeText:"\u53D6\u6D88",positiveText:"\u786E\u5B9A",onPositiveClick(){e()}}):e()},b=e=>q(a)(e),a=I(h()),n=_(()=>p.query.id);j(async()=>{const e=n.value;if(e&&typeof e=="string"){const u=(await r.api.says(e).get({})).data;b(u)}});const f=async()=>{const e=()=>{try{if(!a.text||a.text.trim().length==0)throw"\u5185\u5BB9\u4E3A\u7A7A";return{...N(L(a),(o,u,D)=>(o[D]=typeof u=="undefined"?null:typeof u=="string"&&u.length==0?"":u,o)),text:a.text.trim()}}catch(o){throw message.error(o),o}};if(n.value){if(!x(n.value))return;const o=n.value;await r.api.says(o).put({data:e()}),message.success("\u4FEE\u6539\u6210\u529F")}else await r.api.says.post({data:e()}),message.success("\u53D1\u5E03\u6210\u529F");i.push({name:B.ListSay})};return()=>t(V,{actionsElement:t(w,null,x(n)?t(d,{name:"\u66F4\u65B0",variant:"info",onClick:f,icon:t(y,null)}):t(w,null,t(d,{name:"\u53D1\u5E03\u4E00\u8A00",variant:"info",onClick:F,icon:t(K,null)}),t(d,{name:"\u53D1\u5E03\u81EA\u5DF1\u8BF4\u7684",variant:"primary",onClick:f,icon:t(y,null)})))},t(H,null,t(c,{label:"\u5185\u5BB9",required:!0,labelPlacement:"left",labelStyle:{width:"4rem"}},t(m,{type:"textarea",autofocus:!0,autosize:{minRows:6,maxRows:8},placeholder:s.value.text,value:a.text,onInput:e=>void(a.text=e)})),t(c,{label:"\u4F5C\u8005",labelPlacement:"left",labelStyle:{width:"4rem"}},t(m,{placeholder:s.value.author,value:a.author,onInput:e=>void(a.author=e)})),t(c,{label:"\u6765\u6E90",labelPlacement:"left",labelStyle:{width:"4rem"}},t(m,{placeholder:s.value.source,value:a.source,onInput:e=>void(a.source=e)}))))}});export{W as default};
