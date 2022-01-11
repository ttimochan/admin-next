import{_ as L,e as N,R as v,g as J,a as q}from"./index.js";import{d as g,r as B,B as U,w as b,h as e,g as w,af as T,f as _,aV as D,e as R,L as z,Q as j,b2 as P,b3 as y,x as F,a$ as H,b5 as $,b6 as I,bC as Y,bd as G,o as W,A as S,z as C,I as Q,aW as K,F as X,bq as Z,br as k}from"./vendor.js";import{_ as ee}from"./CheckCircleOutlined.js";import{H as O}from"./rounded-button.js";import{u as M}from"./use-react.js";import{d as te,l as V}from"./js-yaml.js";import{u as ae,a as ue,T as ne}from"./use-async-monaco.js";import{C as re}from"./index6.js";import{A as se}from"./Add12Filled.js";import{T as le}from"./index3.js";import{R as oe}from"./relative-time.js";import{u as ie}from"./use-table.js";class ce{created;id}var p;(function(r){r.JSON="json",r.Text="text",r.YAML="yaml"})(p||(p={}));class de extends ce{type=p.JSON;private=!0;raw="{}";name="";reference="root";comment;metatype}const pe=g({props:{value:{type:String,required:!0},onChange:{type:Function,required:!0},language:{type:String,required:!0}},setup(r){const o=B(),l=ae(r),a=ue(o,l,r.onChange,{language:r.language});let s=null;U(()=>{s&&(s=clearTimeout(s))});const i=u=>{const c=a.editor;if(!c){s=setTimeout(()=>{i(u)},100);return}const t=c.getModel();if(!t){s=setTimeout(()=>{i(u)},100);return}L(()=>import("./editor.main.js").then(function(n){return n.e}),["editor.main.js","assets/editor.main.90c5c042.css"]).then(n=>{n.editor.setModelLanguage(t,u)})};return b(()=>r.language,u=>{i(u)}),()=>e("div",{ref:o,class:"h-full w-full relative"},e(re,{description:"Monaco \u4F53\u79EF\u8F83\u5927\u8010\u5FC3\u7B49\u5F85\u52A0\u8F7D\u5B8C\u6210..."}))}}),me=g({setup(){const r=w(),o=T(),l=_(()=>o.query.id),a=B(new de),s=D(l.value?{json:"",yaml:"",text:""}:{json:JSON.stringify({name:"hello world"},null,2),text:"",yaml:"name: hello world"});b(()=>a.value.type,t=>{a.value.raw=s[t]}),b(()=>[s.json,s.yaml],R(([t,n],[f,m])=>{const d=t!==f,E=n!==m,x=I(s);try{d?x.yaml=te(JSON.parse(t)):E&&(x.json=JSON.stringify(V(n),null,2))}catch{}},100)),b(()=>l,async t=>{if(t.value){const n=await v.api.snippets(t.value).get();switch(n.type){case p.JSON:{n.raw=JSON.stringify(JSON.parse(n.raw),null,2);break}}a.value=n,s[n.type]=n.raw}},{immediate:!0});const i=N(),u=z(),c=async()=>{const t=d=>{try{return JSON.stringify(JSON.parse(d),null,0)}catch{u.error("JSON \u683C\u5F0F\u9519\u8BEF")}},n=()=>{const d=s[a.value.type];switch(a.value.type){case p.JSON:return t(d);case p.YAML:{try{V(d)}catch{u.error("YAML \u683C\u5F0F\u9519\u8BEF")}return d}default:return d}},m={...Y(a.value,["_id","id","created","data"]),raw:n()};m.metatype||delete m.metatype,l.value?await v.api.snippets(l.value).put({data:m}):await v.api.snippets.post({data:m}),u.success(`${l.value?"\u66F4\u65B0":"\u521B\u5EFA"}\u6210\u529F`),r.replace({query:{...o.query,tab:0}})};return M(()=>(i.setHeaderButton(e(O,{variant:"success",onClick:c,icon:e(ee,null)})),()=>{i.setHeaderButton(null)})),()=>e(ne,null,e(j,{span:12},e(P,null,e(y,{label:"\u540D\u79F0",required:!0},e(F,{onUpdateValue:t=>void(a.value.name=t),value:a.value.name})),e(y,{label:"\u5F15\u7528",required:!0},e(F,{value:a.value.reference,onUpdateValue:t=>void(a.value.reference=t),defaultValue:"root"})),e(y,{label:"\u5143\u7C7B\u578B"},e(F,{value:a.value.metatype,onUpdateValue:t=>void(a.value.metatype=t)})),e(y,{label:"\u6570\u636E\u7C7B\u578B"},e(H,{value:a.value.type,defaultValue:p.JSON,onUpdateValue:t=>void(a.value.type=t),options:Object.entries(p).map(([t,n])=>({label:t,value:n}))})),e(y,{label:"\u516C\u5F00",labelPlacement:"left"},e("div",{class:"w-full flex justify-end"},e($,{value:!a.value.private,onUpdateValue:t=>void(a.value.private=!t)}))),e(y,{label:"\u5907\u6CE8"},e(F,{resizable:!1,value:a.value.comment,onUpdateValue:t=>void(a.value.comment=t),type:"textarea",rows:4})))),e(j,{span:24},e(pe,{language:a.value.type.toLowerCase(),value:s[a.value.type],onChange:t=>{s[a.value.type]=t}})))}});var A={};Object.defineProperty(A,"__esModule",{value:!0});const h=G,ve={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},ye=h.createVNode("path",{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM540 701v53c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8v-53a48.01 48.01 0 1 1 56 0zm152-237H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224z",fill:"currentColor"},null,-1);var fe=A.default=h.defineComponent({name:"LockFilled",render:function(o,l){return h.openBlock(),h.createBlock("svg",ve,[ye])}});const ge=g({setup(){W(()=>{l(1,20)});const r=N();M(()=>(r.setHeaderButton(e(O,{onClick:()=>{i.push({query:{tab:1}})},icon:e(se,null)})),()=>{r.setHeaderButton(null)}));const{data:o,fetchDataFn:l,loading:a,pager:s}=ie((u,c)=>async(t,n)=>{const f=await v.api.snippets.get({params:{page:t,size:n,select:"-raw"}});u.value=f.data,c.value=f.pagination}),i=w();return()=>e(X,null,e(le,{data:o,pager:s,columns:[{key:"name",title:"\u540D\u79F0",render(u){const c=u.name,t=u.private;return e(S,{align:"center"},e(C,{tag:"a",text:!0,href:v.endpoint+"/snippets/"+u.reference+"/"+u.name+(u.private?`?token=bearer%20${J()}`:""),target:"_blank",size:"tiny"},c),t&&e(Q,{class:"items-center flex "},e(fe,null)))}},{title:"\u7C7B\u578B",key:"type"},{title:"\u5F15\u7528",key:"reference"},{key:"comment",title:"\u5907\u6CE8",width:300,ellipsis:{tooltip:!0}},{title:"\u521B\u5EFA\u4E8E",key:"created",render(u){return e(oe,{time:u.created})}},{title:"\u64CD\u4F5C",key:"id",fixed:"right",render(u){return e(S,null,e(C,{text:!0,size:"tiny",type:"primary",onClick:()=>{i.push({query:{tab:1,id:u.id}})}},"\u7F16\u8F91"),e(K,{positiveText:"\u53D6\u6D88",negativeText:"\u5220\u9664",onNegativeClick:async()=>{await v.api.snippets(u.id).delete(),message.success("\u5220\u9664\u6210\u529F"),await l(s.value.currentPage)}},{trigger:()=>e(C,{text:!0,type:"error",size:"tiny"},"\u79FB\u9664"),default:()=>e("span",{style:{maxWidth:"12rem"}},"\u786E\u5B9A\u8981\u5220\u9664 ",u.title," ?")}))}}],loading:a.value}))}});var ke=g({name:"SnippetView",setup(){const r=T(),o=w(),l=_(()=>r.query.tab||"0");return()=>e(q,null,e(Z,{size:"medium",value:l.value,onUpdateValue:a=>{o.push({query:{tab:a}})}},e(k,{name:"0",tab:"\u5217\u8868"},e(ge,null)),e(k,{name:"1",tab:"\u7F16\u8F91"},e(me,null))))}});export{ke as default};
