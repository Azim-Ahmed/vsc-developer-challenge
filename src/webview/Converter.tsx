import React, { useState } from "react";
import { currency } from '../assets';
import Label from './components/Label';
import Select from './components/Select';
import TextField from './components/TextField';
/**
 *@function Converter.Tsx
 *@author Azim
 *
 **/
function Converter(): JSX.Element {

  const [firstSelectedItem, setFirstSelectedItem] = useState<string>("usd");
  const [secondSelectedItem, setSecondSelectedItem] = useState<string>("cad");
  const [firstInput, setFirstInput] = useState<string | number>("");
  const [secondInput, setSecondInput] = useState<string | number>("");


  const currencyFirstConverter = (e:any) => {
    setFirstInput("")
    setSecondInput("")
    setFirstSelectedItem(e.target.value)

  }
  const currencySecondConverter = (e:any) => {
    setSecondInput("")
    setFirstInput("")
    setSecondSelectedItem(e.target.value);
  }

  const handleInputSelectedValue = (e:any) => {
    const getFirstCurrency = currency[firstSelectedItem];
    const getSecondCurrency = currency[secondSelectedItem];
    const getValue = e.target.value;
    const getName = e.target.name;
    if (getValue) {
      if (getName === "first") {
        setFirstInput(getValue);
        let multiply = getFirstCurrency.rate*getValue*getSecondCurrency.rate;
        setSecondInput(multiply)
      } else {
        let multiply = getFirstCurrency.inverseRate*getValue*getSecondCurrency.inverseRate;
        setFirstInput(multiply);
        setSecondInput(getValue)

      }
    } else {
      setFirstInput("")
      setSecondInput("")
    }
  }

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
      <h1 style={{textAlign:"center", marginBottom:"20px", marginTop:"-40px"}}>Convert Currency </h1>
        <div>
        <div style={{display:"flex", alignItems:"center"}}>
            <div style={{
position:"relative",
marginBottom:"25px",

}} className="input-container">
  <Label labelWording={firstSelectedItem + '\xa0'+ "Currency"} />
  <TextField name="first"  value={firstInput} onChange={(e:any) => handleInputSelectedValue(e)}/>
</div>
<Select defaultValue={firstSelectedItem} currencySecondConverter={currencyFirstConverter}/>

     </div>
     <div style={{display:"flex", alignItems:"center"}}>
            <div style={{
position:"relative",
marginBottom:"25px",

}} className="input-container">
              <Label labelWording={secondSelectedItem + '\xa0' + "Currency"} />
              <TextField name="second" value={secondInput} onChange={(e:any) => handleInputSelectedValue(e)}/>
</div>
<Select defaultValue={secondSelectedItem} currencySecondConverter={currencySecondConverter}/>
     </div>
        </div>
  </div>
    </div>
  );
}

export default Converter;
