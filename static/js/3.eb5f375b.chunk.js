(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{292:function(e,a,t){e.exports={messages:"Messages_messages__2fDre",dialogs:"Messages_dialogs__3YMoS",active:"Messages_active__2-qjk",chats:"Messages_chats__2cK09"}},293:function(e,a,t){e.exports={dialogs:"Dialog_dialogs__27Upg",active:"Dialog_active__3Ae0L"}},294:function(e,a,t){},299:function(e,a,t){"use strict";t.r(a);var s=t(128),n=t(0),c=t.n(n),i=t(292),m=t.n(i),r=t(293),o=t.n(r),l=t(11),g=function(e){return c.a.createElement("div",{className:"".concat(o.a.dialog," ").concat(o.a.active)},c.a.createElement(l.b,{to:"/messages/"+e.id},e.name))},u=t(294),d=t.n(u),f=function(e){return c.a.createElement("div",{className:d.a.chat},e.message)},p=t(24),_=t(129),b=t(130),v=t(50),E=t(40),h=Object(E.a)(100),M=Object(b.a)({form:"newMessage"})((function(e){var a=e.handleSubmit;return c.a.createElement("form",{onSubmit:a},c.a.createElement(_.a,{name:"newMessageText",component:v.b,validate:[E.b,h]}),c.a.createElement("button",null,"Send"))})),x=function(e){var a=e.dialogs,t=e.addMessage,s=e.messageText,n=a.map((function(e){return c.a.createElement(g,{key:e.id,name:e.name,id:e.id})})),i=a.map((function(e){return e.chats.map((function(e){return c.a.createElement(f,{key:e.id,message:e.message})}))}));i.map((function(e,a){return c.a.createElement(p.b,{path:"/messages/".concat(a+1),render:function(){return i[a]}})}));return c.a.createElement("div",{className:m.a.messages},c.a.createElement("div",{className:m.a.dialogs},n),c.a.createElement("div",{className:m.a.chats},c.a.createElement("div",null,s),c.a.createElement(M,{onSubmit:function(e){t(e.newMessageText)}})))},j=t(10),k=t(92),w=t(7);a.default=Object(w.d)(k.a,Object(j.b)((function(e){return{dialogs:e.messagesPage.dialogs,messageText:e.messagesPage.messageText}}),{addMessage:s.a}))(x)}}]);
//# sourceMappingURL=3.eb5f375b.chunk.js.map