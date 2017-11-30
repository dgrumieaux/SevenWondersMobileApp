import { combineReducers } from 'redux';
import { INCREMENT_COUNT, DECREMENT_COUNT } from '../actions/temp.actions';

const tempCountReducer = (state = 0, action) => { 
    switch (action.type) {
        case INCREMENT_COUNT: return state + 1;
        case DECREMENT_COUNT: return state - 1;
        default: return state;
    }
}

const rootReducer = combineReducers({
    count: tempCountReducer
});

export default rootReducer;

