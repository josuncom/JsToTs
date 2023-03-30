var API_KEY = "0f2eaf3ee889330fbb18c01a173ac278";
function onGeoOK(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var url = "https://api.openweathermap.org/data/2.5/weather?lat=".concat(lat, "&lon=").concat(lon, "&appid=").concat(API_KEY, "&units=metric");
    fetch(url)
        .then(function (response) { return response.json(); })
        .then(function (data) {
        var city = document.querySelector("#js-weather span:first-child");
        var weather = document.querySelector("#js-weather span:last-child");
        city.innerText = "Now You Are In ".concat(data.name, "!");
        weather.innerText = "".concat(data.main.temp, "\u2103 ") + "\n" + data.weather[0].main;
    });
}
function onGeoError() {
    alert("Cannot find you. There is no weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
