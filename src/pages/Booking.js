import React from 'react'
import BookingForm from '../components/BookingForm'
import Title from '../components/Title'
import { useReducer } from "react";
import { fetchAPI } from "../bookingsAPI";

const Booking = ({title}) => {
    function updateTimes(date) {
        return fetchAPI(date);
      }
    
      const output = fetchAPI(new Date());
    
      const [availableTimes, dispatch] = useReducer(updateTimes, output);
    
  return (
    <main>
    <Title title={title}/>
    <section>
     <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
    </section>
  </main>
  )
}

export default Booking
