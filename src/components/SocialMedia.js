import styles from '../App.module.css';
import React from 'react';
import {BsFacebook,BsTwitter,BsGithub,BsInstagram,BsYoutube} from "react-icons/bs";
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
                <Link to="/ContactMe"><button className={styles.conme}>Contact Me</button></Link>
            </div>
        </div>
        );
}