const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const centiSeconds = document.getElementById('centi-seconds');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');




// two digit updater
const isTwoDigit = unit => unit.innerText.length === 1 && (unit.innerText = '0' + unit.innerText);

startBtn.addEventListener('click', () => {

const interval = setInterval(() => {
    if(seconds.innerText === '00' && minutes.innerText == '00' && hours.innerText === '00'){
        document.getElementById('watch').innerHTML = `<h2>Time Up</h2>`;
        return;
    }
    centiSeconds.innerText++;

    // seconds.innerText === '-1' && ((seconds.innerText = '59') && minutes.innerText--);
        // clearInterval(interval);
    // if(centiSeconds.innerText > 99){

    // }
    if(centiSeconds.innerText > 99){
        seconds.innerText--;
        centiSeconds.innerText = 0;
    }
    // centiSeconds.innerText > 99 && seconds.innerText--;
    // centiSeconds.innerText > 99 && (centiSeconds.innerText = 0);

    if(seconds.innerText == -1 ){
        seconds.innerText = '59'
        minutes.innerText--;
    }
    if(minutes.innerText == -1 ){
        minutes.innerText = '59'
        hours.innerText--;
    }
    isTwoDigit(centiSeconds);
    isTwoDigit(seconds);
    isTwoDigit(minutes);
    isTwoDigit(hours);
    
}, 10);
stopBtn.addEventListener('click', () => clearInterval(interval));
});

// Start and Stop button toggler
const toggleBtn = () => startBtn.classList.toggle('d-none') !== stopBtn.classList.toggle('d-none');