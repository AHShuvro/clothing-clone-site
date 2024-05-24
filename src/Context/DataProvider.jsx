import { createContext, useState } from 'react';
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [women, setWomen] = useState("");
    const [men, setMen] = useState("");
    const [priceRange, setPriceRange] = useState(null);
    const [vendor, setVendor] = useState(null);

    return (
        <DataContext.Provider value={{ women, setWomen, men, setMen, priceRange, setPriceRange, vendor, setVendor }}>
            {children}
        </DataContext.Provider>
    );
};
