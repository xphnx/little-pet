import { Link } from "react-router-dom";
import classNames from "classnames";

import { AppRouter } from "app/providers/Router";
import { Navbar } from "widgets/Navbar";

import { useThemeContext } from "./providers/ThemeProvider";
import './styles/index.scss'

const App = () => {
    const {theme, changeTheme} = useThemeContext();
    return (
        <div className={classNames('app', theme)}>
            <Navbar />
            <button onClick={changeTheme}>theme</button>
            <AppRouter />
        </div>
    );
};

export default App;