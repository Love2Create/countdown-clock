(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{15:function(e,t,r){},16:function(e,t,r){},18:function(e,t,r){},19:function(e,t,r){},20:function(e,t,r){"use strict";r.r(t);var c=r(6),n=r.n(c),s=(r(15),r(3)),a=r(4),u=r(2),i=(r(16),r(0)),b=function(e){return Object(i.jsx)("div",{className:"number-wrapper__individual_digit_main",children:Object(i.jsxs)("div",{className:e.currentNumber!==e.nextNumber?"numbers--group__wrapper updating":"numbers--group__wrapper",children:[Object(i.jsx)("div",{className:"numbers--bottom",children:Object(i.jsx)("p",{children:e.currentNumber})}),Object(i.jsx)("div",{className:"numbers--top",children:Object(i.jsx)("p",{children:e.nextNumber})}),Object(i.jsx)("div",{className:"numbers--top",children:Object(i.jsx)("p",{children:e.nextNumber})}),Object(i.jsx)("div",{className:"numbers--top flipper",children:Object(i.jsx)("p",{children:e.currentNumber})}),Object(i.jsx)("div",{className:"numbers--top flipper nextValue",children:Object(i.jsx)("p",{children:e.nextNumber})})]})})},j=(r(18),function(e){var t=function(e){var t=e.toString();return t.length>1?t.split(""):["0",t]},r=t(e.currentNumber),c=t(e.nextNumber);return Object(i.jsxs)("div",{className:"numberPair--container",children:[Object(i.jsxs)("div",{className:"numberPair--wrapper__main",children:[Object(i.jsx)(b,{currentNumber:r[0],nextNumber:c[0]}),Object(i.jsx)("div",{className:"digit--spacer"}),Object(i.jsx)(b,{currentNumber:r[1],nextNumber:c[1]})]}),Object(i.jsx)("div",{children:Object(i.jsx)("h2",{className:"pairName",children:e.groupName})})]})}),m=(r(19),r(1)),d=function(){var e=Object(m.useState)(0),t=Object(u.a)(e,2),r=t[0],c=t[1],n=Object(m.useState)(0),b=Object(u.a)(n,2),d=b[0],l=b[1],p=Object(m.useState)(0),O=Object(u.a)(p,2),o=O[0],x=O[1],N=Object(m.useState)(0),h=Object(u.a)(N,2),v=h[0],g=h[1],f=Object(m.useState)(0),w=Object(u.a)(f,2),_=w[0],S=w[1],k=Object(m.useState)(0),y=Object(u.a)(k,2),D=y[0],T=y[1],P=Object(m.useState)(0),I=Object(u.a)(P,2),J=I[0],M=I[1],B=Object(m.useState)(0),E=Object(u.a)(B,2),H=E[0],R=E[1],V=["days","hours","minutes","seconds"],q=new Date("08/03/2022"),z=function(){var e=Object(a.a)(Object(s.a)().mark((function e(){var t,r,n,a,u,i,b;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Date((new Date).getTime()+0),r=q.getTime()+0-t.getTime(),n=new Date(r),a=Math.ceil(r/864e5),u=n.getSeconds(),R(u),i=n.getMinutes(),M(i),b=n.getHours(),T(b),S(a),e.next=13,new Promise((function(e){return setTimeout(e,500)}));case 13:g(u),x(i),l(b),c(a);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();setInterval((function(){z()}),1e3);return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"clock--wrapper__main",children:[Object(i.jsx)(j,{currentNumber:r,nextNumber:_,groupName:V[0]}),Object(i.jsx)("div",{className:"day--spacer"}),Object(i.jsx)(j,{currentNumber:d,nextNumber:D,groupName:V[1]}),Object(i.jsx)("div",{className:"time--spacer",children:Object(i.jsx)("p",{children:":"})}),Object(i.jsx)(j,{currentNumber:o,nextNumber:J,groupName:V[2]}),Object(i.jsx)("div",{className:"time--spacer",children:Object(i.jsx)("p",{children:":"})}),Object(i.jsx)(j,{currentNumber:v,nextNumber:H,groupName:V[3]})]})})};var l=function(){return Object(i.jsx)("div",{className:"clock--wrapper__main",children:Object(i.jsx)(d,{})})};n.a.createRoot(document.getElementById("root")).render(Object(i.jsx)(l,{}))}},[[20,1,2]]]);
//# sourceMappingURL=main.8824f2f7.chunk.js.map