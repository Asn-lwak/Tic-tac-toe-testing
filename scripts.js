document.addEventListener("DOMContentLoaded", function () {
    const singlePlayerButton = document.getElementById("single-player-button");
    const twoPlayerButton = document.getElementById("two-player-button");
    const startButton = document.getElementById("start-button");
    const resetButton = document.getElementById("reset-button");
    const backButton = document.getElementById("back-button");
    const modeSelection = document.getElementById("mode-selection");
    const gameControls = document.getElementById("game-controls");
    const board = document.querySelector(".board");
    const result = document.getElementById("result");
    const currentPlayerDisplay = document.getElementById("current-player");
    let currentPlayer = "X";
    let boardArray = ["", "", "", "", "", "", "", "", ""];
    let gameMode = "";

    function logMessage(message) {
        console.log(message);
        alert(message); // Use alerts to ensure messages are seen
    }

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
                if (gameMode === "single") {
                    currentPlayer = "O";
                    currentPlayerDisplay.textContent = `Current Player: ${currentPlayer}`;
                    aiMove();
                } else {
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                    currentPlayerDisplay.textContent = `Current Player: ${currentPlayer}`;
                }
            }
        }
    }

    function aiMove() {
        let emptyCells = boardArray.map((val, index) => val === "" ? index : null).filter(val => val !== null);
        if (emptyCells.length > 0 && !checkWinner()) {
            let randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
            boardArray[randomIndex] = currentPlayer;
            board.children[randomIndex].textContent = currentPlayer;

            const winner = checkWinner();
            if (winner) {
                if (winner === "Tie") {
                    result.textContent = "It's a tie!";
                } else {
                    result.textContent = `${winner} wins!`;
                }
            } else {
                currentPlayer = "X";
                currentPlayerDisplay.textContent = `Current Player: ${currentPlayer}`;
            }
        }
    }

    function startGame() {
        logMessage("Starting game...");
        boardArray = ["", "", "", "", "", "", "", "", ""];
        result.textContent = "";
        currentPlayer = "X";
        currentPlayerDisplay.textContent = `Current Player: ${currentPlayer}`;

        while (board.firstChild) {
            board.removeChild(board.firstChild);
        }

        for (let i = 0; i < 9; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.addEventListener("click", handleClick);
            board.appendChild(cell);
        }
    }

    singlePlayerButton.addEventListener("click", function () {
        gameMode = "single";
        modeSelection.style.display = "none";
        gameControls.style.display = "block";
    });

    twoPlayerButton.addEventListener("click", function () {
        gameMode = "two";
        modeSelection.style.display = "none";
        gameControls.style.display = "block";
    });

    startButton.addEventListener("click", startGame);

    resetButton.addEventListener("click", function () {
    const confirmReset = window.confirm("Are you sure you want to reset the game?");
    if (confirmReset) {
        startGame();
    }
});


    backButton.addEventListener("click", function () {
        modeSelection.style.display = "block";
        gameControls.style.display = "none";
        boardArray = ["", "", "", "", "", "", "", "", ""];
        result.textContent = "";
        currentPlayer = "X";
        currentPlayerDisplay.textContent = `Current Player: ${currentPlayer}`;
        while (board.firstChild) {
            board.removeChild(board.firstChild);
        }
    });
});
