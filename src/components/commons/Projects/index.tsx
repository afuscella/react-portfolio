import React from 'react';

import { Card } from '@/components/commons/Card';
import { Text } from '@/components/foundation/Text';

import { Grid } from '@/components/foundation/layout/Grid';

import { ProjectsWrapper } from './styles';

export function Projects() {
  const cards = [{
    id: 1,
    paragraph2: 'Breja Quiz | Happy Hour',
    uri: 'https://bitter-brewing-quiz.afuscella.vercel.app/',
    description: 'Do you really think you know everything about beers?, So come and join this trivial and try to not get drunk answering the questions.',
    image: 'images/beer.png',
  }, {
    id: 2,
    paragraph2: 'Tarde Rock',
    uri: 'https://play.google.com/store/apps/details?id=com.raketenstartdev.tarderock',
    description: 'Tarde Rock is an Android app that allows you to hear the newest brazilian garage bands.',
    image: 'images/rock.svg',
  }, {
    id: 3,
    paragraph2: 'Personal Blog',
    uri: 'https://arrayoutofindex.wordpress.com/',
    description: 'All about my activities, thoughts, ideas, and everything that happened around me.',
    image: 'images/blog.svg'
  }, {
    id: 4,
    paragraph2: 'Instalura',
    uri: 'https://instalura.oarthursilva.vercel.app/',
    description: 'Share moment and get connected with your friends.',
    image: 'images/instalura.svg'
  }]

  return (
    <ProjectsWrapper>

      <Text
        variant="title"
        tag="a"
        name="projects"
        color="primary.main"
      >
        Projects
      </Text>

      <Grid.Container>

        <Grid.Row>
          <Grid.Column
            value={{ xs: 12, md: 4 }}
            display="flex"
            alignItems="start"
            justifyContent="center"
            flexDirection="column"
          >

            <Text
              variant="paragraph2"
              tag="h1"
              color="tertiary.main"
            >
              Breja Quiz | Happy Hour
            </Text>

            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
            >
              Do you really think you know everything about beers?, So come and join this trivial and try to not get drunk answering the questions.
            </Text>

          </Grid.Column>

          <Grid.Column
            value={{ xs: 12, md: 4 }}
            display="flex"
            alignItems="start"
            justifyContent="center"
            flexDirection="column"
          >

            <Text
              variant="paragraph2"
              tag="h1"
              color="tertiary.main"
              textAlign={{ xs: 'center' }}
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
          </Grid.Column>

          <Grid.Column
            value={{ xs: 12, md: 4 }}
            display="flex"
            alignItems="start"
            justifyContent="center"
            flexDirection="column"
          >

            <Text
              variant="paragraph2"
              tag="h1"
              color="tertiary.main"
              textAlign={{ xs: 'center' }}
            >
              Personal Blog
            </Text>

            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
            >
              Share moment and get connected with your friends.
            </Text>
          </Grid.Column>

        </Grid.Row>
        <Grid.Row>

          <Grid.Column
            value={{ xs: 12, md: 6 }}
            display="flex"
            alignItems="start"
            justifyContent="center"
            flexDirection="column"
          >

            <Card
              description='All about my activities, thoughts, ideas, and everything that happened around me.'
              title='Personal Blog'
              uri='images/blog.svg'
            />

          </Grid.Column>

          <Grid.Column
            value={{ xs: 12, md: 6 }}
            display="flex"
            alignItems="start"
            justifyContent="center"
            flexDirection="column"
          >

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
          </Grid.Column>

        </Grid.Row>
      </Grid.Container>
    </ProjectsWrapper>
  );
}
