(function(t){function e(e){for(var n,i,c=e[0],o=e[1],d=e[2],u=0,m=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);l&&l(e);while(m.length)m.shift()();return r.push.apply(r,d||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],n=!0,i=1;i<s.length;i++){var o=s[i];0!==a[o]&&(n=!1)}n&&(r.splice(e--,1),t=c(c.s=s[0]))}return t}var n={},a={app:0},r=[];function i(t){return c.p+"js/"+({login:"login",register:"register"}[t]||t)+"."+{"chunk-1590b278":"03362433",login:"1bc8c16f",register:"8d1a3f0a"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(t){var e=[],s=a[t];if(0!==s)if(s)e.push(s[2]);else{var n=new Promise((function(e,n){s=a[t]=[e,n]}));e.push(s[2]=n);var r,o=document.createElement("script");o.charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.src=i(t);var d=new Error;r=function(e){o.onerror=o.onload=null,clearTimeout(u);var s=a[t];if(0!==s){if(s){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,s[1](d)}a[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:o})}),12e4);o.onerror=o.onload=r,document.head.appendChild(o)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(s,n,function(e){return t[e]}.bind(null,n));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/my-study-plan/",c.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=d;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},"185d":function(t,e,s){"use strict";e["a"]=function(t){var e=["#FFCDD2","#F8BBD0","#E1BEE7","#D1C4E9","#C5CAE9","#BBDEFB","#B3E5FC","#B2EBF2","#B2DFDB","#C8E6C9","#DCEDC8","#F0F4C3","#FFF9C4","#FFECB3","#FFE0B2","#FFCCBC","#D7CCC8","#CFD8DC"],s=0;if(0===t.length)return e[s];for(var n=0;n<t.length;n+=1)s=t.charCodeAt(n)+((s<<5)-s),s&=s;return s=(s%e.length+e.length)%e.length,e[s]}},"510d":function(t,e,s){"use strict";s("fa8c")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d"),s("ac1f"),s("5319");var n=s("2b0e"),a=s("ee98"),r=s.n(a),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[t.user.loggedIn?s("v-app-bar",{staticClass:"px-2",attrs:{app:"",dense:"",flat:"",dark:"",color:"primary"}},[s("v-tabs",{attrs:{optional:""}},[s("v-tab",{attrs:{dark:"",to:{name:"home"},ripple:!1,"min-width":"96",text:""}},[t._v(" My study plan ")]),s("v-tab",{attrs:{dark:"",to:{name:"subjects"},ripple:!1,"min-width":"96",text:""}},[t._v(" Subjects ")])],1),s("v-spacer"),t.user.loggedIn?s("v-menu",{attrs:{bottom:"","min-width":"200px",rounded:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[s("v-avatar",t._g(t._b({attrs:{color:"white",size:"30"}},"v-avatar",a,!1),n),[s("span",{staticClass:"primary--text"},[t._v(t._s(t.user.data.displayName[0].toUpperCase()))])])]}}],null,!1,1618469274)},[s("v-card",[s("v-card-text",{staticClass:"pa-0 pt-4 text-center"},[s("h3",[t._v(t._s(t.user.data.displayName))]),s("p",{staticClass:"text-caption mt-1"},[t._v(" "+t._s(t.user.data.email)+" ")]),s("v-divider"),s("v-list",{attrs:{dense:""}},[s("v-list-item",{on:{click:t.logout}},[t._v("Logout")])],1)],1)],1)],1):t._e()],1):t._e(),s("v-main",{staticClass:"blue-grey lighten-5"},[s("notifications",{staticClass:"ma-3",attrs:{position:"top right"},scopedSlots:t._u([{key:"body",fn:function(e){var n=e.item;return[s("v-alert",{attrs:{type:"error",border:"left",dense:""}},[t._v(" "+t._s(n.text)+" ")])]}}])}),s("keep-alive",[s("router-view")],1)],1)],1)},c=[],o=s("5530"),d=s("59ca"),u=s.n(d),l=s("2f62"),m={name:"App",data:function(){return{}},computed:Object(o["a"])({},Object(l["c"])("user",["user"])),methods:{logout:function(){u.a.auth().signOut()}}},f=m,p=(s("034f"),s("2877")),S=s("6544"),b=s.n(S),v=s("0798"),E=s("7496"),T=s("40dc"),h=s("8212"),_=s("b0af"),j=s("99d9"),g=s("ce7e"),A=s("8860"),I=s("da13"),O=s("f6c4"),D=s("e449"),C=s("2fa4"),x=s("71a3"),y=s("fe57"),w=Object(p["a"])(f,i,c,!1,null,null,null),k=w.exports;b()(w,{VAlert:v["a"],VApp:E["a"],VAppBar:T["a"],VAvatar:h["a"],VCard:_["a"],VCardText:j["b"],VDivider:g["a"],VList:A["a"],VListItem:I["a"],VMain:O["a"],VMenu:D["a"],VSpacer:C["a"],VTab:x["a"],VTabs:y["a"]});s("d3b7"),s("3ca3"),s("ddb0");var M=s("8c4f"),P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"d-flex semesters align-start",attrs:{fluid:""}},[t.areSemestersLoading?s("v-row",{staticClass:"fill-height",attrs:{"align-content":"center",justify:"center"}},[s("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" Fetching semesters... ")]),s("v-col",{attrs:{cols:"6"}},[s("v-progress-linear",{attrs:{indeterminate:"",rounded:"",height:"6"}})],1)],1):t._e(),t.areSemestersLoaded&&0===t.semesters.length?s("v-row",{staticClass:"fill-height",attrs:{"align-content":"center",justify:"center"}},[t.addingSemester?t._e():s("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[s("p",{staticClass:"text-h5 grey--text text--darken-1 mb-0"},[s("v-icon",{attrs:{"x-large":""}},[t._v("mdi-ghost-outline")]),t._v(" No semester has been registered yet ")],1)]),t.addingSemester?t._e():s("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[s("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.addingSemester=!0}}},[t._v(" Plan semester ")])],1),t.addingSemester?s("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[s("AddSemesterCard",{staticClass:"mx-2",on:{add:function(e){t.addingSemester=!1},cancel:function(e){t.addingSemester=!1}}})],1):t._e()],1):t._e(),t._l(t.semesters,(function(t){return s("StudentSemester",{key:t.id,staticClass:"mx-2",attrs:{id:t.id,name:t.name,"start-date":t.startDate,"end-date":t.endDate}})})),!t.areSemestersLoading&&!t.addingSemester&&t.semesters.length>0?s("AddSemesterButton",{staticClass:"mx-2",on:{click:function(e){t.addingSemester=!0}}}):t._e(),!t.areSemestersLoading&&t.addingSemester&&t.semesters.length>0?s("AddSemesterCard",{staticClass:"mx-2",on:{add:function(e){t.addingSemester=!1},cancel:function(e){t.addingSemester=!1}}}):t._e()],2)},U=[],L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-btn",{attrs:{fab:"",color:"primary"},on:{click:function(e){return t.$emit("click")}}},[s("v-icon",[t._v("mdi-plus")])],1)},R=[],V={name:"AddSemesterButton",props:{},data:function(){return{}},computed:{},methods:{}},B=V,F=s("8336"),N=s("132d"),G=Object(p["a"])(B,L,R,!1,null,null,null),J=G.exports;b()(G,{VBtn:F["a"],VIcon:N["a"]});var $=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{attrs:{"min-width":"200","max-width":"200"}},[s("v-card-text",[s("v-menu",{attrs:{"close-on-content-click":!1,"nudge-left":120,transition:"slide-y-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[s("v-text-field",t._g(t._b({attrs:{outlined:"",dense:"",placeholder:"Start date","prepend-inner-icon":"mdi-calendar",readonly:"","hide-details":"",disabled:t.loading},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}},"v-text-field",a,!1),n))]}}]),model:{value:t.startPicker,callback:function(e){t.startPicker=e},expression:"startPicker"}},[s("v-date-picker",{attrs:{"no-title":""},on:{input:function(e){t.startPicker=!1}},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}})],1),s("v-menu",{attrs:{"close-on-content-click":!1,"nudge-left":120,transition:"slide-y-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[s("v-text-field",t._g(t._b({staticClass:"mt-2",attrs:{outlined:"",dense:"",placeholder:"End date","prepend-inner-icon":"mdi-calendar",readonly:"","hide-details":"",disabled:t.loading},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}},"v-text-field",a,!1),n))]}}]),model:{value:t.endPicker,callback:function(e){t.endPicker=e},expression:"endPicker"}},[s("v-date-picker",{attrs:{"no-title":""},on:{input:function(e){t.endPicker=!1}},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}})],1)],1),s("v-card-actions",{staticClass:"pa-4 pt-0"},[s("v-spacer"),s("v-btn",{attrs:{text:"",small:"",disabled:t.loading},on:{click:t.cancel}},[t._v(" Cancel ")]),s("v-btn",{attrs:{color:"primary",small:"",loading:t.loading},on:{click:t.addSemester}},[t._v(" Add ")])],1)],1)},q=[],H={name:"AddSemesterCard",props:{},data:function(){return{startDate:null,endDate:null,startPicker:!1,endPicker:!1,loading:!1}},computed:Object(o["a"])({},Object(l["c"])("user",["userId"])),methods:Object(o["a"])(Object(o["a"])({},Object(l["b"])("plannedSemester",["planSemester"])),{},{addSemester:function(){var t=this;this.loading=!0,this.planSemester({studentId:this.userId,startDate:this.startDate,endDate:this.endDate}).then((function(){t.startDate=null,t.endDate=null,t.loading=!1,t.$emit("add")}))},cancel:function(){this.startDate=null,this.endDate=null,this.$emit("cancel")}})},z=H,Q=s("2e4b"),W=s("8654"),K=Object(p["a"])(z,$,q,!1,null,null,null),Y=K.exports;b()(K,{VBtn:F["a"],VCard:_["a"],VCardActions:j["a"],VCardText:j["b"],VDatePicker:Q["a"],VMenu:D["a"],VSpacer:C["a"],VTextField:W["a"]});var X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{attrs:{"min-width":"200","max-width":"200",loading:t.isSemesterLoading(t.id),disabled:t.isSemesterLoading(t.id)},on:{mouseover:function(e){t.showSettings=!0},mouseleave:function(e){t.showSettings=!1}}},[s("v-card-text",["view"===t.operation?s("div",{staticClass:"d-flex align-center"},[t._v(" "+t._s(t.name)+" "),s("v-spacer"),t.showSettings?s("v-btn",{attrs:{"x-small":"",icon:""}},[s("v-icon",{on:{click:function(e){t.operation="add-subject"}}},[t._v("mdi-plus")])],1):t._e(),s("v-menu",{attrs:{bottom:"",left:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[s("v-btn",t._g(t._b({attrs:{icon:"","x-small":""}},"v-btn",a,!1),n),[s("v-icon",[t._v("mdi-dots-vertical")])],1)]}}],null,!1,3735098154)},[s("v-list",{attrs:{dense:""}},[s("v-list-item",{on:{click:t.startEdit}},[s("v-list-item-title",[s("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-pencil")]),t._v(" Edit ")],1)],1),s("v-list-item",{on:{click:t.deleteSemester}},[s("v-list-item-title",[s("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-delete")]),t._v(" Delete ")],1)],1)],1)],1)],1):t._e(),"add-subject"===t.operation?s("div",[s("div",{staticClass:"d-flex align-center"},[t._v(" "+t._s(t.name)+" "),s("v-spacer"),s("v-btn",{attrs:{"x-small":"",icon:""}},[s("v-icon",{on:{click:function(e){t.operation="view"}}},[t._v("mdi-close")])],1)],1),s("v-autocomplete",{staticClass:"pt-2",attrs:{items:t.subjects,loading:t.addingSubject,disabled:t.addingSubject,outlined:"",dense:"","hide-details":"auto",placeholder:"Search...","item-text":"name","item-value":"id"},on:{change:t.addSubject},model:{value:t.addedSubject,callback:function(e){t.addedSubject=e},expression:"addedSubject"}})],1):t._e(),"edit"===t.operation?s("div",[s("div",{staticClass:"d-flex align-center"},[t._v(" "+t._s(t.newName)+" "),s("v-spacer"),s("v-btn",{staticClass:"mr-1",attrs:{"x-small":"",icon:"",disabled:t.isSemesterLoading(t.id)},on:{click:t.cancelEdit}},[s("v-icon",[t._v("mdi-close")])],1),s("v-btn",{attrs:{"x-small":"",icon:"",color:"green",loading:t.isSemesterLoading(t.id)},on:{click:t.saveEdit}},[s("v-icon",[t._v("mdi-check")])],1)],1),s("p",{staticClass:"error--text mb-0"},[t._v(t._s(t.editError))]),s("v-text-field",{staticClass:"pt-2",attrs:{outlined:"",dense:"","hide-details":"","error-messages":t.editError,disabled:t.isSemesterLoading(t.id),"prepend-inner-icon":"mdi-text",placeholder:"Name"},model:{value:t.newName,callback:function(e){t.newName=e},expression:"newName"}}),s("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[s("v-text-field",t._g(t._b({staticClass:"mt-2",attrs:{outlined:"",dense:"","prepend-inner-icon":"mdi-calendar",readonly:"","hide-details":"","error-messages":t.editError,disabled:t.isSemesterLoading(t.id)},model:{value:t.newStart,callback:function(e){t.newStart=e},expression:"newStart"}},"v-text-field",a,!1),n))]}}],null,!1,3693147852),model:{value:t.startPicker,callback:function(e){t.startPicker=e},expression:"startPicker"}},[s("v-date-picker",{attrs:{"no-title":""},on:{input:function(e){t.startPicker=!1}},model:{value:t.newStart,callback:function(e){t.newStart=e},expression:"newStart"}})],1),s("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[s("v-text-field",t._g(t._b({staticClass:"mt-2",attrs:{outlined:"",dense:"","prepend-inner-icon":"mdi-calendar","hide-details":"",readonly:"",disabled:t.isSemesterLoading(t.id),"error-messages":t.editError},model:{value:t.newEnd,callback:function(e){t.newEnd=e},expression:"newEnd"}},"v-text-field",a,!1),n))]}}],null,!1,791328291),model:{value:t.endPicker,callback:function(e){t.endPicker=e},expression:"endPicker"}},[s("v-date-picker",{attrs:{"no-title":""},on:{input:function(e){t.endPicker=!1}},model:{value:t.newEnd,callback:function(e){t.newEnd=e},expression:"newEnd"}})],1)],1):t._e(),s("draggable",{attrs:{id:this.id,group:"studentSemester"},on:{add:t.moveSubject},model:{value:t.attempts,callback:function(e){t.attempts=e},expression:"attempts"}},t._l(t.attempts,(function(e){return s("SubjectAttempt",{key:e.id,attrs:{id:e.id,"semester-id":t.id,"subject-id":e.subjectId,professor:e.professor,grade:e.grade}})})),1)],1)],1)},Z=[],tt=(s("b0c0"),s("b76a")),et=s.n(tt),st=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{class:t.cardClasses,attrs:{id:t.id,color:t.cardColor,loading:!!t.isAttemptLoading(t.id)&&"primary",disabled:t.isAttemptLoading(t.id)},on:{mouseover:function(e){t.showSettings=!0},mouseleave:function(e){t.showSettings=!1}}},["view"===t.operation?s("v-card-text",{staticClass:"pa-3"},[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"text-caption my-0"},[t._v(" "+t._s(t.subject(t.subjectId).code)+" • "+t._s(t.subject(t.subjectId).credits)+"  ")]),t.grade?s("div",{staticClass:"text-caption my-0 "},[t._v(" • "),s("span",{class:t.gradeColor+"--text text--darken-3"},[t._v(t._s(t.grade.toFixed(2)))])]):t._e(),s("v-spacer"),s("v-menu",{attrs:{bottom:"",left:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[s("v-btn",t._g(t._b({attrs:{icon:"","x-small":""}},"v-btn",a,!1),n),[s("v-icon",[t._v("mdi-dots-vertical")])],1)]}}],null,!1,3735098154)},[s("v-list",{attrs:{dense:""}},[s("v-list-item",{on:{click:t.startEdit}},[s("v-list-item-title",[s("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-pencil")]),t._v(" Edit ")],1)],1),s("v-list-item",{on:{click:t.remove}},[s("v-list-item-title",[s("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-delete")]),t._v(" Delete ")],1)],1)],1)],1)],1),s("p",{staticClass:"font-weight-bold text-body-1 my-0 text-truncate"},[t._v(" "+t._s(t.subject(t.subjectId).name)+" ")]),s("p",{staticClass:"text-caption mb-0"},[t._v(" "+t._s(t.professor)+" ")])]):"edit"===t.operation?s("v-card-text",{staticClass:"pa-3"},["edit"===t.operation?s("div",{staticClass:"d-flex align-center flex-wrap"},[s("div",{staticClass:"text-caption my-0"},[t._v(" "+t._s(t.subject(t.subjectId).code)+" • "+t._s(t.subject(t.subjectId).credits)+" ")]),s("v-spacer"),s("v-btn",{attrs:{icon:"","x-small":""},on:{click:t.cancelEdit}},[s("v-icon",[t._v("mdi-close")])],1),s("v-btn",{attrs:{icon:"","x-small":"",color:"success"},on:{click:t.saveEdit}},[s("v-icon",[t._v("mdi-check")])],1)],1):t._e(),s("p",{staticClass:"font-weight-bold text-body-1 my-0 text-truncate"},[t._v(" "+t._s(t.subject(t.subjectId).name)+" ")]),s("v-text-field",{staticClass:"mb-1",attrs:{type:"number",step:"0.1",solo:"",dense:"","hide-details":"",placeholder:"Grade",height:"5"},model:{value:t.newGrade,callback:function(e){t.newGrade=e},expression:"newGrade"}}),s("v-text-field",{attrs:{solo:"",dense:"","hide-details":"",placeholder:"Professor"},model:{value:t.newProfessor,callback:function(e){t.newProfessor=e},expression:"newProfessor"}})],1):t._e()],1)},nt=[],at=(s("a9e3"),s("b680"),s("185d")),rt={name:"SubjectAttempt",props:{id:{type:String,default:""},semesterId:{type:String,default:""},subjectId:{type:String,default:""},professor:{type:String,default:null},grade:{type:Number,default:null}},data:function(){return{operation:"view",newProfessor:null,newGrade:null,showSettings:!1,cardClasses:["my-3","attempt-card"]}},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(l["c"])("user",["userId"])),Object(l["c"])("subject",["subject"])),Object(l["c"])("subjectAttempt",["isAttemptLoading"])),{},{gradeColor:function(){return this.grade>=5?"green":"red"},cardColor:function(){var t=this.subject(this.subjectId),e=t.code;return Object(at["a"])(e)}}),methods:Object(o["a"])(Object(o["a"])({},Object(l["b"])("subjectAttempt",["removeSubjectAttempt","updateSubjectAttempt"])),{},{startEdit:function(){var t;this.operation="edit",this.newProfessor=this.professor,this.newGrade=null===(t=this.grade)||void 0===t?void 0:t.toFixed(2)},cancelEdit:function(){this.operation="view"},saveEdit:function(){var t=this;this.updateSubjectAttempt({studentId:this.userId,semesterId:this.semesterId,attemptId:this.id,newProfessor:this.newProfessor,newGrade:parseFloat(this.newGrade)}).then((function(){t.operation="view"}))},remove:function(){this.removeSubjectAttempt({studentId:this.userId,semesterId:this.semesterId,attemptId:this.id})}})},it=rt,ct=s("5d23"),ot=Object(p["a"])(it,st,nt,!1,null,null,null),dt=ot.exports;b()(ot,{VBtn:F["a"],VCard:_["a"],VCardText:j["b"],VIcon:N["a"],VList:A["a"],VListItem:I["a"],VListItemTitle:ct["b"],VMenu:D["a"],VSpacer:C["a"],VTextField:W["a"]});var ut={components:{SubjectAttempt:dt,Draggable:et.a},name:"StudentSemester",props:{id:{type:String,default:""},name:{type:String,default:""},startDate:{type:String,default:""},endDate:{type:String,default:""}},data:function(){return{showSettings:!1,operation:"view",newName:"",newStart:"",newEnd:"",startPicker:!1,endPicker:!1,editError:null,addedSubject:null,addingSubject:!1}},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(l["c"])("user",["user","userId"])),Object(l["c"])("plannedSemester",["isSemesterLoading"])),Object(l["c"])("subject",["subjects"])),Object(l["c"])("subjectAttempt",["semesterAttempts","areSemesterAttemptsLoaded"])),{},{attempts:{get:function(){return this.semesterAttempts(this.id)},set:function(t){this.$store.commit("subjectAttempt/SET_SEMESTER_ATTEMPTS",{semesterId:this.id,attempts:t})}}}),methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(l["b"])("plannedSemester",["updateSemester","removeSemester"])),Object(l["b"])("subjectAttempt",["fetchSemesterAttempts","addSubjectAttempt","moveSubjectAttempt"])),{},{deleteSemester:function(){this.removeSemester({studentId:this.userId,semesterId:this.id})},startEdit:function(){this.newName=this.name,this.newStart=this.startDate,this.newEnd=this.endDate,this.operation="edit"},cancelEdit:function(){this.newName=this.name,this.newStart=this.startDate,this.newEnd=this.endDate,this.editError=null,this.operation="view"},saveEdit:function(){var t=this;this.editError=null,this.updateSemester({studentId:this.user.data.uid,semester:{id:this.id,name:this.newName,startDate:this.newStart,endDate:this.newEnd}}).then((function(){t.operation="view"})).catch((function(e){t.editError=e.response.data.error.message}))},addSubject:function(t){var e=this;this.addingSubject=!0,this.addSubjectAttempt({studentId:this.userId,semesterId:this.id,subjectId:t}).then((function(){e.addingSubject=!1,e.addedSubject=null}))},moveSubject:function(t){this.moveSubjectAttempt({studentId:this.userId,attemptId:t.item.id,oldSemesterId:t.from.id,newSemesterId:t.to.id})}}),mounted:function(){this.areSemesterAttemptsLoaded(this.id)||this.fetchSemesterAttempts({studentId:this.userId,semesterId:this.id})}},lt=ut,mt=s("c6a6"),ft=Object(p["a"])(lt,X,Z,!1,null,null,null),pt=ft.exports;b()(ft,{VAutocomplete:mt["a"],VBtn:F["a"],VCard:_["a"],VCardText:j["b"],VDatePicker:Q["a"],VIcon:N["a"],VList:A["a"],VListItem:I["a"],VListItemTitle:ct["b"],VMenu:D["a"],VSpacer:C["a"],VTextField:W["a"]});var St={name:"Home",components:{AddSemesterButton:J,AddSemesterCard:Y,StudentSemester:pt},data:function(){return{addingSemester:!1}},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(l["c"])("user",["user"])),Object(l["c"])("plannedSemester",["semesters","areSemestersLoaded","areSemestersLoading"])),Object(l["c"])("subject",["areSubjectsLoaded"])),methods:Object(o["a"])(Object(o["a"])({},Object(l["b"])("plannedSemester",["fetchSemesters"])),Object(l["b"])("subject",["fetchSubjects"])),mounted:function(){this.areSemestersLoaded||this.fetchSemesters(this.user.data.uid),this.areSubjectsLoaded||this.fetchSubjects()}},bt=St,vt=(s("510d"),s("62ad")),Et=s("a523"),Tt=s("8e36"),ht=s("0fd9"),_t=Object(p["a"])(bt,P,U,!1,null,"e9291812",null),jt=_t.exports;b()(_t,{VBtn:F["a"],VCol:vt["a"],VContainer:Et["a"],VIcon:N["a"],VProgressLinear:Tt["a"],VRow:ht["a"]}),n["default"].use(M["a"]);var gt=[{path:"/",name:"home",component:jt,meta:{authRequired:!0}},{path:"/subjects",name:"subjects",component:function(){return s.e("chunk-1590b278").then(s.bind(null,"c9a4"))},meta:{authRequired:!0}},{path:"/login",name:"login",component:function(){return s.e("login").then(s.bind(null,"a55b"))},meta:{anonymousRequired:!0}},{path:"/register",name:"register",component:function(){return s.e("register").then(s.bind(null,"73cf"))},meta:{anonymousRequired:!0}}],At=new M["a"]({mode:"hash",base:"/my-study-plan/",routes:gt});At.beforeEach((function(t,e,s){t.matched.some((function(t){return t.meta.authRequired}))&&(u.a.auth().currentUser||s({name:"login"})),t.matched.some((function(t){return t.meta.anonymousRequired}))&&u.a.auth().currentUser&&s({name:"home"}),s()}));var It=At,Ot=s("2909"),Dt=s("ade3"),Ct=(s("7db0"),s("c740"),s("159b"),s("bc3a")),xt=s.n(Ct);xt.a.defaults.baseURL="https://api-my-study-plan.herokuapp.com",xt.a.defaults.headers.common["Content-Type"]="application/json";var yt=xt.a,wt=function(t){var e="/students";return yt.post(e,{id:t})},kt={namespaced:!0,state:{user:{loggedIn:!1,data:null}},getters:{user:function(t){return t.user},userId:function(t){return t.user.data.uid}},mutations:{SET_LOGGED_IN:function(t,e){t.user.loggedIn=e},SET_USER:function(t,e){t.user.data=e}},actions:{registerUser:function(t,e){return wt(e)},updateUser:function(t,e){var s=t.commit;s("SET_LOGGED_IN",null!==e),s("SET_USER",e?{uid:e.uid,displayName:e.displayName,email:e.email}:null)}}},Mt=(s("4e827"),s("4de4"),s("99af"),function(t){var e="/students/".concat(t,"/semesters");return yt.get(e).then((function(t){return t.data.semesters}))}),Pt=function(t,e,s){var n="/students/".concat(t,"/semesters");return yt.post(n,{startDate:e,endDate:s}).then((function(t){return t.data}))},Ut=function(t,e,s,n,a){var r="/students/".concat(t,"/semesters/").concat(e);return yt.put(r,{name:s,startDate:n,endDate:a})},Lt=function(t,e){var s="/students/".concat(t,"/semesters/").concat(e);return yt.delete(s)},Rt={namespaced:!0,state:{semesters:[],semestersStatus:"pending",semesterStatus:{}},getters:{semesters:function(t){return t.semesters},semester:function(t){return function(e){return t.semesters.find((function(t){return t.id===e}))}},isSemesterLoading:function(t){return function(e){return"loading"===t.semesterStatus[e]}},areSemestersLoaded:function(t){return"loaded"===t.semestersStatus},areSemestersLoading:function(t){return"loading"===t.semestersStatus}},mutations:{SET_SEMESTERS:function(t,e){t.semesters=e},ADD_SEMESTER:function(t,e){var s=t.semesters;s.push(e),s.sort((function(t,e){return t.startDate<e.startDate?-1:t.startDate>e.startDate?1:0})),t.semesters=s},REMOVE_SEMESTER:function(t,e){t.semesters=t.semesters.filter((function(t){return t.id!==e}));var s=Object(o["a"])({},t.semesterStatus);delete s[e],t.semesterStatus=s},UPDATE_SEMESTER:function(t,e){var s=t.semesters.findIndex((function(t){return t.id===e.id})),n=Object(Ot["a"])(t.semesters);n[s]=e,t.semesters=n},RESET_SEMESTERS_STATUS:function(t){var e={};t.semesters.forEach((function(t){e[t.id]="loaded"})),t.semesterStatus=e},SET_SEMESTER_LOADING:function(t,e){t.semesterStatus=Object(o["a"])(Object(o["a"])({},t.semesterStatus),{},Object(Dt["a"])({},e,"loading"))},SET_SEMESTER_LOADED:function(t,e){t.semesterStatus=Object(o["a"])(Object(o["a"])({},t.semesterStatus),{},Object(Dt["a"])({},e,"loaded"))},SET_SEMESTERS_STATUS:function(t,e){t.semestersStatus=e}},actions:{fetchSemesters:function(t,e){var s=t.commit;s("SET_SEMESTERS_STATUS","loading"),Mt(e).then((function(t){s("SET_SEMESTERS",t),s("SET_SEMESTERS_STATUS","loaded")})).catch((function(){s("SET_SEMESTERS_STATUS","error")}))},planSemester:function(t,e){var s=t.commit,n=e.studentId,a=e.startDate,r=e.endDate;return Pt(n,a,r).then((function(t){s("SET_SEMESTER_LOADED",t.id),s("ADD_SEMESTER",t)}))},updateSemester:function(t,e){var s=t.commit,n=e.studentId,a=e.semester;return s("SET_SEMESTER_LOADING",a.id),Ut(n,a.id,a.name,a.startDate,a.endDate).then((function(){s("UPDATE_SEMESTER",a),s("SET_SEMESTER_LOADED",a.id)})).catch((function(t){throw s("SET_SEMESTER_LOADED",a.id),t}))},removeSemester:function(t,e){var s=t.commit,n=e.studentId,a=e.semesterId;return s("SET_SEMESTER_LOADING",a),Lt(n,a).then((function(){s("REMOVE_SEMESTER",a)}))}}},Vt=function(){var t="/subjects";return yt.get(t).then((function(t){return t.data.subjects}))},Bt=function(t,e,s){var n="/subjects";return yt.post(n,{code:t,name:e,credits:s,prerequisites:[],corequisites:[]}).then((function(t){return t.data.id}))},Ft=function(t){var e="/subjects/".concat(t);return yt.delete(e)},Nt={namespaced:!0,state:{subjects:[],subjectsStatus:"pending",subjectStatus:{}},getters:{subjects:function(t){return t.subjects},subject:function(t){return function(e){return t.subjects.find((function(t){return t.id===e}))}},isSubjectLoading:function(t){return function(e){return"loading"===t.subjectStatus[e]}},areSubjectsLoaded:function(t){return"loaded"===t.subjectsStatus}},mutations:{SET_SUBJECTS:function(t,e){t.subjects=e},ADD_SUBJECT:function(t,e){var s=[].concat(Object(Ot["a"])(t.subjects),[e]);t.subjects=s},REMOVE_SUBJECT:function(t,e){t.subjects=t.subjects.filter((function(t){return t.id!==e}));var s=Object(o["a"])({},t.subjectStatus);delete s[e],t.subjectStatus=s},UPDATE_SUBJECT:function(t,e){var s=t.subjects.findIndex((function(t){return t.id===e.id})),n=Object(Ot["a"])(t.subjects);n[s]=e,t.subjects=n},RESET_SUBJECTS_STATUS:function(t){var e={};t.subjects.forEach((function(t){e[t.id]="loaded"})),t.subjectStatus=e},SET_SUBJECT_LOADING:function(t,e){t.subjectStatus=Object(o["a"])(Object(o["a"])({},t.subjectStatus),{},Object(Dt["a"])({},e,"loading"))},SET_SUBJECT_LOADED:function(t,e){t.subjectStatus=Object(o["a"])(Object(o["a"])({},t.subjectStatus),{},Object(Dt["a"])({},e,"loaded"))},SET_SUBJECTS_STATUS:function(t,e){t.subjectStatus=e}},actions:{fetchSubjects:function(t,e){var s=t.commit;s("SET_SUBJECTS_STATUS","loading"),Vt(e).then((function(t){s("SET_SUBJECTS",t),s("SET_SUBJECTS_STATUS","loaded")})).catch((function(){s("SET_SUBJECTS_STATUS","error")}))},addSubject:function(t,e){var s=t.commit,n=e.code,a=e.name,r=e.credits;return Bt(n,a,r).then((function(t){var e={id:t,code:n,name:a,credits:r};return s("ADD_SUBJECT",e),s("SET_SUBJECT_LOADED",t),t})).catch((function(t){throw t.response.data.error}))},removeSubject:function(t,e){var s=t.commit,n=e.subjectId;return s("SET_SUBJECT_LOADING",n),Ft(n).then((function(){s("REMOVE_SUBJECT",n)}))}}},Gt=function(t,e){var s="/students/".concat(t,"/semesters/").concat(e,"/subject-attempts");return yt.get(s).then((function(t){return t.data.subjectAttempts}))},Jt=function(t,e,s){var n="/students/".concat(t,"/semesters/").concat(e,"/subject-attempts");return yt.post(n,{subjectId:s}).then((function(t){return t.data.id}))},$t=function(t,e,s,n,a,r){var i="/students/".concat(t,"/semesters/").concat(e,"/subject-attempts/").concat(s);return yt.put(i,{grade:n,professor:a,semesterId:r})},qt=function(t,e,s){var n="/students/".concat(t,"/semesters/").concat(e,"/subject-attempts/").concat(s);return yt.delete(n)},Ht={namespaced:!0,state:{attempts:{},attemptStatus:{}},getters:{semesterAttempts:function(t){return function(e){return t.attempts[e]}},areSemesterAttemptsLoaded:function(t){return function(e){return e in t.attempts}},isAttemptLoading:function(t){return function(e){return"loading"===t.attemptStatus[e]}}},mutations:{SET_SEMESTER_ATTEMPTS:function(t,e){var s=e.semesterId,n=e.attempts,a=Object(o["a"])(Object(o["a"])({},t.attempts),{},Object(Dt["a"])({},s,n));t.attempts=a},ADD_SEMESTER_ATTEMPT:function(t,e){var s=e.semesterId,n=e.attempt,a=Object(o["a"])(Object(o["a"])({},t.attempts),{},Object(Dt["a"])({},s,[].concat(Object(Ot["a"])(t.attempts[s]),[n])));t.attempts=a},UPDATE_SEMESTER_ATTEMPT:function(t,e){var s=e.semesterId,n=e.attempt,a=Object(Ot["a"])(t.attempts[s]),r=a.findIndex((function(t){return t.id===n.id}));a[r]=n,t.attempts=Object(o["a"])(Object(o["a"])({},t.attempts),{},Object(Dt["a"])({},s,a))},REMOVE_SEMESTER_ATTEMPT:function(t,e){var s=e.semesterId,n=e.attemptId,a=t.attempts[s].filter((function(t){return t.id!==n}));t.attempts=Object(o["a"])(Object(o["a"])({},t.attempts),{},Object(Dt["a"])({},s,a));var r=Object(o["a"])({},t.attemptStatus);delete r[n],t.attemptStatus=r},SET_ATTEMPT_STATUS:function(t,e){var s=e.attemptId,n=e.status;t.attemptStatus=Object(o["a"])(Object(o["a"])({},t.attemptStatus),{},Object(Dt["a"])({},s,n))}},actions:{fetchSemesterAttempts:function(t,e){var s=t.commit,n=e.studentId,a=e.semesterId;return Gt(n,a).then((function(t){return s("SET_SEMESTER_ATTEMPTS",{semesterId:a,attempts:t}),t.forEach((function(t){s("SET_ATTEMPT_STATUS",{attemptId:t.id,status:"loaded"})})),t}))},addSubjectAttempt:function(t,e){var s=this,n=t.commit,a=e.studentId,r=e.semesterId,i=e.subjectId;return Jt(a,r,i).then((function(t){var e={id:t,subjectId:i,grade:null,professor:null};n("ADD_SEMESTER_ATTEMPT",{semesterId:r,attempt:e}),n("SET_ATTEMPT_STATUS",{attemptId:t,status:"loaded"})})).catch((function(t){s._vm.$notify({text:t.response.data.error.message})}))},updateSubjectAttempt:function(t,e){var s=t.commit,n=t.getters,a=e.studentId,r=e.semesterId,i=e.attemptId,c=e.newGrade,o=e.newProfessor;return s("SET_ATTEMPT_STATUS",{attemptId:i,status:"loading"}),$t(a,r,i,c,o,r).then((function(){var t=n.semesterAttempts(r).find((function(t){return t.id===i}));t.professor=o,t.grade=c,s("UPDATE_SEMESTER_ATTEMPT",{semesterId:r,attempt:t}),s("SET_ATTEMPT_STATUS",{attemptId:i,status:"loaded"})}))},removeSubjectAttempt:function(t,e){var s=t.commit,n=e.studentId,a=e.semesterId,r=e.attemptId;return s("SET_ATTEMPT_STATUS",{attemptId:r,status:"loading"}),qt(n,a,r).then((function(){s("REMOVE_SEMESTER_ATTEMPT",{semesterId:a,attemptId:r})}))},moveSubjectAttempt:function(t,e){var s=this,n=t.state,a=t.commit,r=e.studentId,i=e.attemptId,c=e.oldSemesterId,o=e.newSemesterId;a("SET_ATTEMPT_STATUS",{attemptId:i,status:"loading"});var d=n.attempts[o].find((function(t){return t.id===i}));return $t(r,c,i,d.grade,d.professor,o).then((function(){a("SET_ATTEMPT_STATUS",{attemptId:i,status:"loaded"})})).catch((function(t){s._vm.$notify({text:t.response.data.error.message}),a("REMOVE_SEMESTER_ATTEMPT",{semesterId:o,attemptId:i}),a("ADD_SEMESTER_ATTEMPT",{semesterId:c,attempt:d}),a("SET_ATTEMPT_STATUS",{attemptId:i,status:"error"})}))}}};n["default"].use(l["a"]);var zt=new l["a"].Store({state:{studentSemesters:[],studentSemestersStatus:"not loaded",attemptsStatus:{}},getters:{getStudentSemesters:function(t){return t.studentSemesters},semestersLoaded:function(t){return"loaded"===t.studentSemestersStatus},isAttemptLoading:function(t){return function(e){return"loading"===t.attemptsStatus[e]}},semesterAttempts:function(t){return function(e){return t.studentSemesters.find((function(t){return t.id===e})).attempts}}},mutations:{UPDATE_STUDENT_SEMESTERS:function(t,e){t.studentSemesters=e},UPDATE_STUDENT_SEMESTER_STATUS:function(t,e){t.studentSemestersStatus=e},UPDATE_ATTEMPT_STATUS:function(t,e){var s=e.attemptId,n=e.status;t.attemptsStatus=Object(o["a"])(Object(o["a"])({},t.attemptsStatus),{},Object(Dt["a"])({},s,n))},UPDATE_SEMESTER_ATTEMPTS:function(t,e){var s=e.semesterId,n=e.attempts,a=t.studentSemesters.findIndex((function(t){return t.id===s}));t.studentSemesters[a].attempts=n}},actions:{fetchStudentSemesters:function(t){var e=t.commit,s=function(t){return new Promise((function(e){setTimeout(e,t)}))};s(1e3).then((function(){var t=[{id:"1",name:"2016.2",attempts:[{id:"1",subject:{code:"EEL-170",name:"Computação I",credits:5},professor:"AC",grade:8.2},{id:"2",subject:{code:"MAC-118",name:"Calculo I",credits:6},professor:"Helena Judith",grade:4.5},{id:"3",subject:{code:"FIS-111",name:"FisExp I",credits:1},professor:"Yara do Amaral",grade:6.2},{id:"4",subject:{code:"FIT-112",name:"Fisica I",credits:4},professor:"Joaquim",grade:8.7},{id:"5",subject:{code:"EEI-206",name:"HisTec",credits:2},professor:"Celso",grade:10}]},{id:"2",name:"2017.1",attempts:[{id:"6",subject:{code:"EEL-280",name:"Circ. Logicos",credits:5},professor:"Jose Arthur",grade:5},{id:"7",subject:{code:"EEL-270",name:"Computacao II",credits:5},professor:"Marcelo Lanza",grade:6.1},{id:"8",subject:{code:"MAC-118",name:"Calculo I",credits:6},professor:"Flavio Dickstein",grade:7.9},{id:"9",subject:{code:"EEH-210",name:"EMA",credits:2},professor:"Ricardo Musafir",grade:6.9},{id:"10",subject:{code:"MAE-125",name:"AlgeLin",credits:4},professor:"Marcello Campos",grade:6.4}]},{id:"3",name:"2017.2",attempts:[{id:"11",subject:{code:"MAC-128",name:"Calculo II",credits:4},professor:"Wilton Arruda",grade:7.6},{id:"12",subject:{code:"EEL-315",name:"Eletronica I",credits:3},professor:"Marcio Nogueira",grade:6.4},{id:"13",subject:{code:"FIS-121",name:"FisExp II",credits:1},professor:"Alexis",grade:5.6},{id:"14",subject:{code:"FIT-122",name:"Fisica II",credits:4},professor:"Marcela Campista",grade:6.6},{id:"15",subject:{code:"IQG-111",name:"Quimica",credits:4},professor:"Emerson",grade:8},{id:"16",subject:{code:"EEG-105",name:"SisProj",credits:4},professor:"Gisele Barboa",grade:9},{id:"17",subject:{code:"EEW-215",name:"Topicos HistEng",credits:2},professor:"Mercio",grade:10}]}];e("UPDATE_STUDENT_SEMESTERS",t),e("UPDATE_STUDENT_SEMESTER_STATUS","loaded"),t.reduce((function(t,e){return t.push.apply(t,Object(Ot["a"])(e.attempts)),t}),[]).forEach((function(t){e("UPDATE_ATTEMPT_STATUS",{attemptId:t.id,status:"loaded"})}))}))},moveSubjectAttempt:function(t,e){var s=this,n=t.commit,a=e.attemptId,r=function(t){return new Promise((function(e){setTimeout(e,t)}))};n("UPDATE_ATTEMPT_STATUS",{attemptId:a,status:"loading"}),r(1e3).then((function(){if(n("UPDATE_STUDENT_SEMESTER_STATUS","loaded"),"a"===a)throw Error("It was not possible to move subject across semesters.");n("UPDATE_ATTEMPT_STATUS",{attemptId:a,status:"loaded"})})).catch((function(t){s._vm.$notify({type:"error",text:t.message}),n("UPDATE_ATTEMPT_STATUS",{attemptId:a,status:"error"})}))}},modules:{user:kt,plannedSemester:Rt,subject:Nt,subjectAttempt:Ht}}),Qt=s("f309");n["default"].use(Qt["a"]);var Wt=new Qt["a"]({}),Kt=(s("ea7b"),{apiKey:"AIzaSyDgpuzM1jqfSsRG5gFRHpnOoD9UOy2EQmc",authDomain:"ms-my-curriculum.firebaseapp.com",databaseURL:"https://ms-my-curriculum-default-rtdb.firebaseio.com",projectId:"ms-my-curriculum",storageBucket:"ms-my-curriculum.appspot.com",messagingSenderId:"289677214857",appId:"1:289677214857:web:8fb49cae9c5f377e3bb258"});u.a.initializeApp(Kt),u.a.auth().setPersistence(u.a.auth.Auth.Persistence.LOCAL);var Yt=u.a;Yt.auth().onAuthStateChanged((function(t){if(zt.dispatch("user/updateUser",t),t)It.replace({name:"home"});else{var e,s,n=null===(e=It.currentRoute)||void 0===e||null===(s=e.meta)||void 0===s?void 0:s.authRequired;n&&It.replace({name:"login"})}})),n["default"].config.productionTip=!1,n["default"].use(r.a),new n["default"]({router:It,store:zt,vuetify:Wt,render:function(t){return t(k)}}).$mount("#app")},"85ec":function(t,e,s){},fa8c:function(t,e,s){}});
//# sourceMappingURL=app.eb5b3781.js.map