var app = new Vue({
  el: '#content',
  delimiters: ['${', '}'],
  data: {
    noiseAddressData:['湖南西奥矿业有限公司官庄金矿','沅陵县沃溪金锑钨矿','中国黄金集团柳林汊矿区桐树面金矿','沅陵县盘古乡石家寨矿区磷矿',
    '沅陵县董家河矿铅锌硫铁矿矿区','会同县淘金冲矿区','麻阳九曲湾铜矿矿区','米贝金矿','中方黄岩铀矿限制开采区','中方县泸阳镇八活岩矿区石灰石',
    '辰溪田湾磷矿矿区','洪江市摩天岭花岗岩','通道侗族自治县锅冲矿区硅石矿','新晃县贡溪重晶石矿区','溆浦思蒙国家湿地公园保护区','怀化中坡保护区',
    '靖州飞山苗乡侗寨风景名胜区','排牙山省级森林公园保护区','芷江县西晃山省级森林公园','鹰嘴界国家级自然保护区','雪峰山金锰矿'],
    noiseData:[-14,29,-13,28,-19,26,-11,-15,-13,24,-18,0,19,-46,29,-37,-25,-14,18,-25,0],
    dustMonitorGraphic2:{},
    dustMonitorOption2:{},
  },
  methods:{
    backClick:function(){
      window.location.href = "/mine/";
    },
    airBtnClick:function(){
      window.location.href = "/mine/air";
    },
    waterBtnClick:function(){
      window.location.href = "/mine/water";
    },
    dustBtnClick:function(){
      window.location.href = "/mine/dust";
    },
    noiseBtnClick:function(){
      window.location.href = "/mine/noise";
    },
  },
  mounted() {
    //---------------------------------------------------------------------
    var myChart = echarts.init(document.getElementById('map'));

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

            series: [
                {
                    name: '怀化市生态矿山',
                    type: 'map',
                    mapType: 'HH', // 自定义扩展图表类型
                    label: {
                        show: true,
                        textStyle:{
                    			fontSize:12,
                    			color:'#ffffff'
                    		}
                    },
                    itemStyle: {
                        normal: {
                          borderWidth: .5, //区域边框宽度
                          borderColor: '#009fe8', //区域边框颜色
                          areaColor: "#ffefd5", //区域颜色
                        },
                        emphasis: {
                          borderWidth: .5,
                          borderColor: '#192A54',
                          areaColor: "#5FA731",
                        }
                    },
                    roam:true,
                    data: [
                        {name: '沅陵县', value: 53000.00},
                        {name: '溆浦县', value: 59000.00},
                        {name: '辰溪县', value: 32000.00},
                        {name: '麻阳苗族自治县', value: 23500.00},
                        {name: '鹤城区', value: 68000.00},
                        {name: '中方县', value: 33000.00 },
                        {name: '芷江侗族自治县', value: 31500.00},
                        {name: '新晃侗族自治县', value: 15500.00},
                        {name: '洪江市', value: 48000.00},
                        {name: '会同县', value: 22000.00},
                        {name: '靖州苗族侗族自治县', value:18000.00 },
                        {name: '通道侗族自治县', value: 15000.00},
                    ],

                }
            ]
        });
        myChart.on('click', function (params) {

        });
    });
    //-----------------------------------------------------------------------
    var sunburstGraphic = echarts.init(document.getElementById('sunburst-graphic'));

    sunburstOption = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} '
        },
        legend: {
            icon:'circle',
            orient: 'vertical',
            x:'10px',
            y:'300px',
            data: ['大气', '水质', '粉尘', '噪声'],
            textStyle: {
                fontSize: 12,
                color: '#A5D9E1'
            }
        },
        color:['#5FA731','#3074B1','#E6951D','#7D57A1',],
        series: [
            {
                name: '数据',
                type: 'pie',
                radius: '55%',
                center: ['50%', '30%'],
                data: [
                    {value: 90, name: '大气'},
                    {value: 85, name: '水质'},
                    {value: 91, name: '粉尘'},
                    {value: 91, name: '噪声'},
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    sunburstGraphic.setOption(sunburstOption);

    //-----------------------------------------------------------------------
    var airMonitorGraphic1 = echarts.init(document.getElementById('air-monitor-graphic1'));
    var airMonitorOption1 = {

        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            icon:'circle',
            orient: 'vertical',
            left: 10,
            data: ['I类', 'II类','III类', 'IV类', 'V类', 'VI类'],
            textStyle: {
                fontSize: 12,
                color: '#A5D9E1'
            }
        },

        color:['#A5D9E1','#3074B1','#5FA731','#85C154','#B691C1','#7D57A1'],
        graphic:[
            {
                type:"text",
                    left:"center",
                    top:"50%",
                    style:{
                        text:"总监测点",
                        textAlign:"center",
                        fill:"#A5D9E1",
                        fontSize:22
                    }
            },
            {
                type:"text",
                    left:"center",
                    top:"62%",
                    style:{
                        text:"204",
                        textAlign:"center",
                        fill:"#A5D9E1",
                        fontSize:18
                    }
            }
        ],
        series: [
            {

                name: '',
                type: 'pie',
                radius: ['50%', '80%'],
                avoidLabelOverlap: false,
                center: ['50%', '60%'],
                labelLine: {
                    show: false
                },
                data: [
                    {value: 90.47, name: 'I类'},
                    {value: 9.53, name: 'II类'},
                    {value: 0, name: 'III类'},
                    {value: 0, name: 'IV类'},
                    {value: 0, name: 'V类'},
                    {value: 0, name: 'VI类'}
                ]
            }
        ]
    };
    airMonitorGraphic1.setOption(airMonitorOption1);

    //-----------------------------------------------------------------------
    var airMonitorGraphic2 = echarts.init(document.getElementById('air-monitor-graphic2'));
    airMonitorOption2 = {
        title: {
            text: '本周趋势',
            textStyle: {
                 fontFamily: "sans-serif", // 主标题文字的字体系列。
                 fontSize: 15, // 字体大小
                 fontStyle: 'normal',
                 fontWeight: 'normal',
                 color:'#A5D9E1',
                 lineHeight:"12",
             },
        },
        color:['#7D57A1'],
        tooltip: {
            trigger: 'axis'
        },
        grid:[{
             bottom: '30px',
         }],
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['星期天(11号)','星期一(12号)','星期二(13号)','星期三(14号)','星期四(15号)','星期五(16号)','星期六(17号)'],
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
            type: 'value',splitLine:{
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
                name: '',
                type: 'line',
                stack: '总量',
                data: [88,91,90,89,89,91,90]
            }
        ]
    };

    airMonitorGraphic2.setOption(airMonitorOption2);

    //-----------------------------------------------------------------------
    var waterMonitorGraphic1 = echarts.init(document.getElementById('water-monitor-graphic1'));
    var waterMonitorOption1 = {

        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            icon:'circle',
            orient: 'vertical',
            left: 10,
            data: ['I-II类','III类', 'IV类', 'V类', 'VI类'],
            textStyle: {
                fontSize: 12,
                color: '#A5D9E1'
            }
        },
        color:['#A5D9E1','#5FA731','#85C154','#B691C1','#7D57A1'],
        graphic:[
            {
                type:"text",
                    left:"center",
                    top:"50%",
                    style:{
                        text:"总监测点",
                        textAlign:"center",
                        fill:"#A5D9E1",
                        fontSize:22
                    }
            },
            {
                type:"text",
                    left:"center",
                    top:"62%",
                    style:{
                        text:"204",
                        textAlign:"center",
                        fill:"#A5D9E1",
                        fontSize:18
                    }
            }
        ],
        series: [
            {

                name: '',
                type: 'pie',
                radius: ['50%', '80%'],
                avoidLabelOverlap: false,
                center: ['50%', '60%'],
                labelLine: {
                    show: false
                },
                data: [
                  {value: 76.19, name: 'I-II类'},
                  {value: 19.05, name: 'III类'},
                  {value: 4.76, name: 'IV类'},
                  {value: 0, name: 'V类'},
                  {value: 0, name: 'VI类'}
                ]
            }
        ]
    };
    waterMonitorGraphic1.setOption(waterMonitorOption1);

    //-----------------------------------------------------------------------
    var waterMonitorGraphic2 = echarts.init(document.getElementById('water-monitor-graphic2'));
    waterMonitorOption2 = {
        title: {
            text: '本周趋势',
            textStyle: {
                 fontFamily: "sans-serif", // 主标题文字的字体系列。
                 fontSize: 15, // 字体大小
                 fontStyle: 'normal',
                 fontWeight: 'normal',
                 color:'#A5D9E1',
                 lineHeight:"12",
             },
        },
        color:['#7D57A1'],
        tooltip: {
            trigger: 'axis'
        },
        grid:[{
             bottom: '30px',
         }],
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['星期天(11号)','星期一(12号)','星期二(13号)','星期三(14号)','星期四(15号)','星期五(16号)','星期六(17号)'],
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
            type: 'value',splitLine:{
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
                name: '水质',
                type: 'line',
                stack: '总量',
                data: [83,81,86,88,90,83,85]
            }
        ]
    };
    waterMonitorGraphic2.setOption(waterMonitorOption2);

    //-----------------------------------------------------------------------
    var noiseMonitorGraphic1 = echarts.init(document.getElementById('noise-monitor-graphic1'));
    var noiseMonitorOption1 = {

        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          icon:'circle',
            orient: 'vertical',
            left: 10,
            data: ['一级', '二级', '三级', '四级', '五级'],
            textStyle: {
                fontSize: 12,
                color: '#A5D9E1'
            }
        },
        color:['#A5D9E1','#5FA731','#85C154','#B691C1','#7D57A1'],
        graphic:[
            {
                type:"text",
                    left:"center",
                    top:"50%",
                    style:{
                        text:"总监测点",
                        textAlign:"center",
                        fill:"#A5D9E1",
                        fontSize:22
                    }
            },
            {
                type:"text",
                    left:"center",
                    top:"62%",
                    style:{
                        text:"100",
                        textAlign:"center",
                        fill:"#A5D9E1",
                        fontSize:18
                    }
            }
        ],
        series: [
            {

                name: '',
                type: 'pie',
                radius: ['50%', '80%'],
                avoidLabelOverlap: false,
                center: ['50%', '60%'],
                labelLine: {
                    show: false
                },
                data: [
                    {value: 14, name: '一级'},
                    {value: 77, name: '二级'},
                    {value: 9, name: '三级'},
                    {value: 0, name: '四级'},
                    {value: 0, name: '五级'}
                ]
            }
        ]
    };
    noiseMonitorGraphic1.setOption(noiseMonitorOption1);

    //-----------------------------------------------------------------------
    var noiseMonitorGraphic2 = echarts.init(document.getElementById('noise-monitor-graphic2'));
    var noiseMonitorOption2 = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['同比', '环比'],
            textStyle: {
                fontSize: 12,
                color: '#A5D9E1'
            }
        },
        color:['#A5D9E1','#7D57A1'],
        calculable: true,
        grid:[{
             bottom: '30px',
         }],
        xAxis: [
            {
                type: 'category',
                data: ['沅陵县盘古乡石家寨矿区磷矿','沅陵县董家河矿铅锌硫铁矿矿区','会同县淘金冲矿区','麻阳九曲湾铜矿矿区','辰溪田湾磷矿矿区','洪江市摩天岭花岗岩','通道侗族自治县锅冲矿区硅石矿','新晃县贡溪重晶石矿区'],
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
                name: '同比',
                type: 'bar',
                data: [-46,19,-6,12,13,21,-19,-46],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name: '环比',
                type: 'bar',
                data: [0,0,0,0,0,0,0],
                markPoint: {
                    data: [
                        {name: '年最高', value: 182.2, xAxis: 7, yAxis: 183},
                        {name: '年最低', value: 2.3, xAxis: 11, yAxis: 3}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };
    noiseMonitorGraphic2.setOption(noiseMonitorOption2);

    //-----------------------------------------------------------------------

    //-----------------------------------------------------------------------
    this.dustMonitorGraphic2 = echarts.init(document.getElementById('dust-monitor-graphic2'));
    this.dustMonitorOption2 = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['同比', '环比'],
            textStyle: {
                fontSize: 12,
                color: '#A5D9E1'
            }
        },
        color:['#A5D9E1','#7D57A1'],
        calculable: true,
        grid:[{
             bottom: '30px',
         }],
        xAxis: [
            {
                type: 'category',
                data: ['沅陵县盘古乡石家寨矿区磷矿','沅陵县董家河矿铅锌硫铁矿矿区','会同县淘金冲矿区','麻阳九曲湾铜矿矿区','辰溪田湾磷矿矿区','洪江市摩天岭花岗岩','通道侗族自治县锅冲矿区硅石矿'],
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
                name: '同比',
                type: 'bar',
                data: [-14,29,-13,28,-19,26,-11],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name: '环比',
                type: 'bar',
                data: [0,0,0,0,0,0,0],
                markPoint: {
                    data: [
                        {name: '年最高', value: 182.2, xAxis: 7, yAxis: 183},
                        {name: '年最低', value: 2.3, xAxis: 11, yAxis: 3}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };
    this.dustMonitorGraphic2.setOption(this.dustMonitorOption2);

  },
  created() {
    let that = this;
    let dustDataInterval = 0;
    setInterval(function(){
      if(that.noiseAddressData.length > 0){
        that.dustMonitorOption2.xAxis[0].data = that.noiseAddressData.slice(dustDataInterval,dustDataInterval + 7);
        that.dustMonitorOption2.series[0].data = that.noiseData.slice(dustDataInterval,dustDataInterval + 7);
        that.dustMonitorGraphic2.setOption(that.dustMonitorOption2);
        dustDataInterval = dustDataInterval + 7;
        if(dustDataInterval == that.noiseAddressData.length){
          dustDataInterval = 0;
        }
      }
    },5000);
  }
});
