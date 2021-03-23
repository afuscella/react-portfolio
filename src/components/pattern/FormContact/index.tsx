import React from 'react';
import { Grid } from "@/components/foundation/layout/Grid";
import { Text } from "@/components/foundation/Text";
import { Box } from '@/components/foundation/layout/Container';

function FormContent() {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
    }}
    >
      <Text
        variant="title"
        tag="h1"
        color="secondary.main"
      >
        Entre em contato comigo
      </Text>
    </form>
  );
}

// eslint-disable-next-line react/prop-types
export function FormContact({ props }) {
  return (
    <Grid.Row
      flex={1}
      marginLeft={0}
      marginRight={0}
      justifyContent="flex-end"
    >
      <Grid.Column
        flex={1}
        display="flex"
        paddingRight={{ md: '0' }}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          flex={1}
          display="flex"
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          flexDirection="column"
          justifyContent="center"
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor="white"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
        >
          <FormContent />
        </Box>

      </Grid.Column>
    </Grid.Row>
  );
}
