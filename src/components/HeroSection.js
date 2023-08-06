import React from 'react'
import "../styles/hero.css"
import RestaurantFood from "../assets/restauranfood.jpg"
import Button from './Button'
const HeroSection = () => {
  return (
    <section className="heroSection flex">
        <div className="left flex-col">
            <h1>Little Lemon
            <span>Chicago</span>
            </h1>
            <p>We are a family owned Mediterranean restaurant, located on Maldove Street in Chicago, Illionis. We focus on traditional recipes served with a modern twist.</p>
            <Button text={"Reserve a Table"}/>
        </div>
        <img src={RestaurantFood}/>
    </section>
  )
}

export default HeroSection
