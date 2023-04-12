const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});



const button_individual = document.getElementById("individual-q1-btn");
const first_question = document.getElementById("question");
const individual_ques_box = document.getElementById("individual-ques-box");
const ques1 = document.getElementById("ques1");
const individual_buttons = document.getElementById("individual-buttons");

button_individual.addEventListener("click", function(){
  first_question.classList.add("hidden");
  individual_ques_box.classList.remove("hidden");
  ques1.classList.toggle("hidden");
  individual_buttons.classList.remove("hidden");
})


const more_options_btn = document.querySelectorAll(".more-options-btn");
const more_btn = document.getElementById("more-btn");

    more_btn.addEventListener("click", function(){
    more_btn.classList.add("hidden");
    more_options_btn.forEach(button => {
    button.classList.toggle("hidden");
  })
})

const gender_question_button = document.querySelectorAll(".gender_ques_btn");
const ques2 = document.getElementById("ques2");
const select = document.getElementById("age");

gender_question_button.forEach(button => {
  button.addEventListener("click", function(){
    ques2.classList.remove("hidden");
    ques1.classList.add("hidden");
    more_btn.classList.add("hidden");
    select.classList.remove("hidden");
    gender_question_button.forEach(button => {
      button.classList.add("hidden");
    })
    
  })
})

for (let i = 13; i <= 99; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.text = i;
  select.appendChild(option);
}

const ques3 = document.getElementById("ques3");
const identify_buttons = document.getElementById("identify-buttons");
const more_identify_btn = document.getElementById("more-identify-btn");
const more_identify_options_btn = document.querySelectorAll(".more-identify-options-btn");

select.addEventListener("change", function(){
  ques2.classList.add("hidden");
  select.classList.add("hidden");
  ques3.classList.remove("hidden");
  identify_buttons.classList.remove("hidden");
})

more_identify_btn.addEventListener("click", function(){
more_identify_btn.classList.add("hidden");
more_identify_options_btn.forEach(button => {
button.classList.remove("hidden");
})
})

const identify_ques_btn = document.querySelectorAll(".identify_ques_btn");
// identify_ques_btn.forEach(button => {
//   button.addEventListener("click", function(){
//     more_identify_btn.classList.toggle("hidden");
//     ques3.classList.add("hidden");
//     identify_ques_btn.forEach(button => {
//       button.classList.add("hidden");
//     })
    
//   })
// })

const lgbtq_ques = document.getElementById("lgbtq-ques");
const lgbtq_buttons = document.querySelectorAll(".lgbtq-buttons");
const lgbtq_choice = document.getElementById("lgbtq-choice");




lgbtq_buttons.forEach(button => {
  button.addEventListener("click", function(){
    ques3.classList.toggle("hidden");
    more_identify_btn.classList.toggle("hidden");
    identify_buttons.classList.add("hidden");
    lgbtq_ques.classList.remove("hidden");
    lgbtq_choice.classList.remove("hidden");
  })
})

const lgbtq_ques_btn = document.querySelectorAll(".lgbtq_ques_btn");
const relationship_choice = document.getElementById("relationship-choice");
const relationship_ques = document.getElementById("relationship-ques");

lgbtq_ques_btn.forEach(button => {
  button.addEventListener("click", function(){
    relationship_ques.classList.remove("hidden");
    relationship_choice.classList.remove("hidden");
    lgbtq_ques.classList.add("hidden");
    lgbtq_choice.classList.add("hidden");
  })
})

const straight = document.getElementById("straight");
straight.addEventListener("click", function(){
  relationship_ques.classList.remove("hidden");
  relationship_choice.classList.remove("hidden");
  ques3.classList.toggle("hidden");
    more_identify_btn.classList.toggle("hidden");
    identify_buttons.classList.add("hidden");
})


const reason_ques = document.getElementById("reason-ques");
const options = document.getElementById("options");
const relationship_ques_btn = document.querySelectorAll(".relationship_ques_btn");
relationship_ques_btn.forEach(button => {
  button.addEventListener("click", function(){
    relationship_ques.classList.add("hidden");
    relationship_choice.classList.add("hidden");
    reason_ques.classList.remove("hidden");
    options.classList.remove("hidden");
  })
})


const checkbox_btn = document.getElementById("checkbox-btn");
const duration_choice = document.getElementById("duration-choice");
const duration_ques = document.getElementById("duration-ques");


checkbox_btn.addEventListener('click', () => {
  const checkboxes = document.querySelectorAll(".options-check");
  let isChecked = false;


  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      isChecked = true;
    }
});

if (isChecked) {
  // proceed to next question
  
    reason_ques.classList.add("hidden");
    options.classList.add("hidden");
    duration_choice.classList.remove("hidden");
    duration_ques.classList.remove("hidden");
    
  

} else {
  alert('Please select at least one option');
}
});





// checkbox_btn.addEventListener("click", function(){
//   reason_ques.classList.add("hidden");
//   options.classList.add("hidden");
//   duration_choice.classList.remove("hidden");
//   duration_ques.classList.remove("hidden");
  
// })

const duration_ques_btn = document.querySelectorAll(".duration_ques_btn");
const goals_ques = document.getElementById("goals-ques");
const goals_options = document.getElementById("goals-options");


