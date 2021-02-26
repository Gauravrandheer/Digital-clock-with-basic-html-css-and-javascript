const h = document.getElementById("hourid");
const m = document.getElementById("minuteid");
const s = document.getElementById("secondid");


function clock(){
  var d = new Date();
  var hour = d.getHours();
  var minute = d.getMinutes();
  var second = d.getSeconds();
  if(hour<10){
    hour = "0"+hour;
  }
  if(minute<10){
    minute = "0"+minute;
  }
  if(second<10){
    second = "0"+second;
  }
  h.innerHTML = hour;
  m.innerHTML = minute;
  s.innerHTML = second;
  mytime=setTimeout(function(){ clock() },1000);
}
