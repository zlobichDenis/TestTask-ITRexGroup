import { CHANGE_FIELD_SORT } from "../actions/field-sort-actions";

export const activeFieldOfSortReducer = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_FIELD_SORT:
            return action.value;
        default: 
            return state;
    }
};