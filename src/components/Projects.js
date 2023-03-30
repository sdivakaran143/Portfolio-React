import styles from '../App.module.css';
import React from 'react';
import projectsContent from "./content.json";
export default function Projects(){
    const projectcomponents=()=>{
        return(
            <div>
                {Object.values(projectsContent.projectsContent).map(x=>{
                return (
                    <div key={x.id} className={styles.project_cards}>
                    <div className={styles.projectCenterContent}>
                    <img src={x.image} alt="image" />
                    <div className={styles.projectdescription}>
                        <h2>{x.title}</h2>
                        <p>{x.description}</p>
                        <p>Technolgy Used : {x.tech}</p>
                        <button>Github ➟</button>
                    </div>
                    </div>
                    </div>
                );
            })}
            </div>
        );
    }
    return(
        <div className={styles.projects_contents}>
            <div>
                {projectcomponents()}
            </div>
        </div>
    );
}

// <div className={styles.project_cards}>
// <div className={styles.projectCenterContent}>
//       {/* <img src="https://media.wired.com/photos/592699b8af95806129f4fff0/191:100/pass/GoogleHP-605827098.jpg"/> */}
    // <img src="https://media.wired.com/photos/592699b8af95806129f4fff0/191:100/pass/GoogleHP-605827098.jpg"/>
    // <div className={styles.projectdescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
// </div>