import React, { useEffect, useState } from 'react';
import UiContext from './UiContext';
import useIsMounted from '../../utils/useIsMounted';
import colors from '../../utils/colors';

export default function UiProvider({ children }: { children: React.ReactChild | JSX.Element | JSX.Element[] }) {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const [isMountedOnDarkMode, setIsMountedOnDarkMode] = useState<boolean>(false);
    const isMounted = useIsMounted();

    useEffect(() => {
        if (isMounted) {
            document.documentElement.classList[isDarkMode ? 'add' : 'remove']('dark');
            localStorage.setItem('theme', isDarkMode ? "dark" : "light");
        }

        const metaThemeColor = document.querySelector('meta[name=theme-color]');
        metaThemeColor && metaThemeColor.setAttribute('content', isDarkMode ? colors.secondary[300] : colors.primary[100]);
    }, [isDarkMode]);


    useEffect(() => {
        if (localStorage.getItem('theme') === "dark") {
            setIsMountedOnDarkMode(true);
            setIsDarkMode(true);
        }
    }, [])

    return (
        <UiContext.Provider
            value={{
                isDarkMode,
                setIsDarkMode,
                isMountedOnDarkMode
            }}
        >
            {children}
        </UiContext.Provider>
    );
}
