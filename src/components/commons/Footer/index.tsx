import React from 'react';

import { FooterWrapper } from './styles';

import { Text } from '@/components/foundation/Text';

export function Footer() {
  return (
    <FooterWrapper>

      <Text
        variant="paragraph1"
        tag="a"
        href="https://github.com/afuscella"
        target="_blank"
        color="secondary.light"
        textAlign={{
          xs: 'center'
        }}
        >
        Made with &#128150; by Arthur Fuscella Silva
      </Text>

    </FooterWrapper>
  );
}
