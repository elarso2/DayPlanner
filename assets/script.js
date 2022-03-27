//adding in the current date
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

// dynamically updating clock for the current time
function time() {
  var clock = moment();
  $("#currentTime").text(clock.format("h:mm a"));
}

time();
setInterval(time, 1000);

//allowing user to input an event item
// function eventStorage() {}
// var eventInput = "";

//saving the event item to local storage
// var saveBtnEl = $(".saveBtn");
// var eventInput = document.getElementById("task");
// saveBtnEl.on("click", function () {
//   localStorage.setItem("eventInput", input.val());
// });
// function save() {
//   var a = "";
// }

// // console.log(document.querySelectorAll("button").previousSibling);
// function btnSavetoLs() {
//   var btns = document.querySelectorAll("button");
//   for (i of btns) {
//     i.addEventListener("click", save);
//   }
// }

//   var eventInput = document.getElementById("text").value; //.value needs to actually be something?
//   localStorage.setItem("text", eventInput);

// var saveBtnEl = $(".saveBtn");
// saveBtnEl.on("click", save);

//compaing row hour, to the current time collected from moment, to assign a class/style
function timeCompare() {
  var eventColorEl = $("input");
  var trueTime = parseInt(moment().format("h")); //turning the true hour into a number

  eventColorEl.each(function (i) {
    var timeRowCurrent = $(".hour")[i].innerHTML;
    var currentTime = timeRowCurrent.substr(0, 2);
    var timeEl = parseInt(currentTime); //lines 48-50: getting the p input from index, cutting it down to the hour numbers, and turing it into a number
    // console.log("trueTime type: " + typeof trueTime);
    console.log("currentTime: " + parseInt(currentTime));
    //statements to compare the two times and assign a new class.
    if (timeEl === trueTime) {
      eventColorEl[i].setAttribute("class", "col-10 event present");
      console.log("currentTime equals trueTime");
    } else if (timeEl > trueTime) {
      eventColorEl[i].setAttribute("class", "col-10 event future");
      console.log("currentTime > trueTime");
    } else {
      eventColorEl[i].setAttribute("class", "col-10 event past");
      console.log("currentTime < trueTime");
    }
    console.log("trueTime: " + trueTime);
  });
}

timeCompare();
