import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from 'styled-components';

import { Text } from '@/components/foundation/Text';
import { DarkMode } from '@/components/commons/DarkMode';

import { MenuWrapper } from './styles';

export function Menu() {
  const links = [{
    id: 1,
    text: 'Portfólio',
    url: '/'
  }, {
    id: 2,
    text: 'About me',
    url: '/about'
  }, {
    id: 3,
    text: 'Contact me',
    url: 'mailto:fuscellaarthur@gmail.com'
  }];

  // const { toggleThemeMode } = useContext(ThemeContext);

  return (
    <MenuWrapper.Menu
      as={motion.nav}
      transition={{ delay: 0.5, duration: 0.5 }}
      variants={{
        show: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      initial="hidden"
      animate="show"
    >
      <MenuWrapper.LeftSide>
        <img src='icons/code.svg' />
      </MenuWrapper.LeftSide>

      <MenuWrapper.CentralSide>
        {links.map((link) => (
          <li key={link.url}>
            <Text variant='smallestException' tag='a' href={link.url}>
              {link.text}
            </Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>

      <MenuWrapper.RightSide>
        <DarkMode />
      </MenuWrapper.RightSide>

    </MenuWrapper.Menu>
  );
}
