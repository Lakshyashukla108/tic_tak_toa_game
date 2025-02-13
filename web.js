let boxs = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let msg = document.querySelector("#msg");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");

let turnO = true; // true represents X's turn, false represents O's turn
let moveCount = 0; // Track the number of moves

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const resetGame = () => {
    turnO = true;
    moveCount = 0; // Reset move count
    enableBox();
    msgContainer.classList.add("hide");
};

// Add event listener to each box
boxs.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") { // Only allow marking if the box is empty
            if (turnO) {
                box.innerText = "X";
                box.style.background = "rgb(88, 255, 199)";
            } else {
                box.innerText = "O";
                box.style.background = "#38c596";
            }

            moveCount++; // Increment move count
            box.disabled = true; // Disable the box after clicking
            turnO = !turnO; // Toggle the turn
            checkWinner(); // Check if there's a winner

            if (moveCount === 9) { // If all boxes are filled
                console.log("All boxes are filled. It's a draw!");
                msg.innerText = "It's a draw!";
                msgContainer.classList.remove("hide");
            }
        }
    });
});

const disableBox = () => {
    for (let box of boxs) {
        box.disabled = true;
    }
};

const enableBox = () => {
    for (let box of boxs) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations. Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxs[pattern[0]].innerText;
        let pos2val = boxs[pattern[1]].innerText;
        let pos3val = boxs[pattern[2]].innerText;

        if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
            showWinner(pos1val); // Declare winner
            return;
        }
    }
};

newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);


































































// let boxs = document.querySelectorAll(".box");
// let resetbtn = document.querySelector("#reset-btn");
// let msg =document.querySelector("#msg");
// let newGamebtn = document.querySelector("#new-btn");
// let msgContainer = document.querySelector(".msg-container");

// let turnO = true;

// const winPatterns = [
//     [0, 1, 3],
//     [0, 3, 6],
//     [0, 4, 8],
//     [1, 4, 7],
//     [2, 5, 8],
//     [2, 4, 6],
//     [3, 4, 5],
//     [6, 7, 8],
// ];


// const resetGame = () => {
//     turnO = true;
//     enableBox();
//     msgContainer.classList.add("hide");
// };



// boxs.forEach((box) => {
//     box.addEventListener("click", () => {
//         if (turnO) {
//             box.innerText = "X";
//             turnO = false;
//         }
//         else {
//             box.innerText = "O";
//             turnO = true;
//         }
//         box.disabled = true;

//         checkWinner();
//     });
// });

// const disableBox = () => {
//     for (let box of boxs){
//         box.disabled = true;
//     }
// };

// const enableBox = () => {
//     for (let box of boxs){
//         box.disabled = false;
//         box.innerText = "";
//     }
// };

// const showWinner = (winner) => {
//     msg.innerText = `Congratulations. Winner is ${winner}`;
//     msgContainer.classList.remove("hide");
//     disableBox();
// };

// const checkWinner = () => {
//     for (let pattern of winPatterns) {
//         let pos1val = boxs[pattern[0]].innerText;
//         let pos2val = boxs[pattern[1]].innerText;  // Corrected the pattern index
//         let pos3val = boxs[pattern[2]].innerText;  // Corrected the pattern index

//         if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
//             if (pos1val === pos2val && pos2val === pos3val) {  // Fixed the comparison
//                 showWinner(pos1val);
//             }
//         }
//     }
// };

// newGamebtn.addEventListener("click",resetGame);
// resetbtn.addEventListener("click", resetGame);