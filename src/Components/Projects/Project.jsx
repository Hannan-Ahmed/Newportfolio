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
import airuni from "./ProjectImages/uni.png"
import auth from "./ProjectImages/auth.PNG"
import webblog from "./ProjectImages/webblog.PNG"
import food from "./ProjectImages/food.png"
import chat from "./ProjectImages/chat.png"
import pusher from "./ProjectImages/pusher.svg"
import mongo from "./ProjectImages/mongodb.png"
import html from "./ProjectImages/html.jpg"
import css from "./ProjectImages/css.jpg"
import js from "./ProjectImages/js.jpg"
import oauth from "./ProjectImages/oAuth.jpg"
import php from "./ProjectImages/php.jpg"
import sql from "./ProjectImages/sql.jpg"

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Element } from 'react-scroll';
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
            image: [reactIcon,express,node,mongo] ,
            description: "A blogging web app developed in MERN Stack with major react concpets and https server,contaning web tech courses. ",
            githublink:"https://github.com/Hannan-Ahmed/MERN_BLOG.git"
        },
        {
            name: "Student LMS - MERN",
            ProjectIamge:Lms128,
            image:  [reactIcon,express,node,mongo],
            description: "LMS for oragization's employees. Contaning customized requirements.Firdly user interface  ",
            githublink:"https://github.com/Hannan-Ahmed/lms.git"
     
        },
        {
            name: "Open chat  - Socket io/MERN/Pusher/Redux",
            ProjectIamge:chat,
            image:  [reactIcon,express,node,pusher],
            description: "Whatsapp chat appplication. Contatins pusher for real time,some socket io stuff and firebase authentication",
            githublink:"https://github.com/Hannan-Ahmed/Open-Chat.git"
        
        },
        {
            name: "LinkedIn's logging - OAuth,React,React Spring animation",
            ProjectIamge:auth,
            image:  [reactIcon,oauth],
            description: "Pixel Perfect LinkedIn authentication pages with googel authentication.Customized them with react animation libraries.Similary designed eye capturing authentication forms.",
            githublink:"https://github.com/Hannan-Ahmed/Pages.git"
        
        }
        ,
        {
            name: "University Sample Website - Html,Css,js",
            ProjectIamge:airuni,
            image:  [html,css,js],
            description: "Developed a sample website of my university (Air university Islamabad), in HTML,CSS and JavaScript. The website is similar to the original once with the same components designed accurately ",
            githublink:"https://github.com/Hannan-Ahmed/Air-Uni-web.git"
        
        }
        ,
        {
            name: "Food Order Website - PHP , MySql",
            ProjectIamge:food,
            image:  [html,css,php,sql],
            description: "Developed an online food ordering website for ordering food online, in php and MySql. The website can be utiized for startups.",
            githublink:"https://github.com/Hannan-Ahmed/PHP-MySQL.git"
        
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
        <Element name="project">

        <div className='FullProject' id='FullProject'>

            <div className="ProjectHeading" >
                <div data-aos="flip-left"  data-aos-duration="1000" data-aos-delay="100">Projects</div>
                {/* <div id='line'></div> */}
            </div>

            <div className="Projects" >

                <div class="grid-container">


                    {Projectdata.map((project, index) => (
                        <div class="grid-item" data-aos="fade-up"  data-aos-duration="900" data-aos-delay="700" ><ProjectItem name={project.name} ProjectIamge={project.ProjectIamge}  image={project.image} description={project.description}  githublink={project.githublink} /></div>

                    ))}

                </div>

            </div>

        </div>
        </Element>

    )
}

export default Project
