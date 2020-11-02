var app = new Vue({
  el: '#content',
  delimiters: ['${', '}'],
  data: {
    lineData:[],
    countGraphic:{},
    countOption:{},
    orilGraphicData:[],
    lineGraphic:{},
    lineOption:{},
  },
  methods:{
    backClick:function(){
      window.location.href = '/energy/buildings';
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
    flourBtnClick:function(){
      window.location.href = '/energy/flour';
    },
    itemBtnClick:function(){
      window.location.href = '/energy/itemcompare';
    },
    baseBtnClick:function(){
      window.location.href = '/energy/basecompare';
    },
    
  },
  mounted() {
    this.lineGraphic = echarts.init(document.getElementById('line-graphic'));
    this.lineOption = {
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            icon:'circle',
            x: '100px',
            y: '35px',
            itemGap: 100,
            data: ['空调', '厨房','娱乐','其他'],
            textStyle: {
                fontSize: 12,
                color: '#A5D9E1'
            },

        },
        color:['#A1D1DA','#3074B1','#B691C1','#7D57A1',],
        grid: {
            left: '5%',
            right: '4%',
            top: '18%',
            bottom:'60px',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            name:'时间',
            nameTextStyle:{"fontSize":16},
            boundaryGap: false,
            data: [],
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
                color: '#ffffff',
                fontSize:16
              }
            }
        },
        yAxis: {
            type: 'value',
            name:'能耗值/Wh',
            nameTextStyle:{"fontSize":16},
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
                color: '#ffffff',
                fontSize:16
              }
            }
        },
        series: [
            {
                name: '空调',
                type: 'line',
                stack: '总量',
                data: []
            },
            {
                name: '厨房',
                type: 'line',
                stack: '总量',
                data: []
            },
            {
                name: '娱乐',
                type: 'line',
                stack: '总量',
                data: []
            },
            {
                name: '其他',
                type: 'line',
                stack: '总量',
                data: []
            }
        ]
    };

    this.lineGraphic.setOption(this.lineOption);

    this.countGraphic = echarts.init(document.getElementById('count-graphic'));
    this.countOption = {
      tooltip: {
          formatter: '{a} <br/>{b} : {c}'
      },
      series: [
          {
              name: '总能耗',
              type: 'gauge',
              min:0,
              max: 5000,
              detail: {formatter: '{value}'},
              axisLine: {            // 坐标轴线
                     lineStyle: {       // 属性lineStyle控制线条样式
                         color: [[0.3, '#5FA731'],[0.5, '#85c154'], [0.8, '#dfc73d'], [1, '#e6951d']]
                     }
              },
              title : {
                 textStyle: {
                    fontWeight: 'bold',
                    fontSize: 18,
                    fontStyle: 'normal',
                    color:"#A5D9E1"
                  },
                  padding: [460,10,10,10],
              },
              data: [{value: 50, name: '总能耗Wh'}]
          }
      ]
    }
    this.countGraphic.setOption(this.countOption);
  },
  created() {
    let that = this;
    $.getJSON('/public/assets/energy/9-1.json',function(data){
      that.orilGraphicData = data;
      that.countOption.series[0].data[0].value = Math.round(data[0].value);
      that.countGraphic.setOption(that.countOption);
    });
    let orilInterval = 1;
    setInterval(function(){
      that.countOption.series[0].data[0].value = Math.round(that.orilGraphicData[orilInterval].value);
      that.countGraphic.setOption(that.countOption);
      orilInterval = orilInterval + 1;
      if(orilInterval == that.orilGraphicData.length){
        orilInterval = 0;
      }
    },1000);


    let graphicBarLength  = 8;
    $.getJSON('/public/assets/energy/9-2.json',function(data){
      that.lineData = data;
      for (let i = 0; i < 8; i++){
        that.lineOption.xAxis.data.push(data[i].time);
        that.lineOption.series[0].data.push(data[i].value1);
        that.lineOption.series[1].data.push(data[i].value2);
        that.lineOption.series[2].data.push(data[i].value3);
        that.lineOption.series[3].data.push(data[i].value4);
      }
      that.lineGraphic.setOption(that.lineOption);
    });
    let realtimeDataInterval = 8;
    setInterval(function(){
      if(that.lineData.length > 8){
        let obj = that.lineData[realtimeDataInterval];
        realtimeDataInterval = realtimeDataInterval + 1;
        let xData = that.lineOption.xAxis.data
        if(xData.length > graphicBarLength){
          that.lineOption.xAxis.data.shift();
        }
        that.lineOption.xAxis.data.push(obj.time);

        if(that.lineOption.series[0].data.length > graphicBarLength){
          that.lineOption.series[0].data.shift();
        }
        that.lineOption.series[0].data.push(obj.value1);

        if(that.lineOption.series[1].data.length > graphicBarLength){
          that.lineOption.series[1].data.shift();
        }
        that.lineOption.series[1].data.push(obj.value2);

        if(that.lineOption.series[2].data.length > graphicBarLength){
          that.lineOption.series[2].data.shift();
        }
        that.lineOption.series[2].data.push(obj.value3);

        if(that.lineOption.series[3].data.length > graphicBarLength){
          that.lineOption.series[3].data.shift();
        }
        that.lineOption.series[3].data.push(obj.value4);

        if(realtimeDataInterval == that.lineData.length){
          realtimeDataInterval = 0;
        }
        that.lineGraphic.setOption(that.lineOption);
      }

    },10000);
  }
});
