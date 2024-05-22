import React, { useRef,useState } from 'react';
import  emailjs  from '@emailjs/browser';
import styles from '../App.module.css';
export default function Contactme() {
    const[response,useresponse]=new useState("Send Message");
    const form = useRef();
    const sendEmail = (e) => {
        useresponse("Message Sending...")
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
            <h2>Text Me I'll Catch You..</h2>
            <div className={styles.main_content}>
                <form ref={form} onSubmit={sendEmail} className={styles.form}>
                        <label>FirstName</label>
                        <input type="text" className={styles.halfinput} name="user_fname" placeholder="Devin" required/>
                        <label>LastName</label>
                        <input type="text" className={styles.halfinput} name="user_lname" placeholder="Charles" required/>
                        <label>EmailId</label>
                        <input type="email" className={styles.fullinput} placeholder="Email id" name="abc@gmail.com" required/>
                        <label>ContactNo</label>
                        <input type="number" className={styles.fullinput} name="user_phone" placeholder="95XXXXXX62" required/>
                        <label>Message</label>
                        <textarea rows="4" name="message" cols="50" className={[styles.fullinput, styles.largebox].join(' ')} placeholder="Write a message"></textarea>
                        <br />
                    <button type="submit" className={styles.send_button} value="Send">{response}</button>
                    {/* <span className={styles.responsemessage}>{response}</span> */}
                </form>
            </div>

        </div>
    );
}
