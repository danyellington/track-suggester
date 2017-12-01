$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();

    $("#questions").fadeOut();

    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question2]:checked").val();
    var question3 = $("input:radio[name=question3]:checked").val();
    var question4 = $("input:radio[name=question4]:checked").val();
    var question5 = $("input:radio[name=question5]:checked").val();

    if (question1 === "no") {
      $(".sorry").fadeIn();
    } else if (question1 === "yes" && question2 === "no" && question3 === "no") {
      $(".php").fadeIn();
    } else if (question1 === "yes" && question2 === "no" && question3 === "yes" && question4 === "no") {
      $(".ruby").fadeIn();
    } else if (question1 === "yes" && question2 === "no" && question3 === "yes" && question4 === "yes") {
      $(".java").fadeIn();
    } else if (question1 === "yes" && question2 === "yes" && question5 === "yes") {
      $(".csharp").fadeIn();
    }
  });
});


//here is a comment
