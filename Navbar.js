import React, { useState } from 'react';
import lidl from '../images/lidl.svg';
import nvidia from '../images/nvidia.svg';
import msi from '../images/msi.svg';
import logo from '../images/logo.svg';
import nike from '../images/nike.svg';
import overwatch from '../images/overwatch.svg';
import valorant from '../images/valorant.svg';
import  SidebarData  from './SidebarData';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';


export default function Navbar() {

     const [ sidebar , setSidebar ] = useState();

     const showSidebar = () => setSidebar(!sidebar);


    return (
       <navbar className="navBar">
           <div>
               <button className="btn" onClick={showSidebar}>
                  Menu
               </button>
               <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                  <ul className='nav-menu-items' onClick={showSidebar}>
                       <li className='navbar-toggle'>
                            <Link to="/" className='menu-bars'> 
                              <AiIcons.AiOutlineClose />
                            </Link>
                       </li>  
                    {SidebarData.map((item , index) => (
                         <li key={index} className={item.cName}>
                              <Link to="/"> {item.icon} </Link>
                              <span>{item.title}</span>
                         </li>
                    ))}
                  </ul>  
               </nav>
           </div>
           <div className="navBar-items">
                 <img src={lidl} alt="lidl" className="btn-1"/>
           </div>
           <div className="navBar-items">
                <img src={nvidia} alt="lidl" className="btn-1"/>    
           </div>
           <div className="navBar-items">
                <img src={msi} alt="lidl" className="btn-1"/>    
           </div>
           <div className="navBar-items">
                <Link to="/"><img src={logo} alt="lidl" className="btn-1"/></Link>    
           </div>
           <div className="navBar-items">
                <img src={nike} alt="lidl" className="btn-1"/>    
           </div>
           <div className="navBar-items">
                <img src={overwatch} alt="lidl" className="btn-1"/>    
           </div>
           <div className="navBar-items">
                <img src={valorant} alt="lidl" className="btn-1"/>    
           </div>
           <div>
               <button className="btn">Rise Live</button>
           </div>
       </navbar>
    )
};
