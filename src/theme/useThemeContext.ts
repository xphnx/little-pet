import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface UseThemeResult {
    theme: Theme
    changeTheme: () => void
}

export const useThemeContext = (): UseThemeResult => {
    const {theme, setTheme} = useContext(ThemeContext)

    const changeTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    return {theme, changeTheme}
}