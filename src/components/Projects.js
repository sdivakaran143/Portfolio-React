import styles from '../App.module.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import  'aos/dist/aos.css'
import {Link} from "react-router-dom";
import {FaLink} from "react-icons/fa";
// import {SiMinutemailer} from "react-icons/si";
import projectsContent from "./content.json";

export default function Projects(){  
    useEffect(()=>{
        AOS.init({duration:500});
    },[]);
    const projectcomponents=()=>{
        return(
            <div>
                {Object.values(projectsContent.projectsContent).map(x=>{
                    var proimg= x.image;
                    var style={
                        background: `linear-gradient(to right, rgba(14, 14, 14, 0.939), rgba(16, 14, 14, 0.998)),url(${proimg}) no-repeat`,
                        backgroundSize: 'cover',
                        color:"white",
                      }
                return (
                    <div style={style} className={styles.project_cards}>
                    <div data-aos="fade-up" key={x.id} className={styles.projectCenterContent}>
                    <div className={styles.imgediv}>       
                        <img src={x.image} alt="image" />
                        <div className={styles.hoverindication} ><p>Hover to get link</p></div>

                       <div className={styles.linkbutton} ><button ><Link to={x.link}><FaLink/></Link><br/></button><p>Github</p></div>
                    </div>
                    <div className={styles.projectdescription}>
                        <h1 className={styles.captial}><b>{x.title}</b></h1>
                        <p>{x.description}</p>
                        <p>Technolgy Used : {x.tech}</p>
                    </div>
                    </div>
                    </div>
                );
            })}
            </div>
        );
    }
    return(
        <div className={styles.projects_contents}>
                {projectcomponents()}
        </div>
    );
}

// <div className={styles.project_cards}>
// <div className={styles.projectCenterContent}>
//       {/* <img src="https://media.wired.com/photos/592699b8af95806129f4fff0/191:100/pass/GoogleHP-605827098.jpg"/> */}
    // <img src="https://media.wired.com/photos/592699b8af95806129f4fff0/191:100/pass/GoogleHP-605827098.jpg"/>
    // <div className={styles.projectdescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
// </div>