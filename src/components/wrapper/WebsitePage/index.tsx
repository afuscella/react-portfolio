import React, {
  createContext,
  useContext,
  useState,
} from 'react';

import { Box } from '@/components/foundation/layout/Container';
import { Meta } from '@/components/commons/Meta';
import { Modal } from '@/components/commons/Modal';
import { FormContact } from '@/components/pattern/FormContact';
import ThemeContext from '@/context/Theme';

export const WebsitePageContext = createContext({
  toggleModalContact: () => { },
});

export default function WebsitePageWrapper({
  children,
  pageBoxProps,
}) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { themeName } = useContext(ThemeContext);

  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalContact: () => {
          setIsContactModalOpen(!isContactModalOpen);
        },
      }}
    >
      <Meta />

      <Box
        flex={1}
        backgroundImage={`url(/images/background-${themeName}.svg)`}
        backgroundRepeat="repeat"
        backgroundPosition="center"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...pageBoxProps}
      >
        <Modal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
        >
          {(props) => (
            <FormContact props={props} />
          )}
        </Modal>

        {children}
      </Box>
    </WebsitePageContext.Provider>
  );
}
