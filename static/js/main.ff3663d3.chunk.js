(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{91:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),u=n(44),i=n.n(u),a=n(26),r=n(45),l=n.n(r),s=(n(56),n(46)),f=n(1),b=n(3),d=[[{header:[1,2,3,4,5,6,!1]}],[{font:[]}],[{list:"ordered"},{list:"bullet"}],["bold","italic","underline"],[{color:[]},{background:[]}],[{script:"sub"},{script:"super"}],[{align:[]}],["image","blockquote","code-block"],["clean"]];function j(){var e=Object(f.g)().id,t=Object(c.useState)(),n=Object(a.a)(t,2),o=n[0],u=n[1],i=Object(c.useState)(),r=Object(a.a)(i,2),j=r[0],O=r[1];Object(c.useEffect)((function(){var e=Object(s.io)("http://localhost:3001");return u(e),function(){e.disconnect()}}),[]),Object(c.useEffect)((function(){null!=o&&null!=j&&(o.once("load-document",(function(e){j.setContents(e),j.enable()})),o.emit("get-document",e))}),[o,j,e]),Object(c.useEffect)((function(){if(null!=o&&null!=j){var e=setInterval((function(){o.emit("save-document",j.getContents())}),2e3);return function(){clearInterval(e)}}}),[o,j]),Object(c.useEffect)((function(){if(null!=o&&null!=j){var e=function(e){j.updateContents(e)};return o.on("receive-changes",e),function(){o.off("receive-changes",e)}}}),[o,j]),Object(c.useEffect)((function(){if(null!=o&&null!=j){var e=function(e,t,n){"user"===n&&o.emit("send-changes",e)};return j.on("text-change",e),function(){j.off("text-change",e)}}}),[o,j]);var h=Object(c.useCallback)((function(e){if(null!=e){e.innerHTML="";var t=document.createElement("div");e.append(t);var n=new l.a(t,{theme:"snow",modules:{toolbar:d}});n.disable(),n.setText("Loading..."),O(n)}}),[]);return Object(b.jsx)("div",{className:"container",ref:h})}var O=n(48),h=n(94);var v=function(){return Object(b.jsx)(O.a,{children:Object(b.jsxs)(f.d,{children:[Object(b.jsx)(f.b,{path:"/",exact:!0,children:Object(b.jsx)(f.a,{to:"/documents/".concat(Object(h.a)())})}),Object(b.jsx)(f.b,{path:"/documents/:id",children:Object(b.jsx)(j,{})})]})})};n(91);i.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.ff3663d3.chunk.js.map