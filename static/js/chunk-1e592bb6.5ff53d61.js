(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e592bb6"],{"0bea":function(t,e,n){},"333d":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[n("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},a=[];n("c5f6");Math.easeInOutQuad=function(t,e,n,r){return t/=r/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function o(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function u(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function c(t,e,n){var r=u(),a=t-r,c=20,s=0;e="undefined"===typeof e?500:e;var d=function t(){s+=c;var u=Math.easeInOutQuad(s,r,a,e);o(u),s<e?i(t):n&&"function"===typeof n&&n()};d()}var s={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:15},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&c(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&c(0,800)}}},d=s,l=(n("d99d"),n("2877")),p=Object(l["a"])(d,r,a,!1,null,"553bf77d",null);e["a"]=p.exports},"57b3":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{label:"ID",align:"center",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.id))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"奖品名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"卖家",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-row",[n("el-col",{attrs:{span:24}},[n("img",{staticStyle:{width:"40px",height:"40px",border:"none"},attrs:{src:e.row.u_headimgurl}})])],1),t._v(" "),n("el-row",[n("el-col",{attrs:{span:24}},[n("span",[t._v(t._s(e.row.u_nickname))])])],1)]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"买家",align:"center",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-row",[n("el-col",{attrs:{span:24}},[n("img",{staticStyle:{width:"40px",height:"40px",border:"none"},attrs:{src:e.row.b_headimgurl}})])],1),t._v(" "),n("el-row",[n("el-col",{attrs:{span:24}},[n("span",[t._v(t._s(e.row.b_nickname))])])],1)]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(0==e.row.status?"寄卖中":1==e.row.status?"已出售":"被取消"))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"寄卖时间",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-row",[n("el-col",{attrs:{span:24}},[n("span",[t._v(t._s(e.row.start_time))])])],1),t._v(" "),n("el-row",[n("el-col",{attrs:{span:24}},[n("span",[t._v("( "+t._s(t.daytime(e.row.start_time,e.row.end_time))+" ) ")])])],1)]}}])})],1),t._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.pagelist.page,limit:t.pagelist.limit},on:{"update:page":function(e){return t.$set(t.pagelist,"page",e)},"update:limit":function(e){return t.$set(t.pagelist,"limit",e)},pagination:t.getConsignments}})],1)},a=[],i=n("ad8f"),o=n("ed08"),u=n("333d"),c={name:"category",components:{Pagination:u["a"]},data:function(){return{fileList:[],imageUrl:"",input:"",http:"http://mp.51hqdyf.com",pagelist:{page:1,limit:10},total:0,tableKey:0,list:[],listLoading:!0,dialogStatus:"",textMap:{update:"编辑",create:"添加"},rules:{},dialogFormVisible:!1,temp:{id:0,goods_name:"",price:"",image:"",content:"",goods_images:[]}}},created:function(){this.getConsignments()},methods:{ParseTime:function(t){return Object(o["b"])(t)},getConsignments:function(){var t=this;this.listLoading=!0,Object(i["g"])({page:this.pagelist.page,ps:this.pagelist.limit}).then(function(e){console.log(e),t.list=e.data.data.list.data,t.total=e.data.data.list.total,setTimeout(function(){t.listLoading=!1},1e3)})},daytime:function(t,e){var n=new Date(t),r=new Date(e),a=r.getTime()-n.getTime(),i=Math.floor(a/864e5),o=a%864e5,u=Math.floor(o/36e5);return i+"天"+u+"小时"},resetTemp:function(){this.temp={id:0,goods_name:"",price:"",image:"",content:"",goods_images:[]}},handleDelete:function(t){var e=this;shopdel({id:t.id}).then(function(n){var r=e.list.indexOf(t);e.list.splice(r,1),e.total-=1,""==e.list&&(e.pagelist["page"]-=1,e.pagelist["page"]-1<=0&&(e.pagelist["page"]=1),e.getShop())}).catch(function(t){console.log(t)})}}},s=c,d=(n("c92c"),n("2877")),l=Object(d["a"])(s,r,a,!1,null,null,null);e["default"]=l.exports},"68c0":function(t,e,n){},aa77:function(t,e,n){var r=n("5ca1"),a=n("be13"),i=n("79e5"),o=n("fdef"),u="["+o+"]",c="​",s=RegExp("^"+u+u+"*"),d=RegExp(u+u+"*$"),l=function(t,e,n){var a={},u=i(function(){return!!o[t]()||c[t]()!=c}),s=a[t]=u?e(p):o[t];n&&(a[n]=s),r(r.P+r.F*u,"String",a)},p=l.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(s,"")),2&e&&(t=t.replace(d,"")),t};t.exports=l},ad8f:function(t,e,n){"use strict";n.d(e,"i",function(){return a}),n.d(e,"E",function(){return i}),n.d(e,"t",function(){return o}),n.d(e,"j",function(){return u}),n.d(e,"a",function(){return c}),n.d(e,"m",function(){return s}),n.d(e,"I",function(){return d}),n.d(e,"o",function(){return l}),n.d(e,"v",function(){return p}),n.d(e,"z",function(){return f}),n.d(e,"p",function(){return g}),n.d(e,"A",function(){return m}),n.d(e,"n",function(){return h}),n.d(e,"f",function(){return b}),n.d(e,"H",function(){return _}),n.d(e,"x",function(){return w}),n.d(e,"c",function(){return v}),n.d(e,"G",function(){return y}),n.d(e,"F",function(){return O}),n.d(e,"l",function(){return j}),n.d(e,"b",function(){return S}),n.d(e,"s",function(){return k}),n.d(e,"r",function(){return x}),n.d(e,"w",function(){return N}),n.d(e,"D",function(){return z}),n.d(e,"C",function(){return I}),n.d(e,"g",function(){return E}),n.d(e,"k",function(){return C}),n.d(e,"q",function(){return T}),n.d(e,"B",function(){return A}),n.d(e,"h",function(){return M}),n.d(e,"u",function(){return F}),n.d(e,"d",function(){return P}),n.d(e,"y",function(){return L}),n.d(e,"e",function(){return $});var r=n("b775");function a(t){return Object(r["a"])({url:"/index/index",method:"post",data:t})}function i(t){return Object(r["a"])({url:"/system/index",method:"post",data:t})}function o(t){return Object(r["a"])({url:"/system/savedata",method:"post",data:t})}function u(t){return Object(r["a"])({url:"/machines/index",method:"post",data:t})}function c(t){return Object(r["a"])({url:"/machines/info",method:"post",data:t})}function s(t){return Object(r["a"])({url:"/machines/del?id="+t,method:"get"})}function d(t){return Object(r["a"])({url:"/uploadify/fileup",method:"post",data:t})}function l(t){return Object(r["a"])({url:"/machines/setMachineGoods?id="+t.id,method:"get"})}function p(t){return Object(r["a"])({url:"/machines/setMachineGoods?id="+t.id+"&keyword="+t.keyword,method:"get"})}function f(t){return Object(r["a"])({url:"/machines/setMachineGoods",method:"post",data:t})}function g(t){return Object(r["a"])({url:"/machines/setStoreCount?id="+t.id,method:"get"})}function m(t){return Object(r["a"])({url:"/machines/setStoreCount",method:"post",data:t})}function h(t){return Object(r["a"])({url:"/machines/MachineOrders?id="+t.id+"&ps="+t.ps+"&page="+t.page,method:"get"})}function b(t){return Object(r["a"])({url:"/machines/delMachineOrder",method:"post",data:t})}function _(t){return Object(r["a"])({url:"/goods/index?ps="+t.ps+"&page="+t.page,method:"get"})}function w(t){return Object(r["a"])({url:"/goods/index?ps="+t.ps+"&page="+t.page+"&keyword="+t.keyword,method:"get"})}function v(t){return Object(r["a"])({url:"/goods/info",method:"post",data:t})}function y(t){return Object(r["a"])({url:"/goods/info?id="+t.id,method:"get"})}function O(t){return Object(r["a"])({url:"/goods/del?id="+t.id,method:"get"})}function j(t){return Object(r["a"])({url:"/prizes/index?page="+t.page+"&ps="+t.ps,method:"get"})}function S(t){return Object(r["a"])({url:"/prizes/info",method:"post",data:t})}function k(t){return Object(r["a"])({url:"/prizes/info?id="+t.id,method:"get"})}function x(t){return Object(r["a"])({url:"/prizes/del?id="+t.id,method:"get"})}function N(t){return Object(r["a"])({url:"/prizes/index?ps="+t.ps+"&page="+t.page+"&keyword="+t.keyword,method:"get"})}function z(t){return Object(r["a"])({url:"/prizes/set_status",method:"post",data:t})}function I(t){return Object(r["a"])({url:"/prizes/set_count",method:"post",data:t})}function E(t){return Object(r["a"])({url:"/consignments/index?ps="+t.ps+"&page="+t.page,method:"get"})}function C(t){return Object(r["a"])({url:"/order/index?ps="+t.ps+"&page="+t.page,method:"get"})}function T(t){return Object(r["a"])({url:"/order/info?order_id="+t.order_id,method:"get"})}function A(t){return Object(r["a"])({url:"/order/order_shipping",method:"post",data:t})}function M(t){return Object(r["a"])({url:"/user/index?ps="+t.ps+"&page="+t.page,method:"get"})}function F(t){return Object(r["a"])({url:"/user/index?ps="+t.ps+"&page="+t.page+"&keyword="+t.keyword,method:"get"})}function P(t){return Object(r["a"])({url:"/user/info?id="+t.id,method:"get"})}function L(t){return Object(r["a"])({url:"/user/info",method:"post",data:t})}function $(t){return Object(r["a"])({url:"/user/userAccountLog?id="+t.id+"&ps="+t.ps+"&page="+t.page+"&keyword="+t.keyword+"&start_time="+t.start_time+"&end_time="+t.end_time,method:"get"})}},c5f6:function(t,e,n){"use strict";var r=n("7726"),a=n("69a8"),i=n("2d95"),o=n("5dbc"),u=n("6a99"),c=n("79e5"),s=n("9093").f,d=n("11e9").f,l=n("86cc").f,p=n("aa77").trim,f="Number",g=r[f],m=g,h=g.prototype,b=i(n("2aeb")(h))==f,_="trim"in String.prototype,w=function(t){var e=u(t,!1);if("string"==typeof e&&e.length>2){e=_?e.trim():p(e,3);var n,r,a,i=e.charCodeAt(0);if(43===i||45===i){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+e}for(var o,c=e.slice(2),s=0,d=c.length;s<d;s++)if(o=c.charCodeAt(s),o<48||o>a)return NaN;return parseInt(c,r)}}return+e};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof g&&(b?c(function(){h.valueOf.call(n)}):i(n)!=f)?o(new m(w(e)),n,g):w(e)};for(var v,y=n("9e1e")?s(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;y.length>O;O++)a(m,v=y[O])&&!a(g,v)&&l(g,v,d(m,v));g.prototype=h,h.constructor=g,n("2aba")(r,f,g)}},c92c:function(t,e,n){"use strict";var r=n("68c0"),a=n.n(r);a.a},d99d:function(t,e,n){"use strict";var r=n("0bea"),a=n.n(r);a.a},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);