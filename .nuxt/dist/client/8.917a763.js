(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{257:function(e,t,r){"use strict";r.r(t);r(29);var n=r(4),o=(r(32),r(63)),l=function(data){return Object(o.b)({method:"POST",url:"/api/users/login",data:data})},c=function(data){return Object(o.b)({method:"POST",url:"/api/users",data:data})},m=r(185),d={name:"loginIndex",middleware:"notAuth",computed:{isLogin:function(){return"login"===this.$route.name}},data:function(){return{user:{username:"",email:"",password:""},errors:{}}},methods:{onSubmit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e.isLogin){t.next=7;break}return t.next=4,l({user:e.user});case 4:t.t0=t.sent,t.next=10;break;case 7:return t.next=9,c({user:e.user});case 9:t.t0=t.sent;case 10:r=t.t0,data=r.data,e.$store.commit("setUser",data.user),m.set("user",data.user),e.$router.push("/"),t.next=20;break;case 17:t.prev=17,t.t1=t.catch(0),e.errors=t.t1.response.data.errors;case 20:case"end":return t.stop()}}),t,null,[[0,17]])})))()}}},v=r(22),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"auth-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[r("h1",{staticClass:"text-xs-center"},[e._v(e._s(e.isLogin?"Sign up":"Sign in"))]),e._v(" "),r("p",{staticClass:"text-xs-center"},[e.isLogin?r("nuxt-link",{attrs:{to:"/register"}},[e._v("Have an account?")]):r("nuxt-link",{attrs:{to:"/login"}},[e._v("Have an account?")])],1),e._v(" "),r("ul",{staticClass:"error-messages"},[e._l(e.errors,(function(t,n){return e._l(t,(function(t,o){return r("li",{key:o},[e._v("\n              "+e._s(n)+" "+e._s(t)+"\n            ")])}))}))],2),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e.isLogin?e._e():r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Your Name",required:""},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control form-control-lg",attrs:{type:"email",placeholder:"Email",required:""},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password",required:""},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),e._v(" "),r("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[e._v("\n            "+e._s(e.isLogin?"Sign up":"Sign in")+"\n          ")])])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);