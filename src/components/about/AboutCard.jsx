import React from 'react'
import Heading from '../common/Heading'
import './about.css'

const AboutCard = () => {
    return (
        <>
            <div className="about">
                <div className="container grid2 flexsm">
                    <div className="left">
                        <div className="img">
                            <img src="./img/about-2.jpg" alt="" />
                            <img src="./img/about-1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="right">
                        <Heading title='Om Oss' subtitle='Din trygge vei til førerkortet'/>
                        <div className="about-info">
                            <p>Hos oss står kvalitet, trygghet og personlig oppfølging i sentrum. Vi er en moderne trafikkskole som hjelper deg hele veien fra første kjøretime til bestått førerprøve.</p>
                            <p>Våre erfarne trafikklærere tilpasser opplæringen etter ditt nivå og din læringsstil, slik at du føler deg trygg og godt forberedt i trafikken. Vi tror at gode kjøreferdigheter bygges gjennom forståelse, praksis og en positiv læringsopplevelse.</p>
                            <div className="check">
                                <div className="one-check">
                                    <div className="fully">
                                        <i className='fa fa-check'></i>
                                        <span>Personlig oppfølging</span>
                                    </div>
                                    <div className="online">
                                        <i className='fa fa-check'></i>
                                        <span>Erfarne lærere</span>
                                    </div>
                                </div>
                                <div className="two-check">
                                    <div className="afordable ">
                                        <i className='fa fa-check'></i>
                                        <span>Fleksible kjøretimer</span>
                                    </div>
                                    <div className="best">
                                        <i className='fa fa-check'></i>
                                        <span>Konkurransedyktige priser</span>
                                    </div>
                                </div>
                            </div>
                            <div className="button flex">
                                <div className="button1">
                                    Les Mer
                                </div>
                                <div className="button2">
                                    <i className='fa fa-phone'></i>
                                    <span>+012 345 6789</span>
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
