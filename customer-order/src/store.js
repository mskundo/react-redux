import {createStore} from 'redux'
import {combineReducers} from 'redux'
import DisplayReducer from './reducers/DisplayReducer'

const reducer=combineReducers({
    DisplayReducer
});


const initialState={
    DisplayReducer:{customers:[]}
};

let store = createStore(reducer, initialState);
export default store;