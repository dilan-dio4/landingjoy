import Link from "next/link";
import clsx from 'clsx';
import styles from '../../styles/components/Header.module.css';
import { useEffect, useState, useRef } from 'react';
import useDeviceSize from '../../utils/useDeviceSize'

interface IHeader {
    variant: "primary" | "secondary";
}

export default function Header({ variant }: IHeader) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const headerRef = useRef<HTMLDivElement>(null);
    const { isMobile } = useDeviceSize();

    const getScrollY = function () { return (window.pageYOffset || window.document.documentElement.scrollTop) - (window.document.documentElement.clientTop || 0); };
    const getWindowWidth = function () { return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; };

    useEffect(() => {
        const onScroll = () => {
            const scroll_pos = getScrollY();
            if (getWindowWidth() > 800 && headerRef.current) {
                const classList = [styles["nav-on-scroll"], variant === "secondary" ? styles["nav-on-scroll-secondary"] : styles["nav-on-scroll-primary"]];
                if (scroll_pos > 0) {
                    headerRef.current.classList.add(...classList);
                } else {
                    headerRef.current.classList.remove(...classList);
                }
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => document.removeEventListener("scroll", onScroll);
    }, [])

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [isMobileMenuOpen])
    // return (
    //     <div className="fixed z-20 m-auto top-[20px] w-[70vw] h-10 rounded-[9px] bg-[#fcd5ce] left-0 right-0">

    //     </div>
    // )
    return (
        <div className={""}>
            <div className={clsx("flex justify-center w-full", styles["nav-root"], variant === "secondary" ? styles["nav-root-secondary"] : styles["nav-root-primary"], "top-0")} ref={headerRef}>
                <div className="flex flex-row w-[1360px] max-w-full md:px-[48px] px-6">
                    <div className="flex basis-1/4 items-center justify-start">
                        <Link href="/">
                            <a>
                                {/* <IconPos height={"35px"} className="ml-[-8px] cursor-pointer" /> */}
                            </a>
                        </Link>
                    </div>
                    {isMobile ?
                        <div className="flex basis-3/4 items-center justify-end">
                            {/* <NavPrimaryButton text="Log In" className='!w-[100px] !mr-3' /> */}
                            {/* <IoEllipsisVertical color='#fff' fontSize={"22px"} onClick={_ => setIsMobileMenuOpen(true)} /> */}
                            test
                        </div>
                        :
                        <>
                            <nav className="flex basis-1/2 items-center justify-center">
                                <ul itemScope itemType="https://schema.org/SiteNavigationElement" role="menu" className={clsx("list-none inline-block whitespace-nowrap", styles["nav-ul"])}>
                                    {/* <li itemProp="name" role="menuitem" >
                                        <Link href="https://docs.easybase.io/microstacks/what-is-a-microstack"><a itemProp="url" title="What is a Microstack?">What is a Microstack?</a></Link>
                                    </li> */}
                                    <li itemProp="name" role="menuitem" >
                                        <Link href="/library"><a itemProp="url" title="Explore the Hub">Explore the Hub</a></Link>
                                    </li>
                                    {/* <li itemProp="name" role="menuitem" >
                                                <a itemProp="url" title="Blog" href="/blog/">Partners</a>
                                            </li> */}
                                    {/* <li itemProp="name" role="menuitem" >
                                                <a itemProp="url" title="Blog" href="/blog/">Blog</a>
                                            </li> TODO: LINK SOMEWHERE ELSE */}
                                    <li itemProp="name" role="menuitem">
                                        <Link href="/pricing/"><a itemProp="url" title="Pricing">Pricing</a></Link>
                                    </li>
                                    <li itemProp="name" role="menuitem">
                                        <Link href="https://docs.easybase.io"><a itemProp="url" title="Documentation">Documentation</a></Link>
                                    </li>
                                    <li itemProp="name" role="menuitem">
                                        <Link href="https://app.easybase.io"><a itemProp="url" title="Sign In" onClick={() => { }}>Log in</a></Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className="flex basis-1/4 items-center justify-end">
                                {/* <NavPrimaryButton text="Sign Up" href="https://app.easybase.io?view=signup" onClick={() => gtag('event', 'sign_up', {})} /> */}
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}