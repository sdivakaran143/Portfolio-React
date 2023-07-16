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
                    <li><Link  to='https:\\google.com' className={styles.pointer} smooth={true} duration={500}>top</Link></li>
                    <li><Link className={styles.pointer} smooth={true} duration={500} to='#Academics'>&nbsp;</Link></li>
                    <li><Link className={styles.pointer} smooth={true} duration={500} to='#Myskills'>&nbsp;</Link></li>
                    <li><Link className={styles.pointer} smooth={true} duration={500} to='#Certificates'>&nbsp;</Link></li>
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
                {navigatebar()}
            </div>
        );



}