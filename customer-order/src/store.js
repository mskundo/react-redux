import {createStore} from 'redux'
import {combineReducers} from 'redux'
import DisplayReducer from './reducers/DisplayReducer'

const reducer=combineReducers({
    DisplayReducer
});


// const initialState={
//     DisplayReducer:{get_customer:null}
// };

const store = createStore(reducer);
export default store;