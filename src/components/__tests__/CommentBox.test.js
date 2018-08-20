//! we need to decide which enzyme handler to use.  Static, Shallow, or Full DOM
//? PRobably would use Full DOM just to show how to use it, but for this case Shallow would probably be a better move.

//? Whenever doing a Full DOM test, you must unmount at the end of the tests.

import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
//! This is the redux HOC
import Root from 'Root';

let wrapped;
beforeEach( () => {
  wrapped = mount(<Root><CommentBox /></Root>)
});

//! make sure to unmount from DOM after each test.
afterEach(() => {
  wrapped.unmount();
})

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
})

//! describe is used to group together some tests with common code
describe('the text area', () => {

  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: {value: 'new comment'}
    })
    wrapped.update();
  })

  it('has a text area that users can type in', () => {
     //? find the textarea element
     //? simulate a change event on the element ('change')
     //? provide a fake event object
     //? force the component to re render
     expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
  });
  
  it('simulates a submit event and clears the text box', () => {
    //?find the form element
    //?simulate a submit event
    //?force a re render
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });

})


