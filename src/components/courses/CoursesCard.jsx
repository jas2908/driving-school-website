import React from 'react'
import Heading from '../common/Heading'
import './courses.css'

const CoursesCard = () => {
    return (
        <>
            <div className="courses">
                <Heading title='TRANDING COURSES' subtitle='Our Courses Upskill You With Driving Training'/>
                <div className="container grid3 flexsm">
                    <div className="box">
                        <div className="light">
                            <span className='money'>$99</span>
                            <p className='title'>Automatic Car Lessons</p>
                            <p className='para'>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</p>
                            <div className="box-in">
                                <div className="begin">
                                    <i className='fa fa-signal'></i>
                                    <span>Beginner</span>
                                </div>
                                <div className="week">
                                    <span>/</span>
                                    <i className='fa fa-calendar-alt'></i>
                                    <span>3 Week</span>
                                </div>
                            </div>
                        </div>
                        <div className="img-in">
                            <div className="over"></div>
                            <button>Read More</button>
                            <img src="./img/courses-1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="box">
                        <div className="light">
                            <span className='money'>$99</span>
                            <p className='title'>Highway Driving Lesson</p>
                            <p className='para'>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</p>
                            <div className="box-in">
                                <div className="begin">
                                    <i className='fa fa-signal'></i>
                                    <span>Beginner</span>
                                </div>
                                <div className="week">
                                    <span>/</span>
                                    <i className='fa fa-calendar-alt'></i>
                                    <span>3 Week</span>
                                </div>
                            </div>
                        </div>
                        <div className="img-in">
                            <div className="over"></div>
                            <button>Read More</button>
                            <img src="./img/courses-2.jpg" alt="" />
                        </div>
                    </div>
                    <div className="box">
                        <div className="light">
                            <span className='money'>$99</span>
                            <p className='title'>International Driving</p>
                            <p className='para'>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</p>
                            <div className="box-in">
                                <div className="begin">
                                    <i className='fa fa-signal'></i>
                                    <span>Beginner</span>
                                </div>
                                <div className="week">
                                    <span>/</span>
                                    <i className='fa fa-calendar-alt'></i>
                                    <span>3 Week</span>
                                </div>
                            </div>
                        </div>
                        <div className="img-in">
                            <div className="over"></div>
                            <button>Read More</button>
                            <img src="./img/courses-3.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoursesCard
