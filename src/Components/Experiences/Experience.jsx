import React, { useEffect, useState } from 'react'
import "./Experience.css"
import socket from "../../Images/jwt.jpg"
import MediLogo from "../../Images/medisure.jpg"
import Logo128 from "../../Images/128.jpg"
import NeoDocto from "../../Images/neodocto.jpg"
import Auubs from "../../Images/ubbs.jpg"
function Experience() {


  const [index, setIndex] = useState(0); 
  const length = 3;

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };




  return (
    <div className='experienFull' id='experienFull'>
      <div className="SkillsHeading">
                <div data-aos="flip-right"  data-aos-duration="1000" data-aos-delay="100">Experiences</div>
                {/* <div id='line' style={{ width: '11.6%' ,position:'relative',top:'1rem'}}></div> */}
            </div>
      <div class="slider">
  <input type="radio" name="toggle" id="btn-1" checked/>
  <input type="radio" name="toggle" id="btn-2"/>
  <input type="radio" name="toggle" id="btn-3"/>
  <input type="radio" name="toggle" id="btn-4"/>

  <div class="slider-controls">
    <label for="btn-1"></label>
    <label for="btn-2"></label>
    <label for="btn-3"></label>
    <label for="btn-4"></label>
  </div>

  <ul class="slides">
    
    <li class="slide">
      <div className="slide-content">
        
        <h1 class="slide-title1">MediSure Health Services</h1>
        <h2 class="slide-title">React js Developer </h2>
        <p class="slide-text">Serving as a React js developer in MediSure Healt Services, international company. Developing complex pages in react and redux.I addition I also integrates API's with frontend. </p>
        <a href="" class="slide-link">View letter</a>
      </div>
      <p class="slide-image">
        <img src={MediLogo} alt="stuff" width="320" height="240"/>
      </p>
    </li>


    <li class="slide">
      <div className="slide-content">
        <h1 class="slide-title1">128 Technologies- PTCL Academy</h1>
        <h2 class="slide-title">MERN Stack Intern</h2>
        <p class="slide-text">Joined as an intern and taken a student LMS project.The project was developed completely in MERN Stack. Developed and Integarted API's with frontend.  </p>
        <a href="https://lnksvr.com/uploads/files/ad61b603c0f4e053b52180f4aab4a2af.pdf" target='_blank' class="slide-link">View letter</a>
      </div>
      <p class="slide-image">
        <img src={Logo128} alt="stuff" width="320" height="240"/>
      </p>
    </li>
    
    <li class="slide">
      <div className="slide-content">
        <h1 class="slide-title1">Web Developer Intern</h1>
        <h2 class="slide-title">Neo Docto Inc.</h2>
        <p class="slide-text">Hired as an intern in Neo Docto (USA). Collaborated with international colleagues in fixing bugs in websites.Moreover I also gave my innovtive ideas in projects.</p>
        <a href="https://lnksvr.com/uploads/files/5430c4abae7bc40423016f46a5a98ae4.pdf"  target='_blank' class="slide-link">View letter</a>
      </div>
      <p class="slide-image">
        <img src={NeoDocto} alt="stuff" width="320" height="240"/>
      </p>
    </li>
    
    <li class="slide">
      <div className="slide-content">
        <h1 class="slide-title1">Air Uni Bits&Bytes Society</h1>
        <h2 class="slide-title">Web Dev Instructor</h2>
        <p class="slide-text">Volountarily giving services to our junior fellows. Sharing my experiences with them and guiding then a true path in this journy.</p>
        <a href="#" class="slide-link">View letter</a>
      </div>
      <p class="slide-image">
        <img src={Auubs} alt="stuff" width="320" height="240"/>
      </p>
    </li>
    
  </ul>
</div>
    </div>
  )
}

export default Experience
