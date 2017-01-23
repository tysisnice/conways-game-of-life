
import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  Simulate,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import {expect} from 'chai';

import {ExampleApp} from '../../src/components/ExampleApp';



describe('ExampleApp', () => {

  it('returns name prop as text', () => {
    const component = renderIntoDocument(
      <ExampleApp name='noodle' />
    );
    const div = scryRenderedDOMComponentsWithTag(component, 'div');

    expect(div[0].textContent).to.equal('hello noodle');
  });

});