var app = new Vue({
  el: '#content',
  delimiters: ['${', '}'],
  data: {
    scoreData:[86,87,86,87,88,87,88,86,87,86,87,88,87,86,88,86,87,88,87,88,87,86,88,87,88,87,88,87,88,87,86,87,88,87,86,87,88,87,88,87,86,87,88,87,88,87,86,87,88,87,86,87,88,87,88,87,88,87,86,88,86,87,88,87,86,87,88,87,88,87,86,87,86,88,86,87,88,87,86,87,88,87,86,87,88,86,87,88,87,88,87,86,87,86,88,87,86,87,88,87,86,88,87,86,87,86,87,86,88,87,88,87,86,87,88,87,88,87,86,88],
    disasterGauge:{},
    disasterGaugeOption:{},
  },
  methods:{

  },
  mounted() {
    let that = this;
    //-----------------------------------------------------------------------------------
    var dom = document.getElementById("confidence-band");
    var productLine = echarts.init(dom);
    var app = {};
    var productLineOption = {
        dataset: {
            source: [
                ['score', 'amount', 'product'],
                [0, 0, '烟雾'],
                [40, 40, '排水'],
                [40, 40, '粉尘'],
                [20, 20, '瓦斯'],

            ]
        },
        grid: {containLabel: true},
        xAxis: {name: '指标'},
        yAxis: {type: 'category'},
        visualMap: {
            orient: 'horizontal',
            left: 'center',
            min: 10,
            max: 100,
            text: ['高', '低'],
            // Map the score column to color
            dimension: 0,
            inRange: {
                color: ['#D7DA8B', '#E15457']
            }
        },
        series: [
            {
                type: 'bar',
                encode: {
                    // Map the "amount" column to X axis.
                    x: 'amount',
                    // Map the "product" column to Y axis
                    y: 'product'
                }
            }
        ]
    };
    productLine.setOption(productLineOption);


    //----------------------------------------------------------------------
    var barGraphic = echarts.init(document.getElementById('bar-graphic'));

    // 指定图表的配置项和数据
    var barGraphicOption = {
      xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
          type: 'value'
      },
      series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
              color: 'rgba(220, 220, 220, 0.8)'
          }
      }]
    };

            // 使用刚指定的配置项和数据显示图表。
    barGraphic.setOption(barGraphicOption);

    //----------------------------------------------------------------------
    this.disasterGauge = echarts.init(document.getElementById('disaster-gauge'));
    this.disasterGaugeOption = {
        title: {
           text: '实时评分',
           subtext:'',
           textStyle: {
                fontFamily: "sans-serif", // 主标题文字的字体系列。
                fontSize: 14, // 字体大小
                fontStyle: 'normal',
                fontWeight: 'normal',
                color:'#A5D9E1',
                lineHeight:"12",
            },
            subtextStyle: {
                 fontFamily: "sans-serif", // 主标题文字的字体系列。
                 fontSize: 12, // 字体大小
                 fontStyle: 'normal',
                 fontWeight: 'normal',
                 color:'#A5D9E1',
                 lineHeight:"12",
             },
        },
        tooltip: {
            formatter: '{a} <br/>{b} : {c}'
        },
        visualMap: {
            type: 'piecewise',
            categories: [
                 '有待提升','达标', '良好', '优秀',
            ],
            inRange: {
                color: ['#e6951d','#dfc73d','#85c154', '#5FA731']
            },
            right:"10px",
            bottom:"50px",
            align:"left",
            textStyle: {
             color: '#A5D9E1'
            }
        },
        series: [
            {
                name: '实时评分',
                type: 'gauge',
                detail: {formatter: '{value}'},
                axisLine: {            // 坐标轴线
                       lineStyle: {       // 属性lineStyle控制线条样式
                           color: [[0.3, '#e6951d'],[0.5, '#dfc73d'], [0.8, '#85c154'], [1, '#5FA731']]
                       }
                },
                data: [{value: 50, name: '评分'}]
            }
        ]
    };

    //-------------------------------------------------------------------------------------------
    var disasterLine= echarts.init(document.getElementById('disaster-line'));
    disasterLineOption = {
        title: {
            text: '评分趋势',
            textStyle: {
                 fontFamily: "sans-serif", // 主标题文字的字体系列。
                 fontSize: 14, // 字体大小
                 fontStyle: 'normal',
                 fontWeight: 'normal',
                 color:'#A5D9E1',
                 lineHeight:"12",
             },
        },
        tooltip: {
            trigger: 'axis'
        },
        color: ['#dfc73d','#E6951D','#A5D9E1','#3074B1','#B691C1', '#7D57A1'],
        legend: {
        icon: 'rectangle',
        data: ['安全生产', '环境质量', '灾害管理', '废料利用', '绿化覆盖','建筑围护'],
        right: '4%',
        textStyle: {
            fontSize: 12,
            color: '#A5D9E1'
          }
        },
        grid: {
            show:false
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['2020/10/10','2020/10/11','2020/10/12','2020/10/13','2020/10/14','2020/10/15','2020/10/16'],
            splitLine:{
　　　　        show:false
            },
            axisLine:{
              lineStyle:{
                color: '#A5D9E1'
              }
            },
            axisLabel:{
              textStyle:{
                color: '#ffffff'
              }
            }
        },
        yAxis: {
            type: 'value',
            splitLine:{
　　　　        show:false
            },
            axisLine:{
              lineStyle:{
                color: '#A5D9E1'
              }
            },
            axisLabel:{
              textStyle:{
                color: '#ffffff'
              }
            }
        },
        series: [
            {
                name: '安全生产',
                type: 'line',
                stack: '总量',
                symbol: 'none',
                data: [92,93,94,92,94,93,95]
            },
            {
                name: '环境质量',
                type: 'line',
                stack: '总量',
                symbol: 'none',
                data: [89,88,90,92,88,90,89]
            },
            {
                name: '灾害管理',
                type: 'line',
                stack: '总量',
                symbol: 'none',
                data: [86,88,89,86,87,88,89]
            },
            {
                name: '废料利用',
                type: 'line',
                stack: '总量',
                symbol: 'none',
                data: [82,82,81,82,82,81,80]
            },
            {
                name: '绿化覆盖',
                type: 'line',
                stack: '总量',
                symbol: 'none',
                data: [87,87,87,87,87,87,87]
            },
            {
                name: '建筑围护',
                type: 'line',
                stack: '总量',
                symbol: 'none',
                data: [86,84,85,85,86,85,86]
            }
        ]
    };
    disasterLine.setOption(disasterLineOption);

    //-----------------------------------------------------------------------------
    var priceLine= echarts.init(document.getElementById('price-line'));
    var price_colors = ['#5793f3', '#d14a61', '#675bba'];

    priceOption = {
        color: price_colors,

        tooltip: {
            trigger: 'none',
            axisPointer: {
                type: 'cross'
            }
        },
        legend: {
            data:['2015 降水量', '2016 降水量']
        },
        grid: {
            top: 70,
            bottom: 50
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: price_colors[1]
                    }
                },
                axisPointer: {
                    label: {
                        formatter: function (params) {
                            return '降水量  ' + params.value
                                + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                        }
                    }
                },
                data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12']
            },
            {
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: price_colors[0]
                    }
                },
                axisPointer: {
                    label: {
                        formatter: function (params) {
                            return '降水量  ' + params.value
                                + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                        }
                    }
                },
                data: ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10', '2015-11', '2015-12']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '2015 降水量',
                type: 'line',
                xAxisIndex: 1,
                smooth: true,
                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
                name: '2016 降水量',
                type: 'line',
                smooth: true,
                data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
            }
        ]
    };

    priceLine.setOption(priceOption);

    //----------------------------------------------------------------------
    var evaluateGauge = echarts.init(document.getElementById('evaluate-gauge'));
    evaluateGaugeOption = {
        tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
        },
        series: [
            {
                name: '业务指标',
                type: 'gauge',
                detail: {formatter: '{value}%'},
                data: [{value: 50, name: '完成率'}]
            }
        ]
    };

    setInterval(function () {
        evaluateGaugeOption.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        evaluateGauge.setOption(evaluateGaugeOption, true);
    },2000);

    //-------------------------------------------------------------------------------
    var restoreBar = echarts.init(document.getElementById('restore-bar'));
    restoreOption = {
        angleAxis: {
        },
        radiusAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四'],
            z: 10
        },
        polar: {
        },
        series: [{
            type: 'bar',
            data: [1, 2, 3, 4],
            coordinateSystem: 'polar',
            name: 'A',
            stack: 'a'
        }, {
            type: 'bar',
            data: [2, 4, 6, 8],
            coordinateSystem: 'polar',
            name: 'B',
            stack: 'a'
        }, {
            type: 'bar',
            data: [1, 2, 3, 4],
            coordinateSystem: 'polar',
            name: 'C',
            stack: 'a'
        }],
        legend: {
            show: true,
            data: ['A', 'B', 'C']
        }
    };

    restoreBar.setOption(restoreOption);
  },
  created() {
    let that = this;
    let scoreInterval = 0;
    setInterval(function () {
        let score = that.scoreData[scoreInterval];
        that.disasterGaugeOption.series[0].data[0].value = score;
        if(score >= 90){
          that.disasterGaugeOption.title.subtext = '优秀';
        }
        else if(score >= 80 && score < 90){
          that.disasterGaugeOption.title.subtext = '良好';
        }
        else if(score >=60 && score <80){
          that.disasterGaugeOption.title.subtext = '达标';
        }
        else{
          that.disasterGaugeOption.title.subtext = '有待提升';
        }
        scoreInterval = scoreInterval + 1;
        if(scoreInterval == that.scoreData.length)
        {
          scoreInterval = 0;
        }
        that.disasterGauge.setOption(that.disasterGaugeOption, true);
    },1000);
  }
});
