import React from 'react'
import Profileimg from './img/Albert.png'
import tronix from './img/tronix.gif'
import Abdoimg from './img/Abdelrahman.jpg'
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
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <div className='component-container'>
                    <div className='team-conteimg'>
                        <img src={Abdoimg} alt="" />
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
                                <p className='name'>AbdElrahman</p>
                                <span>Website Developer</span>
                            </div>
                            <div>
                                <img src={Logo} alt="" />
                            </div>
                        </div>
                        <div className='discordserver'>
                            <p className='discord-server'>Discord Server</p>
                            <a href="/" className='joinnow'>Join Now</a>
                        </div>
                    </div>
                </div>
                <div className='component-container'>
                    <div className='team-conteimg'>
                        <img src={tronix} alt="" />
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
                                <p className='name'>Tronix</p>
                                <span>CEO & Founder</span>
                            </div>
                            <div>
                                <img src={Logo} alt="" />
                            </div>
                        </div>
                        <div className='discordserver'>
                            <p className='discord-server'>Discord Server</p>
                            <a href="/" className='joinnow'>Join Now</a>
                        </div>
                    </div>
                </div>
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
                                <p className='name'>ALbert</p>
                                <span>CEO & Founder</span>
                            </div>
                            <div>
                                <img src={Logo} alt="" />
                            </div>
                        </div>
                        <div className='discordserver'>
                            <p className='discord-server'>Discord Server</p>
                            <a href="/" className='joinnow'>Join Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team