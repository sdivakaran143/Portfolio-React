import styles from '../App.module.css';
import detials from './content.json';

import React, { useEffect } from 'react';
import AOS from 'aos';
import  'aos/dist/aos.css'
import {Academics as Academics} from './Subcomponents';
import {Introductions as Intro} from './Subcomponents';
export default function Galleryview(){
    useEffect(()=>{
        AOS.init({duration:2000});
    },[]);
        return(
            <div>
                <div className={styles.gallery}>
                    <div className={[styles.galleryphoto,styles.photo1].join(" ")}></div>
                    <div className={[styles.galleryphoto,styles.photo2].join(" ")}></div>
                    <div className={[styles.galleryphoto,styles.photo3].join(" ")}></div>
                    <div className={[styles.galleryphoto,styles.photo4].join(" ")}></div>
                    <div className={[styles.galleryphoto,styles.photo5].join(" ")}></div>
                </div>
            </div>
        );



}