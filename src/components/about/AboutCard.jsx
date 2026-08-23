import React from 'react'
import Heading from '../common/Heading'
import { Link } from "react-router-dom";
import './about.css'

const AboutCard = () => {
    return (
        <>
            <div className="about">
                <div className="container grid2 flexsm">
                    <div className="left">
                        <div className="img">                             
                            <img src= {process.env.PUBLIC_URL + "/img/about-3.jpg" } alt="" />
                        </div>
                    </div>
                    <div className="right">
                        <Heading title='Om Oss' subtitle='Hvorfor velge oss som din kjøreskole i Oslo?'/>
                        <div className="about-info">
                            {/* <p>Å velge riktig kjøreskole handler om mer enn pris og beliggenhet — det handler om å bli sett, forstått og tatt på alvor gjennom hele opplæringen. Hos oss får du ikke bare en kjørelærer, du får en trygg veileder som brenner for at akkurat du skal lykkes.</p> */}
                            <p>Med over 14 års erfaring fra trafikkopplæring i Oslo og omegn vet vi at ingen elever er like. Derfor bygger vi opplæringen på pedagogikk, tillit og ekte dialog — ikke en standardmal som skal passe alle.</p>
                            <div className="check">
                                <div className="one-check">
                                    <div className="fully">
                                        <i className='fa fa-check'></i>
                                        <span>Personlig oppfølging</span>
                                    </div>
                                    <div className="online">
                                        <i className='fa fa-check'></i>
                                        <span>Pedagogisk tilnærming</span>
                                    </div>
                                </div>
                                <div className="two-check">
                                    <div className="afordable ">
                                        <i className='fa fa-check'></i>
                                        <span>Trygg og rolig kjøring</span>
                                    </div>
                                    <div className="best">
                                        <i className='fa fa-check'></i>
                                        <span>God dialog</span>
                                    </div>
                                </div>
                            </div>
                            <div className="button flex">
                                <Link to="/about-details" className="button1">
                                    Les Mer
                                </Link>
                                <div className="button2">
                                    <i className='fa fa-phone'></i>
                                    <span>91 53 00 17</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutCard
