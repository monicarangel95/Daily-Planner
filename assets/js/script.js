// Global variables are set!
var hours = ["09 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];
var today = moment().format('LL');
var currentHour = moment().format('hA');

// Display the current date onto scheduler
$("#currentDay").text(today);