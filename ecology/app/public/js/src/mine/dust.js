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
    backClick:function(){

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
            title: {
              text: '',
              subtext: '',
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
                    color: ['#3175B1', '#A5D8E1', '#F5F5F5']
                },
                textStyle: {
                  color: '#A5D9E1'
                },
            },
            series: [
                {
                    name: '',
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
    var dustPieGraphic = echarts.init(document.getElementById('dust-pie'));
    dustPieOption = {

        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            right: 10,
            data: ['一级', '二级', '三级', '四级', '五级']
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
                        text:"204",
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
        xAxis: [
            {
                type: 'category',
                data: this.dustBarAddressData,
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
        tooltip: {
            trigger: 'axis'
        },
        xAxis: [{
            data: this.yearxAxis,
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
            splitLine: {show: false},
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
            data: this.yearData[0].value,
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
