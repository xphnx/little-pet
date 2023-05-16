import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: FC = () => {
    const { t } = useTranslation('layout');
    return (
        <div>
            {t('about page')}
        </div>
    );
};

export default AboutPage;
