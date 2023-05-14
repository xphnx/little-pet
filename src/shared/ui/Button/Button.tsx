import { ButtonHTMLAttributes, FC } from "react";
import classNames from "classnames";

import cls from './Button.module.scss'

export enum ButtonTheme {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = ({ className , children, theme, ...restProps}) => {
    return (
        <button className={classNames(cls.Button, className, cls[theme])} {...restProps}>
            { children }
        </button>
    );
};