var P=Object.defineProperty;var I=(t,e,n)=>e in t?P(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var d=(t,e,n)=>I(t,typeof e!="symbol"?e+"":e,n);import{r as p,n as g,m as T,p as j,q as S,v as D,w as E,x as G,y as q,z as A,A as z,B as O,C as R}from"./scheduler.Bbz2mVHL.js";let y=!1;function F(){y=!0}function U(){y=!1}function V(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let a=0;a<e.length;a++){const o=e[a];o.claim_order!==void 0&&r.push(o)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let r=0;r<e.length;r++){const a=e[r].claim_order,o=(s>0&&e[n[s]].claim_order<=a?s+1:V(1,s,h=>e[n[h]].claim_order,a))-1;i[r]=n[o]+1;const u=o+1;n[u]=r,s=Math.max(u,s)}const c=[],l=[];let f=e.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(c.push(e[r-1]);f>=r;f--)l.push(e[f]);f--}for(;f>=0;f--)l.push(e[f]);c.reverse(),l.sort((r,a)=>r.claim_order-a.claim_order);for(let r=0,a=0;r<l.length;r++){for(;a<c.length&&l[r].claim_order>=c[a].claim_order;)a++;const o=a<c.length?c[a]:null;t.insertBefore(l[r],o)}}function J(t,e){if(y){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function K(t,e,n){t.insertBefore(e,n||null)}function Q(t,e,n){y&&!n?J(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function $(t){t.parentNode&&t.parentNode.removeChild(t)}function at(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function H(t){return document.createElement(t)}function L(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function w(t){return document.createTextNode(t)}function ct(){return w(" ")}function ft(){return w("")}function ut(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ot(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function dt(t){return function(e){e.target===this&&t.call(this,e)}}function X(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _t(t,e){for(const n in e)X(t,n,e[n])}function ht(t){return t.dataset.svelteH}function Y(t){return Array.from(t.childNodes)}function C(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function M(t,e,n,i,s=!1){C(t);const c=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const f=t[l];if(e(f)){const r=n(f);return r===void 0?t.splice(l,1):t[l]=r,s||(t.claim_info.last_index=l),f}}for(let l=t.claim_info.last_index-1;l>=0;l--){const f=t[l];if(e(f)){const r=n(f);return r===void 0?t.splice(l,1):t[l]=r,s?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,f}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function B(t,e,n,i){return M(t,s=>s.nodeName===e,s=>{const c=[];for(let l=0;l<s.attributes.length;l++){const f=s.attributes[l];n[f.name]||c.push(f.name)}c.forEach(l=>s.removeAttribute(l))},()=>i(e))}function mt(t,e,n){return B(t,e,n,H)}function $t(t,e,n){return B(t,e,n,L)}function Z(t,e){return M(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>w(e),!0)}function pt(t){return Z(t," ")}function b(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function yt(t,e){const n=b(t,"HTML_TAG_START",0),i=b(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new x(e);C(t);const s=t.splice(n,i-n+1);$(s[0]),$(s[s.length-1]);const c=s.slice(1,s.length-1);if(c.length===0)return new x(e);for(const l of c)l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new x(e,c)}function xt(t,e){e=""+e,t.data!==e&&(t.data=e)}function gt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}class k{constructor(e=!1){d(this,"is_svg",!1);d(this,"e");d(this,"n");d(this,"t");d(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=L(n.nodeName):this.e=H(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)K(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach($)}}class x extends k{constructor(n=!1,i){super(n);d(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)Q(this.t,this.n[i],n)}}function wt(t,e){return new t(e)}const m=new Set;let _;function vt(){_={r:0,c:[],p:_}}function Nt(){_.r||p(_.c),_=_.p}function tt(t,e){t&&t.i&&(m.delete(t),t.i(e))}function Tt(t,e,n,i){if(t&&t.o){if(m.has(t))return;m.add(t),_.c.push(()=>{m.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Et(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function At(t){t&&t.c()}function bt(t,e){t&&t.l(e)}function et(t,e,n){const{fragment:i,after_update:s}=t.$$;i&&i.m(e,n),E(()=>{const c=t.$$.on_mount.map(z).filter(S);t.$$.on_destroy?t.$$.on_destroy.push(...c):p(c),t.$$.on_mount=[]}),s.forEach(E)}function nt(t,e){const n=t.$$;n.fragment!==null&&(G(n.after_update),p(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function it(t,e){t.$$.dirty[0]===-1&&(O.push(t),R(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function St(t,e,n,i,s,c,l=null,f=[-1]){const r=q;A(t);const a=t.$$={fragment:null,ctx:[],props:c,update:g,not_equal:s,bound:T(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:T(),dirty:f,skip_bound:!1,root:e.target||r.$$.root};l&&l(a.root);let o=!1;if(a.ctx=n?n(t,e.props||{},(u,h,...v)=>{const N=v.length?v[0]:h;return a.ctx&&s(a.ctx[u],a.ctx[u]=N)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](N),o&&it(t,u)),h}):[],a.update(),o=!0,p(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){F();const u=Y(e.target);a.fragment&&a.fragment.l(u),u.forEach($)}else a.fragment&&a.fragment.c();e.intro&&tt(t.$$.fragment),et(t,e.target,e.anchor),U(),j()}A(r)}class Ht{constructor(){d(this,"$$");d(this,"$$set")}$destroy(){nt(this,1),this.$destroy=g}$on(e,n){if(!S(n))return g;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!D(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const st="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(st);export{vt as A,ft as B,ut as C,ot as D,dt as E,Et as F,gt as G,x as H,wt as I,Ht as S,Y as a,Z as b,mt as c,$ as d,H as e,pt as f,Q as g,J as h,St as i,xt as j,X as k,tt as l,Tt as m,ht as n,L as o,$t as p,yt as q,_t as r,ct as s,w as t,Nt as u,at as v,At as w,bt as x,et as y,nt as z};
