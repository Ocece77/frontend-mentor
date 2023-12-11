const btn = document.getElementById("btn")
const url = "https://api.adviceslip.com/advice"
const number = document.getElementById("number")
const adviceText = document.getElementById("advice-text")


const animation = () => {
  number.classList.add("animation")
  adviceText.classList.add("animation")

  setTimeout(()=>{
    number.classList.remove("animation")
    adviceText.classList.remove("animation")
  }, 700 )
}

btn.addEventListener("click" , ()=>{
  fetch(url)
  .then(resp => resp.json())
  .then(data =>{
       animation()
       number.textContent = `advice #${data.slip["id"]}`
       adviceText.textContent = `\"${data.slip["advice"]}\"`
  })

})


