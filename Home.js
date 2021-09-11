import React from 'react';
import hero1 from '../images/hero1.png';
import hero2 from '../images/hero2.png';
import hero3 from '../images/hero3.png';
import youtube from '../images/youtube.png';
import insta from '../images/insta.png';
import twi from '../images/twit.png';
import fb from '../images/facebook-2.png';
import twih from '../images/twitchP.png'
import Tabs from './Tabs';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
     <div>
            <div className="container">
              <div className="box">
                <div className="icon">1</div>
                 <div className="content">
                    <h3>Rise Once Again</h3>
                    <p>lorem ipsum dolor sit amet, consectetur adip</p>
                    <button className="btn"> <a href="/about"> Read More</a></button>
                 </div>
              </div>
              <div className="box">
                  <div className="icon">2</div>
                    <div className="content">
                        <h3>Latest News</h3>
                        <p>lorem ipsum dolor sit amet, consectetur adip</p>
                        <button className="btn"> <a href="/"> Read More</a></button>
                    </div>
              </div>
              <div className="box">
                  <div className="icon">3</div>
                    <div className="content">
                        <h3>Latest Blog</h3>
                        <p>lorem ipsum dolor sit amet, consectetur adip</p>
                        <button className="btn"> <Link to="/contact">Read More</Link></button>
                    </div>
              </div>
            </div>
            <div className="team">
                <h2>TEAMS</h2>
                <h3>RISE currently has one major team for Valorant. We currently are forming teams for multiple other games 
                    so keep an eye out!</h3>
            </div>

                <Tabs/>

            <div className="hero-about-section">
                <div className="hero-about">
                     <h2>Formed by a group of enthousiasts Formed to be the best</h2>
                     <img src={hero1} alt="hero1" className="hero-img-1"/>
                     <img src={hero2} alt="hero1" className="hero-img-2"/>
                     <img src={hero3} alt="hero1" className="hero-img-3"/>   
                </div>
                <div className="hero">
                    <h2>About Rise</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in bibendum erat, sed egestas odio. Nam et faucibus enim, a accumsan justo. Sed eu egestas leo. Aliquam dapibus malesuada iaculis. Mauris lacinia ante nec felis semper, in interdum eros vehicula. Praesent quam sem, posuere in consequat et, cursus iaculis elit. 
                    </p>
                    <Link to="/contact" className="btn">Contact Us</Link>
                </div>
            </div>
            <div>
                <div className="teamHeroSection">
                    <h1>FOLLOW US</h1>
                    <p>We are active on numerous platforms. For daily updates, whereabouts and upcoming games and competitions follow us and be notified.</p>
                </div>
                <div className="homeFollow">
                    <img src={twi} alt="Twitter" className="btn-1"/>
                    <img src={fb} alt="Twitter" className="btn-1"/>
                    <img src={twih} alt="Twitter" className="btn-1"/>
                    <img src={youtube} alt="Twitter" className="btn-1"/>
                    <img src={insta} alt="Twitter" className="btn-1"/>
                </div>
            </div>

    </div>
    )
}
