import React from 'react'
import "../styles/hero.css"
import RestaurantFood from "../assets/restaurant.png"
import Button from './Button'
import { Link } from 'react-router-dom';
const HeroSection = () => {
  return (
    <section className="heroSection flex">
        <div className="left flex-col">
            <h1>Little Lemon
            <span>Chicago</span>
            </h1>
            <p>We are a family owned Mediterranean restaurant, located on Maldove Street in Chicago, Illionis. We focus on traditional recipes served with a modern twist.</p>
            <Link to="/booking">
            <Button text={"Reserve a Table"}/>
            </Link>
        </div>
        <img src={RestaurantFood}/>
    </section>
  )
}

export default HeroSection
