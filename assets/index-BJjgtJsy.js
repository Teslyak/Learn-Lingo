var jT=Object.defineProperty;var $T=(t,e,n)=>e in t?jT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var UT=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var hd=(t,e,n)=>($T(t,typeof e!="symbol"?e+"":e,n),n);var C7=UT((St,Ct)=>{function zT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Fs(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var V_={exports:{}},rc={},H_={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ta=Symbol.for("react.element"),BT=Symbol.for("react.portal"),WT=Symbol.for("react.fragment"),VT=Symbol.for("react.strict_mode"),HT=Symbol.for("react.profiler"),GT=Symbol.for("react.provider"),KT=Symbol.for("react.context"),qT=Symbol.for("react.forward_ref"),YT=Symbol.for("react.suspense"),QT=Symbol.for("react.memo"),XT=Symbol.for("react.lazy"),ey=Symbol.iterator;function JT(t){return t===null||typeof t!="object"?null:(t=ey&&t[ey]||t["@@iterator"],typeof t=="function"?t:null)}var G_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K_=Object.assign,q_={};function js(t,e,n){this.props=t,this.context=e,this.refs=q_,this.updater=n||G_}js.prototype.isReactComponent={};js.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};js.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Y_(){}Y_.prototype=js.prototype;function gp(t,e,n){this.props=t,this.context=e,this.refs=q_,this.updater=n||G_}var yp=gp.prototype=new Y_;yp.constructor=gp;K_(yp,js.prototype);yp.isPureReactComponent=!0;var ty=Array.isArray,Q_=Object.prototype.hasOwnProperty,vp={current:null},X_={key:!0,ref:!0,__self:!0,__source:!0};function J_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Q_.call(e,r)&&!X_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ta,type:t,key:s,ref:o,props:i,_owner:vp.current}}function ZT(t,e){return{$$typeof:Ta,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _p(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ta}function eI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ny=/\/+/g;function pd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?eI(""+t.key):e.toString(36)}function xl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ta:case BT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+pd(o,0):r,ty(i)?(n="",t!=null&&(n=t.replace(ny,"$&/")+"/"),xl(i,e,n,"",function(u){return u})):i!=null&&(_p(i)&&(i=ZT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ny,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ty(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+pd(s,a);o+=xl(s,e,n,l,i)}else if(l=JT(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+pd(s,a++),o+=xl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ya(t,e,n){if(t==null)return t;var r=[],i=0;return xl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function tI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rt={current:null},Tl={transition:null},nI={ReactCurrentDispatcher:rt,ReactCurrentBatchConfig:Tl,ReactCurrentOwner:vp};q.Children={map:Ya,forEach:function(t,e,n){Ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ya(t,function(){e++}),e},toArray:function(t){return Ya(t,function(e){return e})||[]},only:function(t){if(!_p(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};q.Component=js;q.Fragment=WT;q.Profiler=HT;q.PureComponent=gp;q.StrictMode=VT;q.Suspense=YT;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nI;q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=K_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=vp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Q_.call(e,l)&&!X_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ta,type:t.type,key:i,ref:s,props:r,_owner:o}};q.createContext=function(t){return t={$$typeof:KT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:GT,_context:t},t.Consumer=t};q.createElement=J_;q.createFactory=function(t){var e=J_.bind(null,t);return e.type=t,e};q.createRef=function(){return{current:null}};q.forwardRef=function(t){return{$$typeof:qT,render:t}};q.isValidElement=_p;q.lazy=function(t){return{$$typeof:XT,_payload:{_status:-1,_result:t},_init:tI}};q.memo=function(t,e){return{$$typeof:QT,type:t,compare:e===void 0?null:e}};q.startTransition=function(t){var e=Tl.transition;Tl.transition={};try{t()}finally{Tl.transition=e}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(t,e){return rt.current.useCallback(t,e)};q.useContext=function(t){return rt.current.useContext(t)};q.useDebugValue=function(){};q.useDeferredValue=function(t){return rt.current.useDeferredValue(t)};q.useEffect=function(t,e){return rt.current.useEffect(t,e)};q.useId=function(){return rt.current.useId()};q.useImperativeHandle=function(t,e,n){return rt.current.useImperativeHandle(t,e,n)};q.useInsertionEffect=function(t,e){return rt.current.useInsertionEffect(t,e)};q.useLayoutEffect=function(t,e){return rt.current.useLayoutEffect(t,e)};q.useMemo=function(t,e){return rt.current.useMemo(t,e)};q.useReducer=function(t,e,n){return rt.current.useReducer(t,e,n)};q.useRef=function(t){return rt.current.useRef(t)};q.useState=function(t){return rt.current.useState(t)};q.useSyncExternalStore=function(t,e,n){return rt.current.useSyncExternalStore(t,e,n)};q.useTransition=function(){return rt.current.useTransition()};q.version="18.2.0";H_.exports=q;var C=H_.exports;const gn=Fs(C),Sf=zT({__proto__:null,default:gn},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rI=C,iI=Symbol.for("react.element"),sI=Symbol.for("react.fragment"),oI=Object.prototype.hasOwnProperty,aI=rI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lI={key:!0,ref:!0,__self:!0,__source:!0};function Z_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)oI.call(e,r)&&!lI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:iI,type:t,key:s,ref:o,props:i,_owner:aI.current}}rc.Fragment=sI;rc.jsx=Z_;rc.jsxs=Z_;V_.exports=rc;var g=V_.exports,Cf={},e1={exports:{}},Pt={},t1={exports:{}},n1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,M){var U=O.length;O.push(M);e:for(;0<U;){var J=U-1>>>1,Q=O[J];if(0<i(Q,M))O[J]=M,O[U]=Q,U=J;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var M=O[0],U=O.pop();if(U!==M){O[0]=U;e:for(var J=0,Q=O.length,nn=Q>>>1;J<nn;){var Je=2*(J+1)-1,Ze=O[Je],He=Je+1,yt=O[He];if(0>i(Ze,U))He<Q&&0>i(yt,Ze)?(O[J]=yt,O[He]=U,J=He):(O[J]=Ze,O[Je]=U,J=Je);else if(He<Q&&0>i(yt,U))O[J]=yt,O[He]=U,J=He;else break e}}return M}function i(O,M){var U=O.sortIndex-M.sortIndex;return U!==0?U:O.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,c=null,f=3,p=!1,v=!1,_=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(O){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=O)r(u),M.sortIndex=M.expirationTime,e(l,M);else break;M=n(u)}}function w(O){if(_=!1,y(O),!v)if(n(l)!==null)v=!0,Wr(T);else{var M=n(u);M!==null&&wn(w,M.startTime-O)}}function T(O,M){v=!1,_&&(_=!1,m(k),k=-1),p=!0;var U=f;try{for(y(M),c=n(l);c!==null&&(!(c.expirationTime>M)||O&&!B());){var J=c.callback;if(typeof J=="function"){c.callback=null,f=c.priorityLevel;var Q=J(c.expirationTime<=M);M=t.unstable_now(),typeof Q=="function"?c.callback=Q:c===n(l)&&r(l),y(M)}else r(l);c=n(l)}if(c!==null)var nn=!0;else{var Je=n(u);Je!==null&&wn(w,Je.startTime-M),nn=!1}return nn}finally{c=null,f=U,p=!1}}var S=!1,x=null,k=-1,L=5,F=-1;function B(){return!(t.unstable_now()-F<L)}function Nt(){if(x!==null){var O=t.unstable_now();F=O;var M=!0;try{M=x(!0,O)}finally{M?ae():(S=!1,x=null)}}else S=!1}var ae;if(typeof h=="function")ae=function(){h(Nt)};else if(typeof MessageChannel<"u"){var gt=new MessageChannel,_n=gt.port2;gt.port1.onmessage=Nt,ae=function(){_n.postMessage(null)}}else ae=function(){E(Nt,0)};function Wr(O){x=O,S||(S=!0,ae())}function wn(O,M){k=E(function(){O(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,Wr(T))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(f){case 1:case 2:case 3:var M=3;break;default:M=f}var U=f;f=M;try{return O()}finally{f=U}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,M){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var U=f;f=O;try{return M()}finally{f=U}},t.unstable_scheduleCallback=function(O,M,U){var J=t.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?J+U:J):U=J,O){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=U+Q,O={id:d++,callback:M,priorityLevel:O,startTime:U,expirationTime:Q,sortIndex:-1},U>J?(O.sortIndex=U,e(u,O),n(l)===null&&O===n(u)&&(_?(m(k),k=-1):_=!0,wn(w,U-J))):(O.sortIndex=Q,e(l,O),v||p||(v=!0,Wr(T))),O},t.unstable_shouldYield=B,t.unstable_wrapCallback=function(O){var M=f;return function(){var U=f;f=M;try{return O.apply(this,arguments)}finally{f=U}}}})(n1);t1.exports=n1;var uI=t1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r1=C,It=uI;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i1=new Set,Uo={};function Ti(t,e){ms(t,e),ms(t+"Capture",e)}function ms(t,e){for(Uo[t]=e,t=0;t<e.length;t++)i1.add(e[t])}var Dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xf=Object.prototype.hasOwnProperty,cI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ry={},iy={};function dI(t){return xf.call(iy,t)?!0:xf.call(ry,t)?!1:cI.test(t)?iy[t]=!0:(ry[t]=!0,!1)}function fI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function hI(t,e,n,r){if(e===null||typeof e>"u"||fI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function it(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ve[t]=new it(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ve[e]=new it(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ve[t]=new it(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ve[t]=new it(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ve[t]=new it(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ve[t]=new it(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ve[t]=new it(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ve[t]=new it(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ve[t]=new it(t,5,!1,t.toLowerCase(),null,!1,!1)});var wp=/[\-:]([a-z])/g;function Ep(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(wp,Ep);Ve[e]=new it(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(wp,Ep);Ve[e]=new it(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(wp,Ep);Ve[e]=new it(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ve[t]=new it(t,1,!1,t.toLowerCase(),null,!1,!1)});Ve.xlinkHref=new it("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ve[t]=new it(t,1,!1,t.toLowerCase(),null,!0,!0)});function Sp(t,e,n,r){var i=Ve.hasOwnProperty(e)?Ve[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hI(e,n,i,r)&&(n=null),r||i===null?dI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Bn=r1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qa=Symbol.for("react.element"),Ui=Symbol.for("react.portal"),zi=Symbol.for("react.fragment"),Cp=Symbol.for("react.strict_mode"),Tf=Symbol.for("react.profiler"),s1=Symbol.for("react.provider"),o1=Symbol.for("react.context"),xp=Symbol.for("react.forward_ref"),If=Symbol.for("react.suspense"),kf=Symbol.for("react.suspense_list"),Tp=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),a1=Symbol.for("react.offscreen"),sy=Symbol.iterator;function Js(t){return t===null||typeof t!="object"?null:(t=sy&&t[sy]||t["@@iterator"],typeof t=="function"?t:null)}var Se=Object.assign,md;function ho(t){if(md===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);md=e&&e[1]||""}return`
`+md+t}var gd=!1;function yd(t,e){if(!t||gd)return"";gd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{gd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ho(t):""}function pI(t){switch(t.tag){case 5:return ho(t.type);case 16:return ho("Lazy");case 13:return ho("Suspense");case 19:return ho("SuspenseList");case 0:case 2:case 15:return t=yd(t.type,!1),t;case 11:return t=yd(t.type.render,!1),t;case 1:return t=yd(t.type,!0),t;default:return""}}function bf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case zi:return"Fragment";case Ui:return"Portal";case Tf:return"Profiler";case Cp:return"StrictMode";case If:return"Suspense";case kf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case o1:return(t.displayName||"Context")+".Consumer";case s1:return(t._context.displayName||"Context")+".Provider";case xp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Tp:return e=t.displayName||null,e!==null?e:bf(t.type)||"Memo";case er:e=t._payload,t=t._init;try{return bf(t(e))}catch{}}return null}function mI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bf(e);case 8:return e===Cp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function br(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function l1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gI(t){var e=l1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xa(t){t._valueTracker||(t._valueTracker=gI(t))}function u1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=l1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Zl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Pf(t,e){var n=e.checked;return Se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function oy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=br(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function c1(t,e){e=e.checked,e!=null&&Sp(t,"checked",e,!1)}function Rf(t,e){c1(t,e);var n=br(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Of(t,e.type,n):e.hasOwnProperty("defaultValue")&&Of(t,e.type,br(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ay(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Of(t,e,n){(e!=="number"||Zl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var po=Array.isArray;function rs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+br(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Nf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return Se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ly(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(po(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:br(n)}}function d1(t,e){var n=br(e.value),r=br(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function uy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function f1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Af(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?f1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ja,h1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ja=Ja||document.createElement("div"),Ja.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ja.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function zo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var So={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yI=["Webkit","ms","Moz","O"];Object.keys(So).forEach(function(t){yI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),So[e]=So[t]})});function p1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||So.hasOwnProperty(t)&&So[t]?(""+e).trim():e+"px"}function m1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=p1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var vI=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lf(t,e){if(e){if(vI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function Df(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mf=null;function Ip(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ff=null,is=null,ss=null;function cy(t){if(t=ba(t)){if(typeof Ff!="function")throw Error(b(280));var e=t.stateNode;e&&(e=lc(e),Ff(t.stateNode,t.type,e))}}function g1(t){is?ss?ss.push(t):ss=[t]:is=t}function y1(){if(is){var t=is,e=ss;if(ss=is=null,cy(t),e)for(t=0;t<e.length;t++)cy(e[t])}}function v1(t,e){return t(e)}function _1(){}var vd=!1;function w1(t,e,n){if(vd)return t(e,n);vd=!0;try{return v1(t,e,n)}finally{vd=!1,(is!==null||ss!==null)&&(_1(),y1())}}function Bo(t,e){var n=t.stateNode;if(n===null)return null;var r=lc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var jf=!1;if(Dn)try{var Zs={};Object.defineProperty(Zs,"passive",{get:function(){jf=!0}}),window.addEventListener("test",Zs,Zs),window.removeEventListener("test",Zs,Zs)}catch{jf=!1}function _I(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Co=!1,eu=null,tu=!1,$f=null,wI={onError:function(t){Co=!0,eu=t}};function EI(t,e,n,r,i,s,o,a,l){Co=!1,eu=null,_I.apply(wI,arguments)}function SI(t,e,n,r,i,s,o,a,l){if(EI.apply(this,arguments),Co){if(Co){var u=eu;Co=!1,eu=null}else throw Error(b(198));tu||(tu=!0,$f=u)}}function Ii(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function E1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function dy(t){if(Ii(t)!==t)throw Error(b(188))}function CI(t){var e=t.alternate;if(!e){if(e=Ii(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return dy(i),t;if(s===r)return dy(i),e;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function S1(t){return t=CI(t),t!==null?C1(t):null}function C1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=C1(t);if(e!==null)return e;t=t.sibling}return null}var x1=It.unstable_scheduleCallback,fy=It.unstable_cancelCallback,xI=It.unstable_shouldYield,TI=It.unstable_requestPaint,Te=It.unstable_now,II=It.unstable_getCurrentPriorityLevel,kp=It.unstable_ImmediatePriority,T1=It.unstable_UserBlockingPriority,nu=It.unstable_NormalPriority,kI=It.unstable_LowPriority,I1=It.unstable_IdlePriority,ic=null,dn=null;function bI(t){if(dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(ic,t,void 0,(t.current.flags&128)===128)}catch{}}var Qt=Math.clz32?Math.clz32:OI,PI=Math.log,RI=Math.LN2;function OI(t){return t>>>=0,t===0?32:31-(PI(t)/RI|0)|0}var Za=64,el=4194304;function mo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ru(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=mo(a):(s&=o,s!==0&&(r=mo(s)))}else o=n&~i,o!==0?r=mo(o):s!==0&&(r=mo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Qt(e),i=1<<n,r|=t[n],e&=~i;return r}function NI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function AI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Qt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=NI(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Uf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function k1(){var t=Za;return Za<<=1,!(Za&4194240)&&(Za=64),t}function _d(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ia(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qt(e),t[e]=n}function LI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Qt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function bp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Qt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var re=0;function b1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var P1,Pp,R1,O1,N1,zf=!1,tl=[],hr=null,pr=null,mr=null,Wo=new Map,Vo=new Map,rr=[],DI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hy(t,e){switch(t){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":Wo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(e.pointerId)}}function eo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ba(e),e!==null&&Pp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function MI(t,e,n,r,i){switch(e){case"focusin":return hr=eo(hr,t,e,n,r,i),!0;case"dragenter":return pr=eo(pr,t,e,n,r,i),!0;case"mouseover":return mr=eo(mr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Wo.set(s,eo(Wo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Vo.set(s,eo(Vo.get(s)||null,t,e,n,r,i)),!0}return!1}function A1(t){var e=Xr(t.target);if(e!==null){var n=Ii(e);if(n!==null){if(e=n.tag,e===13){if(e=E1(n),e!==null){t.blockedOn=e,N1(t.priority,function(){R1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Il(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Bf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Mf=r,n.target.dispatchEvent(r),Mf=null}else return e=ba(n),e!==null&&Pp(e),t.blockedOn=n,!1;e.shift()}return!0}function py(t,e,n){Il(t)&&n.delete(e)}function FI(){zf=!1,hr!==null&&Il(hr)&&(hr=null),pr!==null&&Il(pr)&&(pr=null),mr!==null&&Il(mr)&&(mr=null),Wo.forEach(py),Vo.forEach(py)}function to(t,e){t.blockedOn===e&&(t.blockedOn=null,zf||(zf=!0,It.unstable_scheduleCallback(It.unstable_NormalPriority,FI)))}function Ho(t){function e(i){return to(i,t)}if(0<tl.length){to(tl[0],t);for(var n=1;n<tl.length;n++){var r=tl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(hr!==null&&to(hr,t),pr!==null&&to(pr,t),mr!==null&&to(mr,t),Wo.forEach(e),Vo.forEach(e),n=0;n<rr.length;n++)r=rr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<rr.length&&(n=rr[0],n.blockedOn===null);)A1(n),n.blockedOn===null&&rr.shift()}var os=Bn.ReactCurrentBatchConfig,iu=!0;function jI(t,e,n,r){var i=re,s=os.transition;os.transition=null;try{re=1,Rp(t,e,n,r)}finally{re=i,os.transition=s}}function $I(t,e,n,r){var i=re,s=os.transition;os.transition=null;try{re=4,Rp(t,e,n,r)}finally{re=i,os.transition=s}}function Rp(t,e,n,r){if(iu){var i=Bf(t,e,n,r);if(i===null)Pd(t,e,r,su,n),hy(t,r);else if(MI(i,t,e,n,r))r.stopPropagation();else if(hy(t,r),e&4&&-1<DI.indexOf(t)){for(;i!==null;){var s=ba(i);if(s!==null&&P1(s),s=Bf(t,e,n,r),s===null&&Pd(t,e,r,su,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Pd(t,e,r,null,n)}}var su=null;function Bf(t,e,n,r){if(su=null,t=Ip(r),t=Xr(t),t!==null)if(e=Ii(t),e===null)t=null;else if(n=e.tag,n===13){if(t=E1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return su=t,null}function L1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(II()){case kp:return 1;case T1:return 4;case nu:case kI:return 16;case I1:return 536870912;default:return 16}default:return 16}}var ur=null,Op=null,kl=null;function D1(){if(kl)return kl;var t,e=Op,n=e.length,r,i="value"in ur?ur.value:ur.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return kl=i.slice(t,1<r?1-r:void 0)}function bl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function nl(){return!0}function my(){return!1}function Rt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?nl:my,this.isPropagationStopped=my,this}return Se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),e}var $s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Np=Rt($s),ka=Se({},$s,{view:0,detail:0}),UI=Rt(ka),wd,Ed,no,sc=Se({},ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ap,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==no&&(no&&t.type==="mousemove"?(wd=t.screenX-no.screenX,Ed=t.screenY-no.screenY):Ed=wd=0,no=t),wd)},movementY:function(t){return"movementY"in t?t.movementY:Ed}}),gy=Rt(sc),zI=Se({},sc,{dataTransfer:0}),BI=Rt(zI),WI=Se({},ka,{relatedTarget:0}),Sd=Rt(WI),VI=Se({},$s,{animationName:0,elapsedTime:0,pseudoElement:0}),HI=Rt(VI),GI=Se({},$s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),KI=Rt(GI),qI=Se({},$s,{data:0}),yy=Rt(qI),YI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},QI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},XI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function JI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=XI[t])?!!e[t]:!1}function Ap(){return JI}var ZI=Se({},ka,{key:function(t){if(t.key){var e=YI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?QI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ap,charCode:function(t){return t.type==="keypress"?bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ek=Rt(ZI),tk=Se({},sc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vy=Rt(tk),nk=Se({},ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ap}),rk=Rt(nk),ik=Se({},$s,{propertyName:0,elapsedTime:0,pseudoElement:0}),sk=Rt(ik),ok=Se({},sc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ak=Rt(ok),lk=[9,13,27,32],Lp=Dn&&"CompositionEvent"in window,xo=null;Dn&&"documentMode"in document&&(xo=document.documentMode);var uk=Dn&&"TextEvent"in window&&!xo,M1=Dn&&(!Lp||xo&&8<xo&&11>=xo),_y=" ",wy=!1;function F1(t,e){switch(t){case"keyup":return lk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function j1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Bi=!1;function ck(t,e){switch(t){case"compositionend":return j1(e);case"keypress":return e.which!==32?null:(wy=!0,_y);case"textInput":return t=e.data,t===_y&&wy?null:t;default:return null}}function dk(t,e){if(Bi)return t==="compositionend"||!Lp&&F1(t,e)?(t=D1(),kl=Op=ur=null,Bi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return M1&&e.locale!=="ko"?null:e.data;default:return null}}var fk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ey(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!fk[t.type]:e==="textarea"}function $1(t,e,n,r){g1(r),e=ou(e,"onChange"),0<e.length&&(n=new Np("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var To=null,Go=null;function hk(t){Q1(t,0)}function oc(t){var e=Hi(t);if(u1(e))return t}function pk(t,e){if(t==="change")return e}var U1=!1;if(Dn){var Cd;if(Dn){var xd="oninput"in document;if(!xd){var Sy=document.createElement("div");Sy.setAttribute("oninput","return;"),xd=typeof Sy.oninput=="function"}Cd=xd}else Cd=!1;U1=Cd&&(!document.documentMode||9<document.documentMode)}function Cy(){To&&(To.detachEvent("onpropertychange",z1),Go=To=null)}function z1(t){if(t.propertyName==="value"&&oc(Go)){var e=[];$1(e,Go,t,Ip(t)),w1(hk,e)}}function mk(t,e,n){t==="focusin"?(Cy(),To=e,Go=n,To.attachEvent("onpropertychange",z1)):t==="focusout"&&Cy()}function gk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return oc(Go)}function yk(t,e){if(t==="click")return oc(e)}function vk(t,e){if(t==="input"||t==="change")return oc(e)}function _k(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var en=typeof Object.is=="function"?Object.is:_k;function Ko(t,e){if(en(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!xf.call(e,i)||!en(t[i],e[i]))return!1}return!0}function xy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ty(t,e){var n=xy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xy(n)}}function B1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?B1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function W1(){for(var t=window,e=Zl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Zl(t.document)}return e}function Dp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function wk(t){var e=W1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&B1(n.ownerDocument.documentElement,n)){if(r!==null&&Dp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ty(n,s);var o=Ty(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ek=Dn&&"documentMode"in document&&11>=document.documentMode,Wi=null,Wf=null,Io=null,Vf=!1;function Iy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vf||Wi==null||Wi!==Zl(r)||(r=Wi,"selectionStart"in r&&Dp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Io&&Ko(Io,r)||(Io=r,r=ou(Wf,"onSelect"),0<r.length&&(e=new Np("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Wi)))}function rl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Vi={animationend:rl("Animation","AnimationEnd"),animationiteration:rl("Animation","AnimationIteration"),animationstart:rl("Animation","AnimationStart"),transitionend:rl("Transition","TransitionEnd")},Td={},V1={};Dn&&(V1=document.createElement("div").style,"AnimationEvent"in window||(delete Vi.animationend.animation,delete Vi.animationiteration.animation,delete Vi.animationstart.animation),"TransitionEvent"in window||delete Vi.transitionend.transition);function ac(t){if(Td[t])return Td[t];if(!Vi[t])return t;var e=Vi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in V1)return Td[t]=e[n];return t}var H1=ac("animationend"),G1=ac("animationiteration"),K1=ac("animationstart"),q1=ac("transitionend"),Y1=new Map,ky="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(t,e){Y1.set(t,e),Ti(e,[t])}for(var Id=0;Id<ky.length;Id++){var kd=ky[Id],Sk=kd.toLowerCase(),Ck=kd[0].toUpperCase()+kd.slice(1);Mr(Sk,"on"+Ck)}Mr(H1,"onAnimationEnd");Mr(G1,"onAnimationIteration");Mr(K1,"onAnimationStart");Mr("dblclick","onDoubleClick");Mr("focusin","onFocus");Mr("focusout","onBlur");Mr(q1,"onTransitionEnd");ms("onMouseEnter",["mouseout","mouseover"]);ms("onMouseLeave",["mouseout","mouseover"]);ms("onPointerEnter",["pointerout","pointerover"]);ms("onPointerLeave",["pointerout","pointerover"]);Ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xk=new Set("cancel close invalid load scroll toggle".split(" ").concat(go));function by(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,SI(r,e,void 0,t),t.currentTarget=null}function Q1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;by(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;by(i,a,u),s=l}}}if(tu)throw t=$f,tu=!1,$f=null,t}function de(t,e){var n=e[Yf];n===void 0&&(n=e[Yf]=new Set);var r=t+"__bubble";n.has(r)||(X1(e,t,2,!1),n.add(r))}function bd(t,e,n){var r=0;e&&(r|=4),X1(n,t,r,e)}var il="_reactListening"+Math.random().toString(36).slice(2);function qo(t){if(!t[il]){t[il]=!0,i1.forEach(function(n){n!=="selectionchange"&&(xk.has(n)||bd(n,!1,t),bd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[il]||(e[il]=!0,bd("selectionchange",!1,e))}}function X1(t,e,n,r){switch(L1(e)){case 1:var i=jI;break;case 4:i=$I;break;default:i=Rp}n=i.bind(null,e,n,t),i=void 0,!jf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Pd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Xr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}w1(function(){var u=s,d=Ip(n),c=[];e:{var f=Y1.get(t);if(f!==void 0){var p=Np,v=t;switch(t){case"keypress":if(bl(n)===0)break e;case"keydown":case"keyup":p=ek;break;case"focusin":v="focus",p=Sd;break;case"focusout":v="blur",p=Sd;break;case"beforeblur":case"afterblur":p=Sd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=gy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=BI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=rk;break;case H1:case G1:case K1:p=HI;break;case q1:p=sk;break;case"scroll":p=UI;break;case"wheel":p=ak;break;case"copy":case"cut":case"paste":p=KI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=vy}var _=(e&4)!==0,E=!_&&t==="scroll",m=_?f!==null?f+"Capture":null:f;_=[];for(var h=u,y;h!==null;){y=h;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,m!==null&&(w=Bo(h,m),w!=null&&_.push(Yo(h,w,y)))),E)break;h=h.return}0<_.length&&(f=new p(f,v,null,n,d),c.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Mf&&(v=n.relatedTarget||n.fromElement)&&(Xr(v)||v[Mn]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?Xr(v):null,v!==null&&(E=Ii(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(_=gy,w="onMouseLeave",m="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(_=vy,w="onPointerLeave",m="onPointerEnter",h="pointer"),E=p==null?f:Hi(p),y=v==null?f:Hi(v),f=new _(w,h+"leave",p,n,d),f.target=E,f.relatedTarget=y,w=null,Xr(d)===u&&(_=new _(m,h+"enter",v,n,d),_.target=y,_.relatedTarget=E,w=_),E=w,p&&v)t:{for(_=p,m=v,h=0,y=_;y;y=Mi(y))h++;for(y=0,w=m;w;w=Mi(w))y++;for(;0<h-y;)_=Mi(_),h--;for(;0<y-h;)m=Mi(m),y--;for(;h--;){if(_===m||m!==null&&_===m.alternate)break t;_=Mi(_),m=Mi(m)}_=null}else _=null;p!==null&&Py(c,f,p,_,!1),v!==null&&E!==null&&Py(c,E,v,_,!0)}}e:{if(f=u?Hi(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=pk;else if(Ey(f))if(U1)T=vk;else{T=gk;var S=mk}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=yk);if(T&&(T=T(t,u))){$1(c,T,n,d);break e}S&&S(t,f,u),t==="focusout"&&(S=f._wrapperState)&&S.controlled&&f.type==="number"&&Of(f,"number",f.value)}switch(S=u?Hi(u):window,t){case"focusin":(Ey(S)||S.contentEditable==="true")&&(Wi=S,Wf=u,Io=null);break;case"focusout":Io=Wf=Wi=null;break;case"mousedown":Vf=!0;break;case"contextmenu":case"mouseup":case"dragend":Vf=!1,Iy(c,n,d);break;case"selectionchange":if(Ek)break;case"keydown":case"keyup":Iy(c,n,d)}var x;if(Lp)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Bi?F1(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(M1&&n.locale!=="ko"&&(Bi||k!=="onCompositionStart"?k==="onCompositionEnd"&&Bi&&(x=D1()):(ur=d,Op="value"in ur?ur.value:ur.textContent,Bi=!0)),S=ou(u,k),0<S.length&&(k=new yy(k,t,null,n,d),c.push({event:k,listeners:S}),x?k.data=x:(x=j1(n),x!==null&&(k.data=x)))),(x=uk?ck(t,n):dk(t,n))&&(u=ou(u,"onBeforeInput"),0<u.length&&(d=new yy("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=x))}Q1(c,e)})}function Yo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ou(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Bo(t,n),s!=null&&r.unshift(Yo(t,s,i)),s=Bo(t,e),s!=null&&r.push(Yo(t,s,i))),t=t.return}return r}function Mi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Py(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Bo(n,s),l!=null&&o.unshift(Yo(n,l,a))):i||(l=Bo(n,s),l!=null&&o.push(Yo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Tk=/\r\n?/g,Ik=/\u0000|\uFFFD/g;function Ry(t){return(typeof t=="string"?t:""+t).replace(Tk,`
`).replace(Ik,"")}function sl(t,e,n){if(e=Ry(e),Ry(t)!==e&&n)throw Error(b(425))}function au(){}var Hf=null,Gf=null;function Kf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qf=typeof setTimeout=="function"?setTimeout:void 0,kk=typeof clearTimeout=="function"?clearTimeout:void 0,Oy=typeof Promise=="function"?Promise:void 0,bk=typeof queueMicrotask=="function"?queueMicrotask:typeof Oy<"u"?function(t){return Oy.resolve(null).then(t).catch(Pk)}:qf;function Pk(t){setTimeout(function(){throw t})}function Rd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ho(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ho(e)}function gr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ny(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Us=Math.random().toString(36).slice(2),cn="__reactFiber$"+Us,Qo="__reactProps$"+Us,Mn="__reactContainer$"+Us,Yf="__reactEvents$"+Us,Rk="__reactListeners$"+Us,Ok="__reactHandles$"+Us;function Xr(t){var e=t[cn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mn]||n[cn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ny(t);t!==null;){if(n=t[cn])return n;t=Ny(t)}return e}t=n,n=t.parentNode}return null}function ba(t){return t=t[cn]||t[Mn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Hi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function lc(t){return t[Qo]||null}var Qf=[],Gi=-1;function Fr(t){return{current:t}}function me(t){0>Gi||(t.current=Qf[Gi],Qf[Gi]=null,Gi--)}function ce(t,e){Gi++,Qf[Gi]=t.current,t.current=e}var Pr={},Qe=Fr(Pr),ct=Fr(!1),ci=Pr;function gs(t,e){var n=t.type.contextTypes;if(!n)return Pr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function dt(t){return t=t.childContextTypes,t!=null}function lu(){me(ct),me(Qe)}function Ay(t,e,n){if(Qe.current!==Pr)throw Error(b(168));ce(Qe,e),ce(ct,n)}function J1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(b(108,mI(t)||"Unknown",i));return Se({},n,r)}function uu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Pr,ci=Qe.current,ce(Qe,t),ce(ct,ct.current),!0}function Ly(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=J1(t,e,ci),r.__reactInternalMemoizedMergedChildContext=t,me(ct),me(Qe),ce(Qe,t)):me(ct),ce(ct,n)}var In=null,uc=!1,Od=!1;function Z1(t){In===null?In=[t]:In.push(t)}function Nk(t){uc=!0,Z1(t)}function jr(){if(!Od&&In!==null){Od=!0;var t=0,e=re;try{var n=In;for(re=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}In=null,uc=!1}catch(i){throw In!==null&&(In=In.slice(t+1)),x1(kp,jr),i}finally{re=e,Od=!1}}return null}var Ki=[],qi=0,cu=null,du=0,Lt=[],Dt=0,di=null,kn=1,bn="";function Hr(t,e){Ki[qi++]=du,Ki[qi++]=cu,cu=t,du=e}function ew(t,e,n){Lt[Dt++]=kn,Lt[Dt++]=bn,Lt[Dt++]=di,di=t;var r=kn;t=bn;var i=32-Qt(r)-1;r&=~(1<<i),n+=1;var s=32-Qt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,kn=1<<32-Qt(e)+i|n<<i|r,bn=s+t}else kn=1<<s|n<<i|r,bn=t}function Mp(t){t.return!==null&&(Hr(t,1),ew(t,1,0))}function Fp(t){for(;t===cu;)cu=Ki[--qi],Ki[qi]=null,du=Ki[--qi],Ki[qi]=null;for(;t===di;)di=Lt[--Dt],Lt[Dt]=null,bn=Lt[--Dt],Lt[Dt]=null,kn=Lt[--Dt],Lt[Dt]=null}var xt=null,wt=null,ve=!1,Ht=null;function tw(t,e){var n=Mt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Dy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xt=t,wt=gr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xt=t,wt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=di!==null?{id:kn,overflow:bn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Mt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xt=t,wt=null,!0):!1;default:return!1}}function Xf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Jf(t){if(ve){var e=wt;if(e){var n=e;if(!Dy(t,e)){if(Xf(t))throw Error(b(418));e=gr(n.nextSibling);var r=xt;e&&Dy(t,e)?tw(r,n):(t.flags=t.flags&-4097|2,ve=!1,xt=t)}}else{if(Xf(t))throw Error(b(418));t.flags=t.flags&-4097|2,ve=!1,xt=t}}}function My(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xt=t}function ol(t){if(t!==xt)return!1;if(!ve)return My(t),ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Kf(t.type,t.memoizedProps)),e&&(e=wt)){if(Xf(t))throw nw(),Error(b(418));for(;e;)tw(t,e),e=gr(e.nextSibling)}if(My(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wt=gr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wt=null}}else wt=xt?gr(t.stateNode.nextSibling):null;return!0}function nw(){for(var t=wt;t;)t=gr(t.nextSibling)}function ys(){wt=xt=null,ve=!1}function jp(t){Ht===null?Ht=[t]:Ht.push(t)}var Ak=Bn.ReactCurrentBatchConfig;function Wt(t,e){if(t&&t.defaultProps){e=Se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var fu=Fr(null),hu=null,Yi=null,$p=null;function Up(){$p=Yi=hu=null}function zp(t){var e=fu.current;me(fu),t._currentValue=e}function Zf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function as(t,e){hu=t,$p=Yi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(at=!0),t.firstContext=null)}function jt(t){var e=t._currentValue;if($p!==t)if(t={context:t,memoizedValue:e,next:null},Yi===null){if(hu===null)throw Error(b(308));Yi=t,hu.dependencies={lanes:0,firstContext:t}}else Yi=Yi.next=t;return e}var Jr=null;function Bp(t){Jr===null?Jr=[t]:Jr.push(t)}function rw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Bp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Fn(t,r)}function Fn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var tr=!1;function Wp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function iw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Nn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function yr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Fn(t,n)}return i=r.interleaved,i===null?(e.next=e,Bp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Fn(t,n)}function Pl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bp(t,n)}}function Fy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pu(t,e,n,r){var i=t.updateQueue;tr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var c=i.baseState;o=0,d=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(f=e,p=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){c=v.call(p,c,f);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,f=typeof v=="function"?v.call(p,c,f):v,f==null)break e;c=Se({},c,f);break e;case 2:tr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=p,l=c):d=d.next=p,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);hi|=o,t.lanes=o,t.memoizedState=c}}function jy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var sw=new r1.Component().refs;function eh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var cc={isMounted:function(t){return(t=t._reactInternals)?Ii(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=nt(),i=_r(t),s=Nn(r,i);s.payload=e,n!=null&&(s.callback=n),e=yr(t,s,i),e!==null&&(Xt(e,t,i,r),Pl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=nt(),i=_r(t),s=Nn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=yr(t,s,i),e!==null&&(Xt(e,t,i,r),Pl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nt(),r=_r(t),i=Nn(n,r);i.tag=2,e!=null&&(i.callback=e),e=yr(t,i,r),e!==null&&(Xt(e,t,r,n),Pl(e,t,r))}};function $y(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ko(n,r)||!Ko(i,s):!0}function ow(t,e,n){var r=!1,i=Pr,s=e.contextType;return typeof s=="object"&&s!==null?s=jt(s):(i=dt(e)?ci:Qe.current,r=e.contextTypes,s=(r=r!=null)?gs(t,i):Pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=cc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Uy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&cc.enqueueReplaceState(e,e.state,null)}function th(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=sw,Wp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=jt(s):(s=dt(e)?ci:Qe.current,i.context=gs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(eh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&cc.enqueueReplaceState(i,i.state,null),pu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ro(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===sw&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function al(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function zy(t){var e=t._init;return e(t._payload)}function aw(t){function e(m,h){if(t){var y=m.deletions;y===null?(m.deletions=[h],m.flags|=16):y.push(h)}}function n(m,h){if(!t)return null;for(;h!==null;)e(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=wr(m,h),m.index=0,m.sibling=null,m}function s(m,h,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<h?(m.flags|=2,h):y):(m.flags|=2,h)):(m.flags|=1048576,h)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,h,y,w){return h===null||h.tag!==6?(h=jd(y,m.mode,w),h.return=m,h):(h=i(h,y),h.return=m,h)}function l(m,h,y,w){var T=y.type;return T===zi?d(m,h,y.props.children,w,y.key):h!==null&&(h.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===er&&zy(T)===h.type)?(w=i(h,y.props),w.ref=ro(m,h,y),w.return=m,w):(w=Dl(y.type,y.key,y.props,null,m.mode,w),w.ref=ro(m,h,y),w.return=m,w)}function u(m,h,y,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=$d(y,m.mode,w),h.return=m,h):(h=i(h,y.children||[]),h.return=m,h)}function d(m,h,y,w,T){return h===null||h.tag!==7?(h=ii(y,m.mode,w,T),h.return=m,h):(h=i(h,y),h.return=m,h)}function c(m,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=jd(""+h,m.mode,y),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Qa:return y=Dl(h.type,h.key,h.props,null,m.mode,y),y.ref=ro(m,null,h),y.return=m,y;case Ui:return h=$d(h,m.mode,y),h.return=m,h;case er:var w=h._init;return c(m,w(h._payload),y)}if(po(h)||Js(h))return h=ii(h,m.mode,y,null),h.return=m,h;al(m,h)}return null}function f(m,h,y,w){var T=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:a(m,h,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Qa:return y.key===T?l(m,h,y,w):null;case Ui:return y.key===T?u(m,h,y,w):null;case er:return T=y._init,f(m,h,T(y._payload),w)}if(po(y)||Js(y))return T!==null?null:d(m,h,y,w,null);al(m,y)}return null}function p(m,h,y,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(y)||null,a(h,m,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Qa:return m=m.get(w.key===null?y:w.key)||null,l(h,m,w,T);case Ui:return m=m.get(w.key===null?y:w.key)||null,u(h,m,w,T);case er:var S=w._init;return p(m,h,y,S(w._payload),T)}if(po(w)||Js(w))return m=m.get(y)||null,d(h,m,w,T,null);al(h,w)}return null}function v(m,h,y,w){for(var T=null,S=null,x=h,k=h=0,L=null;x!==null&&k<y.length;k++){x.index>k?(L=x,x=null):L=x.sibling;var F=f(m,x,y[k],w);if(F===null){x===null&&(x=L);break}t&&x&&F.alternate===null&&e(m,x),h=s(F,h,k),S===null?T=F:S.sibling=F,S=F,x=L}if(k===y.length)return n(m,x),ve&&Hr(m,k),T;if(x===null){for(;k<y.length;k++)x=c(m,y[k],w),x!==null&&(h=s(x,h,k),S===null?T=x:S.sibling=x,S=x);return ve&&Hr(m,k),T}for(x=r(m,x);k<y.length;k++)L=p(x,m,k,y[k],w),L!==null&&(t&&L.alternate!==null&&x.delete(L.key===null?k:L.key),h=s(L,h,k),S===null?T=L:S.sibling=L,S=L);return t&&x.forEach(function(B){return e(m,B)}),ve&&Hr(m,k),T}function _(m,h,y,w){var T=Js(y);if(typeof T!="function")throw Error(b(150));if(y=T.call(y),y==null)throw Error(b(151));for(var S=T=null,x=h,k=h=0,L=null,F=y.next();x!==null&&!F.done;k++,F=y.next()){x.index>k?(L=x,x=null):L=x.sibling;var B=f(m,x,F.value,w);if(B===null){x===null&&(x=L);break}t&&x&&B.alternate===null&&e(m,x),h=s(B,h,k),S===null?T=B:S.sibling=B,S=B,x=L}if(F.done)return n(m,x),ve&&Hr(m,k),T;if(x===null){for(;!F.done;k++,F=y.next())F=c(m,F.value,w),F!==null&&(h=s(F,h,k),S===null?T=F:S.sibling=F,S=F);return ve&&Hr(m,k),T}for(x=r(m,x);!F.done;k++,F=y.next())F=p(x,m,k,F.value,w),F!==null&&(t&&F.alternate!==null&&x.delete(F.key===null?k:F.key),h=s(F,h,k),S===null?T=F:S.sibling=F,S=F);return t&&x.forEach(function(Nt){return e(m,Nt)}),ve&&Hr(m,k),T}function E(m,h,y,w){if(typeof y=="object"&&y!==null&&y.type===zi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Qa:e:{for(var T=y.key,S=h;S!==null;){if(S.key===T){if(T=y.type,T===zi){if(S.tag===7){n(m,S.sibling),h=i(S,y.props.children),h.return=m,m=h;break e}}else if(S.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===er&&zy(T)===S.type){n(m,S.sibling),h=i(S,y.props),h.ref=ro(m,S,y),h.return=m,m=h;break e}n(m,S);break}else e(m,S);S=S.sibling}y.type===zi?(h=ii(y.props.children,m.mode,w,y.key),h.return=m,m=h):(w=Dl(y.type,y.key,y.props,null,m.mode,w),w.ref=ro(m,h,y),w.return=m,m=w)}return o(m);case Ui:e:{for(S=y.key;h!==null;){if(h.key===S)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){n(m,h.sibling),h=i(h,y.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else e(m,h);h=h.sibling}h=$d(y,m.mode,w),h.return=m,m=h}return o(m);case er:return S=y._init,E(m,h,S(y._payload),w)}if(po(y))return v(m,h,y,w);if(Js(y))return _(m,h,y,w);al(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(n(m,h.sibling),h=i(h,y),h.return=m,m=h):(n(m,h),h=jd(y,m.mode,w),h.return=m,m=h),o(m)):n(m,h)}return E}var vs=aw(!0),lw=aw(!1),Pa={},fn=Fr(Pa),Xo=Fr(Pa),Jo=Fr(Pa);function Zr(t){if(t===Pa)throw Error(b(174));return t}function Vp(t,e){switch(ce(Jo,e),ce(Xo,t),ce(fn,Pa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Af(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Af(e,t)}me(fn),ce(fn,e)}function _s(){me(fn),me(Xo),me(Jo)}function uw(t){Zr(Jo.current);var e=Zr(fn.current),n=Af(e,t.type);e!==n&&(ce(Xo,t),ce(fn,n))}function Hp(t){Xo.current===t&&(me(fn),me(Xo))}var _e=Fr(0);function mu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Nd=[];function Gp(){for(var t=0;t<Nd.length;t++)Nd[t]._workInProgressVersionPrimary=null;Nd.length=0}var Rl=Bn.ReactCurrentDispatcher,Ad=Bn.ReactCurrentBatchConfig,fi=0,we=null,be=null,Le=null,gu=!1,ko=!1,Zo=0,Lk=0;function Ge(){throw Error(b(321))}function Kp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!en(t[n],e[n]))return!1;return!0}function qp(t,e,n,r,i,s){if(fi=s,we=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Rl.current=t===null||t.memoizedState===null?jk:$k,t=n(r,i),ko){s=0;do{if(ko=!1,Zo=0,25<=s)throw Error(b(301));s+=1,Le=be=null,e.updateQueue=null,Rl.current=Uk,t=n(r,i)}while(ko)}if(Rl.current=yu,e=be!==null&&be.next!==null,fi=0,Le=be=we=null,gu=!1,e)throw Error(b(300));return t}function Yp(){var t=Zo!==0;return Zo=0,t}function an(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?we.memoizedState=Le=t:Le=Le.next=t,Le}function $t(){if(be===null){var t=we.alternate;t=t!==null?t.memoizedState:null}else t=be.next;var e=Le===null?we.memoizedState:Le.next;if(e!==null)Le=e,be=t;else{if(t===null)throw Error(b(310));be=t,t={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Le===null?we.memoizedState=Le=t:Le=Le.next=t}return Le}function ea(t,e){return typeof e=="function"?e(t):e}function Ld(t){var e=$t(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=be,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((fi&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,o=r):l=l.next=c,we.lanes|=d,hi|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,en(r,e.memoizedState)||(at=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,we.lanes|=s,hi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Dd(t){var e=$t(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);en(s,e.memoizedState)||(at=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function cw(){}function dw(t,e){var n=we,r=$t(),i=e(),s=!en(r.memoizedState,i);if(s&&(r.memoizedState=i,at=!0),r=r.queue,Qp(pw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,ta(9,hw.bind(null,n,r,i,e),void 0,null),Fe===null)throw Error(b(349));fi&30||fw(n,e,i)}return i}function fw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function hw(t,e,n,r){e.value=n,e.getSnapshot=r,mw(e)&&gw(t)}function pw(t,e,n){return n(function(){mw(e)&&gw(t)})}function mw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!en(t,n)}catch{return!0}}function gw(t){var e=Fn(t,1);e!==null&&Xt(e,t,1,-1)}function By(t){var e=an();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},e.queue=t,t=t.dispatch=Fk.bind(null,we,t),[e.memoizedState,t]}function ta(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function yw(){return $t().memoizedState}function Ol(t,e,n,r){var i=an();we.flags|=t,i.memoizedState=ta(1|e,n,void 0,r===void 0?null:r)}function dc(t,e,n,r){var i=$t();r=r===void 0?null:r;var s=void 0;if(be!==null){var o=be.memoizedState;if(s=o.destroy,r!==null&&Kp(r,o.deps)){i.memoizedState=ta(e,n,s,r);return}}we.flags|=t,i.memoizedState=ta(1|e,n,s,r)}function Wy(t,e){return Ol(8390656,8,t,e)}function Qp(t,e){return dc(2048,8,t,e)}function vw(t,e){return dc(4,2,t,e)}function _w(t,e){return dc(4,4,t,e)}function ww(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ew(t,e,n){return n=n!=null?n.concat([t]):null,dc(4,4,ww.bind(null,e,t),n)}function Xp(){}function Sw(t,e){var n=$t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Cw(t,e){var n=$t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function xw(t,e,n){return fi&21?(en(n,e)||(n=k1(),we.lanes|=n,hi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,at=!0),t.memoizedState=n)}function Dk(t,e){var n=re;re=n!==0&&4>n?n:4,t(!0);var r=Ad.transition;Ad.transition={};try{t(!1),e()}finally{re=n,Ad.transition=r}}function Tw(){return $t().memoizedState}function Mk(t,e,n){var r=_r(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Iw(t))kw(e,n);else if(n=rw(t,e,n,r),n!==null){var i=nt();Xt(n,t,r,i),bw(n,e,r)}}function Fk(t,e,n){var r=_r(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Iw(t))kw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,en(a,o)){var l=e.interleaved;l===null?(i.next=i,Bp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=rw(t,e,i,r),n!==null&&(i=nt(),Xt(n,t,r,i),bw(n,e,r))}}function Iw(t){var e=t.alternate;return t===we||e!==null&&e===we}function kw(t,e){ko=gu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function bw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bp(t,n)}}var yu={readContext:jt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},jk={readContext:jt,useCallback:function(t,e){return an().memoizedState=[t,e===void 0?null:e],t},useContext:jt,useEffect:Wy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ol(4194308,4,ww.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ol(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ol(4,2,t,e)},useMemo:function(t,e){var n=an();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=an();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Mk.bind(null,we,t),[r.memoizedState,t]},useRef:function(t){var e=an();return t={current:t},e.memoizedState=t},useState:By,useDebugValue:Xp,useDeferredValue:function(t){return an().memoizedState=t},useTransition:function(){var t=By(!1),e=t[0];return t=Dk.bind(null,t[1]),an().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=we,i=an();if(ve){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),Fe===null)throw Error(b(349));fi&30||fw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Wy(pw.bind(null,r,s,t),[t]),r.flags|=2048,ta(9,hw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=an(),e=Fe.identifierPrefix;if(ve){var n=bn,r=kn;n=(r&~(1<<32-Qt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Zo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Lk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},$k={readContext:jt,useCallback:Sw,useContext:jt,useEffect:Qp,useImperativeHandle:Ew,useInsertionEffect:vw,useLayoutEffect:_w,useMemo:Cw,useReducer:Ld,useRef:yw,useState:function(){return Ld(ea)},useDebugValue:Xp,useDeferredValue:function(t){var e=$t();return xw(e,be.memoizedState,t)},useTransition:function(){var t=Ld(ea)[0],e=$t().memoizedState;return[t,e]},useMutableSource:cw,useSyncExternalStore:dw,useId:Tw,unstable_isNewReconciler:!1},Uk={readContext:jt,useCallback:Sw,useContext:jt,useEffect:Qp,useImperativeHandle:Ew,useInsertionEffect:vw,useLayoutEffect:_w,useMemo:Cw,useReducer:Dd,useRef:yw,useState:function(){return Dd(ea)},useDebugValue:Xp,useDeferredValue:function(t){var e=$t();return be===null?e.memoizedState=t:xw(e,be.memoizedState,t)},useTransition:function(){var t=Dd(ea)[0],e=$t().memoizedState;return[t,e]},useMutableSource:cw,useSyncExternalStore:dw,useId:Tw,unstable_isNewReconciler:!1};function ws(t,e){try{var n="",r=e;do n+=pI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Md(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function nh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var zk=typeof WeakMap=="function"?WeakMap:Map;function Pw(t,e,n){n=Nn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){_u||(_u=!0,fh=r),nh(t,e)},n}function Rw(t,e,n){n=Nn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){nh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){nh(t,e),typeof r!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Vy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new zk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=tb.bind(null,t,e,n),e.then(t,t))}function Hy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Nn(-1,1),e.tag=2,yr(n,e,1))),n.lanes|=1),t)}var Bk=Bn.ReactCurrentOwner,at=!1;function et(t,e,n,r){e.child=t===null?lw(e,null,n,r):vs(e,t.child,n,r)}function Ky(t,e,n,r,i){n=n.render;var s=e.ref;return as(e,i),r=qp(t,e,n,r,s,i),n=Yp(),t!==null&&!at?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jn(t,e,i)):(ve&&n&&Mp(e),e.flags|=1,et(t,e,r,i),e.child)}function qy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!sm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ow(t,e,s,r,i)):(t=Dl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ko,n(o,r)&&t.ref===e.ref)return jn(t,e,i)}return e.flags|=1,t=wr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Ow(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ko(s,r)&&t.ref===e.ref)if(at=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(at=!0);else return e.lanes=t.lanes,jn(t,e,i)}return rh(t,e,n,r,i)}function Nw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Xi,_t),_t|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(Xi,_t),_t|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(Xi,_t),_t|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(Xi,_t),_t|=r;return et(t,e,i,n),e.child}function Aw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function rh(t,e,n,r,i){var s=dt(n)?ci:Qe.current;return s=gs(e,s),as(e,i),n=qp(t,e,n,r,s,i),r=Yp(),t!==null&&!at?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jn(t,e,i)):(ve&&r&&Mp(e),e.flags|=1,et(t,e,n,i),e.child)}function Yy(t,e,n,r,i){if(dt(n)){var s=!0;uu(e)}else s=!1;if(as(e,i),e.stateNode===null)Nl(t,e),ow(e,n,r),th(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=jt(u):(u=dt(n)?ci:Qe.current,u=gs(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Uy(e,o,r,u),tr=!1;var f=e.memoizedState;o.state=f,pu(e,r,o,i),l=e.memoizedState,a!==r||f!==l||ct.current||tr?(typeof d=="function"&&(eh(e,n,d,r),l=e.memoizedState),(a=tr||$y(e,n,a,r,f,l,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,iw(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Wt(e.type,a),o.props=u,c=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=jt(l):(l=dt(n)?ci:Qe.current,l=gs(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||f!==l)&&Uy(e,o,r,l),tr=!1,f=e.memoizedState,o.state=f,pu(e,r,o,i);var v=e.memoizedState;a!==c||f!==v||ct.current||tr?(typeof p=="function"&&(eh(e,n,p,r),v=e.memoizedState),(u=tr||$y(e,n,u,r,f,v,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return ih(t,e,n,r,s,i)}function ih(t,e,n,r,i,s){Aw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ly(e,n,!1),jn(t,e,s);r=e.stateNode,Bk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=vs(e,t.child,null,s),e.child=vs(e,null,a,s)):et(t,e,a,s),e.memoizedState=r.state,i&&Ly(e,n,!0),e.child}function Lw(t){var e=t.stateNode;e.pendingContext?Ay(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ay(t,e.context,!1),Vp(t,e.containerInfo)}function Qy(t,e,n,r,i){return ys(),jp(i),e.flags|=256,et(t,e,n,r),e.child}var sh={dehydrated:null,treeContext:null,retryLane:0};function oh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Dw(t,e,n){var r=e.pendingProps,i=_e.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(_e,i&1),t===null)return Jf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=pc(o,r,0,null),t=ii(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=oh(n),e.memoizedState=sh,t):Jp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Wk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=wr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=wr(a,s):(s=ii(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?oh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=sh,r}return s=t.child,t=s.sibling,r=wr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Jp(t,e){return e=pc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ll(t,e,n,r){return r!==null&&jp(r),vs(e,t.child,null,n),t=Jp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Wk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Md(Error(b(422))),ll(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=pc({mode:"visible",children:r.children},i,0,null),s=ii(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&vs(e,t.child,null,o),e.child.memoizedState=oh(o),e.memoizedState=sh,s);if(!(e.mode&1))return ll(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(b(419)),r=Md(s,r,void 0),ll(t,e,o,r)}if(a=(o&t.childLanes)!==0,at||a){if(r=Fe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Fn(t,i),Xt(r,t,i,-1))}return im(),r=Md(Error(b(421))),ll(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=nb.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,wt=gr(i.nextSibling),xt=e,ve=!0,Ht=null,t!==null&&(Lt[Dt++]=kn,Lt[Dt++]=bn,Lt[Dt++]=di,kn=t.id,bn=t.overflow,di=e),e=Jp(e,r.children),e.flags|=4096,e)}function Xy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Zf(t.return,e,n)}function Fd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Mw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(et(t,e,r.children,n),r=_e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xy(t,n,e);else if(t.tag===19)Xy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(_e,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&mu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Fd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&mu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Fd(e,!0,n,null,s);break;case"together":Fd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Nl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function jn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),hi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=wr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=wr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Vk(t,e,n){switch(e.tag){case 3:Lw(e),ys();break;case 5:uw(e);break;case 1:dt(e.type)&&uu(e);break;case 4:Vp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(fu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(_e,_e.current&1),e.flags|=128,null):n&e.child.childLanes?Dw(t,e,n):(ce(_e,_e.current&1),t=jn(t,e,n),t!==null?t.sibling:null);ce(_e,_e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Mw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,Nw(t,e,n)}return jn(t,e,n)}var Fw,ah,jw,$w;Fw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ah=function(){};jw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Zr(fn.current);var s=null;switch(n){case"input":i=Pf(t,i),r=Pf(t,r),s=[];break;case"select":i=Se({},i,{value:void 0}),r=Se({},r,{value:void 0}),s=[];break;case"textarea":i=Nf(t,i),r=Nf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=au)}Lf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Uo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Uo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&de("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};$w=function(t,e,n,r){n!==r&&(e.flags|=4)};function io(t,e){if(!ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ke(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Hk(t,e,n){var r=e.pendingProps;switch(Fp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(e),null;case 1:return dt(e.type)&&lu(),Ke(e),null;case 3:return r=e.stateNode,_s(),me(ct),me(Qe),Gp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ol(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ht!==null&&(mh(Ht),Ht=null))),ah(t,e),Ke(e),null;case 5:Hp(e);var i=Zr(Jo.current);if(n=e.type,t!==null&&e.stateNode!=null)jw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return Ke(e),null}if(t=Zr(fn.current),ol(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[cn]=e,r[Qo]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<go.length;i++)de(go[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":oy(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":ly(r,s),de("invalid",r)}Lf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&sl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&sl(r.textContent,a,t),i=["children",""+a]):Uo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":Xa(r),ay(r,s,!0);break;case"textarea":Xa(r),uy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=au)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=f1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[cn]=e,t[Qo]=r,Fw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Df(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<go.length;i++)de(go[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":oy(t,r),i=Pf(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Se({},r,{value:void 0}),de("invalid",t);break;case"textarea":ly(t,r),i=Nf(t,r),de("invalid",t);break;default:i=r}Lf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?m1(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&h1(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&zo(t,l):typeof l=="number"&&zo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Uo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&de("scroll",t):l!=null&&Sp(t,s,l,o))}switch(n){case"input":Xa(t),ay(t,r,!1);break;case"textarea":Xa(t),uy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+br(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?rs(t,!!r.multiple,s,!1):r.defaultValue!=null&&rs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=au)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ke(e),null;case 6:if(t&&e.stateNode!=null)$w(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=Zr(Jo.current),Zr(fn.current),ol(e)){if(r=e.stateNode,n=e.memoizedProps,r[cn]=e,(s=r.nodeValue!==n)&&(t=xt,t!==null))switch(t.tag){case 3:sl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&sl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[cn]=e,e.stateNode=r}return Ke(e),null;case 13:if(me(_e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&wt!==null&&e.mode&1&&!(e.flags&128))nw(),ys(),e.flags|=98560,s=!1;else if(s=ol(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(b(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[cn]=e}else ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ke(e),s=!1}else Ht!==null&&(mh(Ht),Ht=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||_e.current&1?Oe===0&&(Oe=3):im())),e.updateQueue!==null&&(e.flags|=4),Ke(e),null);case 4:return _s(),ah(t,e),t===null&&qo(e.stateNode.containerInfo),Ke(e),null;case 10:return zp(e.type._context),Ke(e),null;case 17:return dt(e.type)&&lu(),Ke(e),null;case 19:if(me(_e),s=e.memoizedState,s===null)return Ke(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)io(s,!1);else{if(Oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=mu(t),o!==null){for(e.flags|=128,io(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(_e,_e.current&1|2),e.child}t=t.sibling}s.tail!==null&&Te()>Es&&(e.flags|=128,r=!0,io(s,!1),e.lanes=4194304)}else{if(!r)if(t=mu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),io(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ve)return Ke(e),null}else 2*Te()-s.renderingStartTime>Es&&n!==1073741824&&(e.flags|=128,r=!0,io(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Te(),e.sibling=null,n=_e.current,ce(_e,r?n&1|2:n&1),e):(Ke(e),null);case 22:case 23:return rm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?_t&1073741824&&(Ke(e),e.subtreeFlags&6&&(e.flags|=8192)):Ke(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function Gk(t,e){switch(Fp(e),e.tag){case 1:return dt(e.type)&&lu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _s(),me(ct),me(Qe),Gp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Hp(e),null;case 13:if(me(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return me(_e),null;case 4:return _s(),null;case 10:return zp(e.type._context),null;case 22:case 23:return rm(),null;case 24:return null;default:return null}}var ul=!1,qe=!1,Kk=typeof WeakSet=="function"?WeakSet:Set,A=null;function Qi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(t,e,r)}else n.current=null}function lh(t,e,n){try{n()}catch(r){Ce(t,e,r)}}var Jy=!1;function qk(t,e){if(Hf=iu,t=W1(),Dp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,c=t,f=null;t:for(;;){for(var p;c!==n||i!==0&&c.nodeType!==3||(a=o+i),c!==s||r!==0&&c.nodeType!==3||(l=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(p=c.firstChild)!==null;)f=c,c=p;for(;;){if(c===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++d===r&&(l=o),(p=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gf={focusedElem:t,selectionRange:n},iu=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,E=v.memoizedState,m=e.stateNode,h=m.getSnapshotBeforeUpdate(e.elementType===e.type?_:Wt(e.type,_),E);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(w){Ce(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return v=Jy,Jy=!1,v}function bo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&lh(e,n,s)}i=i.next}while(i!==r)}}function fc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function uh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Uw(t){var e=t.alternate;e!==null&&(t.alternate=null,Uw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[cn],delete e[Qo],delete e[Yf],delete e[Rk],delete e[Ok])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function zw(t){return t.tag===5||t.tag===3||t.tag===4}function Zy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||zw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ch(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=au));else if(r!==4&&(t=t.child,t!==null))for(ch(t,e,n),t=t.sibling;t!==null;)ch(t,e,n),t=t.sibling}function dh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(dh(t,e,n),t=t.sibling;t!==null;)dh(t,e,n),t=t.sibling}var Ue=null,Vt=!1;function Xn(t,e,n){for(n=n.child;n!==null;)Bw(t,e,n),n=n.sibling}function Bw(t,e,n){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(ic,n)}catch{}switch(n.tag){case 5:qe||Qi(n,e);case 6:var r=Ue,i=Vt;Ue=null,Xn(t,e,n),Ue=r,Vt=i,Ue!==null&&(Vt?(t=Ue,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(Vt?(t=Ue,n=n.stateNode,t.nodeType===8?Rd(t.parentNode,n):t.nodeType===1&&Rd(t,n),Ho(t)):Rd(Ue,n.stateNode));break;case 4:r=Ue,i=Vt,Ue=n.stateNode.containerInfo,Vt=!0,Xn(t,e,n),Ue=r,Vt=i;break;case 0:case 11:case 14:case 15:if(!qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&lh(n,e,o),i=i.next}while(i!==r)}Xn(t,e,n);break;case 1:if(!qe&&(Qi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ce(n,e,a)}Xn(t,e,n);break;case 21:Xn(t,e,n);break;case 22:n.mode&1?(qe=(r=qe)||n.memoizedState!==null,Xn(t,e,n),qe=r):Xn(t,e,n);break;default:Xn(t,e,n)}}function e0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Kk),e.forEach(function(r){var i=rb.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function zt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ue=a.stateNode,Vt=!1;break e;case 3:Ue=a.stateNode.containerInfo,Vt=!0;break e;case 4:Ue=a.stateNode.containerInfo,Vt=!0;break e}a=a.return}if(Ue===null)throw Error(b(160));Bw(s,o,i),Ue=null,Vt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ce(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ww(e,t),e=e.sibling}function Ww(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zt(e,t),on(t),r&4){try{bo(3,t,t.return),fc(3,t)}catch(_){Ce(t,t.return,_)}try{bo(5,t,t.return)}catch(_){Ce(t,t.return,_)}}break;case 1:zt(e,t),on(t),r&512&&n!==null&&Qi(n,n.return);break;case 5:if(zt(e,t),on(t),r&512&&n!==null&&Qi(n,n.return),t.flags&32){var i=t.stateNode;try{zo(i,"")}catch(_){Ce(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&c1(i,s),Df(a,o);var u=Df(a,s);for(o=0;o<l.length;o+=2){var d=l[o],c=l[o+1];d==="style"?m1(i,c):d==="dangerouslySetInnerHTML"?h1(i,c):d==="children"?zo(i,c):Sp(i,d,c,u)}switch(a){case"input":Rf(i,s);break;case"textarea":d1(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?rs(i,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?rs(i,!!s.multiple,s.defaultValue,!0):rs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Qo]=s}catch(_){Ce(t,t.return,_)}}break;case 6:if(zt(e,t),on(t),r&4){if(t.stateNode===null)throw Error(b(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){Ce(t,t.return,_)}}break;case 3:if(zt(e,t),on(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ho(e.containerInfo)}catch(_){Ce(t,t.return,_)}break;case 4:zt(e,t),on(t);break;case 13:zt(e,t),on(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(tm=Te())),r&4&&e0(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(qe=(u=qe)||d,zt(e,t),qe=u):zt(e,t),on(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(A=t,d=t.child;d!==null;){for(c=A=d;A!==null;){switch(f=A,p=f.child,f.tag){case 0:case 11:case 14:case 15:bo(4,f,f.return);break;case 1:Qi(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){Ce(r,n,_)}}break;case 5:Qi(f,f.return);break;case 22:if(f.memoizedState!==null){n0(c);continue}}p!==null?(p.return=f,A=p):n0(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=c.stateNode,l=c.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=p1("display",o))}catch(_){Ce(t,t.return,_)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(_){Ce(t,t.return,_)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:zt(e,t),on(t),r&4&&e0(t);break;case 21:break;default:zt(e,t),on(t)}}function on(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(zw(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(zo(i,""),r.flags&=-33);var s=Zy(t);dh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Zy(t);ch(t,a,o);break;default:throw Error(b(161))}}catch(l){Ce(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Yk(t,e,n){A=t,Vw(t)}function Vw(t,e,n){for(var r=(t.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ul;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||qe;a=ul;var u=qe;if(ul=o,(qe=l)&&!u)for(A=i;A!==null;)o=A,l=o.child,o.tag===22&&o.memoizedState!==null?r0(i):l!==null?(l.return=o,A=l):r0(i);for(;s!==null;)A=s,Vw(s),s=s.sibling;A=i,ul=a,qe=u}t0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,A=s):t0(t)}}function t0(t){for(;A!==null;){var e=A;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qe||fc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!qe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Wt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&jy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}jy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Ho(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}qe||e.flags&512&&uh(e)}catch(f){Ce(e,e.return,f)}}if(e===t){A=null;break}if(n=e.sibling,n!==null){n.return=e.return,A=n;break}A=e.return}}function n0(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var n=e.sibling;if(n!==null){n.return=e.return,A=n;break}A=e.return}}function r0(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{fc(4,e)}catch(l){Ce(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ce(e,i,l)}}var s=e.return;try{uh(e)}catch(l){Ce(e,s,l)}break;case 5:var o=e.return;try{uh(e)}catch(l){Ce(e,o,l)}}}catch(l){Ce(e,e.return,l)}if(e===t){A=null;break}var a=e.sibling;if(a!==null){a.return=e.return,A=a;break}A=e.return}}var Qk=Math.ceil,vu=Bn.ReactCurrentDispatcher,Zp=Bn.ReactCurrentOwner,Ft=Bn.ReactCurrentBatchConfig,X=0,Fe=null,ke=null,We=0,_t=0,Xi=Fr(0),Oe=0,na=null,hi=0,hc=0,em=0,Po=null,st=null,tm=0,Es=1/0,xn=null,_u=!1,fh=null,vr=null,cl=!1,cr=null,wu=0,Ro=0,hh=null,Al=-1,Ll=0;function nt(){return X&6?Te():Al!==-1?Al:Al=Te()}function _r(t){return t.mode&1?X&2&&We!==0?We&-We:Ak.transition!==null?(Ll===0&&(Ll=k1()),Ll):(t=re,t!==0||(t=window.event,t=t===void 0?16:L1(t.type)),t):1}function Xt(t,e,n,r){if(50<Ro)throw Ro=0,hh=null,Error(b(185));Ia(t,n,r),(!(X&2)||t!==Fe)&&(t===Fe&&(!(X&2)&&(hc|=n),Oe===4&&ir(t,We)),ft(t,r),n===1&&X===0&&!(e.mode&1)&&(Es=Te()+500,uc&&jr()))}function ft(t,e){var n=t.callbackNode;AI(t,e);var r=ru(t,t===Fe?We:0);if(r===0)n!==null&&fy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&fy(n),e===1)t.tag===0?Nk(i0.bind(null,t)):Z1(i0.bind(null,t)),bk(function(){!(X&6)&&jr()}),n=null;else{switch(b1(r)){case 1:n=kp;break;case 4:n=T1;break;case 16:n=nu;break;case 536870912:n=I1;break;default:n=nu}n=Jw(n,Hw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Hw(t,e){if(Al=-1,Ll=0,X&6)throw Error(b(327));var n=t.callbackNode;if(ls()&&t.callbackNode!==n)return null;var r=ru(t,t===Fe?We:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Eu(t,r);else{e=r;var i=X;X|=2;var s=Kw();(Fe!==t||We!==e)&&(xn=null,Es=Te()+500,ri(t,e));do try{Zk();break}catch(a){Gw(t,a)}while(!0);Up(),vu.current=s,X=i,ke!==null?e=0:(Fe=null,We=0,e=Oe)}if(e!==0){if(e===2&&(i=Uf(t),i!==0&&(r=i,e=ph(t,i))),e===1)throw n=na,ri(t,0),ir(t,r),ft(t,Te()),n;if(e===6)ir(t,r);else{if(i=t.current.alternate,!(r&30)&&!Xk(i)&&(e=Eu(t,r),e===2&&(s=Uf(t),s!==0&&(r=s,e=ph(t,s))),e===1))throw n=na,ri(t,0),ir(t,r),ft(t,Te()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:Gr(t,st,xn);break;case 3:if(ir(t,r),(r&130023424)===r&&(e=tm+500-Te(),10<e)){if(ru(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){nt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=qf(Gr.bind(null,t,st,xn),e);break}Gr(t,st,xn);break;case 4:if(ir(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Qt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Qk(r/1960))-r,10<r){t.timeoutHandle=qf(Gr.bind(null,t,st,xn),r);break}Gr(t,st,xn);break;case 5:Gr(t,st,xn);break;default:throw Error(b(329))}}}return ft(t,Te()),t.callbackNode===n?Hw.bind(null,t):null}function ph(t,e){var n=Po;return t.current.memoizedState.isDehydrated&&(ri(t,e).flags|=256),t=Eu(t,e),t!==2&&(e=st,st=n,e!==null&&mh(e)),t}function mh(t){st===null?st=t:st.push.apply(st,t)}function Xk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!en(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ir(t,e){for(e&=~em,e&=~hc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qt(e),r=1<<n;t[n]=-1,e&=~r}}function i0(t){if(X&6)throw Error(b(327));ls();var e=ru(t,0);if(!(e&1))return ft(t,Te()),null;var n=Eu(t,e);if(t.tag!==0&&n===2){var r=Uf(t);r!==0&&(e=r,n=ph(t,r))}if(n===1)throw n=na,ri(t,0),ir(t,e),ft(t,Te()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gr(t,st,xn),ft(t,Te()),null}function nm(t,e){var n=X;X|=1;try{return t(e)}finally{X=n,X===0&&(Es=Te()+500,uc&&jr())}}function pi(t){cr!==null&&cr.tag===0&&!(X&6)&&ls();var e=X;X|=1;var n=Ft.transition,r=re;try{if(Ft.transition=null,re=1,t)return t()}finally{re=r,Ft.transition=n,X=e,!(X&6)&&jr()}}function rm(){_t=Xi.current,me(Xi)}function ri(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,kk(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(Fp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&lu();break;case 3:_s(),me(ct),me(Qe),Gp();break;case 5:Hp(r);break;case 4:_s();break;case 13:me(_e);break;case 19:me(_e);break;case 10:zp(r.type._context);break;case 22:case 23:rm()}n=n.return}if(Fe=t,ke=t=wr(t.current,null),We=_t=e,Oe=0,na=null,em=hc=hi=0,st=Po=null,Jr!==null){for(e=0;e<Jr.length;e++)if(n=Jr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Jr=null}return t}function Gw(t,e){do{var n=ke;try{if(Up(),Rl.current=yu,gu){for(var r=we.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}gu=!1}if(fi=0,Le=be=we=null,ko=!1,Zo=0,Zp.current=null,n===null||n.return===null){Oe=1,na=e,ke=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=We,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=Hy(o);if(p!==null){p.flags&=-257,Gy(p,o,a,s,e),p.mode&1&&Vy(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){Vy(s,u,e),im();break e}l=Error(b(426))}}else if(ve&&a.mode&1){var E=Hy(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Gy(E,o,a,s,e),jp(ws(l,a));break e}}s=l=ws(l,a),Oe!==4&&(Oe=2),Po===null?Po=[s]:Po.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Pw(s,l,e);Fy(s,m);break e;case 1:a=l;var h=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(vr===null||!vr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=Rw(s,a,e);Fy(s,w);break e}}s=s.return}while(s!==null)}Yw(n)}catch(T){e=T,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(!0)}function Kw(){var t=vu.current;return vu.current=yu,t===null?yu:t}function im(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),Fe===null||!(hi&268435455)&&!(hc&268435455)||ir(Fe,We)}function Eu(t,e){var n=X;X|=2;var r=Kw();(Fe!==t||We!==e)&&(xn=null,ri(t,e));do try{Jk();break}catch(i){Gw(t,i)}while(!0);if(Up(),X=n,vu.current=r,ke!==null)throw Error(b(261));return Fe=null,We=0,Oe}function Jk(){for(;ke!==null;)qw(ke)}function Zk(){for(;ke!==null&&!xI();)qw(ke)}function qw(t){var e=Xw(t.alternate,t,_t);t.memoizedProps=t.pendingProps,e===null?Yw(t):ke=e,Zp.current=null}function Yw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Gk(n,e),n!==null){n.flags&=32767,ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Oe=6,ke=null;return}}else if(n=Hk(n,e,_t),n!==null){ke=n;return}if(e=e.sibling,e!==null){ke=e;return}ke=e=t}while(e!==null);Oe===0&&(Oe=5)}function Gr(t,e,n){var r=re,i=Ft.transition;try{Ft.transition=null,re=1,eb(t,e,n,r)}finally{Ft.transition=i,re=r}return null}function eb(t,e,n,r){do ls();while(cr!==null);if(X&6)throw Error(b(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(LI(t,s),t===Fe&&(ke=Fe=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||cl||(cl=!0,Jw(nu,function(){return ls(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ft.transition,Ft.transition=null;var o=re;re=1;var a=X;X|=4,Zp.current=null,qk(t,n),Ww(n,t),wk(Gf),iu=!!Hf,Gf=Hf=null,t.current=n,Yk(n),TI(),X=a,re=o,Ft.transition=s}else t.current=n;if(cl&&(cl=!1,cr=t,wu=i),s=t.pendingLanes,s===0&&(vr=null),bI(n.stateNode),ft(t,Te()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(_u)throw _u=!1,t=fh,fh=null,t;return wu&1&&t.tag!==0&&ls(),s=t.pendingLanes,s&1?t===hh?Ro++:(Ro=0,hh=t):Ro=0,jr(),null}function ls(){if(cr!==null){var t=b1(wu),e=Ft.transition,n=re;try{if(Ft.transition=null,re=16>t?16:t,cr===null)var r=!1;else{if(t=cr,cr=null,wu=0,X&6)throw Error(b(331));var i=X;for(X|=4,A=t.current;A!==null;){var s=A,o=s.child;if(A.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(A=u;A!==null;){var d=A;switch(d.tag){case 0:case 11:case 15:bo(8,d,s)}var c=d.child;if(c!==null)c.return=d,A=c;else for(;A!==null;){d=A;var f=d.sibling,p=d.return;if(Uw(d),d===u){A=null;break}if(f!==null){f.return=p,A=f;break}A=p}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var E=_.sibling;_.sibling=null,_=E}while(_!==null)}}A=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:bo(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,A=m;break e}A=s.return}}var h=t.current;for(A=h;A!==null;){o=A;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,A=y;else e:for(o=h;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:fc(9,a)}}catch(T){Ce(a,a.return,T)}if(a===o){A=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,A=w;break e}A=a.return}}if(X=i,jr(),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(ic,t)}catch{}r=!0}return r}finally{re=n,Ft.transition=e}}return!1}function s0(t,e,n){e=ws(n,e),e=Pw(t,e,1),t=yr(t,e,1),e=nt(),t!==null&&(Ia(t,1,e),ft(t,e))}function Ce(t,e,n){if(t.tag===3)s0(t,t,n);else for(;e!==null;){if(e.tag===3){s0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vr===null||!vr.has(r))){t=ws(n,t),t=Rw(e,t,1),e=yr(e,t,1),t=nt(),e!==null&&(Ia(e,1,t),ft(e,t));break}}e=e.return}}function tb(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=nt(),t.pingedLanes|=t.suspendedLanes&n,Fe===t&&(We&n)===n&&(Oe===4||Oe===3&&(We&130023424)===We&&500>Te()-tm?ri(t,0):em|=n),ft(t,e)}function Qw(t,e){e===0&&(t.mode&1?(e=el,el<<=1,!(el&130023424)&&(el=4194304)):e=1);var n=nt();t=Fn(t,e),t!==null&&(Ia(t,e,n),ft(t,n))}function nb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Qw(t,n)}function rb(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),Qw(t,n)}var Xw;Xw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ct.current)at=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return at=!1,Vk(t,e,n);at=!!(t.flags&131072)}else at=!1,ve&&e.flags&1048576&&ew(e,du,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Nl(t,e),t=e.pendingProps;var i=gs(e,Qe.current);as(e,n),i=qp(null,e,r,t,i,n);var s=Yp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dt(r)?(s=!0,uu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Wp(e),i.updater=cc,e.stateNode=i,i._reactInternals=e,th(e,r,t,n),e=ih(null,e,r,!0,s,n)):(e.tag=0,ve&&s&&Mp(e),et(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Nl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=sb(r),t=Wt(r,t),i){case 0:e=rh(null,e,r,t,n);break e;case 1:e=Yy(null,e,r,t,n);break e;case 11:e=Ky(null,e,r,t,n);break e;case 14:e=qy(null,e,r,Wt(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),rh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Yy(t,e,r,i,n);case 3:e:{if(Lw(e),t===null)throw Error(b(387));r=e.pendingProps,s=e.memoizedState,i=s.element,iw(t,e),pu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ws(Error(b(423)),e),e=Qy(t,e,r,n,i);break e}else if(r!==i){i=ws(Error(b(424)),e),e=Qy(t,e,r,n,i);break e}else for(wt=gr(e.stateNode.containerInfo.firstChild),xt=e,ve=!0,Ht=null,n=lw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ys(),r===i){e=jn(t,e,n);break e}et(t,e,r,n)}e=e.child}return e;case 5:return uw(e),t===null&&Jf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Kf(r,i)?o=null:s!==null&&Kf(r,s)&&(e.flags|=32),Aw(t,e),et(t,e,o,n),e.child;case 6:return t===null&&Jf(e),null;case 13:return Dw(t,e,n);case 4:return Vp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=vs(e,null,r,n):et(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Ky(t,e,r,i,n);case 7:return et(t,e,e.pendingProps,n),e.child;case 8:return et(t,e,e.pendingProps.children,n),e.child;case 12:return et(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(fu,r._currentValue),r._currentValue=o,s!==null)if(en(s.value,o)){if(s.children===i.children&&!ct.current){e=jn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Nn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Zf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(b(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Zf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}et(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,as(e,n),i=jt(i),r=r(i),e.flags|=1,et(t,e,r,n),e.child;case 14:return r=e.type,i=Wt(r,e.pendingProps),i=Wt(r.type,i),qy(t,e,r,i,n);case 15:return Ow(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Nl(t,e),e.tag=1,dt(r)?(t=!0,uu(e)):t=!1,as(e,n),ow(e,r,i),th(e,r,i,n),ih(null,e,r,!0,t,n);case 19:return Mw(t,e,n);case 22:return Nw(t,e,n)}throw Error(b(156,e.tag))};function Jw(t,e){return x1(t,e)}function ib(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(t,e,n,r){return new ib(t,e,n,r)}function sm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sb(t){if(typeof t=="function")return sm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xp)return 11;if(t===Tp)return 14}return 2}function wr(t,e){var n=t.alternate;return n===null?(n=Mt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Dl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")sm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case zi:return ii(n.children,i,s,e);case Cp:o=8,i|=8;break;case Tf:return t=Mt(12,n,e,i|2),t.elementType=Tf,t.lanes=s,t;case If:return t=Mt(13,n,e,i),t.elementType=If,t.lanes=s,t;case kf:return t=Mt(19,n,e,i),t.elementType=kf,t.lanes=s,t;case a1:return pc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case s1:o=10;break e;case o1:o=9;break e;case xp:o=11;break e;case Tp:o=14;break e;case er:o=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=Mt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ii(t,e,n,r){return t=Mt(7,t,r,e),t.lanes=n,t}function pc(t,e,n,r){return t=Mt(22,t,r,e),t.elementType=a1,t.lanes=n,t.stateNode={isHidden:!1},t}function jd(t,e,n){return t=Mt(6,t,null,e),t.lanes=n,t}function $d(t,e,n){return e=Mt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ob(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_d(0),this.expirationTimes=_d(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_d(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function om(t,e,n,r,i,s,o,a,l){return t=new ob(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Mt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wp(s),t}function ab(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ui,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Zw(t){if(!t)return Pr;t=t._reactInternals;e:{if(Ii(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(dt(n))return J1(t,n,e)}return e}function eE(t,e,n,r,i,s,o,a,l){return t=om(n,r,!0,t,i,s,o,a,l),t.context=Zw(null),n=t.current,r=nt(),i=_r(n),s=Nn(r,i),s.callback=e??null,yr(n,s,i),t.current.lanes=i,Ia(t,i,r),ft(t,r),t}function mc(t,e,n,r){var i=e.current,s=nt(),o=_r(i);return n=Zw(n),e.context===null?e.context=n:e.pendingContext=n,e=Nn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=yr(i,e,o),t!==null&&(Xt(t,i,o,s),Pl(t,i,o)),o}function Su(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function o0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function am(t,e){o0(t,e),(t=t.alternate)&&o0(t,e)}function lb(){return null}var tE=typeof reportError=="function"?reportError:function(t){console.error(t)};function lm(t){this._internalRoot=t}gc.prototype.render=lm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));mc(t,e,null,null)};gc.prototype.unmount=lm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;pi(function(){mc(null,t,null,null)}),e[Mn]=null}};function gc(t){this._internalRoot=t}gc.prototype.unstable_scheduleHydration=function(t){if(t){var e=O1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<rr.length&&e!==0&&e<rr[n].priority;n++);rr.splice(n,0,t),n===0&&A1(t)}};function um(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function a0(){}function ub(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Su(o);s.call(u)}}var o=eE(e,r,t,0,null,!1,!1,"",a0);return t._reactRootContainer=o,t[Mn]=o.current,qo(t.nodeType===8?t.parentNode:t),pi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Su(l);a.call(u)}}var l=om(t,0,!1,null,null,!1,!1,"",a0);return t._reactRootContainer=l,t[Mn]=l.current,qo(t.nodeType===8?t.parentNode:t),pi(function(){mc(e,l,n,r)}),l}function vc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Su(o);a.call(l)}}mc(e,o,t,i)}else o=ub(n,e,t,i,r);return Su(o)}P1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=mo(e.pendingLanes);n!==0&&(bp(e,n|1),ft(e,Te()),!(X&6)&&(Es=Te()+500,jr()))}break;case 13:pi(function(){var r=Fn(t,1);if(r!==null){var i=nt();Xt(r,t,1,i)}}),am(t,1)}};Pp=function(t){if(t.tag===13){var e=Fn(t,134217728);if(e!==null){var n=nt();Xt(e,t,134217728,n)}am(t,134217728)}};R1=function(t){if(t.tag===13){var e=_r(t),n=Fn(t,e);if(n!==null){var r=nt();Xt(n,t,e,r)}am(t,e)}};O1=function(){return re};N1=function(t,e){var n=re;try{return re=t,e()}finally{re=n}};Ff=function(t,e,n){switch(e){case"input":if(Rf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=lc(r);if(!i)throw Error(b(90));u1(r),Rf(r,i)}}}break;case"textarea":d1(t,n);break;case"select":e=n.value,e!=null&&rs(t,!!n.multiple,e,!1)}};v1=nm;_1=pi;var cb={usingClientEntryPoint:!1,Events:[ba,Hi,lc,g1,y1,nm]},so={findFiberByHostInstance:Xr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},db={bundleType:so.bundleType,version:so.version,rendererPackageName:so.rendererPackageName,rendererConfig:so.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=S1(t),t===null?null:t.stateNode},findFiberByHostInstance:so.findFiberByHostInstance||lb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{ic=dl.inject(db),dn=dl}catch{}}Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cb;Pt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!um(e))throw Error(b(200));return ab(t,e,null,n)};Pt.createRoot=function(t,e){if(!um(t))throw Error(b(299));var n=!1,r="",i=tE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=om(t,1,!1,null,null,n,!1,r,i),t[Mn]=e.current,qo(t.nodeType===8?t.parentNode:t),new lm(e)};Pt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=S1(e),t=t===null?null:t.stateNode,t};Pt.flushSync=function(t){return pi(t)};Pt.hydrate=function(t,e,n){if(!yc(e))throw Error(b(200));return vc(null,t,e,!0,n)};Pt.hydrateRoot=function(t,e,n){if(!um(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=tE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=eE(e,null,t,1,n??null,i,!1,s,o),t[Mn]=e.current,qo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new gc(e)};Pt.render=function(t,e,n){if(!yc(e))throw Error(b(200));return vc(null,t,e,!1,n)};Pt.unmountComponentAtNode=function(t){if(!yc(t))throw Error(b(40));return t._reactRootContainer?(pi(function(){vc(null,null,t,!1,function(){t._reactRootContainer=null,t[Mn]=null})}),!0):!1};Pt.unstable_batchedUpdates=nm;Pt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!yc(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return vc(t,e,n,!1,r)};Pt.version="18.2.0-next-9e3b772b8-20220608";function nE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nE)}catch(t){console.error(t)}}nE(),e1.exports=Pt;var rE=e1.exports,l0=rE;Cf.createRoot=l0.createRoot,Cf.hydrateRoot=l0.hydrateRoot;/**
 * @remix-run/router v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ra(){return ra=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ra.apply(this,arguments)}var dr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(dr||(dr={}));const u0="popstate";function fb(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return gh("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Cu(i)}return pb(e,n,null,t)}function Ee(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function cm(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function hb(){return Math.random().toString(36).substr(2,8)}function c0(t,e){return{usr:t.state,key:t.key,idx:e}}function gh(t,e,n,r){return n===void 0&&(n=null),ra({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?zs(e):e,{state:n,key:e&&e.key||r||hb()})}function Cu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function zs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function pb(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=dr.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(ra({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function c(){a=dr.Pop;let E=d(),m=E==null?null:E-u;u=E,l&&l({action:a,location:_.location,delta:m})}function f(E,m){a=dr.Push;let h=gh(_.location,E,m);n&&n(h,E),u=d()+1;let y=c0(h,u),w=_.createHref(h);try{o.pushState(y,"",w)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(w)}s&&l&&l({action:a,location:_.location,delta:1})}function p(E,m){a=dr.Replace;let h=gh(_.location,E,m);n&&n(h,E),u=d();let y=c0(h,u),w=_.createHref(h);o.replaceState(y,"",w),s&&l&&l({action:a,location:_.location,delta:0})}function v(E){let m=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof E=="string"?E:Cu(E);return Ee(m,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,m)}let _={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(u0,c),l=E,()=>{i.removeEventListener(u0,c),l=null}},createHref(E){return e(i,E)},createURL:v,encodeLocation(E){let m=v(E);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:p,go(E){return o.go(E)}};return _}var d0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(d0||(d0={}));function mb(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?zs(e):e,i=Ss(r.pathname||"/",n);if(i==null)return null;let s=iE(t);gb(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Tb(s[a],kb(i));return o}function iE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ee(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Er([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(Ee(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),iE(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Cb(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of sE(s.path))i(s,o,l)}),e}function sE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=sE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function gb(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:xb(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const yb=/^:[\w-]+$/,vb=3,_b=2,wb=1,Eb=10,Sb=-2,f0=t=>t==="*";function Cb(t,e){let n=t.split("/"),r=n.length;return n.some(f0)&&(r+=Sb),e&&(r+=_b),n.filter(i=>!f0(i)).reduce((i,s)=>i+(yb.test(s)?vb:s===""?wb:Eb),r)}function xb(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Tb(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=yh({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let c=a.route;s.push({params:r,pathname:Er([i,d.pathname]),pathnameBase:Nb(Er([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=Er([i,d.pathnameBase]))}return s}function yh(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Ib(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:f,isOptional:p}=d;if(f==="*"){let _=a[c]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const v=a[c];return p&&!v?u[f]=void 0:u[f]=bb(v||"",f),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Ib(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),cm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function kb(t){try{return decodeURI(t)}catch(e){return cm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function bb(t,e){try{return decodeURIComponent(t)}catch(n){return cm(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Ss(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Pb(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?zs(t):t;return{pathname:n?n.startsWith("/")?n:Rb(n,e):e,search:Ab(r),hash:Lb(i)}}function Rb(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ud(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ob(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function dm(t,e){let n=Ob(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function fm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=zs(t):(i=ra({},t),Ee(!i.pathname||!i.pathname.includes("?"),Ud("?","pathname","search",i)),Ee(!i.pathname||!i.pathname.includes("#"),Ud("#","pathname","hash",i)),Ee(!i.search||!i.search.includes("#"),Ud("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let c=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),c-=1;i.pathname=f.join("/")}a=c>=0?e[c]:"/"}let l=Pb(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Er=t=>t.join("/").replace(/\/\/+/g,"/"),Nb=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Ab=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Lb=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Db(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const oE=["post","put","patch","delete"];new Set(oE);const Mb=["get",...oE];new Set(Mb);/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ia(){return ia=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ia.apply(this,arguments)}const _c=C.createContext(null),aE=C.createContext(null),Wn=C.createContext(null),wc=C.createContext(null),Vn=C.createContext({outlet:null,matches:[],isDataRoute:!1}),lE=C.createContext(null);function Fb(t,e){let{relative:n}=e===void 0?{}:e;Bs()||Ee(!1);let{basename:r,navigator:i}=C.useContext(Wn),{hash:s,pathname:o,search:a}=Ec(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Er([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Bs(){return C.useContext(wc)!=null}function Ws(){return Bs()||Ee(!1),C.useContext(wc).location}function uE(t){C.useContext(Wn).static||C.useLayoutEffect(t)}function cE(){let{isDataRoute:t}=C.useContext(Vn);return t?Jb():jb()}function jb(){Bs()||Ee(!1);let t=C.useContext(_c),{basename:e,future:n,navigator:r}=C.useContext(Wn),{matches:i}=C.useContext(Vn),{pathname:s}=Ws(),o=JSON.stringify(dm(i,n.v7_relativeSplatPath)),a=C.useRef(!1);return uE(()=>{a.current=!0}),C.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=fm(u,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Er([e,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[e,r,o,s,t])}const $b=C.createContext(null);function Ub(t){let e=C.useContext(Vn).outlet;return e&&C.createElement($b.Provider,{value:t},e)}function Ec(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=C.useContext(Wn),{matches:i}=C.useContext(Vn),{pathname:s}=Ws(),o=JSON.stringify(dm(i,r.v7_relativeSplatPath));return C.useMemo(()=>fm(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function zb(t,e){return Bb(t,e)}function Bb(t,e,n,r){Bs()||Ee(!1);let{navigator:i}=C.useContext(Wn),{matches:s}=C.useContext(Vn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Ws(),d;if(e){var c;let E=typeof e=="string"?zs(e):e;l==="/"||(c=E.pathname)!=null&&c.startsWith(l)||Ee(!1),d=E}else d=u;let f=d.pathname||"/",p=l==="/"?f:f.slice(l.length)||"/",v=mb(t,{pathname:p}),_=Kb(v&&v.map(E=>Object.assign({},E,{params:Object.assign({},a,E.params),pathname:Er([l,i.encodeLocation?i.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?l:Er([l,i.encodeLocation?i.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),s,n,r);return e&&_?C.createElement(wc.Provider,{value:{location:ia({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:dr.Pop}},_):_}function Wb(){let t=Xb(),e=Db(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},e),n?C.createElement("pre",{style:i},n):null,null)}const Vb=C.createElement(Wb,null);class Hb extends C.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?C.createElement(Vn.Provider,{value:this.props.routeContext},C.createElement(lE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Gb(t){let{routeContext:e,match:n,children:r}=t,i=C.useContext(_c);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Vn.Provider,{value:e},r)}function Kb(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id]));d>=0||Ee(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let c=o[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:f,errors:p}=n,v=c.route.loader&&f[c.route.id]===void 0&&(!p||p[c.route.id]===void 0);if(c.route.lazy||v){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,c,f)=>{let p,v=!1,_=null,E=null;n&&(p=a&&c.route.id?a[c.route.id]:void 0,_=c.route.errorElement||Vb,l&&(u<0&&f===0?(Zb("route-fallback",!1),v=!0,E=null):u===f&&(v=!0,E=c.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,f+1)),h=()=>{let y;return p?y=_:v?y=E:c.route.Component?y=C.createElement(c.route.Component,null):c.route.element?y=c.route.element:y=d,C.createElement(Gb,{match:c,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:y})};return n&&(c.route.ErrorBoundary||c.route.errorElement||f===0)?C.createElement(Hb,{location:n.location,revalidation:n.revalidation,component:_,error:p,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):h()},null)}var dE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(dE||{}),xu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(xu||{});function qb(t){let e=C.useContext(_c);return e||Ee(!1),e}function Yb(t){let e=C.useContext(aE);return e||Ee(!1),e}function Qb(t){let e=C.useContext(Vn);return e||Ee(!1),e}function fE(t){let e=Qb(),n=e.matches[e.matches.length-1];return n.route.id||Ee(!1),n.route.id}function Xb(){var t;let e=C.useContext(lE),n=Yb(xu.UseRouteError),r=fE(xu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Jb(){let{router:t}=qb(dE.UseNavigateStable),e=fE(xu.UseNavigateStable),n=C.useRef(!1);return uE(()=>{n.current=!0}),C.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ia({fromRouteId:e},s)))},[t,e])}const h0={};function Zb(t,e,n){!e&&!h0[t]&&(h0[t]=!0)}function vh(t){let{to:e,replace:n,state:r,relative:i}=t;Bs()||Ee(!1);let{future:s,static:o}=C.useContext(Wn),{matches:a}=C.useContext(Vn),{pathname:l}=Ws(),u=cE(),d=fm(e,dm(a,s.v7_relativeSplatPath),l,i==="path"),c=JSON.stringify(d);return C.useEffect(()=>u(JSON.parse(c),{replace:n,state:r,relative:i}),[u,c,i,n,r]),null}function e2(t){return Ub(t.context)}function yo(t){Ee(!1)}function t2(t){let{basename:e="/",children:n=null,location:r,navigationType:i=dr.Pop,navigator:s,static:o=!1,future:a}=t;Bs()&&Ee(!1);let l=e.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:l,navigator:s,static:o,future:ia({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=zs(r));let{pathname:d="/",search:c="",hash:f="",state:p=null,key:v="default"}=r,_=C.useMemo(()=>{let E=Ss(d,l);return E==null?null:{location:{pathname:E,search:c,hash:f,state:p,key:v},navigationType:i}},[l,d,c,f,p,v,i]);return _==null?null:C.createElement(Wn.Provider,{value:u},C.createElement(wc.Provider,{children:n,value:_}))}function n2(t){let{children:e,location:n}=t;return zb(_h(e),n)}new Promise(()=>{});function _h(t,e){e===void 0&&(e=[]);let n=[];return C.Children.forEach(t,(r,i)=>{if(!C.isValidElement(r))return;let s=[...e,i];if(r.type===C.Fragment){n.push.apply(n,_h(r.props.children,s));return}r.type!==yo&&Ee(!1),!r.props.index||!r.props.children||Ee(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=_h(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tu(){return Tu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Tu.apply(this,arguments)}function hE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function r2(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function i2(t,e){return t.button===0&&(!e||e==="_self")&&!r2(t)}const s2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],o2=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],a2="6";try{window.__reactRouterVersion=a2}catch{}const l2=C.createContext({isTransitioning:!1}),u2="startTransition",p0=Sf[u2];function c2(t){let{basename:e,children:n,future:r,window:i}=t,s=C.useRef();s.current==null&&(s.current=fb({window:i,v5Compat:!0}));let o=s.current,[a,l]=C.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=C.useCallback(c=>{u&&p0?p0(()=>l(c)):l(c)},[l,u]);return C.useLayoutEffect(()=>o.listen(d),[o,d]),C.createElement(t2,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const d2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",f2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pE=C.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:d,unstable_viewTransition:c}=e,f=hE(e,s2),{basename:p}=C.useContext(Wn),v,_=!1;if(typeof u=="string"&&f2.test(u)&&(v=u,d2))try{let y=new URL(window.location.href),w=u.startsWith("//")?new URL(y.protocol+u):new URL(u),T=Ss(w.pathname,p);w.origin===y.origin&&T!=null?u=T+w.search+w.hash:_=!0}catch{}let E=Fb(u,{relative:i}),m=p2(u,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,unstable_viewTransition:c});function h(y){r&&r(y),y.defaultPrevented||m(y)}return C.createElement("a",Tu({},f,{href:v||E,onClick:_||s?r:h,ref:n,target:l}))}),hm=C.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:d}=e,c=hE(e,o2),f=Ec(l,{relative:c.relative}),p=Ws(),v=C.useContext(aE),{navigator:_,basename:E}=C.useContext(Wn),m=v!=null&&m2(f)&&u===!0,h=_.encodeLocation?_.encodeLocation(f).pathname:f.pathname,y=p.pathname,w=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(y=y.toLowerCase(),w=w?w.toLowerCase():null,h=h.toLowerCase()),w&&E&&(w=Ss(w,E)||w);const T=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let S=y===h||!o&&y.startsWith(h)&&y.charAt(T)==="/",x=w!=null&&(w===h||!o&&w.startsWith(h)&&w.charAt(h.length)==="/"),k={isActive:S,isPending:x,isTransitioning:m},L=S?r:void 0,F;typeof s=="function"?F=s(k):F=[s,S?"active":null,x?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let B=typeof a=="function"?a(k):a;return C.createElement(pE,Tu({},c,{"aria-current":L,className:F,ref:n,style:B,to:l,unstable_viewTransition:u}),typeof d=="function"?d(k):d)});var wh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(wh||(wh={}));var m0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(m0||(m0={}));function h2(t){let e=C.useContext(_c);return e||Ee(!1),e}function p2(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=cE(),u=Ws(),d=Ec(t,{relative:o});return C.useCallback(c=>{if(i2(c,n)){c.preventDefault();let f=r!==void 0?r:Cu(u)===Cu(d);l(t,{replace:f,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,d,r,i,n,t,s,o,a])}function m2(t,e){e===void 0&&(e={});let n=C.useContext(l2);n==null&&Ee(!1);let{basename:r}=h2(wh.useViewTransitionState),i=Ec(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Ss(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ss(n.nextLocation.pathname,r)||n.nextLocation.pathname;return yh(i.pathname,o)!=null||yh(i.pathname,s)!=null}var mE={exports:{}},g2="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",y2=g2,v2=y2;function gE(){}function yE(){}yE.resetWarningCache=gE;var _2=function(){function t(r,i,s,o,a,l){if(l!==v2){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:yE,resetWarningCache:gE};return n.PropTypes=n,n};mE.exports=_2();var w2=mE.exports;const K=Fs(w2),E2=()=>g.jsxs("svg",{width:"20.000000",height:"20.000000",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[g.jsx("desc",{children:"Created with Pixso."}),g.jsx("defs",{children:g.jsx("clipPath",{id:"clip27_256",children:g.jsx("rect",{id:"log-in-01",width:"20.000000",height:"20.000000",fill:"white",fillOpacity:"0"})})}),g.jsx("rect",{id:"log-in-01",width:"20.000000",height:"20.000000",fill:"#FFFFFF",fillOpacity:"0"}),g.jsxs("g",{clipPath:"url(#clip27_256)",children:[g.jsx("path",{id:"Accent",d:"M12.5 2.5L13.5 2.5C14.9001 2.5 15.6002 2.5 16.135 2.77246C16.6053 3.01221 16.9878 3.39453 17.2275 3.86499C17.5 4.3999 17.5 5.09985 17.5 6.5L17.5 13.5C17.5 14.9001 17.5 15.6001 17.2275 16.135C16.9878 16.6055 16.6053 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5L12.5 17.5",stroke:"#F4C550",strokeOpacity:"1.000000",strokeWidth:"2.000000",strokeLinejoin:"round",strokeLinecap:"round"}),g.jsx("path",{id:"Icon",d:"M8.33337 5.83325L12.5 10L8.33337 14.1665M2.5 10L12.5 10",stroke:"#F4C550",strokeOpacity:"1.000000",strokeWidth:"2.000000",strokeLinejoin:"round"})]})]}),S2=()=>g.jsxs("svg",{width:"28.000000",height:"28.000000",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[g.jsx("desc",{children:"Created with Pixso."}),g.jsx("defs",{children:g.jsx("clipPath",{id:"clip4_550",children:g.jsx("rect",{id:"ukraine",width:"28.000000",height:"28.000000",fill:"white",fillOpacity:"0"})})}),g.jsx("rect",{id:"ukraine",width:"28.000000",height:"28.000000",fill:"#FFFFFF",fillOpacity:"0"}),g.jsxs("g",{clipPath:"url(#clip4_550)",children:[g.jsx("path",{id:"Vector",d:"M28 14C28 21.7319 21.732 28 14 28C6.26801 28 0 21.7319 0 14C0 6.26807 6.26801 0 14 0C21.732 0 28 6.26807 28 14Z",fill:"#FFDA44",fillOpacity:"1.000000",fillRule:"evenodd"}),g.jsx("path",{id:"Vector",d:"M0 14C0 6.26807 6.26807 0 14 0C21.7319 0 28 6.26807 28 14L0 14Z",fill:"#338AF3",fillOpacity:"1.000000",fillRule:"nonzero"})]})]});var lt=function(){return lt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},lt.apply(this,arguments)};function pm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function sa(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var C2=function(e,n,r,i){var s=r?r.call(i,e,n):void 0;if(s!==void 0)return!!s;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;var o=Object.keys(e),a=Object.keys(n);if(o.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(n),u=0;u<o.length;u++){var d=o[u];if(!l(d))return!1;var c=e[d],f=n[d];if(s=r?r.call(i,c,f,d):void 0,s===!1||s===void 0&&c!==f)return!1}return!0};const x2=Fs(C2);var fe="-ms-",Oo="-moz-",ee="-webkit-",vE="comm",Sc="rule",mm="decl",T2="@import",_E="@keyframes",I2="@layer",wE=Math.abs,gm=String.fromCharCode,Eh=Object.assign;function k2(t,e){return De(t,0)^45?(((e<<2^De(t,0))<<2^De(t,1))<<2^De(t,2))<<2^De(t,3):0}function EE(t){return t.trim()}function Tn(t,e){return(t=e.exec(t))?t[0]:t}function W(t,e,n){return t.replace(e,n)}function Ml(t,e,n){return t.indexOf(e,n)}function De(t,e){return t.charCodeAt(e)|0}function Cs(t,e,n){return t.slice(e,n)}function un(t){return t.length}function SE(t){return t.length}function vo(t,e){return e.push(t),t}function b2(t,e){return t.map(e).join("")}function g0(t,e){return t.filter(function(n){return!Tn(n,e)})}var Cc=1,xs=1,CE=0,Ut=0,Ie=0,Vs="";function xc(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Cc,column:xs,length:o,return:"",siblings:a}}function Zn(t,e){return Eh(xc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Fi(t){for(;t.root;)t=Zn(t.root,{children:[t]});vo(t,t.siblings)}function P2(){return Ie}function R2(){return Ie=Ut>0?De(Vs,--Ut):0,xs--,Ie===10&&(xs=1,Cc--),Ie}function Jt(){return Ie=Ut<CE?De(Vs,Ut++):0,xs++,Ie===10&&(xs=1,Cc++),Ie}function si(){return De(Vs,Ut)}function Fl(){return Ut}function Tc(t,e){return Cs(Vs,t,e)}function Sh(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function O2(t){return Cc=xs=1,CE=un(Vs=t),Ut=0,[]}function N2(t){return Vs="",t}function zd(t){return EE(Tc(Ut-1,Ch(t===91?t+2:t===40?t+1:t)))}function A2(t){for(;(Ie=si())&&Ie<33;)Jt();return Sh(t)>2||Sh(Ie)>3?"":" "}function L2(t,e){for(;--e&&Jt()&&!(Ie<48||Ie>102||Ie>57&&Ie<65||Ie>70&&Ie<97););return Tc(t,Fl()+(e<6&&si()==32&&Jt()==32))}function Ch(t){for(;Jt();)switch(Ie){case t:return Ut;case 34:case 39:t!==34&&t!==39&&Ch(Ie);break;case 40:t===41&&Ch(t);break;case 92:Jt();break}return Ut}function D2(t,e){for(;Jt()&&t+Ie!==57;)if(t+Ie===84&&si()===47)break;return"/*"+Tc(e,Ut-1)+"*"+gm(t===47?t:Jt())}function M2(t){for(;!Sh(si());)Jt();return Tc(t,Ut)}function F2(t){return N2(jl("",null,null,null,[""],t=O2(t),0,[0],t))}function jl(t,e,n,r,i,s,o,a,l){for(var u=0,d=0,c=o,f=0,p=0,v=0,_=1,E=1,m=1,h=0,y="",w=i,T=s,S=r,x=y;E;)switch(v=h,h=Jt()){case 40:if(v!=108&&De(x,c-1)==58){Ml(x+=W(zd(h),"&","&\f"),"&\f",wE(u?a[u-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:x+=zd(h);break;case 9:case 10:case 13:case 32:x+=A2(v);break;case 92:x+=L2(Fl()-1,7);continue;case 47:switch(si()){case 42:case 47:vo(j2(D2(Jt(),Fl()),e,n,l),l);break;default:x+="/"}break;case 123*_:a[u++]=un(x)*m;case 125*_:case 59:case 0:switch(h){case 0:case 125:E=0;case 59+d:m==-1&&(x=W(x,/\f/g,"")),p>0&&un(x)-c&&vo(p>32?v0(x+";",r,n,c-1,l):v0(W(x," ","")+";",r,n,c-2,l),l);break;case 59:x+=";";default:if(vo(S=y0(x,e,n,u,d,i,a,y,w=[],T=[],c,s),s),h===123)if(d===0)jl(x,e,S,S,w,s,c,a,T);else switch(f===99&&De(x,3)===110?100:f){case 100:case 108:case 109:case 115:jl(t,S,S,r&&vo(y0(t,S,S,0,0,i,a,y,i,w=[],c,T),T),i,T,c,a,r?w:T);break;default:jl(x,S,S,S,[""],T,0,a,T)}}u=d=p=0,_=m=1,y=x="",c=o;break;case 58:c=1+un(x),p=v;default:if(_<1){if(h==123)--_;else if(h==125&&_++==0&&R2()==125)continue}switch(x+=gm(h),h*_){case 38:m=d>0?1:(x+="\f",-1);break;case 44:a[u++]=(un(x)-1)*m,m=1;break;case 64:si()===45&&(x+=zd(Jt())),f=si(),d=c=un(y=x+=M2(Fl())),h++;break;case 45:v===45&&un(x)==2&&(_=0)}}return s}function y0(t,e,n,r,i,s,o,a,l,u,d,c){for(var f=i-1,p=i===0?s:[""],v=SE(p),_=0,E=0,m=0;_<r;++_)for(var h=0,y=Cs(t,f+1,f=wE(E=o[_])),w=t;h<v;++h)(w=EE(E>0?p[h]+" "+y:W(y,/&\f/g,p[h])))&&(l[m++]=w);return xc(t,e,n,i===0?Sc:a,l,u,d,c)}function j2(t,e,n,r){return xc(t,e,n,vE,gm(P2()),Cs(t,2,-2),0,r)}function v0(t,e,n,r,i){return xc(t,e,n,mm,Cs(t,0,r),Cs(t,r+1,-1),r,i)}function xE(t,e,n){switch(k2(t,e)){case 5103:return ee+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ee+t+t;case 4789:return Oo+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ee+t+Oo+t+fe+t+t;case 5936:switch(De(t,e+11)){case 114:return ee+t+fe+W(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ee+t+fe+W(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ee+t+fe+W(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ee+t+fe+t+t;case 6165:return ee+t+fe+"flex-"+t+t;case 5187:return ee+t+W(t,/(\w+).+(:[^]+)/,ee+"box-$1$2"+fe+"flex-$1$2")+t;case 5443:return ee+t+fe+"flex-item-"+W(t,/flex-|-self/g,"")+(Tn(t,/flex-|baseline/)?"":fe+"grid-row-"+W(t,/flex-|-self/g,""))+t;case 4675:return ee+t+fe+"flex-line-pack"+W(t,/align-content|flex-|-self/g,"")+t;case 5548:return ee+t+fe+W(t,"shrink","negative")+t;case 5292:return ee+t+fe+W(t,"basis","preferred-size")+t;case 6060:return ee+"box-"+W(t,"-grow","")+ee+t+fe+W(t,"grow","positive")+t;case 4554:return ee+W(t,/([^-])(transform)/g,"$1"+ee+"$2")+t;case 6187:return W(W(W(t,/(zoom-|grab)/,ee+"$1"),/(image-set)/,ee+"$1"),t,"")+t;case 5495:case 3959:return W(t,/(image-set\([^]*)/,ee+"$1$`$1");case 4968:return W(W(t,/(.+:)(flex-)?(.*)/,ee+"box-pack:$3"+fe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ee+t+t;case 4200:if(!Tn(t,/flex-|baseline/))return fe+"grid-column-align"+Cs(t,e)+t;break;case 2592:case 3360:return fe+W(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Tn(r.props,/grid-\w+-end/)})?~Ml(t+(n=n[e].value),"span",0)?t:fe+W(t,"-start","")+t+fe+"grid-row-span:"+(~Ml(n,"span",0)?Tn(n,/\d+/):+Tn(n,/\d+/)-+Tn(t,/\d+/))+";":fe+W(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Tn(r.props,/grid-\w+-start/)})?t:fe+W(W(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return W(t,/(.+)-inline(.+)/,ee+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(un(t)-1-e>6)switch(De(t,e+1)){case 109:if(De(t,e+4)!==45)break;case 102:return W(t,/(.+:)(.+)-([^]+)/,"$1"+ee+"$2-$3$1"+Oo+(De(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Ml(t,"stretch",0)?xE(W(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return W(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return fe+i+":"+s+u+(o?fe+i+"-span:"+(a?l:+l-+s)+u:"")+t});case 4949:if(De(t,e+6)===121)return W(t,":",":"+ee)+t;break;case 6444:switch(De(t,De(t,14)===45?18:11)){case 120:return W(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ee+(De(t,14)===45?"inline-":"")+"box$3$1"+ee+"$2$3$1"+fe+"$2box$3")+t;case 100:return W(t,":",":"+fe)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return W(t,"scroll-","scroll-snap-")+t}return t}function Iu(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function $2(t,e,n,r){switch(t.type){case I2:if(t.children.length)break;case T2:case mm:return t.return=t.return||t.value;case vE:return"";case _E:return t.return=t.value+"{"+Iu(t.children,r)+"}";case Sc:if(!un(t.value=t.props.join(",")))return""}return un(n=Iu(t.children,r))?t.return=t.value+"{"+n+"}":""}function U2(t){var e=SE(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function z2(t){return function(e){e.root||(e=e.return)&&t(e)}}function B2(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case mm:t.return=xE(t.value,t.length,n);return;case _E:return Iu([Zn(t,{value:W(t.value,"@","@"+ee)})],r);case Sc:if(t.length)return b2(n=t.props,function(i){switch(Tn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Fi(Zn(t,{props:[W(i,/:(read-\w+)/,":"+Oo+"$1")]})),Fi(Zn(t,{props:[i]})),Eh(t,{props:g0(n,r)});break;case"::placeholder":Fi(Zn(t,{props:[W(i,/:(plac\w+)/,":"+ee+"input-$1")]})),Fi(Zn(t,{props:[W(i,/:(plac\w+)/,":"+Oo+"$1")]})),Fi(Zn(t,{props:[W(i,/:(plac\w+)/,fe+"input-$1")]})),Fi(Zn(t,{props:[i]})),Eh(t,{props:g0(n,r)});break}return""})}}var W2={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},vt={},Ts=typeof process<"u"&&vt!==void 0&&(vt.REACT_APP_SC_ATTR||vt.SC_ATTR)||"data-styled",TE="active",IE="data-styled-version",Ic="6.1.8",ym=`/*!sc*/
`,vm=typeof window<"u"&&"HTMLElement"in window,V2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&vt!==void 0&&vt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&vt.REACT_APP_SC_DISABLE_SPEEDY!==""?vt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&vt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&vt!==void 0&&vt.SC_DISABLE_SPEEDY!==void 0&&vt.SC_DISABLE_SPEEDY!==""&&vt.SC_DISABLE_SPEEDY!=="false"&&vt.SC_DISABLE_SPEEDY),kc=Object.freeze([]),Is=Object.freeze({});function H2(t,e,n){return n===void 0&&(n=Is),t.theme!==n.theme&&t.theme||e||n.theme}var kE=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),G2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,K2=/(^-|-$)/g;function _0(t){return t.replace(G2,"-").replace(K2,"")}var q2=/(a)(d)/gi,fl=52,w0=function(t){return String.fromCharCode(t+(t>25?39:97))};function xh(t){var e,n="";for(e=Math.abs(t);e>fl;e=e/fl|0)n=w0(e%fl)+n;return(w0(e%fl)+n).replace(q2,"$1-$2")}var Bd,bE=5381,Ji=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},PE=function(t){return Ji(bE,t)};function RE(t){return xh(PE(t)>>>0)}function Y2(t){return t.displayName||t.name||"Component"}function Wd(t){return typeof t=="string"&&!0}var OE=typeof Symbol=="function"&&Symbol.for,NE=OE?Symbol.for("react.memo"):60115,Q2=OE?Symbol.for("react.forward_ref"):60112,X2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},J2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},AE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Z2=((Bd={})[Q2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Bd[NE]=AE,Bd);function E0(t){return("type"in(e=t)&&e.type.$$typeof)===NE?AE:"$$typeof"in t?Z2[t.$$typeof]:X2;var e}var eP=Object.defineProperty,tP=Object.getOwnPropertyNames,S0=Object.getOwnPropertySymbols,nP=Object.getOwnPropertyDescriptor,rP=Object.getPrototypeOf,C0=Object.prototype;function LE(t,e,n){if(typeof e!="string"){if(C0){var r=rP(e);r&&r!==C0&&LE(t,r,n)}var i=tP(e);S0&&(i=i.concat(S0(e)));for(var s=E0(t),o=E0(e),a=0;a<i.length;++a){var l=i[a];if(!(l in J2||n&&n[l]||o&&l in o||s&&l in s)){var u=nP(e,l);try{eP(t,l,u)}catch{}}}}return t}function ks(t){return typeof t=="function"}function _m(t){return typeof t=="object"&&"styledComponentId"in t}function ei(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Th(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function oa(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Ih(t,e,n){if(n===void 0&&(n=!1),!n&&!oa(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Ih(t[r],e[r]);else if(oa(e))for(var r in e)t[r]=Ih(t[r],e[r]);return t}function wm(t,e){Object.defineProperty(t,"toString",{value:e})}function Ra(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var iP=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Ra(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(ym);return n},t}(),$l=new Map,ku=new Map,Ul=1,hl=function(t){if($l.has(t))return $l.get(t);for(;ku.has(Ul);)Ul++;var e=Ul++;return $l.set(t,e),ku.set(e,t),e},sP=function(t,e){Ul=e+1,$l.set(t,e),ku.set(e,t)},oP="style[".concat(Ts,"][").concat(IE,'="').concat(Ic,'"]'),aP=new RegExp("^".concat(Ts,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),lP=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},uP=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(ym),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(aP);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(sP(d,u),lP(t,d,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function cP(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var DE=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Ts,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ts,TE),r.setAttribute(IE,Ic);var o=cP();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},dP=function(){function t(e){this.element=DE(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Ra(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),fP=function(){function t(e){this.element=DE(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),hP=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),x0=vm,pP={isServer:!vm,useCSSOMInjection:!V2},ME=function(){function t(e,n,r){e===void 0&&(e=Is),n===void 0&&(n={});var i=this;this.options=lt(lt({},pP),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&vm&&x0&&(x0=!1,function(s){for(var o=document.querySelectorAll(oP),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Ts)!==TE&&(uP(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),wm(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(c){var f=function(m){return ku.get(m)}(c);if(f===void 0)return"continue";var p=s.names.get(f),v=o.getGroup(c);if(p===void 0||v.length===0)return"continue";var _="".concat(Ts,".g").concat(c,'[id="').concat(f,'"]'),E="";p!==void 0&&p.forEach(function(m){m.length>0&&(E+="".concat(m,","))}),l+="".concat(v).concat(_,'{content:"').concat(E,'"}').concat(ym)},d=0;d<a;d++)u(d);return l}(i)})}return t.registerId=function(e){return hl(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(lt(lt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new hP(i):r?new dP(i):new fP(i)}(this.options),new iP(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(hl(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(hl(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(hl(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),mP=/&/g,gP=/^\s*\/\/.*$/gm;function FE(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=FE(n.children,e)),n})}function jE(t){var e,n,r,i=t===void 0?Is:t,s=i.options,o=s===void 0?Is:s,a=i.plugins,l=a===void 0?kc:a,u=function(f,p,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(e):f},d=l.slice();d.push(function(f){f.type===Sc&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(mP,n).replace(r,u))}),o.prefix&&d.push(B2),d.push($2);var c=function(f,p,v,_){p===void 0&&(p=""),v===void 0&&(v=""),_===void 0&&(_="&"),e=_,n=p,r=new RegExp("\\".concat(n,"\\b"),"g");var E=f.replace(gP,""),m=F2(v||p?"".concat(v," ").concat(p," { ").concat(E," }"):E);o.namespace&&(m=FE(m,o.namespace));var h=[];return Iu(m,U2(d.concat(z2(function(y){return h.push(y)})))),h};return c.hash=l.length?l.reduce(function(f,p){return p.name||Ra(15),Ji(f,p.name)},bE).toString():"",c}var yP=new ME,kh=jE(),Em=gn.createContext({shouldForwardProp:void 0,styleSheet:yP,stylis:kh});Em.Consumer;var vP=gn.createContext(void 0);function bh(){return C.useContext(Em)}function _P(t){var e=C.useState(t.stylisPlugins),n=e[0],r=e[1],i=bh().styleSheet,s=C.useMemo(function(){var l=i;return t.sheet?l=t.sheet:t.target&&(l=l.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(l=l.reconstructWithOptions({useCSSOMInjection:!1})),l},[t.disableCSSOMInjection,t.sheet,t.target,i]),o=C.useMemo(function(){return jE({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:n})},[t.enableVendorPrefixes,t.namespace,n]);C.useEffect(function(){x2(n,t.stylisPlugins)||r(t.stylisPlugins)},[t.stylisPlugins]);var a=C.useMemo(function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:s,stylis:o}},[t.shouldForwardProp,s,o]);return gn.createElement(Em.Provider,{value:a},gn.createElement(vP.Provider,{value:o},t.children))}var $E=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=kh);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,wm(this,function(){throw Ra(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=kh),this.name+e.hash},t}(),wP=function(t){return t>="A"&&t<="Z"};function T0(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;wP(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var UE=function(t){return t==null||t===!1||t===""},zE=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!UE(s)&&(Array.isArray(s)&&s.isCss||ks(s)?r.push("".concat(T0(i),":"),s,";"):oa(s)?r.push.apply(r,sa(sa(["".concat(i," {")],zE(s),!1),["}"],!1)):r.push("".concat(T0(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in W2||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function oi(t,e,n,r){if(UE(t))return[];if(_m(t))return[".".concat(t.styledComponentId)];if(ks(t)){if(!ks(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return oi(i,e,n,r)}var s;return t instanceof $E?n?(t.inject(n,r),[t.getName(r)]):[t]:oa(t)?zE(t):Array.isArray(t)?Array.prototype.concat.apply(kc,t.map(function(o){return oi(o,e,n,r)})):[t.toString()]}function EP(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ks(n)&&!_m(n))return!1}return!0}var SP=PE(Ic),CP=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&EP(e),this.componentId=n,this.baseHash=Ji(SP,n),this.baseStyle=r,ME.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ei(i,this.staticRulesId);else{var s=Th(oi(this.rules,e,n,r)),o=xh(Ji(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=ei(i,o),this.staticRulesId=o}else{for(var l=Ji(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var c=this.rules[d];if(typeof c=="string")u+=c;else if(c){var f=Th(oi(c,e,n,r));l=Ji(l,f+d),u+=f}}if(u){var p=xh(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,r(u,".".concat(p),void 0,this.componentId)),i=ei(i,p)}}return i},t}(),BE=gn.createContext(void 0);BE.Consumer;var Vd={};function xP(t,e,n){var r=_m(t),i=t,s=!Wd(t),o=e.attrs,a=o===void 0?kc:o,l=e.componentId,u=l===void 0?function(w,T){var S=typeof w!="string"?"sc":_0(w);Vd[S]=(Vd[S]||0)+1;var x="".concat(S,"-").concat(RE(Ic+S+Vd[S]));return T?"".concat(T,"-").concat(x):x}(e.displayName,e.parentComponentId):l,d=e.displayName,c=d===void 0?function(w){return Wd(w)?"styled.".concat(w):"Styled(".concat(Y2(w),")")}(t):d,f=e.displayName&&e.componentId?"".concat(_0(e.displayName),"-").concat(e.componentId):e.componentId||u,p=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,v=e.shouldForwardProp;if(r&&i.shouldForwardProp){var _=i.shouldForwardProp;if(e.shouldForwardProp){var E=e.shouldForwardProp;v=function(w,T){return _(w,T)&&E(w,T)}}else v=_}var m=new CP(n,f,r?i.componentStyle:void 0);function h(w,T){return function(S,x,k){var L=S.attrs,F=S.componentStyle,B=S.defaultProps,Nt=S.foldedComponentIds,ae=S.styledComponentId,gt=S.target,_n=gn.useContext(BE),Wr=bh(),wn=S.shouldForwardProp||Wr.shouldForwardProp,O=H2(x,_n,B)||Is,M=function(Ze,He,yt){for(var Yn,rn=lt(lt({},He),{className:void 0,theme:yt}),Di=0;Di<Ze.length;Di+=1){var Qn=ks(Yn=Ze[Di])?Yn(rn):Yn;for(var sn in Qn)rn[sn]=sn==="className"?ei(rn[sn],Qn[sn]):sn==="style"?lt(lt({},rn[sn]),Qn[sn]):Qn[sn]}return He.className&&(rn.className=ei(rn.className,He.className)),rn}(L,x,O),U=M.as||gt,J={};for(var Q in M)M[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"&&M.theme===O||(Q==="forwardedAs"?J.as=M.forwardedAs:wn&&!wn(Q,U)||(J[Q]=M[Q]));var nn=function(Ze,He){var yt=bh(),Yn=Ze.generateAndInjectStyles(He,yt.styleSheet,yt.stylis);return Yn}(F,M),Je=ei(Nt,ae);return nn&&(Je+=" "+nn),M.className&&(Je+=" "+M.className),J[Wd(U)&&!kE.has(U)?"class":"className"]=Je,J.ref=k,C.createElement(U,J)}(y,w,T)}h.displayName=c;var y=gn.forwardRef(h);return y.attrs=p,y.componentStyle=m,y.displayName=c,y.shouldForwardProp=v,y.foldedComponentIds=r?ei(i.foldedComponentIds,i.styledComponentId):"",y.styledComponentId=f,y.target=r?i.target:t,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(T){for(var S=[],x=1;x<arguments.length;x++)S[x-1]=arguments[x];for(var k=0,L=S;k<L.length;k++)Ih(T,L[k],!0);return T}({},i.defaultProps,w):w}}),wm(y,function(){return".".concat(y.styledComponentId)}),s&&LE(y,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function I0(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var k0=function(t){return Object.assign(t,{isCss:!0})};function bs(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(ks(t)||oa(t))return k0(oi(I0(kc,sa([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?oi(r):k0(oi(I0(r,e)))}function Ph(t,e,n){if(n===void 0&&(n=Is),!e)throw Ra(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,bs.apply(void 0,sa([i],s,!1)))};return r.attrs=function(i){return Ph(t,e,lt(lt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Ph(t,e,lt(lt({},n),i))},r}var WE=function(t){return Ph(xP,t)},P=WE;kE.forEach(function(t){P[t]=WE(t)});function bc(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Th(bs.apply(void 0,sa([t],e,!1))),i=RE(r);return new $E(i,r)}const ge={WHITE:"#FFFFFF",YELLOW:"#F4C550",LIGHT_YELLOW:"#FBE9BA",GREEN:"#9FBAAE",LIGHT_GREEN:"#CBDED3",BLUE:"#9FB7CE",LIGHT:"#BFD6EA",PEACH:"#F0AA8D",LIGHT_PEACH:"#F4C8BA",ROSE:"#E0A39A",LIGHT_ROSE:"#F2C0BD",BLACK_TEXT:"#121417",LIGHT_BLACK_TEXT:"rgba(18, 20, 23, 0.2)",YELLOW_BUTTON:"#F4C550",YELLOW_HOVER_BUTTON:"#FFDC86",GREY_LABEL:"#8A8A89",SILVER_BACKGROUND:"#F8F8F8"},TP=P(hm)`
  height: 28px;
`,IP=P.header`
  max-width: 1184px;
  //height: 48px;
  margin: 0 auto;
  display: flex;
  gap: 28px;
  padding: 20px 64px;
  justify-content: center;
`,kP=P(hm)`
  color: rgb(18, 20, 23);
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.333px;
`,bP=P.div`
  height: 48px;
  display: flex;
  align-items: center;
  gap: 8px;
`,Hd=P(hm)`
  color: ${ge.BLACK_TEXT};
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  max-width: 66px;
  &.active {
    font-weight: 500;
  }
`,PP=P.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,RP=P.button`
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
`,OP=P.button`
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
`,NP=P.span`
  max-width: 20px;
  height: 20px;
`,AP=P.div`
  display: flex;
  gap: 390px;
  align-items: center;
`,LP=P.div`
  display: flex;
  gap: 268px;
  align-items: center;
`;var VE={exports:{}},HE={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oa=C;function DP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var MP=typeof Object.is=="function"?Object.is:DP,FP=Oa.useSyncExternalStore,jP=Oa.useRef,$P=Oa.useEffect,UP=Oa.useMemo,zP=Oa.useDebugValue;HE.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=jP(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=UP(function(){function l(p){if(!u){if(u=!0,d=p,p=r(p),i!==void 0&&o.hasValue){var v=o.value;if(i(v,p))return c=v}return c=p}if(v=c,MP(d,p))return v;var _=r(p);return i!==void 0&&i(v,_)?v:(d=p,c=_)}var u=!1,d,c,f=n===void 0?null:n;return[function(){return l(e())},f===null?void 0:function(){return l(f())}]},[e,n,r,i]);var a=FP(t,s[0],s[1]);return $P(function(){o.hasValue=!0,o.value=a},[a]),zP(a),a};VE.exports=HE;var BP=VE.exports,Et="default"in Sf?gn:Sf,b0=Symbol.for("react-redux-context"),P0=typeof globalThis<"u"?globalThis:{};function WP(){if(!Et.createContext)return{};const t=P0[b0]??(P0[b0]=new Map);let e=t.get(Et.createContext);return e||(e=Et.createContext(null),t.set(Et.createContext,e)),e}var Rr=WP(),VP=()=>{throw new Error("uSES not initialized!")};function Sm(t=Rr){return function(){return Et.useContext(t)}}var GE=Sm(),KE=VP,HP=t=>{KE=t},GP=(t,e)=>t===e;function KP(t=Rr){const e=t===Rr?GE:Sm(t),n=(r,i={})=>{const{equalityFn:s=GP,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:l,getServerState:u,stabilityCheck:d,identityFunctionCheck:c}=e();Et.useRef(!0);const f=Et.useCallback({[r.name](v){return r(v)}}[r.name],[r,d,o.stabilityCheck]),p=KE(l.addNestedSub,a.getState,u||a.getState,f,s);return Et.useDebugValue(p),p};return Object.assign(n,{withTypes:()=>n}),n}var qE=KP();function qP(t){t()}function YP(){let t=null,e=null;return{clear(){t=null,e=null},notify(){qP(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var R0={notify(){},get:()=>[]};function QP(t,e){let n,r=R0,i=0,s=!1;function o(_){d();const E=r.subscribe(_);let m=!1;return()=>{m||(m=!0,E(),c())}}function a(){r.notify()}function l(){v.onStateChange&&v.onStateChange()}function u(){return s}function d(){i++,n||(n=e?e.addNestedSub(l):t.subscribe(l),r=YP())}function c(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=R0)}function f(){s||(s=!0,d())}function p(){s&&(s=!1,c())}const v={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:f,tryUnsubscribe:p,getListeners:()=>r};return v}var XP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",JP=XP?Et.useLayoutEffect:Et.useEffect;function ZP({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=Et.useMemo(()=>{const u=QP(t);return{store:t,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[t,r,i,s]),a=Et.useMemo(()=>t.getState(),[t]);JP(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==t.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const l=e||Rr;return Et.createElement(l.Provider,{value:o},n)}var eR=ZP;function YE(t=Rr){const e=t===Rr?GE:Sm(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var tR=YE();function nR(t=Rr){const e=t===Rr?tR:YE(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var Na=nR();HP(BP.useSyncExternalStoreWithSelector);const Cm=()=>{const{name:t,email:e,token:n,id:r,isLoggedIn:i,isRefreshing:s}=qE(o=>o.auth);return{isRefreshing:s,isLoggedIn:i,email:e,token:n,name:t,id:r}};function $e(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var rR=typeof Symbol=="function"&&Symbol.observable||"@@observable",O0=rR,Gd=()=>Math.random().toString(36).substring(7).split("").join("."),iR={INIT:`@@redux/INIT${Gd()}`,REPLACE:`@@redux/REPLACE${Gd()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Gd()}`},bu=iR;function xm(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function Tm(t,e,n){if(typeof t!="function")throw new Error($e(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error($e(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error($e(1));return n(Tm)(t,e)}let r=t,i=e,s=new Map,o=s,a=0,l=!1;function u(){o===s&&(o=new Map,s.forEach((E,m)=>{o.set(m,E)}))}function d(){if(l)throw new Error($e(3));return i}function c(E){if(typeof E!="function")throw new Error($e(4));if(l)throw new Error($e(5));let m=!0;u();const h=a++;return o.set(h,E),function(){if(m){if(l)throw new Error($e(6));m=!1,u(),o.delete(h),s=null}}}function f(E){if(!xm(E))throw new Error($e(7));if(typeof E.type>"u")throw new Error($e(8));if(typeof E.type!="string")throw new Error($e(17));if(l)throw new Error($e(9));try{l=!0,i=r(i,E)}finally{l=!1}return(s=o).forEach(h=>{h()}),E}function p(E){if(typeof E!="function")throw new Error($e(10));r=E,f({type:bu.REPLACE})}function v(){const E=c;return{subscribe(m){if(typeof m!="object"||m===null)throw new Error($e(11));function h(){const w=m;w.next&&w.next(d())}return h(),{unsubscribe:E(h)}},[O0](){return this}}}return f({type:bu.INIT}),{dispatch:f,subscribe:c,getState:d,replaceReducer:p,[O0]:v}}function sR(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:bu.INIT})>"u")throw new Error($e(12));if(typeof n(void 0,{type:bu.PROBE_UNKNOWN_ACTION()})>"u")throw new Error($e(13))})}function QE(t){const e=Object.keys(t),n={};for(let s=0;s<e.length;s++){const o=e[s];typeof t[o]=="function"&&(n[o]=t[o])}const r=Object.keys(n);let i;try{sR(n)}catch(s){i=s}return function(o={},a){if(i)throw i;let l=!1;const u={};for(let d=0;d<r.length;d++){const c=r[d],f=n[c],p=o[c],v=f(p,a);if(typeof v>"u")throw a&&a.type,new Error($e(14));u[c]=v,l=l||v!==p}return l=l||r.length!==Object.keys(o).length,l?u:o}}function Pu(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function oR(...t){return e=>(n,r)=>{const i=e(n,r);let s=()=>{throw new Error($e(15))};const o={getState:i.getState,dispatch:(l,...u)=>s(l,...u)},a=t.map(l=>l(o));return s=Pu(...a)(i.dispatch),{...i,dispatch:s}}}function aR(t){return xm(t)&&"type"in t&&typeof t.type=="string"}var XE=Symbol.for("immer-nothing"),N0=Symbol.for("immer-draftable"),kt=Symbol.for("immer-state");function Gt(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var Ps=Object.getPrototypeOf;function Or(t){return!!t&&!!t[kt]}function $n(t){var e;return t?JE(t)||Array.isArray(t)||!!t[N0]||!!((e=t.constructor)!=null&&e[N0])||Rc(t)||Oc(t):!1}var lR=Object.prototype.constructor.toString();function JE(t){if(!t||typeof t!="object")return!1;const e=Ps(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===lR}function aa(t,e){Pc(t)===0?Object.entries(t).forEach(([n,r])=>{e(n,r,t)}):t.forEach((n,r)=>e(r,n,t))}function Pc(t){const e=t[kt];return e?e.type_:Array.isArray(t)?1:Rc(t)?2:Oc(t)?3:0}function Rh(t,e){return Pc(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function ZE(t,e,n){const r=Pc(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function uR(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function Rc(t){return t instanceof Map}function Oc(t){return t instanceof Set}function Kr(t){return t.copy_||t.base_}function Oh(t,e){if(Rc(t))return new Map(t);if(Oc(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);if(!e&&JE(t))return Ps(t)?{...t}:Object.assign(Object.create(null),t);const n=Object.getOwnPropertyDescriptors(t);delete n[kt];let r=Reflect.ownKeys(n);for(let i=0;i<r.length;i++){const s=r[i],o=n[s];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(n[s]={configurable:!0,writable:!0,enumerable:o.enumerable,value:t[s]})}return Object.create(Ps(t),n)}function Im(t,e=!1){return Nc(t)||Or(t)||!$n(t)||(Pc(t)>1&&(t.set=t.add=t.clear=t.delete=cR),Object.freeze(t),e&&aa(t,(n,r)=>Im(r,!0))),t}function cR(){Gt(2)}function Nc(t){return Object.isFrozen(t)}var dR={};function mi(t){const e=dR[t];return e||Gt(0,t),e}var la;function eS(){return la}function fR(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function A0(t,e){e&&(mi("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function Nh(t){Ah(t),t.drafts_.forEach(hR),t.drafts_=null}function Ah(t){t===la&&(la=t.parent_)}function L0(t){return la=fR(la,t)}function hR(t){const e=t[kt];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function D0(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[kt].modified_&&(Nh(e),Gt(4)),$n(t)&&(t=Ru(e,t),e.parent_||Ou(e,t)),e.patches_&&mi("Patches").generateReplacementPatches_(n[kt].base_,t,e.patches_,e.inversePatches_)):t=Ru(e,n,[]),Nh(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==XE?t:void 0}function Ru(t,e,n){if(Nc(e))return e;const r=e[kt];if(!r)return aa(e,(i,s)=>M0(t,r,e,i,s,n)),e;if(r.scope_!==t)return e;if(!r.modified_)return Ou(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let s=i,o=!1;r.type_===3&&(s=new Set(i),i.clear(),o=!0),aa(s,(a,l)=>M0(t,r,i,a,l,n,o)),Ou(t,i,!1),n&&t.patches_&&mi("Patches").generatePatches_(r,n,t.patches_,t.inversePatches_)}return r.copy_}function M0(t,e,n,r,i,s,o){if(Or(i)){const a=s&&e&&e.type_!==3&&!Rh(e.assigned_,r)?s.concat(r):void 0,l=Ru(t,i,a);if(ZE(n,r,l),Or(l))t.canAutoFreeze_=!1;else return}else o&&n.add(i);if($n(i)&&!Nc(i)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;Ru(t,i),(!e||!e.scope_.parent_)&&Ou(t,i)}}function Ou(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&Im(e,n)}function pR(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:eS(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,s=km;n&&(i=[r],s=ua);const{revoke:o,proxy:a}=Proxy.revocable(i,s);return r.draft_=a,r.revoke_=o,a}var km={get(t,e){if(e===kt)return t;const n=Kr(t);if(!Rh(n,e))return mR(t,n,e);const r=n[e];return t.finalized_||!$n(r)?r:r===Kd(t.base_,e)?(qd(t),t.copy_[e]=Dh(r,t)):r},has(t,e){return e in Kr(t)},ownKeys(t){return Reflect.ownKeys(Kr(t))},set(t,e,n){const r=tS(Kr(t),e);if(r!=null&&r.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=Kd(Kr(t),e),s=i==null?void 0:i[kt];if(s&&s.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(uR(n,i)&&(n!==void 0||Rh(t.base_,e)))return!0;qd(t),Lh(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return Kd(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,qd(t),Lh(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=Kr(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){Gt(11)},getPrototypeOf(t){return Ps(t.base_)},setPrototypeOf(){Gt(12)}},ua={};aa(km,(t,e)=>{ua[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});ua.deleteProperty=function(t,e){return ua.set.call(this,t,e,void 0)};ua.set=function(t,e,n){return km.set.call(this,t[0],e,n,t[0])};function Kd(t,e){const n=t[kt];return(n?Kr(n):t)[e]}function mR(t,e,n){var i;const r=tS(e,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(t.draft_):void 0}function tS(t,e){if(!(e in t))return;let n=Ps(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Ps(n)}}function Lh(t){t.modified_||(t.modified_=!0,t.parent_&&Lh(t.parent_))}function qd(t){t.copy_||(t.copy_=Oh(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var gR=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const s=n;n=e;const o=this;return function(l=s,...u){return o.produce(l,d=>n.call(this,d,...u))}}typeof n!="function"&&Gt(6),r!==void 0&&typeof r!="function"&&Gt(7);let i;if($n(e)){const s=L0(this),o=Dh(e,void 0);let a=!0;try{i=n(o),a=!1}finally{a?Nh(s):Ah(s)}return A0(s,r),D0(i,s)}else if(!e||typeof e!="object"){if(i=n(e),i===void 0&&(i=e),i===XE&&(i=void 0),this.autoFreeze_&&Im(i,!0),r){const s=[],o=[];mi("Patches").generateReplacementPatches_(e,i,s,o),r(s,o)}return i}else Gt(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(o,...a)=>this.produceWithPatches(o,l=>e(l,...a));let r,i;return[this.produce(e,n,(o,a)=>{r=o,i=a}),r,i]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){$n(t)||Gt(8),Or(t)&&(t=nS(t));const e=L0(this),n=Dh(t,void 0);return n[kt].isManual_=!0,Ah(e),n}finishDraft(t,e){const n=t&&t[kt];(!n||!n.isManual_)&&Gt(9);const{scope_:r}=n;return A0(r,e),D0(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=mi("Patches").applyPatches_;return Or(t)?r(t,e):this.produce(t,i=>r(i,e))}};function Dh(t,e){const n=Rc(t)?mi("MapSet").proxyMap_(t,e):Oc(t)?mi("MapSet").proxySet_(t,e):pR(t,e);return(e?e.scope_:eS()).drafts_.push(n),n}function nS(t){return Or(t)||Gt(10,t),rS(t)}function rS(t){if(!$n(t)||Nc(t))return t;const e=t[kt];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=Oh(t,e.scope_.immer_.useStrictShallowCopy_)}else n=Oh(t,!0);return aa(n,(r,i)=>{ZE(n,r,rS(i))}),e&&(e.finalized_=!1),n}var bt=new gR,iS=bt.produce;bt.produceWithPatches.bind(bt);bt.setAutoFreeze.bind(bt);bt.setUseStrictShallowCopy.bind(bt);bt.applyPatches.bind(bt);bt.createDraft.bind(bt);bt.finishDraft.bind(bt);function yR(t,e=`expected a function, instead received ${typeof t}`){if(typeof t!="function")throw new TypeError(e)}function vR(t,e=`expected an object, instead received ${typeof t}`){if(typeof t!="object")throw new TypeError(e)}function _R(t,e="expected all items to be functions, instead received the following types: "){if(!t.every(n=>typeof n=="function")){const n=t.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${e}[${n}]`)}}var F0=t=>Array.isArray(t)?t:[t];function wR(t){const e=Array.isArray(t[0])?t[0]:t;return _R(e,"createSelector expects all input-selectors to be functions, but received the following types: "),e}function ER(t,e){const n=[],{length:r}=t;for(let i=0;i<r;i++)n.push(t[i].apply(null,e));return n}var SR=class{constructor(t){this.value=t}deref(){return this.value}},CR=typeof WeakRef<"u"?WeakRef:SR,xR=0,j0=1;function pl(){return{s:xR,v:void 0,o:null,p:null}}function bm(t,e={}){let n=pl();const{resultEqualityCheck:r}=e;let i,s=0;function o(){var c;let a=n;const{length:l}=arguments;for(let f=0,p=l;f<p;f++){const v=arguments[f];if(typeof v=="function"||typeof v=="object"&&v!==null){let _=a.o;_===null&&(a.o=_=new WeakMap);const E=_.get(v);E===void 0?(a=pl(),_.set(v,a)):a=E}else{let _=a.p;_===null&&(a.p=_=new Map);const E=_.get(v);E===void 0?(a=pl(),_.set(v,a)):a=E}}const u=a;let d;if(a.s===j0?d=a.v:(d=t.apply(null,arguments),s++),u.s=j0,r){const f=((c=i==null?void 0:i.deref)==null?void 0:c.call(i))??i;f!=null&&r(f,d)&&(d=f,s!==0&&s--),i=typeof d=="object"&&d!==null||typeof d=="function"?new CR(d):d}return u.v=d,d}return o.clearCache=()=>{n=pl(),o.resetResultsCount()},o.resultsCount=()=>s,o.resetResultsCount=()=>{s=0},o}function sS(t,...e){const n=typeof t=="function"?{memoize:t,memoizeOptions:e}:t,r=(...i)=>{let s=0,o=0,a,l={},u=i.pop();typeof u=="object"&&(l=u,u=i.pop()),yR(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const d={...n,...l},{memoize:c,memoizeOptions:f=[],argsMemoize:p=bm,argsMemoizeOptions:v=[],devModeChecks:_={}}=d,E=F0(f),m=F0(v),h=wR(i),y=c(function(){return s++,u.apply(null,arguments)},...E),w=p(function(){o++;const S=ER(h,arguments);return a=y.apply(null,S),a},...m);return Object.assign(w,{resultFunc:u,memoizedResultFunc:y,dependencies:h,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>a,recomputations:()=>s,resetRecomputations:()=>{s=0},memoize:c,argsMemoize:p})};return Object.assign(r,{withTypes:()=>r}),r}var TR=sS(bm),IR=Object.assign((t,e=TR)=>{vR(t,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof t}`);const n=Object.keys(t),r=n.map(s=>t[s]);return e(r,(...s)=>s.reduce((o,a,l)=>(o[n[l]]=a,o),{}))},{withTypes:()=>IR});function oS(t){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,t):i(s)}var kR=oS(),bR=oS,PR=(...t)=>{const e=sS(...t),n=Object.assign((...r)=>{const i=e(...r),s=(o,...a)=>i(Or(o)?nS(o):o,...a);return Object.assign(s,i),s},{withTypes:()=>n});return n};PR(bm);var RR=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Pu:Pu.apply(null,arguments)},OR=t=>t&&typeof t.match=="function";function An(t,e){function n(...r){if(e){let i=e(...r);if(!i)throw new Error(ht(0));return{type:t,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>aR(r)&&r.type===t,n}var aS=class _o extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,_o.prototype)}static get[Symbol.species](){return _o}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new _o(...e[0].concat(this)):new _o(...e.concat(this))}};function $0(t){return $n(t)?iS(t,()=>{}):t}function U0(t,e,n){if(t.has(e)){let i=t.get(e);return n.update&&(i=n.update(i,e,t),t.set(e,i)),i}if(!n.insert)throw new Error(ht(10));const r=n.insert(e,t);return t.set(e,r),r}function NR(t){return typeof t=="boolean"}var AR=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=e??{};let o=new aS;return n&&(NR(n)?o.push(kR):o.push(bR(n.extraArgument))),o},LR="RTK_autoBatch",lS=t=>e=>{setTimeout(e,t)},DR=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:lS(10),MR=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let i=!0,s=!1,o=!1;const a=new Set,l=t.type==="tick"?queueMicrotask:t.type==="raf"?DR:t.type==="callback"?t.queueNotification:lS(t.timeout),u=()=>{o=!1,s&&(s=!1,a.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const c=()=>i&&d(),f=r.subscribe(c);return a.add(d),()=>{f(),a.delete(d)}},dispatch(d){var c;try{return i=!((c=d==null?void 0:d.meta)!=null&&c[LR]),s=!i,s&&(o||(o=!0,l(u))),r.dispatch(d)}finally{i=!0}}})},FR=t=>function(n){const{autoBatch:r=!0}=n??{};let i=new aS(t);return r&&i.push(MR(typeof r=="object"?r:void 0)),i},jR=!0;function $R(t){const e=AR(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=t||{};let a;if(typeof n=="function")a=n;else if(xm(n))a=QE(n);else throw new Error(ht(1));let l;typeof r=="function"?l=r(e):l=e();let u=Pu;i&&(u=RR({trace:!jR,...typeof i=="object"&&i}));const d=oR(...l),c=FR(d);let f=typeof o=="function"?o(c):c();const p=u(...f);return Tm(a,s,p)}function uS(t){const e={},n=[];let r;const i={addCase(s,o){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(ht(28));if(a in e)throw new Error(ht(29));return e[a]=o,i},addMatcher(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return t(i),[e,n,r]}function UR(t){return typeof t=="function"}function zR(t,e){let[n,r,i]=uS(e),s;if(UR(t))s=()=>$0(t());else{const a=$0(t);s=()=>a}function o(a=s(),l){let u=[n[l.type],...r.filter(({matcher:d})=>d(l)).map(({reducer:d})=>d)];return u.filter(d=>!!d).length===0&&(u=[i]),u.reduce((d,c)=>{if(c)if(Or(d)){const p=c(d,l);return p===void 0?d:p}else{if($n(d))return iS(d,f=>c(f,l));{const f=c(d,l);if(f===void 0){if(d===null)return d;throw new Error(ht(9))}return f}}return d},a)}return o.getInitialState=s,o}var BR="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",cS=(t=21)=>{let e="",n=t;for(;n--;)e+=BR[Math.random()*64|0];return e},WR=(t,e)=>OR(t)?t.match(e):t(e);function VR(...t){return e=>t.some(n=>WR(n,e))}var HR=["name","message","stack","code"],Yd=class{constructor(t,e){hd(this,"_type");this.payload=t,this.meta=e}},z0=class{constructor(t,e){hd(this,"_type");this.payload=t,this.meta=e}},GR=t=>{if(typeof t=="object"&&t!==null){const e={};for(const n of HR)typeof t[n]=="string"&&(e[n]=t[n]);return e}return{message:String(t)}},Aa=(()=>{function t(e,n,r){const i=An(e+"/fulfilled",(l,u,d,c)=>({payload:l,meta:{...c||{},arg:d,requestId:u,requestStatus:"fulfilled"}})),s=An(e+"/pending",(l,u,d)=>({payload:void 0,meta:{...d||{},arg:u,requestId:l,requestStatus:"pending"}})),o=An(e+"/rejected",(l,u,d,c,f)=>({payload:c,error:(r&&r.serializeError||GR)(l||"Rejected"),meta:{...f||{},arg:d,requestId:u,rejectedWithValue:!!c,requestStatus:"rejected",aborted:(l==null?void 0:l.name)==="AbortError",condition:(l==null?void 0:l.name)==="ConditionError"}}));function a(l){return(u,d,c)=>{const f=r!=null&&r.idGenerator?r.idGenerator(l):cS(),p=new AbortController;let v,_;function E(h){_=h,p.abort()}const m=async function(){var w,T;let h;try{let S=(w=r==null?void 0:r.condition)==null?void 0:w.call(r,l,{getState:d,extra:c});if(qR(S)&&(S=await S),S===!1||p.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const x=new Promise((k,L)=>{v=()=>{L({name:"AbortError",message:_||"Aborted"})},p.signal.addEventListener("abort",v)});u(s(f,l,(T=r==null?void 0:r.getPendingMeta)==null?void 0:T.call(r,{requestId:f,arg:l},{getState:d,extra:c}))),h=await Promise.race([x,Promise.resolve(n(l,{dispatch:u,getState:d,extra:c,requestId:f,signal:p.signal,abort:E,rejectWithValue:(k,L)=>new Yd(k,L),fulfillWithValue:(k,L)=>new z0(k,L)})).then(k=>{if(k instanceof Yd)throw k;return k instanceof z0?i(k.payload,f,l,k.meta):i(k,f,l)})])}catch(S){h=S instanceof Yd?o(null,f,l,S.payload,S.meta):o(S,f,l)}finally{v&&p.signal.removeEventListener("abort",v)}return r&&!r.dispatchConditionRejection&&o.match(h)&&h.meta.condition||u(h),h}();return Object.assign(m,{abort:E,requestId:f,arg:l,unwrap(){return m.then(KR)}})}}return Object.assign(a,{pending:s,rejected:o,fulfilled:i,settled:VR(o,i),typePrefix:e})}return t.withTypes=()=>t,t})();function KR(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function qR(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var YR=Symbol.for("rtk-slice-createasyncthunk");function QR(t,e){return`${t}/${e}`}function XR({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[YR];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(ht(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(ZR()):i.reducers)||{},l=Object.keys(a),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(y,w){const T=typeof y=="string"?y:y.type;if(!T)throw new Error(ht(12));if(T in u.sliceCaseReducersByType)throw new Error(ht(13));return u.sliceCaseReducersByType[T]=w,d},addMatcher(y,w){return u.sliceMatchers.push({matcher:y,reducer:w}),d},exposeAction(y,w){return u.actionCreators[y]=w,d},exposeCaseReducer(y,w){return u.sliceCaseReducersByName[y]=w,d}};l.forEach(y=>{const w=a[y],T={reducerName:y,type:QR(s,y),createNotation:typeof i.reducers=="function"};tO(w)?rO(T,w,d,e):eO(T,w,d)});function c(){const[y={},w=[],T=void 0]=typeof i.extraReducers=="function"?uS(i.extraReducers):[i.extraReducers],S={...y,...u.sliceCaseReducersByType};return zR(i.initialState,x=>{for(let k in S)x.addCase(k,S[k]);for(let k of u.sliceMatchers)x.addMatcher(k.matcher,k.reducer);for(let k of w)x.addMatcher(k.matcher,k.reducer);T&&x.addDefaultCase(T)})}const f=y=>y,p=new Map;let v;function _(y,w){return v||(v=c()),v(y,w)}function E(){return v||(v=c()),v.getInitialState()}function m(y,w=!1){function T(x){let k=x[y];return typeof k>"u"&&w&&(k=E()),k}function S(x=f){const k=U0(p,w,{insert:()=>new WeakMap});return U0(k,x,{insert:()=>{const L={};for(const[F,B]of Object.entries(i.selectors??{}))L[F]=JR(B,x,E,w);return L}})}return{reducerPath:y,getSelectors:S,get selectors(){return S(T)},selectSlice:T}}const h={name:s,reducer:_,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:E,...m(o),injectInto(y,{reducerPath:w,...T}={}){const S=w??o;return y.inject({reducerPath:S,reducer:_},T),{...h,...m(S,!0)}}};return h}}function JR(t,e,n,r){function i(s,...o){let a=e(s);return typeof a>"u"&&r&&(a=n()),t(a,...o)}return i.unwrapped=t,i}var dS=XR();function ZR(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function eO({type:t,reducerName:e,createNotation:n},r,i){let s,o;if("reducer"in r){if(n&&!nO(r))throw new Error(ht(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(t,s).exposeCaseReducer(e,s).exposeAction(e,o?An(t,o):An(t))}function tO(t){return t._reducerDefinitionType==="asyncThunk"}function nO(t){return t._reducerDefinitionType==="reducerWithPrepare"}function rO({type:t,reducerName:e},n,r,i){if(!i)throw new Error(ht(18));const{payloadCreator:s,fulfilled:o,pending:a,rejected:l,settled:u,options:d}=n,c=i(t,s,d);r.exposeAction(e,c),o&&r.addCase(c.fulfilled,o),a&&r.addCase(c.pending,a),l&&r.addCase(c.rejected,l),u&&r.addMatcher(c.settled,u),r.exposeCaseReducer(e,{fulfilled:o||ml,pending:a||ml,rejected:l||ml,settled:u||ml})}function ml(){}var iO=(t,e)=>{if(typeof t!="function")throw new Error(ht(32))},Pm="listenerMiddleware",sO=t=>{let{type:e,actionCreator:n,matcher:r,predicate:i,effect:s}=t;if(e)i=An(e).match;else if(n)e=n.type,i=n.match;else if(r)i=r;else if(!i)throw new Error(ht(21));return iO(s),{predicate:i,type:e,effect:s}},oO=Object.assign(t=>{const{type:e,predicate:n,effect:r}=sO(t);return{id:cS(),effect:r,type:e,predicate:n,pending:new Set,unsubscribe:()=>{throw new Error(ht(22))}}},{withTypes:()=>oO}),aO=Object.assign(An(`${Pm}/add`),{withTypes:()=>aO});An(`${Pm}/removeAll`);var lO=Object.assign(An(`${Pm}/remove`),{withTypes:()=>lO});function ht(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var B0={};/**
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
 */const fS={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const R=function(t,e){if(!t)throw Hs(e)},Hs=function(t){return new Error("Firebase Database ("+fS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const hS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},uO=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Rm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=s>>2,c=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(f=64)),r.push(n[d],n[c],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uO(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||c==null)throw new cO;const f=s<<2|a>>4;if(r.push(f),u!==64){const p=a<<4&240|u>>2;if(r.push(p),c!==64){const v=u<<6&192|c;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class cO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pS=function(t){const e=hS(t);return Rm.encodeByteArray(e,!0)},Nu=function(t){return pS(t).replace(/\./g,"")},Au=function(t){try{return Rm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function dO(t){return mS(void 0,t)}function mS(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!fO(n)||(t[n]=mS(t[n],e[n]));return t}function fO(t){return t!=="__proto__"}/**
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
 */function hO(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const pO=()=>hO().__FIREBASE_DEFAULTS__,mO=()=>{if(typeof process>"u"||typeof B0>"u")return;const t=B0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},gO=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Au(t[1]);return e&&JSON.parse(e)},Om=()=>{try{return pO()||mO()||gO()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},gS=t=>{var e,n;return(n=(e=Om())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},yO=t=>{const e=gS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},yS=()=>{var t;return(t=Om())===null||t===void 0?void 0:t.config},vS=t=>{var e;return(e=Om())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Nm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function vO(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Nu(JSON.stringify(n)),Nu(JSON.stringify(o)),""].join(".")}/**
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
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Am(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function _O(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function _S(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wO(){const t=Xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wS(){return fS.NODE_ADMIN===!0}function EO(){try{return typeof indexedDB=="object"}catch{return!1}}function SO(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const CO="FirebaseError";class $r extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=CO,Object.setPrototypeOf(this,$r.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,La.prototype.create)}}class La{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?xO(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new $r(i,a,r)}}function xO(t,e){return t.replace(TO,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const TO=/\{\$([^}]+)}/g;/**
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
 */function ca(t){return JSON.parse(t)}function Pe(t){return JSON.stringify(t)}/**
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
 */const ES=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ca(Au(s[0])||""),n=ca(Au(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},IO=function(t){const e=ES(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},kO=function(t){const e=ES(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Hn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Rs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Mh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Lu(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Du(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(W0(s)&&W0(o)){if(!Du(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function W0(t){return t!==null&&typeof t=="object"}/**
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
 */function Gs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function wo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Eo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class bO{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const f=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=a^s&(o^a),d=1518500249):(u=s^o^a,d=1859775393):c<60?(u=s&o|a&(s|o),d=2400959708):(u=s^o^a,d=3395469782);const f=(i<<5|i>>>27)+u+l+d+r[c]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function PO(t,e){const n=new RO(t,e);return n.subscribe.bind(n)}class RO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");OO(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Qd),i.error===void 0&&(i.error=Qd),i.complete===void 0&&(i.complete=Qd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function OO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Qd(){}function SS(t,e){return`${t} failed: ${e} argument `}/**
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
 */const NO=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,R(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ac=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */class AO{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Nm;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(DO(e))try{this.getOrInitializeService({instanceIdentifier:qr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=qr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qr){return this.instances.has(e)}getOptions(e=qr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:LO(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qr){return this.component?this.component.multipleInstances?e:qr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function LO(t){return t===qr?void 0:t}function DO(t){return t.instantiationMode==="EAGER"}/**
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
 */class MO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new AO(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const FO={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},jO=se.INFO,$O={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},UO=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=$O[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lm{constructor(e){this.name=e,this._logLevel=jO,this._logHandler=UO,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?FO[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const zO=(t,e)=>e.some(n=>t instanceof n);let V0,H0;function BO(){return V0||(V0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function WO(){return H0||(H0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const CS=new WeakMap,Fh=new WeakMap,xS=new WeakMap,Xd=new WeakMap,Dm=new WeakMap;function VO(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Sr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&CS.set(n,t)}).catch(()=>{}),Dm.set(e,t),e}function HO(t){if(Fh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Fh.set(t,e)}let jh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function GO(t){jh=t(jh)}function KO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Jd(this),e,...n);return xS.set(r,e.sort?e.sort():[e]),Sr(r)}:WO().includes(t)?function(...e){return t.apply(Jd(this),e),Sr(CS.get(this))}:function(...e){return Sr(t.apply(Jd(this),e))}}function qO(t){return typeof t=="function"?KO(t):(t instanceof IDBTransaction&&HO(t),zO(t,BO())?new Proxy(t,jh):t)}function Sr(t){if(t instanceof IDBRequest)return VO(t);if(Xd.has(t))return Xd.get(t);const e=qO(t);return e!==t&&(Xd.set(t,e),Dm.set(e,t)),e}const Jd=t=>Dm.get(t);function YO(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Sr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Sr(o.result),l.oldVersion,l.newVersion,Sr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const QO=["get","getKey","getAll","getAllKeys","count"],XO=["put","add","delete","clear"],Zd=new Map;function G0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zd.get(e))return Zd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=XO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||QO.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Zd.set(e,s),s}GO(t=>({...t,get:(e,n,r)=>G0(e,n)||t.get(e,n,r),has:(e,n)=>!!G0(e,n)||t.has(e,n)}));/**
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
 */class JO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ZO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ZO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $h="@firebase/app",K0="0.9.28";/**
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
 */const yi=new Lm("@firebase/app"),eN="@firebase/app-compat",tN="@firebase/analytics-compat",nN="@firebase/analytics",rN="@firebase/app-check-compat",iN="@firebase/app-check",sN="@firebase/auth",oN="@firebase/auth-compat",aN="@firebase/database",lN="@firebase/database-compat",uN="@firebase/functions",cN="@firebase/functions-compat",dN="@firebase/installations",fN="@firebase/installations-compat",hN="@firebase/messaging",pN="@firebase/messaging-compat",mN="@firebase/performance",gN="@firebase/performance-compat",yN="@firebase/remote-config",vN="@firebase/remote-config-compat",_N="@firebase/storage",wN="@firebase/storage-compat",EN="@firebase/firestore",SN="@firebase/firestore-compat",CN="firebase",xN="10.8.1";/**
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
 */const Uh="[DEFAULT]",TN={[$h]:"fire-core",[eN]:"fire-core-compat",[nN]:"fire-analytics",[tN]:"fire-analytics-compat",[iN]:"fire-app-check",[rN]:"fire-app-check-compat",[sN]:"fire-auth",[oN]:"fire-auth-compat",[aN]:"fire-rtdb",[lN]:"fire-rtdb-compat",[uN]:"fire-fn",[cN]:"fire-fn-compat",[dN]:"fire-iid",[fN]:"fire-iid-compat",[hN]:"fire-fcm",[pN]:"fire-fcm-compat",[mN]:"fire-perf",[gN]:"fire-perf-compat",[yN]:"fire-rc",[vN]:"fire-rc-compat",[_N]:"fire-gcs",[wN]:"fire-gcs-compat",[EN]:"fire-fst",[SN]:"fire-fst-compat","fire-js":"fire-js",[CN]:"fire-js-all"};/**
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
 */const Mu=new Map,zh=new Map;function IN(t,e){try{t.container.addComponent(e)}catch(n){yi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Os(t){const e=t.name;if(zh.has(e))return yi.debug(`There were multiple attempts to register component ${e}.`),!1;zh.set(e,t);for(const n of Mu.values())IN(n,t);return!0}function Mm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const kN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Cr=new La("app","Firebase",kN);/**
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
 */class bN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ks=xN;function TS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Uh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Cr.create("bad-app-name",{appName:String(i)});if(n||(n=yS()),!n)throw Cr.create("no-options");const s=Mu.get(i);if(s){if(Du(n,s.options)&&Du(r,s.config))return s;throw Cr.create("duplicate-app",{appName:i})}const o=new MO(i);for(const l of zh.values())o.addComponent(l);const a=new bN(n,r,o);return Mu.set(i,a),a}function IS(t=Uh){const e=Mu.get(t);if(!e&&t===Uh&&yS())return TS();if(!e)throw Cr.create("no-app",{appName:t});return e}function xr(t,e,n){var r;let i=(r=TN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yi.warn(a.join(" "));return}Os(new gi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const PN="firebase-heartbeat-database",RN=1,da="firebase-heartbeat-store";let ef=null;function kS(){return ef||(ef=YO(PN,RN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(da)}catch(n){console.warn(n)}}}}).catch(t=>{throw Cr.create("idb-open",{originalErrorMessage:t.message})})),ef}async function ON(t){try{const n=(await kS()).transaction(da),r=await n.objectStore(da).get(bS(t));return await n.done,r}catch(e){if(e instanceof $r)yi.warn(e.message);else{const n=Cr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yi.warn(n.message)}}}async function q0(t,e){try{const r=(await kS()).transaction(da,"readwrite");await r.objectStore(da).put(e,bS(t)),await r.done}catch(n){if(n instanceof $r)yi.warn(n.message);else{const r=Cr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yi.warn(r.message)}}}function bS(t){return`${t.name}!${t.options.appId}`}/**
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
 */const NN=1024,AN=30*24*60*60*1e3;class LN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new MN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Y0();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=AN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Y0(),{heartbeatsToSend:r,unsentEntries:i}=DN(this._heartbeatsCache.heartbeats),s=Nu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Y0(){return new Date().toISOString().substring(0,10)}function DN(t,e=NN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Q0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Q0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class MN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return EO()?SO().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ON(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return q0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return q0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Q0(t){return Nu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function FN(t){Os(new gi("platform-logger",e=>new JO(e),"PRIVATE")),Os(new gi("heartbeat",e=>new LN(e),"PRIVATE")),xr($h,K0,t),xr($h,K0,"esm2017"),xr("fire-js","")}FN("");function PS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jN=PS,RS=new La("auth","Firebase",PS());/**
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
 */const Fu=new Lm("@firebase/auth");function $N(t,...e){Fu.logLevel<=se.WARN&&Fu.warn(`Auth (${Ks}): ${t}`,...e)}function zl(t,...e){Fu.logLevel<=se.ERROR&&Fu.error(`Auth (${Ks}): ${t}`,...e)}/**
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
 */function tn(t,...e){throw Fm(t,...e)}function hn(t,...e){return Fm(t,...e)}function UN(t,e,n){const r=Object.assign(Object.assign({},jN()),{[e]:n});return new La("auth","Firebase",r).create(e,{appName:t.name})}function Fm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return RS.create(t,...e)}function z(t,e,...n){if(!t)throw Fm(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw zl(e),new Error(e)}function Un(t,e){t||Pn(e)}/**
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
 */function Bh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function zN(){return X0()==="http:"||X0()==="https:"}function X0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function BN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zN()||_O()||"connection"in navigator)?navigator.onLine:!0}function WN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Da{constructor(e,n){this.shortDelay=e,this.longDelay=n,Un(n>e,"Short delay should be less than long delay!"),this.isMobile=Am()||_S()}get(){return BN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function jm(t,e){Un(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class OS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const VN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const HN=new Da(3e4,6e4);function Ur(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Gn(t,e,n,r,i={}){return NS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Gs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),OS.fetch()(AS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function NS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},VN),e);try{const i=new KN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw gl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw gl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw gl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw gl(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw UN(t,d,u);tn(t,d)}}catch(i){if(i instanceof $r)throw i;tn(t,"network-request-failed",{message:String(i)})}}async function Ma(t,e,n,r,i={}){const s=await Gn(t,e,n,r,i);return"mfaPendingCredential"in s&&tn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function AS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?jm(t.config,i):`${t.config.apiScheme}://${i}`}function GN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class KN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(hn(this.auth,"network-request-failed")),HN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function gl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=hn(t,e,r);return i.customData._tokenResponse=n,i}function J0(t){return t!==void 0&&t.enterprise!==void 0}class qN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return GN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function YN(t,e){return Gn(t,"GET","/v2/recaptchaConfig",Ur(t,e))}/**
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
 */async function QN(t,e){return Gn(t,"POST","/v1/accounts:delete",e)}async function XN(t,e){return Gn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function No(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function JN(t,e=!1){const n=mt(t),r=await n.getIdToken(e),i=$m(r);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:No(tf(i.auth_time)),issuedAtTime:No(tf(i.iat)),expirationTime:No(tf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function tf(t){return Number(t)*1e3}function $m(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return zl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Au(n);return i?JSON.parse(i):(zl("Failed to decode base64 JWT payload"),null)}catch(i){return zl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ZN(t){const e=$m(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ns(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof $r&&eA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function eA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class tA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class LS{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=No(this.lastLoginAt),this.creationTime=No(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ju(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ns(t,XN(n,{idToken:r}));z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?iA(s.providerUserInfo):[],a=rA(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new LS(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function nA(t){const e=mt(t);await ju(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function iA(t){return t.map(e=>{var{providerId:n}=e,r=pm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function sA(t,e){const n=await NS(t,{},async()=>{const r=Gs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=AS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",OS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function oA(t,e){return Gn(t,"POST","/v2/accounts:revokeToken",Ur(t,e))}/**
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
 */class fa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ZN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await sA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new fa;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fa,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
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
 */function Jn(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ai{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=pm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new LS(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ns(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return JN(this,e)}reload(){return nA(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ai(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ju(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ns(this,QN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:y,emailVerified:w,isAnonymous:T,providerData:S,stsTokenManager:x}=n;z(y&&x,e,"internal-error");const k=fa.fromJSON(this.name,x);z(typeof y=="string",e,"internal-error"),Jn(c,e.name),Jn(f,e.name),z(typeof w=="boolean",e,"internal-error"),z(typeof T=="boolean",e,"internal-error"),Jn(p,e.name),Jn(v,e.name),Jn(_,e.name),Jn(E,e.name),Jn(m,e.name),Jn(h,e.name);const L=new ai({uid:y,auth:e,email:f,emailVerified:w,displayName:c,isAnonymous:T,photoURL:v,phoneNumber:p,tenantId:_,stsTokenManager:k,createdAt:m,lastLoginAt:h});return S&&Array.isArray(S)&&(L.providerData=S.map(F=>Object.assign({},F))),E&&(L._redirectEventId=E),L}static async _fromIdTokenResponse(e,n,r=!1){const i=new fa;i.updateFromServerResponse(n);const s=new ai({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ju(s),s}}/**
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
 */const Z0=new Map;function Rn(t){Un(t instanceof Function,"Expected a class definition");let e=Z0.get(t);return e?(Un(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Z0.set(t,e),e)}/**
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
 */class DS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}DS.type="NONE";const ev=DS;/**
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
 */function Bl(t,e,n){return`firebase:${t}:${e}:${n}`}class us{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Bl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Bl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ai._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new us(Rn(ev),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Rn(ev);const o=Bl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const c=ai._fromJSON(e,d);u!==s&&(a=c),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new us(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new us(s,e,r))}}/**
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
 */function tv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(MS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(US(e))return"Blackberry";if(zS(e))return"Webos";if(Um(e))return"Safari";if((e.includes("chrome/")||FS(e))&&!e.includes("edge/"))return"Chrome";if($S(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function MS(t=Xe()){return/firefox\//i.test(t)}function Um(t=Xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function FS(t=Xe()){return/crios\//i.test(t)}function jS(t=Xe()){return/iemobile/i.test(t)}function $S(t=Xe()){return/android/i.test(t)}function US(t=Xe()){return/blackberry/i.test(t)}function zS(t=Xe()){return/webos/i.test(t)}function Lc(t=Xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function aA(t=Xe()){var e;return Lc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lA(){return wO()&&document.documentMode===10}function BS(t=Xe()){return Lc(t)||$S(t)||zS(t)||US(t)||/windows phone/i.test(t)||jS(t)}function uA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function WS(t,e=[]){let n;switch(t){case"Browser":n=tv(Xe());break;case"Worker":n=`${tv(Xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ks}/${r}`}/**
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
 */class cA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function dA(t,e={}){return Gn(t,"GET","/v2/passwordPolicy",Ur(t,e))}/**
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
 */const fA=6;class hA{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:fA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class pA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nv(this),this.idTokenSubscription=new nv(this),this.beforeStateQueue=new cA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=RS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await us.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ju(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=WN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?mt(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await dA(this),n=new hA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new La("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await oA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rn(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await us.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=WS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&$N(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ki(t){return mt(t)}class nv{constructor(e){this.auth=e,this.observer=null,this.addObserver=PO(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Dc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mA(t){Dc=t}function VS(t){return Dc.loadJS(t)}function gA(){return Dc.recaptchaEnterpriseScript}function yA(){return Dc.gapiScript}function vA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const _A="recaptcha-enterprise",wA="NO_RECAPTCHA";class EA{constructor(e){this.type=_A,this.auth=ki(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{YN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new qN(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;J0(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(wA)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&J0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=gA();l.length!==0&&(l+=a),VS(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function rv(t,e,n,r=!1){const i=new EA(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Wh(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await rv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await rv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function SA(t,e){const n=Mm(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Du(s,e??{}))return i;tn(i,"already-initialized")}return n.initialize({options:e})}function CA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function xA(t,e,n){const r=ki(t);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=HS(e),{host:o,port:a}=TA(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||IA()}function HS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function TA(t){const e=HS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:iv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:iv(o)}}}function iv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function IA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class zm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}async function kA(t,e){return Gn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function bA(t,e){return Ma(t,"POST","/v1/accounts:signInWithPassword",Ur(t,e))}/**
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
 */async function PA(t,e){return Ma(t,"POST","/v1/accounts:signInWithEmailLink",Ur(t,e))}async function RA(t,e){return Ma(t,"POST","/v1/accounts:signInWithEmailLink",Ur(t,e))}/**
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
 */class ha extends zm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ha(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ha(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wh(e,n,"signInWithPassword",bA);case"emailLink":return PA(e,{email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wh(e,r,"signUpPassword",kA);case"emailLink":return RA(e,{idToken:n,email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */const OA="http://localhost";class vi extends zm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=pm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new vi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return cs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,cs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,cs(e,n)}buildRequest(){const e={requestUri:OA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Gs(n)}return e}}/**
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
 */function NA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function AA(t){const e=wo(Eo(t)).link,n=e?wo(Eo(e)).deep_link_id:null,r=wo(Eo(t)).deep_link_id;return(r?wo(Eo(r)).link:null)||r||n||e||t}class Bm{constructor(e){var n,r,i,s,o,a;const l=wo(Eo(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,c=NA((i=l.mode)!==null&&i!==void 0?i:null);z(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=AA(e);try{return new Bm(n)}catch{return null}}}/**
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
 */class qs{constructor(){this.providerId=qs.PROVIDER_ID}static credential(e,n){return ha._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Bm.parseLink(n);return z(r,"argument-error"),ha._fromEmailAndCode(e,r.code,r.tenantId)}}qs.PROVIDER_ID="password";qs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class GS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fa extends GS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */async function LA(t,e){return Ma(t,"POST","/v1/accounts:signUp",Ur(t,e))}/**
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
 */class _i{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ai._fromIdTokenResponse(e,r,i),o=sv(r);return new _i({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=sv(r);return new _i({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function sv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class $u extends $r{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,$u.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new $u(e,n,r,i)}}function KS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?$u._fromErrorAndOperation(t,s,e,r):s})}async function DA(t,e,n=!1){const r=await Ns(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _i._forOperation(t,"link",r)}/**
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
 */async function MA(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ns(t,KS(r,i,e,t),n);z(s.idToken,r,"internal-error");const o=$m(s.idToken);z(o,r,"internal-error");const{sub:a}=o;return z(t.uid===a,r,"user-mismatch"),_i._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&tn(r,"user-mismatch"),s}}/**
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
 */async function qS(t,e,n=!1){const r="signIn",i=await KS(t,r,e),s=await _i._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function FA(t,e){return qS(ki(t),e)}/**
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
 */async function YS(t){const e=ki(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function jA(t,e,n){const r=ki(t),o=await Wh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",LA).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&YS(t),l}),a=await _i._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function $A(t,e,n){return FA(mt(t),qs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&YS(t),r})}/**
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
 */async function UA(t,e){return Gn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function zA(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=mt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ns(r,UA(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function BA(t,e,n,r){return mt(t).onIdTokenChanged(e,n,r)}function WA(t,e,n){return mt(t).beforeAuthStateChanged(e,n)}function VA(t){return mt(t).signOut()}const Uu="__sak";/**
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
 */class QS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Uu,"1"),this.storage.removeItem(Uu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function HA(){const t=Xe();return Um(t)||Lc(t)}const GA=1e3,KA=10;class XS extends QS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=HA()&&uA(),this.fallbackToPolling=BS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);lA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,KA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},GA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}XS.type="LOCAL";const qA=XS;/**
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
 */class JS extends QS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}JS.type="SESSION";const ZS=JS;/**
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
 */function YA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Mc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Mc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await YA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mc.receivers=[];/**
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
 */function Wm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class QA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Wm("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const f=c;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function pn(){return window}function XA(t){pn().location.href=t}/**
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
 */function eC(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function JA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ZA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function e3(){return eC()?self:null}/**
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
 */const tC="firebaseLocalStorageDb",t3=1,zu="firebaseLocalStorage",nC="fbase_key";class ja{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fc(t,e){return t.transaction([zu],e?"readwrite":"readonly").objectStore(zu)}function n3(){const t=indexedDB.deleteDatabase(tC);return new ja(t).toPromise()}function Vh(){const t=indexedDB.open(tC,t3);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(zu,{keyPath:nC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(zu)?e(r):(r.close(),await n3(),e(await Vh()))})})}async function ov(t,e,n){const r=Fc(t,!0).put({[nC]:e,value:n});return new ja(r).toPromise()}async function r3(t,e){const n=Fc(t,!1).get(e),r=await new ja(n).toPromise();return r===void 0?null:r.value}function av(t,e){const n=Fc(t,!0).delete(e);return new ja(n).toPromise()}const i3=800,s3=3;class rC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>s3)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return eC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mc._getInstance(e3()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await JA(),!this.activeServiceWorker)return;this.sender=new QA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ZA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vh();return await ov(e,Uu,"1"),await av(e,Uu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ov(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>r3(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>av(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Fc(i,!1).getAll();return new ja(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),i3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rC.type="LOCAL";const o3=rC;new Da(3e4,6e4);/**
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
 */function a3(t,e){return e?Rn(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Vm extends zm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return cs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return cs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return cs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function l3(t){return qS(t.auth,new Vm(t),t.bypassAuthState)}function u3(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),MA(n,new Vm(t),t.bypassAuthState)}async function c3(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),DA(n,new Vm(t),t.bypassAuthState)}/**
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
 */class iC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return l3;case"linkViaPopup":case"linkViaRedirect":return c3;case"reauthViaPopup":case"reauthViaRedirect":return u3;default:tn(this.auth,"internal-error")}}resolve(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const d3=new Da(2e3,1e4);class Zi extends iC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Zi.currentPopupAction&&Zi.currentPopupAction.cancel(),Zi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Un(this.filter.length===1,"Popup operations only handle one event");const e=Wm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,d3.get())};e()}}Zi.currentPopupAction=null;/**
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
 */const f3="pendingRedirect",Wl=new Map;class h3 extends iC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Wl.get(this.auth._key());if(!e){try{const r=await p3(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Wl.set(this.auth._key(),e)}return this.bypassAuthState||Wl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function p3(t,e){const n=y3(e),r=g3(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function m3(t,e){Wl.set(t._key(),e)}function g3(t){return Rn(t._redirectPersistence)}function y3(t){return Bl(f3,t.config.apiKey,t.name)}async function v3(t,e,n=!1){const r=ki(t),i=a3(r,e),o=await new h3(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const _3=10*60*1e3;class w3{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!E3(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!sC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(hn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_3&&this.cachedEventUids.clear(),this.cachedEventUids.has(lv(e))}saveEventToCache(e){this.cachedEventUids.add(lv(e)),this.lastProcessedEventTime=Date.now()}}function lv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function sC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function E3(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sC(t);default:return!1}}/**
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
 */async function S3(t,e={}){return Gn(t,"GET","/v1/projects",e)}/**
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
 */const C3=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,x3=/^https?/;async function T3(t){if(t.config.emulator)return;const{authorizedDomains:e}=await S3(t);for(const n of e)try{if(I3(n))return}catch{}tn(t,"unauthorized-domain")}function I3(t){const e=Bh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!x3.test(n))return!1;if(C3.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const k3=new Da(3e4,6e4);function uv(){const t=pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function b3(t){return new Promise((e,n)=>{var r,i,s;function o(){uv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{uv(),n(hn(t,"network-request-failed"))},timeout:k3.get()})}if(!((i=(r=pn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=pn().gapi)===null||s===void 0)&&s.load)o();else{const a=vA("iframefcb");return pn()[a]=()=>{gapi.load?o():n(hn(t,"network-request-failed"))},VS(`${yA()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Vl=null,e})}let Vl=null;function P3(t){return Vl=Vl||b3(t),Vl}/**
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
 */const R3=new Da(5e3,15e3),O3="__/auth/iframe",N3="emulator/auth/iframe",A3={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},L3=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function D3(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?jm(e,N3):`https://${t.config.authDomain}/${O3}`,r={apiKey:e.apiKey,appName:t.name,v:Ks},i=L3.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Gs(r).slice(1)}`}async function M3(t){const e=await P3(t),n=pn().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:D3(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:A3,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=hn(t,"network-request-failed"),a=pn().setTimeout(()=>{s(o)},R3.get());function l(){pn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const F3={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},j3=500,$3=600,U3="_blank",z3="http://localhost";class cv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function B3(t,e,n,r=j3,i=$3){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},F3),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Xe().toLowerCase();n&&(a=FS(u)?U3:n),MS(u)&&(e=e||z3,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[p,v])=>`${f}${p}=${v},`,"");if(aA(u)&&a!=="_self")return W3(e||"",a),new cv(null);const c=window.open(e||"",a,d);z(c,t,"popup-blocked");try{c.focus()}catch{}return new cv(c)}function W3(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const V3="__/auth/handler",H3="emulator/auth/handler",G3=encodeURIComponent("fac");async function dv(t,e,n,r,i,s){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ks,eventId:i};if(e instanceof GS){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Mh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries(s||{}))o[d]=c}if(e instanceof Fa){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),u=l?`#${G3}=${encodeURIComponent(l)}`:"";return`${K3(t)}?${Gs(a).slice(1)}${u}`}function K3({config:t}){return t.emulator?jm(t,H3):`https://${t.authDomain}/${V3}`}/**
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
 */const nf="webStorageSupport";class q3{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ZS,this._completeRedirectFn=v3,this._overrideRedirectResult=m3}async _openPopup(e,n,r,i){var s;Un((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await dv(e,n,r,Bh(),i);return B3(e,o,Wm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await dv(e,n,r,Bh(),i);return XA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Un(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await M3(e),r=new w3(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(nf,{type:nf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[nf];o!==void 0&&n(!!o),tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=T3(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return BS()||Um()||Lc()}}const Y3=q3;var fv="@firebase/auth",hv="1.6.1";/**
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
 */class Q3{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function X3(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function J3(t){Os(new gi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:WS(t)},u=new pA(r,i,s,l);return CA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Os(new gi("auth-internal",e=>{const n=ki(e.getProvider("auth").getImmediate());return(r=>new Q3(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xr(fv,hv,X3(t)),xr(fv,hv,"esm2017")}/**
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
 */const Z3=5*60,eL=vS("authIdTokenMaxAge")||Z3;let pv=null;const tL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>eL)return;const i=n==null?void 0:n.token;pv!==i&&(pv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function jc(t=IS()){const e=Mm(t,"auth");if(e.isInitialized())return e.getImmediate();const n=SA(t,{popupRedirectResolver:Y3,persistence:[o3,qA,ZS]}),r=vS("authTokenSyncURL");if(r){const s=tL(r);WA(n,s,()=>s(n.currentUser)),BA(n,o=>s(o))}const i=gS("auth");return i&&xA(n,`http://${i}`),n}function nL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}mA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=hn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",nL().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});J3("Browser");const oC=Aa("auth/register",async({value:t},e)=>{const{name:n,email:r,password:i}=t,s=jc();try{const a=(await jA(s,r,i)).user;return await zA(a,{displayName:n}),{email:a.email,accessToken:a.accessToken,id:a.uid,name:a.displayName}}catch(o){return console.log(o),e.rejectWithValue(o.message)}}),aC=Aa("auth/login",async({value:t},e)=>{const{email:n,password:r}=t,i=jc();try{const o=(await $A(i,n,r)).user;return{email:o.email,accessToken:o.accessToken,id:o.uid,name:o.displayName}}catch(s){return e.rejectWithValue(s.message)}}),lC=Aa("auth/logout",async(t,e)=>{const n=jc();try{await VA(n)}catch(r){return e.rejectWithValue(r.message)}}),Hl=Aa("auth/refresh",async(t,e)=>{const r=e.getState().auth.token,i=jc();if(r===null)return e.rejectWithValue("Unable to fetch user");try{return new Promise((s,o)=>{i.onAuthStateChanged(a=>{a?s({name:a.displayName,email:a.email,token:a.accessToken,id:a.uid}):o("Unable to fetch user")})})}catch(s){return e.rejectWithValue(s.message)}}),rL=()=>{const t=Na(),{name:e}=Cm(),n=()=>{t(lC())};return g.jsxs("div",{children:[g.jsx("p",{children:`Welcome, ${e}`}),g.jsx("button",{type:"button",onClick:()=>n(),children:"Log Out"})]})},uC=({setNamePopUp:t})=>{const{isLoggedIn:e}=Cm(),n=()=>(t("login"),g.jsx(vh,{to:"/login"})),r=()=>(t("signin"),g.jsx(vh,{to:"/login"}));return g.jsxs(IP,{children:[g.jsxs(AP,{children:[g.jsxs(bP,{children:[g.jsx(TP,{to:"/",children:g.jsx(S2,{})}),g.jsx(kP,{to:"/",children:"LearnLingo"})]}),g.jsx(Hd,{to:"/",children:"Home"})]}),g.jsxs(LP,{children:[g.jsx(Hd,{to:"teachers",children:"Teachers"}),e&&g.jsx(Hd,{to:"favorites",children:"Favorites"}),e?g.jsx(rL,{}):g.jsxs(PP,{children:[g.jsxs(RP,{type:"button",onClick:n,children:[g.jsx(NP,{children:g.jsx(E2,{})}),"Log in"]}),g.jsx(OP,{type:"button",onClick:()=>r(),children:"Registration"})]})]})]})};uC.propTypes={setNamePopUp:K.func.isRequired};const iL=P.div`
  width: 100%;
  padding: 0px 64px 32px 64px;
  text-align: center;
`,cC=({setNamePopUp:t})=>g.jsxs(g.Fragment,{children:[g.jsx(uC,{setNamePopUp:t}),g.jsx(iL,{children:g.jsx(C.Suspense,{fallback:g.jsx("div",{children:"Loading...."}),children:g.jsx(e2,{})})})]});cC.propTypes={setNamePopUp:K.func.isRequired};const sL=()=>g.jsxs("svg",{width:"46.047974",height:"55.784180",viewBox:"0 0 46.048 55.7842",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[g.jsx("desc",{children:"Created with Pixso."}),g.jsx("defs",{children:g.jsxs("linearGradient",{id:"paint_linear_9_2_0",x1:"23.024010",y1:"0.000000",x2:"23.024010",y2:"55.784241",gradientUnits:"userSpaceOnUse",children:[g.jsx("stop",{stopColor:"#FBE9BA"}),g.jsx("stop",{offset:"1.000000",stopColor:"#E7C885"})]})}),g.jsx("path",{id:"",d:"M31.5446 8.92163C33.5355 6.51074 34.5343 3.90588 34.5343 1.11597C34.5343 0.910522 34.5292 0.704102 34.5176 0.497314C34.5083 0.331787 34.495 0.165894 34.4769 0C33.0901 0.0733643 31.6154 0.502197 30.0564 1.27759C28.494 2.06458 27.2057 3.05115 26.1926 4.23767C24.1636 6.5813 23.021 9.44763 23.021 12.1257C23.021 12.4961 23.0442 12.8483 23.0845 13.183C26.2358 13.4443 29.142 11.7881 31.5446 8.92163ZM42.1438 48.865C43.2776 47.2157 44.2561 45.4218 45.0829 43.4728C45.4237 42.6465 45.7443 41.7855 46.048 40.8868C44.6476 40.2876 43.3889 39.444 42.2618 38.3524C39.7749 36.0007 38.5094 33.0387 38.4723 29.4792C38.4319 24.9095 40.4667 21.3475 44.5801 18.8043C42.2821 15.4709 38.8267 13.6208 34.2273 13.2422C32.5299 13.0951 30.458 13.4685 28.0031 14.3698C25.4071 15.3419 23.8757 15.8293 23.4238 15.8293C22.8195 15.8293 21.441 15.4124 19.2942 14.5901C17.1414 13.7708 15.4088 13.3538 14.0878 13.3538C11.6733 13.3948 9.43127 14.0352 7.35632 15.292C5.28137 16.5488 3.62354 18.2607 2.37732 20.4313C0.791626 23.1332 0 26.3575 0 30.0959C0 33.3596 0.587158 36.7306 1.75842 40.212C2.85205 43.4349 4.24817 46.262 5.94617 48.6997C7.52881 50.9828 8.84985 52.5942 9.90613 53.5343C11.5609 55.1045 13.2188 55.8518 14.8821 55.7794C15.9757 55.7416 17.4061 55.3593 19.1819 54.6259C20.9548 53.8959 22.6123 53.5343 24.1578 53.5343C25.6315 53.5343 27.243 53.8959 28.9968 54.6259C30.7448 55.3593 32.2465 55.7208 33.4916 55.7208C35.2261 55.6796 36.8458 54.9529 38.3575 53.5343C39.3328 52.67 40.5983 51.1138 42.1438 48.865Z",fill:"url(#paint_linear_9_2_0)",fillOpacity:"1.000000",fillRule:"evenodd"})]}),oL=()=>g.jsxs("svg",{width:"359.719971",height:"247.251221",viewBox:"0 0 359.72 247.251",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[g.jsx("desc",{children:"Created with Pixso."}),g.jsx("defs",{children:g.jsxs("linearGradient",{id:"paint_linear_9_1_0",x1:"179.859985",y1:"0.000000",x2:"179.859985",y2:"247.251175",gradientUnits:"userSpaceOnUse",children:[g.jsx("stop",{stopColor:"#EEB055"}),g.jsx("stop",{offset:"1.000000",stopColor:"#D08F38"})]})}),g.jsx("path",{id:"Union",d:"M6.41785 0C2.87329 0 0 2.87903 0 6.43042L0 240.821C0 244.372 2.87329 247.251 6.41785 247.251L353.302 247.251C356.847 247.251 359.72 244.372 359.72 240.821L359.72 6.43042C359.72 2.87903 356.847 0 353.302 0L6.41785 0Z",fill:"url(#paint_linear_9_1_0)",fillOpacity:"1.000000",fillRule:"nonzero"})]}),aL="data:image/svg+xml,%3csvg%20width='1312.000000'%20height='116.000000'%20viewBox='0%200%201312%20116'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs/%3e%3crect%20id='Rectangle%201'%20x='0.750000'%20y='0.750000'%20rx='30.000000'%20width='1310.500000'%20height='114.500000'%20stroke='%23F4C550'%20stroke-opacity='1.000000'%20stroke-width='1.500000'%20stroke-dasharray='15%2015'/%3e%3c/svg%3e",lL=P.div`
  width: 100%;

  display: flex;
  gap: 24px;
  margin-bottom: 24px;
`,uL=P.div`
  max-width: 720px;
  border-radius: 30px;
  background: ${ge.SILVER_BACKGROUND};
  padding: 98px 108px 98px 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,cL=P.h1`
  width: 548px;
  text-align: start;
  margin-bottom: 32px;
`,dL=P.p`
  text-align: start;
  margin-bottom: 64px;
  color: ${ge.BLACK_TEXT};
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.32px;
  width: 471px;
`,fL=P.button`
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
`,hL=P.div`
  position: relative;
  max-width: 568px;
  border-radius: 30px;
  background: ${ge.LIGHT_YELLOW};
  padding: 80px 118px 117px 114px;
`,pL=P.img`
  max-width: 336px;
  max-height: 333px;
`,mL=P.span`
  background-color: ${ge.LIGHT_YELLOW};
  border-radius: 8px;
  max-width: 195px;
  font-style: italic;
  letter-spacing: -0.96px;
  font-size: 48px;
  font-weight: 400;
`,gL=P.span`
  color: ${ge.BLACK_TEXT};
  font-size: 48px;
  font-weight: 500;
  line-height: 56px;
  text-align: start;
  font-style: normal;
  letter-spacing: -0.96px;
`,mv=P.span`
  color: ${ge.BLACK_TEXT};
  font-size: 48px;
  font-weight: 500;
  line-height: 56px;
  letter-spacing: -0.96;
  text-align: start;
  font-style: normal;
`,yL=P.div`
  position: absolute;
  height: 176px;
  overflow: hidden;
  top: 354px;
  left: 103.64px;
`,vL=P.div`
  position: absolute;
  left: 260.56px;
`,_L=P.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1312px;
  height: 116px;
  gap: 100px;
  background-image: url(${aL});
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
`,wL="/Learn-Lingo/assets/sticker-CcJ1SqRC.png",EL=()=>g.jsxs(g.Fragment,{children:[g.jsxs(lL,{children:[g.jsxs(uL,{children:[g.jsxs(cL,{children:[g.jsx(gL,{children:"Unlock your potential with"}),"  ",g.jsx(mv,{children:"the best"})," ",g.jsx(mL,{children:"language"})," ",g.jsx(mv,{children:"tutors"})]}),g.jsx(dL,{children:"Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors."}),g.jsx(pE,{to:"teachers",children:g.jsx(fL,{type:"button",children:"Get started"})})]}),g.jsxs(hL,{children:[g.jsx(pL,{src:wL,alt:"sticker"}),g.jsx(yL,{children:g.jsx(oL,{})}),g.jsx(vL,{children:g.jsx(sL,{})})]})]}),g.jsxs(_L,{children:[g.jsxs(yl,{children:[g.jsx(vl,{children:"3,200 +"}),g.jsx(_l,{children:"Experienced tutors"})]}),g.jsxs(yl,{children:[g.jsx(vl,{children:"300,000 +"}),g.jsx(_l,{children:"5-star tutor reviews"})]}),g.jsxs(yl,{children:[g.jsx(vl,{children:"120 +"}),g.jsx(_l,{width:"74px",children:"Subjects taught"})]}),g.jsxs(yl,{children:[g.jsx(vl,{children:"200 +"}),g.jsx(_l,{children:"Tutor nationalities"})]})]})]});var gv={};const yv="@firebase/database",vv="1.0.3";/**
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
 */let dC="";function SL(t){dC=t}/**
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
 */class CL{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Pe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ca(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class xL{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Hn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const fC=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new CL(e)}}catch{}return new xL},ti=fC("localStorage"),Hh=fC("sessionStorage");/**
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
 */const ds=new Lm("@firebase/database"),TL=function(){let t=1;return function(){return t++}}(),hC=function(t){const e=NO(t),n=new bO;n.update(e);const r=n.digest();return Rm.encodeByteArray(r)},$a=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=$a.apply(null,r):typeof r=="object"?e+=Pe(r):e+=r,e+=" "}return e};let li=null,_v=!0;const IL=function(t,e){R(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ds.logLevel=se.VERBOSE,li=ds.log.bind(ds),e&&Hh.set("logging_enabled",!0)):typeof t=="function"?li=t:(li=null,Hh.remove("logging_enabled"))},Ye=function(...t){if(_v===!0&&(_v=!1,li===null&&Hh.get("logging_enabled")===!0&&IL(!0)),li){const e=$a.apply(null,t);li(e)}},Ua=function(t){return function(...e){Ye(t,...e)}},Gh=function(...t){const e="FIREBASE INTERNAL ERROR: "+$a(...t);ds.error(e)},zn=function(...t){const e=`FIREBASE FATAL ERROR: ${$a(...t)}`;throw ds.error(e),new Error(e)},Tt=function(...t){const e="FIREBASE WARNING: "+$a(...t);ds.warn(e)},kL=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Tt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},pC=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},bL=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},As="[MIN_NAME]",wi="[MAX_NAME]",Ys=function(t,e){if(t===e)return 0;if(t===As||e===wi)return-1;if(e===As||t===wi)return 1;{const n=wv(t),r=wv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},PL=function(t,e){return t===e?0:t<e?-1:1},oo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Pe(e))},Hm=function(t){if(typeof t!="object"||t===null)return Pe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Pe(e[r]),n+=":",n+=Hm(t[e[r]]);return n+="}",n},mC=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function pt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const gC=function(t){R(!pC(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(l=0;l<64;l+=8){let f=parseInt(d.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),c=c+f}return c.toLowerCase()},RL=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},OL=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function NL(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const AL=new RegExp("^-?(0*)\\d{1,10}$"),LL=-2147483648,DL=2147483647,wv=function(t){if(AL.test(t)){const e=Number(t);if(e>=LL&&e<=DL)return e}return null},za=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Tt("Exception was thrown by user callback.",n),e},Math.floor(0))}},ML=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ao=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class FL{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Tt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class jL{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ye("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Tt(e)}}class fs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}fs.OWNER="owner";/**
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
 */const Gm="5",yC="v",vC="s",_C="r",wC="f",EC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,SC="ls",CC="p",Kh="ac",xC="websocket",TC="long_polling";/**
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
 */class IC{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ti.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ti.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function $L(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function kC(t,e,n){R(typeof e=="string","typeof type must == string"),R(typeof n=="object","typeof params must == object");let r;if(e===xC)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===TC)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);$L(t)&&(n.ns=t.namespace);const i=[];return pt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class UL{constructor(){this.counters_={}}incrementCounter(e,n=1){Hn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return dO(this.counters_)}}/**
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
 */const rf={},sf={};function Km(t){const e=t.toString();return rf[e]||(rf[e]=new UL),rf[e]}function zL(t,e){const n=t.toString();return sf[n]||(sf[n]=e()),sf[n]}/**
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
 */class BL{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&za(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Ev="start",WL="close",VL="pLPCommand",HL="pRTLPCB",bC="id",PC="pw",RC="ser",GL="cb",KL="seg",qL="ts",YL="d",QL="dframe",OC=1870,NC=30,XL=OC-NC,JL=25e3,ZL=3e4;class es{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ua(e),this.stats_=Km(n),this.urlFn=l=>(this.appCheckToken&&(l[Kh]=this.appCheckToken),kC(n,TC,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new BL(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ZL)),bL(()=>{if(this.isClosed_)return;this.scriptTagHolder=new qm((...s)=>{const[o,a,l,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ev)this.id=a,this.password=l;else if(o===WL)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Ev]="t",r[RC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[GL]=this.scriptTagHolder.uniqueCallbackIdentifier),r[yC]=Gm,this.transportSessionId&&(r[vC]=this.transportSessionId),this.lastSessionId&&(r[SC]=this.lastSessionId),this.applicationId&&(r[CC]=this.applicationId),this.appCheckToken&&(r[Kh]=this.appCheckToken),typeof location<"u"&&location.hostname&&EC.test(location.hostname)&&(r[_C]=wC);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){es.forceAllow_=!0}static forceDisallow(){es.forceDisallow_=!0}static isAvailable(){return es.forceAllow_?!0:!es.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!RL()&&!OL()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=pS(n),i=mC(r,XL);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[QL]="t",r[bC]=e,r[PC]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class qm{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=TL(),window[VL+this.uniqueCallbackIdentifier]=e,window[HL+this.uniqueCallbackIdentifier]=n,this.myIFrame=qm.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ye("frame writing exception"),a.stack&&Ye(a.stack),Ye(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ye("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[bC]=this.myID,e[PC]=this.myPW,e[RC]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+NC+r.length<=OC;){const o=this.pendingSegs.shift();r=r+"&"+KL+i+"="+o.seg+"&"+qL+i+"="+o.ts+"&"+YL+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(JL)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ye("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const e4=16384,t4=45e3;let Bu=null;typeof MozWebSocket<"u"?Bu=MozWebSocket:typeof WebSocket<"u"&&(Bu=WebSocket);class Kt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ua(this.connId),this.stats_=Km(n),this.connURL=Kt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[yC]=Gm,typeof location<"u"&&location.hostname&&EC.test(location.hostname)&&(o[_C]=wC),n&&(o[vC]=n),r&&(o[SC]=r),i&&(o[Kh]=i),s&&(o[CC]=s),kC(e,xC,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ti.set("previous_websocket_failure",!0);try{let r;wS(),this.mySock=new Bu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Kt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Bu!==null&&!Kt.forceDisallow_}static previouslyFailed(){return ti.isInMemoryStorage||ti.get("previous_websocket_failure")===!0}markConnectionHealthy(){ti.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ca(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(R(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=mC(n,e4);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(t4))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Kt.responsesRequiredToBeHealthy=2;Kt.healthyTimeout=3e4;/**
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
 */class pa{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[es,Kt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Kt&&Kt.isAvailable();let r=n&&!Kt.previouslyFailed();if(e.webSocketOnly&&(n||Tt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Kt];else{const i=this.transports_=[];for(const s of pa.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);pa.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}pa.globalTransportInitialized_=!1;/**
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
 */const n4=6e4,r4=5e3,i4=10*1024,s4=100*1024,of="t",Sv="d",o4="s",Cv="r",a4="e",xv="o",Tv="a",Iv="n",kv="p",l4="h";class u4{constructor(e,n,r,i,s,o,a,l,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ua("c:"+this.id+":"),this.transportManager_=new pa(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ao(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>s4?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>i4?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(of in e){const n=e[of];n===Tv?this.upgradeIfSecondaryHealthy_():n===Cv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===xv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=oo("t",e),r=oo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:kv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Tv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Iv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=oo("t",e),r=oo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=oo(of,e);if(Sv in e){const r=e[Sv];if(n===l4){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Iv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===o4?this.onConnectionShutdown_(r):n===Cv?this.onReset_(r):n===a4?Gh("Server Error: "+r):n===xv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Gh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Gm!==r&&Tt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ao(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(n4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ao(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(r4))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:kv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ti.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class AC{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class LC{constructor(e){this.allowedEvents_=e,this.listeners_={},R(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){R(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Wu extends LC{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Am()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Wu}getInitialEvent(e){return R(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const bv=32,Pv=768;class oe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Z(){return new oe("")}function Y(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Nr(t){return t.pieces_.length-t.pieceNum_}function ue(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new oe(t.pieces_,e)}function DC(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function c4(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function MC(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function FC(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new oe(e,0)}function Re(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof oe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new oe(n,0)}function G(t){return t.pieceNum_>=t.pieces_.length}function tt(t,e){const n=Y(t),r=Y(e);if(n===null)return e;if(n===r)return tt(ue(t),ue(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function jC(t,e){if(Nr(t)!==Nr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function qt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Nr(t)>Nr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class d4{constructor(e,n){this.errorPrefix_=n,this.parts_=MC(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ac(this.parts_[r]);$C(this)}}function f4(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ac(e),$C(t)}function h4(t){const e=t.parts_.pop();t.byteLength_-=Ac(e),t.parts_.length>0&&(t.byteLength_-=1)}function $C(t){if(t.byteLength_>Pv)throw new Error(t.errorPrefix_+"has a key path longer than "+Pv+" bytes ("+t.byteLength_+").");if(t.parts_.length>bv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+bv+") or object contains a cycle "+Yr(t))}function Yr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Ym extends LC{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Ym}getInitialEvent(e){return R(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ao=1e3,p4=60*5*1e3,Rv=30*1e3,m4=1.3,g4=3e4,y4="server_kill",Ov=3;class Ln extends AC{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ln.nextPersistentConnectionId_++,this.log_=Ua("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ao,this.maxReconnectDelay_=p4,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!wS())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ym.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Wu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Pe(s)),R(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Nm,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),R(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Ln.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Hn(e,"w")){const r=Rs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Tt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||kO(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Rv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=IO(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Pe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Gh("Unrecognized action received from server: "+Pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){R(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ao,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ao,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>g4&&(this.reconnectDelay_=ao),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*m4)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ln.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(c){R(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(c)};this.realtime_={close:l,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ye("getToken() completed but was canceled"):(Ye("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=f&&f.token,a=new u4(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{Tt(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(y4)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&Tt(c),l())}}}interrupt(e){Ye("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ye("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Mh(this.interruptReasons_)&&(this.reconnectDelay_=ao,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Hm(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new oe(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ye("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ov&&(this.reconnectDelay_=Rv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ye("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ov&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+dC.replace(/\./g,"-")]=1,Am()?e["framework.cordova"]=1:_S()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Wu.getInstance().currentlyOnline();return Mh(this.interruptReasons_)&&e}}Ln.nextPersistentConnectionId_=0;Ln.nextConnectionId_=0;/**
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
 */class $c{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new H(As,e),i=new H(As,n);return this.compare(r,i)!==0}minPost(){return H.MIN}}/**
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
 */let wl;class UC extends $c{static get __EMPTY_NODE(){return wl}static set __EMPTY_NODE(e){wl=e}compare(e,n){return Ys(e.name,n.name)}isDefinedOn(e){throw Hs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return H.MIN}maxPost(){return new H(wi,wl)}makePost(e,n){return R(typeof e=="string","KeyIndex indexValue must always be a string."),new H(e,wl)}toString(){return".key"}}const hs=new UC;/**
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
 */class El{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Me{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Me.RED,this.left=i??ut.EMPTY_NODE,this.right=s??ut.EMPTY_NODE}copy(e,n,r,i,s){return new Me(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ut.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return ut.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Me.RED=!0;Me.BLACK=!1;class v4{copy(e,n,r,i,s){return this}insert(e,n,r){return new Me(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ut{constructor(e,n=ut.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ut(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Me.BLACK,null,null))}remove(e){return new ut(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Me.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new El(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new El(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new El(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new El(this.root_,null,this.comparator_,!0,e)}}ut.EMPTY_NODE=new v4;/**
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
 */function _4(t,e){return Ys(t.name,e.name)}function Qm(t,e){return Ys(t,e)}/**
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
 */let qh;function w4(t){qh=t}const zC=function(t){return typeof t=="number"?"number:"+gC(t):"string:"+t},BC=function(t){if(t.isLeafNode()){const e=t.val();R(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Hn(e,".sv"),"Priority must be a string or number.")}else R(t===qh||t.isEmpty(),"priority of unexpected type.");R(t===qh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Nv;class Ae{constructor(e,n=Ae.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,R(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),BC(this.priorityNode_)}static set __childrenNodeConstructor(e){Nv=e}static get __childrenNodeConstructor(){return Nv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ae(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:Y(e)===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ae.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Y(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(R(r!==".priority"||Nr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ae.__childrenNodeConstructor.EMPTY_NODE.updateChild(ue(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+zC(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=gC(this.value_):e+=this.value_,this.lazyHash_=hC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ae.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ae.__childrenNodeConstructor?-1:(R(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ae.VALUE_TYPE_ORDER.indexOf(n),s=Ae.VALUE_TYPE_ORDER.indexOf(r);return R(i>=0,"Unknown leaf type: "+n),R(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ae.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let WC,VC;function E4(t){WC=t}function S4(t){VC=t}class C4 extends $c{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ys(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return H.MIN}maxPost(){return new H(wi,new Ae("[PRIORITY-POST]",VC))}makePost(e,n){const r=WC(e);return new H(n,new Ae("[PRIORITY-POST]",r))}toString(){return".priority"}}const xe=new C4;/**
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
 */const x4=Math.log(2);class T4{constructor(e){const n=s=>parseInt(Math.log(s)/x4,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Vu=function(t,e,n,r){t.sort(e);const i=function(l,u){const d=u-l;let c,f;if(d===0)return null;if(d===1)return c=t[l],f=n?n(c):c,new Me(f,c.node,Me.BLACK,null,null);{const p=parseInt(d/2,10)+l,v=i(l,p),_=i(p+1,u);return c=t[p],f=n?n(c):c,new Me(f,c.node,Me.BLACK,v,_)}},s=function(l){let u=null,d=null,c=t.length;const f=function(v,_){const E=c-v,m=c;c-=v;const h=i(E+1,m),y=t[E],w=n?n(y):y;p(new Me(w,y.node,_,null,h))},p=function(v){u?(u.left=v,u=v):(d=v,u=v)};for(let v=0;v<l.count;++v){const _=l.nextBitIsOne(),E=Math.pow(2,l.count-(v+1));_?f(E,Me.BLACK):(f(E,Me.BLACK),f(E,Me.RED))}return d},o=new T4(t.length),a=s(o);return new ut(r||e,a)};/**
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
 */let af;const ji={};class On{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return R(ji&&xe,"ChildrenNode.ts has not been loaded"),af=af||new On({".priority":ji},{".priority":xe}),af}get(e){const n=Rs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ut?n:null}hasIndex(e){return Hn(this.indexSet_,e.toString())}addIndex(e,n){R(e!==hs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(H.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Vu(r,e.getCompare()):a=ji;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new On(d,u)}addToIndexes(e,n){const r=Lu(this.indexes_,(i,s)=>{const o=Rs(this.indexSet_,s);if(R(o,"Missing index implementation for "+s),i===ji)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(H.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Vu(a,o.getCompare())}else return ji;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new H(e.name,a))),l.insert(e,e.node)}});return new On(r,this.indexSet_)}removeFromIndexes(e,n){const r=Lu(this.indexes_,i=>{if(i===ji)return i;{const s=n.get(e.name);return s?i.remove(new H(e.name,s)):i}});return new On(r,this.indexSet_)}}/**
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
 */let lo;class ${constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&BC(this.priorityNode_),this.children_.isEmpty()&&R(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return lo||(lo=new $(new ut(Qm),null,On.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||lo}updatePriority(e){return this.children_.isEmpty()?this:new $(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?lo:n}}getChild(e){const n=Y(e);return n===null?this:this.getImmediateChild(n).getChild(ue(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(R(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new H(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?lo:this.priorityNode_;return new $(i,o,s)}}updateChild(e,n){const r=Y(e);if(r===null)return n;{R(Y(e)!==".priority"||Nr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ue(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(xe,(o,a)=>{n[o]=a.val(e),r++,s&&$.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+zC(this.getPriority().val())+":"),this.forEachChild(xe,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":hC(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new H(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new H(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new H(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,H.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,H.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ba?-1:0}withIndex(e){if(e===hs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new $(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===hs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(xe),i=n.getIterator(xe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===hs?null:this.indexMap_.get(e.toString())}}$.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class I4 extends ${constructor(){super(new ut(Qm),$.EMPTY_NODE,On.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return $.EMPTY_NODE}isEmpty(){return!1}}const Ba=new I4;Object.defineProperties(H,{MIN:{value:new H(As,$.EMPTY_NODE)},MAX:{value:new H(wi,Ba)}});UC.__EMPTY_NODE=$.EMPTY_NODE;Ae.__childrenNodeConstructor=$;w4(Ba);S4(Ba);/**
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
 */const k4=!0;function Be(t,e=null){if(t===null)return $.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),R(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ae(n,Be(e))}if(!(t instanceof Array)&&k4){const n=[];let r=!1;if(pt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Be(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new H(o,l)))}}),n.length===0)return $.EMPTY_NODE;const s=Vu(n,_4,o=>o.name,Qm);if(r){const o=Vu(n,xe.getCompare());return new $(s,Be(e),new On({".priority":o},{".priority":xe}))}else return new $(s,Be(e),On.Default)}else{let n=$.EMPTY_NODE;return pt(t,(r,i)=>{if(Hn(t,r)&&r.substring(0,1)!=="."){const s=Be(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Be(e))}}E4(Be);/**
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
 */class b4 extends $c{constructor(e){super(),this.indexPath_=e,R(!G(e)&&Y(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ys(e.name,n.name):s}makePost(e,n){const r=Be(e),i=$.EMPTY_NODE.updateChild(this.indexPath_,r);return new H(n,i)}maxPost(){const e=$.EMPTY_NODE.updateChild(this.indexPath_,Ba);return new H(wi,e)}toString(){return MC(this.indexPath_,0).join("/")}}/**
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
 */class P4 extends $c{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ys(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return H.MIN}maxPost(){return H.MAX}makePost(e,n){const r=Be(e);return new H(n,r)}toString(){return".value"}}const R4=new P4;/**
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
 */function HC(t){return{type:"value",snapshotNode:t}}function Ls(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ma(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ga(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function O4(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Xm{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){R(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ma(n,a)):R(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ls(n,r)):o.trackChildChange(ga(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(xe,(i,s)=>{n.hasChild(i)||r.trackChildChange(ma(i,s))}),n.isLeafNode()||n.forEachChild(xe,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ga(i,s,o))}else r.trackChildChange(Ls(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?$.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ya{constructor(e){this.indexedFilter_=new Xm(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ya.getStartPost_(e),this.endPost_=ya.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new H(n,r))||(r=$.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=$.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority($.EMPTY_NODE);const s=this;return n.forEachChild(xe,(o,a)=>{s.matches(new H(o,a))||(i=i.updateImmediateChild(o,$.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class N4{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ya(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new H(n,r))||(r=$.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=$.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=$.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority($.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,$.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(f,p)=>c(p,f)}else o=this.index_.getCompare();const a=e;R(a.numChildren()===this.limit_,"");const l=new H(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const c=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,l);if(d&&!r.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(ga(n,r,c)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ma(n,c));const _=a.updateImmediateChild(n,$.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Ls(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return r.isEmpty()?e:d&&o(u,l)>=0?(s!=null&&(s.trackChildChange(ma(u.name,u.node)),s.trackChildChange(Ls(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,$.EMPTY_NODE)):e}}/**
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
 */class Jm{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=xe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return R(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return R(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:As}hasEnd(){return this.endSet_}getIndexEndValue(){return R(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return R(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:wi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return R(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===xe}copy(){const e=new Jm;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function A4(t){return t.loadsAllData()?new Xm(t.getIndex()):t.hasLimit()?new N4(t):new ya(t)}function Av(t){const e={};if(t.isDefault())return e;let n;if(t.index_===xe?n="$priority":t.index_===R4?n="$value":t.index_===hs?n="$key":(R(t.index_ instanceof b4,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Pe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Pe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Pe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Pe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Pe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Lv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==xe&&(e.i=t.index_.toString()),e}/**
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
 */class Hu extends AC{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ua("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(R(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Hu.getListenId_(e,r),a={};this.listens_[o]=a;const l=Av(e._queryParams);this.restRequest_(s+".json",l,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Rs(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=Hu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Av(e._queryParams),r=e._path.toString(),i=new Nm;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Gs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ca(a.responseText)}catch{Tt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Tt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class L4{constructor(){this.rootNode_=$.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Gu(){return{value:null,children:new Map}}function GC(t,e,n){if(G(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Y(e);t.children.has(r)||t.children.set(r,Gu());const i=t.children.get(r);e=ue(e),GC(i,e,n)}}function Yh(t,e,n){t.value!==null?n(e,t.value):D4(t,(r,i)=>{const s=new oe(e.toString()+"/"+r);Yh(i,s,n)})}function D4(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class M4{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&pt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Dv=10*1e3,F4=30*1e3,j4=5*60*1e3;class $4{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new M4(e);const r=Dv+(F4-Dv)*Math.random();Ao(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;pt(e,(i,s)=>{s>0&&Hn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ao(this.reportStats_.bind(this),Math.floor(Math.random()*2*j4))}}/**
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
 */var Yt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Yt||(Yt={}));function KC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Zm(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function eg(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ku{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Yt.ACK_USER_WRITE,this.source=KC()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return R(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new oe(e));return new Ku(Z(),n,this.revert)}}else return R(Y(this.path)===e,"operationForChild called for unrelated child."),new Ku(ue(this.path),this.affectedTree,this.revert)}}/**
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
 */class va{constructor(e,n){this.source=e,this.path=n,this.type=Yt.LISTEN_COMPLETE}operationForChild(e){return G(this.path)?new va(this.source,Z()):new va(this.source,ue(this.path))}}/**
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
 */class _a{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Yt.MERGE}operationForChild(e){if(G(this.path)){const n=this.children.subtree(new oe(e));return n.isEmpty()?null:n.value?new Ei(this.source,Z(),n.value):new _a(this.source,Z(),n)}else return R(Y(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new _a(this.source,ue(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class U4{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function z4(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(O4(o.childName,o.snapshotNode))}),uo(t,i,"child_removed",e,r,n),uo(t,i,"child_added",e,r,n),uo(t,i,"child_moved",s,r,n),uo(t,i,"child_changed",e,r,n),uo(t,i,"value",e,r,n),i}function uo(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>W4(t,a,l)),o.forEach(a=>{const l=B4(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function B4(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function W4(t,e,n){if(e.childName==null||n.childName==null)throw Hs("Should only compare child_ events.");const r=new H(e.childName,e.snapshotNode),i=new H(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Uc(t,e){return{eventCache:t,serverCache:e}}function Lo(t,e,n,r){return Uc(new Ar(e,n,r),t.serverCache)}function qC(t,e,n,r){return Uc(t.eventCache,new Ar(e,n,r))}function qu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Si(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let lf;const V4=()=>(lf||(lf=new ut(PL)),lf);class pe{constructor(e,n=V4()){this.value=e,this.children=n}static fromObject(e){let n=new pe(null);return pt(e,(r,i)=>{n=n.set(new oe(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Z(),value:this.value};if(G(e))return null;{const r=Y(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ue(e),n);return s!=null?{path:Re(new oe(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const n=Y(e),r=this.children.get(n);return r!==null?r.subtree(ue(e)):new pe(null)}}set(e,n){if(G(e))return new pe(n,this.children);{const r=Y(e),s=(this.children.get(r)||new pe(null)).set(ue(e),n),o=this.children.insert(r,s);return new pe(this.value,o)}}remove(e){if(G(e))return this.children.isEmpty()?new pe(null):new pe(null,this.children);{const n=Y(e),r=this.children.get(n);if(r){const i=r.remove(ue(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new pe(null):new pe(this.value,s)}else return this}}get(e){if(G(e))return this.value;{const n=Y(e),r=this.children.get(n);return r?r.get(ue(e)):null}}setTree(e,n){if(G(e))return n;{const r=Y(e),s=(this.children.get(r)||new pe(null)).setTree(ue(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new pe(this.value,o)}}fold(e){return this.fold_(Z(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Re(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Z(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(G(e))return null;{const s=Y(e),o=this.children.get(s);return o?o.findOnPath_(ue(e),Re(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Z(),n)}foreachOnPath_(e,n,r){if(G(e))return this;{this.value&&r(n,this.value);const i=Y(e),s=this.children.get(i);return s?s.foreachOnPath_(ue(e),Re(n,i),r):new pe(null)}}foreach(e){this.foreach_(Z(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Re(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Zt{constructor(e){this.writeTree_=e}static empty(){return new Zt(new pe(null))}}function Do(t,e,n){if(G(e))return new Zt(new pe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=tt(i,e);return s=s.updateChild(o,n),new Zt(t.writeTree_.set(i,s))}else{const i=new pe(n),s=t.writeTree_.setTree(e,i);return new Zt(s)}}}function Mv(t,e,n){let r=t;return pt(n,(i,s)=>{r=Do(r,Re(e,i),s)}),r}function Fv(t,e){if(G(e))return Zt.empty();{const n=t.writeTree_.setTree(e,new pe(null));return new Zt(n)}}function Qh(t,e){return bi(t,e)!=null}function bi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(tt(n.path,e)):null}function jv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(xe,(r,i)=>{e.push(new H(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new H(r,i.value))}),e}function Tr(t,e){if(G(e))return t;{const n=bi(t,e);return n!=null?new Zt(new pe(n)):new Zt(t.writeTree_.subtree(e))}}function Xh(t){return t.writeTree_.isEmpty()}function Ds(t,e){return YC(Z(),t.writeTree_,e)}function YC(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(R(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=YC(Re(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Re(t,".priority"),r)),n}}/**
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
 */function zc(t,e){return ZC(e,t)}function H4(t,e,n,r,i){R(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Do(t.visibleWrites,e,n)),t.lastWriteId=r}function G4(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function K4(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);R(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&q4(a,r.path)?i=!1:qt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return Y4(t),!0;if(r.snap)t.visibleWrites=Fv(t.visibleWrites,r.path);else{const a=r.children;pt(a,l=>{t.visibleWrites=Fv(t.visibleWrites,Re(r.path,l))})}return!0}else return!1}function q4(t,e){if(t.snap)return qt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&qt(Re(t.path,n),e))return!0;return!1}function Y4(t){t.visibleWrites=QC(t.allWrites,Q4,Z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Q4(t){return t.visible}function QC(t,e,n){let r=Zt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)qt(n,o)?(a=tt(n,o),r=Do(r,a,s.snap)):qt(o,n)&&(a=tt(o,n),r=Do(r,Z(),s.snap.getChild(a)));else if(s.children){if(qt(n,o))a=tt(n,o),r=Mv(r,a,s.children);else if(qt(o,n))if(a=tt(o,n),G(a))r=Mv(r,Z(),s.children);else{const l=Rs(s.children,Y(a));if(l){const u=l.getChild(ue(a));r=Do(r,Z(),u)}}}else throw Hs("WriteRecord should have .snap or .children")}}return r}function XC(t,e,n,r,i){if(!r&&!i){const s=bi(t.visibleWrites,e);if(s!=null)return s;{const o=Tr(t.visibleWrites,e);if(Xh(o))return n;if(n==null&&!Qh(o,Z()))return null;{const a=n||$.EMPTY_NODE;return Ds(o,a)}}}else{const s=Tr(t.visibleWrites,e);if(!i&&Xh(s))return n;if(!i&&n==null&&!Qh(s,Z()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(qt(u.path,e)||qt(e,u.path))},a=QC(t.allWrites,o,e),l=n||$.EMPTY_NODE;return Ds(a,l)}}}function X4(t,e,n){let r=$.EMPTY_NODE;const i=bi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(xe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Tr(t.visibleWrites,e);return n.forEachChild(xe,(o,a)=>{const l=Ds(Tr(s,new oe(o)),a);r=r.updateImmediateChild(o,l)}),jv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Tr(t.visibleWrites,e);return jv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function J4(t,e,n,r,i){R(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Re(e,n);if(Qh(t.visibleWrites,s))return null;{const o=Tr(t.visibleWrites,s);return Xh(o)?i.getChild(n):Ds(o,i.getChild(n))}}function Z4(t,e,n,r){const i=Re(e,n),s=bi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Tr(t.visibleWrites,i);return Ds(o,r.getNode().getImmediateChild(n))}else return null}function eD(t,e){return bi(t.visibleWrites,e)}function tD(t,e,n,r,i,s,o){let a;const l=Tr(t.visibleWrites,e),u=bi(l,Z());if(u!=null)a=u;else if(n!=null)a=Ds(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],c=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let p=f.getNext();for(;p&&d.length<i;)c(p,r)!==0&&d.push(p),p=f.getNext();return d}else return[]}function nD(){return{visibleWrites:Zt.empty(),allWrites:[],lastWriteId:-1}}function Yu(t,e,n,r){return XC(t.writeTree,t.treePath,e,n,r)}function tg(t,e){return X4(t.writeTree,t.treePath,e)}function $v(t,e,n,r){return J4(t.writeTree,t.treePath,e,n,r)}function Qu(t,e){return eD(t.writeTree,Re(t.treePath,e))}function rD(t,e,n,r,i,s){return tD(t.writeTree,t.treePath,e,n,r,i,s)}function ng(t,e,n){return Z4(t.writeTree,t.treePath,e,n)}function JC(t,e){return ZC(Re(t.treePath,e),t.writeTree)}function ZC(t,e){return{treePath:t,writeTree:e}}/**
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
 */class iD{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;R(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),R(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ga(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ma(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ls(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ga(r,e.snapshotNode,i.oldSnap));else throw Hs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class sD{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const ex=new sD;class rg{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Ar(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ng(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Si(this.viewCache_),s=rD(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function oD(t){return{filter:t}}function aD(t,e){R(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),R(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function lD(t,e,n,r,i){const s=new iD;let o,a;if(n.type===Yt.OVERWRITE){const u=n;u.source.fromUser?o=Jh(t,e,u.path,u.snap,r,i,s):(R(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!G(u.path),o=Xu(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===Yt.MERGE){const u=n;u.source.fromUser?o=cD(t,e,u.path,u.children,r,i,s):(R(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Zh(t,e,u.path,u.children,r,i,a,s))}else if(n.type===Yt.ACK_USER_WRITE){const u=n;u.revert?o=hD(t,e,u.path,r,i,s):o=dD(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Yt.LISTEN_COMPLETE)o=fD(t,e,n.path,r,s);else throw Hs("Unknown operation type: "+n.type);const l=s.getChanges();return uD(e,o,l),{viewCache:o,changes:l}}function uD(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=qu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(HC(qu(e)))}}function tx(t,e,n,r,i,s){const o=e.eventCache;if(Qu(r,n)!=null)return e;{let a,l;if(G(n))if(R(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Si(e),d=u instanceof $?u:$.EMPTY_NODE,c=tg(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=Yu(r,Si(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=Y(n);if(u===".priority"){R(Nr(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const c=$v(r,n,d,l);c!=null?a=t.filter.updatePriority(d,c):a=o.getNode()}else{const d=ue(n);let c;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=$v(r,n,o.getNode(),l);f!=null?c=o.getNode().getImmediateChild(u).updateChild(d,f):c=o.getNode().getImmediateChild(u)}else c=ng(r,u,e.serverCache);c!=null?a=t.filter.updateChild(o.getNode(),u,c,d,i,s):a=o.getNode()}}return Lo(e,a,o.isFullyInitialized()||G(n),t.filter.filtersNodes())}}function Xu(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(G(n))u=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,r);u=d.updateFullNode(l.getNode(),p,null)}else{const p=Y(n);if(!l.isCompleteForPath(n)&&Nr(n)>1)return e;const v=ue(n),E=l.getNode().getImmediateChild(p).updateChild(v,r);p===".priority"?u=d.updatePriority(l.getNode(),E):u=d.updateChild(l.getNode(),p,E,v,ex,null)}const c=qC(e,u,l.isFullyInitialized()||G(n),d.filtersNodes()),f=new rg(i,c,s);return tx(t,c,n,i,f,a)}function Jh(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const d=new rg(i,e,s);if(G(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Lo(e,u,!0,t.filter.filtersNodes());else{const c=Y(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Lo(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=ue(n),p=a.getNode().getImmediateChild(c);let v;if(G(f))v=r;else{const _=d.getCompleteChild(c);_!=null?DC(f)===".priority"&&_.getChild(FC(f)).isEmpty()?v=_:v=_.updateChild(f,r):v=$.EMPTY_NODE}if(p.equals(v))l=e;else{const _=t.filter.updateChild(a.getNode(),c,v,f,d,o);l=Lo(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Uv(t,e){return t.eventCache.isCompleteForChild(e)}function cD(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const d=Re(n,l);Uv(e,Y(d))&&(a=Jh(t,a,d,u,i,s,o))}),r.foreach((l,u)=>{const d=Re(n,l);Uv(e,Y(d))||(a=Jh(t,a,d,u,i,s,o))}),a}function zv(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Zh(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;G(n)?u=r:u=new pe(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,f)=>{if(d.hasChild(c)){const p=e.serverCache.getNode().getImmediateChild(c),v=zv(t,p,f);l=Xu(t,l,new oe(c),v,i,s,o,a)}}),u.children.inorderTraversal((c,f)=>{const p=!e.serverCache.isCompleteForChild(c)&&f.value===null;if(!d.hasChild(c)&&!p){const v=e.serverCache.getNode().getImmediateChild(c),_=zv(t,v,f);l=Xu(t,l,new oe(c),_,i,s,o,a)}}),l}function dD(t,e,n,r,i,s,o){if(Qu(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(G(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Xu(t,e,n,l.getNode().getChild(n),i,s,a,o);if(G(n)){let u=new pe(null);return l.getNode().forEachChild(hs,(d,c)=>{u=u.set(new oe(d),c)}),Zh(t,e,n,u,i,s,a,o)}else return e}else{let u=new pe(null);return r.foreach((d,c)=>{const f=Re(n,d);l.isCompleteForPath(f)&&(u=u.set(d,l.getNode().getChild(f)))}),Zh(t,e,n,u,i,s,a,o)}}function fD(t,e,n,r,i){const s=e.serverCache,o=qC(e,s.getNode(),s.isFullyInitialized()||G(n),s.isFiltered());return tx(t,o,n,r,ex,i)}function hD(t,e,n,r,i,s){let o;if(Qu(r,n)!=null)return e;{const a=new rg(r,e,i),l=e.eventCache.getNode();let u;if(G(n)||Y(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Yu(r,Si(e));else{const c=e.serverCache.getNode();R(c instanceof $,"serverChildren would be complete if leaf node"),d=tg(r,c)}d=d,u=t.filter.updateFullNode(l,d,s)}else{const d=Y(n);let c=ng(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=l.getImmediateChild(d)),c!=null?u=t.filter.updateChild(l,d,c,ue(n),a,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(l,d,$.EMPTY_NODE,ue(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Yu(r,Si(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Qu(r,Z())!=null,Lo(e,u,o,t.filter.filtersNodes())}}/**
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
 */class pD{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Xm(r.getIndex()),s=A4(r);this.processor_=oD(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode($.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode($.EMPTY_NODE,a.getNode(),null),d=new Ar(l,o.isFullyInitialized(),i.filtersNodes()),c=new Ar(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Uc(c,d),this.eventGenerator_=new U4(this.query_)}get query(){return this.query_}}function mD(t){return t.viewCache_.serverCache.getNode()}function gD(t){return qu(t.viewCache_)}function yD(t,e){const n=Si(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!G(e)&&!n.getImmediateChild(Y(e)).isEmpty())?n.getChild(e):null}function Bv(t){return t.eventRegistrations_.length===0}function vD(t,e){t.eventRegistrations_.push(e)}function Wv(t,e,n){const r=[];if(n){R(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Vv(t,e,n,r){e.type===Yt.MERGE&&e.source.queryId!==null&&(R(Si(t.viewCache_),"We should always have a full cache before handling merges"),R(qu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=lD(t.processor_,i,e,n,r);return aD(t.processor_,s.viewCache),R(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,nx(t,s.changes,s.viewCache.eventCache.getNode(),null)}function _D(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(xe,(s,o)=>{r.push(Ls(s,o))}),n.isFullyInitialized()&&r.push(HC(n.getNode())),nx(t,r,n.getNode(),e)}function nx(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return z4(t.eventGenerator_,e,n,i)}/**
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
 */let Ju;class rx{constructor(){this.views=new Map}}function wD(t){R(!Ju,"__referenceConstructor has already been defined"),Ju=t}function ED(){return R(Ju,"Reference.ts has not been loaded"),Ju}function SD(t){return t.views.size===0}function ig(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return R(s!=null,"SyncTree gave us an op for an invalid query."),Vv(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Vv(o,e,n,r));return s}}function ix(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Yu(n,i?r:null),l=!1;a?l=!0:r instanceof $?(a=tg(n,r),l=!1):(a=$.EMPTY_NODE,l=!1);const u=Uc(new Ar(a,l,!1),new Ar(r,i,!1));return new pD(e,u)}return o}function CD(t,e,n,r,i,s){const o=ix(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),vD(o,n),_D(o,n)}function xD(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Lr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(Wv(u,n,r)),Bv(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(Wv(l,n,r)),Bv(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Lr(t)&&s.push(new(ED())(e._repo,e._path)),{removed:s,events:o}}function sx(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ir(t,e){let n=null;for(const r of t.views.values())n=n||yD(r,e);return n}function ox(t,e){if(e._queryParams.loadsAllData())return Bc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function ax(t,e){return ox(t,e)!=null}function Lr(t){return Bc(t)!=null}function Bc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Zu;function TD(t){R(!Zu,"__referenceConstructor has already been defined"),Zu=t}function ID(){return R(Zu,"Reference.ts has not been loaded"),Zu}let kD=1;class Hv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new pe(null),this.pendingWriteTree_=nD(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function bD(t,e,n,r,i){return H4(t.pendingWriteTree_,e,n,r,i),i?Va(t,new Ei(KC(),e,n)):[]}function ts(t,e,n=!1){const r=G4(t.pendingWriteTree_,e);if(K4(t.pendingWriteTree_,e)){let s=new pe(null);return r.snap!=null?s=s.set(Z(),!0):pt(r.children,o=>{s=s.set(new oe(o),!0)}),Va(t,new Ku(r.path,s,n))}else return[]}function Wa(t,e,n){return Va(t,new Ei(Zm(),e,n))}function PD(t,e,n){const r=pe.fromObject(n);return Va(t,new _a(Zm(),e,r))}function RD(t,e){return Va(t,new va(Zm(),e))}function OD(t,e,n){const r=sg(t,n);if(r){const i=og(r),s=i.path,o=i.queryId,a=tt(s,e),l=new va(eg(o),a);return ag(t,s,l)}else return[]}function lx(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||ax(o,e))){const l=xD(o,e,n,r);SD(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const d=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(f,p)=>Lr(p));if(d&&!c){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const p=DD(f);for(let v=0;v<p.length;++v){const _=p[v],E=_.query,m=hx(t,_);t.listenProvider_.startListening(Mo(E),wa(t,E),m.hashFn,m.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(Mo(e),null):u.forEach(f=>{const p=t.queryToTagMap.get(Wc(f));t.listenProvider_.stopListening(Mo(f),p)}))}MD(t,u)}return a}function ux(t,e,n,r){const i=sg(t,r);if(i!=null){const s=og(i),o=s.path,a=s.queryId,l=tt(o,e),u=new Ei(eg(a),l,n);return ag(t,o,u)}else return[]}function ND(t,e,n,r){const i=sg(t,r);if(i){const s=og(i),o=s.path,a=s.queryId,l=tt(o,e),u=pe.fromObject(n),d=new _a(eg(a),l,u);return ag(t,o,d)}else return[]}function AD(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,p)=>{const v=tt(f,i);s=s||Ir(p,v),o=o||Lr(p)});let a=t.syncPointTree_.get(i);a?(o=o||Lr(a),s=s||Ir(a,Z())):(a=new rx,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=$.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,v)=>{const _=Ir(v,Z());_&&(s=s.updateImmediateChild(p,_))}));const u=ax(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=Wc(e);R(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=FD();t.queryToTagMap.set(f,p),t.tagToQueryMap.set(p,f)}const d=zc(t.pendingWriteTree_,i);let c=CD(a,e,n,d,s,l);if(!u&&!o&&!r){const f=ox(a,e);c=c.concat(jD(t,e,f))}return c}function cx(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=tt(o,e),u=Ir(a,l);if(u)return u});return XC(i,e,s,n,!0)}function LD(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=tt(u,n);r=r||Ir(d,c)});let i=t.syncPointTree_.get(n);i?r=r||Ir(i,Z()):(i=new rx,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Ar(r,!0,!1):null,a=zc(t.pendingWriteTree_,e._path),l=ix(i,e,a,s?o.getNode():$.EMPTY_NODE,s);return gD(l)}function Va(t,e){return dx(e,t.syncPointTree_,null,zc(t.pendingWriteTree_,Z()))}function dx(t,e,n,r){if(G(t.path))return fx(t,e,n,r);{const i=e.get(Z());n==null&&i!=null&&(n=Ir(i,Z()));let s=[];const o=Y(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,d=JC(r,o);s=s.concat(dx(a,l,u,d))}return i&&(s=s.concat(ig(i,t,r,n))),s}}function fx(t,e,n,r){const i=e.get(Z());n==null&&i!=null&&(n=Ir(i,Z()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=JC(r,o),d=t.operationForChild(o);d&&(s=s.concat(fx(d,a,l,u)))}),i&&(s=s.concat(ig(i,t,r,n))),s}function hx(t,e){const n=e.query,r=wa(t,n);return{hashFn:()=>(mD(e)||$.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?OD(t,n._path,r):RD(t,n._path);{const s=NL(i,n);return lx(t,n,null,s)}}}}function wa(t,e){const n=Wc(e);return t.queryToTagMap.get(n)}function Wc(t){return t._path.toString()+"$"+t._queryIdentifier}function sg(t,e){return t.tagToQueryMap.get(e)}function og(t){const e=t.indexOf("$");return R(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new oe(t.substr(0,e))}}function ag(t,e,n){const r=t.syncPointTree_.get(e);R(r,"Missing sync point for query tag that we're tracking");const i=zc(t.pendingWriteTree_,e);return ig(r,n,i,null)}function DD(t){return t.fold((e,n,r)=>{if(n&&Lr(n))return[Bc(n)];{let i=[];return n&&(i=sx(n)),pt(r,(s,o)=>{i=i.concat(o)}),i}})}function Mo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(ID())(t._repo,t._path):t}function MD(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Wc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function FD(){return kD++}function jD(t,e,n){const r=e._path,i=wa(t,e),s=hx(t,n),o=t.listenProvider_.startListening(Mo(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)R(!Lr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,d,c)=>{if(!G(u)&&d&&Lr(d))return[Bc(d).query];{let f=[];return d&&(f=f.concat(sx(d).map(p=>p.query))),pt(c,(p,v)=>{f=f.concat(v)}),f}});for(let u=0;u<l.length;++u){const d=l[u];t.listenProvider_.stopListening(Mo(d),wa(t,d))}}return o}/**
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
 */class lg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new lg(n)}node(){return this.node_}}class ug{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Re(this.path_,e);return new ug(this.syncTree_,n)}node(){return cx(this.syncTree_,this.path_)}}const $D=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Gv=function(t,e,n){if(!t||typeof t!="object")return t;if(R(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return UD(t[".sv"],e,n);if(typeof t[".sv"]=="object")return zD(t[".sv"],e);R(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},UD=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:R(!1,"Unexpected server value: "+t)}},zD=function(t,e,n){t.hasOwnProperty("increment")||R(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&R(!1,"Unexpected increment value: "+r);const i=e.node();if(R(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},BD=function(t,e,n,r){return cg(e,new ug(n,t),r)},WD=function(t,e,n){return cg(t,new lg(e),n)};function cg(t,e,n){const r=t.getPriority().val(),i=Gv(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Gv(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ae(a,Be(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ae(i))),o.forEachChild(xe,(a,l)=>{const u=cg(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class dg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function fg(t,e){let n=e instanceof oe?e:new oe(e),r=t,i=Y(n);for(;i!==null;){const s=Rs(r.node.children,i)||{children:{},childCount:0};r=new dg(i,r,s),n=ue(n),i=Y(n)}return r}function Qs(t){return t.node.value}function px(t,e){t.node.value=e,ep(t)}function mx(t){return t.node.childCount>0}function VD(t){return Qs(t)===void 0&&!mx(t)}function Vc(t,e){pt(t.node.children,(n,r)=>{e(new dg(n,t,r))})}function gx(t,e,n,r){n&&!r&&e(t),Vc(t,i=>{gx(i,e,!0,r)}),n&&r&&e(t)}function HD(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ha(t){return new oe(t.parent===null?t.name:Ha(t.parent)+"/"+t.name)}function ep(t){t.parent!==null&&GD(t.parent,t.name,t)}function GD(t,e,n){const r=VD(n),i=Hn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,ep(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ep(t))}/**
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
 */const KD=/[\[\].#$\/\u0000-\u001F\u007F]/,qD=/[\[\].#$\u0000-\u001F\u007F]/,uf=10*1024*1024,yx=function(t){return typeof t=="string"&&t.length!==0&&!KD.test(t)},vx=function(t){return typeof t=="string"&&t.length!==0&&!qD.test(t)},YD=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),vx(t)},_x=function(t,e,n){const r=n instanceof oe?new d4(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Yr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Yr(r)+" with contents = "+e.toString());if(pC(e))throw new Error(t+"contains "+e.toString()+" "+Yr(r));if(typeof e=="string"&&e.length>uf/3&&Ac(e)>uf)throw new Error(t+"contains a string greater than "+uf+" utf8 bytes "+Yr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(pt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!yx(o)))throw new Error(t+" contains an invalid key ("+o+") "+Yr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);f4(r,o),_x(t,a,r),h4(r)}),i&&s)throw new Error(t+' contains ".value" child '+Yr(r)+" in addition to actual children.")}},wx=function(t,e,n,r){if(!(r&&n===void 0)&&!vx(n))throw new Error(SS(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},QD=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),wx(t,e,n,r)},XD=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!yx(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!YD(n))throw new Error(SS(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class JD{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ZD(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!jC(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function zr(t,e,n){ZD(t,n),eM(t,r=>qt(r,e)||qt(e,r))}function eM(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(tM(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function tM(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();li&&Ye("event: "+n.toString()),za(r)}}}/**
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
 */const nM="repo_interrupt",rM=25;class iM{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new JD,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Gu(),this.transactionQueueTree_=new dg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function sM(t,e,n){if(t.stats_=Km(t.repoInfo_),t.forceRestClient_||ML())t.server_=new Hu(t.repoInfo_,(r,i,s,o)=>{Kv(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>qv(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Pe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Ln(t.repoInfo_,e,(r,i,s,o)=>{Kv(t,r,i,s,o)},r=>{qv(t,r)},r=>{aM(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=zL(t.repoInfo_,()=>new $4(t.stats_,t.server_)),t.infoData_=new L4,t.infoSyncTree_=new Hv({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Wa(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),hg(t,"connected",!1),t.serverSyncTree_=new Hv({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);zr(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function oM(t){const n=t.infoData_.getNode(new oe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ex(t){return $D({timestamp:oM(t)})}function Kv(t,e,n,r,i){t.dataUpdateCount++;const s=new oe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Lu(n,u=>Be(u));o=ND(t.serverSyncTree_,s,l,i)}else{const l=Be(n);o=ux(t.serverSyncTree_,s,l,i)}else if(r){const l=Lu(n,u=>Be(u));o=PD(t.serverSyncTree_,s,l)}else{const l=Be(n);o=Wa(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=gg(t,s)),zr(t.eventQueue_,a,o)}function qv(t,e){hg(t,"connected",e),e===!1&&cM(t)}function aM(t,e){pt(e,(n,r)=>{hg(t,n,r)})}function hg(t,e,n){const r=new oe("/.info/"+e),i=Be(n);t.infoData_.updateSnapshot(r,i);const s=Wa(t.infoSyncTree_,r,i);zr(t.eventQueue_,r,s)}function lM(t){return t.nextWriteId_++}function uM(t,e,n){const r=LD(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Be(i).withIndex(e._queryParams.getIndex());AD(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Wa(t.serverSyncTree_,e._path,s);else{const a=wa(t.serverSyncTree_,e);o=ux(t.serverSyncTree_,e._path,s,a)}return zr(t.eventQueue_,e._path,o),lx(t.serverSyncTree_,e,n,null,!0),s},i=>(pg(t,"get for query "+Pe(e)+" failed: "+i),Promise.reject(new Error(i))))}function cM(t){pg(t,"onDisconnectEvents");const e=Ex(t),n=Gu();Yh(t.onDisconnect_,Z(),(i,s)=>{const o=BD(i,s,t.serverSyncTree_,e);GC(n,i,o)});let r=[];Yh(n,Z(),(i,s)=>{r=r.concat(Wa(t.serverSyncTree_,i,s));const o=pM(t,i);gg(t,o)}),t.onDisconnect_=Gu(),zr(t.eventQueue_,Z(),r)}function dM(t){t.persistentConnection_&&t.persistentConnection_.interrupt(nM)}function pg(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ye(n,...e)}function Sx(t,e,n){return cx(t.serverSyncTree_,e,n)||$.EMPTY_NODE}function mg(t,e=t.transactionQueueTree_){if(e||Hc(t,e),Qs(e)){const n=xx(t,e);R(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&fM(t,Ha(e),n)}else mx(e)&&Vc(e,n=>{mg(t,n)})}function fM(t,e,n){const r=n.map(u=>u.currentWriteId),i=Sx(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];R(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=tt(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{pg(t,"transaction put response",{path:l.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(ts(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&c.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Hc(t,fg(t.transactionQueueTree_,e)),mg(t,t.transactionQueueTree_),zr(t.eventQueue_,e,d);for(let f=0;f<c.length;f++)za(c[f])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{Tt("transaction at "+l.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}gg(t,e)}},o)}function gg(t,e){const n=Cx(t,e),r=Ha(n),i=xx(t,n);return hM(t,i,r),r}function hM(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=tt(n,l.path);let d=!1,c;if(R(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,c=l.abortReason,i=i.concat(ts(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=rM)d=!0,c="maxretry",i=i.concat(ts(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Sx(t,l.path,o);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){_x("transaction failed: Data returned ",p,l.path);let v=Be(p);typeof p=="object"&&p!=null&&Hn(p,".priority")||(v=v.updatePriority(f.getPriority()));const E=l.currentWriteId,m=Ex(t),h=WD(v,f,m);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=h,l.currentWriteId=lM(t),o.splice(o.indexOf(E),1),i=i.concat(bD(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(ts(t.serverSyncTree_,E,!0))}else d=!0,c="nodata",i=i.concat(ts(t.serverSyncTree_,l.currentWriteId,!0))}zr(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(c==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(c),!1,null))))}Hc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)za(r[a]);mg(t,t.transactionQueueTree_)}function Cx(t,e){let n,r=t.transactionQueueTree_;for(n=Y(e);n!==null&&Qs(r)===void 0;)r=fg(r,n),e=ue(e),n=Y(e);return r}function xx(t,e){const n=[];return Tx(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Tx(t,e,n){const r=Qs(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Vc(e,i=>{Tx(t,i,n)})}function Hc(t,e){const n=Qs(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,px(e,n.length>0?n:void 0)}Vc(e,r=>{Hc(t,r)})}function pM(t,e){const n=Ha(Cx(t,e)),r=fg(t.transactionQueueTree_,e);return HD(r,i=>{cf(t,i)}),cf(t,r),gx(r,i=>{cf(t,i)}),n}function cf(t,e){const n=Qs(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(R(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(R(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ts(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?px(e,void 0):n.length=s+1,zr(t.eventQueue_,Ha(e),i);for(let o=0;o<r.length;o++)za(r[o])}}/**
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
 */function mM(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function gM(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Tt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Yv=function(t,e){const n=yM(t),r=n.namespace;n.domain==="firebase.com"&&zn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&zn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||kL();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new IC(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new oe(n.pathString)}},yM=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=mM(t.substring(d,c)));const f=gM(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const p=e.slice(0,u);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class vM{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Pe(this.snapshot.exportVal())}}class _M{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class wM{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return R(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class yg{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return G(this._path)?null:DC(this._path)}get ref(){return new Kn(this._repo,this._path)}get _queryIdentifier(){const e=Lv(this._queryParams),n=Hm(e);return n==="{}"?"default":n}get _queryObject(){return Lv(this._queryParams)}isEqual(e){if(e=mt(e),!(e instanceof yg))return!1;const n=this._repo===e._repo,r=jC(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+c4(this._path)}}class Kn extends yg{constructor(e,n){super(e,n,new Jm,!1)}get parent(){const e=FC(this._path);return e===null?null:new Kn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ea{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new oe(e),r=tp(this.ref,e);return new Ea(this._node.getChild(n),r,xe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ea(i,tp(this.ref,r),xe)))}hasChild(e){const n=new oe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function EM(t,e){return t=mt(t),t._checkNotDeleted("ref"),e!==void 0?tp(t._root,e):t._root}function tp(t,e){return t=mt(t),Y(t._path)===null?QD("child","path",e,!1):wx("child","path",e,!1),new Kn(t._repo,Re(t._path,e))}function SM(t){t=mt(t);const e=new wM(()=>{}),n=new vg(e);return uM(t._repo,t,n).then(r=>new Ea(r,new Kn(t._repo,t._path),t._queryParams.getIndex()))}class vg{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new vM("value",this,new Ea(e.snapshotNode,new Kn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new _M(this,e,n):null}matches(e){return e instanceof vg?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}wD(Kn);TD(Kn);/**
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
 */const CM="FIREBASE_DATABASE_EMULATOR_HOST",np={};let xM=!1;function TM(t,e,n,r){t.repoInfo_=new IC(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function IM(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||zn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ye("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Yv(s,i),a=o.repoInfo,l,u;typeof process<"u"&&gv&&(u=gv[CM]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=Yv(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const d=i&&l?new fs(fs.OWNER):new jL(t.name,t.options,e);XD("Invalid Firebase Database URL",o),G(o.path)||zn("Database URL must point to the root of a Firebase Database (not including a child path).");const c=bM(a,t,d,new FL(t.name,n));return new PM(c,t)}function kM(t,e){const n=np[e];(!n||n[t.key]!==t)&&zn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),dM(t),delete n[t.key]}function bM(t,e,n,r){let i=np[e.name];i||(i={},np[e.name]=i);let s=i[t.toURLString()];return s&&zn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new iM(t,xM,n,r),i[t.toURLString()]=s,s}class PM{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(sM(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Kn(this._repo,Z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(kM(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&zn("Cannot call "+e+" on a deleted database.")}}function RM(t=IS(),e){const n=Mm(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=yO("database");r&&OM(n,...r)}return n}function OM(t,e,n,r={}){t=mt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&zn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&zn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new fs(fs.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:vO(r.mockUserToken,t.app.options.projectId);s=new fs(o)}TM(i,e,n,s)}/**
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
 */function NM(t){SL(Ks),Os(new gi("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return IM(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),xr(yv,vv,t),xr(yv,vv,"esm2017")}Ln.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ln.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};NM();var AM="firebase",LM="10.8.1";/**
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
 */xr(AM,LM,"app");const DM="AIzaSyBvNsD3kcb2TUqMM9BqdQ32YRe6fDJSmyY",MM="learn-react-60375.firebaseapp.com",FM="learn-react-60375",jM="learn-react-60375.appspot.com",$M="1070256347866",UM="1:1070256347866:web:ab4f6b96e7a6bb857ba3e3",zM="https://learn-react-60375-default-rtdb.europe-west1.firebasedatabase.app",BM={apiKey:DM,authDomain:MM,projectId:FM,storageBucket:jM,messagingSenderId:$M,appId:UM,databaseURL:zM},WM=TS(BM),VM=RM(WM),Gl=Aa("teachers/getTeachers",async({signal:t},e)=>{try{const n=EM(VM);return(await SM(n,{signal:t})).val()}catch(n){return e.rejectWithValue(n.message)}}),HM=t=>t.teachers.teachersCard,GM=P.li`
  width: 1184px;
  padding: 24px;
  border-radius: 24px;
  background: rgb(255, 255, 255);
  display: flex;
  position: relative;
  gap: 48px;
`,KM=P.div`
  position: relative;
  width: 120px;
  height: 120px;
  border: 3px solid rgb(251, 233, 186);
  border-radius: 100px;
  background: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
`,qM=P.img`
  border-radius: 100px;
  width: 96px;
  height: 96px;
`,YM=P.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 19px;
  right: 17px;
  width: 12px;
  height: 12px;
`,QM=P.div``,XM=P.div``,JM=P.ul`
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
`,co=P.li`
  align-items: center;
`,ZM=P.div`
  display: flex;
  align-items: center;
`,e5=P.div`
  display: flex;
  align-items: center;
`,t5=P.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: rgb(56, 205, 62);
`,n5=P.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 24px;
  right: 24px;
  cursor: pointer;
`,r5=P.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  margin-bottom: 32px;
`,df=P.span`
  color: rgb(18, 20, 23);
  text-decoration: underline;
`,i5=P.ul`
  text-align: start;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
  li:not(:first-child) > span {
    text-decoration: none;
  }
`,ff=P.li`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: rgb(138, 138, 137);
`,s5=P.button`
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
`,o5=P.ul`
  display: flex;
  gap: 8px;
  & > :first-child {
    background: rgb(244, 197, 80);
    border: none;
  }
  margin-bottom: 32px;
`,a5=P.li`
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
`,l5=()=>g.jsxs("svg",{width:"12.000000",height:"12.000000",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[g.jsx("desc",{children:"Created with Pixso."}),g.jsx("defs",{}),g.jsx("circle",{id:"Ellipse 1",cx:"6.000000",cy:"6.000000",r:"6.000000",fill:"#FFFFFF",fillOpacity:"1.000000"}),g.jsx("circle",{id:"Ellipse 2",cx:"6.000000",cy:"6.000000",r:"4.000000",fill:"#38CD3E",fillOpacity:"1.000000"})]}),u5=()=>g.jsxs("svg",{width:"16.000000",height:"16.000000",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[g.jsx("desc",{children:"Created with Pixso."}),g.jsx("defs",{children:g.jsx("clipPath",{id:"clip44_528",children:g.jsx("rect",{id:"book-open-01",width:"16.000000",height:"16.000000",fill:"white",fillOpacity:"0"})})}),g.jsx("rect",{id:"book-open-01",width:"16.000000",height:"16.000000",fill:"#FFFFFF",fillOpacity:"0"}),g.jsxs("g",{clipPath:"url(#clip44_528)",children:[g.jsx("path",{id:"Accent",d:"M12.2667 2C10.7732 2 10.0264 2 9.45605 2.29065C8.95428 2.54626 8.54633 2.95422 8.29065 3.45605C8 4.02649 8 4.77319 8 6.26672L8 14L8.06671 13.8999C8.52979 13.2053 8.76135 12.858 9.06726 12.6066C9.33807 12.3839 9.65015 12.2169 9.9856 12.1151C10.3645 12 10.7819 12 11.6168 12L12.5333 12C13.2801 12 13.6534 12 13.9387 11.8547C14.1895 11.7268 14.3935 11.5228 14.5214 11.272C14.6667 10.9868 14.6667 10.6134 14.6667 9.8667L14.6667 4.1333C14.6667 3.3866 14.6667 3.01318 14.5214 2.72803C14.3935 2.47717 14.1895 2.27319 13.9387 2.14526C13.6534 2 13.2801 2 12.5333 2L12.2667 2Z",stroke:"#000000",strokeOpacity:"1.000000",strokeWidth:"1.500000",strokeLinejoin:"round"}),g.jsx("path",{id:"Icon",d:"M3.7334 2C5.22687 2 5.97357 2 6.54401 2.29065C7.04578 2.54626 7.45374 2.95422 7.70941 3.45605C8.00006 4.02649 8.00006 4.77319 8.00006 6.26672L8.00006 14L7.93335 13.8999C7.47021 13.2053 7.23871 12.858 6.9328 12.6066C6.66193 12.3839 6.34985 12.2169 6.01447 12.1151C5.63556 12 5.21814 12 4.38324 12L3.46674 12C2.71997 12 2.34662 12 2.0614 11.8547C1.81049 11.7268 1.60651 11.5228 1.4787 11.272C1.33337 10.9868 1.33337 10.6134 1.33337 9.8667L1.33337 4.1333C1.33337 3.3866 1.33337 3.01318 1.4787 2.72803C1.60651 2.47717 1.81049 2.27319 2.0614 2.14526C2.34662 2 2.71997 2 3.46674 2L3.7334 2Z",stroke:"#000000",strokeOpacity:"1.000000",strokeWidth:"1.500000",strokeLinejoin:"round"})]})]}),Ix=()=>g.jsxs("svg",{width:"16.000000",height:"16.000000",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[g.jsx("desc",{children:"Created with Pixso."}),g.jsx("defs",{children:g.jsx("clipPath",{id:"clip44_535",children:g.jsx("rect",{id:"icon/star",width:"16.000000",height:"16.000000",fill:"white",fillOpacity:"0"})})}),g.jsxs("g",{clipPath:"url(#clip44_535)",children:[g.jsx("path",{id:"Star 2",d:"M7.55777 0.838135L5.66953 4.41699C5.5972 4.5542 5.46533 4.65002 5.31256 4.67639L1.32535 5.36633C0.929199 5.43481 0.771851 5.91919 1.05203 6.2074L3.87225 9.10925C3.98032 9.22034 4.03067 9.37537 4.00861 9.52881L3.43262 13.5341C3.3754 13.932 3.78738 14.2313 4.14816 14.054L7.77939 12.2684C7.91852 12.2001 8.08148 12.2001 8.22061 12.2684L11.8519 14.054C12.2126 14.2313 12.6246 13.932 12.5674 13.5341L11.9914 9.52881C11.9693 9.37537 12.0197 9.22034 12.1277 9.10925L14.948 6.2074C15.2281 5.91919 15.0708 5.43481 14.6747 5.36633L10.6874 4.67639C10.5347 4.65002 10.4028 4.5542 10.3304 4.41699L8.44223 0.838135C8.25461 0.482544 7.74539 0.482544 7.55777 0.838135Z",fill:"#FFC531",fillOpacity:"1.000000",fillRule:"evenodd"}),g.jsx("path",{id:"Star 2",d:"M5.66953 4.41699C5.5972 4.5542 5.46533 4.65002 5.31256 4.67639L1.32535 5.36633C0.929199 5.43481 0.771851 5.91919 1.05203 6.2074L3.87225 9.10925C3.98032 9.22034 4.03067 9.37537 4.00861 9.52881L3.43262 13.5341C3.3754 13.932 3.78738 14.2313 4.14816 14.054L7.77939 12.2684C7.91852 12.2001 8.08148 12.2001 8.22061 12.2684L11.8519 14.054C12.2126 14.2313 12.6246 13.932 12.5674 13.5341L11.9914 9.52881C11.9693 9.37537 12.0197 9.22034 12.1277 9.10925L14.948 6.2074C15.2281 5.91919 15.0708 5.43481 14.6747 5.36633L10.6874 4.67639C10.5347 4.65002 10.4028 4.5542 10.3304 4.41699L8.44223 0.838135C8.25461 0.482544 7.74539 0.482544 7.55777 0.838135L5.66953 4.41699ZM6.73087 4.97705C6.48489 5.44324 6.03656 5.76892 5.51715 5.85889L2.83725 6.32251L4.73279 8.27283C5.10019 8.65088 5.27142 9.17786 5.19638 9.69971L4.80927 12.3917L7.24988 11.1917C7.7229 10.959 8.2771 10.959 8.75012 11.1917L11.1907 12.3917L10.8036 9.69971C10.7286 9.17786 10.8998 8.65088 11.2672 8.27283L13.1628 6.32251L10.4828 5.85889C9.96344 5.76892 9.51511 5.44324 9.26913 4.97705L8 2.57153L6.73087 4.97705Z",fill:"#FFC531",fillOpacity:"1.000000",fillRule:"evenodd"})]})]}),c5=()=>g.jsxs("svg",{width:"24.645044",height:"21.751221",viewBox:"0 0 24.645 21.7512",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[g.jsx("desc",{children:"Created with Pixso."}),g.jsx("defs",{}),g.jsx("path",{id:"Vector",d:"M19.9655 1.45386C19.2425 1.15417 18.4674 1 17.6847 1C16.902 1 16.127 1.15417 15.4039 1.45386C14.6809 1.75342 14.0239 2.1925 13.4706 2.74609L12.3222 3.89453L11.1739 2.74609C10.0562 1.62842 8.54035 1.00061 6.95973 1.00061C5.37911 1.00061 3.86323 1.62842 2.74557 2.74609C1.6279 3.86377 1 5.37964 1 6.96033C1 8.54089 1.6279 10.0568 2.74557 11.1744L3.8939 12.3228L12.3222 20.7511L20.7506 12.3228L21.8989 11.1744C22.4525 10.6212 22.8916 9.96423 23.1912 9.24109C23.4908 8.51807 23.645 7.74304 23.645 6.96033C23.645 6.17761 23.4908 5.40259 23.1912 4.67957C22.8916 3.95642 22.4525 3.29944 21.8989 2.74609C21.3456 2.1925 20.6886 1.75342 19.9655 1.45386Z",stroke:"#121417",strokeOpacity:"1.000000",strokeWidth:"2.000000",strokeLinejoin:"round"})]}),d5=P.p`
  color: rgb(18, 20, 23);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  width: 968px;
  margin-bottom: 32px;
`,f5=P.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 32px;
`;P.img`
  border-radius: 100px;
`;const h5=P.div`
  width: 44px;
  height: 44px;
  background-size: cover;
  border-radius: 100px;
  background-image: url(${t=>t.avatarUrl});
  background-position: 50%;
`,p5=P.li``,m5=P.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
`,g5=P.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`,Qv=P.li`
  color: rgb(138, 138, 137);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  display: flex;
  align-items: center;
  gap: 8px;
`,y5=P.span`
  color: rgb(18, 20, 23);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`,v5=P.p`
  color: rgb(18, 20, 23);

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;

  text-align: left;
`,_5=({children:t})=>g.jsx(_P,{shouldForwardProp:e=>e!=="avatarUrl",children:t}),kx=({experience:t,reviews:e})=>g.jsxs(g.Fragment,{children:[g.jsx(d5,{children:t}),g.jsx(f5,{children:e.map((n,r)=>g.jsxs(p5,{children:[g.jsxs(g5,{children:[g.jsx("div",{children:g.jsx(h5,{avatarUrl:n.reviewer_avatar})}),g.jsxs(m5,{children:[g.jsx(Qv,{children:n.reviewer_name}),g.jsxs(Qv,{children:[g.jsx(Ix,{}),g.jsxs(y5,{children:[" ",n.reviewer_rating]})]})]})]}),g.jsx(v5,{children:n.comment})]},r))})]});kx.propTypes={experience:K.string,reviews:K.arrayOf(K.shape({comment:K.string,reviewer_name:K.string,reviewer_rating:K.number}))};const w5=P.button`
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
`,E5=()=>g.jsx(w5,{children:"Book trial lesson"}),bx=t=>{const{avatar_url:e,conditions:n,experience:r,languages:i,lesson_info:s,lessons_done:o,levels:a,name:l,price_per_hour:u,rating:d,reviews:c,surname:f}=t,[p,v]=C.useState(!1),_=()=>{v(!0)};return g.jsxs(GM,{children:[g.jsxs(KM,{children:[g.jsx(YM,{children:g.jsx(l5,{})}),g.jsx(qM,{src:e,alt:"avatar"})]}),g.jsxs(QM,{children:[g.jsx(n5,{children:g.jsx(c5,{})}),g.jsx(XM,{children:g.jsxs(JM,{children:[g.jsx(co,{children:"Languages"}),g.jsxs(co,{children:[g.jsx(ZM,{children:g.jsx(u5,{})}),"Lessons online"]}),g.jsxs(co,{children:["Lessons done: ",o]}),g.jsxs(co,{children:[g.jsx(e5,{children:g.jsx(Ix,{})}),"Rating: ",d]}),g.jsxs(co,{children:["Price / 1 hour: ",g.jsx(t5,{children:u})]})]})}),g.jsxs(r5,{children:[l," ",f]}),g.jsxs(i5,{children:[g.jsxs(ff,{children:["Speaks: ",g.jsx(df,{children:i.join(", ")})]}),g.jsxs(ff,{children:["Lesson Info: ",g.jsx(df,{children:s})]}),g.jsxs(ff,{children:["Conditions: ",g.jsx(df,{children:n.join(", ")})]})]}),!p&&g.jsx(s5,{onClick:_,children:"Read more"}),p&&g.jsx(kx,{experience:r,reviews:c}),g.jsx(o5,{children:a.map((E,m)=>g.jsxs(a5,{children:["#",E]},m))}),p&&g.jsx(E5,{})]})]})};bx.propTypes={avatar_url:K.string,conditions:K.arrayOf(K.string),experience:K.string,languages:K.arrayOf(K.string),lesson_info:K.string,lessons_done:K.number,levels:K.arrayOf(K.string),name:K.string,price_per_hour:K.number,rating:K.number,reviews:K.arrayOf(K.shape({comment:K.string,reviewer_name:K.string,reviewer_rating:K.number})),surname:K.string};const S5=P.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`,C5=()=>{const t=qE(HM);return g.jsx(S5,{children:t.map(e=>g.jsx(bx,{...e},e.id))})},x5=P.div`
  position: relative;
  width: 1440px;
  background: rgb(248, 248, 248);
  padding: 96px 128px 96px 128px;
`,T5=()=>{const t=Na();return C.useEffect(()=>{const e=new AbortController;return t(Gl({signal:e.signal})),()=>e.abort()},[t]),g.jsx(x5,{children:g.jsx(C5,{})})};var I5=function(e){return k5(e)&&!b5(e)};function k5(t){return!!t&&typeof t=="object"}function b5(t){var e=Object.prototype.toString.call(t);return e==="[object RegExp]"||e==="[object Date]"||O5(t)}var P5=typeof Symbol=="function"&&Symbol.for,R5=P5?Symbol.for("react.element"):60103;function O5(t){return t.$$typeof===R5}function N5(t){return Array.isArray(t)?[]:{}}function ec(t,e){return e.clone!==!1&&e.isMergeableObject(t)?Sa(N5(t),t,e):t}function A5(t,e,n){return t.concat(e).map(function(r){return ec(r,n)})}function L5(t,e,n){var r={};return n.isMergeableObject(t)&&Object.keys(t).forEach(function(i){r[i]=ec(t[i],n)}),Object.keys(e).forEach(function(i){!n.isMergeableObject(e[i])||!t[i]?r[i]=ec(e[i],n):r[i]=Sa(t[i],e[i],n)}),r}function Sa(t,e,n){n=n||{},n.arrayMerge=n.arrayMerge||A5,n.isMergeableObject=n.isMergeableObject||I5;var r=Array.isArray(e),i=Array.isArray(t),s=r===i;return s?r?n.arrayMerge(t,e,n):L5(t,e,n):ec(e,n)}Sa.all=function(e,n){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(r,i){return Sa(r,i,n)},{})};var rp=Sa,Px=typeof global=="object"&&global&&global.Object===Object&&global,D5=typeof self=="object"&&self&&self.Object===Object&&self,vn=Px||D5||Function("return this")(),Dr=vn.Symbol,Rx=Object.prototype,M5=Rx.hasOwnProperty,F5=Rx.toString,fo=Dr?Dr.toStringTag:void 0;function j5(t){var e=M5.call(t,fo),n=t[fo];try{t[fo]=void 0;var r=!0}catch{}var i=F5.call(t);return r&&(e?t[fo]=n:delete t[fo]),i}var $5=Object.prototype,U5=$5.toString;function z5(t){return U5.call(t)}var B5="[object Null]",W5="[object Undefined]",Xv=Dr?Dr.toStringTag:void 0;function Pi(t){return t==null?t===void 0?W5:B5:Xv&&Xv in Object(t)?j5(t):z5(t)}function Ox(t,e){return function(n){return t(e(n))}}var _g=Ox(Object.getPrototypeOf,Object);function Ri(t){return t!=null&&typeof t=="object"}var V5="[object Object]",H5=Function.prototype,G5=Object.prototype,Nx=H5.toString,K5=G5.hasOwnProperty,q5=Nx.call(Object);function Jv(t){if(!Ri(t)||Pi(t)!=V5)return!1;var e=_g(t);if(e===null)return!0;var n=K5.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&Nx.call(n)==q5}var Zv=Array.isArray,e_=Object.keys,Y5=Object.prototype.hasOwnProperty,Q5=typeof Element<"u";function ip(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=Zv(t),r=Zv(e),i,s,o;if(n&&r){if(s=t.length,s!=e.length)return!1;for(i=s;i--!==0;)if(!ip(t[i],e[i]))return!1;return!0}if(n!=r)return!1;var a=t instanceof Date,l=e instanceof Date;if(a!=l)return!1;if(a&&l)return t.getTime()==e.getTime();var u=t instanceof RegExp,d=e instanceof RegExp;if(u!=d)return!1;if(u&&d)return t.toString()==e.toString();var c=e_(t);if(s=c.length,s!==e_(e).length)return!1;for(i=s;i--!==0;)if(!Y5.call(e,c[i]))return!1;if(Q5&&t instanceof Element&&e instanceof Element)return t===e;for(i=s;i--!==0;)if(o=c[i],!(o==="_owner"&&t.$$typeof)&&!ip(t[o],e[o]))return!1;return!0}return t!==t&&e!==e}var X5=function(e,n){try{return ip(e,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const nr=Fs(X5);function J5(){this.__data__=[],this.size=0}function Ax(t,e){return t===e||t!==t&&e!==e}function Gc(t,e){for(var n=t.length;n--;)if(Ax(t[n][0],e))return n;return-1}var Z5=Array.prototype,e6=Z5.splice;function t6(t){var e=this.__data__,n=Gc(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():e6.call(e,n,1),--this.size,!0}function n6(t){var e=this.__data__,n=Gc(e,t);return n<0?void 0:e[n][1]}function r6(t){return Gc(this.__data__,t)>-1}function i6(t,e){var n=this.__data__,r=Gc(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function qn(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}qn.prototype.clear=J5;qn.prototype.delete=t6;qn.prototype.get=n6;qn.prototype.has=r6;qn.prototype.set=i6;function s6(){this.__data__=new qn,this.size=0}function o6(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function a6(t){return this.__data__.get(t)}function l6(t){return this.__data__.has(t)}function Ga(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var u6="[object AsyncFunction]",c6="[object Function]",d6="[object GeneratorFunction]",f6="[object Proxy]";function Lx(t){if(!Ga(t))return!1;var e=Pi(t);return e==c6||e==d6||e==u6||e==f6}var hf=vn["__core-js_shared__"],t_=function(){var t=/[^.]+$/.exec(hf&&hf.keys&&hf.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function h6(t){return!!t_&&t_ in t}var p6=Function.prototype,m6=p6.toString;function Oi(t){if(t!=null){try{return m6.call(t)}catch{}try{return t+""}catch{}}return""}var g6=/[\\^$.*+?()[\]{}|]/g,y6=/^\[object .+?Constructor\]$/,v6=Function.prototype,_6=Object.prototype,w6=v6.toString,E6=_6.hasOwnProperty,S6=RegExp("^"+w6.call(E6).replace(g6,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function C6(t){if(!Ga(t)||h6(t))return!1;var e=Lx(t)?S6:y6;return e.test(Oi(t))}function x6(t,e){return t==null?void 0:t[e]}function Ni(t,e){var n=x6(t,e);return C6(n)?n:void 0}var Ca=Ni(vn,"Map"),xa=Ni(Object,"create");function T6(){this.__data__=xa?xa(null):{},this.size=0}function I6(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var k6="__lodash_hash_undefined__",b6=Object.prototype,P6=b6.hasOwnProperty;function R6(t){var e=this.__data__;if(xa){var n=e[t];return n===k6?void 0:n}return P6.call(e,t)?e[t]:void 0}var O6=Object.prototype,N6=O6.hasOwnProperty;function A6(t){var e=this.__data__;return xa?e[t]!==void 0:N6.call(e,t)}var L6="__lodash_hash_undefined__";function D6(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=xa&&e===void 0?L6:e,this}function Ci(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ci.prototype.clear=T6;Ci.prototype.delete=I6;Ci.prototype.get=R6;Ci.prototype.has=A6;Ci.prototype.set=D6;function M6(){this.size=0,this.__data__={hash:new Ci,map:new(Ca||qn),string:new Ci}}function F6(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function Kc(t,e){var n=t.__data__;return F6(e)?n[typeof e=="string"?"string":"hash"]:n.map}function j6(t){var e=Kc(this,t).delete(t);return this.size-=e?1:0,e}function $6(t){return Kc(this,t).get(t)}function U6(t){return Kc(this,t).has(t)}function z6(t,e){var n=Kc(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function Br(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Br.prototype.clear=M6;Br.prototype.delete=j6;Br.prototype.get=$6;Br.prototype.has=U6;Br.prototype.set=z6;var B6=200;function W6(t,e){var n=this.__data__;if(n instanceof qn){var r=n.__data__;if(!Ca||r.length<B6-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new Br(r)}return n.set(t,e),this.size=n.size,this}function Xs(t){var e=this.__data__=new qn(t);this.size=e.size}Xs.prototype.clear=s6;Xs.prototype.delete=o6;Xs.prototype.get=a6;Xs.prototype.has=l6;Xs.prototype.set=W6;function V6(t,e){for(var n=-1,r=t==null?0:t.length;++n<r&&e(t[n],n,t)!==!1;);return t}var n_=function(){try{var t=Ni(Object,"defineProperty");return t({},"",{}),t}catch{}}();function Dx(t,e,n){e=="__proto__"&&n_?n_(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var H6=Object.prototype,G6=H6.hasOwnProperty;function Mx(t,e,n){var r=t[e];(!(G6.call(t,e)&&Ax(r,n))||n===void 0&&!(e in t))&&Dx(t,e,n)}function qc(t,e,n,r){var i=!n;n||(n={});for(var s=-1,o=e.length;++s<o;){var a=e[s],l=r?r(n[a],t[a],a,n,t):void 0;l===void 0&&(l=t[a]),i?Dx(n,a,l):Mx(n,a,l)}return n}function K6(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var q6="[object Arguments]";function r_(t){return Ri(t)&&Pi(t)==q6}var Fx=Object.prototype,Y6=Fx.hasOwnProperty,Q6=Fx.propertyIsEnumerable,X6=r_(function(){return arguments}())?r_:function(t){return Ri(t)&&Y6.call(t,"callee")&&!Q6.call(t,"callee")},Ka=Array.isArray;function J6(){return!1}var jx=typeof St=="object"&&St&&!St.nodeType&&St,i_=jx&&typeof Ct=="object"&&Ct&&!Ct.nodeType&&Ct,Z6=i_&&i_.exports===jx,s_=Z6?vn.Buffer:void 0,eF=s_?s_.isBuffer:void 0,$x=eF||J6,tF=9007199254740991,nF=/^(?:0|[1-9]\d*)$/;function rF(t,e){var n=typeof t;return e=e??tF,!!e&&(n=="number"||n!="symbol"&&nF.test(t))&&t>-1&&t%1==0&&t<e}var iF=9007199254740991;function Ux(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=iF}var sF="[object Arguments]",oF="[object Array]",aF="[object Boolean]",lF="[object Date]",uF="[object Error]",cF="[object Function]",dF="[object Map]",fF="[object Number]",hF="[object Object]",pF="[object RegExp]",mF="[object Set]",gF="[object String]",yF="[object WeakMap]",vF="[object ArrayBuffer]",_F="[object DataView]",wF="[object Float32Array]",EF="[object Float64Array]",SF="[object Int8Array]",CF="[object Int16Array]",xF="[object Int32Array]",TF="[object Uint8Array]",IF="[object Uint8ClampedArray]",kF="[object Uint16Array]",bF="[object Uint32Array]",he={};he[wF]=he[EF]=he[SF]=he[CF]=he[xF]=he[TF]=he[IF]=he[kF]=he[bF]=!0;he[sF]=he[oF]=he[vF]=he[aF]=he[_F]=he[lF]=he[uF]=he[cF]=he[dF]=he[fF]=he[hF]=he[pF]=he[mF]=he[gF]=he[yF]=!1;function PF(t){return Ri(t)&&Ux(t.length)&&!!he[Pi(t)]}function wg(t){return function(e){return t(e)}}var zx=typeof St=="object"&&St&&!St.nodeType&&St,Fo=zx&&typeof Ct=="object"&&Ct&&!Ct.nodeType&&Ct,RF=Fo&&Fo.exports===zx,pf=RF&&Px.process,Ms=function(){try{var t=Fo&&Fo.require&&Fo.require("util").types;return t||pf&&pf.binding&&pf.binding("util")}catch{}}(),o_=Ms&&Ms.isTypedArray,OF=o_?wg(o_):PF,NF=Object.prototype,AF=NF.hasOwnProperty;function Bx(t,e){var n=Ka(t),r=!n&&X6(t),i=!n&&!r&&$x(t),s=!n&&!r&&!i&&OF(t),o=n||r||i||s,a=o?K6(t.length,String):[],l=a.length;for(var u in t)(e||AF.call(t,u))&&!(o&&(u=="length"||i&&(u=="offset"||u=="parent")||s&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||rF(u,l)))&&a.push(u);return a}var LF=Object.prototype;function Eg(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||LF;return t===n}var DF=Ox(Object.keys,Object),MF=Object.prototype,FF=MF.hasOwnProperty;function jF(t){if(!Eg(t))return DF(t);var e=[];for(var n in Object(t))FF.call(t,n)&&n!="constructor"&&e.push(n);return e}function Wx(t){return t!=null&&Ux(t.length)&&!Lx(t)}function Sg(t){return Wx(t)?Bx(t):jF(t)}function $F(t,e){return t&&qc(e,Sg(e),t)}function UF(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var zF=Object.prototype,BF=zF.hasOwnProperty;function WF(t){if(!Ga(t))return UF(t);var e=Eg(t),n=[];for(var r in t)r=="constructor"&&(e||!BF.call(t,r))||n.push(r);return n}function Cg(t){return Wx(t)?Bx(t,!0):WF(t)}function VF(t,e){return t&&qc(e,Cg(e),t)}var Vx=typeof St=="object"&&St&&!St.nodeType&&St,a_=Vx&&typeof Ct=="object"&&Ct&&!Ct.nodeType&&Ct,HF=a_&&a_.exports===Vx,l_=HF?vn.Buffer:void 0,u_=l_?l_.allocUnsafe:void 0;function GF(t,e){if(e)return t.slice();var n=t.length,r=u_?u_(n):new t.constructor(n);return t.copy(r),r}function Hx(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}function KF(t,e){for(var n=-1,r=t==null?0:t.length,i=0,s=[];++n<r;){var o=t[n];e(o,n,t)&&(s[i++]=o)}return s}function Gx(){return[]}var qF=Object.prototype,YF=qF.propertyIsEnumerable,c_=Object.getOwnPropertySymbols,xg=c_?function(t){return t==null?[]:(t=Object(t),KF(c_(t),function(e){return YF.call(t,e)}))}:Gx;function QF(t,e){return qc(t,xg(t),e)}function Kx(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}var XF=Object.getOwnPropertySymbols,qx=XF?function(t){for(var e=[];t;)Kx(e,xg(t)),t=_g(t);return e}:Gx;function JF(t,e){return qc(t,qx(t),e)}function Yx(t,e,n){var r=e(t);return Ka(t)?r:Kx(r,n(t))}function ZF(t){return Yx(t,Sg,xg)}function e8(t){return Yx(t,Cg,qx)}var sp=Ni(vn,"DataView"),op=Ni(vn,"Promise"),ap=Ni(vn,"Set"),lp=Ni(vn,"WeakMap"),d_="[object Map]",t8="[object Object]",f_="[object Promise]",h_="[object Set]",p_="[object WeakMap]",m_="[object DataView]",n8=Oi(sp),r8=Oi(Ca),i8=Oi(op),s8=Oi(ap),o8=Oi(lp),Qr=Pi;(sp&&Qr(new sp(new ArrayBuffer(1)))!=m_||Ca&&Qr(new Ca)!=d_||op&&Qr(op.resolve())!=f_||ap&&Qr(new ap)!=h_||lp&&Qr(new lp)!=p_)&&(Qr=function(t){var e=Pi(t),n=e==t8?t.constructor:void 0,r=n?Oi(n):"";if(r)switch(r){case n8:return m_;case r8:return d_;case i8:return f_;case s8:return h_;case o8:return p_}return e});const Tg=Qr;var a8=Object.prototype,l8=a8.hasOwnProperty;function u8(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&l8.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var g_=vn.Uint8Array;function Ig(t){var e=new t.constructor(t.byteLength);return new g_(e).set(new g_(t)),e}function c8(t,e){var n=e?Ig(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}var d8=/\w*$/;function f8(t){var e=new t.constructor(t.source,d8.exec(t));return e.lastIndex=t.lastIndex,e}var y_=Dr?Dr.prototype:void 0,v_=y_?y_.valueOf:void 0;function h8(t){return v_?Object(v_.call(t)):{}}function p8(t,e){var n=e?Ig(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var m8="[object Boolean]",g8="[object Date]",y8="[object Map]",v8="[object Number]",_8="[object RegExp]",w8="[object Set]",E8="[object String]",S8="[object Symbol]",C8="[object ArrayBuffer]",x8="[object DataView]",T8="[object Float32Array]",I8="[object Float64Array]",k8="[object Int8Array]",b8="[object Int16Array]",P8="[object Int32Array]",R8="[object Uint8Array]",O8="[object Uint8ClampedArray]",N8="[object Uint16Array]",A8="[object Uint32Array]";function L8(t,e,n){var r=t.constructor;switch(e){case C8:return Ig(t);case m8:case g8:return new r(+t);case x8:return c8(t,n);case T8:case I8:case k8:case b8:case P8:case R8:case O8:case N8:case A8:return p8(t,n);case y8:return new r;case v8:case E8:return new r(t);case _8:return f8(t);case w8:return new r;case S8:return h8(t)}}var __=Object.create,D8=function(){function t(){}return function(e){if(!Ga(e))return{};if(__)return __(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();function M8(t){return typeof t.constructor=="function"&&!Eg(t)?D8(_g(t)):{}}var F8="[object Map]";function j8(t){return Ri(t)&&Tg(t)==F8}var w_=Ms&&Ms.isMap,$8=w_?wg(w_):j8,U8="[object Set]";function z8(t){return Ri(t)&&Tg(t)==U8}var E_=Ms&&Ms.isSet,B8=E_?wg(E_):z8,W8=1,V8=2,H8=4,Qx="[object Arguments]",G8="[object Array]",K8="[object Boolean]",q8="[object Date]",Y8="[object Error]",Xx="[object Function]",Q8="[object GeneratorFunction]",X8="[object Map]",J8="[object Number]",Jx="[object Object]",Z8="[object RegExp]",ej="[object Set]",tj="[object String]",nj="[object Symbol]",rj="[object WeakMap]",ij="[object ArrayBuffer]",sj="[object DataView]",oj="[object Float32Array]",aj="[object Float64Array]",lj="[object Int8Array]",uj="[object Int16Array]",cj="[object Int32Array]",dj="[object Uint8Array]",fj="[object Uint8ClampedArray]",hj="[object Uint16Array]",pj="[object Uint32Array]",le={};le[Qx]=le[G8]=le[ij]=le[sj]=le[K8]=le[q8]=le[oj]=le[aj]=le[lj]=le[uj]=le[cj]=le[X8]=le[J8]=le[Jx]=le[Z8]=le[ej]=le[tj]=le[nj]=le[dj]=le[fj]=le[hj]=le[pj]=!0;le[Y8]=le[Xx]=le[rj]=!1;function jo(t,e,n,r,i,s){var o,a=e&W8,l=e&V8,u=e&H8;if(n&&(o=i?n(t,r,i,s):n(t)),o!==void 0)return o;if(!Ga(t))return t;var d=Ka(t);if(d){if(o=u8(t),!a)return Hx(t,o)}else{var c=Tg(t),f=c==Xx||c==Q8;if($x(t))return GF(t,a);if(c==Jx||c==Qx||f&&!i){if(o=l||f?{}:M8(t),!a)return l?JF(t,VF(o,t)):QF(t,$F(o,t))}else{if(!le[c])return i?t:{};o=L8(t,c,a)}}s||(s=new Xs);var p=s.get(t);if(p)return p;s.set(t,o),B8(t)?t.forEach(function(E){o.add(jo(E,e,n,E,t,s))}):$8(t)&&t.forEach(function(E,m){o.set(m,jo(E,e,n,m,t,s))});var v=u?l?e8:ZF:l?Cg:Sg,_=d?void 0:v(t);return V6(_||t,function(E,m){_&&(m=E,E=t[m]),Mx(o,m,jo(E,e,n,m,t,s))}),o}var mj=4;function S_(t){return jo(t,mj)}function Zx(t,e){for(var n=-1,r=t==null?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}var gj="[object Symbol]";function kg(t){return typeof t=="symbol"||Ri(t)&&Pi(t)==gj}var yj="Expected a function";function bg(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(yj);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=t.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(bg.Cache||Br),n}bg.Cache=Br;var vj=500;function _j(t){var e=bg(t,function(r){return n.size===vj&&n.clear(),r}),n=e.cache;return e}var wj=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ej=/\\(\\)?/g,Sj=_j(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(wj,function(n,r,i,s){e.push(i?s.replace(Ej,"$1"):r||n)}),e});const Cj=Sj;var xj=1/0;function Tj(t){if(typeof t=="string"||kg(t))return t;var e=t+"";return e=="0"&&1/t==-xj?"-0":e}var Ij=1/0,C_=Dr?Dr.prototype:void 0,x_=C_?C_.toString:void 0;function eT(t){if(typeof t=="string")return t;if(Ka(t))return Zx(t,eT)+"";if(kg(t))return x_?x_.call(t):"";var e=t+"";return e=="0"&&1/t==-Ij?"-0":e}function kj(t){return t==null?"":eT(t)}function tT(t){return Ka(t)?Zx(t,Tj):kg(t)?[t]:Hx(Cj(kj(t)))}var nT={exports:{}},ie={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var je=typeof Symbol=="function"&&Symbol.for,Pg=je?Symbol.for("react.element"):60103,Rg=je?Symbol.for("react.portal"):60106,Yc=je?Symbol.for("react.fragment"):60107,Qc=je?Symbol.for("react.strict_mode"):60108,Xc=je?Symbol.for("react.profiler"):60114,Jc=je?Symbol.for("react.provider"):60109,Zc=je?Symbol.for("react.context"):60110,Og=je?Symbol.for("react.async_mode"):60111,ed=je?Symbol.for("react.concurrent_mode"):60111,td=je?Symbol.for("react.forward_ref"):60112,nd=je?Symbol.for("react.suspense"):60113,bj=je?Symbol.for("react.suspense_list"):60120,rd=je?Symbol.for("react.memo"):60115,id=je?Symbol.for("react.lazy"):60116,Pj=je?Symbol.for("react.block"):60121,Rj=je?Symbol.for("react.fundamental"):60117,Oj=je?Symbol.for("react.responder"):60118,Nj=je?Symbol.for("react.scope"):60119;function Ot(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Pg:switch(t=t.type,t){case Og:case ed:case Yc:case Xc:case Qc:case nd:return t;default:switch(t=t&&t.$$typeof,t){case Zc:case td:case id:case rd:case Jc:return t;default:return e}}case Rg:return e}}}function rT(t){return Ot(t)===ed}ie.AsyncMode=Og;ie.ConcurrentMode=ed;ie.ContextConsumer=Zc;ie.ContextProvider=Jc;ie.Element=Pg;ie.ForwardRef=td;ie.Fragment=Yc;ie.Lazy=id;ie.Memo=rd;ie.Portal=Rg;ie.Profiler=Xc;ie.StrictMode=Qc;ie.Suspense=nd;ie.isAsyncMode=function(t){return rT(t)||Ot(t)===Og};ie.isConcurrentMode=rT;ie.isContextConsumer=function(t){return Ot(t)===Zc};ie.isContextProvider=function(t){return Ot(t)===Jc};ie.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Pg};ie.isForwardRef=function(t){return Ot(t)===td};ie.isFragment=function(t){return Ot(t)===Yc};ie.isLazy=function(t){return Ot(t)===id};ie.isMemo=function(t){return Ot(t)===rd};ie.isPortal=function(t){return Ot(t)===Rg};ie.isProfiler=function(t){return Ot(t)===Xc};ie.isStrictMode=function(t){return Ot(t)===Qc};ie.isSuspense=function(t){return Ot(t)===nd};ie.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Yc||t===ed||t===Xc||t===Qc||t===nd||t===bj||typeof t=="object"&&t!==null&&(t.$$typeof===id||t.$$typeof===rd||t.$$typeof===Jc||t.$$typeof===Zc||t.$$typeof===td||t.$$typeof===Rj||t.$$typeof===Oj||t.$$typeof===Nj||t.$$typeof===Pj)};ie.typeOf=Ot;nT.exports=ie;var Aj=nT.exports,Ng=Aj,Lj={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Dj={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Mj={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},iT={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ag={};Ag[Ng.ForwardRef]=Mj;Ag[Ng.Memo]=iT;function T_(t){return Ng.isMemo(t)?iT:Ag[t.$$typeof]||Lj}var Fj=Object.defineProperty,jj=Object.getOwnPropertyNames,I_=Object.getOwnPropertySymbols,$j=Object.getOwnPropertyDescriptor,Uj=Object.getPrototypeOf,k_=Object.prototype;function sT(t,e,n){if(typeof e!="string"){if(k_){var r=Uj(e);r&&r!==k_&&sT(t,r,n)}var i=jj(e);I_&&(i=i.concat(I_(e)));for(var s=T_(t),o=T_(e),a=0;a<i.length;++a){var l=i[a];if(!Dj[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=$j(e,l);try{Fj(t,l,u)}catch{}}}}return t}var zj=sT;const Bj=Fs(zj);var Wj=1,Vj=4;function Hj(t){return jo(t,Wj|Vj)}function ne(){return ne=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ne.apply(this,arguments)}function oT(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function fr(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function b_(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var sd=C.createContext(void 0);sd.displayName="FormikContext";var Gj=sd.Provider,Kj=sd.Consumer;function aT(){var t=C.useContext(sd);return t}var P_=function(e){return Array.isArray(e)&&e.length===0},ze=function(e){return typeof e=="function"},qa=function(e){return e!==null&&typeof e=="object"},qj=function(e){return String(Math.floor(Number(e)))===e},mf=function(e){return Object.prototype.toString.call(e)==="[object String]"},lT=function(e){return C.Children.count(e)===0},gf=function(e){return qa(e)&&ze(e.then)};function ye(t,e,n,r){r===void 0&&(r=0);for(var i=tT(e);t&&r<i.length;)t=t[i[r++]];return r!==i.length&&!t||t===void 0?n:t}function mn(t,e,n){for(var r=S_(t),i=r,s=0,o=tT(e);s<o.length-1;s++){var a=o[s],l=ye(t,o.slice(0,s+1));if(l&&(qa(l)||Array.isArray(l)))i=i[a]=S_(l);else{var u=o[s+1];i=i[a]=qj(u)&&Number(u)>=0?[]:{}}}return(s===0?t:i)[o[s]]===n?t:(n===void 0?delete i[o[s]]:i[o[s]]=n,s===0&&n===void 0&&delete r[o[s]],r)}function uT(t,e,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var i=0,s=Object.keys(t);i<s.length;i++){var o=s[i],a=t[o];qa(a)?n.get(a)||(n.set(a,!0),r[o]=Array.isArray(a)?[]:{},uT(a,e,n,r[o])):r[o]=e}return r}function Yj(t,e){switch(e.type){case"SET_VALUES":return ne({},t,{values:e.payload});case"SET_TOUCHED":return ne({},t,{touched:e.payload});case"SET_ERRORS":return nr(t.errors,e.payload)?t:ne({},t,{errors:e.payload});case"SET_STATUS":return ne({},t,{status:e.payload});case"SET_ISSUBMITTING":return ne({},t,{isSubmitting:e.payload});case"SET_ISVALIDATING":return ne({},t,{isValidating:e.payload});case"SET_FIELD_VALUE":return ne({},t,{values:mn(t.values,e.payload.field,e.payload.value)});case"SET_FIELD_TOUCHED":return ne({},t,{touched:mn(t.touched,e.payload.field,e.payload.value)});case"SET_FIELD_ERROR":return ne({},t,{errors:mn(t.errors,e.payload.field,e.payload.value)});case"RESET_FORM":return ne({},t,e.payload);case"SET_FORMIK_STATE":return e.payload(t);case"SUBMIT_ATTEMPT":return ne({},t,{touched:uT(t.values,!0),isSubmitting:!0,submitCount:t.submitCount+1});case"SUBMIT_FAILURE":return ne({},t,{isSubmitting:!1});case"SUBMIT_SUCCESS":return ne({},t,{isSubmitting:!1});default:return t}}var Vr={},Sl={};function Qj(t){var e=t.validateOnChange,n=e===void 0?!0:e,r=t.validateOnBlur,i=r===void 0?!0:r,s=t.validateOnMount,o=s===void 0?!1:s,a=t.isInitialValid,l=t.enableReinitialize,u=l===void 0?!1:l,d=t.onSubmit,c=fr(t,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=ne({validateOnChange:n,validateOnBlur:i,validateOnMount:o,onSubmit:d},c),p=C.useRef(f.initialValues),v=C.useRef(f.initialErrors||Vr),_=C.useRef(f.initialTouched||Sl),E=C.useRef(f.initialStatus),m=C.useRef(!1),h=C.useRef({});C.useEffect(function(){return m.current=!0,function(){m.current=!1}},[]);var y=C.useState(0),w=y[1],T=C.useRef({values:f.initialValues,errors:f.initialErrors||Vr,touched:f.initialTouched||Sl,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),S=T.current,x=C.useCallback(function(I){var N=T.current;T.current=Yj(N,I),N!==T.current&&w(function(D){return D+1})},[]),k=C.useCallback(function(I,N){return new Promise(function(D,j){var V=f.validate(I,N);V==null?D(Vr):gf(V)?V.then(function(te){D(te||Vr)},function(te){j(te)}):D(V)})},[f.validate]),L=C.useCallback(function(I,N){var D=f.validationSchema,j=ze(D)?D(N):D,V=N&&j.validateAt?j.validateAt(N,I):Jj(I,j);return new Promise(function(te,Ne){V.then(function(){te(Vr)},function(En){En.name==="ValidationError"?te(Xj(En)):Ne(En)})})},[f.validationSchema]),F=C.useCallback(function(I,N){return new Promise(function(D){return D(h.current[I].validate(N))})},[]),B=C.useCallback(function(I){var N=Object.keys(h.current).filter(function(j){return ze(h.current[j].validate)}),D=N.length>0?N.map(function(j){return F(j,ye(I,j))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(D).then(function(j){return j.reduce(function(V,te,Ne){return te==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||te&&(V=mn(V,N[Ne],te)),V},{})})},[F]),Nt=C.useCallback(function(I){return Promise.all([B(I),f.validationSchema?L(I):{},f.validate?k(I):{}]).then(function(N){var D=N[0],j=N[1],V=N[2],te=rp.all([D,j,V],{arrayMerge:Zj});return te})},[f.validate,f.validationSchema,B,k,L]),ae=At(function(I){return I===void 0&&(I=S.values),x({type:"SET_ISVALIDATING",payload:!0}),Nt(I).then(function(N){return m.current&&(x({type:"SET_ISVALIDATING",payload:!1}),x({type:"SET_ERRORS",payload:N})),N})});C.useEffect(function(){o&&m.current===!0&&nr(p.current,f.initialValues)&&ae(p.current)},[o,ae]);var gt=C.useCallback(function(I){var N=I&&I.values?I.values:p.current,D=I&&I.errors?I.errors:v.current?v.current:f.initialErrors||{},j=I&&I.touched?I.touched:_.current?_.current:f.initialTouched||{},V=I&&I.status?I.status:E.current?E.current:f.initialStatus;p.current=N,v.current=D,_.current=j,E.current=V;var te=function(){x({type:"RESET_FORM",payload:{isSubmitting:!!I&&!!I.isSubmitting,errors:D,touched:j,status:V,values:N,isValidating:!!I&&!!I.isValidating,submitCount:I&&I.submitCount&&typeof I.submitCount=="number"?I.submitCount:0}})};if(f.onReset){var Ne=f.onReset(S.values,Jg);gf(Ne)?Ne.then(te):te()}else te()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);C.useEffect(function(){m.current===!0&&!nr(p.current,f.initialValues)&&u&&(p.current=f.initialValues,gt(),o&&ae(p.current))},[u,f.initialValues,gt,o,ae]),C.useEffect(function(){u&&m.current===!0&&!nr(v.current,f.initialErrors)&&(v.current=f.initialErrors||Vr,x({type:"SET_ERRORS",payload:f.initialErrors||Vr}))},[u,f.initialErrors]),C.useEffect(function(){u&&m.current===!0&&!nr(_.current,f.initialTouched)&&(_.current=f.initialTouched||Sl,x({type:"SET_TOUCHED",payload:f.initialTouched||Sl}))},[u,f.initialTouched]),C.useEffect(function(){u&&m.current===!0&&!nr(E.current,f.initialStatus)&&(E.current=f.initialStatus,x({type:"SET_STATUS",payload:f.initialStatus}))},[u,f.initialStatus,f.initialTouched]);var _n=At(function(I){if(h.current[I]&&ze(h.current[I].validate)){var N=ye(S.values,I),D=h.current[I].validate(N);return gf(D)?(x({type:"SET_ISVALIDATING",payload:!0}),D.then(function(j){return j}).then(function(j){x({type:"SET_FIELD_ERROR",payload:{field:I,value:j}}),x({type:"SET_ISVALIDATING",payload:!1})})):(x({type:"SET_FIELD_ERROR",payload:{field:I,value:D}}),Promise.resolve(D))}else if(f.validationSchema)return x({type:"SET_ISVALIDATING",payload:!0}),L(S.values,I).then(function(j){return j}).then(function(j){x({type:"SET_FIELD_ERROR",payload:{field:I,value:ye(j,I)}}),x({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Wr=C.useCallback(function(I,N){var D=N.validate;h.current[I]={validate:D}},[]),wn=C.useCallback(function(I){delete h.current[I]},[]),O=At(function(I,N){x({type:"SET_TOUCHED",payload:I});var D=N===void 0?i:N;return D?ae(S.values):Promise.resolve()}),M=C.useCallback(function(I){x({type:"SET_ERRORS",payload:I})},[]),U=At(function(I,N){var D=ze(I)?I(S.values):I;x({type:"SET_VALUES",payload:D});var j=N===void 0?n:N;return j?ae(D):Promise.resolve()}),J=C.useCallback(function(I,N){x({type:"SET_FIELD_ERROR",payload:{field:I,value:N}})},[]),Q=At(function(I,N,D){x({type:"SET_FIELD_VALUE",payload:{field:I,value:N}});var j=D===void 0?n:D;return j?ae(mn(S.values,I,N)):Promise.resolve()}),nn=C.useCallback(function(I,N){var D=N,j=I,V;if(!mf(I)){I.persist&&I.persist();var te=I.target?I.target:I.currentTarget,Ne=te.type,En=te.name,dd=te.id,fd=te.value,MT=te.checked,x7=te.outerHTML,Zg=te.options,FT=te.multiple;D=N||En||dd,j=/number|range/.test(Ne)?(V=parseFloat(fd),isNaN(V)?"":V):/checkbox/.test(Ne)?t$(ye(S.values,D),MT,fd):Zg&&FT?e$(Zg):fd}D&&Q(D,j)},[Q,S.values]),Je=At(function(I){if(mf(I))return function(N){return nn(N,I)};nn(I)}),Ze=At(function(I,N,D){N===void 0&&(N=!0),x({type:"SET_FIELD_TOUCHED",payload:{field:I,value:N}});var j=D===void 0?i:D;return j?ae(S.values):Promise.resolve()}),He=C.useCallback(function(I,N){I.persist&&I.persist();var D=I.target,j=D.name,V=D.id,te=D.outerHTML,Ne=N||j||V;Ze(Ne,!0)},[Ze]),yt=At(function(I){if(mf(I))return function(N){return He(N,I)};He(I)}),Yn=C.useCallback(function(I){ze(I)?x({type:"SET_FORMIK_STATE",payload:I}):x({type:"SET_FORMIK_STATE",payload:function(){return I}})},[]),rn=C.useCallback(function(I){x({type:"SET_STATUS",payload:I})},[]),Di=C.useCallback(function(I){x({type:"SET_ISSUBMITTING",payload:I})},[]),Qn=At(function(){return x({type:"SUBMIT_ATTEMPT"}),ae().then(function(I){var N=I instanceof Error,D=!N&&Object.keys(I).length===0;if(D){var j;try{if(j=PT(),j===void 0)return}catch(V){throw V}return Promise.resolve(j).then(function(V){return m.current&&x({type:"SUBMIT_SUCCESS"}),V}).catch(function(V){if(m.current)throw x({type:"SUBMIT_FAILURE"}),V})}else if(m.current&&(x({type:"SUBMIT_FAILURE"}),N))throw I})}),sn=At(function(I){I&&I.preventDefault&&ze(I.preventDefault)&&I.preventDefault(),I&&I.stopPropagation&&ze(I.stopPropagation)&&I.stopPropagation(),Qn().catch(function(N){console.warn("Warning: An unhandled error was caught from submitForm()",N)})}),Jg={resetForm:gt,validateForm:ae,validateField:_n,setErrors:M,setFieldError:J,setFieldTouched:Ze,setFieldValue:Q,setStatus:rn,setSubmitting:Di,setTouched:O,setValues:U,setFormikState:Yn,submitForm:Qn},PT=At(function(){return d(S.values,Jg)}),RT=At(function(I){I&&I.preventDefault&&ze(I.preventDefault)&&I.preventDefault(),I&&I.stopPropagation&&ze(I.stopPropagation)&&I.stopPropagation(),gt()}),OT=C.useCallback(function(I){return{value:ye(S.values,I),error:ye(S.errors,I),touched:!!ye(S.touched,I),initialValue:ye(p.current,I),initialTouched:!!ye(_.current,I),initialError:ye(v.current,I)}},[S.errors,S.touched,S.values]),NT=C.useCallback(function(I){return{setValue:function(D,j){return Q(I,D,j)},setTouched:function(D,j){return Ze(I,D,j)},setError:function(D){return J(I,D)}}},[Q,Ze,J]),AT=C.useCallback(function(I){var N=qa(I),D=N?I.name:I,j=ye(S.values,D),V={name:D,value:j,onChange:Je,onBlur:yt};if(N){var te=I.type,Ne=I.value,En=I.as,dd=I.multiple;te==="checkbox"?Ne===void 0?V.checked=!!j:(V.checked=!!(Array.isArray(j)&&~j.indexOf(Ne)),V.value=Ne):te==="radio"?(V.checked=j===Ne,V.value=Ne):En==="select"&&dd&&(V.value=V.value||[],V.multiple=!0)}return V},[yt,Je,S.values]),cd=C.useMemo(function(){return!nr(p.current,S.values)},[p.current,S.values]),LT=C.useMemo(function(){return typeof a<"u"?cd?S.errors&&Object.keys(S.errors).length===0:a!==!1&&ze(a)?a(f):a:S.errors&&Object.keys(S.errors).length===0},[a,cd,S.errors,f]),DT=ne({},S,{initialValues:p.current,initialErrors:v.current,initialTouched:_.current,initialStatus:E.current,handleBlur:yt,handleChange:Je,handleReset:RT,handleSubmit:sn,resetForm:gt,setErrors:M,setFormikState:Yn,setFieldTouched:Ze,setFieldValue:Q,setFieldError:J,setStatus:rn,setSubmitting:Di,setTouched:O,setValues:U,submitForm:Qn,validateForm:ae,validateField:_n,isValid:LT,dirty:cd,unregisterField:wn,registerField:Wr,getFieldProps:AT,getFieldMeta:OT,getFieldHelpers:NT,validateOnBlur:i,validateOnChange:n,validateOnMount:o});return DT}function cT(t){var e=Qj(t),n=t.component,r=t.children,i=t.render,s=t.innerRef;return C.useImperativeHandle(s,function(){return e}),C.createElement(Gj,{value:e},n?C.createElement(n,e):i?i(e):r?ze(r)?r(e):lT(r)?null:C.Children.only(r):null)}function Xj(t){var e={};if(t.inner){if(t.inner.length===0)return mn(e,t.path,t.message);for(var i=t.inner,n=Array.isArray(i),r=0,i=n?i:i[Symbol.iterator]();;){var s;if(n){if(r>=i.length)break;s=i[r++]}else{if(r=i.next(),r.done)break;s=r.value}var o=s;ye(e,o.path)||(e=mn(e,o.path,o.message))}}return e}function Jj(t,e,n,r){n===void 0&&(n=!1);var i=up(t);return e[n?"validateSync":"validate"](i,{abortEarly:!1,context:r||i})}function up(t){var e=Array.isArray(t)?[]:{};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=String(n);Array.isArray(t[r])===!0?e[r]=t[r].map(function(i){return Array.isArray(i)===!0||Jv(i)?up(i):i!==""?i:void 0}):Jv(t[r])?e[r]=up(t[r]):e[r]=t[r]!==""?t[r]:void 0}return e}function Zj(t,e,n){var r=t.slice();return e.forEach(function(s,o){if(typeof r[o]>"u"){var a=n.clone!==!1,l=a&&n.isMergeableObject(s);r[o]=l?rp(Array.isArray(s)?[]:{},s,n):s}else n.isMergeableObject(s)?r[o]=rp(t[o],s,n):t.indexOf(s)===-1&&r.push(s)}),r}function e$(t){return Array.from(t).filter(function(e){return e.selected}).map(function(e){return e.value})}function t$(t,e,n){if(typeof t=="boolean")return!!e;var r=[],i=!1,s=-1;if(Array.isArray(t))r=t,s=t.indexOf(n),i=s>=0;else if(!n||n=="true"||n=="false")return!!e;return e&&n&&!i?r.concat(n):i?r.slice(0,s).concat(r.slice(s+1)):r}var n$=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?C.useLayoutEffect:C.useEffect;function At(t){var e=C.useRef(t);return n$(function(){e.current=t}),C.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e.current.apply(void 0,r)},[])}function dT(t){var e=t.validate,n=t.name,r=t.render,i=t.children,s=t.as,o=t.component,a=t.className,l=fr(t,["validate","name","render","children","as","component","className"]),u=aT(),d=fr(u,["validate","validationSchema"]),c=d.registerField,f=d.unregisterField;C.useEffect(function(){return c(n,{validate:e}),function(){f(n)}},[c,f,n,e]);var p=d.getFieldProps(ne({name:n},l)),v=d.getFieldMeta(n),_={field:p,form:d};if(r)return r(ne({},_,{meta:v}));if(ze(i))return i(ne({},_,{meta:v}));if(o){if(typeof o=="string"){var E=l.innerRef,m=fr(l,["innerRef"]);return C.createElement(o,ne({ref:E},p,m,{className:a}),i)}return C.createElement(o,ne({field:p,form:d},l,{className:a}),i)}var h=s||"input";if(typeof h=="string"){var y=l.innerRef,w=fr(l,["innerRef"]);return C.createElement(h,ne({ref:y},p,w,{className:a}),i)}return C.createElement(h,ne({},p,l,{className:a}),i)}var Lg=C.forwardRef(function(t,e){var n=t.action,r=fr(t,["action"]),i=n??"#",s=aT(),o=s.handleReset,a=s.handleSubmit;return C.createElement("form",ne({onSubmit:a,ref:e,onReset:o,action:i},r))});Lg.displayName="Form";function r$(t){var e=function(i){return C.createElement(Kj,null,function(s){return C.createElement(t,ne({},i,{formik:s}))})},n=t.displayName||t.name||t.constructor&&t.constructor.name||"Component";return e.WrappedComponent=t,e.displayName="FormikConnect("+n+")",Bj(e,t)}var i$=function(e,n,r){var i=xi(e),s=i[n];return i.splice(n,1),i.splice(r,0,s),i},s$=function(e,n,r){var i=xi(e),s=i[n];return i[n]=i[r],i[r]=s,i},yf=function(e,n,r){var i=xi(e);return i.splice(n,0,r),i},o$=function(e,n,r){var i=xi(e);return i[n]=r,i},xi=function(e){if(e){if(Array.isArray(e))return[].concat(e);var n=Object.keys(e).map(function(r){return parseInt(r)}).reduce(function(r,i){return i>r?i:r},0);return Array.from(ne({},e,{length:n+1}))}else return[]},R_=function(e,n){var r=typeof e=="function"?e:n;return function(i){if(Array.isArray(i)||qa(i)){var s=xi(i);return r(s)}return i}},a$=function(t){oT(e,t);function e(r){var i;return i=t.call(this,r)||this,i.updateArrayField=function(s,o,a){var l=i.props,u=l.name,d=l.formik.setFormikState;d(function(c){var f=R_(a,s),p=R_(o,s),v=mn(c.values,u,s(ye(c.values,u))),_=a?f(ye(c.errors,u)):void 0,E=o?p(ye(c.touched,u)):void 0;return P_(_)&&(_=void 0),P_(E)&&(E=void 0),ne({},c,{values:v,errors:a?mn(c.errors,u,_):c.errors,touched:o?mn(c.touched,u,E):c.touched})})},i.push=function(s){return i.updateArrayField(function(o){return[].concat(xi(o),[Hj(s)])},!1,!1)},i.handlePush=function(s){return function(){return i.push(s)}},i.swap=function(s,o){return i.updateArrayField(function(a){return s$(a,s,o)},!0,!0)},i.handleSwap=function(s,o){return function(){return i.swap(s,o)}},i.move=function(s,o){return i.updateArrayField(function(a){return i$(a,s,o)},!0,!0)},i.handleMove=function(s,o){return function(){return i.move(s,o)}},i.insert=function(s,o){return i.updateArrayField(function(a){return yf(a,s,o)},function(a){return yf(a,s,null)},function(a){return yf(a,s,null)})},i.handleInsert=function(s,o){return function(){return i.insert(s,o)}},i.replace=function(s,o){return i.updateArrayField(function(a){return o$(a,s,o)},!1,!1)},i.handleReplace=function(s,o){return function(){return i.replace(s,o)}},i.unshift=function(s){var o=-1;return i.updateArrayField(function(a){var l=a?[s].concat(a):[s];return o=l.length,l},function(a){return a?[null].concat(a):[null]},function(a){return a?[null].concat(a):[null]}),o},i.handleUnshift=function(s){return function(){return i.unshift(s)}},i.handleRemove=function(s){return function(){return i.remove(s)}},i.handlePop=function(){return function(){return i.pop()}},i.remove=i.remove.bind(b_(i)),i.pop=i.pop.bind(b_(i)),i}var n=e.prototype;return n.componentDidUpdate=function(i){this.props.validateOnChange&&this.props.formik.validateOnChange&&!nr(ye(i.formik.values,i.name),ye(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},n.remove=function(i){var s;return this.updateArrayField(function(o){var a=o?xi(o):[];return s||(s=a[i]),ze(a.splice)&&a.splice(i,1),ze(a.every)&&a.every(function(l){return l===void 0})?[]:a},!0,!0),s},n.pop=function(){var i;return this.updateArrayField(function(s){var o=s.slice();return i||(i=o&&o.pop&&o.pop()),o},!0,!0),i},n.render=function(){var i={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},s=this.props,o=s.component,a=s.render,l=s.children,u=s.name,d=s.formik,c=fr(d,["validate","validationSchema"]),f=ne({},i,{form:c,name:u});return o?C.createElement(o,f):a?a(f):l?typeof l=="function"?l(f):lT(l)?null:C.Children.only(l):null},e}(C.Component);a$.defaultProps={validateOnChange:!0};var l$=function(t){oT(e,t);function e(){return t.apply(this,arguments)||this}var n=e.prototype;return n.shouldComponentUpdate=function(i){return ye(this.props.formik.errors,this.props.name)!==ye(i.formik.errors,this.props.name)||ye(this.props.formik.touched,this.props.name)!==ye(i.formik.touched,this.props.name)||Object.keys(this.props).length!==Object.keys(i).length},n.render=function(){var i=this.props,s=i.component,o=i.formik,a=i.render,l=i.children,u=i.name,d=fr(i,["component","formik","render","children","name"]),c=ye(o.touched,u),f=ye(o.errors,u);return c&&f?a?ze(a)?a(f):null:l?ze(l)?l(f):null:s?C.createElement(s,d,f):f:null},e}(C.Component),$o=r$(l$);const u$=bc`
        0% {
      background-color: rgb(0, 0, 0, 0.4);
      opacity: 0.3;
    }
    100% {
      background-color: rgb(0, 0, 0, 0.8);
      opacity: 1;
    }
`,c$=bc`
        0% {
      background-color: rgb(0, 0, 0, 0.8);
      opacity: 1;
    }
    100% {
      background-color: rgb(0, 0, 0, 0.4);
      opacity: 0;
    }
`,d$=t=>{switch(t.$closing){case!1:return bs`
        animation: ${u$} 350ms ease 1 normal forwards;
      `;case!0:return bs`
        animation: ${c$} 350ms 350ms ease 1 normal forwards;
      `;default:return null}},f$=bc`
  0% {
      opacity: 0.3;
      transform: scale(0.2);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  `,h$=bc`
  0% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0);
    }
  `,p$=t=>{switch(t.$closing){case!1:return bs`
        animation: ${f$} 350ms 350ms ease 1 normal forwards;
      `;case!0:return bs`
        animation: ${h$} 350ms ease 1 normal forwards;
      `;default:return null}},m$=P.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  overflow-y: scroll;
  z-index: 100;
  ${d$}
`,g$=P.div`
  opacity: 0;
  ${p$}
`,y$=P.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,Dg=({children:t,onClose:e})=>{const[n,r]=C.useState(!1);document.body.style.overflow="hidden";const i=C.useCallback(s=>{(s.code==="Escape"||s.target===s.currentTarget)&&(r(!0),setTimeout(()=>{r(!1),document.body.style.overflow="auto",e()},750))},[e]);return C.useEffect(()=>(document.body.style.overflow="hidden",window.addEventListener("keydown",i),()=>{document.body.style.overflow="auto",window.removeEventListener("keydown",i)}),[i]),rE.createPortal(g.jsx(m$,{id:"modalWrap",$closing:n,onClick:i,children:g.jsx(y$,{children:g.jsx(g$,{$closing:n,children:t})})}),document.querySelector("#root"))};Dg.propTypes={onClose:K.func.isRequired,children:K.node.isRequired};const v$=P.div`
  position: relative;
  width: 566px;
  height: 506px;
  background-color: #fff;
  padding: 64px;
  border-radius: 30px;
  background: rgb(255, 255, 255);
`,_$=P.h3`
  color: ${ge.BLACK_TEXT};
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: -0.8px;
  text-align: start;
  margin-bottom: 20px;
`,w$=P.p`
  color: ${ge.BLACK_TEXT};
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: start;
  margin-bottom: 40px;
`,O_=P(dT)`
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
`,E$=P.button`
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
`,S$=P.div`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  &:hover svg path {
    stroke-width: 3.5;
  }
`,C$=P.div`
  position: relative;
`,x$=P.button`
  position: absolute;
  background: none;
  border: none;
  right: 17px;
  bottom: 117px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`,T$=P.div`
  position: absolute;
  color: red;
  font-size: 14px;
  line-height: 1.28;
  top: 55px;
`,I$=P.div`
  position: absolute;
  color: red;
  font-size: 14px;
  line-height: 1.28;
  top: 128px;
`;function Ai(t){this._maxSize=t,this.clear()}Ai.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Ai.prototype.get=function(t){return this._values[t]};Ai.prototype.set=function(t,e){return this._size>=this._maxSize&&this.clear(),t in this._values||this._size++,this._values[t]=e};var k$=/[^.^\]^[]+|(?=\[\]|\.\.)/g,fT=/^\d+$/,b$=/^\d/,P$=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,R$=/^\s*(['"]?)(.*?)(\1)\s*$/,Mg=512,N_=new Ai(Mg),A_=new Ai(Mg),L_=new Ai(Mg),ui={Cache:Ai,split:cp,normalizePath:vf,setter:function(t){var e=vf(t);return A_.get(t)||A_.set(t,function(r,i){for(var s=0,o=e.length,a=r;s<o-1;){var l=e[s];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;a=a[e[s++]]}a[e[s]]=i})},getter:function(t,e){var n=vf(t);return L_.get(t)||L_.set(t,function(i){for(var s=0,o=n.length;s<o;)if(i!=null||!e)i=i[n[s++]];else return;return i})},join:function(t){return t.reduce(function(e,n){return e+(Fg(n)||fT.test(n)?"["+n+"]":(e?".":"")+n)},"")},forEach:function(t,e,n){O$(Array.isArray(t)?t:cp(t),e,n)}};function vf(t){return N_.get(t)||N_.set(t,cp(t).map(function(e){return e.replace(R$,"$2")}))}function cp(t){return t.match(k$)||[""]}function O$(t,e,n){var r=t.length,i,s,o,a;for(s=0;s<r;s++)i=t[s],i&&(L$(i)&&(i='"'+i+'"'),a=Fg(i),o=!a&&/^\d+$/.test(i),e.call(n,i,a,o,s,t))}function Fg(t){return typeof t=="string"&&t&&["'",'"'].indexOf(t.charAt(0))!==-1}function N$(t){return t.match(b$)&&!t.match(fT)}function A$(t){return P$.test(t)}function L$(t){return!Fg(t)&&(N$(t)||A$(t))}const D$=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,od=t=>t.match(D$)||[],ad=t=>t[0].toUpperCase()+t.slice(1),jg=(t,e)=>od(t).join(e).toLowerCase(),hT=t=>od(t).reduce((e,n)=>`${e}${e?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),M$=t=>ad(hT(t)),F$=t=>jg(t,"_"),j$=t=>jg(t,"-"),$$=t=>ad(jg(t," ")),U$=t=>od(t).map(ad).join(" ");var _f={words:od,upperFirst:ad,camelCase:hT,pascalCase:M$,snakeCase:F$,kebabCase:j$,sentenceCase:$$,titleCase:U$},$g={exports:{}};$g.exports=function(t){return pT(z$(t),t)};$g.exports.array=pT;function pT(t,e){var n=t.length,r=new Array(n),i={},s=n,o=B$(e),a=W$(t);for(e.forEach(function(u){if(!a.has(u[0])||!a.has(u[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});s--;)i[s]||l(t[s],s,new Set);return r;function l(u,d,c){if(c.has(u)){var f;try{f=", node was:"+JSON.stringify(u)}catch{f=""}throw new Error("Cyclic dependency"+f)}if(!a.has(u))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(u));if(!i[d]){i[d]=!0;var p=o.get(u)||new Set;if(p=Array.from(p),d=p.length){c.add(u);do{var v=p[--d];l(v,a.get(v),c)}while(d);c.delete(u)}r[--n]=u}}}function z$(t){for(var e=new Set,n=0,r=t.length;n<r;n++){var i=t[n];e.add(i[0]),e.add(i[1])}return Array.from(e)}function B$(t){for(var e=new Map,n=0,r=t.length;n<r;n++){var i=t[n];e.has(i[0])||e.set(i[0],new Set),e.has(i[1])||e.set(i[1],new Set),e.get(i[0]).add(i[1])}return e}function W$(t){for(var e=new Map,n=0,r=t.length;n<r;n++)e.set(t[n],n);return e}var V$=$g.exports;const H$=Fs(V$),G$=Object.prototype.toString,K$=Error.prototype.toString,q$=RegExp.prototype.toString,Y$=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",Q$=/^Symbol\((.*)\)(.*)$/;function X$(t){return t!=+t?"NaN":t===0&&1/t<0?"-0":""+t}function D_(t,e=!1){if(t==null||t===!0||t===!1)return""+t;const n=typeof t;if(n==="number")return X$(t);if(n==="string")return e?`"${t}"`:t;if(n==="function")return"[Function "+(t.name||"anonymous")+"]";if(n==="symbol")return Y$.call(t).replace(Q$,"Symbol($1)");const r=G$.call(t).slice(8,-1);return r==="Date"?isNaN(t.getTime())?""+t:t.toISOString(t):r==="Error"||t instanceof Error?"["+K$.call(t)+"]":r==="RegExp"?q$.call(t):null}function kr(t,e){let n=D_(t,e);return n!==null?n:JSON.stringify(t,function(r,i){let s=D_(this[r],e);return s!==null?s:i},2)}function mT(t){return t==null?[]:[].concat(t)}let gT,J$=/\$\{\s*(\w+)\s*\}/g;gT=Symbol.toStringTag;class ot extends Error{static formatError(e,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof e=="string"?e.replace(J$,(i,s)=>kr(n[s])):typeof e=="function"?e(n):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,n,r,i,s){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this[gT]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],mT(e).forEach(o=>{if(ot.isError(o)){this.errors.push(...o.errors);const a=o.inner.length?o.inner:[o];this.inner.push(...a)}else this.errors.push(o)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],!s&&Error.captureStackTrace&&Error.captureStackTrace(this,ot)}}let ln={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:t,type:e,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${kr(r,!0)}\`).`:".";return e!=="mixed"?`${t} must be a \`${e}\` type, but the final value was: \`${kr(n,!0)}\``+i:`${t} must match the configured type. The validated value was: \`${kr(n,!0)}\``+i}},Bt={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},Z$={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},dp={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},e9={isValue:"${path} field must be ${value}"},fp={noUnknown:"${path} field has unspecified keys: ${unknown}"},t9={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},n9={notType:t=>{const{path:e,value:n,spec:r}=t,i=r.types.length;if(Array.isArray(n)){if(n.length<i)return`${e} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${kr(n,!0)}\``;if(n.length>i)return`${e} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${kr(n,!0)}\``}return ot.formatError(ln.notType,t)}};Object.assign(Object.create(null),{mixed:ln,string:Bt,number:Z$,date:dp,object:fp,array:t9,boolean:e9,tuple:n9});const Ug=t=>t&&t.__isYupSchema__;class tc{static fromOptions(e,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:s}=n,o=typeof r=="function"?r:(...a)=>a.every(l=>l===r);return new tc(e,(a,l)=>{var u;let d=o(...a)?i:s;return(u=d==null?void 0:d(l))!=null?u:l})}constructor(e,n){this.fn=void 0,this.refs=e,this.refs=e,this.fn=n}resolve(e,n){let r=this.refs.map(s=>s.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,e,n);if(i===void 0||i===e)return e;if(!Ug(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const Cl={context:"$",value:"."};class Li{constructor(e,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Cl.context,this.isValue=this.key[0]===Cl.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?Cl.context:this.isValue?Cl.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&ui.getter(this.path,!0),this.map=n.map}getValue(e,n,r){let i=this.isContext?r:this.isValue?e:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(e,n){return this.getValue(e,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}Li.prototype.__isYupRef=!0;const ni=t=>t==null;function $i(t){function e({value:n,path:r="",options:i,originalValue:s,schema:o},a,l){const{name:u,test:d,params:c,message:f,skipAbsent:p}=t;let{parent:v,context:_,abortEarly:E=o.spec.abortEarly,disableStackTrace:m=o.spec.disableStackTrace}=i;function h(B){return Li.isRef(B)?B.getValue(n,v,_):B}function y(B={}){var Nt;const ae=Object.assign({value:n,originalValue:s,label:o.spec.label,path:B.path||r,spec:o.spec},c,B.params);for(const _n of Object.keys(ae))ae[_n]=h(ae[_n]);const gt=new ot(ot.formatError(B.message||f,ae),n,ae.path,B.type||u,(Nt=B.disableStackTrace)!=null?Nt:m);return gt.params=ae,gt}const w=E?a:l;let T={path:r,parent:v,type:u,from:i.from,createError:y,resolve:h,options:i,originalValue:s,schema:o};const S=B=>{ot.isError(B)?w(B):B?l(null):w(y())},x=B=>{ot.isError(B)?w(B):a(B)};if(p&&ni(n))return S(!0);let L;try{var F;if(L=d.call(T,n,T),typeof((F=L)==null?void 0:F.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${T.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(L).then(S,x)}}catch(B){x(B);return}S(L)}return e.OPTIONS=t,e}function r9(t,e,n,r=n){let i,s,o;return e?(ui.forEach(e,(a,l,u)=>{let d=l?a.slice(1,a.length-1):a;t=t.resolve({context:r,parent:i,value:n});let c=t.type==="tuple",f=u?parseInt(d,10):0;if(t.innerType||c){if(c&&!u)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);if(n&&f>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${e}. because there is no value at that index. `);i=n,n=n&&n[f],t=c?t.spec.types[f]:t.innerType}if(!u){if(!t.fields||!t.fields[d])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${t.type}")`);i=n,n=n&&n[d],t=t.fields[d]}s=d,o=l?"["+a+"]":"."+a}),{schema:t,parent:i,parentPath:s}):{parent:i,parentPath:e,schema:t}}class nc extends Set{describe(){const e=[];for(const n of this.values())e.push(Li.isRef(n)?n.describe():n);return e}resolveAll(e){let n=[];for(const r of this.values())n.push(e(r));return n}clone(){return new nc(this.values())}merge(e,n){const r=this.clone();return e.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function ns(t,e=new Map){if(Ug(t)||!t||typeof t!="object")return t;if(e.has(t))return e.get(t);let n;if(t instanceof Date)n=new Date(t.getTime()),e.set(t,n);else if(t instanceof RegExp)n=new RegExp(t),e.set(t,n);else if(Array.isArray(t)){n=new Array(t.length),e.set(t,n);for(let r=0;r<t.length;r++)n[r]=ns(t[r],e)}else if(t instanceof Map){n=new Map,e.set(t,n);for(const[r,i]of t.entries())n.set(r,ns(i,e))}else if(t instanceof Set){n=new Set,e.set(t,n);for(const r of t)n.add(ns(r,e))}else if(t instanceof Object){n={},e.set(t,n);for(const[r,i]of Object.entries(t))n[r]=ns(i,e)}else throw Error(`Unable to clone ${t}`);return n}class yn{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new nc,this._blacklist=new nc,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(ln.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},e==null?void 0:e.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=ns(Object.assign({},this.spec,e)),n}label(e){let n=this.clone();return n.spec.label=e,n}meta(...e){if(e.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},e[0]),n}withMutation(e){let n=this._mutate;this._mutate=!0;let r=e(this);return this._mutate=n,r}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let n=this,r=e.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(e._whitelist,e._blacklist),r._blacklist=n._blacklist.merge(e._blacklist,e._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(s=>{e.tests.forEach(o=>{s.test(o.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(e){return e==null?!!(this.spec.nullable&&e===null||this.spec.optional&&e===void 0):this._typeCheck(e)}resolve(e){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,s)=>s.resolve(i,e),n),n=n.resolve(e)}return n}resolveOptions(e){var n,r,i,s;return Object.assign({},e,{from:e.from||[],strict:(n=e.strict)!=null?n:this.spec.strict,abortEarly:(r=e.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=e.recursive)!=null?i:this.spec.recursive,disableStackTrace:(s=e.disableStackTrace)!=null?s:this.spec.disableStackTrace})}cast(e,n={}){let r=this.resolve(Object.assign({value:e},n)),i=n.assert==="ignore-optionality",s=r._cast(e,n);if(n.assert!==!1&&!r.isType(s)){if(i&&ni(s))return s;let o=kr(e),a=kr(s);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${o} 
`+(a!==o?`result of cast: ${a}`:""))}return s}_cast(e,n){let r=e===void 0?e:this.transforms.reduce((i,s)=>s.call(this,i,e,this),e);return r===void 0&&(r=this.getDefault(n)),r}_validate(e,n={},r,i){let{path:s,originalValue:o=e,strict:a=this.spec.strict}=n,l=e;a||(l=this._cast(l,Object.assign({assert:!1},n)));let u=[];for(let d of Object.values(this.internalTests))d&&u.push(d);this.runTests({path:s,value:l,originalValue:o,options:n,tests:u},r,d=>{if(d.length)return i(d,l);this.runTests({path:s,value:l,originalValue:o,options:n,tests:this.tests},r,i)})}runTests(e,n,r){let i=!1,{tests:s,value:o,originalValue:a,path:l,options:u}=e,d=_=>{i||(i=!0,n(_,o))},c=_=>{i||(i=!0,r(_,o))},f=s.length,p=[];if(!f)return c([]);let v={value:o,originalValue:a,path:l,options:u,schema:this};for(let _=0;_<s.length;_++){const E=s[_];E(v,d,function(h){h&&(Array.isArray(h)?p.push(...h):p.push(h)),--f<=0&&c(p)})}}asNestedTest({key:e,index:n,parent:r,parentPath:i,originalParent:s,options:o}){const a=e??n;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof a=="number";let u=r[a];const d=Object.assign({},o,{strict:!0,parent:r,value:u,originalValue:s[a],key:void 0,[l?"index":"key"]:a,path:l||a.includes(".")?`${i||""}[${u?a:`"${a}"`}]`:(i?`${i}.`:"")+e});return(c,f,p)=>this.resolve(d)._validate(u,d,f,p)}validate(e,n){var r;let i=this.resolve(Object.assign({},n,{value:e})),s=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return new Promise((o,a)=>i._validate(e,n,(l,u)=>{ot.isError(l)&&(l.value=u),a(l)},(l,u)=>{l.length?a(new ot(l,u,void 0,void 0,s)):o(u)}))}validateSync(e,n){var r;let i=this.resolve(Object.assign({},n,{value:e})),s,o=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return i._validate(e,Object.assign({},n,{sync:!0}),(a,l)=>{throw ot.isError(a)&&(a.value=l),a},(a,l)=>{if(a.length)throw new ot(a,e,void 0,void 0,o);s=l}),s}isValid(e,n){return this.validate(e,n).then(()=>!0,r=>{if(ot.isError(r))return!1;throw r})}isValidSync(e,n){try{return this.validateSync(e,n),!0}catch(r){if(ot.isError(r))return!1;throw r}}_getDefault(e){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,e):ns(n)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,n){const r=this.clone({nullable:e});return r.internalTests.nullable=$i({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(e,n){const r=this.clone({optional:e});return r.internalTests.optionality=$i({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(e=ln.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=ln.notNull){return this.nullability(!1,e)}required(e=ln.required){return this.clone().withMutation(n=>n.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let n=this.clone();return n.transforms.push(e),n}test(...e){let n;if(e.length===1?typeof e[0]=="function"?n={test:e[0]}:n=e[0]:e.length===2?n={name:e[0],test:e[1]}:n={name:e[0],message:e[1],test:e[2]},n.message===void 0&&(n.message=ln.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=$i(n),s=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(o=>!(o.OPTIONS.name===n.name&&(s||o.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(e,n){!Array.isArray(e)&&typeof e!="string"&&(n=e,e=".");let r=this.clone(),i=mT(e).map(s=>new Li(s));return i.forEach(s=>{s.isSibling&&r.deps.push(s.key)}),r.conditions.push(typeof n=="function"?new tc(i,n):tc.fromOptions(i,n)),r}typeError(e){let n=this.clone();return n.internalTests.typeError=$i({message:e,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(e,n=ln.oneOf){let r=this.clone();return e.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=$i({message:n,name:"oneOf",skipAbsent:!0,test(i){let s=this.schema._whitelist,o=s.resolveAll(this.resolve);return o.includes(i)?!0:this.createError({params:{values:Array.from(s).join(", "),resolved:o}})}}),r}notOneOf(e,n=ln.notOneOf){let r=this.clone();return e.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=$i({message:n,name:"notOneOf",test(i){let s=this.schema._blacklist,o=s.resolveAll(this.resolve);return o.includes(i)?this.createError({params:{values:Array.from(s).join(", "),resolved:o}}):!0}}),r}strip(e=!0){let n=this.clone();return n.spec.strip=e,n}describe(e){const n=(e?this.resolve(e):this).clone(),{label:r,meta:i,optional:s,nullable:o}=n.spec;return{meta:i,label:r,optional:s,nullable:o,default:n.getDefault(e),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,u,d)=>d.findIndex(c=>c.name===l.name)===u)}}}yn.prototype.__isYupSchema__=!0;for(const t of["validate","validateSync"])yn.prototype[`${t}At`]=function(e,n,r={}){const{parent:i,parentPath:s,schema:o}=r9(this,e,n,r.context);return o[t](i&&i[s],Object.assign({},r,{parent:i,path:e}))};for(const t of["equals","is"])yn.prototype[t]=yn.prototype.oneOf;for(const t of["not","nope"])yn.prototype[t]=yn.prototype.notOneOf;let i9=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,s9=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,o9=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,a9=t=>ni(t)||t===t.trim(),l9={}.toString();function ps(){return new yT}class yT extends yn{constructor(){super({type:"string",check(e){return e instanceof String&&(e=e.valueOf()),typeof e=="string"}}),this.withMutation(()=>{this.transform((e,n,r)=>{if(!r.spec.coerce||r.isType(e)||Array.isArray(e))return e;const i=e!=null&&e.toString?e.toString():e;return i===l9?e:i})})}required(e){return super.required(e).withMutation(n=>n.test({message:e||ln.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(n=>n.OPTIONS.name!=="required"),e))}length(e,n=Bt.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(r){return r.length===this.resolve(e)}})}min(e,n=Bt.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(r){return r.length>=this.resolve(e)}})}max(e,n=Bt.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:e},skipAbsent:!0,test(r){return r.length<=this.resolve(e)}})}matches(e,n){let r=!1,i,s;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:s}=n:i=n),this.test({name:s||"matches",message:i||Bt.matches,params:{regex:e},skipAbsent:!0,test:o=>o===""&&r||o.search(e)!==-1})}email(e=Bt.email){return this.matches(i9,{name:"email",message:e,excludeEmptyString:!0})}url(e=Bt.url){return this.matches(s9,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=Bt.uuid){return this.matches(o9,{name:"uuid",message:e,excludeEmptyString:!1})}ensure(){return this.default("").transform(e=>e===null?"":e)}trim(e=Bt.trim){return this.transform(n=>n!=null?n.trim():n).test({message:e,name:"trim",test:a9})}lowercase(e=Bt.lowercase){return this.transform(n=>ni(n)?n:n.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>ni(n)||n===n.toLowerCase()})}uppercase(e=Bt.uppercase){return this.transform(n=>ni(n)?n:n.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>ni(n)||n===n.toUpperCase()})}}ps.prototype=yT.prototype;const u9=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function Sn(t,e=0){return Number(t)||e}function c9(t){const e=u9.exec(t);if(!e)return Date.parse?Date.parse(t):Number.NaN;const n={year:Sn(e[1]),month:Sn(e[2],1)-1,day:Sn(e[3],1),hour:Sn(e[4]),minute:Sn(e[5]),second:Sn(e[6]),millisecond:e[7]?Sn(e[7].substring(0,3)):0,z:e[8]||void 0,plusMinus:e[9]||void 0,hourOffset:Sn(e[10]),minuteOffset:Sn(e[11])};if(n.z===void 0&&n.plusMinus===void 0)return new Date(n.year,n.month,n.day,n.hour,n.minute,n.second,n.millisecond).valueOf();let r=0;return n.z!=="Z"&&n.plusMinus!==void 0&&(r=n.hourOffset*60+n.minuteOffset,n.plusMinus==="+"&&(r=0-r)),Date.UTC(n.year,n.month,n.day,n.hour,n.minute+r,n.second,n.millisecond)}let d9=new Date(""),f9=t=>Object.prototype.toString.call(t)==="[object Date]";class ld extends yn{constructor(){super({type:"date",check(e){return f9(e)&&!isNaN(e.getTime())}}),this.withMutation(()=>{this.transform((e,n,r)=>!r.spec.coerce||r.isType(e)||e===null?e:(e=c9(e),isNaN(e)?ld.INVALID_DATE:new Date(e)))})}prepareParam(e,n){let r;if(Li.isRef(e))r=e;else{let i=this.cast(e);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(e,n=dp.min){let r=this.prepareParam(e,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(e,n=dp.max){let r=this.prepareParam(e,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}ld.INVALID_DATE=d9;ld.prototype;function h9(t,e=[]){let n=[],r=new Set,i=new Set(e.map(([o,a])=>`${o}-${a}`));function s(o,a){let l=ui.split(o)[0];r.add(l),i.has(`${a}-${l}`)||n.push([a,l])}for(const o of Object.keys(t)){let a=t[o];r.add(o),Li.isRef(a)&&a.isSibling?s(a.path,o):Ug(a)&&"deps"in a&&a.deps.forEach(l=>s(l,o))}return H$.array(Array.from(r),n).reverse()}function M_(t,e){let n=1/0;return t.some((r,i)=>{var s;if((s=e.path)!=null&&s.includes(r))return n=i,!0}),n}function vT(t){return(e,n)=>M_(t,e)-M_(t,n)}const p9=(t,e,n)=>{if(typeof t!="string")return t;let r=t;try{r=JSON.parse(t)}catch{}return n.isType(r)?r:t};function Kl(t){if("fields"in t){const e={};for(const[n,r]of Object.entries(t.fields))e[n]=Kl(r);return t.setFields(e)}if(t.type==="array"){const e=t.optional();return e.innerType&&(e.innerType=Kl(e.innerType)),e}return t.type==="tuple"?t.optional().clone({types:t.spec.types.map(Kl)}):"optional"in t?t.optional():t}const m9=(t,e)=>{const n=[...ui.normalizePath(e)];if(n.length===1)return n[0]in t;let r=n.pop(),i=ui.getter(ui.join(n),!0)(t);return!!(i&&r in i)};let F_=t=>Object.prototype.toString.call(t)==="[object Object]";function g9(t,e){let n=Object.keys(t.fields);return Object.keys(e).filter(r=>n.indexOf(r)===-1)}const y9=vT([]);function zg(t){return new _T(t)}class _T extends yn{constructor(e){super({type:"object",check(n){return F_(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=y9,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,n={}){var r;let i=super._cast(e,n);if(i===void 0)return this.getDefault(n);if(!this._typeCheck(i))return i;let s=this.fields,o=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(i).filter(c=>!this._nodes.includes(c))),l={},u=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),d=!1;for(const c of a){let f=s[c],p=c in i;if(f){let v,_=i[c];u.path=(n.path?`${n.path}.`:"")+c,f=f.resolve({value:_,context:n.context,parent:l});let E=f instanceof yn?f.spec:void 0,m=E==null?void 0:E.strict;if(E!=null&&E.strip){d=d||c in i;continue}v=!n.__validating||!m?f.cast(i[c],u):i[c],v!==void 0&&(l[c]=v)}else p&&!o&&(l[c]=i[c]);(p!==c in l||l[c]!==i[c])&&(d=!0)}return d?l:i}_validate(e,n={},r,i){let{from:s=[],originalValue:o=e,recursive:a=this.spec.recursive}=n;n.from=[{schema:this,value:o},...s],n.__validating=!0,n.originalValue=o,super._validate(e,n,r,(l,u)=>{if(!a||!F_(u)){i(l,u);return}o=o||u;let d=[];for(let c of this._nodes){let f=this.fields[c];!f||Li.isRef(f)||d.push(f.asNestedTest({options:n,key:c,parent:u,parentPath:n.path,originalParent:o}))}this.runTests({tests:d,value:u,originalValue:o,options:n},r,c=>{i(c.sort(this._sortErrors).concat(l),u)})})}clone(e){const n=super.clone(e);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(e){let n=super.concat(e),r=n.fields;for(let[i,s]of Object.entries(this.fields)){const o=r[i];r[i]=o===void 0?s:o}return n.withMutation(i=>i.setFields(r,[...this._excludedEdges,...e._excludedEdges]))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var i;const s=this.fields[r];let o=e;(i=o)!=null&&i.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[r]})),n[r]=s&&"getDefault"in s?s.getDefault(o):void 0}),n}setFields(e,n){let r=this.clone();return r.fields=e,r._nodes=h9(e,n),r._sortErrors=vT(Object.keys(e)),n&&(r._excludedEdges=n),r}shape(e,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,e),i)})}partial(){const e={};for(const[n,r]of Object.entries(this.fields))e[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(e)}deepPartial(){return Kl(this)}pick(e){const n={};for(const r of e)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,i])=>e.includes(r)&&e.includes(i)))}omit(e){const n=[];for(const r of Object.keys(this.fields))e.includes(r)||n.push(r);return this.pick(n)}from(e,n,r){let i=ui.getter(e,!0);return this.transform(s=>{if(!s)return s;let o=s;return m9(s,e)&&(o=Object.assign({},s),r||delete o[e],o[n]=i(s)),o})}json(){return this.transform(p9)}noUnknown(e=!0,n=fp.noUnknown){typeof e!="boolean"&&(n=e,e=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const s=g9(this.schema,i);return!e||s.length===0||this.createError({params:{unknown:s.join(", ")}})}});return r.spec.noUnknown=e,r}unknown(e=!0,n=fp.noUnknown){return this.noUnknown(!e,n)}transformKeys(e){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[e(i)]=n[i];return r})}camelCase(){return this.transformKeys(_f.camelCase)}snakeCase(){return this.transformKeys(_f.snakeCase)}constantCase(){return this.transformKeys(e=>_f.snakeCase(e).toUpperCase())}describe(e){const n=(e?this.resolve(e):this).clone(),r=super.describe(e);r.fields={};for(const[s,o]of Object.entries(n.fields)){var i;let a=e;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[s]})),r.fields[s]=o.describe(a)}return r}}zg.prototype=_T.prototype;const Bg=({strokeWidth:t})=>g.jsxs("svg",{width:"32.000000",height:"32.000000",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[g.jsx("desc",{children:"Created with Pixso."}),g.jsx("defs",{children:g.jsx("clipPath",{id:"clip4_589",children:g.jsx("rect",{id:"x",width:"32.000000",height:"32.000000",fill:"white",fillOpacity:"0"})})}),g.jsx("rect",{id:"x",width:"32.000000",height:"32.000000",fill:"#FFFFFF",fillOpacity:"0"}),g.jsxs("g",{clipPath:"url(#clip4_589)",children:[g.jsx("path",{id:"Vector",d:"M24 8L8 24",stroke:"#121417",strokeOpacity:"1.000000",strokeWidth:t,strokeLinejoin:"round",strokeLinecap:"round"}),g.jsx("path",{id:"Vector",d:"M8 8L24 24",stroke:"#121417",strokeOpacity:"1.000000",strokeWidth:t,strokeLinejoin:"round",strokeLinecap:"round"})]})]});Bg.propTypes={strokeWidth:K.string.isRequired};const wT=()=>g.jsxs("svg",{width:"20.000000",height:"20.000000",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[g.jsx("desc",{children:"Created with Pixso."}),g.jsx("defs",{children:g.jsx("clipPath",{id:"clip4_621",children:g.jsx("rect",{id:"eye-off",width:"20.000000",height:"20.000000",fill:"white",fillOpacity:"0"})})}),g.jsx("rect",{id:"eye-off",width:"20.000000",height:"20.000000",fill:"#FFFFFF",fillOpacity:"0"}),g.jsx("g",{clipPath:"url(#clip4_621)",children:g.jsx("path",{id:"Vector",d:"M14.95 14.95C13.5254 16.0358 11.7908 16.6373 10 16.6666C4.1665 16.6666 0.833252 10 0.833252 10C1.86987 8.06824 3.30762 6.38049 5.0498 5.04993M8.25 3.53333C8.82349 3.39905 9.41089 3.33191 10 3.33325C15.8333 3.33325 19.1665 10 19.1665 10C18.6606 10.9463 18.0574 11.8372 17.3667 12.6583M11.7666 11.7666C11.5376 12.0122 11.2617 12.2092 10.9551 12.3458C10.6484 12.4825 10.3174 12.556 9.98169 12.5619C9.646 12.5679 9.3125 12.5061 9.00122 12.3804C8.68994 12.2546 8.40723 12.0675 8.16968 11.8301C7.93237 11.5927 7.74536 11.3099 7.61963 10.9987C7.49365 10.6873 7.43213 10.3539 7.43799 10.0182C7.44385 9.6825 7.51733 9.35144 7.65405 9.0448C7.79053 8.73816 7.98755 8.46216 8.23315 8.23328",stroke:"#121417",strokeOpacity:"1.000000",strokeWidth:"2.000000",strokeLinejoin:"round"})})]}),ET=()=>g.jsxs("svg",{width:"20.000000",height:"20.000000",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[g.jsx("desc",{children:"Created with Pixso."}),g.jsx("defs",{children:g.jsx("clipPath",{id:"clip4_621",children:g.jsx("rect",{id:"eye-off",width:"20.000000",height:"20.000000",fill:"white",fillOpacity:"0"})})}),g.jsx("rect",{id:"eye-off",width:"20.000000",height:"20.000000",fill:"#FFFFFF",fillOpacity:"0"}),g.jsxs("g",{clipPath:"url(#clip4_621)",children:[g.jsx("path",{id:"Vector",d:"M14.95 14.95C13.5254 16.0358 11.7908 16.6373 10 16.6666C4.1665 16.6666 0.833252 10 0.833252 10C1.86987 8.06824 3.30762 6.38049 5.0498 5.04993M8.25 3.53333C8.82349 3.39905 9.41089 3.33191 10 3.33325C15.8333 3.33325 19.1665 10 19.1665 10C18.6606 10.9463 18.0574 11.8372 17.3667 12.6583M11.7666 11.7666C11.5376 12.0122 11.2617 12.2092 10.9551 12.3458C10.6484 12.4825 10.3174 12.556 9.98169 12.5619C9.646 12.5679 9.3125 12.5061 9.00122 12.3804C8.68994 12.2546 8.40723 12.0675 8.16968 11.8301C7.93237 11.5927 7.74536 11.3099 7.61963 10.9987C7.49365 10.6873 7.43213 10.3539 7.43799 10.0182C7.44385 9.6825 7.51733 9.35144 7.65405 9.0448C7.79053 8.73816 7.98755 8.46216 8.23315 8.23328",stroke:"#121417",strokeOpacity:"1.000000",strokeWidth:"2.000000",strokeLinejoin:"round"}),g.jsx("path",{id:"Vector",d:"M0.833252 0.833374L19.1665 19.1667",stroke:"#121417",strokeOpacity:"1.000000",strokeWidth:"2.000000",strokeLinejoin:"round",strokeLinecap:"round"})]})]}),v9={email:"",password:""},_9=zg().shape({email:ps().matches(/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,"Incorret email").required("Be sure to enter your email"),password:ps().min(8,"Password must contain minimum 8 symbols").max(64,"Password must contain maximum 64 symbols").required("Be sure to enter your password")}),ST=({onClose:t})=>{const[e,n]=C.useState(!1),r=Na(),i=(o,{resetForm:a})=>{r(aC({value:o})),t(),console.log(o),a()},s=({name:o})=>{switch(o){case"email":return g.jsx($o,{name:o,component:T$});case"password":return g.jsx($o,{name:o,component:I$})}};return g.jsx(Dg,{onClose:t,children:g.jsx(v$,{children:g.jsx(cT,{initialValues:v9,validationSchema:_9,onSubmit:i,children:g.jsxs(Lg,{children:[g.jsx(S$,{onClick:t,children:g.jsx(Bg,{strokeWidth:"2.5"})}),g.jsx(_$,{children:"Log In"}),g.jsx(w$,{children:"Welcome back! Please enter your credentials to access your account and continue your search for an teacher."}),g.jsxs(C$,{children:[g.jsx(O_,{type:"text",name:"email",placeholder:"Email"}),g.jsx(s,{name:"email"}),g.jsx(O_,{type:e?"text":"password",name:"password",placeholder:"Password",marginbottom:"40px"}),g.jsx(s,{name:"password"}),g.jsx(E$,{type:"submit",children:"Log In"}),g.jsx(x$,{type:"button",onClick:()=>{n(!e)},children:e?g.jsx(wT,{}):g.jsx(ET,{})})]})]})})})})};ST.propTypes={onClose:K.func.isRequired,name:K.string};const w9=P.div`
  position: relative;
  width: 566px;
  background-color: #fff;
  padding: 64px;
  border-radius: 30px;
  background: rgb(255, 255, 255);
`,E9=P.h3`
  color: ${ge.BLACK_TEXT};
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: -0.8px;
  text-align: start;
  margin-bottom: 20px;
`,S9=P.p`
  color: ${ge.BLACK_TEXT};
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: start;
  margin-bottom: 40px;
`,wf=P(dT)`
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
`,C9=P.button`
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
`,x9=P.div`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  &:hover svg path {
    stroke-width: 3.5;
  }
`,T9=P.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 18px;
  margin-bottom: 40px;
`,I9=P.button`
  position: absolute;
  background: none;
  border: none;
  right: 17px;
  bottom: 17px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`,k9=P.div`
  position: absolute;
  color: red;
  font-size: 14px;
  line-height: 1.28;
  top: -16px;
`,b9=P.div`
  position: absolute;
  color: red;
  font-size: 14px;
  line-height: 1.28;
  top: 55px;
`,P9=P.div`
  position: absolute;
  color: red;
  font-size: 14px;
  line-height: 1.28;
  top: 128px;
`,R9={name:"",email:"",password:""},O9=zg().shape({name:ps().required("Be sure to enter your name"),email:ps().matches(/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,"Incorret email").required("Be sure to enter your email"),password:ps().min(8,"Password must contain minimum 8 symbols").max(64,"Password must contain maximum 64 symbols").required("Be sure to enter your password")}),CT=({onClose:t})=>{const[e,n]=C.useState(!1),r=Na(),i=o=>{r(oC({value:o})),t()},s=({name:o})=>{switch(o){case"name":return g.jsx($o,{name:o,component:k9});case"email":return g.jsx($o,{name:o,component:b9});case"password":return g.jsx($o,{name:o,component:P9})}};return g.jsx(Dg,{onClose:t,children:g.jsx(w9,{children:g.jsx(cT,{initialValues:R9,validationSchema:O9,onSubmit:i,children:g.jsxs(Lg,{children:[g.jsx(x9,{onClick:t,children:g.jsx(Bg,{strokeWidth:"2.5"})}),g.jsx(E9,{children:"Registration"}),g.jsxs(S9,{children:["Thank you for your interest in our platform! In order to register",g.jsx("wbr",{}),", we need some information. Please provide us with the following information"]}),g.jsxs(T9,{children:[g.jsx(wf,{type:"text",name:"name",placeholder:"Name"}),g.jsx(s,{name:"name"}),g.jsx(wf,{type:"text",name:"email",placeholder:"Email"}),g.jsx(s,{name:"email"}),g.jsx(wf,{type:e?"text":"password",name:"password",placeholder:"Password"}),g.jsx(s,{name:"password"}),g.jsx(I9,{type:"button",onClick:()=>{n(!e)},children:e?g.jsx(wT,{}):g.jsx(ET,{})})]}),g.jsx(C9,{type:"submit",children:"Log In"})]})})})})};CT.propTypes={onClose:K.func.isRequired,name:K.string};const xT=({namePopUp:t,onClose:e})=>{switch(t){case"login":return g.jsx(ST,{onClose:e});case"signin":return g.jsx(CT,{onClose:e})}return g.jsx(g.Fragment,{})};xT.propTypes={namePopUp:K.string.isRequired,onClose:K.func.isRequired};const N9=({component:t,redirectTo:e="/"})=>{const n=Cm(),r=n.isLoggedIn,i=n.isLoggedIn;return!r&&!i?g.jsx(vh,{to:e}):t},A9=()=>g.jsx("div",{children:"Favorites"});function L9(){const[t,e]=C.useState(""),n=Na();return C.useEffect(()=>{n(Hl())},[n]),g.jsxs(g.Fragment,{children:[g.jsx(n2,{children:g.jsxs(yo,{path:"/",element:g.jsx(cC,{setNamePopUp:e}),children:[g.jsx(yo,{index:!0,element:g.jsx(EL,{})}),g.jsx(yo,{path:"teachers",element:g.jsx(T5,{})}),g.jsx(yo,{path:"favorites",element:g.jsx(N9,{children:g.jsx(A9,{})})})]})}),g.jsx(xT,{namePopUp:t,onClose:()=>e("")})]})}const D9={name:null,email:null,token:null,id:null,isLoggedIn:!1,isRefreshing:!1},M9=dS({name:"auth",initialState:D9,extraReducers:t=>{t.addCase(oC.fulfilled,(e,n)=>{console.log(n.payload),e.email=n.payload.email,e.token=n.payload.accessToken,e.id=n.payload.id,e.name=n.payload.name,e.isLoggedIn=!0}).addCase(aC.fulfilled,(e,n)=>{e.email=n.payload.email,e.token=n.payload.accessToken,e.id=n.payload.id,e.name=n.payload.name,e.isLoggedIn=!0}).addCase(lC.fulfilled,e=>{e.email=null,e.token=null,e.id=null,e.name=null,e.isLoggedIn=!1}).addCase(Hl.pending,e=>{e.isRefreshing=!0}).addCase(Hl.fulfilled,(e,n)=>{e.name=n.payload.name,e.email=n.payload.email,e.token=n.payload.token,e.id=n.payload.id,e.isLoggedIn=!0,e.isRefreshing=!1}).addCase(Hl.rejected,e=>{e.isRefreshing=!1})}}),F9=M9.reducer;var Wg="persist:",Vg="persist/FLUSH",ud="persist/REHYDRATE",Hg="persist/PAUSE",Gg="persist/PERSIST",Kg="persist/PURGE",qg="persist/REGISTER",j9=-1;function ql(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ql=function(n){return typeof n}:ql=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ql(t)}function j_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function $9(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?j_(n,!0).forEach(function(r){U9(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j_(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function U9(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function z9(t,e,n,r){r.debug;var i=$9({},n);return t&&ql(t)==="object"&&Object.keys(t).forEach(function(s){s!=="_persist"&&e[s]===n[s]&&(i[s]=t[s])}),i}function B9(t){var e=t.blacklist||null,n=t.whitelist||null,r=t.transforms||[],i=t.throttle||0,s="".concat(t.keyPrefix!==void 0?t.keyPrefix:Wg).concat(t.key),o=t.storage,a;t.serialize===!1?a=function(T){return T}:typeof t.serialize=="function"?a=t.serialize:a=W9;var l=t.writeFailHandler||null,u={},d={},c=[],f=null,p=null,v=function(T){Object.keys(T).forEach(function(S){m(S)&&u[S]!==T[S]&&c.indexOf(S)===-1&&c.push(S)}),Object.keys(u).forEach(function(S){T[S]===void 0&&m(S)&&c.indexOf(S)===-1&&u[S]!==void 0&&c.push(S)}),f===null&&(f=setInterval(_,i)),u=T};function _(){if(c.length===0){f&&clearInterval(f),f=null;return}var w=c.shift(),T=r.reduce(function(S,x){return x.in(S,w,u)},u[w]);if(T!==void 0)try{d[w]=a(T)}catch(S){console.error("redux-persist/createPersistoid: error serializing state",S)}else delete d[w];c.length===0&&E()}function E(){Object.keys(d).forEach(function(w){u[w]===void 0&&delete d[w]}),p=o.setItem(s,a(d)).catch(h)}function m(w){return!(n&&n.indexOf(w)===-1&&w!=="_persist"||e&&e.indexOf(w)!==-1)}function h(w){l&&l(w)}var y=function(){for(;c.length!==0;)_();return p||Promise.resolve()};return{update:v,flush:y}}function W9(t){return JSON.stringify(t)}function V9(t){var e=t.transforms||[],n="".concat(t.keyPrefix!==void 0?t.keyPrefix:Wg).concat(t.key),r=t.storage;t.debug;var i;return t.deserialize===!1?i=function(o){return o}:typeof t.deserialize=="function"?i=t.deserialize:i=H9,r.getItem(n).then(function(s){if(s)try{var o={},a=i(s);return Object.keys(a).forEach(function(l){o[l]=e.reduceRight(function(u,d){return d.out(u,l,a)},i(a[l]))}),o}catch(l){throw l}else return})}function H9(t){return JSON.parse(t)}function G9(t){var e=t.storage,n="".concat(t.keyPrefix!==void 0?t.keyPrefix:Wg).concat(t.key);return e.removeItem(n,K9)}function K9(t){}function $_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Cn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?$_(n,!0).forEach(function(r){q9(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$_(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function q9(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Y9(t,e){if(t==null)return{};var n=Q9(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Q9(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var X9=5e3;function U_(t,e){var n=t.version!==void 0?t.version:j9;t.debug;var r=t.stateReconciler===void 0?z9:t.stateReconciler,i=t.getStoredState||V9,s=t.timeout!==void 0?t.timeout:X9,o=null,a=!1,l=!0,u=function(c){return c._persist.rehydrated&&o&&!l&&o.update(c),c};return function(d,c){var f=d||{},p=f._persist,v=Y9(f,["_persist"]),_=v;if(c.type===Gg){var E=!1,m=function(k,L){E||(c.rehydrate(t.key,k,L),E=!0)};if(s&&setTimeout(function(){!E&&m(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(t.key,'"')))},s),l=!1,o||(o=B9(t)),p)return Cn({},e(_,c),{_persist:p});if(typeof c.rehydrate!="function"||typeof c.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return c.register(t.key),i(t).then(function(x){var k=t.migrate||function(L,F){return Promise.resolve(L)};k(x,n).then(function(L){m(L)},function(L){m(void 0,L)})},function(x){m(void 0,x)}),Cn({},e(_,c),{_persist:{version:n,rehydrated:!1}})}else{if(c.type===Kg)return a=!0,c.result(G9(t)),Cn({},e(_,c),{_persist:p});if(c.type===Vg)return c.result(o&&o.flush()),Cn({},e(_,c),{_persist:p});if(c.type===Hg)l=!0;else if(c.type===ud){if(a)return Cn({},_,{_persist:Cn({},p,{rehydrated:!0})});if(c.key===t.key){var h=e(_,c),y=c.payload,w=r!==!1&&y!==void 0?r(y,d,h,t):h,T=Cn({},w,{_persist:Cn({},p,{rehydrated:!0})});return u(T)}}}if(!p)return e(d,c);var S=e(_,c);return S===_?d:u(Cn({},S,{_persist:p}))}}function z_(t){return e7(t)||Z9(t)||J9()}function J9(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function Z9(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function e7(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function B_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function hp(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?B_(n,!0).forEach(function(r){t7(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):B_(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function t7(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var TT={registry:[],bootstrapped:!1},n7=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:TT,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case qg:return hp({},e,{registry:[].concat(z_(e.registry),[n.key])});case ud:var r=e.registry.indexOf(n.key),i=z_(e.registry);return i.splice(r,1),hp({},e,{registry:i,bootstrapped:i.length===0});default:return e}};function r7(t,e,n){var r=n||!1,i=Tm(n7,TT,e&&e.enhancer?e.enhancer:void 0),s=function(u){i.dispatch({type:qg,key:u})},o=function(u,d,c){var f={type:ud,payload:d,err:c,key:u};t.dispatch(f),i.dispatch(f),r&&a.getState().bootstrapped&&(r(),r=!1)},a=hp({},i,{purge:function(){var u=[];return t.dispatch({type:Kg,result:function(c){u.push(c)}}),Promise.all(u)},flush:function(){var u=[];return t.dispatch({type:Vg,result:function(c){u.push(c)}}),Promise.all(u)},pause:function(){t.dispatch({type:Hg})},persist:function(){t.dispatch({type:Gg,register:s,rehydrate:o})}});return e&&e.manualPersist||a.persist(),a}var Yg={},Qg={};Qg.__esModule=!0;Qg.default=o7;function Yl(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Yl=function(n){return typeof n}:Yl=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Yl(t)}function Ef(){}var i7={getItem:Ef,setItem:Ef,removeItem:Ef};function s7(t){if((typeof self>"u"?"undefined":Yl(self))!=="object"||!(t in self))return!1;try{var e=self[t],n="redux-persist ".concat(t," test");e.setItem(n,"test"),e.getItem(n),e.removeItem(n)}catch{return!1}return!0}function o7(t){var e="".concat(t,"Storage");return s7(e)?self[e]:i7}Yg.__esModule=!0;Yg.default=u7;var a7=l7(Qg);function l7(t){return t&&t.__esModule?t:{default:t}}function u7(t){var e=(0,a7.default)(t);return{getItem:function(r){return new Promise(function(i,s){i(e.getItem(r))})},setItem:function(r,i){return new Promise(function(s,o){s(e.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,s){i(e.removeItem(r))})}}}var Xg=void 0,c7=d7(Yg);function d7(t){return t&&t.__esModule?t:{default:t}}var f7=(0,c7.default)("local");Xg=f7;const h7={teachersCard:[],favorite:[],isLoading:!1,error:""},IT=dS({name:"teachers",initialState:h7,reducers:{setFavorite:(t,e)=>{t.favorite.push(e.payload)}},extraReducers:t=>{t.addCase(Gl.pending,e=>{e.isLoading=!0}).addCase(Gl.fulfilled,(e,n)=>{e.isLoading=!1,e.teachersCard=n.payload,e.error=""}).addCase(Gl.rejected,(e,n)=>{e.isLoading=!1,e.error=n.payload})}});IT.actions;const p7=IT.reducer,m7={key:"auth",storage:Xg,whitelist:["token"]},g7={key:"teachers",storage:Xg,blacklist:["teachersCard"]},y7=QE({auth:U_(m7,F9),teachers:U_(g7,p7)}),kT=$R({reducer:y7,middleware:t=>t({serializableCheck:{ignoredActions:[Vg,ud,Hg,Gg,Kg,qg]}})}),v7=r7(kT);function Ql(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ql=function(n){return typeof n}:Ql=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ql(t)}function _7(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function W_(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function w7(t,e,n){return e&&W_(t.prototype,e),n&&W_(t,n),t}function E7(t,e){return e&&(Ql(e)==="object"||typeof e=="function")?e:Xl(t)}function pp(t){return pp=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},pp(t)}function Xl(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function S7(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&mp(t,e)}function mp(t,e){return mp=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},mp(t,e)}function Jl(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var bT=function(t){S7(e,t);function e(){var n,r;_7(this,e);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=E7(this,(n=pp(e)).call.apply(n,[this].concat(s))),Jl(Xl(r),"state",{bootstrapped:!1}),Jl(Xl(r),"_unsubscribe",void 0),Jl(Xl(r),"handlePersistorState",function(){var a=r.props.persistor,l=a.getState(),u=l.bootstrapped;u&&(r.props.onBeforeLift?Promise.resolve(r.props.onBeforeLift()).finally(function(){return r.setState({bootstrapped:!0})}):r.setState({bootstrapped:!0}),r._unsubscribe&&r._unsubscribe())}),r}return w7(e,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),e}(C.PureComponent);Jl(bT,"defaultProps",{children:null,loading:null});Cf.createRoot(document.getElementById("root")).render(g.jsx(gn.StrictMode,{children:g.jsx(bT,{loading:null,persistor:v7,children:g.jsx(c2,{basename:"/Learn-Lingo/",children:g.jsx(eR,{store:kT,children:g.jsx(_5,{children:g.jsx(L9,{})})})})})}))});export default C7();
