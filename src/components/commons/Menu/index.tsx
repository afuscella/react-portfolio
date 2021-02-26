import { Text } from '@/components/foundation/Text';
import React from 'react';

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
    url: '/mail'
  }];

  return (
    <MenuWrapper.Menu>
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
        <img src='icons/sun.svg' />
        <img src='icons/moon.svg' />
      </MenuWrapper.RightSide>

    </MenuWrapper.Menu>
  );
}
