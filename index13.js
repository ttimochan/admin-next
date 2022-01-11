import{P as w,k as f,R as p}from"./index.js";import{d as c,r as d,o as g,aV as v,p as y,h as e,G as C,bJ as A,bK as m,N,i as _,b3 as s,x as l,b4 as D,b2 as F,L as x,A as E,z as B}from"./vendor.js";const V="_full_1abhi_1";var h={full:V,"n-step-content__description":"_n-step-content__description_1abhi_6","form-card":"_form-card_1abhi_9","bg-image":"_bg-image_1abhi_12"};const S=()=>_("configs");var T=c({components:{ParallaxButtonVue:w},setup(){const n=d(!1);g(()=>{const o=new Image;o.src=f,o.onload=i=>{n.value=!0}});const u=v({});g(async()=>{const o=await p.api.init.configs.default.get();Object.assign(u,o)}),y("configs",u);const t=d(0);return()=>e("div",{class:h.full},n.value&&e("div",{class:"bg-image",style:`--bg: url(${f})`}),e(C,{title:"\u521D\u59CB\u5316",class:"modal-card sm m-auto form-card"},e(A,{size:"small",current:t.value},e(m,{status:t.value>0?"finish":"process",title:"\u7AD9\u70B9\u8BBE\u7F6E",description:"\u5148\u8BBE\u7F6E\u4E00\u4E0B\u7AD9\u70B9\u76F8\u5173\u914D\u7F6E\u5427"}),e(m,{status:t.value>1?"finish":t.value<1?"wait":"process",title:"\u4E3B\u4EBA\u4FE1\u606F",description:"\u8BF7\u544A\u8BC9\u4F60\u7684\u540D\u5B57"}),e(m,{status:t.value>2?"finish":t.value<2?"wait":"process",title:"(\u0E51\u2022\u0300\u3142\u2022\u0301)\u0648\u2727",description:"\u4E00\u5207\u5C31\u7EEA\u4E86"})),e("div",{class:"mt-[3.5rem]"},JSON.stringify(u)==="{}"?e("div",{class:"text-center py-4"},e(N,null)):e([I,q,k][t.value],{onNext(){t.value++}}))))}});const b={onNext:{type:Function,required:!0}},I=c({props:b,setup(n){const u=S(),t=d(u?.seo?.title||""),o=d(u?.seo?.keywords),i=d(u?.seo?.description||""),a=v({adminUrl:location.origin+"/qaqdmin",serverUrl:location.origin+"/api/v2",webUrl:location.origin,wsUrl:location.origin}),U=async()=>{await Promise.all([p.api.init.configs("seo").patch({data:{title:t.value,keywords:o.value,description:i.value}}),p.api.init.configs("url").patch({data:{...a}})]),n.onNext()};return()=>e(F,null,e(s,{label:"\u7AD9\u70B9\u6807\u9898",required:!0},e(l,{value:t.value,onUpdateValue:r=>void(t.value=r)})),e(s,{label:"\u7AD9\u70B9\u63CF\u8FF0",required:!0},e(l,{value:i.value,onUpdateValue:r=>void(i.value=r)})),e(s,{label:"\u5173\u952E\u5B57"},e(D,{value:o.value,onUpdateValue:r=>void(o.value=r)})),e(s,{label:"\u524D\u7AEF\u5730\u5740"},e(l,{value:a.webUrl,onInput:r=>void(a.webUrl=r)})),e(s,{label:"API \u5730\u5740"},e(l,{value:a.serverUrl,onInput:r=>void(a.serverUrl=r)})),e(s,{label:"\u540E\u53F0\u5730\u5740"},e(l,{value:a.adminUrl,onInput:r=>void(a.adminUrl=r)})),e(s,{label:"Gateway \u5730\u5740"},e(l,{value:a.wsUrl,onInput:r=>void(a.wsUrl=r)})),e(E,{justify:"end"},e(B,{onClick:U,round:!0,type:"primary"},"\u4E0B\u4E00\u6B65")))}}),q=c({props:b,setup(n){const u=v({}),t=d(""),o=x(),i=async()=>{if(t.value!==u.password){o.error("\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4");return}await p.api.user.register.post({data:{...u}}),n.onNext()};return()=>e(F,null,e(s,{label:"\u4F60\u7684\u540D\u5B57 (\u767B\u5F55\u51ED\u8BC1)",required:!0},e(l,{value:u.username,onUpdateValue:a=>{u.username=a}})),e(s,{label:"\u6635\u79F0"},e(l,{value:u.name,onUpdateValue:a=>{u.name=a}})),e(s,{label:"\u90AE\u7BB1",required:!0},e(l,{value:u.mail,onUpdateValue:a=>{u.mail=a}})),e(s,{label:"\u5BC6\u7801",required:!0},e(l,{value:u.password,type:"password",onUpdateValue:a=>{u.password=a}})),e(s,{label:"\u786E\u8BA4\u5BC6\u7801",required:!0},e(l,{value:t.value,type:"password",onUpdateValue:a=>{t.value=a}})),e(s,{label:"\u4E2A\u4EBA\u9996\u9875"},e(l,{value:u.url,onUpdateValue:a=>{u.url=a}})),e(s,{label:"\u5934\u50CF"},e(l,{value:u.avatar,onUpdateValue:a=>{u.avatar=a}})),e(s,{label:"\u4E2A\u4EBA\u4ECB\u7ECD"},e(l,{value:u.introduce,onUpdateValue:a=>{u.introduce=a}})),e(E,{justify:"end"},e(B,{disabled:!u.username||!u.username||!u.password||!t.value,onClick:i,round:!0,type:"primary"},"\u4E0B\u4E00\u6B65")))}}),k=c({props:b,setup(n){return()=>e(E,{class:"text-center",vertical:!0},e("span",{class:"text-base"},"\u4F60\u5DF2\u7ECF\u5B8C\u6210\u4E86\u6240\u6709\u7684\u6B65\u9AA4\uFF0C\u5E72\u5F97\u6F02\u4EAE\u3002"),e(B,{type:"primary",round:!0,onClick:()=>{localStorage.setItem("to-setting","true"),location.reload()}},"LINK START"))}});export{T as default};
