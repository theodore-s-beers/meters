import{a3 as Y,a4 as D,a5 as I,W as q,R as W,L as k,F as C,b as $,a6 as j,h as m,a7 as H,Z as S,c as g,s as E,f as h,G as V,a8 as N,a9 as R,a as B,I as G,aa as K,ab as Z,O as z,K as J,ac as Q,e as U,m as X,q as x,i as ee}from"./runtime.uiYfD5lK.js";import{b as ae}from"./disclose-version.DvmHxhDV.js";const re=["touchstart","touchmove"];function te(e){return re.includes(e)}const ne=new Set,L=new Set;function b(e){var A;var a=this,t=a.ownerDocument,d=e.type,f=((A=e.composedPath)==null?void 0:A.call(e))||[],r=f[0]||e.target,l=0,y=e.__root;if(y){var c=f.indexOf(y);if(c!==-1&&(a===document||a===window)){e.__root=a;return}var p=f.indexOf(a);if(p===-1)return;c<=p&&(l=c)}if(r=f[l]||e.target,r!==a){Y(e,"currentTarget",{configurable:!0,get(){return r||t}});var T=W,o=k;D(null),I(null);try{for(var n,s=[];r!==null;){var u=r.assignedSlot||r.parentNode||r.host||null;try{var _=r["__"+d];if(_!==void 0&&!r.disabled)if(q(_)){var[M,...P]=_;M.apply(r,[e,...P])}else _.call(r,e)}catch(w){n?s.push(w):n=w}if(e.cancelBubble||u===a||u===null)break;r=u}if(n){for(let w of s)queueMicrotask(()=>{throw w});throw n}}finally{e.__root=a,delete e.currentTarget,D(T),I(o)}}}let i;function se(){i=void 0}function fe(e){let a=null,t=m;var d;if(m){for(a=h,i===void 0&&(i=V(document.head));i!==null&&(i.nodeType!==8||i.data!==H);)i=S(i);i===null?g(!1):i=E(S(i))}m||(d=document.head.appendChild(C()));try{$(()=>e(d),j)}finally{t&&(g(!0),i=h,E(a))}}function ue(e,a){var t=a==null?"":typeof a=="object"?a+"":a;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t==null?"":t+"")}function ie(e,a){return F(e,a)}function le(e,a){N(),a.intro=a.intro??!1;const t=a.target,d=m,f=h;try{for(var r=V(t);r&&(r.nodeType!==8||r.data!==H);)r=S(r);if(!r)throw R;g(!0),E(r),B();const l=F(e,{...a,anchor:r});if(h===null||h.nodeType!==8||h.data!==G)throw K(),R;return g(!1),l}catch(l){if(l===R)return a.recover===!1&&Z(),N(),z(t),g(!1),ie(e,a);throw l}finally{g(d),E(f),se()}}const v=new Map;function F(e,{target:a,anchor:t,props:d={},events:f,context:r,intro:l=!0}){N();var y=new Set,c=o=>{for(var n=0;n<o.length;n++){var s=o[n];if(!y.has(s)){y.add(s);var u=te(s);a.addEventListener(s,b,{passive:u});var _=v.get(s);_===void 0?(document.addEventListener(s,b,{passive:u}),v.set(s,1)):v.set(s,_+1)}}};c(J(ne)),L.add(c);var p=void 0,T=Q(()=>{var o=t??a.appendChild(C());return U(()=>{if(r){X({});var n=ee;n.c=r}f&&(d.$$events=f),m&&ae(o,null),p=e(o,d)||{},m&&(k.nodes_end=h),r&&x()}),()=>{var u;for(var n of y){a.removeEventListener(n,b);var s=v.get(n);--s===0?(document.removeEventListener(n,b),v.delete(n)):v.set(n,s)}L.delete(c),o!==t&&((u=o.parentNode)==null||u.removeChild(o))}});return O.set(p,T),p}let O=new WeakMap;function ce(e,a){const t=O.get(e);return t?(O.delete(e),t(a)):Promise.resolve()}export{le as a,fe as h,ie as m,ue as s,ce as u};
