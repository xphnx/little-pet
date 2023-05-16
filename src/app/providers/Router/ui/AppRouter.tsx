import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routesConfig } from 'app/providers/Router';
import { useTranslation } from 'react-i18next';

export const AppRouter: FC = () => {
    const { t } = useTranslation('layout');
    return (
        <Suspense fallback={<div>{t('loading')}</div>}>
            <Routes>
                {
                    Object.values(routesConfig)
                        .map(({ path, element }) => (
                            <Route
                                key={path}
                                path={path}
                                element={<div className="page-wrapper">{element}</div>}
                            />
                        ))
                }
            </Routes>
        </Suspense>
    );
};
