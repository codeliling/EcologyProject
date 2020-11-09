var app = new Vue({
  el: '#content',
  delimiters: ['${', '}'],
  data: {
    dustData:[
      {"name":"石家寨磷矿","value":"-16"},
      {"name":"董家河硫铁矿","value":19},
      {"name":"辰溪田湾磷矿","value":"-6"},
      {"name":"麻阳九曲湾铜矿","value":12},
      {"name":"怀化中坡","value":5},
      {"name":"中力黄岩铀矿","value":"-11"},
      {"name":"思蒙湿地公园","value":"-14"},
      {"name":"八活岩矿区","value":13},
      {"name":"雪峰山金锰矿","value":21},
      {"name":"西晃山森林公园","value":"-19"},
      {"name":"贡溪重晶石矿区","value":"-16"},
      {"name":"米贝金矿","value":"-12"},
      {"name":"摩天岭矿区","value":"-17"},
      {"name":"淘金冲矿区","value":"-15"},
      {"name":"鹰嘴界自然保护区","value":"-19"},
      {"name":"苗乡侗寨名胜区","value":"-28"},
      {"name":"排牙山森林公园","value":15},
      {"name":"通道锅冲硅石矿","value":23},
      {"name":"西澳官庄金矿","value":"-16"},
      {"name":"沃溪金锑钨矿","value":"-12"},
      {"name":"汊桐树面金矿","value":6},
    ],

    noiseData : [
      {"name":"石家寨磷矿","value":28},
      {"name":"董家河硫铁矿","value":"-19"},
      {"name":"辰溪田湾磷矿","value":26},
      {"name":"麻阳九曲湾铜矿","value":"-11"},
      {"name":"怀化中坡","value":"-15"},
      {"name":"中力黄岩铀矿","value":"-13"},
      {"name":"思蒙湿地公园","value":24},
      {"name":"八活岩矿区","value":"-18"},
      {"name":"雪峰山金锰矿","value":0},
      {"name":"西晃山森林公园","value":19},
      {"name":"贡溪重晶石矿区","value":"-16"},
      {"name":"米贝金矿","value":29.00},
      {"name":"摩天岭矿区","value":"-17"},
      {"name":"淘金冲矿区","value":"-15"},
      {"name":"鹰嘴界自然保护区","value":"-14"},
      {"name":"苗乡侗寨名胜区","value":18},
      {"name":"排牙山森林公园","value":"-15"},
      {"name":"通道锅冲硅石矿","value":0},
      {"name":"西澳官庄金矿","value":"-14.00"},
      {"name":"沃溪金锑钨矿","value":29},
      {"name":"汊桐树面金矿","value":"-13"},
    ],

    noiseMonitorGraphic2:{},
    noiseMonitorOption2:{},
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
    getFormatDateBefore:function(num){
      var date = new Date();
      date.setDate(date.getDate() - num);
      var seperator1 = "/";
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
          month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
      }
      var currentdate = month + seperator1 + strDate;
      return currentdate;
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
                formatter: '{b}<br/>{c}'
            },
            visualMap: {
                min: 10,
                max: 100,
                text: ['High', 'Low'],
                realtime: true,
                calculable: true,
                orient: 'vertical',
                left: 'left',
                top: 'bottom',
                inRange: {
                    color: ['#F5F5F5','#A5D8E1','#3175B1']
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
                        {name: '沅陵县', value: '91'},
                        {name: '溆浦县', value: '92'},
                        {name: '辰溪县', value: '96'},
                        {name: '麻阳苗族自治县', value: '99'},
                        {name: '鹤城区', value: '86'},
                        {name: '中方县', value: '88' },
                        {name: '芷江侗族自治县', value: '92'},
                        {name: '新晃侗族自治县', value: '95'},
                        {name: '洪江市', value: '90'},
                        {name: '会同县', value: '83'},
                        {name: '靖州苗族侗族自治县', value:'96' },
                        {name: '通道侗族自治县', value:'99'},
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
            y:'240px',
            data: ['大气', '水质', '粉尘', '噪声'],
            textStyle: {
                fontSize: 12,
                color: '#A5D9E1'
            }
        },
        color:['#5FA731','#3074B1','#A5D9E1','#7D57A1',],
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
            data: [this.getFormatDateBefore(6),this.getFormatDateBefore(5),this.getFormatDateBefore(4),this.getFormatDateBefore(3),this.getFormatDateBefore(2),this.getFormatDateBefore(1),this.getFormatDateBefore(0)],
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
            min:80,
            max:100,
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
            data: [this.getFormatDateBefore(6),this.getFormatDateBefore(5),this.getFormatDateBefore(4),this.getFormatDateBefore(3),this.getFormatDateBefore(2),this.getFormatDateBefore(1),this.getFormatDateBefore(0)],
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
            min:80,
            max:100,
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
    this.noiseMonitorGraphic2 = echarts.init(document.getElementById('noise-monitor-graphic2'));
    this.noiseMonitorOption2 = {
        tooltip: {
            trigger: 'axis',
            formatter: '{b}<br/>{c} %'
        },
        legend: {
            data: ['增长率'],
            textStyle: {
                fontSize: 12,
                color: '#A5D9E1'
            }
        },
        color:['#A5D9E1'],
        calculable: true,
        grid:[{
             top:'40px',
             bottom: '25px',
         }],
        xAxis: [
            {
                type: 'category',
                data: ['西澳官庄金矿','沃溪金锑钨矿','汊桐树面金矿'],
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
                name:'%',
                type: 'value',
                min:-50,
                max:50,
                interval  : 25,
                        axisLabel: {
                            show: true,
                            interval: 'auto',
                            formatter: '{value} %'
                            },
                        show: true,
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
                name: '增长率',
                type: 'bar',
                data: [-16,-12,6],

            },

        ]
    };
    this.noiseMonitorGraphic2.setOption(this.noiseMonitorOption2);

    //-----------------------------------------------------------------------

    //-----------------------------------------------------------------------
    this.dustMonitorGraphic2 = echarts.init(document.getElementById('dust-monitor-graphic2'));
    this.dustMonitorOption2 = {
        tooltip: {
            trigger: 'axis',
            formatter: '{b}<br/>{c} %'
        },
        legend: {
            data: ['增长率'],
            textStyle: {
                fontSize: 12,
                color: '#7D57A1'
            }
        },
        color:['#7D57A1'],
        calculable: true,
        grid:[{
          top:'40px',
          bottom: '25px',
         }],
        xAxis: [
            {
                type: 'category',
                data: ['西澳官庄金矿','沃溪金锑钨矿','汊桐树面金矿'],
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
                name:'%',
                type: 'value',
                min:-50,
                max:50,
                interval  : 25,
                        axisLabel: {
                            show: true,
                            interval: 'auto',
                            formatter: '{value} %'
                            },
                        show: true,
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
                name: '增长率',
                type: 'bar',
                data: [-14,29,-13],

            }
        ]
    };
    this.dustMonitorGraphic2.setOption(this.dustMonitorOption2);

  },
  created() {
    let that = this;
    let dustDataInterval = 0;
    setInterval(function(){
      if(that.dustData.length > 0){
        that.dustMonitorOption2.xAxis[0].data = [];
        that.dustMonitorOption2.series[0].data = [];
        let list = that.dustData.slice(dustDataInterval,dustDataInterval + 3);
        for (let i = dustDataInterval; i < dustDataInterval + 3; i++){
          let obj = that.dustData[i];
          that.dustMonitorOption2.xAxis[0].data.push(obj.name);
          that.dustMonitorOption2.series[0].data.push(obj.value);
        }
        that.dustMonitorGraphic2.setOption(that.dustMonitorOption2);
        dustDataInterval = dustDataInterval + 3;
        if(dustDataInterval == that.dustData.length){
          dustDataInterval = 0;
        }
      }
    },30000);

    let noiseDataInterval = 0;
    setInterval(function(){
      if(that.noiseData.length > 0){
        that.noiseMonitorOption2.xAxis[0].data = [];
        that.noiseMonitorOption2.series[0].data = [];
        let list = that.noiseData.slice(noiseDataInterval,noiseDataInterval + 3);
        for (let i = noiseDataInterval; i < noiseDataInterval + 3; i++){
          let obj = that.noiseData[i];
          that.noiseMonitorOption2.xAxis[0].data.push(obj.name);
          that.noiseMonitorOption2.series[0].data.push(obj.value);
        }
        that.noiseMonitorGraphic2.setOption(that.noiseMonitorOption2);
        noiseDataInterval = noiseDataInterval + 3;
        if(noiseDataInterval == that.noiseData.length){
          noiseDataInterval = 0;
        }
      }
    },30000);
    this.noiseMonitorGraphic2.setOption(this.noiseMonitorOption2);
  }
});
