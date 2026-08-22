import React from 'react'
import Back from '../common/Back'
import './schoolRules.css'
import { Link } from 'react-router-dom'

const SchoolRules = () => {
    return (
        <>
            <Back title='Skolereglement' />

            <div className="school-rules">
                <div className="container">
                    <div className="rules-content">

                        <h1>Skolereglement</h1>
                        <h2>Østensjø Trafikkskole</h2>

                        <p>
                            Velkommen som elev ved vår trafikkskole – vi håper du vil trives!
                        </p>

                        <p>
                            Det er viktig at du møter til avtalt tid. Avbestilling må skje senest
                            1 virkedag før, innen kl. 12.00. Glemmer du dette må du dessverre betale
                            for timen. Sikkerhetskurs på øvingsbane og vei må avbestilles senest
                            4 virkedager før.
                        </p>

                        <p>
                            Er du forsinket til avtalt tid, gi oss beskjed. Vi venter i 20 min,
                            etter dette kan vi ha forlatt oppmøtested/kjøreskole. Ønsker du annet
                            oppmøtested går det av din tid.
                        </p>

                        <p>
                            Det er lurt å bruke sko med tynne såler.
                        </p>

                        <p>
                            For at alle skal trives i bilen, er god hygiene viktig.
                        </p>

                        <p>
                            En kjøretime er på 45 minutter og består av klargjøring,
                            kjøreundervisning og oppsummering.
                        </p>

                        <h3>Obligatorisk opplæring</h3>

                        <ul>
                            <li>2 trinnvurderingstimer av 45/60 min.</li>
                            <li>Sikkerhetskurs på øvingsbane, 4 timer.</li>
                            <li>Sikkerhetskurs på vei, 13 timer.</li>
                            <li>2 timer innledende teori om risiko.</li>
                            <li>5 timer kjøring.</li>
                            <li>4 timer hvor 1 time kan benyttes til å planlegge tur.</li>
                            <li>2 timer oppsummering og refleksjon.</li>
                        </ul>

                        <p>
                            Kjøretimer avtales med din trafikklærer.
                        </p>

                        <p>
                            De over 25 år må gjennomføre førstehjelpskurs før oppkjøring.
                            Etter 1. november må de også ta mørkedemo før oppkjøring.
                            Dette er ditt ansvar.
                        </p>

                        <p>
                            <strong>Dagen for oppkjøring:</strong> Husk gyldig legitimasjon,
                            gjerne pass. VIKTIG!
                        </p>

                        <p>
                            Husk å sende inn søknad om førerkort på{' '}
                            <a
                                href="https://www.vegvesen.no/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                www.vegvesen.no
                            </a>.
                        </p>

                        <p>
                            Benytter du briller/linser, skal attest fra optiker leveres
                            til trafikkstasjonen.
                        </p>

                        <p>
                            <strong>Priser:</strong> Se våre{' '}
                            <Link to="/courses">priser og kurs</Link>.
                        </p>

                        <p>
                            Betaling for timer gjøres via Tabselev.no. Skal betales samme dag
                            som timen gjennomføres, eventuelt i forkant.
                        </p>

                        <p>
                            Førerprøven din består i tillegg til kjøring også av spørsmål der
                            du blir bedt om å kontrollere for eksempel lys, bremser, varsellamper
                            etc. Full oversikt får du ved å logge deg inn på Tabselev.no, der
                            finner du oversikten under dokumenter.
                        </p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SchoolRules