/* import React from 'react'
import './apoint.css' */

/* const Apoint = () => {
    return (
        <>
            <form className='apoint'>
                <h2>Bestill time</h2>
                <div className="one">
                    <input type="text" placeholder='Navn' />
                    <input type="email" placeholder='Epost' />  
                </div>
                <div className="two">
                    <input type="text" placeholder='Kurs' />
                    <input type="text" placeholder='Bil Type' />
                </div>
                <textarea placeholder='Melding' cols="30" rows="5"></textarea>
                <input type="button" value="Send" />
            </form>
        </>
    )
}

export default Apoint */

import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './apoint.css'

const Apoint = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_zbrqupk',
            'template_clwyjcg',
            form.current,
            'UG2MtTYyXALbvj3na'
        )
        .then(() => {
            alert('Message sent successfully!')
            form.current.reset()
        })
        .catch((error) => {
            alert('Failed to send message')
            console.log(error)
        })
    }

    return (
        <form ref={form} className='apoint' onSubmit={sendEmail}>
            <h2>Bestill time</h2>

            <div className="one">
                <input type="text" name="user_name" placeholder='Navn' required />
                <input type="email" name="user_email" placeholder='Epost' required />
            </div>

            <div className="two">
                <input type="text" name="course" placeholder='Kurs' />
                <input type="text" name="car_type" placeholder='Bil Type' />
            </div>

            <textarea name="message" placeholder='Melding' rows="5" required></textarea>

            <input type="submit" value="Send" />
        </form>
    )
}

export default Apoint
