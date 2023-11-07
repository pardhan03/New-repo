import './index.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () =>{

    const[btnName,setbtnName]=useState("Login");

    return(
        <div className="header">
            <div className="logo">
                <img
                className='pic'
                src="https://th.bing.com/th/id/OIP.ueHppfRf52CDn841Rpj8IwHaHa?pid=ImgDet&rs=1" 
                alt="logo"/>
            </div>
            <div className="nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="contact">Contact us</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <button className='Login-btn' onClick={()=>{
                        btnName==="Login"
                        ? setbtnName("Logout")
                        : setbtnName("Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;