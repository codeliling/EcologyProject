var app = new Vue({
  el: '#content',
  delimiters: ['${', '}'],
  data: {
    data1:[],
    dustTableData:[],

    dustBarGraphic:{},
    dustBarOption:{},
    dustBarData:{},
    dustBarAddressData:[],
    dustBarSeriesSameData:[],
    dustBarSeriesChainData:[],

    yearxAxis:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月'],
    yearData:[
      {"name":"PM1","value":[33,28,37,32,29,22,41,35,28,26]},
      {"name":"PM2.5","value":[39,31,35,54,69,42,40,74,52,41]},
      {"name":"PM10","value":[62,59,48,52,70,88,62,63,76,70]},
      {"name":"TSP","value":[121,132,116,147,185,162,150,141,183,109]},
      {"name":"AQI","value":[50,63,80,82,93,78,56,48,50,47]}
    ],
    monthxAxis:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
    monthData:[
      {"name":"PM1","value":[33,28,37,32,29,22,41,35,28,26,22,32,29,28,26,28,35]},
      {"name":"PM2.5","value":[39,31,35,54,69,42,40,74,52,41,42,54,69,31,41,31,74]},
      {"name":"PM10","value":[62,59,48,52,70,88,62,63,76,70,88,52,70,59,70,59,63]},
      {"name":"TSP","value":[121,132,116,147,185,162,150,141,183,109,162,147,185,132,109,132,141]},
      {"name":"AQI","value":[50,63,80,82,93,78,56,48,50,47,78,82,93,63,47,63,48]},
    ],
    weekxAxis:[1,2,3,4,5,6,7],
    weekData:[
      {"name":"PM1","value":[26,41,35,32,28,29,28]},
      {"name":"PM2.5","value":[41,40,74,54,52,69,52]},
      {"name":"PM10","value":[70,62,63,52,76,70,76]},
      {"name":"TSP","value":[109,150,141,147,183,185,183]},
      {"name":"AQI","value":[47,56,48,82,50,93,50]},
    ],
    lineInterval:null,
    dustLineGraphic:{},
    dustLineOption:{},
  },
  methods:{
    yearBtnclick:function(){
      if(this.lineInterval != null){
        clearInterval(this.lineInterval);
      }

      let dustLineDataInterval = 0;
      this.lineInterval = setInterval(function(){
        that.dustLineOption.xAxis[0].data = that.yearxAxis;
        that.dustLineOption.series[0].data = that.yearData[dustLineDataInterval].value;
        that.dustLineOption.title[0].subtext = that.yearData[dustLineDataInterval].name;
        that.dustLineGraphic.setOption(that.dustLineOption);
        dustLineDataInterval = dustLineDataInterval + 1;
        if(dustLineDataInterval == that.yearData.length){
            dustLineDataInterval = 0;
        }
      },1000);
    },
    monthBtnclick:function(){
      if(this.lineInterval != null){
        clearInterval(this.lineInterval);
      }

      let dustLineDataInterval = 0;
      this.lineInterval = setInterval(function(){
        that.dustLineOption.xAxis[0].data = that.weekxAxis;
        that.dustLineOption.series[0].data = that.monthData[dustLineDataInterval].value;
        that.dustLineOption.title[0].subtext = that.monthData[dustLineDataInterval].name;
        that.dustLineGraphic.setOption(that.dustLineOption);
        dustLineDataInterval = dustLineDataInterval + 1;
        if(dustLineDataInterval == that.monthData.length){
          dustLineDataInterval = 0;
        }
      },1000);
    },
    weekBtnClick:function(){
      if(this.lineInterval != null){
        clearInterval(this.lineInterval);
      }

      let dustLineDataInterval = 0;
      this.lineInterval = setInterval(function(){
        that.dustLineOption.xAxis[0].data = that.yearxAxis;
        that.dustLineOption.series[0].data = that.weekData[dustLineDataInterval].value;
        that.dustLineOption.title[0].subtext = that.weekData[dustLineDataInterval].name;
        that.dustLineGraphic.setOption(that.dustLineOption);
        dustLineDataInterval = dustLineDataInterval + 1;
        if(dustLineDataInterval == that.weekData.length){
          dustLineDataInterval = 0;
        }
      },1000);
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
    var dustPieGraphic = echarts.init(document.getElementById('dust-pie'));
    dustPieOption = {
      title: {
          text: '粉尘概况',
      },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 10,
            data: ['一级', '二级', '三级', '四级', '五级']
        },
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
                    {value: 14, name: '一级'},
                    {value: 77, name: '二级'},
                    {value: 9, name: '三级'},
                    {value: 0, name: '四级'},
                    {value: 0, name: '五级'}
                ]
            }
        ]
    };

    dustPieGraphic.setOption(dustPieOption);

    //---------------------------------------------------------------------------
    this.dustBarGraphic = echarts.init(document.getElementById('dust-bar'));
    this.dustBarOption = {
        title: {
            text: '粉尘同比环比图',
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
                data: this.dustBarAddressData
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
                data: this.dustBarSeriesSameData,
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
                data: this.dustBarSeriesChainData,
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

    this.dustBarGraphic.setOption(this.dustBarOption);

    //------------------------------------------------------------------------------------
    this.dustLineGraphic = echarts.init(document.getElementById('dust-line'));
    this.dustLineOption = {

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
            text: '粉尘污染走势'
        }],
        tooltip: {
            trigger: 'axis'
        },
        xAxis: [{
            data: this.yearxAxis
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
            data: this.yearData[0].value
        }]
    };

    this.dustLineGraphic.setOption(this.dustLineOption);
  },
  created() {
    //do something after creating vue instance
    let that = this;
    $.getJSON('/public/assets/6-1.json',function(data){
      that.dustTableData = data;
    });
    let dustTableDataInterval = 0;
    setInterval(function(){
      if(that.dustTableData.length > 0){
        that.data1 = [];
        that.data1.push(that.dustTableData[dustTableDataInterval]);
        that.data1.push(that.dustTableData[dustTableDataInterval + 1]);
        that.data1.push(that.dustTableData[dustTableDataInterval + 2]);
        dustTableDataInterval = dustTableDataInterval + 3;
        if(dustTableDataInterval == that.dustTableData.length){
          dustTableDataInterval = 0;
        }
      }

    },1000);

    $.getJSON('/public/assets/6-3.json',function(data){
      that.dustBarData = data;
    });
    let dustBarDataInterval = 0;
    setInterval(function(){
      if(that.dustBarData.length > 0){
        that.dustBarAddressData = [];
        that.dustBarSeriesSameData = [];
        that.dustBarSeriesChainData = [];
        for(let index = dustBarDataInterval; index < dustBarDataInterval + 7; index++){
          that.dustBarAddressData.push(that.dustBarData[index].name);
          that.dustBarSeriesSameData.push(0);
          that.dustBarSeriesChainData.push(that.dustBarData[index].value);
        }
        that.dustBarOption.xAxis[0].data = that.dustBarAddressData;
        that.dustBarOption.series[0].data = that.dustBarSeriesSameData;
        that.dustBarOption.series[1].data = that.dustBarSeriesChainData;
        that.dustBarGraphic.setOption(that.dustBarOption);
        dustBarDataInterval = dustBarDataInterval + 7;
        if(dustBarDataInterval == that.dustBarData.length){
          dustBarDataInterval = 0;
        }
      }

    },1000);

    let dustLineDataInterval = 0;
    this.lineInterval = setInterval(function(){
      that.dustLineOption.xAxis[0].data = that.yearxAxis;
      that.dustLineOption.series[0].data = that.yearData[dustLineDataInterval].value;
      that.dustLineOption.title[0].subtext = that.yearData[dustLineDataInterval].name;
      that.dustLineGraphic.setOption(that.dustLineOption);
      dustLineDataInterval = dustLineDataInterval + 1;
      if(dustLineDataInterval == that.yearData.length){
        dustLineDataInterval = 0;
      }

    },1000);
  }
})
