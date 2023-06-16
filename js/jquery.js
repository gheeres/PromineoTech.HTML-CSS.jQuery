(function($, undefined) {
  'use strict'

  $(document).ready(function() {

    const $emailInput = $('#email');
    const $commentInput = $('#comment');
    const $addButton = $('#add') ;
    const $comment = $('#comments');

    
    // For testing
    //$emailInput.val('gheeres@gmail.com');
    //$comment.val('So cool! I want to go!!!!');
    //$addButton.removeClass('disabled');


    /**
     * Checks to make sure the form is valid.
     * @returns boolean True if value, false if otherwise.
     */
    function isInputValid() {
      //if ($emailInput.val() && $commentInput.val()) {
      //  return true;
      //}
      //return false;
      return ($emailInput.val() && $commentInput.val());
    }

    /**
     * Resets the form elements.
     */
    function reset() {
      $emailInput.val('');
      $commentInput.val('');
      $addButton.addClass('disabled');
    }

    //$addButton.on('click', function(e) {
    //});
    //$('#add').on('click', (e) => { });
    $addButton.on('click', (e) => {
      console.log('Add new comment.');
      const email = $emailInput.val();
      const comment = $commentInput.val();
      console.log(`email=${ email }`);
      console.log(`comment=${ comment }`);

      if ((email) && (comment)) {
        // add a new list item to ul#comments
        const li = `
          <li class="list-item-group">
            <div class="email">${ email }</div>
            <div class="comment">${ comment }</div>
          </li>
        `;
        //console.log(li);
        $comment.append(li);

        reset();
        //$emailInput.val('');
        //$commentInput.val('');
      }
    });

    //$commentInput.on('change', (e) => {
    //  $addButton.removeClass('disabled');
    //});
    //$emailInput.on('change', (e) => {
    //  $addButton.removeClass('disabled');
    //});
    $('input,textarea').on('change', (e) => {
      //if ($emailInput.val() && $commentInput.val()) {
      if (isInputValid()) {
        $addButton.removeClass('disabled');
      }
      else {
        $addButton.addClass('disabled');
      }
    });


  });
})(jQuery);