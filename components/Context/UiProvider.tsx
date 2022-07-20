import React, { useEffect, useState, useMemo } from "react";
import UiContext from "./UiContext";
import useIsMounted from "../../utils/useIsMounted";
import getBrowserName from "../../utils/getBrowserName";
import colors from "../../utils/colors";

export default function UiProvider({ children }: { children: React.ReactChild | JSX.Element | JSX.Element[] }) {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const isMounted = useIsMounted();
    const browserName = useMemo(getBrowserName, []);

    useEffect(() => {
        if (isMounted) {
            document.documentElement.classList[isDarkMode ? 'add' : 'remove']('dark');
        }

        const metaThemeColor = document.querySelector("meta[name=theme-color]");
        metaThemeColor && metaThemeColor.setAttribute("content", isDarkMode ? colors.secondary[300] : colors.primary[100]);
    }, [isDarkMode])

    return (
        <UiContext.Provider
            value={{
                isDarkMode,
                setIsDarkMode,
                browserName
            }}
        >
            {children}
        </UiContext.Provider>
    )
}