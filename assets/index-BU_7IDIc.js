var cI=Object.defineProperty;var dI=(t,e,n)=>e in t?cI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var fI=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Rd=(t,e,n)=>(dI(t,typeof e!="symbol"?e+"":e,n),n);var rz=fI((Ct,xt)=>{function hI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Gs(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var p1={exports:{}},vc={},m1={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var La=Symbol.for("react.element"),pI=Symbol.for("react.portal"),mI=Symbol.for("react.fragment"),gI=Symbol.for("react.strict_mode"),yI=Symbol.for("react.profiler"),vI=Symbol.for("react.provider"),_I=Symbol.for("react.context"),wI=Symbol.for("react.forward_ref"),EI=Symbol.for("react.suspense"),SI=Symbol.for("react.memo"),CI=Symbol.for("react.lazy"),E0=Symbol.iterator;function xI(t){return t===null||typeof t!="object"?null:(t=E0&&t[E0]||t["@@iterator"],typeof t=="function"?t:null)}var g1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y1=Object.assign,v1={};function Ks(t,e,n){this.props=t,this.context=e,this.refs=v1,this.updater=n||g1}Ks.prototype.isReactComponent={};Ks.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ks.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function _1(){}_1.prototype=Ks.prototype;function Mp(t,e,n){this.props=t,this.context=e,this.refs=v1,this.updater=n||g1}var Fp=Mp.prototype=new _1;Fp.constructor=Mp;y1(Fp,Ks.prototype);Fp.isPureReactComponent=!0;var S0=Array.isArray,w1=Object.prototype.hasOwnProperty,$p={current:null},E1={key:!0,ref:!0,__self:!0,__source:!0};function S1(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)w1.call(e,r)&&!E1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:La,type:t,key:s,ref:o,props:i,_owner:$p.current}}function TI(t,e){return{$$typeof:La,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function jp(t){return typeof t=="object"&&t!==null&&t.$$typeof===La}function II(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var C0=/\/+/g;function Od(t,e){return typeof t=="object"&&t!==null&&t.key!=null?II(""+t.key):e.toString(36)}function Dl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case La:case pI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Od(o,0):r,S0(i)?(n="",t!=null&&(n=t.replace(C0,"$&/")+"/"),Dl(i,e,n,"",function(u){return u})):i!=null&&(jp(i)&&(i=TI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(C0,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",S0(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Od(s,a);o+=Dl(s,e,n,l,i)}else if(l=xI(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Od(s,a++),o+=Dl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function sl(t,e,n){if(t==null)return t;var r=[],i=0;return Dl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function bI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rt={current:null},Ml={transition:null},kI={ReactCurrentDispatcher:rt,ReactCurrentBatchConfig:Ml,ReactCurrentOwner:$p};q.Children={map:sl,forEach:function(t,e,n){sl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return sl(t,function(){e++}),e},toArray:function(t){return sl(t,function(e){return e})||[]},only:function(t){if(!jp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};q.Component=Ks;q.Fragment=mI;q.Profiler=yI;q.PureComponent=Mp;q.StrictMode=gI;q.Suspense=EI;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kI;q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=y1({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=$p.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)w1.call(e,l)&&!E1.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:La,type:t.type,key:i,ref:s,props:r,_owner:o}};q.createContext=function(t){return t={$$typeof:_I,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:vI,_context:t},t.Consumer=t};q.createElement=S1;q.createFactory=function(t){var e=S1.bind(null,t);return e.type=t,e};q.createRef=function(){return{current:null}};q.forwardRef=function(t){return{$$typeof:wI,render:t}};q.isValidElement=jp;q.lazy=function(t){return{$$typeof:CI,_payload:{_status:-1,_result:t},_init:bI}};q.memo=function(t,e){return{$$typeof:SI,type:t,compare:e===void 0?null:e}};q.startTransition=function(t){var e=Ml.transition;Ml.transition={};try{t()}finally{Ml.transition=e}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(t,e){return rt.current.useCallback(t,e)};q.useContext=function(t){return rt.current.useContext(t)};q.useDebugValue=function(){};q.useDeferredValue=function(t){return rt.current.useDeferredValue(t)};q.useEffect=function(t,e){return rt.current.useEffect(t,e)};q.useId=function(){return rt.current.useId()};q.useImperativeHandle=function(t,e,n){return rt.current.useImperativeHandle(t,e,n)};q.useInsertionEffect=function(t,e){return rt.current.useInsertionEffect(t,e)};q.useLayoutEffect=function(t,e){return rt.current.useLayoutEffect(t,e)};q.useMemo=function(t,e){return rt.current.useMemo(t,e)};q.useReducer=function(t,e,n){return rt.current.useReducer(t,e,n)};q.useRef=function(t){return rt.current.useRef(t)};q.useState=function(t){return rt.current.useState(t)};q.useSyncExternalStore=function(t,e,n){return rt.current.useSyncExternalStore(t,e,n)};q.useTransition=function(){return rt.current.useTransition()};q.version="18.2.0";m1.exports=q;var E=m1.exports;const vn=Gs(E),jf=hI({__proto__:null,default:vn},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var PI=E,RI=Symbol.for("react.element"),OI=Symbol.for("react.fragment"),NI=Object.prototype.hasOwnProperty,AI=PI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,LI={key:!0,ref:!0,__self:!0,__source:!0};function C1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)NI.call(e,r)&&!LI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:RI,type:t,key:s,ref:o,props:i,_owner:AI.current}}vc.Fragment=OI;vc.jsx=C1;vc.jsxs=C1;p1.exports=vc;var m=p1.exports,Uf={},x1={exports:{}},Rt={},T1={exports:{}},I1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,M){var U=O.length;O.push(M);e:for(;0<U;){var J=U-1>>>1,Q=O[J];if(0<i(Q,M))O[J]=M,O[U]=Q,U=J;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var M=O[0],U=O.pop();if(U!==M){O[0]=U;e:for(var J=0,Q=O.length,sn=Q>>>1;J<sn;){var Je=2*(J+1)-1,Ze=O[Je],He=Je+1,yt=O[He];if(0>i(Ze,U))He<Q&&0>i(yt,Ze)?(O[J]=yt,O[He]=U,J=He):(O[J]=Ze,O[Je]=U,J=Je);else if(He<Q&&0>i(yt,U))O[J]=yt,O[He]=U,J=He;else break e}}return M}function i(O,M){var U=O.sortIndex-M.sortIndex;return U!==0?U:O.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,c=null,f=3,p=!1,v=!1,_=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(O){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=O)r(u),M.sortIndex=M.expirationTime,e(l,M);else break;M=n(u)}}function w(O){if(_=!1,y(O),!v)if(n(l)!==null)v=!0,Yr(T);else{var M=n(u);M!==null&&Sn(w,M.startTime-O)}}function T(O,M){v=!1,_&&(_=!1,g(b),b=-1),p=!0;var U=f;try{for(y(M),c=n(l);c!==null&&(!(c.expirationTime>M)||O&&!B());){var J=c.callback;if(typeof J=="function"){c.callback=null,f=c.priorityLevel;var Q=J(c.expirationTime<=M);M=t.unstable_now(),typeof Q=="function"?c.callback=Q:c===n(l)&&r(l),y(M)}else r(l);c=n(l)}if(c!==null)var sn=!0;else{var Je=n(u);Je!==null&&Sn(w,Je.startTime-M),sn=!1}return sn}finally{c=null,f=U,p=!1}}var C=!1,x=null,b=-1,L=5,F=-1;function B(){return!(t.unstable_now()-F<L)}function At(){if(x!==null){var O=t.unstable_now();F=O;var M=!0;try{M=x(!0,O)}finally{M?le():(C=!1,x=null)}}else C=!1}var le;if(typeof h=="function")le=function(){h(At)};else if(typeof MessageChannel<"u"){var gt=new MessageChannel,En=gt.port2;gt.port1.onmessage=At,le=function(){En.postMessage(null)}}else le=function(){S(At,0)};function Yr(O){x=O,C||(C=!0,le())}function Sn(O,M){b=S(function(){O(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,Yr(T))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(f){case 1:case 2:case 3:var M=3;break;default:M=f}var U=f;f=M;try{return O()}finally{f=U}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,M){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var U=f;f=O;try{return M()}finally{f=U}},t.unstable_scheduleCallback=function(O,M,U){var J=t.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?J+U:J):U=J,O){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=U+Q,O={id:d++,callback:M,priorityLevel:O,startTime:U,expirationTime:Q,sortIndex:-1},U>J?(O.sortIndex=U,e(u,O),n(l)===null&&O===n(u)&&(_?(g(b),b=-1):_=!0,Sn(w,U-J))):(O.sortIndex=Q,e(l,O),v||p||(v=!0,Yr(T))),O},t.unstable_shouldYield=B,t.unstable_wrapCallback=function(O){var M=f;return function(){var U=f;f=M;try{return O.apply(this,arguments)}finally{f=U}}}})(I1);T1.exports=I1;var DI=T1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b1=E,bt=DI;function P(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var k1=new Set,Yo={};function Oi(t,e){xs(t,e),xs(t+"Capture",e)}function xs(t,e){for(Yo[t]=e,t=0;t<e.length;t++)k1.add(e[t])}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zf=Object.prototype.hasOwnProperty,MI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x0={},T0={};function FI(t){return zf.call(T0,t)?!0:zf.call(x0,t)?!1:MI.test(t)?T0[t]=!0:(x0[t]=!0,!1)}function $I(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function jI(t,e,n,r){if(e===null||typeof e>"u"||$I(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function it(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ve[t]=new it(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ve[e]=new it(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ve[t]=new it(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ve[t]=new it(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ve[t]=new it(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ve[t]=new it(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ve[t]=new it(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ve[t]=new it(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ve[t]=new it(t,5,!1,t.toLowerCase(),null,!1,!1)});var Up=/[\-:]([a-z])/g;function zp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Up,zp);Ve[e]=new it(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Up,zp);Ve[e]=new it(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Up,zp);Ve[e]=new it(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ve[t]=new it(t,1,!1,t.toLowerCase(),null,!1,!1)});Ve.xlinkHref=new it("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ve[t]=new it(t,1,!1,t.toLowerCase(),null,!0,!0)});function Bp(t,e,n,r){var i=Ve.hasOwnProperty(e)?Ve[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(jI(e,n,i,r)&&(n=null),r||i===null?FI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Gn=b1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ol=Symbol.for("react.element"),Yi=Symbol.for("react.portal"),Qi=Symbol.for("react.fragment"),Wp=Symbol.for("react.strict_mode"),Bf=Symbol.for("react.profiler"),P1=Symbol.for("react.provider"),R1=Symbol.for("react.context"),Vp=Symbol.for("react.forward_ref"),Wf=Symbol.for("react.suspense"),Vf=Symbol.for("react.suspense_list"),Hp=Symbol.for("react.memo"),ir=Symbol.for("react.lazy"),O1=Symbol.for("react.offscreen"),I0=Symbol.iterator;function ao(t){return t===null||typeof t!="object"?null:(t=I0&&t[I0]||t["@@iterator"],typeof t=="function"?t:null)}var Se=Object.assign,Nd;function So(t){if(Nd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Nd=e&&e[1]||""}return`
`+Nd+t}var Ad=!1;function Ld(t,e){if(!t||Ad)return"";Ad=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ad=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?So(t):""}function UI(t){switch(t.tag){case 5:return So(t.type);case 16:return So("Lazy");case 13:return So("Suspense");case 19:return So("SuspenseList");case 0:case 2:case 15:return t=Ld(t.type,!1),t;case 11:return t=Ld(t.type.render,!1),t;case 1:return t=Ld(t.type,!0),t;default:return""}}function Hf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Qi:return"Fragment";case Yi:return"Portal";case Bf:return"Profiler";case Wp:return"StrictMode";case Wf:return"Suspense";case Vf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case R1:return(t.displayName||"Context")+".Consumer";case P1:return(t._context.displayName||"Context")+".Provider";case Vp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Hp:return e=t.displayName||null,e!==null?e:Hf(t.type)||"Memo";case ir:e=t._payload,t=t._init;try{return Hf(t(e))}catch{}}return null}function zI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hf(e);case 8:return e===Wp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function N1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function BI(t){var e=N1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function al(t){t._valueTracker||(t._valueTracker=BI(t))}function A1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=N1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function hu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Gf(t,e){var n=e.checked;return Se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function b0(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function L1(t,e){e=e.checked,e!=null&&Bp(t,"checked",e,!1)}function Kf(t,e){L1(t,e);var n=Ar(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?qf(t,e.type,n):e.hasOwnProperty("defaultValue")&&qf(t,e.type,Ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function k0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function qf(t,e,n){(e!=="number"||hu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Co=Array.isArray;function fs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ar(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Yf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(P(91));return Se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function P0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(P(92));if(Co(n)){if(1<n.length)throw Error(P(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ar(n)}}function D1(t,e){var n=Ar(e.value),r=Ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function R0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function M1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?M1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ll,F1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ll=ll||document.createElement("div"),ll.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ll.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Qo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Oo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},WI=["Webkit","ms","Moz","O"];Object.keys(Oo).forEach(function(t){WI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Oo[e]=Oo[t]})});function $1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Oo.hasOwnProperty(t)&&Oo[t]?(""+e).trim():e+"px"}function j1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=$1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var VI=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xf(t,e){if(e){if(VI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(P(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(P(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(P(61))}if(e.style!=null&&typeof e.style!="object")throw Error(P(62))}}function Jf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zf=null;function Gp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var eh=null,hs=null,ps=null;function O0(t){if(t=Fa(t)){if(typeof eh!="function")throw Error(P(280));var e=t.stateNode;e&&(e=Cc(e),eh(t.stateNode,t.type,e))}}function U1(t){hs?ps?ps.push(t):ps=[t]:hs=t}function z1(){if(hs){var t=hs,e=ps;if(ps=hs=null,O0(t),e)for(t=0;t<e.length;t++)O0(e[t])}}function B1(t,e){return t(e)}function W1(){}var Dd=!1;function V1(t,e,n){if(Dd)return t(e,n);Dd=!0;try{return B1(t,e,n)}finally{Dd=!1,(hs!==null||ps!==null)&&(W1(),z1())}}function Xo(t,e){var n=t.stateNode;if(n===null)return null;var r=Cc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(P(231,e,typeof n));return n}var th=!1;if($n)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){th=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{th=!1}function HI(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var No=!1,pu=null,mu=!1,nh=null,GI={onError:function(t){No=!0,pu=t}};function KI(t,e,n,r,i,s,o,a,l){No=!1,pu=null,HI.apply(GI,arguments)}function qI(t,e,n,r,i,s,o,a,l){if(KI.apply(this,arguments),No){if(No){var u=pu;No=!1,pu=null}else throw Error(P(198));mu||(mu=!0,nh=u)}}function Ni(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function H1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function N0(t){if(Ni(t)!==t)throw Error(P(188))}function YI(t){var e=t.alternate;if(!e){if(e=Ni(t),e===null)throw Error(P(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return N0(i),t;if(s===r)return N0(i),e;s=s.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?t:e}function G1(t){return t=YI(t),t!==null?K1(t):null}function K1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=K1(t);if(e!==null)return e;t=t.sibling}return null}var q1=bt.unstable_scheduleCallback,A0=bt.unstable_cancelCallback,QI=bt.unstable_shouldYield,XI=bt.unstable_requestPaint,Te=bt.unstable_now,JI=bt.unstable_getCurrentPriorityLevel,Kp=bt.unstable_ImmediatePriority,Y1=bt.unstable_UserBlockingPriority,gu=bt.unstable_NormalPriority,ZI=bt.unstable_LowPriority,Q1=bt.unstable_IdlePriority,_c=null,hn=null;function eb(t){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(_c,t,void 0,(t.current.flags&128)===128)}catch{}}var Jt=Math.clz32?Math.clz32:rb,tb=Math.log,nb=Math.LN2;function rb(t){return t>>>=0,t===0?32:31-(tb(t)/nb|0)|0}var ul=64,cl=4194304;function xo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function yu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=xo(a):(s&=o,s!==0&&(r=xo(s)))}else o=n&~i,o!==0?r=xo(o):s!==0&&(r=xo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Jt(e),i=1<<n,r|=t[n],e&=~i;return r}function ib(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sb(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Jt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=ib(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function rh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function X1(){var t=ul;return ul<<=1,!(ul&4194240)&&(ul=64),t}function Md(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Da(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jt(e),t[e]=n}function ob(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Jt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function qp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Jt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var re=0;function J1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Z1,Yp,ew,tw,nw,ih=!1,dl=[],vr=null,_r=null,wr=null,Jo=new Map,Zo=new Map,ar=[],ab="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function L0(t,e){switch(t){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":Jo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zo.delete(e.pointerId)}}function uo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Fa(e),e!==null&&Yp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function lb(t,e,n,r,i){switch(e){case"focusin":return vr=uo(vr,t,e,n,r,i),!0;case"dragenter":return _r=uo(_r,t,e,n,r,i),!0;case"mouseover":return wr=uo(wr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Jo.set(s,uo(Jo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Zo.set(s,uo(Zo.get(s)||null,t,e,n,r,i)),!0}return!1}function rw(t){var e=ri(t.target);if(e!==null){var n=Ni(e);if(n!==null){if(e=n.tag,e===13){if(e=H1(n),e!==null){t.blockedOn=e,nw(t.priority,function(){ew(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=sh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Zf=r,n.target.dispatchEvent(r),Zf=null}else return e=Fa(n),e!==null&&Yp(e),t.blockedOn=n,!1;e.shift()}return!0}function D0(t,e,n){Fl(t)&&n.delete(e)}function ub(){ih=!1,vr!==null&&Fl(vr)&&(vr=null),_r!==null&&Fl(_r)&&(_r=null),wr!==null&&Fl(wr)&&(wr=null),Jo.forEach(D0),Zo.forEach(D0)}function co(t,e){t.blockedOn===e&&(t.blockedOn=null,ih||(ih=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,ub)))}function ea(t){function e(i){return co(i,t)}if(0<dl.length){co(dl[0],t);for(var n=1;n<dl.length;n++){var r=dl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(vr!==null&&co(vr,t),_r!==null&&co(_r,t),wr!==null&&co(wr,t),Jo.forEach(e),Zo.forEach(e),n=0;n<ar.length;n++)r=ar[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ar.length&&(n=ar[0],n.blockedOn===null);)rw(n),n.blockedOn===null&&ar.shift()}var ms=Gn.ReactCurrentBatchConfig,vu=!0;function cb(t,e,n,r){var i=re,s=ms.transition;ms.transition=null;try{re=1,Qp(t,e,n,r)}finally{re=i,ms.transition=s}}function db(t,e,n,r){var i=re,s=ms.transition;ms.transition=null;try{re=4,Qp(t,e,n,r)}finally{re=i,ms.transition=s}}function Qp(t,e,n,r){if(vu){var i=sh(t,e,n,r);if(i===null)Gd(t,e,r,_u,n),L0(t,r);else if(lb(i,t,e,n,r))r.stopPropagation();else if(L0(t,r),e&4&&-1<ab.indexOf(t)){for(;i!==null;){var s=Fa(i);if(s!==null&&Z1(s),s=sh(t,e,n,r),s===null&&Gd(t,e,r,_u,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Gd(t,e,r,null,n)}}var _u=null;function sh(t,e,n,r){if(_u=null,t=Gp(r),t=ri(t),t!==null)if(e=Ni(t),e===null)t=null;else if(n=e.tag,n===13){if(t=H1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _u=t,null}function iw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(JI()){case Kp:return 1;case Y1:return 4;case gu:case ZI:return 16;case Q1:return 536870912;default:return 16}default:return 16}}var pr=null,Xp=null,$l=null;function sw(){if($l)return $l;var t,e=Xp,n=e.length,r,i="value"in pr?pr.value:pr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return $l=i.slice(t,1<r?1-r:void 0)}function jl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fl(){return!0}function M0(){return!1}function Ot(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?fl:M0,this.isPropagationStopped=M0,this}return Se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),e}var qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jp=Ot(qs),Ma=Se({},qs,{view:0,detail:0}),fb=Ot(Ma),Fd,$d,fo,wc=Se({},Ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fo&&(fo&&t.type==="mousemove"?(Fd=t.screenX-fo.screenX,$d=t.screenY-fo.screenY):$d=Fd=0,fo=t),Fd)},movementY:function(t){return"movementY"in t?t.movementY:$d}}),F0=Ot(wc),hb=Se({},wc,{dataTransfer:0}),pb=Ot(hb),mb=Se({},Ma,{relatedTarget:0}),jd=Ot(mb),gb=Se({},qs,{animationName:0,elapsedTime:0,pseudoElement:0}),yb=Ot(gb),vb=Se({},qs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_b=Ot(vb),wb=Se({},qs,{data:0}),$0=Ot(wb),Eb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Cb[t])?!!e[t]:!1}function Zp(){return xb}var Tb=Se({},Ma,{key:function(t){if(t.key){var e=Eb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=jl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Sb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zp,charCode:function(t){return t.type==="keypress"?jl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?jl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ib=Ot(Tb),bb=Se({},wc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),j0=Ot(bb),kb=Se({},Ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zp}),Pb=Ot(kb),Rb=Se({},qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ob=Ot(Rb),Nb=Se({},wc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ab=Ot(Nb),Lb=[9,13,27,32],em=$n&&"CompositionEvent"in window,Ao=null;$n&&"documentMode"in document&&(Ao=document.documentMode);var Db=$n&&"TextEvent"in window&&!Ao,ow=$n&&(!em||Ao&&8<Ao&&11>=Ao),U0=" ",z0=!1;function aw(t,e){switch(t){case"keyup":return Lb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xi=!1;function Mb(t,e){switch(t){case"compositionend":return lw(e);case"keypress":return e.which!==32?null:(z0=!0,U0);case"textInput":return t=e.data,t===U0&&z0?null:t;default:return null}}function Fb(t,e){if(Xi)return t==="compositionend"||!em&&aw(t,e)?(t=sw(),$l=Xp=pr=null,Xi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ow&&e.locale!=="ko"?null:e.data;default:return null}}var $b={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function B0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!$b[t.type]:e==="textarea"}function uw(t,e,n,r){U1(r),e=wu(e,"onChange"),0<e.length&&(n=new Jp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Lo=null,ta=null;function jb(t){ww(t,0)}function Ec(t){var e=es(t);if(A1(e))return t}function Ub(t,e){if(t==="change")return e}var cw=!1;if($n){var Ud;if($n){var zd="oninput"in document;if(!zd){var W0=document.createElement("div");W0.setAttribute("oninput","return;"),zd=typeof W0.oninput=="function"}Ud=zd}else Ud=!1;cw=Ud&&(!document.documentMode||9<document.documentMode)}function V0(){Lo&&(Lo.detachEvent("onpropertychange",dw),ta=Lo=null)}function dw(t){if(t.propertyName==="value"&&Ec(ta)){var e=[];uw(e,ta,t,Gp(t)),V1(jb,e)}}function zb(t,e,n){t==="focusin"?(V0(),Lo=e,ta=n,Lo.attachEvent("onpropertychange",dw)):t==="focusout"&&V0()}function Bb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ec(ta)}function Wb(t,e){if(t==="click")return Ec(e)}function Vb(t,e){if(t==="input"||t==="change")return Ec(e)}function Hb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var nn=typeof Object.is=="function"?Object.is:Hb;function na(t,e){if(nn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!zf.call(e,i)||!nn(t[i],e[i]))return!1}return!0}function H0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function G0(t,e){var n=H0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=H0(n)}}function fw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?fw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function hw(){for(var t=window,e=hu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=hu(t.document)}return e}function tm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Gb(t){var e=hw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&fw(n.ownerDocument.documentElement,n)){if(r!==null&&tm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=G0(n,s);var o=G0(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Kb=$n&&"documentMode"in document&&11>=document.documentMode,Ji=null,oh=null,Do=null,ah=!1;function K0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ah||Ji==null||Ji!==hu(r)||(r=Ji,"selectionStart"in r&&tm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Do&&na(Do,r)||(Do=r,r=wu(oh,"onSelect"),0<r.length&&(e=new Jp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ji)))}function hl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zi={animationend:hl("Animation","AnimationEnd"),animationiteration:hl("Animation","AnimationIteration"),animationstart:hl("Animation","AnimationStart"),transitionend:hl("Transition","TransitionEnd")},Bd={},pw={};$n&&(pw=document.createElement("div").style,"AnimationEvent"in window||(delete Zi.animationend.animation,delete Zi.animationiteration.animation,delete Zi.animationstart.animation),"TransitionEvent"in window||delete Zi.transitionend.transition);function Sc(t){if(Bd[t])return Bd[t];if(!Zi[t])return t;var e=Zi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in pw)return Bd[t]=e[n];return t}var mw=Sc("animationend"),gw=Sc("animationiteration"),yw=Sc("animationstart"),vw=Sc("transitionend"),_w=new Map,q0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(t,e){_w.set(t,e),Oi(e,[t])}for(var Wd=0;Wd<q0.length;Wd++){var Vd=q0[Wd],qb=Vd.toLowerCase(),Yb=Vd[0].toUpperCase()+Vd.slice(1);zr(qb,"on"+Yb)}zr(mw,"onAnimationEnd");zr(gw,"onAnimationIteration");zr(yw,"onAnimationStart");zr("dblclick","onDoubleClick");zr("focusin","onFocus");zr("focusout","onBlur");zr(vw,"onTransitionEnd");xs("onMouseEnter",["mouseout","mouseover"]);xs("onMouseLeave",["mouseout","mouseover"]);xs("onPointerEnter",["pointerout","pointerover"]);xs("onPointerLeave",["pointerout","pointerover"]);Oi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Oi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Oi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Oi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Oi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Oi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qb=new Set("cancel close invalid load scroll toggle".split(" ").concat(To));function Y0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,qI(r,e,void 0,t),t.currentTarget=null}function ww(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Y0(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Y0(i,a,u),s=l}}}if(mu)throw t=nh,mu=!1,nh=null,t}function fe(t,e){var n=e[fh];n===void 0&&(n=e[fh]=new Set);var r=t+"__bubble";n.has(r)||(Ew(e,t,2,!1),n.add(r))}function Hd(t,e,n){var r=0;e&&(r|=4),Ew(n,t,r,e)}var pl="_reactListening"+Math.random().toString(36).slice(2);function ra(t){if(!t[pl]){t[pl]=!0,k1.forEach(function(n){n!=="selectionchange"&&(Qb.has(n)||Hd(n,!1,t),Hd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[pl]||(e[pl]=!0,Hd("selectionchange",!1,e))}}function Ew(t,e,n,r){switch(iw(e)){case 1:var i=cb;break;case 4:i=db;break;default:i=Qp}n=i.bind(null,e,n,t),i=void 0,!th||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Gd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ri(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}V1(function(){var u=s,d=Gp(n),c=[];e:{var f=_w.get(t);if(f!==void 0){var p=Jp,v=t;switch(t){case"keypress":if(jl(n)===0)break e;case"keydown":case"keyup":p=Ib;break;case"focusin":v="focus",p=jd;break;case"focusout":v="blur",p=jd;break;case"beforeblur":case"afterblur":p=jd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=F0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=pb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Pb;break;case mw:case gw:case yw:p=yb;break;case vw:p=Ob;break;case"scroll":p=fb;break;case"wheel":p=Ab;break;case"copy":case"cut":case"paste":p=_b;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=j0}var _=(e&4)!==0,S=!_&&t==="scroll",g=_?f!==null?f+"Capture":null:f;_=[];for(var h=u,y;h!==null;){y=h;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,g!==null&&(w=Xo(h,g),w!=null&&_.push(ia(h,w,y)))),S)break;h=h.return}0<_.length&&(f=new p(f,v,null,n,d),c.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Zf&&(v=n.relatedTarget||n.fromElement)&&(ri(v)||v[jn]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?ri(v):null,v!==null&&(S=Ni(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(_=F0,w="onMouseLeave",g="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(_=j0,w="onPointerLeave",g="onPointerEnter",h="pointer"),S=p==null?f:es(p),y=v==null?f:es(v),f=new _(w,h+"leave",p,n,d),f.target=S,f.relatedTarget=y,w=null,ri(d)===u&&(_=new _(g,h+"enter",v,n,d),_.target=y,_.relatedTarget=S,w=_),S=w,p&&v)t:{for(_=p,g=v,h=0,y=_;y;y=Hi(y))h++;for(y=0,w=g;w;w=Hi(w))y++;for(;0<h-y;)_=Hi(_),h--;for(;0<y-h;)g=Hi(g),y--;for(;h--;){if(_===g||g!==null&&_===g.alternate)break t;_=Hi(_),g=Hi(g)}_=null}else _=null;p!==null&&Q0(c,f,p,_,!1),v!==null&&S!==null&&Q0(c,S,v,_,!0)}}e:{if(f=u?es(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=Ub;else if(B0(f))if(cw)T=Vb;else{T=Bb;var C=zb}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=Wb);if(T&&(T=T(t,u))){uw(c,T,n,d);break e}C&&C(t,f,u),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&qf(f,"number",f.value)}switch(C=u?es(u):window,t){case"focusin":(B0(C)||C.contentEditable==="true")&&(Ji=C,oh=u,Do=null);break;case"focusout":Do=oh=Ji=null;break;case"mousedown":ah=!0;break;case"contextmenu":case"mouseup":case"dragend":ah=!1,K0(c,n,d);break;case"selectionchange":if(Kb)break;case"keydown":case"keyup":K0(c,n,d)}var x;if(em)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Xi?aw(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(ow&&n.locale!=="ko"&&(Xi||b!=="onCompositionStart"?b==="onCompositionEnd"&&Xi&&(x=sw()):(pr=d,Xp="value"in pr?pr.value:pr.textContent,Xi=!0)),C=wu(u,b),0<C.length&&(b=new $0(b,t,null,n,d),c.push({event:b,listeners:C}),x?b.data=x:(x=lw(n),x!==null&&(b.data=x)))),(x=Db?Mb(t,n):Fb(t,n))&&(u=wu(u,"onBeforeInput"),0<u.length&&(d=new $0("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=x))}ww(c,e)})}function ia(t,e,n){return{instance:t,listener:e,currentTarget:n}}function wu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Xo(t,n),s!=null&&r.unshift(ia(t,s,i)),s=Xo(t,e),s!=null&&r.push(ia(t,s,i))),t=t.return}return r}function Hi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Q0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Xo(n,s),l!=null&&o.unshift(ia(n,l,a))):i||(l=Xo(n,s),l!=null&&o.push(ia(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Xb=/\r\n?/g,Jb=/\u0000|\uFFFD/g;function X0(t){return(typeof t=="string"?t:""+t).replace(Xb,`
`).replace(Jb,"")}function ml(t,e,n){if(e=X0(e),X0(t)!==e&&n)throw Error(P(425))}function Eu(){}var lh=null,uh=null;function ch(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var dh=typeof setTimeout=="function"?setTimeout:void 0,Zb=typeof clearTimeout=="function"?clearTimeout:void 0,J0=typeof Promise=="function"?Promise:void 0,ek=typeof queueMicrotask=="function"?queueMicrotask:typeof J0<"u"?function(t){return J0.resolve(null).then(t).catch(tk)}:dh;function tk(t){setTimeout(function(){throw t})}function Kd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ea(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ea(e)}function Er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Z0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ys=Math.random().toString(36).slice(2),fn="__reactFiber$"+Ys,sa="__reactProps$"+Ys,jn="__reactContainer$"+Ys,fh="__reactEvents$"+Ys,nk="__reactListeners$"+Ys,rk="__reactHandles$"+Ys;function ri(t){var e=t[fn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[jn]||n[fn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Z0(t);t!==null;){if(n=t[fn])return n;t=Z0(t)}return e}t=n,n=t.parentNode}return null}function Fa(t){return t=t[fn]||t[jn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(P(33))}function Cc(t){return t[sa]||null}var hh=[],ts=-1;function Br(t){return{current:t}}function ge(t){0>ts||(t.current=hh[ts],hh[ts]=null,ts--)}function de(t,e){ts++,hh[ts]=t.current,t.current=e}var Lr={},Qe=Br(Lr),ct=Br(!1),gi=Lr;function Ts(t,e){var n=t.type.contextTypes;if(!n)return Lr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function dt(t){return t=t.childContextTypes,t!=null}function Su(){ge(ct),ge(Qe)}function ey(t,e,n){if(Qe.current!==Lr)throw Error(P(168));de(Qe,e),de(ct,n)}function Sw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(P(108,zI(t)||"Unknown",i));return Se({},n,r)}function Cu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Lr,gi=Qe.current,de(Qe,t),de(ct,ct.current),!0}function ty(t,e,n){var r=t.stateNode;if(!r)throw Error(P(169));n?(t=Sw(t,e,gi),r.__reactInternalMemoizedMergedChildContext=t,ge(ct),ge(Qe),de(Qe,t)):ge(ct),de(ct,n)}var Pn=null,xc=!1,qd=!1;function Cw(t){Pn===null?Pn=[t]:Pn.push(t)}function ik(t){xc=!0,Cw(t)}function Wr(){if(!qd&&Pn!==null){qd=!0;var t=0,e=re;try{var n=Pn;for(re=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Pn=null,xc=!1}catch(i){throw Pn!==null&&(Pn=Pn.slice(t+1)),q1(Kp,Wr),i}finally{re=e,qd=!1}}return null}var ns=[],rs=0,xu=null,Tu=0,Dt=[],Mt=0,yi=null,Rn=1,On="";function Xr(t,e){ns[rs++]=Tu,ns[rs++]=xu,xu=t,Tu=e}function xw(t,e,n){Dt[Mt++]=Rn,Dt[Mt++]=On,Dt[Mt++]=yi,yi=t;var r=Rn;t=On;var i=32-Jt(r)-1;r&=~(1<<i),n+=1;var s=32-Jt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Rn=1<<32-Jt(e)+i|n<<i|r,On=s+t}else Rn=1<<s|n<<i|r,On=t}function nm(t){t.return!==null&&(Xr(t,1),xw(t,1,0))}function rm(t){for(;t===xu;)xu=ns[--rs],ns[rs]=null,Tu=ns[--rs],ns[rs]=null;for(;t===yi;)yi=Dt[--Mt],Dt[Mt]=null,On=Dt[--Mt],Dt[Mt]=null,Rn=Dt[--Mt],Dt[Mt]=null}var Tt=null,wt=null,ve=!1,Kt=null;function Tw(t,e){var n=Ft(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ny(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tt=t,wt=Er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tt=t,wt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=yi!==null?{id:Rn,overflow:On}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ft(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tt=t,wt=null,!0):!1;default:return!1}}function ph(t){return(t.mode&1)!==0&&(t.flags&128)===0}function mh(t){if(ve){var e=wt;if(e){var n=e;if(!ny(t,e)){if(ph(t))throw Error(P(418));e=Er(n.nextSibling);var r=Tt;e&&ny(t,e)?Tw(r,n):(t.flags=t.flags&-4097|2,ve=!1,Tt=t)}}else{if(ph(t))throw Error(P(418));t.flags=t.flags&-4097|2,ve=!1,Tt=t}}}function ry(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tt=t}function gl(t){if(t!==Tt)return!1;if(!ve)return ry(t),ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ch(t.type,t.memoizedProps)),e&&(e=wt)){if(ph(t))throw Iw(),Error(P(418));for(;e;)Tw(t,e),e=Er(e.nextSibling)}if(ry(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(P(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wt=Er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wt=null}}else wt=Tt?Er(t.stateNode.nextSibling):null;return!0}function Iw(){for(var t=wt;t;)t=Er(t.nextSibling)}function Is(){wt=Tt=null,ve=!1}function im(t){Kt===null?Kt=[t]:Kt.push(t)}var sk=Gn.ReactCurrentBatchConfig;function Ht(t,e){if(t&&t.defaultProps){e=Se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Iu=Br(null),bu=null,is=null,sm=null;function om(){sm=is=bu=null}function am(t){var e=Iu.current;ge(Iu),t._currentValue=e}function gh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function gs(t,e){bu=t,sm=is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(at=!0),t.firstContext=null)}function jt(t){var e=t._currentValue;if(sm!==t)if(t={context:t,memoizedValue:e,next:null},is===null){if(bu===null)throw Error(P(308));is=t,bu.dependencies={lanes:0,firstContext:t}}else is=is.next=t;return e}var ii=null;function lm(t){ii===null?ii=[t]:ii.push(t)}function bw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,lm(e)):(n.next=i.next,i.next=n),e.interleaved=n,Un(t,r)}function Un(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var sr=!1;function um(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Dn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Sr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Un(t,n)}return i=r.interleaved,i===null?(e.next=e,lm(r)):(e.next=i.next,i.next=e),r.interleaved=e,Un(t,n)}function Ul(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qp(t,n)}}function iy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ku(t,e,n,r){var i=t.updateQueue;sr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var c=i.baseState;o=0,d=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(f=e,p=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){c=v.call(p,c,f);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,f=typeof v=="function"?v.call(p,c,f):v,f==null)break e;c=Se({},c,f);break e;case 2:sr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=p,l=c):d=d.next=p,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);_i|=o,t.lanes=o,t.memoizedState=c}}function sy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var Pw=new b1.Component().refs;function yh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Tc={isMounted:function(t){return(t=t._reactInternals)?Ni(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=nt(),i=xr(t),s=Dn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Sr(t,s,i),e!==null&&(Zt(e,t,i,r),Ul(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=nt(),i=xr(t),s=Dn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Sr(t,s,i),e!==null&&(Zt(e,t,i,r),Ul(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nt(),r=xr(t),i=Dn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Sr(t,i,r),e!==null&&(Zt(e,t,r,n),Ul(e,t,r))}};function oy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!na(n,r)||!na(i,s):!0}function Rw(t,e,n){var r=!1,i=Lr,s=e.contextType;return typeof s=="object"&&s!==null?s=jt(s):(i=dt(e)?gi:Qe.current,r=e.contextTypes,s=(r=r!=null)?Ts(t,i):Lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Tc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ay(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Tc.enqueueReplaceState(e,e.state,null)}function vh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Pw,um(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=jt(s):(s=dt(e)?gi:Qe.current,i.context=Ts(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(yh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Tc.enqueueReplaceState(i,i.state,null),ku(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ho(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Pw&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,t))}return t}function yl(t,e){throw t=Object.prototype.toString.call(e),Error(P(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ly(t){var e=t._init;return e(t._payload)}function Ow(t){function e(g,h){if(t){var y=g.deletions;y===null?(g.deletions=[h],g.flags|=16):y.push(h)}}function n(g,h){if(!t)return null;for(;h!==null;)e(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=Tr(g,h),g.index=0,g.sibling=null,g}function s(g,h,y){return g.index=y,t?(y=g.alternate,y!==null?(y=y.index,y<h?(g.flags|=2,h):y):(g.flags|=2,h)):(g.flags|=1048576,h)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,h,y,w){return h===null||h.tag!==6?(h=tf(y,g.mode,w),h.return=g,h):(h=i(h,y),h.return=g,h)}function l(g,h,y,w){var T=y.type;return T===Qi?d(g,h,y.props.children,w,y.key):h!==null&&(h.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ir&&ly(T)===h.type)?(w=i(h,y.props),w.ref=ho(g,h,y),w.return=g,w):(w=Gl(y.type,y.key,y.props,null,g.mode,w),w.ref=ho(g,h,y),w.return=g,w)}function u(g,h,y,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=nf(y,g.mode,w),h.return=g,h):(h=i(h,y.children||[]),h.return=g,h)}function d(g,h,y,w,T){return h===null||h.tag!==7?(h=ci(y,g.mode,w,T),h.return=g,h):(h=i(h,y),h.return=g,h)}function c(g,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=tf(""+h,g.mode,y),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ol:return y=Gl(h.type,h.key,h.props,null,g.mode,y),y.ref=ho(g,null,h),y.return=g,y;case Yi:return h=nf(h,g.mode,y),h.return=g,h;case ir:var w=h._init;return c(g,w(h._payload),y)}if(Co(h)||ao(h))return h=ci(h,g.mode,y,null),h.return=g,h;yl(g,h)}return null}function f(g,h,y,w){var T=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:a(g,h,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ol:return y.key===T?l(g,h,y,w):null;case Yi:return y.key===T?u(g,h,y,w):null;case ir:return T=y._init,f(g,h,T(y._payload),w)}if(Co(y)||ao(y))return T!==null?null:d(g,h,y,w,null);yl(g,y)}return null}function p(g,h,y,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(y)||null,a(h,g,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ol:return g=g.get(w.key===null?y:w.key)||null,l(h,g,w,T);case Yi:return g=g.get(w.key===null?y:w.key)||null,u(h,g,w,T);case ir:var C=w._init;return p(g,h,y,C(w._payload),T)}if(Co(w)||ao(w))return g=g.get(y)||null,d(h,g,w,T,null);yl(h,w)}return null}function v(g,h,y,w){for(var T=null,C=null,x=h,b=h=0,L=null;x!==null&&b<y.length;b++){x.index>b?(L=x,x=null):L=x.sibling;var F=f(g,x,y[b],w);if(F===null){x===null&&(x=L);break}t&&x&&F.alternate===null&&e(g,x),h=s(F,h,b),C===null?T=F:C.sibling=F,C=F,x=L}if(b===y.length)return n(g,x),ve&&Xr(g,b),T;if(x===null){for(;b<y.length;b++)x=c(g,y[b],w),x!==null&&(h=s(x,h,b),C===null?T=x:C.sibling=x,C=x);return ve&&Xr(g,b),T}for(x=r(g,x);b<y.length;b++)L=p(x,g,b,y[b],w),L!==null&&(t&&L.alternate!==null&&x.delete(L.key===null?b:L.key),h=s(L,h,b),C===null?T=L:C.sibling=L,C=L);return t&&x.forEach(function(B){return e(g,B)}),ve&&Xr(g,b),T}function _(g,h,y,w){var T=ao(y);if(typeof T!="function")throw Error(P(150));if(y=T.call(y),y==null)throw Error(P(151));for(var C=T=null,x=h,b=h=0,L=null,F=y.next();x!==null&&!F.done;b++,F=y.next()){x.index>b?(L=x,x=null):L=x.sibling;var B=f(g,x,F.value,w);if(B===null){x===null&&(x=L);break}t&&x&&B.alternate===null&&e(g,x),h=s(B,h,b),C===null?T=B:C.sibling=B,C=B,x=L}if(F.done)return n(g,x),ve&&Xr(g,b),T;if(x===null){for(;!F.done;b++,F=y.next())F=c(g,F.value,w),F!==null&&(h=s(F,h,b),C===null?T=F:C.sibling=F,C=F);return ve&&Xr(g,b),T}for(x=r(g,x);!F.done;b++,F=y.next())F=p(x,g,b,F.value,w),F!==null&&(t&&F.alternate!==null&&x.delete(F.key===null?b:F.key),h=s(F,h,b),C===null?T=F:C.sibling=F,C=F);return t&&x.forEach(function(At){return e(g,At)}),ve&&Xr(g,b),T}function S(g,h,y,w){if(typeof y=="object"&&y!==null&&y.type===Qi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ol:e:{for(var T=y.key,C=h;C!==null;){if(C.key===T){if(T=y.type,T===Qi){if(C.tag===7){n(g,C.sibling),h=i(C,y.props.children),h.return=g,g=h;break e}}else if(C.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ir&&ly(T)===C.type){n(g,C.sibling),h=i(C,y.props),h.ref=ho(g,C,y),h.return=g,g=h;break e}n(g,C);break}else e(g,C);C=C.sibling}y.type===Qi?(h=ci(y.props.children,g.mode,w,y.key),h.return=g,g=h):(w=Gl(y.type,y.key,y.props,null,g.mode,w),w.ref=ho(g,h,y),w.return=g,g=w)}return o(g);case Yi:e:{for(C=y.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){n(g,h.sibling),h=i(h,y.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else e(g,h);h=h.sibling}h=nf(y,g.mode,w),h.return=g,g=h}return o(g);case ir:return C=y._init,S(g,h,C(y._payload),w)}if(Co(y))return v(g,h,y,w);if(ao(y))return _(g,h,y,w);yl(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(n(g,h.sibling),h=i(h,y),h.return=g,g=h):(n(g,h),h=tf(y,g.mode,w),h.return=g,g=h),o(g)):n(g,h)}return S}var bs=Ow(!0),Nw=Ow(!1),$a={},pn=Br($a),oa=Br($a),aa=Br($a);function si(t){if(t===$a)throw Error(P(174));return t}function cm(t,e){switch(de(aa,e),de(oa,t),de(pn,$a),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Qf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Qf(e,t)}ge(pn),de(pn,e)}function ks(){ge(pn),ge(oa),ge(aa)}function Aw(t){si(aa.current);var e=si(pn.current),n=Qf(e,t.type);e!==n&&(de(oa,t),de(pn,n))}function dm(t){oa.current===t&&(ge(pn),ge(oa))}var _e=Br(0);function Pu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yd=[];function fm(){for(var t=0;t<Yd.length;t++)Yd[t]._workInProgressVersionPrimary=null;Yd.length=0}var zl=Gn.ReactCurrentDispatcher,Qd=Gn.ReactCurrentBatchConfig,vi=0,we=null,ke=null,Le=null,Ru=!1,Mo=!1,la=0,ok=0;function Ge(){throw Error(P(321))}function hm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!nn(t[n],e[n]))return!1;return!0}function pm(t,e,n,r,i,s){if(vi=s,we=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,zl.current=t===null||t.memoizedState===null?ck:dk,t=n(r,i),Mo){s=0;do{if(Mo=!1,la=0,25<=s)throw Error(P(301));s+=1,Le=ke=null,e.updateQueue=null,zl.current=fk,t=n(r,i)}while(Mo)}if(zl.current=Ou,e=ke!==null&&ke.next!==null,vi=0,Le=ke=we=null,Ru=!1,e)throw Error(P(300));return t}function mm(){var t=la!==0;return la=0,t}function un(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?we.memoizedState=Le=t:Le=Le.next=t,Le}function Ut(){if(ke===null){var t=we.alternate;t=t!==null?t.memoizedState:null}else t=ke.next;var e=Le===null?we.memoizedState:Le.next;if(e!==null)Le=e,ke=t;else{if(t===null)throw Error(P(310));ke=t,t={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Le===null?we.memoizedState=Le=t:Le=Le.next=t}return Le}function ua(t,e){return typeof e=="function"?e(t):e}function Xd(t){var e=Ut(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=ke,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((vi&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,o=r):l=l.next=c,we.lanes|=d,_i|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,nn(r,e.memoizedState)||(at=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,we.lanes|=s,_i|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Jd(t){var e=Ut(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);nn(s,e.memoizedState)||(at=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Lw(){}function Dw(t,e){var n=we,r=Ut(),i=e(),s=!nn(r.memoizedState,i);if(s&&(r.memoizedState=i,at=!0),r=r.queue,gm($w.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,ca(9,Fw.bind(null,n,r,i,e),void 0,null),Fe===null)throw Error(P(349));vi&30||Mw(n,e,i)}return i}function Mw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Fw(t,e,n,r){e.value=n,e.getSnapshot=r,jw(e)&&Uw(t)}function $w(t,e,n){return n(function(){jw(e)&&Uw(t)})}function jw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!nn(t,n)}catch{return!0}}function Uw(t){var e=Un(t,1);e!==null&&Zt(e,t,1,-1)}function uy(t){var e=un();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:t},e.queue=t,t=t.dispatch=uk.bind(null,we,t),[e.memoizedState,t]}function ca(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function zw(){return Ut().memoizedState}function Bl(t,e,n,r){var i=un();we.flags|=t,i.memoizedState=ca(1|e,n,void 0,r===void 0?null:r)}function Ic(t,e,n,r){var i=Ut();r=r===void 0?null:r;var s=void 0;if(ke!==null){var o=ke.memoizedState;if(s=o.destroy,r!==null&&hm(r,o.deps)){i.memoizedState=ca(e,n,s,r);return}}we.flags|=t,i.memoizedState=ca(1|e,n,s,r)}function cy(t,e){return Bl(8390656,8,t,e)}function gm(t,e){return Ic(2048,8,t,e)}function Bw(t,e){return Ic(4,2,t,e)}function Ww(t,e){return Ic(4,4,t,e)}function Vw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Hw(t,e,n){return n=n!=null?n.concat([t]):null,Ic(4,4,Vw.bind(null,e,t),n)}function ym(){}function Gw(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&hm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Kw(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&hm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function qw(t,e,n){return vi&21?(nn(n,e)||(n=X1(),we.lanes|=n,_i|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,at=!0),t.memoizedState=n)}function ak(t,e){var n=re;re=n!==0&&4>n?n:4,t(!0);var r=Qd.transition;Qd.transition={};try{t(!1),e()}finally{re=n,Qd.transition=r}}function Yw(){return Ut().memoizedState}function lk(t,e,n){var r=xr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qw(t))Xw(e,n);else if(n=bw(t,e,n,r),n!==null){var i=nt();Zt(n,t,r,i),Jw(n,e,r)}}function uk(t,e,n){var r=xr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qw(t))Xw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,nn(a,o)){var l=e.interleaved;l===null?(i.next=i,lm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=bw(t,e,i,r),n!==null&&(i=nt(),Zt(n,t,r,i),Jw(n,e,r))}}function Qw(t){var e=t.alternate;return t===we||e!==null&&e===we}function Xw(t,e){Mo=Ru=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Jw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qp(t,n)}}var Ou={readContext:jt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},ck={readContext:jt,useCallback:function(t,e){return un().memoizedState=[t,e===void 0?null:e],t},useContext:jt,useEffect:cy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Bl(4194308,4,Vw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Bl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Bl(4,2,t,e)},useMemo:function(t,e){var n=un();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=un();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=lk.bind(null,we,t),[r.memoizedState,t]},useRef:function(t){var e=un();return t={current:t},e.memoizedState=t},useState:uy,useDebugValue:ym,useDeferredValue:function(t){return un().memoizedState=t},useTransition:function(){var t=uy(!1),e=t[0];return t=ak.bind(null,t[1]),un().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=we,i=un();if(ve){if(n===void 0)throw Error(P(407));n=n()}else{if(n=e(),Fe===null)throw Error(P(349));vi&30||Mw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,cy($w.bind(null,r,s,t),[t]),r.flags|=2048,ca(9,Fw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=un(),e=Fe.identifierPrefix;if(ve){var n=On,r=Rn;n=(r&~(1<<32-Jt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=la++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ok++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},dk={readContext:jt,useCallback:Gw,useContext:jt,useEffect:gm,useImperativeHandle:Hw,useInsertionEffect:Bw,useLayoutEffect:Ww,useMemo:Kw,useReducer:Xd,useRef:zw,useState:function(){return Xd(ua)},useDebugValue:ym,useDeferredValue:function(t){var e=Ut();return qw(e,ke.memoizedState,t)},useTransition:function(){var t=Xd(ua)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:Lw,useSyncExternalStore:Dw,useId:Yw,unstable_isNewReconciler:!1},fk={readContext:jt,useCallback:Gw,useContext:jt,useEffect:gm,useImperativeHandle:Hw,useInsertionEffect:Bw,useLayoutEffect:Ww,useMemo:Kw,useReducer:Jd,useRef:zw,useState:function(){return Jd(ua)},useDebugValue:ym,useDeferredValue:function(t){var e=Ut();return ke===null?e.memoizedState=t:qw(e,ke.memoizedState,t)},useTransition:function(){var t=Jd(ua)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:Lw,useSyncExternalStore:Dw,useId:Yw,unstable_isNewReconciler:!1};function Ps(t,e){try{var n="",r=e;do n+=UI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Zd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function _h(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var hk=typeof WeakMap=="function"?WeakMap:Map;function Zw(t,e,n){n=Dn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Au||(Au=!0,Ph=r),_h(t,e)},n}function eE(t,e,n){n=Dn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){_h(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){_h(t,e),typeof r!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function dy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new hk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=bk.bind(null,t,e,n),e.then(t,t))}function fy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function hy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Dn(-1,1),e.tag=2,Sr(n,e,1))),n.lanes|=1),t)}var pk=Gn.ReactCurrentOwner,at=!1;function et(t,e,n,r){e.child=t===null?Nw(e,null,n,r):bs(e,t.child,n,r)}function py(t,e,n,r,i){n=n.render;var s=e.ref;return gs(e,i),r=pm(t,e,n,r,s,i),n=mm(),t!==null&&!at?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zn(t,e,i)):(ve&&n&&nm(e),e.flags|=1,et(t,e,r,i),e.child)}function my(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Tm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,tE(t,e,s,r,i)):(t=Gl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:na,n(o,r)&&t.ref===e.ref)return zn(t,e,i)}return e.flags|=1,t=Tr(s,r),t.ref=e.ref,t.return=e,e.child=t}function tE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(na(s,r)&&t.ref===e.ref)if(at=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(at=!0);else return e.lanes=t.lanes,zn(t,e,i)}return wh(t,e,n,r,i)}function nE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(os,_t),_t|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,de(os,_t),_t|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(os,_t),_t|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,de(os,_t),_t|=r;return et(t,e,i,n),e.child}function rE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function wh(t,e,n,r,i){var s=dt(n)?gi:Qe.current;return s=Ts(e,s),gs(e,i),n=pm(t,e,n,r,s,i),r=mm(),t!==null&&!at?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zn(t,e,i)):(ve&&r&&nm(e),e.flags|=1,et(t,e,n,i),e.child)}function gy(t,e,n,r,i){if(dt(n)){var s=!0;Cu(e)}else s=!1;if(gs(e,i),e.stateNode===null)Wl(t,e),Rw(e,n,r),vh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=jt(u):(u=dt(n)?gi:Qe.current,u=Ts(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&ay(e,o,r,u),sr=!1;var f=e.memoizedState;o.state=f,ku(e,r,o,i),l=e.memoizedState,a!==r||f!==l||ct.current||sr?(typeof d=="function"&&(yh(e,n,d,r),l=e.memoizedState),(a=sr||oy(e,n,a,r,f,l,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,kw(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Ht(e.type,a),o.props=u,c=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=jt(l):(l=dt(n)?gi:Qe.current,l=Ts(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||f!==l)&&ay(e,o,r,l),sr=!1,f=e.memoizedState,o.state=f,ku(e,r,o,i);var v=e.memoizedState;a!==c||f!==v||ct.current||sr?(typeof p=="function"&&(yh(e,n,p,r),v=e.memoizedState),(u=sr||oy(e,n,u,r,f,v,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Eh(t,e,n,r,s,i)}function Eh(t,e,n,r,i,s){rE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ty(e,n,!1),zn(t,e,s);r=e.stateNode,pk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=bs(e,t.child,null,s),e.child=bs(e,null,a,s)):et(t,e,a,s),e.memoizedState=r.state,i&&ty(e,n,!0),e.child}function iE(t){var e=t.stateNode;e.pendingContext?ey(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ey(t,e.context,!1),cm(t,e.containerInfo)}function yy(t,e,n,r,i){return Is(),im(i),e.flags|=256,et(t,e,n,r),e.child}var Sh={dehydrated:null,treeContext:null,retryLane:0};function Ch(t){return{baseLanes:t,cachePool:null,transitions:null}}function sE(t,e,n){var r=e.pendingProps,i=_e.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),de(_e,i&1),t===null)return mh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Pc(o,r,0,null),t=ci(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ch(n),e.memoizedState=Sh,t):vm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return mk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Tr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Tr(a,s):(s=ci(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ch(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Sh,r}return s=t.child,t=s.sibling,r=Tr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function vm(t,e){return e=Pc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function vl(t,e,n,r){return r!==null&&im(r),bs(e,t.child,null,n),t=vm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function mk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Zd(Error(P(422))),vl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Pc({mode:"visible",children:r.children},i,0,null),s=ci(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&bs(e,t.child,null,o),e.child.memoizedState=Ch(o),e.memoizedState=Sh,s);if(!(e.mode&1))return vl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(P(419)),r=Zd(s,r,void 0),vl(t,e,o,r)}if(a=(o&t.childLanes)!==0,at||a){if(r=Fe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Un(t,i),Zt(r,t,i,-1))}return xm(),r=Zd(Error(P(421))),vl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=kk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,wt=Er(i.nextSibling),Tt=e,ve=!0,Kt=null,t!==null&&(Dt[Mt++]=Rn,Dt[Mt++]=On,Dt[Mt++]=yi,Rn=t.id,On=t.overflow,yi=e),e=vm(e,r.children),e.flags|=4096,e)}function vy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),gh(t.return,e,n)}function ef(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function oE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(et(t,e,r.children,n),r=_e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vy(t,n,e);else if(t.tag===19)vy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(de(_e,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Pu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ef(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Pu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ef(e,!0,n,null,s);break;case"together":ef(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Wl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function zn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),_i|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(P(153));if(e.child!==null){for(t=e.child,n=Tr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Tr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function gk(t,e,n){switch(e.tag){case 3:iE(e),Is();break;case 5:Aw(e);break;case 1:dt(e.type)&&Cu(e);break;case 4:cm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;de(Iu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(de(_e,_e.current&1),e.flags|=128,null):n&e.child.childLanes?sE(t,e,n):(de(_e,_e.current&1),t=zn(t,e,n),t!==null?t.sibling:null);de(_e,_e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return oE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,nE(t,e,n)}return zn(t,e,n)}var aE,xh,lE,uE;aE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xh=function(){};lE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,si(pn.current);var s=null;switch(n){case"input":i=Gf(t,i),r=Gf(t,r),s=[];break;case"select":i=Se({},i,{value:void 0}),r=Se({},r,{value:void 0}),s=[];break;case"textarea":i=Yf(t,i),r=Yf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Eu)}Xf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Yo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Yo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&fe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};uE=function(t,e,n,r){n!==r&&(e.flags|=4)};function po(t,e){if(!ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ke(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function yk(t,e,n){var r=e.pendingProps;switch(rm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(e),null;case 1:return dt(e.type)&&Su(),Ke(e),null;case 3:return r=e.stateNode,ks(),ge(ct),ge(Qe),fm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(gl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Kt!==null&&(Nh(Kt),Kt=null))),xh(t,e),Ke(e),null;case 5:dm(e);var i=si(aa.current);if(n=e.type,t!==null&&e.stateNode!=null)lE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(P(166));return Ke(e),null}if(t=si(pn.current),gl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[fn]=e,r[sa]=s,t=(e.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<To.length;i++)fe(To[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":b0(r,s),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},fe("invalid",r);break;case"textarea":P0(r,s),fe("invalid",r)}Xf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ml(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ml(r.textContent,a,t),i=["children",""+a]):Yo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&fe("scroll",r)}switch(n){case"input":al(r),k0(r,s,!0);break;case"textarea":al(r),R0(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Eu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=M1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[fn]=e,t[sa]=r,aE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Jf(n,r),n){case"dialog":fe("cancel",t),fe("close",t),i=r;break;case"iframe":case"object":case"embed":fe("load",t),i=r;break;case"video":case"audio":for(i=0;i<To.length;i++)fe(To[i],t);i=r;break;case"source":fe("error",t),i=r;break;case"img":case"image":case"link":fe("error",t),fe("load",t),i=r;break;case"details":fe("toggle",t),i=r;break;case"input":b0(t,r),i=Gf(t,r),fe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Se({},r,{value:void 0}),fe("invalid",t);break;case"textarea":P0(t,r),i=Yf(t,r),fe("invalid",t);break;default:i=r}Xf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?j1(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&F1(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Qo(t,l):typeof l=="number"&&Qo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Yo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&fe("scroll",t):l!=null&&Bp(t,s,l,o))}switch(n){case"input":al(t),k0(t,r,!1);break;case"textarea":al(t),R0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ar(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?fs(t,!!r.multiple,s,!1):r.defaultValue!=null&&fs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Eu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ke(e),null;case 6:if(t&&e.stateNode!=null)uE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(P(166));if(n=si(aa.current),si(pn.current),gl(e)){if(r=e.stateNode,n=e.memoizedProps,r[fn]=e,(s=r.nodeValue!==n)&&(t=Tt,t!==null))switch(t.tag){case 3:ml(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ml(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[fn]=e,e.stateNode=r}return Ke(e),null;case 13:if(ge(_e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&wt!==null&&e.mode&1&&!(e.flags&128))Iw(),Is(),e.flags|=98560,s=!1;else if(s=gl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(P(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(P(317));s[fn]=e}else Is(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ke(e),s=!1}else Kt!==null&&(Nh(Kt),Kt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||_e.current&1?Oe===0&&(Oe=3):xm())),e.updateQueue!==null&&(e.flags|=4),Ke(e),null);case 4:return ks(),xh(t,e),t===null&&ra(e.stateNode.containerInfo),Ke(e),null;case 10:return am(e.type._context),Ke(e),null;case 17:return dt(e.type)&&Su(),Ke(e),null;case 19:if(ge(_e),s=e.memoizedState,s===null)return Ke(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)po(s,!1);else{if(Oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Pu(t),o!==null){for(e.flags|=128,po(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return de(_e,_e.current&1|2),e.child}t=t.sibling}s.tail!==null&&Te()>Rs&&(e.flags|=128,r=!0,po(s,!1),e.lanes=4194304)}else{if(!r)if(t=Pu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),po(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ve)return Ke(e),null}else 2*Te()-s.renderingStartTime>Rs&&n!==1073741824&&(e.flags|=128,r=!0,po(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Te(),e.sibling=null,n=_e.current,de(_e,r?n&1|2:n&1),e):(Ke(e),null);case 22:case 23:return Cm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?_t&1073741824&&(Ke(e),e.subtreeFlags&6&&(e.flags|=8192)):Ke(e),null;case 24:return null;case 25:return null}throw Error(P(156,e.tag))}function vk(t,e){switch(rm(e),e.tag){case 1:return dt(e.type)&&Su(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ks(),ge(ct),ge(Qe),fm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return dm(e),null;case 13:if(ge(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(P(340));Is()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(_e),null;case 4:return ks(),null;case 10:return am(e.type._context),null;case 22:case 23:return Cm(),null;case 24:return null;default:return null}}var _l=!1,qe=!1,_k=typeof WeakSet=="function"?WeakSet:Set,A=null;function ss(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(t,e,r)}else n.current=null}function Th(t,e,n){try{n()}catch(r){Ce(t,e,r)}}var _y=!1;function wk(t,e){if(lh=vu,t=hw(),tm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,c=t,f=null;t:for(;;){for(var p;c!==n||i!==0&&c.nodeType!==3||(a=o+i),c!==s||r!==0&&c.nodeType!==3||(l=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(p=c.firstChild)!==null;)f=c,c=p;for(;;){if(c===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++d===r&&(l=o),(p=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(uh={focusedElem:t,selectionRange:n},vu=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,S=v.memoizedState,g=e.stateNode,h=g.getSnapshotBeforeUpdate(e.elementType===e.type?_:Ht(e.type,_),S);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(w){Ce(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return v=_y,_y=!1,v}function Fo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Th(e,n,s)}i=i.next}while(i!==r)}}function bc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ih(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function cE(t){var e=t.alternate;e!==null&&(t.alternate=null,cE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[fn],delete e[sa],delete e[fh],delete e[nk],delete e[rk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function dE(t){return t.tag===5||t.tag===3||t.tag===4}function wy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||dE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Eu));else if(r!==4&&(t=t.child,t!==null))for(bh(t,e,n),t=t.sibling;t!==null;)bh(t,e,n),t=t.sibling}function kh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(kh(t,e,n),t=t.sibling;t!==null;)kh(t,e,n),t=t.sibling}var Ue=null,Gt=!1;function tr(t,e,n){for(n=n.child;n!==null;)fE(t,e,n),n=n.sibling}function fE(t,e,n){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(_c,n)}catch{}switch(n.tag){case 5:qe||ss(n,e);case 6:var r=Ue,i=Gt;Ue=null,tr(t,e,n),Ue=r,Gt=i,Ue!==null&&(Gt?(t=Ue,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(Gt?(t=Ue,n=n.stateNode,t.nodeType===8?Kd(t.parentNode,n):t.nodeType===1&&Kd(t,n),ea(t)):Kd(Ue,n.stateNode));break;case 4:r=Ue,i=Gt,Ue=n.stateNode.containerInfo,Gt=!0,tr(t,e,n),Ue=r,Gt=i;break;case 0:case 11:case 14:case 15:if(!qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Th(n,e,o),i=i.next}while(i!==r)}tr(t,e,n);break;case 1:if(!qe&&(ss(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ce(n,e,a)}tr(t,e,n);break;case 21:tr(t,e,n);break;case 22:n.mode&1?(qe=(r=qe)||n.memoizedState!==null,tr(t,e,n),qe=r):tr(t,e,n);break;default:tr(t,e,n)}}function Ey(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new _k),e.forEach(function(r){var i=Pk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Bt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ue=a.stateNode,Gt=!1;break e;case 3:Ue=a.stateNode.containerInfo,Gt=!0;break e;case 4:Ue=a.stateNode.containerInfo,Gt=!0;break e}a=a.return}if(Ue===null)throw Error(P(160));fE(s,o,i),Ue=null,Gt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ce(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)hE(e,t),e=e.sibling}function hE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bt(e,t),ln(t),r&4){try{Fo(3,t,t.return),bc(3,t)}catch(_){Ce(t,t.return,_)}try{Fo(5,t,t.return)}catch(_){Ce(t,t.return,_)}}break;case 1:Bt(e,t),ln(t),r&512&&n!==null&&ss(n,n.return);break;case 5:if(Bt(e,t),ln(t),r&512&&n!==null&&ss(n,n.return),t.flags&32){var i=t.stateNode;try{Qo(i,"")}catch(_){Ce(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&L1(i,s),Jf(a,o);var u=Jf(a,s);for(o=0;o<l.length;o+=2){var d=l[o],c=l[o+1];d==="style"?j1(i,c):d==="dangerouslySetInnerHTML"?F1(i,c):d==="children"?Qo(i,c):Bp(i,d,c,u)}switch(a){case"input":Kf(i,s);break;case"textarea":D1(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?fs(i,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?fs(i,!!s.multiple,s.defaultValue,!0):fs(i,!!s.multiple,s.multiple?[]:"",!1))}i[sa]=s}catch(_){Ce(t,t.return,_)}}break;case 6:if(Bt(e,t),ln(t),r&4){if(t.stateNode===null)throw Error(P(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){Ce(t,t.return,_)}}break;case 3:if(Bt(e,t),ln(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ea(e.containerInfo)}catch(_){Ce(t,t.return,_)}break;case 4:Bt(e,t),ln(t);break;case 13:Bt(e,t),ln(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Em=Te())),r&4&&Ey(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(qe=(u=qe)||d,Bt(e,t),qe=u):Bt(e,t),ln(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(A=t,d=t.child;d!==null;){for(c=A=d;A!==null;){switch(f=A,p=f.child,f.tag){case 0:case 11:case 14:case 15:Fo(4,f,f.return);break;case 1:ss(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){Ce(r,n,_)}}break;case 5:ss(f,f.return);break;case 22:if(f.memoizedState!==null){Cy(c);continue}}p!==null?(p.return=f,A=p):Cy(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=c.stateNode,l=c.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=$1("display",o))}catch(_){Ce(t,t.return,_)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(_){Ce(t,t.return,_)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Bt(e,t),ln(t),r&4&&Ey(t);break;case 21:break;default:Bt(e,t),ln(t)}}function ln(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(dE(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Qo(i,""),r.flags&=-33);var s=wy(t);kh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=wy(t);bh(t,a,o);break;default:throw Error(P(161))}}catch(l){Ce(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ek(t,e,n){A=t,pE(t)}function pE(t,e,n){for(var r=(t.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||_l;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||qe;a=_l;var u=qe;if(_l=o,(qe=l)&&!u)for(A=i;A!==null;)o=A,l=o.child,o.tag===22&&o.memoizedState!==null?xy(i):l!==null?(l.return=o,A=l):xy(i);for(;s!==null;)A=s,pE(s),s=s.sibling;A=i,_l=a,qe=u}Sy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,A=s):Sy(t)}}function Sy(t){for(;A!==null;){var e=A;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qe||bc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!qe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ht(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&sy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}sy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&ea(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}qe||e.flags&512&&Ih(e)}catch(f){Ce(e,e.return,f)}}if(e===t){A=null;break}if(n=e.sibling,n!==null){n.return=e.return,A=n;break}A=e.return}}function Cy(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var n=e.sibling;if(n!==null){n.return=e.return,A=n;break}A=e.return}}function xy(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{bc(4,e)}catch(l){Ce(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ce(e,i,l)}}var s=e.return;try{Ih(e)}catch(l){Ce(e,s,l)}break;case 5:var o=e.return;try{Ih(e)}catch(l){Ce(e,o,l)}}}catch(l){Ce(e,e.return,l)}if(e===t){A=null;break}var a=e.sibling;if(a!==null){a.return=e.return,A=a;break}A=e.return}}var Sk=Math.ceil,Nu=Gn.ReactCurrentDispatcher,_m=Gn.ReactCurrentOwner,$t=Gn.ReactCurrentBatchConfig,X=0,Fe=null,be=null,We=0,_t=0,os=Br(0),Oe=0,da=null,_i=0,kc=0,wm=0,$o=null,st=null,Em=0,Rs=1/0,bn=null,Au=!1,Ph=null,Cr=null,wl=!1,mr=null,Lu=0,jo=0,Rh=null,Vl=-1,Hl=0;function nt(){return X&6?Te():Vl!==-1?Vl:Vl=Te()}function xr(t){return t.mode&1?X&2&&We!==0?We&-We:sk.transition!==null?(Hl===0&&(Hl=X1()),Hl):(t=re,t!==0||(t=window.event,t=t===void 0?16:iw(t.type)),t):1}function Zt(t,e,n,r){if(50<jo)throw jo=0,Rh=null,Error(P(185));Da(t,n,r),(!(X&2)||t!==Fe)&&(t===Fe&&(!(X&2)&&(kc|=n),Oe===4&&lr(t,We)),ft(t,r),n===1&&X===0&&!(e.mode&1)&&(Rs=Te()+500,xc&&Wr()))}function ft(t,e){var n=t.callbackNode;sb(t,e);var r=yu(t,t===Fe?We:0);if(r===0)n!==null&&A0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&A0(n),e===1)t.tag===0?ik(Ty.bind(null,t)):Cw(Ty.bind(null,t)),ek(function(){!(X&6)&&Wr()}),n=null;else{switch(J1(r)){case 1:n=Kp;break;case 4:n=Y1;break;case 16:n=gu;break;case 536870912:n=Q1;break;default:n=gu}n=SE(n,mE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function mE(t,e){if(Vl=-1,Hl=0,X&6)throw Error(P(327));var n=t.callbackNode;if(ys()&&t.callbackNode!==n)return null;var r=yu(t,t===Fe?We:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Du(t,r);else{e=r;var i=X;X|=2;var s=yE();(Fe!==t||We!==e)&&(bn=null,Rs=Te()+500,ui(t,e));do try{Tk();break}catch(a){gE(t,a)}while(!0);om(),Nu.current=s,X=i,be!==null?e=0:(Fe=null,We=0,e=Oe)}if(e!==0){if(e===2&&(i=rh(t),i!==0&&(r=i,e=Oh(t,i))),e===1)throw n=da,ui(t,0),lr(t,r),ft(t,Te()),n;if(e===6)lr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Ck(i)&&(e=Du(t,r),e===2&&(s=rh(t),s!==0&&(r=s,e=Oh(t,s))),e===1))throw n=da,ui(t,0),lr(t,r),ft(t,Te()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(P(345));case 2:Jr(t,st,bn);break;case 3:if(lr(t,r),(r&130023424)===r&&(e=Em+500-Te(),10<e)){if(yu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){nt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=dh(Jr.bind(null,t,st,bn),e);break}Jr(t,st,bn);break;case 4:if(lr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Jt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sk(r/1960))-r,10<r){t.timeoutHandle=dh(Jr.bind(null,t,st,bn),r);break}Jr(t,st,bn);break;case 5:Jr(t,st,bn);break;default:throw Error(P(329))}}}return ft(t,Te()),t.callbackNode===n?mE.bind(null,t):null}function Oh(t,e){var n=$o;return t.current.memoizedState.isDehydrated&&(ui(t,e).flags|=256),t=Du(t,e),t!==2&&(e=st,st=n,e!==null&&Nh(e)),t}function Nh(t){st===null?st=t:st.push.apply(st,t)}function Ck(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!nn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function lr(t,e){for(e&=~wm,e&=~kc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jt(e),r=1<<n;t[n]=-1,e&=~r}}function Ty(t){if(X&6)throw Error(P(327));ys();var e=yu(t,0);if(!(e&1))return ft(t,Te()),null;var n=Du(t,e);if(t.tag!==0&&n===2){var r=rh(t);r!==0&&(e=r,n=Oh(t,r))}if(n===1)throw n=da,ui(t,0),lr(t,e),ft(t,Te()),n;if(n===6)throw Error(P(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Jr(t,st,bn),ft(t,Te()),null}function Sm(t,e){var n=X;X|=1;try{return t(e)}finally{X=n,X===0&&(Rs=Te()+500,xc&&Wr())}}function wi(t){mr!==null&&mr.tag===0&&!(X&6)&&ys();var e=X;X|=1;var n=$t.transition,r=re;try{if($t.transition=null,re=1,t)return t()}finally{re=r,$t.transition=n,X=e,!(X&6)&&Wr()}}function Cm(){_t=os.current,ge(os)}function ui(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Zb(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(rm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Su();break;case 3:ks(),ge(ct),ge(Qe),fm();break;case 5:dm(r);break;case 4:ks();break;case 13:ge(_e);break;case 19:ge(_e);break;case 10:am(r.type._context);break;case 22:case 23:Cm()}n=n.return}if(Fe=t,be=t=Tr(t.current,null),We=_t=e,Oe=0,da=null,wm=kc=_i=0,st=$o=null,ii!==null){for(e=0;e<ii.length;e++)if(n=ii[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ii=null}return t}function gE(t,e){do{var n=be;try{if(om(),zl.current=Ou,Ru){for(var r=we.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ru=!1}if(vi=0,Le=ke=we=null,Mo=!1,la=0,_m.current=null,n===null||n.return===null){Oe=1,da=e,be=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=We,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=fy(o);if(p!==null){p.flags&=-257,hy(p,o,a,s,e),p.mode&1&&dy(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){dy(s,u,e),xm();break e}l=Error(P(426))}}else if(ve&&a.mode&1){var S=fy(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),hy(S,o,a,s,e),im(Ps(l,a));break e}}s=l=Ps(l,a),Oe!==4&&(Oe=2),$o===null?$o=[s]:$o.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=Zw(s,l,e);iy(s,g);break e;case 1:a=l;var h=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Cr===null||!Cr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=eE(s,a,e);iy(s,w);break e}}s=s.return}while(s!==null)}_E(n)}catch(T){e=T,be===n&&n!==null&&(be=n=n.return);continue}break}while(!0)}function yE(){var t=Nu.current;return Nu.current=Ou,t===null?Ou:t}function xm(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),Fe===null||!(_i&268435455)&&!(kc&268435455)||lr(Fe,We)}function Du(t,e){var n=X;X|=2;var r=yE();(Fe!==t||We!==e)&&(bn=null,ui(t,e));do try{xk();break}catch(i){gE(t,i)}while(!0);if(om(),X=n,Nu.current=r,be!==null)throw Error(P(261));return Fe=null,We=0,Oe}function xk(){for(;be!==null;)vE(be)}function Tk(){for(;be!==null&&!QI();)vE(be)}function vE(t){var e=EE(t.alternate,t,_t);t.memoizedProps=t.pendingProps,e===null?_E(t):be=e,_m.current=null}function _E(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=vk(n,e),n!==null){n.flags&=32767,be=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Oe=6,be=null;return}}else if(n=yk(n,e,_t),n!==null){be=n;return}if(e=e.sibling,e!==null){be=e;return}be=e=t}while(e!==null);Oe===0&&(Oe=5)}function Jr(t,e,n){var r=re,i=$t.transition;try{$t.transition=null,re=1,Ik(t,e,n,r)}finally{$t.transition=i,re=r}return null}function Ik(t,e,n,r){do ys();while(mr!==null);if(X&6)throw Error(P(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(P(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ob(t,s),t===Fe&&(be=Fe=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wl||(wl=!0,SE(gu,function(){return ys(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=$t.transition,$t.transition=null;var o=re;re=1;var a=X;X|=4,_m.current=null,wk(t,n),hE(n,t),Gb(uh),vu=!!lh,uh=lh=null,t.current=n,Ek(n),XI(),X=a,re=o,$t.transition=s}else t.current=n;if(wl&&(wl=!1,mr=t,Lu=i),s=t.pendingLanes,s===0&&(Cr=null),eb(n.stateNode),ft(t,Te()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Au)throw Au=!1,t=Ph,Ph=null,t;return Lu&1&&t.tag!==0&&ys(),s=t.pendingLanes,s&1?t===Rh?jo++:(jo=0,Rh=t):jo=0,Wr(),null}function ys(){if(mr!==null){var t=J1(Lu),e=$t.transition,n=re;try{if($t.transition=null,re=16>t?16:t,mr===null)var r=!1;else{if(t=mr,mr=null,Lu=0,X&6)throw Error(P(331));var i=X;for(X|=4,A=t.current;A!==null;){var s=A,o=s.child;if(A.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(A=u;A!==null;){var d=A;switch(d.tag){case 0:case 11:case 15:Fo(8,d,s)}var c=d.child;if(c!==null)c.return=d,A=c;else for(;A!==null;){d=A;var f=d.sibling,p=d.return;if(cE(d),d===u){A=null;break}if(f!==null){f.return=p,A=f;break}A=p}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var S=_.sibling;_.sibling=null,_=S}while(_!==null)}}A=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Fo(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,A=g;break e}A=s.return}}var h=t.current;for(A=h;A!==null;){o=A;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,A=y;else e:for(o=h;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:bc(9,a)}}catch(T){Ce(a,a.return,T)}if(a===o){A=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,A=w;break e}A=a.return}}if(X=i,Wr(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(_c,t)}catch{}r=!0}return r}finally{re=n,$t.transition=e}}return!1}function Iy(t,e,n){e=Ps(n,e),e=Zw(t,e,1),t=Sr(t,e,1),e=nt(),t!==null&&(Da(t,1,e),ft(t,e))}function Ce(t,e,n){if(t.tag===3)Iy(t,t,n);else for(;e!==null;){if(e.tag===3){Iy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Cr===null||!Cr.has(r))){t=Ps(n,t),t=eE(e,t,1),e=Sr(e,t,1),t=nt(),e!==null&&(Da(e,1,t),ft(e,t));break}}e=e.return}}function bk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=nt(),t.pingedLanes|=t.suspendedLanes&n,Fe===t&&(We&n)===n&&(Oe===4||Oe===3&&(We&130023424)===We&&500>Te()-Em?ui(t,0):wm|=n),ft(t,e)}function wE(t,e){e===0&&(t.mode&1?(e=cl,cl<<=1,!(cl&130023424)&&(cl=4194304)):e=1);var n=nt();t=Un(t,e),t!==null&&(Da(t,e,n),ft(t,n))}function kk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),wE(t,n)}function Pk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(e),wE(t,n)}var EE;EE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ct.current)at=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return at=!1,gk(t,e,n);at=!!(t.flags&131072)}else at=!1,ve&&e.flags&1048576&&xw(e,Tu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Wl(t,e),t=e.pendingProps;var i=Ts(e,Qe.current);gs(e,n),i=pm(null,e,r,t,i,n);var s=mm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dt(r)?(s=!0,Cu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,um(e),i.updater=Tc,e.stateNode=i,i._reactInternals=e,vh(e,r,t,n),e=Eh(null,e,r,!0,s,n)):(e.tag=0,ve&&s&&nm(e),et(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Wl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Ok(r),t=Ht(r,t),i){case 0:e=wh(null,e,r,t,n);break e;case 1:e=gy(null,e,r,t,n);break e;case 11:e=py(null,e,r,t,n);break e;case 14:e=my(null,e,r,Ht(r.type,t),n);break e}throw Error(P(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),wh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),gy(t,e,r,i,n);case 3:e:{if(iE(e),t===null)throw Error(P(387));r=e.pendingProps,s=e.memoizedState,i=s.element,kw(t,e),ku(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ps(Error(P(423)),e),e=yy(t,e,r,n,i);break e}else if(r!==i){i=Ps(Error(P(424)),e),e=yy(t,e,r,n,i);break e}else for(wt=Er(e.stateNode.containerInfo.firstChild),Tt=e,ve=!0,Kt=null,n=Nw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Is(),r===i){e=zn(t,e,n);break e}et(t,e,r,n)}e=e.child}return e;case 5:return Aw(e),t===null&&mh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ch(r,i)?o=null:s!==null&&ch(r,s)&&(e.flags|=32),rE(t,e),et(t,e,o,n),e.child;case 6:return t===null&&mh(e),null;case 13:return sE(t,e,n);case 4:return cm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=bs(e,null,r,n):et(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),py(t,e,r,i,n);case 7:return et(t,e,e.pendingProps,n),e.child;case 8:return et(t,e,e.pendingProps.children,n),e.child;case 12:return et(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,de(Iu,r._currentValue),r._currentValue=o,s!==null)if(nn(s.value,o)){if(s.children===i.children&&!ct.current){e=zn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Dn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),gh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(P(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),gh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}et(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,gs(e,n),i=jt(i),r=r(i),e.flags|=1,et(t,e,r,n),e.child;case 14:return r=e.type,i=Ht(r,e.pendingProps),i=Ht(r.type,i),my(t,e,r,i,n);case 15:return tE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ht(r,i),Wl(t,e),e.tag=1,dt(r)?(t=!0,Cu(e)):t=!1,gs(e,n),Rw(e,r,i),vh(e,r,i,n),Eh(null,e,r,!0,t,n);case 19:return oE(t,e,n);case 22:return nE(t,e,n)}throw Error(P(156,e.tag))};function SE(t,e){return q1(t,e)}function Rk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(t,e,n,r){return new Rk(t,e,n,r)}function Tm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ok(t){if(typeof t=="function")return Tm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Vp)return 11;if(t===Hp)return 14}return 2}function Tr(t,e){var n=t.alternate;return n===null?(n=Ft(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Gl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Tm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Qi:return ci(n.children,i,s,e);case Wp:o=8,i|=8;break;case Bf:return t=Ft(12,n,e,i|2),t.elementType=Bf,t.lanes=s,t;case Wf:return t=Ft(13,n,e,i),t.elementType=Wf,t.lanes=s,t;case Vf:return t=Ft(19,n,e,i),t.elementType=Vf,t.lanes=s,t;case O1:return Pc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P1:o=10;break e;case R1:o=9;break e;case Vp:o=11;break e;case Hp:o=14;break e;case ir:o=16,r=null;break e}throw Error(P(130,t==null?t:typeof t,""))}return e=Ft(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ci(t,e,n,r){return t=Ft(7,t,r,e),t.lanes=n,t}function Pc(t,e,n,r){return t=Ft(22,t,r,e),t.elementType=O1,t.lanes=n,t.stateNode={isHidden:!1},t}function tf(t,e,n){return t=Ft(6,t,null,e),t.lanes=n,t}function nf(t,e,n){return e=Ft(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Nk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Md(0),this.expirationTimes=Md(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Md(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Im(t,e,n,r,i,s,o,a,l){return t=new Nk(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ft(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},um(s),t}function Ak(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function CE(t){if(!t)return Lr;t=t._reactInternals;e:{if(Ni(t)!==t||t.tag!==1)throw Error(P(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(P(171))}if(t.tag===1){var n=t.type;if(dt(n))return Sw(t,n,e)}return e}function xE(t,e,n,r,i,s,o,a,l){return t=Im(n,r,!0,t,i,s,o,a,l),t.context=CE(null),n=t.current,r=nt(),i=xr(n),s=Dn(r,i),s.callback=e??null,Sr(n,s,i),t.current.lanes=i,Da(t,i,r),ft(t,r),t}function Rc(t,e,n,r){var i=e.current,s=nt(),o=xr(i);return n=CE(n),e.context===null?e.context=n:e.pendingContext=n,e=Dn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Sr(i,e,o),t!==null&&(Zt(t,i,o,s),Ul(t,i,o)),o}function Mu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function by(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function bm(t,e){by(t,e),(t=t.alternate)&&by(t,e)}function Lk(){return null}var TE=typeof reportError=="function"?reportError:function(t){console.error(t)};function km(t){this._internalRoot=t}Oc.prototype.render=km.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(P(409));Rc(t,e,null,null)};Oc.prototype.unmount=km.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wi(function(){Rc(null,t,null,null)}),e[jn]=null}};function Oc(t){this._internalRoot=t}Oc.prototype.unstable_scheduleHydration=function(t){if(t){var e=tw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ar.length&&e!==0&&e<ar[n].priority;n++);ar.splice(n,0,t),n===0&&rw(t)}};function Pm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Nc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ky(){}function Dk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Mu(o);s.call(u)}}var o=xE(e,r,t,0,null,!1,!1,"",ky);return t._reactRootContainer=o,t[jn]=o.current,ra(t.nodeType===8?t.parentNode:t),wi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Mu(l);a.call(u)}}var l=Im(t,0,!1,null,null,!1,!1,"",ky);return t._reactRootContainer=l,t[jn]=l.current,ra(t.nodeType===8?t.parentNode:t),wi(function(){Rc(e,l,n,r)}),l}function Ac(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Mu(o);a.call(l)}}Rc(e,o,t,i)}else o=Dk(n,e,t,i,r);return Mu(o)}Z1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=xo(e.pendingLanes);n!==0&&(qp(e,n|1),ft(e,Te()),!(X&6)&&(Rs=Te()+500,Wr()))}break;case 13:wi(function(){var r=Un(t,1);if(r!==null){var i=nt();Zt(r,t,1,i)}}),bm(t,1)}};Yp=function(t){if(t.tag===13){var e=Un(t,134217728);if(e!==null){var n=nt();Zt(e,t,134217728,n)}bm(t,134217728)}};ew=function(t){if(t.tag===13){var e=xr(t),n=Un(t,e);if(n!==null){var r=nt();Zt(n,t,e,r)}bm(t,e)}};tw=function(){return re};nw=function(t,e){var n=re;try{return re=t,e()}finally{re=n}};eh=function(t,e,n){switch(e){case"input":if(Kf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Cc(r);if(!i)throw Error(P(90));A1(r),Kf(r,i)}}}break;case"textarea":D1(t,n);break;case"select":e=n.value,e!=null&&fs(t,!!n.multiple,e,!1)}};B1=Sm;W1=wi;var Mk={usingClientEntryPoint:!1,Events:[Fa,es,Cc,U1,z1,Sm]},mo={findFiberByHostInstance:ri,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Fk={bundleType:mo.bundleType,version:mo.version,rendererPackageName:mo.rendererPackageName,rendererConfig:mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=G1(t),t===null?null:t.stateNode},findFiberByHostInstance:mo.findFiberByHostInstance||Lk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var El=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!El.isDisabled&&El.supportsFiber)try{_c=El.inject(Fk),hn=El}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mk;Rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pm(e))throw Error(P(200));return Ak(t,e,null,n)};Rt.createRoot=function(t,e){if(!Pm(t))throw Error(P(299));var n=!1,r="",i=TE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Im(t,1,!1,null,null,n,!1,r,i),t[jn]=e.current,ra(t.nodeType===8?t.parentNode:t),new km(e)};Rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(P(188)):(t=Object.keys(t).join(","),Error(P(268,t)));return t=G1(e),t=t===null?null:t.stateNode,t};Rt.flushSync=function(t){return wi(t)};Rt.hydrate=function(t,e,n){if(!Nc(e))throw Error(P(200));return Ac(null,t,e,!0,n)};Rt.hydrateRoot=function(t,e,n){if(!Pm(t))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=TE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=xE(e,null,t,1,n??null,i,!1,s,o),t[jn]=e.current,ra(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Oc(e)};Rt.render=function(t,e,n){if(!Nc(e))throw Error(P(200));return Ac(null,t,e,!1,n)};Rt.unmountComponentAtNode=function(t){if(!Nc(t))throw Error(P(40));return t._reactRootContainer?(wi(function(){Ac(null,null,t,!1,function(){t._reactRootContainer=null,t[jn]=null})}),!0):!1};Rt.unstable_batchedUpdates=Sm;Rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Nc(n))throw Error(P(200));if(t==null||t._reactInternals===void 0)throw Error(P(38));return Ac(t,e,n,!1,r)};Rt.version="18.2.0-next-9e3b772b8-20220608";function IE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(IE)}catch(t){console.error(t)}}IE(),x1.exports=Rt;var bE=x1.exports,Py=bE;Uf.createRoot=Py.createRoot,Uf.hydrateRoot=Py.hydrateRoot;/**
 * @remix-run/router v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fa(){return fa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fa.apply(this,arguments)}var gr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(gr||(gr={}));const Ry="popstate";function $k(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Ah("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Fu(i)}return Uk(e,n,null,t)}function Ee(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Rm(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function jk(){return Math.random().toString(36).substr(2,8)}function Oy(t,e){return{usr:t.state,key:t.key,idx:e}}function Ah(t,e,n,r){return n===void 0&&(n=null),fa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Qs(e):e,{state:n,key:e&&e.key||r||jk()})}function Fu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Qs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Uk(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=gr.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(fa({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function c(){a=gr.Pop;let S=d(),g=S==null?null:S-u;u=S,l&&l({action:a,location:_.location,delta:g})}function f(S,g){a=gr.Push;let h=Ah(_.location,S,g);n&&n(h,S),u=d()+1;let y=Oy(h,u),w=_.createHref(h);try{o.pushState(y,"",w)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(w)}s&&l&&l({action:a,location:_.location,delta:1})}function p(S,g){a=gr.Replace;let h=Ah(_.location,S,g);n&&n(h,S),u=d();let y=Oy(h,u),w=_.createHref(h);o.replaceState(y,"",w),s&&l&&l({action:a,location:_.location,delta:0})}function v(S){let g=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof S=="string"?S:Fu(S);return Ee(g,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,g)}let _={get action(){return a},get location(){return t(i,o)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Ry,c),l=S,()=>{i.removeEventListener(Ry,c),l=null}},createHref(S){return e(i,S)},createURL:v,encodeLocation(S){let g=v(S);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:p,go(S){return o.go(S)}};return _}var Ny;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ny||(Ny={}));function zk(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Qs(e):e,i=Os(r.pathname||"/",n);if(i==null)return null;let s=kE(t);Bk(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Xk(s[a],Zk(i));return o}function kE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ee(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Ir([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(Ee(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),kE(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Yk(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of PE(s.path))i(s,o,l)}),e}function PE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=PE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Bk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Qk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Wk=/^:[\w-]+$/,Vk=3,Hk=2,Gk=1,Kk=10,qk=-2,Ay=t=>t==="*";function Yk(t,e){let n=t.split("/"),r=n.length;return n.some(Ay)&&(r+=qk),e&&(r+=Hk),n.filter(i=>!Ay(i)).reduce((i,s)=>i+(Wk.test(s)?Vk:s===""?Gk:Kk),r)}function Qk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Xk(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=Lh({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let c=a.route;s.push({params:r,pathname:Ir([i,d.pathname]),pathnameBase:i2(Ir([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=Ir([i,d.pathnameBase]))}return s}function Lh(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Jk(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:f,isOptional:p}=d;if(f==="*"){let _=a[c]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const v=a[c];return p&&!v?u[f]=void 0:u[f]=e2(v||"",f),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Jk(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Rm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Zk(t){try{return decodeURI(t)}catch(e){return Rm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function e2(t,e){try{return decodeURIComponent(t)}catch(n){return Rm(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Os(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function t2(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Qs(t):t;return{pathname:n?n.startsWith("/")?n:n2(n,e):e,search:s2(r),hash:o2(i)}}function n2(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function rf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function r2(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Om(t,e){let n=r2(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Nm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Qs(t):(i=fa({},t),Ee(!i.pathname||!i.pathname.includes("?"),rf("?","pathname","search",i)),Ee(!i.pathname||!i.pathname.includes("#"),rf("#","pathname","hash",i)),Ee(!i.search||!i.search.includes("#"),rf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let c=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),c-=1;i.pathname=f.join("/")}a=c>=0?e[c]:"/"}let l=t2(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Ir=t=>t.join("/").replace(/\/\/+/g,"/"),i2=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),s2=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,o2=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function a2(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const RE=["post","put","patch","delete"];new Set(RE);const l2=["get",...RE];new Set(l2);/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ha(){return ha=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ha.apply(this,arguments)}const Lc=E.createContext(null),OE=E.createContext(null),Kn=E.createContext(null),Dc=E.createContext(null),qn=E.createContext({outlet:null,matches:[],isDataRoute:!1}),NE=E.createContext(null);function u2(t,e){let{relative:n}=e===void 0?{}:e;Xs()||Ee(!1);let{basename:r,navigator:i}=E.useContext(Kn),{hash:s,pathname:o,search:a}=Mc(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Ir([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Xs(){return E.useContext(Dc)!=null}function Js(){return Xs()||Ee(!1),E.useContext(Dc).location}function AE(t){E.useContext(Kn).static||E.useLayoutEffect(t)}function LE(){let{isDataRoute:t}=E.useContext(qn);return t?x2():c2()}function c2(){Xs()||Ee(!1);let t=E.useContext(Lc),{basename:e,future:n,navigator:r}=E.useContext(Kn),{matches:i}=E.useContext(qn),{pathname:s}=Js(),o=JSON.stringify(Om(i,n.v7_relativeSplatPath)),a=E.useRef(!1);return AE(()=>{a.current=!0}),E.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=Nm(u,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Ir([e,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[e,r,o,s,t])}const d2=E.createContext(null);function f2(t){let e=E.useContext(qn).outlet;return e&&E.createElement(d2.Provider,{value:t},e)}function Mc(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=E.useContext(Kn),{matches:i}=E.useContext(qn),{pathname:s}=Js(),o=JSON.stringify(Om(i,r.v7_relativeSplatPath));return E.useMemo(()=>Nm(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function h2(t,e){return p2(t,e)}function p2(t,e,n,r){Xs()||Ee(!1);let{navigator:i}=E.useContext(Kn),{matches:s}=E.useContext(qn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Js(),d;if(e){var c;let S=typeof e=="string"?Qs(e):e;l==="/"||(c=S.pathname)!=null&&c.startsWith(l)||Ee(!1),d=S}else d=u;let f=d.pathname||"/",p=l==="/"?f:f.slice(l.length)||"/",v=zk(t,{pathname:p}),_=_2(v&&v.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:Ir([l,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:Ir([l,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),s,n,r);return e&&_?E.createElement(Dc.Provider,{value:{location:ha({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:gr.Pop}},_):_}function m2(){let t=C2(),e=a2(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),n?E.createElement("pre",{style:i},n):null,null)}const g2=E.createElement(m2,null);class y2 extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?E.createElement(qn.Provider,{value:this.props.routeContext},E.createElement(NE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function v2(t){let{routeContext:e,match:n,children:r}=t,i=E.useContext(Lc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(qn.Provider,{value:e},r)}function _2(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id]));d>=0||Ee(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let c=o[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:f,errors:p}=n,v=c.route.loader&&f[c.route.id]===void 0&&(!p||p[c.route.id]===void 0);if(c.route.lazy||v){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,c,f)=>{let p,v=!1,_=null,S=null;n&&(p=a&&c.route.id?a[c.route.id]:void 0,_=c.route.errorElement||g2,l&&(u<0&&f===0?(T2("route-fallback",!1),v=!0,S=null):u===f&&(v=!0,S=c.route.hydrateFallbackElement||null)));let g=e.concat(o.slice(0,f+1)),h=()=>{let y;return p?y=_:v?y=S:c.route.Component?y=E.createElement(c.route.Component,null):c.route.element?y=c.route.element:y=d,E.createElement(v2,{match:c,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:y})};return n&&(c.route.ErrorBoundary||c.route.errorElement||f===0)?E.createElement(y2,{location:n.location,revalidation:n.revalidation,component:_,error:p,children:h(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):h()},null)}var DE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(DE||{}),$u=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}($u||{});function w2(t){let e=E.useContext(Lc);return e||Ee(!1),e}function E2(t){let e=E.useContext(OE);return e||Ee(!1),e}function S2(t){let e=E.useContext(qn);return e||Ee(!1),e}function ME(t){let e=S2(),n=e.matches[e.matches.length-1];return n.route.id||Ee(!1),n.route.id}function C2(){var t;let e=E.useContext(NE),n=E2($u.UseRouteError),r=ME($u.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function x2(){let{router:t}=w2(DE.UseNavigateStable),e=ME($u.UseNavigateStable),n=E.useRef(!1);return AE(()=>{n.current=!0}),E.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ha({fromRouteId:e},s)))},[t,e])}const Ly={};function T2(t,e,n){!e&&!Ly[t]&&(Ly[t]=!0)}function Dh(t){let{to:e,replace:n,state:r,relative:i}=t;Xs()||Ee(!1);let{future:s,static:o}=E.useContext(Kn),{matches:a}=E.useContext(qn),{pathname:l}=Js(),u=LE(),d=Nm(e,Om(a,s.v7_relativeSplatPath),l,i==="path"),c=JSON.stringify(d);return E.useEffect(()=>u(JSON.parse(c),{replace:n,state:r,relative:i}),[u,c,i,n,r]),null}function I2(t){return f2(t.context)}function Io(t){Ee(!1)}function b2(t){let{basename:e="/",children:n=null,location:r,navigationType:i=gr.Pop,navigator:s,static:o=!1,future:a}=t;Xs()&&Ee(!1);let l=e.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:l,navigator:s,static:o,future:ha({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Qs(r));let{pathname:d="/",search:c="",hash:f="",state:p=null,key:v="default"}=r,_=E.useMemo(()=>{let S=Os(d,l);return S==null?null:{location:{pathname:S,search:c,hash:f,state:p,key:v},navigationType:i}},[l,d,c,f,p,v,i]);return _==null?null:E.createElement(Kn.Provider,{value:u},E.createElement(Dc.Provider,{children:n,value:_}))}function k2(t){let{children:e,location:n}=t;return h2(Mh(e),n)}new Promise(()=>{});function Mh(t,e){e===void 0&&(e=[]);let n=[];return E.Children.forEach(t,(r,i)=>{if(!E.isValidElement(r))return;let s=[...e,i];if(r.type===E.Fragment){n.push.apply(n,Mh(r.props.children,s));return}r.type!==Io&&Ee(!1),!r.props.index||!r.props.children||Ee(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Mh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ju(){return ju=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ju.apply(this,arguments)}function FE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function P2(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function R2(t,e){return t.button===0&&(!e||e==="_self")&&!P2(t)}const O2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],N2=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],A2="6";try{window.__reactRouterVersion=A2}catch{}const L2=E.createContext({isTransitioning:!1}),D2="startTransition",Dy=jf[D2];function M2(t){let{basename:e,children:n,future:r,window:i}=t,s=E.useRef();s.current==null&&(s.current=$k({window:i,v5Compat:!0}));let o=s.current,[a,l]=E.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=E.useCallback(c=>{u&&Dy?Dy(()=>l(c)):l(c)},[l,u]);return E.useLayoutEffect(()=>o.listen(d),[o,d]),E.createElement(b2,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const F2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$E=E.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:d,unstable_viewTransition:c}=e,f=FE(e,O2),{basename:p}=E.useContext(Kn),v,_=!1;if(typeof u=="string"&&$2.test(u)&&(v=u,F2))try{let y=new URL(window.location.href),w=u.startsWith("//")?new URL(y.protocol+u):new URL(u),T=Os(w.pathname,p);w.origin===y.origin&&T!=null?u=T+w.search+w.hash:_=!0}catch{}let S=u2(u,{relative:i}),g=U2(u,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,unstable_viewTransition:c});function h(y){r&&r(y),y.defaultPrevented||g(y)}return E.createElement("a",ju({},f,{href:v||S,onClick:_||s?r:h,ref:n,target:l}))}),Am=E.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:d}=e,c=FE(e,N2),f=Mc(l,{relative:c.relative}),p=Js(),v=E.useContext(OE),{navigator:_,basename:S}=E.useContext(Kn),g=v!=null&&z2(f)&&u===!0,h=_.encodeLocation?_.encodeLocation(f).pathname:f.pathname,y=p.pathname,w=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(y=y.toLowerCase(),w=w?w.toLowerCase():null,h=h.toLowerCase()),w&&S&&(w=Os(w,S)||w);const T=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let C=y===h||!o&&y.startsWith(h)&&y.charAt(T)==="/",x=w!=null&&(w===h||!o&&w.startsWith(h)&&w.charAt(h.length)==="/"),b={isActive:C,isPending:x,isTransitioning:g},L=C?r:void 0,F;typeof s=="function"?F=s(b):F=[s,C?"active":null,x?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let B=typeof a=="function"?a(b):a;return E.createElement($E,ju({},c,{"aria-current":L,className:F,ref:n,style:B,to:l,unstable_viewTransition:u}),typeof d=="function"?d(b):d)});var Fh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Fh||(Fh={}));var My;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(My||(My={}));function j2(t){let e=E.useContext(Lc);return e||Ee(!1),e}function U2(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=LE(),u=Js(),d=Mc(t,{relative:o});return E.useCallback(c=>{if(R2(c,n)){c.preventDefault();let f=r!==void 0?r:Fu(u)===Fu(d);l(t,{replace:f,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,d,r,i,n,t,s,o,a])}function z2(t,e){e===void 0&&(e={});let n=E.useContext(L2);n==null&&Ee(!1);let{basename:r}=j2(Fh.useViewTransitionState),i=Mc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Os(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Os(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Lh(i.pathname,o)!=null||Lh(i.pathname,s)!=null}var jE={exports:{}},B2="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",W2=B2,V2=W2;function UE(){}function zE(){}zE.resetWarningCache=UE;var H2=function(){function t(r,i,s,o,a,l){if(l!==V2){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:zE,resetWarningCache:UE};return n.PropTypes=n,n};jE.exports=H2();var G2=jE.exports;const G=Gs(G2),K2=()=>m.jsxs("svg",{width:"20.000000",height:"20.000000",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[m.jsx("desc",{children:"Created with Pixso."}),m.jsx("defs",{children:m.jsx("clipPath",{id:"clip27_256",children:m.jsx("rect",{id:"log-in-01",width:"20.000000",height:"20.000000",fill:"white",fillOpacity:"0"})})}),m.jsx("rect",{id:"log-in-01",width:"20.000000",height:"20.000000",fill:"#FFFFFF",fillOpacity:"0"}),m.jsxs("g",{clipPath:"url(#clip27_256)",children:[m.jsx("path",{id:"Accent",d:"M12.5 2.5L13.5 2.5C14.9001 2.5 15.6002 2.5 16.135 2.77246C16.6053 3.01221 16.9878 3.39453 17.2275 3.86499C17.5 4.3999 17.5 5.09985 17.5 6.5L17.5 13.5C17.5 14.9001 17.5 15.6001 17.2275 16.135C16.9878 16.6055 16.6053 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5L12.5 17.5",stroke:"#F4C550",strokeOpacity:"1.000000",strokeWidth:"2.000000",strokeLinejoin:"round",strokeLinecap:"round"}),m.jsx("path",{id:"Icon",d:"M8.33337 5.83325L12.5 10L8.33337 14.1665M2.5 10L12.5 10",stroke:"#F4C550",strokeOpacity:"1.000000",strokeWidth:"2.000000",strokeLinejoin:"round"})]})]}),q2=()=>m.jsxs("svg",{width:"28.000000",height:"28.000000",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[m.jsx("desc",{children:"Created with Pixso."}),m.jsx("defs",{children:m.jsx("clipPath",{id:"clip4_550",children:m.jsx("rect",{id:"ukraine",width:"28.000000",height:"28.000000",fill:"white",fillOpacity:"0"})})}),m.jsx("rect",{id:"ukraine",width:"28.000000",height:"28.000000",fill:"#FFFFFF",fillOpacity:"0"}),m.jsxs("g",{clipPath:"url(#clip4_550)",children:[m.jsx("path",{id:"Vector",d:"M28 14C28 21.7319 21.732 28 14 28C6.26801 28 0 21.7319 0 14C0 6.26807 6.26801 0 14 0C21.732 0 28 6.26807 28 14Z",fill:"#FFDA44",fillOpacity:"1.000000",fillRule:"evenodd"}),m.jsx("path",{id:"Vector",d:"M0 14C0 6.26807 6.26807 0 14 0C21.7319 0 28 6.26807 28 14L0 14Z",fill:"#338AF3",fillOpacity:"1.000000",fillRule:"nonzero"})]})]});var lt=function(){return lt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},lt.apply(this,arguments)};function Lm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function pa(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var Y2=function(e,n,r,i){var s=r?r.call(i,e,n):void 0;if(s!==void 0)return!!s;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;var o=Object.keys(e),a=Object.keys(n);if(o.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(n),u=0;u<o.length;u++){var d=o[u];if(!l(d))return!1;var c=e[d],f=n[d];if(s=r?r.call(i,c,f,d):void 0,s===!1||s===void 0&&c!==f)return!1}return!0};const Q2=Gs(Y2);var he="-ms-",Uo="-moz-",ee="-webkit-",BE="comm",Fc="rule",Dm="decl",X2="@import",WE="@keyframes",J2="@layer",VE=Math.abs,Mm=String.fromCharCode,$h=Object.assign;function Z2(t,e){return De(t,0)^45?(((e<<2^De(t,0))<<2^De(t,1))<<2^De(t,2))<<2^De(t,3):0}function HE(t){return t.trim()}function kn(t,e){return(t=e.exec(t))?t[0]:t}function W(t,e,n){return t.replace(e,n)}function Kl(t,e,n){return t.indexOf(e,n)}function De(t,e){return t.charCodeAt(e)|0}function Ns(t,e,n){return t.slice(e,n)}function dn(t){return t.length}function GE(t){return t.length}function bo(t,e){return e.push(t),t}function eP(t,e){return t.map(e).join("")}function Fy(t,e){return t.filter(function(n){return!kn(n,e)})}var $c=1,As=1,KE=0,zt=0,Ie=0,Zs="";function jc(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:$c,column:As,length:o,return:"",siblings:a}}function rr(t,e){return $h(jc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Gi(t){for(;t.root;)t=rr(t.root,{children:[t]});bo(t,t.siblings)}function tP(){return Ie}function nP(){return Ie=zt>0?De(Zs,--zt):0,As--,Ie===10&&(As=1,$c--),Ie}function en(){return Ie=zt<KE?De(Zs,zt++):0,As++,Ie===10&&(As=1,$c++),Ie}function di(){return De(Zs,zt)}function ql(){return zt}function Uc(t,e){return Ns(Zs,t,e)}function jh(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function rP(t){return $c=As=1,KE=dn(Zs=t),zt=0,[]}function iP(t){return Zs="",t}function sf(t){return HE(Uc(zt-1,Uh(t===91?t+2:t===40?t+1:t)))}function sP(t){for(;(Ie=di())&&Ie<33;)en();return jh(t)>2||jh(Ie)>3?"":" "}function oP(t,e){for(;--e&&en()&&!(Ie<48||Ie>102||Ie>57&&Ie<65||Ie>70&&Ie<97););return Uc(t,ql()+(e<6&&di()==32&&en()==32))}function Uh(t){for(;en();)switch(Ie){case t:return zt;case 34:case 39:t!==34&&t!==39&&Uh(Ie);break;case 40:t===41&&Uh(t);break;case 92:en();break}return zt}function aP(t,e){for(;en()&&t+Ie!==57;)if(t+Ie===84&&di()===47)break;return"/*"+Uc(e,zt-1)+"*"+Mm(t===47?t:en())}function lP(t){for(;!jh(di());)en();return Uc(t,zt)}function uP(t){return iP(Yl("",null,null,null,[""],t=rP(t),0,[0],t))}function Yl(t,e,n,r,i,s,o,a,l){for(var u=0,d=0,c=o,f=0,p=0,v=0,_=1,S=1,g=1,h=0,y="",w=i,T=s,C=r,x=y;S;)switch(v=h,h=en()){case 40:if(v!=108&&De(x,c-1)==58){Kl(x+=W(sf(h),"&","&\f"),"&\f",VE(u?a[u-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:x+=sf(h);break;case 9:case 10:case 13:case 32:x+=sP(v);break;case 92:x+=oP(ql()-1,7);continue;case 47:switch(di()){case 42:case 47:bo(cP(aP(en(),ql()),e,n,l),l);break;default:x+="/"}break;case 123*_:a[u++]=dn(x)*g;case 125*_:case 59:case 0:switch(h){case 0:case 125:S=0;case 59+d:g==-1&&(x=W(x,/\f/g,"")),p>0&&dn(x)-c&&bo(p>32?jy(x+";",r,n,c-1,l):jy(W(x," ","")+";",r,n,c-2,l),l);break;case 59:x+=";";default:if(bo(C=$y(x,e,n,u,d,i,a,y,w=[],T=[],c,s),s),h===123)if(d===0)Yl(x,e,C,C,w,s,c,a,T);else switch(f===99&&De(x,3)===110?100:f){case 100:case 108:case 109:case 115:Yl(t,C,C,r&&bo($y(t,C,C,0,0,i,a,y,i,w=[],c,T),T),i,T,c,a,r?w:T);break;default:Yl(x,C,C,C,[""],T,0,a,T)}}u=d=p=0,_=g=1,y=x="",c=o;break;case 58:c=1+dn(x),p=v;default:if(_<1){if(h==123)--_;else if(h==125&&_++==0&&nP()==125)continue}switch(x+=Mm(h),h*_){case 38:g=d>0?1:(x+="\f",-1);break;case 44:a[u++]=(dn(x)-1)*g,g=1;break;case 64:di()===45&&(x+=sf(en())),f=di(),d=c=dn(y=x+=lP(ql())),h++;break;case 45:v===45&&dn(x)==2&&(_=0)}}return s}function $y(t,e,n,r,i,s,o,a,l,u,d,c){for(var f=i-1,p=i===0?s:[""],v=GE(p),_=0,S=0,g=0;_<r;++_)for(var h=0,y=Ns(t,f+1,f=VE(S=o[_])),w=t;h<v;++h)(w=HE(S>0?p[h]+" "+y:W(y,/&\f/g,p[h])))&&(l[g++]=w);return jc(t,e,n,i===0?Fc:a,l,u,d,c)}function cP(t,e,n,r){return jc(t,e,n,BE,Mm(tP()),Ns(t,2,-2),0,r)}function jy(t,e,n,r,i){return jc(t,e,n,Dm,Ns(t,0,r),Ns(t,r+1,-1),r,i)}function qE(t,e,n){switch(Z2(t,e)){case 5103:return ee+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ee+t+t;case 4789:return Uo+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ee+t+Uo+t+he+t+t;case 5936:switch(De(t,e+11)){case 114:return ee+t+he+W(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ee+t+he+W(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ee+t+he+W(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ee+t+he+t+t;case 6165:return ee+t+he+"flex-"+t+t;case 5187:return ee+t+W(t,/(\w+).+(:[^]+)/,ee+"box-$1$2"+he+"flex-$1$2")+t;case 5443:return ee+t+he+"flex-item-"+W(t,/flex-|-self/g,"")+(kn(t,/flex-|baseline/)?"":he+"grid-row-"+W(t,/flex-|-self/g,""))+t;case 4675:return ee+t+he+"flex-line-pack"+W(t,/align-content|flex-|-self/g,"")+t;case 5548:return ee+t+he+W(t,"shrink","negative")+t;case 5292:return ee+t+he+W(t,"basis","preferred-size")+t;case 6060:return ee+"box-"+W(t,"-grow","")+ee+t+he+W(t,"grow","positive")+t;case 4554:return ee+W(t,/([^-])(transform)/g,"$1"+ee+"$2")+t;case 6187:return W(W(W(t,/(zoom-|grab)/,ee+"$1"),/(image-set)/,ee+"$1"),t,"")+t;case 5495:case 3959:return W(t,/(image-set\([^]*)/,ee+"$1$`$1");case 4968:return W(W(t,/(.+:)(flex-)?(.*)/,ee+"box-pack:$3"+he+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ee+t+t;case 4200:if(!kn(t,/flex-|baseline/))return he+"grid-column-align"+Ns(t,e)+t;break;case 2592:case 3360:return he+W(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,kn(r.props,/grid-\w+-end/)})?~Kl(t+(n=n[e].value),"span",0)?t:he+W(t,"-start","")+t+he+"grid-row-span:"+(~Kl(n,"span",0)?kn(n,/\d+/):+kn(n,/\d+/)-+kn(t,/\d+/))+";":he+W(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return kn(r.props,/grid-\w+-start/)})?t:he+W(W(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return W(t,/(.+)-inline(.+)/,ee+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(dn(t)-1-e>6)switch(De(t,e+1)){case 109:if(De(t,e+4)!==45)break;case 102:return W(t,/(.+:)(.+)-([^]+)/,"$1"+ee+"$2-$3$1"+Uo+(De(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Kl(t,"stretch",0)?qE(W(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return W(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return he+i+":"+s+u+(o?he+i+"-span:"+(a?l:+l-+s)+u:"")+t});case 4949:if(De(t,e+6)===121)return W(t,":",":"+ee)+t;break;case 6444:switch(De(t,De(t,14)===45?18:11)){case 120:return W(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ee+(De(t,14)===45?"inline-":"")+"box$3$1"+ee+"$2$3$1"+he+"$2box$3")+t;case 100:return W(t,":",":"+he)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return W(t,"scroll-","scroll-snap-")+t}return t}function Uu(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function dP(t,e,n,r){switch(t.type){case J2:if(t.children.length)break;case X2:case Dm:return t.return=t.return||t.value;case BE:return"";case WE:return t.return=t.value+"{"+Uu(t.children,r)+"}";case Fc:if(!dn(t.value=t.props.join(",")))return""}return dn(n=Uu(t.children,r))?t.return=t.value+"{"+n+"}":""}function fP(t){var e=GE(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function hP(t){return function(e){e.root||(e=e.return)&&t(e)}}function pP(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Dm:t.return=qE(t.value,t.length,n);return;case WE:return Uu([rr(t,{value:W(t.value,"@","@"+ee)})],r);case Fc:if(t.length)return eP(n=t.props,function(i){switch(kn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Gi(rr(t,{props:[W(i,/:(read-\w+)/,":"+Uo+"$1")]})),Gi(rr(t,{props:[i]})),$h(t,{props:Fy(n,r)});break;case"::placeholder":Gi(rr(t,{props:[W(i,/:(plac\w+)/,":"+ee+"input-$1")]})),Gi(rr(t,{props:[W(i,/:(plac\w+)/,":"+Uo+"$1")]})),Gi(rr(t,{props:[W(i,/:(plac\w+)/,he+"input-$1")]})),Gi(rr(t,{props:[i]})),$h(t,{props:Fy(n,r)});break}return""})}}var mP={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},vt={},Ls=typeof process<"u"&&vt!==void 0&&(vt.REACT_APP_SC_ATTR||vt.SC_ATTR)||"data-styled",YE="active",QE="data-styled-version",zc="6.1.8",Fm=`/*!sc*/
`,$m=typeof window<"u"&&"HTMLElement"in window,gP=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&vt!==void 0&&vt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&vt.REACT_APP_SC_DISABLE_SPEEDY!==""?vt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&vt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&vt!==void 0&&vt.SC_DISABLE_SPEEDY!==void 0&&vt.SC_DISABLE_SPEEDY!==""&&vt.SC_DISABLE_SPEEDY!=="false"&&vt.SC_DISABLE_SPEEDY),Bc=Object.freeze([]),Ds=Object.freeze({});function yP(t,e,n){return n===void 0&&(n=Ds),t.theme!==n.theme&&t.theme||e||n.theme}var XE=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),vP=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,_P=/(^-|-$)/g;function Uy(t){return t.replace(vP,"-").replace(_P,"")}var wP=/(a)(d)/gi,Sl=52,zy=function(t){return String.fromCharCode(t+(t>25?39:97))};function zh(t){var e,n="";for(e=Math.abs(t);e>Sl;e=e/Sl|0)n=zy(e%Sl)+n;return(zy(e%Sl)+n).replace(wP,"$1-$2")}var of,JE=5381,as=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},ZE=function(t){return as(JE,t)};function eS(t){return zh(ZE(t)>>>0)}function EP(t){return t.displayName||t.name||"Component"}function af(t){return typeof t=="string"&&!0}var tS=typeof Symbol=="function"&&Symbol.for,nS=tS?Symbol.for("react.memo"):60115,SP=tS?Symbol.for("react.forward_ref"):60112,CP={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},xP={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},rS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},TP=((of={})[SP]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},of[nS]=rS,of);function By(t){return("type"in(e=t)&&e.type.$$typeof)===nS?rS:"$$typeof"in t?TP[t.$$typeof]:CP;var e}var IP=Object.defineProperty,bP=Object.getOwnPropertyNames,Wy=Object.getOwnPropertySymbols,kP=Object.getOwnPropertyDescriptor,PP=Object.getPrototypeOf,Vy=Object.prototype;function iS(t,e,n){if(typeof e!="string"){if(Vy){var r=PP(e);r&&r!==Vy&&iS(t,r,n)}var i=bP(e);Wy&&(i=i.concat(Wy(e)));for(var s=By(t),o=By(e),a=0;a<i.length;++a){var l=i[a];if(!(l in xP||n&&n[l]||o&&l in o||s&&l in s)){var u=kP(e,l);try{IP(t,l,u)}catch{}}}}return t}function Ms(t){return typeof t=="function"}function jm(t){return typeof t=="object"&&"styledComponentId"in t}function oi(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Bh(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function ma(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Wh(t,e,n){if(n===void 0&&(n=!1),!n&&!ma(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Wh(t[r],e[r]);else if(ma(e))for(var r in e)t[r]=Wh(t[r],e[r]);return t}function Um(t,e){Object.defineProperty(t,"toString",{value:e})}function ja(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var RP=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw ja(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(Fm);return n},t}(),Ql=new Map,zu=new Map,Xl=1,Cl=function(t){if(Ql.has(t))return Ql.get(t);for(;zu.has(Xl);)Xl++;var e=Xl++;return Ql.set(t,e),zu.set(e,t),e},OP=function(t,e){Xl=e+1,Ql.set(t,e),zu.set(e,t)},NP="style[".concat(Ls,"][").concat(QE,'="').concat(zc,'"]'),AP=new RegExp("^".concat(Ls,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),LP=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},DP=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Fm),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(AP);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(OP(d,u),LP(t,d,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function MP(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var sS=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Ls,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ls,YE),r.setAttribute(QE,zc);var o=MP();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},FP=function(){function t(e){this.element=sS(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw ja(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),$P=function(){function t(e){this.element=sS(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),jP=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Hy=$m,UP={isServer:!$m,useCSSOMInjection:!gP},oS=function(){function t(e,n,r){e===void 0&&(e=Ds),n===void 0&&(n={});var i=this;this.options=lt(lt({},UP),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&$m&&Hy&&(Hy=!1,function(s){for(var o=document.querySelectorAll(NP),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Ls)!==YE&&(DP(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Um(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(c){var f=function(g){return zu.get(g)}(c);if(f===void 0)return"continue";var p=s.names.get(f),v=o.getGroup(c);if(p===void 0||v.length===0)return"continue";var _="".concat(Ls,".g").concat(c,'[id="').concat(f,'"]'),S="";p!==void 0&&p.forEach(function(g){g.length>0&&(S+="".concat(g,","))}),l+="".concat(v).concat(_,'{content:"').concat(S,'"}').concat(Fm)},d=0;d<a;d++)u(d);return l}(i)})}return t.registerId=function(e){return Cl(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(lt(lt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new jP(i):r?new FP(i):new $P(i)}(this.options),new RP(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Cl(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Cl(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Cl(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),zP=/&/g,BP=/^\s*\/\/.*$/gm;function aS(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=aS(n.children,e)),n})}function lS(t){var e,n,r,i=t===void 0?Ds:t,s=i.options,o=s===void 0?Ds:s,a=i.plugins,l=a===void 0?Bc:a,u=function(f,p,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(e):f},d=l.slice();d.push(function(f){f.type===Fc&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(zP,n).replace(r,u))}),o.prefix&&d.push(pP),d.push(dP);var c=function(f,p,v,_){p===void 0&&(p=""),v===void 0&&(v=""),_===void 0&&(_="&"),e=_,n=p,r=new RegExp("\\".concat(n,"\\b"),"g");var S=f.replace(BP,""),g=uP(v||p?"".concat(v," ").concat(p," { ").concat(S," }"):S);o.namespace&&(g=aS(g,o.namespace));var h=[];return Uu(g,fP(d.concat(hP(function(y){return h.push(y)})))),h};return c.hash=l.length?l.reduce(function(f,p){return p.name||ja(15),as(f,p.name)},JE).toString():"",c}var WP=new oS,Vh=lS(),zm=vn.createContext({shouldForwardProp:void 0,styleSheet:WP,stylis:Vh});zm.Consumer;var VP=vn.createContext(void 0);function Hh(){return E.useContext(zm)}function HP(t){var e=E.useState(t.stylisPlugins),n=e[0],r=e[1],i=Hh().styleSheet,s=E.useMemo(function(){var l=i;return t.sheet?l=t.sheet:t.target&&(l=l.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(l=l.reconstructWithOptions({useCSSOMInjection:!1})),l},[t.disableCSSOMInjection,t.sheet,t.target,i]),o=E.useMemo(function(){return lS({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:n})},[t.enableVendorPrefixes,t.namespace,n]);E.useEffect(function(){Q2(n,t.stylisPlugins)||r(t.stylisPlugins)},[t.stylisPlugins]);var a=E.useMemo(function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:s,stylis:o}},[t.shouldForwardProp,s,o]);return vn.createElement(zm.Provider,{value:a},vn.createElement(VP.Provider,{value:o},t.children))}var uS=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Vh);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Um(this,function(){throw ja(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Vh),this.name+e.hash},t}(),GP=function(t){return t>="A"&&t<="Z"};function Gy(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;GP(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var cS=function(t){return t==null||t===!1||t===""},dS=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!cS(s)&&(Array.isArray(s)&&s.isCss||Ms(s)?r.push("".concat(Gy(i),":"),s,";"):ma(s)?r.push.apply(r,pa(pa(["".concat(i," {")],dS(s),!1),["}"],!1)):r.push("".concat(Gy(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in mP||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function fi(t,e,n,r){if(cS(t))return[];if(jm(t))return[".".concat(t.styledComponentId)];if(Ms(t)){if(!Ms(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return fi(i,e,n,r)}var s;return t instanceof uS?n?(t.inject(n,r),[t.getName(r)]):[t]:ma(t)?dS(t):Array.isArray(t)?Array.prototype.concat.apply(Bc,t.map(function(o){return fi(o,e,n,r)})):[t.toString()]}function KP(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Ms(n)&&!jm(n))return!1}return!0}var qP=ZE(zc),YP=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&KP(e),this.componentId=n,this.baseHash=as(qP,n),this.baseStyle=r,oS.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=oi(i,this.staticRulesId);else{var s=Bh(fi(this.rules,e,n,r)),o=zh(as(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=oi(i,o),this.staticRulesId=o}else{for(var l=as(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var c=this.rules[d];if(typeof c=="string")u+=c;else if(c){var f=Bh(fi(c,e,n,r));l=as(l,f+d),u+=f}}if(u){var p=zh(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,r(u,".".concat(p),void 0,this.componentId)),i=oi(i,p)}}return i},t}(),fS=vn.createContext(void 0);fS.Consumer;var lf={};function QP(t,e,n){var r=jm(t),i=t,s=!af(t),o=e.attrs,a=o===void 0?Bc:o,l=e.componentId,u=l===void 0?function(w,T){var C=typeof w!="string"?"sc":Uy(w);lf[C]=(lf[C]||0)+1;var x="".concat(C,"-").concat(eS(zc+C+lf[C]));return T?"".concat(T,"-").concat(x):x}(e.displayName,e.parentComponentId):l,d=e.displayName,c=d===void 0?function(w){return af(w)?"styled.".concat(w):"Styled(".concat(EP(w),")")}(t):d,f=e.displayName&&e.componentId?"".concat(Uy(e.displayName),"-").concat(e.componentId):e.componentId||u,p=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,v=e.shouldForwardProp;if(r&&i.shouldForwardProp){var _=i.shouldForwardProp;if(e.shouldForwardProp){var S=e.shouldForwardProp;v=function(w,T){return _(w,T)&&S(w,T)}}else v=_}var g=new YP(n,f,r?i.componentStyle:void 0);function h(w,T){return function(C,x,b){var L=C.attrs,F=C.componentStyle,B=C.defaultProps,At=C.foldedComponentIds,le=C.styledComponentId,gt=C.target,En=vn.useContext(fS),Yr=Hh(),Sn=C.shouldForwardProp||Yr.shouldForwardProp,O=yP(x,En,B)||Ds,M=function(Ze,He,yt){for(var Zn,on=lt(lt({},He),{className:void 0,theme:yt}),Vi=0;Vi<Ze.length;Vi+=1){var er=Ms(Zn=Ze[Vi])?Zn(on):Zn;for(var an in er)on[an]=an==="className"?oi(on[an],er[an]):an==="style"?lt(lt({},on[an]),er[an]):er[an]}return He.className&&(on.className=oi(on.className,He.className)),on}(L,x,O),U=M.as||gt,J={};for(var Q in M)M[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"&&M.theme===O||(Q==="forwardedAs"?J.as=M.forwardedAs:Sn&&!Sn(Q,U)||(J[Q]=M[Q]));var sn=function(Ze,He){var yt=Hh(),Zn=Ze.generateAndInjectStyles(He,yt.styleSheet,yt.stylis);return Zn}(F,M),Je=oi(At,le);return sn&&(Je+=" "+sn),M.className&&(Je+=" "+M.className),J[af(U)&&!XE.has(U)?"class":"className"]=Je,J.ref=b,E.createElement(U,J)}(y,w,T)}h.displayName=c;var y=vn.forwardRef(h);return y.attrs=p,y.componentStyle=g,y.displayName=c,y.shouldForwardProp=v,y.foldedComponentIds=r?oi(i.foldedComponentIds,i.styledComponentId):"",y.styledComponentId=f,y.target=r?i.target:t,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(T){for(var C=[],x=1;x<arguments.length;x++)C[x-1]=arguments[x];for(var b=0,L=C;b<L.length;b++)Wh(T,L[b],!0);return T}({},i.defaultProps,w):w}}),Um(y,function(){return".".concat(y.styledComponentId)}),s&&iS(y,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function Ky(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var qy=function(t){return Object.assign(t,{isCss:!0})};function Fs(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Ms(t)||ma(t))return qy(fi(Ky(Bc,pa([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?fi(r):qy(fi(Ky(r,e)))}function Gh(t,e,n){if(n===void 0&&(n=Ds),!e)throw ja(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,Fs.apply(void 0,pa([i],s,!1)))};return r.attrs=function(i){return Gh(t,e,lt(lt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Gh(t,e,lt(lt({},n),i))},r}var hS=function(t){return Gh(QP,t)},k=hS;XE.forEach(function(t){k[t]=hS(t)});function Ai(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Bh(Fs.apply(void 0,pa([t],e,!1))),i=eS(r);return new uS(i,r)}const ie={WHITE:"#FFFFFF",YELLOW:"#F4C550",LIGHT_YELLOW:"#FBE9BA",GREEN:"#9FBAAE",LIGHT_GREEN:"#CBDED3",BLUE:"#9FB7CE",LIGHT:"#BFD6EA",PEACH:"#F0AA8D",LIGHT_PEACH:"#F4C8BA",ROSE:"#E0A39A",LIGHT_ROSE:"#F2C0BD",BLACK_TEXT:"#121417",LIGHT_BLACK_TEXT:"rgba(18, 20, 23, 0.2)",YELLOW_BUTTON:"#F4C550",YELLOW_HOVER_BUTTON:"#FFDC86",GREY_LABEL:"#8A8A89",SILVER_BACKGROUND:"#F8F8F8"},XP=k(Am)`
  height: 28px;
`,JP=k.header`
  max-width: 1184px;
  //height: 48px;
  margin: 0 auto;
  display: flex;
  gap: 28px;
  padding: 20px 64px;
  justify-content: center;
`,ZP=k(Am)`
  color: rgb(18, 20, 23);
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.333px;
`,eR=k.div`
  height: 48px;
  display: flex;
  align-items: center;
  gap: 8px;
`,uf=k(Am)`
  color: ${ie.BLACK_TEXT};
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  max-width: 66px;
  &.active {
    font-weight: 500;
  }
`,tR=k.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,nR=k.button`
  height: 48px;
  max-width: 73px;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${ie.BLACK_TEXT};
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  font-family: Roboto;
  white-space: nowrap;
  cursor: pointer;
`,rR=k.button`
  height: 48px;
  max-width: 166px;
  border: none;
  border-radius: 12px;
  background: rgb(18, 20, 23);
  color: ${ie.WHITE};
  font-family: Roboto;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
  padding: 14px 39px 14px 39px;
`,iR=k.span`
  max-width: 20px;
  height: 20px;
`,sR=k.div`
  display: flex;
  gap: 390px;
  align-items: center;
`,oR=k.div`
  display: flex;
  gap: ${t=>t.isLoggedIn?"110px":"268px"};
  align-items: center;
`;var pS={exports:{}},mS={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua=E;function aR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var lR=typeof Object.is=="function"?Object.is:aR,uR=Ua.useSyncExternalStore,cR=Ua.useRef,dR=Ua.useEffect,fR=Ua.useMemo,hR=Ua.useDebugValue;mS.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=cR(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=fR(function(){function l(p){if(!u){if(u=!0,d=p,p=r(p),i!==void 0&&o.hasValue){var v=o.value;if(i(v,p))return c=v}return c=p}if(v=c,lR(d,p))return v;var _=r(p);return i!==void 0&&i(v,_)?v:(d=p,c=_)}var u=!1,d,c,f=n===void 0?null:n;return[function(){return l(e())},f===null?void 0:function(){return l(f())}]},[e,n,r,i]);var a=uR(t,s[0],s[1]);return dR(function(){o.hasValue=!0,o.value=a},[a]),hR(a),a};pS.exports=mS;var pR=pS.exports,Et="default"in jf?vn:jf,Yy=Symbol.for("react-redux-context"),Qy=typeof globalThis<"u"?globalThis:{};function mR(){if(!Et.createContext)return{};const t=Qy[Yy]??(Qy[Yy]=new Map);let e=t.get(Et.createContext);return e||(e=Et.createContext(null),t.set(Et.createContext,e)),e}var Dr=mR(),gR=()=>{throw new Error("uSES not initialized!")};function Bm(t=Dr){return function(){return Et.useContext(t)}}var gS=Bm(),yS=gR,yR=t=>{yS=t},vR=(t,e)=>t===e;function _R(t=Dr){const e=t===Dr?gS:Bm(t),n=(r,i={})=>{const{equalityFn:s=vR,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:l,getServerState:u,stabilityCheck:d,identityFunctionCheck:c}=e();Et.useRef(!0);const f=Et.useCallback({[r.name](v){return r(v)}}[r.name],[r,d,o.stabilityCheck]),p=yS(l.addNestedSub,a.getState,u||a.getState,f,s);return Et.useDebugValue(p),p};return Object.assign(n,{withTypes:()=>n}),n}var za=_R();function wR(t){t()}function ER(){let t=null,e=null;return{clear(){t=null,e=null},notify(){wR(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var Xy={notify(){},get:()=>[]};function SR(t,e){let n,r=Xy,i=0,s=!1;function o(_){d();const S=r.subscribe(_);let g=!1;return()=>{g||(g=!0,S(),c())}}function a(){r.notify()}function l(){v.onStateChange&&v.onStateChange()}function u(){return s}function d(){i++,n||(n=e?e.addNestedSub(l):t.subscribe(l),r=ER())}function c(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=Xy)}function f(){s||(s=!0,d())}function p(){s&&(s=!1,c())}const v={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:f,tryUnsubscribe:p,getListeners:()=>r};return v}var CR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",xR=CR?Et.useLayoutEffect:Et.useEffect;function TR({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=Et.useMemo(()=>{const u=SR(t);return{store:t,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[t,r,i,s]),a=Et.useMemo(()=>t.getState(),[t]);xR(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==t.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const l=e||Dr;return Et.createElement(l.Provider,{value:o},n)}var IR=TR;function vS(t=Dr){const e=t===Dr?gS:Bm(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var bR=vS();function kR(t=Dr){const e=t===Dr?bR:vS(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var Li=kR();yR(pR.useSyncExternalStoreWithSelector);const Wc=()=>{const{name:t,email:e,token:n,id:r,isLoggedIn:i,isRefreshing:s}=za(o=>o.auth);return{isRefreshing:s,isLoggedIn:i,email:e,token:n,name:t,id:r}};function je(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var PR=typeof Symbol=="function"&&Symbol.observable||"@@observable",Jy=PR,cf=()=>Math.random().toString(36).substring(7).split("").join("."),RR={INIT:`@@redux/INIT${cf()}`,REPLACE:`@@redux/REPLACE${cf()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${cf()}`},Bu=RR;function Wm(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function Vm(t,e,n){if(typeof t!="function")throw new Error(je(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(je(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(je(1));return n(Vm)(t,e)}let r=t,i=e,s=new Map,o=s,a=0,l=!1;function u(){o===s&&(o=new Map,s.forEach((S,g)=>{o.set(g,S)}))}function d(){if(l)throw new Error(je(3));return i}function c(S){if(typeof S!="function")throw new Error(je(4));if(l)throw new Error(je(5));let g=!0;u();const h=a++;return o.set(h,S),function(){if(g){if(l)throw new Error(je(6));g=!1,u(),o.delete(h),s=null}}}function f(S){if(!Wm(S))throw new Error(je(7));if(typeof S.type>"u")throw new Error(je(8));if(typeof S.type!="string")throw new Error(je(17));if(l)throw new Error(je(9));try{l=!0,i=r(i,S)}finally{l=!1}return(s=o).forEach(h=>{h()}),S}function p(S){if(typeof S!="function")throw new Error(je(10));r=S,f({type:Bu.REPLACE})}function v(){const S=c;return{subscribe(g){if(typeof g!="object"||g===null)throw new Error(je(11));function h(){const w=g;w.next&&w.next(d())}return h(),{unsubscribe:S(h)}},[Jy](){return this}}}return f({type:Bu.INIT}),{dispatch:f,subscribe:c,getState:d,replaceReducer:p,[Jy]:v}}function OR(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:Bu.INIT})>"u")throw new Error(je(12));if(typeof n(void 0,{type:Bu.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(je(13))})}function _S(t){const e=Object.keys(t),n={};for(let s=0;s<e.length;s++){const o=e[s];typeof t[o]=="function"&&(n[o]=t[o])}const r=Object.keys(n);let i;try{OR(n)}catch(s){i=s}return function(o={},a){if(i)throw i;let l=!1;const u={};for(let d=0;d<r.length;d++){const c=r[d],f=n[c],p=o[c],v=f(p,a);if(typeof v>"u")throw a&&a.type,new Error(je(14));u[c]=v,l=l||v!==p}return l=l||r.length!==Object.keys(o).length,l?u:o}}function Wu(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function NR(...t){return e=>(n,r)=>{const i=e(n,r);let s=()=>{throw new Error(je(15))};const o={getState:i.getState,dispatch:(l,...u)=>s(l,...u)},a=t.map(l=>l(o));return s=Wu(...a)(i.dispatch),{...i,dispatch:s}}}function AR(t){return Wm(t)&&"type"in t&&typeof t.type=="string"}var wS=Symbol.for("immer-nothing"),Zy=Symbol.for("immer-draftable"),kt=Symbol.for("immer-state");function qt(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var $s=Object.getPrototypeOf;function Mr(t){return!!t&&!!t[kt]}function Bn(t){var e;return t?ES(t)||Array.isArray(t)||!!t[Zy]||!!((e=t.constructor)!=null&&e[Zy])||Hc(t)||Gc(t):!1}var LR=Object.prototype.constructor.toString();function ES(t){if(!t||typeof t!="object")return!1;const e=$s(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===LR}function ga(t,e){Vc(t)===0?Object.entries(t).forEach(([n,r])=>{e(n,r,t)}):t.forEach((n,r)=>e(r,n,t))}function Vc(t){const e=t[kt];return e?e.type_:Array.isArray(t)?1:Hc(t)?2:Gc(t)?3:0}function Kh(t,e){return Vc(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function SS(t,e,n){const r=Vc(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function DR(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function Hc(t){return t instanceof Map}function Gc(t){return t instanceof Set}function Zr(t){return t.copy_||t.base_}function qh(t,e){if(Hc(t))return new Map(t);if(Gc(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);if(!e&&ES(t))return $s(t)?{...t}:Object.assign(Object.create(null),t);const n=Object.getOwnPropertyDescriptors(t);delete n[kt];let r=Reflect.ownKeys(n);for(let i=0;i<r.length;i++){const s=r[i],o=n[s];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(n[s]={configurable:!0,writable:!0,enumerable:o.enumerable,value:t[s]})}return Object.create($s(t),n)}function Hm(t,e=!1){return Kc(t)||Mr(t)||!Bn(t)||(Vc(t)>1&&(t.set=t.add=t.clear=t.delete=MR),Object.freeze(t),e&&ga(t,(n,r)=>Hm(r,!0))),t}function MR(){qt(2)}function Kc(t){return Object.isFrozen(t)}var FR={};function Ei(t){const e=FR[t];return e||qt(0,t),e}var ya;function CS(){return ya}function $R(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function ev(t,e){e&&(Ei("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function Yh(t){Qh(t),t.drafts_.forEach(jR),t.drafts_=null}function Qh(t){t===ya&&(ya=t.parent_)}function tv(t){return ya=$R(ya,t)}function jR(t){const e=t[kt];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function nv(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[kt].modified_&&(Yh(e),qt(4)),Bn(t)&&(t=Vu(e,t),e.parent_||Hu(e,t)),e.patches_&&Ei("Patches").generateReplacementPatches_(n[kt].base_,t,e.patches_,e.inversePatches_)):t=Vu(e,n,[]),Yh(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==wS?t:void 0}function Vu(t,e,n){if(Kc(e))return e;const r=e[kt];if(!r)return ga(e,(i,s)=>rv(t,r,e,i,s,n)),e;if(r.scope_!==t)return e;if(!r.modified_)return Hu(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let s=i,o=!1;r.type_===3&&(s=new Set(i),i.clear(),o=!0),ga(s,(a,l)=>rv(t,r,i,a,l,n,o)),Hu(t,i,!1),n&&t.patches_&&Ei("Patches").generatePatches_(r,n,t.patches_,t.inversePatches_)}return r.copy_}function rv(t,e,n,r,i,s,o){if(Mr(i)){const a=s&&e&&e.type_!==3&&!Kh(e.assigned_,r)?s.concat(r):void 0,l=Vu(t,i,a);if(SS(n,r,l),Mr(l))t.canAutoFreeze_=!1;else return}else o&&n.add(i);if(Bn(i)&&!Kc(i)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;Vu(t,i),(!e||!e.scope_.parent_)&&Hu(t,i)}}function Hu(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&Hm(e,n)}function UR(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:CS(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,s=Gm;n&&(i=[r],s=va);const{revoke:o,proxy:a}=Proxy.revocable(i,s);return r.draft_=a,r.revoke_=o,a}var Gm={get(t,e){if(e===kt)return t;const n=Zr(t);if(!Kh(n,e))return zR(t,n,e);const r=n[e];return t.finalized_||!Bn(r)?r:r===df(t.base_,e)?(ff(t),t.copy_[e]=Jh(r,t)):r},has(t,e){return e in Zr(t)},ownKeys(t){return Reflect.ownKeys(Zr(t))},set(t,e,n){const r=xS(Zr(t),e);if(r!=null&&r.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=df(Zr(t),e),s=i==null?void 0:i[kt];if(s&&s.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(DR(n,i)&&(n!==void 0||Kh(t.base_,e)))return!0;ff(t),Xh(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return df(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,ff(t),Xh(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=Zr(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){qt(11)},getPrototypeOf(t){return $s(t.base_)},setPrototypeOf(){qt(12)}},va={};ga(Gm,(t,e)=>{va[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});va.deleteProperty=function(t,e){return va.set.call(this,t,e,void 0)};va.set=function(t,e,n){return Gm.set.call(this,t[0],e,n,t[0])};function df(t,e){const n=t[kt];return(n?Zr(n):t)[e]}function zR(t,e,n){var i;const r=xS(e,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(t.draft_):void 0}function xS(t,e){if(!(e in t))return;let n=$s(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=$s(n)}}function Xh(t){t.modified_||(t.modified_=!0,t.parent_&&Xh(t.parent_))}function ff(t){t.copy_||(t.copy_=qh(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var BR=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const s=n;n=e;const o=this;return function(l=s,...u){return o.produce(l,d=>n.call(this,d,...u))}}typeof n!="function"&&qt(6),r!==void 0&&typeof r!="function"&&qt(7);let i;if(Bn(e)){const s=tv(this),o=Jh(e,void 0);let a=!0;try{i=n(o),a=!1}finally{a?Yh(s):Qh(s)}return ev(s,r),nv(i,s)}else if(!e||typeof e!="object"){if(i=n(e),i===void 0&&(i=e),i===wS&&(i=void 0),this.autoFreeze_&&Hm(i,!0),r){const s=[],o=[];Ei("Patches").generateReplacementPatches_(e,i,s,o),r(s,o)}return i}else qt(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(o,...a)=>this.produceWithPatches(o,l=>e(l,...a));let r,i;return[this.produce(e,n,(o,a)=>{r=o,i=a}),r,i]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){Bn(t)||qt(8),Mr(t)&&(t=TS(t));const e=tv(this),n=Jh(t,void 0);return n[kt].isManual_=!0,Qh(e),n}finishDraft(t,e){const n=t&&t[kt];(!n||!n.isManual_)&&qt(9);const{scope_:r}=n;return ev(r,e),nv(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=Ei("Patches").applyPatches_;return Mr(t)?r(t,e):this.produce(t,i=>r(i,e))}};function Jh(t,e){const n=Hc(t)?Ei("MapSet").proxyMap_(t,e):Gc(t)?Ei("MapSet").proxySet_(t,e):UR(t,e);return(e?e.scope_:CS()).drafts_.push(n),n}function TS(t){return Mr(t)||qt(10,t),IS(t)}function IS(t){if(!Bn(t)||Kc(t))return t;const e=t[kt];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=qh(t,e.scope_.immer_.useStrictShallowCopy_)}else n=qh(t,!0);return ga(n,(r,i)=>{SS(n,r,IS(i))}),e&&(e.finalized_=!1),n}var Pt=new BR,bS=Pt.produce;Pt.produceWithPatches.bind(Pt);Pt.setAutoFreeze.bind(Pt);Pt.setUseStrictShallowCopy.bind(Pt);Pt.applyPatches.bind(Pt);Pt.createDraft.bind(Pt);Pt.finishDraft.bind(Pt);function WR(t,e=`expected a function, instead received ${typeof t}`){if(typeof t!="function")throw new TypeError(e)}function VR(t,e=`expected an object, instead received ${typeof t}`){if(typeof t!="object")throw new TypeError(e)}function HR(t,e="expected all items to be functions, instead received the following types: "){if(!t.every(n=>typeof n=="function")){const n=t.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${e}[${n}]`)}}var iv=t=>Array.isArray(t)?t:[t];function GR(t){const e=Array.isArray(t[0])?t[0]:t;return HR(e,"createSelector expects all input-selectors to be functions, but received the following types: "),e}function KR(t,e){const n=[],{length:r}=t;for(let i=0;i<r;i++)n.push(t[i].apply(null,e));return n}var qR=class{constructor(t){this.value=t}deref(){return this.value}},YR=typeof WeakRef<"u"?WeakRef:qR,QR=0,sv=1;function xl(){return{s:QR,v:void 0,o:null,p:null}}function Km(t,e={}){let n=xl();const{resultEqualityCheck:r}=e;let i,s=0;function o(){var c;let a=n;const{length:l}=arguments;for(let f=0,p=l;f<p;f++){const v=arguments[f];if(typeof v=="function"||typeof v=="object"&&v!==null){let _=a.o;_===null&&(a.o=_=new WeakMap);const S=_.get(v);S===void 0?(a=xl(),_.set(v,a)):a=S}else{let _=a.p;_===null&&(a.p=_=new Map);const S=_.get(v);S===void 0?(a=xl(),_.set(v,a)):a=S}}const u=a;let d;if(a.s===sv?d=a.v:(d=t.apply(null,arguments),s++),u.s=sv,r){const f=((c=i==null?void 0:i.deref)==null?void 0:c.call(i))??i;f!=null&&r(f,d)&&(d=f,s!==0&&s--),i=typeof d=="object"&&d!==null||typeof d=="function"?new YR(d):d}return u.v=d,d}return o.clearCache=()=>{n=xl(),o.resetResultsCount()},o.resultsCount=()=>s,o.resetResultsCount=()=>{s=0},o}function kS(t,...e){const n=typeof t=="function"?{memoize:t,memoizeOptions:e}:t,r=(...i)=>{let s=0,o=0,a,l={},u=i.pop();typeof u=="object"&&(l=u,u=i.pop()),WR(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const d={...n,...l},{memoize:c,memoizeOptions:f=[],argsMemoize:p=Km,argsMemoizeOptions:v=[],devModeChecks:_={}}=d,S=iv(f),g=iv(v),h=GR(i),y=c(function(){return s++,u.apply(null,arguments)},...S),w=p(function(){o++;const C=KR(h,arguments);return a=y.apply(null,C),a},...g);return Object.assign(w,{resultFunc:u,memoizedResultFunc:y,dependencies:h,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>a,recomputations:()=>s,resetRecomputations:()=>{s=0},memoize:c,argsMemoize:p})};return Object.assign(r,{withTypes:()=>r}),r}var XR=kS(Km),JR=Object.assign((t,e=XR)=>{VR(t,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof t}`);const n=Object.keys(t),r=n.map(s=>t[s]);return e(r,(...s)=>s.reduce((o,a,l)=>(o[n[l]]=a,o),{}))},{withTypes:()=>JR});function PS(t){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,t):i(s)}var ZR=PS(),eO=PS,tO=(...t)=>{const e=kS(...t),n=Object.assign((...r)=>{const i=e(...r),s=(o,...a)=>i(Mr(o)?TS(o):o,...a);return Object.assign(s,i),s},{withTypes:()=>n});return n};tO(Km);var nO=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Wu:Wu.apply(null,arguments)},rO=t=>t&&typeof t.match=="function";function Mn(t,e){function n(...r){if(e){let i=e(...r);if(!i)throw new Error(ht(0));return{type:t,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>AR(r)&&r.type===t,n}var RS=class ko extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,ko.prototype)}static get[Symbol.species](){return ko}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new ko(...e[0].concat(this)):new ko(...e.concat(this))}};function ov(t){return Bn(t)?bS(t,()=>{}):t}function av(t,e,n){if(t.has(e)){let i=t.get(e);return n.update&&(i=n.update(i,e,t),t.set(e,i)),i}if(!n.insert)throw new Error(ht(10));const r=n.insert(e,t);return t.set(e,r),r}function iO(t){return typeof t=="boolean"}var sO=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=e??{};let o=new RS;return n&&(iO(n)?o.push(ZR):o.push(eO(n.extraArgument))),o},oO="RTK_autoBatch",OS=t=>e=>{setTimeout(e,t)},aO=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:OS(10),lO=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let i=!0,s=!1,o=!1;const a=new Set,l=t.type==="tick"?queueMicrotask:t.type==="raf"?aO:t.type==="callback"?t.queueNotification:OS(t.timeout),u=()=>{o=!1,s&&(s=!1,a.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const c=()=>i&&d(),f=r.subscribe(c);return a.add(d),()=>{f(),a.delete(d)}},dispatch(d){var c;try{return i=!((c=d==null?void 0:d.meta)!=null&&c[oO]),s=!i,s&&(o||(o=!0,l(u))),r.dispatch(d)}finally{i=!0}}})},uO=t=>function(n){const{autoBatch:r=!0}=n??{};let i=new RS(t);return r&&i.push(lO(typeof r=="object"?r:void 0)),i},cO=!0;function dO(t){const e=sO(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=t||{};let a;if(typeof n=="function")a=n;else if(Wm(n))a=_S(n);else throw new Error(ht(1));let l;typeof r=="function"?l=r(e):l=e();let u=Wu;i&&(u=nO({trace:!cO,...typeof i=="object"&&i}));const d=NR(...l),c=uO(d);let f=typeof o=="function"?o(c):c();const p=u(...f);return Vm(a,s,p)}function NS(t){const e={},n=[];let r;const i={addCase(s,o){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(ht(28));if(a in e)throw new Error(ht(29));return e[a]=o,i},addMatcher(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return t(i),[e,n,r]}function fO(t){return typeof t=="function"}function hO(t,e){let[n,r,i]=NS(e),s;if(fO(t))s=()=>ov(t());else{const a=ov(t);s=()=>a}function o(a=s(),l){let u=[n[l.type],...r.filter(({matcher:d})=>d(l)).map(({reducer:d})=>d)];return u.filter(d=>!!d).length===0&&(u=[i]),u.reduce((d,c)=>{if(c)if(Mr(d)){const p=c(d,l);return p===void 0?d:p}else{if(Bn(d))return bS(d,f=>c(f,l));{const f=c(d,l);if(f===void 0){if(d===null)return d;throw new Error(ht(9))}return f}}return d},a)}return o.getInitialState=s,o}var pO="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",AS=(t=21)=>{let e="",n=t;for(;n--;)e+=pO[Math.random()*64|0];return e},mO=(t,e)=>rO(t)?t.match(e):t(e);function gO(...t){return e=>t.some(n=>mO(n,e))}var yO=["name","message","stack","code"],hf=class{constructor(t,e){Rd(this,"_type");this.payload=t,this.meta=e}},lv=class{constructor(t,e){Rd(this,"_type");this.payload=t,this.meta=e}},vO=t=>{if(typeof t=="object"&&t!==null){const e={};for(const n of yO)typeof t[n]=="string"&&(e[n]=t[n]);return e}return{message:String(t)}},Ba=(()=>{function t(e,n,r){const i=Mn(e+"/fulfilled",(l,u,d,c)=>({payload:l,meta:{...c||{},arg:d,requestId:u,requestStatus:"fulfilled"}})),s=Mn(e+"/pending",(l,u,d)=>({payload:void 0,meta:{...d||{},arg:u,requestId:l,requestStatus:"pending"}})),o=Mn(e+"/rejected",(l,u,d,c,f)=>({payload:c,error:(r&&r.serializeError||vO)(l||"Rejected"),meta:{...f||{},arg:d,requestId:u,rejectedWithValue:!!c,requestStatus:"rejected",aborted:(l==null?void 0:l.name)==="AbortError",condition:(l==null?void 0:l.name)==="ConditionError"}}));function a(l){return(u,d,c)=>{const f=r!=null&&r.idGenerator?r.idGenerator(l):AS(),p=new AbortController;let v,_;function S(h){_=h,p.abort()}const g=async function(){var w,T;let h;try{let C=(w=r==null?void 0:r.condition)==null?void 0:w.call(r,l,{getState:d,extra:c});if(wO(C)&&(C=await C),C===!1||p.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const x=new Promise((b,L)=>{v=()=>{L({name:"AbortError",message:_||"Aborted"})},p.signal.addEventListener("abort",v)});u(s(f,l,(T=r==null?void 0:r.getPendingMeta)==null?void 0:T.call(r,{requestId:f,arg:l},{getState:d,extra:c}))),h=await Promise.race([x,Promise.resolve(n(l,{dispatch:u,getState:d,extra:c,requestId:f,signal:p.signal,abort:S,rejectWithValue:(b,L)=>new hf(b,L),fulfillWithValue:(b,L)=>new lv(b,L)})).then(b=>{if(b instanceof hf)throw b;return b instanceof lv?i(b.payload,f,l,b.meta):i(b,f,l)})])}catch(C){h=C instanceof hf?o(null,f,l,C.payload,C.meta):o(C,f,l)}finally{v&&p.signal.removeEventListener("abort",v)}return r&&!r.dispatchConditionRejection&&o.match(h)&&h.meta.condition||u(h),h}();return Object.assign(g,{abort:S,requestId:f,arg:l,unwrap(){return g.then(_O)}})}}return Object.assign(a,{pending:s,rejected:o,fulfilled:i,settled:gO(o,i),typePrefix:e})}return t.withTypes=()=>t,t})();function _O(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function wO(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var EO=Symbol.for("rtk-slice-createasyncthunk");function SO(t,e){return`${t}/${e}`}function CO({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[EO];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(ht(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(TO()):i.reducers)||{},l=Object.keys(a),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(y,w){const T=typeof y=="string"?y:y.type;if(!T)throw new Error(ht(12));if(T in u.sliceCaseReducersByType)throw new Error(ht(13));return u.sliceCaseReducersByType[T]=w,d},addMatcher(y,w){return u.sliceMatchers.push({matcher:y,reducer:w}),d},exposeAction(y,w){return u.actionCreators[y]=w,d},exposeCaseReducer(y,w){return u.sliceCaseReducersByName[y]=w,d}};l.forEach(y=>{const w=a[y],T={reducerName:y,type:SO(s,y),createNotation:typeof i.reducers=="function"};bO(w)?PO(T,w,d,e):IO(T,w,d)});function c(){const[y={},w=[],T=void 0]=typeof i.extraReducers=="function"?NS(i.extraReducers):[i.extraReducers],C={...y,...u.sliceCaseReducersByType};return hO(i.initialState,x=>{for(let b in C)x.addCase(b,C[b]);for(let b of u.sliceMatchers)x.addMatcher(b.matcher,b.reducer);for(let b of w)x.addMatcher(b.matcher,b.reducer);T&&x.addDefaultCase(T)})}const f=y=>y,p=new Map;let v;function _(y,w){return v||(v=c()),v(y,w)}function S(){return v||(v=c()),v.getInitialState()}function g(y,w=!1){function T(x){let b=x[y];return typeof b>"u"&&w&&(b=S()),b}function C(x=f){const b=av(p,w,{insert:()=>new WeakMap});return av(b,x,{insert:()=>{const L={};for(const[F,B]of Object.entries(i.selectors??{}))L[F]=xO(B,x,S,w);return L}})}return{reducerPath:y,getSelectors:C,get selectors(){return C(T)},selectSlice:T}}const h={name:s,reducer:_,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:S,...g(o),injectInto(y,{reducerPath:w,...T}={}){const C=w??o;return y.inject({reducerPath:C,reducer:_},T),{...h,...g(C,!0)}}};return h}}function xO(t,e,n,r){function i(s,...o){let a=e(s);return typeof a>"u"&&r&&(a=n()),t(a,...o)}return i.unwrapped=t,i}var LS=CO();function TO(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function IO({type:t,reducerName:e,createNotation:n},r,i){let s,o;if("reducer"in r){if(n&&!kO(r))throw new Error(ht(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(t,s).exposeCaseReducer(e,s).exposeAction(e,o?Mn(t,o):Mn(t))}function bO(t){return t._reducerDefinitionType==="asyncThunk"}function kO(t){return t._reducerDefinitionType==="reducerWithPrepare"}function PO({type:t,reducerName:e},n,r,i){if(!i)throw new Error(ht(18));const{payloadCreator:s,fulfilled:o,pending:a,rejected:l,settled:u,options:d}=n,c=i(t,s,d);r.exposeAction(e,c),o&&r.addCase(c.fulfilled,o),a&&r.addCase(c.pending,a),l&&r.addCase(c.rejected,l),u&&r.addMatcher(c.settled,u),r.exposeCaseReducer(e,{fulfilled:o||Tl,pending:a||Tl,rejected:l||Tl,settled:u||Tl})}function Tl(){}var RO=(t,e)=>{if(typeof t!="function")throw new Error(ht(32))},qm="listenerMiddleware",OO=t=>{let{type:e,actionCreator:n,matcher:r,predicate:i,effect:s}=t;if(e)i=Mn(e).match;else if(n)e=n.type,i=n.match;else if(r)i=r;else if(!i)throw new Error(ht(21));return RO(s),{predicate:i,type:e,effect:s}},NO=Object.assign(t=>{const{type:e,predicate:n,effect:r}=OO(t);return{id:AS(),effect:r,type:e,predicate:n,pending:new Set,unsubscribe:()=>{throw new Error(ht(22))}}},{withTypes:()=>NO}),AO=Object.assign(Mn(`${qm}/add`),{withTypes:()=>AO});Mn(`${qm}/removeAll`);var LO=Object.assign(Mn(`${qm}/remove`),{withTypes:()=>LO});function ht(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var uv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=function(t,e){if(!t)throw eo(e)},eo=function(t){return new Error("Firebase Database ("+DS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},DO=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ym={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=s>>2,c=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(f=64)),r.push(n[d],n[c],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(MS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):DO(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||c==null)throw new MO;const f=s<<2|a>>4;if(r.push(f),u!==64){const p=a<<4&240|u>>2;if(r.push(p),c!==64){const v=u<<6&192|c;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class MO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const FS=function(t){const e=MS(t);return Ym.encodeByteArray(e,!0)},Gu=function(t){return FS(t).replace(/\./g,"")},Ku=function(t){try{return Ym.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FO(t){return $S(void 0,t)}function $S(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!$O(n)||(t[n]=$S(t[n],e[n]));return t}function $O(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jO(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UO=()=>jO().__FIREBASE_DEFAULTS__,zO=()=>{if(typeof process>"u"||typeof uv>"u")return;const t=uv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},BO=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ku(t[1]);return e&&JSON.parse(e)},Qm=()=>{try{return UO()||zO()||BO()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},jS=t=>{var e,n;return(n=(e=Qm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},WO=t=>{const e=jS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},US=()=>{var t;return(t=Qm())===null||t===void 0?void 0:t.config},zS=t=>{var e;return(e=Qm())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VO(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Gu(JSON.stringify(n)),Gu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function HO(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function BS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function GO(){const t=Xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function WS(){return DS.NODE_ADMIN===!0}function KO(){try{return typeof indexedDB=="object"}catch{return!1}}function qO(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YO="FirebaseError";class Vr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=YO,Object.setPrototypeOf(this,Vr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wa.prototype.create)}}class Wa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?QO(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Vr(i,a,r)}}function QO(t,e){return t.replace(XO,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const XO=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(t){return JSON.parse(t)}function Pe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=_a(Ku(s[0])||""),n=_a(Ku(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},JO=function(t){const e=VS(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},ZO=function(t){const e=VS(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function js(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Zh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qu(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Yu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(cv(s)&&cv(o)){if(!Yu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function cv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Po(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ro(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const f=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=a^s&(o^a),d=1518500249):(u=s^o^a,d=1859775393):c<60?(u=s&o|a&(s|o),d=2400959708):(u=s^o^a,d=3395469782);const f=(i<<5|i>>>27)+u+l+d+r[c]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function tN(t,e){const n=new nN(t,e);return n.subscribe.bind(n)}class nN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");rN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=pf),i.error===void 0&&(i.error=pf),i.complete===void 0&&(i.complete=pf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function pf(){}function HS(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,R(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},qc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t){return t&&t._delegate?t._delegate:t}class Si{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Xm;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(aN(e))try{this.getOrInitializeService({instanceIdentifier:ei})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ei){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ei){return this.instances.has(e)}getOptions(e=ei){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:oN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ei){return this.component?this.component.multipleInstances?e:ei:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oN(t){return t===ei?void 0:t}function aN(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const uN={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},cN=oe.INFO,dN={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},fN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=dN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zm{constructor(e){this.name=e,this._logLevel=cN,this._logHandler=fN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const hN=(t,e)=>e.some(n=>t instanceof n);let dv,fv;function pN(){return dv||(dv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mN(){return fv||(fv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const GS=new WeakMap,ep=new WeakMap,KS=new WeakMap,mf=new WeakMap,eg=new WeakMap;function gN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(br(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&GS.set(n,t)}).catch(()=>{}),eg.set(e,t),e}function yN(t){if(ep.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ep.set(t,e)}let tp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ep.get(t);if(e==="objectStoreNames")return t.objectStoreNames||KS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return br(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vN(t){tp=t(tp)}function _N(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(gf(this),e,...n);return KS.set(r,e.sort?e.sort():[e]),br(r)}:mN().includes(t)?function(...e){return t.apply(gf(this),e),br(GS.get(this))}:function(...e){return br(t.apply(gf(this),e))}}function wN(t){return typeof t=="function"?_N(t):(t instanceof IDBTransaction&&yN(t),hN(t,pN())?new Proxy(t,tp):t)}function br(t){if(t instanceof IDBRequest)return gN(t);if(mf.has(t))return mf.get(t);const e=wN(t);return e!==t&&(mf.set(t,e),eg.set(e,t)),e}const gf=t=>eg.get(t);function EN(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=br(o);return r&&o.addEventListener("upgradeneeded",l=>{r(br(o.result),l.oldVersion,l.newVersion,br(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const SN=["get","getKey","getAll","getAllKeys","count"],CN=["put","add","delete","clear"],yf=new Map;function hv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(yf.get(e))return yf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=CN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||SN.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return yf.set(e,s),s}vN(t=>({...t,get:(e,n,r)=>hv(e,n)||t.get(e,n,r),has:(e,n)=>!!hv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(TN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function TN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const np="@firebase/app",pv="0.9.28";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=new Zm("@firebase/app"),IN="@firebase/app-compat",bN="@firebase/analytics-compat",kN="@firebase/analytics",PN="@firebase/app-check-compat",RN="@firebase/app-check",ON="@firebase/auth",NN="@firebase/auth-compat",AN="@firebase/database",LN="@firebase/database-compat",DN="@firebase/functions",MN="@firebase/functions-compat",FN="@firebase/installations",$N="@firebase/installations-compat",jN="@firebase/messaging",UN="@firebase/messaging-compat",zN="@firebase/performance",BN="@firebase/performance-compat",WN="@firebase/remote-config",VN="@firebase/remote-config-compat",HN="@firebase/storage",GN="@firebase/storage-compat",KN="@firebase/firestore",qN="@firebase/firestore-compat",YN="firebase",QN="10.8.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp="[DEFAULT]",XN={[np]:"fire-core",[IN]:"fire-core-compat",[kN]:"fire-analytics",[bN]:"fire-analytics-compat",[RN]:"fire-app-check",[PN]:"fire-app-check-compat",[ON]:"fire-auth",[NN]:"fire-auth-compat",[AN]:"fire-rtdb",[LN]:"fire-rtdb-compat",[DN]:"fire-fn",[MN]:"fire-fn-compat",[FN]:"fire-iid",[$N]:"fire-iid-compat",[jN]:"fire-fcm",[UN]:"fire-fcm-compat",[zN]:"fire-perf",[BN]:"fire-perf-compat",[WN]:"fire-rc",[VN]:"fire-rc-compat",[HN]:"fire-gcs",[GN]:"fire-gcs-compat",[KN]:"fire-fst",[qN]:"fire-fst-compat","fire-js":"fire-js",[YN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu=new Map,ip=new Map;function JN(t,e){try{t.container.addComponent(e)}catch(n){Ci.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Us(t){const e=t.name;if(ip.has(e))return Ci.debug(`There were multiple attempts to register component ${e}.`),!1;ip.set(e,t);for(const n of Qu.values())JN(n,t);return!0}function tg(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},kr=new Wa("app","Firebase",ZN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e3{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Si("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=QN;function qS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:rp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw kr.create("bad-app-name",{appName:String(i)});if(n||(n=US()),!n)throw kr.create("no-options");const s=Qu.get(i);if(s){if(Yu(n,s.options)&&Yu(r,s.config))return s;throw kr.create("duplicate-app",{appName:i})}const o=new lN(i);for(const l of ip.values())o.addComponent(l);const a=new e3(n,r,o);return Qu.set(i,a),a}function YS(t=rp){const e=Qu.get(t);if(!e&&t===rp&&US())return qS();if(!e)throw kr.create("no-app",{appName:t});return e}function Pr(t,e,n){var r;let i=(r=XN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ci.warn(a.join(" "));return}Us(new Si(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t3="firebase-heartbeat-database",n3=1,wa="firebase-heartbeat-store";let vf=null;function QS(){return vf||(vf=EN(t3,n3,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(wa)}catch(n){console.warn(n)}}}}).catch(t=>{throw kr.create("idb-open",{originalErrorMessage:t.message})})),vf}async function r3(t){try{const n=(await QS()).transaction(wa),r=await n.objectStore(wa).get(XS(t));return await n.done,r}catch(e){if(e instanceof Vr)Ci.warn(e.message);else{const n=kr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ci.warn(n.message)}}}async function mv(t,e){try{const r=(await QS()).transaction(wa,"readwrite");await r.objectStore(wa).put(e,XS(t)),await r.done}catch(n){if(n instanceof Vr)Ci.warn(n.message);else{const r=kr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ci.warn(r.message)}}}function XS(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i3=1024,s3=30*24*60*60*1e3;class o3{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new l3(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=gv();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=s3}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=gv(),{heartbeatsToSend:r,unsentEntries:i}=a3(this._heartbeatsCache.heartbeats),s=Gu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function gv(){return new Date().toISOString().substring(0,10)}function a3(t,e=i3){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),yv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),yv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class l3{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return KO()?qO().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await r3(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function yv(t){return Gu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u3(t){Us(new Si("platform-logger",e=>new xN(e),"PRIVATE")),Us(new Si("heartbeat",e=>new o3(e),"PRIVATE")),Pr(np,pv,t),Pr(np,pv,"esm2017"),Pr("fire-js","")}u3("");function JS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c3=JS,ZS=new Wa("auth","Firebase",JS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu=new Zm("@firebase/auth");function d3(t,...e){Xu.logLevel<=oe.WARN&&Xu.warn(`Auth (${no}): ${t}`,...e)}function Jl(t,...e){Xu.logLevel<=oe.ERROR&&Xu.error(`Auth (${no}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(t,...e){throw ng(t,...e)}function mn(t,...e){return ng(t,...e)}function f3(t,e,n){const r=Object.assign(Object.assign({},c3()),{[e]:n});return new Wa("auth","Firebase",r).create(e,{appName:t.name})}function ng(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ZS.create(t,...e)}function z(t,e,...n){if(!t)throw ng(e,...n)}function Nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Jl(e),new Error(e)}function Wn(t,e){t||Nn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function h3(){return vv()==="http:"||vv()==="https:"}function vv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p3(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(h3()||HO()||"connection"in navigator)?navigator.onLine:!0}function m3(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,n){this.shortDelay=e,this.longDelay=n,Wn(n>e,"Short delay should be less than long delay!"),this.isMobile=Jm()||BS()}get(){return p3()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(t,e){Wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g3={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y3=new Va(3e4,6e4);function Hr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Qn(t,e,n,r,i={}){return tC(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=to(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),eC.fetch()(nC(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function tC(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},g3),e);try{const i=new _3(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Il(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Il(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Il(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Il(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw f3(t,d,u);rn(t,d)}}catch(i){if(i instanceof Vr)throw i;rn(t,"network-request-failed",{message:String(i)})}}async function Ha(t,e,n,r,i={}){const s=await Qn(t,e,n,r,i);return"mfaPendingCredential"in s&&rn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function nC(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?rg(t.config,i):`${t.config.apiScheme}://${i}`}function v3(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _3{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(mn(this.auth,"network-request-failed")),y3.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Il(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=mn(t,e,r);return i.customData._tokenResponse=n,i}function _v(t){return t!==void 0&&t.enterprise!==void 0}class w3{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return v3(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function E3(t,e){return Qn(t,"GET","/v2/recaptchaConfig",Hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S3(t,e){return Qn(t,"POST","/v1/accounts:delete",e)}async function C3(t,e){return Qn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function x3(t,e=!1){const n=mt(t),r=await n.getIdToken(e),i=ig(r);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:zo(_f(i.auth_time)),issuedAtTime:zo(_f(i.iat)),expirationTime:zo(_f(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function _f(t){return Number(t)*1e3}function ig(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Jl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ku(n);return i?JSON.parse(i):(Jl("Failed to decode base64 JWT payload"),null)}catch(i){return Jl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function T3(t){const e=ig(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Vr&&I3(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function I3({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b3{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zo(this.lastLoginAt),this.creationTime=zo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ju(t){var e;const n=t.auth,r=await t.getIdToken(),i=await zs(t,C3(n,{idToken:r}));z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?R3(s.providerUserInfo):[],a=P3(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new rC(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function k3(t){const e=mt(t);await Ju(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function P3(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function R3(t){return t.map(e=>{var{providerId:n}=e,r=Lm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O3(t,e){const n=await tC(t,{},async()=>{const r=to({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=nC(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",eC.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function N3(t,e){return Qn(t,"POST","/v2/accounts:revokeToken",Hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):T3(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await O3(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ea;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ea,this.toJSON())}_performRefresh(){return Nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class hi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Lm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new b3(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new rC(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await zs(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return x3(this,e)}reload(){return k3(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new hi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ju(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await zs(this,S3(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:y,emailVerified:w,isAnonymous:T,providerData:C,stsTokenManager:x}=n;z(y&&x,e,"internal-error");const b=Ea.fromJSON(this.name,x);z(typeof y=="string",e,"internal-error"),nr(c,e.name),nr(f,e.name),z(typeof w=="boolean",e,"internal-error"),z(typeof T=="boolean",e,"internal-error"),nr(p,e.name),nr(v,e.name),nr(_,e.name),nr(S,e.name),nr(g,e.name),nr(h,e.name);const L=new hi({uid:y,auth:e,email:f,emailVerified:w,displayName:c,isAnonymous:T,photoURL:v,phoneNumber:p,tenantId:_,stsTokenManager:b,createdAt:g,lastLoginAt:h});return C&&Array.isArray(C)&&(L.providerData=C.map(F=>Object.assign({},F))),S&&(L._redirectEventId=S),L}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ea;i.updateFromServerResponse(n);const s=new hi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ju(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv=new Map;function An(t){Wn(t instanceof Function,"Expected a class definition");let e=wv.get(t);return e?(Wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,wv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}iC.type="NONE";const Ev=iC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(t,e,n){return`firebase:${t}:${e}:${n}`}class vs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Zl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Zl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?hi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new vs(An(Ev),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||An(Ev);const o=Zl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const c=hi._fromJSON(e,d);u!==s&&(a=c),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new vs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new vs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(aC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(uC(e))return"Blackberry";if(cC(e))return"Webos";if(sg(e))return"Safari";if((e.includes("chrome/")||oC(e))&&!e.includes("edge/"))return"Chrome";if(lC(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sC(t=Xe()){return/firefox\//i.test(t)}function sg(t=Xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function oC(t=Xe()){return/crios\//i.test(t)}function aC(t=Xe()){return/iemobile/i.test(t)}function lC(t=Xe()){return/android/i.test(t)}function uC(t=Xe()){return/blackberry/i.test(t)}function cC(t=Xe()){return/webos/i.test(t)}function Yc(t=Xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function A3(t=Xe()){var e;return Yc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function L3(){return GO()&&document.documentMode===10}function dC(t=Xe()){return Yc(t)||lC(t)||cC(t)||uC(t)||/windows phone/i.test(t)||aC(t)}function D3(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(t,e=[]){let n;switch(t){case"Browser":n=Sv(Xe());break;case"Worker":n=`${Sv(Xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${no}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M3{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F3(t,e={}){return Qn(t,"GET","/v2/passwordPolicy",Hr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $3=6;class j3{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:$3,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U3{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cv(this),this.idTokenSubscription=new Cv(this),this.beforeStateQueue=new M3(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ZS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=An(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await vs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ju(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=m3()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?mt(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(An(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await F3(this),n=new j3(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await N3(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&An(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await vs.create(this,[An(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&d3(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Di(t){return mt(t)}class Cv{constructor(e){this.auth=e,this.observer=null,this.addObserver=tN(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function z3(t){Qc=t}function hC(t){return Qc.loadJS(t)}function B3(){return Qc.recaptchaEnterpriseScript}function W3(){return Qc.gapiScript}function V3(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const H3="recaptcha-enterprise",G3="NO_RECAPTCHA";class K3{constructor(e){this.type=H3,this.auth=Di(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{E3(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new w3(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;_v(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(G3)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&_v(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=B3();l.length!==0&&(l+=a),hC(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function xv(t,e,n,r=!1){const i=new K3(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function op(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await xv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await xv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q3(t,e){const n=tg(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Yu(s,e??{}))return i;rn(i,"already-initialized")}return n.initialize({options:e})}function Y3(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(An);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Q3(t,e,n){const r=Di(t);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=pC(e),{host:o,port:a}=X3(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||J3()}function pC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function X3(t){const e=pC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Tv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Tv(o)}}}function Tv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function J3(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nn("not implemented")}_getIdTokenResponse(e){return Nn("not implemented")}_linkToIdToken(e,n){return Nn("not implemented")}_getReauthenticationResolver(e){return Nn("not implemented")}}async function Z3(t,e){return Qn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eA(t,e){return Ha(t,"POST","/v1/accounts:signInWithPassword",Hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tA(t,e){return Ha(t,"POST","/v1/accounts:signInWithEmailLink",Hr(t,e))}async function nA(t,e){return Ha(t,"POST","/v1/accounts:signInWithEmailLink",Hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa extends og{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Sa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Sa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return op(e,n,"signInWithPassword",eA);case"emailLink":return tA(e,{email:this._email,oobCode:this._password});default:rn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return op(e,r,"signUpPassword",Z3);case"emailLink":return nA(e,{idToken:n,email:this._email,oobCode:this._password});default:rn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _s(t,e){return Ha(t,"POST","/v1/accounts:signInWithIdp",Hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA="http://localhost";class xi extends og{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Lm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new xi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _s(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,_s(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_s(e,n)}buildRequest(){const e={requestUri:rA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=to(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sA(t){const e=Po(Ro(t)).link,n=e?Po(Ro(e)).deep_link_id:null,r=Po(Ro(t)).deep_link_id;return(r?Po(Ro(r)).link:null)||r||n||e||t}class ag{constructor(e){var n,r,i,s,o,a;const l=Po(Ro(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,c=iA((i=l.mode)!==null&&i!==void 0?i:null);z(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=sA(e);try{return new ag(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(){this.providerId=ro.PROVIDER_ID}static credential(e,n){return Sa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ag.parseLink(n);return z(r,"argument-error"),Sa._fromEmailAndCode(e,r.code,r.tenantId)}}ro.PROVIDER_ID="password";ro.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ro.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga extends mC{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends Ga{constructor(){super("facebook.com")}static credential(e){return xi._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.FACEBOOK_SIGN_IN_METHOD="facebook.com";ur.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends Ga{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xi._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return cr.credential(n,r)}catch{return null}}}cr.GOOGLE_SIGN_IN_METHOD="google.com";cr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Ga{constructor(){super("github.com")}static credential(e){return xi._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.GITHUB_SIGN_IN_METHOD="github.com";dr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends Ga{constructor(){super("twitter.com")}static credential(e,n){return xi._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return fr.credential(n,r)}catch{return null}}}fr.TWITTER_SIGN_IN_METHOD="twitter.com";fr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oA(t,e){return Ha(t,"POST","/v1/accounts:signUp",Hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await hi._fromIdTokenResponse(e,r,i),o=Iv(r);return new Ti({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Iv(r);return new Ti({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Iv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu extends Vr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Zu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Zu(e,n,r,i)}}function gC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Zu._fromErrorAndOperation(t,s,e,r):s})}async function aA(t,e,n=!1){const r=await zs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ti._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lA(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await zs(t,gC(r,i,e,t),n);z(s.idToken,r,"internal-error");const o=ig(s.idToken);z(o,r,"internal-error");const{sub:a}=o;return z(t.uid===a,r,"user-mismatch"),Ti._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&rn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yC(t,e,n=!1){const r="signIn",i=await gC(t,r,e),s=await Ti._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function uA(t,e){return yC(Di(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vC(t){const e=Di(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function cA(t,e,n){const r=Di(t),o=await op(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",oA).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&vC(t),l}),a=await Ti._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function dA(t,e,n){return uA(mt(t),ro.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&vC(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fA(t,e){return Qn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hA(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=mt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await zs(r,fA(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function pA(t,e,n,r){return mt(t).onIdTokenChanged(e,n,r)}function mA(t,e,n){return mt(t).beforeAuthStateChanged(e,n)}function gA(t){return mt(t).signOut()}const ec="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ec,"1"),this.storage.removeItem(ec),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yA(){const t=Xe();return sg(t)||Yc(t)}const vA=1e3,_A=10;class wC extends _C{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=yA()&&D3(),this.fallbackToPolling=dC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);L3()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,_A):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},vA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}wC.type="LOCAL";const wA=wC;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC extends _C{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}EC.type="SESSION";const SC=EC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Xc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await EA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=lg("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const f=c;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(){return window}function CA(t){gn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(){return typeof gn().WorkerGlobalScope<"u"&&typeof gn().importScripts=="function"}async function xA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function IA(){return CC()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC="firebaseLocalStorageDb",bA=1,tc="firebaseLocalStorage",TC="fbase_key";class Ka{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jc(t,e){return t.transaction([tc],e?"readwrite":"readonly").objectStore(tc)}function kA(){const t=indexedDB.deleteDatabase(xC);return new Ka(t).toPromise()}function ap(){const t=indexedDB.open(xC,bA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(tc,{keyPath:TC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(tc)?e(r):(r.close(),await kA(),e(await ap()))})})}async function bv(t,e,n){const r=Jc(t,!0).put({[TC]:e,value:n});return new Ka(r).toPromise()}async function PA(t,e){const n=Jc(t,!1).get(e),r=await new Ka(n).toPromise();return r===void 0?null:r.value}function kv(t,e){const n=Jc(t,!0).delete(e);return new Ka(n).toPromise()}const RA=800,OA=3;class IC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ap(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>OA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return CC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xc._getInstance(IA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await xA(),!this.activeServiceWorker)return;this.sender=new SA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||TA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ap();return await bv(e,ec,"1"),await kv(e,ec),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>bv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>PA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>kv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Jc(i,!1).getAll();return new Ka(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}IC.type="LOCAL";const NA=IC;new Va(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AA(t,e){return e?An(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug extends og{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _s(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _s(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _s(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function LA(t){return yC(t.auth,new ug(t),t.bypassAuthState)}function DA(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),lA(n,new ug(t),t.bypassAuthState)}async function MA(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),aA(n,new ug(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return LA;case"linkViaPopup":case"linkViaRedirect":return MA;case"reauthViaPopup":case"reauthViaRedirect":return DA;default:rn(this.auth,"internal-error")}}resolve(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA=new Va(2e3,1e4);class ls extends bC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ls.currentPopupAction&&ls.currentPopupAction.cancel(),ls.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Wn(this.filter.length===1,"Popup operations only handle one event");const e=lg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ls.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,FA.get())};e()}}ls.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A="pendingRedirect",eu=new Map;class jA extends bC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=eu.get(this.auth._key());if(!e){try{const r=await UA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}eu.set(this.auth._key(),e)}return this.bypassAuthState||eu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function UA(t,e){const n=WA(e),r=BA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function zA(t,e){eu.set(t._key(),e)}function BA(t){return An(t._redirectPersistence)}function WA(t){return Zl($A,t.config.apiKey,t.name)}async function VA(t,e,n=!1){const r=Di(t),i=AA(r,e),o=await new jA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA=10*60*1e3;class GA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!kC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(mn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=HA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pv(e))}saveEventToCache(e){this.cachedEventUids.add(Pv(e)),this.lastProcessedEventTime=Date.now()}}function Pv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function kC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function KA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kC(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qA(t,e={}){return Qn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,QA=/^https?/;async function XA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qA(t);for(const n of e)try{if(JA(n))return}catch{}rn(t,"unauthorized-domain")}function JA(t){const e=sp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!QA.test(n))return!1;if(YA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA=new Va(3e4,6e4);function Rv(){const t=gn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function e4(t){return new Promise((e,n)=>{var r,i,s;function o(){Rv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rv(),n(mn(t,"network-request-failed"))},timeout:ZA.get()})}if(!((i=(r=gn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=gn().gapi)===null||s===void 0)&&s.load)o();else{const a=V3("iframefcb");return gn()[a]=()=>{gapi.load?o():n(mn(t,"network-request-failed"))},hC(`${W3()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw tu=null,e})}let tu=null;function t4(t){return tu=tu||e4(t),tu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n4=new Va(5e3,15e3),r4="__/auth/iframe",i4="emulator/auth/iframe",s4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},o4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function a4(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?rg(e,i4):`https://${t.config.authDomain}/${r4}`,r={apiKey:e.apiKey,appName:t.name,v:no},i=o4.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${to(r).slice(1)}`}async function l4(t){const e=await t4(t),n=gn().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:a4(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:s4,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=mn(t,"network-request-failed"),a=gn().setTimeout(()=>{s(o)},n4.get());function l(){gn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},c4=500,d4=600,f4="_blank",h4="http://localhost";class Ov{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function p4(t,e,n,r=c4,i=d4){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},u4),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Xe().toLowerCase();n&&(a=oC(u)?f4:n),sC(u)&&(e=e||h4,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[p,v])=>`${f}${p}=${v},`,"");if(A3(u)&&a!=="_self")return m4(e||"",a),new Ov(null);const c=window.open(e||"",a,d);z(c,t,"popup-blocked");try{c.focus()}catch{}return new Ov(c)}function m4(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g4="__/auth/handler",y4="emulator/auth/handler",v4=encodeURIComponent("fac");async function Nv(t,e,n,r,i,s){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:no,eventId:i};if(e instanceof mC){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Zh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries(s||{}))o[d]=c}if(e instanceof Ga){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),u=l?`#${v4}=${encodeURIComponent(l)}`:"";return`${_4(t)}?${to(a).slice(1)}${u}`}function _4({config:t}){return t.emulator?rg(t,y4):`https://${t.authDomain}/${g4}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf="webStorageSupport";class w4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=SC,this._completeRedirectFn=VA,this._overrideRedirectResult=zA}async _openPopup(e,n,r,i){var s;Wn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Nv(e,n,r,sp(),i);return p4(e,o,lg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Nv(e,n,r,sp(),i);return CA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Wn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await l4(e),r=new GA(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(wf,{type:wf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[wf];o!==void 0&&n(!!o),rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=XA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dC()||sg()||Yc()}}const E4=w4;var Av="@firebase/auth",Lv="1.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C4(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function x4(t){Us(new Si("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fC(t)},u=new U3(r,i,s,l);return Y3(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Us(new Si("auth-internal",e=>{const n=Di(e.getProvider("auth").getImmediate());return(r=>new S4(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pr(Av,Lv,C4(t)),Pr(Av,Lv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T4=5*60,I4=zS("authIdTokenMaxAge")||T4;let Dv=null;const b4=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>I4)return;const i=n==null?void 0:n.token;Dv!==i&&(Dv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Zc(t=YS()){const e=tg(t,"auth");if(e.isInitialized())return e.getImmediate();const n=q3(t,{popupRedirectResolver:E4,persistence:[NA,wA,SC]}),r=zS("authTokenSyncURL");if(r){const s=b4(r);mA(n,s,()=>s(n.currentUser)),pA(n,o=>s(o))}const i=jS("auth");return i&&Q3(n,`http://${i}`),n}function k4(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}z3({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=mn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",k4().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});x4("Browser");let P4={data:""},R4=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||P4,O4=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,N4=/\/\*[^]*?\*\/|  +/g,Mv=/\n+/g,hr=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?hr(o,s):s+"{"+hr(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=hr(o,e?e.replace(/([^,])+/g,a=>s.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=hr.p?hr.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},xn={},PC=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+PC(t[n]);return e}return t},A4=(t,e,n,r,i)=>{let s=PC(t),o=xn[s]||(xn[s]=(l=>{let u=0,d=11;for(;u<l.length;)d=101*d+l.charCodeAt(u++)>>>0;return"go"+d})(s));if(!xn[o]){let l=s!==t?t:(u=>{let d,c,f=[{}];for(;d=O4.exec(u.replace(N4,""));)d[4]?f.shift():d[3]?(c=d[3].replace(Mv," ").trim(),f.unshift(f[0][c]=f[0][c]||{})):f[0][d[1]]=d[2].replace(Mv," ").trim();return f[0]})(t);xn[o]=hr(i?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&xn.g?xn.g:null;return n&&(xn.g=xn[o]),((l,u,d,c)=>{c?u.data=u.data.replace(c,l):u.data.indexOf(l)===-1&&(u.data=d?l+u.data:u.data+l)})(xn[o],e,r,a),o},L4=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":hr(a,""):a===!1?"":a}return r+i+(o??"")},"");function ed(t){let e=this||{},n=t.call?t(e.p):t;return A4(n.unshift?n.raw?L4(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,R4(e.target),e.g,e.o,e.k)}let RC,lp,up;ed.bind({g:1});let Vn=ed.bind({k:1});function D4(t,e,n,r){hr.p=e,RC=t,lp=n,up=r}function Gr(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let a=Object.assign({},s),l=a.className||i.className;n.p=Object.assign({theme:lp&&lp()},a),n.o=/ *go\d+/.test(l),a.className=ed.apply(n,r)+(l?" "+l:""),e&&(a.ref=o);let u=t;return t[0]&&(u=a.as||t,delete a.as),up&&u[0]&&up(a),RC(u,a)}return e?e(i):i}}var M4=t=>typeof t=="function",nc=(t,e)=>M4(t)?t(e):t,F4=(()=>{let t=0;return()=>(++t).toString()})(),OC=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),$4=20,nu=new Map,j4=1e3,Fv=t=>{if(nu.has(t))return;let e=setTimeout(()=>{nu.delete(t),Mi({type:4,toastId:t})},j4);nu.set(t,e)},U4=t=>{let e=nu.get(t);e&&clearTimeout(e)},cp=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,$4)};case 1:return e.toast.id&&U4(e.toast.id),{...t,toasts:t.toasts.map(s=>s.id===e.toast.id?{...s,...e.toast}:s)};case 2:let{toast:n}=e;return t.toasts.find(s=>s.id===n.id)?cp(t,{type:1,toast:n}):cp(t,{type:0,toast:n});case 3:let{toastId:r}=e;return r?Fv(r):t.toasts.forEach(s=>{Fv(s.id)}),{...t,toasts:t.toasts.map(s=>s.id===r||r===void 0?{...s,visible:!1}:s)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(s=>s.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+i}))}}},ru=[],iu={toasts:[],pausedAt:void 0},Mi=t=>{iu=cp(iu,t),ru.forEach(e=>{e(iu)})},z4={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},B4=(t={})=>{let[e,n]=E.useState(iu);E.useEffect(()=>(ru.push(n),()=>{let i=ru.indexOf(n);i>-1&&ru.splice(i,1)}),[e]);let r=e.toasts.map(i=>{var s,o;return{...t,...t[i.type],...i,duration:i.duration||((s=t[i.type])==null?void 0:s.duration)||(t==null?void 0:t.duration)||z4[i.type],style:{...t.style,...(o=t[i.type])==null?void 0:o.style,...i.style}}});return{...e,toasts:r}},W4=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||F4()}),qa=t=>(e,n)=>{let r=W4(e,t,n);return Mi({type:2,toast:r}),r.id},St=(t,e)=>qa("blank")(t,e);St.error=qa("error");St.success=qa("success");St.loading=qa("loading");St.custom=qa("custom");St.dismiss=t=>{Mi({type:3,toastId:t})};St.remove=t=>Mi({type:4,toastId:t});St.promise=(t,e,n)=>{let r=St.loading(e.loading,{...n,...n==null?void 0:n.loading});return t.then(i=>(St.success(nc(e.success,i),{id:r,...n,...n==null?void 0:n.success}),i)).catch(i=>{St.error(nc(e.error,i),{id:r,...n,...n==null?void 0:n.error})}),t};var V4=(t,e)=>{Mi({type:1,toast:{id:t,height:e}})},H4=()=>{Mi({type:5,time:Date.now()})},G4=t=>{let{toasts:e,pausedAt:n}=B4(t);E.useEffect(()=>{if(n)return;let s=Date.now(),o=e.map(a=>{if(a.duration===1/0)return;let l=(a.duration||0)+a.pauseDuration-(s-a.createdAt);if(l<0){a.visible&&St.dismiss(a.id);return}return setTimeout(()=>St.dismiss(a.id),l)});return()=>{o.forEach(a=>a&&clearTimeout(a))}},[e,n]);let r=E.useCallback(()=>{n&&Mi({type:6,time:Date.now()})},[n]),i=E.useCallback((s,o)=>{let{reverseOrder:a=!1,gutter:l=8,defaultPosition:u}=o||{},d=e.filter(p=>(p.position||u)===(s.position||u)&&p.height),c=d.findIndex(p=>p.id===s.id),f=d.filter((p,v)=>v<c&&p.visible).length;return d.filter(p=>p.visible).slice(...a?[f+1]:[0,f]).reduce((p,v)=>p+(v.height||0)+l,0)},[e]);return{toasts:e,handlers:{updateHeight:V4,startPause:H4,endPause:r,calculateOffset:i}}},K4=Vn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,q4=Vn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Y4=Vn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Q4=Gr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${K4} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${q4} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Y4} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,X4=Vn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,J4=Gr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${X4} 1s linear infinite;
`,Z4=Vn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,eL=Vn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,tL=Gr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Z4} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${eL} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,nL=Gr("div")`
  position: absolute;
`,rL=Gr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,iL=Vn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,sL=Gr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${iL} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,oL=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?E.createElement(sL,null,e):e:n==="blank"?null:E.createElement(rL,null,E.createElement(J4,{...r}),n!=="loading"&&E.createElement(nL,null,n==="error"?E.createElement(Q4,{...r}):E.createElement(tL,{...r})))},aL=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,lL=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,uL="0%{opacity:0;} 100%{opacity:1;}",cL="0%{opacity:1;} 100%{opacity:0;}",dL=Gr("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,fL=Gr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,hL=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=OC()?[uL,cL]:[aL(n),lL(n)];return{animation:e?`${Vn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Vn(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},pL=E.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?hL(t.position||e||"top-center",t.visible):{opacity:0},s=E.createElement(oL,{toast:t}),o=E.createElement(fL,{...t.ariaProps},nc(t.message,t));return E.createElement(dL,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):E.createElement(E.Fragment,null,s,o))});D4(E.createElement);var mL=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=E.useCallback(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(t,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return E.createElement("div",{ref:s,className:e,style:n},i)},gL=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:OC()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},yL=ed`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,bl=16,vL=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,containerStyle:s,containerClassName:o})=>{let{toasts:a,handlers:l}=G4(n);return E.createElement("div",{style:{position:"fixed",zIndex:9999,top:bl,left:bl,right:bl,bottom:bl,pointerEvents:"none",...s},className:o,onMouseEnter:l.startPause,onMouseLeave:l.endPause},a.map(u=>{let d=u.position||e,c=l.calculateOffset(u,{reverseOrder:t,gutter:r,defaultPosition:e}),f=gL(d,c);return E.createElement(mL,{id:u.id,key:u.id,onHeightUpdate:l.updateHeight,className:u.visible?yL:"",style:f},u.type==="custom"?nc(u.message,u):i?i(u):E.createElement(pL,{toast:u,position:d}))}))},cg=St;const NC=Ba("auth/register",async({value:t},e)=>{const{name:n,email:r,password:i}=t,s=Zc();try{const a=(await cA(s,r,i)).user;return await hA(a,{displayName:n}),{email:a.email,accessToken:a.accessToken,id:a.uid,name:a.displayName}}catch(o){return cg.error("Please check your data and try again"),e.rejectWithValue(o.message)}}),AC=Ba("auth/login",async({value:t},e)=>{const{email:n,password:r}=t,i=Zc();try{const o=(await dA(i,n,r)).user;return{email:o.email,accessToken:o.accessToken,id:o.uid,name:o.displayName}}catch(s){return cg.error("Please check your data and try again"),e.rejectWithValue(s.message)}}),LC=Ba("auth/logout",async(t,e)=>{const n=Zc();try{await gA(n)}catch(r){return e.rejectWithValue(r.message)}}),su=Ba("auth/refresh",async(t,e)=>{const r=e.getState().auth.token,i=Zc();if(r===null)return e.rejectWithValue("Unable to fetch user");try{return new Promise((s,o)=>{i.onAuthStateChanged(a=>{a?s({name:a.displayName,email:a.email,token:a.accessToken,id:a.uid}):o("Unable to fetch user")})})}catch(s){return e.rejectWithValue(s.message)}}),_L=k.div`
  display: flex;
  gap: 8px;
`,wL=k.button`
  height: 48px;
  max-width: 166px;
  border: none;
  border-radius: 12px;
  background: ${ie.YELLOW_BUTTON};
  color: ${ie.WHITE};
  font-family: Roboto;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
  padding: 14px 39px 14px 39px;
  display: flex;
  align-items: center;
  white-space: nowrap;
`,EL=k.p`
  color: rgb(18, 20, 23);
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.333px;
  display: flex;
  align-items: center;
  white-space: nowrap;
`,SL=()=>{const t=Li(),{name:e}=Wc(),n=()=>{t(LC())};return m.jsxs(_L,{children:[m.jsx(EL,{children:`Welcome, ${e}`}),m.jsx(wL,{type:"button",onClick:()=>n(),children:"Log Out"})]})},DC=({setNamePopUp:t})=>{const{isLoggedIn:e}=Wc(),n=()=>(t("login"),m.jsx(Dh,{to:"/login"})),r=()=>(t("signin"),m.jsx(Dh,{to:"/login"}));return m.jsxs(JP,{children:[m.jsxs(sR,{children:[m.jsxs(eR,{children:[m.jsx(XP,{to:"/",children:m.jsx(q2,{})}),m.jsx(ZP,{to:"/",children:"LearnLingo"})]}),m.jsx(uf,{to:"/",children:"Home"})]}),m.jsxs(oR,{isLoggedIn:e,children:[m.jsx(uf,{to:"teachers",children:"Teachers"}),e&&m.jsx(uf,{to:"favorites",children:"Favorites"}),e?m.jsx(SL,{}):m.jsxs(tR,{children:[m.jsxs(nR,{type:"button",onClick:n,children:[m.jsx(iR,{children:m.jsx(K2,{})}),"Log in"]}),m.jsx(rR,{type:"button",onClick:()=>r(),children:"Registration"})]})]})]})};DC.propTypes={setNamePopUp:G.func.isRequired};const CL=k.div`
  width: 100%;
  padding: 0px 64px 32px 64px;
  text-align: center;
`,MC=({setNamePopUp:t})=>m.jsxs(m.Fragment,{children:[m.jsx(DC,{setNamePopUp:t}),m.jsx(CL,{children:m.jsx(E.Suspense,{fallback:m.jsx("div",{children:"Loading...."}),children:m.jsx(I2,{})})})]});MC.propTypes={setNamePopUp:G.func.isRequired};const xL=()=>m.jsxs("svg",{width:"46.047974",height:"55.784180",viewBox:"0 0 46.048 55.7842",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[m.jsx("desc",{children:"Created with Pixso."}),m.jsx("defs",{children:m.jsxs("linearGradient",{id:"paint_linear_9_2_0",x1:"23.024010",y1:"0.000000",x2:"23.024010",y2:"55.784241",gradientUnits:"userSpaceOnUse",children:[m.jsx("stop",{stopColor:"#FBE9BA"}),m.jsx("stop",{offset:"1.000000",stopColor:"#E7C885"})]})}),m.jsx("path",{id:"",d:"M31.5446 8.92163C33.5355 6.51074 34.5343 3.90588 34.5343 1.11597C34.5343 0.910522 34.5292 0.704102 34.5176 0.497314C34.5083 0.331787 34.495 0.165894 34.4769 0C33.0901 0.0733643 31.6154 0.502197 30.0564 1.27759C28.494 2.06458 27.2057 3.05115 26.1926 4.23767C24.1636 6.5813 23.021 9.44763 23.021 12.1257C23.021 12.4961 23.0442 12.8483 23.0845 13.183C26.2358 13.4443 29.142 11.7881 31.5446 8.92163ZM42.1438 48.865C43.2776 47.2157 44.2561 45.4218 45.0829 43.4728C45.4237 42.6465 45.7443 41.7855 46.048 40.8868C44.6476 40.2876 43.3889 39.444 42.2618 38.3524C39.7749 36.0007 38.5094 33.0387 38.4723 29.4792C38.4319 24.9095 40.4667 21.3475 44.5801 18.8043C42.2821 15.4709 38.8267 13.6208 34.2273 13.2422C32.5299 13.0951 30.458 13.4685 28.0031 14.3698C25.4071 15.3419 23.8757 15.8293 23.4238 15.8293C22.8195 15.8293 21.441 15.4124 19.2942 14.5901C17.1414 13.7708 15.4088 13.3538 14.0878 13.3538C11.6733 13.3948 9.43127 14.0352 7.35632 15.292C5.28137 16.5488 3.62354 18.2607 2.37732 20.4313C0.791626 23.1332 0 26.3575 0 30.0959C0 33.3596 0.587158 36.7306 1.75842 40.212C2.85205 43.4349 4.24817 46.262 5.94617 48.6997C7.52881 50.9828 8.84985 52.5942 9.90613 53.5343C11.5609 55.1045 13.2188 55.8518 14.8821 55.7794C15.9757 55.7416 17.4061 55.3593 19.1819 54.6259C20.9548 53.8959 22.6123 53.5343 24.1578 53.5343C25.6315 53.5343 27.243 53.8959 28.9968 54.6259C30.7448 55.3593 32.2465 55.7208 33.4916 55.7208C35.2261 55.6796 36.8458 54.9529 38.3575 53.5343C39.3328 52.67 40.5983 51.1138 42.1438 48.865Z",fill:"url(#paint_linear_9_2_0)",fillOpacity:"1.000000",fillRule:"evenodd"})]}),TL=()=>m.jsxs("svg",{width:"359.719971",height:"247.251221",viewBox:"0 0 359.72 247.251",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[m.jsx("desc",{children:"Created with Pixso."}),m.jsx("defs",{children:m.jsxs("linearGradient",{id:"paint_linear_9_1_0",x1:"179.859985",y1:"0.000000",x2:"179.859985",y2:"247.251175",gradientUnits:"userSpaceOnUse",children:[m.jsx("stop",{stopColor:"#EEB055"}),m.jsx("stop",{offset:"1.000000",stopColor:"#D08F38"})]})}),m.jsx("path",{id:"Union",d:"M6.41785 0C2.87329 0 0 2.87903 0 6.43042L0 240.821C0 244.372 2.87329 247.251 6.41785 247.251L353.302 247.251C356.847 247.251 359.72 244.372 359.72 240.821L359.72 6.43042C359.72 2.87903 356.847 0 353.302 0L6.41785 0Z",fill:"url(#paint_linear_9_1_0)",fillOpacity:"1.000000",fillRule:"nonzero"})]}),IL="/Learn-Lingo/assets/DashedBorderPNG-D4YHlSNr.png",bL=k.div`
  width: 100%;

  display: flex;
  gap: 24px;
  margin-bottom: 24px;
`,kL=k.div`
  max-width: 720px;
  border-radius: 30px;
  background: ${ie.SILVER_BACKGROUND};
  padding: 98px 108px 98px 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,PL=k.h1`
  width: 548px;
  text-align: start;
  margin-bottom: 32px;
`,RL=k.p`
  text-align: start;
  margin-bottom: 64px;
  color: ${ie.BLACK_TEXT};
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.32px;
  width: 471px;
`,OL=k.button`
  border-radius: 12px;
  background-color: ${ie.YELLOW_BUTTON};
  width: 267px;
  height: 60px;
  color: rgb(18, 20, 23);
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
  border: none;
  &:hover {
    background-color: ${ie.YELLOW_HOVER_BUTTON};
  }
`,NL=k.div`
  position: relative;
  max-width: 568px;
  border-radius: 30px;
  background: ${ie.LIGHT_YELLOW};
  padding: 80px 118px 117px 114px;
`,AL=k.img`
  max-width: 336px;
  max-height: 333px;
`,LL=k.span`
  background-color: ${ie.LIGHT_YELLOW};
  border-radius: 8px;
  max-width: 195px;
  font-style: italic;
  letter-spacing: -0.96px;
  font-size: 48px;
  font-weight: 400;
`,DL=k.span`
  color: ${ie.BLACK_TEXT};
  font-size: 48px;
  font-weight: 500;
  line-height: 56px;
  text-align: start;
  font-style: normal;
  letter-spacing: -0.96px;
`,$v=k.span`
  color: ${ie.BLACK_TEXT};
  font-size: 48px;
  font-weight: 500;
  line-height: 56px;
  letter-spacing: -0.96;
  text-align: start;
  font-style: normal;
`,ML=k.div`
  position: absolute;
  height: 176px;
  overflow: hidden;
  top: 354px;
  left: 103.64px;
`,FL=k.div`
  position: absolute;
  left: 260.56px;
`,$L=k.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1312px;
  height: 116px;
  gap: 100px;
  background-image: url(${IL});
  background-size: cover;
`,kl=k.li`
  display: flex;
  gap: 16px;
`,Pl=k.p`
  font-size: 28px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.56px;
`,Rl=k.p`
  color: ${ie.BLACK_TEXT};
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;
  text-align: start;
  width: ${t=>t.width||"96px"};
`,jL="/Learn-Lingo/assets/sticker-CcJ1SqRC.png",UL=()=>m.jsxs(m.Fragment,{children:[m.jsxs(bL,{children:[m.jsxs(kL,{children:[m.jsxs(PL,{children:[m.jsx(DL,{children:"Unlock your potential with"}),"  ",m.jsx($v,{children:"the best"})," ",m.jsx(LL,{children:"language"})," ",m.jsx($v,{children:"tutors"})]}),m.jsx(RL,{children:"Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors."}),m.jsx($E,{to:"teachers",children:m.jsx(OL,{type:"button",children:"Get started"})})]}),m.jsxs(NL,{children:[m.jsx(AL,{src:jL,alt:"sticker"}),m.jsx(ML,{children:m.jsx(TL,{})}),m.jsx(FL,{children:m.jsx(xL,{})})]})]}),m.jsxs($L,{children:[m.jsxs(kl,{children:[m.jsx(Pl,{children:"3,200 +"}),m.jsx(Rl,{children:"Experienced tutors"})]}),m.jsxs(kl,{children:[m.jsx(Pl,{children:"300,000 +"}),m.jsx(Rl,{children:"5-star tutor reviews"})]}),m.jsxs(kl,{children:[m.jsx(Pl,{children:"120 +"}),m.jsx(Rl,{width:"74px",children:"Subjects taught"})]}),m.jsxs(kl,{children:[m.jsx(Pl,{children:"200 +"}),m.jsx(Rl,{children:"Tutor nationalities"})]})]})]});var jv={};const Uv="@firebase/database",zv="1.0.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FC="";function zL(t){FC=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BL{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Pe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:_a(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WL{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Yn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $C=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new BL(e)}}catch{}return new WL},ai=$C("localStorage"),dp=$C("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=new Zm("@firebase/database"),VL=function(){let t=1;return function(){return t++}}(),jC=function(t){const e=iN(t),n=new eN;n.update(e);const r=n.digest();return Ym.encodeByteArray(r)},Ya=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ya.apply(null,r):typeof r=="object"?e+=Pe(r):e+=r,e+=" "}return e};let pi=null,Bv=!0;const HL=function(t,e){R(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ws.logLevel=oe.VERBOSE,pi=ws.log.bind(ws),e&&dp.set("logging_enabled",!0)):typeof t=="function"?pi=t:(pi=null,dp.remove("logging_enabled"))},Ye=function(...t){if(Bv===!0&&(Bv=!1,pi===null&&dp.get("logging_enabled")===!0&&HL(!0)),pi){const e=Ya.apply(null,t);pi(e)}},Qa=function(t){return function(...e){Ye(t,...e)}},fp=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ya(...t);ws.error(e)},Hn=function(...t){const e=`FIREBASE FATAL ERROR: ${Ya(...t)}`;throw ws.error(e),new Error(e)},It=function(...t){const e="FIREBASE WARNING: "+Ya(...t);ws.warn(e)},GL=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&It("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},UC=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},KL=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Bs="[MIN_NAME]",Ii="[MAX_NAME]",io=function(t,e){if(t===e)return 0;if(t===Bs||e===Ii)return-1;if(e===Bs||t===Ii)return 1;{const n=Wv(t),r=Wv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},qL=function(t,e){return t===e?0:t<e?-1:1},go=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Pe(e))},dg=function(t){if(typeof t!="object"||t===null)return Pe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Pe(e[r]),n+=":",n+=dg(t[e[r]]);return n+="}",n},zC=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function pt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const BC=function(t){R(!UC(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(l=0;l<64;l+=8){let f=parseInt(d.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),c=c+f}return c.toLowerCase()},YL=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},QL=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function XL(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const JL=new RegExp("^-?(0*)\\d{1,10}$"),ZL=-2147483648,eD=2147483647,Wv=function(t){if(JL.test(t)){const e=Number(t);if(e>=ZL&&e<=eD)return e}return null},Xa=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw It("Exception was thrown by user callback.",n),e},Math.floor(0))}},tD=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Bo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){It(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ye("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',It(e)}}class Es{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Es.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg="5",WC="v",VC="s",HC="r",GC="f",KC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,qC="ls",YC="p",hp="ac",QC="websocket",XC="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ai.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ai.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function iD(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ZC(t,e,n){R(typeof e=="string","typeof type must == string"),R(typeof n=="object","typeof params must == object");let r;if(e===QC)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===XC)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);iD(t)&&(n.ns=t.namespace);const i=[];return pt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(){this.counters_={}}incrementCounter(e,n=1){Yn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return FO(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef={},Sf={};function hg(t){const e=t.toString();return Ef[e]||(Ef[e]=new sD),Ef[e]}function oD(t,e){const n=t.toString();return Sf[n]||(Sf[n]=e()),Sf[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Xa(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv="start",lD="close",uD="pLPCommand",cD="pRTLPCB",ex="id",tx="pw",nx="ser",dD="cb",fD="seg",hD="ts",pD="d",mD="dframe",rx=1870,ix=30,gD=rx-ix,yD=25e3,vD=3e4;class us{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Qa(e),this.stats_=hg(n),this.urlFn=l=>(this.appCheckToken&&(l[hp]=this.appCheckToken),ZC(n,XC,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new aD(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(vD)),KL(()=>{if(this.isClosed_)return;this.scriptTagHolder=new pg((...s)=>{const[o,a,l,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Vv)this.id=a,this.password=l;else if(o===lD)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Vv]="t",r[nx]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[dD]=this.scriptTagHolder.uniqueCallbackIdentifier),r[WC]=fg,this.transportSessionId&&(r[VC]=this.transportSessionId),this.lastSessionId&&(r[qC]=this.lastSessionId),this.applicationId&&(r[YC]=this.applicationId),this.appCheckToken&&(r[hp]=this.appCheckToken),typeof location<"u"&&location.hostname&&KC.test(location.hostname)&&(r[HC]=GC);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){us.forceAllow_=!0}static forceDisallow(){us.forceDisallow_=!0}static isAvailable(){return us.forceAllow_?!0:!us.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!YL()&&!QL()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=FS(n),i=zC(r,gD);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[mD]="t",r[ex]=e,r[tx]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class pg{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=VL(),window[uD+this.uniqueCallbackIdentifier]=e,window[cD+this.uniqueCallbackIdentifier]=n,this.myIFrame=pg.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ye("frame writing exception"),a.stack&&Ye(a.stack),Ye(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ye("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ex]=this.myID,e[tx]=this.myPW,e[nx]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ix+r.length<=rx;){const o=this.pendingSegs.shift();r=r+"&"+fD+i+"="+o.seg+"&"+hD+i+"="+o.ts+"&"+pD+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(yD)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ye("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _D=16384,wD=45e3;let rc=null;typeof MozWebSocket<"u"?rc=MozWebSocket:typeof WebSocket<"u"&&(rc=WebSocket);class Yt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Qa(this.connId),this.stats_=hg(n),this.connURL=Yt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[WC]=fg,typeof location<"u"&&location.hostname&&KC.test(location.hostname)&&(o[HC]=GC),n&&(o[VC]=n),r&&(o[qC]=r),i&&(o[hp]=i),s&&(o[YC]=s),ZC(e,QC,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ai.set("previous_websocket_failure",!0);try{let r;WS(),this.mySock=new rc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Yt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&rc!==null&&!Yt.forceDisallow_}static previouslyFailed(){return ai.isInMemoryStorage||ai.get("previous_websocket_failure")===!0}markConnectionHealthy(){ai.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=_a(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(R(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=zC(n,_D);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(wD))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Yt.responsesRequiredToBeHealthy=2;Yt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[us,Yt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Yt&&Yt.isAvailable();let r=n&&!Yt.previouslyFailed();if(e.webSocketOnly&&(n||It("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Yt];else{const i=this.transports_=[];for(const s of Ca.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Ca.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ca.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ED=6e4,SD=5e3,CD=10*1024,xD=100*1024,Cf="t",Hv="d",TD="s",Gv="r",ID="e",Kv="o",qv="a",Yv="n",Qv="p",bD="h";class kD{constructor(e,n,r,i,s,o,a,l,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Qa("c:"+this.id+":"),this.transportManager_=new Ca(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Bo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>xD?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>CD?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Cf in e){const n=e[Cf];n===qv?this.upgradeIfSecondaryHealthy_():n===Gv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Kv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=go("t",e),r=go("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Qv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:qv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Yv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=go("t",e),r=go("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=go(Cf,e);if(Hv in e){const r=e[Hv];if(n===bD){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Yv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===TD?this.onConnectionShutdown_(r):n===Gv?this.onReset_(r):n===ID?fp("Server Error: "+r):n===Kv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):fp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),fg!==r&&It("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Bo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ED))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Bo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(SD))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Qv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ai.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e){this.allowedEvents_=e,this.listeners_={},R(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){R(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic extends ox{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Jm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ic}getInitialEvent(e){return R(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv=32,Jv=768;class ae{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Z(){return new ae("")}function Y(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Fr(t){return t.pieces_.length-t.pieceNum_}function ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ae(t.pieces_,e)}function ax(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function PD(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function lx(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ux(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ae(e,0)}function Re(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ae)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ae(n,0)}function K(t){return t.pieceNum_>=t.pieces_.length}function tt(t,e){const n=Y(t),r=Y(e);if(n===null)return e;if(n===r)return tt(ce(t),ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function cx(t,e){if(Fr(t)!==Fr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Qt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Fr(t)>Fr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class RD{constructor(e,n){this.errorPrefix_=n,this.parts_=lx(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=qc(this.parts_[r]);dx(this)}}function OD(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=qc(e),dx(t)}function ND(t){const e=t.parts_.pop();t.byteLength_-=qc(e),t.parts_.length>0&&(t.byteLength_-=1)}function dx(t){if(t.byteLength_>Jv)throw new Error(t.errorPrefix_+"has a key path longer than "+Jv+" bytes ("+t.byteLength_+").");if(t.parts_.length>Xv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Xv+") or object contains a cycle "+ti(t))}function ti(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg extends ox{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new mg}getInitialEvent(e){return R(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=1e3,AD=60*5*1e3,Zv=30*1e3,LD=1.3,DD=3e4,MD="server_kill",e_=3;class Fn extends sx{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Fn.nextPersistentConnectionId_++,this.log_=Qa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=yo,this.maxReconnectDelay_=AD,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!WS())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");mg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ic.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Pe(s)),R(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Xm,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),R(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Fn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Yn(e,"w")){const r=js(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();It(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ZO(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Zv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=JO(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Pe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):fp("Unrecognized action received from server: "+Pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){R(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=yo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=yo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>DD&&(this.reconnectDelay_=yo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*LD)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Fn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(c){R(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(c)};this.realtime_={close:l,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ye("getToken() completed but was canceled"):(Ye("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=f&&f.token,a=new kD(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{It(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(MD)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&It(c),l())}}}interrupt(e){Ye("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ye("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Zh(this.interruptReasons_)&&(this.reconnectDelay_=yo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>dg(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ae(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ye("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=e_&&(this.reconnectDelay_=Zv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ye("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=e_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+FC.replace(/\./g,"-")]=1,Jm()?e["framework.cordova"]=1:BS()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ic.getInstance().currentlyOnline();return Zh(this.interruptReasons_)&&e}}Fn.nextPersistentConnectionId_=0;Fn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new H(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new H(Bs,e),i=new H(Bs,n);return this.compare(r,i)!==0}minPost(){return H.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ol;class fx extends td{static get __EMPTY_NODE(){return Ol}static set __EMPTY_NODE(e){Ol=e}compare(e,n){return io(e.name,n.name)}isDefinedOn(e){throw eo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return H.MIN}maxPost(){return new H(Ii,Ol)}makePost(e,n){return R(typeof e=="string","KeyIndex indexValue must always be a string."),new H(e,Ol)}toString(){return".key"}}const Ss=new fx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Me{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Me.RED,this.left=i??ut.EMPTY_NODE,this.right=s??ut.EMPTY_NODE}copy(e,n,r,i,s){return new Me(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ut.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return ut.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Me.RED=!0;Me.BLACK=!1;class FD{copy(e,n,r,i,s){return this}insert(e,n,r){return new Me(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ut{constructor(e,n=ut.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ut(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Me.BLACK,null,null))}remove(e){return new ut(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Me.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Nl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Nl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Nl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Nl(this.root_,null,this.comparator_,!0,e)}}ut.EMPTY_NODE=new FD;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $D(t,e){return io(t.name,e.name)}function gg(t,e){return io(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pp;function jD(t){pp=t}const hx=function(t){return typeof t=="number"?"number:"+BC(t):"string:"+t},px=function(t){if(t.isLeafNode()){const e=t.val();R(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Yn(e,".sv"),"Priority must be a string or number.")}else R(t===pp||t.isEmpty(),"priority of unexpected type.");R(t===pp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let t_;class Ae{constructor(e,n=Ae.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,R(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),px(this.priorityNode_)}static set __childrenNodeConstructor(e){t_=e}static get __childrenNodeConstructor(){return t_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ae(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return K(e)?this:Y(e)===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ae.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Y(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(R(r!==".priority"||Fr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ae.__childrenNodeConstructor.EMPTY_NODE.updateChild(ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+hx(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=BC(this.value_):e+=this.value_,this.lazyHash_=jC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ae.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ae.__childrenNodeConstructor?-1:(R(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ae.VALUE_TYPE_ORDER.indexOf(n),s=Ae.VALUE_TYPE_ORDER.indexOf(r);return R(i>=0,"Unknown leaf type: "+n),R(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ae.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mx,gx;function UD(t){mx=t}function zD(t){gx=t}class BD extends td{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?io(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return H.MIN}maxPost(){return new H(Ii,new Ae("[PRIORITY-POST]",gx))}makePost(e,n){const r=mx(e);return new H(n,new Ae("[PRIORITY-POST]",r))}toString(){return".priority"}}const xe=new BD;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WD=Math.log(2);class VD{constructor(e){const n=s=>parseInt(Math.log(s)/WD,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const sc=function(t,e,n,r){t.sort(e);const i=function(l,u){const d=u-l;let c,f;if(d===0)return null;if(d===1)return c=t[l],f=n?n(c):c,new Me(f,c.node,Me.BLACK,null,null);{const p=parseInt(d/2,10)+l,v=i(l,p),_=i(p+1,u);return c=t[p],f=n?n(c):c,new Me(f,c.node,Me.BLACK,v,_)}},s=function(l){let u=null,d=null,c=t.length;const f=function(v,_){const S=c-v,g=c;c-=v;const h=i(S+1,g),y=t[S],w=n?n(y):y;p(new Me(w,y.node,_,null,h))},p=function(v){u?(u.left=v,u=v):(d=v,u=v)};for(let v=0;v<l.count;++v){const _=l.nextBitIsOne(),S=Math.pow(2,l.count-(v+1));_?f(S,Me.BLACK):(f(S,Me.BLACK),f(S,Me.RED))}return d},o=new VD(t.length),a=s(o);return new ut(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xf;const Ki={};class Ln{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return R(Ki&&xe,"ChildrenNode.ts has not been loaded"),xf=xf||new Ln({".priority":Ki},{".priority":xe}),xf}get(e){const n=js(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ut?n:null}hasIndex(e){return Yn(this.indexSet_,e.toString())}addIndex(e,n){R(e!==Ss,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(H.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=sc(r,e.getCompare()):a=Ki;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new Ln(d,u)}addToIndexes(e,n){const r=qu(this.indexes_,(i,s)=>{const o=js(this.indexSet_,s);if(R(o,"Missing index implementation for "+s),i===Ki)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(H.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),sc(a,o.getCompare())}else return Ki;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new H(e.name,a))),l.insert(e,e.node)}});return new Ln(r,this.indexSet_)}removeFromIndexes(e,n){const r=qu(this.indexes_,i=>{if(i===Ki)return i;{const s=n.get(e.name);return s?i.remove(new H(e.name,s)):i}});return new Ln(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vo;class j{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&px(this.priorityNode_),this.children_.isEmpty()&&R(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return vo||(vo=new j(new ut(gg),null,Ln.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||vo}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?vo:n}}getChild(e){const n=Y(e);return n===null?this:this.getImmediateChild(n).getChild(ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(R(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new H(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?vo:this.priorityNode_;return new j(i,o,s)}}updateChild(e,n){const r=Y(e);if(r===null)return n;{R(Y(e)!==".priority"||Fr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ce(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(xe,(o,a)=>{n[o]=a.val(e),r++,s&&j.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+hx(this.getPriority().val())+":"),this.forEachChild(xe,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":jC(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new H(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new H(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new H(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,H.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,H.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ja?-1:0}withIndex(e){if(e===Ss||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ss||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(xe),i=n.getIterator(xe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ss?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class HD extends j{constructor(){super(new ut(gg),j.EMPTY_NODE,Ln.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const Ja=new HD;Object.defineProperties(H,{MIN:{value:new H(Bs,j.EMPTY_NODE)},MAX:{value:new H(Ii,Ja)}});fx.__EMPTY_NODE=j.EMPTY_NODE;Ae.__childrenNodeConstructor=j;jD(Ja);zD(Ja);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GD=!0;function Be(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),R(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ae(n,Be(e))}if(!(t instanceof Array)&&GD){const n=[];let r=!1;if(pt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Be(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new H(o,l)))}}),n.length===0)return j.EMPTY_NODE;const s=sc(n,$D,o=>o.name,gg);if(r){const o=sc(n,xe.getCompare());return new j(s,Be(e),new Ln({".priority":o},{".priority":xe}))}else return new j(s,Be(e),Ln.Default)}else{let n=j.EMPTY_NODE;return pt(t,(r,i)=>{if(Yn(t,r)&&r.substring(0,1)!=="."){const s=Be(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Be(e))}}UD(Be);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD extends td{constructor(e){super(),this.indexPath_=e,R(!K(e)&&Y(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?io(e.name,n.name):s}makePost(e,n){const r=Be(e),i=j.EMPTY_NODE.updateChild(this.indexPath_,r);return new H(n,i)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,Ja);return new H(Ii,e)}toString(){return lx(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD extends td{compare(e,n){const r=e.node.compareTo(n.node);return r===0?io(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return H.MIN}maxPost(){return H.MAX}makePost(e,n){const r=Be(e);return new H(n,r)}toString(){return".value"}}const YD=new qD;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yx(t){return{type:"value",snapshotNode:t}}function Ws(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function xa(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ta(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function QD(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){R(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(xa(n,a)):R(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ws(n,r)):o.trackChildChange(Ta(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(xe,(i,s)=>{n.hasChild(i)||r.trackChildChange(xa(i,s))}),n.isLeafNode()||n.forEachChild(xe,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Ta(i,s,o))}else r.trackChildChange(Ws(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e){this.indexedFilter_=new yg(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ia.getStartPost_(e),this.endPost_=Ia.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new H(n,r))||(r=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=j.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(j.EMPTY_NODE);const s=this;return n.forEachChild(xe,(o,a)=>{s.matches(new H(o,a))||(i=i.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ia(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new H(n,r))||(r=j.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=j.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(j.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(f,p)=>c(p,f)}else o=this.index_.getCompare();const a=e;R(a.numChildren()===this.limit_,"");const l=new H(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const c=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,l);if(d&&!r.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(Ta(n,r,c)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(xa(n,c));const _=a.updateImmediateChild(n,j.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Ws(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return r.isEmpty()?e:d&&o(u,l)>=0?(s!=null&&(s.trackChildChange(xa(u.name,u.node)),s.trackChildChange(Ws(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,j.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=xe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return R(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return R(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Bs}hasEnd(){return this.endSet_}getIndexEndValue(){return R(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return R(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ii}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return R(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===xe}copy(){const e=new vg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function JD(t){return t.loadsAllData()?new yg(t.getIndex()):t.hasLimit()?new XD(t):new Ia(t)}function n_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===xe?n="$priority":t.index_===YD?n="$value":t.index_===Ss?n="$key":(R(t.index_ instanceof KD,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Pe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Pe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Pe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Pe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Pe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function r_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==xe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc extends sx{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Qa("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(R(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=oc.getListenId_(e,r),a={};this.listens_[o]=a;const l=n_(e._queryParams);this.restRequest_(s+".json",l,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),js(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=oc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=n_(e._queryParams),r=e._path.toString(),i=new Xm;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+to(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=_a(a.responseText)}catch{It("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&It("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(){return{value:null,children:new Map}}function vx(t,e,n){if(K(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Y(e);t.children.has(r)||t.children.set(r,ac());const i=t.children.get(r);e=ce(e),vx(i,e,n)}}function mp(t,e,n){t.value!==null?n(e,t.value):e5(t,(r,i)=>{const s=new ae(e.toString()+"/"+r);mp(i,s,n)})}function e5(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t5{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&pt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=10*1e3,n5=30*1e3,r5=5*60*1e3;class i5{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new t5(e);const r=i_+(n5-i_)*Math.random();Bo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;pt(e,(i,s)=>{s>0&&Yn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Bo(this.reportStats_.bind(this),Math.floor(Math.random()*2*r5))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Xt||(Xt={}));function _x(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function _g(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function wg(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Xt.ACK_USER_WRITE,this.source=_x()}operationForChild(e){if(K(this.path)){if(this.affectedTree.value!=null)return R(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ae(e));return new lc(Z(),n,this.revert)}}else return R(Y(this.path)===e,"operationForChild called for unrelated child."),new lc(ce(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n){this.source=e,this.path=n,this.type=Xt.LISTEN_COMPLETE}operationForChild(e){return K(this.path)?new ba(this.source,Z()):new ba(this.source,ce(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Xt.OVERWRITE}operationForChild(e){return K(this.path)?new bi(this.source,Z(),this.snap.getImmediateChild(e)):new bi(this.source,ce(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Xt.MERGE}operationForChild(e){if(K(this.path)){const n=this.children.subtree(new ae(e));return n.isEmpty()?null:n.value?new bi(this.source,Z(),n.value):new ka(this.source,Z(),n)}else return R(Y(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ka(this.source,ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(K(e))return this.isFullyInitialized()&&!this.filtered_;const n=Y(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s5{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function o5(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(QD(o.childName,o.snapshotNode))}),_o(t,i,"child_removed",e,r,n),_o(t,i,"child_added",e,r,n),_o(t,i,"child_moved",s,r,n),_o(t,i,"child_changed",e,r,n),_o(t,i,"value",e,r,n),i}function _o(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>l5(t,a,l)),o.forEach(a=>{const l=a5(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function a5(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function l5(t,e,n){if(e.childName==null||n.childName==null)throw eo("Should only compare child_ events.");const r=new H(e.childName,e.snapshotNode),i=new H(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(t,e){return{eventCache:t,serverCache:e}}function Wo(t,e,n,r){return nd(new $r(e,n,r),t.serverCache)}function wx(t,e,n,r){return nd(t.eventCache,new $r(e,n,r))}function uc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ki(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tf;const u5=()=>(Tf||(Tf=new ut(qL)),Tf);class me{constructor(e,n=u5()){this.value=e,this.children=n}static fromObject(e){let n=new me(null);return pt(e,(r,i)=>{n=n.set(new ae(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Z(),value:this.value};if(K(e))return null;{const r=Y(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ce(e),n);return s!=null?{path:Re(new ae(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(K(e))return this;{const n=Y(e),r=this.children.get(n);return r!==null?r.subtree(ce(e)):new me(null)}}set(e,n){if(K(e))return new me(n,this.children);{const r=Y(e),s=(this.children.get(r)||new me(null)).set(ce(e),n),o=this.children.insert(r,s);return new me(this.value,o)}}remove(e){if(K(e))return this.children.isEmpty()?new me(null):new me(null,this.children);{const n=Y(e),r=this.children.get(n);if(r){const i=r.remove(ce(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new me(null):new me(this.value,s)}else return this}}get(e){if(K(e))return this.value;{const n=Y(e),r=this.children.get(n);return r?r.get(ce(e)):null}}setTree(e,n){if(K(e))return n;{const r=Y(e),s=(this.children.get(r)||new me(null)).setTree(ce(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new me(this.value,o)}}fold(e){return this.fold_(Z(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Re(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Z(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(K(e))return null;{const s=Y(e),o=this.children.get(s);return o?o.findOnPath_(ce(e),Re(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Z(),n)}foreachOnPath_(e,n,r){if(K(e))return this;{this.value&&r(n,this.value);const i=Y(e),s=this.children.get(i);return s?s.foreachOnPath_(ce(e),Re(n,i),r):new me(null)}}foreach(e){this.foreach_(Z(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Re(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.writeTree_=e}static empty(){return new tn(new me(null))}}function Vo(t,e,n){if(K(e))return new tn(new me(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=tt(i,e);return s=s.updateChild(o,n),new tn(t.writeTree_.set(i,s))}else{const i=new me(n),s=t.writeTree_.setTree(e,i);return new tn(s)}}}function s_(t,e,n){let r=t;return pt(n,(i,s)=>{r=Vo(r,Re(e,i),s)}),r}function o_(t,e){if(K(e))return tn.empty();{const n=t.writeTree_.setTree(e,new me(null));return new tn(n)}}function gp(t,e){return Fi(t,e)!=null}function Fi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(tt(n.path,e)):null}function a_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(xe,(r,i)=>{e.push(new H(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new H(r,i.value))}),e}function Rr(t,e){if(K(e))return t;{const n=Fi(t,e);return n!=null?new tn(new me(n)):new tn(t.writeTree_.subtree(e))}}function yp(t){return t.writeTree_.isEmpty()}function Vs(t,e){return Ex(Z(),t.writeTree_,e)}function Ex(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(R(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Ex(Re(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Re(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(t,e){return Tx(e,t)}function c5(t,e,n,r,i){R(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Vo(t.visibleWrites,e,n)),t.lastWriteId=r}function d5(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function f5(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);R(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&h5(a,r.path)?i=!1:Qt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return p5(t),!0;if(r.snap)t.visibleWrites=o_(t.visibleWrites,r.path);else{const a=r.children;pt(a,l=>{t.visibleWrites=o_(t.visibleWrites,Re(r.path,l))})}return!0}else return!1}function h5(t,e){if(t.snap)return Qt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Qt(Re(t.path,n),e))return!0;return!1}function p5(t){t.visibleWrites=Sx(t.allWrites,m5,Z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function m5(t){return t.visible}function Sx(t,e,n){let r=tn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Qt(n,o)?(a=tt(n,o),r=Vo(r,a,s.snap)):Qt(o,n)&&(a=tt(o,n),r=Vo(r,Z(),s.snap.getChild(a)));else if(s.children){if(Qt(n,o))a=tt(n,o),r=s_(r,a,s.children);else if(Qt(o,n))if(a=tt(o,n),K(a))r=s_(r,Z(),s.children);else{const l=js(s.children,Y(a));if(l){const u=l.getChild(ce(a));r=Vo(r,Z(),u)}}}else throw eo("WriteRecord should have .snap or .children")}}return r}function Cx(t,e,n,r,i){if(!r&&!i){const s=Fi(t.visibleWrites,e);if(s!=null)return s;{const o=Rr(t.visibleWrites,e);if(yp(o))return n;if(n==null&&!gp(o,Z()))return null;{const a=n||j.EMPTY_NODE;return Vs(o,a)}}}else{const s=Rr(t.visibleWrites,e);if(!i&&yp(s))return n;if(!i&&n==null&&!gp(s,Z()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Qt(u.path,e)||Qt(e,u.path))},a=Sx(t.allWrites,o,e),l=n||j.EMPTY_NODE;return Vs(a,l)}}}function g5(t,e,n){let r=j.EMPTY_NODE;const i=Fi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(xe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Rr(t.visibleWrites,e);return n.forEachChild(xe,(o,a)=>{const l=Vs(Rr(s,new ae(o)),a);r=r.updateImmediateChild(o,l)}),a_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Rr(t.visibleWrites,e);return a_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function y5(t,e,n,r,i){R(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Re(e,n);if(gp(t.visibleWrites,s))return null;{const o=Rr(t.visibleWrites,s);return yp(o)?i.getChild(n):Vs(o,i.getChild(n))}}function v5(t,e,n,r){const i=Re(e,n),s=Fi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Rr(t.visibleWrites,i);return Vs(o,r.getNode().getImmediateChild(n))}else return null}function _5(t,e){return Fi(t.visibleWrites,e)}function w5(t,e,n,r,i,s,o){let a;const l=Rr(t.visibleWrites,e),u=Fi(l,Z());if(u!=null)a=u;else if(n!=null)a=Vs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],c=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let p=f.getNext();for(;p&&d.length<i;)c(p,r)!==0&&d.push(p),p=f.getNext();return d}else return[]}function E5(){return{visibleWrites:tn.empty(),allWrites:[],lastWriteId:-1}}function cc(t,e,n,r){return Cx(t.writeTree,t.treePath,e,n,r)}function Eg(t,e){return g5(t.writeTree,t.treePath,e)}function l_(t,e,n,r){return y5(t.writeTree,t.treePath,e,n,r)}function dc(t,e){return _5(t.writeTree,Re(t.treePath,e))}function S5(t,e,n,r,i,s){return w5(t.writeTree,t.treePath,e,n,r,i,s)}function Sg(t,e,n){return v5(t.writeTree,t.treePath,e,n)}function xx(t,e){return Tx(Re(t.treePath,e),t.writeTree)}function Tx(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C5{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;R(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),R(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Ta(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,xa(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ws(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Ta(r,e.snapshotNode,i.oldSnap));else throw eo("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x5{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Ix=new x5;class Cg{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new $r(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Sg(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ki(this.viewCache_),s=S5(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T5(t){return{filter:t}}function I5(t,e){R(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),R(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function b5(t,e,n,r,i){const s=new C5;let o,a;if(n.type===Xt.OVERWRITE){const u=n;u.source.fromUser?o=vp(t,e,u.path,u.snap,r,i,s):(R(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!K(u.path),o=fc(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===Xt.MERGE){const u=n;u.source.fromUser?o=P5(t,e,u.path,u.children,r,i,s):(R(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=_p(t,e,u.path,u.children,r,i,a,s))}else if(n.type===Xt.ACK_USER_WRITE){const u=n;u.revert?o=N5(t,e,u.path,r,i,s):o=R5(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Xt.LISTEN_COMPLETE)o=O5(t,e,n.path,r,s);else throw eo("Unknown operation type: "+n.type);const l=s.getChanges();return k5(e,o,l),{viewCache:o,changes:l}}function k5(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=uc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(yx(uc(e)))}}function bx(t,e,n,r,i,s){const o=e.eventCache;if(dc(r,n)!=null)return e;{let a,l;if(K(n))if(R(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ki(e),d=u instanceof j?u:j.EMPTY_NODE,c=Eg(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=cc(r,ki(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=Y(n);if(u===".priority"){R(Fr(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const c=l_(r,n,d,l);c!=null?a=t.filter.updatePriority(d,c):a=o.getNode()}else{const d=ce(n);let c;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=l_(r,n,o.getNode(),l);f!=null?c=o.getNode().getImmediateChild(u).updateChild(d,f):c=o.getNode().getImmediateChild(u)}else c=Sg(r,u,e.serverCache);c!=null?a=t.filter.updateChild(o.getNode(),u,c,d,i,s):a=o.getNode()}}return Wo(e,a,o.isFullyInitialized()||K(n),t.filter.filtersNodes())}}function fc(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(K(n))u=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,r);u=d.updateFullNode(l.getNode(),p,null)}else{const p=Y(n);if(!l.isCompleteForPath(n)&&Fr(n)>1)return e;const v=ce(n),S=l.getNode().getImmediateChild(p).updateChild(v,r);p===".priority"?u=d.updatePriority(l.getNode(),S):u=d.updateChild(l.getNode(),p,S,v,Ix,null)}const c=wx(e,u,l.isFullyInitialized()||K(n),d.filtersNodes()),f=new Cg(i,c,s);return bx(t,c,n,i,f,a)}function vp(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const d=new Cg(i,e,s);if(K(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Wo(e,u,!0,t.filter.filtersNodes());else{const c=Y(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Wo(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=ce(n),p=a.getNode().getImmediateChild(c);let v;if(K(f))v=r;else{const _=d.getCompleteChild(c);_!=null?ax(f)===".priority"&&_.getChild(ux(f)).isEmpty()?v=_:v=_.updateChild(f,r):v=j.EMPTY_NODE}if(p.equals(v))l=e;else{const _=t.filter.updateChild(a.getNode(),c,v,f,d,o);l=Wo(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function u_(t,e){return t.eventCache.isCompleteForChild(e)}function P5(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const d=Re(n,l);u_(e,Y(d))&&(a=vp(t,a,d,u,i,s,o))}),r.foreach((l,u)=>{const d=Re(n,l);u_(e,Y(d))||(a=vp(t,a,d,u,i,s,o))}),a}function c_(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function _p(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;K(n)?u=r:u=new me(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,f)=>{if(d.hasChild(c)){const p=e.serverCache.getNode().getImmediateChild(c),v=c_(t,p,f);l=fc(t,l,new ae(c),v,i,s,o,a)}}),u.children.inorderTraversal((c,f)=>{const p=!e.serverCache.isCompleteForChild(c)&&f.value===null;if(!d.hasChild(c)&&!p){const v=e.serverCache.getNode().getImmediateChild(c),_=c_(t,v,f);l=fc(t,l,new ae(c),_,i,s,o,a)}}),l}function R5(t,e,n,r,i,s,o){if(dc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(K(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return fc(t,e,n,l.getNode().getChild(n),i,s,a,o);if(K(n)){let u=new me(null);return l.getNode().forEachChild(Ss,(d,c)=>{u=u.set(new ae(d),c)}),_p(t,e,n,u,i,s,a,o)}else return e}else{let u=new me(null);return r.foreach((d,c)=>{const f=Re(n,d);l.isCompleteForPath(f)&&(u=u.set(d,l.getNode().getChild(f)))}),_p(t,e,n,u,i,s,a,o)}}function O5(t,e,n,r,i){const s=e.serverCache,o=wx(e,s.getNode(),s.isFullyInitialized()||K(n),s.isFiltered());return bx(t,o,n,r,Ix,i)}function N5(t,e,n,r,i,s){let o;if(dc(r,n)!=null)return e;{const a=new Cg(r,e,i),l=e.eventCache.getNode();let u;if(K(n)||Y(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=cc(r,ki(e));else{const c=e.serverCache.getNode();R(c instanceof j,"serverChildren would be complete if leaf node"),d=Eg(r,c)}d=d,u=t.filter.updateFullNode(l,d,s)}else{const d=Y(n);let c=Sg(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=l.getImmediateChild(d)),c!=null?u=t.filter.updateChild(l,d,c,ce(n),a,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(l,d,j.EMPTY_NODE,ce(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=cc(r,ki(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||dc(r,Z())!=null,Wo(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A5{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new yg(r.getIndex()),s=JD(r);this.processor_=T5(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(j.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(j.EMPTY_NODE,a.getNode(),null),d=new $r(l,o.isFullyInitialized(),i.filtersNodes()),c=new $r(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=nd(c,d),this.eventGenerator_=new s5(this.query_)}get query(){return this.query_}}function L5(t){return t.viewCache_.serverCache.getNode()}function D5(t){return uc(t.viewCache_)}function M5(t,e){const n=ki(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!K(e)&&!n.getImmediateChild(Y(e)).isEmpty())?n.getChild(e):null}function d_(t){return t.eventRegistrations_.length===0}function F5(t,e){t.eventRegistrations_.push(e)}function f_(t,e,n){const r=[];if(n){R(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function h_(t,e,n,r){e.type===Xt.MERGE&&e.source.queryId!==null&&(R(ki(t.viewCache_),"We should always have a full cache before handling merges"),R(uc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=b5(t.processor_,i,e,n,r);return I5(t.processor_,s.viewCache),R(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,kx(t,s.changes,s.viewCache.eventCache.getNode(),null)}function $5(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(xe,(s,o)=>{r.push(Ws(s,o))}),n.isFullyInitialized()&&r.push(yx(n.getNode())),kx(t,r,n.getNode(),e)}function kx(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return o5(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hc;class Px{constructor(){this.views=new Map}}function j5(t){R(!hc,"__referenceConstructor has already been defined"),hc=t}function U5(){return R(hc,"Reference.ts has not been loaded"),hc}function z5(t){return t.views.size===0}function xg(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return R(s!=null,"SyncTree gave us an op for an invalid query."),h_(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(h_(o,e,n,r));return s}}function Rx(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=cc(n,i?r:null),l=!1;a?l=!0:r instanceof j?(a=Eg(n,r),l=!1):(a=j.EMPTY_NODE,l=!1);const u=nd(new $r(a,l,!1),new $r(r,i,!1));return new A5(e,u)}return o}function B5(t,e,n,r,i,s){const o=Rx(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),F5(o,n),$5(o,n)}function W5(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=jr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(f_(u,n,r)),d_(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(f_(l,n,r)),d_(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!jr(t)&&s.push(new(U5())(e._repo,e._path)),{removed:s,events:o}}function Ox(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Or(t,e){let n=null;for(const r of t.views.values())n=n||M5(r,e);return n}function Nx(t,e){if(e._queryParams.loadsAllData())return id(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Ax(t,e){return Nx(t,e)!=null}function jr(t){return id(t)!=null}function id(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pc;function V5(t){R(!pc,"__referenceConstructor has already been defined"),pc=t}function H5(){return R(pc,"Reference.ts has not been loaded"),pc}let G5=1;class p_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new me(null),this.pendingWriteTree_=E5(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function K5(t,e,n,r,i){return c5(t.pendingWriteTree_,e,n,r,i),i?el(t,new bi(_x(),e,n)):[]}function cs(t,e,n=!1){const r=d5(t.pendingWriteTree_,e);if(f5(t.pendingWriteTree_,e)){let s=new me(null);return r.snap!=null?s=s.set(Z(),!0):pt(r.children,o=>{s=s.set(new ae(o),!0)}),el(t,new lc(r.path,s,n))}else return[]}function Za(t,e,n){return el(t,new bi(_g(),e,n))}function q5(t,e,n){const r=me.fromObject(n);return el(t,new ka(_g(),e,r))}function Y5(t,e){return el(t,new ba(_g(),e))}function Q5(t,e,n){const r=Tg(t,n);if(r){const i=Ig(r),s=i.path,o=i.queryId,a=tt(s,e),l=new ba(wg(o),a);return bg(t,s,l)}else return[]}function Lx(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Ax(o,e))){const l=W5(o,e,n,r);z5(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const d=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(f,p)=>jr(p));if(d&&!c){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const p=e6(f);for(let v=0;v<p.length;++v){const _=p[v],S=_.query,g=jx(t,_);t.listenProvider_.startListening(Ho(S),Pa(t,S),g.hashFn,g.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(Ho(e),null):u.forEach(f=>{const p=t.queryToTagMap.get(sd(f));t.listenProvider_.stopListening(Ho(f),p)}))}t6(t,u)}return a}function Dx(t,e,n,r){const i=Tg(t,r);if(i!=null){const s=Ig(i),o=s.path,a=s.queryId,l=tt(o,e),u=new bi(wg(a),l,n);return bg(t,o,u)}else return[]}function X5(t,e,n,r){const i=Tg(t,r);if(i){const s=Ig(i),o=s.path,a=s.queryId,l=tt(o,e),u=me.fromObject(n),d=new ka(wg(a),l,u);return bg(t,o,d)}else return[]}function J5(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,p)=>{const v=tt(f,i);s=s||Or(p,v),o=o||jr(p)});let a=t.syncPointTree_.get(i);a?(o=o||jr(a),s=s||Or(a,Z())):(a=new Px,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=j.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,v)=>{const _=Or(v,Z());_&&(s=s.updateImmediateChild(p,_))}));const u=Ax(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=sd(e);R(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=n6();t.queryToTagMap.set(f,p),t.tagToQueryMap.set(p,f)}const d=rd(t.pendingWriteTree_,i);let c=B5(a,e,n,d,s,l);if(!u&&!o&&!r){const f=Nx(a,e);c=c.concat(r6(t,e,f))}return c}function Mx(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=tt(o,e),u=Or(a,l);if(u)return u});return Cx(i,e,s,n,!0)}function Z5(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=tt(u,n);r=r||Or(d,c)});let i=t.syncPointTree_.get(n);i?r=r||Or(i,Z()):(i=new Px,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new $r(r,!0,!1):null,a=rd(t.pendingWriteTree_,e._path),l=Rx(i,e,a,s?o.getNode():j.EMPTY_NODE,s);return D5(l)}function el(t,e){return Fx(e,t.syncPointTree_,null,rd(t.pendingWriteTree_,Z()))}function Fx(t,e,n,r){if(K(t.path))return $x(t,e,n,r);{const i=e.get(Z());n==null&&i!=null&&(n=Or(i,Z()));let s=[];const o=Y(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,d=xx(r,o);s=s.concat(Fx(a,l,u,d))}return i&&(s=s.concat(xg(i,t,r,n))),s}}function $x(t,e,n,r){const i=e.get(Z());n==null&&i!=null&&(n=Or(i,Z()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=xx(r,o),d=t.operationForChild(o);d&&(s=s.concat($x(d,a,l,u)))}),i&&(s=s.concat(xg(i,t,r,n))),s}function jx(t,e){const n=e.query,r=Pa(t,n);return{hashFn:()=>(L5(e)||j.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?Q5(t,n._path,r):Y5(t,n._path);{const s=XL(i,n);return Lx(t,n,null,s)}}}}function Pa(t,e){const n=sd(e);return t.queryToTagMap.get(n)}function sd(t){return t._path.toString()+"$"+t._queryIdentifier}function Tg(t,e){return t.tagToQueryMap.get(e)}function Ig(t){const e=t.indexOf("$");return R(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ae(t.substr(0,e))}}function bg(t,e,n){const r=t.syncPointTree_.get(e);R(r,"Missing sync point for query tag that we're tracking");const i=rd(t.pendingWriteTree_,e);return xg(r,n,i,null)}function e6(t){return t.fold((e,n,r)=>{if(n&&jr(n))return[id(n)];{let i=[];return n&&(i=Ox(n)),pt(r,(s,o)=>{i=i.concat(o)}),i}})}function Ho(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(H5())(t._repo,t._path):t}function t6(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=sd(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function n6(){return G5++}function r6(t,e,n){const r=e._path,i=Pa(t,e),s=jx(t,n),o=t.listenProvider_.startListening(Ho(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)R(!jr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,d,c)=>{if(!K(u)&&d&&jr(d))return[id(d).query];{let f=[];return d&&(f=f.concat(Ox(d).map(p=>p.query))),pt(c,(p,v)=>{f=f.concat(v)}),f}});for(let u=0;u<l.length;++u){const d=l[u];t.listenProvider_.stopListening(Ho(d),Pa(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new kg(n)}node(){return this.node_}}class Pg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Re(this.path_,e);return new Pg(this.syncTree_,n)}node(){return Mx(this.syncTree_,this.path_)}}const i6=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},m_=function(t,e,n){if(!t||typeof t!="object")return t;if(R(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return s6(t[".sv"],e,n);if(typeof t[".sv"]=="object")return o6(t[".sv"],e);R(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},s6=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:R(!1,"Unexpected server value: "+t)}},o6=function(t,e,n){t.hasOwnProperty("increment")||R(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&R(!1,"Unexpected increment value: "+r);const i=e.node();if(R(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},a6=function(t,e,n,r){return Rg(e,new Pg(n,t),r)},l6=function(t,e,n){return Rg(t,new kg(e),n)};function Rg(t,e,n){const r=t.getPriority().val(),i=m_(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=m_(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ae(a,Be(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ae(i))),o.forEachChild(xe,(a,l)=>{const u=Rg(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Ng(t,e){let n=e instanceof ae?e:new ae(e),r=t,i=Y(n);for(;i!==null;){const s=js(r.node.children,i)||{children:{},childCount:0};r=new Og(i,r,s),n=ce(n),i=Y(n)}return r}function so(t){return t.node.value}function Ux(t,e){t.node.value=e,wp(t)}function zx(t){return t.node.childCount>0}function u6(t){return so(t)===void 0&&!zx(t)}function od(t,e){pt(t.node.children,(n,r)=>{e(new Og(n,t,r))})}function Bx(t,e,n,r){n&&!r&&e(t),od(t,i=>{Bx(i,e,!0,r)}),n&&r&&e(t)}function c6(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function tl(t){return new ae(t.parent===null?t.name:tl(t.parent)+"/"+t.name)}function wp(t){t.parent!==null&&d6(t.parent,t.name,t)}function d6(t,e,n){const r=u6(n),i=Yn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,wp(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,wp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f6=/[\[\].#$\/\u0000-\u001F\u007F]/,h6=/[\[\].#$\u0000-\u001F\u007F]/,If=10*1024*1024,Wx=function(t){return typeof t=="string"&&t.length!==0&&!f6.test(t)},Vx=function(t){return typeof t=="string"&&t.length!==0&&!h6.test(t)},p6=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Vx(t)},Hx=function(t,e,n){const r=n instanceof ae?new RD(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ti(r));if(typeof e=="function")throw new Error(t+"contains a function "+ti(r)+" with contents = "+e.toString());if(UC(e))throw new Error(t+"contains "+e.toString()+" "+ti(r));if(typeof e=="string"&&e.length>If/3&&qc(e)>If)throw new Error(t+"contains a string greater than "+If+" utf8 bytes "+ti(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(pt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Wx(o)))throw new Error(t+" contains an invalid key ("+o+") "+ti(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);OD(r,o),Hx(t,a,r),ND(r)}),i&&s)throw new Error(t+' contains ".value" child '+ti(r)+" in addition to actual children.")}},Gx=function(t,e,n,r){if(!(r&&n===void 0)&&!Vx(n))throw new Error(HS(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},m6=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Gx(t,e,n,r)},g6=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Wx(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!p6(n))throw new Error(HS(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y6{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function v6(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!cx(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Kr(t,e,n){v6(t,n),_6(t,r=>Qt(r,e)||Qt(e,r))}function _6(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(w6(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function w6(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();pi&&Ye("event: "+n.toString()),Xa(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E6="repo_interrupt",S6=25;class C6{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new y6,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ac(),this.transactionQueueTree_=new Og,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function x6(t,e,n){if(t.stats_=hg(t.repoInfo_),t.forceRestClient_||tD())t.server_=new oc(t.repoInfo_,(r,i,s,o)=>{g_(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>y_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Pe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Fn(t.repoInfo_,e,(r,i,s,o)=>{g_(t,r,i,s,o)},r=>{y_(t,r)},r=>{I6(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=oD(t.repoInfo_,()=>new i5(t.stats_,t.server_)),t.infoData_=new ZD,t.infoSyncTree_=new p_({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Za(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ag(t,"connected",!1),t.serverSyncTree_=new p_({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);Kr(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function T6(t){const n=t.infoData_.getNode(new ae(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Kx(t){return i6({timestamp:T6(t)})}function g_(t,e,n,r,i){t.dataUpdateCount++;const s=new ae(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=qu(n,u=>Be(u));o=X5(t.serverSyncTree_,s,l,i)}else{const l=Be(n);o=Dx(t.serverSyncTree_,s,l,i)}else if(r){const l=qu(n,u=>Be(u));o=q5(t.serverSyncTree_,s,l)}else{const l=Be(n);o=Za(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Mg(t,s)),Kr(t.eventQueue_,a,o)}function y_(t,e){Ag(t,"connected",e),e===!1&&P6(t)}function I6(t,e){pt(e,(n,r)=>{Ag(t,n,r)})}function Ag(t,e,n){const r=new ae("/.info/"+e),i=Be(n);t.infoData_.updateSnapshot(r,i);const s=Za(t.infoSyncTree_,r,i);Kr(t.eventQueue_,r,s)}function b6(t){return t.nextWriteId_++}function k6(t,e,n){const r=Z5(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Be(i).withIndex(e._queryParams.getIndex());J5(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Za(t.serverSyncTree_,e._path,s);else{const a=Pa(t.serverSyncTree_,e);o=Dx(t.serverSyncTree_,e._path,s,a)}return Kr(t.eventQueue_,e._path,o),Lx(t.serverSyncTree_,e,n,null,!0),s},i=>(Lg(t,"get for query "+Pe(e)+" failed: "+i),Promise.reject(new Error(i))))}function P6(t){Lg(t,"onDisconnectEvents");const e=Kx(t),n=ac();mp(t.onDisconnect_,Z(),(i,s)=>{const o=a6(i,s,t.serverSyncTree_,e);vx(n,i,o)});let r=[];mp(n,Z(),(i,s)=>{r=r.concat(Za(t.serverSyncTree_,i,s));const o=A6(t,i);Mg(t,o)}),t.onDisconnect_=ac(),Kr(t.eventQueue_,Z(),r)}function R6(t){t.persistentConnection_&&t.persistentConnection_.interrupt(E6)}function Lg(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ye(n,...e)}function qx(t,e,n){return Mx(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function Dg(t,e=t.transactionQueueTree_){if(e||ad(t,e),so(e)){const n=Qx(t,e);R(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&O6(t,tl(e),n)}else zx(e)&&od(e,n=>{Dg(t,n)})}function O6(t,e,n){const r=n.map(u=>u.currentWriteId),i=qx(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];R(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=tt(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Lg(t,"transaction put response",{path:l.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(cs(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&c.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();ad(t,Ng(t.transactionQueueTree_,e)),Dg(t,t.transactionQueueTree_),Kr(t.eventQueue_,e,d);for(let f=0;f<c.length;f++)Xa(c[f])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{It("transaction at "+l.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Mg(t,e)}},o)}function Mg(t,e){const n=Yx(t,e),r=tl(n),i=Qx(t,n);return N6(t,i,r),r}function N6(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=tt(n,l.path);let d=!1,c;if(R(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,c=l.abortReason,i=i.concat(cs(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=S6)d=!0,c="maxretry",i=i.concat(cs(t.serverSyncTree_,l.currentWriteId,!0));else{const f=qx(t,l.path,o);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){Hx("transaction failed: Data returned ",p,l.path);let v=Be(p);typeof p=="object"&&p!=null&&Yn(p,".priority")||(v=v.updatePriority(f.getPriority()));const S=l.currentWriteId,g=Kx(t),h=l6(v,f,g);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=h,l.currentWriteId=b6(t),o.splice(o.indexOf(S),1),i=i.concat(K5(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(cs(t.serverSyncTree_,S,!0))}else d=!0,c="nodata",i=i.concat(cs(t.serverSyncTree_,l.currentWriteId,!0))}Kr(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(c==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(c),!1,null))))}ad(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Xa(r[a]);Dg(t,t.transactionQueueTree_)}function Yx(t,e){let n,r=t.transactionQueueTree_;for(n=Y(e);n!==null&&so(r)===void 0;)r=Ng(r,n),e=ce(e),n=Y(e);return r}function Qx(t,e){const n=[];return Xx(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Xx(t,e,n){const r=so(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);od(e,i=>{Xx(t,i,n)})}function ad(t,e){const n=so(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Ux(e,n.length>0?n:void 0)}od(e,r=>{ad(t,r)})}function A6(t,e){const n=tl(Yx(t,e)),r=Ng(t.transactionQueueTree_,e);return c6(r,i=>{bf(t,i)}),bf(t,r),Bx(r,i=>{bf(t,i)}),n}function bf(t,e){const n=so(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(R(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(R(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(cs(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Ux(e,void 0):n.length=s+1,Kr(t.eventQueue_,tl(e),i);for(let o=0;o<r.length;o++)Xa(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L6(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function D6(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):It(`Invalid query segment '${n}' in query '${t}'`)}return e}const v_=function(t,e){const n=M6(t),r=n.namespace;n.domain==="firebase.com"&&Hn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Hn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||GL();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new JC(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ae(n.pathString)}},M6=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=L6(t.substring(d,c)));const f=D6(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const p=e.slice(0,u);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F6{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Pe(this.snapshot.exportVal())}}class $6{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j6{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return R(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return K(this._path)?null:ax(this._path)}get ref(){return new Xn(this._repo,this._path)}get _queryIdentifier(){const e=r_(this._queryParams),n=dg(e);return n==="{}"?"default":n}get _queryObject(){return r_(this._queryParams)}isEqual(e){if(e=mt(e),!(e instanceof Fg))return!1;const n=this._repo===e._repo,r=cx(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+PD(this._path)}}class Xn extends Fg{constructor(e,n){super(e,n,new vg,!1)}get parent(){const e=ux(this._path);return e===null?null:new Xn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ra{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ae(e),r=Ep(this.ref,e);return new Ra(this._node.getChild(n),r,xe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ra(i,Ep(this.ref,r),xe)))}hasChild(e){const n=new ae(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function U6(t,e){return t=mt(t),t._checkNotDeleted("ref"),e!==void 0?Ep(t._root,e):t._root}function Ep(t,e){return t=mt(t),Y(t._path)===null?m6("child","path",e,!1):Gx("child","path",e,!1),new Xn(t._repo,Re(t._path,e))}function z6(t){t=mt(t);const e=new j6(()=>{}),n=new $g(e);return k6(t._repo,t,n).then(r=>new Ra(r,new Xn(t._repo,t._path),t._queryParams.getIndex()))}class $g{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new F6("value",this,new Ra(e.snapshotNode,new Xn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new $6(this,e,n):null}matches(e){return e instanceof $g?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}j5(Xn);V5(Xn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B6="FIREBASE_DATABASE_EMULATOR_HOST",Sp={};let W6=!1;function V6(t,e,n,r){t.repoInfo_=new JC(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function H6(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Hn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ye("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=v_(s,i),a=o.repoInfo,l,u;typeof process<"u"&&jv&&(u=jv[B6]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=v_(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const d=i&&l?new Es(Es.OWNER):new rD(t.name,t.options,e);g6("Invalid Firebase Database URL",o),K(o.path)||Hn("Database URL must point to the root of a Firebase Database (not including a child path).");const c=K6(a,t,d,new nD(t.name,n));return new q6(c,t)}function G6(t,e){const n=Sp[e];(!n||n[t.key]!==t)&&Hn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),R6(t),delete n[t.key]}function K6(t,e,n,r){let i=Sp[e.name];i||(i={},Sp[e.name]=i);let s=i[t.toURLString()];return s&&Hn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new C6(t,W6,n,r),i[t.toURLString()]=s,s}class q6{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(x6(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Xn(this._repo,Z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(G6(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Hn("Cannot call "+e+" on a deleted database.")}}function Y6(t=YS(),e){const n=tg(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=WO("database");r&&Q6(n,...r)}return n}function Q6(t,e,n,r={}){t=mt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Hn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Hn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Es(Es.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:VO(r.mockUserToken,t.app.options.projectId);s=new Es(o)}V6(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X6(t){zL(no),Us(new Si("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return H6(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Pr(Uv,zv,t),Pr(Uv,zv,"esm2017")}Fn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Fn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};X6();var J6="firebase",Z6="10.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pr(J6,Z6,"app");const eM="AIzaSyBvNsD3kcb2TUqMM9BqdQ32YRe6fDJSmyY",tM="learn-react-60375.firebaseapp.com",nM="learn-react-60375",rM="learn-react-60375.appspot.com",iM="1070256347866",sM="1:1070256347866:web:ab4f6b96e7a6bb857ba3e3",oM="https://learn-react-60375-default-rtdb.europe-west1.firebasedatabase.app",aM={apiKey:eM,authDomain:tM,projectId:nM,storageBucket:rM,messagingSenderId:iM,appId:sM,databaseURL:oM},lM=qS(aM),uM=Y6(lM),ou=Ba("teachers/getTeachers",async({signal:t},e)=>{try{const n=U6(uM);return(await z6(n,{signal:t})).val()}catch(n){return e.rejectWithValue(n.message)}}),cM=t=>t.teachers.teachersCard,dM=t=>t.teachers.isLoading,Jx=t=>t.teachers.favorite,fM=k.li`
  width: 1184px;
  padding: 24px;
  border-radius: 24px;
  background: rgb(255, 255, 255);
  display: flex;
  position: relative;
  gap: 48px;
`,hM=k.div`
  position: relative;
  width: 120px;
  height: 120px;
  border: 3px solid rgb(251, 233, 186);
  border-radius: 100px;
  background: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
`,pM=k.img`
  border-radius: 100px;
  width: 96px;
  height: 96px;
`,mM=k.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 19px;
  right: 17px;
  width: 12px;
  height: 12px;
`,gM=k.div``,yM=k.div``,vM=k.ul`
  display: flex;
  align-items: center;
  & > :first-child {
    color: rgb(138, 138, 137);
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0%;
    text-align: left;
    margin-right: 192px;
  }
  & > :nth-child(2) {
    display: flex;
    gap: 6px;
    align-items: center;
  }

  & > :not(:first-child) {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    padding-right: 16px;
    border-right: 1px solid rgba(18, 20, 23, 0.2);
  }

  & > :nth-child(5) {
    padding-right: 0;
    padding-left: 16px;
    border-right: none;
  }
  & > :nth-child(4) {
    display: flex;
    gap: 6px;
    padding-left: 16px;
  }
  & > :nth-child(3) {
    padding-left: 16px;
  }
`,wo=k.li`
  align-items: center;
`,_M=k.div`
  display: flex;
  align-items: center;
`,wM=k.div`
  display: flex;
  align-items: center;
`,EM=k.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: rgb(56, 205, 62);
`,SM=k.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 24px;
  right: 24px;
  cursor: pointer;
`,CM=k.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  margin-bottom: 32px;
`,kf=k.span`
  color: rgb(18, 20, 23);
  text-decoration: underline;
`,xM=k.ul`
  text-align: start;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
  li:not(:first-child) > span {
    text-decoration: none;
  }
`,Pf=k.li`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: rgb(138, 138, 137);
`,TM=k.button`
  color: rgb(18, 20, 23);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-decoration-line: underline;
  display: flex;
  margin-bottom: 32px;
  background: none;
  border: none;
  cursor: pointer;
`,IM=k.ul`
  display: flex;
  gap: 8px;
  & > :first-child {
    background: rgb(244, 197, 80);
    border: none;
  }
  margin-bottom: 32px;
`,bM=k.li`
  border: 1px solid rgba(18, 20, 23, 0.2);
  border-radius: 35px;
  color: rgb(18, 20, 23);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  padding: 8px 12px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`,kM=()=>m.jsxs("svg",{width:"12.000000",height:"12.000000",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[m.jsx("desc",{children:"Created with Pixso."}),m.jsx("defs",{}),m.jsx("circle",{id:"Ellipse 1",cx:"6.000000",cy:"6.000000",r:"6.000000",fill:"#FFFFFF",fillOpacity:"1.000000"}),m.jsx("circle",{id:"Ellipse 2",cx:"6.000000",cy:"6.000000",r:"4.000000",fill:"#38CD3E",fillOpacity:"1.000000"})]}),PM=()=>m.jsxs("svg",{width:"16.000000",height:"16.000000",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[m.jsx("desc",{children:"Created with Pixso."}),m.jsx("defs",{children:m.jsx("clipPath",{id:"clip44_528",children:m.jsx("rect",{id:"book-open-01",width:"16.000000",height:"16.000000",fill:"white",fillOpacity:"0"})})}),m.jsx("rect",{id:"book-open-01",width:"16.000000",height:"16.000000",fill:"#FFFFFF",fillOpacity:"0"}),m.jsxs("g",{clipPath:"url(#clip44_528)",children:[m.jsx("path",{id:"Accent",d:"M12.2667 2C10.7732 2 10.0264 2 9.45605 2.29065C8.95428 2.54626 8.54633 2.95422 8.29065 3.45605C8 4.02649 8 4.77319 8 6.26672L8 14L8.06671 13.8999C8.52979 13.2053 8.76135 12.858 9.06726 12.6066C9.33807 12.3839 9.65015 12.2169 9.9856 12.1151C10.3645 12 10.7819 12 11.6168 12L12.5333 12C13.2801 12 13.6534 12 13.9387 11.8547C14.1895 11.7268 14.3935 11.5228 14.5214 11.272C14.6667 10.9868 14.6667 10.6134 14.6667 9.8667L14.6667 4.1333C14.6667 3.3866 14.6667 3.01318 14.5214 2.72803C14.3935 2.47717 14.1895 2.27319 13.9387 2.14526C13.6534 2 13.2801 2 12.5333 2L12.2667 2Z",stroke:"#000000",strokeOpacity:"1.000000",strokeWidth:"1.500000",strokeLinejoin:"round"}),m.jsx("path",{id:"Icon",d:"M3.7334 2C5.22687 2 5.97357 2 6.54401 2.29065C7.04578 2.54626 7.45374 2.95422 7.70941 3.45605C8.00006 4.02649 8.00006 4.77319 8.00006 6.26672L8.00006 14L7.93335 13.8999C7.47021 13.2053 7.23871 12.858 6.9328 12.6066C6.66193 12.3839 6.34985 12.2169 6.01447 12.1151C5.63556 12 5.21814 12 4.38324 12L3.46674 12C2.71997 12 2.34662 12 2.0614 11.8547C1.81049 11.7268 1.60651 11.5228 1.4787 11.272C1.33337 10.9868 1.33337 10.6134 1.33337 9.8667L1.33337 4.1333C1.33337 3.3866 1.33337 3.01318 1.4787 2.72803C1.60651 2.47717 1.81049 2.27319 2.0614 2.14526C2.34662 2 2.71997 2 3.46674 2L3.7334 2Z",stroke:"#000000",strokeOpacity:"1.000000",strokeWidth:"1.500000",strokeLinejoin:"round"})]})]}),Zx=()=>m.jsxs("svg",{width:"16.000000",height:"16.000000",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[m.jsx("desc",{children:"Created with Pixso."}),m.jsx("defs",{children:m.jsx("clipPath",{id:"clip44_535",children:m.jsx("rect",{id:"icon/star",width:"16.000000",height:"16.000000",fill:"white",fillOpacity:"0"})})}),m.jsxs("g",{clipPath:"url(#clip44_535)",children:[m.jsx("path",{id:"Star 2",d:"M7.55777 0.838135L5.66953 4.41699C5.5972 4.5542 5.46533 4.65002 5.31256 4.67639L1.32535 5.36633C0.929199 5.43481 0.771851 5.91919 1.05203 6.2074L3.87225 9.10925C3.98032 9.22034 4.03067 9.37537 4.00861 9.52881L3.43262 13.5341C3.3754 13.932 3.78738 14.2313 4.14816 14.054L7.77939 12.2684C7.91852 12.2001 8.08148 12.2001 8.22061 12.2684L11.8519 14.054C12.2126 14.2313 12.6246 13.932 12.5674 13.5341L11.9914 9.52881C11.9693 9.37537 12.0197 9.22034 12.1277 9.10925L14.948 6.2074C15.2281 5.91919 15.0708 5.43481 14.6747 5.36633L10.6874 4.67639C10.5347 4.65002 10.4028 4.5542 10.3304 4.41699L8.44223 0.838135C8.25461 0.482544 7.74539 0.482544 7.55777 0.838135Z",fill:"#FFC531",fillOpacity:"1.000000",fillRule:"evenodd"}),m.jsx("path",{id:"Star 2",d:"M5.66953 4.41699C5.5972 4.5542 5.46533 4.65002 5.31256 4.67639L1.32535 5.36633C0.929199 5.43481 0.771851 5.91919 1.05203 6.2074L3.87225 9.10925C3.98032 9.22034 4.03067 9.37537 4.00861 9.52881L3.43262 13.5341C3.3754 13.932 3.78738 14.2313 4.14816 14.054L7.77939 12.2684C7.91852 12.2001 8.08148 12.2001 8.22061 12.2684L11.8519 14.054C12.2126 14.2313 12.6246 13.932 12.5674 13.5341L11.9914 9.52881C11.9693 9.37537 12.0197 9.22034 12.1277 9.10925L14.948 6.2074C15.2281 5.91919 15.0708 5.43481 14.6747 5.36633L10.6874 4.67639C10.5347 4.65002 10.4028 4.5542 10.3304 4.41699L8.44223 0.838135C8.25461 0.482544 7.74539 0.482544 7.55777 0.838135L5.66953 4.41699ZM6.73087 4.97705C6.48489 5.44324 6.03656 5.76892 5.51715 5.85889L2.83725 6.32251L4.73279 8.27283C5.10019 8.65088 5.27142 9.17786 5.19638 9.69971L4.80927 12.3917L7.24988 11.1917C7.7229 10.959 8.2771 10.959 8.75012 11.1917L11.1907 12.3917L10.8036 9.69971C10.7286 9.17786 10.8998 8.65088 11.2672 8.27283L13.1628 6.32251L10.4828 5.85889C9.96344 5.76892 9.51511 5.44324 9.26913 4.97705L8 2.57153L6.73087 4.97705Z",fill:"#FFC531",fillOpacity:"1.000000",fillRule:"evenodd"})]})]}),__=({fill:t})=>m.jsxs("svg",{width:"24.645044",height:"21.751221",viewBox:"0 0 24.645 21.7512",fill:t,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[m.jsx("desc",{children:"Created with Pixso."}),m.jsx("defs",{}),m.jsx("path",{id:"Vector",d:"M19.9655 1.45386C19.2425 1.15417 18.4674 1 17.6847 1C16.902 1 16.127 1.15417 15.4039 1.45386C14.6809 1.75342 14.0239 2.1925 13.4706 2.74609L12.3222 3.89453L11.1739 2.74609C10.0562 1.62842 8.54035 1.00061 6.95973 1.00061C5.37911 1.00061 3.86323 1.62842 2.74557 2.74609C1.6279 3.86377 1 5.37964 1 6.96033C1 8.54089 1.6279 10.0568 2.74557 11.1744L3.8939 12.3228L12.3222 20.7511L20.7506 12.3228L21.8989 11.1744C22.4525 10.6212 22.8916 9.96423 23.1912 9.24109C23.4908 8.51807 23.645 7.74304 23.645 6.96033C23.645 6.17761 23.4908 5.40259 23.1912 4.67957C22.8916 3.95642 22.4525 3.29944 21.8989 2.74609C21.3456 2.1925 20.6886 1.75342 19.9655 1.45386Z",stroke:"#121417",strokeOpacity:"1.000000",strokeWidth:"2.000000",strokeLinejoin:"round"})]}),RM=k.p`
  color: rgb(18, 20, 23);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  width: 968px;
  margin-bottom: 32px;
`,OM=k.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 32px;
`;k.img`
  border-radius: 100px;
`;const NM=k.div`
  width: 44px;
  height: 44px;
  background-size: cover;
  border-radius: 100px;
  background-image: url(${t=>t.avatarUrl});
  background-position: 50%;
`,AM=k.li``,LM=k.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
`,DM=k.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`,w_=k.li`
  color: rgb(138, 138, 137);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  display: flex;
  align-items: center;
  gap: 8px;
`,MM=k.span`
  color: rgb(18, 20, 23);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`,FM=k.p`
  color: rgb(18, 20, 23);

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;

  text-align: left;
`,$M=({children:t})=>m.jsx(HP,{shouldForwardProp:e=>e!=="avatarUrl",children:t}),eT=({experience:t,reviews:e})=>m.jsxs(m.Fragment,{children:[m.jsx(RM,{children:t}),m.jsx(OM,{children:e.map((n,r)=>m.jsxs(AM,{children:[m.jsxs(DM,{children:[m.jsx("div",{children:m.jsx(NM,{avatarUrl:n.reviewer_avatar})}),m.jsxs(LM,{children:[m.jsx(w_,{children:n.reviewer_name}),m.jsxs(w_,{children:[m.jsx(Zx,{}),m.jsxs(MM,{children:[" ",n.reviewer_rating]})]})]})]}),m.jsx(FM,{children:n.comment})]},r))})]});eT.propTypes={experience:G.string,reviews:G.arrayOf(G.shape({comment:G.string,reviewer_name:G.string,reviewer_rating:G.number}))};const jM=k.button`
  color: rgb(18, 20, 23);
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  border-radius: 12px;
  background-color: rgb(244, 197, 80);
  border: none;
  padding: 16px 48px 16px 48px;
  display: flex;
  cursor: pointer;
  &:hover {
    background-color: ${ie.YELLOW_HOVER_BUTTON};
  }
`,UM=()=>m.jsx(jM,{children:"Book trial lesson"}),zM={teachersCard:[],favorite:[],isLoading:!1,error:"",card:[]},ld=LS({name:"teachers",initialState:zM,reducers:{setFavorite:(t,e)=>{t.favorite.push(e.payload)},delFavorite:(t,e)=>{t.favorite=t.favorite.filter(n=>n.id!==e.payload.id)},setCard:(t,e)=>{t.card=e.payload}},extraReducers:t=>{t.addCase(ou.pending,e=>{e.isLoading=!0}).addCase(ou.fulfilled,(e,n)=>{e.isLoading=!1,e.teachersCard=n.payload,e.error=""}).addCase(ou.rejected,(e,n)=>{e.isLoading=!1,e.error=n.payload})}});ld.actions;const{setFavorite:BM}=ld.actions,{delFavorite:WM}=ld.actions,VM=ld.reducer,jg=t=>{const{id:e,avatar_url:n,conditions:r,experience:i,languages:s,lesson_info:o,lessons_done:a,levels:l,name:u,price_per_hour:d,rating:c,reviews:f,surname:p}=t,[v,_]=E.useState(!1),S=za(Jx),g=Li(),h=S.some(C=>C.id===e),y=Wc(),w=()=>{_(!0)},T=()=>{if(!y.isLoggedIn){cg.error("Please enter LogIn or Registration ");return}!h&&y.isLoggedIn?g(BM(t)):g(WM(t))};return m.jsxs(fM,{children:[m.jsxs(hM,{children:[m.jsx(mM,{children:m.jsx(kM,{})}),m.jsx(pM,{src:n,alt:"avatar"})]}),m.jsxs(gM,{children:[m.jsx(SM,{onClick:()=>T(),children:h&&y.isLoggedIn?m.jsx(__,{fill:"#F4C550"}):m.jsx(__,{fill:"transparent"})}),m.jsx(yM,{children:m.jsxs(vM,{children:[m.jsx(wo,{children:"Languages"}),m.jsxs(wo,{children:[m.jsx(_M,{children:m.jsx(PM,{})}),"Lessons online"]}),m.jsxs(wo,{children:["Lessons done: ",a]}),m.jsxs(wo,{children:[m.jsx(wM,{children:m.jsx(Zx,{})}),"Rating: ",c]}),m.jsxs(wo,{children:["Price / 1 hour: ",m.jsx(EM,{children:d})]})]})}),m.jsxs(CM,{children:[u," ",p]}),m.jsxs(xM,{children:[m.jsxs(Pf,{children:["Speaks: ",m.jsx(kf,{children:s.join(", ")})]}),m.jsxs(Pf,{children:["Lesson Info: ",m.jsx(kf,{children:o})]}),m.jsxs(Pf,{children:["Conditions: ",m.jsx(kf,{children:r.join(", ")})]})]}),!v&&m.jsx(TM,{onClick:w,children:"Read more"}),v&&m.jsx(eT,{experience:i,reviews:f}),m.jsx(IM,{children:l.map((C,x)=>m.jsxs(bM,{children:["#",C]},x))}),v&&m.jsx(UM,{})]})]})};jg.propTypes={id:G.string,avatar_url:G.string,conditions:G.arrayOf(G.string),experience:G.string,languages:G.arrayOf(G.string),lesson_info:G.string,lessons_done:G.number,levels:G.arrayOf(G.string),name:G.string,price_per_hour:G.number,rating:G.number,reviews:G.arrayOf(G.shape({comment:G.string,reviewer_name:G.string,reviewer_rating:G.number})),surname:G.string};const tT=k.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 64px;
`,HM=k.button`
  width: 183px;
  height: 60px;
  border-radius: 12px;
  background-color: rgb(244, 197, 80);
  border: none;
  &:hover {
    background-color: ${ie.YELLOW_HOVER_BUTTON};
  }
  color: rgb(18, 20, 23);
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
`,GM=()=>{const t=za(cM),[e,n]=E.useState(4),r=Li(),i=()=>{n(o=>o+4),r(t.slice(0,e))},s=t.slice(0,e);return m.jsxs(m.Fragment,{children:[m.jsx(tT,{children:s.map(o=>m.jsx(jg,{...o},o.id))}),e===s.length&&m.jsx(HM,{type:"button",onClick:i,children:"Learn more"})]})},KM=k.div`
  position: relative;
  width: 1440px;
  background: rgb(248, 248, 248);
  padding: 96px 128px 96px 128px;
`,qM=()=>{const t=Li();return E.useEffect(()=>{const e=new AbortController;return t(ou({signal:e.signal})),()=>e.abort()},[t]),m.jsx(KM,{children:m.jsx(GM,{})})};var YM=function(e){return QM(e)&&!XM(e)};function QM(t){return!!t&&typeof t=="object"}function XM(t){var e=Object.prototype.toString.call(t);return e==="[object RegExp]"||e==="[object Date]"||eF(t)}var JM=typeof Symbol=="function"&&Symbol.for,ZM=JM?Symbol.for("react.element"):60103;function eF(t){return t.$$typeof===ZM}function tF(t){return Array.isArray(t)?[]:{}}function mc(t,e){return e.clone!==!1&&e.isMergeableObject(t)?Oa(tF(t),t,e):t}function nF(t,e,n){return t.concat(e).map(function(r){return mc(r,n)})}function rF(t,e,n){var r={};return n.isMergeableObject(t)&&Object.keys(t).forEach(function(i){r[i]=mc(t[i],n)}),Object.keys(e).forEach(function(i){!n.isMergeableObject(e[i])||!t[i]?r[i]=mc(e[i],n):r[i]=Oa(t[i],e[i],n)}),r}function Oa(t,e,n){n=n||{},n.arrayMerge=n.arrayMerge||nF,n.isMergeableObject=n.isMergeableObject||YM;var r=Array.isArray(e),i=Array.isArray(t),s=r===i;return s?r?n.arrayMerge(t,e,n):rF(t,e,n):mc(e,n)}Oa.all=function(e,n){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(r,i){return Oa(r,i,n)},{})};var Cp=Oa,nT=typeof global=="object"&&global&&global.Object===Object&&global,iF=typeof self=="object"&&self&&self.Object===Object&&self,wn=nT||iF||Function("return this")(),Ur=wn.Symbol,rT=Object.prototype,sF=rT.hasOwnProperty,oF=rT.toString,Eo=Ur?Ur.toStringTag:void 0;function aF(t){var e=sF.call(t,Eo),n=t[Eo];try{t[Eo]=void 0;var r=!0}catch{}var i=oF.call(t);return r&&(e?t[Eo]=n:delete t[Eo]),i}var lF=Object.prototype,uF=lF.toString;function cF(t){return uF.call(t)}var dF="[object Null]",fF="[object Undefined]",E_=Ur?Ur.toStringTag:void 0;function $i(t){return t==null?t===void 0?fF:dF:E_&&E_ in Object(t)?aF(t):cF(t)}function iT(t,e){return function(n){return t(e(n))}}var Ug=iT(Object.getPrototypeOf,Object);function ji(t){return t!=null&&typeof t=="object"}var hF="[object Object]",pF=Function.prototype,mF=Object.prototype,sT=pF.toString,gF=mF.hasOwnProperty,yF=sT.call(Object);function S_(t){if(!ji(t)||$i(t)!=hF)return!1;var e=Ug(t);if(e===null)return!0;var n=gF.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&sT.call(n)==yF}var C_=Array.isArray,x_=Object.keys,vF=Object.prototype.hasOwnProperty,_F=typeof Element<"u";function xp(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=C_(t),r=C_(e),i,s,o;if(n&&r){if(s=t.length,s!=e.length)return!1;for(i=s;i--!==0;)if(!xp(t[i],e[i]))return!1;return!0}if(n!=r)return!1;var a=t instanceof Date,l=e instanceof Date;if(a!=l)return!1;if(a&&l)return t.getTime()==e.getTime();var u=t instanceof RegExp,d=e instanceof RegExp;if(u!=d)return!1;if(u&&d)return t.toString()==e.toString();var c=x_(t);if(s=c.length,s!==x_(e).length)return!1;for(i=s;i--!==0;)if(!vF.call(e,c[i]))return!1;if(_F&&t instanceof Element&&e instanceof Element)return t===e;for(i=s;i--!==0;)if(o=c[i],!(o==="_owner"&&t.$$typeof)&&!xp(t[o],e[o]))return!1;return!0}return t!==t&&e!==e}var wF=function(e,n){try{return xp(e,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const or=Gs(wF);function EF(){this.__data__=[],this.size=0}function oT(t,e){return t===e||t!==t&&e!==e}function ud(t,e){for(var n=t.length;n--;)if(oT(t[n][0],e))return n;return-1}var SF=Array.prototype,CF=SF.splice;function xF(t){var e=this.__data__,n=ud(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():CF.call(e,n,1),--this.size,!0}function TF(t){var e=this.__data__,n=ud(e,t);return n<0?void 0:e[n][1]}function IF(t){return ud(this.__data__,t)>-1}function bF(t,e){var n=this.__data__,r=ud(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function Jn(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Jn.prototype.clear=EF;Jn.prototype.delete=xF;Jn.prototype.get=TF;Jn.prototype.has=IF;Jn.prototype.set=bF;function kF(){this.__data__=new Jn,this.size=0}function PF(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function RF(t){return this.__data__.get(t)}function OF(t){return this.__data__.has(t)}function nl(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var NF="[object AsyncFunction]",AF="[object Function]",LF="[object GeneratorFunction]",DF="[object Proxy]";function aT(t){if(!nl(t))return!1;var e=$i(t);return e==AF||e==LF||e==NF||e==DF}var Rf=wn["__core-js_shared__"],T_=function(){var t=/[^.]+$/.exec(Rf&&Rf.keys&&Rf.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function MF(t){return!!T_&&T_ in t}var FF=Function.prototype,$F=FF.toString;function Ui(t){if(t!=null){try{return $F.call(t)}catch{}try{return t+""}catch{}}return""}var jF=/[\\^$.*+?()[\]{}|]/g,UF=/^\[object .+?Constructor\]$/,zF=Function.prototype,BF=Object.prototype,WF=zF.toString,VF=BF.hasOwnProperty,HF=RegExp("^"+WF.call(VF).replace(jF,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function GF(t){if(!nl(t)||MF(t))return!1;var e=aT(t)?HF:UF;return e.test(Ui(t))}function KF(t,e){return t==null?void 0:t[e]}function zi(t,e){var n=KF(t,e);return GF(n)?n:void 0}var Na=zi(wn,"Map"),Aa=zi(Object,"create");function qF(){this.__data__=Aa?Aa(null):{},this.size=0}function YF(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var QF="__lodash_hash_undefined__",XF=Object.prototype,JF=XF.hasOwnProperty;function ZF(t){var e=this.__data__;if(Aa){var n=e[t];return n===QF?void 0:n}return JF.call(e,t)?e[t]:void 0}var e$=Object.prototype,t$=e$.hasOwnProperty;function n$(t){var e=this.__data__;return Aa?e[t]!==void 0:t$.call(e,t)}var r$="__lodash_hash_undefined__";function i$(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Aa&&e===void 0?r$:e,this}function Pi(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Pi.prototype.clear=qF;Pi.prototype.delete=YF;Pi.prototype.get=ZF;Pi.prototype.has=n$;Pi.prototype.set=i$;function s$(){this.size=0,this.__data__={hash:new Pi,map:new(Na||Jn),string:new Pi}}function o$(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function cd(t,e){var n=t.__data__;return o$(e)?n[typeof e=="string"?"string":"hash"]:n.map}function a$(t){var e=cd(this,t).delete(t);return this.size-=e?1:0,e}function l$(t){return cd(this,t).get(t)}function u$(t){return cd(this,t).has(t)}function c$(t,e){var n=cd(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function qr(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}qr.prototype.clear=s$;qr.prototype.delete=a$;qr.prototype.get=l$;qr.prototype.has=u$;qr.prototype.set=c$;var d$=200;function f$(t,e){var n=this.__data__;if(n instanceof Jn){var r=n.__data__;if(!Na||r.length<d$-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new qr(r)}return n.set(t,e),this.size=n.size,this}function oo(t){var e=this.__data__=new Jn(t);this.size=e.size}oo.prototype.clear=kF;oo.prototype.delete=PF;oo.prototype.get=RF;oo.prototype.has=OF;oo.prototype.set=f$;function h$(t,e){for(var n=-1,r=t==null?0:t.length;++n<r&&e(t[n],n,t)!==!1;);return t}var I_=function(){try{var t=zi(Object,"defineProperty");return t({},"",{}),t}catch{}}();function lT(t,e,n){e=="__proto__"&&I_?I_(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var p$=Object.prototype,m$=p$.hasOwnProperty;function uT(t,e,n){var r=t[e];(!(m$.call(t,e)&&oT(r,n))||n===void 0&&!(e in t))&&lT(t,e,n)}function dd(t,e,n,r){var i=!n;n||(n={});for(var s=-1,o=e.length;++s<o;){var a=e[s],l=r?r(n[a],t[a],a,n,t):void 0;l===void 0&&(l=t[a]),i?lT(n,a,l):uT(n,a,l)}return n}function g$(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var y$="[object Arguments]";function b_(t){return ji(t)&&$i(t)==y$}var cT=Object.prototype,v$=cT.hasOwnProperty,_$=cT.propertyIsEnumerable,w$=b_(function(){return arguments}())?b_:function(t){return ji(t)&&v$.call(t,"callee")&&!_$.call(t,"callee")},rl=Array.isArray;function E$(){return!1}var dT=typeof Ct=="object"&&Ct&&!Ct.nodeType&&Ct,k_=dT&&typeof xt=="object"&&xt&&!xt.nodeType&&xt,S$=k_&&k_.exports===dT,P_=S$?wn.Buffer:void 0,C$=P_?P_.isBuffer:void 0,fT=C$||E$,x$=9007199254740991,T$=/^(?:0|[1-9]\d*)$/;function I$(t,e){var n=typeof t;return e=e??x$,!!e&&(n=="number"||n!="symbol"&&T$.test(t))&&t>-1&&t%1==0&&t<e}var b$=9007199254740991;function hT(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=b$}var k$="[object Arguments]",P$="[object Array]",R$="[object Boolean]",O$="[object Date]",N$="[object Error]",A$="[object Function]",L$="[object Map]",D$="[object Number]",M$="[object Object]",F$="[object RegExp]",$$="[object Set]",j$="[object String]",U$="[object WeakMap]",z$="[object ArrayBuffer]",B$="[object DataView]",W$="[object Float32Array]",V$="[object Float64Array]",H$="[object Int8Array]",G$="[object Int16Array]",K$="[object Int32Array]",q$="[object Uint8Array]",Y$="[object Uint8ClampedArray]",Q$="[object Uint16Array]",X$="[object Uint32Array]",pe={};pe[W$]=pe[V$]=pe[H$]=pe[G$]=pe[K$]=pe[q$]=pe[Y$]=pe[Q$]=pe[X$]=!0;pe[k$]=pe[P$]=pe[z$]=pe[R$]=pe[B$]=pe[O$]=pe[N$]=pe[A$]=pe[L$]=pe[D$]=pe[M$]=pe[F$]=pe[$$]=pe[j$]=pe[U$]=!1;function J$(t){return ji(t)&&hT(t.length)&&!!pe[$i(t)]}function zg(t){return function(e){return t(e)}}var pT=typeof Ct=="object"&&Ct&&!Ct.nodeType&&Ct,Go=pT&&typeof xt=="object"&&xt&&!xt.nodeType&&xt,Z$=Go&&Go.exports===pT,Of=Z$&&nT.process,Hs=function(){try{var t=Go&&Go.require&&Go.require("util").types;return t||Of&&Of.binding&&Of.binding("util")}catch{}}(),R_=Hs&&Hs.isTypedArray,e8=R_?zg(R_):J$,t8=Object.prototype,n8=t8.hasOwnProperty;function mT(t,e){var n=rl(t),r=!n&&w$(t),i=!n&&!r&&fT(t),s=!n&&!r&&!i&&e8(t),o=n||r||i||s,a=o?g$(t.length,String):[],l=a.length;for(var u in t)(e||n8.call(t,u))&&!(o&&(u=="length"||i&&(u=="offset"||u=="parent")||s&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||I$(u,l)))&&a.push(u);return a}var r8=Object.prototype;function Bg(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||r8;return t===n}var i8=iT(Object.keys,Object),s8=Object.prototype,o8=s8.hasOwnProperty;function a8(t){if(!Bg(t))return i8(t);var e=[];for(var n in Object(t))o8.call(t,n)&&n!="constructor"&&e.push(n);return e}function gT(t){return t!=null&&hT(t.length)&&!aT(t)}function Wg(t){return gT(t)?mT(t):a8(t)}function l8(t,e){return t&&dd(e,Wg(e),t)}function u8(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var c8=Object.prototype,d8=c8.hasOwnProperty;function f8(t){if(!nl(t))return u8(t);var e=Bg(t),n=[];for(var r in t)r=="constructor"&&(e||!d8.call(t,r))||n.push(r);return n}function Vg(t){return gT(t)?mT(t,!0):f8(t)}function h8(t,e){return t&&dd(e,Vg(e),t)}var yT=typeof Ct=="object"&&Ct&&!Ct.nodeType&&Ct,O_=yT&&typeof xt=="object"&&xt&&!xt.nodeType&&xt,p8=O_&&O_.exports===yT,N_=p8?wn.Buffer:void 0,A_=N_?N_.allocUnsafe:void 0;function m8(t,e){if(e)return t.slice();var n=t.length,r=A_?A_(n):new t.constructor(n);return t.copy(r),r}function vT(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}function g8(t,e){for(var n=-1,r=t==null?0:t.length,i=0,s=[];++n<r;){var o=t[n];e(o,n,t)&&(s[i++]=o)}return s}function _T(){return[]}var y8=Object.prototype,v8=y8.propertyIsEnumerable,L_=Object.getOwnPropertySymbols,Hg=L_?function(t){return t==null?[]:(t=Object(t),g8(L_(t),function(e){return v8.call(t,e)}))}:_T;function _8(t,e){return dd(t,Hg(t),e)}function wT(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}var w8=Object.getOwnPropertySymbols,ET=w8?function(t){for(var e=[];t;)wT(e,Hg(t)),t=Ug(t);return e}:_T;function E8(t,e){return dd(t,ET(t),e)}function ST(t,e,n){var r=e(t);return rl(t)?r:wT(r,n(t))}function S8(t){return ST(t,Wg,Hg)}function C8(t){return ST(t,Vg,ET)}var Tp=zi(wn,"DataView"),Ip=zi(wn,"Promise"),bp=zi(wn,"Set"),kp=zi(wn,"WeakMap"),D_="[object Map]",x8="[object Object]",M_="[object Promise]",F_="[object Set]",$_="[object WeakMap]",j_="[object DataView]",T8=Ui(Tp),I8=Ui(Na),b8=Ui(Ip),k8=Ui(bp),P8=Ui(kp),ni=$i;(Tp&&ni(new Tp(new ArrayBuffer(1)))!=j_||Na&&ni(new Na)!=D_||Ip&&ni(Ip.resolve())!=M_||bp&&ni(new bp)!=F_||kp&&ni(new kp)!=$_)&&(ni=function(t){var e=$i(t),n=e==x8?t.constructor:void 0,r=n?Ui(n):"";if(r)switch(r){case T8:return j_;case I8:return D_;case b8:return M_;case k8:return F_;case P8:return $_}return e});const Gg=ni;var R8=Object.prototype,O8=R8.hasOwnProperty;function N8(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&O8.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var U_=wn.Uint8Array;function Kg(t){var e=new t.constructor(t.byteLength);return new U_(e).set(new U_(t)),e}function A8(t,e){var n=e?Kg(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}var L8=/\w*$/;function D8(t){var e=new t.constructor(t.source,L8.exec(t));return e.lastIndex=t.lastIndex,e}var z_=Ur?Ur.prototype:void 0,B_=z_?z_.valueOf:void 0;function M8(t){return B_?Object(B_.call(t)):{}}function F8(t,e){var n=e?Kg(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var $8="[object Boolean]",j8="[object Date]",U8="[object Map]",z8="[object Number]",B8="[object RegExp]",W8="[object Set]",V8="[object String]",H8="[object Symbol]",G8="[object ArrayBuffer]",K8="[object DataView]",q8="[object Float32Array]",Y8="[object Float64Array]",Q8="[object Int8Array]",X8="[object Int16Array]",J8="[object Int32Array]",Z8="[object Uint8Array]",ej="[object Uint8ClampedArray]",tj="[object Uint16Array]",nj="[object Uint32Array]";function rj(t,e,n){var r=t.constructor;switch(e){case G8:return Kg(t);case $8:case j8:return new r(+t);case K8:return A8(t,n);case q8:case Y8:case Q8:case X8:case J8:case Z8:case ej:case tj:case nj:return F8(t,n);case U8:return new r;case z8:case V8:return new r(t);case B8:return D8(t);case W8:return new r;case H8:return M8(t)}}var W_=Object.create,ij=function(){function t(){}return function(e){if(!nl(e))return{};if(W_)return W_(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();function sj(t){return typeof t.constructor=="function"&&!Bg(t)?ij(Ug(t)):{}}var oj="[object Map]";function aj(t){return ji(t)&&Gg(t)==oj}var V_=Hs&&Hs.isMap,lj=V_?zg(V_):aj,uj="[object Set]";function cj(t){return ji(t)&&Gg(t)==uj}var H_=Hs&&Hs.isSet,dj=H_?zg(H_):cj,fj=1,hj=2,pj=4,CT="[object Arguments]",mj="[object Array]",gj="[object Boolean]",yj="[object Date]",vj="[object Error]",xT="[object Function]",_j="[object GeneratorFunction]",wj="[object Map]",Ej="[object Number]",TT="[object Object]",Sj="[object RegExp]",Cj="[object Set]",xj="[object String]",Tj="[object Symbol]",Ij="[object WeakMap]",bj="[object ArrayBuffer]",kj="[object DataView]",Pj="[object Float32Array]",Rj="[object Float64Array]",Oj="[object Int8Array]",Nj="[object Int16Array]",Aj="[object Int32Array]",Lj="[object Uint8Array]",Dj="[object Uint8ClampedArray]",Mj="[object Uint16Array]",Fj="[object Uint32Array]",ue={};ue[CT]=ue[mj]=ue[bj]=ue[kj]=ue[gj]=ue[yj]=ue[Pj]=ue[Rj]=ue[Oj]=ue[Nj]=ue[Aj]=ue[wj]=ue[Ej]=ue[TT]=ue[Sj]=ue[Cj]=ue[xj]=ue[Tj]=ue[Lj]=ue[Dj]=ue[Mj]=ue[Fj]=!0;ue[vj]=ue[xT]=ue[Ij]=!1;function Ko(t,e,n,r,i,s){var o,a=e&fj,l=e&hj,u=e&pj;if(n&&(o=i?n(t,r,i,s):n(t)),o!==void 0)return o;if(!nl(t))return t;var d=rl(t);if(d){if(o=N8(t),!a)return vT(t,o)}else{var c=Gg(t),f=c==xT||c==_j;if(fT(t))return m8(t,a);if(c==TT||c==CT||f&&!i){if(o=l||f?{}:sj(t),!a)return l?E8(t,h8(o,t)):_8(t,l8(o,t))}else{if(!ue[c])return i?t:{};o=rj(t,c,a)}}s||(s=new oo);var p=s.get(t);if(p)return p;s.set(t,o),dj(t)?t.forEach(function(S){o.add(Ko(S,e,n,S,t,s))}):lj(t)&&t.forEach(function(S,g){o.set(g,Ko(S,e,n,g,t,s))});var v=u?l?C8:S8:l?Vg:Wg,_=d?void 0:v(t);return h$(_||t,function(S,g){_&&(g=S,S=t[g]),uT(o,g,Ko(S,e,n,g,t,s))}),o}var $j=4;function G_(t){return Ko(t,$j)}function IT(t,e){for(var n=-1,r=t==null?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}var jj="[object Symbol]";function qg(t){return typeof t=="symbol"||ji(t)&&$i(t)==jj}var Uj="Expected a function";function Yg(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(Uj);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=t.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(Yg.Cache||qr),n}Yg.Cache=qr;var zj=500;function Bj(t){var e=Yg(t,function(r){return n.size===zj&&n.clear(),r}),n=e.cache;return e}var Wj=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Vj=/\\(\\)?/g,Hj=Bj(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(Wj,function(n,r,i,s){e.push(i?s.replace(Vj,"$1"):r||n)}),e});const Gj=Hj;var Kj=1/0;function qj(t){if(typeof t=="string"||qg(t))return t;var e=t+"";return e=="0"&&1/t==-Kj?"-0":e}var Yj=1/0,K_=Ur?Ur.prototype:void 0,q_=K_?K_.toString:void 0;function bT(t){if(typeof t=="string")return t;if(rl(t))return IT(t,bT)+"";if(qg(t))return q_?q_.call(t):"";var e=t+"";return e=="0"&&1/t==-Yj?"-0":e}function Qj(t){return t==null?"":bT(t)}function kT(t){return rl(t)?IT(t,qj):qg(t)?[t]:vT(Gj(Qj(t)))}var PT={exports:{}},se={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $e=typeof Symbol=="function"&&Symbol.for,Qg=$e?Symbol.for("react.element"):60103,Xg=$e?Symbol.for("react.portal"):60106,fd=$e?Symbol.for("react.fragment"):60107,hd=$e?Symbol.for("react.strict_mode"):60108,pd=$e?Symbol.for("react.profiler"):60114,md=$e?Symbol.for("react.provider"):60109,gd=$e?Symbol.for("react.context"):60110,Jg=$e?Symbol.for("react.async_mode"):60111,yd=$e?Symbol.for("react.concurrent_mode"):60111,vd=$e?Symbol.for("react.forward_ref"):60112,_d=$e?Symbol.for("react.suspense"):60113,Xj=$e?Symbol.for("react.suspense_list"):60120,wd=$e?Symbol.for("react.memo"):60115,Ed=$e?Symbol.for("react.lazy"):60116,Jj=$e?Symbol.for("react.block"):60121,Zj=$e?Symbol.for("react.fundamental"):60117,e9=$e?Symbol.for("react.responder"):60118,t9=$e?Symbol.for("react.scope"):60119;function Nt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Qg:switch(t=t.type,t){case Jg:case yd:case fd:case pd:case hd:case _d:return t;default:switch(t=t&&t.$$typeof,t){case gd:case vd:case Ed:case wd:case md:return t;default:return e}}case Xg:return e}}}function RT(t){return Nt(t)===yd}se.AsyncMode=Jg;se.ConcurrentMode=yd;se.ContextConsumer=gd;se.ContextProvider=md;se.Element=Qg;se.ForwardRef=vd;se.Fragment=fd;se.Lazy=Ed;se.Memo=wd;se.Portal=Xg;se.Profiler=pd;se.StrictMode=hd;se.Suspense=_d;se.isAsyncMode=function(t){return RT(t)||Nt(t)===Jg};se.isConcurrentMode=RT;se.isContextConsumer=function(t){return Nt(t)===gd};se.isContextProvider=function(t){return Nt(t)===md};se.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Qg};se.isForwardRef=function(t){return Nt(t)===vd};se.isFragment=function(t){return Nt(t)===fd};se.isLazy=function(t){return Nt(t)===Ed};se.isMemo=function(t){return Nt(t)===wd};se.isPortal=function(t){return Nt(t)===Xg};se.isProfiler=function(t){return Nt(t)===pd};se.isStrictMode=function(t){return Nt(t)===hd};se.isSuspense=function(t){return Nt(t)===_d};se.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===fd||t===yd||t===pd||t===hd||t===_d||t===Xj||typeof t=="object"&&t!==null&&(t.$$typeof===Ed||t.$$typeof===wd||t.$$typeof===md||t.$$typeof===gd||t.$$typeof===vd||t.$$typeof===Zj||t.$$typeof===e9||t.$$typeof===t9||t.$$typeof===Jj)};se.typeOf=Nt;PT.exports=se;var n9=PT.exports,Zg=n9,r9={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i9={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s9={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},OT={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},e0={};e0[Zg.ForwardRef]=s9;e0[Zg.Memo]=OT;function Y_(t){return Zg.isMemo(t)?OT:e0[t.$$typeof]||r9}var o9=Object.defineProperty,a9=Object.getOwnPropertyNames,Q_=Object.getOwnPropertySymbols,l9=Object.getOwnPropertyDescriptor,u9=Object.getPrototypeOf,X_=Object.prototype;function NT(t,e,n){if(typeof e!="string"){if(X_){var r=u9(e);r&&r!==X_&&NT(t,r,n)}var i=a9(e);Q_&&(i=i.concat(Q_(e)));for(var s=Y_(t),o=Y_(e),a=0;a<i.length;++a){var l=i[a];if(!i9[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=l9(e,l);try{o9(t,l,u)}catch{}}}}return t}var c9=NT;const d9=Gs(c9);var f9=1,h9=4;function p9(t){return Ko(t,f9|h9)}function ne(){return ne=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ne.apply(this,arguments)}function AT(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function yr(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function J_(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var Sd=E.createContext(void 0);Sd.displayName="FormikContext";var m9=Sd.Provider,g9=Sd.Consumer;function LT(){var t=E.useContext(Sd);return t}var Z_=function(e){return Array.isArray(e)&&e.length===0},ze=function(e){return typeof e=="function"},il=function(e){return e!==null&&typeof e=="object"},y9=function(e){return String(Math.floor(Number(e)))===e},Nf=function(e){return Object.prototype.toString.call(e)==="[object String]"},DT=function(e){return E.Children.count(e)===0},Af=function(e){return il(e)&&ze(e.then)};function ye(t,e,n,r){r===void 0&&(r=0);for(var i=kT(e);t&&r<i.length;)t=t[i[r++]];return r!==i.length&&!t||t===void 0?n:t}function yn(t,e,n){for(var r=G_(t),i=r,s=0,o=kT(e);s<o.length-1;s++){var a=o[s],l=ye(t,o.slice(0,s+1));if(l&&(il(l)||Array.isArray(l)))i=i[a]=G_(l);else{var u=o[s+1];i=i[a]=y9(u)&&Number(u)>=0?[]:{}}}return(s===0?t:i)[o[s]]===n?t:(n===void 0?delete i[o[s]]:i[o[s]]=n,s===0&&n===void 0&&delete r[o[s]],r)}function MT(t,e,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var i=0,s=Object.keys(t);i<s.length;i++){var o=s[i],a=t[o];il(a)?n.get(a)||(n.set(a,!0),r[o]=Array.isArray(a)?[]:{},MT(a,e,n,r[o])):r[o]=e}return r}function v9(t,e){switch(e.type){case"SET_VALUES":return ne({},t,{values:e.payload});case"SET_TOUCHED":return ne({},t,{touched:e.payload});case"SET_ERRORS":return or(t.errors,e.payload)?t:ne({},t,{errors:e.payload});case"SET_STATUS":return ne({},t,{status:e.payload});case"SET_ISSUBMITTING":return ne({},t,{isSubmitting:e.payload});case"SET_ISVALIDATING":return ne({},t,{isValidating:e.payload});case"SET_FIELD_VALUE":return ne({},t,{values:yn(t.values,e.payload.field,e.payload.value)});case"SET_FIELD_TOUCHED":return ne({},t,{touched:yn(t.touched,e.payload.field,e.payload.value)});case"SET_FIELD_ERROR":return ne({},t,{errors:yn(t.errors,e.payload.field,e.payload.value)});case"RESET_FORM":return ne({},t,e.payload);case"SET_FORMIK_STATE":return e.payload(t);case"SUBMIT_ATTEMPT":return ne({},t,{touched:MT(t.values,!0),isSubmitting:!0,submitCount:t.submitCount+1});case"SUBMIT_FAILURE":return ne({},t,{isSubmitting:!1});case"SUBMIT_SUCCESS":return ne({},t,{isSubmitting:!1});default:return t}}var Qr={},Al={};function _9(t){var e=t.validateOnChange,n=e===void 0?!0:e,r=t.validateOnBlur,i=r===void 0?!0:r,s=t.validateOnMount,o=s===void 0?!1:s,a=t.isInitialValid,l=t.enableReinitialize,u=l===void 0?!1:l,d=t.onSubmit,c=yr(t,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=ne({validateOnChange:n,validateOnBlur:i,validateOnMount:o,onSubmit:d},c),p=E.useRef(f.initialValues),v=E.useRef(f.initialErrors||Qr),_=E.useRef(f.initialTouched||Al),S=E.useRef(f.initialStatus),g=E.useRef(!1),h=E.useRef({});E.useEffect(function(){return g.current=!0,function(){g.current=!1}},[]);var y=E.useState(0),w=y[1],T=E.useRef({values:f.initialValues,errors:f.initialErrors||Qr,touched:f.initialTouched||Al,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),C=T.current,x=E.useCallback(function(I){var N=T.current;T.current=v9(N,I),N!==T.current&&w(function(D){return D+1})},[]),b=E.useCallback(function(I,N){return new Promise(function(D,$){var V=f.validate(I,N);V==null?D(Qr):Af(V)?V.then(function(te){D(te||Qr)},function(te){$(te)}):D(V)})},[f.validate]),L=E.useCallback(function(I,N){var D=f.validationSchema,$=ze(D)?D(N):D,V=N&&$.validateAt?$.validateAt(N,I):E9(I,$);return new Promise(function(te,Ne){V.then(function(){te(Qr)},function(Cn){Cn.name==="ValidationError"?te(w9(Cn)):Ne(Cn)})})},[f.validationSchema]),F=E.useCallback(function(I,N){return new Promise(function(D){return D(h.current[I].validate(N))})},[]),B=E.useCallback(function(I){var N=Object.keys(h.current).filter(function($){return ze(h.current[$].validate)}),D=N.length>0?N.map(function($){return F($,ye(I,$))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(D).then(function($){return $.reduce(function(V,te,Ne){return te==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||te&&(V=yn(V,N[Ne],te)),V},{})})},[F]),At=E.useCallback(function(I){return Promise.all([B(I),f.validationSchema?L(I):{},f.validate?b(I):{}]).then(function(N){var D=N[0],$=N[1],V=N[2],te=Cp.all([D,$,V],{arrayMerge:S9});return te})},[f.validate,f.validationSchema,B,b,L]),le=Lt(function(I){return I===void 0&&(I=C.values),x({type:"SET_ISVALIDATING",payload:!0}),At(I).then(function(N){return g.current&&(x({type:"SET_ISVALIDATING",payload:!1}),x({type:"SET_ERRORS",payload:N})),N})});E.useEffect(function(){o&&g.current===!0&&or(p.current,f.initialValues)&&le(p.current)},[o,le]);var gt=E.useCallback(function(I){var N=I&&I.values?I.values:p.current,D=I&&I.errors?I.errors:v.current?v.current:f.initialErrors||{},$=I&&I.touched?I.touched:_.current?_.current:f.initialTouched||{},V=I&&I.status?I.status:S.current?S.current:f.initialStatus;p.current=N,v.current=D,_.current=$,S.current=V;var te=function(){x({type:"RESET_FORM",payload:{isSubmitting:!!I&&!!I.isSubmitting,errors:D,touched:$,status:V,values:N,isValidating:!!I&&!!I.isValidating,submitCount:I&&I.submitCount&&typeof I.submitCount=="number"?I.submitCount:0}})};if(f.onReset){var Ne=f.onReset(C.values,_0);Af(Ne)?Ne.then(te):te()}else te()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);E.useEffect(function(){g.current===!0&&!or(p.current,f.initialValues)&&u&&(p.current=f.initialValues,gt(),o&&le(p.current))},[u,f.initialValues,gt,o,le]),E.useEffect(function(){u&&g.current===!0&&!or(v.current,f.initialErrors)&&(v.current=f.initialErrors||Qr,x({type:"SET_ERRORS",payload:f.initialErrors||Qr}))},[u,f.initialErrors]),E.useEffect(function(){u&&g.current===!0&&!or(_.current,f.initialTouched)&&(_.current=f.initialTouched||Al,x({type:"SET_TOUCHED",payload:f.initialTouched||Al}))},[u,f.initialTouched]),E.useEffect(function(){u&&g.current===!0&&!or(S.current,f.initialStatus)&&(S.current=f.initialStatus,x({type:"SET_STATUS",payload:f.initialStatus}))},[u,f.initialStatus,f.initialTouched]);var En=Lt(function(I){if(h.current[I]&&ze(h.current[I].validate)){var N=ye(C.values,I),D=h.current[I].validate(N);return Af(D)?(x({type:"SET_ISVALIDATING",payload:!0}),D.then(function($){return $}).then(function($){x({type:"SET_FIELD_ERROR",payload:{field:I,value:$}}),x({type:"SET_ISVALIDATING",payload:!1})})):(x({type:"SET_FIELD_ERROR",payload:{field:I,value:D}}),Promise.resolve(D))}else if(f.validationSchema)return x({type:"SET_ISVALIDATING",payload:!0}),L(C.values,I).then(function($){return $}).then(function($){x({type:"SET_FIELD_ERROR",payload:{field:I,value:ye($,I)}}),x({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Yr=E.useCallback(function(I,N){var D=N.validate;h.current[I]={validate:D}},[]),Sn=E.useCallback(function(I){delete h.current[I]},[]),O=Lt(function(I,N){x({type:"SET_TOUCHED",payload:I});var D=N===void 0?i:N;return D?le(C.values):Promise.resolve()}),M=E.useCallback(function(I){x({type:"SET_ERRORS",payload:I})},[]),U=Lt(function(I,N){var D=ze(I)?I(C.values):I;x({type:"SET_VALUES",payload:D});var $=N===void 0?n:N;return $?le(D):Promise.resolve()}),J=E.useCallback(function(I,N){x({type:"SET_FIELD_ERROR",payload:{field:I,value:N}})},[]),Q=Lt(function(I,N,D){x({type:"SET_FIELD_VALUE",payload:{field:I,value:N}});var $=D===void 0?n:D;return $?le(yn(C.values,I,N)):Promise.resolve()}),sn=E.useCallback(function(I,N){var D=N,$=I,V;if(!Nf(I)){I.persist&&I.persist();var te=I.target?I.target:I.currentTarget,Ne=te.type,Cn=te.name,kd=te.id,Pd=te.value,lI=te.checked,iz=te.outerHTML,w0=te.options,uI=te.multiple;D=N||Cn||kd,$=/number|range/.test(Ne)?(V=parseFloat(Pd),isNaN(V)?"":V):/checkbox/.test(Ne)?x9(ye(C.values,D),lI,Pd):w0&&uI?C9(w0):Pd}D&&Q(D,$)},[Q,C.values]),Je=Lt(function(I){if(Nf(I))return function(N){return sn(N,I)};sn(I)}),Ze=Lt(function(I,N,D){N===void 0&&(N=!0),x({type:"SET_FIELD_TOUCHED",payload:{field:I,value:N}});var $=D===void 0?i:D;return $?le(C.values):Promise.resolve()}),He=E.useCallback(function(I,N){I.persist&&I.persist();var D=I.target,$=D.name,V=D.id,te=D.outerHTML,Ne=N||$||V;Ze(Ne,!0)},[Ze]),yt=Lt(function(I){if(Nf(I))return function(N){return He(N,I)};He(I)}),Zn=E.useCallback(function(I){ze(I)?x({type:"SET_FORMIK_STATE",payload:I}):x({type:"SET_FORMIK_STATE",payload:function(){return I}})},[]),on=E.useCallback(function(I){x({type:"SET_STATUS",payload:I})},[]),Vi=E.useCallback(function(I){x({type:"SET_ISSUBMITTING",payload:I})},[]),er=Lt(function(){return x({type:"SUBMIT_ATTEMPT"}),le().then(function(I){var N=I instanceof Error,D=!N&&Object.keys(I).length===0;if(D){var $;try{if($=tI(),$===void 0)return}catch(V){throw V}return Promise.resolve($).then(function(V){return g.current&&x({type:"SUBMIT_SUCCESS"}),V}).catch(function(V){if(g.current)throw x({type:"SUBMIT_FAILURE"}),V})}else if(g.current&&(x({type:"SUBMIT_FAILURE"}),N))throw I})}),an=Lt(function(I){I&&I.preventDefault&&ze(I.preventDefault)&&I.preventDefault(),I&&I.stopPropagation&&ze(I.stopPropagation)&&I.stopPropagation(),er().catch(function(N){console.warn("Warning: An unhandled error was caught from submitForm()",N)})}),_0={resetForm:gt,validateForm:le,validateField:En,setErrors:M,setFieldError:J,setFieldTouched:Ze,setFieldValue:Q,setStatus:on,setSubmitting:Vi,setTouched:O,setValues:U,setFormikState:Zn,submitForm:er},tI=Lt(function(){return d(C.values,_0)}),nI=Lt(function(I){I&&I.preventDefault&&ze(I.preventDefault)&&I.preventDefault(),I&&I.stopPropagation&&ze(I.stopPropagation)&&I.stopPropagation(),gt()}),rI=E.useCallback(function(I){return{value:ye(C.values,I),error:ye(C.errors,I),touched:!!ye(C.touched,I),initialValue:ye(p.current,I),initialTouched:!!ye(_.current,I),initialError:ye(v.current,I)}},[C.errors,C.touched,C.values]),iI=E.useCallback(function(I){return{setValue:function(D,$){return Q(I,D,$)},setTouched:function(D,$){return Ze(I,D,$)},setError:function(D){return J(I,D)}}},[Q,Ze,J]),sI=E.useCallback(function(I){var N=il(I),D=N?I.name:I,$=ye(C.values,D),V={name:D,value:$,onChange:Je,onBlur:yt};if(N){var te=I.type,Ne=I.value,Cn=I.as,kd=I.multiple;te==="checkbox"?Ne===void 0?V.checked=!!$:(V.checked=!!(Array.isArray($)&&~$.indexOf(Ne)),V.value=Ne):te==="radio"?(V.checked=$===Ne,V.value=Ne):Cn==="select"&&kd&&(V.value=V.value||[],V.multiple=!0)}return V},[yt,Je,C.values]),bd=E.useMemo(function(){return!or(p.current,C.values)},[p.current,C.values]),oI=E.useMemo(function(){return typeof a<"u"?bd?C.errors&&Object.keys(C.errors).length===0:a!==!1&&ze(a)?a(f):a:C.errors&&Object.keys(C.errors).length===0},[a,bd,C.errors,f]),aI=ne({},C,{initialValues:p.current,initialErrors:v.current,initialTouched:_.current,initialStatus:S.current,handleBlur:yt,handleChange:Je,handleReset:nI,handleSubmit:an,resetForm:gt,setErrors:M,setFormikState:Zn,setFieldTouched:Ze,setFieldValue:Q,setFieldError:J,setStatus:on,setSubmitting:Vi,setTouched:O,setValues:U,submitForm:er,validateForm:le,validateField:En,isValid:oI,dirty:bd,unregisterField:Sn,registerField:Yr,getFieldProps:sI,getFieldMeta:rI,getFieldHelpers:iI,validateOnBlur:i,validateOnChange:n,validateOnMount:o});return aI}function FT(t){var e=_9(t),n=t.component,r=t.children,i=t.render,s=t.innerRef;return E.useImperativeHandle(s,function(){return e}),E.createElement(m9,{value:e},n?E.createElement(n,e):i?i(e):r?ze(r)?r(e):DT(r)?null:E.Children.only(r):null)}function w9(t){var e={};if(t.inner){if(t.inner.length===0)return yn(e,t.path,t.message);for(var i=t.inner,n=Array.isArray(i),r=0,i=n?i:i[Symbol.iterator]();;){var s;if(n){if(r>=i.length)break;s=i[r++]}else{if(r=i.next(),r.done)break;s=r.value}var o=s;ye(e,o.path)||(e=yn(e,o.path,o.message))}}return e}function E9(t,e,n,r){n===void 0&&(n=!1);var i=Pp(t);return e[n?"validateSync":"validate"](i,{abortEarly:!1,context:r||i})}function Pp(t){var e=Array.isArray(t)?[]:{};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=String(n);Array.isArray(t[r])===!0?e[r]=t[r].map(function(i){return Array.isArray(i)===!0||S_(i)?Pp(i):i!==""?i:void 0}):S_(t[r])?e[r]=Pp(t[r]):e[r]=t[r]!==""?t[r]:void 0}return e}function S9(t,e,n){var r=t.slice();return e.forEach(function(s,o){if(typeof r[o]>"u"){var a=n.clone!==!1,l=a&&n.isMergeableObject(s);r[o]=l?Cp(Array.isArray(s)?[]:{},s,n):s}else n.isMergeableObject(s)?r[o]=Cp(t[o],s,n):t.indexOf(s)===-1&&r.push(s)}),r}function C9(t){return Array.from(t).filter(function(e){return e.selected}).map(function(e){return e.value})}function x9(t,e,n){if(typeof t=="boolean")return!!e;var r=[],i=!1,s=-1;if(Array.isArray(t))r=t,s=t.indexOf(n),i=s>=0;else if(!n||n=="true"||n=="false")return!!e;return e&&n&&!i?r.concat(n):i?r.slice(0,s).concat(r.slice(s+1)):r}var T9=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?E.useLayoutEffect:E.useEffect;function Lt(t){var e=E.useRef(t);return T9(function(){e.current=t}),E.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e.current.apply(void 0,r)},[])}function $T(t){var e=t.validate,n=t.name,r=t.render,i=t.children,s=t.as,o=t.component,a=t.className,l=yr(t,["validate","name","render","children","as","component","className"]),u=LT(),d=yr(u,["validate","validationSchema"]),c=d.registerField,f=d.unregisterField;E.useEffect(function(){return c(n,{validate:e}),function(){f(n)}},[c,f,n,e]);var p=d.getFieldProps(ne({name:n},l)),v=d.getFieldMeta(n),_={field:p,form:d};if(r)return r(ne({},_,{meta:v}));if(ze(i))return i(ne({},_,{meta:v}));if(o){if(typeof o=="string"){var S=l.innerRef,g=yr(l,["innerRef"]);return E.createElement(o,ne({ref:S},p,g,{className:a}),i)}return E.createElement(o,ne({field:p,form:d},l,{className:a}),i)}var h=s||"input";if(typeof h=="string"){var y=l.innerRef,w=yr(l,["innerRef"]);return E.createElement(h,ne({ref:y},p,w,{className:a}),i)}return E.createElement(h,ne({},p,l,{className:a}),i)}var t0=E.forwardRef(function(t,e){var n=t.action,r=yr(t,["action"]),i=n??"#",s=LT(),o=s.handleReset,a=s.handleSubmit;return E.createElement("form",ne({onSubmit:a,ref:e,onReset:o,action:i},r))});t0.displayName="Form";function I9(t){var e=function(i){return E.createElement(g9,null,function(s){return E.createElement(t,ne({},i,{formik:s}))})},n=t.displayName||t.name||t.constructor&&t.constructor.name||"Component";return e.WrappedComponent=t,e.displayName="FormikConnect("+n+")",d9(e,t)}var b9=function(e,n,r){var i=Ri(e),s=i[n];return i.splice(n,1),i.splice(r,0,s),i},k9=function(e,n,r){var i=Ri(e),s=i[n];return i[n]=i[r],i[r]=s,i},Lf=function(e,n,r){var i=Ri(e);return i.splice(n,0,r),i},P9=function(e,n,r){var i=Ri(e);return i[n]=r,i},Ri=function(e){if(e){if(Array.isArray(e))return[].concat(e);var n=Object.keys(e).map(function(r){return parseInt(r)}).reduce(function(r,i){return i>r?i:r},0);return Array.from(ne({},e,{length:n+1}))}else return[]},e1=function(e,n){var r=typeof e=="function"?e:n;return function(i){if(Array.isArray(i)||il(i)){var s=Ri(i);return r(s)}return i}},R9=function(t){AT(e,t);function e(r){var i;return i=t.call(this,r)||this,i.updateArrayField=function(s,o,a){var l=i.props,u=l.name,d=l.formik.setFormikState;d(function(c){var f=e1(a,s),p=e1(o,s),v=yn(c.values,u,s(ye(c.values,u))),_=a?f(ye(c.errors,u)):void 0,S=o?p(ye(c.touched,u)):void 0;return Z_(_)&&(_=void 0),Z_(S)&&(S=void 0),ne({},c,{values:v,errors:a?yn(c.errors,u,_):c.errors,touched:o?yn(c.touched,u,S):c.touched})})},i.push=function(s){return i.updateArrayField(function(o){return[].concat(Ri(o),[p9(s)])},!1,!1)},i.handlePush=function(s){return function(){return i.push(s)}},i.swap=function(s,o){return i.updateArrayField(function(a){return k9(a,s,o)},!0,!0)},i.handleSwap=function(s,o){return function(){return i.swap(s,o)}},i.move=function(s,o){return i.updateArrayField(function(a){return b9(a,s,o)},!0,!0)},i.handleMove=function(s,o){return function(){return i.move(s,o)}},i.insert=function(s,o){return i.updateArrayField(function(a){return Lf(a,s,o)},function(a){return Lf(a,s,null)},function(a){return Lf(a,s,null)})},i.handleInsert=function(s,o){return function(){return i.insert(s,o)}},i.replace=function(s,o){return i.updateArrayField(function(a){return P9(a,s,o)},!1,!1)},i.handleReplace=function(s,o){return function(){return i.replace(s,o)}},i.unshift=function(s){var o=-1;return i.updateArrayField(function(a){var l=a?[s].concat(a):[s];return o=l.length,l},function(a){return a?[null].concat(a):[null]},function(a){return a?[null].concat(a):[null]}),o},i.handleUnshift=function(s){return function(){return i.unshift(s)}},i.handleRemove=function(s){return function(){return i.remove(s)}},i.handlePop=function(){return function(){return i.pop()}},i.remove=i.remove.bind(J_(i)),i.pop=i.pop.bind(J_(i)),i}var n=e.prototype;return n.componentDidUpdate=function(i){this.props.validateOnChange&&this.props.formik.validateOnChange&&!or(ye(i.formik.values,i.name),ye(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},n.remove=function(i){var s;return this.updateArrayField(function(o){var a=o?Ri(o):[];return s||(s=a[i]),ze(a.splice)&&a.splice(i,1),ze(a.every)&&a.every(function(l){return l===void 0})?[]:a},!0,!0),s},n.pop=function(){var i;return this.updateArrayField(function(s){var o=s.slice();return i||(i=o&&o.pop&&o.pop()),o},!0,!0),i},n.render=function(){var i={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},s=this.props,o=s.component,a=s.render,l=s.children,u=s.name,d=s.formik,c=yr(d,["validate","validationSchema"]),f=ne({},i,{form:c,name:u});return o?E.createElement(o,f):a?a(f):l?typeof l=="function"?l(f):DT(l)?null:E.Children.only(l):null},e}(E.Component);R9.defaultProps={validateOnChange:!0};var O9=function(t){AT(e,t);function e(){return t.apply(this,arguments)||this}var n=e.prototype;return n.shouldComponentUpdate=function(i){return ye(this.props.formik.errors,this.props.name)!==ye(i.formik.errors,this.props.name)||ye(this.props.formik.touched,this.props.name)!==ye(i.formik.touched,this.props.name)||Object.keys(this.props).length!==Object.keys(i).length},n.render=function(){var i=this.props,s=i.component,o=i.formik,a=i.render,l=i.children,u=i.name,d=yr(i,["component","formik","render","children","name"]),c=ye(o.touched,u),f=ye(o.errors,u);return c&&f?a?ze(a)?a(f):null:l?ze(l)?l(f):null:s?E.createElement(s,d,f):f:null},e}(E.Component),qo=I9(O9);const N9=Ai`
        0% {
      background-color: rgb(0, 0, 0, 0.4);
      opacity: 0.3;
    }
    100% {
      background-color: rgb(0, 0, 0, 0.8);
      opacity: 1;
    }
`,A9=Ai`
        0% {
      background-color: rgb(0, 0, 0, 0.8);
      opacity: 1;
    }
    100% {
      background-color: rgb(0, 0, 0, 0.4);
      opacity: 0;
    }
`,L9=t=>{switch(t.$closing){case!1:return Fs`
        animation: ${N9} 350ms ease 1 normal forwards;
      `;case!0:return Fs`
        animation: ${A9} 350ms 350ms ease 1 normal forwards;
      `;default:return null}},D9=Ai`
  0% {
      opacity: 0.3;
      transform: scale(0.2);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  `,M9=Ai`
  0% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0);
    }
  `,F9=t=>{switch(t.$closing){case!1:return Fs`
        animation: ${D9} 350ms 350ms ease 1 normal forwards;
      `;case!0:return Fs`
        animation: ${M9} 350ms ease 1 normal forwards;
      `;default:return null}},$9=k.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  overflow-y: scroll;
  z-index: 100;
  ${L9}
`,j9=k.div`
  opacity: 0;
  ${F9}
`,U9=k.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,n0=({children:t,onClose:e})=>{const[n,r]=E.useState(!1);document.body.style.overflow="hidden";const i=E.useCallback(s=>{(s.code==="Escape"||s.target===s.currentTarget)&&(r(!0),setTimeout(()=>{r(!1),document.body.style.overflow="auto",e()},750))},[e]);return E.useEffect(()=>(document.body.style.overflow="hidden",window.addEventListener("keydown",i),()=>{document.body.style.overflow="auto",window.removeEventListener("keydown",i)}),[i]),bE.createPortal(m.jsx($9,{id:"modalWrap",$closing:n,onClick:i,children:m.jsx(U9,{children:m.jsx(j9,{$closing:n,children:t})})}),document.querySelector("#root"))};n0.propTypes={onClose:G.func.isRequired,children:G.node.isRequired};const z9=k.div`
  position: relative;
  width: 566px;
  height: 506px;
  background-color: #fff;
  padding: 64px;
  border-radius: 30px;
  background: rgb(255, 255, 255);
`,B9=k.h3`
  color: ${ie.BLACK_TEXT};
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: -0.8px;
  text-align: start;
  margin-bottom: 20px;
`,W9=k.p`
  color: ${ie.BLACK_TEXT};
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: start;
  margin-bottom: 40px;
`,t1=k($T)`
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 12px;
  width: 438px;
  height: 54px;
  color: rgb(18, 20, 23);
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: start;
  padding: 16px 18px 16px 18px;
  &::placeholder {
    color: ${ie.BLACK_TEXT};
  }
  margin-bottom: ${t=>t.marginbottom||"18px"};
`,V9=k.button`
  width: 438px;
  height: 60px;
  border-radius: 12px;
  background-color: ${ie.YELLOW_BUTTON};
  &:hover {
    background-color: ${ie.YELLOW_HOVER_BUTTON};
  }
  border: none;
  color: ${ie.BLACK_TEXT};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
`,H9=k.div`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  &:hover svg path {
    stroke-width: 3.5;
  }
`,G9=k.div`
  position: relative;
`,K9=k.button`
  position: absolute;
  background: none;
  border: none;
  right: 17px;
  bottom: 117px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`,q9=k.div`
  position: absolute;
  color: red;
  font-size: 14px;
  line-height: 1.28;
  top: 55px;
`,Y9=k.div`
  position: absolute;
  color: red;
  font-size: 14px;
  line-height: 1.28;
  top: 128px;
`;function Bi(t){this._maxSize=t,this.clear()}Bi.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Bi.prototype.get=function(t){return this._values[t]};Bi.prototype.set=function(t,e){return this._size>=this._maxSize&&this.clear(),t in this._values||this._size++,this._values[t]=e};var Q9=/[^.^\]^[]+|(?=\[\]|\.\.)/g,jT=/^\d+$/,X9=/^\d/,J9=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,Z9=/^\s*(['"]?)(.*?)(\1)\s*$/,r0=512,n1=new Bi(r0),r1=new Bi(r0),i1=new Bi(r0),mi={Cache:Bi,split:Rp,normalizePath:Df,setter:function(t){var e=Df(t);return r1.get(t)||r1.set(t,function(r,i){for(var s=0,o=e.length,a=r;s<o-1;){var l=e[s];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;a=a[e[s++]]}a[e[s]]=i})},getter:function(t,e){var n=Df(t);return i1.get(t)||i1.set(t,function(i){for(var s=0,o=n.length;s<o;)if(i!=null||!e)i=i[n[s++]];else return;return i})},join:function(t){return t.reduce(function(e,n){return e+(i0(n)||jT.test(n)?"["+n+"]":(e?".":"")+n)},"")},forEach:function(t,e,n){e7(Array.isArray(t)?t:Rp(t),e,n)}};function Df(t){return n1.get(t)||n1.set(t,Rp(t).map(function(e){return e.replace(Z9,"$2")}))}function Rp(t){return t.match(Q9)||[""]}function e7(t,e,n){var r=t.length,i,s,o,a;for(s=0;s<r;s++)i=t[s],i&&(r7(i)&&(i='"'+i+'"'),a=i0(i),o=!a&&/^\d+$/.test(i),e.call(n,i,a,o,s,t))}function i0(t){return typeof t=="string"&&t&&["'",'"'].indexOf(t.charAt(0))!==-1}function t7(t){return t.match(X9)&&!t.match(jT)}function n7(t){return J9.test(t)}function r7(t){return!i0(t)&&(t7(t)||n7(t))}const i7=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Cd=t=>t.match(i7)||[],xd=t=>t[0].toUpperCase()+t.slice(1),s0=(t,e)=>Cd(t).join(e).toLowerCase(),UT=t=>Cd(t).reduce((e,n)=>`${e}${e?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),s7=t=>xd(UT(t)),o7=t=>s0(t,"_"),a7=t=>s0(t,"-"),l7=t=>xd(s0(t," ")),u7=t=>Cd(t).map(xd).join(" ");var Mf={words:Cd,upperFirst:xd,camelCase:UT,pascalCase:s7,snakeCase:o7,kebabCase:a7,sentenceCase:l7,titleCase:u7},o0={exports:{}};o0.exports=function(t){return zT(c7(t),t)};o0.exports.array=zT;function zT(t,e){var n=t.length,r=new Array(n),i={},s=n,o=d7(e),a=f7(t);for(e.forEach(function(u){if(!a.has(u[0])||!a.has(u[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});s--;)i[s]||l(t[s],s,new Set);return r;function l(u,d,c){if(c.has(u)){var f;try{f=", node was:"+JSON.stringify(u)}catch{f=""}throw new Error("Cyclic dependency"+f)}if(!a.has(u))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(u));if(!i[d]){i[d]=!0;var p=o.get(u)||new Set;if(p=Array.from(p),d=p.length){c.add(u);do{var v=p[--d];l(v,a.get(v),c)}while(d);c.delete(u)}r[--n]=u}}}function c7(t){for(var e=new Set,n=0,r=t.length;n<r;n++){var i=t[n];e.add(i[0]),e.add(i[1])}return Array.from(e)}function d7(t){for(var e=new Map,n=0,r=t.length;n<r;n++){var i=t[n];e.has(i[0])||e.set(i[0],new Set),e.has(i[1])||e.set(i[1],new Set),e.get(i[0]).add(i[1])}return e}function f7(t){for(var e=new Map,n=0,r=t.length;n<r;n++)e.set(t[n],n);return e}var h7=o0.exports;const p7=Gs(h7),m7=Object.prototype.toString,g7=Error.prototype.toString,y7=RegExp.prototype.toString,v7=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",_7=/^Symbol\((.*)\)(.*)$/;function w7(t){return t!=+t?"NaN":t===0&&1/t<0?"-0":""+t}function s1(t,e=!1){if(t==null||t===!0||t===!1)return""+t;const n=typeof t;if(n==="number")return w7(t);if(n==="string")return e?`"${t}"`:t;if(n==="function")return"[Function "+(t.name||"anonymous")+"]";if(n==="symbol")return v7.call(t).replace(_7,"Symbol($1)");const r=m7.call(t).slice(8,-1);return r==="Date"?isNaN(t.getTime())?""+t:t.toISOString(t):r==="Error"||t instanceof Error?"["+g7.call(t)+"]":r==="RegExp"?y7.call(t):null}function Nr(t,e){let n=s1(t,e);return n!==null?n:JSON.stringify(t,function(r,i){let s=s1(this[r],e);return s!==null?s:i},2)}function BT(t){return t==null?[]:[].concat(t)}let WT,E7=/\$\{\s*(\w+)\s*\}/g;WT=Symbol.toStringTag;class ot extends Error{static formatError(e,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof e=="string"?e.replace(E7,(i,s)=>Nr(n[s])):typeof e=="function"?e(n):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,n,r,i,s){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this[WT]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],BT(e).forEach(o=>{if(ot.isError(o)){this.errors.push(...o.errors);const a=o.inner.length?o.inner:[o];this.inner.push(...a)}else this.errors.push(o)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],!s&&Error.captureStackTrace&&Error.captureStackTrace(this,ot)}}let cn={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:t,type:e,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${Nr(r,!0)}\`).`:".";return e!=="mixed"?`${t} must be a \`${e}\` type, but the final value was: \`${Nr(n,!0)}\``+i:`${t} must match the configured type. The validated value was: \`${Nr(n,!0)}\``+i}},Wt={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},S7={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},Op={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},C7={isValue:"${path} field must be ${value}"},Np={noUnknown:"${path} field has unspecified keys: ${unknown}"},x7={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},T7={notType:t=>{const{path:e,value:n,spec:r}=t,i=r.types.length;if(Array.isArray(n)){if(n.length<i)return`${e} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${Nr(n,!0)}\``;if(n.length>i)return`${e} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${Nr(n,!0)}\``}return ot.formatError(cn.notType,t)}};Object.assign(Object.create(null),{mixed:cn,string:Wt,number:S7,date:Op,object:Np,array:x7,boolean:C7,tuple:T7});const a0=t=>t&&t.__isYupSchema__;class gc{static fromOptions(e,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:s}=n,o=typeof r=="function"?r:(...a)=>a.every(l=>l===r);return new gc(e,(a,l)=>{var u;let d=o(...a)?i:s;return(u=d==null?void 0:d(l))!=null?u:l})}constructor(e,n){this.fn=void 0,this.refs=e,this.refs=e,this.fn=n}resolve(e,n){let r=this.refs.map(s=>s.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,e,n);if(i===void 0||i===e)return e;if(!a0(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const Ll={context:"$",value:"."};class Wi{constructor(e,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Ll.context,this.isValue=this.key[0]===Ll.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?Ll.context:this.isValue?Ll.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&mi.getter(this.path,!0),this.map=n.map}getValue(e,n,r){let i=this.isContext?r:this.isValue?e:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(e,n){return this.getValue(e,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}Wi.prototype.__isYupRef=!0;const li=t=>t==null;function qi(t){function e({value:n,path:r="",options:i,originalValue:s,schema:o},a,l){const{name:u,test:d,params:c,message:f,skipAbsent:p}=t;let{parent:v,context:_,abortEarly:S=o.spec.abortEarly,disableStackTrace:g=o.spec.disableStackTrace}=i;function h(B){return Wi.isRef(B)?B.getValue(n,v,_):B}function y(B={}){var At;const le=Object.assign({value:n,originalValue:s,label:o.spec.label,path:B.path||r,spec:o.spec},c,B.params);for(const En of Object.keys(le))le[En]=h(le[En]);const gt=new ot(ot.formatError(B.message||f,le),n,le.path,B.type||u,(At=B.disableStackTrace)!=null?At:g);return gt.params=le,gt}const w=S?a:l;let T={path:r,parent:v,type:u,from:i.from,createError:y,resolve:h,options:i,originalValue:s,schema:o};const C=B=>{ot.isError(B)?w(B):B?l(null):w(y())},x=B=>{ot.isError(B)?w(B):a(B)};if(p&&li(n))return C(!0);let L;try{var F;if(L=d.call(T,n,T),typeof((F=L)==null?void 0:F.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${T.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(L).then(C,x)}}catch(B){x(B);return}C(L)}return e.OPTIONS=t,e}function I7(t,e,n,r=n){let i,s,o;return e?(mi.forEach(e,(a,l,u)=>{let d=l?a.slice(1,a.length-1):a;t=t.resolve({context:r,parent:i,value:n});let c=t.type==="tuple",f=u?parseInt(d,10):0;if(t.innerType||c){if(c&&!u)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);if(n&&f>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${e}. because there is no value at that index. `);i=n,n=n&&n[f],t=c?t.spec.types[f]:t.innerType}if(!u){if(!t.fields||!t.fields[d])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${t.type}")`);i=n,n=n&&n[d],t=t.fields[d]}s=d,o=l?"["+a+"]":"."+a}),{schema:t,parent:i,parentPath:s}):{parent:i,parentPath:e,schema:t}}class yc extends Set{describe(){const e=[];for(const n of this.values())e.push(Wi.isRef(n)?n.describe():n);return e}resolveAll(e){let n=[];for(const r of this.values())n.push(e(r));return n}clone(){return new yc(this.values())}merge(e,n){const r=this.clone();return e.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function ds(t,e=new Map){if(a0(t)||!t||typeof t!="object")return t;if(e.has(t))return e.get(t);let n;if(t instanceof Date)n=new Date(t.getTime()),e.set(t,n);else if(t instanceof RegExp)n=new RegExp(t),e.set(t,n);else if(Array.isArray(t)){n=new Array(t.length),e.set(t,n);for(let r=0;r<t.length;r++)n[r]=ds(t[r],e)}else if(t instanceof Map){n=new Map,e.set(t,n);for(const[r,i]of t.entries())n.set(r,ds(i,e))}else if(t instanceof Set){n=new Set,e.set(t,n);for(const r of t)n.add(ds(r,e))}else if(t instanceof Object){n={},e.set(t,n);for(const[r,i]of Object.entries(t))n[r]=ds(i,e)}else throw Error(`Unable to clone ${t}`);return n}class _n{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new yc,this._blacklist=new yc,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(cn.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},e==null?void 0:e.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=ds(Object.assign({},this.spec,e)),n}label(e){let n=this.clone();return n.spec.label=e,n}meta(...e){if(e.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},e[0]),n}withMutation(e){let n=this._mutate;this._mutate=!0;let r=e(this);return this._mutate=n,r}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let n=this,r=e.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(e._whitelist,e._blacklist),r._blacklist=n._blacklist.merge(e._blacklist,e._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(s=>{e.tests.forEach(o=>{s.test(o.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(e){return e==null?!!(this.spec.nullable&&e===null||this.spec.optional&&e===void 0):this._typeCheck(e)}resolve(e){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,s)=>s.resolve(i,e),n),n=n.resolve(e)}return n}resolveOptions(e){var n,r,i,s;return Object.assign({},e,{from:e.from||[],strict:(n=e.strict)!=null?n:this.spec.strict,abortEarly:(r=e.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=e.recursive)!=null?i:this.spec.recursive,disableStackTrace:(s=e.disableStackTrace)!=null?s:this.spec.disableStackTrace})}cast(e,n={}){let r=this.resolve(Object.assign({value:e},n)),i=n.assert==="ignore-optionality",s=r._cast(e,n);if(n.assert!==!1&&!r.isType(s)){if(i&&li(s))return s;let o=Nr(e),a=Nr(s);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${o} 
`+(a!==o?`result of cast: ${a}`:""))}return s}_cast(e,n){let r=e===void 0?e:this.transforms.reduce((i,s)=>s.call(this,i,e,this),e);return r===void 0&&(r=this.getDefault(n)),r}_validate(e,n={},r,i){let{path:s,originalValue:o=e,strict:a=this.spec.strict}=n,l=e;a||(l=this._cast(l,Object.assign({assert:!1},n)));let u=[];for(let d of Object.values(this.internalTests))d&&u.push(d);this.runTests({path:s,value:l,originalValue:o,options:n,tests:u},r,d=>{if(d.length)return i(d,l);this.runTests({path:s,value:l,originalValue:o,options:n,tests:this.tests},r,i)})}runTests(e,n,r){let i=!1,{tests:s,value:o,originalValue:a,path:l,options:u}=e,d=_=>{i||(i=!0,n(_,o))},c=_=>{i||(i=!0,r(_,o))},f=s.length,p=[];if(!f)return c([]);let v={value:o,originalValue:a,path:l,options:u,schema:this};for(let _=0;_<s.length;_++){const S=s[_];S(v,d,function(h){h&&(Array.isArray(h)?p.push(...h):p.push(h)),--f<=0&&c(p)})}}asNestedTest({key:e,index:n,parent:r,parentPath:i,originalParent:s,options:o}){const a=e??n;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof a=="number";let u=r[a];const d=Object.assign({},o,{strict:!0,parent:r,value:u,originalValue:s[a],key:void 0,[l?"index":"key"]:a,path:l||a.includes(".")?`${i||""}[${u?a:`"${a}"`}]`:(i?`${i}.`:"")+e});return(c,f,p)=>this.resolve(d)._validate(u,d,f,p)}validate(e,n){var r;let i=this.resolve(Object.assign({},n,{value:e})),s=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return new Promise((o,a)=>i._validate(e,n,(l,u)=>{ot.isError(l)&&(l.value=u),a(l)},(l,u)=>{l.length?a(new ot(l,u,void 0,void 0,s)):o(u)}))}validateSync(e,n){var r;let i=this.resolve(Object.assign({},n,{value:e})),s,o=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return i._validate(e,Object.assign({},n,{sync:!0}),(a,l)=>{throw ot.isError(a)&&(a.value=l),a},(a,l)=>{if(a.length)throw new ot(a,e,void 0,void 0,o);s=l}),s}isValid(e,n){return this.validate(e,n).then(()=>!0,r=>{if(ot.isError(r))return!1;throw r})}isValidSync(e,n){try{return this.validateSync(e,n),!0}catch(r){if(ot.isError(r))return!1;throw r}}_getDefault(e){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,e):ds(n)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,n){const r=this.clone({nullable:e});return r.internalTests.nullable=qi({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(e,n){const r=this.clone({optional:e});return r.internalTests.optionality=qi({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(e=cn.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=cn.notNull){return this.nullability(!1,e)}required(e=cn.required){return this.clone().withMutation(n=>n.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let n=this.clone();return n.transforms.push(e),n}test(...e){let n;if(e.length===1?typeof e[0]=="function"?n={test:e[0]}:n=e[0]:e.length===2?n={name:e[0],test:e[1]}:n={name:e[0],message:e[1],test:e[2]},n.message===void 0&&(n.message=cn.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=qi(n),s=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(o=>!(o.OPTIONS.name===n.name&&(s||o.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(e,n){!Array.isArray(e)&&typeof e!="string"&&(n=e,e=".");let r=this.clone(),i=BT(e).map(s=>new Wi(s));return i.forEach(s=>{s.isSibling&&r.deps.push(s.key)}),r.conditions.push(typeof n=="function"?new gc(i,n):gc.fromOptions(i,n)),r}typeError(e){let n=this.clone();return n.internalTests.typeError=qi({message:e,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(e,n=cn.oneOf){let r=this.clone();return e.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=qi({message:n,name:"oneOf",skipAbsent:!0,test(i){let s=this.schema._whitelist,o=s.resolveAll(this.resolve);return o.includes(i)?!0:this.createError({params:{values:Array.from(s).join(", "),resolved:o}})}}),r}notOneOf(e,n=cn.notOneOf){let r=this.clone();return e.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=qi({message:n,name:"notOneOf",test(i){let s=this.schema._blacklist,o=s.resolveAll(this.resolve);return o.includes(i)?this.createError({params:{values:Array.from(s).join(", "),resolved:o}}):!0}}),r}strip(e=!0){let n=this.clone();return n.spec.strip=e,n}describe(e){const n=(e?this.resolve(e):this).clone(),{label:r,meta:i,optional:s,nullable:o}=n.spec;return{meta:i,label:r,optional:s,nullable:o,default:n.getDefault(e),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,u,d)=>d.findIndex(c=>c.name===l.name)===u)}}}_n.prototype.__isYupSchema__=!0;for(const t of["validate","validateSync"])_n.prototype[`${t}At`]=function(e,n,r={}){const{parent:i,parentPath:s,schema:o}=I7(this,e,n,r.context);return o[t](i&&i[s],Object.assign({},r,{parent:i,path:e}))};for(const t of["equals","is"])_n.prototype[t]=_n.prototype.oneOf;for(const t of["not","nope"])_n.prototype[t]=_n.prototype.notOneOf;let b7=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,k7=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,P7=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,R7=t=>li(t)||t===t.trim(),O7={}.toString();function Cs(){return new VT}class VT extends _n{constructor(){super({type:"string",check(e){return e instanceof String&&(e=e.valueOf()),typeof e=="string"}}),this.withMutation(()=>{this.transform((e,n,r)=>{if(!r.spec.coerce||r.isType(e)||Array.isArray(e))return e;const i=e!=null&&e.toString?e.toString():e;return i===O7?e:i})})}required(e){return super.required(e).withMutation(n=>n.test({message:e||cn.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(n=>n.OPTIONS.name!=="required"),e))}length(e,n=Wt.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(r){return r.length===this.resolve(e)}})}min(e,n=Wt.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(r){return r.length>=this.resolve(e)}})}max(e,n=Wt.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:e},skipAbsent:!0,test(r){return r.length<=this.resolve(e)}})}matches(e,n){let r=!1,i,s;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:s}=n:i=n),this.test({name:s||"matches",message:i||Wt.matches,params:{regex:e},skipAbsent:!0,test:o=>o===""&&r||o.search(e)!==-1})}email(e=Wt.email){return this.matches(b7,{name:"email",message:e,excludeEmptyString:!0})}url(e=Wt.url){return this.matches(k7,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=Wt.uuid){return this.matches(P7,{name:"uuid",message:e,excludeEmptyString:!1})}ensure(){return this.default("").transform(e=>e===null?"":e)}trim(e=Wt.trim){return this.transform(n=>n!=null?n.trim():n).test({message:e,name:"trim",test:R7})}lowercase(e=Wt.lowercase){return this.transform(n=>li(n)?n:n.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>li(n)||n===n.toLowerCase()})}uppercase(e=Wt.uppercase){return this.transform(n=>li(n)?n:n.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>li(n)||n===n.toUpperCase()})}}Cs.prototype=VT.prototype;const N7=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function Tn(t,e=0){return Number(t)||e}function A7(t){const e=N7.exec(t);if(!e)return Date.parse?Date.parse(t):Number.NaN;const n={year:Tn(e[1]),month:Tn(e[2],1)-1,day:Tn(e[3],1),hour:Tn(e[4]),minute:Tn(e[5]),second:Tn(e[6]),millisecond:e[7]?Tn(e[7].substring(0,3)):0,z:e[8]||void 0,plusMinus:e[9]||void 0,hourOffset:Tn(e[10]),minuteOffset:Tn(e[11])};if(n.z===void 0&&n.plusMinus===void 0)return new Date(n.year,n.month,n.day,n.hour,n.minute,n.second,n.millisecond).valueOf();let r=0;return n.z!=="Z"&&n.plusMinus!==void 0&&(r=n.hourOffset*60+n.minuteOffset,n.plusMinus==="+"&&(r=0-r)),Date.UTC(n.year,n.month,n.day,n.hour,n.minute+r,n.second,n.millisecond)}let L7=new Date(""),D7=t=>Object.prototype.toString.call(t)==="[object Date]";class Td extends _n{constructor(){super({type:"date",check(e){return D7(e)&&!isNaN(e.getTime())}}),this.withMutation(()=>{this.transform((e,n,r)=>!r.spec.coerce||r.isType(e)||e===null?e:(e=A7(e),isNaN(e)?Td.INVALID_DATE:new Date(e)))})}prepareParam(e,n){let r;if(Wi.isRef(e))r=e;else{let i=this.cast(e);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(e,n=Op.min){let r=this.prepareParam(e,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(e,n=Op.max){let r=this.prepareParam(e,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}Td.INVALID_DATE=L7;Td.prototype;function M7(t,e=[]){let n=[],r=new Set,i=new Set(e.map(([o,a])=>`${o}-${a}`));function s(o,a){let l=mi.split(o)[0];r.add(l),i.has(`${a}-${l}`)||n.push([a,l])}for(const o of Object.keys(t)){let a=t[o];r.add(o),Wi.isRef(a)&&a.isSibling?s(a.path,o):a0(a)&&"deps"in a&&a.deps.forEach(l=>s(l,o))}return p7.array(Array.from(r),n).reverse()}function o1(t,e){let n=1/0;return t.some((r,i)=>{var s;if((s=e.path)!=null&&s.includes(r))return n=i,!0}),n}function HT(t){return(e,n)=>o1(t,e)-o1(t,n)}const F7=(t,e,n)=>{if(typeof t!="string")return t;let r=t;try{r=JSON.parse(t)}catch{}return n.isType(r)?r:t};function au(t){if("fields"in t){const e={};for(const[n,r]of Object.entries(t.fields))e[n]=au(r);return t.setFields(e)}if(t.type==="array"){const e=t.optional();return e.innerType&&(e.innerType=au(e.innerType)),e}return t.type==="tuple"?t.optional().clone({types:t.spec.types.map(au)}):"optional"in t?t.optional():t}const $7=(t,e)=>{const n=[...mi.normalizePath(e)];if(n.length===1)return n[0]in t;let r=n.pop(),i=mi.getter(mi.join(n),!0)(t);return!!(i&&r in i)};let a1=t=>Object.prototype.toString.call(t)==="[object Object]";function j7(t,e){let n=Object.keys(t.fields);return Object.keys(e).filter(r=>n.indexOf(r)===-1)}const U7=HT([]);function l0(t){return new GT(t)}class GT extends _n{constructor(e){super({type:"object",check(n){return a1(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=U7,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,n={}){var r;let i=super._cast(e,n);if(i===void 0)return this.getDefault(n);if(!this._typeCheck(i))return i;let s=this.fields,o=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(i).filter(c=>!this._nodes.includes(c))),l={},u=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),d=!1;for(const c of a){let f=s[c],p=c in i;if(f){let v,_=i[c];u.path=(n.path?`${n.path}.`:"")+c,f=f.resolve({value:_,context:n.context,parent:l});let S=f instanceof _n?f.spec:void 0,g=S==null?void 0:S.strict;if(S!=null&&S.strip){d=d||c in i;continue}v=!n.__validating||!g?f.cast(i[c],u):i[c],v!==void 0&&(l[c]=v)}else p&&!o&&(l[c]=i[c]);(p!==c in l||l[c]!==i[c])&&(d=!0)}return d?l:i}_validate(e,n={},r,i){let{from:s=[],originalValue:o=e,recursive:a=this.spec.recursive}=n;n.from=[{schema:this,value:o},...s],n.__validating=!0,n.originalValue=o,super._validate(e,n,r,(l,u)=>{if(!a||!a1(u)){i(l,u);return}o=o||u;let d=[];for(let c of this._nodes){let f=this.fields[c];!f||Wi.isRef(f)||d.push(f.asNestedTest({options:n,key:c,parent:u,parentPath:n.path,originalParent:o}))}this.runTests({tests:d,value:u,originalValue:o,options:n},r,c=>{i(c.sort(this._sortErrors).concat(l),u)})})}clone(e){const n=super.clone(e);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(e){let n=super.concat(e),r=n.fields;for(let[i,s]of Object.entries(this.fields)){const o=r[i];r[i]=o===void 0?s:o}return n.withMutation(i=>i.setFields(r,[...this._excludedEdges,...e._excludedEdges]))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var i;const s=this.fields[r];let o=e;(i=o)!=null&&i.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[r]})),n[r]=s&&"getDefault"in s?s.getDefault(o):void 0}),n}setFields(e,n){let r=this.clone();return r.fields=e,r._nodes=M7(e,n),r._sortErrors=HT(Object.keys(e)),n&&(r._excludedEdges=n),r}shape(e,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,e),i)})}partial(){const e={};for(const[n,r]of Object.entries(this.fields))e[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(e)}deepPartial(){return au(this)}pick(e){const n={};for(const r of e)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,i])=>e.includes(r)&&e.includes(i)))}omit(e){const n=[];for(const r of Object.keys(this.fields))e.includes(r)||n.push(r);return this.pick(n)}from(e,n,r){let i=mi.getter(e,!0);return this.transform(s=>{if(!s)return s;let o=s;return $7(s,e)&&(o=Object.assign({},s),r||delete o[e],o[n]=i(s)),o})}json(){return this.transform(F7)}noUnknown(e=!0,n=Np.noUnknown){typeof e!="boolean"&&(n=e,e=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const s=j7(this.schema,i);return!e||s.length===0||this.createError({params:{unknown:s.join(", ")}})}});return r.spec.noUnknown=e,r}unknown(e=!0,n=Np.noUnknown){return this.noUnknown(!e,n)}transformKeys(e){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[e(i)]=n[i];return r})}camelCase(){return this.transformKeys(Mf.camelCase)}snakeCase(){return this.transformKeys(Mf.snakeCase)}constantCase(){return this.transformKeys(e=>Mf.snakeCase(e).toUpperCase())}describe(e){const n=(e?this.resolve(e):this).clone(),r=super.describe(e);r.fields={};for(const[s,o]of Object.entries(n.fields)){var i;let a=e;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[s]})),r.fields[s]=o.describe(a)}return r}}l0.prototype=GT.prototype;const u0=({strokeWidth:t})=>m.jsxs("svg",{width:"32.000000",height:"32.000000",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[m.jsx("desc",{children:"Created with Pixso."}),m.jsx("defs",{children:m.jsx("clipPath",{id:"clip4_589",children:m.jsx("rect",{id:"x",width:"32.000000",height:"32.000000",fill:"white",fillOpacity:"0"})})}),m.jsx("rect",{id:"x",width:"32.000000",height:"32.000000",fill:"#FFFFFF",fillOpacity:"0"}),m.jsxs("g",{clipPath:"url(#clip4_589)",children:[m.jsx("path",{id:"Vector",d:"M24 8L8 24",stroke:"#121417",strokeOpacity:"1.000000",strokeWidth:t,strokeLinejoin:"round",strokeLinecap:"round"}),m.jsx("path",{id:"Vector",d:"M8 8L24 24",stroke:"#121417",strokeOpacity:"1.000000",strokeWidth:t,strokeLinejoin:"round",strokeLinecap:"round"})]})]});u0.propTypes={strokeWidth:G.string.isRequired};const KT=()=>m.jsxs("svg",{width:"20.000000",height:"20.000000",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[m.jsx("desc",{children:"Created with Pixso."}),m.jsx("defs",{children:m.jsx("clipPath",{id:"clip4_621",children:m.jsx("rect",{id:"eye-off",width:"20.000000",height:"20.000000",fill:"white",fillOpacity:"0"})})}),m.jsx("rect",{id:"eye-off",width:"20.000000",height:"20.000000",fill:"#FFFFFF",fillOpacity:"0"}),m.jsx("g",{clipPath:"url(#clip4_621)",children:m.jsx("path",{id:"Vector",d:"M14.95 14.95C13.5254 16.0358 11.7908 16.6373 10 16.6666C4.1665 16.6666 0.833252 10 0.833252 10C1.86987 8.06824 3.30762 6.38049 5.0498 5.04993M8.25 3.53333C8.82349 3.39905 9.41089 3.33191 10 3.33325C15.8333 3.33325 19.1665 10 19.1665 10C18.6606 10.9463 18.0574 11.8372 17.3667 12.6583M11.7666 11.7666C11.5376 12.0122 11.2617 12.2092 10.9551 12.3458C10.6484 12.4825 10.3174 12.556 9.98169 12.5619C9.646 12.5679 9.3125 12.5061 9.00122 12.3804C8.68994 12.2546 8.40723 12.0675 8.16968 11.8301C7.93237 11.5927 7.74536 11.3099 7.61963 10.9987C7.49365 10.6873 7.43213 10.3539 7.43799 10.0182C7.44385 9.6825 7.51733 9.35144 7.65405 9.0448C7.79053 8.73816 7.98755 8.46216 8.23315 8.23328",stroke:"#121417",strokeOpacity:"1.000000",strokeWidth:"2.000000",strokeLinejoin:"round"})})]}),qT=()=>m.jsxs("svg",{width:"20.000000",height:"20.000000",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[m.jsx("desc",{children:"Created with Pixso."}),m.jsx("defs",{children:m.jsx("clipPath",{id:"clip4_621",children:m.jsx("rect",{id:"eye-off",width:"20.000000",height:"20.000000",fill:"white",fillOpacity:"0"})})}),m.jsx("rect",{id:"eye-off",width:"20.000000",height:"20.000000",fill:"#FFFFFF",fillOpacity:"0"}),m.jsxs("g",{clipPath:"url(#clip4_621)",children:[m.jsx("path",{id:"Vector",d:"M14.95 14.95C13.5254 16.0358 11.7908 16.6373 10 16.6666C4.1665 16.6666 0.833252 10 0.833252 10C1.86987 8.06824 3.30762 6.38049 5.0498 5.04993M8.25 3.53333C8.82349 3.39905 9.41089 3.33191 10 3.33325C15.8333 3.33325 19.1665 10 19.1665 10C18.6606 10.9463 18.0574 11.8372 17.3667 12.6583M11.7666 11.7666C11.5376 12.0122 11.2617 12.2092 10.9551 12.3458C10.6484 12.4825 10.3174 12.556 9.98169 12.5619C9.646 12.5679 9.3125 12.5061 9.00122 12.3804C8.68994 12.2546 8.40723 12.0675 8.16968 11.8301C7.93237 11.5927 7.74536 11.3099 7.61963 10.9987C7.49365 10.6873 7.43213 10.3539 7.43799 10.0182C7.44385 9.6825 7.51733 9.35144 7.65405 9.0448C7.79053 8.73816 7.98755 8.46216 8.23315 8.23328",stroke:"#121417",strokeOpacity:"1.000000",strokeWidth:"2.000000",strokeLinejoin:"round"}),m.jsx("path",{id:"Vector",d:"M0.833252 0.833374L19.1665 19.1667",stroke:"#121417",strokeOpacity:"1.000000",strokeWidth:"2.000000",strokeLinejoin:"round",strokeLinecap:"round"})]})]}),z7={email:"",password:""},B7=l0().shape({email:Cs().matches(/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,"Incorret email").required("Be sure to enter your email"),password:Cs().min(8,"Password must contain minimum 8 symbols").max(64,"Password must contain maximum 64 symbols").required("Be sure to enter your password")}),YT=({onClose:t})=>{const[e,n]=E.useState(!1),r=Li(),i=(o,{resetForm:a})=>{r(AC({value:o})),t(),a()},s=({name:o})=>{switch(o){case"email":return m.jsx(qo,{name:o,component:q9});case"password":return m.jsx(qo,{name:o,component:Y9})}};return m.jsx(n0,{onClose:t,children:m.jsx(z9,{children:m.jsx(FT,{initialValues:z7,validationSchema:B7,onSubmit:i,children:m.jsxs(t0,{children:[m.jsx(H9,{onClick:t,children:m.jsx(u0,{strokeWidth:"2.5"})}),m.jsx(B9,{children:"Log In"}),m.jsx(W9,{children:"Welcome back! Please enter your credentials to access your account and continue your search for an teacher."}),m.jsxs(G9,{children:[m.jsx(t1,{type:"text",name:"email",placeholder:"Email"}),m.jsx(s,{name:"email"}),m.jsx(t1,{type:e?"text":"password",name:"password",placeholder:"Password",marginbottom:"40px"}),m.jsx(s,{name:"password"}),m.jsx(V9,{type:"submit",children:"Log In"}),m.jsx(K9,{type:"button",onClick:()=>{n(!e)},children:e?m.jsx(KT,{}):m.jsx(qT,{})})]})]})})})})};YT.propTypes={onClose:G.func.isRequired,name:G.string};const W7=k.div`
  position: relative;
  width: 566px;
  background-color: #fff;
  padding: 64px;
  border-radius: 30px;
  background: rgb(255, 255, 255);
`,V7=k.h3`
  color: ${ie.BLACK_TEXT};
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: -0.8px;
  text-align: start;
  margin-bottom: 20px;
`,H7=k.p`
  color: ${ie.BLACK_TEXT};
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: start;
  margin-bottom: 40px;
`,Ff=k($T)`
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 12px;
  width: 438px;
  height: 54px;
  color: rgb(18, 20, 23);
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: start;
  padding: 16px 18px 16px 18px;
  &::placeholder {
    color: ${ie.BLACK_TEXT};
  }
`,G7=k.button`
  width: 438px;
  height: 60px;
  border-radius: 12px;
  background-color: ${ie.YELLOW_BUTTON};
  &:hover {
    background-color: ${ie.YELLOW_HOVER_BUTTON};
  }
  border: none;
  color: ${ie.BLACK_TEXT};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
`,K7=k.div`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  &:hover svg path {
    stroke-width: 3.5;
  }
`,q7=k.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 18px;
  margin-bottom: 40px;
`,Y7=k.button`
  position: absolute;
  background: none;
  border: none;
  right: 17px;
  bottom: 17px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`,Q7=k.div`
  position: absolute;
  color: red;
  font-size: 14px;
  line-height: 1.28;
  top: -16px;
`,X7=k.div`
  position: absolute;
  color: red;
  font-size: 14px;
  line-height: 1.28;
  top: 55px;
`,J7=k.div`
  position: absolute;
  color: red;
  font-size: 14px;
  line-height: 1.28;
  top: 128px;
`,Z7={name:"",email:"",password:""},eU=l0().shape({name:Cs().required("Be sure to enter your name"),email:Cs().matches(/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,"Incorret email").required("Be sure to enter your email"),password:Cs().min(8,"Password must contain minimum 8 symbols").max(64,"Password must contain maximum 64 symbols").required("Be sure to enter your password")}),QT=({onClose:t})=>{const[e,n]=E.useState(!1),r=Li(),i=o=>{r(NC({value:o})),t()},s=({name:o})=>{switch(o){case"name":return m.jsx(qo,{name:o,component:Q7});case"email":return m.jsx(qo,{name:o,component:X7});case"password":return m.jsx(qo,{name:o,component:J7})}};return m.jsx(n0,{onClose:t,children:m.jsx(W7,{children:m.jsx(FT,{initialValues:Z7,validationSchema:eU,onSubmit:i,children:m.jsxs(t0,{children:[m.jsx(K7,{onClick:t,children:m.jsx(u0,{strokeWidth:"2.5"})}),m.jsx(V7,{children:"Registration"}),m.jsxs(H7,{children:["Thank you for your interest in our platform! In order to register",m.jsx("wbr",{}),", we need some information. Please provide us with the following information"]}),m.jsxs(q7,{children:[m.jsx(Ff,{type:"text",name:"name",placeholder:"Name"}),m.jsx(s,{name:"name"}),m.jsx(Ff,{type:"text",name:"email",placeholder:"Email"}),m.jsx(s,{name:"email"}),m.jsx(Ff,{type:e?"text":"password",name:"password",placeholder:"Password"}),m.jsx(s,{name:"password"}),m.jsx(Y7,{type:"button",onClick:()=>{n(!e)},children:e?m.jsx(KT,{}):m.jsx(qT,{})})]}),m.jsx(G7,{type:"submit",children:"Log In"})]})})})})};QT.propTypes={onClose:G.func.isRequired,name:G.string};const XT=({namePopUp:t,onClose:e})=>{switch(t){case"login":return m.jsx(YT,{onClose:e});case"signin":return m.jsx(QT,{onClose:e})}return m.jsx(m.Fragment,{})};XT.propTypes={namePopUp:G.string.isRequired,onClose:G.func.isRequired};const tU=({children:t})=>{const e=Wc(),n=e.isLoggedIn,r=e.isLoggedIn;return!n&&!r?m.jsx(Dh,{to:"/"}):t},nU=()=>{const t=za(Jx);return m.jsx(tT,{children:t.map(e=>m.jsx(jg,{...e},e.id))})},rU=k.div`
  position: relative;
  width: 1440px;
  background: rgb(248, 248, 248);
  padding: 96px 128px 96px 128px;
`,iU=()=>m.jsx(rU,{children:m.jsx(nU,{})}),sU="#4fa94d",oU={"aria-busy":!0,role:"progressbar"},aU=k.div`
  display: ${t=>t.$visible?"flex":"none"};
`,lU="http://www.w3.org/2000/svg",uU=({height:t="100",width:e="100",color:n=sU,ariaLabel:r="audio-loading",wrapperStyle:i={},wrapperClass:s,visible:o=!0})=>m.jsx(aU,{$visible:o,style:{...i},className:s,"data-testid":"audio-loading","aria-label":r,...oU,children:m.jsxs("svg",{height:`${t}`,width:`${e}`,fill:n,viewBox:"0 0 55 80",xmlns:lU,"data-testid":"audio-svg",children:[m.jsx("title",{children:"Audio Visualization"}),m.jsx("desc",{children:"Animated representation of audio data"}),m.jsxs("g",{transform:"matrix(1 0 0 -1 0 80)",children:[m.jsx("rect",{width:"10",height:"20",rx:"3",children:m.jsx("animate",{attributeName:"height",begin:"0s",dur:"4.3s",values:"20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20",calcMode:"linear",repeatCount:"indefinite"})}),m.jsx("rect",{x:"15",width:"10",height:"80",rx:"3",children:m.jsx("animate",{attributeName:"height",begin:"0s",dur:"2s",values:"80;55;33;5;75;23;73;33;12;14;60;80",calcMode:"linear",repeatCount:"indefinite"})}),m.jsx("rect",{x:"30",width:"10",height:"50",rx:"3",children:m.jsx("animate",{attributeName:"height",begin:"0s",dur:"1.4s",values:"50;34;78;23;56;23;34;76;80;54;21;50",calcMode:"linear",repeatCount:"indefinite"})}),m.jsx("rect",{x:"45",width:"10",height:"30",rx:"3",children:m.jsx("animate",{attributeName:"height",begin:"0s",dur:"2s",values:"30;45;13;80;56;72;45;76;34;23;67;30",calcMode:"linear",repeatCount:"indefinite"})})]})]})}),Vt=242.776657104492,cU=1.6,dU=Ai`
12.5% {
  stroke-dasharray: ${Vt*.14}px, ${Vt}px;
  stroke-dashoffset: -${Vt*.11}px;
}
43.75% {
  stroke-dasharray: ${Vt*.35}px, ${Vt}px;
  stroke-dashoffset: -${Vt*.35}px;
}
100% {
  stroke-dasharray: ${Vt*.01}px, ${Vt}px;
  stroke-dashoffset: -${Vt*.99}px;
}
`;k.path`
  stroke-dasharray: ${Vt*.01}px, ${Vt};
  stroke-dashoffset: 0;
  animation: ${dU} ${cU}s linear infinite;
`;const fU=Ai`
to {
   transform: rotate(360deg);
 }
`;k.svg`
  animation: ${fU} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;k.polyline`
  stroke-width: ${t=>t.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;const hU=Ai`
to {
   stroke-dashoffset: 136;
 }
`;k.polygon`
  stroke-dasharray: 17;
  animation: ${hU} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;k.svg`
  transform-origin: 50% 65%;
`;const pU=k.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`,mU=()=>m.jsx(pU,{children:m.jsx(uU,{height:"80",width:"80",radius:"9",color:ie.YELLOW,ariaLabel:"loading",wrapperStyle:!0,wrapperClass:!0})});function gU(){const[t,e]=E.useState(""),n=Li(),r=za(dM);return E.useEffect(()=>{n(su())},[n]),m.jsxs(m.Fragment,{children:[r?m.jsx(mU,{}):null,m.jsx(k2,{children:m.jsxs(Io,{path:"/",element:m.jsx(MC,{setNamePopUp:e}),children:[m.jsx(Io,{index:!0,element:m.jsx(UL,{})}),m.jsx(Io,{path:"teachers",element:m.jsx(qM,{})}),m.jsx(Io,{path:"favorites",element:m.jsx(tU,{children:m.jsx(iU,{})})})]})}),m.jsx(XT,{namePopUp:t,onClose:()=>e("")}),m.jsx(vL,{})]})}const yU={name:null,email:null,token:null,id:null,isLoggedIn:!1,isRefreshing:!1},vU=LS({name:"auth",initialState:yU,extraReducers:t=>{t.addCase(NC.fulfilled,(e,n)=>{console.log(n.payload),e.email=n.payload.email,e.token=n.payload.accessToken,e.id=n.payload.id,e.name=n.payload.name,e.isLoggedIn=!0}).addCase(AC.fulfilled,(e,n)=>{e.email=n.payload.email,e.token=n.payload.accessToken,e.id=n.payload.id,e.name=n.payload.name,e.isLoggedIn=!0}).addCase(LC.fulfilled,e=>{e.email=null,e.token=null,e.id=null,e.name=null,e.isLoggedIn=!1}).addCase(su.pending,e=>{e.isRefreshing=!0}).addCase(su.fulfilled,(e,n)=>{e.name=n.payload.name,e.email=n.payload.email,e.token=n.payload.token,e.id=n.payload.id,e.isLoggedIn=!0,e.isRefreshing=!1}).addCase(su.rejected,e=>{e.isRefreshing=!1})}}),_U=vU.reducer;var c0="persist:",d0="persist/FLUSH",Id="persist/REHYDRATE",f0="persist/PAUSE",h0="persist/PERSIST",p0="persist/PURGE",m0="persist/REGISTER",wU=-1;function lu(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?lu=function(n){return typeof n}:lu=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},lu(t)}function l1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function EU(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?l1(n,!0).forEach(function(r){SU(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l1(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function SU(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function CU(t,e,n,r){r.debug;var i=EU({},n);return t&&lu(t)==="object"&&Object.keys(t).forEach(function(s){s!=="_persist"&&e[s]===n[s]&&(i[s]=t[s])}),i}function xU(t){var e=t.blacklist||null,n=t.whitelist||null,r=t.transforms||[],i=t.throttle||0,s="".concat(t.keyPrefix!==void 0?t.keyPrefix:c0).concat(t.key),o=t.storage,a;t.serialize===!1?a=function(T){return T}:typeof t.serialize=="function"?a=t.serialize:a=TU;var l=t.writeFailHandler||null,u={},d={},c=[],f=null,p=null,v=function(T){Object.keys(T).forEach(function(C){g(C)&&u[C]!==T[C]&&c.indexOf(C)===-1&&c.push(C)}),Object.keys(u).forEach(function(C){T[C]===void 0&&g(C)&&c.indexOf(C)===-1&&u[C]!==void 0&&c.push(C)}),f===null&&(f=setInterval(_,i)),u=T};function _(){if(c.length===0){f&&clearInterval(f),f=null;return}var w=c.shift(),T=r.reduce(function(C,x){return x.in(C,w,u)},u[w]);if(T!==void 0)try{d[w]=a(T)}catch(C){console.error("redux-persist/createPersistoid: error serializing state",C)}else delete d[w];c.length===0&&S()}function S(){Object.keys(d).forEach(function(w){u[w]===void 0&&delete d[w]}),p=o.setItem(s,a(d)).catch(h)}function g(w){return!(n&&n.indexOf(w)===-1&&w!=="_persist"||e&&e.indexOf(w)!==-1)}function h(w){l&&l(w)}var y=function(){for(;c.length!==0;)_();return p||Promise.resolve()};return{update:v,flush:y}}function TU(t){return JSON.stringify(t)}function IU(t){var e=t.transforms||[],n="".concat(t.keyPrefix!==void 0?t.keyPrefix:c0).concat(t.key),r=t.storage;t.debug;var i;return t.deserialize===!1?i=function(o){return o}:typeof t.deserialize=="function"?i=t.deserialize:i=bU,r.getItem(n).then(function(s){if(s)try{var o={},a=i(s);return Object.keys(a).forEach(function(l){o[l]=e.reduceRight(function(u,d){return d.out(u,l,a)},i(a[l]))}),o}catch(l){throw l}else return})}function bU(t){return JSON.parse(t)}function kU(t){var e=t.storage,n="".concat(t.keyPrefix!==void 0?t.keyPrefix:c0).concat(t.key);return e.removeItem(n,PU)}function PU(t){}function u1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function In(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?u1(n,!0).forEach(function(r){RU(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u1(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function RU(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function OU(t,e){if(t==null)return{};var n=NU(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function NU(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var AU=5e3;function c1(t,e){var n=t.version!==void 0?t.version:wU;t.debug;var r=t.stateReconciler===void 0?CU:t.stateReconciler,i=t.getStoredState||IU,s=t.timeout!==void 0?t.timeout:AU,o=null,a=!1,l=!0,u=function(c){return c._persist.rehydrated&&o&&!l&&o.update(c),c};return function(d,c){var f=d||{},p=f._persist,v=OU(f,["_persist"]),_=v;if(c.type===h0){var S=!1,g=function(b,L){S||(c.rehydrate(t.key,b,L),S=!0)};if(s&&setTimeout(function(){!S&&g(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(t.key,'"')))},s),l=!1,o||(o=xU(t)),p)return In({},e(_,c),{_persist:p});if(typeof c.rehydrate!="function"||typeof c.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return c.register(t.key),i(t).then(function(x){var b=t.migrate||function(L,F){return Promise.resolve(L)};b(x,n).then(function(L){g(L)},function(L){g(void 0,L)})},function(x){g(void 0,x)}),In({},e(_,c),{_persist:{version:n,rehydrated:!1}})}else{if(c.type===p0)return a=!0,c.result(kU(t)),In({},e(_,c),{_persist:p});if(c.type===d0)return c.result(o&&o.flush()),In({},e(_,c),{_persist:p});if(c.type===f0)l=!0;else if(c.type===Id){if(a)return In({},_,{_persist:In({},p,{rehydrated:!0})});if(c.key===t.key){var h=e(_,c),y=c.payload,w=r!==!1&&y!==void 0?r(y,d,h,t):h,T=In({},w,{_persist:In({},p,{rehydrated:!0})});return u(T)}}}if(!p)return e(d,c);var C=e(_,c);return C===_?d:u(In({},C,{_persist:p}))}}function d1(t){return MU(t)||DU(t)||LU()}function LU(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function DU(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function MU(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function f1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Ap(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?f1(n,!0).forEach(function(r){FU(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f1(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function FU(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var JT={registry:[],bootstrapped:!1},$U=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:JT,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case m0:return Ap({},e,{registry:[].concat(d1(e.registry),[n.key])});case Id:var r=e.registry.indexOf(n.key),i=d1(e.registry);return i.splice(r,1),Ap({},e,{registry:i,bootstrapped:i.length===0});default:return e}};function jU(t,e,n){var r=n||!1,i=Vm($U,JT,e&&e.enhancer?e.enhancer:void 0),s=function(u){i.dispatch({type:m0,key:u})},o=function(u,d,c){var f={type:Id,payload:d,err:c,key:u};t.dispatch(f),i.dispatch(f),r&&a.getState().bootstrapped&&(r(),r=!1)},a=Ap({},i,{purge:function(){var u=[];return t.dispatch({type:p0,result:function(c){u.push(c)}}),Promise.all(u)},flush:function(){var u=[];return t.dispatch({type:d0,result:function(c){u.push(c)}}),Promise.all(u)},pause:function(){t.dispatch({type:f0})},persist:function(){t.dispatch({type:h0,register:s,rehydrate:o})}});return e&&e.manualPersist||a.persist(),a}var g0={},y0={};y0.__esModule=!0;y0.default=BU;function uu(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?uu=function(n){return typeof n}:uu=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},uu(t)}function $f(){}var UU={getItem:$f,setItem:$f,removeItem:$f};function zU(t){if((typeof self>"u"?"undefined":uu(self))!=="object"||!(t in self))return!1;try{var e=self[t],n="redux-persist ".concat(t," test");e.setItem(n,"test"),e.getItem(n),e.removeItem(n)}catch{return!1}return!0}function BU(t){var e="".concat(t,"Storage");return zU(e)?self[e]:UU}g0.__esModule=!0;g0.default=HU;var WU=VU(y0);function VU(t){return t&&t.__esModule?t:{default:t}}function HU(t){var e=(0,WU.default)(t);return{getItem:function(r){return new Promise(function(i,s){i(e.getItem(r))})},setItem:function(r,i){return new Promise(function(s,o){s(e.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,s){i(e.removeItem(r))})}}}var v0=void 0,GU=KU(g0);function KU(t){return t&&t.__esModule?t:{default:t}}var qU=(0,GU.default)("local");v0=qU;const YU={key:"auth",storage:v0,whitelist:["token"]},QU={key:"teachers",storage:v0,blacklist:["teachersCard"]},XU=_S({auth:c1(YU,_U),teachers:c1(QU,VM)}),ZT=dO({reducer:XU,middleware:t=>t({serializableCheck:{ignoredActions:[d0,Id,f0,h0,p0,m0]}})}),JU=jU(ZT);function cu(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?cu=function(n){return typeof n}:cu=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},cu(t)}function ZU(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h1(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ez(t,e,n){return e&&h1(t.prototype,e),n&&h1(t,n),t}function tz(t,e){return e&&(cu(e)==="object"||typeof e=="function")?e:du(t)}function Lp(t){return Lp=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Lp(t)}function du(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function nz(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Dp(t,e)}function Dp(t,e){return Dp=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Dp(t,e)}function fu(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var eI=function(t){nz(e,t);function e(){var n,r;ZU(this,e);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=tz(this,(n=Lp(e)).call.apply(n,[this].concat(s))),fu(du(r),"state",{bootstrapped:!1}),fu(du(r),"_unsubscribe",void 0),fu(du(r),"handlePersistorState",function(){var a=r.props.persistor,l=a.getState(),u=l.bootstrapped;u&&(r.props.onBeforeLift?Promise.resolve(r.props.onBeforeLift()).finally(function(){return r.setState({bootstrapped:!0})}):r.setState({bootstrapped:!0}),r._unsubscribe&&r._unsubscribe())}),r}return ez(e,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),e}(E.PureComponent);fu(eI,"defaultProps",{children:null,loading:null});Uf.createRoot(document.getElementById("root")).render(m.jsx(vn.StrictMode,{children:m.jsx(eI,{loading:null,persistor:JU,children:m.jsx(M2,{basename:"/Learn-Lingo/",children:m.jsx(IR,{store:ZT,children:m.jsx($M,{children:m.jsx(gU,{})})})})})}))});export default rz();
