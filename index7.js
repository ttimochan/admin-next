import{P as T}from"./Plus.js";import{H as R}from"./rounded-button.js";import{T as j}from"./index3.js";import{u as z}from"./use-table.js";import{R as o,d as S,a as M}from"./index.js";import{d as k,af as _,g as V,r as d,L as H,w as N,K as U,h as a,bc as K,G as W,b6 as G,b0 as c,x as C,a$ as $,A as D,z as v,o as J,bs as b,aW as O,bq as Q,br as E,bg as X,V as Y,F as Z,bw as L,b3 as ee}from"./vendor.js";var p;(function(t){t[t.Friend=0]="Friend",t[t.Collection=1]="Collection"})(p||(p={}));var l;(function(t){t[t.Pass=0]="Pass",t[t.Audit=1]="Audit"})(l||(l={}));var re=k({setup(){const t=_(),P=V(),B=d(t.query.state??l.Pass),{data:i,checkedRowKeys:ae,fetchDataFn:m,pager:h,loading:q}=z((e,s)=>async(n=t.query.page||1,y=50,x=t.query.state??l.Pass)=>{const A=await o.api.links.get({params:{page:n,size:y,state:x|0}});e.value=A.data,s.value=A.pagination}),g=H(),F=()=>({avatar:"",name:"",type:p.Friend,url:"",id:null,description:""}),r=d(!1),u=d(F());N(()=>t.query.state,async e=>{await m()}),N(()=>t.query.page,async e=>{await m()},{immediate:!0});const f=d(0),I=async()=>{const e=await o.api.links.state.get();f.value=e.audit};U(()=>{I()});const w=async()=>{const e=u.value.id;if(u.value.id,e){await o.api.links(e).put({data:L.omit(u.value,["id"])});const s=i.value.findIndex(n=>n.id==e);i.value[s]={...i.value[s],...ee(u.value)}}else{const{data:s}=await o.api.links.post({data:{...u.value}});i.value.unshift(s)}g.success("\u64CD\u4F5C\u6210\u529F"),u.value=F(),r.value=!1};return()=>a(M,{actionsElement:a(Z,null,a(R,{icon:a(T,null),variant:"primary",onClick:()=>{u.value=F(),r.value=!0}}))},a(Q,{size:"medium",value:B.value,onUpdateValue:e=>{B.value=e,P.replace({name:S.Friend,query:{state:e}})}},a(E,{name:l.Pass,tab:"\u670B\u53CB\u4EEC"},a("div",{class:""})),a(E,{name:l.Audit,tab:()=>a(X,{value:f.value,processing:!0},a(Y,null,"\u5F85\u5BA1\u6838"))},a("div",{class:""}))),a(j,{loading:q.value,data:i,nTableProps:{maxHeight:"calc(100vh - 22rem)"},columns:[{title:"\u5934\u50CF",key:"avatar",render(e){const s=k(()=>{const n=d(!e.avatar);return J(()=>{if(e.avatar){const y=new Image;y.src=e.avatar,y.onload=x=>{n.value=!0}}}),()=>e.avatar?n.value?a(b,{src:e.avatar,round:!0}):a(b,{round:!0},e.name.charAt(0)):a(b,{round:!0},e.name.charAt(0))});return a(s,null)}},{title:"\u540D\u79F0",key:"name"},{title:"\u7C7B\u578B",key:"type",render(e){return["\u670B\u53CB","\u6536\u85CF"][e.type|0]}},{title:"\u7F51\u5740",key:"url",render(e){return a("a",{target:"_blank",href:e.url,rel:"noreferrer"},e.url)}},{title:"\u63CF\u8FF0",key:"description"},{title:"\u64CD\u4F5C",fixed:"right",key:"id",render(e){return a(D,{wrap:!1},e.state==l.Audit&&a(v,{text:!0,size:"tiny",type:"success",onClick:async()=>{await o.api.links.audit(e.id).patch(),g.success("\u901A\u8FC7\u4E86\u6765\u81EA"+e.name+"\u7684\u53CB\u94FE\u9080\u8BF7");const s=i.value.findIndex(n=>n.id==e.id);i.value.splice(s,1),f.value--}},"\u901A\u8FC7"),a(v,{text:!0,size:"tiny",type:"info",onClick:s=>{r.value=!0,u.value={...e}}},"\u7F16\u8F91"),a(O,{positiveText:"\u53D6\u6D88",negativeText:"\u5220\u9664",onNegativeClick:async()=>{await o.api.links(e.id).delete(),g.success("\u5220\u9664\u6210\u529F"),await m(h.value.currentPage),e.state==l.Audit&&f.value--}},{trigger:()=>a(v,{text:!0,type:"error",size:"tiny"},"\u79FB\u9664"),default:()=>a("span",{style:{maxWidth:"12rem"}},"\u786E\u5B9A\u8981\u5220\u9664\u53CB\u94FE ",e.name," ?")}))}}],onFetchData:m,pager:h}),a(K,{show:r.value,onUpdateShow:e=>void(r.value=e)},a(W,{style:"width: 500px;max-width: 90vw",headerStyle:{textAlign:"center"},title:u.value.id?"\u7F16\u8F91: "+u.value.name:"\u65B0\u589E"},a(G,null,a(c,{label:"\u540D\u5B57",required:!0},a(C,{autofocus:!0,value:u.value.name,onInput:e=>void(u.value.name=e)})),a(c,{label:"\u5934\u50CF"},a(C,{autofocus:!0,value:u.value.avatar,onInput:e=>void(u.value.avatar=e)})),a(c,{label:"\u7F51\u5740",required:!0},a(C,{autofocus:!0,value:u.value.url,onInput:e=>void(u.value.url=e)})),a(c,{label:"\u63CF\u8FF0"},a(C,{autofocus:!0,value:u.value.description,onInput:e=>void(u.value.description=e)})),a(c,{label:"\u7C7B\u578B"},a($,{placeholder:"\u9009\u62E9\u7C7B\u578B",options:[{label:"\u670B\u53CB",value:p.Friend},{label:"\u6536\u85CF",value:p.Collection}],value:u.value.type,onUpdateValue:e=>void(u.value.type=e|0)}))),a("div",{class:"text-right"},a(D,{size:12,align:"center",inline:!0},a(v,{type:"success",onClick:w,round:!0},"\u786E\u5B9A"),a(v,{onClick:()=>{r.value=!1,u.value=F()},round:!0},"\u53D6\u6D88"))))))}});export{re as default};
