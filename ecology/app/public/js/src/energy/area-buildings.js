var app = new Vue({
  el: '#content',
  delimiters: ['${', '}'],
  data: {
  },
  methods:{
    backClick:function(){
      window.location.href = '/energy/hotgraphic';
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

    }
  },
  mounted() {

  },
  created() {

  }
});
