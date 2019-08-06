import 'react-native';
import React from 'react';
import App from '../App';
import { render } from 'react-native-testing-library';

jest.retryTimes(2);
it('renders correctly', () => {
  console.log('trying');
  const screen = render(<App />);
  expect(screen.queryByText("Hello!z")).not.toBeNull();
});
