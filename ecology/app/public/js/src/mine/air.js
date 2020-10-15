var app = new Vue({
  el: '#content',
  delimiters: ['${', '}'],
  data: {
    data1:[{"var1":"西澳官庄金矿","var2":5,"var3":8,"var4":0.6,"var5":110,"var6":18,"var7":97,"var8":"北风","var9":"2级"},
    {"var1":"沃溪金锑钨矿","var2":6,"var3":7,"var4":0.6,"var5":117,"var6":19,"var7":97,"var8":"北风","var9":"2级"},
    {"var1":"柳树汊桐树面金矿","var2":5,"var3":9,"var4":0.7,"var5":116,"var6":18,"var7":98,"var8":"北风","var9":"2级"}],
    airTableData:[

      {"var1":"盘古乡石家寨磷矿","var2":8,"var3":10,"var4":0.9,"var5":119,"var6":20,"var7":97,"var8":"北风","var9":"2级"},
      {"var1":"董家河铅锌硫铁矿","var2":8,"var3":12,"var4":1,"var5":110,"var6":21,"var7":98,"var8":"北风","var9":"2级"},
      {"var1":"辰溪田湾磷矿","var2":9,"var3":11,"var4":0.9,"var5":117,"var6":20,"var7":97,"var8":"北风","var9":"2级"},
      {"var1":"麻阳九曲湾铜矿","var2":7,"var3":7,"var4":0.6,"var5":106,"var6":18,"var7":97,"var8":"北风","var9":"2级"},
      {"var1":"怀化中坡保护区","var2":2,"var3":4,"var4":0.4,"var5":112,"var6":23,"var7":98,"var8":"北风","var9":"2级"},
      {"var1":"中力黄岩铀矿开采区","var2":11,"var3":16,"var4":1.2,"var5":121,"var6":22,"var7":97,"var8":"北风","var9":"2级"},
      {"var1":"思蒙国家湿地公园保护区","var2":2,"var3":3,"var4":0.3,"var5":102,"var6":19,"var7":98,"var8":"北风","var9":"2级"},
      {"var1":"泸阳镇八活岩矿区","var2":5,"var3":9,"var4":0.7,"var5":106,"var6":21,"var7":97,"var8":"北风","var9":"2级"},
      {"var1":"雪峰山金锰矿","var2":6,"var3":8,"var4":0.6,"var5":105,"var6":19,"var7":97,"var8":"北风","var9":"2级"},
      {"var1":"西晃山森林公园保护区","var2":3,"var3":4,"var4":0.4,"var5":101,"var6":22,"var7":98,"var8":"北风","var9":"2级"},
      {"var1":"贡溪重晶石矿区","var2":9,"var3":11,"var4":1,"var5":116,"var6":23,"var7":97,"var8":"北风","var9":"2级"},
      {"var1":"米贝金矿","var2":5,"var3":8,"var4":0.8,"var5":106,"var6":20,"var7":98,"var8":"北风","var9":"2级"},
      {"var1":"摩天岭花岗岩矿区","var2":6,"var3":8,"var4":0.7,"var5":105,"var6":19,"var7":97,"var8":"北风","var9":"2级"},
      {"var1":"会同县淘金冲矿区","var2":5,"var3":7,"var4":0.7,"var5":116,"var6":21,"var7":97,"var8":"北风","var9":"2级"},
      {"var1":"鹰嘴界自然保护区","var2":3,"var3":4,"var4":0.4,"var5":102,"var6":21,"var7":98,"var8":"北风","var9":"2级"},
      {"var1":"靖州苗乡侗寨名胜区","var2":4,"var3":3,"var4":0.5,"var5":103,"var6":21,"var7":97,"var8":"北风","var9":"2级"},
      {"var1":"排牙山森林公园保护区","var2":3,"var3":5,"var4":0.4,"var5":102,"var6":22,"var7":98,"var8":"北风","var9":"2级"},
      {"var1":"通道侗族锅冲硅石矿","var2":6,"var3":7,"var4":0.7,"var5":115,"var6":19,"var7":97,"var8":"北风","var9":"2级"},
      {"var1":"西澳官庄金矿","var2":5,"var3":8,"var4":0.6,"var5":110,"var6":18,"var7":97,"var8":"北风","var9":"2级"},
      {"var1":"沃溪金锑钨矿","var2":6,"var3":7,"var4":0.6,"var5":117,"var6":19,"var7":97,"var8":"北风","var9":"2级"},
      {"var1":"柳树汊桐树面金矿","var2":5,"var3":9,"var4":0.7,"var5":116,"var6":18,"var7":98,"var8":"北风","var9":"2级"},
    ],
    airBarGraphic:{},
    airBarOption:{},

    dayAirBarData:[],
    weekAirBarData:[],
    monthAirBarData:[],
    yearAirBarData:[],

    lineWeekTimeData:["2020/10/9","2020/10/10","2020/10/11","2020/10/12","2020/10/13","2020/10/14","2020/10/15"],
    lineWeekData:[88,91,90,89,89,91,90],
    lineMonthTimeData:["1号","2号","3号","4号","5号","6号","7号","8号","9号","10号","11号","12号","13号","14号","15号","16号","17号"],
    lineMonthData:[90,91,90,89,87,88,91,89,90,90,88,91,90,89,89,91,90],
    lineYearTimeData:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月"],
    lineYearData:[88,88,88,88,89,88,89,91,89,90],
    airLineGraphic:{},
    airLineOption:{},
  },
  methods:{
    dayBtnclick:function(){
      this.airBarOption.xAxis[0].data = [];
      this.airBarOption.series[0].data = [];
      this.airBarOption.series[1].data = [];
      for(let i = 0; i < this.dayAirBarData.length; i++){
        this.airBarOption.xAxis[0].data.push(this.dayAirBarData[i].name);
        this.airBarOption.series[0].data.push(this.dayAirBarData[i].score);
      }

      this.airBarGraphic.setOption(this.airBarOption);
    },
    weekBtnclick:function(){
      this.airBarOption.xAxis[0].data = [];
      this.airBarOption.series[0].data = [];
      this.airBarOption.series[1].data = [];
      for(let i = 0; i < this.weekAirBarData.length; i++){
        this.airBarOption.xAxis[0].data.push(this.weekAirBarData[i].name);
        this.airBarOption.series[0].data.push(this.weekAirBarData[i].score);
      }
      this.airBarGraphic.setOption(this.airBarOption);
    },
    monthBtnClick:function(){
      this.airBarOption.xAxis[0].data = [];
      this.airBarOption.series[0].data = [];
      this.airBarOption.series[1].data = [];
      for(let i = 0; i < this.monthAirBarData.length; i++){
        this.airBarOption.xAxis[0].data.push(this.monthAirBarData[i].name);
        this.airBarOption.series[0].data.push(this.monthAirBarData[i].score);
      }
      this.airBarGraphic.setOption(this.airBarOption);
    },
    yearBtnClick:function(){
      this.airBarOption.xAxis[0].data = [];
      this.airBarOption.series[0].data = [];
      this.airBarOption.series[1].data = [];
      for(let i = 0; i < this.yearAirBarData.length; i++){
        this.airBarOption.xAxis[0].data.push(this.yearAirBarData[i].name);
        this.airBarOption.series[0].data.push(this.yearAirBarData[i].score);
      }
      this.airBarGraphic.setOption(this.airBarOption);
    },
    lineWeekBtnclick:function(){
      this.airLineOption.xAxis[0].data = this.lineWeekTimeData;
      this.airLineOption.series[0].data = this.lineWeekData;
      this.airLineGraphic.setOption(this.airLineOption);
    },
    lineMonthBtnClick:function(){
      this.airLineOption.xAxis[0].data = this.lineMonthTimeData;
      this.airLineOption.series[0].data = this.lineMonthData;
      this.airLineGraphic.setOption(this.airLineOption);
    },
    lineYearBtnClick:function(){
      this.airLineOption.xAxis[0].data = this.lineYearTimeData;
      this.airLineOption.series[0].data = this.lineYearData;
      this.airLineGraphic.setOption(this.airLineOption);
    },
    backClick:function(){
      window.location.href = "/mine/envprotect";
    },
    airMonitorClick:function(){
      window.location.href = "/mine/air";
    },
    waterMonitorClick:function(){
      window.location.href = "/mine/water";
    },
    noiseMonitorClick:function(){
      window.location.href = "/mine/noise";
    },
    dustMonitorClick:function(){
      window.location.href = "/mine/dust";
    }
  },
  mounted() {
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

    //---------------------------------------------------------------------------
    var airPieGraphic = echarts.init(document.getElementById('air-pie'));
    var airPieOption = {
        title: {
            text: '大气情况',
            textStyle: {
                 fontFamily: "sans-serif", // 主标题文字的字体系列。
                 fontSize: 15, // 字体大小
                 fontStyle: 'normal',
                 fontWeight: 'bold',
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
            right: 10,
            data: ['I类', 'II类', 'III类', 'IV类', 'V类','VI类'],
            textStyle: {
                fontSize: 12,
                color: '#A5D9E1'
            }
        },
        color:['#7D51A1','#B691C1','#A5D9E1','#DFC73D','#E6951D'],
        graphic:[
            {
                type:"text",
                    left:"center",
                    top:"40%",
                    style:{
                        text:"总监测点",
                        textAlign:"center",
                        fill:"#E6951D",
                        fontSize:26
                    }
            },
            {
                type:"text",
                    left:"center",
                    top:"50%",
                    style:{
                        text:"100",
                        textAlign:"center",
                        fill:"#3074B1",
                        fontSize:20
                    }
            }
        ],
        series: [
            {

                name: '',
                type: 'pie',
                radius: ['50%', '80%'],
                avoidLabelOverlap: false,

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

    airPieGraphic.setOption(airPieOption);

    //---------------------------------------------------------------------------
    this.airBarGraphic = echarts.init(document.getElementById('air-bar'));
    this.airBarOption = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        legend: {
            data: ['当日总评分'],
            textStyle: {
                fontSize: 12,
                color: '#A5D9E1'
            }
        },
        color:['#A5D9E1'],
        xAxis: [
            {
                type: 'category',
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
                axisLabel: {
                  formatter: function(params) {
          					var newParamsName = "";
          					var paramsNameNumber = params.length;
          					var provideNumber = 2;
          					var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
          					if (paramsNameNumber > provideNumber) {
          						for (var p = 0; p < rowNumber; p++) {
          							var tempStr = ""; // 表示每一次截取的字符串
          							var start = p * provideNumber; // 开始截取的位置
          							var end = start + provideNumber; // 结束截取的位置
          							// 此处特殊处理最后一行的索引值
          							if (p == rowNumber - 1) {
          								tempStr = params.substring(start, paramsNameNumber);
          							} else {
          								tempStr = params.substring(start, end) + "\n";
          							}
          							newParamsName += tempStr; // 最终拼成的字符串
          						}

          					} else {
          						newParamsName = params;
          					}
          					return newParamsName
          				}
                }

            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '总评分',
                min: 0,
                max: 100,
                interval: 50,
                axisLabel: {
                    formatter: '{value} 分',
                    color: '#ffffff'
                },axisPointer: {
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
                }
            }
        ],
        series: [
            {
                name: '当日总评分',
                type: 'bar',
                data: []
            }
        ]
    };

    this.airBarGraphic.setOption(this.airBarOption);

    //------------------------------------------------------------------------------------
    this.airLineGraphic = echarts.init(document.getElementById('air-line'));

    this.airLineOption = {

        // Make gradient line here
        visualMap: [{
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            min: 0,
            max: 400
        }],

        tooltip: {
            trigger: 'axis'
        },
        grid: [{
           left: '10%',
           bottom: '30px',
           top: '30px',
           right: '10%'
       }],
        xAxis: [{
            data: this.lineWeekTimeData,
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
        yAxis: [{
          min:80,
          max:100,
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
        series: [{
            type: 'line',
            showSymbol: false,
            data: this.lineWeekData,
            itemStyle: {
      				normal: {
      					color: '#7D57A1', //改变折线点的颜色
      					lineStyle: {
      						color: '#7D57A1' //改变折线颜色
      					}
      				}
      			},
        }]
    };

    this.airLineGraphic.setOption(this.airLineOption);

  },
  created() {

    //do something after creating vue instance
    let that = this;

    let airTableDataInterval = 0;
    setInterval(function(){
      if(that.airTableData.length > 0){
        that.data1 = [];
        that.data1.push(that.airTableData[airTableDataInterval]);
        that.data1.push(that.airTableData[airTableDataInterval + 1]);
        that.data1.push(that.airTableData[airTableDataInterval + 2]);
        console.log(that.data1);
        airTableDataInterval = airTableDataInterval + 3;
        if(airTableDataInterval == that.airTableData.length){
          airTableDataInterval = 0;
        }
      }

    },30000);

    $.getJSON('/public/assets/8-3-1.json',function(data){
      that.yearAirBarData = data;
      for(let i = 0; i < that.yearAirBarData.length; i++){
        that.airBarOption.xAxis[0].data.push(that.yearAirBarData[i].name);
        that.airBarOption.series[0].data.push(that.yearAirBarData[i].score);
      }

      that.airBarGraphic.setOption(that.airBarOption);
    });

    $.getJSON('/public/assets/8-3-2.json',function(data){
      that.monthAirBarData = data;
    });

    $.getJSON('/public/assets/8-3-3.json',function(data){
      that.weekAirBarData = data;
    });

    $.getJSON('/public/assets/8-3-4.json',function(data){
      that.dayAirBarData = data;
    });
  }
})
