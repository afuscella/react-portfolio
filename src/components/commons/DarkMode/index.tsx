import { useContext } from 'react';

import ThemeContext from '@/context/Theme';
import { ThemeIcon } from '@/themes/Icons/Theme';

export function DarkMode() {
  const { themeToggler } = useContext(ThemeContext);

  return (
    <ThemeIcon onClick={themeToggler} />
  );
}
