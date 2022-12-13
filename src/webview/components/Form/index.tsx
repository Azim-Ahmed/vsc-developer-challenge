import React from "react";
import Button from '../Button'
const Form = () => {
    return        <div
    style={{
      position:"absolute",
      left:"50%",
      top:"50%",
      transform: "translate(-50%,-50%)",
      backgroundColor: "rgba(0, 0, 0, 0.89)",
      borderRadius:"3px",
      padding:"70px 100px",
  }}>
<form>
  <span className="text-center">login</span>
<div style={{
position:"relative",
marginBottom:"25px",

}} className="input-container">
        <input
style={{
border:"0",
borderBottom:"1px solid #555",
background:"transparent",
width:"100%",
padding:"8px 0 5px 0",
fontSize:"16px",
color:"#fff",
}}
          type="text" required />
  <label
style={{
    position:"absolute",
top:"0px",
left:"0px",
fontSize:"16px",
color:"#fff",
transition: "all 0.5s ease-in-out",
}}
>Full Name</label>
</div>
<div style={{
position:"relative",
marginBottom:"25px",

}} className="input-container">
        <input
          style={{
            border:"0",
            borderBottom:"1px solid #555",
            background:"transparent",
            width:"100%",
            padding:"8px 0 5px 0",
            fontSize:"16px",
            color:"#fff",
}}
          type="mail" required />
  <label
style={{
  position:"absolute",
top:"0px",
left:"0px",
fontSize:"16px",
color:"#fff",
transition: "all 0.5s ease-in-out",
}}
>Email</label>
</div>
<Button label={ "submit"} />
</form>
</div>
}