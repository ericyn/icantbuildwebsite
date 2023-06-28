function updateLocalTime() {
  var now = new Date();
  var hh = now.getHours();
  var mm = now.getMinutes();
  var ss = now.getSeconds();

  mm = (mm < 10 ? "0" : "") + mm;
  ss = (ss < 10 ? "0" : "") + ss;

  var td = hh < 12 ? "AM" : "PM";
  hh = hh > 12 ? hh - 12 : hh;
  hh = hh == 0 ? 12 : hh;

  var clock = hh + ":" + mm + ":" + ss + " " + td;
  document.getElementById("clock").innerHTML = clock;
}
