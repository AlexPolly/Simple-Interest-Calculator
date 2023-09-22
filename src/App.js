import { useState } from 'react';
import './App.css';
import { TextField,Stack,Button } from '@mui/material';



function App() {
  const [interest,setInterest] = useState(0)
  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  const [isPrincipleValid,setIsPrincipleValid] = useState(true)
  const [isRateValid,setIsRateValid] = useState(true)
  const [isYearValid,setIsyearValid] = useState(true)

  const handlecalculator = (e)=>{
    e.preventDefault()
    if(!principle || !rate || !year){
      alert("Please fill the form completely !!!!")
    }else{
      setInterest( principle*rate*year/100)
    }
  }
  const validateinput = (e)=>{
    const {value,name} =e.target
    if(!!value.match(/^[0-9]+$/)){
     if(name==="principle"){
      setPrinciple(value)
      setIsPrincipleValid(true)
     }else if(name==="rate"){
      setRate(value)
      setIsRateValid(true)
     }else{
      setYear(value)
      setIsyearValid(true)
     }
      
    }else{
      if(name==="principle"){
        setPrinciple(value)
        setIsPrincipleValid(false)
      }else if(name==="rate"){
        setRate(value)
        setIsRateValid(false)
      }else{
        setYear(value)
        setIsyearValid(false)
      }
     
    }
  }
  const handleReset = ()=>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setIsPrincipleValid(true)
    setIsRateValid(true)
    setIsyearValid(true)
  }
  return (
   <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
    <div style={{width:'500px'}} className=' bg-light rounded p-5'>
      <div className='heading'>
        <h3>Simple Calculator</h3>
        <p>Calculate your simple interest easily</p>
      </div>
      <div style={{height:'150px', backgroundColor:'pink'}} className="interest-card d-flex flex-column w-100 justify-content-center align-items-center rounded  text-dark shadow">
        <h1>₹ {' '} {interest} </h1>
        <p className='fw-bold '>Total Simple Interest</p>
      </div>
      <form className='mt-5' onSubmit={(e)=>handlecalculator(e)} >
        <div className='mb-3'>
        <TextField className='w-100' id="outlined-basic" label="₹ Principal Amount" variant="outlined" value={principle || ""} name='principle' onChange={(e)=>validateinput(e)} />
        </div>
        {
          !isPrincipleValid &&
          <div className='mb-3 text-danger'>
            *Invalid Input
          </div>
        }
        
        <div className='mb-3'>
        <TextField className='w-100' id="outlined-basic" label="Rate of interest (p.a) %" variant="outlined" value={rate || ""} name='rate'  onChange={(e)=>validateinput(e)}  />
        </div>
        {
          !isRateValid &&
          <div className='mb-3 text-danger'>
            *Invalid Input
          </div>
        }
      
        <div className='mb-3'>
        <TextField className='w-100' id="outlined-basic" label="Time period( Yr )" variant="outlined"  value={year || ""} name='year'  onChange={(e)=>validateinput(e)}  />
        </div>
        {
          !isYearValid &&
          <div className='mb-3 text-danger'>
            *Invalid Input
          </div>
        }

        <Stack direction="row" spacing={2}>
        <Button type='submit' style={{height:'50px',width:'200px'}} disabled= { isPrincipleValid && isRateValid && isYearValid?false:true } variant="contained">Calculate</Button>
        <Button onClick={handleReset} style={{height:'50px',width:'200px'}} variant="outlined">Rest</Button>
        </Stack>
      </form>
    </div>
   </div>
  );
}

export default App;
