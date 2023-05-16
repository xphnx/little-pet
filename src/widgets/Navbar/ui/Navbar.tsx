import { FC } from 'react';
import classNames from 'classnames';

import { AppLink } from 'shared/ui';

import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation('layout');

    return (
        <nav className={classNames(cls.Navbar, className)}>
            <div className={cls.navLinks}>
                <AppLink to="/" className={cls.mainLink}>{t('main page')}</AppLink>
                <AppLink to="/about">{t('about page')}</AppLink>
            </div>
        </nav>
    );
};
