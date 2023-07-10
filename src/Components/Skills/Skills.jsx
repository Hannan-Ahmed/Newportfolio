import React from 'react'
import "./Skills.css"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// IMporting skills images
import Html from "../../Images/html.jpg"
import jwt from "../../Images/jwt.jpg"
import reacticon from "../../Images/ReactIcon.png"
import css from "../../Images/css.jpg"
import express from "../../Images/expressIcon.jpg"
import mongo from "../../Images/mongodb.png"
import rest from "../../Images/rest.jpg"
import redux from "../../Images/resdux.png"
import oAuth from "../../Images/oAuth.jpg"
// import socketio from "../../Images/socketioIcon.png"
import socket from "../../Images/socketioIcon.png"
import js from "../../Images/js.jpg"
import ts from "../../Images/ts.jpg"
import spring from "../../Images/spring.jpg"
import tailwind from "../../Images/tailwind.jpg"
import bootstrap from "../../Images/bootstarp.jpg"
import semantic from "../../Images/semantic.jpg"
import material from "../../Images/material.jpg"
import node from "../../Images/nodeIcon.jpg"
import sql from "../../Images/sql.jpg"
import jquery from "../../Images/jquery.jpg"
import sass from "../../Images/saass.jpg"
import next from "../../Images/next.jpg"
import ssl from "../../Images/ssl.jpg"

import netlify from "../../Images/netlify.jpg"
import vercel from "../../Images/vercel.jpg"
import webhost from "../../Images/webhost.jpg"
import firebase from "../../Images/firebase.jpg"


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Element } from 'react-scroll';

