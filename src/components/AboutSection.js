import React from 'react'
import MarioAndAdrianA from "../assets/Mario and Adrian a.png"
import MarioAndAdrianB from "../assets/Mario and Adrian b.png"
import Button from './Button'
import "../styles/hero.css"
import { Link } from 'react-router-dom';
const AboutSection = () => {
  return (
    <section id="about-section" className="flex">
      <div className="left flex-col">
      <h2>Little Lemon
            <span>Chicago</span>
            </h2>
            <p>We are a family owned Mediterranean restaurant, located on Maldove Street in Chicago, Illionis. We focus on traditional recipes served with a modern twist.</p>
            <Link to="/booking">
            <Button text={"Reserve a Table"}/>
            </Link>
        </div>
        <img className="img img-left" src={MarioAndAdrianA}/>
        <img className="img img-right" src={MarioAndAdrianB}/>
    </section>
  )
}

export default AboutSection
