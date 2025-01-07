import{v as L,d as Ce,m as K,u as Ee,r as p,w as V,o as N,a as Ie,b as _e,c as _,e as O,f as Te,g as T,h as Pe,s as C,i as Se,t as je,_ as Ke,j as Ve,k as g,l as Le,n as Ne,p as Oe}from"./index-COTIhOnO.js";/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 *//**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function De(e,{timeOutAfter:t=500,retryAfter:n=100}={}){return new Promise((o,r)=>{const s=Date.now();let i=null;const a=setTimeout(()=>{r(i??new Error("Timeout"))},t),l=async()=>{try{const m=await e();clearTimeout(a),o(m)}catch(m){i=m,Date.now()-s>t?r(m):setTimeout(l,n)}};l()})}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */const y=new Map;function D(e,{attributes:t}={}){if(y.has(e))return y.get(e);const n=document.querySelector(`script[src="${e}"]`);n&&(console.warn(`Script with "${e}" src is already present in DOM!`),n.remove());const o=new Promise((r,s)=>{const i=document.createElement("script");i.onerror=s,i.onload=()=>{r()};for(const[l,m]of Object.entries(t||{}))i.setAttribute(l,m);i.setAttribute("data-injected-by","ckeditor-integration"),i.type="text/javascript",i.async=!0,i.src=e,document.head.appendChild(i);const a=new MutationObserver(l=>{l.flatMap(f=>Array.from(f.removedNodes)).includes(i)&&(y.delete(e),a.disconnect())});a.observe(document.head,{childList:!0,subtree:!0})});return y.set(e,o),o}async function B(e,t){await Promise.all(e.map(n=>D(n,t)))}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */const v=new Map;function Be({href:e,placementInHead:t="start",attributes:n={}}){if(v.has(e))return v.get(e);const o=document.querySelector(`link[href="${e}"][rel="stylesheet"]`);o&&(console.warn(`Stylesheet with "${e}" href is already present in DOM!`),o.remove());const r=i=>{const a=Array.from(document.head.querySelectorAll('link[data-injected-by="ckeditor-integration"]'));switch(t){case"start":a.length?a.slice(-1)[0].after(i):document.head.insertBefore(i,document.head.firstChild);break;case"end":document.head.appendChild(i);break}},s=new Promise((i,a)=>{const l=document.createElement("link");for(const[f,c]of Object.entries(n||{}))l.setAttribute(f,c);l.setAttribute("data-injected-by","ckeditor-integration"),l.rel="stylesheet",l.href=e,l.onerror=a,l.onload=()=>{i()},r(l);const m=new MutationObserver(f=>{f.flatMap(u=>Array.from(u.removedNodes)).includes(l)&&(v.delete(e),m.disconnect())});m.observe(document.head,{childList:!0,subtree:!0})});return v.set(e,s),s}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function Re(e,{attributes:t}={}){if(document.head.querySelector(`link[href="${e}"][rel="preload"]`))return;const n=document.createElement("link");for(const[o,r]of Object.entries(t||{}))n.setAttribute(o,r);n.setAttribute("data-injected-by","ckeditor-integration"),n.rel="preload",n.as=xe(e),n.href=e,document.head.insertBefore(n,document.head.firstChild)}function xe(e){switch(!0){case/\.css$/.test(e):return"style";case/\.js$/.test(e):return"script";default:return"fetch"}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */const d=new Array(256).fill("").map((e,t)=>("0"+t.toString(16)).slice(-2));function Ae(){const[e,t,n,o]=crypto.getRandomValues(new Uint32Array(4));return"e"+d[e>>0&255]+d[e>>8&255]+d[e>>16&255]+d[e>>24&255]+d[t>>0&255]+d[t>>8&255]+d[t>>16&255]+d[t>>24&255]+d[n>>0&255]+d[n>>8&255]+d[n>>16&255]+d[n>>24&255]+d[o>>0&255]+d[o>>8&255]+d[o>>16&255]+d[o>>24&255]}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function E(e){return Array.from(new Set(e))}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */async function k(e,t){const n=()=>e.map(o=>window[o]).filter(Boolean)[0];return De(()=>{const o=n();if(!o)throw new Error(`Window entry "${e.join(",")}" not found.`);return o},t)}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function $e(e,t){const n=Object.entries(e).filter(([o,r])=>t(r,o));return Object.fromEntries(n)}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function We(e){return $e(e,t=>t!=null)}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function R(e,t){const n=Object.entries(e).map(([o,r])=>[o,t(r,o)]);return Object.fromEntries(n)}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function P(e,t){return t.filter(n=>!e.includes(n))}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function Me(e,t){const n=e.extraPlugins||[];return{...e,extraPlugins:[...n,...t.filter(o=>!n.includes(o))]}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function S(e){return!!e&&/^\d+\.\d+\.\d+/.test(e)}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function w(e){return e?["nightly","alpha","internal"].some(t=>e.includes(t)):!1}function Ue(e){return S(e)||w(e)}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function x(e){if(!S(e))throw new Error(`Invalid semantic version: ${e||"<blank>"}.`);const[t,n,o]=e.split(".");return{major:Number.parseInt(t,10),minor:Number.parseInt(n,10),patch:Number.parseInt(o,10)}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function A(e){if(w(e))return 3;const{major:t}=x(e);switch(!0){case t>=44:return 3;case t>=38:return 2;default:return 1}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function $(){const{CKEDITOR_VERSION:e,CKEDITOR:t}=window;return Ue(e)?{source:t?"cdn":"npm",version:e}:null}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function ze(){const e=$();return e?A(e.version):null}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function W(e,t){switch(t||(t=ze()||void 0),t){case 1:case 2:return e===void 0;case 3:return e==="GPL";default:return!1}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function He(e,t){return function(o){W(o.config.get("licenseKey"))||o.on("collectUsageData",(r,{setUsageData:s})=>{s(`integration.${e}`,t)})}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */const Fe="https://cdn.ckeditor.com";function M(e,t,n){return`${Fe}/${e}/${n}/${t}`}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */const Ge="https://cdn.ckbox.io";function Je(e,t,n){return`${Ge}/${e}/${n}/${t}`}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */const Ye="https://ckeditor.com/docs/ckeditor5";function Ze(e,t="latest"){return`${Ye}/${t}/${e}`}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function Qe({version:e,translations:t,createCustomCdnUrl:n=M}){const o={scripts:[n("ckeditor5","ckeditor5.umd.js",e),...P(["en"],t||[]).map(r=>n("ckeditor5",`translations/${r}.umd.js`,e))],stylesheets:[n("ckeditor5","ckeditor5.css",e)]};return{preload:[...o.stylesheets,...o.scripts],scripts:[async r=>B(o.scripts,r)],stylesheets:o.stylesheets,checkPluginLoaded:async()=>k(["CKEDITOR"]),beforeInject:()=>{const r=$();switch(r==null?void 0:r.source){case"npm":throw new Error("CKEditor 5 is already loaded from npm. Check the migration guide for more details: "+Ze("updating/migration-to-cdn/vanilla-js.html"));case"cdn":if(r.version!==e)throw new Error(`CKEditor 5 is already loaded from CDN in version ${r.version}. Remove the old <script> and <link> tags loading CKEditor 5 to allow loading the ${e} version.`);break}}}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function qe({version:e,translations:t,createCustomCdnUrl:n=M}){const o={scripts:[n("ckeditor5-premium-features","ckeditor5-premium-features.umd.js",e),...P(["en"],t||[]).map(r=>n("ckeditor5-premium-features",`translations/${r}.umd.js`,e))],stylesheets:[n("ckeditor5-premium-features","ckeditor5-premium-features.css",e)]};return{preload:[...o.stylesheets,...o.scripts],scripts:[async r=>B(o.scripts,r)],stylesheets:o.stylesheets,checkPluginLoaded:async()=>k(["CKEDITOR_PREMIUM_FEATURES"])}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */async function Xe(e){let{htmlAttributes:t={},scripts:n=[],stylesheets:o=[],preload:r,beforeInject:s,checkPluginLoaded:i}=j(e);s==null||s(),r||(r=E([...o.filter(a=>typeof a=="string"),...n.filter(a=>typeof a=="string")]));for(const a of r)Re(a,{attributes:t});await Promise.all(E(o).map(a=>Be({href:a,attributes:t,placementInHead:"start"})));for(const a of E(n)){const l={attributes:t};typeof a=="string"?await D(a,l):await a(l)}return i==null?void 0:i()}function j(e){return Array.isArray(e)?{scripts:e.filter(t=>typeof t=="function"||t.endsWith(".js")),stylesheets:e.filter(t=>t.endsWith(".css"))}:typeof e=="function"?{checkPluginLoaded:e}:e}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function U(e){const t=R(We(e),j);return{...Object.values(t).reduce((s,i)=>(s.scripts.push(...i.scripts??[]),s.stylesheets.push(...i.stylesheets??[]),s.preload.push(...i.preload??[]),s),{preload:[],scripts:[],stylesheets:[]}),beforeInject:()=>{var s;for(const i of Object.values(t))(s=i.beforeInject)==null||s.call(i)},checkPluginLoaded:async()=>{var i;const s=Object.create(null);for(const[a,l]of Object.entries(t))s[a]=await((i=l==null?void 0:l.checkPluginLoaded)==null?void 0:i.call(l));return s}}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function et(){var t;const e=(t=window.CKBox)==null?void 0:t.version;return S(e)?{source:"cdn",version:e}:null}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function tt({version:e,theme:t="lark",translations:n,createCustomCdnUrl:o=Je}){return{scripts:[o("ckbox","ckbox.js",e),...P(["en"],n||[]).map(r=>o("ckbox",`translations/${r}.js`,e))],...t&&{stylesheets:[o("ckbox",`styles/themes/${t}.css`,e)]},checkPluginLoaded:async()=>k(["CKBox"]),beforeInject:()=>{const r=et();if(r&&r.version!==e)throw new Error(`CKBox is already loaded from CDN in version ${r.version}. Remove the old <script> and <link> tags loading CKBox to allow loading the ${e} version.`)}}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function nt(e){if(w(e))return!0;const{major:t}=x(e);switch(A(e)){case 3:return!0;default:return t===43}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function ot(e){const t=R(e,(n,o)=>{if(!n)return;const r=j(n);return{checkPluginLoaded:async()=>k([o]),...r}});return U(t)}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function rt(e){const{version:t,translations:n,plugins:o,premium:r,ckbox:s,createCustomCdnUrl:i,injectedHtmlElementsAttributes:a={crossorigin:"anonymous"}}=e;it(t);const l=U({CKEditor:Qe({version:t,translations:n,createCustomCdnUrl:i}),...r&&{CKEditorPremiumFeatures:qe({version:t,translations:n,createCustomCdnUrl:i})},...s&&{CKBox:tt(s)},loadedPlugins:ot(o??{})});return Xe({...l,htmlAttributes:a})}function it(e){if(w(e)&&console.warn("You are using a testing version of CKEditor 5. Please remember that it is not suitable for production environments."),!nt(e))throw new Error(`The CKEditor 5 CDN can't be used with the given editor version: ${e}. Please make sure you are using at least the CKEditor 5 version 44.`)}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */const at=He("vue",{version:"7.3.0",frameworkVersion:L});/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function st(e){return W(e.licenseKey)?e:Me(e,[at])}const I="Lock from Vue integration (@ckeditor/ckeditor5-vue)",lt=300,ct=Ce({name:"CKEditor",__name:"ckeditor",props:K({editor:{},config:{default:()=>({})},tagName:{default:"div"},disabled:{type:Boolean,default:!1},disableTwoWayDataBinding:{type:Boolean,default:!1}},{modelValue:{type:String,default:""},modelModifiers:{}}),emits:K(["ready","destroy","blur","focus","input","update:modelValue"],["update:modelValue"]),setup(e,{expose:t,emit:n}){const o=Ee(e,"modelValue"),r=e,s=n,i=p(),a=p(),l=p();t({instance:a,lastEditorData:l}),V(o,c=>{a.value&&c!==l.value&&a.value.data.set(c)}),V(()=>r.disabled,c=>{c?a.value.enableReadOnlyMode(I):a.value.disableReadOnlyMode(I)});function m(){const c=window.CKEDITOR_VERSION;if(!c)return console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.');const[u]=c.split(".").map(Number);u>=42||c.startsWith("0.0.0")||console.warn("The <CKEditor> component requires using CKEditor 5 in version 42+ or nightly build.")}function f(c){const u=Se(h=>{if(r.disableTwoWayDataBinding)return;const b=l.value=c.data.get();s("update:modelValue",b,h,c),s("input",b,h,c)},lt,{leading:!0});c.model.document.on("change:data",u),c.editing.view.document.on("focus",h=>{s("focus",h,c)}),c.editing.view.document.on("blur",h=>{s("blur",h,c)})}return m(),N(()=>{const c=st(Object.assign({},r.config));o.value&&(c.initialData=o.value),r.editor.create(i.value,c).then(u=>{a.value=Ie(u),f(u),o.value!==c.initialData&&u.data.set(o.value),r.disabled&&u.enableReadOnlyMode(I),s("ready",u)}).catch(u=>{console.error(u)})}),_e(()=>{a.value&&(a.value.destroy(),a.value=void 0),s("destroy")}),(c,u)=>(_(),O(Te(c.tagName),{ref_key:"element",ref:i},null,512))}});/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */const ut=e=>{const t=p(null),n=p(null),o=p(null),r=T(()=>t.value!==null);return Pe(async()=>{const s=Ae();t.value=s,o.value=null,n.value=null;const i=()=>t.value!==s;try{const a=await e();i()||(o.value=a)}catch(a){i()||(n.value=a)}finally{i()||(t.value=null)}}),{loading:C(r),data:C(o),error:C(n)}};/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */function dt(e){return ut(()=>rt(je(e)))}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 *//* istanbul ignore if -- @preserve */if(!L.startsWith("3."))throw new Error("The CKEditor plugin works only with Vue 3+. For more information, please refer to https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v3.html");const mt={class:"write"},ft={class:"main-container"},ht={class:"editor-container editor-container_document-editor",ref:"editorContainerElement"},pt={class:"editor-container__toolbar",ref:"editorToolbarElement"},gt={class:"editor-container__editor-wrapper"},bt={class:"editor-container__editor"},yt={ref:"editorElement"},vt="eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3MzcxNTgzOTksImp0aSI6IjQ0ZWYxMjM0LWZlM2UtNDg5NS1hZTAxLWVkMzZlODcyY2UzNSIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6IjZkNmFmNGVhIn0.mdEBj-mvbKrIYKSHy5saENln1cP9SDYkT0Gudi8a-DMGGBvqixNCmhAAQmSNjs4OEgeTWSEk7GeQ6xcB7kRSaw",kt=Object.assign({name:"WriteView"},{__name:"index",setup(e){const t=Oe("editorToolbarElement"),n=dt({version:"44.1.0",translations:["zh-cn"]}),o=p(!1),r=T(()=>n.data.value?n.data.value.CKEditor.DecoupledEditor:null),s=T(()=>{if(!o.value||!n.data.value)return null;const{Alignment:a,AutoImage:l,AutoLink:m,Autosave:f,BalloonToolbar:c,Base64UploadAdapter:u,BlockQuote:h,Bold:b,Code:z,Essentials:H,FontBackgroundColor:F,FontColor:G,FontFamily:J,FontSize:Y,GeneralHtmlSupport:Z,Heading:Q,HorizontalLine:q,ImageBlock:X,ImageInline:ee,ImageInsert:te,ImageInsertViaUrl:ne,ImageResize:oe,ImageStyle:re,ImageToolbar:ie,ImageUpload:ae,Italic:se,Link:le,List:ce,Markdown:ue,Paragraph:de,PasteFromOffice:me,Strikethrough:fe,Table:he,TableCaption:pe,TableCellProperties:ge,TableColumnResize:be,TableProperties:ye,TableToolbar:ve,TodoList:ke,Underline:we}=n.data.value.CKEditor;return{toolbar:{items:["heading","|","fontSize","fontFamily","fontColor","fontBackgroundColor","|","bold","italic","underline","strikethrough","code","|","horizontalLine","link","insertImage","insertTable","blockQuote","|","alignment","|","bulletedList","numberedList","todoList"],shouldNotGroupWhenFull:!1},plugins:[a,l,m,f,c,u,h,b,z,H,F,G,J,Y,Z,Q,q,X,ee,te,ne,oe,re,ie,ae,se,le,ce,ue,de,me,fe,he,pe,ge,be,ye,ve,ke,we],balloonToolbar:["bold","italic","|","link","insertImage","|","bulletedList","numberedList"],fontFamily:{supportAllValues:!0},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0},heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:"Heading 3",class:"ck-heading_heading3"},{model:"heading4",view:"h4",title:"Heading 4",class:"ck-heading_heading4"},{model:"heading5",view:"h5",title:"Heading 5",class:"ck-heading_heading5"},{model:"heading6",view:"h6",title:"Heading 6",class:"ck-heading_heading6"}]},htmlSupport:{allow:[{name:/^.*$/,styles:!0,attributes:!0,classes:!0}]},image:{toolbar:["imageTextAlternative","|","imageStyle:inline","imageStyle:wrapText","imageStyle:breakText","|","resizeImage"]},initialData:`<h2>欢迎来看小高发文章🎉</h2>
<p>
	可以写下所有你想写的文章，大展你身手，当然，可能我做的编辑器并不符合你的心意，当这也是无法避免的。毕竟我是打算练习更多的领域所以引入富文本编辑器，望客观谅解哦
