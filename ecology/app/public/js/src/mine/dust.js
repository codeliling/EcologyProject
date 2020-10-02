var myChart = echarts.init(document.getElementById('map'));

myChart.showLoading();
$.get('/public/assets/huaihua.json', function (geoJson) {
    myChart.hideLoading();
    echarts.registerMap('HH', geoJson);
    myChart.setOption(option = {
        title: {
          text: '',
          subtext: '矿山水质监测大图',
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
            min: 10000,
            max: 100000,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            orient: 'vertical',
            left: 'right',
            top: 'bottom',
            inRange: {
                color: ['lightskyblue', 'yellow', 'orangered']
            }
        },
        series: [
            {
                name: '怀化市生态矿山',
                type: 'map',
                mapType: 'HH', // 自定义扩展图表类型
                label: {
                    show: true
                },
                roam:true,
                data: [
                    {name: '沅陵县', value: 53000.00},
                    {name: '溆浦县', value: 59000.00},
                    {name: '辰溪县', value: 32000.00},
                    {name: '麻阳苗族自治县', value: 23500.00},
                    {name: '鹤城区', value: 68000.00},
                    {name: '中方县', value: 33000.00 },
                    {name: '芷江侗族自治县', value: 31500.00},
                    {name: '新晃侗族自治县', value: 15500.00},
                    {name: '洪江市', value: 48000.00},
                    {name: '会同县', value: 22000.00},
                    {name: '靖州苗族侗族自治县', value:18000.00 },
                    {name: '通道侗族自治县', value: 15000.00},
                ],

            }
        ]
    });
    myChart.on('click', function (params) {

    });
});

//---------------------------------------------------------------------------
var dustPieGraphic = echarts.init(document.getElementById('dust-pie'));
dustPieOption = {

    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    graphic:[
        {
            type:"text",
                left:"center",
                top:"40%",
                style:{
                    text:"总监测点",
                    textAlign:"center",
                    fill:"#000",
                    fontSize:30
                }
        },
        {
            type:"text",
                left:"center",
                top:"50%",
                style:{
                    text:"100",
                    textAlign:"center",
                    fill:"#000",
                    fontSize:26
                }
        }
    ],
    series: [
        {

            name: '',
            type: 'pie',
            radius: ['50%', '80%'],
            avoidLabelOverlap: false,

            labelLine: {
                show: false
            },
            data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'}
            ]
        }
    ]
};

dustPieGraphic.setOption(dustPieOption);

//---------------------------------------------------------------------------
var dustBarGraphic = echarts.init(document.getElementById('dust-bar'));
dustBarOption = {
    title: {
        text: '某地区蒸发量和降水量',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['蒸发量', '降水量']
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '蒸发量',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        {
            name: '降水量',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            markPoint: {
                data: [
                    {name: '年最高', value: 182.2, xAxis: 7, yAxis: 183},
                    {name: '年最低', value: 2.3, xAxis: 11, yAxis: 3}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        }
    ]
};

dustBarGraphic.setOption(dustBarOption);

//------------------------------------------------------------------------------------
var dustLineGraphic = echarts.init(document.getElementById('dust-line'));

var data = [["2000-06-05",116],["2000-06-06",129],["2000-06-07",135],["2000-06-08",86],["2000-06-09",73],["2000-06-10",85],["2000-06-11",73],["2000-06-12",68],["2000-06-13",92],["2000-06-14",130],["2000-06-15",245],["2000-06-16",139],["2000-06-17",115],["2000-06-18",111],["2000-06-19",309],["2000-06-20",206],["2000-06-21",137],["2000-06-22",128],["2000-06-23",85],["2000-06-24",94],["2000-06-25",71],["2000-06-26",106],["2000-06-27",84],["2000-06-28",93],["2000-06-29",85],["2000-06-30",73],["2000-07-01",83],["2000-07-02",125],["2000-07-03",107],["2000-07-04",82],["2000-07-05",44],["2000-07-06",72],["2000-07-07",106],["2000-07-08",107],["2000-07-09",66],["2000-07-10",91],["2000-07-11",92],["2000-07-12",113],["2000-07-13",107],["2000-07-14",131],["2000-07-15",111],["2000-07-16",64],["2000-07-17",69],["2000-07-18",88],["2000-07-19",77],["2000-07-20",83],["2000-07-21",111],["2000-07-22",57],["2000-07-23",55],["2000-07-24",60]];

var dateList = data.map(function (item) {
    return item[0];
});
var valueList = data.map(function (item) {
    return item[1];
});

dustLineOption = {

    // Make gradient line here
    visualMap: [{
        show: false,
        type: 'continuous',
        seriesIndex: 0,
        min: 0,
        max: 400
    }],


    title: [{
        left: 'center',
        text: 'Gradient along the y axis'
    }],
    tooltip: {
        trigger: 'axis'
    },
    xAxis: [{
        data: dateList
    }],
    yAxis: [{
        splitLine: {show: false}
    }],
    grid: [{
        bottom: '60%'
    }, {
        top: '60%'
    }],
    series: [{
        type: 'line',
        showSymbol: false,
        data: valueList
    }]
};

dustLineGraphic.setOption(dustLineOption);
