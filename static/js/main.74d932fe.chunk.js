(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),i=n(7),s=n.n(i),a=(n(13),n(8)),r=n(4),u=n(3),l=(n(14),n(0)),d=function(t){var e=t.addNewTask,n=Object(c.useState)(""),o=Object(u.a)(n,2),i=o[0],s=o[1];return Object(l.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault(),""!==i.trim()&&(e(i),s(""))},children:[Object(l.jsx)("input",{value:i,className:"form__input",type:"text",placeholder:"Co jest do zrobienia?",onChange:function(t){var e=t.target;return s(e.value)}}),Object(l.jsx)("button",{className:"form__button",children:"Dodaj zadanie"})]})},j=(n(16),function(t){var e=t.tasks,n=t.hideDone,c=t.removeTask,o=t.toggleTaskDone;return Object(l.jsx)("ul",{className:"list",children:e.map((function(t){return Object(l.jsxs)("li",{className:"list__item".concat(t.done&&n?" list__item--hidden":""),children:[Object(l.jsx)("button",{className:"list__button list__button--done",onClick:function(){return o(t.id)},children:t.done?"\u2713":""}),Object(l.jsx)("span",{className:"list__task".concat(t.done?" list__task--done":""),children:t.content}),Object(l.jsx)("button",{className:"list__button list__button--remove",onClick:function(){return c(t.id)},children:"\ud83d\uddd1"})]},t.id)}))})}),b=(n(17),function(t){var e=t.tasks,n=t.hideDone,c=t.toggleHideDone,o=t.setAllDone;return Object(l.jsx)("div",{className:"buttons",children:e.length>0&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("button",{onClick:c,className:"buttons",children:[n?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(l.jsx)("button",{onClick:o,className:"buttons",disabled:e.every((function(t){return t.done})),children:"Uko\u0144cz wszytkie"})]})})}),f=(n(18),function(t){var e=t.title,n=t.body,c=t.extraHeaderContent;return Object(l.jsxs)("section",{className:"section",children:[Object(l.jsxs)("header",{className:"section__header",children:[Object(l.jsx)("h1",{className:"section__title--tasks",children:e}),c]}),n]})}),h=function(t){var e=t.title;return Object(l.jsx)("header",{children:Object(l.jsx)("h1",{children:e})})},O=(n(19),function(t){var e=t.children;return Object(l.jsx)("main",{className:"container",children:e})});var m=function(){var t=Object(c.useState)(!1),e=Object(u.a)(t,2),n=e[0],o=e[1],i=Object(c.useState)([]),s=Object(u.a)(i,2),m=s[0],x=s[1];return Object(l.jsxs)(O,{children:[Object(l.jsx)(h,{title:"Lista zada\u0144"}),Object(l.jsx)(f,{title:"Dodaj nowe zadanie",body:Object(l.jsx)(d,{addNewTask:function(t){x((function(e){return[].concat(Object(a.a)(e),[{content:t,done:!1,id:0===e.length?1:e[e.length-1].id+1}])}))}})}),Object(l.jsx)(f,{title:"Lista zada\u0144",body:Object(l.jsx)(j,{tasks:m,hideDone:n,removeTask:function(t){x((function(e){return e.filter((function(e){return e.id!==t}))}))},toggleTaskDone:function(t){x((function(e){return e.map((function(e){return e.id===t?Object(r.a)(Object(r.a)({},e),{},{done:!e.done}):e}))}))}}),extraHeaderContent:Object(l.jsx)(b,{tasks:m,hideDone:n,toggleHideDone:function(){o((function(t){return!t}))},setAllDone:function(){x((function(t){return t.map((function(t){return Object(r.a)(Object(r.a)({},t),{},{done:!0})}))}))}})})]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),c(t),o(t),i(t),s(t)}))};s.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),x()}],[[20,1,2]]]);
//# sourceMappingURL=main.74d932fe.chunk.js.map