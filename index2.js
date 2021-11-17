import{c as me,g as ye,r as P}from"./index.js";import{h as O,A as G,B as $}from"./vendor.js";class ge{observers={};on(e,t){const n=this.observers[e];if(!n){this.observers[e]=[t];return}n.some(r=>r===t)||this.observers[e].push(t)}emit(e,t){const n=this.observers[e];if(!!n)for(const i of n)i.call(this,t)}off(e,t){const n=this.observers[e];if(!!n)if(t){const i=n.findIndex(r=>r===t);i!==-1&&n.splice(i,1)}else n.length=0}}const Ee=new ge;var we=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,be=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],F=function(e){var t=e,n=e.indexOf("["),i=e.indexOf("]");n!=-1&&i!=-1&&(e=e.substring(0,n)+e.substring(n,i).replace(/:/g,";")+e.substring(i,e.length));for(var r=we.exec(e||""),o={},a=14;a--;)o[be[a]]=r[a]||"";return n!=-1&&i!=-1&&(o.source=t,o.host=o.host.substring(1,o.host.length-1).replace(/;/g,":"),o.authority=o.authority.replace("[","").replace("]","").replace(/;/g,":"),o.ipv6uri=!0),o.pathNames=Ae(o,o.path),o.queryKey=_e(o,o.query),o};function Ae(s,e){var t=/\/{2,9}/g,n=e.replace(t,"/").split("/");return(e.substr(0,1)=="/"||e.length===0)&&n.splice(0,1),e.substr(e.length-1,1)=="/"&&n.splice(n.length-1,1),n}function _e(s,e){var t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,i,r){i&&(t[i]=r)}),t}function Te(s,e="",t){let n=s;t=t||typeof location!="undefined"&&location,s==null&&(s=t.protocol+"//"+t.host),typeof s=="string"&&(s.charAt(0)==="/"&&(s.charAt(1)==="/"?s=t.protocol+s:s=t.host+s),/^(https?|wss?):\/\//.test(s)||(typeof t!="undefined"?s=t.protocol+"//"+s:s="https://"+s),n=F(s)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const r=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+r+":"+n.port+e,n.href=n.protocol+"://"+r+(t&&t.port===n.port?"":":"+n.port),n}var q={exports:{}};try{q.exports=typeof XMLHttpRequest!="undefined"&&"withCredentials"in new XMLHttpRequest}catch{q.exports=!1}var ve=q.exports,y=(()=>typeof self!="undefined"?self:typeof window!="undefined"?window:Function("return this")())();function J(s){const e=s.xdomain;try{if(typeof XMLHttpRequest!="undefined"&&(!e||ve))return new XMLHttpRequest}catch{}if(!e)try{return new y[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function X(s,...e){return e.reduce((t,n)=>(s.hasOwnProperty(n)&&(t[n]=s[n]),t),{})}const ke=setTimeout,Ne=clearTimeout;function S(s,e){e.useNativeTimers?(s.setTimeoutFn=ke.bind(y),s.clearTimeoutFn=Ne.bind(y)):(s.setTimeoutFn=setTimeout.bind(y),s.clearTimeoutFn=clearTimeout.bind(y))}var b=h;function h(s){if(s)return Ce(s)}function Ce(s){for(var e in h.prototype)s[e]=h.prototype[e];return s}h.prototype.on=h.prototype.addEventListener=function(s,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+s]=this._callbacks["$"+s]||[]).push(e),this};h.prototype.once=function(s,e){function t(){this.off(s,t),e.apply(this,arguments)}return t.fn=e,this.on(s,t),this};h.prototype.off=h.prototype.removeListener=h.prototype.removeAllListeners=h.prototype.removeEventListener=function(s,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+s];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+s],this;for(var n,i=0;i<t.length;i++)if(n=t[i],n===e||n.fn===e){t.splice(i,1);break}return t.length===0&&delete this._callbacks["$"+s],this};h.prototype.emit=function(s){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+s],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(t){t=t.slice(0);for(var n=0,i=t.length;n<i;++n)t[n].apply(this,e)}return this};h.prototype.emitReserved=h.prototype.emit;h.prototype.listeners=function(s){return this._callbacks=this._callbacks||{},this._callbacks["$"+s]||[]};h.prototype.hasListeners=function(s){return!!this.listeners(s).length};const l=Object.create(null);l.open="0";l.close="1";l.ping="2";l.pong="3";l.message="4";l.upgrade="5";l.noop="6";const B=Object.create(null);Object.keys(l).forEach(s=>{B[l[s]]=s});const Re={type:"error",data:"parser error"},Oe=typeof Blob=="function"||typeof Blob!="undefined"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Se=typeof ArrayBuffer=="function",Be=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s&&s.buffer instanceof ArrayBuffer,Q=({type:s,data:e},t,n)=>Oe&&e instanceof Blob?t?n(e):Z(e,n):Se&&(e instanceof ArrayBuffer||Be(e))?t?n(e):Z(new Blob([e]),n):n(l[s]+(e||"")),Z=(s,e)=>{const t=new FileReader;return t.onload=function(){const n=t.result.split(",")[1];e("b"+n)},t.readAsDataURL(s)};var j="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",v=typeof Uint8Array=="undefined"?[]:new Uint8Array(256);for(var x=0;x<j.length;x++)v[j.charCodeAt(x)]=x;var xe=function(s){var e=s.length*.75,t=s.length,n,i=0,r,o,a,f;s[s.length-1]==="="&&(e--,s[s.length-2]==="="&&e--);var _=new ArrayBuffer(e),E=new Uint8Array(_);for(n=0;n<t;n+=4)r=v[s.charCodeAt(n)],o=v[s.charCodeAt(n+1)],a=v[s.charCodeAt(n+2)],f=v[s.charCodeAt(n+3)],E[i++]=r<<2|o>>4,E[i++]=(o&15)<<4|a>>2,E[i++]=(a&3)<<6|f&63;return _};const De=typeof ArrayBuffer=="function",ee=(s,e)=>{if(typeof s!="string")return{type:"message",data:te(s,e)};const t=s.charAt(0);return t==="b"?{type:"message",data:Ie(s.substring(1),e)}:B[t]?s.length>1?{type:B[t],data:s.substring(1)}:{type:B[t]}:Re},Ie=(s,e)=>{if(De){const t=xe(s);return te(t,e)}else return{base64:!0,data:s}},te=(s,e)=>{switch(e){case"blob":return s instanceof ArrayBuffer?new Blob([s]):s;case"arraybuffer":default:return s}},se=String.fromCharCode(30),Le=(s,e)=>{const t=s.length,n=new Array(t);let i=0;s.forEach((r,o)=>{Q(r,!1,a=>{n[o]=a,++i===t&&e(n.join(se))})})},Pe=(s,e)=>{const t=s.split(se),n=[];for(let i=0;i<t.length;i++){const r=ee(t[i],e);if(n.push(r),r.type==="error")break}return n},ne=4;class ie extends b{constructor(e){super();this.writable=!1,S(this,e),this.opts=e,this.query=e.query,this.readyState="",this.socket=e.socket}onError(e,t){const n=new Error(e);return n.type="TransportError",n.description=t,super.emit("error",n),this}open(){return(this.readyState==="closed"||this.readyState==="")&&(this.readyState="opening",this.doOpen()),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emit("open")}onData(e){const t=ee(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emit("packet",e)}onClose(){this.readyState="closed",super.emit("close")}}var re="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),D=64,oe={},ce=0,g=0,ae;function M(s){var e="";do e=re[s%D]+e,s=Math.floor(s/D);while(s>0);return e}function Fe(s){var e=0;for(g=0;g<s.length;g++)e=e*D+oe[s.charAt(g)];return e}function U(){var s=M(+new Date);return s!==ae?(ce=0,ae=s):s+"."+M(ce++)}for(;g<D;g++)oe[re[g]]=g;U.encode=M;U.decode=Fe;var he=U,k={};k.encode=function(s){var e="";for(var t in s)s.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(s[t]));return e};k.decode=function(s){for(var e={},t=s.split("&"),n=0,i=t.length;n<i;n++){var r=t[n].split("=");e[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return e};class qe extends ie{constructor(){super(...arguments);this.polling=!1}get name(){return"polling"}doOpen(){this.poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let n=0;this.polling&&(n++,this.once("pollComplete",function(){--n||t()})),this.writable||(n++,this.once("drain",function(){--n||t()}))}else t()}poll(){this.polling=!0,this.doPoll(),this.emit("poll")}onData(e){const t=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose(),!1;this.onPacket(n)};Pe(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this.polling=!1,this.emit("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Le(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emit("drain")})})}uri(){let e=this.query||{};const t=this.opts.secure?"https":"http";let n="";this.opts.timestampRequests!==!1&&(e[this.opts.timestampParam]=he()),!this.supportsBinary&&!e.sid&&(e.b64=1),this.opts.port&&(t==="https"&&Number(this.opts.port)!==443||t==="http"&&Number(this.opts.port)!==80)&&(n=":"+this.opts.port);const i=k.encode(e),r=this.opts.hostname.indexOf(":")!==-1;return t+"://"+(r?"["+this.opts.hostname+"]":this.opts.hostname)+n+this.opts.path+(i.length?"?"+i:"")}}function Me(){}const Ue=function(){return new J({xdomain:!1}).responseType!=null}();class Ye extends qe{constructor(e){super(e);if(typeof location!="undefined"){const n=location.protocol==="https:";let i=location.port;i||(i=n?"443":"80"),this.xd=typeof location!="undefined"&&e.hostname!==location.hostname||i!==e.port,this.xs=e.secure!==n}const t=e&&e.forceBase64;this.supportsBinary=Ue&&!t}request(e={}){return Object.assign(e,{xd:this.xd,xs:this.xs},this.opts),new p(this.uri(),e)}doWrite(e,t){const n=this.request({method:"POST",data:e});n.on("success",t),n.on("error",i=>{this.onError("xhr post error",i)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",t=>{this.onError("xhr poll error",t)}),this.pollXhr=e}}class p extends b{constructor(e,t){super();S(this,t),this.opts=t,this.method=t.method||"GET",this.uri=e,this.async=t.async!==!1,this.data=t.data!==void 0?t.data:null,this.create()}create(){const e=X(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this.opts.xd,e.xscheme=!!this.opts.xs;const t=this.xhr=new J(e);try{t.open(this.method,this.uri,this.async);try{if(this.opts.extraHeaders){t.setDisableHeaderCheck&&t.setDisableHeaderCheck(!0);for(let n in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(n)&&t.setRequestHeader(n,this.opts.extraHeaders[n])}}catch{}if(this.method==="POST")try{t.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{t.setRequestHeader("Accept","*/*")}catch{}"withCredentials"in t&&(t.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(t.timeout=this.opts.requestTimeout),t.onreadystatechange=()=>{t.readyState===4&&(t.status===200||t.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof t.status=="number"?t.status:0)},0))},t.send(this.data)}catch(n){this.setTimeoutFn(()=>{this.onError(n)},0);return}typeof document!="undefined"&&(this.index=p.requestsCount++,p.requests[this.index]=this)}onSuccess(){this.emit("success"),this.cleanup()}onData(e){this.emit("data",e),this.onSuccess()}onError(e){this.emit("error",e),this.cleanup(!0)}cleanup(e){if(!(typeof this.xhr=="undefined"||this.xhr===null)){if(this.xhr.onreadystatechange=Me,e)try{this.xhr.abort()}catch{}typeof document!="undefined"&&delete p.requests[this.index],this.xhr=null}}onLoad(){const e=this.xhr.responseText;e!==null&&this.onData(e)}abort(){this.cleanup()}}p.requestsCount=0;p.requests={};if(typeof document!="undefined"){if(typeof attachEvent=="function")attachEvent("onunload",ue);else if(typeof addEventListener=="function"){const s="onpagehide"in y?"pagehide":"unload";addEventListener(s,ue,!1)}}function ue(){for(let s in p.requests)p.requests.hasOwnProperty(s)&&p.requests[s].abort()}const Ve=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0))(),N=y.WebSocket||y.MozWebSocket,fe=!0,He="arraybuffer",le=typeof navigator!="undefined"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Y extends ie{constructor(e){super(e);this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const e=this.uri(),t=this.opts.protocols,n=le?{}:X(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=fe&&!le?t?new N(e,t):new N(e):new N(e,t,n)}catch(i){return this.emit("error",i)}this.ws.binaryType=this.socket.binaryType||He,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=this.onClose.bind(this),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],i=t===e.length-1;Q(n,this.supportsBinary,r=>{const o={};try{fe&&this.ws.send(r)}catch{}i&&Ve(()=>{this.writable=!0,this.emit("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws!="undefined"&&(this.ws.close(),this.ws=null)}uri(){let e=this.query||{};const t=this.opts.secure?"wss":"ws";let n="";this.opts.port&&(t==="wss"&&Number(this.opts.port)!==443||t==="ws"&&Number(this.opts.port)!==80)&&(n=":"+this.opts.port),this.opts.timestampRequests&&(e[this.opts.timestampParam]=he()),this.supportsBinary||(e.b64=1);const i=k.encode(e),r=this.opts.hostname.indexOf(":")!==-1;return t+"://"+(r?"["+this.opts.hostname+"]":this.opts.hostname)+n+this.opts.path+(i.length?"?"+i:"")}check(){return!!N&&!("__initialize"in N&&this.name===Y.prototype.name)}}const Ke={websocket:Y,polling:Ye};class d extends b{constructor(e,t={}){super();e&&typeof e=="object"&&(t=e,e=null),e?(e=F(e),t.hostname=e.host,t.secure=e.protocol==="https"||e.protocol==="wss",t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=F(t.host).host),S(this,t),this.secure=t.secure!=null?t.secure:typeof location!="undefined"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location!="undefined"?location.hostname:"localhost"),this.port=t.port||(typeof location!="undefined"&&location.port?location.port:this.secure?"443":"80"),this.transports=t.transports||["polling","websocket"],this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!0},t),this.opts.path=this.opts.path.replace(/\/$/,"")+"/",typeof this.opts.query=="string"&&(this.opts.query=k.decode(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&addEventListener("beforeunload",()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},!1),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close")},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(e){const t=We(this.opts.query);t.EIO=ne,t.transport=e,this.id&&(t.sid=this.id);const n=Object.assign({},this.opts.transportOptions[e],this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port});return new Ke[e](n)}open(){let e;if(this.opts.rememberUpgrade&&d.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)e="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else e=this.transports[0];this.readyState="opening";try{e=this.createTransport(e)}catch{this.transports.shift(),this.open();return}e.open(),this.setTransport(e)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",()=>{this.onClose("transport close")})}probe(e){let t=this.createTransport(e),n=!1;d.priorWebsocketSuccess=!1;const i=()=>{n||(t.send([{type:"ping",data:"probe"}]),t.once("packet",w=>{if(!n)if(w.type==="pong"&&w.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;d.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(E(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const T=new Error("probe error");T.transport=t.name,this.emitReserved("upgradeError",T)}}))};function r(){n||(n=!0,E(),t.close(),t=null)}const o=w=>{const T=new Error("probe error: "+w);T.transport=t.name,r(),this.emitReserved("upgradeError",T)};function a(){o("transport closed")}function f(){o("socket closed")}function _(w){t&&w.name!==t.name&&r()}const E=()=>{t.removeListener("open",i),t.removeListener("error",o),t.removeListener("close",a),this.off("close",f),this.off("upgrading",_)};t.once("open",i),t.once("error",o),t.once("close",a),this.once("close",f),this.once("upgrading",_),t.open()}onOpen(){if(this.readyState="open",d.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade&&this.transport.pause){let e=0;const t=this.upgrades.length;for(;e<t;e++)this.probe(this.upgrades[e])}}onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this.resetPingTimeout(),this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const t=new Error("server error");t.code=e.data,this.onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emitReserved("flush"))}write(e,t,n){return this.sendPacket("message",e,t,n),this}send(e,t,n){return this.sendPacket("message",e,t,n),this}sendPacket(e,t,n,i){if(typeof t=="function"&&(i=t,t=void 0),typeof n=="function"&&(i=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const r={type:e,data:t,options:n};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this.onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},n=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}onError(e){d.priorWebsocketSuccess=!1,this.emitReserved("error",e),this.onClose("transport error",e)}onClose(e,t){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&removeEventListener("offline",this.offlineEventListener,!1),this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(e){const t=[];let n=0;const i=e.length;for(;n<i;n++)~this.transports.indexOf(e[n])&&t.push(e[n]);return t}}d.protocol=ne;function We(s){const e={};for(let t in s)s.hasOwnProperty(t)&&(e[t]=s[t]);return e}d.protocol;const ze=typeof ArrayBuffer=="function",Ge=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s.buffer instanceof ArrayBuffer,pe=Object.prototype.toString,$e=typeof Blob=="function"||typeof Blob!="undefined"&&pe.call(Blob)==="[object BlobConstructor]",Je=typeof File=="function"||typeof File!="undefined"&&pe.call(File)==="[object FileConstructor]";function V(s){return ze&&(s instanceof ArrayBuffer||Ge(s))||$e&&s instanceof Blob||Je&&s instanceof File}function I(s,e){if(!s||typeof s!="object")return!1;if(Array.isArray(s)){for(let t=0,n=s.length;t<n;t++)if(I(s[t]))return!0;return!1}if(V(s))return!0;if(s.toJSON&&typeof s.toJSON=="function"&&arguments.length===1)return I(s.toJSON(),!0);for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t)&&I(s[t]))return!0;return!1}function Xe(s){const e=[],t=s.data,n=s;return n.data=H(t,e),n.attachments=e.length,{packet:n,buffers:e}}function H(s,e){if(!s)return s;if(V(s)){const t={_placeholder:!0,num:e.length};return e.push(s),t}else if(Array.isArray(s)){const t=new Array(s.length);for(let n=0;n<s.length;n++)t[n]=H(s[n],e);return t}else if(typeof s=="object"&&!(s instanceof Date)){const t={};for(const n in s)s.hasOwnProperty(n)&&(t[n]=H(s[n],e));return t}return s}function Qe(s,e){return s.data=K(s.data,e),s.attachments=void 0,s}function K(s,e){if(!s)return s;if(s&&s._placeholder)return e[s.num];if(Array.isArray(s))for(let t=0;t<s.length;t++)s[t]=K(s[t],e);else if(typeof s=="object")for(const t in s)s.hasOwnProperty(t)&&(s[t]=K(s[t],e));return s}const Ze=5;var c;(function(s){s[s.CONNECT=0]="CONNECT",s[s.DISCONNECT=1]="DISCONNECT",s[s.EVENT=2]="EVENT",s[s.ACK=3]="ACK",s[s.CONNECT_ERROR=4]="CONNECT_ERROR",s[s.BINARY_EVENT=5]="BINARY_EVENT",s[s.BINARY_ACK=6]="BINARY_ACK"})(c||(c={}));class je{encode(e){return(e.type===c.EVENT||e.type===c.ACK)&&I(e)?(e.type=e.type===c.EVENT?c.BINARY_EVENT:c.BINARY_ACK,this.encodeAsBinary(e)):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===c.BINARY_EVENT||e.type===c.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data)),t}encodeAsBinary(e){const t=Xe(e),n=this.encodeAsString(t.packet),i=t.buffers;return i.unshift(n),i}}class W extends b{constructor(){super()}add(e){let t;if(typeof e=="string")t=this.decodeString(e),t.type===c.BINARY_EVENT||t.type===c.BINARY_ACK?(this.reconstructor=new tt(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t);else if(V(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const n={type:Number(e.charAt(0))};if(c[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===c.BINARY_EVENT||n.type===c.BINARY_ACK){const r=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const o=e.substring(r,t);if(o!=Number(o)||e.charAt(t)!=="-")throw new Error("Illegal attachments");n.attachments=Number(o)}if(e.charAt(t+1)==="/"){const r=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););n.nsp=e.substring(r,t)}else n.nsp="/";const i=e.charAt(t+1);if(i!==""&&Number(i)==i){const r=t+1;for(;++t;){const o=e.charAt(t);if(o==null||Number(o)!=o){--t;break}if(t===e.length)break}n.id=Number(e.substring(r,t+1))}if(e.charAt(++t)){const r=et(e.substr(t));if(W.isPayloadValid(n.type,r))n.data=r;else throw new Error("invalid payload")}return n}static isPayloadValid(e,t){switch(e){case c.CONNECT:return typeof t=="object";case c.DISCONNECT:return t===void 0;case c.CONNECT_ERROR:return typeof t=="string"||typeof t=="object";case c.EVENT:case c.BINARY_EVENT:return Array.isArray(t)&&t.length>0;case c.ACK:case c.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&this.reconstructor.finishedReconstruction()}}function et(s){try{return JSON.parse(s)}catch{return!1}}class tt{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=Qe(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}var st=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",protocol:Ze,get PacketType(){return c},Encoder:je,Decoder:W});function u(s,e,t){return s.on(e,t),function(){s.off(e,t)}}const nt=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class de extends b{constructor(e,t,n){super();this.connected=!1,this.disconnected=!0,this.receiveBuffer=[],this.sendBuffer=[],this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,n&&n.auth&&(this.auth=n.auth),this.io._autoConnect&&this.open()}subEvents(){if(this.subs)return;const e=this.io;this.subs=[u(e,"open",this.onopen.bind(this)),u(e,"packet",this.onpacket.bind(this)),u(e,"error",this.onerror.bind(this)),u(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){if(nt.hasOwnProperty(e))throw new Error('"'+e+'" is a reserved event name');t.unshift(e);const n={type:c.EVENT,data:t};n.options={},n.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"&&(this.acks[this.ids]=t.pop(),n.id=this.ids++);const i=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!i||!this.connected)||(this.connected?this.packet(n):this.sendBuffer.push(n)),this.flags={},this}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this.packet({type:c.CONNECT,data:e})}):this.packet({type:c.CONNECT,data:this.auth})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e){this.connected=!1,this.disconnected=!0,delete this.id,this.emitReserved("disconnect",e)}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case c.CONNECT:if(e.data&&e.data.sid){const i=e.data.sid;this.onconnect(i)}else this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case c.EVENT:this.onevent(e);break;case c.BINARY_EVENT:this.onevent(e);break;case c.ACK:this.onack(e);break;case c.BINARY_ACK:this.onack(e);break;case c.DISCONNECT:this.ondisconnect();break;case c.CONNECT_ERROR:const n=new Error(e.data.message);n.data=e.data.data,this.emitReserved("connect_error",n);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const n of t)n.apply(this,e)}super.emit.apply(this,e)}ack(e){const t=this;let n=!1;return function(...i){n||(n=!0,t.packet({type:c.ACK,id:e,data:i}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(t.apply(this,e.data),delete this.acks[e.id])}onconnect(e){this.id=e,this.connected=!0,this.disconnected=!1,this.emitBuffered(),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>this.packet(e)),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:c.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}}var it=A;function A(s){s=s||{},this.ms=s.min||100,this.max=s.max||1e4,this.factor=s.factor||2,this.jitter=s.jitter>0&&s.jitter<=1?s.jitter:0,this.attempts=0}A.prototype.duration=function(){var s=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*s);s=(Math.floor(e*10)&1)==0?s-t:s+t}return Math.min(s,this.max)|0};A.prototype.reset=function(){this.attempts=0};A.prototype.setMin=function(s){this.ms=s};A.prototype.setMax=function(s){this.max=s};A.prototype.setJitter=function(s){this.jitter=s};class z extends b{constructor(e,t){var n;super();this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,S(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((n=t.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new it({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const i=t.parser||st;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new d(this.uri,this.opts);const t=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const i=u(t,"open",function(){n.onopen(),e&&e()}),r=u(t,"error",o=>{n.cleanup(),n._readyState="closed",this.emitReserved("error",o),e?e(o):n.maybeReconnectOnOpen()});if(this._timeout!==!1){const o=this._timeout;o===0&&i();const a=this.setTimeoutFn(()=>{i(),t.close(),t.emit("error",new Error("timeout"))},o);this.opts.autoUnref&&a.unref(),this.subs.push(function(){clearTimeout(a)})}return this.subs.push(i),this.subs.push(r),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(u(e,"ping",this.onping.bind(this)),u(e,"data",this.ondata.bind(this)),u(e,"error",this.onerror.bind(this)),u(e,"close",this.onclose.bind(this)),u(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){this.decoder.add(e)}ondecoded(e){this.emitReserved("packet",e)}onerror(e){this.emitReserved("error",e)}socket(e,t){let n=this.nsps[e];return n||(n=new de(this,e,t),this.nsps[e]=n),n}_destroy(e){const t=Object.keys(this.nsps);for(const n of t)if(this.nsps[n].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let n=0;n<t.length;n++)this.engine.write(t[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this._readyState==="opening"&&this.cleanup(),this.backoff.reset(),this._readyState="closed",this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},t);this.opts.autoUnref&&n.unref(),this.subs.push(function(){clearTimeout(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const C={};function L(s,e){typeof s=="object"&&(e=s,s=void 0),e=e||{};const t=Te(s,e.path||"/socket.io"),n=t.source,i=t.id,r=t.path,o=C[i]&&r in C[i].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let f;return a?f=new z(n,e):(C[i]||(C[i]=new z(n,e)),f=C[i]),t.query&&!e.query&&(e.query=t.queryKey),f.socket(t.path,e)}Object.assign(L,{Manager:z,Socket:de,io:L,connect:L});class rt{constructor(){this.initNotice()}initNotice(){return new Promise((e,t)=>{if(!("Notification"in window))t(new Error("\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u53D1\u9001\u901A\u77E5"));else if(Notification.permission!=="denied")Notification.requestPermission().then(n=>n==="granted"?e(!0):t(new Error("\u5DF2\u62D2\u7EDD\u901A\u77E5")));else{if(Notification.permission==="denied")return t(new Error("\u5DF2\u62D2\u7EDD\u901A\u77E5"));t(!0)}})}notice(e,t,n={}){return new Promise(i=>{this.initNotice().then(r=>{if(r&&!document.hasFocus()){const o=new Notification(e,{body:t,...n});i(o)}})})}}var m;(function(s){s.GATEWAY_CONNECT="GATEWAY_CONNECT",s.GATEWAY_DISCONNECT="GATEWAY_DISCONNECT",s.VISITOR_ONLINE="VISITOR_ONLINE",s.VISITOR_OFFLINE="VISITOR_OFFLINE",s.AUTH_FAILED="AUTH_FAILED",s.COMMENT_CREATE="COMMENT_CREATE",s.POST_CREATE="POST_CREATE",s.POST_UPDATE="POST_UPDATE",s.POST_DELETE="POST_DELETE",s.NOTE_CREATE="NOTE_CREATE",s.NOTE_UPDATE="NOTE_UPDATE",s.NOTE_DELETE="NOTE_DELETE",s.SAY_CREATE="SAY_CREATE",s.SAY_DELETE="SAY_DELETE",s.SAY_UPDATE="SAY_UPDATE",s.LINK_APPLY="LINK_APPLY",s.DANMAKU_CREATE="DANMAKU_CREATE",s.CONTENT_REFRESH="CONTENT_REFRESH",s.IMAGE_REFRESH="IMAGE_REFRESH",s.IMAGE_FETCH="IMAGE_FETCH",s.ADMIN_NOTIFICATION="ADMIN_NOTIFICATION",s.STDOUT="STDOUT"})(m||(m={}));const R={get warning(){return window.notification.warning},get warn(){return window.notification.warning},get success(){return window.notification.success},get error(){return window.notification.error},get info(){return window.notification.info}};class ot{socket;#e=me.title;#t=new rt;constructor(){this.initIO()}isInit=!1;initIO(){if(this.isInit)return;this.destory();const e=ye();!e||(this.socket=L(window.injectData.GATEWAY||"https://api.innei.ren/admin",{timeout:1e4,reconnectionDelay:3e3,autoConnect:!1,reconnectionAttempts:3,transports:["websocket"],query:{token:e}}),this.socket.open(),this.socket.on("message",t=>{if(typeof t!="string")return this.handleEvent(t.type,t.data);const{data:n,type:i}=JSON.parse(t);this.handleEvent(i,n)}),this.socket.on("error",()=>{window.message.error("Socket \u8FDE\u63A5\u5F02\u5E38")}),this.isInit=!0)}handleEvent(e,t){switch(e){case m.GATEWAY_CONNECT:break;case m.GATEWAY_DISCONNECT:{R.warning(t);break}case m.AUTH_FAILED:{console.log("\u7B49\u5F85\u767B\u9646\u4E2D..."),this.socket.close();break}case m.COMMENT_CREATE:{const n=t.author+": "+t.text,i=()=>{P.push({name:"comment"}),r.destroy()},r=R.success({title:"\u65B0\u7684\u8BC4\u8BBA",content:n,action(){return O($,{justify:"end"},O(G,{onClick:i,type:"primary",round:!0,ghost:!0},"\u67E5\u770B"))}});this.#t.notice(this.#e+" \u6536\u5230\u65B0\u7684\u8BC4\u8BBA",n).then(o=>{!o||(o.onclick=()=>{document.hasFocus()?i():window.open(P.resolve({name:"comment"}).href)})});break}case m.ADMIN_NOTIFICATION:{const{type:n,message:i}=t;R[n]({content:i});break}case m.CONTENT_REFRESH:{R.warning({content:"\u6570\u636E\u5E93\u6709\u53D8\u52A8, \u5C06\u5728 1 \u79D2\u540E\u91CD\u8F7D\u9875\u9762"}),setTimeout(()=>{location.reload()},1e3);break}case m.LINK_APPLY:{const n=t.name,i=()=>{P.push({name:"friends"}),r.destroy()},r=R.success({title:"\u65B0\u7684\u53CB\u94FE\u7533\u8BF7",content:n,action(){return O($,{justify:"end"},O(G,{onClick:i,type:"primary",round:!0,ghost:!0},"\u67E5\u770B"))}});this.#t.notice(this.#e+" \u6536\u5230\u65B0\u7684\u53CB\u94FE\u7533\u8BF7",n).then(o=>{!o||(o.onclick=()=>{document.hasFocus()?i():window.open("/")})});break}default:console.log(e,t)}Ee.emit(e,t)}destory(){!this.socket||(this.socket.disconnect(),this.socket.off("message"),this.isInit=!1)}}const ct=new ot;var ut=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",socket:ct});export{m as E,Ee as b,ct as c,ut as i};