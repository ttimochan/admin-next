import{r as a,aT as r}from"./vendor.js";const o=o=>{const s=a([]),t=a({}),e=r({sortBy:"",sortOrder:0}),n=a([]),c=a(!1);return{data:s,pager:t,sortProps:e,checkedRowKeys:n,loading:c,fetchDataFn:async(a,r)=>{c.value=!0,await o(s,t)(a,r),c.value=!1}}};export{o as u};
