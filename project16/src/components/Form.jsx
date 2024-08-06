import { PropTypes } from "prop-types"
import { useState } from "react"


const Form = ({cardholderInfo , setCardholderInfo , setSubmitted}) =>{
 
  const [charError , setCharError] = useState({
    name : null,
    cardNumber:null,
    cardExpDateMM:null,
    cardExpDateYY:null,
    cardCvc:null
  });

  const [blankError , setBlankError] = useState({
    name : null,
    cardNumber:null,
    cardExpDateMM:null,
    cardExpDateYY:null,
    cardCvc:null
  });

  const [monthError , setMonthError] = useState(null);// invalid month
  const [dateError , setDateError] = useState(null); // invalid date


  const handleChange =(e)=>{
    setCardholderInfo({...cardholderInfo , [e.currentTarget.id ] : e.currentTarget.id  == 'cardNumber' ?
      e.currentTarget.value.length != 0 ? e.currentTarget.value.match(/.{1,4}/g).join(' ') : "" 
      : e.currentTarget.value })

    handleChar(e.currentTarget);
  }

  const handleChar = (e) =>{


    if (e.id == "name"){ //if the id is name we 
      setCharError({...charError , [e.id] : e.value.match(/[^A-Za-z\s]/g) })
  
    } else{
      setCharError({...charError , [e.id] : e.value.match(/[^\d]/g)})
    }

    if (e.id == "cardExpDateMM"){// the month is incorrect because it's not between 1 and 12
        setMonthError( parseInt(e.value) > 12 || parseInt(e.value) <=0  )
    } 

    if (cardholderInfo.cardExpDateMM != '' && cardholderInfo.cardExpDateYY != ''){
     const cardDate = new Date(`20${cardholderInfo.cardExpDateYY}-${ cardholderInfo.cardExpDateMM  }-01`)
     const currDate = new Date();
     setDateError(cardDate.getTime() < currDate.getTime())
 
     console.log(cardholderInfo)

    }


}

  const handleSubmit = (e) =>{
    e.preventDefault();

    //search for blank input
    for (const id in cardholderInfo){
      if (cardholderInfo[id] == ""){
        setBlankError({...blankError , [id] : true })
    } else {
      setBlankError({...blankError , [id] : false })
    }
  }


    //return nothing if there's one char error
    for (const key in charError){
      if (charError[key]){
        return ; 
     }
    }

    setSubmitted(true);
  }

    
  return(
    <>
     <form onSubmit={handleSubmit} className="flex flex-col h-full w-full lg:w-3/4 justify-center px-6 lg:px-24 gap-5">

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name">Cardholder Name</label>
        <input required onChange={handleChange} type="text" name="name" id="name" minLength={4} maxLength={25} className="border border-neutral-300 rounded-lg p-2 ps-3 w-full text-lg"  placeholder="e.g Jane Applesed"/>
       { charError.name && <p className="text-red-600 text-[.8rem]">Wrong format characters only</p>}
       { blankError.name && <p className="text-red-600 text-[.8rem]">Can&apos;t be blank</p> }
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cardNumber" >Card Number</label>
        <input required  maxLength={16} onChange={handleChange} type="text" name="cardNumber" id="cardNumber" className="border border-neutral-300 rounded-lg p-2 ps-3 w-full text-lg"  placeholder="e.g 1234 5678 9123 0000" />
        {charError.cardNumber && <p className="text-red-600 text-[.8rem]">Wrong format number only</p> }
     { blankError.cardNumber && <p className="text-red-600 text-[.8rem]">Can&apos;t be blank</p> }

      </div>

      <div className="flex flex-col gap-1.5">

        <div className="grid grid-cols-2 gap-y-2 gap-x-6">
         <label htmlFor="cardExpDate" className="text-sm">EXP .DATE (MM/YY)</label>
         <label htmlFor="cardCvc" className="text-sm">CVC</label>

          <div className="grid grid-cols-2 gap-2 ">
            <input required maxLength={2} onChange={handleChange} type="text" name="cardExpDateMM" id="cardExpDateMM" className="border border-neutral-300 rounded-lg p-2 ps-3 w-full text-lg"  placeholder="MM"/>
            <input required maxLength={2} onChange={handleChange} type="text" name="cardExpDateYY" id="cardExpDateYY" className="border border-neutral-300 rounded-lg p-2 ps-3 w-full text-lg"  placeholder="YY"/>
          </div>

          <div className="flex w-full flex-col">
            <input required  maxLength={3} onChange={handleChange} type="text" name="cardCvc" id="cardCvc" className="border border-neutral-300 rounded-lg p-2 ps-3 w-full text-lg"  placeholder="e.g 123"/>
          </div>
       
        </div>
        <div className="grid grid-cols-2">
        <div>
        {(charError.cardExpDateYY || charError.cardExpDateMM ) && <p className="text-red-600 text-[.8rem]">Wrong format number only</p> }
        { (blankError.cardExpDateYY || blankError.cardExpDateMM ) && <p className="text-red-600 text-[.8rem]">Can&apos;t be blank</p> }
         { monthError && <p className="text-red-600 text-[.8rem]">Invalid Month </p> }
         { dateError && <p className="text-red-600 text-[.8rem]">Invalid year, the card is obsolete </p> }

          </div>

          <div>
          {  charError.cardCvc && <p className="text-red-600 text-[.8rem]">Wrong format number only</p> }
         { blankError.cardCvc && <p className="text-red-600 text-[.8rem]">Can&apos;t be blank</p> }
          </div>

        </div>
      
      </div>

      <div className="md:pt-5">
        <button type="submit" className="w-full flex justify-center bg-very-dark-violet p-3 rounded-lg text-white hover:bg-light-grayish-violet transition-colors">Confirm</button>
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

