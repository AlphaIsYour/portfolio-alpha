// program mengetik
const words = [
  "Welcome to My Website",
  "Explore My Projects",
  "Get to Know Me",
  "Let's Collaborate!",
];
let i = 0;
let j = 0;
let currentWord = [];
let isDeleting = false;
let isEnd = false;

function loop() {
  isEnd = false;
  document.querySelector(".typing").innerHTML = currentWord.join("");

  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      currentWord.push(words[i][j]);
      j++;
      document.querySelector(".typing").innerHTML = currentWord.join("");
    }

    if (isDeleting && j <= words[i].length) {
      currentWord.pop();
      j--;
      document.querySelector(".typing").innerHTML = currentWord.join("");
    }

    if (j == words[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentWord = [];
      isDeleting = false;
      i++;
      if (i == words.length) {
        i = 0;
      }
    }
  }
  const speed = isEnd ? 2000 : isDeleting ? 50 : 150;
  setTimeout(loop, speed);
}

loop();
