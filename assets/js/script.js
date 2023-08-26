// Customised date method
// Credit: w3schools.com/js/js_date_methods.asp
const date = new Date();

let day = date.getDate();
const ordinals = [
  "1st",
  "2nd",
  "3rd",
  "4th",
  "5th",
  "6th",
  "7th",
  "8th",
  "9th",
  "10th",
  "11th",
  "12th",
  "13th",
  "14th",
  "15th",
  "16th",
  "17th",
  "18th",
  "19th",
  "20th",
  "21st",
  "22nd",
  "23rd",
  "24th",
  "25th",
  "26th",
  "27th",
  "28th",
  "29th",
  "30th",
  "31st",
];
let ordinal = ordinals[date.getDate() - 1];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let weekday = weekdays[date.getDay()];

let month = date.getMonth() + 1;
const fullMonths = [
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
let fullMonth = fullMonths[date.getMonth()];

let year = date.getFullYear();

let fullDate = `${weekday}, ${ordinal} ${fullMonth} ${year}`;
document.getElementById("date").innerHTML = fullDate;

// Consuming external API
// https://rapidapi.com/MoonAPIcom/api/moon-phase/

let data;
let baseURL = "https://moon-phase.p.rapidapi.com/advanced";

const fetchMoonPhaseData = async () => {
  try {
    const response = await fetch(baseURL, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "moon-phase.p.rapidapi.com",
        "x-rapidapi-key": "e1748088ddmshf67ba4347bdd975p1a8de2jsn0a545e552fd2",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    let data = await response.json();
    displayMoonData(data.moon.phase_name);
    displayIllumination(data.moon.illumination);
    displayMoonDistance(data.moon.moon_distance);
    displayMoonAge(data.moon.age_days);
    displayCyclePercentage(data.moon.lunar_cycle);
    displayZodiacSign(data.moon.zodiac_sign);
    displayNextFullMoon(data.moon_phases.full_moon.next.days_ahead);
  } catch (error) {
    console.error("Error fetching data:", error);
    displayIllumination,
    displayMoonDistance,
    displayMoonAge,
    displayCyclePercentage,
    displayZodiacSign,
    displayNextFullMoon,
    displayMoonData("Error fetching Moon Phase data");
  }
};

// Display current Moon Phase
let displayMoonData = (moon_phase) => {
  const phaseTextElement = document.getElementById("data");
  phaseTextElement.innerText = moon_phase;

  // Matching the current Moon Phase with relevant picture and description
  let newPhase = moon_phase;
  switch (newPhase) {
    case "New Moon":
      document.getElementById("moon-picture").innerHTML =
        "<img src='assets/images/new_moon.webp' alt='Current Moon Phase: New Moon'>";
      document.getElementById("moon-text").innerHTML =
        "The New Moon is the first lunar phase. It occurs when the Moon is positioned between the Earth and the Sun. The three objects are in approximate alignment. The entire illuminated part of the Moon is on the back side of the Moon, the half that we cannot see. At this phase, the lunar disk is not visible to the naked eye.";
      break;
    case "Waxing Crescent":
      document.getElementById("moon-picture").innerHTML =
        "<img src='assets/images/waxing_crescent.webp' alt='Current Moon Phase: Waxing Crescent'>";
      document.getElementById("moon-text").innerHTML =
        "The Moon appears to be partly, but less than one-half illuminated by direct sunlight. The fraction of the Moon's disk that is illuminated is increasing. <q>Waxing</q> essentially means growing or expanding in illumination, while <q>crescent</q> refers to the phases where the Moon is less than half illuminated.";
      break;
    case "First Quarter":
      document.getElementById("moon-picture").innerHTML =
        "<img src='assets/images/first_quarter.webp' alt='Current Moon Phase: First Quarter'>";
      document.getElementById("moon-text").innerHTML =
        "The First Quarter (also called a <q>half moon</q>), happens when the Moon is at a 90 degree angle with respect to the Earth and the Sun. We are seeing exactly half of the Moon illuminated and half in shadow. We call it First Quarter, because the Moon has traveled about a quarter of the way around Earth since the New Moon.";
      break;
    case "Waxing Gibbous":
      document.getElementById("moon-picture").innerHTML =
        "<img src='assets/images/waxing_gibbous.webp' alt='Current Moon Phase: Waxing Gibbous'>";
      document.getElementById("moon-text").innerHTML =
        " The area of illumination continues to increase. More than half of the Moon's face appears to be getting sunlight. <q>Waxing</q> essentially means growing or expanding in illumination, while <q>gibbous</q> refers to phases where the moon is more than half illuminated.";
      break;
    case "Full Moon":
      document.getElementById("moon-picture").innerHTML =
        "<img src='assets/images/full_moon.webp' alt='Current Moon Phase: Full Moon'>";
      document.getElementById("moon-text").innerHTML =
        "At a Full Moon, the Earth, the Moon, and the Sun are in approximate alignment, just as the New Moon, but the Moon is on the opposite side of the Earth, so the entire sunlit part of the moon is facing us. The shadowed portion is entirely hidden from view.";
      break;
    case "Waning Gibbous":
      document.getElementById("moon-picture").innerHTML =
        "<img src='assets/images/waning_gibbous.webp' alt='Current Moon Phase: Waning Gibbous'>";
      document.getElementById("moon-text").innerHTML =
        "More than half of the Moon's face appears to be getting sunlight, but the amount is decreasing. <q>Waning</q> means shrinking or decreasing in illumination, while <q>gibbous</q> refers to phases where the Moon is more than half illuminated.";
      break;
    case "Last Quarter":
      document.getElementById("moon-picture").innerHTML =
        "<img src='assets/images/third_quarter.webp' alt='Current Moon Phase: Third Quarter'>";
      document.getElementById("moon-text").innerHTML =
        "The Third Quarter (also called 'Last Quarter' or a 'half moon'), happens when the Moon is at a 90 degree angle with respect to the Earth and the Sun. We are seeing exactly half of the Moon illuminated and half in shadow. The Moon has moved another quarter of the way around Earth, to the third quarter position.";
      break;
    case "Waning Crescent":
      document.getElementById("moon-picture").innerHTML =
        "<img src='assets/images/waning_crescent.webp' alt='Current Moon Phase: Waning Crescent'>";
      document.getElementById("moon-text").innerHTML =
        "Less than half of the Moon's face appears to be getting sunlight, and the amount is decreasing. <q>Waning</q> means shrinking or decreasing in illumination, while <q>crescent</q> refers to the phases where the Moon is less than half illuminated.";
  }
};

fetchMoonPhaseData();

// Display Illumination (data from external API)
let displayIllumination = (illumination) => {
  const illuminationTextElement = document.getElementById("illumination");
  illuminationTextElement.innerText = `The Moon is ${illumination} visible.`;
};

// Display distance between the Moon and the Earth (data from external API)
let displayMoonDistance = (moon_distance) => {
  const moonDistanceTextElement = document.getElementById("moon-distance");
  moonDistanceTextElement.innerText = `${Math.round(moon_distance)} km`;
};

// Display the age of the Moon (data from external API)
let displayMoonAge = (age_days) => {
  const moonAgeTextElement = document.getElementById("moon-age");
  moonAgeTextElement.innerText = age_days;
};

//Display percentage of the complete Moon Cycle (data from external API)
let displayCyclePercentage = (lunar_cycle) => {
  const cyclePercentageTextElement =
    document.getElementById("cycle-percentage");
  cyclePercentageTextElement.innerText = lunar_cycle;
};

// Display Zodiac Sign (data from external API)
let displayZodiacSign = (zodiac_sign) => {
  const zodiacSignTextElement = document.getElementById("zodiac-sign");
  zodiacSignTextElement.innerText = zodiac_sign;
};

// Display next Full Moon (data from external API)
let displayNextFullMoon = (days_ahead) => {
  const nextFullMoonTextElement = document.getElementById("next-full-moon");
  nextFullMoonTextElement.innerText = days_ahead;
};

// Display Moon Phase Calendar
const fetchMoonDataTable = async () => {
  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.response);

      // Markdown content
      let markdownResponse = this.response;

      // Convert Markdown to HTML using marked library (CDN link provided in the header of index.html file)
      const htmlContent = marked(markdownResponse);
      console.log(htmlContent);

      // Update the DOM element with the converted HTML
      const resultContainer = document.getElementById("calendar");
      resultContainer.innerHTML = htmlContent;

      // Deleting non-existing days from the calendar
      // According to the API all months are 31-day-long (except December, which is a mistake)

      // Get each <tr> element
      let tableRow = document.getElementsByTagName("tr");

      // Delete Moon Phases from 31st cell of the rows: 4 (April), 6 (June), 9 (September), 11(November)
      for (let i = 0; i < tableRow.length; i++) {
        if (i === 4 || i === 6 || i === 9 || i === 11) {
          tableRow[i].cells[31].innerHTML = "-";
        }

        // Delete cells 29, 30, 31 from the 2nd row (February)
        if (i === 2) {
          tableRow[i].cells[29].innerHTML = "-";
          tableRow[i].cells[30].innerHTML = "-";
          tableRow[i].cells[31].innerHTML = "-";
        }

        // Occupy the last cell of the 12th row (December)
        if (i === 12) {
          console.log(tableRow[i].cells[31].innerHTML);
          tableRow[i].cells[31].innerHTML = tableRow[i].cells[1].innerHTML;
        }
      }
    }
  });

  xhr.open("GET", "https://moon-phase.p.rapidapi.com/calendar");
  xhr.setRequestHeader(
    "X-RapidAPI-Key",
    "e1748088ddmshf67ba4347bdd975p1a8de2jsn0a545e552fd2"
  );
  xhr.setRequestHeader("X-RapidAPI-Host", "moon-phase.p.rapidapi.com");

  xhr.send(data);
};

fetchMoonDataTable();