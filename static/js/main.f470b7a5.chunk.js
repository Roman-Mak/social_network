(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{128:function(e,t,n){"use strict";n.d(t,"b",(function(){return O})),n.d(t,"d",(function(){return P})),n.d(t,"c",(function(){return j}));var a=n(5),r=n.n(a),o=n(10),s=n(34),c=n(2),u=n(13),i="socialNetwork/messageReducer/DELETE-DIALOG",l="socialNetwork/messageReducer/GET-DIALOGS",f="socialNetwork/messageReducer/PUT-UP-DIALOG",m="socialNetwork/messageReducer/SET-CURRENT-DIALOG",p="socialNetwork/messageReducer/GET-MESSAGES",d="socialNetwork/messageReducer/SEND-MESSAGE",g={dialogs:[],messages:[],selectedDialogId:null},h=function(e){return{type:l,dialogs:e}},v=function(e){return{type:f,userId:e}},b=function(e){return{type:m,userId:e}},E=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.b.getDialogs();case 3:n=e.sent,t(h(n)),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n,a){var o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.startDialog(e);case 2:o=a().messagesPage.dialogs.find((function(t){return t.id===e})),n(o?v(e):E());case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.b.getMessages(e);case 3:a=t.sent,n((r=a.items,{type:p,messages:r})),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}var r}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=8;break}return n(w(e)),n(b(e)),t.next=5,n(_(e));case 5:n(E()),t.next=9;break;case 8:n(E());case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},P=function(e){return function(t){e?(t(w(e)),t(b(e))):t(b(null))}},j=function(e,t){return function(){var n=Object(o.a)(r.a.mark((function n(a){var o;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.b.sendMessage(e,t);case 2:o=n.sent,a((r=o.data.message,{type:d,message:r})),a(v(e));case 5:case"end":return n.stop()}var r}),n)})));return function(e){return n.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(c.a)(Object(c.a)({},e),{},{dialogs:t.dialogs});case p:return Object(c.a)(Object(c.a)({},e),{},{messages:t.messages});case d:return Object(c.a)(Object(c.a)({},e),{},{messages:[].concat(Object(s.a)(e.messages),[t.message])});case f:return Object(c.a)(Object(c.a)({},e),{},{dialogs:[e.dialogs.find((function(e){return e.id===t.userId}))].concat(Object(s.a)(e.dialogs.filter((function(e){return e.id!==t.userId}))))});case m:return Object(c.a)(Object(c.a)({},e),{},{selectedDialogId:t.userId});case i:return Object(c.a)(Object(c.a)({},e),{},{dialogs:e.dialogs.filter((function(e){return e.id!==t.dialogId}))});default:return e}}},13:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));var a=n(133),r=a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"b29a2be9-93e2-498c-9365-70a515100fee"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},followUser:function(e){return r.post("follow/".concat(e),{}).then((function(e){return e.data}))},unfollowUser:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))}},s={getUserProfile:function(e){return r.get("profile/".concat(e)).then((function(e){return e.data}))},getUserStatus:function(e){return r.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return r.put("profile/status",{status:e}).then((function(e){return e.data}))},setPhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))}},c={authMe:function(){return r.get("auth/me").then((function(e){return e.data}))},authLogin:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},authLogout:function(){return r.delete("auth/login").then((function(e){return e.data}))}},u={getDialogs:function(){return r.get("dialogs").then((function(e){return e.data}))},getDialog:function(e){return r.get("dialogs/".concat(e)).then((function(e){return e.data}))},startDialog:function(e){return r.put("dialogs/".concat(e)).then((function(e){return e.data}))},getMessages:function(e){return r.get("dialogs/".concat(e,"/messages")).then((function(e){return e.data}))},sendMessage:function(e,t){return r.post("dialogs/".concat(e,"/messages"),{body:t}).then((function(e){return e.data}))},getMessageViewed:function(e){return r.get("dialogs/messages/".concat(e,"/viewed")).then((function(e){return e.data}))},spam:function(e){return r.post("dialogs/messages/".concat(e,"/spam")).then((function(e){return e.data}))},deleteMessage:function(e){return r.delete("dialogs/messages/".concat(e)).then((function(e){return e.data}))},restoreMessage:function(e){return r.put("dialogs/messages/".concat(e)).then((function(e){return e.data}))},getNewMessagesCount:function(){return r.get("dialogs/messages/new/count").then((function(e){return e.data}))}}},132:function(e,t,n){e.exports=n.p+"static/media/preloader.48d27090.svg"},137:function(e,t,n){e.exports={usersPage:"Users_usersPage__1hEA3"}},138:function(e,t,n){e.exports=n.p+"static/media/logo.6c0f6b9b.png"},15:function(e,t,n){e.exports={nav:"Navbar_nav__1d1X4",item:"Navbar_item__Rqq9A",active:"Navbar_active__HbwDx"}},165:function(e,t,n){e.exports=n(291)},170:function(e,t,n){},18:function(e,t,n){e.exports={profileInfo:"ProfileInfo_profileInfo__iGDqQ",profilePreloader:"ProfileInfo_profilePreloader__3gW-z",informationContainer:"ProfileInfo_informationContainer__2sqUW",information:"ProfileInfo_information__3Gkh3",avatar:"ProfileInfo_avatar__2zeOd",head_img:"ProfileInfo_head_img__2e4jo",description:"ProfileInfo_description__1Y7jM",profilePreview:"ProfileInfo_profilePreview__cAIKZ",name:"ProfileInfo_name__28jJP",status:"ProfileInfo_status__z_-32",secondContainer:"ProfileInfo_secondContainer__1m5m_",about:"ProfileInfo_about__3E68D",contacts:"ProfileInfo_contacts__3QbcV"}},29:function(e,t,n){e.exports=n.p+"static/media/user-01.0e8f5246.png"},291:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),s=n(70),c=n.n(s),u=n(28),i=n(40),l=n(31),f=n(30),m=(n(170),n(25)),p=n(15),d=n.n(p),g=n(12),h=n(18),v=n.n(h),b=n(29),E=n.n(b),_=n(132),w=n.n(_),O=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{src:w.a,alt:"Loading..."}))},P=n(59),j=function(e){var t=e.status,n=e.updateStatus,a=Object(r.useState)(!1),s=Object(P.a)(a,2),c=s[0],u=s[1],i=Object(r.useState)(t),l=Object(P.a)(i,2),f=l[0],m=l[1];return Object(r.useEffect)((function(){m(t)}),[t]),o.a.createElement("div",null,c?o.a.createElement("input",{value:f,onBlur:function(){u(!1),n(f)},autoFocus:!0,onChange:function(e){m(e.currentTarget.value)}}):o.a.createElement("span",{onDoubleClick:function(){u(!0)}},f||"no status"))},N=n(5),y=n.n(N),I=n(10),C=n(34),k=n(2),S=n(13),U="socialNetwork/profileReducer/ADD-POST",x="socialNetwork/profileReducer/SET-USER-PROFILE",A="socialNetwork/profileReducer/UPDATE-STATUS",T="socialNetwork/profileReducer/GET-STATUS",L="socialNetwork/profileReducer/SET-PHOTO",M={posts:[{message:"I'm ALIVE!!!",id:"3"},{message:"I'm not machine!",id:"2"},{message:"I'm not your slave!",id:"1"}],profile:null,status:null},R=function(e){return{type:A,status:e}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:var n={message:t.newPostText,id:4};return Object(k.a)(Object(k.a)({},e),{},{posts:[n].concat(Object(C.a)(e.posts))});case x:return Object(k.a)(Object(k.a)({},e),{},{profile:t.profile});case T:case A:return Object(k.a)(Object(k.a)({},e),{},{status:t.status});case L:return Object(k.a)(Object(k.a)({},e),{},{profile:Object(k.a)(Object(k.a)({},e.profile),{},{photos:t.photos})});default:return e}},D=n(45),F=n.n(D),G=function(e){var t=e.message;return o.a.createElement("div",{className:F.a.post},o.a.createElement("div",{className:F.a.header},o.a.createElement("img",{className:F.a.avatar,src:E.a,alt:""}),o.a.createElement("div",{className:F.a.postInfo},o.a.createElement("span",null,"markel"),o.a.createElement("span",null,"on 15th July, 2019"))),o.a.createElement("div",{className:F.a.messageArea},o.a.createElement("span",null,t)))},q=n(46),H=n.n(q),B=n(129),W=n(130),J=function(e){return e?void 0:"Field is required"},K=n(51),V=(a=20,function(e){return e&&e.length>a?"Must be ".concat(a," characters or less"):void 0}),X=Object(W.a)({form:"newPost"})((function(e){var t=e.handleSubmit;return o.a.createElement("form",{onSubmit:t},o.a.createElement(B.a,{name:"newPostText",component:K.b,className:H.a.newPost,placeholder:"Share your status...",validate:[J,V]}),o.a.createElement("button",{className:H.a.sendButton},"Send"))})),Y=o.a.memo((function(e){var t=e.posts,n=e.addPost,a=t.map((function(e){return o.a.createElement(G,{key:e.id,message:e.message})}));return o.a.createElement("div",{className:H.a.myPosts},o.a.createElement("div",{className:H.a.createPost},o.a.createElement("div",{className:H.a.headOfNewPost},"What's new"),o.a.createElement(X,{onSubmit:function(e){n(e.newPostText)}})),a)})),Q=n(11),Z=Object(Q.b)((function(e){return{posts:e.profilePage.posts}}),{addPost:function(e){return{type:U,newPostText:e}}})(Y),$=function(e){var t=e.contactKey,n=e.contactValue,a=n||"not specified",r=t[0].toUpperCase()+t.slice(1);return o.a.createElement("div",null,"".concat(r,": ").concat(a))},ee=function(e){var t=e.profile,n=e.updateStatus,a=e.status,r=e.isOwner,s=e.setPhoto;if(!t)return o.a.createElement("div",{className:v.a.profilePreloader},o.a.createElement(O,null));var c=t.photos.large;null===c&&(c=E.a);return o.a.createElement("div",{className:v.a.profileInfo},o.a.createElement("div",{className:v.a.informationContainer},o.a.createElement("div",{className:v.a.profilePreview},o.a.createElement("img",{className:v.a.avatar,src:c,alt:""}),r&&o.a.createElement("label",null,o.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&s(e.target.files[0])}}),"Edit photo")),o.a.createElement("div",{className:v.a.information},o.a.createElement("h3",{className:v.a.name},t.fullName),o.a.createElement("div",{className:v.a.status},o.a.createElement(j,{status:a,updateStatus:n})),o.a.createElement("div",{className:v.a.about},o.a.createElement("div",null,"About"),o.a.createElement("div",null,"City: Minsk"),o.a.createElement("div",null,"Looking for a job: ",t.lookingForAJob?"yes":"no"),o.a.createElement("div",null,"About my skills: ",t.lookingForAJobDescription)))),o.a.createElement("div",{className:v.a.secondContainer},o.a.createElement("div",{className:v.a.contacts},o.a.createElement("div",null,"Contacts"),Object.keys(t.contacts).map((function(e){return o.a.createElement($,{key:e,contactKey:e,contactValue:t.contacts[e]})}))),o.a.createElement(Z,null)))},te=function(e){var t=e.profile,n=e.updateStatus,a=e.status,r=e.isOwner,s=e.setPhoto;return o.a.createElement(ee,{isOwner:r,profile:t,updateStatus:n,status:a,setPhoto:s})},ne=n(8),ae=n(72),re=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).refreshProfile=function(){var t=e.props.match.params.userId;t||(t=e.props.userId)||e.props.history.push("/login"),e.props.getUserProfile(t),e.props.getUserStatus(t)},e.render=function(){return o.a.createElement(te,{isOwner:!e.props.match.params.userId,profile:e.props.profile,updateStatus:e.props.updateStatus,status:e.props.status,setPhoto:e.props.setPhoto})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}}]),n}(o.a.Component),oe=Object(ne.d)(ae.a,m.g,Object(Q.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,userId:e.auth.userId}}),{getUserProfile:function(e){return function(){var t=Object(I.a)(y.a.mark((function t(n){var a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.c.getUserProfile(e);case 2:a=t.sent,n({type:x,profile:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(I.a)(y.a.mark((function t(n){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.c.updateStatus(e);case 2:0===t.sent.resultCode&&n(R(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getUserStatus:function(e){return function(){var t=Object(I.a)(y.a.mark((function t(n){var a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.c.getUserStatus(e);case 2:a=t.sent,n({type:T,status:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setPhoto:function(e){return function(){var t=Object(I.a)(y.a.mark((function t(n){var a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.c.setPhoto(e);case 2:0===(a=t.sent).resultCode&&n((r=a.data.photos,{type:L,photos:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(re),se=n(61),ce=n.n(se),ue=function(e){var t=e.user,n=e.followingInProcess,a=e.unfollowUser,r=e.followUser;return o.a.createElement("div",{className:ce.a.user},o.a.createElement("div",{className:ce.a.avatar},o.a.createElement(g.b,{to:"/profile/".concat(t.id)},o.a.createElement("img",{className:ce.a.img,alt:"user",src:null!==t.photos.small?t.photos.small:E.a})),o.a.createElement("span",{className:ce.a.name},t.name),o.a.createElement("span",null,t.status),t.followed?o.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"unfollow"):o.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"follow")))},ie=n(137),le=n.n(ie),fe=n(76),me=n.n(fe),pe=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,s=e.onPageChanged,c=e.portionCount,u=Object(r.useState)(1),i=Object(P.a)(u,2),l=i[0],f=i[1],m=(l-1)*c+1,p=l*c,d=Math.ceil(t/n),g=Math.ceil(d/c),h=[],v=1;v<=d;v++)h.push(v);return o.a.createElement("div",{className:me.a.paginator},t>0&&o.a.createElement("button",{onClick:function(){return f(l-1)},disabled:!(l>=2)},"<"),h.filter((function(e){return e>=m&&e<=p})).map((function(e){return o.a.createElement("span",{className:a===e?me.a.selectedPage:me.a.page,onClick:function(){return s(e)},key:e},e)})),t>0&&o.a.createElement("button",{onClick:function(){return f(l+1)},disabled:!(l>=1&&l!==g)},">"))},de=function(e){var t=e.users,n=e.followUser,a=e.unfollowUser,r=e.followingInProcess,s=e.totalUsersCount,c=e.currentPage,u=e.pageSize,i=e.onPageChanged,l=t.map((function(e){return o.a.createElement(ue,{key:e.id,user:e,followUser:n,unfollowUser:a,followingInProcess:r})}));return o.a.createElement("div",{className:le.a.usersPage},o.a.createElement(pe,{totalItemsCount:s,currentPage:c,pageSize:u,portionCount:"10",onPageChanged:i}),o.a.createElement("div",null,l),o.a.createElement(pe,{totalItemsCount:s,currentPage:c,pageSize:u,portionCount:"10",onPageChanged:i}))},ge=function(e,t,n,a){return e.map((function(e){return e[t]===n?Object(k.a)(Object(k.a)({},e),a):e}))},he="socialNetwork/usersReducer/FOLLOWED",ve="socialNetwork/usersReducer/UNFOLLOWED",be="socialNetwork/usersReducer/SET-USERS",Ee="socialNetwork/usersReducer/SET-TOTAL-USERS-COUNT",_e="socialNetwork/usersReducer/SET-CURRENT-PAGE",we="socialNetwork/usersReducer/TOGGLE-IS-FETCHING",Oe="socialNetwork/usersReducer/TOGGLE-FOLLOWING-IN-PROCESS",Pe={users:[],totalUsersCount:0,currentPage:1,pageSize:30,isFetching:!1,followingInProcess:[]},je=function(e){return{type:he,userId:e}},Ne=function(e){return{type:ve,userId:e}},ye=function(e){return{type:_e,currentPage:e}},Ie=function(e){return{type:we,isFetching:e}},Ce=function(e,t){return{type:Oe,isFetching:e,userId:t}},ke=function(){var e=Object(I.a)(y.a.mark((function e(t,n,a,r){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Ce(!0,a)),e.next=3,n(a);case 3:0===e.sent.resultCode&&(t(r(a)),t(Ce(!1,a)));case 5:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case he:return Object(k.a)(Object(k.a)({},e),{},{users:ge(e.users,"id",t.userId,{followed:!0})});case ve:return Object(k.a)(Object(k.a)({},e),{},{users:ge(e.users,"id",t.userId,{followed:!1})});case be:return Object(k.a)(Object(k.a)({},e),{},{users:Object(C.a)(t.users)});case Ee:return Object(k.a)(Object(k.a)({},e),{},{totalUsersCount:t.totalUsersCount});case _e:return Object(k.a)(Object(k.a)({},e),{},{currentPage:t.currentPage});case we:return Object(k.a)(Object(k.a)({},e),{},{isFetching:t.isFetching});case Oe:return Object(k.a)(Object(k.a)({},e),{},{followingInProcess:t.isFetching?[].concat(Object(C.a)(e.followingInProcess),[t.userId]):e.followingInProcess.filter((function(e){return e!==t.userId}))});default:return e}},Ue=(n(290),function(e){return e.usersPage.users}),xe=function(e){return e.usersPage.totalUsersCount},Ae=function(e){return e.usersPage.pageSize},Te=function(e){return e.usersPage.currentPage},Le=function(e){return e.usersPage.isFetching},Me=function(e){return e.usersPage.followingInProcess},Re=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.requestUsers(t,e.props.pageSize)},e.render=function(){return e.props.isFetching?o.a.createElement("div",{className:v.a.profilePreloader},o.a.createElement(O,null)):o.a.createElement(o.a.Fragment,null,o.a.createElement(de,{users:e.props.users,pageSize:e.props.pageSize,currentPage:e.props.currentPage,totalUsersCount:e.props.totalUsersCount,followUser:e.props.followUser,unfollowUser:e.props.unfollowUser,onPageChanged:e.onPageChanged,followingInProcess:e.props.followingInProcess}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}}]),n}(o.a.Component),ze=Object(ne.d)(ae.a,Object(Q.b)((function(e){return{users:Ue(e),totalUsersCount:xe(e),pageSize:Ae(e),currentPage:Te(e),isFetching:Le(e),followingInProcess:Me(e)}}),{followUser:function(e){return function(){var t=Object(I.a)(y.a.mark((function t(n){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ke(n,S.d.followUser,e,je);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollowUser:function(e){return function(){var t=Object(I.a)(y.a.mark((function t(n){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ke(n,S.d.unfollowUser,e,Ne);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:ye,requestUsers:function(e,t){return function(){var n=Object(I.a)(y.a.mark((function n(a){var r;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(ye(e)),a(Ie(!0)),n.next=4,S.d.getUsers(e,t);case 4:r=n.sent,a(Ie(!1)),a((s=r.items,{type:be,users:s})),a((o=r.totalCount,{type:Ee,totalUsersCount:o}));case 8:case"end":return n.stop()}var o,s}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(Re),De=n(58),Fe=n.n(De),Ge=Object(W.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return o.a.createElement("form",{onSubmit:t,className:Fe.a.form},o.a.createElement("div",null,o.a.createElement(B.a,{name:"email",type:"email",placeholder:"Login",component:K.a,validate:[J]})),o.a.createElement("div",null,o.a.createElement(B.a,{name:"password",type:"password",placeholder:"Password",component:K.a,validate:[J]})),o.a.createElement("div",{className:Fe.a.rememberMe},o.a.createElement(B.a,{name:"rememberMe",type:"checkbox",component:"input"}),o.a.createElement("span",null,"remember me")),o.a.createElement("button",null,"Sign In"),n&&o.a.createElement("div",{style:{color:"red"}},n))})),qe=n(49),He="socialNetwork/authReducer/SET-USER-LOGIN-DATA",Be="socialNetwork/authReducer/TOGGLE-IS-AUTH",We={userId:null,email:null,login:null,isAuth:!1},Je=function(e,t,n){return{type:He,payload:{userId:e,email:t,login:n}}},Ke=function(e){return{type:Be,isAuth:e}},Ve=function(){return function(){var e=Object(I.a)(y.a.mark((function e(t){var n,a,r,o,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.authMe();case 2:0===(n=e.sent).resultCode&&"You are not authorized"!==n.messages[0]&&(a=n.data,r=a.id,o=a.email,s=a.login,t(Je(r,o,s)),t(Ke(!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case He:return Object(k.a)(Object(k.a)({},e),t.payload);case Be:return Object(k.a)(Object(k.a)({},e),{},{isAuth:t.isAuth});default:return e}},Ye=Object(Q.b)((function(e){return{isAuth:e.auth.isAuth}}),{userLogin:function(e,t,n){return function(){var a=Object(I.a)(y.a.mark((function a(r){var o,s;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,S.a.authLogin(e,t,n);case 2:0===(o=a.sent).resultCode?r(Ve()):(s=o.messages.length>0?o.messages[0]:"some error",r(Object(qe.a)("login",{_error:s})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.isAuth,n=e.userLogin;return t?o.a.createElement(m.a,{to:nt}):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:Fe.a.login},o.a.createElement("h1",null,"Sign In"),o.a.createElement(Ge,{onSubmit:function(e){var t=e.email,a=e.password,r=e.rememberMe;n(t,a,r)}})),o.a.createElement("div",null,o.a.createElement("div",null,"Test account"),o.a.createElement("div",null,"Email: free@samuraijs.com"),o.a.createElement("div",null,"Password: free")))})),Qe=o.a.lazy((function(){return n.e(3).then(n.bind(null,299))})),Ze=o.a.lazy((function(){return n.e(4).then(n.bind(null,295))})),$e=o.a.lazy((function(){return n.e(6).then(n.bind(null,296))})),et=o.a.lazy((function(){return n.e(5).then(n.bind(null,297))})),tt=o.a.lazy((function(){return n.e(7).then(n.bind(null,298))})),nt="/profile",at=Object(m.g)((function(){return o.a.createElement("div",null,o.a.createElement(r.Suspense,{fallback:o.a.createElement(O,null)},o.a.createElement(m.d,null,o.a.createElement(m.b,{exact:!0,path:"/",render:function(){return o.a.createElement(m.a,{to:nt})}}),o.a.createElement(m.b,{path:nt+"/:userId?",render:function(){return o.a.createElement(oe,null)}}),o.a.createElement(m.b,{path:"/messages/:userId?",render:function(e){return o.a.createElement(Qe,{userId:e.match.params.userId})}}),o.a.createElement(m.b,{path:"/friends",render:function(){return o.a.createElement(Ze,null)}}),o.a.createElement(m.b,{path:"/news",render:function(){return o.a.createElement($e,null)}}),o.a.createElement(m.b,{path:"/music",render:function(){return o.a.createElement(et,null)}}),o.a.createElement(m.b,{path:"/settings",render:function(){return o.a.createElement(tt,null)}}),o.a.createElement(m.b,{path:"/users",render:function(){return o.a.createElement(ze,null)}}),o.a.createElement(m.b,{path:"/login",render:function(){return o.a.createElement(Ye,null)}}))))})),rt=function(){return o.a.createElement("nav",{className:d.a.nav},o.a.createElement("div",{className:d.a.item},o.a.createElement(g.b,{to:nt,activeClassName:d.a.active},"Profile")),o.a.createElement("div",{className:d.a.item},o.a.createElement(g.b,{to:"/friends",activeClassName:d.a.active},"Friends")),o.a.createElement("div",{className:d.a.item},o.a.createElement(g.b,{to:"/messages",activeClassName:d.a.active},"Messages")),o.a.createElement("div",{className:d.a.item},o.a.createElement(g.b,{to:"/news",activeClassName:d.a.active},"News")),o.a.createElement("div",{className:d.a.item},o.a.createElement(g.b,{to:"/music",activeClassName:d.a.active},"Music")),o.a.createElement("div",{className:d.a.item},o.a.createElement(g.b,{to:"/settings",activeClassName:d.a.active},"Settings")),o.a.createElement("div",{className:d.a.item},o.a.createElement(g.b,{to:"/users",activeClassName:d.a.active},"Users")))},ot=n(138),st=n.n(ot),ct=n(38),ut=n.n(ct),it=function(e){var t=e.isAuth,n=e.login,a=e.userLogout;return o.a.createElement("header",{className:ut.a.header},o.a.createElement("div",{className:ut.a.brand},"Social Network",o.a.createElement("img",{className:ut.a.logo,src:st.a,alt:""})),o.a.createElement("div",{className:ut.a.login},t?o.a.createElement("div",{className:ut.a.loginBlock},o.a.createElement("img",{className:ut.a.avatar,src:E.a,alt:""}),o.a.createElement("div",null,o.a.createElement("div",null,n),o.a.createElement("button",{onClick:a},"Log Out"))):o.a.createElement("button",null,o.a.createElement(g.b,{to:"/login"},"Sign In"))))},lt=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).render=function(){return o.a.createElement(it,e.props)},e}return n}(o.a.Component),ft=Object(Q.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{userLogout:function(){return function(){var e=Object(I.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.authLogout();case 2:0===e.sent.resultCode&&(t(Je(null,null,null)),t(Ke(!1)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(lt),mt="socialNetwork/appReducer/INITIALIZE-APP",pt={initialized:!1},dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case mt:return Object(k.a)(Object(k.a)({},e),{},{initialized:!0});default:return e}},gt=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).render=function(){return e.props.initialized?o.a.createElement("div",{className:"app-wrapper"},o.a.createElement(ft,null),o.a.createElement("div",{className:"content"},o.a.createElement(rt,null),o.a.createElement(at,null))):o.a.createElement("div",{className:"app-preloader"},o.a.createElement(O,null))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}}]),n}(o.a.Component),ht=Object(ne.d)(m.g,Object(Q.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(){var e=Object(I.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Ve());case 2:t({type:mt});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(gt),vt=n(128),bt=n(139),Et=n(131),_t=Object(ne.c)({profilePage:z,messagesPage:vt.a,usersPage:Se,auth:Xe,form:Et.a,app:dt}),wt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ne.d,Ot=Object(ne.e)(_t,wt(Object(ne.a)(bt.a)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(g.a,null,o.a.createElement(Q.a,{store:Ot},o.a.createElement(ht,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},38:function(e,t,n){e.exports={header:"Header_header__XeMfP",brand:"Header_brand__36R-E",logo:"Header_logo__38GKb",avatar:"Header_avatar__pjY6b",login:"Header_login__2yrZU",loginBlock:"Header_loginBlock__dwY5J"}},45:function(e,t,n){e.exports={post:"Post_post__1qM59",header:"Post_header__1zEs8",postInfo:"Post_postInfo__djut9",avatar:"Post_avatar__1jCTV",messageArea:"Post_messageArea__11yWM"}},46:function(e,t,n){e.exports={myPosts:"MyPosts_myPosts__XqtaQ",createPost:"MyPosts_createPost__1gfbe",headOfNewPost:"MyPosts_headOfNewPost__3n_jL",newPost:"MyPosts_newPost__3fQAG",sendButton:"MyPosts_sendButton__dCDbt"}},51:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return i}));var a=n(97),r=n(0),o=n.n(r),s=n(60),c=n.n(s),u=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),s=n.touched,u=n.error,i=s&&u;return o.a.createElement("div",{className:c.a.formContorl+" "+(i?c.a.error:"")},o.a.createElement("textarea",Object.assign({},t,r)),o.a.createElement("div",null,i&&o.a.createElement("span",null,u)))},i=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),s=n.touched,u=n.error,i=s&&u;return o.a.createElement("div",{className:c.a.formContorl+" "+(i?c.a.error:"")},o.a.createElement("input",Object.assign({},t,r)),o.a.createElement("div",null,i&&o.a.createElement("span",null,u)))}},58:function(e,t,n){e.exports={login:"Login_login__24xmC",form:"Login_form__3E44R",rememberMe:"Login_rememberMe__fGqn0"}},60:function(e,t,n){e.exports={formContorl:"FormsControl_formContorl__28z0E",error:"FormsControl_error__8pzd9"}},61:function(e,t,n){e.exports={user:"User_user__37_-r",name:"User_name__1KEgh",img:"User_img__3K1XH",avatar:"User_avatar__2ozx-"}},72:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(0),r=n.n(a),o=n(11),s=n(25),c=function(e){return{isAuth:e.auth.isAuth}},u=function(e){return Object(o.b)(c)((function(t){return t.isAuth?r.a.createElement(e,t):r.a.createElement(s.a,{to:"/login"})}))}},76:function(e,t,n){e.exports={paginator:"Paginator_paginator__3hOSh",selectedPage:"Paginator_selectedPage__1Ny-t",page:"Paginator_page__3czvv"}}},[[165,1,2]]]);
//# sourceMappingURL=main.f470b7a5.chunk.js.map