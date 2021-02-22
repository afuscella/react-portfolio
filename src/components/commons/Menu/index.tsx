import { Text } from '@/components/foundation/Text';
import React from 'react';

import { MenuWrapper } from './styles';

export function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Text
          variant='smallestException'
          tag='a'
          href='/'
        >
          Portfólio
        </Text>
      </MenuWrapper.LeftSide>

      <MenuWrapper.RightSide>
        <img src='images/sun.svg' />
        <img src='images/moon.svg' />
      </MenuWrapper.RightSide>

    </MenuWrapper>
  );
}
