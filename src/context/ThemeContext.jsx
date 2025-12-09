import { useState, createContext, useContext, useEffect } from "react";

const ThemeContext = createContext(null);

export function useThemeContext() {
    const context = useContext(ThemeContext);
    if (context === null) {
        throw new Error('useThemeContext must be used within a ThemeProvider');
    }
    return context;
}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(false);

    const toggleTheme = () => {
        console.log('Toggle Theme', theme);
        setTheme((mode) => !mode);
    };

    useEffect(() => {
        document.body.setAttribute(
            "data-theme",
            theme ? "dark" : "light"
        );
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ toggleTheme, theme }}>
            {children}
        </ThemeContext.Provider>
    );
};