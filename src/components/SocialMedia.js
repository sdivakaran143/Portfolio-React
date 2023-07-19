import styles from '../App.module.css';
import React from 'react';
import {BsFacebook,BsTwitter,BsGithub,BsInstagram,BsYoutube,BsLinkedin,BsWhatsapp} from "react-icons/bs";
import {SiMinutemailer} from "react-icons/si";
import { Link } from 'react-router-dom';
export default function socialmedias(){
        return(
            <div className={styles.content_socialmedia}>
                <div className={styles.tittle_socialmedia}>
                    <span>Catch Me Via Social Platforms</span>
                <br/>
                <div className={styles.socialmedias}>
                    <Link title="Facebook" to="https://www.facebook.com/profile.php?id=100013832790953"><BsFacebook/></Link>
                    <Link title="Twitter" to="https://twitter.com/sdivakaran143"><BsTwitter/></Link>                 
                    <Link title="Instagram" to="https://www.instagram.com/sdivakaran143/"><BsInstagram/></Link>
                    <Link title="GitHub" to="https://github.com/sdivakaran143"><BsGithub/></Link>
                    <Link title="Youtube" to="https://www.youtube.com/@sdivakaran143"><BsYoutube/></Link>                   
                </div>
                <div className={styles.socialmedias}>
                    <Link title="Linked" to="https://www.linkedin.com/in/divakaran-senthilkumar-78779b248/"><BsLinkedin/></Link>
                    <Link title="Whatsapp" to="https://api.whatsapp.com/send?phone=919500366762&text=Hai%20Diva%20!%20.%20.%20.%F0%9F%98%8D"><BsWhatsapp/></Link>                   
                </div>
                {/* <span className={styles.fixedmatter}><a href="mailto:divakarancse2020@ksrce.ac.in?bcc=sdivakaran683@gmail.com&subject=For%20Connection%20&body=Hai%20Iam%20%3CYour%20Name%3E!..."><SiMinutemailer/></a></span> */}
                {/* <Link to="/ContactMe"><button className={styles.conme}>Contact Me</button></Link> */}
            </div>
        </div>
        );
}