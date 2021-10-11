import React from "react";
import PropTypes from 'prop-types';
import { Table } from "../table/table";
import { Filters } from "../filters/filters";
import { Search } from "../search/search";
import { TableButtons } from "../table-buttons/table-buttons";
import { ShowContainer } from "../show-container/show-container";
import { NotFound } from "../not-found/not-found";
import { substringInSearchActionCreator } from "../../store/actionCreators/substring-search-action-creator";
import { activeFilterActionCreator } from "../../store/actionCreators/active-filter-action-creator";
import { fieldSortActionCreator } from "../../store/actionCreators/field-sort-action-creator";
import { currentIndexActionCreator } from "../../store/actionCreators/current-index-data-action-creator";
import { currentActivePersonActionCreator } from "../../store/actionCreators/current-active-person-action-creator";
import { SET_CURRENT_INDEX } from "../../store/actions/current-index-actions";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;

    let { onChangeSubstringInSearch, onChangeActiveFieldOfSort, onChangeActiveFilter, onChangeCurrentIndex, onChangeActivePerson } = this.props;


    this.onChangeActivePerson = onChangeActivePerson.bind(this);
    this.onChangeCurrentIndex = onChangeCurrentIndex.bind(this);
    this.onChangeActiveFilter = onChangeActiveFilter.bind(this);
    this.onChangeActiveFieldOfSort = onChangeActiveFieldOfSort.bind(this);
    this.onChangeSubstringInSearch = onChangeSubstringInSearch.bind(this);
 }

  splitDataByPage(data) {
    let preparedData = [];
    const maxNumberOfPersonsPerPage = 20;

    if (data.length >= 20) {
      let first = 0;
      data.forEach((item, index) => {
        if ((index + 1) % maxNumberOfPersonsPerPage === 0) {
          preparedData.push(data.slice(first, index + 1));
          first += 20
        } else if (first + 20 > data.length) {
          preparedData.push(data.slice(first));
        }
      })
      return preparedData
    } else {
      preparedData.push(data);
      return preparedData;
    }
  }

  getSortedData(data, sortField) {
    const { field, isDescending } = sortField;
    switch (field) {
      case 'id':
        if (isDescending) {
          return data.slice().sort((a, b) => b.id - a.id);
        }
        return data.slice().sort((a, b) => a.id - b.id);
      case 'firstName':
        if (isDescending) {
          return data.slice().sort((a, b) => b.firstName.localeCompare(a.firstName));
        }
        return data.slice().sort((a, b) => a.firstName.localeCompare(b.firstName));
      case 'lastName':
        if (isDescending) {
          return data.slice().sort((a, b) => b.lastName.localeCompare(a.lastName));
        }
        return data.slice().sort((a, b) => a.lastName.localeCompare(b.lastName));
      case 'email':
        if (isDescending) {
          return data.slice().sort((a, b) => b.email.localeCompare(a.email));
        }
        return data.slice().sort((a, b) => a.email.localeCompare(b.email));
      case 'phone':
        if (isDescending) {
          return data.slice().sort((a, b) => b.phone[1].localeCompare(a.phone[1]));
        }
        return data.slice().sort((a, b) => a.phone[1].localeCompare(b.phone[1]));
      case 'state': 
        if (isDescending) {
          return data.slice().sort((a, b) => b.adress.state.localeCompare(a.adress.state));
        }
        return data.slice().sort((a, b) => a.adress.state.localeCompare(b.adress.state));
      default:
        return data;
    }
  }

  prepareDataForRenderingByFilter(data, filter, substring) {
    let preparedData
    if (filter === 'NONE') {
      if (substring) {
        let dataWithSubstring = data.filter((person) => person.firstName.includes(substring));
        // return preparedData = dataWithSubstring.length > 0 ? this.splitDataByPage(dataWithSubstring) : this.splitDataByPage(data);
        return preparedData = dataWithSubstring.length > 0 ? this.splitDataByPage(dataWithSubstring) : null;
      }
      preparedData = this.splitDataByPage(data);
      return preparedData;
    } else {
      const filteredData = data.filter((item) => item.adress.state === filter);
        if (substring) {
          let dataWithSubstring = filteredData.filter((person) => person.firstName.includes(substring));
          return preparedData = dataWithSubstring.length > 0 ? this.splitDataByPage(dataWithSubstring) : null;
        }
      preparedData = this.splitDataByPage(filteredData)
      return preparedData;
    }
 }

  render() {
    const { data } = this.props;
    let { activeFilter, activeFieldOfSort, substringInSearch } = this.props;
    let sortedData = this.getSortedData(data, activeFieldOfSort);
    const showedPersons = this.prepareDataForRenderingByFilter(sortedData, activeFilter, substringInSearch);

    if (!showedPersons) {
      return (
        <div className="App">
          <Search onChangeSubstringInSearch={this.onChangeSubstringInSearch}/>
          <NotFound />
        </div>
      );
    }

    let availableStates = this.getTheAvailableStates(sortedData);
    const { currentIndexOfData, currentActivePerson } = this.props;

    return (
      <div className="App">
        <Search onChangeSubstringInSearch={this.onChangeSubstringInSearch}/>
        <Filters onChangeActiveFilter={this.onChangeActiveFilter} availableStates={availableStates}/>
        <Table onChangeActiveFieldOfSort={this.onChangeActiveFieldOfSort} activeFieldOfSort={activeFieldOfSort} onChangeActivePerson={this.onChangeActivePerson} data={showedPersons[currentIndexOfData]}/>
        <TableButtons currentIndexOfData={currentIndexOfData} onChangeCurrentIndex={this.onChangeCurrentIndex} numberOfButtons={showedPersons.length}/>
        {currentActivePerson ? <ShowContainer person={currentActivePerson} /> : null }
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    currentIndexOfData: state.currentIndexOfData,
    currentActivePerson: state.currentActivePerson,
    activeFilter: state.activeFilter,
    activeFieldOfSort: state.activeFieldOfSort,
    substringInSearch: state.substringInSearch,
  })
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onChangeSubstringInSearch: function(substring) {
      dispatch(substringInSearchActionCreator(substring));
      dispatch(fieldSortActionCreator({}));
      dispatch(activeFilterActionCreator('NONE'));
      dispatch(currentIndexActionCreator(SET_CURRENT_INDEX, 0));
    },
    onChangeActiveFilter: function(activeFilter) {
      dispatch(activeFilterActionCreator(activeFilter))
      dispatch(currentIndexActionCreator(SET_CURRENT_INDEX, 0));
      dispatch(fieldSortActionCreator({}));
    },
    onChangeActiveFieldOfSort: function(sortField) {
      dispatch(fieldSortActionCreator(sortField));
      dispatch(currentIndexActionCreator(SET_CURRENT_INDEX, 0));
    },
    onChangeCurrentIndex: function(typeOfButton, index) {
      dispatch(currentIndexActionCreator(typeOfButton, index))
    },
    onChangeActivePerson: function(person) {
      dispatch(currentActivePersonActionCreator(person))
    },
  }
};