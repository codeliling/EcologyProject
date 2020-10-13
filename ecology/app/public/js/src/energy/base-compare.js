var app = new Vue({
  el: '#content',
  delimiters: ['${', '}'],
  data: {
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
    var countGraphic = echarts.init(document.getElementById('count-graphic'));
    countOption = {
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
              name: '业务指标',
              type: 'gauge',
              detail: {formatter: '{value}'},
              axisLine: {            // 坐标轴线
                     lineStyle: {       // 属性lineStyle控制线条样式
                         color: [[0.3, '#e6951d'],[0.5, '#dfc73d'], [0.8, '#85c154'], [1, '#5FA731']]
                     }
              },
              data: [{value: 50, name: '评分'}]
          }
      ]
    }
    countGraphic.setOption(countOption);

    //-------------------------------------------------------------------------------------------------
    var baseGraphic1 = echarts.init(document.getElementById('graphic-base1'));
    var baseGrasphicOption1 = {
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: '60%',
                data: [10, 52, 200, 334, 390, 330, 220]
            }
        ]
    };
    baseGraphic1.setOption(baseGrasphicOption1);

    //-------------------------------------------------------------------------------------------------
    var baseGraphic2_1 = echarts.init(document.getElementById('graphic-base2-1'));
    var baseGrasphicOption2_1 = {
        title: {
            text: '基础雷达图'
        },
        tooltip: {},
        legend: {
            data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
                }
            },
            indicator: [
                { name: '销售（sales）', max: 6500},
                { name: '管理（Administration）', max: 16000},
                { name: '信息技术（Information Techology）', max: 30000},
                { name: '客服（Customer Support）', max: 38000},
                { name: '研发（Development）', max: 52000},
                { name: '市场（Marketing）', max: 25000}
            ]
        },
        series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
                {
                    value: [4300, 10000, 28000, 35000, 50000, 19000],
                    name: '预算分配（Allocated Budget）'
                },
                {
                    value: [5000, 14000, 28000, 31000, 42000, 21000],
                    name: '实际开销（Actual Spending）'
                }
            ]
        }]
    };
    baseGraphic2_1.setOption(baseGrasphicOption2_1);

    //-------------------------------------------------------------------------------------------------
    var baseGraphic2_2 = echarts.init(document.getElementById('graphic-base2-2'));
    var baseGrasphicOption2_2 = {
        title: {
            text: '基础雷达图'
        },
        tooltip: {},
        legend: {
            data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
                }
            },
            indicator: [
                { name: '销售（sales）', max: 6500},
                { name: '管理（Administration）', max: 16000},
                { name: '信息技术（Information Techology）', max: 30000},
                { name: '客服（Customer Support）', max: 38000},
                { name: '研发（Development）', max: 52000},
                { name: '市场（Marketing）', max: 25000}
            ]
        },
        series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
                {
                    value: [4300, 10000, 28000, 35000, 50000, 19000],
                    name: '预算分配（Allocated Budget）'
                },
                {
                    value: [5000, 14000, 28000, 31000, 42000, 21000],
                    name: '实际开销（Actual Spending）'
                }
            ]
        }]
    };
    baseGraphic2_2.setOption(baseGrasphicOption2_2);

    //-------------------------------------------------------------------------------------------------
    var baseGraphic2_3 = echarts.init(document.getElementById('graphic-base2-3'));
    var baseGrasphicOption2_3 = {
        title: {
            text: '基础雷达图'
        },
        tooltip: {},
        legend: {
            data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
                }
            },
            indicator: [
                { name: '销售（sales）', max: 6500},
                { name: '管理（Administration）', max: 16000},
                { name: '信息技术（Information Techology）', max: 30000},
                { name: '客服（Customer Support）', max: 38000},
                { name: '研发（Development）', max: 52000},
                { name: '市场（Marketing）', max: 25000}
            ]
        },
        series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
                {
                    value: [4300, 10000, 28000, 35000, 50000, 19000],
                    name: '预算分配（Allocated Budget）'
                },
                {
                    value: [5000, 14000, 28000, 31000, 42000, 21000],
                    name: '实际开销（Actual Spending）'
                }
            ]
        }]
    };
    baseGraphic2_3.setOption(baseGrasphicOption2_3);
  },
  created() {

  }
});
