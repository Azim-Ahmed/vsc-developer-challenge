import React from "react";
/**
 *@function Button.Tsx
 *@author Azim
 *
 **/
const Button = ({ label }:any) => {
    return             <button
    style={{

        color:"#fff",
        backgroundColor:"#e74c3c",
        outline:" none",
          border:" 0",
        padding:"10px 20px",
        textTransform:"uppercase",
        marginTop:"50px",
        borderRadius:"2px",
        cursor:"pointer",
        position:"relative",

}}
        type="button" className="btn">{ label}</button>
}
export default Button;