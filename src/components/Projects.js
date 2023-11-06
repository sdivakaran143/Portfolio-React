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

    const technologies=(tech)=>{
        return(
            <div className={styles.projecttechimagediv}>{
                (tech).map((techImage) => (
                    <img key={techImage.id} className={styles.projecttechimage} src={techImage} alt='projectimage' />
                ))
          }
          </div>
        )
    }

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
                        <div className={styles.imageandlink} >
                            <img src={x.image} className={styles.mainimg} alt="project images" />
                            <div className={styles.linkbuttons}>
                                {(x.livelink)?(<Link target='_blank' to={x.livelink}><button ><FaLink/> Live</button></Link>):""}
                                {(x.repolink)?(<Link target='_blank' to={x.repolink}><button ><FaLink/> Github</button></Link>):""}
                            </div>
                        </div>
                    </div>
                        <div className={styles.hoverindication} ><p>Hover to get link</p></div>
                    <div className={styles.projectdescription}>
                        <h1 className={styles.captial}><b>{x.title}</b></h1>
                        <p>{x.description}</p>
                        {technologies(x.tech)}
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
