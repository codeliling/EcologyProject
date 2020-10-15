var app = new Vue({
  el: '#content',
  delimiters: ['${', '}'],
  data: {
    //值班信息数据
    dutyData:[
    {"worker":2397,"leader":221,"researcher":709,"onwork":3327 ,"absence":996,"count":3327 },
    {"worker":2398,"leader":221,"researcher":709,"onwork":3328 ,"absence":995,"count":3328 },
    {"worker":2397,"leader":221,"researcher":709,"onwork":3327 ,"absence":996,"count":3327 },
    {"worker":2396,"leader":221,"researcher":709,"onwork":3326 ,"absence":997,"count":3326 },
    {"worker":2397,"leader":221,"researcher":709,"onwork":3327 ,"absence":996,"count":3327 },
    {"worker":2398,"leader":221,"researcher":709,"onwork":3328 ,"absence":995,"count":3328 },
    {"worker":2397,"leader":221,"researcher":709,"onwork":3327 ,"absence":996,"count":3327 },
    {"worker":2396,"leader":221,"researcher":709,"onwork":3326 ,"absence":997,"count":3326 },
    {"worker":2397,"leader":221,"researcher":709,"onwork":3327 ,"absence":996,"count":3327 },
    {"worker":2398,"leader":221,"researcher":709,"onwork":3328 ,"absence":995,"count":3328 },
    {"worker":2397,"leader":221,"researcher":709,"onwork":3327 ,"absence":996,"count":3327 },
    {"worker":2396,"leader":221,"researcher":709,"onwork":3326 ,"absence":997,"count":3326 },
    {"worker":2397,"leader":221,"researcher":709,"onwork":3327 ,"absence":996,"count":3327 },
    {"worker":2398,"leader":221,"researcher":709,"onwork":3328 ,"absence":995,"count":3328 },
    {"worker":2397,"leader":221,"researcher":709,"onwork":3327 ,"absence":996,"count":3327 },
    {"worker":2396,"leader":221,"researcher":709,"onwork":3326 ,"absence":997,"count":3326 },
    {"worker":2397,"leader":221,"researcher":709,"onwork":3327 ,"absence":996,"count":3327 },
    {"worker":2398,"leader":221,"researcher":709,"onwork":3328 ,"absence":995,"count":3328 },
    {"worker":2397,"leader":221,"researcher":709,"onwork":3327 ,"absence":996,"count":3327 },
    {"worker":2396,"leader":221,"researcher":709,"onwork":3326 ,"absence":997,"count":3326 },
    {"worker":2397,"leader":221,"researcher":709,"onwork":3327 ,"absence":996,"count":3327 },
    {"worker":2398,"leader":221,"researcher":709,"onwork":3328 ,"absence":995,"count":3328 },
    {"worker":2397,"leader":221,"researcher":709,"onwork":3327 ,"absence":996,"count":3327 }
    ],
    currentDutyData:{"count":3326,"worker":2396,"leader":221,"researcher":709,"onwork":3326,"absence":997},
    //--------------------------------------------------------------------------------
    //挖掘机运行数据
    diggerData:[
      {"work":151,"leisure":61,"repaire":2,"count":214},
      {"work":152,"leisure":60,"repaire":2,"count":214},
      {"work":151,"leisure":61,"repaire":2,"count":214},
      {"work":150,"leisure":62,"repaire":2,"count":214},
      {"work":151,"leisure":61,"repaire":2,"count":214},
      {"work":152,"leisure":60,"repaire":2,"count":214},
      {"work":151,"leisure":61,"repaire":2,"count":214}
    ],
    currentDiggerData:{"work":150,"leisure":62,"repaire":2,"count":214},
    horBarOption1 : {},
    horBarGraphic1 : {},
    //--------------------------------------------------------------------------------
    //钻机运行数据
    drillingData:[
      {"work":29,"leisure":13,"repaire":0,"count":42},
      {"work":28,"leisure":13,"repaire":1,"count":42},
      {"work":29,"leisure":12,"repaire":1,"count":42},
      {"work":30,"leisure":11,"repaire":1,"count":42},
      {"work":29,"leisure":13,"repaire":0,"count":42},
      {"work":28,"leisure":13,"repaire":1,"count":42},
      {"work":29,"leisure":12,"repaire":1,"count":42},
    ],
    currentDrillingData:{"work":30,"leisure":11,"repaire":1,"count":42},

    //--------------------------------------------------------------------------------
    //破碎机运行数据
    crusherData:[
      {"work":99,"leisure":40,"repaire":3,"count":142},
      {"work":98,"leisure":41,"repaire":3,"count":142},
      {"work":99,"leisure":40,"repaire":3,"count":142},
      {"work":100,"leisure":39,"repaire":3,"count":142},
      {"work":101,"leisure":38,"repaire":3,"count":142},
      {"work":102,"leisure":37,"repaire":3,"count":142},
      {"work":101,"leisure":38,"repaire":3,"count":142},
    ],
    currentCrusherData:{"work":100,"leisure":39,"repaire":3,"count":142},

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

    todayData:[
      {"var1":99,"var2":97,"var3":97,"var4":97},
      {"var1":98,"var2":96,"var3":96,"var4":96},
      {"var1":99,"var2":97,"var3":97,"var4":97},
      {"var1":98,"var2":96,"var3":96,"var4":96},
      {"var1":99,"var2":97,"var3":97,"var4":97},
      {"var1":100,"var2":96,"var3":96,"var4":96},
      {"var1":99,"var2":97,"var3":97,"var4":97},
      {"var1":98,"var2":96,"var3":96,"var4":96},
      {"var1":99,"var2":97,"var3":97,"var4":97},
      {"var1":98,"var2":96,"var3":96,"var4":96},
      {"var1":99,"var2":97,"var3":97,"var4":97}
    ],
    safetyBarGraphic:{},
    safetyBarOption:{},
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
    /*
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
    */
    this.horBarGraphic1 = echarts.init(document.getElementById('hor-bar-graphic1'));
    let horBarSource = [
        ['product', '工作中', '空闲', '修理中',],
        ['挖掘机', that.currentDiggerData.work, that.currentDiggerData.leisure, that.currentDiggerData.repaire],
        ['钻机', that.currentDrillingData.work, that.currentDrillingData.leisure, that.currentDrillingData.repaire],
        ['破碎机', that.currentCrusherData.work, that.currentCrusherData.leisure, that.currentCrusherData.repaire],
        ['自卸汽车', that.currentDumperData.work, that.currentDumperData.leisure, that.currentDumperData.repaire]
    ];
    this.horBarOption1 = {
        legend: {
          textStyle: {
              fontSize: 12,
              color: '#A5D9E1'
          }
        },
        tooltip: {},
        color:['#5FA731','#85C154','#B691C1','#7D57A1'],
        dataset: {
            source: horBarSource
        },
        grid:{
          right:'10px',
          containLabel: true
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
    this.safetyBarGraphic = echarts.init(document.getElementById('safety-bar-graphic'));
    // 指定图表的配置项和数据
    this.safetyBarOption = {
      tooltip: {
          trigger: 'item',
          formatter: '{b}<br/>{c}'
      },
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
      color:['#85C154','#5FA731','#B691C1'],
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
          data: [100, 96, 96, 97],
          type: 'bar',
          showBackground: true,

      }]
    };
    this.safetyBarGraphic.setOption(this.safetyBarOption);

    //-------------------------------------------------------------------
    that.waterLineGraphic = echarts.init(document.getElementById('water-line-graphic'));
    that.elecLineGraphic = echarts.init(document.getElementById('elec-line-graphic'));
    that.waterOption = {
        title: {
            text: '用水量(Vut)',
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
        color:['#5FA731'],
        grid: {
            left: '10%',
            right: '10%',
            bottom: '3%',
            top: '25px',
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
            max : 200,
            min:100,
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
            text: '用电量(Kw.h)',
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
        color:['#5FA731'],
        grid: {
            left: '10%',
            right: '10%',
            bottom: '3%',
            top: '25px',
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
            max : 8000,
            min:7000,
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

    $.getJSON('/public/assets/0-2-2.json',function(data){
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
        for(let i = weDataInterval; i< weDataInterval + 5; i++){
          that.seriesWaterData.push(that.waterElecData[weDataInterval].water);
          that.seriesElecData.push(that.waterElecData[weDataInterval].electricity);
        }

        that.waterOption.xAxis.data = that.waterElecXAxisData;
        that.elecOption.xAxis.data = that.waterElecXAxisData;
        that.waterOption.series[0].data = that.seriesWaterData;
        that.elecOption.series[0].data = that.seriesElecData;
        that.waterLineGraphic.setOption(that.waterOption);
        that.elecLineGraphic.setOption(that.elecOption);
        weDataInterval = weDataInterval + 5;

        if(weDataInterval == that.waterElecData.length){
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

    //------------------------------------------------------------------------
    let todayDataInterval = 0;
    setInterval(function(){
      that.safetyBarOption.series[0].data = [];
      let obj = that.todayData[todayDataInterval];
      that.safetyBarOption.series[0].data.push(obj.var1);
      that.safetyBarOption.series[0].data.push(obj.var2);
      that.safetyBarOption.series[0].data.push(obj.var3);
      that.safetyBarOption.series[0].data.push(obj.var4);
      that.safetyBarGraphic.setOption(that.safetyBarOption);
      noticeDataInterval = noticeDataInterval + 1;
      if(noticeDataInterval == that.todayData.length){
        noticeDataInterval = 0;
      }
    },2000);
  }
})
