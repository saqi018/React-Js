import { useState } from 'react'
import './App.css'

function App() {


  const [counter, setcounter]  = useState(0)
  const addValue = () =>{
  
    if(counter >= 1000000){
      alert("Limit reached! Resetting to 0.")}


      else{
  setcounter(counter + 1)

      }

  }


  return (
    <>
   
   <div id='tasbeeh'>
    <h3>{counter}</h3>
    <button onClick={addValue} className='count'> </button>
    <button onClick={()=> setcounter(0)} className='reset'></button>
   
   </div>




    </>
  )
}

export default App
