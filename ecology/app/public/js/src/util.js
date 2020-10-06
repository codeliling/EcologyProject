function getUrlKey(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(window.location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
}

function getFormatDate() {
    var date = new Date();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentDate = date.getFullYear() + "-" + month + "-" + strDate
            + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return currentDate;
}
//指定时间减2秒
function reduceTwoS(dateStr, seconds){//dateStr格式为yyyy-mm-dd hh:mm:ss
  var dt=new Date(dateStr.replace(/-/,"/"));//将传入的日期格式的字符串转换为date对象 兼容ie
  // var dt=new Date(dateStr);//将传入的日期格式的字符串转换为date对象 非ie
  var ndt=new Date(dt.getTime() - seconds);//将转换之后的时间减去两秒

  return ndt.getHours()+':'+ndt.getMinutes()+':'+ndt.getSeconds();
}

function getSafetyLineGraphicTimeArray(){
  var currentDate =  getFormatDate();
  var array = [];
  array.push(reduceTwoS(currentDate,0));
  array.push(reduceTwoS(currentDate,1));
  array.push(reduceTwoS(currentDate,2));
  array.push(reduceTwoS(currentDate,3));
  array.push(reduceTwoS(currentDate,4));
  return array;
}

function formatLongitudeAndLatitude(value){
  var split1 = value.indexOf('度')
  var split2 = value.indexOf('分')
  var split3 = value.indexOf('秒')
  let duValue = value.substring(0,split1);
  let fenValue = value.substring(split1 + 1,split2);
  let miaoValue = value.substring(split2 + 1,split3);
  var f = parseFloat(fenValue) + parseFloat(miaoValue/60);
  var du = parseFloat(f/60) + parseFloat(duValue);
  return du;
}
