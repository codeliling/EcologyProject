var app = new Vue({
  el: '#content',
  delimiters: ['${', '}'],
  data: {
  },
  methods:{
    backClick:function(){
      window.location.href = '/energy';
    },
    areaMapClick:function(){
      window.location.href = '/energy/hotgraphic';
    },
    buildingMapClick:function(){

    },
    buildingClick:function(){
      window.location.href = '/energy/buildings';
    },
    analysisClick:function(){

    }
  },
  mounted() {

  },
  created() {

  }
});
