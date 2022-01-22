import{e as Z,u as j,R as F,U as G,p as ee,j as ae,d as ue,A as le,I as te,a as se}from"./index.js";import{d as B,o as C,h as e,B as oe,r as f,bE as ne,w as k,f as M,aV as D,bF as R,bG as E,b6 as b,P as S,bH as g,x as n,b0 as s,b1 as N,b2 as w,be as ie,A as U,V as P,F as T,bD as I,bI as re,bJ as _,b3 as pe,K as de,a_ as ve,aW as ce,z as x,I as me,b9 as be,G as fe,bm as Ee,s as ye,g as L,bK as Fe,a$ as ge,L as we,Q as q,bo as Be,af as he,bq as ke,br as V}from"./vendor.js";import{P as xe}from"./Plus.js";import{R as z}from"./relative-time.js";import{_ as H}from"./CheckCircleOutlined.js";import{H as W}from"./rounded-button.js";import{d as J}from"./index10.js";const Ae="mt-6",Ie={class:Ae,labelPlacement:"left",labelAlign:"right",labelWidth:150,autocomplete:"chrome-off"},c={autosize:!0,clearable:!0,style:"min-width: 300px; max-width: 100%"},Oe=B(()=>{const{setHeaderButton:l}=Z();C(()=>{l(e(W,{disabled:!0,onClick:o,icon:e(H,null)}))}),oe(()=>{l(null)});let v={};const a=f(Q({})),d=f({});k(()=>a.value,u=>{d.value=J(v,pe(u))},{deep:!0}),k(()=>d.value,u=>{let y=!1;I(u)?y=!1:y=!0,l(e(W,{disabled:!y,icon:e(H,null),onClick:o}))});async function o(){if(I(d.value))return;const u=Object.entries(d.value);for await(const[y,h]of u){const Y=Object.fromEntries(Object.entries(h).map(([O,K])=>Array.isArray(K)?[O,a.value[y][O]]:[O,K]));await F.api.options(y).patch({data:Y})}await i(),message.success("\u4FEE\u6539\u6210\u529F")}const i=async()=>{let u=await F.api.options.get();u=Q(re(u,["ok"])),v=_(u),a.value=u};C(()=>{i()});const t=f(["website"]),m=j(G),r=M(()=>m.viewport.value.mobile?1:2),p=D(Ie);return k(()=>m.viewport.value.mobile,u=>{u?(p.labelPlacement="top",p.labelAlign="left"):(p.labelPlacement="left",p.labelAlign="right")},{immediate:!0}),()=>e(T,null,e("div",{class:"pt-4"}),e(R,{accordion:!0,displayDirective:"if",expandedNames:t.value,onUpdateExpandedNames:u=>{t.value=u}},e(E,{title:"\u7F51\u7AD9\u8BBE\u7F6E",name:"website"},e(b,{...p},e(S,{cols:r.value,xGap:12},e(g,{span:1,label:"\u524D\u7AEF\u5730\u5740"},e(n,{value:a.value.url.webUrl,onInput:u=>void(a.value.url.webUrl=u)})),e(g,{span:1,label:"API \u5730\u5740"},e(n,{value:a.value.url.serverUrl,onInput:u=>void(a.value.url.serverUrl=u)})),e(g,{span:1,label:"\u540E\u53F0\u5730\u5740"},e(n,{value:a.value.url.adminUrl,onInput:u=>void(a.value.url.adminUrl=u)})),e(g,{span:1,label:"Gateway \u5730\u5740"},e(n,{value:a.value.url.wsUrl,onInput:u=>void(a.value.url.wsUrl=u)}))))),e(E,{title:"SEO \u4F18\u5316",name:"seo"},e(b,{...p},e(s,{label:"\u7F51\u7AD9\u6807\u9898"},e(n,{...c,value:a.value.seo.title,onInput:u=>void(a.value.seo.title=u)})),e(s,{label:"\u7F51\u7AD9\u63CF\u8FF0"},e(n,{...c,value:a.value.seo.description,onInput:u=>void(a.value.seo.description=u)})),e(s,{label:"\u5173\u952E\u5B57"},e(N,{round:!0,type:"primary",value:a.value.seo.keywords,onChange:u=>void(a.value.seo.keywords=u)})))),e(E,{title:"\u540E\u53F0\u9644\u52A0\u8BBE\u7F6E",name:"adminExtra"},e(b,{...p},e(s,{label:"\u5F00\u542F\u540E\u53F0\u7BA1\u7406\u53CD\u4EE3"},e(w,{value:a.value.adminExtra.enableAdminProxy,onUpdateValue:u=>void(a.value.adminExtra.enableAdminProxy=u)})),e(s,{label:"\u4E2D\u540E\u53F0\u6807\u9898"},e(n,{...c,value:a.value.adminExtra.title,onUpdateValue:u=>void(a.value.adminExtra.title=u)})),e(s,{label:"\u767B\u5F55\u9875\u9762\u80CC\u666F"},e(n,{...c,value:a.value.adminExtra.background,inputProps:{autocomplete:"off"},onUpdateValue:u=>void(a.value.adminExtra.background=u)})),e(s,{label:"\u9AD8\u5FB7\u67E5\u8BE2 API Key"},e(n,{...c,value:a.value.adminExtra.gaodemapKey,type:"password",showPasswordToggle:!0,clearable:!0,inputProps:{autocomplete:"off"},onUpdateValue:u=>{a.value.adminExtra.gaodemapKey=u}})))),e(E,{title:"\u8BC4\u8BBA\u8BBE\u7F6E",name:"comment"},e(b,{...p},e(s,{label:"\u53CD\u5783\u573E\u8BC4\u8BBA"},e(w,{value:a.value.commentOptions.antiSpam,onUpdateValue:u=>void(a.value.commentOptions.antiSpam=u)})),e(s,{label:"\u81EA\u5B9A\u4E49\u5C4F\u853D\u5173\u952E\u8BCD"},e(N,{disabled:!a.value.commentOptions.antiSpam,value:a.value.commentOptions.spamKeywords,onUpdateValue:u=>void(a.value.commentOptions.spamKeywords=u),type:"primary"})),e(s,{label:"\u81EA\u5B9A\u4E49\u5C4F\u853D IP"},e(N,{disabled:!a.value.commentOptions.antiSpam,value:a.value.commentOptions.blockIps,onUpdateValue:u=>void(a.value.commentOptions.blockIps=u),type:"primary"})),e(s,{label:"\u7981\u6B62\u975E\u4E2D\u6587\u8BC4\u8BBA"},e(w,{value:a.value.commentOptions.disableNoChinese,onUpdateValue:u=>void(a.value.commentOptions.disableNoChinese=u)})))),e(E,{title:"\u90AE\u4EF6\u901A\u77E5\u8BBE\u7F6E",name:"mail"},e(b,{...p},e(s,{label:"\u5F00\u542F\u90AE\u7BB1\u63D0\u9192"},e(w,{value:a.value.mailOptions.enable,onUpdateValue:u=>void(a.value.mailOptions.enable=u)})),e(S,{cols:r.value,xGap:12},e(g,{span:1,label:"\u53D1\u4EF6\u90AE\u7BB1 host"},e(n,{value:a.value.mailOptions.options?.host||"",onInput:u=>{a.value.mailOptions.options||(a.value.mailOptions.options={}),a.value.mailOptions.options.host=u}})),e(g,{span:1,label:"\u53D1\u4EF6\u90AE\u7BB1\u7AEF\u53E3"},e(ie,{value:a.value.mailOptions.options?.port||465,onChange:u=>{a.value.mailOptions.options||(a.value.mailOptions.options={}),a.value.mailOptions.options.port=u??465}})),e(g,{span:1,label:"\u53D1\u4EF6\u90AE\u7BB1\u5730\u5740"},e(n,{value:a.value.mailOptions.user,onInput:u=>void(a.value.mailOptions.user=u)})),e(g,{span:1,label:"\u53D1\u4EF6\u90AE\u7BB1\u5BC6\u7801"},e(n,{type:"password",showPasswordToggle:!0,inputProps:{name:"email-password",autocomplete:"new-password",autocapitalize:"off",autocorrect:"off"},value:a.value.mailOptions.pass,onInput:u=>void(a.value.mailOptions.pass=u)}))))),e(E,{name:"backup",title:"\u5907\u4EFD"},e(b,{...p},e(s,{label:"\u5F00\u542F\u81EA\u52A8\u5907\u4EFD"},e(U,{vertical:!0},e(w,{value:a.value.backupOptions.enable,onUpdateValue:u=>void(a.value.backupOptions.enable=u)}),e(P,{class:"text-xs",depth:3},"\u586B\u5199\u4EE5\u4E0B COS \u4FE1\u606F, \u5C06\u540C\u65F6\u4E0A\u4F20\u5907\u4EFD\u5230 COS"))),e(s,{label:"\u5730\u57DF Region"},e(n,{...c,value:a.value.backupOptions.region,onInput:u=>void(a.value.backupOptions.region=u)})),e(s,{label:"SecretId"},e(n,{...c,value:a.value.backupOptions.secretId,onInput:u=>void(a.value.backupOptions.secretId=u)})),e(s,{label:"SecretKey"},e(n,{...c,type:"password",inputProps:{name:"secret-key-password",autocomplete:"new-password",autocapitalize:"off",autocorrect:"off"},showPasswordToggle:!0,value:a.value.backupOptions.secretKey,onInput:u=>void(a.value.backupOptions.secretKey=u)})))),e(E,{name:"baidu_push",title:"\u767E\u5EA6\u63A8\u9001"},e(b,{...p},e(s,{label:"\u5F00\u542F\u63A8\u9001"},e(w,{value:a.value.baiduSearchOptions.enable,onUpdateValue:u=>void(a.value.baiduSearchOptions.enable=u)})),e(s,{label:"Token",path:"baidu_push"},e(n,{...c,showPasswordToggle:!0,type:"password",inputProps:{name:"baidu-push-password",autocomplete:"new-password",autocapitalize:"off",autocorrect:"off"},disabled:!a.value.baiduSearchOptions.enable,value:a.value.baiduSearchOptions.token,onUpdateValue:u=>void(a.value.baiduSearchOptions.token=u)})))),e(E,{name:"algolia",title:"Algolia Search"},e(b,{...p},e(s,{label:"\u5F00\u542F Algolia Search"},e(w,{value:a.value.algoliaSearchOptions.enable,onUpdateValue:u=>void(a.value.algoliaSearchOptions.enable=u)})),e(s,{label:"AppId"},e(n,{...c,disabled:!a.value.algoliaSearchOptions.enable,value:a.value.algoliaSearchOptions.appId,onInput:u=>void(a.value.algoliaSearchOptions.appId=u)})),e(s,{label:"apiKey"},e(n,{...c,type:"password",disabled:!a.value.algoliaSearchOptions.enable,value:a.value.algoliaSearchOptions.apiKey,onInput:u=>void(a.value.algoliaSearchOptions.apiKey=u)})),e(s,{label:"indexName"},e(n,{...c,disabled:!a.value.algoliaSearchOptions.enable,value:a.value.algoliaSearchOptions.indexName,onInput:u=>void(a.value.algoliaSearchOptions.indexName=u)}))))))});function Q(l){return ne({seo:{title:"",description:"",keywords:[]},url:{wsUrl:"",adminUrl:"",serverUrl:"",webUrl:""},mailOptions:{user:"",pass:"",options:{host:"",port:465},enable:!1},commentOptions:{antiSpam:!1,spamKeywords:[],blockIps:[],disableNoChinese:!1},backupOptions:{enable:!1,secretId:"",secretKey:"",bucket:"",region:""},baiduSearchOptions:{enable:!1,token:""},algoliaSearchOptions:{enable:!1},adminExtra:{enableAdminProxy:!1,background:"",gaodemapKey:"",title:"\u9759\u304B\u306A\u68EE"}},l)}const Ce=B(()=>()=>e(T,null,e("div",{class:"pt-4"}),e(R,{defaultExpandedNames:["reset"],displayDirective:"if"},e(E,{name:"reset",title:"\u4FEE\u6539\u5BC6\u7801"},e(Se,null)),e(E,{name:"token",title:"API Token"},e(De,null))))),De=B(()=>{const l=f([]),v=()=>({name:"",expired:!1,expiredTime:new Date}),a=D(v()),d=async()=>{const{data:r}=await F.api.auth.token.get();l.value=r};de(()=>{d()});const o=f(!1),i=async()=>{const r={name:a.name,expired:a.expired?a.expiredTime.toISOString():void 0},p=await F.api.auth.token.post({data:r});await navigator.clipboard.writeText(p.token),o.value=!1;const u=v();for(const h in u)a[h]=u[h];message.success("\u751F\u6210\u6210\u529F, Token \u5DF2\u590D\u5236, "+p.token),await d();const y=l.value.findIndex(h=>h.name===r.name);y!==-1&&(l.value[y].token=p.token)},t=async r=>{await F.api.auth.token.delete({params:{id:r}}),message.success("\u5220\u9664\u6210\u529F");const p=l.value.findIndex(u=>u.id===r);p!=-1&&l.value.splice(p,1)},m=j(G);return()=>e(ye,{class:"!overflow-visible"},e(be,{show:o.value,onUpdateShow:r=>void(o.value=r)},e(fe,{bordered:!1,title:"\u521B\u5EFA Token",class:"max-w-full w-[500px]"},e(b,null,e(s,{label:"\u540D\u79F0",required:!0},e(n,{value:a.name,onInput:r=>void(a.name=r)})),e(s,{label:"\u662F\u5426\u8FC7\u671F"},e(w,{value:a.expired,onUpdateValue:r=>void(a.expired=r)})),e(s,{label:"\u8FC7\u671F\u65F6\u95F4"},e(Ee,{disabled:!a.expired,value:a.expiredTime,type:"datetime",onUpdateValue:r=>void(a.expiredTime=new Date(r))}))),e(U,null,e(x,{round:!0,onClick:()=>void(o.value=!1)},"\u53D6\u6D88"),e(x,{round:!0,type:"primary",onClick:i},"\u786E\u5B9A")))),e(x,{class:"absolute right-0 top-[-3rem]",round:!0,type:"primary",onClick:()=>{o.value=!0}},e(me,null,e(xe,null)),e("span",{class:"ml-2"},"\u65B0\u589E")),e(ve,{scrollX:Math.max(800,m.contentWidth.value-m.contentInsetWidth.value),remote:!0,bordered:!1,data:l.value,columns:[{key:"name",title:"\u540D\u79F0"},{key:"token",title:"Token",render({token:r}){return r??"*".repeat(40)}},{title:"\u521B\u5EFA\u65F6\u95F4",key:"created",render({created:r}){return e(z,{time:r})}},{title:"\u8FC7\u671F\u65F6\u95F4",key:"expired",render({expired:r}){return ee(r,"yyyy\u5E74M\u6708d\u65E5 HH:mm:ss")}},{title:"\u64CD\u4F5C",key:"id",render({id:r,name:p}){return e(U,null,e(ce,{positiveText:"\u53D6\u6D88",negativeText:"\u5220\u9664",onNegativeClick:()=>{t(r)}},{trigger:()=>e(x,{text:!0,type:"error"},"\u5220\u9664"),default:()=>e("span",{style:{maxWidth:"12rem"}},'\u786E\u5B9A\u8981\u5220\u9664 Token "',p,'"?')}))}}]}))}),Se=B(()=>{const l=D({password:"",reenteredPassword:""}),v=f(),a=L(),d=async()=>{!v.value||v.value.validate(async i=>{i?console.log(i):(await F.api.master.patch({data:{password:l.password}}),message.success("\u66F4\u6539\u6210\u529F"),ae(),a.push({name:ue.Login}))})};function o(i,t){return console.log(i),t===l.password}return()=>e(b,{class:"max-w-[300px]",ref:v,model:l,rules:{password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"}],reenteredPassword:[{required:!0,message:"\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801",trigger:["input","blur"]},{validator:o,message:"\u4E24\u6B21\u5BC6\u7801\u8F93\u5165\u4E0D\u4E00\u81F4",trigger:["blur","password-input"]}]}},e(s,{label:"\u65B0\u5BC6\u7801",required:!0,path:"password"},e(n,{...c,value:l.password,onInput:i=>void(l.password=i),type:"password"})),e(s,{label:"\u91CD\u590D\u5BC6\u7801",required:!0,path:"reenteredPassword"},e(n,{...c,value:l.reenteredPassword,onInput:i=>void(l.reenteredPassword=i),type:"password"})),e("div",{class:"w-full text-right"},e(x,{onClick:d,type:"primary",round:!0},"\u4FDD\u5B58")))}),Ne=B({props:{value:{type:Object,required:!0},onChange:{type:Function,required:!0},options:{type:Array,required:!1}},setup(l){let v=I(l.value)?null:l.value;const a=k(()=>l.value,o=>{if(!v&&o){const i=Object.entries(o).map(([t,m])=>({key:t,value:m.toString()}));d.value=i,a()}}),d=f([]);return k(()=>d.value,o=>{const i=o.reduce((t,m)=>(m.key===""&&m.value===""||(t[m.key]=m.value.toString()),t),{});l.onChange(i)},{deep:!0}),()=>e(Fe,{value:d.value,onUpdateValue:o=>{d.value=(()=>{const i=o.findIndex(t=>t===null);return i!==-1&&o.splice(i,1,{key:"",value:""}),o})()}},{default(o){return e("div",{class:"flex items-center w-full"},e(ge,{class:"mr-4",filterable:!0,tag:!0,placeholder:"\u8BF7\u9009\u62E9",value:o.value.key,onUpdateValue:i=>{o.value.key=i},options:l.options}),e(n,{value:o.value.value.toString(),onUpdateValue:i=>{o.value.value=i}}))}})}}),X={GitHub:"github",Weibo:"weibo",\u7F51\u6613\u4E91:"netease",\u54D4\u54E9\u54D4\u54E9:"bilibili"},Ue="_avatar_7rrjr_3";var $={"tab-user":"_tab-user_7rrjr_1",avatar:Ue};const Pe=B(()=>{const l=f({});let v;async function a(){const t=await F.api.master.get();l.value=t,v={...t}}C(async()=>{await a()});const d=we(),o=M(()=>J(v,l.value)),i=async()=>{const t=_(Be(o));t.socialIds&&(t.socialIds=l.value.socialIds),await F.api.master.patch({data:t}),d.success("\u4FDD\u5B58\u6210\u529F~"),await a()};return()=>e(T,null,e(S,{cols:"1 400:1 600:2",class:$["tab-user"],xGap:20,yGap:20},e(q,null,e(b,{class:"flex flex-col justify-center items-center "},e(s,null,e("div",{class:$.avatar},e(le,{src:l.value.avatar,size:200}))),e(s,{label:"\u4E0A\u6B21\u767B\u9646\u65F6\u95F4",class:"!mt-4"},e("div",{class:"text-center w-full"},e(P,null,l.value.lastLoginTime?e(z,{time:l.value.lastLoginTime}):"N/A"))),e(s,{label:"\u4E0A\u6B21\u767B\u9646\u5730\u5740"},e("div",{class:"text-center w-full"},l.value.lastLoginIp?e(te,{trigger:"hover",ip:l.value.lastLoginIp,triggerEl:e(P,{class:"cursor-pointer"},l.value.lastLoginIp)}):"N/A")),e(s,null,e(x,{round:!0,class:"-mt-14",type:"primary",onClick:i,disabled:I(o.value)},"\u4FDD\u5B58")))),e(q,null,e(b,null,e(s,{label:"\u4E3B\u4EBA\u540D (username)"},e(n,{value:l.value.username,onInput:t=>{l.value.username=t}})),e(s,{label:"\u4E3B\u4EBA\u6635\u79F0 (name)"},e(n,{value:l.value.name,onInput:t=>{l.value.name=t}})),e(s,{label:"\u4E3B\u4EBA\u90AE\u7BB1 (mail)"},e(n,{value:l.value.mail,onInput:t=>{l.value.mail=t}})),e(s,{label:"\u4E2A\u4EBA\u9996\u9875"},e(n,{value:l.value.url,onInput:t=>{l.value.url=t}})),e(s,{label:"\u5934\u50CF"},e(n,{value:l.value.avatar,onInput:t=>{l.value.avatar=t}})),e(s,{label:"\u4E2A\u4EBA\u4ECB\u7ECD"},e(n,{type:"textarea",resizable:!1,value:l.value.introduce,onInput:t=>{l.value.introduce=t}})),e(s,{label:"\u793E\u4EA4\u5E73\u53F0 ID \u5F55\u5165"},e(Ne,{options:Object.keys(X).map(t=>({label:t,value:X[t]})),onChange:t=>{l.value.socialIds=t},value:l.value.socialIds||{}}))))))});var A;(function(l){l.User="user",l.System="system",l.Security="security"})(A||(A={}));var _e=B({setup(){const l=he(),v=L(),a=f(l.params.type);k(()=>l.params.type,o=>{!o||(a.value=o)});const d=f(null);return()=>e(se,{actionsElement:d.value},e(ke,{value:a.value,onUpdateValue:o=>{v.replace({...l,params:{...l.params,type:o}})}},e(V,{tab:"\u7528\u6237",name:A.User},e(Pe,null)),e(V,{tab:"\u7CFB\u7EDF",name:A.System},e(Oe,null)),e(V,{tab:"\u5B89\u5168",name:A.Security},e(Ce,null))))}});export{_e as default};
