(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,a,t){e.exports=t.p+"static/media/logo.2d7fb50e.png"},,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/myVideo.f8d96297.mp4"},function(e,a,t){e.exports=t(37)},,,,,function(e,a,t){},,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/bg.ec8d4276.jpg"},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(12),r=t.n(c),i=(t(20),t(2)),m=t(3),o=t(6),s=t(4),u=t(7),d=t(13),p=t(9),E=t.n(p),g=(t(25),{apiKey:"AIzaSyCWLaBepo1zTgVCbshvPDG3XwpeAZ41-Vw",authDomain:"coderslab-f5f9d.firebaseapp.com",databaseURL:"https://coderslab-f5f9d.firebaseio.com",projectId:"coderslab-f5f9d",storageBucket:"coderslab-f5f9d.appspot.com",messagingSenderId:"790109108552",appId:"1:790109108552:web:3f286551bf55f70d"}),f=t(10),v=(t(27),t(5)),b=t.n(v);var h=function(){var e;return l.a.createElement("header",{className:"page-header"},l.a.createElement("div",{className:"container"},l.a.createElement("img",(e={src:b.a,className:"page-logo"},Object(f.a)(e,"className","page-logo-img"),Object(f.a)(e,"alt","Bartosz Lis"),e)),l.a.createElement("nav",{className:"page-nav"},l.a.createElement("ul",{className:"page-nav-list"},l.a.createElement("li",null,l.a.createElement("a",{href:"#start"},"HOME PAGE")),l.a.createElement("li",null,l.a.createElement("a",{href:"#ourCourses"},"ABOUT")),l.a.createElement("li",null,l.a.createElement("a",{href:"#aboutUs"},"PORTFOLIO")),l.a.createElement("li",null,l.a.createElement("a",{href:"#mainContact"},"CONTACT"))))))};t(28);var N=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"box1"},l.a.createElement("div",{className:"avatar"},l.a.createElement("div",{className:"description"},l.a.createElement("br",null),l.a.createElement("span",null,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum error iusto, natus, ea possimus laborum soluta maxime officia unde")))),l.a.createElement("div",{className:"box2"},l.a.createElement("div",{className:"descriptionRight"},l.a.createElement("div",{className:"nameSizes"},"I'm Bartek"),l.a.createElement("div",{className:"contentSizes"},"Frontend Developer"))))))};t(29),t(30);var w=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"projects"},l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"item-info"},l.a.createElement("h2",null,"Project Portfolio"),l.a.createElement("span",null,"13 december, 2014"))),l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"item-info"},l.a.createElement("h2",null,"Project Shop"),l.a.createElement("span",null,"13 december, 2014"))),l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"item-info"},l.a.createElement("h2",null,"Project Title"),l.a.createElement("span",null,"13 december, 2014")))))};t(31);var y=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"contact"},l.a.createElement("span",{className:"contact-title"},"Kontakt"),l.a.createElement("span",{className:"ask_me_question"},"Zadaj mi pytanie"),l.a.createElement("form",{className:"contact_form"},l.a.createElement("div",{className:"div1"},l.a.createElement("input",{type:"text",className:"input1",placeholder:"Twoje imie"})),l.a.createElement("div",{className:"div1"},l.a.createElement("input",{type:"text",className:"input1",placeholder:"Tw\xf3j email"})),l.a.createElement("div",{className:"div2"},l.a.createElement("textarea",{className:"textarea_message",placeholder:"Wiadomo\u015b\u0107"})),l.a.createElement("input",{type:"submit",className:"btn-submit",value:"Wy\u015blij"}))))},j=(t(32),t(14)),O=t.n(j);var k=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,id:"myVideo"},l.a.createElement("source",{src:O.a,type:"video/mp4"})))};t(33);var F=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{id:"login-form",action:"#",method:"post"},l.a.createElement("fieldset",{className:"button-top"},l.a.createElement("label",{id:"label",htmlFor:"login"},"Email"),l.a.createElement("input",{className:"inputForm",type:"text",id:"login",name:"login"}),l.a.createElement("div",{className:"clearForm"}),l.a.createElement("label",{id:"label",htmlFor:"password"},"Password"),l.a.createElement("input",{className:"inputForm",type:"password",id:"password",name:"password"}),l.a.createElement("div",{className:"clearForm"}),"Sign in with Google",l.a.createElement("br",null),l.a.createElement("input",{type:"submit",className:"button",name:"commit",value:"Log in"}))))},x=(t(34),t(35),t(36),n.Component,E.a.initializeApp(g).auth()),I={googleProvider:new E.a.auth.GoogleAuthProvider},A=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(s.a)(a).call(this,e))).state={loading:!1},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),setTimeout(function(){e.setState({loading:!1})},3e3)}},{key:"render",value:function(){var e=this.props,a=e.user,t=e.signOut,n=e.signInWithGoogle;return this.state.loading?l.a.createElement("div",{className:"loading"},l.a.createElement("img",{src:"https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"})):l.a.createElement(l.a.Fragment,null,a?l.a.createElement("div",{className:"site"},l.a.createElement(k,null),l.a.createElement("div",{className:"backgroundOpacity"},l.a.createElement(F,null),l.a.createElement("div",{className:"background"},l.a.createElement(h,null),l.a.createElement(N,null)),l.a.createElement(w,null),l.a.createElement(y,null))):l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("img",{src:b.a,className:"App-logo",alt:"logo"}),a?l.a.createElement("p",null,"Hello, ",a.displayName):l.a.createElement("p",null,"Please sign in."),a?l.a.createElement("button",{onClick:t},"Sign out"):l.a.createElement("button",{onClick:n},"Sign in with Google"))))}}]),a}(n.Component),P=Object(d.a)({providers:I,firebaseAppAuth:x})(A);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[15,1,2]]]);
//# sourceMappingURL=main.8736974d.chunk.js.map