(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{49:function(n,e,t){"use strict";t.r(e);var r,c,o,a,i,s,d,u,l,j,b,h,x,f,p,O,g,m,k,w,v,y,z,T,C,D,S,E=t(0),L=t.n(E),F=t(22),U=t.n(F),I=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,50)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,o=e.getLCP,a=e.getTTFB;t(n),r(n),c(n),o(n),a(n)}))},N=t(4),P=t(9),H=t(5),J=Object(N.b)(r||(r=Object(H.a)(["\n    html {\n        box-sizing: border-box;\n    }\n\n    *, ::after, ::before {\n        box-sizing: inherit;\n    }\n\n    body {\n        background-color: ",";\n    }\n"])),(function(n){return n.theme.colors.grey})),R=t(19),A=t(8),G=N.d.main(c||(c=Object(H.a)(["\n    font-family: 'Lato', sans-serif;\n    margin: 0 auto;\n    max-width: 900px;\n    padding: 20px;\n"]))),B=t(2),M=function(n){var e=n.children;return Object(B.jsx)(G,{children:e})},W=function(n){var e=n.title;return Object(B.jsx)("header",{children:Object(B.jsx)("h1",{children:e})})},Z=N.d.section(o||(o=Object(H.a)(["\n    background-color: ",";\n    margin-bottom: 10px;\n"])),(function(n){return n.theme.colors.white})),q=N.d.header(a||(a=Object(H.a)(["  \n    display: grid;\n    grid-template-columns: auto auto;\n    grid-gap: 20px;\n    justify-content: space-between;\n    border-bottom: 2px solid ",";\n    align-items: center;\n    padding: 20px;\n\n\n    @media (max-width: ","px) {\n        grid-template-columns: 1fr;  \n    }\n"])),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.breakpoints.mobile})),K=N.d.h2(i||(i=Object(H.a)(["\n    font-size: 20px;\n    font-weight: bold;\n    padding: 30px;\n    margin-bottom: 2px;\n\n    ","\n"])),(function(n){return n.tasks&&Object(N.c)(s||(s=Object(H.a)(["\n        font-size: 20px;\n        font-weight: bold;\n        padding: 0px 20px;\n    "])))})),Q=function(n){var e=n.title,t=n.body,r=n.extraHeaderContent;return Object(B.jsxs)(Z,{children:[Object(B.jsxs)(q,{children:[Object(B.jsx)(K,{tasks:!0,children:e}),r]}),t]})},V=N.d.div(d||(d=Object(H.a)(["  \n    padding-bottom: 20px;\n    margin: 30px;\n    text-align: justify;\n"]))),X=function(){return Object(B.jsxs)(M,{children:[Object(B.jsx)(W,{title:"O autorze"}),Object(B.jsx)(Q,{title:"Anna \u015aniegu\u0142a",body:Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)(V,{children:[Object(B.jsx)("p",{children:"Szukaj\u0105c nowych \u015bcie\u017cek zawodowych i rozwojowych wybra\u0142am programowanie. Tworzenie czego\u015b od pocz\u0105tku, a przy tym obserwacja wizualnego efektu moich wysi\u0142k\xf3w, sprawiaj\u0105 mi bardzo du\u017c\u0105 satysfakcj\u0119. \ud83d\udd25"}),Object(B.jsx)("p",{children:"Godziny sp\u0119dzone przy komputerze r\xf3wnowa\u017c\u0119 aktywno\u015bci\u0105 fizyczn\u0105. Miesi\u0105ce ciep\u0142e sp\u0119dzam na \u015bwie\u017cym powietrzu. Lubi\u0119 biega\u0107, je\u017adzi\u0107 rowerem, spacerowa\u0107 w lesie i p\u0142ywa\u0107 kajakiem. Reszt\u0119 wolnego czasu poch\u0142aniaj\u0105 mi pszczo\u0142y, kt\xf3re hodujemy wraz z m\u0119\u017cem \ud83d\udc1d. Czas jesienno-zimowy sp\u0119dzam g\u0142\xf3wnie w domu czytaj\u0105c ksi\u0105\u017cki, \u0107wicz\u0105c jog\u0119 i odlewaj\u0105c woskowe \u015bwiece. Delektuj\u0119 si\u0119 przy tym miodem z w\u0142asnej pasieki i miodem pitnym w\u0142asnej produkcji. Na zdrowie! \ud83e\udd43"})]})})})]})},Y=t(35),$=N.d.form(u||(u=Object(H.a)(["\n    background-color: ",";\n    border: 0px;\n    padding: 20px;\n    display: flex;\n    justify-content: space-between;\n\n    @media(max-width:","px) {\n        flex-direction: column;  \n    }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.breakpoints.mobile})),_=(N.d.input(l||(l=Object(H.a)([" \n    border: 2px solid ",";\n    padding: 10px;\n    flex-grow: 1;\n    margin: 10px;\n"])),(function(n){return n.theme.colors.grey})),N.d.button(j||(j=Object(H.a)(["\n    background-color: ",";\n    color: ",";\n    padding: 10px;\n    border: none;\n    font-size: 15px;\n    margin: 10px;\n    cursor: pointer;\n    transition: 0.5s linear;\n\n    &:hover {\n        filter: brightness(110%); \n        transform: scale(1.1);\n    }\n\n    &:active {\n        filter: brightness(130%); \n    }\n"])),(function(n){return n.theme.colors.teal}),(function(n){return n.theme.colors.white}))),nn=t(32),en=t(21),tn="tasks",rn=function(n){return localStorage.setItem(tn,JSON.stringify(n))},cn=Object(en.b)({name:"tasks",initialState:{tasks:JSON.parse(localStorage.getItem(tn))||[],hideDone:!1,loading:!1},reducers:{addTask:function(n,e){var t=n.tasks,r=e.payload;t.push(r)},toggleHideDone:function(n){n.hideDone=!n.hideDone},toggleTaskDone:function(n,e){var t=n.tasks,r=e.payload,c=t.findIndex((function(n){return n.id===r}));t[c].done=!t[c].done},removeTask:function(n,e){var t=n.tasks,r=e.payload,c=t.findIndex((function(n){return n.id===r}));t.splice(c,1)},setAllDone:function(n){var e,t=n.tasks,r=Object(nn.a)(t);try{for(r.s();!(e=r.n()).done;){e.value.done=!0}}catch(c){r.e(c)}finally{r.f()}},fetchExampleTasks:function(n){n.loading=!0},fetchExampleTasksSuccess:function(n,e){var t=e.payload;n.tasks=t,n.loading=!1},fetchExampleTasksError:function(n){n.loading=!1},setTasks:function(n,e){var t=e.payload;n.tasks=t}}}),on=cn.actions,an=on.addTask,sn=on.toggleHideDone,dn=on.toggleTaskDone,un=on.removeTask,ln=on.setAllDone,jn=on.fetchExampleTasks,bn=(on.setTasks,on.fetchExampleTasksSuccess),hn=on.fetchExampleTasksError,xn=function(n){return n.tasks},fn=function(n){return xn(n).tasks},pn=function(n){return xn(n).hideDone},On=function(n){return fn(n).every((function(n){return n.done}))},gn=function(n){return xn(n).loading},mn=cn.reducer,kn=N.d.input(b||(b=Object(H.a)([" \nborder: 2px solid ",";\npadding: 10px;\nflex-grow: 1;\nmargin: 10px;\n"])),(function(n){return n.theme.colors.grey})),wn=function(){var n=Object(E.useState)(""),e=Object(Y.a)(n,2),t=e[0],r=e[1],c=Object(E.useRef)(null),o=Object(P.b)();return Object(B.jsxs)($,{onSubmit:function(n){n.preventDefault(),""!==t.trim()&&(o(an({content:t,done:!1,id:Object(en.c)()})),r(""),c.current.focus())},children:[Object(B.jsx)(kn,{ref:c,value:t,type:"text",placeholder:"Co jest do zrobienia?",onChange:function(n){var e=n.target;return r(e.value)}}),Object(B.jsx)(_,{children:"Dodaj zadanie"})]})},vn=Object(N.d)(R.b)(h||(h=Object(H.a)(["\ntext-decoration: none;\ncolor:",";\n\n    &:hover{\n        text-decoration: underline;\n        color: ",";\n    }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.teal})),yn=N.d.ul(x||(x=Object(H.a)(["\n    background-color: ",";\n    padding: 30px;\n    margin: 0;\n"])),(function(n){return n.theme.colors.white})),zn=N.d.li(f||(f=Object(H.a)(["  \n    border-bottom: 1px solid ",";\n    display: grid;\n    align-items: center;\n    padding: 5px;\n    grid-template-columns: auto 1fr auto;\n    grid-gap: 15px;\n\n    ","\n"])),(function(n){return n.theme.colors.grey}),(function(n){return n.hidden&&Object(N.c)(p||(p=Object(H.a)(["\n        display: none;\n    "])))})),Tn=N.d.span(O||(O=Object(H.a)(["\n    word-break: break-all;\n\n    ","\n"])),(function(n){return n.done&&Object(N.c)(g||(g=Object(H.a)(["\n        text-decoration: line-through;\n    "])))})),Cn=N.d.button(m||(m=Object(H.a)(["\n    width: 30px;\n    height: 30px;\n    border: none;\n    color: ",";\n    margin: 5px;\n    text-align: center;\n    transition: 0.5s linear;\n\n    ","\n\n    ","\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.toggleDone&&Object(N.c)(k||(k=Object(H.a)(["\n    background-color: ",";\n\n        &:hover {\n            filter: brightness(110%);\n        }\n\n        &:active {\n            filter: brightness(130%); \n        }\n    "])),(function(n){return n.theme.colors.green}))}),(function(n){return n.remove&&Object(N.c)(w||(w=Object(H.a)(["\n    background-color: ",";\n\n        &:hover {\n            filter: brightness(110%);\n\n        &:active {\n            filter: brightness(130%); \n        }\n    "])),(function(n){return n.theme.colors.red}))})),Dn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{id:":id"},e=n.id;return"/zadania/".concat(e)},Sn=function(n){var e=Object(A.h)();return new URLSearchParams(e.search).get(n)},En="szukaj",Ln=function(){var n=Sn(En),e=Object(P.c)((function(e){return function(n,e){var t=fn(n);return e&&""!==e?t.filter((function(n){return n.content.toUpperCase().includes(e.toUpperCase())})):t}(e,n)})),t=Object(P.c)(pn),r=Object(P.b)();return Object(B.jsx)(yn,{children:e.map((function(n){return Object(B.jsxs)(zn,{hidden:n.done&&t,children:[Object(B.jsx)(Cn,{toggleDone:!0,onClick:function(){return r(dn(n.id))},children:n.done?"\u2713":""}),Object(B.jsx)(Tn,{done:n.done,children:Object(B.jsx)(vn,{to:Dn({id:n.id}),children:n.content})}),Object(B.jsx)(Cn,{remove:!0,onClick:function(){return r(un(n.id))},children:"\ud83d\uddd1"})]},n.id)}))})},Fn=N.d.div(v||(v=Object(H.a)([" \n    display: flex;\n    flex-wrap: wrap;\n"]))),Un=N.d.button(y||(y=Object(H.a)(["\nbackground-color: ",";\ncolor: ",";\ntransition: color 0.3s;\nborder: none;\ncursor: pointer;\n\n\n@media (max-width: ","px) {\n    flex-basis: 100%;\n    flex-direction: column;\n    padding: 10px;\n    align-items: center;  \n}\n\n&:hover {\n    filter: brightness(110%);\n}\n\n&:active {\n    filter: brightness(120%);\n}\n\n&:disabled {\n    color: ",";\n}\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.teal}),(function(n){return n.theme.breakpoints.mobile}),(function(n){return n.theme.colors.darkGrey})),In=function(){var n=Object(P.c)(fn),e=Object(P.c)(pn),t=Object(P.c)(On),r=Object(P.b)();return Object(B.jsx)(Fn,{children:n.length>0&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)(Un,{onClick:function(){return r(sn())},children:[e?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(B.jsx)(Un,{onClick:function(){return r(ln())},disabled:t,children:"Uko\u0144cz wszytkie"})]})})},Nn=N.d.div(z||(z=Object(H.a)(["\ndisplay: grid;\ngrid-template-columns: 1fr;\npadding: 20px;\n"]))),Pn=function(){var n=Sn(En),e=function(){var n=Object(A.h)(),e=Object(A.g)();return function(t){var r=t.key,c=t.value,o=new URLSearchParams(n.search);void 0===c?o.delete(r):o.set(r,c);var a=o.toString();e.push("".concat(n.pathname,"?").concat(a))}}();return Object(B.jsx)(Nn,{children:Object(B.jsx)(kn,{placeholder:"Filtruj zadania",value:n||"",onChange:function(n){var t=n.target;e({key:En,value:""!==t.value?t.value:void 0})}})})},Hn=function(){var n=Object(P.b)(),e=Object(P.c)(gn);return Object(B.jsx)(Un,{disabled:e,onClick:function(){return n(jn())},children:e?"\u0141adowanie...":"Pobierz przyk\u0142adowe zadania"})},Jn=function(){return Object(B.jsxs)(M,{children:[Object(B.jsx)(W,{title:"Lista zada\u0144"}),Object(B.jsx)(Q,{title:"Dodaj nowe zadanie",body:Object(B.jsx)(wn,{}),extraHeaderContent:Object(B.jsx)(Hn,{})}),Object(B.jsx)(Q,{title:"Wyszukiwarka",body:Object(B.jsx)(Pn,{})}),Object(B.jsx)(Q,{title:"Lista zada\u0144",body:Object(B.jsx)(Ln,{}),extraHeaderContent:Object(B.jsx)(In,{})})]})},Rn=N.d.div(T||(T=Object(H.a)(["  \n    padding: 30px;\n    margin-left: 10px;\n"]))),An=function(){var n=Object(A.i)().id,e=Object(P.c)((function(e){return function(n,e){return fn(n).find((function(n){return n.id===e}))}(e,n)}));return Object(B.jsxs)(M,{children:[Object(B.jsx)(W,{title:"Szczeg\xf3\u0142y zadania"}),Object(B.jsx)(Q,{title:e?e.content:"Nie znaleziono zadania",body:!!e&&Object(B.jsxs)(Rn,{children:[Object(B.jsx)("strong",{children:"Uko\u0144czono:"})," ",e.done?"Tak":"Nie"]})})]})},Gn="link-active",Bn=Object(N.d)(R.c).attrs((function(){return{activeClassName:Gn}}))(C||(C=Object(H.a)(["\ncolor:",";\ntext-decoration: none;\nfont-size: 20px;\n\n&."," {\n    font-weight: bold;\n}\n\n&:hover {\n    border-bottom: 1px solid;\n}\n"])),(function(n){return n.theme.colors.white}),Gn),Mn=N.d.ul(D||(D=Object(H.a)(["\nbackground: ",";\nmargin: 0;\npadding: 0;\ndisplay: flex;\njustify-content: center;\nlist-style: none;\n"])),(function(n){return n.theme.colors.teal})),Wn=N.d.li(S||(S=Object(H.a)(["\nmargin: 20px;\n"]))),Zn=function(){return Object(B.jsx)("nav",{children:Object(B.jsxs)(Mn,{children:[Object(B.jsx)(Wn,{children:Object(B.jsx)(Bn,{to:"/zadania",children:"Zadania"})}),Object(B.jsx)(Wn,{children:Object(B.jsx)(Bn,{to:"/autor",children:"O autorze"})})]})})},qn=function(){return Object(B.jsxs)(R.a,{children:[Object(B.jsx)(Zn,{}),Object(B.jsxs)(A.d,{children:[Object(B.jsx)(A.b,{path:Dn(),children:Object(B.jsx)(An,{})}),Object(B.jsx)(A.b,{path:"/zadania",children:Object(B.jsx)(Jn,{})}),Object(B.jsx)(A.b,{path:"/autor",children:Object(B.jsx)(X,{})}),Object(B.jsx)(A.b,{path:"/",children:Object(B.jsx)(A.a,{to:"/zadania"})})]})]})},Kn=t(36),Qn=t(15),Vn=t.n(Qn),Xn=t(16),Yn=t(34),$n=function(){var n=Object(Yn.a)(Vn.a.mark((function n(){var e;return Vn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("todo-list-react/exampleTasks.json");case 2:return(e=n.sent).ok||new Error(e.statusText),n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),_n=Vn.a.mark(te),ne=Vn.a.mark(re),ee=Vn.a.mark(ce);function te(){var n;return Vn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Xn.b)(1e3);case 3:return e.next=5,Object(Xn.a)($n);case 5:return n=e.sent,e.next=8,Object(Xn.c)(bn(n));case 8:e.next=16;break;case 10:return e.prev=10,e.t0=e.catch(0),e.next=14,Object(Xn.c)(hn());case 14:return e.next=16,Object(Xn.a)(alert,"Co\u015b posz\u0142o nie tak!");case 16:case"end":return e.stop()}}),_n,null,[[0,10]])}function re(){var n;return Vn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Xn.d)(fn);case 2:return n=e.sent,e.next=5,Object(Xn.a)(rn,n);case 5:case"end":return e.stop()}}),ne)}function ce(){return Vn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Xn.f)(jn.type,te);case 2:return n.next=4,Object(Xn.e)("*",re);case 4:case"end":return n.stop()}}),ee)}var oe=Object(Kn.a)(),ae=Object(en.a)({reducer:{tasks:mn},middleware:[oe]});oe.run(ce);var ie=ae;U.a.render(Object(B.jsx)(L.a.StrictMode,{children:Object(B.jsx)(P.a,{store:ie,children:Object(B.jsxs)(N.a,{theme:{colors:{white:"hsl(0, 0%, 100%)",grey:"hsl(0, 0%, 93%)",darkGrey:"hsl(0, 0%, 80%)",teal:"hsl(180, 100%, 25%)",green:"hsl(120, 100%, 25%)",red:"hsl(0, 100%, 50%)",black:"hsl(0, 0%, 0%) "},breakpoints:{mobile:767}},children:[Object(B.jsx)(J,{}),Object(B.jsx)(qn,{})]})})}),document.getElementById("root")),I()}},[[49,1,2]]]);
//# sourceMappingURL=main.538d8ee5.chunk.js.map