import React from 'react';
import PropTypes from 'prop-types';
import { TabsStyle } from './styles';
import { Wrapper } from '../../index';

const Tabs = (props) => {
  const isActive = (name) => name === props.active;
  return (
    <Wrapper>
      <TabsStyle>
        {props.items.map((item, index) => (
          <div key={index} onClick={() => props.tabClicked(item.name)} className={`tab ${isActive(item.name) && 'tab-active'}`}>{item.text}</div>
        ))}
      </TabsStyle>
    </Wrapper>
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
