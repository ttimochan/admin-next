import{e as ee,R as M,a as te}from"./index.js";import{_ as ae}from"./CheckCircleOutlined.js";import{T as ne}from"./TrashSharp.js";import{H}from"./rounded-button.js";import{u as re}from"./use-react.js";import{u as ie,a as se,T as ce}from"./use-async-monaco.js";import{d as F,r as A,h as u,bH as U,y as ue,o as oe,w as le,Q as W,b2 as me,F as fe,bq as de,br as V}from"./vendor.js";import{C as he}from"./index6.js";const pe=F({props:{value:{type:String,required:!0},onChange:{type:Function,required:!0}},setup(r){const d=A(),m=ie(r);return se(d,m,r.onChange,{language:"html"}),()=>u("div",{ref:d,class:"h-full w-full relative"},u(he,{description:"Monaco \u4F53\u79EF\u8F83\u5927\u8010\u5FC3\u7B49\u5F85\u52A0\u8F7D\u5B8C\u6210..."}))}});var $={},q={};(function(r){var d=/[|\\{}()[\]^$+*?.]/g;r.escapeRegExpChars=function(s){return s?String(s).replace(d,"\\$&"):""};var m={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},l=/[&<>'"]/g;function y(s){return m[s]||s}var T=`var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
`;r.escapeXML=function(s){return s==null?"":String(s).replace(l,y)},r.escapeXML.toString=function(){return Function.prototype.toString.call(this)+`;
`+T},r.shallowCopy=function(s,h){h=h||{};for(var g in h)s[g]=h[g];return s},r.shallowCopyFromList=function(s,h,g){for(var p=0;p<g.length;p++){var w=g[p];typeof h[w]!="undefined"&&(s[w]=h[w])}return s},r.cache={_data:{},set:function(s,h){this._data[s]=h},get:function(s){return this._data[s]},remove:function(s){delete this._data[s]},reset:function(){this._data={}}},r.hyphenToCamel=function(s){return s.replace(/-[a-z]/g,function(h){return h[1].toUpperCase()})}})(q);const ve="ejs",ge="Embedded JavaScript templates",_e=["template","engine","ejs"],Ee="3.1.6",ye="Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)",we="Apache-2.0",Le={ejs:"./bin/cli.js"},Ae="./lib/ejs.js",Te="ejs.min.js",Ce="ejs.min.js",be={type:"git",url:"git://github.com/mde/ejs.git"},Fe="https://github.com/mde/ejs/issues",Se="https://github.com/mde/ejs",De={jake:"^10.6.1"},je={browserify:"^16.5.1",eslint:"^6.8.0","git-directory-deploy":"^1.5.1",jsdoc:"^3.6.4","lru-cache":"^4.0.1",mocha:"^7.1.1","uglify-js":"^3.3.16"},Me={node:">=0.10.0"},Oe={test:"mocha"};var Ie={name:ve,description:ge,keywords:_e,version:Ee,author:ye,license:we,bin:Le,main:Ae,jsdelivr:Te,unpkg:Ce,repository:be,bugs:Fe,homepage:Se,dependencies:De,devDependencies:je,engines:Me,scripts:Oe};(function(r){/**
 * @file Embedded JavaScript templating engine. {@link http://ejs.co}
 * @author Matthew Eernisse <mde@fleegix.org>
 * @author Tiancheng "Timothy" Gu <timothygu99@gmail.com>
 * @project EJS
 * @license {@link http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0}
 */var d=U,m=U,l=q,y=!1,T=Ie.version,s="<",h=">",g="%",p="locals",w="ejs",J="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)",O=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename","async"],X=O.concat("cache"),I=/^\uFEFF/;r.cache=l.cache,r.fileLoader=d.readFileSync,r.localsName=p,r.promiseImpl=new Function("return this;")().Promise,r.resolveInclude=function(t,a,e){var n=m.dirname,i=m.extname,c=m.resolve,f=c(e?a:n(a),t),E=i(t);return E||(f+=".ejs"),f};function N(t,a){var e;if(a.some(function(n){return e=r.resolveInclude(t,n,!0),d.existsSync(e)}))return e}function G(t,a){var e,n,i=a.views,c=/^[A-Za-z]+:\\|^\//.exec(t);if(c&&c.length)t=t.replace(/^\/*/,""),Array.isArray(a.root)?e=N(t,a.root):e=r.resolveInclude(t,a.root||"/",!0);else if(a.filename&&(n=r.resolveInclude(t,a.filename),d.existsSync(n)&&(e=n)),!e&&Array.isArray(i)&&(e=N(t,i)),!e&&typeof a.includer!="function")throw new Error('Could not find the include file "'+a.escapeFunction(t)+'"');return e}function C(t,a){var e,n=t.filename,i=arguments.length>1;if(t.cache){if(!n)throw new Error("cache option requires a filename");if(e=r.cache.get(n),e)return e;i||(a=R(n).toString().replace(I,""))}else if(!i){if(!n)throw new Error("Internal EJS error: no file name or template provided");a=R(n).toString().replace(I,"")}return e=r.compile(a,t),t.cache&&r.cache.set(n,e),e}function z(t,a,e){var n;if(e){try{n=C(t)(a)}catch(i){return e(i)}e(null,n)}else{if(typeof r.promiseImpl=="function")return new r.promiseImpl(function(i,c){try{n=C(t)(a),i(n)}catch(f){c(f)}});throw new Error("Please provide a callback function")}}function R(t){return r.fileLoader(t)}function Z(t,a){var e=l.shallowCopy({},a);if(e.filename=G(t,e),typeof a.includer=="function"){var n=a.includer(t,e.filename);if(n&&(n.filename&&(e.filename=n.filename),n.template))return C(e,n.template)}return C(e)}function k(t,a,e,n,i){var c=a.split(`
`),f=Math.max(n-3,0),E=Math.min(c.length,n+3),_=i(e),L=c.slice(f,E).map(function(S,D){var b=D+f+1;return(b==n?" >> ":"    ")+b+"| "+S}).join(`
`);throw t.path=_,t.message=(_||"ejs")+":"+n+`
`+L+`

`+t.message,t}function P(t){return t.replace(/;(\s*$)/,"$1")}r.compile=function(a,e){var n;return e&&e.scope&&(y||(console.warn("`scope` option is deprecated and will be removed in EJS 3"),y=!0),e.context||(e.context=e.scope),delete e.scope),n=new o(a,e),n.compile()},r.render=function(t,a,e){var n=a||{},i=e||{};return arguments.length==2&&l.shallowCopyFromList(i,n,O),C(i,t)(n)},r.renderFile=function(){var t=Array.prototype.slice.call(arguments),a=t.shift(),e,n={filename:a},i,c;return typeof arguments[arguments.length-1]=="function"&&(e=t.pop()),t.length?(i=t.shift(),t.length?l.shallowCopy(n,t.pop()):(i.settings&&(i.settings.views&&(n.views=i.settings.views),i.settings["view cache"]&&(n.cache=!0),c=i.settings["view options"],c&&l.shallowCopy(n,c)),l.shallowCopyFromList(n,i,X)),n.filename=a):i={},z(n,i,e)},r.Template=o,r.clearCache=function(){r.cache.reset()};function o(t,a){a=a||{};var e={};this.templateText=t,this.mode=null,this.truncate=!1,this.currentLine=1,this.source="",e.client=a.client||!1,e.escapeFunction=a.escape||a.escapeFunction||l.escapeXML,e.compileDebug=a.compileDebug!==!1,e.debug=!!a.debug,e.filename=a.filename,e.openDelimiter=a.openDelimiter||r.openDelimiter||s,e.closeDelimiter=a.closeDelimiter||r.closeDelimiter||h,e.delimiter=a.delimiter||r.delimiter||g,e.strict=a.strict||!1,e.context=a.context,e.cache=a.cache||!1,e.rmWhitespace=a.rmWhitespace,e.root=a.root,e.includer=a.includer,e.outputFunctionName=a.outputFunctionName,e.localsName=a.localsName||r.localsName||p,e.views=a.views,e.async=a.async,e.destructuredLocals=a.destructuredLocals,e.legacyInclude=typeof a.legacyInclude!="undefined"?!!a.legacyInclude:!0,e.strict?e._with=!1:e._with=typeof a._with!="undefined"?a._with:!0,this.opts=e,this.regex=this.createRegex()}o.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"},o.prototype={createRegex:function(){var t=J,a=l.escapeRegExpChars(this.opts.delimiter),e=l.escapeRegExpChars(this.opts.openDelimiter),n=l.escapeRegExpChars(this.opts.closeDelimiter);return t=t.replace(/%/g,a).replace(/</g,e).replace(/>/g,n),new RegExp(t)},compile:function(){var t,a,e=this.opts,n="",i="",c=e.escapeFunction,f,E=e.filename?JSON.stringify(e.filename):"undefined";if(!this.source){if(this.generateSource(),n+=`  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
`,e.outputFunctionName&&(n+="  var "+e.outputFunctionName+` = __append;
`),e.destructuredLocals&&e.destructuredLocals.length){for(var _="  var __locals = ("+e.localsName+` || {}),
`,L=0;L<e.destructuredLocals.length;L++){var S=e.destructuredLocals[L];L>0&&(_+=`,
  `),_+=S+" = __locals."+S}n+=_+`;
`}e._with!==!1&&(n+="  with ("+e.localsName+` || {}) {
`,i+=`  }
`),i+=`  return __output;
`,this.source=n+this.source+i}e.compileDebug?t=`var __line = 1
  , __lines = `+JSON.stringify(this.templateText)+`
  , __filename = `+E+`;
try {
`+this.source+`} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}
`:t=this.source,e.client&&(t="escapeFn = escapeFn || "+c.toString()+`;
`+t,e.compileDebug&&(t="rethrow = rethrow || "+k.toString()+`;
`+t)),e.strict&&(t=`"use strict";
`+t),e.debug&&console.log(t),e.compileDebug&&e.filename&&(t=t+`
//# sourceURL=`+E+`
`);try{if(e.async)try{f=new Function("return (async function(){}).constructor;")()}catch(v){throw v instanceof SyntaxError?new Error("This environment does not support async/await"):v}else f=Function;a=new f(e.localsName+", escapeFn, include, rethrow",t)}catch(v){throw v instanceof SyntaxError&&(e.filename&&(v.message+=" in "+e.filename),v.message+=` while compiling ejs

