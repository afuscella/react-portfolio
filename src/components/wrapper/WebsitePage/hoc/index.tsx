/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import WebsiteGlobalProvider from '../provider';
import WebsitePageWrapper from '..';

export function websitePageHOC(PageComponent, { pageWrapperProps }) {
  // eslint-disable-next-line no-undef
  return (props: JSX.IntrinsicAttributes) => (
    <WebsiteGlobalProvider>
      <WebsitePageWrapper {...pageWrapperProps}>
        <PageComponent {...props} />
      </WebsitePageWrapper>
    </WebsiteGlobalProvider>
  );
}
