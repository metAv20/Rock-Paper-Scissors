const choices = ["Rock", "Paper", "Scissors"];

const getComputerChoice = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

const getResult = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) return "It's a Tie!";
  if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    return "You Win!";
  }
  return "You Lose!";
};

export { choices, getComputerChoice, getResult };
