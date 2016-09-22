var question;
function talkBot() {
  question = $("#chat-area").html($("#input").val());


    var answer = questionConversion[questionArray];


}

var questionConversion = {
  "how old are you?": "old",
  "what is your name?": "name",
  "what time is it?": "time"
}

var questionArray = ["how old are you?", "what is your name?", "what time is it?"];
