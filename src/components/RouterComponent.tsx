import { NOTCH_SIZE } from 'common/constants';
import { isPWA } from 'common/isPWA';
import React from 'react';

// Root is the component for replacing the generated div by reach router
const RouterComponent: React.FC = ({ children }) => <div style={isPWA() ? { paddingTop: NOTCH_SIZE + 'px' } : {}}>{children}</div>;

export default RouterComponent;
