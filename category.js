import{A as z}from"./Add12Filled.js";import{H as T}from"./rounded-button.js";import{t as j}from"./index3.js";import{u as I,R as l,a as R,C as M}from"./index.js";import{d as C,aV as f,r as p,L as x,o as H,w as k,h as e,a_ as S,aY as L,z as o,A as F,bg as q,bh as P,O as D,aW as U,F as V,b9 as W,G,b6 as O,bi as E,x as N}from"./vendor.js";const Q=C(s=>{const a=I(M),c=f([]),i=p(!0),u=a.fetch,y=x();H(async()=>{i.value=!0,await u(),i.value=!1;const{data:t}=await l.api.categories.get({params:{type:"tag"}});c.push(...t)});const d=p(""),g=f([]);k(()=>d.value,async t=>{const n=await l.api.categories(t).get({params:{tag:"true"}});g.length=0,g.push(...n.data)});const r=p(!1),b=()=>({name:"",slug:""}),h=p(b());return()=>e(R,{actionsElement:e(V,null,e(T,{variant:"success",icon:e(z,null),onClick:()=>{r.value=!0,h.value=b()}}))},e(D,{prefix:"bar"},"\u5206\u7C7B"),e(A,{show:r,onSubmit:async t=>{const{name:n,slug:w}=t,v=typeof r.value=="string"?r.value:null;if(v){await l.api.categories(v).put({data:{name:n,slug:w,type:0}}),y.success("\u4FEE\u6539\u6210\u529F");const m=a.data.value.findIndex(B=>B.id==v);a.data.value[m]={...a.data.value[m],...t}}else{const m=await l.api.categories.post({data:{name:n,slug:w}});y.success("\u521B\u5EFA\u6210\u529F"),a.data.value.push(m.data)}},initialState:h.value}),e(S,{rowClassName:()=>j,size:"small",bordered:!1,data:a.data.value||[],remote:!0,loading:i.value,columns:[{title:"\u540D\u79F0",key:"name"},{title:"\u6570",key:"count"},{title:"\u8DEF\u5F84",key:"slug",width:300},{width:300,title:"\u64CD\u4F5C",fixed:"right",key:"id",render(t){return e(F,{size:12},e(o,{size:"tiny",text:!0,type:"primary",onClick:n=>{h.value={name:t.name,slug:t.slug},r.value=t.id}},"\u7F16\u8F91"),e(U,{positiveText:"\u53D6\u6D88",negativeText:"\u5220\u9664",onNegativeClick:async()=>{await l.api.categories(t.id).delete(),y.success("\u5220\u9664\u6210\u529F"),await a.fetch(!0)}},{trigger:()=>e(o,{text:!0,type:"error",size:"tiny"},"\u79FB\u9664"),default:()=>e("span",{style:{maxWidth:"12rem"}},"\u786E\u5B9A\u8981\u5220\u9664 ",t.title," ?")}))}}]}),e(D,{prefix:"bar"},"\u6807\u7B7E"),e(F,{size:12},c.map(t=>e(q,{value:t.count,key:t.name},e(P,{class:"border-gray-200 border",round:!0,type:"success",checkable:!0,bordered:!0,checked:d.value==t.name,onUpdateChecked:n=>{n?d.value=t.name:d.value=""}},t.name)))),g.length!=0&&e(S,{remote:!0,class:"mt-4",data:g,columns:[{title:"\u6807\u9898",key:"title",render(t){return e(L,{to:"/posts/edit?id="+t.id},e(o,{type:"primary",text:!0},t.title))}},{title:"\u5206\u7C7B",key:"category",render(t){return t.category.name}}]}))}),A=C(s=>{const a=f(s.initialState??{name:"",slug:""});k(()=>s.initialState,u=>{u&&(a.name=u.name,a.slug=u.slug)});const c=x(),i=()=>{if(!a.name||!a.slug){c.error("\u540D\u5B57 \u548C \u8DEF\u5F84 \u4E0D\u80FD\u4E3A\u7A7A");return}s.onSubmit(a),s.show.value=!1};return()=>e(W,{show:!!s.show.value,onUpdateShow:u=>{s.show.value=u}},{default:()=>e(G,{style:"width: 500px;max-width: 90vw",headerStyle:{textAlign:"center"},title:s.initialState?"\u7F16\u8F91":"\u65B0\u5EFA"},e(O,{onSubmit:i,rules:{name:{required:!0,trigger:["input","blur"]},slug:{required:!0,trigger:["input","blur"]}}},e(E,{path:"name",label:"\u540D\u5B57"},e(N,{placeholder:"",onInput:u=>{a.name=u},value:a.name})),e(E,{path:"slug",label:"\u8DEF\u5F84"},e(N,{placeholder:"",onInput:u=>{a.slug=u},value:a.slug})),e("div",{class:"text-center"},e(F,{size:12,align:"center",inline:!0},e(o,{type:"success",onClick:i,round:!0},"\u786E\u5B9A"),e(o,{onClick:()=>s.show.value=!1,round:!0},"\u53D6\u6D88")))))})});A.props=["initialState","onSubmit","show"];export{Q as CategoryView};
