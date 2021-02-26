import React from 'react';

import { FooterWrapper } from './styles';
import { Github } from '@/themes/Icons/Github';
import { Globe } from '@/themes/Icons/Globe';
import { Linkedin } from '@/themes/Icons/Linkedin';

import { Text } from '@/components/foundation/Text';

export function Footer() {
  const links = [{
    id: 1,
    imageSrc: 'icons/github.svg',
    uri: 'https://github.com/afuscella/'
  }, {
    id: 2,
    imageSrc: 'icons/linkedin.svg',
    uri: 'https://www.linkedin.com/in/afuscella/'
  }, {
    id: 3,
    imageSrc: 'icons/facebook.svg',
    uri: 'https://www.facebook.com/afuscella/'
  }]

  return (
    <FooterWrapper.Footer>
      {links.map((link) => {
        return (
          <FooterWrapper.Icon key={link.id}>

            <Text
              variant="paragraph2"
              tag="h1"
              href={link.uri}
              color="tertiary.main"
            >
              <Linkedin
                color='#32363a'
              />
            </Text>
          </FooterWrapper.Icon>
        )
      })}
    </FooterWrapper.Footer>
  );
}
