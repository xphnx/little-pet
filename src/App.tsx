import { Suspense} from "react";
import { Link, Route, Routes } from "react-router-dom";
import classNames from "classnames";

import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy";
import { useThemeContext } from "./theme/useThemeContext";
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
                    <Route path='/' element={<MainPageLazy />} />
                    <Route path='/about' element={<AboutPageLazy />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;