import {FC} from "react";
import classNames from "classnames";

import {AppLink} from "shared/ui";

import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    return (
        <nav className={classNames(cls.Navbar, className)}>
            <div className={cls.navLinks}>
                <AppLink to='/' className={cls.mainLink}>Main Page</AppLink>
                <AppLink to='/about'>About Page</AppLink>
            </div>
        </nav>
    );
};