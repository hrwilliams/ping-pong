// //Frontend
// $(function () {
//   $('#ping-pong').submit(function(event){
//     event.preventDefault();
//     // var countTo = parseInt($('#countTo').val());
//     // var countBy = 1
// // //Backend
// //     for (var i = 0; i <= countTo; i += countBy) {
// //       $("#results").append(i + '<br>');
// //     };
// //     $("#results").show();
// //   });
// // });
// //

//user interface logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#number").val();


    $("#result").text(pingPong(userInput));
    $("#result").show();
  });
});


//business logic


var pingPong = function(number) {
  var result = [];
  for (var i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      result.push("pingpong");
    } else if (i % 3 === 0) {
      result.push("ping");
    } else if (i % 5 === 0) {
      result.push("pong");
    } else  {
      result.push(i);
    }
  }
  return result;
}


// //Backend not working
// //     for (var i = 0; i <= countTo; i += countBy) {
// //       $("#results").show();
// //     };
// //
// //   });
// // });
