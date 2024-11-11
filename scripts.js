document.addEventListener("DOMContentLoaded", function() {
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

    function checkWinner() {
        // Function code for checking the winner remains the same as in the previous script
    }

    function handleClick(event) {
        // Function code for handling player clicks remains the same as in the previous script
    }

    function aiMove() {
        // Function code for AI move remains the same as in the previous script
    }

    function startGame() {
        // Function code for starting the game remains the same as in the previous script
    }

    function selectMode(mode) {
        gameMode = mode;
        modeSelection.style.display = "none";
        gameControls.style.display = "block";
        result.textContent = "";
        currentPlayer = "X";
        currentPlayerDisplay.textContent = `Current Player: ${currentPlayer}`;
        startGame();
    }

    function resetGame() {
        if (confirm("Are you sure you want to reset the game?")) {
            // Function code for resetting the game remains the same as in the previous script
        }
    }

    function goBack() {
        gameMode = "";
        modeSelection.style.display = "block";
        gameControls.style.display = "none";
        currentPlayerDisplay.textContent = "";
        boardArray = ["", "", "", "", "", "", "", "", ""];
        result.textContent = "";
        currentPlayer = "X";

        while (board.firstChild) {
            board.removeChild(board.firstChild);
        }
    }

    singlePlayerButton.addEventListener("click", () => selectMode("single"));
    twoPlayerButton.addEventListener("click", () => selectMode("two"));
    startButton.addEventListener("click", startGame);
    resetButton.addEventListener("click", resetGame);
    backButton.addEventListener("click", goBack);
});
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement("div");
            cell.addEventListener("click", handleClick);
            board.appendChild(cell);
        }

        // Reset cell background colors
        const cells = board.children;
        for (let i = 0; i < cells.length; i++) {
            cells[i].style.backgroundColor = "#eee";
        }

        if (gameMode === "single" && currentPlayer === "O") {
            aiMove();
        }
    }

    function selectMode(mode) {
        gameMode = mode;
        modeSelection.style.display = "none";
        gameControls.style.display = "flex";
        startGame();
    }

    function resetGame() {
        result.textContent = "";
        currentPlayerDisplay.textContent = "";
        boardArray = ["", "", "", "", "", "", "", "", ""];
        startGame();
    }

    singlePlayerButton.addEventListener("click", () => selectMode("single"));
    twoPlayerButton.addEventListener("click", () => selectMode("two"));
    startButton.addEventListener("click", startGame);
    resetButton.addEventListener("click", resetGame);
    backButton.addEventListener("click", () => {
        modeSelection.style.display = "flex";
        gameControls.style.display = "none";
        currentPlayerDisplay.textContent = "";
        result.textContent = "";
        boardArray = ["", "", "", "", "", "", "", "", ""];
        while (board.firstChild) {
            board.removeChild(board.firstChild);
        }
    });
});
