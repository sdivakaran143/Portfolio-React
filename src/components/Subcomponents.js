import detials from './content.json';
import styles from '../App.module.css';
import React, {useEffect } from 'react';
import AOS from 'aos';
import  'aos/dist/aos.css';
import {FaSchool,FaUniversity} from "react-icons/fa";
import {CgNotes} from "react-icons/cg";
import {MdSchool} from "react-icons/md";
import {PiGraduationCapFill} from "react-icons/pi";


const Academics=()=>{
    useEffect(()=>{
        AOS.init({duration:2000});
    },[]);
    return(
        <div className={styles.thisisblock} >
        <h3 className={styles.subheading}>Academics</h3>
        <div className={styles.academic}data-aos="flip-left">
            <div className={[styles.academicdetials,styles.acd1].join(" ")}>
                <p><PiGraduationCapFill/> 2020-2024</p>
                <div data-aos="fade-left" className={styles.frame}>
                <FaUniversity/>
                <p>{detials.academic.college}</p><br/>
                <span><CgNotes/> {detials.academic.collegepercentage}</span>
                </div>
            </div>
            <div className={[styles.academicdetials,styles.acd2].join(" ")}>
                <p><MdSchool/> 2020</p>
                <div data-aos="fade-right" className={styles.frame}>
                <FaSchool/>
                <p>{detials.academic.hsc}</p><br/>
                <span><CgNotes/> {detials.academic.hscpercentage}%</span>
                </div>
            </div>
            <div className={[styles.academicdetials,styles.acd3].join(" ")}>
                <p><MdSchool/>2018</p>
                <div data-aos="fade-left" className={styles.frame}>
                <FaSchool/>
                <p>{detials.academic.sslc}</p><br/>
                <span><CgNotes/> {detials.academic.sslcpercentage}%</span>
                </div>
            </div>
        </div>
    </div>
    )
}
const Introductions =()=>{
    return(
        <div className={styles.introductionheight}>
            <div data-aos="fade-in" className={styles.introduction} >
                <h3 className={styles.subheading}>My Self</h3><br/>
            <div>
            <div className={styles.image}></div>
                <p className={styles.introductioncontent}>{detials.intro}</p>
            </div>
            </div>
        </div>
    );
}
export  {Academics,Introductions};