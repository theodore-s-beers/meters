var An=Array.isArray,gn=Array.from,Rn=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,Bt=Object.getOwnPropertyDescriptors,Sn=Object.prototype,Dn=Array.prototype,Ut=Object.getPrototypeOf;const xn=()=>{};function In(t){return t()}function Vt(t){for(var n=0;n<t.length;n++)t[n]()}const m=2,ct=4,M=8,nt=16,y=32,K=64,x=128,U=256,p=512,R=1024,Y=2048,C=4096,j=8192,Gt=16384,vt=32768,On=65536,$t=1<<18,pt=1<<19,ut=Symbol("$state"),kn=Symbol("legacy props"),Nn=Symbol("");function ht(t){return t===this.v}function Kt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function dt(t){return!Kt(t,this.v)}function Zt(t){throw new Error("effect_in_teardown")}function zt(){throw new Error("effect_in_unowned_derived")}function Wt(t){throw new Error("effect_orphan")}function Xt(){throw new Error("effect_update_depth_exceeded")}function Cn(){throw new Error("hydration_failed")}function bn(t){throw new Error("props_invalid_value")}function Pn(){throw new Error("state_descriptors_fixed")}function Fn(){throw new Error("state_prototype_fixed")}function Jt(){throw new Error("state_unsafe_local_read")}function Qt(){throw new Error("state_unsafe_mutation")}let Z=!1;function qn(){Z=!0}function rt(t){return{f:0,v:t,reactions:null,equals:ht,version:0}}function Ln(t){return tn(rt(t))}function Mn(t,n=!1){var e;const r=rt(t);return n||(r.equals=dt),Z&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function tn(t){return u!==null&&u.f&m&&(E===null?hn([t]):E.push(t)),t}function Yn(t,n){return u!==null&&at()&&u.f&(m|nt)&&(E===null||!E.includes(t))&&Qt(),nn(t,n)}function nn(t,n){return t.equals(n)||(t.v=n,t.version=qt(),Et(t,R),at()&&o!==null&&o.f&p&&!(o.f&y)&&(_!==null&&_.includes(t)?(w(o,R),W(o)):g===null?dn([t]):g.push(t))),n}function Et(t,n){var r=t.reactions;if(r!==null)for(var e=at(),s=r.length,a=0;a<s;a++){var l=r[a],i=l.f;i&R||!e&&l===o||(w(l,n),i&(p|x)&&(i&m?Et(l,Y):W(l)))}}const jn=1,Hn=2,Bn=16,Un=1,Vn=2,Gn=4,$n=8,Kn=16,Zn=1,zn=2,rn="[",en="[!",sn="]",yt={},Wn=Symbol();function wt(t){console.warn("hydration_mismatch")}let D=!1;function Xn(t){D=t}let d;function F(t){if(t===null)throw wt(),yt;return d=t}function Jn(){return F(I(d))}function Qn(t){if(D){if(I(d)!==null)throw wt(),yt;d=t}}function tr(t=1){if(D){for(var n=t,r=d;n--;)r=I(r);d=r}}function nr(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===sn){if(t===0)return n;t-=1}else(r===rn||r===en)&&(t+=1)}var e=I(n);n.remove(),n=e}}var it,an,Tt,mt;function rr(){if(it===void 0){it=window,an=document;var t=Element.prototype,n=Node.prototype;Tt=ot(n,"firstChild").get,mt=ot(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function X(t=""){return document.createTextNode(t)}function J(t){return Tt.call(t)}function I(t){return mt.call(t)}function er(t,n){if(!D)return J(t);var r=J(d);if(r===null)r=d.appendChild(X());else if(n&&r.nodeType!==3){var e=X();return r==null||r.before(e),F(e),e}return F(r),r}function sr(t,n){if(!D){var r=J(t);return r instanceof Comment&&r.data===""?I(r):r}return d}function ar(t,n=1,r=!1){let e=D?d:t;for(;n--;)e=I(e);if(!D)return e;var s=e.nodeType;if(r&&s!==3){var a=X();return e==null||e.before(a),F(a),a}return F(e),e}function lr(t){t.textContent=""}function ln(t){var n=m|R;o===null?n|=x:o.f|=pt;const r={children:null,ctx:f,deps:null,equals:ht,f:n,fn:t,reactions:null,v:null,version:0,parent:o};if(u!==null&&u.f&m){var e=u;(e.children??(e.children=[])).push(r)}return r}function or(t){const n=ln(t);return n.equals=dt,n}function At(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&m?et(e):P(e)}}}function gt(t){var n,r=o;$(t.parent);try{At(t),n=Lt(t)}finally{$(r)}return n}function Rt(t){var n=gt(t),r=(O||t.f&x)&&t.deps!==null?Y:p;w(t,r),t.equals(n)||(t.v=n,t.version=qt())}function et(t){At(t),L(t,0),w(t,j),t.v=t.children=t.deps=t.ctx=t.reactions=null}function St(t){o===null&&u===null&&Wt(),u!==null&&u.f&x&&zt(),st&&Zt()}function on(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function b(t,n,r,e=!0){var s=(t&K)!==0,a=o,l={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var i=k;try{ft(!0),z(l),l.f|=Gt}catch(c){throw P(l),c}finally{ft(i)}}else n!==null&&W(l);var T=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&pt)===0;if(!T&&!s&&e&&(a!==null&&on(l,a),u!==null&&u.f&m)){var A=u;(A.children??(A.children=[])).push(l)}return l}function ur(t){const n=b(M,null,!1);return w(n,p),n.teardown=t,n}function ir(t){St();var n=o!==null&&(o.f&y)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=Dt(t);return e}}function fr(t){return St(),un(t)}function _r(t){const n=b(K,t,!0);return()=>{P(n)}}function Dt(t){return b(ct,t,!1)}function un(t){return b(M,t,!0)}function cr(t){return fn(t)}function fn(t,n=0){return b(M|nt|n,t,!0)}function vr(t,n=!0){return b(M|y,t,!0,n)}function xt(t){var n=t.teardown;if(n!==null){const r=st,e=u;_t(!0),G(null);try{n.call(null)}finally{_t(r),G(e)}}}function It(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)et(n[r])}}function Ot(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;P(r,n),r=e}}function _n(t){for(var n=t.first;n!==null;){var r=n.next;n.f&y||P(n),n=r}}function P(t,n=!0){var r=!1;if((n||t.f&$t)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:I(e);e.remove(),e=a}r=!0}Ot(t,n&&!r),It(t),L(t,0),w(t,j);var l=t.transitions;if(l!==null)for(const T of l)T.stop();xt(t);var i=t.parent;i!==null&&i.first!==null&&kt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function kt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function pr(t,n){var r=[];Nt(t,r,!0),cn(r,()=>{P(t),n&&n()})}function cn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Nt(t,n,r){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&n.push(l);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&vt)!==0||(e.f&y)!==0;Nt(e,n,a?r:!1),e=s}}}function hr(t){Ct(t,!0)}function Ct(t,n){if(t.f&C){H(t)&&z(t),t.f^=C;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&vt)!==0||(r.f&y)!==0;Ct(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}let V=!1,Q=[];function bt(){V=!1;const t=Q.slice();Q=[],Vt(t)}function dr(t){V||(V=!0,queueMicrotask(bt)),Q.push(t)}function vn(){V&&bt()}const Pt=0,pn=1;let B=Pt,q=!1,k=!1,st=!1;function ft(t){k=t}function _t(t){st=t}let S=[],N=0;let u=null;function G(t){u=t}let o=null;function $(t){o=t}let E=null;function hn(t){E=t}let _=null,h=0,g=null;function dn(t){g=t}let Ft=0,O=!1,f=null;function qt(){return++Ft}function at(){return!Z||f!==null&&f.l===null}function H(t){var l,i;var n=t.f;if(n&R)return!0;if(n&Y){var r=t.deps,e=(n&x)!==0;if(r!==null){var s;if(n&U){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(t);t.f^=U}for(s=0;s<r.length;s++){var a=r[s];if(H(a)&&Rt(a),e&&o!==null&&!O&&!((i=a==null?void 0:a.reactions)!=null&&i.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||w(t,p)}return!1}function En(t,n,r){throw t}function Lt(t){var lt;var n=_,r=h,e=g,s=u,a=O,l=E,i=f,T=t.f;_=null,h=0,g=null,u=T&(y|K)?null:t,O=!k&&(T&x)!==0,E=null,f=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(L(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!O)for(v=h;v<c.length;v++)((lt=c[v]).reactions??(lt.reactions=[])).push(t)}else c!==null&&h<c.length&&(L(t,h),c.length=h);return A}finally{_=n,h=r,g=e,u=s,O=a,E=l,f=i}}function yn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&m&&(_===null||!_.includes(n))&&(w(n,Y),n.f&(x|U)||(n.f^=U),L(n,0))}function L(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)yn(t,r[e])}function z(t){var n=t.f;if(!(n&j)){w(t,p);var r=o;o=t;try{n&nt?_n(t):Ot(t),It(t),xt(t);var e=Lt(t);t.teardown=typeof e=="function"?e:null,t.version=Ft}catch(s){En(s)}finally{o=r}}}function Mt(){N>1e3&&(N=0,Xt()),N++}function Yt(t){var n=t.length;if(n!==0){Mt();var r=k;k=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var a=[];jt(s,a),wn(a)}}finally{k=r}}}function wn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(j|C))&&H(e)&&(z(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?kt(e):e.fn=null))}}function Tn(){if(q=!1,N>1001)return;const t=S;S=[],Yt(t),q||(N=0)}function W(t){B===Pt&&(q||(q=!0,queueMicrotask(Tn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(K|y)){if(!(r&p))return;n.f^=p}}S.push(n)}function jt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&y)!==0,l=a&&(s&p)!==0;if(!l&&!(s&C))if(s&M){a?r.f^=p:H(r)&&z(r);var i=r.first;if(i!==null){r=i;continue}}else s&ct&&e.push(r);var T=r.next;if(T===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=T}for(var c=0;c<e.length;c++)i=e[c],n.push(i),jt(i,n)}function Ht(t){var n=B,r=S;try{Mt();const s=[];B=pn,S=s,q=!1,Yt(r);var e=t==null?void 0:t();return vn(),(S.length>0||s.length>0)&&Ht(),N=0,e}finally{B=n,S=r}}async function Er(){await Promise.resolve(),Ht()}function yr(t){var i;var n=t.f,r=(n&m)!==0;if(r&&n&j){var e=gt(t);return et(t),e}if(u!==null){E!==null&&E.includes(t)&&Jt();var s=u.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),g!==null&&o!==null&&o.f&p&&!(o.f&y)&&g.includes(t)&&(w(o,R),W(o))}else if(r&&t.deps===null){var a=t,l=a.parent;l!==null&&!((i=l.deriveds)!=null&&i.includes(a))&&(l.deriveds??(l.deriveds=[])).push(a)}return r&&(a=t,H(a)&&Rt(a)),t.v}function wr(t){const n=u;try{return u=null,t()}finally{u=n}}const mn=~(R|Y|p);function w(t,n){t.f=t.f&mn|n}function Tr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},Z&&!n&&(f.l={s:null,u:null,r1:[],r2:rt(!1)})}function mr(t){const n=f;if(n!==null){const l=n.e;if(l!==null){var r=o,e=u;n.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];$(a.effect),G(a.reaction),Dt(a.fn)}}finally{$(r),G(e)}}f=n.p,n.m=!0}return{}}function Ar(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ut in t)tt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ut in r&&tt(r)}}}function tt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{tt(t[e],n)}catch{}const r=Ut(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Bt(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{Bt as $,cr as A,mr as B,ar as C,er as D,vt as E,Qn as F,P as G,en as H,X as I,An as J,gn as K,C as L,o as M,nn as N,Nt as O,lr as P,cn as Q,J as R,sn as S,u as T,rt as U,Hn as V,jn as W,Bn as X,I as Y,Nn as Z,Ut as _,Jn as a,an as a0,tr as a1,Rn as a2,G as a3,$ as a4,$t as a5,rn as a6,rr as a7,yt as a8,wt as a9,Kn as aA,Ht as aB,Er as aC,Ln as aD,Kt as aE,Cn as aa,_r as ab,Zn as ac,zn as ad,ut as ae,Sn as af,Dn as ag,Pn as ah,Wn as ai,ot as aj,Fn as ak,Dt as al,un as am,dr as an,bn as ao,On as ap,Gn as aq,dt as ar,y as as,K as at,Un as au,Z as av,Vn as aw,$n as ax,kn as ay,or as az,fn as b,Xn as c,hr as d,vr as e,d as f,qn as g,D as h,yr as i,Yn as j,fr as k,ir as l,Mn as m,xn as n,f as o,pr as p,Vt as q,nr as r,F as s,ur as t,wr as u,In as v,Ar as w,ln as x,Tr as y,sr as z};