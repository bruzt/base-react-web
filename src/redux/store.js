import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import themeReducers from './reducers/themeReducers';

const reducers = combineReducers({

    theme : themeReducers

});

export default createStore(reducers, applyMiddleware(thunk));