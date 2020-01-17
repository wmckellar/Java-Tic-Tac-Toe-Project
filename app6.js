let cells = document.querySelectorAll(".cell");
let shape = "X";
let cellNumber = 0
let winCheck = [
    [cells[0], cells[1], cells[2]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],
    [cells[0], cells[4], cells[8]],
    [cells[2], cells[4], cells[6]],
    [cells[0], cells[3], cells[6]],
    [cells[2], cells[5], cells[8]],
    [cells[1], cells[4], cells[7]]
]


for (i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", checkBox)
};

function checkBox(e) {
    if (e.target.textContent == "") {
        e.target.textContent = shape
        checkWinner();
        if (shape == "X") {
            shape = "O"
        } else {
            shape = "X"
        };
    };
};

function resetGame () {
    for (i = 0; i < cells.length; i++) {
        cells[i].innerHTML = ""
        shape = "x"
        cellNumber = 0
    };
};

function checkWinner() {
    cellNumber++
    for (i = 0; i < winCheck.length; i++) {
        let shapes = 0
        for (s = 0; s < winCheck[i].length; s++) {
            if (winCheck[i][s].innerHTML == shape) {
                shapes++
            };
            if (shapes == 3) {
                alert(shape + " " + "Wins")
                resetGame ()
                return;
            }
            if (cellNumber == 9 && shapes == 3) {
                alert(shape + "" + "Wins")
                resetGame ()
                return;
            }
            else if (shapes != 3 && cellNumber == 9) {
                alert("Tie Game")
                resetGame ()
            };
        };
    };
};

