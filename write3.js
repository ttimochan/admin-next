import{E as a,M as t,P as s,S as e}from"./parse-button.js";import{T as l}from"./TelegramPlane.js";import{d as o,af as r,aT as i,l as n,o as u,r as p,G as m,u as d,h as c,a_ as g,a$ as h,b0 as f,b1 as v,b8 as b,F as w,I as j,b5 as x,b4 as y}from"./vendor.js";import{H as C}from"./rounded-button.js";import{U as E}from"./underline-input.js";import{R as P,B as T,a as k,d as B}from"./index.js";import{u as S}from"./use-parse-payload.js";import"./index4.js";import"./props.js";const U=o((()=>{const o=r(),U=i({text:"",title:"",order:0,slug:"",subtitle:""}),$=n((()=>o.query.id));u((async()=>{const a=$.value;if(a&&"string"==typeof a){(a=>{S(U)(a)})((await P.api.pages(a).get({})).data)}}));const q=p(!1),z=m(),F=d(),G=async()=>{const a=()=>{try{if(!U.title||0==U.title.trim().length)throw"标题为空";if(!U.slug)throw"路径为空";return{...y(U),title:U.title.trim(),slug:U.slug.trim()}}catch(a){throw z.error(a),a}};if($.value){if(!x($.value))return;const t=$.value;await P.api.pages(t).put({data:a()}),z.success("修改成功")}else await P.api.pages.post({data:a()}),z.success("发布成功");F.push({name:B.ListPage,hash:"|publish"})};return()=>c(k,{actionsElement:c(w,null,c(s,{data:U}),c(C,{icon:c(l,null),onClick:G})),footerButtonElement:c(w,null,c("button",{onClick:()=>{q.value=!0}},c(j,null,c(e,null))))},c(t,{class:"mt-3 relative z-10",label:"与你有个好心情~",value:U.title,onChange:a=>{U.title=a}}),c("div",{class:"text-gray-500 py-3"},c("label",null,`${T}/`),c(E,{value:U.slug,onChange:a=>{U.slug=a}})),c(a,{loading:!(!$.value||U.title),onChange:a=>{U.text=a},text:U.text}),c(g,{show:q.value,width:450,style:{maxWidth:"90vw"},placement:"right",onUpdateShow:a=>{q.value=a}},c(h,{title:"文章设定"},c(f,null,c(v,{label:"页面顺序"},c(b,{placeholder:"",value:U.order,onChange:a=>{U.order=null!=a?a:0}}))))))}));export{U as default};
