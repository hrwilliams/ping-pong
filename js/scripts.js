//Frontend
$(function () {
  $('#ping-pong').submit(function(event){
    event.preventDefault();
    var countTo = parseInt($('#countTo').val());
    var countBy = 1
//Backend
    for (var i = 0; i <= countTo; i += countBy) {
      $("#results").append(i + '<br>');
    };
    $("#results").show();
  });
});

//Backend
//     for (var i = 0; i <= countTo; i += countBy) {
//       $("#results").show();
//     };
//
//   });
// });
