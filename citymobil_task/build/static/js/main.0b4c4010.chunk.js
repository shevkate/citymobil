(this.webpackJsonpcitymobil_task=this.webpackJsonpcitymobil_task||[]).push([[0],{22:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var c=n(2),r=n.n(c),a=n(16),i=n.n(a),o=(n(22),n(7)),s=n(3),u=n(17),l=n.n(u),b=n(0);var j=function(){var t=Object(c.useState)(void 0),e=Object(s.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(!0),i=Object(s.a)(a,2),u=i[0],j=i[1],f=Object(c.useState)(null),d=Object(s.a)(f,2),O=d[0],m=d[1],h=Object(c.useState)(""),p=Object(s.a)(h,2),x=p[0],v=p[1],g=Object(c.useState)(""),y=Object(s.a)(g,2),C=y[0],S=y[1],k=Object(c.useState)(""),N=Object(s.a)(k,2),L=N[0],w=N[1];if(Object(c.useEffect)((function(){l()("https://city-mobil.ru/api/cars").then((function(t){m(t.data)}))}),[]),!O)return"Loading...";var F=["\u041c\u0430\u0440\u043a\u0430 \u0438 \u043c\u043e\u0434\u0435\u043b\u044c"].concat(Object(o.a)(O.tariffs_list)),_=O.cars.map((function(t,e){return["".concat(t.mark," ").concat(t.model)].concat(Object(o.a)(O.tariffs_list.map((function(e,n){var c=t.tariffs[e];return c?c.year:"-"}))))})),B=n?_.sort((function(t,e){var c=F.indexOf(n),r=t[c],a=e[c];return u?"-"===a||r<a?-1:1:"-"===r||r<a?1:-1})):_,D=0===C.length?B:B.filter((function(t){for(var e=0;e<t.length;e++)if(String(t[e]).toLowerCase().includes(C))return!0;return!1}));return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("form",{className:"form-inline",children:[Object(b.jsx)("div",{className:"form-group mx-sm-3 mb-2",children:Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"\u041f\u043e\u0438\u0441\u043a",onChange:function(t){v(t.target.value)}})}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary mb-2",onClick:function(t){t.preventDefault(),S(x.trim().toLowerCase())},children:"\u041d\u0430\u0439\u0442\u0438"})]}),Object(b.jsxs)("table",{className:"table",children:[Object(b.jsx)("thead",{children:Object(b.jsx)("tr",{children:F.map((function(t,e){return Object(b.jsx)("th",{scope:"col",onClick:function(){return function(t){t!==n?(r(t),j(!0)):u?j(!1):r(void 0)}(t)},children:"".concat(t).concat(t===n?u?" \u2191":" \u2193":"")},e)}))})}),Object(b.jsx)("tbody",{children:D.map((function(t,e){return Object(b.jsx)("tr",{children:t.map((function(e,n){return Object(b.jsx)("td",{onClick:function(){w(0===n||"-"===e?"":"\u0412\u044b \u0432\u044b\u0431\u0440\u0430\u043b\u0438 ".concat(t[0]," ").concat(e," \u0433\u043e\u0434\u0430"))},children:e},n)}))},e)}))})]}),L?Object(b.jsx)("div",{children:L}):null]})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),a(t),i(t)}))};n(42);i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(j,{})}),document.getElementById("root")),f()}},[[43,1,2]]]);
//# sourceMappingURL=main.0b4c4010.chunk.js.map