import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { LC, NC, SC, UC } from './data/PassChar';

function App() {
  let [uppercase, setuppercase] = useState(false)
  let [lowercase, setlowercase] = useState(false)
  let [numbercase, setnumbercase] = useState(false)
  let [specialcase, setspecialcase] = useState(false)
  let [passchange, setPasschange] = useState(10)
  let [showpass, setshowpass] = useState('')

  let createPass = () => {
    let finalpass = '';
    let charSet = '';
    if (uppercase || lowercase || numbercase || specialcase) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (numbercase) charSet += NC;
      if (specialcase) charSet += SC;
      for (let i = 0; i < passchange; i++) {
        finalpass += charSet.charAt(Math.floor(Math.random() * charSet.length))

      }

      setshowpass(finalpass)
    }
    else {
      toast.warning("please select atleast one box")
    }

  }
  let copypass = () => {
    navigator.clipboard.writeText(showpass);
    toast.success("text copied")
      setshowpass('')


  }
  return (

    <>
      <div className='passwordBox'>
        <ToastContainer />
        <h2>Password Generator</h2>
        <div className='passwordBoxIn'>
          <input type='text' readOnly value={showpass} />
          <button onClick={copypass}>Copy</button>
        </div>
        <div className='passwordLength'>
          <label>Password Length</label>
          <input type='number' min={10} max={20} value={passchange} onChange={(event) => setPasschange(event.target.value)} />
        </div>
        <div className='passwordLength'>
          <label>Include UpperCase </label>
          <input type='checkbox' checked={uppercase} onChange={() => setuppercase(!uppercase)} />

        </div>
        <div className='passwordLength'>
          <label>Include LowerCase </label>
          <input type='checkbox' checked={lowercase} onChange={() => setlowercase(!lowercase)} />

        </div>
        <div className='passwordLength'>
          <label>Include Number </label>
          <input type='checkbox' checked={numbercase} onChange={() => setnumbercase(!numbercase)} />

        </div>

        <div className='passwordLength'>
          <label>Include Special Character </label>
          <input type='checkbox' checked={specialcase} onChange={() => setspecialcase(!specialcase)} />

        </div>
        <button className='btn' onClick={createPass} >Generate Password</button>


      </div>
    </>
  );
}

export default App;
