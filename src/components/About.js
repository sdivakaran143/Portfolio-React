import styles from '../App.module.css';
import detials from './content.json';

import React, { useEffect } from 'react';
import AOS from 'aos';
import  'aos/dist/aos.css'
import {Academics as Academics} from './Subcomponents';
import {Introductions as Intro} from './Subcomponents';
import Myskills from './Myskills';
import Certificates from './Certificates';
export default function About(){
    useEffect(()=>{
        AOS.init({duration:2000});
    },[]);
        return(
            <div>
                <Intro/>
                <Academics/>
                <Myskills/>
                <Certificates/>
            </div>
        );



}