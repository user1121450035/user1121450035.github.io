(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-258a15fa"],{"0bea":function(t,e,a){},"333d":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[a("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},i=[];a("c5f6");Math.easeInOutQuad=function(t,e,a,n){return t/=n/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function o(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function s(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function l(t,e,a){var n=s(),i=t-n,l=20,u=0;e="undefined"===typeof e?500:e;var c=function t(){u+=l;var s=Math.easeInOutQuad(u,n,i,e);o(s),u<e?r(t):a&&"function"===typeof a&&a()};c()}var u={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:15},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&l(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&l(0,800)}}},c=u,d=(a("d99d"),a("2877")),p=Object(d["a"])(c,n,i,!1,null,"553bf77d",null);e["a"]=p.exports},5105:function(t,e,a){},5235:function(t,e,a){"use strict";var n=a("5105"),i=a.n(n);i.a},aa77:function(t,e,a){var n=a("5ca1"),i=a("be13"),r=a("79e5"),o=a("fdef"),s="["+o+"]",l="​",u=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),d=function(t,e,a){var i={},s=r(function(){return!!o[t]()||l[t]()!=l}),u=i[t]=s?e(p):o[t];a&&(i[a]=u),n(n.P+n.F*s,"String",i)},p=d.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(c,"")),t};t.exports=d},c5f6:function(t,e,a){"use strict";var n=a("7726"),i=a("69a8"),r=a("2d95"),o=a("5dbc"),s=a("6a99"),l=a("79e5"),u=a("9093").f,c=a("11e9").f,d=a("86cc").f,p=a("aa77").trim,f="Number",m=n[f],g=m,h=m.prototype,b=r(a("2aeb")(h))==f,v="trim"in String.prototype,y=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){e=v?e.trim():p(e,3);var a,n,i,r=e.charCodeAt(0);if(43===r||45===r){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+e}for(var o,l=e.slice(2),u=0,c=l.length;u<c;u++)if(o=l.charCodeAt(u),o<48||o>i)return NaN;return parseInt(l,n)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof m&&(b?l(function(){h.valueOf.call(a)}):r(a)!=f)?o(new g(y(e)),a,m):y(e)};for(var w,_=a("9e1e")?u(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;_.length>S;S++)i(g,w=_[S])&&!i(m,w)&&d(m,w,c(g,w));m.prototype=h,h.constructor=m,a("2aba")(n,f,m)}},d99d:function(t,e,a){"use strict";var n=a("0bea"),i=a.n(n);i.a},fbd6:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[t.Permission("platforms.store")?a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v("\n\t\t\t添加\n\t\t")]):t._e()],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"平台名",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:"230","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[t.Permission("platforms.update")?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleUpdate(n)}}},[t._v("\n\t\t\t\t\t编辑\n\t\t\t\t")]):t._e(),t._v(" "),t.Permission("platforms.destroy")?a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(e){return t.handleDelete(n)}}},[t._v("\n\t\t\t\t\t删除\n\t\t\t\t")]):t._e()]}}])})],1),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.pagelist.page,limit:t.pagelist.limit},on:{"update:page":function(e){return t.$set(t.pagelist,"page",e)},"update:limit":function(e){return t.$set(t.pagelist,"limit",e)},pagination:t.getPlatforms}}),t._v(" "),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.temp,"label-position":"left","label-width":"70px"}},[a("el-form-item",{attrs:{label:"平台名",prop:"name"}},[a("el-input",{model:{value:t.temp.name,callback:function(e){t.$set(t.temp,"name",e)},expression:"temp.name"}})],1),t._v(" "),"hidden"!=t.temp.username?a("el-form-item",{attrs:{label:"用户名",prop:"username"}},[a("el-input",{model:{value:t.temp.username,callback:function(e){t.$set(t.temp,"username",e)},expression:"temp.username"}})],1):t._e(),t._v(" "),"hidden"!=t.temp.password?a("el-form-item",{attrs:{label:"密码",prop:"password"}},[a("el-input",{model:{value:t.temp.password,callback:function(e){t.$set(t.temp,"password",e)},expression:"temp.password"}})],1):t._e()],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("\n\t\t\t\t取消\n\t\t\t")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){"create"===t.dialogStatus?t.creatBank():t.updateData()}}},[t._v("\n\t\t\t\t"+t._s("create"===t.dialogStatus?"添加":"确定")+"\n\t\t\t")])],1)],1)],1)},i=[],r=(a("ac4d"),a("8a81"),a("ac6a"),a("8593")),o=a("fdcf"),s=a("333d"),l={name:"branches",components:{Pagination:s["a"]},data:function(){return{gridData:[],dialogTableVisible:!1,tableKey:0,list:null,total:0,listLoading:!0,pagelist:{page:1,limit:10},dialogStatus:"",textMap:{update:"编辑",create:"添加平台",read:"查看"},rules:{name:[{required:!0,message:"平台名不能为空",trigger:"blur"}],username:[{required:!0,message:"用户名不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}]},dialogFormVisible:!1,temp:{password:"",username:"",name:""}}},created:function(){this.getPlatforms(this.pagelist)},methods:{Permission:function(t){return Object(o["a"])(t)},getPlatforms:function(t){var e=this;this.listLoading=!0,this.pagelist=t,Object(r["t"])(t).then(function(t){e.list=t.data,e.total=t.meta.total,setTimeout(function(){e.listLoading=!1},1e3)})},handleCreate:function(){var t=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs["dataForm"].clearValidate()})},creatBank:function(){var t=this;this.$refs["dataForm"].validate(function(e){if(!e)return!1;Object(r["c"])(t.temp).then(function(e){t.list.length+1<=t.pagelist.limit&&t.list.push(e.data),t.total+=1,t.dialogFormVisible=!1,t.$message({type:"success",message:"添加成功",duration:"1000"})}).catch(function(t){console.log(t)})})},resetTemp:function(){this.temp={password:"",username:"",name:""}},handleUpdate:function(t){var e=this;this.temp=Object.assign({},t),this.temp.username="hidden",this.temp.password="hidden",this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs["dataForm"].clearValidate()})},updateData:function(){var t=this;this.$refs["dataForm"].validate(function(e){if(!e)return!1;(function(){var e=Object.assign({},t.temp),a=!0,n=!1,i=void 0;try{for(var o,s=t.list[Symbol.iterator]();!(a=(o=s.next()).done);a=!0){var l=o.value;l.id===e.id&&Object(r["D"])(e).then(function(a){var n=!0,i=!1,r=void 0;try{for(var o,s=t.list[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var l=o.value;if(l.id===e.id){var u=t.list.indexOf(l);t.list.splice(u,1,e);break}}}catch(c){i=!0,r=c}finally{try{n||null==s.return||s.return()}finally{if(i)throw r}}t.dialogFormVisible=!1,t.$message({type:"success",message:"修改成功",duration:"1000"})}).catch(function(t){console.log(t)})}}catch(u){n=!0,i=u}finally{try{a||null==s.return||s.return()}finally{if(n)throw i}}})()})},handleDelete:function(t){var e=this;Object(r["i"])(t.id).then(function(a){var n=e.list.indexOf(t);e.list.splice(n,1),e.total-=1,""==e.list&&(e.pagelist["page"]-=1,e.pagelist["page"]-1<=0&&(e.pagelist["page"]=1),e.getPlatforms(e.pagelist)),e.$message({type:"success",message:"删除成功",duration:"1000"})}).catch(function(t){console.log(t)})}}},u=l,c=(a("5235"),a("2877")),d=Object(c["a"])(u,n,i,!1,null,"4b81e4a2",null);e["default"]=d.exports},fdcf:function(t,e,a){"use strict";a.d(e,"a",function(){return i});var n=a("4360");function i(t){return-1!=n["a"].getters.permission_list.indexOf(t)}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);