$(function(){
  function buildHTML(message){
    if(message.image){
      let html = 
        `<div class="main-messageBox" data-message-id=${message.id}>
          <div class="main-messageInfo">
            <div class="main-messageInfo__name">
              ${message.user_name}
            </div>
            <div class="main-messageInfo__time">
              ${message.created_at}
            </div>
          </div>
          <div class="main-message">
            <p class="main-message__content">
              ${message.content}
            </p>
            <img class="main-message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html = 
      `<div class="main-messageBox" data-message-id=${message.id}>
        <div class="main-messageInfo">
          <div class="main-messageInfo__name">
            ${message.user_name}
          </div>
          <div class="main-messageInfo__time">
            ${message.created_at}
          </div>
        </div>
        <div class="main-message">
         <p class="main-message__content">
           ${message.content}
         </p>
       </div>
      </div>`
      return html;
    };
  }

  let reloadMessages = function() {
    let last_message_id = $('.main-messageBox:last').data("message-id") || 0;
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        let insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.main-messagefield').append(insertHTML);
        $('.main-messagefield').animate({ scrollTop: $('.main-messagefield')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  setInterval(reloadMessages, 7000);
});