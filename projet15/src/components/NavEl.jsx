import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/images/logo.svg"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import {  useRef, useState } from "react";

const NavEl = () => {

  const [open , setOpen ] = useState(null)
  const sideNav = useRef(null)
  const handleAnimation = ()=>{
    sideNav.current.classList.add("animate-slideOut")
    setTimeout(()=>{
      setOpen(false)
      sideNav.current.classList.remove("animate-slideOut");
    },600)

  }
  return(
  <>
    <nav className="flex justify-between pb-10">
    {/* logo */}
      <div>
        <img src={logo} alt="logo" className="w-12" />
      </div>

     {/* navigation element*/}
      <div className={`${open ? "":"hidden"} z-20 flex flex-row-reverse absolute top-0 bottom-0 right-0 left-0 bg-dark-grayish-blue bg-opacity-20 w-full h-full `}>
        <div ref={sideNav} className={`${open ? "animate-slideIn" : ''}  bg-white w-5/6 md:w-1/3  `}>
          <div className="flex justify-end w-full px-3 py-5">
            <FontAwesomeIcon icon={faXmark} size='2xl' className="hover:rotate-90 hover:text-soft-orange transition-all duration-500" onClick={handleAnimation}/>
          </div>
          <div>
            <ul className="flex flex-col gap-2 p-5 text-very-dark-blue">
              <li className="hover:text-soft-orange transition-all">Home</li>
              <li className="hover:text-soft-orange transition-all">New</li>
              <li className="hover:text-soft-orange transition-all">Popular</li>
              <li className="hover:text-soft-orange transition-all">Trending</li>
              <li className="hover:text-soft-orange transition-all">Categories</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <FontAwesomeIcon icon={faBars} size='xl'className="flex md:hidden hover:scale-110" onClick={()=> setOpen(!open)}/>
        <ul className="md:flex md:gap-9  hidden text-sm font-light text-dark-grayish-blue ">
          <li className="hover:text-soft-orange transition-all">Home</li>
          <li className="hover:text-soft-orange transition-all">New</li>
          <li className="hover:text-soft-orange transition-all">Popular</li>
          <li className="hover:text-soft-orange transition-all">Trending</li>
          <li className="hover:text-soft-orange transition-all">Categories</li>
        </ul>
      </div>
    
    </nav>
  </>
  )};
  
export default NavEl


