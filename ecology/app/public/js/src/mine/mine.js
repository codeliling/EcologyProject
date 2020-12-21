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
    var1:8,
    var2:21,
    var3:635.09,
    var4:1136,
    var5:3326,
    priceLine:{},
    priceOption:{},
    dateData:["2020/9/1","2020/9/2","2020/9/3","2020/9/4","2020/9/5","2020/9/6","2020/9/7","2020/9/8","2020/9/9","2020/9/10","2020/9/11","2020/9/12","2020/9/13","2020/9/14","2020/9/15","2020/9/16","2020/9/17","2020/9/18","2020/9/19","2020/9/20","2020/9/21","2020/9/22","2020/9/23","2020/9/24","2020/9/25","2020/9/26","2020/9/27","2020/9/28","2020/9/29","2020/9/30","2020/10/1","2020/10/2","2020/10/3","2020/10/4","2020/10/5","2020/10/6","2020/10/7","2020/10/8","2020/10/9","2020/10/10","2020/10/11","2020/10/12","2020/10/13","2020/10/14","2020/10/15"],
    huapoData:[98.1,98.6,99.2,99.8,99.7,99.6,99.8,99.2,99.8,99.7,99.6,99.8,99.8,99.7,99.7,99.6,99.8,99.8,99.7,99.6,99.8,99.2,99.8,99.7,99.6,99.8,99.8,99.7,99.7,99.6,99.8,99.6,99.8,99.8,99.7,99.8,99.7,99.6,99.8,99.2,99.8,99.7,99.6,99.8,99.8,99.7,99.7],
    nishiliuData:[97.2,98.4,99.8,99.7,99.6,99.2,99.7,99.6,99.8,99.2,99.8,99.7,99.6,99.2,99.8,99.7,99.6,99.7,99.6,99.2,99.7,99.6,99.8,99.2,99.8,99.7,99.6,99.2,99.8,99.7,99.6,99.8,99.7,99.6,99.8,99.7,99.6,99.2,99.7,99.6,99.8,99.2,99.8,99.7,99.6,99.2,99.8],
    chengjiangData:[97.3,99.7,99.7,99.6,99.8,99.2,99.8,99.8,99.7,99.6,99.8,99.6,99.6,99.8,99.2,99.8,99.7,99.6,99.8,99.2,99.8,99.8,99.7,99.6,99.8,99.6,99.6,99.8,99.2,99.8,99.7,99.8,99.6,99.6,99.2,99.6,99.8,99.2,99.8,99.8,99.7,99.6,99.8,99.6,99.6,99.8,99.2],

    //--------------------------------------
    machine1:[
      [150,62,2],
      [151,61,2],
      [150,62,2],
      [151,61,2]
    ],

    machine2:[
      [30,11,1],
      [29,13,0],
      [30,11,1],
      [29,13,0],
    ],

    machine3:[
      [100,39,3],
      [99,40,3],
      [100,39,3],
      [99,40,3],
    ],

    machine4:[
      [250,102,5],
      [250,102,5],
      [252,102,3],
      [253,101,3],
    ],
    productLine:{},
    productLineOption:{},
    cityid:'101251201',
    city:'',
    weatherDate:'',
    wea:'',
    temperature:'',
    tempRange:'',
    air:'',
    air_level:'',
    humidity:'',
    win:'',
    win_meter:'',
    win_speed:'',
    pm25_desc:'',
    pm10_desc:'',
    o3_desc:'',
    no2_desc:'',
    so2_desc:'',
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
      var currentdate = year + seperator1 + month + seperator1 + strDate;
      return currentdate;
    },
    loadWeather:function(){
      let that = this;
      $.ajax({
        url: 'https://v0.yiketianqi.com/api?version=v61&appid=45528555&appsecret=qBIe9Win&cityid='+that.cityid,
        type: 'get',
        dataType: 'json',
      })
      .done(function(responseData) {
        that.city = responseData.city;
        that.weatherDate = responseData.date +' '+responseData.update_time+' '+ responseData.week;
        that.wea = responseData.wea;
        that.temperature = responseData.tem;
        that.tempRange = responseData.tem1 + '/' +responseData.tem2;
        that.air = responseData.air;
        that.air_level = responseData.air_level;
        that.humidity = responseData.humidity;
        that.win = responseData.win;
        that.win_meter = responseData.win_meter;
        that.win_speed = responseData.win_speed;
        that.pm25_desc = responseData.aqi.pm25_desc;
        that.pm10_desc = responseData.aqi.pm10_desc;
        that.o3_desc = responseData.aqi.o3_desc;
        that.no2_desc = responseData.aqi.no2_desc;
        that.so2_desc = responseData.aqi.so2_desc;
      })
    }
  },
  mounted() {
    let that = this;
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
                show:false,
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
          let name = params.name;
          if(name == '沅陵县'){
            that.cityid = '101251203';
          }
          else if(name == '溆浦县'){
            that.cityid = '101251211';
          }
          else if(name == '辰溪县'){
            that.cityid = '101251204';
          }
          else if(name == '麻阳苗族自治县'){
            that.cityid = '101251208';
          }
          else if(name == '鹤城区'){
            that.cityid = '101251202';
          }
          else if(name == '中方县'){
            that.cityid = '101251212';
          }
          else if(name == '芷江侗族自治县'){
            that.cityid = '101251210';
          }
          else if(name == '新晃侗族自治县'){
            that.cityid = '101251209';
          }
          else if(name == '会同县'){
            that.cityid = '101251206';
          }
          else if(name == '靖州苗族侗族自治县'){
            that.cityid = '101251205';
          }
          else if(name == '通道侗族自治县'){
            that.cityid = '101251207';
          }
          else if(name == '洪江市'){
            that.cityid = '101251213';
          }
          else{
            that.cityid = '101251201';
          }
          that.loadWeather();
        });
    });

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
                ['工作中', 150, 30, 100, 250],
                ['空闲中', 62, 11, 39, 102],
                ['修理中', 2, 1, 3, 5],
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
        ]
    };

    this.productLine.setOption(this.productLineOption);


    //----------------------------------------------------------------------
    this.barGraphic = echarts.init(document.getElementById('bar-graphic'));

    // 指定图表的配置项和数据
    this.barGraphicOption = {
        title: {
            text: '水电用量',
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
        yAxis: [{
            name:'用水量(Vut)',
            type: 'value',
            max : 200,
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
        {
            name:'用电量(kW·h)',
            type: 'value',
            max : 8000,
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
        }],
        series: [
            {
                name: '水',
                type: 'line',
                yAxisIndex: 0,
                stack: '总量',
                data: [115,116,117,118,119],
                itemStyle:{
                    normal:{
                        color:'#7D57A1'
                    }
                },
            },
            {
                name: '电',
                type: 'line',
                yAxisIndex: 1,
                stack: '总量',
                data: [7456,7459,7462,7465,7468],
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
          left: '20%',
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
            data:[this.getFormatDateBefore(6),this.getFormatDateBefore(5),this.getFormatDateBefore(4),this.getFormatDateBefore(3),this.getFormatDateBefore(2),this.getFormatDateBefore(1),this.getFormatDateBefore(0)],
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
            max : 100,
            min : 80,
            splitNumber : 5,
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
                symbol: 'none',
                data: [92,93,94,92,94,93,95]
            },
            {
                name: '环境质量',
                type: 'line',
                symbol: 'none',
                data: [89,88,90,92,88,90,89]
            },
            {
                name: '灾害管理',
                type: 'line',
                symbol: 'none',
                data: [86,88,89,86,87,88,89]
            },
            {
                name: '废料利用',
                type: 'line',
                symbol: 'none',
                data: [82,82,81,82,82,81,80]
            },
            {
                name: '绿化覆盖',
                type: 'line',
                symbol: 'none',
                data: [87,87,87,87,87,87,87]
            },
            {
                name: '建筑围护',
                type: 'line',
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
            text: '安全评分趋势图',
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
            right: '7%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data:[this.getFormatDateBefore(4),this.getFormatDateBefore(3),this.getFormatDateBefore(2),this.getFormatDateBefore(1),this.getFormatDateBefore(0)],
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
                max : 100,
                min : 97,
                splitNumber : 1.5,
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
                areaStyle: {normal: {color:'#3074b1'}},
                data: [98.1,98.6,99.2,99.8,99.7]
            },
            {
                name: '泥石流',
                type: 'line',
                areaStyle: {normal: {color:'#b691c1'}},
                data: [97.2,98.4,99.8,99.7,99.6]
            },
            {
                name: '地面沉降',
                type: 'line',
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
           text: '灾害预警',
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
            data:[this.getFormatDateBefore(6),this.getFormatDateBefore(5),this.getFormatDateBefore(4),this.getFormatDateBefore(3),this.getFormatDateBefore(2),this.getFormatDateBefore(1),this.getFormatDateBefore(0)],
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
            max : 100,
            min : 80,
            splitNumber : 5,
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
                symbol: 'none',
                data: [88,91,90,89,89,91,90]
            },
            {
                name: '水质',
                type: 'line',
                symbol: 'none',
                data: [83,81,86,88,90,83,85]
            },
            {
                name: '噪音',
                type: 'line',
                symbol: 'none',
                data: [86,87,90,89,84,84,83]
            },
            {
                name: '粉尘',
                type: 'line',
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
          that.barGraphicOption.series[0].data = [];
          that.barGraphicOption.series[1].data = [];
          for(let i = lineInterval; i< lineInterval + 5; i++){
            that.barGraphicOption.series[0].data.push(data[lineInterval].water);
            that.barGraphicOption.series[1].data.push(data[lineInterval].electricity);
          }

          that.barGraphic.setOption(that.barGraphicOption);
          lineInterval = lineInterval + 5;
          if(lineInterval == data.length)
          {
            lineInterval = 0;
          }
        },240000);
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

    // let hncDataInterval = 0;
    // setInterval(function () {
    //     that.priceOption.xAxis[0].data = that.dateData.slice(hncDataInterval, hncDataInterval + 5);
    //     that.priceOption.series[0].data = that.huapoData.slice(hncDataInterval, hncDataInterval + 5);
    //     that.priceOption.series[1].data = that.nishiliuData.slice(hncDataInterval, hncDataInterval + 5);
    //     that.priceOption.series[2].data = that.chengjiangData.slice(hncDataInterval, hncDataInterval + 5);
    //     that.priceLine.setOption(that.priceOption);
    //     hncDataInterval = hncDataInterval + 5;
    //     if(hncDataInterval == that.dateData.length){
    //       hncDataInterval = 0;
    //     }
    // },5000);


    let reportTableInterval = 4;
    $.getJSON('/public/assets/0-3-2.json',function(data){
      if(data.length > 0){
        that.currentReportArea = data.slice(reportTableInterval,reportTableInterval + 4);
        setInterval(function(){
          that.currentReportArea = [];
          that.currentReportArea = data.slice(reportTableInterval,reportTableInterval + 4);
          reportTableInterval = reportTableInterval + 4;
          if(reportTableInterval == data.length)
          {
            reportTableInterval = 0;
          }
        },30000);
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
        },60000);
      }
    });

    let machineInfoInterval = 1;
    setInterval(function(){
      let arr1 = ['工作中'];
      let arr2 = ['空闲中'];
      let arr3 = ['修理中'];
      arr1.push(that.machine1[machineInfoInterval][0]);
      arr2.push(that.machine1[machineInfoInterval][1]);
      arr3.push(that.machine1[machineInfoInterval][2]);

      arr1.push(that.machine2[machineInfoInterval][0]);
      arr2.push(that.machine2[machineInfoInterval][1]);
      arr3.push(that.machine2[machineInfoInterval][2]);

      arr1.push(that.machine3[machineInfoInterval][0]);
      arr2.push(that.machine3[machineInfoInterval][1]);
      arr3.push(that.machine3[machineInfoInterval][2]);

      arr1.push(that.machine4[machineInfoInterval][0]);
      arr2.push(that.machine4[machineInfoInterval][1]);
      arr3.push(that.machine4[machineInfoInterval][2]);

      that.productLineOption.dataset.source[1] = arr1;
      that.productLineOption.dataset.source[2] = arr2;
      that.productLineOption.dataset.source[3] = arr3;
      that.productLine.setOption(that.productLineOption);
      machineInfoInterval = machineInfoInterval + 1;
      if(machineInfoInterval == that.machine1.length)
      {
        machineInfoInterval = 0;
      }
    },30000);

    this.loadWeather();

  }
});
