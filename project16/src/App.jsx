import { useState } from "react"
import CardLayout from "./components/CardLayout"
import Form from "./components/Form"
import Thanks from "./components/Thanks";


function App() {

  const [cardholderInfo ,setCardholderInfo] = useState({    
  name : "",
  cardNumber: "",
  cardExpDateMM: "",
  cardExpDateYY: "",
  cardCvc: ""})


  const [submitted, setSubmitted] = useState(false);

  return (
    <>
    <div className="grid md:grid-cols-2 font-grotesk gap-y-9">
      <CardLayout cardholderInfo={cardholderInfo}/>
      {!submitted && <Form cardholderInfo={cardholderInfo} setCardholderInfo={setCardholderInfo} setSubmitted={setSubmitted}/>}
      {submitted && <Thanks setSubmitted={setSubmitted} setCardholderInfo={setCardholderInfo}/>}
    </div>

    </>
  )
}

export default App
