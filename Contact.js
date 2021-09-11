import React from 'react'

export default function Contact() {
    return (
    <section className="contact">
        <div className="content">
            <h2>Contact Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
        </div>
        <div className="containerForm">
            <div className="contactInfo">
                <div className="box">
                    <div className="iconForm"><i class="far fa-address-card"></i></div>
                    <div className="text">
                        <h3>Address</h3>
                        <p>Karachi, Pakistan <br/> Muhammad Ali <br/> Full stack website developer</p>
                    </div>
                </div>
                <div className="box">
                    <div className="iconForm"><i class="fas fa-phone-square-alt"></i></div>
                    <div className="text">
                        <h3>Phone</h3>
                        <p>+92 334 210 7659</p>
                    </div>
                </div>
                <div className="box">
                    <div className="iconForm"><i class="far fa-envelope"></i></div>
                    <div className="text">
                        <h3>email</h3>
                        <p>Contact@muhdali.com</p>
                    </div>
                </div>   
            </div>
            <div className="contactForm">
                <h2>Send Message</h2>
                <div className="inputBox">
                    <input type="text" placeHolder="Full name"></input>
                </div>
                <div className="inputBox">
                    <input type="email" placeHolder="Email address"></input>
                </div>
                <div className="inputBox">
                    <span>Your message to...</span>
                    <textarea></textarea>
                </div>
                <div className="inputBox">
                    <input type="submit" value="Send"></input>
                </div>
            </div>
        </div>
    </section>
    )
}
