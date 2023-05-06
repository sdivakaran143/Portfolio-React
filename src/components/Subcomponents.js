import detials from './content.json';
import styles from '../App.module.css';
import React, {useEffect } from 'react';
import AOS from 'aos';
import  'aos/dist/aos.css';
const Academics=()=>{
    useEffect(()=>{
        AOS.init({duration:2000});
    },[]);
    return(
        <div className={styles.thisisblock} data-aos="flip-left">
        <h3>academics</h3>
        <div className={styles.academic}>
            <div className={[styles.academicdetials,styles.acd1].join(" ")}>
                <p>2020-2024</p>
                <div data-aos="fade-left" className={styles.frame}>
                <p>{detials.academic.college}</p><br/>
                <span>Percentage : {detials.academic.collegepercentage}</span>
                </div>
            </div>
            <div className={[styles.academicdetials,styles.acd2].join(" ")}>
                <p>2020</p>
                <div data-aos="fade-right" className={styles.frame}>
                <p>{detials.academic.hsc}</p><br/>
                <span>Percentage : {detials.academic.hscpercentage}</span>
                </div>
            </div>
            <div className={[styles.academicdetials,styles.acd3].join(" ")}>
                <p>2018</p>
                <div data-aos="fade-left" className={styles.frame}>
                <p>{detials.academic.sslc}</p><br/>
                <span>Percentage : {detials.academic.sslcpercentage}</span>
                </div>
            </div>
        </div>
    </div>
    )
}
const Introductions =()=>{
    return(
        <div data-aos="fade-in" className={styles.introduction} >
        <h3>introduction my self</h3><br/>
       <p className={styles.introductioncontent}>{detials.intro}</p>
       </div>
    );
}
export  {Academics,Introductions};