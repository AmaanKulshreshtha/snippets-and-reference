
// sample async component that uses react lazy
// with retry UI for failed imports
// wrap the thing inside a <Suspense>

import React from 'react';
import Retry from 'ReactComponents/user-authentication/pages/Retry';

const AsyncComponent = path => {
  const factory = () =>
    import(/* webpackChunkName: "[request]" */
    /* webpackPrefetch: true */ `../${path}`);
  const Component = React.lazy(factory);
  Component.preload = factory;
  return Component;
};

export default AsyncComponent;
