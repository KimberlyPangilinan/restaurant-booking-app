import React from 'react'
import "../styles/button.css"
const Button = ({onClick,style,text}) => {
  return (
    <button className={style ||  "btn-primary"} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
