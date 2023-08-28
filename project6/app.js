const btn = document.querySelector(".container_content-info-author-share");
const links =document.querySelector(".container_content-info-author-social");

btn.addEventListener("click", ()=>{
   links.classList.toggle("show-links")
})