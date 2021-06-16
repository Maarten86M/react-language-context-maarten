import React from 'react';
import content from '../../data/content.json';
import {useLanguageContext} from "../../context/LanguageContext";

function Home() {
    const {language} = useLanguageContext();
    return (
        <div className="page-container">
            {language === 'nl' && (<h2>{content.nl.home.title}</h2>)}
            {language === 'es' && (<h2>{content.es.home.title}</h2>)}

            {language === 'nl' && (<p>{content.nl.home.introText}</p>)}
            {language === 'es' && (<p>{content.es.home.introText}</p>)}
        </div>
    );
}

export default Home;
