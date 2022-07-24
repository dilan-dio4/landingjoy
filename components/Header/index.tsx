import clsx from 'clsx';
import styles from '../../styles/components/Header.module.css';
import React, { useEffect, useState, useRef, useContext, FC } from 'react';
import useDeviceSize from '../../utils/useDeviceSize';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import UiContext from '../Context/UiContext';
import colors from '../../utils/colors';
import Tooltip from '../Tooltip';
import { Lottie } from '@alfonmga/react-lottie-light-ts';
import planetJson from '../../assets/lottie/planet-and-stars.json';
import { FloatingProps } from '../Tooltip/Floating';
import { FiMenu } from 'react-icons/fi';
import { IoCloseCircleOutline } from 'react-icons/io5';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [isDarkModeTooltipOpen, setIsDarkModeTooltipOpen] = useState<boolean>(false);
    const { isDarkMode, setIsDarkMode } = useContext(UiContext);
    const headerRef = useRef<HTMLDivElement>(null);
    const { isMobile } = useDeviceSize();

    const getScrollY = function () {
        return (window.pageYOffset || window.document.documentElement.scrollTop) - (window.document.documentElement.clientTop || 0);
    };
    const getWindowWidth = function () {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    };

    useEffect(() => {
        const onScroll = () => {
            const scroll_pos = getScrollY();
            if (getWindowWidth() > 800 && headerRef.current) {
                const classList = [styles['nav-on-scroll']];
                if (scroll_pos > 0) {
                    headerRef.current.classList.add(...classList);
                } else {
                    headerRef.current.classList.remove(...classList);
                }
            }
        };
        window.addEventListener('scroll', onScroll);

        const showDarkModeTooltipTimeout = setTimeout(() => setIsDarkModeTooltipOpen(true), 2100);

        return () => {
            document.removeEventListener('scroll', onScroll);
            clearTimeout(showDarkModeTooltipTimeout);
        };
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isMobileMenuOpen]);

    const tooltipProps: FloatingProps = {
        content: (
            <div className='flex items-center pl-4 pr-3'>
                <p className='text-xs font-semibold tracking-wide text-primary-100 mr-0.5'>Try me</p>
                <Lottie config={{ animationData: planetJson, loop: true }} width={'30px'} height={'30px'} />
            </div>
        ),
        placement: isMobile ? 'left' : 'right',
        trigger: 'hover',
        arrow: true,
        style: 'light',
        open: isDarkModeTooltipOpen,
    };

    const darkModeSwitchProps = {
        checked: isDarkMode,
        onChange: () => {
            setIsDarkMode((prev) => !prev);
            setIsDarkModeTooltipOpen(false);
        },
        size: 26,
        moonColor: colors.primary[100],
        sunColor: colors.secondary[200],
        className: '-mb-[1px]',
    };

    const logoStyle: React.CSSProperties = {
        fontFamily:
            '"Lobster Two", "Ubuntu", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
        fontSize: 22,
        maxHeight: 0,
        marginLeft: isMobile ? 0 : -20,
        lineHeight: 0,
        textDecoration: 'none',
    };

    const mobileNavLogoStyle: React.CSSProperties = {
        fontFamily:
            '"Lobster Two", "Ubuntu", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
        fontSize: 32,
        lineHeight: 0,
        textDecoration: 'none',
    };

    return (
        <div className={''}>
            <div className={clsx('flex justify-center w-full', styles['nav-root'], 'top-0')} ref={headerRef}>
                <div className='flex flex-row w-[1360px] max-w-full md:px-[48px] px-6'>
                    {isMobile ? (
                        <div className='flex w-full items-center justify-between'>
                            <a href='#' aria-disabled itemProp='url' title='Methodology' style={logoStyle}>
                                Landingjoy
                            </a>
                            <span className='flex-center'>
                                <Tooltip {...tooltipProps}>
                                    <DarkModeSwitch {...darkModeSwitchProps} />
                                </Tooltip>
                                <FiMenu size={24} className='ml-4' onClick={(_) => setIsMobileMenuOpen(true)} />
                            </span>
                        </div>
                    ) : (
                        <>
                            <nav className='flex-center w-full'>
                                <ul
                                    itemScope
                                    itemType='https://schema.org/SiteNavigationElement'
                                    role='menu'
                                    className={clsx('list-none inline-block whitespace-nowrap', styles['nav-ul'])}
                                >
                                    <li itemProp='name' role='menuitem' className=''>
                                        <a href='#' aria-disabled itemProp='url' title='Methodology' style={logoStyle}>
                                            Landingjoy
                                        </a>
                                    </li>
                                    <div className='inline-block align-middle mx-1'>
                                        <svg
                                            stroke='currentColor'
                                            fill='none'
                                            strokeWidth='1'
                                            viewBox='0 0 24 24'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            width='32px'
                                            opacity='0.8'
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='duration-300'
                                        >
                                            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                                            <path d='M12 5v14'></path>
                                        </svg>
                                    </div>
                                    <li itemProp='name' role='menuitem'>
                                        <a href='#methodology' itemProp='url' title='Methodology'>
                                            Methodology
                                        </a>
                                    </li>
                                    <li itemProp='name' role='menuitem'>
                                        <a href='#plans' itemProp='url' title='Plans'>
                                            Plans
                                        </a>
                                    </li>
                                    <li itemProp='name' role='menuitem'>
                                        <a href='#faqs' itemProp='url' title='FAQs'>
                                            FAQs
                                        </a>
                                    </li>
                                    <li itemProp='name' role='menuitem'>
                                        <a href='#contact-us' itemProp='url' title='Contact us'>
                                            Contact us
                                        </a>
                                    </li>
                                    <li className='!inline-flex align-bottom'>
                                        <Tooltip {...tooltipProps}>
                                            <DarkModeSwitch {...darkModeSwitchProps} />
                                        </Tooltip>
                                    </li>
                                </ul>
                            </nav>
                        </>
                    )}
                </div>
            </div>
            {isMobile && (
                <nav
                    className={clsx(
                        'flex justify-between flex-col py-10 px-10 transition-all duration-300 bg-primary-100 dark:bg-secondary-300',
                        isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none -z-40',
                        styles['mobile-nav'],
                    )}
                >
                    <IoCloseCircleOutline onClick={(_) => setIsMobileMenuOpen(false)} className={clsx(styles['mobile-nav-close'], 'mt-11')} fontSize={'2rem'} />
                    <div className='flex flex-col items-start'>
                        <a
                            href='#'
                            aria-disabled
                            itemProp='url'
                            onClick={(_) => setIsMobileMenuOpen(false)}
                            title='Methodology'
                            style={mobileNavLogoStyle}
                            className='mt-5 mb-20'
                        >
                            Landingjoy
                        </a>
                        <ul className={clsx(styles['mobile-nav-route'], 'tracking-tight')}>
                            <li>
                                <a href='#methodology' onClick={(_) => setIsMobileMenuOpen(false)}>
                                    Methodology
                                </a>
                            </li>
                            <li>
                                <a href='#plans' onClick={(_) => setIsMobileMenuOpen(false)}>
                                    Plans
                                </a>
                            </li>
                            <li>
                                <a href='#faqs' onClick={(_) => setIsMobileMenuOpen(false)}>
                                    FAQs
                                </a>
                            </li>
                            <li>
                                <a href='#contact-us' onClick={(_) => setIsMobileMenuOpen(false)}>
                                    Contact us
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            )}
        </div>
    );
}
