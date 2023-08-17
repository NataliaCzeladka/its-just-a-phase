// Customised date method
const date = new Date();

let day = date.getDate();
const ordinals = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th","11th", 
"12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th","21st", "22nd", "23rd", 
"24th", "25th", "26th", "27th", "28th", "29th", "30th", "31st"];
let ordinal = ordinals[date.getDate()-1];

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

const fetchMoonPhaseData = async () => {
    try {
        const response = await fetch("https://moon-phase.p.rapidapi.com/basic", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "moon-phase.p.rapidapi.com",
                "x-rapidapi-key": "e1748088ddmshf67ba4347bdd975p1a8de2jsn0a545e552fd2"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }

        const data = await response.json();
        displayMoonPhase(data.phase_name);
    } catch (error) {
        console.error("Error fetching data:", error);
        displayMoonPhase("Error fetching moon phase data");
    }
};

const displayMoonPhase = (text) => {
    const phaseTextElement = document.getElementById("data");
    phaseTextElement.innerText = text;
};

fetchMoonPhaseData();


