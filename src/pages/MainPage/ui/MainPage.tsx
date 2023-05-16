import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: FC = () => {
    const { t } = useTranslation('main-page');

    return (
        <>
            <h1>{t('header')}</h1>
            <p>
                {t('main content')}
            </p>
        </>

    );
};

export default MainPage;
