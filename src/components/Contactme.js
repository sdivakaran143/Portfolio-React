import styles from '../App.module.css';
import React from 'react';
export default function Contactme(){
    return(
        <div className={styles.contact_contents}>
            <h2>Get In touch with Me</h2>
            <div className={styles.main_content}>
            <form  action="">
                    <input type="text" className={styles.halfinput} placeholder="First Name"/>
                    <input type="text"className={styles.halfinput} placeholder="Last Name"/>
                    <input type="email" className={styles.fullinput} placeholder="Email id "/>
                    <input type="number" className={styles.fullinput} placeholder="Phone Number"/>
                    <textarea name="freeform" rows="4" cols="50" className={[styles.fullinput,styles.largebox].join(' ')} placeholder="Write a message"></textarea>
                    <br/>
                    <button disabled="disabled" className={styles.send_button} title="Unavailable currenlty under in Maintanece">Send</button>
                </form> 
            </div>
        
        </div>
    );
}
