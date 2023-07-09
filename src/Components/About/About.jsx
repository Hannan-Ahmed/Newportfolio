import React from 'react'
import "./About.css"
import { ReactComponent as AboutVectorSVG } from "../../Vectors/AboutSvg.svg"
import cv from "./cv.pdf"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import blob from "../../Vectors/blob.svg"

const About = () => {
    useEffect(() => {
        AOS.init({ once: true }); // Initialize AOS once
    
        // Optional: You can configure additional options here
    
        return () => {
          AOS.refresh(); // Refresh AOS when the component unmounts
        };
      }, []);
      
    return (
        <>
            <div className='FullAbout' id='faboutpage' style={{ marginTop: '1.33rem' }}>


                <div className="AboutContent">

                    <div className="AboutText" data-aos="fade-left"data-aos-iteration="infinite"  data-aos-duration="1200" data-aos-delay="100">
                        <div className="AboutHeading" data-aos="flip-left"  data-aos-duration="3000" data-aos-delay="100">About me</div>

                      Hi! I'm Hannan Ahmed, a talented MERN Stack developer with 2 years of professional experience. Started web development in first semester. Since then, my skills and knowledge have skyrocketed, propelling my career to new heights.
                        <br />
                        Collaborating with renowned institutions, I've delivered invaluable services and made noteworthy contributions. With a strong commitment to excellence and a thirst for continuous learning, I consistently achieve exceptional results in my work. Coding is not just a job for me; it's my true passion.




                        <a href={cv} style={{ textDecoration: 'none' }} download="Hannan Ahmed Resume" target='_blank'>
                            <button class="button" type="button">
                                <span class="button__text">Download CV</span>
                                <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
                            </button>
                        </a>

                    </div>

                    <div className="AboutSvg" data-aos="fade-right"data-aos-iteration="infinite"  data-aos-duration="1200" data-aos-delay="200">
                        <AboutVectorSVG />
                    </div>

                </div>
            </div>

        </>
    )
}

export default About
