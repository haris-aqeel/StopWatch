var count = 0;
var countSec = 0;
var countMin = 0;
var countHour = 0;
var calculateInterval;
function buttonStart() {
    var seconds = document.getElementById('second');
    var minutes = document.getElementById('minute');
    var hours = document.getElementById('hour');
    calculateInterval = setInterval(function(){
        count++;
        countSec++;
        if (countSec<60){
            countSec < 10 ? seconds.innerHTML = '0' +countSec: seconds.innerHTML = countSec;
        }else{
            countSec = 0;
            if (countMin <= 59){
            countMin++;
            countMin < 10 ? minutes.innerHTML = '0' + countMin: minutes.innerHTML = countMin;
            }else{
                countMin = 0;
                countHour++;
                countHour < 10 ? hours.innerHTML = '0' + countHour: hours.innerHTML = countHour;
            }
        }
        
    }, 10)
}