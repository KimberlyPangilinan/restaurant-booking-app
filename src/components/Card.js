import React from 'react'
import Button from './Button'
import "../styles/card.css"
import { StarIcon} from '@chakra-ui/icons'


export const TestimonialsCard = ({name,comment,ratings,image}) => {

  const stars = [];
  for(let i=0; i<ratings; i++){
    stars.push(<StarIcon w={8} h={8} color="yellow.100" />);
  }

  return(
    <div className="testimonials-card">
      <img src={image}/>
      <h3>{name}</h3>
      <p>{comment}</p>
      <div className="ratings">
      {stars}
      </div>
    </div>
  )
}


const Card = ({title, description,price,image}) => {
  return (
    <article className='card flex-col'>
        <div className='card-header'>
            <img src={image} alt="food image"/>
        </div>
        <div className='card-body'>
            <div className="title">
                <h3>{title}</h3> <span>{price}</span>
            </div>
            <p>{description}</p>
            <a href="#Order a delivery">Order a delivery</a>

        </div>
    </article>
  )
}

export default Card
