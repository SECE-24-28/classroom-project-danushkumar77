// 1 We need all the instance
let againBtn = document.querySelector(".again");
let number = document.querySelector(".number");
let guess = document.querySelector(".guess");
let checkBtn = document.querySelector(".check");
let score = document.querySelector(".score");
let highScore = document.querySelector(".highscore");
let msg = document.querySelector(".message");

// 2. Generate a Random Number betwenn 1 and 20
let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);

// 2.1 create a varible of score
let scr = 20;

// Button Functionalities
// 1.event  that we want to occur 2. Callback
checkBtn.addEventListener("click", () => {
  console.log("button");
  console.log(guess.value); 

//3.1 Input value is  equal to random value
  if (guess.value == randomNumber) {
    number.textContent = randomNumber;
    document.body.style.backgroundColor = "green";
    msg.textContent = "Correct Guess";
    highScore.textContent = scr;
  } else if (guess.value > randomNumber) {
    msg.textContent = "Too High ...";
    scr = scr - 1;
    score.textContent = scr;
  } else if (guess.value < randomNumber) {
    msg.textContent = "Too Low ...";
    scr = scr - 1;
    score.textContent = scr;
  }
});

againBtn.addEventListener("click", () => {
  highScore.textContent = scr == 20 ? 0 : scr;
  scr = 20;
  score.textContent = scr;
  document.body.style.backgroundColor = "#222";
  number.textContent = "?";
});
// the value of the value correct value is called as the upper most value for this is calloed as the correct value for this is 
// this is also called as the most important question of this question for there is one of the most wanted question