import * as actionTypes from '../actions/current-index-actions';

export const currentIndexActionCreator = (type, value) => {
    switch (type) {
        case actionTypes.INCREMENT_CURRENT_INDEX || actionTypes.DECREMENT_CURRENT_INDEX: 
            return { type, value: 1};
        case actionTypes.SET_CURRENT_INDEX:
            return { type, value};
        default:
            return { type };
    }
}