import React from 'react';

import { Card } from '@/components/commons/Card';
import { Text } from '@/components/foundation/Text';

import { Grid } from '@/components/foundation/layout/Grid';

import { ProjectsWrapper } from './styles';

export function Projects() {
  return (
    <ProjectsWrapper
      id="projects__section"
    >
      <Grid.Container>
        <Grid.Row>

          <Grid.Column
            value={{ xs: 12, md: 12 }}
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
              Projects
            </Text>

          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column
            value={{ xs: 12, md: 6 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Card
              title="Breja Quiz | Happy Hour"
              description="Do you really think you know everything about beers?"
              uri="https://bitter-brewing-quiz.vercel.app/"
              image="images/beer.png"
            />
          </Grid.Column>

          <Grid.Column
            value={{ xs: 12, md: 6 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Card
              title="Instalura"
              description="Share moment and get connected with your friends."
              uri="https://instalura.oarthursilva.vercel.app/"
              image="images/instalura.png"
            />

          </Grid.Column>
        </Grid.Row>

        <Grid.Row>

          <Grid.Column
            value={{ xs: 12, md: 6 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Card
              title="Tarde Rock"
              description="Tarde Rock is an Android app that allows you to hear the newest brazilian garage bands."
              uri="https://play.google.com/store/apps/details?id=com.raketenstartdev.tarderock"
              image="images/rock.png"
            />
          </Grid.Column>

          <Grid.Column
            value={{ xs: 12, md: 6 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Card
              title="Personal Blog"
              description="All about my activities, thoughts, ideas, and everything that happened around me."
              uri="https://arrayoutofindex.wordpress.com/"
              image="images/blog.png"
            />
          </Grid.Column>

        </Grid.Row>
      </Grid.Container>
    </ProjectsWrapper>
  );
}
