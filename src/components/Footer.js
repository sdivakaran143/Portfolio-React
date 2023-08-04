import styles from '../App.module.css';
import React from 'react';
import {BsFacebook,BsTwitter,BsGithub,BsInstagram,BsYoutube,BsWhatsapp} from "react-icons/bs";
import {SiMinutemailer} from "react-icons/si";
import { Link } from 'react-router-dom';
function Footer (){
    return(
        <div className={styles.footer}>
            <div className={styles.main_socialmedias}>
                    <Link title="Facebook" to="https://www.facebook.com/profile.php?id=100013832790953"><BsFacebook/></Link>
                    <Link title="Twitter" to="https://twitter.com/sdivakaran143"><BsTwitter/></Link>                 
                    <Link title="Instagram" to="https://www.instagram.com/sdivakaran143/"><BsInstagram/></Link>
                    <Link title="GitHub" to="https://github.com/sdivakaran143"><BsGithub/></Link>
                    <Link title="Youtube" to="https://www.youtube.com/@sdivakaran143"><BsYoutube/></Link>              
            </div>
            <div className={styles.copyrights}>
            © Copyright 2023, All Rights Reserved  |  DivakaranSenthilkumar
            <br/>
            NeedHelp? Developed.mailme@gmail.com
            </div>
        </div>
    );
}
const NameplateFooter=()=>{
    return(
        <div className={styles.NameplateFooter}>
            <div className={styles.NamePlate}>
                <h6>Developed By</h6>
                <h3>DivakaranSethilkumar</h3>
            </div>
            <div>

            </div>
            <div className={styles.NamePlateSocialMedia}>
                <Link className={styles.NamePlateSocialMediaicon} title="Facebook" target='_blank' to="https://www.facebook.com/profile.php?id=100013832790953"><BsFacebook/></Link>
                <Link className={styles.NamePlateSocialMediaicon} title="Twitter" target='_blank'to="https://twitter.com/sdivakaran143"><BsTwitter/></Link>                 
                <Link className={styles.NamePlateSocialMediaicon} title="Instagram" target='_blank' to="https://www.instagram.com/sdivakaran143/"><BsInstagram/></Link>
                <Link className={styles.NamePlateSocialMediaicon} title="GitHub"target='_blank' to="https://github.com/sdivakaran143"><BsGithub/></Link>
                <Link className={styles.NamePlateSocialMediaicon} title="Youtube"target='_blank' to="https://www.youtube.com/@sdivakaran143"><BsYoutube/></Link>                   
                <Link className={styles.NamePlateSocialMediaicon}title="GitHub"target='_blank' to="https://github.com/sdivakaran143"><BsGithub/></Link>
                <Link className={styles.NamePlateSocialMediaicon} title="Whatsapp" target='_blank'to="https://api.whatsapp.com/send?phone=919500366762&text=Hai%20Diva%20!%20.%20.%20.%F0%9F%98%8D"><BsWhatsapp/></Link>                   
                <a className={styles.NamePlateSocialMediaicon} title="mail" href="mailto:divakarancse2020@ksrce.ac.in?bcc=sdivakaran683@gmail.com&subject=For%20Connection%20&body=Hai%20Iam%20%3CYour%20Name%3E!..."><SiMinutemailer/></a>
            </div>
            <div className={styles.copyrightscenter}>
            © Copyright 2023, All Rights Reserved  |  DivakaranSenthilkumar
            </div>
        </div>
    )
}
export {Footer,NameplateFooter};