import Link from 'next/link';
import clsx from 'clsx';
import styles from '../../styles/components/Header.module.css';
import { useEffect, useState, useRef, useContext, FC } from 'react';
import useDeviceSize from '../../utils/useDeviceSize';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import UiContext from '../Context/UiContext';
import colors from '../../utils/colors';
import Tooltip from '../Tooltip';
import { Lottie } from '@alfonmga/react-lottie-light-ts';
import planetJson from '../../assets/lottie/planet-and-stars.json';
import { FloatingProps } from '../Tooltip/Floating';

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

    return (
        <div className={''}>
            <div className={clsx('flex justify-center w-full', styles['nav-root'], 'top-0')} ref={headerRef}>
                <div className='flex flex-row w-[1360px] max-w-full md:px-[48px] px-6'>
                    <div className='flex basis-1/4 items-center justify-start'>
                        <Link href='/'>
                            <a>{/* <IconPos height={"35px"} className="ml-[-8px] cursor-pointer" /> */}</a>
                        </Link>
                    </div>
                    {isMobile ? (
                        <div className='flex basis-3/4 items-center justify-end'>
                            {/* <NavPrimaryButton text="Log In" className='!w-[100px] !mr-3' /> */}
                            {/* <IoEllipsisVertical color='#fff' fontSize={"22px"} onClick={_ => setIsMobileMenuOpen(true)} /> */}
                            <Tooltip {...tooltipProps}>
                                <DarkModeSwitch {...darkModeSwitchProps} />
                            </Tooltip>
                        </div>
                    ) : (
                        <>
                            <nav className='flex basis-1/2 items-center justify-center'>
                                <ul
                                    itemScope
                                    itemType='https://schema.org/SiteNavigationElement'
                                    role='menu'
                                    className={clsx('list-none inline-block whitespace-nowrap', styles['nav-ul'])}
                                >
                                    {/* <li itemProp="name" role="menuitem" >
                                        <Link href="https://docs.easybase.io/microstacks/what-is-a-microstack"><a itemProp="url" title="What is a Microstack?">What is a Microstack?</a></Link>
                                    </li> */}
                                    <li itemProp='name' role='menuitem'>
                                        <Link href='/plans'>
                                            <a itemProp='url' title='Plans'>
                                                Methodology
                                            </a>
                                        </Link>
                                    </li>
                                    <li itemProp='name' role='menuitem'>
                                        <Link href='/plans'>
                                            <a itemProp='url' title='Plans'>
                                                Plans
                                            </a>
                                        </Link>
                                    </li>
                                    <li itemProp='name' role='menuitem'>
                                        <Link href='/what-you-get'>
                                            <a itemProp='url' title='What you get'>
                                                What you get
                                            </a>
                                        </Link>
                                    </li>
                                    <li itemProp='name' role='menuitem'>
                                        <Link href='/faqs'>
                                            <a itemProp='url' title='FAQs'>
                                                FAQs
                                            </a>
                                        </Link>
                                    </li>
                                    {/* <li itemProp="name" role="menuitem" >
                                                <a itemProp="url" title="Blog" href="/blog/">Blog</a>
                                            </li> TODO: LINK SOMEWHERE ELSE */}
                                    <li itemProp='name' role='menuitem'>
                                        <Link href='https://app.easybase.io'>
                                            <a itemProp='url' title='Sign In' onClick={() => {}}>
                                                Log in
                                            </a>
                                        </Link>
                                    </li>
                                    <li className='!inline-flex align-bottom'>
                                        <Tooltip {...tooltipProps}>
                                            <DarkModeSwitch {...darkModeSwitchProps} />
                                        </Tooltip>
                                    </li>
                                </ul>
                            </nav>
                            <div className='flex basis-1/4 items-center justify-end'>
                                {/* <NavPrimaryButton text="Sign Up" href="https://app.easybase.io?view=signup" onClick={() => gtag('event', 'sign_up', {})} /> */}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
