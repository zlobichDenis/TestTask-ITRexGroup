import { combineReducers } from 'redux';
import { currentActivePersonReducer } from './current-active-person-reducer';
import { currentIndexDataReducer } from './current-index-data-reducer';
import { activeFilterReducer } from './active-filter-reducer';
import { activeFieldOfSortReducer } from './active-field-sort-reducer';
import { substringInSearch } from './substring-in-searc-reducer';

export const rootReducer = combineReducers({
    currentIndexOfData: currentIndexDataReducer,
    currentActivePerson: currentActivePersonReducer,
    activeFilter: activeFieldOfSortReducer,
    activeFieldOfSort: activeFilterReducer,
    substringInSearch: substringInSearch,
});