const body = document.querySelector("body");
const proverb = document.querySelector(".proverb") as HTMLParagraphElement;

const IMG_NUMBER = 7;

const PRO_ARR = [
  {
    quotation:
      "If you run into a wall, don't turn around and give up.\n Figure out how to climb it.",
    author: "- Michael Jordan",
  },
  {
    quotation: "Never say never, because limits are often just an illusion.",
    author: "- Michael Jordan -",
  },
  {
    quotation:
      "I can accept failure, everyone fails at something.\n But I can't accept not trying.",
    author: "- Michael Jordan -",
  },
  {
    quotation: "Don't be afraid of failure. This is the way to succeed.",
    author: "- Lebron James -",
  },
  {
    quotation: "If you're afraid to fail, then you're probably goint to fail.",
    author: "- Kobe Bryant -",
  },
  {
    quotation:
      "Success comes after you conquer your biggest obstacles and hurdles.",
    author: "- Stephen Curry -",
  },
  {
    quotation: "The only person who can really motivate you is you.",
    author: "- Shaquille O'Neal -",
  },
];

function paintImage(imgNumber: number) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body?.appendChild(image);
}

function paintProverb(imgNumber: number) {
  const randomProverb = PRO_ARR[imgNumber];
  console.log(randomProverb);
  proverb.innerText = `${randomProverb.quotation} \n\n${randomProverb.author}`;
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function initBG() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
  paintProverb(randomNumber);
}

initBG();
