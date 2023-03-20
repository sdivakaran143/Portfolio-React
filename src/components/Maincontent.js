import styles from '../App.module.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import  'aos/dist/aos.css'
import Divakaran from 'F:/Portfolio_Mine/profile/src/photo.png';
// import {Academics as Academics} from './Subcomponents';
import Galleryview from './galareyview';
function Maincontent(){
    useEffect(()=>{
        AOS.init({duration:2000});
    },[]);
    return(
        <div>
        <div className={styles.content}>
            <div className={styles.contentintro} data-aos="fade-in">
            <div className={styles.tittle} data-aos="fade-right">
                <p>I'M Divakaran_Senthilkumar</p>   
                <span>Student At K.S.R. college of engineering</span>
                {/* <span>Mern stack developer</span> */}
                <div className={styles.Maincontentdetials}>
                    <a className={styles.resumebtn} href="https://sdivakaran143.github.io/Virtual-Resume/">View Resume</a>
                    <a sty>View Detials →</a>
                    </div>
            </div>
                <img className={styles.image} src={Divakaran}/>
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