function TabPanel(props) {
    const { children, value, index, ...other } = props;


    const Skill = [
        {
            images: [socket, socket, socket, socket, socket]
        },
        {
            images: [socket, socket, socket, socket, socket]
        },
        {
            images: [socket, socket, socket, socket, socket]
        },
        {
            images: [socket, socket, socket, socket, socket]
        },
        {
            images: [socket, socket, socket, socket, socket]
        },
        {
            images: [socket, socket, socket, socket, socket]
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
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


function Skills() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Element name="skills">

        <div className='FullSkills' id='FullSkills'>

            <div className="SkillsHeading" >
                <div data-aos="flip-right"  data-aos-duration="1000" data-aos-delay="100">Skills</div>
                {/* <div id='line' style={{ width: '5.9%' }}></div> */}
            </div>

            <div className="skillsBox">

                <Box
                    sx={{ flexGrow: 1, display: 'flex', height: 400, width: '90%' }}
                >
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider' }}

                        id='ProjTabs'
                    >
                        <Tab style={{ fontSize: '1rem' }} label="Core" {...a11yProps(0)} />
                        <Tab style={{ fontSize: '1rem' }} label="FRONT-END" {...a11yProps(1)} />
                        <Tab style={{ fontSize: '1rem' }} label=" BACK-END" {...a11yProps(2)} />
                        <Tab style={{ fontSize: '1rem' }} label="DESIGNING" {...a11yProps(3)} />
                        <Tab style={{ fontSize: '1rem' }} label="DATABASES" {...a11yProps(4)} />
                        <Tab style={{ fontSize: '1rem' }} label="DEPLOYMETS" {...a11yProps(5)} />

                    </Tabs>


                    <TabPanel className="TabspanelProject" value={value} index={0}>

                        <div className='SkillIcons'>
                            <span id='SkillImage' data-aos="fade-up" data-aos-duration="900" data-aos-delay="200"><img src={Html} alt="" /></span>
                            <span id='SkillImage' data-aos="fade-up" data-aos-duration="900" data-aos-delay="300"><img src={css} alt="" /></span>
                            <span id='SkillImage' data-aos="fade-up" data-aos-duration="900" data-aos-delay="400"><img src={js} alt="" /></span>
                        </div>

                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <div className='SkillIcons'>
                            <span id='SkillImage' data-aos="fade-up" data-aos-duration="900" data-aos-delay="100"><img src={node} alt="" /></span>
                            <span id='SkillImage' data-aos="fade-up" data-aos-duration="900" data-aos-delay="200"><img src={express} alt="" /></span>
                            <span id='SkillImage' data-aos="fade-up" data-aos-duration="900" data-aos-delay="300"><img src={next} alt="" /></span>
                            <span id='SkillImage' data-aos="fade-up" data-aos-duration="900" data-aos-delay="400"><img src={ssl} alt="" /></span>
                            <span id='SkillImage' data-aos="fade-up" data-aos-duration="900" data-aos-delay="500"><img src={oAuth} alt="" /></span>
                            <span id='SkillImage' data-aos="fade-up" data-aos-duration="900" data-aos-delay="600"><img src={jwt} alt="" /></span>
                            <span id='SkillImage' data-aos="fade-up" data-aos-duration="900" data-aos-delay="700"><img src={socket} alt="" /></span>
                            <span id='SkillImage' data-aos="fade-up" data-aos-duration="900" data-aos-delay="800"><img src={rest} alt="" /></span>
                        </div>


                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <div className='SkillIcons'>
                            <span id='SkillImage' data-aos="fade-up" data-aos-duration="900" data-aos-delay="100"><img src={reacticon} alt="" /></span>
                            <span id='SkillImage' data-aos="fade-up" data-aos-duration="900" data-aos-delay="200"><img src={redux} alt="" /></span>
                            <span id='SkillImage' data-aos="fade-up" data-aos-duration="900" data-aos-delay="300"><img src={ts} alt="" /></span>
                            <span id='SkillImage' data-aos="fade-up" data-aos-duration="900" data-aos-delay="400"><img src={jquery} alt="" /></span>
                            <span id='SkillImage' data-aos="fade-up" data-aos-duration="900" data-aos-delay="500"><img src={sass} alt="" /></span>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <div className='SkillIcons'>
                            <span id='SkillImage' data-aos="fade-up" data-aos-duration="900" data-aos-delay="100"><img src={spring} alt="" /></span>
                            <span id='SkillImage' data-aos="fade-up" data-aos-duration="900" data-aos-delay="200"><img src={tailwind} alt="" /></span>
                            <span id='SkillImage' data-aos="fade-up" data-aos-duration="900" data-aos-delay="300"><img src={bootstrap} alt="" /></span>
                            <span id='SkillImage' data-aos="fade-up" data-aos-duration="900" data-aos-delay="400"><img src={semantic} alt="" /></span>
                            <span id='SkillImage' data-aos="fade-up" data-aos-duration="900" data-aos-delay="500"><img src={material} alt="" /></span>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <div className='SkillIcons'>

                            <span id='SkillImage' data-aos="fade-up" data-aos-duration="900" data-aos-delay="400"><img src={mongo} alt="" /></span>
                            <span id='SkillImage' data-aos="fade-up" data-aos-duration="900" data-aos-delay="400"><img src={sql} alt="" /></span>
                            <span id='SkillImage' data-aos="fade-up" data-aos-duration="900" data-aos-delay="400"><img src={firebase} alt="" /></span>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        <div className='SkillIcons'>

                            <span id='SkillImage' data-aos="fade-up" data-aos-duration="900" data-aos-delay="400"><img src={netlify} alt="" /></span>
                            <span id='SkillImage' data-aos="fade-up" data-aos-duration="900" data-aos-delay="400"><img src={vercel} alt="" /></span>
                            <span id='SkillImage' data-aos="fade-up" data-aos-duration="900" data-aos-delay="400"><img src={webhost} alt="" /></span>
                            <span id='SkillImage' data-aos="fade-up" data-aos-duration="900" data-aos-delay="400"><img src={firebase} alt="" /></span>
                        </div>
                    </TabPanel>

                </Box>


            </div>



        </div>
        </Element>

    )
}

export default Skills
