import { CHANGE_ACTIVE_FILTER } from "../actions/filter-actions";

export const activeFilterReducer = (state = 'NONE', action) => {
    switch (action.type) {
        case CHANGE_ACTIVE_FILTER:
            return action.value;
        default: 
            return state;
    };
};