(function($, undefined) {
  'use strict'

  /**
   * A class to get random user information.
   */
  class RandomUserService {
    static defaultUrl = 'https://randomuser.me/api/';

    constructor(url) {
      this.url = url || RandomUserService.defaultUrl;
    }

    /**
     * Gets a random user.
     */
    get() {
      return new Promise((resolve,reject) => {
        $.ajax({
          url: this.url,
          dataType: 'json',
          success: function(json) {
            resolve(json.results[0]);
          }
        });
      });
    }
  }

  class Member {
    constructor(user) {
      this.user = user;
    }
    
    render() {
      return `<div class="col-6">
         <div class="container-fluid member">
           <img class="member-image" src="${ this.user.picture.thumbnail }">
           <div class="container">
             <h2 class="member-actions d-flex justify-content-between">
               <span class="member-name">${ this.user.name.first } ${ this.user.name.last }</span>
               <i class="control-member-delete bi bi-trash3-fill"></i>
             </h2>
             <div class="member-joined">
               <label>Joined:</label> <span class="member-joined-date">${ this.user.registered.date }</span>
             </div>
             <p class="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
           </div>
         </div>
       </div>
      `;
    }
  }

  $(document).ready(() => {
    const $members = $('#members');
    const $addMemberButton = $('#member-add');

    const randomUserService = new RandomUserService();

    $addMemberButton.on('click', (e) => {
      randomUserService.get().then((user) => {
        const member = new Member(user);
        $members.append(member.render());
      });
    });
  });
})(jQuery);