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
    if (this.value === 'others') {
      inputSpecify.style.display = "block";
    } else {
      inputSpecify.style.display = "none";

      
    }
  })
})




