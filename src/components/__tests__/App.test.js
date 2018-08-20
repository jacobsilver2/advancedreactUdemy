import React from 'react';
import { shallow } from 'enzyme';
//using absolute paths
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList'

//make a before each function to keep it DRY
let wrapped;
beforeEach( () => {
    wrapped = shallow(<App />);
})

it('shows a comment box', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
})
