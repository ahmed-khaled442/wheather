// let wheather = document.getElementById("weather");
// console.log(wheather);
// var city = document.getElementById("city");
// console.log(city);
// var find = document.getElementById("finde");
// console.log(find);
// let maincity = document.getElementById("main-city");
// console.log(maincity);
// let day = document.querySelectorAll(".day");
// console.log(day);
// let winter = document.getElementById("winter");
// console.log(winter);
// let Windspeed = document.getElementById("WindSpeed");
// console.log(Windspeed);
// let moon = document.getElementById("MOON");
// console.log(moon);

let getday = document.querySelectorAll(".day");
console.log(getday);
let city = document.getElementById("city");
console.log(city);
let icon = document.querySelectorAll(".img-wheather");
let arrayIcon = Array.from(icon);
console.log(arrayIcon);
let Degree = document.querySelectorAll(".Degree");
console.log(Degree);
let Status = document.getElementById("Status");
console.log(Status);
let precip = document.getElementById("precip");
console.log(precip);
let HUMIDITY = document.getElementById("HUMIDITY");
console.log(HUMIDITY);
let WIND = document.getElementById("WIND");
console.log(WIND);
let locationSearch = document.getElementById("location");
console.log(locationSearch);
let changelocation = document.getElementById("changelocation");
console.log(changelocation);
let boxRight = document.getElementById("BOX-RIGHT");
console.log(boxRight);

changelocation.addEventListener("click", function () {
  console.log();
  getwheather(locationSearch.value);
  clear();
});

locationSearch.addEventListener("input", function (e) {
  let inputvalue = e.target.value;
  getwheather(inputvalue);
});

async function getwheather(city = "lodon") {
  let result = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=d52a781c79dc4706a50160858241206&q=${city}&days=5`
  );
  let response = await result.json();
  let responsE = Object.values(response);
  console.log(Object.values(response));
  display(Object.values(response));
}
getwheather();

function display(wheatherInfo) {
  city.innerText = wheatherInfo[0].name;
  console.log();

  getday[0].innerText = new Date(wheatherInfo[2].forecastday[0].date)
    .toDateString()
    .slice(0, 10);

  arrayIcon[0].setAttribute(
    "src",
    wheatherInfo[2].forecastday[0].day.condition.icon
  );
  console.log(arrayIcon[0].getAttribute("src"));
  Degree[0].innerText = wheatherInfo[2].forecastday[0].day.maxtemp_c + "oC";
  Status.innerText = wheatherInfo[1].condition.text;
  precip.innerText = wheatherInfo[1].precip_in + "%";
  HUMIDITY.innerText = wheatherInfo[1].humidity + "%";
  WIND.innerText = wheatherInfo[1].wind_kph + " km/m";

  if (Status.innerText == "Sunny") {
    box.style.backgroundImage = "url(../img/pexels-brett-sayles-912364.jpg)";
    boxRight.style.backgroundImage =
      "url(../img/pexels-brett-sayles-912364.jpg)";
  } else if (Status.innerText == "Partly cloudy" || Status.innerText == "Fog") {
    box.style.backgroundImage = "url(../img/pexels-pixabay-531756.jpg)";
    boxRight.style.backgroundImage = "url(../img/pexels-pixabay-531756.jpg)";
  } else if (Status.innerText == "Patchy rain nearby") {
    box.style.backgroundImage = "url(../img/prtyrain.jpg)";
    boxRight.style.backgroundImage = "url(../img/prtyrain.jpg)";
  } else if (Status.innerText == "Mist") {
    box.style.backgroundImage = "url(../img/mist.jpg)";
    boxRight.style.backgroundImage = "url(../img/mist.jpg)";
  } else if (Status.innerText == "Light rain shower") {
    box.style.backgroundImage = "url(../img/shower.png)";
    boxRight.style.backgroundImage = "url(../img/shower.png)";
  } else if (Status.innerText == "Overcast") {
    box.style.backgroundImage = "url(../img/overcast.webp)";
    boxRight.style.backgroundImage = "url(../img/overcast.webp)";
  } else if (Status.innerText == "Light drizzle") {
    box.style.backgroundImage = "url(../img/dizzel.jpg)";
    boxRight.style.backgroundImage = "url(../img/dizzel.jpg)";
  } else if (
    Status.innerText == "Moderate or heavy rain in area with thunder" ||
    Status.innerText == "Moderate or heavy rain shower"
  ) {
    box.style.backgroundImage = "url(../img/thunder.jpg)";
    boxRight.style.backgroundImage = "url(../img/thunder.jpg)";
  }

  // } else {
  //   box.style.backgroundImage = "url(../img/clear.jpg)";
  //   boxRight.style.backgroundImage = "url(../img/clear.jpg)";
  // }

  for (let i = 1; i < 5; i++) {
    console.log(
      new Date(wheatherInfo[2].forecastday[i].date).toDateString().slice(0, 3)
    );
    getday[i].innerText = new Date(wheatherInfo[2].forecastday[i].date)
      .toDateString()
      .slice(0, 3);
    arrayIcon[i].setAttribute(
      "src",
      wheatherInfo[2].forecastday[i].day.condition.icon
    );
    Degree[i].innerText = wheatherInfo[2].forecastday[i].day.maxtemp_c + "oC";
  }
}

let arr = [0, 1, 2, 3];
arr.length;

function clear() {
  locationSearch.value = "";
}

var box = document.getElementById("box");
console.log(box);
// box.style.backgroundImage = "url(../img/pexels-pixabay-531756.jpg)";
