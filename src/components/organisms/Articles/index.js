import React from 'react';
import PropTypes from 'prop-types';
import { ArticlesStyle } from './styles';

const Articles = props => {
  const articlesItems = [
    {title: 'feature 1', text: 'hg tvhgvhgv hv hv hgv  fc f vg vg vf ch vhu j ug jyg hv h vh vh v h fwrgwrg werg erwgwrg wrgrw gerw gwer g erwg wergewrg wer g erg  ergergergerw g ewr g ewrg wergerwg werg wer erg teyh gt y h uy y b gb egfb rg b'},
    {title: 'feature 2', text: 'jhv ghv gv gnv gv fb chg hfcht vgf ch gv htv hgv', featured: true},
    {title: 'feature 3', text: 'jhv ghv gv gnv gv fb chg hfcht vgf ch gv htv hgv'},
    {title: 'feature 3', text: 'jhv ghv gv gnv gv fb chg hfcht vgf ch gv htv hgv'},
  ];

  return (
    <ArticlesStyle>
      <div className='title'>
        <h2>Articles</h2>
        <p>jhbv hgv hgvhgv bg vbf v bgv gn</p>
      </div>
      <div className='articles'>
        {articlesItems.map((item, index) => (
          <div key={index} className={`article`}>
            <div className='image' />
            <div className='text'>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))
        }
      </div>
    </ArticlesStyle>);
};

Articles.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
  buttonLabel: PropTypes.string,
};

Articles.defaultProps = {};

export default Articles;
