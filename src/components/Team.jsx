import React from 'react'
import Profileimg from './img/teamimg.png'
import Logo from './img/Logo.svg'
import Teams from './img/Rectangleteam.svg'
import './Teaming.css'

const Team = () => {
    return (
        <section className='team-container'>
            <div>
                <h2>طاقم العمل</h2>
                <img src={Teams} alt="" />
            </div>
            <div className='team-component' style={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <div className='component-container'>
                    <div className='team-conteimg'>
                        <img src={Profileimg} alt="" />
                    </div>
                    <div className="team-texting" style={{
                          display: 'flex',
                          flexDirection: 'column',
                          height: '200px'
                    }}>
                        <div className='team-leftorright' style={{
                          display: 'flex',
                          flexDirection: 'row'
                    }}>
                            <div>
                                <p>Tronix</p>
                                <span>CEO & Founder</span>
                            </div>
                            <div>
                                <img src={Logo} alt="" />
                            </div>
                        </div>
                        <div>
                            <p>Discord Server</p>
                            <a href="/">Join Now</a>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Team