import React from 'react'
import { Card } from 'react-bootstrap'

const SquareBorder = (props) => {
  props = props.borda
  const radius = {
    t1: props[0], 
    t2: props[1],
    b1: props[2],
    b2: props[3],
    l1: props[4],
    r1: props[5],
    r2: props[6],
    l2: props[7]}
  return (
    <div>
      <Card style={{ 
        background: 'green',
        width: '18rem', 
        height: '18rem', 
        border: '5px solid green',
        borderRadius: `${radius.t1}% ${radius.t2}% ${radius.b1}% ${radius.b2}% / ${radius.l1}% ${radius.r1}% ${radius.r2}% ${radius.l2}%`}}>
      </Card>
    </div>
  )
        
}

export default SquareBorder
