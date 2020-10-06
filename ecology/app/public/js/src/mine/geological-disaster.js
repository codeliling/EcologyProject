var app = new Vue({
  el: '#content',
  delimiters: ['${', '}'],
  data: {
    lineGraphicxAxisData:[
      "2020/1/1","2020/1/2","2020/1/3","2020/1/4","2020/1/5","2020/1/6","2020/1/7","2020/1/8","2020/1/9","2020/1/10","2020/1/11","2020/1/12","2020/1/13","2020/1/14","2020/1/15","2020/1/16","2020/1/17","2020/1/18","2020/1/19","2020/1/20","2020/1/21","2020/1/22","2020/1/23","2020/1/24","2020/1/25","2020/1/26","2020/1/27","2020/1/28","2020/1/29","2020/1/30"
    ],
    //30条数据
    lineGraphic:{},
    lineOption:{},
    currentLineXAxisData:[],
    cnss1:[1.22,0.14,0.56,2.33,1.45,1.43,0.57,0.88,3.46,1.67,1.22,0.14,4.23,2.33,1.45,3.56,5.33,4.45,4.43,3.57,3.88,5.66,7.13,2.33,1.45,1.43,0.57,0.88,2.66,4.13],
    cnss2:[2.57,2.88,5.46,4.43,3.22,2.11,1.57,1.88,4.46,2.22,1.14,1.56,3.33,2.45,2.45,3.14,1.57,1.88,1.23,5.12,2.22,1.11,1.56,2.88,5.14,3.57,3.88,6.46,5.43,4.22],
    cnss3:[1.408,-0.171,1.375,1.003,5.401,2.701,-2.988,5.142,5.163,1.423,0.241,0.506,3.034,0.217,5.036,5.33,4.45,2.56,4.33,3.45,3.43,2.57,2.88,4.66,6.13,2.23,1.57,1.88,4.46,3.43],
    cnss4:[0.826,-0.967,0.92,0.296,1.897,2.487,2.731,1.659,4.556,1.226,-0.128,-0.048,2.838,-0.666,1.847,2.45,2.43,1.57,1.88,1.77,2.13,0.46,0.88,1.46,2.43,1.22,0.11,0.56,2.33,1.45],
    cnss5:[0.244,-1.763,0.465,-0.411,1.393,2.273,-6.474,2.176,3.949,1.029,-0.497,-0.602,2.642,-1.549,4.658,3.335,1.99,0.625,1.83,1.71,4.905,2.915,-1.245,4.625,4.77,1.62,0.61,1.06,3.23,1.1],
    cnss6:[2.45,2.43,1.57,1.88,1.77,2.727,3.683,7.537,8.46,5.62,1.035,2.705,4.68,3.68,7.76,2.765,-0.92,-3.355,-0.445,-1.825,7.385,1.845,4.45,5.46,3.67,3.22,2.14,6.23,3.14,3.56],
    cnss7:[3.335,1.99,0.625,1.83,1.71,7.674,11.526,8.859,9.46,6.032,12.176,10.756,4.73,3.821,8.435,2.651,-1.502,-4.151,-0.9,-2.532,7.881,1.631,4.43,6.46,2.56,4.33,3.45,3.43,2.57,3.33],
    currentCnss1:[],
    currentCnss2:[],
    currentCnss3:[],
    currentCnss4:[],
    currentCnss5:[],
    currentCnss6:[],
    currentCnss7:[],

    debrisFlowxAxisData:["2020/1/1","2020/1/2","2020/1/3","2020/1/4","2020/1/5","2020/1/6","2020/1/7","2020/1/8","2020/1/9","2020/1/10","2020/1/11","2020/1/12","2020/1/13","2020/1/14","2020/1/15","2020/1/16","2020/1/17","2020/1/18","2020/1/19","2020/1/20","2020/1/21","2020/1/22","2020/1/23","2020/1/24","2020/1/25","2020/1/26","2020/1/27","2020/1/28","2020/1/29","2020/1/30","2020/1/31"],
    debrisFlowOffsetMonitor1:[0.826,-0.967,0.92,0.296,1.897,2.487,2.731,1.659,4.556,1.226,-0.128,-0.048,2.838,-0.666,1.847,2.45,2.43,1.57,1.88,1.77,2.13,0.46,0.88,1.46,2.43,1.22,0.11,0.56,2.33,1.45,3.23],
    debrisFlowHorMonitor1:[3.335,1.99,0.625,1.83,1.71,7.674,11.526,8.859,9.46,6.032,12.176,10.756,4.73,3.821,8.435,2.651,-1.502,-4.151,-0.9,-2.532,7.881,1.631,4.43,6.46,2.56,4.33,3.45,3.43,2.57,3.33,2.45],
    debrisFlowOffsetMonitor2:[0.244,-1.763,0.465,-0.411,1.393,2.273,-6.474,2.176,3.949,1.029,-0.497,-0.602,2.642,-1.549,4.658,3.335,1.99,0.625,1.83,1.71,4.905,2.915,-1.245,4.625,4.77,1.62,0.61,1.06,3.23,1.1,4.225],
    debrisFlowHorMonitor2:[1.408,-0.171,1.375,1.003,5.401,2.701,-2.988,5.142,5.163,1.423,0.241,0.506,3.034,0.217,5.036,5.33,4.45,2.56,4.33,3.45,3.43,2.57,2.88,4.66,6.13,2.23,1.57,1.88,4.46,3.43,11.245],
    debrisFlowOffsetMonitor3:[1.22,0.14,0.56,2.33,1.45,1.43,0.57,0.88,3.46,1.67,1.22,0.14,4.23,2.33,1.45,3.56,5.33,4.45,4.43,3.57,3.88,5.66,7.13,2.33,1.45,1.43,0.57,0.88,2.66,4.13,0.23],
    debrisFlowHorMonitor3:[2.57,2.88,5.46,4.43,3.22,2.11,1.57,1.88,4.46,2.22,1.14,1.56,3.33,2.45,2.45,3.14,1.57,1.88,1.23,5.12,2.22,1.11,1.56,2.88,5.14,3.57,3.88,6.46,5.43,4.22,3.11],
    debrisFlowOffsetMonitor4:[1.408,-0.171,1.375,1.003,5.401,2.701,-2.988,5.142,5.163,1.423,0.241,0.506,3.034,0.217,5.036,5.33,4.45,2.56,4.33,3.45,3.43,2.57,2.88,4.66,6.13,2.23,1.57,1.88,4.46,3.43,11.245],
    debrisFlowHorMonitor4:[0.826,-0.967,0.92,0.296,1.897,2.487,2.731,1.659,4.556,1.226,-0.128,-0.048,2.838,-0.666,1.847,2.45,2.43,1.57,1.88,1.77,2.13,0.46,0.88,1.46,2.43,1.22,0.11,0.56,2.33,1.45,3.23],
    debrisFlowOffsetMonitor5:[0.244,-1.763,0.465,-0.411,1.393,2.273,-6.474,2.176,3.949,1.029,-0.497,-0.602,2.642,-1.549,4.658,3.335,1.99,0.625,1.83,1.71,4.905,2.915,-1.245,4.625,4.77,1.62,0.61,1.06,3.23,1.1,4.225],
    debrisFlowHorMonitor5:[2.45,2.43,1.57,1.88,1.77,2.727,3.683,7.537,8.46,5.62,1.035,2.705,4.68,3.68,7.76,2.765,-0.92,-3.355,-0.445,-1.825,7.385,1.845,4.45,5.46,3.67,3.22,2.14,6.23,3.14,3.56,5.33],
    debrisFlowOffsetMonitor6:[3.335,1.99,0.625,1.83,1.71,7.674,11.526,8.859,9.46,6.032,12.176,10.756,4.73,3.821,8.435,2.651,-1.502,-4.151,-0.9,-2.532,7.881,1.631,4.43,6.46,2.56,4.33,3.45,3.43,2.57,3.33,2.45],
    debrisFlowHorMonitor6:[0.506,3.034,0.217,5.036,5.33,4.45,2.56,4.33,5.163,1.423,0.241,0.506,3.034,0.217,5.036,5.33,4.45,2.56,4.33,3.45,3.43,2.57,2.88,4.66,6.13,2.23,1.57,1.88,4.46,3.43,11.245],

    ssxAxisData:["2020/5/1","2020/5/2","2020/5/3","2020/5/4","2020/5/5","2020/5/6","2020/5/7","2020/5/8","2020/5/9","2020/5/10","2020/5/11","2020/5/12","2020/5/13","2020/5/14","2020/5/15","2020/5/16","2020/5/17","2020/5/18","2020/5/19"],
    ssMonitor1:[2.45,2.43,1.57,1.88,1.77,2.727,3.683,7.537,8.46,5.62,1.035,2.705,4.68,3.68,7.76,2.765,0.92,3.355,0.445],
    ssMonitor2:[3.335,1.99,0.625,1.83,1.71,7.674,1.526,8.859,9.46,6.032,2.176,1.567,4.73,3.821,8.435,2.651,1.502,4.151,0.9],
    ssMonitor3:[0.506,3.034,0.217,5.036,5.33,4.45,2.56,4.33,5.163,1.423,0.241,0.506,3.034,0.217,5.036,5.33,4.45,2.56,4.33],
    ssMonitor4:[1.408,0.171,1.375,1.003,5.401,2.701,2.988,5.142,5.163,1.423,0.241,0.506,3.034,0.217,5.036,5.33,4.45,2.56,4.33],
    ssMonitor5:[0.244,1.763,0.465,0.4109,1.393,2.273,6.474,2.176,3.949,1.029,0.497,0.602,2.642,1.549,4.658,3.335,1.99,0.625,1.83],
    ssMonitor6:[2.57,2.88,5.46,4.43,3.22,2.11,1.57,1.88,4.46,2.22,1.14,1.56,3.33,2.45,2.45,3.14,1.57,1.88,1.23],

    safetyGaugeData:[97,96,99,98,100,197,102,97,94,98,96,99],

    tendencyTimeData:["2020/9/1","2020/9/2","2020/9/3","2020/9/4","2020/9/5","2020/9/6","2020/9/7","2020/9/8","2020/9/9","2020/9/10","2020/9/11","2020/9/12","2020/9/13","2020/9/14","2020/9/15","2020/9/16","2020/9/17","2020/9/18","2020/9/19","2020/9/20","2020/9/21","2020/9/22","2020/9/23","2020/9/24","2020/9/25","2020/9/26","2020/9/27","2020/9/28","2020/9/29","2020/9/30","2020/10/1","2020/10/2","2020/10/3","2020/10/4","2020/10/5","2020/10/6","2020/10/7","2020/10/8","2020/10/9","2020/10/10","2020/10/11","2020/10/12","2020/10/13","2020/10/14","2020/10/15","2020/10/16","2020/10/17"],

    //安全程度（滑坡）%
    tendencyData1:[98.1,98.6,99.2,99.8,99.7,99.6,99.8,99.2,99.8,99.7,99.6,99.8,99.8,99.7,99.7,99.6,99.8,99.8,99.7,99.6,99.8,99.2,99.8,99.7,99.6,99.8,99.8,99.7,99.7,99.6,99.8,99.6,99.8,99.8,99.7,99.8,99.7,99.6,99.8,99.2,99.8,99.7,99.6,99.8,99.8,99.7,99.7],
    //安全程度（泥石流）%
    tendencyData2:[97.2,98.4,99.8,99.7,99.6,99.2,99.7,99.6,99.8,99.2,99.8,99.7,99.6,99.2,99.8,99.7,99.6,99.7,99.6,99.2,99.7,99.6,99.8,99.2,99.8,99.7,99.6,99.2,99.8,99.7,99.6,99.8,99.7,99.6,99.8,99.7,99.6,99.2,99.7,99.6,99.8,99.2,99.8,99.7,99.6,99.2,99.8],
    //安全程度（地面沉降）%
    tendencyData3:[97.3,99.7,99.7,99.6,99.8,99.2,99.8,99.8,99.7,99.6,99.8,99.6,99.6,99.8,99.2,99.8,99.7,99.6,99.8,99.2,99.8,99.8,99.7,99.6,99.8,99.6,99.6,99.8,99.2,99.8,99.7,99.8,99.6,99.6,99.2,99.6,99.8,99.2,99.8,99.8,99.7,99.6,99.8,99.6,99.6,99.8,99.2],

    rainTimeData:["2020/9/10","2020/9/11","2020/9/12","2020/9/13","2020/9/14","2020/9/15","2020/9/16","2020/9/17","2020/9/18","2020/9/19","2020/9/20","2020/9/21","2020/9/22","2020/9/23","2020/9/24","2020/9/25","2020/9/26","2020/9/27","2020/9/28","2020/9/29","2020/9/30","2020/10/1","2020/10/2","2020/10/3","2020/10/4","2020/10/5","2020/10/6","2020/10/7","2020/10/8","2020/10/9","2020/10/10","2020/10/11","2020/10/12","2020/10/13","2020/10/14","2020/10/15","2020/10/16","2020/10/17"],
    rainMonitor1:[0,0.234,0.56,5.44,3.25,1.89,0.12,2.16,5.44,0.24,0,0.56,0.23,0,0.234,0.56,5.44,3.25,0,0.56,5.44,1.12,3.63,2.16,5.44,1.89,0.24,0,0.56,0.23,0,0.234,0.56,5.44,3.25,1.89,0.12,2.16],
    rainMonitor2:[0.21,0.54,0.44,4.68,2.61,2.63,0.12,3.63,4.68,0.64,0.21,0.44,0.14,0.21,0.54,0.44,4.68,2.61,0.21,0.44,4.68,2.63,2.61,2.61,4.68,2.63,0.64,0.21,0.44,0.14,0.21,0.54,0.44,4.68,2.61,2.63,0.12,3.63],
    rainMonitor3:[0.54,0.12,0.54,4.32,3.35,1.67,0.111,1.67,4.32,0.12,0.54,0.54,0.12,0.54,0.12,0.54,4.32,3.35,0.54,0.54,4.32,1.67,3.35,3.35,4.32,1.67,0.12,0.54,0.54,0.12,0.54,0.12,0.54,4.32,3.35,1.67,0.111,1.67],
    rainMonitor4:[0.12,0.111,0.12,3.63,2.16,3.14,0.21,1.38,3.63,0.21,0.12,0.12,0.111,0.12,0.12,0.12,3.63,2.16,0.12,0.12,3.63,3.14,2.16,2.16,3.63,3.14,0.21,0.12,0.12,0.111,0.12,0.111,0.12,3.63,2.16,3.14,0.21,1.38],
    rainMonitor5:[0.111,0.21,0.12,3.67,2.55,2.16,0.44,3.14,3.67,0.21,0.111,0.12,0.25,0.12,0.21,0.12,3.67,2.55,0.111,0.12,3.67,1.89,2.55,2.55,3.67,2.16,0.21,0.111,0.12,0.25,0.12,0.21,0.12,3.67,2.55,2.16,0.44,3.14],
    rainMonitor6:[0.44,0.12,0.111,6.38,3.63,1.67,0,2.16,6.38,0.12,0.44,0.111,0.12,0.44,0.12,0.111,6.38,3.63,0.44,0.111,6.38,1.67,3.63,3.63,6.38,1.67,0.12,0.44,0.111,0.12,0.44,0.12,0.111,6.38,3.63,1.67,0,2.16],
    rainMonitor7:[0,0.876,0.54,7.14,1.67,1.38,0.44,2.55,7.14,0.876,0,0.54,0.876,0,0.876,0.54,7.14,1.67,0,0.54,7.14,1.38,1.67,4.63,7.14,1.38,0.876,0,0.54,0.876,0,0.876,0.54,7.14,1.67,1.38,0.44,2.55],

    mapData:[],
    geoCoordMap:{},

  },
  methods:{
    convertData:function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = this.geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    },
  },
  mounted(){
    let that = this;
    this.lineGraphic = echarts.init(document.getElementById('line-graphic'));
    this.lineOption = {
        title: {
            text: '折线图堆叠'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['CNSS-1', 'CNSS-2', 'CNSS-3', 'CNSS-4', 'CNSS-5', 'CNSS-6', 'CNSS-7']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: this.currentLineXAxisData
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'CNSS-1',
                type: 'line',
                stack: '总量',
                data: this.currentCnss1
            },
            {
                name: 'CNSS-2',
                type: 'line',
                stack: '总量',
                data: this.currentCnss2
            },
            {
                name: 'CNSS-3',
                type: 'line',
                stack: '总量',
                data: this.currentCnss3
            },
            {
                name: 'CNSS-4',
                type: 'line',
                stack: '总量',
                data: this.currentCnss4
            },
            {
                name: 'CNSS-5',
                type: 'line',
                stack: '总量',
                data: this.currentCnss5
            },
            {
                name: 'CNSS-6',
                type: 'line',
                stack: '总量',
                data: this.currentCnss6
            },
            {
                name: 'CNSS-7',
                type: 'line',
                stack: '总量',
                data: this.currentCnss7
            }
        ]
    };
    this.lineGraphic.setOption(this.lineOption);

    //------------------------------------------------------------------------------
    var debrisFlow = echarts.init(document.getElementById('debris-flow'));
    var debrisFlowOption = {
        legend: {},
        tooltip: {},
        dataset: {
            source: [
                ['product', '2012', '2013', '2014', '2015'],
                ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
                ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
                ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
            ]
        },
        xAxis: [
            {type: 'category', gridIndex: 0},
            {type: 'category', gridIndex: 1}
        ],
        yAxis: [
            {gridIndex: 0},
            {gridIndex: 1}
        ],
        grid: [
            {bottom: '55%'},
            {top: '55%'}
        ],
        series: [
            // These series are in the first grid.
            {type: 'bar', seriesLayoutBy: 'row'},
            {type: 'bar', seriesLayoutBy: 'row'},
            {type: 'bar', seriesLayoutBy: 'row'},
            // These series are in the second grid.
            {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
            {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
            {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
            {type: 'bar', xAxisIndex: 1, yAxisIndex: 1}
        ]
    };
    debrisFlow.setOption(debrisFlowOption);

    //------------------------------------------------------------------------------
    var sedimentationSettlement = echarts.init(document.getElementById('sedimentation-settlement'));
    var sedimentationSettlementOption = {
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
    sedimentationSettlement.setOption(sedimentationSettlementOption);
    //------------------------------------------------------------------------------
    var safetyGauge = echarts.init(document.getElementById('safety-gauge'));
    safetyOption = {
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
        safetyOption.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        safetyGauge.setOption(safetyOption, true);
    },2000);

    //------------------------------------------------------------------------------
    var dom = document.getElementById("confidence-band");
    var tendencyLine = echarts.init(dom);
    tendencyLine.showLoading();
    $.get('/public/assets/confidence-band.json', function (data) {
        tendencyLine.hideLoading();

        var base = -data.reduce(function (min, val) {
            return Math.floor(Math.min(min, val.l));
        }, Infinity);
        tendencyLine.setOption(option = {
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

    //----------------------------------------------------------------------------
    var rainBar = echarts.init(document.getElementById('rain-bar'));
    var dataAxis = [];
    var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
    var yMax = 500;
    var dataShadow = [];

    for (var i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
    }

    rainOption = {
        title: {
            text: '特性示例：渐变色 阴影 点击缩放',
            subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
        },
        xAxis: {
            data: dataAxis,
            axisLabel: {
                inside: true,
                textStyle: {
                    color: '#fff'
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            z: 10
        },
        yAxis: {
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#999'
                }
            }
        },
        dataZoom: [
            {
                type: 'inside'
            }
        ],
        series: [
            { // For shadow
                type: 'bar',
                itemStyle: {
                    color: 'rgba(0,0,0,0.05)'
                },
                barGap: '-100%',
                barCategoryGap: '40%',
                data: dataShadow,
                animation: false
            },
            {
                type: 'bar',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#83bff6'},
                            {offset: 0.5, color: '#188df0'},
                            {offset: 1, color: '#188df0'}
                        ]
                    )
                },
                emphasis: {
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#2378f7'},
                                {offset: 0.7, color: '#2378f7'},
                                {offset: 1, color: '#83bff6'}
                            ]
                        )
                    }
                },
                data: data
            }
        ]
    };

    // Enable data zoom when user click bar.
    var zoomSize = 6;
    rainBar.on('click', function (params) {
        console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
        rainBar.dispatchAction({
            type: 'dataZoom',
            startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
            endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
        });
    });

    rainBar.setOption(rainOption);

    //----------------------------------------------------------------------------
    var myChart = echarts.init(document.getElementById('map'));
    $.getJSON('/public/assets/7-8.json',function(data){
      that.mapData = data;
      let dataValue = [];
      for(let i = 0; i < data.length; i++){
        dataValue.push({"name":data[i].name,"value":10});
        that.geoCoordMap[data[i].name]=[formatLongitudeAndLatitude(data[i].longitude),formatLongitudeAndLatitude(data[i].latitude)];
      }

      myChart.showLoading();
      $.get('/public/assets/huaihua.json', function (geoJson) {
          myChart.hideLoading();
          echarts.registerMap('HH', geoJson);
          myChart.setOption(option = {
              title: {
                text: '',
                subtext: '怀化市矿区分布图',
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
              geo: {
                 show: true,
                 map: 'HH',
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
                     areaColor: '#FFFFFF',
                     borderColor: '#3B5077'
                   },
                   emphasis: {
                     areaColor: '#FFFFFF'
                   }
                 },
                 zoom: 0.8
              },
              series: [
                  {
                      name: '怀化市生态矿山',
                      type: 'scatter',
                      coordinateSystem: 'geo',
                      data: that.convertData(dataValue),
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

                  }
              ]
          });
          myChart.on('click', function (params) {

          });
      });
    });


  },
  created(){
    let that = this;

    let lineDataInterval = 0;
    setInterval(function(){
      that.currentLineXAxisData = [];
      that.currentCnss1 = [];
      that.currentCnss2 = [];
      that.currentCnss3 = [];
      that.currentCnss4 = [];
      that.currentCnss5 = [];
      that.currentCnss6 = [];
      that.currentCnss7 = [];

      for(let i = lineDataInterval; i < lineDataInterval + 5; i++){
        that.currentLineXAxisData.push(that.lineGraphicxAxisData[i]);
        that.currentCnss1.push(that.cnss1[i]);
        that.currentCnss2.push(that.cnss1[i]);
        that.currentCnss3.push(that.cnss1[i]);
        that.currentCnss4.push(that.cnss1[i]);
        that.currentCnss5.push(that.cnss1[i]);
        that.currentCnss6.push(that.cnss1[i]);
        that.currentCnss7.push(that.cnss1[i]);
      }

      that.lineOption.xAxis.data = that.currentLineXAxisData;
      that.lineOption.series[0].data = that.currentCnss1;
      that.lineOption.series[1].data = that.currentCnss2;
      that.lineOption.series[2].data = that.currentCnss3;
      that.lineOption.series[3].data = that.currentCnss4;
      that.lineOption.series[4].data = that.currentCnss5;
      that.lineOption.series[5].data = that.currentCnss6;
      that.lineOption.series[6].data = that.currentCnss7;
      that.lineGraphic.setOption(that.lineOption);
      lineDataInterval = lineDataInterval + 5;
      if(lineDataInterval == that.lineGraphicxAxisData.length){
        lineDataInterval = 0;
      }

    },1000);

  },

});
