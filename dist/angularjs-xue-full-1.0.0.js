/**
 * angularjs-xue
 * Homepage: https://github.com/zhangxuelian/angularjs-xue
 * 
 * Version: 1.0.0 - 2020-02-27
 * Require angularjs version: 1.2.32
 * License: ISC
 */
angular.module("ui.xue", ["ui.xue.tpls", "xue.util.lang","xue.util.array","xue.cascader","xue.counter","xue.util.string","xue.util.date","xue.datepicker","xue.menu","xue.notice","xue.pagination","xue.select","xue.steps","xue.table","xue.tabs","xue.tree","xue.util.collection","xue.util.math","xue.util.methods","xue.util.number","xue.util.object","xue.util.properties","xue.util.seq","xue.util.function","xue.util"]);
angular.module("ui.xue.tpls", ["xue/template/cascader/cascader.html","xue/template/counter/counter.html","xue/template/datepicker/datepicker.html","xue/template/menu/menu.html","xue/template/notice/notice.html","xue/template/pagination/pager.html","xue/template/pagination/pagination.html","xue/template/select/select.html","xue/template/steps/steps.html","xue/template/table/table.html","xue/template/tabs/tab.html","xue/template/tabs/tabs_wrap.html","xue/template/tree/tree.html"]);
/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);

angular.module('xue.cascader', ['xue.util.lang', 'xue.util.array'])
    .directive('xueCascader', ["$http", "$q", 'xueUtilLang', 'xueUtilArray', function ($http, $q, xueUtilLang, xueUtilArray) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                cascaderConfig: '=',
                ngVal: '=',
                ngDisabled: '='
            },
            templateUrl: function (element, attrs) {
                return attrs.templateUrl || 'xue/template/cascader/cascader.html';
            },
            link: function (scope, ele, attrs) {
                var cascaderCtrl = scope.cascaderCtrl = {
                    areaUrl: 'assets/data/city.min.js',
                    defaultConfig: {
                        data: [],
                        dataMap: {},
                        type: '', // 级联框自定义类型 area: 地区选择框
                        valueField: 'value', // 对应选项value值
                        textField : 'label', // 显示在输入框中的字段名
                        childName: 'children', // 选择框子列表字段名
                        css: { // 自定义样式
                            inputClassName: '', // 输入框样式类名
                            inputStyle: {}, // 输入框样式
                            panelClassName: '', // 选择框单列样式类名
                            panelStyle: {} // 选择框单列样式
                        },
                        onSelect: function(){} //选择回调
                    },
                    // 选择框列数据数组
                    selectList: [],
                    // 自定义类型 数据加载 异步对象
                    delay: null,
                    // 配置初始化
                    init: function () {
                        var self = this;
                        scope.cascaderConfig = angular.extend(self.defaultConfig, scope.cascaderConfig || {});
                        // 是否使用自定义类型
                        if (scope.cascaderConfig.type) {
                            self.delay = $q.defer();
                            $http.get(self[scope.cascaderConfig.type + 'Url']).success(function(data) {
                                self.initData(data, 0);
                                return self.delay.resolve(data);
                            });
                        } else {
                            self.initData(scope.cascaderConfig.data, 0);
                        }
                    },
                    // 数据初始化
                    initData: function (data, depth) {
                        var self = this;
                        self.selectList[depth] = [];
                        angular.forEach(data, function(item) {
                            item.depth = depth; // 层级
                            scope.cascaderConfig.dataMap[item[scope.cascaderConfig.valueField]] = item;
                            // 子列表递归处理
                            if (item[scope.cascaderConfig.childName] && item[scope.cascaderConfig.childName].length) {
                                self.initData(item[scope.cascaderConfig.childName], depth + 1);    
                            } else {
                                // 叶子项
                                item.isLeaf = true;
                            }
                        })
                        // 根列表赋值
                        if (depth === 0) {
                            scope.cascaderConfig.data = self.selectList[0] = data;
                        }
                    },
                    // 根据selectValue获取列表数据
                    getData: function (data, index) {
                        var self = this;
                        var valueIndex = xueUtilArray.findObjIndex(data, scope.cascaderConfig.valueField, self.selectValue[index])
                        // 当前项存在且存在子列表
                        if (valueIndex != -1 && !data[valueIndex].isLeaf) {
                            // 子列表赋值
                            self.selectList[index + 1] = data[valueIndex][scope.cascaderConfig.childName];
                            // 递归处理
                            if (self.selectValue[index + 1]) {
                                self.getData(data[valueIndex][scope.cascaderConfig.childName], index + 1);
                            }
                        }
                    },
                    // 是否展示选择框
                    showSelect: false,
                    // 鼠标位置是否位于选择框上
                    onSelectDiv: false,
                    // 点击不位于选择框的区域隐藏选择框
                    hideSelect: function () {
                        if (!cascaderCtrl.onSelectDiv) {
                            cascaderCtrl.showSelect = false;
                            cascaderCtrl.resumeValue();
                        }
                    },
                    // 展开/收缩 选择框
                    toggleSelect: function(event) {
                        var self = this;
                        self.showSelect = !self.showSelect;
                        if (!self.showSelect) {
                            self.resumeValue();
                        }
                        event.stopPropagation();
                    },
                    // 选择框选择项数组
                    selectValue: [],
                    // 单击项
                    clickItem: function (item) {
                        var self = this;
                        // 选择项数组赋值
                        self.selectValue[item.depth] = item[scope.cascaderConfig.valueField];
                        // 单击非叶子项
                        if (!item.isLeaf) {
                            self.selectList[item.depth + 1] = item[scope.cascaderConfig.childName];
                        } else {
                        // 单击叶子项
                            self.selectValue = self.selectValue.slice(0, item.depth + 1);
                            var completeLabel = [];
                            console.log(scope.cascaderConfig.dataMap);
                            
                            angular.forEach(self.selectValue, function (item) {
                                completeLabel.push(scope.cascaderConfig.dataMap[item][scope.cascaderConfig.textField]);
                            })
                            scope.ngVal = completeLabel.join("/");
                            self.showSelect = false;
                            if (xueUtilLang.isFunction(scope.cascaderConfig.onSelect)){
                                scope.cascaderConfig.onSelect(self.selectValue.join("/"));
                            }
                        }
                    },
                    // 选择框 收缩时 数据恢复
                    resumeValue: function () {
                        var self = this;
                        if (scope.ngVal) {
                            if (self.selectValue.join("/") != scope.ngVal) {
                                self.selectValue = scope.ngVal.split("/");
                                self.getData(scope.cascaderConfig.data, 0);
                            }
                        } else {
                            self.selectValue = [];
                            self.selectList.length = 1;
                        }
                    },
                    // 清除选择项
                    clear: function(event) {
                        var self = this;
                        scope.ngVal = "";
                        self.selectValue = [];
                        self.showSelect = false;
                        self.selectList.length = 1;
                        if (event) {
                            event.stopPropagation();
                        }
                    }
                }

                document.addEventListener('click', cascaderCtrl.hideSelect);
               
                var unbindWatch = scope.$watch("ngVal",function(newValue,oldValue){
                    if (scope.ngVal) {
                        var valueArr = newValue.split("/");
                        angular.forEach(valueArr, function(item, index) {
                            cascaderCtrl.selectValue[index] = item;
                        })
                        if (cascaderCtrl.selectValue.length) {
                            if (scope.cascaderConfig.type) {
                                cascaderCtrl.delay.promise.then(function(data) {
                                    cascaderCtrl.getData(data, 0);    
                                })
                            } else {
                                cascaderCtrl.getData(scope.cascaderConfig.data, 0);
                            }
                        }
                    }
                })

                cascaderCtrl.init();

                scope.$on("$destroy", function() {
                    document.removeEventListener('click', cascaderCtrl.hideSelect);
                    unbindWatch();
                })
            }
        }
    }])
angular.module('xue.counter', [])
    .directive('xueCounter', ['xueUtilLang', function (xueUtilLang) {
        return {
            restrict: "E",
            replace: true,
            scope: {
                counterConfig: '=',
                ngNumber: '=',
                params: '='
            },
            templateUrl: function (element, attrs) {
                return attrs.templateUrl || "xue/template/counter/counter.html";
            },
            link: function (scope) {
                var gxCounterCtrl = scope.gxCounterCtrl = {
                    number: "", //组件内部展示数据
                    lastNumber: "", //记录上一次的更改数据
                    defaultConfig: {
                        type: 1, //支持两种模式：1：纯文本,2:input输入框
                        max: 100, //最大值
                        min: 0, //最小值
                        step: 1, //数据每次加/减多少
                        disabled: false, //是否是可操作状态
                        required: true, //数据是否必填
                        size: "", //计数器大小,默认为空,另有可选值large, small
                        suffix: "", //数据后缀,如单位等
                        trigger: "change", //触发changeCallback的时机,可选值blur,change,type为2时生效
                        change: function () {}, //自定义change事件
                        blur: function () {}, //自定义blur事件
                        focus: function () {}, //自定义focus事件
                        changeCallback: function () {} //数据改变回调
                    },
                    init: function () {
                        var self = this;
                        gxCounterCtrl.number = scope.ngNumber;
                        gxCounterCtrl.lastNumber = scope.ngNumber;
                        scope.counterConfig = angular.extend(self.defaultConfig, scope.counterConfig || {});
                    },
                    changeByBtn: function (code) {
                        if (scope.counterConfig.disabled) {
                            return;
                        }
                        gxCounterCtrl.number = Number(gxCounterCtrl.number);
                        if (code == "add") {
                            if (gxCounterCtrl.number == scope.counterConfig.max) {
                                return;
                            }
                            gxCounterCtrl.number += scope.counterConfig.step;
                            //若运算之后值大于最大值,则重置
                            if (gxCounterCtrl.number > scope.counterConfig.max) {
                                gxCounterCtrl.number = scope.counterConfig.max;
                            }
                        } else {
                            if (gxCounterCtrl.number == scope.counterConfig.min) {
                                return;
                            }
                            gxCounterCtrl.number -= scope.counterConfig.step;
                            //若运算之后值小于最小值,则重置
                            if (gxCounterCtrl.number < scope.counterConfig.min) {
                                gxCounterCtrl.number = scope.counterConfig.min;
                            }
                        }
                        //保留最后一次更改
                        gxCounterCtrl.lastNumber = gxCounterCtrl.number;
                        if (xueUtilLang.isFunction(scope.counterConfig.changeCallback)) {
                            scope.counterConfig.changeCallback(gxCounterCtrl.number, scope.params);
                        }
                    },
                    inputChange: function () {
                        //支持负值、空值、0及非0开头数字
                        var reg = /^-?(0|[1-9][0-9]*)*$/;
                        if (reg.test(gxCounterCtrl.number)) {
                            if (scope.counterConfig.required && !gxCounterCtrl.number) {
                                gxCounterCtrl.number = gxCounterCtrl.lastNumber == "-" ? scope.counterConfig.min : gxCounterCtrl.lastNumber;
                            } else if (gxCounterCtrl.number > scope.counterConfig.max) {
                                gxCounterCtrl.number = scope.counterConfig.max;
                            } else if (gxCounterCtrl.number < scope.counterConfig.min) {
                                gxCounterCtrl.number = scope.counterConfig.min;
                            }
                        } else {
                            //不符合规则的值重置为上一次更改的值
                            gxCounterCtrl.number = gxCounterCtrl.lastNumber;
                        }
                        gxCounterCtrl.lastNumber = gxCounterCtrl.number;
                        if (xueUtilLang.isFunction(scope.counterConfig.change)) {
                            scope.counterConfig.change(gxCounterCtrl.number, scope.params);
                        }
                        if (scope.counterConfig.trigger == "change" && xueUtilLang.isFunction(scope.counterConfig.changeCallback)) {
                            scope.counterConfig.changeCallback(gxCounterCtrl.number, scope.params);
                        }
                    },
                    inputBlur: function () {
                        if (xueUtilLang.isFunction(scope.counterConfig.blur)) {
                            scope.counterConfig.blur(gxCounterCtrl.number, scope.params);
                        }
                        if (scope.counterConfig.trigger == "blur" && xueUtilLang.isFunction(scope.counterConfig.changeCallback)) {
                            scope.counterConfig.changeCallback(gxCounterCtrl.number, scope.params);
                        }
                    },
                    inputFocus: function () {
                        if (xueUtilLang.isFunction(scope.counterConfig.focus)) {
                            scope.counterConfig.focus(gxCounterCtrl.number, scope.params);
                        }
                    }
                }
                gxCounterCtrl.init();
                //监听外部传入的值
                scope.ngNumberWatcher = scope.$watch("ngNumber", function (newVal) {
                    if (typeof (newVal) != 'undefined') {
                        gxCounterCtrl.number = newVal;
                        gxCounterCtrl.lastNumber = newVal;
                    }
                });
                scope.$on('$destroy', function () {
                    scope.ngNumberWatcher();
                });
            }
        }
    }])
