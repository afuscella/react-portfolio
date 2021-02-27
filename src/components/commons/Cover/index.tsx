import React from 'react';

import { Text } from '@/components/foundation/Text';
import { Footer } from '@/components/commons/Footer';

import { CoverWrapper } from './styles';

export function Cover({ ...props }) {
  return (
    <CoverWrapper.Cover
      {...props}
    >
      <CoverWrapper.Content>
        <Text
          variant="title"
          tag="h1"
          color="primary.main"
          textAlign={{
            xs: 'center',
            md: 'start'
          }}
        >
          Arthur Fuscella Silva
        </Text>

        <Text
          variant="paragraph1"
          tag="p"
          color="secondary.main"
          textAlign={{
            xs: 'center',
            md: 'start'
          }}
        >
          SAP specialist and software architech. Enthusiastic of new technologies.
        </Text>

        <Text
          variant="paragraph1"
          tag="p"
          color="secondary.main"
          textAlign={{
            xs: 'center',
            md: 'start'
          }}
        >
          Bachelor in Computer Science
        </Text>
        <Footer />

      </CoverWrapper.Content>

      <CoverWrapper.Header>
        <img src='images/me.jfif' />
      </CoverWrapper.Header>

    </CoverWrapper.Cover>
  );
}
