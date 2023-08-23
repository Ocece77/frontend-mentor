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
  {
    id : 3,
    img : "./project3/design/active-states.jpg",
    url : "./project3/index.html",
    title: "Results summary component",
   
  },

  {
    id : 4,
    img : "./project4/images/illustration-mockups.svg",
    url : "./project4/index.html",
    title: "Landing home Page",
   
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
    <img src=${item.img} alt=${item.title} id=${item.id}>
    <h4 class="container-list_title">${item.title}</h4>
    <a href=${item.url} target="_blank" rel="noopener noreferrer">View the project</a>
  </li>`
  }).join("")

/* add the li in the inner html */
  containterList.innerHTML= display
}
