var app = new Vue({
  el: '#content',
  delimiters: ['${', '}'],
  data: {
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
    dayBtnClick:function(){
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
    var waterPieGraphic = echarts.init(document.getElementById('water-pie'));
    waterPieOption = {
      title: {
          text: '质量概览',
          textStyle: {
               fontFamily: "sans-serif", // 主标题文字的字体系列。
               fontSize: 15, // 字体大小
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
            right: 10,
            data: ['I-II类', 'III类', 'IV类', 'V类', '劣V类']
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
                data: this.waterBarAddressData,
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
            data: dateList,
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
            data: valueList,
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
