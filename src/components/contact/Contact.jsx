import React from 'react'
import Back from '../common/Back'
import Heading from '../common/Heading'
import './contact.css'

const Contact = () => {
    const map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
    return (
        <>
            <Back title='Contact Us'/>
            <div className="contact">
                <div className="container grid2 flexsm">
                    <div className='left'>
                        <iframe src={map} title='map'></iframe>
                    </div>
                    <div className="right">
                        <Heading title='CONTACT US' subtitle='If You Have Any Query, Please Contact Us'/>
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
                            <input type="button" value="Send Message" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
