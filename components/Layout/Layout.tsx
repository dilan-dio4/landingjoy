import clsx from 'clsx';

interface IContainer {
    children: React.ReactNode;
    className?: string;
    header?: string | JSX.Element;
}

export default function Layout({ children, className, header }: IContainer) {
    return (
        <div className={clsx('bootstrap-container mx-auto py-12 md:py-16 z-50', className)}>
            {header && (typeof header !== 'string' ? header : <h3 className='mb-20 mt-12 whitespace-pre-line leading-snug'>{header}</h3>)}
            {children}
        </div>
    );
}
