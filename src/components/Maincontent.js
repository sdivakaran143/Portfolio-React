import styles from '../App.module.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import  'aos/dist/aos.css'
import Divakaran from 'F:/Portfolio_Mine/profile/src/photo.png';
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
                <span>Student at K.S.R. College Of engineering</span>
                {/* <span>Mern stack developer</span> */}
            </div>
                <img className={styles.image} src={Divakaran}/>
            </div>
        </div>
        <div>
           {/* <h3>heading</h3> */}
                <h3>MAinFest</h3>
                <p>dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</p>
        </div>
        </div>
    );
}
export default Maincontent;