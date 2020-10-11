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

    },
    buildingClick:function(){
      window.location.href = '/energy/buildings';
    },
    analysisClick:function(){

    }
  },
  mounted() {
    var myChart = echarts.init(document.getElementById('main'));

    myChart.showLoading();

    $.get('/public/assets/hot3.json', function (data) {

        var points = [].concat.apply([], data.map(function (track) {
            return track.map(function (seg) {
                return seg.coord.concat(seg.elevation);
            });
        }));
        myChart.setOption(option = {
            animation: false,
            bmap: {
                center: [109.97212399999996, 27.537940352363537],
                zoom: 13,
                roam: true
            },
            visualMap: {
                show: false,
                top: 'top',
                min: -50,
                max: 490,
                seriesIndex: 0,
                orient: 'vertical',
                left: 'right',
                top: 'bottom',
                right: '60px',
                textStyle: {
                    fontSize: 12,
                    color: '#A5D9E1'
                },
                splitNumber: 60,
                calculable: true,
                inRange: {
                    color: ['#195256', '#206C7C', '#2EA9A1', '#91EABC','#FFF598', '#F7B74A', '#FB7F31',  '#FF4818','#F20606', ]
                }
            },
            series: [{
                type: 'heatmap',
                coordinateSystem: 'bmap',
                data: points,
                pointSize: 5,
                blurSize: 6
            }]
        });
        // 添加百度地图插件
        var bmap = myChart.getModel().getComponent('bmap').getBMap();
        bmap.addControl(new BMap.MapTypeControl());
        myChart.hideLoading();

        myChart.on('click', function (params) {
           console.log(params);
           //逻辑控制
        });
    });
  },
  created() {
    //do something after creating vue instance

  }
});
