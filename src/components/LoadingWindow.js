import styles from '../App.module.css';
import React from 'react';
import {PiHandsPrayingDuotone} from "react-icons/pi"
export default function LoadingWindow(){
    return(
        <div  className={styles.body}>
        <div  className={[styles.center,styles.loop].join(' ')}></div>
            <div className={[styles.center,styles.bikeWrapper].join(' ')}>
            <div className={[styles.centerBike,styles.bike].join(' ')}></div>
        </div>
        <div className={styles.welcome}><h1 className={styles.wecometitle}>welcome<br/>வணக்கம்<br/><PiHandsPrayingDuotone className={styles.vanakkam}/></h1></div>
    </div>
    );
}   