import { CHANGE_ACTIVE_PERSON } from "../actions/active-person-actions";

export const currentIndexActionCreator = (index) => {
    return {
        type: CHANGE_ACTIVE_PERSON,
        value: index,
    }
}