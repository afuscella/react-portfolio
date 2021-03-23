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
                md: 'start',
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
                  xs: 'start',
                }}
              >
                Arthur Fuscella Silva is bachelor degree in Computer
                Science and works with SAP since 2008,
                being 10+ years experience as consultant. Also, has excellent communication skills,
                rapid learning, hard working and self-motivated.

              </Text>

              <Text
                variant="paragraph1"
                tag="p"
                color="primary.main"
                textAlign={{
                  xs: 'start',
                }}
              >
                I have the Portuguese citizenship and European passport,
                full available for business travels.
              </Text>

            </section>
          </Grid.Column>

        </Grid.Row>
      </Grid.Container>
    </AboutWrapper>
  );
}
