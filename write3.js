import{E as v,M as f,P as E,S as b}from"./parse-button.js";import{T as w}from"./TelegramPlane.js";import{d as y,ag as C,aU as A,l as F,o as P,r as j,G as x,u as R,h as t,a_ as B,a$ as D,b0 as I,b1 as S,b8 as N,F as l,I as T,b5 as M,b4 as U}from"./vendor.js";import{H as $}from"./rounded-button.js";import{U as i}from"./underline-input.js";import{R as n,B as H,a as L,d as W}from"./index.js";import{u as k}from"./use-parse-payload.js";import"./use-react.js";import"./props.js";const X=y(()=>{const d=C(),p=()=>({text:"",title:"",order:0,slug:"",subtitle:""}),c=a=>k(e)(a),e=A(p()),s=F(()=>d.query.id);P(async()=>{const a=s.value;if(a&&typeof a=="string"){const h=(await n.api.pages(a).get({})).data;c(h)}});const u=j(!1),r=x(),m=R(),g=async()=>{const a=()=>{try{if(!e.title||e.title.trim().length==0)throw"\u6807\u9898\u4E3A\u7A7A";if(!e.slug)throw"\u8DEF\u5F84\u4E3A\u7A7A";return{...U(e),title:e.title.trim(),slug:e.slug.trim()}}catch(o){throw r.error(o),o}};if(s.value){if(!M(s.value))return;const o=s.value;await n.api.pages(o).put({data:a()}),r.success("\u4FEE\u6539\u6210\u529F")}else await n.api.pages.post({data:a()}),r.success("\u53D1\u5E03\u6210\u529F");m.push({name:W.ListPage,hash:"|publish"})};return()=>t(L,{actionsElement:t(l,null,t(E,{data:e}),t($,{icon:t(w,null),onClick:g})),footerButtonElement:t(l,null,t("button",{onClick:()=>{u.value=!0}},t(T,null,t(b,null))))},t(f,{class:"mt-3 relative z-10",label:"\u4E0E\u4F60\u6709\u4E2A\u597D\u5FC3\u60C5~",value:e.title,onChange:a=>{e.title=a}}),t("div",{class:"text-gray-700 pt-3"},t(i,{value:e.subtitle,onChange:a=>void(e.subtitle=a)})),t("div",{class:"text-gray-500 py-3"},t("label",null,`${H}/`),t(i,{value:e.slug,onChange:a=>void(e.slug=a)})),t(v,{loading:!!(s.value&&!e.title),onChange:a=>{e.text=a},text:e.text}),t(B,{show:u.value,width:450,style:{maxWidth:"90vw"},placement:"right",onUpdateShow:a=>{u.value=a}},t(D,{title:"\u6587\u7AE0\u8BBE\u5B9A"},t(I,null,t(S,{label:"\u9875\u9762\u987A\u5E8F"},t(N,{placeholder:"",value:e.order,onChange:a=>void(e.order=a??0)}))))))});export{X as default};
