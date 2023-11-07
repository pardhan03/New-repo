import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./Header.js";
import reportWebVitals from './reportWebVitals';
import { Outlet } from "react-router-dom";

const Applayout = () =>{
    return(
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Applayout;