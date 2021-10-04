var t,e=/^(block|let*|return-from|catch|load-time-value|setq|eval-when|locally|symbol-macrolet|flet|macrolet|tagbody|function|multiple-value-call|the|go|multiple-value-prog1|throw|if|progn|unwind-protect|labels|progv|let|quote)$/,n=/^with|^def|^do|^prog|case$|^cond$|bind$|when$|unless$/,r=/^(?:[+\-]?(?:\d+|\d*\.\d+)(?:[efd][+\-]?\d+)?|[+\-]?\d+(?:\/[+\-]?\d+)?|#b[+\-]?[01]+|#o[+\-]?[0-7]+|#x[+\-]?[\da-f]+)/,o=/[^\s'`,@()\[\]";]/;function a(t){for(var e;e=t.next();)if("\\"==e)t.next();else if(!o.test(e)){t.backUp(1);break}return t.current()}function l(o,l){if(o.eatSpace())return t="ws",null;if(o.match(r))return"number";var u;if("\\"==(u=o.next())&&(u=o.next()),'"'==u)return(l.tokenize=c)(o,l);if("("==u)return t="open","bracket";if(")"==u||"]"==u)return t="close","bracket";if(";"==u)return o.skipToEnd(),t="ws","comment";if(/['`,@]/.test(u))return null;if("|"==u)return o.skipTo("|")?(o.next(),"variableName"):(o.skipToEnd(),"error");if("#"==u)return"("==(u=o.next())?(t="open","bracket"):/[+\-=\.']/.test(u)||/\d/.test(u)&&o.match(/^\d*#/)?null:"|"==u?(l.tokenize=i)(o,l):":"==u?(a(o),"meta"):"\\"==u?(o.next(),a(o),"string.special"):"error";var s=a(o);return"."==s?null:(t="symbol","nil"==s||"t"==s||":"==s.charAt(0)?"atom":"open"==l.lastType&&(e.test(s)||n.test(s))?"keyword":"&"==s.charAt(0)?"variableName.special":"variableName")}function c(t,e){for(var n,r=!1;n=t.next();){if('"'==n&&!r){e.tokenize=l;break}r=!r&&"\\"==n}return"string"}function i(e,n){for(var r,o;r=e.next();){if("#"==r&&"|"==o){n.tokenize=l;break}o=r}return t="ws","comment"}const u={startState:function(){return{ctx:{prev:null,start:0,indentTo:0},lastType:null,tokenize:l}},token:function(e,r){e.sol()&&"number"!=typeof r.ctx.indentTo&&(r.ctx.indentTo=r.ctx.start+1),t=null;var o=r.tokenize(e,r);return"ws"!=t&&(null==r.ctx.indentTo?"symbol"==t&&n.test(e.current())?r.ctx.indentTo=r.ctx.start+e.indentUnit:r.ctx.indentTo="next":"next"==r.ctx.indentTo&&(r.ctx.indentTo=e.column()),r.lastType=t),"open"==t?r.ctx={prev:r.ctx,start:e.column(),indentTo:null}:"close"==t&&(r.ctx=r.ctx.prev||r.ctx),o},indent:function(t){var e=t.ctx.indentTo;return"number"==typeof e?e:t.ctx.start+1},languageData:{commentTokens:{line:";;",block:{open:"#|",close:"|#"}},closeBrackets:{brackets:["(","[","{",'"']}}};export{u as commonLisp};
