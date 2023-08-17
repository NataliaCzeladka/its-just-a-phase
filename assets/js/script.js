// Customised date method
const date = new Date();

let day = date.getDate();
const ordinals = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th","11th", 
"12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th","21st", "22nd", "23rd", 
"24th", "25th", "26th", "27th", "28th", "29th", "30th", "31st"];
let ordinal = ordinals[date.getDate()];

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let weekday = weekdays[date.getDay()];

let month = date.getMonth() + 1;
const fullMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let fullMonth = fullMonths[date.getMonth()];

let year = date.getFullYear();

let fullDate = `${weekday}, ${ordinal} ${fullMonth} ${year}`;
document.getElementById("date").innerHTML = fullDate;


// External API call
// https://rapidapi.com/MoonAPIcom/api/moon-phase/

function getData(cb) {
    
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.open('GET', 'https://moon-phase.p.rapidapi.com/advanced');
    xhr.setRequestHeader('X-RapidAPI-Key', 'e1748088ddmshf67ba4347bdd975p1a8de2jsn0a545e552fd2');
    xhr.setRequestHeader('X-RapidAPI-Host', 'moon-phase.p.rapidapi.com');

    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            // Parsing the string data into JSON format
            cb(JSON.parse(this.responseText));
        }
    };
}

function printDataToConsole(data) {
    console.log(data);
}

getData(printDataToConsole);


