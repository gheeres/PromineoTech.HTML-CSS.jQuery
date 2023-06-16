(function($, undefined) {
  'use strict'
  
  class RandomUserService {
    static defaultUrl = 'https://randomuser.me/api/';
    
    constructor(url) {
      this.url = url || RandomUserService.defaultUrl;
    }

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
      //this.cell = user.cell;
      //this.dob = user.dob;
      Object.assign(this, user);
    }

    render() {
      return `
        <div class="container-fluid member">
          <img class="member-image" src="${ this.picture.medium }">
          <div class="container">
            <h2 class="member-actions d-flex justify-content-between">
              <span class="member-name">${ this.name.first } ${ this.name.last }</span>
              <i class="control-member-delete bi bi-trash3-fill"></i>
            </h2>
            <div class="member-joined">
              <label>Joined:</label> <span class="member-joined-date">${ this.registered.date }</span>
            </div>
            <p class="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
        </div>
      `;
    }
  }

  $(document).ready(() => {
    const $members = $('#members');
    const $addMember = $('#member-add');

    const service = new RandomUserService();

    $addMember.on('click', (e) => {
      console.log('[START] click...');

      service.get().then((user) => {
        let member = new Member(user);
        $members.append(member.render());
        //console.log(member.render());
        //console.log(user);
      });

      console.log('[END] click!');
    });
  });
})(jQuery);