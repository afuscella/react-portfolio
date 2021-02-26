import React from 'react';

import { Text } from '@/components/foundation/Text';
import { CardWrapper } from './styles';

interface ICard {
  title: string;
  description: string;
  image: string;
  uri: string;
}

export function Card({ title, description, image, uri }: ICard) {
  return (
    <CardWrapper.Card as='a' href={uri} target="_blank">
      <Text
        variant="paragraph2"
        tag="h1"
        color="tertiary.main"
      >
        Personal Blog
             </Text>

      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
      >
        All about my activities, thoughts, ideas, and everything that happened around me.
      </Text>
    </CardWrapper.Card>
  );
}
