import styles from '../App.module.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import  'aos/dist/aos.css'
import {Academics} from './Subcomponents';
import {Introductions as Intro} from './Subcomponents';
import Myskills from './Myskills';
import Certificates from './Certificates';
export default function About(){
    useEffect(()=>{
        AOS.init({duration:2000});
    },[]);

    const navigatebar=()=>{
        // console.log("navigatebar");
        return (
            <div className={styles.sidenavigationbar}>
                <ul>
                    <li><a href='#intro'>&nbsp;</a></li>
                    <li><a href='#Academics'>&nbsp;</a></li>
                    <li><a href='#Myskills'>&nbsp;</a></li>
                    <li><a href='#Certificates'>&nbsp;</a></li>
                </ul>
            </div>
        );
    }
        return(
            <div>
                <span id='intro'/>
                <Intro/>
                <span id='Academics'/>
                <Academics/>
                <span id='Myskills'/>
                <Myskills/>
                <span id='Certificates'/>
                <Certificates/>
                {/* {navigatebar()} */}
            </div>
        );



}