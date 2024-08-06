import { PropTypes } from "prop-types"
import { useState } from "react"


const Form = ({cardholderInfo , setCardholderInfo , setSubmitted}) =>{
 
  const [error , setError] = useState({
    name : null,
    cardNumber:null,
    cardExpDateMM:null,
    cardExpDateYY:null,
    cardCvc:null
  })


  const handleChange =(e)=>{
    setCardholderInfo({...cardholderInfo , [e.currentTarget.id ] : e.currentTarget.id  == 'cardNumber' ?  e.currentTarget.value.match(/.{1,4}/g).join(' ') : e.currentTarget.value })
    handleChar(e.currentTarget);
  }

  const handleChar = (e) =>{
      if (e.id == "name"){
        if(e.value.match(/[^A-Za-z]/g)){
          setError({...error , [e.id] : true })
        } else{
          setError({...error , [e.id] : false })
        }
      } else{
        if(e.value.match(/[^\d]/g)){
          setError({...error , [e.id] : true })
        } else{
          setError({...error , [e.id] : false })
        }
      }
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setSubmitted(true);
  }
    
  return(
    <>
     <form onSubmit={handleSubmit} className="flex flex-col h-full w-full lg:w-3/4 justify-center px-6 lg:px-24 gap-5">

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name">Cardholder Name</label>
        <input onChange={handleChange} type="text" name="name" id="name" className="border border-neutral-300 rounded-lg p-2 ps-3 w-full text-lg"  placeholder="e.g Jane Applesed"/>
       {
        error.name && <p className="text-red-600 text-[.8rem]">Wrong format characters only</p>
       }
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cardNumber" >Card Number</label>
        <input  maxLength={16} onChange={handleChange} type="text" name="cardNumber" id="cardNumber" className="border border-neutral-300 rounded-lg p-2 ps-3 w-full text-lg"  placeholder="e.g 1234 5678 9123 0000" />
        {
        error.cardNumber && <p className="text-red-600 text-[.8rem]">Wrong format number only</p>
       }
      </div>

      <div className="flex flex-col gap-1.5">

        <div className="grid grid-cols-2 gap-y-2 gap-x-6">
         <label htmlFor="cardExpDate" className="text-sm">EXP .DATE (MM/YY)</label>
         <label htmlFor="cardCvc" className="text-sm">CVC</label>

          <div className="grid grid-cols-2 gap-2 ">
            <input maxLength={2} onChange={handleChange} type="text" name="cardExpDateMM" id="cardExpDateMM" className="border border-neutral-300 rounded-lg p-2 ps-3 w-full text-lg"  placeholder="MM"/>
            <input maxLength={2} onChange={handleChange} type="text" name="cardExpDateYY" id="cardExpDateYY" className="border border-neutral-300 rounded-lg p-2 ps-3 w-full text-lg"  placeholder="YY"/>
          </div>

          <div className="flex w-full flex-col">
            <input  maxLength={3} onChange={handleChange} type="text" name="cardCvc" id="cardCvc" className="border border-neutral-300 rounded-lg p-2 ps-3 w-full text-lg"  placeholder="e.g 123"/>
          </div>
       
        </div>
        <div className="grid grid-cols-2">
        <div>
        {
            (error.cardExpDateYY || error.cardExpDateMM ) && <p className="text-red-600 text-[.8rem]">Wrong format number only</p>
          }

          </div>

          <div>
          {
            error.cardCvc && <p className="text-red-600 text-[.8rem]">Wrong format number only</p>
          }
          </div>

        </div>
      
      </div>

      <div className="md:pt-5">
        <button type="submit" className="w-full flex justify-center bg-very-dark-violet p-3 rounded-lg text-white">Confirm</button>
      </div>

     </form>


    </>
  )
  }

  Form.propTypes = {
    setCardholderInfo : PropTypes.func.isRequired,
    cardholderInfo : PropTypes.shape({
      name : PropTypes.string,
      cardNumber: PropTypes.string,
      cardExpDateMM : PropTypes.string,
      cardExpDateYY : PropTypes.string, 
      cardCvc : PropTypes.string 
    }),
    setSubmitted: PropTypes.func.isRequired, 

  }
  
  
  export default Form

