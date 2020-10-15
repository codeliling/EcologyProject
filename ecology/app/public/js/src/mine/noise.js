var app = new Vue({
  el: '#content',
  delimiters: ['${', '}'],
  data: {
    noiseTableData:[],
    data1:[],
    noiseLineGraphic:{},
    noiseLineOption:{},
    noiseBarGraphic:{},
    noiseBarOption:{},
    noiseLineInterval:null,
    noisePieData:[],
    currentNoisePieData:[],
    legendNoisePieData:[],
    noiseBarData:[
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

    yearxAxis:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月'],
    yearData:[89,90,91,92,90,89,89,90,90,91],
    monthxAxis:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
    monthData:[90,90,89,93,94,90,91,89,89,90,89,93,94,90,89],
    weekxAxis:['2020/10/9','2020/10/10','2020/10/11','2020/10/12','2020/10/13','2020/10/14','2020/10/15'],
    weekData:[90,89,93,94,90,89,91],
    noiseLineData:[
      {'time':this.yearxAxis,'data':this.yearData},
      {'time':this.monthxAxis,'data':this.monthData},
      {'time':this.weekxAxis,'data':this.weekData},
    ],
  },
  methods:{
    startLineData:function(){
      let noiseLineDataInterval = 0;
      let that = this;
      this.noiseLineInterval = setInterval(function(){
        let obj = that.noiseLineData[noiseLineDataInterval];
        that.noiseLineOption.xAxis[0].data = obj.time;
        that.noiseLineOption.series[0].data = obj.data;
        that.noiseLineGraphic.setOption(that.noiseLineOption);
        noiseLineDataInterval = noiseLineDataInterval + 1;
        if(noiseLineDataInterval == that.noiseLineData.length){
            noiseLineDataInterval = 0;
        }
      },30000);
    },
    dayBtnClick:function(){
      if(this.noiseLineInterval != null){
        clearInterval(this.noiseLineInterval);
      }
      this.noiseLineOption.xAxis[0].data = this.weekxAxis;
      this.noiseLineOption.series[0].data = this.weekData;
      this.noiseLineGraphic.setOption(this.noiseLineOption);
    },
    monthBtnClick:function(){
      if(this.noiseLineInterval != null){
        clearInterval(this.noiseLineInterval);
      }
      this.noiseLineOption.xAxis[0].data = this.monthxAxis;
      this.noiseLineOption.series[0].data = this.monthData;
      this.noiseLineGraphic.setOption(this.noiseLineOption);
    },
    yearBtnClick:function(){
      if(this.noiseLineInterval != null){
        clearInterval(this.noiseLineInterval);
      }
      this.noiseLineOption.xAxis[0].data = this.yearxAxis;
      this.noiseLineOption.series[0].data = this.yearData;
      this.noiseLineGraphic.setOption(this.noiseLineOption);
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
    this.noisePieGraphic = echarts.init(document.getElementById('noise-pie'));
    this.noisePieOption = {

        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} '
        },

        legend: {
            orient: 'vertical',
            left: 10,
            data: this.legendNoisePieData,
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
                        fontSize:22
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
                        fontSize:18
                    }
            }
        ],
        series: [
            {

                name: '',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,

                labelLine: {
                    show: false
                },
                data: this.currentNoisePieData

            }
        ]
    };

    this.noisePieGraphic.setOption(this.noisePieOption);

    //---------------------------------------------------------------------------
    this.noiseBarGraphic = echarts.init(document.getElementById('noise-bar'));
    this.noiseBarOption = {

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
              data: [-14,-29, -13],
              markPoint: {
                  data: [
                      {type: 'max', name: '最大值'},
                      {type: 'min', name: '最小值'}
                  ]
              }
            }
        ]
    };

    this.noiseBarGraphic.setOption(this.noiseBarOption);

    //------------------------------------------------------------------------------------
    this.noiseLineGraphic = echarts.init(document.getElementById('noise-line'));

    this.noiseLineOption = {

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
          min:80,
          max:100,
          interval:5,
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

    this.noiseLineGraphic.setOption(this.noiseLineOption);
  },
  created() {
    //do something after creating vue instance
    let that = this;
    $.getJSON('/public/assets/5-1.json',function(data){
      that.noiseTableData = data;
      that.data1.push(that.noiseTableData[noiseTableDataInterval]);
      that.data1.push(that.noiseTableData[noiseTableDataInterval + 1]);
      that.data1.push(that.noiseTableData[noiseTableDataInterval + 2]);
    });

    $.getJSON('/public/assets/5-2.json',function(data){
      that.noisePieData = data;
    });

    $.getJSON('/public/assets/5-3-1.json',function(data){
      that.noiseBarDayData = data;
    });

    $.getJSON('/public/assets/5-3-2.json',function(data){
      that.noiseBarWeekData = data;
    });

    let noiseTableDataInterval = 3;
    setInterval(function(){
      if(that.noiseTableData.length > 0){
        that.data1 = [];
        that.data1.push(that.noiseTableData[noiseTableDataInterval]);
        that.data1.push(that.noiseTableData[noiseTableDataInterval + 1]);
        that.data1.push(that.noiseTableData[noiseTableDataInterval + 2]);
        noiseTableDataInterval = noiseTableDataInterval + 3;
        if(noiseTableDataInterval == that.noiseTableData.length){
          noiseTableDataInterval = 0;
        }
      }

    },30000);

    let noisePieDataInterval = 0;
    setInterval(function(){
      if(that.noisePieData.length > 0){
        that.currentNoisePieData = [];
        that.legendNoisePieData = [],
        that.currentNoisePieData.push(that.noisePieData[noisePieDataInterval]);
        that.legendNoisePieData.push(that.noisePieData[noisePieDataInterval].name);
        that.currentNoisePieData.push(that.noisePieData[noisePieDataInterval + 1]);
        that.legendNoisePieData.push(that.noisePieData[noisePieDataInterval + 1].name);
        that.currentNoisePieData.push(that.noisePieData[noisePieDataInterval + 2]);
        that.legendNoisePieData.push(that.noisePieData[noisePieDataInterval + 2].name);
        that.noisePieOption.legend.data = that.legendNoisePieData;
        that.noisePieOption.series[0].data = that.currentNoisePieData;
        that.noisePieGraphic.setOption(that.noisePieOption);
        noisePieDataInterval = noisePieDataInterval + 3;
        if(noisePieDataInterval == that.noisePieData.length){
          noisePieDataInterval = 0;
        }
      }
    },1000);

    let interval = 0;

    let noiseBarInterval = 3;
    setInterval(function(){
      if(that.noiseBarData.length > 0){
        that.noiseBarOption.xAxis[0].data = [];
        that.noiseBarOption.series[0].data = [];
        let list = that.noiseBarData.slice(noiseBarInterval,noiseBarInterval + 3);
        for (let i = noiseBarInterval; i < noiseBarInterval + 3; i++){
          let obj = that.noiseBarData[i];
          that.noiseBarOption.xAxis[0].data.push(obj.name);
          that.noiseBarOption.series[0].data.push(obj.value);
        }
        that.noiseBarGraphic.setOption(that.noiseBarOption);
        noiseBarInterval = noiseBarInterval + 3;
        if(noiseBarInterval == that.noiseBarData.length){
          noiseBarInterval = 0;
        }
      }

    },30000);

    this.startLineData();
  }
})
