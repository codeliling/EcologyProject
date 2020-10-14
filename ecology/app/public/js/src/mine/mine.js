var app = new Vue({
  el: '#content',
  delimiters: ['${', '}'],
  data: {
    scoreData:[86,87,86,87,88,87,88,86,87,86,87,88,87,86,88,86,87,88,87,88,87,86,88,87,88,87,88,87,88,87,86,87,88,87,86,87,88,87,88,87,86,87,88,87,88,87,86,87,88,87,86,87,88,87,88,87,88,87,86,88,86,87,88,87,86,87,88,87,88,87,86,87,86,88,86,87,88,87,86,87,88,87,86,87,88,86,87,88,87,88,87,86,87,86,88,87,86,87,88,87,86,88,87,86,87,86,87,86,88,87,88,87,86,87,88,87,88,87,86,88],
    savetyScoreData:[97,96,95,98,96,97,96,97,96,98,96,99],
    disasterGauge:{},
    disasterGaugeOption:{},
    barGraphic:{},
    barGraphicOption:{},
    moniterTableColumn:[
      {
          title: '位置',
          key: 'location'
      },
      {
          title: '矿名',
          key: 'name'
      },
    ],
    moniterTableData:[
        {"location":"沅陵县","name":"西澳官庄金矿"},
        {"location":"沅陵县","name":"沃溪金锑钨矿"},
        {"location":"沅陵县","name":"柳树汊桐树面金矿"},
        {"location":"沅陵县","name":"盘古乡石家寨磷矿"},
        {"location":"沅陵县","name":"董家河铅锌硫铁矿"},
        {"location":"辰溪县","name":"辰溪田湾磷矿"},
        {"location":"怀化市","name":"麻阳九曲湾铜矿"},
        {"location":"怀化市","name":"怀化中坡保护区"},
        {"location":"中方县","name":"中力黄岩铀矿开采区"},
        {"location":"溆浦县","name":"思蒙国家湿地公园保护区"},
        {"location":"中方县","name":"泸阳镇八活岩矿区"},
        {"location":"中方县","name":"雪峰山金锰矿"},
        {"location":"芷江县","name":"西晃山森林公园保护区"},
        {"location":"新晃县","name":"贡溪重晶石矿区"},
        {"location":"新晃县","name":"米贝金矿"},
        {"location":"洪江市","name":"摩天岭花岗岩矿区"},
        {"location":"会同县","name":"会同县淘金冲矿区"},
        {"location":"会同县","name":"鹰嘴界自然保护区"},
        {"location":"靖州县","name":"靖州苗乡侗寨名胜区"},
        {"location":"靖州县","name":"排牙山森林公园保护区"},
        {"location":"通道县","name":"通道侗族锅冲硅石矿"}

    ],
    currentMoniterTableData:[{"location":"新晃县","name":"米贝金矿"},
        {"location":"洪江市","name":"摩天岭花岗岩矿区"},
        {"location":"会同县","name":"会同县淘金冲矿区"},
        {"location":"会同县","name":"鹰嘴界自然保护区"},
        {"location":"靖州县","name":"靖州苗乡侗寨名胜区"},
        {"location":"靖州县","name":"排牙山森林公园保护区"},
        {"location":"通道县","name":"通道侗族锅冲硅石矿"}],

    currentReportArea:[],
    var1:64,
    var2:21,
    var3:635.09,
    var4:182926,
    var5:126006,
    priceLine:{},
    priceOption:{},
    dateData:["2020/9/1","2020/9/2","2020/9/3","2020/9/4","2020/9/5","2020/9/6","2020/9/7","2020/9/8","2020/9/9","2020/9/10","2020/9/11","2020/9/12","2020/9/13","2020/9/14","2020/9/15","2020/9/16","2020/9/17","2020/9/18","2020/9/19","2020/9/20","2020/9/21","2020/9/22","2020/9/23","2020/9/24","2020/9/25","2020/9/26","2020/9/27","2020/9/28","2020/9/29","2020/9/30","2020/10/1","2020/10/2","2020/10/3","2020/10/4","2020/10/5","2020/10/6","2020/10/7","2020/10/8","2020/10/9","2020/10/10","2020/10/11","2020/10/12","2020/10/13","2020/10/14","2020/10/15"],
    huapoData:[98.1,98.6,99.2,99.8,99.7,99.6,99.8,99.2,99.8,99.7,99.6,99.8,99.8,99.7,99.7,99.6,99.8,99.8,99.7,99.6,99.8,99.2,99.8,99.7,99.6,99.8,99.8,99.7,99.7,99.6,99.8,99.6,99.8,99.8,99.7,99.8,99.7,99.6,99.8,99.2,99.8,99.7,99.6,99.8,99.8,99.7,99.7],
    nishiliuData:[97.2,98.4,99.8,99.7,99.6,99.2,99.7,99.6,99.8,99.2,99.8,99.7,99.6,99.2,99.8,99.7,99.6,99.7,99.6,99.2,99.7,99.6,99.8,99.2,99.8,99.7,99.6,99.2,99.8,99.7,99.6,99.8,99.7,99.6,99.8,99.7,99.6,99.2,99.7,99.6,99.8,99.2,99.8,99.7,99.6,99.2,99.8],
    chengjiangData:[97.3,99.7,99.7,99.6,99.8,99.2,99.8,99.8,99.7,99.6,99.8,99.6,99.6,99.8,99.2,99.8,99.7,99.6,99.8,99.2,99.8,99.8,99.7,99.6,99.8,99.6,99.6,99.8,99.2,99.8,99.7,99.8,99.6,99.6,99.2,99.6,99.8,99.2,99.8,99.8,99.7,99.6,99.8,99.6,99.6,99.8,99.2],

    //--------------------------------------
    machine1:[
      [1118,70,10,2],
      [1119,69,10,2],
      [1113,75,10,2],
      [1113,74,11,2],
      [1114,73,11,2],
      [1116,71,11,2],
      [1117,70,11,2],
      [1115,71,12,2],
      [1110,76,12,2],
      [1116,70,12,2],
      [1111,75,12,2],
      [1118,68,12,2],
      [1110,77,11,2]
    ],

    machine2:[
      [284,16,0,0],
      [285,14,1,0],
      [285,14,1,0],
      [286,13,1,0],
      [285,13,2,0],
      [286,12,2,0],
      [287,11,2,0],
      [287,11,2,0],
      [288,10,2,0],
      [289,8,3,0],
      [289,8,3,0],
      [290,7,3,0],
      [287,10,3,0]
    ],

    machine3:[
      [268,32,0,0],
      [267,33,0,0],
      [269,31,0,0],
      [268,32,0,0],
      [267,32,1,0],
      [266,33,1,0],
      [265,34,1,0],
      [269,29,2,0],
      [270,28,2,0],
      [268,30,2,0],
      [272,26,2,0],
      [271,26,3,0],
      [269,28,3,0]
    ],

    machine4:[
      [455,125,18,2],
      [456,124,18,2],
      [450,119,29,2],
      [458,121,19,2],
      [452,117,29,2],
      [454,115,29,2],
      [459,109,30,2],
      [457,121,20,2],
      [453,115,30,2],
      [455,113,30,2],
      [454,114,30,2],
      [450,107,21,22],
      [455,102,21,22]
    ],
    productLine:{},
    productLineOption:{},
    //--------------------------------------
  },
  methods:{
    backClick:function(){
      window.location.href = "/";
    },
    dinaymicEvaluateClick:function(){
      window.location.href = "/mine/dynamicevaluate";
    },
    disasterClick:function(){
      window.location.href = "/mine/geologicaldisaster";
    },
    envProtectClick:function(){
      window.location.href = "/mine/envprotect";
    },
    safetyProductClick:function(){
        window.location.href = "/mine/safetyproduction";
    }
  },
  mounted() {
    let that = this;
    //-----------------------------------------------------------------------------------
    var dom = document.getElementById("confidence-band");
    this.productLine = echarts.init(dom);
    this.productLineOption = {
        title: {
            text: '今日工况',
            textStyle: {
                 fontFamily: "sans-serif", // 主标题文字的字体系列。
                 fontSize: 14, // 字体大小
                 fontStyle: 'normal',
                 fontWeight: 'bold',
                 color:'#A5D9E1',
                 lineHeight:"12",
             },
        },
        legend: {
          icon:'circle',
          data: ['工作中', '空闲中','修理中','缺工'],
          textStyle: {
              fontSize: 12,
              color: '#A5D9E1'
          }
        },
        color:['#85c154','#5FA731','#B691C1','#7D51A1'],
        tooltip: {},
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        dataset: {
            source: [
                ['product', '挖掘机', '钻机', '破碎机', '自卸汽车'],
                ['工作中', 1180, 284, 268, 455],
                ['空闲中', 70, 16, 32, 125],
                ['修理中', 10, 0, 0, 18],
                ['缺工', 2, 0, 0, 2]
            ]
        },
        xAxis: [
            {
              type: 'category',
              gridIndex: 0,
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

        ],
        yAxis: [
            {
              gridIndex: 0,
              splitLine:{
    　　　　        show:false
              },
              interval:400,
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

        ],
        series: [
            // These series are in the first grid.
            {type: 'bar', seriesLayoutBy: 'row'},
            {type: 'bar', seriesLayoutBy: 'row'},
            {type: 'bar', seriesLayoutBy: 'row'},
            {type: 'bar', seriesLayoutBy: 'row'},
        ]
    };

    this.productLine.setOption(this.productLineOption);


    //----------------------------------------------------------------------
    this.barGraphic = echarts.init(document.getElementById('bar-graphic'));

    // 指定图表的配置项和数据
    this.barGraphicOption = {
        title: {
            text: '总体趋势',
            textStyle: {
                 fontFamily: "sans-serif", // 主标题文字的字体系列。
                 fontSize: 14, // 字体大小
                 fontStyle: 'normal',
                 fontWeight: 'bold',
                 color:'#A5D9E1',
                 lineHeight:"12",
             },
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['水', '电'],
            icon: 'line',
            right: '4%',
            textStyle: {
                fontSize: 12,
                color: '#A5D9E1'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: [],
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
                name: '水',
                type: 'line',
                stack: '总量',
                data: [],
                itemStyle:{
                    normal:{
                        color:'#7D57A1'
                    }
                },
            },
            {
                name: '电',
                type: 'line',
                stack: '总量',
                data: [],
                itemStyle:{
                    normal:{
                        color:'#B691C1'
                    }
                },
            }
        ]
    };
            // 使用刚指定的配置项和数据显示图表。
    this.barGraphic.setOption(this.barGraphicOption);

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
                fontWeight: 'bold',
                color:'#A5D9E1',
                lineHeight:"14",
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
                name: '',
                type: 'gauge',
                detail: {formatter: '{value}'},
                axisLine: {            // 坐标轴线
                       lineStyle: {       // 属性lineStyle控制线条样式
                           color: [[0.3, '#e6951d'],[0.5, '#dfc73d'], [0.8, '#85c154'], [1, '#5FA731']]
                       }
                },
                radius: '95%',
                data: [{value: 50, name: ''}]
            }
        ]
    };

    //-------------------------------------------------------------------------------------------
    var disasterLine= echarts.init(document.getElementById('disaster-line'));
    disasterLineOption = {
        title: {
            text: '分类评分趋势',
            textStyle: {
                 fontFamily: "sans-serif", // 主标题文字的字体系列。
                 fontSize: 13, // 字体大小
                 fontStyle: 'normal',
                 fontWeight: 'bold',
                 color:'#A5D9E1',
                 lineHeight:"14",
             },
        },
        tooltip: {
            trigger: 'axis'
        },
        color: ['#dfc73d','#E6951D','#A5D9E1','#3074B1','#B691C1', '#7D57A1'],
        legend: {
          icon: 'circle',
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
    this.priceLine= echarts.init(document.getElementById('price-line'));
    var price_colors = ['#5793f3', '#d14a61', '#675bba'];

    this.priceOption = {
        title: {
            text: '总体趋势图',
            textStyle: {
                 fontFamily: "sans-serif", // 主标题文字的字体系列。
                 fontSize: 14, // 字体大小
                 fontStyle: 'normal',
                 fontWeight: 'bold',
                 color:'#A5D9E1',
                 lineHeight:"14",
             },
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            icon: 'rectangle',
            data: ['滑坡', '泥石流', '地面沉降'],
            textStyle: {
                fontSize: 12,
                color: '#A5D9E1'
            }
        },
        color:['#3074b1','#b691c1','#7d57a1'],
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['2020/9/1','2020/9/2','2020/9/3','2020/9/4','2020/9/5'],
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
            }
        ],
        yAxis: [
            {
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
            }
        ],
        series: [
            {
                name: '滑坡',
                type: 'line',
                stack: '总量',
                areaStyle: {normal: {color:'#3074b1'}},
                data: [98.1,98.6,99.2,99.8,99.7]
            },
            {
                name: '泥石流',
                type: 'line',
                stack: '总量',
                areaStyle: {normal: {color:'#b691c1'}},
                data: [97.2,98.4,99.8,99.7,99.6]
            },
            {
                name: '地面沉降',
                type: 'line',
                stack: '总量',
                areaStyle: {normal: {color:'#7d57a1'}},
                data: [97.3,99.7,99.7,99.6,99.8]
            }
        ]
    };

    this.priceLine.setOption(this.priceOption);

    //----------------------------------------------------------------------
    var evaluateGauge = echarts.init(document.getElementById('evaluate-gauge'));
    evaluateGaugeOption = {
        title: {
           text: '安全概况',
           subtext:'',
           textStyle: {
                fontFamily: "sans-serif", // 主标题文字的字体系列。
                fontSize: 14, // 字体大小
                fontStyle: 'normal',
                fontWeight: 'bold',
                color:'#A5D9E1',
                lineHeight:"16",
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
            formatter: '{a} <br/>{b} : {c}%'
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
                name: '',
                type: 'gauge',
                radius: '95%',
                detail: {formatter: '{value}'},
                axisLine: {            // 坐标轴线
                       lineStyle: {       // 属性lineStyle控制线条样式
                           color: [[0.3, '#e6951d'],[0.5, '#dfc73d'], [0.8, '#85c154'], [1, '#5FA731']]
                       }
                },
                data: [{value: 50, name: ''}]
            }
        ]
    };

    let savetyScoreInterval = 0;
    setInterval(function () {
        evaluateGaugeOption.series[0].data[0].value = that.savetyScoreData[savetyScoreInterval];
        evaluateGauge.setOption(evaluateGaugeOption, true);
        savetyScoreInterval = savetyScoreInterval + 1;
        if(savetyScoreInterval == that.savetyScoreData.length){
          savetyScoreInterval = 0;
        }
    },5000);

    //-------------------------------------------------------------------------------
    var restoreBar = echarts.init(document.getElementById('restore-bar'));
    restoreOption  = {
        title: {
           text: '环境保护概览',
           subtext:'',
           textStyle: {
                fontFamily: "sans-serif", // 主标题文字的字体系列。
                fontSize: 14, // 字体大小
                fontStyle: 'normal',
                fontWeight: 'bold',
                color:'#A5D9E1',
                lineHeight:"14",
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
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            right: 5,
            x:'right',
            y:'top',
            padding:[15,30,0,0],
            data: ['大气', '水质', '噪音', '粉尘'],
            textStyle: {
                fontSize: 12,
                color: '#A5D9E1'
            }
        },
        color:[
            "#7D57A1","#B691C1","#3074B1","#A5D9E1"
        ],
        series: [
            {
                name: '数据占比',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    {value: 90, name: '大气'},
                    {value: 85, name: '水质'},
                    {value: 91, name: '噪音'},
                    {value: 91, name: '粉尘'},
                ]
            }
        ]
    };

    restoreBar.setOption(restoreOption);

    //---------------------------------------------------------------------------
    var envLine= echarts.init(document.getElementById('env-line'));
    var envLineOption = {
        title: {
            text: '环保趋势',
            textStyle: {
                 fontFamily: "sans-serif", // 主标题文字的字体系列。
                 fontSize: 14, // 字体大小
                 fontStyle: 'normal',
                 fontWeight: 'bold',
                 color:'#A5D9E1',
                 lineHeight:"12",
             },
        },
        tooltip: {
            trigger: 'axis'
        },
        color: ["#7D57A1","#B691C1","#3074B1","#A5D9E1"],
        legend: {
          icon: 'rectangle',
          data: ['大气', '水质', '噪音', '粉尘'],
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
            data: ['10月10日','10月11日','10月12日','10月13日','10月14日','10月15日','10月16日'],
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
                name: '大气',
                type: 'line',
                stack: '总量',
                symbol: 'none',
                data: [88,91,90,89,89,91,90]
            },
            {
                name: '水质',
                type: 'line',
                stack: '总量',
                symbol: 'none',
                data: [83,81,86,88,90,83,85]
            },
            {
                name: '噪音',
                type: 'line',
                stack: '总量',
                symbol: 'none',
                data: [86,87,90,89,84,84,83]
            },
            {
                name: '粉尘',
                type: 'line',
                stack: '总量',
                symbol: 'none',
                data: [82,81,82,82,84,83,84]
            }
        ]
    };
    envLine.setOption(envLineOption);

    //----------------------------------------------------------

  },
  created() {
    let that = this;
    let scoreInterval = 0;
    setInterval(function () {
        let score = that.scoreData[scoreInterval];
        that.disasterGaugeOption.series[0].data[0].value = score;
        // if(score >= 90){
        //   that.disasterGaugeOption.title.subtext = '优秀';
        // }
        // else if(score >= 80 && score < 90){
        //   that.disasterGaugeOption.title.subtext = '良好';
        // }
        // else if(score >=60 && score <80){
        //   that.disasterGaugeOption.title.subtext = '达标';
        // }
        // else{
        //   that.disasterGaugeOption.title.subtext = '有待提升';
        // }
        scoreInterval = scoreInterval + 1;
        if(scoreInterval == that.scoreData.length)
        {
          scoreInterval = 0;
        }
        that.disasterGauge.setOption(that.disasterGaugeOption, true);
    },1000);

    let lineInterval = 0;
    $.getJSON('/public/assets/0-2-2.json',function(data){

      if(data.length > 0){
        setInterval(function(){
          that.barGraphicOption.xAxis.data = getSafetyLineGraphicTimeArray();
          for(let i = lineInterval; i< lineInterval + 5; i++){
            that.barGraphicOption.series[0].data.push(data[lineInterval].water);
            that.barGraphicOption.series[1].data.push(data[lineInterval].electricity * 100);
          }

          that.barGraphic.setOption(that.barGraphicOption);
          lineInterval = lineInterval + 5;
          if(lineInterval == data.length)
          {
            lineInterval = 0;
          }
        },1000);
      }

    });

    let monitorTableInterval = 0;
    setInterval(function () {
        that.currentMoniterTableData = that.moniterTableData.slice(monitorTableInterval,monitorTableInterval + 7);
        monitorTableInterval = monitorTableInterval + 7;
        if(monitorTableInterval == that.moniterTableData.length){
          monitorTableInterval = 0;
        }
    },5000);

    let hncDataInterval = 0;
    setInterval(function () {
        that.priceOption.xAxis[0].data = that.dateData.slice(hncDataInterval, hncDataInterval + 5);
        that.priceOption.series[0].data = that.huapoData.slice(hncDataInterval, hncDataInterval + 5);
        that.priceOption.series[1].data = that.nishiliuData.slice(hncDataInterval, hncDataInterval + 5);
        that.priceOption.series[2].data = that.chengjiangData.slice(hncDataInterval, hncDataInterval + 5);
        that.priceLine.setOption(that.priceOption);
        hncDataInterval = hncDataInterval + 5;
        if(hncDataInterval == that.dateData.length){
          hncDataInterval = 0;
        }
    },5000);


    let reportTableInterval = 0;
    $.getJSON('/public/assets/0-3-2.json',function(data){
      if(data.length > 0){
        setInterval(function(){
          that.currentReportArea = [];
          that.currentReportArea = data.slice(reportTableInterval,reportTableInterval + 4);
          reportTableInterval = reportTableInterval + 4;
          if(reportTableInterval == data.length)
          {
            reportTableInterval = 0;
          }
        },1000);
      }
    });

    let countDataInterval = 0;
    $.getJSON('/public/assets/0-3-1.json',function(data){
      if(data.length > 0){
        setInterval(function(){
          that.var1 = data[countDataInterval].var1;
          that.var2 = data[countDataInterval].var2;
          that.var3 = data[countDataInterval].var3;
          that.var4 = data[countDataInterval].var4;
          that.var5 = data[countDataInterval].var5;
          countDataInterval = countDataInterval + 1;
          if(countDataInterval == data.length)
          {
            countDataInterval = 0;
          }
        },1000);
      }
    });

    let machineInfoInterval = 1;
    setInterval(function(){
      let arr1 = ['工作中'];
      let arr2 = ['空闲中'];
      let arr3 = ['修理中'];
      let arr4 = ['缺工'];
      arr1.push(that.machine1[machineInfoInterval][0]);
      arr2.push(that.machine1[machineInfoInterval][1]);
      arr3.push(that.machine1[machineInfoInterval][2]);
      arr4.push(that.machine1[machineInfoInterval][3]);

      arr1.push(that.machine1[machineInfoInterval][0]);
      arr2.push(that.machine2[machineInfoInterval][1]);
      arr3.push(that.machine3[machineInfoInterval][2]);
      arr4.push(that.machine4[machineInfoInterval][3]);

      arr1.push(that.machine1[machineInfoInterval][0]);
      arr2.push(that.machine2[machineInfoInterval][1]);
      arr3.push(that.machine3[machineInfoInterval][2]);
      arr4.push(that.machine4[machineInfoInterval][3]);

      arr1.push(that.machine1[machineInfoInterval][0]);
      arr2.push(that.machine2[machineInfoInterval][1]);
      arr3.push(that.machine3[machineInfoInterval][2]);
      arr4.push(that.machine4[machineInfoInterval][3]);

      that.productLineOption.dataset.source[1] = arr1;
      that.productLineOption.dataset.source[2] = arr2;
      that.productLineOption.dataset.source[3] = arr3;
      that.productLineOption.dataset.source[4] = arr4;
      that.productLine.setOption(that.productLineOption);
      machineInfoInterval = machineInfoInterval + 1;
      if(machineInfoInterval == that.machine1.length)
      {
        machineInfoInterval = 0;
      }
    },2000);
  }
});
