function talkBot() {
  $("#chat-area").html($("#input").val());


}

var questionConversion = {
  "how old are you?": old,
  "what is your name?":name,
  "what time is it?":is
}

if(questionConversion == old) {
  $("#chat-area").html("I was born in Sept 21, 16.");
}
else if (questionConversion == name) {
  $("#chat-area").html("My namme is Lex");
}
else {
  $("#chat-area").html();
}
