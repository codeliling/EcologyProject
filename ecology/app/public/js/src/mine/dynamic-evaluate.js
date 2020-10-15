var vueApp = new Vue({
  el: '#content',
  delimiters: ['${', '}'],
  data: {
    peopleCountData:[],
    currentPeopleData:0,
    areaCountData:[],
    currentAreaData:0,
    horBarGraphic1:{},
    horBarOption1:{},
    horBarGraphic2:{},
    horBarOption2:{},
    safetyProductData:[],
    currentSafetyProductData:0,
    safetyProductBarData:[],
    currentSafetyProductBarData:{},
    envData:[],
    currentEnvData:0,
    envBarData:[],
    currentEnvBarData:{},
    disasterData:[],
    currentDisasterData:0,
    alarmData:[],
    currentAlarmData:0,
    wasteData:[],
    currentWasteData:0,
    maintainData:[],
    currentMainData:0,
    frequency1:1000,
    frequency2:1000,
    radarGraphic:{},
    radarOption:{},
    radarData:[],
    currentRadarData:[93,90,88,81,87,85],

    weekData:['2020/10/10','2020/10/11','2020/10/12','2020/10/13','2020/10/14','2020/10/15','2020/10/16'],
    weekSafetyData:[92,93,94,92,94,93,95],
    weekEnvData:[89,88,90,92,88,90,89],
    weekDisasterData:[86,88,89,86,87,88,89],
    weekWasterData:[82,82,81,82,82,81,80],
    weekAfforestData:[87,87,87,87,87,87,87],
	  weekBuildingData:[86,84,85,85,86,85,86],

    monthData:['2020/10/1','2020/10/2','2020/10/3','2020/10/4','2020/10/5','2020/10/6','2020/10/7','2020/10/8','2020/10/9','2020/10/10','2020/10/11','2020/10/12','2020/10/13','2020/10/14','2020/10/15','2020/10/16'],
    monthSafetyData:[93,94,92,93,94,92,93,94,92,93,92,94,92,93,94,92],
    monthEnvData:[90,89,91,88,91,89,91,88,90,89,91,88,91,89,91,88],
    monthDisasterData:[88,87,86,89,88,87,86,88,87,86,89,88,87,86,88,87],
    monthWasterData:[81,80,81,82,81,80,81,82,81,80,81,82,81,80,81,82],
    monthAfforestData:[86,86,86,86,87,87,87,87,87,87,87,87,87,87,87,87],
    monthBuildingData:[85,84,86,85,84,86,85,84,86,85,84,86,85,84,86,85],

    yearData:['二○二○年一月','二○二○年二月','二○二○年三月','二○二○年四月','二○二○年五月','二○二○年六月','二○二○年七月','二○二○年八月','二○二○年九月','二○二○年十月'],
    yearSafetyData:[93,0,95,94,93,92,93,94,92,95],
    yearEnvData:[85,93,95,88,89,89,90,88,90,90],
    yearDisasterData:[83,84,85,85,87,86,88,88,87,88],
    yearWasterData:[77,77,78,79,80,80,81,82,82,82],
    yearAfforestData:[73,75,77,80,80,83,84,86,86,87],
    yearBuildingData:[82,82,82,82,83,83,84,84,85,86],
    tendencyBar:{},
    tendencyBarOption:{},

    safetyGaugeData:[],
    safetyGauge:{},
    safetyGaugeOption:{},

    evaluateReportData:[],
    currentEvaluateReportData:[],

    synthesisData:[
      {"item":"绿化覆盖","name":"鹰嘴界国家级自然保护区","score":97},
      {"item":"废料利用","name":"沅陵县盘古乡石家寨矿区磷矿","score":96},
      {"item":"绿化覆盖","name":"怀化中坡保护区","score":94},
      {"item":"灾害管理","name":"通道侗族自治县锅冲矿区硅石矿","score":93},
      {"item":"安全生产","name":"会同县淘金冲矿区","score":92}
    ]
  },
  methods: {
    dayBtnClick:function(){
      this.tendencyBarOption.xAxis.data = this.weekData;
      this.tendencyBarOption.series[0].data = this.weekSafetyData;
      this.tendencyBarOption.series[1].data = this.weekEnvData;
      this.tendencyBarOption.series[2].data = this.weekDisasterData;
      this.tendencyBarOption.series[3].data = this.weekWasterData;
      this.tendencyBarOption.series[4].data = this.weekAfforestData;
      this.tendencyBarOption.series[5].data = this.weekBuildingData;
      this.tendencyBar.setOption(this.tendencyBarOption);
    },
    monthBtnClick:function(){
      this.tendencyBarOption.xAxis.data = this.monthData;
      this.tendencyBarOption.series[0].data = this.monthSafetyData;
      this.tendencyBarOption.series[1].data = this.monthEnvData;
      this.tendencyBarOption.series[2].data = this.monthDisasterData;
      this.tendencyBarOption.series[3].data = this.monthWasterData;
      this.tendencyBarOption.series[4].data = this.monthAfforestData;
      this.tendencyBarOption.series[5].data = this.monthBuildingData;
      this.tendencyBar.setOption(this.tendencyBarOption);
    },
    yearBtnClick:function(){
      this.tendencyBarOption.xAxis.data = this.yearData;
      this.tendencyBarOption.series[0].data = this.yearSafetyData;
      this.tendencyBarOption.series[1].data = this.yearEnvData;
      this.tendencyBarOption.series[2].data = this.yearDisasterData;
      this.tendencyBarOption.series[3].data = this.yearWasterData;
      this.tendencyBarOption.series[4].data = this.yearAfforestData;
      this.tendencyBarOption.series[5].data = this.yearBuildingData;
      this.tendencyBar.setOption(this.tendencyBarOption);
    },
    backClick:function(){
      window.location.href = "/mine/";
    },
  },
  mounted() {
    let that = this;
    that.radarGraphic = echarts.init(document.getElementById('radar'));
    that.radarOption = {
        title: {
            text: ''
        },
        tooltip: {},
        legend: {
            icon:'circle',
            data: ['数据指标'],
            textStyle: {
                fontSize: 12,
                color: '#A5D9E1'
            }
        },
        color: ['#3074B1','#dfc73d','#E6951D','#A5D9E1','#B691C1', '#7D57A1'],
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#A5D9E1',
                    fontSize: 16, // 字体大小
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    padding: [3, 5]
                }
            },
            indicator: [
                { name: '安全生产', max: 100},
                { name: '灾害管理', max: 100},
                { name: '环境质量', max: 100},
                { name: '废料利用', max: 100},
                { name: '建筑维护', max: 100},
                { name: '绿化覆盖', max: 100}
            ]
        },
        series: [{
            name: '数据指标',
            type: 'radar',
            areaStyle: {normal: {color:'#3074B1'}},
            lineStyle:{normal: {color:'#A5D9E1'}},
            data: [
                {
                    value: that.currentRadarData,
                    name: '数据指标'
                }
            ]
        }]
    };
    that.radarGraphic.setOption(that.radarOption);

    //---------------------------------------------------------------------------
    that.safetyGauge = echarts.init(document.getElementById('safety-gauge'));
    that.safetyGaugeOption = {
        tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
        },
        visualMap: {
            type: 'piecewise',
            categories: [
                 '有待提升','达标', '良好', '优秀',
            ],
            inRange: {
                color: ['#e6951d','#dfc73d','#85c154', '#5FA731']
            },
            right:"10px",
            bottom:"50px",
            align:"left",
            textStyle: {
             color: '#A5D9E1'
            }
        },
        series: [
            {
                name: '指标',
                type: 'gauge',
                radius: '95%',
                detail: {formatter: '{value}'},
                axisLine: {            // 坐标轴线
                       lineStyle: {       // 属性lineStyle控制线条样式
                           color: [[0.3, '#e6951d'],[0.5, '#dfc73d'], [0.8, '#85c154'], [1, '#5FA731']]
                       }
                },
                title : {
                          textStyle: {
                              fontWeight: 'bold',
                              fontSize: 18,
                              fontStyle: 'normal',
                              color:"#A5D9E1"
                          },
                          padding: [10,10,10,10],
                      },
                data: [{value: 50, name: '评分'}]
            }
        ]
    };
    that.safetyGauge.setOption(that.safetyGaugeOption, true);

    //---------------------------------------------------------------------------

    that.tendencyBar = echarts.init(document.getElementById('tendency-bar'));
    that.tendencyBarOption = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            icon:'rectangle',
            data: ['安全生产', '环境质量', '灾害管理', '废料利用', '绿化覆盖','建筑维护'],
            textStyle: {
                fontSize: 12,
                color: '#A5D9E1'
            }
        },
        color:[
          '#DFC73D','#E6951D','#A5D9E1','#3074B1','#B691C1','#7D57A1',
        ],
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: that.weekData,
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
        },
        yAxis: {
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
        },
        series: [
            {
                name: '安全生产',
                type: 'line',
                stack: '总量',
                data: that.weekSafetyData,
            },
            {
                name: '环境质量',
                type: 'line',
                stack: '总量',
                data: that.weekEnvData,
            },
            {
                name: '灾害管理',
                type: 'line',
                stack: '总量',
                data: that.weekDisasterData,
            },
            {
                name: '废料利用',
                type: 'line',
                stack: '总量',
                data: that.weekWasterData,
            },
            {
                name: '绿化覆盖',
                type: 'line',
                stack: '总量',
                data: that.weekAfforestData
            },
            {
                name: '建筑维护',
                type: 'line',
                stack: '总量',
                data: that.weekBuildingData
            }
        ]
    };
    that.tendencyBar.setOption(that.tendencyBarOption);
    //--------------------------------------------------------------------------
    this.horBarGraphic1 = echarts.init(document.getElementById('hor-bar-graphic1'));
    this.horBarOption1 = {
        title: {
            text: '',
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
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['正常', '故障', '修理中'],
            textStyle: {
                fontSize: 12,
                color: '#A5D9E1'
            }
        },

        color:['#5FA731','#E6951D','#A5D9EE'],
        xAxis: {
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
              formatter:function(){
                return '';
              }
            },
            axisTick: {
                 show: false
             }
        },
        grid: {
          left: '2% ',
          right:'15% ',
        },
        yAxis: {
            type: 'category',
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
        },
        series: [
            {
                name: '正常',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: [this.currentSafetyProductBarData.worker]
            },
            {
                name: '故障',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: [this.currentSafetyProductBarData.fault]
            },
            {
                name: '修理中',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: [this.currentSafetyProductBarData.repaire]
            }
        ]
    };
    this.horBarGraphic1.setOption(this.horBarOption1);
    //--------------------------------------------------------------------------
    this.horBarGraphic2 = echarts.init(document.getElementById('hor-bar-graphic2'));
    this.horBarOption2 = {
        title: {
            text: '',
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
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
          left: '2% ',
          right:'15% ',
        },
        legend: {
            data: ['大气', '水质', '噪音', '粉尘']
        },
        color:['#7D57A1','#B691C1','#A5D9E1','#85C154'],

        xAxis: {
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
              formatter:function(){
                return '';
              }
            },
            axisTick: {
                 show: false
             }
        },
        yAxis: {
            type: 'category',
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
        },
        series: [
            {
                name: '大气',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: [this.currentEnvBarData.air]
            },
            {
                name: '水质',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: [this.currentEnvBarData.water]
            },
            {
                name: '噪音',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: [this.currentEnvBarData.noise]
            },
            {
                name: '粉尘',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: [this.currentEnvBarData.dust]
            }
        ]
    };
    this.horBarGraphic2.setOption(this.horBarOption2);


    //--------------------------------------------------------------------------
    $.getJSON('/public/assets/3-1-1.json',function(data){
      that.peopleCountData = data;
    });

    $.getJSON('/public/assets/3-1-2.json',function(data){
      that.areaCountData = data;
    });
    /*
    $.getJSON('/public/assets/3-1-3.json',function(data){
      console.log(data);
    });*/

    $.getJSON('/public/assets/3-2-1.json',function(data){
      that.safetyProductData = data;
    });

    $.getJSON('/public/assets/3-2-1-1.json',function(data){
      that.safetyProductBarData = data;
    });

    $.getJSON('/public/assets/3-2-2.json',function(data){
      that.envData = data;
    });

    $.getJSON('/public/assets/3-2-2-1.json',function(data){
      that.envBarData = data;
    });

    $.getJSON('/public/assets/3-2-3.json',function(data){
      that.disasterData = data;
    });

    $.getJSON('/public/assets/3-2-3-1.json',function(data){
      that.alarmData = data;
    });

    $.getJSON('/public/assets/3-2-4.json',function(data){
      that.wasteData = data;
    });

    $.getJSON('/public/assets/3-2-6.json',function(data){
      that.maintainData = data;
    });

    $.getJSON('/public/assets/3-3.json',function(data){
      that.radarData = data;
    });

    $.getJSON('/public/assets/3-5.json',function(data){
      that.safetyGaugeData = data;
    });

    $.getJSON('/public/assets/3-7.json',function(data){
      that.evaluateReportData = data;
    });
  },
  created() {
    let that = this;
    let peopleDataInterval = 0;
    setInterval(function(){
      if(that.peopleCountData.length > 0){
        that.currentPeopleData = that.peopleCountData[peopleDataInterval].count;
        peopleDataInterval = peopleDataInterval + 1;
        if(peopleDataInterval == that.peopleCountData.length){
          peopleDataInterval = 0;
        }
      }

    },that.frequency1);

    let areaDataInterval = 0;
    setInterval(function(){
      if(that.areaCountData.length > 0){
        that.currentAreaData = that.areaCountData[areaDataInterval].count;
        areaDataInterval = areaDataInterval + 1;
        if(areaDataInterval == that.areaCountData.length){
          areaDataInterval = 0;
        }
      }

    },that.frequency1);

    let spDataInterval = 0;
    setInterval(function(){
      if(that.safetyProductData.length > 0){
        that.currentSafetyProductData = that.safetyProductData[spDataInterval].score;
        spDataInterval = spDataInterval + 1;
        if(spDataInterval == that.safetyProductData.length){
          spDataInterval = 0;
        }
      }
    },that.frequency2);

    let spbDataInterval = 0;
    setInterval(function(){
      if(that.safetyProductBarData.length > 0){
        that.currentSafetyProductBarData = that.safetyProductBarData[spbDataInterval];
        that.horBarOption1.series[0].data = [that.currentSafetyProductBarData.worker / 1000];
        that.horBarOption1.series[1].data = [that.currentSafetyProductBarData.fault /1000];
        that.horBarOption1.series[2].data = [that.currentSafetyProductBarData.repaire /1000];
        that.horBarGraphic1.setOption(that.horBarOption1);
        spbDataInterval = spbDataInterval + 1;
        if(spbDataInterval == that.safetyProductBarData.length){
          spbDataInterval = 0;
        }
      }
    },that.frequency2);

    let envDataInterval = 0;
    setInterval(function(){
      if(that.envData.length > 0){
        that.currentEnvData = that.envData[envDataInterval].score;
        envDataInterval = envDataInterval + 1;
        if(envDataInterval == that.envData.length){
          envDataInterval = 0;
        }
      }
    },that.frequency2);

    let envbDataInterval = 0;
    setInterval(function(){
      if(that.envBarData.length > 0){
        that.currentEnvBarData = that.envBarData[envbDataInterval];
        that.horBarOption2.series[0].data = [that.currentEnvBarData.air];
        that.horBarOption2.series[1].data = [that.currentEnvBarData.water];
        that.horBarOption2.series[2].data = [that.currentEnvBarData.repaire];
        that.horBarOption2.series[3].data = [that.currentEnvBarData.dust];
        that.horBarGraphic2.setOption(that.horBarOption2);
        envbDataInterval = envbDataInterval + 1;
        if(envbDataInterval == that.envBarData.length){
          envbDataInterval = 0;
        }
      }
    },that.frequency2);

    // let disasterDataInterval = 0;
    // setInterval(function(){
    //   if(that.disasterData.length > 0){
    //     that.currentDisasterData = that.disasterData[disasterDataInterval].score;
    //     disasterDataInterval = disasterDataInterval + 1;
    //     if(disasterDataInterval == that.disasterData.length){
    //       disasterDataInterval = 0;
    //     }
    //   }
    // },that.frequency2);

    let alarmDataInterval = 0;
    setInterval(function(){
      if(that.alarmData.length > 0){
        that.currentAlarmData = that.alarmData[alarmDataInterval].info;
        alarmDataInterval = alarmDataInterval + 1;
        if(alarmDataInterval == that.alarmData.length){
          alarmDataInterval = 0;
        }
      }
    },that.frequency2);

    // let wasteDataInterval = 0;
    // setInterval(function(){
    //   if(that.wasteData.length > 0){
    //     that.currentWasteData = that.wasteData[wasteDataInterval].score;
    //     wasteDataInterval = wasteDataInterval + 1;
    //     if(wasteDataInterval == that.wasteData.length){
    //       wasteDataInterval = 0;
    //     }
    //   }
    // },that.frequency2);

    // let maintainDataInterval = 0;
    // setInterval(function(){
    //   if(that.maintainData.length > 0){
    //     that.currentMainData = that.maintainData[maintainDataInterval].score;
    //     maintainDataInterval = maintainDataInterval + 1;
    //     if(maintainDataInterval == that.maintainData.length){
    //       maintainDataInterval = 0;
    //     }
    //   }
    // },that.frequency2);

    let radarDataInterval = 0;
    setInterval(function(){
      if(that.radarData.length > 0){
        let obj = that.radarData[radarDataInterval];
        that.currentRadarData = [];
        that.currentRadarData.push(obj.safety);
        that.currentRadarData.push(obj.disaster);
        that.currentRadarData.push(obj.env);
        that.currentRadarData.push(obj.waste);
        that.currentRadarData.push(obj.building);
        that.currentRadarData.push(obj.afforest);
        that.radarOption.series[0].data[0].value = that.currentRadarData;
        that.radarGraphic.setOption(that.radarOption);
        radarDataInterval = radarDataInterval + 1;
        if(radarDataInterval == that.radarData.length){
          radarDataInterval = 0;
        }
      }
    },that.frequency2);

    let safetyGaugeDataInterval = 0;
    setInterval(function () {
      if(that.safetyGaugeData.length > 0){
        that.safetyGaugeOption.series[0].data[0].value = that.safetyGaugeData[safetyGaugeDataInterval].score;
        that.safetyGauge.setOption(that.safetyGaugeOption, true);
        safetyGaugeDataInterval = safetyGaugeDataInterval + 1;
        if(safetyGaugeDataInterval == that.safetyGaugeData.length){
          safetyGaugeDataInterval = 0;
        }
      }
    },that.frequency2);

    let evaluateReportInterval = 0;

    setInterval(function(){
      if(that.evaluateReportData.length > 0){
        that.currentEvaluateReportData = [];
        that.currentEvaluateReportData.push(that.evaluateReportData[evaluateReportInterval]);
        that.currentEvaluateReportData.push(that.evaluateReportData[evaluateReportInterval + 1]);
        that.currentEvaluateReportData.push(that.evaluateReportData[evaluateReportInterval + 2]);
        that.currentEvaluateReportData.push(that.evaluateReportData[evaluateReportInterval + 3]);
        that.currentEvaluateReportData.push(that.evaluateReportData[evaluateReportInterval + 4]);
        that.currentEvaluateReportData.push(that.evaluateReportData[evaluateReportInterval + 5]);
        evaluateReportInterval = evaluateReportInterval + 10;
        if(evaluateReportInterval == that.evaluateReportData.length){
          evaluateReportInterval = 0;
        }
      }

    },that.frequency2);
  }
})
