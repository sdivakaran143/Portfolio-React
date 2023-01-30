import styles from './App.module.css';
import React from 'react';
import {MdOutlineConnectWithoutContact,MdDarkMode} from "react-icons/md";
function Navigationbar(){
    return(
        <div className={styles.navmain}>
             <div>
            <ul>
                <li id="top"><a href="#top">Home</a></li>
                <li><a href="http://">About</a></li>
                <li><a href="http://">Projects</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
            <a className={styles.logo} href="socialmedias.html"><MdOutlineConnectWithoutContact className={styles.logo}/></a>
            <button className={styles.changeLogo} onclick=""><MdDarkMode/></button>
        </div>
        </div>
    );
}
export default Navigationbar;