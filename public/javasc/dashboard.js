const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

const moodTracker = document.getElementById("mood-tracker");
const submit = document.getElementById("submit-btn");
const moodbtn = document.getElementById("moodbtn");
const bookbtn = document.getElementById("bookbtn");
const blogbtn = document.getElementById("blogbtn");



moodbtn.addEventListener("click", function(event){
  event.preventDefault();
  moodTracker.classList.toggle("hidden");
  bookbtn.classList.toggle("hidden")
  blogbtn.classList.toggle("hidden")
  moodbtn.classList.add("hidden");

} )

submit.addEventListener("click", function(){
  moodTracker.classList.toggle("hidden");
  bookbtn.classList.toggle("hidden")
  blogbtn.classList.toggle("hidden")
  moodbtn.classList.remove("hidden");
})

