import classNames from "classnames";

import { AppRouter } from "app/providers/Router";
import { Navbar } from "widgets/Navbar";

import { useTheme } from "./providers/ThemeProvider";
import './styles/index.scss'

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', theme)}>
            <Navbar />
            <AppRouter />
        </div>
    );
};

export default App;