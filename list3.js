import{A as k}from"./Add12Filled.js";import{D as B}from"./Delete16Regular.js";import{T as E}from"./title-link.js";import{T as D}from"./index3.js";import{R as d}from"./relative-time.js";import{u as h}from"./use-table.js";import{d as c,L as x,y as A,af as w,w as b,o as j,aV as R,h as t,aW as C,z as P,A as O,F as L}from"./vendor.js";import{H as g}from"./rounded-button.js";import{R as i,a as M}from"./index.js";const _=c({name:"PageList",setup(){const{checkedRowKeys:u,data:p,pager:o,sortProps:r,fetchDataFn:m}=h((a,e)=>async(F=l.query.page||1,v=20)=>{const T=await i.api.pages.get({params:{page:F,size:v,select:"title subtitle _id id created modified slug",...r.sortBy?{sortBy:r.sortBy,sortOrder:r.sortOrder}:{}}});a.value=T.data}),n=x(),f=A(),l=w(),s=m;b(()=>l.query.page,async a=>{await s(a)}),j(async()=>{await s()});const y=c({setup(){const a=R([{type:"selection",options:["none","all"]},{title:"\u6807\u9898",sortOrder:!1,sorter:"default",key:"title",width:300,render(e){return t(E,{inPageTo:"/pages/edit?id="+e.id,title:e.title,externalLinkTo:"/"+e.slug,id:e.id})}},{title:"\u526F\u6807\u9898",key:"subtitle"},{title:"\u8DEF\u5F84",key:"slug",render(e){return"/"+e.slug}},{title:"\u521B\u5EFA\u4E8E",key:"created",sortOrder:"descend",sorter:"default",render(e){return t(d,{time:e.created})}},{title:"\u4FEE\u6539\u4E8E",key:"modified",sorter:"default",sortOrder:!1,render(e){return t(d,{time:e.modified})}},{title:"\u64CD\u4F5C",fixed:"right",key:"id",render(e){return t(O,null,t(C,{positiveText:"\u53D6\u6D88",negativeText:"\u5220\u9664",onNegativeClick:async()=>{await i.api.pages(e.id).delete(),n.success("\u5220\u9664\u6210\u529F"),await s(o.value.currentPage)}},{trigger:()=>t(P,{text:!0,type:"error",size:"tiny"},"\u79FB\u9664"),default:()=>t("span",{style:{maxWidth:"12rem"}},"\u786E\u5B9A\u8981\u5220\u9664 ",e.title," ?")}))}}]);return()=>t(D,{noPagination:!0,columns:a,data:p,onFetchData:s,pager:o,onUpdateCheckedRowKeys:e=>{u.value=e},onUpdateSorter:async e=>{r.sortBy=e.sortBy,r.sortOrder=e.sortOrder}})}});return()=>t(M,null,{actions:()=>t(L,null,t(g,{variant:"error",disabled:u.value.length==0,onClick:()=>{f.warning({title:"\u8B66\u544A",content:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:async()=>{for(const a of u.value)await i.api.pages(a).delete();u.value.length=0,n.success("\u5220\u9664\u6210\u529F"),await s()}})},icon:t(B,null)}),t(g,{to:"/pages/edit",icon:t(k,null)})),default:()=>t(y,null)})}});export{_ as ManagePageListView};
