//clock
displaytime();
setInterval(displaytime, 1000);
function displaytime() {
  var date = new Date();
  //time
  var hour = date.getHours();
  if (hour > 12) {
    var twlv = "PM";
  } else {
    twlv = "AM";
  }
  if (hour > 12) {
    hour = hour - 12;
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }
  var mins = date.getMinutes();
  if (mins < 10) {
    mins = `0${mins}`;
  }
  var secs = date.getSeconds();
  if (secs < 10) {
    secs = `0${secs}`;
  }
  var clock = `${hour}:${mins}:${secs} <br/> ${twlv}`;
  document.getElementById("clock").innerHTML = clock;
}
displayDate();
setInterval(displayDate, 1000);
function displayDate() {
  //date
  var date = new Date();
  var year = date.getFullYear();
  var monthArray = [
    "JAN",
    "FAB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  var month = monthArray[date.getMonth()];
  var dayArray = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  var day = dayArray[date.getDay()];
  var dat = date.getDate();
  if (dat < 10) {
    dat = `0${dat}`;
  }
  var TheDay = `${day} `;
  var TheDate = `${dat} ${month} ${year}`;
  document.getElementById("day").innerHTML = TheDay;
  document.getElementById("date").innerHTML = TheDate;
}

//stopwatch

var set = "";
document.getElementById("stop").disabled = true;
document.getElementById("rset").disabled = true;
document.getElementById("lap").disabled = true;

var timeStart = "";
var timeCapture = "";
var initiate = "";

function fStart() {
  timeStart = new Date().getTime();
  initiate = new Date().getTime();
  set = setInterval(displayStopwatch, 10);
  document.getElementById("start").disabled = true;
  document.getElementById("stop").disabled = false;
  document.getElementById("rset").disabled = true;
  document.getElementById("lap").disabled = false;
}

function displayStopwatch() {
  var timer = parseInt(new Date().getTime() - initiate);
  var hour = parseInt(timer / 3600000);
  var mins = parseInt(timer / 60000 - hour * 60);
  var secs = parseInt(timer / 1000 - mins * 60 - hour * 3600);
  var csec = parseInt(timer / 10 - secs * 100) - mins * 6000 - hour * 360000;
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (mins < 10) {
    mins = `0${mins}`;
  }
  if (secs < 10) {
    secs = `0${secs}`;
  }
  if (csec < 10) {
    csec = `0${csec}`;
  }
  sett = `${hour} : ${mins} : ${secs}.${csec}`;
  document.getElementById("stp").innerText = sett;
}
function fStop() {
  clearInterval(set);
  document.getElementById("start").disabled = false;
  document.getElementById("rset").disabled = false;
  document.getElementById("stop").disabled = true;
  document.getElementById("lap").disabled = true;
}
function fLap() {
  timeCapture = new Date().getTime();
  var lapTime = timeCapture - timeStart;
  var lapMins = parseInt(lapTime / 60000);
  var lapSecs = lapTime / 1000;
  var lapSeconds = parseInt(lapSecs - lapMins * 60);
  if (lapSeconds < 10) {
    lapSeconds = `0${lapSeconds}`;
  }
  var lapMills = lapTime - parseInt(lapSecs) * 1000;
  if (lapMills < 10) {
    lapMills = `00${lapMills}`;
  } else if (lapMills < 100) {
    lapMills = `0${lapMills}`;
  }

  var node = document.createElement("LI");
  var textnode = document.createTextNode(
    `${lapMins} minute(s) : ${lapSeconds}.${lapMills} second(s)`
  );
  timeStart = new Date().getTime();
  node.appendChild(textnode);
  document.getElementById("lists").appendChild(node);
}
function fRset() {
  var csec = "00";
  var secs = "00";
  var mins = "00";
  var hour = "00";
  var sett = `${hour} : ${mins} : ${secs}.${csec}`;
  document.getElementById("stp").innerText = sett;
  var list = document.getElementById("lists");
  while (list.hasChildNodes()) {
    list.removeChild(list.childNodes[0]);
  }
  document.getElementById("rset").disabled = true;
}
