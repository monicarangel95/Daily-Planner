

// Display current date onto scheduler
$("#currentDay").text(today);

e

//Buttons will save user inputs to local store. Additionally if there is saved inputs, they will display in the textarea.
$(".b9").on("click", function() {
    var entertext = $(".e9").val();
    localStorage.setItem("9:00", entertext);
});
$(".e9").val(localStorage.getItem("9:00"));

$(".b10").on("click", function() {
    var entertext = $(".e10").val();
    localStorage.setItem("10:00", entertext);
});
$(".e10").val(localStorage.getItem("10:00"));

$(".b11").on("click", function() {
    var entertext = $(".e11").val();
    localStorage.setItem("11:00", entertext);
});
$(".e11").val(localStorage.getItem("11:00"));

$(".b12").on("click", function() {
    var entertext = $(".e12").val();
    localStorage.setItem("12:00", entertext);
});
$(".e12").val(localStorage.getItem("12:00"));

$(".b1").on("click", function() {
    var entertext = $(".e1").val();
    localStorage.setItem("1:00", entertext);
});
$(".e1").val(localStorage.getItem("1:00"));

$(".b2").on("click", function() {
    var entertext = $(".e2").val();
    localStorage.setItem("2:00", entertext);
});
$(".e2").val(localStorage.getItem("2:00"));

$(".b3").on("click", function() {
    var entertext = $(".e3").val();
    localStorage.setItem("3:00", entertext);
});
$(".e3").val(localStorage.getItem("3:00"));

$(".b4").on("click", function() {
    var entertext = $(".e4").val();
    localStorage.setItem("4:00", entertext);
});
$(".e4").val(localStorage.getItem("4:00"));

$(".b5").on("click", function() {
    var entertext = $(".e5").val();
    localStorage.setItem("5:00", entertext);
});
$(".e5").val(localStorage.getItem("5:00"));