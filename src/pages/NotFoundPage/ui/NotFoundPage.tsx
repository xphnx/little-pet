import { FC } from 'react';
import classNames from 'classnames';

import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation('layout');
    return (
        <div className={classNames(cls.NotFoundPage, className)}>
            {t('page not found')}
        </div>
    );
};
