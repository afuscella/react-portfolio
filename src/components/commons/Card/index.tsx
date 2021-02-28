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
      <img src={image} />

      <article>
        <Text
          variant="paragraph2"
          tag="span"
          color="secondary.main"
          >
          {title}
        </Text>

        <Text
          variant="paragraph1"
          tag="span"
          color="primary.main"
        >
          {description}
        </Text>
      </article>

    </CardWrapper.Card>
  );
}
