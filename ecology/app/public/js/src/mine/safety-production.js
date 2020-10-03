var horBarGraphic1 = echarts.init(document.getElementById('hor-bar-graphic1'));
horBarOption1 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['正常', '故障', '修理中']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['当前日']
    },
    series: [
        {
            name: '正常',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [320]
        },
        {
            name: '故障',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [120]
        },
        {
            name: '修理中',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [220]
        }
    ]
};
horBarGraphic1.setOption(horBarOption1);

//-----------------------------------------------------------------------
var horBarGraphic2 = echarts.init(document.getElementById('hor-bar-graphic2'));
horBarOption2 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['正常', '故障', '修理中']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['当前日']
    },
    series: [
        {
            name: '正常',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [320]
        },
        {
            name: '故障',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [120]
        },
        {
            name: '修理中',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [220]
        }
    ]
};
horBarGraphic2.setOption(horBarOption2);

//-----------------------------------------------------------------------
var horBarGraphic3 = echarts.init(document.getElementById('hor-bar-graphic3'));
horBarOption3 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['正常', '故障', '修理中']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['当前日']
    },
    series: [
        {
            name: '正常',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [320]
        },
        {
            name: '故障',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [120]
        },
        {
            name: '修理中',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [220]
        }
    ]
};
horBarGraphic3.setOption(horBarOption3);

//-----------------------------------------------------------------------
var horBarGraphic4 = echarts.init(document.getElementById('hor-bar-graphic4'));
horBarOption4 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['正常', '故障', '修理中']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['当前日']
    },
    series: [
        {
            name: '正常',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [320]
        },
        {
            name: '故障',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [120]
        },
        {
            name: '修理中',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [220]
        }
    ]
};
horBarGraphic4.setOption(horBarOption4);

//-----------------------------------------------------------------------
var horBarGraphic5 = echarts.init(document.getElementById('hor-bar-graphic5'));
horBarOption5 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['正常', '故障', '修理中']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['当前日']
    },
    series: [
        {
            name: '正常',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [320]
        },
        {
            name: '故障',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [120]
        },
        {
            name: '修理中',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [220]
        }
    ]
};
horBarGraphic5.setOption(horBarOption5);

//-------------------------------------------------------------------
var safetyBarGraphic = echarts.init(document.getElementById('safety-bar-graphic'));
// 指定图表的配置项和数据
var safetyBarOption = {
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
safetyBarGraphic.setOption(safetyBarOption);

//-------------------------------------------------------------------
var safetyLineGraphic = echarts.init(document.getElementById('safety-line-graphic'));
var app = {};
var productLineOption = null;
safetyLineGraphic.showLoading();
$.get('/public/assets/confidence-band.json', function (data) {
    safetyLineGraphic.hideLoading();

    var base = -data.reduce(function (min, val) {
        return Math.floor(Math.min(min, val.l));
    }, Infinity);
    safetyLineGraphic.setOption(option = {
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
});

//-----------------------------------------------------------------------
