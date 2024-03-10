var lI=Object.defineProperty;var uI=(t,e,n)=>e in t?lI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var cI=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var kd=(t,e,n)=>(uI(t,typeof e!="symbol"?e+"":e,n),n);var VU=cI((Ct,xt)=>{function dI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Ws(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var f1={exports:{}},mc={},h1={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Na=Symbol.for("react.element"),fI=Symbol.for("react.portal"),hI=Symbol.for("react.fragment"),pI=Symbol.for("react.strict_mode"),mI=Symbol.for("react.profiler"),gI=Symbol.for("react.provider"),yI=Symbol.for("react.context"),vI=Symbol.for("react.forward_ref"),_I=Symbol.for("react.suspense"),wI=Symbol.for("react.memo"),EI=Symbol.for("react.lazy"),_0=Symbol.iterator;function SI(t){return t===null||typeof t!="object"?null:(t=_0&&t[_0]||t["@@iterator"],typeof t=="function"?t:null)}var p1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m1=Object.assign,g1={};function Vs(t,e,n){this.props=t,this.context=e,this.refs=g1,this.updater=n||p1}Vs.prototype.isReactComponent={};Vs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Vs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function y1(){}y1.prototype=Vs.prototype;function Lp(t,e,n){this.props=t,this.context=e,this.refs=g1,this.updater=n||p1}var Dp=Lp.prototype=new y1;Dp.constructor=Lp;m1(Dp,Vs.prototype);Dp.isPureReactComponent=!0;var w0=Array.isArray,v1=Object.prototype.hasOwnProperty,Mp={current:null},_1={key:!0,ref:!0,__self:!0,__source:!0};function w1(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)v1.call(e,r)&&!_1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Na,type:t,key:s,ref:o,props:i,_owner:Mp.current}}function CI(t,e){return{$$typeof:Na,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Fp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Na}function xI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var E0=/\/+/g;function Pd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?xI(""+t.key):e.toString(36)}function Nl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Na:case fI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Pd(o,0):r,w0(i)?(n="",t!=null&&(n=t.replace(E0,"$&/")+"/"),Nl(i,e,n,"",function(u){return u})):i!=null&&(Fp(i)&&(i=CI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(E0,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",w0(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Pd(s,a);o+=Nl(s,e,n,l,i)}else if(l=SI(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Pd(s,a++),o+=Nl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function nl(t,e,n){if(t==null)return t;var r=[],i=0;return Nl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function TI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rt={current:null},Al={transition:null},II={ReactCurrentDispatcher:rt,ReactCurrentBatchConfig:Al,ReactCurrentOwner:Mp};q.Children={map:nl,forEach:function(t,e,n){nl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return nl(t,function(){e++}),e},toArray:function(t){return nl(t,function(e){return e})||[]},only:function(t){if(!Fp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};q.Component=Vs;q.Fragment=hI;q.Profiler=mI;q.PureComponent=Lp;q.StrictMode=pI;q.Suspense=_I;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=II;q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=m1({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Mp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)v1.call(e,l)&&!_1.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Na,type:t.type,key:i,ref:s,props:r,_owner:o}};q.createContext=function(t){return t={$$typeof:yI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:gI,_context:t},t.Consumer=t};q.createElement=w1;q.createFactory=function(t){var e=w1.bind(null,t);return e.type=t,e};q.createRef=function(){return{current:null}};q.forwardRef=function(t){return{$$typeof:vI,render:t}};q.isValidElement=Fp;q.lazy=function(t){return{$$typeof:EI,_payload:{_status:-1,_result:t},_init:TI}};q.memo=function(t,e){return{$$typeof:wI,type:t,compare:e===void 0?null:e}};q.startTransition=function(t){var e=Al.transition;Al.transition={};try{t()}finally{Al.transition=e}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(t,e){return rt.current.useCallback(t,e)};q.useContext=function(t){return rt.current.useContext(t)};q.useDebugValue=function(){};q.useDeferredValue=function(t){return rt.current.useDeferredValue(t)};q.useEffect=function(t,e){return rt.current.useEffect(t,e)};q.useId=function(){return rt.current.useId()};q.useImperativeHandle=function(t,e,n){return rt.current.useImperativeHandle(t,e,n)};q.useInsertionEffect=function(t,e){return rt.current.useInsertionEffect(t,e)};q.useLayoutEffect=function(t,e){return rt.current.useLayoutEffect(t,e)};q.useMemo=function(t,e){return rt.current.useMemo(t,e)};q.useReducer=function(t,e,n){return rt.current.useReducer(t,e,n)};q.useRef=function(t){return rt.current.useRef(t)};q.useState=function(t){return rt.current.useState(t)};q.useSyncExternalStore=function(t,e,n){return rt.current.useSyncExternalStore(t,e,n)};q.useTransition=function(){return rt.current.useTransition()};q.version="18.2.0";h1.exports=q;var E=h1.exports;const yn=Ws(E),Ff=dI({__proto__:null,default:yn},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bI=E,kI=Symbol.for("react.element"),PI=Symbol.for("react.fragment"),RI=Object.prototype.hasOwnProperty,OI=bI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,NI={key:!0,ref:!0,__self:!0,__source:!0};function E1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)RI.call(e,r)&&!NI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:kI,type:t,key:s,ref:o,props:i,_owner:OI.current}}mc.Fragment=PI;mc.jsx=E1;mc.jsxs=E1;f1.exports=mc;var g=f1.exports,$f={},S1={exports:{}},Rt={},C1={exports:{}},x1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,M){var U=O.length;O.push(M);e:for(;0<U;){var J=U-1>>>1,Q=O[J];if(0<i(Q,M))O[J]=M,O[U]=Q,U=J;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var M=O[0],U=O.pop();if(U!==M){O[0]=U;e:for(var J=0,Q=O.length,rn=Q>>>1;J<rn;){var Je=2*(J+1)-1,Ze=O[Je],He=Je+1,yt=O[He];if(0>i(Ze,U))He<Q&&0>i(yt,Ze)?(O[J]=yt,O[He]=U,J=He):(O[J]=Ze,O[Je]=U,J=Je);else if(He<Q&&0>i(yt,U))O[J]=yt,O[He]=U,J=He;else break e}}return M}function i(O,M){var U=O.sortIndex-M.sortIndex;return U!==0?U:O.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,c=null,f=3,p=!1,v=!1,_=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(O){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=O)r(u),M.sortIndex=M.expirationTime,e(l,M);else break;M=n(u)}}function w(O){if(_=!1,y(O),!v)if(n(l)!==null)v=!0,qr(T);else{var M=n(u);M!==null&&En(w,M.startTime-O)}}function T(O,M){v=!1,_&&(_=!1,m(b),b=-1),p=!0;var U=f;try{for(y(M),c=n(l);c!==null&&(!(c.expirationTime>M)||O&&!B());){var J=c.callback;if(typeof J=="function"){c.callback=null,f=c.priorityLevel;var Q=J(c.expirationTime<=M);M=t.unstable_now(),typeof Q=="function"?c.callback=Q:c===n(l)&&r(l),y(M)}else r(l);c=n(l)}if(c!==null)var rn=!0;else{var Je=n(u);Je!==null&&En(w,Je.startTime-M),rn=!1}return rn}finally{c=null,f=U,p=!1}}var C=!1,x=null,b=-1,L=5,F=-1;function B(){return!(t.unstable_now()-F<L)}function At(){if(x!==null){var O=t.unstable_now();F=O;var M=!0;try{M=x(!0,O)}finally{M?le():(C=!1,x=null)}}else C=!1}var le;if(typeof h=="function")le=function(){h(At)};else if(typeof MessageChannel<"u"){var gt=new MessageChannel,wn=gt.port2;gt.port1.onmessage=At,le=function(){wn.postMessage(null)}}else le=function(){S(At,0)};function qr(O){x=O,C||(C=!0,le())}function En(O,M){b=S(function(){O(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,qr(T))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(f){case 1:case 2:case 3:var M=3;break;default:M=f}var U=f;f=M;try{return O()}finally{f=U}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,M){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var U=f;f=O;try{return M()}finally{f=U}},t.unstable_scheduleCallback=function(O,M,U){var J=t.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?J+U:J):U=J,O){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=U+Q,O={id:d++,callback:M,priorityLevel:O,startTime:U,expirationTime:Q,sortIndex:-1},U>J?(O.sortIndex=U,e(u,O),n(l)===null&&O===n(u)&&(_?(m(b),b=-1):_=!0,En(w,U-J))):(O.sortIndex=Q,e(l,O),v||p||(v=!0,qr(T))),O},t.unstable_shouldYield=B,t.unstable_wrapCallback=function(O){var M=f;return function(){var U=f;f=M;try{return O.apply(this,arguments)}finally{f=U}}}})(x1);C1.exports=x1;var AI=C1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T1=E,bt=AI;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var I1=new Set,Ko={};function Ri(t,e){Es(t,e),Es(t+"Capture",e)}function Es(t,e){for(Ko[t]=e,t=0;t<e.length;t++)I1.add(e[t])}var Fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jf=Object.prototype.hasOwnProperty,LI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,S0={},C0={};function DI(t){return jf.call(C0,t)?!0:jf.call(S0,t)?!1:LI.test(t)?C0[t]=!0:(S0[t]=!0,!1)}function MI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function FI(t,e,n,r){if(e===null||typeof e>"u"||MI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function it(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ve[t]=new it(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ve[e]=new it(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ve[t]=new it(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ve[t]=new it(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ve[t]=new it(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ve[t]=new it(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ve[t]=new it(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ve[t]=new it(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ve[t]=new it(t,5,!1,t.toLowerCase(),null,!1,!1)});var $p=/[\-:]([a-z])/g;function jp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($p,jp);Ve[e]=new it(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($p,jp);Ve[e]=new it(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($p,jp);Ve[e]=new it(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ve[t]=new it(t,1,!1,t.toLowerCase(),null,!1,!1)});Ve.xlinkHref=new it("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ve[t]=new it(t,1,!1,t.toLowerCase(),null,!0,!0)});function Up(t,e,n,r){var i=Ve.hasOwnProperty(e)?Ve[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(FI(e,n,i,r)&&(n=null),r||i===null?DI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Hn=T1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rl=Symbol.for("react.element"),Gi=Symbol.for("react.portal"),Ki=Symbol.for("react.fragment"),zp=Symbol.for("react.strict_mode"),Uf=Symbol.for("react.profiler"),b1=Symbol.for("react.provider"),k1=Symbol.for("react.context"),Bp=Symbol.for("react.forward_ref"),zf=Symbol.for("react.suspense"),Bf=Symbol.for("react.suspense_list"),Wp=Symbol.for("react.memo"),rr=Symbol.for("react.lazy"),P1=Symbol.for("react.offscreen"),x0=Symbol.iterator;function so(t){return t===null||typeof t!="object"?null:(t=x0&&t[x0]||t["@@iterator"],typeof t=="function"?t:null)}var Se=Object.assign,Rd;function wo(t){if(Rd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Rd=e&&e[1]||""}return`
`+Rd+t}var Od=!1;function Nd(t,e){if(!t||Od)return"";Od=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Od=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?wo(t):""}function $I(t){switch(t.tag){case 5:return wo(t.type);case 16:return wo("Lazy");case 13:return wo("Suspense");case 19:return wo("SuspenseList");case 0:case 2:case 15:return t=Nd(t.type,!1),t;case 11:return t=Nd(t.type.render,!1),t;case 1:return t=Nd(t.type,!0),t;default:return""}}function Wf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ki:return"Fragment";case Gi:return"Portal";case Uf:return"Profiler";case zp:return"StrictMode";case zf:return"Suspense";case Bf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case k1:return(t.displayName||"Context")+".Consumer";case b1:return(t._context.displayName||"Context")+".Provider";case Bp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Wp:return e=t.displayName||null,e!==null?e:Wf(t.type)||"Memo";case rr:e=t._payload,t=t._init;try{return Wf(t(e))}catch{}}return null}function jI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wf(e);case 8:return e===zp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function R1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function UI(t){var e=R1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function il(t){t._valueTracker||(t._valueTracker=UI(t))}function O1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=R1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function cu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Vf(t,e){var n=e.checked;return Se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function T0(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function N1(t,e){e=e.checked,e!=null&&Up(t,"checked",e,!1)}function Hf(t,e){N1(t,e);var n=Nr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Gf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Gf(t,e.type,Nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function I0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Gf(t,e,n){(e!=="number"||cu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Eo=Array.isArray;function us(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Nr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Kf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return Se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function b0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(Eo(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Nr(n)}}function A1(t,e){var n=Nr(e.value),r=Nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function k0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function L1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?L1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var sl,D1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(sl=sl||document.createElement("div"),sl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=sl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Po={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zI=["Webkit","ms","Moz","O"];Object.keys(Po).forEach(function(t){zI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Po[e]=Po[t]})});function M1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Po.hasOwnProperty(t)&&Po[t]?(""+e).trim():e+"px"}function F1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=M1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var BI=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yf(t,e){if(e){if(BI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function Qf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xf=null;function Vp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jf=null,cs=null,ds=null;function P0(t){if(t=Da(t)){if(typeof Jf!="function")throw Error(k(280));var e=t.stateNode;e&&(e=wc(e),Jf(t.stateNode,t.type,e))}}function $1(t){cs?ds?ds.push(t):ds=[t]:cs=t}function j1(){if(cs){var t=cs,e=ds;if(ds=cs=null,P0(t),e)for(t=0;t<e.length;t++)P0(e[t])}}function U1(t,e){return t(e)}function z1(){}var Ad=!1;function B1(t,e,n){if(Ad)return t(e,n);Ad=!0;try{return U1(t,e,n)}finally{Ad=!1,(cs!==null||ds!==null)&&(z1(),j1())}}function Yo(t,e){var n=t.stateNode;if(n===null)return null;var r=wc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var Zf=!1;if(Fn)try{var oo={};Object.defineProperty(oo,"passive",{get:function(){Zf=!0}}),window.addEventListener("test",oo,oo),window.removeEventListener("test",oo,oo)}catch{Zf=!1}function WI(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Ro=!1,du=null,fu=!1,eh=null,VI={onError:function(t){Ro=!0,du=t}};function HI(t,e,n,r,i,s,o,a,l){Ro=!1,du=null,WI.apply(VI,arguments)}function GI(t,e,n,r,i,s,o,a,l){if(HI.apply(this,arguments),Ro){if(Ro){var u=du;Ro=!1,du=null}else throw Error(k(198));fu||(fu=!0,eh=u)}}function Oi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function W1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function R0(t){if(Oi(t)!==t)throw Error(k(188))}function KI(t){var e=t.alternate;if(!e){if(e=Oi(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return R0(i),t;if(s===r)return R0(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function V1(t){return t=KI(t),t!==null?H1(t):null}function H1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=H1(t);if(e!==null)return e;t=t.sibling}return null}var G1=bt.unstable_scheduleCallback,O0=bt.unstable_cancelCallback,qI=bt.unstable_shouldYield,YI=bt.unstable_requestPaint,Te=bt.unstable_now,QI=bt.unstable_getCurrentPriorityLevel,Hp=bt.unstable_ImmediatePriority,K1=bt.unstable_UserBlockingPriority,hu=bt.unstable_NormalPriority,XI=bt.unstable_LowPriority,q1=bt.unstable_IdlePriority,gc=null,fn=null;function JI(t){if(fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot(gc,t,void 0,(t.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:tb,ZI=Math.log,eb=Math.LN2;function tb(t){return t>>>=0,t===0?32:31-(ZI(t)/eb|0)|0}var ol=64,al=4194304;function So(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=So(a):(s&=o,s!==0&&(r=So(s)))}else o=n&~i,o!==0?r=So(o):s!==0&&(r=So(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Xt(e),i=1<<n,r|=t[n],e&=~i;return r}function nb(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rb(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Xt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=nb(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function th(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Y1(){var t=ol;return ol<<=1,!(ol&4194240)&&(ol=64),t}function Ld(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Aa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xt(e),t[e]=n}function ib(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Xt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Gp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Xt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var re=0;function Q1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var X1,Kp,J1,Z1,ew,nh=!1,ll=[],yr=null,vr=null,_r=null,Qo=new Map,Xo=new Map,or=[],sb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function N0(t,e){switch(t){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":Qo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xo.delete(e.pointerId)}}function ao(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Da(e),e!==null&&Kp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ob(t,e,n,r,i){switch(e){case"focusin":return yr=ao(yr,t,e,n,r,i),!0;case"dragenter":return vr=ao(vr,t,e,n,r,i),!0;case"mouseover":return _r=ao(_r,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Qo.set(s,ao(Qo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Xo.set(s,ao(Xo.get(s)||null,t,e,n,r,i)),!0}return!1}function tw(t){var e=ni(t.target);if(e!==null){var n=Oi(e);if(n!==null){if(e=n.tag,e===13){if(e=W1(n),e!==null){t.blockedOn=e,ew(t.priority,function(){J1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ll(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=rh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Xf=r,n.target.dispatchEvent(r),Xf=null}else return e=Da(n),e!==null&&Kp(e),t.blockedOn=n,!1;e.shift()}return!0}function A0(t,e,n){Ll(t)&&n.delete(e)}function ab(){nh=!1,yr!==null&&Ll(yr)&&(yr=null),vr!==null&&Ll(vr)&&(vr=null),_r!==null&&Ll(_r)&&(_r=null),Qo.forEach(A0),Xo.forEach(A0)}function lo(t,e){t.blockedOn===e&&(t.blockedOn=null,nh||(nh=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,ab)))}function Jo(t){function e(i){return lo(i,t)}if(0<ll.length){lo(ll[0],t);for(var n=1;n<ll.length;n++){var r=ll[n];r.blockedOn===t&&(r.blockedOn=null)}}for(yr!==null&&lo(yr,t),vr!==null&&lo(vr,t),_r!==null&&lo(_r,t),Qo.forEach(e),Xo.forEach(e),n=0;n<or.length;n++)r=or[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<or.length&&(n=or[0],n.blockedOn===null);)tw(n),n.blockedOn===null&&or.shift()}var fs=Hn.ReactCurrentBatchConfig,mu=!0;function lb(t,e,n,r){var i=re,s=fs.transition;fs.transition=null;try{re=1,qp(t,e,n,r)}finally{re=i,fs.transition=s}}function ub(t,e,n,r){var i=re,s=fs.transition;fs.transition=null;try{re=4,qp(t,e,n,r)}finally{re=i,fs.transition=s}}function qp(t,e,n,r){if(mu){var i=rh(t,e,n,r);if(i===null)Vd(t,e,r,gu,n),N0(t,r);else if(ob(i,t,e,n,r))r.stopPropagation();else if(N0(t,r),e&4&&-1<sb.indexOf(t)){for(;i!==null;){var s=Da(i);if(s!==null&&X1(s),s=rh(t,e,n,r),s===null&&Vd(t,e,r,gu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Vd(t,e,r,null,n)}}var gu=null;function rh(t,e,n,r){if(gu=null,t=Vp(r),t=ni(t),t!==null)if(e=Oi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=W1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return gu=t,null}function nw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(QI()){case Hp:return 1;case K1:return 4;case hu:case XI:return 16;case q1:return 536870912;default:return 16}default:return 16}}var hr=null,Yp=null,Dl=null;function rw(){if(Dl)return Dl;var t,e=Yp,n=e.length,r,i="value"in hr?hr.value:hr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Dl=i.slice(t,1<r?1-r:void 0)}function Ml(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ul(){return!0}function L0(){return!1}function Ot(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ul:L0,this.isPropagationStopped=L0,this}return Se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),e}var Hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qp=Ot(Hs),La=Se({},Hs,{view:0,detail:0}),cb=Ot(La),Dd,Md,uo,yc=Se({},La,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==uo&&(uo&&t.type==="mousemove"?(Dd=t.screenX-uo.screenX,Md=t.screenY-uo.screenY):Md=Dd=0,uo=t),Dd)},movementY:function(t){return"movementY"in t?t.movementY:Md}}),D0=Ot(yc),db=Se({},yc,{dataTransfer:0}),fb=Ot(db),hb=Se({},La,{relatedTarget:0}),Fd=Ot(hb),pb=Se({},Hs,{animationName:0,elapsedTime:0,pseudoElement:0}),mb=Ot(pb),gb=Se({},Hs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yb=Ot(gb),vb=Se({},Hs,{data:0}),M0=Ot(vb),_b={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Eb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Eb[t])?!!e[t]:!1}function Xp(){return Sb}var Cb=Se({},La,{key:function(t){if(t.key){var e=_b[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xp,charCode:function(t){return t.type==="keypress"?Ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xb=Ot(Cb),Tb=Se({},yc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),F0=Ot(Tb),Ib=Se({},La,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xp}),bb=Ot(Ib),kb=Se({},Hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pb=Ot(kb),Rb=Se({},yc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ob=Ot(Rb),Nb=[9,13,27,32],Jp=Fn&&"CompositionEvent"in window,Oo=null;Fn&&"documentMode"in document&&(Oo=document.documentMode);var Ab=Fn&&"TextEvent"in window&&!Oo,iw=Fn&&(!Jp||Oo&&8<Oo&&11>=Oo),$0=" ",j0=!1;function sw(t,e){switch(t){case"keyup":return Nb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ow(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qi=!1;function Lb(t,e){switch(t){case"compositionend":return ow(e);case"keypress":return e.which!==32?null:(j0=!0,$0);case"textInput":return t=e.data,t===$0&&j0?null:t;default:return null}}function Db(t,e){if(qi)return t==="compositionend"||!Jp&&sw(t,e)?(t=rw(),Dl=Yp=hr=null,qi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return iw&&e.locale!=="ko"?null:e.data;default:return null}}var Mb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function U0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Mb[t.type]:e==="textarea"}function aw(t,e,n,r){$1(r),e=yu(e,"onChange"),0<e.length&&(n=new Qp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var No=null,Zo=null;function Fb(t){vw(t,0)}function vc(t){var e=Xi(t);if(O1(e))return t}function $b(t,e){if(t==="change")return e}var lw=!1;if(Fn){var $d;if(Fn){var jd="oninput"in document;if(!jd){var z0=document.createElement("div");z0.setAttribute("oninput","return;"),jd=typeof z0.oninput=="function"}$d=jd}else $d=!1;lw=$d&&(!document.documentMode||9<document.documentMode)}function B0(){No&&(No.detachEvent("onpropertychange",uw),Zo=No=null)}function uw(t){if(t.propertyName==="value"&&vc(Zo)){var e=[];aw(e,Zo,t,Vp(t)),B1(Fb,e)}}function jb(t,e,n){t==="focusin"?(B0(),No=e,Zo=n,No.attachEvent("onpropertychange",uw)):t==="focusout"&&B0()}function Ub(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vc(Zo)}function zb(t,e){if(t==="click")return vc(e)}function Bb(t,e){if(t==="input"||t==="change")return vc(e)}function Wb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var tn=typeof Object.is=="function"?Object.is:Wb;function ea(t,e){if(tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!jf.call(e,i)||!tn(t[i],e[i]))return!1}return!0}function W0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function V0(t,e){var n=W0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=W0(n)}}function cw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?cw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function dw(){for(var t=window,e=cu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=cu(t.document)}return e}function Zp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Vb(t){var e=dw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&cw(n.ownerDocument.documentElement,n)){if(r!==null&&Zp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=V0(n,s);var o=V0(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Hb=Fn&&"documentMode"in document&&11>=document.documentMode,Yi=null,ih=null,Ao=null,sh=!1;function H0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sh||Yi==null||Yi!==cu(r)||(r=Yi,"selectionStart"in r&&Zp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ao&&ea(Ao,r)||(Ao=r,r=yu(ih,"onSelect"),0<r.length&&(e=new Qp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Yi)))}function cl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Qi={animationend:cl("Animation","AnimationEnd"),animationiteration:cl("Animation","AnimationIteration"),animationstart:cl("Animation","AnimationStart"),transitionend:cl("Transition","TransitionEnd")},Ud={},fw={};Fn&&(fw=document.createElement("div").style,"AnimationEvent"in window||(delete Qi.animationend.animation,delete Qi.animationiteration.animation,delete Qi.animationstart.animation),"TransitionEvent"in window||delete Qi.transitionend.transition);function _c(t){if(Ud[t])return Ud[t];if(!Qi[t])return t;var e=Qi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in fw)return Ud[t]=e[n];return t}var hw=_c("animationend"),pw=_c("animationiteration"),mw=_c("animationstart"),gw=_c("transitionend"),yw=new Map,G0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(t,e){yw.set(t,e),Ri(e,[t])}for(var zd=0;zd<G0.length;zd++){var Bd=G0[zd],Gb=Bd.toLowerCase(),Kb=Bd[0].toUpperCase()+Bd.slice(1);Ur(Gb,"on"+Kb)}Ur(hw,"onAnimationEnd");Ur(pw,"onAnimationIteration");Ur(mw,"onAnimationStart");Ur("dblclick","onDoubleClick");Ur("focusin","onFocus");Ur("focusout","onBlur");Ur(gw,"onTransitionEnd");Es("onMouseEnter",["mouseout","mouseover"]);Es("onMouseLeave",["mouseout","mouseover"]);Es("onPointerEnter",["pointerout","pointerover"]);Es("onPointerLeave",["pointerout","pointerover"]);Ri("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ri("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ri("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ri("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ri("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ri("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qb=new Set("cancel close invalid load scroll toggle".split(" ").concat(Co));function K0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,GI(r,e,void 0,t),t.currentTarget=null}function vw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;K0(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;K0(i,a,u),s=l}}}if(fu)throw t=eh,fu=!1,eh=null,t}function fe(t,e){var n=e[ch];n===void 0&&(n=e[ch]=new Set);var r=t+"__bubble";n.has(r)||(_w(e,t,2,!1),n.add(r))}function Wd(t,e,n){var r=0;e&&(r|=4),_w(n,t,r,e)}var dl="_reactListening"+Math.random().toString(36).slice(2);function ta(t){if(!t[dl]){t[dl]=!0,I1.forEach(function(n){n!=="selectionchange"&&(qb.has(n)||Wd(n,!1,t),Wd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[dl]||(e[dl]=!0,Wd("selectionchange",!1,e))}}function _w(t,e,n,r){switch(nw(e)){case 1:var i=lb;break;case 4:i=ub;break;default:i=qp}n=i.bind(null,e,n,t),i=void 0,!Zf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Vd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ni(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}B1(function(){var u=s,d=Vp(n),c=[];e:{var f=yw.get(t);if(f!==void 0){var p=Qp,v=t;switch(t){case"keypress":if(Ml(n)===0)break e;case"keydown":case"keyup":p=xb;break;case"focusin":v="focus",p=Fd;break;case"focusout":v="blur",p=Fd;break;case"beforeblur":case"afterblur":p=Fd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=D0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=fb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=bb;break;case hw:case pw:case mw:p=mb;break;case gw:p=Pb;break;case"scroll":p=cb;break;case"wheel":p=Ob;break;case"copy":case"cut":case"paste":p=yb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=F0}var _=(e&4)!==0,S=!_&&t==="scroll",m=_?f!==null?f+"Capture":null:f;_=[];for(var h=u,y;h!==null;){y=h;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,m!==null&&(w=Yo(h,m),w!=null&&_.push(na(h,w,y)))),S)break;h=h.return}0<_.length&&(f=new p(f,v,null,n,d),c.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Xf&&(v=n.relatedTarget||n.fromElement)&&(ni(v)||v[$n]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?ni(v):null,v!==null&&(S=Oi(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(_=D0,w="onMouseLeave",m="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(_=F0,w="onPointerLeave",m="onPointerEnter",h="pointer"),S=p==null?f:Xi(p),y=v==null?f:Xi(v),f=new _(w,h+"leave",p,n,d),f.target=S,f.relatedTarget=y,w=null,ni(d)===u&&(_=new _(m,h+"enter",v,n,d),_.target=y,_.relatedTarget=S,w=_),S=w,p&&v)t:{for(_=p,m=v,h=0,y=_;y;y=Bi(y))h++;for(y=0,w=m;w;w=Bi(w))y++;for(;0<h-y;)_=Bi(_),h--;for(;0<y-h;)m=Bi(m),y--;for(;h--;){if(_===m||m!==null&&_===m.alternate)break t;_=Bi(_),m=Bi(m)}_=null}else _=null;p!==null&&q0(c,f,p,_,!1),v!==null&&S!==null&&q0(c,S,v,_,!0)}}e:{if(f=u?Xi(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=$b;else if(U0(f))if(lw)T=Bb;else{T=Ub;var C=jb}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=zb);if(T&&(T=T(t,u))){aw(c,T,n,d);break e}C&&C(t,f,u),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Gf(f,"number",f.value)}switch(C=u?Xi(u):window,t){case"focusin":(U0(C)||C.contentEditable==="true")&&(Yi=C,ih=u,Ao=null);break;case"focusout":Ao=ih=Yi=null;break;case"mousedown":sh=!0;break;case"contextmenu":case"mouseup":case"dragend":sh=!1,H0(c,n,d);break;case"selectionchange":if(Hb)break;case"keydown":case"keyup":H0(c,n,d)}var x;if(Jp)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else qi?sw(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(iw&&n.locale!=="ko"&&(qi||b!=="onCompositionStart"?b==="onCompositionEnd"&&qi&&(x=rw()):(hr=d,Yp="value"in hr?hr.value:hr.textContent,qi=!0)),C=yu(u,b),0<C.length&&(b=new M0(b,t,null,n,d),c.push({event:b,listeners:C}),x?b.data=x:(x=ow(n),x!==null&&(b.data=x)))),(x=Ab?Lb(t,n):Db(t,n))&&(u=yu(u,"onBeforeInput"),0<u.length&&(d=new M0("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=x))}vw(c,e)})}function na(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Yo(t,n),s!=null&&r.unshift(na(t,s,i)),s=Yo(t,e),s!=null&&r.push(na(t,s,i))),t=t.return}return r}function Bi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function q0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Yo(n,s),l!=null&&o.unshift(na(n,l,a))):i||(l=Yo(n,s),l!=null&&o.push(na(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Yb=/\r\n?/g,Qb=/\u0000|\uFFFD/g;function Y0(t){return(typeof t=="string"?t:""+t).replace(Yb,`
`).replace(Qb,"")}function fl(t,e,n){if(e=Y0(e),Y0(t)!==e&&n)throw Error(k(425))}function vu(){}var oh=null,ah=null;function lh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var uh=typeof setTimeout=="function"?setTimeout:void 0,Xb=typeof clearTimeout=="function"?clearTimeout:void 0,Q0=typeof Promise=="function"?Promise:void 0,Jb=typeof queueMicrotask=="function"?queueMicrotask:typeof Q0<"u"?function(t){return Q0.resolve(null).then(t).catch(Zb)}:uh;function Zb(t){setTimeout(function(){throw t})}function Hd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Jo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Jo(e)}function wr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function X0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Gs=Math.random().toString(36).slice(2),dn="__reactFiber$"+Gs,ra="__reactProps$"+Gs,$n="__reactContainer$"+Gs,ch="__reactEvents$"+Gs,ek="__reactListeners$"+Gs,tk="__reactHandles$"+Gs;function ni(t){var e=t[dn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$n]||n[dn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=X0(t);t!==null;){if(n=t[dn])return n;t=X0(t)}return e}t=n,n=t.parentNode}return null}function Da(t){return t=t[dn]||t[$n],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Xi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function wc(t){return t[ra]||null}var dh=[],Ji=-1;function zr(t){return{current:t}}function ge(t){0>Ji||(t.current=dh[Ji],dh[Ji]=null,Ji--)}function de(t,e){Ji++,dh[Ji]=t.current,t.current=e}var Ar={},Qe=zr(Ar),ct=zr(!1),mi=Ar;function Ss(t,e){var n=t.type.contextTypes;if(!n)return Ar;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function dt(t){return t=t.childContextTypes,t!=null}function _u(){ge(ct),ge(Qe)}function J0(t,e,n){if(Qe.current!==Ar)throw Error(k(168));de(Qe,e),de(ct,n)}function ww(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,jI(t)||"Unknown",i));return Se({},n,r)}function wu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ar,mi=Qe.current,de(Qe,t),de(ct,ct.current),!0}function Z0(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=ww(t,e,mi),r.__reactInternalMemoizedMergedChildContext=t,ge(ct),ge(Qe),de(Qe,t)):ge(ct),de(ct,n)}var kn=null,Ec=!1,Gd=!1;function Ew(t){kn===null?kn=[t]:kn.push(t)}function nk(t){Ec=!0,Ew(t)}function Br(){if(!Gd&&kn!==null){Gd=!0;var t=0,e=re;try{var n=kn;for(re=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}kn=null,Ec=!1}catch(i){throw kn!==null&&(kn=kn.slice(t+1)),G1(Hp,Br),i}finally{re=e,Gd=!1}}return null}var Zi=[],es=0,Eu=null,Su=0,Dt=[],Mt=0,gi=null,Pn=1,Rn="";function Qr(t,e){Zi[es++]=Su,Zi[es++]=Eu,Eu=t,Su=e}function Sw(t,e,n){Dt[Mt++]=Pn,Dt[Mt++]=Rn,Dt[Mt++]=gi,gi=t;var r=Pn;t=Rn;var i=32-Xt(r)-1;r&=~(1<<i),n+=1;var s=32-Xt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Pn=1<<32-Xt(e)+i|n<<i|r,Rn=s+t}else Pn=1<<s|n<<i|r,Rn=t}function em(t){t.return!==null&&(Qr(t,1),Sw(t,1,0))}function tm(t){for(;t===Eu;)Eu=Zi[--es],Zi[es]=null,Su=Zi[--es],Zi[es]=null;for(;t===gi;)gi=Dt[--Mt],Dt[Mt]=null,Rn=Dt[--Mt],Dt[Mt]=null,Pn=Dt[--Mt],Dt[Mt]=null}var Tt=null,wt=null,ve=!1,Gt=null;function Cw(t,e){var n=Ft(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ey(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tt=t,wt=wr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tt=t,wt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=gi!==null?{id:Pn,overflow:Rn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ft(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tt=t,wt=null,!0):!1;default:return!1}}function fh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hh(t){if(ve){var e=wt;if(e){var n=e;if(!ey(t,e)){if(fh(t))throw Error(k(418));e=wr(n.nextSibling);var r=Tt;e&&ey(t,e)?Cw(r,n):(t.flags=t.flags&-4097|2,ve=!1,Tt=t)}}else{if(fh(t))throw Error(k(418));t.flags=t.flags&-4097|2,ve=!1,Tt=t}}}function ty(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tt=t}function hl(t){if(t!==Tt)return!1;if(!ve)return ty(t),ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!lh(t.type,t.memoizedProps)),e&&(e=wt)){if(fh(t))throw xw(),Error(k(418));for(;e;)Cw(t,e),e=wr(e.nextSibling)}if(ty(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wt=wr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wt=null}}else wt=Tt?wr(t.stateNode.nextSibling):null;return!0}function xw(){for(var t=wt;t;)t=wr(t.nextSibling)}function Cs(){wt=Tt=null,ve=!1}function nm(t){Gt===null?Gt=[t]:Gt.push(t)}var rk=Hn.ReactCurrentBatchConfig;function Vt(t,e){if(t&&t.defaultProps){e=Se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Cu=zr(null),xu=null,ts=null,rm=null;function im(){rm=ts=xu=null}function sm(t){var e=Cu.current;ge(Cu),t._currentValue=e}function ph(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function hs(t,e){xu=t,rm=ts=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(at=!0),t.firstContext=null)}function jt(t){var e=t._currentValue;if(rm!==t)if(t={context:t,memoizedValue:e,next:null},ts===null){if(xu===null)throw Error(k(308));ts=t,xu.dependencies={lanes:0,firstContext:t}}else ts=ts.next=t;return e}var ri=null;function om(t){ri===null?ri=[t]:ri.push(t)}function Tw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,om(e)):(n.next=i.next,i.next=n),e.interleaved=n,jn(t,r)}function jn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ir=!1;function am(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Iw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ln(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Er(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,jn(t,n)}return i=r.interleaved,i===null?(e.next=e,om(r)):(e.next=i.next,i.next=e),r.interleaved=e,jn(t,n)}function Fl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gp(t,n)}}function ny(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Tu(t,e,n,r){var i=t.updateQueue;ir=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var c=i.baseState;o=0,d=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(f=e,p=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){c=v.call(p,c,f);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,f=typeof v=="function"?v.call(p,c,f):v,f==null)break e;c=Se({},c,f);break e;case 2:ir=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=p,l=c):d=d.next=p,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);vi|=o,t.lanes=o,t.memoizedState=c}}function ry(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var bw=new T1.Component().refs;function mh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Sc={isMounted:function(t){return(t=t._reactInternals)?Oi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=nt(),i=Cr(t),s=Ln(r,i);s.payload=e,n!=null&&(s.callback=n),e=Er(t,s,i),e!==null&&(Jt(e,t,i,r),Fl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=nt(),i=Cr(t),s=Ln(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Er(t,s,i),e!==null&&(Jt(e,t,i,r),Fl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nt(),r=Cr(t),i=Ln(n,r);i.tag=2,e!=null&&(i.callback=e),e=Er(t,i,r),e!==null&&(Jt(e,t,r,n),Fl(e,t,r))}};function iy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ea(n,r)||!ea(i,s):!0}function kw(t,e,n){var r=!1,i=Ar,s=e.contextType;return typeof s=="object"&&s!==null?s=jt(s):(i=dt(e)?mi:Qe.current,r=e.contextTypes,s=(r=r!=null)?Ss(t,i):Ar),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Sc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function sy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Sc.enqueueReplaceState(e,e.state,null)}function gh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=bw,am(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=jt(s):(s=dt(e)?mi:Qe.current,i.context=Ss(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(mh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Sc.enqueueReplaceState(i,i.state,null),Tu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function co(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===bw&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function pl(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function oy(t){var e=t._init;return e(t._payload)}function Pw(t){function e(m,h){if(t){var y=m.deletions;y===null?(m.deletions=[h],m.flags|=16):y.push(h)}}function n(m,h){if(!t)return null;for(;h!==null;)e(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=xr(m,h),m.index=0,m.sibling=null,m}function s(m,h,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<h?(m.flags|=2,h):y):(m.flags|=2,h)):(m.flags|=1048576,h)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,h,y,w){return h===null||h.tag!==6?(h=Zd(y,m.mode,w),h.return=m,h):(h=i(h,y),h.return=m,h)}function l(m,h,y,w){var T=y.type;return T===Ki?d(m,h,y.props.children,w,y.key):h!==null&&(h.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===rr&&oy(T)===h.type)?(w=i(h,y.props),w.ref=co(m,h,y),w.return=m,w):(w=Wl(y.type,y.key,y.props,null,m.mode,w),w.ref=co(m,h,y),w.return=m,w)}function u(m,h,y,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=ef(y,m.mode,w),h.return=m,h):(h=i(h,y.children||[]),h.return=m,h)}function d(m,h,y,w,T){return h===null||h.tag!==7?(h=ui(y,m.mode,w,T),h.return=m,h):(h=i(h,y),h.return=m,h)}function c(m,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Zd(""+h,m.mode,y),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case rl:return y=Wl(h.type,h.key,h.props,null,m.mode,y),y.ref=co(m,null,h),y.return=m,y;case Gi:return h=ef(h,m.mode,y),h.return=m,h;case rr:var w=h._init;return c(m,w(h._payload),y)}if(Eo(h)||so(h))return h=ui(h,m.mode,y,null),h.return=m,h;pl(m,h)}return null}function f(m,h,y,w){var T=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:a(m,h,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case rl:return y.key===T?l(m,h,y,w):null;case Gi:return y.key===T?u(m,h,y,w):null;case rr:return T=y._init,f(m,h,T(y._payload),w)}if(Eo(y)||so(y))return T!==null?null:d(m,h,y,w,null);pl(m,y)}return null}function p(m,h,y,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(y)||null,a(h,m,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case rl:return m=m.get(w.key===null?y:w.key)||null,l(h,m,w,T);case Gi:return m=m.get(w.key===null?y:w.key)||null,u(h,m,w,T);case rr:var C=w._init;return p(m,h,y,C(w._payload),T)}if(Eo(w)||so(w))return m=m.get(y)||null,d(h,m,w,T,null);pl(h,w)}return null}function v(m,h,y,w){for(var T=null,C=null,x=h,b=h=0,L=null;x!==null&&b<y.length;b++){x.index>b?(L=x,x=null):L=x.sibling;var F=f(m,x,y[b],w);if(F===null){x===null&&(x=L);break}t&&x&&F.alternate===null&&e(m,x),h=s(F,h,b),C===null?T=F:C.sibling=F,C=F,x=L}if(b===y.length)return n(m,x),ve&&Qr(m,b),T;if(x===null){for(;b<y.length;b++)x=c(m,y[b],w),x!==null&&(h=s(x,h,b),C===null?T=x:C.sibling=x,C=x);return ve&&Qr(m,b),T}for(x=r(m,x);b<y.length;b++)L=p(x,m,b,y[b],w),L!==null&&(t&&L.alternate!==null&&x.delete(L.key===null?b:L.key),h=s(L,h,b),C===null?T=L:C.sibling=L,C=L);return t&&x.forEach(function(B){return e(m,B)}),ve&&Qr(m,b),T}function _(m,h,y,w){var T=so(y);if(typeof T!="function")throw Error(k(150));if(y=T.call(y),y==null)throw Error(k(151));for(var C=T=null,x=h,b=h=0,L=null,F=y.next();x!==null&&!F.done;b++,F=y.next()){x.index>b?(L=x,x=null):L=x.sibling;var B=f(m,x,F.value,w);if(B===null){x===null&&(x=L);break}t&&x&&B.alternate===null&&e(m,x),h=s(B,h,b),C===null?T=B:C.sibling=B,C=B,x=L}if(F.done)return n(m,x),ve&&Qr(m,b),T;if(x===null){for(;!F.done;b++,F=y.next())F=c(m,F.value,w),F!==null&&(h=s(F,h,b),C===null?T=F:C.sibling=F,C=F);return ve&&Qr(m,b),T}for(x=r(m,x);!F.done;b++,F=y.next())F=p(x,m,b,F.value,w),F!==null&&(t&&F.alternate!==null&&x.delete(F.key===null?b:F.key),h=s(F,h,b),C===null?T=F:C.sibling=F,C=F);return t&&x.forEach(function(At){return e(m,At)}),ve&&Qr(m,b),T}function S(m,h,y,w){if(typeof y=="object"&&y!==null&&y.type===Ki&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case rl:e:{for(var T=y.key,C=h;C!==null;){if(C.key===T){if(T=y.type,T===Ki){if(C.tag===7){n(m,C.sibling),h=i(C,y.props.children),h.return=m,m=h;break e}}else if(C.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===rr&&oy(T)===C.type){n(m,C.sibling),h=i(C,y.props),h.ref=co(m,C,y),h.return=m,m=h;break e}n(m,C);break}else e(m,C);C=C.sibling}y.type===Ki?(h=ui(y.props.children,m.mode,w,y.key),h.return=m,m=h):(w=Wl(y.type,y.key,y.props,null,m.mode,w),w.ref=co(m,h,y),w.return=m,m=w)}return o(m);case Gi:e:{for(C=y.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){n(m,h.sibling),h=i(h,y.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else e(m,h);h=h.sibling}h=ef(y,m.mode,w),h.return=m,m=h}return o(m);case rr:return C=y._init,S(m,h,C(y._payload),w)}if(Eo(y))return v(m,h,y,w);if(so(y))return _(m,h,y,w);pl(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(n(m,h.sibling),h=i(h,y),h.return=m,m=h):(n(m,h),h=Zd(y,m.mode,w),h.return=m,m=h),o(m)):n(m,h)}return S}var xs=Pw(!0),Rw=Pw(!1),Ma={},hn=zr(Ma),ia=zr(Ma),sa=zr(Ma);function ii(t){if(t===Ma)throw Error(k(174));return t}function lm(t,e){switch(de(sa,e),de(ia,t),de(hn,Ma),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qf(e,t)}ge(hn),de(hn,e)}function Ts(){ge(hn),ge(ia),ge(sa)}function Ow(t){ii(sa.current);var e=ii(hn.current),n=qf(e,t.type);e!==n&&(de(ia,t),de(hn,n))}function um(t){ia.current===t&&(ge(hn),ge(ia))}var _e=zr(0);function Iu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Kd=[];function cm(){for(var t=0;t<Kd.length;t++)Kd[t]._workInProgressVersionPrimary=null;Kd.length=0}var $l=Hn.ReactCurrentDispatcher,qd=Hn.ReactCurrentBatchConfig,yi=0,we=null,ke=null,Le=null,bu=!1,Lo=!1,oa=0,ik=0;function Ge(){throw Error(k(321))}function dm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!tn(t[n],e[n]))return!1;return!0}function fm(t,e,n,r,i,s){if(yi=s,we=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$l.current=t===null||t.memoizedState===null?lk:uk,t=n(r,i),Lo){s=0;do{if(Lo=!1,oa=0,25<=s)throw Error(k(301));s+=1,Le=ke=null,e.updateQueue=null,$l.current=ck,t=n(r,i)}while(Lo)}if($l.current=ku,e=ke!==null&&ke.next!==null,yi=0,Le=ke=we=null,bu=!1,e)throw Error(k(300));return t}function hm(){var t=oa!==0;return oa=0,t}function ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?we.memoizedState=Le=t:Le=Le.next=t,Le}function Ut(){if(ke===null){var t=we.alternate;t=t!==null?t.memoizedState:null}else t=ke.next;var e=Le===null?we.memoizedState:Le.next;if(e!==null)Le=e,ke=t;else{if(t===null)throw Error(k(310));ke=t,t={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Le===null?we.memoizedState=Le=t:Le=Le.next=t}return Le}function aa(t,e){return typeof e=="function"?e(t):e}function Yd(t){var e=Ut(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=ke,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((yi&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,o=r):l=l.next=c,we.lanes|=d,vi|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,tn(r,e.memoizedState)||(at=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,we.lanes|=s,vi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Qd(t){var e=Ut(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);tn(s,e.memoizedState)||(at=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Nw(){}function Aw(t,e){var n=we,r=Ut(),i=e(),s=!tn(r.memoizedState,i);if(s&&(r.memoizedState=i,at=!0),r=r.queue,pm(Mw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,la(9,Dw.bind(null,n,r,i,e),void 0,null),Fe===null)throw Error(k(349));yi&30||Lw(n,e,i)}return i}function Lw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Dw(t,e,n,r){e.value=n,e.getSnapshot=r,Fw(e)&&$w(t)}function Mw(t,e,n){return n(function(){Fw(e)&&$w(t)})}function Fw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!tn(t,n)}catch{return!0}}function $w(t){var e=jn(t,1);e!==null&&Jt(e,t,1,-1)}function ay(t){var e=ln();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:t},e.queue=t,t=t.dispatch=ak.bind(null,we,t),[e.memoizedState,t]}function la(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function jw(){return Ut().memoizedState}function jl(t,e,n,r){var i=ln();we.flags|=t,i.memoizedState=la(1|e,n,void 0,r===void 0?null:r)}function Cc(t,e,n,r){var i=Ut();r=r===void 0?null:r;var s=void 0;if(ke!==null){var o=ke.memoizedState;if(s=o.destroy,r!==null&&dm(r,o.deps)){i.memoizedState=la(e,n,s,r);return}}we.flags|=t,i.memoizedState=la(1|e,n,s,r)}function ly(t,e){return jl(8390656,8,t,e)}function pm(t,e){return Cc(2048,8,t,e)}function Uw(t,e){return Cc(4,2,t,e)}function zw(t,e){return Cc(4,4,t,e)}function Bw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ww(t,e,n){return n=n!=null?n.concat([t]):null,Cc(4,4,Bw.bind(null,e,t),n)}function mm(){}function Vw(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Hw(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Gw(t,e,n){return yi&21?(tn(n,e)||(n=Y1(),we.lanes|=n,vi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,at=!0),t.memoizedState=n)}function sk(t,e){var n=re;re=n!==0&&4>n?n:4,t(!0);var r=qd.transition;qd.transition={};try{t(!1),e()}finally{re=n,qd.transition=r}}function Kw(){return Ut().memoizedState}function ok(t,e,n){var r=Cr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qw(t))Yw(e,n);else if(n=Tw(t,e,n,r),n!==null){var i=nt();Jt(n,t,r,i),Qw(n,e,r)}}function ak(t,e,n){var r=Cr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qw(t))Yw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,tn(a,o)){var l=e.interleaved;l===null?(i.next=i,om(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Tw(t,e,i,r),n!==null&&(i=nt(),Jt(n,t,r,i),Qw(n,e,r))}}function qw(t){var e=t.alternate;return t===we||e!==null&&e===we}function Yw(t,e){Lo=bu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Qw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gp(t,n)}}var ku={readContext:jt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},lk={readContext:jt,useCallback:function(t,e){return ln().memoizedState=[t,e===void 0?null:e],t},useContext:jt,useEffect:ly,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,jl(4194308,4,Bw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return jl(4194308,4,t,e)},useInsertionEffect:function(t,e){return jl(4,2,t,e)},useMemo:function(t,e){var n=ln();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ln();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ok.bind(null,we,t),[r.memoizedState,t]},useRef:function(t){var e=ln();return t={current:t},e.memoizedState=t},useState:ay,useDebugValue:mm,useDeferredValue:function(t){return ln().memoizedState=t},useTransition:function(){var t=ay(!1),e=t[0];return t=sk.bind(null,t[1]),ln().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=we,i=ln();if(ve){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),Fe===null)throw Error(k(349));yi&30||Lw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ly(Mw.bind(null,r,s,t),[t]),r.flags|=2048,la(9,Dw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ln(),e=Fe.identifierPrefix;if(ve){var n=Rn,r=Pn;n=(r&~(1<<32-Xt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=oa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ik++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},uk={readContext:jt,useCallback:Vw,useContext:jt,useEffect:pm,useImperativeHandle:Ww,useInsertionEffect:Uw,useLayoutEffect:zw,useMemo:Hw,useReducer:Yd,useRef:jw,useState:function(){return Yd(aa)},useDebugValue:mm,useDeferredValue:function(t){var e=Ut();return Gw(e,ke.memoizedState,t)},useTransition:function(){var t=Yd(aa)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:Nw,useSyncExternalStore:Aw,useId:Kw,unstable_isNewReconciler:!1},ck={readContext:jt,useCallback:Vw,useContext:jt,useEffect:pm,useImperativeHandle:Ww,useInsertionEffect:Uw,useLayoutEffect:zw,useMemo:Hw,useReducer:Qd,useRef:jw,useState:function(){return Qd(aa)},useDebugValue:mm,useDeferredValue:function(t){var e=Ut();return ke===null?e.memoizedState=t:Gw(e,ke.memoizedState,t)},useTransition:function(){var t=Qd(aa)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:Nw,useSyncExternalStore:Aw,useId:Kw,unstable_isNewReconciler:!1};function Is(t,e){try{var n="",r=e;do n+=$I(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Xd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function yh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var dk=typeof WeakMap=="function"?WeakMap:Map;function Xw(t,e,n){n=Ln(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ru||(Ru=!0,bh=r),yh(t,e)},n}function Jw(t,e,n){n=Ln(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){yh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){yh(t,e),typeof r!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function uy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new dk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Tk.bind(null,t,e,n),e.then(t,t))}function cy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function dy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ln(-1,1),e.tag=2,Er(n,e,1))),n.lanes|=1),t)}var fk=Hn.ReactCurrentOwner,at=!1;function et(t,e,n,r){e.child=t===null?Rw(e,null,n,r):xs(e,t.child,n,r)}function fy(t,e,n,r,i){n=n.render;var s=e.ref;return hs(e,i),r=fm(t,e,n,r,s,i),n=hm(),t!==null&&!at?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Un(t,e,i)):(ve&&n&&em(e),e.flags|=1,et(t,e,r,i),e.child)}function hy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Cm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Zw(t,e,s,r,i)):(t=Wl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ea,n(o,r)&&t.ref===e.ref)return Un(t,e,i)}return e.flags|=1,t=xr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Zw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ea(s,r)&&t.ref===e.ref)if(at=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(at=!0);else return e.lanes=t.lanes,Un(t,e,i)}return vh(t,e,n,r,i)}function eE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(rs,_t),_t|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,de(rs,_t),_t|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(rs,_t),_t|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,de(rs,_t),_t|=r;return et(t,e,i,n),e.child}function tE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function vh(t,e,n,r,i){var s=dt(n)?mi:Qe.current;return s=Ss(e,s),hs(e,i),n=fm(t,e,n,r,s,i),r=hm(),t!==null&&!at?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Un(t,e,i)):(ve&&r&&em(e),e.flags|=1,et(t,e,n,i),e.child)}function py(t,e,n,r,i){if(dt(n)){var s=!0;wu(e)}else s=!1;if(hs(e,i),e.stateNode===null)Ul(t,e),kw(e,n,r),gh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=jt(u):(u=dt(n)?mi:Qe.current,u=Ss(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&sy(e,o,r,u),ir=!1;var f=e.memoizedState;o.state=f,Tu(e,r,o,i),l=e.memoizedState,a!==r||f!==l||ct.current||ir?(typeof d=="function"&&(mh(e,n,d,r),l=e.memoizedState),(a=ir||iy(e,n,a,r,f,l,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Iw(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Vt(e.type,a),o.props=u,c=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=jt(l):(l=dt(n)?mi:Qe.current,l=Ss(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||f!==l)&&sy(e,o,r,l),ir=!1,f=e.memoizedState,o.state=f,Tu(e,r,o,i);var v=e.memoizedState;a!==c||f!==v||ct.current||ir?(typeof p=="function"&&(mh(e,n,p,r),v=e.memoizedState),(u=ir||iy(e,n,u,r,f,v,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return _h(t,e,n,r,s,i)}function _h(t,e,n,r,i,s){tE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Z0(e,n,!1),Un(t,e,s);r=e.stateNode,fk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=xs(e,t.child,null,s),e.child=xs(e,null,a,s)):et(t,e,a,s),e.memoizedState=r.state,i&&Z0(e,n,!0),e.child}function nE(t){var e=t.stateNode;e.pendingContext?J0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&J0(t,e.context,!1),lm(t,e.containerInfo)}function my(t,e,n,r,i){return Cs(),nm(i),e.flags|=256,et(t,e,n,r),e.child}var wh={dehydrated:null,treeContext:null,retryLane:0};function Eh(t){return{baseLanes:t,cachePool:null,transitions:null}}function rE(t,e,n){var r=e.pendingProps,i=_e.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),de(_e,i&1),t===null)return hh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ic(o,r,0,null),t=ui(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Eh(n),e.memoizedState=wh,t):gm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return hk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=xr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=xr(a,s):(s=ui(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Eh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=wh,r}return s=t.child,t=s.sibling,r=xr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function gm(t,e){return e=Ic({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ml(t,e,n,r){return r!==null&&nm(r),xs(e,t.child,null,n),t=gm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Xd(Error(k(422))),ml(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ic({mode:"visible",children:r.children},i,0,null),s=ui(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&xs(e,t.child,null,o),e.child.memoizedState=Eh(o),e.memoizedState=wh,s);if(!(e.mode&1))return ml(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=Xd(s,r,void 0),ml(t,e,o,r)}if(a=(o&t.childLanes)!==0,at||a){if(r=Fe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,jn(t,i),Jt(r,t,i,-1))}return Sm(),r=Xd(Error(k(421))),ml(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Ik.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,wt=wr(i.nextSibling),Tt=e,ve=!0,Gt=null,t!==null&&(Dt[Mt++]=Pn,Dt[Mt++]=Rn,Dt[Mt++]=gi,Pn=t.id,Rn=t.overflow,gi=e),e=gm(e,r.children),e.flags|=4096,e)}function gy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ph(t.return,e,n)}function Jd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function iE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(et(t,e,r.children,n),r=_e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gy(t,n,e);else if(t.tag===19)gy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(de(_e,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Iu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Jd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Iu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Jd(e,!0,n,null,s);break;case"together":Jd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ul(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Un(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),vi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=xr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=xr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function pk(t,e,n){switch(e.tag){case 3:nE(e),Cs();break;case 5:Ow(e);break;case 1:dt(e.type)&&wu(e);break;case 4:lm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;de(Cu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(de(_e,_e.current&1),e.flags|=128,null):n&e.child.childLanes?rE(t,e,n):(de(_e,_e.current&1),t=Un(t,e,n),t!==null?t.sibling:null);de(_e,_e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return iE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,eE(t,e,n)}return Un(t,e,n)}var sE,Sh,oE,aE;sE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sh=function(){};oE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ii(hn.current);var s=null;switch(n){case"input":i=Vf(t,i),r=Vf(t,r),s=[];break;case"select":i=Se({},i,{value:void 0}),r=Se({},r,{value:void 0}),s=[];break;case"textarea":i=Kf(t,i),r=Kf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=vu)}Yf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ko.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ko.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&fe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};aE=function(t,e,n,r){n!==r&&(e.flags|=4)};function fo(t,e){if(!ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ke(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function mk(t,e,n){var r=e.pendingProps;switch(tm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(e),null;case 1:return dt(e.type)&&_u(),Ke(e),null;case 3:return r=e.stateNode,Ts(),ge(ct),ge(Qe),cm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(hl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gt!==null&&(Rh(Gt),Gt=null))),Sh(t,e),Ke(e),null;case 5:um(e);var i=ii(sa.current);if(n=e.type,t!==null&&e.stateNode!=null)oE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return Ke(e),null}if(t=ii(hn.current),hl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[dn]=e,r[ra]=s,t=(e.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<Co.length;i++)fe(Co[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":T0(r,s),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},fe("invalid",r);break;case"textarea":b0(r,s),fe("invalid",r)}Yf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&fl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&fl(r.textContent,a,t),i=["children",""+a]):Ko.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&fe("scroll",r)}switch(n){case"input":il(r),I0(r,s,!0);break;case"textarea":il(r),k0(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=vu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=L1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[dn]=e,t[ra]=r,sE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Qf(n,r),n){case"dialog":fe("cancel",t),fe("close",t),i=r;break;case"iframe":case"object":case"embed":fe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Co.length;i++)fe(Co[i],t);i=r;break;case"source":fe("error",t),i=r;break;case"img":case"image":case"link":fe("error",t),fe("load",t),i=r;break;case"details":fe("toggle",t),i=r;break;case"input":T0(t,r),i=Vf(t,r),fe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Se({},r,{value:void 0}),fe("invalid",t);break;case"textarea":b0(t,r),i=Kf(t,r),fe("invalid",t);break;default:i=r}Yf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?F1(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&D1(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&qo(t,l):typeof l=="number"&&qo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ko.hasOwnProperty(s)?l!=null&&s==="onScroll"&&fe("scroll",t):l!=null&&Up(t,s,l,o))}switch(n){case"input":il(t),I0(t,r,!1);break;case"textarea":il(t),k0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Nr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?us(t,!!r.multiple,s,!1):r.defaultValue!=null&&us(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=vu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ke(e),null;case 6:if(t&&e.stateNode!=null)aE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=ii(sa.current),ii(hn.current),hl(e)){if(r=e.stateNode,n=e.memoizedProps,r[dn]=e,(s=r.nodeValue!==n)&&(t=Tt,t!==null))switch(t.tag){case 3:fl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dn]=e,e.stateNode=r}return Ke(e),null;case 13:if(ge(_e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&wt!==null&&e.mode&1&&!(e.flags&128))xw(),Cs(),e.flags|=98560,s=!1;else if(s=hl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[dn]=e}else Cs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ke(e),s=!1}else Gt!==null&&(Rh(Gt),Gt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||_e.current&1?Oe===0&&(Oe=3):Sm())),e.updateQueue!==null&&(e.flags|=4),Ke(e),null);case 4:return Ts(),Sh(t,e),t===null&&ta(e.stateNode.containerInfo),Ke(e),null;case 10:return sm(e.type._context),Ke(e),null;case 17:return dt(e.type)&&_u(),Ke(e),null;case 19:if(ge(_e),s=e.memoizedState,s===null)return Ke(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)fo(s,!1);else{if(Oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Iu(t),o!==null){for(e.flags|=128,fo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return de(_e,_e.current&1|2),e.child}t=t.sibling}s.tail!==null&&Te()>bs&&(e.flags|=128,r=!0,fo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Iu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),fo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ve)return Ke(e),null}else 2*Te()-s.renderingStartTime>bs&&n!==1073741824&&(e.flags|=128,r=!0,fo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Te(),e.sibling=null,n=_e.current,de(_e,r?n&1|2:n&1),e):(Ke(e),null);case 22:case 23:return Em(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?_t&1073741824&&(Ke(e),e.subtreeFlags&6&&(e.flags|=8192)):Ke(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function gk(t,e){switch(tm(e),e.tag){case 1:return dt(e.type)&&_u(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ts(),ge(ct),ge(Qe),cm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return um(e),null;case 13:if(ge(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));Cs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(_e),null;case 4:return Ts(),null;case 10:return sm(e.type._context),null;case 22:case 23:return Em(),null;case 24:return null;default:return null}}var gl=!1,qe=!1,yk=typeof WeakSet=="function"?WeakSet:Set,A=null;function ns(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(t,e,r)}else n.current=null}function Ch(t,e,n){try{n()}catch(r){Ce(t,e,r)}}var yy=!1;function vk(t,e){if(oh=mu,t=dw(),Zp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,c=t,f=null;t:for(;;){for(var p;c!==n||i!==0&&c.nodeType!==3||(a=o+i),c!==s||r!==0&&c.nodeType!==3||(l=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(p=c.firstChild)!==null;)f=c,c=p;for(;;){if(c===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++d===r&&(l=o),(p=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ah={focusedElem:t,selectionRange:n},mu=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,S=v.memoizedState,m=e.stateNode,h=m.getSnapshotBeforeUpdate(e.elementType===e.type?_:Vt(e.type,_),S);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){Ce(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return v=yy,yy=!1,v}function Do(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ch(e,n,s)}i=i.next}while(i!==r)}}function xc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function xh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function lE(t){var e=t.alternate;e!==null&&(t.alternate=null,lE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[dn],delete e[ra],delete e[ch],delete e[ek],delete e[tk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function uE(t){return t.tag===5||t.tag===3||t.tag===4}function vy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||uE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Th(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=vu));else if(r!==4&&(t=t.child,t!==null))for(Th(t,e,n),t=t.sibling;t!==null;)Th(t,e,n),t=t.sibling}function Ih(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ih(t,e,n),t=t.sibling;t!==null;)Ih(t,e,n),t=t.sibling}var Ue=null,Ht=!1;function er(t,e,n){for(n=n.child;n!==null;)cE(t,e,n),n=n.sibling}function cE(t,e,n){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount(gc,n)}catch{}switch(n.tag){case 5:qe||ns(n,e);case 6:var r=Ue,i=Ht;Ue=null,er(t,e,n),Ue=r,Ht=i,Ue!==null&&(Ht?(t=Ue,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(Ht?(t=Ue,n=n.stateNode,t.nodeType===8?Hd(t.parentNode,n):t.nodeType===1&&Hd(t,n),Jo(t)):Hd(Ue,n.stateNode));break;case 4:r=Ue,i=Ht,Ue=n.stateNode.containerInfo,Ht=!0,er(t,e,n),Ue=r,Ht=i;break;case 0:case 11:case 14:case 15:if(!qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ch(n,e,o),i=i.next}while(i!==r)}er(t,e,n);break;case 1:if(!qe&&(ns(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ce(n,e,a)}er(t,e,n);break;case 21:er(t,e,n);break;case 22:n.mode&1?(qe=(r=qe)||n.memoizedState!==null,er(t,e,n),qe=r):er(t,e,n);break;default:er(t,e,n)}}function _y(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new yk),e.forEach(function(r){var i=bk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Bt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ue=a.stateNode,Ht=!1;break e;case 3:Ue=a.stateNode.containerInfo,Ht=!0;break e;case 4:Ue=a.stateNode.containerInfo,Ht=!0;break e}a=a.return}if(Ue===null)throw Error(k(160));cE(s,o,i),Ue=null,Ht=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ce(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)dE(e,t),e=e.sibling}function dE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bt(e,t),an(t),r&4){try{Do(3,t,t.return),xc(3,t)}catch(_){Ce(t,t.return,_)}try{Do(5,t,t.return)}catch(_){Ce(t,t.return,_)}}break;case 1:Bt(e,t),an(t),r&512&&n!==null&&ns(n,n.return);break;case 5:if(Bt(e,t),an(t),r&512&&n!==null&&ns(n,n.return),t.flags&32){var i=t.stateNode;try{qo(i,"")}catch(_){Ce(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&N1(i,s),Qf(a,o);var u=Qf(a,s);for(o=0;o<l.length;o+=2){var d=l[o],c=l[o+1];d==="style"?F1(i,c):d==="dangerouslySetInnerHTML"?D1(i,c):d==="children"?qo(i,c):Up(i,d,c,u)}switch(a){case"input":Hf(i,s);break;case"textarea":A1(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?us(i,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?us(i,!!s.multiple,s.defaultValue,!0):us(i,!!s.multiple,s.multiple?[]:"",!1))}i[ra]=s}catch(_){Ce(t,t.return,_)}}break;case 6:if(Bt(e,t),an(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){Ce(t,t.return,_)}}break;case 3:if(Bt(e,t),an(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Jo(e.containerInfo)}catch(_){Ce(t,t.return,_)}break;case 4:Bt(e,t),an(t);break;case 13:Bt(e,t),an(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(_m=Te())),r&4&&_y(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(qe=(u=qe)||d,Bt(e,t),qe=u):Bt(e,t),an(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(A=t,d=t.child;d!==null;){for(c=A=d;A!==null;){switch(f=A,p=f.child,f.tag){case 0:case 11:case 14:case 15:Do(4,f,f.return);break;case 1:ns(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){Ce(r,n,_)}}break;case 5:ns(f,f.return);break;case 22:if(f.memoizedState!==null){Ey(c);continue}}p!==null?(p.return=f,A=p):Ey(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=c.stateNode,l=c.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=M1("display",o))}catch(_){Ce(t,t.return,_)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(_){Ce(t,t.return,_)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Bt(e,t),an(t),r&4&&_y(t);break;case 21:break;default:Bt(e,t),an(t)}}function an(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(uE(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(qo(i,""),r.flags&=-33);var s=vy(t);Ih(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=vy(t);Th(t,a,o);break;default:throw Error(k(161))}}catch(l){Ce(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function _k(t,e,n){A=t,fE(t)}function fE(t,e,n){for(var r=(t.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||gl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||qe;a=gl;var u=qe;if(gl=o,(qe=l)&&!u)for(A=i;A!==null;)o=A,l=o.child,o.tag===22&&o.memoizedState!==null?Sy(i):l!==null?(l.return=o,A=l):Sy(i);for(;s!==null;)A=s,fE(s),s=s.sibling;A=i,gl=a,qe=u}wy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,A=s):wy(t)}}function wy(t){for(;A!==null;){var e=A;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qe||xc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!qe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Vt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ry(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ry(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Jo(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}qe||e.flags&512&&xh(e)}catch(f){Ce(e,e.return,f)}}if(e===t){A=null;break}if(n=e.sibling,n!==null){n.return=e.return,A=n;break}A=e.return}}function Ey(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var n=e.sibling;if(n!==null){n.return=e.return,A=n;break}A=e.return}}function Sy(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xc(4,e)}catch(l){Ce(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ce(e,i,l)}}var s=e.return;try{xh(e)}catch(l){Ce(e,s,l)}break;case 5:var o=e.return;try{xh(e)}catch(l){Ce(e,o,l)}}}catch(l){Ce(e,e.return,l)}if(e===t){A=null;break}var a=e.sibling;if(a!==null){a.return=e.return,A=a;break}A=e.return}}var wk=Math.ceil,Pu=Hn.ReactCurrentDispatcher,ym=Hn.ReactCurrentOwner,$t=Hn.ReactCurrentBatchConfig,X=0,Fe=null,be=null,We=0,_t=0,rs=zr(0),Oe=0,ua=null,vi=0,Tc=0,vm=0,Mo=null,st=null,_m=0,bs=1/0,In=null,Ru=!1,bh=null,Sr=null,yl=!1,pr=null,Ou=0,Fo=0,kh=null,zl=-1,Bl=0;function nt(){return X&6?Te():zl!==-1?zl:zl=Te()}function Cr(t){return t.mode&1?X&2&&We!==0?We&-We:rk.transition!==null?(Bl===0&&(Bl=Y1()),Bl):(t=re,t!==0||(t=window.event,t=t===void 0?16:nw(t.type)),t):1}function Jt(t,e,n,r){if(50<Fo)throw Fo=0,kh=null,Error(k(185));Aa(t,n,r),(!(X&2)||t!==Fe)&&(t===Fe&&(!(X&2)&&(Tc|=n),Oe===4&&ar(t,We)),ft(t,r),n===1&&X===0&&!(e.mode&1)&&(bs=Te()+500,Ec&&Br()))}function ft(t,e){var n=t.callbackNode;rb(t,e);var r=pu(t,t===Fe?We:0);if(r===0)n!==null&&O0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&O0(n),e===1)t.tag===0?nk(Cy.bind(null,t)):Ew(Cy.bind(null,t)),Jb(function(){!(X&6)&&Br()}),n=null;else{switch(Q1(r)){case 1:n=Hp;break;case 4:n=K1;break;case 16:n=hu;break;case 536870912:n=q1;break;default:n=hu}n=wE(n,hE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function hE(t,e){if(zl=-1,Bl=0,X&6)throw Error(k(327));var n=t.callbackNode;if(ps()&&t.callbackNode!==n)return null;var r=pu(t,t===Fe?We:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Nu(t,r);else{e=r;var i=X;X|=2;var s=mE();(Fe!==t||We!==e)&&(In=null,bs=Te()+500,li(t,e));do try{Ck();break}catch(a){pE(t,a)}while(!0);im(),Pu.current=s,X=i,be!==null?e=0:(Fe=null,We=0,e=Oe)}if(e!==0){if(e===2&&(i=th(t),i!==0&&(r=i,e=Ph(t,i))),e===1)throw n=ua,li(t,0),ar(t,r),ft(t,Te()),n;if(e===6)ar(t,r);else{if(i=t.current.alternate,!(r&30)&&!Ek(i)&&(e=Nu(t,r),e===2&&(s=th(t),s!==0&&(r=s,e=Ph(t,s))),e===1))throw n=ua,li(t,0),ar(t,r),ft(t,Te()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:Xr(t,st,In);break;case 3:if(ar(t,r),(r&130023424)===r&&(e=_m+500-Te(),10<e)){if(pu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){nt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=uh(Xr.bind(null,t,st,In),e);break}Xr(t,st,In);break;case 4:if(ar(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Xt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wk(r/1960))-r,10<r){t.timeoutHandle=uh(Xr.bind(null,t,st,In),r);break}Xr(t,st,In);break;case 5:Xr(t,st,In);break;default:throw Error(k(329))}}}return ft(t,Te()),t.callbackNode===n?hE.bind(null,t):null}function Ph(t,e){var n=Mo;return t.current.memoizedState.isDehydrated&&(li(t,e).flags|=256),t=Nu(t,e),t!==2&&(e=st,st=n,e!==null&&Rh(e)),t}function Rh(t){st===null?st=t:st.push.apply(st,t)}function Ek(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!tn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ar(t,e){for(e&=~vm,e&=~Tc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xt(e),r=1<<n;t[n]=-1,e&=~r}}function Cy(t){if(X&6)throw Error(k(327));ps();var e=pu(t,0);if(!(e&1))return ft(t,Te()),null;var n=Nu(t,e);if(t.tag!==0&&n===2){var r=th(t);r!==0&&(e=r,n=Ph(t,r))}if(n===1)throw n=ua,li(t,0),ar(t,e),ft(t,Te()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Xr(t,st,In),ft(t,Te()),null}function wm(t,e){var n=X;X|=1;try{return t(e)}finally{X=n,X===0&&(bs=Te()+500,Ec&&Br())}}function _i(t){pr!==null&&pr.tag===0&&!(X&6)&&ps();var e=X;X|=1;var n=$t.transition,r=re;try{if($t.transition=null,re=1,t)return t()}finally{re=r,$t.transition=n,X=e,!(X&6)&&Br()}}function Em(){_t=rs.current,ge(rs)}function li(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Xb(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(tm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&_u();break;case 3:Ts(),ge(ct),ge(Qe),cm();break;case 5:um(r);break;case 4:Ts();break;case 13:ge(_e);break;case 19:ge(_e);break;case 10:sm(r.type._context);break;case 22:case 23:Em()}n=n.return}if(Fe=t,be=t=xr(t.current,null),We=_t=e,Oe=0,ua=null,vm=Tc=vi=0,st=Mo=null,ri!==null){for(e=0;e<ri.length;e++)if(n=ri[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ri=null}return t}function pE(t,e){do{var n=be;try{if(im(),$l.current=ku,bu){for(var r=we.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}bu=!1}if(yi=0,Le=ke=we=null,Lo=!1,oa=0,ym.current=null,n===null||n.return===null){Oe=1,ua=e,be=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=We,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=cy(o);if(p!==null){p.flags&=-257,dy(p,o,a,s,e),p.mode&1&&uy(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){uy(s,u,e),Sm();break e}l=Error(k(426))}}else if(ve&&a.mode&1){var S=cy(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),dy(S,o,a,s,e),nm(Is(l,a));break e}}s=l=Is(l,a),Oe!==4&&(Oe=2),Mo===null?Mo=[s]:Mo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Xw(s,l,e);ny(s,m);break e;case 1:a=l;var h=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Sr===null||!Sr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=Jw(s,a,e);ny(s,w);break e}}s=s.return}while(s!==null)}yE(n)}catch(T){e=T,be===n&&n!==null&&(be=n=n.return);continue}break}while(!0)}function mE(){var t=Pu.current;return Pu.current=ku,t===null?ku:t}function Sm(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),Fe===null||!(vi&268435455)&&!(Tc&268435455)||ar(Fe,We)}function Nu(t,e){var n=X;X|=2;var r=mE();(Fe!==t||We!==e)&&(In=null,li(t,e));do try{Sk();break}catch(i){pE(t,i)}while(!0);if(im(),X=n,Pu.current=r,be!==null)throw Error(k(261));return Fe=null,We=0,Oe}function Sk(){for(;be!==null;)gE(be)}function Ck(){for(;be!==null&&!qI();)gE(be)}function gE(t){var e=_E(t.alternate,t,_t);t.memoizedProps=t.pendingProps,e===null?yE(t):be=e,ym.current=null}function yE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=gk(n,e),n!==null){n.flags&=32767,be=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Oe=6,be=null;return}}else if(n=mk(n,e,_t),n!==null){be=n;return}if(e=e.sibling,e!==null){be=e;return}be=e=t}while(e!==null);Oe===0&&(Oe=5)}function Xr(t,e,n){var r=re,i=$t.transition;try{$t.transition=null,re=1,xk(t,e,n,r)}finally{$t.transition=i,re=r}return null}function xk(t,e,n,r){do ps();while(pr!==null);if(X&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ib(t,s),t===Fe&&(be=Fe=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yl||(yl=!0,wE(hu,function(){return ps(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=$t.transition,$t.transition=null;var o=re;re=1;var a=X;X|=4,ym.current=null,vk(t,n),dE(n,t),Vb(ah),mu=!!oh,ah=oh=null,t.current=n,_k(n),YI(),X=a,re=o,$t.transition=s}else t.current=n;if(yl&&(yl=!1,pr=t,Ou=i),s=t.pendingLanes,s===0&&(Sr=null),JI(n.stateNode),ft(t,Te()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ru)throw Ru=!1,t=bh,bh=null,t;return Ou&1&&t.tag!==0&&ps(),s=t.pendingLanes,s&1?t===kh?Fo++:(Fo=0,kh=t):Fo=0,Br(),null}function ps(){if(pr!==null){var t=Q1(Ou),e=$t.transition,n=re;try{if($t.transition=null,re=16>t?16:t,pr===null)var r=!1;else{if(t=pr,pr=null,Ou=0,X&6)throw Error(k(331));var i=X;for(X|=4,A=t.current;A!==null;){var s=A,o=s.child;if(A.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(A=u;A!==null;){var d=A;switch(d.tag){case 0:case 11:case 15:Do(8,d,s)}var c=d.child;if(c!==null)c.return=d,A=c;else for(;A!==null;){d=A;var f=d.sibling,p=d.return;if(lE(d),d===u){A=null;break}if(f!==null){f.return=p,A=f;break}A=p}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var S=_.sibling;_.sibling=null,_=S}while(_!==null)}}A=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Do(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,A=m;break e}A=s.return}}var h=t.current;for(A=h;A!==null;){o=A;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,A=y;else e:for(o=h;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xc(9,a)}}catch(T){Ce(a,a.return,T)}if(a===o){A=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,A=w;break e}A=a.return}}if(X=i,Br(),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot(gc,t)}catch{}r=!0}return r}finally{re=n,$t.transition=e}}return!1}function xy(t,e,n){e=Is(n,e),e=Xw(t,e,1),t=Er(t,e,1),e=nt(),t!==null&&(Aa(t,1,e),ft(t,e))}function Ce(t,e,n){if(t.tag===3)xy(t,t,n);else for(;e!==null;){if(e.tag===3){xy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sr===null||!Sr.has(r))){t=Is(n,t),t=Jw(e,t,1),e=Er(e,t,1),t=nt(),e!==null&&(Aa(e,1,t),ft(e,t));break}}e=e.return}}function Tk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=nt(),t.pingedLanes|=t.suspendedLanes&n,Fe===t&&(We&n)===n&&(Oe===4||Oe===3&&(We&130023424)===We&&500>Te()-_m?li(t,0):vm|=n),ft(t,e)}function vE(t,e){e===0&&(t.mode&1?(e=al,al<<=1,!(al&130023424)&&(al=4194304)):e=1);var n=nt();t=jn(t,e),t!==null&&(Aa(t,e,n),ft(t,n))}function Ik(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),vE(t,n)}function bk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),vE(t,n)}var _E;_E=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ct.current)at=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return at=!1,pk(t,e,n);at=!!(t.flags&131072)}else at=!1,ve&&e.flags&1048576&&Sw(e,Su,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ul(t,e),t=e.pendingProps;var i=Ss(e,Qe.current);hs(e,n),i=fm(null,e,r,t,i,n);var s=hm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dt(r)?(s=!0,wu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,am(e),i.updater=Sc,e.stateNode=i,i._reactInternals=e,gh(e,r,t,n),e=_h(null,e,r,!0,s,n)):(e.tag=0,ve&&s&&em(e),et(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ul(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Pk(r),t=Vt(r,t),i){case 0:e=vh(null,e,r,t,n);break e;case 1:e=py(null,e,r,t,n);break e;case 11:e=fy(null,e,r,t,n);break e;case 14:e=hy(null,e,r,Vt(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),vh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),py(t,e,r,i,n);case 3:e:{if(nE(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Iw(t,e),Tu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Is(Error(k(423)),e),e=my(t,e,r,n,i);break e}else if(r!==i){i=Is(Error(k(424)),e),e=my(t,e,r,n,i);break e}else for(wt=wr(e.stateNode.containerInfo.firstChild),Tt=e,ve=!0,Gt=null,n=Rw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cs(),r===i){e=Un(t,e,n);break e}et(t,e,r,n)}e=e.child}return e;case 5:return Ow(e),t===null&&hh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,lh(r,i)?o=null:s!==null&&lh(r,s)&&(e.flags|=32),tE(t,e),et(t,e,o,n),e.child;case 6:return t===null&&hh(e),null;case 13:return rE(t,e,n);case 4:return lm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=xs(e,null,r,n):et(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),fy(t,e,r,i,n);case 7:return et(t,e,e.pendingProps,n),e.child;case 8:return et(t,e,e.pendingProps.children,n),e.child;case 12:return et(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,de(Cu,r._currentValue),r._currentValue=o,s!==null)if(tn(s.value,o)){if(s.children===i.children&&!ct.current){e=Un(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Ln(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ph(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ph(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}et(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,hs(e,n),i=jt(i),r=r(i),e.flags|=1,et(t,e,r,n),e.child;case 14:return r=e.type,i=Vt(r,e.pendingProps),i=Vt(r.type,i),hy(t,e,r,i,n);case 15:return Zw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Ul(t,e),e.tag=1,dt(r)?(t=!0,wu(e)):t=!1,hs(e,n),kw(e,r,i),gh(e,r,i,n),_h(null,e,r,!0,t,n);case 19:return iE(t,e,n);case 22:return eE(t,e,n)}throw Error(k(156,e.tag))};function wE(t,e){return G1(t,e)}function kk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(t,e,n,r){return new kk(t,e,n,r)}function Cm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Pk(t){if(typeof t=="function")return Cm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Bp)return 11;if(t===Wp)return 14}return 2}function xr(t,e){var n=t.alternate;return n===null?(n=Ft(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Wl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Cm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ki:return ui(n.children,i,s,e);case zp:o=8,i|=8;break;case Uf:return t=Ft(12,n,e,i|2),t.elementType=Uf,t.lanes=s,t;case zf:return t=Ft(13,n,e,i),t.elementType=zf,t.lanes=s,t;case Bf:return t=Ft(19,n,e,i),t.elementType=Bf,t.lanes=s,t;case P1:return Ic(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case b1:o=10;break e;case k1:o=9;break e;case Bp:o=11;break e;case Wp:o=14;break e;case rr:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=Ft(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ui(t,e,n,r){return t=Ft(7,t,r,e),t.lanes=n,t}function Ic(t,e,n,r){return t=Ft(22,t,r,e),t.elementType=P1,t.lanes=n,t.stateNode={isHidden:!1},t}function Zd(t,e,n){return t=Ft(6,t,null,e),t.lanes=n,t}function ef(t,e,n){return e=Ft(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Rk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ld(0),this.expirationTimes=Ld(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ld(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function xm(t,e,n,r,i,s,o,a,l){return t=new Rk(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ft(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},am(s),t}function Ok(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function EE(t){if(!t)return Ar;t=t._reactInternals;e:{if(Oi(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(dt(n))return ww(t,n,e)}return e}function SE(t,e,n,r,i,s,o,a,l){return t=xm(n,r,!0,t,i,s,o,a,l),t.context=EE(null),n=t.current,r=nt(),i=Cr(n),s=Ln(r,i),s.callback=e??null,Er(n,s,i),t.current.lanes=i,Aa(t,i,r),ft(t,r),t}function bc(t,e,n,r){var i=e.current,s=nt(),o=Cr(i);return n=EE(n),e.context===null?e.context=n:e.pendingContext=n,e=Ln(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Er(i,e,o),t!==null&&(Jt(t,i,o,s),Fl(t,i,o)),o}function Au(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ty(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Tm(t,e){Ty(t,e),(t=t.alternate)&&Ty(t,e)}function Nk(){return null}var CE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Im(t){this._internalRoot=t}kc.prototype.render=Im.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));bc(t,e,null,null)};kc.prototype.unmount=Im.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_i(function(){bc(null,t,null,null)}),e[$n]=null}};function kc(t){this._internalRoot=t}kc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Z1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<or.length&&e!==0&&e<or[n].priority;n++);or.splice(n,0,t),n===0&&tw(t)}};function bm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Pc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Iy(){}function Ak(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Au(o);s.call(u)}}var o=SE(e,r,t,0,null,!1,!1,"",Iy);return t._reactRootContainer=o,t[$n]=o.current,ta(t.nodeType===8?t.parentNode:t),_i(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Au(l);a.call(u)}}var l=xm(t,0,!1,null,null,!1,!1,"",Iy);return t._reactRootContainer=l,t[$n]=l.current,ta(t.nodeType===8?t.parentNode:t),_i(function(){bc(e,l,n,r)}),l}function Rc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Au(o);a.call(l)}}bc(e,o,t,i)}else o=Ak(n,e,t,i,r);return Au(o)}X1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=So(e.pendingLanes);n!==0&&(Gp(e,n|1),ft(e,Te()),!(X&6)&&(bs=Te()+500,Br()))}break;case 13:_i(function(){var r=jn(t,1);if(r!==null){var i=nt();Jt(r,t,1,i)}}),Tm(t,1)}};Kp=function(t){if(t.tag===13){var e=jn(t,134217728);if(e!==null){var n=nt();Jt(e,t,134217728,n)}Tm(t,134217728)}};J1=function(t){if(t.tag===13){var e=Cr(t),n=jn(t,e);if(n!==null){var r=nt();Jt(n,t,e,r)}Tm(t,e)}};Z1=function(){return re};ew=function(t,e){var n=re;try{return re=t,e()}finally{re=n}};Jf=function(t,e,n){switch(e){case"input":if(Hf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=wc(r);if(!i)throw Error(k(90));O1(r),Hf(r,i)}}}break;case"textarea":A1(t,n);break;case"select":e=n.value,e!=null&&us(t,!!n.multiple,e,!1)}};U1=wm;z1=_i;var Lk={usingClientEntryPoint:!1,Events:[Da,Xi,wc,$1,j1,wm]},ho={findFiberByHostInstance:ni,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Dk={bundleType:ho.bundleType,version:ho.version,rendererPackageName:ho.rendererPackageName,rendererConfig:ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=V1(t),t===null?null:t.stateNode},findFiberByHostInstance:ho.findFiberByHostInstance||Nk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{gc=vl.inject(Dk),fn=vl}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lk;Rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bm(e))throw Error(k(200));return Ok(t,e,null,n)};Rt.createRoot=function(t,e){if(!bm(t))throw Error(k(299));var n=!1,r="",i=CE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=xm(t,1,!1,null,null,n,!1,r,i),t[$n]=e.current,ta(t.nodeType===8?t.parentNode:t),new Im(e)};Rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=V1(e),t=t===null?null:t.stateNode,t};Rt.flushSync=function(t){return _i(t)};Rt.hydrate=function(t,e,n){if(!Pc(e))throw Error(k(200));return Rc(null,t,e,!0,n)};Rt.hydrateRoot=function(t,e,n){if(!bm(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=CE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=SE(e,null,t,1,n??null,i,!1,s,o),t[$n]=e.current,ta(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new kc(e)};Rt.render=function(t,e,n){if(!Pc(e))throw Error(k(200));return Rc(null,t,e,!1,n)};Rt.unmountComponentAtNode=function(t){if(!Pc(t))throw Error(k(40));return t._reactRootContainer?(_i(function(){Rc(null,null,t,!1,function(){t._reactRootContainer=null,t[$n]=null})}),!0):!1};Rt.unstable_batchedUpdates=wm;Rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Pc(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return Rc(t,e,n,!1,r)};Rt.version="18.2.0-next-9e3b772b8-20220608";function xE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xE)}catch(t){console.error(t)}}xE(),S1.exports=Rt;var TE=S1.exports,by=TE;$f.createRoot=by.createRoot,$f.hydrateRoot=by.hydrateRoot;/**
 * @remix-run/router v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ca(){return ca=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ca.apply(this,arguments)}var mr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(mr||(mr={}));const ky="popstate";function Mk(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Oh("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Lu(i)}return $k(e,n,null,t)}function Ee(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function km(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Fk(){return Math.random().toString(36).substr(2,8)}function Py(t,e){return{usr:t.state,key:t.key,idx:e}}function Oh(t,e,n,r){return n===void 0&&(n=null),ca({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ks(e):e,{state:n,key:e&&e.key||r||Fk()})}function Lu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ks(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function $k(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=mr.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(ca({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function c(){a=mr.Pop;let S=d(),m=S==null?null:S-u;u=S,l&&l({action:a,location:_.location,delta:m})}function f(S,m){a=mr.Push;let h=Oh(_.location,S,m);n&&n(h,S),u=d()+1;let y=Py(h,u),w=_.createHref(h);try{o.pushState(y,"",w)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(w)}s&&l&&l({action:a,location:_.location,delta:1})}function p(S,m){a=mr.Replace;let h=Oh(_.location,S,m);n&&n(h,S),u=d();let y=Py(h,u),w=_.createHref(h);o.replaceState(y,"",w),s&&l&&l({action:a,location:_.location,delta:0})}function v(S){let m=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof S=="string"?S:Lu(S);return Ee(m,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,m)}let _={get action(){return a},get location(){return t(i,o)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(ky,c),l=S,()=>{i.removeEventListener(ky,c),l=null}},createHref(S){return e(i,S)},createURL:v,encodeLocation(S){let m=v(S);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:p,go(S){return o.go(S)}};return _}var Ry;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ry||(Ry={}));function jk(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ks(e):e,i=ks(r.pathname||"/",n);if(i==null)return null;let s=IE(t);Uk(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Yk(s[a],Xk(i));return o}function IE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ee(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Tr([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(Ee(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),IE(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Kk(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of bE(s.path))i(s,o,l)}),e}function bE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=bE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Uk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:qk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const zk=/^:[\w-]+$/,Bk=3,Wk=2,Vk=1,Hk=10,Gk=-2,Oy=t=>t==="*";function Kk(t,e){let n=t.split("/"),r=n.length;return n.some(Oy)&&(r+=Gk),e&&(r+=Wk),n.filter(i=>!Oy(i)).reduce((i,s)=>i+(zk.test(s)?Bk:s===""?Vk:Hk),r)}function qk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Yk(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=Nh({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let c=a.route;s.push({params:r,pathname:Tr([i,d.pathname]),pathnameBase:n2(Tr([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=Tr([i,d.pathnameBase]))}return s}function Nh(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Qk(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:f,isOptional:p}=d;if(f==="*"){let _=a[c]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const v=a[c];return p&&!v?u[f]=void 0:u[f]=Jk(v||"",f),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Qk(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),km(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Xk(t){try{return decodeURI(t)}catch(e){return km(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Jk(t,e){try{return decodeURIComponent(t)}catch(n){return km(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function ks(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Zk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ks(t):t;return{pathname:n?n.startsWith("/")?n:e2(n,e):e,search:r2(r),hash:i2(i)}}function e2(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function tf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function t2(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Pm(t,e){let n=t2(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Rm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ks(t):(i=ca({},t),Ee(!i.pathname||!i.pathname.includes("?"),tf("?","pathname","search",i)),Ee(!i.pathname||!i.pathname.includes("#"),tf("#","pathname","hash",i)),Ee(!i.search||!i.search.includes("#"),tf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let c=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),c-=1;i.pathname=f.join("/")}a=c>=0?e[c]:"/"}let l=Zk(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Tr=t=>t.join("/").replace(/\/\/+/g,"/"),n2=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),r2=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,i2=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function s2(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const kE=["post","put","patch","delete"];new Set(kE);const o2=["get",...kE];new Set(o2);/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function da(){return da=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},da.apply(this,arguments)}const Oc=E.createContext(null),PE=E.createContext(null),Gn=E.createContext(null),Nc=E.createContext(null),Kn=E.createContext({outlet:null,matches:[],isDataRoute:!1}),RE=E.createContext(null);function a2(t,e){let{relative:n}=e===void 0?{}:e;qs()||Ee(!1);let{basename:r,navigator:i}=E.useContext(Gn),{hash:s,pathname:o,search:a}=Ac(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Tr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function qs(){return E.useContext(Nc)!=null}function Ys(){return qs()||Ee(!1),E.useContext(Nc).location}function OE(t){E.useContext(Gn).static||E.useLayoutEffect(t)}function NE(){let{isDataRoute:t}=E.useContext(Kn);return t?S2():l2()}function l2(){qs()||Ee(!1);let t=E.useContext(Oc),{basename:e,future:n,navigator:r}=E.useContext(Gn),{matches:i}=E.useContext(Kn),{pathname:s}=Ys(),o=JSON.stringify(Pm(i,n.v7_relativeSplatPath)),a=E.useRef(!1);return OE(()=>{a.current=!0}),E.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=Rm(u,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Tr([e,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[e,r,o,s,t])}const u2=E.createContext(null);function c2(t){let e=E.useContext(Kn).outlet;return e&&E.createElement(u2.Provider,{value:t},e)}function Ac(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=E.useContext(Gn),{matches:i}=E.useContext(Kn),{pathname:s}=Ys(),o=JSON.stringify(Pm(i,r.v7_relativeSplatPath));return E.useMemo(()=>Rm(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function d2(t,e){return f2(t,e)}function f2(t,e,n,r){qs()||Ee(!1);let{navigator:i}=E.useContext(Gn),{matches:s}=E.useContext(Kn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Ys(),d;if(e){var c;let S=typeof e=="string"?Ks(e):e;l==="/"||(c=S.pathname)!=null&&c.startsWith(l)||Ee(!1),d=S}else d=u;let f=d.pathname||"/",p=l==="/"?f:f.slice(l.length)||"/",v=jk(t,{pathname:p}),_=y2(v&&v.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:Tr([l,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:Tr([l,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),s,n,r);return e&&_?E.createElement(Nc.Provider,{value:{location:da({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:mr.Pop}},_):_}function h2(){let t=E2(),e=s2(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),n?E.createElement("pre",{style:i},n):null,null)}const p2=E.createElement(h2,null);class m2 extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?E.createElement(Kn.Provider,{value:this.props.routeContext},E.createElement(RE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function g2(t){let{routeContext:e,match:n,children:r}=t,i=E.useContext(Oc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(Kn.Provider,{value:e},r)}function y2(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id]));d>=0||Ee(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let c=o[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:f,errors:p}=n,v=c.route.loader&&f[c.route.id]===void 0&&(!p||p[c.route.id]===void 0);if(c.route.lazy||v){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,c,f)=>{let p,v=!1,_=null,S=null;n&&(p=a&&c.route.id?a[c.route.id]:void 0,_=c.route.errorElement||p2,l&&(u<0&&f===0?(C2("route-fallback",!1),v=!0,S=null):u===f&&(v=!0,S=c.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,f+1)),h=()=>{let y;return p?y=_:v?y=S:c.route.Component?y=E.createElement(c.route.Component,null):c.route.element?y=c.route.element:y=d,E.createElement(g2,{match:c,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:y})};return n&&(c.route.ErrorBoundary||c.route.errorElement||f===0)?E.createElement(m2,{location:n.location,revalidation:n.revalidation,component:_,error:p,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):h()},null)}var AE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(AE||{}),Du=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Du||{});function v2(t){let e=E.useContext(Oc);return e||Ee(!1),e}function _2(t){let e=E.useContext(PE);return e||Ee(!1),e}function w2(t){let e=E.useContext(Kn);return e||Ee(!1),e}function LE(t){let e=w2(),n=e.matches[e.matches.length-1];return n.route.id||Ee(!1),n.route.id}function E2(){var t;let e=E.useContext(RE),n=_2(Du.UseRouteError),r=LE(Du.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function S2(){let{router:t}=v2(AE.UseNavigateStable),e=LE(Du.UseNavigateStable),n=E.useRef(!1);return OE(()=>{n.current=!0}),E.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,da({fromRouteId:e},s)))},[t,e])}const Ny={};function C2(t,e,n){!e&&!Ny[t]&&(Ny[t]=!0)}function Ah(t){let{to:e,replace:n,state:r,relative:i}=t;qs()||Ee(!1);let{future:s,static:o}=E.useContext(Gn),{matches:a}=E.useContext(Kn),{pathname:l}=Ys(),u=NE(),d=Rm(e,Pm(a,s.v7_relativeSplatPath),l,i==="path"),c=JSON.stringify(d);return E.useEffect(()=>u(JSON.parse(c),{replace:n,state:r,relative:i}),[u,c,i,n,r]),null}function x2(t){return c2(t.context)}function xo(t){Ee(!1)}function T2(t){let{basename:e="/",children:n=null,location:r,navigationType:i=mr.Pop,navigator:s,static:o=!1,future:a}=t;qs()&&Ee(!1);let l=e.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:l,navigator:s,static:o,future:da({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Ks(r));let{pathname:d="/",search:c="",hash:f="",state:p=null,key:v="default"}=r,_=E.useMemo(()=>{let S=ks(d,l);return S==null?null:{location:{pathname:S,search:c,hash:f,state:p,key:v},navigationType:i}},[l,d,c,f,p,v,i]);return _==null?null:E.createElement(Gn.Provider,{value:u},E.createElement(Nc.Provider,{children:n,value:_}))}function I2(t){let{children:e,location:n}=t;return d2(Lh(e),n)}new Promise(()=>{});function Lh(t,e){e===void 0&&(e=[]);let n=[];return E.Children.forEach(t,(r,i)=>{if(!E.isValidElement(r))return;let s=[...e,i];if(r.type===E.Fragment){n.push.apply(n,Lh(r.props.children,s));return}r.type!==xo&&Ee(!1),!r.props.index||!r.props.children||Ee(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Lh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mu(){return Mu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Mu.apply(this,arguments)}function DE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function b2(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function k2(t,e){return t.button===0&&(!e||e==="_self")&&!b2(t)}const P2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],R2=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],O2="6";try{window.__reactRouterVersion=O2}catch{}const N2=E.createContext({isTransitioning:!1}),A2="startTransition",Ay=Ff[A2];function L2(t){let{basename:e,children:n,future:r,window:i}=t,s=E.useRef();s.current==null&&(s.current=Mk({window:i,v5Compat:!0}));let o=s.current,[a,l]=E.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=E.useCallback(c=>{u&&Ay?Ay(()=>l(c)):l(c)},[l,u]);return E.useLayoutEffect(()=>o.listen(d),[o,d]),E.createElement(T2,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const D2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",M2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ME=E.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:d,unstable_viewTransition:c}=e,f=DE(e,P2),{basename:p}=E.useContext(Gn),v,_=!1;if(typeof u=="string"&&M2.test(u)&&(v=u,D2))try{let y=new URL(window.location.href),w=u.startsWith("//")?new URL(y.protocol+u):new URL(u),T=ks(w.pathname,p);w.origin===y.origin&&T!=null?u=T+w.search+w.hash:_=!0}catch{}let S=a2(u,{relative:i}),m=$2(u,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,unstable_viewTransition:c});function h(y){r&&r(y),y.defaultPrevented||m(y)}return E.createElement("a",Mu({},f,{href:v||S,onClick:_||s?r:h,ref:n,target:l}))}),Om=E.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:d}=e,c=DE(e,R2),f=Ac(l,{relative:c.relative}),p=Ys(),v=E.useContext(PE),{navigator:_,basename:S}=E.useContext(Gn),m=v!=null&&j2(f)&&u===!0,h=_.encodeLocation?_.encodeLocation(f).pathname:f.pathname,y=p.pathname,w=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(y=y.toLowerCase(),w=w?w.toLowerCase():null,h=h.toLowerCase()),w&&S&&(w=ks(w,S)||w);const T=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let C=y===h||!o&&y.startsWith(h)&&y.charAt(T)==="/",x=w!=null&&(w===h||!o&&w.startsWith(h)&&w.charAt(h.length)==="/"),b={isActive:C,isPending:x,isTransitioning:m},L=C?r:void 0,F;typeof s=="function"?F=s(b):F=[s,C?"active":null,x?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let B=typeof a=="function"?a(b):a;return E.createElement(ME,Mu({},c,{"aria-current":L,className:F,ref:n,style:B,to:l,unstable_viewTransition:u}),typeof d=="function"?d(b):d)});var Dh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Dh||(Dh={}));var Ly;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ly||(Ly={}));function F2(t){let e=E.useContext(Oc);return e||Ee(!1),e}function $2(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=NE(),u=Ys(),d=Ac(t,{relative:o});return E.useCallback(c=>{if(k2(c,n)){c.preventDefault();let f=r!==void 0?r:Lu(u)===Lu(d);l(t,{replace:f,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,d,r,i,n,t,s,o,a])}function j2(t,e){e===void 0&&(e={});let n=E.useContext(N2);n==null&&Ee(!1);let{basename:r}=F2(Dh.useViewTransitionState),i=Ac(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=ks(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=ks(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Nh(i.pathname,o)!=null||Nh(i.pathname,s)!=null}var FE={exports:{}},U2="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",z2=U2,B2=z2;function $E(){}function jE(){}jE.resetWarningCache=$E;var W2=function(){function t(r,i,s,o,a,l){if(l!==B2){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:jE,resetWarningCache:$E};return n.PropTypes=n,n};FE.exports=W2();var V2=FE.exports;const G=Ws(V2),H2=()=>g.jsxs("svg",{width:"20.000000",height:"20.000000",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[g.jsx("desc",{children:"Created with Pixso."}),g.jsx("defs",{children:g.jsx("clipPath",{id:"clip27_256",children:g.jsx("rect",{id:"log-in-01",width:"20.000000",height:"20.000000",fill:"white",fillOpacity:"0"})})}),g.jsx("rect",{id:"log-in-01",width:"20.000000",height:"20.000000",fill:"#FFFFFF",fillOpacity:"0"}),g.jsxs("g",{clipPath:"url(#clip27_256)",children:[g.jsx("path",{id:"Accent",d:"M12.5 2.5L13.5 2.5C14.9001 2.5 15.6002 2.5 16.135 2.77246C16.6053 3.01221 16.9878 3.39453 17.2275 3.86499C17.5 4.3999 17.5 5.09985 17.5 6.5L17.5 13.5C17.5 14.9001 17.5 15.6001 17.2275 16.135C16.9878 16.6055 16.6053 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5L12.5 17.5",stroke:"#F4C550",strokeOpacity:"1.000000",strokeWidth:"2.000000",strokeLinejoin:"round",strokeLinecap:"round"}),g.jsx("path",{id:"Icon",d:"M8.33337 5.83325L12.5 10L8.33337 14.1665M2.5 10L12.5 10",stroke:"#F4C550",strokeOpacity:"1.000000",strokeWidth:"2.000000",strokeLinejoin:"round"})]})]}),G2=()=>g.jsxs("svg",{width:"28.000000",height:"28.000000",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[g.jsx("desc",{children:"Created with Pixso."}),g.jsx("defs",{children:g.jsx("clipPath",{id:"clip4_550",children:g.jsx("rect",{id:"ukraine",width:"28.000000",height:"28.000000",fill:"white",fillOpacity:"0"})})}),g.jsx("rect",{id:"ukraine",width:"28.000000",height:"28.000000",fill:"#FFFFFF",fillOpacity:"0"}),g.jsxs("g",{clipPath:"url(#clip4_550)",children:[g.jsx("path",{id:"Vector",d:"M28 14C28 21.7319 21.732 28 14 28C6.26801 28 0 21.7319 0 14C0 6.26807 6.26801 0 14 0C21.732 0 28 6.26807 28 14Z",fill:"#FFDA44",fillOpacity:"1.000000",fillRule:"evenodd"}),g.jsx("path",{id:"Vector",d:"M0 14C0 6.26807 6.26807 0 14 0C21.7319 0 28 6.26807 28 14L0 14Z",fill:"#338AF3",fillOpacity:"1.000000",fillRule:"nonzero"})]})]});var lt=function(){return lt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},lt.apply(this,arguments)};function Nm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function fa(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var K2=function(e,n,r,i){var s=r?r.call(i,e,n):void 0;if(s!==void 0)return!!s;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;var o=Object.keys(e),a=Object.keys(n);if(o.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(n),u=0;u<o.length;u++){var d=o[u];if(!l(d))return!1;var c=e[d],f=n[d];if(s=r?r.call(i,c,f,d):void 0,s===!1||s===void 0&&c!==f)return!1}return!0};const q2=Ws(K2);var he="-ms-",$o="-moz-",ee="-webkit-",UE="comm",Lc="rule",Am="decl",Y2="@import",zE="@keyframes",Q2="@layer",BE=Math.abs,Lm=String.fromCharCode,Mh=Object.assign;function X2(t,e){return De(t,0)^45?(((e<<2^De(t,0))<<2^De(t,1))<<2^De(t,2))<<2^De(t,3):0}function WE(t){return t.trim()}function bn(t,e){return(t=e.exec(t))?t[0]:t}function W(t,e,n){return t.replace(e,n)}function Vl(t,e,n){return t.indexOf(e,n)}function De(t,e){return t.charCodeAt(e)|0}function Ps(t,e,n){return t.slice(e,n)}function cn(t){return t.length}function VE(t){return t.length}function To(t,e){return e.push(t),t}function J2(t,e){return t.map(e).join("")}function Dy(t,e){return t.filter(function(n){return!bn(n,e)})}var Dc=1,Rs=1,HE=0,zt=0,Ie=0,Qs="";function Mc(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Dc,column:Rs,length:o,return:"",siblings:a}}function nr(t,e){return Mh(Mc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Wi(t){for(;t.root;)t=nr(t.root,{children:[t]});To(t,t.siblings)}function Z2(){return Ie}function eP(){return Ie=zt>0?De(Qs,--zt):0,Rs--,Ie===10&&(Rs=1,Dc--),Ie}function Zt(){return Ie=zt<HE?De(Qs,zt++):0,Rs++,Ie===10&&(Rs=1,Dc++),Ie}function ci(){return De(Qs,zt)}function Hl(){return zt}function Fc(t,e){return Ps(Qs,t,e)}function Fh(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function tP(t){return Dc=Rs=1,HE=cn(Qs=t),zt=0,[]}function nP(t){return Qs="",t}function nf(t){return WE(Fc(zt-1,$h(t===91?t+2:t===40?t+1:t)))}function rP(t){for(;(Ie=ci())&&Ie<33;)Zt();return Fh(t)>2||Fh(Ie)>3?"":" "}function iP(t,e){for(;--e&&Zt()&&!(Ie<48||Ie>102||Ie>57&&Ie<65||Ie>70&&Ie<97););return Fc(t,Hl()+(e<6&&ci()==32&&Zt()==32))}function $h(t){for(;Zt();)switch(Ie){case t:return zt;case 34:case 39:t!==34&&t!==39&&$h(Ie);break;case 40:t===41&&$h(t);break;case 92:Zt();break}return zt}function sP(t,e){for(;Zt()&&t+Ie!==57;)if(t+Ie===84&&ci()===47)break;return"/*"+Fc(e,zt-1)+"*"+Lm(t===47?t:Zt())}function oP(t){for(;!Fh(ci());)Zt();return Fc(t,zt)}function aP(t){return nP(Gl("",null,null,null,[""],t=tP(t),0,[0],t))}function Gl(t,e,n,r,i,s,o,a,l){for(var u=0,d=0,c=o,f=0,p=0,v=0,_=1,S=1,m=1,h=0,y="",w=i,T=s,C=r,x=y;S;)switch(v=h,h=Zt()){case 40:if(v!=108&&De(x,c-1)==58){Vl(x+=W(nf(h),"&","&\f"),"&\f",BE(u?a[u-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:x+=nf(h);break;case 9:case 10:case 13:case 32:x+=rP(v);break;case 92:x+=iP(Hl()-1,7);continue;case 47:switch(ci()){case 42:case 47:To(lP(sP(Zt(),Hl()),e,n,l),l);break;default:x+="/"}break;case 123*_:a[u++]=cn(x)*m;case 125*_:case 59:case 0:switch(h){case 0:case 125:S=0;case 59+d:m==-1&&(x=W(x,/\f/g,"")),p>0&&cn(x)-c&&To(p>32?Fy(x+";",r,n,c-1,l):Fy(W(x," ","")+";",r,n,c-2,l),l);break;case 59:x+=";";default:if(To(C=My(x,e,n,u,d,i,a,y,w=[],T=[],c,s),s),h===123)if(d===0)Gl(x,e,C,C,w,s,c,a,T);else switch(f===99&&De(x,3)===110?100:f){case 100:case 108:case 109:case 115:Gl(t,C,C,r&&To(My(t,C,C,0,0,i,a,y,i,w=[],c,T),T),i,T,c,a,r?w:T);break;default:Gl(x,C,C,C,[""],T,0,a,T)}}u=d=p=0,_=m=1,y=x="",c=o;break;case 58:c=1+cn(x),p=v;default:if(_<1){if(h==123)--_;else if(h==125&&_++==0&&eP()==125)continue}switch(x+=Lm(h),h*_){case 38:m=d>0?1:(x+="\f",-1);break;case 44:a[u++]=(cn(x)-1)*m,m=1;break;case 64:ci()===45&&(x+=nf(Zt())),f=ci(),d=c=cn(y=x+=oP(Hl())),h++;break;case 45:v===45&&cn(x)==2&&(_=0)}}return s}function My(t,e,n,r,i,s,o,a,l,u,d,c){for(var f=i-1,p=i===0?s:[""],v=VE(p),_=0,S=0,m=0;_<r;++_)for(var h=0,y=Ps(t,f+1,f=BE(S=o[_])),w=t;h<v;++h)(w=WE(S>0?p[h]+" "+y:W(y,/&\f/g,p[h])))&&(l[m++]=w);return Mc(t,e,n,i===0?Lc:a,l,u,d,c)}function lP(t,e,n,r){return Mc(t,e,n,UE,Lm(Z2()),Ps(t,2,-2),0,r)}function Fy(t,e,n,r,i){return Mc(t,e,n,Am,Ps(t,0,r),Ps(t,r+1,-1),r,i)}function GE(t,e,n){switch(X2(t,e)){case 5103:return ee+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ee+t+t;case 4789:return $o+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ee+t+$o+t+he+t+t;case 5936:switch(De(t,e+11)){case 114:return ee+t+he+W(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ee+t+he+W(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ee+t+he+W(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ee+t+he+t+t;case 6165:return ee+t+he+"flex-"+t+t;case 5187:return ee+t+W(t,/(\w+).+(:[^]+)/,ee+"box-$1$2"+he+"flex-$1$2")+t;case 5443:return ee+t+he+"flex-item-"+W(t,/flex-|-self/g,"")+(bn(t,/flex-|baseline/)?"":he+"grid-row-"+W(t,/flex-|-self/g,""))+t;case 4675:return ee+t+he+"flex-line-pack"+W(t,/align-content|flex-|-self/g,"")+t;case 5548:return ee+t+he+W(t,"shrink","negative")+t;case 5292:return ee+t+he+W(t,"basis","preferred-size")+t;case 6060:return ee+"box-"+W(t,"-grow","")+ee+t+he+W(t,"grow","positive")+t;case 4554:return ee+W(t,/([^-])(transform)/g,"$1"+ee+"$2")+t;case 6187:return W(W(W(t,/(zoom-|grab)/,ee+"$1"),/(image-set)/,ee+"$1"),t,"")+t;case 5495:case 3959:return W(t,/(image-set\([^]*)/,ee+"$1$`$1");case 4968:return W(W(t,/(.+:)(flex-)?(.*)/,ee+"box-pack:$3"+he+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ee+t+t;case 4200:if(!bn(t,/flex-|baseline/))return he+"grid-column-align"+Ps(t,e)+t;break;case 2592:case 3360:return he+W(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,bn(r.props,/grid-\w+-end/)})?~Vl(t+(n=n[e].value),"span",0)?t:he+W(t,"-start","")+t+he+"grid-row-span:"+(~Vl(n,"span",0)?bn(n,/\d+/):+bn(n,/\d+/)-+bn(t,/\d+/))+";":he+W(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return bn(r.props,/grid-\w+-start/)})?t:he+W(W(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return W(t,/(.+)-inline(.+)/,ee+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(cn(t)-1-e>6)switch(De(t,e+1)){case 109:if(De(t,e+4)!==45)break;case 102:return W(t,/(.+:)(.+)-([^]+)/,"$1"+ee+"$2-$3$1"+$o+(De(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Vl(t,"stretch",0)?GE(W(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return W(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return he+i+":"+s+u+(o?he+i+"-span:"+(a?l:+l-+s)+u:"")+t});case 4949:if(De(t,e+6)===121)return W(t,":",":"+ee)+t;break;case 6444:switch(De(t,De(t,14)===45?18:11)){case 120:return W(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ee+(De(t,14)===45?"inline-":"")+"box$3$1"+ee+"$2$3$1"+he+"$2box$3")+t;case 100:return W(t,":",":"+he)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return W(t,"scroll-","scroll-snap-")+t}return t}function Fu(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function uP(t,e,n,r){switch(t.type){case Q2:if(t.children.length)break;case Y2:case Am:return t.return=t.return||t.value;case UE:return"";case zE:return t.return=t.value+"{"+Fu(t.children,r)+"}";case Lc:if(!cn(t.value=t.props.join(",")))return""}return cn(n=Fu(t.children,r))?t.return=t.value+"{"+n+"}":""}function cP(t){var e=VE(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function dP(t){return function(e){e.root||(e=e.return)&&t(e)}}function fP(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Am:t.return=GE(t.value,t.length,n);return;case zE:return Fu([nr(t,{value:W(t.value,"@","@"+ee)})],r);case Lc:if(t.length)return J2(n=t.props,function(i){switch(bn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Wi(nr(t,{props:[W(i,/:(read-\w+)/,":"+$o+"$1")]})),Wi(nr(t,{props:[i]})),Mh(t,{props:Dy(n,r)});break;case"::placeholder":Wi(nr(t,{props:[W(i,/:(plac\w+)/,":"+ee+"input-$1")]})),Wi(nr(t,{props:[W(i,/:(plac\w+)/,":"+$o+"$1")]})),Wi(nr(t,{props:[W(i,/:(plac\w+)/,he+"input-$1")]})),Wi(nr(t,{props:[i]})),Mh(t,{props:Dy(n,r)});break}return""})}}var hP={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},vt={},Os=typeof process<"u"&&vt!==void 0&&(vt.REACT_APP_SC_ATTR||vt.SC_ATTR)||"data-styled",KE="active",qE="data-styled-version",$c="6.1.8",Dm=`/*!sc*/
`,Mm=typeof window<"u"&&"HTMLElement"in window,pP=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&vt!==void 0&&vt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&vt.REACT_APP_SC_DISABLE_SPEEDY!==""?vt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&vt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&vt!==void 0&&vt.SC_DISABLE_SPEEDY!==void 0&&vt.SC_DISABLE_SPEEDY!==""&&vt.SC_DISABLE_SPEEDY!=="false"&&vt.SC_DISABLE_SPEEDY),jc=Object.freeze([]),Ns=Object.freeze({});function mP(t,e,n){return n===void 0&&(n=Ns),t.theme!==n.theme&&t.theme||e||n.theme}var YE=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),gP=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,yP=/(^-|-$)/g;function $y(t){return t.replace(gP,"-").replace(yP,"")}var vP=/(a)(d)/gi,_l=52,jy=function(t){return String.fromCharCode(t+(t>25?39:97))};function jh(t){var e,n="";for(e=Math.abs(t);e>_l;e=e/_l|0)n=jy(e%_l)+n;return(jy(e%_l)+n).replace(vP,"$1-$2")}var rf,QE=5381,is=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},XE=function(t){return is(QE,t)};function JE(t){return jh(XE(t)>>>0)}function _P(t){return t.displayName||t.name||"Component"}function sf(t){return typeof t=="string"&&!0}var ZE=typeof Symbol=="function"&&Symbol.for,eS=ZE?Symbol.for("react.memo"):60115,wP=ZE?Symbol.for("react.forward_ref"):60112,EP={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},SP={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},tS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},CP=((rf={})[wP]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},rf[eS]=tS,rf);function Uy(t){return("type"in(e=t)&&e.type.$$typeof)===eS?tS:"$$typeof"in t?CP[t.$$typeof]:EP;var e}var xP=Object.defineProperty,TP=Object.getOwnPropertyNames,zy=Object.getOwnPropertySymbols,IP=Object.getOwnPropertyDescriptor,bP=Object.getPrototypeOf,By=Object.prototype;function nS(t,e,n){if(typeof e!="string"){if(By){var r=bP(e);r&&r!==By&&nS(t,r,n)}var i=TP(e);zy&&(i=i.concat(zy(e)));for(var s=Uy(t),o=Uy(e),a=0;a<i.length;++a){var l=i[a];if(!(l in SP||n&&n[l]||o&&l in o||s&&l in s)){var u=IP(e,l);try{xP(t,l,u)}catch{}}}}return t}function As(t){return typeof t=="function"}function Fm(t){return typeof t=="object"&&"styledComponentId"in t}function si(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Uh(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function ha(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function zh(t,e,n){if(n===void 0&&(n=!1),!n&&!ha(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=zh(t[r],e[r]);else if(ha(e))for(var r in e)t[r]=zh(t[r],e[r]);return t}function $m(t,e){Object.defineProperty(t,"toString",{value:e})}function Fa(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var kP=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Fa(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(Dm);return n},t}(),Kl=new Map,$u=new Map,ql=1,wl=function(t){if(Kl.has(t))return Kl.get(t);for(;$u.has(ql);)ql++;var e=ql++;return Kl.set(t,e),$u.set(e,t),e},PP=function(t,e){ql=e+1,Kl.set(t,e),$u.set(e,t)},RP="style[".concat(Os,"][").concat(qE,'="').concat($c,'"]'),OP=new RegExp("^".concat(Os,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),NP=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},AP=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Dm),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(OP);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(PP(d,u),NP(t,d,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function LP(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var rS=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Os,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Os,KE),r.setAttribute(qE,$c);var o=LP();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},DP=function(){function t(e){this.element=rS(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Fa(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),MP=function(){function t(e){this.element=rS(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),FP=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Wy=Mm,$P={isServer:!Mm,useCSSOMInjection:!pP},iS=function(){function t(e,n,r){e===void 0&&(e=Ns),n===void 0&&(n={});var i=this;this.options=lt(lt({},$P),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Mm&&Wy&&(Wy=!1,function(s){for(var o=document.querySelectorAll(RP),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Os)!==KE&&(AP(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),$m(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(c){var f=function(m){return $u.get(m)}(c);if(f===void 0)return"continue";var p=s.names.get(f),v=o.getGroup(c);if(p===void 0||v.length===0)return"continue";var _="".concat(Os,".g").concat(c,'[id="').concat(f,'"]'),S="";p!==void 0&&p.forEach(function(m){m.length>0&&(S+="".concat(m,","))}),l+="".concat(v).concat(_,'{content:"').concat(S,'"}').concat(Dm)},d=0;d<a;d++)u(d);return l}(i)})}return t.registerId=function(e){return wl(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(lt(lt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new FP(i):r?new DP(i):new MP(i)}(this.options),new kP(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(wl(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(wl(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(wl(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),jP=/&/g,UP=/^\s*\/\/.*$/gm;function sS(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=sS(n.children,e)),n})}function oS(t){var e,n,r,i=t===void 0?Ns:t,s=i.options,o=s===void 0?Ns:s,a=i.plugins,l=a===void 0?jc:a,u=function(f,p,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(e):f},d=l.slice();d.push(function(f){f.type===Lc&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(jP,n).replace(r,u))}),o.prefix&&d.push(fP),d.push(uP);var c=function(f,p,v,_){p===void 0&&(p=""),v===void 0&&(v=""),_===void 0&&(_="&"),e=_,n=p,r=new RegExp("\\".concat(n,"\\b"),"g");var S=f.replace(UP,""),m=aP(v||p?"".concat(v," ").concat(p," { ").concat(S," }"):S);o.namespace&&(m=sS(m,o.namespace));var h=[];return Fu(m,cP(d.concat(dP(function(y){return h.push(y)})))),h};return c.hash=l.length?l.reduce(function(f,p){return p.name||Fa(15),is(f,p.name)},QE).toString():"",c}var zP=new iS,Bh=oS(),jm=yn.createContext({shouldForwardProp:void 0,styleSheet:zP,stylis:Bh});jm.Consumer;var BP=yn.createContext(void 0);function Wh(){return E.useContext(jm)}function WP(t){var e=E.useState(t.stylisPlugins),n=e[0],r=e[1],i=Wh().styleSheet,s=E.useMemo(function(){var l=i;return t.sheet?l=t.sheet:t.target&&(l=l.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(l=l.reconstructWithOptions({useCSSOMInjection:!1})),l},[t.disableCSSOMInjection,t.sheet,t.target,i]),o=E.useMemo(function(){return oS({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:n})},[t.enableVendorPrefixes,t.namespace,n]);E.useEffect(function(){q2(n,t.stylisPlugins)||r(t.stylisPlugins)},[t.stylisPlugins]);var a=E.useMemo(function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:s,stylis:o}},[t.shouldForwardProp,s,o]);return yn.createElement(jm.Provider,{value:a},yn.createElement(BP.Provider,{value:o},t.children))}var aS=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Bh);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,$m(this,function(){throw Fa(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Bh),this.name+e.hash},t}(),VP=function(t){return t>="A"&&t<="Z"};function Vy(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;VP(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var lS=function(t){return t==null||t===!1||t===""},uS=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!lS(s)&&(Array.isArray(s)&&s.isCss||As(s)?r.push("".concat(Vy(i),":"),s,";"):ha(s)?r.push.apply(r,fa(fa(["".concat(i," {")],uS(s),!1),["}"],!1)):r.push("".concat(Vy(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in hP||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function di(t,e,n,r){if(lS(t))return[];if(Fm(t))return[".".concat(t.styledComponentId)];if(As(t)){if(!As(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return di(i,e,n,r)}var s;return t instanceof aS?n?(t.inject(n,r),[t.getName(r)]):[t]:ha(t)?uS(t):Array.isArray(t)?Array.prototype.concat.apply(jc,t.map(function(o){return di(o,e,n,r)})):[t.toString()]}function HP(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(As(n)&&!Fm(n))return!1}return!0}var GP=XE($c),KP=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&HP(e),this.componentId=n,this.baseHash=is(GP,n),this.baseStyle=r,iS.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=si(i,this.staticRulesId);else{var s=Uh(di(this.rules,e,n,r)),o=jh(is(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=si(i,o),this.staticRulesId=o}else{for(var l=is(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var c=this.rules[d];if(typeof c=="string")u+=c;else if(c){var f=Uh(di(c,e,n,r));l=is(l,f+d),u+=f}}if(u){var p=jh(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,r(u,".".concat(p),void 0,this.componentId)),i=si(i,p)}}return i},t}(),cS=yn.createContext(void 0);cS.Consumer;var of={};function qP(t,e,n){var r=Fm(t),i=t,s=!sf(t),o=e.attrs,a=o===void 0?jc:o,l=e.componentId,u=l===void 0?function(w,T){var C=typeof w!="string"?"sc":$y(w);of[C]=(of[C]||0)+1;var x="".concat(C,"-").concat(JE($c+C+of[C]));return T?"".concat(T,"-").concat(x):x}(e.displayName,e.parentComponentId):l,d=e.displayName,c=d===void 0?function(w){return sf(w)?"styled.".concat(w):"Styled(".concat(_P(w),")")}(t):d,f=e.displayName&&e.componentId?"".concat($y(e.displayName),"-").concat(e.componentId):e.componentId||u,p=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,v=e.shouldForwardProp;if(r&&i.shouldForwardProp){var _=i.shouldForwardProp;if(e.shouldForwardProp){var S=e.shouldForwardProp;v=function(w,T){return _(w,T)&&S(w,T)}}else v=_}var m=new KP(n,f,r?i.componentStyle:void 0);function h(w,T){return function(C,x,b){var L=C.attrs,F=C.componentStyle,B=C.defaultProps,At=C.foldedComponentIds,le=C.styledComponentId,gt=C.target,wn=yn.useContext(cS),qr=Wh(),En=C.shouldForwardProp||qr.shouldForwardProp,O=mP(x,wn,B)||Ns,M=function(Ze,He,yt){for(var Jn,sn=lt(lt({},He),{className:void 0,theme:yt}),zi=0;zi<Ze.length;zi+=1){var Zn=As(Jn=Ze[zi])?Jn(sn):Jn;for(var on in Zn)sn[on]=on==="className"?si(sn[on],Zn[on]):on==="style"?lt(lt({},sn[on]),Zn[on]):Zn[on]}return He.className&&(sn.className=si(sn.className,He.className)),sn}(L,x,O),U=M.as||gt,J={};for(var Q in M)M[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"&&M.theme===O||(Q==="forwardedAs"?J.as=M.forwardedAs:En&&!En(Q,U)||(J[Q]=M[Q]));var rn=function(Ze,He){var yt=Wh(),Jn=Ze.generateAndInjectStyles(He,yt.styleSheet,yt.stylis);return Jn}(F,M),Je=si(At,le);return rn&&(Je+=" "+rn),M.className&&(Je+=" "+M.className),J[sf(U)&&!YE.has(U)?"class":"className"]=Je,J.ref=b,E.createElement(U,J)}(y,w,T)}h.displayName=c;var y=yn.forwardRef(h);return y.attrs=p,y.componentStyle=m,y.displayName=c,y.shouldForwardProp=v,y.foldedComponentIds=r?si(i.foldedComponentIds,i.styledComponentId):"",y.styledComponentId=f,y.target=r?i.target:t,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(T){for(var C=[],x=1;x<arguments.length;x++)C[x-1]=arguments[x];for(var b=0,L=C;b<L.length;b++)zh(T,L[b],!0);return T}({},i.defaultProps,w):w}}),$m(y,function(){return".".concat(y.styledComponentId)}),s&&nS(y,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function Hy(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var Gy=function(t){return Object.assign(t,{isCss:!0})};function Ls(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(As(t)||ha(t))return Gy(di(Hy(jc,fa([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?di(r):Gy(di(Hy(r,e)))}function Vh(t,e,n){if(n===void 0&&(n=Ns),!e)throw Fa(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,Ls.apply(void 0,fa([i],s,!1)))};return r.attrs=function(i){return Vh(t,e,lt(lt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Vh(t,e,lt(lt({},n),i))},r}var dS=function(t){return Vh(qP,t)},P=dS;YE.forEach(function(t){P[t]=dS(t)});function Uc(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Uh(Ls.apply(void 0,fa([t],e,!1))),i=JE(r);return new aS(i,r)}const oe={WHITE:"#FFFFFF",YELLOW:"#F4C550",LIGHT_YELLOW:"#FBE9BA",GREEN:"#9FBAAE",LIGHT_GREEN:"#CBDED3",BLUE:"#9FB7CE",LIGHT:"#BFD6EA",PEACH:"#F0AA8D",LIGHT_PEACH:"#F4C8BA",ROSE:"#E0A39A",LIGHT_ROSE:"#F2C0BD",BLACK_TEXT:"#121417",LIGHT_BLACK_TEXT:"rgba(18, 20, 23, 0.2)",YELLOW_BUTTON:"#F4C550",YELLOW_HOVER_BUTTON:"#FFDC86",GREY_LABEL:"#8A8A89",SILVER_BACKGROUND:"#F8F8F8"},YP=P(Om)`
  height: 28px;
`,QP=P.header`
  max-width: 1184px;
  //height: 48px;
  margin: 0 auto;
  display: flex;
  gap: 28px;
  padding: 20px 64px;
  justify-content: center;
`,XP=P(Om)`
  color: rgb(18, 20, 23);
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.333px;
`,JP=P.div`
  height: 48px;
  display: flex;
  align-items: center;
  gap: 8px;
`,af=P(Om)`
  color: ${oe.BLACK_TEXT};
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  max-width: 66px;
  &.active {
    font-weight: 500;
  }
`,ZP=P.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,eR=P.button`
  height: 48px;
  max-width: 73px;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${oe.BLACK_TEXT};
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  font-family: Roboto;
  white-space: nowrap;
  cursor: pointer;
`,tR=P.button`
  height: 48px;
  max-width: 166px;
  border: none;
  border-radius: 12px;
  background: rgb(18, 20, 23);
  color: ${oe.WHITE};
  font-family: Roboto;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
  padding: 14px 39px 14px 39px;
`,nR=P.span`
  max-width: 20px;
  height: 20px;
`,rR=P.div`
  display: flex;
  gap: 390px;
  align-items: center;
`,iR=P.div`
  display: flex;
  gap: ${t=>t.isLoggedIn?"110px":"268px"};
  align-items: center;
`;var fS={exports:{}},hS={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $a=E;function sR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var oR=typeof Object.is=="function"?Object.is:sR,aR=$a.useSyncExternalStore,lR=$a.useRef,uR=$a.useEffect,cR=$a.useMemo,dR=$a.useDebugValue;hS.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=lR(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=cR(function(){function l(p){if(!u){if(u=!0,d=p,p=r(p),i!==void 0&&o.hasValue){var v=o.value;if(i(v,p))return c=v}return c=p}if(v=c,oR(d,p))return v;var _=r(p);return i!==void 0&&i(v,_)?v:(d=p,c=_)}var u=!1,d,c,f=n===void 0?null:n;return[function(){return l(e())},f===null?void 0:function(){return l(f())}]},[e,n,r,i]);var a=aR(t,s[0],s[1]);return uR(function(){o.hasValue=!0,o.value=a},[a]),dR(a),a};fS.exports=hS;var fR=fS.exports,Et="default"in Ff?yn:Ff,Ky=Symbol.for("react-redux-context"),qy=typeof globalThis<"u"?globalThis:{};function hR(){if(!Et.createContext)return{};const t=qy[Ky]??(qy[Ky]=new Map);let e=t.get(Et.createContext);return e||(e=Et.createContext(null),t.set(Et.createContext,e)),e}var Lr=hR(),pR=()=>{throw new Error("uSES not initialized!")};function Um(t=Lr){return function(){return Et.useContext(t)}}var pS=Um(),mS=pR,mR=t=>{mS=t},gR=(t,e)=>t===e;function yR(t=Lr){const e=t===Lr?pS:Um(t),n=(r,i={})=>{const{equalityFn:s=gR,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:l,getServerState:u,stabilityCheck:d,identityFunctionCheck:c}=e();Et.useRef(!0);const f=Et.useCallback({[r.name](v){return r(v)}}[r.name],[r,d,o.stabilityCheck]),p=mS(l.addNestedSub,a.getState,u||a.getState,f,s);return Et.useDebugValue(p),p};return Object.assign(n,{withTypes:()=>n}),n}var zc=yR();function vR(t){t()}function _R(){let t=null,e=null;return{clear(){t=null,e=null},notify(){vR(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var Yy={notify(){},get:()=>[]};function wR(t,e){let n,r=Yy,i=0,s=!1;function o(_){d();const S=r.subscribe(_);let m=!1;return()=>{m||(m=!0,S(),c())}}function a(){r.notify()}function l(){v.onStateChange&&v.onStateChange()}function u(){return s}function d(){i++,n||(n=e?e.addNestedSub(l):t.subscribe(l),r=_R())}function c(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=Yy)}function f(){s||(s=!0,d())}function p(){s&&(s=!1,c())}const v={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:f,tryUnsubscribe:p,getListeners:()=>r};return v}var ER=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",SR=ER?Et.useLayoutEffect:Et.useEffect;function CR({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=Et.useMemo(()=>{const u=wR(t);return{store:t,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[t,r,i,s]),a=Et.useMemo(()=>t.getState(),[t]);SR(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==t.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const l=e||Lr;return Et.createElement(l.Provider,{value:o},n)}var xR=CR;function gS(t=Lr){const e=t===Lr?pS:Um(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var TR=gS();function IR(t=Lr){const e=t===Lr?TR:gS(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var Xs=IR();mR(fR.useSyncExternalStoreWithSelector);const Bc=()=>{const{name:t,email:e,token:n,id:r,isLoggedIn:i,isRefreshing:s}=zc(o=>o.auth);return{isRefreshing:s,isLoggedIn:i,email:e,token:n,name:t,id:r}};function je(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var bR=typeof Symbol=="function"&&Symbol.observable||"@@observable",Qy=bR,lf=()=>Math.random().toString(36).substring(7).split("").join("."),kR={INIT:`@@redux/INIT${lf()}`,REPLACE:`@@redux/REPLACE${lf()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${lf()}`},ju=kR;function zm(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function Bm(t,e,n){if(typeof t!="function")throw new Error(je(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(je(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(je(1));return n(Bm)(t,e)}let r=t,i=e,s=new Map,o=s,a=0,l=!1;function u(){o===s&&(o=new Map,s.forEach((S,m)=>{o.set(m,S)}))}function d(){if(l)throw new Error(je(3));return i}function c(S){if(typeof S!="function")throw new Error(je(4));if(l)throw new Error(je(5));let m=!0;u();const h=a++;return o.set(h,S),function(){if(m){if(l)throw new Error(je(6));m=!1,u(),o.delete(h),s=null}}}function f(S){if(!zm(S))throw new Error(je(7));if(typeof S.type>"u")throw new Error(je(8));if(typeof S.type!="string")throw new Error(je(17));if(l)throw new Error(je(9));try{l=!0,i=r(i,S)}finally{l=!1}return(s=o).forEach(h=>{h()}),S}function p(S){if(typeof S!="function")throw new Error(je(10));r=S,f({type:ju.REPLACE})}function v(){const S=c;return{subscribe(m){if(typeof m!="object"||m===null)throw new Error(je(11));function h(){const w=m;w.next&&w.next(d())}return h(),{unsubscribe:S(h)}},[Qy](){return this}}}return f({type:ju.INIT}),{dispatch:f,subscribe:c,getState:d,replaceReducer:p,[Qy]:v}}function PR(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:ju.INIT})>"u")throw new Error(je(12));if(typeof n(void 0,{type:ju.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(je(13))})}function yS(t){const e=Object.keys(t),n={};for(let s=0;s<e.length;s++){const o=e[s];typeof t[o]=="function"&&(n[o]=t[o])}const r=Object.keys(n);let i;try{PR(n)}catch(s){i=s}return function(o={},a){if(i)throw i;let l=!1;const u={};for(let d=0;d<r.length;d++){const c=r[d],f=n[c],p=o[c],v=f(p,a);if(typeof v>"u")throw a&&a.type,new Error(je(14));u[c]=v,l=l||v!==p}return l=l||r.length!==Object.keys(o).length,l?u:o}}function Uu(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function RR(...t){return e=>(n,r)=>{const i=e(n,r);let s=()=>{throw new Error(je(15))};const o={getState:i.getState,dispatch:(l,...u)=>s(l,...u)},a=t.map(l=>l(o));return s=Uu(...a)(i.dispatch),{...i,dispatch:s}}}function OR(t){return zm(t)&&"type"in t&&typeof t.type=="string"}var vS=Symbol.for("immer-nothing"),Xy=Symbol.for("immer-draftable"),kt=Symbol.for("immer-state");function Kt(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var Ds=Object.getPrototypeOf;function Dr(t){return!!t&&!!t[kt]}function zn(t){var e;return t?_S(t)||Array.isArray(t)||!!t[Xy]||!!((e=t.constructor)!=null&&e[Xy])||Vc(t)||Hc(t):!1}var NR=Object.prototype.constructor.toString();function _S(t){if(!t||typeof t!="object")return!1;const e=Ds(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===NR}function pa(t,e){Wc(t)===0?Object.entries(t).forEach(([n,r])=>{e(n,r,t)}):t.forEach((n,r)=>e(r,n,t))}function Wc(t){const e=t[kt];return e?e.type_:Array.isArray(t)?1:Vc(t)?2:Hc(t)?3:0}function Hh(t,e){return Wc(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function wS(t,e,n){const r=Wc(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function AR(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function Vc(t){return t instanceof Map}function Hc(t){return t instanceof Set}function Jr(t){return t.copy_||t.base_}function Gh(t,e){if(Vc(t))return new Map(t);if(Hc(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);if(!e&&_S(t))return Ds(t)?{...t}:Object.assign(Object.create(null),t);const n=Object.getOwnPropertyDescriptors(t);delete n[kt];let r=Reflect.ownKeys(n);for(let i=0;i<r.length;i++){const s=r[i],o=n[s];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(n[s]={configurable:!0,writable:!0,enumerable:o.enumerable,value:t[s]})}return Object.create(Ds(t),n)}function Wm(t,e=!1){return Gc(t)||Dr(t)||!zn(t)||(Wc(t)>1&&(t.set=t.add=t.clear=t.delete=LR),Object.freeze(t),e&&pa(t,(n,r)=>Wm(r,!0))),t}function LR(){Kt(2)}function Gc(t){return Object.isFrozen(t)}var DR={};function wi(t){const e=DR[t];return e||Kt(0,t),e}var ma;function ES(){return ma}function MR(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Jy(t,e){e&&(wi("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function Kh(t){qh(t),t.drafts_.forEach(FR),t.drafts_=null}function qh(t){t===ma&&(ma=t.parent_)}function Zy(t){return ma=MR(ma,t)}function FR(t){const e=t[kt];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function ev(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[kt].modified_&&(Kh(e),Kt(4)),zn(t)&&(t=zu(e,t),e.parent_||Bu(e,t)),e.patches_&&wi("Patches").generateReplacementPatches_(n[kt].base_,t,e.patches_,e.inversePatches_)):t=zu(e,n,[]),Kh(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==vS?t:void 0}function zu(t,e,n){if(Gc(e))return e;const r=e[kt];if(!r)return pa(e,(i,s)=>tv(t,r,e,i,s,n)),e;if(r.scope_!==t)return e;if(!r.modified_)return Bu(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let s=i,o=!1;r.type_===3&&(s=new Set(i),i.clear(),o=!0),pa(s,(a,l)=>tv(t,r,i,a,l,n,o)),Bu(t,i,!1),n&&t.patches_&&wi("Patches").generatePatches_(r,n,t.patches_,t.inversePatches_)}return r.copy_}function tv(t,e,n,r,i,s,o){if(Dr(i)){const a=s&&e&&e.type_!==3&&!Hh(e.assigned_,r)?s.concat(r):void 0,l=zu(t,i,a);if(wS(n,r,l),Dr(l))t.canAutoFreeze_=!1;else return}else o&&n.add(i);if(zn(i)&&!Gc(i)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;zu(t,i),(!e||!e.scope_.parent_)&&Bu(t,i)}}function Bu(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&Wm(e,n)}function $R(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:ES(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,s=Vm;n&&(i=[r],s=ga);const{revoke:o,proxy:a}=Proxy.revocable(i,s);return r.draft_=a,r.revoke_=o,a}var Vm={get(t,e){if(e===kt)return t;const n=Jr(t);if(!Hh(n,e))return jR(t,n,e);const r=n[e];return t.finalized_||!zn(r)?r:r===uf(t.base_,e)?(cf(t),t.copy_[e]=Qh(r,t)):r},has(t,e){return e in Jr(t)},ownKeys(t){return Reflect.ownKeys(Jr(t))},set(t,e,n){const r=SS(Jr(t),e);if(r!=null&&r.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=uf(Jr(t),e),s=i==null?void 0:i[kt];if(s&&s.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(AR(n,i)&&(n!==void 0||Hh(t.base_,e)))return!0;cf(t),Yh(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return uf(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,cf(t),Yh(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=Jr(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){Kt(11)},getPrototypeOf(t){return Ds(t.base_)},setPrototypeOf(){Kt(12)}},ga={};pa(Vm,(t,e)=>{ga[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});ga.deleteProperty=function(t,e){return ga.set.call(this,t,e,void 0)};ga.set=function(t,e,n){return Vm.set.call(this,t[0],e,n,t[0])};function uf(t,e){const n=t[kt];return(n?Jr(n):t)[e]}function jR(t,e,n){var i;const r=SS(e,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(t.draft_):void 0}function SS(t,e){if(!(e in t))return;let n=Ds(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Ds(n)}}function Yh(t){t.modified_||(t.modified_=!0,t.parent_&&Yh(t.parent_))}function cf(t){t.copy_||(t.copy_=Gh(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var UR=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const s=n;n=e;const o=this;return function(l=s,...u){return o.produce(l,d=>n.call(this,d,...u))}}typeof n!="function"&&Kt(6),r!==void 0&&typeof r!="function"&&Kt(7);let i;if(zn(e)){const s=Zy(this),o=Qh(e,void 0);let a=!0;try{i=n(o),a=!1}finally{a?Kh(s):qh(s)}return Jy(s,r),ev(i,s)}else if(!e||typeof e!="object"){if(i=n(e),i===void 0&&(i=e),i===vS&&(i=void 0),this.autoFreeze_&&Wm(i,!0),r){const s=[],o=[];wi("Patches").generateReplacementPatches_(e,i,s,o),r(s,o)}return i}else Kt(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(o,...a)=>this.produceWithPatches(o,l=>e(l,...a));let r,i;return[this.produce(e,n,(o,a)=>{r=o,i=a}),r,i]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){zn(t)||Kt(8),Dr(t)&&(t=CS(t));const e=Zy(this),n=Qh(t,void 0);return n[kt].isManual_=!0,qh(e),n}finishDraft(t,e){const n=t&&t[kt];(!n||!n.isManual_)&&Kt(9);const{scope_:r}=n;return Jy(r,e),ev(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=wi("Patches").applyPatches_;return Dr(t)?r(t,e):this.produce(t,i=>r(i,e))}};function Qh(t,e){const n=Vc(t)?wi("MapSet").proxyMap_(t,e):Hc(t)?wi("MapSet").proxySet_(t,e):$R(t,e);return(e?e.scope_:ES()).drafts_.push(n),n}function CS(t){return Dr(t)||Kt(10,t),xS(t)}function xS(t){if(!zn(t)||Gc(t))return t;const e=t[kt];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=Gh(t,e.scope_.immer_.useStrictShallowCopy_)}else n=Gh(t,!0);return pa(n,(r,i)=>{wS(n,r,xS(i))}),e&&(e.finalized_=!1),n}var Pt=new UR,TS=Pt.produce;Pt.produceWithPatches.bind(Pt);Pt.setAutoFreeze.bind(Pt);Pt.setUseStrictShallowCopy.bind(Pt);Pt.applyPatches.bind(Pt);Pt.createDraft.bind(Pt);Pt.finishDraft.bind(Pt);function zR(t,e=`expected a function, instead received ${typeof t}`){if(typeof t!="function")throw new TypeError(e)}function BR(t,e=`expected an object, instead received ${typeof t}`){if(typeof t!="object")throw new TypeError(e)}function WR(t,e="expected all items to be functions, instead received the following types: "){if(!t.every(n=>typeof n=="function")){const n=t.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${e}[${n}]`)}}var nv=t=>Array.isArray(t)?t:[t];function VR(t){const e=Array.isArray(t[0])?t[0]:t;return WR(e,"createSelector expects all input-selectors to be functions, but received the following types: "),e}function HR(t,e){const n=[],{length:r}=t;for(let i=0;i<r;i++)n.push(t[i].apply(null,e));return n}var GR=class{constructor(t){this.value=t}deref(){return this.value}},KR=typeof WeakRef<"u"?WeakRef:GR,qR=0,rv=1;function El(){return{s:qR,v:void 0,o:null,p:null}}function Hm(t,e={}){let n=El();const{resultEqualityCheck:r}=e;let i,s=0;function o(){var c;let a=n;const{length:l}=arguments;for(let f=0,p=l;f<p;f++){const v=arguments[f];if(typeof v=="function"||typeof v=="object"&&v!==null){let _=a.o;_===null&&(a.o=_=new WeakMap);const S=_.get(v);S===void 0?(a=El(),_.set(v,a)):a=S}else{let _=a.p;_===null&&(a.p=_=new Map);const S=_.get(v);S===void 0?(a=El(),_.set(v,a)):a=S}}const u=a;let d;if(a.s===rv?d=a.v:(d=t.apply(null,arguments),s++),u.s=rv,r){const f=((c=i==null?void 0:i.deref)==null?void 0:c.call(i))??i;f!=null&&r(f,d)&&(d=f,s!==0&&s--),i=typeof d=="object"&&d!==null||typeof d=="function"?new KR(d):d}return u.v=d,d}return o.clearCache=()=>{n=El(),o.resetResultsCount()},o.resultsCount=()=>s,o.resetResultsCount=()=>{s=0},o}function IS(t,...e){const n=typeof t=="function"?{memoize:t,memoizeOptions:e}:t,r=(...i)=>{let s=0,o=0,a,l={},u=i.pop();typeof u=="object"&&(l=u,u=i.pop()),zR(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const d={...n,...l},{memoize:c,memoizeOptions:f=[],argsMemoize:p=Hm,argsMemoizeOptions:v=[],devModeChecks:_={}}=d,S=nv(f),m=nv(v),h=VR(i),y=c(function(){return s++,u.apply(null,arguments)},...S),w=p(function(){o++;const C=HR(h,arguments);return a=y.apply(null,C),a},...m);return Object.assign(w,{resultFunc:u,memoizedResultFunc:y,dependencies:h,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>a,recomputations:()=>s,resetRecomputations:()=>{s=0},memoize:c,argsMemoize:p})};return Object.assign(r,{withTypes:()=>r}),r}var YR=IS(Hm),QR=Object.assign((t,e=YR)=>{BR(t,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof t}`);const n=Object.keys(t),r=n.map(s=>t[s]);return e(r,(...s)=>s.reduce((o,a,l)=>(o[n[l]]=a,o),{}))},{withTypes:()=>QR});function bS(t){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,t):i(s)}var XR=bS(),JR=bS,ZR=(...t)=>{const e=IS(...t),n=Object.assign((...r)=>{const i=e(...r),s=(o,...a)=>i(Dr(o)?CS(o):o,...a);return Object.assign(s,i),s},{withTypes:()=>n});return n};ZR(Hm);var eO=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Uu:Uu.apply(null,arguments)},tO=t=>t&&typeof t.match=="function";function Dn(t,e){function n(...r){if(e){let i=e(...r);if(!i)throw new Error(ht(0));return{type:t,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>OR(r)&&r.type===t,n}var kS=class Io extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,Io.prototype)}static get[Symbol.species](){return Io}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new Io(...e[0].concat(this)):new Io(...e.concat(this))}};function iv(t){return zn(t)?TS(t,()=>{}):t}function sv(t,e,n){if(t.has(e)){let i=t.get(e);return n.update&&(i=n.update(i,e,t),t.set(e,i)),i}if(!n.insert)throw new Error(ht(10));const r=n.insert(e,t);return t.set(e,r),r}function nO(t){return typeof t=="boolean"}var rO=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=e??{};let o=new kS;return n&&(nO(n)?o.push(XR):o.push(JR(n.extraArgument))),o},iO="RTK_autoBatch",PS=t=>e=>{setTimeout(e,t)},sO=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:PS(10),oO=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let i=!0,s=!1,o=!1;const a=new Set,l=t.type==="tick"?queueMicrotask:t.type==="raf"?sO:t.type==="callback"?t.queueNotification:PS(t.timeout),u=()=>{o=!1,s&&(s=!1,a.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const c=()=>i&&d(),f=r.subscribe(c);return a.add(d),()=>{f(),a.delete(d)}},dispatch(d){var c;try{return i=!((c=d==null?void 0:d.meta)!=null&&c[iO]),s=!i,s&&(o||(o=!0,l(u))),r.dispatch(d)}finally{i=!0}}})},aO=t=>function(n){const{autoBatch:r=!0}=n??{};let i=new kS(t);return r&&i.push(oO(typeof r=="object"?r:void 0)),i},lO=!0;function uO(t){const e=rO(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=t||{};let a;if(typeof n=="function")a=n;else if(zm(n))a=yS(n);else throw new Error(ht(1));let l;typeof r=="function"?l=r(e):l=e();let u=Uu;i&&(u=eO({trace:!lO,...typeof i=="object"&&i}));const d=RR(...l),c=aO(d);let f=typeof o=="function"?o(c):c();const p=u(...f);return Bm(a,s,p)}function RS(t){const e={},n=[];let r;const i={addCase(s,o){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(ht(28));if(a in e)throw new Error(ht(29));return e[a]=o,i},addMatcher(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return t(i),[e,n,r]}function cO(t){return typeof t=="function"}function dO(t,e){let[n,r,i]=RS(e),s;if(cO(t))s=()=>iv(t());else{const a=iv(t);s=()=>a}function o(a=s(),l){let u=[n[l.type],...r.filter(({matcher:d})=>d(l)).map(({reducer:d})=>d)];return u.filter(d=>!!d).length===0&&(u=[i]),u.reduce((d,c)=>{if(c)if(Dr(d)){const p=c(d,l);return p===void 0?d:p}else{if(zn(d))return TS(d,f=>c(f,l));{const f=c(d,l);if(f===void 0){if(d===null)return d;throw new Error(ht(9))}return f}}return d},a)}return o.getInitialState=s,o}var fO="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",OS=(t=21)=>{let e="",n=t;for(;n--;)e+=fO[Math.random()*64|0];return e},hO=(t,e)=>tO(t)?t.match(e):t(e);function pO(...t){return e=>t.some(n=>hO(n,e))}var mO=["name","message","stack","code"],df=class{constructor(t,e){kd(this,"_type");this.payload=t,this.meta=e}},ov=class{constructor(t,e){kd(this,"_type");this.payload=t,this.meta=e}},gO=t=>{if(typeof t=="object"&&t!==null){const e={};for(const n of mO)typeof t[n]=="string"&&(e[n]=t[n]);return e}return{message:String(t)}},ja=(()=>{function t(e,n,r){const i=Dn(e+"/fulfilled",(l,u,d,c)=>({payload:l,meta:{...c||{},arg:d,requestId:u,requestStatus:"fulfilled"}})),s=Dn(e+"/pending",(l,u,d)=>({payload:void 0,meta:{...d||{},arg:u,requestId:l,requestStatus:"pending"}})),o=Dn(e+"/rejected",(l,u,d,c,f)=>({payload:c,error:(r&&r.serializeError||gO)(l||"Rejected"),meta:{...f||{},arg:d,requestId:u,rejectedWithValue:!!c,requestStatus:"rejected",aborted:(l==null?void 0:l.name)==="AbortError",condition:(l==null?void 0:l.name)==="ConditionError"}}));function a(l){return(u,d,c)=>{const f=r!=null&&r.idGenerator?r.idGenerator(l):OS(),p=new AbortController;let v,_;function S(h){_=h,p.abort()}const m=async function(){var w,T;let h;try{let C=(w=r==null?void 0:r.condition)==null?void 0:w.call(r,l,{getState:d,extra:c});if(vO(C)&&(C=await C),C===!1||p.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const x=new Promise((b,L)=>{v=()=>{L({name:"AbortError",message:_||"Aborted"})},p.signal.addEventListener("abort",v)});u(s(f,l,(T=r==null?void 0:r.getPendingMeta)==null?void 0:T.call(r,{requestId:f,arg:l},{getState:d,extra:c}))),h=await Promise.race([x,Promise.resolve(n(l,{dispatch:u,getState:d,extra:c,requestId:f,signal:p.signal,abort:S,rejectWithValue:(b,L)=>new df(b,L),fulfillWithValue:(b,L)=>new ov(b,L)})).then(b=>{if(b instanceof df)throw b;return b instanceof ov?i(b.payload,f,l,b.meta):i(b,f,l)})])}catch(C){h=C instanceof df?o(null,f,l,C.payload,C.meta):o(C,f,l)}finally{v&&p.signal.removeEventListener("abort",v)}return r&&!r.dispatchConditionRejection&&o.match(h)&&h.meta.condition||u(h),h}();return Object.assign(m,{abort:S,requestId:f,arg:l,unwrap(){return m.then(yO)}})}}return Object.assign(a,{pending:s,rejected:o,fulfilled:i,settled:pO(o,i),typePrefix:e})}return t.withTypes=()=>t,t})();function yO(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function vO(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var _O=Symbol.for("rtk-slice-createasyncthunk");function wO(t,e){return`${t}/${e}`}function EO({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[_O];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(ht(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(CO()):i.reducers)||{},l=Object.keys(a),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(y,w){const T=typeof y=="string"?y:y.type;if(!T)throw new Error(ht(12));if(T in u.sliceCaseReducersByType)throw new Error(ht(13));return u.sliceCaseReducersByType[T]=w,d},addMatcher(y,w){return u.sliceMatchers.push({matcher:y,reducer:w}),d},exposeAction(y,w){return u.actionCreators[y]=w,d},exposeCaseReducer(y,w){return u.sliceCaseReducersByName[y]=w,d}};l.forEach(y=>{const w=a[y],T={reducerName:y,type:wO(s,y),createNotation:typeof i.reducers=="function"};TO(w)?bO(T,w,d,e):xO(T,w,d)});function c(){const[y={},w=[],T=void 0]=typeof i.extraReducers=="function"?RS(i.extraReducers):[i.extraReducers],C={...y,...u.sliceCaseReducersByType};return dO(i.initialState,x=>{for(let b in C)x.addCase(b,C[b]);for(let b of u.sliceMatchers)x.addMatcher(b.matcher,b.reducer);for(let b of w)x.addMatcher(b.matcher,b.reducer);T&&x.addDefaultCase(T)})}const f=y=>y,p=new Map;let v;function _(y,w){return v||(v=c()),v(y,w)}function S(){return v||(v=c()),v.getInitialState()}function m(y,w=!1){function T(x){let b=x[y];return typeof b>"u"&&w&&(b=S()),b}function C(x=f){const b=sv(p,w,{insert:()=>new WeakMap});return sv(b,x,{insert:()=>{const L={};for(const[F,B]of Object.entries(i.selectors??{}))L[F]=SO(B,x,S,w);return L}})}return{reducerPath:y,getSelectors:C,get selectors(){return C(T)},selectSlice:T}}const h={name:s,reducer:_,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:S,...m(o),injectInto(y,{reducerPath:w,...T}={}){const C=w??o;return y.inject({reducerPath:C,reducer:_},T),{...h,...m(C,!0)}}};return h}}function SO(t,e,n,r){function i(s,...o){let a=e(s);return typeof a>"u"&&r&&(a=n()),t(a,...o)}return i.unwrapped=t,i}var NS=EO();function CO(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function xO({type:t,reducerName:e,createNotation:n},r,i){let s,o;if("reducer"in r){if(n&&!IO(r))throw new Error(ht(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(t,s).exposeCaseReducer(e,s).exposeAction(e,o?Dn(t,o):Dn(t))}function TO(t){return t._reducerDefinitionType==="asyncThunk"}function IO(t){return t._reducerDefinitionType==="reducerWithPrepare"}function bO({type:t,reducerName:e},n,r,i){if(!i)throw new Error(ht(18));const{payloadCreator:s,fulfilled:o,pending:a,rejected:l,settled:u,options:d}=n,c=i(t,s,d);r.exposeAction(e,c),o&&r.addCase(c.fulfilled,o),a&&r.addCase(c.pending,a),l&&r.addCase(c.rejected,l),u&&r.addMatcher(c.settled,u),r.exposeCaseReducer(e,{fulfilled:o||Sl,pending:a||Sl,rejected:l||Sl,settled:u||Sl})}function Sl(){}var kO=(t,e)=>{if(typeof t!="function")throw new Error(ht(32))},Gm="listenerMiddleware",PO=t=>{let{type:e,actionCreator:n,matcher:r,predicate:i,effect:s}=t;if(e)i=Dn(e).match;else if(n)e=n.type,i=n.match;else if(r)i=r;else if(!i)throw new Error(ht(21));return kO(s),{predicate:i,type:e,effect:s}},RO=Object.assign(t=>{const{type:e,predicate:n,effect:r}=PO(t);return{id:OS(),effect:r,type:e,predicate:n,pending:new Set,unsubscribe:()=>{throw new Error(ht(22))}}},{withTypes:()=>RO}),OO=Object.assign(Dn(`${Gm}/add`),{withTypes:()=>OO});Dn(`${Gm}/removeAll`);var NO=Object.assign(Dn(`${Gm}/remove`),{withTypes:()=>NO});function ht(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var av={};/**
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
 */const AS={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const R=function(t,e){if(!t)throw Js(e)},Js=function(t){return new Error("Firebase Database ("+AS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const LS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},AO=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Km={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=s>>2,c=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(f=64)),r.push(n[d],n[c],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(LS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):AO(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||c==null)throw new LO;const f=s<<2|a>>4;if(r.push(f),u!==64){const p=a<<4&240|u>>2;if(r.push(p),c!==64){const v=u<<6&192|c;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class LO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const DS=function(t){const e=LS(t);return Km.encodeByteArray(e,!0)},Wu=function(t){return DS(t).replace(/\./g,"")},Vu=function(t){try{return Km.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function DO(t){return MS(void 0,t)}function MS(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!MO(n)||(t[n]=MS(t[n],e[n]));return t}function MO(t){return t!=="__proto__"}/**
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
 */function FO(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $O=()=>FO().__FIREBASE_DEFAULTS__,jO=()=>{if(typeof process>"u"||typeof av>"u")return;const t=av.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},UO=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vu(t[1]);return e&&JSON.parse(e)},qm=()=>{try{return $O()||jO()||UO()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},FS=t=>{var e,n;return(n=(e=qm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},zO=t=>{const e=FS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},$S=()=>{var t;return(t=qm())===null||t===void 0?void 0:t.config},jS=t=>{var e;return(e=qm())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Ym{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function BO(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Wu(JSON.stringify(n)),Wu(JSON.stringify(o)),""].join(".")}/**
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
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function WO(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function US(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function VO(){const t=Xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zS(){return AS.NODE_ADMIN===!0}function HO(){try{return typeof indexedDB=="object"}catch{return!1}}function GO(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const KO="FirebaseError";class Wr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=KO,Object.setPrototypeOf(this,Wr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ua.prototype.create)}}class Ua{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?qO(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Wr(i,a,r)}}function qO(t,e){return t.replace(YO,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const YO=/\{\$([^}]+)}/g;/**
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
 */function ya(t){return JSON.parse(t)}function Pe(t){return JSON.stringify(t)}/**
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
 */const BS=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ya(Vu(s[0])||""),n=ya(Vu(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},QO=function(t){const e=BS(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},XO=function(t){const e=BS(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function qn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ms(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Xh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hu(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Gu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(lv(s)&&lv(o)){if(!Gu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function lv(t){return t!==null&&typeof t=="object"}/**
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
 */function Zs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function bo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ko(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class JO{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const f=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=a^s&(o^a),d=1518500249):(u=s^o^a,d=1859775393):c<60?(u=s&o|a&(s|o),d=2400959708):(u=s^o^a,d=3395469782);const f=(i<<5|i>>>27)+u+l+d+r[c]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function ZO(t,e){const n=new eN(t,e);return n.subscribe.bind(n)}class eN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");tN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ff),i.error===void 0&&(i.error=ff),i.complete===void 0&&(i.complete=ff);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ff(){}function WS(t,e){return`${t} failed: ${e} argument `}/**
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
 */const nN=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,R(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Kc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function mt(t){return t&&t._delegate?t._delegate:t}class Ei{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Zr="[DEFAULT]";/**
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
 */class rN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ym;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sN(e))try{this.getOrInitializeService({instanceIdentifier:Zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zr){return this.instances.has(e)}getOptions(e=Zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:iN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zr){return this.component?this.component.multipleInstances?e:Zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iN(t){return t===Zr?void 0:t}function sN(t){return t.instantiationMode==="EAGER"}/**
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
 */class oN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new rN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const aN={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},lN=se.INFO,uN={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},cN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=uN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xm{constructor(e){this.name=e,this._logLevel=lN,this._logHandler=cN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?aN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const dN=(t,e)=>e.some(n=>t instanceof n);let uv,cv;function fN(){return uv||(uv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hN(){return cv||(cv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const VS=new WeakMap,Jh=new WeakMap,HS=new WeakMap,hf=new WeakMap,Jm=new WeakMap;function pN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ir(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&VS.set(n,t)}).catch(()=>{}),Jm.set(e,t),e}function mN(t){if(Jh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Jh.set(t,e)}let Zh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Jh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||HS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ir(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gN(t){Zh=t(Zh)}function yN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(pf(this),e,...n);return HS.set(r,e.sort?e.sort():[e]),Ir(r)}:hN().includes(t)?function(...e){return t.apply(pf(this),e),Ir(VS.get(this))}:function(...e){return Ir(t.apply(pf(this),e))}}function vN(t){return typeof t=="function"?yN(t):(t instanceof IDBTransaction&&mN(t),dN(t,fN())?new Proxy(t,Zh):t)}function Ir(t){if(t instanceof IDBRequest)return pN(t);if(hf.has(t))return hf.get(t);const e=vN(t);return e!==t&&(hf.set(t,e),Jm.set(e,t)),e}const pf=t=>Jm.get(t);function _N(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ir(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ir(o.result),l.oldVersion,l.newVersion,Ir(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const wN=["get","getKey","getAll","getAllKeys","count"],EN=["put","add","delete","clear"],mf=new Map;function dv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(mf.get(e))return mf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=EN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||wN.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return mf.set(e,s),s}gN(t=>({...t,get:(e,n,r)=>dv(e,n)||t.get(e,n,r),has:(e,n)=>!!dv(e,n)||t.has(e,n)}));/**
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
 */class SN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(CN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function CN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ep="@firebase/app",fv="0.9.28";/**
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
 */const Si=new Xm("@firebase/app"),xN="@firebase/app-compat",TN="@firebase/analytics-compat",IN="@firebase/analytics",bN="@firebase/app-check-compat",kN="@firebase/app-check",PN="@firebase/auth",RN="@firebase/auth-compat",ON="@firebase/database",NN="@firebase/database-compat",AN="@firebase/functions",LN="@firebase/functions-compat",DN="@firebase/installations",MN="@firebase/installations-compat",FN="@firebase/messaging",$N="@firebase/messaging-compat",jN="@firebase/performance",UN="@firebase/performance-compat",zN="@firebase/remote-config",BN="@firebase/remote-config-compat",WN="@firebase/storage",VN="@firebase/storage-compat",HN="@firebase/firestore",GN="@firebase/firestore-compat",KN="firebase",qN="10.8.1";/**
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
 */const tp="[DEFAULT]",YN={[ep]:"fire-core",[xN]:"fire-core-compat",[IN]:"fire-analytics",[TN]:"fire-analytics-compat",[kN]:"fire-app-check",[bN]:"fire-app-check-compat",[PN]:"fire-auth",[RN]:"fire-auth-compat",[ON]:"fire-rtdb",[NN]:"fire-rtdb-compat",[AN]:"fire-fn",[LN]:"fire-fn-compat",[DN]:"fire-iid",[MN]:"fire-iid-compat",[FN]:"fire-fcm",[$N]:"fire-fcm-compat",[jN]:"fire-perf",[UN]:"fire-perf-compat",[zN]:"fire-rc",[BN]:"fire-rc-compat",[WN]:"fire-gcs",[VN]:"fire-gcs-compat",[HN]:"fire-fst",[GN]:"fire-fst-compat","fire-js":"fire-js",[KN]:"fire-js-all"};/**
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
 */const Ku=new Map,np=new Map;function QN(t,e){try{t.container.addComponent(e)}catch(n){Si.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fs(t){const e=t.name;if(np.has(e))return Si.debug(`There were multiple attempts to register component ${e}.`),!1;np.set(e,t);for(const n of Ku.values())QN(n,t);return!0}function Zm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const XN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},br=new Ua("app","Firebase",XN);/**
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
 */class JN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ei("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw br.create("app-deleted",{appName:this._name})}}/**
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
 */const eo=qN;function GS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:tp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw br.create("bad-app-name",{appName:String(i)});if(n||(n=$S()),!n)throw br.create("no-options");const s=Ku.get(i);if(s){if(Gu(n,s.options)&&Gu(r,s.config))return s;throw br.create("duplicate-app",{appName:i})}const o=new oN(i);for(const l of np.values())o.addComponent(l);const a=new JN(n,r,o);return Ku.set(i,a),a}function KS(t=tp){const e=Ku.get(t);if(!e&&t===tp&&$S())return GS();if(!e)throw br.create("no-app",{appName:t});return e}function kr(t,e,n){var r;let i=(r=YN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Si.warn(a.join(" "));return}Fs(new Ei(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ZN="firebase-heartbeat-database",eA=1,va="firebase-heartbeat-store";let gf=null;function qS(){return gf||(gf=_N(ZN,eA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(va)}catch(n){console.warn(n)}}}}).catch(t=>{throw br.create("idb-open",{originalErrorMessage:t.message})})),gf}async function tA(t){try{const n=(await qS()).transaction(va),r=await n.objectStore(va).get(YS(t));return await n.done,r}catch(e){if(e instanceof Wr)Si.warn(e.message);else{const n=br.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Si.warn(n.message)}}}async function hv(t,e){try{const r=(await qS()).transaction(va,"readwrite");await r.objectStore(va).put(e,YS(t)),await r.done}catch(n){if(n instanceof Wr)Si.warn(n.message);else{const r=br.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Si.warn(r.message)}}}function YS(t){return`${t.name}!${t.options.appId}`}/**
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
 */const nA=1024,rA=30*24*60*60*1e3;class iA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=pv();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=rA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=pv(),{heartbeatsToSend:r,unsentEntries:i}=sA(this._heartbeatsCache.heartbeats),s=Wu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function pv(){return new Date().toISOString().substring(0,10)}function sA(t,e=nA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),mv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),mv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class oA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return HO()?GO().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await tA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return hv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return hv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function mv(t){return Wu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function aA(t){Fs(new Ei("platform-logger",e=>new SN(e),"PRIVATE")),Fs(new Ei("heartbeat",e=>new iA(e),"PRIVATE")),kr(ep,fv,t),kr(ep,fv,"esm2017"),kr("fire-js","")}aA("");function QS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lA=QS,XS=new Ua("auth","Firebase",QS());/**
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
 */const qu=new Xm("@firebase/auth");function uA(t,...e){qu.logLevel<=se.WARN&&qu.warn(`Auth (${eo}): ${t}`,...e)}function Yl(t,...e){qu.logLevel<=se.ERROR&&qu.error(`Auth (${eo}): ${t}`,...e)}/**
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
 */function nn(t,...e){throw eg(t,...e)}function pn(t,...e){return eg(t,...e)}function cA(t,e,n){const r=Object.assign(Object.assign({},lA()),{[e]:n});return new Ua("auth","Firebase",r).create(e,{appName:t.name})}function eg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return XS.create(t,...e)}function z(t,e,...n){if(!t)throw eg(e,...n)}function On(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Yl(e),new Error(e)}function Bn(t,e){t||On(e)}/**
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
 */function rp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function dA(){return gv()==="http:"||gv()==="https:"}function gv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function fA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dA()||WO()||"connection"in navigator)?navigator.onLine:!0}function hA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class za{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bn(n>e,"Short delay should be less than long delay!"),this.isMobile=Qm()||US()}get(){return fA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function tg(t,e){Bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class JS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;On("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;On("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;On("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const pA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const mA=new za(3e4,6e4);function Vr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Yn(t,e,n,r,i={}){return ZS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Zs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),JS.fetch()(eC(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function ZS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},pA),e);try{const i=new yA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Cl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Cl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Cl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Cl(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw cA(t,d,u);nn(t,d)}}catch(i){if(i instanceof Wr)throw i;nn(t,"network-request-failed",{message:String(i)})}}async function Ba(t,e,n,r,i={}){const s=await Yn(t,e,n,r,i);return"mfaPendingCredential"in s&&nn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function eC(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?tg(t.config,i):`${t.config.apiScheme}://${i}`}function gA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(pn(this.auth,"network-request-failed")),mA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Cl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=pn(t,e,r);return i.customData._tokenResponse=n,i}function yv(t){return t!==void 0&&t.enterprise!==void 0}class vA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return gA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function _A(t,e){return Yn(t,"GET","/v2/recaptchaConfig",Vr(t,e))}/**
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
 */async function wA(t,e){return Yn(t,"POST","/v1/accounts:delete",e)}async function EA(t,e){return Yn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function jo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function SA(t,e=!1){const n=mt(t),r=await n.getIdToken(e),i=ng(r);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:jo(yf(i.auth_time)),issuedAtTime:jo(yf(i.iat)),expirationTime:jo(yf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function yf(t){return Number(t)*1e3}function ng(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Yl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Vu(n);return i?JSON.parse(i):(Yl("Failed to decode base64 JWT payload"),null)}catch(i){return Yl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function CA(t){const e=ng(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function $s(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Wr&&xA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function xA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class TA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class tC{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=jo(this.lastLoginAt),this.creationTime=jo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Yu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await $s(t,EA(n,{idToken:r}));z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?kA(s.providerUserInfo):[],a=bA(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new tC(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function IA(t){const e=mt(t);await Yu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function kA(t){return t.map(e=>{var{providerId:n}=e,r=Nm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function PA(t,e){const n=await ZS(t,{},async()=>{const r=Zs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=eC(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",JS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function RA(t,e){return Yn(t,"POST","/v2/accounts:revokeToken",Vr(t,e))}/**
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
 */class _a{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):CA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await PA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new _a;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _a,this.toJSON())}_performRefresh(){return On("not implemented")}}/**
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
 */function tr(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class fi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Nm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new TA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new tC(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await $s(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return SA(this,e)}reload(){return IA(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new fi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Yu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await $s(this,wA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:y,emailVerified:w,isAnonymous:T,providerData:C,stsTokenManager:x}=n;z(y&&x,e,"internal-error");const b=_a.fromJSON(this.name,x);z(typeof y=="string",e,"internal-error"),tr(c,e.name),tr(f,e.name),z(typeof w=="boolean",e,"internal-error"),z(typeof T=="boolean",e,"internal-error"),tr(p,e.name),tr(v,e.name),tr(_,e.name),tr(S,e.name),tr(m,e.name),tr(h,e.name);const L=new fi({uid:y,auth:e,email:f,emailVerified:w,displayName:c,isAnonymous:T,photoURL:v,phoneNumber:p,tenantId:_,stsTokenManager:b,createdAt:m,lastLoginAt:h});return C&&Array.isArray(C)&&(L.providerData=C.map(F=>Object.assign({},F))),S&&(L._redirectEventId=S),L}static async _fromIdTokenResponse(e,n,r=!1){const i=new _a;i.updateFromServerResponse(n);const s=new fi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Yu(s),s}}/**
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
 */const vv=new Map;function Nn(t){Bn(t instanceof Function,"Expected a class definition");let e=vv.get(t);return e?(Bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,vv.set(t,e),e)}/**
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
 */class nC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}nC.type="NONE";const _v=nC;/**
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
 */function Ql(t,e,n){return`firebase:${t}:${e}:${n}`}class ms{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ql(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ql("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ms(Nn(_v),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Nn(_v);const o=Ql(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const c=fi._fromJSON(e,d);u!==s&&(a=c),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ms(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ms(s,e,r))}}/**
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
 */function wv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(aC(e))return"Blackberry";if(lC(e))return"Webos";if(rg(e))return"Safari";if((e.includes("chrome/")||iC(e))&&!e.includes("edge/"))return"Chrome";if(oC(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function rC(t=Xe()){return/firefox\//i.test(t)}function rg(t=Xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function iC(t=Xe()){return/crios\//i.test(t)}function sC(t=Xe()){return/iemobile/i.test(t)}function oC(t=Xe()){return/android/i.test(t)}function aC(t=Xe()){return/blackberry/i.test(t)}function lC(t=Xe()){return/webos/i.test(t)}function qc(t=Xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function OA(t=Xe()){var e;return qc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function NA(){return VO()&&document.documentMode===10}function uC(t=Xe()){return qc(t)||oC(t)||lC(t)||aC(t)||/windows phone/i.test(t)||sC(t)}function AA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function cC(t,e=[]){let n;switch(t){case"Browser":n=wv(Xe());break;case"Worker":n=`${wv(Xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${eo}/${r}`}/**
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
 */class LA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function DA(t,e={}){return Yn(t,"GET","/v2/passwordPolicy",Vr(t,e))}/**
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
 */const MA=6;class FA{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:MA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class $A{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ev(this),this.idTokenSubscription=new Ev(this),this.beforeStateQueue=new LA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=XS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ms.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Yu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?mt(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await DA(this),n=new FA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ua("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await RA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nn(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await ms.create(this,[Nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&uA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ni(t){return mt(t)}class Ev{constructor(e){this.auth=e,this.observer=null,this.addObserver=ZO(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Yc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jA(t){Yc=t}function dC(t){return Yc.loadJS(t)}function UA(){return Yc.recaptchaEnterpriseScript}function zA(){return Yc.gapiScript}function BA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const WA="recaptcha-enterprise",VA="NO_RECAPTCHA";class HA{constructor(e){this.type=WA,this.auth=Ni(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{_A(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new vA(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;yv(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(VA)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&yv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=UA();l.length!==0&&(l+=a),dC(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Sv(t,e,n,r=!1){const i=new HA(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ip(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Sv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Sv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function GA(t,e){const n=Zm(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Gu(s,e??{}))return i;nn(i,"already-initialized")}return n.initialize({options:e})}function KA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function qA(t,e,n){const r=Ni(t);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=fC(e),{host:o,port:a}=YA(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||QA()}function fC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function YA(t){const e=fC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Cv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Cv(o)}}}function Cv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function QA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ig{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return On("not implemented")}_getIdTokenResponse(e){return On("not implemented")}_linkToIdToken(e,n){return On("not implemented")}_getReauthenticationResolver(e){return On("not implemented")}}async function XA(t,e){return Yn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function JA(t,e){return Ba(t,"POST","/v1/accounts:signInWithPassword",Vr(t,e))}/**
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
 */async function ZA(t,e){return Ba(t,"POST","/v1/accounts:signInWithEmailLink",Vr(t,e))}async function e3(t,e){return Ba(t,"POST","/v1/accounts:signInWithEmailLink",Vr(t,e))}/**
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
 */class wa extends ig{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new wa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new wa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ip(e,n,"signInWithPassword",JA);case"emailLink":return ZA(e,{email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ip(e,r,"signUpPassword",XA);case"emailLink":return e3(e,{idToken:n,email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function gs(t,e){return Ba(t,"POST","/v1/accounts:signInWithIdp",Vr(t,e))}/**
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
 */const t3="http://localhost";class Ci extends ig{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ci(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Nm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ci(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return gs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,gs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gs(e,n)}buildRequest(){const e={requestUri:t3,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Zs(n)}return e}}/**
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
 */function n3(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function r3(t){const e=bo(ko(t)).link,n=e?bo(ko(e)).deep_link_id:null,r=bo(ko(t)).deep_link_id;return(r?bo(ko(r)).link:null)||r||n||e||t}class sg{constructor(e){var n,r,i,s,o,a;const l=bo(ko(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,c=n3((i=l.mode)!==null&&i!==void 0?i:null);z(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=r3(e);try{return new sg(n)}catch{return null}}}/**
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
 */class to{constructor(){this.providerId=to.PROVIDER_ID}static credential(e,n){return wa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=sg.parseLink(n);return z(r,"argument-error"),wa._fromEmailAndCode(e,r.code,r.tenantId)}}to.PROVIDER_ID="password";to.EMAIL_PASSWORD_SIGN_IN_METHOD="password";to.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class hC{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wa extends hC{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class lr extends Wa{constructor(){super("facebook.com")}static credential(e){return Ci._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch{return null}}}lr.FACEBOOK_SIGN_IN_METHOD="facebook.com";lr.PROVIDER_ID="facebook.com";/**
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
 */class ur extends Wa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ci._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ur.credential(n,r)}catch{return null}}}ur.GOOGLE_SIGN_IN_METHOD="google.com";ur.PROVIDER_ID="google.com";/**
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
 */class cr extends Wa{constructor(){super("github.com")}static credential(e){return Ci._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.GITHUB_SIGN_IN_METHOD="github.com";cr.PROVIDER_ID="github.com";/**
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
 */class dr extends Wa{constructor(){super("twitter.com")}static credential(e,n){return Ci._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.TWITTER_SIGN_IN_METHOD="twitter.com";dr.PROVIDER_ID="twitter.com";/**
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
 */async function i3(t,e){return Ba(t,"POST","/v1/accounts:signUp",Vr(t,e))}/**
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
 */class xi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await fi._fromIdTokenResponse(e,r,i),o=xv(r);return new xi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=xv(r);return new xi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function xv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Qu extends Wr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Qu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Qu(e,n,r,i)}}function pC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Qu._fromErrorAndOperation(t,s,e,r):s})}async function s3(t,e,n=!1){const r=await $s(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xi._forOperation(t,"link",r)}/**
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
 */async function o3(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await $s(t,pC(r,i,e,t),n);z(s.idToken,r,"internal-error");const o=ng(s.idToken);z(o,r,"internal-error");const{sub:a}=o;return z(t.uid===a,r,"user-mismatch"),xi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&nn(r,"user-mismatch"),s}}/**
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
 */async function mC(t,e,n=!1){const r="signIn",i=await pC(t,r,e),s=await xi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function a3(t,e){return mC(Ni(t),e)}/**
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
 */async function gC(t){const e=Ni(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function l3(t,e,n){const r=Ni(t),o=await ip(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",i3).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&gC(t),l}),a=await xi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function u3(t,e,n){return a3(mt(t),to.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&gC(t),r})}/**
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
 */async function c3(t,e){return Yn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function d3(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=mt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await $s(r,c3(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function f3(t,e,n,r){return mt(t).onIdTokenChanged(e,n,r)}function h3(t,e,n){return mt(t).beforeAuthStateChanged(e,n)}function p3(t){return mt(t).signOut()}const Xu="__sak";/**
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
 */class yC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xu,"1"),this.storage.removeItem(Xu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function m3(){const t=Xe();return rg(t)||qc(t)}const g3=1e3,y3=10;class vC extends yC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=m3()&&AA(),this.fallbackToPolling=uC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);NA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,y3):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},g3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}vC.type="LOCAL";const v3=vC;/**
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
 */class _C extends yC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}_C.type="SESSION";const wC=_C;/**
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
 */function _3(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Qc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Qc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await _3(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qc.receivers=[];/**
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
 */function og(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class w3{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=og("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const f=c;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function mn(){return window}function E3(t){mn().location.href=t}/**
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
 */function EC(){return typeof mn().WorkerGlobalScope<"u"&&typeof mn().importScripts=="function"}async function S3(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function C3(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function x3(){return EC()?self:null}/**
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
 */const SC="firebaseLocalStorageDb",T3=1,Ju="firebaseLocalStorage",CC="fbase_key";class Va{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xc(t,e){return t.transaction([Ju],e?"readwrite":"readonly").objectStore(Ju)}function I3(){const t=indexedDB.deleteDatabase(SC);return new Va(t).toPromise()}function sp(){const t=indexedDB.open(SC,T3);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ju,{keyPath:CC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ju)?e(r):(r.close(),await I3(),e(await sp()))})})}async function Tv(t,e,n){const r=Xc(t,!0).put({[CC]:e,value:n});return new Va(r).toPromise()}async function b3(t,e){const n=Xc(t,!1).get(e),r=await new Va(n).toPromise();return r===void 0?null:r.value}function Iv(t,e){const n=Xc(t,!0).delete(e);return new Va(n).toPromise()}const k3=800,P3=3;class xC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>P3)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return EC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qc._getInstance(x3()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await S3(),!this.activeServiceWorker)return;this.sender=new w3(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||C3()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sp();return await Tv(e,Xu,"1"),await Iv(e,Xu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Tv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>b3(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Iv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Xc(i,!1).getAll();return new Va(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),k3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xC.type="LOCAL";const R3=xC;new za(3e4,6e4);/**
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
 */function O3(t,e){return e?Nn(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ag extends ig{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function N3(t){return mC(t.auth,new ag(t),t.bypassAuthState)}function A3(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),o3(n,new ag(t),t.bypassAuthState)}async function L3(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),s3(n,new ag(t),t.bypassAuthState)}/**
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
 */class TC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return N3;case"linkViaPopup":case"linkViaRedirect":return L3;case"reauthViaPopup":case"reauthViaRedirect":return A3;default:nn(this.auth,"internal-error")}}resolve(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const D3=new za(2e3,1e4);class ss extends TC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ss.currentPopupAction&&ss.currentPopupAction.cancel(),ss.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Bn(this.filter.length===1,"Popup operations only handle one event");const e=og();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ss.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,D3.get())};e()}}ss.currentPopupAction=null;/**
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
 */const M3="pendingRedirect",Xl=new Map;class F3 extends TC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xl.get(this.auth._key());if(!e){try{const r=await $3(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xl.set(this.auth._key(),e)}return this.bypassAuthState||Xl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $3(t,e){const n=z3(e),r=U3(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function j3(t,e){Xl.set(t._key(),e)}function U3(t){return Nn(t._redirectPersistence)}function z3(t){return Ql(M3,t.config.apiKey,t.name)}async function B3(t,e,n=!1){const r=Ni(t),i=O3(r,e),o=await new F3(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const W3=10*60*1e3;class V3{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!H3(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!IC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(pn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=W3&&this.cachedEventUids.clear(),this.cachedEventUids.has(bv(e))}saveEventToCache(e){this.cachedEventUids.add(bv(e)),this.lastProcessedEventTime=Date.now()}}function bv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function IC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function H3(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return IC(t);default:return!1}}/**
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
 */async function G3(t,e={}){return Yn(t,"GET","/v1/projects",e)}/**
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
 */const K3=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,q3=/^https?/;async function Y3(t){if(t.config.emulator)return;const{authorizedDomains:e}=await G3(t);for(const n of e)try{if(Q3(n))return}catch{}nn(t,"unauthorized-domain")}function Q3(t){const e=rp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!q3.test(n))return!1;if(K3.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const X3=new za(3e4,6e4);function kv(){const t=mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function J3(t){return new Promise((e,n)=>{var r,i,s;function o(){kv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{kv(),n(pn(t,"network-request-failed"))},timeout:X3.get()})}if(!((i=(r=mn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=mn().gapi)===null||s===void 0)&&s.load)o();else{const a=BA("iframefcb");return mn()[a]=()=>{gapi.load?o():n(pn(t,"network-request-failed"))},dC(`${zA()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Jl=null,e})}let Jl=null;function Z3(t){return Jl=Jl||J3(t),Jl}/**
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
 */const eL=new za(5e3,15e3),tL="__/auth/iframe",nL="emulator/auth/iframe",rL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sL(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?tg(e,nL):`https://${t.config.authDomain}/${tL}`,r={apiKey:e.apiKey,appName:t.name,v:eo},i=iL.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Zs(r).slice(1)}`}async function oL(t){const e=await Z3(t),n=mn().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:sL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rL,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=pn(t,"network-request-failed"),a=mn().setTimeout(()=>{s(o)},eL.get());function l(){mn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const aL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lL=500,uL=600,cL="_blank",dL="http://localhost";class Pv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fL(t,e,n,r=lL,i=uL){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},aL),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Xe().toLowerCase();n&&(a=iC(u)?cL:n),rC(u)&&(e=e||dL,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[p,v])=>`${f}${p}=${v},`,"");if(OA(u)&&a!=="_self")return hL(e||"",a),new Pv(null);const c=window.open(e||"",a,d);z(c,t,"popup-blocked");try{c.focus()}catch{}return new Pv(c)}function hL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const pL="__/auth/handler",mL="emulator/auth/handler",gL=encodeURIComponent("fac");async function Rv(t,e,n,r,i,s){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:eo,eventId:i};if(e instanceof hC){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Xh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries(s||{}))o[d]=c}if(e instanceof Wa){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),u=l?`#${gL}=${encodeURIComponent(l)}`:"";return`${yL(t)}?${Zs(a).slice(1)}${u}`}function yL({config:t}){return t.emulator?tg(t,mL):`https://${t.authDomain}/${pL}`}/**
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
 */const vf="webStorageSupport";class vL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wC,this._completeRedirectFn=B3,this._overrideRedirectResult=j3}async _openPopup(e,n,r,i){var s;Bn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Rv(e,n,r,rp(),i);return fL(e,o,og())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Rv(e,n,r,rp(),i);return E3(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Bn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await oL(e),r=new V3(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(vf,{type:vf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[vf];o!==void 0&&n(!!o),nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Y3(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return uC()||rg()||qc()}}const _L=vL;var Ov="@firebase/auth",Nv="1.6.1";/**
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
 */class wL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function EL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function SL(t){Fs(new Ei("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cC(t)},u=new $A(r,i,s,l);return KA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Fs(new Ei("auth-internal",e=>{const n=Ni(e.getProvider("auth").getImmediate());return(r=>new wL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),kr(Ov,Nv,EL(t)),kr(Ov,Nv,"esm2017")}/**
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
 */const CL=5*60,xL=jS("authIdTokenMaxAge")||CL;let Av=null;const TL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>xL)return;const i=n==null?void 0:n.token;Av!==i&&(Av=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Jc(t=KS()){const e=Zm(t,"auth");if(e.isInitialized())return e.getImmediate();const n=GA(t,{popupRedirectResolver:_L,persistence:[R3,v3,wC]}),r=jS("authTokenSyncURL");if(r){const s=TL(r);h3(n,s,()=>s(n.currentUser)),f3(n,o=>s(o))}const i=FS("auth");return i&&qA(n,`http://${i}`),n}function IL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}jA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=pn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",IL().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});SL("Browser");const bC=ja("auth/register",async({value:t},e)=>{const{name:n,email:r,password:i}=t,s=Jc();try{const a=(await l3(s,r,i)).user;return await d3(a,{displayName:n}),{email:a.email,accessToken:a.accessToken,id:a.uid,name:a.displayName}}catch(o){return console.log(o),e.rejectWithValue(o.message)}}),kC=ja("auth/login",async({value:t},e)=>{const{email:n,password:r}=t,i=Jc();try{const o=(await u3(i,n,r)).user;return{email:o.email,accessToken:o.accessToken,id:o.uid,name:o.displayName}}catch(s){return e.rejectWithValue(s.message)}}),PC=ja("auth/logout",async(t,e)=>{const n=Jc();try{await p3(n)}catch(r){return e.rejectWithValue(r.message)}}),Zl=ja("auth/refresh",async(t,e)=>{const r=e.getState().auth.token,i=Jc();if(r===null)return e.rejectWithValue("Unable to fetch user");try{return new Promise((s,o)=>{i.onAuthStateChanged(a=>{a?s({name:a.displayName,email:a.email,token:a.accessToken,id:a.uid}):o("Unable to fetch user")})})}catch(s){return e.rejectWithValue(s.message)}}),bL=P.div`
  display: flex;
  gap: 8px;
`,kL=P.button`
  height: 48px;
  max-width: 166px;
  border: none;
  border-radius: 12px;
  background: ${oe.YELLOW_BUTTON};
  color: ${oe.WHITE};
  font-family: Roboto;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
  padding: 14px 39px 14px 39px;
  display: flex;
  align-items: center;
  white-space: nowrap;
`,PL=P.p`
  color: rgb(18, 20, 23);
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.333px;
  display: flex;
  align-items: center;
  white-space: nowrap;
`,RL=()=>{const t=Xs(),{name:e}=Bc(),n=()=>{t(PC())};return g.jsxs(bL,{children:[g.jsx(PL,{children:`Welcome, ${e}`}),g.jsx(kL,{type:"button",onClick:()=>n(),children:"Log Out"})]})},RC=({setNamePopUp:t})=>{const{isLoggedIn:e}=Bc(),n=()=>(t("login"),g.jsx(Ah,{to:"/login"})),r=()=>(t("signin"),g.jsx(Ah,{to:"/login"}));return g.jsxs(QP,{children:[g.jsxs(rR,{children:[g.jsxs(JP,{children:[g.jsx(YP,{to:"/",children:g.jsx(G2,{})}),g.jsx(XP,{to:"/",children:"LearnLingo"})]}),g.jsx(af,{to:"/",children:"Home"})]}),g.jsxs(iR,{isLoggedIn:e,children:[g.jsx(af,{to:"teachers",children:"Teachers"}),e&&g.jsx(af,{to:"favorites",children:"Favorites"}),e?g.jsx(RL,{}):g.jsxs(ZP,{children:[g.jsxs(eR,{type:"button",onClick:n,children:[g.jsx(nR,{children:g.jsx(H2,{})}),"Log in"]}),g.jsx(tR,{type:"button",onClick:()=>r(),children:"Registration"})]})]})]})};RC.propTypes={setNamePopUp:G.func.isRequired};const OL=P.div`
  width: 100%;
  padding: 0px 64px 32px 64px;
  text-align: center;
`,OC=({setNamePopUp:t})=>g.jsxs(g.Fragment,{children:[g.jsx(RC,{setNamePopUp:t}),g.jsx(OL,{children:g.jsx(E.Suspense,{fallback:g.jsx("div",{children:"Loading...."}),children:g.jsx(x2,{})})})]});OC.propTypes={setNamePopUp:G.func.isRequired};const NL=()=>g.jsxs("svg",{width:"46.047974",height:"55.784180",viewBox:"0 0 46.048 55.7842",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[g.jsx("desc",{children:"Created with Pixso."}),g.jsx("defs",{children:g.jsxs("linearGradient",{id:"paint_linear_9_2_0",x1:"23.024010",y1:"0.000000",x2:"23.024010",y2:"55.784241",gradientUnits:"userSpaceOnUse",children:[g.jsx("stop",{stopColor:"#FBE9BA"}),g.jsx("stop",{offset:"1.000000",stopColor:"#E7C885"})]})}),g.jsx("path",{id:"",d:"M31.5446 8.92163C33.5355 6.51074 34.5343 3.90588 34.5343 1.11597C34.5343 0.910522 34.5292 0.704102 34.5176 0.497314C34.5083 0.331787 34.495 0.165894 34.4769 0C33.0901 0.0733643 31.6154 0.502197 30.0564 1.27759C28.494 2.06458 27.2057 3.05115 26.1926 4.23767C24.1636 6.5813 23.021 9.44763 23.021 12.1257C23.021 12.4961 23.0442 12.8483 23.0845 13.183C26.2358 13.4443 29.142 11.7881 31.5446 8.92163ZM42.1438 48.865C43.2776 47.2157 44.2561 45.4218 45.0829 43.4728C45.4237 42.6465 45.7443 41.7855 46.048 40.8868C44.6476 40.2876 43.3889 39.444 42.2618 38.3524C39.7749 36.0007 38.5094 33.0387 38.4723 29.4792C38.4319 24.9095 40.4667 21.3475 44.5801 18.8043C42.2821 15.4709 38.8267 13.6208 34.2273 13.2422C32.5299 13.0951 30.458 13.4685 28.0031 14.3698C25.4071 15.3419 23.8757 15.8293 23.4238 15.8293C22.8195 15.8293 21.441 15.4124 19.2942 14.5901C17.1414 13.7708 15.4088 13.3538 14.0878 13.3538C11.6733 13.3948 9.43127 14.0352 7.35632 15.292C5.28137 16.5488 3.62354 18.2607 2.37732 20.4313C0.791626 23.1332 0 26.3575 0 30.0959C0 33.3596 0.587158 36.7306 1.75842 40.212C2.85205 43.4349 4.24817 46.262 5.94617 48.6997C7.52881 50.9828 8.84985 52.5942 9.90613 53.5343C11.5609 55.1045 13.2188 55.8518 14.8821 55.7794C15.9757 55.7416 17.4061 55.3593 19.1819 54.6259C20.9548 53.8959 22.6123 53.5343 24.1578 53.5343C25.6315 53.5343 27.243 53.8959 28.9968 54.6259C30.7448 55.3593 32.2465 55.7208 33.4916 55.7208C35.2261 55.6796 36.8458 54.9529 38.3575 53.5343C39.3328 52.67 40.5983 51.1138 42.1438 48.865Z",fill:"url(#paint_linear_9_2_0)",fillOpacity:"1.000000",fillRule:"evenodd"})]}),AL=()=>g.jsxs("svg",{width:"359.719971",height:"247.251221",viewBox:"0 0 359.72 247.251",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[g.jsx("desc",{children:"Created with Pixso."}),g.jsx("defs",{children:g.jsxs("linearGradient",{id:"paint_linear_9_1_0",x1:"179.859985",y1:"0.000000",x2:"179.859985",y2:"247.251175",gradientUnits:"userSpaceOnUse",children:[g.jsx("stop",{stopColor:"#EEB055"}),g.jsx("stop",{offset:"1.000000",stopColor:"#D08F38"})]})}),g.jsx("path",{id:"Union",d:"M6.41785 0C2.87329 0 0 2.87903 0 6.43042L0 240.821C0 244.372 2.87329 247.251 6.41785 247.251L353.302 247.251C356.847 247.251 359.72 244.372 359.72 240.821L359.72 6.43042C359.72 2.87903 356.847 0 353.302 0L6.41785 0Z",fill:"url(#paint_linear_9_1_0)",fillOpacity:"1.000000",fillRule:"nonzero"})]}),LL="/Learn-Lingo/assets/DashedBorderPNG-D4YHlSNr.png",DL=P.div`
  width: 100%;

  display: flex;
  gap: 24px;
  margin-bottom: 24px;
`,ML=P.div`
  max-width: 720px;
  border-radius: 30px;
  background: ${oe.SILVER_BACKGROUND};
  padding: 98px 108px 98px 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,FL=P.h1`
  width: 548px;
  text-align: start;
  margin-bottom: 32px;
`,$L=P.p`
  text-align: start;
  margin-bottom: 64px;
  color: ${oe.BLACK_TEXT};
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.32px;
  width: 471px;
`,jL=P.button`
  border-radius: 12px;
  background-color: ${oe.YELLOW_BUTTON};
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
    background-color: ${oe.YELLOW_HOVER_BUTTON};
  }
`,UL=P.div`
  position: relative;
  max-width: 568px;
  border-radius: 30px;
  background: ${oe.LIGHT_YELLOW};
  padding: 80px 118px 117px 114px;
`,zL=P.img`
  max-width: 336px;
  max-height: 333px;
`,BL=P.span`
  background-color: ${oe.LIGHT_YELLOW};
  border-radius: 8px;
  max-width: 195px;
  font-style: italic;
  letter-spacing: -0.96px;
  font-size: 48px;
  font-weight: 400;
`,WL=P.span`
  color: ${oe.BLACK_TEXT};
  font-size: 48px;
  font-weight: 500;
  line-height: 56px;
  text-align: start;
  font-style: normal;
  letter-spacing: -0.96px;
`,Lv=P.span`
  color: ${oe.BLACK_TEXT};
  font-size: 48px;
  font-weight: 500;
  line-height: 56px;
  letter-spacing: -0.96;
  text-align: start;
  font-style: normal;
`,VL=P.div`
  position: absolute;
  height: 176px;
  overflow: hidden;
  top: 354px;
  left: 103.64px;
`,HL=P.div`
  position: absolute;
  left: 260.56px;
`,GL=P.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1312px;
  height: 116px;
  gap: 100px;
  background-image: url(${LL});
  background-size: cover;
`,xl=P.li`
  display: flex;
  gap: 16px;
`,Tl=P.p`
  font-size: 28px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.56px;
`,Il=P.p`
  color: ${oe.BLACK_TEXT};
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;
  text-align: start;
  width: ${t=>t.width||"96px"};
`,KL="/Learn-Lingo/assets/sticker-CcJ1SqRC.png",qL=()=>g.jsxs(g.Fragment,{children:[g.jsxs(DL,{children:[g.jsxs(ML,{children:[g.jsxs(FL,{children:[g.jsx(WL,{children:"Unlock your potential with"}),"  ",g.jsx(Lv,{children:"the best"})," ",g.jsx(BL,{children:"language"})," ",g.jsx(Lv,{children:"tutors"})]}),g.jsx($L,{children:"Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors."}),g.jsx(ME,{to:"teachers",children:g.jsx(jL,{type:"button",children:"Get started"})})]}),g.jsxs(UL,{children:[g.jsx(zL,{src:KL,alt:"sticker"}),g.jsx(VL,{children:g.jsx(AL,{})}),g.jsx(HL,{children:g.jsx(NL,{})})]})]}),g.jsxs(GL,{children:[g.jsxs(xl,{children:[g.jsx(Tl,{children:"3,200 +"}),g.jsx(Il,{children:"Experienced tutors"})]}),g.jsxs(xl,{children:[g.jsx(Tl,{children:"300,000 +"}),g.jsx(Il,{children:"5-star tutor reviews"})]}),g.jsxs(xl,{children:[g.jsx(Tl,{children:"120 +"}),g.jsx(Il,{width:"74px",children:"Subjects taught"})]}),g.jsxs(xl,{children:[g.jsx(Tl,{children:"200 +"}),g.jsx(Il,{children:"Tutor nationalities"})]})]})]});var Dv={};const Mv="@firebase/database",Fv="1.0.3";/**
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
 */let NC="";function YL(t){NC=t}/**
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
 */class QL{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Pe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ya(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class XL{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return qn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const AC=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new QL(e)}}catch{}return new XL},oi=AC("localStorage"),op=AC("sessionStorage");/**
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
 */const ys=new Xm("@firebase/database"),JL=function(){let t=1;return function(){return t++}}(),LC=function(t){const e=nN(t),n=new JO;n.update(e);const r=n.digest();return Km.encodeByteArray(r)},Ha=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ha.apply(null,r):typeof r=="object"?e+=Pe(r):e+=r,e+=" "}return e};let hi=null,$v=!0;const ZL=function(t,e){R(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ys.logLevel=se.VERBOSE,hi=ys.log.bind(ys),e&&op.set("logging_enabled",!0)):typeof t=="function"?hi=t:(hi=null,op.remove("logging_enabled"))},Ye=function(...t){if($v===!0&&($v=!1,hi===null&&op.get("logging_enabled")===!0&&ZL(!0)),hi){const e=Ha.apply(null,t);hi(e)}},Ga=function(t){return function(...e){Ye(t,...e)}},ap=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ha(...t);ys.error(e)},Wn=function(...t){const e=`FIREBASE FATAL ERROR: ${Ha(...t)}`;throw ys.error(e),new Error(e)},It=function(...t){const e="FIREBASE WARNING: "+Ha(...t);ys.warn(e)},e4=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&It("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},DC=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},t4=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},js="[MIN_NAME]",Ti="[MAX_NAME]",no=function(t,e){if(t===e)return 0;if(t===js||e===Ti)return-1;if(e===js||t===Ti)return 1;{const n=jv(t),r=jv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},n4=function(t,e){return t===e?0:t<e?-1:1},po=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Pe(e))},lg=function(t){if(typeof t!="object"||t===null)return Pe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Pe(e[r]),n+=":",n+=lg(t[e[r]]);return n+="}",n},MC=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function pt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const FC=function(t){R(!DC(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(l=0;l<64;l+=8){let f=parseInt(d.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),c=c+f}return c.toLowerCase()},r4=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},i4=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function s4(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const o4=new RegExp("^-?(0*)\\d{1,10}$"),a4=-2147483648,l4=2147483647,jv=function(t){if(o4.test(t)){const e=Number(t);if(e>=a4&&e<=l4)return e}return null},Ka=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw It("Exception was thrown by user callback.",n),e},Math.floor(0))}},u4=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Uo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class c4{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){It(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class d4{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ye("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',It(e)}}class vs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}vs.OWNER="owner";/**
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
 */const ug="5",$C="v",jC="s",UC="r",zC="f",BC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,WC="ls",VC="p",lp="ac",HC="websocket",GC="long_polling";/**
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
 */class KC{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=oi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&oi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function f4(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function qC(t,e,n){R(typeof e=="string","typeof type must == string"),R(typeof n=="object","typeof params must == object");let r;if(e===HC)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===GC)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);f4(t)&&(n.ns=t.namespace);const i=[];return pt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class h4{constructor(){this.counters_={}}incrementCounter(e,n=1){qn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return DO(this.counters_)}}/**
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
 */const _f={},wf={};function cg(t){const e=t.toString();return _f[e]||(_f[e]=new h4),_f[e]}function p4(t,e){const n=t.toString();return wf[n]||(wf[n]=e()),wf[n]}/**
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
 */class m4{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ka(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Uv="start",g4="close",y4="pLPCommand",v4="pRTLPCB",YC="id",QC="pw",XC="ser",_4="cb",w4="seg",E4="ts",S4="d",C4="dframe",JC=1870,ZC=30,x4=JC-ZC,T4=25e3,I4=3e4;class os{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ga(e),this.stats_=cg(n),this.urlFn=l=>(this.appCheckToken&&(l[lp]=this.appCheckToken),qC(n,GC,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new m4(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(I4)),t4(()=>{if(this.isClosed_)return;this.scriptTagHolder=new dg((...s)=>{const[o,a,l,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Uv)this.id=a,this.password=l;else if(o===g4)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Uv]="t",r[XC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[_4]=this.scriptTagHolder.uniqueCallbackIdentifier),r[$C]=ug,this.transportSessionId&&(r[jC]=this.transportSessionId),this.lastSessionId&&(r[WC]=this.lastSessionId),this.applicationId&&(r[VC]=this.applicationId),this.appCheckToken&&(r[lp]=this.appCheckToken),typeof location<"u"&&location.hostname&&BC.test(location.hostname)&&(r[UC]=zC);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){os.forceAllow_=!0}static forceDisallow(){os.forceDisallow_=!0}static isAvailable(){return os.forceAllow_?!0:!os.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!r4()&&!i4()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=DS(n),i=MC(r,x4);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[C4]="t",r[YC]=e,r[QC]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class dg{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=JL(),window[y4+this.uniqueCallbackIdentifier]=e,window[v4+this.uniqueCallbackIdentifier]=n,this.myIFrame=dg.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ye("frame writing exception"),a.stack&&Ye(a.stack),Ye(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ye("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[YC]=this.myID,e[QC]=this.myPW,e[XC]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ZC+r.length<=JC;){const o=this.pendingSegs.shift();r=r+"&"+w4+i+"="+o.seg+"&"+E4+i+"="+o.ts+"&"+S4+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(T4)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ye("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const b4=16384,k4=45e3;let Zu=null;typeof MozWebSocket<"u"?Zu=MozWebSocket:typeof WebSocket<"u"&&(Zu=WebSocket);class qt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ga(this.connId),this.stats_=cg(n),this.connURL=qt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[$C]=ug,typeof location<"u"&&location.hostname&&BC.test(location.hostname)&&(o[UC]=zC),n&&(o[jC]=n),r&&(o[WC]=r),i&&(o[lp]=i),s&&(o[VC]=s),qC(e,HC,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,oi.set("previous_websocket_failure",!0);try{let r;zS(),this.mySock=new Zu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){qt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Zu!==null&&!qt.forceDisallow_}static previouslyFailed(){return oi.isInMemoryStorage||oi.get("previous_websocket_failure")===!0}markConnectionHealthy(){oi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ya(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(R(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=MC(n,b4);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(k4))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}qt.responsesRequiredToBeHealthy=2;qt.healthyTimeout=3e4;/**
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
 */class Ea{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[os,qt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=qt&&qt.isAvailable();let r=n&&!qt.previouslyFailed();if(e.webSocketOnly&&(n||It("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[qt];else{const i=this.transports_=[];for(const s of Ea.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Ea.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ea.globalTransportInitialized_=!1;/**
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
 */const P4=6e4,R4=5e3,O4=10*1024,N4=100*1024,Ef="t",zv="d",A4="s",Bv="r",L4="e",Wv="o",Vv="a",Hv="n",Gv="p",D4="h";class M4{constructor(e,n,r,i,s,o,a,l,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ga("c:"+this.id+":"),this.transportManager_=new Ea(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Uo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>N4?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>O4?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ef in e){const n=e[Ef];n===Vv?this.upgradeIfSecondaryHealthy_():n===Bv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Wv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=po("t",e),r=po("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Gv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Vv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Hv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=po("t",e),r=po("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=po(Ef,e);if(zv in e){const r=e[zv];if(n===D4){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Hv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===A4?this.onConnectionShutdown_(r):n===Bv?this.onReset_(r):n===L4?ap("Server Error: "+r):n===Wv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ap("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ug!==r&&It("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Uo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(P4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Uo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(R4))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Gv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(oi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class ex{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class tx{constructor(e){this.allowedEvents_=e,this.listeners_={},R(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){R(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class ec extends tx{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Qm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ec}getInitialEvent(e){return R(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Kv=32,qv=768;class ae{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Z(){return new ae("")}function Y(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Mr(t){return t.pieces_.length-t.pieceNum_}function ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ae(t.pieces_,e)}function nx(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function F4(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function rx(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ix(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ae(e,0)}function Re(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ae)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ae(n,0)}function K(t){return t.pieceNum_>=t.pieces_.length}function tt(t,e){const n=Y(t),r=Y(e);if(n===null)return e;if(n===r)return tt(ce(t),ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function sx(t,e){if(Mr(t)!==Mr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Yt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Mr(t)>Mr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class $4{constructor(e,n){this.errorPrefix_=n,this.parts_=rx(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Kc(this.parts_[r]);ox(this)}}function j4(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Kc(e),ox(t)}function U4(t){const e=t.parts_.pop();t.byteLength_-=Kc(e),t.parts_.length>0&&(t.byteLength_-=1)}function ox(t){if(t.byteLength_>qv)throw new Error(t.errorPrefix_+"has a key path longer than "+qv+" bytes ("+t.byteLength_+").");if(t.parts_.length>Kv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Kv+") or object contains a cycle "+ei(t))}function ei(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class fg extends tx{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new fg}getInitialEvent(e){return R(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const mo=1e3,z4=60*5*1e3,Yv=30*1e3,B4=1.3,W4=3e4,V4="server_kill",Qv=3;class Mn extends ex{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Mn.nextPersistentConnectionId_++,this.log_=Ga("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=mo,this.maxReconnectDelay_=z4,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!zS())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");fg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ec.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Pe(s)),R(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ym,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),R(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Mn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&qn(e,"w")){const r=Ms(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();It(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||XO(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Yv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=QO(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Pe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ap("Unrecognized action received from server: "+Pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){R(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=mo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=mo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>W4&&(this.reconnectDelay_=mo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*B4)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Mn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(c){R(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(c)};this.realtime_={close:l,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ye("getToken() completed but was canceled"):(Ye("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=f&&f.token,a=new M4(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{It(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(V4)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&It(c),l())}}}interrupt(e){Ye("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ye("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Xh(this.interruptReasons_)&&(this.reconnectDelay_=mo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>lg(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ae(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ye("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Qv&&(this.reconnectDelay_=Yv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ye("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Qv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+NC.replace(/\./g,"-")]=1,Qm()?e["framework.cordova"]=1:US()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ec.getInstance().currentlyOnline();return Xh(this.interruptReasons_)&&e}}Mn.nextPersistentConnectionId_=0;Mn.nextConnectionId_=0;/**
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
 */class Zc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new H(js,e),i=new H(js,n);return this.compare(r,i)!==0}minPost(){return H.MIN}}/**
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
 */let bl;class ax extends Zc{static get __EMPTY_NODE(){return bl}static set __EMPTY_NODE(e){bl=e}compare(e,n){return no(e.name,n.name)}isDefinedOn(e){throw Js("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return H.MIN}maxPost(){return new H(Ti,bl)}makePost(e,n){return R(typeof e=="string","KeyIndex indexValue must always be a string."),new H(e,bl)}toString(){return".key"}}const _s=new ax;/**
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
 */class kl{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Me{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Me.RED,this.left=i??ut.EMPTY_NODE,this.right=s??ut.EMPTY_NODE}copy(e,n,r,i,s){return new Me(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ut.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return ut.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Me.RED=!0;Me.BLACK=!1;class H4{copy(e,n,r,i,s){return this}insert(e,n,r){return new Me(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ut{constructor(e,n=ut.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ut(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Me.BLACK,null,null))}remove(e){return new ut(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Me.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new kl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new kl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new kl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new kl(this.root_,null,this.comparator_,!0,e)}}ut.EMPTY_NODE=new H4;/**
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
 */function G4(t,e){return no(t.name,e.name)}function hg(t,e){return no(t,e)}/**
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
 */let up;function K4(t){up=t}const lx=function(t){return typeof t=="number"?"number:"+FC(t):"string:"+t},ux=function(t){if(t.isLeafNode()){const e=t.val();R(typeof e=="string"||typeof e=="number"||typeof e=="object"&&qn(e,".sv"),"Priority must be a string or number.")}else R(t===up||t.isEmpty(),"priority of unexpected type.");R(t===up||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Xv;class Ae{constructor(e,n=Ae.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,R(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ux(this.priorityNode_)}static set __childrenNodeConstructor(e){Xv=e}static get __childrenNodeConstructor(){return Xv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ae(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return K(e)?this:Y(e)===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ae.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Y(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(R(r!==".priority"||Mr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ae.__childrenNodeConstructor.EMPTY_NODE.updateChild(ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+lx(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=FC(this.value_):e+=this.value_,this.lazyHash_=LC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ae.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ae.__childrenNodeConstructor?-1:(R(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ae.VALUE_TYPE_ORDER.indexOf(n),s=Ae.VALUE_TYPE_ORDER.indexOf(r);return R(i>=0,"Unknown leaf type: "+n),R(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ae.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let cx,dx;function q4(t){cx=t}function Y4(t){dx=t}class Q4 extends Zc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?no(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return H.MIN}maxPost(){return new H(Ti,new Ae("[PRIORITY-POST]",dx))}makePost(e,n){const r=cx(e);return new H(n,new Ae("[PRIORITY-POST]",r))}toString(){return".priority"}}const xe=new Q4;/**
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
 */const X4=Math.log(2);class J4{constructor(e){const n=s=>parseInt(Math.log(s)/X4,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const tc=function(t,e,n,r){t.sort(e);const i=function(l,u){const d=u-l;let c,f;if(d===0)return null;if(d===1)return c=t[l],f=n?n(c):c,new Me(f,c.node,Me.BLACK,null,null);{const p=parseInt(d/2,10)+l,v=i(l,p),_=i(p+1,u);return c=t[p],f=n?n(c):c,new Me(f,c.node,Me.BLACK,v,_)}},s=function(l){let u=null,d=null,c=t.length;const f=function(v,_){const S=c-v,m=c;c-=v;const h=i(S+1,m),y=t[S],w=n?n(y):y;p(new Me(w,y.node,_,null,h))},p=function(v){u?(u.left=v,u=v):(d=v,u=v)};for(let v=0;v<l.count;++v){const _=l.nextBitIsOne(),S=Math.pow(2,l.count-(v+1));_?f(S,Me.BLACK):(f(S,Me.BLACK),f(S,Me.RED))}return d},o=new J4(t.length),a=s(o);return new ut(r||e,a)};/**
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
 */let Sf;const Vi={};class An{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return R(Vi&&xe,"ChildrenNode.ts has not been loaded"),Sf=Sf||new An({".priority":Vi},{".priority":xe}),Sf}get(e){const n=Ms(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ut?n:null}hasIndex(e){return qn(this.indexSet_,e.toString())}addIndex(e,n){R(e!==_s,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(H.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=tc(r,e.getCompare()):a=Vi;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new An(d,u)}addToIndexes(e,n){const r=Hu(this.indexes_,(i,s)=>{const o=Ms(this.indexSet_,s);if(R(o,"Missing index implementation for "+s),i===Vi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(H.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),tc(a,o.getCompare())}else return Vi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new H(e.name,a))),l.insert(e,e.node)}});return new An(r,this.indexSet_)}removeFromIndexes(e,n){const r=Hu(this.indexes_,i=>{if(i===Vi)return i;{const s=n.get(e.name);return s?i.remove(new H(e.name,s)):i}});return new An(r,this.indexSet_)}}/**
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
 */let go;class j{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&ux(this.priorityNode_),this.children_.isEmpty()&&R(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return go||(go=new j(new ut(hg),null,An.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||go}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?go:n}}getChild(e){const n=Y(e);return n===null?this:this.getImmediateChild(n).getChild(ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(R(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new H(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?go:this.priorityNode_;return new j(i,o,s)}}updateChild(e,n){const r=Y(e);if(r===null)return n;{R(Y(e)!==".priority"||Mr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ce(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(xe,(o,a)=>{n[o]=a.val(e),r++,s&&j.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+lx(this.getPriority().val())+":"),this.forEachChild(xe,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":LC(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new H(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new H(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new H(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,H.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,H.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===qa?-1:0}withIndex(e){if(e===_s||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===_s||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(xe),i=n.getIterator(xe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===_s?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Z4 extends j{constructor(){super(new ut(hg),j.EMPTY_NODE,An.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const qa=new Z4;Object.defineProperties(H,{MIN:{value:new H(js,j.EMPTY_NODE)},MAX:{value:new H(Ti,qa)}});ax.__EMPTY_NODE=j.EMPTY_NODE;Ae.__childrenNodeConstructor=j;K4(qa);Y4(qa);/**
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
 */const eD=!0;function Be(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),R(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ae(n,Be(e))}if(!(t instanceof Array)&&eD){const n=[];let r=!1;if(pt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Be(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new H(o,l)))}}),n.length===0)return j.EMPTY_NODE;const s=tc(n,G4,o=>o.name,hg);if(r){const o=tc(n,xe.getCompare());return new j(s,Be(e),new An({".priority":o},{".priority":xe}))}else return new j(s,Be(e),An.Default)}else{let n=j.EMPTY_NODE;return pt(t,(r,i)=>{if(qn(t,r)&&r.substring(0,1)!=="."){const s=Be(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Be(e))}}q4(Be);/**
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
 */class tD extends Zc{constructor(e){super(),this.indexPath_=e,R(!K(e)&&Y(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?no(e.name,n.name):s}makePost(e,n){const r=Be(e),i=j.EMPTY_NODE.updateChild(this.indexPath_,r);return new H(n,i)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,qa);return new H(Ti,e)}toString(){return rx(this.indexPath_,0).join("/")}}/**
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
 */class nD extends Zc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?no(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return H.MIN}maxPost(){return H.MAX}makePost(e,n){const r=Be(e);return new H(n,r)}toString(){return".value"}}const rD=new nD;/**
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
 */function fx(t){return{type:"value",snapshotNode:t}}function Us(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Sa(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ca(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function iD(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class pg{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){R(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Sa(n,a)):R(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Us(n,r)):o.trackChildChange(Ca(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(xe,(i,s)=>{n.hasChild(i)||r.trackChildChange(Sa(i,s))}),n.isLeafNode()||n.forEachChild(xe,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Ca(i,s,o))}else r.trackChildChange(Us(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class xa{constructor(e){this.indexedFilter_=new pg(e.getIndex()),this.index_=e.getIndex(),this.startPost_=xa.getStartPost_(e),this.endPost_=xa.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new H(n,r))||(r=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=j.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(j.EMPTY_NODE);const s=this;return n.forEachChild(xe,(o,a)=>{s.matches(new H(o,a))||(i=i.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class sD{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new xa(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new H(n,r))||(r=j.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=j.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(j.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(f,p)=>c(p,f)}else o=this.index_.getCompare();const a=e;R(a.numChildren()===this.limit_,"");const l=new H(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const c=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,l);if(d&&!r.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(Ca(n,r,c)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Sa(n,c));const _=a.updateImmediateChild(n,j.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Us(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return r.isEmpty()?e:d&&o(u,l)>=0?(s!=null&&(s.trackChildChange(Sa(u.name,u.node)),s.trackChildChange(Us(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,j.EMPTY_NODE)):e}}/**
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
 */class mg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=xe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return R(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return R(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:js}hasEnd(){return this.endSet_}getIndexEndValue(){return R(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return R(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ti}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return R(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===xe}copy(){const e=new mg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function oD(t){return t.loadsAllData()?new pg(t.getIndex()):t.hasLimit()?new sD(t):new xa(t)}function Jv(t){const e={};if(t.isDefault())return e;let n;if(t.index_===xe?n="$priority":t.index_===rD?n="$value":t.index_===_s?n="$key":(R(t.index_ instanceof tD,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Pe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Pe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Pe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Pe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Pe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Zv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==xe&&(e.i=t.index_.toString()),e}/**
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
 */class nc extends ex{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ga("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(R(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=nc.getListenId_(e,r),a={};this.listens_[o]=a;const l=Jv(e._queryParams);this.restRequest_(s+".json",l,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Ms(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=nc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Jv(e._queryParams),r=e._path.toString(),i=new Ym;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Zs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ya(a.responseText)}catch{It("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&It("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class aD{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function rc(){return{value:null,children:new Map}}function hx(t,e,n){if(K(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Y(e);t.children.has(r)||t.children.set(r,rc());const i=t.children.get(r);e=ce(e),hx(i,e,n)}}function cp(t,e,n){t.value!==null?n(e,t.value):lD(t,(r,i)=>{const s=new ae(e.toString()+"/"+r);cp(i,s,n)})}function lD(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class uD{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&pt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const e_=10*1e3,cD=30*1e3,dD=5*60*1e3;class fD{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new uD(e);const r=e_+(cD-e_)*Math.random();Uo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;pt(e,(i,s)=>{s>0&&qn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Uo(this.reportStats_.bind(this),Math.floor(Math.random()*2*dD))}}/**
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
 */var Qt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Qt||(Qt={}));function px(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function gg(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function yg(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class ic{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Qt.ACK_USER_WRITE,this.source=px()}operationForChild(e){if(K(this.path)){if(this.affectedTree.value!=null)return R(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ae(e));return new ic(Z(),n,this.revert)}}else return R(Y(this.path)===e,"operationForChild called for unrelated child."),new ic(ce(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ta{constructor(e,n){this.source=e,this.path=n,this.type=Qt.LISTEN_COMPLETE}operationForChild(e){return K(this.path)?new Ta(this.source,Z()):new Ta(this.source,ce(this.path))}}/**
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
 */class Ii{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Qt.OVERWRITE}operationForChild(e){return K(this.path)?new Ii(this.source,Z(),this.snap.getImmediateChild(e)):new Ii(this.source,ce(this.path),this.snap)}}/**
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
 */class Ia{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Qt.MERGE}operationForChild(e){if(K(this.path)){const n=this.children.subtree(new ae(e));return n.isEmpty()?null:n.value?new Ii(this.source,Z(),n.value):new Ia(this.source,Z(),n)}else return R(Y(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ia(this.source,ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Fr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(K(e))return this.isFullyInitialized()&&!this.filtered_;const n=Y(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class hD{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function pD(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(iD(o.childName,o.snapshotNode))}),yo(t,i,"child_removed",e,r,n),yo(t,i,"child_added",e,r,n),yo(t,i,"child_moved",s,r,n),yo(t,i,"child_changed",e,r,n),yo(t,i,"value",e,r,n),i}function yo(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>gD(t,a,l)),o.forEach(a=>{const l=mD(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function mD(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function gD(t,e,n){if(e.childName==null||n.childName==null)throw Js("Should only compare child_ events.");const r=new H(e.childName,e.snapshotNode),i=new H(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function ed(t,e){return{eventCache:t,serverCache:e}}function zo(t,e,n,r){return ed(new Fr(e,n,r),t.serverCache)}function mx(t,e,n,r){return ed(t.eventCache,new Fr(e,n,r))}function sc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function bi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Cf;const yD=()=>(Cf||(Cf=new ut(n4)),Cf);class me{constructor(e,n=yD()){this.value=e,this.children=n}static fromObject(e){let n=new me(null);return pt(e,(r,i)=>{n=n.set(new ae(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Z(),value:this.value};if(K(e))return null;{const r=Y(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ce(e),n);return s!=null?{path:Re(new ae(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(K(e))return this;{const n=Y(e),r=this.children.get(n);return r!==null?r.subtree(ce(e)):new me(null)}}set(e,n){if(K(e))return new me(n,this.children);{const r=Y(e),s=(this.children.get(r)||new me(null)).set(ce(e),n),o=this.children.insert(r,s);return new me(this.value,o)}}remove(e){if(K(e))return this.children.isEmpty()?new me(null):new me(null,this.children);{const n=Y(e),r=this.children.get(n);if(r){const i=r.remove(ce(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new me(null):new me(this.value,s)}else return this}}get(e){if(K(e))return this.value;{const n=Y(e),r=this.children.get(n);return r?r.get(ce(e)):null}}setTree(e,n){if(K(e))return n;{const r=Y(e),s=(this.children.get(r)||new me(null)).setTree(ce(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new me(this.value,o)}}fold(e){return this.fold_(Z(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Re(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Z(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(K(e))return null;{const s=Y(e),o=this.children.get(s);return o?o.findOnPath_(ce(e),Re(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Z(),n)}foreachOnPath_(e,n,r){if(K(e))return this;{this.value&&r(n,this.value);const i=Y(e),s=this.children.get(i);return s?s.foreachOnPath_(ce(e),Re(n,i),r):new me(null)}}foreach(e){this.foreach_(Z(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Re(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class en{constructor(e){this.writeTree_=e}static empty(){return new en(new me(null))}}function Bo(t,e,n){if(K(e))return new en(new me(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=tt(i,e);return s=s.updateChild(o,n),new en(t.writeTree_.set(i,s))}else{const i=new me(n),s=t.writeTree_.setTree(e,i);return new en(s)}}}function t_(t,e,n){let r=t;return pt(n,(i,s)=>{r=Bo(r,Re(e,i),s)}),r}function n_(t,e){if(K(e))return en.empty();{const n=t.writeTree_.setTree(e,new me(null));return new en(n)}}function dp(t,e){return Ai(t,e)!=null}function Ai(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(tt(n.path,e)):null}function r_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(xe,(r,i)=>{e.push(new H(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new H(r,i.value))}),e}function Pr(t,e){if(K(e))return t;{const n=Ai(t,e);return n!=null?new en(new me(n)):new en(t.writeTree_.subtree(e))}}function fp(t){return t.writeTree_.isEmpty()}function zs(t,e){return gx(Z(),t.writeTree_,e)}function gx(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(R(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=gx(Re(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Re(t,".priority"),r)),n}}/**
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
 */function td(t,e){return wx(e,t)}function vD(t,e,n,r,i){R(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Bo(t.visibleWrites,e,n)),t.lastWriteId=r}function _D(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function wD(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);R(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&ED(a,r.path)?i=!1:Yt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return SD(t),!0;if(r.snap)t.visibleWrites=n_(t.visibleWrites,r.path);else{const a=r.children;pt(a,l=>{t.visibleWrites=n_(t.visibleWrites,Re(r.path,l))})}return!0}else return!1}function ED(t,e){if(t.snap)return Yt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Yt(Re(t.path,n),e))return!0;return!1}function SD(t){t.visibleWrites=yx(t.allWrites,CD,Z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function CD(t){return t.visible}function yx(t,e,n){let r=en.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Yt(n,o)?(a=tt(n,o),r=Bo(r,a,s.snap)):Yt(o,n)&&(a=tt(o,n),r=Bo(r,Z(),s.snap.getChild(a)));else if(s.children){if(Yt(n,o))a=tt(n,o),r=t_(r,a,s.children);else if(Yt(o,n))if(a=tt(o,n),K(a))r=t_(r,Z(),s.children);else{const l=Ms(s.children,Y(a));if(l){const u=l.getChild(ce(a));r=Bo(r,Z(),u)}}}else throw Js("WriteRecord should have .snap or .children")}}return r}function vx(t,e,n,r,i){if(!r&&!i){const s=Ai(t.visibleWrites,e);if(s!=null)return s;{const o=Pr(t.visibleWrites,e);if(fp(o))return n;if(n==null&&!dp(o,Z()))return null;{const a=n||j.EMPTY_NODE;return zs(o,a)}}}else{const s=Pr(t.visibleWrites,e);if(!i&&fp(s))return n;if(!i&&n==null&&!dp(s,Z()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Yt(u.path,e)||Yt(e,u.path))},a=yx(t.allWrites,o,e),l=n||j.EMPTY_NODE;return zs(a,l)}}}function xD(t,e,n){let r=j.EMPTY_NODE;const i=Ai(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(xe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Pr(t.visibleWrites,e);return n.forEachChild(xe,(o,a)=>{const l=zs(Pr(s,new ae(o)),a);r=r.updateImmediateChild(o,l)}),r_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Pr(t.visibleWrites,e);return r_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function TD(t,e,n,r,i){R(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Re(e,n);if(dp(t.visibleWrites,s))return null;{const o=Pr(t.visibleWrites,s);return fp(o)?i.getChild(n):zs(o,i.getChild(n))}}function ID(t,e,n,r){const i=Re(e,n),s=Ai(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Pr(t.visibleWrites,i);return zs(o,r.getNode().getImmediateChild(n))}else return null}function bD(t,e){return Ai(t.visibleWrites,e)}function kD(t,e,n,r,i,s,o){let a;const l=Pr(t.visibleWrites,e),u=Ai(l,Z());if(u!=null)a=u;else if(n!=null)a=zs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],c=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let p=f.getNext();for(;p&&d.length<i;)c(p,r)!==0&&d.push(p),p=f.getNext();return d}else return[]}function PD(){return{visibleWrites:en.empty(),allWrites:[],lastWriteId:-1}}function oc(t,e,n,r){return vx(t.writeTree,t.treePath,e,n,r)}function vg(t,e){return xD(t.writeTree,t.treePath,e)}function i_(t,e,n,r){return TD(t.writeTree,t.treePath,e,n,r)}function ac(t,e){return bD(t.writeTree,Re(t.treePath,e))}function RD(t,e,n,r,i,s){return kD(t.writeTree,t.treePath,e,n,r,i,s)}function _g(t,e,n){return ID(t.writeTree,t.treePath,e,n)}function _x(t,e){return wx(Re(t.treePath,e),t.writeTree)}function wx(t,e){return{treePath:t,writeTree:e}}/**
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
 */class OD{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;R(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),R(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Ca(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Sa(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Us(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Ca(r,e.snapshotNode,i.oldSnap));else throw Js("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class ND{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Ex=new ND;class wg{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Fr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return _g(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:bi(this.viewCache_),s=RD(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function AD(t){return{filter:t}}function LD(t,e){R(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),R(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function DD(t,e,n,r,i){const s=new OD;let o,a;if(n.type===Qt.OVERWRITE){const u=n;u.source.fromUser?o=hp(t,e,u.path,u.snap,r,i,s):(R(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!K(u.path),o=lc(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===Qt.MERGE){const u=n;u.source.fromUser?o=FD(t,e,u.path,u.children,r,i,s):(R(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=pp(t,e,u.path,u.children,r,i,a,s))}else if(n.type===Qt.ACK_USER_WRITE){const u=n;u.revert?o=UD(t,e,u.path,r,i,s):o=$D(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Qt.LISTEN_COMPLETE)o=jD(t,e,n.path,r,s);else throw Js("Unknown operation type: "+n.type);const l=s.getChanges();return MD(e,o,l),{viewCache:o,changes:l}}function MD(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=sc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(fx(sc(e)))}}function Sx(t,e,n,r,i,s){const o=e.eventCache;if(ac(r,n)!=null)return e;{let a,l;if(K(n))if(R(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=bi(e),d=u instanceof j?u:j.EMPTY_NODE,c=vg(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=oc(r,bi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=Y(n);if(u===".priority"){R(Mr(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const c=i_(r,n,d,l);c!=null?a=t.filter.updatePriority(d,c):a=o.getNode()}else{const d=ce(n);let c;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=i_(r,n,o.getNode(),l);f!=null?c=o.getNode().getImmediateChild(u).updateChild(d,f):c=o.getNode().getImmediateChild(u)}else c=_g(r,u,e.serverCache);c!=null?a=t.filter.updateChild(o.getNode(),u,c,d,i,s):a=o.getNode()}}return zo(e,a,o.isFullyInitialized()||K(n),t.filter.filtersNodes())}}function lc(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(K(n))u=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,r);u=d.updateFullNode(l.getNode(),p,null)}else{const p=Y(n);if(!l.isCompleteForPath(n)&&Mr(n)>1)return e;const v=ce(n),S=l.getNode().getImmediateChild(p).updateChild(v,r);p===".priority"?u=d.updatePriority(l.getNode(),S):u=d.updateChild(l.getNode(),p,S,v,Ex,null)}const c=mx(e,u,l.isFullyInitialized()||K(n),d.filtersNodes()),f=new wg(i,c,s);return Sx(t,c,n,i,f,a)}function hp(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const d=new wg(i,e,s);if(K(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=zo(e,u,!0,t.filter.filtersNodes());else{const c=Y(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=zo(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=ce(n),p=a.getNode().getImmediateChild(c);let v;if(K(f))v=r;else{const _=d.getCompleteChild(c);_!=null?nx(f)===".priority"&&_.getChild(ix(f)).isEmpty()?v=_:v=_.updateChild(f,r):v=j.EMPTY_NODE}if(p.equals(v))l=e;else{const _=t.filter.updateChild(a.getNode(),c,v,f,d,o);l=zo(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function s_(t,e){return t.eventCache.isCompleteForChild(e)}function FD(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const d=Re(n,l);s_(e,Y(d))&&(a=hp(t,a,d,u,i,s,o))}),r.foreach((l,u)=>{const d=Re(n,l);s_(e,Y(d))||(a=hp(t,a,d,u,i,s,o))}),a}function o_(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function pp(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;K(n)?u=r:u=new me(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,f)=>{if(d.hasChild(c)){const p=e.serverCache.getNode().getImmediateChild(c),v=o_(t,p,f);l=lc(t,l,new ae(c),v,i,s,o,a)}}),u.children.inorderTraversal((c,f)=>{const p=!e.serverCache.isCompleteForChild(c)&&f.value===null;if(!d.hasChild(c)&&!p){const v=e.serverCache.getNode().getImmediateChild(c),_=o_(t,v,f);l=lc(t,l,new ae(c),_,i,s,o,a)}}),l}function $D(t,e,n,r,i,s,o){if(ac(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(K(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return lc(t,e,n,l.getNode().getChild(n),i,s,a,o);if(K(n)){let u=new me(null);return l.getNode().forEachChild(_s,(d,c)=>{u=u.set(new ae(d),c)}),pp(t,e,n,u,i,s,a,o)}else return e}else{let u=new me(null);return r.foreach((d,c)=>{const f=Re(n,d);l.isCompleteForPath(f)&&(u=u.set(d,l.getNode().getChild(f)))}),pp(t,e,n,u,i,s,a,o)}}function jD(t,e,n,r,i){const s=e.serverCache,o=mx(e,s.getNode(),s.isFullyInitialized()||K(n),s.isFiltered());return Sx(t,o,n,r,Ex,i)}function UD(t,e,n,r,i,s){let o;if(ac(r,n)!=null)return e;{const a=new wg(r,e,i),l=e.eventCache.getNode();let u;if(K(n)||Y(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=oc(r,bi(e));else{const c=e.serverCache.getNode();R(c instanceof j,"serverChildren would be complete if leaf node"),d=vg(r,c)}d=d,u=t.filter.updateFullNode(l,d,s)}else{const d=Y(n);let c=_g(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=l.getImmediateChild(d)),c!=null?u=t.filter.updateChild(l,d,c,ce(n),a,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(l,d,j.EMPTY_NODE,ce(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=oc(r,bi(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||ac(r,Z())!=null,zo(e,u,o,t.filter.filtersNodes())}}/**
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
 */class zD{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new pg(r.getIndex()),s=oD(r);this.processor_=AD(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(j.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(j.EMPTY_NODE,a.getNode(),null),d=new Fr(l,o.isFullyInitialized(),i.filtersNodes()),c=new Fr(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=ed(c,d),this.eventGenerator_=new hD(this.query_)}get query(){return this.query_}}function BD(t){return t.viewCache_.serverCache.getNode()}function WD(t){return sc(t.viewCache_)}function VD(t,e){const n=bi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!K(e)&&!n.getImmediateChild(Y(e)).isEmpty())?n.getChild(e):null}function a_(t){return t.eventRegistrations_.length===0}function HD(t,e){t.eventRegistrations_.push(e)}function l_(t,e,n){const r=[];if(n){R(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function u_(t,e,n,r){e.type===Qt.MERGE&&e.source.queryId!==null&&(R(bi(t.viewCache_),"We should always have a full cache before handling merges"),R(sc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=DD(t.processor_,i,e,n,r);return LD(t.processor_,s.viewCache),R(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Cx(t,s.changes,s.viewCache.eventCache.getNode(),null)}function GD(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(xe,(s,o)=>{r.push(Us(s,o))}),n.isFullyInitialized()&&r.push(fx(n.getNode())),Cx(t,r,n.getNode(),e)}function Cx(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return pD(t.eventGenerator_,e,n,i)}/**
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
 */let uc;class xx{constructor(){this.views=new Map}}function KD(t){R(!uc,"__referenceConstructor has already been defined"),uc=t}function qD(){return R(uc,"Reference.ts has not been loaded"),uc}function YD(t){return t.views.size===0}function Eg(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return R(s!=null,"SyncTree gave us an op for an invalid query."),u_(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(u_(o,e,n,r));return s}}function Tx(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=oc(n,i?r:null),l=!1;a?l=!0:r instanceof j?(a=vg(n,r),l=!1):(a=j.EMPTY_NODE,l=!1);const u=ed(new Fr(a,l,!1),new Fr(r,i,!1));return new zD(e,u)}return o}function QD(t,e,n,r,i,s){const o=Tx(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),HD(o,n),GD(o,n)}function XD(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=$r(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(l_(u,n,r)),a_(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(l_(l,n,r)),a_(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!$r(t)&&s.push(new(qD())(e._repo,e._path)),{removed:s,events:o}}function Ix(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Rr(t,e){let n=null;for(const r of t.views.values())n=n||VD(r,e);return n}function bx(t,e){if(e._queryParams.loadsAllData())return nd(t);{const r=e._queryIdentifier;return t.views.get(r)}}function kx(t,e){return bx(t,e)!=null}function $r(t){return nd(t)!=null}function nd(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let cc;function JD(t){R(!cc,"__referenceConstructor has already been defined"),cc=t}function ZD(){return R(cc,"Reference.ts has not been loaded"),cc}let e6=1;class c_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new me(null),this.pendingWriteTree_=PD(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function t6(t,e,n,r,i){return vD(t.pendingWriteTree_,e,n,r,i),i?Qa(t,new Ii(px(),e,n)):[]}function as(t,e,n=!1){const r=_D(t.pendingWriteTree_,e);if(wD(t.pendingWriteTree_,e)){let s=new me(null);return r.snap!=null?s=s.set(Z(),!0):pt(r.children,o=>{s=s.set(new ae(o),!0)}),Qa(t,new ic(r.path,s,n))}else return[]}function Ya(t,e,n){return Qa(t,new Ii(gg(),e,n))}function n6(t,e,n){const r=me.fromObject(n);return Qa(t,new Ia(gg(),e,r))}function r6(t,e){return Qa(t,new Ta(gg(),e))}function i6(t,e,n){const r=Sg(t,n);if(r){const i=Cg(r),s=i.path,o=i.queryId,a=tt(s,e),l=new Ta(yg(o),a);return xg(t,s,l)}else return[]}function Px(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||kx(o,e))){const l=XD(o,e,n,r);YD(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const d=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(f,p)=>$r(p));if(d&&!c){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const p=l6(f);for(let v=0;v<p.length;++v){const _=p[v],S=_.query,m=Lx(t,_);t.listenProvider_.startListening(Wo(S),ba(t,S),m.hashFn,m.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(Wo(e),null):u.forEach(f=>{const p=t.queryToTagMap.get(rd(f));t.listenProvider_.stopListening(Wo(f),p)}))}u6(t,u)}return a}function Rx(t,e,n,r){const i=Sg(t,r);if(i!=null){const s=Cg(i),o=s.path,a=s.queryId,l=tt(o,e),u=new Ii(yg(a),l,n);return xg(t,o,u)}else return[]}function s6(t,e,n,r){const i=Sg(t,r);if(i){const s=Cg(i),o=s.path,a=s.queryId,l=tt(o,e),u=me.fromObject(n),d=new Ia(yg(a),l,u);return xg(t,o,d)}else return[]}function o6(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,p)=>{const v=tt(f,i);s=s||Rr(p,v),o=o||$r(p)});let a=t.syncPointTree_.get(i);a?(o=o||$r(a),s=s||Rr(a,Z())):(a=new xx,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=j.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,v)=>{const _=Rr(v,Z());_&&(s=s.updateImmediateChild(p,_))}));const u=kx(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=rd(e);R(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=c6();t.queryToTagMap.set(f,p),t.tagToQueryMap.set(p,f)}const d=td(t.pendingWriteTree_,i);let c=QD(a,e,n,d,s,l);if(!u&&!o&&!r){const f=bx(a,e);c=c.concat(d6(t,e,f))}return c}function Ox(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=tt(o,e),u=Rr(a,l);if(u)return u});return vx(i,e,s,n,!0)}function a6(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=tt(u,n);r=r||Rr(d,c)});let i=t.syncPointTree_.get(n);i?r=r||Rr(i,Z()):(i=new xx,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Fr(r,!0,!1):null,a=td(t.pendingWriteTree_,e._path),l=Tx(i,e,a,s?o.getNode():j.EMPTY_NODE,s);return WD(l)}function Qa(t,e){return Nx(e,t.syncPointTree_,null,td(t.pendingWriteTree_,Z()))}function Nx(t,e,n,r){if(K(t.path))return Ax(t,e,n,r);{const i=e.get(Z());n==null&&i!=null&&(n=Rr(i,Z()));let s=[];const o=Y(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,d=_x(r,o);s=s.concat(Nx(a,l,u,d))}return i&&(s=s.concat(Eg(i,t,r,n))),s}}function Ax(t,e,n,r){const i=e.get(Z());n==null&&i!=null&&(n=Rr(i,Z()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=_x(r,o),d=t.operationForChild(o);d&&(s=s.concat(Ax(d,a,l,u)))}),i&&(s=s.concat(Eg(i,t,r,n))),s}function Lx(t,e){const n=e.query,r=ba(t,n);return{hashFn:()=>(BD(e)||j.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?i6(t,n._path,r):r6(t,n._path);{const s=s4(i,n);return Px(t,n,null,s)}}}}function ba(t,e){const n=rd(e);return t.queryToTagMap.get(n)}function rd(t){return t._path.toString()+"$"+t._queryIdentifier}function Sg(t,e){return t.tagToQueryMap.get(e)}function Cg(t){const e=t.indexOf("$");return R(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ae(t.substr(0,e))}}function xg(t,e,n){const r=t.syncPointTree_.get(e);R(r,"Missing sync point for query tag that we're tracking");const i=td(t.pendingWriteTree_,e);return Eg(r,n,i,null)}function l6(t){return t.fold((e,n,r)=>{if(n&&$r(n))return[nd(n)];{let i=[];return n&&(i=Ix(n)),pt(r,(s,o)=>{i=i.concat(o)}),i}})}function Wo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(ZD())(t._repo,t._path):t}function u6(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=rd(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function c6(){return e6++}function d6(t,e,n){const r=e._path,i=ba(t,e),s=Lx(t,n),o=t.listenProvider_.startListening(Wo(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)R(!$r(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,d,c)=>{if(!K(u)&&d&&$r(d))return[nd(d).query];{let f=[];return d&&(f=f.concat(Ix(d).map(p=>p.query))),pt(c,(p,v)=>{f=f.concat(v)}),f}});for(let u=0;u<l.length;++u){const d=l[u];t.listenProvider_.stopListening(Wo(d),ba(t,d))}}return o}/**
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
 */class Tg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Tg(n)}node(){return this.node_}}class Ig{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Re(this.path_,e);return new Ig(this.syncTree_,n)}node(){return Ox(this.syncTree_,this.path_)}}const f6=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},d_=function(t,e,n){if(!t||typeof t!="object")return t;if(R(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return h6(t[".sv"],e,n);if(typeof t[".sv"]=="object")return p6(t[".sv"],e);R(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},h6=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:R(!1,"Unexpected server value: "+t)}},p6=function(t,e,n){t.hasOwnProperty("increment")||R(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&R(!1,"Unexpected increment value: "+r);const i=e.node();if(R(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},m6=function(t,e,n,r){return bg(e,new Ig(n,t),r)},g6=function(t,e,n){return bg(t,new Tg(e),n)};function bg(t,e,n){const r=t.getPriority().val(),i=d_(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=d_(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ae(a,Be(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ae(i))),o.forEachChild(xe,(a,l)=>{const u=bg(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class kg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Pg(t,e){let n=e instanceof ae?e:new ae(e),r=t,i=Y(n);for(;i!==null;){const s=Ms(r.node.children,i)||{children:{},childCount:0};r=new kg(i,r,s),n=ce(n),i=Y(n)}return r}function ro(t){return t.node.value}function Dx(t,e){t.node.value=e,mp(t)}function Mx(t){return t.node.childCount>0}function y6(t){return ro(t)===void 0&&!Mx(t)}function id(t,e){pt(t.node.children,(n,r)=>{e(new kg(n,t,r))})}function Fx(t,e,n,r){n&&!r&&e(t),id(t,i=>{Fx(i,e,!0,r)}),n&&r&&e(t)}function v6(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Xa(t){return new ae(t.parent===null?t.name:Xa(t.parent)+"/"+t.name)}function mp(t){t.parent!==null&&_6(t.parent,t.name,t)}function _6(t,e,n){const r=y6(n),i=qn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,mp(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,mp(t))}/**
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
 */const w6=/[\[\].#$\/\u0000-\u001F\u007F]/,E6=/[\[\].#$\u0000-\u001F\u007F]/,xf=10*1024*1024,$x=function(t){return typeof t=="string"&&t.length!==0&&!w6.test(t)},jx=function(t){return typeof t=="string"&&t.length!==0&&!E6.test(t)},S6=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),jx(t)},Ux=function(t,e,n){const r=n instanceof ae?new $4(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ei(r));if(typeof e=="function")throw new Error(t+"contains a function "+ei(r)+" with contents = "+e.toString());if(DC(e))throw new Error(t+"contains "+e.toString()+" "+ei(r));if(typeof e=="string"&&e.length>xf/3&&Kc(e)>xf)throw new Error(t+"contains a string greater than "+xf+" utf8 bytes "+ei(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(pt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!$x(o)))throw new Error(t+" contains an invalid key ("+o+") "+ei(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);j4(r,o),Ux(t,a,r),U4(r)}),i&&s)throw new Error(t+' contains ".value" child '+ei(r)+" in addition to actual children.")}},zx=function(t,e,n,r){if(!(r&&n===void 0)&&!jx(n))throw new Error(WS(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},C6=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),zx(t,e,n,r)},x6=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!$x(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!S6(n))throw new Error(WS(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class T6{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function I6(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!sx(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Hr(t,e,n){I6(t,n),b6(t,r=>Yt(r,e)||Yt(e,r))}function b6(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(k6(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function k6(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();hi&&Ye("event: "+n.toString()),Ka(r)}}}/**
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
 */const P6="repo_interrupt",R6=25;class O6{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new T6,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=rc(),this.transactionQueueTree_=new kg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function N6(t,e,n){if(t.stats_=cg(t.repoInfo_),t.forceRestClient_||u4())t.server_=new nc(t.repoInfo_,(r,i,s,o)=>{f_(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>h_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Pe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Mn(t.repoInfo_,e,(r,i,s,o)=>{f_(t,r,i,s,o)},r=>{h_(t,r)},r=>{L6(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=p4(t.repoInfo_,()=>new fD(t.stats_,t.server_)),t.infoData_=new aD,t.infoSyncTree_=new c_({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Ya(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Rg(t,"connected",!1),t.serverSyncTree_=new c_({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);Hr(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function A6(t){const n=t.infoData_.getNode(new ae(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Bx(t){return f6({timestamp:A6(t)})}function f_(t,e,n,r,i){t.dataUpdateCount++;const s=new ae(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Hu(n,u=>Be(u));o=s6(t.serverSyncTree_,s,l,i)}else{const l=Be(n);o=Rx(t.serverSyncTree_,s,l,i)}else if(r){const l=Hu(n,u=>Be(u));o=n6(t.serverSyncTree_,s,l)}else{const l=Be(n);o=Ya(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Ag(t,s)),Hr(t.eventQueue_,a,o)}function h_(t,e){Rg(t,"connected",e),e===!1&&F6(t)}function L6(t,e){pt(e,(n,r)=>{Rg(t,n,r)})}function Rg(t,e,n){const r=new ae("/.info/"+e),i=Be(n);t.infoData_.updateSnapshot(r,i);const s=Ya(t.infoSyncTree_,r,i);Hr(t.eventQueue_,r,s)}function D6(t){return t.nextWriteId_++}function M6(t,e,n){const r=a6(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Be(i).withIndex(e._queryParams.getIndex());o6(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ya(t.serverSyncTree_,e._path,s);else{const a=ba(t.serverSyncTree_,e);o=Rx(t.serverSyncTree_,e._path,s,a)}return Hr(t.eventQueue_,e._path,o),Px(t.serverSyncTree_,e,n,null,!0),s},i=>(Og(t,"get for query "+Pe(e)+" failed: "+i),Promise.reject(new Error(i))))}function F6(t){Og(t,"onDisconnectEvents");const e=Bx(t),n=rc();cp(t.onDisconnect_,Z(),(i,s)=>{const o=m6(i,s,t.serverSyncTree_,e);hx(n,i,o)});let r=[];cp(n,Z(),(i,s)=>{r=r.concat(Ya(t.serverSyncTree_,i,s));const o=z6(t,i);Ag(t,o)}),t.onDisconnect_=rc(),Hr(t.eventQueue_,Z(),r)}function $6(t){t.persistentConnection_&&t.persistentConnection_.interrupt(P6)}function Og(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ye(n,...e)}function Wx(t,e,n){return Ox(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function Ng(t,e=t.transactionQueueTree_){if(e||sd(t,e),ro(e)){const n=Hx(t,e);R(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&j6(t,Xa(e),n)}else Mx(e)&&id(e,n=>{Ng(t,n)})}function j6(t,e,n){const r=n.map(u=>u.currentWriteId),i=Wx(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];R(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=tt(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Og(t,"transaction put response",{path:l.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(as(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&c.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();sd(t,Pg(t.transactionQueueTree_,e)),Ng(t,t.transactionQueueTree_),Hr(t.eventQueue_,e,d);for(let f=0;f<c.length;f++)Ka(c[f])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{It("transaction at "+l.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Ag(t,e)}},o)}function Ag(t,e){const n=Vx(t,e),r=Xa(n),i=Hx(t,n);return U6(t,i,r),r}function U6(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=tt(n,l.path);let d=!1,c;if(R(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,c=l.abortReason,i=i.concat(as(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=R6)d=!0,c="maxretry",i=i.concat(as(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Wx(t,l.path,o);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){Ux("transaction failed: Data returned ",p,l.path);let v=Be(p);typeof p=="object"&&p!=null&&qn(p,".priority")||(v=v.updatePriority(f.getPriority()));const S=l.currentWriteId,m=Bx(t),h=g6(v,f,m);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=h,l.currentWriteId=D6(t),o.splice(o.indexOf(S),1),i=i.concat(t6(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(as(t.serverSyncTree_,S,!0))}else d=!0,c="nodata",i=i.concat(as(t.serverSyncTree_,l.currentWriteId,!0))}Hr(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(c==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(c),!1,null))))}sd(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ka(r[a]);Ng(t,t.transactionQueueTree_)}function Vx(t,e){let n,r=t.transactionQueueTree_;for(n=Y(e);n!==null&&ro(r)===void 0;)r=Pg(r,n),e=ce(e),n=Y(e);return r}function Hx(t,e){const n=[];return Gx(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Gx(t,e,n){const r=ro(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);id(e,i=>{Gx(t,i,n)})}function sd(t,e){const n=ro(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Dx(e,n.length>0?n:void 0)}id(e,r=>{sd(t,r)})}function z6(t,e){const n=Xa(Vx(t,e)),r=Pg(t.transactionQueueTree_,e);return v6(r,i=>{Tf(t,i)}),Tf(t,r),Fx(r,i=>{Tf(t,i)}),n}function Tf(t,e){const n=ro(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(R(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(R(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(as(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Dx(e,void 0):n.length=s+1,Hr(t.eventQueue_,Xa(e),i);for(let o=0;o<r.length;o++)Ka(r[o])}}/**
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
 */function B6(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function W6(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):It(`Invalid query segment '${n}' in query '${t}'`)}return e}const p_=function(t,e){const n=V6(t),r=n.namespace;n.domain==="firebase.com"&&Wn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Wn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||e4();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new KC(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ae(n.pathString)}},V6=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=B6(t.substring(d,c)));const f=W6(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const p=e.slice(0,u);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class H6{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Pe(this.snapshot.exportVal())}}class G6{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class K6{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return R(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Lg{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return K(this._path)?null:nx(this._path)}get ref(){return new Qn(this._repo,this._path)}get _queryIdentifier(){const e=Zv(this._queryParams),n=lg(e);return n==="{}"?"default":n}get _queryObject(){return Zv(this._queryParams)}isEqual(e){if(e=mt(e),!(e instanceof Lg))return!1;const n=this._repo===e._repo,r=sx(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+F4(this._path)}}class Qn extends Lg{constructor(e,n){super(e,n,new mg,!1)}get parent(){const e=ix(this._path);return e===null?null:new Qn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ka{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ae(e),r=gp(this.ref,e);return new ka(this._node.getChild(n),r,xe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new ka(i,gp(this.ref,r),xe)))}hasChild(e){const n=new ae(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function q6(t,e){return t=mt(t),t._checkNotDeleted("ref"),e!==void 0?gp(t._root,e):t._root}function gp(t,e){return t=mt(t),Y(t._path)===null?C6("child","path",e,!1):zx("child","path",e,!1),new Qn(t._repo,Re(t._path,e))}function Y6(t){t=mt(t);const e=new K6(()=>{}),n=new Dg(e);return M6(t._repo,t,n).then(r=>new ka(r,new Qn(t._repo,t._path),t._queryParams.getIndex()))}class Dg{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new H6("value",this,new ka(e.snapshotNode,new Qn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new G6(this,e,n):null}matches(e){return e instanceof Dg?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}KD(Qn);JD(Qn);/**
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
 */const Q6="FIREBASE_DATABASE_EMULATOR_HOST",yp={};let X6=!1;function J6(t,e,n,r){t.repoInfo_=new KC(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function Z6(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Wn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ye("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=p_(s,i),a=o.repoInfo,l,u;typeof process<"u"&&Dv&&(u=Dv[Q6]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=p_(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const d=i&&l?new vs(vs.OWNER):new d4(t.name,t.options,e);x6("Invalid Firebase Database URL",o),K(o.path)||Wn("Database URL must point to the root of a Firebase Database (not including a child path).");const c=t5(a,t,d,new c4(t.name,n));return new n5(c,t)}function e5(t,e){const n=yp[e];(!n||n[t.key]!==t)&&Wn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),$6(t),delete n[t.key]}function t5(t,e,n,r){let i=yp[e.name];i||(i={},yp[e.name]=i);let s=i[t.toURLString()];return s&&Wn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new O6(t,X6,n,r),i[t.toURLString()]=s,s}class n5{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(N6(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Qn(this._repo,Z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(e5(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Wn("Cannot call "+e+" on a deleted database.")}}function r5(t=KS(),e){const n=Zm(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=zO("database");r&&i5(n,...r)}return n}function i5(t,e,n,r={}){t=mt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Wn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Wn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new vs(vs.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:BO(r.mockUserToken,t.app.options.projectId);s=new vs(o)}J6(i,e,n,s)}/**
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
 */function s5(t){YL(eo),Fs(new Ei("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Z6(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),kr(Mv,Fv,t),kr(Mv,Fv,"esm2017")}Mn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Mn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};s5();var o5="firebase",a5="10.8.1";/**
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
 */kr(o5,a5,"app");const l5="AIzaSyBvNsD3kcb2TUqMM9BqdQ32YRe6fDJSmyY",u5="learn-react-60375.firebaseapp.com",c5="learn-react-60375",d5="learn-react-60375.appspot.com",f5="1070256347866",h5="1:1070256347866:web:ab4f6b96e7a6bb857ba3e3",p5="https://learn-react-60375-default-rtdb.europe-west1.firebasedatabase.app",m5={apiKey:l5,authDomain:u5,projectId:c5,storageBucket:d5,messagingSenderId:f5,appId:h5,databaseURL:p5},g5=GS(m5),y5=r5(g5),eu=ja("teachers/getTeachers",async({signal:t},e)=>{try{const n=q6(y5);return(await Y6(n,{signal:t})).val()}catch(n){return e.rejectWithValue(n.message)}}),v5=t=>t.teachers.teachersCard,Kx=t=>t.teachers.favorite;let _5={data:""},w5=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||_5,E5=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,S5=/\/\*[^]*?\*\/|  +/g,m_=/\n+/g,fr=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?fr(o,s):s+"{"+fr(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=fr(o,e?e.replace(/([^,])+/g,a=>s.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=fr.p?fr.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},Cn={},qx=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+qx(t[n]);return e}return t},C5=(t,e,n,r,i)=>{let s=qx(t),o=Cn[s]||(Cn[s]=(l=>{let u=0,d=11;for(;u<l.length;)d=101*d+l.charCodeAt(u++)>>>0;return"go"+d})(s));if(!Cn[o]){let l=s!==t?t:(u=>{let d,c,f=[{}];for(;d=E5.exec(u.replace(S5,""));)d[4]?f.shift():d[3]?(c=d[3].replace(m_," ").trim(),f.unshift(f[0][c]=f[0][c]||{})):f[0][d[1]]=d[2].replace(m_," ").trim();return f[0]})(t);Cn[o]=fr(i?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&Cn.g?Cn.g:null;return n&&(Cn.g=Cn[o]),((l,u,d,c)=>{c?u.data=u.data.replace(c,l):u.data.indexOf(l)===-1&&(u.data=d?l+u.data:u.data+l)})(Cn[o],e,r,a),o},x5=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":fr(a,""):a===!1?"":a}return r+i+(o??"")},"");function od(t){let e=this||{},n=t.call?t(e.p):t;return C5(n.unshift?n.raw?x5(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,w5(e.target),e.g,e.o,e.k)}let Yx,vp,_p;od.bind({g:1});let Vn=od.bind({k:1});function T5(t,e,n,r){fr.p=e,Yx=t,vp=n,_p=r}function Gr(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let a=Object.assign({},s),l=a.className||i.className;n.p=Object.assign({theme:vp&&vp()},a),n.o=/ *go\d+/.test(l),a.className=od.apply(n,r)+(l?" "+l:""),e&&(a.ref=o);let u=t;return t[0]&&(u=a.as||t,delete a.as),_p&&u[0]&&_p(a),Yx(u,a)}return e?e(i):i}}var I5=t=>typeof t=="function",dc=(t,e)=>I5(t)?t(e):t,b5=(()=>{let t=0;return()=>(++t).toString()})(),Qx=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),k5=20,tu=new Map,P5=1e3,g_=t=>{if(tu.has(t))return;let e=setTimeout(()=>{tu.delete(t),Li({type:4,toastId:t})},P5);tu.set(t,e)},R5=t=>{let e=tu.get(t);e&&clearTimeout(e)},wp=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,k5)};case 1:return e.toast.id&&R5(e.toast.id),{...t,toasts:t.toasts.map(s=>s.id===e.toast.id?{...s,...e.toast}:s)};case 2:let{toast:n}=e;return t.toasts.find(s=>s.id===n.id)?wp(t,{type:1,toast:n}):wp(t,{type:0,toast:n});case 3:let{toastId:r}=e;return r?g_(r):t.toasts.forEach(s=>{g_(s.id)}),{...t,toasts:t.toasts.map(s=>s.id===r||r===void 0?{...s,visible:!1}:s)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(s=>s.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+i}))}}},nu=[],ru={toasts:[],pausedAt:void 0},Li=t=>{ru=wp(ru,t),nu.forEach(e=>{e(ru)})},O5={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},N5=(t={})=>{let[e,n]=E.useState(ru);E.useEffect(()=>(nu.push(n),()=>{let i=nu.indexOf(n);i>-1&&nu.splice(i,1)}),[e]);let r=e.toasts.map(i=>{var s,o;return{...t,...t[i.type],...i,duration:i.duration||((s=t[i.type])==null?void 0:s.duration)||(t==null?void 0:t.duration)||O5[i.type],style:{...t.style,...(o=t[i.type])==null?void 0:o.style,...i.style}}});return{...e,toasts:r}},A5=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||b5()}),Ja=t=>(e,n)=>{let r=A5(e,t,n);return Li({type:2,toast:r}),r.id},St=(t,e)=>Ja("blank")(t,e);St.error=Ja("error");St.success=Ja("success");St.loading=Ja("loading");St.custom=Ja("custom");St.dismiss=t=>{Li({type:3,toastId:t})};St.remove=t=>Li({type:4,toastId:t});St.promise=(t,e,n)=>{let r=St.loading(e.loading,{...n,...n==null?void 0:n.loading});return t.then(i=>(St.success(dc(e.success,i),{id:r,...n,...n==null?void 0:n.success}),i)).catch(i=>{St.error(dc(e.error,i),{id:r,...n,...n==null?void 0:n.error})}),t};var L5=(t,e)=>{Li({type:1,toast:{id:t,height:e}})},D5=()=>{Li({type:5,time:Date.now()})},M5=t=>{let{toasts:e,pausedAt:n}=N5(t);E.useEffect(()=>{if(n)return;let s=Date.now(),o=e.map(a=>{if(a.duration===1/0)return;let l=(a.duration||0)+a.pauseDuration-(s-a.createdAt);if(l<0){a.visible&&St.dismiss(a.id);return}return setTimeout(()=>St.dismiss(a.id),l)});return()=>{o.forEach(a=>a&&clearTimeout(a))}},[e,n]);let r=E.useCallback(()=>{n&&Li({type:6,time:Date.now()})},[n]),i=E.useCallback((s,o)=>{let{reverseOrder:a=!1,gutter:l=8,defaultPosition:u}=o||{},d=e.filter(p=>(p.position||u)===(s.position||u)&&p.height),c=d.findIndex(p=>p.id===s.id),f=d.filter((p,v)=>v<c&&p.visible).length;return d.filter(p=>p.visible).slice(...a?[f+1]:[0,f]).reduce((p,v)=>p+(v.height||0)+l,0)},[e]);return{toasts:e,handlers:{updateHeight:L5,startPause:D5,endPause:r,calculateOffset:i}}},F5=Vn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,$5=Vn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,j5=Vn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,U5=Gr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${F5} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${$5} 0.15s ease-out forwards;
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
    animation: ${j5} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,z5=Vn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,B5=Gr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${z5} 1s linear infinite;
`,W5=Vn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,V5=Vn`
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
}`,H5=Gr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${W5} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${V5} 0.2s ease-out forwards;
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
`,G5=Gr("div")`
  position: absolute;
`,K5=Gr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,q5=Vn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Y5=Gr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${q5} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Q5=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?E.createElement(Y5,null,e):e:n==="blank"?null:E.createElement(K5,null,E.createElement(B5,{...r}),n!=="loading"&&E.createElement(G5,null,n==="error"?E.createElement(U5,{...r}):E.createElement(H5,{...r})))},X5=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,J5=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,Z5="0%{opacity:0;} 100%{opacity:1;}",eM="0%{opacity:1;} 100%{opacity:0;}",tM=Gr("div")`
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
`,nM=Gr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,rM=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=Qx()?[Z5,eM]:[X5(n),J5(n)];return{animation:e?`${Vn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Vn(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},iM=E.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?rM(t.position||e||"top-center",t.visible):{opacity:0},s=E.createElement(Q5,{toast:t}),o=E.createElement(nM,{...t.ariaProps},dc(t.message,t));return E.createElement(tM,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):E.createElement(E.Fragment,null,s,o))});T5(E.createElement);var sM=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=E.useCallback(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(t,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return E.createElement("div",{ref:s,className:e,style:n},i)},oM=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Qx()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},aM=od`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Pl=16,lM=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,containerStyle:s,containerClassName:o})=>{let{toasts:a,handlers:l}=M5(n);return E.createElement("div",{style:{position:"fixed",zIndex:9999,top:Pl,left:Pl,right:Pl,bottom:Pl,pointerEvents:"none",...s},className:o,onMouseEnter:l.startPause,onMouseLeave:l.endPause},a.map(u=>{let d=u.position||e,c=l.calculateOffset(u,{reverseOrder:t,gutter:r,defaultPosition:e}),f=oM(d,c);return E.createElement(sM,{id:u.id,key:u.id,onHeightUpdate:l.updateHeight,className:u.visible?aM:"",style:f},u.type==="custom"?dc(u.message,u):i?i(u):E.createElement(iM,{toast:u,position:d}))}))},uM=St;const cM=P.li`
  width: 1184px;
  padding: 24px;
  border-radius: 24px;
  background: rgb(255, 255, 255);
  display: flex;
  position: relative;
  gap: 48px;
`,dM=P.div`
  position: relative;
  width: 120px;
  height: 120px;
  border: 3px solid rgb(251, 233, 186);
  border-radius: 100px;
  background: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
`,fM=P.img`
  border-radius: 100px;
  width: 96px;
  height: 96px;
`,hM=P.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 19px;
  right: 17px;
  width: 12px;
  height: 12px;
`,pM=P.div``,mM=P.div``,gM=P.ul`
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
`,vo=P.li`
  align-items: center;
`,yM=P.div`
  display: flex;
  align-items: center;
`,vM=P.div`
  display: flex;
  align-items: center;
`,_M=P.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: rgb(56, 205, 62);
`,wM=P.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 24px;
  right: 24px;
  cursor: pointer;
`,EM=P.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  margin-bottom: 32px;
`,If=P.span`
  color: rgb(18, 20, 23);
  text-decoration: underline;
`,SM=P.ul`
  text-align: start;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
  li:not(:first-child) > span {
    text-decoration: none;
  }
`,bf=P.li`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: rgb(138, 138, 137);
`,CM=P.button`
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
`,xM=P.ul`
  display: flex;
  gap: 8px;
  & > :first-child {
    background: rgb(244, 197, 80);
    border: none;
  }
  margin-bottom: 32px;
`,TM=P.li`
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
`,IM=()=>g.jsxs("svg",{width:"12.000000",height:"12.000000",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[g.jsx("desc",{children:"Created with Pixso."}),g.jsx("defs",{}),g.jsx("circle",{id:"Ellipse 1",cx:"6.000000",cy:"6.000000",r:"6.000000",fill:"#FFFFFF",fillOpacity:"1.000000"}),g.jsx("circle",{id:"Ellipse 2",cx:"6.000000",cy:"6.000000",r:"4.000000",fill:"#38CD3E",fillOpacity:"1.000000"})]}),bM=()=>g.jsxs("svg",{width:"16.000000",height:"16.000000",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[g.jsx("desc",{children:"Created with Pixso."}),g.jsx("defs",{children:g.jsx("clipPath",{id:"clip44_528",children:g.jsx("rect",{id:"book-open-01",width:"16.000000",height:"16.000000",fill:"white",fillOpacity:"0"})})}),g.jsx("rect",{id:"book-open-01",width:"16.000000",height:"16.000000",fill:"#FFFFFF",fillOpacity:"0"}),g.jsxs("g",{clipPath:"url(#clip44_528)",children:[g.jsx("path",{id:"Accent",d:"M12.2667 2C10.7732 2 10.0264 2 9.45605 2.29065C8.95428 2.54626 8.54633 2.95422 8.29065 3.45605C8 4.02649 8 4.77319 8 6.26672L8 14L8.06671 13.8999C8.52979 13.2053 8.76135 12.858 9.06726 12.6066C9.33807 12.3839 9.65015 12.2169 9.9856 12.1151C10.3645 12 10.7819 12 11.6168 12L12.5333 12C13.2801 12 13.6534 12 13.9387 11.8547C14.1895 11.7268 14.3935 11.5228 14.5214 11.272C14.6667 10.9868 14.6667 10.6134 14.6667 9.8667L14.6667 4.1333C14.6667 3.3866 14.6667 3.01318 14.5214 2.72803C14.3935 2.47717 14.1895 2.27319 13.9387 2.14526C13.6534 2 13.2801 2 12.5333 2L12.2667 2Z",stroke:"#000000",strokeOpacity:"1.000000",strokeWidth:"1.500000",strokeLinejoin:"round"}),g.jsx("path",{id:"Icon",d:"M3.7334 2C5.22687 2 5.97357 2 6.54401 2.29065C7.04578 2.54626 7.45374 2.95422 7.70941 3.45605C8.00006 4.02649 8.00006 4.77319 8.00006 6.26672L8.00006 14L7.93335 13.8999C7.47021 13.2053 7.23871 12.858 6.9328 12.6066C6.66193 12.3839 6.34985 12.2169 6.01447 12.1151C5.63556 12 5.21814 12 4.38324 12L3.46674 12C2.71997 12 2.34662 12 2.0614 11.8547C1.81049 11.7268 1.60651 11.5228 1.4787 11.272C1.33337 10.9868 1.33337 10.6134 1.33337 9.8667L1.33337 4.1333C1.33337 3.3866 1.33337 3.01318 1.4787 2.72803C1.60651 2.47717 1.81049 2.27319 2.0614 2.14526C2.34662 2 2.71997 2 3.46674 2L3.7334 2Z",stroke:"#000000",strokeOpacity:"1.000000",strokeWidth:"1.500000",strokeLinejoin:"round"})]})]}),Xx=()=>g.jsxs("svg",{width:"16.000000",height:"16.000000",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[g.jsx("desc",{children:"Created with Pixso."}),g.jsx("defs",{children:g.jsx("clipPath",{id:"clip44_535",children:g.jsx("rect",{id:"icon/star",width:"16.000000",height:"16.000000",fill:"white",fillOpacity:"0"})})}),g.jsxs("g",{clipPath:"url(#clip44_535)",children:[g.jsx("path",{id:"Star 2",d:"M7.55777 0.838135L5.66953 4.41699C5.5972 4.5542 5.46533 4.65002 5.31256 4.67639L1.32535 5.36633C0.929199 5.43481 0.771851 5.91919 1.05203 6.2074L3.87225 9.10925C3.98032 9.22034 4.03067 9.37537 4.00861 9.52881L3.43262 13.5341C3.3754 13.932 3.78738 14.2313 4.14816 14.054L7.77939 12.2684C7.91852 12.2001 8.08148 12.2001 8.22061 12.2684L11.8519 14.054C12.2126 14.2313 12.6246 13.932 12.5674 13.5341L11.9914 9.52881C11.9693 9.37537 12.0197 9.22034 12.1277 9.10925L14.948 6.2074C15.2281 5.91919 15.0708 5.43481 14.6747 5.36633L10.6874 4.67639C10.5347 4.65002 10.4028 4.5542 10.3304 4.41699L8.44223 0.838135C8.25461 0.482544 7.74539 0.482544 7.55777 0.838135Z",fill:"#FFC531",fillOpacity:"1.000000",fillRule:"evenodd"}),g.jsx("path",{id:"Star 2",d:"M5.66953 4.41699C5.5972 4.5542 5.46533 4.65002 5.31256 4.67639L1.32535 5.36633C0.929199 5.43481 0.771851 5.91919 1.05203 6.2074L3.87225 9.10925C3.98032 9.22034 4.03067 9.37537 4.00861 9.52881L3.43262 13.5341C3.3754 13.932 3.78738 14.2313 4.14816 14.054L7.77939 12.2684C7.91852 12.2001 8.08148 12.2001 8.22061 12.2684L11.8519 14.054C12.2126 14.2313 12.6246 13.932 12.5674 13.5341L11.9914 9.52881C11.9693 9.37537 12.0197 9.22034 12.1277 9.10925L14.948 6.2074C15.2281 5.91919 15.0708 5.43481 14.6747 5.36633L10.6874 4.67639C10.5347 4.65002 10.4028 4.5542 10.3304 4.41699L8.44223 0.838135C8.25461 0.482544 7.74539 0.482544 7.55777 0.838135L5.66953 4.41699ZM6.73087 4.97705C6.48489 5.44324 6.03656 5.76892 5.51715 5.85889L2.83725 6.32251L4.73279 8.27283C5.10019 8.65088 5.27142 9.17786 5.19638 9.69971L4.80927 12.3917L7.24988 11.1917C7.7229 10.959 8.2771 10.959 8.75012 11.1917L11.1907 12.3917L10.8036 9.69971C10.7286 9.17786 10.8998 8.65088 11.2672 8.27283L13.1628 6.32251L10.4828 5.85889C9.96344 5.76892 9.51511 5.44324 9.26913 4.97705L8 2.57153L6.73087 4.97705Z",fill:"#FFC531",fillOpacity:"1.000000",fillRule:"evenodd"})]})]}),y_=({fill:t})=>g.jsxs("svg",{width:"24.645044",height:"21.751221",viewBox:"0 0 24.645 21.7512",fill:t,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[g.jsx("desc",{children:"Created with Pixso."}),g.jsx("defs",{}),g.jsx("path",{id:"Vector",d:"M19.9655 1.45386C19.2425 1.15417 18.4674 1 17.6847 1C16.902 1 16.127 1.15417 15.4039 1.45386C14.6809 1.75342 14.0239 2.1925 13.4706 2.74609L12.3222 3.89453L11.1739 2.74609C10.0562 1.62842 8.54035 1.00061 6.95973 1.00061C5.37911 1.00061 3.86323 1.62842 2.74557 2.74609C1.6279 3.86377 1 5.37964 1 6.96033C1 8.54089 1.6279 10.0568 2.74557 11.1744L3.8939 12.3228L12.3222 20.7511L20.7506 12.3228L21.8989 11.1744C22.4525 10.6212 22.8916 9.96423 23.1912 9.24109C23.4908 8.51807 23.645 7.74304 23.645 6.96033C23.645 6.17761 23.4908 5.40259 23.1912 4.67957C22.8916 3.95642 22.4525 3.29944 21.8989 2.74609C21.3456 2.1925 20.6886 1.75342 19.9655 1.45386Z",stroke:"#121417",strokeOpacity:"1.000000",strokeWidth:"2.000000",strokeLinejoin:"round"})]}),kM=P.p`
  color: rgb(18, 20, 23);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  width: 968px;
  margin-bottom: 32px;
`,PM=P.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 32px;
`;P.img`
  border-radius: 100px;
`;const RM=P.div`
  width: 44px;
  height: 44px;
  background-size: cover;
  border-radius: 100px;
  background-image: url(${t=>t.avatarUrl});
  background-position: 50%;
`,OM=P.li``,NM=P.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
`,AM=P.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`,v_=P.li`
  color: rgb(138, 138, 137);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  display: flex;
  align-items: center;
  gap: 8px;
`,LM=P.span`
  color: rgb(18, 20, 23);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`,DM=P.p`
  color: rgb(18, 20, 23);

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;

  text-align: left;
`,MM=({children:t})=>g.jsx(WP,{shouldForwardProp:e=>e!=="avatarUrl",children:t}),Jx=({experience:t,reviews:e})=>g.jsxs(g.Fragment,{children:[g.jsx(kM,{children:t}),g.jsx(PM,{children:e.map((n,r)=>g.jsxs(OM,{children:[g.jsxs(AM,{children:[g.jsx("div",{children:g.jsx(RM,{avatarUrl:n.reviewer_avatar})}),g.jsxs(NM,{children:[g.jsx(v_,{children:n.reviewer_name}),g.jsxs(v_,{children:[g.jsx(Xx,{}),g.jsxs(LM,{children:[" ",n.reviewer_rating]})]})]})]}),g.jsx(DM,{children:n.comment})]},r))})]});Jx.propTypes={experience:G.string,reviews:G.arrayOf(G.shape({comment:G.string,reviewer_name:G.string,reviewer_rating:G.number}))};const FM=P.button`
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
    background-color: ${oe.YELLOW_HOVER_BUTTON};
  }
`,$M=()=>g.jsx(FM,{children:"Book trial lesson"}),jM={teachersCard:[],favorite:[],isLoading:!1,error:""},Mg=NS({name:"teachers",initialState:jM,reducers:{setFavorite:(t,e)=>{t.favorite.push(e.payload)},delFavorite:(t,e)=>{t.favorite=t.favorite.filter(n=>n.id!==e.payload.id)}},extraReducers:t=>{t.addCase(eu.pending,e=>{e.isLoading=!0}).addCase(eu.fulfilled,(e,n)=>{e.isLoading=!1,e.teachersCard=n.payload,e.error=""}).addCase(eu.rejected,(e,n)=>{e.isLoading=!1,e.error=n.payload})}}),{setFavorite:UM}=Mg.actions,{delFavorite:zM}=Mg.actions,BM=Mg.reducer,Fg=t=>{const{id:e,avatar_url:n,conditions:r,experience:i,languages:s,lesson_info:o,lessons_done:a,levels:l,name:u,price_per_hour:d,rating:c,reviews:f,surname:p}=t,[v,_]=E.useState(!1),S=zc(Kx),m=Xs(),h=S.some(C=>C.id===e),y=Bc(),w=()=>{_(!0)},T=()=>{if(!y.isLoggedIn){uM.error("Please enter LogIn or Registration ");return}!h&&y.isLoggedIn?m(UM(t)):m(zM(t))};return g.jsxs(cM,{children:[g.jsxs(dM,{children:[g.jsx(hM,{children:g.jsx(IM,{})}),g.jsx(fM,{src:n,alt:"avatar"})]}),g.jsxs(pM,{children:[g.jsx(wM,{onClick:()=>T(),children:h&&y.isLoggedIn?g.jsx(y_,{fill:"#F4C550"}):g.jsx(y_,{fill:"transparent"})}),g.jsx(mM,{children:g.jsxs(gM,{children:[g.jsx(vo,{children:"Languages"}),g.jsxs(vo,{children:[g.jsx(yM,{children:g.jsx(bM,{})}),"Lessons online"]}),g.jsxs(vo,{children:["Lessons done: ",a]}),g.jsxs(vo,{children:[g.jsx(vM,{children:g.jsx(Xx,{})}),"Rating: ",c]}),g.jsxs(vo,{children:["Price / 1 hour: ",g.jsx(_M,{children:d})]})]})}),g.jsxs(EM,{children:[u," ",p]}),g.jsxs(SM,{children:[g.jsxs(bf,{children:["Speaks: ",g.jsx(If,{children:s.join(", ")})]}),g.jsxs(bf,{children:["Lesson Info: ",g.jsx(If,{children:o})]}),g.jsxs(bf,{children:["Conditions: ",g.jsx(If,{children:r.join(", ")})]})]}),!v&&g.jsx(CM,{onClick:w,children:"Read more"}),v&&g.jsx(Jx,{experience:i,reviews:f}),g.jsx(xM,{children:l.map((C,x)=>g.jsxs(TM,{children:["#",C]},x))}),v&&g.jsx($M,{})]})]})};Fg.propTypes={id:G.string,avatar_url:G.string,conditions:G.arrayOf(G.string),experience:G.string,languages:G.arrayOf(G.string),lesson_info:G.string,lessons_done:G.number,levels:G.arrayOf(G.string),name:G.string,price_per_hour:G.number,rating:G.number,reviews:G.arrayOf(G.shape({comment:G.string,reviewer_name:G.string,reviewer_rating:G.number})),surname:G.string};const Zx=P.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 64px;
`,WM=P.button`
  width: 183px;
  height: 60px;
  border-radius: 12px;
  background-color: rgb(244, 197, 80);
  border: none;
  &:hover {
    background-color: ${oe.YELLOW_HOVER_BUTTON};
  }
  color: rgb(18, 20, 23);
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
`,VM=()=>{const t=zc(v5);return g.jsxs(g.Fragment,{children:[g.jsx(Zx,{children:t.map(e=>g.jsx(Fg,{...e},e.id))}),g.jsx(WM,{type:"button",children:"Learn more"})]})},HM=P.div`
  position: relative;
  width: 1440px;
  background: rgb(248, 248, 248);
  padding: 96px 128px 96px 128px;
`,GM=()=>{const t=Xs();return E.useEffect(()=>{const e=new AbortController;return t(eu({signal:e.signal})),()=>e.abort()},[t]),g.jsx(HM,{children:g.jsx(VM,{})})};var KM=function(e){return qM(e)&&!YM(e)};function qM(t){return!!t&&typeof t=="object"}function YM(t){var e=Object.prototype.toString.call(t);return e==="[object RegExp]"||e==="[object Date]"||JM(t)}var QM=typeof Symbol=="function"&&Symbol.for,XM=QM?Symbol.for("react.element"):60103;function JM(t){return t.$$typeof===XM}function ZM(t){return Array.isArray(t)?[]:{}}function fc(t,e){return e.clone!==!1&&e.isMergeableObject(t)?Pa(ZM(t),t,e):t}function eF(t,e,n){return t.concat(e).map(function(r){return fc(r,n)})}function tF(t,e,n){var r={};return n.isMergeableObject(t)&&Object.keys(t).forEach(function(i){r[i]=fc(t[i],n)}),Object.keys(e).forEach(function(i){!n.isMergeableObject(e[i])||!t[i]?r[i]=fc(e[i],n):r[i]=Pa(t[i],e[i],n)}),r}function Pa(t,e,n){n=n||{},n.arrayMerge=n.arrayMerge||eF,n.isMergeableObject=n.isMergeableObject||KM;var r=Array.isArray(e),i=Array.isArray(t),s=r===i;return s?r?n.arrayMerge(t,e,n):tF(t,e,n):fc(e,n)}Pa.all=function(e,n){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(r,i){return Pa(r,i,n)},{})};var Ep=Pa,eT=typeof global=="object"&&global&&global.Object===Object&&global,nF=typeof self=="object"&&self&&self.Object===Object&&self,_n=eT||nF||Function("return this")(),jr=_n.Symbol,tT=Object.prototype,rF=tT.hasOwnProperty,iF=tT.toString,_o=jr?jr.toStringTag:void 0;function sF(t){var e=rF.call(t,_o),n=t[_o];try{t[_o]=void 0;var r=!0}catch{}var i=iF.call(t);return r&&(e?t[_o]=n:delete t[_o]),i}var oF=Object.prototype,aF=oF.toString;function lF(t){return aF.call(t)}var uF="[object Null]",cF="[object Undefined]",__=jr?jr.toStringTag:void 0;function Di(t){return t==null?t===void 0?cF:uF:__&&__ in Object(t)?sF(t):lF(t)}function nT(t,e){return function(n){return t(e(n))}}var $g=nT(Object.getPrototypeOf,Object);function Mi(t){return t!=null&&typeof t=="object"}var dF="[object Object]",fF=Function.prototype,hF=Object.prototype,rT=fF.toString,pF=hF.hasOwnProperty,mF=rT.call(Object);function w_(t){if(!Mi(t)||Di(t)!=dF)return!1;var e=$g(t);if(e===null)return!0;var n=pF.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&rT.call(n)==mF}var E_=Array.isArray,S_=Object.keys,gF=Object.prototype.hasOwnProperty,yF=typeof Element<"u";function Sp(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=E_(t),r=E_(e),i,s,o;if(n&&r){if(s=t.length,s!=e.length)return!1;for(i=s;i--!==0;)if(!Sp(t[i],e[i]))return!1;return!0}if(n!=r)return!1;var a=t instanceof Date,l=e instanceof Date;if(a!=l)return!1;if(a&&l)return t.getTime()==e.getTime();var u=t instanceof RegExp,d=e instanceof RegExp;if(u!=d)return!1;if(u&&d)return t.toString()==e.toString();var c=S_(t);if(s=c.length,s!==S_(e).length)return!1;for(i=s;i--!==0;)if(!gF.call(e,c[i]))return!1;if(yF&&t instanceof Element&&e instanceof Element)return t===e;for(i=s;i--!==0;)if(o=c[i],!(o==="_owner"&&t.$$typeof)&&!Sp(t[o],e[o]))return!1;return!0}return t!==t&&e!==e}var vF=function(e,n){try{return Sp(e,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const sr=Ws(vF);function _F(){this.__data__=[],this.size=0}function iT(t,e){return t===e||t!==t&&e!==e}function ad(t,e){for(var n=t.length;n--;)if(iT(t[n][0],e))return n;return-1}var wF=Array.prototype,EF=wF.splice;function SF(t){var e=this.__data__,n=ad(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():EF.call(e,n,1),--this.size,!0}function CF(t){var e=this.__data__,n=ad(e,t);return n<0?void 0:e[n][1]}function xF(t){return ad(this.__data__,t)>-1}function TF(t,e){var n=this.__data__,r=ad(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function Xn(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Xn.prototype.clear=_F;Xn.prototype.delete=SF;Xn.prototype.get=CF;Xn.prototype.has=xF;Xn.prototype.set=TF;function IF(){this.__data__=new Xn,this.size=0}function bF(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function kF(t){return this.__data__.get(t)}function PF(t){return this.__data__.has(t)}function Za(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var RF="[object AsyncFunction]",OF="[object Function]",NF="[object GeneratorFunction]",AF="[object Proxy]";function sT(t){if(!Za(t))return!1;var e=Di(t);return e==OF||e==NF||e==RF||e==AF}var kf=_n["__core-js_shared__"],C_=function(){var t=/[^.]+$/.exec(kf&&kf.keys&&kf.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function LF(t){return!!C_&&C_ in t}var DF=Function.prototype,MF=DF.toString;function Fi(t){if(t!=null){try{return MF.call(t)}catch{}try{return t+""}catch{}}return""}var FF=/[\\^$.*+?()[\]{}|]/g,$F=/^\[object .+?Constructor\]$/,jF=Function.prototype,UF=Object.prototype,zF=jF.toString,BF=UF.hasOwnProperty,WF=RegExp("^"+zF.call(BF).replace(FF,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function VF(t){if(!Za(t)||LF(t))return!1;var e=sT(t)?WF:$F;return e.test(Fi(t))}function HF(t,e){return t==null?void 0:t[e]}function $i(t,e){var n=HF(t,e);return VF(n)?n:void 0}var Ra=$i(_n,"Map"),Oa=$i(Object,"create");function GF(){this.__data__=Oa?Oa(null):{},this.size=0}function KF(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var qF="__lodash_hash_undefined__",YF=Object.prototype,QF=YF.hasOwnProperty;function XF(t){var e=this.__data__;if(Oa){var n=e[t];return n===qF?void 0:n}return QF.call(e,t)?e[t]:void 0}var JF=Object.prototype,ZF=JF.hasOwnProperty;function e8(t){var e=this.__data__;return Oa?e[t]!==void 0:ZF.call(e,t)}var t8="__lodash_hash_undefined__";function n8(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Oa&&e===void 0?t8:e,this}function ki(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ki.prototype.clear=GF;ki.prototype.delete=KF;ki.prototype.get=XF;ki.prototype.has=e8;ki.prototype.set=n8;function r8(){this.size=0,this.__data__={hash:new ki,map:new(Ra||Xn),string:new ki}}function i8(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function ld(t,e){var n=t.__data__;return i8(e)?n[typeof e=="string"?"string":"hash"]:n.map}function s8(t){var e=ld(this,t).delete(t);return this.size-=e?1:0,e}function o8(t){return ld(this,t).get(t)}function a8(t){return ld(this,t).has(t)}function l8(t,e){var n=ld(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function Kr(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Kr.prototype.clear=r8;Kr.prototype.delete=s8;Kr.prototype.get=o8;Kr.prototype.has=a8;Kr.prototype.set=l8;var u8=200;function c8(t,e){var n=this.__data__;if(n instanceof Xn){var r=n.__data__;if(!Ra||r.length<u8-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new Kr(r)}return n.set(t,e),this.size=n.size,this}function io(t){var e=this.__data__=new Xn(t);this.size=e.size}io.prototype.clear=IF;io.prototype.delete=bF;io.prototype.get=kF;io.prototype.has=PF;io.prototype.set=c8;function d8(t,e){for(var n=-1,r=t==null?0:t.length;++n<r&&e(t[n],n,t)!==!1;);return t}var x_=function(){try{var t=$i(Object,"defineProperty");return t({},"",{}),t}catch{}}();function oT(t,e,n){e=="__proto__"&&x_?x_(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var f8=Object.prototype,h8=f8.hasOwnProperty;function aT(t,e,n){var r=t[e];(!(h8.call(t,e)&&iT(r,n))||n===void 0&&!(e in t))&&oT(t,e,n)}function ud(t,e,n,r){var i=!n;n||(n={});for(var s=-1,o=e.length;++s<o;){var a=e[s],l=r?r(n[a],t[a],a,n,t):void 0;l===void 0&&(l=t[a]),i?oT(n,a,l):aT(n,a,l)}return n}function p8(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var m8="[object Arguments]";function T_(t){return Mi(t)&&Di(t)==m8}var lT=Object.prototype,g8=lT.hasOwnProperty,y8=lT.propertyIsEnumerable,v8=T_(function(){return arguments}())?T_:function(t){return Mi(t)&&g8.call(t,"callee")&&!y8.call(t,"callee")},el=Array.isArray;function _8(){return!1}var uT=typeof Ct=="object"&&Ct&&!Ct.nodeType&&Ct,I_=uT&&typeof xt=="object"&&xt&&!xt.nodeType&&xt,w8=I_&&I_.exports===uT,b_=w8?_n.Buffer:void 0,E8=b_?b_.isBuffer:void 0,cT=E8||_8,S8=9007199254740991,C8=/^(?:0|[1-9]\d*)$/;function x8(t,e){var n=typeof t;return e=e??S8,!!e&&(n=="number"||n!="symbol"&&C8.test(t))&&t>-1&&t%1==0&&t<e}var T8=9007199254740991;function dT(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=T8}var I8="[object Arguments]",b8="[object Array]",k8="[object Boolean]",P8="[object Date]",R8="[object Error]",O8="[object Function]",N8="[object Map]",A8="[object Number]",L8="[object Object]",D8="[object RegExp]",M8="[object Set]",F8="[object String]",$8="[object WeakMap]",j8="[object ArrayBuffer]",U8="[object DataView]",z8="[object Float32Array]",B8="[object Float64Array]",W8="[object Int8Array]",V8="[object Int16Array]",H8="[object Int32Array]",G8="[object Uint8Array]",K8="[object Uint8ClampedArray]",q8="[object Uint16Array]",Y8="[object Uint32Array]",pe={};pe[z8]=pe[B8]=pe[W8]=pe[V8]=pe[H8]=pe[G8]=pe[K8]=pe[q8]=pe[Y8]=!0;pe[I8]=pe[b8]=pe[j8]=pe[k8]=pe[U8]=pe[P8]=pe[R8]=pe[O8]=pe[N8]=pe[A8]=pe[L8]=pe[D8]=pe[M8]=pe[F8]=pe[$8]=!1;function Q8(t){return Mi(t)&&dT(t.length)&&!!pe[Di(t)]}function jg(t){return function(e){return t(e)}}var fT=typeof Ct=="object"&&Ct&&!Ct.nodeType&&Ct,Vo=fT&&typeof xt=="object"&&xt&&!xt.nodeType&&xt,X8=Vo&&Vo.exports===fT,Pf=X8&&eT.process,Bs=function(){try{var t=Vo&&Vo.require&&Vo.require("util").types;return t||Pf&&Pf.binding&&Pf.binding("util")}catch{}}(),k_=Bs&&Bs.isTypedArray,J8=k_?jg(k_):Q8,Z8=Object.prototype,e$=Z8.hasOwnProperty;function hT(t,e){var n=el(t),r=!n&&v8(t),i=!n&&!r&&cT(t),s=!n&&!r&&!i&&J8(t),o=n||r||i||s,a=o?p8(t.length,String):[],l=a.length;for(var u in t)(e||e$.call(t,u))&&!(o&&(u=="length"||i&&(u=="offset"||u=="parent")||s&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||x8(u,l)))&&a.push(u);return a}var t$=Object.prototype;function Ug(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||t$;return t===n}var n$=nT(Object.keys,Object),r$=Object.prototype,i$=r$.hasOwnProperty;function s$(t){if(!Ug(t))return n$(t);var e=[];for(var n in Object(t))i$.call(t,n)&&n!="constructor"&&e.push(n);return e}function pT(t){return t!=null&&dT(t.length)&&!sT(t)}function zg(t){return pT(t)?hT(t):s$(t)}function o$(t,e){return t&&ud(e,zg(e),t)}function a$(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var l$=Object.prototype,u$=l$.hasOwnProperty;function c$(t){if(!Za(t))return a$(t);var e=Ug(t),n=[];for(var r in t)r=="constructor"&&(e||!u$.call(t,r))||n.push(r);return n}function Bg(t){return pT(t)?hT(t,!0):c$(t)}function d$(t,e){return t&&ud(e,Bg(e),t)}var mT=typeof Ct=="object"&&Ct&&!Ct.nodeType&&Ct,P_=mT&&typeof xt=="object"&&xt&&!xt.nodeType&&xt,f$=P_&&P_.exports===mT,R_=f$?_n.Buffer:void 0,O_=R_?R_.allocUnsafe:void 0;function h$(t,e){if(e)return t.slice();var n=t.length,r=O_?O_(n):new t.constructor(n);return t.copy(r),r}function gT(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}function p$(t,e){for(var n=-1,r=t==null?0:t.length,i=0,s=[];++n<r;){var o=t[n];e(o,n,t)&&(s[i++]=o)}return s}function yT(){return[]}var m$=Object.prototype,g$=m$.propertyIsEnumerable,N_=Object.getOwnPropertySymbols,Wg=N_?function(t){return t==null?[]:(t=Object(t),p$(N_(t),function(e){return g$.call(t,e)}))}:yT;function y$(t,e){return ud(t,Wg(t),e)}function vT(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}var v$=Object.getOwnPropertySymbols,_T=v$?function(t){for(var e=[];t;)vT(e,Wg(t)),t=$g(t);return e}:yT;function _$(t,e){return ud(t,_T(t),e)}function wT(t,e,n){var r=e(t);return el(t)?r:vT(r,n(t))}function w$(t){return wT(t,zg,Wg)}function E$(t){return wT(t,Bg,_T)}var Cp=$i(_n,"DataView"),xp=$i(_n,"Promise"),Tp=$i(_n,"Set"),Ip=$i(_n,"WeakMap"),A_="[object Map]",S$="[object Object]",L_="[object Promise]",D_="[object Set]",M_="[object WeakMap]",F_="[object DataView]",C$=Fi(Cp),x$=Fi(Ra),T$=Fi(xp),I$=Fi(Tp),b$=Fi(Ip),ti=Di;(Cp&&ti(new Cp(new ArrayBuffer(1)))!=F_||Ra&&ti(new Ra)!=A_||xp&&ti(xp.resolve())!=L_||Tp&&ti(new Tp)!=D_||Ip&&ti(new Ip)!=M_)&&(ti=function(t){var e=Di(t),n=e==S$?t.constructor:void 0,r=n?Fi(n):"";if(r)switch(r){case C$:return F_;case x$:return A_;case T$:return L_;case I$:return D_;case b$:return M_}return e});const Vg=ti;var k$=Object.prototype,P$=k$.hasOwnProperty;function R$(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&P$.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var $_=_n.Uint8Array;function Hg(t){var e=new t.constructor(t.byteLength);return new $_(e).set(new $_(t)),e}function O$(t,e){var n=e?Hg(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}var N$=/\w*$/;function A$(t){var e=new t.constructor(t.source,N$.exec(t));return e.lastIndex=t.lastIndex,e}var j_=jr?jr.prototype:void 0,U_=j_?j_.valueOf:void 0;function L$(t){return U_?Object(U_.call(t)):{}}function D$(t,e){var n=e?Hg(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var M$="[object Boolean]",F$="[object Date]",$$="[object Map]",j$="[object Number]",U$="[object RegExp]",z$="[object Set]",B$="[object String]",W$="[object Symbol]",V$="[object ArrayBuffer]",H$="[object DataView]",G$="[object Float32Array]",K$="[object Float64Array]",q$="[object Int8Array]",Y$="[object Int16Array]",Q$="[object Int32Array]",X$="[object Uint8Array]",J$="[object Uint8ClampedArray]",Z$="[object Uint16Array]",ej="[object Uint32Array]";function tj(t,e,n){var r=t.constructor;switch(e){case V$:return Hg(t);case M$:case F$:return new r(+t);case H$:return O$(t,n);case G$:case K$:case q$:case Y$:case Q$:case X$:case J$:case Z$:case ej:return D$(t,n);case $$:return new r;case j$:case B$:return new r(t);case U$:return A$(t);case z$:return new r;case W$:return L$(t)}}var z_=Object.create,nj=function(){function t(){}return function(e){if(!Za(e))return{};if(z_)return z_(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();function rj(t){return typeof t.constructor=="function"&&!Ug(t)?nj($g(t)):{}}var ij="[object Map]";function sj(t){return Mi(t)&&Vg(t)==ij}var B_=Bs&&Bs.isMap,oj=B_?jg(B_):sj,aj="[object Set]";function lj(t){return Mi(t)&&Vg(t)==aj}var W_=Bs&&Bs.isSet,uj=W_?jg(W_):lj,cj=1,dj=2,fj=4,ET="[object Arguments]",hj="[object Array]",pj="[object Boolean]",mj="[object Date]",gj="[object Error]",ST="[object Function]",yj="[object GeneratorFunction]",vj="[object Map]",_j="[object Number]",CT="[object Object]",wj="[object RegExp]",Ej="[object Set]",Sj="[object String]",Cj="[object Symbol]",xj="[object WeakMap]",Tj="[object ArrayBuffer]",Ij="[object DataView]",bj="[object Float32Array]",kj="[object Float64Array]",Pj="[object Int8Array]",Rj="[object Int16Array]",Oj="[object Int32Array]",Nj="[object Uint8Array]",Aj="[object Uint8ClampedArray]",Lj="[object Uint16Array]",Dj="[object Uint32Array]",ue={};ue[ET]=ue[hj]=ue[Tj]=ue[Ij]=ue[pj]=ue[mj]=ue[bj]=ue[kj]=ue[Pj]=ue[Rj]=ue[Oj]=ue[vj]=ue[_j]=ue[CT]=ue[wj]=ue[Ej]=ue[Sj]=ue[Cj]=ue[Nj]=ue[Aj]=ue[Lj]=ue[Dj]=!0;ue[gj]=ue[ST]=ue[xj]=!1;function Ho(t,e,n,r,i,s){var o,a=e&cj,l=e&dj,u=e&fj;if(n&&(o=i?n(t,r,i,s):n(t)),o!==void 0)return o;if(!Za(t))return t;var d=el(t);if(d){if(o=R$(t),!a)return gT(t,o)}else{var c=Vg(t),f=c==ST||c==yj;if(cT(t))return h$(t,a);if(c==CT||c==ET||f&&!i){if(o=l||f?{}:rj(t),!a)return l?_$(t,d$(o,t)):y$(t,o$(o,t))}else{if(!ue[c])return i?t:{};o=tj(t,c,a)}}s||(s=new io);var p=s.get(t);if(p)return p;s.set(t,o),uj(t)?t.forEach(function(S){o.add(Ho(S,e,n,S,t,s))}):oj(t)&&t.forEach(function(S,m){o.set(m,Ho(S,e,n,m,t,s))});var v=u?l?E$:w$:l?Bg:zg,_=d?void 0:v(t);return d8(_||t,function(S,m){_&&(m=S,S=t[m]),aT(o,m,Ho(S,e,n,m,t,s))}),o}var Mj=4;function V_(t){return Ho(t,Mj)}function xT(t,e){for(var n=-1,r=t==null?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}var Fj="[object Symbol]";function Gg(t){return typeof t=="symbol"||Mi(t)&&Di(t)==Fj}var $j="Expected a function";function Kg(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError($j);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=t.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(Kg.Cache||Kr),n}Kg.Cache=Kr;var jj=500;function Uj(t){var e=Kg(t,function(r){return n.size===jj&&n.clear(),r}),n=e.cache;return e}var zj=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Bj=/\\(\\)?/g,Wj=Uj(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(zj,function(n,r,i,s){e.push(i?s.replace(Bj,"$1"):r||n)}),e});const Vj=Wj;var Hj=1/0;function Gj(t){if(typeof t=="string"||Gg(t))return t;var e=t+"";return e=="0"&&1/t==-Hj?"-0":e}var Kj=1/0,H_=jr?jr.prototype:void 0,G_=H_?H_.toString:void 0;function TT(t){if(typeof t=="string")return t;if(el(t))return xT(t,TT)+"";if(Gg(t))return G_?G_.call(t):"";var e=t+"";return e=="0"&&1/t==-Kj?"-0":e}function qj(t){return t==null?"":TT(t)}function IT(t){return el(t)?xT(t,Gj):Gg(t)?[t]:gT(Vj(qj(t)))}var bT={exports:{}},ie={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $e=typeof Symbol=="function"&&Symbol.for,qg=$e?Symbol.for("react.element"):60103,Yg=$e?Symbol.for("react.portal"):60106,cd=$e?Symbol.for("react.fragment"):60107,dd=$e?Symbol.for("react.strict_mode"):60108,fd=$e?Symbol.for("react.profiler"):60114,hd=$e?Symbol.for("react.provider"):60109,pd=$e?Symbol.for("react.context"):60110,Qg=$e?Symbol.for("react.async_mode"):60111,md=$e?Symbol.for("react.concurrent_mode"):60111,gd=$e?Symbol.for("react.forward_ref"):60112,yd=$e?Symbol.for("react.suspense"):60113,Yj=$e?Symbol.for("react.suspense_list"):60120,vd=$e?Symbol.for("react.memo"):60115,_d=$e?Symbol.for("react.lazy"):60116,Qj=$e?Symbol.for("react.block"):60121,Xj=$e?Symbol.for("react.fundamental"):60117,Jj=$e?Symbol.for("react.responder"):60118,Zj=$e?Symbol.for("react.scope"):60119;function Nt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case qg:switch(t=t.type,t){case Qg:case md:case cd:case fd:case dd:case yd:return t;default:switch(t=t&&t.$$typeof,t){case pd:case gd:case _d:case vd:case hd:return t;default:return e}}case Yg:return e}}}function kT(t){return Nt(t)===md}ie.AsyncMode=Qg;ie.ConcurrentMode=md;ie.ContextConsumer=pd;ie.ContextProvider=hd;ie.Element=qg;ie.ForwardRef=gd;ie.Fragment=cd;ie.Lazy=_d;ie.Memo=vd;ie.Portal=Yg;ie.Profiler=fd;ie.StrictMode=dd;ie.Suspense=yd;ie.isAsyncMode=function(t){return kT(t)||Nt(t)===Qg};ie.isConcurrentMode=kT;ie.isContextConsumer=function(t){return Nt(t)===pd};ie.isContextProvider=function(t){return Nt(t)===hd};ie.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===qg};ie.isForwardRef=function(t){return Nt(t)===gd};ie.isFragment=function(t){return Nt(t)===cd};ie.isLazy=function(t){return Nt(t)===_d};ie.isMemo=function(t){return Nt(t)===vd};ie.isPortal=function(t){return Nt(t)===Yg};ie.isProfiler=function(t){return Nt(t)===fd};ie.isStrictMode=function(t){return Nt(t)===dd};ie.isSuspense=function(t){return Nt(t)===yd};ie.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===cd||t===md||t===fd||t===dd||t===yd||t===Yj||typeof t=="object"&&t!==null&&(t.$$typeof===_d||t.$$typeof===vd||t.$$typeof===hd||t.$$typeof===pd||t.$$typeof===gd||t.$$typeof===Xj||t.$$typeof===Jj||t.$$typeof===Zj||t.$$typeof===Qj)};ie.typeOf=Nt;bT.exports=ie;var e9=bT.exports,Xg=e9,t9={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n9={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r9={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},PT={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Jg={};Jg[Xg.ForwardRef]=r9;Jg[Xg.Memo]=PT;function K_(t){return Xg.isMemo(t)?PT:Jg[t.$$typeof]||t9}var i9=Object.defineProperty,s9=Object.getOwnPropertyNames,q_=Object.getOwnPropertySymbols,o9=Object.getOwnPropertyDescriptor,a9=Object.getPrototypeOf,Y_=Object.prototype;function RT(t,e,n){if(typeof e!="string"){if(Y_){var r=a9(e);r&&r!==Y_&&RT(t,r,n)}var i=s9(e);q_&&(i=i.concat(q_(e)));for(var s=K_(t),o=K_(e),a=0;a<i.length;++a){var l=i[a];if(!n9[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=o9(e,l);try{i9(t,l,u)}catch{}}}}return t}var l9=RT;const u9=Ws(l9);var c9=1,d9=4;function f9(t){return Ho(t,c9|d9)}function ne(){return ne=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ne.apply(this,arguments)}function OT(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function gr(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Q_(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var wd=E.createContext(void 0);wd.displayName="FormikContext";var h9=wd.Provider,p9=wd.Consumer;function NT(){var t=E.useContext(wd);return t}var X_=function(e){return Array.isArray(e)&&e.length===0},ze=function(e){return typeof e=="function"},tl=function(e){return e!==null&&typeof e=="object"},m9=function(e){return String(Math.floor(Number(e)))===e},Rf=function(e){return Object.prototype.toString.call(e)==="[object String]"},AT=function(e){return E.Children.count(e)===0},Of=function(e){return tl(e)&&ze(e.then)};function ye(t,e,n,r){r===void 0&&(r=0);for(var i=IT(e);t&&r<i.length;)t=t[i[r++]];return r!==i.length&&!t||t===void 0?n:t}function gn(t,e,n){for(var r=V_(t),i=r,s=0,o=IT(e);s<o.length-1;s++){var a=o[s],l=ye(t,o.slice(0,s+1));if(l&&(tl(l)||Array.isArray(l)))i=i[a]=V_(l);else{var u=o[s+1];i=i[a]=m9(u)&&Number(u)>=0?[]:{}}}return(s===0?t:i)[o[s]]===n?t:(n===void 0?delete i[o[s]]:i[o[s]]=n,s===0&&n===void 0&&delete r[o[s]],r)}function LT(t,e,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var i=0,s=Object.keys(t);i<s.length;i++){var o=s[i],a=t[o];tl(a)?n.get(a)||(n.set(a,!0),r[o]=Array.isArray(a)?[]:{},LT(a,e,n,r[o])):r[o]=e}return r}function g9(t,e){switch(e.type){case"SET_VALUES":return ne({},t,{values:e.payload});case"SET_TOUCHED":return ne({},t,{touched:e.payload});case"SET_ERRORS":return sr(t.errors,e.payload)?t:ne({},t,{errors:e.payload});case"SET_STATUS":return ne({},t,{status:e.payload});case"SET_ISSUBMITTING":return ne({},t,{isSubmitting:e.payload});case"SET_ISVALIDATING":return ne({},t,{isValidating:e.payload});case"SET_FIELD_VALUE":return ne({},t,{values:gn(t.values,e.payload.field,e.payload.value)});case"SET_FIELD_TOUCHED":return ne({},t,{touched:gn(t.touched,e.payload.field,e.payload.value)});case"SET_FIELD_ERROR":return ne({},t,{errors:gn(t.errors,e.payload.field,e.payload.value)});case"RESET_FORM":return ne({},t,e.payload);case"SET_FORMIK_STATE":return e.payload(t);case"SUBMIT_ATTEMPT":return ne({},t,{touched:LT(t.values,!0),isSubmitting:!0,submitCount:t.submitCount+1});case"SUBMIT_FAILURE":return ne({},t,{isSubmitting:!1});case"SUBMIT_SUCCESS":return ne({},t,{isSubmitting:!1});default:return t}}var Yr={},Rl={};function y9(t){var e=t.validateOnChange,n=e===void 0?!0:e,r=t.validateOnBlur,i=r===void 0?!0:r,s=t.validateOnMount,o=s===void 0?!1:s,a=t.isInitialValid,l=t.enableReinitialize,u=l===void 0?!1:l,d=t.onSubmit,c=gr(t,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=ne({validateOnChange:n,validateOnBlur:i,validateOnMount:o,onSubmit:d},c),p=E.useRef(f.initialValues),v=E.useRef(f.initialErrors||Yr),_=E.useRef(f.initialTouched||Rl),S=E.useRef(f.initialStatus),m=E.useRef(!1),h=E.useRef({});E.useEffect(function(){return m.current=!0,function(){m.current=!1}},[]);var y=E.useState(0),w=y[1],T=E.useRef({values:f.initialValues,errors:f.initialErrors||Yr,touched:f.initialTouched||Rl,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),C=T.current,x=E.useCallback(function(I){var N=T.current;T.current=g9(N,I),N!==T.current&&w(function(D){return D+1})},[]),b=E.useCallback(function(I,N){return new Promise(function(D,$){var V=f.validate(I,N);V==null?D(Yr):Of(V)?V.then(function(te){D(te||Yr)},function(te){$(te)}):D(V)})},[f.validate]),L=E.useCallback(function(I,N){var D=f.validationSchema,$=ze(D)?D(N):D,V=N&&$.validateAt?$.validateAt(N,I):_9(I,$);return new Promise(function(te,Ne){V.then(function(){te(Yr)},function(Sn){Sn.name==="ValidationError"?te(v9(Sn)):Ne(Sn)})})},[f.validationSchema]),F=E.useCallback(function(I,N){return new Promise(function(D){return D(h.current[I].validate(N))})},[]),B=E.useCallback(function(I){var N=Object.keys(h.current).filter(function($){return ze(h.current[$].validate)}),D=N.length>0?N.map(function($){return F($,ye(I,$))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(D).then(function($){return $.reduce(function(V,te,Ne){return te==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||te&&(V=gn(V,N[Ne],te)),V},{})})},[F]),At=E.useCallback(function(I){return Promise.all([B(I),f.validationSchema?L(I):{},f.validate?b(I):{}]).then(function(N){var D=N[0],$=N[1],V=N[2],te=Ep.all([D,$,V],{arrayMerge:w9});return te})},[f.validate,f.validationSchema,B,b,L]),le=Lt(function(I){return I===void 0&&(I=C.values),x({type:"SET_ISVALIDATING",payload:!0}),At(I).then(function(N){return m.current&&(x({type:"SET_ISVALIDATING",payload:!1}),x({type:"SET_ERRORS",payload:N})),N})});E.useEffect(function(){o&&m.current===!0&&sr(p.current,f.initialValues)&&le(p.current)},[o,le]);var gt=E.useCallback(function(I){var N=I&&I.values?I.values:p.current,D=I&&I.errors?I.errors:v.current?v.current:f.initialErrors||{},$=I&&I.touched?I.touched:_.current?_.current:f.initialTouched||{},V=I&&I.status?I.status:S.current?S.current:f.initialStatus;p.current=N,v.current=D,_.current=$,S.current=V;var te=function(){x({type:"RESET_FORM",payload:{isSubmitting:!!I&&!!I.isSubmitting,errors:D,touched:$,status:V,values:N,isValidating:!!I&&!!I.isValidating,submitCount:I&&I.submitCount&&typeof I.submitCount=="number"?I.submitCount:0}})};if(f.onReset){var Ne=f.onReset(C.values,y0);Of(Ne)?Ne.then(te):te()}else te()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);E.useEffect(function(){m.current===!0&&!sr(p.current,f.initialValues)&&u&&(p.current=f.initialValues,gt(),o&&le(p.current))},[u,f.initialValues,gt,o,le]),E.useEffect(function(){u&&m.current===!0&&!sr(v.current,f.initialErrors)&&(v.current=f.initialErrors||Yr,x({type:"SET_ERRORS",payload:f.initialErrors||Yr}))},[u,f.initialErrors]),E.useEffect(function(){u&&m.current===!0&&!sr(_.current,f.initialTouched)&&(_.current=f.initialTouched||Rl,x({type:"SET_TOUCHED",payload:f.initialTouched||Rl}))},[u,f.initialTouched]),E.useEffect(function(){u&&m.current===!0&&!sr(S.current,f.initialStatus)&&(S.current=f.initialStatus,x({type:"SET_STATUS",payload:f.initialStatus}))},[u,f.initialStatus,f.initialTouched]);var wn=Lt(function(I){if(h.current[I]&&ze(h.current[I].validate)){var N=ye(C.values,I),D=h.current[I].validate(N);return Of(D)?(x({type:"SET_ISVALIDATING",payload:!0}),D.then(function($){return $}).then(function($){x({type:"SET_FIELD_ERROR",payload:{field:I,value:$}}),x({type:"SET_ISVALIDATING",payload:!1})})):(x({type:"SET_FIELD_ERROR",payload:{field:I,value:D}}),Promise.resolve(D))}else if(f.validationSchema)return x({type:"SET_ISVALIDATING",payload:!0}),L(C.values,I).then(function($){return $}).then(function($){x({type:"SET_FIELD_ERROR",payload:{field:I,value:ye($,I)}}),x({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),qr=E.useCallback(function(I,N){var D=N.validate;h.current[I]={validate:D}},[]),En=E.useCallback(function(I){delete h.current[I]},[]),O=Lt(function(I,N){x({type:"SET_TOUCHED",payload:I});var D=N===void 0?i:N;return D?le(C.values):Promise.resolve()}),M=E.useCallback(function(I){x({type:"SET_ERRORS",payload:I})},[]),U=Lt(function(I,N){var D=ze(I)?I(C.values):I;x({type:"SET_VALUES",payload:D});var $=N===void 0?n:N;return $?le(D):Promise.resolve()}),J=E.useCallback(function(I,N){x({type:"SET_FIELD_ERROR",payload:{field:I,value:N}})},[]),Q=Lt(function(I,N,D){x({type:"SET_FIELD_VALUE",payload:{field:I,value:N}});var $=D===void 0?n:D;return $?le(gn(C.values,I,N)):Promise.resolve()}),rn=E.useCallback(function(I,N){var D=N,$=I,V;if(!Rf(I)){I.persist&&I.persist();var te=I.target?I.target:I.currentTarget,Ne=te.type,Sn=te.name,Id=te.id,bd=te.value,oI=te.checked,HU=te.outerHTML,v0=te.options,aI=te.multiple;D=N||Sn||Id,$=/number|range/.test(Ne)?(V=parseFloat(bd),isNaN(V)?"":V):/checkbox/.test(Ne)?S9(ye(C.values,D),oI,bd):v0&&aI?E9(v0):bd}D&&Q(D,$)},[Q,C.values]),Je=Lt(function(I){if(Rf(I))return function(N){return rn(N,I)};rn(I)}),Ze=Lt(function(I,N,D){N===void 0&&(N=!0),x({type:"SET_FIELD_TOUCHED",payload:{field:I,value:N}});var $=D===void 0?i:D;return $?le(C.values):Promise.resolve()}),He=E.useCallback(function(I,N){I.persist&&I.persist();var D=I.target,$=D.name,V=D.id,te=D.outerHTML,Ne=N||$||V;Ze(Ne,!0)},[Ze]),yt=Lt(function(I){if(Rf(I))return function(N){return He(N,I)};He(I)}),Jn=E.useCallback(function(I){ze(I)?x({type:"SET_FORMIK_STATE",payload:I}):x({type:"SET_FORMIK_STATE",payload:function(){return I}})},[]),sn=E.useCallback(function(I){x({type:"SET_STATUS",payload:I})},[]),zi=E.useCallback(function(I){x({type:"SET_ISSUBMITTING",payload:I})},[]),Zn=Lt(function(){return x({type:"SUBMIT_ATTEMPT"}),le().then(function(I){var N=I instanceof Error,D=!N&&Object.keys(I).length===0;if(D){var $;try{if($=ZT(),$===void 0)return}catch(V){throw V}return Promise.resolve($).then(function(V){return m.current&&x({type:"SUBMIT_SUCCESS"}),V}).catch(function(V){if(m.current)throw x({type:"SUBMIT_FAILURE"}),V})}else if(m.current&&(x({type:"SUBMIT_FAILURE"}),N))throw I})}),on=Lt(function(I){I&&I.preventDefault&&ze(I.preventDefault)&&I.preventDefault(),I&&I.stopPropagation&&ze(I.stopPropagation)&&I.stopPropagation(),Zn().catch(function(N){console.warn("Warning: An unhandled error was caught from submitForm()",N)})}),y0={resetForm:gt,validateForm:le,validateField:wn,setErrors:M,setFieldError:J,setFieldTouched:Ze,setFieldValue:Q,setStatus:sn,setSubmitting:zi,setTouched:O,setValues:U,setFormikState:Jn,submitForm:Zn},ZT=Lt(function(){return d(C.values,y0)}),eI=Lt(function(I){I&&I.preventDefault&&ze(I.preventDefault)&&I.preventDefault(),I&&I.stopPropagation&&ze(I.stopPropagation)&&I.stopPropagation(),gt()}),tI=E.useCallback(function(I){return{value:ye(C.values,I),error:ye(C.errors,I),touched:!!ye(C.touched,I),initialValue:ye(p.current,I),initialTouched:!!ye(_.current,I),initialError:ye(v.current,I)}},[C.errors,C.touched,C.values]),nI=E.useCallback(function(I){return{setValue:function(D,$){return Q(I,D,$)},setTouched:function(D,$){return Ze(I,D,$)},setError:function(D){return J(I,D)}}},[Q,Ze,J]),rI=E.useCallback(function(I){var N=tl(I),D=N?I.name:I,$=ye(C.values,D),V={name:D,value:$,onChange:Je,onBlur:yt};if(N){var te=I.type,Ne=I.value,Sn=I.as,Id=I.multiple;te==="checkbox"?Ne===void 0?V.checked=!!$:(V.checked=!!(Array.isArray($)&&~$.indexOf(Ne)),V.value=Ne):te==="radio"?(V.checked=$===Ne,V.value=Ne):Sn==="select"&&Id&&(V.value=V.value||[],V.multiple=!0)}return V},[yt,Je,C.values]),Td=E.useMemo(function(){return!sr(p.current,C.values)},[p.current,C.values]),iI=E.useMemo(function(){return typeof a<"u"?Td?C.errors&&Object.keys(C.errors).length===0:a!==!1&&ze(a)?a(f):a:C.errors&&Object.keys(C.errors).length===0},[a,Td,C.errors,f]),sI=ne({},C,{initialValues:p.current,initialErrors:v.current,initialTouched:_.current,initialStatus:S.current,handleBlur:yt,handleChange:Je,handleReset:eI,handleSubmit:on,resetForm:gt,setErrors:M,setFormikState:Jn,setFieldTouched:Ze,setFieldValue:Q,setFieldError:J,setStatus:sn,setSubmitting:zi,setTouched:O,setValues:U,submitForm:Zn,validateForm:le,validateField:wn,isValid:iI,dirty:Td,unregisterField:En,registerField:qr,getFieldProps:rI,getFieldMeta:tI,getFieldHelpers:nI,validateOnBlur:i,validateOnChange:n,validateOnMount:o});return sI}function DT(t){var e=y9(t),n=t.component,r=t.children,i=t.render,s=t.innerRef;return E.useImperativeHandle(s,function(){return e}),E.createElement(h9,{value:e},n?E.createElement(n,e):i?i(e):r?ze(r)?r(e):AT(r)?null:E.Children.only(r):null)}function v9(t){var e={};if(t.inner){if(t.inner.length===0)return gn(e,t.path,t.message);for(var i=t.inner,n=Array.isArray(i),r=0,i=n?i:i[Symbol.iterator]();;){var s;if(n){if(r>=i.length)break;s=i[r++]}else{if(r=i.next(),r.done)break;s=r.value}var o=s;ye(e,o.path)||(e=gn(e,o.path,o.message))}}return e}function _9(t,e,n,r){n===void 0&&(n=!1);var i=bp(t);return e[n?"validateSync":"validate"](i,{abortEarly:!1,context:r||i})}function bp(t){var e=Array.isArray(t)?[]:{};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=String(n);Array.isArray(t[r])===!0?e[r]=t[r].map(function(i){return Array.isArray(i)===!0||w_(i)?bp(i):i!==""?i:void 0}):w_(t[r])?e[r]=bp(t[r]):e[r]=t[r]!==""?t[r]:void 0}return e}function w9(t,e,n){var r=t.slice();return e.forEach(function(s,o){if(typeof r[o]>"u"){var a=n.clone!==!1,l=a&&n.isMergeableObject(s);r[o]=l?Ep(Array.isArray(s)?[]:{},s,n):s}else n.isMergeableObject(s)?r[o]=Ep(t[o],s,n):t.indexOf(s)===-1&&r.push(s)}),r}function E9(t){return Array.from(t).filter(function(e){return e.selected}).map(function(e){return e.value})}function S9(t,e,n){if(typeof t=="boolean")return!!e;var r=[],i=!1,s=-1;if(Array.isArray(t))r=t,s=t.indexOf(n),i=s>=0;else if(!n||n=="true"||n=="false")return!!e;return e&&n&&!i?r.concat(n):i?r.slice(0,s).concat(r.slice(s+1)):r}var C9=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?E.useLayoutEffect:E.useEffect;function Lt(t){var e=E.useRef(t);return C9(function(){e.current=t}),E.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e.current.apply(void 0,r)},[])}function MT(t){var e=t.validate,n=t.name,r=t.render,i=t.children,s=t.as,o=t.component,a=t.className,l=gr(t,["validate","name","render","children","as","component","className"]),u=NT(),d=gr(u,["validate","validationSchema"]),c=d.registerField,f=d.unregisterField;E.useEffect(function(){return c(n,{validate:e}),function(){f(n)}},[c,f,n,e]);var p=d.getFieldProps(ne({name:n},l)),v=d.getFieldMeta(n),_={field:p,form:d};if(r)return r(ne({},_,{meta:v}));if(ze(i))return i(ne({},_,{meta:v}));if(o){if(typeof o=="string"){var S=l.innerRef,m=gr(l,["innerRef"]);return E.createElement(o,ne({ref:S},p,m,{className:a}),i)}return E.createElement(o,ne({field:p,form:d},l,{className:a}),i)}var h=s||"input";if(typeof h=="string"){var y=l.innerRef,w=gr(l,["innerRef"]);return E.createElement(h,ne({ref:y},p,w,{className:a}),i)}return E.createElement(h,ne({},p,l,{className:a}),i)}var Zg=E.forwardRef(function(t,e){var n=t.action,r=gr(t,["action"]),i=n??"#",s=NT(),o=s.handleReset,a=s.handleSubmit;return E.createElement("form",ne({onSubmit:a,ref:e,onReset:o,action:i},r))});Zg.displayName="Form";function x9(t){var e=function(i){return E.createElement(p9,null,function(s){return E.createElement(t,ne({},i,{formik:s}))})},n=t.displayName||t.name||t.constructor&&t.constructor.name||"Component";return e.WrappedComponent=t,e.displayName="FormikConnect("+n+")",u9(e,t)}var T9=function(e,n,r){var i=Pi(e),s=i[n];return i.splice(n,1),i.splice(r,0,s),i},I9=function(e,n,r){var i=Pi(e),s=i[n];return i[n]=i[r],i[r]=s,i},Nf=function(e,n,r){var i=Pi(e);return i.splice(n,0,r),i},b9=function(e,n,r){var i=Pi(e);return i[n]=r,i},Pi=function(e){if(e){if(Array.isArray(e))return[].concat(e);var n=Object.keys(e).map(function(r){return parseInt(r)}).reduce(function(r,i){return i>r?i:r},0);return Array.from(ne({},e,{length:n+1}))}else return[]},J_=function(e,n){var r=typeof e=="function"?e:n;return function(i){if(Array.isArray(i)||tl(i)){var s=Pi(i);return r(s)}return i}},k9=function(t){OT(e,t);function e(r){var i;return i=t.call(this,r)||this,i.updateArrayField=function(s,o,a){var l=i.props,u=l.name,d=l.formik.setFormikState;d(function(c){var f=J_(a,s),p=J_(o,s),v=gn(c.values,u,s(ye(c.values,u))),_=a?f(ye(c.errors,u)):void 0,S=o?p(ye(c.touched,u)):void 0;return X_(_)&&(_=void 0),X_(S)&&(S=void 0),ne({},c,{values:v,errors:a?gn(c.errors,u,_):c.errors,touched:o?gn(c.touched,u,S):c.touched})})},i.push=function(s){return i.updateArrayField(function(o){return[].concat(Pi(o),[f9(s)])},!1,!1)},i.handlePush=function(s){return function(){return i.push(s)}},i.swap=function(s,o){return i.updateArrayField(function(a){return I9(a,s,o)},!0,!0)},i.handleSwap=function(s,o){return function(){return i.swap(s,o)}},i.move=function(s,o){return i.updateArrayField(function(a){return T9(a,s,o)},!0,!0)},i.handleMove=function(s,o){return function(){return i.move(s,o)}},i.insert=function(s,o){return i.updateArrayField(function(a){return Nf(a,s,o)},function(a){return Nf(a,s,null)},function(a){return Nf(a,s,null)})},i.handleInsert=function(s,o){return function(){return i.insert(s,o)}},i.replace=function(s,o){return i.updateArrayField(function(a){return b9(a,s,o)},!1,!1)},i.handleReplace=function(s,o){return function(){return i.replace(s,o)}},i.unshift=function(s){var o=-1;return i.updateArrayField(function(a){var l=a?[s].concat(a):[s];return o=l.length,l},function(a){return a?[null].concat(a):[null]},function(a){return a?[null].concat(a):[null]}),o},i.handleUnshift=function(s){return function(){return i.unshift(s)}},i.handleRemove=function(s){return function(){return i.remove(s)}},i.handlePop=function(){return function(){return i.pop()}},i.remove=i.remove.bind(Q_(i)),i.pop=i.pop.bind(Q_(i)),i}var n=e.prototype;return n.componentDidUpdate=function(i){this.props.validateOnChange&&this.props.formik.validateOnChange&&!sr(ye(i.formik.values,i.name),ye(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},n.remove=function(i){var s;return this.updateArrayField(function(o){var a=o?Pi(o):[];return s||(s=a[i]),ze(a.splice)&&a.splice(i,1),ze(a.every)&&a.every(function(l){return l===void 0})?[]:a},!0,!0),s},n.pop=function(){var i;return this.updateArrayField(function(s){var o=s.slice();return i||(i=o&&o.pop&&o.pop()),o},!0,!0),i},n.render=function(){var i={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},s=this.props,o=s.component,a=s.render,l=s.children,u=s.name,d=s.formik,c=gr(d,["validate","validationSchema"]),f=ne({},i,{form:c,name:u});return o?E.createElement(o,f):a?a(f):l?typeof l=="function"?l(f):AT(l)?null:E.Children.only(l):null},e}(E.Component);k9.defaultProps={validateOnChange:!0};var P9=function(t){OT(e,t);function e(){return t.apply(this,arguments)||this}var n=e.prototype;return n.shouldComponentUpdate=function(i){return ye(this.props.formik.errors,this.props.name)!==ye(i.formik.errors,this.props.name)||ye(this.props.formik.touched,this.props.name)!==ye(i.formik.touched,this.props.name)||Object.keys(this.props).length!==Object.keys(i).length},n.render=function(){var i=this.props,s=i.component,o=i.formik,a=i.render,l=i.children,u=i.name,d=gr(i,["component","formik","render","children","name"]),c=ye(o.touched,u),f=ye(o.errors,u);return c&&f?a?ze(a)?a(f):null:l?ze(l)?l(f):null:s?E.createElement(s,d,f):f:null},e}(E.Component),Go=x9(P9);const R9=Uc`
        0% {
      background-color: rgb(0, 0, 0, 0.4);
      opacity: 0.3;
    }
    100% {
      background-color: rgb(0, 0, 0, 0.8);
      opacity: 1;
    }
`,O9=Uc`
        0% {
      background-color: rgb(0, 0, 0, 0.8);
      opacity: 1;
    }
    100% {
      background-color: rgb(0, 0, 0, 0.4);
      opacity: 0;
    }
`,N9=t=>{switch(t.$closing){case!1:return Ls`
        animation: ${R9} 350ms ease 1 normal forwards;
      `;case!0:return Ls`
        animation: ${O9} 350ms 350ms ease 1 normal forwards;
      `;default:return null}},A9=Uc`
  0% {
      opacity: 0.3;
      transform: scale(0.2);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  `,L9=Uc`
  0% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0);
    }
  `,D9=t=>{switch(t.$closing){case!1:return Ls`
        animation: ${A9} 350ms 350ms ease 1 normal forwards;
      `;case!0:return Ls`
        animation: ${L9} 350ms ease 1 normal forwards;
      `;default:return null}},M9=P.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  overflow-y: scroll;
  z-index: 100;
  ${N9}
`,F9=P.div`
  opacity: 0;
  ${D9}
`,$9=P.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,e0=({children:t,onClose:e})=>{const[n,r]=E.useState(!1);document.body.style.overflow="hidden";const i=E.useCallback(s=>{(s.code==="Escape"||s.target===s.currentTarget)&&(r(!0),setTimeout(()=>{r(!1),document.body.style.overflow="auto",e()},750))},[e]);return E.useEffect(()=>(document.body.style.overflow="hidden",window.addEventListener("keydown",i),()=>{document.body.style.overflow="auto",window.removeEventListener("keydown",i)}),[i]),TE.createPortal(g.jsx(M9,{id:"modalWrap",$closing:n,onClick:i,children:g.jsx($9,{children:g.jsx(F9,{$closing:n,children:t})})}),document.querySelector("#root"))};e0.propTypes={onClose:G.func.isRequired,children:G.node.isRequired};const j9=P.div`
  position: relative;
  width: 566px;
  height: 506px;
  background-color: #fff;
  padding: 64px;
  border-radius: 30px;
  background: rgb(255, 255, 255);
`,U9=P.h3`
  color: ${oe.BLACK_TEXT};
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: -0.8px;
  text-align: start;
  margin-bottom: 20px;
`,z9=P.p`
  color: ${oe.BLACK_TEXT};
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: start;
  margin-bottom: 40px;
`,Z_=P(MT)`
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
    color: ${oe.BLACK_TEXT};
  }
  margin-bottom: ${t=>t.marginbottom||"18px"};
`,B9=P.button`
  width: 438px;
  height: 60px;
  border-radius: 12px;
  background-color: ${oe.YELLOW_BUTTON};
  &:hover {
    background-color: ${oe.YELLOW_HOVER_BUTTON};
  }
  border: none;
  color: ${oe.BLACK_TEXT};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
`,W9=P.div`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  &:hover svg path {
    stroke-width: 3.5;
  }
`,V9=P.div`
  position: relative;
`,H9=P.button`
  position: absolute;
  background: none;
  border: none;
  right: 17px;
  bottom: 117px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`,G9=P.div`
  position: absolute;
  color: red;
  font-size: 14px;
  line-height: 1.28;
  top: 55px;
`,K9=P.div`
  position: absolute;
  color: red;
  font-size: 14px;
  line-height: 1.28;
  top: 128px;
`;function ji(t){this._maxSize=t,this.clear()}ji.prototype.clear=function(){this._size=0,this._values=Object.create(null)};ji.prototype.get=function(t){return this._values[t]};ji.prototype.set=function(t,e){return this._size>=this._maxSize&&this.clear(),t in this._values||this._size++,this._values[t]=e};var q9=/[^.^\]^[]+|(?=\[\]|\.\.)/g,FT=/^\d+$/,Y9=/^\d/,Q9=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,X9=/^\s*(['"]?)(.*?)(\1)\s*$/,t0=512,e1=new ji(t0),t1=new ji(t0),n1=new ji(t0),pi={Cache:ji,split:kp,normalizePath:Af,setter:function(t){var e=Af(t);return t1.get(t)||t1.set(t,function(r,i){for(var s=0,o=e.length,a=r;s<o-1;){var l=e[s];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;a=a[e[s++]]}a[e[s]]=i})},getter:function(t,e){var n=Af(t);return n1.get(t)||n1.set(t,function(i){for(var s=0,o=n.length;s<o;)if(i!=null||!e)i=i[n[s++]];else return;return i})},join:function(t){return t.reduce(function(e,n){return e+(n0(n)||FT.test(n)?"["+n+"]":(e?".":"")+n)},"")},forEach:function(t,e,n){J9(Array.isArray(t)?t:kp(t),e,n)}};function Af(t){return e1.get(t)||e1.set(t,kp(t).map(function(e){return e.replace(X9,"$2")}))}function kp(t){return t.match(q9)||[""]}function J9(t,e,n){var r=t.length,i,s,o,a;for(s=0;s<r;s++)i=t[s],i&&(t7(i)&&(i='"'+i+'"'),a=n0(i),o=!a&&/^\d+$/.test(i),e.call(n,i,a,o,s,t))}function n0(t){return typeof t=="string"&&t&&["'",'"'].indexOf(t.charAt(0))!==-1}function Z9(t){return t.match(Y9)&&!t.match(FT)}function e7(t){return Q9.test(t)}function t7(t){return!n0(t)&&(Z9(t)||e7(t))}const n7=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Ed=t=>t.match(n7)||[],Sd=t=>t[0].toUpperCase()+t.slice(1),r0=(t,e)=>Ed(t).join(e).toLowerCase(),$T=t=>Ed(t).reduce((e,n)=>`${e}${e?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),r7=t=>Sd($T(t)),i7=t=>r0(t,"_"),s7=t=>r0(t,"-"),o7=t=>Sd(r0(t," ")),a7=t=>Ed(t).map(Sd).join(" ");var Lf={words:Ed,upperFirst:Sd,camelCase:$T,pascalCase:r7,snakeCase:i7,kebabCase:s7,sentenceCase:o7,titleCase:a7},i0={exports:{}};i0.exports=function(t){return jT(l7(t),t)};i0.exports.array=jT;function jT(t,e){var n=t.length,r=new Array(n),i={},s=n,o=u7(e),a=c7(t);for(e.forEach(function(u){if(!a.has(u[0])||!a.has(u[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});s--;)i[s]||l(t[s],s,new Set);return r;function l(u,d,c){if(c.has(u)){var f;try{f=", node was:"+JSON.stringify(u)}catch{f=""}throw new Error("Cyclic dependency"+f)}if(!a.has(u))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(u));if(!i[d]){i[d]=!0;var p=o.get(u)||new Set;if(p=Array.from(p),d=p.length){c.add(u);do{var v=p[--d];l(v,a.get(v),c)}while(d);c.delete(u)}r[--n]=u}}}function l7(t){for(var e=new Set,n=0,r=t.length;n<r;n++){var i=t[n];e.add(i[0]),e.add(i[1])}return Array.from(e)}function u7(t){for(var e=new Map,n=0,r=t.length;n<r;n++){var i=t[n];e.has(i[0])||e.set(i[0],new Set),e.has(i[1])||e.set(i[1],new Set),e.get(i[0]).add(i[1])}return e}function c7(t){for(var e=new Map,n=0,r=t.length;n<r;n++)e.set(t[n],n);return e}var d7=i0.exports;const f7=Ws(d7),h7=Object.prototype.toString,p7=Error.prototype.toString,m7=RegExp.prototype.toString,g7=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",y7=/^Symbol\((.*)\)(.*)$/;function v7(t){return t!=+t?"NaN":t===0&&1/t<0?"-0":""+t}function r1(t,e=!1){if(t==null||t===!0||t===!1)return""+t;const n=typeof t;if(n==="number")return v7(t);if(n==="string")return e?`"${t}"`:t;if(n==="function")return"[Function "+(t.name||"anonymous")+"]";if(n==="symbol")return g7.call(t).replace(y7,"Symbol($1)");const r=h7.call(t).slice(8,-1);return r==="Date"?isNaN(t.getTime())?""+t:t.toISOString(t):r==="Error"||t instanceof Error?"["+p7.call(t)+"]":r==="RegExp"?m7.call(t):null}function Or(t,e){let n=r1(t,e);return n!==null?n:JSON.stringify(t,function(r,i){let s=r1(this[r],e);return s!==null?s:i},2)}function UT(t){return t==null?[]:[].concat(t)}let zT,_7=/\$\{\s*(\w+)\s*\}/g;zT=Symbol.toStringTag;class ot extends Error{static formatError(e,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof e=="string"?e.replace(_7,(i,s)=>Or(n[s])):typeof e=="function"?e(n):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,n,r,i,s){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this[zT]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],UT(e).forEach(o=>{if(ot.isError(o)){this.errors.push(...o.errors);const a=o.inner.length?o.inner:[o];this.inner.push(...a)}else this.errors.push(o)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],!s&&Error.captureStackTrace&&Error.captureStackTrace(this,ot)}}let un={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:t,type:e,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${Or(r,!0)}\`).`:".";return e!=="mixed"?`${t} must be a \`${e}\` type, but the final value was: \`${Or(n,!0)}\``+i:`${t} must match the configured type. The validated value was: \`${Or(n,!0)}\``+i}},Wt={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},w7={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},Pp={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},E7={isValue:"${path} field must be ${value}"},Rp={noUnknown:"${path} field has unspecified keys: ${unknown}"},S7={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},C7={notType:t=>{const{path:e,value:n,spec:r}=t,i=r.types.length;if(Array.isArray(n)){if(n.length<i)return`${e} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${Or(n,!0)}\``;if(n.length>i)return`${e} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${Or(n,!0)}\``}return ot.formatError(un.notType,t)}};Object.assign(Object.create(null),{mixed:un,string:Wt,number:w7,date:Pp,object:Rp,array:S7,boolean:E7,tuple:C7});const s0=t=>t&&t.__isYupSchema__;class hc{static fromOptions(e,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:s}=n,o=typeof r=="function"?r:(...a)=>a.every(l=>l===r);return new hc(e,(a,l)=>{var u;let d=o(...a)?i:s;return(u=d==null?void 0:d(l))!=null?u:l})}constructor(e,n){this.fn=void 0,this.refs=e,this.refs=e,this.fn=n}resolve(e,n){let r=this.refs.map(s=>s.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,e,n);if(i===void 0||i===e)return e;if(!s0(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const Ol={context:"$",value:"."};class Ui{constructor(e,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Ol.context,this.isValue=this.key[0]===Ol.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?Ol.context:this.isValue?Ol.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&pi.getter(this.path,!0),this.map=n.map}getValue(e,n,r){let i=this.isContext?r:this.isValue?e:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(e,n){return this.getValue(e,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}Ui.prototype.__isYupRef=!0;const ai=t=>t==null;function Hi(t){function e({value:n,path:r="",options:i,originalValue:s,schema:o},a,l){const{name:u,test:d,params:c,message:f,skipAbsent:p}=t;let{parent:v,context:_,abortEarly:S=o.spec.abortEarly,disableStackTrace:m=o.spec.disableStackTrace}=i;function h(B){return Ui.isRef(B)?B.getValue(n,v,_):B}function y(B={}){var At;const le=Object.assign({value:n,originalValue:s,label:o.spec.label,path:B.path||r,spec:o.spec},c,B.params);for(const wn of Object.keys(le))le[wn]=h(le[wn]);const gt=new ot(ot.formatError(B.message||f,le),n,le.path,B.type||u,(At=B.disableStackTrace)!=null?At:m);return gt.params=le,gt}const w=S?a:l;let T={path:r,parent:v,type:u,from:i.from,createError:y,resolve:h,options:i,originalValue:s,schema:o};const C=B=>{ot.isError(B)?w(B):B?l(null):w(y())},x=B=>{ot.isError(B)?w(B):a(B)};if(p&&ai(n))return C(!0);let L;try{var F;if(L=d.call(T,n,T),typeof((F=L)==null?void 0:F.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${T.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(L).then(C,x)}}catch(B){x(B);return}C(L)}return e.OPTIONS=t,e}function x7(t,e,n,r=n){let i,s,o;return e?(pi.forEach(e,(a,l,u)=>{let d=l?a.slice(1,a.length-1):a;t=t.resolve({context:r,parent:i,value:n});let c=t.type==="tuple",f=u?parseInt(d,10):0;if(t.innerType||c){if(c&&!u)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);if(n&&f>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${e}. because there is no value at that index. `);i=n,n=n&&n[f],t=c?t.spec.types[f]:t.innerType}if(!u){if(!t.fields||!t.fields[d])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${t.type}")`);i=n,n=n&&n[d],t=t.fields[d]}s=d,o=l?"["+a+"]":"."+a}),{schema:t,parent:i,parentPath:s}):{parent:i,parentPath:e,schema:t}}class pc extends Set{describe(){const e=[];for(const n of this.values())e.push(Ui.isRef(n)?n.describe():n);return e}resolveAll(e){let n=[];for(const r of this.values())n.push(e(r));return n}clone(){return new pc(this.values())}merge(e,n){const r=this.clone();return e.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function ls(t,e=new Map){if(s0(t)||!t||typeof t!="object")return t;if(e.has(t))return e.get(t);let n;if(t instanceof Date)n=new Date(t.getTime()),e.set(t,n);else if(t instanceof RegExp)n=new RegExp(t),e.set(t,n);else if(Array.isArray(t)){n=new Array(t.length),e.set(t,n);for(let r=0;r<t.length;r++)n[r]=ls(t[r],e)}else if(t instanceof Map){n=new Map,e.set(t,n);for(const[r,i]of t.entries())n.set(r,ls(i,e))}else if(t instanceof Set){n=new Set,e.set(t,n);for(const r of t)n.add(ls(r,e))}else if(t instanceof Object){n={},e.set(t,n);for(const[r,i]of Object.entries(t))n[r]=ls(i,e)}else throw Error(`Unable to clone ${t}`);return n}class vn{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new pc,this._blacklist=new pc,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(un.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},e==null?void 0:e.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=ls(Object.assign({},this.spec,e)),n}label(e){let n=this.clone();return n.spec.label=e,n}meta(...e){if(e.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},e[0]),n}withMutation(e){let n=this._mutate;this._mutate=!0;let r=e(this);return this._mutate=n,r}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let n=this,r=e.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(e._whitelist,e._blacklist),r._blacklist=n._blacklist.merge(e._blacklist,e._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(s=>{e.tests.forEach(o=>{s.test(o.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(e){return e==null?!!(this.spec.nullable&&e===null||this.spec.optional&&e===void 0):this._typeCheck(e)}resolve(e){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,s)=>s.resolve(i,e),n),n=n.resolve(e)}return n}resolveOptions(e){var n,r,i,s;return Object.assign({},e,{from:e.from||[],strict:(n=e.strict)!=null?n:this.spec.strict,abortEarly:(r=e.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=e.recursive)!=null?i:this.spec.recursive,disableStackTrace:(s=e.disableStackTrace)!=null?s:this.spec.disableStackTrace})}cast(e,n={}){let r=this.resolve(Object.assign({value:e},n)),i=n.assert==="ignore-optionality",s=r._cast(e,n);if(n.assert!==!1&&!r.isType(s)){if(i&&ai(s))return s;let o=Or(e),a=Or(s);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${o} 
`+(a!==o?`result of cast: ${a}`:""))}return s}_cast(e,n){let r=e===void 0?e:this.transforms.reduce((i,s)=>s.call(this,i,e,this),e);return r===void 0&&(r=this.getDefault(n)),r}_validate(e,n={},r,i){let{path:s,originalValue:o=e,strict:a=this.spec.strict}=n,l=e;a||(l=this._cast(l,Object.assign({assert:!1},n)));let u=[];for(let d of Object.values(this.internalTests))d&&u.push(d);this.runTests({path:s,value:l,originalValue:o,options:n,tests:u},r,d=>{if(d.length)return i(d,l);this.runTests({path:s,value:l,originalValue:o,options:n,tests:this.tests},r,i)})}runTests(e,n,r){let i=!1,{tests:s,value:o,originalValue:a,path:l,options:u}=e,d=_=>{i||(i=!0,n(_,o))},c=_=>{i||(i=!0,r(_,o))},f=s.length,p=[];if(!f)return c([]);let v={value:o,originalValue:a,path:l,options:u,schema:this};for(let _=0;_<s.length;_++){const S=s[_];S(v,d,function(h){h&&(Array.isArray(h)?p.push(...h):p.push(h)),--f<=0&&c(p)})}}asNestedTest({key:e,index:n,parent:r,parentPath:i,originalParent:s,options:o}){const a=e??n;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof a=="number";let u=r[a];const d=Object.assign({},o,{strict:!0,parent:r,value:u,originalValue:s[a],key:void 0,[l?"index":"key"]:a,path:l||a.includes(".")?`${i||""}[${u?a:`"${a}"`}]`:(i?`${i}.`:"")+e});return(c,f,p)=>this.resolve(d)._validate(u,d,f,p)}validate(e,n){var r;let i=this.resolve(Object.assign({},n,{value:e})),s=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return new Promise((o,a)=>i._validate(e,n,(l,u)=>{ot.isError(l)&&(l.value=u),a(l)},(l,u)=>{l.length?a(new ot(l,u,void 0,void 0,s)):o(u)}))}validateSync(e,n){var r;let i=this.resolve(Object.assign({},n,{value:e})),s,o=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return i._validate(e,Object.assign({},n,{sync:!0}),(a,l)=>{throw ot.isError(a)&&(a.value=l),a},(a,l)=>{if(a.length)throw new ot(a,e,void 0,void 0,o);s=l}),s}isValid(e,n){return this.validate(e,n).then(()=>!0,r=>{if(ot.isError(r))return!1;throw r})}isValidSync(e,n){try{return this.validateSync(e,n),!0}catch(r){if(ot.isError(r))return!1;throw r}}_getDefault(e){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,e):ls(n)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,n){const r=this.clone({nullable:e});return r.internalTests.nullable=Hi({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(e,n){const r=this.clone({optional:e});return r.internalTests.optionality=Hi({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(e=un.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=un.notNull){return this.nullability(!1,e)}required(e=un.required){return this.clone().withMutation(n=>n.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let n=this.clone();return n.transforms.push(e),n}test(...e){let n;if(e.length===1?typeof e[0]=="function"?n={test:e[0]}:n=e[0]:e.length===2?n={name:e[0],test:e[1]}:n={name:e[0],message:e[1],test:e[2]},n.message===void 0&&(n.message=un.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=Hi(n),s=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(o=>!(o.OPTIONS.name===n.name&&(s||o.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(e,n){!Array.isArray(e)&&typeof e!="string"&&(n=e,e=".");let r=this.clone(),i=UT(e).map(s=>new Ui(s));return i.forEach(s=>{s.isSibling&&r.deps.push(s.key)}),r.conditions.push(typeof n=="function"?new hc(i,n):hc.fromOptions(i,n)),r}typeError(e){let n=this.clone();return n.internalTests.typeError=Hi({message:e,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(e,n=un.oneOf){let r=this.clone();return e.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=Hi({message:n,name:"oneOf",skipAbsent:!0,test(i){let s=this.schema._whitelist,o=s.resolveAll(this.resolve);return o.includes(i)?!0:this.createError({params:{values:Array.from(s).join(", "),resolved:o}})}}),r}notOneOf(e,n=un.notOneOf){let r=this.clone();return e.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=Hi({message:n,name:"notOneOf",test(i){let s=this.schema._blacklist,o=s.resolveAll(this.resolve);return o.includes(i)?this.createError({params:{values:Array.from(s).join(", "),resolved:o}}):!0}}),r}strip(e=!0){let n=this.clone();return n.spec.strip=e,n}describe(e){const n=(e?this.resolve(e):this).clone(),{label:r,meta:i,optional:s,nullable:o}=n.spec;return{meta:i,label:r,optional:s,nullable:o,default:n.getDefault(e),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,u,d)=>d.findIndex(c=>c.name===l.name)===u)}}}vn.prototype.__isYupSchema__=!0;for(const t of["validate","validateSync"])vn.prototype[`${t}At`]=function(e,n,r={}){const{parent:i,parentPath:s,schema:o}=x7(this,e,n,r.context);return o[t](i&&i[s],Object.assign({},r,{parent:i,path:e}))};for(const t of["equals","is"])vn.prototype[t]=vn.prototype.oneOf;for(const t of["not","nope"])vn.prototype[t]=vn.prototype.notOneOf;let T7=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,I7=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,b7=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,k7=t=>ai(t)||t===t.trim(),P7={}.toString();function ws(){return new BT}class BT extends vn{constructor(){super({type:"string",check(e){return e instanceof String&&(e=e.valueOf()),typeof e=="string"}}),this.withMutation(()=>{this.transform((e,n,r)=>{if(!r.spec.coerce||r.isType(e)||Array.isArray(e))return e;const i=e!=null&&e.toString?e.toString():e;return i===P7?e:i})})}required(e){return super.required(e).withMutation(n=>n.test({message:e||un.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(n=>n.OPTIONS.name!=="required"),e))}length(e,n=Wt.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(r){return r.length===this.resolve(e)}})}min(e,n=Wt.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(r){return r.length>=this.resolve(e)}})}max(e,n=Wt.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:e},skipAbsent:!0,test(r){return r.length<=this.resolve(e)}})}matches(e,n){let r=!1,i,s;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:s}=n:i=n),this.test({name:s||"matches",message:i||Wt.matches,params:{regex:e},skipAbsent:!0,test:o=>o===""&&r||o.search(e)!==-1})}email(e=Wt.email){return this.matches(T7,{name:"email",message:e,excludeEmptyString:!0})}url(e=Wt.url){return this.matches(I7,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=Wt.uuid){return this.matches(b7,{name:"uuid",message:e,excludeEmptyString:!1})}ensure(){return this.default("").transform(e=>e===null?"":e)}trim(e=Wt.trim){return this.transform(n=>n!=null?n.trim():n).test({message:e,name:"trim",test:k7})}lowercase(e=Wt.lowercase){return this.transform(n=>ai(n)?n:n.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>ai(n)||n===n.toLowerCase()})}uppercase(e=Wt.uppercase){return this.transform(n=>ai(n)?n:n.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>ai(n)||n===n.toUpperCase()})}}ws.prototype=BT.prototype;const R7=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function xn(t,e=0){return Number(t)||e}function O7(t){const e=R7.exec(t);if(!e)return Date.parse?Date.parse(t):Number.NaN;const n={year:xn(e[1]),month:xn(e[2],1)-1,day:xn(e[3],1),hour:xn(e[4]),minute:xn(e[5]),second:xn(e[6]),millisecond:e[7]?xn(e[7].substring(0,3)):0,z:e[8]||void 0,plusMinus:e[9]||void 0,hourOffset:xn(e[10]),minuteOffset:xn(e[11])};if(n.z===void 0&&n.plusMinus===void 0)return new Date(n.year,n.month,n.day,n.hour,n.minute,n.second,n.millisecond).valueOf();let r=0;return n.z!=="Z"&&n.plusMinus!==void 0&&(r=n.hourOffset*60+n.minuteOffset,n.plusMinus==="+"&&(r=0-r)),Date.UTC(n.year,n.month,n.day,n.hour,n.minute+r,n.second,n.millisecond)}let N7=new Date(""),A7=t=>Object.prototype.toString.call(t)==="[object Date]";class Cd extends vn{constructor(){super({type:"date",check(e){return A7(e)&&!isNaN(e.getTime())}}),this.withMutation(()=>{this.transform((e,n,r)=>!r.spec.coerce||r.isType(e)||e===null?e:(e=O7(e),isNaN(e)?Cd.INVALID_DATE:new Date(e)))})}prepareParam(e,n){let r;if(Ui.isRef(e))r=e;else{let i=this.cast(e);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(e,n=Pp.min){let r=this.prepareParam(e,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(e,n=Pp.max){let r=this.prepareParam(e,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}Cd.INVALID_DATE=N7;Cd.prototype;function L7(t,e=[]){let n=[],r=new Set,i=new Set(e.map(([o,a])=>`${o}-${a}`));function s(o,a){let l=pi.split(o)[0];r.add(l),i.has(`${a}-${l}`)||n.push([a,l])}for(const o of Object.keys(t)){let a=t[o];r.add(o),Ui.isRef(a)&&a.isSibling?s(a.path,o):s0(a)&&"deps"in a&&a.deps.forEach(l=>s(l,o))}return f7.array(Array.from(r),n).reverse()}function i1(t,e){let n=1/0;return t.some((r,i)=>{var s;if((s=e.path)!=null&&s.includes(r))return n=i,!0}),n}function WT(t){return(e,n)=>i1(t,e)-i1(t,n)}const D7=(t,e,n)=>{if(typeof t!="string")return t;let r=t;try{r=JSON.parse(t)}catch{}return n.isType(r)?r:t};function iu(t){if("fields"in t){const e={};for(const[n,r]of Object.entries(t.fields))e[n]=iu(r);return t.setFields(e)}if(t.type==="array"){const e=t.optional();return e.innerType&&(e.innerType=iu(e.innerType)),e}return t.type==="tuple"?t.optional().clone({types:t.spec.types.map(iu)}):"optional"in t?t.optional():t}const M7=(t,e)=>{const n=[...pi.normalizePath(e)];if(n.length===1)return n[0]in t;let r=n.pop(),i=pi.getter(pi.join(n),!0)(t);return!!(i&&r in i)};let s1=t=>Object.prototype.toString.call(t)==="[object Object]";function F7(t,e){let n=Object.keys(t.fields);return Object.keys(e).filter(r=>n.indexOf(r)===-1)}const $7=WT([]);function o0(t){return new VT(t)}class VT extends vn{constructor(e){super({type:"object",check(n){return s1(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=$7,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,n={}){var r;let i=super._cast(e,n);if(i===void 0)return this.getDefault(n);if(!this._typeCheck(i))return i;let s=this.fields,o=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(i).filter(c=>!this._nodes.includes(c))),l={},u=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),d=!1;for(const c of a){let f=s[c],p=c in i;if(f){let v,_=i[c];u.path=(n.path?`${n.path}.`:"")+c,f=f.resolve({value:_,context:n.context,parent:l});let S=f instanceof vn?f.spec:void 0,m=S==null?void 0:S.strict;if(S!=null&&S.strip){d=d||c in i;continue}v=!n.__validating||!m?f.cast(i[c],u):i[c],v!==void 0&&(l[c]=v)}else p&&!o&&(l[c]=i[c]);(p!==c in l||l[c]!==i[c])&&(d=!0)}return d?l:i}_validate(e,n={},r,i){let{from:s=[],originalValue:o=e,recursive:a=this.spec.recursive}=n;n.from=[{schema:this,value:o},...s],n.__validating=!0,n.originalValue=o,super._validate(e,n,r,(l,u)=>{if(!a||!s1(u)){i(l,u);return}o=o||u;let d=[];for(let c of this._nodes){let f=this.fields[c];!f||Ui.isRef(f)||d.push(f.asNestedTest({options:n,key:c,parent:u,parentPath:n.path,originalParent:o}))}this.runTests({tests:d,value:u,originalValue:o,options:n},r,c=>{i(c.sort(this._sortErrors).concat(l),u)})})}clone(e){const n=super.clone(e);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(e){let n=super.concat(e),r=n.fields;for(let[i,s]of Object.entries(this.fields)){const o=r[i];r[i]=o===void 0?s:o}return n.withMutation(i=>i.setFields(r,[...this._excludedEdges,...e._excludedEdges]))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var i;const s=this.fields[r];let o=e;(i=o)!=null&&i.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[r]})),n[r]=s&&"getDefault"in s?s.getDefault(o):void 0}),n}setFields(e,n){let r=this.clone();return r.fields=e,r._nodes=L7(e,n),r._sortErrors=WT(Object.keys(e)),n&&(r._excludedEdges=n),r}shape(e,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,e),i)})}partial(){const e={};for(const[n,r]of Object.entries(this.fields))e[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(e)}deepPartial(){return iu(this)}pick(e){const n={};for(const r of e)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,i])=>e.includes(r)&&e.includes(i)))}omit(e){const n=[];for(const r of Object.keys(this.fields))e.includes(r)||n.push(r);return this.pick(n)}from(e,n,r){let i=pi.getter(e,!0);return this.transform(s=>{if(!s)return s;let o=s;return M7(s,e)&&(o=Object.assign({},s),r||delete o[e],o[n]=i(s)),o})}json(){return this.transform(D7)}noUnknown(e=!0,n=Rp.noUnknown){typeof e!="boolean"&&(n=e,e=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const s=F7(this.schema,i);return!e||s.length===0||this.createError({params:{unknown:s.join(", ")}})}});return r.spec.noUnknown=e,r}unknown(e=!0,n=Rp.noUnknown){return this.noUnknown(!e,n)}transformKeys(e){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[e(i)]=n[i];return r})}camelCase(){return this.transformKeys(Lf.camelCase)}snakeCase(){return this.transformKeys(Lf.snakeCase)}constantCase(){return this.transformKeys(e=>Lf.snakeCase(e).toUpperCase())}describe(e){const n=(e?this.resolve(e):this).clone(),r=super.describe(e);r.fields={};for(const[s,o]of Object.entries(n.fields)){var i;let a=e;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[s]})),r.fields[s]=o.describe(a)}return r}}o0.prototype=VT.prototype;const a0=({strokeWidth:t})=>g.jsxs("svg",{width:"32.000000",height:"32.000000",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[g.jsx("desc",{children:"Created with Pixso."}),g.jsx("defs",{children:g.jsx("clipPath",{id:"clip4_589",children:g.jsx("rect",{id:"x",width:"32.000000",height:"32.000000",fill:"white",fillOpacity:"0"})})}),g.jsx("rect",{id:"x",width:"32.000000",height:"32.000000",fill:"#FFFFFF",fillOpacity:"0"}),g.jsxs("g",{clipPath:"url(#clip4_589)",children:[g.jsx("path",{id:"Vector",d:"M24 8L8 24",stroke:"#121417",strokeOpacity:"1.000000",strokeWidth:t,strokeLinejoin:"round",strokeLinecap:"round"}),g.jsx("path",{id:"Vector",d:"M8 8L24 24",stroke:"#121417",strokeOpacity:"1.000000",strokeWidth:t,strokeLinejoin:"round",strokeLinecap:"round"})]})]});a0.propTypes={strokeWidth:G.string.isRequired};const HT=()=>g.jsxs("svg",{width:"20.000000",height:"20.000000",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[g.jsx("desc",{children:"Created with Pixso."}),g.jsx("defs",{children:g.jsx("clipPath",{id:"clip4_621",children:g.jsx("rect",{id:"eye-off",width:"20.000000",height:"20.000000",fill:"white",fillOpacity:"0"})})}),g.jsx("rect",{id:"eye-off",width:"20.000000",height:"20.000000",fill:"#FFFFFF",fillOpacity:"0"}),g.jsx("g",{clipPath:"url(#clip4_621)",children:g.jsx("path",{id:"Vector",d:"M14.95 14.95C13.5254 16.0358 11.7908 16.6373 10 16.6666C4.1665 16.6666 0.833252 10 0.833252 10C1.86987 8.06824 3.30762 6.38049 5.0498 5.04993M8.25 3.53333C8.82349 3.39905 9.41089 3.33191 10 3.33325C15.8333 3.33325 19.1665 10 19.1665 10C18.6606 10.9463 18.0574 11.8372 17.3667 12.6583M11.7666 11.7666C11.5376 12.0122 11.2617 12.2092 10.9551 12.3458C10.6484 12.4825 10.3174 12.556 9.98169 12.5619C9.646 12.5679 9.3125 12.5061 9.00122 12.3804C8.68994 12.2546 8.40723 12.0675 8.16968 11.8301C7.93237 11.5927 7.74536 11.3099 7.61963 10.9987C7.49365 10.6873 7.43213 10.3539 7.43799 10.0182C7.44385 9.6825 7.51733 9.35144 7.65405 9.0448C7.79053 8.73816 7.98755 8.46216 8.23315 8.23328",stroke:"#121417",strokeOpacity:"1.000000",strokeWidth:"2.000000",strokeLinejoin:"round"})})]}),GT=()=>g.jsxs("svg",{width:"20.000000",height:"20.000000",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[g.jsx("desc",{children:"Created with Pixso."}),g.jsx("defs",{children:g.jsx("clipPath",{id:"clip4_621",children:g.jsx("rect",{id:"eye-off",width:"20.000000",height:"20.000000",fill:"white",fillOpacity:"0"})})}),g.jsx("rect",{id:"eye-off",width:"20.000000",height:"20.000000",fill:"#FFFFFF",fillOpacity:"0"}),g.jsxs("g",{clipPath:"url(#clip4_621)",children:[g.jsx("path",{id:"Vector",d:"M14.95 14.95C13.5254 16.0358 11.7908 16.6373 10 16.6666C4.1665 16.6666 0.833252 10 0.833252 10C1.86987 8.06824 3.30762 6.38049 5.0498 5.04993M8.25 3.53333C8.82349 3.39905 9.41089 3.33191 10 3.33325C15.8333 3.33325 19.1665 10 19.1665 10C18.6606 10.9463 18.0574 11.8372 17.3667 12.6583M11.7666 11.7666C11.5376 12.0122 11.2617 12.2092 10.9551 12.3458C10.6484 12.4825 10.3174 12.556 9.98169 12.5619C9.646 12.5679 9.3125 12.5061 9.00122 12.3804C8.68994 12.2546 8.40723 12.0675 8.16968 11.8301C7.93237 11.5927 7.74536 11.3099 7.61963 10.9987C7.49365 10.6873 7.43213 10.3539 7.43799 10.0182C7.44385 9.6825 7.51733 9.35144 7.65405 9.0448C7.79053 8.73816 7.98755 8.46216 8.23315 8.23328",stroke:"#121417",strokeOpacity:"1.000000",strokeWidth:"2.000000",strokeLinejoin:"round"}),g.jsx("path",{id:"Vector",d:"M0.833252 0.833374L19.1665 19.1667",stroke:"#121417",strokeOpacity:"1.000000",strokeWidth:"2.000000",strokeLinejoin:"round",strokeLinecap:"round"})]})]}),j7={email:"",password:""},U7=o0().shape({email:ws().matches(/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,"Incorret email").required("Be sure to enter your email"),password:ws().min(8,"Password must contain minimum 8 symbols").max(64,"Password must contain maximum 64 symbols").required("Be sure to enter your password")}),KT=({onClose:t})=>{const[e,n]=E.useState(!1),r=Xs(),i=(o,{resetForm:a})=>{r(kC({value:o})),t(),a()},s=({name:o})=>{switch(o){case"email":return g.jsx(Go,{name:o,component:G9});case"password":return g.jsx(Go,{name:o,component:K9})}};return g.jsx(e0,{onClose:t,children:g.jsx(j9,{children:g.jsx(DT,{initialValues:j7,validationSchema:U7,onSubmit:i,children:g.jsxs(Zg,{children:[g.jsx(W9,{onClick:t,children:g.jsx(a0,{strokeWidth:"2.5"})}),g.jsx(U9,{children:"Log In"}),g.jsx(z9,{children:"Welcome back! Please enter your credentials to access your account and continue your search for an teacher."}),g.jsxs(V9,{children:[g.jsx(Z_,{type:"text",name:"email",placeholder:"Email"}),g.jsx(s,{name:"email"}),g.jsx(Z_,{type:e?"text":"password",name:"password",placeholder:"Password",marginbottom:"40px"}),g.jsx(s,{name:"password"}),g.jsx(B9,{type:"submit",children:"Log In"}),g.jsx(H9,{type:"button",onClick:()=>{n(!e)},children:e?g.jsx(HT,{}):g.jsx(GT,{})})]})]})})})})};KT.propTypes={onClose:G.func.isRequired,name:G.string};const z7=P.div`
  position: relative;
  width: 566px;
  background-color: #fff;
  padding: 64px;
  border-radius: 30px;
  background: rgb(255, 255, 255);
`,B7=P.h3`
  color: ${oe.BLACK_TEXT};
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: -0.8px;
  text-align: start;
  margin-bottom: 20px;
`,W7=P.p`
  color: ${oe.BLACK_TEXT};
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: start;
  margin-bottom: 40px;
`,Df=P(MT)`
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
    color: ${oe.BLACK_TEXT};
  }
`,V7=P.button`
  width: 438px;
  height: 60px;
  border-radius: 12px;
  background-color: ${oe.YELLOW_BUTTON};
  &:hover {
    background-color: ${oe.YELLOW_HOVER_BUTTON};
  }
  border: none;
  color: ${oe.BLACK_TEXT};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
`,H7=P.div`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  &:hover svg path {
    stroke-width: 3.5;
  }
`,G7=P.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 18px;
  margin-bottom: 40px;
`,K7=P.button`
  position: absolute;
  background: none;
  border: none;
  right: 17px;
  bottom: 17px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`,q7=P.div`
  position: absolute;
  color: red;
  font-size: 14px;
  line-height: 1.28;
  top: -16px;
`,Y7=P.div`
  position: absolute;
  color: red;
  font-size: 14px;
  line-height: 1.28;
  top: 55px;
`,Q7=P.div`
  position: absolute;
  color: red;
  font-size: 14px;
  line-height: 1.28;
  top: 128px;
`,X7={name:"",email:"",password:""},J7=o0().shape({name:ws().required("Be sure to enter your name"),email:ws().matches(/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,"Incorret email").required("Be sure to enter your email"),password:ws().min(8,"Password must contain minimum 8 symbols").max(64,"Password must contain maximum 64 symbols").required("Be sure to enter your password")}),qT=({onClose:t})=>{const[e,n]=E.useState(!1),r=Xs(),i=o=>{r(bC({value:o})),t()},s=({name:o})=>{switch(o){case"name":return g.jsx(Go,{name:o,component:q7});case"email":return g.jsx(Go,{name:o,component:Y7});case"password":return g.jsx(Go,{name:o,component:Q7})}};return g.jsx(e0,{onClose:t,children:g.jsx(z7,{children:g.jsx(DT,{initialValues:X7,validationSchema:J7,onSubmit:i,children:g.jsxs(Zg,{children:[g.jsx(H7,{onClick:t,children:g.jsx(a0,{strokeWidth:"2.5"})}),g.jsx(B7,{children:"Registration"}),g.jsxs(W7,{children:["Thank you for your interest in our platform! In order to register",g.jsx("wbr",{}),", we need some information. Please provide us with the following information"]}),g.jsxs(G7,{children:[g.jsx(Df,{type:"text",name:"name",placeholder:"Name"}),g.jsx(s,{name:"name"}),g.jsx(Df,{type:"text",name:"email",placeholder:"Email"}),g.jsx(s,{name:"email"}),g.jsx(Df,{type:e?"text":"password",name:"password",placeholder:"Password"}),g.jsx(s,{name:"password"}),g.jsx(K7,{type:"button",onClick:()=>{n(!e)},children:e?g.jsx(HT,{}):g.jsx(GT,{})})]}),g.jsx(V7,{type:"submit",children:"Log In"})]})})})})};qT.propTypes={onClose:G.func.isRequired,name:G.string};const YT=({namePopUp:t,onClose:e})=>{switch(t){case"login":return g.jsx(KT,{onClose:e});case"signin":return g.jsx(qT,{onClose:e})}return g.jsx(g.Fragment,{})};YT.propTypes={namePopUp:G.string.isRequired,onClose:G.func.isRequired};const Z7=({children:t})=>{const e=Bc(),n=e.isLoggedIn,r=e.isLoggedIn;return!n&&!r?g.jsx(Ah,{to:"/"}):t},eU=()=>{const t=zc(Kx);return g.jsx(Zx,{children:t.map(e=>g.jsx(Fg,{...e},e.id))})},tU=P.div`
  position: relative;
  width: 1440px;
  background: rgb(248, 248, 248);
  padding: 96px 128px 96px 128px;
`,nU=()=>g.jsx(tU,{children:g.jsx(eU,{})});function rU(){const[t,e]=E.useState(""),n=Xs();return E.useEffect(()=>{n(Zl())},[n]),g.jsxs(g.Fragment,{children:[g.jsx(I2,{children:g.jsxs(xo,{path:"/",element:g.jsx(OC,{setNamePopUp:e}),children:[g.jsx(xo,{index:!0,element:g.jsx(qL,{})}),g.jsx(xo,{path:"teachers",element:g.jsx(GM,{})}),g.jsx(xo,{path:"favorites",element:g.jsx(Z7,{children:g.jsx(nU,{})})})]})}),g.jsx(YT,{namePopUp:t,onClose:()=>e("")}),g.jsx(lM,{})]})}const iU={name:null,email:null,token:null,id:null,isLoggedIn:!1,isRefreshing:!1},sU=NS({name:"auth",initialState:iU,extraReducers:t=>{t.addCase(bC.fulfilled,(e,n)=>{console.log(n.payload),e.email=n.payload.email,e.token=n.payload.accessToken,e.id=n.payload.id,e.name=n.payload.name,e.isLoggedIn=!0}).addCase(kC.fulfilled,(e,n)=>{e.email=n.payload.email,e.token=n.payload.accessToken,e.id=n.payload.id,e.name=n.payload.name,e.isLoggedIn=!0}).addCase(PC.fulfilled,e=>{e.email=null,e.token=null,e.id=null,e.name=null,e.isLoggedIn=!1}).addCase(Zl.pending,e=>{e.isRefreshing=!0}).addCase(Zl.fulfilled,(e,n)=>{e.name=n.payload.name,e.email=n.payload.email,e.token=n.payload.token,e.id=n.payload.id,e.isLoggedIn=!0,e.isRefreshing=!1}).addCase(Zl.rejected,e=>{e.isRefreshing=!1})}}),oU=sU.reducer;var l0="persist:",u0="persist/FLUSH",xd="persist/REHYDRATE",c0="persist/PAUSE",d0="persist/PERSIST",f0="persist/PURGE",h0="persist/REGISTER",aU=-1;function su(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?su=function(n){return typeof n}:su=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},su(t)}function o1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function lU(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?o1(n,!0).forEach(function(r){uU(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o1(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function uU(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function cU(t,e,n,r){r.debug;var i=lU({},n);return t&&su(t)==="object"&&Object.keys(t).forEach(function(s){s!=="_persist"&&e[s]===n[s]&&(i[s]=t[s])}),i}function dU(t){var e=t.blacklist||null,n=t.whitelist||null,r=t.transforms||[],i=t.throttle||0,s="".concat(t.keyPrefix!==void 0?t.keyPrefix:l0).concat(t.key),o=t.storage,a;t.serialize===!1?a=function(T){return T}:typeof t.serialize=="function"?a=t.serialize:a=fU;var l=t.writeFailHandler||null,u={},d={},c=[],f=null,p=null,v=function(T){Object.keys(T).forEach(function(C){m(C)&&u[C]!==T[C]&&c.indexOf(C)===-1&&c.push(C)}),Object.keys(u).forEach(function(C){T[C]===void 0&&m(C)&&c.indexOf(C)===-1&&u[C]!==void 0&&c.push(C)}),f===null&&(f=setInterval(_,i)),u=T};function _(){if(c.length===0){f&&clearInterval(f),f=null;return}var w=c.shift(),T=r.reduce(function(C,x){return x.in(C,w,u)},u[w]);if(T!==void 0)try{d[w]=a(T)}catch(C){console.error("redux-persist/createPersistoid: error serializing state",C)}else delete d[w];c.length===0&&S()}function S(){Object.keys(d).forEach(function(w){u[w]===void 0&&delete d[w]}),p=o.setItem(s,a(d)).catch(h)}function m(w){return!(n&&n.indexOf(w)===-1&&w!=="_persist"||e&&e.indexOf(w)!==-1)}function h(w){l&&l(w)}var y=function(){for(;c.length!==0;)_();return p||Promise.resolve()};return{update:v,flush:y}}function fU(t){return JSON.stringify(t)}function hU(t){var e=t.transforms||[],n="".concat(t.keyPrefix!==void 0?t.keyPrefix:l0).concat(t.key),r=t.storage;t.debug;var i;return t.deserialize===!1?i=function(o){return o}:typeof t.deserialize=="function"?i=t.deserialize:i=pU,r.getItem(n).then(function(s){if(s)try{var o={},a=i(s);return Object.keys(a).forEach(function(l){o[l]=e.reduceRight(function(u,d){return d.out(u,l,a)},i(a[l]))}),o}catch(l){throw l}else return})}function pU(t){return JSON.parse(t)}function mU(t){var e=t.storage,n="".concat(t.keyPrefix!==void 0?t.keyPrefix:l0).concat(t.key);return e.removeItem(n,gU)}function gU(t){}function a1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Tn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?a1(n,!0).forEach(function(r){yU(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a1(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function yU(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function vU(t,e){if(t==null)return{};var n=_U(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function _U(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var wU=5e3;function l1(t,e){var n=t.version!==void 0?t.version:aU;t.debug;var r=t.stateReconciler===void 0?cU:t.stateReconciler,i=t.getStoredState||hU,s=t.timeout!==void 0?t.timeout:wU,o=null,a=!1,l=!0,u=function(c){return c._persist.rehydrated&&o&&!l&&o.update(c),c};return function(d,c){var f=d||{},p=f._persist,v=vU(f,["_persist"]),_=v;if(c.type===d0){var S=!1,m=function(b,L){S||(c.rehydrate(t.key,b,L),S=!0)};if(s&&setTimeout(function(){!S&&m(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(t.key,'"')))},s),l=!1,o||(o=dU(t)),p)return Tn({},e(_,c),{_persist:p});if(typeof c.rehydrate!="function"||typeof c.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return c.register(t.key),i(t).then(function(x){var b=t.migrate||function(L,F){return Promise.resolve(L)};b(x,n).then(function(L){m(L)},function(L){m(void 0,L)})},function(x){m(void 0,x)}),Tn({},e(_,c),{_persist:{version:n,rehydrated:!1}})}else{if(c.type===f0)return a=!0,c.result(mU(t)),Tn({},e(_,c),{_persist:p});if(c.type===u0)return c.result(o&&o.flush()),Tn({},e(_,c),{_persist:p});if(c.type===c0)l=!0;else if(c.type===xd){if(a)return Tn({},_,{_persist:Tn({},p,{rehydrated:!0})});if(c.key===t.key){var h=e(_,c),y=c.payload,w=r!==!1&&y!==void 0?r(y,d,h,t):h,T=Tn({},w,{_persist:Tn({},p,{rehydrated:!0})});return u(T)}}}if(!p)return e(d,c);var C=e(_,c);return C===_?d:u(Tn({},C,{_persist:p}))}}function u1(t){return CU(t)||SU(t)||EU()}function EU(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function SU(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function CU(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function c1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Op(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?c1(n,!0).forEach(function(r){xU(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c1(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function xU(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var QT={registry:[],bootstrapped:!1},TU=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:QT,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case h0:return Op({},e,{registry:[].concat(u1(e.registry),[n.key])});case xd:var r=e.registry.indexOf(n.key),i=u1(e.registry);return i.splice(r,1),Op({},e,{registry:i,bootstrapped:i.length===0});default:return e}};function IU(t,e,n){var r=n||!1,i=Bm(TU,QT,e&&e.enhancer?e.enhancer:void 0),s=function(u){i.dispatch({type:h0,key:u})},o=function(u,d,c){var f={type:xd,payload:d,err:c,key:u};t.dispatch(f),i.dispatch(f),r&&a.getState().bootstrapped&&(r(),r=!1)},a=Op({},i,{purge:function(){var u=[];return t.dispatch({type:f0,result:function(c){u.push(c)}}),Promise.all(u)},flush:function(){var u=[];return t.dispatch({type:u0,result:function(c){u.push(c)}}),Promise.all(u)},pause:function(){t.dispatch({type:c0})},persist:function(){t.dispatch({type:d0,register:s,rehydrate:o})}});return e&&e.manualPersist||a.persist(),a}var p0={},m0={};m0.__esModule=!0;m0.default=PU;function ou(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ou=function(n){return typeof n}:ou=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ou(t)}function Mf(){}var bU={getItem:Mf,setItem:Mf,removeItem:Mf};function kU(t){if((typeof self>"u"?"undefined":ou(self))!=="object"||!(t in self))return!1;try{var e=self[t],n="redux-persist ".concat(t," test");e.setItem(n,"test"),e.getItem(n),e.removeItem(n)}catch{return!1}return!0}function PU(t){var e="".concat(t,"Storage");return kU(e)?self[e]:bU}p0.__esModule=!0;p0.default=NU;var RU=OU(m0);function OU(t){return t&&t.__esModule?t:{default:t}}function NU(t){var e=(0,RU.default)(t);return{getItem:function(r){return new Promise(function(i,s){i(e.getItem(r))})},setItem:function(r,i){return new Promise(function(s,o){s(e.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,s){i(e.removeItem(r))})}}}var g0=void 0,AU=LU(p0);function LU(t){return t&&t.__esModule?t:{default:t}}var DU=(0,AU.default)("local");g0=DU;const MU={key:"auth",storage:g0,whitelist:["token"]},FU={key:"teachers",storage:g0,blacklist:["teachersCard"]},$U=yS({auth:l1(MU,oU),teachers:l1(FU,BM)}),XT=uO({reducer:$U,middleware:t=>t({serializableCheck:{ignoredActions:[u0,xd,c0,d0,f0,h0]}})}),jU=IU(XT);function au(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?au=function(n){return typeof n}:au=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},au(t)}function UU(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d1(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function zU(t,e,n){return e&&d1(t.prototype,e),n&&d1(t,n),t}function BU(t,e){return e&&(au(e)==="object"||typeof e=="function")?e:lu(t)}function Np(t){return Np=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Np(t)}function lu(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function WU(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Ap(t,e)}function Ap(t,e){return Ap=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Ap(t,e)}function uu(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var JT=function(t){WU(e,t);function e(){var n,r;UU(this,e);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=BU(this,(n=Np(e)).call.apply(n,[this].concat(s))),uu(lu(r),"state",{bootstrapped:!1}),uu(lu(r),"_unsubscribe",void 0),uu(lu(r),"handlePersistorState",function(){var a=r.props.persistor,l=a.getState(),u=l.bootstrapped;u&&(r.props.onBeforeLift?Promise.resolve(r.props.onBeforeLift()).finally(function(){return r.setState({bootstrapped:!0})}):r.setState({bootstrapped:!0}),r._unsubscribe&&r._unsubscribe())}),r}return zU(e,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),e}(E.PureComponent);uu(JT,"defaultProps",{children:null,loading:null});$f.createRoot(document.getElementById("root")).render(g.jsx(yn.StrictMode,{children:g.jsx(JT,{loading:null,persistor:jU,children:g.jsx(L2,{basename:"/Learn-Lingo/",children:g.jsx(xR,{store:XT,children:g.jsx(MM,{children:g.jsx(rU,{})})})})})}))});export default VU();