angular.module('xue.datepicker', ['xue.util.date', 'xue.util.lang'])
    .directive('xueDatepicker', ['xueUtilDate', 'xueUtilLang', function (xueUtilDate, xueUtilLang) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                dateConfig: '=',
                ngVal: '=',
                minDate: '=',
                maxDate: '=',
                ngDisabled: '='
            },
            templateUrl: function (element, attrs) {
                return attrs.templateUrl || 'xue/template/datepicker/datepicker.html'
            },
            link: function(scope,ele,attrs){

                var xlDatepickerCtrl = scope.xlDatepickerCtrl = {
                    // 默认配置
                    defaultConfig: {
                        id: '',
                        theme: 'deep-blue',
                        element: {
                            type: 'input',
                            targetWrapClassName: "",
                            targetWrapStyle: {},
                            contentWrapClassName: "",
                            contentWrapStyle: {}
                        },
                        format: 'YYYY-MM-DD', // 支持：1、YYYY-MM-DD 2、YYYY-MM-DD hh:mm:ss 3、hh:mm:ss 4、hh:mm
                        timeSelectMode: 0, // 0：自由选择 1：快速选择（hh:mm格式）
                        minDate: '',
                        maxDate: '',
                        fixedMinDate: "",
                        fixedMaxDate: "",
                        language: {
                            month : ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
                            weeks : [ "日", "一", "二", "三", "四", "五", "六" ],
                            times : ["时","分","秒"],
                            titText: "请选择日期时间",
                            clear : "清空",
                            today : "今天",
                            yes   : "确定",
                            close : "关闭"
                        },
                        fixed: false,
                        multiPanel: false,
                        autoClose: false,
                        range: null,
                        showTime: true,
                        showClear: true,
                        showNow: true,
                        showFestival: false,
                        marks: null,
                        nowCallback: function(){},
                        confirmCallback: function(){},
                        clearCallback: function(){},
                        closeCallback: function(){}
                    },

                    //0（默认）：日期 1：时间和日期 2：时间 3：时分
                    type: 0, 
                    id: "",

                    // 日期面板操作
                    showTimePicker: false,
                    optPanel: function(e){
                        var self = this;
                        $(".xl-datepicker-content").hide();
                        $(".xl-timepicker-content").hide();
                        var top = $(e.target).offset().top,
                            left = $(e.target).offset().left,
                            height = $(e.target).height(),
                            width = $(e.target).parent().outerWidth();
                        self.showPanel(top,left,height,width);
                    },
                    showPanel: function(top,left,height,width){
                        var self = this;
                        var panelEle = $('#'+xlDatepickerCtrl.id);
                        $('body').append(panelEle);
                        var eleHeight = panelEle.height(),screenHeight = $('body').height();
                        var offsetTop = top + height + 15;
                        var finalLeft = left - 19;
                        if(finalLeft + panelEle.width() > $('body').width()){
                            finalLeft = finalLeft - (panelEle.width() - width);
                            panelEle.find(".xl-popper-arrow").addClass("arrow-right");
                        }else{
                            panelEle.find(".xl-popper-arrow").removeClass("arrow-right");
                        }
                        if((screenHeight-offsetTop) < eleHeight && offsetTop > eleHeight){
                            panelEle.css({
                                'top': top - eleHeight - 10 + 'px',
                                'left': finalLeft + 'px'
                            });
                            panelEle.find(".xl-popper-arrow").addClass("arrow-bottom");
                        }else{
                            panelEle.css({
                                'top': offsetTop + 'px',
                                'left': finalLeft + 'px'
                            });
                            panelEle.find(".xl-popper-arrow").removeClass("arrow-bottom");
                        }
                        panelEle.show();
                        self.isShowPanel = true;
                    },
                    hidePanel: function(){
                        var self = this;
                        var panelEle = $('#'+xlDatepickerCtrl.id);
                        if(panelEle.is(":hidden")){
                            return;
                        }
                        panelEle.hide();
                        self.isShowPanel = false;
                        self.timeOpt.showPanel = false;
                        switch(self.type){
                            case 2: 
                                if(!xueUtilDate.checkTimeFormat(scope.ngVal)){
                                    scope.ngVal = "00:00:00";
                                }
                                break;
                            case 3: 
                                if(!xueUtilDate.checkTimeFormat(scope.ngVal+":00")){
                                    scope.ngVal = "00:00";
                                }
                                break;
                            default: 
                                if(xueUtilDate.checkDateFormat(scope.ngVal) || xueUtilDate.checkDateTimeFormat(scope.ngVal)){
                                    xlDatepickerCtrl.selectedDate.year = parseInt(scope.ngVal.substring(0,4), 10);
                                    xlDatepickerCtrl.selectedDate.month = parseInt(scope.ngVal.substring(5,7), 10);
                                    xlDatepickerCtrl.selectedDate.day = parseInt(scope.ngVal.substring(8,10), 10);
                                }else{
                                    scope.ngVal = "";
                                }
                                break;
                        }
                        
                        if(xueUtilLang.isFunction(scope.dateConfig.closeCallback)){
                            scope.dateConfig.closeCallback(scope.ngVal);
                        }
                    },
                    getDayCountByYearMonth: function(year,month){
                        var dayCount = 0,isLeapYear = false;
                        if(year%100 == 0){
                            if(year%400 == 0){
                                isLeapYear = true;
                            }
                        }else{
                            if(year%4 == 0){
                                isLeapYear = true;
                            }
                        }
                        switch(month){
                            case 2: if(isLeapYear){dayCount = 29;}else{dayCount = 28;} break;
                            case 1: case 3: case 5: case 7: case 8: case 10: case 12: dayCount = 31; break;
                            case 4: case 6: case 9: case 11: dayCount = 30; break;
                        }
                        return dayCount;
                    },
                    
                    // 年月选择
                    currentYear: '',
                    currentMonth: '',
                    showSelectYear: false,
                    showSelectMonth: false,
                    selectYearMonth: function($event,type){
                        var self = this;
                        self.currentYear = parseInt(self.currentYear, 10);
                        self.currentMonth = parseInt(self.currentMonth, 10);
                        if(type == 'year'){
                            self.showSelectYear = true;
                        }
                        if(type == 'month'){
                            self.showSelectMonth = true;
                        }
                        window.setTimeout(function(){
                            $($event.target).next().find('input').focus();
                            $($event.target).next().find('input').on('mousewheel',function(event){
                                if(event.originalEvent.wheelDelta && event.originalEvent.wheelDelta>0){
                                    if(type == 'year'){
                                        self.currentYear++;
                                    }
                                    if(type == 'month' && self.currentMonth<12){
                                        self.currentMonth++;
                                    }
                                }
                                if(event.originalEvent.wheelDelta && event.originalEvent.wheelDelta<0){
                                    if(type == 'year' && self.currentYear>1){
                                        self.currentYear--;
                                    }
                                    if(type == 'month' && self.currentMonth>1){
                                        self.currentMonth--;
                                    }
                                }
                            });
                        });
                    },
                    selectYearMonthBlur: function($event,type){
                        var self = this;
                        if(type == 'year'){
                            self.showSelectYear = false;
                        }
                        if(type == 'month'){
                            self.showSelectMonth = false;
                        }
                        if(!(/^[+]{0,1}(\d+)$/.test(self.currentYear)) || self.currentYear < 0){
                            self.currentYear = parseInt(new Date().getFullYear(), 10);
                        }
                        if(!(/^[+]{0,1}(\d+)$/.test(self.currentMonth)) || self.currentMonth<1 || self.currentMonth>12){
                            self.currentMonth = parseInt(new Date().getMonth(), 10)+1;
                        }
                        self.composeTable(self.currentYear,self.currentMonth);
                        $($event.target).off('mousewheel');
                    },

                    // 日期选择
                    showDate: '',
                    currentDate: {
                        year: null,
                        month: null,
                        day: null
                    },
                    selectedDate: {
                        year: null,
                        month: null,
                        day: null
                    },
                    selectDate: function(list,e){
                        // 防止冒泡，冒泡后获取的parents停止在这一层级，上升不到body
                        if (window.event) {
                            window.event.cancelBubble = true;
                        } else {
                            e.stopPropagation();
                        }
                        var self = this;
                        if(self.notInRange(list)){
                            return;
                        }
                        self.selectedDate.year = list.year;
                        self.selectedDate.month = list.month;
                        self.selectedDate.day = list.day;
                        self.showDate = self.formatDateFromObj(self.selectedDate);
                        self.changeNgVal();
                        if(list.type == -1){
                            if(parseInt(self.currentMonth, 10)<2 ){
                                self.currentYear = parseInt(self.currentYear, 10)-1;
                                self.currentMonth = 12;
                            }else{
                                self.currentMonth = parseInt(self.currentMonth, 10)-1;
                            }
                            self.composeTable(self.currentYear,self.currentMonth);
                        }
                        if(list.type == 1){
                            if(parseInt(self.currentMonth, 10)>11){
                                self.currentYear = parseInt(self.currentYear, 10)+1;
                                self.currentMonth = 1;
                            }else{
                                self.currentMonth = parseInt(self.currentMonth, 10)+1;
                            }
                            self.composeTable(self.currentYear,self.currentMonth);
                        }
                        if(self.type == 0){
                            self.hidePanel();
                        }
                    },
                    formatDateFromObj: function(obj){
                        if(obj.year && obj.month && obj.day){
                            var year = obj.year,month = '',day = '';
                            month = obj.month < 10 ? '0'+obj.month : obj.month;
                            day = obj.day < 10 ? '0'+obj.day : obj.day;
                            return year+'-'+month+'-'+day;
                        }else{
                            return xueUtilDate.getCurrentFmtDate("YYYY-MM-DD");
                        }
                        
                    },
                    notInRange: function(list){
                        var self = this;
                        var theDate = self.formatDateFromObj(list);
                        var maxDate = xueUtilDate.checkDateTimeFormat(scope.dateConfig.maxDate) ? scope.dateConfig.maxDate.split(" ")[0] :
                                xueUtilDate.checkDateFormat(scope.dateConfig.maxDate) ? scope.dateConfig.maxDate : "";
                        if(scope.dateConfig.fixedMaxDate && (xueUtilDate.checkDateTimeFormat(scope.dateConfig.fixedMaxDate) || xueUtilDate.checkDateFormat(scope.dateConfig.fixedMaxDate))){
                            var fixedMaxDate = scope.dateConfig.fixedMaxDate.split(" ")[0];
                            if(!maxDate || xueUtilDate.maxDate([fixedMaxDate, maxDate]) == maxDate){
                                maxDate = fixedMaxDate;
                            }
                        }
                        if(maxDate){
                            if(xueUtilDate.maxDate([theDate, maxDate]) == theDate){
                                return true;
                            }
                        }
                        var minDate = xueUtilDate.checkDateTimeFormat(scope.dateConfig.minDate) ? scope.dateConfig.minDate.split(" ")[0] :
                        xueUtilDate.checkDateFormat(scope.dateConfig.minDate) ? scope.dateConfig.minDate : "";
                        if(scope.dateConfig.fixedMinDate && (xueUtilDate.checkDateTimeFormat(scope.dateConfig.fixedMinDate) || xueUtilDate.checkDateFormat(scope.dateConfig.fixedMinDate))){
                            var fixedMinDate = scope.dateConfig.fixedMinDate.split(" ")[0];
                            if(!minDate || xueUtilDate.maxDate([fixedMinDate, minDate]) == fixedMinDate){
                                minDate = fixedMinDate;
                            }
                        }
                        if(minDate){
                            if(xueUtilDate.maxDate([theDate, minDate]) == minDate){
                                return true;
                            }
                        }
                        return false;
                    },

                    // 时间选择
                    showTime: "",
                    timeOpt: {
                        showPanel: false,
                        hourObj: {
                            index: 0,
                            items: []
                        },
                        minuteObj: {
                            index: 0,
                            items: []
                        },
                        secondObj: {
                            index: 0,
                            items: []
                        },
                        init: function(){
                            var self = this;
                            self.hourObj.items = self.getSeriesByNumBer(23);
                            self.minuteObj.items = self.getSeriesByNumBer(59);
                            self.secondObj.items = self.getSeriesByNumBer(59);
                            window.setTimeout(function(){
                                $('#'+xlDatepickerCtrl.id).find('.time-scrollbar ul').on('mousewheel',function(e){
                                    var id = $(e.target).parents(".time-scrollbar").find("ul").attr("id");
                                    if(xlDatepickerCtrl.type == 3 && id == "secondObj"){
                                        return;
                                    }
                                    if(e.originalEvent.wheelDelta && e.originalEvent.wheelDelta>0){
                                        if(self[id].index > 0){
                                            self[id].index--;
                                            self.indexToShowTime();
                                        }
                                    }
                                    if(e.originalEvent.wheelDelta && e.originalEvent.wheelDelta<0){
                                        var maxNumber = id == "hourObj" ? 23 : 59;
                                        if(self[id].index < maxNumber){
                                            self[id].index++;
                                            self.indexToShowTime();
                                        }
                                    }
                                });
                            },500);
                        },
                        getSeriesByNumBer: function(number){
                            var array = [];
                            for(var i = 0; i <= number; i++){
                                var temp = "";
                                if(i<10){
                                    temp = "0"+i;
                                }else{
                                    temp = ""+i;
                                }
                                array.push(temp);
                            }
                            return array;
                        },
                        dealTimeNumber: function(number){
                            return number < 10 ? "0" + number : number;
                        },
                        showTimeToIndex: function(){
                            var self = this;
                            var timeArray = xlDatepickerCtrl.showTime.split(":");
                            if(xlDatepickerCtrl.type == 1 || xlDatepickerCtrl.type == 2){
                                if(!xueUtilDate.checkTimeFormat(xlDatepickerCtrl.showTime)){
                                    xlDatepickerCtrl.showTime = "00:00:00";
                                    xlDatepickerCtrl.changeNgVal();
                                }
                                self.hourObj.index = parseInt(timeArray[0], 10);
                                self.minuteObj.index = parseInt(timeArray[1], 10);
                                self.secondObj.index = parseInt(timeArray[2], 10);
                            }
                            if(xlDatepickerCtrl.type == 3){
                                if(!xueUtilDate.checkTimeFormat(xlDatepickerCtrl.showTime+":00")){
                                    xlDatepickerCtrl.showTime = "00:00";
                                    xlDatepickerCtrl.changeNgVal();
                                }
                                self.hourObj.index = parseInt(timeArray[0], 10);
                                self.minuteObj.index = parseInt(timeArray[1], 10);
                            }
                        },
                        indexToShowTime: function(){
                            var self = this;
                            if(xlDatepickerCtrl.type == 1 || xlDatepickerCtrl.type == 2){
                                xlDatepickerCtrl.showTime = self.dealTimeNumber(self.hourObj.index) + ":" 
                                + self.dealTimeNumber(self.minuteObj.index) + ":" 
                                + self.dealTimeNumber(self.secondObj.index);
                            }
                            if(xlDatepickerCtrl.type == 3){
                                xlDatepickerCtrl.showTime = self.dealTimeNumber(self.hourObj.index) + ":" 
                                + self.dealTimeNumber(self.minuteObj.index);
                            }
                            xlDatepickerCtrl.changeNgVal();
                        },
                        optTimePanel: function(){
                            var self = this;
                            self.showPanel = !self.showPanel;
                            if(self.showPanel && !xlDatepickerCtrl.showTime){
                                xlDatepickerCtrl.showTime = xueUtilDate.getCurrentFmtDate("hh:mm:ss");
                                xlDatepickerCtrl.changeNgVal();
                                self.showTimeToIndex();
                            }
                        },
                        clickNumber: function(obj,index,type){
                            var self = this;
                            if(xlDatepickerCtrl.type ==3 && type && type == "secondObj"){
                                return;
                            }
                            obj.index = index;
                            self.indexToShowTime();
                        },
                        confirm: function(){
                            var self = this;
                            self.showPanel = false;
                        },
                        destroy: function(){
                            $('#'+xlDatepickerCtrl.id).find('.time-scrollbar ul').off('mousewheel');
                        }
                    },

                    // 日期表格渲染
                    currentTable: [],
                    composeTable: function(year,month){
                        year = parseInt(year, 10);
                        month = parseInt(month, 10);
                        var self = this;
                        self.currentTable = [];
                        var tableArr = [];
                        var firstWeek = new Date(year+'/'+month+'/1').getDay();
                        var dayCount = self.getDayCountByYearMonth(year,month);
                        var finalWeek = new Date(year+'/'+month+'/'+dayCount).getDay();
                        var lastDayCount = self.getDayCountByYearMonth(month>1?year:year-1,month>1?month-1:12);
                        for(var a=1; a<=firstWeek; a++){
                            tableArr.push({
                                type: -1,
                                year: month>1?year:year-1,
                                month: month>1?month-1:12,
                                day: lastDayCount-(firstWeek-a)
                            });
                        }
                        for(var b=1; b<=dayCount; b++){
                            tableArr.push({
                                type: 0,
                                year: year,
                                month: month,
                                day: b
                            });
                        }
                        for(var c=finalWeek+1,j=1; c<=6; c++,j++){
                            tableArr.push({
                                type: 1,
                                year: month<12?year:year+1,
                                month: month<12?month+1:1,
                                day: j
                            });
                        }
                        for(var d= 0; d<tableArr.length; d+=7){
                            self.currentTable.push(tableArr.slice(d,d+7));
                        }
                    },
                    changeYearMonth: function(plusYear,plusMonth){
                        var self = this;
                        self.currentYear = parseInt(self.currentYear, 10);
                        self.currentMonth = parseInt(self.currentMonth, 10);
                        self.currentYear = self.currentYear+plusYear;
                        if(self.currentMonth+plusMonth>12){
                            self.currentMonth = 1;
                            self.currentYear++;
                        }else if(self.currentMonth+plusMonth<1){
                            self.currentMonth = 12;
                            self.currentYear--;
                        }else{
                            self.currentMonth += plusMonth;
                        }
                        self.composeTable(self.currentYear,self.currentMonth);
                    },

                    // 操作
                    changeNgVal: function(){
                        var self = this;
                        if(self.showDate && xueUtilDate.checkDateFormat(self.showDate)){
                            if(!self.judgeInRange(self.showDate)){
                                return;
                            }
                        }else{
                            self.showDate = self.formatDateFromObj(self.selectedDate);
                        }
                        if(self.type == 3){
                            if(self.showTime && !xueUtilDate.checkTimeFormat(self.showTime+":00")){
                                self.showTime = "00:00";
                            }
                        }else{
                            if(self.showTime && !xueUtilDate.checkTimeFormat(self.showTime)){
                                self.showTime = "00:00:00";
                            }
                        }
                        if(self.type == 0){
                            scope.ngVal = self.showDate;
                        }
                        if(self.type == 1){
                            if(!self.showTime){
                                self.showTime = "00:00:00";
                                self.timeOpt.showTimeToIndex();
                            }
                            scope.ngVal = self.showDate + " " + self.showTime;
                        }
                        if(self.type == 2 || self.type == 3){
                            scope.ngVal = self.showTime;
                        }
                    },
                    judgeInRange: function(date){
                        var self = this;
                        if(xueUtilDate.checkDateFormat(date) || xueUtilDate.checkDateTimeFormat(date)){
                            var list = {
                                year: date.substring(0,4),
                                month: date.substring(5,7),
                                day: date.substring(8,10)
                            };
                            if(self.notInRange(list)){
                                /* modalExt.modalTip({
                                    type: "warning",
                                    content: "不在可选日期范围内！",
                                    height: 150
                                }); */
                                return false;
                            }else{
                                return true;
                            }
                        }
                    },
                    ngValBlur: function(){
                        var self = this;
                        if(self.type == 0 && !xueUtilDate.checkDateFormat(scope.ngVal)){
                            scope.ngVal = self.showDate;
                        }
                        if(self.type == 1 && !xueUtilDate.checkDateTimeFormat(scope.ngVal)){
                            scope.ngVal = self.showDate + " "+ self.showTime;
                            if(!xueUtilDate.checkDateTimeFormat(scope.ngVal)){
                                scope.ngVal = "";
                            }
                        }
                        if(self.type == 2 && !xueUtilDate.checkTimeFormat(scope.ngVal)){
                            scope.ngVal = "00:00:00";
                            self.showTime = "00:00:00";
                            self.timeOpt.showTimeToIndex();
                        }
                        if(self.type == 3 && !xueUtilDate.checkTimeFormat(scope.ngVal+":00")){
                            scope.ngVal = "00:00";
                            self.showTime = "00:00:00";
                            self.timeOpt.showTimeToIndex();
                        }
                    },
                    getNow: function(){
                        var self = this;
                        var today = xueUtilDate.getCurrentFmtDate("YYYY-MM-DD");
                        if(!self.judgeInRange(today)){
                            return;
                        }
                        if(self.type == 0){
                            var date = today;
                            scope.ngVal = date;
                        }
                        if(self.type == 1){
                            var dateTime = xueUtilDate.getCurrentFmtDate("YYYY-MM-DD");
                            scope.ngVal = dateTime;
                        }
                        self.hidePanel();
                        if(xueUtilLang.isFunction(scope.dateConfig.nowCallback)){
                            scope.dateConfig.nowCallback(scope.ngVal);
                        }
                    },
                    confirm: function(){
                        var self = this;
                        self.hidePanel();
                        if(xueUtilLang.isFunction(scope.dateConfig.confirmCallback)){
                            scope.dateConfig.confirmCallback(scope.ngVal);
                        }
                    },
                    clear: function(){
                        if(self.type == 2){
                            scope.ngVal = "00:00:00";
                        }else{
                            scope.ngVal = "";
                            xlDatepickerCtrl.selectedDate = {
                                year: null,
                                month: null,
                                day: null
                            };
                        }
                        if(xueUtilLang.isFunction(scope.dateConfig.clearCallback)){
                            scope.dateConfig.clearCallback();
                        }
                    },
                    
                    //监听
                    watch: {
                        ngValWatcher: null,
                        minDateWatcher: null,
                        maxDateWatcher: null,
                        init: function(){
                            var self = this;
                            $("body")[0].addEventListener("click",self.clickOtherArea);
                            self.watchNgVal();
                            self.watchMinDate();
                            self.watchMaxDate();
                        },
                        watchNgVal: function(){
                            var self = this, parent = xlDatepickerCtrl;
                            self.ngValWatcher = scope.$watch("ngVal",function(newVal){
                                if(parent.type == 0){
                                    if(!newVal){
                                        parent.showDate = newVal;
                                        parent.composeTable(parent.currentYear,parent.currentMonth);
                                    }
                                    if(xueUtilDate.checkDateFormat(newVal)){
                                        if(!parent.judgeInRange(newVal)){
                                            scope.ngVal = parent.showDate;
                                            return;
                                        }
                                        parent.showDate = newVal;
                                        parent.selectedDate.year = parent.currentYear = parseInt(newVal.substring(0,4), 10);
                                        parent.selectedDate.month = parent.currentMonth = parseInt(newVal.substring(5,7), 10);
                                        parent.selectedDate.day = parseInt(newVal.substring(8,10), 10);
                                        parent.composeTable(parent.currentYear,parent.currentMonth);
                                    }
                                }
                                if(parent.type == 1){
                                    if(!newVal){
                                        parent.showDate = "";
                                        parent.showTime = "";
                                        parent.timeOpt.showPanel = false;
                                        parent.composeTable(parent.currentYear,parent.currentMonth);
                                    }
                                    if(xueUtilDate.checkDateTimeFormat(newVal)){
                                        if(!parent.judgeInRange(newVal.split(" ")[0])){
                                            scope.ngVal = parent.showDate + " " +parent.showTime;
                                            return;
                                        }
                                        parent.showDate = newVal.split(" ")[0];
                                        parent.showTime = newVal.split(" ")[1];
                                        parent.timeOpt.showTimeToIndex();
                                        parent.selectedDate.year = parent.currentYear = parseInt(newVal.substring(0,4), 10);
                                        parent.selectedDate.month = parent.currentMonth = parseInt(newVal.substring(5,7), 10);
                                        parent.selectedDate.day = parseInt(newVal.substring(8,10), 10);
                                        parent.composeTable(parent.currentYear,xlDatepickerCtrl.currentMonth);
                                    }
                                }
                                if(parent.type == 2){
                                    if(!newVal){
                                        parent.showTime = "";
                                        parent.timeOpt.showTimeToIndex();
                                    }
                                    if(xueUtilDate.checkTimeFormat(newVal)){
                                        parent.showTime = newVal;
                                        parent.timeOpt.showTimeToIndex();
                                    }
                                }
                                if(parent.type == 3){
                                    if(!newVal){
                                        parent.showTime = "";
                                        parent.timeOpt.showTimeToIndex();
                                    }
                                    if(xueUtilDate.checkTimeFormat(newVal+":00")){
                                        parent.showTime = newVal;
                                        parent.timeOpt.showTimeToIndex();
                                    }
                                }
                            });
                        },
                        watchMinDate: function(){
                            var self = this;
                            if(typeof(scope.minDate) != "undefined"){
                                self.minDateWatcher = scope.$watch("minDate",function(newVal){
                                    if(newVal){
                                        if(xlDatepickerCtrl.type == 0 && xueUtilDate.checkDateFormat(newVal)){
                                            scope.dateConfig.minDate = newVal;
                                        }
                                        if(xlDatepickerCtrl.type == 1 && xueUtilDate.checkDateTimeFormat(newVal)){
                                            scope.dateConfig.minDate = newVal.split(" ")[0];
                                        }
                                    }else{
                                        scope.dateConfig.minDate = "";
                                    }
                                });
                            }
                        },
                        watchMaxDate: function(){
                            var self = this;
                            if(typeof(scope.maxDate) != "undefined"){
                                self.maxDateWatcher = scope.$watch("maxDate",function(newVal){
                                    if(newVal){
                                        if(xlDatepickerCtrl.type == 0 && xueUtilDate.checkDateFormat(newVal)){
                                            scope.dateConfig.maxDate = newVal;
                                        }
                                        if(xlDatepickerCtrl.type == 1 && xueUtilDate.checkDateTimeFormat(newVal)){
                                            scope.dateConfig.maxDate = newVal.split(" ")[0];
                                        }
                                    }else{
                                        scope.dateConfig.maxDate = "";
                                    }
                                });
                            }
                        },
                        clickOtherArea: function(e){
                            if($(e.target).attr("class") != "xui-datepicker-wrap" && $(e.target).parents(".xui-datepicker-wrap").length == 0 && 
                                $(e.target).attr("id") != xlDatepickerCtrl.id && $(e.target).parents("#"+xlDatepickerCtrl.id).length == 0 ){
                                xlDatepickerCtrl.hidePanel();
                            }
                        },
                        destroy: function(){
                            var self = this;
                            $("body")[0].removeEventListener("click",self.clickOtherArea);
                            self.ngValWatcher();
                            if(self.minDateWatcher){
                                self.minDateWatcher();
                            }
                            if(self.maxDateWatcher){
                                self.maxDateWatcher();
                            }
                        }
                    },

                    init: function(){
                        var self = this;

                        scope.dateConfig = angular.extend(self.defaultConfig,scope.dateConfig||{});

                        scope.dateConfig.id = new Date().getTime();

                        self.currentYear = parseInt(new Date().getFullYear(), 10);
                        self.currentMonth = parseInt(new Date().getMonth(), 10)+1;

                        self.currentDate.year = self.currentYear;
                        self.currentDate.month = self.currentMonth;
                        self.currentDate.day = parseInt(new Date().getDate(), 10);

                        switch(scope.dateConfig.format){
                            case "YYYY-MM-DD hh:mm:ss" : 
                                self.type = 1; 
                                self.timeOpt.init();
                                self.id = "xlDatePicker_" + scope.dateConfig.id;
                                break;
                            case "hh:mm:ss" : 
                                self.type = 2;
                                self.timeOpt.init();
                                self.id = "xlTimePicker_" + scope.dateConfig.id;
                                break;
                            case "hh:mm":
                                self.timeOpt.init();
                                self.id = "xlTimePicker_" + scope.dateConfig.id;
                                self.type = 3;
                                break;
                            default: self.type = 0; 
                                self.id = "xlDatePicker_" + scope.dateConfig.id;
                                break;
                        }

                        self.watch.init();
                    }
                }
                
                xlDatepickerCtrl.init();

                scope.$on('$destroy',function(){
                    $('#'+xlDatepickerCtrl.id).remove();
                    xlDatepickerCtrl.watch.destroy();
                    xlDatepickerCtrl.timeOpt.destroy();
                });
                
            }
        }
    }])

