import {FC} from "react";
import {useTranslation} from "react-i18next";
import classNames from "classnames";

import {Button} from "shared/ui";

import cls from './LanguageSwitcher.module.scss'
import {ButtonTheme} from "shared/ui/Button/Button";

interface LanguageSwitcherProps {
    className?: string
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className }) => {
    const {t, i18n } = useTranslation('layout');

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button className={classNames(cls.LanguageSwitcher, className)}
                theme={ButtonTheme.CLEAR}
                onClick={toggleLanguage}
        >
            {t('language')}
        </Button>
    );
};