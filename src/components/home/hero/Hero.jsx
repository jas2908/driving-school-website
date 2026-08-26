import React from 'react'
import './hero.css'
import { useHistory } from 'react-router-dom'

const Hero = () => {
    const history = useHistory()
    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="overlay"></div>
                    <div className="text">
                        <h1>Alltid fremover</h1>
                        <div className="button">
                            <button className='one'
                            onClick={() => history.push('/about-details')}
                            >
                                Les mer
                                </button>
                            <button className='two'
                            onClick={() => history.push('/Courses')}
                            >
                                Prisliste
                            </button>
                        </div>
                    </div>
                </div>
            </section>            
        </>
    )
}

export default Hero