</p>
<h3>接下来有做什么？</h3>
<ol>
	<li>
		<strong>编辑好你的题目：</strong>起一个响亮点的名字
	</li>
	<li>
		<strong>开启你的创作之路：</strong>随意编辑
</p>
<h3>简单的介绍一下我</h3>
<ul>
	<li>📝 高广源 计算机专业，</li>
	<li>📕 全栈工程师，基本没有不会的，</li>
	<li>⭐️ <a href="https://github.com/ggy">GitHub</a> 我的github点击跳转，</li>
	<li>🏠 展示秘密，</li>
	<li>🧑‍💻 A18581897806@outlook.com 我的邮箱</li>
</ul>
<h3>我的技术栈(怕吓到你)</h3>
<p>
	我会Vue 2、Vue 3、router、vuex，Pinia、Less、Sass、React、HTML、CSS、JavaScript、es6+、ajax、Webpack、npm、pnpm、yarn、Node、Express、MongoDB、Apifox、Postman、antd、element-ui、vant、bootstrap、veevalidate、git husky eslint prettier、Ts、uniapp、echarts、Flutter、Web3、区块链技术、Svelte、Solid
</p>
`,language:"zh-cn",licenseKey:vt,link:{addTargetToExternalLinks:!0,defaultProtocol:"https://",decorators:{toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},placeholder:"请你尽情创作",table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties"]}}});N(()=>{o.value=!0});function i(a){[...t.value.children].forEach(l=>l.remove()),t.value.appendChild(a.ui.view.toolbar.element)}return(a,l)=>(_(),Ve("div",mt,[g("div",ft,[g("div",ht,[g("div",pt,null,512),g("div",gt,[g("div",bt,[g("div",yt,[r.value&&s.value?(_(),O(Le(ct),{key:0,modelValue:s.value.initialData,editor:r.value,config:s.value,onReady:i},null,8,["modelValue","editor","config"])):Ne("",!0)],512)])])],512)])]))}}),Ct=Ke(kt,[["__scopeId","data-v-771314a8"]]);export{Ct as default};
