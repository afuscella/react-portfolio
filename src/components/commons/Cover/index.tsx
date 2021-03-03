import React from 'react';

import { Text } from '@/components/foundation/Text';
import { SocialMedias } from '@/components/commons/SocialMedias';

import { CoverWrapper } from './styles';

export function Cover({ ...props }) {
  return (
    <CoverWrapper.Cover
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <CoverWrapper.Content>
        <Text
          variant="title"
          tag="h1"
          color="primary.main"
          textAlign={{
            xs: 'center',
            md: 'start',
          }}
        >
          Arthur Fuscella Silva
        </Text>

        <Text
          variant="paragraph1"
          tag="p"
          color="secondary.light"
          textAlign={{
            xs: 'center',
            md: 'start',
          }}
        >
          SAP specialist and software architech. Tech enthusiat.
        </Text>

        <Text
          variant="paragraph1"
          tag="p"
          color="secondary.light"
          textAlign={{
            xs: 'center',
            md: 'start',
          }}
        >
          Bachelor in Computer Science
        </Text>

        <SocialMedias />
      </CoverWrapper.Content>

      <CoverWrapper.Header>
        <img src="images/me.jfif" alt="myself" />
      </CoverWrapper.Header>

    </CoverWrapper.Cover>
  );
}
