import React from 'react'
import "./HeadContent.css"
import ReactTyped from "react-typed";
import {ReactComponent as HeadVectorSVG} from "../../Vectors/head_Vector.svg"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function HeadContent() {
  useEffect(() => {
    AOS.init({ once: true }); // Initialize AOS once

    // Optional: You can configure additional options here

    return () => {
      AOS.refresh(); // Refresh AOS when the component unmounts
    };
  }, []);

  const typedStrings = [
    "<span style='color: #98EECC;'>MERN Stack</span>",
    "<span style='color: #98EECC;'>Frontend</span>",
    "<span style='color: #98EECC;'>Backend</span>",
    "<span style='color: #98EECC;'>Deployment</span>",
    "<span style='color: #98EECC;'>Animations</span>",
    "<span style='color: #98EECC;'>Debugging</span>",
  ];
  return (
    <>


    <div >


      <div className="HeadContent" id='HeadContent'>

        <div className="Head_bio">

       
          <div id='HeadbioBtn'>
            
            <h1 data-aos="fade-right"  data-aos-duration="900" data-aos-delay="100">
              Hi, I'm <br />
              <span id='name'>Hannan Ahmed.</span>  <br />
              Excellencies in  <br />{" <"}
              <ReactTyped strings={typedStrings} typeSpeed={100} backSpeed={20}
                cursorChar=" />"
                showCursor={true} loop />
            </h1>
            <div class="Head_btn" data-aos="fade-right"  data-aos-duration="900" data-aos-delay="300">
              <a class="buttonn" href="#faboutpage" title="Yes, turtles.">View Portfolio</a>
            </div>
          </div>



          <div className="headvector">
            <HeadVectorSVG/>


          </div>




        </div>


      </div>


    </div>
    </>
  )
}

export default HeadContent
