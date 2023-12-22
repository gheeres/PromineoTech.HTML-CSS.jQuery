(function($, undefined) {
  'use strict'

  // IIFE - Immediately Invoked Function Expression
  $(document).ready(function() {
    const $form = $('form'); // document.getElementsByTag('form')
    const $comments = $('#comments'); // document.getElementById('comments')
    const $emailInput = $('#email');
    const $commentInput = $('#comment');
    const $addButton = $('#add');

    // console.log($form, $comments, $emailInput, $commentInput, $addButton);

    $addButton.on('click', (e) => {      // addButton.addEventListener('click', function() { ... })
      const email = $emailInput.val();   // email = emailInput.value
      const comment = $commentInput.val(); 

      if ((email) && (comment)) {
        //console.log('OK. Add it.', email, comment);
        $comments.append(`
          <li class="list-group-item">
            <div class="email">${ email }</div>
            <div class="comment">${ comment }</div>
          </li>
        `);

        $emailInput.val('');
        $commentInput.val('');
      }
    });
  });
})(jQuery);