import{E as U,M as x,P as A,S as N}from"./parse-button.js";import{T as k}from"./TelegramPlane.js";import{d as b,ag as D,o as v,aU as T,c as E,r as n,G as V,g as W,h as t,a$ as M,b0 as $,b1 as H,b2 as r,a_ as w,b3 as q,y as z,b4 as C,F as I,I as L,b5 as y,b6 as _}from"./vendor.js";import{H as G}from"./rounded-button.js";import{U as O}from"./underline-input.js";import{u as Y,R as m,W as J,a as K,C as Q,d as X}from"./index.js";import"./js-yaml.js";import"./props.js";const ne=b(()=>{const B=D(),s=Y(Q);v(async()=>{await s.fetch()});const F=()=>({categoryId:s.data?.value?.[0].id??"",slug:"",text:"",title:"",copyright:!0,tags:[],hide:!1,summary:"",id:void 0}),S=e=>{const o=y(a),i=Object.keys(o);for(const u in e)i.includes(u)&&(a[u]=e[u])},a=T(F()),l=E(()=>B.query.id),j=E(()=>s.get(a.categoryId)||s.data?.value?.[0]||{});v(async()=>{const e=l.value;if(e&&typeof e=="string"){const o=await m.api.posts(e).get();S(o.data)}});const p=n(!1),h=V(),P=W(),R=async()=>{if(l.value){if(!_(l.value))return;const e=l.value;await m.api.posts(e).put({data:{...y(a),summary:a.summary&&a.summary.trim()!=""?a.summary.trim():null}}),h.success("\u4FEE\u6539\u6210\u529F")}else await m.api.posts.post({data:{...y(a),summary:a.summary.trim()==""?null:a.summary.trim()}}),h.success("\u53D1\u5E03\u6210\u529F");P.push({name:X.ViewPost,hash:"|publish"})};return()=>t(K,{title:l.value?"\u4FEE\u6539\u6587\u7AE0":"\u64B0\u5199\u65B0\u6587\u7AE0",actionsElement:t(I,null,t(A,{data:a,onHandleYamlParsedMeta:e=>{a.title=e.title??a.title,a.slug=e.slug??a.slug}}),t(G,{icon:t(k,null),onClick:R})),footerButtonElement:t(I,null,t("button",{onClick:()=>{p.value=!0}},t(L,null,t(N,null))))},t(x,{class:"mt-3 relative z-10",label:"\u60F3\u60F3\u53D6\u4E2A\u4EC0\u4E48\u6807\u9898\u597D\u5462~",value:a.title,onChange:e=>{a.title=e}}),t("div",{class:"text-gray-500 py-3"},t("label",{class:"prefix"},`${J}/${j.value.slug}/`),t(O,{class:"ml-2",value:a.slug,onChange:e=>{a.slug=e}})),t(U,{loading:!!(l.value&&typeof a.id=="undefined"),onChange:e=>{a.text=e},text:a.text}),t(M,{show:p.value,width:450,style:{maxWidth:"90vw"},placement:"right",onUpdateShow:e=>{p.value=e}},t($,{title:"\u6587\u7AE0\u8BBE\u5B9A"},t(H,null,t(r,{label:"\u5206\u7C7B",required:!0,path:"category"},t(w,{placeholder:"\u8BF7\u9009\u62E9",value:a.categoryId,onUpdateValue:e=>{a.categoryId=e},options:s.data.value?.map(e=>({label:e.name,value:e.id,key:e.id}))||[]})),t(r,{label:"\u6807\u7B7E"},t(q,{value:a.tags,onUpdateValue:e=>{a.tags.length=0,a.tags.push(...e)}},{input({submit:e}){const o=b({setup(){const i=n([]),u=n(!1),f=n(""),g=n();return v(async()=>{u.value=!0,g.value&&g.value.$el.querySelector("input").focus();const{data:c}=await m.api.categories.get({params:{type:"Tag"}});i.value=c.map(d=>({label:d.name+" ("+d.count+")",value:d.name,key:d.name})),u.value=!1}),()=>t(w,{ref:g,size:"small",value:f.value,clearable:!0,loading:u.value,filterable:!0,tag:!0,options:i.value,onUpdateValue:c=>{f.value=c,e(c)}})}});return t(o,null)}})),t(r,{label:"\u6982\u8981"},t(z,{placeholder:"\u6587\u7AE0\u6982\u8981",value:a.summary,onInput:e=>void(a.summary=e)})),t(r,{label:"\u9690\u85CF",labelWidth:100,labelAlign:"right",labelPlacement:"left"},t(C,{value:a.hide,onUpdateValue:e=>void(a.hide=e)})),t(r,{label:"\u7248\u6743\u6CE8\u660E",labelWidth:100,labelAlign:"right",labelPlacement:"left"},t(C,{value:a.copyright,onUpdateValue:e=>void(a.copyright=e)}))))))});export{ne as default};
