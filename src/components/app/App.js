import React from "react";
import PropTypes from 'prop-types';
import Table from "../table/table";
import Filters from "../filters/filters";
import Search from "../search/search";
import TableButtons from "../table-buttons/table-buttons";
import ShowContainer from "../show-container/show-container";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;

    this.state = {
      currentIndexOfData: 0,
      currentActivePerson: null,
      activeFilter: 'NONE',
      showedPersons: null,
  };

    this._numberOfPersonsPerPage = 20;

    this.onChangeActivePerson = this.onChangeActivePerson.bind(this);
    this.onChangeCurrentIndex = this.onChangeCurrentIndex.bind(this);
    this.onChangeActiveFilter = this.onChangeActiveFilter.bind(this);
 }

  splitDataByPage(data) {
    let preparedData = [];
    const maxNumberOfPersonsPerPage = 20;

    (function sliceArr(firstIndex = 0, secondIndex = 20) {
      if (firstIndex === data.length) {
        return;
      }
      if (data.length <= maxNumberOfPersonsPerPage) {
        secondIndex = data.length;
        preparedData.push(data.slice(firstIndex, secondIndex));
        return;
      }
      preparedData.push(data.slice(firstIndex, secondIndex))
      firstIndex += maxNumberOfPersonsPerPage;
      secondIndex += maxNumberOfPersonsPerPage;
      return sliceArr(firstIndex, secondIndex);
    })();

    return preparedData;
  }

  prepareDataForRenderingByFilter(data, filter) {
    let preparedData
    if (filter === 'NONE') {
      preparedData = this.splitDataByPage(data);

      return preparedData;
    } else {
      let filteredData = data.filter((item) => item.adress.state === filter);
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
    })
  }

  render() {
    const { data } = this.props;
    let { showedPersons, activeFilter } = this.state;
    showedPersons = this.prepareDataForRenderingByFilter(data, activeFilter);
    const availableStates = this.getTheAvailableStates(data);
    const { currentIndexOfData, currentActivePerson } = this.state;

    return (
      <div className="App">
        <Search />
        <Filters onChangeActiveFilter={this.onChangeActiveFilter} availableStates={availableStates}/>
        <Table onChangeActivePerson={this.onChangeActivePerson} data={showedPersons[currentIndexOfData]}/>
        <TableButtons currentIndexOfData={currentIndexOfData} onChangeCurrentIndex={this.onChangeCurrentIndex} numberOfButtons={showedPersons.length}/>
        {currentActivePerson ? <ShowContainer person={currentActivePerson} /> : null }
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

