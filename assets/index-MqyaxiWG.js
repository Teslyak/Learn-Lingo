var zT=Object.defineProperty;var BT=(t,e,n)=>e in t?zT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var WT=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var pd=(t,e,n)=>(BT(t,typeof e!="symbol"?e+"":e,n),n);var b7=WT((St,Ct)=>{function VT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Fs(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var q_={exports:{}},rc={},Y_={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ia=Symbol.for("react.element"),HT=Symbol.for("react.portal"),GT=Symbol.for("react.fragment"),KT=Symbol.for("react.strict_mode"),qT=Symbol.for("react.profiler"),YT=Symbol.for("react.provider"),QT=Symbol.for("react.context"),XT=Symbol.for("react.forward_ref"),JT=Symbol.for("react.suspense"),ZT=Symbol.for("react.memo"),eI=Symbol.for("react.lazy"),ry=Symbol.iterator;function tI(t){return t===null||typeof t!="object"?null:(t=ry&&t[ry]||t["@@iterator"],typeof t=="function"?t:null)}var Q_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X_=Object.assign,J_={};function js(t,e,n){this.props=t,this.context=e,this.refs=J_,this.updater=n||Q_}js.prototype.isReactComponent={};js.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};js.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Z_(){}Z_.prototype=js.prototype;function yp(t,e,n){this.props=t,this.context=e,this.refs=J_,this.updater=n||Q_}var vp=yp.prototype=new Z_;vp.constructor=yp;X_(vp,js.prototype);vp.isPureReactComponent=!0;var iy=Array.isArray,e1=Object.prototype.hasOwnProperty,_p={current:null},t1={key:!0,ref:!0,__self:!0,__source:!0};function n1(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)e1.call(e,r)&&!t1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ia,type:t,key:s,ref:o,props:i,_owner:_p.current}}function nI(t,e){return{$$typeof:Ia,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function wp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ia}function rI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var sy=/\/+/g;function md(t,e){return typeof t=="object"&&t!==null&&t.key!=null?rI(""+t.key):e.toString(36)}function xl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ia:case HT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+md(o,0):r,iy(i)?(n="",t!=null&&(n=t.replace(sy,"$&/")+"/"),xl(i,e,n,"",function(u){return u})):i!=null&&(wp(i)&&(i=nI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(sy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",iy(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+md(s,a);o+=xl(s,e,n,l,i)}else if(l=tI(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+md(s,a++),o+=xl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ya(t,e,n){if(t==null)return t;var r=[],i=0;return xl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function iI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rt={current:null},Tl={transition:null},sI={ReactCurrentDispatcher:rt,ReactCurrentBatchConfig:Tl,ReactCurrentOwner:_p};q.Children={map:Ya,forEach:function(t,e,n){Ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ya(t,function(){e++}),e},toArray:function(t){return Ya(t,function(e){return e})||[]},only:function(t){if(!wp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};q.Component=js;q.Fragment=GT;q.Profiler=qT;q.PureComponent=yp;q.StrictMode=KT;q.Suspense=JT;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sI;q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=X_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=_p.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)e1.call(e,l)&&!t1.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ia,type:t.type,key:i,ref:s,props:r,_owner:o}};q.createContext=function(t){return t={$$typeof:QT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:YT,_context:t},t.Consumer=t};q.createElement=n1;q.createFactory=function(t){var e=n1.bind(null,t);return e.type=t,e};q.createRef=function(){return{current:null}};q.forwardRef=function(t){return{$$typeof:XT,render:t}};q.isValidElement=wp;q.lazy=function(t){return{$$typeof:eI,_payload:{_status:-1,_result:t},_init:iI}};q.memo=function(t,e){return{$$typeof:ZT,type:t,compare:e===void 0?null:e}};q.startTransition=function(t){var e=Tl.transition;Tl.transition={};try{t()}finally{Tl.transition=e}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(t,e){return rt.current.useCallback(t,e)};q.useContext=function(t){return rt.current.useContext(t)};q.useDebugValue=function(){};q.useDeferredValue=function(t){return rt.current.useDeferredValue(t)};q.useEffect=function(t,e){return rt.current.useEffect(t,e)};q.useId=function(){return rt.current.useId()};q.useImperativeHandle=function(t,e,n){return rt.current.useImperativeHandle(t,e,n)};q.useInsertionEffect=function(t,e){return rt.current.useInsertionEffect(t,e)};q.useLayoutEffect=function(t,e){return rt.current.useLayoutEffect(t,e)};q.useMemo=function(t,e){return rt.current.useMemo(t,e)};q.useReducer=function(t,e,n){return rt.current.useReducer(t,e,n)};q.useRef=function(t){return rt.current.useRef(t)};q.useState=function(t){return rt.current.useState(t)};q.useSyncExternalStore=function(t,e,n){return rt.current.useSyncExternalStore(t,e,n)};q.useTransition=function(){return rt.current.useTransition()};q.version="18.2.0";Y_.exports=q;var C=Y_.exports;const gn=Fs(C),Cf=VT({__proto__:null,default:gn},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oI=C,aI=Symbol.for("react.element"),lI=Symbol.for("react.fragment"),uI=Object.prototype.hasOwnProperty,cI=oI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dI={key:!0,ref:!0,__self:!0,__source:!0};function r1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)uI.call(e,r)&&!dI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:aI,type:t,key:s,ref:o,props:i,_owner:cI.current}}rc.Fragment=lI;rc.jsx=r1;rc.jsxs=r1;q_.exports=rc;var g=q_.exports,xf={},i1={exports:{}},Pt={},s1={exports:{}},o1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,M){var U=O.length;O.push(M);e:for(;0<U;){var J=U-1>>>1,Q=O[J];if(0<i(Q,M))O[J]=M,O[U]=Q,U=J;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var M=O[0],U=O.pop();if(U!==M){O[0]=U;e:for(var J=0,Q=O.length,nn=Q>>>1;J<nn;){var Je=2*(J+1)-1,Ze=O[Je],He=Je+1,yt=O[He];if(0>i(Ze,U))He<Q&&0>i(yt,Ze)?(O[J]=yt,O[He]=U,J=He):(O[J]=Ze,O[Je]=U,J=Je);else if(He<Q&&0>i(yt,U))O[J]=yt,O[He]=U,J=He;else break e}}return M}function i(O,M){var U=O.sortIndex-M.sortIndex;return U!==0?U:O.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,c=null,f=3,p=!1,v=!1,_=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(O){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=O)r(u),M.sortIndex=M.expirationTime,e(l,M);else break;M=n(u)}}function w(O){if(_=!1,y(O),!v)if(n(l)!==null)v=!0,Wr(T);else{var M=n(u);M!==null&&wn(w,M.startTime-O)}}function T(O,M){v=!1,_&&(_=!1,m(k),k=-1),p=!0;var U=f;try{for(y(M),c=n(l);c!==null&&(!(c.expirationTime>M)||O&&!B());){var J=c.callback;if(typeof J=="function"){c.callback=null,f=c.priorityLevel;var Q=J(c.expirationTime<=M);M=t.unstable_now(),typeof Q=="function"?c.callback=Q:c===n(l)&&r(l),y(M)}else r(l);c=n(l)}if(c!==null)var nn=!0;else{var Je=n(u);Je!==null&&wn(w,Je.startTime-M),nn=!1}return nn}finally{c=null,f=U,p=!1}}var S=!1,x=null,k=-1,L=5,F=-1;function B(){return!(t.unstable_now()-F<L)}function Nt(){if(x!==null){var O=t.unstable_now();F=O;var M=!0;try{M=x(!0,O)}finally{M?ae():(S=!1,x=null)}}else S=!1}var ae;if(typeof h=="function")ae=function(){h(Nt)};else if(typeof MessageChannel<"u"){var gt=new MessageChannel,_n=gt.port2;gt.port1.onmessage=Nt,ae=function(){_n.postMessage(null)}}else ae=function(){E(Nt,0)};function Wr(O){x=O,S||(S=!0,ae())}function wn(O,M){k=E(function(){O(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,Wr(T))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(f){case 1:case 2:case 3:var M=3;break;default:M=f}var U=f;f=M;try{return O()}finally{f=U}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,M){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var U=f;f=O;try{return M()}finally{f=U}},t.unstable_scheduleCallback=function(O,M,U){var J=t.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?J+U:J):U=J,O){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=U+Q,O={id:d++,callback:M,priorityLevel:O,startTime:U,expirationTime:Q,sortIndex:-1},U>J?(O.sortIndex=U,e(u,O),n(l)===null&&O===n(u)&&(_?(m(k),k=-1):_=!0,wn(w,U-J))):(O.sortIndex=Q,e(l,O),v||p||(v=!0,Wr(T))),O},t.unstable_shouldYield=B,t.unstable_wrapCallback=function(O){var M=f;return function(){var U=f;f=M;try{return O.apply(this,arguments)}finally{f=U}}}})(o1);s1.exports=o1;var fI=s1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a1=C,It=fI;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l1=new Set,zo={};function Ti(t,e){ms(t,e),ms(t+"Capture",e)}function ms(t,e){for(zo[t]=e,t=0;t<e.length;t++)l1.add(e[t])}var Dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tf=Object.prototype.hasOwnProperty,hI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,oy={},ay={};function pI(t){return Tf.call(ay,t)?!0:Tf.call(oy,t)?!1:hI.test(t)?ay[t]=!0:(oy[t]=!0,!1)}function mI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function gI(t,e,n,r){if(e===null||typeof e>"u"||mI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function it(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ve[t]=new it(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ve[e]=new it(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ve[t]=new it(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ve[t]=new it(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ve[t]=new it(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ve[t]=new it(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ve[t]=new it(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ve[t]=new it(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ve[t]=new it(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ep=/[\-:]([a-z])/g;function Sp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ep,Sp);Ve[e]=new it(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ep,Sp);Ve[e]=new it(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ep,Sp);Ve[e]=new it(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ve[t]=new it(t,1,!1,t.toLowerCase(),null,!1,!1)});Ve.xlinkHref=new it("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ve[t]=new it(t,1,!1,t.toLowerCase(),null,!0,!0)});function Cp(t,e,n,r){var i=Ve.hasOwnProperty(e)?Ve[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(gI(e,n,i,r)&&(n=null),r||i===null?pI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Bn=a1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qa=Symbol.for("react.element"),Ui=Symbol.for("react.portal"),zi=Symbol.for("react.fragment"),xp=Symbol.for("react.strict_mode"),If=Symbol.for("react.profiler"),u1=Symbol.for("react.provider"),c1=Symbol.for("react.context"),Tp=Symbol.for("react.forward_ref"),kf=Symbol.for("react.suspense"),bf=Symbol.for("react.suspense_list"),Ip=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),d1=Symbol.for("react.offscreen"),ly=Symbol.iterator;function Zs(t){return t===null||typeof t!="object"?null:(t=ly&&t[ly]||t["@@iterator"],typeof t=="function"?t:null)}var Se=Object.assign,gd;function po(t){if(gd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);gd=e&&e[1]||""}return`
`+gd+t}var yd=!1;function vd(t,e){if(!t||yd)return"";yd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{yd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?po(t):""}function yI(t){switch(t.tag){case 5:return po(t.type);case 16:return po("Lazy");case 13:return po("Suspense");case 19:return po("SuspenseList");case 0:case 2:case 15:return t=vd(t.type,!1),t;case 11:return t=vd(t.type.render,!1),t;case 1:return t=vd(t.type,!0),t;default:return""}}function Pf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case zi:return"Fragment";case Ui:return"Portal";case If:return"Profiler";case xp:return"StrictMode";case kf:return"Suspense";case bf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case c1:return(t.displayName||"Context")+".Consumer";case u1:return(t._context.displayName||"Context")+".Provider";case Tp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ip:return e=t.displayName||null,e!==null?e:Pf(t.type)||"Memo";case er:e=t._payload,t=t._init;try{return Pf(t(e))}catch{}}return null}function vI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pf(e);case 8:return e===xp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function br(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function f1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _I(t){var e=f1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xa(t){t._valueTracker||(t._valueTracker=_I(t))}function h1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=f1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Zl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Rf(t,e){var n=e.checked;return Se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function uy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=br(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function p1(t,e){e=e.checked,e!=null&&Cp(t,"checked",e,!1)}function Of(t,e){p1(t,e);var n=br(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Nf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Nf(t,e.type,br(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function cy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Nf(t,e,n){(e!=="number"||Zl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var mo=Array.isArray;function rs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+br(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Af(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return Se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function dy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(mo(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:br(n)}}function m1(t,e){var n=br(e.value),r=br(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function fy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function g1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?g1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ja,y1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ja=Ja||document.createElement("div"),Ja.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ja.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Bo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wI=["Webkit","ms","Moz","O"];Object.keys(Co).forEach(function(t){wI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Co[e]=Co[t]})});function v1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Co.hasOwnProperty(t)&&Co[t]?(""+e).trim():e+"px"}function _1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=v1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var EI=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Df(t,e){if(e){if(EI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function Mf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ff=null;function kp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var jf=null,is=null,ss=null;function hy(t){if(t=Pa(t)){if(typeof jf!="function")throw Error(b(280));var e=t.stateNode;e&&(e=lc(e),jf(t.stateNode,t.type,e))}}function w1(t){is?ss?ss.push(t):ss=[t]:is=t}function E1(){if(is){var t=is,e=ss;if(ss=is=null,hy(t),e)for(t=0;t<e.length;t++)hy(e[t])}}function S1(t,e){return t(e)}function C1(){}var _d=!1;function x1(t,e,n){if(_d)return t(e,n);_d=!0;try{return S1(t,e,n)}finally{_d=!1,(is!==null||ss!==null)&&(C1(),E1())}}function Wo(t,e){var n=t.stateNode;if(n===null)return null;var r=lc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var $f=!1;if(Dn)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){$f=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{$f=!1}function SI(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var xo=!1,eu=null,tu=!1,Uf=null,CI={onError:function(t){xo=!0,eu=t}};function xI(t,e,n,r,i,s,o,a,l){xo=!1,eu=null,SI.apply(CI,arguments)}function TI(t,e,n,r,i,s,o,a,l){if(xI.apply(this,arguments),xo){if(xo){var u=eu;xo=!1,eu=null}else throw Error(b(198));tu||(tu=!0,Uf=u)}}function Ii(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function T1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function py(t){if(Ii(t)!==t)throw Error(b(188))}function II(t){var e=t.alternate;if(!e){if(e=Ii(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return py(i),t;if(s===r)return py(i),e;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function I1(t){return t=II(t),t!==null?k1(t):null}function k1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=k1(t);if(e!==null)return e;t=t.sibling}return null}var b1=It.unstable_scheduleCallback,my=It.unstable_cancelCallback,kI=It.unstable_shouldYield,bI=It.unstable_requestPaint,Te=It.unstable_now,PI=It.unstable_getCurrentPriorityLevel,bp=It.unstable_ImmediatePriority,P1=It.unstable_UserBlockingPriority,nu=It.unstable_NormalPriority,RI=It.unstable_LowPriority,R1=It.unstable_IdlePriority,ic=null,dn=null;function OI(t){if(dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(ic,t,void 0,(t.current.flags&128)===128)}catch{}}var Qt=Math.clz32?Math.clz32:LI,NI=Math.log,AI=Math.LN2;function LI(t){return t>>>=0,t===0?32:31-(NI(t)/AI|0)|0}var Za=64,el=4194304;function go(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ru(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=go(a):(s&=o,s!==0&&(r=go(s)))}else o=n&~i,o!==0?r=go(o):s!==0&&(r=go(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Qt(e),i=1<<n,r|=t[n],e&=~i;return r}function DI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function MI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Qt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=DI(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function zf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function O1(){var t=Za;return Za<<=1,!(Za&4194240)&&(Za=64),t}function wd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ka(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qt(e),t[e]=n}function FI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Qt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Pp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Qt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var re=0;function N1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var A1,Rp,L1,D1,M1,Bf=!1,tl=[],hr=null,pr=null,mr=null,Vo=new Map,Ho=new Map,rr=[],jI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gy(t,e){switch(t){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":Vo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(e.pointerId)}}function to(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Pa(e),e!==null&&Rp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function $I(t,e,n,r,i){switch(e){case"focusin":return hr=to(hr,t,e,n,r,i),!0;case"dragenter":return pr=to(pr,t,e,n,r,i),!0;case"mouseover":return mr=to(mr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Vo.set(s,to(Vo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ho.set(s,to(Ho.get(s)||null,t,e,n,r,i)),!0}return!1}function F1(t){var e=Xr(t.target);if(e!==null){var n=Ii(e);if(n!==null){if(e=n.tag,e===13){if(e=T1(n),e!==null){t.blockedOn=e,M1(t.priority,function(){L1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Il(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Wf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ff=r,n.target.dispatchEvent(r),Ff=null}else return e=Pa(n),e!==null&&Rp(e),t.blockedOn=n,!1;e.shift()}return!0}function yy(t,e,n){Il(t)&&n.delete(e)}function UI(){Bf=!1,hr!==null&&Il(hr)&&(hr=null),pr!==null&&Il(pr)&&(pr=null),mr!==null&&Il(mr)&&(mr=null),Vo.forEach(yy),Ho.forEach(yy)}function no(t,e){t.blockedOn===e&&(t.blockedOn=null,Bf||(Bf=!0,It.unstable_scheduleCallback(It.unstable_NormalPriority,UI)))}function Go(t){function e(i){return no(i,t)}if(0<tl.length){no(tl[0],t);for(var n=1;n<tl.length;n++){var r=tl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(hr!==null&&no(hr,t),pr!==null&&no(pr,t),mr!==null&&no(mr,t),Vo.forEach(e),Ho.forEach(e),n=0;n<rr.length;n++)r=rr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<rr.length&&(n=rr[0],n.blockedOn===null);)F1(n),n.blockedOn===null&&rr.shift()}var os=Bn.ReactCurrentBatchConfig,iu=!0;function zI(t,e,n,r){var i=re,s=os.transition;os.transition=null;try{re=1,Op(t,e,n,r)}finally{re=i,os.transition=s}}function BI(t,e,n,r){var i=re,s=os.transition;os.transition=null;try{re=4,Op(t,e,n,r)}finally{re=i,os.transition=s}}function Op(t,e,n,r){if(iu){var i=Wf(t,e,n,r);if(i===null)Rd(t,e,r,su,n),gy(t,r);else if($I(i,t,e,n,r))r.stopPropagation();else if(gy(t,r),e&4&&-1<jI.indexOf(t)){for(;i!==null;){var s=Pa(i);if(s!==null&&A1(s),s=Wf(t,e,n,r),s===null&&Rd(t,e,r,su,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Rd(t,e,r,null,n)}}var su=null;function Wf(t,e,n,r){if(su=null,t=kp(r),t=Xr(t),t!==null)if(e=Ii(t),e===null)t=null;else if(n=e.tag,n===13){if(t=T1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return su=t,null}function j1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(PI()){case bp:return 1;case P1:return 4;case nu:case RI:return 16;case R1:return 536870912;default:return 16}default:return 16}}var ur=null,Np=null,kl=null;function $1(){if(kl)return kl;var t,e=Np,n=e.length,r,i="value"in ur?ur.value:ur.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return kl=i.slice(t,1<r?1-r:void 0)}function bl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function nl(){return!0}function vy(){return!1}function Rt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?nl:vy,this.isPropagationStopped=vy,this}return Se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),e}var $s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ap=Rt($s),ba=Se({},$s,{view:0,detail:0}),WI=Rt(ba),Ed,Sd,ro,sc=Se({},ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ro&&(ro&&t.type==="mousemove"?(Ed=t.screenX-ro.screenX,Sd=t.screenY-ro.screenY):Sd=Ed=0,ro=t),Ed)},movementY:function(t){return"movementY"in t?t.movementY:Sd}}),_y=Rt(sc),VI=Se({},sc,{dataTransfer:0}),HI=Rt(VI),GI=Se({},ba,{relatedTarget:0}),Cd=Rt(GI),KI=Se({},$s,{animationName:0,elapsedTime:0,pseudoElement:0}),qI=Rt(KI),YI=Se({},$s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),QI=Rt(YI),XI=Se({},$s,{data:0}),wy=Rt(XI),JI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ZI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ek={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ek[t])?!!e[t]:!1}function Lp(){return tk}var nk=Se({},ba,{key:function(t){if(t.key){var e=JI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ZI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lp,charCode:function(t){return t.type==="keypress"?bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rk=Rt(nk),ik=Se({},sc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ey=Rt(ik),sk=Se({},ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lp}),ok=Rt(sk),ak=Se({},$s,{propertyName:0,elapsedTime:0,pseudoElement:0}),lk=Rt(ak),uk=Se({},sc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ck=Rt(uk),dk=[9,13,27,32],Dp=Dn&&"CompositionEvent"in window,To=null;Dn&&"documentMode"in document&&(To=document.documentMode);var fk=Dn&&"TextEvent"in window&&!To,U1=Dn&&(!Dp||To&&8<To&&11>=To),Sy=" ",Cy=!1;function z1(t,e){switch(t){case"keyup":return dk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function B1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Bi=!1;function hk(t,e){switch(t){case"compositionend":return B1(e);case"keypress":return e.which!==32?null:(Cy=!0,Sy);case"textInput":return t=e.data,t===Sy&&Cy?null:t;default:return null}}function pk(t,e){if(Bi)return t==="compositionend"||!Dp&&z1(t,e)?(t=$1(),kl=Np=ur=null,Bi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return U1&&e.locale!=="ko"?null:e.data;default:return null}}var mk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!mk[t.type]:e==="textarea"}function W1(t,e,n,r){w1(r),e=ou(e,"onChange"),0<e.length&&(n=new Ap("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Io=null,Ko=null;function gk(t){ew(t,0)}function oc(t){var e=Hi(t);if(h1(e))return t}function yk(t,e){if(t==="change")return e}var V1=!1;if(Dn){var xd;if(Dn){var Td="oninput"in document;if(!Td){var Ty=document.createElement("div");Ty.setAttribute("oninput","return;"),Td=typeof Ty.oninput=="function"}xd=Td}else xd=!1;V1=xd&&(!document.documentMode||9<document.documentMode)}function Iy(){Io&&(Io.detachEvent("onpropertychange",H1),Ko=Io=null)}function H1(t){if(t.propertyName==="value"&&oc(Ko)){var e=[];W1(e,Ko,t,kp(t)),x1(gk,e)}}function vk(t,e,n){t==="focusin"?(Iy(),Io=e,Ko=n,Io.attachEvent("onpropertychange",H1)):t==="focusout"&&Iy()}function _k(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return oc(Ko)}function wk(t,e){if(t==="click")return oc(e)}function Ek(t,e){if(t==="input"||t==="change")return oc(e)}function Sk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var en=typeof Object.is=="function"?Object.is:Sk;function qo(t,e){if(en(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Tf.call(e,i)||!en(t[i],e[i]))return!1}return!0}function ky(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function by(t,e){var n=ky(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ky(n)}}function G1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?G1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function K1(){for(var t=window,e=Zl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Zl(t.document)}return e}function Mp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ck(t){var e=K1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&G1(n.ownerDocument.documentElement,n)){if(r!==null&&Mp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=by(n,s);var o=by(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var xk=Dn&&"documentMode"in document&&11>=document.documentMode,Wi=null,Vf=null,ko=null,Hf=!1;function Py(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hf||Wi==null||Wi!==Zl(r)||(r=Wi,"selectionStart"in r&&Mp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ko&&qo(ko,r)||(ko=r,r=ou(Vf,"onSelect"),0<r.length&&(e=new Ap("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Wi)))}function rl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Vi={animationend:rl("Animation","AnimationEnd"),animationiteration:rl("Animation","AnimationIteration"),animationstart:rl("Animation","AnimationStart"),transitionend:rl("Transition","TransitionEnd")},Id={},q1={};Dn&&(q1=document.createElement("div").style,"AnimationEvent"in window||(delete Vi.animationend.animation,delete Vi.animationiteration.animation,delete Vi.animationstart.animation),"TransitionEvent"in window||delete Vi.transitionend.transition);function ac(t){if(Id[t])return Id[t];if(!Vi[t])return t;var e=Vi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in q1)return Id[t]=e[n];return t}var Y1=ac("animationend"),Q1=ac("animationiteration"),X1=ac("animationstart"),J1=ac("transitionend"),Z1=new Map,Ry="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(t,e){Z1.set(t,e),Ti(e,[t])}for(var kd=0;kd<Ry.length;kd++){var bd=Ry[kd],Tk=bd.toLowerCase(),Ik=bd[0].toUpperCase()+bd.slice(1);Mr(Tk,"on"+Ik)}Mr(Y1,"onAnimationEnd");Mr(Q1,"onAnimationIteration");Mr(X1,"onAnimationStart");Mr("dblclick","onDoubleClick");Mr("focusin","onFocus");Mr("focusout","onBlur");Mr(J1,"onTransitionEnd");ms("onMouseEnter",["mouseout","mouseover"]);ms("onMouseLeave",["mouseout","mouseover"]);ms("onPointerEnter",["pointerout","pointerover"]);ms("onPointerLeave",["pointerout","pointerover"]);Ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kk=new Set("cancel close invalid load scroll toggle".split(" ").concat(yo));function Oy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,TI(r,e,void 0,t),t.currentTarget=null}function ew(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Oy(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Oy(i,a,u),s=l}}}if(tu)throw t=Uf,tu=!1,Uf=null,t}function de(t,e){var n=e[Qf];n===void 0&&(n=e[Qf]=new Set);var r=t+"__bubble";n.has(r)||(tw(e,t,2,!1),n.add(r))}function Pd(t,e,n){var r=0;e&&(r|=4),tw(n,t,r,e)}var il="_reactListening"+Math.random().toString(36).slice(2);function Yo(t){if(!t[il]){t[il]=!0,l1.forEach(function(n){n!=="selectionchange"&&(kk.has(n)||Pd(n,!1,t),Pd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[il]||(e[il]=!0,Pd("selectionchange",!1,e))}}function tw(t,e,n,r){switch(j1(e)){case 1:var i=zI;break;case 4:i=BI;break;default:i=Op}n=i.bind(null,e,n,t),i=void 0,!$f||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Rd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Xr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}x1(function(){var u=s,d=kp(n),c=[];e:{var f=Z1.get(t);if(f!==void 0){var p=Ap,v=t;switch(t){case"keypress":if(bl(n)===0)break e;case"keydown":case"keyup":p=rk;break;case"focusin":v="focus",p=Cd;break;case"focusout":v="blur",p=Cd;break;case"beforeblur":case"afterblur":p=Cd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=_y;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=HI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=ok;break;case Y1:case Q1:case X1:p=qI;break;case J1:p=lk;break;case"scroll":p=WI;break;case"wheel":p=ck;break;case"copy":case"cut":case"paste":p=QI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Ey}var _=(e&4)!==0,E=!_&&t==="scroll",m=_?f!==null?f+"Capture":null:f;_=[];for(var h=u,y;h!==null;){y=h;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,m!==null&&(w=Wo(h,m),w!=null&&_.push(Qo(h,w,y)))),E)break;h=h.return}0<_.length&&(f=new p(f,v,null,n,d),c.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Ff&&(v=n.relatedTarget||n.fromElement)&&(Xr(v)||v[Mn]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?Xr(v):null,v!==null&&(E=Ii(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(_=_y,w="onMouseLeave",m="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(_=Ey,w="onPointerLeave",m="onPointerEnter",h="pointer"),E=p==null?f:Hi(p),y=v==null?f:Hi(v),f=new _(w,h+"leave",p,n,d),f.target=E,f.relatedTarget=y,w=null,Xr(d)===u&&(_=new _(m,h+"enter",v,n,d),_.target=y,_.relatedTarget=E,w=_),E=w,p&&v)t:{for(_=p,m=v,h=0,y=_;y;y=Mi(y))h++;for(y=0,w=m;w;w=Mi(w))y++;for(;0<h-y;)_=Mi(_),h--;for(;0<y-h;)m=Mi(m),y--;for(;h--;){if(_===m||m!==null&&_===m.alternate)break t;_=Mi(_),m=Mi(m)}_=null}else _=null;p!==null&&Ny(c,f,p,_,!1),v!==null&&E!==null&&Ny(c,E,v,_,!0)}}e:{if(f=u?Hi(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=yk;else if(xy(f))if(V1)T=Ek;else{T=_k;var S=vk}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=wk);if(T&&(T=T(t,u))){W1(c,T,n,d);break e}S&&S(t,f,u),t==="focusout"&&(S=f._wrapperState)&&S.controlled&&f.type==="number"&&Nf(f,"number",f.value)}switch(S=u?Hi(u):window,t){case"focusin":(xy(S)||S.contentEditable==="true")&&(Wi=S,Vf=u,ko=null);break;case"focusout":ko=Vf=Wi=null;break;case"mousedown":Hf=!0;break;case"contextmenu":case"mouseup":case"dragend":Hf=!1,Py(c,n,d);break;case"selectionchange":if(xk)break;case"keydown":case"keyup":Py(c,n,d)}var x;if(Dp)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Bi?z1(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(U1&&n.locale!=="ko"&&(Bi||k!=="onCompositionStart"?k==="onCompositionEnd"&&Bi&&(x=$1()):(ur=d,Np="value"in ur?ur.value:ur.textContent,Bi=!0)),S=ou(u,k),0<S.length&&(k=new wy(k,t,null,n,d),c.push({event:k,listeners:S}),x?k.data=x:(x=B1(n),x!==null&&(k.data=x)))),(x=fk?hk(t,n):pk(t,n))&&(u=ou(u,"onBeforeInput"),0<u.length&&(d=new wy("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=x))}ew(c,e)})}function Qo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ou(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Wo(t,n),s!=null&&r.unshift(Qo(t,s,i)),s=Wo(t,e),s!=null&&r.push(Qo(t,s,i))),t=t.return}return r}function Mi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ny(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Wo(n,s),l!=null&&o.unshift(Qo(n,l,a))):i||(l=Wo(n,s),l!=null&&o.push(Qo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var bk=/\r\n?/g,Pk=/\u0000|\uFFFD/g;function Ay(t){return(typeof t=="string"?t:""+t).replace(bk,`
`).replace(Pk,"")}function sl(t,e,n){if(e=Ay(e),Ay(t)!==e&&n)throw Error(b(425))}function au(){}var Gf=null,Kf=null;function qf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yf=typeof setTimeout=="function"?setTimeout:void 0,Rk=typeof clearTimeout=="function"?clearTimeout:void 0,Ly=typeof Promise=="function"?Promise:void 0,Ok=typeof queueMicrotask=="function"?queueMicrotask:typeof Ly<"u"?function(t){return Ly.resolve(null).then(t).catch(Nk)}:Yf;function Nk(t){setTimeout(function(){throw t})}function Od(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Go(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Go(e)}function gr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Dy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Us=Math.random().toString(36).slice(2),cn="__reactFiber$"+Us,Xo="__reactProps$"+Us,Mn="__reactContainer$"+Us,Qf="__reactEvents$"+Us,Ak="__reactListeners$"+Us,Lk="__reactHandles$"+Us;function Xr(t){var e=t[cn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mn]||n[cn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dy(t);t!==null;){if(n=t[cn])return n;t=Dy(t)}return e}t=n,n=t.parentNode}return null}function Pa(t){return t=t[cn]||t[Mn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Hi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function lc(t){return t[Xo]||null}var Xf=[],Gi=-1;function Fr(t){return{current:t}}function me(t){0>Gi||(t.current=Xf[Gi],Xf[Gi]=null,Gi--)}function ce(t,e){Gi++,Xf[Gi]=t.current,t.current=e}var Pr={},Qe=Fr(Pr),ct=Fr(!1),ci=Pr;function gs(t,e){var n=t.type.contextTypes;if(!n)return Pr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function dt(t){return t=t.childContextTypes,t!=null}function lu(){me(ct),me(Qe)}function My(t,e,n){if(Qe.current!==Pr)throw Error(b(168));ce(Qe,e),ce(ct,n)}function nw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(b(108,vI(t)||"Unknown",i));return Se({},n,r)}function uu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Pr,ci=Qe.current,ce(Qe,t),ce(ct,ct.current),!0}function Fy(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=nw(t,e,ci),r.__reactInternalMemoizedMergedChildContext=t,me(ct),me(Qe),ce(Qe,t)):me(ct),ce(ct,n)}var In=null,uc=!1,Nd=!1;function rw(t){In===null?In=[t]:In.push(t)}function Dk(t){uc=!0,rw(t)}function jr(){if(!Nd&&In!==null){Nd=!0;var t=0,e=re;try{var n=In;for(re=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}In=null,uc=!1}catch(i){throw In!==null&&(In=In.slice(t+1)),b1(bp,jr),i}finally{re=e,Nd=!1}}return null}var Ki=[],qi=0,cu=null,du=0,Lt=[],Dt=0,di=null,kn=1,bn="";function Hr(t,e){Ki[qi++]=du,Ki[qi++]=cu,cu=t,du=e}function iw(t,e,n){Lt[Dt++]=kn,Lt[Dt++]=bn,Lt[Dt++]=di,di=t;var r=kn;t=bn;var i=32-Qt(r)-1;r&=~(1<<i),n+=1;var s=32-Qt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,kn=1<<32-Qt(e)+i|n<<i|r,bn=s+t}else kn=1<<s|n<<i|r,bn=t}function Fp(t){t.return!==null&&(Hr(t,1),iw(t,1,0))}function jp(t){for(;t===cu;)cu=Ki[--qi],Ki[qi]=null,du=Ki[--qi],Ki[qi]=null;for(;t===di;)di=Lt[--Dt],Lt[Dt]=null,bn=Lt[--Dt],Lt[Dt]=null,kn=Lt[--Dt],Lt[Dt]=null}var xt=null,wt=null,ve=!1,Ht=null;function sw(t,e){var n=Mt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function jy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xt=t,wt=gr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xt=t,wt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=di!==null?{id:kn,overflow:bn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Mt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xt=t,wt=null,!0):!1;default:return!1}}function Jf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Zf(t){if(ve){var e=wt;if(e){var n=e;if(!jy(t,e)){if(Jf(t))throw Error(b(418));e=gr(n.nextSibling);var r=xt;e&&jy(t,e)?sw(r,n):(t.flags=t.flags&-4097|2,ve=!1,xt=t)}}else{if(Jf(t))throw Error(b(418));t.flags=t.flags&-4097|2,ve=!1,xt=t}}}function $y(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xt=t}function ol(t){if(t!==xt)return!1;if(!ve)return $y(t),ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!qf(t.type,t.memoizedProps)),e&&(e=wt)){if(Jf(t))throw ow(),Error(b(418));for(;e;)sw(t,e),e=gr(e.nextSibling)}if($y(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wt=gr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wt=null}}else wt=xt?gr(t.stateNode.nextSibling):null;return!0}function ow(){for(var t=wt;t;)t=gr(t.nextSibling)}function ys(){wt=xt=null,ve=!1}function $p(t){Ht===null?Ht=[t]:Ht.push(t)}var Mk=Bn.ReactCurrentBatchConfig;function Wt(t,e){if(t&&t.defaultProps){e=Se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var fu=Fr(null),hu=null,Yi=null,Up=null;function zp(){Up=Yi=hu=null}function Bp(t){var e=fu.current;me(fu),t._currentValue=e}function eh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function as(t,e){hu=t,Up=Yi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(at=!0),t.firstContext=null)}function jt(t){var e=t._currentValue;if(Up!==t)if(t={context:t,memoizedValue:e,next:null},Yi===null){if(hu===null)throw Error(b(308));Yi=t,hu.dependencies={lanes:0,firstContext:t}}else Yi=Yi.next=t;return e}var Jr=null;function Wp(t){Jr===null?Jr=[t]:Jr.push(t)}function aw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Wp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Fn(t,r)}function Fn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var tr=!1;function Vp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Nn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function yr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Fn(t,n)}return i=r.interleaved,i===null?(e.next=e,Wp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Fn(t,n)}function Pl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pp(t,n)}}function Uy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pu(t,e,n,r){var i=t.updateQueue;tr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var c=i.baseState;o=0,d=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(f=e,p=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){c=v.call(p,c,f);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,f=typeof v=="function"?v.call(p,c,f):v,f==null)break e;c=Se({},c,f);break e;case 2:tr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=p,l=c):d=d.next=p,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);hi|=o,t.lanes=o,t.memoizedState=c}}function zy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var uw=new a1.Component().refs;function th(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var cc={isMounted:function(t){return(t=t._reactInternals)?Ii(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=nt(),i=_r(t),s=Nn(r,i);s.payload=e,n!=null&&(s.callback=n),e=yr(t,s,i),e!==null&&(Xt(e,t,i,r),Pl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=nt(),i=_r(t),s=Nn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=yr(t,s,i),e!==null&&(Xt(e,t,i,r),Pl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nt(),r=_r(t),i=Nn(n,r);i.tag=2,e!=null&&(i.callback=e),e=yr(t,i,r),e!==null&&(Xt(e,t,r,n),Pl(e,t,r))}};function By(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!qo(n,r)||!qo(i,s):!0}function cw(t,e,n){var r=!1,i=Pr,s=e.contextType;return typeof s=="object"&&s!==null?s=jt(s):(i=dt(e)?ci:Qe.current,r=e.contextTypes,s=(r=r!=null)?gs(t,i):Pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=cc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Wy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&cc.enqueueReplaceState(e,e.state,null)}function nh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=uw,Vp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=jt(s):(s=dt(e)?ci:Qe.current,i.context=gs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(th(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&cc.enqueueReplaceState(i,i.state,null),pu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function io(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===uw&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function al(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Vy(t){var e=t._init;return e(t._payload)}function dw(t){function e(m,h){if(t){var y=m.deletions;y===null?(m.deletions=[h],m.flags|=16):y.push(h)}}function n(m,h){if(!t)return null;for(;h!==null;)e(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=wr(m,h),m.index=0,m.sibling=null,m}function s(m,h,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<h?(m.flags|=2,h):y):(m.flags|=2,h)):(m.flags|=1048576,h)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,h,y,w){return h===null||h.tag!==6?(h=$d(y,m.mode,w),h.return=m,h):(h=i(h,y),h.return=m,h)}function l(m,h,y,w){var T=y.type;return T===zi?d(m,h,y.props.children,w,y.key):h!==null&&(h.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===er&&Vy(T)===h.type)?(w=i(h,y.props),w.ref=io(m,h,y),w.return=m,w):(w=Dl(y.type,y.key,y.props,null,m.mode,w),w.ref=io(m,h,y),w.return=m,w)}function u(m,h,y,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=Ud(y,m.mode,w),h.return=m,h):(h=i(h,y.children||[]),h.return=m,h)}function d(m,h,y,w,T){return h===null||h.tag!==7?(h=ii(y,m.mode,w,T),h.return=m,h):(h=i(h,y),h.return=m,h)}function c(m,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=$d(""+h,m.mode,y),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Qa:return y=Dl(h.type,h.key,h.props,null,m.mode,y),y.ref=io(m,null,h),y.return=m,y;case Ui:return h=Ud(h,m.mode,y),h.return=m,h;case er:var w=h._init;return c(m,w(h._payload),y)}if(mo(h)||Zs(h))return h=ii(h,m.mode,y,null),h.return=m,h;al(m,h)}return null}function f(m,h,y,w){var T=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:a(m,h,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Qa:return y.key===T?l(m,h,y,w):null;case Ui:return y.key===T?u(m,h,y,w):null;case er:return T=y._init,f(m,h,T(y._payload),w)}if(mo(y)||Zs(y))return T!==null?null:d(m,h,y,w,null);al(m,y)}return null}function p(m,h,y,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(y)||null,a(h,m,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Qa:return m=m.get(w.key===null?y:w.key)||null,l(h,m,w,T);case Ui:return m=m.get(w.key===null?y:w.key)||null,u(h,m,w,T);case er:var S=w._init;return p(m,h,y,S(w._payload),T)}if(mo(w)||Zs(w))return m=m.get(y)||null,d(h,m,w,T,null);al(h,w)}return null}function v(m,h,y,w){for(var T=null,S=null,x=h,k=h=0,L=null;x!==null&&k<y.length;k++){x.index>k?(L=x,x=null):L=x.sibling;var F=f(m,x,y[k],w);if(F===null){x===null&&(x=L);break}t&&x&&F.alternate===null&&e(m,x),h=s(F,h,k),S===null?T=F:S.sibling=F,S=F,x=L}if(k===y.length)return n(m,x),ve&&Hr(m,k),T;if(x===null){for(;k<y.length;k++)x=c(m,y[k],w),x!==null&&(h=s(x,h,k),S===null?T=x:S.sibling=x,S=x);return ve&&Hr(m,k),T}for(x=r(m,x);k<y.length;k++)L=p(x,m,k,y[k],w),L!==null&&(t&&L.alternate!==null&&x.delete(L.key===null?k:L.key),h=s(L,h,k),S===null?T=L:S.sibling=L,S=L);return t&&x.forEach(function(B){return e(m,B)}),ve&&Hr(m,k),T}function _(m,h,y,w){var T=Zs(y);if(typeof T!="function")throw Error(b(150));if(y=T.call(y),y==null)throw Error(b(151));for(var S=T=null,x=h,k=h=0,L=null,F=y.next();x!==null&&!F.done;k++,F=y.next()){x.index>k?(L=x,x=null):L=x.sibling;var B=f(m,x,F.value,w);if(B===null){x===null&&(x=L);break}t&&x&&B.alternate===null&&e(m,x),h=s(B,h,k),S===null?T=B:S.sibling=B,S=B,x=L}if(F.done)return n(m,x),ve&&Hr(m,k),T;if(x===null){for(;!F.done;k++,F=y.next())F=c(m,F.value,w),F!==null&&(h=s(F,h,k),S===null?T=F:S.sibling=F,S=F);return ve&&Hr(m,k),T}for(x=r(m,x);!F.done;k++,F=y.next())F=p(x,m,k,F.value,w),F!==null&&(t&&F.alternate!==null&&x.delete(F.key===null?k:F.key),h=s(F,h,k),S===null?T=F:S.sibling=F,S=F);return t&&x.forEach(function(Nt){return e(m,Nt)}),ve&&Hr(m,k),T}function E(m,h,y,w){if(typeof y=="object"&&y!==null&&y.type===zi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Qa:e:{for(var T=y.key,S=h;S!==null;){if(S.key===T){if(T=y.type,T===zi){if(S.tag===7){n(m,S.sibling),h=i(S,y.props.children),h.return=m,m=h;break e}}else if(S.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===er&&Vy(T)===S.type){n(m,S.sibling),h=i(S,y.props),h.ref=io(m,S,y),h.return=m,m=h;break e}n(m,S);break}else e(m,S);S=S.sibling}y.type===zi?(h=ii(y.props.children,m.mode,w,y.key),h.return=m,m=h):(w=Dl(y.type,y.key,y.props,null,m.mode,w),w.ref=io(m,h,y),w.return=m,m=w)}return o(m);case Ui:e:{for(S=y.key;h!==null;){if(h.key===S)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){n(m,h.sibling),h=i(h,y.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else e(m,h);h=h.sibling}h=Ud(y,m.mode,w),h.return=m,m=h}return o(m);case er:return S=y._init,E(m,h,S(y._payload),w)}if(mo(y))return v(m,h,y,w);if(Zs(y))return _(m,h,y,w);al(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(n(m,h.sibling),h=i(h,y),h.return=m,m=h):(n(m,h),h=$d(y,m.mode,w),h.return=m,m=h),o(m)):n(m,h)}return E}var vs=dw(!0),fw=dw(!1),Ra={},fn=Fr(Ra),Jo=Fr(Ra),Zo=Fr(Ra);function Zr(t){if(t===Ra)throw Error(b(174));return t}function Hp(t,e){switch(ce(Zo,e),ce(Jo,t),ce(fn,Ra),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Lf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Lf(e,t)}me(fn),ce(fn,e)}function _s(){me(fn),me(Jo),me(Zo)}function hw(t){Zr(Zo.current);var e=Zr(fn.current),n=Lf(e,t.type);e!==n&&(ce(Jo,t),ce(fn,n))}function Gp(t){Jo.current===t&&(me(fn),me(Jo))}var _e=Fr(0);function mu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ad=[];function Kp(){for(var t=0;t<Ad.length;t++)Ad[t]._workInProgressVersionPrimary=null;Ad.length=0}var Rl=Bn.ReactCurrentDispatcher,Ld=Bn.ReactCurrentBatchConfig,fi=0,we=null,be=null,Le=null,gu=!1,bo=!1,ea=0,Fk=0;function Ge(){throw Error(b(321))}function qp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!en(t[n],e[n]))return!1;return!0}function Yp(t,e,n,r,i,s){if(fi=s,we=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Rl.current=t===null||t.memoizedState===null?zk:Bk,t=n(r,i),bo){s=0;do{if(bo=!1,ea=0,25<=s)throw Error(b(301));s+=1,Le=be=null,e.updateQueue=null,Rl.current=Wk,t=n(r,i)}while(bo)}if(Rl.current=yu,e=be!==null&&be.next!==null,fi=0,Le=be=we=null,gu=!1,e)throw Error(b(300));return t}function Qp(){var t=ea!==0;return ea=0,t}function an(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?we.memoizedState=Le=t:Le=Le.next=t,Le}function $t(){if(be===null){var t=we.alternate;t=t!==null?t.memoizedState:null}else t=be.next;var e=Le===null?we.memoizedState:Le.next;if(e!==null)Le=e,be=t;else{if(t===null)throw Error(b(310));be=t,t={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Le===null?we.memoizedState=Le=t:Le=Le.next=t}return Le}function ta(t,e){return typeof e=="function"?e(t):e}function Dd(t){var e=$t(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=be,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((fi&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,o=r):l=l.next=c,we.lanes|=d,hi|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,en(r,e.memoizedState)||(at=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,we.lanes|=s,hi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Md(t){var e=$t(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);en(s,e.memoizedState)||(at=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function pw(){}function mw(t,e){var n=we,r=$t(),i=e(),s=!en(r.memoizedState,i);if(s&&(r.memoizedState=i,at=!0),r=r.queue,Xp(vw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,na(9,yw.bind(null,n,r,i,e),void 0,null),Fe===null)throw Error(b(349));fi&30||gw(n,e,i)}return i}function gw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function yw(t,e,n,r){e.value=n,e.getSnapshot=r,_w(e)&&ww(t)}function vw(t,e,n){return n(function(){_w(e)&&ww(t)})}function _w(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!en(t,n)}catch{return!0}}function ww(t){var e=Fn(t,1);e!==null&&Xt(e,t,1,-1)}function Hy(t){var e=an();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:t},e.queue=t,t=t.dispatch=Uk.bind(null,we,t),[e.memoizedState,t]}function na(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Ew(){return $t().memoizedState}function Ol(t,e,n,r){var i=an();we.flags|=t,i.memoizedState=na(1|e,n,void 0,r===void 0?null:r)}function dc(t,e,n,r){var i=$t();r=r===void 0?null:r;var s=void 0;if(be!==null){var o=be.memoizedState;if(s=o.destroy,r!==null&&qp(r,o.deps)){i.memoizedState=na(e,n,s,r);return}}we.flags|=t,i.memoizedState=na(1|e,n,s,r)}function Gy(t,e){return Ol(8390656,8,t,e)}function Xp(t,e){return dc(2048,8,t,e)}function Sw(t,e){return dc(4,2,t,e)}function Cw(t,e){return dc(4,4,t,e)}function xw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Tw(t,e,n){return n=n!=null?n.concat([t]):null,dc(4,4,xw.bind(null,e,t),n)}function Jp(){}function Iw(t,e){var n=$t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function kw(t,e){var n=$t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function bw(t,e,n){return fi&21?(en(n,e)||(n=O1(),we.lanes|=n,hi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,at=!0),t.memoizedState=n)}function jk(t,e){var n=re;re=n!==0&&4>n?n:4,t(!0);var r=Ld.transition;Ld.transition={};try{t(!1),e()}finally{re=n,Ld.transition=r}}function Pw(){return $t().memoizedState}function $k(t,e,n){var r=_r(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Rw(t))Ow(e,n);else if(n=aw(t,e,n,r),n!==null){var i=nt();Xt(n,t,r,i),Nw(n,e,r)}}function Uk(t,e,n){var r=_r(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rw(t))Ow(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,en(a,o)){var l=e.interleaved;l===null?(i.next=i,Wp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=aw(t,e,i,r),n!==null&&(i=nt(),Xt(n,t,r,i),Nw(n,e,r))}}function Rw(t){var e=t.alternate;return t===we||e!==null&&e===we}function Ow(t,e){bo=gu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Nw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pp(t,n)}}var yu={readContext:jt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},zk={readContext:jt,useCallback:function(t,e){return an().memoizedState=[t,e===void 0?null:e],t},useContext:jt,useEffect:Gy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ol(4194308,4,xw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ol(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ol(4,2,t,e)},useMemo:function(t,e){var n=an();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=an();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=$k.bind(null,we,t),[r.memoizedState,t]},useRef:function(t){var e=an();return t={current:t},e.memoizedState=t},useState:Hy,useDebugValue:Jp,useDeferredValue:function(t){return an().memoizedState=t},useTransition:function(){var t=Hy(!1),e=t[0];return t=jk.bind(null,t[1]),an().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=we,i=an();if(ve){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),Fe===null)throw Error(b(349));fi&30||gw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Gy(vw.bind(null,r,s,t),[t]),r.flags|=2048,na(9,yw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=an(),e=Fe.identifierPrefix;if(ve){var n=bn,r=kn;n=(r&~(1<<32-Qt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ea++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Fk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Bk={readContext:jt,useCallback:Iw,useContext:jt,useEffect:Xp,useImperativeHandle:Tw,useInsertionEffect:Sw,useLayoutEffect:Cw,useMemo:kw,useReducer:Dd,useRef:Ew,useState:function(){return Dd(ta)},useDebugValue:Jp,useDeferredValue:function(t){var e=$t();return bw(e,be.memoizedState,t)},useTransition:function(){var t=Dd(ta)[0],e=$t().memoizedState;return[t,e]},useMutableSource:pw,useSyncExternalStore:mw,useId:Pw,unstable_isNewReconciler:!1},Wk={readContext:jt,useCallback:Iw,useContext:jt,useEffect:Xp,useImperativeHandle:Tw,useInsertionEffect:Sw,useLayoutEffect:Cw,useMemo:kw,useReducer:Md,useRef:Ew,useState:function(){return Md(ta)},useDebugValue:Jp,useDeferredValue:function(t){var e=$t();return be===null?e.memoizedState=t:bw(e,be.memoizedState,t)},useTransition:function(){var t=Md(ta)[0],e=$t().memoizedState;return[t,e]},useMutableSource:pw,useSyncExternalStore:mw,useId:Pw,unstable_isNewReconciler:!1};function ws(t,e){try{var n="",r=e;do n+=yI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Fd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function rh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Vk=typeof WeakMap=="function"?WeakMap:Map;function Aw(t,e,n){n=Nn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){_u||(_u=!0,hh=r),rh(t,e)},n}function Lw(t,e,n){n=Nn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){rh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){rh(t,e),typeof r!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ky(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Vk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=ib.bind(null,t,e,n),e.then(t,t))}function qy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Yy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Nn(-1,1),e.tag=2,yr(n,e,1))),n.lanes|=1),t)}var Hk=Bn.ReactCurrentOwner,at=!1;function et(t,e,n,r){e.child=t===null?fw(e,null,n,r):vs(e,t.child,n,r)}function Qy(t,e,n,r,i){n=n.render;var s=e.ref;return as(e,i),r=Yp(t,e,n,r,s,i),n=Qp(),t!==null&&!at?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jn(t,e,i)):(ve&&n&&Fp(e),e.flags|=1,et(t,e,r,i),e.child)}function Xy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!om(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Dw(t,e,s,r,i)):(t=Dl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:qo,n(o,r)&&t.ref===e.ref)return jn(t,e,i)}return e.flags|=1,t=wr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Dw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(qo(s,r)&&t.ref===e.ref)if(at=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(at=!0);else return e.lanes=t.lanes,jn(t,e,i)}return ih(t,e,n,r,i)}function Mw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Xi,_t),_t|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(Xi,_t),_t|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(Xi,_t),_t|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(Xi,_t),_t|=r;return et(t,e,i,n),e.child}function Fw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ih(t,e,n,r,i){var s=dt(n)?ci:Qe.current;return s=gs(e,s),as(e,i),n=Yp(t,e,n,r,s,i),r=Qp(),t!==null&&!at?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jn(t,e,i)):(ve&&r&&Fp(e),e.flags|=1,et(t,e,n,i),e.child)}function Jy(t,e,n,r,i){if(dt(n)){var s=!0;uu(e)}else s=!1;if(as(e,i),e.stateNode===null)Nl(t,e),cw(e,n,r),nh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=jt(u):(u=dt(n)?ci:Qe.current,u=gs(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Wy(e,o,r,u),tr=!1;var f=e.memoizedState;o.state=f,pu(e,r,o,i),l=e.memoizedState,a!==r||f!==l||ct.current||tr?(typeof d=="function"&&(th(e,n,d,r),l=e.memoizedState),(a=tr||By(e,n,a,r,f,l,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,lw(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Wt(e.type,a),o.props=u,c=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=jt(l):(l=dt(n)?ci:Qe.current,l=gs(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||f!==l)&&Wy(e,o,r,l),tr=!1,f=e.memoizedState,o.state=f,pu(e,r,o,i);var v=e.memoizedState;a!==c||f!==v||ct.current||tr?(typeof p=="function"&&(th(e,n,p,r),v=e.memoizedState),(u=tr||By(e,n,u,r,f,v,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return sh(t,e,n,r,s,i)}function sh(t,e,n,r,i,s){Fw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Fy(e,n,!1),jn(t,e,s);r=e.stateNode,Hk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=vs(e,t.child,null,s),e.child=vs(e,null,a,s)):et(t,e,a,s),e.memoizedState=r.state,i&&Fy(e,n,!0),e.child}function jw(t){var e=t.stateNode;e.pendingContext?My(t,e.pendingContext,e.pendingContext!==e.context):e.context&&My(t,e.context,!1),Hp(t,e.containerInfo)}function Zy(t,e,n,r,i){return ys(),$p(i),e.flags|=256,et(t,e,n,r),e.child}var oh={dehydrated:null,treeContext:null,retryLane:0};function ah(t){return{baseLanes:t,cachePool:null,transitions:null}}function $w(t,e,n){var r=e.pendingProps,i=_e.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(_e,i&1),t===null)return Zf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=pc(o,r,0,null),t=ii(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ah(n),e.memoizedState=oh,t):Zp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Gk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=wr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=wr(a,s):(s=ii(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ah(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=oh,r}return s=t.child,t=s.sibling,r=wr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Zp(t,e){return e=pc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ll(t,e,n,r){return r!==null&&$p(r),vs(e,t.child,null,n),t=Zp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Gk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Fd(Error(b(422))),ll(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=pc({mode:"visible",children:r.children},i,0,null),s=ii(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&vs(e,t.child,null,o),e.child.memoizedState=ah(o),e.memoizedState=oh,s);if(!(e.mode&1))return ll(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(b(419)),r=Fd(s,r,void 0),ll(t,e,o,r)}if(a=(o&t.childLanes)!==0,at||a){if(r=Fe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Fn(t,i),Xt(r,t,i,-1))}return sm(),r=Fd(Error(b(421))),ll(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=sb.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,wt=gr(i.nextSibling),xt=e,ve=!0,Ht=null,t!==null&&(Lt[Dt++]=kn,Lt[Dt++]=bn,Lt[Dt++]=di,kn=t.id,bn=t.overflow,di=e),e=Zp(e,r.children),e.flags|=4096,e)}function e0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),eh(t.return,e,n)}function jd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Uw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(et(t,e,r.children,n),r=_e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&e0(t,n,e);else if(t.tag===19)e0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(_e,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&mu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),jd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&mu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}jd(e,!0,n,null,s);break;case"together":jd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Nl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function jn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),hi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=wr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=wr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Kk(t,e,n){switch(e.tag){case 3:jw(e),ys();break;case 5:hw(e);break;case 1:dt(e.type)&&uu(e);break;case 4:Hp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(fu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(_e,_e.current&1),e.flags|=128,null):n&e.child.childLanes?$w(t,e,n):(ce(_e,_e.current&1),t=jn(t,e,n),t!==null?t.sibling:null);ce(_e,_e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Uw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,Mw(t,e,n)}return jn(t,e,n)}var zw,lh,Bw,Ww;zw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lh=function(){};Bw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Zr(fn.current);var s=null;switch(n){case"input":i=Rf(t,i),r=Rf(t,r),s=[];break;case"select":i=Se({},i,{value:void 0}),r=Se({},r,{value:void 0}),s=[];break;case"textarea":i=Af(t,i),r=Af(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=au)}Df(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(zo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(zo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&de("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Ww=function(t,e,n,r){n!==r&&(e.flags|=4)};function so(t,e){if(!ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ke(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function qk(t,e,n){var r=e.pendingProps;switch(jp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(e),null;case 1:return dt(e.type)&&lu(),Ke(e),null;case 3:return r=e.stateNode,_s(),me(ct),me(Qe),Kp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ol(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ht!==null&&(gh(Ht),Ht=null))),lh(t,e),Ke(e),null;case 5:Gp(e);var i=Zr(Zo.current);if(n=e.type,t!==null&&e.stateNode!=null)Bw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return Ke(e),null}if(t=Zr(fn.current),ol(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[cn]=e,r[Xo]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<yo.length;i++)de(yo[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":uy(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":dy(r,s),de("invalid",r)}Df(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&sl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&sl(r.textContent,a,t),i=["children",""+a]):zo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":Xa(r),cy(r,s,!0);break;case"textarea":Xa(r),fy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=au)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=g1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[cn]=e,t[Xo]=r,zw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Mf(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<yo.length;i++)de(yo[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":uy(t,r),i=Rf(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Se({},r,{value:void 0}),de("invalid",t);break;case"textarea":dy(t,r),i=Af(t,r),de("invalid",t);break;default:i=r}Df(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?_1(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&y1(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Bo(t,l):typeof l=="number"&&Bo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(zo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&de("scroll",t):l!=null&&Cp(t,s,l,o))}switch(n){case"input":Xa(t),cy(t,r,!1);break;case"textarea":Xa(t),fy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+br(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?rs(t,!!r.multiple,s,!1):r.defaultValue!=null&&rs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=au)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ke(e),null;case 6:if(t&&e.stateNode!=null)Ww(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=Zr(Zo.current),Zr(fn.current),ol(e)){if(r=e.stateNode,n=e.memoizedProps,r[cn]=e,(s=r.nodeValue!==n)&&(t=xt,t!==null))switch(t.tag){case 3:sl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&sl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[cn]=e,e.stateNode=r}return Ke(e),null;case 13:if(me(_e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&wt!==null&&e.mode&1&&!(e.flags&128))ow(),ys(),e.flags|=98560,s=!1;else if(s=ol(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(b(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[cn]=e}else ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ke(e),s=!1}else Ht!==null&&(gh(Ht),Ht=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||_e.current&1?Oe===0&&(Oe=3):sm())),e.updateQueue!==null&&(e.flags|=4),Ke(e),null);case 4:return _s(),lh(t,e),t===null&&Yo(e.stateNode.containerInfo),Ke(e),null;case 10:return Bp(e.type._context),Ke(e),null;case 17:return dt(e.type)&&lu(),Ke(e),null;case 19:if(me(_e),s=e.memoizedState,s===null)return Ke(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)so(s,!1);else{if(Oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=mu(t),o!==null){for(e.flags|=128,so(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(_e,_e.current&1|2),e.child}t=t.sibling}s.tail!==null&&Te()>Es&&(e.flags|=128,r=!0,so(s,!1),e.lanes=4194304)}else{if(!r)if(t=mu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),so(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ve)return Ke(e),null}else 2*Te()-s.renderingStartTime>Es&&n!==1073741824&&(e.flags|=128,r=!0,so(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Te(),e.sibling=null,n=_e.current,ce(_e,r?n&1|2:n&1),e):(Ke(e),null);case 22:case 23:return im(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?_t&1073741824&&(Ke(e),e.subtreeFlags&6&&(e.flags|=8192)):Ke(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function Yk(t,e){switch(jp(e),e.tag){case 1:return dt(e.type)&&lu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _s(),me(ct),me(Qe),Kp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Gp(e),null;case 13:if(me(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return me(_e),null;case 4:return _s(),null;case 10:return Bp(e.type._context),null;case 22:case 23:return im(),null;case 24:return null;default:return null}}var ul=!1,qe=!1,Qk=typeof WeakSet=="function"?WeakSet:Set,A=null;function Qi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(t,e,r)}else n.current=null}function uh(t,e,n){try{n()}catch(r){Ce(t,e,r)}}var t0=!1;function Xk(t,e){if(Gf=iu,t=K1(),Mp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,c=t,f=null;t:for(;;){for(var p;c!==n||i!==0&&c.nodeType!==3||(a=o+i),c!==s||r!==0&&c.nodeType!==3||(l=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(p=c.firstChild)!==null;)f=c,c=p;for(;;){if(c===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++d===r&&(l=o),(p=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kf={focusedElem:t,selectionRange:n},iu=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,E=v.memoizedState,m=e.stateNode,h=m.getSnapshotBeforeUpdate(e.elementType===e.type?_:Wt(e.type,_),E);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(w){Ce(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return v=t0,t0=!1,v}function Po(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&uh(e,n,s)}i=i.next}while(i!==r)}}function fc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ch(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Vw(t){var e=t.alternate;e!==null&&(t.alternate=null,Vw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[cn],delete e[Xo],delete e[Qf],delete e[Ak],delete e[Lk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Hw(t){return t.tag===5||t.tag===3||t.tag===4}function n0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Hw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function dh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=au));else if(r!==4&&(t=t.child,t!==null))for(dh(t,e,n),t=t.sibling;t!==null;)dh(t,e,n),t=t.sibling}function fh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(fh(t,e,n),t=t.sibling;t!==null;)fh(t,e,n),t=t.sibling}var Ue=null,Vt=!1;function Xn(t,e,n){for(n=n.child;n!==null;)Gw(t,e,n),n=n.sibling}function Gw(t,e,n){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(ic,n)}catch{}switch(n.tag){case 5:qe||Qi(n,e);case 6:var r=Ue,i=Vt;Ue=null,Xn(t,e,n),Ue=r,Vt=i,Ue!==null&&(Vt?(t=Ue,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(Vt?(t=Ue,n=n.stateNode,t.nodeType===8?Od(t.parentNode,n):t.nodeType===1&&Od(t,n),Go(t)):Od(Ue,n.stateNode));break;case 4:r=Ue,i=Vt,Ue=n.stateNode.containerInfo,Vt=!0,Xn(t,e,n),Ue=r,Vt=i;break;case 0:case 11:case 14:case 15:if(!qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&uh(n,e,o),i=i.next}while(i!==r)}Xn(t,e,n);break;case 1:if(!qe&&(Qi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ce(n,e,a)}Xn(t,e,n);break;case 21:Xn(t,e,n);break;case 22:n.mode&1?(qe=(r=qe)||n.memoizedState!==null,Xn(t,e,n),qe=r):Xn(t,e,n);break;default:Xn(t,e,n)}}function r0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Qk),e.forEach(function(r){var i=ob.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function zt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ue=a.stateNode,Vt=!1;break e;case 3:Ue=a.stateNode.containerInfo,Vt=!0;break e;case 4:Ue=a.stateNode.containerInfo,Vt=!0;break e}a=a.return}if(Ue===null)throw Error(b(160));Gw(s,o,i),Ue=null,Vt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ce(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Kw(e,t),e=e.sibling}function Kw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zt(e,t),on(t),r&4){try{Po(3,t,t.return),fc(3,t)}catch(_){Ce(t,t.return,_)}try{Po(5,t,t.return)}catch(_){Ce(t,t.return,_)}}break;case 1:zt(e,t),on(t),r&512&&n!==null&&Qi(n,n.return);break;case 5:if(zt(e,t),on(t),r&512&&n!==null&&Qi(n,n.return),t.flags&32){var i=t.stateNode;try{Bo(i,"")}catch(_){Ce(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&p1(i,s),Mf(a,o);var u=Mf(a,s);for(o=0;o<l.length;o+=2){var d=l[o],c=l[o+1];d==="style"?_1(i,c):d==="dangerouslySetInnerHTML"?y1(i,c):d==="children"?Bo(i,c):Cp(i,d,c,u)}switch(a){case"input":Of(i,s);break;case"textarea":m1(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?rs(i,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?rs(i,!!s.multiple,s.defaultValue,!0):rs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Xo]=s}catch(_){Ce(t,t.return,_)}}break;case 6:if(zt(e,t),on(t),r&4){if(t.stateNode===null)throw Error(b(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){Ce(t,t.return,_)}}break;case 3:if(zt(e,t),on(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Go(e.containerInfo)}catch(_){Ce(t,t.return,_)}break;case 4:zt(e,t),on(t);break;case 13:zt(e,t),on(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(nm=Te())),r&4&&r0(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(qe=(u=qe)||d,zt(e,t),qe=u):zt(e,t),on(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(A=t,d=t.child;d!==null;){for(c=A=d;A!==null;){switch(f=A,p=f.child,f.tag){case 0:case 11:case 14:case 15:Po(4,f,f.return);break;case 1:Qi(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){Ce(r,n,_)}}break;case 5:Qi(f,f.return);break;case 22:if(f.memoizedState!==null){s0(c);continue}}p!==null?(p.return=f,A=p):s0(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=c.stateNode,l=c.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=v1("display",o))}catch(_){Ce(t,t.return,_)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(_){Ce(t,t.return,_)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:zt(e,t),on(t),r&4&&r0(t);break;case 21:break;default:zt(e,t),on(t)}}function on(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Hw(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Bo(i,""),r.flags&=-33);var s=n0(t);fh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=n0(t);dh(t,a,o);break;default:throw Error(b(161))}}catch(l){Ce(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Jk(t,e,n){A=t,qw(t)}function qw(t,e,n){for(var r=(t.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ul;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||qe;a=ul;var u=qe;if(ul=o,(qe=l)&&!u)for(A=i;A!==null;)o=A,l=o.child,o.tag===22&&o.memoizedState!==null?o0(i):l!==null?(l.return=o,A=l):o0(i);for(;s!==null;)A=s,qw(s),s=s.sibling;A=i,ul=a,qe=u}i0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,A=s):i0(t)}}function i0(t){for(;A!==null;){var e=A;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qe||fc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!qe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Wt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&zy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}zy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Go(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}qe||e.flags&512&&ch(e)}catch(f){Ce(e,e.return,f)}}if(e===t){A=null;break}if(n=e.sibling,n!==null){n.return=e.return,A=n;break}A=e.return}}function s0(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var n=e.sibling;if(n!==null){n.return=e.return,A=n;break}A=e.return}}function o0(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{fc(4,e)}catch(l){Ce(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ce(e,i,l)}}var s=e.return;try{ch(e)}catch(l){Ce(e,s,l)}break;case 5:var o=e.return;try{ch(e)}catch(l){Ce(e,o,l)}}}catch(l){Ce(e,e.return,l)}if(e===t){A=null;break}var a=e.sibling;if(a!==null){a.return=e.return,A=a;break}A=e.return}}var Zk=Math.ceil,vu=Bn.ReactCurrentDispatcher,em=Bn.ReactCurrentOwner,Ft=Bn.ReactCurrentBatchConfig,X=0,Fe=null,ke=null,We=0,_t=0,Xi=Fr(0),Oe=0,ra=null,hi=0,hc=0,tm=0,Ro=null,st=null,nm=0,Es=1/0,xn=null,_u=!1,hh=null,vr=null,cl=!1,cr=null,wu=0,Oo=0,ph=null,Al=-1,Ll=0;function nt(){return X&6?Te():Al!==-1?Al:Al=Te()}function _r(t){return t.mode&1?X&2&&We!==0?We&-We:Mk.transition!==null?(Ll===0&&(Ll=O1()),Ll):(t=re,t!==0||(t=window.event,t=t===void 0?16:j1(t.type)),t):1}function Xt(t,e,n,r){if(50<Oo)throw Oo=0,ph=null,Error(b(185));ka(t,n,r),(!(X&2)||t!==Fe)&&(t===Fe&&(!(X&2)&&(hc|=n),Oe===4&&ir(t,We)),ft(t,r),n===1&&X===0&&!(e.mode&1)&&(Es=Te()+500,uc&&jr()))}function ft(t,e){var n=t.callbackNode;MI(t,e);var r=ru(t,t===Fe?We:0);if(r===0)n!==null&&my(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&my(n),e===1)t.tag===0?Dk(a0.bind(null,t)):rw(a0.bind(null,t)),Ok(function(){!(X&6)&&jr()}),n=null;else{switch(N1(r)){case 1:n=bp;break;case 4:n=P1;break;case 16:n=nu;break;case 536870912:n=R1;break;default:n=nu}n=nE(n,Yw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Yw(t,e){if(Al=-1,Ll=0,X&6)throw Error(b(327));var n=t.callbackNode;if(ls()&&t.callbackNode!==n)return null;var r=ru(t,t===Fe?We:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Eu(t,r);else{e=r;var i=X;X|=2;var s=Xw();(Fe!==t||We!==e)&&(xn=null,Es=Te()+500,ri(t,e));do try{nb();break}catch(a){Qw(t,a)}while(!0);zp(),vu.current=s,X=i,ke!==null?e=0:(Fe=null,We=0,e=Oe)}if(e!==0){if(e===2&&(i=zf(t),i!==0&&(r=i,e=mh(t,i))),e===1)throw n=ra,ri(t,0),ir(t,r),ft(t,Te()),n;if(e===6)ir(t,r);else{if(i=t.current.alternate,!(r&30)&&!eb(i)&&(e=Eu(t,r),e===2&&(s=zf(t),s!==0&&(r=s,e=mh(t,s))),e===1))throw n=ra,ri(t,0),ir(t,r),ft(t,Te()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:Gr(t,st,xn);break;case 3:if(ir(t,r),(r&130023424)===r&&(e=nm+500-Te(),10<e)){if(ru(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){nt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Yf(Gr.bind(null,t,st,xn),e);break}Gr(t,st,xn);break;case 4:if(ir(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Qt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Zk(r/1960))-r,10<r){t.timeoutHandle=Yf(Gr.bind(null,t,st,xn),r);break}Gr(t,st,xn);break;case 5:Gr(t,st,xn);break;default:throw Error(b(329))}}}return ft(t,Te()),t.callbackNode===n?Yw.bind(null,t):null}function mh(t,e){var n=Ro;return t.current.memoizedState.isDehydrated&&(ri(t,e).flags|=256),t=Eu(t,e),t!==2&&(e=st,st=n,e!==null&&gh(e)),t}function gh(t){st===null?st=t:st.push.apply(st,t)}function eb(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!en(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ir(t,e){for(e&=~tm,e&=~hc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qt(e),r=1<<n;t[n]=-1,e&=~r}}function a0(t){if(X&6)throw Error(b(327));ls();var e=ru(t,0);if(!(e&1))return ft(t,Te()),null;var n=Eu(t,e);if(t.tag!==0&&n===2){var r=zf(t);r!==0&&(e=r,n=mh(t,r))}if(n===1)throw n=ra,ri(t,0),ir(t,e),ft(t,Te()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gr(t,st,xn),ft(t,Te()),null}function rm(t,e){var n=X;X|=1;try{return t(e)}finally{X=n,X===0&&(Es=Te()+500,uc&&jr())}}function pi(t){cr!==null&&cr.tag===0&&!(X&6)&&ls();var e=X;X|=1;var n=Ft.transition,r=re;try{if(Ft.transition=null,re=1,t)return t()}finally{re=r,Ft.transition=n,X=e,!(X&6)&&jr()}}function im(){_t=Xi.current,me(Xi)}function ri(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Rk(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(jp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&lu();break;case 3:_s(),me(ct),me(Qe),Kp();break;case 5:Gp(r);break;case 4:_s();break;case 13:me(_e);break;case 19:me(_e);break;case 10:Bp(r.type._context);break;case 22:case 23:im()}n=n.return}if(Fe=t,ke=t=wr(t.current,null),We=_t=e,Oe=0,ra=null,tm=hc=hi=0,st=Ro=null,Jr!==null){for(e=0;e<Jr.length;e++)if(n=Jr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Jr=null}return t}function Qw(t,e){do{var n=ke;try{if(zp(),Rl.current=yu,gu){for(var r=we.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}gu=!1}if(fi=0,Le=be=we=null,bo=!1,ea=0,em.current=null,n===null||n.return===null){Oe=1,ra=e,ke=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=We,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=qy(o);if(p!==null){p.flags&=-257,Yy(p,o,a,s,e),p.mode&1&&Ky(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){Ky(s,u,e),sm();break e}l=Error(b(426))}}else if(ve&&a.mode&1){var E=qy(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Yy(E,o,a,s,e),$p(ws(l,a));break e}}s=l=ws(l,a),Oe!==4&&(Oe=2),Ro===null?Ro=[s]:Ro.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Aw(s,l,e);Uy(s,m);break e;case 1:a=l;var h=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(vr===null||!vr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=Lw(s,a,e);Uy(s,w);break e}}s=s.return}while(s!==null)}Zw(n)}catch(T){e=T,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(!0)}function Xw(){var t=vu.current;return vu.current=yu,t===null?yu:t}function sm(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),Fe===null||!(hi&268435455)&&!(hc&268435455)||ir(Fe,We)}function Eu(t,e){var n=X;X|=2;var r=Xw();(Fe!==t||We!==e)&&(xn=null,ri(t,e));do try{tb();break}catch(i){Qw(t,i)}while(!0);if(zp(),X=n,vu.current=r,ke!==null)throw Error(b(261));return Fe=null,We=0,Oe}function tb(){for(;ke!==null;)Jw(ke)}function nb(){for(;ke!==null&&!kI();)Jw(ke)}function Jw(t){var e=tE(t.alternate,t,_t);t.memoizedProps=t.pendingProps,e===null?Zw(t):ke=e,em.current=null}function Zw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Yk(n,e),n!==null){n.flags&=32767,ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Oe=6,ke=null;return}}else if(n=qk(n,e,_t),n!==null){ke=n;return}if(e=e.sibling,e!==null){ke=e;return}ke=e=t}while(e!==null);Oe===0&&(Oe=5)}function Gr(t,e,n){var r=re,i=Ft.transition;try{Ft.transition=null,re=1,rb(t,e,n,r)}finally{Ft.transition=i,re=r}return null}function rb(t,e,n,r){do ls();while(cr!==null);if(X&6)throw Error(b(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(FI(t,s),t===Fe&&(ke=Fe=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||cl||(cl=!0,nE(nu,function(){return ls(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ft.transition,Ft.transition=null;var o=re;re=1;var a=X;X|=4,em.current=null,Xk(t,n),Kw(n,t),Ck(Kf),iu=!!Gf,Kf=Gf=null,t.current=n,Jk(n),bI(),X=a,re=o,Ft.transition=s}else t.current=n;if(cl&&(cl=!1,cr=t,wu=i),s=t.pendingLanes,s===0&&(vr=null),OI(n.stateNode),ft(t,Te()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(_u)throw _u=!1,t=hh,hh=null,t;return wu&1&&t.tag!==0&&ls(),s=t.pendingLanes,s&1?t===ph?Oo++:(Oo=0,ph=t):Oo=0,jr(),null}function ls(){if(cr!==null){var t=N1(wu),e=Ft.transition,n=re;try{if(Ft.transition=null,re=16>t?16:t,cr===null)var r=!1;else{if(t=cr,cr=null,wu=0,X&6)throw Error(b(331));var i=X;for(X|=4,A=t.current;A!==null;){var s=A,o=s.child;if(A.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(A=u;A!==null;){var d=A;switch(d.tag){case 0:case 11:case 15:Po(8,d,s)}var c=d.child;if(c!==null)c.return=d,A=c;else for(;A!==null;){d=A;var f=d.sibling,p=d.return;if(Vw(d),d===u){A=null;break}if(f!==null){f.return=p,A=f;break}A=p}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var E=_.sibling;_.sibling=null,_=E}while(_!==null)}}A=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Po(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,A=m;break e}A=s.return}}var h=t.current;for(A=h;A!==null;){o=A;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,A=y;else e:for(o=h;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:fc(9,a)}}catch(T){Ce(a,a.return,T)}if(a===o){A=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,A=w;break e}A=a.return}}if(X=i,jr(),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(ic,t)}catch{}r=!0}return r}finally{re=n,Ft.transition=e}}return!1}function l0(t,e,n){e=ws(n,e),e=Aw(t,e,1),t=yr(t,e,1),e=nt(),t!==null&&(ka(t,1,e),ft(t,e))}function Ce(t,e,n){if(t.tag===3)l0(t,t,n);else for(;e!==null;){if(e.tag===3){l0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vr===null||!vr.has(r))){t=ws(n,t),t=Lw(e,t,1),e=yr(e,t,1),t=nt(),e!==null&&(ka(e,1,t),ft(e,t));break}}e=e.return}}function ib(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=nt(),t.pingedLanes|=t.suspendedLanes&n,Fe===t&&(We&n)===n&&(Oe===4||Oe===3&&(We&130023424)===We&&500>Te()-nm?ri(t,0):tm|=n),ft(t,e)}function eE(t,e){e===0&&(t.mode&1?(e=el,el<<=1,!(el&130023424)&&(el=4194304)):e=1);var n=nt();t=Fn(t,e),t!==null&&(ka(t,e,n),ft(t,n))}function sb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),eE(t,n)}function ob(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),eE(t,n)}var tE;tE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ct.current)at=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return at=!1,Kk(t,e,n);at=!!(t.flags&131072)}else at=!1,ve&&e.flags&1048576&&iw(e,du,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Nl(t,e),t=e.pendingProps;var i=gs(e,Qe.current);as(e,n),i=Yp(null,e,r,t,i,n);var s=Qp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dt(r)?(s=!0,uu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vp(e),i.updater=cc,e.stateNode=i,i._reactInternals=e,nh(e,r,t,n),e=sh(null,e,r,!0,s,n)):(e.tag=0,ve&&s&&Fp(e),et(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Nl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=lb(r),t=Wt(r,t),i){case 0:e=ih(null,e,r,t,n);break e;case 1:e=Jy(null,e,r,t,n);break e;case 11:e=Qy(null,e,r,t,n);break e;case 14:e=Xy(null,e,r,Wt(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),ih(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Jy(t,e,r,i,n);case 3:e:{if(jw(e),t===null)throw Error(b(387));r=e.pendingProps,s=e.memoizedState,i=s.element,lw(t,e),pu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ws(Error(b(423)),e),e=Zy(t,e,r,n,i);break e}else if(r!==i){i=ws(Error(b(424)),e),e=Zy(t,e,r,n,i);break e}else for(wt=gr(e.stateNode.containerInfo.firstChild),xt=e,ve=!0,Ht=null,n=fw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ys(),r===i){e=jn(t,e,n);break e}et(t,e,r,n)}e=e.child}return e;case 5:return hw(e),t===null&&Zf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,qf(r,i)?o=null:s!==null&&qf(r,s)&&(e.flags|=32),Fw(t,e),et(t,e,o,n),e.child;case 6:return t===null&&Zf(e),null;case 13:return $w(t,e,n);case 4:return Hp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=vs(e,null,r,n):et(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Qy(t,e,r,i,n);case 7:return et(t,e,e.pendingProps,n),e.child;case 8:return et(t,e,e.pendingProps.children,n),e.child;case 12:return et(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(fu,r._currentValue),r._currentValue=o,s!==null)if(en(s.value,o)){if(s.children===i.children&&!ct.current){e=jn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Nn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),eh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(b(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),eh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}et(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,as(e,n),i=jt(i),r=r(i),e.flags|=1,et(t,e,r,n),e.child;case 14:return r=e.type,i=Wt(r,e.pendingProps),i=Wt(r.type,i),Xy(t,e,r,i,n);case 15:return Dw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Nl(t,e),e.tag=1,dt(r)?(t=!0,uu(e)):t=!1,as(e,n),cw(e,r,i),nh(e,r,i,n),sh(null,e,r,!0,t,n);case 19:return Uw(t,e,n);case 22:return Mw(t,e,n)}throw Error(b(156,e.tag))};function nE(t,e){return b1(t,e)}function ab(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(t,e,n,r){return new ab(t,e,n,r)}function om(t){return t=t.prototype,!(!t||!t.isReactComponent)}function lb(t){if(typeof t=="function")return om(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Tp)return 11;if(t===Ip)return 14}return 2}function wr(t,e){var n=t.alternate;return n===null?(n=Mt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Dl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")om(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case zi:return ii(n.children,i,s,e);case xp:o=8,i|=8;break;case If:return t=Mt(12,n,e,i|2),t.elementType=If,t.lanes=s,t;case kf:return t=Mt(13,n,e,i),t.elementType=kf,t.lanes=s,t;case bf:return t=Mt(19,n,e,i),t.elementType=bf,t.lanes=s,t;case d1:return pc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case u1:o=10;break e;case c1:o=9;break e;case Tp:o=11;break e;case Ip:o=14;break e;case er:o=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=Mt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ii(t,e,n,r){return t=Mt(7,t,r,e),t.lanes=n,t}function pc(t,e,n,r){return t=Mt(22,t,r,e),t.elementType=d1,t.lanes=n,t.stateNode={isHidden:!1},t}function $d(t,e,n){return t=Mt(6,t,null,e),t.lanes=n,t}function Ud(t,e,n){return e=Mt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ub(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wd(0),this.expirationTimes=wd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function am(t,e,n,r,i,s,o,a,l){return t=new ub(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Mt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vp(s),t}function cb(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ui,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function rE(t){if(!t)return Pr;t=t._reactInternals;e:{if(Ii(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(dt(n))return nw(t,n,e)}return e}function iE(t,e,n,r,i,s,o,a,l){return t=am(n,r,!0,t,i,s,o,a,l),t.context=rE(null),n=t.current,r=nt(),i=_r(n),s=Nn(r,i),s.callback=e??null,yr(n,s,i),t.current.lanes=i,ka(t,i,r),ft(t,r),t}function mc(t,e,n,r){var i=e.current,s=nt(),o=_r(i);return n=rE(n),e.context===null?e.context=n:e.pendingContext=n,e=Nn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=yr(i,e,o),t!==null&&(Xt(t,i,o,s),Pl(t,i,o)),o}function Su(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function u0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function lm(t,e){u0(t,e),(t=t.alternate)&&u0(t,e)}function db(){return null}var sE=typeof reportError=="function"?reportError:function(t){console.error(t)};function um(t){this._internalRoot=t}gc.prototype.render=um.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));mc(t,e,null,null)};gc.prototype.unmount=um.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;pi(function(){mc(null,t,null,null)}),e[Mn]=null}};function gc(t){this._internalRoot=t}gc.prototype.unstable_scheduleHydration=function(t){if(t){var e=D1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<rr.length&&e!==0&&e<rr[n].priority;n++);rr.splice(n,0,t),n===0&&F1(t)}};function cm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function c0(){}function fb(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Su(o);s.call(u)}}var o=iE(e,r,t,0,null,!1,!1,"",c0);return t._reactRootContainer=o,t[Mn]=o.current,Yo(t.nodeType===8?t.parentNode:t),pi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Su(l);a.call(u)}}var l=am(t,0,!1,null,null,!1,!1,"",c0);return t._reactRootContainer=l,t[Mn]=l.current,Yo(t.nodeType===8?t.parentNode:t),pi(function(){mc(e,l,n,r)}),l}function vc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Su(o);a.call(l)}}mc(e,o,t,i)}else o=fb(n,e,t,i,r);return Su(o)}A1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=go(e.pendingLanes);n!==0&&(Pp(e,n|1),ft(e,Te()),!(X&6)&&(Es=Te()+500,jr()))}break;case 13:pi(function(){var r=Fn(t,1);if(r!==null){var i=nt();Xt(r,t,1,i)}}),lm(t,1)}};Rp=function(t){if(t.tag===13){var e=Fn(t,134217728);if(e!==null){var n=nt();Xt(e,t,134217728,n)}lm(t,134217728)}};L1=function(t){if(t.tag===13){var e=_r(t),n=Fn(t,e);if(n!==null){var r=nt();Xt(n,t,e,r)}lm(t,e)}};D1=function(){return re};M1=function(t,e){var n=re;try{return re=t,e()}finally{re=n}};jf=function(t,e,n){switch(e){case"input":if(Of(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=lc(r);if(!i)throw Error(b(90));h1(r),Of(r,i)}}}break;case"textarea":m1(t,n);break;case"select":e=n.value,e!=null&&rs(t,!!n.multiple,e,!1)}};S1=rm;C1=pi;var hb={usingClientEntryPoint:!1,Events:[Pa,Hi,lc,w1,E1,rm]},oo={findFiberByHostInstance:Xr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},pb={bundleType:oo.bundleType,version:oo.version,rendererPackageName:oo.rendererPackageName,rendererConfig:oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=I1(t),t===null?null:t.stateNode},findFiberByHostInstance:oo.findFiberByHostInstance||db,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{ic=dl.inject(pb),dn=dl}catch{}}Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hb;Pt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cm(e))throw Error(b(200));return cb(t,e,null,n)};Pt.createRoot=function(t,e){if(!cm(t))throw Error(b(299));var n=!1,r="",i=sE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=am(t,1,!1,null,null,n,!1,r,i),t[Mn]=e.current,Yo(t.nodeType===8?t.parentNode:t),new um(e)};Pt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=I1(e),t=t===null?null:t.stateNode,t};Pt.flushSync=function(t){return pi(t)};Pt.hydrate=function(t,e,n){if(!yc(e))throw Error(b(200));return vc(null,t,e,!0,n)};Pt.hydrateRoot=function(t,e,n){if(!cm(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=sE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=iE(e,null,t,1,n??null,i,!1,s,o),t[Mn]=e.current,Yo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new gc(e)};Pt.render=function(t,e,n){if(!yc(e))throw Error(b(200));return vc(null,t,e,!1,n)};Pt.unmountComponentAtNode=function(t){if(!yc(t))throw Error(b(40));return t._reactRootContainer?(pi(function(){vc(null,null,t,!1,function(){t._reactRootContainer=null,t[Mn]=null})}),!0):!1};Pt.unstable_batchedUpdates=rm;Pt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!yc(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return vc(t,e,n,!1,r)};Pt.version="18.2.0-next-9e3b772b8-20220608";function oE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oE)}catch(t){console.error(t)}}oE(),i1.exports=Pt;var aE=i1.exports,d0=aE;xf.createRoot=d0.createRoot,xf.hydrateRoot=d0.hydrateRoot;/**
 * @remix-run/router v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ia(){return ia=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ia.apply(this,arguments)}var dr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(dr||(dr={}));const f0="popstate";function mb(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return yh("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Cu(i)}return yb(e,n,null,t)}function Ee(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function dm(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function gb(){return Math.random().toString(36).substr(2,8)}function h0(t,e){return{usr:t.state,key:t.key,idx:e}}function yh(t,e,n,r){return n===void 0&&(n=null),ia({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?zs(e):e,{state:n,key:e&&e.key||r||gb()})}function Cu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function zs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function yb(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=dr.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(ia({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function c(){a=dr.Pop;let E=d(),m=E==null?null:E-u;u=E,l&&l({action:a,location:_.location,delta:m})}function f(E,m){a=dr.Push;let h=yh(_.location,E,m);n&&n(h,E),u=d()+1;let y=h0(h,u),w=_.createHref(h);try{o.pushState(y,"",w)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(w)}s&&l&&l({action:a,location:_.location,delta:1})}function p(E,m){a=dr.Replace;let h=yh(_.location,E,m);n&&n(h,E),u=d();let y=h0(h,u),w=_.createHref(h);o.replaceState(y,"",w),s&&l&&l({action:a,location:_.location,delta:0})}function v(E){let m=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof E=="string"?E:Cu(E);return Ee(m,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,m)}let _={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(f0,c),l=E,()=>{i.removeEventListener(f0,c),l=null}},createHref(E){return e(i,E)},createURL:v,encodeLocation(E){let m=v(E);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:p,go(E){return o.go(E)}};return _}var p0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(p0||(p0={}));function vb(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?zs(e):e,i=Ss(r.pathname||"/",n);if(i==null)return null;let s=lE(t);_b(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=bb(s[a],Rb(i));return o}function lE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ee(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Er([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(Ee(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),lE(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Ib(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of uE(s.path))i(s,o,l)}),e}function uE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=uE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function _b(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:kb(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const wb=/^:[\w-]+$/,Eb=3,Sb=2,Cb=1,xb=10,Tb=-2,m0=t=>t==="*";function Ib(t,e){let n=t.split("/"),r=n.length;return n.some(m0)&&(r+=Tb),e&&(r+=Sb),n.filter(i=>!m0(i)).reduce((i,s)=>i+(wb.test(s)?Eb:s===""?Cb:xb),r)}function kb(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function bb(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=vh({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let c=a.route;s.push({params:r,pathname:Er([i,d.pathname]),pathnameBase:Db(Er([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=Er([i,d.pathnameBase]))}return s}function vh(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Pb(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:f,isOptional:p}=d;if(f==="*"){let _=a[c]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const v=a[c];return p&&!v?u[f]=void 0:u[f]=Ob(v||"",f),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Pb(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),dm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Rb(t){try{return decodeURI(t)}catch(e){return dm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ob(t,e){try{return decodeURIComponent(t)}catch(n){return dm(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Ss(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Nb(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?zs(t):t;return{pathname:n?n.startsWith("/")?n:Ab(n,e):e,search:Mb(r),hash:Fb(i)}}function Ab(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function zd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Lb(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function fm(t,e){let n=Lb(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function hm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=zs(t):(i=ia({},t),Ee(!i.pathname||!i.pathname.includes("?"),zd("?","pathname","search",i)),Ee(!i.pathname||!i.pathname.includes("#"),zd("#","pathname","hash",i)),Ee(!i.search||!i.search.includes("#"),zd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let c=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),c-=1;i.pathname=f.join("/")}a=c>=0?e[c]:"/"}let l=Nb(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Er=t=>t.join("/").replace(/\/\/+/g,"/"),Db=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Mb=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Fb=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function jb(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const cE=["post","put","patch","delete"];new Set(cE);const $b=["get",...cE];new Set($b);/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sa(){return sa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},sa.apply(this,arguments)}const _c=C.createContext(null),dE=C.createContext(null),Wn=C.createContext(null),wc=C.createContext(null),Vn=C.createContext({outlet:null,matches:[],isDataRoute:!1}),fE=C.createContext(null);function Ub(t,e){let{relative:n}=e===void 0?{}:e;Bs()||Ee(!1);let{basename:r,navigator:i}=C.useContext(Wn),{hash:s,pathname:o,search:a}=Ec(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Er([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Bs(){return C.useContext(wc)!=null}function Ws(){return Bs()||Ee(!1),C.useContext(wc).location}function hE(t){C.useContext(Wn).static||C.useLayoutEffect(t)}function pE(){let{isDataRoute:t}=C.useContext(Vn);return t?t2():zb()}function zb(){Bs()||Ee(!1);let t=C.useContext(_c),{basename:e,future:n,navigator:r}=C.useContext(Wn),{matches:i}=C.useContext(Vn),{pathname:s}=Ws(),o=JSON.stringify(fm(i,n.v7_relativeSplatPath)),a=C.useRef(!1);return hE(()=>{a.current=!0}),C.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=hm(u,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Er([e,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[e,r,o,s,t])}const Bb=C.createContext(null);function Wb(t){let e=C.useContext(Vn).outlet;return e&&C.createElement(Bb.Provider,{value:t},e)}function Ec(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=C.useContext(Wn),{matches:i}=C.useContext(Vn),{pathname:s}=Ws(),o=JSON.stringify(fm(i,r.v7_relativeSplatPath));return C.useMemo(()=>hm(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function Vb(t,e){return Hb(t,e)}function Hb(t,e,n,r){Bs()||Ee(!1);let{navigator:i}=C.useContext(Wn),{matches:s}=C.useContext(Vn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Ws(),d;if(e){var c;let E=typeof e=="string"?zs(e):e;l==="/"||(c=E.pathname)!=null&&c.startsWith(l)||Ee(!1),d=E}else d=u;let f=d.pathname||"/",p=l==="/"?f:f.slice(l.length)||"/",v=vb(t,{pathname:p}),_=Qb(v&&v.map(E=>Object.assign({},E,{params:Object.assign({},a,E.params),pathname:Er([l,i.encodeLocation?i.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?l:Er([l,i.encodeLocation?i.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),s,n,r);return e&&_?C.createElement(wc.Provider,{value:{location:sa({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:dr.Pop}},_):_}function Gb(){let t=e2(),e=jb(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},e),n?C.createElement("pre",{style:i},n):null,null)}const Kb=C.createElement(Gb,null);class qb extends C.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?C.createElement(Vn.Provider,{value:this.props.routeContext},C.createElement(fE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Yb(t){let{routeContext:e,match:n,children:r}=t,i=C.useContext(_c);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Vn.Provider,{value:e},r)}function Qb(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id]));d>=0||Ee(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let c=o[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:f,errors:p}=n,v=c.route.loader&&f[c.route.id]===void 0&&(!p||p[c.route.id]===void 0);if(c.route.lazy||v){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,c,f)=>{let p,v=!1,_=null,E=null;n&&(p=a&&c.route.id?a[c.route.id]:void 0,_=c.route.errorElement||Kb,l&&(u<0&&f===0?(n2("route-fallback",!1),v=!0,E=null):u===f&&(v=!0,E=c.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,f+1)),h=()=>{let y;return p?y=_:v?y=E:c.route.Component?y=C.createElement(c.route.Component,null):c.route.element?y=c.route.element:y=d,C.createElement(Yb,{match:c,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:y})};return n&&(c.route.ErrorBoundary||c.route.errorElement||f===0)?C.createElement(qb,{location:n.location,revalidation:n.revalidation,component:_,error:p,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):h()},null)}var mE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(mE||{}),xu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(xu||{});function Xb(t){let e=C.useContext(_c);return e||Ee(!1),e}function Jb(t){let e=C.useContext(dE);return e||Ee(!1),e}function Zb(t){let e=C.useContext(Vn);return e||Ee(!1),e}function gE(t){let e=Zb(),n=e.matches[e.matches.length-1];return n.route.id||Ee(!1),n.route.id}function e2(){var t;let e=C.useContext(fE),n=Jb(xu.UseRouteError),r=gE(xu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function t2(){let{router:t}=Xb(mE.UseNavigateStable),e=gE(xu.UseNavigateStable),n=C.useRef(!1);return hE(()=>{n.current=!0}),C.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,sa({fromRouteId:e},s)))},[t,e])}const g0={};function n2(t,e,n){!e&&!g0[t]&&(g0[t]=!0)}function _h(t){let{to:e,replace:n,state:r,relative:i}=t;Bs()||Ee(!1);let{future:s,static:o}=C.useContext(Wn),{matches:a}=C.useContext(Vn),{pathname:l}=Ws(),u=pE(),d=hm(e,fm(a,s.v7_relativeSplatPath),l,i==="path"),c=JSON.stringify(d);return C.useEffect(()=>u(JSON.parse(c),{replace:n,state:r,relative:i}),[u,c,i,n,r]),null}function r2(t){return Wb(t.context)}function vo(t){Ee(!1)}function i2(t){let{basename:e="/",children:n=null,location:r,navigationType:i=dr.Pop,navigator:s,static:o=!1,future:a}=t;Bs()&&Ee(!1);let l=e.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:l,navigator:s,static:o,future:sa({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=zs(r));let{pathname:d="/",search:c="",hash:f="",state:p=null,key:v="default"}=r,_=C.useMemo(()=>{let E=Ss(d,l);return E==null?null:{location:{pathname:E,search:c,hash:f,state:p,key:v},navigationType:i}},[l,d,c,f,p,v,i]);return _==null?null:C.createElement(Wn.Provider,{value:u},C.createElement(wc.Provider,{children:n,value:_}))}function s2(t){let{children:e,location:n}=t;return Vb(wh(e),n)}new Promise(()=>{});function wh(t,e){e===void 0&&(e=[]);let n=[];return C.Children.forEach(t,(r,i)=>{if(!C.isValidElement(r))return;let s=[...e,i];if(r.type===C.Fragment){n.push.apply(n,wh(r.props.children,s));return}r.type!==vo&&Ee(!1),!r.props.index||!r.props.children||Ee(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=wh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tu(){return Tu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Tu.apply(this,arguments)}function yE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function o2(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function a2(t,e){return t.button===0&&(!e||e==="_self")&&!o2(t)}const l2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],u2=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],c2="6";try{window.__reactRouterVersion=c2}catch{}const d2=C.createContext({isTransitioning:!1}),f2="startTransition",y0=Cf[f2];function h2(t){let{basename:e,children:n,future:r,window:i}=t,s=C.useRef();s.current==null&&(s.current=mb({window:i,v5Compat:!0}));let o=s.current,[a,l]=C.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=C.useCallback(c=>{u&&y0?y0(()=>l(c)):l(c)},[l,u]);return C.useLayoutEffect(()=>o.listen(d),[o,d]),C.createElement(i2,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const p2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",m2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vE=C.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:d,unstable_viewTransition:c}=e,f=yE(e,l2),{basename:p}=C.useContext(Wn),v,_=!1;if(typeof u=="string"&&m2.test(u)&&(v=u,p2))try{let y=new URL(window.location.href),w=u.startsWith("//")?new URL(y.protocol+u):new URL(u),T=Ss(w.pathname,p);w.origin===y.origin&&T!=null?u=T+w.search+w.hash:_=!0}catch{}let E=Ub(u,{relative:i}),m=y2(u,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,unstable_viewTransition:c});function h(y){r&&r(y),y.defaultPrevented||m(y)}return C.createElement("a",Tu({},f,{href:v||E,onClick:_||s?r:h,ref:n,target:l}))}),pm=C.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:d}=e,c=yE(e,u2),f=Ec(l,{relative:c.relative}),p=Ws(),v=C.useContext(dE),{navigator:_,basename:E}=C.useContext(Wn),m=v!=null&&v2(f)&&u===!0,h=_.encodeLocation?_.encodeLocation(f).pathname:f.pathname,y=p.pathname,w=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(y=y.toLowerCase(),w=w?w.toLowerCase():null,h=h.toLowerCase()),w&&E&&(w=Ss(w,E)||w);const T=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let S=y===h||!o&&y.startsWith(h)&&y.charAt(T)==="/",x=w!=null&&(w===h||!o&&w.startsWith(h)&&w.charAt(h.length)==="/"),k={isActive:S,isPending:x,isTransitioning:m},L=S?r:void 0,F;typeof s=="function"?F=s(k):F=[s,S?"active":null,x?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let B=typeof a=="function"?a(k):a;return C.createElement(vE,Tu({},c,{"aria-current":L,className:F,ref:n,style:B,to:l,unstable_viewTransition:u}),typeof d=="function"?d(k):d)});var Eh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Eh||(Eh={}));var v0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(v0||(v0={}));function g2(t){let e=C.useContext(_c);return e||Ee(!1),e}function y2(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=pE(),u=Ws(),d=Ec(t,{relative:o});return C.useCallback(c=>{if(a2(c,n)){c.preventDefault();let f=r!==void 0?r:Cu(u)===Cu(d);l(t,{replace:f,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,d,r,i,n,t,s,o,a])}function v2(t,e){e===void 0&&(e={});let n=C.useContext(d2);n==null&&Ee(!1);let{basename:r}=g2(Eh.useViewTransitionState),i=Ec(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Ss(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ss(n.nextLocation.pathname,r)||n.nextLocation.pathname;return vh(i.pathname,o)!=null||vh(i.pathname,s)!=null}var _E={exports:{}},_2="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",w2=_2,E2=w2;function wE(){}function EE(){}EE.resetWarningCache=wE;var S2=function(){function t(r,i,s,o,a,l){if(l!==E2){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:EE,resetWarningCache:wE};return n.PropTypes=n,n};_E.exports=S2();var C2=_E.exports;const K=Fs(C2),x2=()=>g.jsxs("svg",{width:"20.000000",height:"20.000000",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[g.jsx("desc",{children:"Created with Pixso."}),g.jsx("defs",{children:g.jsx("clipPath",{id:"clip27_256",children:g.jsx("rect",{id:"log-in-01",width:"20.000000",height:"20.000000",fill:"white",fillOpacity:"0"})})}),g.jsx("rect",{id:"log-in-01",width:"20.000000",height:"20.000000",fill:"#FFFFFF",fillOpacity:"0"}),g.jsxs("g",{clipPath:"url(#clip27_256)",children:[g.jsx("path",{id:"Accent",d:"M12.5 2.5L13.5 2.5C14.9001 2.5 15.6002 2.5 16.135 2.77246C16.6053 3.01221 16.9878 3.39453 17.2275 3.86499C17.5 4.3999 17.5 5.09985 17.5 6.5L17.5 13.5C17.5 14.9001 17.5 15.6001 17.2275 16.135C16.9878 16.6055 16.6053 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5L12.5 17.5",stroke:"#F4C550",strokeOpacity:"1.000000",strokeWidth:"2.000000",strokeLinejoin:"round",strokeLinecap:"round"}),g.jsx("path",{id:"Icon",d:"M8.33337 5.83325L12.5 10L8.33337 14.1665M2.5 10L12.5 10",stroke:"#F4C550",strokeOpacity:"1.000000",strokeWidth:"2.000000",strokeLinejoin:"round"})]})]}),T2=()=>g.jsxs("svg",{width:"28.000000",height:"28.000000",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[g.jsx("desc",{children:"Created with Pixso."}),g.jsx("defs",{children:g.jsx("clipPath",{id:"clip4_550",children:g.jsx("rect",{id:"ukraine",width:"28.000000",height:"28.000000",fill:"white",fillOpacity:"0"})})}),g.jsx("rect",{id:"ukraine",width:"28.000000",height:"28.000000",fill:"#FFFFFF",fillOpacity:"0"}),g.jsxs("g",{clipPath:"url(#clip4_550)",children:[g.jsx("path",{id:"Vector",d:"M28 14C28 21.7319 21.732 28 14 28C6.26801 28 0 21.7319 0 14C0 6.26807 6.26801 0 14 0C21.732 0 28 6.26807 28 14Z",fill:"#FFDA44",fillOpacity:"1.000000",fillRule:"evenodd"}),g.jsx("path",{id:"Vector",d:"M0 14C0 6.26807 6.26807 0 14 0C21.7319 0 28 6.26807 28 14L0 14Z",fill:"#338AF3",fillOpacity:"1.000000",fillRule:"nonzero"})]})]});var lt=function(){return lt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},lt.apply(this,arguments)};function mm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function oa(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var I2=function(e,n,r,i){var s=r?r.call(i,e,n):void 0;if(s!==void 0)return!!s;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;var o=Object.keys(e),a=Object.keys(n);if(o.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(n),u=0;u<o.length;u++){var d=o[u];if(!l(d))return!1;var c=e[d],f=n[d];if(s=r?r.call(i,c,f,d):void 0,s===!1||s===void 0&&c!==f)return!1}return!0};const k2=Fs(I2);var fe="-ms-",No="-moz-",ee="-webkit-",SE="comm",Sc="rule",gm="decl",b2="@import",CE="@keyframes",P2="@layer",xE=Math.abs,ym=String.fromCharCode,Sh=Object.assign;function R2(t,e){return De(t,0)^45?(((e<<2^De(t,0))<<2^De(t,1))<<2^De(t,2))<<2^De(t,3):0}function TE(t){return t.trim()}function Tn(t,e){return(t=e.exec(t))?t[0]:t}function W(t,e,n){return t.replace(e,n)}function Ml(t,e,n){return t.indexOf(e,n)}function De(t,e){return t.charCodeAt(e)|0}function Cs(t,e,n){return t.slice(e,n)}function un(t){return t.length}function IE(t){return t.length}function _o(t,e){return e.push(t),t}function O2(t,e){return t.map(e).join("")}function _0(t,e){return t.filter(function(n){return!Tn(n,e)})}var Cc=1,xs=1,kE=0,Ut=0,Ie=0,Vs="";function xc(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Cc,column:xs,length:o,return:"",siblings:a}}function Zn(t,e){return Sh(xc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Fi(t){for(;t.root;)t=Zn(t.root,{children:[t]});_o(t,t.siblings)}function N2(){return Ie}function A2(){return Ie=Ut>0?De(Vs,--Ut):0,xs--,Ie===10&&(xs=1,Cc--),Ie}function Jt(){return Ie=Ut<kE?De(Vs,Ut++):0,xs++,Ie===10&&(xs=1,Cc++),Ie}function si(){return De(Vs,Ut)}function Fl(){return Ut}function Tc(t,e){return Cs(Vs,t,e)}function Ch(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function L2(t){return Cc=xs=1,kE=un(Vs=t),Ut=0,[]}function D2(t){return Vs="",t}function Bd(t){return TE(Tc(Ut-1,xh(t===91?t+2:t===40?t+1:t)))}function M2(t){for(;(Ie=si())&&Ie<33;)Jt();return Ch(t)>2||Ch(Ie)>3?"":" "}function F2(t,e){for(;--e&&Jt()&&!(Ie<48||Ie>102||Ie>57&&Ie<65||Ie>70&&Ie<97););return Tc(t,Fl()+(e<6&&si()==32&&Jt()==32))}function xh(t){for(;Jt();)switch(Ie){case t:return Ut;case 34:case 39:t!==34&&t!==39&&xh(Ie);break;case 40:t===41&&xh(t);break;case 92:Jt();break}return Ut}function j2(t,e){for(;Jt()&&t+Ie!==57;)if(t+Ie===84&&si()===47)break;return"/*"+Tc(e,Ut-1)+"*"+ym(t===47?t:Jt())}function $2(t){for(;!Ch(si());)Jt();return Tc(t,Ut)}function U2(t){return D2(jl("",null,null,null,[""],t=L2(t),0,[0],t))}function jl(t,e,n,r,i,s,o,a,l){for(var u=0,d=0,c=o,f=0,p=0,v=0,_=1,E=1,m=1,h=0,y="",w=i,T=s,S=r,x=y;E;)switch(v=h,h=Jt()){case 40:if(v!=108&&De(x,c-1)==58){Ml(x+=W(Bd(h),"&","&\f"),"&\f",xE(u?a[u-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:x+=Bd(h);break;case 9:case 10:case 13:case 32:x+=M2(v);break;case 92:x+=F2(Fl()-1,7);continue;case 47:switch(si()){case 42:case 47:_o(z2(j2(Jt(),Fl()),e,n,l),l);break;default:x+="/"}break;case 123*_:a[u++]=un(x)*m;case 125*_:case 59:case 0:switch(h){case 0:case 125:E=0;case 59+d:m==-1&&(x=W(x,/\f/g,"")),p>0&&un(x)-c&&_o(p>32?E0(x+";",r,n,c-1,l):E0(W(x," ","")+";",r,n,c-2,l),l);break;case 59:x+=";";default:if(_o(S=w0(x,e,n,u,d,i,a,y,w=[],T=[],c,s),s),h===123)if(d===0)jl(x,e,S,S,w,s,c,a,T);else switch(f===99&&De(x,3)===110?100:f){case 100:case 108:case 109:case 115:jl(t,S,S,r&&_o(w0(t,S,S,0,0,i,a,y,i,w=[],c,T),T),i,T,c,a,r?w:T);break;default:jl(x,S,S,S,[""],T,0,a,T)}}u=d=p=0,_=m=1,y=x="",c=o;break;case 58:c=1+un(x),p=v;default:if(_<1){if(h==123)--_;else if(h==125&&_++==0&&A2()==125)continue}switch(x+=ym(h),h*_){case 38:m=d>0?1:(x+="\f",-1);break;case 44:a[u++]=(un(x)-1)*m,m=1;break;case 64:si()===45&&(x+=Bd(Jt())),f=si(),d=c=un(y=x+=$2(Fl())),h++;break;case 45:v===45&&un(x)==2&&(_=0)}}return s}function w0(t,e,n,r,i,s,o,a,l,u,d,c){for(var f=i-1,p=i===0?s:[""],v=IE(p),_=0,E=0,m=0;_<r;++_)for(var h=0,y=Cs(t,f+1,f=xE(E=o[_])),w=t;h<v;++h)(w=TE(E>0?p[h]+" "+y:W(y,/&\f/g,p[h])))&&(l[m++]=w);return xc(t,e,n,i===0?Sc:a,l,u,d,c)}function z2(t,e,n,r){return xc(t,e,n,SE,ym(N2()),Cs(t,2,-2),0,r)}function E0(t,e,n,r,i){return xc(t,e,n,gm,Cs(t,0,r),Cs(t,r+1,-1),r,i)}function bE(t,e,n){switch(R2(t,e)){case 5103:return ee+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ee+t+t;case 4789:return No+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ee+t+No+t+fe+t+t;case 5936:switch(De(t,e+11)){case 114:return ee+t+fe+W(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ee+t+fe+W(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ee+t+fe+W(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ee+t+fe+t+t;case 6165:return ee+t+fe+"flex-"+t+t;case 5187:return ee+t+W(t,/(\w+).+(:[^]+)/,ee+"box-$1$2"+fe+"flex-$1$2")+t;case 5443:return ee+t+fe+"flex-item-"+W(t,/flex-|-self/g,"")+(Tn(t,/flex-|baseline/)?"":fe+"grid-row-"+W(t,/flex-|-self/g,""))+t;case 4675:return ee+t+fe+"flex-line-pack"+W(t,/align-content|flex-|-self/g,"")+t;case 5548:return ee+t+fe+W(t,"shrink","negative")+t;case 5292:return ee+t+fe+W(t,"basis","preferred-size")+t;case 6060:return ee+"box-"+W(t,"-grow","")+ee+t+fe+W(t,"grow","positive")+t;case 4554:return ee+W(t,/([^-])(transform)/g,"$1"+ee+"$2")+t;case 6187:return W(W(W(t,/(zoom-|grab)/,ee+"$1"),/(image-set)/,ee+"$1"),t,"")+t;case 5495:case 3959:return W(t,/(image-set\([^]*)/,ee+"$1$`$1");case 4968:return W(W(t,/(.+:)(flex-)?(.*)/,ee+"box-pack:$3"+fe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ee+t+t;case 4200:if(!Tn(t,/flex-|baseline/))return fe+"grid-column-align"+Cs(t,e)+t;break;case 2592:case 3360:return fe+W(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Tn(r.props,/grid-\w+-end/)})?~Ml(t+(n=n[e].value),"span",0)?t:fe+W(t,"-start","")+t+fe+"grid-row-span:"+(~Ml(n,"span",0)?Tn(n,/\d+/):+Tn(n,/\d+/)-+Tn(t,/\d+/))+";":fe+W(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Tn(r.props,/grid-\w+-start/)})?t:fe+W(W(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return W(t,/(.+)-inline(.+)/,ee+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(un(t)-1-e>6)switch(De(t,e+1)){case 109:if(De(t,e+4)!==45)break;case 102:return W(t,/(.+:)(.+)-([^]+)/,"$1"+ee+"$2-$3$1"+No+(De(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Ml(t,"stretch",0)?bE(W(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return W(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return fe+i+":"+s+u+(o?fe+i+"-span:"+(a?l:+l-+s)+u:"")+t});case 4949:if(De(t,e+6)===121)return W(t,":",":"+ee)+t;break;case 6444:switch(De(t,De(t,14)===45?18:11)){case 120:return W(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ee+(De(t,14)===45?"inline-":"")+"box$3$1"+ee+"$2$3$1"+fe+"$2box$3")+t;case 100:return W(t,":",":"+fe)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return W(t,"scroll-","scroll-snap-")+t}return t}function Iu(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function B2(t,e,n,r){switch(t.type){case P2:if(t.children.length)break;case b2:case gm:return t.return=t.return||t.value;case SE:return"";case CE:return t.return=t.value+"{"+Iu(t.children,r)+"}";case Sc:if(!un(t.value=t.props.join(",")))return""}return un(n=Iu(t.children,r))?t.return=t.value+"{"+n+"}":""}function W2(t){var e=IE(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function V2(t){return function(e){e.root||(e=e.return)&&t(e)}}function H2(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case gm:t.return=bE(t.value,t.length,n);return;case CE:return Iu([Zn(t,{value:W(t.value,"@","@"+ee)})],r);case Sc:if(t.length)return O2(n=t.props,function(i){switch(Tn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Fi(Zn(t,{props:[W(i,/:(read-\w+)/,":"+No+"$1")]})),Fi(Zn(t,{props:[i]})),Sh(t,{props:_0(n,r)});break;case"::placeholder":Fi(Zn(t,{props:[W(i,/:(plac\w+)/,":"+ee+"input-$1")]})),Fi(Zn(t,{props:[W(i,/:(plac\w+)/,":"+No+"$1")]})),Fi(Zn(t,{props:[W(i,/:(plac\w+)/,fe+"input-$1")]})),Fi(Zn(t,{props:[i]})),Sh(t,{props:_0(n,r)});break}return""})}}var G2={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},vt={},Ts=typeof process<"u"&&vt!==void 0&&(vt.REACT_APP_SC_ATTR||vt.SC_ATTR)||"data-styled",PE="active",RE="data-styled-version",Ic="6.1.8",vm=`/*!sc*/
`,_m=typeof window<"u"&&"HTMLElement"in window,K2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&vt!==void 0&&vt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&vt.REACT_APP_SC_DISABLE_SPEEDY!==""?vt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&vt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&vt!==void 0&&vt.SC_DISABLE_SPEEDY!==void 0&&vt.SC_DISABLE_SPEEDY!==""&&vt.SC_DISABLE_SPEEDY!=="false"&&vt.SC_DISABLE_SPEEDY),kc=Object.freeze([]),Is=Object.freeze({});function q2(t,e,n){return n===void 0&&(n=Is),t.theme!==n.theme&&t.theme||e||n.theme}var OE=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Y2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Q2=/(^-|-$)/g;function S0(t){return t.replace(Y2,"-").replace(Q2,"")}var X2=/(a)(d)/gi,fl=52,C0=function(t){return String.fromCharCode(t+(t>25?39:97))};function Th(t){var e,n="";for(e=Math.abs(t);e>fl;e=e/fl|0)n=C0(e%fl)+n;return(C0(e%fl)+n).replace(X2,"$1-$2")}var Wd,NE=5381,Ji=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},AE=function(t){return Ji(NE,t)};function LE(t){return Th(AE(t)>>>0)}function J2(t){return t.displayName||t.name||"Component"}function Vd(t){return typeof t=="string"&&!0}var DE=typeof Symbol=="function"&&Symbol.for,ME=DE?Symbol.for("react.memo"):60115,Z2=DE?Symbol.for("react.forward_ref"):60112,eP={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},tP={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},FE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},nP=((Wd={})[Z2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Wd[ME]=FE,Wd);function x0(t){return("type"in(e=t)&&e.type.$$typeof)===ME?FE:"$$typeof"in t?nP[t.$$typeof]:eP;var e}var rP=Object.defineProperty,iP=Object.getOwnPropertyNames,T0=Object.getOwnPropertySymbols,sP=Object.getOwnPropertyDescriptor,oP=Object.getPrototypeOf,I0=Object.prototype;function jE(t,e,n){if(typeof e!="string"){if(I0){var r=oP(e);r&&r!==I0&&jE(t,r,n)}var i=iP(e);T0&&(i=i.concat(T0(e)));for(var s=x0(t),o=x0(e),a=0;a<i.length;++a){var l=i[a];if(!(l in tP||n&&n[l]||o&&l in o||s&&l in s)){var u=sP(e,l);try{rP(t,l,u)}catch{}}}}return t}function ks(t){return typeof t=="function"}function wm(t){return typeof t=="object"&&"styledComponentId"in t}function ei(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Ih(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function aa(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function kh(t,e,n){if(n===void 0&&(n=!1),!n&&!aa(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=kh(t[r],e[r]);else if(aa(e))for(var r in e)t[r]=kh(t[r],e[r]);return t}function Em(t,e){Object.defineProperty(t,"toString",{value:e})}function Oa(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var aP=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Oa(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(vm);return n},t}(),$l=new Map,ku=new Map,Ul=1,hl=function(t){if($l.has(t))return $l.get(t);for(;ku.has(Ul);)Ul++;var e=Ul++;return $l.set(t,e),ku.set(e,t),e},lP=function(t,e){Ul=e+1,$l.set(t,e),ku.set(e,t)},uP="style[".concat(Ts,"][").concat(RE,'="').concat(Ic,'"]'),cP=new RegExp("^".concat(Ts,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),dP=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},fP=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(vm),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(cP);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(lP(d,u),dP(t,d,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function hP(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var $E=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Ts,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ts,PE),r.setAttribute(RE,Ic);var o=hP();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},pP=function(){function t(e){this.element=$E(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Oa(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),mP=function(){function t(e){this.element=$E(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),gP=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),k0=_m,yP={isServer:!_m,useCSSOMInjection:!K2},UE=function(){function t(e,n,r){e===void 0&&(e=Is),n===void 0&&(n={});var i=this;this.options=lt(lt({},yP),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&_m&&k0&&(k0=!1,function(s){for(var o=document.querySelectorAll(uP),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Ts)!==PE&&(fP(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Em(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(c){var f=function(m){return ku.get(m)}(c);if(f===void 0)return"continue";var p=s.names.get(f),v=o.getGroup(c);if(p===void 0||v.length===0)return"continue";var _="".concat(Ts,".g").concat(c,'[id="').concat(f,'"]'),E="";p!==void 0&&p.forEach(function(m){m.length>0&&(E+="".concat(m,","))}),l+="".concat(v).concat(_,'{content:"').concat(E,'"}').concat(vm)},d=0;d<a;d++)u(d);return l}(i)})}return t.registerId=function(e){return hl(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(lt(lt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new gP(i):r?new pP(i):new mP(i)}(this.options),new aP(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(hl(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(hl(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(hl(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),vP=/&/g,_P=/^\s*\/\/.*$/gm;function zE(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=zE(n.children,e)),n})}function BE(t){var e,n,r,i=t===void 0?Is:t,s=i.options,o=s===void 0?Is:s,a=i.plugins,l=a===void 0?kc:a,u=function(f,p,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(e):f},d=l.slice();d.push(function(f){f.type===Sc&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(vP,n).replace(r,u))}),o.prefix&&d.push(H2),d.push(B2);var c=function(f,p,v,_){p===void 0&&(p=""),v===void 0&&(v=""),_===void 0&&(_="&"),e=_,n=p,r=new RegExp("\\".concat(n,"\\b"),"g");var E=f.replace(_P,""),m=U2(v||p?"".concat(v," ").concat(p," { ").concat(E," }"):E);o.namespace&&(m=zE(m,o.namespace));var h=[];return Iu(m,W2(d.concat(V2(function(y){return h.push(y)})))),h};return c.hash=l.length?l.reduce(function(f,p){return p.name||Oa(15),Ji(f,p.name)},NE).toString():"",c}var wP=new UE,bh=BE(),Sm=gn.createContext({shouldForwardProp:void 0,styleSheet:wP,stylis:bh});Sm.Consumer;var EP=gn.createContext(void 0);function Ph(){return C.useContext(Sm)}function SP(t){var e=C.useState(t.stylisPlugins),n=e[0],r=e[1],i=Ph().styleSheet,s=C.useMemo(function(){var l=i;return t.sheet?l=t.sheet:t.target&&(l=l.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(l=l.reconstructWithOptions({useCSSOMInjection:!1})),l},[t.disableCSSOMInjection,t.sheet,t.target,i]),o=C.useMemo(function(){return BE({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:n})},[t.enableVendorPrefixes,t.namespace,n]);C.useEffect(function(){k2(n,t.stylisPlugins)||r(t.stylisPlugins)},[t.stylisPlugins]);var a=C.useMemo(function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:s,stylis:o}},[t.shouldForwardProp,s,o]);return gn.createElement(Sm.Provider,{value:a},gn.createElement(EP.Provider,{value:o},t.children))}var WE=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=bh);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Em(this,function(){throw Oa(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=bh),this.name+e.hash},t}(),CP=function(t){return t>="A"&&t<="Z"};function b0(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;CP(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var VE=function(t){return t==null||t===!1||t===""},HE=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!VE(s)&&(Array.isArray(s)&&s.isCss||ks(s)?r.push("".concat(b0(i),":"),s,";"):aa(s)?r.push.apply(r,oa(oa(["".concat(i," {")],HE(s),!1),["}"],!1)):r.push("".concat(b0(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in G2||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function oi(t,e,n,r){if(VE(t))return[];if(wm(t))return[".".concat(t.styledComponentId)];if(ks(t)){if(!ks(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return oi(i,e,n,r)}var s;return t instanceof WE?n?(t.inject(n,r),[t.getName(r)]):[t]:aa(t)?HE(t):Array.isArray(t)?Array.prototype.concat.apply(kc,t.map(function(o){return oi(o,e,n,r)})):[t.toString()]}function xP(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ks(n)&&!wm(n))return!1}return!0}var TP=AE(Ic),IP=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&xP(e),this.componentId=n,this.baseHash=Ji(TP,n),this.baseStyle=r,UE.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ei(i,this.staticRulesId);else{var s=Ih(oi(this.rules,e,n,r)),o=Th(Ji(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=ei(i,o),this.staticRulesId=o}else{for(var l=Ji(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var c=this.rules[d];if(typeof c=="string")u+=c;else if(c){var f=Ih(oi(c,e,n,r));l=Ji(l,f+d),u+=f}}if(u){var p=Th(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,r(u,".".concat(p),void 0,this.componentId)),i=ei(i,p)}}return i},t}(),GE=gn.createContext(void 0);GE.Consumer;var Hd={};function kP(t,e,n){var r=wm(t),i=t,s=!Vd(t),o=e.attrs,a=o===void 0?kc:o,l=e.componentId,u=l===void 0?function(w,T){var S=typeof w!="string"?"sc":S0(w);Hd[S]=(Hd[S]||0)+1;var x="".concat(S,"-").concat(LE(Ic+S+Hd[S]));return T?"".concat(T,"-").concat(x):x}(e.displayName,e.parentComponentId):l,d=e.displayName,c=d===void 0?function(w){return Vd(w)?"styled.".concat(w):"Styled(".concat(J2(w),")")}(t):d,f=e.displayName&&e.componentId?"".concat(S0(e.displayName),"-").concat(e.componentId):e.componentId||u,p=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,v=e.shouldForwardProp;if(r&&i.shouldForwardProp){var _=i.shouldForwardProp;if(e.shouldForwardProp){var E=e.shouldForwardProp;v=function(w,T){return _(w,T)&&E(w,T)}}else v=_}var m=new IP(n,f,r?i.componentStyle:void 0);function h(w,T){return function(S,x,k){var L=S.attrs,F=S.componentStyle,B=S.defaultProps,Nt=S.foldedComponentIds,ae=S.styledComponentId,gt=S.target,_n=gn.useContext(GE),Wr=Ph(),wn=S.shouldForwardProp||Wr.shouldForwardProp,O=q2(x,_n,B)||Is,M=function(Ze,He,yt){for(var Yn,rn=lt(lt({},He),{className:void 0,theme:yt}),Di=0;Di<Ze.length;Di+=1){var Qn=ks(Yn=Ze[Di])?Yn(rn):Yn;for(var sn in Qn)rn[sn]=sn==="className"?ei(rn[sn],Qn[sn]):sn==="style"?lt(lt({},rn[sn]),Qn[sn]):Qn[sn]}return He.className&&(rn.className=ei(rn.className,He.className)),rn}(L,x,O),U=M.as||gt,J={};for(var Q in M)M[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"&&M.theme===O||(Q==="forwardedAs"?J.as=M.forwardedAs:wn&&!wn(Q,U)||(J[Q]=M[Q]));var nn=function(Ze,He){var yt=Ph(),Yn=Ze.generateAndInjectStyles(He,yt.styleSheet,yt.stylis);return Yn}(F,M),Je=ei(Nt,ae);return nn&&(Je+=" "+nn),M.className&&(Je+=" "+M.className),J[Vd(U)&&!OE.has(U)?"class":"className"]=Je,J.ref=k,C.createElement(U,J)}(y,w,T)}h.displayName=c;var y=gn.forwardRef(h);return y.attrs=p,y.componentStyle=m,y.displayName=c,y.shouldForwardProp=v,y.foldedComponentIds=r?ei(i.foldedComponentIds,i.styledComponentId):"",y.styledComponentId=f,y.target=r?i.target:t,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(T){for(var S=[],x=1;x<arguments.length;x++)S[x-1]=arguments[x];for(var k=0,L=S;k<L.length;k++)kh(T,L[k],!0);return T}({},i.defaultProps,w):w}}),Em(y,function(){return".".concat(y.styledComponentId)}),s&&jE(y,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function P0(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var R0=function(t){return Object.assign(t,{isCss:!0})};function bs(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(ks(t)||aa(t))return R0(oi(P0(kc,oa([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?oi(r):R0(oi(P0(r,e)))}function Rh(t,e,n){if(n===void 0&&(n=Is),!e)throw Oa(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,bs.apply(void 0,oa([i],s,!1)))};return r.attrs=function(i){return Rh(t,e,lt(lt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Rh(t,e,lt(lt({},n),i))},r}var KE=function(t){return Rh(kP,t)},P=KE;OE.forEach(function(t){P[t]=KE(t)});function bc(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Ih(bs.apply(void 0,oa([t],e,!1))),i=LE(r);return new WE(i,r)}const ge={WHITE:"#FFFFFF",YELLOW:"#F4C550",LIGHT_YELLOW:"#FBE9BA",GREEN:"#9FBAAE",LIGHT_GREEN:"#CBDED3",BLUE:"#9FB7CE",LIGHT:"#BFD6EA",PEACH:"#F0AA8D",LIGHT_PEACH:"#F4C8BA",ROSE:"#E0A39A",LIGHT_ROSE:"#F2C0BD",BLACK_TEXT:"#121417",LIGHT_BLACK_TEXT:"rgba(18, 20, 23, 0.2)",YELLOW_BUTTON:"#F4C550",YELLOW_HOVER_BUTTON:"#FFDC86",GREY_LABEL:"#8A8A89",SILVER_BACKGROUND:"#F8F8F8"},bP=P(pm)`
  height: 28px;
`,PP=P.header`
  max-width: 1184px;
  //height: 48px;
  margin: 0 auto;
  display: flex;
  gap: 28px;
  padding: 20px 64px;
  justify-content: center;
`,RP=P(pm)`
  color: rgb(18, 20, 23);
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.333px;
`,OP=P.div`
  height: 48px;
  display: flex;
  align-items: center;
  gap: 8px;
`,Gd=P(pm)`
  color: ${ge.BLACK_TEXT};
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  max-width: 66px;
  &.active {
    font-weight: 500;
  }
`,NP=P.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,AP=P.button`
  height: 48px;
  max-width: 73px;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${ge.BLACK_TEXT};
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  font-family: Roboto;
  white-space: nowrap;
  cursor: pointer;
`,LP=P.button`
  height: 48px;
  max-width: 166px;
  border: none;
  border-radius: 12px;
  background: rgb(18, 20, 23);
  color: ${ge.WHITE};
  font-family: Roboto;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
  padding: 14px 39px 14px 39px;
`,DP=P.span`
  max-width: 20px;
  height: 20px;
`,MP=P.div`
  display: flex;
  gap: 390px;
  align-items: center;
`,FP=P.div`
  display: flex;
  gap: 268px;
  align-items: center;
`;var qE={exports:{}},YE={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Na=C;function jP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $P=typeof Object.is=="function"?Object.is:jP,UP=Na.useSyncExternalStore,zP=Na.useRef,BP=Na.useEffect,WP=Na.useMemo,VP=Na.useDebugValue;YE.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=zP(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=WP(function(){function l(p){if(!u){if(u=!0,d=p,p=r(p),i!==void 0&&o.hasValue){var v=o.value;if(i(v,p))return c=v}return c=p}if(v=c,$P(d,p))return v;var _=r(p);return i!==void 0&&i(v,_)?v:(d=p,c=_)}var u=!1,d,c,f=n===void 0?null:n;return[function(){return l(e())},f===null?void 0:function(){return l(f())}]},[e,n,r,i]);var a=UP(t,s[0],s[1]);return BP(function(){o.hasValue=!0,o.value=a},[a]),VP(a),a};qE.exports=YE;var HP=qE.exports,Et="default"in Cf?gn:Cf,O0=Symbol.for("react-redux-context"),N0=typeof globalThis<"u"?globalThis:{};function GP(){if(!Et.createContext)return{};const t=N0[O0]??(N0[O0]=new Map);let e=t.get(Et.createContext);return e||(e=Et.createContext(null),t.set(Et.createContext,e)),e}var Rr=GP(),KP=()=>{throw new Error("uSES not initialized!")};function Cm(t=Rr){return function(){return Et.useContext(t)}}var QE=Cm(),XE=KP,qP=t=>{XE=t},YP=(t,e)=>t===e;function QP(t=Rr){const e=t===Rr?QE:Cm(t),n=(r,i={})=>{const{equalityFn:s=YP,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:l,getServerState:u,stabilityCheck:d,identityFunctionCheck:c}=e();Et.useRef(!0);const f=Et.useCallback({[r.name](v){return r(v)}}[r.name],[r,d,o.stabilityCheck]),p=XE(l.addNestedSub,a.getState,u||a.getState,f,s);return Et.useDebugValue(p),p};return Object.assign(n,{withTypes:()=>n}),n}var Pc=QP();function XP(t){t()}function JP(){let t=null,e=null;return{clear(){t=null,e=null},notify(){XP(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var A0={notify(){},get:()=>[]};function ZP(t,e){let n,r=A0,i=0,s=!1;function o(_){d();const E=r.subscribe(_);let m=!1;return()=>{m||(m=!0,E(),c())}}function a(){r.notify()}function l(){v.onStateChange&&v.onStateChange()}function u(){return s}function d(){i++,n||(n=e?e.addNestedSub(l):t.subscribe(l),r=JP())}function c(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=A0)}function f(){s||(s=!0,d())}function p(){s&&(s=!1,c())}const v={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:f,tryUnsubscribe:p,getListeners:()=>r};return v}var eR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",tR=eR?Et.useLayoutEffect:Et.useEffect;function nR({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=Et.useMemo(()=>{const u=ZP(t);return{store:t,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[t,r,i,s]),a=Et.useMemo(()=>t.getState(),[t]);tR(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==t.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const l=e||Rr;return Et.createElement(l.Provider,{value:o},n)}var rR=nR;function JE(t=Rr){const e=t===Rr?QE:Cm(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var iR=JE();function sR(t=Rr){const e=t===Rr?iR:JE(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var Hs=sR();qP(HP.useSyncExternalStoreWithSelector);const xm=()=>{const{name:t,email:e,token:n,id:r,isLoggedIn:i,isRefreshing:s}=Pc(o=>o.auth);return{isRefreshing:s,isLoggedIn:i,email:e,token:n,name:t,id:r}};function $e(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var oR=typeof Symbol=="function"&&Symbol.observable||"@@observable",L0=oR,Kd=()=>Math.random().toString(36).substring(7).split("").join("."),aR={INIT:`@@redux/INIT${Kd()}`,REPLACE:`@@redux/REPLACE${Kd()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Kd()}`},bu=aR;function Tm(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function Im(t,e,n){if(typeof t!="function")throw new Error($e(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error($e(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error($e(1));return n(Im)(t,e)}let r=t,i=e,s=new Map,o=s,a=0,l=!1;function u(){o===s&&(o=new Map,s.forEach((E,m)=>{o.set(m,E)}))}function d(){if(l)throw new Error($e(3));return i}function c(E){if(typeof E!="function")throw new Error($e(4));if(l)throw new Error($e(5));let m=!0;u();const h=a++;return o.set(h,E),function(){if(m){if(l)throw new Error($e(6));m=!1,u(),o.delete(h),s=null}}}function f(E){if(!Tm(E))throw new Error($e(7));if(typeof E.type>"u")throw new Error($e(8));if(typeof E.type!="string")throw new Error($e(17));if(l)throw new Error($e(9));try{l=!0,i=r(i,E)}finally{l=!1}return(s=o).forEach(h=>{h()}),E}function p(E){if(typeof E!="function")throw new Error($e(10));r=E,f({type:bu.REPLACE})}function v(){const E=c;return{subscribe(m){if(typeof m!="object"||m===null)throw new Error($e(11));function h(){const w=m;w.next&&w.next(d())}return h(),{unsubscribe:E(h)}},[L0](){return this}}}return f({type:bu.INIT}),{dispatch:f,subscribe:c,getState:d,replaceReducer:p,[L0]:v}}function lR(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:bu.INIT})>"u")throw new Error($e(12));if(typeof n(void 0,{type:bu.PROBE_UNKNOWN_ACTION()})>"u")throw new Error($e(13))})}function ZE(t){const e=Object.keys(t),n={};for(let s=0;s<e.length;s++){const o=e[s];typeof t[o]=="function"&&(n[o]=t[o])}const r=Object.keys(n);let i;try{lR(n)}catch(s){i=s}return function(o={},a){if(i)throw i;let l=!1;const u={};for(let d=0;d<r.length;d++){const c=r[d],f=n[c],p=o[c],v=f(p,a);if(typeof v>"u")throw a&&a.type,new Error($e(14));u[c]=v,l=l||v!==p}return l=l||r.length!==Object.keys(o).length,l?u:o}}function Pu(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function uR(...t){return e=>(n,r)=>{const i=e(n,r);let s=()=>{throw new Error($e(15))};const o={getState:i.getState,dispatch:(l,...u)=>s(l,...u)},a=t.map(l=>l(o));return s=Pu(...a)(i.dispatch),{...i,dispatch:s}}}function cR(t){return Tm(t)&&"type"in t&&typeof t.type=="string"}var eS=Symbol.for("immer-nothing"),D0=Symbol.for("immer-draftable"),kt=Symbol.for("immer-state");function Gt(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var Ps=Object.getPrototypeOf;function Or(t){return!!t&&!!t[kt]}function $n(t){var e;return t?tS(t)||Array.isArray(t)||!!t[D0]||!!((e=t.constructor)!=null&&e[D0])||Oc(t)||Nc(t):!1}var dR=Object.prototype.constructor.toString();function tS(t){if(!t||typeof t!="object")return!1;const e=Ps(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===dR}function la(t,e){Rc(t)===0?Object.entries(t).forEach(([n,r])=>{e(n,r,t)}):t.forEach((n,r)=>e(r,n,t))}function Rc(t){const e=t[kt];return e?e.type_:Array.isArray(t)?1:Oc(t)?2:Nc(t)?3:0}function Oh(t,e){return Rc(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function nS(t,e,n){const r=Rc(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function fR(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function Oc(t){return t instanceof Map}function Nc(t){return t instanceof Set}function Kr(t){return t.copy_||t.base_}function Nh(t,e){if(Oc(t))return new Map(t);if(Nc(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);if(!e&&tS(t))return Ps(t)?{...t}:Object.assign(Object.create(null),t);const n=Object.getOwnPropertyDescriptors(t);delete n[kt];let r=Reflect.ownKeys(n);for(let i=0;i<r.length;i++){const s=r[i],o=n[s];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(n[s]={configurable:!0,writable:!0,enumerable:o.enumerable,value:t[s]})}return Object.create(Ps(t),n)}function km(t,e=!1){return Ac(t)||Or(t)||!$n(t)||(Rc(t)>1&&(t.set=t.add=t.clear=t.delete=hR),Object.freeze(t),e&&la(t,(n,r)=>km(r,!0))),t}function hR(){Gt(2)}function Ac(t){return Object.isFrozen(t)}var pR={};function mi(t){const e=pR[t];return e||Gt(0,t),e}var ua;function rS(){return ua}function mR(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function M0(t,e){e&&(mi("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function Ah(t){Lh(t),t.drafts_.forEach(gR),t.drafts_=null}function Lh(t){t===ua&&(ua=t.parent_)}function F0(t){return ua=mR(ua,t)}function gR(t){const e=t[kt];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function j0(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[kt].modified_&&(Ah(e),Gt(4)),$n(t)&&(t=Ru(e,t),e.parent_||Ou(e,t)),e.patches_&&mi("Patches").generateReplacementPatches_(n[kt].base_,t,e.patches_,e.inversePatches_)):t=Ru(e,n,[]),Ah(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==eS?t:void 0}function Ru(t,e,n){if(Ac(e))return e;const r=e[kt];if(!r)return la(e,(i,s)=>$0(t,r,e,i,s,n)),e;if(r.scope_!==t)return e;if(!r.modified_)return Ou(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let s=i,o=!1;r.type_===3&&(s=new Set(i),i.clear(),o=!0),la(s,(a,l)=>$0(t,r,i,a,l,n,o)),Ou(t,i,!1),n&&t.patches_&&mi("Patches").generatePatches_(r,n,t.patches_,t.inversePatches_)}return r.copy_}function $0(t,e,n,r,i,s,o){if(Or(i)){const a=s&&e&&e.type_!==3&&!Oh(e.assigned_,r)?s.concat(r):void 0,l=Ru(t,i,a);if(nS(n,r,l),Or(l))t.canAutoFreeze_=!1;else return}else o&&n.add(i);if($n(i)&&!Ac(i)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;Ru(t,i),(!e||!e.scope_.parent_)&&Ou(t,i)}}function Ou(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&km(e,n)}function yR(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:rS(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,s=bm;n&&(i=[r],s=ca);const{revoke:o,proxy:a}=Proxy.revocable(i,s);return r.draft_=a,r.revoke_=o,a}var bm={get(t,e){if(e===kt)return t;const n=Kr(t);if(!Oh(n,e))return vR(t,n,e);const r=n[e];return t.finalized_||!$n(r)?r:r===qd(t.base_,e)?(Yd(t),t.copy_[e]=Mh(r,t)):r},has(t,e){return e in Kr(t)},ownKeys(t){return Reflect.ownKeys(Kr(t))},set(t,e,n){const r=iS(Kr(t),e);if(r!=null&&r.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=qd(Kr(t),e),s=i==null?void 0:i[kt];if(s&&s.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(fR(n,i)&&(n!==void 0||Oh(t.base_,e)))return!0;Yd(t),Dh(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return qd(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,Yd(t),Dh(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=Kr(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){Gt(11)},getPrototypeOf(t){return Ps(t.base_)},setPrototypeOf(){Gt(12)}},ca={};la(bm,(t,e)=>{ca[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});ca.deleteProperty=function(t,e){return ca.set.call(this,t,e,void 0)};ca.set=function(t,e,n){return bm.set.call(this,t[0],e,n,t[0])};function qd(t,e){const n=t[kt];return(n?Kr(n):t)[e]}function vR(t,e,n){var i;const r=iS(e,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(t.draft_):void 0}function iS(t,e){if(!(e in t))return;let n=Ps(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Ps(n)}}function Dh(t){t.modified_||(t.modified_=!0,t.parent_&&Dh(t.parent_))}function Yd(t){t.copy_||(t.copy_=Nh(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var _R=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const s=n;n=e;const o=this;return function(l=s,...u){return o.produce(l,d=>n.call(this,d,...u))}}typeof n!="function"&&Gt(6),r!==void 0&&typeof r!="function"&&Gt(7);let i;if($n(e)){const s=F0(this),o=Mh(e,void 0);let a=!0;try{i=n(o),a=!1}finally{a?Ah(s):Lh(s)}return M0(s,r),j0(i,s)}else if(!e||typeof e!="object"){if(i=n(e),i===void 0&&(i=e),i===eS&&(i=void 0),this.autoFreeze_&&km(i,!0),r){const s=[],o=[];mi("Patches").generateReplacementPatches_(e,i,s,o),r(s,o)}return i}else Gt(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(o,...a)=>this.produceWithPatches(o,l=>e(l,...a));let r,i;return[this.produce(e,n,(o,a)=>{r=o,i=a}),r,i]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){$n(t)||Gt(8),Or(t)&&(t=sS(t));const e=F0(this),n=Mh(t,void 0);return n[kt].isManual_=!0,Lh(e),n}finishDraft(t,e){const n=t&&t[kt];(!n||!n.isManual_)&&Gt(9);const{scope_:r}=n;return M0(r,e),j0(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=mi("Patches").applyPatches_;return Or(t)?r(t,e):this.produce(t,i=>r(i,e))}};function Mh(t,e){const n=Oc(t)?mi("MapSet").proxyMap_(t,e):Nc(t)?mi("MapSet").proxySet_(t,e):yR(t,e);return(e?e.scope_:rS()).drafts_.push(n),n}function sS(t){return Or(t)||Gt(10,t),oS(t)}function oS(t){if(!$n(t)||Ac(t))return t;const e=t[kt];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=Nh(t,e.scope_.immer_.useStrictShallowCopy_)}else n=Nh(t,!0);return la(n,(r,i)=>{nS(n,r,oS(i))}),e&&(e.finalized_=!1),n}var bt=new _R,aS=bt.produce;bt.produceWithPatches.bind(bt);bt.setAutoFreeze.bind(bt);bt.setUseStrictShallowCopy.bind(bt);bt.applyPatches.bind(bt);bt.createDraft.bind(bt);bt.finishDraft.bind(bt);function wR(t,e=`expected a function, instead received ${typeof t}`){if(typeof t!="function")throw new TypeError(e)}function ER(t,e=`expected an object, instead received ${typeof t}`){if(typeof t!="object")throw new TypeError(e)}function SR(t,e="expected all items to be functions, instead received the following types: "){if(!t.every(n=>typeof n=="function")){const n=t.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${e}[${n}]`)}}var U0=t=>Array.isArray(t)?t:[t];function CR(t){const e=Array.isArray(t[0])?t[0]:t;return SR(e,"createSelector expects all input-selectors to be functions, but received the following types: "),e}function xR(t,e){const n=[],{length:r}=t;for(let i=0;i<r;i++)n.push(t[i].apply(null,e));return n}var TR=class{constructor(t){this.value=t}deref(){return this.value}},IR=typeof WeakRef<"u"?WeakRef:TR,kR=0,z0=1;function pl(){return{s:kR,v:void 0,o:null,p:null}}function Pm(t,e={}){let n=pl();const{resultEqualityCheck:r}=e;let i,s=0;function o(){var c;let a=n;const{length:l}=arguments;for(let f=0,p=l;f<p;f++){const v=arguments[f];if(typeof v=="function"||typeof v=="object"&&v!==null){let _=a.o;_===null&&(a.o=_=new WeakMap);const E=_.get(v);E===void 0?(a=pl(),_.set(v,a)):a=E}else{let _=a.p;_===null&&(a.p=_=new Map);const E=_.get(v);E===void 0?(a=pl(),_.set(v,a)):a=E}}const u=a;let d;if(a.s===z0?d=a.v:(d=t.apply(null,arguments),s++),u.s=z0,r){const f=((c=i==null?void 0:i.deref)==null?void 0:c.call(i))??i;f!=null&&r(f,d)&&(d=f,s!==0&&s--),i=typeof d=="object"&&d!==null||typeof d=="function"?new IR(d):d}return u.v=d,d}return o.clearCache=()=>{n=pl(),o.resetResultsCount()},o.resultsCount=()=>s,o.resetResultsCount=()=>{s=0},o}function lS(t,...e){const n=typeof t=="function"?{memoize:t,memoizeOptions:e}:t,r=(...i)=>{let s=0,o=0,a,l={},u=i.pop();typeof u=="object"&&(l=u,u=i.pop()),wR(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const d={...n,...l},{memoize:c,memoizeOptions:f=[],argsMemoize:p=Pm,argsMemoizeOptions:v=[],devModeChecks:_={}}=d,E=U0(f),m=U0(v),h=CR(i),y=c(function(){return s++,u.apply(null,arguments)},...E),w=p(function(){o++;const S=xR(h,arguments);return a=y.apply(null,S),a},...m);return Object.assign(w,{resultFunc:u,memoizedResultFunc:y,dependencies:h,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>a,recomputations:()=>s,resetRecomputations:()=>{s=0},memoize:c,argsMemoize:p})};return Object.assign(r,{withTypes:()=>r}),r}var bR=lS(Pm),PR=Object.assign((t,e=bR)=>{ER(t,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof t}`);const n=Object.keys(t),r=n.map(s=>t[s]);return e(r,(...s)=>s.reduce((o,a,l)=>(o[n[l]]=a,o),{}))},{withTypes:()=>PR});function uS(t){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,t):i(s)}var RR=uS(),OR=uS,NR=(...t)=>{const e=lS(...t),n=Object.assign((...r)=>{const i=e(...r),s=(o,...a)=>i(Or(o)?sS(o):o,...a);return Object.assign(s,i),s},{withTypes:()=>n});return n};NR(Pm);var AR=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Pu:Pu.apply(null,arguments)},LR=t=>t&&typeof t.match=="function";function An(t,e){function n(...r){if(e){let i=e(...r);if(!i)throw new Error(ht(0));return{type:t,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>cR(r)&&r.type===t,n}var cS=class wo extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,wo.prototype)}static get[Symbol.species](){return wo}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new wo(...e[0].concat(this)):new wo(...e.concat(this))}};function B0(t){return $n(t)?aS(t,()=>{}):t}function W0(t,e,n){if(t.has(e)){let i=t.get(e);return n.update&&(i=n.update(i,e,t),t.set(e,i)),i}if(!n.insert)throw new Error(ht(10));const r=n.insert(e,t);return t.set(e,r),r}function DR(t){return typeof t=="boolean"}var MR=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=e??{};let o=new cS;return n&&(DR(n)?o.push(RR):o.push(OR(n.extraArgument))),o},FR="RTK_autoBatch",dS=t=>e=>{setTimeout(e,t)},jR=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:dS(10),$R=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let i=!0,s=!1,o=!1;const a=new Set,l=t.type==="tick"?queueMicrotask:t.type==="raf"?jR:t.type==="callback"?t.queueNotification:dS(t.timeout),u=()=>{o=!1,s&&(s=!1,a.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const c=()=>i&&d(),f=r.subscribe(c);return a.add(d),()=>{f(),a.delete(d)}},dispatch(d){var c;try{return i=!((c=d==null?void 0:d.meta)!=null&&c[FR]),s=!i,s&&(o||(o=!0,l(u))),r.dispatch(d)}finally{i=!0}}})},UR=t=>function(n){const{autoBatch:r=!0}=n??{};let i=new cS(t);return r&&i.push($R(typeof r=="object"?r:void 0)),i},zR=!0;function BR(t){const e=MR(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=t||{};let a;if(typeof n=="function")a=n;else if(Tm(n))a=ZE(n);else throw new Error(ht(1));let l;typeof r=="function"?l=r(e):l=e();let u=Pu;i&&(u=AR({trace:!zR,...typeof i=="object"&&i}));const d=uR(...l),c=UR(d);let f=typeof o=="function"?o(c):c();const p=u(...f);return Im(a,s,p)}function fS(t){const e={},n=[];let r;const i={addCase(s,o){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(ht(28));if(a in e)throw new Error(ht(29));return e[a]=o,i},addMatcher(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return t(i),[e,n,r]}function WR(t){return typeof t=="function"}function VR(t,e){let[n,r,i]=fS(e),s;if(WR(t))s=()=>B0(t());else{const a=B0(t);s=()=>a}function o(a=s(),l){let u=[n[l.type],...r.filter(({matcher:d})=>d(l)).map(({reducer:d})=>d)];return u.filter(d=>!!d).length===0&&(u=[i]),u.reduce((d,c)=>{if(c)if(Or(d)){const p=c(d,l);return p===void 0?d:p}else{if($n(d))return aS(d,f=>c(f,l));{const f=c(d,l);if(f===void 0){if(d===null)return d;throw new Error(ht(9))}return f}}return d},a)}return o.getInitialState=s,o}var HR="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",hS=(t=21)=>{let e="",n=t;for(;n--;)e+=HR[Math.random()*64|0];return e},GR=(t,e)=>LR(t)?t.match(e):t(e);function KR(...t){return e=>t.some(n=>GR(n,e))}var qR=["name","message","stack","code"],Qd=class{constructor(t,e){pd(this,"_type");this.payload=t,this.meta=e}},V0=class{constructor(t,e){pd(this,"_type");this.payload=t,this.meta=e}},YR=t=>{if(typeof t=="object"&&t!==null){const e={};for(const n of qR)typeof t[n]=="string"&&(e[n]=t[n]);return e}return{message:String(t)}},Aa=(()=>{function t(e,n,r){const i=An(e+"/fulfilled",(l,u,d,c)=>({payload:l,meta:{...c||{},arg:d,requestId:u,requestStatus:"fulfilled"}})),s=An(e+"/pending",(l,u,d)=>({payload:void 0,meta:{...d||{},arg:u,requestId:l,requestStatus:"pending"}})),o=An(e+"/rejected",(l,u,d,c,f)=>({payload:c,error:(r&&r.serializeError||YR)(l||"Rejected"),meta:{...f||{},arg:d,requestId:u,rejectedWithValue:!!c,requestStatus:"rejected",aborted:(l==null?void 0:l.name)==="AbortError",condition:(l==null?void 0:l.name)==="ConditionError"}}));function a(l){return(u,d,c)=>{const f=r!=null&&r.idGenerator?r.idGenerator(l):hS(),p=new AbortController;let v,_;function E(h){_=h,p.abort()}const m=async function(){var w,T;let h;try{let S=(w=r==null?void 0:r.condition)==null?void 0:w.call(r,l,{getState:d,extra:c});if(XR(S)&&(S=await S),S===!1||p.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const x=new Promise((k,L)=>{v=()=>{L({name:"AbortError",message:_||"Aborted"})},p.signal.addEventListener("abort",v)});u(s(f,l,(T=r==null?void 0:r.getPendingMeta)==null?void 0:T.call(r,{requestId:f,arg:l},{getState:d,extra:c}))),h=await Promise.race([x,Promise.resolve(n(l,{dispatch:u,getState:d,extra:c,requestId:f,signal:p.signal,abort:E,rejectWithValue:(k,L)=>new Qd(k,L),fulfillWithValue:(k,L)=>new V0(k,L)})).then(k=>{if(k instanceof Qd)throw k;return k instanceof V0?i(k.payload,f,l,k.meta):i(k,f,l)})])}catch(S){h=S instanceof Qd?o(null,f,l,S.payload,S.meta):o(S,f,l)}finally{v&&p.signal.removeEventListener("abort",v)}return r&&!r.dispatchConditionRejection&&o.match(h)&&h.meta.condition||u(h),h}();return Object.assign(m,{abort:E,requestId:f,arg:l,unwrap(){return m.then(QR)}})}}return Object.assign(a,{pending:s,rejected:o,fulfilled:i,settled:KR(o,i),typePrefix:e})}return t.withTypes=()=>t,t})();function QR(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function XR(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var JR=Symbol.for("rtk-slice-createasyncthunk");function ZR(t,e){return`${t}/${e}`}function eO({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[JR];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(ht(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(nO()):i.reducers)||{},l=Object.keys(a),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(y,w){const T=typeof y=="string"?y:y.type;if(!T)throw new Error(ht(12));if(T in u.sliceCaseReducersByType)throw new Error(ht(13));return u.sliceCaseReducersByType[T]=w,d},addMatcher(y,w){return u.sliceMatchers.push({matcher:y,reducer:w}),d},exposeAction(y,w){return u.actionCreators[y]=w,d},exposeCaseReducer(y,w){return u.sliceCaseReducersByName[y]=w,d}};l.forEach(y=>{const w=a[y],T={reducerName:y,type:ZR(s,y),createNotation:typeof i.reducers=="function"};iO(w)?oO(T,w,d,e):rO(T,w,d)});function c(){const[y={},w=[],T=void 0]=typeof i.extraReducers=="function"?fS(i.extraReducers):[i.extraReducers],S={...y,...u.sliceCaseReducersByType};return VR(i.initialState,x=>{for(let k in S)x.addCase(k,S[k]);for(let k of u.sliceMatchers)x.addMatcher(k.matcher,k.reducer);for(let k of w)x.addMatcher(k.matcher,k.reducer);T&&x.addDefaultCase(T)})}const f=y=>y,p=new Map;let v;function _(y,w){return v||(v=c()),v(y,w)}function E(){return v||(v=c()),v.getInitialState()}function m(y,w=!1){function T(x){let k=x[y];return typeof k>"u"&&w&&(k=E()),k}function S(x=f){const k=W0(p,w,{insert:()=>new WeakMap});return W0(k,x,{insert:()=>{const L={};for(const[F,B]of Object.entries(i.selectors??{}))L[F]=tO(B,x,E,w);return L}})}return{reducerPath:y,getSelectors:S,get selectors(){return S(T)},selectSlice:T}}const h={name:s,reducer:_,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:E,...m(o),injectInto(y,{reducerPath:w,...T}={}){const S=w??o;return y.inject({reducerPath:S,reducer:_},T),{...h,...m(S,!0)}}};return h}}function tO(t,e,n,r){function i(s,...o){let a=e(s);return typeof a>"u"&&r&&(a=n()),t(a,...o)}return i.unwrapped=t,i}var pS=eO();function nO(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function rO({type:t,reducerName:e,createNotation:n},r,i){let s,o;if("reducer"in r){if(n&&!sO(r))throw new Error(ht(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(t,s).exposeCaseReducer(e,s).exposeAction(e,o?An(t,o):An(t))}function iO(t){return t._reducerDefinitionType==="asyncThunk"}function sO(t){return t._reducerDefinitionType==="reducerWithPrepare"}function oO({type:t,reducerName:e},n,r,i){if(!i)throw new Error(ht(18));const{payloadCreator:s,fulfilled:o,pending:a,rejected:l,settled:u,options:d}=n,c=i(t,s,d);r.exposeAction(e,c),o&&r.addCase(c.fulfilled,o),a&&r.addCase(c.pending,a),l&&r.addCase(c.rejected,l),u&&r.addMatcher(c.settled,u),r.exposeCaseReducer(e,{fulfilled:o||ml,pending:a||ml,rejected:l||ml,settled:u||ml})}function ml(){}var aO=(t,e)=>{if(typeof t!="function")throw new Error(ht(32))},Rm="listenerMiddleware",lO=t=>{let{type:e,actionCreator:n,matcher:r,predicate:i,effect:s}=t;if(e)i=An(e).match;else if(n)e=n.type,i=n.match;else if(r)i=r;else if(!i)throw new Error(ht(21));return aO(s),{predicate:i,type:e,effect:s}},uO=Object.assign(t=>{const{type:e,predicate:n,effect:r}=lO(t);return{id:hS(),effect:r,type:e,predicate:n,pending:new Set,unsubscribe:()=>{throw new Error(ht(22))}}},{withTypes:()=>uO}),cO=Object.assign(An(`${Rm}/add`),{withTypes:()=>cO});An(`${Rm}/removeAll`);var dO=Object.assign(An(`${Rm}/remove`),{withTypes:()=>dO});function ht(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var H0={};/**
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
 */const mS={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const R=function(t,e){if(!t)throw Gs(e)},Gs=function(t){return new Error("Firebase Database ("+mS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const gS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},fO=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Om={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=s>>2,c=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(f=64)),r.push(n[d],n[c],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(gS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fO(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||c==null)throw new hO;const f=s<<2|a>>4;if(r.push(f),u!==64){const p=a<<4&240|u>>2;if(r.push(p),c!==64){const v=u<<6&192|c;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yS=function(t){const e=gS(t);return Om.encodeByteArray(e,!0)},Nu=function(t){return yS(t).replace(/\./g,"")},Au=function(t){try{return Om.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function pO(t){return vS(void 0,t)}function vS(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!mO(n)||(t[n]=vS(t[n],e[n]));return t}function mO(t){return t!=="__proto__"}/**
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
 */function gO(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yO=()=>gO().__FIREBASE_DEFAULTS__,vO=()=>{if(typeof process>"u"||typeof H0>"u")return;const t=H0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_O=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Au(t[1]);return e&&JSON.parse(e)},Nm=()=>{try{return yO()||vO()||_O()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_S=t=>{var e,n;return(n=(e=Nm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},wO=t=>{const e=_S(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},wS=()=>{var t;return(t=Nm())===null||t===void 0?void 0:t.config},ES=t=>{var e;return(e=Nm())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Am{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function EO(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Nu(JSON.stringify(n)),Nu(JSON.stringify(o)),""].join(".")}/**
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
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function SO(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function SS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function CO(){const t=Xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function CS(){return mS.NODE_ADMIN===!0}function xO(){try{return typeof indexedDB=="object"}catch{return!1}}function TO(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const IO="FirebaseError";class $r extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=IO,Object.setPrototypeOf(this,$r.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,La.prototype.create)}}class La{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?kO(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new $r(i,a,r)}}function kO(t,e){return t.replace(bO,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const bO=/\{\$([^}]+)}/g;/**
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
 */function da(t){return JSON.parse(t)}function Pe(t){return JSON.stringify(t)}/**
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
 */const xS=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=da(Au(s[0])||""),n=da(Au(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},PO=function(t){const e=xS(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},RO=function(t){const e=xS(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Hn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Rs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Fh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Lu(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Du(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(G0(s)&&G0(o)){if(!Du(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function G0(t){return t!==null&&typeof t=="object"}/**
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
 */function Ks(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Eo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function So(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class OO{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const f=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=a^s&(o^a),d=1518500249):(u=s^o^a,d=1859775393):c<60?(u=s&o|a&(s|o),d=2400959708):(u=s^o^a,d=3395469782);const f=(i<<5|i>>>27)+u+l+d+r[c]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function NO(t,e){const n=new AO(t,e);return n.subscribe.bind(n)}class AO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");LO(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Xd),i.error===void 0&&(i.error=Xd),i.complete===void 0&&(i.complete=Xd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function LO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xd(){}function TS(t,e){return`${t} failed: ${e} argument `}/**
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
 */const DO=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,R(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Lc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function mt(t){return t&&t._delegate?t._delegate:t}class gi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qr="[DEFAULT]";/**
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
 */class MO{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Am;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jO(e))try{this.getOrInitializeService({instanceIdentifier:qr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=qr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qr){return this.instances.has(e)}getOptions(e=qr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:FO(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qr){return this.component?this.component.multipleInstances?e:qr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function FO(t){return t===qr?void 0:t}function jO(t){return t.instantiationMode==="EAGER"}/**
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
 */class $O{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new MO(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const UO={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},zO=se.INFO,BO={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},WO=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=BO[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dm{constructor(e){this.name=e,this._logLevel=zO,this._logHandler=WO,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?UO[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const VO=(t,e)=>e.some(n=>t instanceof n);let K0,q0;function HO(){return K0||(K0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function GO(){return q0||(q0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const IS=new WeakMap,jh=new WeakMap,kS=new WeakMap,Jd=new WeakMap,Mm=new WeakMap;function KO(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Sr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&IS.set(n,t)}).catch(()=>{}),Mm.set(e,t),e}function qO(t){if(jh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});jh.set(t,e)}let $h={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return jh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||kS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function YO(t){$h=t($h)}function QO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Zd(this),e,...n);return kS.set(r,e.sort?e.sort():[e]),Sr(r)}:GO().includes(t)?function(...e){return t.apply(Zd(this),e),Sr(IS.get(this))}:function(...e){return Sr(t.apply(Zd(this),e))}}function XO(t){return typeof t=="function"?QO(t):(t instanceof IDBTransaction&&qO(t),VO(t,HO())?new Proxy(t,$h):t)}function Sr(t){if(t instanceof IDBRequest)return KO(t);if(Jd.has(t))return Jd.get(t);const e=XO(t);return e!==t&&(Jd.set(t,e),Mm.set(e,t)),e}const Zd=t=>Mm.get(t);function JO(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Sr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Sr(o.result),l.oldVersion,l.newVersion,Sr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const ZO=["get","getKey","getAll","getAllKeys","count"],eN=["put","add","delete","clear"],ef=new Map;function Y0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ef.get(e))return ef.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=eN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ZO.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ef.set(e,s),s}YO(t=>({...t,get:(e,n,r)=>Y0(e,n)||t.get(e,n,r),has:(e,n)=>!!Y0(e,n)||t.has(e,n)}));/**
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
 */class tN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function nN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Uh="@firebase/app",Q0="0.9.28";/**
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
 */const yi=new Dm("@firebase/app"),rN="@firebase/app-compat",iN="@firebase/analytics-compat",sN="@firebase/analytics",oN="@firebase/app-check-compat",aN="@firebase/app-check",lN="@firebase/auth",uN="@firebase/auth-compat",cN="@firebase/database",dN="@firebase/database-compat",fN="@firebase/functions",hN="@firebase/functions-compat",pN="@firebase/installations",mN="@firebase/installations-compat",gN="@firebase/messaging",yN="@firebase/messaging-compat",vN="@firebase/performance",_N="@firebase/performance-compat",wN="@firebase/remote-config",EN="@firebase/remote-config-compat",SN="@firebase/storage",CN="@firebase/storage-compat",xN="@firebase/firestore",TN="@firebase/firestore-compat",IN="firebase",kN="10.8.1";/**
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
 */const zh="[DEFAULT]",bN={[Uh]:"fire-core",[rN]:"fire-core-compat",[sN]:"fire-analytics",[iN]:"fire-analytics-compat",[aN]:"fire-app-check",[oN]:"fire-app-check-compat",[lN]:"fire-auth",[uN]:"fire-auth-compat",[cN]:"fire-rtdb",[dN]:"fire-rtdb-compat",[fN]:"fire-fn",[hN]:"fire-fn-compat",[pN]:"fire-iid",[mN]:"fire-iid-compat",[gN]:"fire-fcm",[yN]:"fire-fcm-compat",[vN]:"fire-perf",[_N]:"fire-perf-compat",[wN]:"fire-rc",[EN]:"fire-rc-compat",[SN]:"fire-gcs",[CN]:"fire-gcs-compat",[xN]:"fire-fst",[TN]:"fire-fst-compat","fire-js":"fire-js",[IN]:"fire-js-all"};/**
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
 */const Mu=new Map,Bh=new Map;function PN(t,e){try{t.container.addComponent(e)}catch(n){yi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Os(t){const e=t.name;if(Bh.has(e))return yi.debug(`There were multiple attempts to register component ${e}.`),!1;Bh.set(e,t);for(const n of Mu.values())PN(n,t);return!0}function Fm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const RN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Cr=new La("app","Firebase",RN);/**
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
 */class ON{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cr.create("app-deleted",{appName:this._name})}}/**
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
 */const qs=kN;function bS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:zh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Cr.create("bad-app-name",{appName:String(i)});if(n||(n=wS()),!n)throw Cr.create("no-options");const s=Mu.get(i);if(s){if(Du(n,s.options)&&Du(r,s.config))return s;throw Cr.create("duplicate-app",{appName:i})}const o=new $O(i);for(const l of Bh.values())o.addComponent(l);const a=new ON(n,r,o);return Mu.set(i,a),a}function PS(t=zh){const e=Mu.get(t);if(!e&&t===zh&&wS())return bS();if(!e)throw Cr.create("no-app",{appName:t});return e}function xr(t,e,n){var r;let i=(r=bN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yi.warn(a.join(" "));return}Os(new gi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const NN="firebase-heartbeat-database",AN=1,fa="firebase-heartbeat-store";let tf=null;function RS(){return tf||(tf=JO(NN,AN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(fa)}catch(n){console.warn(n)}}}}).catch(t=>{throw Cr.create("idb-open",{originalErrorMessage:t.message})})),tf}async function LN(t){try{const n=(await RS()).transaction(fa),r=await n.objectStore(fa).get(OS(t));return await n.done,r}catch(e){if(e instanceof $r)yi.warn(e.message);else{const n=Cr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yi.warn(n.message)}}}async function X0(t,e){try{const r=(await RS()).transaction(fa,"readwrite");await r.objectStore(fa).put(e,OS(t)),await r.done}catch(n){if(n instanceof $r)yi.warn(n.message);else{const r=Cr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yi.warn(r.message)}}}function OS(t){return`${t.name}!${t.options.appId}`}/**
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
 */const DN=1024,MN=30*24*60*60*1e3;class FN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $N(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=J0();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=MN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=J0(),{heartbeatsToSend:r,unsentEntries:i}=jN(this._heartbeatsCache.heartbeats),s=Nu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function J0(){return new Date().toISOString().substring(0,10)}function jN(t,e=DN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Z0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Z0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $N{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xO()?TO().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await LN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return X0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return X0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Z0(t){return Nu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function UN(t){Os(new gi("platform-logger",e=>new tN(e),"PRIVATE")),Os(new gi("heartbeat",e=>new FN(e),"PRIVATE")),xr(Uh,Q0,t),xr(Uh,Q0,"esm2017"),xr("fire-js","")}UN("");function NS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zN=NS,AS=new La("auth","Firebase",NS());/**
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
 */const Fu=new Dm("@firebase/auth");function BN(t,...e){Fu.logLevel<=se.WARN&&Fu.warn(`Auth (${qs}): ${t}`,...e)}function zl(t,...e){Fu.logLevel<=se.ERROR&&Fu.error(`Auth (${qs}): ${t}`,...e)}/**
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
 */function tn(t,...e){throw jm(t,...e)}function hn(t,...e){return jm(t,...e)}function WN(t,e,n){const r=Object.assign(Object.assign({},zN()),{[e]:n});return new La("auth","Firebase",r).create(e,{appName:t.name})}function jm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return AS.create(t,...e)}function z(t,e,...n){if(!t)throw jm(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw zl(e),new Error(e)}function Un(t,e){t||Pn(e)}/**
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
 */function Wh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function VN(){return ev()==="http:"||ev()==="https:"}function ev(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function HN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(VN()||SO()||"connection"in navigator)?navigator.onLine:!0}function GN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Da{constructor(e,n){this.shortDelay=e,this.longDelay=n,Un(n>e,"Short delay should be less than long delay!"),this.isMobile=Lm()||SS()}get(){return HN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function $m(t,e){Un(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class LS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const KN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const qN=new Da(3e4,6e4);function Ur(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Gn(t,e,n,r,i={}){return DS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ks(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),LS.fetch()(MS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function DS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},KN),e);try{const i=new QN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw gl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw gl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw gl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw gl(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw WN(t,d,u);tn(t,d)}}catch(i){if(i instanceof $r)throw i;tn(t,"network-request-failed",{message:String(i)})}}async function Ma(t,e,n,r,i={}){const s=await Gn(t,e,n,r,i);return"mfaPendingCredential"in s&&tn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function MS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?$m(t.config,i):`${t.config.apiScheme}://${i}`}function YN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class QN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(hn(this.auth,"network-request-failed")),qN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function gl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=hn(t,e,r);return i.customData._tokenResponse=n,i}function tv(t){return t!==void 0&&t.enterprise!==void 0}class XN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return YN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function JN(t,e){return Gn(t,"GET","/v2/recaptchaConfig",Ur(t,e))}/**
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
 */async function ZN(t,e){return Gn(t,"POST","/v1/accounts:delete",e)}async function eA(t,e){return Gn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ao(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tA(t,e=!1){const n=mt(t),r=await n.getIdToken(e),i=Um(r);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ao(nf(i.auth_time)),issuedAtTime:Ao(nf(i.iat)),expirationTime:Ao(nf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function nf(t){return Number(t)*1e3}function Um(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return zl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Au(n);return i?JSON.parse(i):(zl("Failed to decode base64 JWT payload"),null)}catch(i){return zl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function nA(t){const e=Um(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ns(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof $r&&rA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function rA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class iA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class FS{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ao(this.lastLoginAt),this.creationTime=Ao(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ju(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ns(t,eA(n,{idToken:r}));z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?aA(s.providerUserInfo):[],a=oA(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new FS(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function sA(t){const e=mt(t);await ju(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function aA(t){return t.map(e=>{var{providerId:n}=e,r=mm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function lA(t,e){const n=await DS(t,{},async()=>{const r=Ks({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=MS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",LS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function uA(t,e){return Gn(t,"POST","/v2/accounts:revokeToken",Ur(t,e))}/**
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
 */class ha{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await lA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ha;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ha,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
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
 */function Jn(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ai{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=mm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new iA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new FS(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ns(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tA(this,e)}reload(){return sA(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ai(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ju(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ns(this,ZN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:y,emailVerified:w,isAnonymous:T,providerData:S,stsTokenManager:x}=n;z(y&&x,e,"internal-error");const k=ha.fromJSON(this.name,x);z(typeof y=="string",e,"internal-error"),Jn(c,e.name),Jn(f,e.name),z(typeof w=="boolean",e,"internal-error"),z(typeof T=="boolean",e,"internal-error"),Jn(p,e.name),Jn(v,e.name),Jn(_,e.name),Jn(E,e.name),Jn(m,e.name),Jn(h,e.name);const L=new ai({uid:y,auth:e,email:f,emailVerified:w,displayName:c,isAnonymous:T,photoURL:v,phoneNumber:p,tenantId:_,stsTokenManager:k,createdAt:m,lastLoginAt:h});return S&&Array.isArray(S)&&(L.providerData=S.map(F=>Object.assign({},F))),E&&(L._redirectEventId=E),L}static async _fromIdTokenResponse(e,n,r=!1){const i=new ha;i.updateFromServerResponse(n);const s=new ai({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ju(s),s}}/**
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
 */const nv=new Map;function Rn(t){Un(t instanceof Function,"Expected a class definition");let e=nv.get(t);return e?(Un(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,nv.set(t,e),e)}/**
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
 */class jS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jS.type="NONE";const rv=jS;/**
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
 */function Bl(t,e,n){return`firebase:${t}:${e}:${n}`}class us{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Bl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Bl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ai._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new us(Rn(rv),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Rn(rv);const o=Bl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const c=ai._fromJSON(e,d);u!==s&&(a=c),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new us(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new us(s,e,r))}}/**
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
 */function iv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($S(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(WS(e))return"Blackberry";if(VS(e))return"Webos";if(zm(e))return"Safari";if((e.includes("chrome/")||US(e))&&!e.includes("edge/"))return"Chrome";if(BS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $S(t=Xe()){return/firefox\//i.test(t)}function zm(t=Xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function US(t=Xe()){return/crios\//i.test(t)}function zS(t=Xe()){return/iemobile/i.test(t)}function BS(t=Xe()){return/android/i.test(t)}function WS(t=Xe()){return/blackberry/i.test(t)}function VS(t=Xe()){return/webos/i.test(t)}function Dc(t=Xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function cA(t=Xe()){var e;return Dc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dA(){return CO()&&document.documentMode===10}function HS(t=Xe()){return Dc(t)||BS(t)||VS(t)||WS(t)||/windows phone/i.test(t)||zS(t)}function fA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function GS(t,e=[]){let n;switch(t){case"Browser":n=iv(Xe());break;case"Worker":n=`${iv(Xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${qs}/${r}`}/**
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
 */class hA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function pA(t,e={}){return Gn(t,"GET","/v2/passwordPolicy",Ur(t,e))}/**
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
 */const mA=6;class gA{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:mA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class yA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sv(this),this.idTokenSubscription=new sv(this),this.beforeStateQueue=new hA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=AS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await us.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ju(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=GN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?mt(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await pA(this),n=new gA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new La("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await uA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rn(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await us.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=GS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&BN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ki(t){return mt(t)}class sv{constructor(e){this.auth=e,this.observer=null,this.addObserver=NO(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Mc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vA(t){Mc=t}function KS(t){return Mc.loadJS(t)}function _A(){return Mc.recaptchaEnterpriseScript}function wA(){return Mc.gapiScript}function EA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const SA="recaptcha-enterprise",CA="NO_RECAPTCHA";class xA{constructor(e){this.type=SA,this.auth=ki(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{JN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new XN(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;tv(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(CA)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&tv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=_A();l.length!==0&&(l+=a),KS(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function ov(t,e,n,r=!1){const i=new xA(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Vh(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await ov(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await ov(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function TA(t,e){const n=Fm(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Du(s,e??{}))return i;tn(i,"already-initialized")}return n.initialize({options:e})}function IA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function kA(t,e,n){const r=ki(t);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=qS(e),{host:o,port:a}=bA(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||PA()}function qS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function bA(t){const e=qS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:av(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:av(o)}}}function av(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function PA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Bm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}async function RA(t,e){return Gn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function OA(t,e){return Ma(t,"POST","/v1/accounts:signInWithPassword",Ur(t,e))}/**
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
 */async function NA(t,e){return Ma(t,"POST","/v1/accounts:signInWithEmailLink",Ur(t,e))}async function AA(t,e){return Ma(t,"POST","/v1/accounts:signInWithEmailLink",Ur(t,e))}/**
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
 */class pa extends Bm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new pa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new pa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vh(e,n,"signInWithPassword",OA);case"emailLink":return NA(e,{email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vh(e,r,"signUpPassword",RA);case"emailLink":return AA(e,{idToken:n,email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function cs(t,e){return Ma(t,"POST","/v1/accounts:signInWithIdp",Ur(t,e))}/**
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
 */const LA="http://localhost";class vi extends Bm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=mm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new vi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return cs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,cs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,cs(e,n)}buildRequest(){const e={requestUri:LA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ks(n)}return e}}/**
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
 */function DA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function MA(t){const e=Eo(So(t)).link,n=e?Eo(So(e)).deep_link_id:null,r=Eo(So(t)).deep_link_id;return(r?Eo(So(r)).link:null)||r||n||e||t}class Wm{constructor(e){var n,r,i,s,o,a;const l=Eo(So(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,c=DA((i=l.mode)!==null&&i!==void 0?i:null);z(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=MA(e);try{return new Wm(n)}catch{return null}}}/**
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
 */class Ys{constructor(){this.providerId=Ys.PROVIDER_ID}static credential(e,n){return pa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Wm.parseLink(n);return z(r,"argument-error"),pa._fromEmailAndCode(e,r.code,r.tenantId)}}Ys.PROVIDER_ID="password";Ys.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ys.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class YS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fa extends YS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class sr extends Fa{constructor(){super("facebook.com")}static credential(e){return vi._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";sr.PROVIDER_ID="facebook.com";/**
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
 */class or extends Fa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vi._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return or.credential(n,r)}catch{return null}}}or.GOOGLE_SIGN_IN_METHOD="google.com";or.PROVIDER_ID="google.com";/**
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
 */class ar extends Fa{constructor(){super("github.com")}static credential(e){return vi._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.GITHUB_SIGN_IN_METHOD="github.com";ar.PROVIDER_ID="github.com";/**
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
 */class lr extends Fa{constructor(){super("twitter.com")}static credential(e,n){return vi._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return lr.credential(n,r)}catch{return null}}}lr.TWITTER_SIGN_IN_METHOD="twitter.com";lr.PROVIDER_ID="twitter.com";/**
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
 */async function FA(t,e){return Ma(t,"POST","/v1/accounts:signUp",Ur(t,e))}/**
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
 */class _i{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ai._fromIdTokenResponse(e,r,i),o=lv(r);return new _i({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=lv(r);return new _i({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function lv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class $u extends $r{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,$u.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new $u(e,n,r,i)}}function QS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?$u._fromErrorAndOperation(t,s,e,r):s})}async function jA(t,e,n=!1){const r=await Ns(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _i._forOperation(t,"link",r)}/**
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
 */async function $A(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ns(t,QS(r,i,e,t),n);z(s.idToken,r,"internal-error");const o=Um(s.idToken);z(o,r,"internal-error");const{sub:a}=o;return z(t.uid===a,r,"user-mismatch"),_i._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&tn(r,"user-mismatch"),s}}/**
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
 */async function XS(t,e,n=!1){const r="signIn",i=await QS(t,r,e),s=await _i._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function UA(t,e){return XS(ki(t),e)}/**
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
 */async function JS(t){const e=ki(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function zA(t,e,n){const r=ki(t),o=await Vh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",FA).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&JS(t),l}),a=await _i._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function BA(t,e,n){return UA(mt(t),Ys.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&JS(t),r})}/**
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
 */async function WA(t,e){return Gn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function VA(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=mt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ns(r,WA(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function HA(t,e,n,r){return mt(t).onIdTokenChanged(e,n,r)}function GA(t,e,n){return mt(t).beforeAuthStateChanged(e,n)}function KA(t){return mt(t).signOut()}const Uu="__sak";/**
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
 */class ZS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Uu,"1"),this.storage.removeItem(Uu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function qA(){const t=Xe();return zm(t)||Dc(t)}const YA=1e3,QA=10;class eC extends ZS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=qA()&&fA(),this.fallbackToPolling=HS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);dA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,QA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},YA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}eC.type="LOCAL";const XA=eC;/**
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
 */class tC extends ZS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}tC.type="SESSION";const nC=tC;/**
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
 */function JA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Fc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Fc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await JA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fc.receivers=[];/**
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
 */function Vm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class ZA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Vm("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const f=c;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function pn(){return window}function e3(t){pn().location.href=t}/**
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
 */function rC(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function t3(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function n3(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function r3(){return rC()?self:null}/**
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
 */const iC="firebaseLocalStorageDb",i3=1,zu="firebaseLocalStorage",sC="fbase_key";class ja{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function jc(t,e){return t.transaction([zu],e?"readwrite":"readonly").objectStore(zu)}function s3(){const t=indexedDB.deleteDatabase(iC);return new ja(t).toPromise()}function Hh(){const t=indexedDB.open(iC,i3);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(zu,{keyPath:sC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(zu)?e(r):(r.close(),await s3(),e(await Hh()))})})}async function uv(t,e,n){const r=jc(t,!0).put({[sC]:e,value:n});return new ja(r).toPromise()}async function o3(t,e){const n=jc(t,!1).get(e),r=await new ja(n).toPromise();return r===void 0?null:r.value}function cv(t,e){const n=jc(t,!0).delete(e);return new ja(n).toPromise()}const a3=800,l3=3;class oC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>l3)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fc._getInstance(r3()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await t3(),!this.activeServiceWorker)return;this.sender=new ZA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||n3()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hh();return await uv(e,Uu,"1"),await cv(e,Uu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>uv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>o3(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=jc(i,!1).getAll();return new ja(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),a3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}oC.type="LOCAL";const u3=oC;new Da(3e4,6e4);/**
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
 */function c3(t,e){return e?Rn(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Hm extends Bm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return cs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return cs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return cs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function d3(t){return XS(t.auth,new Hm(t),t.bypassAuthState)}function f3(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),$A(n,new Hm(t),t.bypassAuthState)}async function h3(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),jA(n,new Hm(t),t.bypassAuthState)}/**
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
 */class aC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return d3;case"linkViaPopup":case"linkViaRedirect":return h3;case"reauthViaPopup":case"reauthViaRedirect":return f3;default:tn(this.auth,"internal-error")}}resolve(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const p3=new Da(2e3,1e4);class Zi extends aC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Zi.currentPopupAction&&Zi.currentPopupAction.cancel(),Zi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Un(this.filter.length===1,"Popup operations only handle one event");const e=Vm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,p3.get())};e()}}Zi.currentPopupAction=null;/**
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
 */const m3="pendingRedirect",Wl=new Map;class g3 extends aC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Wl.get(this.auth._key());if(!e){try{const r=await y3(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Wl.set(this.auth._key(),e)}return this.bypassAuthState||Wl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function y3(t,e){const n=w3(e),r=_3(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function v3(t,e){Wl.set(t._key(),e)}function _3(t){return Rn(t._redirectPersistence)}function w3(t){return Bl(m3,t.config.apiKey,t.name)}async function E3(t,e,n=!1){const r=ki(t),i=c3(r,e),o=await new g3(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const S3=10*60*1e3;class C3{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!x3(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!lC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(hn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=S3&&this.cachedEventUids.clear(),this.cachedEventUids.has(dv(e))}saveEventToCache(e){this.cachedEventUids.add(dv(e)),this.lastProcessedEventTime=Date.now()}}function dv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function lC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function x3(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lC(t);default:return!1}}/**
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
 */async function T3(t,e={}){return Gn(t,"GET","/v1/projects",e)}/**
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
 */const I3=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,k3=/^https?/;async function b3(t){if(t.config.emulator)return;const{authorizedDomains:e}=await T3(t);for(const n of e)try{if(P3(n))return}catch{}tn(t,"unauthorized-domain")}function P3(t){const e=Wh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!k3.test(n))return!1;if(I3.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const R3=new Da(3e4,6e4);function fv(){const t=pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function O3(t){return new Promise((e,n)=>{var r,i,s;function o(){fv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fv(),n(hn(t,"network-request-failed"))},timeout:R3.get()})}if(!((i=(r=pn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=pn().gapi)===null||s===void 0)&&s.load)o();else{const a=EA("iframefcb");return pn()[a]=()=>{gapi.load?o():n(hn(t,"network-request-failed"))},KS(`${wA()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Vl=null,e})}let Vl=null;function N3(t){return Vl=Vl||O3(t),Vl}/**
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
 */const A3=new Da(5e3,15e3),L3="__/auth/iframe",D3="emulator/auth/iframe",M3={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},F3=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function j3(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$m(e,D3):`https://${t.config.authDomain}/${L3}`,r={apiKey:e.apiKey,appName:t.name,v:qs},i=F3.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ks(r).slice(1)}`}async function $3(t){const e=await N3(t),n=pn().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:j3(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:M3,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=hn(t,"network-request-failed"),a=pn().setTimeout(()=>{s(o)},A3.get());function l(){pn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const U3={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},z3=500,B3=600,W3="_blank",V3="http://localhost";class hv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function H3(t,e,n,r=z3,i=B3){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},U3),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Xe().toLowerCase();n&&(a=US(u)?W3:n),$S(u)&&(e=e||V3,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[p,v])=>`${f}${p}=${v},`,"");if(cA(u)&&a!=="_self")return G3(e||"",a),new hv(null);const c=window.open(e||"",a,d);z(c,t,"popup-blocked");try{c.focus()}catch{}return new hv(c)}function G3(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const K3="__/auth/handler",q3="emulator/auth/handler",Y3=encodeURIComponent("fac");async function pv(t,e,n,r,i,s){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:qs,eventId:i};if(e instanceof YS){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Fh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries(s||{}))o[d]=c}if(e instanceof Fa){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),u=l?`#${Y3}=${encodeURIComponent(l)}`:"";return`${Q3(t)}?${Ks(a).slice(1)}${u}`}function Q3({config:t}){return t.emulator?$m(t,q3):`https://${t.authDomain}/${K3}`}/**
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
 */const rf="webStorageSupport";class X3{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nC,this._completeRedirectFn=E3,this._overrideRedirectResult=v3}async _openPopup(e,n,r,i){var s;Un((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await pv(e,n,r,Wh(),i);return H3(e,o,Vm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await pv(e,n,r,Wh(),i);return e3(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Un(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await $3(e),r=new C3(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(rf,{type:rf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[rf];o!==void 0&&n(!!o),tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=b3(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return HS()||zm()||Dc()}}const J3=X3;var mv="@firebase/auth",gv="1.6.1";/**
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
 */class Z3{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function eL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tL(t){Os(new gi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:GS(t)},u=new yA(r,i,s,l);return IA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Os(new gi("auth-internal",e=>{const n=ki(e.getProvider("auth").getImmediate());return(r=>new Z3(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xr(mv,gv,eL(t)),xr(mv,gv,"esm2017")}/**
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
 */const nL=5*60,rL=ES("authIdTokenMaxAge")||nL;let yv=null;const iL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>rL)return;const i=n==null?void 0:n.token;yv!==i&&(yv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function $c(t=PS()){const e=Fm(t,"auth");if(e.isInitialized())return e.getImmediate();const n=TA(t,{popupRedirectResolver:J3,persistence:[u3,XA,nC]}),r=ES("authTokenSyncURL");if(r){const s=iL(r);GA(n,s,()=>s(n.currentUser)),HA(n,o=>s(o))}const i=_S("auth");return i&&kA(n,`http://${i}`),n}function sL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}vA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=hn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",sL().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tL("Browser");const uC=Aa("auth/register",async({value:t},e)=>{const{name:n,email:r,password:i}=t,s=$c();try{const a=(await zA(s,r,i)).user;return await VA(a,{displayName:n}),{email:a.email,accessToken:a.accessToken,id:a.uid,name:a.displayName}}catch(o){return console.log(o),e.rejectWithValue(o.message)}}),cC=Aa("auth/login",async({value:t},e)=>{const{email:n,password:r}=t,i=$c();try{const o=(await BA(i,n,r)).user;return{email:o.email,accessToken:o.accessToken,id:o.uid,name:o.displayName}}catch(s){return e.rejectWithValue(s.message)}}),dC=Aa("auth/logout",async(t,e)=>{const n=$c();try{await KA(n)}catch(r){return e.rejectWithValue(r.message)}}),Hl=Aa("auth/refresh",async(t,e)=>{const r=e.getState().auth.token,i=$c();if(r===null)return e.rejectWithValue("Unable to fetch user");try{return new Promise((s,o)=>{i.onAuthStateChanged(a=>{a?s({name:a.displayName,email:a.email,token:a.accessToken,id:a.uid}):o("Unable to fetch user")})})}catch(s){return e.rejectWithValue(s.message)}}),oL=()=>{const t=Hs(),{name:e}=xm(),n=()=>{t(dC())};return g.jsxs("div",{children:[g.jsx("p",{children:`Welcome, ${e}`}),g.jsx("button",{type:"button",onClick:()=>n(),children:"Log Out"})]})},fC=({setNamePopUp:t})=>{const{isLoggedIn:e}=xm(),n=()=>(t("login"),g.jsx(_h,{to:"/login"})),r=()=>(t("signin"),g.jsx(_h,{to:"/login"}));return g.jsxs(PP,{children:[g.jsxs(MP,{children:[g.jsxs(OP,{children:[g.jsx(bP,{to:"/",children:g.jsx(T2,{})}),g.jsx(RP,{to:"/",children:"LearnLingo"})]}),g.jsx(Gd,{to:"/",children:"Home"})]}),g.jsxs(FP,{children:[g.jsx(Gd,{to:"teachers",children:"Teachers"}),e&&g.jsx(Gd,{to:"favorites",children:"Favorites"}),e?g.jsx(oL,{}):g.jsxs(NP,{children:[g.jsxs(AP,{type:"button",onClick:n,children:[g.jsx(DP,{children:g.jsx(x2,{})}),"Log in"]}),g.jsx(LP,{type:"button",onClick:()=>r(),children:"Registration"})]})]})]})};fC.propTypes={setNamePopUp:K.func.isRequired};const aL=P.div`
  width: 100%;
  padding: 0px 64px 32px 64px;
  text-align: center;
`,hC=({setNamePopUp:t})=>g.jsxs(g.Fragment,{children:[g.jsx(fC,{setNamePopUp:t}),g.jsx(aL,{children:g.jsx(C.Suspense,{fallback:g.jsx("div",{children:"Loading...."}),children:g.jsx(r2,{})})})]});hC.propTypes={setNamePopUp:K.func.isRequired};const lL=()=>g.jsxs("svg",{width:"46.047974",height:"55.784180",viewBox:"0 0 46.048 55.7842",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[g.jsx("desc",{children:"Created with Pixso."}),g.jsx("defs",{children:g.jsxs("linearGradient",{id:"paint_linear_9_2_0",x1:"23.024010",y1:"0.000000",x2:"23.024010",y2:"55.784241",gradientUnits:"userSpaceOnUse",children:[g.jsx("stop",{stopColor:"#FBE9BA"}),g.jsx("stop",{offset:"1.000000",stopColor:"#E7C885"})]})}),g.jsx("path",{id:"",d:"M31.5446 8.92163C33.5355 6.51074 34.5343 3.90588 34.5343 1.11597C34.5343 0.910522 34.5292 0.704102 34.5176 0.497314C34.5083 0.331787 34.495 0.165894 34.4769 0C33.0901 0.0733643 31.6154 0.502197 30.0564 1.27759C28.494 2.06458 27.2057 3.05115 26.1926 4.23767C24.1636 6.5813 23.021 9.44763 23.021 12.1257C23.021 12.4961 23.0442 12.8483 23.0845 13.183C26.2358 13.4443 29.142 11.7881 31.5446 8.92163ZM42.1438 48.865C43.2776 47.2157 44.2561 45.4218 45.0829 43.4728C45.4237 42.6465 45.7443 41.7855 46.048 40.8868C44.6476 40.2876 43.3889 39.444 42.2618 38.3524C39.7749 36.0007 38.5094 33.0387 38.4723 29.4792C38.4319 24.9095 40.4667 21.3475 44.5801 18.8043C42.2821 15.4709 38.8267 13.6208 34.2273 13.2422C32.5299 13.0951 30.458 13.4685 28.0031 14.3698C25.4071 15.3419 23.8757 15.8293 23.4238 15.8293C22.8195 15.8293 21.441 15.4124 19.2942 14.5901C17.1414 13.7708 15.4088 13.3538 14.0878 13.3538C11.6733 13.3948 9.43127 14.0352 7.35632 15.292C5.28137 16.5488 3.62354 18.2607 2.37732 20.4313C0.791626 23.1332 0 26.3575 0 30.0959C0 33.3596 0.587158 36.7306 1.75842 40.212C2.85205 43.4349 4.24817 46.262 5.94617 48.6997C7.52881 50.9828 8.84985 52.5942 9.90613 53.5343C11.5609 55.1045 13.2188 55.8518 14.8821 55.7794C15.9757 55.7416 17.4061 55.3593 19.1819 54.6259C20.9548 53.8959 22.6123 53.5343 24.1578 53.5343C25.6315 53.5343 27.243 53.8959 28.9968 54.6259C30.7448 55.3593 32.2465 55.7208 33.4916 55.7208C35.2261 55.6796 36.8458 54.9529 38.3575 53.5343C39.3328 52.67 40.5983 51.1138 42.1438 48.865Z",fill:"url(#paint_linear_9_2_0)",fillOpacity:"1.000000",fillRule:"evenodd"})]}),uL=()=>g.jsxs("svg",{width:"359.719971",height:"247.251221",viewBox:"0 0 359.72 247.251",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[g.jsx("desc",{children:"Created with Pixso."}),g.jsx("defs",{children:g.jsxs("linearGradient",{id:"paint_linear_9_1_0",x1:"179.859985",y1:"0.000000",x2:"179.859985",y2:"247.251175",gradientUnits:"userSpaceOnUse",children:[g.jsx("stop",{stopColor:"#EEB055"}),g.jsx("stop",{offset:"1.000000",stopColor:"#D08F38"})]})}),g.jsx("path",{id:"Union",d:"M6.41785 0C2.87329 0 0 2.87903 0 6.43042L0 240.821C0 244.372 2.87329 247.251 6.41785 247.251L353.302 247.251C356.847 247.251 359.72 244.372 359.72 240.821L359.72 6.43042C359.72 2.87903 356.847 0 353.302 0L6.41785 0Z",fill:"url(#paint_linear_9_1_0)",fillOpacity:"1.000000",fillRule:"nonzero"})]}),cL="data:image/svg+xml,%3csvg%20width='1312.000000'%20height='116.000000'%20viewBox='0%200%201312%20116'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs/%3e%3crect%20id='Rectangle%201'%20x='0.750000'%20y='0.750000'%20rx='30.000000'%20width='1310.500000'%20height='114.500000'%20stroke='%23F4C550'%20stroke-opacity='1.000000'%20stroke-width='1.500000'%20stroke-dasharray='15%2015'/%3e%3c/svg%3e",dL=P.div`
  width: 100%;

  display: flex;
  gap: 24px;
  margin-bottom: 24px;
`,fL=P.div`
  max-width: 720px;
  border-radius: 30px;
  background: ${ge.SILVER_BACKGROUND};
  padding: 98px 108px 98px 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,hL=P.h1`
  width: 548px;
  text-align: start;
  margin-bottom: 32px;
`,pL=P.p`
  text-align: start;
  margin-bottom: 64px;
  color: ${ge.BLACK_TEXT};
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.32px;
  width: 471px;
`,mL=P.button`
  border-radius: 12px;
  background-color: ${ge.YELLOW_BUTTON};
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
    background-color: ${ge.YELLOW_HOVER_BUTTON};
  }
`,gL=P.div`
  position: relative;
  max-width: 568px;
  border-radius: 30px;
  background: ${ge.LIGHT_YELLOW};
  padding: 80px 118px 117px 114px;
`,yL=P.img`
  max-width: 336px;
  max-height: 333px;
`,vL=P.span`
  background-color: ${ge.LIGHT_YELLOW};
  border-radius: 8px;
  max-width: 195px;
  font-style: italic;
  letter-spacing: -0.96px;
  font-size: 48px;
  font-weight: 400;
`,_L=P.span`
  color: ${ge.BLACK_TEXT};
  font-size: 48px;
  font-weight: 500;
  line-height: 56px;
  text-align: start;
  font-style: normal;
  letter-spacing: -0.96px;
`,vv=P.span`
  color: ${ge.BLACK_TEXT};
  font-size: 48px;
  font-weight: 500;
  line-height: 56px;
  letter-spacing: -0.96;
  text-align: start;
  font-style: normal;
`,wL=P.div`
  position: absolute;
  height: 176px;
  overflow: hidden;
  top: 354px;
  left: 103.64px;
`,EL=P.div`
  position: absolute;
  left: 260.56px;
`,SL=P.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1312px;
  height: 116px;
  gap: 100px;
  background-image: url(${cL});
`,yl=P.li`
  display: flex;
  gap: 16px;
`,vl=P.p`
  font-size: 28px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.56px;
`,_l=P.p`
  color: ${ge.BLACK_TEXT};
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;
  text-align: start;
  width: ${t=>t.width||"96px"};
`,CL="/Learn-Lingo/assets/sticker-CcJ1SqRC.png",xL=()=>g.jsxs(g.Fragment,{children:[g.jsxs(dL,{children:[g.jsxs(fL,{children:[g.jsxs(hL,{children:[g.jsx(_L,{children:"Unlock your potential with"}),"  ",g.jsx(vv,{children:"the best"})," ",g.jsx(vL,{children:"language"})," ",g.jsx(vv,{children:"tutors"})]}),g.jsx(pL,{children:"Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors."}),g.jsx(vE,{to:"teachers",children:g.jsx(mL,{type:"button",children:"Get started"})})]}),g.jsxs(gL,{children:[g.jsx(yL,{src:CL,alt:"sticker"}),g.jsx(wL,{children:g.jsx(uL,{})}),g.jsx(EL,{children:g.jsx(lL,{})})]})]}),g.jsxs(SL,{children:[g.jsxs(yl,{children:[g.jsx(vl,{children:"3,200 +"}),g.jsx(_l,{children:"Experienced tutors"})]}),g.jsxs(yl,{children:[g.jsx(vl,{children:"300,000 +"}),g.jsx(_l,{children:"5-star tutor reviews"})]}),g.jsxs(yl,{children:[g.jsx(vl,{children:"120 +"}),g.jsx(_l,{width:"74px",children:"Subjects taught"})]}),g.jsxs(yl,{children:[g.jsx(vl,{children:"200 +"}),g.jsx(_l,{children:"Tutor nationalities"})]})]})]});var _v={};const wv="@firebase/database",Ev="1.0.3";/**
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
 */let pC="";function TL(t){pC=t}/**
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
 */class IL{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Pe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:da(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class kL{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Hn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const mC=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new IL(e)}}catch{}return new kL},ti=mC("localStorage"),Gh=mC("sessionStorage");/**
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
 */const ds=new Dm("@firebase/database"),bL=function(){let t=1;return function(){return t++}}(),gC=function(t){const e=DO(t),n=new OO;n.update(e);const r=n.digest();return Om.encodeByteArray(r)},$a=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=$a.apply(null,r):typeof r=="object"?e+=Pe(r):e+=r,e+=" "}return e};let li=null,Sv=!0;const PL=function(t,e){R(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ds.logLevel=se.VERBOSE,li=ds.log.bind(ds),e&&Gh.set("logging_enabled",!0)):typeof t=="function"?li=t:(li=null,Gh.remove("logging_enabled"))},Ye=function(...t){if(Sv===!0&&(Sv=!1,li===null&&Gh.get("logging_enabled")===!0&&PL(!0)),li){const e=$a.apply(null,t);li(e)}},Ua=function(t){return function(...e){Ye(t,...e)}},Kh=function(...t){const e="FIREBASE INTERNAL ERROR: "+$a(...t);ds.error(e)},zn=function(...t){const e=`FIREBASE FATAL ERROR: ${$a(...t)}`;throw ds.error(e),new Error(e)},Tt=function(...t){const e="FIREBASE WARNING: "+$a(...t);ds.warn(e)},RL=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Tt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},yC=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},OL=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},As="[MIN_NAME]",wi="[MAX_NAME]",Qs=function(t,e){if(t===e)return 0;if(t===As||e===wi)return-1;if(e===As||t===wi)return 1;{const n=Cv(t),r=Cv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},NL=function(t,e){return t===e?0:t<e?-1:1},ao=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Pe(e))},Gm=function(t){if(typeof t!="object"||t===null)return Pe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Pe(e[r]),n+=":",n+=Gm(t[e[r]]);return n+="}",n},vC=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function pt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const _C=function(t){R(!yC(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(l=0;l<64;l+=8){let f=parseInt(d.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),c=c+f}return c.toLowerCase()},AL=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},LL=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function DL(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const ML=new RegExp("^-?(0*)\\d{1,10}$"),FL=-2147483648,jL=2147483647,Cv=function(t){if(ML.test(t)){const e=Number(t);if(e>=FL&&e<=jL)return e}return null},za=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Tt("Exception was thrown by user callback.",n),e},Math.floor(0))}},$L=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Lo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class UL{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Tt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class zL{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ye("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Tt(e)}}class fs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}fs.OWNER="owner";/**
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
 */const Km="5",wC="v",EC="s",SC="r",CC="f",xC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,TC="ls",IC="p",qh="ac",kC="websocket",bC="long_polling";/**
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
 */class PC{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ti.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ti.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function BL(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function RC(t,e,n){R(typeof e=="string","typeof type must == string"),R(typeof n=="object","typeof params must == object");let r;if(e===kC)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===bC)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);BL(t)&&(n.ns=t.namespace);const i=[];return pt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class WL{constructor(){this.counters_={}}incrementCounter(e,n=1){Hn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return pO(this.counters_)}}/**
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
 */const sf={},of={};function qm(t){const e=t.toString();return sf[e]||(sf[e]=new WL),sf[e]}function VL(t,e){const n=t.toString();return of[n]||(of[n]=e()),of[n]}/**
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
 */class HL{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&za(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const xv="start",GL="close",KL="pLPCommand",qL="pRTLPCB",OC="id",NC="pw",AC="ser",YL="cb",QL="seg",XL="ts",JL="d",ZL="dframe",LC=1870,DC=30,e4=LC-DC,t4=25e3,n4=3e4;class es{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ua(e),this.stats_=qm(n),this.urlFn=l=>(this.appCheckToken&&(l[qh]=this.appCheckToken),RC(n,bC,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new HL(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(n4)),OL(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ym((...s)=>{const[o,a,l,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===xv)this.id=a,this.password=l;else if(o===GL)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[xv]="t",r[AC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[YL]=this.scriptTagHolder.uniqueCallbackIdentifier),r[wC]=Km,this.transportSessionId&&(r[EC]=this.transportSessionId),this.lastSessionId&&(r[TC]=this.lastSessionId),this.applicationId&&(r[IC]=this.applicationId),this.appCheckToken&&(r[qh]=this.appCheckToken),typeof location<"u"&&location.hostname&&xC.test(location.hostname)&&(r[SC]=CC);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){es.forceAllow_=!0}static forceDisallow(){es.forceDisallow_=!0}static isAvailable(){return es.forceAllow_?!0:!es.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!AL()&&!LL()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=yS(n),i=vC(r,e4);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[ZL]="t",r[OC]=e,r[NC]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ym{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=bL(),window[KL+this.uniqueCallbackIdentifier]=e,window[qL+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ym.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ye("frame writing exception"),a.stack&&Ye(a.stack),Ye(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ye("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[OC]=this.myID,e[NC]=this.myPW,e[AC]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+DC+r.length<=LC;){const o=this.pendingSegs.shift();r=r+"&"+QL+i+"="+o.seg+"&"+XL+i+"="+o.ts+"&"+JL+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(t4)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ye("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const r4=16384,i4=45e3;let Bu=null;typeof MozWebSocket<"u"?Bu=MozWebSocket:typeof WebSocket<"u"&&(Bu=WebSocket);class Kt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ua(this.connId),this.stats_=qm(n),this.connURL=Kt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[wC]=Km,typeof location<"u"&&location.hostname&&xC.test(location.hostname)&&(o[SC]=CC),n&&(o[EC]=n),r&&(o[TC]=r),i&&(o[qh]=i),s&&(o[IC]=s),RC(e,kC,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ti.set("previous_websocket_failure",!0);try{let r;CS(),this.mySock=new Bu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Kt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Bu!==null&&!Kt.forceDisallow_}static previouslyFailed(){return ti.isInMemoryStorage||ti.get("previous_websocket_failure")===!0}markConnectionHealthy(){ti.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=da(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(R(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=vC(n,r4);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(i4))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Kt.responsesRequiredToBeHealthy=2;Kt.healthyTimeout=3e4;/**
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
 */class ma{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[es,Kt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Kt&&Kt.isAvailable();let r=n&&!Kt.previouslyFailed();if(e.webSocketOnly&&(n||Tt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Kt];else{const i=this.transports_=[];for(const s of ma.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ma.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ma.globalTransportInitialized_=!1;/**
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
 */const s4=6e4,o4=5e3,a4=10*1024,l4=100*1024,af="t",Tv="d",u4="s",Iv="r",c4="e",kv="o",bv="a",Pv="n",Rv="p",d4="h";class f4{constructor(e,n,r,i,s,o,a,l,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ua("c:"+this.id+":"),this.transportManager_=new ma(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Lo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>l4?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>a4?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(af in e){const n=e[af];n===bv?this.upgradeIfSecondaryHealthy_():n===Iv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===kv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ao("t",e),r=ao("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Rv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:bv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Pv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ao("t",e),r=ao("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ao(af,e);if(Tv in e){const r=e[Tv];if(n===d4){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Pv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===u4?this.onConnectionShutdown_(r):n===Iv?this.onReset_(r):n===c4?Kh("Server Error: "+r):n===kv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Kh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Km!==r&&Tt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Lo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(s4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Lo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(o4))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Rv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ti.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class MC{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class FC{constructor(e){this.allowedEvents_=e,this.listeners_={},R(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){R(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Wu extends FC{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Lm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Wu}getInitialEvent(e){return R(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Ov=32,Nv=768;class oe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Z(){return new oe("")}function Y(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Nr(t){return t.pieces_.length-t.pieceNum_}function ue(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new oe(t.pieces_,e)}function jC(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function h4(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function $C(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function UC(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new oe(e,0)}function Re(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof oe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new oe(n,0)}function G(t){return t.pieceNum_>=t.pieces_.length}function tt(t,e){const n=Y(t),r=Y(e);if(n===null)return e;if(n===r)return tt(ue(t),ue(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function zC(t,e){if(Nr(t)!==Nr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function qt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Nr(t)>Nr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class p4{constructor(e,n){this.errorPrefix_=n,this.parts_=$C(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Lc(this.parts_[r]);BC(this)}}function m4(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Lc(e),BC(t)}function g4(t){const e=t.parts_.pop();t.byteLength_-=Lc(e),t.parts_.length>0&&(t.byteLength_-=1)}function BC(t){if(t.byteLength_>Nv)throw new Error(t.errorPrefix_+"has a key path longer than "+Nv+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ov)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ov+") or object contains a cycle "+Yr(t))}function Yr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Qm extends FC{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Qm}getInitialEvent(e){return R(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const lo=1e3,y4=60*5*1e3,Av=30*1e3,v4=1.3,_4=3e4,w4="server_kill",Lv=3;class Ln extends MC{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ln.nextPersistentConnectionId_++,this.log_=Ua("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=lo,this.maxReconnectDelay_=y4,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!CS())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Qm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Wu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Pe(s)),R(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Am,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),R(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Ln.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Hn(e,"w")){const r=Rs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Tt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||RO(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Av)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=PO(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Pe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Kh("Unrecognized action received from server: "+Pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){R(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=lo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=lo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>_4&&(this.reconnectDelay_=lo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*v4)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ln.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(c){R(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(c)};this.realtime_={close:l,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ye("getToken() completed but was canceled"):(Ye("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=f&&f.token,a=new f4(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{Tt(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(w4)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&Tt(c),l())}}}interrupt(e){Ye("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ye("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Fh(this.interruptReasons_)&&(this.reconnectDelay_=lo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Gm(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new oe(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ye("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Lv&&(this.reconnectDelay_=Av,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ye("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Lv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+pC.replace(/\./g,"-")]=1,Lm()?e["framework.cordova"]=1:SS()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Wu.getInstance().currentlyOnline();return Fh(this.interruptReasons_)&&e}}Ln.nextPersistentConnectionId_=0;Ln.nextConnectionId_=0;/**
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
 */class Uc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new H(As,e),i=new H(As,n);return this.compare(r,i)!==0}minPost(){return H.MIN}}/**
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
 */let wl;class WC extends Uc{static get __EMPTY_NODE(){return wl}static set __EMPTY_NODE(e){wl=e}compare(e,n){return Qs(e.name,n.name)}isDefinedOn(e){throw Gs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return H.MIN}maxPost(){return new H(wi,wl)}makePost(e,n){return R(typeof e=="string","KeyIndex indexValue must always be a string."),new H(e,wl)}toString(){return".key"}}const hs=new WC;/**
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
 */class El{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Me{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Me.RED,this.left=i??ut.EMPTY_NODE,this.right=s??ut.EMPTY_NODE}copy(e,n,r,i,s){return new Me(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ut.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return ut.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Me.RED=!0;Me.BLACK=!1;class E4{copy(e,n,r,i,s){return this}insert(e,n,r){return new Me(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ut{constructor(e,n=ut.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ut(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Me.BLACK,null,null))}remove(e){return new ut(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Me.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new El(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new El(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new El(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new El(this.root_,null,this.comparator_,!0,e)}}ut.EMPTY_NODE=new E4;/**
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
 */function S4(t,e){return Qs(t.name,e.name)}function Xm(t,e){return Qs(t,e)}/**
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
 */let Yh;function C4(t){Yh=t}const VC=function(t){return typeof t=="number"?"number:"+_C(t):"string:"+t},HC=function(t){if(t.isLeafNode()){const e=t.val();R(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Hn(e,".sv"),"Priority must be a string or number.")}else R(t===Yh||t.isEmpty(),"priority of unexpected type.");R(t===Yh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Dv;class Ae{constructor(e,n=Ae.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,R(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),HC(this.priorityNode_)}static set __childrenNodeConstructor(e){Dv=e}static get __childrenNodeConstructor(){return Dv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ae(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:Y(e)===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ae.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Y(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(R(r!==".priority"||Nr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ae.__childrenNodeConstructor.EMPTY_NODE.updateChild(ue(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+VC(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=_C(this.value_):e+=this.value_,this.lazyHash_=gC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ae.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ae.__childrenNodeConstructor?-1:(R(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ae.VALUE_TYPE_ORDER.indexOf(n),s=Ae.VALUE_TYPE_ORDER.indexOf(r);return R(i>=0,"Unknown leaf type: "+n),R(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ae.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let GC,KC;function x4(t){GC=t}function T4(t){KC=t}class I4 extends Uc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Qs(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return H.MIN}maxPost(){return new H(wi,new Ae("[PRIORITY-POST]",KC))}makePost(e,n){const r=GC(e);return new H(n,new Ae("[PRIORITY-POST]",r))}toString(){return".priority"}}const xe=new I4;/**
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
 */const k4=Math.log(2);class b4{constructor(e){const n=s=>parseInt(Math.log(s)/k4,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Vu=function(t,e,n,r){t.sort(e);const i=function(l,u){const d=u-l;let c,f;if(d===0)return null;if(d===1)return c=t[l],f=n?n(c):c,new Me(f,c.node,Me.BLACK,null,null);{const p=parseInt(d/2,10)+l,v=i(l,p),_=i(p+1,u);return c=t[p],f=n?n(c):c,new Me(f,c.node,Me.BLACK,v,_)}},s=function(l){let u=null,d=null,c=t.length;const f=function(v,_){const E=c-v,m=c;c-=v;const h=i(E+1,m),y=t[E],w=n?n(y):y;p(new Me(w,y.node,_,null,h))},p=function(v){u?(u.left=v,u=v):(d=v,u=v)};for(let v=0;v<l.count;++v){const _=l.nextBitIsOne(),E=Math.pow(2,l.count-(v+1));_?f(E,Me.BLACK):(f(E,Me.BLACK),f(E,Me.RED))}return d},o=new b4(t.length),a=s(o);return new ut(r||e,a)};/**
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
 */let lf;const ji={};class On{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return R(ji&&xe,"ChildrenNode.ts has not been loaded"),lf=lf||new On({".priority":ji},{".priority":xe}),lf}get(e){const n=Rs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ut?n:null}hasIndex(e){return Hn(this.indexSet_,e.toString())}addIndex(e,n){R(e!==hs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(H.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Vu(r,e.getCompare()):a=ji;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new On(d,u)}addToIndexes(e,n){const r=Lu(this.indexes_,(i,s)=>{const o=Rs(this.indexSet_,s);if(R(o,"Missing index implementation for "+s),i===ji)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(H.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Vu(a,o.getCompare())}else return ji;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new H(e.name,a))),l.insert(e,e.node)}});return new On(r,this.indexSet_)}removeFromIndexes(e,n){const r=Lu(this.indexes_,i=>{if(i===ji)return i;{const s=n.get(e.name);return s?i.remove(new H(e.name,s)):i}});return new On(r,this.indexSet_)}}/**
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
 */let uo;class ${constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&HC(this.priorityNode_),this.children_.isEmpty()&&R(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return uo||(uo=new $(new ut(Xm),null,On.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||uo}updatePriority(e){return this.children_.isEmpty()?this:new $(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?uo:n}}getChild(e){const n=Y(e);return n===null?this:this.getImmediateChild(n).getChild(ue(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(R(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new H(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?uo:this.priorityNode_;return new $(i,o,s)}}updateChild(e,n){const r=Y(e);if(r===null)return n;{R(Y(e)!==".priority"||Nr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ue(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(xe,(o,a)=>{n[o]=a.val(e),r++,s&&$.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+VC(this.getPriority().val())+":"),this.forEachChild(xe,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":gC(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new H(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new H(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new H(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,H.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,H.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ba?-1:0}withIndex(e){if(e===hs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new $(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===hs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(xe),i=n.getIterator(xe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===hs?null:this.indexMap_.get(e.toString())}}$.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class P4 extends ${constructor(){super(new ut(Xm),$.EMPTY_NODE,On.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return $.EMPTY_NODE}isEmpty(){return!1}}const Ba=new P4;Object.defineProperties(H,{MIN:{value:new H(As,$.EMPTY_NODE)},MAX:{value:new H(wi,Ba)}});WC.__EMPTY_NODE=$.EMPTY_NODE;Ae.__childrenNodeConstructor=$;C4(Ba);T4(Ba);/**
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
 */const R4=!0;function Be(t,e=null){if(t===null)return $.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),R(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ae(n,Be(e))}if(!(t instanceof Array)&&R4){const n=[];let r=!1;if(pt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Be(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new H(o,l)))}}),n.length===0)return $.EMPTY_NODE;const s=Vu(n,S4,o=>o.name,Xm);if(r){const o=Vu(n,xe.getCompare());return new $(s,Be(e),new On({".priority":o},{".priority":xe}))}else return new $(s,Be(e),On.Default)}else{let n=$.EMPTY_NODE;return pt(t,(r,i)=>{if(Hn(t,r)&&r.substring(0,1)!=="."){const s=Be(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Be(e))}}x4(Be);/**
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
 */class O4 extends Uc{constructor(e){super(),this.indexPath_=e,R(!G(e)&&Y(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Qs(e.name,n.name):s}makePost(e,n){const r=Be(e),i=$.EMPTY_NODE.updateChild(this.indexPath_,r);return new H(n,i)}maxPost(){const e=$.EMPTY_NODE.updateChild(this.indexPath_,Ba);return new H(wi,e)}toString(){return $C(this.indexPath_,0).join("/")}}/**
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
 */class N4 extends Uc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Qs(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return H.MIN}maxPost(){return H.MAX}makePost(e,n){const r=Be(e);return new H(n,r)}toString(){return".value"}}const A4=new N4;/**
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
 */function qC(t){return{type:"value",snapshotNode:t}}function Ls(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ga(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ya(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function L4(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Jm{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){R(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ga(n,a)):R(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ls(n,r)):o.trackChildChange(ya(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(xe,(i,s)=>{n.hasChild(i)||r.trackChildChange(ga(i,s))}),n.isLeafNode()||n.forEachChild(xe,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ya(i,s,o))}else r.trackChildChange(Ls(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?$.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class va{constructor(e){this.indexedFilter_=new Jm(e.getIndex()),this.index_=e.getIndex(),this.startPost_=va.getStartPost_(e),this.endPost_=va.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new H(n,r))||(r=$.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=$.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority($.EMPTY_NODE);const s=this;return n.forEachChild(xe,(o,a)=>{s.matches(new H(o,a))||(i=i.updateImmediateChild(o,$.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class D4{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new va(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new H(n,r))||(r=$.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=$.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=$.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority($.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,$.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(f,p)=>c(p,f)}else o=this.index_.getCompare();const a=e;R(a.numChildren()===this.limit_,"");const l=new H(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const c=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,l);if(d&&!r.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(ya(n,r,c)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ga(n,c));const _=a.updateImmediateChild(n,$.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Ls(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return r.isEmpty()?e:d&&o(u,l)>=0?(s!=null&&(s.trackChildChange(ga(u.name,u.node)),s.trackChildChange(Ls(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,$.EMPTY_NODE)):e}}/**
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
 */class Zm{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=xe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return R(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return R(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:As}hasEnd(){return this.endSet_}getIndexEndValue(){return R(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return R(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:wi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return R(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===xe}copy(){const e=new Zm;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function M4(t){return t.loadsAllData()?new Jm(t.getIndex()):t.hasLimit()?new D4(t):new va(t)}function Mv(t){const e={};if(t.isDefault())return e;let n;if(t.index_===xe?n="$priority":t.index_===A4?n="$value":t.index_===hs?n="$key":(R(t.index_ instanceof O4,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Pe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Pe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Pe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Pe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Pe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Fv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==xe&&(e.i=t.index_.toString()),e}/**
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
 */class Hu extends MC{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ua("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(R(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Hu.getListenId_(e,r),a={};this.listens_[o]=a;const l=Mv(e._queryParams);this.restRequest_(s+".json",l,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Rs(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=Hu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Mv(e._queryParams),r=e._path.toString(),i=new Am;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ks(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=da(a.responseText)}catch{Tt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Tt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class F4{constructor(){this.rootNode_=$.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Gu(){return{value:null,children:new Map}}function YC(t,e,n){if(G(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Y(e);t.children.has(r)||t.children.set(r,Gu());const i=t.children.get(r);e=ue(e),YC(i,e,n)}}function Qh(t,e,n){t.value!==null?n(e,t.value):j4(t,(r,i)=>{const s=new oe(e.toString()+"/"+r);Qh(i,s,n)})}function j4(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class $4{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&pt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const jv=10*1e3,U4=30*1e3,z4=5*60*1e3;class B4{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new $4(e);const r=jv+(U4-jv)*Math.random();Lo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;pt(e,(i,s)=>{s>0&&Hn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Lo(this.reportStats_.bind(this),Math.floor(Math.random()*2*z4))}}/**
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
 */var Yt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Yt||(Yt={}));function QC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function eg(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function tg(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ku{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Yt.ACK_USER_WRITE,this.source=QC()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return R(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new oe(e));return new Ku(Z(),n,this.revert)}}else return R(Y(this.path)===e,"operationForChild called for unrelated child."),new Ku(ue(this.path),this.affectedTree,this.revert)}}/**
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
 */class _a{constructor(e,n){this.source=e,this.path=n,this.type=Yt.LISTEN_COMPLETE}operationForChild(e){return G(this.path)?new _a(this.source,Z()):new _a(this.source,ue(this.path))}}/**
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
 */class Ei{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Yt.OVERWRITE}operationForChild(e){return G(this.path)?new Ei(this.source,Z(),this.snap.getImmediateChild(e)):new Ei(this.source,ue(this.path),this.snap)}}/**
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
 */class wa{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Yt.MERGE}operationForChild(e){if(G(this.path)){const n=this.children.subtree(new oe(e));return n.isEmpty()?null:n.value?new Ei(this.source,Z(),n.value):new wa(this.source,Z(),n)}else return R(Y(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new wa(this.source,ue(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ar{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const n=Y(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class W4{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function V4(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(L4(o.childName,o.snapshotNode))}),co(t,i,"child_removed",e,r,n),co(t,i,"child_added",e,r,n),co(t,i,"child_moved",s,r,n),co(t,i,"child_changed",e,r,n),co(t,i,"value",e,r,n),i}function co(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>G4(t,a,l)),o.forEach(a=>{const l=H4(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function H4(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function G4(t,e,n){if(e.childName==null||n.childName==null)throw Gs("Should only compare child_ events.");const r=new H(e.childName,e.snapshotNode),i=new H(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function zc(t,e){return{eventCache:t,serverCache:e}}function Do(t,e,n,r){return zc(new Ar(e,n,r),t.serverCache)}function XC(t,e,n,r){return zc(t.eventCache,new Ar(e,n,r))}function qu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Si(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let uf;const K4=()=>(uf||(uf=new ut(NL)),uf);class pe{constructor(e,n=K4()){this.value=e,this.children=n}static fromObject(e){let n=new pe(null);return pt(e,(r,i)=>{n=n.set(new oe(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Z(),value:this.value};if(G(e))return null;{const r=Y(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ue(e),n);return s!=null?{path:Re(new oe(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const n=Y(e),r=this.children.get(n);return r!==null?r.subtree(ue(e)):new pe(null)}}set(e,n){if(G(e))return new pe(n,this.children);{const r=Y(e),s=(this.children.get(r)||new pe(null)).set(ue(e),n),o=this.children.insert(r,s);return new pe(this.value,o)}}remove(e){if(G(e))return this.children.isEmpty()?new pe(null):new pe(null,this.children);{const n=Y(e),r=this.children.get(n);if(r){const i=r.remove(ue(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new pe(null):new pe(this.value,s)}else return this}}get(e){if(G(e))return this.value;{const n=Y(e),r=this.children.get(n);return r?r.get(ue(e)):null}}setTree(e,n){if(G(e))return n;{const r=Y(e),s=(this.children.get(r)||new pe(null)).setTree(ue(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new pe(this.value,o)}}fold(e){return this.fold_(Z(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Re(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Z(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(G(e))return null;{const s=Y(e),o=this.children.get(s);return o?o.findOnPath_(ue(e),Re(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Z(),n)}foreachOnPath_(e,n,r){if(G(e))return this;{this.value&&r(n,this.value);const i=Y(e),s=this.children.get(i);return s?s.foreachOnPath_(ue(e),Re(n,i),r):new pe(null)}}foreach(e){this.foreach_(Z(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Re(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Zt{constructor(e){this.writeTree_=e}static empty(){return new Zt(new pe(null))}}function Mo(t,e,n){if(G(e))return new Zt(new pe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=tt(i,e);return s=s.updateChild(o,n),new Zt(t.writeTree_.set(i,s))}else{const i=new pe(n),s=t.writeTree_.setTree(e,i);return new Zt(s)}}}function $v(t,e,n){let r=t;return pt(n,(i,s)=>{r=Mo(r,Re(e,i),s)}),r}function Uv(t,e){if(G(e))return Zt.empty();{const n=t.writeTree_.setTree(e,new pe(null));return new Zt(n)}}function Xh(t,e){return bi(t,e)!=null}function bi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(tt(n.path,e)):null}function zv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(xe,(r,i)=>{e.push(new H(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new H(r,i.value))}),e}function Tr(t,e){if(G(e))return t;{const n=bi(t,e);return n!=null?new Zt(new pe(n)):new Zt(t.writeTree_.subtree(e))}}function Jh(t){return t.writeTree_.isEmpty()}function Ds(t,e){return JC(Z(),t.writeTree_,e)}function JC(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(R(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=JC(Re(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Re(t,".priority"),r)),n}}/**
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
 */function Bc(t,e){return nx(e,t)}function q4(t,e,n,r,i){R(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Mo(t.visibleWrites,e,n)),t.lastWriteId=r}function Y4(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Q4(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);R(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&X4(a,r.path)?i=!1:qt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return J4(t),!0;if(r.snap)t.visibleWrites=Uv(t.visibleWrites,r.path);else{const a=r.children;pt(a,l=>{t.visibleWrites=Uv(t.visibleWrites,Re(r.path,l))})}return!0}else return!1}function X4(t,e){if(t.snap)return qt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&qt(Re(t.path,n),e))return!0;return!1}function J4(t){t.visibleWrites=ZC(t.allWrites,Z4,Z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Z4(t){return t.visible}function ZC(t,e,n){let r=Zt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)qt(n,o)?(a=tt(n,o),r=Mo(r,a,s.snap)):qt(o,n)&&(a=tt(o,n),r=Mo(r,Z(),s.snap.getChild(a)));else if(s.children){if(qt(n,o))a=tt(n,o),r=$v(r,a,s.children);else if(qt(o,n))if(a=tt(o,n),G(a))r=$v(r,Z(),s.children);else{const l=Rs(s.children,Y(a));if(l){const u=l.getChild(ue(a));r=Mo(r,Z(),u)}}}else throw Gs("WriteRecord should have .snap or .children")}}return r}function ex(t,e,n,r,i){if(!r&&!i){const s=bi(t.visibleWrites,e);if(s!=null)return s;{const o=Tr(t.visibleWrites,e);if(Jh(o))return n;if(n==null&&!Xh(o,Z()))return null;{const a=n||$.EMPTY_NODE;return Ds(o,a)}}}else{const s=Tr(t.visibleWrites,e);if(!i&&Jh(s))return n;if(!i&&n==null&&!Xh(s,Z()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(qt(u.path,e)||qt(e,u.path))},a=ZC(t.allWrites,o,e),l=n||$.EMPTY_NODE;return Ds(a,l)}}}function eD(t,e,n){let r=$.EMPTY_NODE;const i=bi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(xe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Tr(t.visibleWrites,e);return n.forEachChild(xe,(o,a)=>{const l=Ds(Tr(s,new oe(o)),a);r=r.updateImmediateChild(o,l)}),zv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Tr(t.visibleWrites,e);return zv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function tD(t,e,n,r,i){R(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Re(e,n);if(Xh(t.visibleWrites,s))return null;{const o=Tr(t.visibleWrites,s);return Jh(o)?i.getChild(n):Ds(o,i.getChild(n))}}function nD(t,e,n,r){const i=Re(e,n),s=bi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Tr(t.visibleWrites,i);return Ds(o,r.getNode().getImmediateChild(n))}else return null}function rD(t,e){return bi(t.visibleWrites,e)}function iD(t,e,n,r,i,s,o){let a;const l=Tr(t.visibleWrites,e),u=bi(l,Z());if(u!=null)a=u;else if(n!=null)a=Ds(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],c=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let p=f.getNext();for(;p&&d.length<i;)c(p,r)!==0&&d.push(p),p=f.getNext();return d}else return[]}function sD(){return{visibleWrites:Zt.empty(),allWrites:[],lastWriteId:-1}}function Yu(t,e,n,r){return ex(t.writeTree,t.treePath,e,n,r)}function ng(t,e){return eD(t.writeTree,t.treePath,e)}function Bv(t,e,n,r){return tD(t.writeTree,t.treePath,e,n,r)}function Qu(t,e){return rD(t.writeTree,Re(t.treePath,e))}function oD(t,e,n,r,i,s){return iD(t.writeTree,t.treePath,e,n,r,i,s)}function rg(t,e,n){return nD(t.writeTree,t.treePath,e,n)}function tx(t,e){return nx(Re(t.treePath,e),t.writeTree)}function nx(t,e){return{treePath:t,writeTree:e}}/**
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
 */class aD{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;R(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),R(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ya(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ga(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ls(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ya(r,e.snapshotNode,i.oldSnap));else throw Gs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class lD{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const rx=new lD;class ig{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Ar(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return rg(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Si(this.viewCache_),s=oD(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function uD(t){return{filter:t}}function cD(t,e){R(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),R(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function dD(t,e,n,r,i){const s=new aD;let o,a;if(n.type===Yt.OVERWRITE){const u=n;u.source.fromUser?o=Zh(t,e,u.path,u.snap,r,i,s):(R(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!G(u.path),o=Xu(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===Yt.MERGE){const u=n;u.source.fromUser?o=hD(t,e,u.path,u.children,r,i,s):(R(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=ep(t,e,u.path,u.children,r,i,a,s))}else if(n.type===Yt.ACK_USER_WRITE){const u=n;u.revert?o=gD(t,e,u.path,r,i,s):o=pD(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Yt.LISTEN_COMPLETE)o=mD(t,e,n.path,r,s);else throw Gs("Unknown operation type: "+n.type);const l=s.getChanges();return fD(e,o,l),{viewCache:o,changes:l}}function fD(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=qu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(qC(qu(e)))}}function ix(t,e,n,r,i,s){const o=e.eventCache;if(Qu(r,n)!=null)return e;{let a,l;if(G(n))if(R(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Si(e),d=u instanceof $?u:$.EMPTY_NODE,c=ng(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=Yu(r,Si(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=Y(n);if(u===".priority"){R(Nr(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const c=Bv(r,n,d,l);c!=null?a=t.filter.updatePriority(d,c):a=o.getNode()}else{const d=ue(n);let c;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=Bv(r,n,o.getNode(),l);f!=null?c=o.getNode().getImmediateChild(u).updateChild(d,f):c=o.getNode().getImmediateChild(u)}else c=rg(r,u,e.serverCache);c!=null?a=t.filter.updateChild(o.getNode(),u,c,d,i,s):a=o.getNode()}}return Do(e,a,o.isFullyInitialized()||G(n),t.filter.filtersNodes())}}function Xu(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(G(n))u=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,r);u=d.updateFullNode(l.getNode(),p,null)}else{const p=Y(n);if(!l.isCompleteForPath(n)&&Nr(n)>1)return e;const v=ue(n),E=l.getNode().getImmediateChild(p).updateChild(v,r);p===".priority"?u=d.updatePriority(l.getNode(),E):u=d.updateChild(l.getNode(),p,E,v,rx,null)}const c=XC(e,u,l.isFullyInitialized()||G(n),d.filtersNodes()),f=new ig(i,c,s);return ix(t,c,n,i,f,a)}function Zh(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const d=new ig(i,e,s);if(G(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Do(e,u,!0,t.filter.filtersNodes());else{const c=Y(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Do(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=ue(n),p=a.getNode().getImmediateChild(c);let v;if(G(f))v=r;else{const _=d.getCompleteChild(c);_!=null?jC(f)===".priority"&&_.getChild(UC(f)).isEmpty()?v=_:v=_.updateChild(f,r):v=$.EMPTY_NODE}if(p.equals(v))l=e;else{const _=t.filter.updateChild(a.getNode(),c,v,f,d,o);l=Do(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Wv(t,e){return t.eventCache.isCompleteForChild(e)}function hD(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const d=Re(n,l);Wv(e,Y(d))&&(a=Zh(t,a,d,u,i,s,o))}),r.foreach((l,u)=>{const d=Re(n,l);Wv(e,Y(d))||(a=Zh(t,a,d,u,i,s,o))}),a}function Vv(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function ep(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;G(n)?u=r:u=new pe(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,f)=>{if(d.hasChild(c)){const p=e.serverCache.getNode().getImmediateChild(c),v=Vv(t,p,f);l=Xu(t,l,new oe(c),v,i,s,o,a)}}),u.children.inorderTraversal((c,f)=>{const p=!e.serverCache.isCompleteForChild(c)&&f.value===null;if(!d.hasChild(c)&&!p){const v=e.serverCache.getNode().getImmediateChild(c),_=Vv(t,v,f);l=Xu(t,l,new oe(c),_,i,s,o,a)}}),l}function pD(t,e,n,r,i,s,o){if(Qu(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(G(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Xu(t,e,n,l.getNode().getChild(n),i,s,a,o);if(G(n)){let u=new pe(null);return l.getNode().forEachChild(hs,(d,c)=>{u=u.set(new oe(d),c)}),ep(t,e,n,u,i,s,a,o)}else return e}else{let u=new pe(null);return r.foreach((d,c)=>{const f=Re(n,d);l.isCompleteForPath(f)&&(u=u.set(d,l.getNode().getChild(f)))}),ep(t,e,n,u,i,s,a,o)}}function mD(t,e,n,r,i){const s=e.serverCache,o=XC(e,s.getNode(),s.isFullyInitialized()||G(n),s.isFiltered());return ix(t,o,n,r,rx,i)}function gD(t,e,n,r,i,s){let o;if(Qu(r,n)!=null)return e;{const a=new ig(r,e,i),l=e.eventCache.getNode();let u;if(G(n)||Y(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Yu(r,Si(e));else{const c=e.serverCache.getNode();R(c instanceof $,"serverChildren would be complete if leaf node"),d=ng(r,c)}d=d,u=t.filter.updateFullNode(l,d,s)}else{const d=Y(n);let c=rg(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=l.getImmediateChild(d)),c!=null?u=t.filter.updateChild(l,d,c,ue(n),a,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(l,d,$.EMPTY_NODE,ue(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Yu(r,Si(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Qu(r,Z())!=null,Do(e,u,o,t.filter.filtersNodes())}}/**
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
 */class yD{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Jm(r.getIndex()),s=M4(r);this.processor_=uD(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode($.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode($.EMPTY_NODE,a.getNode(),null),d=new Ar(l,o.isFullyInitialized(),i.filtersNodes()),c=new Ar(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=zc(c,d),this.eventGenerator_=new W4(this.query_)}get query(){return this.query_}}function vD(t){return t.viewCache_.serverCache.getNode()}function _D(t){return qu(t.viewCache_)}function wD(t,e){const n=Si(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!G(e)&&!n.getImmediateChild(Y(e)).isEmpty())?n.getChild(e):null}function Hv(t){return t.eventRegistrations_.length===0}function ED(t,e){t.eventRegistrations_.push(e)}function Gv(t,e,n){const r=[];if(n){R(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Kv(t,e,n,r){e.type===Yt.MERGE&&e.source.queryId!==null&&(R(Si(t.viewCache_),"We should always have a full cache before handling merges"),R(qu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=dD(t.processor_,i,e,n,r);return cD(t.processor_,s.viewCache),R(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,sx(t,s.changes,s.viewCache.eventCache.getNode(),null)}function SD(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(xe,(s,o)=>{r.push(Ls(s,o))}),n.isFullyInitialized()&&r.push(qC(n.getNode())),sx(t,r,n.getNode(),e)}function sx(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return V4(t.eventGenerator_,e,n,i)}/**
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
 */let Ju;class ox{constructor(){this.views=new Map}}function CD(t){R(!Ju,"__referenceConstructor has already been defined"),Ju=t}function xD(){return R(Ju,"Reference.ts has not been loaded"),Ju}function TD(t){return t.views.size===0}function sg(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return R(s!=null,"SyncTree gave us an op for an invalid query."),Kv(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Kv(o,e,n,r));return s}}function ax(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Yu(n,i?r:null),l=!1;a?l=!0:r instanceof $?(a=ng(n,r),l=!1):(a=$.EMPTY_NODE,l=!1);const u=zc(new Ar(a,l,!1),new Ar(r,i,!1));return new yD(e,u)}return o}function ID(t,e,n,r,i,s){const o=ax(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),ED(o,n),SD(o,n)}function kD(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Lr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(Gv(u,n,r)),Hv(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(Gv(l,n,r)),Hv(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Lr(t)&&s.push(new(xD())(e._repo,e._path)),{removed:s,events:o}}function lx(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ir(t,e){let n=null;for(const r of t.views.values())n=n||wD(r,e);return n}function ux(t,e){if(e._queryParams.loadsAllData())return Wc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function cx(t,e){return ux(t,e)!=null}function Lr(t){return Wc(t)!=null}function Wc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Zu;function bD(t){R(!Zu,"__referenceConstructor has already been defined"),Zu=t}function PD(){return R(Zu,"Reference.ts has not been loaded"),Zu}let RD=1;class qv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new pe(null),this.pendingWriteTree_=sD(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function OD(t,e,n,r,i){return q4(t.pendingWriteTree_,e,n,r,i),i?Va(t,new Ei(QC(),e,n)):[]}function ts(t,e,n=!1){const r=Y4(t.pendingWriteTree_,e);if(Q4(t.pendingWriteTree_,e)){let s=new pe(null);return r.snap!=null?s=s.set(Z(),!0):pt(r.children,o=>{s=s.set(new oe(o),!0)}),Va(t,new Ku(r.path,s,n))}else return[]}function Wa(t,e,n){return Va(t,new Ei(eg(),e,n))}function ND(t,e,n){const r=pe.fromObject(n);return Va(t,new wa(eg(),e,r))}function AD(t,e){return Va(t,new _a(eg(),e))}function LD(t,e,n){const r=og(t,n);if(r){const i=ag(r),s=i.path,o=i.queryId,a=tt(s,e),l=new _a(tg(o),a);return lg(t,s,l)}else return[]}function dx(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||cx(o,e))){const l=kD(o,e,n,r);TD(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const d=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(f,p)=>Lr(p));if(d&&!c){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const p=jD(f);for(let v=0;v<p.length;++v){const _=p[v],E=_.query,m=gx(t,_);t.listenProvider_.startListening(Fo(E),Ea(t,E),m.hashFn,m.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(Fo(e),null):u.forEach(f=>{const p=t.queryToTagMap.get(Vc(f));t.listenProvider_.stopListening(Fo(f),p)}))}$D(t,u)}return a}function fx(t,e,n,r){const i=og(t,r);if(i!=null){const s=ag(i),o=s.path,a=s.queryId,l=tt(o,e),u=new Ei(tg(a),l,n);return lg(t,o,u)}else return[]}function DD(t,e,n,r){const i=og(t,r);if(i){const s=ag(i),o=s.path,a=s.queryId,l=tt(o,e),u=pe.fromObject(n),d=new wa(tg(a),l,u);return lg(t,o,d)}else return[]}function MD(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,p)=>{const v=tt(f,i);s=s||Ir(p,v),o=o||Lr(p)});let a=t.syncPointTree_.get(i);a?(o=o||Lr(a),s=s||Ir(a,Z())):(a=new ox,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=$.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,v)=>{const _=Ir(v,Z());_&&(s=s.updateImmediateChild(p,_))}));const u=cx(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=Vc(e);R(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=UD();t.queryToTagMap.set(f,p),t.tagToQueryMap.set(p,f)}const d=Bc(t.pendingWriteTree_,i);let c=ID(a,e,n,d,s,l);if(!u&&!o&&!r){const f=ux(a,e);c=c.concat(zD(t,e,f))}return c}function hx(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=tt(o,e),u=Ir(a,l);if(u)return u});return ex(i,e,s,n,!0)}function FD(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=tt(u,n);r=r||Ir(d,c)});let i=t.syncPointTree_.get(n);i?r=r||Ir(i,Z()):(i=new ox,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Ar(r,!0,!1):null,a=Bc(t.pendingWriteTree_,e._path),l=ax(i,e,a,s?o.getNode():$.EMPTY_NODE,s);return _D(l)}function Va(t,e){return px(e,t.syncPointTree_,null,Bc(t.pendingWriteTree_,Z()))}function px(t,e,n,r){if(G(t.path))return mx(t,e,n,r);{const i=e.get(Z());n==null&&i!=null&&(n=Ir(i,Z()));let s=[];const o=Y(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,d=tx(r,o);s=s.concat(px(a,l,u,d))}return i&&(s=s.concat(sg(i,t,r,n))),s}}function mx(t,e,n,r){const i=e.get(Z());n==null&&i!=null&&(n=Ir(i,Z()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=tx(r,o),d=t.operationForChild(o);d&&(s=s.concat(mx(d,a,l,u)))}),i&&(s=s.concat(sg(i,t,r,n))),s}function gx(t,e){const n=e.query,r=Ea(t,n);return{hashFn:()=>(vD(e)||$.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?LD(t,n._path,r):AD(t,n._path);{const s=DL(i,n);return dx(t,n,null,s)}}}}function Ea(t,e){const n=Vc(e);return t.queryToTagMap.get(n)}function Vc(t){return t._path.toString()+"$"+t._queryIdentifier}function og(t,e){return t.tagToQueryMap.get(e)}function ag(t){const e=t.indexOf("$");return R(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new oe(t.substr(0,e))}}function lg(t,e,n){const r=t.syncPointTree_.get(e);R(r,"Missing sync point for query tag that we're tracking");const i=Bc(t.pendingWriteTree_,e);return sg(r,n,i,null)}function jD(t){return t.fold((e,n,r)=>{if(n&&Lr(n))return[Wc(n)];{let i=[];return n&&(i=lx(n)),pt(r,(s,o)=>{i=i.concat(o)}),i}})}function Fo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(PD())(t._repo,t._path):t}function $D(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Vc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function UD(){return RD++}function zD(t,e,n){const r=e._path,i=Ea(t,e),s=gx(t,n),o=t.listenProvider_.startListening(Fo(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)R(!Lr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,d,c)=>{if(!G(u)&&d&&Lr(d))return[Wc(d).query];{let f=[];return d&&(f=f.concat(lx(d).map(p=>p.query))),pt(c,(p,v)=>{f=f.concat(v)}),f}});for(let u=0;u<l.length;++u){const d=l[u];t.listenProvider_.stopListening(Fo(d),Ea(t,d))}}return o}/**
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
 */class ug{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ug(n)}node(){return this.node_}}class cg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Re(this.path_,e);return new cg(this.syncTree_,n)}node(){return hx(this.syncTree_,this.path_)}}const BD=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Yv=function(t,e,n){if(!t||typeof t!="object")return t;if(R(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return WD(t[".sv"],e,n);if(typeof t[".sv"]=="object")return VD(t[".sv"],e);R(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},WD=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:R(!1,"Unexpected server value: "+t)}},VD=function(t,e,n){t.hasOwnProperty("increment")||R(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&R(!1,"Unexpected increment value: "+r);const i=e.node();if(R(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},HD=function(t,e,n,r){return dg(e,new cg(n,t),r)},GD=function(t,e,n){return dg(t,new ug(e),n)};function dg(t,e,n){const r=t.getPriority().val(),i=Yv(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Yv(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ae(a,Be(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ae(i))),o.forEachChild(xe,(a,l)=>{const u=dg(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class fg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function hg(t,e){let n=e instanceof oe?e:new oe(e),r=t,i=Y(n);for(;i!==null;){const s=Rs(r.node.children,i)||{children:{},childCount:0};r=new fg(i,r,s),n=ue(n),i=Y(n)}return r}function Xs(t){return t.node.value}function yx(t,e){t.node.value=e,tp(t)}function vx(t){return t.node.childCount>0}function KD(t){return Xs(t)===void 0&&!vx(t)}function Hc(t,e){pt(t.node.children,(n,r)=>{e(new fg(n,t,r))})}function _x(t,e,n,r){n&&!r&&e(t),Hc(t,i=>{_x(i,e,!0,r)}),n&&r&&e(t)}function qD(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ha(t){return new oe(t.parent===null?t.name:Ha(t.parent)+"/"+t.name)}function tp(t){t.parent!==null&&YD(t.parent,t.name,t)}function YD(t,e,n){const r=KD(n),i=Hn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,tp(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,tp(t))}/**
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
 */const QD=/[\[\].#$\/\u0000-\u001F\u007F]/,XD=/[\[\].#$\u0000-\u001F\u007F]/,cf=10*1024*1024,wx=function(t){return typeof t=="string"&&t.length!==0&&!QD.test(t)},Ex=function(t){return typeof t=="string"&&t.length!==0&&!XD.test(t)},JD=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ex(t)},Sx=function(t,e,n){const r=n instanceof oe?new p4(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Yr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Yr(r)+" with contents = "+e.toString());if(yC(e))throw new Error(t+"contains "+e.toString()+" "+Yr(r));if(typeof e=="string"&&e.length>cf/3&&Lc(e)>cf)throw new Error(t+"contains a string greater than "+cf+" utf8 bytes "+Yr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(pt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!wx(o)))throw new Error(t+" contains an invalid key ("+o+") "+Yr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);m4(r,o),Sx(t,a,r),g4(r)}),i&&s)throw new Error(t+' contains ".value" child '+Yr(r)+" in addition to actual children.")}},Cx=function(t,e,n,r){if(!(r&&n===void 0)&&!Ex(n))throw new Error(TS(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ZD=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Cx(t,e,n,r)},e5=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!wx(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!JD(n))throw new Error(TS(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class t5{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function n5(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!zC(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function zr(t,e,n){n5(t,n),r5(t,r=>qt(r,e)||qt(e,r))}function r5(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(i5(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function i5(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();li&&Ye("event: "+n.toString()),za(r)}}}/**
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
 */const s5="repo_interrupt",o5=25;class a5{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new t5,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Gu(),this.transactionQueueTree_=new fg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function l5(t,e,n){if(t.stats_=qm(t.repoInfo_),t.forceRestClient_||$L())t.server_=new Hu(t.repoInfo_,(r,i,s,o)=>{Qv(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Xv(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Pe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Ln(t.repoInfo_,e,(r,i,s,o)=>{Qv(t,r,i,s,o)},r=>{Xv(t,r)},r=>{c5(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=VL(t.repoInfo_,()=>new B4(t.stats_,t.server_)),t.infoData_=new F4,t.infoSyncTree_=new qv({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Wa(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),pg(t,"connected",!1),t.serverSyncTree_=new qv({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);zr(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function u5(t){const n=t.infoData_.getNode(new oe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function xx(t){return BD({timestamp:u5(t)})}function Qv(t,e,n,r,i){t.dataUpdateCount++;const s=new oe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Lu(n,u=>Be(u));o=DD(t.serverSyncTree_,s,l,i)}else{const l=Be(n);o=fx(t.serverSyncTree_,s,l,i)}else if(r){const l=Lu(n,u=>Be(u));o=ND(t.serverSyncTree_,s,l)}else{const l=Be(n);o=Wa(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=yg(t,s)),zr(t.eventQueue_,a,o)}function Xv(t,e){pg(t,"connected",e),e===!1&&h5(t)}function c5(t,e){pt(e,(n,r)=>{pg(t,n,r)})}function pg(t,e,n){const r=new oe("/.info/"+e),i=Be(n);t.infoData_.updateSnapshot(r,i);const s=Wa(t.infoSyncTree_,r,i);zr(t.eventQueue_,r,s)}function d5(t){return t.nextWriteId_++}function f5(t,e,n){const r=FD(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Be(i).withIndex(e._queryParams.getIndex());MD(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Wa(t.serverSyncTree_,e._path,s);else{const a=Ea(t.serverSyncTree_,e);o=fx(t.serverSyncTree_,e._path,s,a)}return zr(t.eventQueue_,e._path,o),dx(t.serverSyncTree_,e,n,null,!0),s},i=>(mg(t,"get for query "+Pe(e)+" failed: "+i),Promise.reject(new Error(i))))}function h5(t){mg(t,"onDisconnectEvents");const e=xx(t),n=Gu();Qh(t.onDisconnect_,Z(),(i,s)=>{const o=HD(i,s,t.serverSyncTree_,e);YC(n,i,o)});let r=[];Qh(n,Z(),(i,s)=>{r=r.concat(Wa(t.serverSyncTree_,i,s));const o=y5(t,i);yg(t,o)}),t.onDisconnect_=Gu(),zr(t.eventQueue_,Z(),r)}function p5(t){t.persistentConnection_&&t.persistentConnection_.interrupt(s5)}function mg(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ye(n,...e)}function Tx(t,e,n){return hx(t.serverSyncTree_,e,n)||$.EMPTY_NODE}function gg(t,e=t.transactionQueueTree_){if(e||Gc(t,e),Xs(e)){const n=kx(t,e);R(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&m5(t,Ha(e),n)}else vx(e)&&Hc(e,n=>{gg(t,n)})}function m5(t,e,n){const r=n.map(u=>u.currentWriteId),i=Tx(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];R(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=tt(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{mg(t,"transaction put response",{path:l.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(ts(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&c.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Gc(t,hg(t.transactionQueueTree_,e)),gg(t,t.transactionQueueTree_),zr(t.eventQueue_,e,d);for(let f=0;f<c.length;f++)za(c[f])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{Tt("transaction at "+l.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}yg(t,e)}},o)}function yg(t,e){const n=Ix(t,e),r=Ha(n),i=kx(t,n);return g5(t,i,r),r}function g5(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=tt(n,l.path);let d=!1,c;if(R(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,c=l.abortReason,i=i.concat(ts(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=o5)d=!0,c="maxretry",i=i.concat(ts(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Tx(t,l.path,o);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){Sx("transaction failed: Data returned ",p,l.path);let v=Be(p);typeof p=="object"&&p!=null&&Hn(p,".priority")||(v=v.updatePriority(f.getPriority()));const E=l.currentWriteId,m=xx(t),h=GD(v,f,m);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=h,l.currentWriteId=d5(t),o.splice(o.indexOf(E),1),i=i.concat(OD(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(ts(t.serverSyncTree_,E,!0))}else d=!0,c="nodata",i=i.concat(ts(t.serverSyncTree_,l.currentWriteId,!0))}zr(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(c==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(c),!1,null))))}Gc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)za(r[a]);gg(t,t.transactionQueueTree_)}function Ix(t,e){let n,r=t.transactionQueueTree_;for(n=Y(e);n!==null&&Xs(r)===void 0;)r=hg(r,n),e=ue(e),n=Y(e);return r}function kx(t,e){const n=[];return bx(t,e,n),n.sort((r,i)=>r.order-i.order),n}function bx(t,e,n){const r=Xs(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Hc(e,i=>{bx(t,i,n)})}function Gc(t,e){const n=Xs(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,yx(e,n.length>0?n:void 0)}Hc(e,r=>{Gc(t,r)})}function y5(t,e){const n=Ha(Ix(t,e)),r=hg(t.transactionQueueTree_,e);return qD(r,i=>{df(t,i)}),df(t,r),_x(r,i=>{df(t,i)}),n}function df(t,e){const n=Xs(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(R(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(R(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ts(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?yx(e,void 0):n.length=s+1,zr(t.eventQueue_,Ha(e),i);for(let o=0;o<r.length;o++)za(r[o])}}/**
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
 */function v5(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function _5(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Tt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Jv=function(t,e){const n=w5(t),r=n.namespace;n.domain==="firebase.com"&&zn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&zn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||RL();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new PC(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new oe(n.pathString)}},w5=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=v5(t.substring(d,c)));const f=_5(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const p=e.slice(0,u);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class E5{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Pe(this.snapshot.exportVal())}}class S5{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class C5{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return R(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class vg{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return G(this._path)?null:jC(this._path)}get ref(){return new Kn(this._repo,this._path)}get _queryIdentifier(){const e=Fv(this._queryParams),n=Gm(e);return n==="{}"?"default":n}get _queryObject(){return Fv(this._queryParams)}isEqual(e){if(e=mt(e),!(e instanceof vg))return!1;const n=this._repo===e._repo,r=zC(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+h4(this._path)}}class Kn extends vg{constructor(e,n){super(e,n,new Zm,!1)}get parent(){const e=UC(this._path);return e===null?null:new Kn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Sa{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new oe(e),r=np(this.ref,e);return new Sa(this._node.getChild(n),r,xe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Sa(i,np(this.ref,r),xe)))}hasChild(e){const n=new oe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function x5(t,e){return t=mt(t),t._checkNotDeleted("ref"),e!==void 0?np(t._root,e):t._root}function np(t,e){return t=mt(t),Y(t._path)===null?ZD("child","path",e,!1):Cx("child","path",e,!1),new Kn(t._repo,Re(t._path,e))}function T5(t){t=mt(t);const e=new C5(()=>{}),n=new _g(e);return f5(t._repo,t,n).then(r=>new Sa(r,new Kn(t._repo,t._path),t._queryParams.getIndex()))}class _g{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new E5("value",this,new Sa(e.snapshotNode,new Kn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new S5(this,e,n):null}matches(e){return e instanceof _g?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}CD(Kn);bD(Kn);/**
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
 */const I5="FIREBASE_DATABASE_EMULATOR_HOST",rp={};let k5=!1;function b5(t,e,n,r){t.repoInfo_=new PC(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function P5(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||zn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ye("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Jv(s,i),a=o.repoInfo,l,u;typeof process<"u"&&_v&&(u=_v[I5]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=Jv(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const d=i&&l?new fs(fs.OWNER):new zL(t.name,t.options,e);e5("Invalid Firebase Database URL",o),G(o.path)||zn("Database URL must point to the root of a Firebase Database (not including a child path).");const c=O5(a,t,d,new UL(t.name,n));return new N5(c,t)}function R5(t,e){const n=rp[e];(!n||n[t.key]!==t)&&zn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),p5(t),delete n[t.key]}function O5(t,e,n,r){let i=rp[e.name];i||(i={},rp[e.name]=i);let s=i[t.toURLString()];return s&&zn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new a5(t,k5,n,r),i[t.toURLString()]=s,s}class N5{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(l5(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Kn(this._repo,Z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(R5(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&zn("Cannot call "+e+" on a deleted database.")}}function A5(t=PS(),e){const n=Fm(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=wO("database");r&&L5(n,...r)}return n}function L5(t,e,n,r={}){t=mt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&zn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&zn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new fs(fs.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:EO(r.mockUserToken,t.app.options.projectId);s=new fs(o)}b5(i,e,n,s)}/**
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
 */function D5(t){TL(qs),Os(new gi("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return P5(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),xr(wv,Ev,t),xr(wv,Ev,"esm2017")}Ln.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ln.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};D5();var M5="firebase",F5="10.8.1";/**
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
 */xr(M5,F5,"app");const j5="AIzaSyBvNsD3kcb2TUqMM9BqdQ32YRe6fDJSmyY",$5="learn-react-60375.firebaseapp.com",U5="learn-react-60375",z5="learn-react-60375.appspot.com",B5="1070256347866",W5="1:1070256347866:web:ab4f6b96e7a6bb857ba3e3",V5="https://learn-react-60375-default-rtdb.europe-west1.firebasedatabase.app",H5={apiKey:j5,authDomain:$5,projectId:U5,storageBucket:z5,messagingSenderId:B5,appId:W5,databaseURL:V5},G5=bS(H5),K5=A5(G5),Gl=Aa("teachers/getTeachers",async({signal:t},e)=>{try{const n=x5(K5);return(await T5(n,{signal:t})).val()}catch(n){return e.rejectWithValue(n.message)}}),q5=t=>t.teachers.teachersCard,Px=t=>t.teachers.favorite,Y5=P.li`
  width: 1184px;
  padding: 24px;
  border-radius: 24px;
  background: rgb(255, 255, 255);
  display: flex;
  position: relative;
  gap: 48px;
`,Q5=P.div`
  position: relative;
  width: 120px;
  height: 120px;
  border: 3px solid rgb(251, 233, 186);
  border-radius: 100px;
  background: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
`,X5=P.img`
  border-radius: 100px;
  width: 96px;
  height: 96px;
`,J5=P.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 19px;
  right: 17px;
  width: 12px;
  height: 12px;
`,Z5=P.div``,e6=P.div``,t6=P.ul`
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
`,fo=P.li`
  align-items: center;
`,n6=P.div`
  display: flex;
  align-items: center;
`,r6=P.div`
  display: flex;
  align-items: center;
`,i6=P.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: rgb(56, 205, 62);
`,s6=P.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 24px;
  right: 24px;
  cursor: pointer;
`,o6=P.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  margin-bottom: 32px;
`,ff=P.span`
  color: rgb(18, 20, 23);
  text-decoration: underline;
`,a6=P.ul`
  text-align: start;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
  li:not(:first-child) > span {
    text-decoration: none;
  }
`,hf=P.li`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: rgb(138, 138, 137);
`,l6=P.button`
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
`,u6=P.ul`
  display: flex;
  gap: 8px;
  & > :first-child {
    background: rgb(244, 197, 80);
    border: none;
  }
  margin-bottom: 32px;
`,c6=P.li`
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
`,d6=()=>g.jsxs("svg",{width:"12.000000",height:"12.000000",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[g.jsx("desc",{children:"Created with Pixso."}),g.jsx("defs",{}),g.jsx("circle",{id:"Ellipse 1",cx:"6.000000",cy:"6.000000",r:"6.000000",fill:"#FFFFFF",fillOpacity:"1.000000"}),g.jsx("circle",{id:"Ellipse 2",cx:"6.000000",cy:"6.000000",r:"4.000000",fill:"#38CD3E",fillOpacity:"1.000000"})]}),f6=()=>g.jsxs("svg",{width:"16.000000",height:"16.000000",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[g.jsx("desc",{children:"Created with Pixso."}),g.jsx("defs",{children:g.jsx("clipPath",{id:"clip44_528",children:g.jsx("rect",{id:"book-open-01",width:"16.000000",height:"16.000000",fill:"white",fillOpacity:"0"})})}),g.jsx("rect",{id:"book-open-01",width:"16.000000",height:"16.000000",fill:"#FFFFFF",fillOpacity:"0"}),g.jsxs("g",{clipPath:"url(#clip44_528)",children:[g.jsx("path",{id:"Accent",d:"M12.2667 2C10.7732 2 10.0264 2 9.45605 2.29065C8.95428 2.54626 8.54633 2.95422 8.29065 3.45605C8 4.02649 8 4.77319 8 6.26672L8 14L8.06671 13.8999C8.52979 13.2053 8.76135 12.858 9.06726 12.6066C9.33807 12.3839 9.65015 12.2169 9.9856 12.1151C10.3645 12 10.7819 12 11.6168 12L12.5333 12C13.2801 12 13.6534 12 13.9387 11.8547C14.1895 11.7268 14.3935 11.5228 14.5214 11.272C14.6667 10.9868 14.6667 10.6134 14.6667 9.8667L14.6667 4.1333C14.6667 3.3866 14.6667 3.01318 14.5214 2.72803C14.3935 2.47717 14.1895 2.27319 13.9387 2.14526C13.6534 2 13.2801 2 12.5333 2L12.2667 2Z",stroke:"#000000",strokeOpacity:"1.000000",strokeWidth:"1.500000",strokeLinejoin:"round"}),g.jsx("path",{id:"Icon",d:"M3.7334 2C5.22687 2 5.97357 2 6.54401 2.29065C7.04578 2.54626 7.45374 2.95422 7.70941 3.45605C8.00006 4.02649 8.00006 4.77319 8.00006 6.26672L8.00006 14L7.93335 13.8999C7.47021 13.2053 7.23871 12.858 6.9328 12.6066C6.66193 12.3839 6.34985 12.2169 6.01447 12.1151C5.63556 12 5.21814 12 4.38324 12L3.46674 12C2.71997 12 2.34662 12 2.0614 11.8547C1.81049 11.7268 1.60651 11.5228 1.4787 11.272C1.33337 10.9868 1.33337 10.6134 1.33337 9.8667L1.33337 4.1333C1.33337 3.3866 1.33337 3.01318 1.4787 2.72803C1.60651 2.47717 1.81049 2.27319 2.0614 2.14526C2.34662 2 2.71997 2 3.46674 2L3.7334 2Z",stroke:"#000000",strokeOpacity:"1.000000",strokeWidth:"1.500000",strokeLinejoin:"round"})]})]}),Rx=()=>g.jsxs("svg",{width:"16.000000",height:"16.000000",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[g.jsx("desc",{children:"Created with Pixso."}),g.jsx("defs",{children:g.jsx("clipPath",{id:"clip44_535",children:g.jsx("rect",{id:"icon/star",width:"16.000000",height:"16.000000",fill:"white",fillOpacity:"0"})})}),g.jsxs("g",{clipPath:"url(#clip44_535)",children:[g.jsx("path",{id:"Star 2",d:"M7.55777 0.838135L5.66953 4.41699C5.5972 4.5542 5.46533 4.65002 5.31256 4.67639L1.32535 5.36633C0.929199 5.43481 0.771851 5.91919 1.05203 6.2074L3.87225 9.10925C3.98032 9.22034 4.03067 9.37537 4.00861 9.52881L3.43262 13.5341C3.3754 13.932 3.78738 14.2313 4.14816 14.054L7.77939 12.2684C7.91852 12.2001 8.08148 12.2001 8.22061 12.2684L11.8519 14.054C12.2126 14.2313 12.6246 13.932 12.5674 13.5341L11.9914 9.52881C11.9693 9.37537 12.0197 9.22034 12.1277 9.10925L14.948 6.2074C15.2281 5.91919 15.0708 5.43481 14.6747 5.36633L10.6874 4.67639C10.5347 4.65002 10.4028 4.5542 10.3304 4.41699L8.44223 0.838135C8.25461 0.482544 7.74539 0.482544 7.55777 0.838135Z",fill:"#FFC531",fillOpacity:"1.000000",fillRule:"evenodd"}),g.jsx("path",{id:"Star 2",d:"M5.66953 4.41699C5.5972 4.5542 5.46533 4.65002 5.31256 4.67639L1.32535 5.36633C0.929199 5.43481 0.771851 5.91919 1.05203 6.2074L3.87225 9.10925C3.98032 9.22034 4.03067 9.37537 4.00861 9.52881L3.43262 13.5341C3.3754 13.932 3.78738 14.2313 4.14816 14.054L7.77939 12.2684C7.91852 12.2001 8.08148 12.2001 8.22061 12.2684L11.8519 14.054C12.2126 14.2313 12.6246 13.932 12.5674 13.5341L11.9914 9.52881C11.9693 9.37537 12.0197 9.22034 12.1277 9.10925L14.948 6.2074C15.2281 5.91919 15.0708 5.43481 14.6747 5.36633L10.6874 4.67639C10.5347 4.65002 10.4028 4.5542 10.3304 4.41699L8.44223 0.838135C8.25461 0.482544 7.74539 0.482544 7.55777 0.838135L5.66953 4.41699ZM6.73087 4.97705C6.48489 5.44324 6.03656 5.76892 5.51715 5.85889L2.83725 6.32251L4.73279 8.27283C5.10019 8.65088 5.27142 9.17786 5.19638 9.69971L4.80927 12.3917L7.24988 11.1917C7.7229 10.959 8.2771 10.959 8.75012 11.1917L11.1907 12.3917L10.8036 9.69971C10.7286 9.17786 10.8998 8.65088 11.2672 8.27283L13.1628 6.32251L10.4828 5.85889C9.96344 5.76892 9.51511 5.44324 9.26913 4.97705L8 2.57153L6.73087 4.97705Z",fill:"#FFC531",fillOpacity:"1.000000",fillRule:"evenodd"})]})]}),Zv=({fill:t})=>g.jsxs("svg",{width:"24.645044",height:"21.751221",viewBox:"0 0 24.645 21.7512",fill:t,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[g.jsx("desc",{children:"Created with Pixso."}),g.jsx("defs",{}),g.jsx("path",{id:"Vector",d:"M19.9655 1.45386C19.2425 1.15417 18.4674 1 17.6847 1C16.902 1 16.127 1.15417 15.4039 1.45386C14.6809 1.75342 14.0239 2.1925 13.4706 2.74609L12.3222 3.89453L11.1739 2.74609C10.0562 1.62842 8.54035 1.00061 6.95973 1.00061C5.37911 1.00061 3.86323 1.62842 2.74557 2.74609C1.6279 3.86377 1 5.37964 1 6.96033C1 8.54089 1.6279 10.0568 2.74557 11.1744L3.8939 12.3228L12.3222 20.7511L20.7506 12.3228L21.8989 11.1744C22.4525 10.6212 22.8916 9.96423 23.1912 9.24109C23.4908 8.51807 23.645 7.74304 23.645 6.96033C23.645 6.17761 23.4908 5.40259 23.1912 4.67957C22.8916 3.95642 22.4525 3.29944 21.8989 2.74609C21.3456 2.1925 20.6886 1.75342 19.9655 1.45386Z",stroke:"#121417",strokeOpacity:"1.000000",strokeWidth:"2.000000",strokeLinejoin:"round"})]}),h6=P.p`
  color: rgb(18, 20, 23);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  width: 968px;
  margin-bottom: 32px;
`,p6=P.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 32px;
`;P.img`
  border-radius: 100px;
`;const m6=P.div`
  width: 44px;
  height: 44px;
  background-size: cover;
  border-radius: 100px;
  background-image: url(${t=>t.avatarUrl});
  background-position: 50%;
`,g6=P.li``,y6=P.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
`,v6=P.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`,e_=P.li`
  color: rgb(138, 138, 137);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  display: flex;
  align-items: center;
  gap: 8px;
`,_6=P.span`
  color: rgb(18, 20, 23);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`,w6=P.p`
  color: rgb(18, 20, 23);

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;

  text-align: left;
`,E6=({children:t})=>g.jsx(SP,{shouldForwardProp:e=>e!=="avatarUrl",children:t}),Ox=({experience:t,reviews:e})=>g.jsxs(g.Fragment,{children:[g.jsx(h6,{children:t}),g.jsx(p6,{children:e.map((n,r)=>g.jsxs(g6,{children:[g.jsxs(v6,{children:[g.jsx("div",{children:g.jsx(m6,{avatarUrl:n.reviewer_avatar})}),g.jsxs(y6,{children:[g.jsx(e_,{children:n.reviewer_name}),g.jsxs(e_,{children:[g.jsx(Rx,{}),g.jsxs(_6,{children:[" ",n.reviewer_rating]})]})]})]}),g.jsx(w6,{children:n.comment})]},r))})]});Ox.propTypes={experience:K.string,reviews:K.arrayOf(K.shape({comment:K.string,reviewer_name:K.string,reviewer_rating:K.number}))};const S6=P.button`
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
    background-color: ${ge.YELLOW_HOVER_BUTTON};
  }
`,C6=()=>g.jsx(S6,{children:"Book trial lesson"}),x6={teachersCard:[],favorite:[],isLoading:!1,error:""},wg=pS({name:"teachers",initialState:x6,reducers:{setFavorite:(t,e)=>{t.favorite.push(e.payload)},delFavorite:(t,e)=>{t.favorite=t.favorite.filter(n=>n.id!==e.payload.id)}},extraReducers:t=>{t.addCase(Gl.pending,e=>{e.isLoading=!0}).addCase(Gl.fulfilled,(e,n)=>{e.isLoading=!1,e.teachersCard=n.payload,e.error=""}).addCase(Gl.rejected,(e,n)=>{e.isLoading=!1,e.error=n.payload})}}),{setFavorite:T6}=wg.actions,{delFavorite:I6}=wg.actions,k6=wg.reducer,Eg=t=>{const{id:e,avatar_url:n,conditions:r,experience:i,languages:s,lesson_info:o,lessons_done:a,levels:l,name:u,price_per_hour:d,rating:c,reviews:f,surname:p}=t,[v,_]=C.useState(!1),E=Pc(Px),m=Hs(),h=E.some(T=>T.id===e),y=()=>{_(!0)},w=()=>{m(h?I6(t):T6(t))};return g.jsxs(Y5,{children:[g.jsxs(Q5,{children:[g.jsx(J5,{children:g.jsx(d6,{})}),g.jsx(X5,{src:n,alt:"avatar"})]}),g.jsxs(Z5,{children:[g.jsx(s6,{onClick:()=>w(),children:h?g.jsx(Zv,{fill:"#F4C550"}):g.jsx(Zv,{fill:"transparent"})}),g.jsx(e6,{children:g.jsxs(t6,{children:[g.jsx(fo,{children:"Languages"}),g.jsxs(fo,{children:[g.jsx(n6,{children:g.jsx(f6,{})}),"Lessons online"]}),g.jsxs(fo,{children:["Lessons done: ",a]}),g.jsxs(fo,{children:[g.jsx(r6,{children:g.jsx(Rx,{})}),"Rating: ",c]}),g.jsxs(fo,{children:["Price / 1 hour: ",g.jsx(i6,{children:d})]})]})}),g.jsxs(o6,{children:[u," ",p]}),g.jsxs(a6,{children:[g.jsxs(hf,{children:["Speaks: ",g.jsx(ff,{children:s.join(", ")})]}),g.jsxs(hf,{children:["Lesson Info: ",g.jsx(ff,{children:o})]}),g.jsxs(hf,{children:["Conditions: ",g.jsx(ff,{children:r.join(", ")})]})]}),!v&&g.jsx(l6,{onClick:y,children:"Read more"}),v&&g.jsx(Ox,{experience:i,reviews:f}),g.jsx(u6,{children:l.map((T,S)=>g.jsxs(c6,{children:["#",T]},S))}),v&&g.jsx(C6,{})]})]})};Eg.propTypes={avatar_url:K.string,conditions:K.arrayOf(K.string),experience:K.string,languages:K.arrayOf(K.string),lesson_info:K.string,lessons_done:K.number,levels:K.arrayOf(K.string),name:K.string,price_per_hour:K.number,rating:K.number,reviews:K.arrayOf(K.shape({comment:K.string,reviewer_name:K.string,reviewer_rating:K.number})),surname:K.string};const Nx=P.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`,b6=()=>{const t=Pc(q5);return g.jsx(Nx,{children:t.map(e=>g.jsx(Eg,{...e},e.id))})},P6=P.div`
  position: relative;
  width: 1440px;
  background: rgb(248, 248, 248);
  padding: 96px 128px 96px 128px;
`,R6=()=>{const t=Hs();return C.useEffect(()=>{const e=new AbortController;return t(Gl({signal:e.signal})),()=>e.abort()},[t]),g.jsx(P6,{children:g.jsx(b6,{})})};var O6=function(e){return N6(e)&&!A6(e)};function N6(t){return!!t&&typeof t=="object"}function A6(t){var e=Object.prototype.toString.call(t);return e==="[object RegExp]"||e==="[object Date]"||M6(t)}var L6=typeof Symbol=="function"&&Symbol.for,D6=L6?Symbol.for("react.element"):60103;function M6(t){return t.$$typeof===D6}function F6(t){return Array.isArray(t)?[]:{}}function ec(t,e){return e.clone!==!1&&e.isMergeableObject(t)?Ca(F6(t),t,e):t}function j6(t,e,n){return t.concat(e).map(function(r){return ec(r,n)})}function $6(t,e,n){var r={};return n.isMergeableObject(t)&&Object.keys(t).forEach(function(i){r[i]=ec(t[i],n)}),Object.keys(e).forEach(function(i){!n.isMergeableObject(e[i])||!t[i]?r[i]=ec(e[i],n):r[i]=Ca(t[i],e[i],n)}),r}function Ca(t,e,n){n=n||{},n.arrayMerge=n.arrayMerge||j6,n.isMergeableObject=n.isMergeableObject||O6;var r=Array.isArray(e),i=Array.isArray(t),s=r===i;return s?r?n.arrayMerge(t,e,n):$6(t,e,n):ec(e,n)}Ca.all=function(e,n){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(r,i){return Ca(r,i,n)},{})};var ip=Ca,Ax=typeof global=="object"&&global&&global.Object===Object&&global,U6=typeof self=="object"&&self&&self.Object===Object&&self,vn=Ax||U6||Function("return this")(),Dr=vn.Symbol,Lx=Object.prototype,z6=Lx.hasOwnProperty,B6=Lx.toString,ho=Dr?Dr.toStringTag:void 0;function W6(t){var e=z6.call(t,ho),n=t[ho];try{t[ho]=void 0;var r=!0}catch{}var i=B6.call(t);return r&&(e?t[ho]=n:delete t[ho]),i}var V6=Object.prototype,H6=V6.toString;function G6(t){return H6.call(t)}var K6="[object Null]",q6="[object Undefined]",t_=Dr?Dr.toStringTag:void 0;function Pi(t){return t==null?t===void 0?q6:K6:t_&&t_ in Object(t)?W6(t):G6(t)}function Dx(t,e){return function(n){return t(e(n))}}var Sg=Dx(Object.getPrototypeOf,Object);function Ri(t){return t!=null&&typeof t=="object"}var Y6="[object Object]",Q6=Function.prototype,X6=Object.prototype,Mx=Q6.toString,J6=X6.hasOwnProperty,Z6=Mx.call(Object);function n_(t){if(!Ri(t)||Pi(t)!=Y6)return!1;var e=Sg(t);if(e===null)return!0;var n=J6.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&Mx.call(n)==Z6}var r_=Array.isArray,i_=Object.keys,eM=Object.prototype.hasOwnProperty,tM=typeof Element<"u";function sp(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=r_(t),r=r_(e),i,s,o;if(n&&r){if(s=t.length,s!=e.length)return!1;for(i=s;i--!==0;)if(!sp(t[i],e[i]))return!1;return!0}if(n!=r)return!1;var a=t instanceof Date,l=e instanceof Date;if(a!=l)return!1;if(a&&l)return t.getTime()==e.getTime();var u=t instanceof RegExp,d=e instanceof RegExp;if(u!=d)return!1;if(u&&d)return t.toString()==e.toString();var c=i_(t);if(s=c.length,s!==i_(e).length)return!1;for(i=s;i--!==0;)if(!eM.call(e,c[i]))return!1;if(tM&&t instanceof Element&&e instanceof Element)return t===e;for(i=s;i--!==0;)if(o=c[i],!(o==="_owner"&&t.$$typeof)&&!sp(t[o],e[o]))return!1;return!0}return t!==t&&e!==e}var nM=function(e,n){try{return sp(e,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const nr=Fs(nM);function rM(){this.__data__=[],this.size=0}function Fx(t,e){return t===e||t!==t&&e!==e}function Kc(t,e){for(var n=t.length;n--;)if(Fx(t[n][0],e))return n;return-1}var iM=Array.prototype,sM=iM.splice;function oM(t){var e=this.__data__,n=Kc(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():sM.call(e,n,1),--this.size,!0}function aM(t){var e=this.__data__,n=Kc(e,t);return n<0?void 0:e[n][1]}function lM(t){return Kc(this.__data__,t)>-1}function uM(t,e){var n=this.__data__,r=Kc(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function qn(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}qn.prototype.clear=rM;qn.prototype.delete=oM;qn.prototype.get=aM;qn.prototype.has=lM;qn.prototype.set=uM;function cM(){this.__data__=new qn,this.size=0}function dM(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function fM(t){return this.__data__.get(t)}function hM(t){return this.__data__.has(t)}function Ga(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var pM="[object AsyncFunction]",mM="[object Function]",gM="[object GeneratorFunction]",yM="[object Proxy]";function jx(t){if(!Ga(t))return!1;var e=Pi(t);return e==mM||e==gM||e==pM||e==yM}var pf=vn["__core-js_shared__"],s_=function(){var t=/[^.]+$/.exec(pf&&pf.keys&&pf.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function vM(t){return!!s_&&s_ in t}var _M=Function.prototype,wM=_M.toString;function Oi(t){if(t!=null){try{return wM.call(t)}catch{}try{return t+""}catch{}}return""}var EM=/[\\^$.*+?()[\]{}|]/g,SM=/^\[object .+?Constructor\]$/,CM=Function.prototype,xM=Object.prototype,TM=CM.toString,IM=xM.hasOwnProperty,kM=RegExp("^"+TM.call(IM).replace(EM,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function bM(t){if(!Ga(t)||vM(t))return!1;var e=jx(t)?kM:SM;return e.test(Oi(t))}function PM(t,e){return t==null?void 0:t[e]}function Ni(t,e){var n=PM(t,e);return bM(n)?n:void 0}var xa=Ni(vn,"Map"),Ta=Ni(Object,"create");function RM(){this.__data__=Ta?Ta(null):{},this.size=0}function OM(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var NM="__lodash_hash_undefined__",AM=Object.prototype,LM=AM.hasOwnProperty;function DM(t){var e=this.__data__;if(Ta){var n=e[t];return n===NM?void 0:n}return LM.call(e,t)?e[t]:void 0}var MM=Object.prototype,FM=MM.hasOwnProperty;function jM(t){var e=this.__data__;return Ta?e[t]!==void 0:FM.call(e,t)}var $M="__lodash_hash_undefined__";function UM(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Ta&&e===void 0?$M:e,this}function Ci(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ci.prototype.clear=RM;Ci.prototype.delete=OM;Ci.prototype.get=DM;Ci.prototype.has=jM;Ci.prototype.set=UM;function zM(){this.size=0,this.__data__={hash:new Ci,map:new(xa||qn),string:new Ci}}function BM(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function qc(t,e){var n=t.__data__;return BM(e)?n[typeof e=="string"?"string":"hash"]:n.map}function WM(t){var e=qc(this,t).delete(t);return this.size-=e?1:0,e}function VM(t){return qc(this,t).get(t)}function HM(t){return qc(this,t).has(t)}function GM(t,e){var n=qc(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function Br(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Br.prototype.clear=zM;Br.prototype.delete=WM;Br.prototype.get=VM;Br.prototype.has=HM;Br.prototype.set=GM;var KM=200;function qM(t,e){var n=this.__data__;if(n instanceof qn){var r=n.__data__;if(!xa||r.length<KM-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new Br(r)}return n.set(t,e),this.size=n.size,this}function Js(t){var e=this.__data__=new qn(t);this.size=e.size}Js.prototype.clear=cM;Js.prototype.delete=dM;Js.prototype.get=fM;Js.prototype.has=hM;Js.prototype.set=qM;function YM(t,e){for(var n=-1,r=t==null?0:t.length;++n<r&&e(t[n],n,t)!==!1;);return t}var o_=function(){try{var t=Ni(Object,"defineProperty");return t({},"",{}),t}catch{}}();function $x(t,e,n){e=="__proto__"&&o_?o_(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var QM=Object.prototype,XM=QM.hasOwnProperty;function Ux(t,e,n){var r=t[e];(!(XM.call(t,e)&&Fx(r,n))||n===void 0&&!(e in t))&&$x(t,e,n)}function Yc(t,e,n,r){var i=!n;n||(n={});for(var s=-1,o=e.length;++s<o;){var a=e[s],l=r?r(n[a],t[a],a,n,t):void 0;l===void 0&&(l=t[a]),i?$x(n,a,l):Ux(n,a,l)}return n}function JM(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var ZM="[object Arguments]";function a_(t){return Ri(t)&&Pi(t)==ZM}var zx=Object.prototype,eF=zx.hasOwnProperty,tF=zx.propertyIsEnumerable,nF=a_(function(){return arguments}())?a_:function(t){return Ri(t)&&eF.call(t,"callee")&&!tF.call(t,"callee")},Ka=Array.isArray;function rF(){return!1}var Bx=typeof St=="object"&&St&&!St.nodeType&&St,l_=Bx&&typeof Ct=="object"&&Ct&&!Ct.nodeType&&Ct,iF=l_&&l_.exports===Bx,u_=iF?vn.Buffer:void 0,sF=u_?u_.isBuffer:void 0,Wx=sF||rF,oF=9007199254740991,aF=/^(?:0|[1-9]\d*)$/;function lF(t,e){var n=typeof t;return e=e??oF,!!e&&(n=="number"||n!="symbol"&&aF.test(t))&&t>-1&&t%1==0&&t<e}var uF=9007199254740991;function Vx(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=uF}var cF="[object Arguments]",dF="[object Array]",fF="[object Boolean]",hF="[object Date]",pF="[object Error]",mF="[object Function]",gF="[object Map]",yF="[object Number]",vF="[object Object]",_F="[object RegExp]",wF="[object Set]",EF="[object String]",SF="[object WeakMap]",CF="[object ArrayBuffer]",xF="[object DataView]",TF="[object Float32Array]",IF="[object Float64Array]",kF="[object Int8Array]",bF="[object Int16Array]",PF="[object Int32Array]",RF="[object Uint8Array]",OF="[object Uint8ClampedArray]",NF="[object Uint16Array]",AF="[object Uint32Array]",he={};he[TF]=he[IF]=he[kF]=he[bF]=he[PF]=he[RF]=he[OF]=he[NF]=he[AF]=!0;he[cF]=he[dF]=he[CF]=he[fF]=he[xF]=he[hF]=he[pF]=he[mF]=he[gF]=he[yF]=he[vF]=he[_F]=he[wF]=he[EF]=he[SF]=!1;function LF(t){return Ri(t)&&Vx(t.length)&&!!he[Pi(t)]}function Cg(t){return function(e){return t(e)}}var Hx=typeof St=="object"&&St&&!St.nodeType&&St,jo=Hx&&typeof Ct=="object"&&Ct&&!Ct.nodeType&&Ct,DF=jo&&jo.exports===Hx,mf=DF&&Ax.process,Ms=function(){try{var t=jo&&jo.require&&jo.require("util").types;return t||mf&&mf.binding&&mf.binding("util")}catch{}}(),c_=Ms&&Ms.isTypedArray,MF=c_?Cg(c_):LF,FF=Object.prototype,jF=FF.hasOwnProperty;function Gx(t,e){var n=Ka(t),r=!n&&nF(t),i=!n&&!r&&Wx(t),s=!n&&!r&&!i&&MF(t),o=n||r||i||s,a=o?JM(t.length,String):[],l=a.length;for(var u in t)(e||jF.call(t,u))&&!(o&&(u=="length"||i&&(u=="offset"||u=="parent")||s&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||lF(u,l)))&&a.push(u);return a}var $F=Object.prototype;function xg(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||$F;return t===n}var UF=Dx(Object.keys,Object),zF=Object.prototype,BF=zF.hasOwnProperty;function WF(t){if(!xg(t))return UF(t);var e=[];for(var n in Object(t))BF.call(t,n)&&n!="constructor"&&e.push(n);return e}function Kx(t){return t!=null&&Vx(t.length)&&!jx(t)}function Tg(t){return Kx(t)?Gx(t):WF(t)}function VF(t,e){return t&&Yc(e,Tg(e),t)}function HF(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var GF=Object.prototype,KF=GF.hasOwnProperty;function qF(t){if(!Ga(t))return HF(t);var e=xg(t),n=[];for(var r in t)r=="constructor"&&(e||!KF.call(t,r))||n.push(r);return n}function Ig(t){return Kx(t)?Gx(t,!0):qF(t)}function YF(t,e){return t&&Yc(e,Ig(e),t)}var qx=typeof St=="object"&&St&&!St.nodeType&&St,d_=qx&&typeof Ct=="object"&&Ct&&!Ct.nodeType&&Ct,QF=d_&&d_.exports===qx,f_=QF?vn.Buffer:void 0,h_=f_?f_.allocUnsafe:void 0;function XF(t,e){if(e)return t.slice();var n=t.length,r=h_?h_(n):new t.constructor(n);return t.copy(r),r}function Yx(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}function JF(t,e){for(var n=-1,r=t==null?0:t.length,i=0,s=[];++n<r;){var o=t[n];e(o,n,t)&&(s[i++]=o)}return s}function Qx(){return[]}var ZF=Object.prototype,e8=ZF.propertyIsEnumerable,p_=Object.getOwnPropertySymbols,kg=p_?function(t){return t==null?[]:(t=Object(t),JF(p_(t),function(e){return e8.call(t,e)}))}:Qx;function t8(t,e){return Yc(t,kg(t),e)}function Xx(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}var n8=Object.getOwnPropertySymbols,Jx=n8?function(t){for(var e=[];t;)Xx(e,kg(t)),t=Sg(t);return e}:Qx;function r8(t,e){return Yc(t,Jx(t),e)}function Zx(t,e,n){var r=e(t);return Ka(t)?r:Xx(r,n(t))}function i8(t){return Zx(t,Tg,kg)}function s8(t){return Zx(t,Ig,Jx)}var op=Ni(vn,"DataView"),ap=Ni(vn,"Promise"),lp=Ni(vn,"Set"),up=Ni(vn,"WeakMap"),m_="[object Map]",o8="[object Object]",g_="[object Promise]",y_="[object Set]",v_="[object WeakMap]",__="[object DataView]",a8=Oi(op),l8=Oi(xa),u8=Oi(ap),c8=Oi(lp),d8=Oi(up),Qr=Pi;(op&&Qr(new op(new ArrayBuffer(1)))!=__||xa&&Qr(new xa)!=m_||ap&&Qr(ap.resolve())!=g_||lp&&Qr(new lp)!=y_||up&&Qr(new up)!=v_)&&(Qr=function(t){var e=Pi(t),n=e==o8?t.constructor:void 0,r=n?Oi(n):"";if(r)switch(r){case a8:return __;case l8:return m_;case u8:return g_;case c8:return y_;case d8:return v_}return e});const bg=Qr;var f8=Object.prototype,h8=f8.hasOwnProperty;function p8(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&h8.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var w_=vn.Uint8Array;function Pg(t){var e=new t.constructor(t.byteLength);return new w_(e).set(new w_(t)),e}function m8(t,e){var n=e?Pg(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}var g8=/\w*$/;function y8(t){var e=new t.constructor(t.source,g8.exec(t));return e.lastIndex=t.lastIndex,e}var E_=Dr?Dr.prototype:void 0,S_=E_?E_.valueOf:void 0;function v8(t){return S_?Object(S_.call(t)):{}}function _8(t,e){var n=e?Pg(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var w8="[object Boolean]",E8="[object Date]",S8="[object Map]",C8="[object Number]",x8="[object RegExp]",T8="[object Set]",I8="[object String]",k8="[object Symbol]",b8="[object ArrayBuffer]",P8="[object DataView]",R8="[object Float32Array]",O8="[object Float64Array]",N8="[object Int8Array]",A8="[object Int16Array]",L8="[object Int32Array]",D8="[object Uint8Array]",M8="[object Uint8ClampedArray]",F8="[object Uint16Array]",j8="[object Uint32Array]";function $8(t,e,n){var r=t.constructor;switch(e){case b8:return Pg(t);case w8:case E8:return new r(+t);case P8:return m8(t,n);case R8:case O8:case N8:case A8:case L8:case D8:case M8:case F8:case j8:return _8(t,n);case S8:return new r;case C8:case I8:return new r(t);case x8:return y8(t);case T8:return new r;case k8:return v8(t)}}var C_=Object.create,U8=function(){function t(){}return function(e){if(!Ga(e))return{};if(C_)return C_(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();function z8(t){return typeof t.constructor=="function"&&!xg(t)?U8(Sg(t)):{}}var B8="[object Map]";function W8(t){return Ri(t)&&bg(t)==B8}var x_=Ms&&Ms.isMap,V8=x_?Cg(x_):W8,H8="[object Set]";function G8(t){return Ri(t)&&bg(t)==H8}var T_=Ms&&Ms.isSet,K8=T_?Cg(T_):G8,q8=1,Y8=2,Q8=4,eT="[object Arguments]",X8="[object Array]",J8="[object Boolean]",Z8="[object Date]",ej="[object Error]",tT="[object Function]",tj="[object GeneratorFunction]",nj="[object Map]",rj="[object Number]",nT="[object Object]",ij="[object RegExp]",sj="[object Set]",oj="[object String]",aj="[object Symbol]",lj="[object WeakMap]",uj="[object ArrayBuffer]",cj="[object DataView]",dj="[object Float32Array]",fj="[object Float64Array]",hj="[object Int8Array]",pj="[object Int16Array]",mj="[object Int32Array]",gj="[object Uint8Array]",yj="[object Uint8ClampedArray]",vj="[object Uint16Array]",_j="[object Uint32Array]",le={};le[eT]=le[X8]=le[uj]=le[cj]=le[J8]=le[Z8]=le[dj]=le[fj]=le[hj]=le[pj]=le[mj]=le[nj]=le[rj]=le[nT]=le[ij]=le[sj]=le[oj]=le[aj]=le[gj]=le[yj]=le[vj]=le[_j]=!0;le[ej]=le[tT]=le[lj]=!1;function $o(t,e,n,r,i,s){var o,a=e&q8,l=e&Y8,u=e&Q8;if(n&&(o=i?n(t,r,i,s):n(t)),o!==void 0)return o;if(!Ga(t))return t;var d=Ka(t);if(d){if(o=p8(t),!a)return Yx(t,o)}else{var c=bg(t),f=c==tT||c==tj;if(Wx(t))return XF(t,a);if(c==nT||c==eT||f&&!i){if(o=l||f?{}:z8(t),!a)return l?r8(t,YF(o,t)):t8(t,VF(o,t))}else{if(!le[c])return i?t:{};o=$8(t,c,a)}}s||(s=new Js);var p=s.get(t);if(p)return p;s.set(t,o),K8(t)?t.forEach(function(E){o.add($o(E,e,n,E,t,s))}):V8(t)&&t.forEach(function(E,m){o.set(m,$o(E,e,n,m,t,s))});var v=u?l?s8:i8:l?Ig:Tg,_=d?void 0:v(t);return YM(_||t,function(E,m){_&&(m=E,E=t[m]),Ux(o,m,$o(E,e,n,m,t,s))}),o}var wj=4;function I_(t){return $o(t,wj)}function rT(t,e){for(var n=-1,r=t==null?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}var Ej="[object Symbol]";function Rg(t){return typeof t=="symbol"||Ri(t)&&Pi(t)==Ej}var Sj="Expected a function";function Og(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(Sj);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=t.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(Og.Cache||Br),n}Og.Cache=Br;var Cj=500;function xj(t){var e=Og(t,function(r){return n.size===Cj&&n.clear(),r}),n=e.cache;return e}var Tj=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ij=/\\(\\)?/g,kj=xj(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(Tj,function(n,r,i,s){e.push(i?s.replace(Ij,"$1"):r||n)}),e});const bj=kj;var Pj=1/0;function Rj(t){if(typeof t=="string"||Rg(t))return t;var e=t+"";return e=="0"&&1/t==-Pj?"-0":e}var Oj=1/0,k_=Dr?Dr.prototype:void 0,b_=k_?k_.toString:void 0;function iT(t){if(typeof t=="string")return t;if(Ka(t))return rT(t,iT)+"";if(Rg(t))return b_?b_.call(t):"";var e=t+"";return e=="0"&&1/t==-Oj?"-0":e}function Nj(t){return t==null?"":iT(t)}function sT(t){return Ka(t)?rT(t,Rj):Rg(t)?[t]:Yx(bj(Nj(t)))}var oT={exports:{}},ie={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var je=typeof Symbol=="function"&&Symbol.for,Ng=je?Symbol.for("react.element"):60103,Ag=je?Symbol.for("react.portal"):60106,Qc=je?Symbol.for("react.fragment"):60107,Xc=je?Symbol.for("react.strict_mode"):60108,Jc=je?Symbol.for("react.profiler"):60114,Zc=je?Symbol.for("react.provider"):60109,ed=je?Symbol.for("react.context"):60110,Lg=je?Symbol.for("react.async_mode"):60111,td=je?Symbol.for("react.concurrent_mode"):60111,nd=je?Symbol.for("react.forward_ref"):60112,rd=je?Symbol.for("react.suspense"):60113,Aj=je?Symbol.for("react.suspense_list"):60120,id=je?Symbol.for("react.memo"):60115,sd=je?Symbol.for("react.lazy"):60116,Lj=je?Symbol.for("react.block"):60121,Dj=je?Symbol.for("react.fundamental"):60117,Mj=je?Symbol.for("react.responder"):60118,Fj=je?Symbol.for("react.scope"):60119;function Ot(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Ng:switch(t=t.type,t){case Lg:case td:case Qc:case Jc:case Xc:case rd:return t;default:switch(t=t&&t.$$typeof,t){case ed:case nd:case sd:case id:case Zc:return t;default:return e}}case Ag:return e}}}function aT(t){return Ot(t)===td}ie.AsyncMode=Lg;ie.ConcurrentMode=td;ie.ContextConsumer=ed;ie.ContextProvider=Zc;ie.Element=Ng;ie.ForwardRef=nd;ie.Fragment=Qc;ie.Lazy=sd;ie.Memo=id;ie.Portal=Ag;ie.Profiler=Jc;ie.StrictMode=Xc;ie.Suspense=rd;ie.isAsyncMode=function(t){return aT(t)||Ot(t)===Lg};ie.isConcurrentMode=aT;ie.isContextConsumer=function(t){return Ot(t)===ed};ie.isContextProvider=function(t){return Ot(t)===Zc};ie.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ng};ie.isForwardRef=function(t){return Ot(t)===nd};ie.isFragment=function(t){return Ot(t)===Qc};ie.isLazy=function(t){return Ot(t)===sd};ie.isMemo=function(t){return Ot(t)===id};ie.isPortal=function(t){return Ot(t)===Ag};ie.isProfiler=function(t){return Ot(t)===Jc};ie.isStrictMode=function(t){return Ot(t)===Xc};ie.isSuspense=function(t){return Ot(t)===rd};ie.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Qc||t===td||t===Jc||t===Xc||t===rd||t===Aj||typeof t=="object"&&t!==null&&(t.$$typeof===sd||t.$$typeof===id||t.$$typeof===Zc||t.$$typeof===ed||t.$$typeof===nd||t.$$typeof===Dj||t.$$typeof===Mj||t.$$typeof===Fj||t.$$typeof===Lj)};ie.typeOf=Ot;oT.exports=ie;var jj=oT.exports,Dg=jj,$j={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Uj={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},zj={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},lT={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Mg={};Mg[Dg.ForwardRef]=zj;Mg[Dg.Memo]=lT;function P_(t){return Dg.isMemo(t)?lT:Mg[t.$$typeof]||$j}var Bj=Object.defineProperty,Wj=Object.getOwnPropertyNames,R_=Object.getOwnPropertySymbols,Vj=Object.getOwnPropertyDescriptor,Hj=Object.getPrototypeOf,O_=Object.prototype;function uT(t,e,n){if(typeof e!="string"){if(O_){var r=Hj(e);r&&r!==O_&&uT(t,r,n)}var i=Wj(e);R_&&(i=i.concat(R_(e)));for(var s=P_(t),o=P_(e),a=0;a<i.length;++a){var l=i[a];if(!Uj[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=Vj(e,l);try{Bj(t,l,u)}catch{}}}}return t}var Gj=uT;const Kj=Fs(Gj);var qj=1,Yj=4;function Qj(t){return $o(t,qj|Yj)}function ne(){return ne=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ne.apply(this,arguments)}function cT(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function fr(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function N_(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var od=C.createContext(void 0);od.displayName="FormikContext";var Xj=od.Provider,Jj=od.Consumer;function dT(){var t=C.useContext(od);return t}var A_=function(e){return Array.isArray(e)&&e.length===0},ze=function(e){return typeof e=="function"},qa=function(e){return e!==null&&typeof e=="object"},Zj=function(e){return String(Math.floor(Number(e)))===e},gf=function(e){return Object.prototype.toString.call(e)==="[object String]"},fT=function(e){return C.Children.count(e)===0},yf=function(e){return qa(e)&&ze(e.then)};function ye(t,e,n,r){r===void 0&&(r=0);for(var i=sT(e);t&&r<i.length;)t=t[i[r++]];return r!==i.length&&!t||t===void 0?n:t}function mn(t,e,n){for(var r=I_(t),i=r,s=0,o=sT(e);s<o.length-1;s++){var a=o[s],l=ye(t,o.slice(0,s+1));if(l&&(qa(l)||Array.isArray(l)))i=i[a]=I_(l);else{var u=o[s+1];i=i[a]=Zj(u)&&Number(u)>=0?[]:{}}}return(s===0?t:i)[o[s]]===n?t:(n===void 0?delete i[o[s]]:i[o[s]]=n,s===0&&n===void 0&&delete r[o[s]],r)}function hT(t,e,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var i=0,s=Object.keys(t);i<s.length;i++){var o=s[i],a=t[o];qa(a)?n.get(a)||(n.set(a,!0),r[o]=Array.isArray(a)?[]:{},hT(a,e,n,r[o])):r[o]=e}return r}function e$(t,e){switch(e.type){case"SET_VALUES":return ne({},t,{values:e.payload});case"SET_TOUCHED":return ne({},t,{touched:e.payload});case"SET_ERRORS":return nr(t.errors,e.payload)?t:ne({},t,{errors:e.payload});case"SET_STATUS":return ne({},t,{status:e.payload});case"SET_ISSUBMITTING":return ne({},t,{isSubmitting:e.payload});case"SET_ISVALIDATING":return ne({},t,{isValidating:e.payload});case"SET_FIELD_VALUE":return ne({},t,{values:mn(t.values,e.payload.field,e.payload.value)});case"SET_FIELD_TOUCHED":return ne({},t,{touched:mn(t.touched,e.payload.field,e.payload.value)});case"SET_FIELD_ERROR":return ne({},t,{errors:mn(t.errors,e.payload.field,e.payload.value)});case"RESET_FORM":return ne({},t,e.payload);case"SET_FORMIK_STATE":return e.payload(t);case"SUBMIT_ATTEMPT":return ne({},t,{touched:hT(t.values,!0),isSubmitting:!0,submitCount:t.submitCount+1});case"SUBMIT_FAILURE":return ne({},t,{isSubmitting:!1});case"SUBMIT_SUCCESS":return ne({},t,{isSubmitting:!1});default:return t}}var Vr={},Sl={};function t$(t){var e=t.validateOnChange,n=e===void 0?!0:e,r=t.validateOnBlur,i=r===void 0?!0:r,s=t.validateOnMount,o=s===void 0?!1:s,a=t.isInitialValid,l=t.enableReinitialize,u=l===void 0?!1:l,d=t.onSubmit,c=fr(t,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=ne({validateOnChange:n,validateOnBlur:i,validateOnMount:o,onSubmit:d},c),p=C.useRef(f.initialValues),v=C.useRef(f.initialErrors||Vr),_=C.useRef(f.initialTouched||Sl),E=C.useRef(f.initialStatus),m=C.useRef(!1),h=C.useRef({});C.useEffect(function(){return m.current=!0,function(){m.current=!1}},[]);var y=C.useState(0),w=y[1],T=C.useRef({values:f.initialValues,errors:f.initialErrors||Vr,touched:f.initialTouched||Sl,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),S=T.current,x=C.useCallback(function(I){var N=T.current;T.current=e$(N,I),N!==T.current&&w(function(D){return D+1})},[]),k=C.useCallback(function(I,N){return new Promise(function(D,j){var V=f.validate(I,N);V==null?D(Vr):yf(V)?V.then(function(te){D(te||Vr)},function(te){j(te)}):D(V)})},[f.validate]),L=C.useCallback(function(I,N){var D=f.validationSchema,j=ze(D)?D(N):D,V=N&&j.validateAt?j.validateAt(N,I):r$(I,j);return new Promise(function(te,Ne){V.then(function(){te(Vr)},function(En){En.name==="ValidationError"?te(n$(En)):Ne(En)})})},[f.validationSchema]),F=C.useCallback(function(I,N){return new Promise(function(D){return D(h.current[I].validate(N))})},[]),B=C.useCallback(function(I){var N=Object.keys(h.current).filter(function(j){return ze(h.current[j].validate)}),D=N.length>0?N.map(function(j){return F(j,ye(I,j))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(D).then(function(j){return j.reduce(function(V,te,Ne){return te==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||te&&(V=mn(V,N[Ne],te)),V},{})})},[F]),Nt=C.useCallback(function(I){return Promise.all([B(I),f.validationSchema?L(I):{},f.validate?k(I):{}]).then(function(N){var D=N[0],j=N[1],V=N[2],te=ip.all([D,j,V],{arrayMerge:i$});return te})},[f.validate,f.validationSchema,B,k,L]),ae=At(function(I){return I===void 0&&(I=S.values),x({type:"SET_ISVALIDATING",payload:!0}),Nt(I).then(function(N){return m.current&&(x({type:"SET_ISVALIDATING",payload:!1}),x({type:"SET_ERRORS",payload:N})),N})});C.useEffect(function(){o&&m.current===!0&&nr(p.current,f.initialValues)&&ae(p.current)},[o,ae]);var gt=C.useCallback(function(I){var N=I&&I.values?I.values:p.current,D=I&&I.errors?I.errors:v.current?v.current:f.initialErrors||{},j=I&&I.touched?I.touched:_.current?_.current:f.initialTouched||{},V=I&&I.status?I.status:E.current?E.current:f.initialStatus;p.current=N,v.current=D,_.current=j,E.current=V;var te=function(){x({type:"RESET_FORM",payload:{isSubmitting:!!I&&!!I.isSubmitting,errors:D,touched:j,status:V,values:N,isValidating:!!I&&!!I.isValidating,submitCount:I&&I.submitCount&&typeof I.submitCount=="number"?I.submitCount:0}})};if(f.onReset){var Ne=f.onReset(S.values,ty);yf(Ne)?Ne.then(te):te()}else te()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);C.useEffect(function(){m.current===!0&&!nr(p.current,f.initialValues)&&u&&(p.current=f.initialValues,gt(),o&&ae(p.current))},[u,f.initialValues,gt,o,ae]),C.useEffect(function(){u&&m.current===!0&&!nr(v.current,f.initialErrors)&&(v.current=f.initialErrors||Vr,x({type:"SET_ERRORS",payload:f.initialErrors||Vr}))},[u,f.initialErrors]),C.useEffect(function(){u&&m.current===!0&&!nr(_.current,f.initialTouched)&&(_.current=f.initialTouched||Sl,x({type:"SET_TOUCHED",payload:f.initialTouched||Sl}))},[u,f.initialTouched]),C.useEffect(function(){u&&m.current===!0&&!nr(E.current,f.initialStatus)&&(E.current=f.initialStatus,x({type:"SET_STATUS",payload:f.initialStatus}))},[u,f.initialStatus,f.initialTouched]);var _n=At(function(I){if(h.current[I]&&ze(h.current[I].validate)){var N=ye(S.values,I),D=h.current[I].validate(N);return yf(D)?(x({type:"SET_ISVALIDATING",payload:!0}),D.then(function(j){return j}).then(function(j){x({type:"SET_FIELD_ERROR",payload:{field:I,value:j}}),x({type:"SET_ISVALIDATING",payload:!1})})):(x({type:"SET_FIELD_ERROR",payload:{field:I,value:D}}),Promise.resolve(D))}else if(f.validationSchema)return x({type:"SET_ISVALIDATING",payload:!0}),L(S.values,I).then(function(j){return j}).then(function(j){x({type:"SET_FIELD_ERROR",payload:{field:I,value:ye(j,I)}}),x({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Wr=C.useCallback(function(I,N){var D=N.validate;h.current[I]={validate:D}},[]),wn=C.useCallback(function(I){delete h.current[I]},[]),O=At(function(I,N){x({type:"SET_TOUCHED",payload:I});var D=N===void 0?i:N;return D?ae(S.values):Promise.resolve()}),M=C.useCallback(function(I){x({type:"SET_ERRORS",payload:I})},[]),U=At(function(I,N){var D=ze(I)?I(S.values):I;x({type:"SET_VALUES",payload:D});var j=N===void 0?n:N;return j?ae(D):Promise.resolve()}),J=C.useCallback(function(I,N){x({type:"SET_FIELD_ERROR",payload:{field:I,value:N}})},[]),Q=At(function(I,N,D){x({type:"SET_FIELD_VALUE",payload:{field:I,value:N}});var j=D===void 0?n:D;return j?ae(mn(S.values,I,N)):Promise.resolve()}),nn=C.useCallback(function(I,N){var D=N,j=I,V;if(!gf(I)){I.persist&&I.persist();var te=I.target?I.target:I.currentTarget,Ne=te.type,En=te.name,fd=te.id,hd=te.value,$T=te.checked,P7=te.outerHTML,ny=te.options,UT=te.multiple;D=N||En||fd,j=/number|range/.test(Ne)?(V=parseFloat(hd),isNaN(V)?"":V):/checkbox/.test(Ne)?o$(ye(S.values,D),$T,hd):ny&&UT?s$(ny):hd}D&&Q(D,j)},[Q,S.values]),Je=At(function(I){if(gf(I))return function(N){return nn(N,I)};nn(I)}),Ze=At(function(I,N,D){N===void 0&&(N=!0),x({type:"SET_FIELD_TOUCHED",payload:{field:I,value:N}});var j=D===void 0?i:D;return j?ae(S.values):Promise.resolve()}),He=C.useCallback(function(I,N){I.persist&&I.persist();var D=I.target,j=D.name,V=D.id,te=D.outerHTML,Ne=N||j||V;Ze(Ne,!0)},[Ze]),yt=At(function(I){if(gf(I))return function(N){return He(N,I)};He(I)}),Yn=C.useCallback(function(I){ze(I)?x({type:"SET_FORMIK_STATE",payload:I}):x({type:"SET_FORMIK_STATE",payload:function(){return I}})},[]),rn=C.useCallback(function(I){x({type:"SET_STATUS",payload:I})},[]),Di=C.useCallback(function(I){x({type:"SET_ISSUBMITTING",payload:I})},[]),Qn=At(function(){return x({type:"SUBMIT_ATTEMPT"}),ae().then(function(I){var N=I instanceof Error,D=!N&&Object.keys(I).length===0;if(D){var j;try{if(j=NT(),j===void 0)return}catch(V){throw V}return Promise.resolve(j).then(function(V){return m.current&&x({type:"SUBMIT_SUCCESS"}),V}).catch(function(V){if(m.current)throw x({type:"SUBMIT_FAILURE"}),V})}else if(m.current&&(x({type:"SUBMIT_FAILURE"}),N))throw I})}),sn=At(function(I){I&&I.preventDefault&&ze(I.preventDefault)&&I.preventDefault(),I&&I.stopPropagation&&ze(I.stopPropagation)&&I.stopPropagation(),Qn().catch(function(N){console.warn("Warning: An unhandled error was caught from submitForm()",N)})}),ty={resetForm:gt,validateForm:ae,validateField:_n,setErrors:M,setFieldError:J,setFieldTouched:Ze,setFieldValue:Q,setStatus:rn,setSubmitting:Di,setTouched:O,setValues:U,setFormikState:Yn,submitForm:Qn},NT=At(function(){return d(S.values,ty)}),AT=At(function(I){I&&I.preventDefault&&ze(I.preventDefault)&&I.preventDefault(),I&&I.stopPropagation&&ze(I.stopPropagation)&&I.stopPropagation(),gt()}),LT=C.useCallback(function(I){return{value:ye(S.values,I),error:ye(S.errors,I),touched:!!ye(S.touched,I),initialValue:ye(p.current,I),initialTouched:!!ye(_.current,I),initialError:ye(v.current,I)}},[S.errors,S.touched,S.values]),DT=C.useCallback(function(I){return{setValue:function(D,j){return Q(I,D,j)},setTouched:function(D,j){return Ze(I,D,j)},setError:function(D){return J(I,D)}}},[Q,Ze,J]),MT=C.useCallback(function(I){var N=qa(I),D=N?I.name:I,j=ye(S.values,D),V={name:D,value:j,onChange:Je,onBlur:yt};if(N){var te=I.type,Ne=I.value,En=I.as,fd=I.multiple;te==="checkbox"?Ne===void 0?V.checked=!!j:(V.checked=!!(Array.isArray(j)&&~j.indexOf(Ne)),V.value=Ne):te==="radio"?(V.checked=j===Ne,V.value=Ne):En==="select"&&fd&&(V.value=V.value||[],V.multiple=!0)}return V},[yt,Je,S.values]),dd=C.useMemo(function(){return!nr(p.current,S.values)},[p.current,S.values]),FT=C.useMemo(function(){return typeof a<"u"?dd?S.errors&&Object.keys(S.errors).length===0:a!==!1&&ze(a)?a(f):a:S.errors&&Object.keys(S.errors).length===0},[a,dd,S.errors,f]),jT=ne({},S,{initialValues:p.current,initialErrors:v.current,initialTouched:_.current,initialStatus:E.current,handleBlur:yt,handleChange:Je,handleReset:AT,handleSubmit:sn,resetForm:gt,setErrors:M,setFormikState:Yn,setFieldTouched:Ze,setFieldValue:Q,setFieldError:J,setStatus:rn,setSubmitting:Di,setTouched:O,setValues:U,submitForm:Qn,validateForm:ae,validateField:_n,isValid:FT,dirty:dd,unregisterField:wn,registerField:Wr,getFieldProps:MT,getFieldMeta:LT,getFieldHelpers:DT,validateOnBlur:i,validateOnChange:n,validateOnMount:o});return jT}function pT(t){var e=t$(t),n=t.component,r=t.children,i=t.render,s=t.innerRef;return C.useImperativeHandle(s,function(){return e}),C.createElement(Xj,{value:e},n?C.createElement(n,e):i?i(e):r?ze(r)?r(e):fT(r)?null:C.Children.only(r):null)}function n$(t){var e={};if(t.inner){if(t.inner.length===0)return mn(e,t.path,t.message);for(var i=t.inner,n=Array.isArray(i),r=0,i=n?i:i[Symbol.iterator]();;){var s;if(n){if(r>=i.length)break;s=i[r++]}else{if(r=i.next(),r.done)break;s=r.value}var o=s;ye(e,o.path)||(e=mn(e,o.path,o.message))}}return e}function r$(t,e,n,r){n===void 0&&(n=!1);var i=cp(t);return e[n?"validateSync":"validate"](i,{abortEarly:!1,context:r||i})}function cp(t){var e=Array.isArray(t)?[]:{};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=String(n);Array.isArray(t[r])===!0?e[r]=t[r].map(function(i){return Array.isArray(i)===!0||n_(i)?cp(i):i!==""?i:void 0}):n_(t[r])?e[r]=cp(t[r]):e[r]=t[r]!==""?t[r]:void 0}return e}function i$(t,e,n){var r=t.slice();return e.forEach(function(s,o){if(typeof r[o]>"u"){var a=n.clone!==!1,l=a&&n.isMergeableObject(s);r[o]=l?ip(Array.isArray(s)?[]:{},s,n):s}else n.isMergeableObject(s)?r[o]=ip(t[o],s,n):t.indexOf(s)===-1&&r.push(s)}),r}function s$(t){return Array.from(t).filter(function(e){return e.selected}).map(function(e){return e.value})}function o$(t,e,n){if(typeof t=="boolean")return!!e;var r=[],i=!1,s=-1;if(Array.isArray(t))r=t,s=t.indexOf(n),i=s>=0;else if(!n||n=="true"||n=="false")return!!e;return e&&n&&!i?r.concat(n):i?r.slice(0,s).concat(r.slice(s+1)):r}var a$=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?C.useLayoutEffect:C.useEffect;function At(t){var e=C.useRef(t);return a$(function(){e.current=t}),C.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e.current.apply(void 0,r)},[])}function mT(t){var e=t.validate,n=t.name,r=t.render,i=t.children,s=t.as,o=t.component,a=t.className,l=fr(t,["validate","name","render","children","as","component","className"]),u=dT(),d=fr(u,["validate","validationSchema"]),c=d.registerField,f=d.unregisterField;C.useEffect(function(){return c(n,{validate:e}),function(){f(n)}},[c,f,n,e]);var p=d.getFieldProps(ne({name:n},l)),v=d.getFieldMeta(n),_={field:p,form:d};if(r)return r(ne({},_,{meta:v}));if(ze(i))return i(ne({},_,{meta:v}));if(o){if(typeof o=="string"){var E=l.innerRef,m=fr(l,["innerRef"]);return C.createElement(o,ne({ref:E},p,m,{className:a}),i)}return C.createElement(o,ne({field:p,form:d},l,{className:a}),i)}var h=s||"input";if(typeof h=="string"){var y=l.innerRef,w=fr(l,["innerRef"]);return C.createElement(h,ne({ref:y},p,w,{className:a}),i)}return C.createElement(h,ne({},p,l,{className:a}),i)}var Fg=C.forwardRef(function(t,e){var n=t.action,r=fr(t,["action"]),i=n??"#",s=dT(),o=s.handleReset,a=s.handleSubmit;return C.createElement("form",ne({onSubmit:a,ref:e,onReset:o,action:i},r))});Fg.displayName="Form";function l$(t){var e=function(i){return C.createElement(Jj,null,function(s){return C.createElement(t,ne({},i,{formik:s}))})},n=t.displayName||t.name||t.constructor&&t.constructor.name||"Component";return e.WrappedComponent=t,e.displayName="FormikConnect("+n+")",Kj(e,t)}var u$=function(e,n,r){var i=xi(e),s=i[n];return i.splice(n,1),i.splice(r,0,s),i},c$=function(e,n,r){var i=xi(e),s=i[n];return i[n]=i[r],i[r]=s,i},vf=function(e,n,r){var i=xi(e);return i.splice(n,0,r),i},d$=function(e,n,r){var i=xi(e);return i[n]=r,i},xi=function(e){if(e){if(Array.isArray(e))return[].concat(e);var n=Object.keys(e).map(function(r){return parseInt(r)}).reduce(function(r,i){return i>r?i:r},0);return Array.from(ne({},e,{length:n+1}))}else return[]},L_=function(e,n){var r=typeof e=="function"?e:n;return function(i){if(Array.isArray(i)||qa(i)){var s=xi(i);return r(s)}return i}},f$=function(t){cT(e,t);function e(r){var i;return i=t.call(this,r)||this,i.updateArrayField=function(s,o,a){var l=i.props,u=l.name,d=l.formik.setFormikState;d(function(c){var f=L_(a,s),p=L_(o,s),v=mn(c.values,u,s(ye(c.values,u))),_=a?f(ye(c.errors,u)):void 0,E=o?p(ye(c.touched,u)):void 0;return A_(_)&&(_=void 0),A_(E)&&(E=void 0),ne({},c,{values:v,errors:a?mn(c.errors,u,_):c.errors,touched:o?mn(c.touched,u,E):c.touched})})},i.push=function(s){return i.updateArrayField(function(o){return[].concat(xi(o),[Qj(s)])},!1,!1)},i.handlePush=function(s){return function(){return i.push(s)}},i.swap=function(s,o){return i.updateArrayField(function(a){return c$(a,s,o)},!0,!0)},i.handleSwap=function(s,o){return function(){return i.swap(s,o)}},i.move=function(s,o){return i.updateArrayField(function(a){return u$(a,s,o)},!0,!0)},i.handleMove=function(s,o){return function(){return i.move(s,o)}},i.insert=function(s,o){return i.updateArrayField(function(a){return vf(a,s,o)},function(a){return vf(a,s,null)},function(a){return vf(a,s,null)})},i.handleInsert=function(s,o){return function(){return i.insert(s,o)}},i.replace=function(s,o){return i.updateArrayField(function(a){return d$(a,s,o)},!1,!1)},i.handleReplace=function(s,o){return function(){return i.replace(s,o)}},i.unshift=function(s){var o=-1;return i.updateArrayField(function(a){var l=a?[s].concat(a):[s];return o=l.length,l},function(a){return a?[null].concat(a):[null]},function(a){return a?[null].concat(a):[null]}),o},i.handleUnshift=function(s){return function(){return i.unshift(s)}},i.handleRemove=function(s){return function(){return i.remove(s)}},i.handlePop=function(){return function(){return i.pop()}},i.remove=i.remove.bind(N_(i)),i.pop=i.pop.bind(N_(i)),i}var n=e.prototype;return n.componentDidUpdate=function(i){this.props.validateOnChange&&this.props.formik.validateOnChange&&!nr(ye(i.formik.values,i.name),ye(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},n.remove=function(i){var s;return this.updateArrayField(function(o){var a=o?xi(o):[];return s||(s=a[i]),ze(a.splice)&&a.splice(i,1),ze(a.every)&&a.every(function(l){return l===void 0})?[]:a},!0,!0),s},n.pop=function(){var i;return this.updateArrayField(function(s){var o=s.slice();return i||(i=o&&o.pop&&o.pop()),o},!0,!0),i},n.render=function(){var i={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},s=this.props,o=s.component,a=s.render,l=s.children,u=s.name,d=s.formik,c=fr(d,["validate","validationSchema"]),f=ne({},i,{form:c,name:u});return o?C.createElement(o,f):a?a(f):l?typeof l=="function"?l(f):fT(l)?null:C.Children.only(l):null},e}(C.Component);f$.defaultProps={validateOnChange:!0};var h$=function(t){cT(e,t);function e(){return t.apply(this,arguments)||this}var n=e.prototype;return n.shouldComponentUpdate=function(i){return ye(this.props.formik.errors,this.props.name)!==ye(i.formik.errors,this.props.name)||ye(this.props.formik.touched,this.props.name)!==ye(i.formik.touched,this.props.name)||Object.keys(this.props).length!==Object.keys(i).length},n.render=function(){var i=this.props,s=i.component,o=i.formik,a=i.render,l=i.children,u=i.name,d=fr(i,["component","formik","render","children","name"]),c=ye(o.touched,u),f=ye(o.errors,u);return c&&f?a?ze(a)?a(f):null:l?ze(l)?l(f):null:s?C.createElement(s,d,f):f:null},e}(C.Component),Uo=l$(h$);const p$=bc`
        0% {
      background-color: rgb(0, 0, 0, 0.4);
      opacity: 0.3;
    }
    100% {
      background-color: rgb(0, 0, 0, 0.8);
      opacity: 1;
    }
`,m$=bc`
        0% {
      background-color: rgb(0, 0, 0, 0.8);
      opacity: 1;
    }
    100% {
      background-color: rgb(0, 0, 0, 0.4);
      opacity: 0;
    }
`,g$=t=>{switch(t.$closing){case!1:return bs`
        animation: ${p$} 350ms ease 1 normal forwards;
      `;case!0:return bs`
        animation: ${m$} 350ms 350ms ease 1 normal forwards;
      `;default:return null}},y$=bc`
  0% {
      opacity: 0.3;
      transform: scale(0.2);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  `,v$=bc`
  0% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0);
    }
  `,_$=t=>{switch(t.$closing){case!1:return bs`
        animation: ${y$} 350ms 350ms ease 1 normal forwards;
      `;case!0:return bs`
        animation: ${v$} 350ms ease 1 normal forwards;
      `;default:return null}},w$=P.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  overflow-y: scroll;
  z-index: 100;
  ${g$}
`,E$=P.div`
  opacity: 0;
  ${_$}
`,S$=P.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,jg=({children:t,onClose:e})=>{const[n,r]=C.useState(!1);document.body.style.overflow="hidden";const i=C.useCallback(s=>{(s.code==="Escape"||s.target===s.currentTarget)&&(r(!0),setTimeout(()=>{r(!1),document.body.style.overflow="auto",e()},750))},[e]);return C.useEffect(()=>(document.body.style.overflow="hidden",window.addEventListener("keydown",i),()=>{document.body.style.overflow="auto",window.removeEventListener("keydown",i)}),[i]),aE.createPortal(g.jsx(w$,{id:"modalWrap",$closing:n,onClick:i,children:g.jsx(S$,{children:g.jsx(E$,{$closing:n,children:t})})}),document.querySelector("#root"))};jg.propTypes={onClose:K.func.isRequired,children:K.node.isRequired};const C$=P.div`
  position: relative;
  width: 566px;
  height: 506px;
  background-color: #fff;
  padding: 64px;
  border-radius: 30px;
  background: rgb(255, 255, 255);
`,x$=P.h3`
  color: ${ge.BLACK_TEXT};
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: -0.8px;
  text-align: start;
  margin-bottom: 20px;
`,T$=P.p`
  color: ${ge.BLACK_TEXT};
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: start;
  margin-bottom: 40px;
`,D_=P(mT)`
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
    color: ${ge.BLACK_TEXT};
  }
  margin-bottom: ${t=>t.marginbottom||"18px"};
`,I$=P.button`
  width: 438px;
  height: 60px;
  border-radius: 12px;
  background-color: ${ge.YELLOW_BUTTON};
  &:hover {
    background-color: ${ge.YELLOW_HOVER_BUTTON};
  }
  border: none;
  color: ${ge.BLACK_TEXT};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
`,k$=P.div`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  &:hover svg path {
    stroke-width: 3.5;
  }
`,b$=P.div`
  position: relative;
`,P$=P.button`
  position: absolute;
  background: none;
  border: none;
  right: 17px;
  bottom: 117px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`,R$=P.div`
  position: absolute;
  color: red;
  font-size: 14px;
  line-height: 1.28;
  top: 55px;
`,O$=P.div`
  position: absolute;
  color: red;
  font-size: 14px;
  line-height: 1.28;
  top: 128px;
`;function Ai(t){this._maxSize=t,this.clear()}Ai.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Ai.prototype.get=function(t){return this._values[t]};Ai.prototype.set=function(t,e){return this._size>=this._maxSize&&this.clear(),t in this._values||this._size++,this._values[t]=e};var N$=/[^.^\]^[]+|(?=\[\]|\.\.)/g,gT=/^\d+$/,A$=/^\d/,L$=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,D$=/^\s*(['"]?)(.*?)(\1)\s*$/,$g=512,M_=new Ai($g),F_=new Ai($g),j_=new Ai($g),ui={Cache:Ai,split:dp,normalizePath:_f,setter:function(t){var e=_f(t);return F_.get(t)||F_.set(t,function(r,i){for(var s=0,o=e.length,a=r;s<o-1;){var l=e[s];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;a=a[e[s++]]}a[e[s]]=i})},getter:function(t,e){var n=_f(t);return j_.get(t)||j_.set(t,function(i){for(var s=0,o=n.length;s<o;)if(i!=null||!e)i=i[n[s++]];else return;return i})},join:function(t){return t.reduce(function(e,n){return e+(Ug(n)||gT.test(n)?"["+n+"]":(e?".":"")+n)},"")},forEach:function(t,e,n){M$(Array.isArray(t)?t:dp(t),e,n)}};function _f(t){return M_.get(t)||M_.set(t,dp(t).map(function(e){return e.replace(D$,"$2")}))}function dp(t){return t.match(N$)||[""]}function M$(t,e,n){var r=t.length,i,s,o,a;for(s=0;s<r;s++)i=t[s],i&&($$(i)&&(i='"'+i+'"'),a=Ug(i),o=!a&&/^\d+$/.test(i),e.call(n,i,a,o,s,t))}function Ug(t){return typeof t=="string"&&t&&["'",'"'].indexOf(t.charAt(0))!==-1}function F$(t){return t.match(A$)&&!t.match(gT)}function j$(t){return L$.test(t)}function $$(t){return!Ug(t)&&(F$(t)||j$(t))}const U$=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,ad=t=>t.match(U$)||[],ld=t=>t[0].toUpperCase()+t.slice(1),zg=(t,e)=>ad(t).join(e).toLowerCase(),yT=t=>ad(t).reduce((e,n)=>`${e}${e?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),z$=t=>ld(yT(t)),B$=t=>zg(t,"_"),W$=t=>zg(t,"-"),V$=t=>ld(zg(t," ")),H$=t=>ad(t).map(ld).join(" ");var wf={words:ad,upperFirst:ld,camelCase:yT,pascalCase:z$,snakeCase:B$,kebabCase:W$,sentenceCase:V$,titleCase:H$},Bg={exports:{}};Bg.exports=function(t){return vT(G$(t),t)};Bg.exports.array=vT;function vT(t,e){var n=t.length,r=new Array(n),i={},s=n,o=K$(e),a=q$(t);for(e.forEach(function(u){if(!a.has(u[0])||!a.has(u[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});s--;)i[s]||l(t[s],s,new Set);return r;function l(u,d,c){if(c.has(u)){var f;try{f=", node was:"+JSON.stringify(u)}catch{f=""}throw new Error("Cyclic dependency"+f)}if(!a.has(u))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(u));if(!i[d]){i[d]=!0;var p=o.get(u)||new Set;if(p=Array.from(p),d=p.length){c.add(u);do{var v=p[--d];l(v,a.get(v),c)}while(d);c.delete(u)}r[--n]=u}}}function G$(t){for(var e=new Set,n=0,r=t.length;n<r;n++){var i=t[n];e.add(i[0]),e.add(i[1])}return Array.from(e)}function K$(t){for(var e=new Map,n=0,r=t.length;n<r;n++){var i=t[n];e.has(i[0])||e.set(i[0],new Set),e.has(i[1])||e.set(i[1],new Set),e.get(i[0]).add(i[1])}return e}function q$(t){for(var e=new Map,n=0,r=t.length;n<r;n++)e.set(t[n],n);return e}var Y$=Bg.exports;const Q$=Fs(Y$),X$=Object.prototype.toString,J$=Error.prototype.toString,Z$=RegExp.prototype.toString,e9=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",t9=/^Symbol\((.*)\)(.*)$/;function n9(t){return t!=+t?"NaN":t===0&&1/t<0?"-0":""+t}function $_(t,e=!1){if(t==null||t===!0||t===!1)return""+t;const n=typeof t;if(n==="number")return n9(t);if(n==="string")return e?`"${t}"`:t;if(n==="function")return"[Function "+(t.name||"anonymous")+"]";if(n==="symbol")return e9.call(t).replace(t9,"Symbol($1)");const r=X$.call(t).slice(8,-1);return r==="Date"?isNaN(t.getTime())?""+t:t.toISOString(t):r==="Error"||t instanceof Error?"["+J$.call(t)+"]":r==="RegExp"?Z$.call(t):null}function kr(t,e){let n=$_(t,e);return n!==null?n:JSON.stringify(t,function(r,i){let s=$_(this[r],e);return s!==null?s:i},2)}function _T(t){return t==null?[]:[].concat(t)}let wT,r9=/\$\{\s*(\w+)\s*\}/g;wT=Symbol.toStringTag;class ot extends Error{static formatError(e,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof e=="string"?e.replace(r9,(i,s)=>kr(n[s])):typeof e=="function"?e(n):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,n,r,i,s){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this[wT]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],_T(e).forEach(o=>{if(ot.isError(o)){this.errors.push(...o.errors);const a=o.inner.length?o.inner:[o];this.inner.push(...a)}else this.errors.push(o)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],!s&&Error.captureStackTrace&&Error.captureStackTrace(this,ot)}}let ln={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:t,type:e,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${kr(r,!0)}\`).`:".";return e!=="mixed"?`${t} must be a \`${e}\` type, but the final value was: \`${kr(n,!0)}\``+i:`${t} must match the configured type. The validated value was: \`${kr(n,!0)}\``+i}},Bt={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},i9={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},fp={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},s9={isValue:"${path} field must be ${value}"},hp={noUnknown:"${path} field has unspecified keys: ${unknown}"},o9={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},a9={notType:t=>{const{path:e,value:n,spec:r}=t,i=r.types.length;if(Array.isArray(n)){if(n.length<i)return`${e} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${kr(n,!0)}\``;if(n.length>i)return`${e} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${kr(n,!0)}\``}return ot.formatError(ln.notType,t)}};Object.assign(Object.create(null),{mixed:ln,string:Bt,number:i9,date:fp,object:hp,array:o9,boolean:s9,tuple:a9});const Wg=t=>t&&t.__isYupSchema__;class tc{static fromOptions(e,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:s}=n,o=typeof r=="function"?r:(...a)=>a.every(l=>l===r);return new tc(e,(a,l)=>{var u;let d=o(...a)?i:s;return(u=d==null?void 0:d(l))!=null?u:l})}constructor(e,n){this.fn=void 0,this.refs=e,this.refs=e,this.fn=n}resolve(e,n){let r=this.refs.map(s=>s.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,e,n);if(i===void 0||i===e)return e;if(!Wg(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const Cl={context:"$",value:"."};class Li{constructor(e,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Cl.context,this.isValue=this.key[0]===Cl.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?Cl.context:this.isValue?Cl.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&ui.getter(this.path,!0),this.map=n.map}getValue(e,n,r){let i=this.isContext?r:this.isValue?e:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(e,n){return this.getValue(e,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}Li.prototype.__isYupRef=!0;const ni=t=>t==null;function $i(t){function e({value:n,path:r="",options:i,originalValue:s,schema:o},a,l){const{name:u,test:d,params:c,message:f,skipAbsent:p}=t;let{parent:v,context:_,abortEarly:E=o.spec.abortEarly,disableStackTrace:m=o.spec.disableStackTrace}=i;function h(B){return Li.isRef(B)?B.getValue(n,v,_):B}function y(B={}){var Nt;const ae=Object.assign({value:n,originalValue:s,label:o.spec.label,path:B.path||r,spec:o.spec},c,B.params);for(const _n of Object.keys(ae))ae[_n]=h(ae[_n]);const gt=new ot(ot.formatError(B.message||f,ae),n,ae.path,B.type||u,(Nt=B.disableStackTrace)!=null?Nt:m);return gt.params=ae,gt}const w=E?a:l;let T={path:r,parent:v,type:u,from:i.from,createError:y,resolve:h,options:i,originalValue:s,schema:o};const S=B=>{ot.isError(B)?w(B):B?l(null):w(y())},x=B=>{ot.isError(B)?w(B):a(B)};if(p&&ni(n))return S(!0);let L;try{var F;if(L=d.call(T,n,T),typeof((F=L)==null?void 0:F.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${T.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(L).then(S,x)}}catch(B){x(B);return}S(L)}return e.OPTIONS=t,e}function l9(t,e,n,r=n){let i,s,o;return e?(ui.forEach(e,(a,l,u)=>{let d=l?a.slice(1,a.length-1):a;t=t.resolve({context:r,parent:i,value:n});let c=t.type==="tuple",f=u?parseInt(d,10):0;if(t.innerType||c){if(c&&!u)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);if(n&&f>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${e}. because there is no value at that index. `);i=n,n=n&&n[f],t=c?t.spec.types[f]:t.innerType}if(!u){if(!t.fields||!t.fields[d])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${t.type}")`);i=n,n=n&&n[d],t=t.fields[d]}s=d,o=l?"["+a+"]":"."+a}),{schema:t,parent:i,parentPath:s}):{parent:i,parentPath:e,schema:t}}class nc extends Set{describe(){const e=[];for(const n of this.values())e.push(Li.isRef(n)?n.describe():n);return e}resolveAll(e){let n=[];for(const r of this.values())n.push(e(r));return n}clone(){return new nc(this.values())}merge(e,n){const r=this.clone();return e.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function ns(t,e=new Map){if(Wg(t)||!t||typeof t!="object")return t;if(e.has(t))return e.get(t);let n;if(t instanceof Date)n=new Date(t.getTime()),e.set(t,n);else if(t instanceof RegExp)n=new RegExp(t),e.set(t,n);else if(Array.isArray(t)){n=new Array(t.length),e.set(t,n);for(let r=0;r<t.length;r++)n[r]=ns(t[r],e)}else if(t instanceof Map){n=new Map,e.set(t,n);for(const[r,i]of t.entries())n.set(r,ns(i,e))}else if(t instanceof Set){n=new Set,e.set(t,n);for(const r of t)n.add(ns(r,e))}else if(t instanceof Object){n={},e.set(t,n);for(const[r,i]of Object.entries(t))n[r]=ns(i,e)}else throw Error(`Unable to clone ${t}`);return n}class yn{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new nc,this._blacklist=new nc,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(ln.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},e==null?void 0:e.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=ns(Object.assign({},this.spec,e)),n}label(e){let n=this.clone();return n.spec.label=e,n}meta(...e){if(e.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},e[0]),n}withMutation(e){let n=this._mutate;this._mutate=!0;let r=e(this);return this._mutate=n,r}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let n=this,r=e.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(e._whitelist,e._blacklist),r._blacklist=n._blacklist.merge(e._blacklist,e._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(s=>{e.tests.forEach(o=>{s.test(o.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(e){return e==null?!!(this.spec.nullable&&e===null||this.spec.optional&&e===void 0):this._typeCheck(e)}resolve(e){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,s)=>s.resolve(i,e),n),n=n.resolve(e)}return n}resolveOptions(e){var n,r,i,s;return Object.assign({},e,{from:e.from||[],strict:(n=e.strict)!=null?n:this.spec.strict,abortEarly:(r=e.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=e.recursive)!=null?i:this.spec.recursive,disableStackTrace:(s=e.disableStackTrace)!=null?s:this.spec.disableStackTrace})}cast(e,n={}){let r=this.resolve(Object.assign({value:e},n)),i=n.assert==="ignore-optionality",s=r._cast(e,n);if(n.assert!==!1&&!r.isType(s)){if(i&&ni(s))return s;let o=kr(e),a=kr(s);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${o} 
`+(a!==o?`result of cast: ${a}`:""))}return s}_cast(e,n){let r=e===void 0?e:this.transforms.reduce((i,s)=>s.call(this,i,e,this),e);return r===void 0&&(r=this.getDefault(n)),r}_validate(e,n={},r,i){let{path:s,originalValue:o=e,strict:a=this.spec.strict}=n,l=e;a||(l=this._cast(l,Object.assign({assert:!1},n)));let u=[];for(let d of Object.values(this.internalTests))d&&u.push(d);this.runTests({path:s,value:l,originalValue:o,options:n,tests:u},r,d=>{if(d.length)return i(d,l);this.runTests({path:s,value:l,originalValue:o,options:n,tests:this.tests},r,i)})}runTests(e,n,r){let i=!1,{tests:s,value:o,originalValue:a,path:l,options:u}=e,d=_=>{i||(i=!0,n(_,o))},c=_=>{i||(i=!0,r(_,o))},f=s.length,p=[];if(!f)return c([]);let v={value:o,originalValue:a,path:l,options:u,schema:this};for(let _=0;_<s.length;_++){const E=s[_];E(v,d,function(h){h&&(Array.isArray(h)?p.push(...h):p.push(h)),--f<=0&&c(p)})}}asNestedTest({key:e,index:n,parent:r,parentPath:i,originalParent:s,options:o}){const a=e??n;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof a=="number";let u=r[a];const d=Object.assign({},o,{strict:!0,parent:r,value:u,originalValue:s[a],key:void 0,[l?"index":"key"]:a,path:l||a.includes(".")?`${i||""}[${u?a:`"${a}"`}]`:(i?`${i}.`:"")+e});return(c,f,p)=>this.resolve(d)._validate(u,d,f,p)}validate(e,n){var r;let i=this.resolve(Object.assign({},n,{value:e})),s=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return new Promise((o,a)=>i._validate(e,n,(l,u)=>{ot.isError(l)&&(l.value=u),a(l)},(l,u)=>{l.length?a(new ot(l,u,void 0,void 0,s)):o(u)}))}validateSync(e,n){var r;let i=this.resolve(Object.assign({},n,{value:e})),s,o=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return i._validate(e,Object.assign({},n,{sync:!0}),(a,l)=>{throw ot.isError(a)&&(a.value=l),a},(a,l)=>{if(a.length)throw new ot(a,e,void 0,void 0,o);s=l}),s}isValid(e,n){return this.validate(e,n).then(()=>!0,r=>{if(ot.isError(r))return!1;throw r})}isValidSync(e,n){try{return this.validateSync(e,n),!0}catch(r){if(ot.isError(r))return!1;throw r}}_getDefault(e){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,e):ns(n)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,n){const r=this.clone({nullable:e});return r.internalTests.nullable=$i({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(e,n){const r=this.clone({optional:e});return r.internalTests.optionality=$i({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(e=ln.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=ln.notNull){return this.nullability(!1,e)}required(e=ln.required){return this.clone().withMutation(n=>n.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let n=this.clone();return n.transforms.push(e),n}test(...e){let n;if(e.length===1?typeof e[0]=="function"?n={test:e[0]}:n=e[0]:e.length===2?n={name:e[0],test:e[1]}:n={name:e[0],message:e[1],test:e[2]},n.message===void 0&&(n.message=ln.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=$i(n),s=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(o=>!(o.OPTIONS.name===n.name&&(s||o.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(e,n){!Array.isArray(e)&&typeof e!="string"&&(n=e,e=".");let r=this.clone(),i=_T(e).map(s=>new Li(s));return i.forEach(s=>{s.isSibling&&r.deps.push(s.key)}),r.conditions.push(typeof n=="function"?new tc(i,n):tc.fromOptions(i,n)),r}typeError(e){let n=this.clone();return n.internalTests.typeError=$i({message:e,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(e,n=ln.oneOf){let r=this.clone();return e.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=$i({message:n,name:"oneOf",skipAbsent:!0,test(i){let s=this.schema._whitelist,o=s.resolveAll(this.resolve);return o.includes(i)?!0:this.createError({params:{values:Array.from(s).join(", "),resolved:o}})}}),r}notOneOf(e,n=ln.notOneOf){let r=this.clone();return e.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=$i({message:n,name:"notOneOf",test(i){let s=this.schema._blacklist,o=s.resolveAll(this.resolve);return o.includes(i)?this.createError({params:{values:Array.from(s).join(", "),resolved:o}}):!0}}),r}strip(e=!0){let n=this.clone();return n.spec.strip=e,n}describe(e){const n=(e?this.resolve(e):this).clone(),{label:r,meta:i,optional:s,nullable:o}=n.spec;return{meta:i,label:r,optional:s,nullable:o,default:n.getDefault(e),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,u,d)=>d.findIndex(c=>c.name===l.name)===u)}}}yn.prototype.__isYupSchema__=!0;for(const t of["validate","validateSync"])yn.prototype[`${t}At`]=function(e,n,r={}){const{parent:i,parentPath:s,schema:o}=l9(this,e,n,r.context);return o[t](i&&i[s],Object.assign({},r,{parent:i,path:e}))};for(const t of["equals","is"])yn.prototype[t]=yn.prototype.oneOf;for(const t of["not","nope"])yn.prototype[t]=yn.prototype.notOneOf;let u9=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,c9=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,d9=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,f9=t=>ni(t)||t===t.trim(),h9={}.toString();function ps(){return new ET}class ET extends yn{constructor(){super({type:"string",check(e){return e instanceof String&&(e=e.valueOf()),typeof e=="string"}}),this.withMutation(()=>{this.transform((e,n,r)=>{if(!r.spec.coerce||r.isType(e)||Array.isArray(e))return e;const i=e!=null&&e.toString?e.toString():e;return i===h9?e:i})})}required(e){return super.required(e).withMutation(n=>n.test({message:e||ln.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(n=>n.OPTIONS.name!=="required"),e))}length(e,n=Bt.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(r){return r.length===this.resolve(e)}})}min(e,n=Bt.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(r){return r.length>=this.resolve(e)}})}max(e,n=Bt.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:e},skipAbsent:!0,test(r){return r.length<=this.resolve(e)}})}matches(e,n){let r=!1,i,s;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:s}=n:i=n),this.test({name:s||"matches",message:i||Bt.matches,params:{regex:e},skipAbsent:!0,test:o=>o===""&&r||o.search(e)!==-1})}email(e=Bt.email){return this.matches(u9,{name:"email",message:e,excludeEmptyString:!0})}url(e=Bt.url){return this.matches(c9,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=Bt.uuid){return this.matches(d9,{name:"uuid",message:e,excludeEmptyString:!1})}ensure(){return this.default("").transform(e=>e===null?"":e)}trim(e=Bt.trim){return this.transform(n=>n!=null?n.trim():n).test({message:e,name:"trim",test:f9})}lowercase(e=Bt.lowercase){return this.transform(n=>ni(n)?n:n.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>ni(n)||n===n.toLowerCase()})}uppercase(e=Bt.uppercase){return this.transform(n=>ni(n)?n:n.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>ni(n)||n===n.toUpperCase()})}}ps.prototype=ET.prototype;const p9=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function Sn(t,e=0){return Number(t)||e}function m9(t){const e=p9.exec(t);if(!e)return Date.parse?Date.parse(t):Number.NaN;const n={year:Sn(e[1]),month:Sn(e[2],1)-1,day:Sn(e[3],1),hour:Sn(e[4]),minute:Sn(e[5]),second:Sn(e[6]),millisecond:e[7]?Sn(e[7].substring(0,3)):0,z:e[8]||void 0,plusMinus:e[9]||void 0,hourOffset:Sn(e[10]),minuteOffset:Sn(e[11])};if(n.z===void 0&&n.plusMinus===void 0)return new Date(n.year,n.month,n.day,n.hour,n.minute,n.second,n.millisecond).valueOf();let r=0;return n.z!=="Z"&&n.plusMinus!==void 0&&(r=n.hourOffset*60+n.minuteOffset,n.plusMinus==="+"&&(r=0-r)),Date.UTC(n.year,n.month,n.day,n.hour,n.minute+r,n.second,n.millisecond)}let g9=new Date(""),y9=t=>Object.prototype.toString.call(t)==="[object Date]";class ud extends yn{constructor(){super({type:"date",check(e){return y9(e)&&!isNaN(e.getTime())}}),this.withMutation(()=>{this.transform((e,n,r)=>!r.spec.coerce||r.isType(e)||e===null?e:(e=m9(e),isNaN(e)?ud.INVALID_DATE:new Date(e)))})}prepareParam(e,n){let r;if(Li.isRef(e))r=e;else{let i=this.cast(e);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(e,n=fp.min){let r=this.prepareParam(e,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(e,n=fp.max){let r=this.prepareParam(e,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}ud.INVALID_DATE=g9;ud.prototype;function v9(t,e=[]){let n=[],r=new Set,i=new Set(e.map(([o,a])=>`${o}-${a}`));function s(o,a){let l=ui.split(o)[0];r.add(l),i.has(`${a}-${l}`)||n.push([a,l])}for(const o of Object.keys(t)){let a=t[o];r.add(o),Li.isRef(a)&&a.isSibling?s(a.path,o):Wg(a)&&"deps"in a&&a.deps.forEach(l=>s(l,o))}return Q$.array(Array.from(r),n).reverse()}function U_(t,e){let n=1/0;return t.some((r,i)=>{var s;if((s=e.path)!=null&&s.includes(r))return n=i,!0}),n}function ST(t){return(e,n)=>U_(t,e)-U_(t,n)}const _9=(t,e,n)=>{if(typeof t!="string")return t;let r=t;try{r=JSON.parse(t)}catch{}return n.isType(r)?r:t};function Kl(t){if("fields"in t){const e={};for(const[n,r]of Object.entries(t.fields))e[n]=Kl(r);return t.setFields(e)}if(t.type==="array"){const e=t.optional();return e.innerType&&(e.innerType=Kl(e.innerType)),e}return t.type==="tuple"?t.optional().clone({types:t.spec.types.map(Kl)}):"optional"in t?t.optional():t}const w9=(t,e)=>{const n=[...ui.normalizePath(e)];if(n.length===1)return n[0]in t;let r=n.pop(),i=ui.getter(ui.join(n),!0)(t);return!!(i&&r in i)};let z_=t=>Object.prototype.toString.call(t)==="[object Object]";function E9(t,e){let n=Object.keys(t.fields);return Object.keys(e).filter(r=>n.indexOf(r)===-1)}const S9=ST([]);function Vg(t){return new CT(t)}class CT extends yn{constructor(e){super({type:"object",check(n){return z_(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=S9,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,n={}){var r;let i=super._cast(e,n);if(i===void 0)return this.getDefault(n);if(!this._typeCheck(i))return i;let s=this.fields,o=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(i).filter(c=>!this._nodes.includes(c))),l={},u=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),d=!1;for(const c of a){let f=s[c],p=c in i;if(f){let v,_=i[c];u.path=(n.path?`${n.path}.`:"")+c,f=f.resolve({value:_,context:n.context,parent:l});let E=f instanceof yn?f.spec:void 0,m=E==null?void 0:E.strict;if(E!=null&&E.strip){d=d||c in i;continue}v=!n.__validating||!m?f.cast(i[c],u):i[c],v!==void 0&&(l[c]=v)}else p&&!o&&(l[c]=i[c]);(p!==c in l||l[c]!==i[c])&&(d=!0)}return d?l:i}_validate(e,n={},r,i){let{from:s=[],originalValue:o=e,recursive:a=this.spec.recursive}=n;n.from=[{schema:this,value:o},...s],n.__validating=!0,n.originalValue=o,super._validate(e,n,r,(l,u)=>{if(!a||!z_(u)){i(l,u);return}o=o||u;let d=[];for(let c of this._nodes){let f=this.fields[c];!f||Li.isRef(f)||d.push(f.asNestedTest({options:n,key:c,parent:u,parentPath:n.path,originalParent:o}))}this.runTests({tests:d,value:u,originalValue:o,options:n},r,c=>{i(c.sort(this._sortErrors).concat(l),u)})})}clone(e){const n=super.clone(e);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(e){let n=super.concat(e),r=n.fields;for(let[i,s]of Object.entries(this.fields)){const o=r[i];r[i]=o===void 0?s:o}return n.withMutation(i=>i.setFields(r,[...this._excludedEdges,...e._excludedEdges]))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var i;const s=this.fields[r];let o=e;(i=o)!=null&&i.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[r]})),n[r]=s&&"getDefault"in s?s.getDefault(o):void 0}),n}setFields(e,n){let r=this.clone();return r.fields=e,r._nodes=v9(e,n),r._sortErrors=ST(Object.keys(e)),n&&(r._excludedEdges=n),r}shape(e,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,e),i)})}partial(){const e={};for(const[n,r]of Object.entries(this.fields))e[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(e)}deepPartial(){return Kl(this)}pick(e){const n={};for(const r of e)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,i])=>e.includes(r)&&e.includes(i)))}omit(e){const n=[];for(const r of Object.keys(this.fields))e.includes(r)||n.push(r);return this.pick(n)}from(e,n,r){let i=ui.getter(e,!0);return this.transform(s=>{if(!s)return s;let o=s;return w9(s,e)&&(o=Object.assign({},s),r||delete o[e],o[n]=i(s)),o})}json(){return this.transform(_9)}noUnknown(e=!0,n=hp.noUnknown){typeof e!="boolean"&&(n=e,e=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const s=E9(this.schema,i);return!e||s.length===0||this.createError({params:{unknown:s.join(", ")}})}});return r.spec.noUnknown=e,r}unknown(e=!0,n=hp.noUnknown){return this.noUnknown(!e,n)}transformKeys(e){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[e(i)]=n[i];return r})}camelCase(){return this.transformKeys(wf.camelCase)}snakeCase(){return this.transformKeys(wf.snakeCase)}constantCase(){return this.transformKeys(e=>wf.snakeCase(e).toUpperCase())}describe(e){const n=(e?this.resolve(e):this).clone(),r=super.describe(e);r.fields={};for(const[s,o]of Object.entries(n.fields)){var i;let a=e;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[s]})),r.fields[s]=o.describe(a)}return r}}Vg.prototype=CT.prototype;const Hg=({strokeWidth:t})=>g.jsxs("svg",{width:"32.000000",height:"32.000000",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[g.jsx("desc",{children:"Created with Pixso."}),g.jsx("defs",{children:g.jsx("clipPath",{id:"clip4_589",children:g.jsx("rect",{id:"x",width:"32.000000",height:"32.000000",fill:"white",fillOpacity:"0"})})}),g.jsx("rect",{id:"x",width:"32.000000",height:"32.000000",fill:"#FFFFFF",fillOpacity:"0"}),g.jsxs("g",{clipPath:"url(#clip4_589)",children:[g.jsx("path",{id:"Vector",d:"M24 8L8 24",stroke:"#121417",strokeOpacity:"1.000000",strokeWidth:t,strokeLinejoin:"round",strokeLinecap:"round"}),g.jsx("path",{id:"Vector",d:"M8 8L24 24",stroke:"#121417",strokeOpacity:"1.000000",strokeWidth:t,strokeLinejoin:"round",strokeLinecap:"round"})]})]});Hg.propTypes={strokeWidth:K.string.isRequired};const xT=()=>g.jsxs("svg",{width:"20.000000",height:"20.000000",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[g.jsx("desc",{children:"Created with Pixso."}),g.jsx("defs",{children:g.jsx("clipPath",{id:"clip4_621",children:g.jsx("rect",{id:"eye-off",width:"20.000000",height:"20.000000",fill:"white",fillOpacity:"0"})})}),g.jsx("rect",{id:"eye-off",width:"20.000000",height:"20.000000",fill:"#FFFFFF",fillOpacity:"0"}),g.jsx("g",{clipPath:"url(#clip4_621)",children:g.jsx("path",{id:"Vector",d:"M14.95 14.95C13.5254 16.0358 11.7908 16.6373 10 16.6666C4.1665 16.6666 0.833252 10 0.833252 10C1.86987 8.06824 3.30762 6.38049 5.0498 5.04993M8.25 3.53333C8.82349 3.39905 9.41089 3.33191 10 3.33325C15.8333 3.33325 19.1665 10 19.1665 10C18.6606 10.9463 18.0574 11.8372 17.3667 12.6583M11.7666 11.7666C11.5376 12.0122 11.2617 12.2092 10.9551 12.3458C10.6484 12.4825 10.3174 12.556 9.98169 12.5619C9.646 12.5679 9.3125 12.5061 9.00122 12.3804C8.68994 12.2546 8.40723 12.0675 8.16968 11.8301C7.93237 11.5927 7.74536 11.3099 7.61963 10.9987C7.49365 10.6873 7.43213 10.3539 7.43799 10.0182C7.44385 9.6825 7.51733 9.35144 7.65405 9.0448C7.79053 8.73816 7.98755 8.46216 8.23315 8.23328",stroke:"#121417",strokeOpacity:"1.000000",strokeWidth:"2.000000",strokeLinejoin:"round"})})]}),TT=()=>g.jsxs("svg",{width:"20.000000",height:"20.000000",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[g.jsx("desc",{children:"Created with Pixso."}),g.jsx("defs",{children:g.jsx("clipPath",{id:"clip4_621",children:g.jsx("rect",{id:"eye-off",width:"20.000000",height:"20.000000",fill:"white",fillOpacity:"0"})})}),g.jsx("rect",{id:"eye-off",width:"20.000000",height:"20.000000",fill:"#FFFFFF",fillOpacity:"0"}),g.jsxs("g",{clipPath:"url(#clip4_621)",children:[g.jsx("path",{id:"Vector",d:"M14.95 14.95C13.5254 16.0358 11.7908 16.6373 10 16.6666C4.1665 16.6666 0.833252 10 0.833252 10C1.86987 8.06824 3.30762 6.38049 5.0498 5.04993M8.25 3.53333C8.82349 3.39905 9.41089 3.33191 10 3.33325C15.8333 3.33325 19.1665 10 19.1665 10C18.6606 10.9463 18.0574 11.8372 17.3667 12.6583M11.7666 11.7666C11.5376 12.0122 11.2617 12.2092 10.9551 12.3458C10.6484 12.4825 10.3174 12.556 9.98169 12.5619C9.646 12.5679 9.3125 12.5061 9.00122 12.3804C8.68994 12.2546 8.40723 12.0675 8.16968 11.8301C7.93237 11.5927 7.74536 11.3099 7.61963 10.9987C7.49365 10.6873 7.43213 10.3539 7.43799 10.0182C7.44385 9.6825 7.51733 9.35144 7.65405 9.0448C7.79053 8.73816 7.98755 8.46216 8.23315 8.23328",stroke:"#121417",strokeOpacity:"1.000000",strokeWidth:"2.000000",strokeLinejoin:"round"}),g.jsx("path",{id:"Vector",d:"M0.833252 0.833374L19.1665 19.1667",stroke:"#121417",strokeOpacity:"1.000000",strokeWidth:"2.000000",strokeLinejoin:"round",strokeLinecap:"round"})]})]}),C9={email:"",password:""},x9=Vg().shape({email:ps().matches(/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,"Incorret email").required("Be sure to enter your email"),password:ps().min(8,"Password must contain minimum 8 symbols").max(64,"Password must contain maximum 64 symbols").required("Be sure to enter your password")}),IT=({onClose:t})=>{const[e,n]=C.useState(!1),r=Hs(),i=(o,{resetForm:a})=>{r(cC({value:o})),t(),console.log(o),a()},s=({name:o})=>{switch(o){case"email":return g.jsx(Uo,{name:o,component:R$});case"password":return g.jsx(Uo,{name:o,component:O$})}};return g.jsx(jg,{onClose:t,children:g.jsx(C$,{children:g.jsx(pT,{initialValues:C9,validationSchema:x9,onSubmit:i,children:g.jsxs(Fg,{children:[g.jsx(k$,{onClick:t,children:g.jsx(Hg,{strokeWidth:"2.5"})}),g.jsx(x$,{children:"Log In"}),g.jsx(T$,{children:"Welcome back! Please enter your credentials to access your account and continue your search for an teacher."}),g.jsxs(b$,{children:[g.jsx(D_,{type:"text",name:"email",placeholder:"Email"}),g.jsx(s,{name:"email"}),g.jsx(D_,{type:e?"text":"password",name:"password",placeholder:"Password",marginbottom:"40px"}),g.jsx(s,{name:"password"}),g.jsx(I$,{type:"submit",children:"Log In"}),g.jsx(P$,{type:"button",onClick:()=>{n(!e)},children:e?g.jsx(xT,{}):g.jsx(TT,{})})]})]})})})})};IT.propTypes={onClose:K.func.isRequired,name:K.string};const T9=P.div`
  position: relative;
  width: 566px;
  background-color: #fff;
  padding: 64px;
  border-radius: 30px;
  background: rgb(255, 255, 255);
`,I9=P.h3`
  color: ${ge.BLACK_TEXT};
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: -0.8px;
  text-align: start;
  margin-bottom: 20px;
`,k9=P.p`
  color: ${ge.BLACK_TEXT};
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: start;
  margin-bottom: 40px;
`,Ef=P(mT)`
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
    color: ${ge.BLACK_TEXT};
  }
`,b9=P.button`
  width: 438px;
  height: 60px;
  border-radius: 12px;
  background-color: ${ge.YELLOW_BUTTON};
  &:hover {
    background-color: ${ge.YELLOW_HOVER_BUTTON};
  }
  border: none;
  color: ${ge.BLACK_TEXT};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
`,P9=P.div`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  &:hover svg path {
    stroke-width: 3.5;
  }
`,R9=P.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 18px;
  margin-bottom: 40px;
`,O9=P.button`
  position: absolute;
  background: none;
  border: none;
  right: 17px;
  bottom: 17px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`,N9=P.div`
  position: absolute;
  color: red;
  font-size: 14px;
  line-height: 1.28;
  top: -16px;
`,A9=P.div`
  position: absolute;
  color: red;
  font-size: 14px;
  line-height: 1.28;
  top: 55px;
`,L9=P.div`
  position: absolute;
  color: red;
  font-size: 14px;
  line-height: 1.28;
  top: 128px;
`,D9={name:"",email:"",password:""},M9=Vg().shape({name:ps().required("Be sure to enter your name"),email:ps().matches(/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,"Incorret email").required("Be sure to enter your email"),password:ps().min(8,"Password must contain minimum 8 symbols").max(64,"Password must contain maximum 64 symbols").required("Be sure to enter your password")}),kT=({onClose:t})=>{const[e,n]=C.useState(!1),r=Hs(),i=o=>{r(uC({value:o})),t()},s=({name:o})=>{switch(o){case"name":return g.jsx(Uo,{name:o,component:N9});case"email":return g.jsx(Uo,{name:o,component:A9});case"password":return g.jsx(Uo,{name:o,component:L9})}};return g.jsx(jg,{onClose:t,children:g.jsx(T9,{children:g.jsx(pT,{initialValues:D9,validationSchema:M9,onSubmit:i,children:g.jsxs(Fg,{children:[g.jsx(P9,{onClick:t,children:g.jsx(Hg,{strokeWidth:"2.5"})}),g.jsx(I9,{children:"Registration"}),g.jsxs(k9,{children:["Thank you for your interest in our platform! In order to register",g.jsx("wbr",{}),", we need some information. Please provide us with the following information"]}),g.jsxs(R9,{children:[g.jsx(Ef,{type:"text",name:"name",placeholder:"Name"}),g.jsx(s,{name:"name"}),g.jsx(Ef,{type:"text",name:"email",placeholder:"Email"}),g.jsx(s,{name:"email"}),g.jsx(Ef,{type:e?"text":"password",name:"password",placeholder:"Password"}),g.jsx(s,{name:"password"}),g.jsx(O9,{type:"button",onClick:()=>{n(!e)},children:e?g.jsx(xT,{}):g.jsx(TT,{})})]}),g.jsx(b9,{type:"submit",children:"Log In"})]})})})})};kT.propTypes={onClose:K.func.isRequired,name:K.string};const bT=({namePopUp:t,onClose:e})=>{switch(t){case"login":return g.jsx(IT,{onClose:e});case"signin":return g.jsx(kT,{onClose:e})}return g.jsx(g.Fragment,{})};bT.propTypes={namePopUp:K.string.isRequired,onClose:K.func.isRequired};const F9=({children:t})=>{const e=xm(),n=e.isLoggedIn,r=e.isLoggedIn;return!n&&!r?g.jsx(_h,{to:"/"}):t},j9=()=>{const t=Pc(Px);return g.jsx(Nx,{children:t.map(e=>g.jsx(Eg,{...e},e.id))})},$9=P.div`
  position: relative;
  width: 1440px;
  background: rgb(248, 248, 248);
  padding: 96px 128px 96px 128px;
`,U9=()=>g.jsx($9,{children:g.jsx(j9,{})});function z9(){const[t,e]=C.useState(""),n=Hs();return C.useEffect(()=>{n(Hl())},[n]),g.jsxs(g.Fragment,{children:[g.jsx(s2,{children:g.jsxs(vo,{path:"/",element:g.jsx(hC,{setNamePopUp:e}),children:[g.jsx(vo,{index:!0,element:g.jsx(xL,{})}),g.jsx(vo,{path:"teachers",element:g.jsx(R6,{})}),g.jsx(vo,{path:"favorites",element:g.jsx(F9,{children:g.jsx(U9,{})})})]})}),g.jsx(bT,{namePopUp:t,onClose:()=>e("")})]})}const B9={name:null,email:null,token:null,id:null,isLoggedIn:!1,isRefreshing:!1},W9=pS({name:"auth",initialState:B9,extraReducers:t=>{t.addCase(uC.fulfilled,(e,n)=>{console.log(n.payload),e.email=n.payload.email,e.token=n.payload.accessToken,e.id=n.payload.id,e.name=n.payload.name,e.isLoggedIn=!0}).addCase(cC.fulfilled,(e,n)=>{e.email=n.payload.email,e.token=n.payload.accessToken,e.id=n.payload.id,e.name=n.payload.name,e.isLoggedIn=!0}).addCase(dC.fulfilled,e=>{e.email=null,e.token=null,e.id=null,e.name=null,e.isLoggedIn=!1}).addCase(Hl.pending,e=>{e.isRefreshing=!0}).addCase(Hl.fulfilled,(e,n)=>{e.name=n.payload.name,e.email=n.payload.email,e.token=n.payload.token,e.id=n.payload.id,e.isLoggedIn=!0,e.isRefreshing=!1}).addCase(Hl.rejected,e=>{e.isRefreshing=!1})}}),V9=W9.reducer;var Gg="persist:",Kg="persist/FLUSH",cd="persist/REHYDRATE",qg="persist/PAUSE",Yg="persist/PERSIST",Qg="persist/PURGE",Xg="persist/REGISTER",H9=-1;function ql(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ql=function(n){return typeof n}:ql=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ql(t)}function B_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function G9(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?B_(n,!0).forEach(function(r){K9(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):B_(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function K9(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function q9(t,e,n,r){r.debug;var i=G9({},n);return t&&ql(t)==="object"&&Object.keys(t).forEach(function(s){s!=="_persist"&&e[s]===n[s]&&(i[s]=t[s])}),i}function Y9(t){var e=t.blacklist||null,n=t.whitelist||null,r=t.transforms||[],i=t.throttle||0,s="".concat(t.keyPrefix!==void 0?t.keyPrefix:Gg).concat(t.key),o=t.storage,a;t.serialize===!1?a=function(T){return T}:typeof t.serialize=="function"?a=t.serialize:a=Q9;var l=t.writeFailHandler||null,u={},d={},c=[],f=null,p=null,v=function(T){Object.keys(T).forEach(function(S){m(S)&&u[S]!==T[S]&&c.indexOf(S)===-1&&c.push(S)}),Object.keys(u).forEach(function(S){T[S]===void 0&&m(S)&&c.indexOf(S)===-1&&u[S]!==void 0&&c.push(S)}),f===null&&(f=setInterval(_,i)),u=T};function _(){if(c.length===0){f&&clearInterval(f),f=null;return}var w=c.shift(),T=r.reduce(function(S,x){return x.in(S,w,u)},u[w]);if(T!==void 0)try{d[w]=a(T)}catch(S){console.error("redux-persist/createPersistoid: error serializing state",S)}else delete d[w];c.length===0&&E()}function E(){Object.keys(d).forEach(function(w){u[w]===void 0&&delete d[w]}),p=o.setItem(s,a(d)).catch(h)}function m(w){return!(n&&n.indexOf(w)===-1&&w!=="_persist"||e&&e.indexOf(w)!==-1)}function h(w){l&&l(w)}var y=function(){for(;c.length!==0;)_();return p||Promise.resolve()};return{update:v,flush:y}}function Q9(t){return JSON.stringify(t)}function X9(t){var e=t.transforms||[],n="".concat(t.keyPrefix!==void 0?t.keyPrefix:Gg).concat(t.key),r=t.storage;t.debug;var i;return t.deserialize===!1?i=function(o){return o}:typeof t.deserialize=="function"?i=t.deserialize:i=J9,r.getItem(n).then(function(s){if(s)try{var o={},a=i(s);return Object.keys(a).forEach(function(l){o[l]=e.reduceRight(function(u,d){return d.out(u,l,a)},i(a[l]))}),o}catch(l){throw l}else return})}function J9(t){return JSON.parse(t)}function Z9(t){var e=t.storage,n="".concat(t.keyPrefix!==void 0?t.keyPrefix:Gg).concat(t.key);return e.removeItem(n,e7)}function e7(t){}function W_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Cn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?W_(n,!0).forEach(function(r){t7(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):W_(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function t7(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function n7(t,e){if(t==null)return{};var n=r7(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function r7(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var i7=5e3;function V_(t,e){var n=t.version!==void 0?t.version:H9;t.debug;var r=t.stateReconciler===void 0?q9:t.stateReconciler,i=t.getStoredState||X9,s=t.timeout!==void 0?t.timeout:i7,o=null,a=!1,l=!0,u=function(c){return c._persist.rehydrated&&o&&!l&&o.update(c),c};return function(d,c){var f=d||{},p=f._persist,v=n7(f,["_persist"]),_=v;if(c.type===Yg){var E=!1,m=function(k,L){E||(c.rehydrate(t.key,k,L),E=!0)};if(s&&setTimeout(function(){!E&&m(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(t.key,'"')))},s),l=!1,o||(o=Y9(t)),p)return Cn({},e(_,c),{_persist:p});if(typeof c.rehydrate!="function"||typeof c.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return c.register(t.key),i(t).then(function(x){var k=t.migrate||function(L,F){return Promise.resolve(L)};k(x,n).then(function(L){m(L)},function(L){m(void 0,L)})},function(x){m(void 0,x)}),Cn({},e(_,c),{_persist:{version:n,rehydrated:!1}})}else{if(c.type===Qg)return a=!0,c.result(Z9(t)),Cn({},e(_,c),{_persist:p});if(c.type===Kg)return c.result(o&&o.flush()),Cn({},e(_,c),{_persist:p});if(c.type===qg)l=!0;else if(c.type===cd){if(a)return Cn({},_,{_persist:Cn({},p,{rehydrated:!0})});if(c.key===t.key){var h=e(_,c),y=c.payload,w=r!==!1&&y!==void 0?r(y,d,h,t):h,T=Cn({},w,{_persist:Cn({},p,{rehydrated:!0})});return u(T)}}}if(!p)return e(d,c);var S=e(_,c);return S===_?d:u(Cn({},S,{_persist:p}))}}function H_(t){return a7(t)||o7(t)||s7()}function s7(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function o7(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function a7(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function G_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function pp(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?G_(n,!0).forEach(function(r){l7(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):G_(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function l7(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var PT={registry:[],bootstrapped:!1},u7=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:PT,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Xg:return pp({},e,{registry:[].concat(H_(e.registry),[n.key])});case cd:var r=e.registry.indexOf(n.key),i=H_(e.registry);return i.splice(r,1),pp({},e,{registry:i,bootstrapped:i.length===0});default:return e}};function c7(t,e,n){var r=n||!1,i=Im(u7,PT,e&&e.enhancer?e.enhancer:void 0),s=function(u){i.dispatch({type:Xg,key:u})},o=function(u,d,c){var f={type:cd,payload:d,err:c,key:u};t.dispatch(f),i.dispatch(f),r&&a.getState().bootstrapped&&(r(),r=!1)},a=pp({},i,{purge:function(){var u=[];return t.dispatch({type:Qg,result:function(c){u.push(c)}}),Promise.all(u)},flush:function(){var u=[];return t.dispatch({type:Kg,result:function(c){u.push(c)}}),Promise.all(u)},pause:function(){t.dispatch({type:qg})},persist:function(){t.dispatch({type:Yg,register:s,rehydrate:o})}});return e&&e.manualPersist||a.persist(),a}var Jg={},Zg={};Zg.__esModule=!0;Zg.default=h7;function Yl(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Yl=function(n){return typeof n}:Yl=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Yl(t)}function Sf(){}var d7={getItem:Sf,setItem:Sf,removeItem:Sf};function f7(t){if((typeof self>"u"?"undefined":Yl(self))!=="object"||!(t in self))return!1;try{var e=self[t],n="redux-persist ".concat(t," test");e.setItem(n,"test"),e.getItem(n),e.removeItem(n)}catch{return!1}return!0}function h7(t){var e="".concat(t,"Storage");return f7(e)?self[e]:d7}Jg.__esModule=!0;Jg.default=g7;var p7=m7(Zg);function m7(t){return t&&t.__esModule?t:{default:t}}function g7(t){var e=(0,p7.default)(t);return{getItem:function(r){return new Promise(function(i,s){i(e.getItem(r))})},setItem:function(r,i){return new Promise(function(s,o){s(e.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,s){i(e.removeItem(r))})}}}var ey=void 0,y7=v7(Jg);function v7(t){return t&&t.__esModule?t:{default:t}}var _7=(0,y7.default)("local");ey=_7;const w7={key:"auth",storage:ey,whitelist:["token"]},E7={key:"teachers",storage:ey,blacklist:["teachersCard"]},S7=ZE({auth:V_(w7,V9),teachers:V_(E7,k6)}),RT=BR({reducer:S7,middleware:t=>t({serializableCheck:{ignoredActions:[Kg,cd,qg,Yg,Qg,Xg]}})}),C7=c7(RT);function Ql(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ql=function(n){return typeof n}:Ql=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ql(t)}function x7(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function K_(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function T7(t,e,n){return e&&K_(t.prototype,e),n&&K_(t,n),t}function I7(t,e){return e&&(Ql(e)==="object"||typeof e=="function")?e:Xl(t)}function mp(t){return mp=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},mp(t)}function Xl(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function k7(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&gp(t,e)}function gp(t,e){return gp=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},gp(t,e)}function Jl(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var OT=function(t){k7(e,t);function e(){var n,r;x7(this,e);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=I7(this,(n=mp(e)).call.apply(n,[this].concat(s))),Jl(Xl(r),"state",{bootstrapped:!1}),Jl(Xl(r),"_unsubscribe",void 0),Jl(Xl(r),"handlePersistorState",function(){var a=r.props.persistor,l=a.getState(),u=l.bootstrapped;u&&(r.props.onBeforeLift?Promise.resolve(r.props.onBeforeLift()).finally(function(){return r.setState({bootstrapped:!0})}):r.setState({bootstrapped:!0}),r._unsubscribe&&r._unsubscribe())}),r}return T7(e,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),e}(C.PureComponent);Jl(OT,"defaultProps",{children:null,loading:null});xf.createRoot(document.getElementById("root")).render(g.jsx(gn.StrictMode,{children:g.jsx(OT,{loading:null,persistor:C7,children:g.jsx(h2,{basename:"/Learn-Lingo/",children:g.jsx(rR,{store:RT,children:g.jsx(E6,{children:g.jsx(z9,{})})})})})}))});export default b7();
