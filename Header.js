import React from 'react';
import Navbar from './Navbar';


export default function Header() {
    return (
        <header  className="headerBg">
               <Navbar/>
               <div>
                   <h2 className="header-text">Rise Domainting Once Again</h2>
                   <button className="header-btn">Read More</button> 
                </div> 
      </header>        
    )
};
