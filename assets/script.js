//adding in the current date and time
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var time = moment();
$("#currentTime").text(time.format("h:mm a"));

//allowing user to input an event item
var eventInput = "";

//saving the event item to local storage
var saveBtnEl = $(".saveBtn");
saveBtnEl.on("click", function () {
  localStorage.getItem("eventInput");
});

//grabbing time from row elements, and splitting string to obtain just the hour portion of the HTML text
for (a = 0; a < 10; a++) {
  var timeRowCurrent = $(".hour")[a].innerHTML;
  //   console.log(timeRowCurrent);
  var currentTime = timeRowCurrent.substr(0, 2);
  console.log(currentTime);
  //   var currentTime = [];
  //   currentTime.push(timeRowCurrent);
  //   console.log(currentTime);
}

//compaing hour from above, to the current time collected from moment, to assign a class/style
function timeCompare() {
  var eventColorEl = document.getElementsByClassName("event");
  if (currentTime == moment().format("h")) {
    eventColorEl.className += "present";
  } else if (currentTime > moment().format("h")) {
    eventColorEl.className += "future";
  } else {
    eventColorEl.className += "past";
  }
  console.log("the hour element of moment: " + moment().format("h"));
}
//^^ able to pull moment hour, so problem is with either the comparison, or the adding class
timeCompare();
