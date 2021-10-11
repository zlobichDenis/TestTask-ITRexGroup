import { CHANGE_FIELD_SORT } from "../actions/field-sort-actions";


export const fieldSortActionCreator = (value) => {
    return {
        type: CHANGE_FIELD_SORT,
        value: value,
    }
};