import { FC } from 'react';
import classNames from 'classnames';

import './Loader.scss';

interface LoaderProps {
    className?: string
}

export const Loader: FC<LoaderProps> = ({ className }) => (
    <div className={classNames('lds-ellipsis', className)}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
