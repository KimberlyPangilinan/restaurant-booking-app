import React,{useState,useEffect} from 'react'
import { TestimonialsCard } from './Card'
import { testimonialsList } from '../constants'
import "../styles/testimonials.css"
import Button from './Button'

const TestimonialsSection = () => {
  const [displayCount, setDisplayCount] = useState(3);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 600) {
        setDisplayCount(3); // Show 3 items on smaller screens (max-width: 600px)
      }
       else {
        setDisplayCount(8);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <section id="testimonials-section">
      <h2>Testimonials</h2>
      <div class="container">
      {testimonialsList.slice(0,displayCount).map((item) => (
        <TestimonialsCard
          key={item.name}
          name={item.name}
          comment={item.comment}
          ratings={item.rating}
          image={item.image}
        />
      ))}

      {window.innerWidth <= 600 && testimonialsList.length > displayCount && (
        <Button text={"Load More"} onClick={() => setDisplayCount(displayCount + 3)}/>
      )}

      </div>
    </section>
  )
}

export default TestimonialsSection
