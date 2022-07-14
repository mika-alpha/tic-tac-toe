


 const game = (() => {
    const playerNames = document.getElementsByClassName('player-name');
    

 })();

const gameBoard = (() => {
    const gameGrid = document.getElementsByClassName('game-grid')[0];
    const gameCells = Array.from(getElementsByClassName('game-cell'));
    const gameBoard = [];

})();




const Player = (name, symbol) => {
    const getName = () => name;
    const getSymbol = () => symbol;
    return {getName, getSymbol};
}