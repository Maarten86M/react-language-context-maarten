import React, {createContext, useState, useContext} from "react";

export const LanguageContext = createContext(null)

export function useLanguageContext() {
    return useContext(LanguageContext);
}

export default function LanguageProvider({children}) {

    const [language, setLanguage] = useState('nl')

    return (<LanguageContext.Provider value={{language, setLanguage}}
        >
            {children}
        </LanguageContext.Provider>
    );
}