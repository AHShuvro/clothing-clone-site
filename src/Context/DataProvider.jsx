import { createContext, useState } from 'react';
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [women, setWomen] = useState("");
    const [men, setMen] = useState("");

    return (
        <DataContext.Provider value={{ women, setWomen, men, setMen }}>
            {children}
        </DataContext.Provider>
    );
};
