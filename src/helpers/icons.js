import React from 'react';

// font librarys
import * as faIcons from 'react-icons/fa';
import * as mdIcons from 'react-icons/md';

// svgs
import { ReactComponent as MenuDots } from '../images/svg/menu-dots.svg';

export const iconList = {
  'FaPlus': <faIcons.FaPlus />,
  'FaAdobe': <faIcons.FaAdobe />,
  'MdPrint': <mdIcons.MdPrint />,

  // simple name
  'close': <faIcons.FaTimes />,
  'close-circle': <faIcons.FaTimesCircle />,
  'add': <faIcons.FaPlus />,
  'menu': <faIcons.FaBars />,
  'home': <faIcons.FaHome />,
  'menu-dots': <MenuDots />,
};
