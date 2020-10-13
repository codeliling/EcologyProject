var app = new Vue({
  el: '#content',
  delimiters: ['${', '}'],
  data: {

  },
  methods:{
    backClick:function(){
      window.location.href = '/';
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
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));
    var country = getUrlKey('name');
    myChart.showLoading();

    var data = [
      {name: '河东', value: 9},
      {name: '河西', value: 12},
      {name: '市中心', value: 12},
    ];

    var geoCoordMap = {
      '河东':[109.868288,27.736322],
      '河西':[110.060601,27.731307],
      '市中心':[110.06164,27.527858],
    };

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };

    var jsonUrl = '/public/assets/hechengqu.json';
    if(country == '鹤城区'){
      jsonUrl = '/public/assets/hechengqu.json';
    }

    $.get(jsonUrl, function (geoJson) {
        myChart.hideLoading();
        echarts.registerMap('HC', geoJson);
        myChart.setOption(option = {
            title: {
                text: '',
                subtext: country + '能耗图',
            },
            tooltip: {
                trigger: 'item',
                formatter: '{b}<br/>{c} (p / km2)'
            },
            geo: {
               show: true,
               map: 'HC',
               label: {
                 normal: {
                   show: false
                 },
                 emphasis: {
                   show: true
                 }
               },
               roam: true,
               itemStyle: {
                 normal: {
                   areaColor: '#4C7935',
                   borderColor: '#3B5077'
                 },
                 emphasis: {
                   areaColor: '#719D48'
                 }
               },
               zoom: 0.8
             },
            series: [
                {
                  name: '能耗',
                  type: 'scatter',
                  coordinateSystem: 'geo',
                  data: convertData(data),
                  symbolSize: function (val) {
                      return val[2] * 5;
                  },
                  encode: {
                      value: 2
                  },
                  label: {
                      formatter: '{b}',
                      position: 'right',
                      show: false
                  },
                  itemStyle: {
                      color: 'purple'
                  },
                  emphasis: {
                      label: {
                          show: true
                      }
                  },
                  roam: true,
              },
            ]
        });

        myChart.on('click', function (params) {
           window.location.href = '/energy/hotgraphic';
        });
    });
  },
  created() {

  },
});
