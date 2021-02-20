import React from 'react';

import { Box } from '@/components/foundation/layout/Container';
import { Cover } from '@/components/commons/Cover';
import { Grid } from '@/components/foundation/layout/Grid';

export default function Home() {
  return (
    <Box
      flex={1}
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Grid.Container>
        <Grid.Row>
          <Cover />
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
}