angular.module('xue.menu', ['xue.util.lang'])
    .directive('xueMenu',['xueUtilLang', function (xueUtilLang){
        return {
            restrict : "E",
            replace : true,
            scope : {
                menuConfig : '='
            },
            templateUrl: function (element, attrs) {
                return attrs.templateUrl || 'xue/template/menu/menu.html'
            },
            link:function(scope,ele,attrs){
                var defaultConfig = {
                    search: false,//是否支持搜索
                    autoShrink: true,//是否自动收缩
                    setFirst: true,//是否选中第一个

                    data: [],//源数据,一维数组或二维数组
                    showOneDimenIcon: true,//是否展示一级菜单图标
                    oneDimenName: '',//一级菜单标题字段名
                    oneDimenIcon: '',//一级菜单图标字段名
                    
                    childrenName: '',//二维数组对象名
                    twoDimenName: '',//二级菜单标题字段名
                    twoDimenIcon: '',//二级菜单图标字段名

                    clickRouter: function(){},//导航菜单点击回调
                    routerId: 'id',//导航菜单ID字段名
                    selectId: null,//选中导航菜单ID
                    imagePrefix: 'imagestore/', //图片前缀
                    imageSuffix: '.jpg' //图片后缀
                };
                scope.menuConfig = angular.extend(defaultConfig,scope.menuConfig || {});

                //支持搜索菜单
                if(scope.menuConfig.search){
                    scope.vm = {
                        searchValue: '',
                        menuList: [],
                        //当前鼠标是否在搜索列表上
                        onSearchListDiv: false,
                        select: function(item){
                            this.searchValue = '';
                            scope.clickRouter(item);
                        },
                        formatData: function(data){
                            var list = [];
                            for(var i=0; i<data.length;i++){
                                list.push(data[i]);
                                if(data[i][scope.menuConfig.childrenName]){
                                    var childrenData = data[i][scope.menuConfig.childrenName];
                                    for(var j=0;j<childrenData.length;j++){
                                        list.push(childrenData[j]);
                                    }
                                }
                            }
                            this.menuList = list;
                        },
                        /**
                         * 隐藏搜索框
                         */
                        hideSearchBox: function () {
                            //当鼠标的焦点不在搜索框里面时，失去焦点才去隐藏
                            if (!this.onSearchListDiv) {
                                this.searchValue = '';
                            }
                        }
                    };
                    
                }

                //导航菜单点击回调
                scope.clickRouter = function(item){
                    if(!item[scope.menuConfig.childrenName]){
                        scope.menuConfig.selectId = item[scope.menuConfig.routerId];
                        if(xueUtilLang.isFunction(scope.menuConfig.clickRouter)){
                            scope.menuConfig.clickRouter(item);
                        }
                    }else{
                        var open = item.open;
                        if(scope.menuConfig.autoShrink){
                            angular.forEach(scope.menuConfig.data,function(obj,i){
                                obj.open = false;
                            });
                        }
                        if(open){
                            item.open = false;
                        }else{
                            item.open = true;
                        }
                    }
                }

                //设置数据
                var dataWatch = scope.$watch("menuConfig.data",function(newVal,oldVal){
                    if(newVal){
                        if(scope.menuConfig.setFirst && scope.menuConfig.data.length){
                            var item = scope.menuConfig.data[0];
                            scope.clickRouter(item);
                            if(item[scope.menuConfig.childrenName] && item[scope.menuConfig.childrenName].length){
                                scope.menuConfig.clickRouter(item[scope.menuConfig.childrenName][0]);
                                scope.menuConfig.selectId = item[scope.menuConfig.childrenName][0][scope.menuConfig.routerId];
                                item.open = true;
                            }
                        }
                        if(scope.menuConfig.search){
                            scope.vm.formatData(newVal);
                        }
                    }
                })

                //设置选中id
                var idWatch = scope.$watch('menuConfig.selectId',function(newVal,oldVal){
                    var data = scope.menuConfig.data;
                    if(newVal && data){
                        for(var i=0; i<data.length; i++){
                            if(newVal == data[i][scope.menuConfig.routerId]){
                                break;
                            }
                            if(data[i][scope.menuConfig.childrenName]){
                                var childrenData = data[i][scope.menuConfig.childrenName];
                                for(var j=0; j<childrenData.length; j++){
                                    if(childrenData[j][scope.menuConfig.routerId] == newVal){
                                        if(scope.menuConfig.autoShrink){
                                            angular.forEach(data,function(obj){
                                                obj.open = false;
                                            });
                                        }
                                        data[i].open = true;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                })
                
                scope.$on("$destroy",function(){
                    dataWatch();
                    idWatch();
                })

            }
        }
    }])
angular.module('xue.notice', [])
.directive('xueNotice',["xueUtilLang","$timeout",function(xueUtilLang,$timeout){
    return {
        restrict: "E",
        replace: true,
        scope: {
            noticeConfig : '='
        },
        templateUrl: function (element, attrs) {
            return attrs.templateUrl || "xue/template/notice/notice.html";
        },
        link: function(scope,ele,attrs){

            var gxNoticeCtrl = scope.gxNoticeCtrl = {
                defaultConfig: {
                    modalId: null,
                    title: '', // 滑过显示标题
                    // iconUrl: 'common/directives/images/gx_notice/warn.png', // 图标
                    width: '366px', // 提示容器宽
                    height: '266px', // 提示容器高
                    count: 0, // 总提示记录数，为0时不显示
                    selectTabId: 0,
                    tabItem: [{
                        id: 0,
                        name: '消息提醒',
                        count: 2
                    },{
                        id: 1,
                        name: '系统通知',
                        count: 3
                    }],
                    tabMark: 'number', //number 数字 circle 圆点
                    showNotice: true, // 显示提示内容
                    formatField: { // 字段名格式化
                        contentTitle: '',
                        content: 'content',
                        time: 'time',
                        completeContent: '',
                        contentType: 'contentType',
                        count: 'count'
                    },
                    listMaxLen: 10, // 消息列表最多显示数
                    noticeList: [], // 提示内容列表，对象：{content: '提示内容',time: '2019-08-20 17:13:55'}
                    showNoticeType: false, // 显示提示分类（与提示内容应互斥）
                    noticeTypeList: [], // 提示分类列表，对象：{contentType: '提示分类内容', count: 0}
                    emptyNoticeTip: '暂没有新消息', // 无消息提示语
                    showFooter: true, // 是否显示提示尾部操作
                    footerContent: [{ // 消息提醒尾部操作
                        name: '当前标记已读',
                        click:  function(){}
                    },{
                        name: '查看全部',
                        click: function(){}
                    }],
                    tabItemClick: function(){},
                    itemClick: function(){}, //列表项点击回调
                    loadNextPage: function(){}, //列表滚动到底部加载下一页回调函数
                    listHide: function(){}, //列表消失回调函数
                    listShow: function(){} //列表显示回调函数
                },
                tabItemClick: function(item){
                    $('#'+scope.noticeConfig.modalId+' .notice-content').scrollTop(0);
                    scope.noticeConfig.selectTabId = item.id;
                    if(xueUtilLang.isFunction(scope.noticeConfig.tabItemClick)){
                        scope.noticeConfig.tabItemClick(item);
                    }
                },
                showPanel: false,
                mouseenter: function(){
                    gxNoticeCtrl.showPanel = true;
                    var $target = $('#'+scope.noticeConfig.modalId);
                    var top = $(ele).offset().top,
                        left = $(ele).offset().left,
                        width = $(ele).width(),
                        height = $(ele).height(),
                        targetWidth = $target.outerWidth();
                    $target.css({
                        'top': top + height + 15 + 'px',
                        'left': left + width/2 - targetWidth/2 + 'px'
                    });
                    $('body').append($target);
                    if($target.is(':hidden')){
                        $target.fadeIn();
                        scope.noticeConfig.listShow();
                    }
                },
                mouseleave: function(){
                    gxNoticeCtrl.showPanel = false;
                    var $target = $('#'+scope.noticeConfig.modalId);
                    $timeout(function(){
                        if(!$target.is(':hidden') && !gxNoticeCtrl.showPanel){
                            $target.fadeOut();
                            scope.noticeConfig.listHide();
                        }
                    },500);
                },
                init: function(){
                    var self = this;
                    scope.noticeConfig = angular.extend(self.defaultConfig,scope.noticeConfig);
                    scope.noticeConfig.modalId = 'gxNotice_'+new Date().getTime();
                    self.destroy();
                },
                destroy: function(){
                    scope.$on('$destroy',function(){
                        $("#"+scope.noticeConfig.modalId).remove();
                    });
                }
            }

            gxNoticeCtrl.init();
        }
    }
}])
angular.module('xue.pagination', [])

  .controller('xuePaginationController', ['$scope', '$attrs', '$parse', function ($scope, $attrs, $parse) {
    var self = this,
      ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl
      setNumPages = $attrs.numPages ? $parse($attrs.numPages).assign : angular.noop;

    this.init = function (ngModelCtrl_, config) {
      ngModelCtrl = ngModelCtrl_;
      this.config = config;

      ngModelCtrl.$render = function () {
        self.render();
      };

      if ($attrs.itemsPerPage) {
        $scope.$parent.$watch($parse($attrs.itemsPerPage), function (value) {
          self.itemsPerPage = parseInt(value, 10);
          $scope.totalPages = self.calculateTotalPages();
        });
      } else {
        this.itemsPerPage = config.itemsPerPage;
      }
    };

    this.calculateTotalPages = function () {
      var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil($scope.totalItems / this.itemsPerPage);
      return Math.max(totalPages || 0, 1);
    };

    this.render = function () {
      $scope.page = parseInt(ngModelCtrl.$viewValue, 10) || 1;
    };

    $scope.selectPage = function (page) {
      if ($scope.page !== page && page > 0 && page <= $scope.totalPages) {
        ngModelCtrl.$setViewValue(page);
        ngModelCtrl.$render();
      }
    };

    $scope.getText = function (key) {
      return $scope[key + 'Text'] || self.config[key + 'Text'];
    };
    $scope.noPrevious = function () {
      return $scope.page === 1;
    };
    $scope.noNext = function () {
      return $scope.page === $scope.totalPages;
    };

    $scope.$watch('totalItems', function () {
      $scope.totalPages = self.calculateTotalPages();
    });

    $scope.$watch('totalPages', function (value) {
      setNumPages($scope.$parent, value); // Readonly variable

      if ($scope.page > value) {
        $scope.selectPage(value);
      } else {
        ngModelCtrl.$render();
      }
    });
  }])

  .constant('xuePaginationConfig', {
    itemsPerPage: 10,
    boundaryLinks: false,
    directionLinks: true,
    firstText: '首页',
    previousText: '上页',
    nextText: '下页',
    lastText: '尾页',
    rotate: true
  })

  .directive('xuePagination', ['$parse', 'xuePaginationConfig', function ($parse, paginationConfig) {
    return {
      restrict: 'EA',
      scope: {
        totalItems: '=',
        firstText: '@',
        previousText: '@',
        nextText: '@',
        lastText: '@'
      },
      require: ['xuePagination', '?ngModel'],
      controller: 'xuePaginationController',
      templateUrl: function (element, attrs) {
        return attrs.templateUrl || 'xue/template/pagination/pagination.html';
      },
      replace: true,
      link: function (scope, element, attrs, ctrls) {
        var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];

        if (!ngModelCtrl) {
          return; // do nothing if no ng-model
        }

        // Setup configuration parameters
        var maxSize = angular.isDefined(attrs.maxSize) ? scope.$parent.$eval(attrs.maxSize) : paginationConfig.maxSize,
          rotate = angular.isDefined(attrs.rotate) ? scope.$parent.$eval(attrs.rotate) : paginationConfig.rotate;
        scope.boundaryLinks = angular.isDefined(attrs.boundaryLinks) ? scope.$parent.$eval(attrs.boundaryLinks) : paginationConfig.boundaryLinks;
        scope.directionLinks = angular.isDefined(attrs.directionLinks) ? scope.$parent.$eval(attrs.directionLinks) : paginationConfig.directionLinks;

        paginationCtrl.init(ngModelCtrl, paginationConfig);

        if (attrs.maxSize) {
          scope.$parent.$watch($parse(attrs.maxSize), function (value) {
            maxSize = parseInt(value, 10);
            paginationCtrl.render();
          });
        }

        // Create page object used in template
        function makePage(number, text, isActive) {
          return {
            number: number,
            text: text,
            active: isActive
          };
        }

        function getPages(currentPage, totalPages) {
          var pages = [];

          // Default page limits
          var startPage = 1, endPage = totalPages;
          var isMaxSized = (angular.isDefined(maxSize) && maxSize < totalPages);

          // recompute if maxSize
          if (isMaxSized) {
            if (rotate) {
              // Current page is displayed in the middle of the visible ones
              startPage = Math.max(currentPage - Math.floor(maxSize / 2), 1);
              endPage = startPage + maxSize - 1;

              // Adjust if limit is exceeded
              if (endPage > totalPages) {
                endPage = totalPages;
                startPage = endPage - maxSize + 1;
              }
            } else {
              // Visible pages are paginated with maxSize
              startPage = ((Math.ceil(currentPage / maxSize) - 1) * maxSize) + 1;

              // Adjust last page if limit is exceeded
              endPage = Math.min(startPage + maxSize - 1, totalPages);
            }
          }

          // Add page number links
          for (var number = startPage; number <= endPage; number++) {
            var page = makePage(number, number, number === currentPage);
            pages.push(page);
          }

          // Add links to move between page sets
          if (isMaxSized && !rotate) {
            if (startPage > 1) {
              var previousPageSet = makePage(startPage - 1, '...', false);
              pages.unshift(previousPageSet);
            }

            if (endPage < totalPages) {
              var nextPageSet = makePage(endPage + 1, '...', false);
              pages.push(nextPageSet);
            }
          }

          return pages;
        }

        var originalRender = paginationCtrl.render;
        paginationCtrl.render = function () {
          originalRender();
          if (scope.page > 0 && scope.page <= scope.totalPages) {
            scope.pages = getPages(scope.page, scope.totalPages);
          }
        };
      }
    };
  }])

  .constant('xuePagerConfig', {
    itemsPerPage: 10,
    previousText: '« 上页',
    nextText: '下页 »',
    align: true
  })

  .directive('xuePager', ['xuePagerConfig', function (pagerConfig) {
    return {
      restrict: 'EA',
      scope: {
        totalItems: '=',
        previousText: '@',
        nextText: '@'
      },
      require: ['xuePager', '?ngModel'],
      controller: 'xuePaginationController',
      templateUrl: function (element, attrs) {
        return attrs.templateUrl || 'xue/template/pagination/pager.html';
      },
      replace: true,
      link: function (scope, element, attrs, ctrls) {
        var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];

        if (!ngModelCtrl) {
          return; // do nothing if no ng-model
        }

        scope.align = angular.isDefined(attrs.align) ? scope.$parent.$eval(attrs.align) : pagerConfig.align;
        paginationCtrl.init(ngModelCtrl, pagerConfig);
      }
    };
  }]);
angular.module('xue.select', [])
    .directive('xueCheckbox', function () {
        return {
            restrict: "E",
            replace: true,
            scope: {
                ngChecked: "="
            },
            template: '<div class="xue-checkbox-wrap" ng-class="{true:\'gx-checked\'}[!!ngChecked]"><i class="xui-icon xui-icon-md-checkmark"></i></div>'
        }
    })
    .directive('xueSelect', ['xueUtilArray', 'xueUtilLang', function (xueUtilArray, xueUtilLang) {
        return {
            restrict: "E",
            replace: true,
            scope: {
                selectConfig: '=',
                setVal: '=',
                getVal: '=',
                ngDisabled: '=',
                ngItem: '='
            },
            templateUrl: function (element, attrs) {
                return attrs.templateUrl || "xue/template/select/select.html";
            },
            link:function(scope,ele,attrs){
                var assistVar = {
                   unbindWatch1:null,
                   unbindWatch2:null,
                   unbindWatch3:null,
                   unbindWatch4:null
               }
               //common select config
               var selectConfig = {
                   filter : true,//过滤器开关 为false时与select标签功能一致
                   enableEmpty: true, //是否可以置空
                   separate : true,//输入与过滤分离 为false时输入与过滤合并为一体
                   checkbox : false,//多选开关
                   position : 'down',//面板显示位置,默认在下
                   data : [],//select数据源（数组）
                   valueField : 'value',//对应选项value值
                   textField : 'label',//显示在输入框中的字段名
                   textFieldFormat: function(){},//自定义显示在输入框中的内容
                   height : '28px',//输入框高度
                   panelHeight : '250px',//面板高度
                   panelWidth : '180px',//面板以及输入框宽度
                   showLimit : 50,//匹配前n条记录
                   inputLabel : "",//输入框内容
                   myLabel : "",
                   setValue : '',//设置值
                   value : '',//值
                   label : '',//输入框的值
                   checkRows : [],//选中数组Row
                   checkLimit : null,//最多选n条记录
                   checkRowsMap : {},//选中记录map
                   onBeforeSelect: function(){}, // 选择前回调
                   onSelect : function(){},//选择回调
                   assign:function(){},//赋值回调
                   clearAll : function(){},//清空回调
                   disabled : false,//disabled开关
                   cancelWatch : function(){//取消监听（取消后重新设置data和setValue都不会监听到，慎用）
                       assistVar.unbindWatch2();
                   },
                   reset:function(){//重置
                       scope.selectConfig.value = '';
                       if(typeof(attrs.getVal) != 'undefined'){
                           scope.getVal = '';
                       }
                       scope.selectConfig.label = '';
                       scope.selectConfig.checkRows = [];
                       scope.selectConfig.setValue = '';
                       ele.find(".select-show").val('');
                       ele.find(".select-show").attr('title','');
                       scope.selectConfig.checkRowsMap = {};
                   }
               };
               
               //extend
               scope.selectConfig = angular.extend(selectConfig,scope.selectConfig);
               if(scope.ngDisabled){
                   scope.selectConfig.disabled = true;
               }
               
               //textFieldFormat
               scope.textFieldFormat = function(item){
                   if(xueUtilLang.isFunction(scope.selectConfig.textFieldFormat)){
                       item[scope.selectConfig.textField] = scope.selectConfig.textFieldFormat(item) || item[scope.selectConfig.textField] || "";
                   }
               }

               //element
                ele = $(attrs.$$element);

               //get label and value from checkRows
               scope.getData = function(){
                   var label = "", value = "";
                   if(scope.selectConfig.checkRows.length != 0){
                       scope.selectConfig.checkRowsMap = {};
                       $.each(scope.selectConfig.checkRows,function(i,item){
                           scope.textFieldFormat(item);
                           label += item[scope.selectConfig.textField]+",";
                           value += item[scope.selectConfig.valueField]+",";
                           scope.selectConfig.checkRowsMap[item[scope.selectConfig.valueField]] = true;
                       });
                       if(label){
                           label = label.substring(0,label.length - 1);
                           value = value.substring(0,value.length - 1);
                       }
                   }
                   scope.selectConfig.label = label;
                   scope.selectConfig.value = value;
                   if(typeof(attrs.getVal) != 'undefined'){
                       scope.getVal = value;
                   }
                   ele.find(".select-show").val(label);
                   ele.find(".select-show").attr("title",label);
                   scope.selectConfig.inputLabel = label;
               }

               //assign
               assistVar.unbindWatch1 = scope.$watch("setVal",function(newValue,oldValue){
                   if(typeof(newValue) != 'undefined'){
                       scope.selectConfig.setValue = newValue;
                   }
               });
               
               assistVar.unbindWatch2 = scope.$watch("selectConfig.data + selectConfig.setValue",function(newValue,oldValue){
                   if(scope.selectConfig && typeof(scope.selectConfig.setValue) != 'undefined'){
                       if(scope.selectConfig.checkbox){//多选
                           var valueArr = scope.selectConfig.setValue.split(",");
                           var rows = xueUtilArray.findInArrByKeys(scope.selectConfig.data,scope.selectConfig.valueField,valueArr) || [];
                           scope.selectConfig.checkRows = rows;
                           scope.getData();
                       }else{//单选
                           var index = xueUtilArray.findObjIndex(scope.selectConfig.data,scope.selectConfig.valueField,scope.selectConfig.setValue);
                           if(index != -1){
                               scope.selectConfig.checkRows = [];
                               scope.selectConfig.checkRows.push(scope.selectConfig.data[index]);
                               scope.getData();
                           }
                       }
                   }
               },true);

               //assign
               assistVar.unbindWatch3 = scope.$watch("selectConfig.value",function(newValue,oldValue){
                   if(scope.selectConfig && xueUtilLang.isFunction(scope.selectConfig.assign) && scope.selectConfig.checkRows.length){
                       scope.selectConfig.assign(scope.selectConfig.checkRows);
                   }
               })

               //layout
              scope.selectClass = attrs.selectClass;
               scope.contentStyle = {
                   width:scope.selectConfig.panelWidth,
                   height:scope.selectConfig.panelHeight,
                   top:scope.selectConfig.height
               }
               scope.showStyle = {
                   width:scope.selectConfig.panelWidth,
                   height:scope.selectConfig.height
               }
               
               //listener
               assistVar.unbindWatch4 = scope.$watch("ngDisabled",function(newValue,oldValue){
                   if(newValue){
                       scope.selectConfig.disabled = true;
                   }else if(typeof(newValue) != 'undefined'){
                       scope.selectConfig.disabled = false;
                   }
               });
               
               scope.focus = function(){
                   $(".select-content").hide();
                   if(ele.find(".select-content").is(":hidden")){
                       ele.find(".select-content").show();
                       //单选可过滤且分离
                       if((!scope.selectConfig.checkbox && scope.selectConfig.filter && scope.selectConfig.separate) || scope.selectConfig.checkbox){
                           ele.find(".select-content>input[type='text']").focus();
                       }
                   }else{
                       //ele.find(".select-content").hide();
                   }
               }
               
               scope.clear = function(){
                   scope.selectConfig.value = '';
                   if(typeof(attrs.getVal) != 'undefined'){
                       scope.getVal = '';
                   }
                   scope.selectConfig.label = '';
                   scope.selectConfig.checkRows = [];
                   ele.find(".select-show").val('');
                   ele.find(".select-show").attr('title','');
                   scope.selectConfig.setValue = '';
                   scope.selectConfig.clearAll();
                   scope.selectConfig.checkRowsMap = {};
               }

               $(document).off("click");
               $(document).on("click",function(e){
                   if((typeof e.target.className) == 'string' && e.target.className.indexOf("select-content") == -1
                   && e.target.className.indexOf("select-show") == -1 
                      && $(e.target).parents(".xui-select-warp").length == 0
                   ){
                       $(".select-content").hide();
                   }
               });

               scope.changeIpt = function(){
                   if(scope.selectConfig.inputLabel == ""){
                       if(xueUtilLang.isFunction(scope.selectConfig.clearAll)){
                           scope.selectConfig.value = '';
                           if(typeof(attrs.getVal) != 'undefined'){
                               scope.getVal = '';
                           }
                           scope.selectConfig.label = '';
                           scope.selectConfig.checkRows = [];
                           scope.selectConfig.clearAll();
                       }
                   }
               } 

               //单选
               scope.selectSingle = function(row){
                   if(!scope.selectConfig.checkRowsMap[row[scope.selectConfig.valueField]]){
                       scope.checkOne(row);
                   }else{
                       scope.disCheck(row);
                   }
               }
               scope.disCheck = function(row){
                   var lastData = [];
                   var lastMapData = {};
                   angular.forEach(scope.selectConfig.checkRows,function(item,index) {
                       if(item[scope.selectConfig.valueField]===row[scope.selectConfig.valueField]){
                           //scope.selectConfig.checkRows.splice(index,1);
                       }else{
                           lastData.push(item);
                           lastMapData[item[scope.selectConfig.valueField]] = false;
                       }
                   });
                   scope.selectConfig.checkRows = lastData;
                   scope.selectConfig.checkRowsMap=lastMapData;
                   
               }
               scope.checkOne = function(row){
                   if(!scope.selectConfig.checkRowsMap[row[scope.selectConfig.valueField]]){
                       scope.selectConfig.checkRows.push(row);
                       scope.selectConfig.checkRowsMap[row[scope.selectConfig.valueField]] = true;
                   }
               }
            //    scope.test = false;
               scope.onBeforeSelect = function(item,event){
                   var stopSelect = scope.selectConfig.onBeforeSelect(item,scope.ngItem);
                   if (!stopSelect && typeof(stopSelect) != 'undefined') {
                       ele.find(".select-content").hide();
                       return;
                   }
                   scope.onSelect(item,event);
               }
               //onSelect
               scope.onSelect = function(item,event){
                   if(scope.selectConfig.checkbox){
                       if(!item[scope.selectConfig.valueField]){
                           if(scope.selectConfig.checkLimit){
                               if(scope.selectConfig.checkLimit == scope.selectConfig.checkRows.length){
                                //    modalExt.modalTip({content:"最多只能选"+scope.selectConfig.checkLimit+"个选项！",type:"warning"});
                                   return;
                               }
                           }
                       }
                       scope.selectSingle(item);
                   }else{
                       ele.find(".select-content").hide();
                       scope.selectConfig.checkRows = [];
                       scope.selectConfig.checkRows.push(item);
                   }
                   scope.getData();
                   if(xueUtilLang.isFunction(scope.selectConfig.onSelect)){
                       scope.selectConfig.onSelect(item,scope.ngItem);
                   }
               }
               //selectLi
               scope.selectLi = function(item,event){
                   if($(event.target)[0].nodeName == "INPUT"){
                       return;
                   }
                   scope.onBeforeSelect(item,event);
               }

               //销毁
               scope.$on("$destroy", function() {
                   assistVar.unbindWatch1();
                   assistVar.unbindWatch2();
                   assistVar.unbindWatch3();
                   assistVar.unbindWatch4();
                   scope.selectConfig = null;
                   $(ele).remove();
               })
           }
        }
    }])
angular.module('xue.steps', [])
    .directive('xueSteps', ['xueUtilLang', "xueUtilArray", function (xueUtilLang, xueUtilArray) {
        return {
            restrict: "E",
            replace: true,
            scope: {
                stepsConfig: '=',
                params: '=',
                ngValue: '='
            },
            templateUrl: function (element, attrs) {
                return attrs.templateUrl || 'xue/template/steps/steps.html';
            },
            link: function (scope) {
                var stepsCtrl = scope.stepsCtrl = {
                    defaultConfig: {
                        theme: "blue-theme", //可选值blue-theme,green-theme,可继续拓展
                        size: "", //small,large,在iconStyle为point时无效
                        direction: "horizontal", //horizontal:水平布局,vertical：垂直布局
                        alignCenter: false, //是否居中展示,在direction为horizontal时有效
                        iconStyle: "num", //icon的展示形式,num：默认,statusNum：带状态的数字,strokeStatus：镂空状态,fillStatus：填充状态,point：小点式,img：图片,iconfont：字体图标
                        idField: "code", //键值字段名
                        nameField: "title", //步骤展示文字字段名
                        descField: "description", //描述文字字段名
                        options: [{
                            code: "",
                            title: "",
                            active: "", //标记是否是当前步骤
                            passed: "", //标记步骤是否已通过
                            imgUrl: "", //iconStyle为img时，传入图片路径
                            iconfont: "", //iconStyle为iconfont时，传入图标class值
                            description: ""
                        }],
                        changeCallback: function () {}
                    },
                    //设置步骤条状态
                    setStepStatus: function () {},
                    init: function () {
                        var self = this;
                        scope.stepsConfig = angular.extend(self.defaultConfig, scope.stepsConfig || {});
                        if (xueUtilLang.isFunction(scope.stepsConfig.setStepStatus)) {
                            self.setStepStatus = scope.stepsConfig.setStepStatus;
                        } else {
                            self.setStepStatus = self._setStepStatus;
                        }
                        scope.stepsConfig.options = self.setStepStatus(scope.stepsConfig.options, scope.params);
                    },
                    _setStepStatus: function (options) {
                        var index = xueUtilArray.findObjIndex(options, [scope.stepsConfig.idField], scope.ngValue);
                        angular.forEach(options, function (item, i) {
                            if (i < index) {
                                item.passed = true;
                            } else {
                                item.passed = false;
                            }
                        });
                        return options;
                    },
                    //步骤条点击事件
                    stepClick: function (option) {
                        if (scope.ngValue === option[scope.stepsConfig.idField]) {
                            return;
                        }
                        if (xueUtilLang.isFunction(scope.stepsConfig.beforeChange) &&
                            !scope.stepsConfig.beforeChange(option, scope.params)) {
                            return;
                        }
                        scope.ngValue = option[scope.stepsConfig.idField];
                        scope.stepsConfig.options = this.setStepStatus(scope.stepsConfig.options, scope.params);
                        if (xueUtilLang.isFunction(scope.stepsConfig.changeCallback)) {
                            scope.stepsConfig.changeCallback(option, scope.params);
                        }
                    }
                };
                //监听options
                scope.stepsConfigWatcher = scope.$watch("stepsConfig.options", function (newVal) {
                    scope.stepsConfig.options = stepsCtrl.setStepStatus(newVal, scope.params);
                });
                scope.$on('$destroy', function () {
                    scope.stepsConfigWatcher();
                });
                stepsCtrl.init();
            }
        };
    }]);
angular.module('xue.table', ['xue.util.lang', 'xue.pagination'])
    .directive('xueTable', ['xueUtilLang', function (xueUtilLang) {
        return {
            restrict: "E",
            replace: true,
            scope: {
                tableConfig: '='
            },
            templateUrl: function (element, attrs) {
                return attrs.templateUrl || 'xue/template/table/table.html';
            },
            link: function (scope, ele, attrs) {

            }
        };
    }])
angular.module('xue.tabs', [])
    .directive('xueTabsWrap', [function () {
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            scope: {},
            controller: 'tabsWrapCtrl',
            templateUrl: function (element, attrs) {
                return attrs.templateUrl || 'xue/template/tabs/tabs_wrap.html';
            },
            link: function () {
                console.log('link')
            }
        }
    }])
    .controller('tabsWrapCtrl', [function () {
        console.log('ctrl');
    }])
    .directive('xueTab', [function () {
        return {
            restrict: 'E',
            require: '^xueTabsWrap',
            replace: true,
            templateUrl: function (element, attrs) {
                return attrs.templateUrl || 'xue/template/tabs/tab.html';
            },
            link: function () {

            }
        }
    }])
    .directive('xueTabContent', [function () {
        return {

        }
    }]);
angular.module('xue.tree', ['xue.util.lang', 'xue.util.array'])
    .directive('xueTree',['xueUtilLang', 'xueUtilArray', '$timeout', '$templateCache', function (xueUtilLang, xueUtilArray, $timeout, $templateCache){
        return {
            restrict: 'E',
            replace: true,
            scope: {
                treeConfig: '='
            },
            templateUrl: function (element, attrs) {
                return attrs.templateUrl || 'xue/template/tree/tree.html'
            },
            link: function(scope,ele,attrs) {
                /**
                 * 树节点属性
                 * @param {Object} node 树节点对象
                 * @param {String} node[scope.treeConfig.nodeName] 名称
                 * @param {Boolean} node.expanded 是否展开节点 false
                 * @param {Boolean} node.disabled 禁止选中 false
                 * @param {Boolean} node.selected 节点是否选中 false
                 * @param {Boolean} node.checked 节点是否勾选 false
                 * @param {Boolean} node.chkDisabled 节点复选框是否禁用 false
                 * @param {String} node.iconClass 节点图标
                 * @param {Array} node[scope.treeConfig.childName] 子节点列表
                 */
                var treeCtrl = scope.treeCtrl = {
                    defaultConfig: {
                        data: [], // 树列表数据
                        dataMap: {}, // 树列表索引
                        uniqueId: 'id', // 唯一标识字段名
                        nodeName: 'name', // 节点标题字段名
                        childName: 'children', // 子节点列表字段名
                        showIcon: false, // 是否展示图标 false
                        icon: {
                            // 当showIcon为true
                            // 1.如果子节点设置了iconClass,则优先展示iconClass的样式,如果没有：
                            // 2.如果设置了commonIconClass,则优先展示commonIconClass, 如果没有：
                            // 3.按是否有子节点来划分节点图标
                            commonIconClass: '', // 所有节点统一图标
                            parentIconClass: '', // 有子节点的节点图标 className
                            leafIconClass: '' // 无节点的节点图标 className
                        },
                        search: false, // 是否支持搜索 false
                        showCheckbox: false, // 是否展示复选框 false
                        checkOnClick: true, // 在点击时同时勾选/取消勾选节点 showCheckbox为true生效
                        checkNodes: [], // 勾选的节点数组
                        lazy: false, // 是否懒加载子节点数据 fasle
                        expandAll: false, // 是否展开所有节点 false
                        expandOnClick: false, // 是否在选中树节点时展开子列表 true
                        accordion: false, // 是否手风琴模式 false
                        currentNode: '', // 定位选中指定节点
                        showLine: true, // 是否展示连接线
                        clickNode: function(){}, // 单击树节点时回调
                        checkNode: function(){}, // 勾选/取消勾选的事件回调
                        beforeClick: function(){}, // 单击树节点之前的事件回调
                        beforeCheck: function(){}, // 勾选、取消勾选树节点之前的事件回调
                        loadData: function(){}, // 加载子节点数据的方法，仅当 lazy 属性为true 时生效
                        completeTree: function(){} // 树节点构建完成时回调
                    },
                    // 初始化
                    init: function() {
                        var self = this;
                        scope.treeConfig = angular.extend(self.defaultConfig, scope.treeConfig || {});
                    },
                    // 初始化树
                    initTreeData: function (data, depth, parentId) {
                        var self = this;
                        angular.forEach(data, function(item, index) {
                            // 树深度
                            item.depth = depth;
                            // 父节点索引
                            if (parentId != undefined) {
                                item.parent = parentId;
                            } else {
                                // 根节点默认展开
                                if (index == 0) {
                                    item.expanded = true; 
                                }
                            }
                            // 复选框初始化
                            if (self.defaultConfig.showCheckbox) {
                                if (item.checked) {
                                    item.checked = 1;
                                    scope.treeConfig.checkNodes.push(item);
                                    if (item[scope.treeConfig.childName] && item[scope.treeConfig.childName].length) {
                                        self.judgeHalfCheck(item, item);
                                    }
                                } else {
                                    item.checked = 0;
                                }
                            }
                            // 全部展开
                            if (scope.treeConfig.expandAll) {
                                item.expanded = true;
                            }
                            // 树节点索引
                            scope.treeConfig.dataMap[item[scope.treeConfig.uniqueId]] = item;
                            // 子节点递归
                            if (item[scope.treeConfig.childName] && item[scope.treeConfig.childName].length) {
                                self.initTreeData(item[scope.treeConfig.childName], depth + 1, item[scope.treeConfig.uniqueId]);
                            } else {
                                // 非懒加载时定义叶子节点
                                if (!scope.treeConfig.lazy) {
                                    item.isLeaf = true;
                                }
                            }
                        });
                        // 树构建完成回调
                        if (parentId == undefined) {
                            if (xueUtilLang.isFunction(scope.treeConfig.completeTree)) {
                                scope.treeConfig.completeTree();
                            }
                        }
                    },
                    // 搜索关键字
                    searchText: '',
                    // 搜索功能
                    filterNode: function(data) {
                        var self = this;
                        var hideLen = 0;
                        angular.forEach(data, function(item) {
                            if (!item.isLeaf) {
                                self.filterNode(item[scope.treeConfig.childName]);
                            } else {
                                // 节点未包含搜索关键字，当其兄弟节点全都未包含搜索关键字时，父节点才隐藏
                                if (item[scope.treeConfig.nodeName].indexOf(self.searchText) == -1) {
                                    item.hideNode = true;
                                    if (item.parent) {
                                        hideLen++;
                                        if (scope.treeConfig.dataMap[item.parent][scope.treeConfig.childName].length == hideLen) {
                                            scope.treeConfig.dataMap[item.parent].hideNode = true;
                                        }
                                    }
                                } else {
                                // 节点包含搜索关键字，其父节点也取消隐藏
                                    item.hideNode = false;
                                    if (item.parent) {
                                        scope.treeConfig.dataMap[item.parent].hideNode = false; 
                                    }
                                }
                            }
                        })
                    },
                    // 当前选中节点
                    currentSelectedNode: '',
                    // 单击延时
                    clickTimer: null,
                    // 单击行
                    clickNode: function (node, event, ifSearch) {
                        var self = this;
                        // 取消上次延时未执行的方法
                        $timeout.cancel(self.clickTimer);
                        //执行延时
                        self.clickTimer = $timeout(function() {
                            if (node.disabled) {
                                return;
                            }
                            // 搜索框点击节点定位
                            if (ifSearch) {
                                self.positionNode(node);
                                if (scope.treeConfig.showCheckbox) {
                                    self.changeNode(node);
                                }
                            }
                            // 点击节点前回调
                            if (xueUtilLang.isFunction(scope.treeConfig.beforeClick)) {
                                var clickFlag = scope.treeConfig.beforeClick(node);
                                if (clickFlag === false) {
                                    return;
                                }
                            }
                            // 勾选节点
                            if (scope.treeConfig.showCheckbox && scope.treeConfig.checkOnClick && !node.chkDisabled) {
                                self.changeNode(node, event);
                            }
                            // 展开节点
                            if (scope.treeConfig.expandOnClick) {
                                self.expandNode(node);
                            }
                            // 当前节点赋值
                            self.currentSelectedNode = node[scope.treeConfig.uniqueId];
                            // 点击节点完成回调
                            if (xueUtilLang.isFunction(scope.treeConfig.clickNode)) {
                                scope.treeConfig.clickNode(node);
                            }
                            if (event) {
                                event.stopPropagation();
                            }
                        }, 300);
                    },
                    // 双击行
                    dblClickNode: function(node, event) {
                        var self = this;
                        $timeout.cancel(self.clickTimer);
                        self.expandNode(node, event);
                    },
                    // 展开节点
                    expandNode: function (node, event) {
                        var self = this;
                        if (node.isLeaf) {
                            return;
                        }
                        node.expanded = !node.expanded;
                        // 手风琴模式
                        if (node.expanded && scope.treeConfig.accordion) {
                            self.collapseNode(node);
                        }
                        // 懒加载子节点数据
                        if (scope.treeConfig.lazy && xueUtilLang.isFunction(scope.treeConfig.loadData) 
                            && !node[scope.treeConfig.childName]) {
                            self.loadData(node);
                        }
                        if (event) {
                            event.stopPropagation();
                        }
                    },
                    // 勾选/取消勾选节点
                    changeNode: function (node, event, parentCheck) {
                        var self = this;
                        // 勾选节点前回调
                        if (xueUtilLang.isFunction(scope.treeConfig.beforeCheck)) {
                            var checkFlag = scope.treeConfig.beforeCheck(node);
                            if (checkFlag === false) {
                                return;
                            }
                        }
                        // 父节点取消选中 子节点也取消
                        if (parentCheck == 0) {
                        node.checked = 0; 
                        } else {
                            if (node.checked == 0) {
                                node.checked = 1;
                            } else {
                                node.checked = 0;
                            }
                        }
                        // 勾选列表赋值
                        var checkIndex = xueUtilArray.findObjIndex(scope.treeConfig.checkNodes, scope.treeConfig.uniqueId, node[scope.treeConfig.uniqueId]);
                        if (node.checked == 1 && checkIndex == -1) {
                            scope.treeConfig.checkNodes.push(node);
                        } else if (node.checked == 0 && checkIndex != -1) {
                            scope.treeConfig.checkNodes.splice(checkIndex, 1);
                        }
                        // 更改子节点状态
                        if (node[scope.treeConfig.childName]) {
                            self.checkChildren(node[scope.treeConfig.childName], node.checked);
                        }
                        // 更改父节点状态
                        if (node.parent && parentCheck == undefined) {
                            self.checkParent(node.parent);
                        }
                        // 勾选完成回调
                        if (xueUtilLang.isFunction(scope.treeConfig.checkNode)) {
                            scope.treeConfig.checkNode(node);
                        }
                        if (event) {
                            event.stopPropagation();
                        }
                    },
                    // 勾选/取消勾选父节点时 全选/取消全选子节点
                    checkChildren: function(nodes, parentCheck) {
                        var self = this;
                        angular.forEach(nodes, function(item) {
                            self.changeNode(item, '', parentCheck);
                        })
                    },
                    // 勾选/取消勾选子节点 判断是否勾选/取消勾选父节点
                    checkParent: function(parentId) {
                        var self = this;
                        var parentNode = scope.treeConfig.dataMap[parentId];
                        // 子节点全勾选数量
                        var totalCheck = 0;
                        // 子节点半勾选数量
                        var haveCheck = 0;
                        angular.forEach(parentNode[scope.treeConfig.childName], function(item) {
                            if (item.checked == 1) {
                                totalCheck++;
                            } else if (item.checked == 2) {
                                haveCheck++;
                            }
                        })
                        // 全勾选的子节点数量等于全部子节点 父节点也全勾选
                        if (totalCheck == parentNode[scope.treeConfig.childName].length) {
                            parentNode.checked = 1;
                            scope.treeConfig.checkNodes.push(parentNode);
                        } else if (totalCheck > 0) {
                            // 存在勾选的子节点  则父节点半勾选
                            parentNode.checked = 2;
                            scope.treeConfig.checkNodes.push(parentNode);
                        } else if (totalCheck == 0) {
                            if (haveCheck > 0) {
                                parentNode.checked = 2;
                                scope.treeConfig.checkNodes.push(parentNode);
                            } else {
                                // 不存在勾选的子节点 父节点不勾选
                                parentNode.checked = 0;
                            }
                        }
                        // 递归父节点
                        if (parentNode.parent) {
                            self.checkParent(parentNode.parent);
                        }
                    },
                    offsetTop: 0,
                    // 搜索时定位选中指定节点
                    positionNode: function(node, ifParent) {
                        var self = this;
                        // 展开父节点
                        if (node.parent) {
                            var parant = scope.treeConfig.dataMap[node.parent];
                            parant.expanded = true;
                            // 手风琴模式
                            if (scope.treeConfig.accordion) {
                                self.collapseNode(node);
                            }
                            self.positionNode(parant, 'parent');
                            $timeout(function() {
                                self.offsetTop += document.getElementById('node_' + parant[scope.treeConfig.uniqueId]).offsetTop;
                            })
                        }
                        // 定位选中 选中节点滚动到列表中间
                        if (!ifParent) {
                            self.currentSelectedNode = node[scope.treeConfig.uniqueId];
                            $timeout(function() {
                                var needScroll = document.getElementById('node_' + self.currentSelectedNode).offsetTop + self.offsetTop - (ele[0].offsetHeight / 2);
                                if (needScroll > 0) {
                                    ele[0].scrollTop = needScroll;
                                } else {
                                    ele[0].scrollTop = 0;
                                }
                                self.offsetTop = 0;
                            })
                        }
                    },
                    // 手风琴模式收起其兄弟节点
                    collapseNode: function (node) {
                        var nodeList;
                        if (node.parent) {
                            nodeList = scope.treeConfig.dataMap[node.parent][scope.treeConfig.childName];
                        } else {
                            // 根节点
                            nodeList = scope.treeConfig.data;
                        }
                        if (nodeList.length > 1) {
                            angular.forEach(nodeList, function(item) {
                                if (item[scope.treeConfig.uniqueId] != node[scope.treeConfig.uniqueId]) {
                                    item.expanded = false;
                                }
                            })
                        }
                    },
                    // 懒加载子节点数据
                    loadData: function(node) {
                        node.loading = true;
                        scope.treeConfig.loadData(node, function(data) {
                            // 业务数据回调
                            if (data && data.length) {
                                self.initTreeData(data, node.depth + 1, node[scope.treeConfig.uniqueId]);
                                node[scope.treeConfig.childName] = data;
                            } else {
                                node.isLeaf = true;
                            }
                            node.loading = false;
                        })
                    },
                    // 判断当前勾选节点是选中还是半选中
                    judgeHalfCheck: function(nodes, parentNode) {
                        var self = this;
                        angular.forEach(nodes[scope.treeConfig.childName], function(item) {
                            if (!item.checked) {
                                parentNode.checked = 2;
                            } else if (item[scope.treeConfig.childName] && item[scope.treeConfig.childName].length) { 
                                self.judgeHalfCheck(item, parentNode);
                            }
                        })
                    }
                }
                treeCtrl.init();

                //格式化
                var unbindWatch = scope.$watch('treeConfig.data',function(newValue,oldValue){
                    if (newValue.length) {
                        treeCtrl.initTreeData(newValue, 1);
                    }
                });
                var unbindWatch1 = scope.$watch('treeConfig.currentNode',function(newValue,oldValue){
                    if (newValue) {
                        treeCtrl.positionNode(scope.treeConfig.dataMap[newValue]);
                    } else {
                        treeCtrl.currentSelectedNode = '';
                    }
                });
                scope.$on("$destroy", function() {
                    unbindWatch();
                    unbindWatch1();
                    $templateCache.remove('xue/template/tree/tree.html');
                })
            }
        }
    }])
angular.module('xue.util.array', []).service('xueUtilArray', [
    function () {
        /**
         * 数组去重,数组元素为string
         *
         * @param {any} arr
         * @returns
         */
        this.uniq = function (arr) {
            var res = [];
            var json = {};
            for (var i = 0; i < arr.length; i++) {
                if (!json[arr[i]]) {
                    res.push(arr[i]);
                    json[arr[i]] = 1;
                }
            }
            return res;
        };
        /**
         * 数组去重,数组元素为json
         *
         * @param {any} arr
         * @param {any} key
         * @returns
         */
        this.uniqJson = function (arr, key) {
            var res = [];
            var json = {};
            angular.forEach(arr, function (item) {
                if (!json[item[key]]) {
                    res.push(item);
                    json[item[key]] = 1;
                }
            });
            return res;
        };
        /**
         * 数组快速排序（数组对象为int型）
         *
         * @param {any} array
         * @returns
         */
        /*eslint complexity: ["error", 7]*/
        this.quickSort = function (array) {
            function sort(prev, numsize) {
                var nonius = prev;
                var j = numsize - 1;
                var flag = array[prev];
                // eslint-disable-next-line no-extra-parens
                if ((numsize - prev) > 1) {
                    while (nonius < j) {
                        for (; nonius < j; j--) {
                            if (array[j] < flag) {
                                //a[i] = a[j]; i += 1;
                                array[nonius++] = array[j];
                                break;
                            }
                        }
                        for (; nonius < j; nonius++) {
                            if (array[nonius] > flag) {
                                array[j--] = array[nonius];
                                break;
                            }
                        }
                    }
                    array[nonius] = flag;
                    sort(0, nonius);
                    sort(nonius + 1, numsize);
                }
            }
            sort(0, array.length);
            return array;
        };
        /**
         * 从数组中查找对象属性值，返回下标（同用于判断数组中是否存在某对象）
         * ps：数组对象为json
         * @param {any} arr
         * @param {any} key
         * @param {any} value
         * @returns
         */
        this.findObjIndex = function (arr, key, value) {
            try {
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i][key] === value) {
                        return i;
                    }
                }
                return -1;
            } catch (e) {
                return -1;
            }
        };
        /**
         * 从数组中查找值，返回下标（同用于判断数组中是否存在某对象）
         * ps:数组对象为string
         * @param {any} arr
         * @param {any} value
         * @returns
         */
        this.findStrIndex = function (arr, value) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] === value) {
                    return i;
                }
            }
            return -1;
        };
        /**
         * 从数组中查找对象值，返回数组
         * ps：数组对象为数组
         * @param {any} arr
         * @param {any} key
         * @param {any} valueArr
         * @returns
         */
        this.findInArrByKeys = function (arr, key, valueArr) {
            var ret = [];
            try {
                for (var i = 0; i < arr.length; i++) {
                    for (var j in valueArr) {
                        if (arr[i][key] == valueArr[j]) {
                            ret.push(arr[i]);
                            valueArr.splice(j, 1);
                        }
                    }
                    if (valueArr.length == 0) {
                        return ret;
                    }
                }
                return ret;
            } catch (e) {
                return ret;
            }
        };

    }
]);
angular.module('xue.util.collection', ['xue.util.lang'])
    .service('xueUtilCollect', ["xueUtilLang", function (xueUtilLang) {
        /**
         * 从数组中查找对象值，返回数组
         * ps：数组元素为json，匹配对象为数组
         * @param {any} arr
         * @param {any} key
         * @param {any} valueArr
         * @returns
         */
        this.findWithArray = function (arr, key, valueArr) {
            var ret = [];
            for (var i = 0; i < arr.length; i++) {
                for (var j in valueArr) {
                    if (arr[i][key] === valueArr[j]) {
                        ret.push(arr[i]);
                        valueArr.splice(j, 1);
                    }
                }
                if (valueArr.length === 0) {
                    return ret;
                }
            }
            return ret;
        };
        /**
         * 从数组中查找对象值，返回对象
         * ps：数组元素为json
         * @param {any} arr
         * @param {any} key
         * @param {any} value
         * @returns
         */
        this.findWithVal = function (arr, key, value) {
            try {
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i][key] === value) {
                        return arr[i];
                    }
                }
                return '';
            } catch (e) {
                return '';
            }
        };
        /**
         * 移除对象中值为空的项
         *
         * @param {obj} obj
         * @returns
         */
        this.removeEmptyField = function (json) {
            var newJson = {};
            angular.forEach(json, function (item, i) {
                if (item) {
                    newJson[i] = item;
                }
            });
            return newJson;
        };
        /**
         * 移除数组中对象某属性值为空的项
         *
         * @param {array} array
         * @returns
         */
        this.removeEmptyItem = function (array) {
            var newArray = [];
            for (var i = 0; i < array.length; i++) {
                var newObj = {};
                for (var j in array[i]) {
                    if (array[i][j]) {
                        newObj[j] = array[i][j];
                    }
                }
                newArray.push(newObj);
            }
            return newArray;
        };
        /**
         * 根据数组中对象的某个属性进行排序
         * @param {Array} arr 数组
         * @param {String} field 字段名
         * @param {Boolean} order 排序方式 默认正序 true 倒序 false
         * @param {String} type 排序类型 默认为0 数值类型 0 字符类型 1
         */
        /*eslint complexity: ["error", 8]*/
        this.sortByfield = function (arr, field, order, type) {
            var res = [];
            if (arr.length && field) {
                if (typeof order === 'undefined') {
                    order = true;
                } else {
                    order = !!order;
                }
                if (typeof type === 'undefined') {
                    type = isNaN(parseInt(arr[0][field], 0)) ? 1 : 0;
                } else {
                    type = type === 1 ? 1 : 0;
                }
                if (type === 0) {
                    var compare = function () {
                        return function (a, b) {
                            var res;
                            if (order) {
                                res = a[field] - b[field];
                            } else {
                                res = b[field] - a[field];
                            }
                            return res;
                        };
                    };
                    arr.sort(compare(field, order));
                } else {
                    var compareStr = function () {
                        var e = order ? 1 : -1;
                        return function (a, b) {
                            var res;
                            if (a[field] < b[field]) {
                                res = -1 * e;
                            } else if (a[field] > b[field]) {
                                res = 1 * e;
                            } else {
                                res = 0;
                            }
                            return res;
                        };
                    };
                    arr.sort(compareStr(field, order));
                }
                res = arr;
            }
            return res;
        };
        /**
         * 判断是几维数组(返回数组中最大的维度)
         */
        this.arrDimension = function (arr, dimension) {
            if (!dimension) {
                dimension = 0;
            }
            var res;
            if (arr instanceof Array) {
                dimension++;
                var maxDimension = 0,
                    tempDimension = dimension,
                    temp = 0;
                for (var i = 0; i < arr.length; i++) {
                    temp = this.arrDimension(arr[i], tempDimension);
                    if (temp > maxDimension) {
                        maxDimension = temp;
                    }
                }
                res = maxDimension;
            } else {
                res = dimension;
            }
            return res;
        };
        /**
         * 获取字节长度（英文数字占1个字符，中文汉字占2个字符）
         * @param {string} str 
         */
        this.getByteLen = function (str) {
            var len = 0;
            for (var i = 0; i < str.length; i++) {
                var c = str.charCodeAt(i);
                //单字节加1
                if (c >= 0x0001 && c <= 0x007e || c >= 0xff60 && c <= 0xff9f) {
                    len++;
                } else {
                    len += 2;
                }
            }
            return len;
        };
        /**
         * 按长度切割数组/字符串
         * @param {array/string} param 
         * @param {int} len 中文字符长度，通过字节长度来切割的，则字节长度为len的两倍
         * @param {bool} isByteLen 是否是字节长度 (目前仅字符串支持通过字节长度切割)
         */
        /*eslint complexity: ["error", 10]*/
        this.sliceByLen = function (param, len, isByteLen) {
            try {
                var newArr = [],
                    i;
                if (isByteLen && xueUtilLang.isType(param || '', 'string')) {
                    var byteLen = len * 2,
                        tempStr = '',
                        tempCount = 0;
                    for (i = 0; i < param.length; i++) {
                        tempCount += this.getByteLen(param.charAt(i));
                        tempStr += param.charAt(i);
                        if (tempCount >= byteLen) {
                            newArr.push(tempStr);
                            tempStr = '';
                            tempCount = 0;
                        }
                    }
                    if (tempCount) {
                        newArr.push(tempStr);
                    }
                } else {
                    var sliceTime = Math.ceil(param.length / len);
                    for (i = 0; i < sliceTime; i++) {
                        newArr.push(param.slice(i * len, i * len + len));
                    }
                }
                return newArr;
            } catch (e) {
                return param || [];
            }
        };
    }]);
