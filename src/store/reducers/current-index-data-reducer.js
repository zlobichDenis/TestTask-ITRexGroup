import { INCREMENT_CURRENT_INDEX, DECREMENT_CURRENT_INDEX, SET_CURRENT_INDEX } from "../actions/current-index-actions.js";

export const currentIndexDataReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT_CURRENT_INDEX:
            return state + action.value;
        case DECREMENT_CURRENT_INDEX:
            return state - action.value;
        case SET_CURRENT_INDEX: 
            return action.value;
        default: 
            return state;
    };
};