import {useState } from "react";
import RangeInput from "./range-input/RangeInput.jsx";
import checkIcon from "../assets/images/icon-check.svg";


const Card = () =>{

  const [value, setValue] = useState(16)

  const getValue =(child) =>{
    setValue(child)
  }
  
  
  return(
    <>
    <div className="flex justify-center w-full h-full">

      <div className="bg-white rounded-md w-full lg:w-2/6 md:w-2/4 h-1/2 shadow-lg  shadow-grayish-blue-100 flex flex-col gap-10">

     {/**First row  */}
        <div className="flex flex-col gap-5 px-5 md:px-10 pt-7 md:pt-9">

            {/*first row with the price */}
            <div className="flex justify-center md:justify-between items-center gap-10">

                <div >
                  <p className="uppercase text-grayish-blue tracking-widest font-bold text-[11px] md:text-[9px] lg:text-[12px]">{200/(32/value)}k Pageviews</p>
                </div>

               {/*only visible in desktop and tablet devices */}
                <div className="hidden space-x-1 items-center md:flex ">
                  <h1 className="font-bold text-2xl lg:text-3xl text-dark-desaturated-blue">${value}.00</h1>
                  <p className="text-grayish-blue tracking-wide  text-[9px]  lg:text-[11px]"> / month</p>
                </div>
                {/*only visible in  desktop and tablet devices */}
              </div>


              {/*second row with the slider */}
              <div>
                 <RangeInput getValue={getValue} min={0} max={32}  defaultValue={16}/>
              </div>



                {/*only visible in mobile devices */}
                <div className="flex space-x-1 items-center justify-center md:hidden -mt-3">
                    <h1 className="font-bold text-2xl text-dark-desaturated-blue">${value}.00</h1>
                    <p className="text-grayish-blue tracking-wider  text-[10px]"> / month</p>
                  </div>
                {/*only visible in mobile devices */}



              {/*third row with the billing choice */}
              <div className="flex justify-center md:justify-end md:pr-7 items-center font-semibold gap-x-2 md:-mt-3 ">

                <div>
                  <p className="text-[8px] text-gray-400">Monthly Billing</p>
                </div>

              {/*turn on off buttons*/}
                <div>
                 <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer "/>
                    <div className="relative w-7 h-4 hover:bg-soft-cyan peer-focus:outline-none  peer-focus:ring-0 rounded-full  bg-gray-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border after:rounded-full after:h-3 after:w-3 after:transition-all border-strong-cyan peer-checked:bg-strong-cyan"></div>
                  </label> 
                </div>


                <div className="flex items-center gap-x-1.5 ">
                    <div>
                      <p className="text-[8px] text-gray-400">Yearly Billing</p>
                    </div>

                    <div className="flex  bg-light-red bg-opacity-15 rounded-lg  px-1 py-0.5 md:p-0.5 ">
                      <p  className="flex text-[7px] text-light-red "><span className="md:hidden ">-</span>25% <span className="hidden md:block"> &nbsp;discount</span></p>
                    </div>
                </div>

                </div>

           </div>

        <hr className="w-full -mb-5 -mt-3 md:-mt-0 border-gray-100"/>

     {/**Second row */}

       <div className="grid gap-y-5 md:grid-cols-2 px-6 md:pt-5 pb-3 md:pb-9 items-center justify-center ">
            {/* first column with a list  */}
          <div className="flex text-[8px] md:text-[10px] text-gray-400 font-semibold  ">
            <ul className="flex flex-col gap-y-1.5 ">

              <li className="grid grid-cols-6 items-center ">
                <img src={checkIcon} alt="check icon" className="col-span-1" />
                <p className="col-span-5">Unlimited websites</p>
              </li>

              <li className="grid grid-cols-6  items-center">
                <img src={checkIcon} alt="check icon" className="col-span-1" />
                <p className="col-span-5">100% data ownership</p>
              </li>

              <li className="grid grid-cols-6  items-center">
                <img src={checkIcon} alt="check icon" className="col-span-1" />
                <p className="col-span-5">Email reports</p>
              </li>

            </ul>
          </div>


{/*Button for trial */}
          <div className=" flex md:justify-end  ">
            <button disabled={value == 0} 
            className="bg-dark-desaturated-blue text-grayish-blue hover:text-white transition-colors text-[8px] font-bold px-10 h-7 rounded-xl">
              Start my trial</button>
          </div>
          
        </div>
        
     </div>

    </div>
  
    </>
  )
}

export default Card;