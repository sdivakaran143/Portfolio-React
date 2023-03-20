import styles from '../App.module.css';
import React from 'react';
export default function Projects(){
    return(
        <div className={styles.projects_contents}>
            <div className={styles.project_cards}>
                <div className={styles.project_card}>
                    <h4>ECOMMERCE PRODUCT COMPAROSION</h4>
                    <h5>TECNOLOGY UsDE</h5>
                </div>
                <div className={styles.project_card}>
                    <h4>ECOMMERCE PRODUCT COMPAROSION</h4>
                    <h5>TECNOLOGY UsDE: anglur react nadaveikai</h5>
                </div>
            </div>
        </div>
    );
}