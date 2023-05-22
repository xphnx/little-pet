import { RouteProps } from 'react-router-dom';

import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum RoutePages {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found'
}

export const routesConfig: Record<RoutePages, RouteProps> = {
    [RoutePages.MAIN]: {
        path: '/',
        element: <MainPage />,
    },
    [RoutePages.ABOUT]: {
        path: '/about',
        element: <AboutPage />,
    },
    [RoutePages.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
