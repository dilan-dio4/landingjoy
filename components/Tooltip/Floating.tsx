import type { Placement } from '@floating-ui/core';
import {
    autoUpdate,
    useClick,
    useFloating,
    useFocus,
    useHover,
    useInteractions,
    useRole,
} from '@floating-ui/react-dom-interactions';
import clsx from 'clsx';
import type { ComponentProps, FC, PropsWithChildren, ReactNode, DependencyList } from 'react';
import { useEffect, useRef } from 'react';
import { excludeClassName, getArrowPlacement, getMiddleware, getPlacement } from './helpers';

export interface FlowbiteFloatingTheme {
    target: string;
    base: string;
    animation: string;
    hidden: string;
    style: {
        // dark: string;
        light: string;
        // auto: string;
    };
    content: string;
    arrow: {
        base: string;
        style: {
            // dark: string;
            light: string;
            // auto: string;
        };
        placement: string;
    };
}

export interface FloatingProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'className' | 'style'>> {
    content: ReactNode;
    open: boolean;
    placement?: 'auto' | Placement;
    trigger?: 'hover' | 'click';
    style?: 'light';
    animation?: false | `duration-${number}`;
    arrow?: boolean;
}

/**
 * @see https://floating-ui.com/docs/react-dom-interactions
 */
export const Floating: FC<FloatingProps> = ({
    children,
    content,
    animation = 'duration-300',
    arrow = true,
    placement = 'top',
    style = 'light',
    trigger = 'hover',
    open,
    ...props
}) => {
    const theirProps = excludeClassName(props);

    const arrowRef = useRef<HTMLDivElement>(null);

    const floatingTooltip = useFloating<HTMLElement>({
        middleware: getMiddleware({ arrowRef, placement }),
        open,
        placement: getPlacement({ placement }),
    });
    const {
        context,
        floating,
        middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
        reference,
        refs,
        strategy,
        update,
        x,
        y,
    } = floatingTooltip;

    const { getFloatingProps, getReferenceProps } = useInteractions([
        useClick(context, { enabled: false }),
        useFocus(context),
        useHover(context, { enabled: false }),
        useRole(context, { role: 'tooltip' }),
    ]);

    useEffect(() => {
        if (refs.reference.current && refs.floating.current && open) {
            return autoUpdate(refs.reference.current, refs.floating.current, update, { ancestorResize: true, animationFrame: true });
        }
    }, [open, refs.floating, refs.reference, update]);

    const theme: FlowbiteFloatingTheme = {
        target: 'w-fit',
        base: 'absolute inline-block rounded-lg text-sm font-medium shadow-md',
        animation: 'transition-opacity',
        hidden: 'invisible opacity-0',
        style: {
            // dark: 'bg-gray-900 text-white dark:bg-gray-700',
            light: 'bg-secondary-100',
            // auto: 'border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white',
        },
        content: 'relative z-20',
        arrow: {
            base: 'absolute z-10 h-1.5 w-1.5 rotate-45 shadow-md',
            style: {
                // dark: 'bg-gray-900 dark:bg-gray-700',
                light: 'bg-secondary-100',
                // auto: 'bg-white dark:bg-gray-700',
            },
            placement: '-2px',
        },
    }

    return (
        <>
            <div className={theme.target} {...getReferenceProps({ ref: reference })} data-testid="tooltip-target">
                {children}
            </div>
            <div
                data-testid="tooltip"
                {...getFloatingProps({
                    className: clsx(
                        theme.base,
                        animation && `${theme.animation} ${animation}`,
                        !open && theme.hidden,
                        theme.style[style],
                    ),
                    ref: floating,
                    style: {
                        position: strategy,
                        top: y ?? ' ',
                        left: x ?? ' ',
                    },
                    ...theirProps,
                })}
            >
                <div className={theme.content}>{content}</div>
                {arrow && (
                    <div
                        className={clsx(theme.arrow.base, {
                            // [theme.arrow.style.dark]: style === 'dark',
                            [theme.arrow.style.light]: style === 'light',
                            // [theme.arrow.style.auto]: style === 'auto',
                        })}
                        data-testid="tooltip-arrow"
                        ref={arrowRef}
                        style={{
                            top: arrowY ?? ' ',
                            left: arrowX ?? ' ',
                            right: ' ',
                            bottom: ' ',
                            [getArrowPlacement({ placement: floatingTooltip.placement })]: theme.arrow.placement,
                        }}
                    >
                        &nbsp;
                    </div>
                )}
            </div>
        </>
    );
};