import classNames from "classnames";

import { AppRouter } from "app/providers/Router";
import { Navbar } from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";

import { useTheme } from "./providers/ThemeProvider";
import './styles/index.scss'

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', theme)}>
            <Navbar />
            <div className="page-content">
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;