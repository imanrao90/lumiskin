import { createContext, useContext, useMemo, useState } from "react";
import { ALL_PRODUCTS } from "../data/mockData";

const AppContext = createContext()

export const AppProvider = ({children}) => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedConcerns, setSelectedConcerns] = useState([]);
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
    const [sortBy, setSortBy] = useState('featured');

    const filteredProducts = useMemo(() => {
        let result = ALL_PRODUCTS.filter(p => {
          const catMatch = selectedCategories.length === 0 || selectedCategories.includes(p.category);
          const concernMatch = selectedConcerns.length === 0 || selectedConcerns.includes(p.concern);
          return catMatch && concernMatch;
        });
    
        if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
        if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price);
        if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);
    
        return result;
      }, [selectedCategories, selectedConcerns, sortBy]);

    return (
        <AppContext.Provider value={{
            selectedCategories, setSelectedCategories, selectedConcerns, setSelectedConcerns,
            isMobileFilterOpen, setIsMobileFilterOpen, sortBy, setSortBy, filteredProducts
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}