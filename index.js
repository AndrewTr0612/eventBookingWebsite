/*** You will not need this file until Unit 5 ***/
/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button");

// Step 2: Write the callback function
const toggleDarkMode = () => {
    // Write your code 
    document.body.classList.toggle("dark-mode");
    // This section will run whenever the button is clicked
};

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click", toggleDarkMode);

/*** Form Handling [PLACEHOLDER] [ADDED IN UNIT 6] ***/
/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

let count = 3;

// Step 1: Add your query for the submit RSVP button here
let rsvpButton = document.getElementById("rsvp-button");
const addParticipant = (event, person) => {
    // Step 2: Write your code to manipulate the DOM here
    event.preventDefault(); // Prevent default first

    // let name = document.getElementById("full-name").value;
    // let email = document.getElementById("email").value;
    // let guests = document.getElementById("guests").value;

    let newParticipant = document.createElement("p");
      newParticipant.textContent = `🎟️ ${person.name} is coming to the exhibition.`;
    let participantsDiv = document.getElementById("participants");
      participantsDiv.appendChild(newParticipant);


    let rsvpCount = document.getElementById("rsvp-count");
      if (rsvpCount) {
          rsvpCount.remove();  // ✅ Only remove if it exists
      }

    count += parseInt(person.guests, 10) || 0;

    let newCount = document.createElement("p");
      newCount.id = "rsvp-count"
      newCount.textContent = "⭐" + count + " people have RSVP'd to this event!";
    participantsDiv.appendChild(newCount);


};

// Step 3: Add a click event listener to the submit RSVP button here

/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = (event) => {
  let containsErrors = false;

  var rsvpInputs = document.getElementById("rsvp-form").elements;

  // TODO: Loop through all inputs
  for(i = 0; i < rsvpInputs.length; i++)
  {
      let person = rsvpInputs[i];
  // TODO: Inside loop, validate the value of each input
    if ((person.id === "full-name" || person.id === "email") &&
        (person.tagName === "INPUT" || person.tagName === "TEXTAREA")) 
      {
        if (person.value.trim().length < 2) 
        {
        containsErrors = true;
        person.classList.add("error");
        } 
        else 
        {
        person.classList.remove("error");
        }
      }
  }

  const email = document.getElementById("email");
  const emailValue = email.value.trim();

  if (!emailValue.includes("@") || !emailValue.includes(".com")) 
  {
    containsErrors = true;
    email.classList.add("error");
  } 
  else 
  {
    email.classList.remove("error");
  }
  // TODO: If no errors, call addParticipant() and clear fields

  if( containsErrors == false)
  {
      const person = {
      name: rsvpInputs["full-name"].value,
      email: rsvpInputs["email"].value,
      guests: rsvpInputs["guests"].value
    };

    addParticipant(event, person);
    toggleModal(person);
    for (let i = 0; i < rsvpInputs.length; i++) {
      let person = rsvpInputs[i];

      if (person.tagName === "INPUT" || person.tagName === "TEXTAREA") {
        person.value = ""; // ✅ Clear the field
      }
    }
  }
};

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
rsvpButton.addEventListener("click", validateForm);

/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/
/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/

let motionEnabled = true;

const reduceMotionButton = document.getElementById('reduce-motion-toggle');

function reduceMotion() {
    motionEnabled = !motionEnabled;

    // Toggle button text
    reduceMotionButton.textContent = motionEnabled ? 'Reduce Motion' : 'Enable Motion';

    // Toggle class for styling
    reduceMotionButton.classList.toggle('motion-on', motionEnabled);
    reduceMotionButton.classList.toggle('motion-off', !motionEnabled);
}

reduceMotionButton.addEventListener('click', reduceMotion);


intervalId = setInterval(animateImage, 500);

const closeModalBtn = document.getElementById("close-modal-button");

const closeModal = () => {
  document.getElementById("thanks-modal").style.display = "none";
  modalImage.classList.remove("animate");  // remove animation
};


closeModalBtn.addEventListener("click", closeModal);

const toggleModal = (person) => {
  const modal = document.getElementById("thanks-modal");
  const modalContent = document.getElementById("thanks-modal-content");
  modal.style.display = "flex";

  let messageEl = modalContent.querySelector("p");
  if (!messageEl) {
    messageEl = document.createElement("p");
    modalContent.appendChild(messageEl);
  }
  messageEl.textContent = `Thanks for RSVPing, ${person.name}! We can't wait to see you at the event.`;

  // Add animation class to image
  modalImage.classList.add("animate");

  // Auto-close modal after 5 seconds
  setTimeout(() => {
    closeModal();
  }, 5000);
};


// TODO: animation variables and animateImage() function

let rotateFactor = 0;
let modalImage = document.querySelector("#thanks-modal-content img");

function animateImage() {
  rotateFactor = rotateFactor === 0 ? -10 : 0;
  modalImage.style.transform = `rotate(${rotateFactor}deg)`;
}

