(function () {
    'use strict';
  
    const userName = $('#name');
    const userAddress = $('#address');
  
    const displayName = $('#displayName');
    const displayAddress = $('#displayAddress');
  
    $('#form').submit(e => {
      e.preventDefault();

      console.log(`${userName.val()} ${userAddress.val()}`);
      displayName.text(userName.val());
      displayAddress.text(userAddress.val());
    });
  
    const theButton = $('#form button');
    const theCheckbox = $('#terms');
    theCheckbox.change(e => {
      console.log(theCheckbox.is(':checked'));
      theButton.prop('disabled', !theCheckbox.prop('checked'));
    });
}());