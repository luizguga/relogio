const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

/*
const getTIme = () => {
    const date = new Date();
    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    };
};

setInterval(()=>{
    const {hours} = getTIme();
    const {minutes} = getTIme();
    const {seconds} = getTIme();

    hourHand.style.transform = `translate(0, -50%) rotate(${(hours-12)*30}deg)`;
    minuteHand.style.transform = `translate(0, -50%) rotate(${minutes * 6}deg)`;
    secondHand.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`;
}, 1000);
*/



//Versão feita por mim!

const getTime = () => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();

    hourHand.style.transform = `translate(0, -50%) rotate(${hour * 30}deg)`;
    minuteHand.style.transform = `translate(0, -50%) rotate(${minute * 6}deg)`;
    secondHand.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`;
};

setInterval(()=>{
    getTime();
}, 1000);
