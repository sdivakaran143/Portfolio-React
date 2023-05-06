import styles from '../App.module.css';
import React, { useState,useEffect } from 'react';
import {MdOutlineConnectWithoutContact,MdDarkMode, MdLightMode} from "react-icons/md";
import {Link} from "react-router-dom";
import AOS from 'aos';
import  'aos/dist/aos.css';
function Navigationbar(props){
    useEffect(()=>{
        AOS.init({duration:1000});
    },[]);
    const [logo,setlogo]=useState(localStorage.getItem("Theme")==="Dark"?true:false);
    // console.log(props.componentUpdate(1));
    const[pos,setpos]=useState(false);
    function changelogo(){
        // console.log(theme);
        (logo)?setlogo(false):setlogo(true);
    }
    window.addEventListener("scroll",findpos);
    function findpos(){
        // console.log(window.scrollY);
        (window.scrollY>90)?setpos(true):setpos(false);
        // (window.scrollY>627)?setpos(true):setpos(false);
        // console.log(window.scrollY);
    }
    return(
        <div className={styles.navmain}>
             <div className={(pos)?styles.addcolor:""}>
            <ul>
                <li><Link className={styles.link} onClick="#" to="/Home" id="top">Home</Link></li>
                <li><Link className={styles.link} onClick="#" to="/About" >About</Link></li>
                <li><Link className={styles.link} onClick="#" to="/Projects" >Projects</Link></li>
                <li><Link className={styles.link} onClick="#" to="/ContactMe" >Contact</Link></li>
                {(pos)?<li className={styles.getintouch} data-aos="fade-in"><Link className={styles.link} onClick="#" to="/ContactMe">Get In Touch</Link></li>:""}
            </ul>
            <Link className={styles.logo} to="/SocialMedia"><MdOutlineConnectWithoutContact className={styles.logo}/></Link>
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