


 const game = (() => {
    const startButton = document.getElementsByClassName('start-button')[0];
    const playerNames = document.getElementsByClassName('player-name');
    let playerOne;
    let playerTwo;

    const startGame = () => {
        startButton.style.display = "none";
        createPlayers();
        for(let i = 0; i < 2; i++){
            playerNames[i].disabled = true;
        }
    }

    const createPlayers = () => {
        playerOne = Player(playerNames[0].value, 'X');
        playerTwo = Player(playerNames[1], 'O');
    }
    startButton.addEventListener('click', startGame);

 })();

const gameBoard = (() => {
    const gameGrid = document.getElementsByClassName('game-grid')[0];
    const gameCells = Array.from(document.getElementsByClassName('game-cell'));
    const gameBoard = [];

})();




const Player = (name, symbol) => {
    const getName = () => name;
    const getSymbol = () => symbol;
    return {getName, getSymbol};
}