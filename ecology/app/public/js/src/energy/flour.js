var app = new Vue({
  el: '#content',
  delimiters: ['${', '}'],
  data: {
    countGraphic:{},
    countOption:{},
    orilGraphicData:[],
    rommBgData:[],
  },
  methods:{
    backClick:function(){
      window.location.href = '/energy';
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
    getRoomBg:function(roomValue, roomNum){
      let colorValue = '';
      if(roomValue >= 0 && roomValue < 50){
        colorValue = '颜色9';
      }
      else if(roomValue >= 50 && roomValue < 100){
        colorValue = '颜色8';
      }
      else if(roomValue >= 100 && roomValue < 150){
        colorValue = '颜色7';
      }
      else if(roomValue >= 150 && roomValue < 200){
        colorValue = '颜色6';
      }
      else if(roomValue >= 200 && roomValue < 250){
        colorValue = '颜色5';
      }
      else if(roomValue >= 250 && roomValue < 300){
        colorValue = '颜色4';
      }
      else if(roomValue >= 300 && roomValue < 350){
        colorValue = '颜色3';
      }
      else if(roomValue >= 350 && roomValue < 400){
        colorValue = '颜色2';
      }
      else if(roomValue >= 400){
        colorValue = '颜色1';
      }

      let roomName = '';
      if(roomNum == 1){
        roomName = '房间1';
      }
      else if(roomNum == 2){
        roomName = '房间2';
      }
      else if(roomNum == 3){
        roomName = '房间3';
      }
      else if(roomNum == 4){
        roomName = '房间4';
      }
      else if(roomNum == 5){
        roomName = '房间5';
      }
      else if(roomNum == 6){
        roomName = '房间6';
      }
      else if(roomNum == 7){
        roomName = '房间7';
      }
      else if(roomNum == 8){
        roomName = '房间8';
      }
      else if(roomNum == 9){
        roomName = '房间9';
      }
      else if(roomNum == 10){
        roomName = '房间10';
      }

      let imageName = '/public/images/room/'+roomName + '-' + colorValue +'.png';
      return imageName;
    },
    setRoomBg:function(data){
      this.rommBgData = [];
      this.rommBgData.push(this.getRoomBg(data.room1,1));
      this.rommBgData.push(this.getRoomBg(data.room2,2));
      this.rommBgData.push(this.getRoomBg(data.room3,3));
      this.rommBgData.push(this.getRoomBg(data.room4,4));
      this.rommBgData.push(this.getRoomBg(data.room5,5));
      this.rommBgData.push(this.getRoomBg(data.room6,6));
      this.rommBgData.push(this.getRoomBg(data.room7,7));
      this.rommBgData.push(this.getRoomBg(data.room8,8));
      this.rommBgData.push(this.getRoomBg(data.room9,9));
      this.rommBgData.push(this.getRoomBg(data.room10,10));
    }
  },
  mounted() {
    this.countGraphic = echarts.init(document.getElementById('count-graphic'));
    this.countOption = {
      tooltip: {
          formatter: '{a} <br/>{b} : {c}'
      },

      series: [
          {
              name: '累计能耗量',
              type: 'gauge',
              min:50000,
              max: 65000,
              detail: {formatter: '{value}'},
              axisLine: {            // 坐标轴线
                     lineStyle: {       // 属性lineStyle控制线条样式
                         color: [[0.3, '#e6951d'],[0.5, '#dfc73d'], [0.8, '#85c154'], [1, '#5FA731']]
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
              data: [{value: 50, name: '累计能耗量Kwh'}]
          }
      ]
    }
    this.countGraphic.setOption(this.countOption);
  },
  created() {
    let that = this;
    $.getJSON('/public/assets/energy/8-1.json',function(data){
      that.orilGraphicData = data;
      that.countOption.series[0].data[0].value = data[0].value;
      that.countGraphic.setOption(that.countOption);
    });
    let orilInterval = 1;
    setInterval(function(){
      that.countOption.series[0].data[0].value = that.orilGraphicData[orilInterval].value;
      that.countGraphic.setOption(that.countOption);
      orilInterval = orilInterval + 1;
      if(orilInterval == that.orilGraphicData.length){
        orilInterval = 0;
      }
    },1000);

    $.getJSON('/public/assets/energy/8-2.json',function(data){
      that.roomData = data;
      that.setRoomBg(data[0]);
    });


    let roomlInterval = 1;
    setInterval(function(){
      that.setRoomBg(that.roomData[roomlInterval]);
      roomlInterval = roomlInterval + 1;
      if(roomlInterval == that.roomData.length){
        roomlInterval = 0;
      }
    },2000);
  }
});
