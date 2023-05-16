import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import classNames from 'classnames';

import cls from './AppLink.module.scss';

export enum LinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted'
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: LinkTheme
}

export const AppLink: FC<AppLinkProps> = ({
    to, className, theme, children, ...restProps
}) => (
    <Link
        to={to}
        className={classNames(cls.AppLink, className, cls[theme])}
        {...restProps}
    >
        { children }
    </Link>
);
