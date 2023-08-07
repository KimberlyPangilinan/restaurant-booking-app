import React from 'react'
import MarioAndAdrianA from "../assets/Mario and Adrian A.png"
import MarioAndAdrianB from "../assets/Mario and Adrian b.png"
import Button from './Button'
import "../styles/hero.css"

const AboutSection = () => {
  return (
    <section id="about-section" class="flex">
      
      <div className="left flex-col">
      <h2>Little Lemon
            <span>Chicago</span>
            </h2>
            <p>We are a family owned Mediterranean restaurant, located on Maldove Street in Chicago, Illionis. We focus on traditional recipes served with a modern twist.</p>
            <Button text={"Reserve a Table"}/>
        </div>
        <img class="img img-left" src={MarioAndAdrianA}/>
        <img class="img img-right" src={MarioAndAdrianB}/>
    </section>
  )
}

export default AboutSection
