const form = document.querySelector(".js-form"),
  input = form?.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text: string) {
  localStorage.setItem(USER_LS, text);
}
function handleNameSubmit(event: Event) {
  event.preventDefault();
  const currentValue = input?.value;
  if (!currentValue) {
    throw new Error("입력한 값이 없습니다!");
  }
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form?.classList.add(SHOWING_CN);
  form?.addEventListener("submit", handleNameSubmit);
}

function paintGreeting(text: string) {
  form?.classList.remove(SHOWING_CN);
  greeting?.classList.add(SHOWING_CN);
  if (greeting instanceof HTMLParagraphElement)
    greeting.innerText = `Welcome, ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function initGreeting() {
  loadName();
}

initGreeting();
