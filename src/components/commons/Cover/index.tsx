import React from 'react';

import { Text } from '@/components/foundation/Text';

import { CoverWrapper } from './styles';

// eslint-disable-next-line import/prefer-default-export
export function Cover() {
  return (
    <CoverWrapper>
      <Text
        variant="title"
        tag="h1"
        color="primary.main"
      >
        Arthur Fuscella Silva
      </Text>

      <Text
        variant="subTitle"
        tag="p"
        color="secondary.light"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
      </Text>

    </CoverWrapper>
  );
}
