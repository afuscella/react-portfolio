import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
} from 'react';

import { Modal } from '@/components/commons/Modal';
import { SEO, ISEO } from '@/components/commons/SEO';
import { Box } from '@/components/foundation/layout/Container';
import { FormContact } from '@/components/pattern/FormContact';

import ThemeContext from '@/context/Theme';

export const WebsitePageContext = createContext({
  toggleModalContact: () => { },
});

export interface IWebsitePageWrapper {
  children?: ReactNode | ReactNode[] | null;
  seoProps: ISEO;
}

export default function WebsitePageWrapper({
  children,
  pageBoxProps,
  seoProps,
}: IWebsitePageWrapper) {
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
      <SEO
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...seoProps}
      />

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

WebsitePageWrapper.defaultProps = {
  children: null,
};
