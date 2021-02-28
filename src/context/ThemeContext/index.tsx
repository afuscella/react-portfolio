import React from 'react';
import { createContext, useState } from 'react';

interface ThemeContextData {
  themeName: string;
  switchTheme(themeName: string): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeProvider: React.FC = ({ children }) => {
  const [themeName, setThemeName] = useState('light');

  const switchTheme = (themeName: string) => {
    setThemeName(themeName);
  }

  return (
    <ThemeContext.Provider
      value={{
        themeName,
        switchTheme
      }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }
