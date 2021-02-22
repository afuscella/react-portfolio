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
        tag="span"
        color="secondary.light"
      >
        SAP specialist and software architech. Enthusiastic of new technologies.
      </Text>

      <Text
        variant="subTitle"
        tag="span"
        color="secondary.light"
      >
        Bachelor in Computer Science
      </Text>

    </CoverWrapper>
  );
}
