System.register(["single-spa"],function(Me,we){"use strict";var j,M,K,Y,z,D,G,J,Q,Z;return{setters:[function(g){j=g,M=g.mountRootParcel,K=g.addErrorHandler,Y=g.removeErrorHandler,z=g.getAppNames,D=g.navigateToUrl,G=g.getMountedApps,J=g.checkActivityFunctions,Q=g.registerApplication,Z=g.start}],execute:function(){const g=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}},Ee="modulepreload",ee={},Ne="./",Oe=function(t,n){return t()};function L(e){return(L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function Ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?te(Object(n),!0).forEach(function(o){Ae(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function x(e){return function(t){if(Array.isArray(t))return H(t)}(e)||function(t){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(t))return Array.from(t)}(e)||re(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function re(e,t){if(e){if(typeof e=="string")return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(e,t):void 0}}function H(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var v=typeof window!="undefined";function W(e,t){if(L(t)!=="object"||Array.isArray(t)||t===null)throw Error("Invalid ".concat(e,": received ").concat(Array.isArray(t)?"array":t," but expected a plain object"))}function oe(e,t){if(typeof t!="boolean")throw Error("Invalid ".concat(e,": received ").concat(L(t),", but expected a boolean"))}function k(e,t,n,o){if(!o){var r=Object.keys(t),i=[];r.forEach(function(c){n.indexOf(c)<0&&i.push(c)}),i.length>0&&console.warn(Error("Invalid ".concat(e,": received invalid properties '").concat(i.join(", "),"', but valid properties are ").concat(n.join(", "))))}}function C(e,t){var n=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2];if(typeof t!="string"||n&&t.trim()==="")throw Error("Invalid ".concat(e,": received '").concat(t,"', but expected a").concat(n?" non-blank":""," string"))}function ie(e,t){if(C(e,t),t.indexOf("/")<0)throw Error("Invalid ".concat(e,": received '").concat(t,"', but expected an absolute path that starts with /"))}function R(e,t,n){if(!Array.isArray(t)&&(L(L(t))!=="object"||t.length!=="number"))throw Error("Invalid ".concat(e,": received '").concat(t,"', but expected an array"));for(var o=arguments.length,r=new Array(o>3?o-3:0),i=3;i<o;i++)r[i-3]=arguments[i];for(var c=0;c<t.length;c++)n.apply(void 0,[t[c],"".concat(e,"[").concat(c,"]")].concat(r))}function B(e,t){var n;return(n=e.substr(-1)==="/"?t[0]==="/"?e+t.slice(1):e+t:t[0]==="/"?e+t:e+"/"+t).substr(-1)==="/"&&n.length>1&&(n=n.slice(0,n.length-1)),n}function U(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return e[n];return null}var Pe=Object.prototype.hasOwnProperty.call(j,"default")?Object.getOwnPropertyDescriptor(j,"default").value.pathToActiveWhen:j.pathToActiveWhen,Le=typeof Symbol!="undefined"?Symbol():"@";function Ce(e,t){if(e&&e.nodeName||typeof e=="string"){if(v&&!t&&window.singleSpaLayoutData&&(t=window.singleSpaLayoutData),typeof e=="string"){if(!v)throw Error("calling constructRoutes with a string on the server is not yet supported");if(!(e=new DOMParser().parseFromString(e,"text/html").documentElement.querySelector("single-spa-router")))throw Error("constructRoutes should be called with a string HTML document that contains a <single-spa-router> element.")}e=function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(n.nodeName.toLowerCase()==="template"&&(n=(n.content||n).querySelector("single-spa-router")),n.nodeName.toLowerCase()!=="single-spa-router")throw Error("single-spa-layout: The HTMLElement passed to constructRoutes must be <single-spa-router> or a <template> containing the router. Received ".concat(n.nodeName));v&&n.isConnected&&n.parentNode.removeChild(n);var r={routes:[],redirects:{}};y(n,"mode")&&(r.mode=y(n,"mode")),y(n,"base")&&(r.base=y(n,"base")),y(n,"containerEl")&&(r.containerEl=y(n,"containerEl"));for(var i=0;i<n.childNodes.length;i++){var c;(c=r.routes).push.apply(c,x(I(n.childNodes[i],o,r)))}return r}(e,t)}else if(t)throw Error("constructRoutes should be called either with an HTMLElement and layoutData, or a single json object.");return function(n){W("routesConfig",n);var o,r=n.disableWarnings;if(k("routesConfig",n,["mode","base","containerEl","routes","disableWarnings","redirects"],r),n.hasOwnProperty("containerEl")?function(f,a){if(typeof a=="string"?a.trim()==="":!(v&&a instanceof HTMLElement))throw Error("Invalid ".concat("routesConfig.containerEl",": received ").concat(a," but expected either non-blank string or HTMLElement"))}(0,n.containerEl):n.containerEl="body",n.hasOwnProperty("mode")||(n.mode="history"),function(f,a,l){if(l.indexOf(a)<0)throw Error("Invalid ".concat("routesConfig.mode",": received '").concat(a,"' but expected ").concat(l.join(", ")))}(0,n.mode,["history","hash"]),n.hasOwnProperty("base")?(C("routesConfig.base",n.base),n.base=((o=n.base).indexOf("/")!==0&&(o="/"+o),o[o.length-1]!=="/"&&(o+="/"),o)):n.base="/",n.hasOwnProperty("redirects"))for(var i in W("routesConfig.redirects",n.redirects),n.redirects){var c=n.redirects[i];ie("routesConfig.redirects key",i),ie("routesConfig.redirects['".concat(i,"']"),c)}var s=v?window.location.pathname:"/",m=n.mode==="hash"?s+"#":"";R("routesConfig.routes",n.routes,function f(a,l,p){var u=p.parentPath,d=p.siblingActiveWhens,h=p.parentActiveWhen;if(W(l,a),a.type==="application")k(l,a,["type","name","props","loader","error"],r),a.props&&W("".concat(l,".props"),a.props),C("".concat(l,".name"),a.name);else if(a.type==="route"){k(l,a,["type","path","routes","props","default","exact"],r),a.hasOwnProperty("exact")&&oe("".concat(l,".exact"),a.exact);var N,O=a.hasOwnProperty("path"),A=a.hasOwnProperty("default");if(O)C("".concat(l,".path"),a.path),N=B(u,a.path),a.activeWhen=Pe(N,a.exact),d.push(a.activeWhen);else{if(!A)throw Error("Invalid ".concat(l,": routes must have either a path or default property."));oe("".concat(l,".default"),a.default),N=u,a.activeWhen=function(P,w){return function(E){return w(E)&&!P.some(function(T){return T(E)})}}(d,h)}if(O&&A&&a.default)throw Error("Invalid ".concat(l,": cannot have both path and set default to true."));a.routes&&R("".concat(l,".routes"),a.routes,f,{parentPath:N,siblingActiveWhens:[],parentActiveWhen:a.activeWhen})}else{if(!(typeof Node!="undefined"&&a instanceof Node))for(var b in a)b!=="routes"&&b!=="attrs"&&C("".concat(l,"['").concat(b,"']"),a[b],!1);a.routes&&R("".concat(l,".routes"),a.routes,f,{parentPath:u,siblingActiveWhens:d,parentActiveWhen:h})}},{parentPath:m+n.base,parentActiveWhen:function(){return!0},siblingActiveWhens:[]}),delete n.disableWarnings}(e),e}function y(e,t){if(v)return e.getAttribute(t);var n=U(e.attrs,function(o){return o.name===t.toLowerCase()});return n?n.value:null}function ae(e,t){return v?e.hasAttribute(t):e.attrs.some(function(n){return n.name===t})}function I(e,t,n){if(e.nodeName.toLowerCase()==="application"){if(e.childNodes.length>0)throw Error("<application> elements must not have childNodes. You must put in a closing </application> - self closing is not allowed");var o={type:"application",name:y(e,"name")},r=y(e,"loader");if(r){if(t.loaders&&t.loaders.hasOwnProperty(r))o.loader=t.loaders[r];else if(v)throw Error("Application loader '".concat(r,"' was not defined in the htmlLayoutData"))}var i=y(e,"error");if(i){if(t.errors&&t.errors.hasOwnProperty(i))o.error=t.errors[i];else if(v)throw Error("Application error handler '".concat(r,"' was not defined in the htmlLayoutData"))}return ce(e,o,t),[o]}if(e.nodeName.toLowerCase()==="route"){var c={type:"route",routes:[]},s=y(e,"path");s&&(c.path=s),ae(e,"default")&&(c.default=!0),ae(e,"exact")&&(c.exact=!0),ce(e,c,t);for(var m=0;m<e.childNodes.length;m++){var f;(f=c.routes).push.apply(f,x(I(e.childNodes[m],t,n)))}return[c]}if(e.nodeName.toLowerCase()==="redirect")return n.redirects[B("/",y(e,"from"))]=B("/",y(e,"to")),[];if(typeof Node!="undefined"&&e instanceof Node){if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()==="")return[];if(e.childNodes&&e.childNodes.length>0){e.routes=[];for(var a=0;a<e.childNodes.length;a++){var l;(l=e.routes).push.apply(l,x(I(e.childNodes[a],t,n)))}}return[e]}if(e.childNodes){for(var p={type:e.nodeName.toLowerCase(),routes:[],attrs:e.attrs},u=0;u<e.childNodes.length;u++){var d;(d=p.routes).push.apply(d,x(I(e.childNodes[u],t,n)))}return[p]}return e.nodeName==="#comment"?[{type:"#comment",value:e.data}]:e.nodeName==="#text"?[{type:"#text",value:e.value}]:void 0}function ce(e,t,n){for(var o=(y(e,"props")||"").split(","),r=0;r<o.length;r++){var i=o[r].trim();if(i.length!==0)if(t.props||(t.props={}),n.props&&n.props.hasOwnProperty(i))t.props[i]=n.props[i];else{if(v)throw Error("Prop '".concat(i,"' was not defined in the htmlLayoutData. Either remove this attribute from the HTML element or provide the prop's value"));t.props[i]=Le}}}function se(e){return{bootstrap:function(){return Promise.resolve()},mount:function(t){return Promise.resolve().then(function(){t.domElement.innerHTML=e})},unmount:function(t){return Promise.resolve().then(function(){t.domElement.innerHTML=""})}}}function Se(e){var t=e.routes;e.applications;var n=e.active,o=n===void 0||n,r=!1,i={};if(!t)throw Error("single-spa-layout constructLayoutEngine(opts): opts.routes must be provided. Value was ".concat(L(t)));var c=t.base.slice(0,t.base.length-1),s={isActive:function(){return r},activate:function(){r||(r=!0,v&&(window.addEventListener("single-spa:before-routing-event",f),window.addEventListener("single-spa:before-mount-routing-event",a),window.addEventListener("single-spa:routing-event",l),K(m),a()))},deactivate:function(){r&&(r=!1,v&&(window.removeEventListener("single-spa:before-routing-event",f),window.removeEventListener("single-spa:before-mount-routing-event",a),window.removeEventListener("single-spa:routing-event",l),Y(m)))}};return o&&s.activate(),s;function m(p){var u=$({applicationName:p.appOrParcelName,location:window.location,routes:t.routes});if(u&&u.error){var d=document.getElementById(S(u.name)),h=typeof u.error=="string"?se(u.error):u.error;i[u.name]=M(h,{domElement:d})}setTimeout(function(){throw p})}function f(p){var u=p.detail,d=u.cancelNavigation,h=u.newUrl,N=pe(t,fe(h)),O=function(w){var E=t.redirects[w];if(w===N){if(!d)throw Error("single-spa-layout: <redirect> requires single-spa@>=5.7.0");return d(),setTimeout(function(){D(E)}),{v:void 0}}};for(var A in t.redirects){var b=O(A);if(L(b)==="object")return b.v}var P=[];de(h).forEach(function(w){i[w]&&(P.push(i[w].unmount()),delete i[w])}),P.length>0&&(d(),Promise.all(P).then(function(){D(h)}))}function a(){if(pe(t).indexOf(c)===0){var p=typeof t.containerEl=="string"?document.querySelector(t.containerEl):t.containerEl,u=G().reduce(function(d,h){return d[h]=document.getElementById(S(h)),d},{});_({location:window.location,routes:t.routes,parentContainer:p,shouldMount:!0,applicationContainers:u})}}function l(p){de(p.detail.newUrl).forEach(function(u){var d=document.getElementById(S(u));d&&d.isConnected&&d.parentNode.removeChild(d)})}}function _(e){var t=e.location,n=e.routes,o=e.parentContainer,r=e.previousSibling,i=e.shouldMount,c=e.applicationContainers;return n.forEach(function(s,m){if(s.type==="application"){if(i){var f,a=S(s.name);c[s.name]?f=c[s.name]:document.getElementById(a)?f=document.getElementById(a):(f=document.createElement("div")).id=a,ue(f,o,r),r=f}}else if(s.type==="route")r=_({location:t,routes:s.routes,parentContainer:o,previousSibling:r,shouldMount:i&&s.activeWhen(t),applicationContainers:c});else if(s instanceof Node||typeof s.type=="string")if(i){if(!s.connectedNode){var l=s instanceof Node?s.cloneNode(!1):le(s);s.connectedNode=l}ue(s.connectedNode,o,r),s.routes&&_({location:t,routes:s.routes,parentContainer:s.connectedNode,previousSibling:null,shouldMount:i,applicationContainers:c}),r=s.connectedNode}else(p=s.connectedNode)&&(p.remove?p.remove():p.parentNode.removeChild(p)),delete s.connectedNode;var p}),r}function $(e){for(var t=e.applicationName,n=e.location,o=e.routes,r=0;r<o.length;r++){var i=o[r];if(i.type==="application"){if(i.name===t)return i}else if(i.type==="route"){if(i.activeWhen(n)){var c=$({applicationName:t,location:n,routes:i.routes});if(c)return c}}else if(i.routes){var s=$({applicationName:t,location:n,routes:i.routes});if(s)return s}}}function ue(e,t,n){var o=n?n.nextSibling:t.firstChild;o!==e&&t.insertBefore(e,o)}function S(e){return"single-spa-application:".concat(e)}function le(e){if(e.type.toLowerCase()==="#text")return document.createTextNode(e.value);if(e.type.toLowerCase()==="#comment")return document.createComment(e.value);var t=document.createElement(e.type);return(e.attrs||[]).forEach(function(n){t.setAttribute(n.name,n.value)}),t.routes&&t.routes.forEach(function(n){t.appendChild(le(n))}),t}function pe(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:location;return t[e.mode==="hash"?"hash":"pathname"]}function fe(e){try{return new URL(e)}catch{var t=document.createElement("a");return t.href=e,t}}function de(e){var t=[],n=J(e?fe(e):location);return z().forEach(function(o){n.indexOf(o)<0&&t.push(o)}),t}function je(e){var t=e.routes,n=e.loadApp,o={};return q(o,xe,{},t.routes),Object.keys(o).map(function(r){var i=o[r];return{name:r,customProps:function(c,s){var m=U(i,function(f){return f.activeWhen(s)});return m?m.props:{}},activeWhen:i.map(function(c){return c.activeWhen}),app:function(){var c;v&&(c=U(i,function(m){return m.activeWhen(window.location)}));var s=n({name:r});return c&&c.loader?function(m,f,a){return Promise.resolve().then(function(){var l,p=S(m),u=document.getElementById(p);u||((u=document.createElement("div")).id=p,u.style.display="none",document.body.appendChild(u),l=function(){u.style.removeProperty("display"),u.getAttribute("style")===""&&u.removeAttribute("style"),window.removeEventListener("single-spa:before-mount-routing-event",l)},window.addEventListener("single-spa:before-mount-routing-event",l));var d=typeof f.loader=="string"?se(f.loader):f.loader,h=M(d,{name:"application-loader:".concat(m),domElement:u});function N(){return h.unmount().then(function(){l&&l()})}return Promise.all([h.mountPromise,a]).then(function(O){var A,b,P=(b=2,function(E){if(Array.isArray(E))return E}(A=O)||function(E,T){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(E)){var F=[],V=!0,ye=!1,ge=void 0;try{for(var be,X=E[Symbol.iterator]();!(V=(be=X.next()).done)&&(F.push(be.value),!T||F.length!==T);V=!0);}catch(Te){ye=!0,ge=Te}finally{try{V||X.return==null||X.return()}finally{if(ye)throw ge}}return F}}(A,b)||re(A,b)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}());P[0];var w=P[1];return N().then(function(){return w})},function(O){return N().then(function(){throw O})})})}(r,c,s):s}}})}function q(e,t,n,o){o.forEach(function(r){r.type==="application"?(e[r.name]||(e[r.name]=[]),e[r.name].push({activeWhen:t,props:me(n,r.props),loader:r.loader})):r.type==="route"?q(e,r.activeWhen,me(n,r.props),r.routes):r.routes&&q(e,t,n,r.routes)})}function me(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return ne(ne({},e),t)}function xe(){return!0}var We=`<single-spa-router>
  <!--

    This is the single-spa Layout Definition for your microfrontends.
    See https://single-spa.js.org/docs/layout-definition/ for more information.

  -->

  <!-- Example layouts you might find helpful:

  <nav>
    <application name="@org/navbar"></application>
  </nav>
  <route path="settings">
    <application name="@org/settings"></application>
  </route>

  -->

  <main>
    <route default>
      <application name="@single-spa/welcome"></application>
    </route>
  </main>
</single-spa-router>
`;const he=Ce(We),ve=je({routes:he,loadApp:({name:e})=>Oe(()=>we.import(e),void 0)}),Ie=Se({routes:he,applications:ve});ve.forEach(Q),Ie.activate(),Z()}}});
