import styles from '../App.module.css';
import React, { useState } from 'react';
import {MdOutlineConnectWithoutContact,MdDarkMode, MdLightMode} from "react-icons/md";
import {Link} from "react-router-dom";
function Navigationbar(props){
    const [logo,setlogo]=useState(true);
    // console.log(props.componentUpdate(1));
    const[pos,setpos]=useState(false);
    function changelogo(){
        // console.log(theme);
        (logo)?setlogo(false):setlogo(true);
    }
    window.addEventListener("scroll",findpos);
    function findpos(){
        // console.log(window.scrollY);
        (window.scrollY>80)?setpos(true):setpos(false);
        // (window.scrollY>627)?setpos(true):setpos(false);
        // console.log(window.scrollY);
    }
    return(
        <div className={styles.navmain}>
             <div className={(pos)?styles.addcolor:""}>
            <ul>
                <li><Link className={styles.link} to="/" id="top">Home</Link></li>
                <li><Link className={styles.link} to="/" >About</Link></li>
                <li><Link className={styles.link} to="/" >Projects</Link></li>
                <li><Link className={styles.link} to="/" >Contact</Link></li>
            </ul>
            <Link className={styles.logo} to="/"><MdOutlineConnectWithoutContact className={styles.logo}/></Link>
            <button className={styles.changeLogo} onClick={()=>{
                changelogo();
                props.changetheme();
                }}>
                {(logo)?<MdDarkMode/>:<MdLightMode/>}
            </button>
        </div>
        </div>
    );
}
export default Navigationbar;