let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    
];

let months = [
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
    "December"
];

let dd = new Date();
let dayName = daynames[dd.getDay()];
let monthName = months[dd.getMonth()];
let fulldate = daynames[dd.getDay()] + ", " + months[dd.getMonth()] + " " + dd.getDate() + ", " +
dd.getFullYear();

document.getElementById("datetoday").textContent = fulldate;

