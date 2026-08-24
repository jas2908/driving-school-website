import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Link } from 'react-router-dom'
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
        <form
            id="Apoint"
            ref={form}
            className="apoint"
            onSubmit={sendEmail}
        >

            <div className="apoint-intro">
                <p>
                    Hos Østensjø Trafikkskole garanterer vi at du får personlig
                    oppfølging hele veien, og opplæringen vil tilpasses dine
                    forutsetninger og behov. Du skal føle deg trygg og ivaretatt
                    når du tar førerkortet hos oss.
                </p>

                <p>
                    Har du spørsmål er det bare å ta kontakt med oss i dag!
                </p>
            </div>

            <div className="one">
                <input
                    type="text"
                    name="user_name"
                    placeholder="Navn"
                    required
                />

                <input
                    type="tel"
                    name="user_phone"
                    placeholder="Telefon"
                    required
                />
            </div>

            <div className="two">
                <input
                    type="email"
                    name="user_email"
                    placeholder="E-post"
                />

                <input
                    type="text"
                    name="subject"
                    placeholder="Hva gjelder henvendelsen?"
                />
            </div>

            <textarea
                name="message"
                placeholder="Melding"
                rows="5"
                required
            ></textarea>

            {/* PRIVACY INFORMATION */}
            <div className="privacy-consent">
                <p>
                    Ved å sende inn skjemaet bekrefter du at du har lest vår{' '}
                    <Link to="/privacy">
                        personvernerklæring
                    </Link>.
                </p>
            </div>

            <input
                type="submit"
                value="Send"
            />

            {sent && (
                <div className="form-success">
                    <div className="success-content">
                        <i className="fa fa-check"></i>

                        <div>
                            <strong>Meldingen er sendt!</strong>
                            <p>
                                Vi tar kontakt med deg så snart som mulig.
                            </p>
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