`,v.message+=`If the above error is not helpful, you may want to try EJS-Lint:
`,v.message+="https://github.com/RyanZim/EJS-Lint",e.async||(v.message+=`
`,v.message+="Or, if you meant to create an async function, pass `async: true` as an option.")),v}var D=e.client?a:function(x){var K=function(Y,B){var j=l.shallowCopy({},x);return B&&(j=l.shallowCopy(j,B)),Z(Y,e)(j)};return a.apply(e.context,[x||{},c,K,k])};if(e.filename&&typeof Object.defineProperty=="function"){var b=e.filename,Q=m.basename(b,m.extname(b));try{Object.defineProperty(D,"name",{value:Q,writable:!1,enumerable:!1,configurable:!0})}catch{}}return D},generateSource:function(){var t=this.opts;t.rmWhitespace&&(this.templateText=this.templateText.replace(/[\r\n]+/g,`
`).replace(/^\s+|\s+$/gm,"")),this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var a=this,e=this.parseTemplateText(),n=this.opts.delimiter,i=this.opts.openDelimiter,c=this.opts.closeDelimiter;e&&e.length&&e.forEach(function(f,E){var _;if(f.indexOf(i+n)===0&&f.indexOf(i+n+n)!==0&&(_=e[E+2],!(_==n+c||_=="-"+n+c||_=="_"+n+c)))throw new Error('Could not find matching close tag for "'+f+'".');a.scanLine(f)})},parseTemplateText:function(){for(var t=this.templateText,a=this.regex,e=a.exec(t),n=[],i;e;)i=e.index,i!==0&&(n.push(t.substring(0,i)),t=t.slice(i)),n.push(e[0]),t=t.slice(e[0].length),e=a.exec(t);return t&&n.push(t),n},_addOutput:function(t){if(this.truncate&&(t=t.replace(/^(?:\r\n|\r|\n)/,""),this.truncate=!1),!t)return t;t=t.replace(/\\/g,"\\\\"),t=t.replace(/\n/g,"\\n"),t=t.replace(/\r/g,"\\r"),t=t.replace(/"/g,'\\"'),this.source+='    ; __append("'+t+`")
`},scanLine:function(t){var a=this,e=this.opts.delimiter,n=this.opts.openDelimiter,i=this.opts.closeDelimiter,c=0;switch(c=t.split(`
`).length-1,t){case n+e:case n+e+"_":this.mode=o.modes.EVAL;break;case n+e+"=":this.mode=o.modes.ESCAPED;break;case n+e+"-":this.mode=o.modes.RAW;break;case n+e+"#":this.mode=o.modes.COMMENT;break;case n+e+e:this.mode=o.modes.LITERAL,this.source+='    ; __append("'+t.replace(n+e+e,n+e)+`")
`;break;case e+e+i:this.mode=o.modes.LITERAL,this.source+='    ; __append("'+t.replace(e+e+i,e+i)+`")
`;break;case e+i:case"-"+e+i:case"_"+e+i:this.mode==o.modes.LITERAL&&this._addOutput(t),this.mode=null,this.truncate=t.indexOf("-")===0||t.indexOf("_")===0;break;default:if(this.mode){switch(this.mode){case o.modes.EVAL:case o.modes.ESCAPED:case o.modes.RAW:t.lastIndexOf("//")>t.lastIndexOf(`
`)&&(t+=`
`)}switch(this.mode){case o.modes.EVAL:this.source+="    ; "+t+`
`;break;case o.modes.ESCAPED:this.source+="    ; __append(escapeFn("+P(t)+`))
`;break;case o.modes.RAW:this.source+="    ; __append("+P(t)+`)
`;break;case o.modes.COMMENT:break;case o.modes.LITERAL:this._addOutput(t);break}}else this._addOutput(t)}a.opts.compileDebug&&c&&(this.currentLine+=c,this.source+="    ; __line = "+this.currentLine+`
`)}},r.escapeXML=l.escapeXML,r.__express=r.renderFile,r.VERSION=T,r.name=w,typeof window!="undefined"&&(window.ejs=r)})($);const Ne=F({props:{template:{type:String,required:!0},data:{type:Object,required:!0}},setup(r){return()=>u("div",{class:"h-full overflow-auto  bg-white"},u("div",{innerHTML:$.render(r.template,r.data)}))}}),Re=F({setup(){const r=A(""),d=A(""),m=A("guest"),l=A(null),{setHeaderButton:y}=ee(),T=async()=>{await M.api.options.email.template.reply.put({params:{type:m.value},data:{source:d.value}}),await g()},s=ue(),h=()=>{s.warning({title:"\u786E\u8BA4\u91CD\u7F6E?",content:"\u91CD\u7F6E\u540E, \u6A21\u677F\u5C06\u88AB\u6062\u590D\u4E3A\u9ED8\u8BA4\u6A21\u677F",async onNegativeClick(){await M.api.options.email.template.reply.delete({params:{type:m.value}}),await g()},onPositiveClick(){},negativeText:"\u55EF",positiveText:"\u8FBE\u54A9"})};re(()=>(y(u(fe,null,u(H,{icon:u(ae,null),name:"\u63D0\u4EA4",onClick:T,variant:"success"}),u(H,{icon:u(ne,null),name:"\u91CD\u7F6E\u81EA\u5B9A\u4E49\u6A21\u677F",onClick:h,variant:"error"}))),()=>{y(null)})),oe(()=>{g()});const g=async()=>{const{template:p,props:w}=await M.api.options.email.template.reply.get({params:{type:m.value}});r.value=p,d.value=p,l.value=w};return le(()=>m.value,g),()=>u("div",null,u(me,{defaultValue:m.value==="guest",onUpdateValue:p=>{m.value=p?"guest":"owner"}},{checked(){return"\u6E38\u5BA2"},unchecked(){return"\u4E3B\u4EBA"}}),u("div",{class:"pb-4"}),u(ce,null,u(W,{span:18},u(pe,{onChange:p=>{d.value=p},value:r.value})),u(W,{span:18,class:"relative h-[calc(100vh-15rem)] "},u(Ne,{data:l.value,template:d.value}))))}}),ke=F({setup(){return()=>u("div",null,"\u5373\u5C06\u63A8\u51FA")}});var qe=F({setup(){const r=A("1");return()=>u(te,null,u(de,{value:r.value,size:"medium",onUpdateValue:d=>{r.value=d}},u(V,{name:"1",tab:"\u8BC4\u8BBA\u90AE\u4EF6\u6A21\u677F"},u(Re,null)),u(V,{name:"2",tab:"\u9884\u89C8 Markdown \u6A21\u677F"},u(ke,null))))}});export{qe as default};
