import{T as e}from"./TelegramPlane-7c371dc3-005d83d.js";import{H as a}from"./rounded-button-b26baf00-005d83d.js";import{M as l}from"./monaco-70bb5a05-005d83d.js";import{u as t}from"./use-parse-payload-beada753-005d83d.js";import{R as r,a as s,d as o}from"./index-005d83d.js";import{d as n,ab as i,u as d,aT as c,l as p,o as u,h as m,b1 as b,b2 as f,a_ as h,b3 as v,F as w,b6 as y,bs as g,b5 as j}from"./vendor-a1343634-005d83d.js";const x=n({setup(){const n=i(),x=d(),U=c({name:"",previewUrl:"",docUrl:"",projectUrl:"",images:[],description:"",avatar:"",text:""}),P=p((()=>n.query.id));u((async()=>{const e=P.value;if(e&&"string"==typeof e){(e=>{t(U)(e)})((await r.api.projects(e).get({})).data)}}));const S=async()=>{const e=()=>{try{if(!U.text||0==U.text.trim().length)throw"内容为空";return{...g(j(U),((e,a,l)=>(e[l]=void 0===a?null:"string"==typeof a&&0==a.length?"":a,e))),text:U.text.trim()}}catch(e){throw message.error(e),e}};if(P.value){if(!y(P.value))return;const a=P.value;await r.api.projects(a).put({data:e()}),message.success("修改成功")}else await r.api.projects.post({data:e()}),message.success("发布成功");x.push({name:o.ListProject})};return()=>m(s,{actionsElement:m(w,null,m(a,{variant:"primary",onClick:S,icon:m(e,null)}))},m(b,null,m(f,{label:"项目名称",required:!0,labelPlacement:"left",labelStyle:{width:"6rem"}},m(h,{autofocus:!0,placeholder:"",value:U.name,onInput:e=>{U.name=e}})),m(f,{label:"文档地址",labelPlacement:"left",labelStyle:{width:"6rem"}},m(h,{placeholder:"",value:U.docUrl,onInput:e=>{U.docUrl=e}})),m(f,{label:"预览地址",labelPlacement:"left",labelStyle:{width:"6rem"}},m(h,{placeholder:"",value:U.previewUrl,onInput:e=>{U.previewUrl=e}})),m(f,{label:"项目地址",labelPlacement:"left",labelStyle:{width:"6rem"}},m(h,{placeholder:"",value:U.projectUrl,onInput:e=>{U.projectUrl=e}})),m(f,{label:"项目描述",required:!0,labelPlacement:"left",labelStyle:{width:"6rem"}},m(h,{placeholder:"",value:U.description,onInput:e=>{U.description=e}})),m(f,{label:"项目图标",labelPlacement:"left",labelStyle:{width:"6rem"}},m(h,{placeholder:"",value:U.avatar,onInput:e=>{U.avatar=e}})),m(f,{label:"项目图标",labelPlacement:"left",labelStyle:{width:"6rem"}},m(v,{value:U.images,onUpdateValue:e=>{U.images=e}})),m(f,{label:"正文",required:!0},m(l,{onChange:e=>{U.text=e},text:U.text,class:"h-40 w-full",unSaveConfirm:!1}))))}});export{x as default};
//# sourceMappingURL=edit-e44541fb-005d83d.js.map