/* eslint-disable import/no-unresolved */
import React, { useContext, useState, Suspense } from 'react';
import { Lottie } from '@crello/react-lottie';

import { Grid } from '@/components/foundation/layout/Grid';
import { Text } from '@/components/foundation/Text';
import { Box, BorderedBox } from '@/components/foundation/layout/Container';
import { TextField } from '@/components/form/TextField';
import { Button } from '@/components/commons/Button';
import { WebsitePageContext } from '@/components/wrapper/WebsitePage';

import successAnimation from '@/components/animations/success.json';
import errorAnimation from '@/components/animations/error.json';
import { Loader } from '@/components/commons/Loader';

const formState = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormClose({ onClose }) {
  const { isLoaderRunning } = useContext(WebsitePageContext);

  const isInputFieldDisabled = isLoaderRunning;

  return (
    <Box
      justifyContent="flex-end"
      display={{
        xs: 'none',
        md: 'flex',
      }}
    >
      <Button
        onClick={onClose}
        type="reset"
        disabled={isInputFieldDisabled}
        margin={{
          xs: 'auto',
          md: 'initial',
        }}
        display="block"
      >
        <Text
          variant="paragraph1"
          tag="span"
          color="quaternary.light"
        >
          Close [X]
        </Text>
      </Button>
    </Box>
  );
}

function FormContent() {
  const [messageInfo, setMessageInfo] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<string>(formState.DEFAULT);
  const { isLoaderRunning, toggleLoaderRunning, toggleModalContact } = useContext(WebsitePageContext);

  const isInputFieldDisabled = isLoaderRunning;

  function handleOnClose() {
    setMessageInfo({ name: '', email: '', message: '' });
    setSubmitStatus(formState.DEFAULT);
    setIsFormSubmitted(false);
    toggleModalContact();
  }

  function handleInputChange(e) {
    const fieldName = e.target.getAttribute('name');
    setMessageInfo({
      ...messageInfo,
      [fieldName]: e.target.value,
    });
  }

  const isFormInputValid = Boolean(messageInfo.name.length)
    && Boolean(messageInfo.email.length)
    && Boolean(messageInfo.message.length);

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      toggleLoaderRunning();
      setIsFormSubmitted(true);
      setSubmitStatus(formState.DEFAULT);

      // const messageDTO = {
      //   name: messageInfo.name,
      //   email: messageInfo.email,
      //   message: messageInfo.message,
      // };

      setSubmitStatus(formState.DONE);
    }}
    >
      <FormClose onClose={handleOnClose} />

      <Box>
        <Text
          variant="subTitle"
          tag="h1"
          color="secondary.main"
        >
          Send me a message
          </Text>

        <Text
          variant="paragraph1"
          tag="p"
          color="quaternary.main"
          marginBottom="32px"
        >
          Send me a direct message, I will do my best to respond to you as soon as possible.
        </Text>

        <TextField
          placeholder="Nome"
          disabled={isInputFieldDisabled}
          name="name"
          value={messageInfo.name}
          onChange={handleInputChange}
        />

        <TextField
          placeholder="E-mail"
          disabled={isInputFieldDisabled}
          name="email"
          value={messageInfo.email}
          onChange={handleInputChange}
        />

        <TextField
          placeholder="Mensagem"
          disabled={isInputFieldDisabled}
          name="message"
          value={messageInfo.message}
          onChange={handleInputChange}
        />

        <Button
          variant="primary.light"
          type="submit"
          disabled={isInputFieldDisabled}
          fullWidth
        >
          Enviar
        </Button>
      </Box>
    </form>
  );
}

// eslint-disable-next-line react/prop-types
export function FormContact({ props }) {
  const { isLoaderRunning } = useContext(WebsitePageContext);

  return (
    <Grid.Row
      flex={1}
      marginLeft={0}
      marginRight={0}
      justifyContent="center"
    >
      <Grid.Column
        flex={1}
        display="flex"
        alignItems="flex-end"
        paddingRight={{ md: '0' }}
        value={{ xs: 12, md: 10, lg: 6 }}
      >
        <BorderedBox
          flex={1}
          disabled={isLoaderRunning}
          display="flex"
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          flexDirection="column"
          justifyContent="center"
          backgroundColor="white"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
        >
          <Box
            flex={1}
            position="relative"
            alignItems="center"
            padding={{
              xs: '32px',
              md: '64px',
            }}
          >
            <Loader
              isRunning={isLoaderRunning}
            >
              <FormContent />
            </Loader>

          </Box>
        </BorderedBox>

      </Grid.Column>
    </Grid.Row >
  );
}
