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
          title: '目标值（I类-V类）',
          key: 'indicator1'
        },
        {
          title: '水质类别（I类-V类）',
          key: 'indicator2'
        },
        {
          title: '水质类别（I类-V类）',
          key: 'indicator3'
        },
        {
          title: '重金属含量	NH3-N',
          key: 'indicator4'
        },
        {
          title: '酸碱度（pH）',
          key: 'indicator5'
        },
        {
          title: '化学需氧量（COD）',
          key: 'indicator6'
        },
        {
          title: '总磷（TP）',
          key: 'indicator7'
        },
        {
          title: '总氮（TN）',
          key: 'indicator8'
        },
        {
          title: '高锰酸盐指数',
          key: 'indicator9'
        },
        {
          title: '监测时间',
          key: 'time'
        }
    ],
    data1:[],
    waterTableData:[],
    waterLineGraphic:{},
    waterLineOption:{},
    dayTimeDataArray:[["星期天(11号)",83],["星期一(12号)",81],["星期二(13号)",86],["星期三(14号)",88],["星期四(15号)",90],["星期五(16号)",83],["星期六(17号)",85]],
    monthTimeDataArray:[["1号",83],["2号",84],["3号",88],["4号",87],["5号",86],["6号",87],["7号",90],["8号",89],["9号",84],["10号",84],["11号",83],["12号",81],["13号",86],["14号",88],["15号",90],["16号",83],["17号",85]],
    yearTimeDataArray:[["1月",82],["2月",81],["3月",82],["4月",82],["5月",84],["6月",83],["7月",84],["8月",84],["9月",85],["10月",86]],
    waterBarGraphic:{},
    waterBarOption:{},
    waterBarAddressData:[],
    waterBarChainData:[],
    currentWaterBarChainData:[],
  },
  methods:{
    dayBtnclick:function(){
      let dateList = this.dayTimeDataArray.map(function (item) {
          return item[0];
      });
      let valueList = this.dayTimeDataArray.map(function (item) {
          return item[1];
      });
      this.waterLineOption.xAxis[0].data = dateList;
      this.waterLineOption.series[0].data = valueList;
      this.waterLineGraphic.setOption(this.waterLineOption);
    },
    monthBtnClick:function(){
      let dateList = this.monthTimeDataArray.map(function (item) {
          return item[0];
      });
      let valueList = this.monthTimeDataArray.map(function (item) {
          return item[1];
      });
      this.waterLineOption.xAxis[0].data = dateList;
      this.waterLineOption.series[0].data = valueList;
      this.waterLineGraphic.setOption(this.waterLineOption);
    },
    yearBtnClick:function(){
      let dateList = this.yearTimeDataArray.map(function (item) {
          return item[0];
      });
      let valueList = this.yearTimeDataArray.map(function (item) {
          return item[1];
      });
      this.waterLineOption.xAxis[0].data = dateList;
      this.waterLineOption.series[0].data = valueList;
      this.waterLineGraphic.setOption(this.waterLineOption);
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
    var waterPieGraphic = echarts.init(document.getElementById('water-pie'));
    waterPieOption = {

        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 10,
            data: ['I-II类', 'III类', 'IV类', 'V类', '劣V类']
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
                        text:"204",
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
                    {value: 76.19, name: 'I-II类'},
                    {value: 19.05, name: 'III类'},
                    {value: 4.76, name: 'IV类'},
                    {value: 0, name: 'V类'},
                    {value: 0, name: '劣V类'}
                ]
            }
        ]
    };

    waterPieGraphic.setOption(waterPieOption);

    //---------------------------------------------------------------------------
    this.waterBarGraphic = echarts.init(document.getElementById('water-bar'));
    this.waterBarOption = {
        title: {
            text: '水质同比环比结构图',
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['同比', '环比']
        },
        toolbox: {
            show: true,
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                data: this.waterBarAddressData,
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '同比',
                type: 'bar',
                data: [0,0,0,0,0,0,0],
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
                data: this.currentBarChainData,
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
            }
        ]
    };

    this.waterBarGraphic.setOption(this.waterBarOption);

    //------------------------------------------------------------------------------------
    this.waterLineGraphic = echarts.init(document.getElementById('water-line'));


    var dateList = this.dayTimeDataArray.map(function (item) {
        return item[0];
    });
    var valueList = this.dayTimeDataArray.map(function (item) {
        return item[1];
    });

    this.waterLineOption = {

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

    this.waterLineGraphic.setOption(this.waterLineOption);

  },
  created() {
    //do something after creating vue instance
    let that = this;
    $.getJSON('/public/assets/4-1.json',function(data){
      that.waterTableData = data;
    });

    let waterTableDataInterval = 0;
    setInterval(function(){
      if(that.waterTableData.length > 0){
        that.data1 = [];
        that.data1.push(that.waterTableData[waterTableDataInterval]);
        that.data1.push(that.waterTableData[waterTableDataInterval + 1]);
        that.data1.push(that.waterTableData[waterTableDataInterval + 2]);
        waterTableDataInterval = waterTableDataInterval + 3;
        if(waterTableDataInterval == that.waterTableData.length){
          waterTableDataInterval = 0;
        }
      }

    },1000);

    $.getJSON('/public/assets/4-3.json',function(data){
      that.waterBarChainData = data;
    });

    let waterBarChainDataInterval = 0;
    setInterval(function(){
      if(that.waterBarChainData.length > 0){
        that.currentBarChainData = [];
        that.waterBarAddressData = [];
        that.waterBarAddressData.push(that.waterBarChainData[waterBarChainDataInterval].name);
        that.currentBarChainData.push(that.waterBarChainData[waterBarChainDataInterval].percent);
        that.waterBarAddressData.push(that.waterBarChainData[waterBarChainDataInterval + 1].name);
        that.currentBarChainData.push(that.waterBarChainData[waterBarChainDataInterval + 1].percent);
        that.waterBarAddressData.push(that.waterBarChainData[waterBarChainDataInterval + 2].name);
        that.currentBarChainData.push(that.waterBarChainData[waterBarChainDataInterval + 2].percent);
        that.waterBarAddressData.push(that.waterBarChainData[waterBarChainDataInterval + 3].name);
        that.currentBarChainData.push(that.waterBarChainData[waterBarChainDataInterval + 3].percent);
        that.waterBarAddressData.push(that.waterBarChainData[waterBarChainDataInterval + 4].name);
        that.currentBarChainData.push(that.waterBarChainData[waterBarChainDataInterval + 4].percent);
        that.waterBarAddressData.push(that.waterBarChainData[waterBarChainDataInterval + 5].name);
        that.currentBarChainData.push(that.waterBarChainData[waterBarChainDataInterval + 5].percent);
        that.waterBarAddressData.push(that.waterBarChainData[waterBarChainDataInterval + 6].name);
        that.currentBarChainData.push(that.waterBarChainData[waterBarChainDataInterval + 6].percent);
        console.log(that.currentBarChainData);
        that.waterBarOption.xAxis[0].data = that.waterBarAddressData;
        that.waterBarOption.series[1].data = that.currentBarChainData;
        that.waterBarGraphic.setOption(that.waterBarOption);
        waterBarChainDataInterval = waterBarChainDataInterval + 7;
        if(waterBarChainDataInterval == that.waterBarChainData.length){
          waterBarChainDataInterval = 0;
        }
      }

    },1000);
  }
})
