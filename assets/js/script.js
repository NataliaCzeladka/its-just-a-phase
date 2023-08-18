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
        const response = await fetch("https://moon-phase.p.rapidapi.com/advanced", {
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
        displayMoonPhase(data.moon.phase_name);
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


// Matching the current Moon Phase with its picture and description
const newPhase = "First Quarter";
switch (newPhase) {
    case "New Moon":
        document.getElementById("moon-picture").innerHTML = "<img src='assets/images/new_moon.webp'>";
        document.getElementById("moon-text").innerHTML = "The New Moon is the first lunar phase. It occurs when the Moon is positioned between the Earth and the Sun. The three objects are in approximate alignment. The entire illuminated part of the Moon is on the back side of the Moon, the half that we cannot see. At this phase, the lunar disk is not visible to the naked eye.";
        break;
    case "Waxing Crescent":
        document.getElementById("moon-picture").innerHTML = "<img src='assets/images/waxing_crescent.webp'>";
        document.getElementById("moon-text").innerHTML = "After the New Moon, the sunlit portion is increasing, but less than half, so it is a Waxing Crescent. 'Waxing' essentially means 'growing' or expanding in illumination, while 'crescent' refers to the phases where the moon is less than half illuminated.";
        break;
    case "First Quarter":
        document.getElementById("moon-picture").innerHTML = "<img src='assets/images/first_quarter.webp' height='300'>";
        document.getElementById("moon-text").innerHTML = "The First Quarter (also called a 'half moon'), happens when the Moon is at a 90 degree angle with respect to the Earth and the Sun. We are seeing exactly half of the Moon illuminated and half in shadow. We call it First Quarter, because the Moon has traveled about a quarter of the way around Earth since the New Moon.";
        break;
    case "Waxing Gibbous":
        document.getElementById("moon-picture").innerHTML = "<img src='assets/images/waxing_gibbous.webp'>";
        document.getElementById("moon-text").innerHTML = " The area of illumination continues to increase. More than half of the Moon's face appears to be getting sunlight. The word 'gibbous' refers to phases where the moon is more than half illuminated.";
        break;
    case "Full Moon":
        document.getElementById("moon-picture").innerHTML = "<img src='assets/images/full_moon.webp'>";
        document.getElementById("moon-text").innerHTML = "At a Full Moon, the Earth,  the Moon, and the Sun are in approximate alignment, just as the New Moon, but the Moon is on the opposite side of the Earth, so the entire sunlit part of the moon is facing us. The shadowed portion is entirely hidden from view.";
        break;
    case "Waning Gibbous":
        document.getElementById("moon-picture").innerHTML = "<img src='assets/images/waning_gibbous.webp'>";
        document.getElementById("moon-text").innerHTML = "More than half of the Moon's face appears to be getting sunlight, but the amount is decreasing. 'Waning' means 'shrinking' or decreasing in illumination, while 'gibbous' refers to phases where the Moon is more than half illuminated.";
        break;
    case "Third Gibbous":
        document.getElementById("moon-picture").innerHTML = "<img src='assets/images/third_quarter.webp'>";
        document.getElementById("moon-text").innerHTML = "The Third Quarter (also called 'Last Quarter' or a 'half moon'), happens when the Moon is at a 90 degree angle with respect to the Earth and the Sun. We are seeing exactly half of the Moon illuminated and half in shadow. The Moon has moved another quarter of the way around Earth, to the third quarter position.";
        break;
    case "Waning Crescent":
        document.getElementById("moon-picture").innerHTML = "<img src='assets/images/waning_crescent.webp'>";
        document.getElementById("moon-text").innerHTML = "Less than half of the Moon's face appears to be getting sunlight, and the amount is decreasing. 'Waning' means 'shrinking' or decreasing in illumination, while 'crescent' refers to the phases where the moon is less than half illuminated.";
        break;
}