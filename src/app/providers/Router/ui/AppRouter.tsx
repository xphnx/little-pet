import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { routesConfig } from 'app/providers/Router';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter: FC = () => {
    const { t } = useTranslation('layout');
    return (
        <Routes>
            {
                Object.values(routesConfig)
                    .map(({ path, element }) => (
                        <Route
                            key={path}
                            path={path}
                            element={(
                                <Suspense fallback={<PageLoader />}>
                                    <div className="page-wrapper">{element}</div>
                                </Suspense>
                            )}
                        />
                    ))
            }
        </Routes>
    );
};
