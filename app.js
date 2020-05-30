const clock = document.querySelector('.clock')

const digitilClock = ()=>{
    const now = new Date();
    const hh = now.getHours()
    const mm = now.getMinutes()
    const ss = now.getSeconds()

    const clockHTML = `
    <span>${hh}</span> :
    <span>${mm}</span> : 
    <span>${ss}</span> &nbsp; 
    `
    clock.innerHTML = clockHTML
}

setInterval(digitilClock, 1000)