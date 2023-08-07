import React from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from '../pages/Home';
import Page, { Form, MenuList } from '../pages/Page';
import NotFound from '../pages/NotFound';

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/booking" element={<Page title={"Book a Table"}><Form/></Page>}/>
        <Route path="/menu" element={<Page title={"Menu"} ><MenuList/> </Page>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
  )
}

export default Routing
