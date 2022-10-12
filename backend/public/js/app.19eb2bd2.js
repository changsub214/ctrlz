(function(){"use strict";var e={4872:function(e,t,n){var a=n(144),i=function(){var e=this,t=e._self._c;return t("router-view")},r=[],l={},s=l,o=n(1001),u=(0,o.Z)(s,i,r,!1,null,null,null),c=u.exports,m=n(8345),d=n(4741),p=n(3816),f=n(5050),h=n(683),v=n(9456),g=n(3102),Z=n(7695),b=function(){var e=this,t=e._self._c;return t(g.Z,[t(f.Z,{staticStyle:{"max-width":"450px"},attrs:{"fill-height":""}},[t(v.Z,{attrs:{"align-center":"",row:"",wrap:""}},[t(h.Z,{attrs:{xs12:""}},[t(p.Z,[t("div",{staticClass:"pa-10"},[t("h1",{staticClass:"mb-10",staticStyle:{"text-align":"center"}},[e._v("Login")]),t("form",[t(Z.Z,{attrs:{label:"Email",rules:e.emailRules,"prepend-inner-icon":"mdi-account"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),t(d.Z,{staticClass:"mb-3",attrs:{color:"blue lighten-1 text-capitalize",depressed:"",large:"",block:"",dark:""},on:{click:e.login}},[e._v(" Login ")]),t(d.Z,{attrs:{to:"/sign-up",color:"blue lighten-1 text-capitalize",depressed:"",large:"",block:"",dark:""}},[e._v(" Sign Up ")])],1)])])],1)],1)],1)],1)},x=[];n(7658);const _={isLogin:!0,email:"",name:"UnDefined"};var k={data:()=>({valid:!1,email:"",emailRules:[e=>!!e||"E-mail is required",e=>/.+@.+/.test(e)||"E-mail must be valid"]}),methods:{login(){this.$axios.post("/users/loginCheck",{email:this.email}).then((e=>{1==e.data.success?(alert(e.data.name),_.name=e.data.name,this.$router.push("/sec")):alert(e.data.message)})).catch((function(e){alert(e)}))}}},y=k,w=(0,o.Z)(y,b,x,!1,null,null,null),S=w.exports,P=n(7024),O=n(3240),$=n(9088),j=n(7894),C=function(){var e=this,t=e._self._c;return t(O.Z,{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(f.Z,{staticStyle:{"max-width":"450px"},attrs:{"fill-height":""}},[t(p.Z,[t("div",{staticClass:"pa-10"},[t(j.Z,[t(Z.Z,{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),t(Z.Z,{attrs:{rules:e.nameRules,counter:10,label:"Name",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),t(P.Z,{attrs:{align:"center",justify:"space-around"}},[t(d.Z,{attrs:{tile:"",color:"success"},on:{click:function(t){return e.formSubmit()}}},[t($.Z,{attrs:{left:""}},[e._v("mdi-pencil")]),e._v(" Submit ")],1),t("br"),t(d.Z,{attrs:{to:"/login"}},[e._v("cancel")])],1)],1)],1)])],1)],1)},E=[],L={data:()=>({valid:!1,name:"",nameRules:[e=>!!e||"Name is required",e=>e.length<=10||"Name must be less than 10 characters"],email:"",emailRules:[e=>!!e||"E-mail is required",e=>/.+@.+/.test(e)||"E-mail must be valid"]}),methods:{formSubmit(){this.$axios.post("/users/signUp",{email:this.email,name:this.name}).then((e=>{1==e.data.success?(alert(e.data.message),this.$router.push("/login")):alert(e.data.message)})).catch((function(e){alert(e)}))}}},T=L,M=(0,o.Z)(T,C,E,!1,null,null,null),R=M.exports,q=n(7970),F=n(1667),U=n(6533),N=function(){var e=this,t=e._self._c;return t(p.Z,{staticClass:"mx-auto",attrs:{"max-width":"500"}},[t(q.Z,{attrs:{"two-line":""}},e._l(e.users,(function(n){return t(F.Z,{key:n.email},[t(U.km,[t(U.V9,{domProps:{innerHTML:e._s(n.name)}}),t(U.oZ,{domProps:{innerHTML:e._s(n.email)}})],1)],1)})),1)],1)},D=[],V={data(){return{users:[]}},created(){this.$axios.get("/users/inf").then((e=>{console.log(e.data),this.users=e.data}))}},z=V,H=(0,o.Z)(z,N,D,!1,null,null,null),A=H.exports,B=n(3726),G=n(2903),I=n(7690),J=n(3560),K=n(1533),Q=n(6827),W=n(1600),X=function(){var e=this,t=e._self._c;return t(B.Z,[t(j.Z,{staticClass:"mb-6"},[t(K.Z,{attrs:{permanent:"","expand-on-hover":""}},[t(F.Z,[t(U.km,[t(U.V9,{staticClass:"text-h6"},[e._v(" Name ")]),t(U.oZ,[e._v(" email@gmail.com ")])],1)],1),t(F.Z,[t(W.Z,[t(Q.Z,{attrs:{inset:"",label:"Dark Mode","persistent-hint":""},model:{value:e.$vuetify.theme.dark,callback:function(t){e.$set(e.$vuetify.theme,"dark",t)},expression:"$vuetify.theme.dark"}})],1)],1),t(I.Z),t(q.Z,{attrs:{dense:"",nav:""}},e._l(e.items,(function(n){return t(F.Z,{key:n.title,attrs:{link:"",to:n.to}},[t(J.Z,[t($.Z,[e._v(e._s(n.icon))])],1),t(U.km,[t(U.V9,[e._v(e._s(n.title))])],1)],1)})),1)],1),t(G.Z,[t("router-view")],1)],1)],1)},Y=[],ee={data(){return{items:[{title:"Login",icon:"mdi-login",to:"/login"},{title:"Sign Up",icon:"mdi-account-plus",to:"/sign-up"},{title:"information",icon:"mdi-book",to:"/manual"}],right:null}}},te=ee,ne=(0,o.Z)(te,X,Y,!1,null,null,null),ae=ne.exports,ie=n(3143),re=function(){var e=this,t=e._self._c;return t("form",{attrs:{enctype:"multipart/form-data"}},[t(ie.Z,{attrs:{placeholder:"Pick an avatar","prepend-icon":"mdi-camera",label:"Avatar"},on:{change:e.selectFile}}),t(d.Z,{on:{click:e.upload}},[e._v("submit")])],1)},le=[],se={data(){return{name:_.name,image:""}},methods:{upload(){const e=new FormData;e.append("image",this.image),this.$axios.post("/users/",e)},selectFile(e){this.image=e}}},oe=se,ue=(0,o.Z)(oe,re,le,!1,null,null,null),ce=ue.exports;a.ZP.use(m.ZP);const me=[{path:"/",name:"First",component:ae,children:[{path:"/login",name:"Login",component:S},{path:"/sign-up",name:"SignUp",component:R},{path:"/manual",name:"Manual",component:A}]},{path:"/sec",name:"Second",component:ce}],de=new m.ZP({mode:"history",routes:me});var pe=de,fe=n(154);a.ZP.use(fe.Z);var he=new fe.Z({}),ve=n(196);a.ZP.config.productionTip=!1,a.ZP.prototype.$axios=ve.Z,new a.ZP({router:pe,vuetify:he,render:e=>e(c)}).$mount("#app")}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,a,i,r){if(!a){var l=1/0;for(c=0;c<e.length;c++){a=e[c][0],i=e[c][1],r=e[c][2];for(var s=!0,o=0;o<a.length;o++)(!1&r||l>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[o])}))?a.splice(o--,1):(s=!1,r<l&&(l=r));if(s){e.splice(c--,1);var u=i();void 0!==u&&(t=u)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[a,i,r]}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,r,l=a[0],s=a[1],o=a[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(o)var c=o(n)}for(t&&t(a);u<l.length;u++)r=l[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},a=self["webpackChunkproject0"]=self["webpackChunkproject0"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(4872)}));a=n.O(a)})();
//# sourceMappingURL=app.19eb2bd2.js.map