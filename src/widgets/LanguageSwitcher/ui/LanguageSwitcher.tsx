import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import { Button, ButtonTheme } from 'shared/ui';

interface LanguageSwitcherProps {
    className?: string
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation('layout');

    const toggleLanguage = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames(className)}
            theme={ButtonTheme.CLEAR}
            onClick={toggleLanguage}
        >
            {t('language')}
        </Button>
    );
};
