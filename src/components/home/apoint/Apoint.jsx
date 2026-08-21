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

import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './apoint.css'

const Apoint = () => {
    const form = useRef()
    const [sent, setSent] = useState(false)
    const [error, setError] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault()

        setSent(false)
        setError(false)

        emailjs.sendForm(
            'service_zbrqupk',
            'template_clwyjcg',
            form.current,
            'UG2MtTYyXALbvj3na'
        )
        .then(() => {
            setSent(true)
            form.current.reset()
        })
        .catch((error) => {
            setError(true)
            console.log(error)
        })
    }

    return (
        <form id="Apoint" ref={form} className='apoint' onSubmit={sendEmail}>
            <h2>Send melding</h2>

            <div className="one">
                <input type="text" name="user_name" placeholder='Navn' required />
                <input type="tel" name="user_phone" placeholder='Telefon' required />
            </div>

            <div className="two">
                <input type="text" name="user_email" placeholder='E-post' />
                <input type="text" name="subject" placeholder='Hva gjelder henvendelsen?' />
            </div>

            <textarea name="message" placeholder='Melding' rows="5" required></textarea>

            <input type="submit" value="Send" />
            {sent && (
                <div className="form-success">
                    <div className="success-content">
                    <i className="fa fa-check"></i>
                    <div>
                        <strong>Meldingen er sendt!</strong>
                        <p>Vi tar kontakt med deg så snart som mulig.</p>
                    </div>
                </div>
                <button
                    type="button"
                    className="success-close"
                    onClick={() => setSent(false)}
                >
                    Lukk
                </button>
            </div>
            )}

            {error && (
                <div className="form-error">
                    Noe gikk galt. Vennligst prøv igjen.
                </div>
            )}
        </form>
    )
}

export default Apoint
