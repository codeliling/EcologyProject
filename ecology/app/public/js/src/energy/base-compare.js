var app = new Vue({
  el: '#content',
  delimiters: ['${', '}'],
  data: {
    bubbleData:[
      [
          ['2019-08-05', 7641.426167, 300000000],
          ['2019-08-05', 7052.283333, 388000000],
          ['2019-08-06', 7470.5625, 312300000],
          ['2019-08-07', 7254.19, 510000000],
          ['2019-08-08', 8788.668833, 356000000]
      ],
      [
          ['2019-08-05', 19051.95446, 300000000],
          ['2019-08-05', 18899.1135, 388000000],
          ['2019-08-06', 20339.35, 312300000],
          ['2019-08-07', 15665.77117, 510000000],
          ['2019-08-08', 21303.58317, 356000000]
      ],[
          ['2019-08-05', 12218.06671, 300000000],
          ['2019-08-05', 7872.456667, 388000000],
          ['2019-08-06', 3275.6585, 312300000],
          ['2019-08-07', 18309.533, 510000000],
          ['2019-08-08', 19414.61867, 356000000]
      ],[
          ['2019-08-05', 11202.42437, 300000000],
          ['2019-08-05', 11068.225, 388000000],
          ['2019-08-06', 11450.49383, 312300000],
          ['2019-08-07', 9887.81, 510000000],
          ['2019-08-08', 12403.16867, 356000000]
      ],
    ],
    bubbleXdata:['2019-08-04','2019-08-05','2019-08-06','2019-08-07','2019-08-08'],
  },
  methods:{
    backClick:function(){
      window.location.href = '/energy/buildings';
    },
    areaMapClick:function(){
      window.location.href = '/energy/hotgraphic';
    },
    buildingMapClick:function(){

    },
    buildingClick:function(){
      window.location.href = '/energy/buildings';
    },
    analysisClick:function(){

    }
  },
  mounted() {
    var bubbleGraphic = echarts.init(document.getElementById('bubble-graphic'));
    var buttleOption = {
        backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
            offset: 0,
            color: '#f7f8fa'
        }, {
            offset: 1,
            color: '#cdd0d5'
        }]),
        title: {
            text: '分项能耗基准比较图'
        },
        legend: {
            right: 10,
            data: ['洁卫', '餐饮','空调','其他']
        },
        xAxis: {
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            type: 'category',
            boundaryGap: false,
            data: this.bubbleXdata
        },
        yAxis: {
            min: 'dataMin',
            max: 'dataMax',
            type: 'value',
        },
        series: [{
            name: '洁卫',
            data: this.bubbleData[0],
            type: 'scatter',
             symbolSize: function (data) {
                return Math.sqrt(data[2]) / 5e2;
            },
            emphasis: {
                label: {
                    show: true,
                    formatter: function (param) {
                        return param.data[1];
                    },
                    position: 'top'
                }
            },
            itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(251, 118, 123)'
                }, {
                    offset: 1,
                    color: 'rgb(204, 46, 72)'
                }])
            }
        },{
            name: '餐饮',
            data: this.bubbleData[1],
            type: 'scatter',
             symbolSize: function (data) {
                return Math.sqrt(data[2]) / 5e2;
            },
            emphasis: {
                label: {
                    show: true,
                    formatter: function (param) {
                        return param.data[1];
                    },
                    position: 'top'
                }
            },
            itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(129, 227, 238)'
                }, {
                    offset: 1,
                    color: 'rgb(25, 183, 207)'
                }])
            }
        },{
            name: '空调',
            data: this.bubbleData[2],
            type: 'scatter',
             symbolSize: function (data) {
                return Math.sqrt(data[2]) / 5e2;
            },
            emphasis: {
                label: {
                    show: true,
                    formatter: function (param) {
                        return param.data[1];
                    },
                    position: 'top'
                }
            },
           itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 133, 180, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(39, 17, 238)'
                }, {
                    offset: 1,
                    color: 'rgb(35, 123, 27)'
                }])
            }
        },{
            name: '其他',
            data: this.bubbleData[3],
            type: 'scatter',
             symbolSize: function (data) {
                return Math.sqrt(data[2]) / 5e2;
            },
            emphasis: {
                label: {
                    show: true,
                    formatter: function (param) {
                        return param.data[1];
                    },
                    position: 'top'
                }
            },
            itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(35, 110, 130, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(139, 21, 218)'
                }, {
                    offset: 1,
                    color: 'rgb(251, 183, 207)'
                }])
            }
        }]
    };
    bubbleGraphic.setOption(buttleOption);
  },
  created() {

  }
});
