window.onload = () =>{
    let hours = document.querySelector(".clock-hours")
    let minutes = document.querySelector(".clock-minutes")
    setInterval(()=>{
        let H = new Date().getHours()
        let M = new Date().getMinutes()
        hours.innerHTML=checkValue(H)
        minutes.innerHTML=checkValue(M)
    },1000)
}

function checkValue(value){
    if (value < 10){
        return "0" + value
    } else {
        return value
    }
}
