import React from 'react';
import writers from '../../assets/bob_betsy.jpg';
import content from '../../data/content.json';
import {useLanguageContext} from "../../context/LanguageContext";

function AboutUs() {

    const {language} = useLanguageContext();

    return (
        <div className="page-container">

            {language === 'nl' && (<h2>{content.nl.aboutUs.title}</h2>)}
            {language === 'es' && (<h2>{content.nl.aboutUs.title}</h2>)}
            <p>Dit is je profielpagina!</p>

            <img src={writers} alt="Bob & Betsy"/>

            {language === 'nl' && (<p>{content.nl.aboutUs.writers}</p>)}
            {language === 'es' && (<p>{content.es.aboutUs.writers}</p>)}

        </div>
    );
}

export default AboutUs;
