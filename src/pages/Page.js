import React from 'react'
import Title from '../components/Title'
import { specialsList } from '../constants'
import Card from '../components/Card'

export const Form = ()=>{
  return(
    <form>
   <label for="res-date">Choose date</label>
   <input type="date" id="res-date"/>
   <label for="res-time">Choose time</label>
   <select id="res-time ">
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
   </select>
   <label for="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests"/>
   <label for="occasion">Occasion</label>
   <select id="occasion">
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <input type="submit" value="Make Your reservation"/>
</form>

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
      <section>
        {children}
      </section>
    </main>
  )
}

export default Page
