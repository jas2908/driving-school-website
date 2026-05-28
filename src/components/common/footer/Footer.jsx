import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="last">
                    <div className="container grid4">
                        <div className="touch">
                            <h2>Ta kontakt</h2>
                            
                            <div className="call" >
                                <i className='fa fa-location-dot'></i>
                                <span>Grenseveien 107 0663 Oslo</span>
                            </div>
                            <div className="call" >
                                <i className='fa fa-phone'></i>
                                <span>91 53 00 17</span>
                            </div>
                            <div className="call" >
                                <i className='fa fa-envelope'></i>
                                <span>omar_pwa@hotmail.com</span>
                            </div>
                        </div>
                        <div className="links">
                            <h2>Snarveier</h2>
                            <ul>
                                <li><a href="">Om oss</a></li>
                                <li><a href="">Kontakt oss</a></li>
                                <li><a href="">Våre tjenester</a></li>
                                <li><a href="">Vilkår og betingelser</a></li>
                                <li><a href="">Støtte</a></li>
                            </ul>
                        </div>
                        <div className="links">
                            <h2>Nyttige Lenker</h2>
                            <ul>
                                <li><a href="https://www.vegvesen.no/forerkort/ta-forerkort/veien-til-forerkortet">Veien til førerkort</a></li>
                                <li><a href="https://www.vegvesen.no/">Statens vegvesen</a></li>                                
                            </ul>
                        </div>
                        <div className="subscribe">
                            {/* <h2>Newsletter</h2>
                            <div className="input">
                                <input type="email" placeholder='Your Email Address' />
                                <button>Sign Up</button>
                            </div> */}
                            <h3>Følg oss</h3>
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
                            {/* <div className="logo" >
                                <i className='fa fa-car'></i> 
                                <img src="./img/logo2.png" alt="" /> 
                                <span>Drivin</span> 
                            </div> */}
                        </div>
                        
                    </div>
                </div>
                <hr/>
                <div className='reserved'>
                    <p><strong>&copy; 2026,</strong> All Rights Reserved by JKaur</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
