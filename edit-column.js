import{u as c,C as f}from"./index.js";import{d,r as n,w as o,L as v,h as l,a$ as m,x as y,F as p}from"./vendor.js";const E=d({props:{initialValue:{type:String,required:!0},onSubmit:{type:Function,required:!0},placeholder:{type:String},type:{type:String,default:"input"},options:{type:Array,default:()=>[]},returnToConfrim:{type:Boolean,default:!0}},setup(e){const a=n(e.initialValue);o(()=>e.initialValue,t=>{a.value=t});const u=n(!1),i=n(),s=v();o(()=>u.value,t=>{!e.returnToConfrim||t&&(s.info("\u56DE\u8F66\u4EE5\u5B8C\u6210\u4FEE\u6539",{duration:1500}),requestAnimationFrame(()=>{i.value?.focus()}))});const r=()=>{e.onSubmit(a.value),u.value=!1};return c(f),()=>l(p,null,u.value?l("div",{class:"flex items-center w-full relative flex-nowrap"},(()=>{switch(e.type){case"input":return l(y,{onKeydown:t=>{t.key=="Enter"&&r()},class:"w-3/4",value:a.value,placeholder:e.placeholder??e.initialValue,size:"tiny",autofocus:!0,ref:i,onBlur:()=>{u.value=!1},onInput:t=>{a.value=t}});case"select":return l(m,{class:"w-full",placeholder:e.placeholder??e.initialValue,value:a.value,onUpdateValue:t=>{a.value=t,r()},onBlur:()=>{u.value=!1},options:e.options})}})()):l("button",{class:"w-full text-left",onClick:()=>{u.value=!0}},e.initialValue,"\xA0"))}});export{E};
