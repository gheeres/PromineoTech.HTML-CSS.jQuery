(function($, undefined) {
  'use strict'

  $(document).ready(function() {
    const $form = $('form');
    const $addButton = $('#add');
    const $emailInput = $('#email');
    const $commentInput = $('#comment');
    const $comments = $('#comments');

    $emailInput.val('gheeres@gmail.com');
    $commentInput.val('This is a sample comment...');

    $addButton.on('click', (e) => {
      let email = $emailInput.val();
      let comment = $commentInput.val();
      if ((email) && (comment)) {
        //console.log(email);
        //console.log(comment);

        $comments.append(`<li class="list-group-item">
          <div class="email">${ email }</div>
          <div class="comment">${ comment } </div>
        </li>`);
        $emailInput.val('');
        $commentInput.val('');
      }
    });
  });
})(jQuery);