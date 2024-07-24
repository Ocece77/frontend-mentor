import colorfulcube from "../assets/images/image-web-3-desktop.jpg"
import gaming from "../assets/images/image-gaming-growth.jpg"
import retro from "../assets/images/image-retro-pcs.jpg"
import laptops from "../assets/images/image-top-laptops.jpg"

const Hero = ()=>{
  return(
    <>
     <div className="flex flex-col gap-7 ">
     {/*first row with the new and picture */}
      <div className="flex flex-col md:flex-row gap-14 md:gap-6">
        {/*The bright future of web 3*/}
        <div className="flex flex-col gap-5 w-full md:w-2/3">
          <div>
            <img src={colorfulcube} alt="image" />
          </div>

          <div className="grid gap-4 md:gap-0 md:grid-cols-2 w-full ">
              <div>
                <h1 className="font-extrabold font-sans text-[3rem] leading-[3rem] ">The Bright Future of Web 3.0?</h1>
              </div>
            
              <div className="flex flex-col gap-6">
                <p className="text-dark-grayish-blue text-opacity-70 text-sm w-full"> 
                 We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                  But is it really fulfilling its promise?
                </p>
                <button className="uppercase bg-soft-red w-fit px-5 py-3 font-extrabold tracking-[.2rem] text-[.8rem] hover:bg-very-dark-blue hover:text-off-white transition-all">Read more</button>
              </div>
          </div>
         </div>

          {/*New list colonne*/}
          <div className="bg-very-dark-blue text-white h-fit p-6 w-full md:w-1/3">
            <div>
               <h1 className="text-soft-orange text-5xl font-bold pb-5 ">New</h1>
            </div>

            <div>
              <ul className="flex flex-col gap-7">
                <li  className="border-b border-off-white pb-5 border-opacity-40">
                 <strong className="hover:text-soft-orange transition-all">Hydrogen VS Electric Cars</strong>
                 <p className="text-sm text-grayish-blue text-opacity-60">Will hydrogen-fueled cars ever catch up to EVs?</p>
                </li>

                <li className="border-b border-off-white  pb-5 border-opacity-40">
                <strong className="hover:text-soft-orange transition-all">The Downsides of AI Artistry</strong>
                <p className="text-sm text-grayish-blue text-opacity-60"> What are the possible adverse effects of on-demand AI image generation?</p>
                </li>

                <li >
                  <strong className="hover:text-soft-orange transition-all">Is VC Funding Drying Up?</strong>
                  <p className="text-sm text-grayish-blue text-opacity-60">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </li>
              </ul>
            </div>
            

          </div>

      </div>
        {/*second row the list */}
        <div>
          <div>
            <ul className="grid md:grid-cols-3 gap-6 lg:gap-0">
              <li className="flex gap-4 w-fit">
                  <img src={retro} alt="retro" className="w-24" />  
                  <div className="flex flex-col ">
                    <h1 className="text-soft-red text-3xl font-bold font-sans">01</h1>
                    <strong className="text-very-dark-blue hover:text-soft-red transition-all">Reviving Retro PCs</strong>
                    <p className="text-dark-grayish-blue text-opacity-80 text-sm">What happens when old PCs are given modern upgrades?</p>
                  </div>    
              </li>

              <li className="flex gap-4 w-fit">
                  <img src={laptops} alt="laptops" className="w-24" />     
                  <div className="flex flex-col ">
                    <h1  className="text-soft-red text-3xl font-bold font-sans">02</h1>
                    <strong className="text-very-dark-blue hover:text-soft-red transition-all">Top 10 Laptops of 2022</strong>
                      <p className="text-dark-grayish-blue text-opacity-80 text-sm">Our best picks for various needs and budgets.</p>
                  </div>
              </li>

              <li className="flex gap-4 w-fit ">
                <img src={gaming} alt="gaming" className="w-24" />
                <div className="flex flex-col ">
                  <h1  className="text-soft-red text-3xl font-bold font-sans">03</h1>
                  <strong className="text-very-dark-blue hover:text-soft-red transition-all">The Growth of Gaming</strong>
                  <p className="text-dark-grayish-blue text-opacity-80 text-sm">How the pandemic has sparked fresh opportunities.</p>
                </div>

              </li>
            </ul>
          </div>
          
        </div>
     </div>
    </>
  )

  }
  
  export default Hero

