import React from 'react';
import renderer from 'react-test-renderer';
import Apple from '../apple';

describe('Apple', () => {
  it('renders correctly', () => {
    const params = {
      className: 'iPhone',
      'data-key': 'value'
    };
    const appleComponent = renderer.create(
      <Apple { ...params }>
        <h1>Test</h1>
      </Apple>
    ).toJSON();

    expect(appleComponent).toMatchSnapshot();
  });
});
