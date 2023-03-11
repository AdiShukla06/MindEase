const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

const form = document.querySelector('#signup-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = form.elements['name'].value;
  const email = form.elements['email'].value;
  const password = form.elements['password'].value;
  const confirmPassword = form.elements['confirm-password'].value;
  const birthdate = form.elements['birthdate'].value;
  const gender = form.elements['gender'].value;
  // do something with the form data, such as sending it to a server
  console.log(name, email, password, confirmPassword, birthdate, gender);
});