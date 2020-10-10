var app = new Vue({
  el: '#content',
  delimiters: ['${', '}'],
  data: {
    //值班信息数据
    dutyData:[
    {"count":126000,"worker":112500,"leader":11232,"researcher":2241,"onwork":125973,"absence":27},
    {"count":125979,"worker":112458,"leader":11236,"researcher":2245,"onwork":125939,"absence":40},
    {"count":125919,"worker":112433,"leader":11223,"researcher":2238,"onwork":125894,"absence":25},
    {"count":125877,"worker":112400,"leader":11210,"researcher":2235,"onwork":125845,"absence":32},
    {"count":125940,"worker":112442,"leader":11231,"researcher":2237,"onwork":125910,"absence":30},
    {"count":125961,"worker":112447,"leader":11229,"researcher":2246,"onwork":125922,"absence":39},
    {"count":126003,"worker":112500,"leader":11231,"researcher":2242,"onwork":125973,"absence":30},
    {"count":125963,"worker":112448,"leader":11231,"researcher":2247,"onwork":125926,"absence":37},
    {"count":126023,"worker":112500,"leader":11235,"researcher":2250,"onwork":125985,"absence":38},
    {"count":125973,"worker":112466,"leader":11243,"researcher":2239,"onwork":125948,"absence":25},
    {"count":126036,"worker":112489,"leader":11247,"researcher":2250,"onwork":125986,"absence":50},
    {"count":126063,"worker":112500,"leader":11250,"researcher":2250,"onwork":126000,"absence":63},
    {"count":126000,"worker":112500,"leader":11235,"researcher":2244,"onwork":125979,"absence":21},
    {"count":125979,"worker":112458,"leader":11236,"researcher":2245,"onwork":125939,"absence":40},
    {"count":125919,"worker":112433,"leader":11223,"researcher":2238,"onwork":125894,"absence":25},
    {"count":125877,"worker":112400,"leader":11210,"researcher":2235,"onwork":125845,"absence":32},
    {"count":125940,"worker":112442,"leader":11231,"researcher":2237,"onwork":125910,"absence":30},
    {"count":125961,"worker":112447,"leader":11229,"researcher":2246,"onwork":125922,"absence":39},
    {"count":126003,"worker":112500,"leader":11231,"researcher":2242,"onwork":125973,"absence":30},
    {"count":125963,"worker":112448,"leader":11231,"researcher":2247,"onwork":125926,"absence":37},
    {"count":126023,"worker":112500,"leader":11235,"researcher":2250,"onwork":125985,"absence":38},
    {"count":125973,"worker":112466,"leader":11243,"researcher":2239,"onwork":125948,"absence":25},
    {"count":126036,"worker":112489,"leader":11247,"researcher":2250,"onwork":125986,"absence":50},
    {"count":126063,"worker":112500,"leader":11250,"researcher":2250,"onwork":126000,"absence":63},
    {"count":126000,"worker":112500,"leader":11235,"researcher":2243,"onwork":125978,"absence":22}
    ],
    currentDutyData:{"count":126000,"worker":112500,"leader":11232,"researcher":2241,"onwork":125973,"absence":27},
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

    //--------------------------------------------------------------------------------
    //水电用量数据
    waterElecData:[],
    waterOption:{},
    elecOption:{},
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
    waterBtnClick:function(){
      window.location.href = "/mine/water";
    }
  },
  mounted() {
    let that = this;

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

    this.horBarGraphic1 = echarts.init(document.getElementById('hor-bar-graphic1'));
    let horBarSource = [
        ['product', '工作中', '空闲', '修理中',],
        ['挖掘机', that.currentDiggerData.work, that.currentDiggerData.leisure, that.currentDiggerData.repaire],
        ['钻机', that.currentDrillingData.work, that.currentDrillingData.leisure, that.currentDrillingData.repaire],
        ['破碎机', that.currentCrusherData.work, that.currentCrusherData.leisure, that.currentCrusherData.repaire],
        ['自卸汽车', that.currentDumperData.work, that.currentDumperData.leisure, that.currentDumperData.repaire]
    ];
    this.horBarOption1 = {
        legend: {},
        tooltip: {},
        color:['#E6951D','#5FA731','#3074B1','#7D57A1'],
        dataset: {
            source: horBarSource
        },
        xAxis: {
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
        yAxis: {
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
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
            {type: 'bar'},
            {type: 'bar'},
            {type: 'bar'},
            {type: 'bar'}
        ]
    };
    this.horBarGraphic1.setOption(this.horBarOption1);

    //-------------------------------------------------------------------
    var safetyBarGraphic = echarts.init(document.getElementById('safety-bar-graphic'));
    // 指定图表的配置项和数据
    var safetyBarOption = {
      xAxis: {
          type: 'category',
          data: ['烟雾','排水','粉尘','瓦斯'],
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
      color:['#E6951D','#5FA731','#3074B1'],
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
          data: [0, 40, 40, 20],
          type: 'bar',
          showBackground: true,

      }]
    };
    safetyBarGraphic.setOption(safetyBarOption);

    //-------------------------------------------------------------------
    that.waterLineGraphic = echarts.init(document.getElementById('water-line-graphic'));
    that.elecLineGraphic = echarts.init(document.getElementById('elec-line-graphic'));
    that.waterOption = {
        title: {
            text: '用水量(L)',
            textStyle: {
                 fontFamily: "sans-serif", // 主标题文字的字体系列。
                 fontSize: 14, // 字体大小
                 fontStyle: 'normal',
                 fontWeight: 'normal',
                 color:'#A5D9E1',
                 lineHeight:"12",
             },
        },
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '20px',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: that.waterElecXAxisData,
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
                name: '用电量',
                type: 'line',
                stack: '总量',
                data: that.seriesElecData
            }
        ]
    };

    that.elecOption = {
        title: {
            text: '用电量(度)',
            textStyle: {
                 fontFamily: "sans-serif", // 主标题文字的字体系列。
                 fontSize: 14, // 字体大小
                 fontStyle: 'normal',
                 fontWeight: 'normal',
                 color:'#A5D9E1',
                 lineHeight:"12",
             },
        },
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '20px',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: that.waterElecXAxisData,
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
                name: '用水量',
                type: 'line',
                stack: '总量',
                data: that.seriesWaterData
            }
        ]
    };


    that.waterLineGraphic.setOption(that.waterOption);
    that.elecLineGraphic.setOption(that.elecOption);

    $.getJSON('/public/assets/water-elec.json',function(data){
        that.waterElecData = data;
    });

    //-----------------------------------------------------------------------
    $.getJSON('/public/assets/notice.json',function(data){
      that.noticeData = data;
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
    },5000);
    //-----------------------------------------------------------------------


    let diggerDataInterval = 0;
    setInterval(function(){
      that.currentDiggerData = that.diggerData[diggerDataInterval];
      that.currentDrillingData = that.drillingData[diggerDataInterval];
      that.currentCrusherData = that.crusherData[diggerDataInterval];
      that.currentDumperData = that.dumperData[diggerDataInterval];
      let horBarSource1 = [
          ['product', '工作中', '空闲', '修理中',],
          ['挖掘机', that.currentDiggerData.work, that.currentDiggerData.leisure, that.currentDiggerData.repaire],
          ['钻机', that.currentDrillingData.work, that.currentDrillingData.leisure, that.currentDrillingData.repaire],
          ['破碎机', that.currentCrusherData.work, that.currentCrusherData.leisure, that.currentCrusherData.repaire],
          ['自卸汽车', that.currentDumperData.work, that.currentDumperData.leisure, that.currentDumperData.repaire]
      ];
      that.horBarOption1.dataset.source = horBarSource1;

      that.horBarGraphic1.setOption(that.horBarOption1);
      diggerDataInterval = diggerDataInterval + 1;
      if(diggerDataInterval == that.diggerData.length){
        diggerDataInterval = 0;
      }
    },1000);

    //-----------------------------------------------------------------------
    let weDataInterval = 0;
    setInterval(function(){
      if(that.waterElecData.length > 0){
        that.waterElecXAxisData = getSafetyLineGraphicTimeArray();
        that.seriesWaterData = [];
        that.seriesElecData = [];
        that.seriesWaterData.push(that.waterElecData[weDataInterval].water);
        that.seriesWaterData.push(that.waterElecData[weDataInterval + 1].water);
        that.seriesWaterData.push(that.waterElecData[weDataInterval + 2].water);
        that.seriesWaterData.push(that.waterElecData[weDataInterval + 3].water);
        that.seriesElecData.push(that.waterElecData[weDataInterval].electricity);
        that.seriesElecData.push(that.waterElecData[weDataInterval + 1].electricity);
        that.seriesElecData.push(that.waterElecData[weDataInterval + 2].electricity);
        that.seriesElecData.push(that.waterElecData[weDataInterval + 3].electricity);
        that.waterOption.xAxis.data = that.waterElecXAxisData;
        that.elecOption.xAxis.data = that.waterElecXAxisData;
        that.waterOption.series[0].data = that.seriesWaterData;
        that.elecOption.series[0].data = that.seriesElecData;
        that.waterLineGraphic.setOption(that.waterOption);
        that.elecLineGraphic.setOption(that.elecOption);
        weDataInterval = weDataInterval + 4;

        if(weDataInterval == 7200){
          weDataInterval = 0;
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
    },2000);
  }
})
