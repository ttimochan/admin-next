import{c as ye,g as me,G as ge,r as P}from"./index.js";import{E as g}from"./types.js";import{h as R,z as $,A as J}from"./vendor.js";class we{observers={};on(e,t){const s=this.observers[e];if(!s){this.observers[e]=[t];return}s.some(r=>r===t)||this.observers[e].push(t)}emit(e,t){const s=this.observers[e];if(!!s)for(const i of s)i.call(this,t)}off(e,t){const s=this.observers[e];if(!!s)if(t){const i=s.findIndex(r=>r===t);i!==-1&&s.splice(i,1)}else s.length=0}}const be=new we;var ve=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Ee=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q=function(e){var t=e,s=e.indexOf("["),i=e.indexOf("]");s!=-1&&i!=-1&&(e=e.substring(0,s)+e.substring(s,i).replace(/:/g,";")+e.substring(i,e.length));for(var r=ve.exec(e||""),o={},a=14;a--;)o[Ee[a]]=r[a]||"";return s!=-1&&i!=-1&&(o.source=t,o.host=o.host.substring(1,o.host.length-1).replace(/;/g,":"),o.authority=o.authority.replace("[","").replace("]","").replace(/;/g,":"),o.ipv6uri=!0),o.pathNames=ke(o,o.path),o.queryKey=Ae(o,o.query),o};function ke(n,e){var t=/\/{2,9}/g,s=e.replace(t,"/").split("/");return(e.substr(0,1)=="/"||e.length===0)&&s.splice(0,1),e.substr(e.length-1,1)=="/"&&s.splice(s.length-1,1),s}function Ae(n,e){var t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(s,i,r){i&&(t[i]=r)}),t}function _e(n,e="",t){let s=n;t=t||typeof location!="undefined"&&location,n==null&&(n=t.protocol+"//"+t.host),typeof n=="string"&&(n.charAt(0)==="/"&&(n.charAt(1)==="/"?n=t.protocol+n:n=t.host+n),/^(https?|wss?):\/\//.test(n)||(typeof t!="undefined"?n=t.protocol+"//"+n:n="https://"+n),s=q(n)),s.port||(/^(http|ws)$/.test(s.protocol)?s.port="80":/^(http|ws)s$/.test(s.protocol)&&(s.port="443")),s.path=s.path||"/";const r=s.host.indexOf(":")!==-1?"["+s.host+"]":s.host;return s.id=s.protocol+"://"+r+":"+s.port+e,s.href=s.protocol+"://"+r+(t&&t.port===s.port?"":":"+s.port),s}var F={exports:{}};try{F.exports=typeof XMLHttpRequest!="undefined"&&"withCredentials"in new XMLHttpRequest}catch{F.exports=!1}var Ne=F.exports,y=(()=>typeof self!="undefined"?self:typeof window!="undefined"?window:Function("return this")())();function X(n){const e=n.xdomain;try{if(typeof XMLHttpRequest!="undefined"&&(!e||Ne))return new XMLHttpRequest}catch{}if(!e)try{return new y[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function G(n,...e){return e.reduce((t,s)=>(n.hasOwnProperty(s)&&(t[s]=n[s]),t),{})}const Te=setTimeout,Ce=clearTimeout;function S(n,e){e.useNativeTimers?(n.setTimeoutFn=Te.bind(y),n.clearTimeoutFn=Ce.bind(y)):(n.setTimeoutFn=setTimeout.bind(y),n.clearTimeoutFn=clearTimeout.bind(y))}var v=h;function h(n){if(n)return Be(n)}function Be(n){for(var e in h.prototype)n[e]=h.prototype[e];return n}h.prototype.on=h.prototype.addEventListener=function(n,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+n]=this._callbacks["$"+n]||[]).push(e),this};h.prototype.once=function(n,e){function t(){this.off(n,t),e.apply(this,arguments)}return t.fn=e,this.on(n,t),this};h.prototype.off=h.prototype.removeListener=h.prototype.removeAllListeners=h.prototype.removeEventListener=function(n,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+n];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+n],this;for(var s,i=0;i<t.length;i++)if(s=t[i],s===e||s.fn===e){t.splice(i,1);break}return t.length===0&&delete this._callbacks["$"+n],this};h.prototype.emit=function(n){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+n],s=1;s<arguments.length;s++)e[s-1]=arguments[s];if(t){t=t.slice(0);for(var s=0,i=t.length;s<i;++s)t[s].apply(this,e)}return this};h.prototype.emitReserved=h.prototype.emit;h.prototype.listeners=function(n){return this._callbacks=this._callbacks||{},this._callbacks["$"+n]||[]};h.prototype.hasListeners=function(n){return!!this.listeners(n).length};const l=Object.create(null);l.open="0";l.close="1";l.ping="2";l.pong="3";l.message="4";l.upgrade="5";l.noop="6";const O=Object.create(null);Object.keys(l).forEach(n=>{O[l[n]]=n});const Re={type:"error",data:"parser error"},Se=typeof Blob=="function"||typeof Blob!="undefined"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Oe=typeof ArrayBuffer=="function",xe=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n&&n.buffer instanceof ArrayBuffer,Q=({type:n,data:e},t,s)=>Se&&e instanceof Blob?t?s(e):Z(e,s):Oe&&(e instanceof ArrayBuffer||xe(e))?t?s(e):Z(new Blob([e]),s):s(l[n]+(e||"")),Z=(n,e)=>{const t=new FileReader;return t.onload=function(){const s=t.result.split(",")[1];e("b"+s)},t.readAsDataURL(n)};var j="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",_=typeof Uint8Array=="undefined"?[]:new Uint8Array(256);for(var x=0;x<j.length;x++)_[j.charCodeAt(x)]=x;var De=function(n){var e=n.length*.75,t=n.length,s,i=0,r,o,a,f;n[n.length-1]==="="&&(e--,n[n.length-2]==="="&&e--);var k=new ArrayBuffer(e),w=new Uint8Array(k);for(s=0;s<t;s+=4)r=_[n.charCodeAt(s)],o=_[n.charCodeAt(s+1)],a=_[n.charCodeAt(s+2)],f=_[n.charCodeAt(s+3)],w[i++]=r<<2|o>>4,w[i++]=(o&15)<<4|a>>2,w[i++]=(a&3)<<6|f&63;return k};const Le=typeof ArrayBuffer=="function",ee=(n,e)=>{if(typeof n!="string")return{type:"message",data:te(n,e)};const t=n.charAt(0);return t==="b"?{type:"message",data:Ie(n.substring(1),e)}:O[t]?n.length>1?{type:O[t],data:n.substring(1)}:{type:O[t]}:Re},Ie=(n,e)=>{if(Le){const t=De(n);return te(t,e)}else return{base64:!0,data:n}},te=(n,e)=>{switch(e){case"blob":return n instanceof ArrayBuffer?new Blob([n]):n;case"arraybuffer":default:return n}},se=String.fromCharCode(30),Pe=(n,e)=>{const t=n.length,s=new Array(t);let i=0;n.forEach((r,o)=>{Q(r,!1,a=>{s[o]=a,++i===t&&e(s.join(se))})})},qe=(n,e)=>{const t=n.split(se),s=[];for(let i=0;i<t.length;i++){const r=ee(t[i],e);if(s.push(r),r.type==="error")break}return s},ne=4;class ie extends v{constructor(e){super();this.writable=!1,S(this,e),this.opts=e,this.query=e.query,this.readyState="",this.socket=e.socket}onError(e,t){const s=new Error(e);return s.type="TransportError",s.description=t,super.emit("error",s),this}open(){return(this.readyState==="closed"||this.readyState==="")&&(this.readyState="opening",this.doOpen()),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emit("open")}onData(e){const t=ee(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emit("packet",e)}onClose(){this.readyState="closed",super.emit("close")}}var re="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),D=64,oe={},ce=0,m=0,ae;function M(n){var e="";do e=re[n%D]+e,n=Math.floor(n/D);while(n>0);return e}function Fe(n){var e=0;for(m=0;m<n.length;m++)e=e*D+oe[n.charAt(m)];return e}function V(){var n=M(+new Date);return n!==ae?(ce=0,ae=n):n+"."+M(ce++)}for(;m<D;m++)oe[re[m]]=m;V.encode=M;V.decode=Fe;var he=V,N={};N.encode=function(n){var e="";for(var t in n)n.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(n[t]));return e};N.decode=function(n){for(var e={},t=n.split("&"),s=0,i=t.length;s<i;s++){var r=t[s].split("=");e[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return e};class Me extends ie{constructor(){super(...arguments);this.polling=!1}get name(){return"polling"}doOpen(){this.poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let s=0;this.polling&&(s++,this.once("pollComplete",function(){--s||t()})),this.writable||(s++,this.once("drain",function(){--s||t()}))}else t()}poll(){this.polling=!0,this.doPoll(),this.emit("poll")}onData(e){const t=s=>{if(this.readyState==="opening"&&s.type==="open"&&this.onOpen(),s.type==="close")return this.onClose(),!1;this.onPacket(s)};qe(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this.polling=!1,this.emit("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Pe(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emit("drain")})})}uri(){let e=this.query||{};const t=this.opts.secure?"https":"http";let s="";this.opts.timestampRequests!==!1&&(e[this.opts.timestampParam]=he()),!this.supportsBinary&&!e.sid&&(e.b64=1),this.opts.port&&(t==="https"&&Number(this.opts.port)!==443||t==="http"&&Number(this.opts.port)!==80)&&(s=":"+this.opts.port);const i=N.encode(e),r=this.opts.hostname.indexOf(":")!==-1;return t+"://"+(r?"["+this.opts.hostname+"]":this.opts.hostname)+s+this.opts.path+(i.length?"?"+i:"")}}function Ve(){}const Ue=function(){return new X({xdomain:!1}).responseType!=null}();class He extends Me{constructor(e){super(e);if(typeof location!="undefined"){const s=location.protocol==="https:";let i=location.port;i||(i=s?"443":"80"),this.xd=typeof location!="undefined"&&e.hostname!==location.hostname||i!==e.port,this.xs=e.secure!==s}const t=e&&e.forceBase64;this.supportsBinary=Ue&&!t}request(e={}){return Object.assign(e,{xd:this.xd,xs:this.xs},this.opts),new p(this.uri(),e)}doWrite(e,t){const s=this.request({method:"POST",data:e});s.on("success",t),s.on("error",i=>{this.onError("xhr post error",i)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",t=>{this.onError("xhr poll error",t)}),this.pollXhr=e}}class p extends v{constructor(e,t){super();S(this,t),this.opts=t,this.method=t.method||"GET",this.uri=e,this.async=t.async!==!1,this.data=t.data!==void 0?t.data:null,this.create()}create(){const e=G(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this.opts.xd,e.xscheme=!!this.opts.xs;const t=this.xhr=new X(e);try{t.open(this.method,this.uri,this.async);try{if(this.opts.extraHeaders){t.setDisableHeaderCheck&&t.setDisableHeaderCheck(!0);for(let s in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(s)&&t.setRequestHeader(s,this.opts.extraHeaders[s])}}catch{}if(this.method==="POST")try{t.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{t.setRequestHeader("Accept","*/*")}catch{}"withCredentials"in t&&(t.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(t.timeout=this.opts.requestTimeout),t.onreadystatechange=()=>{t.readyState===4&&(t.status===200||t.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof t.status=="number"?t.status:0)},0))},t.send(this.data)}catch(s){this.setTimeoutFn(()=>{this.onError(s)},0);return}typeof document!="undefined"&&(this.index=p.requestsCount++,p.requests[this.index]=this)}onSuccess(){this.emit("success"),this.cleanup()}onData(e){this.emit("data",e),this.onSuccess()}onError(e){this.emit("error",e),this.cleanup(!0)}cleanup(e){if(!(typeof this.xhr=="undefined"||this.xhr===null)){if(this.xhr.onreadystatechange=Ve,e)try{this.xhr.abort()}catch{}typeof document!="undefined"&&delete p.requests[this.index],this.xhr=null}}onLoad(){const e=this.xhr.responseText;e!==null&&this.onData(e)}abort(){this.cleanup()}}p.requestsCount=0;p.requests={};if(typeof document!="undefined"){if(typeof attachEvent=="function")attachEvent("onunload",ue);else if(typeof addEventListener=="function"){const n="onpagehide"in y?"pagehide":"unload";addEventListener(n,ue,!1)}}function ue(){for(let n in p.requests)p.requests.hasOwnProperty(n)&&p.requests[n].abort()}const Ye=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0))(),T=y.WebSocket||y.MozWebSocket,fe=!0,Ke="arraybuffer",le=typeof navigator!="undefined"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class U extends ie{constructor(e){super(e);this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const e=this.uri(),t=this.opts.protocols,s=le?{}:G(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(s.headers=this.opts.extraHeaders);try{this.ws=fe&&!le?t?new T(e,t):new T(e):new T(e,t,s)}catch(i){return this.emit("error",i)}this.ws.binaryType=this.socket.binaryType||Ke,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=this.onClose.bind(this),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const s=e[t],i=t===e.length-1;Q(s,this.supportsBinary,r=>{const o={};try{fe&&this.ws.send(r)}catch{}i&&Ye(()=>{this.writable=!0,this.emit("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws!="undefined"&&(this.ws.close(),this.ws=null)}uri(){let e=this.query||{};const t=this.opts.secure?"wss":"ws";let s="";this.opts.port&&(t==="wss"&&Number(this.opts.port)!==443||t==="ws"&&Number(this.opts.port)!==80)&&(s=":"+this.opts.port),this.opts.timestampRequests&&(e[this.opts.timestampParam]=he()),this.supportsBinary||(e.b64=1);const i=N.encode(e),r=this.opts.hostname.indexOf(":")!==-1;return t+"://"+(r?"["+this.opts.hostname+"]":this.opts.hostname)+s+this.opts.path+(i.length?"?"+i:"")}check(){return!!T&&!("__initialize"in T&&this.name===U.prototype.name)}}const ze={websocket:U,polling:He};class d extends v{constructor(e,t={}){super();e&&typeof e=="object"&&(t=e,e=null),e?(e=q(e),t.hostname=e.host,t.secure=e.protocol==="https"||e.protocol==="wss",t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=q(t.host).host),S(this,t),this.secure=t.secure!=null?t.secure:typeof location!="undefined"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location!="undefined"?location.hostname:"localhost"),this.port=t.port||(typeof location!="undefined"&&location.port?location.port:this.secure?"443":"80"),this.transports=t.transports||["polling","websocket"],this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!0},t),this.opts.path=this.opts.path.replace(/\/$/,"")+"/",typeof this.opts.query=="string"&&(this.opts.query=N.decode(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&addEventListener("beforeunload",()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},!1),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close")},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(e){const t=We(this.opts.query);t.EIO=ne,t.transport=e,this.id&&(t.sid=this.id);const s=Object.assign({},this.opts.transportOptions[e],this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port});return new ze[e](s)}open(){let e;if(this.opts.rememberUpgrade&&d.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)e="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else e=this.transports[0];this.readyState="opening";try{e=this.createTransport(e)}catch{this.transports.shift(),this.open();return}e.open(),this.setTransport(e)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",()=>{this.onClose("transport close")})}probe(e){let t=this.createTransport(e),s=!1;d.priorWebsocketSuccess=!1;const i=()=>{s||(t.send([{type:"ping",data:"probe"}]),t.once("packet",b=>{if(!s)if(b.type==="pong"&&b.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;d.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{s||this.readyState!=="closed"&&(w(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const A=new Error("probe error");A.transport=t.name,this.emitReserved("upgradeError",A)}}))};function r(){s||(s=!0,w(),t.close(),t=null)}const o=b=>{const A=new Error("probe error: "+b);A.transport=t.name,r(),this.emitReserved("upgradeError",A)};function a(){o("transport closed")}function f(){o("socket closed")}function k(b){t&&b.name!==t.name&&r()}const w=()=>{t.removeListener("open",i),t.removeListener("error",o),t.removeListener("close",a),this.off("close",f),this.off("upgrading",k)};t.once("open",i),t.once("error",o),t.once("close",a),this.once("close",f),this.once("upgrading",k),t.open()}onOpen(){if(this.readyState="open",d.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade&&this.transport.pause){let e=0;const t=this.upgrades.length;for(;e<t;e++)this.probe(this.upgrades[e])}}onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this.resetPingTimeout(),this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const t=new Error("server error");t.code=e.data,this.onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emitReserved("flush"))}write(e,t,s){return this.sendPacket("message",e,t,s),this}send(e,t,s){return this.sendPacket("message",e,t,s),this}sendPacket(e,t,s,i){if(typeof t=="function"&&(i=t,t=void 0),typeof s=="function"&&(i=s,s=null),this.readyState==="closing"||this.readyState==="closed")return;s=s||{},s.compress=s.compress!==!1;const r={type:e,data:t,options:s};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this.onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},s=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?s():e()}):this.upgrading?s():e()),this}onError(e){d.priorWebsocketSuccess=!1,this.emitReserved("error",e),this.onClose("transport error",e)}onClose(e,t){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&removeEventListener("offline",this.offlineEventListener,!1),this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(e){const t=[];let s=0;const i=e.length;for(;s<i;s++)~this.transports.indexOf(e[s])&&t.push(e[s]);return t}}d.protocol=ne;function We(n){const e={};for(let t in n)n.hasOwnProperty(t)&&(e[t]=n[t]);return e}d.protocol;const $e=typeof ArrayBuffer=="function",Je=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n.buffer instanceof ArrayBuffer,pe=Object.prototype.toString,Xe=typeof Blob=="function"||typeof Blob!="undefined"&&pe.call(Blob)==="[object BlobConstructor]",Ge=typeof File=="function"||typeof File!="undefined"&&pe.call(File)==="[object FileConstructor]";function H(n){return $e&&(n instanceof ArrayBuffer||Je(n))||Xe&&n instanceof Blob||Ge&&n instanceof File}function L(n,e){if(!n||typeof n!="object")return!1;if(Array.isArray(n)){for(let t=0,s=n.length;t<s;t++)if(L(n[t]))return!0;return!1}if(H(n))return!0;if(n.toJSON&&typeof n.toJSON=="function"&&arguments.length===1)return L(n.toJSON(),!0);for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&L(n[t]))return!0;return!1}function Qe(n){const e=[],t=n.data,s=n;return s.data=Y(t,e),s.attachments=e.length,{packet:s,buffers:e}}function Y(n,e){if(!n)return n;if(H(n)){const t={_placeholder:!0,num:e.length};return e.push(n),t}else if(Array.isArray(n)){const t=new Array(n.length);for(let s=0;s<n.length;s++)t[s]=Y(n[s],e);return t}else if(typeof n=="object"&&!(n instanceof Date)){const t={};for(const s in n)n.hasOwnProperty(s)&&(t[s]=Y(n[s],e));return t}return n}function Ze(n,e){return n.data=K(n.data,e),n.attachments=void 0,n}function K(n,e){if(!n)return n;if(n&&n._placeholder)return e[n.num];if(Array.isArray(n))for(let t=0;t<n.length;t++)n[t]=K(n[t],e);else if(typeof n=="object")for(const t in n)n.hasOwnProperty(t)&&(n[t]=K(n[t],e));return n}const je=5;var c;(function(n){n[n.CONNECT=0]="CONNECT",n[n.DISCONNECT=1]="DISCONNECT",n[n.EVENT=2]="EVENT",n[n.ACK=3]="ACK",n[n.CONNECT_ERROR=4]="CONNECT_ERROR",n[n.BINARY_EVENT=5]="BINARY_EVENT",n[n.BINARY_ACK=6]="BINARY_ACK"})(c||(c={}));class et{encode(e){return(e.type===c.EVENT||e.type===c.ACK)&&L(e)?(e.type=e.type===c.EVENT?c.BINARY_EVENT:c.BINARY_ACK,this.encodeAsBinary(e)):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===c.BINARY_EVENT||e.type===c.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data)),t}encodeAsBinary(e){const t=Qe(e),s=this.encodeAsString(t.packet),i=t.buffers;return i.unshift(s),i}}class z extends v{constructor(){super()}add(e){let t;if(typeof e=="string")t=this.decodeString(e),t.type===c.BINARY_EVENT||t.type===c.BINARY_ACK?(this.reconstructor=new st(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t);else if(H(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const s={type:Number(e.charAt(0))};if(c[s.type]===void 0)throw new Error("unknown packet type "+s.type);if(s.type===c.BINARY_EVENT||s.type===c.BINARY_ACK){const r=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const o=e.substring(r,t);if(o!=Number(o)||e.charAt(t)!=="-")throw new Error("Illegal attachments");s.attachments=Number(o)}if(e.charAt(t+1)==="/"){const r=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););s.nsp=e.substring(r,t)}else s.nsp="/";const i=e.charAt(t+1);if(i!==""&&Number(i)==i){const r=t+1;for(;++t;){const o=e.charAt(t);if(o==null||Number(o)!=o){--t;break}if(t===e.length)break}s.id=Number(e.substring(r,t+1))}if(e.charAt(++t)){const r=tt(e.substr(t));if(z.isPayloadValid(s.type,r))s.data=r;else throw new Error("invalid payload")}return s}static isPayloadValid(e,t){switch(e){case c.CONNECT:return typeof t=="object";case c.DISCONNECT:return t===void 0;case c.CONNECT_ERROR:return typeof t=="string"||typeof t=="object";case c.EVENT:case c.BINARY_EVENT:return Array.isArray(t)&&t.length>0;case c.ACK:case c.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&this.reconstructor.finishedReconstruction()}}function tt(n){try{return JSON.parse(n)}catch{return!1}}class st{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=Ze(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}var nt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",protocol:je,get PacketType(){return c},Encoder:et,Decoder:z});function u(n,e,t){return n.on(e,t),function(){n.off(e,t)}}const it=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class de extends v{constructor(e,t,s){super();this.connected=!1,this.disconnected=!0,this.receiveBuffer=[],this.sendBuffer=[],this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,s&&s.auth&&(this.auth=s.auth),this.io._autoConnect&&this.open()}subEvents(){if(this.subs)return;const e=this.io;this.subs=[u(e,"open",this.onopen.bind(this)),u(e,"packet",this.onpacket.bind(this)),u(e,"error",this.onerror.bind(this)),u(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){if(it.hasOwnProperty(e))throw new Error('"'+e+'" is a reserved event name');t.unshift(e);const s={type:c.EVENT,data:t};if(s.options={},s.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const o=this.ids++,a=t.pop();this._registerAckCallback(o,a),s.id=o}const i=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!i||!this.connected)||(this.connected?this.packet(s):this.sendBuffer.push(s)),this.flags={},this}_registerAckCallback(e,t){const s=this.flags.timeout;if(s===void 0){this.acks[e]=t;return}const i=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let r=0;r<this.sendBuffer.length;r++)this.sendBuffer[r].id===e&&this.sendBuffer.splice(r,1);t.call(this,new Error("operation has timed out"))},s);this.acks[e]=(...r)=>{this.io.clearTimeoutFn(i),t.apply(this,[null,...r])}}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this.packet({type:c.CONNECT,data:e})}):this.packet({type:c.CONNECT,data:this.auth})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e){this.connected=!1,this.disconnected=!0,delete this.id,this.emitReserved("disconnect",e)}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case c.CONNECT:if(e.data&&e.data.sid){const i=e.data.sid;this.onconnect(i)}else this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case c.EVENT:this.onevent(e);break;case c.BINARY_EVENT:this.onevent(e);break;case c.ACK:this.onack(e);break;case c.BINARY_ACK:this.onack(e);break;case c.DISCONNECT:this.ondisconnect();break;case c.CONNECT_ERROR:this.destroy();const s=new Error(e.data.message);s.data=e.data.data,this.emitReserved("connect_error",s);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const s of t)s.apply(this,e)}super.emit.apply(this,e)}ack(e){const t=this;let s=!1;return function(...i){s||(s=!0,t.packet({type:c.ACK,id:e,data:i}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(t.apply(this,e.data),delete this.acks[e.id])}onconnect(e){this.id=e,this.connected=!0,this.disconnected=!1,this.emitBuffered(),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>this.packet(e)),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:c.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let s=0;s<t.length;s++)if(e===t[s])return t.splice(s,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}}var rt=E;function E(n){n=n||{},this.ms=n.min||100,this.max=n.max||1e4,this.factor=n.factor||2,this.jitter=n.jitter>0&&n.jitter<=1?n.jitter:0,this.attempts=0}E.prototype.duration=function(){var n=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*n);n=(Math.floor(e*10)&1)==0?n-t:n+t}return Math.min(n,this.max)|0};E.prototype.reset=function(){this.attempts=0};E.prototype.setMin=function(n){this.ms=n};E.prototype.setMax=function(n){this.max=n};E.prototype.setJitter=function(n){this.jitter=n};class W extends v{constructor(e,t){var s;super();this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,S(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((s=t.randomizationFactor)!==null&&s!==void 0?s:.5),this.backoff=new rt({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const i=t.parser||nt;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new d(this.uri,this.opts);const t=this.engine,s=this;this._readyState="opening",this.skipReconnect=!1;const i=u(t,"open",function(){s.onopen(),e&&e()}),r=u(t,"error",o=>{s.cleanup(),s._readyState="closed",this.emitReserved("error",o),e?e(o):s.maybeReconnectOnOpen()});if(this._timeout!==!1){const o=this._timeout;o===0&&i();const a=this.setTimeoutFn(()=>{i(),t.close(),t.emit("error",new Error("timeout"))},o);this.opts.autoUnref&&a.unref(),this.subs.push(function(){clearTimeout(a)})}return this.subs.push(i),this.subs.push(r),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(u(e,"ping",this.onping.bind(this)),u(e,"data",this.ondata.bind(this)),u(e,"error",this.onerror.bind(this)),u(e,"close",this.onclose.bind(this)),u(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){this.decoder.add(e)}ondecoded(e){this.emitReserved("packet",e)}onerror(e){this.emitReserved("error",e)}socket(e,t){let s=this.nsps[e];return s||(s=new de(this,e,t),this.nsps[e]=s),s}_destroy(e){const t=Object.keys(this.nsps);for(const s of t)if(this.nsps[s].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let s=0;s<t.length;s++)this.engine.write(t[s],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const s=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},t);this.opts.autoUnref&&s.unref(),this.subs.push(function(){clearTimeout(s)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const C={};function I(n,e){typeof n=="object"&&(e=n,n=void 0),e=e||{};const t=_e(n,e.path||"/socket.io"),s=t.source,i=t.id,r=t.path,o=C[i]&&r in C[i].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let f;return a?f=new W(s,e):(C[i]||(C[i]=new W(s,e)),f=C[i]),t.query&&!e.query&&(e.query=t.queryKey),f.socket(t.path,e)}Object.assign(I,{Manager:W,Socket:de,io:I,connect:I});class ot{constructor(){this.initNotice()}initNotice(){return new Promise((e,t)=>{if(!("Notification"in window))t(new Error("\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u53D1\u9001\u901A\u77E5"));else if(Notification.permission!=="denied")Notification.requestPermission().then(s=>s==="granted"?e(!0):t(new Error("\u5DF2\u62D2\u7EDD\u901A\u77E5")));else{if(Notification.permission==="denied")return t(new Error("\u5DF2\u62D2\u7EDD\u901A\u77E5"));t(!0)}})}notice(e,t,s={}){return new Promise(i=>{this.initNotice().then(r=>{if(r&&!document.hasFocus()){const o=new Notification(e,{body:t,...s});i(o)}})})}}const B={get warning(){return window.notification.warning},get warn(){return window.notification.warning},get success(){return window.notification.success},get error(){return window.notification.error},get info(){return window.notification.info}};class ct{socket;#e=ye.title;#t=new ot;constructor(){this.initIO()}isInit=!1;initIO(){if(this.isInit)return;this.destory();const e=me();!e||(this.socket=I(ge+"/admin",{timeout:1e4,reconnectionDelay:3e3,autoConnect:!1,reconnectionAttempts:3,transports:["websocket"],query:{token:e}}),this.socket.open(),this.socket.on("message",t=>{if(typeof t!="string")return this.handleEvent(t.type,t.data);const{data:s,type:i}=JSON.parse(t);this.handleEvent(i,s)}),this.socket.on("error",()=>{window.message.error("Socket \u8FDE\u63A5\u5F02\u5E38")}),this.isInit=!0)}handleEvent(e,t){switch(e){case g.GATEWAY_CONNECT:break;case g.GATEWAY_DISCONNECT:{B.warning(t);break}case g.AUTH_FAILED:{console.log("\u7B49\u5F85\u767B\u9646\u4E2D..."),this.socket.close();break}case g.COMMENT_CREATE:{const s=t.author+": "+t.text,i=()=>{P.push({name:"comment"}),r.destroy()},r=B.success({title:"\u65B0\u7684\u8BC4\u8BBA",content:s,action(){return R(J,{justify:"end"},R($,{onClick:i,type:"primary",round:!0,ghost:!0},"\u67E5\u770B"))}});this.#t.notice(this.#e+" \u6536\u5230\u65B0\u7684\u8BC4\u8BBA",s).then(o=>{!o||(o.onclick=()=>{document.hasFocus()?i():window.open(P.resolve({name:"comment"}).href)})});break}case g.ADMIN_NOTIFICATION:{const{type:s,message:i}=t;B[s]({content:i});break}case g.CONTENT_REFRESH:{B.warning({content:"\u6570\u636E\u5E93\u6709\u53D8\u52A8, \u5C06\u5728 1 \u79D2\u540E\u91CD\u8F7D\u9875\u9762"}),setTimeout(()=>{location.reload()},1e3);break}case g.LINK_APPLY:{const s=t.name,i=()=>{P.push({name:"friends"}),r.destroy()},r=B.success({title:"\u65B0\u7684\u53CB\u94FE\u7533\u8BF7",content:s,action(){return R(J,{justify:"end"},R($,{onClick:i,type:"primary",round:!0,ghost:!0},"\u67E5\u770B"))}});this.#t.notice(this.#e+" \u6536\u5230\u65B0\u7684\u53CB\u94FE\u7533\u8BF7",s).then(o=>{!o||(o.onclick=()=>{document.hasFocus()?i():window.open("/")})});break}default:console.log(e,t)}be.emit(e,t)}destory(){!this.socket||(this.socket.disconnect(),this.socket.off("message"),this.isInit=!1)}}const at=new ct;var lt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",socket:at});export{be as b,at as c,lt as i};
