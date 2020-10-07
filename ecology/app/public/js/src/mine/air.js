var app = new Vue({
  el: '#content',
  delimiters: ['${', '}'],
  data: {
    columns1: [
        {
          title: '矿名',
          key: 'name'
        },
        {
          title: 'SO2（μg/m3）',
          key: 'indicator1'
        },
        {
          title: 'NO2（μg/m3）',
          key: 'indicator2'
        },
        {
          title: 'CO（μg/m3）',
          key: 'indicator3'
        },
        {
          title: 'O3（μg/m3）',
          key: 'indicator4'
        },
        {
          title: '温度（°C）',
          key: 'indicator5'
        },
        {
          title: '湿度（%rh）',
          key: 'indicator6'
        },
        {
          title: '风向',
          key: 'indicator7'
        },
        {
          title: '风力',
          key: 'indicator8'
        }
    ],
    data1:[],
    airTableData:[],
    airBarGraphic:{},
    airBarOption:{},

    dayAirBarData:[],
    weekAirBarData:[],
    monthAirBarData:[],
    yearAirBarData:[],

    lineWeekTimeData:["星期天(11号)","星期一(12号)","星期二(13号)","星期三(14号)","星期四(15号)","星期五(16号)","星期六(17号)"],
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
        this.airBarOption.series[1].data.push(this.dayAirBarData[i].rank);
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
        this.airBarOption.series[1].data.push(this.weekAirBarData[i].rank);
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
        this.airBarOption.series[1].data.push(this.monthAirBarData[i].rank);
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
        this.airBarOption.series[1].data.push(this.yearAirBarData[i].rank);
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
    }
  },
  mounted() {
    var myChart = echarts.init(document.getElementById('map'));

    myChart.showLoading();
    $.get('/public/assets/huaihua.json', function (geoJson) {
        myChart.hideLoading();
        echarts.registerMap('HH', geoJson);
        myChart.setOption(option = {
            title: {
              text: '',
              subtext: '矿山水质监测大图',
            },
            tooltip: {
                trigger: 'item',
                formatter: '{b}<br/>{c} (kWh/d)'
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: {readOnly: false},
                    restore: {},
                    saveAsImage: {}
                }
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
                    color: ['lightskyblue', 'yellow', 'orangered']
                }
            },
            series: [
                {
                    name: '怀化市生态矿山',
                    type: 'map',
                    mapType: 'HH', // 自定义扩展图表类型
                    label: {
                        show: true
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

        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 10,
            data: ['I类', 'II类', 'III类', 'IV类', 'V类','VI类']
        },
        graphic:[
            {
                type:"text",
                    left:"center",
                    top:"40%",
                    style:{
                        text:"总监测点",
                        textAlign:"center",
                        fill:"#000",
                        fontSize:30
                    }
            },
            {
                type:"text",
                    left:"center",
                    top:"50%",
                    style:{
                        text:"100",
                        textAlign:"center",
                        fill:"#000",
                        fontSize:26
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
        toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        legend: {
            data: ['当日总评分', '排名']
        },
        xAxis: [
            {
                type: 'category',
                data: [],
                axisPointer: {
                    type: 'shadow'
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
                    formatter: '{value} 分'
                }
            },
            {
                type: 'value',
                name: '排名',
                min: 0,
                max: 25,
                interval: 5,
                axisLabel: {
                    formatter: '{value} 位'
                }
            }
        ],
        series: [
            {
                name: '当日总评分',
                type: 'bar',
                data: []
            },
            {
                name: '排名',
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


        title: [{
            left: 'center',
            text: '大气总体趋势图'
        }],
        tooltip: {
            trigger: 'axis'
        },
        xAxis: [{
            data: this.lineWeekTimeData
        }],
        yAxis: [{
            splitLine: {show: false}
        }],
        grid: [{
            bottom: '60%'
        }, {
            top: '60%'
        }],
        series: [{
            type: 'line',
            showSymbol: false,
            data: this.lineWeekData
        }]
    };

    this.airLineGraphic.setOption(this.airLineOption);

  },
  created() {
    //do something after creating vue instance
    let that = this;
    $.getJSON('/public/assets/8-1.json',function(data){
      that.airTableData = data;
    });

    let airTableDataInterval = 0;
    setInterval(function(){
      if(that.airTableData.length > 0){
        that.data1 = [];
        that.data1.push(that.airTableData[airTableDataInterval]);
        that.data1.push(that.airTableData[airTableDataInterval + 1]);
        that.data1.push(that.airTableData[airTableDataInterval + 2]);
        airTableDataInterval = airTableDataInterval + 3;
        if(airTableDataInterval == that.airTableData.length){
          airTableDataInterval = 0;
        }
      }

    },1000);

    $.getJSON('/public/assets/8-3-1.json',function(data){
      that.yearAirBarData = data;
      for(let i = 0; i < that.yearAirBarData.length; i++){
        that.airBarOption.xAxis[0].data.push(that.yearAirBarData[i].name);
        that.airBarOption.series[0].data.push(that.yearAirBarData[i].score);
        that.airBarOption.series[1].data.push(that.yearAirBarData[i].rank);
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
