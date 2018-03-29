<template>
  <div class="dSearchBg">
    <scroll :isNeedLoading="0"
            :data="fundList">
      <div class="dBanner">
        <img src="../img/diagnosis/diagnosisBanner.jpg" >
        <div class="serchInputTarget">
          <div class="allIn"
               @click="targetSearch" >
            <div class="fInput">请输入基金代码进行诊断</div>
            <div class="searchIcon search"></div>
          </div>
        </div>
      </div>
      <div class="dTitle"><em></em>{{ titleName }}</div>
      <div class="dSearchList">
        <ul>
          <li v-for="(item, index) in fundList"
              :key="index"
              @click="targetFundDetail(item.productCode)">
            <div>
              <em class="topThree"
                  v-if="index+1 >= 4">{{ index+1 }}</em>
              <img src="../img/diagnosis/ds-ico-number1.png"
                   class="rankingIco"
                   alt="智能诊断"
                   v-if="index+1 == 1">
              <img src="../img/diagnosis/ds-ico-number2.png"
                   class="rankingIco"
                   alt="智能诊断"
                   v-if="index+1 == 2">
              <img src="../img/diagnosis/ds-ico-number3.png"
                   class="rankingIco"
                   alt="智能诊断"
                   v-if="index+1 == 3">
              <p>
                <span>{{ item.productName }}</span>
                {{ item.productCode }}
              </p>
            </div>
            <label>诊断</label>
          </li>
        </ul>
      </div>
    </scroll>
  </div>
</template>
<script>
import scroll from 'components/subassembly/scroll.vue';
import {toast} from 'js/api.js';
import {diagnosisSearch} from 'js/request.js';
import weChartApi from 'js/weChartApi.js';

export default {
  name: 'DiagnosisSearch',
  beforeRouteEnter (to, from, next) {
    // 路由拦截设置 app中进入页面前设置右上角分享按钮
    if (window.isApp) {
      let shareId = 'APP_JJZD_2018';
      window.mutual.isOpenShare(shareId);
    }
    next();
  },
  // 路由拦截设置 app中离开页面前清空右上角按钮
  beforeRouteLeave (to, from, next) {
    if (window.isApp) {
      window.mutual.setNavRight({
        text: ''
      });
    }
    next();
  },
  components: {
    scroll
  },
  data () {
    return {
      fundList: '',
      titleName: ''
    };
  },
  mounted () {
    this.wxShare();
    this.fundRanking();
  },
  methods: {
    // 微信分享
    wxShare () {
      let shareId = 'APP_JJZD_2018';
      if (window.isWechat) {
        weChartApi.wechatShare(shareId, window.location.href);
      }
    },
    // 跳转基金诊断详情页面
    targetFundDetail (code) {
      if (window.isApp) {
        this.$router.push({path: 'diagnosisDetail', query: {fundId: code}});
      } else {
        // fromId来源ID 1来自基金诊断推广
        if (this.$router.currentRoute.query.fromId == 1) {
          this.$router.push({path: 'generalizeDiagnosis', query: {fundId: code, fromId: this.$router.currentRoute.query.fromId}});
        } else {
          this.$router.push({path: 'fundConsultingRoom', query: {fundId: code}});
        }
      }
    },
    // 跳转搜索页面
    targetSearch () {
      // fromId来源ID 1来自基金诊断推广
      if (this.$router.currentRoute.query.fromId == 1) {
        this.$router.push({path: 'search', query: {fromId: this.$router.currentRoute.query.fromId}});
      } else {
        this.$router.push({path: 'search'});
      }
    },
    // 基金排行
    fundRanking () {
      let self = this;
      diagnosisSearch().then(function (resp) {
        if (resp.data.respCode == '000') {
          self.fundList = resp.data.data.storeyList[0].fund_group1;
          self.titleName = resp.data.data.storeyList[0].storeyName;
        } else {
          toast(resp.data.respMessage);
        }
      });
    }
  }
};
</script>

<style lang="less">
  .dSearchBg{
    height: 100%;
    .dBanner{
      height: 16rem;
      position: relative;
      img{
        width: 100%;
      }
      .serchInputTarget{
        position: absolute;
        bottom: 2.25rem;
        padding: 0rem 1.5rem;
        width: 100%;
        box-sizing: border-box;
        .allIn{
          display: flex;
          align-items: center;
          justify-content: center;
          .fInput{
            width: 100%;
            box-sizing: border-box;
            height: 2rem;
            border:1px solid #4ff7ff;
            border-radius: 2px;
            color: #6f79a3;
            font-size: 0.75rem;
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .search{
            width: 0.8rem;
            height: 0.8rem;
            background: url("../img/search1.png") no-repeat;
            background-size: 100% 100%;
            position: absolute;
            left: 3.9rem;
            bottom: 0.6rem;
          }
        }
      }
    }
    .dTitle{
      border-bottom: 1px solid #DCDCDC;
      padding: 1.25rem 0rem 1rem 0.75rem;
      font-size: 0.75rem;
      color: #19191E;
      line-height: 0.75rem;
      display: flex;
      align-items: center;
      em{
        width: 0.75rem;
        height: 0.75rem;
        background: url('../img/diagnosis/billboard.png') no-repeat;
        background-size: 100% 100%;
        display: inline-block;
        margin-right: 0.625rem;
      }
    }
    .dSearchList{
      ul{
        padding: 0rem 1.05rem 0rem 0.75rem;
        li{
          padding: 1rem 0rem;
          border-bottom: 1px solid #DCDCDC;
          display: flex;
          align-items: center;
          div{
            display: flex;
            align-items: center;
            flex: 1;
            em{
              display: flex;
              justify-content: center;
              align-items: center;
              width: 0.95rem;
              height: 0.95rem;
              border-radius: 2px;
              font-size: 0.6rem;
              color: #FFFFFF;
            }
            .rankingIco {
              display: block;
              width: 38/40rem;
              height: 50/40rem;
            }
            .topThree{
              background: #66B1FF;
            }
            p{
              padding-left: 1rem;
              font-size: 0.6rem;
              color: #96969B;
              line-height: 0.6rem;
              span{
                display: flex;
                font-size: 0.75rem;
                color: #19191E;
                line-height: 0.75rem;
                padding-bottom: 0.5rem;
              }
            }
          }
          label{
            width: 2rem;
            height: 1rem;
            border: 1px solid #3296FF;
            text-align: center;
            font-size: 0.6rem;
            color: #1185FF;
            border-radius: 2px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }

</style>
