(this.webpackJsonphookpra=this.webpackJsonphookpra||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(5),c=n.n(r),l=(n(12),n(6)),u=n(2),i=n(15),s=Object(a.createContext)(),m=function(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),r=n[0],c=n[1];return o.a.createElement(s.Provider,{value:{books:r,addBook:function(e,t){c([].concat(Object(l.a)(r),[{title:e,author:t,id:Object(i.a)()}]))},removeBook:function(e){c(r.filter((function(t){return t.id!==e})))}}},e.children)},d=function(){var e=Object(a.useContext)(s).books;return o.a.createElement("div",{className:"navbar"},o.a.createElement("h1",null,"Reading List"),o.a.createElement("p",null,"Currently you have ",e.length," books to get through..."))},v=function(e){var t=e.book,n=Object(a.useContext)(s).removeBook;return o.a.createElement("li",{onClick:function(){return n(t.id)}},o.a.createElement("div",{className:"title"},t.title),o.a.createElement("div",{className:"author"},t.author))},b=function(){var e=Object(a.useContext)(s).books;return e.length?o.a.createElement("div",{className:"book-list"},o.a.createElement("ul",null,e.map((function(e){return o.a.createElement(v,{book:e,keys:e.id})})))):o.a.createElement("div",{className:"empty"},"No books to read. Hello free time :)")},h=function(){var e=Object(a.useContext)(s).addBook,t=Object(a.useState)(""),n=Object(u.a)(t,2),r=n[0],c=n[1],l=Object(a.useState)(""),i=Object(u.a)(l,2),m=i[0],d=i[1];return o.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e(r,m),c(""),d("")}},o.a.createElement("input",{type:"text",placeholder:"book title",value:r,onChange:function(e){return c(e.target.value)},required:!0}),o.a.createElement("input",{type:"text",placeholder:"Author",value:m,onChange:function(e){return d(e.target.value)},required:!0}),o.a.createElement("input",{type:"submit",value:"add book"}))};var f=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(m,null,o.a.createElement(d,null),o.a.createElement(b,null),o.a.createElement(h,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.d9cadbfd.chunk.js.map