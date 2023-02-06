import styles from '../App.module.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import  'aos/dist/aos.css'
function Maincontent(){
    useEffect(()=>{
        AOS.init({duration:2000});
    },[]);
    return(
        <div className={styles.content}>
              <div className={styles.tittle} data-aos="fade-right">
            <p>I'M Divakaran_Senthilkumar</p>
            <span>Mern stack developer</span>
        </div>
        </div>
    );
}
export default Maincontent;