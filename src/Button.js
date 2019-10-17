import React from 'react';

const myBtn = (props) => {
  return <button style={{backgroundColor: props.backgroundColor, color: props.color}}>{props.name}</button>
}

export default myBtn;