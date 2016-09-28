var question;
var answer;

var questionConversion = {
  "how old are you?": "I was created, not born",
  "what is your name?": "Lex",
 "what time is it?": "It is " + returnTime( ) + "."
}


function returnTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  m = checkTime(m);
  $("#chat-area").val(h + ":" + m);
  var t = setTimeout(returnTime, 500);
}
function checkTime(i) {
  if(i < 10) {i = "0" + i};
  return i;
}


var fallBack = ["What?", "Sigh", "Say it again", "Yeah...."];

function talkBot() {
  question = $("#input").val();

  $("#chat-area").prepend(question + "<br>");

  answer = questionConversion[question];

  if(answer === undefined) {
    var rand = Math.floor((Math.random(rand) * fallBack.length));
    var fallBackAnswer = fallBack[rand];
    $("#chat-area").prepend(fallBackAnswer + "<br>");
  }
  else {
  $("#chat-area").prepend(answer + "<br>");
  }

}
