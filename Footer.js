import React from 'react';
import lidl from '../images/lidl.svg';
import nvidia from '../images/nvidia.svg';
import msi from '../images/msi.svg';
import logo from '../images/logo.svg';
import nike from '../images/nike.svg';
import overwatch from '../images/overwatch.svg';
import valorant from '../images/valorant.svg';


export default function Footer() {
    return (
        <footer className="navBar-footer">
           <div className="navBar-items-footer">
                 <img src={lidl} alt="lidl"/>
           </div>
           <div className="navBar-items">
                <img src={nvidia} alt="lidl"/>    
           </div>
           <div className="navBar-items">
                <img src={msi} alt="lidl"/>    
           </div>
           <div className="navBar-items">
                <img src={logo} alt="lidl"/>    
           </div>
           <div className="navBar-items">
                <img src={nike} alt="lidl"/>    
           </div>
           <div className="navBar-items">
                <img src={overwatch} alt="lidl"/>    
           </div>
           <div className="navBar-items">
                <img src={valorant} alt="lidl"/>    
           </div>
       </footer>
    )
};
