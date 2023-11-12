const submit = document.getElementById("submit");
const btns = document.querySelectorAll("button")
const resultBox =document.getElementById("result-box")
const feedbackBox =document.getElementById("feedback-box")
const rating = document.getElementById("rating")
let feedback = 0


btns.forEach(btn => {
  btn.addEventListener("click" , (e)=>{
     feedback = btn.textContent

     
     btns.forEach(otherBtn =>{ /*remove the active event when the button isn't the one selected  */
     if (e.currentTarget.textContent == otherBtn.textContent){
      otherBtn.classList.toggle("active")
     } else {
      otherBtn.classList.remove("active")
     }
     })

  });
});


submit.addEventListener("click", ()=>{  /*Display the message with the rating */
  feedbackBox.classList.add("d-none")
  rating.innerText = `You selected ${feedback} out 5`
  resultBox.classList.remove("d-none")
})


