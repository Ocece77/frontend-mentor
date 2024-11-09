import svg from '../assets/images/pattern-circles.svg'

const Header = () =>{
  return(
    <>

    <div className="text-center relative h-fit">

      {/*background svg circle */}
        <div className="absolute w-full -z-10 flex items-center justify-center -top-5">
          <img src={svg} alt='circle icon' className="w-30 md:w-28"/>
        </div>


       {/*Title and paragraph */}
          <div >
            <h1 className="font-bold text-dark-desaturated-blue md:text-2xl sm:text-[19px] text-[20px] tracking-wider pb-2">Simple, traffic-based pricing</h1>
            <p className="px-3 sm:px-12 md:px-5 text-sm text-grayish-blue tracking-wide">Sign-up for our 30-day trial. No credit card required.</p>
          </div>

      </div>

  
    </>
  )
}

export default Header;