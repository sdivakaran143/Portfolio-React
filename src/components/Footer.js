import styles from '../App.module.css';
import React from 'react';
import {BsFacebook,BsTwitter,BsGithub,BsInstagram,BsYoutube} from "react-icons/bs";
function Footer (){
    return(
        <div className={styles.footer}>
            <div className={styles.main_socialmedias}>
                    <a title="Facebook" href="https://www.facebook.com/profile.php?id=100013832790953"><BsFacebook/></a>
                    <a title="Twitter" href="https://twitter.com/sdivakaran143"><BsTwitter/></a>                 
                    <a title="Instagram" href="https://www.instagram.com/sdivakaran143/"><BsInstagram/></a>
                    <a title="GitHub" href="https://github.com/sdivakaran143"><BsGithub/></a>
                    <a title="Youtube" href="https://www.youtube.com/@saralstudio4449"><BsYoutube/></a>              
            </div>
            <div className={styles.contactme}>
                
            </div>
        </div>
    );
}
export default Footer;