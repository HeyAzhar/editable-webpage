(this["webpackJsonpeditable-web"]=this["webpackJsonpeditable-web"]||[]).push([[0],{21:function(e,t,n){e.exports=n.p+"static/media/heroSec.2cb28e1b.jpg"},24:function(e,t,n){e.exports=n(37)},29:function(e,t,n){},31:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(20),i=n.n(l),r=(n(29),n(23)),c=Object(a.createContext)(),u=n(21),s=n.n(u),m=n(11),d=n(4),v=(n(30),n(31),n(17)),E=function(){var e,t,n,l,i=Object(a.useContext)(c);return o.a.createElement("div",null,o.a.createElement("img",{id:"image",alt:"Hero Section",src:null===(e=i.content)||void 0===e?void 0:e.heroImage}),o.a.createElement("h1",{className:"display-4 hero"},null===(t=i.content)||void 0===t?void 0:t.hero),o.a.createElement("div",{id:"content"},o.a.createElement("h1",{className:"display-4"},null===(n=i.content)||void 0===n?void 0:n.contentHeading),o.a.createElement("p",null,null===(l=i.content)||void 0===l?void 0:l.contentText)))},g=n(12),b=n(13),h=n(39),p=n(40),f=n(41),x=n(42),O=n(43),S=n(44),j=function(e){var t,n,l,i=e.handleSubmit,r=Object(a.useContext)(c),u=function(e){return r.setContent(Object(b.a)(Object(b.a)({},r.content),{},Object(g.a)({},e.target.id,e.target.value)))};return o.a.createElement(h.a,null,o.a.createElement("h1",{className:"p-5 text-center display-4"},"Edit The Template"),o.a.createElement(p.a,{onSubmit:i},o.a.createElement(f.a,null,o.a.createElement(x.a,{for:"hero"},"Hero Title"),o.a.createElement(O.a,{type:"text",id:"hero",value:null===(t=r.content)||void 0===t?void 0:t.hero,onChange:u})),o.a.createElement(f.a,null,o.a.createElement(x.a,{for:"heroImage"},"Hero Image"),o.a.createElement(O.a,{type:"file",id:"heroImage",onChange:function(e){return r.setContent(Object(b.a)(Object(b.a)({},r.content),{},Object(g.a)({},e.target.id,URL.createObjectURL(e.target.files[0]))))}})),o.a.createElement(f.a,null,o.a.createElement(x.a,{for:"contentHeading"},"Content Heading"),o.a.createElement(O.a,{type:"text",id:"contentHeading",value:null===(n=r.content)||void 0===n?void 0:n.contentHeading,onChange:u})),o.a.createElement(f.a,null,o.a.createElement(x.a,{for:"contentText"},"Content Text"),o.a.createElement(O.a,{type:"textarea",id:"contentText",value:null===(l=r.content)||void 0===l?void 0:l.contentText,onChange:u})),o.a.createElement(S.a,{color:"warning",onClick:i},o.a.createElement(m.b,{className:"text-dark",to:"/"},"Submit"))))};var C=function(){var e=Object(a.useState)({hero:"WEBENEFIC",heroImage:s.a,contentHeading:"Let's Make Your Online Presence Better",contentText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate auctor porta. Integer venenatis nisi pulvinar tortor finibus dictum. Duis eu metus eget elit tempor tristique et id sem. Proin eleifend tellus in nisl rhoncus semper. Sed ornare, elit vitae elementum blandit, tortor leo vestibulum lacus, mollis accumsan nibh lectus id erat. Aenean sodales, metus ut sodales luctus, ipsum nunc efficitur libero, quis viverra augue magna vitae nisl. Duis hendrerit elementum velit in posuere. Etiam convallis elementum diam eu mattis. Aenean vitae blandit ipsum. Sed mattis convallis turpis vel venenatis. Phasellus ut hendrerit est. Integer ac posuere arcu. Aliquam vel."}),t=Object(r.a)(e,2),n=t[0],l=t[1];return Object(a.useEffect)((function(){var e=sessionStorage.getItem("content");e&&l(JSON.parse(e))}),[]),o.a.createElement(m.a,{basename:"/editable-webpage"},o.a.createElement(c.Provider,{value:{content:n,setContent:l}},o.a.createElement(d.c,null,o.a.createElement(d.a,{exact:!0,path:"/"},o.a.createElement(E,null),o.a.createElement(m.b,{id:"button",to:"/edit"},o.a.createElement(v.b,null))),o.a.createElement(d.a,{exact:!0,path:"/edit"},o.a.createElement(j,{handleSubmit:function(e){e.preventDefault(),sessionStorage.setItem("content",JSON.stringify(n)),console.log(JSON.stringify(n))}}),o.a.createElement(m.b,{id:"button",to:"/"},o.a.createElement(v.a,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.7e2cde28.chunk.js.map