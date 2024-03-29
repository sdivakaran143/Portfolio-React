import styles from '../App.module.css';
import React from 'react';
import {BsFacebook,BsTwitter,BsGithub,BsInstagram,BsYoutube,BsLinkedin,BsWhatsapp} from "react-icons/bs";
import { Link } from 'react-router-dom';
export default function socialmedias(){
        return(
            <div className={styles.content_socialmedia}>
                <div className={styles.tittle_socialmedia}>
                    <span>Catch Me Via Social Platforms</span>
                <br/>
                <div className={styles.socialmedias}>
                    <Link title="Facebook" target='_blank' to="https://www.facebook.com/profile.php?id=100013832790953"><BsFacebook/></Link>
                    <Link title="Twitter" target='_blank'to="https://twitter.com/sdivakaran143"><BsTwitter/></Link>                 
                    <Link title="Instagram" target='_blank' to="https://www.instagram.com/sdivakaran143/"><BsInstagram/></Link>
                    <Link title="GitHub"target='_blank' to="https://github.com/sdivakaran143"><BsGithub/></Link>
                    <Link title="Youtube"target='_blank' to="https://www.youtube.com/@sdivakaran143"><BsYoutube/></Link>                   
                </div>
                <div className={styles.socialmedias}>
                    <Link title="Linkedin" target='_blank'to="https://www.linkedin.com/in/divakaran-senthilkumar-78779b248/"><BsLinkedin/></Link>
                    <Link title="Whatsapp" target='_blank'to="https://api.whatsapp.com/send?phone=919500366762&text=Hai%20Diva%20!%20.%20.%20.%F0%9F%98%8D"><BsWhatsapp/></Link>                   
                </div>
                </div>
        </div>
        );
}