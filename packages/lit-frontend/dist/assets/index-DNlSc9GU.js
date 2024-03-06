(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ie=globalThis,Ie=ie.ShadowRoot&&(ie.ShadyCSS===void 0||ie.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,He=Symbol(),ke=new WeakMap;let vt=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==He)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ie&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=ke.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ke.set(t,e))}return e}toString(){return this.cssText}};const f=r=>new vt(typeof r=="string"?r:r+"",void 0,He),E=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,n,s)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+r[s+1],r[0]);return new vt(t,r,He)},Kt=(r,e)=>{if(Ie)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),n=ie.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=t.cssText,r.appendChild(i)}},qe=Ie?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return f(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:kt,defineProperty:qt,getOwnPropertyDescriptor:Gt,getOwnPropertyNames:Jt,getOwnPropertySymbols:Xt,getPrototypeOf:Qt}=Object,S=globalThis,Ge=S.trustedTypes,Yt=Ge?Ge.emptyScript:"",$e=S.reactiveElementPolyfillSupport,K=(r,e)=>r,le={toAttribute(r,e){switch(e){case Boolean:r=r?Yt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},ze=(r,e)=>!kt(r,e),Je={attribute:!0,type:String,converter:le,reflect:!1,hasChanged:ze};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),S.litPropertyMetadata??(S.litPropertyMetadata=new WeakMap);class M extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Je){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,t);n!==void 0&&qt(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){const{get:n,set:s}=Gt(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return n==null?void 0:n.call(this)},set(o){const c=n==null?void 0:n.call(this);s.call(this,o),this.requestUpdate(e,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Je}static _$Ei(){if(this.hasOwnProperty(K("elementProperties")))return;const e=Qt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(K("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(K("properties"))){const t=this.properties,i=[...Jt(t),...Xt(t)];for(const n of i)this.createProperty(n,t[n])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,n]of t)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const n=this._$Eu(t,i);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const n of i)t.unshift(qe(n))}else e!==void 0&&t.push(qe(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Kt(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var s;const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(n!==void 0&&i.reflect===!0){const o=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:le).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(e,t){var s;const i=this.constructor,n=i._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const o=i.getPropertyOptions(n),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)==null?void 0:s.fromAttribute)!==void 0?o.converter:le;this._$Em=n,this[n]=c.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??ze)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[s,o]of n)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(n=>{var s;return(s=n.hostUpdate)==null?void 0:s.call(n)}),this.update(t)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostUpdated)==null?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}M.elementStyles=[],M.shadowRootOptions={mode:"open"},M[K("elementProperties")]=new Map,M[K("finalized")]=new Map,$e==null||$e({ReactiveElement:M}),(S.reactiveElementVersions??(S.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=globalThis,ce=k.trustedTypes,Xe=ce?ce.createPolicy("lit-html",{createHTML:r=>r}):void 0,bt="$lit$",O=`lit$${(Math.random()+"").slice(9)}$`,yt="?"+O,Zt=`<${yt}>`,T=document,G=()=>T.createComment(""),J=r=>r===null||typeof r!="object"&&typeof r!="function",$t=Array.isArray,er=r=>$t(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",we=`[ 	
\f\r]`,W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Qe=/-->/g,Ye=/>/g,j=RegExp(`>|${we}(?:([^\\s"'>=/]+)(${we}*=${we}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ze=/'/g,et=/"/g,wt=/^(?:script|style|textarea|title)$/i,tr=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),_=tr(1),I=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),tt=new WeakMap,U=T.createTreeWalker(T,129);function Et(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Xe!==void 0?Xe.createHTML(e):e}const rr=(r,e)=>{const t=r.length-1,i=[];let n,s=e===2?"<svg>":"",o=W;for(let c=0;c<t;c++){const a=r[c];let l,h,d=-1,u=0;for(;u<a.length&&(o.lastIndex=u,h=o.exec(a),h!==null);)u=o.lastIndex,o===W?h[1]==="!--"?o=Qe:h[1]!==void 0?o=Ye:h[2]!==void 0?(wt.test(h[2])&&(n=RegExp("</"+h[2],"g")),o=j):h[3]!==void 0&&(o=j):o===j?h[0]===">"?(o=n??W,d=-1):h[1]===void 0?d=-2:(d=o.lastIndex-h[2].length,l=h[1],o=h[3]===void 0?j:h[3]==='"'?et:Ze):o===et||o===Ze?o=j:o===Qe||o===Ye?o=W:(o=j,n=void 0);const p=o===j&&r[c+1].startsWith("/>")?" ":"";s+=o===W?a+Zt:d>=0?(i.push(l),a.slice(0,d)+bt+a.slice(d)+O+p):a+O+(d===-2?c:p)}return[Et(r,s+(r[t]||"<?>")+(e===2?"</svg>":"")),i]};class X{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let s=0,o=0;const c=e.length-1,a=this.parts,[l,h]=rr(e,t);if(this.el=X.createElement(l,i),U.currentNode=this.el.content,t===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(n=U.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes())for(const d of n.getAttributeNames())if(d.endsWith(bt)){const u=h[o++],p=n.getAttribute(d).split(O),R=/([.?@])?(.*)/.exec(u);a.push({type:1,index:s,name:R[2],strings:p,ctor:R[1]==="."?ir:R[1]==="?"?sr:R[1]==="@"?or:ge}),n.removeAttribute(d)}else d.startsWith(O)&&(a.push({type:6,index:s}),n.removeAttribute(d));if(wt.test(n.tagName)){const d=n.textContent.split(O),u=d.length-1;if(u>0){n.textContent=ce?ce.emptyScript:"";for(let p=0;p<u;p++)n.append(d[p],G()),U.nextNode(),a.push({type:2,index:++s});n.append(d[u],G())}}}else if(n.nodeType===8)if(n.data===yt)a.push({type:2,index:s});else{let d=-1;for(;(d=n.data.indexOf(O,d+1))!==-1;)a.push({type:7,index:s}),d+=O.length-1}s++}}static createElement(e,t){const i=T.createElement("template");return i.innerHTML=e,i}}function H(r,e,t=r,i){var o,c;if(e===I)return e;let n=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const s=J(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==s&&((c=n==null?void 0:n._$AO)==null||c.call(n,!1),s===void 0?n=void 0:(n=new s(r),n._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=n:t._$Cl=n),n!==void 0&&(e=H(r,n._$AS(r,e.values),n,i)),e}class nr{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,n=((e==null?void 0:e.creationScope)??T).importNode(t,!0);U.currentNode=n;let s=U.nextNode(),o=0,c=0,a=i[0];for(;a!==void 0;){if(o===a.index){let l;a.type===2?l=new ee(s,s.nextSibling,this,e):a.type===1?l=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(l=new ar(s,this,e)),this._$AV.push(l),a=i[++c]}o!==(a==null?void 0:a.index)&&(s=U.nextNode(),o++)}return U.currentNode=T,n}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ee{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,n){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=H(this,e,t),J(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==I&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):er(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==m&&J(this._$AH)?this._$AA.nextSibling.data=e:this.T(T.createTextNode(e)),this._$AH=e}$(e){var s;const{values:t,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=X.createElement(Et(i.h,i.h[0]),this.options)),i);if(((s=this._$AH)==null?void 0:s._$AD)===n)this._$AH.p(t);else{const o=new nr(n,this),c=o.u(this.options);o.p(t),this.T(c),this._$AH=o}}_$AC(e){let t=tt.get(e.strings);return t===void 0&&tt.set(e.strings,t=new X(e)),t}k(e){$t(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const s of e)n===t.length?t.push(i=new ee(this.S(G()),this.S(G()),this,this.options)):i=t[n],i._$AI(s),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class ge{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,s){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=m}_$AI(e,t=this,i,n){const s=this.strings;let o=!1;if(s===void 0)e=H(this,e,t,0),o=!J(e)||e!==this._$AH&&e!==I,o&&(this._$AH=e);else{const c=e;let a,l;for(e=s[0],a=0;a<s.length-1;a++)l=H(this,c[i+a],t,a),l===I&&(l=this._$AH[a]),o||(o=!J(l)||l!==this._$AH[a]),l===m?e=m:e!==m&&(e+=(l??"")+s[a+1]),this._$AH[a]=l}o&&!n&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ir extends ge{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}}class sr extends ge{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}}class or extends ge{constructor(e,t,i,n,s){super(e,t,i,n,s),this.type=5}_$AI(e,t=this){if((e=H(this,e,t,0)??m)===I)return;const i=this._$AH,n=e===m&&i!==m||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==m&&(i===m||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class ar{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){H(this,e)}}const Ee=k.litHtmlPolyfillSupport;Ee==null||Ee(X,ee),(k.litHtmlVersions??(k.litHtmlVersions=[])).push("3.1.2");const lr=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let n=i._$litPart$;if(n===void 0){const s=(t==null?void 0:t.renderBefore)??null;i._$litPart$=n=new ee(e.insertBefore(G(),s),s,void 0,t??{})}return n._$AI(r),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class g extends M{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=lr(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return I}}var _t;g._$litElement$=!0,g.finalized=!0,(_t=globalThis.litElementHydrateSupport)==null||_t.call(globalThis,{LitElement:g});const Ae=globalThis.litElementPolyfillSupport;Ae==null||Ae({LitElement:g});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cr={attribute:!0,type:String,converter:le,reflect:!1,hasChanged:ze},hr=(r=cr,e,t)=>{const{kind:i,metadata:n}=t;let s=globalThis.litPropertyMetadata.get(n);if(s===void 0&&globalThis.litPropertyMetadata.set(n,s=new Map),s.set(t.name,r),i==="accessor"){const{name:o}=t;return{set(c){const a=e.get.call(this);e.set.call(this,c),this.requestUpdate(o,a,r)},init(c){return c!==void 0&&this.P(o,void 0,r),c}}}if(i==="setter"){const{name:o}=t;return function(c){const a=this[o];e.call(this,c),this.requestUpdate(o,a,r)}}throw Error("Unsupported decorator location: "+i)};function b(r){return(e,t)=>typeof t=="object"?hr(r,e,t):((i,n,s)=>{const o=n.hasOwnProperty(s);return n.constructor.createProperty(s,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(n,s):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function dr(r){return b({...r,state:!0,attribute:!1})}const A="*{margin:0;box-sizing:border-box}body{line-height:1.5}img{max-width:100%}a{text-decoration:none;color:inherit}",P="h1{font-family:var(--font-family-display);font-size:var(--font-size-x-large);text-align:center;padding-right:1rem;line-height:1}header{background-color:var(--color-background-header);color:var(--color-text-heading);display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:1rem;border-bottom:1px solid #f7db75}header h2{color:var(--color-text-heading);font-family:var(--font-family-display);font-size:var(--font-size-medium);text-align:center;padding-left:1rem;padding-right:1rem;line-height:1}body{background-color:var(--color-background-page);color:var(--color-text);font-family:var(--font-family-body);font-size:var(--font-size-body)}h2{color:var(--color-text-headers);font-family:var(--font-family-display);font-size:var(--font-size-large);text-align:left;padding-left:96px;padding-top:.5em}p{text-align:left;padding-left:96px}svg.icon{display:inline;height:var(--icon-size);width:var(--icon-size);vertical-align:baseline;fill:currentColor}svg.icon-search{display:inline;height:var(--icon-size);vertical-align:baseline;fill:currentColor}.profile-header{width:var(--icon-size);height:var(--icon-size);border-radius:50%}",te=".instrument-container{display:flex;flex-flow:row wrap;justify-content:flex-start;padding-left:86px;padding-top:.5em}.instrument-items{width:200px;margin:10px;text-align:center;border:1px solid currentColor;border-radius:5px;padding:5px;background-color:var(--color-box-background);color:var(--color-box-text)}.musician-container{display:flex;flex-flow:row wrap;justify-content:flex-start;padding-left:86px;padding-top:.5em}.musician-items{width:200px;margin:10px;text-align:center;border:1px solid currentColor;border-radius:5px;padding:5px;background-color:var(--color-box-background);color:var(--color-box-text)}";var ur=Object.defineProperty,pr=Object.getOwnPropertyDescriptor,me=(r,e,t,i)=>{for(var n=i>1?void 0:i?pr(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&ur(e,t,n),n};let z=class extends g{constructor(){super(...arguments),this.link="",this.icon="",this.image=""}render(){return _`
            <a href="${this.link}">
                <h3><slot name="instrument-name">Instrument</slot></h3>
                <svg class="icon">
                    <use href="${this.icon}" />
                </svg>
                <img src="${this.image}" width="200"/>
            </a>
        `}};z.styles=[f(A),f(P),E`
    svg.icon {
        display: inline;
        height: var(--icon-size);
        width: var(--icon-size);
        vertical-align: baseline;
        fill: currentColor;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    * {
        margin: 0;
        box-sizing: border-box;
    }
    img {
        max-width: 100%;
        border-radius: 5px;
    }
    `];me([b()],z.prototype,"link",2);me([b()],z.prototype,"icon",2);me([b()],z.prototype,"image",2);z=me([v("instrument-box")],z);var fr=Object.defineProperty,gr=Object.getOwnPropertyDescriptor,mr=(r,e,t,i)=>{for(var n=i>1?void 0:i?gr(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&fr(e,t,n),n};let xe=class extends g{render(){return _`
        <article>
            <h2>Instruments</h2>
            <div class="instrument-container">
                <section class="instrument-items">
                    <instrument-box
                    link="guitar.html"
                    icon="/icons/instruments.svg#icon-guitar"
                    image="/images/guitar.jpg">
                        <span slot="instrument-name">Guitar</span>
                    </instrument-box>
                </section>
                <section class="instrument-items">
                    <instrument-box
                    link="piano.html"
                    icon="/icons/instruments.svg#icon-piano"
                    image="/images/piano.jpg">
                        <span slot="instrument-name">Piano</span>
                    </instrument-box>
                </section>
                <section class="instrument-items">
                    <instrument-box
                    link="violin.html"
                    icon="/icons/instruments.svg#icon-violin"
                    image="/images/violin.jpg">
                        <span slot="instrument-name">Violin</span>
                    </instrument-box>
                </section>
            </div>
        </article>
    `}};xe.styles=[f(A),f(P),f(te)];xe=mr([v("instrument-container")],xe);var _r=Object.defineProperty,vr=Object.getOwnPropertyDescriptor,Be=(r,e,t,i)=>{for(var n=i>1?void 0:i?vr(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&_r(e,t,n),n};let Q=class extends g{constructor(){super(...arguments),this.link="",this.image=""}render(){return _`
        <a href="${this.link}">
            <h3><slot name="musician-name">Musician</slot></h3>
            <img src="${this.image}" class="profile-header"/>
        </a>
        `}};Q.styles=E`
    svg.icon {
        display: inline;
        height: var(--icon-size);
        width: var(--icon-size);
        vertical-align: baseline;
        fill: currentColor;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    * {
        margin: 0;
        box-sizing: border-box;
    }
    img {
        max-width: 100%;
    }
    .profile-header {
        width: var(--icon-size);
        height: var(--icon-size);
        border-radius: 50%;
    }
    `;Be([b()],Q.prototype,"link",2);Be([b()],Q.prototype,"image",2);Q=Be([v("musician-box")],Q);var br=Object.defineProperty,yr=Object.getOwnPropertyDescriptor,$r=(r,e,t,i)=>{for(var n=i>1?void 0:i?yr(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&br(e,t,n),n};let Oe=class extends g{render(){return _`
        <article>
            <h2>Musicians</h2>
            <div class="musician-container">
                <section class="musician-items">
                    <musician-box
                    link="musician.html"
                    image="/images/kooldude.jpg">
                        <span slot="musician-name">Kooldude47</span>
                    </musician-box>
                </section>
            </div>
        </article>
        `}};Oe.styles=[f(A),f(P),f(te)];Oe=$r([v("musician-container")],Oe);var wr=Object.defineProperty,Er=Object.getOwnPropertyDescriptor,Ar=(r,e,t,i)=>{for(var n=i>1?void 0:i?Er(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&wr(e,t,n),n};let Ce=class extends g{render(){return _`
        <main>
            <instrument-container></instrument-container>
            <musician-container></musician-container>
        </main>
    `}};Ce.styles=[f(A),f(P),f(te)];Ce=Ar([v("landing-page")],Ce);const Pr="http://localhost:3000/api";function At(r){return`${Pr}${r}`}const xr=".song-container{display:flex;flex-flow:row wrap;justify-content:flex-start;padding-left:86px}.song-items{width:300px;margin:10px;border:1px solid currentColor;border-radius:5px;background-color:var(--color-box-background);padding-bottom:1em;color:var(--color-box-text)}.song-items>a>div{text-align:center;padding-bottom:.5em}.song-items p{text-align:left;padding-left:3em}article>h2{text-align:center;padding-left:0}.song-items h3{padding-top:.5em;padding-bottom:.5em}article>p{text-align:center;padding-left:0}.profile-container{display:flex;justify-content:center;align-items:center;padding-top:.5em;padding-bottom:.5em}.profile{width:150px;height:150px;border-radius:50%}";var Or=Object.defineProperty,Cr=Object.getOwnPropertyDescriptor,_e=(r,e,t,i)=>{for(var n=i>1?void 0:i?Cr(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Or(e,t,n),n};let B=class extends g{constructor(){super(...arguments),this.link="",this.image="",this.description=""}render(){const r=this.description.split(",");return _`
        <a href="${this.link}">
        <div>
            <h3><slot name="song-name">Song</slot></h3>
            <img src="${this.image}" width="200" height="260"/>
        </div>
            <p>Original Author: ${r[0]}</p>
            <p>Arrangement by: ${r[1]}</p>
            <p>${r[2]}</p>
            <p>Difficulty: ${r[3]}</p>
            <p>${r[4]}</p>
        </a>
        `}};B.styles=E`
    a > div {
        text-align: center;
        padding-bottom: .5em;
    }
    h3 {
        padding-bottom: .5em;
    }
    a > p {
        text-align: left;
        padding-left: 3em;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    * {
        margin: 0;
        box-sizing: border-box;
    }
    img {
        max-width: 100%;
    }
    `;_e([b()],B.prototype,"link",2);_e([b()],B.prototype,"image",2);_e([b()],B.prototype,"description",2);B=_e([v("song-box")],B);var Sr=Object.defineProperty,Rr=Object.getOwnPropertyDescriptor,jr=(r,e,t,i)=>{for(var n=i>1?void 0:i?Rr(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Sr(e,t,n),n};let Se=class extends g{render(){return _`
            <div class="song-container">
                <section class="song-items">
                    <song-box
                    link="fromthestart.html"
                    image="/images/fromthestart.jpeg"
                    description="Laufey, Kooldude47, Jan 17 2024, Intermediate, Guitar">
                        <span slot="song-name">From the Start</span>
                    </song-box>
                </section>
            </div>
        `}};Se.styles=[f(A),f(P),f(xr)];Se=jr([v("song-container")],Se);var Ur=Object.defineProperty,Tr=Object.getOwnPropertyDescriptor,ve=(r,e,t,i)=>{for(var n=i>1?void 0:i?Tr(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Ur(e,t,n),n};let D=class extends g{constructor(){super(...arguments),this.path=""}render(){const{userid:e,name:t,date_joined:i,instruments:n,avatar_image:s}=this.profile||{};let o="Instruments: "+(n==null?void 0:n.join(", "));return _`
        <article>
            <h2>${e}</h2>
            <div class="profile-container">
                <img src=${s} class="profile">
            </div>
            <p>Name: ${t}</p>
            <p>${o}</p>
            <p>Date Joined: ${i}</p>
            <section class="sheetmusic">
                <h2>Sheet Music</h2>
            </section>
            <section class="favorites">
                <h2>Favorites</h2>
                <song-container></song-container>   
            </section>
        </article>
        `}_fetchData(e){fetch(At(e)).then(t=>t.status===200?t.json():null).then(t=>{t&&(this.profile=t)})}connectedCallback(){this.path&&this._fetchData(this.path),super.connectedCallback()}attributeChangedCallback(e,t,i){e==="path"&&t!==i&&t&&this._fetchData(i),super.attributeChangedCallback(e,t,i)}};D.styles=[f(A),f(P),E`

        article > h2 {
            text-align: center;
            padding-left: 0em;
        }

        article > p {
            text-align: center;
            padding-left: 0em;
    /src

        .profile-container {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: .5em;
            padding-bottom: .5em;
        }

        .profile {
            width: 150px;
            height: 150px;
            border-radius: 50%;
        }
    `];ve([b()],D.prototype,"path",2);ve([dr()],D.prototype,"profile",2);D=ve([v("user-profile")],D);let Re=class extends D{render(){const{userid:r,name:e,instruments:t,avatar_image:i}=this.profile||{};return console.log("Rendering form",this.profile),_`
        <h2 class="edit">Edit Profile</h2>
        <form @submit=${this._handleSubmit}>
            <label>
                <span>Username: </span>
                <input name="userid" value="${r}" />
            </label><br>
            <label>
                <span>Name: </span>
                <input name="name" value="${e}" />
            </label><br>
            <label>
                <span>Image: </span>
                <input name="avatar_image" value="${i}" />
            </label><br>
            <label>
                <span>Instruments: </span>
                <input name="instruments" .value=${t==null?void 0:t.join(", ")} />
            </label>
            <div>
                <button type="submit">Submit</button>
            <div>
        </form> `}_handleSubmit(r){r.preventDefault();const e=r.target,t=new FormData(e),i=Array.from(t.entries()).map(([s,o])=>o===""?[s]:[s,o]).map(([s,o])=>s==="instruments"?[s,o.split(",").map(c=>c.trim())]:[s,o]),n=Object.fromEntries(i);this._putData(n)}_putData(r){fetch(At(this.path),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then(e=>e.status===200?e.json():null).then(e=>{e&&(this.profile=e)}).catch(e=>console.log("Failed to PUT form data",e))}};Re.styles=[...D.styles,E`
        .edit {
            text-align: center;
            padding-left: 0em;
        }
        form {
            display: flex;
            flex-flow: column;
          }
          label {
            display: flex;
            justify-content: space-between;
            margin-left: 40%;
            margin-right: 40%;
            margin-top: 5px;
            margin-bottom: 5px;
          }
          button {
            grid-column: value;
            width: 10em;
          }
          div {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 10px;
          }
          input {
            font: inherit;
          }`];Re=ve([v("user-profile-edit")],Re);var Dr=Object.defineProperty,Lr=Object.getOwnPropertyDescriptor,Mr=(r,e,t,i)=>{for(var n=i>1?void 0:i?Lr(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Dr(e,t,n),n};let je=class extends g{render(){return _`
        <main>
            <user-profile path="/profiles/deedoo2"></user-profile>
        </main>
    `}};je.styles=[f(A),f(P),f(te)];je=Mr([v("profile-page")],je);const Nr=[{path:"/app/profile",component:"profile-page"},{path:"/app",component:"landing-page"}];var Ir=Object.defineProperty,Hr=Object.getOwnPropertyDescriptor,Fe=(r,e,t,i)=>{for(var n=i>1?void 0:i?Hr(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Ir(e,t,n),n};let Y=class extends g{constructor(){super(...arguments),this.open=!1,this.align="left"}render(){const r=this.align==="left"?"":"--position-left: auto; --position-right: 0;";return _`
      <input
        type="checkbox"
        id="is-shown"
        @change=${this._handleChange}
        .checked=${this.open} />
      <label for="is-shown">
        <slot>Menu</slot>
      </label>
      <slot name="menu" style=${r}>
        <ul>
          <li>Command 1</li>
          <li>Command 2</li>
          <li>Command 3</li>
        </ul>
      </slot>
    `}_handleChange(r){const e=r.target;this._toggle(e.checked)}_toggle(r){this.open=r,this._toggleClickAway(r)}_toggleClickAway(r){const e=t=>{t.composedPath().includes(this)?t.stopPropagation():this._toggle(!1)};r?document.addEventListener("click",e):document.removeEventListener("click",e)}};Y.styles=E`
    :host {
      --position-left: 0;
      --position-right: auto;

      display: inline-block;
      position: relative;
    }

    #is-shown {
      display: none;
    }

    label {
      cursor: pointer;
    }

    slot[name="menu"] {
      display: none;
      position: absolute;
      top: 100%;
      right: 0;
      border: 1px solid;
      background: black;
      width: 12em;
    }

    #is-shown:checked ~ slot[name="menu"] {
      display: block;
    }

    /* CSS for slotted elements and default slot content */

    ::slotted(ul[slot="menu"]),
    slot[name="menu"] > ul {
      margin: 0;
      padding: 0.5em;
      list-style: none;
      white-space: nowrap;
    }
  `;Fe([b({reflect:!0,type:Boolean})],Y.prototype,"open",2);Fe([b()],Y.prototype,"align",2);Y=Fe([v("drop-down")],Y);var zr=Object.defineProperty,Br=Object.getOwnPropertyDescriptor,Pt=(r,e,t,i)=>{for(var n=i>1?void 0:i?Br(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&zr(e,t,n),n};let he=class extends g{constructor(){super(...arguments),this.on=!1}render(){return _`<label>
      <slot>Label</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._handleChange} />
      </span>
    </label>`}_handleChange(r){const e=r.target,t=new Event(r.type,{bubbles:!0,composed:!0});this.on=e==null?void 0:e.checked,this.dispatchEvent(t)}};he.styles=E`
    :host {
      display: block;
    }
    label {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem;
      line-height: 2em;
      cursor: pointer;
    }
    .slider {
      display: inline-block;
      border: 1px solid var(--color-box-background);
      border-radius: 0.75em;
      background-color: var(--color-background-page);
      height: 1.5em;
      width: 3.25em;
      position: relative;
      transition: background-color
        var(--time-transition-control);
    }
    .slider:has(input:checked) {
      background-color: var(--color-text-heading);
    }
    input {
      appearance: none;
      cursor: pointer;
      background-color: var(--color-box-text);
      border-radius: 50%;
      width: 1.25em;
      height: 1.25em;
      font-size: inherit;
      position: absolute;
      left: 0;
      transition: left var(--time-transition-control);
    }
    input:checked {
      left: 1.5em;
    }
  `;Pt([b({reflect:!0,type:Boolean})],he.prototype,"on",2);he=Pt([v("toggle-switch")],he);var Fr=Object.defineProperty,Vr=Object.getOwnPropertyDescriptor,be=(r,e,t,i)=>{for(var n=i>1?void 0:i?Vr(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Fr(e,t,n),n};let F=class extends g{constructor(){super(...arguments),this.name="preset",this.options=[1,2,3,4,5]}_renderButton(r){const e=this.value===r;return _`
      <label>
        <input
          type="radio"
          name=${this.name}
          .value=${r}
          .checked=${e} />
        ${r}
      </label>
    `}render(){return _`
      <div>
        <span><slot></slot></span>
        <span class="switches" @change=${this._handleChange}>
          ${this.options.map(r=>this._renderButton(r))}
        </span>
      </div>
    `}_handleChange(r){const e=r.target,t=new Event(r.type,{bubbles:!0,composed:!0});console.log("Preset changed",r),e&&(this.value=e.value?parseInt(e.value):void 0),this.dispatchEvent(t)}};F.styles=E`
    * {
      margin: 0;
      box-sizing: border-box;
    }
    div {
      display: flex;
      flex-direction: column;
    }
    span.switches {
      display: flex;
      justify-content: stretch;
      border-radius: var(--size-corner-medium);
      border: var(--line-weight-fine) solid var(--color-accent);
      overflow: hidden;
      align-item: end;
      margin: var(--size-spacing-small) 0;
    }
    label {
      display: inline-block;
      flex-grow: 1;
      padding: var(--size-spacing-small);
      line-height: 1em;
      background-color: var(--color-background-control);
      font-family: var(--font-family-display);
      cursor: pointer;
      text-align: center;
    }
    label:has(input:checked) {
      background-color: var(--color-accent);
      color: var(--color-box-text);
    }
    label + label {
      border-left: var(--line-weight-fine) solid
        var(--color-accent);
    }
    input {
      display: none;
    }
  `;be([b({reflect:!0,type:Number})],F.prototype,"value",2);be([b()],F.prototype,"name",2);be([b({attribute:!1})],F.prototype,"options",2);F=be([v("preset-buttons")],F);var Wr=Object.defineProperty,Kr=Object.getOwnPropertyDescriptor,kr=(r,e,t,i)=>{for(var n=i>1?void 0:i?Kr(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Wr(e,t,n),n};let Ue=class extends g{render(){return _`
        <ul>
            <li class="header">
                <a href="/app/profile">
                    <slot name="name">Your Name</slot>
                </a>
            </li>
            <li>
                <toggle-switch @change=${this._toggleDarkMode}>
                    Dark Mode
                </toggle-switch>
            </li>
            <li>
                <preset-buttons
                  name="font-size"
                  .options=${[12,14,16,20,24]}
                  value="16"
                  @change=${this._selectFontSize}>
                  Font Size
                </preset-buttons>
            </li>
            <li>
                <slot name="logout">Sign out</slot>
            </li>
        </ul>
    `}_toggleDarkMode(r){const e=r.target,t=document.body;console.log("Toggling Dark mode",r),e!=null&&e.on?t.classList.add("dark-mode"):t.classList.remove("dark-mode")}_selectFontSize(r){const e=r.target,t=document.body;if(console.log("Selecting Font Size",r),e){const i=e.value?e.value.toString()+"px":"initial";t.style.fontSize=i}}};Ue.styles=E`
    * {
      margin: 0;
      box-sizing: border-box;
    }
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      background-color: var(--color-background-header);
      color: var(--color-text-heading);
      border: 1px solid var(--color-text-heading);
      border-radius: 0.25rem;
      padding: 0.25rem;
      box-shadow: var(--shadow-dropdown);
    }
    li {
      white-space: nowrap;
      border-color: var(--color-accent);
      border-width: 1px;
    }
    li.header {
      display: flex;
      flex-wrap: nowrap;
      align-items: end;
      line-height: var(--font-line-height-display);
    }
    li {
      border-bottom-style: solid;
    }
    h1 {
      font-size: var(--size-type-mlarge);
      line-height: var(--font-line-height-display);
      white-space: normal;
      text-align: right;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
  `;Ue=kr([v("user-panel")],Ue);var qr=Object.defineProperty,Gr=Object.getOwnPropertyDescriptor,Jr=(r,e,t,i)=>{for(var n=i>1?void 0:i?Gr(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&qr(e,t,n),n};let Te=class extends g{render(){return _`
        <header>
            <a href="/app/">
                <h1>Sheet Share</h1>
            </a>
            <svg class="icon-search">
                <use href="/icons/placeholder.svg#icon-search" />
            </svg>
            <h2 class="home">Musician Page</h2>
            <h2 class="login">Login | Sign up</h2>
            <drop-down align="right">
                <img src="/images/profile.jpg" class="profile-header"/>
                <user-panel slot="menu">
                    <span slot="name">Andrew Diaz</span>
                </user-panel>
            </drop-down>
        </header>
        `}};Te.styles=[f(A),f(P)];Te=Jr([v("app-header")],Te);function de(r){return r=r||[],Array.isArray(r)?r:[r]}function w(r){return`[Vaadin.Router] ${r}`}function Xr(r){if(typeof r!="object")return String(r);const e=Object.prototype.toString.call(r).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(r)}`:e}const ue="module",pe="nomodule",De=[ue,pe];function rt(r){if(!r.match(/.+\.[m]?js$/))throw new Error(w(`Unsupported type for bundle "${r}": .js or .mjs expected.`))}function xt(r){if(!r||!$(r.path))throw new Error(w('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=r.bundle,t=["component","redirect","bundle"];if(!L(r.action)&&!Array.isArray(r.children)&&!L(r.children)&&!fe(e)&&!t.some(i=>$(r[i])))throw new Error(w(`Expected route config "${r.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if($(e))rt(e);else if(De.some(i=>i in e))De.forEach(i=>i in e&&rt(e[i]));else throw new Error(w('Expected route bundle to include either "'+pe+'" or "'+ue+'" keys, or both'));r.redirect&&["bundle","component"].forEach(i=>{i in r&&console.warn(w(`Route config "${r.path}" has both "redirect" and "${i}" properties, and "redirect" will always override the latter. Did you mean to only use "${i}"?`))})}function nt(r){de(r).forEach(e=>xt(e))}function it(r,e){let t=document.head.querySelector('script[src="'+r+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",r),e===ue?t.setAttribute("type",ue):e===pe&&t.setAttribute(pe,""),t.async=!0),new Promise((i,n)=>{t.onreadystatechange=t.onload=s=>{t.__dynamicImportLoaded=!0,i(s)},t.onerror=s=>{t.parentNode&&t.parentNode.removeChild(t),n(s)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&i()})}function Qr(r){return $(r)?it(r):Promise.race(De.filter(e=>e in r).map(e=>it(r[e],e)))}function q(r,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${r}`,{cancelable:r==="go",detail:e}))}function fe(r){return typeof r=="object"&&!!r}function L(r){return typeof r=="function"}function $(r){return typeof r=="string"}function Ot(r){const e=new Error(w(`Page not found (${r.pathname})`));return e.context=r,e.code=404,e}const N=new class{};function Yr(r){const e=r.port,t=r.protocol,s=t==="http:"&&e==="80"||t==="https:"&&e==="443"?r.hostname:r.host;return`${t}//${s}`}function st(r){if(r.defaultPrevented||r.button!==0||r.shiftKey||r.ctrlKey||r.altKey||r.metaKey)return;let e=r.target;const t=r.composedPath?r.composedPath():r.path||[];for(let c=0;c<t.length;c++){const a=t[c];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){e=a;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||Yr(e))!==window.location.origin)return;const{pathname:n,search:s,hash:o}=e;q("go",{pathname:n,search:s,hash:o})&&(r.preventDefault(),r&&r.type==="click"&&window.scrollTo(0,0))}const Zr={activate(){window.document.addEventListener("click",st)},inactivate(){window.document.removeEventListener("click",st)}},en=/Trident/.test(navigator.userAgent);en&&!L(window.PopStateEvent)&&(window.PopStateEvent=function(r,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(r,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function ot(r){if(r.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:i}=window.location;q("go",{pathname:e,search:t,hash:i})}const tn={activate(){window.addEventListener("popstate",ot)},inactivate(){window.removeEventListener("popstate",ot)}};var V=Tt,rn=Ve,nn=ln,sn=Rt,on=Ut,Ct="/",St="./",an=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Ve(r,e){for(var t=[],i=0,n=0,s="",o=e&&e.delimiter||Ct,c=e&&e.delimiters||St,a=!1,l;(l=an.exec(r))!==null;){var h=l[0],d=l[1],u=l.index;if(s+=r.slice(n,u),n=u+h.length,d){s+=d[1],a=!0;continue}var p="",R=r[n],Ht=l[2],zt=l[3],Bt=l[4],re=l[5];if(!a&&s.length){var ye=s.length-1;c.indexOf(s[ye])>-1&&(p=s[ye],s=s.slice(0,ye))}s&&(t.push(s),s="",a=!1);var Ft=p!==""&&R!==void 0&&R!==p,Vt=re==="+"||re==="*",Wt=re==="?"||re==="*",We=p||o,Ke=zt||Bt;t.push({name:Ht||i++,prefix:p,delimiter:We,optional:Wt,repeat:Vt,partial:Ft,pattern:Ke?cn(Ke):"[^"+x(We)+"]+?"})}return(s||n<r.length)&&t.push(s+r.substr(n)),t}function ln(r,e){return Rt(Ve(r,e))}function Rt(r){for(var e=new Array(r.length),t=0;t<r.length;t++)typeof r[t]=="object"&&(e[t]=new RegExp("^(?:"+r[t].pattern+")$"));return function(i,n){for(var s="",o=n&&n.encode||encodeURIComponent,c=0;c<r.length;c++){var a=r[c];if(typeof a=="string"){s+=a;continue}var l=i?i[a.name]:void 0,h;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(l.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(h=o(l[d],a),!e[c].test(h))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');s+=(d===0?a.prefix:a.delimiter)+h}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(h=o(String(l),a),!e[c].test(h))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+h+'"');s+=a.prefix+h;continue}if(a.optional){a.partial&&(s+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return s}}function x(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function cn(r){return r.replace(/([=!:$/()])/g,"\\$1")}function jt(r){return r&&r.sensitive?"":"i"}function hn(r,e){if(!e)return r;var t=r.source.match(/\((?!\?)/g);if(t)for(var i=0;i<t.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return r}function dn(r,e,t){for(var i=[],n=0;n<r.length;n++)i.push(Tt(r[n],e,t).source);return new RegExp("(?:"+i.join("|")+")",jt(t))}function un(r,e,t){return Ut(Ve(r,t),e,t)}function Ut(r,e,t){t=t||{};for(var i=t.strict,n=t.start!==!1,s=t.end!==!1,o=x(t.delimiter||Ct),c=t.delimiters||St,a=[].concat(t.endsWith||[]).map(x).concat("$").join("|"),l=n?"^":"",h=r.length===0,d=0;d<r.length;d++){var u=r[d];if(typeof u=="string")l+=x(u),h=d===r.length-1&&c.indexOf(u[u.length-1])>-1;else{var p=u.repeat?"(?:"+u.pattern+")(?:"+x(u.delimiter)+"(?:"+u.pattern+"))*":u.pattern;e&&e.push(u),u.optional?u.partial?l+=x(u.prefix)+"("+p+")?":l+="(?:"+x(u.prefix)+"("+p+"))?":l+=x(u.prefix)+"("+p+")"}}return s?(i||(l+="(?:"+o+")?"),l+=a==="$"?"$":"(?="+a+")"):(i||(l+="(?:"+o+"(?="+a+"))?"),h||(l+="(?="+o+"|"+a+")")),new RegExp(l,jt(t))}function Tt(r,e,t){return r instanceof RegExp?hn(r,e):Array.isArray(r)?dn(r,e,t):un(r,e,t)}V.parse=rn;V.compile=nn;V.tokensToFunction=sn;V.tokensToRegExp=on;const{hasOwnProperty:pn}=Object.prototype,Le=new Map;Le.set("|false",{keys:[],pattern:/(?:)/});function at(r){try{return decodeURIComponent(r)}catch{return r}}function fn(r,e,t,i,n){t=!!t;const s=`${r}|${t}`;let o=Le.get(s);if(!o){const l=[];o={keys:l,pattern:V(r,l,{end:t,strict:r===""})},Le.set(s,o)}const c=o.pattern.exec(e);if(!c)return null;const a=Object.assign({},n);for(let l=1;l<c.length;l++){const h=o.keys[l-1],d=h.name,u=c[l];(u!==void 0||!pn.call(a,d))&&(h.repeat?a[d]=u?u.split(h.delimiter).map(at):[]:a[d]=u&&at(u))}return{path:c[0],keys:(i||[]).concat(o.keys),params:a}}function Dt(r,e,t,i,n){let s,o,c=0,a=r.path||"";return a.charAt(0)==="/"&&(t&&(a=a.substr(1)),t=!0),{next(l){if(r===l)return{done:!0};const h=r.__children=r.__children||r.children;if(!s&&(s=fn(a,e,!h,i,n),s))return{done:!1,value:{route:r,keys:s.keys,params:s.params,path:s.path}};if(s&&h)for(;c<h.length;){if(!o){const u=h[c];u.parent=r;let p=s.path.length;p>0&&e.charAt(p)==="/"&&(p+=1),o=Dt(u,e.substr(p),t,s.keys,s.params)}const d=o.next(l);if(!d.done)return{done:!1,value:d.value};o=null,c++}return{done:!0}}}}function gn(r){if(L(r.route.action))return r.route.action(r)}function mn(r,e){let t=e;for(;t;)if(t=t.parent,t===r)return!0;return!1}function _n(r){let e=`Path '${r.pathname}' is not properly resolved due to an error.`;const t=(r.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function vn(r,e){const{route:t,path:i}=e;if(t&&!t.__synthetic){const n={path:i,route:t};if(!r.chain)r.chain=[];else if(t.parent){let s=r.chain.length;for(;s--&&r.chain[s].route&&r.chain[s].route!==t.parent;)r.chain.pop()}r.chain.push(n)}}class Z{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||gn,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){nt(e);const t=[...de(e)];this.root.__children=t}addRoutes(e){return nt(e),this.root.__children.push(...de(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,$(e)?{pathname:e}:e),i=Dt(this.root,this.__normalizePathname(t.pathname),this.baseUrl),n=this.resolveRoute;let s=null,o=null,c=t;function a(l,h=s.value.route,d){const u=d===null&&s.value.route;return s=o||i.next(u),o=null,!l&&(s.done||!mn(h,s.value.route))?(o=s,Promise.resolve(N)):s.done?Promise.reject(Ot(t)):(c=Object.assign(c?{chain:c.chain?c.chain.slice(0):[]}:{},t,s.value),vn(c,s.value),Promise.resolve(n(c)).then(p=>p!=null&&p!==N?(c.result=p.result||p,c):a(l,h,p)))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(l=>{const h=_n(c);if(l?console.warn(h):l=new Error(h),l.context=l.context||c,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return c.result=this.errorHandler(l),c;throw l})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,i=this.constructor.__createUrl(e,t).href;if(i.slice(0,t.length)===t)return i.slice(t.length)}}Z.pathToRegexp=V;const{pathToRegexp:lt}=Z,ct=new Map;function Lt(r,e,t){const i=e.name||e.component;if(i&&(r.has(i)?r.get(i).push(e):r.set(i,[e])),Array.isArray(t))for(let n=0;n<t.length;n++){const s=t[n];s.parent=e,Lt(r,s,s.__children||s.children)}}function ht(r,e){const t=r.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function dt(r){let e=r.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function bn(r,e={}){if(!(r instanceof Z))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(i,n)=>{let s=ht(t,i);if(!s&&(t.clear(),Lt(t,r.root,r.root.__children),s=ht(t,i),!s))throw new Error(`Route "${i}" not found`);let o=ct.get(s.fullPath);if(!o){let a=dt(s),l=s.parent;for(;l;){const p=dt(l);p&&(a=p.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),l=l.parent}const h=lt.parse(a),d=lt.tokensToFunction(h),u=Object.create(null);for(let p=0;p<h.length;p++)$(h[p])||(u[h[p].name]=!0);o={toPath:d,keys:u},ct.set(a,o),s.fullPath=a}let c=o.toPath(n,e)||"/";if(e.stringifyQueryParams&&n){const a={},l=Object.keys(n);for(let d=0;d<l.length;d++){const u=l[d];o.keys[u]||(a[u]=n[u])}const h=e.stringifyQueryParams(a);h&&(c+=h.charAt(0)==="?"?h:`?${h}`)}return c}}let ut=[];function yn(r){ut.forEach(e=>e.inactivate()),r.forEach(e=>e.activate()),ut=r}const $n=r=>{const e=getComputedStyle(r).getPropertyValue("animation-name");return e&&e!=="none"},wn=(r,e)=>{const t=()=>{r.removeEventListener("animationend",t),e()};r.addEventListener("animationend",t)};function pt(r,e){return r.classList.add(e),new Promise(t=>{if($n(r)){const i=r.getBoundingClientRect(),n=`height: ${i.bottom-i.top}px; width: ${i.right-i.left}px`;r.setAttribute("style",`position: absolute; ${n}`),wn(r,()=>{r.classList.remove(e),r.removeAttribute("style"),t()})}else r.classList.remove(e),t()})}const En=256;function Pe(r){return r!=null}function An(r){const e=Object.assign({},r);return delete e.next,e}function y({pathname:r="",search:e="",hash:t="",chain:i=[],params:n={},redirectFrom:s,resolver:o},c){const a=i.map(l=>l.route);return{baseUrl:o&&o.baseUrl||"",pathname:r,search:e,hash:t,routes:a,route:c||a.length&&a[a.length-1]||null,params:n,redirectFrom:s,getUrl:(l={})=>oe(C.pathToRegexp.compile(Mt(a))(Object.assign({},n,l)),o)}}function ft(r,e){const t=Object.assign({},r.params);return{redirect:{pathname:e,from:r.pathname,params:t}}}function Pn(r,e){e.location=y(r);const t=r.chain.map(i=>i.route).indexOf(r.route);return r.chain[t].element=e,e}function se(r,e,t){if(L(r))return r.apply(t,e)}function gt(r,e,t){return i=>{if(i&&(i.cancel||i.redirect))return i;if(t)return se(t[r],e,t)}}function xn(r,e){if(!Array.isArray(r)&&!fe(r))throw new Error(w(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${r}`));e.__children=[];const t=de(r);for(let i=0;i<t.length;i++)xt(t[i]),e.__children.push(t[i])}function ne(r){if(r&&r.length){const e=r[0].parentNode;for(let t=0;t<r.length;t++)e.removeChild(r[t])}}function oe(r,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(r.replace(/^\//,""),t).pathname:r}function Mt(r){return r.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class C extends Z{constructor(e,t){const i=document.head.querySelector("base"),n=i&&i.getAttribute("href");super([],Object.assign({baseUrl:n&&Z.__createUrl(n,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=o=>this.__resolveRoute(o);const s=C.NavigationTrigger;C.setTriggers.apply(C,Object.keys(s).map(o=>s[o])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=y({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let i=Promise.resolve();L(t.children)&&(i=i.then(()=>t.children(An(e))).then(s=>{!Pe(s)&&!L(t.children)&&(s=t.children),xn(s,t)}));const n={redirect:s=>ft(e,s),component:s=>{const o=document.createElement(s);return this.__createdByRouter.set(o,!0),o}};return i.then(()=>{if(this.__isLatestRender(e))return se(t.action,[e,n],t)}).then(s=>{if(Pe(s)&&(s instanceof HTMLElement||s.redirect||s===N))return s;if($(t.redirect))return n.redirect(t.redirect);if(t.bundle)return Qr(t.bundle).then(()=>{},()=>{throw new Error(w(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(s=>{if(Pe(s))return s;if($(t.component))return n.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const i=++this.__lastStartedRenderId,n=Object.assign({search:"",hash:""},$(e)?{pathname:e}:e,{__renderId:i});return this.ready=this.resolve(n).then(s=>this.__fullyResolveChain(s)).then(s=>{if(this.__isLatestRender(s)){const o=this.__previousContext;if(s===o)return this.__updateBrowserHistory(o,!0),this.location;if(this.location=y(s),t&&this.__updateBrowserHistory(s,i===1),q("location-changed",{router:this,location:this.location}),s.__skipAttach)return this.__copyUnchangedElements(s,o),this.__previousContext=s,this.location;this.__addAppearingContent(s,o);const c=this.__animateIfNeeded(s);return this.__runOnAfterEnterCallbacks(s),this.__runOnAfterLeaveCallbacks(s,o),c.then(()=>{if(this.__isLatestRender(s))return this.__removeDisappearingContent(),this.__previousContext=s,this.location})}}).catch(s=>{if(i===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(n),ne(this.__outlet&&this.__outlet.children),this.location=y(Object.assign(n,{resolver:this})),q("error",Object.assign({router:this,error:s},n)),s}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(i=>{const s=i!==t?i:e,c=oe(Mt(i.chain),i.resolver)===i.pathname,a=(l,h=l.route,d)=>l.next(void 0,h,d).then(u=>u===null||u===N?c?l:h.parent!==null?a(l,h.parent,u):u:u);return a(i).then(l=>{if(l===null||l===N)throw Ot(s);return l&&l!==N&&l!==i?this.__fullyResolveChain(s,l):this.__amendWithOnBeforeCallbacks(i)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(Pn(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(i=>this.__findComponentContextAfterAllRedirects(i)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(w(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${Xr(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},i=t.chain||[],n=e.chain;let s=Promise.resolve();const o=()=>({cancel:!0}),c=a=>ft(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,i.length){for(let a=0;a<Math.min(i.length,n.length)&&!(i[a].route!==n[a].route||i[a].path!==n[a].path&&i[a].element!==n[a].element||!this.__isReusableElement(i[a].element,n[a].element));a=++e.__divergedChainIndex);if(e.__skipAttach=n.length===i.length&&e.__divergedChainIndex==n.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let a=n.length-1;a>=0;a--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:o},i[a]);for(let a=0;a<n.length;a++)s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:o,redirect:c},n[a]),i[a].element.location=y(e,i[a].route)}else for(let a=i.length-1;a>=e.__divergedChainIndex;a--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:o},i[a])}if(!e.__skipAttach)for(let a=0;a<n.length;a++)a<e.__divergedChainIndex?a<i.length&&i[a].element&&(i[a].element.location=y(e,i[a].route)):(s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:o,redirect:c},n[a]),n[a].element&&(n[a].element.location=y(e,n[a].route)));return s.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,i,n){const s=y(t);return e.then(o=>{if(this.__isLatestRender(t))return gt("onBeforeLeave",[s,i,this],n.element)(o)}).then(o=>{if(!(o||{}).redirect)return o})}__runOnBeforeEnterCallbacks(e,t,i,n){const s=y(t,n.route);return e.then(o=>{if(this.__isLatestRender(t))return gt("onBeforeEnter",[s,i,this],n.element)(o)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,i){if(t>En)throw new Error(w(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:i})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(w(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:i=""},n){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==i){const s=n?"replaceState":"pushState";window.history[s](null,document.title,e+t+i),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let i=this.__outlet;for(let n=0;n<e.__divergedChainIndex;n++){const s=t&&t.chain[n].element;if(s)if(s.parentNode===i)e.chain[n].element=s,i=s;else break}return i}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const i=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(i.children).filter(s=>this.__addedByRouter.get(s)&&s!==e.result);let n=i;for(let s=e.__divergedChainIndex;s<e.chain.length;s++){const o=e.chain[s].element;o&&(n.appendChild(o),this.__addedByRouter.set(o,!0),n===i&&this.__appearingContent.push(o),n=o)}}__removeDisappearingContent(){this.__disappearingContent&&ne(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(ne(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let i=t.chain.length-1;i>=e.__divergedChainIndex&&this.__isLatestRender(e);i--){const n=t.chain[i].element;if(n)try{const s=y(e);se(n.onAfterLeave,[s,{},t.resolver],n)}finally{this.__disappearingContent.indexOf(n)>-1&&ne(n.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const i=e.chain[t].element||{},n=y(e,e.chain[t].route);se(i.onAfterEnter,[n,{},e.resolver],i)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],i=(this.__appearingContent||[])[0],n=[],s=e.chain;let o;for(let c=s.length;c>0;c--)if(s[c-1].route.animate){o=s[c-1].route.animate;break}if(t&&i&&o){const c=fe(o)&&o.leave||"leaving",a=fe(o)&&o.enter||"entering";n.push(pt(t,c)),n.push(pt(i,a))}return Promise.all(n).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:i,hash:n}=e?e.detail:window.location;$(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:i,hash:n},!0))}static setTriggers(...e){yn(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=bn(this)),oe(this.__urlForName(e,t),this)}urlForPath(e,t){return oe(C.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:i,hash:n}=$(e)?this.__createUrl(e,"http://a"):e;return q("go",{pathname:t,search:i,hash:n})}}const On=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,ae=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Cn(){function r(){return!0}return Nt(r)}function Sn(){try{return Rn()?!0:jn()?ae?!Un():!Cn():!1}catch{return!1}}function Rn(){return localStorage.getItem("vaadin.developmentmode.force")}function jn(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Un(){return!!(ae&&Object.keys(ae).map(e=>ae[e]).filter(e=>e.productionMode).length>0)}function Nt(r,e){if(typeof r!="function")return;const t=On.exec(r.toString());if(t)try{r=new Function(t[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return r(e)}window.Vaadin=window.Vaadin||{};const mt=function(r,e){if(window.Vaadin.developmentMode)return Nt(r,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Sn());function Tn(){}const Dn=function(){if(typeof mt=="function")return mt(Tn)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});Dn();C.NavigationTrigger={POPSTATE:tn,CLICK:Zr};var Ln=Object.defineProperty,Mn=Object.getOwnPropertyDescriptor,It=(r,e,t,i)=>{for(var n=i>1?void 0:i?Mn(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Ln(e,t,n),n};let Me=class extends g{constructor(){super(...arguments),this.router=new C(this),this.routes=[]}connectedCallback(){super.connectedCallback(),this.router.setRoutes(this.routes),console.log("Router:",this.routes)}render(){return _`<slot></slot>`}};It([b({attribute:!1})],Me.prototype,"routes",2);Me=It([v("vaadin-router")],Me);var Nn=Object.defineProperty,In=Object.getOwnPropertyDescriptor,Hn=(r,e,t,i)=>{for(var n=i>1?void 0:i?In(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&Nn(e,t,n),n};let Ne=class extends g{render(){return _`
        <app-header></app-header>
        <vaadin-router .routes=${Nr}/src</vaadin-router>
    `}};Ne.styles=[f(A),f(P),f(te)];Ne=Hn([v("sheetshare-app")],Ne);
