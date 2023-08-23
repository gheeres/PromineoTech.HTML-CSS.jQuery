(function($, undefined) {
  'use strict'
  const defaultUrl = 'https://randomuser.me/api/';

  class RandomUserService {
    constructor(url) {
      this.url = url || defaultUrl;
    }

    /**
     * Retrieves a random member.
     */
    get() {
      return new Promise((resolve,reject) => {
        $.ajax({
          url: 'https://randomuser.me/api/',
          dataType: 'json',
          success: function(data) {
            resolve(data.results[0]);
          }
        });
      });
    }
  }

  $(document).ready(() => {
    const $members = $('#members');
    const $addUser = $('#member-add');
    const service = new RandomUserService();

    $addUser.on('click', (e) => {
      service.get().then(user => {
        let userElement = `<div class="container-fluid member">
          <img class="member-image" src="${ user.picture.medium }">
          <div class="container">
            <h2 class="member-actions d-flex justify-content-between">
              <span class="member-name">${ user.name.first } ${ user.name.last }</span>
              <i class="control-member-delete bi bi-trash3-fill"></i>
            </h2>
            <div class="member-joined">
              <label>Joined:</label> <span class="member-joined-date">${ user.registered.date }</span>
            </div>
            <p class="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
        </div>`;
        $members.append(userElement);
        //console.log(user);
      });
    });
  });
})(jQuery);