import React from 'react'
import Button from './Button'
import "../styles/card.css"
const Card = ({title, description,price,image}) => {
  return (
    <article className='card'>
        <div className='card-header'>
            <img src={image} alt="food image"/>
        </div>
        <div className='card-body'>
            <div className="title">
                <h3>{title}</h3> <span>{price}</span>
            </div>
            <p>{description}</p>
            <Button title="Order a delivery"/>

        </div>
    </article>
  )
}

export default Card
