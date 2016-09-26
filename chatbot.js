var question;
var answer;

var questionConversion = {
  "how old are you?": "I was created, not born",
  "what is your name?": "Lex",
  "what time is it?": "It is " + " " +
}


function talkBot() {
  question = $("#input").val();

  $("#chat-area").prepend(question + "<br>");

  answer = questionConversion[question];

  $("#chat-area").prepend(answer + "<br>");

}


function digitized() {
  
}
