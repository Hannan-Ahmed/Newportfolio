import React, { useEffect, useState } from 'react'
import "./Navbar.css"

import { FaBars, FaCross, FaCrosshairs } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import 'react-animation/dist/keyframes.css'

import { animations } from 'react-animation'

import AOS from 'aos';
import 'aos/dist/aos.css';


function Navbar() {
  useEffect(() => {
    AOS.init({ once: true }); // Initialize AOS once

    // Optional: You can configure additional options here

    return () => {
      AOS.refresh(); // Refresh AOS when the component unmounts
    };
  }, []);

  const [isChecked, setIsChecked] = useState(true);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    console.log(isChecked)
  };



  const [show, setShow] = useState(false);



  const style = {
    animation: animations.fadeIn
  }


  const controlNavbar = () => {
    if (window.scrollY > 20) {
      setShow(true);
    } else {
      setShow(false);
    } 
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

// **************************************************************************
useEffect(() => {
  const handleWindowResize = () => {
    if (window.innerWidth < 908) {
      // Width is less than 768px, do something
      setShow(true)
      // Trigger your desired action here
    }
  };

  // Attach event listener for window resize
  window.addEventListener('resize', handleWindowResize);

  // Clean up the event listener when the component unmounts
  return () => {
    window.removeEventListener('resize', handleWindowResize);
  };
}, [show]);




  return (
    <>
      {/* ****************************************************************************************** */}


{!show &&
      <div className="nav" style={style} >
        
        <ul>
          <li data-aos="fade-down"  data-aos-duration="900" data-aos-delay="100" ><a href="HeadContent">Home</a></li>
          <li data-aos="fade-down"  data-aos-duration="900" data-aos-delay="200" ><a href="faboutpage">About</a></li>
          <li data-aos="fade-down"  data-aos-duration="900" data-aos-delay="300" ><a href="FullProject">Projects</a></li>
          <li data-aos="fade-down"  data-aos-duration="900" data-aos-delay="400" ><a href="FullSkills">Skills</a></li>
          <li data-aos="fade-down"  data-aos-duration="900" data-aos-delay="500" ><a href="experienFull">Experience</a></li>
          <li data-aos="fade-down"  data-aos-duration="900" data-aos-delay="600" ><a href="FullEduo">Education</a></li>
          <li data-aos="fade-down"  data-aos-duration="900" data-aos-delay="700" ><a href="fulltestimonals">Testimonials</a></li>
        </ul>
      </div>
}

      {/* ****************************************************************************************** */}
      
      {show &&
      <>
      <input type="checkbox" id="active" checked={isChecked}
        onChange={handleCheckboxChange} />





      < label  for="active" class="menu-btn" >   {isChecked ? <BsXLg style={{ zIndex: '999', height: 30, width: 30,  animation: animations.fadeIn }} /> : <FaBars style={{ height: 23, width: 23, margin: '.62rem', animation: animations.fadeIn }} />}    </label>
      
      
      <div class="wrapper"  >
        <ul >
     

          <li data-aos="fade-up"  data-aos-duration="900" data-aos-delay="100"><a href="HeadContent">Home</a></li>
          <li data-aos="fade-up"  data-aos-duration="900" data-aos-delay="200"><a href="faboutpage">About</a></li>
          <li data-aos="fade-up"  data-aos-duration="900" data-aos-delay="300"><a href="FullProject">Projects</a></li>
          <li data-aos="fade-up"  data-aos-duration="900" data-aos-delay="400"><a href="FullSkills">Skills</a></li>
          <li data-aos="fade-up"  data-aos-duration="900" data-aos-delay="500"><a href="experienFull">Experience</a></li>
          <li data-aos="fade-up"  data-aos-duration="900" data-aos-delay="600"><a href="faboutpage">FullEduo</a></li>
          <li data-aos="fade-up"  data-aos-duration="900" data-aos-delay="700"><a href="fulltestimonals">Testimonials</a></li>


        </ul>
      </div>
      </>
      }


    </>

  )
}

export default Navbar
