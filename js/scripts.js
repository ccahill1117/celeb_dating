$(document).ready(function() {
  $("form#profile").submit(function(event) {

    var age = parseInt($("input#age").val());
    var foodOption = $("select#meal").val();
    var carOption = $("input:radio[name=car]:checked").val();

    // console.log(age, foodOption, carOption);

    if (age <= 18) {
      $("#date1").show();
    } else if (age > 18 && age < 21) {
        $("#date2").show();
    } else {
        $("#date3").show();
    }
    //
    // $("#date2").show();
    // $("#date").show();


    // var date1
    // var date2
    // var date3


event.preventDefault();

  });

});
