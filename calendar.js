const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

const calendar = document.getElementById("calendar");
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let selectedDate = null;

function generateCalendar(month, year) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const today = new Date();

  const monthYear = document.createElement("div");
  monthYear.innerText = months[month] + " " + year;
  calendar.appendChild(monthYear);

  for (let i = 0; i < days.length; i++) {
    const day = document.createElement("div");
    day.innerText = days[i];
    calendar.appendChild(day);
  }

  for (let i = 0; i < firstDay.getDay(); i++) {
    const emptyDay = document.createElement("div");
    calendar.appendChild(emptyDay);
  }

  for (let i = 1; i <= lastDay.getDate(); i++) {
    const day = document.createElement("div");
    day.innerText = i;
    if (year == today.getFullYear() && month == today.getMonth() && i == today.getDate()) {
      day.classList.add("today");
    }
    day.addEventListener("click", () => {
      selectedDate = new Date(year, month, i);
      document.querySelectorAll("#calendar .selected").forEach((item) => {
        item.classList.remove("selected");
      });
      day.classList.add("selected");
      // add or delete daily tasks on selected date
    });
    calendar.appendChild(day);
  }
}

const today = new Date();
generateCalendar(today.getMonth(), today.getFullYear());
