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
                    <a className={styles.resumebtn} href="https://sdivakaran143.github.io/Virtual-Resume/">View Resume</a>
                    <Link to="/About" >View Detials ➟</Link>
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
                
                
        </div>
        </div>
    );
}
export default Maincontent;