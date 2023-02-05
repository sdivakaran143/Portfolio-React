import React from 'react';
import styles from './App.module.css';
import Navigationbar from './components/Navigationbar';
import Maincontent from './components/Maincontent';
import Footer from './components/Footer';
import Contactme from './components/Contactme';
import SocialMedias from './components/SocialMedia';
import {Routes,Route} from 'react-router-dom';
function App() {

    return(
        <div className={styles.App}>
            <nav className={styles.navbar}>
                <Navigationbar />
            </nav>
            <div className={styles.CompleteContent}>
                <Routes>
                    <Route path='/' element={<Maincontent/>}/>
                    <Route path='/Home' element={<Maincontent/>}/>
                    <Route path='/ContactMe' element={<Contactme/>}/>
                    <Route path='/SocialMedia' element={<SocialMedias/>}/>
                </Routes>
            </div>
            <footer>
            <Footer/>
            </footer>
        </div>
    );
  
}

export default App;
