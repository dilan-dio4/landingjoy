import clsx from "clsx"
import useBrowserName from "../../utils/useBrowserName";
import Texture from "../Texture";

interface IContainer {
    className?: string;
    children: React.ReactNode;
    fadeIn?: boolean;
    fadeOut?: boolean;
    isBgInvisible?: boolean;
}

export default function Container({ className, children, fadeIn, fadeOut, isBgInvisible }: IContainer) {
    const browserName = useBrowserName();

    return (
        <div className={clsx(className, 'relative w-[100vw] max-w-[100vw] inline-block', !isBgInvisible && browserName === "Apple Safari" && "bg-[#f8edeb]")}>
            {!isBgInvisible && browserName !== "Apple Safari" && <Texture />}
            {!isBgInvisible && fadeIn && <div className='absolute top-0 left-0 right-0' style={{ background: 'linear-gradient(180deg, #fcd5ce77 0%, transparent 100%)', height: 150 }}></div>}
            {children}
            {!isBgInvisible && fadeOut && <div className='absolute bottom-0 left-0 right-0' style={{ background: 'linear-gradient(180deg, transparent 0%, #fcd5ce77 100%)', height: 150 }}></div>}
        </div>
    )
}