var body = document.querySelector("body");
var proverb = document.querySelector(".proverb");
var IMG_NUMBER = 7;
var PRO_ARR = [{
        quotation: "If you run into a wall, don't turn around and give up.\n Figure out how to climb it.",
        author: "- Michael Jordan"
    },
    {
        quotation: "Never say never, because limits are often just an illusion.",
        author: "- Michael Jordan -"
    },
    {
        quotation: "I can accept failure, everyone fails at something.\n But I can't accept not trying.",
        author: "- Michael Jordan -"
    },
    {
        quotation: "Don't be afraid of failure. This is the way to succeed.",
        author: "- Lebron James -"
    },
    {
        quotation: "If you're afraid to fail, then you're probably goint to fail.",
        author: "- Kobe Bryant -"
    },
    {
        quotation: "Success comes after you conquer your biggest obstacles and hurdles.",
        author: "- Stephen Curry -"
    },
    {
        quotation: "The only person who can really motivate you is you.",
        author: "- Shaquille O'Neal -"
    }
];
function paintImage(imgNumber) {
    var image = new Image();
    image.src = "images/".concat(imgNumber + 1, ".jpg");
    image.classList.add("bgImage");
    body === null || body === void 0 ? void 0 : body.appendChild(image);
}
function paintProverb(imgNumber) {
    var randomProverb = PRO_ARR[imgNumber];
    if (proverb instanceof HTMLParagraphElement)
        proverb.innerText = "".concat(randomProverb.quotation, " \n\n").concat(randomProverb.author);
}
function genRandom() {
    var number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}
function init() {
    var randomNumber = genRandom();
    paintImage(randomNumber);
    paintProverb(randomNumber);
}
init();
