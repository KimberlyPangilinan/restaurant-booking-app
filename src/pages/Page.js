import React, {useState} from 'react'
import Title from '../components/Title'
import { specialsList } from '../constants'
import Card from '../components/Card'

export const Confirmation=()=>{
  return(
    <section class="flex-col">
    <h3>Reservation successful!</h3>
       <p>A confirmation message has been sent to your email.
    Thanks for choosing us!</p>
    </section>
   
  )
}
export const MenuList =()=>{
  return(
    <div class="specials">
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
  )
}
const Page = ({title,children}) => {
  return (
    <main>
      <Title title={title}/>
      <section class="page">
        {children}
      </section>
    </main>
  )
}

export default Page
