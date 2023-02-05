import styles from '../App.module.css';
import React from 'react';
import {MdOutlineConnectWithoutContact,MdDarkMode} from "react-icons/md";
import {Link} from "react-router-dom";
function Navigationbar(){
    // console.log(props.componentUpdate(1));
    return(
        <div className={styles.navmain}>
             <div>
            <ul>
                <li><Link className={styles.link} to="/Home" id="top">Home</Link></li>
                <li><Link className={styles.link} to="" >About</Link></li>
                <li><Link className={styles.link} to="" >Projects</Link></li>
                <li><Link className={styles.link} to="/ContactMe" >Contact</Link></li>
            </ul>
            <Link className={styles.logo} to="/SocialMedia"><MdOutlineConnectWithoutContact className={styles.logo}/></Link>
            <button className={styles.changeLogo} onClick=""><MdDarkMode/></button>
        </div>
        </div>
    );
}
export default Navigationbar;