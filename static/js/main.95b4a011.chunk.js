(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{14:function(t,e,n){t.exports={label:"ContactForm_label__2FsaR",input:"ContactForm_input__2AOWY",button:"ContactForm_button__2Nca_"}},20:function(t,e,n){t.exports={filter:"Filter_filter__ms_0I",label:"Filter_label__38-TS",input:"Filter_input__1Hwq_",castomInput:"Filter_castomInput__3Isvb"}},30:function(t,e,n){t.exports={contactsItem:"ContactListItem_contactsItem__2jQg9",button:"ContactListItem_button__2HTtU"}},41:function(t,e,n){t.exports={container:"Container_container__1qw7O"}},42:function(t,e,n){t.exports={contactList:"ContactList_contactList__3bkAf"}},54:function(t,e,n){},86:function(t,e,n){"use strict";n.r(e);var c,a,o=n(0),r=n.n(o),s=n(12),u=n.n(s),b=n(44),i=n(4),l=n(3),d=n(6),j=n(45),f=n(9),h=n(10),p={fetchContactsRequest:Object(l.b)("phonebook/fetchContactsRequest"),fetchContactsSuccess:Object(l.b)("phonebook/fetchContactsSuccess"),fetchContactsError:Object(l.b)("phonebook/fetchContactsError"),addContactRequest:Object(l.b)("phonebook/addContactRequest"),addContactSuccess:Object(l.b)("phonebook/addContactSuccess"),addContactError:Object(l.b)("phonebook/addContactError"),deleteContactRequest:Object(l.b)("phonebook/deleteContactRequest"),deleteContactSuccess:Object(l.b)("phonebook/deleteContactSuccess"),deleteContactError:Object(l.b)("phonebook/deleteContactError"),changeFilter:Object(l.b)("phonebook/changeFilter")},O=Object(l.c)([],(c={},Object(d.a)(c,p.fetchContactsSuccess,(function(t,e){return e.payload})),Object(d.a)(c,p.addContactSuccess,(function(t,e){var n=e.payload;return[].concat(Object(j.a)(t),[n])})),Object(d.a)(c,p.deleteContactSuccess,(function(t,e){var n=e.payload;return h.b.warn("Contact deleted from your phonebook!"),t.filter((function(t){return t.id!==n}))})),c)),C=Object(l.c)(!1,(a={},Object(d.a)(a,p.fetchContactsRequest,(function(){return!0})),Object(d.a)(a,p.fetchContactsSuccess,(function(){return!1})),Object(d.a)(a,p.fetchContactsError,(function(){return!1})),Object(d.a)(a,p.addContactRequest,(function(){return!0})),Object(d.a)(a,p.addContactSuccess,(function(){return!1})),Object(d.a)(a,p.addContactError,(function(){return!1})),Object(d.a)(a,p.deleteContactRequest,(function(){return!0})),Object(d.a)(a,p.deleteContactSuccess,(function(){return!1})),Object(d.a)(a,p.deleteContactError,(function(){return!1})),a)),m=Object(l.c)("",Object(d.a)({},p.changeFilter,(function(t,e){return e.payload}))),x=Object(l.c)(null,{}),v=Object(f.b)({contacts:O,filter:m,loading:C,error:x}),_=Object(l.a)({reducer:{phonebook:v},devTools:!1}),k=(n(53),n(54),n(55),n(11)),g=n.n(k),w=n(27),S=n(19),y=n.n(S),F=n(17),N=n.n(F);y.a.defaults.baseURL="http://localhost:4040";var q={fetchContacts:function(){return function(){var t=Object(w.a)(g.a.mark((function t(e){var n,c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(p.fetchContactsRequest()),t.prev=1,t.next=4,y.a.get("/contacts");case 4:n=t.sent,c=n.data,e(p.fetchContactsSuccess(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(p.fetchContactsError(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},addContact:function(t,e){return function(){var n=Object(w.a)(g.a.mark((function n(c){var a,o,r;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={id:N.a.generate(),name:t,number:e},c(p.addContactRequest()),n.prev=2,n.next=5,y.a.post("/contacts",a);case 5:o=n.sent,r=o.data,c(p.addContactSuccess(r)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),c(p.addContactError(n.t0));case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(t){return n.apply(this,arguments)}}()},deleteContact:function(t){return function(){var e=Object(w.a)(g.a.mark((function e(n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(p.deleteContactRequest()),e.prev=1,e.next=4,y.a.delete("/contacts/".concat(t));case 4:n(p.deleteContactSuccess(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(p.deleteContactError(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}},E=q,R=n(41),I=n.n(R),L=n(1);var T=function(t){var e=t.children;return Object(L.jsx)("div",{className:I.a.container,children:e})},P=n(32),z=n(25),A=function(t){return t.phonebook.contacts},H=function(t){return t.phonebook.filter},B=Object(z.a)([A,H],(function(t,e){return function(t){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}(t)})),D=n(18),J=n(14),U=n.n(J);var M=function(){var t=Object(o.useState)(""),e=Object(P.a)(t,2),n=e[0],c=e[1],a=Object(o.useState)(""),r=Object(P.a)(a,2),s=r[0],u=r[1],b=N.a.generate(),l=N.a.generate(),d=Object(i.b)(),j=Object(i.c)(A),f=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":c(a);break;case"number":u(a);break;default:return}},p=function(){c(""),u("")};return Object(L.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),""!==n)if(""!==s){if(j.find((function(t){return t.name===n})))return h.b.warn("".concat(n," is already in contacts.")),void p();d(E.addContact(n,s)),h.b.success("Contact has been added to your phonebook!"),p()}else h.b.warn("Please enter the contact's phone number!");else h.b.warn("Please enter the contact's name!")},children:[Object(L.jsxs)("label",{htmlFor:b,className:U.a.label,children:["Name",Object(L.jsx)("input",{type:"text",name:"name",className:U.a.input,value:n,onChange:f,id:b,autoComplete:"off"})]}),Object(L.jsxs)("label",{htmlFor:l,className:U.a.label,children:["Number",Object(L.jsx)("input",{type:"tel",name:"number",className:U.a.input,value:s,onChange:f,id:l,autoComplete:"off"})]}),Object(L.jsxs)("button",{className:U.a.button,type:"submit",children:["Add contact  ",Object(L.jsx)(D.b,{color:"rgb(11, 100, 11)",size:"30px"})]})]})},Q=n(20),W=n.n(Q),Y=function(){var t=Object(i.c)(H),e=Object(i.b)();return Object(L.jsx)("div",{className:W.a.filter,children:Object(L.jsxs)("label",{className:W.a.label,children:["Find contacts by name",Object(L.jsx)("div",{className:W.a.castomInput,children:Object(L.jsx)("input",{type:"text",value:t,onChange:function(t){return e(p.changeFilter(t.currentTarget.value))},className:W.a.input})})]})})},G=n(42),K=n.n(G),V=n(30),X=n.n(V),Z=function(t){var e=t.id,n=t.name,c=t.number,a=Object(i.b)();return Object(L.jsxs)("li",{className:X.a.contactsItem,children:[Object(L.jsx)(D.c,{color:"rgb(11, 100, 11)",size:"10px"})," ",n,":  ",c,Object(L.jsx)("button",{className:X.a.button,type:"button","aria-label":"Delete contact",onClick:function(){return function(t){return a(E.deleteContact(t))}(e)},children:Object(L.jsx)(D.a,{color:"rgb(11, 100, 11)",size:"30px"})})]})},$=function(){var t=Object(i.c)(B);return Object(L.jsx)("ul",{className:K.a.contactList,children:t.map((function(t){var e=t.id,n=t.name,c=t.number;return Object(L.jsx)(Z,{id:e,name:n,number:c},e)}))})};var tt=function(){var t=Object(i.b)();return Object(o.useEffect)((function(){t(E.fetchContacts())}),[t]),Object(L.jsxs)(T,{children:[Object(L.jsx)("h1",{children:"Phonebook"}),Object(L.jsx)(M,{}),Object(L.jsx)(h.a,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(L.jsx)("h2",{children:"Contacts"}),Object(L.jsx)(Y,{}),Object(L.jsx)($,{})]})};u.a.render(Object(L.jsx)(r.a.StrictMode,{children:Object(L.jsx)(i.a,{store:_,children:Object(L.jsx)(b.a,{children:Object(L.jsx)(tt,{})})})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.95b4a011.chunk.js.map