import clsx from 'clsx';

interface IContainer {
    children: React.ReactNode;
    className?: string;
}

export default function Layout({ children, className }: IContainer) {
    return <div className={clsx('bootstrap-container mx-auto py-12 md:py-16 z-50', className)}>{children}</div>;
}
