import React from 'react';
import './Tabs.scss';

const TabPanel = ({ id, children, isActive }) => (
  <div role="tabpanel" aria-labelledby={id} style={isActive ? null : { display: 'none '}}>
    {children}
  </div>
)

export default TabPanel;
