let startBtn = document.querySelector('#start')
let stopBtn = document.querySelector('#stop')
let timeDOM = document.querySelector('#timer')
let timer = new Timer()

function updateTime(){
    timeDOM.innerHTML = timer.time
}

startBtn.addEventListener('click', () => {
    timer.start(updateTime)
})

stopBtn.addEventListener('click', () => {
    timer.stop()
})
