const Form =()=>{
  return(
    <>
     <form className="flex flex-col h-full w-full md:w-3/4 justify-center px-6 md:px-24 gap-5">

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cardholder-name">Cardholder Name</label>
        <input type="text" name="cardholder-name" id="cardholder-name" className="border border-neutral-300 rounded-lg p-2 ps-3 w-full text-lg"  placeholder="e.g Jane Applesed"/>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="card-number" >Card Number</label>
        <input type="text" name="card-number" id="card-number" className="border border-neutral-300 rounded-lg p-2 ps-3 w-full text-lg"  placeholder="e.g 1234 5678 9123 0000"/>
      </div>

      <div className="flex flex-col gap-1.5">

        <div className="grid grid-cols-2 gap-y-2 gap-x-6">
         <label htmlFor="card-exp-date" className="text-sm">EXP .DATE (MM/YY)</label>
         <label htmlFor="card-cvc" className="text-sm">CVC</label>

          <div className="grid grid-cols-2 gap-2 ">
            <input type="text" name="card-exp-date" id="card-exp-date" className="border border-neutral-300 rounded-lg p-2 ps-3 w-full text-lg"  placeholder="MM"/>
            <input type="text" name="card-exp-date" id="card-exp-date" className="border border-neutral-300 rounded-lg p-2 ps-3 w-full text-lg"  placeholder="YY"/>
          </div>

          <div className="flex w-full">
            <input type="text" name="card-exp-date" id="card-exp-date" className="border border-neutral-300 rounded-lg p-2 ps-3 w-full text-lg"  placeholder="e.g 123"/>
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
  
  
  export default Form