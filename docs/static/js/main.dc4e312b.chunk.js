(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,a,t){e.exports=t.p+"static/media/logo.2d7fb50e.png"},,,,,,,function(e,a,t){e.exports=t.p+"static/media/myVideo.f8d96297.mp4"},function(e,a,t){e.exports=t(32)},,,,,function(e,a,t){},,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/bg.ec8d4276.jpg"},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(7),r=t.n(c),m=(t(15),t(8)),i=t(4),o=t.n(i),s=(t(20),{apiKey:"AIzaSyCWLaBepo1zTgVCbshvPDG3XwpeAZ41-Vw",authDomain:"coderslab-f5f9d.firebaseapp.com",databaseURL:"https://coderslab-f5f9d.firebaseio.com",projectId:"coderslab-f5f9d",storageBucket:"coderslab-f5f9d.appspot.com",messagingSenderId:"790109108552",appId:"1:790109108552:web:3f286551bf55f70d"}),u=t(5),d=(t(22),t(2)),p=t.n(d);var E=function(){var e;return l.a.createElement("header",{className:"page-header"},l.a.createElement("div",{className:"container"},l.a.createElement("img",(e={src:p.a,className:"page-logo"},Object(u.a)(e,"className","page-logo-img"),Object(u.a)(e,"alt","Bartosz Lis"),e)),l.a.createElement("nav",{className:"page-nav"},l.a.createElement("ul",{className:"page-nav-list"},l.a.createElement("li",null,l.a.createElement("a",{href:"#start"},"HOME PAGE")),l.a.createElement("li",null,l.a.createElement("a",{href:"#ourCourses"},"ABOUT")),l.a.createElement("li",null,l.a.createElement("a",{href:"#aboutUs"},"PORTFOLIO")),l.a.createElement("li",null,l.a.createElement("a",{href:"#mainContact"},"CONTACT"))))))};t(23);var v=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"box1"},l.a.createElement("div",{className:"avatar"},l.a.createElement("div",{className:"description"},l.a.createElement("br",null),l.a.createElement("span",null,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum error iusto, natus, ea possimus laborum soluta maxime officia unde")))),l.a.createElement("div",{className:"box2"},l.a.createElement("div",{className:"descriptionRight"},l.a.createElement("div",{className:"nameSizes"},"I'm Bartek"),l.a.createElement("div",{className:"contentSizes"},"Frontend Developer"))))))};t(24),t(25);var f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"projects"},l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"item-info"},l.a.createElement("h2",null,"Project Portfolio"),l.a.createElement("span",null,"13 december, 2014"))),l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"item-info"},l.a.createElement("h2",null,"Project Shop"),l.a.createElement("span",null,"13 december, 2014"))),l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"item-info"},l.a.createElement("h2",null,"Project Title"),l.a.createElement("span",null,"13 december, 2014")))))};t(26);var g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"contact"},l.a.createElement("span",{className:"contact-title"},"Kontakt"),l.a.createElement("span",{className:"ask_me_question"},"Zadaj mi pytanie"),l.a.createElement("form",{className:"contact_form"},l.a.createElement("div",{className:"div1"},l.a.createElement("input",{type:"text",className:"input1",placeholder:"Twoje imie"})),l.a.createElement("div",{className:"div1"},l.a.createElement("input",{type:"text",className:"input1",placeholder:"Tw\xf3j email"})),l.a.createElement("div",{className:"div2"},l.a.createElement("textarea",{className:"textarea_message",placeholder:"Wiadomo\u015b\u0107"})),l.a.createElement("input",{type:"submit",className:"btn-submit",value:"Wy\u015blij"}))))},N=(t(27),t(9)),b=t.n(N);var h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,id:"myVideo"},l.a.createElement("source",{src:b.a,type:"video/mp4"})))};t(28);var w=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{id:"login-form",action:"#",method:"post"},l.a.createElement("fieldset",{className:"button-top"},l.a.createElement("label",{id:"label",htmlFor:"login"},"Email"),l.a.createElement("input",{className:"inputForm",type:"text",id:"login",name:"login"}),l.a.createElement("div",{className:"clearForm"}),l.a.createElement("label",{id:"label",htmlFor:"password"},"Password"),l.a.createElement("input",{className:"inputForm",type:"password",id:"password",name:"password"}),l.a.createElement("div",{className:"clearForm"}),"Sign in with Google",l.a.createElement("br",null),l.a.createElement("input",{type:"submit",className:"button",name:"commit",value:"Log in"}))))},y=(t(29),t(30),t(31),o.a.initializeApp(s).auth()),F={googleProvider:new o.a.auth.GoogleAuthProvider};var j=Object(m.a)({providers:F,firebaseAppAuth:y})(function(e){var a=e.user,t=e.signOut,n=e.signInWithGoogle;return l.a.createElement(l.a.Fragment,null,a?l.a.createElement("div",{className:"site"},l.a.createElement(h,null),l.a.createElement("div",{className:"backgroundOpacity"},l.a.createElement(w,null),l.a.createElement("div",{className:"background"},l.a.createElement(E,null),l.a.createElement(v,null)),l.a.createElement(f,null),l.a.createElement(g,null))):l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}),a?l.a.createElement("p",null,"Hello, ",a.displayName):l.a.createElement("p",null,"Please sign in."),a?l.a.createElement("button",{onClick:t},"Sign out"):l.a.createElement("button",{onClick:n},"Sign in with Google"))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.dc4e312b.chunk.js.map