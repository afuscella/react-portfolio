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
          Fechar [X]
        </Text>
      </Button>
    </Box>
  );
}

function FormContent() {
  const [messageInfo, setMessageInfo] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<string>(formState.DEFAULT);
  const { toggleModalContact } = useContext(WebsitePageContext);

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

  const isFormContentDisplay = formState.DEFAULT ? 'block' : 'none';

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      setIsFormSubmitted(true);
      setSubmitStatus(formState.DEFAULT);

      const messageDTO = {
        name: messageInfo.name,
        email: messageInfo.email,
        message: messageInfo.message,
      };

      setSubmitStatus(formState.DONE);
    }}
    >
      <FormClose onClose={handleOnClose} />

      {!isFormSubmitted && submitStatus === formState.DEFAULT && (
        <Box>
          <Text
            variant="subTitle"
            tag="h1"
            color="secondary.main"
          >
            Entre em contato comigo
          </Text>

          <Text
            variant="paragraph1"
            tag="p"
            color="quaternary.main"
            marginBottom="32px"
          >
            Envie uma mensagem diretamente para mim,
            vou fazer o possível pra te responder
            o mais breve possível.
          </Text>

          <div>
            <TextField
              placeholder="Nome"
              name="name"
              value={messageInfo.name}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <TextField
              placeholder="E-mail"
              name="email"
              value={messageInfo.email}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <TextField
              placeholder="Mensagem"
              name="message"
              value={messageInfo.message}
              onChange={handleInputChange}
            />
          </div>

          <Button
            variant="primary.light"
            type="submit"
            disabled={!isFormInputValid}
            fullWidth
          >
            Enviar
          </Button>
        </Box>
      )}

      {isFormSubmitted && submitStatus === formState.DONE && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            className="lottie-container basic"
            config={{ animationData: successAnimation, loop: false, autoplay: true }}
          />
        </Box>
      )}

      {isFormSubmitted && submitStatus === formState.ERROR && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            className="lottie-container basic"
            config={{ animationData: errorAnimation, loop: false, autoplay: true }}
          />
        </Box>
      )}

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
            <Loader>
              <FormContent />
            </Loader>

          </Box>
        </BorderedBox>

      </Grid.Column>
    </Grid.Row >
  );
}