duration_ques_btn.forEach(button => {
  button.addEventListener("click", function(){
    duration_choice.classList.add("hidden");
    duration_ques.classList.add("hidden");
    goals_ques.classList.remove("hidden");
  goals_options.classList.remove("hidden");
  })
})

const goals_button = document.getElementById("goals-btn");
const method_ques = document.getElementById("method-ques");
const method_options = document.getElementById("method-options");


goals_button.addEventListener('click', () => {
  const checkboxes = document.querySelectorAll(".goals-check");
  let isChecked = false;


  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      isChecked = true;
    }
});

if (isChecked) {
  // proceed to next question
  method_ques.classList.toggle("hidden");
    method_options.classList.toggle("hidden");
    goals_ques.classList.add("hidden");
    goals_options.classList.add("hidden");
    
  

} else {
  alert('Please select at least one option');
}
});

// goals_button.addEventListener("click", function(){
//   method_ques.classList.toggle("hidden");
//   method_options.classList.toggle("hidden");
//   goals_ques.classList.add("hidden");
//   goals_options.classList.add("hidden");
// })

const method_button = document.getElementById("method-btn");
const therapy_choice = document.getElementById("therapy-choice");
const therapy_ques = document.getElementById("therapy-ques");

method_button.addEventListener('click', () => {
  const checkboxes = document.querySelectorAll(".method-check");
  let isChecked = false;


  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      isChecked = true;
    }
});

if (isChecked) {
  // proceed to next question
  method_ques.classList.toggle("hidden");
  method_options.classList.toggle("hidden");
  therapy_ques.classList.toggle("hidden");
  therapy_choice.classList.toggle("hidden");
    
  

} else {
  alert('Please select at least one option');
}
});


// method_button.addEventListener("click", function(){
//   method_ques.classList.toggle("hidden");
//   method_options.classList.toggle("hidden");
//   therapy_ques.classList.toggle("hidden");
//   therapy_choice.classList.toggle("hidden");
// })

const therapy_ques_btn = document.querySelectorAll(".therapy_ques_btn");
const mental_choice = document.getElementById("mental-choice");
const mental_ques = document.getElementById("mental-ques");

therapy_ques_btn.forEach(button => {
  button.addEventListener("click", function(){
    therapy_ques.classList.toggle("hidden");
  therapy_choice.classList.toggle("hidden");
  mental_ques.classList.toggle("hidden");
  mental_choice.classList.toggle("hidden");
  })
})

const symptoms_choice = document.getElementById("symptoms-choice");
const symptoms_ques = document.getElementById("symptoms-ques");

const mental_ques_btn = document.querySelectorAll(".mental_ques_btn");
mental_ques_btn.forEach(button => {
  button.addEventListener("click", function(){
    mental_ques.classList.toggle("hidden");
  mental_choice.classList.toggle("hidden");
  symptoms_ques.classList.toggle("hidden");
  symptoms_choice.classList.toggle("hidden");
  })
})

  const symptoms_ques_btn = document.querySelectorAll(".symptoms_ques_btn");
  const severity_choice = document.getElementById("severity-choice");
  const severity_ques = document.getElementById("severity-ques");
  
  symptoms_ques_btn.forEach(button => {
    button.addEventListener("click", function(){
      symptoms_ques.classList.toggle("hidden");
    symptoms_choice.classList.toggle("hidden");
    severity_ques.classList.toggle("hidden");
    severity_choice.classList.toggle("hidden");
    })
  })

  const severity_ques_btn = document.querySelectorAll(".severity_ques_btn");
  const treatment_choice = document.getElementById("treatment-choice");
  const treatment_ques = document.getElementById("treatment-ques");

  severity_ques_btn.forEach(button => {
    button.addEventListener("click", function(){
      severity_ques.classList.toggle("hidden");
    severity_choice.classList.toggle("hidden");
    treatment_ques.classList.toggle("hidden");
    treatment_choice.classList.toggle("hidden");
    })
  })

  const treatment_ques_btn = document.querySelectorAll(".treatment_ques_btn");
  const motivate_choice = document.getElementById("motivate-choice");
  const motivate_ques = document.getElementById("motivate-ques");

  treatment_ques_btn.forEach(button => {
    button.addEventListener("click", function(){
      treatment_ques.classList.toggle("hidden");
      treatment_choice.classList.toggle("hidden");
      motivate_ques.classList.toggle("hidden");
      motivate_choice.classList.toggle("hidden");
      
    })
  })

const motivate_ques_btn = document.querySelectorAll(".motivate_ques_btn");
const match = document.getElementById("match");
const match_choice = document.getElementById("match-choice");
motivate_ques_btn.forEach(button => {
  button.addEventListener("click", function(){
    motivate_ques.classList.toggle("hidden");
    motivate_choice.classList.toggle("hidden");
    match.classList.toggle("hidden");
    match_choice.classList.toggle("hidden");
    
  })
})

const match_btn = document.getElementById("match-btn");
match_btn.addEventListener("click", () => {
  // match.classList.toggle("hidden");
  // match_btn.classList.toggle("hidden");
  // window.close('consult.html');
  // window.open('signin.html');
    window.location.href = "signin.html";
})


