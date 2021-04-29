//Set current time to header
var timeEl = document.getElementById("currentDay");
var currentTime = moment();
timeEl.textContent = currentTime;
//Set interval to constanstly update time
var clock = setInterval(function(){
    currentTime = moment();
    timeEl.textContent = currentTime;
},1000)




