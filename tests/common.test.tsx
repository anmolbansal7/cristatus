import 'jest-canvas-mock'; // Import this first

import * as React from 'react';
import { render } from '@testing-library/react';

import { MyCounter } from '../src';

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<MyCounter />);
  });
});
