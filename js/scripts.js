$(function() {
  var result="";
  function tableTenis(test) {
    for(var i=1; i<=test; i++) {
      if(i % 15 == 0) {
        result = ("PingPong");
        $("#pingPongResult").append("<li>" + result+ "</li>");
      } else if (i % 3 == 0) {
        result = ("Ping");
        $("#pingPongResult").append("<li>" + result+ "</li>");
      } else if (i % 5 == 0) {
        result = ("Pong");
        $("#pingPongResult").append("<li>" + result+ "</li>");
      } else {
        $("#pingPongResult").append("<li>" + i + "</li>");
      }
    }
  };
  $("form#pingPongForm").submit(function(event) {
    debugger;
    var numberInput = parseInt($("input#numberInput").val());
    event.preventDefault();
    tableTenis(numberInput);
  });
});
