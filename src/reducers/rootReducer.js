import navReducer from './navReducer';
import { combineReducers } from 'redux';
import { INCREMENT_COUNT, DECREMENT_COUNT, 
    SHOW_PLAYER_ENTRY_MODAL, HIDE_PLAYER_ENTRY_MODAL } from '../actions/temp.actions';

const tempCountReducer = (state = 0, action) => { 
    switch (action.type) {
        case INCREMENT_COUNT:   return state + 1;
        case DECREMENT_COUNT:   return state - 1;
        default:                return state;
    }
}

const tempPlayerEntryReducer = ( state = true, action) => {
    switch (action.type) {
        case SHOW_PLAYER_ENTRY_MODAL: return true;
        case HIDE_PLAYER_ENTRY_MODAL: return false;
    }

    return false;
}

const rootReducer = combineReducers({
    count: tempCountReducer,
    nav: navReducer,
    playerEntryVisibility: tempPlayerEntryReducer
});

export default rootReducer;

