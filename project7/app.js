const signBtn = document.querySelector("button");
const closeBtn = document.querySelector(".btn");
const containerSignIn = document.querySelector(".container_sign");

signBtn.addEventListener("click", ()=>{
  containerSignIn.classList.add("show-item")
})


closeBtn.addEventListener("click", ()=>{
  containerSignIn.classList.remove("show-item")
  closeBtn.classList.add("active-btn")
})