import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="last">
                    <div className="container grid4">

                        {/* CONTACT */}
                        <div className="touch">
                            <h2>Ta kontakt</h2>

                            <div className="call">
                                <i className='fa fa-location-dot'></i>
                                <span>Grenseveien 107A, 0667 Oslo</span>
                            </div>

                            <div className="call">
                                <i className='fa fa-phone'></i>
                                <span>91 53 00 17</span>
                            </div>

                            <div className="call">
                                <i className='fa fa-envelope'></i>
                                <span>ostensjotrafikkskole@hotmail.com</span>
                            </div>
                        </div>

                        {/* SHORTCUTS */}
                        <div className="links">
                            <h2>Snarveier</h2>

                            <ul>
                                <li><a href="">Om oss</a></li>
                                <li><a href="">Kontakt oss</a></li>
                                {/* <li><a href="">Våre tjenester</a></li>
                                <li><a href="">Vilkår og betingelser</a></li> */}
                            </ul>
                        </div>

                        {/* USEFUL LINKS + LOGOS */}
                        <div className="links useful-links">
                            <h2>Nyttige Lenker</h2>

                            <ul>
                                <li>
                                    <a href="https://www.vegvesen.no/forerkort/ta-forerkort/veien-til-forerkortet">
                                        Veien til førerkort
                                    </a>
                                </li>

                                <li>
                                    <a href="https://www.vegvesen.no/">
                                        Statens vegvesen
                                    </a>
                                </li>
                            </ul>

                            <div className="footer-logos">
                                <div className="image1">
                                    <img
                                        src={process.env.PUBLIC_URL + "/img/footer1.png"}
                                        alt="Østensjø Trafikkskole"
                                    />
                                </div>

                                <div className="image2">
                                    <img
                                        src={process.env.PUBLIC_URL + "/img/footer2.png"}
                                        alt="Østensjø Trafikkskole"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* SOCIAL */}
                        <div className="subscribe">
                            <h2>Følg oss</h2>

                            <ul className='social'>
                                <li>
                                    <a
                                        href="https://www.facebook.com/profile.php?id=61591738204896"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Facebook"
                                    >
                                        <i className='fab fa-facebook-f'></i>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://www.instagram.com/ostensjo.trafikkskole/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Instagram"
                                    >
                                        <i className='fab fa-instagram'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                <hr />

                <div className='reserved'>
                    <p>
                        <strong>&copy; 2026,</strong> All Rights Reserved by JKaur
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer