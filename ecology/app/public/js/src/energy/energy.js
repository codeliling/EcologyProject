var app = new Vue({
  el: '#content',
  delimiters: ['${', '}'],
  data: {
    countryName:'鹤城区',
    amount:'',
    graphic1:{},
    graphic1Option:{},
    elecSurplus1:'',
    elecSurplus2:'',
    elecSurplus3:'',
    elecSurplus4:'',
    updateDate:'',
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
      "鹤城区":[1044100,1019500,958100,1228300,921200,1068600,1105500,1019500,1044100,1130000,1166900,1191500],
      "沅陵县":[568600,555200,521700,668900,501700,581900,602000,555200,568600,615400,635500,648800],
      "溆浦县":[450600,440000,413500,530100,397600,461200,477100,440000,450600,487700,503600,514200],
      "洪江市":[449600,439000,412500,528900,396700,460100,476000,439000,449600,486600,502500,513000],
      "中方县":[263500,257300,241800,310000,232500,269700,279000,257300,263500,285200,294500,300700],
      "辰溪县":[266700,260500,244800,313800,235400,273000,282400,260500,266700,288700,298100,304400],
      "芷江侗族自治县":[241000,235300,221100,283500,212600,246600,255200,235300,241000,260800,269300,275000],
      "麻阳苗族自治县":[191700,187200,175900,225500,169100,196200,203000,187200,191700,207500,214200,218700],
      "会同县":[169700,165700,155700,199600,149700,173700,179600,165700,169700,183600,189600,193600],
      "靖州苗族侗族自治县":[100300,97900,92000,118000,88500,102700,106200,97900,100300,108600,112100,114500],
      "新晃侗族自治县":[108000,105400,99100,127000,95300,110500,114300,105400,108000,116800,120700,123200],
      "通道侗族自治县":[65900,64300,60500,77500,58100,67400,69800,64300,65900,71300,73600,75200],
      "洪江管理区":[14400,14000,13200,16900,12700,14700,15200,14000,14400,15500,16100,16400],
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
    cityMapClick:function(){
      window.location.href = '/energy';
    },
  },
  mounted() {
    let that = this;
    var myChart = echarts.init(document.getElementById('main'));
    var d = new Date();
    var hour = d.getHours();
    if(hour > 12){
      hour = hour - 12;
    }

    that.amount = that.mapData.鹤城区[hour - 1];
    myChart.showLoading();
    $.get('/public/assets/huaihua.json', function (geoJson) {
        myChart.hideLoading();
        echarts.registerMap('HH', geoJson);
        let mapOption = {
            title: {
              text: '',
            },
            tooltip: {
                trigger: 'item',
                formatter: '{b}<br/>{c} (KWh)'
            },
            visualMap: {
                min: 0,
                max: 1300000,
                text: ['', '单位: x10^5 kWh/d'],//两端的文本
                textGap:20,
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
                      normal: {
                        show: true,//显示省份标签
                        textStyle:{color:"#FFFFFF"}//省份标签字体颜色
                      },
                      emphasis: {//对应的鼠标悬浮效果
                        show: true,
                        textStyle:{color:"#FFFFFF"}
                      }
                    },
                    itemStyle: {
                        normal: {
                           borderWidth: .5,//区域边框宽度
                           borderColor: '#5FA731',
                        },
                        emphasis: {
                           borderWidth: .25,//区域边框宽度
                           borderColor: '#5FA731',
                           areaColor:'',
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
        };
        myChart.setOption(mapOption);
        myChart.on("mouseover", function (params){
            mapOption.series[0].itemStyle.emphasis.areaColor = '';
            myChart.setOption(mapOption);
            that.countryName = params.name;
            that.amount = params.value;
            let cName = params.name;
            let graphic1InnerData = that.graphic1Data[cName];
            that.graphic1Option.series[0].data[0].value = graphic1InnerData[0];
            that.graphic1Option.series[0].data[1].value = graphic1InnerData[1];
            that.graphic1Option.series[0].data[2].value = graphic1InnerData[2];
            that.graphic1Option.series[0].data[3].value = graphic1InnerData[3];
            that.graphic1Option.graphic.style.text = params.name;
            that.graphic1.setOption(that.graphic1Option);

            // if(params.data.value != undefined){
            //     myChart.dispatchAction({
            //         type: 'downplay'
            //     });
            // }
        });

        myChart.on('click', function (params) {
           //window.location.href = '/energy/country?name=' + params.name;

           that.countryName = params.name;
           that.amount = params.value;
           let cName = params.name;
           let graphic1InnerData = that.graphic1Data[cName];
           that.graphic1Option.series[0].data[0].value = graphic1InnerData[0];
           that.graphic1Option.series[0].data[1].value = graphic1InnerData[1];
           that.graphic1Option.series[0].data[2].value = graphic1InnerData[2];
           that.graphic1Option.series[0].data[3].value = graphic1InnerData[3];
           that.graphic1Option.graphic.style.text = params.name;
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
        graphic:{       //图形中间文字
            type:"text",
            left:"center",
            top:"100px",
            style:{
                text:"鹤城区",
                textAlign:"center",
                fill:"#A5D9E1",
                fontSize:14,
                fontWeight: 'bold'
            }
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
            name:'x10^4 kWh',
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
                name: '',
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
          name: 'kWh/㎡·a',
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
    var d = new Date();
    this.updateDate = d.getFullYear() +'-'+(d.getMonth() + 1)+'-'+d.getDate();
    var day = d.getDate();
    let data = this.graphic2Data[day - 1];
    
    this.elecSurplus1 = '剩余：'+data[0]+'% ('+ data[1]+'×10^8kWh)';
    this.elecSurplus2 = '剩余：'+data[2]+'% ('+ data[3]+'×10^8kWh)';
    this.elecSurplus3 = '剩余：'+data[4]+'% ('+ data[5]+'×10^8kWh)';
    this.elecSurplus4 = '剩余：'+data[6]+'% ('+ data[7]+'×10^8kWh)';

    let width1 = data[0] * 400 / 100;
    let leftWidth1 = 400 - width1 + 90;
    let width2 = data[2] * 400 / 100;
    let leftWidth2 = 400 - width2 + 90;
    let width3 = data[4] * 400 / 100;
    let leftWidth3 = 400 - width3 + 90;
    let width4 = data[6] * 400 / 100;
    let leftWidth4 = 400 - width4 + 90;


    $(".box2-block-bar2").css('width',width1);
    $(".box2-block-bar2").css('left', 400 - width1 + 85);
    if(width1 > 200){
      $(".box2-block-bar-value1").css('left',leftWidth1);
    }
    else{
      $(".box2-block-bar-value1").css('left',leftWidth1 - 170);
    }

    $(".box2-block-bar3").css('width',width2);
    $(".box2-block-bar3").css('left', 400 - width2 + 85);
    if(width2 > 200){
      $(".box2-block-bar-value2").css('left',leftWidth2);
    }
    else{
      $(".box2-block-bar-value2").css('left',leftWidth2 - 170);
    }

    $(".box2-block-bar4").css('width',width3);
    $(".box2-block-bar4").css('left', 400 - width3 + 85);
    if(width3 > 200){
      $(".box2-block-bar-value3").css('left',leftWidth3);
    }
    else{
      $(".box2-block-bar-value3").css('left',leftWidth3 - 170);
    }

    $(".box2-block-bar5").css('width',width4);
    $(".box2-block-bar5").css('left', 400 - width4 + 85);
    if(width4 > 200){
      $(".box2-block-bar-value4").css('left',leftWidth4);
    }
    else{
      $(".box2-block-bar-value4").css('left',leftWidth4 -170);
    }


  }
});
