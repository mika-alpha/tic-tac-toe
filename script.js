


const Player = (name, symbol) => {
    const getName = () => name;
    const getSymbol = () => symbol;
    return {getName, getSymbol};
}


 const game = (() => {
    const playerNames = document.getElementsByClassName('player-name');
    const startButton = document.getElementById('start');
    let playerOne;
    let playerTwo;
    let turn = 1;
    let gameOver = true; // starts as true to stop players from playing without hitting start.

    const startGame = () => {
        createPlayers();
        for(let i = 0; i < 2; i++){
            playerNames[i].disabled = true;
        }
        gameOver = false;
        changeColors();

    }


    const createPlayers = () => {
        playerOne = Player(`${playerNames[0].value.length > 0 ? playerNames[0].value : 'P1'}`, 'X');
        playerTwo = Player(`${playerNames[1].value.length > 0 ? playerNames[1].value : 'P2'}`, 'O');
    }

    const stopGame = () =>{
        gameOver = true;
        changeColors();
    }

    const changeColors = () =>{
        if (turn % 2 != 0){
            if (gameOver){
                playerNames[1].classList.add('winner');
                playerNames[0].classList.add('loser');
            } else {
                playerNames[0].classList.add('playing');
                playerNames[1].classList.remove('playing');
            }
            return;
        }

        if (turn % 2 == 0){
            if (gameOver){
                playerNames[0].classList.add('winner');
                playerNames[1].classList.add('loser');
            } else {
                playerNames[1].classList.add('playing');
                playerNames[0].classList.remove('playing')
            }
        }
    }

    const checkWinner = function(gameBoard){
        for (let i = 0; i < 3; i++){ //horizontal check
            if (gameBoard[i][0] === undefined){
                continue;
            }
            if (gameBoard[i][0] == gameBoard[i][1] && gameBoard[i][1] == gameBoard[i][2]){
                stopGame(gameBoard[i][0]);  
                return;
            }
        }

        for (let j = 0; j <3; j++){ //vertical check
            if (gameBoard[0][j] === undefined){
                continue;
            }
            if (gameBoard[0][j] == gameBoard[1][j] && gameBoard[1][j] == gameBoard[2][j]){
                stopGame(gameBoard[0][j]);  
                return;
            }
        }

        if (gameBoard[1][1] !== undefined){ // diagonal checks
            if (gameBoard[1][1] == gameBoard[0][0] && gameBoard[2][2] == gameBoard[1][1]){
                stopGame(gameBoard[1][1]);  
                return;
            }
            if (gameBoard[1][1] == gameBoard[2][0] && gameBoard[0][2] == gameBoard[1][1]){
                stopGame(gameBoard[1][1]);  
                return;
            }
        }
    }

    const increaseTurn = () => turn++;
    

    startButton.addEventListener('click', startGame);   

    const getPlayerOne = () => playerOne;
    const getPlayerTwo = () => playerTwo;
    const getTurn = () => turn;
    const getGameOver = () => gameOver;




    return {getTurn, getPlayerOne, getPlayerTwo, checkWinner, getGameOver, changeColors, increaseTurn};

 })();

const gameBoard = (() => {
    const gameCells = Array.from(document.getElementsByClassName('game-cell'));
    const gameBoard = [[],[],[]];   

    const playerMove = (e) =>{
        if (e.target.childNodes.length == 0 && !game.getGameOver()){
            if(!(game.getTurn() % 2 == 0)){
                e.target.textContent = game.getPlayerOne().getSymbol();
                gameBoard[e.target.getAttribute('row')][e.target.getAttribute('col')] = game.getPlayerOne();
            } else{
                e.target.textContent = game.getPlayerTwo().getSymbol();
                gameBoard[e.target.getAttribute('row')][e.target.getAttribute('col')] = game.getPlayerTwo();
            }
            game.increaseTurn();
            game.changeColors();
            game.checkWinner(gameBoard);
            
        }

    }

    gameCells.forEach(cell => cell.addEventListener('click', playerMove));

})();

