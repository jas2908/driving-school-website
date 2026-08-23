import React from 'react'
import Back from '../common/Back'
import './elevinfo.css'

const ElevInfo = () => {
    return (
        <>
            <Back title='Elevinfo' />

            <div className="elevinfo">
                <div className="container">

                    <div className="elevinfo-intro">
                        <h1>Elevinfo</h1>
                        <p>
                            Her finner du viktig informasjon om opplæringen,
                            øvelseskjøring og veien mot førerkortet.
                        </p>
                    </div>


                    <section className="elevinfo-section">
                        <h2>Hovedmål</h2>

                        <p>
                            Etter å ha gjennomført trafikkopplæringen skal eleven
                            ha den kompetansen som er nødvendig for å kjøre på
                            en ansvarlig måte.
                        </p>

                        <p>
                            Eleven skal ha de kunnskaper og ferdigheter,
                            den selvinnsikt og risikoforståelse som er nødvendig
                            for å kjøre på en måte som:
                        </p>

                        <ul>
                            <li>Er trafikksikker</li>
                            <li>Gir god samhandling</li>
                            <li>Fører til god trafikkavvikling</li>
                            <li>Tar hensyn til helse, miljø og andres behov</li>
                            <li>Er i samsvar med gjeldende regelverk</li>
                        </ul>

                        <div className="elevinfo-important">
                            <strong>NB!</strong>
                            <span>
                                All obligatorisk opplæring må tas hos kjøreskolen.
                            </span>
                        </div>
                    </section>


                    <section className="elevinfo-section">
                        <h2>Reisen mot førerkortet</h2>

                        <p>
                            Veien til førerkortet starter med Trafikalt
                            Grunnkurs (TGK).
                        </p>

                        <p>
                            Begynn med øvelseskjøring så raskt og hyppig som
                            mulig for å oppnå god erfaring med å ferdes i
                            trafikken. Øvelseskjøringen kan gjennomføres
                            privat eller via skoleundervisning.
                        </p>

                        <ul>
                            <li>
                                Start gjerne med de første kjøretimene hos
                                en trafikkskole for å skape trygghet og
                                etablere gode kjørevaner.
                            </li>

                            <li>
                                Fortsett å kjøre mye privat for å oppnå
                                nødvendig mengdetrening.
                            </li>

                            <li>
                                Start tidlig med teoriforståelse.
                            </li>

                            <li>
                                Vurder risikoen og diskuter trafikkforhold
                                med de rundt deg.
                            </li>
                        </ul>
                    </section>


                    <section className="elevinfo-section">
                        <h2>Krav</h2>

                        <h3>Øvelseskjøring</h3>

                        <p>
                            Øvelseskjøring må følge reglene som gjelder for
                            den aktuelle førerkortklassen.
                        </p>

                        <p>
                            For klasse B kan øvelseskjøring normalt starte
                            fra fylte 16 år når kravene for øvelseskjøring
                            er oppfylt.
                        </p>

                        <p>
                            Dersom du er idømt sperrefrist, gjelder det
                            egne regler for når du kan begynne å
                            øvelseskjøre.
                        </p>
                    </section>


                    <section className="elevinfo-section">
                        <h2>Krav til privat ledsager</h2>

                        <p>
                            Den som skal være ledsager under privat
                            øvelseskjøring må:
                        </p>

                        <ul>
                            <li>Ha fylt 25 år</li>
                            <li>
                                Ha hatt førerkort i samme klasse som
                                eleven øvelseskjører i, sammenhengende
                                de siste 5 årene
                            </li>
                        </ul>
                    </section>


                    <section className="elevinfo-section">
                        <h2>Krav til privat øvingsvogn</h2>

                        <p>
                            Ved privat øvelseskjøring må kjøretøyet være
                            riktig utstyrt og merket.
                        </p>

                        <ul>
                            <li>
                                Bilen skal være merket bak med en godt
                                synlig rød L på hvit bakgrunn.
                            </li>

                            <li>
                                Bilen skal ha ekstra speil slik at
                                ledsageren har tilstrekkelig utsyn bakover.
                            </li>
                        </ul>
                    </section>


                    <section className="elevinfo-section">
                        <h2>Krav til trafikkskolen</h2>

                        <p>
                            En godkjent trafikkskole er underlagt tilsyn
                            av Statens vegvesen og skal oppfylle kravene
                            som gjelder for undervisning og drift av
                            trafikkskole.
                        </p>

                        <p>
                            Trafikkskolens undervisning skal gjennomføres
                            av godkjente trafikklærere, og obligatorisk
                            opplæring skal gjennomføres hos godkjent
                            undervisningssted.
                        </p>
                    </section>


                    <section className="elevinfo-section">
                        <h2>Krav til trafikklærer</h2>

                        <p>
                            Trafikklæreren skal ha nødvendig utdanning og
                            godkjenning for å kunne undervise i den aktuelle
                            førerkortklassen.
                        </p>

                        <p>
                            Trafikklæreren følger elevens utvikling og
                            tilpasser opplæringen etter elevens ferdigheter
                            og behov.
                        </p>
                    </section>


                    <section className="elevinfo-section">
                        <h2>Krav til trafikkskolens øvingsvogn</h2>

                        <p>
                            Trafikkskolens kjøretøy skal være godkjent og
                            utstyrt for undervisning. Kjøretøyet gir
                            trafikklæreren mulighet til å observere eleven
                            og bistå ved behov under kjøringen.
                        </p>
                    </section>


                    <section className="elevinfo-contact">
                        <h2>Har du spørsmål?</h2>

                        <p>
                            Ta gjerne kontakt med oss dersom du er usikker
                            på hva som gjelder for din opplæring.
                        </p>

                        <a href="/#/contact" className="elevinfo-button">
                            Kontakt oss
                        </a>
                    </section>

                </div>
            </div>
        </>
    )
}

export default ElevInfo