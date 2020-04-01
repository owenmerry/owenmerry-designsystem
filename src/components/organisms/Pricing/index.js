import React from 'react';
import PropTypes from 'prop-types';
import { PricingStyle } from './styles';

const Pricing = props => {
  const priceItems = [
    {title: 'feature 1', text: 'hg tvhgvhgv hv hv hgv  fc f vg vg vf ch vhu j ug jyg hv h vh vh v h fwrgwrg werg erwgwrg wrgrw gerw gwer g erwg wergewrg wer g erg  ergergergerw g ewr g ewrg wergerwg werg wer erg teyh gt y h uy y b gb egfb rg b'},
    {title: 'feature 2', text: 'jhv ghv gv gnv gv fb chg hfcht vgf ch gv htv hgv', featured: true},
    {title: 'feature 3', text: 'jhv ghv gv gnv gv fb chg hfcht vgf ch gv htv hgv'},
  ];

  return (
    <PricingStyle>
      <div className='title'>
        <h2>Prices</h2>
        <p>jhbv hgv hgvhgv bg vbf v bgv gn</p>
      </div>
      <div className='prices'>
        {priceItems.map((item, index) => (
          <div key={index} className={`price ${item.featured ? 'featured' : ''}`}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))
        }
      </div>
    </PricingStyle>);
};

Pricing.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
  buttonLabel: PropTypes.string,
};

Pricing.defaultProps = {};

export default Pricing;
