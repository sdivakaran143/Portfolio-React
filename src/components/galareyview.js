import styles from '../App.module.css';
import AOS from 'aos';
import  'aos/dist/aos.css'
import React, { useEffect } from 'react';
import {Link} from "react-router-dom";
import {BsLinkedin,BsWhatsapp} from "react-icons/bs";
import 'react-vertical-timeline-component/style.min.css';
import contents from "./content.json";

export default function Galleryview(){
    useEffect(()=>{
        AOS.init({duration:2000});
    },[]);
        return(
            <div>
                <div className={styles.galleryview}>

                    <div className={styles.gallaryviewCards} data-aos="zoom-in-down">
                        <div className={styles.lftbox}>
                            <img className={styles.image}src={contents.image} alt="Imageofdivakaran" />
                        </div>
                        <div className={styles.rytbox}>
                            <h3>Hai I'm  Divakaran Senthilkumar</h3>
                            <p>I am a skilled web developer with expertise in ReactJS, a popular JavaScript library for building user interfaces. With a passion for creating interactive and dynamic web applications, I strive to deliver exceptional user experiences. Let's collaborate to bring your digital ideas to life!</p>
                            <div className={styles.buttonlinkdiv}><Link className={styles.buttonlink} to="/about">Know About Me!</Link></div>
                        </div>
                    </div>

                    <div className={styles.gallaryviewCards} data-aos="zoom-in-down">
                        <div className={styles.rytbox}>
                            <h2>&lt;Projects/&gt;</h2><p>Get ready to dive into my academic project and witness some mind-blowing stuff! I've cracked open tough problems, uncovered wicked solutions, and made a real splash in the field. Join me on this epic ride as I show you the game-changing impact of my work. It's gonna blow your mind, so buckle up and let's get exploring!</p>
                            <div className={styles.buttonlinkdiv}><Link className={styles.buttonlink} to="/projects">Explore My Projects</Link></div>
                        </div>
                    </div>
                    
                    <div className={styles.gallaryviewCards} data-aos="zoom-in-down">
                        <div className={styles.lftbox}>
                            <div className={styles.ContactCard}>
                                <p className={styles.ContactCardinfos}>
                                    <Link title="Whatsapp" target='_blank'to="https://api.whatsapp.com/send?phone=919500366762&text=Hai%20Diva%20!%20.%20.%20.%F0%9F%98%8D"><BsWhatsapp/>
                                    <br/>9500366762<br/>Whatsapp</Link>
                                </p>
                            </div>
                            <div className={styles.ContactCard}>
                                <p className={styles.ContactCardinfos}>
                                    <Link title="Linkedin" target='_blank'to="https://www.linkedin.com/in/divakaran-senthilkumar-78779b248/"><BsLinkedin/>
                                    <br/>Divakaran SenthilKumar<br/>LinkedIN</Link>
                                </p>
                            </div>
                        </div>
                        <div className={styles.rytbox}>
                            <h2>&lt;ContactMe/&gt;</h2>
                            <p>Click now to connect with me and let's start unraveling the fascinating details together. Whether you're curious, have questions, or simply want to explore further, don't hesitate to reach out. Get in touch and let's embark on an unforgettable intellectual adventure!</p>
                            <div className={styles.buttonlinkdiv}><Link className={styles.buttonlink} to="/contactme">GetToch</Link></div>
                        </div>
                </div>
                </div>
                
            </div>
        );
        
        
        
    }