import React from 'react';

import { Github } from '@/themes/Icons/Github';
import { Linkedin } from '@/themes/Icons/Linkedin';
import { Globe } from '@/themes/Icons/Globe';
import { Mail } from '@/themes/Icons/Mail';

import { Text } from '@/components/foundation/Text';
import { SocialMediasWrapper } from './styles';

export function SocialMedias() {
  const links = [{
    id: 1,
    media: 'github',
    uri: 'https://github.com/oarthursilva/',
  }, {
    id: 2,
    media: 'linkedin',
    uri: 'https://www.linkedin.com/in/afuscella/',
  }, {
    id: 4,
    media: 'mail',
    uri: 'mailto:arthur.silva@fuscella.com',
  },
  ];

  function retrieveSocialMediaIcon(media: string) {
    if (media === 'github') {
      return <Github />;
    }

    if (media === 'linkedin') {
      return <Linkedin />;
    }

    if (media === 'globe') {
      return <Globe />;
    }

    return <Mail />;
  }

  return (
    <SocialMediasWrapper.Social>
      {links.map((link) => (
        <SocialMediasWrapper.Icons key={link.id}>
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

        </SocialMediasWrapper.Icons>
      ))}
    </SocialMediasWrapper.Social>
  );
}
