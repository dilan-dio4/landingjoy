import { createContext } from 'react';
import { BrowserType } from '../../utils/getBrowserName';

interface IUiContext {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
    browserName: BrowserType;
}

const UiContext = createContext<IUiContext>({} as IUiContext);

export default UiContext;
