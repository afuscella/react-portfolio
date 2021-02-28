import React from 'react';

import { FooterWrapper } from './styles';
import { Github } from '@/themes/Icons/Github';
import { Linkedin } from '@/themes/Icons/Linkedin';
import { Globe } from '@/themes/Icons/Globe';

import { Text } from '@/components/foundation/Text';

export function Footer() {
  const links = [{
    id: 1,
    media: 'github',
    uri: 'https://github.com/afuscella/'
  }, {
    id: 2,
    media: 'linkedin',
    uri: 'https://www.linkedin.com/in/afuscella/'
  }, {
    id: 3,
    media: 'globe',
    uri: 'https://arrayoutofindex.wordpress.com/'
  }]

  function retrieveSocialMediaIcon(media: string) {
    if (media === 'github') {
      return <Github color='#32363a' />
    }

    if (media === 'linkedin') {
      return <Linkedin color='#32363a' />
    }

    if (media === 'globe') {
      return <Globe color='#32363a' />
    }
  }

  return (
    <FooterWrapper.Footer>
      {links.map((link) => {
        return (
          <FooterWrapper.Icons key={link.id}>
            <p>
              <Text
                variant="paragraph2"
                tag="a"
                target="_blank"
                href={link.uri}
              >
                {retrieveSocialMediaIcon(link.media)}
              </Text>
            </p>

          </FooterWrapper.Icons>
        )
      })}
    </FooterWrapper.Footer>
  );
}
