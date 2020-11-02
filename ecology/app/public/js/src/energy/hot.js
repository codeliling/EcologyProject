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
    cityMapClick:function(){
      window.location.href = '/energy';
    },
    hotClick:function(){

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
                roam: true,
                enableMapClick:true,
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
                blurSize: 6,
                selectedMode:'single'
            }]
        });
        // 添加百度地图插件
        var bmap = myChart.getModel().getComponent('bmap').getBMap();
        bmap.addControl(new BMap.MapTypeControl());
        bmap.addEventListener("click",function(e){
            console.log(e);
            console.log(e.point);
            let lng = e.point.lng.toFixed(7);
            let lat = e.point.lat.toFixed(7);

            let dataArray = data[0];
            for (let i = 0; i < dataArray.length; i++){

              if(Math.abs(lng - dataArray[i].coord[0]) < 0.001 && Math.abs(lat - dataArray[i].coord[1]) < 0.001){
                window.location.href = '/energy/areabuildings';
                break;
              }
            }
        });
        myChart.hideLoading();

    });
  },
  created() {
    //do something after creating vue instance

  }
});
