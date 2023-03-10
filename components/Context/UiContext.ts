import { createContext } from 'react';

interface IUiContext {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
    isMountedOnDarkMode: boolean;
}

const UiContext = createContext<IUiContext>({} as IUiContext);

export default UiContext;
