import Card from './component/Card'
import Header from './component/Header'

function App() {

  return (
    <>
    <div className='w-full h-full lg:py-28 py-20 px-10 '>
      <div className='flex flex-col justify-center items-center space-y-10 md:space-y-20'>
        <Header/>
        <Card/>
      </div>
    </div>

     
  {/* <style>
    .attribution { font-size: 11px; text-align: center; }
    .attribution a { color: hsl(228, 45%, 44%); }
  </style> 


  
  <div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div>
  </div>*/}

    </>
  )
}

export default App
