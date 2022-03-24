//adding in the current date and time
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var time = moment();
$("#currentTime").text(time.format("h:mm a"));

//
