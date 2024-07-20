import{s as ge,a as ae,u as ne,g as oe,b as ie,r as xe,h as ke,i as pe,j as De,o as Te,n as ve}from"../chunks/scheduler.GUKuqOIx.js";import{S as be,i as we,e as _,s as I,t as Z,c as g,a as L,f as H,b as ee,d as T,k as m,g as G,h as a,B as q,C as Ce,D as Ae,j as Ee,l as U,m as z,E as ye,w as re,n as N,x as ce,y as de,v as Ie,z as fe}from"../chunks/index.DMVXZgpd.js";import{e as ue}from"../chunks/each.D6YF6ztN.js";import{c as Y}from"../chunks/constants.ChADqbDd.js";import"../chunks/store.ktrNRhQk.js";import{E as He}from"../chunks/email.DZg4GCWi.js";const Le=l=>({}),he=l=>({});function Ve(l){let e,t,s,n,u,C,p,b,M,x,k,V,A;const d=l[6].header,c=ae(d,l,l[5],he),E=l[6].default,w=ae(E,l,l[5],null);return{c(){e=_("dialog"),t=_("div"),c&&c.c(),s=I(),n=_("hr"),u=I(),w&&w.c(),C=I(),p=_("hr"),b=I(),M=_("button"),x=Z(l[1]),this.h()},l(o){e=g(o,"DIALOG",{});var f=L(e);t=g(f,"DIV",{class:!0});var h=L(t);c&&c.l(h),s=H(h),n=g(h,"HR",{}),u=H(h),w&&w.l(h),C=H(h),p=g(h,"HR",{}),b=H(h),M=g(h,"BUTTON",{class:!0});var $=L(M);x=ee($,l[1]),$.forEach(T),h.forEach(T),f.forEach(T),this.h()},h(){m(M,"class","btn btn-primary rounded-none"),M.autofocus=!0,m(t,"class","flex flex-col")},m(o,f){G(o,e,f),a(e,t),c&&c.m(t,null),a(t,s),a(t,n),a(t,u),w&&w.m(t,null),a(t,C),a(t,p),a(t,b),a(t,M),a(M,x),l[8](e),k=!0,M.focus(),V||(A=[q(M,"click",l[3]),q(t,"click",Ce(l[7])),q(e,"close",l[9]),q(e,"click",Ae(l[10]))],V=!0)},p(o,[f]){c&&c.p&&(!k||f&32)&&ne(c,d,o,o[5],k?ie(d,o[5],f,Le):oe(o[5]),he),w&&w.p&&(!k||f&32)&&ne(w,E,o,o[5],k?ie(E,o[5],f,null):oe(o[5]),null),(!k||f&2)&&Ee(x,o[1])},i(o){k||(U(c,o),U(w,o),k=!0)},o(o){z(c,o),z(w,o),k=!1},d(o){o&&T(e),c&&c.d(o),w&&w.d(o),l[8](null),V=!1,xe(A)}}}function je(l,e,t){let{$$slots:s={},$$scope:n}=e,{showModal:u}=e,{closeText:C="close"}=e,{closeDialogAction:p=()=>{}}=e,b;const M=()=>{b.close(),p()};function x(d){ke.call(this,l,d)}function k(d){pe[d?"unshift":"push"](()=>{b=d,t(2,b)})}const V=()=>t(0,u=!1),A=()=>b.close();return l.$$set=d=>{"showModal"in d&&t(0,u=d.showModal),"closeText"in d&&t(1,C=d.closeText),"closeDialogAction"in d&&t(4,p=d.closeDialogAction),"$$scope"in d&&t(5,n=d.$$scope)},l.$$.update=()=>{l.$$.dirty&5&&b&&u&&b.showModal()},[u,C,b,M,p,n,s,x,k,V,A]}class Oe extends be{constructor(e){super(),we(this,e,je,Ve,ge,{showModal:0,closeText:1,closeDialogAction:4})}}function me(l,e,t){const s=l.slice();return s[5]=e[t][0],s[6]=e[t][1],s}function _e(l){let e,t=l[5]+"",s;return{c(){e=_("a"),s=Z(t),this.h()},l(n){e=g(n,"A",{class:!0,href:!0});var u=L(e);s=ee(u,t),u.forEach(T),this.h()},h(){m(e,"class","btn btn-secondary btn-wide"),m(e,"href",l[6])},m(n,u){G(n,e,u),a(e,s)},p:ve,d(n){n&&T(e)}}}function $e(l){let e,t='<img src="/images/smallest_violin_hamster_me.png" alt="smallest violin hamster meme but me"/> <p>pls follow</p>';return{c(){e=_("div"),e.innerHTML=t,this.h()},l(s){e=g(s,"DIV",{class:!0,"data-svelte-h":!0}),N(e)!=="svelte-1885qpn"&&(e.innerHTML=t),this.h()},h(){m(e,"class","items-center justify-center text-center")},m(s,n){G(s,e,n)},p:ve,d(s){s&&T(e)}}}function Be(l){let e,t,s,n,u='<div class="w-24 rounded-full"><img src="/images/jeef.arts_logo.png" alt="Avatar"/></div>',C,p,b="Jeff Ng",M,x,k='<span class="text-sm text-gray-500">artist ·</span> <span class="text-sm text-gray-500">software engineer</span> <span class="text-sm text-gray-500">· human</span>',V,A,d,c,E,w="See my website",o,f,h,$,J,O,te="still unsure? click me",P,j,K,F,Q,se,B=ue(Object.entries(Y.socialMediaLinks)),v=[];for(let i=0;i<B.length;i+=1)v[i]=_e(me(l,B,i));h=new He({props:{class:"h-6 w-6 shrink-0"}});function Me(i){l[3](i)}let le={closeText:"yes i will :)",closeDialogAction:l[2],$$slots:{default:[$e]},$$scope:{ctx:l}};return l[0]!==void 0&&(le.showModal=l[0]),j=new Oe({props:le}),pe.push(()=>ye(j,"showModal",Me)),{c(){e=_("div"),t=_("div"),s=_("div"),n=_("div"),n.innerHTML=u,C=I(),p=_("h1"),p.textContent=b,M=I(),x=_("div"),x.innerHTML=k,V=I(),A=_("div");for(let i=0;i<v.length;i+=1)v[i].c();d=I(),c=_("div"),E=_("a"),E.textContent=w,o=I(),f=_("a"),re(h.$$.fragment),$=Z("Mail me"),J=I(),O=_("button"),O.textContent=te,P=I(),re(j.$$.fragment),this.h()},l(i){e=g(i,"DIV",{class:!0});var D=L(e);t=g(D,"DIV",{class:!0});var y=L(t);s=g(y,"DIV",{class:!0});var r=L(s);n=g(r,"DIV",{class:!0,"data-svelte-h":!0}),N(n)!=="svelte-1sof6co"&&(n.innerHTML=u),C=H(r),p=g(r,"H1",{class:!0,"data-svelte-h":!0}),N(p)!=="svelte-1ww8idk"&&(p.textContent=b),M=H(r),x=g(r,"DIV",{class:!0,"data-svelte-h":!0}),N(x)!=="svelte-s5leea"&&(x.innerHTML=k),V=H(r),A=g(r,"DIV",{class:!0});var S=L(A);for(let X=0;X<v.length;X+=1)v[X].l(S);S.forEach(T),d=H(r),c=g(r,"DIV",{class:!0});var R=L(c);E=g(R,"A",{class:!0,href:!0,"data-svelte-h":!0}),N(E)!=="svelte-blojh7"&&(E.textContent=w),o=H(R),f=g(R,"A",{class:!0,href:!0});var W=L(f);ce(h.$$.fragment,W),$=ee(W,"Mail me"),W.forEach(T),R.forEach(T),r.forEach(T),y.forEach(T),J=H(D),O=g(D,"BUTTON",{class:!0,"data-svelte-h":!0}),N(O)!=="svelte-19lrprp"&&(O.textContent=te),P=H(D),ce(j.$$.fragment,D),D.forEach(T),this.h()},h(){m(n,"class","avatar mt-4"),m(p,"class","mt-4 text-xl font-medium"),m(x,"class","mt-4 flex space-x-3 md:mt-6 rtl:space-x-reverse"),m(A,"class","mt-8 grid grid-rows-none gap-2"),m(E,"class","btn btn-accent"),m(E,"href","./"),m(f,"class","btn btn-outline btn-accent dark:text-white"),m(f,"href",`mailto:${Y.email}`),m(c,"class","mt-4 flex space-x-3 md:mt-6 rtl:space-x-reverse"),m(s,"class","flex flex-col items-center pb-4"),m(t,"class","card bg-primary w-72 shadow-xl md:w-96"),m(O,"class","btn btn-outline mt-8"),m(e,"class","flex h-screen flex-col items-center justify-center")},m(i,D){G(i,e,D),a(e,t),a(t,s),a(s,n),a(s,C),a(s,p),a(s,M),a(s,x),a(s,V),a(s,A);for(let y=0;y<v.length;y+=1)v[y]&&v[y].m(A,null);a(s,d),a(s,c),a(c,E),a(c,o),a(c,f),de(h,f,null),a(f,$),a(e,J),a(e,O),a(e,P),de(j,e,null),F=!0,Q||(se=q(O,"click",l[1]),Q=!0)},p(i,[D]){if(D&0){B=ue(Object.entries(Y.socialMediaLinks));let r;for(r=0;r<B.length;r+=1){const S=me(i,B,r);v[r]?v[r].p(S,D):(v[r]=_e(S),v[r].c(),v[r].m(A,null))}for(;r<v.length;r+=1)v[r].d(1);v.length=B.length}const y={};D&512&&(y.$$scope={dirty:D,ctx:i}),!K&&D&1&&(K=!0,y.showModal=i[0],De(()=>K=!1)),j.$set(y)},i(i){F||(U(h.$$.fragment,i),U(j.$$.fragment,i),F=!0)},o(i){z(h.$$.fragment,i),z(j.$$.fragment,i),F=!1},d(i){i&&T(e),Ie(v,i),fe(h),fe(j),Q=!1,se()}}}function Ne(l,e,t){let s=!1,n;Te(()=>{n=new Audio("/audio/sad_hampster_violin_meme.mp3")});const u=()=>{t(0,s=!0),n.play()},C=()=>{n.pause(),n.currentTime=0};function p(b){s=b,t(0,s)}return[s,u,C,p]}class Ge extends be{constructor(e){super(),we(this,e,Ne,Be,ge,{})}}export{Ge as component};
