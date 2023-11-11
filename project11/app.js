const submit = document.getElementById("submit");
const btns = document.querySelectorAll("button")

btns.forEach(btn => {
  btn.addEventListener("click" , (e)=>{
    let prev = null;
    let curr = e.currentTarget
    let feedback = btn.textContent
    if (curr.textContent == feedback){

    }
     
     console.log(feedback , curr , prev)

  })

});

/*Si la currval , prevval
currval = 1
prevval = currval
si condition{
  currval = action #1
  prevval = #1
}
 */