import React from 'react';
import hero from '../images/hero1.png';
import Dots from '../images/dots.png';

export default function About() {


    return (
        <div>
            <div>
                <h1 className="about-heading">About</h1>
                <p className="about-para">
                     Lorem ipsum dolor sit amet, 
                     consectetuer adipiscing elit. 
                     Aenean commodo ligula eget dolor. 
                     Aenean massa. Cum sociis natoque 
                     penatibus et magnis dis parturient montes, 
                     nascetur ridiculus mus. Donec quam felis, 
                     ultricies nec, pellentesque eu, pretium quis, 
                     sem. Nulla consequat massa quis enim. Donec pede justo, 
                     fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, 
                     rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
                </p>
            </div>
            <div>
                <h2 className="about-heading">KEEP TRACK OF OUR ACTIVITY</h2>
                <hr></hr>
            </div>
            <div>
                <span className="about-button">2021</span>
            </div>
            <div className="aboutSection-Right">
                <h2>Month / Year</h2>
                <h1> FIRST ONLINE EVENT IS A FACT. </h1>
                <img src={hero} alt="hero"/>
                <p>
                Lorem ipsum dolor sit amet, 
                consectetuer adipiscing elit. 
                Aenean commodo ligula eget dolor. 
                Aenean massa. Cum sociis 
                natoque penatibus et magnis 
                dis parturient montes, nascetur ridiculus mus.
                </p>
                <button>Read More</button>
            </div>
            <div>
                <img src={Dots} alt="dots" className="Vline"></img>
            </div>
            <div className="aboutSection-left">
                <h2>Month / Year</h2>
                <h1> FIRST ONLINE EVENT IS A FACT. </h1>
                <img src={hero} alt="hero"/>
                <p>
                Lorem ipsum dolor sit amet, 
                consectetuer adipiscing elit. 
                Aenean commodo ligula eget dolor. 
                Aenean massa. Cum sociis 
                natoque penatibus et magnis 
                dis parturient montes, nascetur ridiculus mus.
                </p>
                <button>Read More</button>
            </div>
            <div className="aboutSection-Right">
                <h2>Month / Year</h2>
                <h1> FIRST ONLINE EVENT IS A FACT. </h1>
                <img src={hero} alt="hero"/>
                <p>
                Lorem ipsum dolor sit amet, 
                consectetuer adipiscing elit. 
                Aenean commodo ligula eget dolor. 
                Aenean massa. Cum sociis 
                natoque penatibus et magnis 
                dis parturient montes, nascetur ridiculus mus.
                </p>
                <button>Read More</button>
            </div>
            <div>
                <img src={Dots} alt="dots" className="Vline-1"></img>
            </div>
            <div className="aboutSection-left">
                <h2>Month / Year</h2>
                <h1> FIRST ONLINE EVENT IS A FACT. </h1>
                <img src={hero} alt="hero"/>
                <p>
                Lorem ipsum dolor sit amet, 
                consectetuer adipiscing elit. 
                Aenean commodo ligula eget dolor. 
                Aenean massa. Cum sociis 
                natoque penatibus et magnis 
                dis parturient montes, nascetur ridiculus mus.
                </p>
                <button>Read More</button>
            </div>
        </div>
    )
};
