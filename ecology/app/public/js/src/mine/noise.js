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
    noiseBarDayData:[],
    noiseBarWeekData:[],
    noiseBarxAxisData:[],
    noiseBarxSameData:[],
    noiseBarxChainData:[],
    noiseBarInterval:null,
    noisePieData:[],
    currentNoisePieData:[],
    legendNoisePieData:[],
    dayTimeDataArray:[["2020/6/1",135],["2020/6/8",156],["2020/6/15",158],["2020/6/22",209],["2020/6/29",231],["2020/7/6",288],["2020/7/13",187],["2020/7/20",130],
      ["2020/7/27",121],["2020/8/3",100],["2020/8/10",98],["2020/8/17",79],["2020/8/24",65],["2020/8/31",57],["2020/9/7",46],["2020/9/14",43],["2020/9/21",56],
      ["2020/9/28",42],["2020/10/5",43],["2020/10/12",32]],
    currentDayTimeDataArray:[],
  },
  methods:{
    dayBtnclick:function(){
      if(this.noiseBarInterval != null){
        clearInterval(this.noiseBarInterval);
      }
      let interval = 0;
      let that = this;
      if(this.noiseBarDayData.length > 0){
        this.noiseBarInterval = setInterval(function(){
          that.noiseBarxAxisData = [];
          that.noiseBarxSameData = [];
          that.noiseBarxChainData = [];
          for (let index = interval; index < interval + 10; index++){
            let obj = that.noiseBarDayData[index];
            that.noiseBarxAxisData.push(obj.time);
            that.noiseBarxSameData.push(obj.same);
            that.noiseBarxChainData.push(obj.chain);
          }

          that.noiseBarOption.xAxis[0].data = that.noiseBarxAxisData;
          that.noiseBarOption.series[0].data = that.noiseBarxSameData;
          that.noiseBarOption.series[1].data = that.noiseBarxChainData;
          that.noiseBarGraphic.setOption(that.noiseBarOption);
          interval = interval + 10;
          if(interval == that.noiseBarDayData.length){
            interval = 0;
          }
        },1000);
      }
    },
    weekBtnClick:function(){
      if(this.noiseBarInterval != null){
        clearInterval(this.noiseBarInterval);
      }
      let interval = 0;
      let that = this;
      if(this.noiseBarWeekData.length > 0){
        this.noiseBarInterval = setInterval(function(){
          that.noiseBarxAxisData = [];
          that.noiseBarxSameData = [];
          that.noiseBarxChainData = [];
          for (let index = interval; index < interval + 10; index++){
            let obj = that.noiseBarWeekData[index];
            that.noiseBarxAxisData.push(obj.time);
            that.noiseBarxSameData.push(obj.same);
            that.noiseBarxChainData.push(obj.chain);
          }

          that.noiseBarOption.xAxis[0].data = that.noiseBarxAxisData;
          that.noiseBarOption.series[0].data = that.noiseBarxSameData;
          that.noiseBarOption.series[1].data = that.noiseBarxChainData;
          that.noiseBarGraphic.setOption(that.noiseBarOption);
          interval = interval + 10;
          if(interval == that.noiseBarWeekData.length){
            interval = 0;
          }
        },1000);
      }
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
                data: this.noiseBarxAxisData,
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
                data: this.noiseBarxSameData,
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
                data: this.noiseBarxChainData,
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

    this.noiseBarGraphic.setOption(this.noiseBarOption);

    //------------------------------------------------------------------------------------
    this.noiseLineGraphic = echarts.init(document.getElementById('noise-line'));

    var dateList = this.currentDayTimeDataArray.map(function (item) {
        return item[0];
    });
    var valueList = this.currentDayTimeDataArray.map(function (item) {
        return item[1];
    });

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

    this.noiseLineGraphic.setOption(this.noiseLineOption);
  },
  created() {
    //do something after creating vue instance
    let that = this;
    $.getJSON('/public/assets/5-1.json',function(data){
      that.noiseTableData = data;
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

    let noiseTableDataInterval = 0;
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

    },1000);

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

    this.noiseBarInterval = setInterval(function(){
        if(that.noiseBarDayData.length > 0){
          that.noiseBarxAxisData = [];
          that.noiseBarxSameData = [];
          that.noiseBarxChainData = [];
          for (let index = interval; index < interval + 10; index++){
            let obj = that.noiseBarDayData[index];
            that.noiseBarxAxisData.push(obj.time);
            that.noiseBarxSameData.push(obj.same);
            that.noiseBarxChainData.push(obj.chain);
          }

          that.noiseBarOption.xAxis[0].data = that.noiseBarxAxisData;
          that.noiseBarOption.series[0].data = that.noiseBarxSameData;
          that.noiseBarOption.series[1].data = that.noiseBarxChainData;
          that.noiseBarGraphic.setOption(that.noiseBarOption);
          interval = interval + 10;
          if(interval == that.noiseBarDayData.length){
            interval = 0;
          }
      }
    },1000);


    let noiseLineInterval = 0;
    setInterval(function(){
      if(that.dayTimeDataArray.length > 0){
        that.currentDayTimeDataArray = [];
        for(let index = noiseLineInterval; index < noiseLineInterval + 10; index++)
        {
          that.currentDayTimeDataArray.push(that.dayTimeDataArray[index]);
        }
        var dateList = that.currentDayTimeDataArray.map(function (item) {
            return item[0];
        });
        var valueList = that.currentDayTimeDataArray.map(function (item) {
            return item[1];
        });
        that.noiseLineOption.xAxis[0].data = dateList;
        that.noiseLineOption.series[0].data = valueList;
        that.noiseLineGraphic.setOption(that.noiseLineOption);
        noiseLineInterval = noiseLineInterval + 10;
        if(noiseLineInterval == that.dayTimeDataArray.length){
          noiseLineInterval = 0;
        }

      }
    },1000);
  }
})
