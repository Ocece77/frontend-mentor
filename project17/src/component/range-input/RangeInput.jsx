import "./range-input.css"
import { useEffect, useState} from "react";
import PropTypes from 'prop-types';



 const RangeInput = ({getValue ,min = 0, max = 32 , defaultValue = 50}) =>{

  const[value, setValue] = useState(defaultValue);

  useEffect(()=>{
    document.documentElement.style.setProperty('--value', value);
    document.documentElement.style.setProperty('--min', min);
    document.documentElement.style.setProperty('--max', max);
  }, [value, min,max]);

  const handleChange = (e)=>{
    setValue(e.target.value)
    getValue(e.target.value)
  }

  return (
    <>
    <input type="range" name="range" id="range"
      min={min} max={max} value={value} 
    className="styled-slider slider-progress mb-5"
    onChange={handleChange}/>
    </>
  )
}

RangeInput.PropTypes ={
  getValue : PropTypes.func.isRequired,
  min : PropTypes.number.isRequired,
  max : PropTypes.number.isRequired,
  defaultValue :PropTypes.number.isRequired
}



export default RangeInput;