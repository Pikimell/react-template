import { lazy } from 'react';

export default {
  Page1: lazy(() => import('./Page1/Page1')),
  Page2: lazy(() => import('./Page2/Page2')),
  Page3: lazy(() => import('./Page3/Page3')),
  Page4: lazy(() => import('./Page4/Page4')),
};
