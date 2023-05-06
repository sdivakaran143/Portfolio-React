import styles from '../App.module.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import  'aos/dist/aos.css'
import skillist from "./content.json";

export default function Myskills(){  
    useEffect(()=>{
        AOS.init({duration:500});
    },[]);

    const skilssets=()=>{
        return(
            <div className={styles.Myskill_contents}>
               {
                skillist.skills.map(x=>{
                    return(
                        <div key={x.id} className={styles.skillbox} data-aos="fade-up"data-aos-anchor-placement="center-bottom">
                            <div className={styles.skillimage}>
                                <img  src={x.icon} alt="icon"/>
                            </div>
                            <br/>
                            <div className={styles.skillcontent}>{x.skill}</div>
                        </div>
                    );
                })
                
               }

            </div>
        )
    }
   
    return(
        <div className={styles.skill}>
            <h3>Skills</h3>
            {skilssets()}
        </div>
    );
}