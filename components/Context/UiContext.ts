import { createContext } from 'react';

interface IUiContext {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const UiContext = createContext<IUiContext>({} as IUiContext);

export default UiContext;
