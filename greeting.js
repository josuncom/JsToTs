var form = document.querySelector(".js-form"), input = form === null || form === void 0 ? void 0 : form.querySelector("input"), greeting = document.querySelector(".js-greetings");
var USER_LS = "currentUser", SHOWING_CN = "showing";
function saveName(text) {
    localStorage.setItem(USER_LS, text);
}
function handleSubmit(event) {
    event.preventDefault();
    var currentValue = input === null || input === void 0 ? void 0 : input.value;
    if (!currentValue) {
        throw new Error('입력한 값이 없습니다!');
    }
    paintGreeting(currentValue);
    saveName(currentValue);
}
function askForName() {
    form === null || form === void 0 ? void 0 : form.classList.add(SHOWING_CN);
    form === null || form === void 0 ? void 0 : form.addEventListener("submit", handleSubmit);
}
function paintGreeting(text) {
    form === null || form === void 0 ? void 0 : form.classList.remove(SHOWING_CN);
    greeting === null || greeting === void 0 ? void 0 : greeting.classList.add(SHOWING_CN);
    if (greeting instanceof HTMLParagraphElement)
        greeting.innerText = "Welcome, ".concat(text);
}
function loadName() {
    var currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    }
    else {
        paintGreeting(currentUser);
    }
}
function init() {
    loadName();
}
init();
