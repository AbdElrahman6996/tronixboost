import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <footer>
            <div class="row primary">
                <div class="column about">

                    <h3>ترونكس بوست</h3>

                    <p style={{
                        marginTop: '10px'
                    }}>
                        خدمة لتوفير ودعم سيرفرك بـ البوستات وإيصاله الى المستوى المطلوب والتمتع بخصائص البوستات لسيرفرك. نوفر هذه الخدمة بأنسب الاسعار والتي اقل بكثير مما هو متاح! ، ايضاً خدمة تعزيز سيرفرك بأعضاء وبترتيب حسابات كأنها حقيقيه، واخيراً خدمة نيتروهات باسعار رمزية جداً.
                    </p>

                </div>

                <div class="column links">
                    <h3>Terms of use</h3>
                    <ul style={{
                        marginTop: '10px'
                    }}>

                        <li>
                            <a href="#support">Discord Server</a>
                        </li>
                        <li>
                            <a href="#cookies-policy">Cookies Policy</a>
                        </li>
                        <li>
                            <a href="#cookies-policy">Frequent Questions</a>
                        </li>
                        <li>
                            <a href="#terms-of-services">Terms Of Service</a>
                        </li>
                    </ul>

                </div>


                <div class="column links">
                    <h3>Contact Us</h3>
                    <ul style={{
                        marginTop: '10px'
                    }}>
                        <li>
                            <a href="#faq">Discord</a>
                        </li>
                        <li>
                            <a href="#cookies-policy">Instagram</a>
                        </li>
                        <li>
                            <a href="#terms-of-services">Facebook</a>
                        </li>
                        <li>
                            <a href="#support">Twitter</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="copyrights">
                <p>All rights reserved to AbdElrahman &copy; </p>
            </div>
        </footer>
    )
}

export default Footer