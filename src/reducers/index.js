import counterReducer from './counter';
import loggedReducer from './islogged';
import {combineReducers} from 'redux';

const allResducers = combineReducers({
    counter : counterReducer,
    islogged : loggedReducer

})
export default allResducers;