import{A as e}from"./Add12Filled.js";import{R as t,i as a,p as s,a as i}from"./index.js";import{d as r,r as l,o as n,h as d,aY as o,B as u,aW as c,A as m,F as p}from"./vendor.js";import{H as v}from"./rounded-button.js";var y=r({setup(){const r=l([]),y=l(!0);n((async()=>{t.api.recently.all.get().then((e=>{r.value=e.data,y.value=!1}))}));const{create:f}=a();return()=>d(i,{actionsElement:d(p,null,d(v,{onClick:()=>{f().then((e=>{e&&r.value.unshift(e)}))},icon:d(e,null)}))},d(o,{remote:!0,loading:y.value,bordered:!1,data:r.value,columns:[{title:"内容",key:"content",width:500},{title:"记录时间",key:"created",width:100,render:e=>s(e.created,"M-d HH:mm:ss")},{title:"操作",fixed:"right",width:60,key:"id",render:e=>d(u,null,d(c,{positiveText:"取消",negativeText:"删除",onNegativeClick:async()=>{await t.api.recently(e.id).delete(),message.success("删除成功"),r.value.splice(r.value.indexOf(e),1)}},{trigger:()=>d(m,{text:!0,type:"error",size:"tiny"},"移除"),default:()=>d("span",{style:{maxWidth:"12rem"}},"确定要删除 ",e.title," ?")}))}]}))}});export{y as default};
