import{z as ke,aV as W,bH as Ce,B as fe,d as M,b$ as ye,cv as je,cw as Te,H as Ie,J as ze,bt as Oe,r as k,cx as Me,bO as Pe,i as y,O as me,av as $e,f as Le,o as m,q as ge,w as i,b as t,be as Be,a as e,R as b,u as o,n as xe,bz as Re,a0 as Ve,X as N,s as E,bL as De,c as _,F as V,cy as Fe,aQ as He,cz as Xe,bM as Ye,bo as Ke,cA as Qe,cB as Ge,g as Se,Q as Je,aO as We,T as ce,bB as Ze,a1 as Ee,cC as ve,bX as B,aK as R,cD as qe,a6 as Ne,cE as Ue,cF as et,cG as tt,ay as J,ao as st,t as at,bA as we,aE as ot,a3 as nt,cH as lt,cI as it,cJ as rt,p as O,h as Z,cK as ct,E as he,_ as D,cL as dt,aU as ut}from"./index-BKUr9z90.js";const pt=ke({urlList:{type:W(Array),default:()=>Ce([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:W(String)}}),vt={close:()=>!0,switch:v=>fe(v),rotate:v=>fe(v)},ft=M({name:"ElImageViewer"}),mt=M({...ft,props:pt,emits:vt,setup(v,{expose:a,emit:r}){var l;const c=v,d={CONTAIN:{name:"contain",icon:ye(je)},ORIGINAL:{name:"original",icon:ye(Te)}},{t:A}=Ie(),u=ze("image-viewer"),{nextZIndex:F}=Oe(),I=k(),z=k([]),j=Me(),$=k(!0),x=k(c.initialIndex),w=Pe(d.CONTAIN),f=k({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),H=k((l=c.zIndex)!=null?l:F()),X=y(()=>{const{urlList:n}=c;return n.length<=1}),q=y(()=>x.value===0),U=y(()=>x.value===c.urlList.length-1),Y=y(()=>c.urlList[x.value]),de=y(()=>[u.e("btn"),u.e("prev"),u.is("disabled",!c.infinite&&q.value)]),ee=y(()=>[u.e("btn"),u.e("next"),u.is("disabled",!c.infinite&&U.value)]),K=y(()=>{const{scale:n,deg:h,offsetX:p,offsetY:C,enableTransition:L}=f.value;let S=p/n,T=C/n;const G=h*Math.PI/180,_e=Math.cos(G),be=Math.sin(G);S=S*_e+T*be,T=T*_e-p/n*be;const pe={transform:`scale(${n}) rotate(${h}deg) translate(${S}px, ${T}px)`,transition:L?"transform .3s":""};return w.value.name===d.CONTAIN.name&&(pe.maxWidth=pe.maxHeight="100%"),pe});function P(){te(),r("close")}function ue(){const n=ve(p=>{switch(p.code){case B.esc:c.closeOnPressEscape&&P();break;case B.space:le();break;case B.left:ie();break;case B.up:g("zoomIn");break;case B.right:s();break;case B.down:g("zoomOut");break}}),h=ve(p=>{const C=p.deltaY||p.deltaX;g(C<0?"zoomIn":"zoomOut",{zoomRate:c.zoomRate,enableTransition:!1})});j.run(()=>{R(document,"keydown",n),R(document,"wheel",h)})}function te(){j.stop()}function se(){$.value=!1}function ae(n){$.value=!1,n.target.alt=A("el.image.error")}function oe(n){if($.value||n.button!==0||!I.value)return;f.value.enableTransition=!1;const{offsetX:h,offsetY:p}=f.value,C=n.pageX,L=n.pageY,S=ve(G=>{f.value={...f.value,offsetX:h+G.pageX-C,offsetY:p+G.pageY-L}}),T=R(document,"mousemove",S);R(document,"mouseup",()=>{T()}),n.preventDefault()}function ne(){f.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function le(){if($.value)return;const n=qe(d),h=Object.values(d),p=w.value.name,L=(h.findIndex(S=>S.name===p)+1)%n.length;w.value=d[n[L]],ne()}function Q(n){const h=c.urlList.length;x.value=(n+h)%h}function ie(){q.value&&!c.infinite||Q(x.value-1)}function s(){U.value&&!c.infinite||Q(x.value+1)}function g(n,h={}){if($.value)return;const{minScale:p,maxScale:C}=c,{zoomRate:L,rotateDeg:S,enableTransition:T}={zoomRate:c.zoomRate,rotateDeg:90,enableTransition:!0,...h};switch(n){case"zoomOut":f.value.scale>p&&(f.value.scale=Number.parseFloat((f.value.scale/L).toFixed(3)));break;case"zoomIn":f.value.scale<C&&(f.value.scale=Number.parseFloat((f.value.scale*L).toFixed(3)));break;case"clockwise":f.value.deg+=S,r("rotate",f.value.deg);break;case"anticlockwise":f.value.deg-=S,r("rotate",f.value.deg);break}f.value.enableTransition=T}function re(n){var h;((h=n.detail)==null?void 0:h.focusReason)==="pointer"&&n.preventDefault()}function Ae(){c.closeOnPressEscape&&P()}return me(Y,()=>{$e(()=>{const n=z.value[0];n!=null&&n.complete||($.value=!0)})}),me(x,n=>{ne(),r("switch",n)}),Le(()=>{ue()}),a({setActiveItem:Q}),(n,h)=>(m(),ge(o(Ze),{to:"body",disabled:!n.teleported},{default:i(()=>[t(Be,{name:"viewer-fade",appear:""},{default:i(()=>[e("div",{ref_key:"wrapper",ref:I,tabindex:-1,class:b(o(u).e("wrapper")),style:xe({zIndex:H.value})},[t(o(Re),{loop:"",trapped:"","focus-trap-el":I.value,"focus-start-el":"container",onFocusoutPrevented:re,onReleaseRequested:Ae},{default:i(()=>[e("div",{class:b(o(u).e("mask")),onClick:Ve(p=>n.hideOnClickModal&&P(),["self"])},null,10,["onClick"]),N(" CLOSE "),e("span",{class:b([o(u).e("btn"),o(u).e("close")]),onClick:P},[t(o(E),null,{default:i(()=>[t(o(De))]),_:1})],2),N(" ARROW "),o(X)?N("v-if",!0):(m(),_(V,{key:0},[e("span",{class:b(o(de)),onClick:ie},[t(o(E),null,{default:i(()=>[t(o(Fe))]),_:1})],2),e("span",{class:b(o(ee)),onClick:s},[t(o(E),null,{default:i(()=>[t(o(He))]),_:1})],2)],64)),N(" ACTIONS "),e("div",{class:b([o(u).e("btn"),o(u).e("actions")])},[e("div",{class:b(o(u).e("actions__inner"))},[t(o(E),{onClick:p=>g("zoomOut")},{default:i(()=>[t(o(Xe))]),_:1},8,["onClick"]),t(o(E),{onClick:p=>g("zoomIn")},{default:i(()=>[t(o(Ye))]),_:1},8,["onClick"]),e("i",{class:b(o(u).e("actions__divider"))},null,2),t(o(E),{onClick:le},{default:i(()=>[(m(),ge(Ke(o(w).icon)))]),_:1}),e("i",{class:b(o(u).e("actions__divider"))},null,2),t(o(E),{onClick:p=>g("anticlockwise")},{default:i(()=>[t(o(Qe))]),_:1},8,["onClick"]),t(o(E),{onClick:p=>g("clockwise")},{default:i(()=>[t(o(Ge))]),_:1},8,["onClick"])],2)],2),N(" CANVAS "),e("div",{class:b(o(u).e("canvas"))},[(m(!0),_(V,null,Se(n.urlList,(p,C)=>Je((m(),_("img",{ref_for:!0,ref:L=>z.value[C]=L,key:p,src:p,style:xe(o(K)),class:b(o(u).e("img")),crossorigin:n.crossorigin,onLoad:se,onError:ae,onMousedown:oe},null,46,["src","crossorigin"])),[[We,C===x.value]])),128))],2),ce(n.$slots,"default")]),_:3},8,["focus-trap-el"])],6)]),_:3})]),_:3},8,["disabled"]))}});var gt=Ee(mt,[["__file","image-viewer.vue"]]);const ht=Ne(gt),_t=ke({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:W([String,Object])},previewSrcList:{type:W(Array),default:()=>Ce([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:W(String)}}),bt={load:v=>v instanceof Event,error:v=>v instanceof Event,switch:v=>fe(v),close:()=>!0,show:()=>!0},yt=M({name:"ElImage",inheritAttrs:!1}),xt=M({...yt,props:_t,emits:bt,setup(v,{emit:a}){const r=v;let l="";const{t:c}=Ie(),d=ze("image"),A=Ue(),u=y(()=>et(Object.entries(A).filter(([s])=>/^(data-|on[A-Z])/i.test(s)||["id","style"].includes(s)))),F=tt({excludeListeners:!0,excludeKeys:y(()=>Object.keys(u.value))}),I=k(),z=k(!1),j=k(!0),$=k(!1),x=k(),w=k(),f=J&&"loading"in HTMLImageElement.prototype;let H,X;const q=y(()=>[d.e("inner"),Y.value&&d.e("preview"),j.value&&d.is("loading")]),U=y(()=>{const{fit:s}=r;return J&&s?{objectFit:s}:{}}),Y=y(()=>{const{previewSrcList:s}=r;return st(s)&&s.length>0}),de=y(()=>{const{previewSrcList:s,initialIndex:g}=r;let re=g;return g>s.length-1&&(re=0),re}),ee=y(()=>r.loading==="eager"?!1:!f&&r.loading==="lazy"||r.lazy),K=()=>{J&&(j.value=!0,z.value=!1,I.value=r.src)};function P(s){j.value=!1,z.value=!1,a("load",s)}function ue(s){j.value=!1,z.value=!0,a("error",s)}function te(){it(x.value,w.value)&&(K(),oe())}const se=rt(te,200,!0);async function ae(){var s;if(!J)return;await $e();const{scrollContainer:g}=r;ot(g)?w.value=g:nt(g)&&g!==""?w.value=(s=document.querySelector(g))!=null?s:void 0:x.value&&(w.value=lt(x.value)),w.value&&(H=R(w,"scroll",se),setTimeout(()=>te(),100))}function oe(){!J||!w.value||!se||(H==null||H(),w.value=void 0)}function ne(s){if(s.ctrlKey){if(s.deltaY<0)return s.preventDefault(),!1;if(s.deltaY>0)return s.preventDefault(),!1}}function le(){Y.value&&(X=R("wheel",ne,{passive:!1}),l=document.body.style.overflow,document.body.style.overflow="hidden",$.value=!0,a("show"))}function Q(){X==null||X(),document.body.style.overflow=l,$.value=!1,a("close")}function ie(s){a("switch",s)}return me(()=>r.src,()=>{ee.value?(j.value=!0,z.value=!1,oe(),ae()):K()}),Le(()=>{ee.value?ae():K()}),(s,g)=>(m(),_("div",we({ref_key:"container",ref:x},o(u),{class:[o(d).b(),s.$attrs.class]}),[z.value?ce(s.$slots,"error",{key:0},()=>[e("div",{class:b(o(d).e("error"))},at(o(c)("el.image.error")),3)]):(m(),_(V,{key:1},[I.value!==void 0?(m(),_("img",we({key:0},o(F),{src:I.value,loading:s.loading,style:o(U),class:o(q),crossorigin:s.crossorigin,onClick:le,onLoad:P,onError:ue}),null,16,["src","loading","crossorigin"])):N("v-if",!0),j.value?(m(),_("div",{key:1,class:b(o(d).e("wrapper"))},[ce(s.$slots,"placeholder",{},()=>[e("div",{class:b(o(d).e("placeholder"))},null,2)])],2)):N("v-if",!0)],64)),o(Y)?(m(),_(V,{key:2},[$.value?(m(),ge(o(ht),{key:0,"z-index":s.zIndex,"initial-index":o(de),infinite:s.infinite,"zoom-rate":s.zoomRate,"min-scale":s.minScale,"max-scale":s.maxScale,"url-list":s.previewSrcList,crossorigin:s.crossorigin,"hide-on-click-modal":s.hideOnClickModal,teleported:s.previewTeleported,"close-on-press-escape":s.closeOnPressEscape,onClose:Q,onSwitch:ie},{default:i(()=>[s.$slots.viewer?(m(),_("div",{key:0},[ce(s.$slots,"viewer")])):N("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","min-scale","max-scale","url-list","crossorigin","hide-on-click-modal","teleported","close-on-press-escape"])):N("v-if",!0)],64)):N("v-if",!0)],16))}});var wt=Ee(xt,[["__file","image.vue"]]);const kt=Ne(wt),Ct="/assets/developer-img-B1ZyiEek.png",It={class:"about center"},zt={class:"about-title"},$t={class:"link"},Lt=M({__name:"AboutMy",setup(v){const a=r=>{window.open(r,"_blank")};return(r,l)=>{const c=O("Avatar"),d=E,A=he;return m(),_("div",It,[e("div",zt,[l[3]||(l[3]=e("div",{class:"about"},[Z("关于我 作者有话说 | "),e("span",{style:{color:"#f23f58"}},"About me"),Z(" Author has something to say")],-1)),l[4]||(l[4]=e("div",{class:"info"},"寒窗苦读十余载，学得全栈方明白。如果您有开发各种网站、小程序、APP等需求，亦或者是跨平台、微服务、分离开发等需要。那希望我们可以深入交流，得到您的赏识将会是我最大前行的动力！ ",-1)),e("div",$t,[t(A,{shadow:"hover"},{default:i(()=>[t(d,{style:{color:"#fff","font-size":"30px"}},{default:i(()=>[t(c)]),_:1}),l[1]||(l[1]=e("span",null,[e("div",null,"联系我 Contact me"),e("div",null,"希望您有更多的了解我")],-1))]),_:1}),t(A,{shadow:"hover",onClick:l[0]||(l[0]=u=>a("https://github.com/ggy-king"))},{default:i(()=>[t(ct),l[2]||(l[2]=e("span",null,[e("div",null,"查看我的 Github"),e("div",null,"我的学习成果及我的项目")],-1))]),_:1})])]),t(A,{class:"about-image"},{default:i(()=>l[5]||(l[5]=[e("img",{src:Ct,alt:"我的学习记录及项目集成"},null,-1)])),_:1})])}}}),St=D(Lt,[["__scopeId","data-v-3a9aaaf9"]]),Et="/assets/developer-hobbies-1-B0Bn8J4M.jpg",Nt="/assets/developer-hobbies-2-uffE8Jm3.jpg",At="/assets/developer-hobbies-3-DoNQ2-gC.jpg",jt="/assets/developer-hobbies-5-HP5_Srao.png",Tt="/assets/developer-hobbies-6-BtK9GQej.jpg",Ot={},Mt={class:"hobbies"},Pt={class:"center"},Bt={class:"futures"},Rt={class:"futures-top"},Vt={class:"futures-bottom"},Dt={class:"futures-bottom-box",style:{width:"200px"}},Ft={class:"futures-bottom-box"},Ht={class:"algorithms"},Xt={class:"futures-top"},Yt={class:"futures-bottom"},Kt={class:"futures-bottom-box",style:{width:"160px"}};function Qt(v,a){const r=O("TrophyBase"),l=E,c=O("PieChart"),d=dt,A=O("GoldMedal"),u=O("Monitor"),F=O("Tickets"),I=he,z=O("WarningFilled");return m(),_("div",Mt,[e("div",Pt,[a[9]||(a[9]=e("div",{class:"hobbies-title"},"了解我更多的兴趣 | Learn more about my interests",-1)),a[10]||(a[10]=e("div",{class:"hobbies-subtitle"},"金融期货、量化算法 - Financial futures, Quantitative algorithms",-1)),t(I,{class:"hobbies-main"},{default:i(()=>[e("div",Bt,[e("div",Rt,[t(l,null,{default:i(()=>[t(r)]),_:1}),a[0]||(a[0]=e("div",{class:"futures-top-info"},[e("h3",null,"观赏我的期货盈率及荣誉"),e("div",null,"学习过缠论、波浪理论、江恩理论，擅做波段交易")],-1))]),e("div",Vt,[t(d,{width:640,"popper-style":"box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"},{reference:i(()=>[e("div",Dt,[t(l,null,{default:i(()=>[t(c)]),_:1}),a[1]||(a[1]=Z(" 期货盈率(虽为历史)"))])]),default:i(()=>a[2]||(a[2]=[e("div",{style:{width:"300px",height:"700px"}},[e("p",{style:{"font-size":"14px",color:"var(--el-color-info)",display:"block"}}," 虽然做的不是很好，但也算是自己当时的经历 "),e("div",{style:{display:"flex"}},[e("img",{src:Et,alt:"",style:{width:"100%",height:"100%"}}),e("img",{src:Nt,alt:"",style:{width:"100%",height:"100%"}})])],-1)])),_:1}),t(d,{width:640,"popper-style":"box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"},{reference:i(()=>[e("div",Ft,[t(l,null,{default:i(()=>[t(A)]),_:1}),a[3]||(a[3]=Z("荣誉查询"))])]),default:i(()=>a[4]||(a[4]=[e("div",{style:{width:"300px",height:"580px"}},[e("p",{style:{"font-size":"14px",color:"var(--el-color-info)",display:"block"}}," 大学大部分时间都在写代码，所以只参加了一次比赛 "),e("div",{style:{display:"flex"}},[e("img",{src:At,alt:"",style:{width:"100%",height:"100%"}})])],-1)])),_:1})])]),e("div",Ht,[e("div",Xt,[t(l,null,{default:i(()=>[t(u)]),_:1}),a[5]||(a[5]=e("div",{class:"futures-top-info"},[e("h3",null,"量化算法、AI算法"),e("div",null,"基于skdj，使用大数据模型、多因子模型、趋势跟踪等")],-1))]),e("div",Yt,[t(d,{width:1240,"popper-style":"box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"},{reference:i(()=>[e("div",Kt,[t(l,null,{default:i(()=>[t(F)]),_:1}),a[6]||(a[6]=Z(" 算法代码展示"))])]),default:i(()=>a[7]||(a[7]=[e("div",{style:{width:"600px",height:"450px"}},[e("p",{style:{"font-size":"14px",color:"var(--el-color-info)",display:"block"}}," 算法是基于vnpy平台，搭配缠论及算法实现 "),e("div",{style:{display:"flex"}},[e("img",{src:jt,alt:"",style:{width:"100%",height:"100%"}}),e("img",{src:Tt,alt:"",style:{width:"100%",height:"100%"}})])],-1)])),_:1})])])]),_:1}),t(I,{class:"hobbies-tip"},{default:i(()=>[t(l,{style:{"font-size":"20px"}},{default:i(()=>[t(z)]),_:1}),a[8]||(a[8]=e("span",null," 这只是我之前做过兴趣爱好，但现在更加努力的方向是全栈",-1))]),_:1})])])}const Gt=D(Ot,[["render",Qt],["__scopeId","data-v-055b085a"]]),Jt="/assets/developer-match-1-C9frDAgZ.jpg",Wt="/assets/developer-match-2-C-RZztI1.jpg",Zt="/assets/developer-match-3-CYcVTgiN.png",qt="/assets/developer-match-4-D4oPU3l-.png",Ut="/assets/developer-match-5---RQygJX.png",es="/assets/developer-match-6-BLFDdNle.png",ts={class:"match"},ss={class:"center"},as={class:"match-img"},os=M({__name:"MatchSchool",setup(v){const a=[Jt,Wt,Zt,qt,Ut,es];return(r,l)=>{const c=kt;return m(),_("div",ts,[e("div",ss,[l[0]||(l[0]=e("div",{class:"match-title"},"展示校园荣誉 | Showcasing campus honors",-1)),l[1]||(l[1]=e("div",{class:"match-info"},"虽然不值一提，但还是喜欢记录一下(Although it's not worth mentioning, I still like to record it)",-1)),e("div",as,[(m(),_(V,null,Se(a,d=>t(c,{key:d,style:{width:"150px",height:"150px","margin-left":"10px"},src:d,"zoom-rate":1.2,"max-scale":7,"min-scale":.2,"preview-src-list":a,"initial-index":a.indexOf(d),fit:"cover"},null,8,["src","initial-index"])),64))]),l[2]||(l[2]=e("div",{class:"match-bottom"},"其实好多奖，好多经历都已经不记得了，人这一生总是很匆忙",-1))])])}}}),ns=D(os,[["__scopeId","data-v-4b0a4bab"]]),ls="/assets/developer-project-1-CT5zm5Nj.png",is="/assets/developer-project-2-DXLEMHN6.png",rs="/assets/developer-project-3-BdCHwqp3.png",cs="/assets/developer-project-4-CzJdMyzA.png",ds="/assets/developer-project-5-QVRy4QO5.png",us={},ps={class:"project"};function vs(v,a){return m(),_("div",ps,a[0]||(a[0]=[ut('<div class="center" data-v-721a8b12><div class="head" data-v-721a8b12><div class="head-title" data-v-721a8b12>项目展示 | Project show</div><div class="head-info" data-v-721a8b12>这里展示我在大学里做过的项目，包括校企合作的、独立接活的、自己练习的，大大小小20多个，因篇幅有限故少罗列几个</div></div><div class="project-detail" style="height:280px;" data-v-721a8b12><img src="'+ls+'" alt="" style="padding-right:40px;" data-v-721a8b12><div class="project-detail-characters" data-v-721a8b12><h3 data-v-721a8b12>链界探索者-基于数字货币的智域探索平台</h3><span data-v-721a8b12>这个当然是本网站啦，使用vue3、vue-router、pinia、vite、sass、typescript、eslint、prettier、echarts、nodejs、express、mongodb、mongoose、阿里云等技术搭建，着重以最完善的网站开发。</span></div></div><div class="project-detail" style="height:370px;padding-right:20px;" data-v-721a8b12><div class="project-detail-characters" data-v-721a8b12><h3 data-v-721a8b12>环球新闻管理后台</h3><span data-v-721a8b12>实现较为完善的后台权限搭建，精细的权限控制、支持角色分配和权限继承、身份验证机强化、制菜单结构清晰、高效的后台处理逻辑。采用react、redux、Auth0、antd、json-server及Apifox使用。</span></div><img src="'+is+'" alt="" data-v-721a8b12></div><div class="project-detail" style="height:350px;" data-v-721a8b12><img src="'+rs+'" alt="" style="padding-right:10px;" data-v-721a8b12><img src="'+cs+'" alt="" style="padding-right:80px;" data-v-721a8b12><div class="project-detail-characters" data-v-721a8b12><h3 data-v-721a8b12>移动商场app 及 教育微信小程序</h3><span data-v-721a8b12>前者移动端项目主要练习vue2、vuex、两套布局实现(重写两套代码)：rem布局及vmin布局、webpack优化、跨平台兼容。</span><span data-v-721a8b12>后者为实现微信小程序开发，使用wxml开发，并没有过多深入实现小程序，后续打算深入uni-app框架。</span></div></div><div class="project-detail" style="height:300px;" data-v-721a8b12><div class="project-detail-characters" data-v-721a8b12><h3 data-v-721a8b12>其他想法</h3><span data-v-721a8b12>就不展示更多项目了，未来对Uni-app、Docker、Flutter、Web3、区块链技术、Svelte、Solid等更多技术都会有所涉猎与展望。</span></div><img src="'+ds+'" alt="" style="padding-left:100px;" data-v-721a8b12></div></div>',1)]))}const fs=D(us,[["render",vs],["__scopeId","data-v-721a8b12"]]),ms="/assets/developer-project-6-CkyfKyg1.png",gs={},hs={class:"project"},_s={class:"center"};function bs(v,a){const r=he;return m(),_("div",hs,[e("div",_s,[a[1]||(a[1]=e("div",{class:"head"},[e("h2",{class:"head-title"},"技术展示 | emerging technologies"),e("div",{class:"head-info"},"只是想到了，罗列部分我熟悉甚至我认为熟练掌握的一些技术。天下语言一家亲，我觉得更重要的还有更多三方包的使用。"),e("div",{class:"head-chunk"},"技术点 - Technical points")],-1)),t(r,null,{default:i(()=>a[0]||(a[0]=[e("img",{src:ms,alt:"技术栈"},null,-1)])),_:1})])])}const ys=D(gs,[["render",bs],["__scopeId","data-v-dd25b40c"]]),xs={class:"overall"},ws=M({name:"DeveloperView",__name:"index",setup(v){return(a,r)=>(m(),_(V,null,[r[0]||(r[0]=e("div",{class:"seat"},null,-1)),e("div",xs,[t(St),t(Gt),t(ns),t(fs),t(ys)])],64))}}),Cs=D(ws,[["__scopeId","data-v-59731939"]]);export{Cs as default};