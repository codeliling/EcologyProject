var app = new Vue({
  el: '#content',
  delimiters: ['${', '}'],
  data: {
    data1:[],
    dustTableData:[],

    dustBarGraphic:{},
    dustBarOption:{},
    dustBarData:[
      {"name":"西澳官庄金矿","value":"-16"},
      {"name":"沃溪金锑钨矿","value":"-12"},
      {"name":"汊桐树面金矿","value":6},
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
      {"name":"通道锅冲硅石矿","value":23}
    ],
    dustBarAddressData:[],
    dustBarSeriesSameData:[],
    dustBarSeriesChainData:[],

    yearxAxis:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月'],
    yearData:[33,32,35,32,31,34,32,31,34,32],
    monthxAxis:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,],
    monthData:[33,32,35,32,31,34,32,31,34,32,33,32,35,32,31],
    weekxAxis:[],
    weekData:[33,32,35,32,31,34,32],
    lineInterval:null,
    dustLineData:[
      {'time':this.yearxAxis,'data':this.yearData},
      {'time':this.monthxAxis,'data':this.monthData},
      {'time':this.weekxAxis,'data':this.weekData},
    ],
    dustLineGraphic:{},
    dustLineOption:{},
  },
  methods:{
    startLineData:function(){
      let dustLineDataInterval = 0;
      let that = this;
      this.lineInterval = setInterval(function(){
        let obj = that.dustLineData[dustLineDataInterval];
        that.dustLineOption.xAxis[0].data = obj.time;
        that.dustLineOption.series[0].data = obj.data;
        that.dustLineGraphic.setOption(that.dustLineOption);
        dustLineDataInterval = dustLineDataInterval + 1;
        if(dustLineDataInterval == that.dustLineData.length){
            dustLineDataInterval = 0;
        }
      },30000);
    },
    yearBtnclick:function(){
      if(this.lineInterval != null){
        clearInterval(this.lineInterval);
      }
      this.dustLineOption.xAxis[0].data = this.yearxAxis;
      this.dustLineOption.series[0].data = this.yearData;
      this.dustLineGraphic.setOption(this.dustLineOption);
      this.startLineData();
    },
    monthBtnclick:function(){
      if(this.lineInterval != null){
        clearInterval(this.lineInterval);
      }

      this.dustLineOption.xAxis[0].data = this.monthxAxis;
      this.dustLineOption.series[0].data = this.monthData;
      this.dustLineGraphic.setOption(this.dustLineOption);
      this.startLineData();
    },
    weekBtnClick:function(){
      if(this.lineInterval != null){
        clearInterval(this.lineInterval);
      }

      this.dustLineOption.xAxis[0].data = this.weekxAxis;
      this.dustLineOption.series[0].data = this.weekData;
      this.dustLineGraphic.setOption(this.dustLineOption);
      this.startLineData();
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
  },
  mounted() {
    for(let i = 6; i >= 0; i-- ){
      this.weekxAxis.push(this.getFormatDateBefore(i));
    }

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
            data: ['增长率'],
            textStyle: {
                fontSize: 12,
                color: '#A5D9E1'
            }
        },
        color:['#7D57A1'],
        calculable: true,
        xAxis: [
            {
                type: 'category',
                data: ["西澳官庄金矿","沃溪金锑钨矿","汊桐树面金矿"],
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
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
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
        grid: [{
           left: '10%',
           bottom: '30px',
           top: '30px',
           right: '10%'
       }],
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
            min:0,
            max:60,
            interval:15,
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
            data: this.yearData,
            markLine: {
               data: [
                   {type: 'average', name: '平均值'}
               ]
           },
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
      that.data1.push(that.dustTableData[dustTableDataInterval]);
      that.data1.push(that.dustTableData[dustTableDataInterval + 1]);
      that.data1.push(that.dustTableData[dustTableDataInterval + 2]);
    });
    let dustTableDataInterval = 3;
    setInterval(function(){
      if(that.dustTableData.length > 3){
        that.data1 = [];
        that.data1.push(that.dustTableData[dustTableDataInterval]);
        that.data1.push(that.dustTableData[dustTableDataInterval + 1]);
        that.data1.push(that.dustTableData[dustTableDataInterval + 2]);
        dustTableDataInterval = dustTableDataInterval + 3;
        if(dustTableDataInterval == that.dustTableData.length){
          dustTableDataInterval = 0;
        }
      }

    },30000);

    // $.getJSON('/public/assets/6-3.json',function(data){
    //   that.dustBarData = data;
    // });

    let dustBarDataInterval = 3;
    setInterval(function(){
      if(that.dustBarData.length > 0){
        that.dustBarOption.xAxis[0].data = [];
        that.dustBarOption.series[0].data = [];
        let list = that.dustBarData.slice(dustBarDataInterval,dustBarDataInterval + 3);
        for (let i = dustBarDataInterval; i < dustBarDataInterval + 3; i++){
          let obj = that.dustBarData[i];
          that.dustBarOption.xAxis[0].data.push(obj.name);
          that.dustBarOption.series[0].data.push(obj.value);
        }
        that.dustBarGraphic.setOption(that.dustBarOption);
        dustBarDataInterval = dustBarDataInterval + 3;
        if(dustBarDataInterval == that.dustBarData.length){
          dustBarDataInterval = 0;
        }
      }

    },30000);


    this.startLineData();
  }
})
