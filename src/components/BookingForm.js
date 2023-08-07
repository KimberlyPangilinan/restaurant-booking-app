
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Button from './Button';
const BookingForm = ({availableTimes,updateTimes})=>{

    const [name,setName] = useState('');
    const [email,setEmail] = useState('')
    const [date,setDate] = useState('');
    const [time,setTime] = useState('');
    const [guests,setGuests] = useState();
    const [occasion,setOccasion] = useState('');
    
    const [finalTime, setFinalTime] = useState(
        availableTimes.map((times) => <option key={times}>{times}</option>)
      );
    
      function handleTimeChange(e) {
        setTime(e.target.value);
      }
    
    return(
        <>
        <h2>Book Now</h2>
    <form>
    <fieldset className='flex-col'>
    <div className='flex-justify'>
    <label htmlFor="res-name">Full Name
     <input type="text" id="res-name" value={name} onChange={e=>setName(e.target.value)}/></label>
     <label htmlFor="res-email">Email Address
     <input type="email" id="res-email" value={email} onChange={e=>setEmail(e.target.value)}/></label>
</div>
    <label htmlFor="res-date">Choose date
     <input type="date" id="res-date" value={date} onChange={e=>setDate(e.target.value)}/></label>
     <label htmlFor="res-time">Choose time
      <select id="res-time" required value={time} onChange={handleTimeChange}>
        <option value="" disabled defaultValue>
          Choose a time
        </option>
        {finalTime}
      </select></label>
      <label htmlFor="guests">Number of guests</label>
     <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e)=> setGuests(e.target.value)}/>
     <label htmlFor="occasion">Occasion</label>
     <select id="occasion"  value={occasion} onChange={e=> setOccasion(e.target.value)}>
        <option value="" disabled defaultValue>Choose an option</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
     </select>
    </fieldset>
     
     
    
     <Link to="/confirmation">
          <Button text="Reserve a table"/>
        </Link>
  
  </form>
  </>
    )
  }


  export default BookingForm
  