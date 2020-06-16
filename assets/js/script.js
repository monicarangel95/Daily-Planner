$(document).ready(function () {
    // Here we write a function to build and display current time
    function getCurrentTime() {
        var today = moment().format("MMMM Do YYYY, h:mm:ss a");
        $("#currentDay").text(today);
    } 