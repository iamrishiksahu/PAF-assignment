import { Language } from "@mui/icons-material";
import { createContext, useState } from "react";
import EnglishStrings from '../lang/globalEnglish.json'
import HindiStrings from '../lang/globalHindi.json'


export const LanguageContext = createContext({})

export const LanguageProvider = ({ children }) => {

    const [language, setLanguage] = useState('HINDI');
    
    const langStr = language === 'HINDI'? HindiStrings : EnglishStrings

    return (
        <LanguageContext.Provider value={{ language, setLanguage, langStr }}>
            {children}
        </LanguageContext.Provider>
    );

}