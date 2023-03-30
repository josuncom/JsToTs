const API_KEY = "0f2eaf3ee889330fbb18c01a173ac278";

function onGeoOK(position: GeolocationPosition) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector(
        "#js-weather span:first-child"
      ) as HTMLParagraphElement;
      const weather = document.querySelector(
        "#js-weather span:last-child"
      ) as HTMLParagraphElement;

      city.innerText = `Now You Are In ${data.name}!`;
      weather.innerText = `${data.main.temp}℃ ` + "\n" + data.weather[0].main;
    });
}

function onGeoError() {
  alert("Cannot find you. There is no weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
