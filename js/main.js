// Schreibe eine Funktion einen Countdown in Minuten anzeigt.

// Nutze 
// setInterval()
// clearInterval()
// if
// toString()

let userInput = document.getElementById("minutes")

let time = document.getElementById("time")

let minutes

let seconds = 15
let interval

const startMinCountdown = () => {
    console.log(userInput.value)
    minutes = userInput.value-1
    interval = setInterval(() => {
        if (seconds>10) {
            time.innerHTML = `${minutes}:${seconds - 1}`
            seconds--
            console.log(seconds)
        }
        else if ((seconds > 0) && (seconds <= 10)) {
            console.log("<10")
            time.innerHTML = `${minutes}:0${seconds - 1}`
            seconds--
        } 
        else if ((minutes == 0) && (seconds == 0)) {
            clearInterval(interval)
        }
        else if ((seconds == 0) && (minutes>0)){
            seconds = 59
            minutes= minutes-1
            time.innerHTML = `${minutes}:${seconds}`
            seconds--
        }
    },1000)
}

const pauseMinCountdown = () => {
    console.log("working")
    clearInterval(interval)
}

const restartMinCountdown = () => {
    console.log("working")
    interval = setInterval(() => {
        if (seconds<10) {
            seconds = `0${seconds}`
        } 
        if (seconds>0) {
            time.innerHTML = `${minutes}:${seconds - 1}`
            seconds--
        } else if ((minutes == 0) && (seconds == 0)) {
            clearInterval(interval)
        }
        else {
            seconds = 59
            minutes= minutes-1
            time.innerHTML = `${minutes}:${seconds}`
            seconds--
        }
    },1000)
}