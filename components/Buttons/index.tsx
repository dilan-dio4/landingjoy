import clsx from "clsx"
import React from 'react';
import Link from 'next/link';
import styles from '../../styles/components/Buttons.module.css';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    endIcon?: JSX.Element;
    href?: string;
    onClick?: (_: any) => any;
    className?: string;
    style?: React.CSSProperties;
}

function _buttonGenerator(rootClassname: string, { href, onClick, text, endIcon, className, style }: IButton) {
    const allClassnames = rootClassname.split(" ").map(singleClassname => styles[singleClassname])

    if (href) {
        return (
            <div className={clsx(styles['button-outline'], 'mt-10 z-10')}>
                <Link href={href}>
                    <a className={clsx(...allClassnames, className)} role="button" type="text" onClick={onClick} style={style}>
                        <p className={clsx('text-[#f8edeb] p-0 text-lg leading-none font-bold tracking-wide')}>{text}</p>
                        {endIcon || ""}
                    </a>
                </Link>
            </div>
        )
    } else {
        return (
            <div className={clsx(styles['button-outline'], 'mt-10 z-10')}>
                <button className={clsx(...allClassnames, className)} role="button" onClick={onClick} style={style}>
                    <p className={clsx('text-[#f8edeb] p-0 text-lg leading-none font-bold tracking-wide')}>{text}</p>
                    {endIcon || ""}
                </button>
            </div>
        )
    }
}

function _smallButtonGenerator(rootClassname: string, { href, onClick, text, endIcon, className, style }: IButton) {
    const allClassnames = rootClassname.split(" ").map(singleClassname => styles[singleClassname])

    if (href) {
        return (
            <div className={clsx(styles['button-outline-sm'], 'z-10')}>
                <Link href={href}>
                    <a className={clsx(...allClassnames, className)} role="button" type="text" onClick={onClick} style={style}>
                        <p className={clsx('text-[#f8edeb] p-0 text-sm leading-none font-bold tracking-wide')}>{text}</p>
                        {endIcon || ""}
                    </a>
                </Link>
            </div>
        )
    } else {
        return (
            <div className={clsx(styles['button-outline-sm'], 'z-10')}>
                <button className={clsx(...allClassnames, className)} role="button" onClick={onClick} style={style}>
                    <p className={clsx('text-[#f8edeb] p-0 text-sm leading-none font-bold tracking-wide')}>{text}</p>
                    {endIcon || ""}
                </button>
            </div>
        )
    }
}

export const HeroPrimaryButton = (props: IButton) => _buttonGenerator("hero-button", props);
export const SmallPrimaryButton = (props: IButton) => _smallButtonGenerator("hero-button-sm", props);
