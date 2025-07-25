const buttons = document.querySelectorAll(".Boxs");
const reset = document.querySelector(".resetbutt");
let winmsg = document.getElementById("msg");
let playerO = true;

const winpatton = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const disabledbox = () => {
    for (let box of buttons) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of buttons) {
        box.disabled = false;
        box.innerText = "";
    }
    winmsg.innerText = "";
};

const showWinner = (winner) => {
    winmsg.innerText = `🎉 Congratulations! Winner is ${winner}`;
};

const showTie = () => {
    winmsg.innerText = ` It's a Tie!`;
};

const checkWinner = () => {
    for (const pattern of winpatton) {
        let pos1 = buttons[pattern[0]].innerText;
        let pos2 = buttons[pattern[1]].innerText;
        let pos3 = buttons[pattern[2]].innerText;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            disabledbox();
            showWinner(pos1);
            return;
        }
    }

    let allFilled = true;
    buttons.forEach((box) => {
        if (box.innerText === "") {
            allFilled = false;
        }
    });

    if (allFilled) {
        showTie();
    }
};

buttons.forEach((but) => {
    but.addEventListener("click", () => {
        if (playerO) {
            but.innerText = "O";
        } else {
            but.innerText = "X";
        }
        but.disabled = true;
        playerO = !playerO;
        checkWinner();
    });
});

reset.addEventListener("click", () => {
    enableBoxes();
    playerO = true;
});
