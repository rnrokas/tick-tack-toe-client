import React from 'react';
import ReactDom from 'react-dom';
import Square from '../Square';
import { isTSAnyKeyword } from '@babel/types';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<Square></Square>, div);
});
