const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const centiSeconds = document.getElementById('centi-seconds');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');


const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const setTime = document.getElementById('set-time');
const watch = document.getElementById('watch');

const setOption = () => {
    for (let i = 0; i < 60; i++) {
        (i+'').length === 1 && (i = '0' + i)
        minute.innerHTML += `<option>${i}</option>`
        second.innerHTML += `<option>${i}</option>`
    }
    for (let i = 0; i < 24; i++) {
        (i+'').length === 1 && (i = '0' + i)
        hour.innerHTML += `<option>${i}</option>`
    }
}
const setTimer = () => {
    hours.innerText = hour.value;
    minutes.innerText = minute.value;
    seconds.innerText = second.value;
    toggleWatch();
}
const resetUnit = (unit, limit, after) => {
    if(unit.innerText === limit){
        unit.innerText = after;
        unit.previousElementSibling.innerText--;
    };
};

// two digit updater
const isTwoDigit = unit => unit.innerText.length === 1 && (unit.innerText = '0' + unit.innerText);

startBtn.addEventListener('click', () => {
    const interval = setInterval(() => {
        if (seconds.innerText === '00' && minutes.innerText === '00' && hours.innerText === '00') watch.innerHTML = `<h2>Time Up</h2>`;
        centiSeconds.innerText++;
        // centiSeconds.innerText === '100' && ((centiSeconds.innerText = '00') && seconds.innerText--);
        // seconds.innerText === '-1' && ((seconds.innerText = '59') && minutes.innerText--);
        // minutes.innerText === '-1' && ((minutes.innerText = '59') && hours.innerText--);
        resetUnit(centiSeconds,'100', '00')
        resetUnit(seconds,'-1', '59')
        resetUnit(minutes,'-1', '59')
        isTwoDigit(centiSeconds);
        isTwoDigit(seconds);
        isTwoDigit(minutes);
        isTwoDigit(hours);

    }, 10);
    stopBtn.addEventListener('click', () => clearInterval(interval));
});

// Start and Stop button toggler
const toggleBtn = () => startBtn.classList.toggle('d-none') !== stopBtn.classList.toggle('d-none');
const toggleWatch = () => setTime.classList.toggle('d-none') !== watch.classList.toggle('d-none');




