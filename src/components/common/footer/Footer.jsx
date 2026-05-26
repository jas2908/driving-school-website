import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="last">
                    <div className="container grid4">
                        <div className="touch">
                            <h2>Get In Touch</h2>
                            <div className="logo" >
                                <i className='fa fa-car'></i>
                                <span>Drivin</span>
                            </div>
                            <div className="call" >
                                <i className='fa fa-location-dot'></i>
                                <span>123 Street, New York, USA</span>
                            </div>
                            <div className="call" >
                                <i className='fa fa-phone'></i>
                                <span>+012 345 67890</span>
                            </div>
                            <div className="call" >
                                <i className='fa fa-envelope'></i>
                                <span>info@example.com</span>
                            </div>
                        </div>
                        <div className="links">
                            <h2>Quick Links</h2>
                            <ul>
                                <li><a href="">About US</a></li>
                                <li><a href="">Contact US</a></li>
                                <li><a href="">Our Services</a></li>
                                <li><a href="">Terms & Condition</a></li>
                                <li><a href="">Support</a></li>
                            </ul>
                        </div>
                        <div className="links">
                            <h2>Popular Links</h2>
                            <ul>
                                <li><a href="">About US</a></li>
                                <li><a href="">Contact US</a></li>
                                <li><a href="">Our Services</a></li>
                                <li><a href="">Terms & Condition</a></li>
                                <li><a href="">Support</a></li>
                            </ul>
                        </div>
                        <div className="subscribe">
                            <h2>Newsletter</h2>
                            <div className="input">
                                <input type="email" placeholder='Your Email Address' />
                                <button>Sign Up</button>
                            </div>
                            <h3>Follow Us</h3>
                            <ul className='social'>
                                <li>
                                    <a href=""><i className='fab fa-twitter'></i></a>
                                </li>
                                <li>
                                    <a href=""><i className='fab fa-facebook-f'></i></a>
                                </li>
                                <li>
                                    <a href=""><i className='fab fa-youtube'></i></a>
                                </li>
                                <li>
                                    <a href=""><i className='fab fa-linkedin-in'></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className='reserved'>
                    <p><strong>&copy; Driving School,</strong> All Right Reserved by Rodi Shammout</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
