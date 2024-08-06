import { PropTypes } from 'prop-types';
import completedLogo from '/src/assets/images/icon-complete.svg';


const Thanks = ({setSubmitted}) =>{
return(
  <>
    <div className="flex flex-col px-20 justify-center items-center gap-3" >
      <img src={completedLogo} alt="completedLogo" className='w-16 mb-3' />
      <p className='text-xl font-semibold uppercase tracking-[0.24rem]'>Thank you! </p>
      <p className='text-light text-dark-grayish-violet text-sm md:text-normal'> We&apos;ve added your card details</p>
      <button onClick={()=> setSubmitted(false)} className="flex justify-center bg-very-dark-violet p-3 rounded-lg text-white mt-8 w-full md:w-2/3">Continue</button>
    </div>
  </>
)
}

Thanks.propTypes={
  setSubmitted: PropTypes.func.isRequired,
}

export default Thanks