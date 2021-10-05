import React from "react";
import PropTypes from 'prop-types';
import { Table } from "../table/table";
import { Filters } from "../filters/filters";
import { Search } from "../search/search";
import { TableButtons } from "../table-buttons/table-buttons";
import { ShowContainer } from "../show-container/show-container";
import { NotFound } from "../not-found/not-found";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;

    this.state = {
      currentIndexOfData: 0,
      currentActivePerson: null,
      activeFilter: 'NONE',
      activeFieldOfSort: {},
      substringInSearch: '',
  };

    this.onChangeActivePerson = this.onChangeActivePerson.bind(this);
    this.onChangeCurrentIndex = this.onChangeCurrentIndex.bind(this);
    this.onChangeActiveFilter = this.onChangeActiveFilter.bind(this);
    this.onChangeActiveFieldOfSort = this.onChangeActiveFieldOfSort.bind(this);
    this.onChangeSubstringInSearch = this.onChangeSubstringInSearch.bind(this);
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

  onChangeActivePerson(person) {
    this.setState({
      currentActivePerson: person,
    })
 }

  onChangeCurrentIndex(index, typeOfButton) {
    switch (typeOfButton) {
      case 'NEXT':
        this.setState(prevState => ({
          currentIndexOfData: prevState.currentIndexOfData + 1,
        }))
        break;

      case 'PREV':
        this.setState(prevState => ({
          currentIndexOfData: prevState.currentIndexOfData -1,
        }))
        break;

      default:
        this.setState({
          currentIndexOfData: index,
        })
    }

 }

  getTheAvailableStates(data) {
    let availableStates = new Set();
    data.forEach((person) => {
      availableStates.add(person.adress.state);
    })
    
    return availableStates
  }

  onChangeActiveFilter(activeFilter) {
    this.setState({
      activeFilter: activeFilter,
      currentIndexOfData: 0,
      activeFieldOfSort: {},
    })
  }

  onChangeActiveFieldOfSort(sortField) {
    this.setState({
      activeFieldOfSort: sortField,
      currentIndexOfData: 0,
    })
  }

  onChangeSubstringInSearch(string) {
    this.setState({
      substringInSearch: string,
      activeFieldOfSort: {},
      currentIndexOfData: 0,
    })
  }



  render() {
    const { data } = this.props;
    let { activeFilter, activeFieldOfSort, substringInSearch } = this.state;
    let sortedData = this.getSortedData(data, activeFieldOfSort);
    const showedPersons = this.prepareDataForRenderingByFilter(sortedData, activeFilter, substringInSearch);
    let availableStates = this.getTheAvailableStates(sortedData);
    const { currentIndexOfData, currentActivePerson } = this.state;

    if (!showedPersons) {
      return (
        <div className="App">
          <Search onChangeSubstringInSearch={this.onChangeSubstringInSearch}/>
          <NotFound />
        </div>
      );
    }

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

