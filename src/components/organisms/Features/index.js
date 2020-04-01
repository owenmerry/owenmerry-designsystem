import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../atoms/Icon';
import { FeaturesStyle } from './styles';

const Features = props => {
  const menuItems = [
    {title: 'feature 1', icon: 'FaPlus', text: 'hg tvhgvhgv hv hv hgv  fc f vg vg vf ch vh'},
    {title: 'feature 2', icon: 'FaPlus', text: 'jhv ghv gv gnv gv fb chg hfcht vgf ch gv htv hgv'},
    {title: 'feature 3', icon: 'FaPlus', text: 'jhv ghv gv gnv gv fb chg hfcht vgf ch gv htv hgv'},
    {title: 'feature 4', icon: 'FaPlus', text: 'jhv ghv gv gnv gv fb chg hfcht vgf ch gv htv hgv'},
  ];

  return (
    <FeaturesStyle>
      <div className='features'>
        {menuItems.map((item, index) => (
          <div key={index} className='feature'>
            <div className='icon'><Icon type={item.icon} /></div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))
        }
      </div>
    </FeaturesStyle>);
};

Features.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
  buttonLabel: PropTypes.string,
};

Features.defaultProps = {};

export default Features;
