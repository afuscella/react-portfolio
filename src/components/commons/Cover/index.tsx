import React from 'react';

import { Button } from '@/components/commons/Button';
import { Text } from '@/components/foundation/Text';
import { SocialMedias } from '@/components/commons/SocialMedias';
import { WebsitePageContext } from '@/components/wrapper/WebsitePage';

import { CoverWrapper } from './styles';
import { useContext } from 'react';

export function Cover({ ...props }) {
  const { toggleModalContact } = useContext(WebsitePageContext);
  return (
    <CoverWrapper.Cover
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <CoverWrapper.Content>
        <CoverWrapper.Left>
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
        </CoverWrapper.Left>

        <CoverWrapper.Right>
          <img src="images/me.jfif" alt="myself" />
        </CoverWrapper.Right>
      </CoverWrapper.Content>

      <CoverWrapper.Bottom>
        <Button
          variant="tertiary.main"
          margin={{
            xs: 'auto',
            md: 'initial',
          }}
          display="block"
          onClick={toggleModalContact}
        >
          Entre em contato
        </Button>
      </CoverWrapper.Bottom>

    </CoverWrapper.Cover>
  );
}
