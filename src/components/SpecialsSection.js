import React from 'react'
import Button from './Button'
import "../styles/specials.css"
import Card from './Card'
import { specialsList } from "../constants";
const SpecialsSection = () => {
  return (
    <section id="special-section" class="flex-col">
      <header >
        <h2>This Week's Specials</h2>
        <Button text="Online menu"/>
      </header>
      <div className="specials">
      {specialsList.map((special) => (
        <Card
            key={special.title}
            title={special.title}
            description={special.description}
            price={special.price}
            image={special.image}
            />
      ))}
      </div>
    </section>
  )
}

export default SpecialsSection
