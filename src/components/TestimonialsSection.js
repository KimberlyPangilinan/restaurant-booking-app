import React from 'react'
import { TestimonialsCard } from './Card'
import { testimonialsList } from '../constants'
import "../styles/testimonials.css"

const TestimonialsSection = () => {
  return (
    <section id="testimonials-section">
      <h2>Testimonials</h2>
      <div class="container">
       
        {testimonialsList.map((item)=>{
          return(
            <TestimonialsCard name={item.name} comment={item.comment} ratings={item.rating} image={item.image} />
          )
        })}
     
      </div>
     
    </section>
  )
}

export default TestimonialsSection
