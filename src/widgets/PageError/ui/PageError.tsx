import { FC } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui';
import ErrorImage from 'shared/assets/error-demon.png';

import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation('layout');
    // eslint-disable-next-line no-restricted-globals
    const reloadPage = () => location.reload();

    return (
        <div className={classNames(cls.PageError, className)}>
            <img src={ErrorImage} width={250} alt={t('error')} />
            <span>{t('error message')}</span>
            <Button onClick={reloadPage}>{t('reload page')}</Button>
        </div>
    );
};
