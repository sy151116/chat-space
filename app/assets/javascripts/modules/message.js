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
  $('.Form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.main-messagefield').append(html);      
      $('form')[0].reset();
      $('.main-messagefield').animate({ scrollTop: $('.main-messagefield')[0].scrollHeight});
      $('.send').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.send').prop('disabled', false);
  });
  });
