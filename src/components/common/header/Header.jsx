import React, { useState } from 'react'
import './header.css'
import { Link, useHistory } from 'react-router-dom';

const Header = () => {
    
    const [navlist, setNavlist] = useState(false)
    const history = useHistory()

    const goToAppointment = () => {
        history.push('/')

        setTimeout(() => {
            const appointment = document.getElementById('Apoint')

            if (appointment) {
                appointment.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            }
        }, 100)
    }
    
    return (
        <>
            <header>
                <div className="top flex">
                    <div className="left">
                        <i className='fa fa-location-dot'></i>
                        <span className='street'>Grenseveien 107A 0667 Oslo</span>                        
                    </div>
                    <div className="right flex">
                        <div>
                            <i className='fa fa-phone'></i>
                            <span className='phone'>40 34 40 40</span>
                        </div>
                        <ul className='flex'>
                            <li>
                                <a
                                    href="https://www.facebook.com/profile.php?id=61591738204896"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className='fab fa-facebook-f'></i>
                                </a>
                            </li>                            
                            <li>
                                <a
                                    href="https://www.instagram.com/ostensjo.trafikkskole/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className='fab fa-instagram'></i>
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <div className="head flex">
                    <div className="logo" onClick={goToAppointment}>
                        <img
                            src={process.env.PUBLIC_URL + "/img/logo2.png"}
                            alt="Østensjø Trafikkskole"
                        />
                    </div>
                    <div className="right flex">
                        <div className="nav">
                            <ul className={navlist ? "small flex1" : "flex"}>
                                <li><Link to='/'>Hjem</Link></li>
                                <li><Link to='/about-details'>Om Oss</Link></li>
                                <li><Link to='/courses'>Kurs/Pris</Link></li>
                                <li><Link to='/elevinfo'>Elevinfo</Link></li>
                                <li><Link to='/faq'>FAQ</Link></li>
                                {/* <li className='pages'><span>Pages</span>
                                    <i class="fa fa-chevron-down arrow"></i>
                                    <div className='inside'>
                                        <li><Link to='/features'>Features</Link></li>
                                        <li><Link to='/appointment'>Appointment</Link></li>
                                        <li><Link to='/our-team'>Our Team</Link></li>
                                        <li><Link to='/testimonial'>Testimonial</Link></li>
                                        <li><Link to='/error'>404 Page</Link></li> 
                                    </div> */}
                                {/* </li> */}
                                <li><Link to='/contact'>Kontakt</Link></li>
                            </ul>
                        </div>                        
                    </div>
                    <div className="toggle">
                        <button onClick={() => setNavlist(!navlist)}>
                            {navlist ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header

