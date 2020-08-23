var count = 0;
var countSec = 0;
var countMin = 0;
var countHour = 0;
var buttonActive = true;
var calculateInterval;
var seconds = document.getElementById('second');
var minutes = document.getElementById('minute');
var hours = document.getElementById('hour');

function buttonStart() {
    
    buttonActive = false;
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

function buttonStop(){
    buttonActive = true;
    clearInterval(calculateInterval);
    count = 0, countSec = 0 , countMin = 0, countHour = 0;
    resettingValues();
    
}

function buttonPause() {
    buttonActive = true;
    clearInterval(calculateInterval);
}


function resettingValues() {
    seconds.innerHTML = '00';
    minutes.innerHTML = '00';
    hours.innerHTML = '00';
}
