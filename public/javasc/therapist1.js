const dateSlot = document.querySelectorAll(".dateSlot");
const timeSlot = document.querySelectorAll(".timeSlot");

// Add event listeners for date options
for (let i = 0; i < dateSlot.length; i++) {
  dateSlot[i].addEventListener("click", function() {
    // Remove selected class from all date options
    for (let j = 0; j < dateSlot.length; j++) {
      dateSlot[j].classList.remove("selected");
    }
    // Add selected class to clicked date option
    this.classList.add("selected");
  });
}

// Add event listeners for time slots
for (let i = 0; i < timeSlot.length; i++) {
  timeSlot[i].addEventListener("click", function() {
    // Remove selected class from all time slots
    for (let j = 0; j < timeSlot.length; j++) {
      timeSlot[j].classList.remove("selected");
    }
    // Add selected class to clicked time slot
this.classList.add("selected");
});
}


// Add event listener for confirm booking button
const confirmBookingButton = document.querySelector(".submit");
confirmBookingButton.addEventListener("click", function() {
// Get selected date and time slot
const selectedDate = document.querySelector(".dateSlot.selected");
const selectedTimeSlot = document.querySelector(".timeSlot.selected");


// Check if both date and time slot are selected
if (selectedDate && selectedTimeSlot) {
// Get the date and time slot values
const dateValue = selectedDate ? selectedDate.dataset.date : "";
const timeValue = selectedTimeSlot ? selectedTimeSlot.textContent : "";
// Display confirmation message
alert(`Your appointment for ${dateValue} at ${timeValue} is in process. Redirecting to your Dashboard.`);
setTimeout(() => {
  window.location.href = "/dashboard";
}, 1500);
} else {
  alert("Please select a date and time slot.");
  }
  });


