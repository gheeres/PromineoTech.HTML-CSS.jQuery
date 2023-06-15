(function($, undefined) {
  'use strict'

  /**
   * Generates a random number.
   * @param {Number} max The maximum value to include.
   * @returns The random number
   */
  function random(max) {
    return Math.floor(Math.random() * max);
  }

  /**
   * Represents a cell or clicable lcoation in the game.
   */
  class Cell {
    /**
     * Renders or updates the state of the cell.
     * @param {Boolean} isGameOver Indicates if the game has ended.
     * @returns {HTMLElement} The currently rendered cell.
     */
    render(isGameOver) {
    }
  }

  /**
   * The game of minesweeper
   */
  class Game {
    /**
     * Creates an instance of the Game class.
     * @param {HTMLElement} $element 
     */
    constructor($element) {
    }


    /**
     * Starts handling events for the game.
     */
    start() {
      console.log('Game starting...');
    }

    /**
     * Ends the game and reveals all of the cells.
     */
    gameOver() {
    }

    /**
     * Renders all of the game cells.
     * @param {Boolean} isGameOver Indicates if the game has ended.
     * @returns {HTMLElement} The currently rendered cell.
     */
    render(isGameOver) {
    }
  }

  $(document).ready(function() {
    const $gameBoard = $('#game-board');

    const game = new Game($gameBoard);
    game.start();
  });
})(jQuery);