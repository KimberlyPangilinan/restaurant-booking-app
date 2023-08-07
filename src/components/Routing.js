import React from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from '../pages/Home';
import Page, { BookingForm, Confirmation, MenuList } from '../pages/Page';
import NotFound from '../pages/NotFound';
import Booking from '../pages/Booking';

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/booking" element={<Booking title={"Book Now"}/>}/>
        <Route path="/menu" element={<Page title={"Menu"} ><MenuList/> </Page>}/>
        <Route path="/confirmation" element={<Page title={"Confirmation"} ><Confirmation/> </Page>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
  )
}

export default Routing
