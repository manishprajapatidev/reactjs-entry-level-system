(this["webpackJsonpmanish-react"]=this["webpackJsonpmanish-react"]||[]).push([[0],{20:function(e,a,t){e.exports=t.p+"static/media/visitors.4544738f.png"},21:function(e,a,t){e.exports=t(37)},26:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var n=t(3),r=t(0),l=t.n(r),c=t(16);a.default=function(){var e=Object(c.a)(),a=e.handleSubmit,m=e.register,s=e.errors,o=Object(r.useState)(!1),i=Object(n.a)(o,2),u=i[0],d=i[1];return l.a.createElement("div",{className:"container contact-form"},l.a.createElement("div",{className:"contact-image"},l.a.createElement("img",{src:t(20),alt:"visitors.png"}),l.a.createElement("h3",null,"Check In")),l.a.createElement("form",{onSubmit:a((function(e){d(!0),console.log(e)}))},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"visitor_name",className:"form-control",placeholder:"Your Name *",ref:m({required:"Required"}),onChange:function(e){}}),l.a.createElement("span",{className:"form-error-msg"},s.visitor_name&&s.visitor_name.message))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"visitor_phone",className:"form-control",placeholder:"Your Phone *",ref:m({required:"Required",pattern:{value:/^\d{10}$/,message:"Invalid phone number (Only 10 digits)"}}),onChange:function(e){}}),l.a.createElement("span",{className:"form-error-msg"},s.visitor_phone&&s.visitor_phone.message)))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"visitor_email",className:"form-control",placeholder:"Your Email *",ref:m({required:"Required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"Invalid email address"}}),onChange:function(e){}}),l.a.createElement("span",{className:"form-error-msg"},s.visitor_email&&s.visitor_email.message))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"host_name",className:"form-control",placeholder:"Host Name *",ref:m({required:"Required"}),onChange:function(e){}}),l.a.createElement("span",{className:"form-error-msg"},s.host_name&&s.host_name.message)))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"host_email",className:"form-control",placeholder:"Host Email *",ref:m({required:"Required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"Invalid email address"}}),onChange:function(e){}}),l.a.createElement("span",{className:"form-error-msg"},s.host_email&&s.host_email.message))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"host_phone",className:"form-control",placeholder:"Host Phone *",ref:m({required:"Required",pattern:{value:/^\d{10}$/,message:"Invalid phone number (Only 10 digits)"}}),onChange:function(e){}}),l.a.createElement("span",{className:"form-error-msg"},s.host_phone&&s.host_phone.message)))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"form-group text-center"},l.a.createElement("button",{type:"submit",className:"btn btn-outline-primary"},u?l.a.createElement("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}):null,"\xa0 Submit"))))))}},34:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),c=t.n(l),m=(t(26),t(9)),s=t(7),o=[{path:"/check-in",exact:!0,name:"Home",component:r.a.lazy((function(){return Promise.resolve().then(t.bind(null,32))}))},{path:"/check-out",exact:!0,name:"checkout",component:r.a.lazy((function(){return t.e(3).then(t.bind(null,38))}))}],i=function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark static-top"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"Entry Level App"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(m.b,{to:"/check-in",className:"nav-link"},"Check In ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item active"},r.a.createElement(m.b,{to:"/check-out",className:"nav-link"},"Check Out ",r.a.createElement("span",{className:"sr-only"},"(current)"))))))),r.a.createElement(n.Suspense,{fallback:"loading()"},r.a.createElement(s.d,null,o.map((function(e,a){return e.component?r.a.createElement(s.b,{key:a,path:e.path,exact:e.exact,name:e.name,render:function(a){return r.a.createElement(e.component,a)}}):null})),r.a.createElement(s.a,{from:"/",to:"/check-in"}))))},u=function(){return r.a.createElement("div",{className:""},r.a.createElement(i,null))},d=function(){return r.a.createElement("div",{className:""})},p=function(e){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement(u,null),e.children,r.a.createElement(d,null))};t(32),t(34);var v=function(){return r.a.createElement(m.a,null,r.a.createElement(p,null,r.a.createElement(s.b,{path:"/"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(35),t(36);c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.6afe85d4.chunk.js.map