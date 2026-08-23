import React, { useState } from 'react'
import Back from '../common/Back'
import './faq.css'

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
        {
            question: 'Når bør jeg starte med kjøretimer?',
            answer: (
                <>
                    <strong>Det lønner seg å starte tidlig.</strong> Vi anbefaler at du kommer i gang med opplæringen så tidlig som mulig etter at du har oppfylt kravene for øvelseskjøring.
                    <br /><br />
                    Når du starter tidlig, får du bedre tid til å bygge erfaring og bli trygg bak rattet. Trafikklæreren kan også tidlig kartlegge nivået ditt og hjelpe deg med å finne ut hva du bør øve mest på.
                    <br /><br />
                    Kombiner gjerne kjøretimer med privat øvelseskjøring. Da får du mulighet til å repetere det du lærer hos oss og utvikle ferdighetene dine over tid.
                </>
            )
        },
        {
            question: 'Hvor gammel må jeg være for å øvelseskjøre?',
            answer: (
                <>
                    Du må ha fylt <strong>15 år</strong> for å kunne begynne å øvelseskjøre.
                    <br /><br />
                    For førerkort klasse B kan du normalt begynne å øvelseskjøre fra fylte <strong>16 år</strong>, forutsatt at kravene for øvelseskjøring er oppfylt.
                    <br /><br />
                    Å starte tidlig gir deg god tid til å få erfaring, bli trygg i ulike trafikksituasjoner og utvikle gode kjørevaner før førerprøven.
                </>
            )
        },
        {
            question: 'Må alle ha trafikalt grunnkurs før de kan begynne å kjøre?',
            answer: (
                <>
                    Som hovedregel må du ha gjennomført <strong>trafikalt grunnkurs</strong> før du kan øvelseskjøre.
                    <br /><br />
                    Det finnes enkelte unntak. Blant annet er personer som har fylt 25 år fritatt fra deler av kravet til trafikalt grunnkurs. Det kan likevel være andre obligatoriske deler av opplæringen som må gjennomføres.
                    <br /><br />
                    Er du usikker på hva som gjelder for deg, anbefaler vi at du tar kontakt med oss eller sjekker oppdatert informasjon hos Statens vegvesen.
                </>
            )
        },
        {
            question: 'Hva bør jeg tenke på når jeg øvelseskjører?',
            answer: (
                <>
                    <strong>Øv regelmessig og bruk det du lærer på trafikkskolen.</strong> Etter en kjøretime er det en stor fordel å fortsette treningen sammen med en ledsager.
                    <br /><br />
                    Prøv å repetere øvelsene og situasjonene du har jobbet med sammen med trafikklæreren. Jo mer variert erfaring du får, desto tryggere blir du i trafikken.
                    <br /><br />
                    Husk at målet ikke bare er å lære bilen å kjenne, men også å utvikle gode rutiner, trafikkforståelse og evnen til å ta gode og trygge valg.
                </>
            )
        },
        {
            question: 'Hvor mange kjøretimer trenger jeg for å få førerkort?',
            answer: (
                <>
                    Det finnes ikke et bestemt antall kjøretimer som passer for alle elever.
                    <br /><br />
                    Hvor mye opplæring du trenger avhenger blant annet av hvor mye erfaring du har fra før, hvor ofte du øvelseskjører privat og hvor raskt du utvikler de ferdighetene som kreves.
                    <br /><br />
                    Hos Østensjø Trafikkskole følger vi utviklingen din underveis og tilpasser opplæringen etter dine forutsetninger og behov. Målet er at du skal bli en trygg og selvstendig sjåfør – ikke bare bestå førerprøven.
                </>
            )
        },
        {
            question: 'Hvor lang tid tar det å ta førerkort?',
            answer: (
                <>
                    Dette varierer fra elev til elev. Hvor lang tid opplæringen tar påvirkes blant annet av hvor ofte du har kjøretimer, hvor mye du øvelseskjører privat og hvor raskt du blir trygg på de ulike delene av opplæringen.
                    <br /><br />
                    Regelmessig trening er derfor en stor fordel. Dersom du kombinerer kjøretimer hos oss med god mengdetrening hjemme, kan du få et bedre og jevnere læringsforløp.
                    <br /><br />
                    Vi hjelper deg med å planlegge opplæringen ut fra ditt nivå og dine mål.
                </>
            )
        },
        {
            question: 'Hva er trafikant i mørket (mørkedemo), og når gjennomføres den?',
            answer: (
                <>
                    <strong>Trafikant i mørket</strong>, ofte kalt mørkedemo eller mørkekjøring, er en obligatorisk del av føreropplæringen.
                    <br /><br />
                    Mørkedemo gjennomføres ikke i perioden fra <strong>16. mars til 31. oktober</strong>. Dersom du tar trafikalt grunnkurs i denne perioden, blir mørkedemo gjennomført senere når forholdene tillater det.
                    <br /><br />
                    Du kan likevel fortsette med øvelseskjøring og annen opplæring gjennom hele året.
                </>
            )
        },
        {
            question: 'Hva skjer hvis jeg tar førerkort uten å ha gjennomført mørkekjøring?',
            answer: (
                <>
                    Dersom mørkekjøring ikke er gjennomført før førerprøven, kan det gjelde en tidsbegrensning på førerretten.
                    <br /><br />
                    Du må derfor sørge for at mørkekjøringen gjennomføres innen fristen som gjelder for deg. Etter gjennomført mørkekjøring kan det være nødvendig å følge opp førerkortet hos Statens vegvesen.
                    <br /><br />
                    Reglene kan endres, så vi anbefaler at du sjekker den aktuelle informasjonen hos Statens vegvesen dersom dette gjelder deg.
                </>
            )
        },
        {
            question: 'Hvor kan jeg øve til teoriprøven?',
            answer: (
                <>
                    Du kan øve til teoriprøven på{' '}
                    <a
                        href="https://teoritentamen.no/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Teoritentamen.no
                    </a>
                    .
                    <br /><br />
                    Regelmessig teoriøving gjør det lettere å forstå trafikksituasjoner, skilt og regler, og kan være en god forberedelse til teoriprøven.
                </>
            )
        },
        {
            question: 'Hvor søker jeg om førerkort?',
            answer: (
                <>
                    Søknad om førerkort og annen informasjon om føreropplæringen finner du hos{' '}
                    <a
                        href="https://www.vegvesen.no/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Statens vegvesen
                    </a>
                    .
                    <br /><br />
                    Vi anbefaler at du sender inn søknaden i god tid før førerprøven, slik at alt er klart når du nærmer deg oppkjøringen.
                </>
            )
        }
    ]

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <>
            <Back title='FAQ' />

            <div className="faq">
                <div className="container">
                    <div className="faq-content">

                        <h1>Ofte stilte spørsmål</h1>

                        <div className="faq-list">

                            {faqs.map((faq, index) => (
                                <div className="faq-item" key={index}>

                                    <button
                                        type="button"
                                        className={`faq-question ${
                                            openIndex === index ? 'active' : ''
                                        }`}
                                        onClick={() => toggleFaq(index)}
                                        aria-expanded={openIndex === index}
                                    >
                                        <span>{faq.question}</span>

                                        <i
                                            className={`fa ${
                                                openIndex === index
                                                    ? 'fa-minus'
                                                    : 'fa-plus'
                                            }`}
                                        ></i>
                                    </button>

                                    {openIndex === index && (
                                        <div className="faq-answer">
                                            <p>{faq.answer}</p>
                                        </div>
                                    )}

                                </div>
                            ))}

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq