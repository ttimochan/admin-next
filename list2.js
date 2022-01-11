import{d,j as w,aU as g,ah as i,L as T,y as D,af as A,w as j,o as M,aV as L,h as t,F as k,I as h,aX as b,aq as R,aW as N,z,A as O}from"./vendor.js";import{A as H}from"./Add12Filled.js";import{D as V}from"./Delete16Regular.js";import{T as P}from"./title-link.js";import{T as S}from"./index3.js";import{E as x}from"./edit-column.js";import{R as F}from"./relative-time.js";import{u as $}from"./use-table.js";import{H as C}from"./rounded-button.js";import{R as c,a as q}from"./index.js";const U={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 384 512"},I=i("path",{d:"M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400L0 512z",fill:"currentColor"},null,-1);var K=d({name:"Bookmark",render:function(o,n){return w(),g("svg",U,[I])}});const W={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},X=i("path",{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z",fill:"currentColor"},null,-1);var G=d({name:"Heart",render:function(o,n){return w(),g("svg",W,[X])}});const J={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},Q=i("g",{fill:"none"},[i("path",{d:"M2.854 2.146a.5.5 0 1 0-.708.708l3.5 3.498a8.097 8.097 0 0 0-3.366 5.046a.5.5 0 1 0 .979.204a7.09 7.09 0 0 1 3.108-4.528L7.95 8.656a3.5 3.5 0 1 0 4.884 4.884l4.313 4.314a.5.5 0 0 0 .708-.708l-15-15z",fill:"currentColor"}),i("path",{d:"M10.124 8.003l3.363 3.363a3.5 3.5 0 0 0-3.363-3.363z",fill:"currentColor"}),i("path",{d:"M7.531 5.41l.803.803A6.632 6.632 0 0 1 10 6c3.206 0 6.057 2.327 6.74 5.602a.5.5 0 1 0 .98-.204C16.943 7.673 13.693 5 10 5c-.855 0-1.687.143-2.469.41z",fill:"currentColor"})],-1);var Y=d({name:"EyeHide20Filled",render:function(o,n){return w(),g("svg",J,[Q])}});const se=d({name:"NoteList",setup(){const{loading:m,checkedRowKeys:o,data:n,pager:f,sortProps:u,fetchDataFn:B}=$((l,e)=>async(r=y.query.page||1,a=20)=>{const v=await c.api.notes.get({params:{page:r,size:a,select:"title _id nid id created modified mood weather hide secret hasMemory coordinates location count",...u.sortBy?{sortBy:u.sortBy,sortOrder:u.sortOrder}:{}}});l.value=v.data,e.value=v.pagination}),p=T(),E=D(),y=A(),s=B;j(()=>y.query.page,async l=>{await s(l)}),M(async()=>{await s()});const _=d({setup(){const l=L([{type:"selection",options:["none","all"]},{title:"\u5E8F\u53F7",width:16*4,key:"nid"},{title:"\u6807\u9898",sortOrder:!1,sorter:"default",key:"title",width:280,render(e){return t(P,{inPageTo:"/notes/edit?id="+e.id,title:e.title,externalLinkTo:"/notes/"+e.nid,id:e.id},{default(){return t(k,null,e.hide||e.secret&&+new Date(e.secret)-+new Date>0?t(h,{color:"#34495e"},t(Y,null)):null,e.hasMemory?t(h,{color:"#e74c3c"},t(K,null)):null)}})}},{title:"\u5FC3\u60C5",key:"mood",width:100,render(e,r){return t(x,{initialValue:n.value[r].mood??"",onSubmit:async a=>{await c.api.notes(e.id).put({data:{mood:a}}),p.success("\u4FEE\u6539\u6210\u529F"),n.value[r].mood=a},placeholder:"\u5FC3\u60C5"})}},{title:"\u5929\u6C14",key:"weather",width:100,render(e,r){return t(x,{initialValue:n.value[r].weather??"",onSubmit:async a=>{await c.api.notes(e.id).put({data:{weather:a}}),p.success("\u4FEE\u6539\u6210\u529F"),n.value[r].weather=a},placeholder:"\u5929\u6C14"})}},{title:"\u5730\u70B9",key:"location",width:200,render(e){const{coordinates:r,location:a}=e;return a?t(b,{class:"truncate max-w-[200px]"},{tooltip(){return t("div",{class:""},t("p",null,a),t("p",null,r?.longitude,", ",r?.latitude))},default(){return a}}):null}},{title:()=>t(h,null,t(R,null)),key:"count.read",ellipsis:!0,render(e){return e.count?.read||0}},{title:()=>t(h,null,t(G,null)),ellipsis:!0,key:"count.like",render(e){return e.count?.like||0}},{title:"\u521B\u5EFA\u4E8E",key:"created",sortOrder:"descend",sorter:"default",width:200,render(e){return t(F,{time:e.created})}},{title:"\u4FEE\u6539\u4E8E",key:"modified",sorter:"default",sortOrder:!1,width:200,render(e){return t(F,{time:e.modified})}},{title:"\u64CD\u4F5C",key:"id",width:100,fixed:"right",render(e){return t(O,null,t(N,{positiveText:"\u53D6\u6D88",negativeText:"\u5220\u9664",onNegativeClick:async()=>{await c.api.notes(e.id).delete(),p.success("\u5220\u9664\u6210\u529F"),await s(f.value.currentPage)}},{trigger:()=>t(z,{text:!0,type:"error",size:"tiny"},"\u79FB\u9664"),default:()=>t("span",{style:{maxWidth:"12rem"}},"\u786E\u5B9A\u8981\u5220\u9664 ",e.title," ?")}))}}]);return()=>t(S,{loading:m.value,columns:l,data:n,onFetchData:s,pager:f,onUpdateCheckedRowKeys:e=>{o.value=e},onUpdateSorter:async e=>{u.sortBy=e.sortBy,u.sortOrder=e.sortOrder}})}});return()=>t(q,null,{actions:()=>t(k,null,t(C,{variant:"error",disabled:o.value.length==0,onClick:()=>{E.warning({title:"\u8B66\u544A",content:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:async()=>{for(const l of o.value)await c.api.notes(l).delete();o.value.length=0,p.success("\u5220\u9664\u6210\u529F"),await s()}})},icon:t(V,null)}),t(C,{to:"/notes/edit",icon:t(H,null)})),default:()=>t(_,null)})}});export{se as ManageNoteListView};
