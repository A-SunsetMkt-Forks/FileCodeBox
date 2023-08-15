import{i as Z,a4 as Ze,c as Te,b as Be,j as ne,x as ze,m as qe,e as ue,a2 as et,a5 as tt,a6 as ot,E as z,G as at,_ as _e,w as $e,o as Pe}from"./base-3569949a.js";import{B as m,a0 as Re,r as B,P as J,l as Q,i as le,d as q,ai as st,Q as nt,n as F,o as lt,S as rt,b as it,v as ut,m as f,p as C,L as y,F as re,D as h,s as t,E as _,y as k,J as x,w as T,$ as Y,V as ie,e as ce,G as de,N as ct,z as G,H as pe,f as Ne,T as dt}from"./index-4cf91ffb.js";import{e as pt,i as ft,c as vt,d as Ve}from"./focus-trap-82046fc4.js";import{a as mt,d as ht,e as yt,b as He,c as gt,z as bt}from"./el-button-cb4d7ad5.js";const wt=()=>Z&&/firefox/i.test(window.navigator.userAgent);let X;const Gt=a=>{var c;if(!Z)return 0;if(X!==void 0)return X;const n=document.createElement("div");n.className=`${a}-scrollbar__wrap`,n.style.visibility="hidden",n.style.width="100px",n.style.position="absolute",n.style.top="-9999px",document.body.appendChild(n);const o=n.offsetWidth;n.style.overflow="scroll";const s=document.createElement("div");s.style.width="100%",n.appendChild(s);const l=s.offsetWidth;return(c=n.parentNode)==null||c.removeChild(n),X=o-l,X};function Xt(a,c){if(!Z)return;if(!c){a.scrollTop=0;return}const n=[];let o=c.offsetParent;for(;o!==null&&a!==o&&a.contains(o);)n.push(o),o=o.offsetParent;const s=c.offsetTop+n.reduce((r,g)=>r+g.offsetTop,0),l=s+c.offsetHeight,u=a.scrollTop,w=u+a.clientHeight;s<u?a.scrollTop=s:l>w&&(a.scrollTop=l-a.clientHeight)}const fe="update:modelValue",Jt="change",xt=a=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(a),St=["class","style"],Ct=/^on[A-Z]/,Et=(a={})=>{const{excludeListeners:c=!1,excludeKeys:n}=a,o=m(()=>((n==null?void 0:n.value)||[]).concat(St)),s=Re();return s?m(()=>{var l;return Ze(Object.entries((l=s.proxy)==null?void 0:l.$attrs).filter(([u])=>!o.value.includes(u)&&!(c&&Ct.test(u))))}):m(()=>({}))};function kt(a){const c=B();function n(){if(a.value==null)return;const{selectionStart:s,selectionEnd:l,value:u}=a.value;if(s==null||l==null)return;const w=u.slice(0,Math.max(0,s)),r=u.slice(Math.max(0,l));c.value={selectionStart:s,selectionEnd:l,value:u,beforeTxt:w,afterTxt:r}}function o(){if(a.value==null||c.value==null)return;const{value:s}=a.value,{beforeTxt:l,afterTxt:u,selectionStart:w}=c.value;if(l==null||u==null||w==null)return;let r=s.length;if(s.endsWith(u))r=s.length-u.length;else if(s.startsWith(l))r=l.length;else{const g=l[w-1],v=s.indexOf(g,w-1);v!==-1&&(r=v+1)}a.value.setSelectionRange(r,r)}return[n,o]}function It(a,{afterFocus:c,afterBlur:n}={}){const o=Re(),{emit:s}=o,l=J(),u=B(!1),w=v=>{u.value||(u.value=!0,s("focus",v),c==null||c())},r=v=>{var p;v.relatedTarget&&((p=l.value)!=null&&p.contains(v.relatedTarget))||(u.value=!1,s("blur",v),n==null||n())},g=()=>{var v;(v=a.value)==null||v.focus()};return Q(l,v=>{v&&v.setAttribute("tabindex","-1")}),pt(l,"click",g),{wrapperRef:l,isFocused:u,handleFocus:w,handleBlur:r}}let S;const Tt=`
  height:0 !important;
  visibility:hidden !important;
  ${wt()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,zt=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function Pt(a){const c=window.getComputedStyle(a),n=c.getPropertyValue("box-sizing"),o=Number.parseFloat(c.getPropertyValue("padding-bottom"))+Number.parseFloat(c.getPropertyValue("padding-top")),s=Number.parseFloat(c.getPropertyValue("border-bottom-width"))+Number.parseFloat(c.getPropertyValue("border-top-width"));return{contextStyle:zt.map(u=>`${u}:${c.getPropertyValue(u)}`).join(";"),paddingSize:o,borderSize:s,boxSizing:n}}function Fe(a,c=1,n){var o;S||(S=document.createElement("textarea"),document.body.appendChild(S));const{paddingSize:s,borderSize:l,boxSizing:u,contextStyle:w}=Pt(a);S.setAttribute("style",`${w};${Tt}`),S.value=a.value||a.placeholder||"";let r=S.scrollHeight;const g={};u==="border-box"?r=r+l:u==="content-box"&&(r=r-s),S.value="";const v=S.scrollHeight-s;if(Te(c)){let p=v*c;u==="border-box"&&(p=p+s+l),r=Math.max(p,r),g.minHeight=`${p}px`}if(Te(n)){let p=v*n;u==="border-box"&&(p=p+s+l),r=Math.min(p,r)}return g.height=`${r}px`,(o=S.parentNode)==null||o.removeChild(S),S=void 0,g}const Nt=Be({id:{type:String,default:void 0},size:mt,disabled:Boolean,modelValue:{type:ne([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:ne([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:ze},prefixIcon:{type:ze},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:ne([Object,Array,String]),default:()=>qe({})}}),Vt={[fe]:a=>le(a),input:a=>le(a),change:a=>le(a),focus:a=>a instanceof FocusEvent,blur:a=>a instanceof FocusEvent,clear:()=>!0,mouseleave:a=>a instanceof MouseEvent,mouseenter:a=>a instanceof MouseEvent,keydown:a=>a instanceof Event,compositionstart:a=>a instanceof CompositionEvent,compositionupdate:a=>a instanceof CompositionEvent,compositionend:a=>a instanceof CompositionEvent},Ft=["role"],Bt=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder","form"],_t=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form"],$t=q({name:"ElInput",inheritAttrs:!1}),Rt=q({...$t,props:Nt,emits:Vt,setup(a,{expose:c,emit:n}){const o=a,s=st(),l=nt(),u=m(()=>{const e={};return o.containerRole==="combobox"&&(e["aria-haspopup"]=s["aria-haspopup"],e["aria-owns"]=s["aria-owns"],e["aria-expanded"]=s["aria-expanded"]),e}),w=m(()=>[o.type==="textarea"?ve.b():d.b(),d.m(Me.value),d.is("disabled",P.value),d.is("exceed",De.value),{[d.b("group")]:l.prepend||l.append,[d.bm("group","append")]:l.append,[d.bm("group","prepend")]:l.prepend,[d.m("prefix")]:l.prefix||o.prefixIcon,[d.m("suffix")]:l.suffix||o.suffixIcon||o.clearable||o.showPassword,[d.bm("suffix","password-clear")]:j.value&&oe.value},s.class]),r=m(()=>[d.e("wrapper"),d.is("focus",te.value)]),g=Et({excludeKeys:m(()=>Object.keys(u.value))}),{form:v,formItem:p}=ht(),{inputId:A}=yt(o,{formItemContext:p}),Me=He(),P=gt(),d=ue("input"),ve=ue("textarea"),L=J(),E=J(),ee=B(!1),$=B(!1),O=B(!1),me=B(),D=J(o.inputStyle),N=m(()=>L.value||E.value),{wrapperRef:Ae,isFocused:te,handleFocus:K,handleBlur:W}=It(N,{afterBlur(){var e;o.validateEvent&&((e=p==null?void 0:p.validate)==null||e.call(p,"blur").catch(i=>Ve()))}}),he=m(()=>{var e;return(e=v==null?void 0:v.statusIcon)!=null?e:!1}),R=m(()=>(p==null?void 0:p.validateState)||""),ye=m(()=>R.value&&et[R.value]),Le=m(()=>O.value?tt:ot),Oe=m(()=>[s.style,o.inputStyle]),ge=m(()=>[o.inputStyle,D.value,{resize:o.resize}]),I=m(()=>ft(o.modelValue)?"":String(o.modelValue)),j=m(()=>o.clearable&&!P.value&&!o.readonly&&!!I.value&&(te.value||ee.value)),oe=m(()=>o.showPassword&&!P.value&&!o.readonly&&!!I.value&&(!!I.value||te.value)),V=m(()=>o.showWordLimit&&!!g.value.maxlength&&(o.type==="text"||o.type==="textarea")&&!P.value&&!o.readonly&&!o.showPassword),ae=m(()=>I.value.length),De=m(()=>!!V.value&&ae.value>Number(g.value.maxlength)),Ke=m(()=>!!l.suffix||!!o.suffixIcon||j.value||o.showPassword||V.value||!!R.value&&he.value),[We,je]=kt(L);vt(E,e=>{if(Ue(),!V.value||o.resize!=="both")return;const i=e[0],{width:b}=i.contentRect;me.value={right:`calc(100% - ${b+15+6}px)`}});const H=()=>{const{type:e,autosize:i}=o;if(!(!Z||e!=="textarea"||!E.value))if(i){const b=Ne(i)?i.minRows:void 0,U=Ne(i)?i.maxRows:void 0,Ie=Fe(E.value,b,U);D.value={overflowY:"hidden",...Ie},F(()=>{E.value.offsetHeight,D.value=Ie})}else D.value={minHeight:Fe(E.value).minHeight}},Ue=(e=>{let i=!1;return()=>{var b;if(i||!o.autosize)return;((b=E.value)==null?void 0:b.offsetParent)===null||(e(),i=!0)}})(H),M=()=>{const e=N.value,i=o.formatter?o.formatter(I.value):I.value;!e||e.value===i||(e.value=i)},se=async e=>{We();let{value:i}=e.target;if(o.formatter&&(i=o.parser?o.parser(i):i),!$.value){if(i===I.value){M();return}n(fe,i),n("input",i),await F(),M(),je()}},be=e=>{n("change",e.target.value)},we=e=>{n("compositionstart",e),$.value=!0},xe=e=>{var i;n("compositionupdate",e);const b=(i=e.target)==null?void 0:i.value,U=b[b.length-1]||"";$.value=!xt(U)},Se=e=>{n("compositionend",e),$.value&&($.value=!1,se(e))},Ye=()=>{O.value=!O.value,Ce()},Ce=async()=>{var e;await F(),(e=N.value)==null||e.focus()},Ge=()=>{var e;return(e=N.value)==null?void 0:e.blur()},Xe=e=>{ee.value=!1,n("mouseleave",e)},Je=e=>{ee.value=!0,n("mouseenter",e)},Ee=e=>{n("keydown",e)},Qe=()=>{var e;(e=N.value)==null||e.select()},ke=()=>{n(fe,""),n("change",""),n("clear"),n("input","")};return Q(()=>o.modelValue,()=>{var e;F(()=>H()),o.validateEvent&&((e=p==null?void 0:p.validate)==null||e.call(p,"change").catch(i=>Ve()))}),Q(I,()=>M()),Q(()=>o.type,async()=>{await F(),M(),H()}),lt(()=>{!o.formatter&&o.parser,M(),F(H)}),c({input:L,textarea:E,ref:N,textareaStyle:ge,autosize:rt(o,"autosize"),focus:Ce,blur:Ge,select:Qe,clear:ke,resizeTextarea:H}),(e,i)=>it((f(),C("div",ie(t(u),{class:t(w),style:t(Oe),role:e.containerRole,onMouseenter:Je,onMouseleave:Xe}),[y(" input "),e.type!=="textarea"?(f(),C(re,{key:0},[y(" prepend slot "),e.$slots.prepend?(f(),C("div",{key:0,class:h(t(d).be("group","prepend"))},[_(e.$slots,"prepend")],2)):y("v-if",!0),k("div",{ref_key:"wrapperRef",ref:Ae,class:h(t(r))},[y(" prefix slot "),e.$slots.prefix||e.prefixIcon?(f(),C("span",{key:0,class:h(t(d).e("prefix"))},[k("span",{class:h(t(d).e("prefix-inner"))},[_(e.$slots,"prefix"),e.prefixIcon?(f(),x(t(z),{key:0,class:h(t(d).e("icon"))},{default:T(()=>[(f(),x(Y(e.prefixIcon)))]),_:1},8,["class"])):y("v-if",!0)],2)],2)):y("v-if",!0),k("input",ie({id:t(A),ref_key:"input",ref:L,class:t(d).e("inner")},t(g),{type:e.showPassword?O.value?"text":"password":e.type,disabled:t(P),formatter:e.formatter,parser:e.parser,readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,form:o.form,onCompositionstart:we,onCompositionupdate:xe,onCompositionend:Se,onInput:se,onFocus:i[0]||(i[0]=(...b)=>t(K)&&t(K)(...b)),onBlur:i[1]||(i[1]=(...b)=>t(W)&&t(W)(...b)),onChange:be,onKeydown:Ee}),null,16,Bt),y(" suffix slot "),t(Ke)?(f(),C("span",{key:1,class:h(t(d).e("suffix"))},[k("span",{class:h(t(d).e("suffix-inner"))},[!t(j)||!t(oe)||!t(V)?(f(),C(re,{key:0},[_(e.$slots,"suffix"),e.suffixIcon?(f(),x(t(z),{key:0,class:h(t(d).e("icon"))},{default:T(()=>[(f(),x(Y(e.suffixIcon)))]),_:1},8,["class"])):y("v-if",!0)],64)):y("v-if",!0),t(j)?(f(),x(t(z),{key:1,class:h([t(d).e("icon"),t(d).e("clear")]),onMousedown:de(t(ct),["prevent"]),onClick:ke},{default:T(()=>[ce(t(at))]),_:1},8,["class","onMousedown"])):y("v-if",!0),t(oe)?(f(),x(t(z),{key:2,class:h([t(d).e("icon"),t(d).e("password")]),onClick:Ye},{default:T(()=>[(f(),x(Y(t(Le))))]),_:1},8,["class"])):y("v-if",!0),t(V)?(f(),C("span",{key:3,class:h(t(d).e("count"))},[k("span",{class:h(t(d).e("count-inner"))},G(t(ae))+" / "+G(t(g).maxlength),3)],2)):y("v-if",!0),t(R)&&t(ye)&&t(he)?(f(),x(t(z),{key:4,class:h([t(d).e("icon"),t(d).e("validateIcon"),t(d).is("loading",t(R)==="validating")])},{default:T(()=>[(f(),x(Y(t(ye))))]),_:1},8,["class"])):y("v-if",!0)],2)],2)):y("v-if",!0)],2),y(" append slot "),e.$slots.append?(f(),C("div",{key:1,class:h(t(d).be("group","append"))},[_(e.$slots,"append")],2)):y("v-if",!0)],64)):(f(),C(re,{key:1},[y(" textarea "),k("textarea",ie({id:t(A),ref_key:"textarea",ref:E,class:t(ve).e("inner")},t(g),{tabindex:e.tabindex,disabled:t(P),readonly:e.readonly,autocomplete:e.autocomplete,style:t(ge),"aria-label":e.label,placeholder:e.placeholder,form:o.form,onCompositionstart:we,onCompositionupdate:xe,onCompositionend:Se,onInput:se,onFocus:i[2]||(i[2]=(...b)=>t(K)&&t(K)(...b)),onBlur:i[3]||(i[3]=(...b)=>t(W)&&t(W)(...b)),onChange:be,onKeydown:Ee}),null,16,_t),t(V)?(f(),C("span",{key:0,style:pe(me.value),class:h(t(d).e("count"))},G(t(ae))+" / "+G(t(g).maxlength),7)):y("v-if",!0)],64))],16,Ft)),[[ut,e.type!=="hidden"]])}});var Ht=_e(Rt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);const Qt=$e(Ht),Mt=Be({type:{type:String,values:["success","info","warning","danger",""],default:""},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:{type:String,default:""},size:{type:String,values:bt,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),At={close:a=>a instanceof MouseEvent,click:a=>a instanceof MouseEvent},Lt=q({name:"ElTag"}),Ot=q({...Lt,props:Mt,emits:At,setup(a,{emit:c}){const n=a,o=He(),s=ue("tag"),l=m(()=>{const{type:r,hit:g,effect:v,closable:p,round:A}=n;return[s.b(),s.is("closable",p),s.m(r),s.m(o.value),s.m(v),s.is("hit",g),s.is("round",A)]}),u=r=>{c("close",r)},w=r=>{c("click",r)};return(r,g)=>r.disableTransitions?(f(),C("span",{key:0,class:h(t(l)),style:pe({backgroundColor:r.color}),onClick:w},[k("span",{class:h(t(s).e("content"))},[_(r.$slots,"default")],2),r.closable?(f(),x(t(z),{key:0,class:h(t(s).e("close")),onClick:de(u,["stop"])},{default:T(()=>[ce(t(Pe))]),_:1},8,["class","onClick"])):y("v-if",!0)],6)):(f(),x(dt,{key:1,name:`${t(s).namespace.value}-zoom-in-center`,appear:""},{default:T(()=>[k("span",{class:h(t(l)),style:pe({backgroundColor:r.color}),onClick:w},[k("span",{class:h(t(s).e("content"))},[_(r.$slots,"default")],2),r.closable?(f(),x(t(z),{key:0,class:h(t(s).e("close")),onClick:de(u,["stop"])},{default:T(()=>[ce(t(Pe))]),_:1},8,["class","onClick"])):y("v-if",!0)],6)]),_:3},8,["name"]))}});var Dt=_e(Ot,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const Zt=$e(Dt);export{Jt as C,Qt as E,fe as U,Zt as a,Gt as g,xt as i,Xt as s,Mt as t};