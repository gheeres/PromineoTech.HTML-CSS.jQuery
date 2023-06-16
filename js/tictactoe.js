(function($, undefined) {
  'use strict'
  
  $(document).ready(function() {
     const $game = $('#game');

     const playerX = '<i class="bi bi-x-lg"></i>';
     const playerO = '<i class="bi bi-circle"></i>';


     $game.on('click', '.cell', (e) => {
       console.log(e.target);
       // <i class="bi bi-arrow-through-heart-fill"></i>
       // <i class="bi bi-truck"></i>
       const $cell = $(e.target).closest('.cell');
       
       const player = $cell.data('player') || 'X';
       $cell.empty();
       if (player === 'X') {
        $cell.append(playerO);
        //$cell.append('<i class="bi bi-arrow-through-heart-fill"></i>');
        $cell.data('player', 'O');
       }
       else {
        $cell.append(playerX);
        //$cell.append('<i class="bi bi-truck">');
        $cell.data('player', 'X');
       }
     });
  });  
})(jQuery);