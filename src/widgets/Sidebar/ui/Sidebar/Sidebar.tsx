import { FC, useState } from 'react';
import classNames from 'classnames';

import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';

import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [isCollapsed, setCollapsed] = useState(true);

    const handleClick = () => setCollapsed((prev) => !prev);

    return (
        <div className={classNames(cls.Sidebar, className, { [cls.collapsed]: isCollapsed })}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <button type="button" onClick={handleClick}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
