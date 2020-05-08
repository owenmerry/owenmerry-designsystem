import React from 'react';
import PropTypes from 'prop-types';
import { TabsStyle } from './styles';

const Tabs = (props) => {
  const isActive = (name) => name === props.active;
  return (
    <TabsStyle>
      {props.items.map((item, index) => (
        <div key={index} onClick={() => props.tabClicked(item.name)} className={`tab ${isActive(item.name) && 'tab-active'}`}>{item.text}</div>
      ))}
    </TabsStyle>
  );
};

Tabs.propTypes = {
  items: PropTypes.array,
  active: PropTypes.string,
  tabClicked: PropTypes.func,
};

Tabs.defaultProps = {
};

export default Tabs;
