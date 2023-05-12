import { RouteProps } from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

export enum RoutePages {
    MAIN = 'main',
    ABOUT = 'about'
}

export const routesConfig: Record<RoutePages, RouteProps> = {
    [RoutePages.MAIN]: {
        path: '/',
        element: <MainPage />
    },
    [RoutePages.ABOUT]: {
        path: '/about',
        element: <AboutPage />
    }
}

