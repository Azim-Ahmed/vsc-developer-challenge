import React from "react";

/**
 *@function TextField.Tsx
 *@author Azim
 *
 **/
 const TextField = (props:any) => {
    return <input
       {
       ...props
       }
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

}
export default TextField;