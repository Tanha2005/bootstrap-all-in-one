let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const drawGame = () => {
    msg.innerText = "Game was draw 😑. Play again!";
    msg.style.backgroundColor = "#64748b"; // Slate-500
};

const showWinner = (userWin, userId, compChoice) => {
    if (userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You win 😀!! Your ${userId} beats ${compChoice}.`;
        msg.style.backgroundColor = "#4ade80"; // Green-400
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You lose 🥺!! ${compChoice} beats your ${userId}.`;
        msg.style.backgroundColor = "#e11d48"; // Red-600
    }
};

const playGame = (userId) => {
    console.log("user choice =", userId);
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if (userId === compChoice) {
        // draw
        drawGame();
    } else {
        let userWin = true;
        if (userId === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userId === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userId, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userId = choice.getAttribute("id");
        playGame(userId);
    });
});
