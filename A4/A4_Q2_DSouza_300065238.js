/* Checks if game is solved. 
For quick way to test this function comment out 'shuffleArray(lst);' (line 124) */
function isGameOver(board){
    var i = 1;
    for(var row=0;row<4;row++){
        for(var col=0;col<4;col++){
            if (board[row][col] === 0){
                // pass
            }
            else if (board[row][col] === i){
                i++;
            }
            else {
                return;
            }
        }
    }
    var res = confirm("You solved the puzzle! Would you like to play again?");
    if (res) start();
}

function randomizeArray(lst) {
    for (var i = lst.length - 1; i > 0; i--) {
        var i2 = Math.floor(Math.random() * (i + 1));
        var temp = lst[i];
        lst[i] = lst[i2];
        lst[i2] = temp;
    }
}

/* returns:
 0 -> move is not legal
 1 -> empty slot is above chosen slot
 2 -> empty slot is below chosen slot
 3 -> empty slot is to left of chosen slot
 4 -> empty slot is to right of chosen slot 
 */
function isLegalMove(board, row, col){
    if(row>0) {
        if(board[row-1][col] === 0) return 1;
    }
    if(row<3) {
        if(board[row+1][col] === 0) return 2;
    }
    if(col>0) {
        if(board[row][col-1] === 0) return 3;
    }
    if(col<3) {
        if(board[row][col+1] === 0) return 4;
    }
    return 0;
}

/* switches chosen slot with empty slot based on move (number returned from isLegalMove) */
function switchSlots(board, row, col, move){
    var newBoard = [];
    newBoard.push(board[0].slice());
    newBoard.push(board[1].slice());
    newBoard.push(board[2].slice());
    newBoard.push(board[3].slice());
    switch(move){
        case 1:
            newBoard[row-1][col] = board[row][col];
            newBoard[row][col] = 0;
            break;
        case 2:
            newBoard[row+1][col] = board[row][col];
            newBoard[row][col] = 0;
            break;
        case 3:
            newBoard[row][col-1] = board[row][col];
            newBoard[row][col] = 0;
            break;
        case 4:
            newBoard[row][col+1] = board[row][col];
            newBoard[row][col] = 0;
            break;
    }
    return newBoard;
}

function slotClicked(board, row , col){
    return function(){
        var move = isLegalMove(board, row, col);
        if (move){
            document.getElementById("p2").innerHTML = "";
            var newBoard = switchSlots(board, row, col, move);
            renderBoard(newBoard);
        }
        else {
            document.getElementById("p2").innerHTML = "Illegal move: Please select a slot next to the empty slot to make a move";
        }
    }
}

/* Renders the board to 'board' div and adds the click event listener to each slot */
function renderBoard(board){
    var boardElem = document.getElementById("board");
    boardElem.innerHTML = "";
    for(var row=0;row<4;row++){
        boardElem.innerHTML += `<div id='row-${row}'>`;
        for(var col=0;col<4;col++){
            if (board[row][col] === 0) 
                boardElem.innerHTML += `<div id='slot-${row}-${col}' class='slot slot-empty'></div>`;
            else 
                boardElem.innerHTML += `<div id='slot-${row}-${col}' class='slot'><span>${board[row][col]}</span></div>`;
        }
        boardElem.innerHTML += `</div>`;
    }

    for(var row=0;row<4;row++){
        for(var col=0;col<4;col++){
            document.getElementById(`slot-${row}-${col}`).addEventListener("click", slotClicked(board, row, col));
        }
    }
    isGameOver(board);
}

function start() {
    var lst = [];
    for(var i=0;i<=15;i++){
        lst.push(i);
    }
    randomizeArray(lst);
    // 0 will reference the empty slot
    var board = [];
    board.push(lst.slice(0,4));
    board.push(lst.slice(4,8));
    board.push(lst.slice(8,12));
    board.push(lst.slice(12,16));
    renderBoard(board);
}

window.addEventListener("load", start, false);