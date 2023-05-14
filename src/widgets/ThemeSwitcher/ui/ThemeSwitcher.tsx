import {FC} from "react";
import classNames from "classnames";

import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import {Theme} from "app/providers/ThemeProvider";
import {Button} from "shared/ui";
import DarkMode from 'shared/assets/dark-mode-icon.svg'
import LightMode from 'shared/assets/light-mode-icon.svg'

import cls from './ThemeSwitcher.module.scss'
import {ButtonTheme} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const {theme, changeTheme} = useTheme();

    return (
        <Button onClick={changeTheme}
                theme={ButtonTheme.CLEAR}
                className={classNames(cls.ThemeSwitcher, className)}
        >
            {theme === Theme.DARK ? <DarkMode  fill={'var(--primary-color)'} width={45} height={45}/>
                : <LightMode fill={'var(--primary-color)'} width={45} height={45}/>}
        </Button>
    );
};