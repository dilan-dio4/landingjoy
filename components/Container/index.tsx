import clsx from 'clsx';
import { HTMLProps } from '../../utils/types';

interface IContainer extends HTMLProps<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}

export default function Container({ className, children, ...props }: IContainer) {
    return (
        <div className={clsx(className, 'relative w-[100vw] max-w-[100vw] inline-block')} {...props}>
            {children}
        </div>
    );
}
