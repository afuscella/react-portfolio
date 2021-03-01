import { string } from 'prop-types';
import { createContext } from 'react';

const ThemeContext = createContext({
  themeName: string,
  themeToggler: () => {},
});

export default ThemeContext;
