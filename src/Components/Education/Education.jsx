import React from 'react'
import "./Education.css"
import Airuni from "../../Images/airuni.jpg"
import fic from "../../Images/fazaiinter.jpg"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Element } from 'react-scroll';

function Education() {
  useEffect(() => {
    AOS.init({ once: true }); // Initialize AOS once

    // Optional: You can configure additional options here

    return () => {
      AOS.refresh(); // Refresh AOS when the component unmounts
    };
  }, []);
  return (
    <Element name="education">
      <div className='FullEduo' id='FullEduo'>
        <div className="SkillsHeading" >
          <div>Education</div>
          {/* <div id='line' style={{ width: '9.5%' }}></div> */}
        </div>
        <ul class="cards" style={{ paddingTop: '1.5rem' }}>

          <li data-aos="fade-right" data-aos-duration="3000" data-aos-delay="100">
            <a href="" class="card">
              <img src={Airuni} class="card__image" alt="" />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  {/* <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" /> */}
                  <div class="card__header-text">
                    <h3 class="card__title">BS Computer Science</h3>
                    <span class="card__status">Air University Islamabad</span>
                  </div>
                </div>
                <p class="card__description">BSCS from Air university.My latest y is 3.26 </p>
              </div>
            </a>
          </li>

          <li data-aos="fade-up" data-aos-duration="3000" data-aos-delay="500">
            <a href="" class="card">
              <img src={fic} class="card__image" alt="" />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  {/* <img class="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" /> */}
                  <div class="card__header-text">
                    <h3 class="card__title">Intermediate</h3>
                    <span class="card__status">Fazaia Inter college, Islamabad</span>
                  </div>
                </div>
                <p class="card__description">Completed FSC with 83 percentage in pre enginerring.</p>
              </div>
            </a>
          </li>

          <li data-aos="fade-left" data-aos-duration="3000" data-aos-delay="100">
            <a href="" class="card">
              <img src={fic} class="card__image" alt="" />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  {/* <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" /> */}
                  <div class="card__header-text">
                    <h3 class="card__title">Metric</h3>
                    {/* <span class="card__tagline">Lorem ipsum dolor sit amet consectetur</span> */}
                    <span class="card__status">Fazaia Inter college, Islamabad</span>
                  </div>
                </div>
                <p class="card__description">Completed Metric with 91 percentage in pre enginerring.</p>
              </div>
            </a>
          </li>

        </ul>
      </div>
    </Element>
  )
}

export default Education
