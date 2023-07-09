import React from 'react'
import "./Project.css"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ProjectItem from './ProjectItem';
// importing images
import reactIcon from "../../Images/ReactIcon.png"
import express from "../../Images/expressIcon.jpg"
import node from "../../Images/nodeIcon.jpg"
import redux from "../../Images/resdux.png"
import socket from "../../Images/socketioIcon.png"
import Lms128 from "./ProjectImages/128lms.PNG"
import airuni from "./ProjectImages/airuni.jpeg"
import auth from "./ProjectImages/auth.PNG"
import webblog from "./ProjectImages/webblog.PNG"
import food from "./ProjectImages/food.png"
import chat from "./ProjectImages/chat.png"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Project() {

    const Projectdata = [
        {
            name: "DevSkills - MERN",
            ProjectIamge:webblog,
            image: [reactIcon,express,node] ,
            description: "A blogging web app developed in MERN Stack with major react concpets and https server,contaning web tech courses. "
        },
        {
            name: "Student LMS - MERN",
            ProjectIamge:Lms128,
            image:  [reactIcon,express,node],
            description: "LMS for oragization's employees. Contaning customized requirements.Firdly user interface  "
        },
        {
            name: "Open chat  - Socket io/MERN/Pusher/Redux",
            ProjectIamge:chat,
            image:  [reactIcon,express,node],
            description: "Whatsapp chat appplication. Contatins pusher for real time,some socket io stuff and firebase authentication"
        },
        {
            name: "LinkedIn's logging- OAuth,React",
            ProjectIamge:auth,
            image:  [reactIcon,express,node],
            description: "Pixel Perfect LinkedIn authentication pages with googel authentication with react animations."
        }
        ,
        {
            name: "University Sample Website - Html,Css",
            ProjectIamge:airuni,
            image:  [reactIcon,express,node],
            description: "Developed a sample website of my university. in HTML,CSS.First ever project in my web dev journey "
        }
        ,
        {
            name: "Food Order Website - PHP,MySql",
            ProjectIamge:food,
            image:  [reactIcon,express,node],
            description: "Developed an Online food ordering website for ordering food online, in php and MySql."
        }

    ]
    useEffect(() => {
        AOS.init({ once: true }); // Initialize AOS once
    
        // Optional: You can configure additional options here
    
        return () => {
          AOS.refresh(); // Refresh AOS when the component unmounts
        };
      }, []);

    return (
        <div className='FullProject' id='FullProject'>

            <div className="ProjectHeading" >
                <div data-aos="flip-left"  data-aos-duration="1000" data-aos-delay="100">Projects</div>
                {/* <div id='line'></div> */}
            </div>

            <div className="Projects" >

                <div class="grid-container">


                    {Projectdata.map((project, index) => (
                        <div class="grid-item" data-aos="fade-up"  data-aos-duration="900" data-aos-delay="700" ><ProjectItem name={project.name} ProjectIamge={project.ProjectIamge}  image={project.image} description={project.description} /></div>

                    ))}

                </div>

            </div>

        </div>
    )
}

export default Project
