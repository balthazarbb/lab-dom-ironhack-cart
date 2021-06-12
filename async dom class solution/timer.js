// add properties and methods for your timer here
class Timer {
    //STEP 0: Add necessary properties for your timer
    constructor(){
        this.time = 0
        this.intervalId = 0
    }
    start(updateFunc){
        console.log('Start called')
        this.intervalId = setInterval(() => {
            this.time++

           updateFunc()
        }, 1000)
    }
    stop(){
        clearInterval(this.intervalId)
    }
}