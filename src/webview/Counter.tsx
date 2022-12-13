import React, { useState } from "react";
import { currency } from '../assets';
import Button from './components/Button';
import Label from './components/Label';
import TextField from './components/TextField';

function Counter(): JSX.Element {
  const [counter, setCounter] = useState(0);

  const inc = () => setCounter((c) => c + 1);
  const dec = () => setCounter((c) => c - 1);

  return (
    <div
    style={{
      display: 'flex',
      minHeight: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <div
    style={{
      position:"absolute",
      left:"50%",
      top:"50%",
      transform: "translate(-50%,-50%)",
      backgroundColor: "rgba(0, 0, 0, 0.89)",
      borderRadius:"3px",
      padding:"70px 100px",
  }}>
      <h1>Currency Converter</h1>
        <div>
        <div style={{display:"flex", alignItems:"center"}}>
            <div style={{
position:"relative",
marginBottom:"25px",

}} className="input-container">
<Label labelWording="current Currency"/>
       <TextField/>
</div>
            <select
          style={{
            height:"37px"
          }}
              defaultValue={counter} placeholder="Placeholder Text">
          {
            Object.keys(currency).map(item => <option>{ item}</option>)
          }
      </select>
     </div>
     <div style={{display:"flex", alignItems:"center"}}>
            <div style={{
position:"relative",
marginBottom:"25px",

}} className="input-container">
<Label labelWording="current Currency"/>
       <TextField/>
</div>
            <select
        style={{
          height:"37px"
        }}
              defaultValue={counter} placeholder="Placeholder Text">
          {
            Object.keys(currency).map(item => <option>{ item}</option>)
          }
      </select>
     </div>
        </div>
  </div>
    </div>
  );
}

export default Counter;
