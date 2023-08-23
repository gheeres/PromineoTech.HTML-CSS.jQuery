(function($, undefined) {
  'use strict'
  
  document.addEventListener('DOMContentLoaded', (e) => {
    // Vanilla equivalent to jQuery.ready
    const gameVanilla = document.querySelector('#game');
    console.log(gameVanilla);
  });

  //$(document).ready(function() { 
  //});
  $((function() {
    const $game = $('#game');
    //console.log($game);
    const $cells = $('.cell', $game);

    /**
     * Checks to see if the game is over.
     * @param {HTMLElement[]} $cells The current cells.
     * @returns {boolean} True if game over, false if otherwise.
     */
    function isGameOver($cells) {
      let cellsSelected = 0;
      $cells.each((index,cell) => {
        //console.log(cell);
        //console.log($(cell).data('player'));
        
        //cellsSelected += $(cell).data('player') ? 1 : 0;
        if (($(cell).data('player') === 'X') ||
            ($(cell).data('player') === 'O')) {
          cellsSelected++;
        }
      });
      console.log(`Selected cells: ${ cellsSelected }`);
      return cellsSelected === 9;
    }

    //console.log($cells);
    $cells.each((index,cell) => {
      //console.log(cell);
      
      //cell.addEventListener('click', (e) => { });
      $(cell).on('click', (e) => { 
        //console.log(e);
        //console.log(e.target);
        //console.log(e.currentTarget);
        //console.log($(e.target).html());
        //$(e.currentTarget).html(`<i class="bi bi-circle"></i>`);
        //if ($(e.currentTarget).html() === `<i class="bi bi-circle"></i>`) {
        //  $(e.currentTarget).html(`<i class="bi bi-x-lg"></i>`);
        //}
        //else {
        //  $(e.currentTarget).html(`<i class="bi bi-circle-half"></i>`);
        //}
        const player = $(e.currentTarget).data('player') || 'X';
        if (player === 'X') {
          $(e.currentTarget).html(`<i class="bi bi-circle"></i>`);
          $(e.currentTarget).data('player', 'O');
        }
        else {
          $(e.currentTarget).html(`<i class="bi bi-x-lg"></i>`);
          $(e.currentTarget).data('player', 'X');
        }
        //$(e.currentTarget).data('player', player === 'X' ? 'O' : 'X');

        if (isGameOver($cells)) {
          const $alert = $(`<div class="alert alert-primary" role="alert">
            GAME OVER!
          </div>`);
          //console.log($alert);
          $game.prepend($alert);
          //$('body').prepend($alert);
        }
      });
    });
  }));  
})(jQuery);