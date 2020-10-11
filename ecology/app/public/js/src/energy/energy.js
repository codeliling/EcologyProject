var app = new Vue({
  el: '#content',
  delimiters: ['${', '}'],
  data: {
    countryName:'鹤城区',
    amount:'680000000.00'
  },
  methods:{
    backClick:function(){
      window.location.href = '/';
    },
    areaMapClick:function(){

    },
    buildingMapClick:function(){

    },
    buildingClick:function(){

    },
    analysisClick:function(){

    }
  },
  mounted() {
    let that = this;
    var myChart = echarts.init(document.getElementById('main'));

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
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: {readOnly: false},
                    restore: {},
                    saveAsImage: {}
                }
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
                    color: ['#CA5019', '#C6751E', '#CA9F38','#B7BA49','#99AC4C','#719D48','#4C7935']
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
                        {name: '沅陵县', value: 530000000.00},
                        {name: '溆浦县', value: 590000000.00},
                        {name: '辰溪县', value: 320000000.00},
                        {name: '麻阳苗族自治县', value: 235000000.00},
                        {name: '鹤城区', value: 680000000.00},
                        {name: '中方县', value: 330000000.00 },
                        {name: '芷江侗族自治县', value: 315000000.00},
                        {name: '新晃侗族自治县', value: 155000000.00},
                        {name: '洪江市', value: 480000000.00},
                        {name: '会同县', value: 220000000.00},
                        {name: '靖州苗族侗族自治县', value:180000000.00 },
                        {name: '通道侗族自治县', value: 150000000.00},
                    ],

                }
            ]
        });
        myChart.on('click', function (params) {
           //window.location.href = '/energy/country?name=' + params.name;
           that.countryName = params.name;
           that.amount = params.value;
        });
    });
    //----------------------------------------------------------------------------------------
    let graphic1 = echarts.init(document.getElementById('graphic1'));
    let graphic1Option = {
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
                    {value: 11, name: '商场建筑'},
                    {value: 20, name: '住宅建筑'},
                    {value: 169, name: '办公建筑'},
                    {value: 60, name: '其他建筑'}
                ]
            }
        ]
    };
    graphic1.setOption(graphic1Option);

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
                stack: '总量',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '沅陵县',
                type: 'line',
                stack: '总量',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '洪江市',
                type: 'line',
                stack: '总量',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '溆浦县',
                type: 'line',
                stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210]
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
            trigger: 'item',
            formatter: '{a} <br/>{b}: ({c}%)',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        color:['#4C7935','#99AC4C','#CA9538','#C6751E'],
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
           type: 'value',
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
           data:['百分比'],
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
                name: '显著节能',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: [11.8]
            },
            {
                name: '比较节能',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: [29.74]
            },
            {
                name: '正常',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: [41.2]
            },
            {
                name: '浪费',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: [17.6]
            }
        ]
    };
    graphic4.setOption(graphic4Option);
  },
  created() {

  }
});
