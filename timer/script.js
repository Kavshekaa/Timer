

const timerButton = document.getElementById('timer-button')
const hourElement = document.getElementById('hour')
const minElement = document.getElementById('min')
const secondsElement = document.getElementById('seconds')
const logElement = document.getElementById('timelog')
const timeElement = document.getElementById('ltime')

const reset = document.getElementById('setting')

const lapno = document.getElementById('lap_no')
const difftime = document.getElementById('diff_time')

function runTimer() {
    if(timerButton.textContent === 'Start') { 
        timerButton.textContent = 'Stop'
        timerButton.style.setProperty('background-color', 'tomato')
        startTimer()
    } else { 
        timerButton.textContent = 'Start'
        timerButton.style.setProperty('background-color', 'rgb(9, 159, 9)')
        stopTimer()
    }
}

let interval

function startTimer() {
    let s = 1 
    let m = 0 
    let h = 0 

    interval = setInterval(function() {
        if (s === 60) {
            s = 0;
            m++;
            if (m === 60) {
                m = 0;
                h++;
                hourElement.textContent = h.toString().padStart(2, '0');
            }
            minElement.textContent = m.toString().padStart(2, '0');
        }
        secondsElement.textContent = (s++).toString().padStart(2, '0')
    },1000)

}

let l_no = 0

function stopTimer(){
    clearTimeout(interval)
}

function setTimer(){
    //resetting timer
    l_no = 0
    lapno.textContent = null
    difftime.textContent = null
    secondsElement.textContent = '00'
    minElement.textContent = '00'
    hourElement.textContent = '00'
    timerButton.textContent = 'Start'
    timerButton.style.backgroundColor = 'rgb(9, 159, 9)'
    clearTimeout(interval)
}

function l_count(){

    logElement.classList.add('no');
    lapno.innerHTML +=`${++l_no}<p></p>`
    difftime.innerHTML += `${hourElement.textContent} : 
        ${minElement.textContent} : ${secondsElement.textContent} <p></p>`   
}

timerButton.addEventListener('click', runTimer)
timeElement.addEventListener('click',l_count)
reset.addEventListener('click',setTimer)



