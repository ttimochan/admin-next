import{d as a,r as e,o as s,G as t,u as o,ag as n,b as r,e as l,f as u,n as i,ai as d,aj as p,ak as c,ah as m}from"./vendor.js";import{k as g,P as v,u as w,l as h,R as b}from"./index.js";const f=window.injectData.LOGIN_BG||"https://gitee.com/xun7788/my-imagination/raw/master/images/88426823_p0.jpg",k=a({components:{ParallaxButtonVue:v},setup(){const a=e(!1),{updateToken:n,fetchUser:r}=w(h);s((()=>{const e=new Image;e.src=f,e.onload=e=>{a.value=!0}}));const l=t(),u=e(""),i=e("");o();return{bgUrl:f,loaded:a,password:u,handleRegister:async a=>{null==a||a.stopPropagation();try{const a=await b.api.master.register.post({data:{username:i.value,password:u.value}});n(a.token),l.success("欧尼酱!"),localStorage.setItem("to-setting","true"),location.reload()}catch(e){l.error("出了点小问题, 不要慌"),l.error(e.message)}},username:i}}}),y={class:"wrapper"},j={class:"input-wrap"},x={class:"input-wrap"};var I=g(k,[["render",function(a,e,s,t,o,g){const v=n("ParallaxButtonVue");return r(),l("div",null,[u("div",{class:"bg transition-opacity duration-700",style:i({backgroundImage:`url(${a.bgUrl})`,opacity:a.loaded?1:0})},null,4),u("div",y,[u("form",{action:"#",onSubmit:e[2]||(e[2]=d(((...e)=>a.handleRegister&&a.handleRegister(...e)),["prevent"]))},[u("div",j,[p(u("input",{"onUpdate:modelValue":e[0]||(e[0]=e=>a.username=e),autofocus:"",placeholder:"这里填上你的用户名"},null,512),[[c,a.username]])]),u("div",x,[p(u("input",{"onUpdate:modelValue":e[1]||(e[1]=e=>a.password=e),type:"password",placeholder:"这里填上密码哦"},null,512),[[c,a.password]])]),m(v,{title:"注册",class:"p-button-raised p-button-rounded",onClick:d(a.handleRegister,["prevent","stop"])},null,8,["onClick"])],32)])])}],["__scopeId","data-v-47865a10"]]);export{k as InitView,I as default};
