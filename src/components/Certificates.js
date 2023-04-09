import styles from '../App.module.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import  'aos/dist/aos.css'
import contents from "./content.json";

export default function Certificates(){  
    useEffect(()=>{
        AOS.init({duration:500});
    },[]);

    const certificategenerate=()=>{
        return(
            <div className={styles.certificate_contents}>
               {
                   contents.certificates.map(x=>{
                    console.log(x);
                    return(
                        // <div key={x.key} className={styles.certificate} data-aos="fade-up"data-aos-anchor-placement="center-bottom">
                        <div key={x.key} className={styles.certificate} >
                            <div className={styles.certificateimg}></div>
                            <div className={styles.certificatedescription}>{x}</div>
                        </div>
                    );
                })
                
               }

            </div>
        )
    }
   
    return(
        <div>
            <h3>Certificate</h3>
            {certificategenerate()}
        </div>
    );
}