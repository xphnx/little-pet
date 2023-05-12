import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { routesConfig } from "app/providers/Router";

export const AppRouter: FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {
                    Object.values(routesConfig).map(({path, element}) => {
                        return <Route key={path} path={path} element={element} />
                    })
                }
            </Routes>
        </Suspense>
    );
};