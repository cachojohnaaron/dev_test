(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d3ae3b98"],{"0fd9":function(t,e,a){"use strict";var s=a("ade3"),n=a("5530"),r=(a("caad"),a("2532"),a("99af"),a("b64b"),a("ac1f"),a("5319"),a("4ec9"),a("d3b7"),a("3ca3"),a("ddb0"),a("159b"),a("4b85"),a("2b0e")),i=a("d9f7"),o=a("80d2"),l=["sm","md","lg","xl"],d=["start","end","center"];function c(t,e){return l.reduce((function(a,s){return a[t+Object(o["s"])(s)]=e(),a}),{})}var u=function(t){return[].concat(d,["baseline","stretch"]).includes(t)},m=c("align",(function(){return{type:String,default:null,validator:u}})),f=function(t){return[].concat(d,["space-between","space-around"]).includes(t)},v=c("justify",(function(){return{type:String,default:null,validator:f}})),p=function(t){return[].concat(d,["space-between","space-around","stretch"]).includes(t)},h=c("alignContent",(function(){return{type:String,default:null,validator:p}})),b={align:Object.keys(m),justify:Object.keys(v),alignContent:Object.keys(h)},_={align:"align",justify:"justify",alignContent:"align-content"};function g(t,e,a){var s=_[t];if(null!=a){if(e){var n=e.replace(t,"");s+="-".concat(n)}return s+="-".concat(a),s.toLowerCase()}}var y=new Map;e["a"]=r["a"].extend({name:"v-row",functional:!0,props:Object(n["a"])(Object(n["a"])(Object(n["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u}},m),{},{justify:{type:String,default:null,validator:f}},v),{},{alignContent:{type:String,default:null,validator:p}},h),render:function(t,e){var a=e.props,n=e.data,r=e.children,o="";for(var l in a)o+=String(a[l]);var d=y.get(o);return d||function(){var t,e;for(e in d=[],b)b[e].forEach((function(t){var s=a[t],n=g(e,t,s);n&&d.push(n)}));d.push((t={"no-gutters":a.noGutters,"row--dense":a.dense},Object(s["a"])(t,"align-".concat(a.align),a.align),Object(s["a"])(t,"justify-".concat(a.justify),a.justify),Object(s["a"])(t,"align-content-".concat(a.alignContent),a.alignContent),t)),y.set(o,d)}(),t(a.tag,Object(i["a"])(n,{staticClass:"row",class:d}),r)}})},"1e18":function(t,e,a){},4472:function(t,e,a){"use strict";a("1e18")},"4ec9":function(t,e,a){"use strict";var s=a("6d61"),n=a("6566");t.exports=s("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),n)},"62e4":function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},6566:function(t,e,a){"use strict";var s=a("9bf2").f,n=a("7c73"),r=a("e2cc"),i=a("0366"),o=a("19aa"),l=a("2266"),d=a("7dd0"),c=a("2626"),u=a("83ab"),m=a("f183").fastKey,f=a("69f3"),v=f.set,p=f.getterFor;t.exports={getConstructor:function(t,e,a,d){var c=t((function(t,s){o(t,c,e),v(t,{type:e,index:n(null),first:void 0,last:void 0,size:0}),u||(t.size=0),void 0!=s&&l(s,t[d],{that:t,AS_ENTRIES:a})})),f=p(e),h=function(t,e,a){var s,n,r=f(t),i=b(t,e);return i?i.value=a:(r.last=i={index:n=m(e,!0),key:e,value:a,previous:s=r.last,next:void 0,removed:!1},r.first||(r.first=i),s&&(s.next=i),u?r.size++:t.size++,"F"!==n&&(r.index[n]=i)),t},b=function(t,e){var a,s=f(t),n=m(e);if("F"!==n)return s.index[n];for(a=s.first;a;a=a.next)if(a.key==e)return a};return r(c.prototype,{clear:function(){var t=this,e=f(t),a=e.index,s=e.first;while(s)s.removed=!0,s.previous&&(s.previous=s.previous.next=void 0),delete a[s.index],s=s.next;e.first=e.last=void 0,u?e.size=0:t.size=0},delete:function(t){var e=this,a=f(e),s=b(e,t);if(s){var n=s.next,r=s.previous;delete a.index[s.index],s.removed=!0,r&&(r.next=n),n&&(n.previous=r),a.first==s&&(a.first=n),a.last==s&&(a.last=r),u?a.size--:e.size--}return!!s},forEach:function(t){var e,a=f(this),s=i(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:a.first){s(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!b(this,t)}}),r(c.prototype,a?{get:function(t){var e=b(this,t);return e&&e.value},set:function(t,e){return h(this,0===t?0:t,e)}}:{add:function(t){return h(this,t=0===t?0:t,t)}}),u&&s(c.prototype,"size",{get:function(){return f(this).size}}),c},setStrong:function(t,e,a){var s=e+" Iterator",n=p(e),r=p(s);d(t,e,(function(t,e){v(this,{type:s,target:t,state:n(t),kind:e,last:void 0})}),(function(){var t=r(this),e=t.kind,a=t.last;while(a&&a.removed)a=a.previous;return t.target&&(t.last=a=a?a.next:t.state.first)?"keys"==e?{value:a.key,done:!1}:"values"==e?{value:a.value,done:!1}:{value:[a.key,a.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),a?"entries":"values",!a,!0),c(e)}}},"6d61":function(t,e,a){"use strict";var s=a("23e7"),n=a("da84"),r=a("94ca"),i=a("6eeb"),o=a("f183"),l=a("2266"),d=a("19aa"),c=a("861d"),u=a("d039"),m=a("1c7e"),f=a("d44e"),v=a("7156");t.exports=function(t,e,a){var p=-1!==t.indexOf("Map"),h=-1!==t.indexOf("Weak"),b=p?"set":"add",_=n[t],g=_&&_.prototype,y=_,C={},w=function(t){var e=g[t];i(g,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(h&&!c(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return h&&!c(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(h&&!c(t))&&e.call(this,0===t?0:t)}:function(t,a){return e.call(this,0===t?0:t,a),this})},x=r(t,"function"!=typeof _||!(h||g.forEach&&!u((function(){(new _).entries().next()}))));if(x)y=a.getConstructor(e,t,p,b),o.enable();else if(r(t,!0)){var D=new y,U=D[b](h?{}:-0,1)!=D,S=u((function(){D.has(1)})),k=m((function(t){new _(t)})),A=!h&&u((function(){var t=new _,e=5;while(e--)t[b](e,e);return!t.has(-0)}));k||(y=e((function(e,a){d(e,y,t);var s=v(new _,e,y);return void 0!=a&&l(a,s[b],{that:s,AS_ENTRIES:p}),s})),y.prototype=g,g.constructor=y),(S||A)&&(w("delete"),w("has"),p&&w("get")),(A||U)&&w(b),h&&g.clear&&delete g.clear}return C[t]=y,s({global:!0,forced:y!=_},C),f(y,t),h||a.setStrong(y,t,p),y}},a9cb:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard"},[a("Sidebar"),a("Topbar"),t._m(0),a("v-row",[a("div",{staticClass:"card-buttons d-flex justify-space-between",staticStyle:{width:"700px !important"}},[a("span",{staticClass:"page-buttons"}),a("span",{staticClass:"page-buttons"},[a("button",{staticClass:"btn btn-light btn-subheader-third",attrs:{type:"button","data-toggle":"modal","data-target":"#add-admin","data-backdrop":"static","data-keyboard":"false"},on:{click:function(e){return t.openAddForm()}}},[t._v("Add Admin")])])])]),a("v-row",[a("div",{staticClass:"card",staticStyle:{width:"700px",padding:"5px 5px 0px 5px","padding-top":"20px"},attrs:{id:"tblUser"}},[a("div",{staticClass:"table-responsive-sm"},[a("table",{staticClass:"table-sm table-hover",attrs:{id:"tblAllAsset"}},[a("thead",{},[a("tr",[a("th",[t._v("Admin ID")]),a("th",[t._v("Name")]),a("th",[t._v("Username")]),a("th",[t._v("Actions")])])]),a("tbody",t._l(t.Admin,(function(e){return a("tr",[a("td",[t._v(t._s(e.id))]),a("td",[t._v(t._s(e.fname)+" "+t._s(e.lname))]),a("td",[t._v(t._s(e.username))]),a("td",[a("button",{staticClass:"btn-sm btn-action",attrs:{"modal-no-backdrop":"","data-toggle":"modal","data-target":"#upd-admin","data-backdrop":"static","data-keyboard":"false"},on:{click:function(a){return t.showModal(e)}}},[a("v-icon",{staticStyle:{"font-size":"16px"},attrs:{color:"success",title:"Edit Admin"}},[t._v("mdi-pencil")])],1),a("button",{staticClass:"btn-sm btn-action",attrs:{"modal-no-backdrop":"","data-toggle":"modal","data-target":"#delete-admin"},on:{click:function(a){return t.showModalDelete(e)}}},[a("v-icon",{staticStyle:{"font-size":"16px"},attrs:{color:"red",title:"Delete Admin"}},[t._v("mdi-delete")])],1)])])})),0)])])])]),a("div",{staticClass:"modal fade modal-update-asset",staticStyle:{"font-size":"13px"},attrs:{id:"upd-admin",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h6",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Update Admin Information")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return t.cancelModal()}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("div",{staticClass:"modal-body"},[t.alertSuccess?a("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[a("v-icon",{attrs:{color:"success",size:"15px"}},[t._v("mdi-checkbox-marked-circle")]),t._v("  "),a("strong",[t._v("Success!")]),t._v(" User record updated.")],1):t._e(),t.alertError?a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[a("v-icon",{attrs:{color:"red",size:"15px"}},[t._v("mdi-alert-circle")]),t._v(" Please fill up all of the required fields"),a("span",{staticStyle:{color:"red"}},[t._v(" *")])],1):t._e(),a("form",{attrs:{action:"",method:"POST"}},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group"},[t._m(1),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.UsersData.id,expression:"UsersData.id",modifiers:{lazy:!0}}],staticClass:"form-control",attrs:{type:"text",name:"admin_id",id:"admin_id",placeholder:"",readonly:""},domProps:{value:t.UsersData.id},on:{change:function(e){return t.$set(t.UsersData,"id",e.target.value)}}})]),a("div",{staticClass:"form-group"},[t._m(2),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.UsersData.fname,expression:"UsersData.fname",modifiers:{lazy:!0}}],staticClass:"form-control",attrs:{type:"text",name:"fname",id:"fname",placeholder:""},domProps:{value:t.UsersData.fname},on:{change:function(e){return t.$set(t.UsersData,"fname",e.target.value)}}})]),a("div",{staticClass:"form-group"},[t._m(3),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.UsersData.lname,expression:"UsersData.lname",modifiers:{lazy:!0}}],staticClass:"form-control",attrs:{type:"text",name:"lname",id:"lname",placeholder:""},domProps:{value:t.UsersData.lname},on:{change:function(e){return t.$set(t.UsersData,"lname",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group"},[t._m(4),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.UsersData.username,expression:"UsersData.username",modifiers:{lazy:!0}}],staticClass:"form-control mb-3",attrs:{type:"text",name:"admin_username",id:"admin_username",placeholder:""},domProps:{value:t.UsersData.username},on:{change:function(e){return t.$set(t.UsersData,"username",e.target.value)}}})])]),a("hr"),a("div",{staticClass:"modal-bottom"},[a("button",{staticClass:"mb-3 btn btn-secondary",attrs:{block:"","data-dismiss":"modal"},on:{click:function(e){return t.cancelModal()}}},[t._v("Cancel")]),a("button",{staticClass:"ms-2 mb-3 btn btn-primary",attrs:{variant:"primary",block:""},on:{click:function(e){return e.preventDefault(),t.updateAdminInfo()}}},[t._v("Save Changes")])])])])])])]),a("div",{staticClass:"modal fade modal-update-asset",staticStyle:{"font-size":"13px"},attrs:{id:"add-admin",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog rtn-add-admin",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(5),a("div",{staticClass:"modal-body"},[t.alertSuccess?a("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[a("v-icon",{attrs:{color:"success",size:"15px"}},[t._v("mdi-checkbox-marked-circle")]),t._v("  "),a("strong",[t._v("Success!")]),t._v(" Admin account added.")],1):t._e(),t.alertError?a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[a("v-icon",{attrs:{color:"red",size:"15px"}},[t._v("mdi-alert-circle")]),t._v(" Please fill up all of the required fields"),a("span",{staticStyle:{color:"red"}},[t._v(" *")])],1):t._e(),a("form",{attrs:{action:"",method:"POST"}},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group"},[t._m(6),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.UsersData.fname,expression:"UsersData.fname",modifiers:{lazy:!0}}],staticClass:"form-control mb-3",attrs:{type:"text",name:"admin_username",id:"admin_username",placeholder:""},domProps:{value:t.UsersData.fname},on:{change:function(e){return t.$set(t.UsersData,"fname",e.target.value)}}})]),a("div",{staticClass:"form-group"},[t._m(7),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.UsersData.lname,expression:"UsersData.lname",modifiers:{lazy:!0}}],staticClass:"form-control mb-3",attrs:{type:"text",name:"admin_password",id:"admin_password",placeholder:""},domProps:{value:t.UsersData.lname},on:{change:function(e){return t.$set(t.UsersData,"lname",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group"},[t._m(8),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.UsersData.username,expression:"UsersData.username",modifiers:{lazy:!0}}],staticClass:"form-control mb-3",attrs:{type:"text",name:"admin_username",id:"admin_username",placeholder:""},domProps:{value:t.UsersData.username},on:{change:function(e){return t.$set(t.UsersData,"username",e.target.value)}}})]),a("div",{staticClass:"form-group"},[t._m(9),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.UsersData.password,expression:"UsersData.password",modifiers:{lazy:!0}}],staticClass:"form-control mb-3",attrs:{type:"text",name:"admin_password",id:"admin_password",placeholder:""},domProps:{value:t.UsersData.password},on:{change:function(e){return t.$set(t.UsersData,"password",e.target.value)}}})])]),a("hr"),a("div",{staticClass:"modal-bottom"},[a("button",{staticClass:"mb-3 btn btn-secondary",attrs:{block:"","data-dismiss":"modal"},on:{click:function(e){return t.cancelModal()}}},[t._v("Cancel")]),a("button",{staticClass:"ms-2 mb-3 btn btn-primary",attrs:{variant:"primary",block:""},on:{click:function(e){return e.preventDefault(),t.addAdmin()}}},[t._v("Create Account")])])])])])])]),a("div",{staticClass:"modal fade modal-update-asset",attrs:{id:"delete-admin",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog rtn-asset",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(10),a("div",{staticClass:"modal-body"},[t.alertSuccess?a("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[a("v-icon",{attrs:{color:"success",size:"15px"}},[t._v("mdi-checkbox-marked-circle")]),t._v("  "),a("strong",[t._v("Success!")]),t._v(" Admin account moved to archived.")],1):t._e(),a("form",{attrs:{action:"",method:"POST"}},[a("div",{staticStyle:{display:"none"}},[a("div",{staticClass:"row align-items-center"},[t._m(11),a("div",{staticClass:"col-auto"},[a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.UsersData.asset_id,expression:"UsersData.asset_id",modifiers:{lazy:!0}}],staticClass:"form-control mb-3",attrs:{type:"text",name:"asset_id",id:"asset_id",placeholder:"",readonly:""},domProps:{value:t.UsersData.asset_id},on:{change:function(e){return t.$set(t.UsersData,"asset_id",e.target.value)}}})])])]),t._m(12),a("br"),a("hr"),a("div",{staticClass:"modal-bottom-rtn"},[a("b-button",{staticClass:"mb-3 btn btn-secondary",attrs:{"data-dismiss":"modal"}},[t._v("Cancel")]),a("b-button",{staticClass:"ms-2 mb-3 btn btn-confirm",staticStyle:{background:"rgb(163, 4, 4)",color:"white"},attrs:{block:""},on:{click:function(e){return e.preventDefault(),t.deleteAdmin()}}},[t._v("Confirm")])],1)])])])])])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h6",{staticClass:"page-header"},[a("strong",[t._v("Manage Admin Accounts ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"admin_id"}},[a("b",[t._v("Admin ID")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"fname"}},[a("b",[t._v("First Name")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"lname"}},[a("b",[t._v("Last Name")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"admin_username"}},[a("b",[t._v("Username"),a("span",{staticStyle:{color:"red"}},[t._v(" *")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h6",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Add admin account")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"fname"}},[a("b",[t._v("First Name"),a("span",{staticStyle:{color:"red"}},[t._v(" *")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"lname"}},[a("b",[t._v("Last Name"),a("span",{staticStyle:{color:"red"}},[t._v(" *")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"admin_username"}},[a("b",[t._v("Username"),a("span",{staticStyle:{color:"red"}},[t._v(" *")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"admin_password"}},[a("b",[t._v("Password"),a("span",{staticStyle:{color:"red"}},[t._v(" *")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h6",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Delete Admin Account")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-auto"},[a("label",{attrs:{for:"asset_id"}},[a("b",[t._v("Admin ID")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"text-align":"center"}},[a("h6",{staticClass:"rtn-modal-title"},[t._v("Are you sure you want to delete this admin account?")])])}],r=a("5ea5"),i=a("ddc0"),o=a("bc3a"),l=a.n(o),d=a("279c"),c=a.n(d),u={name:"manage-admin",data:function(){return{alertSuccess:null,alertError:null,UsersData:[],Admin:[]}},components:{Topbar:i["a"],Sidebar:r["a"]},created:function(){var t=this;if(this.$session.exists("login-session")){var e=this.$session.get("login-session"),a=this.$session.get("login-session-enc");c.a.compare(e,a,(function(e,a){0==a&&t.$router.push({path:"/"})}))}else this.$router.push({path:"/"});this.getAllAdmin()},methods:{showModal:function(t){this.UsersData=t},cancelModal:function(){window.location.reload()},showModalDelete:function(t){this.UsersData=t},getAllAdmin:function(){var t=this;l.a.get("https://dev.motivit.com/ims/Api/admin-api.php?action=getalladmin").then((function(e){console.log(e.data.user_Data),t.Admin=e.data.user_Data})).catch((function(t){console.log(t)}))},openAddForm:function(){this.Reset(),this.alertError=!1},updateAdminInfo:function(){var t=this;if(this.UsersData.username&&this.UsersData.password){var e=new FormData;e.append("id",this.UsersData.id),e.append("fname",this.UsersData.fname),e.append("lname",this.UsersData.lname),e.append("username",this.UsersData.username),l.a.post("https://dev.motivit.com/ims/Api/admin-api.php?action=updateadmininfo",e).then((function(e){e.data.error?(alert("Error"),window.location.reload()):(t.alertError=!1,t.alertSuccess=!0,setTimeout((function(){window.location.reload()}),1e3))})).catch((function(t){console.log(t)}))}else this.alertError=!0},addAdmin:function(){var t=this;if(this.UsersData.username&&this.UsersData.password&&this.UsersData.fname&&this.UsersData.lname){var e=new FormData;e.append("fname",this.UsersData.fname),e.append("lname",this.UsersData.lname),e.append("username",this.UsersData.username),e.append("password",this.UsersData.password),l.a.post("https://dev.motivit.com/ims/Api/admin-api.php?action=addadmin",e).then((function(e){e.data.error?alert(e.data.message):(t.alertError=!1,t.alertSuccess=!0,setTimeout((function(){window.location.reload()}),1e3))})).catch((function(t){console.log(t)}))}else this.alertError=!0},deleteAdmin:function(){var t=this,e=new FormData;e.append("id",this.UsersData.id),l.a.post("https://dev.motivit.com/ims/Api/admin-api.php?action=disableAdmin",e).then((function(e){e.data.error?alert("ERR"):(t.alertSuccess=!0,setTimeout((function(){window.location.reload()}),1e3),t.getAllAdmin())}))},Reset:function(){this.UsersData.id="",this.UsersData.username="",this.UsersData.password=""}}},m=u,f=(a("4472"),a("2877")),v=a("6544"),p=a.n(v),h=a("132d"),b=a("0fd9"),_=Object(f["a"])(m,s,n,!1,null,"537d103a",null);e["default"]=_.exports;p()(_,{VIcon:h["a"],VRow:b["a"]})}}]);
//# sourceMappingURL=chunk-d3ae3b98.04b2e4b3.js.map