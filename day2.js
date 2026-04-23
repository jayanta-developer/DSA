/// make a string revarse

// const revarseString = (string) => {
//   const inputString = string.split("");
//   console.log(inputString);
// };

let guessNum = 0;
let random = Math.floor(Math.random() * 20) + 1;

while (guessNum !== random) {
  guessNum = Number(prompt("Guess the number between 1 - 20"));

  if (isNaN(guessNum) || guessNum < 1 || guessNum > 20) {
    console.log("Invalid input! Enter a number between 1 and 20.");
    continue;
  }

  if (guessNum < random) {
    console.log("Too low! Try again.");
  } else if (guessNum > random) {
    console.log("Too high! Try again.");
  } else {
    console.log("Congratulations 🎉🎉🎉");
  }
}
