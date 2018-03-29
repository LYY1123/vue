<template>
  <div class="consultingRoom"
       id="consultingRoom">
    <scroll :isNeedLoading="0"
            ref="fullPageScroll"
            v-if="pageAlready"
            :data="fundCont">
      <div class="consultingRoom-content-wrapper"
           :class="{'haveButton': loginState}">
        <!-- 装饰层 -->
        <div class="decorate-bg"></div>
        <!-- 装饰层end -->
        <!-- 头部搜索 -->
        <div class="content1-wrapper">
          <div class="search-input-part"
               :class="{'search-input-short': showSearch}">
            <span class="serach-button"></span>
            <input type="text"
                   class="search-input"
                   v-model="searchText"
                   placeholder="测一测你关注的基金怎么样？"
                   @input="searchFund"
                   @click="showHotFundList(1)"
                   ref="searchInput">
          </div>
          <div class="search-input-cancer"
               v-if="showSearch"
               @click="showHotFundList(0)">取消</div>
        </div>
        <!-- 头部搜索end -->
        <!-- 诊断报告 -->
        <div class="content2-wrapper">
          <div class="report-part infor-common-wrapper">
            <div class="report-title infor-common-title"
                 @click="toFundDetails(fundCont.fundCode)">
              <p>{{ fundCont.fundName }}</p>
              <p>({{ fundCont.fundCode }})</p>
              <p class="right-button"></p>
            </div>
            <div class="report-content infor-common-cotent">
              <template v-if="fundCont.diagnoseSummary">
                <div class="report-explain">
                  {{ fundCont.diagnoseSummary }}
                </div>
              </template>
              <template v-else>
                <div class="report-explain">基金成立时间太短，暂时没有评分</div>
              </template>
              <div class="radarChart-part">
                <div class="sQuestion"
                     @click="showBoxs(1)"></div>
                <div class="radar-chart-wrapper">
                  <radarChart :fundContainer="fundScoreBean" />
                </div>
                <ul>
                  <li>本基金</li>
                  <li>同类基金</li>
                </ul>
              </div>
              <div class="defeat-text fs-30">
                <p>打败了
                  <span class="fc-00fdff"
                        v-if="fundCont.beatFundRate">{{ fundCont.beatFundRate }}%</span>
                  <span v-else
                        class="fc-00fdff">--</span>
                  的同类基金
                </p>
                <!-- <p><span class="gradual-line left-right"></span><span class="gradual-line right-left"></span></p> -->
              </div>
            </div>
            <div class="report-bottom infor-common-bottom"></div>
          </div>
        </div>
        <!-- 诊断报告end -->
        <!-- 盈利能力 -->
        <div class="content4-wrapper">
          <!-- 非登陆状态引导注册图片 -->
          <img src="../../img/diagnosis/gd-rb-bg.png"
               class="guidanceImg"
               alt="注册"
               v-if="!loginState"
               @click="openRegisterModel">
          <!-- 非登陆状态引导注册end -->
          <!-- 盈利能力内容 -->
          <div class="infor-common-wrapper"
               v-else>
            <div class="infor-common-title">
              盈利潜力
            </div>
            <div class="infor-common-cotent profit-wrapper">
              <div class="profit-explain">统计近一年内任意交易日买入并持有该基金到指定时长的盈利、亏损情况</div>
              <!-- 盈利亏损概率 -->
              <div class="profit-probability">
                <div class="probability-win">
                  <p class="gradual-line right-left"></p>
                  <p class="probability-value align-left">
                    盈利概率：
                    <span class="fc-ff5254"
                          v-if="parseFloat(pieChartData.profitabilityProb) || parseFloat(pieChartData.profitabilityProb) == 0">
                      {{ pieChartData.profitabilityProb }}%
                    </span>
                    <span class="fc-ff5254"
                          v-else>--</span>
                  </p>
                  <p class="gradual-line right-left"></p>
                </div>
                <div class="probability-loss">
                  <p class="gradual-line left-right"></p>
                  <p class="probability-value align-right">
                    亏损概率：
                    <span class="fc-00fdff"
                          v-if="parseFloat(pieChartData.deficitProb) || parseFloat(pieChartData.deficitProb) == 0">{{ pieChartData.deficitProb }}%</span>
                    <span class="fc-00fdff"
                          v-else>--</span>
                  </p>
                  <p class="gradual-line left-right"></p>
                </div>
              </div>
              <!-- 盈利亏损概率end -->
              <!-- 环形图表 -->
              <div class="pie-chart-wrapper">
                <div class="pie-chart-left">
                  <div>
                    <p><span class="bg-ffbebe"></span><span :class="{'lower-twelve-px' : lowerTwelve}">盈利0%-5%</span></p>
                    <p v-if="parseFloat(pieChartData.profitabilityLow) || parseFloat(pieChartData.profitabilityLow) >= 0">{{ pieChartData.profitabilityLow }}%</p>
                    <p v-else>--</p>
                  </div>
                  <div>
                    <p><span class="bg-ff7878"></span><span :class="{'lower-twelve-px' : lowerTwelve}">盈利5%-10%</span></p>
                    <p v-if="parseFloat(pieChartData.profitabilityMid) || parseFloat(pieChartData.profitabilityMid) >= 0">{{ pieChartData.profitabilityMid }}%</p>
                    <p v-else>--</p>
                  </div>
                  <div>
                    <p><span class="bg-ff5353"></span><span :class="{'lower-twelve-px' : lowerTwelve}">盈利10%以上</span></p>
                    <p v-if="parseFloat(pieChartData.profitabilityHig) || parseFloat(pieChartData.profitabilityHig) >= 0">{{ pieChartData.profitabilityHig }}%</p>
                    <p v-else>--</p>
                  </div>
                </div>
                <div class="pie-chart"><pieChart :pieChartSeriesOptions="pieChartSeriesOptions"/></div>
                <div class="pie-chart-right">
                  <div>
                    <p><span class="bg-c1f8ff"></span><span :class="{'lower-twelve-px' : lowerTwelve}">亏损0%-5%</span></p>
                    <p v-if="parseFloat(pieChartData.deficitLow) || parseFloat(pieChartData.deficitLow) >= 0">{{ pieChartData.deficitLow }}%</p>
                    <p v-else>--</p>
                  </div>
                  <div>
                    <p><span class="bg-70efff"></span><span :class="{'lower-twelve-px' : lowerTwelve}">亏损5%-10%</span></p>
                    <p v-if="parseFloat(pieChartData.deficitMid) || parseFloat(pieChartData.deficitMid) >= 0">{{ pieChartData.deficitMid }}%</p>
                    <p v-else>--</p>
                  </div>
                  <div>
                    <p><span class="bg-08d2eb"></span><span :class="{'lower-twelve-px' : lowerTwelve}">亏损10%以上</span></p>
                    <p v-if="parseFloat(pieChartData.deficitHig) || parseFloat(pieChartData.deficitHig) >= 0">{{ pieChartData.deficitHig }}%</p>
                    <p v-else>--</p>
                  </div>
                </div>
              </div>
              <!-- 环形图表end -->
              <!-- 持有时间tab -->
              <div class="holdtime-tab-wrapper">
                <span :class="{'active' : pieChartId == 14}"
                      @click="changePieChart(14)">持有14天</span>
                <span :class="{'active' : pieChartId == 30}"
                      @click="changePieChart(30)">持有30天</span>
                <span :class="{'active' : pieChartId == 60}"
                      @click="changePieChart(60)">持有60天</span>
                <span :class="{'active' : pieChartId == 90}"
                      @click="changePieChart(90)">持有90天</span>
              </div>
              <!-- 持有时间tab end -->
            </div>
            <div class="infor-common-bottom"></div>
          </div>
          <!-- 盈利能力内容end -->
        </div>
        <!-- 盈利能力end -->
        <!-- 诊断日期 -->
        <div class="diagnosis-date">(诊断日期：{{ diagnoseDate }})</div>
        <!-- 诊断日期end -->
        <!-- 新增宣传图片 -->
        <div class="publicity-pic"
             v-if="adviceData.length > 0">
          <img :src="item.src"
               alt="利得基金"
               v-for="(item,index) in adviceData"
               @click="adviceLink(item.link)">
        </div>
        <!-- 新增宣传图片end -->
        <!-- 新增投资风险提示 -->
        <div class="risk-hint">
          市场有风险，投资需谨慎
        </div>
        <!-- 新增投资风险提示end -->
      </div>
    </scroll>

    <!-- 底部按钮 -->
    <div class="bottom-button-wrapper"
         v-if="loginState">
      <div class="button-type"
           @click="bottomButton">
        下载利得基金APP，看诊断排行
      </div>
    </div>
    <!-- 底部按钮end -->
    <!-- 什么是基金诊断弹框 -->
    <explainModel :explainModelShow="showBox"
                  :listenCloseModel="1"
                  @closeModel="showBoxs(0)"
                  :items="boxCont"/>
    <!-- 什么是基金诊断弹框end -->
    <!-- 基金搜索开始 -->
    <transition name="slide-fade">
      <div class="fSearchHot"
           v-show="showSearch">
        <scroll :isNeedLoading="0"
                ref="searchModelScroll">
          <!-- 热搜基金开始 -->
          <div v-show="!showSearchList">
            <div class="hotTitle"><em class="hotIcon"></em>热搜基金</div>
            <ul>
              <li v-for="(item,index) in hotFundList"
                  :key="index"
                  @click="targetLink(item.fundcode)">
                <div>
                  <label>{{ item.fundname }}</label>
                  <p>
                    <span>{{ item.fundcode }}</span>
                    <em class="fs-20">{{ item.fundtypename }}</em>
                  </p>
                </div>
                <em class="diagnosis">诊断</em>
              </li>
            </ul>
          </div>
          <!-- 热搜基金结束 -->
          <ul v-show="showSearchList">
            <li v-for="(item,index) in searchList"
                :key="index"
                @click="targetLink(item.fundcode)">
              <div>
                <label>{{ item.fundname }}</label>
                <p>
                  <span>{{ item.fundcode }}</span>
                  <em class="fs-20">{{ item.fundtypename }}</em>
                </p>
              </div>
              <em class="diagnosis">诊断</em>
            </li>
          </ul>
        </scroll>

      </div>
    </transition>
    <!-- 基金搜索结束 -->
    <!-- 注册登陆弹框 -->
    <div class="registerModel"
         v-if="registerModelShowFlag"
         @click="stopEvent">
      <div class="registerModel-content">
        <!-- mode title -->
        <div class="model-title fs-36">
          <span>注册免费查看</span>
          <!-- 关闭登录注册弹窗按钮 -->
          <img src="../../img/diagnosis/closeModel-ico.png"
               alt="关闭"
               class="close-model-button"
               @click="closeRegisterModel">
        </div>
        <!-- 手机号 -->
        <p class="phone-input-label">
          <input type="tel"
                 maxlength="11"
                 @input="registerFormEvent(1)"
                 v-model="phoneNumber"
                 placeholder="请输入手机号码">
          <span class="phone-input-delete"
                v-show="phoneClearButtonFlag"
                @click="clearPhoneInput"></span>
        </p>
        <!-- 图形验证码 -->
        <p class="form-label-two">
          <input type="text"
                 class="form-label-two-left"
                 maxlength="5"
                 @input="registerFormEvent(1)"
                 v-model="imgCodeNumber"
                 placeholder="请输入图形验证码">
          <img :src="codeImgUrl"
               class="img-code"
               alt="图片验证码"
               @click="getImgCode">
        </p>
        <!-- 动态验证码 -->
        <p class="form-label-two">
          <input type="tel"
                 class="form-label-two-left"
                 maxlength="6"
                 @input="registerFormEvent(1)"
                 v-model="phoneCodeNumber"
                 placeholder="请输入手机动态码">
          <span class="get-code-button fs-24"
                :class="{'highlight': canGetPhoneCodeFlag}"
                @click="registerFormEvent(2)">{{ GetPhoneButtonText }}</span>
        </p>
        <p class="regist-button fs-30"
           :class="{'highlight': canRegisterFlag}"
           @click="registerFormEvent(3)">立即查看</p>
      </div>
    </div>
    <!-- 注册登陆弹框end -->
  </div>
</template>

<script>
import scroll from 'components/subassembly/scroll.vue';
import radarChart from 'components/subassembly/radarChart.vue';
import explainModel from 'components/diagnosis/diagnosisExplainModel.vue';
import pieChart from 'components/subassembly/pieChart.vue';
import {openApp, registerFormCheck, toast} from 'js/api.js';
import {hotFund, searchFund, diagnosisDetail, advertising} from 'js/request.js';
import weChartApi from 'js/weChartApi.js';

export default {
  name: 'GeneralizeDiagnosis',
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // 检测登陆状态
      vm.$store.dispatch('checkLogin');
    });
  },
  components: {
    scroll,
    radarChart,
    pieChart,
    explainModel
  },
  data () {
    return {
      pageAlready: 0,
      hotFundList: [],
      searchText: '',
      showSearch: 0,
      showSearchList: 0,
      searchList: '',
      fundCont: {
        diagnoseStory: []
      },
      adviceData: [],
      fundScoreBean: [],
      diagnoseDate: '',
      showBox: 0,
      boxCont: [],
      pieChartData: {},
      pieChartSeriesOptions: [],
      pieChartId: 14,
      lowerTwelve: 0,
      registerModelShowFlag: 0,
      codeImgUrl: window.location.origin + '/front-gateway-web/imgCode.app?' + new Date().getTime(),
      phoneNumber: '',
      phoneClearButtonFlag: 0,
      imgCodeNumber: '',
      phoneCodeNumber: '',
      canGetPhoneCodeFlag: 0,
      canRegisterFlag: 0,
      commenceTimeFLag: 0,
      GetPhoneButtonText: '获取动态码'
    };
  },
  computed: {
    loginState () {
      return this.$store.getters.loginState;
    }
  },
  watch: {
    showSearch (n, o) {
      let _this = this;
      if (n == 0) {
        // 搜索框失去焦点
        _this.$refs.searchInput.blur();
        // 开启详情页滚动
        _this.$refs.fullPageScroll.enable();
      } else {
        // 禁止详情整页滚动 防止弹出搜索框后 滑动顶部input框位置滚动详情层级页面
        _this.$refs.fullPageScroll.disable();

        _this.$nextTick(function () {
          // 打开搜索弹框后 刷新scroll
          _this.$refs.searchModelScroll.refresh();
        });
      }
    }
  },
  mounted () {
    this.wxShare();
    this.fundDetails();
    this.getAdvertising();
  },
  methods: {
    // 显示弹框
    showBoxs (id) {
      this.showBox = id;
    },
    // 微信分享
    wxShare () {
      let shareId = 'APP_JJZD_0118';
      if (window.isWechat) {
        weChartApi.wechatShare(shareId, window.location.href);
      }
    },
    // 底部按钮事件
    bottomButton () {
      let _this = this;
      // 开启Loading 避免未打开APP时跳转下载链接前的等待
      _this.$store.commit('UPDATE_LOADINGNAME', 'loading');
      _this.$store.commit('UPDATE_LOADINGFLAG', 3);

      openApp();

      // 2s后关闭loading
      setTimeout(function () {
        _this.$store.commit('UPDATE_LOADINGFLAG', 0);
      }, 2000);
    },
    // 显示热搜基金
    showHotFundList (id) {
      this.showSearch = id;

      if (id == 1 && this.hotFundList && this.hotFundList.length <= 0) {
        this.hotFund();
      }
    },
    // 热搜基金
    hotFund () {
      let self = this;
      hotFund().then(function (resp) {
        if (resp.data.respCode == '000') {
          self.hotFundList = resp.data.data.hotSearchFundList;
        } else {
          toast(resp.data.respMessage);
        }
      });
    },
    // 跳转诊断链接
    targetLink (code) {
      this.fundDetails(code);
      this.showSearch = 0;
    },
    // 基金搜索内容输入
    searchFund () {
      let self = this;
      self.searchText = self.searchText.replace(/^ +| +$/g, '');

      if (self.searchText) {
        self.fundList();
        self.showSearchList = 1;
      }

      if (self.searchText == '') {
        self.showSearchList = 0;
      }
    },
    // 搜索的基金列表
    fundList () {
      let self = this;
      searchFund({
        fundkey: encodeURI(self.searchText)
      }).then(function (resp) {
        if (resp.data.respCode == '000') {
          self.searchList = resp.data.data.fundSearchList;
        } else {
          toast(resp.data.respMessage);
        }
      });
    },
    stopEvent (event) {
      event.stopPropagation();
      event.preventDefault();
    },
    // 诊断日期
    getDiagnoseDate (date) {
      let getDataDate = date ? new Date(date) : new Date();
      let diagnoseDate = '';
      diagnoseDate = diagnoseDate + getDataDate.getFullYear();
      diagnoseDate = diagnoseDate + '-' + (getDataDate.getMonth() + 1 < 10 ? '0' + (getDataDate.getMonth() + 1) : getDataDate.getMonth() + 1);
      diagnoseDate = diagnoseDate + '-' + (getDataDate.getDate() < 10 ? '0' + getDataDate.getDate() : getDataDate.getDate());

      return diagnoseDate;
    },
    // 判断是什么类型基金
    showType (codeType) {
      let self = this;
      let fundCore = self.fundCont[codeType];
      let type = self.fundCont.fundType;
      let dateList = [];
      if (type == '10000-01') { // 股票
        dateList = [
          [
            fundCore.fundAdvantageScore,
            fundCore.profitabilityScore,
            fundCore.returnRiskScore,
            fundCore.marketTimingScore,
            fundCore.stockSelectionScore
          ],
          [
            '产品优势',
            '盈利能力',
            '风险收益比',
            '择时能力',
            '选股能力'
          ]
        ];
      } else if (type == '10000-02') { // 被动指数型（偏股型）
        dateList = [
          [
            fundCore.fundAdvantageScore,
            fundCore.excessProfitabilityScore,
            fundCore.trackingAbilityScore
          ],
          [
            '产品优势',
            '超额收益',
            '跟踪能力'
          ]
        ];
      } else if (type == '10000-03') { // QDII
        dateList = [
          [
            fundCore.fundAdvantageScore,
            fundCore.profitabilityScore,
            fundCore.returnRiskScore
          ],
          [
            '产品优势',
            '盈利能力',
            '风险收益比'
          ]
        ];
      } else if (type == '10000-04') { // 混合型（除偏债型）
        dateList = [
          [
            fundCore.fundAdvantageScore,
            fundCore.profitabilityScore,
            fundCore.returnRiskScore,
            fundCore.marketTimingScore,
            fundCore.stockSelectionScore
          ],
          [
            '产品优势',
            '盈利能力',
            '风险收益比',
            '择时能力',
            '选股能力'
          ]
        ];
      } else if (type == '10000-05') { // 混合型（偏债型）
        dateList = [
          [
            fundCore.fundAdvantageScore,
            fundCore.profitabilityScore,
            fundCore.returnRiskScore
          ],
          [
            '产品优势',
            '盈利能力',
            '风险收益比'
          ]
        ];
      } else if (type == '10000-06') { // 货币型
        dateList = [
          [
            fundCore.fundAdvantageScore,
            fundCore.profitabilityScore,
            fundCore.returnRiskScore,
            fundCore.stabilityScore
          ],
          [
            '产品优势',
            '盈利能力',
            '风险收益比',
            '稳定性'
          ]
        ];
      } else if (type == '10000-07') { // 另类
        dateList = [
          [
            fundCore.fundAdvantageScore,
            fundCore.profitabilityScore,
            fundCore.returnRiskScore
          ],
          [
            '产品优势',
            '盈利能力',
            '风险收益比'
          ]
        ];
      } else if (type == '10000-08') { // 债券型
        dateList = [
          [
            fundCore.fundAdvantageScore,
            fundCore.profitabilityScore,
            fundCore.returnRiskScore
          ],
          [
            '产品优势',
            '盈利能力',
            '风险收益比'
          ]
        ];
      } else if (type == '10000-09') { // 被动指数型（偏债型）
        dateList = [
          [
            fundCore.fundAdvantageScore,
            fundCore.excessProfitabilityScore,
            fundCore.trackingAbilityScore
          ],
          [
            '产品优势',
            '超额收益',
            '跟踪能力'
          ]
        ];
      } else {
        dateList = [
          [
            fundCore.fundAdvantageScore,
            fundCore.profitabilityScore,
            fundCore.returnRiskScore,
            fundCore.marketTimingScore,
            fundCore.stockSelectionScore
          ],
          [
            '产品优势',
            '盈利能力',
            '风险收益比',
            '择时能力',
            '选股能力'
          ]
        ];
      }
      return dateList;
    },
    // 详情页面基本数据
    fundDetails (id) {
      let self = this;
      let fundId = id || self.$router.currentRoute.query.fundId;
      diagnosisDetail('', fundId).then(function (resp) {
        // 计算数据获取日期
        self.diagnoseDate = self.getDiagnoseDate(resp.headers.date);

        if (resp.data.respCode == '000') {
          self.fundCont = resp.data.data;
          self.fundScoreBean = [];
          self.fundScoreBean.push(self.showType('fundScoreBean'));
          self.fundScoreBean.push(self.showType('sameFundScoreBean'));
          self.fundScoreBean.push(self.fundCont.fundScore);
          self.boxCont = self.fundScoreBean[0][1];

          // 画出盈利饼图
          self.changePieChart(14);
        } else {
          toast(resp.data.respMessage);
        }

        // 页面加载完毕标志
        self.$nextTick(function () {
          self.pageAlready = 1;
        });
      });
    },
    // 获取广告图片
    getAdvertising () {
      let _this = this;
      advertising().then(function(resp){
        if (resp.data.respCode === "000") {
          let advice_group = resp.data.data.storeyList;
          for (var i = 0; i < advice_group.length; i++) {
            if (advice_group[i].code === "showAdvert") {
              _this.adviceData = advice_group[i].showAdvert_group1;
              break;
            }
          }
        }
      })
    },
    // 广告图片跳转
    adviceLink (link) {
      if (link) {
        window.location.href = link;
      }
    },
    // 跳转基金详情
    toFundDetails (id) {
      // fromId来源ID 1来自基金诊断推广
      if (this.$router.currentRoute.query.fromId == 1) {
        this.$router.push({path: 'productDetails', query: {fundId: id, fromId: this.$router.currentRoute.query.fromId}});
      } else {
        this.$router.push({path: 'productDetails', query: {fundId: id}});
      }
    },
    // 改变基金持有天数查看盈利能力图表
    changePieChart (time) {
      let _this = this;
      _this.pieChartId = time;

      let pieChartData;
      switch (time) {
      case 14 :
        pieChartData = _this.fundCont.fourteenProfitabilityBean;
        break;
      case 30 :
        pieChartData = _this.fundCont.thirtyProfitabilityBean;
        break;
      case 60 :
        pieChartData = _this.fundCont.sixtyProfitabilityBean;
        break;
      case 90 :
        pieChartData = _this.fundCont.ninetyProfitabilityBean;
        break;
      default :
        pieChartData = _this.fundCont.fourteenProfitabilityBean;
        break;
      }

      _this.pieChartData = pieChartData;
      _this.$set(_this.pieChartSeriesOptions, 0, {
        name: '盈利能力',
        data: [
          {
            value: parseFloat(pieChartData.deficitLow),
            name: '亏损0%-5%',
            itemStyle: {
              normal: {
                color: '#c1f8ff'
              }
            }
          },
          {
            value: parseFloat(pieChartData.deficitMid),
            name: '亏损5%-10%',
            itemStyle: {
              normal: {
                color: '#70efff'
              }
            }
          },
          {
            value: parseFloat(pieChartData.deficitHig),
            name: '亏损10%以上',
            itemStyle: {
              normal: {
                color: '#08d2eb'
              }
            }
          },
          {
            value: parseFloat(pieChartData.profitabilityHig),
            name: '盈利10%以上',
            itemStyle: {
              normal: {
                color: '#ff5353'
              }
            }
          },
          {
            value: parseFloat(pieChartData.profitabilityMid),
            name: '盈利5%-10%',
            itemStyle: {
              normal: {
                color: '#ff7878'
              }
            }
          },
          {
            value: parseFloat(pieChartData.profitabilityLow),
            name: '盈利0%-5%',
            itemStyle: {
              normal: {
                color: '#ffbebe'
              }
            }
          }
        ]
      });
    },
    openRegisterModel () {
      // 针对KOL渠道以及朋友圈渠道做区分，KOL点击页面下方盈利潜力的模糊图片跳转至注册、下载流程；朋友圈点击直接跳转至下载流程
      //没有utm_source utm_source等于zhucexz 走注册下载流程
      //其他utm_source直接跳转下载
      if (!this.$router.currentRoute.query.utm_source || this.$router.currentRoute.query.utm_source === "zhucexz") {
        this.registerModelShowFlag = 1;
      } else {
        this.bottomButton();
      }
    },
    // 登录注册弹框输入框输入事件
    registerFormEvent (eventType = 1) {
      let _this = this;
      let parameter = {
        type: eventType,
        phoneNumber: _this.phoneNumber,
        imgCodeNumber: _this.imgCodeNumber,
        phoneCodeNumber: _this.phoneCodeNumber
      };
      // 手机号输入框显示delete按钮
      if (eventType == 1 && _this.phoneNumber != '') {
        _this.phoneClearButtonFlag = 1;
      }
      if (eventType == 1 && _this.phoneNumber == '') {
        _this.phoneClearButtonFlag = 0;
      }

      // 倒计时进行中不能继续点击获取验证码
      if (eventType == 2 && _this.commenceTimeFLag) {
        return;
      }
      registerFormCheck(parameter).then(function (response) {
        if (response) {
          if (eventType == 1) {
            if (_this.commenceTimeFLag) {
              _this.canGetPhoneCodeFlag = 0;
            } else {
              _this.canGetPhoneCodeFlag = response.canGetPhoneCodeFlag;
            }
            _this.canRegisterFlag = response.canRegisterFlag;
          }
          // 获取验证码成功
          if (eventType == 2 && response == 1) {
            _this.canGetPhoneCodeFlag = 0;
            // 开始倒计时
            _this.getCommenceTimeFLag();
          }
          // 获取验证码失败
          if (eventType == 2 && response == -1) {
            _this.canGetPhoneCodeFlag = 1;
            // 重新获取图形验证码
            _this.getImgCode();
          }
          // 登录成功
          if (eventType == 3 && response == 1) {
            _this.registerModelShowFlag = 0;
          }
        }
      });
    },
    // 清空手机号输入框
    clearPhoneInput () {
      this.phoneNumber = '';
      // 手动触发form input事件
      this.registerFormEvent(1);
    },
    // 获取图片验证码
    getImgCode () {
      let self = this;
      let src = '/front-gateway-web/imgCode.app?';
      self.codeImgUrl = src + new Date().getTime();
    },
    // 倒计时
    getCommenceTimeFLag () {
      let _this = this;
      // 倒计时开始
      _this.commenceTimeFLag = 1;
      _this.GetPhoneButtonText = '60s';
      let commenceTime = 60;
      let interval = setInterval(function () {
        commenceTime--;
        if (commenceTime > 0) {
          _this.GetPhoneButtonText = commenceTime + 's';
        } else {
          // 倒计时结束
          _this.commenceTimeFLag = 0;
          _this.canGetPhoneCodeFlag = 1;
          _this.GetPhoneButtonText = '重新获取';
          clearInterval(interval);
        }
      }, 1000);
    },
    // 关闭登录注册弹窗
    closeRegisterModel () {
      this.registerModelShowFlag = 0;
    },
    // 解决安卓机中文字大小小于12px时产生的垂直居中误差
    saveVertical () {
      if (document.body.clientWidth < 500 && window.isAndroid) {
        this.lowerTwelve = 1;
      } else {
        this.lowerTwelve = 0;
      }
    }
  }
};
</script>

<style lang="less" scoped>
  .consultingRoom {
    position: relative;
    width: 100%;
    height: 100%;
    font-size: 28/40rem;
    color: #fff;
    overflow: hidden;
    .consultingRoom-content-wrapper {
      width: 100%;
      min-height: 100%;
      background-color: #030d26;
      .decorate-bg {
        position: absolute;
        right: 0;
        top: 116/40rem;
        width: 105/40rem;
        height: 461/40rem;
        background-image: url("../../img/diagnosis/decorate-bg1.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
      .content1-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 164/40rem;
        background-image: url("../../img/diagnosis/decorate-line1.png");
        background-size: auto 220/40rem;
        background-repeat: no-repeat;
        background-position: 20/40rem bottom;
        .search-input-part {
          box-sizing: border-box;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 650/40rem;
          height: 95/40rem;
          font-size: 28/40rem;
          color: #fff;
          text-align: center;
          background-image: url("../../img/diagnosis/fund-name-bg2.png");
          background-size: 100% 100%;
          background-color: transparent;
          .serach-button {
            position: absolute;
            left: 15%;
            top: 50%;
            transform: translateY(-50%);
            width: 36/40rem;
            height: 34/40rem;
            background-image: url("../../img/diagnosis/fundward-icons.png");
            background-size: 61/40rem 34/40rem;
            background-repeat: no-repeat;
          }
          .search-input {
            box-sizing: border-box;
            padding-left: 24%;
            padding-right: 40/40rem;
            display: inline-block;
            width: 100%;
            height: 100%;
            font-size: 28/40rem;
            color: #fff;
            background-color: transparent;
          }
          input::-webkit-input-placeholder { /* WebKit browsers */
              color: #fff;
          }
          input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
              color: #fff;
          }
          input::-moz-placeholder { /* Mozilla Firefox 19+ */
              color: #fff;
          }
          input:-ms-input-placeholder { /* Internet Explorer 10+ */
              color: #fff;
          }
        }
        .search-input-short{
          width: 13.85rem;
        }
        .search-input-cancer{
          color: #4ff7ff;
          font-size: 0.75rem;
          padding-left: 1.1rem;
        }
      }
      .content2-wrapper {
        width: 100%;
        background-image: url("../../img/diagnosis/decorate-bg2.png");
        background-size: 107/40rem auto;
        background-repeat: no-repeat;
        background-position: 0 81/40rem;
        .report-part {
          font-size: 30/40rem;
          color: #fff;
          .report-title{
            position: relative;
            .right-button {
              position: absolute;
              right: 107/40rem;
              top: 50%;
              width: 16/40rem;
              height: 30/40rem;
              background-image: url("../../img/diagnosis/gt-ico.png");
              background-size: 16/40rem 30/40rem;
              background-repeat: no-repeat;
              background-position: right top;
              transform: translateY(-50%);
            }
          }
          .report-title>p:first-child {
            display: block;
            width: 330/40rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align: center;
          }
          .report-content {
            padding-top: 28/40rem;
            padding-bottom: 48/40rem;
          }
          .report-explain {
            box-sizing: border-box;
            margin: 0 auto;
            padding: 21/40rem 32/40rem;
            width: 572/40rem;
            background-image: url("../../img/diagnosis/report-bg.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
          .radarChart-part {
            margin: 0 auto;
            width: 572/40rem;
            margin-top: 40/40rem;
            margin-bottom: 70/40rem;
            position: relative;
            .radar-chart-wrapper {
              margin: 0 auto;
              width: 100%;
              height: 500/40rem;
            }
            .sQuestion{
              width: 0.8rem;
              height: 0.8rem;
              background: url('../../img/diagnosis/mark-ico.png') no-repeat;
              background-size: 100% 100%;
              display: block;
              position: absolute;
              right: 0;
              top: 0;
              z-index: 2;
            }
            ul{
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 0.525rem;
              li{
                background: url('../../img/diagnosis/circle-2adef2-ico.png') left no-repeat;
                background-size: 0.5rem 0.5rem;
                padding-left: 0.75rem;
              }
              li:last-child{
                background: url('../../img/diagnosis/circle-6e828f-ico.png') left no-repeat;
                background-size: 0.5rem 0.5rem;
                margin-left: 1.5rem;
              }
            }
          }
          .defeat-text {
            p {
              text-align: center;
            }
          }
        }
      }
      .content4-wrapper {
        margin-top: 40/40rem;
        width: 100%;
        .guidanceImg {
          display: block;
          margin: 0 auto;
          width: 632/40rem;
          height: auto;
        }
        .infor-common-wrapper  {
          .infor-common-title {
            height: 78/40rem;
            background-image: url("../../img/diagnosis/infor-header-bg.png");
          }
        }
        .profit-wrapper {
          padding: 0 30/40rem;
          padding-bottom: 48/40rem;
          padding-top: 32/40rem;
          font-size: 22/40rem;
          color: #dce0e3;
          .profit-probability {
            margin-top: 40/40rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .probability-value {
              padding: 15/40rem 0;
            }
          }
          .pie-chart-wrapper {
            margin-top: 44/40rem;
            margin-bottom: 80/40rem;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            width: 100%;
            .pie-chart-left,
            .pie-chart-right {
              height: 100%;
              div {
                margin-bottom: 40/40rem;
                font-size: 18/40rem;
                p:first-child {
                  position: relative;
                  display: flex;
                  align-items: center;
                  justify-content: flex-start;
                  color: #dee0e2;
                  span:first-child {
                    display: inline-block;
                    width: 20/40rem;
                    height: 20/40rem;
                    overflow: hidden;
                  }
                  span:last-child {
                    margin-left: 10/40rem;
                  }
                  span.lower-twelve-px {
                    padding-top: 1.5px;
                  }
                }
                p:last-child {
                  margin-left: 30/40rem;
                  margin-top: 6/40rem;
                  color: #fff;
                }
              }
              div:last-child {
                margin-bottom: 0;
              }
            }
            .pie-chart {
              width: 200/40rem;
              height: 200/40rem;
            }
          }
          .holdtime-tab-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 100%;
            span {
              box-sizing: border-box;
              flex: 1;
              display: block;
              height: 62/40rem;
              line-height: 60/40rem;
              text-align: center;
              border-top: 1px solid #0a8396;
              border-bottom: 1px solid #0a8396;
            }
            span:first-child {
              border-left: 1px solid #0a8396;
              border-radius: 3px 0 0 3px;
            }
            span:last-child {
              border-right: 1px solid #0a8396;
              border-radius: 0 3px 3px 0;
            }
            span.active {
              background-color: #00fcff;
              border-color: #00fcff;
              color: #224aa2;
            }
          }
        }
      }
      .diagnosis-date {
        padding-top: 47/40rem;
        font-size: 22/40rem;
        color: #b9b8bd;
        text-align: center;
      }
      .publicity-pic {
        margin: 0 auto;
        margin-top: 60/40rem;
        width: 636/40rem;
        img {
          display: block;
          width: 100%;
          height: auto;
        }
      }
      .risk-hint {
        padding: 40/40rem;
        font-size: 22/40rem;
        color: #183540;
        text-align: center;
      }
      .infor-common-wrapper {
        margin: 0 auto;
        width: 632/40rem;
        .infor-common-title {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 132/40rem;
            font-size: 22/40rem;
            color: #4ef7fe;
            background-image: url("../../img/diagnosis/infor-header-bg2.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;

        }
        .infor-common-cotent {
            width: 100%;
            background-image: url("../../img/diagnosis/infor-border-bg.png");
            background-size: 100% auto;
            background-repeat: repeat-y;
          }
        .infor-common-bottom {
          width: 100%;
          height: 14/40rem;
          background-image: url("../../img/diagnosis/infor-bottom-bg.png");
          background-size: 100% auto;
          background-repeat: no-repeat;
          background-position: left bottom;
        }
      }
    }
    .consultingRoom-content-wrapper.haveButton {
      padding-bottom: 120/40rem;
    }
    .bottom-button-wrapper {
      box-sizing: border-box;
      padding: 17/40rem 19/40rem;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 120/40rem;
      font-size: 34/40rem;
      color: #030d26;
      background-color: #0e2e45;
      border-top: 1px solid #2f93a2;
      .button-type {
        width: 100%;
        height: 100%;
        line-height: 86/40rem;
        background-color: #00fcff;
        text-align: center;
        border-radius: 3px;
      }
    }
    // 渐变线条
    .gradual-line {
      width: 226/40rem;
      height: 3px;
      transform: scaleY(.5);
    }
    .gradual-line.right-left {
      background: linear-gradient(to left,#0b4256,#00f6f8);
    }
    .gradual-line.left-right {
      background: linear-gradient(to right,#0b4256,#00f6f8);
    }
  }
  .fSearchHot{
      padding: 0rem 0.75rem;
      position: absolute;
      left: 0;
      top: 165/40rem;
      right: 0;
      bottom: 0;
      background-color: #030d26;
      .hotTitle{
        display: flex;
        line-height: 2.75rem;
        border-bottom: 1px solid #4FF7FF;
        font-size: 0.75rem;
        color: #4FF7FF;
        align-items: center;
      }
      .hotIcon{
        width: 0.75rem;
        height: 0.75rem;
        display: inline-block;
        background: url("../../img/hot-blue.png") no-repeat;
        background-size: 100% 100%;
        margin-right: 0.5rem;
      }
      ul li{
        padding: 1rem 0rem;
        border-bottom: 1px solid  #4FF7FF;
        font-size: 0.75rem;
        color: #FFFFFF;
        line-height: 0.75rem;
        display: flex;
        align-items: center;
        div{
          flex: 1;
          label{
            padding-bottom: 0.4rem;
            display: block;
          }
          p{
            font-size: 0.6rem;
            color: #fff;
            line-height: 0.6rem;
            display: flex;
            align-items: center;
            span{
              padding-right: 0.5rem;
            }
            em{
              border: 1px solid #DCDCDC;
              border-radius: 2px;
              padding: 0rem 0.25rem;
            }
          }
        }
        em.diagnosis{
          font-size: 0.6rem;
          color: #4FF7FF;
          line-height: 0.6rem;
          border: 1px solid #4FF7FF;
          border-radius: 2px;
          padding: 0.2rem 0.4rem;
        }
      }
      ul li:last-child {
        border-bottom: none;
      }
  }
  // 搜索框进出动画
  .slide-fade-enter-active, .slide-fade-leave-active {
    transition: all .5s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateY(100%);
    opacity: 0;
  }
  .serachTriangle{
    width: 0.325rem;
    height: 0.7rem;
    display: inline-block;
    background-image: url("../../img/diagnosis/fundward-icons.png");
    background-size: 61/40rem 34/40rem;
    background-repeat: no-repeat;
    background-position: -1.15rem 0rem;
    margin-left: 0.25rem;
    margin-top: 1px;
  }

  // 注册登陆弹窗样式
  .registerModel {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.8);
    .registerModel-content {
      padding: 0 40/40rem;
      position: absolute;
      left: 50%;
      top: 50%;
      width: 612/40rem;
      height: auto;
      background-image: url("../../img/diagnosis/register-model-bg.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      transform: translate(-50%,-50%);
      .model-title {
        padding-top: 66.8/40rem;
        padding-bottom: 50/40rem;
        position: relative;
        color: #4BECF5;
        text-align: center;
        .close-model-button {
          display: block;
          position: absolute;
          top: 1.9rem;
          right: -10/40rem;
          width: 32/40rem;
          height: auto;
        }
      }
      p {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 30/40rem;
        .phone-input-delete {
          position: absolute;
          right: 0;
          top: 0;
          width: 73/40rem;
          height: 100%;
          background-image: url("../../img/diagnosis/Delete.png");
          background-size: 26/40rem 26/40rem;
          background-repeat: no-repeat;
          background-position: 0 center;
        }
        .img-code {
          display: inline-block;
          box-sizing: border-box;
          width: 174/40rem;
          height: 54.4/40rem;
        }
        .get-code-button {
          display: inline-block;
          box-sizing: border-box;
          width: 174/40rem;
          height: 80/40rem;
          color: #030D26;
          text-align: center;
          line-height: 80/40rem;
          background-color: #0795A3;
          border-radius: 2px;
        }
        .get-code-button.highlight {
          background-color: #4BECF5;
        }
      }
      p.form-label-two {
        justify-content: space-between;
        .form-label-two-left {
          display: inline-block;
          width: 316/40rem;
        }
      }
      p.phone-input-label {
        position: relative;
        input {
          padding-right: 90/40rem;
        }
      }
      input {
        display: inline-block;
        box-sizing: border-box;
        padding: 0 40/40rem;
        width: 100%;
        height: 80/40rem;
        font-size: 24/40rem;
        color: #4FF7FF;
        border: 1px solid #4FF7FF;
        background-color: transparent;
        border-radius: 2px;
      }
      input::-webkit-input-placeholder {
        color: #4FF7FF;
      }
      input:-moz-placeholder {
        color: #4FF7FF;
      }
      input::-moz-placeholder {
        color: #4FF7FF;
      }
      input:-ms-input-placeholder {
        color: #4FF7FF;
      }
      .regist-button {
        margin-top: 50/40rem;
        margin-bottom: 50/40rem;
        width: 100%;
        height: 80/40rem;
        color: #030D26;
        background-color: #0795A3;
        border-radius: 2px;
      }
      .highlight {
        background-color: #4BECF5;
      }
    }
    .registerModel-content>p {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
