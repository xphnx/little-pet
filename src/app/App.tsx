import { Link } from "react-router-dom";
import classNames from "classnames";

import {AppRouter} from "app/providers/Router";

import { useThemeContext } from "./providers/ThemeProvider";
import './styles/index.scss'

const App = () => {
    const {theme, changeTheme} = useThemeContext();
    return (
        <div className={classNames('app', theme)}>
            <Link to='/'>Main Page</Link>
            <Link to='/about'>About Page</Link>
            <button onClick={changeTheme}>theme</button>
            <AppRouter />
        </div>
    );
};

export default App;