angular.module('xue.util.date', ['xue.util.lang', 'xue.util.string'])
    .service('xueUtilDate', ['xueUtilLang', 'xueUtilString', function (xueUtilLang, xueUtilString) {
        var self = this;
        /**
         * 将符合时间格式的字符串转化为Date对象
         * 根据给定格式格式化时间 时间可以是标准时间或者符合时间格式的字符串
         * @param {any} date /Mon Nov 20 2017 14:28:48 GMT+0800 (中国标准时间)/ 2020-2-20
         * @param {string} fmt 可选 时间格式 默认YYYY-MM-DD hh:mm:ss
         * @returns {String} /2016-01-01 23:59:59/
         */
        this.translateDate = function (date) {
            var tmp = new Date(date);
            if (xueUtilLang.isValidDate(tmp)) {
                var tmp1 = new Date(date.replace(/-/g,"/"));
                if (!xueUtilLang.isValidDate(tmp1)) {
                    date = tmp1;
                } else {
                    return "Invalid Date";
                }
            } else {
                date = tmp;
            }
            return date;
        }
        /**
         * 格式化时间
         * 根据给定格式格式化时间 时间可以是标准时间或者符合时间格式的字符串
         * @param {any} date /Mon Nov 20 2017 14:28:48 GMT+0800 (中国标准时间)/ 2020-2-20
         * @param {string} fmt 可选 时间格式 默认YYYY-MM-DD hh:mm:ss
         * @returns {String} /2016-01-01 23:59:59/
         */
        this.formatDate = function (date, fmt) {
            date = self.translateDate(date);
            if (!xueUtilLang.isDate(date)) {
                return date;
            }
            fmt = fmt ? fmt : "YYYY-MM-DD hh:mm:ss";
            var opt = {
                "Y+": date.getFullYear().toString(), // 年
                "M+": (date.getMonth() + 1).toString(), // 月
                "D+": date.getDate().toString(), // 日
                "h+": date.getHours().toString(), // 时
                "m+": date.getMinutes().toString(), // 分
                "s+": date.getSeconds().toString() // 秒
                // 有其他格式化字符需求可以继续添加，必须转化成字符串
            };
            for (var k in opt) {
                var ret = new RegExp("(" + k + ")").exec(fmt);
                if (ret) {
                    fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (xueUtilString.padChars(opt[k], ret[1].length, 'start', '0')))
                }
            }
            return fmt;
        }
        /**
         * 获取当前时间
         * @param {string} fmt 可选 时间格式 默认YYYY-MM-DD hh:mm:ss
         * 获取当前年月日 YYYY-MM-DD
         * 获取当前时分秒 hh:mm:ss
         * @returns {String} /2016-01-01 23:59:59/
         */
        this.getCurrentFmtDate = function (fmt) {
            var date = new Date();
            return self.formatDate(date, fmt);
        }
        /**
         * 获取指日期增加(减少)年/月/日/时/分/秒 之后的时间
         * @param {string} dateStr 指定时间
         * @param {number} number 需要增加或减少的数值 正数指定时间增加 负数初始时间减少 
         * @param {string} type 需要增加(减少)的时间类型 years/months/days/hours/minutes/seconds
         * @param {string} fmt 可选 时间格式 默认YYYY-MM-DD hh:mm:ss
         * @returns {string}
         */
        this.dateAddNum = function (dateStr, type, number, fmt) {
            var tempDate = self.translateDate(dateStr); // 把日期字符串转换成日期格式
            if (!xueUtilLang.isDate(tempDate)) {
                return tempDate;
            }
            switch (type) {
                case "years":
                    tempDate.setFullYear(tempDate.getFullYear() + number);
                    break;
                case "months":
                    tempDate.setMonth(tempDate.getMonth() + number);
                    break;
                case "days":
                    tempDate.setDate(tempDate.getDate() + number);
                    break;
                case "hours":
                    tempDate.setHours(tempDate.getHours() + number);
                    break;
                case "minutes":
                    tempDate.setMinutes(tempDate.getMinutes() + number);
                    break;
                case "seconds":
                    tempDate.setSeconds(tempDate.getSeconds() + number);
                    break;
            }
            return self.formatDate(tempDate, fmt);
        }
        /**
         * 获取日期最大值
         * 根据距 1970年1月1日 的毫秒数来比较获取日期的最大值
         * 
         * @param {arr} dateArr 需要比较的日期数组 数组项可以是标准时间或者符合时间格式的字符串
         * @returns {string}
         */
        this.maxDate = function (dateArr) {
            if (!Array.isArray(dateArr) || !dateArr.length) {
                return undefined;
            }
            if (dateArr.length === 1) {
                return dateArr[0];
            }
            var max = dateArr.reduce(function (date1, date2) {
                var d1 = new Date(date1),
                    d2 = new Date(date2);
                if (!xueUtilLang.isDate(d1)) {
                    return date2;
                } else if (!xueUtilLang.isDate(d2)) {
                    return date1;
                }
                if (Date.parse(d1) - Date.parse(d2) > 0) {
                    return date1;
                } else {
                    return date2;
                }
            })
            if (!xueUtilLang.isDate(new Date(max))) {
                return undefined;
            }
            return max;
        }
        /**
         * 获取日期最小值
         * 根据距 1970年1月1日 的毫秒数来比较获取日期的最小值
         * 
         * @param {arr} dateArr 需要比较的日期数组 数组项可以是标准时间或者符合时间格式的字符串
         * @returns {string}
         */
        this.minDate = function (dateArr) {
            if (!Array.isArray(dateArr) || !dateArr.length) {
                return undefined;
            }
            if (dateArr.length === 1) {
                return dateArr[0];
            }
            var min = dateArr.reduce(function (date1, date2) {
                var d1 = new Date(date1),
                    d2 = new Date(date2);
                if (!xueUtilLang.isDate(d1)) {
                    return date2;
                } else if (!xueUtilLang.isDate(d2)) {
                    return date1;
                }
                if (Date.parse(d1) - Date.parse(d2) > 0) {
                    return date2;
                } else {
                    return date1;
                }
            })
            if (!xueUtilLang.isDate(new Date(min))) {
                return undefined;
            }
            return min;
        }
        /**
         * 获取两个日期的间隔对象
         * 返回一个包含两个日期的天、小时、分钟、秒、毫秒及大小的对象
         * 
         * @param {date} start 比较初始时间
         * @param {date} end 比较结束时间
         * @returns {obj} 
         */
        this.timeInterval = function (start, end) {
            var startTime = Date.parse(start.replace(/-/g, '/')); //开始时间
            var endTime = Date.parse(end.replace(/-/g, '/')); //结束时间
            var usedTime = Math.abs(parseFloat(startTime) - parseFloat(endTime)); //两个时间戳相差的毫秒数
            var flag = ((startTime - endTime) > 0) ? '-' : '+';
            var days = Math.floor(usedTime / (24 * 3600 * 1000));
            //计算出小时数
            var leave1 = usedTime % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
            var hours = Math.floor(leave1 / (3600 * 1000));
            //计算相差分钟数
            var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
            var minutes = Math.floor(leave2 / (60 * 1000));
            var seconds = Math.floor((usedTime - days * 24 * 60 * 60 * 1000 - hours * 60 * 60 * 1000 - minutes * 60 * 1000) / 1000); //取得算出分后剩余的秒数

            var timeIntervalObj = {
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                usedTime: usedTime,
                flag: flag
            };
            return timeIntervalObj;
        };
        /**
         * 校验日期格式
         * @param {String} date 2016-01-01 / 2016/01/01
         * @returns {boolean}
         */
        this.checkDateFormat = function(date){
            try{
                var result = date.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
                if (result === null)
                    return false;
                var d = new Date(result[1], result[3] - 1, result[4]);
                return (d.getFullYear() == result[1] && (d.getMonth() + 1) == result[3] && d.getDate() == result[4]);
            }catch(e){
                return false;
            }
        }
        /**
         * 校验时间格式
         * @param {String} Time 00:00:00
         * @returns {boolean}
         */
        this.checkTimeFormat = function(time){
            try{
                var regex = /^(?:(?:[0-2][0-3])|(?:[0-1][0-9])):[0-5][0-9]:[0-5][0-9]$/;
                if(!regex.test(time)){
                    return false
                }else{
                    return true;
                }
            }catch(e){
                return false;
            }
        }
        /**
         * 校验日期时间格式
         * @param {String} dateTime  2016-01-01 00:00:00 / 2016/01/01 00:00:00
         * @returns {boolean}
         */
        this.checkDateTimeFormat = function(dateTime){
            try{
                var dateTimeArray = dateTime.split(" ");
                if(this.checkDateFormat(dateTimeArray[0]) && this.checkTimeFormat(dateTimeArray[1])){
                    return true;
                }else{
                    return false;
                }
            }catch(e){
                return false;
            }
        }
    }]);
