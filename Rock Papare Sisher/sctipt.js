 const choices = ["rock", "paper", "scissors"];
    let userScore = 0;
    let computerScore = 0;

    document.querySelectorAll(".choice").forEach(button => {
      button.addEventListener("click", function () {
        const userChoice = this.id;
        const compChoice = choices[Math.floor(Math.random() * 3)];
        determineWinner(userChoice, compChoice);
      });
    });

    function determineWinner(user, comp) {
      let result = "";

      if (user === comp) {
        result = `🤝 It's a tie! You both chose ${user}.`;
      } else if (
        (user === "rock" && comp === "scissors") ||
        (user === "paper" && comp === "rock") ||
        (user === "scissors" && comp === "paper")
      ) {
        userScore++;
        result = `🎉 You win! You chose ${user}, computer chose ${comp}.`;
      } else {
        computerScore++;
        result = `😢 You lose! You chose ${user}, computer chose ${comp}.`;
      }

      // Update the result and score
      document.getElementById("resultText").textContent = result;
      document.getElementById("userScore").textContent = userScore;
      document.getElementById("computerScore").textContent = computerScore;
    }

    function resetGame() {
      userScore = 0;
      computerScore = 0;
      document.getElementById("userScore").textContent = 0;
      document.getElementById("computerScore").textContent = 0;
      document.getElementById("resultText").textContent = "Make your move!";
    }