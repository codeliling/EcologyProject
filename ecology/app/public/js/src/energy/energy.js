var app = new Vue({
  el: '#content',
  delimiters: ['${', '}'],
  data: {
    countryName:'鹤城区',
    amount:'',
    graphic1:{},
    graphic1Option:{},
    graphic1Data:{
      "鹤城区":[20,71,8,25],
      "沅陵县":[9,45,5,16],
      "溆浦县":[4,46,5,16],
      "洪江市":[6,42,5,15],
      "中方县":[1,33,4,11],
      "辰溪县":[2,32,4,11],
      "芷江侗族自治县":[2,30,3,10],
      "麻阳苗族自治县":[3,21,2,7],
      "会同县":[3,19,2,6],
      "靖州苗族侗族自治县":[3,8,1,3],
      "新晃侗族自治县":[5,5,1,2],
      "通道侗族自治县":[2,6,1,2],
      "洪江管理区":[0,2,0,1]
    },

    mapData:{
      "鹤城区":[12300,24600,36800,49100,86000,122800,184200,245700,307100,368500,429900,491300,552700,675600,737000,798400,859800,921200,982700,1044100,1105500,1154600,1191500,1228300],
      "沅陵县":[6700,13400,20100,26800,46800,66900,100300,133800,167200,200700,234100,267500,301000,367900,401300,434800,468200,501700,535100,568500,602000,628700,648800,668900],
      "溆浦县":[5300,10600,15900,21200,37100,53000,79500,106000,132500,159000,185500,212000,238500,291500,318000,344600,371100,397600,424100,450600,477100,498300,514200,530100],
      "洪江市":[5300,10600,15900,21200,37000,52900,79300,105800,132200,158700,185100,211600,238000,290900,317300,343800,370200,396700,423100,449600,476000,497200,513000,528900],
      "中方县":[3100,6200,9300,12400,21700,31000,46500,62000,77500,93000,108500,124000,139500,170500,186000,201500,217000,232500,248000,263500,279000,291400,300700,310000],
      "辰溪县":[3100,6300,9400,12600,22000,31400,47100,62800,78400,94100,109800,125500,141200,172600,188300,204000,219700,235300,251000,266700,282400,295000,304400,313800],
      "芷江侗族自治县":[2800,5700,8500,11300,19800,28400,42500,56700,70900,85100,99200,113400,127600,156000,170100,184300,198500,212700,226800,241000,255200,266500,275000,283500],
      "麻阳苗族自治县":[2300,4500,6800,9000,15800,22600,33800,45100,56400,67700,78900,90200,101500,124000,135300,146600,157900,169100,180400,191700,203000,212000,218700,225500],
      "会同县":[2000,4000,6000,8000,14000,20000,29900,39900,49900,59900,69900,79900,89800,109800,119800,129800,139800,149700,159700,169700,179700,187700,193700,199600],
      "靖州苗族侗族自治县":[1200,2400,3500,4700,8300,11800,17700,23600,29500,35400,41300,47200,53100,64900,70800,76700,82600,88500,94400,100300,106200,110900,114500,118000],
      "新晃侗族自治县":[1300,2500,3800,5100,8900,12700,19000,25400,31700,38100,44400,50800,57100,69800,76200,82500,88900,95200,101600,107900,114300,119300,123200,127000],
      "通道侗族自治县":[780,1600,2300,3100,5400,7800,11600,15500,19400,23300,27100,31000,34900,42600,46500,50400,54300,58100,62000,65900,69800,72900,75200,77500],
      "洪江管理区":[170,340,510,680,1200,1700,2500,3400,4200,5100,5900,6800,7600,9300,10100,11000,11800,12700,13500,14400,15200,15900,16400,16900],
    },

    graphic2Data:[
        [100,3.75,100,1.89,100,1.69,100,1.17],
        [98,3.68,98,1.85,97,1.64,98,1.15],
        [95,3.56,96,1.81,94,1.59,97,1.13],
        [93,3.49,94,1.78,92,1.55,95,1.11],
        [91,3.41,92,1.74,90,1.52,93,1.09],
        [88,3.30,90,1.70,87,1.47,91,1.06],
        [85,3.19,87,1.64,84,1.42,88,1.03],
        [81,3.04,85,1.61,80,1.35,86,1.01],
        [79,2.96,83,1.57,78,1.32,84,0.98],
        [76,2.85,81,1.53,75,1.27,82,0.96],
        [73,2.74,78,1.47,72,1.22,79,0.92],
        [71,2.66,75,1.42,70,1.18,76,0.89],
        [69,2.59,72,1.36,68,1.15,73,0.85],
        [63,2.36,70,1.32,62,1.05,71,0.83],
        [60,2.25,67,1.27,59,1.00,68,0.80],
        [58,2.18,65,1.23,57,0.96,66,0.77],
        [55,2.06,62,1.17,54,0.91,63,0.74],
        [52,1.95,60,1.13,51,0.86,61,0.71],
        [50,1.88,57,1.08,49,0.83,58,0.68],
        [48,1.80,55,1.04,47,0.79,56,0.66],
        [45,1.69,53,1.00,44,0.74,54,0.63],
        [43,1.61,50,0.95,42,0.71,52,0.61],
        [40,1.50,47,0.89,39,0.66,49,0.57],
        [38,1.43,45,0.85,36,0.61,46,0.54],
        [35,1.31,43,0.81,33,0.56,43,0.50],
        [32,1.20,40,0.76,31,0.52,41,0.48],
        [29,1.09,38,0.72,28,0.47,38,0.44],
        [27,1.01,35,0.66,26,0.44,36,0.42],
        [25,0.94,33,0.62,24,0.41,34,0.40],
        [23,0.86,31,0.59,22,0.37,32,0.37],
        [21,0.79,29,0.55,19,0.32,29,0.34],
      ],

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
    let that = this;
    var myChart = echarts.init(document.getElementById('main'));
    var d = new Date();
    var hour = d.getHours();
    that.amount = that.mapData.鹤城区[hour];
    myChart.showLoading();
    $.get('/public/assets/huaihua.json', function (geoJson) {
        myChart.hideLoading();
        echarts.registerMap('HH', geoJson);
        myChart.setOption(option = {
            title: {
              text: '',
            },
            tooltip: {
                trigger: 'item',
                formatter: '{b}<br/>{c} (kWh/d)'
            },
            visualMap: {
                min: 100000000,
                max: 1000000000,
                text: ['High', 'Low'],
                realtime: false,
                calculable: true,
                orient: 'vertical',
                left: 'right',
                top: 'bottom',
                right: '60px',
                textStyle: {
                    fontSize: 12,
                    color: '#A5D9E1'
                },
                inRange: {
                    color: ['#4C7935','#719D48','#99AC4C','#B7BA49','#CA9F38','#C6751E','#CA5019']
                }
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
                        {name: '沅陵县', value: that.mapData.沅陵县[hour]},
                        {name: '溆浦县', value: that.mapData.溆浦县[hour]},
                        {name: '辰溪县', value: that.mapData.辰溪县[hour]},
                        {name: '麻阳苗族自治县', value: that.mapData.麻阳苗族自治县[hour]},
                        {name: '鹤城区', value: that.mapData.鹤城区[hour]},
                        {name: '中方县', value: that.mapData.中方县[hour]},
                        {name: '芷江侗族自治县', value: that.mapData.芷江侗族自治县[hour]},
                        {name: '新晃侗族自治县', value: that.mapData.新晃侗族自治县[hour]},
                        {name: '洪江市', value: that.mapData.洪江市[hour]},
                        {name: '会同县', value: that.mapData.会同县[hour]},
                        {name: '靖州苗族侗族自治县', value: that.mapData.靖州苗族侗族自治县[hour]},
                        {name: '通道侗族自治县', value: that.mapData.通道侗族自治县[hour]},
                    ],

                }
            ]
        });
        myChart.on('click', function (params) {
           //window.location.href = '/energy/country?name=' + params.name;
           that.countryName = params.name;
           that.amount = params.value;
           let cName = params.name;
           let graphic1InnerData = that.graphic1Data[cName];
           console.log(graphic1InnerData);
           that.graphic1Option.series[0].data[0].value = graphic1InnerData[0];
           that.graphic1Option.series[0].data[1].value = graphic1InnerData[1];
           that.graphic1Option.series[0].data[2].value = graphic1InnerData[2];
           that.graphic1Option.series[0].data[3].value = graphic1InnerData[3];
           that.graphic1.setOption(that.graphic1Option);
        });
    });
    //----------------------------------------------------------------------------------------
    that.graphic1 = echarts.init(document.getElementById('graphic1'));
    that.graphic1Option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            icon:'circle',
            orient: 'horizontal',
            data: ['商场建筑', '住宅建筑', '办公建筑','其他建筑'],
            textStyle: {
                fontSize: 12,
                color: '#A5D9E1'
            },
            x:'center',
            y:'bottom',
            width:'200',
            padding:[10, 30, 5, 5],
            itemWidth:30,
        },
        grid: [{
           left: '10%',
           bottom: '50px',
           top: '0px',
           right: '10%'
       }],
        color:['#3074B1','#B691C1','#A1D1DA','#7D57A1'],
        series: [
            {
                name: '概况',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                center: ["50%", "40%"],
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    {value: 20, name: '商场建筑'},
                    {value: 71, name: '住宅建筑'},
                    {value: 8, name: '办公建筑'},
                    {value: 25, name: '其他建筑'}
                ]
            }
        ]
    };
    that.graphic1.setOption(that.graphic1Option);

    let graphic2 = echarts.init(document.getElementById('graphic2'));
    let graphic2Option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            icon:'circle',
            data: ['鹤城区', '沅陵县', '洪江市', '溆浦县'],
            textStyle: {
                fontSize: 12,
                color: '#A5D9E1'
            },
        },
        color:['#7D57A1','#3074B1','#A1D1DA','#B691C1'],
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
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
                name: '鹤城区',
                type: 'line',
                data: [1150,1200,1100,1250,1300,1350,1360]
            },
            {
                name: '沅陵县',
                type: 'line',
                data: [600,630,600,630,650,600,620]
            },
            {
                name: '洪江市',
                type: 'line',
                data: [490,510,550,550,570,500,520]
            },
            {
                name: '溆浦县',
                type: 'line',
                data: [450,460,420,390,400,380,350]
            }
        ]
    };
    graphic2.setOption(graphic2Option);

    let graphic3 = echarts.init(document.getElementById('graphic3'));
    let graphic3Option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            icon:'circle',
            orient: 'horizontal',
            data: ['高能耗型建筑', '中能耗型建筑', '低能耗型建筑'],
            textStyle: {
                fontSize: 12,
                color: '#A5D9E1'
            },
            x:'center',
            y:'bottom',
            width:'200',
            padding:[10, 30,5, 5],
            itemWidth:30,
        },
        color:['#3074B1','#B691C1','#A1D1DA'],
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                center: ["50%", "35%"],
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    {value: 329.62, name: '高能耗型建筑'},
                    {value: 241.85, name: '中能耗型建筑'},
                    {value: 163.72, name: '低能耗型建筑'}
                ]
            }
        ]
    };
    graphic3.setOption(graphic3Option);

    let graphic4 = echarts.init(document.getElementById('graphic4'));

    graphic4Option = {
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'shadow'
          }
      },
      color:['#B691C1','#7D57A1','#A1D1DA','#81B854','#3074B1'],
      legend: {
          icon:'circle',
          data: ['区域能耗指标', '商场建筑能耗指标', '办公建筑能耗指标', '住宅建筑能耗指标','其它建筑能耗指标'],
          textStyle: {
              fontSize: 12,
              color: '#A5D9E1'
          },
      },
      grid: {
          left: 50,
          right:80,
      },
      xAxis: {
          type: 'value',
          name: 'Kwh/m2.a',
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
          type: 'category',
          inverse: true,
          data: ['鹤城区', '沅陵县', '溆浦县','洪江市'],
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
              name: '区域能耗指标',
              type: 'bar',
              label: {
                show: true,
                position: 'right'
              },
              data: [128,120,108,109]
          },
          {
              name: '商场建筑能耗指标',
              type: 'bar',
              label: {
                show: true,
                position: 'right'
              },
              data: [180,172,165,163]
          },
          {
              name: '办公建筑能耗指标',
              type: 'bar',
              label: {
                show: true,
                position: 'right'
              },
              data: [95,93,88,85]
          },
          {
              name: '住宅建筑能耗指标',
              type: 'bar',
              label: {
                show: true,
                position: 'right'
              },
              data: [111,103,101,97]
          },
          {
              name: '其它建筑能耗指标',
              type: 'bar',
              label: {
                show: true,
                position: 'right'
              },
              data: [135,133,129,126]
          }
      ]
    };
    graphic4.setOption(graphic4Option);
  },
  created() {

  }
});
