import React from 'react';
//full dom
import { mount } from 'enzyme'
import moxios from 'moxios'
import Root from 'Root';
import App from 'components/App'

beforeEach(() => {
  moxios.install()
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{name: "Fetched # 1"}, {name: "Fetched # 2"}]
  })

})

afterEach( () => {
  moxios.uninstall();
})

//! only when we invoke the done function passed in does jest consider the test to be done.
it('can fetch a list of comments and display them', (done) => { // attempt to render the entire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  )
  // find the 'fetchComments' button and click it
  wrapped.find('.fetch-comments').simulate('click');
  //introduce a tiny little pause
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(2);

    done();
    wrapped.unmount()
  });
  // expect to find a list of comments
})