import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

//! grouping tests for each type of action 
describe('saveComment', () => {

  it('has the correct type', () => {
    //! directly calling the action
    const action = saveComment();

    expect(action.type).toEqual(SAVE_COMMENT)
  });

  it('has the correct payload', () => {
    //! directly calling the action and passing in a dummy comment
    const action = saveComment('New Comment')
    expect(action.payload).toEqual('New Comment')
  }); 
});



