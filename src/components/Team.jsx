import React from 'react'
import Profileimg from './img/teamimg.png'
import Logo from './img/Logo.svg'
import './Team.css'
const Team = () => {
    return (
        <section className='team-container'>
            <div>
                <h2>طاقم العمل</h2>
                <img src="" alt="" />
            </div>
            <div className='teamcontainer'>
                <div className='conte'>
                    <div>
                        <img src={Profileimg} alt="" />
                    </div>
                    <div className="texting">
                        <div className='leftorright'>
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