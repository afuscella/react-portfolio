import React from 'react';

import { Text } from '@/components/foundation/Text';
import { Grid } from '@/components/foundation/layout/Grid';

import { AboutWrapper } from './styles';

export function About() {
  return (
    <AboutWrapper
      id="about__section"
    >

      <Grid.Container>
        <Grid.Row>

          <Grid.Column
            value={{ xs: 12, md: 6 }}
            display="flex"
            justifyContent="center"
            flexDirection="column"
          >
            <Text
              variant="subTitle"
              tag="h1"
              color="primary.main"
              textAlign={{
                xs: 'center',
                md: 'start'
              }}
            >
              About
            </Text>
          </Grid.Column>

          <Grid.Column
            offset={{ xs: 0, md: 6 }}
            value={{ xs: 12, md: 6 }}
            display="flex"
            justifyContent="center"
            flexDirection="column"
          >
            <section>
              <Text
                variant="paragraph1"
                tag="p"
                color="primary.main"
                textAlign={{
                  xs: 'start'
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </Text>
            </section>
          </Grid.Column>

        </Grid.Row>
      </Grid.Container>
    </AboutWrapper>
  );
}
