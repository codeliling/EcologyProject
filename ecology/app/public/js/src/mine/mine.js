var myChart = echarts.init(document.getElementById('map'));

myChart.showLoading();
$.get('/public/assets/huaihua.json', function (geoJson) {
    myChart.hideLoading();
    echarts.registerMap('HH', geoJson);
    myChart.setOption(option = {
        title: {
          text: '',
          subtext: '各区县产量图',
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

//-----------------------------------------------------------------------------------
var dom = document.getElementById("confidence-band");
var productLine = echarts.init(dom);
var app = {};
var productLineOption = null;
productLine.showLoading();
$.get('/public/assets/confidence-band.json', function (data) {
    productLine.hideLoading();

    var base = -data.reduce(function (min, val) {
        return Math.floor(Math.min(min, val.l));
    }, Infinity);
    productLine.setOption(option = {
        title: {
            text: 'Confidence Band',
            subtext: 'Example in MetricsGraphics.js',
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                animation: false,
                label: {
                    backgroundColor: '#ccc',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    shadowBlur: 0,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    textStyle: {
                        color: '#222'
                    }
                }
            },
            formatter: function (params) {
                return params[2].name + '<br />' + params[2].value;
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: data.map(function (item) {
                return item.date;
            }),
            axisLabel: {
                formatter: function (value, idx) {
                    var date = new Date(value);
                    return idx === 0 ? value : [date.getMonth() + 1, date.getDate()].join('-');
                }
            },
            splitLine: {
                show: false
            },
            boundaryGap: false
        },
        yAxis: {
            axisLabel: {
                formatter: function (val) {
                    return (val - base) * 100 + '%';
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return ((params.value - base) * 100).toFixed(1) + '%';
                    }
                }
            },
            splitNumber: 3,
            splitLine: {
                show: false
            }
        },
        series: [{
            name: 'L',
            type: 'line',
            data: data.map(function (item) {
                return item.l + base;
            }),
            lineStyle: {
                normal: {
                    opacity: 0
                }
            },
            stack: 'confidence-band',
            symbol: 'none'
        }, {
            name: 'U',
            type: 'line',
            data: data.map(function (item) {
                return item.u - item.l;
            }),
            lineStyle: {
                normal: {
                    opacity: 0
                }
            },
            areaStyle: {
                normal: {
                    color: '#ccc'
                }
            },
            stack: 'confidence-band',
            symbol: 'none'
        }, {
            type: 'line',
            data: data.map(function (item) {
                return item.value + base;
            }),
            hoverAnimation: false,
            symbolSize: 6,
            itemStyle: {
                normal: {
                    color: '#c23531'
                }
            },
            showSymbol: false
        }]
    });
});;

//----------------------------------------------------------------------
var barGraphic = echarts.init(document.getElementById('bar-graphic'));

// 指定图表的配置项和数据
var barGraphicOption = {
  xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
      type: 'value'
  },
  series: [{
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
          color: 'rgba(220, 220, 220, 0.8)'
      }
  }]
};

        // 使用刚指定的配置项和数据显示图表。
barGraphic.setOption(barGraphicOption);

//----------------------------------------------------------------------
var disasterGauge = echarts.init(document.getElementById('disaster-gauge'));
disasterGaugeOption = {
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: '业务指标',
            type: 'gauge',
            detail: {formatter: '{value}%'},
            data: [{value: 50, name: '完成率'}]
        }
    ]
};

setInterval(function () {
    disasterGaugeOption.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    disasterGauge.setOption(disasterGaugeOption, true);
},2000);

//-------------------------------------------------------------------------------------------
var disasterLine= echarts.init(document.getElementById('disaster-line'));
disasterLineOption = {
    title: {
        text: '堆叠区域图'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
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
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {},
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};
disasterLine.setOption(disasterLineOption);

//-----------------------------------------------------------------------------
var priceLine= echarts.init(document.getElementById('price-line'));
var price_colors = ['#5793f3', '#d14a61', '#675bba'];

priceOption = {
    color: price_colors,

    tooltip: {
        trigger: 'none',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        data:['2015 降水量', '2016 降水量']
    },
    grid: {
        top: 70,
        bottom: 50
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: price_colors[1]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '降水量  ' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
            data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12']
        },
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: price_colors[0]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '降水量  ' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
            data: ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10', '2015-11', '2015-12']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '2015 降水量',
            type: 'line',
            xAxisIndex: 1,
            smooth: true,
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name: '2016 降水量',
            type: 'line',
            smooth: true,
            data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
        }
    ]
};

priceLine.setOption(priceOption);

//----------------------------------------------------------------------
var evaluateGauge = echarts.init(document.getElementById('evaluate-gauge'));
evaluateGaugeOption = {
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: '业务指标',
            type: 'gauge',
            detail: {formatter: '{value}%'},
            data: [{value: 50, name: '完成率'}]
        }
    ]
};

setInterval(function () {
    evaluateGaugeOption.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    evaluateGauge.setOption(evaluateGaugeOption, true);
},2000);

//-------------------------------------------------------------------------------
var restoreBar = echarts.init(document.getElementById('restore-bar'));
restoreOption = {
    angleAxis: {
    },
    radiusAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四'],
        z: 10
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [1, 2, 3, 4],
        coordinateSystem: 'polar',
        name: 'A',
        stack: 'a'
    }, {
        type: 'bar',
        data: [2, 4, 6, 8],
        coordinateSystem: 'polar',
        name: 'B',
        stack: 'a'
    }, {
        type: 'bar',
        data: [1, 2, 3, 4],
        coordinateSystem: 'polar',
        name: 'C',
        stack: 'a'
    }],
    legend: {
        show: true,
        data: ['A', 'B', 'C']
    }
};

restoreBar.setOption(restoreOption);
