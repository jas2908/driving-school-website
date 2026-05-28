/* import React from 'react'
import Heading from '../common/Heading'
import './courses.css'

const CoursesCard = () => {
    return (
        <>
            <div className="courses">
                <Heading title='Populære kurs' subtitle='Tilpasset opplæring hele veien til bestått oppkjøring.'/>
                <div className="container grid3 flexsm">
                    <div className="box">
                        <div className="light">
                            <span className='money'>Kr 1990,-</span>
                            <p className='title'>Trafikalt grunnkurs</p>
                            <p className='para'>Dette er første steg for alle nye sjåfører. Kurset gir deg grunnleggende kunnskap om trafikk, sikkerhet og ansvar i trafikken. Etter bestått kurs kan du starte med øvelseskjøring.</p>
                            <div className="box-in">
                                <div className="begin">
                                    <i className='fa fa-signal'></i>
                                    <span>Nybegynner</span>
                                </div>
                                <div className="week">
                                    <span>/</span>
                                    <i className='fa fa-calendar-alt'></i>
                                    <span>1 uke</span>
                                </div>
                            </div>
                        </div>
                        <div className="img-in">
                            <div className="over"></div>
                            <button>Read More</button>
                            <img src="./img/courses-1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="box">
                        <div className="light">
                            <span className='money'>Kr 850,- pr time</span>
                            <p className='title'>Klasse B – Personbil</p>
                            <p className='para'>Vårt mest populære kurs med komplett opplæring i bilkjøring, inkludert kjøretimer, teori og obligatoriske deler. Målet er å gjøre deg klar til oppkjøring på en effektiv måte.</p>
                            <div className="box-in">
                                <div className="begin">
                                    <i className='fa fa-signal'></i>
                                    <span>Alle nivåer</span>
                                </div>
                                <div className="week">
                                    <span>/</span>
                                    <i className='fa fa-calendar-alt'></i>
                                    <span>4–8 uker</span>
                                </div>
                            </div>
                        </div>
                        <div className="img-in">
                            <div className="over"></div>
                            <button>Read More</button>
                            <img src="./img/courses-2.jpg" alt="" />
                        </div>
                    </div>
                    <div className="box">
                        <div className="light">
                            <span className='money'>Kr 4990,-</span>
                            <p className='title'>Intensiv førerkortpakke</p>
                            <p className='para'>For deg som ønsker rask progresjon. Dette er et komprimert opplæringsløp hvor du tar hyppige kjøretimer og følger en tett plan mot førerkortet. Perfekt hvis du vil bli ferdig på kortere tid.</p>
                            <div className="box-in">
                                <div className="begin">
                                    <i className='fa fa-signal'></i>
                                    <span>Nybegynner</span>
                                </div>
                                <div className="week">
                                    <span>/</span>
                                    <i className='fa fa-calendar-alt'></i>
                                    <span>3 uker</span>
                                </div>
                            </div>
                        </div>
                        <div className="img-in">
                            <div className="over"></div>
                            <button>Read More</button>
                            <img src="./img/courses-3.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoursesCard
 */

import React from 'react'
import Heading from '../common/Heading'
import { Link } from 'react-router-dom'
import './courses.css'

const CoursesCard = ({ showButton = false }) => {

    

    return (
        <>
            <div className="courses">
                <Heading
                    title='Populære kurs'
                    subtitle='Tilpasset opplæring hele veien til bestått oppkjøring.'
                />

                <div className="container grid3 flexsm">

                    {/* CARD 1 */}
                    <div className="box">
                        <div className="light">
                            <span className='money'>Kr 1990,-</span>
                            <p className='title'>Trafikalt grunnkurs</p>
                            <p className='para'>
                                Dette er første steg for alle nye sjåfører. Kurset gir deg grunnleggende kunnskap om trafikk, sikkerhet og ansvar i trafikken. Etter bestått kurs kan du starte med øvelseskjøring.
                            </p>

                            <div className="box-in">
                                <div className="begin">
                                    <i className='fa fa-signal'></i>
                                    <span>Nybegynner</span>
                                </div>
                                <div className="week">
                                    <span>/</span>
                                    <i className='fa fa-calendar-alt'></i>
                                    <span>1 uke</span>
                                </div>
                            </div>
                        </div>

                        <div className="img-in">
                            <div className="over"></div>

                            

                            <img src="./img/courses-1.jpg" alt="" />
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="box">
                        <div className="light">
                            <span className='money'>Kr 850,- pr time</span>
                            <p className='title'>Klasse B – Personbil</p>
                            <p className='para'>
                                Vårt mest populære kurs med komplett opplæring i bilkjøring, inkludert kjøretimer, teori og obligatoriske deler. Målet er å gjøre deg klar til oppkjøring på en effektiv måte.
                            </p>

                            <div className="box-in">
                                <div className="begin">
                                    <i className='fa fa-signal'></i>
                                    <span>Alle nivåer</span>
                                </div>
                                <div className="week">
                                    <span>/</span>
                                    <i className='fa fa-calendar-alt'></i>
                                    <span>4–8 uker</span>
                                </div>
                            </div>
                        </div>

                        <div className="img-in">
                            <div className="over"></div>

                            

                            <img src="./img/courses-2.jpg" alt="" />
                        </div>
                    </div>

                    {/* CARD 3 */}
                    <div className="box">
                        <div className="light">
                            <span className='money'>Kr 4990,-</span>
                            <p className='title'>Intensiv førerkortpakke</p>
                            <p className='para'>
                                For deg som ønsker rask progresjon. Dette er et komprimert opplæringsløp hvor du tar hyppige kjøretimer og følger en tett plan mot førerkortet.
                            </p>

                            <div className="box-in">
                                <div className="begin">
                                    <i className='fa fa-signal'></i>
                                    <span>Nybegynner</span>
                                </div>
                                <div className="week">
                                    <span>/</span>
                                    <i className='fa fa-calendar-alt'></i>
                                    <span>3 uker</span>
                                </div>
                            </div>
                        </div>

                        <div className="img-in">
                            <div className="over"></div>

                            {/* <button onClick={scrollToPricing}>
                                Les mer
                            </button> */}

                            <img src="./img/courses-3.jpg" alt="" />
                        </div>
                    </div>

                </div>
                {showButton && (
    <div className="les-mer-wrapper">
        <Link to="/courses" className="button1">
            Les Mer
        </Link>
    </div>
)}
            </div>
        </>
    )
}

export default CoursesCard