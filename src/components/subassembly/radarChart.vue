<template>
  <div class="radar-box"
       id="radarChart"
       ref="chartWrapper">
  </div>
</template>

<script>
import echarts from 'lib/echarts.min.js';
export default {
  name: 'RadarChart',
  components: {},
  props: {
    fundContainer: {
      type: [
        Object,
        Array
      ],
      default () {
        return {};
      }
    }
  },
  data () {
    return {
    };
  },
  watch: {
    fundContainer () {
      this.chartShow();
    }
  },
  mounted () {
    if (this.fundContainer && this.fundContainer.length > 0) {
      this.chartShow();
    }
  },
  methods: {
    // 不同屏幕不同字体大小 雷达图用
    getDpr () {
      let screenWidth = document.body.clientWidth;
      return screenWidth * (12 / 375);
    },
    // 根据数据个数调整雷达图配置
    getOptions () {
      let self = this;
      let center = {
        top: '50%'
      };
      if (self.fundContainer && self.fundContainer[0] && self.fundContainer[0].length > 0 && self.fundContainer[0][0].length > 0) {
        if (self.fundContainer[0][0].length === 3) {
          center = {
            top: '58%'
          };
          return center;
        } else if (self.fundContainer[0][0].length === 4) {
          center = {
            top: '50%'
          };
          return center;
        } else {
          center = {
            top: '55%'
          };
          return center;
        }
      } else {
        return center;
      }
    },
    chartShow () {
      let self = this;
      let length = self.fundContainer.length;
      let radarChartDarw = echarts.init(self.$refs.chartWrapper);
      let option = {
        title: {
          text: self.fundContainer[length - 1],
          left: 'center',
          top: '45%',
          textStyle: {
            color: '#fff',
            fontWeight: 'bolder',
            fontSize: 22
          }
        },
        radar: [{
          center: [
            '50%', self.getOptions().top
          ],
          radius: '50%',
          indicator: (function () {
            var res = [];
            for (var i = 0; i < self.fundContainer[0][0].length; i++) {
              if (self.fundContainer[0][0][i] == '' || self.fundContainer[0][0][i] == 'undefined' || self.fundContainer[0][0][i] == undefined) {
                self.fundContainer[0][0][i] = '--';
              } else {
                self.fundContainer[0][0][i] = self.fundContainer[0][0][i];
              }
              res.push({text: self.fundContainer[0][1][i] + '\n' + self.fundContainer[0][0][i], max: 100});
            }
            return res;
          })(),
          name: {
            color: '#fff',
            formatter: '{a|{value}}',
            rich: {
              a: {
                align: 'center',
                padding: [
                  1, 7, 1, 8
                ],
                fontSize: self.getDpr()
              }
            }
          },
          nameGap: 5,
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            }
          },
          splitArea: {
            areaStyle: {
              color: 'rgba(255,255,255,0)'
            }
          }
        }],
        series: [{
          name: '图表',
          type: 'radar',
          lineStyle: {
            normal: {
              width: 0
            }
          },
          label: {
            show: true
          },
          symbolSize: 0,
          data: [
            {
              value: this.fundContainer[0][0],
              name: '本基金',
              areaStyle: {
                normal: {
                  color: 'rgba(79, 247, 255, 0.7)'
                }
              }
            },
            {
              value: this.fundContainer[1][0],
              name: '同类型基金',
              areaStyle: {
                normal: {
                  color: 'rgba(255, 255, 255, 0.4)'
                }
              }
            }
          ]
        }]
      };
      radarChartDarw.setOption(option);
      window.onresize = function () {
        radarChartDarw.resize();
      };
    }
  }
};
</script>
<style lang="less" scoped>
.radar-box {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
