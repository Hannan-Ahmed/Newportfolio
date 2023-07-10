import React from 'react'
import "./Testimonials.css"
import { Element } from 'react-scroll'
function Testimonial() {
    return (
        <Element name="testimonials">

        <div id='fulltestimonals'>

            <div className="SkillsHeading" data-aos="flip-left"  data-aos-duration="1000" data-aos-delay="100">
                <div>Testimonials</div>
                {/* <div id='line' style={{ width: '11.9%' }}></div> */}
            </div>

            <div className="testimonoalCards">

                <figure class="snip1533" data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="100">
                    <figcaption>
                        <blockquote>
                            <p>Hannan Ahmed was found punctual, hard working and inquisitive. His performance exceeded our expectation.We wish him all the best for future endeavours </p>
                        </blockquote>
                        <h3>Dr. Phani Bhushan Sanneerappa</h3>
                        <h4>Global Vice President and CFO, NeoDocto Inc</h4>
                    </figcaption>
                </figure>
                <figure class="snip1533"  data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="400">
                    <figcaption>
                        <blockquote>
                            <p>Hannan was engaged as a MERN Stack developer. He played a vital role within his team and managed to finish the project well within schedule.His professionalism, dedication, and ability to work efficiently were truly commendable. </p>
                        </blockquote>
                        <h3>Dr. Muhammad Umer</h3>
                        <h4>CEO 128 Technologies</h4>
                    </figcaption>
                </figure>
                <figure class="snip1533"  data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="700">
                    <figcaption>
                        <blockquote >
                            <p>It has been a pleasure working with Hannan, and I look forward to collaborating with him on future projects. His punctuality, commitment to work, and consistent hard work have played a vital role in our projects.</p>
                        </blockquote>
                        <h3>M. Hassan</h3>
                        <h4>MediSure Health Services</h4>
                    </figcaption>
                </figure>

            </div>
        </div>
        </Element>

    )
}

export default Testimonial
