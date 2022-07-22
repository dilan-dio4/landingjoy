import clsx from 'clsx';

interface IContainer {
    className?: string;
    children: React.ReactNode;
}

export default function Container({ className, children }: IContainer) {
    return <div className={clsx(className, 'relative w-[100vw] max-w-[100vw] inline-block')}>{children}</div>;
}
