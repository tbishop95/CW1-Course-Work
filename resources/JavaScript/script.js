/*JOB APPLICATION PAGE*/

  /* When page is loaded  */
if(document.readyState === "complete") {
  setEvents();
  /* TEMPORARY FOR DEMONSTRATION PURPOSES ONLY */
  tempDemo();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    setEvents();
    /* TEMPORARY FOR DEMONSTRATION PURPOSES ONLY */
    tempDemo();
  }, false);
}

/* Functions */
function setEvents () {
  let questions = document.getElementsByClassName('application__question-container--text');
  for (let i = 0; i <= questions.length - 1; i++) {
    let questionsChildren = questions[i].children;
    let labelItem = questionsChildren[0];
    let questionItem = questionsChildren[1];
    questionItem.addEventListener("focus", function(){labelClass(labelItem, questionItem, 'focus')});
    questionItem.addEventListener("blur", function(){labelClass(labelItem, questionItem, 'blur')});
  }
}

function labelClass (label, question, type) {
  if(type == 'blur') {
    if (question.value !== '') {
      label.className += ' application__label-text--up';  
    } else {
      label.className = 'application__label-text';
    }
  } else if (type == 'focus') {
    if (label.className !== 'application__label-text application__label-text--up') {
      label.className += ' application__label-text--up';
    }         
  }
}

function tempDemo () {
  /* Temporary script to make the next button move you to section 2 and show the progress bar. */
  let continueButton = document.getElementById('continue-sec2');
  continueButton.addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById('section-2').className = 'hide-questions';
    document.getElementById('progress').className += ' application__controls--on';
    document.getElementById('progress').scrollIntoView('smooth');
continueButton.style.display = 'none';
  });
   /* Temporary script to make the next button move you to section 3 and hide the old progress bar then show the new one. */
  let nextButton = document.getElementById('continue-sec3');
  nextButton.addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById('section-3').className = 'hide-questions';
    document.getElementById('progress').className = 'application__controls';
    document.getElementById('progress2').className += ' application__controls--on';
    document.getElementById('progress2').scrollIntoView('smooth');
    nextButton.style.display = 'none';
  });
  let chevron = document.getElementById('chevron');
  /* Change the chevron and show the message */
  chevron.addEventListener("click", function(event){
    let chevronIcon = document.getElementById('path').getAttribute('d');
    if (chevronIcon == "M8.398 5.75q0 0.102-0.078 0.18l-3.641 3.641q-0.078 0.078-0.18 0.078t-0.18-0.078l-3.641-3.641q-0.078-0.078-0.078-0.18t0.078-0.18l0.391-0.391q0.078-0.078 0.18-0.078t0.18 0.078l3.070 3.070 3.070-3.070q0.078-0.078 0.18-0.078t0.18 0.078l0.391 0.391q0.078 0.078 0.078 0.18z") {
 document.getElementById('help').className = 'application__help-message application__help-message--on';     document.getElementById('path').setAttribute('d', "M8.398 9.25q0 0.102-0.078 0.18l-0.391 0.391q-0.078 0.078-0.18 0.078t-0.18-0.078l-3.070-3.070-3.070 3.070q-0.078 0.078-0.18 0.078t-0.18-0.078l-0.391-0.391q-0.078-0.078-0.078-0.18t0.078-0.18l3.641-3.641q0.078-0.078 0.18-0.078t0.18 0.078l3.641 3.641q0.078 0.078 0.078 0.18z");
    } else {
  document.getElementById('help').className = 'application__help-message application__help-message--off';    document.getElementById('path').setAttribute('d', "M8.398 5.75q0 0.102-0.078 0.18l-3.641 3.641q-0.078 0.078-0.18 0.078t-0.18-0.078l-3.641-3.641q-0.078-0.078-0.078-0.18t0.078-0.18l0.391-0.391q0.078-0.078 0.18-0.078t0.18 0.078l3.070 3.070 3.070-3.070q0.078-0.078 0.18-0.078t0.18 0.078l0.391 0.391q0.078 0.078 0.078 0.18z");
    }
});
}

/*HOMEPAGE SLIDER*/
    let sliderImages = document.querySelectorAll(".slide"),
        arrowLeft = document.querySelector("#arrow-left"),
        arrowRight = document.querySelector("#arrow-right"),
        current = 0;

    // Clear all images
    function reset() {
        for (let i = 0; i < sliderImages.length; i++) {
            sliderImages[i].style.display = "none";
        }
    }

    // Init slider
    function startSlide() {
        reset();
        sliderImages[0].style.display = "block";
    }

    // Show prev
    function slideLeft() {
        reset();
        sliderImages[current - 1].style.display = "block";
        current--;
    }

    // Show next
    function slideRight() {
        reset();
        sliderImages[current + 1].style.display = "block";
        current++;
    }

    // Left arrow click
    arrowLeft.addEventListener("click", function() {
        if (current === 0) {
            current = sliderImages.length;
        }
        slideLeft();
    });

    // Right arrow click
    arrowRight.addEventListener("click", function() {
        if (current === sliderImages.length - 1) {
            current = -1;
        }
        slideRight();
    });

    startSlide();

    /*MODALS*/
       // Get the modal
    var modal = document.getElementsByClassName('modal');

    // Get the button that opens the modal
    var btn = document.getElementsByClassName("myBtn");


    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close");

    // When the user clicks the button, open the modal 
    btn[0].onclick = function() {
        modal[0].style.display = "block";
    }

    btn[1].onclick = function() {
        modal[1].style.display = "block";
    }

    btn[2].onclick = function() {
        modal[2].style.display = "block";
    }

    btn[3].onclick = function() {
        modal[3].style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span[0].onclick = function() {
        modal[0].style.display = "none";
    }

    span[1].onclick = function() {
        modal[1].style.display = "none";
    }

    span[2].onclick = function() {
        modal[2].style.display = "none";
    }

    span[3].onclick = function() {
        modal[3].style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
