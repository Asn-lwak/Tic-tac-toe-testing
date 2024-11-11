document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start-button");
    const resetButton = document.getElementById("reset-button");
    const board = document.querySelector(".board");
    const result = document.getElementById("result");
    const currentPlayerDisplay = document.getElementById("current-player");
    let currentPlayer = "X";
    let boardArray = ["", "", "", "", "", "", "", "", ""];

    function checkWinner() {
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

        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (boardArray[a] && boardArray[a] === boardArray[b] && boardArray[a] === boardArray[c]) {
                board.children[a].style.backgroundColor = "#32cd32";
                board.children[b].style.backgroundColor = "#32cd32";
                board.children[c].style.backgroundColor = "#32cd32";
                return boardArray[a];
            }
        }

        if (boardArray.includes("")) {
            return null;
        }

        return "Tie";
    }

    function handleClick(event) {
        const cell = event.target;
        const cellIndex = Array.from(board.children).indexOf(cell);

        if (boardArray[cellIndex] === "" && !checkWinner()) {
            boardArray[cellIndex] = currentPlayer;
            cell.textContent = currentPlayer;

            const winner = checkWinner();
            if (winner) {
                if (winner === "Tie") {
                    result.textContent = "It's a tie!";
                } else {
                    result.textContent = `${winner} wins!`;
                }
            } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
                currentPlayerDisplay.textContent = `Current Player: ${currentPlayer}`;
            }
        }
    }

    function startGame() {
        boardArray = ["", "", "", "", "", "", "", "", ""];
        result.textContent = "";
        currentPlayer = "X";
        currentPlayerDisplay.textContent = `Current Player: ${currentPlayer}`;

        while (board.firstChild) {
            board.removeChild(board.firstChild);
        }

        for (let i = 0; i < 9; i++) {
            const cell = document.createElement("div");
            cell.addEventListener("click", handleClick);
            cell.style.backgroundColor = "#eee";
            cell.style.width = "100px";
            cell.style.height = "100px";
            cell.style.display = "inline-block";
            cell.style.border = "1px solid #000";
            cell.style.fontSize = "2em";
            cell.style.textAlign = "center";
            cell.style.lineHeight = "100px";
            board.appendChild(cell);
        }
    }

    function resetGame() {
        boardArray = ["", "", "", "", "", "", "", "", ""];
        result.textContent = "";
        currentPlayer = "X";
        currentPlayerDisplay.textContent = `Current Player: ${currentPlayer}`;

        while (board.firstChild) {
            board.removeChild(board.firstChild);
        }

        for (let i = 0; i < 9; i++) {
            const cell = document.createElement("div");
            cell.addEventListener("click", handleClick);
            cell.style.backgroundColor = "#eee";
            cell.style.width = "100px";
            cell.style.height = "100px";
            cell.style.display = "inline-block";
            cell.style.border = "1px solid #000";
            cell.style.fontSize = "2em";
            cell.style.textAlign = "center";
            cell.style.lineHeight = "100px";
            board.appendChild(cell);
        }
    }

    startButton.addEventListener("click", startGame);
    resetButton.addEventListener("click", resetGame);
});
