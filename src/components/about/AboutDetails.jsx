import React from 'react'
import Heading from '../common/Heading'
import './aboutDetails.css'
import Back from '../common/Back'

const AboutDetails = () => {
    return (
        <>
            <Back title="Om Oss" />
            <div className="about-details">

                {/* INTRO */}
                <div className="container about-details-intro">
                    <Heading
                        title="Om Oss"
                        subtitle="Hvorfor velge oss som din kjøreskole i Oslo?"
                    />

                    <div className="about-details-intro-content">
                        <div className="about-details-images">
                            <img
                                src={process.env.PUBLIC_URL + "/img/about-2.jpg"}
                                alt="Kjøreskole"
                            />
                            <img
                                src={process.env.PUBLIC_URL + "/img/about-1.jpg"}
                                alt="Kjøreopplæring"
                            />
                        </div>

                        <div className="about-details-text">
                            <p>
                                Å velge riktig kjøreskole handler om mer enn pris og
                                beliggenhet — det handler om å bli sett, forstått og
                                tatt på alvor gjennom hele opplæringen.
                            </p>

                            <p>
                                Hos oss får du ikke bare en kjørelærer, du får en
                                trygg veileder som brenner for at akkurat du skal
                                lykkes.
                            </p>

                            <p>
                                Med over 14 års erfaring fra trafikkopplæring i Oslo
                                og omegn vet vi at ingen elever er like. Derfor
                                bygger vi opplæringen på pedagogikk, tillit og ekte
                                dialog — ikke en standardmal som skal passe alle.
                            </p>
                        </div>
                    </div>
                </div>


                {/* WHY US */}
                
                <div className="about-details-cards">

                <div className="about-detail-card">
                    <div className="about-detail-icon">
                        <i className="fa fa-graduation-cap"></i>
                    </div>
                    <div>
                        <h3>Pedagogikk som faktisk fungerer</h3>
                        <p>
                            Våre kjørelærere har solid pedagogisk kompetanse og lang
                            erfaring med å tilpasse undervisningen til hver enkelt elev.
                            Vi tilpasser opplæringen etter hvordan du lærer best.
                        </p>
                    </div>
                </div>

                <div className="about-detail-card">
                    <div className="about-detail-icon">
                        <i className="fa fa-user"></i>
                    </div>
                    <div>
                        <h3>Vi ser deg – ikke bare bilen du kjører</h3>
                        <p>
                            Vi skaper en trygg og rolig atmosfære der du tør å spørre,
                            gjøre feil og lære. Tillit og trygghet står sentralt fra
                            første kjøretime.
                        </p>
                    </div>
                </div>

                <div className="about-detail-card">
                    <div className="about-detail-icon">
                        <i className="fa fa-comments"></i>
                    </div>
                    <div>
                        <h3>God dialog, hele veien</h3>
                        <p>
                            Gjennom åpen og ærlig kommunikasjon vet du alltid hvor du
                            står, hva du mestrer og hva vi skal jobbe videre med.
                        </p>
                    </div>
                </div>

                <div className="about-detail-card">
                    <div className="about-detail-icon">
                        <i className="fa fa-star"></i>
                    </div>
                    <div>
                        <h3>Kvalitet du kan stole på</h3>
                        <p>
                            Vi fokuserer på både tekniske ferdigheter og trafikkforståelse
                            som gir deg et godt grunnlag for trygg kjøring resten av livet.
                        </p>
                    </div>
                </div>

                <div className="about-detail-card">
                    <div className="about-detail-icon">
                        <i className="fa fa-tag"></i>
                    </div>
                    <div>
                        <h3>Konkurransedyktige priser</h3>
                        <p>
                            Du får god verdi for pengene, uten skjulte kostnader eller
                            overraskelser på fakturaen.
                        </p>
                    </div>
                </div>

                <div className="about-detail-card">
                    <div className="about-detail-icon">
                        <i className="fa fa-users"></i>
                    </div>
                    <div>
                        <h3>Gratis veiledning for ledsagere</h3>
                        <p>
                            Vi tilbyr gratis veiledning til ledsagere slik at
                            øvelseskjøringen blir trygg, effektiv og riktig fra start.
                        </p>
                    </div>
                </div>

            </div>


                {/* CONCLUSION */}
                <div className="container about-details-conclusion">
                    <h2>Resultatet?</h2>
                    <p>
                        En trygg, kompetent sjåfør og en positiv opplevelse hele veien.
                    </p>
                </div>

            </div>
        </>
    )
}

export default AboutDetails