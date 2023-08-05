import React, { useRef,useState } from 'react';
import  emailjs  from '@emailjs/browser';
import styles from '../App.module.css';
export default function Contactme() {
    const[response,useresponse]=new useState("Click to Send Message");
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_0kvlbhx', 'template_ko5wshq', form.current, 'wh1mZLy0HMSvFi7H4')
            .then((result) => {
                useresponse("Message Sucessfully Send")
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className={styles.contact_contents}>
            <h2>Get In touch with Me</h2>
            <div className={styles.main_content}>
                <form ref={form} onSubmit={sendEmail} className={styles.form}>
                    <fieldset>
                        <legend>FirstName</legend>
                        <input type="text" className={styles.halfinput} name="user_fname" placeholder="First Name" required/>
                    </fieldset>
                    <fieldset>
                        <legend>LastName</legend>
                        <input type="text" className={styles.halfinput} name="user_lname" placeholder="Last Name" required/>
                    </fieldset>
                    <fieldset>
                        <legend>EmailId</legend>
                        <input type="email" className={styles.fullinput} placeholder="Email id" name="user_email" required/>
                    </fieldset>
                    <fieldset>
                        <legend>ContactNo</legend>
                        <input type="number" className={styles.fullinput} name="user_phone" placeholder="Phone Number" required/>
                    </fieldset>
                    <fieldset>
                        <legend>Message</legend>
                        <textarea rows="4" name="message" cols="50" className={[styles.fullinput, styles.largebox].join(' ')} placeholder="Write a message"></textarea>
                    </fieldset>
                    <br />
                    <button type="submit" className={styles.send_button} value="Send">Send Message</button>
                    <span className={styles.responsemessage}>{response}</span>
                </form>
            </div>

        </div>
    );
}
