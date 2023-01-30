import styles from './App.module.css';
import Navigationbar from './Navigationbar';
import Maincontent from './Maincontent';
// import React,{useState} from 'react';


function App() {
    return(
        <div className={styles.App}>
            <nav className={styles.navbar}>
                <Navigationbar/>
            </nav>
            <div className={styles.content}>
                <Maincontent/>
            </div>
            <footer>
                <p>Copyright 2021</p>
            </footer>
        </div>
    );
  
}

export default App;
