import * as actionTypes from '../actions/current-index-actions';

export const currentIndexActionCreator = (type, value) => {
    switch (type) {
        case actionTypes.INCREMENT_CURRENT_INDEX: 
            return { type: type, value: value};
        case actionTypes.DECREMENT_CURRENT_INDEX:
            return { type: type, value: value};
        case actionTypes.SET_CURRENT_INDEX:
            return { type: type, value: value};
        default:
            return { type: type, value: 0 };
    }
}