import{l as V,q as W,m as X,n as Y,o as Z,i as ee}from"../chunks/firebase.Cz7nN3zP.js";import{H as te}from"../chunks/control.CYgJF_JY.js";import{s as se,e as k,a as x,t as P,l as ae,c as w,f as d,g as y,b as q,d as A,o as _,r as D,h,i as O,j as F,F as oe,K as ne}from"../chunks/scheduler.wPVBEAb8.js";import{S as le,i as re,t as M,e as ie,b as z,c as ce,a as ue,m as me,d as fe,g as _e}from"../chunks/index.CJgKXyW2.js";import{e as G}from"../chunks/each.BCnoruRj.js";import{U as he,g as pe,a as de}from"../chunks/UserLink.DQJ_K7zy.js";function K(i,o){throw new te(i,o)}new TextEncoder;const ge=async({params:i})=>{var m,l;const o=V(ee,"users"),n=W(o,Y("username","==",i.username),X(1)),c=await Z(n),u=(m=c.docs[0])==null?void 0:m.exists(),s=(l=c.docs[0])==null?void 0:l.data();if(!u)throw K(404,"that user does not exist!");if(!s.published)throw K(403,`The profile of @${s.username} is not public!`);return{username:s.username,photoURL:s.photoURL,bio:s.bio,links:s.links??[]}},xe=Object.freeze(Object.defineProperty({__proto__:null,load:ge},Symbol.toStringTag,{value:"Module"}));function N(i,o,n){const c=i.slice();return c[1]=o[n],c}function J(i){let o,n,c,u;const s=[i[1]];let m={};for(let l=0;l<s.length;l+=1)m=ne(m,s[l]);return n=new he({props:m}),{c(){o=k("li"),ce(n.$$.fragment),c=x()},l(l){o=w(l,"LI",{});var f=q(o);ue(n.$$.fragment,f),c=y(f),f.forEach(d)},m(l,f){O(l,o,f),me(n,o,null),h(o,c),u=!0},p(l,f){const L=f&1?pe(s,[de(l[1])]):{};n.$set(L)},i(l){u||(M(n.$$.fragment,l),u=!0)},o(l){z(n.$$.fragment,l),u=!1},d(l){l&&d(o),fe(n)}}}function be(i){let o,n,c,u,s,m,l,f=i[0].username+"",L,S,p,R,T,$,U=(i[0].bio??"no bio yet...")+"",j,H,b,g;document.title=o="@"+i[0].username+" Links";let v=G(i[0].links),a=[];for(let e=0;e<v.length;e+=1)a[e]=J(N(i,v,e));const Q=e=>z(a[e],1,1,()=>{a[e]=null});return{c(){n=k("meta"),u=x(),s=k("main"),m=k("h1"),l=P("@"),L=P(f),S=x(),p=k("img"),T=x(),$=k("p"),j=P(U),H=x(),b=k("ul");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){const r=ae("svelte-1yq7ltg",document.head);n=w(r,"META",{name:!0,content:!0}),r.forEach(d),u=y(e),s=w(e,"MAIN",{class:!0});var t=q(s);m=w(t,"H1",{class:!0});var E=q(m);l=A(E,"@"),L=A(E,f),E.forEach(d),S=y(t),p=w(t,"IMG",{src:!0,alt:!0,width:!0,class:!0}),T=y(t),$=w(t,"P",{class:!0});var B=q($);j=A(B,U),B.forEach(d),H=y(t),b=w(t,"UL",{class:!0});var C=q(b);for(let I=0;I<a.length;I+=1)a[I].l(C);C.forEach(d),t.forEach(d),this.h()},h(){_(n,"name","description"),_(n,"content",c=i[0].bio),_(m,"class","text-7xl text-purple-500"),D(p.src,R=i[0].photoURL??"/user.png")||_(p,"src",R),_(p,"alt","photoURL"),_(p,"width","256"),_(p,"class","mx-auto"),_($,"class","text-xl my-8"),_(b,"class","list-none"),_(s,"class","prose text-center mx-auto mt-8")},m(e,r){h(document.head,n),O(e,u,r),O(e,s,r),h(s,m),h(m,l),h(m,L),h(s,S),h(s,p),h(s,T),h(s,$),h($,j),h(s,H),h(s,b);for(let t=0;t<a.length;t+=1)a[t]&&a[t].m(b,null);g=!0},p(e,[r]){if((!g||r&1)&&o!==(o="@"+e[0].username+" Links")&&(document.title=o),(!g||r&1&&c!==(c=e[0].bio))&&_(n,"content",c),(!g||r&1)&&f!==(f=e[0].username+"")&&F(L,f),(!g||r&1&&!D(p.src,R=e[0].photoURL??"/user.png"))&&_(p,"src",R),(!g||r&1)&&U!==(U=(e[0].bio??"no bio yet...")+"")&&F(j,U),r&1){v=G(e[0].links);let t;for(t=0;t<v.length;t+=1){const E=N(e,v,t);a[t]?(a[t].p(E,r),M(a[t],1)):(a[t]=J(E),a[t].c(),M(a[t],1),a[t].m(b,null))}for(_e(),t=v.length;t<a.length;t+=1)Q(t);ie()}},i(e){if(!g){for(let r=0;r<v.length;r+=1)M(a[r]);g=!0}},o(e){a=a.filter(Boolean);for(let r=0;r<a.length;r+=1)z(a[r]);g=!1},d(e){e&&(d(u),d(s)),d(n),oe(a,e)}}}function ve(i,o,n){let{data:c}=o;return i.$$set=u=>{"data"in u&&n(0,c=u.data)},[c]}class ye extends le{constructor(o){super(),re(this,o,ve,be,se,{data:0})}}export{ye as component,xe as universal};
