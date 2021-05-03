import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Footer from "../components/layoutPages/Footer/Footer";
import Header from "../components/layoutPages/Header/Header";
import HomePage from "../pages/BookingTicket/HomePage/HomePage";

// Hometemplate bang Router-dom

export const HomeTemplate = (props) => {
  const {Component,path} = props;

  return <Route path={path} exact render= {(propsRoute)=> {
   return <div>
     <Header/>
       <Component {...propsRoute}/>
       <Footer/>
   </div>
  }} />
}