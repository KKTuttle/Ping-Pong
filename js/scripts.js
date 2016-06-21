var pocet = function(test) {
  var testNumberArray = [];
  for(var i=1; i<=test; i++) {
    testNumberArray.push(i);
  }
  return testNumberArray;
}

var result = function(inputArray) {
  var resultArray = [];
  inputArray.forEach(function(test) {
    if (test % 15 == 0) {
      resultArray.push('ping-pong !!!!');
    } else if (test % 3 == 0) {
      resultArray.push('Ping');
    } else if (test % 5 == 0) {
      resultArray.push('Pong');
    } else {
      resultArray.push(test);
    }
  });
  return resultArray;
}

$(document).ready(function() {
  $("form#pingPongForm").submit(function(event) {
    var numberInput = parseInt($("input#numberInput").val());
    event.preventDefault();
  $("#pingPongResult li").remove();
    var numberArray = pocet(numberInput);
    var finalArray = result(numberArray);
    $("#pingPongResult").append("<li>" + finalArray + "</li>");
  });
});


// var result = [];
// function tableTenis(test) {
//   debugger;
//   // var result = [];
//   for(var i=1; i<=test; i++) {
//     if(i % 15 == 0) {
//       result.push("Ping Pong!");
//       // $("#pingPongResult").append("<li>" + result+ "</li>");
//     } else if (i % 3 == 0) {
//       result.push("Ping");
//       // $("#pingPongResult").append("<li>" + result+ "</li>");
//     } else if (i % 5 == 0) {
//       result.push("Pong");
//       // $("#pingPongResult").append("<li>" + result+ "</li>");
//     } else {
//       // $("#pingPongResult").append("<li>" + i + "</li>");
//     }
//     return result;
//   }
//
// };
// $(function() {
//   $("form#pingPongForm").submit(function(event) {
//     var numberInput = parseInt($("input#numberInput").val());
//     for(var i=1; i<=result.length; i++) {
//
//     }
//     console.log(numberInput)
//     console.log(result);
//     $("#pingPongResult li").remove();
//
//     event.preventDefault();
//     tableTenis(numberInput);
//   });
// });
