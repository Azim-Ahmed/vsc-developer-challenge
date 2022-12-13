import React from "react";
import { currency } from '../../../assets';
 const Select = ({ defaultValue, currencySecondConverter, }:any) => {
    return   <select
        defaultValue={defaultValue }
    onChange={(e) => currencySecondConverter(e)}
    style={{ height: "37px", background:"black", color:"white" }}
    placeholder="Select currency"
  >
{
Object.keys(currency).map(item => <option key={item}>{ item}</option>)
}
</select>

}
export default Select;