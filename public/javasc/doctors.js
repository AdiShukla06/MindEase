const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});



// Add an event listener to all book appointment buttons
let bookAppointmentBtns = document.querySelectorAll('.book-appointment-btn');
bookAppointmentBtns.forEach(btn => {
  btn.addEventListener('click', function(event) {
    // Get the therapist name from the previous sibling element
    let therapistNameElement = event.target.previousElementSibling.querySelector('.therapist-name');
    let therapistName = therapistNameElement ? therapistNameElement.textContent : '';
    console.log(`Booking an appointment with ${therapistName}`);
    // Show the booking modal
    let modal = document.getElementById('booking-modal');
    modal.style.display = "block";
    // Close the modal when the user clicks on the X button or outside the modal
    let closeBtn = modal.querySelector('.close');
    let modalContent = modal.querySelector('.modal-content');
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    closeBtn.addEventListener('click', function() {
      modal.style.display = "none";
    });
    // Handle form submission
let bookingForm = modal.querySelector('form');
bookingForm.addEventListener('submit', function(event) {
event.preventDefault();
// Get the user input from the form
let nameInput = bookingForm.querySelector('#name');
let dateInput = bookingForm.querySelector('#date');
let timeInput = bookingForm.querySelector('#time');
let messageInput = bookingForm.querySelector('#message');
let name = nameInput.value;
let date = dateInput.value;
let time = timeInput.value;
let message = messageInput.value;
// Store the booking information in the database
// ...
// Display a confirmation message to the user
modalContent.innerHTML = `<h2>Thank you for booking an appointment!</h2> <p>You have booked an appointment with ${therapistName} on ${date} at ${time}.</p> <p>Your message to the therapist:</p> <p>${message}</p> <button class="close">Close</button> `;
// Close the modal when the user clicks on the Close button
let closeBtn = modal.querySelector('.close');
closeBtn.addEventListener('click', function() {
modal.style.display = "none";
});
// Clear the form
bookingForm.reset();
});
});
});