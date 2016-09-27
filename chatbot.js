var question;
var answer;

var questionConversion = {
  "how old are you?": "I was created, not born",
  "what is your name?": "Lex",
  //"what time is it?": "It is " + " " +
}

var myNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var rand = Math.floor((Math.floor() * myNumbers.length));


function talkBot() {
  question = $("#input").val();

  $("#chat-area").prepend(question + "<br>");

  answer = questionConversion[question];

  if(answer === undefined) {
    $("#chat-area").prepend("What is it again?" + "<br>");
  }
else {
  $("#chat-area").prepend(answer + "<br>");
  }
}
