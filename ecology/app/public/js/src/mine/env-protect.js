//-----------------------------------------------------------------------
var sunburstGraphic = echarts.init(document.getElementById('sunburst-graphic'));
var sunburstData = [{
    name: 'Grandpa',
    children: [{
        name: 'Uncle Leo',
        value: 15,
        children: [{
            name: 'Cousin Jack',
            value: 2
        }, {
            name: 'Cousin Mary',
            value: 5,
            children: [{
                name: 'Jackson',
                value: 2
            }]
        }, {
            name: 'Cousin Ben',
            value: 4
        }]
    }, {
        name: 'Aunt Jane',
        children: [{
            name: 'Cousin Kate',
            value: 4
        }]
    }, {
        name: 'Father',
        value: 10,
        children: [{
            name: 'Me',
            value: 5,
            itemStyle: {
                color: 'red'
            }
        }, {
            name: 'Brother Peter',
            value: 1
        }]
    }]
}, {
    name: 'Mike',
    children: [{
        name: 'Uncle Dan',
        children: [{
            name: 'Cousin Lucy',
            value: 3
        }, {
            name: 'Cousin Luck',
            value: 4,
            children: [{
                name: 'Nephew',
                value: 2
            }]
        }]
    }]
}, {
    name: 'Nancy',
    children: [{
        name: 'Uncle Nike',
        children: [{
            name: 'Cousin Betty',
            value: 1
        }, {
            name: 'Cousin Jenny',
            value: 2
        }]
    }]
}];

sunburstOption = {
    visualMap: {
        type: 'continuous',
        min: 0,
        max: 10,
        inRange: {
            color: ['#2D5F73', '#538EA6', '#F2D1B3', '#F2B8A2', '#F28C8C']
        }
    },
    series: {
        type: 'sunburst',
        data: sunburstData,
        radius: [0, '90%'],
        label: {
            rotate: 'radial'
        }
    }
};

sunburstGraphic.setOption(sunburstOption);

//-----------------------------------------------------------------------
var airMonitorGraphic1 = echarts.init(document.getElementById('air-monitor-graphic1'));
var airMonitorOption1 = {

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
                    fontSize:22
                }
        },
        {
            type:"text",
                left:"center",
                top:"52%",
                style:{
                    text:"100",
                    textAlign:"center",
                    fill:"#000",
                    fontSize:18
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
airMonitorGraphic1.setOption(airMonitorOption1);

//-----------------------------------------------------------------------
var airMonitorGraphic2 = echarts.init(document.getElementById('air-monitor-graphic2'));
airMonitorOption2 = {
        legend: {},
        tooltip: {
            trigger: 'axis',
            showContent: false
        },
        dataset: {
            source: [
                ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
                ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
                ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
                ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
                ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
            ]
        },
        xAxis: {type: 'category'},
        yAxis: {gridIndex: 0},
        series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},

        ]
    };

airMonitorGraphic2.setOption(airMonitorOption2);

//-----------------------------------------------------------------------
var waterMonitorGraphic1 = echarts.init(document.getElementById('water-monitor-graphic1'));
var waterMonitorOption1 = {

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
                    fontSize:22
                }
        },
        {
            type:"text",
                left:"center",
                top:"52%",
                style:{
                    text:"100",
                    textAlign:"center",
                    fill:"#000",
                    fontSize:18
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
waterMonitorGraphic1.setOption(waterMonitorOption1);

//-----------------------------------------------------------------------
var waterMonitorGraphic2 = echarts.init(document.getElementById('water-monitor-graphic2'));
waterMonitorOption2 = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
        }
    ]
};
waterMonitorGraphic2.setOption(waterMonitorOption2);

//-----------------------------------------------------------------------
var noiseMonitorGraphic1 = echarts.init(document.getElementById('noise-monitor-graphic1'));
var noiseMonitorOption1 = {

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
                    fontSize:22
                }
        },
        {
            type:"text",
                left:"center",
                top:"52%",
                style:{
                    text:"100",
                    textAlign:"center",
                    fill:"#000",
                    fontSize:18
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
noiseMonitorGraphic1.setOption(noiseMonitorOption1);

//-----------------------------------------------------------------------
var noiseMonitorGraphic2 = echarts.init(document.getElementById('noise-monitor-graphic2'));
$.get('/public/assets/aqi-beijing.json', function (data) {
    noiseMonitorGraphic2.setOption(option = {
        title: {
            text: 'Beijing AQI'
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            data: data.map(function (item) {
                return item[0];
            })
        },
        yAxis: {
            splitLine: {
                show: false
            }
        },
        toolbox: {
            left: 'center',
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        dataZoom: [{
            startValue: '2014-06-01'
        }, {
            type: 'inside'
        }],
        visualMap: {
            top: 10,
            right: 10,
            pieces: [{
                gt: 0,
                lte: 50,
                color: '#096'
            }, {
                gt: 50,
                lte: 100,
                color: '#ffde33'
            }, {
                gt: 100,
                lte: 150,
                color: '#ff9933'
            }, {
                gt: 150,
                lte: 200,
                color: '#cc0033'
            }, {
                gt: 200,
                lte: 300,
                color: '#660099'
            }, {
                gt: 300,
                color: '#7e0023'
            }],
            outOfRange: {
                color: '#999'
            }
        },
        series: {
            name: 'Beijing AQI',
            type: 'line',
            data: data.map(function (item) {
                return item[1];
            }),
            markLine: {
                silent: true,
                data: [{
                    yAxis: 50
                }, {
                    yAxis: 100
                }, {
                    yAxis: 150
                }, {
                    yAxis: 200
                }, {
                    yAxis: 300
                }]
            }
        }
    });
});

//-----------------------------------------------------------------------
var dustMonitorGraphic1 = echarts.init(document.getElementById('dust-monitor-graphic1'));
var dustMonitorOption1 = {

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
                    fontSize:22
                }
        },
        {
            type:"text",
                left:"center",
                top:"52%",
                style:{
                    text:"100",
                    textAlign:"center",
                    fill:"#000",
                    fontSize:18
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
dustMonitorGraphic1.setOption(dustMonitorOption1);

//-----------------------------------------------------------------------
var dustMonitorGraphic2 = echarts.init(document.getElementById('dust-monitor-graphic2'));
dustMonitorOption2 = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
};
dustMonitorGraphic2.setOption(dustMonitorOption2);
