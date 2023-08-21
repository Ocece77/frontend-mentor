/*List of Project */
const project= [

  {
    id : 1,
    img : "./project1/images/image-qr-code.png",
    url : "./project1/index.html",
    title: "QR-CODE",
   
  },

  {
    id : 2,
    img : "./project2/images/illustration-hero.svg",
    url : "./project2/index.html",
    title: "Order Summary",
   
  },

]


const containterList = document.querySelector(".containter-list")

window.addEventListener('DOMContentLoaded',() => {
  displayProject(project);
});

const displayProject = (project) =>{

/*map over the array and display an li */
  let display = project.map(item =>{

    return `<li>
    <img src=${item.img} alt="qr-code" id=${item.id}>
    <h4 class="container-list_title">${item.title}</h4>
    <a href=${item.url} target="_blank" rel="noopener noreferrer">View the project</a>
  </li>`
  }).join("")

/* add the li in the inner html */
  containterList.innerHTML= display
}
