import React, { useState } from 'react';
import styles from './App.module.css';
import Navigationbar from './components/Navigationbar';
import Maincontent from './components/Maincontent';
import Footer from './components/Footer';
import Contactme from './components/Contactme';
import SocialMedias from './components/SocialMedia';
import {Routes,Route} from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
function App() {
    const [theme,settheme] = useState(localStorage.getItem("Theme")==="Dark"?"Light" :"Dark");
    function changetheme(){
        (theme!=="Light")?settheme("Light"):settheme("Dark");
        localStorage.setItem("Theme", theme);
    }
    return(
        <div className={styles.App} data-theme={theme} >
            <nav className={styles.navbar}>
                <Navigationbar changetheme={changetheme} />
            </nav>
            <div className={styles.CompleteContent}>
                <Routes>
                    <Route path='/' element={<Maincontent/>}/>
                    <Route path='/Home' element={<Maincontent/>}/>
                    <Route path='/ContactMe' element={<Contactme/>}/>
                    <Route path='/SocialMedia' element={<SocialMedias/>}/>
                    <Route path='/About' element={<About/>}/>
                    <Route path='/Projects' element={<Projects/>}/>
                </Routes>
            </div>
            <footer>
            <Footer/>
            </footer>
        </div>
    );
  
}

export default App;
