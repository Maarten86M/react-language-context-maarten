import React from 'react';
import {NavLink} from 'react-router-dom';
import headerImage from '../../assets/wall-with-plants.jpg';
import {ReactComponent as FlagNL} from '../../assets/netherlands.svg';
import {ReactComponent as FlagES} from '../../assets/spain.svg';
import content from '../../data/content.json';
import './Header.css';
import {useLanguageContext} from "../../context/LanguageContext";

function Header() {
    const {setLanguage, language} = useLanguageContext();

    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink exact to="/about-us">
                                <div>
                                    {language === "nl" && (<div>{content.nl.header.menuItems.aboutUs}</div>)}
                                    {language === "es" && (<div>{content.es.header.menuItems.aboutUs}</div>)}
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/all-plants">
                                {language === 'nl' && (<div>{content.nl.header.menuItems.allPlants}</div>)}
                                {language === 'es' && (<div>{content.es.header.menuItems.allPlants}</div>)}
                            </NavLink>
                        </li>
                        <li className="language-switch">
                            {language === 'nl' && (<p>{content.nl.header.changeTo}</p>)}
                            {language === 'es' && (<p>{content.es.header.changeTo}</p>)}

                            {language === 'es' && (<FlagNL onClick={() => setLanguage('nl')}/>)}
                            {language === 'nl' && (<FlagES onClick={() => setLanguage('es')}/>)}
                        </li>
                    </ul>
                </nav>
                <div className="image-container">
                    <img src={headerImage} alt="Header image plants" className="header-image"/>
                    {language === 'nl' && (<h1>{content.nl.header.title}</h1>)}
                    {language === 'es' && (<h1>{content.es.header.title}</h1>)}
                </div>

            </header>
        </>
    );
}

export default Header;
