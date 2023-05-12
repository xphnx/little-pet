import { Suspense} from "react";
import { Link, Route, Routes } from "react-router-dom";
import classNames from "classnames";

import { AboutPage } from "../pages/AboutPage";
import { MainPage } from "../pages/MainPage";
import { useThemeContext } from "./providers/ThemeProvider";

import './styles/index.scss'

const App = () => {
    const {theme, changeTheme} = useThemeContext();
    return (
        <div className={classNames('app', theme)}>
            <Link to='/'>Main Page</Link>
            <Link to='/about'>About Page</Link>
            <button onClick={changeTheme}>theme</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/about' element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;