"use strict";

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const addTask = function () {
  if (inputBox.value === "") {
    // When nothing is add in the input box
    alert("You must write something");
  } else {
    // When something is added to the input box
    let li = document.createElement("li"); // An element is created and stored in the variable li
    li.innerHTML = inputBox.value; // The created variable's HTML is given the value of the input
    listContainer.appendChild(li); // The variable is then added and displayed inside the id of 'list-container'

    // Now, I am adding the cross icon after each added task
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = ""; // This clears the input box after the addition
  saveTask(); // Saving the added task
};

// When the list container is clicked, first it is determined where the click has been made.
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked"); // If the click is on the li tag, then it will check/uncheck the li.
      saveTask();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove(); // If the click is on the span tag, it will remove its parent element i.e. the li tag
      saveTask();
    }
  },
  false
);

// To save the added tasks to our browser for future use
const saveTask = function () {
  localStorage.setItem("task", listContainer.innerHTML);
};

// To show the task when the browser is given a refresh
const displayTask = function () {
  listContainer.innerHTML = localStorage.getItem("task");
};
displayTask();
