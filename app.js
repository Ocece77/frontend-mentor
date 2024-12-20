

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

  {
    id : 8,
    img : "./project8/design/desktop-design.jpg",
    url : "./project8/index.html",
    title: "Preview card component",
    info: "Crafted a responsive 3-column preview card component project using CSS and HTML. Showcased a sleek design highlighting effective use of layout and styling.",
    lang : "HTML & CSS"
  },

  {
    id : 9,
    img : "./project9/design/desktop-design.jpg",
    url : "./project9/index.html",
    title: "Newsletter sign-up form with success message",
    info: "A web project that implements a newsletter sign-up form in HTML and CSS with a success message for user feedback in JavaScript.",
    lang : "HTML , CSS & Javascript "
  },

  {
    id : 11,
    img : "./project11/design/desktop-design.jpg",
    url : "./project11/index.html",
    title: "Interactive rating component",
    info: "An interactive rating component implementing HTML, Bootstrap, and JavaScript for user-friendly rating selection.",
    lang : "HTML , BOOTSTRAP 5 & Javascript "
  },

  {
    id : 12,
    img : "./project12/design/desktop-design.jpg",
    url : "./project12/index.html",
    title: "Four card feature section",
    info: "Four card feature section provides a visually appealing and concise display of four distinct features, enhancing the presentation of a product or service through HTML and CSS.",
    lang : "HTML , BOOTSTRAP 5 "
  },
{
  id : 13,
  img : "./project13/design/desktop-design.jpg",
  url : "./project13/index.html",
  title: "Advice generator app",
  info: "Advice generator app that generate a new advice everytime the button is clicked ! ",
  lang : "HTML , BOOTSTRAP 5, JS , and API  "
},

{
  id : 15,
  img : "./projet15/src/design/desktop-design.jpg",
  url : "https://projet15.onrender.com",
  title: "News homepage",
  info: "This news homepage was an excellent opportunity to practice my CSS Grid skills. There has been a lots of tricky decisions to make and plenty of learning opportunities ",
  lang : "REACT JS , TAILWIND CSS"
},

{
  id : 16,
  img : "./project16/public/design/desktop-preview.jpg",
  url : "https://frontend-mentor-0wxh.onrender.com",
  title: "Interactive card details form  ",
  info: "This fun project was a cool way to practice the UseEffect and UseState hooks from Reats, while also putting your HTML and CSS skills to the test.",
  lang : "REACT JS , TAILWIND CSS"
},

{
  id : 17,
  img : "./project17/src/assets/design/desktop-design.jpg",
  url : "https://project17-6ehz.onrender.com",
  title: " Interactive pricing component",
  info: "This fun project permit you to use the slider and toggle to see prices for different page view numbers",
  lang : "REACT JS , TAILWIND CSS, SASS"
},
  
{
  id : 19,
  img : "./project19/public/design/desktop-preview.jpg",
  url : "https://project19-liu3.onrender.com",
  title: "Multi-step form",
  info: "This multi step form let the user decided for his own plan for a monthly or yearly subscription",
  lang : "Angular TS , TAILWIND CSS, SASS"
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