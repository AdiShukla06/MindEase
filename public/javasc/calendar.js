

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});



// Get the cancel appointment buttons
const cancelBtns = document.querySelectorAll(".cancel-appointment-btn");

// Add a click event listener to each cancel button
cancelBtns.forEach((btn) => {
  btn.addEventListener("click", cancelAppointment);
});

// Function to cancel an appointment
function cancelAppointment(event) {
  const appointment = event.target.parentNode;
  appointment.remove();
}

// Get the view feedback buttons
const viewFeedbackBtns = document.querySelectorAll(".view-feedback-btn");

// Add a click event listener to each view feedback button
viewFeedbackBtns.forEach((btn) => {
  btn.addEventListener("click", viewFeedback);
});

// Function to view feedback for an appointment
function viewFeedback(event) {
  alert("Feedback for this appointment is: Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
}

const apiKey = '6KsUGSq6T-e6rMB8xCOpNA';
const apiSecret = 'OiH7Nss1K3wfNmhIe5eZcgkHzGbOSStj7U7w';


// Add click event listener to each join meeting link
const joinMeetingLinks = document.querySelectorAll('.join-meeting-link');
joinMeetingLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const meetingId = this.getAttribute('data-meeting-id');
    const url = `https://zoom.us/wc/${meetingId}/join?prefer=1&un=`;
    const signature = generateZoomSignature(apiKey, apiSecret, url);
    window.location.href = `${url}&signature=${signature}`;
  });
});

// Generate Zoom signature using API key, secret, and meeting URL
function generateZoomSignature(apiKey, apiSecret, meetingNumber, role) {
  const timestamp = new Date().getTime() - 30000;
  const msg = new TextEncoder().encode(apiKey + meetingNumber + timestamp + role);
  const hash = crypto.createHmac('sha256', apiSecret).update(msg).digest();
  const signature = `${apiKey}.${meetingNumber}.${timestamp}.${role}.${Buffer.from(hash).toString('base64')}`;
  return signature;
}


