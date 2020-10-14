var app = new Vue({
  el: '#content',
  delimiters: ['${', '}'],
  data: {
    baseGraphic1:{},
    baseGrasphicOption1:{},
    realtimeBaseData:[],
    countGraphic:{},
    countOption:{},
    orilGraphicData:[]
  },
  methods:{
    backClick:function(){
      window.location.href = '/energy/hotgraphic';
    },
    areaMapClick:function(){
      window.location.href = '/energy/hotgraphic';
    },
    buildingMapClick:function(){
      window.location.href = '/energy/areabuildings';
    },
    flourClick:function(){
      window.location.href = '/energy/flour';
    },
    analysisClick:function(){

    },
    flourBtnClick:function(){
      window.location.href = '/energy/flour';
    },
    itemBtnClick:function(){
      window.location.href = '/energy/itemcompare';
    },
    baseBtnClick:function(){
      window.location.href = '/energy/basecompare';
    },
  },
  mounted() {
    let that = this;
    this.countGraphic = echarts.init(document.getElementById('count-graphic'));
    this.countOption = {
      tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
      },
      series: [
          {
              name: '能量目标余量',
              type: 'gauge',
              min:50000,
              max: 65000,
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
                        padding: [460,10,10,10],
                    },
              data: [{value: 50, name: '能量目标余量Kwh'}]
          }
      ]
    }
    this.countGraphic.setOption(this.countOption);

    //-------------------------------------------------------------------------------------------------
    this.baseGraphic1 = echarts.init(document.getElementById('graphic-base1'));
    this.baseGrasphicOption1 = {

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#283b56'
                }
            }
        },
        legend: {
            data:['基准数据', '基准线'],
            textStyle: {
                fontSize: 12,
                color: '#A5D9E1'
            }
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,
            data:[],
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
          {
              type: 'category',
              boundaryGap: true,
              data: [],
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
                scale: true,
                name: '基准数据',
                boundaryGap: [0.2, 0.2],
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
            {
                type: 'value',
                scale: true,
                name: '基准线',
                boundaryGap: [0.2, 0.2],
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
                name: '基准数据',
                type: 'bar',
                xAxisIndex: 1,
                yAxisIndex: 1,
                color:['#7D57A1'],
                data: []
            },
            {
                name: '基准线',
                type: 'line',
                data: [],
                color:['#FFFFFF']
            }
        ]
    };
    this.baseGraphic1.setOption(this.baseGrasphicOption1);



    //-------------------------------------------------------------------------------------------------
    var baseGraphic2_1 = echarts.init(document.getElementById('graphic-base2-1'));
    var baseGrasphicOption2_1 = {
        title: {
            text: '年数据图',
            textStyle: {
                 fontFamily: "sans-serif", // 主标题文字的字体系列。
                 fontSize: 15, // 字体大小
                 fontStyle: 'normal',
                 fontWeight: 'bold',
                 color:'#A5D9E1',
                 lineHeight:"12",
             },
        },
        tooltip: {},
        legend: {
          show: true,
          icon: 'rect',
            data: ['洁卫', '餐饮', '空调', '其他'],
            padding: [30,5,5,5],
            textStyle: {
                fontSize: 12,
                color: '#A5D9E1'
            }
        },
        color:['#A5D9E1','#3074B1','#B691C1', '#7D57A1'],
        radar: {
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
              { name: '1', max: 500},
              { name: '2', max: 500},
              { name: '3', max: 500},
              { name: '4', max: 500},
              { name: '5', max: 500},
              { name: '6', max: 500},
              { name: '7', max: 500},
              { name: '8', max: 500},
              { name: '9', max: 500},
              { name: '10', max: 500},
              { name: '11', max: 500},
              { name: '12', max: 500},
            ]
        },
        series: [{

                name: '洁卫',
                type: 'radar',
                lineStyle:{normal: {color:'#A5D9E1'}},
                data: [
                    {
                      value: [145.2692955,199.7338042,171.4048975,167.5163098,161.9796697,131.8499025,135.0657437,147.714416,155.7482997,127.236056,181.7919688,193.7254654],
                      name: '洁卫'
                    }
                ]
            },{
                name: '餐饮',
                type: 'radar',
                lineStyle:{normal: {color:'#3074B1'}},
                data: [{
                        value: [331.90899,413.8905857,396.8813835,436.5695219,459.2484581,481.9273943,470.5879262,453.578724,481.9273943,353.578724,408.2208516,447.90899],
                        name: '餐饮'
                      }
                ]
            },{
                name: '空调',
                type: 'radar',
                lineStyle:{normal: {color:'#B691C1'}},
                data: [{
                        value: [113.2886115,143.0976448,6.6128636,5.45561247,55.47720213,114.6878334,182.302479,171.9344536,148.1794348,51.0135192,45.91216728,152.9933229],
                        name: '空调'
                      }
                ]
            },{
                name: '其他',
                type: 'radar',
                lineStyle:{normal: {color:'#7D57A1'}},
                data: [{
                        value: [202.3169325,262.3941275,268.432725,255.6759975,268.9578675,262.2397375,275.5988025,265.6374,282.2397375,215.6374,239.07366,262.3169325],
                        name: '其他'
                      }]
            }]
    };
    baseGraphic2_1.setOption(baseGrasphicOption2_1);

    //-------------------------------------------------------------------------------------------------
    var baseGraphic2_2 = echarts.init(document.getElementById('graphic-base2-2'));
    var baseGrasphicOption2_2 = {
        title: {
            text: '月数据图',
            textStyle: {
                 fontFamily: "sans-serif", // 主标题文字的字体系列。
                 fontSize: 15, // 字体大小
                 fontStyle: 'normal',
                 fontWeight: 'bold',
                 color:'#A5D9E1',
                 lineHeight:"12",
             },
        },
        tooltip: {},
        legend: {
          show: true,
          icon: 'rect',
            data: ['洁卫', '餐饮', '空调', '其他'],
            padding: [30,5,5,5],
            textStyle: {
                fontSize: 12,
                color: '#A5D9E1'
            }
        },
        color:['#A5D9E1','#3074B1','#B691C1', '#7D57A1'],
        radar: {
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
              { name: '1', max: 130},
              { name: '2', max: 130},
              { name: '3', max: 130},
              { name: '4', max: 130},
            ]
        },
        series: [{

                name: '洁卫',
                type: 'radar',
                lineStyle:{normal: {color:'#A5D9E1'}},
                data: [
                    {
                      value: [44.92304483,36.89768417,46.40402433,46.40402433],
                      name: '洁卫'
                    }
                ]
            },{
                name: '餐饮',
                type: 'radar',
                lineStyle:{normal: {color:'#3074B1'}},
                data: [{
                        value: [120.387353,65.67910478,124.3561668,124.3561668],
                        name: '餐饮'
                      }
                ]
            },{
                name: '空调',
                type: 'radar',
                lineStyle:{normal: {color:'#B691C1'}},
                data: [{
                        value: [50.14754897,42.35183683,51.80076487,51.80076487],
                        name: '空调'
                      }
                ]
            },{
                name: '其他',
                type: 'radar',
                lineStyle:{normal: {color:'#7D57A1'}},
                data: [{
                        value: [70.50459325,53.60369625,72.8289205,72.8289205],
                        name: '其他'
                      }]
            }]
    };
    baseGraphic2_2.setOption(baseGrasphicOption2_2);

    //-------------------------------------------------------------------------------------------------
    var baseGraphic2_3 = echarts.init(document.getElementById('graphic-base2-3'));
    var baseGrasphicOption2_3 = {
        title: {
            text: '日数据图',
            textStyle: {
                 fontFamily: "sans-serif", // 主标题文字的字体系列。
                 fontSize: 15, // 字体大小
                 fontStyle: 'normal',
                 fontWeight: 'bold',
                 color:'#A5D9E1',
                 lineHeight:"12",
             },
        },
        tooltip: {},
        legend: {
          show: true,
          padding: [30,5,5,5],
          icon: 'rect',
            data: ['洁卫', '餐饮', '空调', '其他'],
            textStyle: {
                fontSize: 12,
                color: '#A5D9E1'
            }
        },
        color:['#A5D9E1','#3074B1','#B691C1', '#7D57A1'],
        radar: {
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
                { name: '1', max: 30},
                { name: '2', max: 30},
                { name: '3', max: 30},
                { name: '4', max: 30},
                { name: '5', max: 30},
                { name: '6', max: 30},
                { name: '7', max: 30},
            ]
        },
        series: [{
            name: '洁卫',
            type: 'radar',
            lineStyle:{normal: {color:'#A5D9E1'}},
            data: [
                {
                  value: [6.417577833,6.699669167,6.347055,6.488100667,6.417577833,8.5586235,9.5586235],
                  name: '洁卫'
                }
            ]
        },{
            name: '餐饮',
            type: 'radar',
            lineStyle:{normal: {color:'#3074B1'}},
            data: [{
                    value: [17.19819329,17.95415783,17.00920215,17.38718442,17.19819329,25.57617556,27.34623556],
                    name: '餐饮'
                  }
            ]
        },{
            name: '空调',
            type: 'radar',
            lineStyle:{normal: {color:'#B691C1'}},
            data: [{
                    value: [7.163935567,7.478833833,7.085211,7.242660133,7.163935567,15.3213847,16.3213847],
                    name: '空调'
                  }
            ]
        },{
            name: '其他',
            type: 'radar',
            lineStyle:{normal: {color:'#7D57A1'}},
            data: [{
                    value: [10.07208475,10.51481375,9.9614025,10.182767,10.07208475,16.29344925,17.29344925],
                    name: '其他'
                  }
            ]
        }]
    };
    baseGraphic2_3.setOption(baseGrasphicOption2_3);
  },
  created() {
    let that = this;
    let realtimeDataInterval = 15;

        $.getJSON('/public/assets/energy/10-1.json',function(data){
          that.realtimeBaseData = data;
          for (let i = 0; i < 15; i++){
            that.baseGrasphicOption1.xAxis[0].data.push(data[i].time);
            that.baseGrasphicOption1.series[0].data.push(data[i].value1);
            that.baseGrasphicOption1.series[1].data.push(data[i].value2);
          }
          that.baseGraphic1.setOption(that.baseGrasphicOption1);
        });

        let graphicBarLength  = 15;
        setInterval(function(){
          if(that.realtimeBaseData.length > 0){
            let obj = that.realtimeBaseData[realtimeDataInterval];
            realtimeDataInterval = realtimeDataInterval + 1;
            let xData = that.baseGrasphicOption1.xAxis[0].data
            if(xData.length > graphicBarLength){
              that.baseGrasphicOption1.xAxis[0].data.shift();
            }
            that.baseGrasphicOption1.xAxis[0].data.push(obj.time);

            if(that.baseGrasphicOption1.series[0].data.length > graphicBarLength){
              that.baseGrasphicOption1.series[0].data.shift();
            }
            that.baseGrasphicOption1.series[0].data.push(obj.value1);

            if(that.baseGrasphicOption1.series[1].data.length > graphicBarLength){
              that.baseGrasphicOption1.series[1].data.shift();
            }
            that.baseGrasphicOption1.series[1].data.push(obj.value2);


            if(realtimeDataInterval == that.realtimeBaseData.length){
              realtimeDataInterval = 0;
            }
            that.baseGraphic1.setOption(that.baseGrasphicOption1);
          }

        },5000);

        $.getJSON('/public/assets/energy/10-2.json',function(data){
          that.orilGraphicData = data;
          that.countOption.series[0].data[0].value = data[0].value;
          that.countGraphic.setOption(that.countOption);
        });
        let orilInterval = 1;
        setInterval(function(){
          that.countOption.series[0].data[0].value = that.orilGraphicData[orilInterval].value;
          that.countGraphic.setOption(that.countOption);
          orilInterval = orilInterval + 1;
          if(orilInterval == that.orilGraphicData.length){
            orilInterval = 0;
          }
        },1000);
  }
});
