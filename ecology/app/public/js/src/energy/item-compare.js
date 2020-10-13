var app = new Vue({
  el: '#content',
  delimiters: ['${', '}'],
  data: {

    xdata:['2019-08-04','2019-08-05','2019-08-06','2019-08-07','2019-08-08'],
    valueArray1:[7641.426167,7052.283333,7470.5625,7254.19,8788.668833],
    valueArray2:[19051.95446,18899.1135,20339.35,15665.77117,21303.58317],
    valueArray3:[12218.06671,7872.456667,3275.6585,18309.533,19414.61867],
    valueArray4:[11202.42437,11068.225,11450.49383,9887.81,12403.16867],
  },
  methods:{
    backClick:function(){
      window.location.href = '/energy/buildings';
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
    var lineGraphic = echarts.init(document.getElementById('line-graphic'));
    lineOption = {
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            icon:'circle',
            x: '100px',
            y: '35px',
            itemGap: 100,
            data: ['洁卫', '餐饮','空调','其他'],
            textStyle: {
                fontSize: 12,
                color: '#A5D9E1'
            },

        },
        color:['#3074B1','#B691C1','#A1D1DA','#7D57A1'],
        grid: {
            left: '3%',
            right: '4%',
            top: '18%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: this.xdata,
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
                name: '洁卫',
                type: 'line',
                stack: '总量',
                data: this.valueArray1
            },
            {
                name: '餐饮',
                type: 'line',
                stack: '总量',
                data: this.valueArray2
            },
            {
                name: '空调',
                type: 'line',
                stack: '总量',
                data: this.valueArray3
            },
            {
                name: '其他',
                type: 'line',
                stack: '总量',
                data: this.valueArray4
            }
        ]
    };

    lineGraphic.setOption(lineOption);

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
