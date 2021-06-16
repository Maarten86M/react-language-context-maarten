import React from 'react';
import content from '../../data/content.json';
import {useLanguageContext} from "../../context/LanguageContext";

function AllPlants() {

    const {language} = useLanguageContext();

    return (
        <div className="page-container">
            {language === 'nl' && ( <h2>{content.nl.plants.title}</h2>)}
            {language === 'es' && ( <h2>{content.es.plants.title}</h2>)}

            {language === 'nl' && ( <p>{content.nl.plants.text}</p>)}
            {language === 'es' && ( <p>{content.es.plants.text}</p>)}

            {language === 'nl' && (
                <ul>
                    {content.nl.plants.plants.map((plant) => <li>{plant}</li>)}
                </ul>
            )}

            {language === 'es' && (
                <ul>
                    {content.es.plants.plants.map((plant) => <li>{plant}</li>)}
                </ul>
            )}

        </div>
    );
}

export default AllPlants;
