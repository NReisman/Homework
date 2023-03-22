(function () {
  'use strict';

  const socketIo = io();

  const msgInput = $('#messageText');
  $('#form').submit(e => {
    e.preventDefault();
    socketIo.emit('msg', msgInput.val());
    msgInput.val('')
  })

  const messagesElem = $('#message');
  socketIo.on('msg', msg => {
    messagesElem.append(`<div>${msg}</div>`);
  });



})();
