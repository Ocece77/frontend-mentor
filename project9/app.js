const modalBtn = document.getElementById("modal-btn");
const modal = document.querySelector(".modal");

const mailUser = document.getElementById("mail-user");
const subscriptionBtn = document.getElementById("subscription-btn");

const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");
const container = document.querySelector(".container");

subscriptionBtn.addEventListener("click", function() {


  if (!emailInput.checkValidity()) {
    emailError.textContent = "Valid email required";
    emailError.style.display = "block";
  } else {
    emailError.textContent = "";
    emailError.style.display = "none";
  }
   
  if (emailInput.checkValidity()){
    container.classList.add("hide-item")
    modal.classList.remove("hide-item")
    mailUser.textContent = emailInput.value
  }
  

});


modalBtn.addEventListener("click", function() {
  container.classList.remove("hide-item")
  modal.classList.add("hide-item")
});

