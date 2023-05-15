import {useTranslation} from "react-i18next";

const MainPage = () => {
    const {t} = useTranslation()

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