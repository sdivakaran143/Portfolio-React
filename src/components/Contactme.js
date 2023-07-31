import styles from '../App.module.css';
import React from 'react';
export default function Contactme(){
    return(
        <div className={styles.contact_contents}>
            <h2>Get In touch with Me</h2>
            <div className={styles.main_content}>
            <form  action="">
                <fieldset>
                    <legend>FirstName:</legend>
                    <input type="text" className={styles.halfinput} placeholder="First Name"/>
                </fieldset>
                <fieldset>
                    <legend>LastName</legend>
                    <input type="text"className={styles.halfinput} placeholder="Last Name"/>
                </fieldset>
                <fieldset>
                    <legend>EmailId</legend>
                    <input type="email" className={styles.fullinput} placeholder="Email id "/>
                </fieldset>
                <fieldset>
                    <legend>ContactNo</legend>
                    <input type="number" className={styles.fullinput} placeholder="Phone Number"/>
                </fieldset>
                <fieldset>
                    <legend>Message</legend>
                    <textarea name="freeform" rows="4" cols="50" className={[styles.fullinput,styles.largebox].join(' ')} placeholder="Write a message"></textarea>
                </fieldset>
                    <br/>
                    <button disabled="disabled" className={styles.send_button} title="Unavailable currenlty under in Maintanece">Send</button>
                </form> 
            </div>
        
        </div>
    );
}
