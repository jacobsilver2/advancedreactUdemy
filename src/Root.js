import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import reduxPromise from 'redux-promise';


//! by doing es6 object destructuring, we can set a default value to the props.  We need to do this because not every component which uses <Root> needs to send it this prop, so it needs to default to something, and not UNDEFINED.


export default ({children, initialState = {}}) => {

  const store = createStore(
    reducers, 
    initialState, 
    applyMiddleware(reduxPromise) 
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}