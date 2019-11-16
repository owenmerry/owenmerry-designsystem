import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { MenuDynamicStyle } from './styles';

const MenuDynamic = props => (
  <MenuDynamicStyle>
    <div className="title top">General</div>

    <div className="link">
      <Link href="/components/buttons">
        <a className={props.section === 'buttons' ? 'selected' : ''}>Buttons</a>
      </Link>
    </div>

    <div className="link">
      <Link href="/components/typography">
        <a className={props.section === 'typography' ? 'selected' : ''}>Typography</a>
      </Link>
    </div>

    <div className="link">
      <Link href="/components/components">
        <a className={props.section === 'components' ? 'selected' : ''}>Components</a>
      </Link>
    </div>

    <div className="title top">Insurance</div>

    <div className="link">
      <Link href="/components/insurance-awn-cdw">
        <a className={props.section === 'insurance-awn-cdw' ? 'selected' : ''}>AWN CDW</a>
      </Link>
    </div>

    <div className="link">
      <Link href="/components/insurance-awn-excess">
        <a className={props.section === 'insurance-awn-excess' ? 'selected' : ''}>
          AWN Excess
        </a>
      </Link>
    </div>

    <div className="link">
      <Link href="/components/insurance-axa">
        <a className={props.section === 'insurance-axa' ? 'selected' : ''}>AXA</a>
      </Link>
    </div>

    <div className="title top">Modules</div>

    <div className="link">
      <Link href="/components/search-form">
        <a className={props.section === 'search-form' ? 'selected' : ''}>Search Form</a>
      </Link>
    </div>
  </MenuDynamicStyle>
);

MenuDynamic.propTypes = {
  section: PropTypes.string,
};

MenuDynamic.defaultProps = {};

export default MenuDynamic;
