import React from 'react';
import { useState } from 'react';
import '../App.css';

const ScrollBorder = (props) => {
  var [value, setValuem]  = useState(0);
  function setValue(param){
    value = param
    props.radiar(param)
    setValuem(param)
  }
  return (
    <>
      {/* <p>{value}</p> */}
      <input type="range" 
        value={value}
        orient={props.orient}
        invert={props.invert}
        vertiOri={props.vertiOri}
        max="99"
        min="1"
        onChange={e => setValue(e.target.value)}
        />
    </>
  )
}


export default ScrollBorder

