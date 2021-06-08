const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const graduation = document.querySelector(".graduation");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2021, 5, 13, 1, 0, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

// number 0-11
let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();

// number 0-6
const weekday = weekdays[futureDate.getDay()];

graduation.textContent = `graduation begins on ${weekday}, ${month} ${date}, ${year} at ${hours}:${minutes}0pm`;

// future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today;
    console.log(t);

    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60min
    // 1d = 24hr

    // values in ms
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;

    //calculate all values
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    // values array;
    const values = [days,hours,minutes,seconds];

    function format(item) {
        if(item < 10) {
            return item = `0${item}`
        }
        return item
    }

    items.forEach(function(item, index) {
        item.innerHTML = format(values[index]);
    });

}
// countdown
let countdown = setInterval()
getRemainingTime();