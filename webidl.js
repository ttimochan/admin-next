function e(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}var t=["Clamp","Constructor","EnforceRange","Exposed","ImplicitThis","Global","PrimaryGlobal","LegacyArrayClass","LegacyUnenumerableNamedProperties","LenientThis","NamedConstructor","NewObject","NoInterfaceObject","OverrideBuiltins","PutForwards","Replaceable","SameObject","TreatNonObjectAsNull","TreatNullAs","EmptyString","Unforgeable","Unscopeable"],r=e(t),n=["unsigned","short","long","unrestricted","float","double","boolean","byte","octet","Promise","ArrayBuffer","DataView","Int8Array","Int16Array","Int32Array","Uint8Array","Uint16Array","Uint32Array","Uint8ClampedArray","Float32Array","Float64Array","ByteString","DOMString","USVString","sequence","object","RegExp","Error","DOMException","FrozenArray","any","void"],a=e(n),i=["attribute","callback","const","deleter","dictionary","enum","getter","implements","inherit","interface","iterable","legacycaller","maplike","partial","required","serializer","setlike","setter","static","stringifier","typedef","optional","readonly","or"],o=e(i),c=["true","false","Infinity","NaN","null"],l=e(c),m=e(["callback","dictionary","enum","interface"]),u=e(["typedef"]),s=/^[:<=>?]/,f=/^-?([1-9][0-9]*|0[Xx][0-9A-Fa-f]+|0[0-7]*)/,y=/^-?(([0-9]+\.[0-9]*|[0-9]*\.[0-9]+)([Ee][+-]?[0-9]+)?|[0-9]+[Ee][+-]?[0-9]+)/,d=/^_?[A-Za-z][0-9A-Z_a-z-]*/,p=/^_?[A-Za-z][0-9A-Z_a-z-]*(?=\s*;)/,b=/^"[^"]*"/,h=/^\/\*.*?\*\//,A=/^\/\*.*/,g=/^.*?\*\//;const D={startState:function(){return{inComment:!1,lastToken:"",startDef:!1,endDef:!1}},token:function(e,t){var n=function(e,t){if(e.eatSpace())return null;if(t.inComment)return e.match(g)?(t.inComment=!1,"comment"):(e.skipToEnd(),"comment");if(e.match("//"))return e.skipToEnd(),"comment";if(e.match(h))return"comment";if(e.match(A))return t.inComment=!0,"comment";if(e.match(/^-?[0-9\.]/,!1)&&(e.match(f)||e.match(y)))return"number";if(e.match(b))return"string";if(t.startDef&&e.match(d))return"def";if(t.endDef&&e.match(p))return t.endDef=!1,"def";if(e.match(o))return"keyword";if(e.match(a)){var n=t.lastToken,i=(e.match(/^\s*(.+?)\b/,!1)||[])[1];return":"===n||"implements"===n||"implements"===i||"="===i?"builtin":"type"}return e.match(r)?"builtin":e.match(l)?"atom":e.match(d)?"variable":e.match(s)?"operator":(e.next(),null)}(e,t);if(n){var i=e.current();t.lastToken=i,"keyword"===n?(t.startDef=m.test(i),t.endDef=t.endDef||u.test(i)):t.startDef=!1}return n},languageData:{autocomplete:t.concat(n).concat(i).concat(c)}};export{D as webIDL};
