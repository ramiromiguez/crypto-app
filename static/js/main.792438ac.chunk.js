(this["webpackJsonpmi-primer-app"]=this["webpackJsonpmi-primer-app"]||[]).push([[0],{32:function(e,t,c){},34:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(36),r=c.n(s),i=(c(44),c(45),c(5)),o=c(38),j=(c(32),c(9)),l=c(2),d=a.a.createContext([]),b=function(e){var t=e.children,c=Object(n.useState)([]),a=Object(i.a)(c,2),s=a[0],r=a[1],o=Object(n.useState)(0),b=Object(i.a)(o,2),u=b[0],h=b[1];return Object(l.jsx)(d.Provider,{value:{addItems:s,setAddItems:r,CartTotalPrice:function(){if(s.length>0){var e=s.map((function(e,t){return e.price*e.stock}));return h(e.reduce((function(e,t){return e+t}))),u}return 0},RemoveItem:function(e){var t=s.filter((function(t){return t.id!==e}));r(t)},AddNewItem:function(e,t,c,n,a){var i=s.find((function(t){return t.id===e}));if(i){var o=s.filter((function(t){return t.id!==e})),l={id:e,stock:t+i.stock,price:i.price,name:i.gunName,stockLimit:i.stockLimit};return r([].concat(Object(j.a)(o),[l]))}var d={id:e,stock:t,price:a,name:n,stockLimit:c};r([].concat(Object(j.a)(s),[d]))},IsInCar:function(e){return s.find((function(t){return t.id===e}))?(console.log("Existe"),!0):(console.log("No Existe"),!1)},ClearCart:function(){r([])},StockChecker:function(e){var t=s.find((function(t){return t.id===e}));return t?t.stock:0}},children:t})},u=c(12),h=function(){var e=Object(n.useContext)(d).addItems,t=Object(n.useState)(0),c=Object(i.a)(t,2),a=c[0],s=c[1];return Object(n.useEffect)((function(){if(e.length>0){var t=e.map((function(e,t){return e.stock}));s(t.reduce((function(e,t){return e+t})))}}),[e]),e.length>0?Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)(u.b,{to:"/Cart",children:Object(l.jsx)(o.a,{className:"cart"})}),Object(l.jsx)("h5",{className:"text-light",children:a})]}):""},m=[{category:"knife",key:0},{category:"ak",key:1},{category:"m4a1-s",key:2},{category:"gloves",key:3},{category:"awp",key:4},{category:"usp-s",key:5}],O=function(){return Object(l.jsx)(l.Fragment,{children:m.map((function(e,t){return Object(l.jsxs)(u.b,{className:"nav-link active navlinks","aria-current":"page",to:"/category/".concat(e.category),children:[" ","".concat(e.category)," "]},t)}))})},x=function(){return Object(l.jsx)("nav",{className:"navbar sticky-top navbar-expand-lg navbar-dark border-bottom border-top border-white animate__animated animate__fadeInDown animate__faster",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("div",{children:Object(l.jsx)(u.b,{className:"navbar-brand",to:"/",children:"EasySkins"})}),Object(l.jsx)("div",{className:"cartWidget",children:Object(l.jsx)(h,{})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(l.jsx)(O,{className:"navlinks"})}),Object(l.jsxs)("form",{className:"d-flex",children:[Object(l.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Buscar...","aria-label":"Search"}),Object(l.jsx)("button",{className:"btn btn-outline-light",type:"submit",children:"Buscar"})]})]})]})})},f=c(4),p=c.n(f),v=c(10),N=c(13),g=(c(34),function(e){return Object(l.jsx)("div",{className:"col-6 col-md-3 item",children:Object(l.jsxs)(u.b,{to:"/item/"+e.id,className:"link",children:[Object(l.jsx)("h4",{className:"name",children:e.gunName}),Object(l.jsx)("img",{src:e.photo,alt:"",className:"photo"}),Object(l.jsxs)("h6",{children:["State: ",e.state]}),Object(l.jsxs)("h6",{children:["Float: ",e.float]}),Object(l.jsxs)("h6",{className:"price",children:["Price: ",e.price]})]})})}),k=function(e){var t=e.data;return Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsx)("div",{className:"row mx-2",children:t.map((function(e,t){return Object(l.jsx)(g,Object(v.a)({},e),t)}))})})},y=c(6),S=c(25),C=(c(35),S.a.initializeApp({apiKey:"AIzaSyAYWTx0da1fWpPa8dY0qSI8KIeZohYBaCM",authDomain:"easyskins-app.firebaseapp.com",projectId:"easyskins-app",storageBucket:"easyskins-app.appspot.com",messagingSenderId:"38083420533",appId:"1:38083420533:web:0196142b38652ad8e0733c"}).firestore()),w=function(e){var t=Object(n.useState)([]),c=Object(i.a)(t,2),a=c[0],s=c[1],r=Object(y.f)().category;Object(n.useEffect)((function(){}),[]);return Object(n.useEffect)((function(){r?C.collection("items").where("category","==",r).get().then((function(e){var t=e.docs.map((function(e){return Object(v.a)(Object(v.a)({},e.data()),{},{id:e.id})}));s(t)})):Object(N.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.collection("items").get();case 2:t=e.sent,s(t.docs.map((function(e){return Object(v.a)({id:e.id},e.data())})));case 4:case"end":return e.stop()}}),e)})))()}),[r]),Object(l.jsx)(k,{data:a})},I=function(e){var t=e.stock;return Object(l.jsx)("h2",{children:" ".concat(t," ")})},A=function(e){var t=e.stock,c=e.changeStock,n=e.maxStock,a=e.stockAlreadySelected;return Object(l.jsx)("button",{className:"btn btn-outline-light",onClick:function(){return c(t+1)},disabled:!(t<n-a),children:" +1 "})},E=function(e){var t=e.stock,c=e.changeStock;return Object(l.jsx)("button",{className:"btn btn-outline-light",onClick:function(){return c(t-1)},disabled:!(t>0),children:" -1 "})},P=function(e){var t=e.changePress,c=e.stock;return Object(l.jsx)("button",{className:"btn btn-outline-light mx-2",onClick:function(){return t(!0)},disabled:!(c>0),children:" Add to the cart"})},B=function(e){var t=Object(n.useState)(0),c=Object(i.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(!1),o=Object(i.a)(r,2),j=o[0],b=o[1],h=function(e){return s(e)},m=function(e){return b(e)},O=e.element.stock,x=e.element.id,f=e.element.gunName,p=e.element.price,v=Object(n.useContext)(d),N=v.AddNewItem,g=v.addStock,k=v.StockChecker,y=Object(n.useState)(0),S=Object(i.a)(y,2),C=S[0],w=S[1];return Object(n.useEffect)((function(){w(k(x))}),[x]),!1===j?Object(l.jsxs)("div",{className:"butonContainer text-center mt-5 mb-2",children:[Object(l.jsx)(I,{stock:a}),Object(l.jsx)(E,{stock:a,changeStock:h}),Object(l.jsx)(P,{stock:a,changePress:m}),Object(l.jsx)(A,{stock:a,changeStock:h,maxStock:O,addStock:g,stockAlreadySelected:C})]}):Object(l.jsxs)("div",{className:"butonContainer text-center mt-5 mb-2",children:[Object(l.jsx)(u.b,{className:"btn btn-outline-light m-1",to:"/Cart",onClick:function(){return N(x,a,O,f,p)},children:"Confirm Buy"}),Object(l.jsx)("button",{className:"btn btn-outline-light m-1",onClick:function(){return m(!1)},children:" Undo Buy"})]})},F=(c(53),function(e){return e.element?Object(l.jsxs)("div",{className:"cards col-sm-10 col-md-8 mx-auto my-3 border border-white rounded",children:[Object(l.jsx)("h2",{className:"text-center",children:e.element.gunName}),Object(l.jsx)("img",{src:e.element.photo,alt:""}),Object(l.jsxs)("h6",{children:["State: ",e.element.state]}),Object(l.jsxs)("h6",{children:["Float: ",e.element.float]}),Object(l.jsxs)("h6",{children:["Price: ",e.element.price]}),Object(l.jsxs)("h6",{children:["Detail: ",e.element.detail]}),Object(l.jsx)(B,{element:e.element})]}):""});var T=function(){var e=Object(y.f)().id,t=Object(n.useState)(),c=Object(i.a)(t,2),a=c[0],s=c[1];return Object(n.useEffect)((function(){Object(N.a)(p.a.mark((function t(){var c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.collection("items").doc(e).get();case 2:c=t.sent,s(Object(v.a)({id:c.id},c.data()));case 4:case"end":return t.stop()}}),t)})))()}),[e]),Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsx)(F,{element:a})})})},_=c(39),q=function(){var e=Object(_.a)(0),t=e.register,c=e.handleSubmit,a=Object(n.useContext)(d).addItems,s=Object(n.useState)(),r=Object(i.a)(s,2),o=r[0],j=r[1],b=Object(n.useState)([]),u=Object(i.a)(b,1)[0],h=Object(n.useState)([!1]),m=Object(i.a)(h,2),O=m[0],x=m[1],f=C.collection("items").where(S.a.firestore.FieldPath.documentId(),"in",a.map((function(e){return e.id}))),p=function(e){var t=function(e){return{buyer:e,items:a,date:new Date}}(e),c=C.collection("orders");try{c.add(t).then((function(e){j(e.id),x(!1)}))}catch(n){console.log("Firebase add doc error:",n)}};return Object(l.jsxs)("form",{onSubmit:c((function(e){f.get().then((function(t){var c=C.batch(),n=[];t.docs.forEach((function(e,t){e.data().stock>=a[t].stock?c.update(e.ref,{stock:e.data().stock-a[t].stock}):n.push(Object(v.a)(Object(v.a)({},e.data()),{},{id:e.id}))})),0===n.length?c.commit().then((function(){p(e)})):u(n)}))})),children:[Object(l.jsx)("h1",{children:" Name "}),Object(l.jsx)("input",Object(v.a)({},t("name",{required:!0,pattern:/^([a-zA-Z]|\s)*$/i}))),Object(l.jsx)("h1",{children:" Surname"}),Object(l.jsx)("input",Object(v.a)({},t("surname",{required:!0,pattern:/^([a-zA-Z]|\s)*$/i}))),Object(l.jsx)("h1",{children:" Email "}),Object(l.jsx)("input",Object(v.a)({},t("email",{required:!0,pattern:/[^@\s]+@[^@\s]+\.[^@\s]+/}))),Object(l.jsx)("h1",{children:" Phone "}),Object(l.jsx)("input",Object(v.a)({},t("phone",{required:!0}))),O?Object(l.jsx)("input",{type:"submit"}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h4",{children:"Thanks for buying!"}),Object(l.jsxs)("h6",{children:["Your purchase id is ",o," "]})]})]})},z=q,D=function(e){var t=Object(n.useContext)(d).RemoveItem;return Object(l.jsxs)("div",{className:"row border-bottom text-center my-2",children:[Object(l.jsx)("div",{className:"col-2",children:Object(l.jsx)("h4",{children:e.name})}),Object(l.jsx)("div",{className:"col-2",children:Object(l.jsx)("h4",{children:e.stock})}),Object(l.jsx)("div",{className:"col-2",children:Object(l.jsx)("h4",{children:e.price})}),Object(l.jsx)("div",{className:"col-2",children:Object(l.jsx)("h4",{children:e.price*e.stock})}),Object(l.jsx)("div",{className:"col-2",children:Object(l.jsx)("button",{className:"btn btn-outline-light mb-2",onClick:function(){return t(e.id)},children:" Remove "})}),Object(l.jsx)("div",{className:"col-2"})]})},Y=(c(54),function(){var e=Object(n.useContext)(d),t=e.addItems,c=e.CartTotalPrice,a=Object(n.useState)(0),s=Object(i.a)(a,2),r=s[0],o=s[1];return Object(n.useEffect)((function(){o(c())}),[c]),t.length>0?Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-2",children:Object(l.jsx)("h4",{children:"Name"})}),Object(l.jsx)("div",{className:"col-2",children:Object(l.jsx)("h4",{children:"Quantity"})}),Object(l.jsx)("div",{className:"col-2",children:Object(l.jsx)("h4",{children:" Price "})}),Object(l.jsx)("div",{className:"col-2",children:Object(l.jsx)("h4",{children:" Sum "})}),Object(l.jsx)("div",{className:"col-2"}),Object(l.jsx)("div",{className:"col-2",children:Object(l.jsx)("h4",{children:" Total "})})]}),Object(l.jsx)("div",{children:t.map((function(e,t){return Object(l.jsx)(D,Object(v.a)({},e),t)}))}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-2"}),Object(l.jsx)("div",{className:"col-2"}),Object(l.jsx)("div",{className:"col-2"}),Object(l.jsx)("div",{className:"col-2"}),Object(l.jsx)("div",{className:"col-2"}),Object(l.jsx)("div",{className:"col-2",children:Object(l.jsxs)("h4",{children:[" ",r," "]})})]}),Object(l.jsx)(q,{})]}):Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"row justify-content-center mt-5",children:Object(l.jsxs)("div",{className:"col-10 text-center",children:[Object(l.jsx)("h1",{className:"text-light",children:"There are no skins in the cart :("}),Object(l.jsx)("h1",{className:"text-light",children:"Go home and add some skins!"}),Object(l.jsx)(u.b,{to:"/",children:Object(l.jsx)("button",{className:"btn btn-outline-light btn-lg mt-4",children:"home"})})]})})})}),L=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(b,{children:Object(l.jsxs)(u.a,{children:[Object(l.jsx)("header",{className:"App-header",children:Object(l.jsx)(x,{})}),Object(l.jsxs)(y.c,{children:[Object(l.jsx)(y.a,{exact:!0,path:"/",children:Object(l.jsx)(w,{})}),Object(l.jsx)(y.a,{exact:!0,path:"/category/:category",children:Object(l.jsx)(w,{})}),Object(l.jsx)(y.a,{exact:!0,path:"/item/:id",children:Object(l.jsx)(T,{})}),Object(l.jsx)(y.a,{exact:!0,path:"/cart",children:Object(l.jsx)(Y,{})}),Object(l.jsx)(y.a,{exact:!0,path:"/ConfirmBuy",children:Object(l.jsx)(z,{})})]})]})})})})};r.a.render(Object(l.jsx)(L,{}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.792438ac.chunk.js.map