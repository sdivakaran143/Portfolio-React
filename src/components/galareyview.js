import styles from '../App.module.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import  'aos/dist/aos.css'
import {Link} from "react-router-dom";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
export default function Galleryview(){
    useEffect(()=>{
        AOS.init({duration:2000});
    },[]);
        return(
            <div>
                <div className={styles.gallery}>
                    {/* <div className={[styles.galleryphoto,styles.photo1].join(" ")}></div>
                    <div className={[styles.galleryphoto,styles.photo2].join(" ")}></div>
                    <div className={[styles.galleryphoto,styles.photo3].join(" ")}></div>
                    <div className={[styles.galleryphoto,styles.photo4].join(" ")}></div>
                    <div className={[styles.galleryphoto,styles.photo5].join(" ")}></div> */}
                    <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date="WARM WELCOMES YOU..."
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon=""
                            >
                                <h3 className="vertical-timeline-element-title">Hello!..</h3>
                                {/* <h4 className="vertical-timeline-element-subtitle">I'ts Divakaran Senthilkumar </h4> */}
                                <p>I'ts Divakaran Senthilkumar </p>
                                <br/>
                                <center><img src="https://www.desicomments.com/wp-content/uploads/2017/07/Hello.gif"  alt="funny GIF"height="200px" width="200px"/></center>

                                
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date=" KNOW ABOUT ME"
                                contentStyle={{ background: 'rgba(13, 13, 13, 0.473)', color: '#fff' }}
                                iconStyle={{ background: 'pink', color: '#fff' }}
                                icon=""
                            >
                                <h3 className="vertical-timeline-element-title">me!</h3>
                                <p>
                                    <p>Iam Currently Pursuing My Bacholr's Degree At K.S.R. College of Enginnering in The Branch of "Computer Science And Engineering"</p>
                                </p>
                                <br/><Link className={styles.buttonlink} to="/About">Click For More</Link><br/>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work. messagebox"
                                date="PROJECTS AND WORKS"
                                contentStyle={{ background: 'rgba(13, 13, 13, 0.473)', color: '#fff' }}
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon=""
                                >
                                <h3 className="vertical-timeline-element-title">Projects</h3>
                                {/* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4> */}
                                <p>
                                "Get ready to dive into my academic project and witness some mind-blowing stuff! I've cracked open tough problems, uncovered wicked solutions, and made a real splash in the field. Join me on this epic ride as I show you the game-changing impact of my work. It's gonna blow your mind, so buckle up and let's get exploring!"
                                </p>
                                <br/><Link className={styles.buttonlink} to="/Projects">Explore It</Link><br/>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                date="GET IN TOUCH WITH ME"
                                contentStyle={{ background: 'rgba(13, 13, 13, 0.473)', color: '#fff' }}
                                iconStyle={{ background: 'pink', color: '#fff' }}
                                icon=""
                            >
                                <h3 className="vertical-timeline-element-title">Contact me</h3>
                                {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
                                <p>
                                "Click now to connect with me and let's start unraveling the fascinating details together. Whether you're curious, have questions, or simply want to explore further, don't hesitate to reach out. Get in touch and let's embark on an unforgettable intellectual adventure!"
                                </p>
                                <br/><Link className={styles.buttonlink} to="/SocialMedia">Get In Touch</Link><br/>
                            </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
                
            </div>
        );



}