(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{15:function(e,t,r){},16:function(e,t,r){},18:function(e,t,r){},19:function(e,t,r){},20:function(e,t,r){"use strict";r.r(t);var n=r(5),c=r.n(n),s=(r(15),r(2)),a=r(3),u=r(6),i=(r(16),r(0)),b=function(e){return Object(i.jsx)("div",{className:"number-wrapper__individual_digit_main",children:Object(i.jsxs)("div",{className:e.currentNumber!==e.nextNumber?"numbers--group__wrapper updating":"numbers--group__wrapper",children:[Object(i.jsx)("div",{className:"numbers--bottom",children:Object(i.jsx)("p",{children:e.currentNumber})}),Object(i.jsx)("div",{className:"numbers--top","aria-hidden":"true",children:Object(i.jsx)("p",{children:e.nextNumber})}),Object(i.jsx)("div",{className:"numbers--top","aria-hidden":"true",children:Object(i.jsx)("p",{children:e.nextNumber})}),Object(i.jsx)("div",{className:"numbers--top flipper","aria-hidden":"true",children:Object(i.jsx)("p",{children:e.currentNumber})}),Object(i.jsx)("div",{className:"numbers--top flipper nextValue","aria-hidden":"true",children:Object(i.jsx)("p",{children:e.nextNumber})})]})})},j=(r(18),function(e){var t=function(e){var t=e.toString();return t.length>1?t.split(""):["0",t]},r=t(e.currentNumber),n=t(e.nextNumber);return Object(i.jsxs)("div",{className:"numberPair--container",children:[Object(i.jsxs)("div",{className:"numberPair--wrapper__main",children:[Object(i.jsx)(b,{currentNumber:r[0],nextNumber:n[0]}),Object(i.jsx)("div",{className:"digit--spacer"}),Object(i.jsx)(b,{currentNumber:r[1],nextNumber:n[1]})]}),Object(i.jsx)("div",{children:Object(i.jsx)("h2",{className:"pairName",children:e.groupName})})]})}),d=(r(19),r(1)),o=function(){var e=Object(d.useState)(0),t=Object(s.a)(e,2),r=t[0],n=t[1],c=Object(d.useState)(0),b=Object(s.a)(c,2),o=b[0],m=b[1],l=Object(d.useState)(0),O=Object(s.a)(l,2),p=O[0],x=O[1],h=Object(d.useState)(0),N=Object(s.a)(h,2),v=N[0],f=N[1],g=Object(d.useState)(0),w=Object(s.a)(g,2),S=w[0],_=w[1],y=Object(d.useState)(0),M=Object(s.a)(y,2),k=M[0],T=M[1],D=Object(d.useState)(0),z=Object(s.a)(D,2),P=z[0],C=z[1],E=Object(d.useState)(0),I=Object(s.a)(E,2),J=I[0],U=I[1],B=["days","hours","minutes","seconds"],L=new Date("08-03-2022 08:03:00").toUTCString(),R=new Date(L).getTime(),V=function(e){var t=(new Date).toUTCString(),r=(e-new Date(t).getTime())/1e3,n=Math.round(Math.floor(r/86400));r-=86400*n;var c=Math.round(Math.floor(r/3600)%24);r-=3600*c;var s=Math.round(Math.floor(r/60)%60);r-=60*s;var a=Math.round(r%60);return{days:n,hours:24===c?0:c,minutes:60===s?0:s,seconds:60===a?0:a}},q=function(){var e=Object(u.a)(Object(a.a)().mark((function e(){var t,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=V(R),r=t.days<0?0:1,U(t.seconds*r),C(t.minutes*r),T(t.hours*r),_(t.days*r),e.next=8,new Promise((function(e){return setTimeout(e,490)}));case 8:f(t.seconds*r),x(t.minutes*r),m(t.hours*r),n(t.days*r);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return setInterval((function(){q()}),1e3),Object(i.jsx)("div",{className:"clock--shell--main",children:Object(i.jsxs)("div",{className:"clock--wrapper__main",children:[Object(i.jsx)(j,{currentNumber:r,nextNumber:S,groupName:B[0]}),Object(i.jsx)("div",{className:"day--spacer"}),Object(i.jsx)(j,{currentNumber:o,nextNumber:k,groupName:B[1]}),Object(i.jsx)("div",{className:"time--spacer",children:Object(i.jsx)("p",{children:":"})}),Object(i.jsx)(j,{currentNumber:p,nextNumber:P,groupName:B[2]}),Object(i.jsx)("div",{className:"time--spacer",children:Object(i.jsx)("p",{children:":"})}),Object(i.jsx)(j,{currentNumber:v,nextNumber:J,groupName:B[3]})]})})};var m=function(){var e=Object(d.useState)(1),t=Object(s.a)(e,2);return t[0],t[1],document.addEventListener("resize",(function(){console.log("resizing")})),console.log("resizing"),Object(i.jsx)("div",{children:Object(i.jsx)(o,{})})};c.a.createRoot(document.getElementById("root")).render(Object(i.jsx)(m,{}))}},[[20,1,2]]]);
//# sourceMappingURL=main.7b69c855.chunk.js.map