var app = new Vue({
  el: '#content',
  delimiters: ['${', '}'],
  data: {

    lineGraphic:{},
    lineOption:{},

    debrisFlow:{},
    debrisFlowOption:{},

    tendencyLine:{},
    tendencyOption:{},

    rainBar:{},
    rainOption:{},

    mapData:[],
    geoCoordMap:{},

  },
  methods:{
    convertData:function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = this.geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    },

    backClick:function(){
      window.location.href = "/mine/";
    },
  },
  mounted(){
    let that = this;
    this.lineGraphic = echarts.init(document.getElementById('line-graphic'));
    this.lineOption = {
      legend: {
          textStyle: {
              fontSize: 12,
              color: '#A5D9E1'
          },
          icon:'circle',
          data: ['上木溪', '杨家岭', '桑树湾', '塘里村', '花林', '高路湾']
      },
       tooltip: {
           trigger: 'axis'
       },
       color:['#7D51A1','#B691C1','#A5D9E1','#DFC73D','#E6951D','#85c154','#5FA731'],
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
         axisPointer: {
             type: 'shadow'
         },
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
         },
       },
       yAxis: {
         type: 'value',
         axisPointer: {
             type: 'shadow'
         },
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
         },
       },
       dataZoom: [{
           startValue: '2020/1/1'
       }, {
           type: 'inside'
       }],
       series: [
         {
             name: '上木溪',
             type: 'line',
             data: [],
             markLine: {
                 silent: true,
                 data: [{
                     yAxis: 20
                 }, {
                     yAxis: -20
                 }]
             }
         },
         {
             name: '杨家岭',
             type: 'line',
             data: [],
         },{
             name: '桑树湾',
             type: 'line',
             data: [],
         },{
             name: '塘里村',
             type: 'line',
             data: [],
         },{
             name: '花林',
             type: 'line',
             data: [],
         },{
             name: '高路湾',
             type: 'line',
             data: [],
         }
       ]
    }
    this.lineGraphic.setOption(this.lineOption);
    $.getJSON('/public/assets/7-1.json',function(data){
      let lineGraphicxAxisData = [];
      let cnss1 = [];
      let cnss2 = [];
      let cnss3 = [];
      let cnss4 = [];
      let cnss5 = [];
      let cnss6 = [];
      for(let i = 0; i < data.length; i++){
        lineGraphicxAxisData.push(data[i].time);
        cnss1.push(data[i].moniter1);
        cnss2.push(data[i].moniter2);
        cnss3.push(data[i].moniter3);
        cnss4.push(data[i].moniter4);
        cnss5.push(data[i].moniter5);
        cnss6.push(data[i].moniter6);
      }
      that.lineOption.xAxis.data = lineGraphicxAxisData;
      that.lineOption.series[0].data = cnss1;
      that.lineOption.series[1].data = cnss2;
      that.lineOption.series[2].data = cnss3;
      that.lineOption.series[3].data = cnss4;
      that.lineOption.series[4].data = cnss5;
      that.lineOption.series[5].data = cnss6;
      that.lineGraphic.setOption(that.lineOption);
    });
    //------------------------------------------------------------------------------
    this.debrisFlow = echarts.init(document.getElementById('debris-flow'));
    this.debrisFlowOption = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                animation: false
            }
        },
        color:['#7D51A1','#B691C1','#A5D9E1','#E6951D','#85c154','#5FA731'],
        legend: {
            icon:'circle',
            data: ['上木溪', '杨家岭', '桑树湾', '塘里村', '花林', '高路湾'],
            left: 10,
            textStyle: {
                fontSize: 12,
                color: '#A5D9E1'
            },
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        axisPointer: {
            link: {xAxisIndex: 'all'}
        },
        dataZoom: [
            {
                show: true,
                realtime: true,
                start: 30,
                end: 70,
                xAxisIndex: [0, 1]
            },
            {
                type: 'inside',
                realtime: true,
                start: 30,
                end: 70,
                xAxisIndex: [0, 1]
            }
        ],
        grid: [{
            left: 50,
            right: 50,
            height: '35%'
        }, {
            left: 50,
            right: 50,
            top: '55%',
            height: '35%'
        }],
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                axisLine: {onZero: true},
                axisPointer: {
                      type: 'shadow'
                  },
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
                  },
                data: []
            },
            {
                gridIndex: 1,
                type: 'category',
                boundaryGap: false,
                axisLine: {onZero: true},
                axisPointer: {
                      type: 'shadow'
                  },
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
                  },
                data: [],

            }
        ],
        yAxis: [
            {
                name: '水平位移变化量(mm)',
                type: 'value',
                max: 10,
                axisPointer: {
                      type: 'shadow'
                  },
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
                  },
            },
            {
                gridIndex: 1,
                name: '平面变形量(mm)',
                type: 'value',
                axisPointer: {
                      type: 'shadow'
                  },
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
                  },
            }
        ],
        series: [
            {
                name: '上木溪',
                type: 'line',
                symbolSize: 8,
                hoverAnimation: false,
                data: [

                ],
                markLine: {
                     silent: true,
                     data: [{
                         yAxis: 5
                     }, {
                         yAxis: -5
                     }]
                 }
            },{
                name: '杨家岭',
                type: 'line',
                symbolSize: 8,
                hoverAnimation: false,
                data: [

                ]
            },{
                name: '桑树湾',
                type: 'line',
                symbolSize: 8,
                hoverAnimation: false,
                data: [

                ]
            },{
                name: '塘里村',
                type: 'line',
                symbolSize: 8,
                hoverAnimation: false,
                data: [

                ]
            },{
                name: '花林',
                type: 'line',
                symbolSize: 8,
                hoverAnimation: false,
                data: [

                ]
            },{
                name: '高路湾',
                type: 'line',
                symbolSize: 8,
                hoverAnimation: false,
                data: [

                ]
            },
            {
                name: '上木溪',
                type: 'line',
                xAxisIndex: 1,
                yAxisIndex: 1,
                symbolSize: 8,
                hoverAnimation: false,
                data: [

                ],
                markLine: {
                     silent: true,
                     data: [{
                         yAxis: 5
                     }, {
                         yAxis: -5
                     }]
                 }
            },
            {
                name: '杨家岭',
                type: 'line',
                xAxisIndex: 1,
                yAxisIndex: 1,
                symbolSize: 8,
                hoverAnimation: false,
                data: [

                ]
            },
            {
                name: '桑树湾',
                type: 'line',
                xAxisIndex: 1,
                yAxisIndex: 1,
                symbolSize: 8,
                hoverAnimation: false,
                data: [

                ]
            },
            {
                name: '塘里村',
                type: 'line',
                xAxisIndex: 1,
                yAxisIndex: 1,
                symbolSize: 8,
                hoverAnimation: false,
                data: [

                ]
            },
            {
                name: '花林',
                type: 'line',
                xAxisIndex: 1,
                yAxisIndex: 1,
                symbolSize: 8,
                hoverAnimation: false,
                data: [

                ]
            },
            {
                name: '高路湾',
                type: 'line',
                xAxisIndex: 1,
                yAxisIndex: 1,
                symbolSize: 8,
                hoverAnimation: false,
                data: [

                ]
            }
        ]
    };

    this.debrisFlow.setOption(this.debrisFlowOption);
    $.getJSON('/public/assets/7-2.json',function(data){
      let xAxisData = [];
      let hor1Arr = [];
      let hor2Arr = [];
      let hor3Arr = [];
      let hor4Arr = [];
      let hor5Arr = [];
      let hor6Arr = [];
      let var1Arr = [];
      let var2Arr = [];
      let var3Arr = [];
      let var4Arr = [];
      let var5Arr = [];
      let var6Arr = [];
      for(let i = 0; i < data.length; i++){
        xAxisData.push(data[i].time);
        hor1Arr.push(data[i].hor1);
        hor2Arr.push(data[i].hor2);
        hor3Arr.push(data[i].hor3);
        hor4Arr.push(data[i].hor4);
        hor5Arr.push(data[i].hor5);
        hor6Arr.push(data[i].hor6);
        var1Arr.push(data[i].var1);
        var2Arr.push(data[i].var2);
        var3Arr.push(data[i].var3);
        var4Arr.push(data[i].var4);
        var5Arr.push(data[i].var5);
        var6Arr.push(data[i].var6);
      }
      that.debrisFlowOption.xAxis[0].data = xAxisData;
      that.debrisFlowOption.xAxis[1].data = xAxisData;
      that.debrisFlowOption.series[0].data = hor1Arr;
      that.debrisFlowOption.series[1].data = hor2Arr;
      that.debrisFlowOption.series[2].data = hor3Arr;
      that.debrisFlowOption.series[3].data = hor4Arr;
      that.debrisFlowOption.series[4].data = hor5Arr;
      that.debrisFlowOption.series[5].data = hor6Arr;
      that.debrisFlowOption.series[6].data = var1Arr;
      that.debrisFlowOption.series[7].data = var2Arr;
      that.debrisFlowOption.series[8].data = var3Arr;
      that.debrisFlowOption.series[9].data = var4Arr;
      that.debrisFlowOption.series[10].data = var5Arr;
      that.debrisFlowOption.series[11].data = var6Arr;
      that.debrisFlow.setOption(that.debrisFlowOption);
    });
    //------------------------------------------------------------------------------
    this.sedimentationSettlement = echarts.init(document.getElementById('sedimentation-settlement'));
    this.sedimentationSettlementOption = {
      legend: {
          textStyle: {
              fontSize: 12,
              color: '#A5D9E1'
          },
          icon:'circle',
          data: ['上木溪', '杨家岭', '桑树湾', '塘里村', '花林', '高路湾']
      },
       tooltip: {
           trigger: 'axis'
       },
       color:['#7D51A1','#B691C1','#A5D9E1','#DFC73D','#E6951D','#85c154','#5FA731'],
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
         axisPointer: {
             type: 'shadow'
         },
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
         },
       },
       yAxis: {
         type: 'value',
         axisPointer: {
             type: 'shadow'
         },
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
         },
       },
       dataZoom: [{
           startValue: '2020/5/1'
       }, {
           type: 'inside'
       }],
       series: [
         {
             name: '上木溪',
             type: 'line',
             data: [],
             markLine: {
                 silent: true,
                 data: [{
                     yAxis: 10
                 }, {
                     yAxis: -10
                 }]
             }
         },
         {
             name: '杨家岭',
             type: 'line',
             data: [],
         },{
             name: '桑树湾',
             type: 'line',
             data: [],
         },{
             name: '塘里村',
             type: 'line',
             data: [],
         },{
             name: '花林',
             type: 'line',
             data: [],
         },{
             name: '高路湾',
             type: 'line',
             data: [],
         }
       ]
    };
    this.sedimentationSettlement.setOption(this.sedimentationSettlementOption);
    $.getJSON('/public/assets/7-3.json',function(data){
      let ssxAxisData = [];
      let cnssData1 = [];
      let cnssData2 = [];
      let cnssData3 = [];
      let cnssData4 = [];
      let cnssData5 = [];
      let cnssData6 = [];
      for(let i = 0; i < data.length; i++){
        ssxAxisData.push(data[i].time);
        cnssData1.push(data[i].monitor1);
        cnssData2.push(data[i].monitor2);
        cnssData3.push(data[i].monitor3);
        cnssData4.push(data[i].monitor4);
        cnssData5.push(data[i].monitor5);
        cnssData6.push(data[i].monitor6);
      }
      that.sedimentationSettlementOption.xAxis.data = ssxAxisData;
      that.sedimentationSettlementOption.series[0].data = cnssData1;
      that.sedimentationSettlementOption.series[1].data = cnssData2;
      that.sedimentationSettlementOption.series[2].data = cnssData3;
      that.sedimentationSettlementOption.series[3].data = cnssData4;
      that.sedimentationSettlementOption.series[4].data = cnssData5;
      that.sedimentationSettlementOption.series[5].data = cnssData6;
      that.sedimentationSettlement.setOption(that.sedimentationSettlementOption);
    });
    //------------------------------------------------------------------------------
    let safetyGaugeData = [97,96,99,98,96,97,98,97,94,98,96,99];
    var safetyGauge = echarts.init(document.getElementById('safety-gauge'));
    safetyOption = {
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
        visualMap: {
            type: 'piecewise',
            categories: [
                 '有待提升','达标', '良好', '优秀',
            ],
            inRange: {
                color: ['#e6951d','#dfc73d','#85c154', '#5FA731']
            },

            right:"0px",
            bottom:"10px",
            align:"left",
            textStyle: {
             color: '#A5D9E1'
            }
        },
        tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
        },
        series: [
            {
                name: '业务指标',
                type: 'gauge',
                radius: '85%',
                detail: {formatter: '{value}'},
                axisLine: {            // 坐标轴线
                       lineStyle: {       // 属性lineStyle控制线条样式
                           color: [[0.3, '#e6951d'],[0.5, '#dfc73d'], [0.8, '#85c154'], [1, '#5FA731']]
                       }
                },
                title : {
                    textStyle: {
                        fontWeight: 'bold',
                        fontSize: 18,
                        fontStyle: 'normal',
                        color:"#A5D9E1"
                    },
                    padding: [10,10,10,10],
                },
                data: [{value: 50, name: '评分'}]
            }
        ]
    };

    let safetyGaugeInterval = 0;
    setInterval(function () {
        safetyOption.series[0].data[0].value = safetyGaugeData[safetyGaugeInterval];
        safetyGaugeInterval = safetyGaugeInterval + 1;
        if(safetyGaugeInterval == safetyGaugeData.length){
          safetyGaugeInterval = 0;
        }
        safetyGauge.setOption(safetyOption, true);
    },5000);

    //------------------------------------------------------------------------------
    var dom = document.getElementById("confidence-band");
    this.tendencyLine = echarts.init(dom);
    this.tendencyOption = {
      legend: {
        textStyle: {
            fontSize: 12,
            color: '#A5D9E1'
        },
        icon:'circle',
        data: ['滑坡(%)', '泥石流(%)', '地面沉降(%)']
    },
     tooltip: {
         trigger: 'axis'
     },
     color:['#5FA731','#B691C1','#85c154'],
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
       axisPointer: {
           type: 'shadow'
       },
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
       },
     },
     yAxis: {
       type: 'value',
       min:99,
       max:100,
       axisPointer: {
           type: 'shadow'
       },
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
       },
     },
     dataZoom: [{
         startValue: '2020/9/1'
     }, {
         type: 'inside'
     }],
     series: [
       {
           name: '滑坡(%)',
           type: 'line',
           data: [],
       },
       {
           name: '泥石流(%)',
           type: 'line',
           data: [],
       },{
           name: '地面沉降(%)',
           type: 'line',
           data: [],
       }
     ]
    };
    this.tendencyLine.setOption(this.tendencyOption);
    $.getJSON('/public/assets/7-4.json',function(data){
      let tGraphicxAxisData = [];
      let t1 = [];
      let t2 = [];
      let t3 = [];
      for(let i = 0; i < data.length; i++){
        tGraphicxAxisData.push(data[i].time);
        t1.push(data[i].value1);
        t2.push(data[i].value2);
        t3.push(data[i].value3);
      }
      console.log(t3);
      that.tendencyOption.xAxis.data = tGraphicxAxisData;
      that.tendencyOption.series[0].data = t1;
      that.tendencyOption.series[1].data = t2;
      that.tendencyOption.series[2].data = t3;
      that.tendencyLine.setOption(that.tendencyOption);
    });
    //----------------------------------------------------------------------------
    this.rainBar = echarts.init(document.getElementById('rain-bar'));

    this.rainOption = {
      legend: {
          textStyle: {
              fontSize: 12,
              color: '#A5D9E1'
          },
          icon:'circle',
          data: ['上木溪', '杨家岭', '桑树湾', '塘里村', '花林', '高路湾']
      },
       tooltip: {
           trigger: 'axis'
       },
       color:['#7D51A1','#B691C1','#A5D9E1','#DFC73D','#E6951D','#85c154','#5FA731'],
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
         axisPointer: {
             type: 'shadow'
         },
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
         },
       },
       yAxis: {
         type: 'value',
         axisPointer: {
             type: 'shadow'
         },
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
         },
       },
       dataZoom: [{
           startValue: '2020/1/1'
       }, {
           type: 'inside'
       }],
       series: [
         {
             name: '上木溪',
             type: 'line',
             data: [],
             markLine: {
                 silent: true,
                 data: [{
                     yAxis: 20
                 }, {
                     yAxis: -20
                 }]
             }
         },
         {
             name: '杨家岭',
             type: 'line',
             data: [],
         },{
             name: '桑树湾',
             type: 'line',
             data: [],
         },{
             name: '塘里村',
             type: 'line',
             data: [],
         },{
             name: '花林',
             type: 'line',
             data: [],
         },{
             name: '高路湾',
             type: 'line',
             data: [],
         }
       ]
    };

    this.rainBar.setOption(this.rainOption);
    $.getJSON('/public/assets/7-5.json',function(data){
      let rainGraphicxAxisData = [];
      let raincnss1 = [];
      let raincnss2 = [];
      let raincnss3 = [];
      let raincnss4 = [];
      let raincnss5 = [];
      let raincnss6 = [];
      for(let i = 0; i < data.length; i++){
        rainGraphicxAxisData.push(data[i].time);
        raincnss1.push(data[i].monitor1);
        raincnss2.push(data[i].monitor2);
        raincnss3.push(data[i].monitor3);
        raincnss4.push(data[i].monitor4);
        raincnss5.push(data[i].monitor5);
        raincnss6.push(data[i].monitor6);
      }
      that.rainOption.xAxis.data = rainGraphicxAxisData;
      that.rainOption.series[0].data = raincnss1;
      that.rainOption.series[1].data = raincnss2;
      that.rainOption.series[2].data = raincnss3;
      that.rainOption.series[3].data = raincnss4;
      that.rainOption.series[4].data = raincnss5;
      that.rainOption.series[5].data = raincnss6;
      that.rainBar.setOption(that.rainOption);
    });
    //----------------------------------------------------------------------------
    /*
    var myChart = echarts.init(document.getElementById('map'));
    $.getJSON('/public/assets/7-8.json',function(data){
      that.mapData = data;
      let dataValue = [];
      for(let i = 0; i < data.length; i++){
        dataValue.push({"name":data[i].name,"value":10});
        that.geoCoordMap[data[i].name]=[formatLongitudeAndLatitude(data[i].longitude),formatLongitudeAndLatitude(data[i].latitude)];
      }

      myChart.showLoading();
      $.get('/public/assets/huaihua.json', function (geoJson) {
          myChart.hideLoading();
          echarts.registerMap('HH', geoJson);
          myChart.setOption(option = {
              tooltip: {
                  trigger: 'item',
                  formatter: '{b}<br/>{c} (kWh/d)'
              },
              visualMap: {
                  min: 10000,
                  max: 100000,
                  text: ['High', 'Low'],
                  realtime: false,
                  calculable: true,
                  orient: 'vertical',
                  left: 'right',
                  top: 'bottom',
                  inRange: {
                      color: ['#3175B1', '#A5D8E1', '#F5F5F5']
                  },
                  textStyle: {
                    color: '#A5D9E1'
                  },
              },
              geo: {
                 show: true,
                 map: 'HH',
                 label: {
                     show: true,
                     textStyle:{
                       fontSize:12,
                       color:'#ffffff'
                     }
                 },
                 roam: true,
                 itemStyle: {
                   normal: {
                     borderWidth: .5, //区域边框宽度
                     borderColor: '#009fe8', //区域边框颜色
                     areaColor: "#DFC73D", //区域颜色
                   },
                   emphasis: {
                     borderWidth: .5,
                     borderColor: '#192A54',
                     areaColor: "#5FA731",
                   }
                 },
                 zoom: 0.8
              },
              series: [
                  {
                      name: '怀化市生态矿山',
                      type: 'scatter',
                      coordinateSystem: 'geo',
                      data: that.convertData(dataValue),
                      symbolSize: function (val) {
                          return val[2] * 5;
                      },
                      encode: {
                          value: 2
                      },
                      label: {
                          formatter: '{b}',
                          position: 'right',
                          show: false
                      },
                      itemStyle: {
                          color: 'purple'
                      },
                      emphasis: {
                          label: {
                              show: true
                          }
                      },
                      roam: true,

                  }
              ]
          });
          myChart.on('click', function (params) {

          });
      });
    });
    */

  },
  created(){
    let that = this;
  },

});
