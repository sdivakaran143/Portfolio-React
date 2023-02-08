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
                    <a title="Facebook" href="https://www.facebook.com/profile.php?id=100013832790953"><BsFacebook/></a>
                    <a title="Twitter" href="https://twitter.com/sdivakaran143"><BsTwitter/></a>                 
                    <a title="Instagram" href="https://www.instagram.com/sdivakaran143/"><BsInstagram/></a>
                    <a title="GitHub" href="https://github.com/sdivakaran143"><BsGithub/></a>
                    <a title="Youtube" href="https://www.youtube.com/@saralstudio4449"><BsYoutube/></a>                   
                </div>
                <div className={styles.socialmedias}>
                    <a title="Linked" href="https://www.linkedin.com/in/divakaran-senthilkumar-78779b248/"><BsLinkedin/></a>
                     <a title="Whatsapp" href="https://api.whatsapp.com/send?phone=919500366762&text=Hai%20Diva%20!%20.%20.%20.%F0%9F%98%8D"><BsWhatsapp/></a>                   
                </div>
                <span className={styles.fixedmatter}><a href="mailto:divakarancse2020@ksrce.ac.in?bcc=sdivakaran683@gmail.com&subject=For%20Connection%20&body=Hai%20Iam%20%3CYour%20Name%3E!..."><SiMinutemailer/></a></span>
                <Link to="/ContactMe"><button className={styles.conme}>Contact Me</button></Link>
            </div>
        </div>
        );
}