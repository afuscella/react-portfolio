import React, { useContext } from 'react';

import { Button } from '@/components/commons/Button';
import { SocialMedias } from '@/components/commons/SocialMedias';

import { Text } from '@/components/foundation/Text';
import { Grid } from '@/components/foundation/layout/Grid';
import { WebsitePageContext } from '@/components/wrapper/WebsitePage';

import { CoverWrapper } from './styles';

export function Cover({ ...props }) {
  const { isLoaderRunning, toggleLoaderRunning, toggleModalContact } = useContext(WebsitePageContext);
  return (
    <CoverWrapper.Cover
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <CoverWrapper.Header>
        <Grid.Row
          flex={1}
          display="flex"
          justifyContent={{
            xs: 'center',
            md: 'flex-start'
          }}
          padding={{
            xs: '20px',
            md: '0',
          }}
        >
        </Grid.Row>
      </CoverWrapper.Header>

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
        <Grid.Row
          display="flex"
          justifyContent="center"
        >
          <Button
            variant="tertiary.main"
            margin={{
              xs: 'auto',
              md: 'initial',
            }}
            display="block"
            onClick={() => {
              isLoaderRunning && toggleLoaderRunning();
              toggleModalContact();
            }}
          >
            Entre em contato
        </Button>
        </Grid.Row>
      </CoverWrapper.Bottom>

    </CoverWrapper.Cover>
  );
}
