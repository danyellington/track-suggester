$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();

    $("#questions").fadeOut();

    var Q1 = $("input:radio[name=Q1]:checked").val();
    var japan = $("input:radio[name=japan]:checked").val();
    var hairy = $("input:radio[name=hairy]:checked").val();
    var weather = $("input:radio[name=weather]:checked").val();
    var breath = $("input:radio[name=breath]:checked").val();

    if (Q1 === "no") {
      $(".barney").fadeIn();
    } else if (Q1 === "yes" && japan === "no" && hairy === "no") {
      $(".nessie").fadeIn();
    } else if (Q1 === "yes" && japan === "no" && hairy === "yes" && weather === "no") {
      $(".sasquatch").fadeIn();
    } else if (Q1 === "yes" && japan === "no" && hairy === "yes" && weather === "yes") {
      $(".yeti").fadeIn();
    } else if (Q1 === "yes" && japan === "yes" && breath === "yes") {
      $(".godzilla").fadeIn();
    } else if (Q1 === "yes" && japan === "yes" && breath === "no") {
      $(".mothra").fadeIn();
    }
  });
});


//here is a comment
