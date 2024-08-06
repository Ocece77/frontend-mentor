import bg1 from "../assets/images/bg-main-desktop.png"
import bg2 from "../assets/images/bg-main-mobile.png"
import frontCard from '../assets/images/bg-card-front.png'
import backCard from '../assets/images/bg-card-back.png'
import cardLogo from '/src/assets/images/card-logo.svg';
import PropTypes from 'prop-types';

const CardLayout = ({cardholderInfo})=>{


  return(
    <div className="md:h-screen">
      <img src={bg1} alt="background" className="absolute -z-10 top-0  left-0 h-screen hidden md:flex" /> {/*laptop background */}
      <img src={bg2} alt="background" className="absolute -z-10 top-0  w-full left-0 right-0 flex h-1/3 md:hidden" /> {/*mobile background */}

        <div className='z-50 h-full flex flex-col-reverse md:flex-col justify-end md:justify-center md:gap-10 pt-10 md:pt-0'>
          {/*front card */}
          <div className="flex justify-center relative -mt-16 md:-mt-0 pe-8 md:pe-0 z-50">
              <div className="relative w-fit">
                <img src={frontCard} alt="frontCard" className="w-[20rem] md:w-full"/>
                  <div className="absolute top-0 flex flex-col h-full w-full">

                    <div className="w-full flex ps-6 pt-5">
                      <img src={cardLogo} alt="card logo" className="w-14 md:w-20 "/>
                    </div>

                    <div className="h-full  w-full flex flex-col justify-end gap-4 md:gap-5 px-5 md:px-8 pb-4 md:pb-7">
                      <div className="flex justify-center">
                          <p className="text-xl md:text-2xl lg:text-3xl text-white tracking-[.17rem] z-10">{cardholderInfo.cardNumber ? cardholderInfo.cardNumber : "0000 0000 0000 0000" }</p>   {/*code */}  
                       </div>

                          <div className="flex justify-between">
                             <p className="text-sm lg:text-1xl text-white tracking-[.09rem] z-10 uppercase">{cardholderInfo.name ? cardholderInfo.name : "Jane Appleseed" }</p>  {/*name */} 
                             <p className="text-sm lg:text-1xl text-white tracking-[.09rem] z-10">{cardholderInfo.cardExpDateMM ? cardholderInfo.cardExpDateMM : "00" }/{cardholderInfo.cardExpDateYY ? cardholderInfo.cardExpDateYY : "00" }</p>   {/*date */} 
                          </div>
                    </div>    

                  </div>
               </div>
            </div>

           {/*back card */}
          <div className="flex justify-end pe-3">
              <div className="relative w-fit ">
                <img src={backCard} alt="backCard" className="w-[20rem] md:w-full" />
                    <div className="absolute top-0 flex flex-col h-full w-full justify-center items-end pe-12">
                       <p className="text-sm md:text-xl text-white tracking-[.09rem] z-10">{cardholderInfo.cardCvc ? cardholderInfo.cardCvc : "000" }</p>   {/*CVC */}
                     </div>
               </div>
          </div>
        
        </div>

    </div>
  )
  }
  
  CardLayout.propTypes = {
    cardholderInfo : PropTypes.shape({
      name : PropTypes.string,
      cardNumber: PropTypes.string,
      cardExpDateMM : PropTypes.string,
      cardExpDateYY : PropTypes.string, 
      cardCvc : PropTypes.string 
    }) 
  }
  
  export default CardLayout