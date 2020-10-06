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
    var airLineGraphic = echarts.init(document.getElementById('air-line'));

    var data = [["2000-06-05",116],["2000-06-06",129],["2000-06-07",135],["2000-06-08",86],["2000-06-09",73],["2000-06-10",85],["2000-06-11",73],["2000-06-12",68],["2000-06-13",92],["2000-06-14",130],["2000-06-15",245],["2000-06-16",139],["2000-06-17",115],["2000-06-18",111],["2000-06-19",309],["2000-06-20",206],["2000-06-21",137],["2000-06-22",128],["2000-06-23",85],["2000-06-24",94],["2000-06-25",71],["2000-06-26",106],["2000-06-27",84],["2000-06-28",93],["2000-06-29",85],["2000-06-30",73],["2000-07-01",83],["2000-07-02",125],["2000-07-03",107],["2000-07-04",82],["2000-07-05",44],["2000-07-06",72],["2000-07-07",106],["2000-07-08",107],["2000-07-09",66],["2000-07-10",91],["2000-07-11",92],["2000-07-12",113],["2000-07-13",107],["2000-07-14",131],["2000-07-15",111],["2000-07-16",64],["2000-07-17",69],["2000-07-18",88],["2000-07-19",77],["2000-07-20",83],["2000-07-21",111],["2000-07-22",57],["2000-07-23",55],["2000-07-24",60]];

    var dateList = data.map(function (item) {
        return item[0];
    });
    var valueList = data.map(function (item) {
        return item[1];
    });

    airLineOption = {

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
            text: 'Gradient along the y axis'
        }],
        tooltip: {
            trigger: 'axis'
        },
        xAxis: [{
            data: dateList
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
            data: valueList
        }]
    };

    airLineGraphic.setOption(airLineOption);

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
