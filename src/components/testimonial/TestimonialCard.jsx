import React, { useState } from 'react'
import Heading from '../common/Heading'
import './testimonial.css'

const TestimonialCard = () => {

    const [active, setActive] = useState(0)
    const [expanded, setExpanded] = useState(false)

    const testimonials = [
        {
            name: "Yaamini Radhakrishnan",
            fullReview: "I had an amazing experience with Østensjø Trafikkskole! From start to finish, everything was professional, well-organized, and supportive. A special thanks to my instructor Omar, who was absolutely fantastic. He explained everything clearly, stayed calm in every situation, and made me feel confident behind the wheel. His teaching style is patient, motivating, and very effective — I genuinely looked forward to every lesson. I’m really grateful for the guidance and the positive learning environment. I couldn’t have asked for a better driving school or a better instructor. Highly recommended!",
            shortReview: "I had an amazing experience with Østensjø Trafikkskole! My instructor Omar was absolutely fantastic. He explained everything clearly, stayed calm in every situation, and made me feel confident behind the wheel."
        },
        {
            name: "K TM",
            fullReview: "Great lesson structure and clear explanations throughout. The step-by-step approach really helped me build confidence and pass my driving exam in first try. Excellent driving instructor — calm, professional, and very supportive throughout the learning process. Lessons were clear, helpful, and confidence-building. Thanks to the great teaching, I passed my driving test successfully. Highly recommended!",
            shortReview: "Great lesson structure and clear explanations throughout. The step-by-step approach really helped me build confidence and pass my driving exam on the first try."
        },
        {
            name: "Jestine Batapa",
            fullReview: "Transferred from other Trafikkskole since I am not satisfied. Best decision ever made because I Passed the exam with the big help from this Trafikksole and lærer Omar! Best instructor, giving a lot of helpful tips and very patient and will definitely help you in all possible way he can. Highly recommended!",
            shortReview: "I transferred from another trafikkskole and this was the best decision ever. I passed my exam with the great help of instructor Omar. He is patient, gives helpful tips, and always does his best to help."
        }
    ]

    const testimonial = testimonials[active]

    const changeTestimonial = (index) => {
        setActive(index)
        setExpanded(false)
    }

    return (
        <div className="testimonial container">

            <Heading
                title="Hva sier elevene våre?"
                subtitle="Tilbakemeldinger fra våre elever"
            />

            {/* GOOGLE SUMMARY */}
            <div className="google-summary">

                <div className="google-rating">
                    <strong>5.0</strong>
                    <span className="stars">★★★★★</span>
                    <span>200+ anmeldelser på Google</span>
                </div>

                <div className="google-topics">
                    <span>Trygg bak rattet</span>
                    <span>Tilpasset opplæring</span>
                    <span>Dyktige lærere</span>
                    <span>Bestått på første forsøk</span>
                </div>

            </div>

            {/* TESTIMONIAL */}
            <div className="information">

                <p className="fee">
                    {expanded
                        ? testimonial.fullReview
                        : testimonial.shortReview
                    }

                    <span
                        className="read-more"
                        onClick={() => setExpanded(!expanded)}
                    >
                        {expanded ? " Vis mindre" : " ... Les mer"}
                    </span>
                </p>

                <hr />

                <div className="text">
                    <h3>{testimonial.name}</h3>
                    <p className="pro">Google-anmeldelse</p>
                </div>
                    <a
                className="google-reviews-link"
                href="https://maps.app.goo.gl/stquLWHxTDNStX9Y6"
                target="_blank"
                rel="noopener noreferrer"
            >
                Les flere anmeldelser på Google →
            </a>

                <div className="dots">
                    {testimonials.map((_, index) => (
                        <i
                            key={index}
                            className={active === index ? "active" : ""}
                            onClick={() => changeTestimonial(index)}
                        ></i>
                    ))}
                </div>

            </div>
                    

        </div>
    )
}

export default TestimonialCard