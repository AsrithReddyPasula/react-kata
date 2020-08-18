import React, {useState} from "react";

export const UpperCaseContext = React.createContext(
    {
        isUpperCase: false,
        toggleUpperCase: () => {
        }
    });

const AppContext: React.FC = ({children}) => {
    const [isUpperCase, setIsUpperCase] = useState(false);
    return <UpperCaseContext.Provider value={{isUpperCase, toggleUpperCase: () => setIsUpperCase(!isUpperCase)}}>
        {children}
    </UpperCaseContext.Provider>;
}

export default AppContext;