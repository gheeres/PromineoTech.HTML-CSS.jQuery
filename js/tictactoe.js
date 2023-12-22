(function($, undefined) {
  'use strict'
  
  $(document).ready(function() {
    const $game = $('#game');
    let player = 'X';

    /**
     * Switches the current player to the next player.
     * @returns {String} The current player
     */
    function switchPlayer() {
      if (player === 'X') {
        player = 'O';
      }
      else {
        player = 'X';
      }
      return player;
    }

    $game.on('click', '.cell', (e) => {
      const $cell = $(e.target).closest('.cell');
      if ($cell.length) {
        const value = $cell.data('player');
        if (! value) {
          $cell.data('player', player);
          $cell.html(`<i class="bi ${ (player === 'X' ? 'bi-x-lg' : 'bi-circle') }"></i>`);

          switchPlayer();
        }
      }
    });
  });  
})(jQuery);