angular.module('xue.util.function', ['xue.util.lang'])
    .service('xueUtilFunc', ["xueUtilLang", function (xueUtilLang) {
        var self = this;
        var FUNC_ERROR_TEXT = 'Expected a function';
        var nativeMax = Math.max,
            nativeMin = Math.min;
        /**
         * 创建一个调用func的函数，通过this绑定和创建函数的参数调用func，
         * 调用次数不超过 n 次。 之后再调用这个函数，将返回一次最后调用func的结果。
         *
         * @param {number} n 超过多少次不再调用func（限制调用func 的次数）
         * @param {Function} func 限制执行的函数.
         * @returns {Function} 返回新的限定函数.
         */
        this.before = function (n, func) {
            var result;
            if (typeof func !== 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            n = parseInt(n, 0);
            return function () {
                if (--n >= 0) {
                    result = func.apply(this, arguments);
                }
                if (n < 1) {
                    func = undefined;
                }
                return result;
            };
        };
        /**
         * before的反向函数;此方法创建一个函数，当他被调用n或更多次之后将马上触发func
         * 
         * @param {number} n 方法应该在调用多少次后才执行.
         * @param {Function} func 用来限定的函数.
         * @returns {Function} 返回新的限定函数.
         */
        this.after = function (n, func) {
            if (typeof func !== 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            n = parseInt(n, 0);
            return function () {
                if (--n < 1) {
                    return func.apply(this, arguments);
                }
            };
        };
        /**
         * 创建一个 debounced（防抖动）函数，该函数会从上一次被调用后，延迟 wait 毫秒后调用 func 方法。
         *  debounced（防抖动）函数提供一个 cancel 方法取消延迟的函数调用以及 flush 方法立即调用。
         *  可以提供一个 options（选项） 对象决定如何调用 func 方法，options.leading 与|或 options.trailing 
         * 决定延迟前后如何触发（是 先调用后等待 还是 先等待后调用）。 
         * func 调用时会传入最后一次提供给 debounced（防抖动）函数 的参数。 
         * 后续调用的 debounced（防抖动）函数返回是最后一次 func 调用的结果
         *
         * 注意: 如果 leading 和 trailing 选项为 true, 则 func 允许 trailing 方式调用的条件为: 
         * 在 wait 期间多次调用防抖方法。如果 wait 为 0 并且 leading 为 false, func调用将被推迟到下一个点，
         * 类似setTimeout为0的超时。
         *
         * @param {Function} func 要防抖动的函数.
         * @param {number} [wait=0] 需要延迟的毫秒数.
         * @param {Object} [options={}] 选项对象.
         * @param {boolean} [options.leading=false] 指定在延迟开始前调用
         * @param {number} [options.maxWait] 设置 func 允许被延迟的最大值
         * @param {boolean} [options.trailing=true] 指定在延迟结束后调用
         * @returns {Function} 返回新的 debounced（防抖动）函数.
         */
        /*eslint complexity: ["error", 7]*/
        this.debounce = function (func, wait, options) {
            var lastArgs,
                lastThis,
                maxWait,
                result,
                timerId,
                lastCallTime,
                lastInvokeTime = 0,
                leading = false,
                maxing = false,
                trailing = true;

            if (typeof func !== 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            wait = Number(wait) || 0;
            if (xueUtilLang.isObject(options)) {
                leading = !!options.leading;
                maxing = 'maxWait' in options;
                maxWait = maxing ? nativeMax(Number(options.maxWait) || 0, wait) : maxWait;
                trailing = 'trailing' in options ? !!options.trailing : trailing;
            }

            function invokeFunc(time) {
                var args = lastArgs,
                    thisArg = lastThis;

                lastArgs = lastThis = undefined;
                lastInvokeTime = time;
                result = func.apply(thisArg, args);
                return result;
            }

            function leadingEdge(time) {
                // Reset any `maxWait` timer.
                lastInvokeTime = time;
                // Start the timer for the trailing edge.
                timerId = setTimeout(timerExpired, wait);
                // Invoke the leading edge.
                return leading ? invokeFunc(time) : result;
            }

            function remainingWait(time) {
                var timeSinceLastCall = time - lastCallTime,
                    timeSinceLastInvoke = time - lastInvokeTime,
                    timeWaiting = wait - timeSinceLastCall;

                return maxing ?
                    nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) :
                    timeWaiting;
            }

            function shouldInvoke(time) {
                var timeSinceLastCall = time - lastCallTime,
                    timeSinceLastInvoke = time - lastInvokeTime;

                // Either this is the first call, activity has stopped and we're at the
                // trailing edge, the system time has gone backwards and we're treating
                // it as the trailing edge, or we've hit the `maxWait` limit.
                return lastCallTime === undefined || timeSinceLastCall >= wait ||
                    timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
            }

            function timerExpired() {
                var time = Date.now();
                if (shouldInvoke(time)) {
                    return trailingEdge(time);
                }
                // Restart the timer.
                timerId = setTimeout(timerExpired, remainingWait(time));
            }

            function trailingEdge(time) {
                timerId = undefined;

                // Only invoke if we have `lastArgs` which means `func` has been
                // debounced at least once.
                if (trailing && lastArgs) {
                    return invokeFunc(time);
                }
                lastArgs = lastThis = undefined;
                return result;
            }

            function cancel() {
                if (timerId !== undefined) {
                    clearTimeout(timerId);
                }
                lastInvokeTime = 0;
                lastArgs = lastCallTime = lastThis = timerId = undefined;
            }

            function flush() {
                return timerId === undefined ? result : trailingEdge(Date.now());
            }

            function debounced() {
                var time = Date.now(),
                    isInvoking = shouldInvoke(time);

                lastArgs = arguments;
                lastThis = this;
                lastCallTime = time;

                if (isInvoking) {
                    if (timerId === undefined) {
                        return leadingEdge(lastCallTime);
                    }
                    if (maxing) {
                        // Handle invocations in a tight loop.
                        clearTimeout(timerId);
                        timerId = setTimeout(timerExpired, wait);
                        return invokeFunc(lastCallTime);
                    }
                }
                if (timerId === undefined) {
                    timerId = setTimeout(timerExpired, wait);
                }
                return result;
            }
            debounced.cancel = cancel;
            debounced.flush = flush;
            return debounced;
        };

        /**
         * “delay”和“defer”的基本实现，接受“args”
         *
         * @private
         * @param {Function} func 延迟加载的函数.
         * @param {number} wait 延迟秒数.
         * @param {Array} args 提供给func的参数.
         * @returns {number|Object} 返回计时器id或timeout对象 
         */
        this._baseDelay = function (func, wait, args) {
            if (typeof func !== 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            return setTimeout(function () {
                func.apply(undefined, args);
            }, wait);
        };
        /**
         * 推迟调用func，直到当前堆栈清理完毕。 调用时，任何附加
         * 
         * @param {Function} func 要延迟的函数.
         * @param {...*} [args] 会在调用时传给 func 的参数.
         * @returns {number} 返回计时器 id.
         */
        this.defer = function (func, args) {
            return self._baseDelay(func, 1, args);
        };
        /**
         * 延迟 wait 毫秒后调用 func。 调用时，任何附加的参数会传给func
         *
         * @param {Function} func 要延迟的函数.
         * @param {number} wait 要延迟的毫秒数.
         * @param {...*} [args] 会在调用时传入到func的参数.
         * @returns {number} 返回计时器id.
         */
        this.delay = function (func, wait, args) {
            return self._baseDelay(func, Number(wait) || 0, args);
        };
        /**
         * 创建一个只能调用 func 一次的函数。 重复调用返回第一次调用的结果。 
         * func 调用时， this 绑定到创建的函数，并传入对应参数。
         *
         * @param {Function} func 指定的触发的函数.
         * @returns {Function} 返回新的受限函数.
         */
        this.once = function (func) {
            return self.before(1, func);
        };
        /**
         * 创建一个函数，调用func时，this绑定到创建的新函数，把参数作为数组传入，类似于 Function#apply
         *
         * @param {Function} func 要应用传播参数的函数.
         * @param {number} [start=0] spread 参数的开始位置.
         * @returns {Function} 返回新的函数.
         */
        this.spread = function (func, start) {
            if (typeof func !== 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            start = !start ? 0 : nativeMax(parseInt(start, 0), 0);
            return function () {
                var args = Array.prototype.slice.call(arguments);
                var array = args[start],
                    otherArgs = args.slice(0, start);

                if (array) {
                    otherArgs = otherArgs.concat(array);
                }
                return func.apply(this, otherArgs);
            };
        };
        /**
         * 创建一个调用func的函数，thisArg绑定func函数中的 this (this的上下文为thisArg) ，
         * 并且func函数会接收partials附加参数。
         * 
         * @param {Function} func 绑定的函数.
         * @param {*} thisArg 绑定的this对象.
         * @param {...*} [partials] 附加的部分参数.
         * @returns {Function} 返回新的绑定函数.
         */
        this.bind = function (func, thisArg) {
            if (typeof func !== 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            var outerArgs = Array.prototype.slice.call(arguments, 2);
            //此处的arguments为调用此函数时传进来的参数；2代表只需要保存第二个参数之后的其他的参数
            return function () { //返回值应该是一个函数
                var innerArgs = Array.prototype.slice.call(arguments);
                //此处的arguments为内部函数的参数
                var finalArgs = outerArgs.concat(innerArgs);
                return func.apply(thisArg, finalArgs); //使用apply方法来改变this的指向
            };
        };
    }]);
angular.module("xue.util.lang", []).service("xueUtilLang", [
    function() {
        var self = this;
        /** 对象类型 */
        var objType = ["Null", "Undefined", "Number", "Boolean", "String", "Object", "Function", "Array", "RegExp", "Date"];

        /**
         * 判断是否为对象
         *
         * @param {any} obj
         * @returns {boolean}
         */
        this.isObject = function(obj) {
            var type = typeof obj;
            return obj !== null && (type === "object" || type === "function");
        };
        /**
         * 判断是否为函数
         *
         * @param {any} fn
         * @returns {boolean}
         */
        this.isFunction = function(fn) {
            return Object.prototype.toString.call(fn) === "[object Function]";
        };
        /**
         * 判断是否为Json
         * @param {any} json
         * @returns {boolean}
         */
        this.isJson = function (json) {
            return Object.prototype.toString.call(json) === "[object Object]";
        };
        /**
         * 检查是否是原始Number数值型或者Number对象。
         *
         * @param {any} number
         * @returns {boolean}
         */
        this.isNumber = function(number) {
            return typeof number === 'number' || Object.prototype.toString.call(number) === "[object Number]";
        };
        /**
         * 判断是否为Date对象
         * @param {any} date
         * @returns {boolean}
         */
        this.isDate = function(date) {
            return date instanceof Date || Object.prototype.toString.call(date) === "[object Date]";
        };
        /**
         * 检查Date对象是否为Invalid Date
         * @param {any} date
         * @returns {boolean}
         */
        this.isValidDate = function(date) {
            return self.isDate(date) && isNaN(date.getTime())
        }
        /**
         * 判断是否为图片
         * 
         * @param {any} path
         * @returns {boolean}
         */
        this.isPicture = function (path) {
            var fileReg = /(.*).(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$/i;
            try {
                return fileReg.test(path);
            } catch (e) {
                return false;
            }
        };
        /**
         * 判断是否为空对象
         *
         * @param {any} obj
         * @returns {boolean}
         */
        this.isObjectEmpty = function(obj) {
            if (Object.getOwnPropertyNames) {
                return (Object.getOwnPropertyNames(obj).length === 0);
            } else {
                var k;
                for (k in obj) {
                    if (Object.prototype.hasOwnProperty.call(k, obj)) {
                        return false;
                    }
                }
                return true;
            }
        };
        /**
         * 判断对象类型
         *
         * @param {any} obj 对象object
         * @param {any} type 对象类型
         * @returns {boolean}
         */
        this.isType = function(obj, type) {
            return this.getType(obj) === type;
        };
        /**
         * 获取对象类型
         *
         * @param {any} obj 对象object
         * @returns {string}
         */
        this.getType = function(obj) {
            var map = {};
            angular.forEach(objType, function(item) {
                map["[object " + item + "]"] = item.toLowerCase();
            });
            return map[Object.prototype.toString.call(obj)] || "object";
        };
        /**
         * 复制对象
         *
         * @param {any} obj
         * @param {any} deep 是否深度复制
         * @returns {object}
         */
        this.copyObj = function(obj, deep) {
            if (!self.isObject(obj)) {
                return obj;
            }
            var i, target = self.isType(obj, "array") ? [] : {}, value, valueType;
            for (i in obj) {
                if (hasOwnProperty.call(obj, i)) {
                    value = obj[i];
                    valueType = self.getType(value);
                    if (deep && (valueType === "array" || valueType === "object")) {
                        target[i] = self.copyObj(value, deep);
                    } else {
                        target[i] = value;
                    }
                }
            }
            return target;
        };
        /**
         * 匹配对象
         * 检查对象是否包含要匹配的对象
         *
         * @param {any} obj 要检查的对象
         * @param {any} source 要匹配的对象
         * @returns {boolean}
         */
        this.isMatch = function(obj, source) {
            if (!self.isObject(obj) || !self.isObject(source)) {
                return false;
            }
            if (obj === source) {
                return true;
            }
            var matchKeyArr = [], matchLen;
            for (var k in Object(source)) {
                if (hasOwnProperty.call(source, k)) {
                    matchKeyArr.push(k);
                }
            }
            matchLen = matchKeyArr.length;

            while (matchLen--) {
                var key = matchKeyArr[matchLen],
                    value = source[key],
                    childObj = self.isObject(value);
                if (!obj[key]) {
                    return false;
                } 
                if (!childObj) {
                    if (value !== obj[key]) {
                        return false;
                    }
                } else {
                    if (!self.isMatch(obj[key], value)) {
                        return false;
                    }
                }
            }
            return true;
        };
        /**
         * 判断是否为IE
         */
        this.isIE = function () {
            return !!window.ActiveXObject || "ActiveXObject" in window;
        };
        /**
         * 判断是否为IE8
         */
        this.isIE8 = function () {
            var a = navigator.appVersion.split(";"), b;
            //系统是32位时谷歌浏览器版本号没有';',长度为1,a[1]为undefined,replace方法报错
            if (a.length > 1) {
                b = a[1].replace(/[ ]/g, "");
            } else {
                return false;
            }
            return navigator.appName === "Microsoft Internet Explorer" && b === "MSIE8.0";
        };
    }
]);

angular.module("xue.util.math", ['xue.util.lang'])
    .service("xueUtilMath", ["xueUtilLang", function(xueUtilLang) {
        var self = this;
        /**
         * 加法（解决浮点精度问题）
         * @param {number} number1 数值1
         * @param {number} number2 数值2
         */
        this.addition = function(number1, number2) {
            var decimalLen1, decimalLen2, maxLenPower;
            try {
                decimalLen1 = number1.toString().split(".")[1].length;
            } catch (e) {
                decimalLen1 = 0;
            }
            try {
                decimalLen2 = number2.toString().split(".")[1].length;
            } catch (e) {
                decimalLen2 = 0;
            }
            maxLenPower = Math.pow(10, Math.max(decimalLen1, decimalLen2));
            return (number1 * maxLenPower + number2 * maxLenPower) / maxLenPower;
        };
        /**
         * 减法（解决浮点精度问题）
         * @param {number} subtrahend 减数
         * @param {number} minuend 被减数
         */
        this.subtraction = function(subtrahend, minuend) {
            var decimalLen1, decimalLen2, maxLenPower, maxLen;
            try {
                decimalLen1 = subtrahend.toString().split(".")[1].length;
            } catch (e) {
                decimalLen1 = 0;
            }
            try {
                decimalLen2 = minuend.toString().split(".")[1].length;
            } catch (e) {
                decimalLen2 = 0;
            }
            maxLen = Math.max(decimalLen1, decimalLen2);
            maxLenPower = Math.pow(10, maxLen);
            return Number(
                ((subtrahend * maxLenPower - minuend * maxLenPower) / maxLenPower).toFixed(maxLen)
            );
        };
        /**
         * 乘法（解决浮点精度问题）
         * @param {number} multiplier1 乘数1
         * @param {number} multiplier2 乘数2
         */
        this.multiplication = function(multiplier1, multiplier2) {
            var decimalLen = 0;
            multiplier1 = multiplier1.toString();
            multiplier2 = multiplier2.toString();
            try {
                decimalLen += multiplier1.split(".")[1].length;
            } catch (e) {
                decimalLen += 0;
            }
            try {
                decimalLen += multiplier2.split(".")[1].length;
            } catch (e) {
                decimalLen += 0;
            }
            return Number(multiplier1.replace(".", "")) * Number(multiplier2.replace(".", "") /
                Math.pow(10, decimalLen)
            );
        };
        /**
         * 除法（解决浮点精度问题）
         * @param {number} divisor 除数
         * @param {number} dividend 被除数
         */
        this.division = function(divisor, dividend) {
            var decimalLen1, decimalLen2, nDivisor, nDividend;
            try {
                decimalLen1 = divisor.toString().split(".")[1].length;
            } catch (e) {
                decimalLen1 = 0;
            }
            try {
                decimalLen2 = dividend.toString().split(".")[1].length;
            } catch (e) {
                decimalLen2 = 0;
            }
            nDivisor = Number(divisor.toString().replace(".", ""));
            nDividend = Number(dividend.toString().replace(".", ""));
            return this.multiplication(
                nDivisor / nDividend,
                Math.pow(10, decimalLen2 - decimalLen1)
            );
        };
        /**
         * 平均值（解决浮点精度问题）
         * @param {arr} arr 要迭代的数组
         */
        this.mean = function(arr) {
            if (!Array.isArray(arr) || !arr.length) {
                return NaN;
            }
            var result, index = -1, length = arr.length;
            while (++index < length) {
                var current = arr[index];
                if (current !== undefined) {
                    result = result === undefined ? current : self.addition(result, current);
                }
            }
            return result / length;
        };
        /**
         * 获取数组最大值（解决浮点精度问题）
         * @param {arr} arr 要迭代的数组
         */
        this.max = function(arr) {
            if (!Array.isArray(arr) || !arr.length) {
                return undefined;
            }
            var max = arr.reduce(function(a, b) {
                if (!xueUtilLang.isNumber(a)) {
                    return b;
                } else if (!xueUtilLang.isNumber(b)) {
                    return a;
                }
                if (self.subtraction(a, b) > 0) {
                    return a;
                } else {
                    return b;
                }
            })
            if (!xueUtilLang.isNumber(max)) {
                return undefined;
            }
            return max;
        };
         /**
         * 获取数组最小值（解决浮点精度问题）
         * @param {arr} arr 要迭代的数组
         */
        this.min = function(arr) {
            if (!Array.isArray(arr) || !arr.length) {
                return undefined;
            }
            var min = arr.reduce(function(a, b) {
                if (!xueUtilLang.isNumber(a)) {
                    return b;
                } else if (!xueUtilLang.isNumber(b)) {
                    return a;
                }
                if (self.subtraction(a, b) < 0) {
                    return a;
                } else {
                    return b;
                }
            })
            if (!xueUtilLang.isNumber(min)) {
                return undefined;
            }
            return min;
        };
         /**
         * 数字根据精度四舍五入
         * @param {number} number 要四舍五入的数字(包含科学计数法)
         * @param {arr} precision 四舍五入的精度(负数表示整数位四舍五入取整)
         */
        this.round = function(number, precision) {
            if (!xueUtilLang.isNumber(number)) {
                return NaN;
            } else if (!precision) {
                return Math.round(number)
            } else {
                var pair = (number.toString() + 'e').split('e'),
                value = Math.round(pair[0] + 'e' + (+pair[1] + precision));
                pair = (value.toString() + 'e').split('e');
                return +(pair[0] + 'e' + (+pair[1] - precision));
            }
        };
    }
]);

angular.module('xue.util.methods', [])
    .service('xueUtilMethod', [function () {

    }]);
angular.module('xue.util.number', [])
    .service('xueUtilNumber', [function () {
        /**
         * 检查 n 是否在 start 与 end 之间，但不包括 end。
         * 如果 end 没有指定，那么 start 设置为0。 
         * 如果 start 大于 end，那么参数会交换以便支持负范围。
         *
         * @param {number} number  要检查的值
         * @param {number} start   开始范围
         * @param {number} end     结束范围
         * @returns
         */
        this.inRange = function (number, start, end) {
            if (end === undefined) {
                end = start;
                start = 0;
            }
            return number >= Math.min(start, end) && number < Math.max(start, end);
        };
        /**
         * 产生一个包括 lower 与 upper 之间的数。
         * 如果只提供一个参数返回一个0到提供数之间的数。 
         * 如果 floating 设为 true，或者 lower 或 upper 是浮点数，结果返回浮点数。
         *
         * @param {number}  lower     要检查的值
         * @param {number}  upper     开始范围
         * @param {boolean} floating  结束范围
         * @returns
         */
        /*eslint complexity: ["error", { "max": 12 }]*/
        this.random = function (lower, upper, floating) {
            var INFINITY = 1 / 0,
                MAX_INTEGER = Number.MAX_VALUE || 1.7976931348623157e308;

            if (floating === undefined) {
                if (typeof upper === "boolean") {
                    floating = upper;
                    upper = undefined;
                } else if (typeof lower === "boolean") {
                    floating = lower;
                    lower = undefined;
                }
            }
            if (lower === undefined && upper === undefined) {
                lower = 0;
                upper = 1;
            } else {
                lower = toFinite(lower);
                if (upper === undefined) {
                    upper = lower;
                    lower = 0;
                } else {
                    upper = toFinite(upper);
                }
            }
            if (lower > upper) {
                var temp = lower;
                lower = upper;
                upper = temp;
            }
            if (floating || lower % 1 || upper % 1) {
                return Math.min(
                    lower +
                    Math.random() *
                    (upper -
                        lower +
                        parseFloat("1e-" + ((Math.random() + "").length - 1))),
                    upper
                );
            }
            return lower + Math.floor(Math.random() * (upper - lower + 1));

            function toFinite(value) {
                if (!value) {
                    return value === 0 ? value : 0;
                }
                value = toNumber(value);
                if (value === INFINITY || value === -INFINITY) {
                    var sign = value < 0 ? -1 : 1;
                    return sign * MAX_INTEGER;
                }
                return isNaN(value) ? 0 : value;
            }

            function isNaN(value) {
                return isNumber(value) && value !== +value;
            }

            function isNumber(value) {
                return typeof value === 'number' ||
                    isObjectLike(value) && Object.prototype.toString.call(value) === '[object Number]';
            }
        };
        /**
         * 确认所给值只在min,max之间
         * 如果所给值是在min,max之间，那么就直接返回该值
         * 否则返回与所给值最接近的min值或max值
         *
         * @param {number}  number  被限制的值
         * @param {number}  lower   下限
         * @param {number}  upper   上限
         * @returns
         */
        this.clamp = function (number, lower, upper) {
            if (upper === undefined) {
                upper = lower;
                lower = undefined;
            }
            if (upper !== undefined) {
                upper = toNumber(upper);
                upper = isNaN(upper) ? 0 : upper;
            }
            if (lower !== undefined) {
                lower = toNumber(lower);
                lower = isNaN(lower) ? 0 : lower;
            }
            return baseClamp(toNumber(number), lower, upper);

            function baseClamp(number, lower, upper) {
                if (!isNaN(number)) {
                    if (upper !== undefined) {
                        number = number <= upper ? number : upper;
                    }
                    if (lower !== undefined) {
                        number = number >= lower ? number : lower;
                    }
                }
                return number;
            }
        };

        function toNumber(value) {
            if (typeof value === "number") {
                return value;
            }
            if (isSymbol(value)) {
                return 0 / 0;
            }
            return Number(value);
        }

        function isSymbol(value) {
            return typeof value === "symbol" || isObjectLike(value) && Object.prototype.toString.call(value) === "[object Symbol]";
        }

        function isObjectLike(value) {
            return typeof value === "object" && value !== null;
        }

    }]);
angular.module('xue.util.object', [])
    .service('xueUtilObject', [function () {
        var self = this;
        /**
         * json中把空对象移除
         *
         * @param {any} json
         * @returns
         */
        this.removeEmptyField = function (json) {
            var newJson = {};
            for (var key in json) {
                if (json[key]) {
                    newJson[key] = json[key];
                }
            }
            return newJson;
        };
        /**
         * json中把数组的对象中的空属性移除
         *
         * @param {any} json
         * @returns
         */
        this.removeEmptyParams = function (array) {
            var newArray = [];
            for (var i = 0, len = array.length; i < len; i++) {
                var newObj = {};
                for (var j in array[i]) {
                    if (array[i][j]) {
                        newObj[j] = array[i][j];
                    }
                }
                newArray.push(newObj);
            }
            return newArray;
        };
        /**
         * 判断两个对象值是否相等(仅用于参数是对象的情况)
         *
         * @param {object} objA   
         * @param {object} objB
         * @returns 成功true，失败false
         */
        /*eslint complexity: ["error", { "max": 8 }]*/
        this.isObjectValueEqual = function (objA, objB) {
            if (typeof objA !== "object" || typeof objB !== "object") {
                return false;
            }
            var aProps = Object.getOwnPropertyNames(objA);
            var bProps = Object.getOwnPropertyNames(objB);
            if (aProps.length !== bProps.length) {
                return false;
            }
            for (var i = 0, len = aProps.length; i < len; i++) {
                var propName = aProps[i];
                var propA = objA[propName];
                var propB = objB[propName];
                if (typeof propA === 'object') {
                    if (self.isObjectValueEqual(propA, propB)) {
                        return true;
                    }
                    return false;
                } else if (propA !== propB) {
                    return false;
                }
            }
            return true;
        };
        /**
         * 根据value找到对象的key路径值
         *
         * @param {object} obj   
         * @param {any}    value
         * @returns 成功返回的是路径数组，失败则是undefined
         */
        this.searchKeys = function (obj, value) {
            for (var key in obj) {
                if (obj[key]) {
                    if (obj[key] === value || self.isObjectValueEqual(obj[key], value)) {
                        return key.split(",");
                    }
                    if (typeof obj[key] === 'object') {
                        var temp = self.searchKeys(obj[key], value);
                        if (temp) {
                            return (key + "," + temp).split(",");
                        }
                    }
                }
            }
        };
        /**
         * 根据key路径找到对象的value值
         *
         * @param {object} obj  
         * @param {array}  pathArr 
         * @param {number} index   一般不用传（默认为0）
         * @returns 成功返回的是value，失败则是undefined
         */
        this.findValByPath = function (obj, pathArr, index) {
            if (typeof obj !== "object" || Object.prototype.toString.call(pathArr) !== '[object Array]') {
                throw new Error("参数有误");
            }
            if (!pathArr.length) {
                return obj;
            }
            index = index || 0;
            if (index >= pathArr.length - 1) {
                return obj[pathArr[index]];
            }
            return self.findValByPath(obj[pathArr[index]], pathArr, ++index);
        };
        /**
         * object键值对换(如果 object 有重复的值，后面的值会覆盖前面的值)
         *
         * @param {object} obj
         * @returns newObj 返回新的键值对换后的对象
         */
        this.reverseObject = function (obj) {
            var newObj = {};
            for (var key in obj) {
                newObj[obj[key]] = key;
            }
            return newObj;
        }
    }]);
angular.module('xue.util.properties', [])
    .service('xueUtilProperty', [function () {

    }]);
angular.module('xue.util.seq', [])
    .service('xueUtilSeq', [function () {

    }]);
angular.module('xue.util.string', [])
    .service('xueUtilString', [function () {
        //var self = this;
        var reg = /^[A-Za-z]+$/;
        // 判断字符串是否为英文
        function checkEng(num) {
            return reg.test(num);
        }
        function replaceEndIndex(string) {
            for (var i = string.length - 1; i >= 0; i--) {
                if (/[A-Za-z0-9]+/.test(string[i])) {
                    return i;
                }
            }
            return -1;
        }
        function replaceStratIndex(string) {
            for (var i = 0; i < string.length; i++) {
                if (/[A-Za-z0-9]+/.test(string[i])) {
                    return i;
                }
            }
            return -1;
        }
        function lowerCaseHandle(string) {
            var arr = [];
            var index = 0;
            for (var i = 1; i < string.length; i++) {
                if (/[A-Z]+/.test(string[i]) && /[a-z]+/.test(string[i - 1])) {
                    arr.push(string.slice(index, i));
                    index = i;
                }
            }
            arr.push(string.slice(index, string.length));
            return arr;
        }
        /**
         * 转换字符串string首字母为大写，剩下为小写
         * 
         * @param {any} string
         * @returns
         */
        this.capitalize = function (string) {
            var str = string ? string.toString().toLowerCase() : '';
            if (str.length < 2) {
                return str.charAt(0).toUpperCase();
            }
            return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        };
        /**
         * 检查字符串string是否包含target
         * 
         * @param {any} String
         * @param {any} target //目标字符串
         * @param {any} position //检查的位置
         * @returns
         */
        this.endsWith = function (string, target, position) {
            if (!string || !target) {
                return false;
            }
            var str = string.toString();
            var tar = target.toString();
            var pos = position ? parseInt(position, 0) : 0;
            var index = str.indexOf(tar);
            if (index !== -1 && (typeof position === 'undefined' || index === pos)) {
                return true;
            }
            return false;
        };
        /**
         * 转换字符串string以空格分开单词
         * 
         * @param {any} String
         * @returns
         * 返回一个数组
         */
        this.lowerCase = function (string) {
            string = string.toString().replace(/[^A-Za-z]/g, ' ');
            var temp = string.split(' ');
            var arr = [];
            for (var i = 0; i < temp.length; i++) {
                if (temp[i]) {
                    if (/[A-Z]+/.test(temp[i].slice(1)) && /[a-z]+/.test(temp[i].slice(1))) {
                        arr = arr.concat(lowerCaseHandle(temp[i]));
                    } else if (temp[i].length === 2 && /[A-Z]+/.test(temp[i].slice(1))) {
                        arr.push(temp[i][0]);
                        arr.push(temp[i][1]);
                    } else {
                        arr.push(temp[i]);
                    }
                }
            }
            return arr;
        };
        /**
         * 字符串头部/尾部补充
         * @param {any} String
         * @param {any} maxLength //填充的长度
         * @param {any} type   // 填充类型 start/end
         * @param {any} fillString  // 填充的字符串
         * padStart('ab',4,'x');->xxab
         * @returns
         */
        this.padChars = function (string, maxLength, type, fillString) {
            if (fillString === undefined) {
                fillString = ' ';
            }
            
            if(Object.prototype.toString.call(fillString) !== "[object String]") throw new TypeError('fillString must be String')
            if(string.length >= maxLength) return String(string)

            var fillLength = maxLength - string.length, 
                times = Math.ceil(fillLength / fillString.length)
        
            while (times--) { 
                fillString += fillString
                    if(times === 1) {
                        fillString += fillString;
                    }     
            }
            if (type == "start") {
                return fillString.slice(0, fillLength) + string;
            } else {
                return string + fillString.slice(0, fillLength);
            }
            
        };
        /**
         * 格式化文字
         *
         * @param {any} text
         * @param {any} len
         */
        this.formatterText = function (text, len) {
            var newText = text.trim();
            var string = '';
            if (newText.length) {
                var length = len || 10;
                if (newText.length > length) {
                    string = newText.substring(0, length) + '...';
                } else {
                    string = newText;
                }
            }
            return string;
        };
        /**
         * 格式化长文字（中间省略）
         * 
         * @param {any} text 
         * @param {any} len 
         */
        this.formatLongText = function (text, len) {
            var newText = text.trim();
            var string = '';
            if (newText.length) {
                var length = len || (parseInt(len, 0) > 0 ? parseInt(len, 0) : 5);
                if (newText.length > length * 2) {
                    string = newText.substring(0, length) + '...' + newText.substring(newText.length - length, newText.length);
                } else {
                    string = newText;
                }
            }
            return string;
        };
        /**
         * 获取字节长度（英文数字占1个字符，中文汉字占2个字符）
         * @param {string} str 
         */
        this.getByteLen = function (str) {
            var len = 0;
            try {
                for (var i = 0; i < str.length; i++) {
                    var c = str.charCodeAt(i);
                    //单字节加1
                    if (c >= 0x0001 && c <= 0x007e || c >= 0xff60 && c <= 0xff9f) {
                        len++;
                    } else {
                        len += 2;
                    }
                }
            } catch (e) {
                len = 0;
            }
            return len;
        };
        /**
        * 过滤字符串中html标签（防止ssl攻击）
        * @param {string} str 
        */
        this.filterHtml = function (str) {
            var string = '';
            try {
                string = str.replace(/&nbsp;/ig, '').replace(/<[^<>]+>/g, '');
            } catch (e) {
                string = '';
            }
            return string;
        };
        /**
        * 重复 N 次给定字符串
        * @param {string} string 
        * @param {string} len
        */
        this.repeat = function (string, len) {
            var newString = '';
            len = len ? len : 0;
            for (var i = 0; i < len; i++) {
                newString += string;
            }
            return newString;
        };
        /**
        * 根据cahr 拆分字符串string
        * @param {string} string 
        * @param {string} char
        * @param {string} len
        */
        this.split = function (string, char, len) {
            string = string.toString();
            if (!char) {
                return string;
            }
            var temp = string.split(char);
            if (!len) {
                return temp;
            }
            if (len < temp.length) {
                temp = temp.splice(0, len);
            }
            return temp;
        };
        /**
        * string字符串中移除前面和后面的 空格 或 指定的字符
        * @param {string} string 
        * @param {string} chars
        */
        this.replace = function (string, chars) {
            string = string.toString();
            chars = chars ? '[' + chars + ']' : '';
            string = string.replace(new RegExp(chars, 'g'), '');
            return string.trim();
        };
        /**
        * string字符串中移除后面的空格或指定的字符
        * @param {string} string 
        * @param {string} chars
        */
        this.replaceEnd = function (string, chars) {
            if (!string) {
                return '';
            }
            chars = chars ? '[' + chars + ']' : '';
            var index = replaceEndIndex(string);
            var newString = '';
            if (index !== -1) {
                var start = string.slice(0, index);
                var end = string.slice(index, string.length).replace(new RegExp(chars, 'g'), '').trim();
                newString = start + end;
            } else {
                newString = string.replace(new RegExp(chars, 'g'), '').trim();
            }
            return newString;
        };
        /**
        * string字符串中移除前面的空格或指定的字符
        * @param {string} string 
        * @param {string} chars
        */
        this.replaceStrat = function (string, chars) {
            if (!string) {
                return '';
            }
            chars = chars ? '[' + chars + ']' : '';
            var index = replaceStratIndex(string);
            var newString = '';
            if (index !== -1) {
                var start = string.slice(0, index).replace(new RegExp(chars, 'g'), '').trim();
                var end = string.slice(index, string.length);
                newString = start + end;
            } else {
                newString = string.replace(new RegExp(chars, 'g'), '').trim();
            }
            return newString;
        };
    }]);
angular.module('xue.util',[
    'xue.util.array','xue.util.collection','xue.util.date','xue.util.lang',
    'xue.util.math','xue.util.methods','xue.util.number','xue.util.object',
    'xue.util.properties','xue.util.seq','xue.util.string','xue.util.function']);
angular.module("xue/template/cascader/cascader.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/cascader/cascader.html",
    "<div class=\"xui-cascader-container\">\n" +
    "    <div class=\"cascader-input-wrapper\" \n" +
    "        ng-click=\"cascaderCtrl.toggleSelect($event)\" \n" +
    "        ng-mouseover=\"cascaderCtrl.showDelete = true\" \n" +
    "        ng-mouseleave=\"cascaderCtrl.showDelete = false\">\n" +
    "            <input ng-model=\"ngVal\" type=\"text\" class=\"cascader-input\" \n" +
    "                ng-style=\"cascaderConfig.css.inputStyle\" \n" +
    "                ng-class=\"cascaderConfig.css.inputClassName\"\n" +
    "                placeholder=\"请选择\" title=\"{{ ngVal }}\" readonly>\n" +
    "            <i class=\"cascader-icon fa fa-close\" ng-if=\"cascaderCtrl.showDelete && !!ngVal\" title=\"清空\" ng-click=\"cascaderCtrl.clear($event)\"></i>\n" +
    "            <i class=\"cascader-icon fa fa-caret-down\" ng-if=\"!(cascaderCtrl.showDelete && !!ngVal)\" ng-class=\"{'expanded': cascaderCtrl.showSelect}\"></i>\n" +
    "    </div>\n" +
    "    <div class=\"cascader-select-wrapper\" \n" +
    "        ng-show=\"cascaderCtrl.showSelect\"\n" +
    "        ng-mouseover=\"cascaderCtrl.onSelectDiv = true\" \n" +
    "        ng-mouseleave=\"cascaderCtrl.onSelectDiv = false\">\n" +
    "            <ul class=\"select-list\" ng-class=\"cascaderConfig.css.panelClassName\"\n" +
    "                ng-style=\"cascaderConfig.css.panelStyle\" ng-if=\"list.length\" \n" +
    "                ng-repeat=\"list in cascaderCtrl.selectList\">\n" +
    "                    <li class=\"select-item\" \n" +
    "                        title=\"{{ item[cascaderConfig.textField] }}\"\n" +
    "                        ng-class=\"{'active': item[cascaderConfig.valueField] == cascaderCtrl.selectValue[item.depth]}\"\n" +
    "                        ng-repeat=\"item in list\" ng-click=\"cascaderCtrl.clickItem(item)\">\n" +
    "                            {{ item[cascaderConfig.textField] }}\n" +
    "                            <i class=\"cascader-icon fa fa-angle-right\" ng-if=\"!item.isLeaf\"></i>\n" +
    "                    </li>\n" +
    "            </ul>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("xue/template/counter/counter.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/counter/counter.html",
    "<div class=\"xue-counter-wrap {{counterConfig.size}}\" ng-class=\"{'disabled':counterConfig.disabled}\">\n" +
    "    <span ng-click=\"gxCounterCtrl.changeByBtn('reduce',params)\" class=\"reduce\"\n" +
    "        ng-class=\"{'disabled':counterConfig.disabled||gxCounterCtrl.number==counterConfig.min}\">-</span>\n" +
    "    <span ng-show=\"counterConfig.type==1\" class=\"text\" ng-model=\"gxCounterCtrl.number\">\n" +
    "        {{gxCounterCtrl.number}} {{counterConfig.suffix}}</span>\n" +
    "    <span ng-show=\"counterConfig.type==2\" class=\"input\" ng-class=\"{'hasSuffix':counterConfig.suffix}\">\n" +
    "        <input ng-disabled=\"counterConfig.disabled\" ng-blur=\"gxCounterCtrl.inputBlur()\"\n" +
    "            ng-focus=\"gxCounterCtrl.inputFocus()\" ng-change=\"gxCounterCtrl.inputChange($event)\"\n" +
    "            ng-model=\"gxCounterCtrl.number\" />\n" +
    "        <span ng-if=\"counterConfig.suffix\">{{counterConfig.suffix}}</span></span>\n" +
    "    <span ng-click=\"gxCounterCtrl.changeByBtn('add',params)\" class=\"add\"\n" +
    "        ng-class=\"{'disabled':counterConfig.disabled||gxCounterCtrl.number==counterConfig.max}\">+</span>\n" +
    "</div>");
}]);

angular.module("xue/template/datepicker/datepicker.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/datepicker/datepicker.html",
    "<div class=\"xui-datepicker-wrap\">\n" +
    "    <div class=\"input-wrap\" ng-class=\"dateConfig.element.targetWrapClassName\" ng-style=\"dateConfig.element.targetWrapStyle\">\n" +
    "        <span class=\"prefix-input\" ng-class=\"{true: 'time-icon'}[xlDatepickerCtrl.type == 2 || xlDatepickerCtrl.type == 3]\"></span>\n" +
    "        <input class=\"type-ipt\" ng-click=\"xlDatepickerCtrl.optPanel($event)\" ng-model=\"$parent.ngVal\" ng-disabled=\"$parent.ngDisabled\"\n" +
    "        ng-if=\"dateConfig.element.type == 'input' && !dateConfig.fixed\" type=\"text\" ng-blur=\"xlDatepickerCtrl.ngValBlur()\">\n" +
    "        <span ng-class=\"{true:'sufix-input'}[!!ngVal && !ngDisabled]\" title=\"清空\" ng-click=\"xlDatepickerCtrl.clear()\"></span>\n" +
    "    </div>\n" +
    "    \n" +
    "    <img class=\"type-img\" ng-click=\"xlDatepickerCtrl.optPanel($event)\" \n" +
    "        ng-if=\"dateConfig.element.type == 'img' && !dateConfig.fixed\" src=\"\" alt=\"\">\n" +
    "\n" +
    "    <span class=\"type-span\" ng-click=\"xlDatepickerCtrl.optPanel($event)\" \n" +
    "        ng-if=\"dateConfig.element.type == 'span' && !dateConfig.fixed\" ></span>\n" +
    "\n" +
    "    <div id=\"{{'xlDatePicker_'+dateConfig.id}}\" class=\"xl-datepicker-content\" ng-class=\"dateConfig.element.contentWrapClassName\" ng-style=\"dateConfig.element.contentWrapStyle\">\n" +
    "        <div class=\"show-date-wrap\" ng-show=\"xlDatepickerCtrl.type == 1\">\n" +
    "            <span class=\"show-ipt-wrap\">\n" +
    "                <input type=\"text\" class=\"show-ipt\" placeholder=\"选择日期\" ng-model=\"xlDatepickerCtrl.showDate\" ng-blur=\"xlDatepickerCtrl.changeNgVal()\">\n" +
    "            </span>\n" +
    "            <span class=\"show-ipt-wrap\">\n" +
    "                <input type=\"text\" class=\"show-ipt\" placeholder=\"选择时间\" ng-click=\"xlDatepickerCtrl.timeOpt.optTimePanel()\" ng-model=\"xlDatepickerCtrl.showTime\" ng-blur=\"xlDatepickerCtrl.changeNgVal()\">\n" +
    "                <div class=\"select-time-wrap\" ng-show=\"xlDatepickerCtrl.timeOpt.showPanel\">\n" +
    "                    <div class=\"select-time-content\">\n" +
    "                        <div class=\"time-scrollbar\">\n" +
    "                            <ul ng-style=\"{'top':-1*(xlDatepickerCtrl.timeOpt.hourObj.index*30)+'px'}\" id=\"hourObj\">\n" +
    "                                <li ng-repeat=\"item in xlDatepickerCtrl.timeOpt.hourObj.items\" ng-class=\"{true:'active'}[xlDatepickerCtrl.timeOpt.hourObj.index == $index]\"\n" +
    "                                ng-click=\"xlDatepickerCtrl.timeOpt.clickNumber(xlDatepickerCtrl.timeOpt.hourObj,$index)\">{{item}}</li>\n" +
    "                            </ul>\n" +
    "                        </div>\n" +
    "                        <div class=\"time-scrollbar\">\n" +
    "                            <ul ng-style=\"{'top':-1*(xlDatepickerCtrl.timeOpt.minuteObj.index*30)+'px'}\" id=\"minuteObj\">\n" +
    "                                <li ng-repeat=\"item in xlDatepickerCtrl.timeOpt.minuteObj.items\" ng-class=\"{true:'active'}[xlDatepickerCtrl.timeOpt.minuteObj.index == $index]\"\n" +
    "                                ng-click=\"xlDatepickerCtrl.timeOpt.clickNumber(xlDatepickerCtrl.timeOpt.minuteObj,$index)\">{{item}}</li>\n" +
    "                            </ul>\n" +
    "                        </div>\n" +
    "                        <div class=\"time-scrollbar\">\n" +
    "                            <ul ng-style=\"{'top':-1*(xlDatepickerCtrl.timeOpt.secondObj.index*30)+'px'}\" id=\"secondObj\">\n" +
    "                                <li ng-repeat=\"item in xlDatepickerCtrl.timeOpt.secondObj.items\" ng-class=\"{true:'active'}[xlDatepickerCtrl.timeOpt.secondObj.index == $index]\"\n" +
    "                                ng-click=\"xlDatepickerCtrl.timeOpt.clickNumber(xlDatepickerCtrl.timeOpt.secondObj,$index)\">{{item}}</li>\n" +
    "                            </ul>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"select-time-footer\">\n" +
    "                        <span class=\"confirm\" ng-click=\"xlDatepickerCtrl.timeOpt.confirm()\">确定</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </span>\n" +
    "        </div>\n" +
    "        <div class=\"xl-content-header\">\n" +
    "            <i class=\"last-year xl-d-arrow-left\" ng-click=\"xlDatepickerCtrl.changeYearMonth(-1,0)\" title=\"上一年\"></i>\n" +
    "            <i class=\"last-month xl-arrow-left\" ng-click=\"xlDatepickerCtrl.changeYearMonth(0,-1)\" title=\"上一月\"></i>\n" +
    "            <span class=\"current-year\" ng-show=\"!xlDatepickerCtrl.showSelectYear\" ng-click=\"xlDatepickerCtrl.selectYearMonth($event,'year')\">{{xlDatepickerCtrl.currentYear}}年</span>\n" +
    "            <span class=\"current-year\" ng-show=\"xlDatepickerCtrl.showSelectYear\"><input type=\"text\" ng-blur=\"xlDatepickerCtrl.selectYearMonthBlur($event,'year')\" ng-model=\"xlDatepickerCtrl.currentYear\" >年</span>\n" +
    "            <span class=\"current-month\" ng-show=\"!xlDatepickerCtrl.showSelectMonth\" ng-click=\"xlDatepickerCtrl.selectYearMonth($event,'month')\">{{xlDatepickerCtrl.currentMonth}}月</span>\n" +
    "            <span class=\"current-month\" ng-show=\"xlDatepickerCtrl.showSelectMonth\"><input type=\"text\"ng-blur=\"xlDatepickerCtrl.selectYearMonthBlur($event,'month')\" ng-model=\"xlDatepickerCtrl.currentMonth\">月</span>\n" +
    "            <i class=\"next-year xl-d-arrow-right\" ng-click=\"xlDatepickerCtrl.changeYearMonth(1,0)\" title=\"下一年\"></i>\n" +
    "            <i class=\"next-month xl-arrow-right\" ng-click=\"xlDatepickerCtrl.changeYearMonth(0,1)\" title=\"下一月\"></i>\n" +
    "        </div>\n" +
    "        <div class=\"xl-content-body\">\n" +
    "            <table class=\"xl-datepicker-table\">\n" +
    "                <tr>\n" +
    "                    <th ng-repeat=\"week in dateConfig.language.weeks\">\n" +
    "                        <span class=\"\">{{week}}</span>\n" +
    "                    </th>\n" +
    "                </tr>\n" +
    "                <tr ng-repeat=\"item in xlDatepickerCtrl.currentTable\">\n" +
    "                    <td ng-repeat=\"list in item\" ng-click=\"xlDatepickerCtrl.selectDate(list,$event)\" ng-dblclick=\"xlDatepickerCtrl.hidePanel()\"\n" +
    "                        ng-class=\"{true: 'disabled-select'}[xlDatepickerCtrl.notInRange(list)]\">\n" +
    "                        <span ng-class=\"{\n" +
    "                            'not-current': list.type != 0,\n" +
    "                            'active': list.year == xlDatepickerCtrl.selectedDate.year && list.month == xlDatepickerCtrl.selectedDate.month && list.day == xlDatepickerCtrl.selectedDate.day,\n" +
    "                            'current': list.year == xlDatepickerCtrl.currentDate.year && list.month == xlDatepickerCtrl.currentDate.month && list.day == xlDatepickerCtrl.currentDate.day\n" +
    "                        }\">{{list.day}}</span>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "        <div class=\"xl-content-footer\">\n" +
    "            <button class=\"select-now\" ng-click=\"xlDatepickerCtrl.getNow()\">现在</button>\n" +
    "            <button class=\"confirm-date\" ng-click=\"xlDatepickerCtrl.confirm()\">确定</button>\n" +
    "        </div>\n" +
    "        <div class=\"xl-popper-arrow\"></div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"{{'xlTimePicker_'+dateConfig.id}}\" class=\"xl-timepicker-content\" ng-class=\"dateConfig.element.contentWrapClassName\" ng-style=\"dateConfig.element.contentWrapStyle\">\n" +
    "        <div class=\"xl-content-body\" ng-if=\"dateConfig.timeSelectMode == 0\">\n" +
    "            <div class=\"select-time-content\">\n" +
    "                <div class=\"time-scrollbar\">\n" +
    "                    <ul ng-style=\"{'top':-1*(xlDatepickerCtrl.timeOpt.hourObj.index*30)+'px'}\" id=\"hourObj\">\n" +
    "                        <li ng-repeat=\"item in xlDatepickerCtrl.timeOpt.hourObj.items\" ng-class=\"{true:'active'}[xlDatepickerCtrl.timeOpt.hourObj.index == $index]\"\n" +
    "                        ng-click=\"xlDatepickerCtrl.timeOpt.clickNumber(xlDatepickerCtrl.timeOpt.hourObj,$index)\">{{item}}</li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "                <div class=\"time-scrollbar\">\n" +
    "                    <ul ng-style=\"{'top':-1*(xlDatepickerCtrl.timeOpt.minuteObj.index*30)+'px'}\" id=\"minuteObj\">\n" +
    "                        <li ng-repeat=\"item in xlDatepickerCtrl.timeOpt.minuteObj.items\" ng-class=\"{true:'active'}[xlDatepickerCtrl.timeOpt.minuteObj.index == $index]\"\n" +
    "                        ng-click=\"xlDatepickerCtrl.timeOpt.clickNumber(xlDatepickerCtrl.timeOpt.minuteObj,$index)\">{{item}}</li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "                <div class=\"time-scrollbar\" ng-class=\"{true:'disabled-select'}[xlDatepickerCtrl.type == 3]\">\n" +
    "                    <ul ng-style=\"{'top':-1*(xlDatepickerCtrl.timeOpt.secondObj.index*30)+'px'}\" id=\"secondObj\">\n" +
    "                        <li ng-repeat=\"item in xlDatepickerCtrl.timeOpt.secondObj.items\" ng-class=\"{true:'active'}[xlDatepickerCtrl.timeOpt.secondObj.index == $index]\"\n" +
    "                        ng-click=\"xlDatepickerCtrl.timeOpt.clickNumber(xlDatepickerCtrl.timeOpt.secondObj,$index,'secondObj')\">{{item}}</li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"xl-popper-arrow\"></div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("xue/template/menu/menu.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/menu/menu.html",
    "<div class=\"xui-menu-wrap\" ng-class=\"{true:'support-search'}[menuConfig.search]\">\n" +
    "    <div class=\"menu-search\" ng-if=\"menuConfig.search\">\n" +
    "        <i class=\"menu-search-icon xui-icon xui-icon-md-search\"></i>\n" +
    "        <input type=\"text\" class=\"menu-ipt\" ng-model=\"vm.searchValue\" ng-blur=\"vm.hideSearchBox()\">\n" +
    "        <div class=\"menu-list\" ng-show=\"!!vm.searchValue\"\n" +
    "            ng-mouseover=\"vm.onSearchListDiv = true\"\n" +
    "            ng-mouseleave=\"vm.onSearchListDiv = false\">\n" +
    "            <ul>\n" +
    "                <li ng-click=\"vm.select(item)\" ng-repeat=\"item in vm.menuList | filter : {menuName:vm.searchValue}\">{{item[menuConfig.oneDimenName]}}</li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"menu-item-wrap\">\n" +
    "        <div class=\"menu-item\" ng-repeat=\"item in menuConfig.data\">\n" +
    "            <div class=\"item-title\" ng-click=\"clickRouter(item)\" ng-class=\"{true:'active'}[item[menuConfig.routerId] == menuConfig.selectId]\">\n" +
    "                <div class=\"title-icon\" ng-if=\"menuConfig.showOneDimenIcon\">\n" +
    "                    <img alt=\"\" ng-if=\"!!item[menuConfig.oneDimenIcon]\" \n" +
    "                        ng-src=\"{{menuConfig.imagePrefix+item[menuConfig.oneDimenIcon]+menuConfig.imageSuffix}}\">\n" +
    "                    <i ng-if=\"!item[menuConfig.oneDimenIcon]\" class=\"fa fa-star\"></i>\n" +
    "                </div>\n" +
    "                <div class=\"title-content\" title=\"{{item[menuConfig.oneDimenName]}}\">\n" +
    "                    {{item[menuConfig.oneDimenName]}}\n" +
    "                </div>\n" +
    "                <div class=\"title-arrow\" ng-if=\"!!item[menuConfig.childrenName]\">\n" +
    "                    <i ng-if=\"!item.open\" class=\"xui-icon xui-icon-md-arrow-forward\"></i>\n" +
    "                    <i ng-if=\"!!item.open\" class=\"xui-icon xui-icon-md-arrow-down\"></i>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"item-content\" ng-show=\"!!item.open && !!item[menuConfig.childrenName]\">\n" +
    "                <ul>\n" +
    "                    <li ng-repeat=\"children in item[menuConfig.childrenName]\" title=\"{{children[menuConfig.twoDimenName]}}\" \n" +
    "                    ng-click=\"clickRouter(children)\" ng-class=\"{true:'active'}[children[menuConfig.routerId] == menuConfig.selectId]\">\n" +
    "                        <span>{{children[menuConfig.twoDimenName]}}</span>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("xue/template/notice/notice.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/notice/notice.html",
    "<div class=\"xue-notice-container\" ng-mouseenter=\"gxNoticeCtrl.mouseenter()\" ng-mouseleave=\"gxNoticeCtrl.mouseleave()\"> \n" +
    "    <div class=\"xue-notice-icon\" title=\"{{noticeConfig.title || '消息提醒'}}\">\n" +
    "        <i class=\"xui-icon xui-icon-md-notifications-outline notice-icon\"></i>\n" +
    "        <!-- <img class=\"notice-icon\" src=\"\" alt=\"\" onerror=\"javascript:this.src='common/directives/images/gx_notice/warn.png'\"> -->\n" +
    "        <span class=\"notice-count\" title=\"{{noticeConfig.count}}\" ng-show=\"noticeConfig.count>0\">{{noticeConfig.count>99?'99+':noticeConfig.count}}</span>\n" +
    "    </div>\n" +
    "    <div class=\"xue-notice-content-wrap\" id=\"{{noticeConfig.modalId}}\" ng-mouseenter=\"gxNoticeCtrl.mouseenter()\" ng-mouseleave=\"gxNoticeCtrl.mouseleave()\">\n" +
    "        <div class=\"xue-notice-content\" >\n" +
    "            <div class=\"notice-tab\">\n" +
    "                <div class=\"tab-item\" ng-repeat=\"item in noticeConfig.tabItem\" ng-class=\"{true:'active'}[noticeConfig.selectTabId == item.id]\" \n" +
    "                ng-click=\"gxNoticeCtrl.tabItemClick(item)\">\n" +
    "                    <span class=\"item-name\">{{item.name}}\n" +
    "                        <span class=\"item-count\" ng-class=\"{'circle':'circle','number':''}[noticeConfig.tabMark]\" ng-show=\"item.count>0\" title=\"{{item.count}}\">\n" +
    "                            {{noticeConfig.tabMark == 'number' ? (item.count>99?'99+':item.count) : ''}}\n" +
    "                        </span>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"notice-content\" scroll-bottom=\"noticeConfig.loadNextPage()\">\n" +
    "                <ul>\n" +
    "                    <li class=\"content-wrap\" ng-if=\"noticeConfig.noticeList.length\" ng-click=\"noticeConfig.itemClick(item)\"\n" +
    "                        ng-repeat=\"item in noticeConfig.noticeList | limitTo : noticeConfig.listMaxLen\">\n" +
    "                        <span class=\"content\" title=\"{{item[noticeConfig.formatField.completeContent] || item.completeContent || item[noticeConfig.formatField.content] || item.content}}\">\n" +
    "                            【<b ng-if=\"noticeConfig.formatField.contentTitle\" class=\"content-title\" title=\"{{item[noticeConfig.formatField.contentTitle] || item.formatField.contentTitle}}\">\n" +
    "                                {{item[noticeConfig.formatField.contentTitle] || item.formatField.contentTitle}}</b>】\n" +
    "                            {{item[noticeConfig.formatField.content] || item.content}}\n" +
    "                        </span>\n" +
    "                        <span class=\"time\">{{item[noticeConfig.formatField.time] || item.time}}</span>\n" +
    "                    </li>\n" +
    "                    <li class=\"content-type-wrap\" ng-if=\"noticeConfig.noticeTypeList.length\" ng-click=\"noticeConfig.itemClick(item)\"\n" +
    "                        ng-repeat=\"item in noticeConfig.noticeTypeList | limitTo : noticeConfig.listMaxLen\">\n" +
    "                        <span class=\"content-type\" title=\"{{item[noticeConfig.formatField.contentType] || item.contentType}}\">\n" +
    "                            <!-- <b ng-if=\"noticeConfig.formatField.contentTitle\">【{{item[noticeConfig.formatField.contentTitle] || item.formatField.contentTitle}}】</b> -->\n" +
    "                            {{item[noticeConfig.formatField.contentType] || item.contentType}}\n" +
    "                        </span>\n" +
    "                        <span class=\"count\">\n" +
    "                            <i>{{(item[noticeConfig.formatField.count] || item.count)>99?'99+':(item[noticeConfig.formatField.count] || item.count)}}</i>\n" +
    "                        </span>\n" +
    "                    </li>\n" +
    "                    <li ng-if=\"!noticeConfig.noticeList.length && !noticeConfig.noticeTypeList.length\" class=\"no-data-tip\">\n" +
    "                        {{noticeConfig.emptyNoticeTip}}\n" +
    "                    </li>\n" +
    "                    <li ng-if=\"noticeConfig.noticeList.length\">\n" +
    "                        <p class=\"baseline\" ng-if=\"noticeConfig.tabItem[noticeConfig.selectTabId].count <= 99\">没有更多数据了</p>   \n" +
    "                        <P class=\"baseline\" ng-if=\"noticeConfig.tabItem[noticeConfig.selectTabId].count > 99\">更多数据请点击右下角查看全部</P> \n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "            <div class=\"notice-footer\" ng-if=\"noticeConfig.showFooter\">\n" +
    "                <div class=\"footer-item\" ng-repeat=\"item in noticeConfig.footerContent\" ng-show=\"!!item.show\" ng-click=\"item.click()\">{{item.name}}</div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"triangle\"></div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("xue/template/pagination/pager.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/pagination/pager.html",
    "<ul class=\"pager\">\n" +
    "    <li ng-class=\"{disabled: noPrevious(), previous: align}\"><a href ng-click=\"selectPage(page - 1)\">{{getText('previous')}}</a></li>\n" +
    "    <li ng-class=\"{disabled: noNext(), next: align}\"><a href ng-click=\"selectPage(page + 1)\">{{getText('next')}}</a></li>\n" +
    "</ul>");
}]);

