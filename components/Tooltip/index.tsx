import type { FC } from 'react';
import { excludeClassName } from './helpers';
import { Floating, FloatingProps } from './Floating';

/**
 * @see https://floating-ui.com/docs/react-dom-interactions
 */
const Tooltip: FC<FloatingProps> = ({
    animation = 'duration-300',
    arrow = true,
    children,
    content,
    placement = 'top',
    style = 'light',
    trigger = 'hover',
    open,
    ...props
}) => {
    const theirProps = excludeClassName(props);

    return (
        <Floating content={content} style={style} animation={animation} placement={placement} arrow={arrow} trigger={trigger} open={open} {...theirProps}>
            {children}
        </Floating>
    );
};

export default Tooltip;
