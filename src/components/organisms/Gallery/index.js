import React from 'react';
import PropTypes from 'prop-types';
import { GalleryStyle } from './styles';

const Gallery = props => {
  const galleryItems = [
    {title: 'feature 1', text: 'hg tvhgvhgv hv hv hgv  fc f vg vg vf ch vh'},
    {title: 'feature 2', text: 'jhv ghv gv gnv gv fb chg hfcht vgf ch gv htv hgv', featured: true},
    {title: 'feature 3', text: 'jhv ghv gv gnv gv fb chg hfcht vgf ch gv htv hgv'},
    {title: 'feature 4', text: 'jhv ghv gv gnv gv fb chg hfcht vgf ch gv htv hgv'},
    {title: 'feature 5', text: 'jhv ghv gv gnv gv fb chg hfcht vgf ch gv htv hgv'},
    {title: 'feature 6', text: 'jhv ghv gv gnv gv fb chg hfcht vgf ch gv htv hgv'},
  ];

  return (
    <GalleryStyle>
      <div className='title'>
        <h2>Gallery</h2>
        <p>jhbv hgv hgvhgv bg vbf v bgv gn</p>
      </div>
      <div className='images'>
        {galleryItems.map((item, index) => (
          <div key={index} className={`image`}>
            <div className='image-display' />
          </div>
        ))
        }
      </div>
    </GalleryStyle>);
};

Gallery.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
  buttonLabel: PropTypes.string,
};

Gallery.defaultProps = {};

export default Gallery;
