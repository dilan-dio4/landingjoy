import clsx from "clsx"
import Texture from "../Texture";

interface IContainer {
    className?: string;
    children: React.ReactNode;
    fadeIn?: boolean;
    fadeOut?: boolean;
}

export default function Container({ className, children, fadeIn, fadeOut }: IContainer) {
    return (
        <div className={clsx(className, 'relative w-[100vw] max-w-[100vw] inline-block')}>
            <Texture fadeIn={fadeIn} fadeOut={fadeOut} />
            {children}
        </div>
    )
}