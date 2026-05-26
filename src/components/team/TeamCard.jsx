import React from 'react'
import './team.css'
import Heading from '../common/Heading'

const TeamCard = () => {
    return (
        <>
            <div className="team container">
                <Heading title='MEET THE TEAM' subtitle='We Have Great Experience Of Driving'/>
                <div className="grid4">
                    <div className="box">
                        <div className="img">
                            <img src="./img/team-1.jpg" alt="" />
                            <div className="icon">
                                <i className='fab fa-facebook-f'></i>
                                <i className='fab fa-twitter'></i>
                                <i className='fab fa-instagram'></i>
                            </div>
                        </div>
                        <div className="text">
                            <h3>Full Name</h3>
                            <p>Trainer</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img">
                            <img src="./img/team-2.jpg" alt="" />
                            <div className="icon">
                                <i className='fab fa-facebook-f'></i>
                                <i className='fab fa-twitter'></i>
                                <i className='fab fa-instagram'></i>
                            </div>
                        </div>
                        <div className="text">
                            <h3>Full Name</h3>
                            <p>Trainer</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img">
                            <img src="./img/team-3.jpg" alt="" />
                            <div className="icon">
                                <i className='fab fa-facebook-f'></i>
                                <i className='fab fa-twitter'></i>
                                <i className='fab fa-instagram'></i>
                            </div>
                        </div>
                        <div className="text">
                            <h3>Full Name</h3>
                            <p>Trainer</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img">
                            <img src="./img/team-4.jpg" alt="" />
                            <div className="icon">
                                <i className='fab fa-facebook-f'></i>
                                <i className='fab fa-twitter'></i>
                                <i className='fab fa-instagram'></i>
                            </div>
                        </div>
                        <div className="text">
                            <h3>Full Name</h3>
                            <p>Trainer</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamCard
