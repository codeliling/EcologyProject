var app = new Vue({
  el: '#content',
  delimiters: ['${', '}'],
  data: {
  },
  methods:{
    backClick:function(){
      window.location.href = '/energy';
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

    }
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
  },
  created() {

  }
});
