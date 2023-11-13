import React from 'react';

import { Text } from '@/components/foundation/Text';

import { FooterWrapper } from './styles';

export function Footer() {
  return (
    <FooterWrapper>

      <Text
        variant="paragraph1"
        tag="a"
        href="https://github.com/oarthursilva"
        target="_blank"
        color="secondary.light"
        textAlign={{
          xs: 'center',
        }}
      >
        Made with &#128150; by Arthur Fuscella Silva
      </Text>

    </FooterWrapper>
  );
}
