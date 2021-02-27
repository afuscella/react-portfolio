import React from 'react';
import { createContext, useState } from 'react';

interface ThemeContextData {
  theme: string;
  toggleTheme(): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState('light');

  async function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark',
    );
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme
      }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext;