angular.module("xue/template/pagination/pagination.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/pagination/pagination.html",
    "<ul class=\"xui-pagination-wrap\">\n" +
    "    <li ng-if=\"boundaryLinks\" class=\"page-item\" ng-class=\"{disabled: noPrevious()}\">\n" +
    "        <a href class=\"page-link\" ng-click=\"selectPage(1)\">{{getText('first')}}</a>\n" +
    "    </li>\n" +
    "    <li ng-if=\"directionLinks\" class=\"page-item\" ng-class=\"{disabled: noPrevious()}\">\n" +
    "        <a href class=\"page-link\" ng-click=\"selectPage(page - 1)\">{{getText('previous')}}</a>\n" +
    "    </li>\n" +
    "    <li ng-repeat=\"page in pages track by $index\" class=\"page-item\" ng-class=\"{active: page.active}\">\n" +
    "        <a href class=\"page-link\" ng-click=\"selectPage(page.number)\">{{page.text}}</a>\n" +
    "    </li>\n" +
    "    <li ng-if=\"directionLinks\" class=\"page-item\" ng-class=\"{disabled: noNext()}\">\n" +
    "        <a href class=\"page-link\" ng-click=\"selectPage(page + 1)\">{{getText('next')}}</a>\n" +
    "    </li>\n" +
    "    <li ng-if=\"boundaryLinks\" class=\"page-item\" ng-class=\"{disabled: noNext()}\">\n" +
    "        <a href class=\"page-link\" ng-click=\"selectPage(totalPages)\">{{getText('last')}}</a>\n" +
    "    </li>\n" +
    "</ul>");
}]);

angular.module("xue/template/select/select.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/select/select.html",
    "<div class=\"xui-select-warp\">\n" +
    "    <!-- 单选可过滤不分离 -->\n" +
    "    <div ng-if=\"!selectConfig.checkbox && selectConfig.filter && !selectConfig.separate\">\n" +
    "        <input ng-focus=\"focus()\" type=\"text\" class=\"select-show\" title=\"{{selectConfig.inputLabel}}\"\n" +
    "            ng-model=\"selectConfig.inputLabel\" ng-class=\"selectClass\" ng-style=\"showStyle\" ng-change=\"changeIpt()\"\n" +
    "            ng-disabled=\"selectConfig.disabled\" />\n" +
    "        <i class=\"select-arrow\"></i>\n" +
    "        <div class=\"select-content\" ng-style=\"contentStyle\">\n" +
    "            <ul class=\"select-list\">\n" +
    "                <li ng-click=\"onBeforeSelect(item,$event)\"\n" +
    "                    ng-class=\"{true:'active'}[item[selectConfig.valueField] == selectConfig.value]\"\n" +
    "                    ng-repeat=\"item in selectConfig.data | filter:selectConfig.inputLabel  | limitTo:selectConfig.showLimit\">\n" +
    "                    <span ng-bind=\"item[selectConfig.textField] || textFieldFormat(item)\"></span>\n" +
    "                </li>\n" +
    "                <li ng-if=\"!!!selectConfig.data || !selectConfig.data.length\" class=\"empty-data\">\n" +
    "                    <span>暂无数据</span>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "            <iframe title=\"\"></iframe>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- 单选可过滤且分离 -->\n" +
    "    <div ng-if=\"!selectConfig.checkbox && selectConfig.filter && selectConfig.separate\">\n" +
    "        <input ng-click=\"focus()\" type=\"button\" class=\"select-show\" ng-disabled=\"selectConfig.disabled\"\n" +
    "            title=\"{{selectConfig.inputLabel}}\" ng-class=\"selectClass\" ng-style=\"showStyle\" />\n" +
    "        <i class=\"select-arrow\"></i>\n" +
    "        <div class=\"select-content select-content-checkbox select-separate\" ng-style=\"contentStyle\">\n" +
    "            <div class=\"separate-wrap\" ng-class=\"{'hidden-filter':!selectConfig.enableEmpty}\">\n" +
    "                <div class=\"select-filter-wrap\">\n" +
    "                    <input type=\"text\" ng-model=\"selectConfig.myLabel\" class=\"select-filter form-control\" />\n" +
    "                </div>\n" +
    "                <!-- <i ng-click=\"clear()\" ng-if=\"selectConfig.enableEmpty\" title=\"清空\">x</i> -->\n" +
    "                <i ng-click=\"clear()\" ng-if=\"selectConfig.enableEmpty\" title=\"清空\" class=\"xui-icon xui-icon-ios-trash\"></i>\n" +
    "            </div>\n" +
    "            <ul class=\"select-list\">\n" +
    "                <li ng-click=\"onBeforeSelect(item,$event)\"\n" +
    "                    ng-class=\"{true:'active'}[item[selectConfig.valueField] == selectConfig.value]\"\n" +
    "                    ng-repeat=\"item in selectConfig.data | filter:selectConfig.myLabel  | limitTo:selectConfig.showLimit\">\n" +
    "                    <span ng-bind=\"item[selectConfig.textField] || textFieldFormat(item)\"></span>\n" +
    "                </li>\n" +
    "                <li ng-if=\"!!!selectConfig.data || !selectConfig.data.length\" class=\"empty-data\">\n" +
    "                    <span>暂无数据</span>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "            <iframe title=\"\"></iframe>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- 单选不可过滤且分离 -->\n" +
    "    <div ng-if=\"!selectConfig.checkbox && !selectConfig.filter\">\n" +
    "        <input ng-focus=\"focus()\" type=\"button\" class=\"select-show\" title=\"{{selectConfig.inputLabel}}\"\n" +
    "            ng-class=\"selectClass\" ng-style=\"showStyle\" ng-disabled=\"selectConfig.disabled\" />\n" +
    "        <i class=\"select-arrow\"></i>\n" +
    "        <div class=\"select-content\" ng-style=\"contentStyle\">\n" +
    "            <ul class=\"select-list\">\n" +
    "                <li ng-click=\"onBeforeSelect(item,$event)\"\n" +
    "                    ng-class=\"{true:'active'}[item[selectConfig.valueField] == selectConfig.value]\"\n" +
    "                    ng-repeat=\"item in selectConfig.data | limitTo:selectConfig.showLimit\">\n" +
    "                    <span ng-bind=\"item[selectConfig.textField] || textFieldFormat(item)\"></span>\n" +
    "                </li>\n" +
    "                <li ng-if=\"!!!selectConfig.data || !selectConfig.data.length\" class=\"empty-data\">\n" +
    "                    <span>暂无数据</span>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "            <iframe title=\"\"></iframe>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- 多选-->\n" +
    "    <div ng-if=\"selectConfig.checkbox && selectConfig.filter\">\n" +
    "        <input ng-click=\"focus()\" type=\"button\" class=\"select-show\" ng-disabled=\"selectConfig.disabled\"\n" +
    "            title=\"{{selectConfig.inputLabel}}\" ng-class=\"selectClass\" ng-style=\"showStyle\" />\n" +
    "        <i class=\"select-arrow\"></i>\n" +
    "        <div class=\"select-content select-content-checkbox  select-separate\" ng-style=\"contentStyle\">\n" +
    "            <div class=\"separate-wrap\">\n" +
    "                <div class=\"select-filter-wrap\">\n" +
    "                    <input type=\"text\" ng-model=\"selectConfig.myLabel\" class=\"select-filter form-control\" />\n" +
    "                </div>\n" +
    "                <!-- <i ng-click=\"clear()\" ng-if=\"selectConfig.enableEmpty\" title=\"清空\">x</i> -->\n" +
    "                <i ng-click=\"clear()\" ng-if=\"selectConfig.enableEmpty\" title=\"清空\" class=\"xui-icon xui-icon-ios-trash\"></i>\n" +
    "            </div>\n" +
    "            <ul ng-style=\"showContent\" class=\"select-list\">\n" +
    "                <li ng-click=\"selectLi(item,$event)\"\n" +
    "                    ng-class=\"{true:'active'}[!!selectConfig.checkRowsMap[item[selectConfig.valueField]]]\"\n" +
    "                    ng-repeat=\"item in selectConfig.data | filter:selectConfig.myLabel | limitTo:selectConfig.showLimit\">\n" +
    "                    <xue-checkbox ng-checked=\"selectConfig.checkRowsMap[item[selectConfig.valueField]]\"></xue-checkbox>\n" +
    "                    <span ng-bind=\"item[selectConfig.textField] || textFieldFormat(item)\"></span>\n" +
    "                </li>\n" +
    "                <li ng-if=\"!!!selectConfig.data || !selectConfig.data.length\" class=\"empty-data\">\n" +
    "                    <span>暂无数据</span>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "            <iframe title=\"\"></iframe>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- 多选不可过滤-->\n" +
    "    <div ng-if=\"selectConfig.checkbox && !selectConfig.filter\">\n" +
    "        <input ng-click=\"focus()\" type=\"button\" class=\"select-show\" ng-disabled=\"selectConfig.disabled\"\n" +
    "            ng-class=\"selectClass\" ng-style=\"showStyle\" />\n" +
    "        <i class=\"select-arrow\"></i>\n" +
    "        <div class=\"select-content  select-separate\" ng-style=\"contentStyle\">\n" +
    "            <ul ng-style=\"showContent\" class=\"select-list\">\n" +
    "                <li ng-click=\"selectLi(item,$event)\"\n" +
    "                    ng-class=\"{true:'active'}[!!selectConfig.checkRowsMap[item[selectConfig.valueField]]]\"\n" +
    "                    ng-repeat=\"item in selectConfig.data | filter:selectConfig.myLabel | limitTo:selectConfig.showLimit\">\n" +
    "                    <xue-checkbox ng-checked=\"selectConfig.checkRowsMap[item[selectConfig.valueField]]\"></xue-checkbox>\n" +
    "                    <span ng-bind=\"item[selectConfig.textField] || textFieldFormat(item)\"></span>\n" +
    "                </li>\n" +
    "                <li ng-if=\"!!!selectConfig.data || !selectConfig.data.length\" class=\"empty-data\">\n" +
    "                    <span>暂无数据</span>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "            <iframe title=\"\"></iframe>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("xue/template/steps/steps.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/steps/steps.html",
    "<div class=\"xue-steps-wrap {{stepsConfig.direction}} {{stepsConfig.theme}} {{stepsConfig.alignCenter?'is-center':''}} {{stepsConfig.size}}\">\n" +
    "    <div class=\"step-item\" ng-repeat=\"option in stepsConfig.options\"\n" +
    "        ng-class=\"{'active':option[stepsConfig.idField]==ngValue,'passed':option.passed,'future':option[stepsConfig.idField]!=ngValue && !option.passed,'last':$last}\">\n" +
    "        <div class=\"step-bar\">\n" +
    "            <div class=\"bar-icon {{stepsConfig.iconStyle}}\" ng-click=\"stepsCtrl.stepClick(option)\">\n" +
    "                <img class=\"bar-icon-inner\" ng-if=\"stepsConfig.iconStyle=='img'\" ng-src=\"{{option.imgUrl}}\" alt=\"\">\n" +
    "                <i class=\"bar-icon-inner {{option.iconfont}}\" ng-if=\"stepsConfig.iconStyle=='iconfont'\"></i>\n" +
    "                <span class=\"bar-icon-inner\" ng-if=\"stepsConfig.iconStyle=='num'\">{{$index+1}}</span>\n" +
    "                <span class=\"bar-icon-inner\"\n" +
    "                    ng-if=\"stepsConfig.iconStyle=='statusNum' && !option.passed\">{{$index+1}}</span>\n" +
    "                <i class=\"bar-icon-inner fa fa-check\"\n" +
    "                    ng-if=\"(stepsConfig.iconStyle=='statusNum'||stepsConfig.iconStyle=='strokeStatus'||stepsConfig.iconStyle=='fillStatus') && option.passed && option[stepsConfig.idField]!=ngValue\"></i>\n" +
    "            </div>\n" +
    "            <div class=\"bar-line\"></div>\n" +
    "        </div>\n" +
    "        <div class=\"step-main\">\n" +
    "            <div class=\"step-title\" ng-click=\"stepsCtrl.stepClick(option)\">{{option[stepsConfig.nameField]}}</div>\n" +
    "            <div class=\"step-description\">{{option[stepsConfig.descField]}}</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("xue/template/table/table.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/table/table.html",
    "<div class=\"xe-table-container\">\n" +
    "    <div class=\"xe-table-header\">\n" +
    "        \n" +
    "    </div>\n" +
    "    <div class=\"xe-table-content\">\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"xe-table-footer\">\n" +
    "\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("xue/template/tabs/tab.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/tabs/tab.html",
    "<li ng-class=\"[{active: active, disabled: disabled}, classes]\" class=\"nav-item\">\n" +
    "    <a class=\"nav-link\"></a>\n" +
    "</li>");
}]);

