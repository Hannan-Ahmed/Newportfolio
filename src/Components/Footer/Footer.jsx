import React from 'react'
import "./Footer.css"
import footerImage from "../../Vectors/footerImg.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Place, Telegram } from '@mui/icons-material';
import { FaPaperPlane, FaPlane } from 'react-icons/fa';
import { Element } from 'react-scroll';
function Footer() {
    return (
        <>
        <Element name="footer">

            <div class="custom-shape-divider-top-1688893466">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
                </svg>
            </div>
            <footer class="footer-distributed">

                <div class="footer-left">

                    <div><img id='ffotimg' src={footerImage} alt="" /></div>

                    <div>	<p class="footer-company-name">©2015<span style={{ color: '#27c78c', fontWeight: '600', letterSpacing: '1px' }}> Hannan Ahmed </span>| All Rights Reserved </p></div>
                </div>

                <div class="footer-center">

                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p><span>Pakistan</span>Islamabad, Sector G-6</p>
                    </div>

                    <div>
                        <i class="fa fa-phone"></i>
                        <p>03460019525</p>
                    </div>

                    <div>
                        <i class="fa fa-envelope"></i>
                        <p ><a href="mailto:support@company.com">ahmedhannan846@gmail.com</a></p>
                    </div>

                    <div class="subscribe-form">

                        <form action="#">
                            <input type="text" placeholder="Email Address" />
                            {/* <button><i class="fab fa-telegram-plane"></i></button> */}
                            <button><FaPaperPlane style={{ fontSize: '2rem' }} /></button>
                        </form>

                    </div>

                </div>

                <div class="footer-right">

                    <p class="footer-company-about">
                        <span id='follow'> Follow me</span>
                    </p>

                    <div class="footer-icons">

                        <a href="https://www.linkedin.com/in/hannan-ahmed-70823b238/"><i class="fa fa-linkedin"></i></a>
                        <a href="https://github.com/Hannan-Ahmed"><i class="fa fa-github"></i></a>
                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                    </div>

                </div>

            </footer>
        </Element>

        </>
    )
}

export default Footer
