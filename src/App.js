import React, { useState,useEffect } from 'react';
import styles from './App.module.css';
import Navigationbar from './components/Navigationbar';
import Maincontent from './components/Maincontent';
import Contactme from './components/Contactme';
import SocialMedias from './components/SocialMedia';
import {Footer,NameplateFooter} from './components/Footer';
import {Routes,Route,useLocation} from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
function App() {
    const [theme,settheme] = useState(localStorage.getItem("Theme")==="Dark"?"Light" :"Dark");
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [location]);    
      
    function changetheme(){
        (theme!=="Light")?settheme("Light"):settheme("Dark");
        localStorage.setItem("Theme", theme);
    }
    return(
        <div className={styles.App} data-theme={theme} >
            <span id='Intro'/>
            <nav className={styles.navbar}>
                <Navigationbar changetheme={changetheme} />
            </nav>
            <div className={styles.CompleteContent}>
                <Routes>
                    <Route exact path='/' element={<Maincontent/>}/>
                    <Route exact path='/home' element={<Maincontent/>}/>
                    <Route exact path='/contactme' element={<Contactme/>}/>
                    <Route exact path='/socialmedia' element={<SocialMedias/>}/>
                    <Route exact path='/about' element={<About/>}/>
                    <Route exact path='/projects' element={<Projects/>}/>
                </Routes>
            </div>
            <footer>
            {(location.pathname==="/"||location.pathname==="/home")?<NameplateFooter/>:<Footer/>}
            </footer>
        </div>
    );
  
}

export default App;
