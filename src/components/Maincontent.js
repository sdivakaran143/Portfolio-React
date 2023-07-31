import styles from '../App.module.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import  'aos/dist/aos.css'
import {Link} from 'react-router-dom';
// import Divakaran from 'F:/Portfolio_Mine/profile/src/photo.png';
// import {Academics as Academics} from './Subcomponents';
import Galleryview from './galareyview';
function Maincontent(){
    useEffect(()=>{
        AOS.init({duration:4000});
    },[]);
    return(
        <div>
        <div className={styles.content}>
            <div className={styles.contentintro} data-aos="fade-in">
            <div className={styles.tittle} data-aos="fade-in">
                <h1>I'M Divakaran_Senthilkumar</h1>   
                <span>Student At K.S.R. college of engineering</span>
                {/* <span>Mern stack developer</span> */}
                <div className={styles.Maincontentdetials}>
                    <Link className={styles.resumebtn} target='_blank' to="https://sdivakaran143.github.io/Virtual-Resume/">View Resume</Link>
                    <Link to="/About" className={styles.aboutlink} >View Detials➟</Link>
                </div>
                
                <div className={styles.icon}>
                        <p>scroll down</p>
                        <div></div>
                </div>
            </div>
                {/* <img className={styles.image} src={Divakaran}/> */}
            </div>
        </div>
        <div className={styles.contentcont}>
           {/* <h3>heading</h3> */}
                {/* <Academics/> */}
            <Galleryview/>
            {/* <svg width="900" height="600">
    <path d="M 300 300
             S 100 200 300 100
             M 300 300
             S 900 600 -100 610" stroke="black" stroke-width="2" fill="none"/>
  </svg> */}

                
                
        </div>
        </div>
    );
}
export default Maincontent;