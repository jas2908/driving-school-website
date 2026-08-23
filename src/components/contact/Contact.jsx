/* import React from 'react'
import Back from '../common/Back'
import Heading from '../common/Heading'
import './contact.css'

const Contact = () => {
    const map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.9993289617155!2d10.831945477028949!3d59.898960874895174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416f737fa09d77%3A0xba0891669bd8f34a!2sHaakon%20Tveters%20vei%2011A%2C%200682%20Oslo!5e0!3m2!1sen!2sno!4v1779892747587!5m2!1sen!2sno"
    return (
        <>
            <Back title='Contact Us'/>
            <div className="contact">
                <div className="container grid2 flexsm">
                    <div className='left'>
                        <iframe src={map} title='map'></iframe>
                    </div>
                    <div className="right">
                        <Heading title='Kontakt oss' subtitle='Kontakt oss for en uformell prat'/>
                        <p className='down'>The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="/contact">Download Now</a>.</p>
                        <form className='contact-in'>
                            <div className="one">
                                <input type="text" placeholder='Your Name' />
                                <input type="email" placeholder='Your Email' />
                            </div>
                            <div className="two">
                                <input type="text" placeholder='Subject' />
                            </div>
                            <textarea placeholder='Message' cols="30" rows="5"></textarea>
                            <input type="button" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
 */

import React from 'react'
import Back from '../common/Back'
import Heading from '../common/Heading'
import './contact.css'
import Apoint from '../home/apoint/Apoint'

const Contact = () => {
    const map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.081737700026!2d10.8000961!3d59.9141908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416fab3f238d6b%3A0xc8565ccec3bd1b75!2s%C3%98stensj%C3%B8%20Trafikkskole!5e0!3m2!1sen!2sno!4v1787223766591!5m2!1sen!2sno"

    return (
        <>
            <Back title='Kontakt Oss' />

            <div className="contact">
                <div className="container grid2 flexsm">

                    {/* LEFT - MAP */}
                    <div className='left'>
                        <iframe src={map} title='map'></iframe>
                    </div>

                    {/* RIGHT - CONTENT */}
                    <div className="right">

                        <Heading
                            title='Kontakt oss'
                            subtitle='Kontakt oss for en uformell prat'
                        />

                        {/* PHONE + EMAIL (SAME LINE) */}
                        <div className="contact-info">

                            <p>
                                <i className="fa fa-phone"></i>
                                +47 40 34 40 40
                            </p>

                            <p>
                                <i className="fa fa-envelope"></i>
                                ostensjotrafikkskole@hotmail.com
                            </p>

                        </div>

                        {/* FORM SECTION */}
                        <Apoint />
                        {/* <div className="contact-form">

                            <h3>Send melding</h3>

                            <form className='contact-in'>

                                <div className="one">
                                    <input type="text" placeholder='Your Name' />
                                    <input type="email" placeholder='Your Email' />
                                </div>

                                <div className="two">
                                    <input type="text" placeholder='Subject' />
                                </div>

                                <textarea placeholder='Message' cols="30" rows="5"></textarea>

                                <input type="button" value="Send Message" />

                            </form> */}

                        {/* </div> */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact