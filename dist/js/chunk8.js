/*! leadBank版权所有,请勿转载 */
webpackJsonp([8],{205:function(t,e,s){"use strict";function a(t){s(276)}Object.defineProperty(e,"__esModule",{value:!0});var r=s(277),n=s.n(r),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"searchBg"},[s("div",{staticClass:"searchInput"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],attrs:{placeholder:"请输入基金代码／简称／名称"},domProps:{value:t.searchText},on:{input:[function(e){e.target.composing||(t.searchText=e.target.value)},t.searchFund]}}),t._v(" "),s("div",{staticClass:"searchIcon search",on:{click:t.searchConfirm}}),t._v(" "),t.deleteSearch?s("div",{staticClass:"searchIcon delete",on:{click:t.searchDelete}}):t._e()]),t._v(" "),t.showHotFund?s("div",{staticClass:"searchHot"},[t._m(0),t._v(" "),s("ul",t._l(t.hotFundList,function(e,a){return s("li",{key:a,on:{click:function(s){t.targetFund(e.fundcode)}}},[s("div",[s("label",[t._v(t._s(e.fundname))]),t._v(" "),s("p",[s("span",[t._v(t._s(e.fundcode))]),t._v(" "),s("em",[t._v(t._s(e.fundtypename))])])]),t._v(" "),s("em",{staticClass:"diagnosis"},[t._v("诊断")])])}))]):t._e(),t._v(" "),t.showSearch?s("div",{staticClass:"searchHot searchCurrent"},[s("scroll",{attrs:{isNeedLoading:0,data:t.searchList}},[s("ul",t._l(t.searchList,function(e,a){return s("li",{key:a,on:{click:function(s){t.targetFund(e.fundcode)}}},[s("div",[s("label",[t._v(t._s(e.fundname))]),t._v(" "),s("p",[s("span",[t._v(t._s(e.fundcode))]),t._v(" "),s("em",[t._v(t._s(e.fundtypename))])])]),t._v(" "),s("em",{staticClass:"diagnosis"},[t._v("诊断")])])}))])],1):t._e(),t._v(" "),""!=t.historyList?s("div",{staticClass:"searchHistory"},[s("div",{staticClass:"searchHot"},[t._m(1),t._v(" "),s("ul",t._l(t.historyList,function(e,a){return""!=e?s("li",{key:a,on:{click:function(s){t.targetFund(e)}}},[t._v(t._s(e))]):t._e()}))]),t._v(" "),s("div",{staticClass:"clearHistory",on:{click:t.clearHistory}},[t._v("清除历史记录")])]):t._e()])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hotTitle"},[s("em",{staticClass:"hotIcon"}),t._v("热搜基金")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hotTitle"},[s("em",{staticClass:"history"}),t._v("历史记录")])}],c={render:i,staticRenderFns:o},u=c,d=s(1),h=a,l=d(n.a,u,!1,h,null,null);e.default=l.exports},276:function(t,e){},277:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(8),r=function(t){return t&&t.__esModule?t:{default:t}}(a),n=s(3),i=s(2);e.default={components:{scroll:r.default},data:function(){return{deleteSearch:!1,showSearch:!1,showHotFund:!0,hotFundList:[],searchText:"",searchList:[],historyList:""}},mounted:function(){this.hotFund();var t=localStorage,e=t.historyItems;void 0!=e&&(this.historyList=e.split(","))},methods:{searchFund:function(){var t=this;""!=t.searchText.length?t.deleteSearch=!0:t.deleteSearch=!1,t.searchText.replace(/^ +| +$/g,"")?(t.fundList(),t.showHotFund=!1,t.showSearch=!0):(t.showHotFund=!0,t.showSearch=!1)},fundList:function(){var t=this;(0,i.searchFund)({fundkey:encodeURI(t.searchText)}).then(function(e){"000"==e.data.respCode?t.searchList=e.data.data.fundSearchList:(0,n.toast)(e.data.respMessage)})},searchConfirm:function(){var t=this;t.deleteSearch=!1,""==t.searchText&&(0,n.toast)("请输入搜索内容")},searchDelete:function(){var t=this;t.searchText="",t.deleteSearch=!1,t.showHotFund=!0,t.showSearch=!1},hotFund:function(){var t=this;(0,i.hotFund)().then(function(e){"000"==e.data.respCode?t.hotFundList=e.data.data.hotSearchFundList:(0,n.toast)(e.data.respMessage)})},targetFund:function(t){var e=localStorage,s=e.historyItems;void 0===s?localStorage.historyItems=t:(s=t+","+s.split(",").filter(function(e){return e!=t}).join(","),localStorage.historyItems=s),window.isApp?this.$router.push({path:"diagnosisDetail",query:{fundId:t}}):1==this.$router.currentRoute.query.fromId?this.$router.push({path:"generalizeDiagnosis",query:{fundId:t,fromId:this.$router.currentRoute.query.fromId}}):this.$router.push({path:"fundConsultingRoom",query:{fundId:t}})},clearHistory:function(){this.historyList="",localStorage.removeItem("historyItems")}}}}});