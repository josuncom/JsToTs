var clockContainer = document.querySelector(".js-clock");
var clockTitle = clockContainer === null || clockContainer === void 0 ? void 0 : clockContainer.querySelector("span");
function getTime() {
    var date = new Date();
    var minutes = date.getMinutes();
    var hours = date.getHours();
    var seconds = date.getSeconds();
    clockTitle.innerText = "".concat(hours < 10 ? "0".concat(hours) : hours, " : ").concat(minutes < 10 ? "0".concat(minutes) : minutes, " : ").concat(seconds < 10 ? "0".concat(seconds) : seconds);
}
function initClock() {
    getTime();
    setInterval(getTime, 1000);
}
initClock();
