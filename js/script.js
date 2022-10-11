'use strict';

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const wrapper = document.querySelector(".testimonial-wrapper") 
const buttons = document.querySelectorAll('.btn-control');


let scrollAmount = 0;
const scrollMax = wrapper.scrollWidth - wrapper.clientWidth;
buttons.forEach(button => {
  button.addEventListener('click', function() {

    console.log(scrollAmount)

    if (this.id === 'prev' && scrollAmount > 0) {
      wrapper.scrollTo({
        top: 0,
        left: Math.max(scrollAmount -= 500),
        behavior: 'smooth'
      });
    } else if(this.id === 'next' && wrapper.scrollLeft !== scrollMax){
      wrapper.scrollTo({
        top: 0,
        left: Math.max(scrollAmount += 500),
        behavior: 'smooth'
      });
    }
  })
});



const radioButtons = document.querySelectorAll('input[name="interest"]');
const inputSpecify = document.getElementById("input-specify");
radioButtons.forEach(button => {
  button.addEventListener('click', function() {
    const interest_error = document.getElementById("interest-error");
    const specify_input = document.getElementById("specify");
    interest_error.classList.remove("select-invalid");
    document.getElementById("specify").value = "";
    specify_input.classList.remove("invalid");
    specify_input.classList.remove("valid");

    if (this.value === 'others') {
      inputSpecify.style.display = "block";
    } else {
      inputSpecify.style.display = "none";      
    }
  })
})




// On Submit Validation
const checkbox = document.getElementById("submit");
checkbox.addEventListener("click", validate, false);
function validate(event) {
  event.preventDefault();

  const interest = document.querySelector('input[name = "interest"]:checked');
  const specify = document.getElementById("specify").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const details = document.getElementById("details").value;

  const specify_trim = specify.replace(/^\s+|\s+$/gm,'');
  const name_trim = name.replace(/^\s+|\s+$/gm,'');
  const details_trim = details.replace(/^\s+|\s+$/gm,'');


  const interest_valid = interest != null ? true : false;
  const specify_valid = specify_trim.length  >= 6 ? true : false;
  const name_valid = /^[A-z ]+$/.test(name_trim);
  const email_valid =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
  const details_valid = details_trim.length >= 10? true : false;

  
  // check lahat ng forms if may laman
  if (interest_valid && name_valid && email_valid && details_valid) {
  const interest_val = document.querySelector('input[name = "interest"]:checked').value;
    
  // if true required specify
    if (interest_val === 'others') {

      // if true specify is required
      if (specify_valid) {
        console.log('form submitted with specify')
      // else throw error
      } else {
        const specify_input = document.getElementById("specify");
        const specify_error = document.getElementById("specify-error");
        specify_input.classList.add("invalid");
        specify_error.innerHTML = "Message must be at least 6 characters";
      }

    // else hindi required specify
    } else {
      console.log('form submitted without specify')
    }

  } else {
    
    if(!interest_valid){
      const interest_error = document.getElementById("interest-error");
      interest_error.classList.add("select-invalid");
      interest_error.innerHTML = "Please select your interest"


    } else {
      const specify_input = document.getElementById("specify");
      const specify_error = document.getElementById("specify-error");
      specify_input.classList.add("invalid");
      specify_error.innerHTML = "Message must be at least 6 characters";
    }    

    if(!name_valid){
      const name_input = document.getElementById("name");
      const name_error = document.getElementById("name-error");
      name_input.classList.add("invalid");
      name_error.innerHTML = "Name must be valid";
    }

    if(!email_valid){
      const email_input = document.getElementById("email");
      const email_error = document.getElementById("email-error");
      email_input.classList.add("invalid");
      email_error.innerHTML = "Email is invalid";
    }

    if(!details_valid){
      const details_input = document.getElementById("details");
      const details_error = document.getElementById("details-error");
      details_input.classList.add("invalid");
      details_error.innerHTML = "Message must be at least 10 characters";
    }

  }
}



// On change Specify
document.getElementById("specify").onchange = function(){
  const specify = document.getElementById("specify").value;
  const specify_trim = specify.replace(/^\s+|\s+$/gm,'');
  const specify_valid = specify_trim.length  >= 6 ? true : false;

  if(specify_valid) {
    const specify_input = document.getElementById("specify");
    const specify_error = document.getElementById("specify-error");
    specify_error.classList.add("d-none");
    specify_input.classList.remove("invalid");
    specify_input.classList.add("valid");
  } else {
    const specify_input = document.getElementById("specify");
    const specify_error = document.getElementById("specify-error");
    specify_input.classList.remove("valid");
    specify_input.classList.add("invalid");
    specify_error.innerHTML = "Message must be at least 6 characters";
  }
};

// On change Name
document.getElementById("name").onchange = function(){
  const name = document.getElementById("name").value;
  const name_trim = name.replace(/^\s+|\s+$/gm,'');
  const name_valid = /^[A-z ]+$/.test(name_trim);

  if(name_valid) {
    const name_input = document.getElementById("name");
    const name_error = document.getElementById("name-error");
    name_error.classList.add("d-none");
    name_input.classList.remove("invalid");
    name_input.classList.add("valid");
  } else {
    const name_input = document.getElementById("name");
    const name_error = document.getElementById("name-error");
    name_input.classList.remove("valid");
    name_input.classList.add("invalid");
    name_error.innerHTML = "Name must be valid";
  }
};

// On change Email
document.getElementById("email").onchange = function(){
  const email = document.getElementById("email").value;
  const email_valid =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
  if(email_valid) {
    const email_input = document.getElementById("email");
    const email_error = document.getElementById("email-error");
    email_error.classList.add("d-none");
    email_input.classList.remove("invalid");
    email_input.classList.add("valid");
  } else {
    const email_input = document.getElementById("email");
    const email_error = document.getElementById("email-error");
    email_input.classList.remove("valid");
    email_input.classList.add("invalid");
    email_error.innerHTML = "Email is invalid";
  }
};

// On change Details
document.getElementById("details").onchange = function(){
  const details = document.getElementById("details").value;
  const details_trim = details.replace(/^\s+|\s+$/gm,'');
  const details_valid = details_trim.length >= 10? true : false;

  if(details_valid) {
    const details_input = document.getElementById("details");
    const details_error = document.getElementById("details-error");
    details_error.classList.add("d-none");
    details_input.classList.remove("invalid");
    details_input.classList.add("valid");
  } else {
    const details_input = document.getElementById("details");
    const details_error = document.getElementById("details-error");
    details_input.classList.remove("valid");
    details_input.classList.add("invalid");
    details_error.innerHTML = "Message must be at least 10 characters";
  }
};







