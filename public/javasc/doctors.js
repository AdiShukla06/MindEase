const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});



// function showAvailability(therapist) {
//   // get the modal
//   var modal1 = document.getElementById("availabilityModal");
//   // get the close button
//   var closeBtn1 = modal1.getElementsByClassName("close")[0];
//   // get the therapist name span element
//   var therapistName = document.getElementById("therapistName");

//   // set the therapist name
//   therapistName.innerHTML = therapist;

//   // show the modal
//   modal1.style.display = "block";

//   // close the modal when close button is clicked
//   closeBtn1.onclick = function() {
//     modal1.style.display = "none";
//   }

//   // close the modal when user clicks outside of modal
//   window.onclick = function(event) {
//     if (event.target == modal1) {
//       modal1.style.display = "none";
//     }
//   }

//   // var modal1 = document.getElementById("availabilityModal");




// // Get the modal
// var modal2 = document.getElementById("book-appointment-modal");

// // Get the button that opens the modal
// var btn = document.getElementsByClassName("book-btn");

// // Get the <span> element that closes the modal
// var span = modal2.getElementsByClassName("close")[0];

// var therapistName2 = document.getElementById("therapistName2");

//   // set the therapist name
//   therapistName2.innerHTML = therapist;


// for (var i = 0; i < btn.length; i++) {
//   btn[i].addEventListener("click", function() {
//     modal2.style.display = "block";
//     modal1.style.display = "none";
//   });
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal2.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal2) {
//     modal2.style.display = "none";
//   }
//   if(event.target == modal1){
//     modal1.style.display = "none";
//   }
// }


// }


// function showAvailability(therapist){
//   const therapistName = document.getElementById("therapistName");

//   therapistName.innerHTML = therapist;


// }



// // Get the dialog element and the button to open it
// const dialog = document.getElementById("appointment-dialog");
// // const openButton = document.getElementById("open-dialog");
// const openButton = document.querySelectorAll(".book-appointment-btn")

// // Get the elements for dates and time slots
// const dateOptions = document.querySelectorAll(".date-option");
// const timeSlots = document.querySelectorAll(".time-slot");

// // Add event listeners for date options
// for (let i = 0; i < dateOptions.length; i++) {
//   dateOptions[i].addEventListener("click", function() {
//     // Remove selected class from all date options
//     for (let j = 0; j < dateOptions.length; j++) {
//       dateOptions[j].classList.remove("selected");
//     }
//     // Add selected class to clicked date option
//     this.classList.add("selected");
//   });
// }

// // Add event listeners for time slots
// for (let i = 0; i < timeSlots.length; i++) {
//   timeSlots[i].addEventListener("click", function() {
//     // Remove selected class from all time slots
//     for (let j = 0; j < timeSlots.length; j++) {
//       timeSlots[j].classList.remove("selected");
//     }
//     // Add selected class to clicked time slot
// this.classList.add("selected");
// });
// }



// // Add event listener for confirm booking button
// const confirmBookingButton = document.querySelector(".confirm-booking button");
// confirmBookingButton.addEventListener("click", function() {
// // Get selected date and time slot
// const selectedDate = document.querySelector(".date-option.selected");
// const selectedTimeSlot = document.querySelector(".time-slot.selected");


// // Check if both date and time slot are selected
// if (selectedDate && selectedTimeSlot) {
// // Get the date and time slot values
// const dateValue = selectedDate ? selectedDate.dataset.date : "";
// const timeValue = selectedTimeSlot ? selectedTimeSlot.textContent : "";
// // Display confirmation message
// alert(`Your appointment for ${dateValue} at ${timeValue} is in process. Redirecting to your Dashboard.`);
// setTimeout(() => {
//   window.location.href = "/dashboard";
// }, 1500);
// } else {
//   alert("Please select a date and time slot.");
//   }
//   });
  
//   // Open and close the dialog box
//   openButton.forEach(function(i){
//     i.addEventListener("click", function(){
//       dialog.style.display = "block";
//       // document.body.classList.add("dull");
//     })
//   })
//   // openButton.addEventListener("click", function() {
//   // dialog.style.display = "block";
//   // });
  
//   const closeButton = document.querySelector(".dialog-close");
//   closeButton.addEventListener("click", function() {
//   dialog.style.display = "none";
//   // document.body.classList.remove("dull");
//   });
  
//   window.addEventListener("click", function(event) {
//   if (event.target === dialog) {
//   dialog.style.display = "none";
//   // document.body.classList.remove("dull");
//   }
//   });


