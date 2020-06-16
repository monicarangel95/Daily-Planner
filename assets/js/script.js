$(document).ready(function () {
    // Here we write a function to build and display current time
    function getCurrentTime() {
        var today = moment().format("MMMM Do YYYY, h:mm:ss a");
        $("#currentDay").text(today);
    }
    getCurrentTime();
    // function to compare hours
    function compareHour() {
        var hourCurrent = moment().format("H");
        console.log(hourCurrent);
        $(".description").each(function () {
            var hourSlot = parseInt($(this).attr("id"));
            if (hourSlot < hourNow) {
                $(this).addClass("past");
            } else if (hourSlot === hourCurrent) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }
    compareHour();