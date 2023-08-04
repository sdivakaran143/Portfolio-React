import styles from '../App.module.css';
import AOS from 'aos';
import  'aos/dist/aos.css'
import React, { useEffect } from 'react';
import {Link} from "react-router-dom";
import 'react-vertical-timeline-component/style.min.css';
export default function Galleryview(){
    useEffect(()=>{
        AOS.init({duration:2000});
    },[]);
        return(
            <div>
                <div className={styles.galleryview}>
                    <div className={styles.gallaryviewCards} data-aos="fade-up">
                        <div className={styles.lftbox}>
                            <img className={styles.image}src='https://github.com/sdivakaran143/Portfolio-React/blob/master/public/images/mine.jpg?raw=true' alt="Imageofdivakaran" />
                        </div>
                        <div className={styles.rytbox}>
                            <h3>Hai I'm  Divakaran Senthilkumar</h3>
                            <p>I am a skilled web developer with expertise in ReactJS, a popular JavaScript library for building user interfaces. With a passion for creating interactive and dynamic web applications, I strive to deliver exceptional user experiences. Let's collaborate to bring your digital ideas to life!</p>
                            <div className={styles.buttonlinkdiv}><Link className={styles.buttonlink} to="/About">Know About Me!</Link></div>
                        </div>
                    </div>

                    <div className={styles.gallaryviewCards} data-aos="fade-up">
                        <div className={styles.rytbox}>
                            <p><h2>&lt;Projects/&gt;</h2>Get ready to dive into my academic project and witness some mind-blowing stuff! I've cracked open tough problems, uncovered wicked solutions, and made a real splash in the field. Join me on this epic ride as I show you the game-changing impact of my work. It's gonna blow your mind, so buckle up and let's get exploring!</p>
                            <div className={styles.buttonlinkdiv}><Link className={styles.buttonlink} to="/About">Explore My Projects</Link></div>
                        </div>
                    </div>
                    
                    <div className={styles.gallaryviewCards} data-aos="fade-up">
                        <div className={styles.lftbox} >
                            <div className={styles.ContactCard}>
                            </div>
                            <div className={styles.ContactCard}>
                            </div>
                        </div>
                        <div className={styles.rytbox}>
                            <p><h2>&lt;ContactMe/&gt;</h2>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        );



}