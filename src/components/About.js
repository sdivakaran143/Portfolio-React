import styles from '../App.module.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import  'aos/dist/aos.css'
import {Academics} from './Subcomponents';
import {Introductions as Intro} from './Subcomponents';
import Myskills from './Myskills';
import Certificates from './Certificates';
import { Link } from 'react-scroll';

export default function About(){
    useEffect(()=>{
        AOS.init({duration:2000});
    },[]);

    const navigatebar=()=>{
        // console.log("navigatebar");
        return (
            <div className={styles.sidenavigationbar}>
                <ul>
                    <li><Link to='Intro'className={styles.sidelink} smooth={true} duration={500}>&nbsp;</Link></li>
                    <li><Link to='Academics'className={styles.sidelink} smooth={true} duration={500} >&nbsp;</Link></li>
                    <li><Link to='Myskills' className={styles.sidelink} smooth={true} duration={500} >&nbsp;</Link></li>
                    <li><Link to='Certificates' className={styles.sidelink} smooth={true} duration={500} >&nbsp;</Link></li>
                </ul>
            </div>
        );
    }
        return(
            <div>
                <span id='Intro'/>
                <Intro/>
                <span id='Academics'/>
                <Academics/>
                <span id='Myskills'/>
                <Myskills/>
                <span id='Certificates'/>
                <Certificates/>
                {navigatebar()}
            </div>
        );



}