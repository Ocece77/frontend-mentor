

/*List of Project */
const projects= [

  {
    id : 1,
    img : "project1/design/desktop-preview.jpg",
    url : "./project1/index.html",
    title: "QR-CODE",
    info: "For my first project, I had to make a QR-Code card , it's a visually appealing card is designed using HTML and CSS to display a QR code along with relevant information. This card can serve various purposes, such as sharing a website link, contact information, or any other data that can be encoded in a QR code. This was so great for me because it help me to pratice my flexbox",
    lang : "HTML & CSS"
  },

  {
    id : 2,
    img : "./project2/design/desktop-preview.jpg",
    url : "./project2/index.html",
    title: "Order Summary",
    info: "In this second project named \"Order Summary\", I developed an interactive interface to display an order summary using HTML and CSS. This project not only allowed me to create a practical feature but also served as a valuable opportunity to enhance my CSS skills.",
    lang : "HTML & CSS"
   
  },
  {
    id : 3,
    img : "./project3/design/desktop-preview.jpg",
    url : "./project3/index.html",
    title: "Results summary component",
    info: "\"Results Summary Component\" mini project, an interactive and visually appealing summary component is designed using HTML and CSS. This component is intended to display summarized information in a user-friendly manner, making it suitable for various web applications and websites.",
    lang : "HTML & CSS"
  },

  {
    id : 4,
    img : "./project4/design/desktop-preview.jpg",
    url : "./project4/index.html",
    title: "Landing home Page",
    info: "In the \"Huddle Landing Page\" mini project, a captivating landing page is developed using HTML and CSS, featuring a single, impactful introductory section. This section is designed to immediately engage visitors and provide them with essential information about the website's purpose or content.",
    lang : "HTML & CSS"
   
  },

    {
    id : 5,
    img : "./project5/design/desktop-design.jpg",
    url : "./project5/index.html",
    title: "FAQ Accordion Card",
    info: "Explore information effortlessly with the \'FAQ Accordion Card\' project, skillfully crafted using JavaScript, CSS, and HTML for an interactive and organized user experience.",
    lang : "HTML , CSS & Javascript"
   
  },
  {
    id : 6,
    img : "./project6/design/desktop-active-state.jpg",
    url : "./project6/index.html",
    title: "Article preview component",
    info: "Explore the \"Article Preview Component\" project crafted with HTML, CSS, and JavaScript for an interactive way to preview articles in a sleek and user-friendly design.",
    lang : "HTML , CSS & Javascript"
   
  },
  {
    id : 7,
    img : "./project7/design/desktop-design.jpg",
    url : "./project7/index.html",
    title: "Single price grid component",
    info: "Created a Single Price Grid Component using HTML and CSS, demonstrating responsive design and layout",
    lang : "HTML , CSS & Javascript "
  },


]

// set starting item

const contentImg = document.getElementById("content-img")
const contentName = document.getElementById("content-name");
const contentInfo = document.getElementById("content-info");

const img = document.getElementById("img");
const alt =document.getElementById("img");
const link = document.querySelectorAll(".link");
const title = document.getElementById("title");
const info = document.getElementById("info")
const lang = document.getElementById("lang")

const btnUp = document.querySelector(".up");
const btnDown = document.querySelector(".down");


let currItem =0; 

/* Set the value for each project  */
const showProject = (project) => {

  const item = projects[currItem];

  img.src = item.img;
  img.alt = item.title;

 
link.forEach(link =>{
  link.href = item.url
})

  lang.textContent = item.lang;
  title.textContent = item.title;
  info.textContent= item.info;
}

/* initial page */
window.addEventListener("DOMContentLoaded",()=>{
  showProject(currItem);
})

/* Button to go up  */

btnUp.addEventListener("click", ()=>{
  currItem++;
  if( currItem > projects.length -1){
    currItem = 0;
  }
  showProject(currItem);
  animation()

})


/* Button to go down  */
btnDown.addEventListener("click", ()=>{
  currItem--;
  if( currItem < 0){
    currItem = projects.length -1;
  }
  showProject(currItem);
  animation()

})


/*Set animation for each project */

function animation(){
  contentName.classList.add("animation1")
  contentInfo.classList.add("animation2")
  contentImg.classList.add("fadein")


  setTimeout(()=> {
    contentName.classList.remove("animation1")
    contentInfo.classList.remove("animation2")
    contentImg.classList.remove("fadein")
   },700)
}