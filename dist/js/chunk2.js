/*! leadBank版权所有,请勿转载 */
webpackJsonp([2],{209:function(t,e,a){"use strict";function i(t){a(292)}Object.defineProperty(e,"__esModule",{value:!0});var n=a(293),o=a.n(n),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"consultingRoom",attrs:{id:"consultingRoom"}},[t.pageAlready?i("scroll",{ref:"fullPageScroll",attrs:{isNeedLoading:0,data:t.fundCont}},[i("div",{staticClass:"consultingRoom-content-wrapper",class:{haveButton:t.loginState}},[i("div",{staticClass:"decorate-bg"}),t._v(" "),i("div",{staticClass:"content1-wrapper"},[i("div",{staticClass:"search-input-part",class:{"search-input-short":t.showSearch}},[i("span",{staticClass:"serach-button"}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],ref:"searchInput",staticClass:"search-input",attrs:{type:"text",placeholder:"测一测你关注的基金怎么样？"},domProps:{value:t.searchText},on:{input:[function(e){e.target.composing||(t.searchText=e.target.value)},t.searchFund],click:function(e){t.showHotFundList(1)}}})]),t._v(" "),t.showSearch?i("div",{staticClass:"search-input-cancer",on:{click:function(e){t.showHotFundList(0)}}},[t._v("取消")]):t._e()]),t._v(" "),i("div",{staticClass:"content2-wrapper"},[i("div",{staticClass:"report-part infor-common-wrapper"},[i("div",{staticClass:"report-title infor-common-title",on:{click:function(e){t.toFundDetails(t.fundCont.fundCode)}}},[i("p",[t._v(t._s(t.fundCont.fundName))]),t._v(" "),i("p",[t._v("("+t._s(t.fundCont.fundCode)+")")]),t._v(" "),i("p",{staticClass:"right-button"})]),t._v(" "),i("div",{staticClass:"report-content infor-common-cotent"},[t.fundCont.diagnoseSummary?[i("div",{staticClass:"report-explain"},[t._v("\n                "+t._s(t.fundCont.diagnoseSummary)+"\n              ")])]:[i("div",{staticClass:"report-explain"},[t._v("基金成立时间太短，暂时没有评分")])],t._v(" "),i("div",{staticClass:"radarChart-part"},[i("div",{staticClass:"sQuestion",on:{click:function(e){t.showBoxs(1)}}}),t._v(" "),i("div",{staticClass:"radar-chart-wrapper"},[i("radarChart",{attrs:{fundContainer:t.fundScoreBean}})],1),t._v(" "),i("ul",[i("li",[t._v("本基金")]),t._v(" "),i("li",[t._v("同类基金")])])]),t._v(" "),i("div",{staticClass:"defeat-text fs-30"},[i("p",[t._v("打败了\n                "),t.fundCont.beatFundRate?i("span",{staticClass:"fc-00fdff"},[t._v(t._s(t.fundCont.beatFundRate)+"%")]):i("span",{staticClass:"fc-00fdff"},[t._v("--")]),t._v("\n                的同类基金\n              ")])])],2),t._v(" "),i("div",{staticClass:"report-bottom infor-common-bottom"})])]),t._v(" "),i("div",{staticClass:"content4-wrapper"},[t.loginState?i("div",{staticClass:"infor-common-wrapper"},[i("div",{staticClass:"infor-common-title"},[t._v("\n            盈利潜力\n          ")]),t._v(" "),i("div",{staticClass:"infor-common-cotent profit-wrapper"},[i("div",{staticClass:"profit-explain"},[t._v("统计近一年内任意交易日买入并持有该基金到指定时长的盈利、亏损情况")]),t._v(" "),i("div",{staticClass:"profit-probability"},[i("div",{staticClass:"probability-win"},[i("p",{staticClass:"gradual-line right-left"}),t._v(" "),i("p",{staticClass:"probability-value align-left"},[t._v("\n                  盈利概率：\n                  "),parseFloat(t.pieChartData.profitabilityProb)||0==parseFloat(t.pieChartData.profitabilityProb)?i("span",{staticClass:"fc-ff5254"},[t._v("\n                    "+t._s(t.pieChartData.profitabilityProb)+"%\n                  ")]):i("span",{staticClass:"fc-ff5254"},[t._v("--")])]),t._v(" "),i("p",{staticClass:"gradual-line right-left"})]),t._v(" "),i("div",{staticClass:"probability-loss"},[i("p",{staticClass:"gradual-line left-right"}),t._v(" "),i("p",{staticClass:"probability-value align-right"},[t._v("\n                  亏损概率：\n                  "),parseFloat(t.pieChartData.deficitProb)||0==parseFloat(t.pieChartData.deficitProb)?i("span",{staticClass:"fc-00fdff"},[t._v(t._s(t.pieChartData.deficitProb)+"%")]):i("span",{staticClass:"fc-00fdff"},[t._v("--")])]),t._v(" "),i("p",{staticClass:"gradual-line left-right"})])]),t._v(" "),i("div",{staticClass:"pie-chart-wrapper"},[i("div",{staticClass:"pie-chart-left"},[i("div",[i("p",[i("span",{staticClass:"bg-ffbebe"}),i("span",{class:{"lower-twelve-px":t.lowerTwelve}},[t._v("盈利0%-5%")])]),t._v(" "),parseFloat(t.pieChartData.profitabilityLow)||parseFloat(t.pieChartData.profitabilityLow)>=0?i("p",[t._v(t._s(t.pieChartData.profitabilityLow)+"%")]):i("p",[t._v("--")])]),t._v(" "),i("div",[i("p",[i("span",{staticClass:"bg-ff7878"}),i("span",{class:{"lower-twelve-px":t.lowerTwelve}},[t._v("盈利5%-10%")])]),t._v(" "),parseFloat(t.pieChartData.profitabilityMid)||parseFloat(t.pieChartData.profitabilityMid)>=0?i("p",[t._v(t._s(t.pieChartData.profitabilityMid)+"%")]):i("p",[t._v("--")])]),t._v(" "),i("div",[i("p",[i("span",{staticClass:"bg-ff5353"}),i("span",{class:{"lower-twelve-px":t.lowerTwelve}},[t._v("盈利10%以上")])]),t._v(" "),parseFloat(t.pieChartData.profitabilityHig)||parseFloat(t.pieChartData.profitabilityHig)>=0?i("p",[t._v(t._s(t.pieChartData.profitabilityHig)+"%")]):i("p",[t._v("--")])])]),t._v(" "),i("div",{staticClass:"pie-chart"},[i("pieChart",{attrs:{pieChartSeriesOptions:t.pieChartSeriesOptions}})],1),t._v(" "),i("div",{staticClass:"pie-chart-right"},[i("div",[i("p",[i("span",{staticClass:"bg-c1f8ff"}),i("span",{class:{"lower-twelve-px":t.lowerTwelve}},[t._v("亏损0%-5%")])]),t._v(" "),parseFloat(t.pieChartData.deficitLow)||parseFloat(t.pieChartData.deficitLow)>=0?i("p",[t._v(t._s(t.pieChartData.deficitLow)+"%")]):i("p",[t._v("--")])]),t._v(" "),i("div",[i("p",[i("span",{staticClass:"bg-70efff"}),i("span",{class:{"lower-twelve-px":t.lowerTwelve}},[t._v("亏损5%-10%")])]),t._v(" "),parseFloat(t.pieChartData.deficitMid)||parseFloat(t.pieChartData.deficitMid)>=0?i("p",[t._v(t._s(t.pieChartData.deficitMid)+"%")]):i("p",[t._v("--")])]),t._v(" "),i("div",[i("p",[i("span",{staticClass:"bg-08d2eb"}),i("span",{class:{"lower-twelve-px":t.lowerTwelve}},[t._v("亏损10%以上")])]),t._v(" "),parseFloat(t.pieChartData.deficitHig)||parseFloat(t.pieChartData.deficitHig)>=0?i("p",[t._v(t._s(t.pieChartData.deficitHig)+"%")]):i("p",[t._v("--")])])])]),t._v(" "),i("div",{staticClass:"holdtime-tab-wrapper"},[i("span",{class:{active:14==t.pieChartId},on:{click:function(e){t.changePieChart(14)}}},[t._v("持有14天")]),t._v(" "),i("span",{class:{active:30==t.pieChartId},on:{click:function(e){t.changePieChart(30)}}},[t._v("持有30天")]),t._v(" "),i("span",{class:{active:60==t.pieChartId},on:{click:function(e){t.changePieChart(60)}}},[t._v("持有60天")]),t._v(" "),i("span",{class:{active:90==t.pieChartId},on:{click:function(e){t.changePieChart(90)}}},[t._v("持有90天")])])]),t._v(" "),i("div",{staticClass:"infor-common-bottom"})]):i("img",{staticClass:"guidanceImg",attrs:{src:a(294),alt:"注册"},on:{click:t.openRegisterModel}})]),t._v(" "),i("div",{staticClass:"diagnosis-date"},[t._v("(诊断日期："+t._s(t.diagnoseDate)+")")]),t._v(" "),t.adviceData.length>0?i("div",{staticClass:"publicity-pic"},t._l(t.adviceData,function(e,a){return i("img",{attrs:{src:e.src,alt:"利得基金"},on:{click:function(a){t.adviceLink(e.link)}}})})):t._e(),t._v(" "),i("div",{staticClass:"risk-hint"},[t._v("\n        市场有风险，投资需谨慎\n      ")])])]):t._e(),t._v(" "),t.loginState?i("div",{staticClass:"bottom-button-wrapper"},[i("div",{staticClass:"button-type",on:{click:t.bottomButton}},[t._v("\n      下载利得基金APP，看诊断排行\n    ")])]):t._e(),t._v(" "),i("explainModel",{attrs:{explainModelShow:t.showBox,listenCloseModel:1,items:t.boxCont},on:{closeModel:function(e){t.showBoxs(0)}}}),t._v(" "),i("transition",{attrs:{name:"slide-fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showSearch,expression:"showSearch"}],staticClass:"fSearchHot"},[i("scroll",{ref:"searchModelScroll",attrs:{isNeedLoading:0}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.showSearchList,expression:"!showSearchList"}]},[i("div",{staticClass:"hotTitle"},[i("em",{staticClass:"hotIcon"}),t._v("热搜基金")]),t._v(" "),i("ul",t._l(t.hotFundList,function(e,a){return i("li",{key:a,on:{click:function(a){t.targetLink(e.fundcode)}}},[i("div",[i("label",[t._v(t._s(e.fundname))]),t._v(" "),i("p",[i("span",[t._v(t._s(e.fundcode))]),t._v(" "),i("em",{staticClass:"fs-20"},[t._v(t._s(e.fundtypename))])])]),t._v(" "),i("em",{staticClass:"diagnosis"},[t._v("诊断")])])}))]),t._v(" "),i("ul",{directives:[{name:"show",rawName:"v-show",value:t.showSearchList,expression:"showSearchList"}]},t._l(t.searchList,function(e,a){return i("li",{key:a,on:{click:function(a){t.targetLink(e.fundcode)}}},[i("div",[i("label",[t._v(t._s(e.fundname))]),t._v(" "),i("p",[i("span",[t._v(t._s(e.fundcode))]),t._v(" "),i("em",{staticClass:"fs-20"},[t._v(t._s(e.fundtypename))])])]),t._v(" "),i("em",{staticClass:"diagnosis"},[t._v("诊断")])])}))])],1)]),t._v(" "),t.registerModelShowFlag?i("div",{staticClass:"registerModel",on:{click:t.stopEvent}},[i("div",{staticClass:"registerModel-content"},[i("div",{staticClass:"model-title fs-36"},[i("span",[t._v("注册免费查看")]),t._v(" "),i("img",{staticClass:"close-model-button",attrs:{src:a(295),alt:"关闭"},on:{click:t.closeRegisterModel}})]),t._v(" "),i("p",{staticClass:"phone-input-label"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneNumber,expression:"phoneNumber"}],attrs:{type:"tel",maxlength:"11",placeholder:"请输入手机号码"},domProps:{value:t.phoneNumber},on:{input:[function(e){e.target.composing||(t.phoneNumber=e.target.value)},function(e){t.registerFormEvent(1)}]}}),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:t.phoneClearButtonFlag,expression:"phoneClearButtonFlag"}],staticClass:"phone-input-delete",on:{click:t.clearPhoneInput}})]),t._v(" "),i("p",{staticClass:"form-label-two"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.imgCodeNumber,expression:"imgCodeNumber"}],staticClass:"form-label-two-left",attrs:{type:"text",maxlength:"5",placeholder:"请输入图形验证码"},domProps:{value:t.imgCodeNumber},on:{input:[function(e){e.target.composing||(t.imgCodeNumber=e.target.value)},function(e){t.registerFormEvent(1)}]}}),t._v(" "),i("img",{staticClass:"img-code",attrs:{src:t.codeImgUrl,alt:"图片验证码"},on:{click:t.getImgCode}})]),t._v(" "),i("p",{staticClass:"form-label-two"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneCodeNumber,expression:"phoneCodeNumber"}],staticClass:"form-label-two-left",attrs:{type:"tel",maxlength:"6",placeholder:"请输入手机动态码"},domProps:{value:t.phoneCodeNumber},on:{input:[function(e){e.target.composing||(t.phoneCodeNumber=e.target.value)},function(e){t.registerFormEvent(1)}]}}),t._v(" "),i("span",{staticClass:"get-code-button fs-24",class:{highlight:t.canGetPhoneCodeFlag},on:{click:function(e){t.registerFormEvent(2)}}},[t._v(t._s(t.GetPhoneButtonText))])]),t._v(" "),i("p",{staticClass:"regist-button fs-30",class:{highlight:t.canRegisterFlag},on:{click:function(e){t.registerFormEvent(3)}}},[t._v("立即查看")])])]):t._e()],1)},s=[],l={render:r,staticRenderFns:s},c=l,d=a(1),u=i,p=d(o.a,c,!1,u,"data-v-85b1f4d2",null);e.default=p.exports},210:function(t,e,a){t.exports=a(0)(69)},211:function(t,e,a){"use strict";function i(t){a(212)}Object.defineProperty(e,"__esModule",{value:!0});var n=a(213),o=a.n(n),r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"pieChart",attrs:{id:"pieChart"}})},s=[],l={render:r,staticRenderFns:s},c=l,d=a(1),u=i,p=d(o.a,c,!1,u,"data-v-60d32efe",null);e.default=p.exports},212:function(t,e){},213:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(10),o=i(n),r=a(210),s=i(r);e.default={name:"PieChart",props:{pieChartTitleOptions:{type:Object,default:function(){return{}}},pieChartSeriesOptions:{type:Array,default:function(){return[]}}},data:function(){return{chartWrapper:"",option:{}}},watch:{pieChartSeriesOptions:function(){this.drawChart()}},mounted:function(){var t=this;t.chartWrapper=s.default.init(t.$refs.pieChart),t.drawChart()},methods:{drawChart:function(){var t=this;t.option={title:{show:!1,text:"默认title",left:"center",top:"center",textStyle:{color:"#333333",fontSize:"0.6rem"}},series:[]};var e={name:"饼图名称",type:"pie",radius:["50%","100%"],avoidLabelOverlap:!1,hoverAnimation:!1,label:{normal:{show:!1},emphasis:{show:!1}},labelLine:{normal:{show:!1}},data:[{value:20,name:"默认1",itemStyle:{normal:{color:"rgba(220,40,40,.6)"}}},{value:30,name:"默认2",itemStyle:{normal:{color:"rgba(255,160,65,.6)"}}},{value:50,name:"默认3",itemStyle:{normal:{color:"rgba(50,150,255,.6)"}}}],animation:!1,silent:!0};if(t.pieChartTitleOptions&&(t.option.title=(0,o.default)({},t.option.title,t.pieChartTitleOptions)),t.pieChartSeriesOptions&&t.pieChartSeriesOptions.length>0)for(var a=0;a<t.pieChartSeriesOptions.length;a++)t.option.series[a]=(0,o.default)({},e,t.pieChartSeriesOptions[a]);t.chartWrapper.setOption(t.option),window.onresize=function(){t.chartWrapper.resize()}}}}},215:function(t,e,a){"use strict";function i(t){a(216)}Object.defineProperty(e,"__esModule",{value:!0});var n=a(217),o=a.n(n),r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"chartWrapper",staticClass:"radar-box",attrs:{id:"radarChart"}})},s=[],l={render:r,staticRenderFns:s},c=l,d=a(1),u=i,p=d(o.a,c,!1,u,"data-v-023c700c",null);e.default=p.exports},216:function(t,e){},217:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(210),n=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={name:"RadarChart",components:{},props:{fundContainer:{type:[Object,Array],default:function(){return{}}}},data:function(){return{}},watch:{fundContainer:function(){this.chartShow()}},mounted:function(){this.fundContainer&&this.fundContainer.length>0&&this.chartShow()},methods:{getDpr:function(){return.032*document.body.clientWidth},getOptions:function(){var t=this,e={top:"50%"};return t.fundContainer&&t.fundContainer[0]&&t.fundContainer[0].length>0&&t.fundContainer[0][0].length>0?e=3===t.fundContainer[0][0].length?{top:"58%"}:4===t.fundContainer[0][0].length?{top:"50%"}:{top:"55%"}:e},chartShow:function(){var t=this,e=t.fundContainer.length,a=n.default.init(t.$refs.chartWrapper),i={title:{text:t.fundContainer[e-1],left:"center",top:"45%",textStyle:{color:"#fff",fontWeight:"bolder",fontSize:22}},radar:[{center:["50%",t.getOptions().top],radius:"50%",indicator:function(){for(var e=[],a=0;a<t.fundContainer[0][0].length;a++)""==t.fundContainer[0][0][a]||"undefined"==t.fundContainer[0][0][a]||void 0==t.fundContainer[0][0][a]?t.fundContainer[0][0][a]="--":t.fundContainer[0][0][a]=t.fundContainer[0][0][a],e.push({text:t.fundContainer[0][1][a]+"\n"+t.fundContainer[0][0][a],max:100});return e}(),name:{color:"#fff",formatter:"{a|{value}}",rich:{a:{align:"center",padding:[1,7,1,8],fontSize:t.getDpr()}}},nameGap:5,axisLine:{lineStyle:{color:"rgba(255, 255, 255, 0.3)"}},splitLine:{lineStyle:{color:"rgba(255, 255, 255, 0.3)"}},splitArea:{areaStyle:{color:"rgba(255,255,255,0)"}}}],series:[{name:"图表",type:"radar",lineStyle:{normal:{width:0}},label:{show:!0},symbolSize:0,data:[{value:this.fundContainer[0][0],name:"本基金",areaStyle:{normal:{color:"rgba(79, 247, 255, 0.7)"}}},{value:this.fundContainer[1][0],name:"同类型基金",areaStyle:{normal:{color:"rgba(255, 255, 255, 0.4)"}}}]}]};a.setOption(i),window.onresize=function(){a.resize()}}}}},218:function(t,e,a){"use strict";function i(t){a(219)}Object.defineProperty(e,"__esModule",{value:!0});var n=a(220),o=a.n(n),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.explainModelShowFlag,expression:"explainModelShowFlag"}],attrs:{id:"explainModel"},on:{touchmove:t.stopEvent}},[a("div",{staticClass:"diagnose-explain-wrapper"},[a("div",{staticClass:"model-title"},[t._v("\n      "+t._s(t.modelTitle)+"\n    ")]),t._v(" "),a("div",{staticClass:"model-content"},[a("div",{ref:"modelScrollConent",staticClass:"model-scroll-wrapper"},[a("scroll",{ref:"modelScrollWrapper",attrs:{isNeedLoading:0,data:t.showData}},[a("p",{staticClass:"model-content-list"},[t._v("基金评分是根据基金的类型和几大指标综合评估基金的整体表现。")]),t._v(" "),t._l(t.showData,function(e,i){return a("p",{key:i,staticClass:"model-content-list"},[t._v("\n            "+t._s(e)+"\n          ")])})],2)],1)])]),t._v(" "),a("div",{staticClass:"close-model-button",on:{click:t.closeModel}})])},s=[],l={render:r,staticRenderFns:s},c=l,d=a(1),u=i,p=d(o.a,c,!1,u,"data-v-32ff5946",null);e.default=p.exports},219:function(t,e){},220:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(8),n=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={name:"ExplainModel",components:{scroll:n.default},props:{explainModelShow:{type:Number,default:0},listenCloseModel:{type:Number,default:0},modelTitle:{type:String,default:"什么是基金诊断？"},items:{type:Array,default:function(){return[]}}},data:function(){return{explainModelShowFlag:0,allData:{"产品优势":"考量基金规模、基金管理费等基金特性","盈利能力":"反映基金过去一段时间内的业绩表现","风险收益比":"反映基金每承受一单位总风险所产生的超额回报","稳定性":"反映基金净值的波动情况","超额收益":"反映基金跑赢标的指数的表现情况","择时能力":"反映基金在牛熊市中仓位控制以及行业配置能力","选股能力":"反映基金在牛熊市中同构精选个股跑赢同类的能力","跟踪能力":"反映基金对标指数跟踪误差的把握能力"},showData:[]}},watch:{items:function(){this.disposalData()},explainModelShow:function(t){var e=this;e.explainModelShowFlag=t,1==t&&e.$nextTick(function(){e.$refs.modelScrollWrapper.refresh()})}},mounted:function(){this.showData.length>0&&this.disposalData()},methods:{closeModel:function(){this.listenCloseModel&&this.$emit("closeModel")},disposalData:function(){var t=this;t.showData=[];for(var e=0;e<t.items.length;e++){var a="";for(var i in t.allData)if(t.items[e]==i){a=t.items[e]+"："+t.allData[i];break}t.showData.push(a)}},stopEvent:function(t){t.preventDefault()}}}},292:function(t,e){},293:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(8),o=i(n),r=a(215),s=i(r),l=a(218),c=i(l),d=a(211),u=i(d),p=a(3),f=a(2),h=a(39),v=i(h);e.default={name:"GeneralizeDiagnosis",beforeRouteEnter:function(t,e,a){a(function(t){t.$store.dispatch("checkLogin")})},components:{scroll:o.default,radarChart:s.default,pieChart:u.default,explainModel:c.default},data:function(){return{pageAlready:0,hotFundList:[],searchText:"",showSearch:0,showSearchList:0,searchList:"",fundCont:{diagnoseStory:[]},adviceData:[],fundScoreBean:[],diagnoseDate:"",showBox:0,boxCont:[],pieChartData:{},pieChartSeriesOptions:[],pieChartId:14,lowerTwelve:0,registerModelShowFlag:0,codeImgUrl:window.location.origin+"/front-gateway-web/imgCode.app?"+(new Date).getTime(),phoneNumber:"",phoneClearButtonFlag:0,imgCodeNumber:"",phoneCodeNumber:"",canGetPhoneCodeFlag:0,canRegisterFlag:0,commenceTimeFLag:0,GetPhoneButtonText:"获取动态码"}},computed:{loginState:function(){return this.$store.getters.loginState}},watch:{showSearch:function(t,e){var a=this;0==t?(a.$refs.searchInput.blur(),a.$refs.fullPageScroll.enable()):(a.$refs.fullPageScroll.disable(),a.$nextTick(function(){a.$refs.searchModelScroll.refresh()}))}},mounted:function(){this.wxShare(),this.fundDetails(),this.getAdvertising()},methods:{showBoxs:function(t){this.showBox=t},wxShare:function(){window.isWechat&&v.default.wechatShare("APP_JJZD_0118",window.location.href)},bottomButton:function(){var t=this;t.$store.commit("UPDATE_LOADINGNAME","loading"),t.$store.commit("UPDATE_LOADINGFLAG",3),(0,p.openApp)(),setTimeout(function(){t.$store.commit("UPDATE_LOADINGFLAG",0)},2e3)},showHotFundList:function(t){this.showSearch=t,1==t&&this.hotFundList&&this.hotFundList.length<=0&&this.hotFund()},hotFund:function(){var t=this;(0,f.hotFund)().then(function(e){"000"==e.data.respCode?t.hotFundList=e.data.data.hotSearchFundList:(0,p.toast)(e.data.respMessage)})},targetLink:function(t){this.fundDetails(t),this.showSearch=0},searchFund:function(){var t=this;t.searchText=t.searchText.replace(/^ +| +$/g,""),t.searchText&&(t.fundList(),t.showSearchList=1),""==t.searchText&&(t.showSearchList=0)},fundList:function(){var t=this;(0,f.searchFund)({fundkey:encodeURI(t.searchText)}).then(function(e){"000"==e.data.respCode?t.searchList=e.data.data.fundSearchList:(0,p.toast)(e.data.respMessage)})},stopEvent:function(t){t.stopPropagation(),t.preventDefault()},getDiagnoseDate:function(t){var e=t?new Date(t):new Date,a="";return a+=e.getFullYear(),a=a+"-"+(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1),a=a+"-"+(e.getDate()<10?"0"+e.getDate():e.getDate())},showType:function(t){var e=this,a=e.fundCont[t],i=e.fundCont.fundType;return"10000-01"==i?[[a.fundAdvantageScore,a.profitabilityScore,a.returnRiskScore,a.marketTimingScore,a.stockSelectionScore],["产品优势","盈利能力","风险收益比","择时能力","选股能力"]]:"10000-02"==i?[[a.fundAdvantageScore,a.excessProfitabilityScore,a.trackingAbilityScore],["产品优势","超额收益","跟踪能力"]]:"10000-03"==i?[[a.fundAdvantageScore,a.profitabilityScore,a.returnRiskScore],["产品优势","盈利能力","风险收益比"]]:"10000-04"==i?[[a.fundAdvantageScore,a.profitabilityScore,a.returnRiskScore,a.marketTimingScore,a.stockSelectionScore],["产品优势","盈利能力","风险收益比","择时能力","选股能力"]]:"10000-05"==i?[[a.fundAdvantageScore,a.profitabilityScore,a.returnRiskScore],["产品优势","盈利能力","风险收益比"]]:"10000-06"==i?[[a.fundAdvantageScore,a.profitabilityScore,a.returnRiskScore,a.stabilityScore],["产品优势","盈利能力","风险收益比","稳定性"]]:"10000-07"==i?[[a.fundAdvantageScore,a.profitabilityScore,a.returnRiskScore],["产品优势","盈利能力","风险收益比"]]:"10000-08"==i?[[a.fundAdvantageScore,a.profitabilityScore,a.returnRiskScore],["产品优势","盈利能力","风险收益比"]]:"10000-09"==i?[[a.fundAdvantageScore,a.excessProfitabilityScore,a.trackingAbilityScore],["产品优势","超额收益","跟踪能力"]]:[[a.fundAdvantageScore,a.profitabilityScore,a.returnRiskScore,a.marketTimingScore,a.stockSelectionScore],["产品优势","盈利能力","风险收益比","择时能力","选股能力"]]},fundDetails:function(t){var e=this,a=t||e.$router.currentRoute.query.fundId;(0,f.diagnosisDetail)("",a).then(function(t){e.diagnoseDate=e.getDiagnoseDate(t.headers.date),"000"==t.data.respCode?(e.fundCont=t.data.data,e.fundScoreBean=[],e.fundScoreBean.push(e.showType("fundScoreBean")),e.fundScoreBean.push(e.showType("sameFundScoreBean")),e.fundScoreBean.push(e.fundCont.fundScore),e.boxCont=e.fundScoreBean[0][1],e.changePieChart(14)):(0,p.toast)(t.data.respMessage),e.$nextTick(function(){e.pageAlready=1})})},getAdvertising:function(){var t=this;(0,f.advertising)().then(function(e){if("000"===e.data.respCode)for(var a=e.data.data.storeyList,i=0;i<a.length;i++)if("showAdvert"===a[i].code){t.adviceData=a[i].showAdvert_group1;break}})},adviceLink:function(t){t&&(window.location.href=t)},toFundDetails:function(t){1==this.$router.currentRoute.query.fromId?this.$router.push({path:"productDetails",query:{fundId:t,fromId:this.$router.currentRoute.query.fromId}}):this.$router.push({path:"productDetails",query:{fundId:t}})},changePieChart:function(t){var e=this;e.pieChartId=t;var a=void 0;switch(t){case 14:a=e.fundCont.fourteenProfitabilityBean;break;case 30:a=e.fundCont.thirtyProfitabilityBean;break;case 60:a=e.fundCont.sixtyProfitabilityBean;break;case 90:a=e.fundCont.ninetyProfitabilityBean;break;default:a=e.fundCont.fourteenProfitabilityBean}e.pieChartData=a,e.$set(e.pieChartSeriesOptions,0,{name:"盈利能力",data:[{value:parseFloat(a.deficitLow),name:"亏损0%-5%",itemStyle:{normal:{color:"#c1f8ff"}}},{value:parseFloat(a.deficitMid),name:"亏损5%-10%",itemStyle:{normal:{color:"#70efff"}}},{value:parseFloat(a.deficitHig),name:"亏损10%以上",itemStyle:{normal:{color:"#08d2eb"}}},{value:parseFloat(a.profitabilityHig),name:"盈利10%以上",itemStyle:{normal:{color:"#ff5353"}}},{value:parseFloat(a.profitabilityMid),name:"盈利5%-10%",itemStyle:{normal:{color:"#ff7878"}}},{value:parseFloat(a.profitabilityLow),name:"盈利0%-5%",itemStyle:{normal:{color:"#ffbebe"}}}]})},openRegisterModel:function(){this.$router.currentRoute.query.utm_source&&"zhucexz"!==this.$router.currentRoute.query.utm_source?this.bottomButton():this.registerModelShowFlag=1},registerFormEvent:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this,a={type:t,phoneNumber:e.phoneNumber,imgCodeNumber:e.imgCodeNumber,phoneCodeNumber:e.phoneCodeNumber};1==t&&""!=e.phoneNumber&&(e.phoneClearButtonFlag=1),1==t&&""==e.phoneNumber&&(e.phoneClearButtonFlag=0),2==t&&e.commenceTimeFLag||(0,p.registerFormCheck)(a).then(function(a){a&&(1==t&&(e.commenceTimeFLag?e.canGetPhoneCodeFlag=0:e.canGetPhoneCodeFlag=a.canGetPhoneCodeFlag,e.canRegisterFlag=a.canRegisterFlag),2==t&&1==a&&(e.canGetPhoneCodeFlag=0,e.getCommenceTimeFLag()),2==t&&-1==a&&(e.canGetPhoneCodeFlag=1,e.getImgCode()),3==t&&1==a&&(e.registerModelShowFlag=0))})},clearPhoneInput:function(){this.phoneNumber="",this.registerFormEvent(1)},getImgCode:function(){this.codeImgUrl="/front-gateway-web/imgCode.app?"+(new Date).getTime()},getCommenceTimeFLag:function(){var t=this;t.commenceTimeFLag=1,t.GetPhoneButtonText="60s";var e=60,a=setInterval(function(){e--,e>0?t.GetPhoneButtonText=e+"s":(t.commenceTimeFLag=0,t.canGetPhoneCodeFlag=1,t.GetPhoneButtonText="重新获取",clearInterval(a))},1e3)},closeRegisterModel:function(){this.registerModelShowFlag=0},saveVertical:function(){document.body.clientWidth<500&&window.isAndroid?this.lowerTwelve=1:this.lowerTwelve=0}}}},294:function(t,e,a){t.exports=a.p+"img/gd-rb-bg.png?e41c1"},295:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAcJJREFUWAm9l0tOwzAQQD2OCKQSS9hxgIreIcAagVhwA5aI07DkBr1DC3cA5RDAqlICRcRk3DpymtiZcVOySVTPzHv+1HHg+jM/+VXiMdlP7qaH8C7+4bpdqKPiu3iKQNxLhCuhroplPsOGXfM1fJnPkYlsiT0HEK9KicmuJdbwWcU6RaZmY4+tholuiEcXQ0+HiwFmyF0Bpn2bu692LYAAX2CoQF/NhsDQEn1w5LUEhpKgwJ0C20pQ4V6BUAkOvFeAK8GFkwSoEiFwskCfRCicJeCSwN9xC8etPGQX7fwbYlHX1eytzIQoRQUfh8CRwRbApJXE14tS5VgXAZEl8SgNeX9ILBB2lVZaeBl2pjUFOOwZgMxwJEJf5SwBC24WXJrEBynOf+h5grwGOuD1mcHXZs1T5yNJgAKgxHQZ9ApwCnNijYxXIKQgN8cpwC1keoR3Tm6nAKeADbafqTVaAtREG+Z6ptRqCKwT5vW5fYDj+UbNt2rLPre37FqgL9DVS8rvvtpawBdAAVBiXAy4Wajjn9X7HD+XWkNEKU6N6ZKAyw/9oXi2a7iRbEgIeJaRjB6gethcHCZh6DsuwL1qcSMT2X8ljW2u8fqhYAAAAABJRU5ErkJggg=="}});