var app = new Vue({
  el: '#content',
  delimiters: ['${', '}'],
  data: {
    //值班信息数据
    dutyData:[
      {"count":126000,"worker":112500,"leader":11232,"researcher":2241},
      {"count":125979,"worker":112458,"leader":11236,"researcher":2245},
      {"count":125919,"worker":112433,"leader":11223,"researcher":2238},
      {"count":125877,"worker":112400,"leader":11210,"researcher":2235},
      {"count":125940,"worker":112442,"leader":11231,"researcher":2237},
      {"count":125961,"worker":112447,"leader":11229,"researcher":2246},
      {"count":126003,"worker":112500,"leader":11231,"researcher":2242},
      {"count":125963,"worker":112448,"leader":11231,"researcher":2247},
      {"count":126023,"worker":112500,"leader":11235,"researcher":2250},
      {"count":125973,"worker":112466,"leader":11243,"researcher":2239},
      {"count":126036,"worker":112489,"leader":11247,"researcher":2250},
      {"count":126063,"worker":112500,"leader":11250,"researcher":2250},
      {"count":126000,"worker":112500,"leader":11235,"researcher":2244},
      {"count":125979,"worker":112458,"leader":11236,"researcher":2245},
      {"count":125919,"worker":112433,"leader":11223,"researcher":2238},
      {"count":125877,"worker":112400,"leader":11210,"researcher":2235},
      {"count":125940,"worker":112442,"leader":11231,"researcher":2237},
      {"count":125961,"worker":112447,"leader":11229,"researcher":2246},
      {"count":126003,"worker":112500,"leader":11231,"researcher":2242},
      {"count":125963,"worker":112448,"leader":11231,"researcher":2247},
      {"count":126023,"worker":112500,"leader":11235,"researcher":2250},
      {"count":125973,"worker":112466,"leader":11243,"researcher":2239},
      {"count":126036,"worker":112489,"leader":11247,"researcher":2250},
      {"count":126063,"worker":112500,"leader":11250,"researcher":2250},
      {"count":126000,"worker":112500,"leader":11235,"researcher":2243},
    ],
    currentDutyData:{"count":126000,"worker":112500,"leader":11232,"researcher":2241},
    //--------------------------------------------------------------------------------
    //挖掘机运行数据
    diggerData:[
      {"work":788,"leisure":200,"repaire":10,"count":1000},
      {"work":789,"leisure":199,"repaire":10,"count":1000},
      {"work":793,"leisure":195,"repaire":10,"count":1000},
      {"work":793,"leisure":194,"repaire":11,"count":1000},
      {"work":794,"leisure":193,"repaire":11,"count":1000},
      {"work":796,"leisure":191,"repaire":11,"count":1000},
      {"work":787,"leisure":200,"repaire":11,"count":1000},
      {"work":785,"leisure":201,"repaire":12,"count":1000},
      {"work":780,"leisure":206,"repaire":12,"count":1000},
      {"work":776,"leisure":210,"repaire":12,"count":1000},
      {"work":791,"leisure":195,"repaire":12,"count":1000},
      {"work":798,"leisure":188,"repaire":12,"count":1000},
      {"work":800,"leisure":187,"repaire":11,"count":1000},
    ],
    currentDiggerData:{"work":788,"leisure":200,"repaire":10,"count":1000},
    horBarOption1 : {},
    horBarGraphic1 : {},
    //--------------------------------------------------------------------------------
    //钻机运行数据
    drillingData:[
      {"work":84,"leisure":16,"repaire":0,"count":100},
      {"work":85,"leisure":14,"repaire":1,"count":100},
      {"work":85,"leisure":14,"repaire":1,"count":100},
      {"work":86,"leisure":13,"repaire":1,"count":100},
      {"work":85,"leisure":13,"repaire":2,"count":100},
      {"work":86,"leisure":12,"repaire":2,"count":100},
      {"work":87,"leisure":11,"repaire":2,"count":100},
      {"work":87,"leisure":11,"repaire":2,"count":100},
      {"work":88,"leisure":10,"repaire":2,"count":100},
      {"work":89,"leisure":8,"repaire":3,"count":100},
      {"work":89,"leisure":8,"repaire":3,"count":100},
      {"work":90,"leisure":7,"repaire":3,"count":100},
      {"work":87,"leisure":10,"repaire":3,"count":100},
    ],
    currentDrillingData:{"work":84,"leisure":16,"repaire":0,"count":100},
    horBarOption4 : {},
    horBarGraphic4 : {},
    //--------------------------------------------------------------------------------
    //破碎机运行数据
    crusherData:[
      {"work":168,"leisure":42,"repaire":0,"count":210},
      {"work":167,"leisure":43,"repaire":0,"count":210},
      {"work":169,"leisure":41,"repaire":0,"count":210},
      {"work":168,"leisure":42,"repaire":0,"count":210},
      {"work":167,"leisure":42,"repaire":1,"count":210},
      {"work":166,"leisure":43,"repaire":1,"count":210},
      {"work":165,"leisure":44,"repaire":1,"count":210},
      {"work":169,"leisure":39,"repaire":2,"count":210},
      {"work":170,"leisure":38,"repaire":2,"count":210},
      {"work":168,"leisure":40,"repaire":2,"count":210},
      {"work":172,"leisure":36,"repaire":2,"count":210},
      {"work":171,"leisure":36,"repaire":3,"count":210},
      {"work":169,"leisure":38,"repaire":3,"count":210},
    ],
    currentCrusherData:{"work":168,"leisure":42,"repaire":0,"count":210},
    horBarOption2 : {},
    horBarGraphic2 : {},
    //--------------------------------------------------------------------------------
    //自卸汽车运行数据
    dumperData:[
      {"work":315,"leisure":85,"repaire":0,"count":400},
      {"work":316,"leisure":84,"repaire":0,"count":400},
      {"work":320,"leisure":79,"repaire":1,"count":400},
      {"work":318,"leisure":81,"repaire":1,"count":400},
      {"work":322,"leisure":77,"repaire":1,"count":400},
      {"work":324,"leisure":75,"repaire":1,"count":400},
      {"work":329,"leisure":69,"repaire":2,"count":400},
      {"work":317,"leisure":81,"repaire":2,"count":400},
      {"work":323,"leisure":75,"repaire":2,"count":400},
      {"work":325,"leisure":73,"repaire":2,"count":400},
      {"work":324,"leisure":74,"repaire":2,"count":400},
      {"work":330,"leisure":67,"repaire":3,"count":400},
      {"work":335,"leisure":62,"repaire":3,"count":400},
    ],
    currentDumperData:{"work":315,"leisure":85,"repaire":0,"count":400},
    horBarOption3 : {},
    horBarGraphic3 : {},
    //--------------------------------------------------------------------------------
    //水电用量数据
    waterElecData:[],
    safetyLineOption:{},
    safetyLineGraphic:{},
    waterElecXAxisData:[],
    seriesWaterData:[],
    seriesElecData:[],
    //--------------------------------------------------------------------------------
    //公告数据
    noticeData:[],
    currentNoticeData:[],
  },
  methods: {
    backClick:function(){
      window.location.href = "/mine/";
    },
  },
  mounted() {
    let that = this;
    this.horBarGraphic1 = echarts.init(document.getElementById('hor-bar-graphic1'));
    this.horBarOption1 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['工作中', '空闲', '修理中']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: ['当前日']
        },
        series: [
            {
                name: '工作中',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: [this.currentDiggerData.work]
            },
            {
                name: '空闲',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: [this.currentDiggerData.leisure]
            },
            {
                name: '修理中',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: [this.currentDiggerData.repaire]
            }
        ]
    };
    this.horBarGraphic1.setOption(this.horBarOption1);

    //-----------------------------------------------------------------------
    this.horBarGraphic2 = echarts.init(document.getElementById('hor-bar-graphic2'));
    this.horBarOption2 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['工作中', '空闲', '修理中']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: ['当前日']
        },
        series: [
            {
                name: '工作中',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: [this.currentCrusherData.work]
            },
            {
                name: '空闲',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: [this.currentCrusherData.leisure]
            },
            {
                name: '修理中',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: [this.currentCrusherData.repaire]
            }
        ]
    };
    this.horBarGraphic2.setOption(this.horBarOption2);

    //-----------------------------------------------------------------------
    this.horBarGraphic3 = echarts.init(document.getElementById('hor-bar-graphic3'));
    this.horBarOption3 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['工作中', '空闲', '修理中']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: ['当前日']
        },
        series: [
            {
                name: '工作中',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: [this.currentDumperData.work]
            },
            {
                name: '空闲',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: [this.currentDumperData.leisure]
            },
            {
                name: '修理中',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: [this.currentDumperData.repaire]
            }
        ]
    };
    this.horBarGraphic3.setOption(this.horBarOption3);

    //-----------------------------------------------------------------------
    this.horBarGraphic4 = echarts.init(document.getElementById('hor-bar-graphic4'));
    this.horBarOption4 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['工作中', '空闲', '修理中']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: ['当前日']
        },
        series: [
            {
                name: '工作中',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: [this.currentDrillingData.work]
            },
            {
                name: '空闲',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: [this.currentDrillingData.leisure]
            },
            {
                name: '修理中',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: [this.currentDrillingData.repaire]
            }
        ]
    };
    this.horBarGraphic4.setOption(this.horBarOption4);

    //-------------------------------------------------------------------
    var safetyBarGraphic = echarts.init(document.getElementById('safety-bar-graphic'));
    // 指定图表的配置项和数据
    var safetyBarOption = {
      xAxis: {
          type: 'category',
          data: ['烟雾','排水','粉尘','瓦斯']
      },
      yAxis: {
          type: 'value'
      },
      series: [
        {
          type: 'bar',
          itemStyle: {
              color: 'rgba(0,0,0,0.05)'
          },
          barGap: '-100%',
          barCategoryGap: '40%',
          data: [100,100,100,100],
          animation: false
        },
        {
          data: [0, 40, 40, 20],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
              color: 'rgba(220, 220, 220, 0.8)'
        }
      }]
    };
    safetyBarGraphic.setOption(safetyBarOption);

    //-------------------------------------------------------------------
    that.safetyLineGraphic = echarts.init(document.getElementById('safety-line-graphic'));
    $.getJSON('/public/assets/water-elec.json',function(data){

        that.waterElecData = data;
        that.safetyLineOption = {
            title: {
                text: '折线图堆叠'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['用水量(L)', '用电量(度)']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: that.waterElecXAxisData
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '用电量',
                    type: 'line',
                    stack: '总量',
                    data: that.seriesElecData,
                },
                {
                    name: '用水量',
                    type: 'line',
                    stack: '总量',
                    data: that.seriesWaterData,
                }

            ]
        };
        that.safetyLineGraphic.setOption(that.safetyLineOption);
    });

    //-----------------------------------------------------------------------
    $.getJSON('/public/assets/notice.json',function(data){
      that.noticeData = data;
      console.log(that.noticeData);
    });
  },
  created() {
    let that = this;
    //值班信息显示
    let dutyDataInterval = 0;
    setInterval(function(){
      that.currentDutyData = that.dutyData[dutyDataInterval];
      dutyDataInterval = dutyDataInterval + 1;
      if(dutyDataInterval == 24){
        dutyDataInterval = 0;
      }
    },300000);
    //-----------------------------------------------------------------------
    let diggerDataInterval = 0;
    setInterval(function(){
      that.currentDiggerData = that.diggerData[diggerDataInterval];
      that.horBarOption1.series[0].data = [that.currentDiggerData.work];
      that.horBarOption1.series[1].data = [that.currentDiggerData.leisure];
      that.horBarOption1.series[2].data = [that.currentDiggerData.repaire];
      that.horBarGraphic1.setOption(that.horBarOption1);
      diggerDataInterval = diggerDataInterval + 1;
      if(diggerDataInterval == 13){
        diggerDataInterval = 0;
      }
    },600000);
    //-----------------------------------------------------------------------
    let crusherDataInterval = 0;
    setInterval(function(){
      that.currentCrusherData = that.crusherData[crusherDataInterval];
      that.horBarOption2.series[0].data = [that.currentCrusherData.work];
      that.horBarOption2.series[1].data = [that.currentCrusherData.leisure];
      that.horBarOption2.series[2].data = [that.currentCrusherData.repaire];
      that.horBarGraphic2.setOption(that.horBarOption2);
      crusherDataInterval = crusherDataInterval + 1;
      if(crusherDataInterval == 13){
        crusherDataInterval = 0;
      }
    },600000);
    //-----------------------------------------------------------------------
    let dumperDataInterval = 0;
    setInterval(function(){
      that.currentDumperData = that.dumperData[dumperDataInterval];
      that.horBarOption3.series[0].data = [that.currentDumperData.work];
      that.horBarOption3.series[1].data = [that.currentDumperData.leisure];
      that.horBarOption3.series[2].data = [that.currentDumperData.repaire];
      that.horBarGraphic3.setOption(that.horBarOption3);
      dumperDataInterval = dumperDataInterval + 1;
      if(dumperDataInterval == 13){
        dumperDataInterval = 0;
      }
    },600000);
    //-----------------------------------------------------------------------
    let drillingDataInterval = 0;
    setInterval(function(){
      that.currentDrillingData = that.drillingData[drillingDataInterval];
      that.horBarOption4.series[0].data = [that.currentDrillingData.work];
      that.horBarOption4.series[1].data = [that.currentDrillingData.leisure];
      that.horBarOption4.series[2].data = [that.currentDrillingData.repaire];
      that.horBarGraphic4.setOption(that.horBarOption4);
      drillingDataInterval = drillingDataInterval + 1;
      if(drillingDataInterval == 13){
        drillingDataInterval = 0;
      }
    },600000);
    //-----------------------------------------------------------------------
    let weDataInterval = 4;
    setInterval(function(){
      if(that.waterElecData.length > 4){
        that.waterElecXAxisData = getSafetyLineGraphicTimeArray();
        that.seriesWaterData = [];
        that.seriesElecData = [];
        that.seriesWaterData.push(that.waterElecData[weDataInterval].water);
        that.seriesWaterData.push(that.waterElecData[weDataInterval - 1].water);
        that.seriesWaterData.push(that.waterElecData[weDataInterval - 2].water);
        that.seriesWaterData.push(that.waterElecData[weDataInterval - 3].water);
        that.seriesWaterData.push(that.waterElecData[weDataInterval - 4].water);
        that.seriesElecData.push(that.waterElecData[weDataInterval].electricity * 10);
        that.seriesElecData.push(that.waterElecData[weDataInterval - 1].electricity * 10);
        that.seriesElecData.push(that.waterElecData[weDataInterval - 2].electricity * 10);
        that.seriesElecData.push(that.waterElecData[weDataInterval - 3].electricity * 10);
        that.seriesElecData.push(that.waterElecData[weDataInterval - 4].electricity * 10);
        that.safetyLineOption.xAxis.data = that.waterElecXAxisData;
        that.safetyLineOption.series[1].data = that.seriesWaterData;
        that.safetyLineOption.series[0].data = that.seriesElecData;
        that.safetyLineGraphic.setOption(that.safetyLineOption);
        weDataInterval = weDataInterval + 1;

        if(weDataInterval == 7200){
          weDataInterval = 4;
        }
      }
    },1000);
    //-----------------------------------------------------------------------------
    let noticeDataInterval = 0;
    setInterval(function(){
      that.currentNoticeData = [];
      that.currentNoticeData.push(that.noticeData[noticeDataInterval]);
      that.currentNoticeData.push(that.noticeData[noticeDataInterval + 1]);
      that.currentNoticeData.push(that.noticeData[noticeDataInterval + 2]);
      noticeDataInterval = noticeDataInterval + 3;
      if(noticeDataInterval == 24){
        noticeDataInterval = 0;
      }
    },30000);
  }
})
