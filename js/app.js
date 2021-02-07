const game = new Game;
const beginGameBtn = document.querySelector('#begin-game');
const playArea = document.querySelector('#play-area');

/** 
 * Listens for click on `#begin-game` and calls startGame() on game object
 */
beginGameBtn.addEventListener('click', (e) => {
    game.startGame();
    e.target.style.display = 'none';
    playArea.style.opacity = '1';
})

/** 
 * Listen for keyboard presses
 */
document.addEventListener('keydown', (e) => {
    game.handleKeyDown(e);
});