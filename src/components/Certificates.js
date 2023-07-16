import styles from '../App.module.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import  'aos/dist/aos.css'
import contents from "./content.json";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Certificates(){  
    useEffect(()=>{
        AOS.init({duration:1000});
    },[]);

    const certificategenerate=()=>{
        return(
            <div className={styles.certificate_contents}>
               {
                   contents.certificates.map(x=>{
                    return(
                        // <div key={x.key} className={styles.certificate} data-aos="fade-up"data-aos-anchor-placement="center-bottom">
                        <Slide index={x.key} className={styles.certifcateslide}>
                            <img className={styles.certificateimg} src={x.link}/>
                            <div className={styles.certificatedescription}>{x.tittle}</div>
                        </Slide>
                    );
                })
                
               }

            </div>
        )
    }
   
    return(
        <div className={styles.certificatemaindiv} data-aos="fade-up">
            <h3 className={styles.subheading}>Certificate</h3>
            <CarouselProvider
                naturalSlideWidth={1}
                naturalSlideHeight={1}
                totalSlides={contents.certificates.length}
                infinite={true}
                className={styles.certificatediv}
                visibleSlides={1}
                interval={3000}
                isPlaying={true}   
                playDirection={"forward"}
            >
                <Slider className={styles.certifcateslides}>
                    {certificategenerate()}
                </Slider>
                <ButtonBack className={[styles.navigationbtnleft,styles.navigationbtn].join(" ")} >&#8678;</ButtonBack>
                <ButtonNext className={[styles.navigationbtnright,styles.navigationbtn].join(" ")} >&#8680;</ButtonNext>
            </CarouselProvider>
        </div>
    );
}