angular.module("xue/template/tabs/tabs_wrap.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/tabs/tabs_wrap.html",
    "<div class=\"xui-tabs-wrap\">\n" +
    "    <ul class=\"xui-nav-wrap\" ng-transclude></ul>\n" +
    "    <div class=\"xui-tabs-content\">\n" +
    "        <div class=\"tab-pane\" ng-repeat=\"tab in tabset.tabs\" \n" +
    "            ng-class=\"{active: tabset.active === tab.index}\"\n" +
    "            xue-tab-content=\"tab\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("xue/template/tree/tree.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("xue/template/tree/tree.html",
    "<div class=\"xui-tree-wrap\" ng-class=\"{'support-search':treeConfig.search}\">\n" +
    "    <div class=\"tree-search\" ng-if=\"treeConfig.search\">\n" +
    "        <input class=\"tree-ipt\"\n" +
    "            type=\"text\"\n" +
    "            ng-model=\"treeCtrl.searchText\"\n" +
    "            ng-change=\"treeCtrl.filterNode(treeConfig.data)\" />\n" +
    "    </div>\n" +
    "\n" +
    "    <ul class=\"tree-list\">\n" +
    "        <li id=\"{{ 'node_' + item[treeConfig.uniqueId] }}\"\n" +
    "            class=\"tree-item {{ 'level' + item.depth }}\"\n" +
    "            ng-include=\"'treeTemp'\"\n" +
    "            ng-if=\"!item.hideNode\"\n" +
    "            ng-class=\"{'leaf': item.isLeaf, 'show-line': treeConfig.showLine}\"\n" +
    "            ng-repeat=\"item in treeConfig.data\">\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "\n" +
    "    <script id=\"treeTemp\" type=\"text/ng-template\">\n" +
    "        <div class=\"tree-row\"\n" +
    "            ng-click=\"treeCtrl.clickNode(item, $event)\"\n" +
    "            ng-dblclick=\"treeCtrl.dblClickNode(item, $event)\">\n" +
    "                <span class=\"expand-icon node-align xui-icon\"\n" +
    "                    ng-click=\"treeCtrl.expandNode(item, $event)\"\n" +
    "                    ng-class=\"{'expanded': item.expanded, 'xui-icon-md-arrow-dropright': !item.isLeaf}\">\n" +
    "                </span>\n" +
    "                <span class=\"check-icon node-align\"\n" +
    "                    ng-if=\"treeConfig.showCheckbox && !item.chkDisabled\"\n" +
    "                    ng-click=\"treeCtrl.changeNode(item, $event)\">\n" +
    "                        <gx-multi-checkbox multi-type=\"item.checked\" ng-disabled=\"item.disabled\"></gx-multi-checkbox>\n" +
    "                </span>\n" +
    "                <span class=\"node-icon node-align\" ng-show=\"treeConfig.showIcon\">\n" +
    "                    <i ng-if=\"item.iconClass\" class=\"{{ item.iconClass }}\"></i>\n" +
    "                    <i ng-if=\"!item.iconClass && treeConfig.icon.commonIconClass\" class=\"{{ treeConfig.icon.commonIconClass }}\"></i>\n" +
    "                    <i ng-if=\"!item.iconClass && !treeConfig.icon.commonIconClass\" ng-class=\"{true: treeConfig.icon.parentIconClass, false: treeConfig.icon.leafIconClass}[!item.isLeaf]\"></i>\n" +
    "                </span>\n" +
    "                <span class=\"node-title node-align\"\n" +
    "                    title=\"{{ item[treeConfig.nodeName] }}\"\n" +
    "                    ng-class=\"{'active': treeCtrl.currentSelectedNode === item[treeConfig.uniqueId]}\">\n" +
    "                        {{ item[treeConfig.nodeName] }}\n" +
    "                </span>\n" +
    "                <span class=\"loading-icon node-align\" ng-show=\"item.loading\"></span>\n" +
    "        </div>\n" +
    "        <ul class=\"tree-list\" ng-if=\"item.expanded\" ng-if=\"!item.isLeaf\">\n" +
    "            <li id=\"{{ 'node_' + item[treeConfig.uniqueId] }}\"\n" +
    "                class=\"tree-item {{ 'level' + item.depth }}\" \n" +
    "                ng-include=\"'treeTemp'\"\n" +
    "                ng-if=\"!item.hideNode\"\n" +
    "                ng-class=\"{'leaf': item.isLeaf, 'show-line': treeConfig.showLine}\"\n" +
    "                ng-repeat=\"item in item[treeConfig.childName]\">\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </script>\n" +
    "</div>");
}]);
angular.module('xue.datepicker').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibDatepickerCss && angular.element(document).find('head').prepend('<style type="text/css">@charset "UTF-8";.xui-datepicker-wrap{position:relative;display:inline-block;}.xui-datepicker-wrap .input-wrap{display:inline-block;width:180px;height:28px;padding:0 15px;position:relative;border:1px solid #cee0f0;transition:border-color 0.2s cubic-bezier(0.645,0.045,0.355,1);border-radius:5px;vertical-align:middle;background:#fff;}.xui-datepicker-wrap .input-wrap:focus{border-color:#409EFF;outline:0;-webkit-boxl-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(102,175,233,0.6);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(102,175,233,0.6);}.xui-datepicker-wrap .input-wrap:hover .sufix-input{background:url(../images/del_icon.png) center center no-repeat;cursor:pointer;}.xui-datepicker-wrap .input-wrap .type-ipt{position:absolute;display:inline-block;vertical-align:middle;height:100%;line-height:28px;-webkit-appearance:none;background-color:#fff;background-image:none;box-sizing:border-box;color:#606266;font-size:14px;outline:none;width:150px;font-weight:400;border:none;padding:3px;left:18px;}.xui-datepicker-wrap .input-wrap .prefix-input{position:absolute;background:url(../images/date_icon.png) center center no-repeat;display:inline-block;width:16px;height:26px;top:0;left:2px;vertical-align:middle;}.xui-datepicker-wrap .input-wrap .prefix-input.time-icon{background:url(../images/time_icon.png) center center no-repeat;}.xui-datepicker-wrap .input-wrap .sufix-input{display:inline-block;width:14px;height:26px;position:absolute;right:2px;top:0;}.xui-datepicker-wrap .type-img{display:inline-block;}.xui-datepicker-wrap .type-span{display:inline-block;}.xl-datepicker-content{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;-khtml-user-select:none;user-select:none;position:absolute;min-width:317px;top:181px;left:294px;z-index:9999;background:#fff;display:none;box-shadow:0 0 15px 0px rgba(0,0,0,0.2);border-radius:5px;color:#606266;border:solid 1px #DCDFE6;}.xl-datepicker-content ::-webkit-input-placeholder{color:#999;}.xl-datepicker-content :-moz-placeholder{color:#999;}.xl-datepicker-content ::-moz-placeholder{color:#999;}.xl-datepicker-content :-ms-input-placeholder{color:#999;}.xl-datepicker-content .xl-popper-arrow{top:-6px;width:0;height:0;border-left:solid 6px transparent;border-right:solid 6px transparent;border-bottom:solid 6px #fff;position:absolute;left:35px;}.xl-datepicker-content .xl-popper-arrow.arrow-bottom{top:auto;border-bottom:solid 6px transparent;border-top:solid 6px #fff;}.xl-datepicker-content .xl-popper-arrow.arrow-right{left:auto;right:35px;}.xl-datepicker-content .show-date-wrap{padding:5px;border-bottom:solid 1px #DCDFE6;}.xl-datepicker-content .show-date-wrap .show-ipt-wrap{position:relative;display:inline-block;padding:5px;padding-bottom:0;}.xl-datepicker-content .show-date-wrap .show-ipt-wrap .show-ipt{height:28px;line-height:28px;border-radius:3px;width:140px;}.xl-datepicker-content .show-date-wrap .show-ipt-wrap .show-ipt:focus{border:solid 1px #409EFF;}.xl-datepicker-content .show-date-wrap .show-ipt-wrap .select-time-wrap{position:absolute;width:140px;height:180px;z-index:9999;border:solid 1px #ddd;border-radius:2px;background:#fff;top:34px;box-shadow:0 2px 5px 0 rgba(0,0,0,0.1);}.xl-datepicker-content .show-date-wrap .show-ipt-wrap .select-time-wrap .select-time-content{height:150px;display:flex;width:100%;padding:2px;font-size:12px;position:relative;}.xl-datepicker-content .show-date-wrap .show-ipt-wrap .select-time-wrap .select-time-content::after{content:"";display:block;position:absolute;border-top:solid 1px #ddd;width:118px;height:30px;margin-left:7px;top:63px;border-bottom:solid 1px #ddd;}.xl-datepicker-content .show-date-wrap .show-ipt-wrap .select-time-wrap .select-time-content .time-scrollbar{flex-grow:1;text-align:center;height:100%;overflow:hidden;position:relative;}.xl-datepicker-content .show-date-wrap .show-ipt-wrap .select-time-wrap .select-time-content .time-scrollbar ul{list-style:none;position:absolute;width:100%;top:0;transition:top 0.1s;}.xl-datepicker-content .show-date-wrap .show-ipt-wrap .select-time-wrap .select-time-content .time-scrollbar ul::before{content:"";display:block;width:100%;height:60px;}.xl-datepicker-content .show-date-wrap .show-ipt-wrap .select-time-wrap .select-time-content .time-scrollbar ul::after{content:"";display:block;width:100%;height:60px;}.xl-datepicker-content .show-date-wrap .show-ipt-wrap .select-time-wrap .select-time-content .time-scrollbar ul li{line-height:30px;}.xl-datepicker-content .show-date-wrap .show-ipt-wrap .select-time-wrap .select-time-content .time-scrollbar ul li.active{color:#333;font-weight:700;}.xl-datepicker-content .show-date-wrap .show-ipt-wrap .select-time-wrap .select-time-content .time-scrollbar ul li:hover{background:#f0f5fb;cursor:pointer;}.xl-datepicker-content .show-date-wrap .show-ipt-wrap .select-time-wrap .select-time-footer{height:30px;border-top:solid 1px #ddd;text-align:right;line-height:26px;}.xl-datepicker-content .show-date-wrap .show-ipt-wrap .select-time-wrap .select-time-footer .confirm{color:#409eff;font-weight:700;font-size:12px;margin-right:15px;cursor:pointer;}.xl-datepicker-content .xl-content-header{text-align:center;padding:15px 10px;padding-bottom:0;}.xl-datepicker-content .xl-content-header > i{height:16px;width:16px;display:inline-block;cursor:pointer;margin-top:3px;margin-left:3px;margin-right:3px;}.xl-datepicker-content .xl-content-header .xl-d-arrow-left{background:url(../images/d_arrow_left_normal.png);}.xl-datepicker-content .xl-content-header .xl-d-arrow-left:hover{background:url(../images/d_arrow_left_active.png);}.xl-datepicker-content .xl-content-header .xl-arrow-left{background:url(../images/arrow_left_normal.png);}.xl-datepicker-content .xl-content-header .xl-arrow-left:hover{background:url(../images/arrow_left_active.png);}.xl-datepicker-content .xl-content-header .xl-arrow-right{background:url(../images/arrow_right_normal.png);}.xl-datepicker-content .xl-content-header .xl-arrow-right:hover{background:url(../images/arrow_right_active.png);}.xl-datepicker-content .xl-content-header .xl-d-arrow-right{background:url(../images/d_arrow_right_normal.png);}.xl-datepicker-content .xl-content-header .xl-d-arrow-right:hover{background:url(../images/d_arrow_right_active.png);}.xl-datepicker-content .xl-content-header .last-year{float:left;}.xl-datepicker-content .xl-content-header .last-month{float:left;}.xl-datepicker-content .xl-content-header .current-year{line-height:22px;padding:0 5px;cursor:pointer;}.xl-datepicker-content .xl-content-header .current-year input{border:none;width:45px;height:22px;line-height:22px;background:#eaf6ff;border-radius:3px;padding:0 5px;text-align:center;}.xl-datepicker-content .xl-content-header .current-month{line-height:22px;padding:0 5px;cursor:pointer;}.xl-datepicker-content .xl-content-header .current-month input{border:none;width:35px;height:22px;line-height:22px;background:#eaf6ff;border-radius:3px;padding:0 5px;text-align:center;}.xl-datepicker-content .xl-content-header .next-month{float:right;}.xl-datepicker-content .xl-content-header .next-year{float:right;}.xl-datepicker-content .xl-content-body{padding:10px;}.xl-datepicker-content .xl-content-body .xl-datepicker-table{width:100%;}.xl-datepicker-content .xl-content-body .xl-datepicker-table th{padding:10px;text-align:center;border-bottom:solid 1px #eee;}.xl-datepicker-content .xl-content-body .xl-datepicker-table td{text-align:center;padding:7px;font-size:13px;}.xl-datepicker-content .xl-content-body .xl-datepicker-table td.disabled-select{background:#ececec;}.xl-datepicker-content .xl-content-body .xl-datepicker-table td.disabled-select span{cursor:not-allowed;}.xl-datepicker-content .xl-content-body .xl-datepicker-table td.disabled-select spanhover{color:#C0C4CC;}.xl-datepicker-content .xl-content-body .xl-datepicker-table td span{width:25px;height:25px;line-height:25px;display:block;cursor:pointer;}.xl-datepicker-content .xl-content-body .xl-datepicker-table td span.active{background:#409EFF;border-radius:50%;color:#fff !important;font-weight:400 !important;}.xl-datepicker-content .xl-content-body .xl-datepicker-table td span.active:hover{color:#fff;}.xl-datepicker-content .xl-content-body .xl-datepicker-table td span.not-current{color:#C0C4CC;}.xl-datepicker-content .xl-content-body .xl-datepicker-table td span:hover{color:#409EFF;}.xl-datepicker-content .xl-content-body .xl-datepicker-table td span.current{color:#409EFF;font-weight:700;}.xl-datepicker-content .xl-content-footer{border-top:1px solid #e4e4e4;padding:4px;text-align:right;background-color:#fff;position:relative;font-size:0;}.xl-datepicker-content .xl-content-footer button{padding:5px 15px;font-size:12px;border-radius:3px;margin:5px;border:1px solid #DCDFE6;background:#fff;cursor:pointer;}.xl-datepicker-content .xl-content-footer .select-now{border-color:transparent;color:#409EFF;background:transparent;padding-left:0;padding-right:0;}.xl-datepicker-content .xl-content-footer .confirm-date{color:#606266;}.xl-timepicker-content{position:absolute;min-width:180px;height:200px;top:181px;left:294px;z-index:9999;background:#fff;display:none;box-shadow:0 0 15px 0px rgba(0,0,0,0.2);border-radius:5px;color:#606266;border:solid 1px #DCDFE6;}.xl-timepicker-content .xl-content-body{padding:10px 0;}.xl-timepicker-content .xl-content-body .select-time-content{height:150px;display:flex;width:100%;padding:2px;font-size:12px;position:relative;height:180px;}.xl-timepicker-content .xl-content-body .select-time-content::after{content:"";display:block;position:absolute;border-top:solid 1px #ddd;width:118px;height:30px;margin-left:7px;top:63px;border-bottom:solid 1px #ddd;}.xl-timepicker-content .xl-content-body .select-time-content .time-scrollbar{flex-grow:1;text-align:center;height:100%;overflow:hidden;position:relative;}.xl-timepicker-content .xl-content-body .select-time-content .time-scrollbar ul{list-style:none;position:absolute;width:100%;top:0;transition:top 0.1s;}.xl-timepicker-content .xl-content-body .select-time-content .time-scrollbar ul::before{content:"";display:block;width:100%;height:60px;}.xl-timepicker-content .xl-content-body .select-time-content .time-scrollbar ul::after{content:"";display:block;width:100%;height:60px;}.xl-timepicker-content .xl-content-body .select-time-content .time-scrollbar ul li{line-height:30px;}.xl-timepicker-content .xl-content-body .select-time-content .time-scrollbar ul li.active{color:#333;font-weight:700;}.xl-timepicker-content .xl-content-body .select-time-content .time-scrollbar ul li:hover{background:#f0f5fb;cursor:pointer;}.xl-timepicker-content .xl-content-body .select-time-content::after{width:140px;margin-left:16px;}.xl-timepicker-content .xl-content-body .select-time-content .time-scrollbar.disabled-select{cursor:not-allowed;}.xl-timepicker-content .xl-content-body .select-time-content .time-scrollbar.disabled-select ul li{color:#ccc;}.xl-timepicker-content .xl-content-body .select-time-content .time-scrollbar.disabled-select ul li:hover{cursor:not-allowed;}.xl-timepicker-content .xl-popper-arrow{top:-6px;width:0;height:0;border-left:solid 6px transparent;border-right:solid 6px transparent;border-bottom:solid 6px #fff;position:absolute;left:35px;}.xl-timepicker-content .xl-popper-arrow.arrow-bottom{top:auto;border-bottom:solid 6px transparent;border-top:solid 6px #fff;}.xl-timepicker-content .xl-popper-arrow.arrow-right{left:auto;right:35px;}</style>'); angular.$$uibDatepickerCss = true; });
angular.module('xue.table').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibTableCss && angular.element(document).find('head').prepend('<style type="text/css">.xe-table-container{width:100%;height:100%;position:relative;}.xe-table-container .xe-table-header{height:40px;width:100%;position:absolute;top:0;background:blue;}.xe-table-container .xe-table-content{width:100%;height:100%;background:red;}.xe-table-container .xe-table-footer{height:40px;width:100%;position:absolute;bottom:0;background:pink;}</style>'); angular.$$uibTableCss = true; });
angular.module('xue.tree').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibTreeCss && angular.element(document).find('head').prepend('<style type="text/css">.xui-tree-wrap{position:relative;width:100%;height:100%;overflow:auto;padding-bottom:10px;}.xui-tree-wrap.support-search > .tree-list{height:calc(100% - 41px);overflow-y:scroll;}.xui-tree-wrap .tree-search{width:100%;padding:0 10px;text-align:center;border-bottom:1px solid #CEE0F0;}.xui-tree-wrap .tree-search .tree-ipt{height:30px;width:100%;border-radius:15px;margin:5px 0;color:#515a6e;background-image:url(../images/menu_search.png);background-repeat:no-repeat;background-position-x:5px;background-position-y:7px;padding-left:25px;border:1px solid #CEE0F0;}.xui-tree-wrap .tree-search .tree-ipt:focus{border-color:#66afe9;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(102,175,233,0.6);}.xui-tree-wrap .tree-search .search-list{position:absolute;top:38px;width:90%;left:5%;z-index:9999;background:#ddd;border-radius:5px;}.xui-tree-wrap .tree-search .search-list li{height:28px;line-height:28px;text-align:left;cursor:pointer;padding:0 10px;color:#515a6e;}.xui-tree-wrap .tree-search .search-list li:hover{color:#0394F9;}.xui-tree-wrap > .tree-list{padding:0 10px;}.xui-tree-wrap .tree-list{overflow:hidden;}.xui-tree-wrap .tree-list .tree-item{position:relative;padding-left:20px;}.xui-tree-wrap .tree-list .tree-item.level1{padding-left:0px;}.xui-tree-wrap .tree-list .tree-item .tree-row{display:flex;align-items:center;transition:all 0.2s ease;line-height:28px;padding-right:10px;}.xui-tree-wrap .tree-list .tree-item .tree-row .node-align{display:inline-block;vertical-align:middle;}.xui-tree-wrap .tree-list .tree-item .tree-row .expand-icon{position:relative;width:12px;text-align:center;transition:all 0.3s ease;cursor:pointer;z-index:10;}.xui-tree-wrap .tree-list .tree-item .tree-row .expand-icon.expanded{transform:rotate(90deg);}.xui-tree-wrap .tree-list .tree-item .tree-row .check-icon{margin:0 4px;line-height:1;}.xui-tree-wrap .tree-list .tree-item .tree-row .node-icon{display:flex;align-items:center;margin:0 4px;}.xui-tree-wrap .tree-list .tree-item .tree-row .node-title{flex:1;margin:0;border-radius:3px;padding:0 4px;line-height:24px;cursor:pointer;color:#515a6e;transition:all .2s ease-in-out;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}.xui-tree-wrap .tree-list .tree-item .tree-row .node-title:hover{background:#eaf4fe;}.xui-tree-wrap .tree-list .tree-item .tree-row .node-title.active{background:#d5e8fc;}.xui-tree-wrap .tree-list .tree-item .tree-row .loading-icon{width:16px;height:16px;background:url("../../../images/common/loading_32x32.gif") center/cover no-repeat;}.xui-tree-wrap .tree-list .tree-item .tree-list.ng-hide{display:block !important;}.xui-tree-wrap .tree-list .tree-item .tree-list.ng-hide .tree-row{height:0;}.xui-tree-wrap .tree-list .tree-item.show-line::before{content:"";position:absolute;width:12px;height:16px;top:6px;background:#fff;z-index:1;left:20px;}.xui-tree-wrap .tree-list .tree-item.show-line::after{content:"";position:absolute;height:100%;top:0;left:25px;border-left:1px dashed #ccc;}.xui-tree-wrap .tree-list .tree-item.show-line:last-child::after{height:8px;}.xui-tree-wrap .tree-list .tree-item.show-line.leaf::before{content:"";position:absolute;width:10px;height:0;top:50%;left:26px;border-top:1px dashed #ccc;}.xui-tree-wrap .tree-list .tree-item.show-line.leaf:last-child::after{height:50%;}.xui-tree-wrap .tree-list .tree-item.show-line.level1{padding-left:0px;}.xui-tree-wrap .tree-list .tree-item.show-line.level1::before{left:0;}.xui-tree-wrap .tree-list .tree-item.show-line.level1::after{left:6px;}.xui-tree-wrap .tree-list .tree-item.show-line.level1:only-of-type::after{border:0 none;}</style>'); angular.$$uibTreeCss = true; });