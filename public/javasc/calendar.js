

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

// const ZoomMtg = window.ZoomMtg;
// ZoomMtg.setZoomJSLib('https://source.zoom.us/1.9.0/lib', '/av');
// ZoomMtg.preLoadWasm();
// ZoomMtg.prepareJssdk();

// const apiKey = '6KsUGSq6T-e6rMB8xCOpNA';
// const apiSecret = 'OiH7Nss1K3wfNmhIe5eZcgkHzGbOSStj7U7w';

// const meetConfig = {
//   apiKey,
//   apiSecret,
//   userName: 'Aditya Shukla',
//   userEmail: 'aditya.vishwabharati@gmail.com',
//   meetingNumber: '460 037 1485',
//   leaveUrl: 'https://www.google.co.in/',
//   role: 0
// };

// const signature = ZoomMtg.generateSignature({
//   meetingNumber: meetConfig.meetingNumber,
//   apiKey: meetConfig.apiKey,
//   apiSecret: meetConfig.apiSecret,
//   role: meetConfig.role,
//   success: function(res){
//     console.log(res.result);
//   }
// });


// ZoomMtg.init({
//   leaveUrl: meetConfig.leaveUrl,
//   isSupportAV: true,
//   success: function () {
//     ZoomMtg.join({
//       signature: signature,
//       meetingNumber: meetConfig.meetingNumber,
//       userName: meetConfig.userName,
//       apiKey: meetConfig.apiKey,
//       userEmail: meetConfig.userEmail,
//       passWord: '1234',
//       success: function(res){
//         console.log('join meeting success');
//       },
//       error: function(res) {
//         console.log(res);
//       }
//     });
//   },
//   error: function(res) {
//     console.log(res);
//   }
// });

// function startMeeting() {
//   ZoomMtg.init({
//   leaveUrl: meetConfig.leaveUrl,
//   isSupportAV: true,
//   success: function () {
//   ZoomMtg.join({
//   signature: signature,
//   meetingNumber: meetConfig.meetingNumber,
//   userName: meetConfig.userName,
//   apiKey: meetConfig.apiKey,
//   userEmail: meetConfig.userEmail,
//   passWord: '1234',
//   success: function(res){
//   console.log('join meeting success');
//   },
//   error: function(res) {
//   console.log(res);
//   }
//   });
//   },
//   error: function(res) {
//   console.log(res);
//   }
//   });
//   }



